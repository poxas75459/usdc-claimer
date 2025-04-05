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
    "5SbRkQY48qLc38udiNv9GLV75254aEdYYEiCEbx2MHMtKqpuq9AoW4W71rf47c1Tr8H1UhF1yyCPaRTo8zqpe4Xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bhdai1Bxd8W8unvCm8sjhVpq5aDjeBxW6GMuN3AYLW9vSeg314heVj99feraRzxD7f4usvjbDVMdiEctcE2sEFy",
  "key1": "4VRD8FUkBAwJU3Bxe9LYeyJoc5B3csKwzeYPsiGbgwzKAPMLFh2yTZGbYFaTyraRMwSa5Hd4H9fLAMEyMq6RDht6",
  "key2": "4uTjQ5R7s9Wip4wKz8E97NbQ1nDkYMUnbUF7APP7dV5A1Xi8Kg4GV3ajsmTABpw91RahcEQEXGJ84A8Yb5ELRv3H",
  "key3": "5BrP4M6AMec35P3BcPtBgkvtTf9dU67q2PCNrG3n1mtvWXqzJFzwcwLyhoDHPSc8a8MkGaZtyMg32RRURoEpci19",
  "key4": "4qWwYAJUTJ2b48qdpfr5wPNkq3AuuPEjK8xAePGLF4kgTXLssm9FJMwgj6R7duRwoHbbF3iHUYbJXo8DZqJ6DKBJ",
  "key5": "PEjHkQRqmoBEZP7fZe2PABQWQPStNYC69BA6Wt7vUJtikuPCznzUzCSfpAN1X8yeaQ1SKnVPZZ9d8k3nVmbRjcd",
  "key6": "4DhS8FnbhU4kL9UmtqRCo5QENBcGVGLexajRDY4PSdiLjjag6aQXk7RqCswqnzfDnboBMiuYXCcTKjkCNaxMiPbd",
  "key7": "5r9rH3t1BTffUxko1EL4YxW2FJzuwK5HSguDLdrDCf6yYQVDrn5YJhVAvCdfAovYyXZFHEnejK2Duye1kP1fV7gE",
  "key8": "2KH9P31M2GYdc1XN7BQ5Wf7mjtqCro1FKtrjSHSqrEb8NxxEawAQ66PX5hEZnBixwEeC8X18Q9edoFu1auDeAdN3",
  "key9": "9ucKXEAN6Q9NSLNDQN9Qop9hbMmjAspLYz9U2ACkTvLt3xXFhuLdEdhQq9cC219qruSAB7ktvpyb8J5dnRGAM4V",
  "key10": "5MxcdyVFpjphKTqFTo9af3iF3FqD4pTWoErQyA1TiZCegzaAhxGtNfj443Yjb63u16JqDHfS1FEVL9iM6q4gGBBi",
  "key11": "2C6Zp5ZBGMH6SvZ2baV9CVPPYd5DePgcV6pakEW6eGZ7hURiVARWyrXs96uygaDXfpZj9hj7yhinSv5BKtynquxK",
  "key12": "45iJn6E4sppXnx8Up1EQcAyEBMT5X9qWnZMm677eSnFd3ZhutyWDYxFhzXt17mSeVVjj3FtXdjnGuRDRRiMyECsh",
  "key13": "4MBEB8t2HzAGxnLUovyJrPTyYPqF7CfmPFYxtfKEyg8wCptBG8tDUanebuST2VMd5ZmeW3FWtGGGPTyupstov58G",
  "key14": "5pJhQJAF1vwu6bZTCx97E1bzbXNTPzhmy1coZc3m8QBaUMwbV2YbxMT5tzndMrcwJM42xyfJKoZbZJ7FRPuihz7P",
  "key15": "4Pd2vzuurAPbA7kQpzxVe27L3kPPnpSt5dy2uwbvJYatmwssQ3C945CxGQdn2WgVqEwLzw1Nha4X6BRm3pBEeuaS",
  "key16": "4HrPFGBbFAXMQ14d6TqzBxbaLoFm5nUxhG6trRApHMp4FZy4fCwTnxrmzq6xVDg9ubLSsWVxwn6YHRtt3TnyN78G",
  "key17": "5Nu8x7xz8LiK8j7ZfmDbVcm6FF5RvYnWifofkPEjyrSzXS6Bvp6YGbsbTP5mYEDkXGJsGJxEdSiRUTNGGQVZDKK2",
  "key18": "4GAuEQpqSbSqN61FpfkBYL3LridNxhH2LaRFe6G7u49VAY3Bb3vxrcu5aM2nmKAtEpxYHQ2yMhtv6K5UkMKiQJuQ",
  "key19": "5dFeui6YYHRrEDTadDZFPcerkwbcc43AqLnm4yqimGc8EXEzBb2rk3qUcxd3pgH59NqVvMLzUx6t2KnzQtGyH14V",
  "key20": "2G3q5UsHjzoGUkSL6EZvZtuv9Lyca8ynoFfWoMAx83cU6Wn3BRyZXtWuKoEetPKJpTgnQouL2NTc96BnAXm3foVd",
  "key21": "3yZw4PEZcJ4TuYJYTkbEa5UqwBEXKeJmu9WGHPUgGMChDCpXF9id3ditRJuaK2G1xVuxAdV9Acdzqch4uUawB9PH",
  "key22": "5fcNLu1dJwqf2nv1voa4pHeLqWx7guP1VrkAtfJz7Lk7XrzTh1iLGdxTTMLZRp7xigPsQdBYdFuhCwaQDKbY6KAr",
  "key23": "4mTmfP9iJiLc8o4iJWrSAvL1dqp7fPpTGShjkjrYxcrzfYdjYMuTWnngVCykJd3EjC1jw1FpnmB4inUR2V4VGVG8",
  "key24": "3Zn6J88CbLWjMKBfrQWPhFgigRFnuJH33hVLZpvx8WbntbHygTNFjGrj8UtSvxYiR6HYJQmS97N6pjChcEFhoCTc",
  "key25": "DuXvuinpYn9VvdiDRDFNU4njmM9RSLuq4PMNKBMWYVtWgQJTMhHzVM1EDmE7J9GLqW8p33xHyTRkSEH5wYqpGgu",
  "key26": "4Fc2yVezuSRwW8oJAYss9hWRwrRGKCMe7ERKfCCHbNAR2ay6dhJsQspxwJvghzc3ZBm3muS7YWrJw9UKjk7EtVz8",
  "key27": "4UUTbTbv23ijvKtMU7zNv7LzNjTxRmFYsGv8LEmHuAPicetWaWKbpfJb2usxQyCoJ3JpVgiujgMPRNswTk3khAtx",
  "key28": "4XUsiSPQzhcHTSva4nSfTiiBRKRPUBKit1tFr9LrmQbhXnthvr68YgC2fBi9WkEaBdmpQ6w3AsMgbjuvKgxY6Q6K",
  "key29": "3UizKynfd2DETW2SEWLLdP3MiA8M3coVQh5n8BkgpX3kKWBmNY8gxKwvJpCmKbn1tKkoCzAuXnNEZJH5B6quZAUs",
  "key30": "3GGmgidKfbHxxrmmCMGtXixdyeEZH4qfgr2CurFXruBb93h2nu6Px2WBYgYtGtkgmB9sC8vCFCNxgPW42ABD4db4",
  "key31": "4Rvqa5DnTJDuaXH1jDUoCBdypjrwgxT8XyQANQKWMC2h6A89tWh1bNtnhoWyLek7PeWDPUCGcwEbm4nts248rXmJ",
  "key32": "4XXp2vGgiD4ycJBX97wTKzKxoghpUjN3A5owpgt8ELSsd3juNdHpwS1s6XtVgjesCnFiYK2Ff67RDfqKak5ydLQ",
  "key33": "3YwNryJAQQ1W7e7f3LnfQYA7hk6MZTBVmLsj1XghrVaf3SV9oKRvWG5GDrW6nGRQcZZyobnEd72miYCW2VbJW3EZ",
  "key34": "4nSh4nmUUcAxpRcu9F1jgzzvEYQmqiHDcrPbkJWie8FytytayTpQc7AxL5s4GH2t8qHQ5zJ9V423tr7Se5gNc23R",
  "key35": "4qDqYbLzUijkJewaabYA5RF5gFYLRcYSAAU4xVdz2Ltz2H44m3hUspFfcLL97cs5UHVEDTfKH5gBSKVaffefvPKm",
  "key36": "29TYqo7aDf6ZyhW3v6nymk4g3A7nK5562rdGFMyapjaz6L4FngFdw3htCoqhH5bwHLUuJCuH69wndhGj39JpZGjU",
  "key37": "4ggY5hJjW57sKGT6DsCpt7vqtS85xWvBahpsUmuz5CGAiVZ9hA5U9NWDoTk54FQ82msrBcqocDL2nGw381ZDKhqW",
  "key38": "3AXRwAoWNCoNUQUoXqt5QVT8tw31XKcdYdD1AKfy31a2bfLDRJqGpvGXofDy3Np2f9nRSrqYnyKv2DNnmwjDTGNZ",
  "key39": "4jrJGWTWxDs8Cos4CbxpvRFYMrrouXXyxcmFeuSxAgAyaxCbeevD21LKULERvnph6vNHBrADW9FQbxCdwxMLFRjm",
  "key40": "jRF6Mk7kFYgmdDs63jCWaEVuHMNhFydXWQA3on8ru8Q9NF6vmrMDozFSnfocujUb21JURst8yZku389RVMMybg2",
  "key41": "5jPCEf3mbNzcSc6mCWzNCpEE72aETFZBJLo7yd16rkM2v4FWtMiR9c2sMcVA3npJr3zMtsebi4VsZY1VmDR52csR",
  "key42": "5o8QT6zMK8Mkidn3J9QjMb3WgtgqTzStauH8ZsxuXTYdq8jgwQXhLHvesUTwjbNuCVCbhuTMQHJ3jkjm7xgQwjS1",
  "key43": "mu1DrQytyXRwvL2Pa5rkABcnrKsu7p8b3UQ6AceAKwSkZaA9ZzuBR6VQLn8zsvJtxBR64Ux8eW4ndXBQ4xCjf8i",
  "key44": "2v2gvDJrFPh1zXA4WSsNEcsWXgqPDaswHfjStns8L4o1CPKjdoeNUXJKuZ3cYhAt2Z8gtjBSc7v99JAGFu68bgp5",
  "key45": "5fbTqY7kLxQVLVBc3bxDPF8L2z9HY7Fnw7TUtwFxxSuNqHQsM3Z1vodzyGBhDALpXvYgdhSTEtoioX4rz6D9wo4n"
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
