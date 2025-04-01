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
    "2a1hJY6FiepsJCjq3SWZwhrLySBhyxnitRLNrvPZXyZ1tk1E92mhP3Mb9EfBp8cPhXtHNxrTnjtBpEQFX6TkNsuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DEaF6pc9gnyvdVR2u1KksXpgcg3TjDTDTqXGoVhDLD93zqBR8Gtkc69eayFQukZ48nJLPYLQyUKxdQSHisUxNo",
  "key1": "54JkkeV3SvEcvn7AG6xKF6EmL6VZtyyF48q6o11Rhr2YJ8bWjnP4WvViBpUHBp49JZHCizzNMH62sRGz3ojaEiws",
  "key2": "5oguZ4wEfC8XF1foBCQ8LJ1PqDf6x9TDfYReMywqgcV3D3taPGYK1vv35FsUuWDbKVznXqJWxNvtpwkcoDFdmVvY",
  "key3": "3pQXc6rr3wsW7RuAhHmJRYJKBAdDyJN7b1JF65L2Rpjpm5mnDAHzcpZCDkQCPwG55X7xS4AJctVeyVy6wXw6czJy",
  "key4": "5ADnBMuJkzozUHG1J26LGtJ9QbrQYbvordQ6ZKViBzCfRG5nMjyvbRapS7bnmDTqrMRUwUNwoiXu1oQaS896YsLW",
  "key5": "3vGtz69avcLi9rbhUEEnUmiiCA8fMEuu3UKtqwMVQCyUNPFHE4YgdRzA6Aqcm8diRFo5yEAuvqZY5hZxFLLacH3x",
  "key6": "4sF2Yk8a3CiyNQbweSE6Yix4v8j4SuvBov5SNPBLubc49x97oCuUvB6e2sgV6VJQjU6k9tositfaDxbFYn6ippSh",
  "key7": "M2bhqtUwDRvj3KCrKK3XBekwzB9Ei47viAESTaX8LvG1QYxjCukRA7UmaJpUMSPgQ4yLMXFVLqbhiWv4gRcY6rE",
  "key8": "2Jv3mdz9QNPbrUzKrvMdjreYeFoRQum7NnFWaETfaHugZ2s41sVUFxg3EbPjgv6mXNL5kuzWrv8DSiXBhuXYA5qD",
  "key9": "Unb2cdbpwDGgk71HEjWmGTSWSECxzU8fwVZmt9Jrj6fNsqnsztco3KR4UetHzVjkvRWhGxcG91xqMhwcyaJLZL3",
  "key10": "2cx9NXkWFEWWMcsbhncPbad3rpxr3oxkKv55iW8bLSp5vyyLtbnbBzBXNzR1z3MGcqi6eoaT833WBUPxB1hociWe",
  "key11": "62iFDcvKzfdG2PcWP6XoNXH6CtQWncGFhjqU1gFYFfLHGEp9iCA9UEYCDqxsxXHkLtf8phvBUa5PQNoyamoGjJGZ",
  "key12": "3hyxKFhqnEeYMaABm8gnhCbUwjP5fYk23MZ2qPsj667MjCX6uPNUARrsUdwTCYt17qYguRL8G7hHMgjkSqZmyMDd",
  "key13": "5RAseF5Au8jshsKL64hAoDtx8nBzu94M2vKRrYDmWYF4ir6WnnLYMFXWHyWmSqL12EEhynGrDYHgqRwMkEvQmRT5",
  "key14": "4zvoE2fszYsGZiGeF9qUNYYTRZaicVgjUsepLCcX31dkwTq6pRfQC3zhfqCpYNAkDbdKBLz5Ko5tx4r2DBzrdWKG",
  "key15": "3t2Ly6FQTqRs4LHfq73HYQeX2vVzQZyQfBTdVQgvnBUok3ndLH5Gz41Co5gbZtKD4rLiJwicpya8y7itbPcPPYwN",
  "key16": "5bSkpTNxFk5fmWY1kZEwgcU2YAsWqKJkpEE5854dDTSMvtxjD8fuHK1UK2rtEUPpch6wkk3UMMupmTgyVeCvKhpT",
  "key17": "4gyyAiJmCaC2qRgXqyebx5tJYYFdzSb2W5EcKv2ETUQYB2sVBZKA5svt8fVADdPE2dDZZbLfCfecksZnAhjgssRJ",
  "key18": "4dJGHENqjecXEc4sFJkdnKLDvgqXuBHoHLCz8DeSH5LhEninY8QYaoZCrPKP5YgczJtyTSNv7fQu1nfby8T3CGNR",
  "key19": "4wPw8rKvbozXsuuiRs47JdgT9LW1BcGSLJiMnxcsTxifxiErjgYCCwxPko8RZCGYendRrvbv1pBapnokbtRBgcDT",
  "key20": "5HeAm4Sc2GU4sTFneXHaoJBELvuMwTj8wK6fFUYDMARdm6YXfnEXsXBCiX4s7SkULFGtUMf2h5EN9Wut3YzoAcoW",
  "key21": "4R54mKW3iNa2UpELyP5X56ZvEjPTZuqYFK56u5ccR7yoCJBNQGZDb8Hi6vqwVpoPyPtpUbLBBjZVgGK4dUbwdjtK",
  "key22": "4PsQqDTRPiiqsBRa2N7LwkrfkAeK152feu5sf8z538J9bfB6vXqgqoX2WfswKXnP175MFvoRJmzHenanYZqS2MR6",
  "key23": "5czHYB1y2RGaNBtLZmqjJaroRQmyWyFQcudSJkVFfUAQZAvUrjZAZKnW7iHXpvSn5qso9nHiqiMJGZqRjyAVtpbH",
  "key24": "5J5GeofkyokCrHzkpqNf1o2TYXvv55NvJVJVHjdbi4nbJX8DgBYoT3iPcj7ce7srviYPdrs2jcR95ytYoyfYU89i",
  "key25": "QcUHP2AZ3Ls5fGbjwV4wbANaGJxhFwCfhYw7FJSC7jjHuXFUuDPR2gYbgtcd5zhv89xxWEkMZPGk9HCJCAhKXbc",
  "key26": "4aajL8ePxYXSC1mxUrR1zL7JkUzzZJxN82sjVaaEyLE5pjwJ1FkMF9TUiYB2WaZPLTZqVxAyJZVBTN27Hbie2hch",
  "key27": "ikxQtpRFw1kAv2eatewPQx4Jp8MkpUVu3UayK37RnEtgmUk2s7EfARPgbMyxCGbFkBFRijAwTZaBerSiPtyYqbg",
  "key28": "5usHKErXfHdQPSrKWSBsaRmhDeQ1QBJ2rJ9GsAzjnu4refym3TAWPC6fixabsowPUbc75wd2cQLUvYywjaohoK9b",
  "key29": "5gyunKGFVXugMJjqjy7SA8qbrcgeXAegoS4xHSbeBFxJB1mWqkW5B3wjC3jw8mxLzbCW3RYPekw7Zb5GWRTVARjN",
  "key30": "dLofP5mrpSCb5Vvfrap4FFDUjYpjy6MT9ucibRk17fo9ABwzZTmMLKVEW8FHVfPjjWCHMpbKLnrGeKpbTQAgGBs",
  "key31": "55qTSKUL5iP49t2XFu5r3JGAbNHQkvYUUhwBWzJ8i1yEUSFLgtnH13akGVDcTCzkoB2HSzqXeiJDj7sYbTfWEwbz"
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
