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
    "3kvN5tP88mraeqqUrbya63rxfGWN7FRQxnTFgvVWRXP4VVn3fHWLxWwQ9C7Knz1oJ96eLe6ZxFTK78DUmphTzzN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R7bCNf2rexuKTL76sKy6WQ3gaQgqhLY45jFwKYjBXkJN4PUfVBxsTZq8zSd9GqincSCo31iznL8gA4y1jf9nmti",
  "key1": "59ZjFMUK6Fn793UXX5C9KG9Rio67Tpu9zEkCyNfWY46zGuZ449oLFU4mWiqJUiEbo5G6V4fgDx7kyLhCSnsWZPnq",
  "key2": "4wM3F7BGGBtnCaAvYCGpqzcqqydXaDP4PaSsHyqjGEGPUGtPpHxUze9uyzdy862up44DmrELEcckH3CmcBQPSp9w",
  "key3": "5S1duHY7mfMB8Vis2qSR83G6J5qXQ74qxifH2ome2kRjdcsVqeQ4jjNc9ZriPzHFZM3wGnL1wpFFwop374PMh22H",
  "key4": "5sUcabhuqLvTHZHNjzrg5NMGVxs2ZKue72Rgd2YZB8sVqEV6Rcwdm9qdd6E3A3Y5ZaHEbWkLhSJPW8mUFyhUFrmk",
  "key5": "4ZWBhio95QdRRtc6AsJ4iEz24Ys1yUKuXSVWij5asHLS3dpJoFXNbgCg2WnDkJzA8yKU41mQXMnTuNzbmKpfZ4Wk",
  "key6": "253drjibPpiFHxqWXjpBJAv941xwMcyuDcmsEi8jP6QyepqfEYGxzEXu1Dx3nmdTVJkeSvWbqM9xJbspMGdAG2EY",
  "key7": "2Qb4n6siNavukBQdTRik4orD9YLAS2fhqxYDjhakw483ozAS83uDxxFZMPLJYZ95yRDxn3Qrfm6ivvVLuQQNXY9B",
  "key8": "5ft6bcrRfbkiQYHKiVAAMwNc8Exnn9Hh154WG4Gqg2hpcVUSyhtpqvyScLpXjkoeynfT38Zv1Js9Bv4knW5MKRP4",
  "key9": "2Gf6GMuPZa2qhmMsgku14M6y3ioxC6q8Qh6T7d1NvUX5N5tHfech7cN7HLxwzimxkHgm8LxgZ2aQtdTVYvuaxB9M",
  "key10": "2w6H1BnacEK1VLHhV5wWiaQNqeRwh1AcBLaTjv4xbtn2yQjzzsECBuq5rrBW9Fi9J3ZSzexmze6WMwefTrE3mUjL",
  "key11": "5dkB9SjpbNKpMnuQZkdJcdTXUeQrqJ9wnYaojf6mi2HpCPFWLShF3weKUnBo6ZReK2XLjFCV25SHErG7s469jzVV",
  "key12": "3wCoMrGGd7TaJ41wURwEYaknJM2rHsZqcMnbgvdoj1etG7T4AKVPoUKNSKTUoEYqSAaMKcSFZ2BxGV8VxoWKj6JF",
  "key13": "2sf3VK1McGdzrgXrKD3oFu1JzkjTmk4N2gcLDpd2GsHvrvh6xt653uh9HpqP5pi3hTvoatj1dce6pXxRNkXmoVBT",
  "key14": "5BGx2622FPhqoyCP2C72MzqGHovpNBXs1V9dMnsUih7z8wGvk5s9oyJX4UxgvUzHDj9ddr1yPqhMuv5zV1nfrBke",
  "key15": "228Zay6cS2U99c3WPLsvUNtqx2HachVHuhqfCmcoKpep8r6sFQeuMaXJJdPpwSzyToYbY1SRAbRskZZ3aZTVtmqU",
  "key16": "3KUcba8LQaA2ZfAKb3YToTGRbTU3GresN4Fe48wRNHmAhZsjSo99td1PY8b6XAk2NGMRsaXEGBEFTrLNYEuoi6WG",
  "key17": "27seAch3yMoThFXxWxbmLKtShbhHNRQAPRGXLw8QPYTRfUoXDfdNWb8VxL9q9afsmxCCRUCEoZZRMSHVsNyzCARJ",
  "key18": "3c1iouax9Z9xsakFKCTjdhuiikeSd68gZ1ZAkCstz2ykM4PKiEYtFsfDfKZHbrYNZKc5eov4rCXFUwv9rSLHi7xz",
  "key19": "4s6tn5tPuBHfwVjmznBaDKsYY2pdvh2sJ4QeeYjL4GMyqF3jXXdc1dGfAtuKb3Svm9Cug5YRrUtEaHJvcSRup28H",
  "key20": "5tpAsvr4NvF5omd4CaTtUYUYCP9Rx4XtuvQTKCaPfR33aKQWWSCKBQJCnBYh67kMLTeY2PTpYUGrzEZLyLDC9goY",
  "key21": "6Xk3BHkTqDxeffKoFdxgfkBRh8rbswWgghymijCVv11ecpfGxkjTgr6XkwoVBGE4qsq6CXbaF8eTGhTzFvNpYG9",
  "key22": "4HTg9CWA4gPVuaogWKbYpXhB9eNhdXFDqcHqPwUKuEmRUJE662FGumhAvJCtt5XnxyW642FzYsF2EFPUdiZexu7U",
  "key23": "2tBq3KhQJg4ttsP7NgfkWPHroEPhC9CqxJdy719Q27yPHxusn9j7qsdyaNXNXh99d41XuC6XnjGC3KczdwWgWssD",
  "key24": "5EcsD7GvipBhf1WNnsJu1mkhfiY9crXJUY9JtwsXToqYmM9FuSPQ8fTJ61KmtceWBGMvymzD6EopPTRM6KUAxSsG",
  "key25": "3Fr5itWFh78HenUYqdhwTrTZAN7kDrCNTp7km8AHPPoD7GMADtcSPyNuQQkaCzgYABYjsEZwsdCLfu2BkVhdQAdt",
  "key26": "5DR6TudXR8AeEPGJAMRM61axVaqeAuXRn9pK3gBL4RyJ1jZfGZnrcmrqzc2Gt5FQANfhgZr569fvquCVMX8bhqLf",
  "key27": "5nBmD8WCf3wva1yicgkpjBDAi3BRNzBgQvmW78Lm4WYDmzrFXTCGJntBYRSt8yAfWUwg7rQA7wghE2aT9bVEnrYR",
  "key28": "3Rx8TvMEamRgFnU7GCj95z6fNhEvRiYHDfNmfcQZhv8sQyfefu3LNLCRZ4oJLW4FUJwZWwgmRFY52n1JkHiGS2ea",
  "key29": "2EQ6oDRAwfEkQvkL3otMaSdeu279Qy18SUvMqHaxHuA5FByBoFoj2jrVvA2kUs7bCGVmo3dVP1imqm4NyNzKtAFZ",
  "key30": "47NvHody4iPUHwdGVgz7BKrh8iMEgjWuPMaGQToqWwKy2Sq4RYXMGno1cLLX4TGiCZ2b2tbQx9bGHz91xreb6N7n",
  "key31": "3NXr4RTXTFJtMXokaMRKLmDRqCZ84VqmCzgkWizyLsXXChKf7jkMqbzQRhck4itTi3bhLrFhLtWqQj3kzi3fsDFj",
  "key32": "3CnqJrceY2uvaLQTQJAHXrgUoEixTkxq2tSqeYMgku2weQB6ACgYBFzbyMEuHLZPAHjLmyVXmipB4prep9ZQLYHR",
  "key33": "w8aWgTGzwfCMyRxam9YGv8CThmRvyA9dfGpjzauAdfPvh3EnaP1F2iJ9HCHjamZCAiGAYvaTpjNQVQ7af4gex3S",
  "key34": "2Xc2iFquSMbcmqXzcJYV3bLjBa1dEGAiygXpTUhTxm4frWESR76t5iR1g67rbze24ULBnV4wWfZHiRPfXTgGLyBh",
  "key35": "4eXZjqdn9Wu4faBx87MknhqREiRmUUL9RWF3nt6P9SQwzzExgoJe7dxg5hBPQpGRB9XEhhBePojUB1TBXNrFBDha"
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
