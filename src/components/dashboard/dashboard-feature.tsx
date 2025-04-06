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
    "5AomjDBuL4yxohuQPX5WSS7iJLH7qe5Q6AcUWvHkPUs6VUgMSscqb3ixKN2tn7u7uYLUu2qknLJitBQKTm3mMBL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WpoUyGdSRdbdmP9yHdnNVxbJ9WyGPr7NkWpwvh1ZsHjg8zcsu1dHYWB9cksd66f4jXtvjVRczSraXGyvbQ8STsa",
  "key1": "2bbgMrrzwuWqjvvaU8nxJWx6UajpWVAbUXtDPPoQFgSCNxDZA3zmKoRt7fwu4iL5u1dJKetUMydxMeYnSjmmUaWY",
  "key2": "5R827KQCeJbZ8XM1ZkBrY2sUhDDwS7VmT826Shcboreg4VnfS57wSoC1HmymkYPFxMvACetiab8FHiMSpTi7oc6G",
  "key3": "62AT8YY5vgxasoRxAuxugD9CbRM4Z4iqQ4NxTgtVq9LYTFXn9c4L18pMrtXsFVaWypsuK4uYLLVmGRybAugrsKng",
  "key4": "4H3byAEKvQWThMSrEfiEugSrXzAXpaVve1LH4DDqbsNJWQBshJbHV8xtJDPwLJucGaV1Bnb2LZvfUPhh4Tt2Z3Bp",
  "key5": "4YkbuVPbUPDJuVfpaC9M9GjbEHZHe6NLKaGjmSnQFg3KHWpGDQDqecquJLNKvSjfb9euoBRcymbHzHZ1oC3KqBqT",
  "key6": "4hojAx1ra1whWA8ihJadENWGKE7tSy74eSThGbytPXNzdJqLs71ogoiuLewsgaPqECShc9hnLhMnqf4koL1nRWre",
  "key7": "48oKtGYv41aJ2xVt1VqwvXrZMZEV9P6TbyM9nrHr3eK7ydzKeXiCPBqQqmmGGhSB7DsvpiMf5QMnLwA9teYzeQKh",
  "key8": "3RLd4crZNq3PKha8K1Me8BWMyQfctHaiqkvZ94juDATaY51vXS5VeRbXSDV68WcCRqbmQDwqz726gjodxKhkZKEk",
  "key9": "3q5rJ53C9PGba2T1hYhiaBaPw1pz3wHJkb4FwcuUtTdseFGPQoid73AF4kU7G6YksYK9MVUMojkMXktzEr89yAPi",
  "key10": "8RrCxLfXRUV4aBqReevyZ3j4ZskrPaRonvn4BZewv3Ub4e2i5cjZceSzD6mKJ7sewCMbQ8o2T59bbtPgXJ8h5Wc",
  "key11": "4wLEqnQG5ADPURJZKujPayAABifAyDDDRBVPAMcoqxnKbxCYuJG8gxirKiGWSSdEVMTPTxJqBuAmicqctNKj3JV4",
  "key12": "5A9JGDw5v9XB3zEf51A8AvTUun296c83a2XJy4kNqydEYG78eWh4QKWHrFZdkXz3dUWvHeHphoGT2CyLBFuuk1f3",
  "key13": "557N2p5RqJd77nrjYMeUL1TmTjmfhC3sdKjLKbUirFieMbYzMLsjeEUBGNPaMGVxuwhCaHmDCsCN75jRzZi3XYKf",
  "key14": "58eEWuHjgisCD7YvYQFscEXDBhuGFTiTdUfnQv5cRrS9FthNWgwN6ZYYfMRJxKxEdnepSAax84mLbzs6giEbGoeU",
  "key15": "5FXCYnnZwmsZJe7MUdBxj2k21bUu4p4VkQD5zgnUm9aitSnB8ZNimrsgMmQViNUDQnWiWx3Kck3j36mxhW62WWcS",
  "key16": "5vZJXFEd5sNDg9BNXZkLEZkCMgKzQV4qgho2Zm5n9b5Yr9HpfooRU7JPxp3kmbhksjjzFVyM6D9fgnRpumD9grFt",
  "key17": "43aXMLeWJHGha14YYzrfuouuExx9rrx4oVJ48kcYaHpgBfgCFACpVFwQqEkDU1jccWoDumH3B5ybS5F3FvCWyhDX",
  "key18": "BchEiz4CcsQqjGdx2KoMPxNp21JE69m9zzgRcAj1aXrqTiaNAPBcxJgDfQGc94Joy48y9wKZvrRAeeCkjEdgwMX",
  "key19": "5Mi8NDbxzYDmFSzqLxwdiiMUuD3oQEpuxfacNM5QRs8eK1hJNnZhANrmdSos5ucgg2UsCAJJNyQCPiSWh4xseFLt",
  "key20": "5peQoMozduHk7LtumexxYrwGB5XKvWrV6Q6495qCgzzy5WJdojAuEoiC7keoMfvdw18NoV7rtnUE9xKrbJe5JkJ2",
  "key21": "323tM3xaG4Pa9ZHkmYoKpdPYHGXUxaRpr7y9xfJydi97iRKx346eb8TscGV7Vq1EqBpQULncNn2PeUPtRZoYtV1u",
  "key22": "5uDjxnveYFeMr4MNYzuKUXRkm1JnYx4qdLcxVr2zYKQYBjxwiJuQZSUEamPAsxFZndxrmie1s2w1mhbC2EhdMgTN",
  "key23": "36GBRJGmqSN6xZ6UJ6as4YPac1noxyGhFoBM6tf3tNAyfg7CRXB1PvedmTEkWyt7p3Pdpxc3hZz67bcP1Qh455ZD",
  "key24": "5c14Zjfw6mcDV2KPMu7WkPq4nte4vK7a6ZgppQqEySdnfN6MoUeG4epHHhT4tTAUfMNaU6G9QDCXpRt4bgApp1LZ",
  "key25": "zcuKyGrUqmPEtS43zN2y3M2FTHmArKNr3dBttNC2TY5Wh3NeMWmv2kezbEnjXW6p1ytqQBM5G7bLVrNs2bk2sFB",
  "key26": "4yxzfjhmCUiDZQ4aP5x5PmJCdqHAeCt7PXu4dfy5ugJpR7pkumcuMnPrA9HMogYd5VyrG3ypEk8jzN8ETfc1fk8X",
  "key27": "JSeE8xwFeJ2nno4VTsJBqEF4uDeJ2LK6h9GysFHSpk9GpC7BNYVuYi7NifFpJ7DxXmpEZovW2ZzSrPHz2Q6h2m5",
  "key28": "54dnPrsoBfGdDNosMh8VcrBeaFF6XL61ermR2xsKTNZkfefrwMKdKWTCF1W5L7YX18HfY4RCxw5ZE6d4pAwnxyFf",
  "key29": "3D4kSKhk359vyMy8UZJ3qEQU3gm1BLrNFsUjUK1mYWHFLy3iXi6q2aG72e2TTydJM8t5bC8B6yyxaYP4KHxdaqg9",
  "key30": "474ZXdbmZEzWwnQJizJD8iHFsZxQTiNbvynZumWGEQvZdEK9t2Vyh71NX1ThAjGV6XMaUPywjmefnyQ9t4ktehX1",
  "key31": "4zJ5Ev6hGLVyDnd4qgPz2zAcsyEjL3ggxkbxsposS1Tc3eiHWTPhCRERNu2tPsGkwuaf9h9zp3yowxDK8maT6G5e",
  "key32": "X1fKYjivTA7X5GrzXbStkD7NRzhwez2smQGho6mEAyBjS1sM88tJtL1WqQak7UT8DnU2GvG1LoBhPJNruPUQRZs",
  "key33": "27z7Cn33mWhSrtcvsLWe8ipPgnLrHTgojfd5g25hwXXFrdXfRuDGk89pEULGvNip4xjE1p1q8zq6Fwin3KckXrW6",
  "key34": "3ZazGZYLyxdBsYpn1pWPTUJrvGYb8LtduAZN6avYRSXhmoeuP1ocvYKGj3fT617ABVZBJBeRrVLZCm2wy2CwVPv4",
  "key35": "4EbGb8nyyHCp4ktHRK4MtdL53C7va8Yx9G6skBEimYjkhDJK6YenXZcPmV9SiCCinxb3DKjC241J9AZpqLxkrXTE",
  "key36": "zbCwfi8BeE1pz4kHK1QbBtpjSLrQTR6NVUPuthxYfR26HFhPaHEFaMyzL6EQ7tqq4Q27GWRWnGmNyjPvc4fUm4X",
  "key37": "5rDSVSR1vtiov2iKuvK6L1jkP6cK8LqgwfkjmvKz6ScTHgdmpxWEZ4dZYwUu8ZkWnMrbsTgSuDiwc72UqPdn9DiF"
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
