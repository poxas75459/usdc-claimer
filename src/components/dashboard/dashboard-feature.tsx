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
    "2q3H3ZbVA3tA3Gacu7p2k1zbYiRBpBu8J3HFoBY5fJXmGRWN57Q58sgoyvejG3dHLABny4CMixcoQ8LxCqHLNL3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J84vttDMzuPUntfFvqTk9FLz5WvwGriqXwnm2gcpTPn7kEGmG7ttdtNnCqnxEKsjBv2mzU6RApKHDzPstrkkEMd",
  "key1": "3gLdHbigCFpDaSGKfXTFrrS2Y6Zvm2Zm4jzYNWtCySgcpcok972X2KSwCWbvqrSan9kwYSTUiw2hDHoqCsXb4XLJ",
  "key2": "3SYY65ZnCJxF42nLx6Usjb1cNWiXochg9M8yJy1ydiotH6E6TCiFe7T2XGZGsHdgdZqKegLgKLr5iSKdeKQ2uP9R",
  "key3": "5NUSocpVkPJqnGzCsDhchKAfVMF6kJ3skzVqh2nk7vCSgfK5Q85TkGBnmrdh9S1s3g2cqZHtDXh4N48SPGmU5gtd",
  "key4": "4juiFYHAAgFFPBMpaN7hbcDBApaenyYLi2uuQCTKcZJvk2aHijERthSppiapRv7Lu58AZxKXTadB8mnLi4PDYebv",
  "key5": "41vryfVmHU74Eke2yLcmfpbKfHR1Q36MfjR3cyfaSFQX4idDexDbatTM5yDp4oWz8bo5o1iSkBWrFimKdDaCasXh",
  "key6": "5h2n8uKEsqPG39X42MceiRBt5mtv76VkKor7kDpRC5R8CPhuzBYvz79h4ueovhjYZYh1ca35SRpmchL4U6HRdfzW",
  "key7": "5sAqm6imyCzqB9kWpmwTDDBre5Ev6465G6ykN7nPBQYxeY18F3zn6RiEeyaCxFB1tSBTCG3SvqVNpPL5VHht8UTt",
  "key8": "2Mpv8qn2VWbhLYnj3AQmRP8EawVEF1uadcHbgjhifoPuUjFuv1UK9dqarnp72uhS1LrUupm9Ur3uM8zX2hiRWuuR",
  "key9": "4HudQugmmKm6yDcNuxLx78c9WyWPTWvCgzX6L3gCPapb6NgC8JHcwLKn37v53oJaVWdz9kACxbuNuyKkMHqrKzYB",
  "key10": "2b5op6apsXgUvuXzfxyywMYHAm4UsEVbNg1QnCxcviR47MJCfnpWPc71RHYtcH7mSTZPXBk21SyrkUukvTP3h5AS",
  "key11": "3vFDeWp4HXBpL8aieHP3bEDbfXxp5VCi4t8Mi9AQWFf7AoEyr7vLHApRhZ24WJiBLR2XYCQmm6pQLmsGAkqQtzL7",
  "key12": "pzr7wARR32aeWfjeZo9f6wmeHJ1whGUy3MnazvEK6qpBh5qkZouufo7viuyWWdWjCA6DDtRFidtFri7MBwYqiK5",
  "key13": "4UYL2N9zyGhfsok5eGwdQNs34YwzvbpZMjMohoATQAPrLDswSxjLsHAbTvykS9vZ9G2N2vkeP7NMuFzDAyDYmaqJ",
  "key14": "5AQi9myPpQ2ewz8Yk3b9sxG1cXzeUK9XzA1vkvihffdeUBwpXDFmQHmMFqA5Vb5LNQ9ut9Kqrd3G6QVbT59dQseR",
  "key15": "4fridBbm9ZDnFLvLRuSmZLZG5EtiGp8YotegS2X24ihe8qzfD9ggV7hzLGTiqzyhyKWubLMsayiub1ewzVbYGNqA",
  "key16": "5qmgnw59n3sK6ncx2fiyAgKWdhtcMgsTRYUMZyPUd7QuQoubbAKheepQ7t9uLqK4Ly3DyofsDphjUNLM2ZfVahLY",
  "key17": "2jrzCrnnGTUGdWmaKaQAMsZzGjCvGRHhZczZ7xHKUyKWEsoNBdze5MPrzunkRULYxRPCf6Cr1Mis9UvQpEP2hrJK",
  "key18": "b8NtFuLuXd2SDnPXWUTkgpfBmQ3zwRH34MRoZvV9LFZJsz3xxQsHw4caxoPhkbpAGM1VV7SwuSo8HcdDUNcgywo",
  "key19": "4f1Q1SohfVwhSfLu3WrQvh25uXk5jJANUYWPdmUHngAynTvN5XaLroeWt1H5Q3ehm78DBBUYo5go16QneDXt9kTo",
  "key20": "5KnejgYs2Co7ZY3vjuUyJm6BoBCZdmhzRLaYsNN87Q3GLc48jPAkKAMD3Qu5B4wrRJmR3odkNBmXAwaTiyax3ZKW",
  "key21": "xUHjVPMp5AM85RVAxj8xsULaVn9b2jJw8KNDhVdworKmVkbSBUfnxFGJxcndiqS7SDaf7fVYgAhngTP6tikcNU8",
  "key22": "44J9Jj1KHtxH6ZkkB3XdLGQEB3bA3aUYJRrxjK5sePYVr2EP2HDAZtSmQYkqAJsLEzZ4zzfg99etk4DUrwS5gUVu",
  "key23": "5PTq1wrXw3oazKwMPyj3L2ZZQGMpbGvQnYh1Nt7uKJ4543fcGiViv7xUThKrti9suXJMfrVA42BhJfs2m8nTbfWV",
  "key24": "4za4Ri6Rj9ttfWB5tY5KSkrmptmRuUd6fNdgMjD3PrjTeHi15y8Eo382fgTei472WvvAF8WBocHN2zhi7tkjHyCk",
  "key25": "3fdToi1XWJ7eajbHs24GosLiBnJdGatg6bYmPTLsPsdhdS2wvUCmDfDGKd5oznRuc5gqhJ7wEJzroxaMq1FRpemf",
  "key26": "39e1zQpgzRr2bPk16vmpcvgSjr5nbhpkLXGw1RXKcKGhofz9bJo8NUG78yKimtaFuXaXnSoSf7jrrAkGyjTz9CzN",
  "key27": "5sY5txhwvv2BHhrvVc15DtrDvw6MzLT92RDumH7bH2yVonSqQcHbKDPHH66e3RYFiCZPS9WmPNZr6ncTRUWH9PtG",
  "key28": "67fdKc1yaSsbsZaHu6nbTwRjB3ESWSQnJucXBwyBoxcEVMn4tnT19JXVYgtYcpvvzjtRxZvGA2WHNbL5jGr2279d",
  "key29": "31VinsnBAQEXyomyeybNGbTEJX9ug5ZgNUErCDSgxzqHumRi2av2u7VwAgXyKaXyNKQR1j9UiXHCt42mJDYyzKW3",
  "key30": "4CYYJCbabxs8KRzDERbUWVgqahdWuTzuxasRbeEuSsSLDFnqEEstie7VBkXTCE6mr69XLsaUURtzTp7nEBn2wq9z",
  "key31": "5hVKGeim5Jfv4WJXSBKBLS9DcBfg1QU6afbDGq5XqNFgC6gwbuNfv4Ehj4GHc1XgA8Dy44soJoL2ehYJpfeUZw9n",
  "key32": "3msfHTtmLwgZ1c6uS9oGc28rLGnCYwzDLgu1YU47b3UvkSAFmetvSXmRfjCDhL7AcBLFUChHRP6Jskuso4wHHm8v",
  "key33": "24SsjetZXTFpokYns5EyAdtiQ8zcRLjcW76ZDWdcVtr6kvw5JY2od7aLcnRofBfLXEUDhuq9iMJay1phyfmns1T7",
  "key34": "2GRfURcyvJpn4mA93rCGssGhbp7GXuyD2kEcHUpDimEMMtETuQwc9LcDJvnKRMB4jwMYXjj3QAnPaGuCSvTWbL97",
  "key35": "n7kcG9GHCqXccird4qna4ZfY4qXTcAR5HvZkfujTjKwEgoupdSeDuxEJYqKUCe1DKhxT3h6TcgNkv1SHdmyXPGG",
  "key36": "4qXLEeqSqMPnUbDDxqxn93wLiUeyGvD8AeNcbXLnqME5SvrVXbTVLNf5x3kGxCp9kMA5gR2s7hQbY2FRSRnNBwkU",
  "key37": "4Dgv8XYQpTGv85NV3u1fxmCe4c1uVNR1c2HQTFprKuaVzQV4zDzAtu2fgvCLB4CtACHu3nyFvfwRaZ8wpFd7oRjU",
  "key38": "5rwTBGqgjC3mhez4TkRDY7CJohvgCxkJ3Gx7L8UXdwbFjjbwdggzf8aQ1oepkP6sqzEuk7jgqoTuzvckA2Pi1wQ9",
  "key39": "pDHwtnzcssV51K6eA3jhA1XfsTQtUysu95PBJJjLYrYbKA6UuCVRDxD1xLjjxmc8VgNYdkdMz9xFXRi9k9ePDri",
  "key40": "njLA1gomRScLGVFAr1CRZw4HChKbSakAyX6ezzCTc4SPzAamd4cAmXpVWU4XCywoAXTqo8EPUdb1CSH6pjznCmS",
  "key41": "236hPd7wXLfKcsmsNf62g7XZXLnbQMkUyGmVjWR8ums4Jkp9FdTdrLkQyhUA2PxMCwZELgJdxeYZ6Mid1eXDpqcd",
  "key42": "5Z6FwawHd3Eyb2bFsuRmSwBKWf6cFdD7BoSuPCBpyYYFqwuyAWiq677d1ZLVApz2c8ogY15ZSfce9RosvF44WhYp",
  "key43": "2wBSrczoNRT6zxXe4dGNQ4C6KSZg46dMAAchz91drBcoYjeppLNBTtbx6oWftpxKCsRqnAoEfd8BhLa7fDkb5uYW",
  "key44": "9NCKRnG9unHinwdFPhHaz685GwbkpjKodqYCoEebnXAMWpd5cZijnPUUKScN7sgnT3qDjXm7gNgQxHYyNaKU1AB",
  "key45": "5PZsHkvs41eV1HzW9HBo8YEWQ5Ypw394mqCrKL6BeCrYhuWjZpEfb4gGSq3SQCxbd6aKj3i5tNKNMAejHLbixyUz",
  "key46": "3mJq6b7iT1zqLiSqPQ4uG7vzhW5pFeFUPGv4Saf7tfPdKvXMGRn44q7tS1hnckNnYVfwYDhC9s1p55f4js3jG63f",
  "key47": "2h3sbrS5C8j3ZXtTSMrdbKHemQP8FV9iGAQEn73HhDTL53xpEmwMr8rNUuqDtdadCMHiav7CmLEYaLoJ112YbWnf"
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
