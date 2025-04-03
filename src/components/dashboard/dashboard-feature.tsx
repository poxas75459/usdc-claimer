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
    "kG22S14inFEtePQK2miMd63YNXiZrzYWeJwPKtBqcmc4xgmu4aT4SVybLhTNC2Q5qFjpYT5q6kLwSA5asNCeUDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bdf3jkxZae79DWfqrWCPbRAes3DavjqA4iuu9zQ3ZSrEamUrdfwyoFbFkEgKtD6XVe5ruq6fnfmN6Dkjq1A8orS",
  "key1": "5ikCC4pmBpwAp5sCeVVKzXtWwnwmwB6opCacMm7S6ryeSMSJMwA93JhJiZCGC8zjfFECpNCEB5GZhLqnSZihc8ST",
  "key2": "4a8QLuDoHTCAyM6mEoAWywuN9qDhr6NA7SeswWaJZUHLGCm3qA89pRsDRwHt71oHB4Zu6A8vRk7phKCD3GHtz89e",
  "key3": "qvK1wfAgLkY1wBCSEf5Y2abHQUZxRWjcBGxziG6hnJsbUR4gLJumtawUDmatXmtfhokv9m86WmrcbpqkKGQAysq",
  "key4": "3gXw8HLJNkdzAfMVfVp3UdAH7AG8CkT8dihp8WHinbb2dNsyd4VMcQxbCCdnHChvoBaE5BBEfvqMM4nMq8gupwuc",
  "key5": "5KcBYe8Vu4oLmNePrRstjVUWFKBhdmQUrRz9iLARDVmcJE5EgkZNEHmpwB4949A4cZRx63muuEWrvDRob5Dfvkvp",
  "key6": "4e66Ah4HviYwq9wi87CDo9nxtcLj9fyXLZ7WuVXYx3GEHr1mUDPudeXp1BgsLxigbLVc9SB9xjZyqYuYo9uZ6sD3",
  "key7": "3481kEPeQk3h7F6ud8h8NQF77hFgpUx6tr6Cx9GwaxBGeV1S4hLwAk7tJeHwdY2Fr8yd7u926NKJ3PV6auG3KRSb",
  "key8": "5n8HoYRPLtjv8bctHZ52pSGjte3sVoS3vkgNti5LrqF8WoCreWEi8iVeBtmZvQz23byoaT8VGyeKHX4igLY61W6z",
  "key9": "5SMygEZVE4XssDECgnnioAWrY7wGT9PYAVZmkdzPKtWaqd3ZHLcYsDfD56RJyZHieiT5fPAFStGR5nuH9TJpdcFn",
  "key10": "3PrSNtZK7RuDm1d4iD4W9QxtQysq7FXgib8XppYL5SrGpCLN4xJT4xjPeMtR7DSEsk4x5zuF5it8guc8MWBuKkm7",
  "key11": "4Y3aixDVKkicCZp1rLwrJYue3HDLQntdzWFPwPgdU673gpchMqiZsUFSoiqHrABnbLrH5wXK5gcszMd2jWg5gGQ2",
  "key12": "WPosvESAAqJPxgazkkFhQuFgLYVY3wMXVeaZWkyDBA69CuxvUKNUQWUj61ZHvpMEpJu4hSyK2GJK6tEJ9yfYBpF",
  "key13": "2R2uGxGMxXWXAPrhenGfeYVQ9zWTn9H5qegMFErnDHbX1t1v7Fk1NTYPkcLp6xhN9jpp1TscdyFfUMbzVrVZfEKP",
  "key14": "5x8NBtfLr37m71k4cVTzovM3x9UpHJkKJAaQBdsta19mPB8yo1vi26RDppHwhsamkET11bieBZiWTbaHVBKzRH26",
  "key15": "4FEGpTKR3kSUh2qSHcRyHPR72TQHnUqvWrnJ2QXs6HCqNvqp4ysPZjo4VHAkD4WmDhqnUVbe74wEsiLUmk9LSJWo",
  "key16": "5SBXutc1EEsEn6Y1C78eGsf5bxKjsKvRo2n3MGHymwrdCbCRmN69ChpkGqKebwgtpdnjzpwaDhCjhqt92ut4ggi",
  "key17": "3TMdbLF8d1WN9UgL37BqoXxUurNTYmEmF6bpWzakAJFRVUkm97ydv3QgXYwFRf1T7ev7G5dLhudsM9HPbqoxuFbd",
  "key18": "2GLkgybfXZWLCmdNmQnsEjxXrjw7EunhHrjjTi35mMyFzFexkPJS1VwF8LWcMq8wzw8y1DrPBV4CwiBZwvdbj7VG",
  "key19": "4Qztv4jzryjGRwZrEb82NNp3LhXNSfrBzX8HbDD8PRNkmJxgRLynbfwgPSwauseGQJ5Vf2QvbSiLFuCRWLYKFutt",
  "key20": "2x4BCc2bC6pnxiomyuUind3xyQmc7rwA6kcqY5NEyMde8h3ttCVEVsydyaafLp9L9BnM3wNgvfYsssGCWz9U66w6",
  "key21": "5a7eC1hfendJ4DK3A6V7vwBZ2vGELLseb3SKaQvaZxit83CwZqfLVra2BVKuRnmP31uKHKNsJpDQzoVnrSvzP8rP",
  "key22": "64xZ4suz28wY3NK3bEt5EfyVRtexeLn5VJyFwB9JnKxNtj7VJ16aCvyHjLaXjBu1r6t3TfyE21cCAqxnsMFi36Nt",
  "key23": "4murJSadz6FfHUdXGY1vBttPCrhLbupkcdwjEBQJYowTbPPd4gEZMUki8jkbgFMAPJHmqGhp1nsmAqnT7x7BGr2s",
  "key24": "3opga4aqiQuANhjHppb356KVBxHfUnnEnq4fjoAHVcAQzyU2pZqMU6eLoytbdT9AVfGUX5kATRpcAxzhTMVstWCR",
  "key25": "4gDXhM7bVGXdACSzkYBQGP5gm54dHW7uEL6VqEy1ZXHa4mvX9MPA3ALEoi6JokikSdSTUcWLsyFSuvSqBMnwdT5h",
  "key26": "24yzmzSaoM3YffPqGx5w57ttKQFxgcBzCdBag2kvyksKXxee6rHwoSSg7kRnX8hnEByZJSGj64xNWYER6KheZAsY",
  "key27": "6gcazfLu673Y6izax2igowfNUDxrd32ytcoQhBFcyLCA9V3AB1APzEmwfTyGgvMdy8uwhuhNou2on12XetRJHTi",
  "key28": "4SBXLsXXaAkUWxrnrBewRzsKY8uTa9mGkpoSUYJAXa7XogTahzH2y7N6fXmnn3yEndBbfe9WJrTyfFe4nB2p1As8",
  "key29": "UyX1ZKYrWky7MbrQdt4hYSdwZRct6fZShkkRTHw6VeLDnLviiRQRnWof3ZxKabSYB3rNzBqTshLCosJyZA14bMt",
  "key30": "2t4gQLKHn7THjyuoqr5KKyMqacms6BzML7dwLkNuqxPUhhu2MMBQioU7mLXQm3kzMbWBnwS1YQn1mn6hiieRCCWt",
  "key31": "td4mPtoxY2x3Z1o8mBELWG21Fvp3TZVBCaYXeEQ1Pz1E3E4VPfxHmocFCY8P9BBrE1UD9AJ38BJooDNFAjLr5HZ",
  "key32": "2TNFYFqFxwxNX8utptsrrh2mrHpbTADUorwtfEnVjkC4JFD4xJWuuMqW9HjeQqqVbnA5okwe5Fhm7cG4ox3zhS9k",
  "key33": "4x5kf2jQ8e5kkDw4r3hytNrWztyRSBhSWYmGkV3Mr4iNcBHdnvGXLYC6WFeTCRE934u5JnYggJswZyNSop6ZL62Q",
  "key34": "5poXdhVjsrhmrBAZmazXQr2kKNFiraoR51GGKRpDNB4JYCJKfiYaub4hrwbdiff5JaEZCTchm5ghqbYZmjhsQByp",
  "key35": "4AC11rcc8B9xBcnjPowa3uMQFh9NiAQE4Dm3qiM4eTHAKQYpNMkopmrdH3JYAe53jkNgDAn7TFWCJa9bm1W2y2s3",
  "key36": "36SisLqc7giFjSW2zraaAkWr6DtxXn5mMgGiBeKnY9z3LrZYucFf7kk598UPzhDqe5aA7qFtpS1tDggW5hnpeNqX",
  "key37": "4jwKKsMA1wWvdGGqojKkXcSeT9T7rL9TcDiQLVazNMMLsKVPZXnAwJaRbZXwPSRb642m6Cp9rEFEvHFSMoSWnrz6",
  "key38": "Q2ASq8XAgaf28h4Czu7Q6w89CTcaWaMcPDnaUcXEemKpPHRTFxExN2WcN66NGQg2SJaju5BgyeNCB7yTJgGeTZd",
  "key39": "TavgbwcUCVxXCAZmHuqSsLcb1g4XMCfADyu5jb4vFGvBXFJDJYUyrnrAKtq1qZcuMf2PM7mckF7YQnnevggmnrh",
  "key40": "4RrJpf89mceDajBLFM9T5Y7FM8JjdTgNuXiDy3hgpaG3MrhDtzBsp3Z3EQTiwzEomw5ahpovYq4VVW6gmcskkQGk",
  "key41": "4myR6TSUpx7MpzquwRB9EpoMc6mm3QTU5jVgPw34Hg1YzYS2Ed7Br8LpqoZFEcNqEm84venWfjKYUCKnqfV2eMfG",
  "key42": "3NjdAycqkpT1NMR4gpTwxWiBKZayveRsTykrYeFymVo3p5886T3cRTtjLWbFu5yQPubfVVBBYNfKCPcukc9xCX1J",
  "key43": "3sR4atdKopVW2mTscaxKojXj2FBSND6XXDwfKakFXckhzc5569XuR5WW55G9AFnttga4GnrTYGPDqCk6saxj1MVu",
  "key44": "4fGUT6T5tS4PcUi7PZDdPPzHVNsvuyrH37UjtrM51yb1FsGtQowuQr34S1qQDSFbZ2yYGmrB6k7fxiiGtJCYsza7",
  "key45": "5cD5fWzboiZACLpKYKQhtoHWBNFVqvnqcc1xbRWWGzybRi46T91FuyycAS6rXqM3bQm19gDNifFhDwHjFdDHKZxe",
  "key46": "5HTzHVDRZnXhMgiENHTDN6wpqfdem3hZ7xomJc8YCLjtjbkFunaJ74K6s3DR4Bm9ZnHEhDGyWfpaGg6dYKsx1vux",
  "key47": "3zYg2jHHqWFPPCpp9oi7vCCta3BdrroyPdL9QPcyCXSM9JkLPUWbLnFQ4MvucEkzTY77VsV4arhnXgkbrmAHwfjK",
  "key48": "29rpF2BABUWkmr4j83cvxYXERfF6RTpBSnMCpuZbervLJ49oBJohxrU8Be6TTj97KNVqaoguF4JEguHQWqVYBGQ5",
  "key49": "5H1UZW7XZAxkQ7fusXSo7QnEY9zgCCfvHTbvj6gqxmJWajtN6gDrXw9zHoGkjtMQzEbjxqeZ6KgwT75PF9taBPty"
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
