/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5F4fyznsHvNnWQEyWn1xRNR9LHkUNwZ7GV1nhkc7MUB6fpDPGeWguZ3wvtWwJ8UV2JjoztxVatAQNKsUZCFRAdTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TpcVPTkaf9HcJ3DYiMziR5RP4PudknVHYcoeJx5DrDrs6MVoLpUUbXooiMNyPArAzjMCtwCCkUVbXZ98uqgG55G",
  "key1": "4vs4fh3APWhBVLPksdF7obbSeZAPnuYcRDYDpvjrxPqDgw4dL2mJigRSRXAiCmGvFJN6rwHJ9UHNhDfp6xdWFA4n",
  "key2": "5DScywH3A6CkDfUEhyhLu5iiVdCrDfDyV9PRyTpHbu89XqYZrgUVJt84Y4Xn847jykE3BkY4XUMg3YHWKGDjg9Z",
  "key3": "3dnJVT9pqAVmq2oRXkPrEb6b7ZwLHTdjxcgMcH2xhMASaRCzugkTUR4WisacZeSEFkMDWzBQyPf5nia29u2qMaER",
  "key4": "4pLoyrbzgKfsReDeQwjrTHP7XSdpkcNiKhDAABLp2qC985rX9dwK17dsZvaqhbz6cwjwGuoJuELNPgufzTZeFSkz",
  "key5": "a3HJEXeYRJqYUTZZ8CfFE2beMAqb4zbXU8hY5J1a5XbwNV23QD1Gr1AbgpMe9E3bVnb5T4q6V8LLUgFXxY6Dja8",
  "key6": "94gh1Vuxu3u5DhYNph3Rmvr1uZ1p8pmijcJh2JMZQ8ezshWZUCsF4NBXKnBjiQZAdPnSd9ixBYYyAtt6eAw1Kw7",
  "key7": "24sV5m2GZiij7VaxcV3LUYfTN2SGLQxpbQJziL2pbeTdohio9xVZkvD3Q1oBrL7krftVNAwZ589aLpj4sQJA3Qpr",
  "key8": "5K8Ls7QUy9yTNki5oD26Nxfgzhc5XirNxVy6Qb28bEhYLtAfRjYrd9E5dKpvCpRcNKkEmKimejwBALPXpKHWmReq",
  "key9": "28AfUPbkdhdrkdwPoe1pJTqd2tmijheNjG9MFcz5PiQt9P6cDaKvSSPFu9Z9qPU5se69vZqypXBZgkeT4o2nSThs",
  "key10": "3zeueCrnnihCLcKSuMdueSyYgAzvbuwMQijAgNN9QR5n1FGMg2p64u7EyzLaTk5An7zkikqzMHPvhMCwbJCU14cJ",
  "key11": "35D9f7LvR2yseNdLqndRZ5n9koSEZBbdTE5cswGsTD2W46mwfAFAyUuAYzDAehhPqtGyWAYFoRmgz6Aj4CcVJGjT",
  "key12": "NhryTSvhz4fD3xfT1NebwRMs2fVW4SoRUDW7A1jGzsaomussxVxYHC73sk1pw4xK8tozqFsG5iGWKrPSWrmF8Rm",
  "key13": "PMxQGqiF2YjRKVthuTea5yE3Q4fwSG1dGV7GyDwcjXw7njitP1eedmwfdQ6NDp9LXAUTSoHvVSBYSaqbdgz28oG",
  "key14": "xJiefmHV5FuvqFZrned5You2usK9T2xCftt8kh7S7qYpCtcthpCnobahg7e6gvSyqssakxsuHSHVFeA7TsfyLCu",
  "key15": "4ov7wMTCBCUb3ohci9fGXDhoR4JAmmsEZRrRfsXfHuPAjr9zHSgQEi1zeHnkX3mHx4GvoSRuJjfyR4GusJdsmAzK",
  "key16": "4PwmJgEoRZKwADBYgVPaaSdpjeevKhc8PKfnd2uBa9qkcY4WRvY6jDYRTEz25XmnkMwPsimt1W4AxmciByBAxYPj",
  "key17": "4uk3oGTyso6wz4jWDotv4q2MNkReqvrvZBzUz2Eh6uVPVsKuYrCwpatjzJRRoAirH91B9LP7Pw4gYaj6SzNM3SJ1",
  "key18": "4BsWBkvQK8PEjrjU1g8JF9MEF7PCUpeCaEJto6emDnNwHmwZ9D1GSq94jY45xYcemuamUPVw5GvFtonpShXph5A1",
  "key19": "5ahVMA8UPzJwCwuZgHZ8s6esqtkEKxnu2p6Jte3d654SyTsqRyPKJVpFWnGZcWGpj2a8CxqX9fJWgg8wLBxwffeY",
  "key20": "2yXaQtqgmjnKD96khYivchjVX4SceNC76iK7Gb6REUsEtHn4MtmPK7YwphHJ6P4XRwobSLqktXe3piNH8neA4Tw5",
  "key21": "3u2TKaCaRXY7vSNdyBdHp261y6s8sNrK9Mj6m1psKCRYcavsdXpUPh6NNdihEZ5VBFbT4STApzE1tNtCL4earvbR",
  "key22": "2hm2vybCsZGmE3aJ7eyYH5Nhw5FNZQvBhU7zbXh28QiwNBxyRGuzkgzke7HJ2PQRMx1xWyJM8XHGmkooqtA6abpp",
  "key23": "26V5caQzMkGaEqNwYf1ETxJPor332iUfUftMEQkxRWFAMb8xbQfeDdu2JKgJKm5uj5Bx5hJ4ug37oXWjgBrvTr51",
  "key24": "55A56hsUcXPsYhkzATqYvmgqfQvqo6Gcivu6QsYsdi4CYftvRXLsn1ANZ3rpjuGALVp2rrNKyyBE61zw6wcwNi5n",
  "key25": "2JmDMMLbYcdjqYWBaYxhwN3jArQtrSBw4XGye1VbR8qK4xApJfbnxUDBQT7N7AMGrMmfHQe1qUrQ2o58kny1cTv2",
  "key26": "TSLngvw3cKYmCGVqpC47kJrk4XXcbNasYBBALRJcYJSoLtYW2aSNzRfwRbk1PqdSqH6SprseirnaC1pGHq1SniP",
  "key27": "2MA9WRMzB3pu5XBXCRCAfrrwbGcRA7FvKLLKgepUNJB7NYzkx6o7Lsm1g9ti8Lqk7Zsg1Ma5LRm9KwDCcyBVQiWv",
  "key28": "5K9zETM9FRU6HE7CV2hJFdKHFnWmmkSvxWbcdvEqJzLnECn56KLNdnyFE7m6kLxe1FEiiYd6pgM7qggZtPN5FbQE",
  "key29": "2hSo18oQbzqqXZ83ofpAc3nrV367jTGXCHkotrzPKB9uw4CBJTcQ6D27Yebg3p5CCfH8Z8J7a7zKeicDd3yNgZSB",
  "key30": "5Q8aZbYiqu7g79RKqn1DnpnbGmdN8x9aXfSdLaMhhW4EVBJTcXHsjsU9vJUokDUacGa4DXkc4yb9EZ5SXr6cUxeP",
  "key31": "3WBo6xc6HXhuc4AKpH8mspnCj982iAzN2qp8uyK1YsMND1MCsSQ9Eu36EWBsLbxrDrVLqog57vm1UpgsiDC2RT8v",
  "key32": "34ftU86FfPGvhYk6P4psKYu9aLaTBZs1rm6c5xejfCR67Dg6FNBA9gDZJNckCVfFJJe5V2bASxLBZeooxLnxwBCi",
  "key33": "AZW7NaoT1SbS3eF9G9EjRTDY65keJ4WQRFxAbmDcirbX71U5wpBVaPX79WN5uAB8nx6HZViXXNj1eVZx9dBxDA7",
  "key34": "3i42ovrffsX9CZ4tcGVh53KAFL78rooCogZba6vZB2Jf4VtK73ceFdoPPFzQoYy1FLj8ejKH9STYsLhwKRhy5NLw",
  "key35": "4wiE2Ur6JkGbxXEAr82DTXCy1z8Vg11xKqty6qBcs2yA9WWLwMNbPuzvE7VBdaEL2a4LAdTormb68tHhdt1yBvXi",
  "key36": "5ZZm4uqwJM2ViGp7h3NrDk7LS79BVZRip5wptyRDfjejTpsUPucGJtrRgdYzQDSSri3Ngeits9kKRyzkTNnmaCxi",
  "key37": "45XzoMuZBLgL1VhGSXFYdoHW4vxi3KWHv119LWTgRoAfi5qeYdm7JtesqTWvdXcJ2gUvubazEpcqPpm79z6XGcM2",
  "key38": "4mYQj2mTMHUWEDV5DvjQAUiTbu4VkiPST1DH9e7tXSPd83NWwMrZGbvDQnVrDSe4kMx3XufCfn7EVZtFxCgYr8D2",
  "key39": "4qmqTM5dR4yWTC6iWwpwsrUHg2WHL7J3jRZyoFmz9NyUpMR4uYMnm69bXYJLjE7ddbcR5ytAspG2RsvFbnvBeUc6",
  "key40": "5Qqz8XgRsaSqWgCmXECpQ2gHE3UrmMZtEZiZbpBsNMtiHhcocaCY66ax8rhsdY5R17rcMJZtuu6dbNbrQ3zN3eEF",
  "key41": "5VgESfnW5zb8h2X5x5irHPb5f6M9Enend72M4oDfe6nT4yHbBFdDZKwjSJ8VeeRMhgLRnzq3QEBBCgjqnsWWqcPf",
  "key42": "3NsRvYuZXq2NCfDZMxr98krMnkEWBMhCEGU2PNMfFmYuQGiV9XfCCwHJjdmWZ4wt4pL1wucQFAa11R8qqcCLo7vx",
  "key43": "2m6bnJjZEYmdcD5eEczGjJEX1EGpfrJpp6PaumannR88P97EN5xGGA83DumtJH6eM1S1M61Py7d7ydDKvGfPkVYd",
  "key44": "4owweHbWZQNL2ottrcbbLgupTUCqYShaxa43KJ5bEs6841VuHRLhyhaXMxeNCH8UeogjUVp6UG2XoSTLwNsy8EYT",
  "key45": "2SQ9PZL2QVPFPxvZehv84c54HcoJgBkVqsUTEgG61rnikZitMMV4JkZ27zSWMmYQMqAPbJVerKQsA94CULR4cEdb",
  "key46": "5UDR4XJ1xdLUmfigUs19A5VXTgsTvzfDpBX9HwjvYptJUqVhNKN4Ma3vXkRQxVrRv6BgRHh9ib1nGp4siri5Scri"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
