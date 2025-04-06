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
    "5KNu1S5Zrn2KvKD9LK8BTFAct6NTNDi6GfFRM5sJpun2s5ZYSmbXZms5hSqxPa4GpQ6CrncWGs1HK2aknum7bSLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VFNow2nLp5FpZZpY1mduq2qryRtAtiRpuBtGP81VdqECUBXxoMsAPwMj4Z3Si3NJw1bo7rNohhRVDyCtB1Be3B5",
  "key1": "5c2BhV6eZqxzMAZqykuSBVvmoJSA3oWSDWAyF6GufuC2YgzHqUK6AZvgqrJyefevXrdM5LQdBW25T6KDTrZhrMv4",
  "key2": "2iUPqzJBzP5GmZXbwRtBgUevF7orgHQyp2do4LMTBuB4sip9gM8xViLxcmup2jjVVo6Gicye6orfTFCFnQQsQoUb",
  "key3": "43BRRUHMJixdVP7TShVQVfZayFpqinVjQ5rb84CDvJAykE12U8fkFjCKxFbDMrFzKuStysxMmLJF3eBLfo9U5vJF",
  "key4": "WAormXgcvwJoVkpnxLuW8Eva28FFVXZuP7Kq2wdXkmZx4nGQKNENxVNAtmx1h9DDEJnnhtERqBNX5JQ7igSgBo1",
  "key5": "5zMsZ3w3aFqGJoqBxSStiPn13CiE77PcYApDJjrcCbkEEiDdexhRyZHt1VUhVTxWY1WkyqgoCsbrHLaKU5Co9KjF",
  "key6": "3apCHqNMgs7PdBV4Fa4JwGp3oxkfCc63kHApJvtyo2xonTYZ9mqMCL8thwrQDVGst9YP6h2S8Qzwc8WG8k1rSzmg",
  "key7": "cbSMfeuetUsY5aVWc8ryX6QAkV1mpdEFpz5eVVrQKpb2TKt2BcYu38mUkppv9M1Whi3bY5a2xL3sD3Vkjr4uqz2",
  "key8": "2umVFzKHzn52Ywz5wh276jTRFMBTMbwCQtnK1Z57AoYYeTJzFS2pfrDWbCst6TrBbpJhgH4JrcYqegCmstKGKJsc",
  "key9": "2i1nh6q2o8FpMo3JnVSrGV9amEaVFUbWvp3G1VPVKnVSuqZjFjB5RGfPpeNcDgkcGZddwxgWyHr6Eockc4n9mxWY",
  "key10": "5gB3cHWwyBK1uUDV1rkLxuFoeQc8JrZbsavAwZnrHMJb5xitj6itUK2kjMAPMZ4EkCx7TdbWRUzAkeABuX9wPEbU",
  "key11": "VbXGxAYYwqsj4FrAfeTA3btxGH8UouVLNgsQGbLHgkPPXY1hVoWRSwF9F8FegBMCJwUcTvPf28jDVyN7o8BR1EL",
  "key12": "4j55SjPP9KNoumj692rvTDVknzqyQMqVkGziG3qjDiFHfpbY4yzU7KQoSqWBURkYxb69S6m6Nny9ECaAws6ZmyVM",
  "key13": "2RMpBRkmwdNsJjMxGMDEawtRLSLhUDBUq78W1Bz59TWoFSCBTXjMHvoqfYHEa6EBigauxC82CShWxRy3SEJJDjsE",
  "key14": "34qb6t67oWZAopaVY2CUCnMUiPQo2MyXtE2Yj6Zi5LVrAs7fdfpQQqw71xriJ1QsBZSY6YZ63yd6bhr9RdX4obDS",
  "key15": "3GN9qtXDZfTmQ7Y21wtZYMu3humDngWzp5VfjfibkfLG4nZC4tiXZJ2XMKLLTaopppUW6ee2piWwHYGANS6HPUbJ",
  "key16": "X5UdB2sCg2fmqVKL8opeyDWdkQokN92ETfrturgPiboDGwHaKosRjPuKL4y4QaX4tJsExerQyuiNdGm7vDwnWcV",
  "key17": "4b9zQxjFWppvkkTAEuMjhqWXV9CnfZycGjhuhpg6U7uvupdwJxqGQ2DagtPAhyPsmjhkW2Hg43ZqrXiPXJL59CLF",
  "key18": "3W1LvYPrt8XWiTU32yzCYRAMyp1yzorppsAHxGSnN1nvYGDd555WR7zgNc7iNrh1y4beJvpRkC3eQ6jzFVdfE4yH",
  "key19": "3VYB6adr5jXNDCgdjqCwXWLUPzhK4pC1kDJegfPTnVHg9s5D3k138VMPnjAknvfh7zDtpQZzH6cJnoBgYKXw6BmZ",
  "key20": "5KEQXdADJuKhp4BsND5mKetmVFq4r7Ynxk6F58X5nBxiGTBMnzKmD2GSVmXV1mdSon1FzeaPwpk3Ho9N4YkYZ1n7",
  "key21": "4c9u1ZJVoXVn19NFugw6afQqcXy7wmF5jz7iRmqg6NZN5gUmiDTyP8cvMs2WkjBB9GQHotCh1UNgzJtMHvhyTmZx",
  "key22": "4bCHSMAKrm4wrPcohWJVzFd1CofyufaW5harUyF4duybbUYvtKX7vAghAtRgfp8kS9hsgoKQLqVXwaEXfESZE5BN",
  "key23": "5gSsHtAgWDBbjALY8kBYtA6cQFGzEXYANxDtoq16cxJzMudDe8hUVW61tJ4ur4EBnas51Aj2h7iudkP2eFpuiRi7",
  "key24": "4ChoqeCji5uzQYsLyqKrvPXeVgxGG9hnMKRa3q1FLvytKbCCgfE99goPxPkZNx6sBCsNdBWiHKExJd5v5YNAA5c",
  "key25": "WCLZrtiG3TuKLgNTfb3T85dMbMc4RqF7F3U5NDyaAbZ4eQJ6DWTeJoNCg4xEeVxuBdzfjCp1xJqyqnwJvXbU4fM",
  "key26": "PKz3jq1AasuNYtg612FEXatqv4pM3VhXNqasV8RXTWnqEJu7iQDWAyGfCg8wzK9eZuYCLyQCCvcPeCjPi4WgAxe",
  "key27": "3VCziXELUCtF4FMaHSN4tHKFGCxYtomHcEKCEkgmUahEGtZnuNRgYbuaszy7gzgwHrynS7KrqYGW3VCtU7XyHhv9",
  "key28": "67rA1fUiMXsNmauSfELA6Z9kpNBAHr9rpxsGca6JegQreR3jGzg89fvqUsiMQsTp9ukB1CFQ5aRfwbQfEo5vfPF6",
  "key29": "5yLnSaRqvVuGQFC2MbiCLEuhLumQKQWzgGN9UCTz8kgy6Fbu3xFR1ukeuYksaMUub9KHND6pJkhaxUK1ddzjryeF",
  "key30": "3aeN8yPKyMsb3y2AaGZu4VZdkCfrwUfmQSrGzxppCar2PB6xBifnut9igbczehJQoMc96uNp2ED1kdCSEE4QXtQh",
  "key31": "5Z4xo85GWq7pPKJdnQdzo3Bcm5GbXCBmvMwaw1hnKepov9qxm4HxYJdnVeKdvysAEoStHbzUFM1M3QQ8w8iRJhc4",
  "key32": "iJazkiGne75huBPL9neSKZg8QR9Q6Cm7KxsaRkQbs8qVSS6EoBavuPgdRHRzALw9nCFppdiNGVE2o3Lo2xMzJkf",
  "key33": "2ST4epfSYHDiCznXcKtJAEbwaZnqWum4iSGgdWuDX7gwn3YXbaHPg1bmGTD18VBrRE8Vd4GXkLzx9DVHRYkLrHf7",
  "key34": "5aaaEcqD8kVWsRt89aoNEhnURcC5uFqUvo2JEf8hNvW2z71quzk8aoaMTe88qP7v6qFwkAwRHgWvig2waX6CB6ew",
  "key35": "2GNUJEf9BVBhqXQAKwce6mb4DLtHEaHBJfo5Vbh9HLV85NRQ4oEtwd63LYiDwBwpmAgbxy8ZrT94vmRFuUifGJpT",
  "key36": "3Dh5jhBzaZ5crJXQcxu8iNvqovSzpDMHfGZyMRzBwDtN2Kq6jsebZv8LTuWfYyb46HG32NXh33b2ibYssQoJvci9",
  "key37": "5EmnB2ntbrERiwqNDcFb2kEcoXT58rjsE7XRoEwFwMH8qYXYKaTk9czbLGDRNpAnc4gGZbgp3Wvrgm7JE5sAL3tG",
  "key38": "2dN1rNW2xQKQbq2DAhppxCd4mNWTLqaTPZhhfCR8SbqWDnggBcoE3hT5EojJiio1p2W7pkKwMuQS7eamSHcHmBua"
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
