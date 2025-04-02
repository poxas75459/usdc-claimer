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
    "3WVg3ZsStE1JSHXDJRyrop2RHfeUg33JJMrV46qPXsn63yYNmJMMELTMDJ6QYFGKVZmMxiXC5NnkJXRN3Bh3ypKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gR6TA7MFQw8ZaMH1mQGM1UXJYSHzXRp7RVFGpf4YDba8ocAvmegeVB8MkqAkbBUeT9BRARDMVbfhqGT3hKuypDr",
  "key1": "NM2EV6Se2EWyRn8YLhjPnJW5euk4dbffs2qtPvSvWH76e9oPWN6pXEPiJJBTmRXQV7bLJqjT7SQi1MECwJPdxA6",
  "key2": "SACgPoBoFfm3i4mJmanhYorFtofJZXyn2uVe55jMKDSEHFzWj2WZ6r1TiScsfvWh9Ecm2MqCELHuEGH1hVbq3dk",
  "key3": "5deNiDCrFBDyiW9TjWEp7yehGdEW7ChJtLPvwk8WfugGQbhoqfM9txF8qpbuS1ibV8MxHyY16q8rq7reW8T5jKxU",
  "key4": "5bGgBE1HzkYCTqoRfzozXBUcB8PMKVr3NtWyxCpFg8uvr4RgxX7jdQ8y9UaZUQtUCrVfYSE5NRPyGaSwpo1GsfTo",
  "key5": "2hhBvqhFZcF4M4Fc6RCCk3czCJD3HJyPdW8SVqLQQy1WcqJuhWwRtXj7Gc6LJapdi7d7d2bbyaVPT3PGaitUvA85",
  "key6": "3mG4jvykwP7j6Dw5uavG9t2askN2uz9bbWr2uNgCtxmhdNYanz6KbjQeKVUEZLTHSWRHLmPW3eJuSeEgjc8jubyY",
  "key7": "23btZadZhMLxtzXEWL44Dv1Y284eeUuswE2P2EPmk4sHxksNmATVXxwVBNDzXr8QcPhbqAFX2Q5BmzU9snF6jcAb",
  "key8": "5mDmnYMsW19SVuctBYuWNuxUUP7wkUm4FTaajdDujSiKD5qdhKAVRQWFhzZUmxfmmT3rP5i5x3NFtVNEndw5xSVS",
  "key9": "WffHYaPiMbBJNv5Ly5Xz6gmry8f4C9jKNb4rVvMrVfTevN5W4XMy5KCqisWbjb1y8BEkp3njrbsQxCS9DH5fibX",
  "key10": "3NyoFtUBsnqbEgrJW1JBfjiEsbw6CpAUr7bk6fYcriD49m8XC3kDhxVo7aqmyridv1XSc8zEw93TzRN5ebxvPTPD",
  "key11": "9qydedJYawGoLcw9DXoyn4snYGqgFhdsg1dd64wLgX1tK5mGBWVdrdNXCSaqX6k4GWy41PVCpKsysSif7SynzfM",
  "key12": "4oV7g6um7UWPQhmhnNkKFWU1QgcN8ZCK5md8wsMCN5mXLCYpaAj6NdoXUAEpbeNbnGhYctGeXznWq7HDQ85y2P4j",
  "key13": "277jB6cjgGmHVnb2KtxAa3BNK5gEkJf1phpXzxeCJCx6pDYPzZDfULBHD8YA7rcyq8yi8qx74xzL777QfSddUGgg",
  "key14": "5rzVG173e8wuzygD2VSLQQjnhipaLVi6nNrSjXzWfKzzTsqQwK2ZHj6frYcFd9sHJRA783megwjrjvs84erPMEbM",
  "key15": "Shijfq1JbvsSotFxTX5G2QwdxciZaMzxW5rxyCSia6ZVSksZQDjiznAY61F1n45aBfCNPnRAJXTGDWBGrukPQsM",
  "key16": "4yQfXV9g2Y8oT21FryrqepVvnSSo2MCeQbLZD5PTZyWWVzv4rCrTuLzQ3sSWwcHwupzSw5sJR1THk8UvtnovUxLq",
  "key17": "4Nm5t9FW8TBfctwVkPREq3eDN4owLKNNbBhd1q2fzqYWzFynrrZdEUqjxVTrsTcH8XQRjdB4vLppLA8cho11UPX1",
  "key18": "h559tqdty11g3ueu3yWRW8VqhnifaZPUmYUBjLHnEucykvD1Sd62QuECKLjeGqZY5biFPVHnEaHfP6z3Y5W9Wir",
  "key19": "3N3LucRkk1pHbsGzspmY7PkADfepaR54q7DHUQsx99CWjSqYxjNKMhX93bimGAmp36FQGVnBPGPgya5eC1mwewd1",
  "key20": "5gqLNasDfzPQkzbhg63a292YqVXr7D77HYtNjtxSsua8b6ummERU68jr3qpqJ12CK3ZR4HkSdSDMfPn7Mhr4YXhj",
  "key21": "2JUk6tT1K6aVRiqAMGndUu3Fx7xiymHgPUKvH7QPx4NtqxedGrcbvDH1g3yJdhsSx3svGKzDjFzZjePhYYhStgoG",
  "key22": "A2LyE8GyZ5uaNF4LUqGnXx4i7FschZ734e6Ykip2S9VAVfWFFt4jpCrqBw8vrqe8t3nDwehR1zRZEZMiHG9xdNP",
  "key23": "5qDHbXUFA7njnFVEwNF1J7cmJszAgLNukHUvuWfmedKXdNdH8B897swi5Q6v3C6fU6YzsA5CSDDF99rTuAx4F6Jh",
  "key24": "5i2bmNd7q8mDxM6TNFyQS8YDK3CUDACBVAoFtaeiNuK9DGKbag3BpDExw44eU6Di6y6PfPkVA2Js9o5yJVAJSbvy",
  "key25": "3eQW5DnfuwVnWH9cvfSDGdAx5xDLLmrHdDEuxFYsHFhqqQRP7s2zq6FftNeGd22v6pJ8wjwSwk5B9QJLhrXMd1Wq",
  "key26": "5quWSDszBQXaZAyfpeW4J3A7zX1KocPZrB9zENow3D4mjKN6ACfK8JjwLgknJ3bjbDnLDehqTp3PzwGrfWDUAYa6",
  "key27": "MdE8fejH1Z3AuT5kaBGZiRzwwqp4nLD88PovhiWnzdnNWzmCPR92Ai1niXvZQtSKQWcnPp23HYDNWjZ6EaCVRsu",
  "key28": "Ez2tTz2DCa4kcdqfDH1k6pYoyXZ8KQJvAt93dbY5RLCqxwQi6J3ZtC4tvUrLTf13qyi8PZ4emrKehT9t3sUEdL8",
  "key29": "taj4vGFQXqAkj31wX9Dy6FfU6C61vVTNA1gVhQXboYyMNL66FXv6CwFio2kqUGYhiyFWfMGw6DYPVxkveJ3EuAL",
  "key30": "5Jrxdx6qciyMtXnuJ9WcjA5C743Yq4ygzaHNU5hz8MMHLKBUN7jENz2zkwBGGXqtsY5uQefUqYZtutvj5HKRqxzC",
  "key31": "jJMfL3t1PdqCGfgXHH37UWbiy3NRvhLFA9oFSJN9qfSJUjb31k5kj22jup7wB7shgr5GibWf1EaAoQ9iJcqqtfE",
  "key32": "5UF1WDcDdV4k9xyUfDSwG1LTYqS84WUrt7Nde7DdYQtSWHusWQpybmLPbupwYFBYdXs9JfJyPLogrKNuhcfme92c",
  "key33": "384yasso2iDRsEwvGUiRK3impcb5VX4pk7yGye3Mm1N9PagStyfBj6vBbgYMRk3mUxwUfaECsuNEvq9U8tV9xo3u",
  "key34": "3PmngE881TxaU7uTN1hXnwz32i1B3G8dDuAN3w2TqANfFv54jxcfGM63F9vruvKmcS8qdFRu6tDTpkaza5pYMf9n",
  "key35": "24M2xgmuLhBbgxeT8bTmjW8GQJq61V6Vkc1XoiS33RM2xdcToP9qW3uG3ttan2QWUb3bWfJDb6a31EjseYChV1Mp",
  "key36": "2a5j4F6cX3bPKE8BSLyyQAv6Gupa6GV3Vy842N6ynLCeMoz9MfpH3oKWuZcTAsjNs3GcS6t9LCHPyK7tTm7Ct3Mv",
  "key37": "5d96SDVE7zE3iuhxKDS7hy2fhaffVYPHXu5yU6mJGwCB31QN4uiPcN2AtCZHq433a8abteetfZDad7HpfFGePF9h",
  "key38": "5oj7c3qcHj2f9LQjaCqcSdmwmhdGVmL5h9dYputaATYtuC8G5HjEHBJSYsTjm5bnEss1gwQQ5xhT8zW78DTt4AkP",
  "key39": "2LeTCFhKpLKiCXSuaBkK7y8uyfhBW1Zm6uziKSb4shQquVxX3eBHTv9AwvWcfEvSMbjC6oPxjtnFHP57T9gLtgW8",
  "key40": "3GZpCMNw4nGWMWjf8jDigwkWCpeAAHtpPSfr4a4JeD3QBAvHkGucqLfx2t3yhghFgJE7MEJD3d37gUcEXAetB68J",
  "key41": "5T2hS8h3ghVwoYkYZwf7WbUMqPwn3yjNHpYg4efNvmCnbGVXycuWkfDHdgjJmpMu6KzmCb4T9MSU46rqeCDdZx9Z",
  "key42": "3inqbzQmf8Fr5JQLQ3CwkPzsuQ4oKEDKFKeHh8cnXSRkUPEz6UwoszFR3sKYM39zLsAKNXdf1xNe7RNMF1R4ZXBp",
  "key43": "JVbnTQvm8oHvTrPABRZ3samcpHSKKTJmvcuRg4Aidc9gyQdboVTPDGsFBjgPCugeVjZxttvuhSaSEU6FenTAXpr",
  "key44": "5vXBzfN1ze4MArYDyEqvXrzT5VpHB4LCa42wn1ckG2qJsfNn8jevu8MTHx7vDg2iehkDhKcuYhYT8DNHv1TeqSKk",
  "key45": "3GocVjsh8uAiFDG1vtXGGUsz6Maiz2tsuijyhMY9DnTPkJ1MeV5ntL4KtcmvsoZD9PEAVY2Hs7PQsQyPW3x3vsUA"
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
