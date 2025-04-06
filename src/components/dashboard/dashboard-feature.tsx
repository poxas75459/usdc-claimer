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
    "259P5342RzKkSscBTogTNB1Ps8Bx5pQ6R3qZhFwUPRcfBe8owzZzyyZj9q4yKxLVq85QzwLsn984mnoJr7MvwJ8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ip69sGLa4kUTfCzLJDV5NbZyPbRvMJKVbq3eC7uvZDssqwuJEvuz4bqwvJidsUyvbrUFkQd7ite11MGNy9MCuHE",
  "key1": "tK3FKXbjm5zgAmYaXSiaV5ppQ6GjDESKg2dmmr8wu2eYxZXfzWWvvfAZSZzaQx4VfndoCiBqF8SR1jP5SWrqJFW",
  "key2": "guqAHB5dhcV9BYmo6MfNoJYbM8boXs6E5onPt9YLf91m3a2S2JcRFVawdxuVXEjutfgTXQieAssh4NVfZZhyFgC",
  "key3": "4AdW9rF2eMdcV5rHsGsJCQJRXcDbBtFUonKobNBpw5gN85w7GiBEUWjBxpJ7Bk7dC92uHct4Arz2GuusjepURLGP",
  "key4": "aGm7mv6i5ofzfAMsFFgKP1rGceJgAyTD3EYWtLxJqSK8rjvuAgMhoiHtyq7pVAdyzdqERai2zPCSMJMvgjUC3et",
  "key5": "2VCa5jzvaqat3Q2wpqfm7XxgKxzzDFidrTmxPK3bugnhzvonNAir5YFvWd2sFE3kVmtSznbQYcaxGvtXysLfQMfp",
  "key6": "4KWkNqiAuB8yM7NuuiS8XuGkLpFbWyvRcMRDLTx1kXL7edFnTaYg8WRXa3dfP3EJdmhXnho2BSTBp3U7gdF4AYV9",
  "key7": "24CoWuB4BUMDbpRTagxGUHFzA8KA6cfQuz6hPUJHfgjCLsjJREthySwrc1iViqjvu2jwJKYQyM27Fm2GtmDukKad",
  "key8": "3s44WELniS5vk9GHri2PD5Vz7PfFJtUEm5gA6id4wQkwzmoBAsaa9MTkoHvpYrS4NT1apW5vTz4YJDTsTK1ox9U3",
  "key9": "4atf8VGjYMntPHpw1DtQftL5CwcGSSttnBQPAhmoFx2sZ8zcJow7m8NdyEtpRHtNkjxYkbcPuUeggmo13SA1TQMm",
  "key10": "3bNkaxMTjUW3p7m9FHTY2FcANhuCCEjAgdEP5Y32s87uB3yBcCmR2QWxFA3EZxw7RM9h3pnTTgRbMuQoFqpofmTL",
  "key11": "5fmNhU8PZwAWgrpuhsXNyPqPTT6jrZvHzNRUrE9NwRKnXmQQ2QxBnKJfe1dP3K1XAra5TLXUT5U4FfvNDYWrHYfq",
  "key12": "kCRmY6AubNp5WXzwk6yXUV3qe6VFTvoZN8xucZj2Re45nD7kieXfJCi8GGqGGzGzp2TMna74L7RCwBmL92MEih1",
  "key13": "3FMCRrHqvs6Ro2STb1f4bLnhww4ouTET9C3yiwqbuCT83SNBftdzsaE3U6ET7i2FwRo8EHvnuLV346LuEh6FTRU9",
  "key14": "2gohY7xGoouL8p9iXFX81szXMSkSX6ZMYkY6BayYbawohcze8SnFuZ3Qp1B1qBVzbVYvUim2iSj2oq3gMvvpvoH4",
  "key15": "aExSoXAtuufg9VJ2xzGyjAk7agYCzhtJqC2tZ7YuUkcxGqnCVDqsYJ7YbFEfyD85o8dykh3gd2iPewpGNwKrWf6",
  "key16": "4xoApRx9WqE3aEFb1Xy9TFnEKLUEtX8an7La6miyE9nkxSEM98tsiZU2H3bm278AmYjrZoWPETbFUwjofWDvgpGa",
  "key17": "3bMMhBAPsPujKuNXBQM1CrpeqBZ5VkaFRja7ZsQnX6zoA1RPkAC3zYSLz9V2JEjimJYM2TRzxT3q6QydcxF9qeXp",
  "key18": "3emALf19bAMdwsjtjbn4nw9GCDvTNVnmjGz9osg5Y41YbLso4QFLGQbC5cWfEAvHsjwsLMfcwnFdPspNCQWxoCJ8",
  "key19": "5DvWoaHm3CBs3yyLwADLiP5tfa46UbCNrhvtwwxrKsPAAp6Nfs7S5xEw1TvRwfLZUS5WhCWDKytHgV2st1XuTHsZ",
  "key20": "63sUeau8gnJVmeqL53zDMRC6NcQZ4p3go1TinLE1hxeKtcJEsF2nbcqrV5KhMt9m7qMPWyenFLvUWp1EJZ4wU8vA",
  "key21": "39YtgyBoYyJJytSB81hjjL8tKLW8oUwuNmmMjPBjTYkyJu5i4sq5KWrQxZr6bsJuDN3ikuktqvDiAicLjj84tEHj",
  "key22": "27bjzewZ2X5Zqe2jWgrH88ms3tcyVibn7ATGtTU2b1rhaNsamXrMdXdg91SJUCYKo2sE9ZD4ftsPRM7Nqth2SKJF",
  "key23": "JKquWvA6VrEH7fnnUoDwzbzsb5nVVD9mzkbK5XY9ntX4e5S7hAxtNtE7WC6g14s2UZXpJeHzAy7wKFW9EbQTeNv",
  "key24": "31DnxyqNTubCfAPmB6jVbspppNohEUwGSrfLx8rsHvvhBGCiiG6a3bFgRLaeWVCdzBNLkjmvtZ7oqX46vWueAyF4",
  "key25": "2ykA9pNYukBLLuxzhUWjVactE1HJ4joaGMkwzrnqiesYy9sNvRcrRMxuhn66pREUj5A4XSU7AWJW2K9camva8NzS",
  "key26": "1qJBfaPKdzZ9BygQCn6vKoLk2u2eV5uEmdCrJpwZ3kSxFuCyUHinun4tDTXeBiQdWAMpVjdoBZyoRwt6x73yNEi",
  "key27": "4tcSxMPVdbTvMjGfpJ18A4x3AwoRXYaMXzebSUGJxKd5dEtSKR8uyQUbBn1PbSUQY7DTu4BeA1AU1eoKaLWLeVQs",
  "key28": "3Kd3KWU7hbAwuARnPE61996MKoKFPpjtSQ6bvWMb4q7Hg36zW9Kz5QBsioRQf8TDDVx3UyFUtV7oYV6fyG7S394M",
  "key29": "2WVD4eXk8xR9KhcP63nhP7hdcRmX1iNS8xr7E9RWrauQE7U5iSv58RFCLE2TXEidAnyz9eJWKcps4Jj2NWvbwpBj",
  "key30": "XoG15srtFSaczV5nErtMbrMKFQZNtCPvjG3BzT4kHxm67GBfG2tjzu6budCBssLmU1zMNFSozqJdQtmWJGsZXsW",
  "key31": "2w7FPYroYzi4MA1vf1byYh4sj5UP8CSSYEjzDe3PAuKLUaRUHv9yJXUGUhh4vYc8mPrx1N3vroViy1H4EjJ1NgdH",
  "key32": "5MGfzv2qsDZEh6BGqPAFWLVrnKicynRgDX6TMg1NraHhCP4LgJ4czVW6zZ9nMyihj1ewA1bn4Tzk7Ld8gG51uhPe",
  "key33": "3FXLjfUmxN7uNo23hewFfM6HWzPzxqBVczzH7Z5NMttWLWZeLXBuPZjSVE5eFHsP9E1aYjaSDbaK2X74WmBT78gJ",
  "key34": "Y1CJm6MGUixQHuSXjGinwgfFk4QWgUKBCDqa2XixA9711io2s75pMwnP5T2FjdFHzgheqDuBQVUH4VcymLGjiHX",
  "key35": "5b4dKV2dXzEnh89JxnAYcuYRL95LKrQX7o3VpU1rXPnYh4VHrBF2GLeKRXXi2UbH3EEncx4So8PQqm6j8Fjzb5Se",
  "key36": "5vFKtXkp1C5rrWq3KUy3YYER4NarwmDFwc23oXqFuNZfmNDeyARhE6RUuoXEZFUoGUz3bHb78vt7KUDtmj98eFF2",
  "key37": "29whFNbbVKx8zwqoN8Rk4bgaUZYpQrc7kNS1zFivoQzJPs1JetfJi1TjAiVxEZYA8PLmB1KzeoxMtAKwNrVsKt2j",
  "key38": "3Ffre33zpvVahkrAYLG69jmb7yARH3P11gG9uJRZnpNwsjSr2kV9ctwURkSqcRWYxRmwrSMn7Rv2hL1y6t8KLg3n",
  "key39": "5BV6D4zfDiyrG2LGpqvbyCkokrE2wfitbsEEcV5Us1upFDFGFmVRyd3YUQ6MzzHhCSBQ161Ea8Y553dMs9nevYQA",
  "key40": "3ifvZdWM41hDGHuELUB9vDUMq8jNwYaNX6SE3dueYvmuGSwJa2jQM6Ec8jnmtbKCYs5Yz34FXfmPw6KN9hh6gexW",
  "key41": "4E88VxZQdKJfEyvFz75qRue6r7aNvb2WXbEGJFZ8uGnqDBgW4dtrzeZpcMyKogNhkvUqKznHJkedytNNN1NcE2sT",
  "key42": "2R3nMoKzehxyQdg3iMztbYfQUP1DiU1mw2AWyF4SGvphS7opXFPL6kLawFQA7cHLX7JKH1GncdEceb3Dakwb83pL",
  "key43": "T5gGVKcZdoKbq2gqAEfAjfUcMfkXMuWLrnCqkS5PFbAhEXo4yBCKJi9XR6nSfuJZTUKunCQ3XxCkbg3rcDoTZho",
  "key44": "2QtKKitc5NighQKuHCi3Y7tAzEi3vKemZiLfpWN2W6Chdi7DXoarZ5dghCKGqoNVFe8t1LP9dR27uNPRWrkz6p96",
  "key45": "5kFss1GJQRvL1Vnu8D1gPPu8M2xvLKPWgXvN6mj5uW4hcCip5aRUEeiUfWnYN6ZS1y9iMVLuenAG2L8sW4PU87Wi"
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
