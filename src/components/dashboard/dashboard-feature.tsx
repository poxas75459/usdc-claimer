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
    "5SKtroxrcAtUq6Rs6XnGQtNGSffpwx4LhdXEqm2ZXWLRThxy5Nhx8NKj8PnpXfKmuK4auV2BAeR3yZbeAuLwhyhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVCH77dtqktR1iuaDJSFGg1oZp2g2eMTxe4PZAfSz5yqMvBb9mGD1g6KAWvFGrdvPu3YoFKbDQPRdWBCfRjdJqB",
  "key1": "4jQg6Q35igTfu7CNf3jZAgaTsYp2Wx1QAw2RGTyZiL8XYGWLc6BXSfVEsVHxTfbua263qZG5SnzSb2PARQjUP5QN",
  "key2": "5pv4FWpViaxYmw52hw6u7NiLM4GRLzQfbmmQzMqzVSed9fq31YsE9LkBtQRyvRqTq72HFVPKjEVCXJpDdAcyVARr",
  "key3": "zhPwRkQDA3UE3NHEG8UzP5UJfoKJwDdVEEms31c8o4hhL46mHr6ELzdC1DC7i4y9YCbLiAsjAQRLJPatXCqe9ke",
  "key4": "2HvWxqa2jJMT3MM3E8anSqVAKbjDuuYGEp2zWZVF4sbHaVNNNCwuJD8bQ7yZSkHwefhtketQrdD7VHiMwbKQsKYJ",
  "key5": "oy1xKEHWp8MLk1RTvd3BhiY5boGKM2NwDrkaRmssHa7k3NYBFXrBU2PYcZ8ts7FZY2zkd527C81M9nCkHC6FB1e",
  "key6": "3p5dZj4Rm3B1bVQuBkbkdrKEWfHsKDbiawcnvhMmw3r7uHcqABYavG6AsHLo6Fxx25uHJjSsktgYGHiEL9pcnqxE",
  "key7": "3VQw9uzWstNi2QzkpU1ucZ7QL53kxvuYwDCzLVHJKvMxqbJvtmKMM5kCWtGTmVHKAUVhYwxcU3tjDdeMYfzBZd9P",
  "key8": "3yogMxePRAdm3FXEJjZHCmrdaACD7qCCjpvcGJ7KxJT6oxHUTT88sz7r78s1h6LsBSRvmwAoe6kf2GU9e9WNSxR5",
  "key9": "4YNvsPCFJHP1QTnWWiGyodfq9zrFKPmjf84fMQgoTBQe7uMTLNBDR8pTmejuh5GLCaUQchktnsPPHyeAzbUaWc1r",
  "key10": "5sWDn8jmmbkciLJD4A2CD9iozcf95HRyJBQPzPxJaUGwkSvhUtoE75yjVq29FbiE3RxdFpGN5A4eKKe36AbHJg8f",
  "key11": "29ePxMHPJiExdMFxyRxwRKUnHGvSD19nyzMGT8pr627NqgMGM258UJSZe2k3gfGxie4NfwZArrgHwb162QbwGvkX",
  "key12": "4iyg4bWd3Z1Le4jE1oxk7twQ4Y89Enfmka1xFJ7V2ktogSMiFEHYAx6K654RmjGtEGDAMikXo91tfq7yspPMagHS",
  "key13": "5xyoGE5ZogsABik7EukicNypPfDT3Bm6XA4bhfUuDR3oEnh9wStm5kE4rDAi8nrxbiqB9ZiXcUNxF4kKR28rjgNc",
  "key14": "3u6ZWZMptpNzgymfWbTwLRD6jZ3BPFiQ3WuGywJHCJF9MWNPBDR42Fn9vQQ6NcgdrqYMvosCsYy125WdzpvakF5z",
  "key15": "3HGywXJqYDWd4JvihP2rm72iJk7GHsyeJwxHpP8HNpiL1FYTvMTX7UQMHnC5EokRntC4bewm6K7ht29PH2CiJmXZ",
  "key16": "5tC1UDKMkhWHXVJ2C7oCvy277msUKwRheHsWAj5UaYxiZ39cWzX6GSCrn89tZMA7GJs7tiYsbLt11gaDi6BhedQr",
  "key17": "5iWhN3Eag4ZDz4LKG1kSpyGqoBdHS6ectJPXkL6w25Wq36yJ4ALz2F1x3We6VcLBP3FrpGZZJi2QyJHq9T4BHKCe",
  "key18": "4BwAuprrNU9qqg4rG3ABHhyCvsd249ojAQ5iy8bSzf4H425iz95xxMgDUKXEiR2EmshUoqWwGATSCsQ5LT6SykxN",
  "key19": "rg3HkowbvpXL8hjipyR2EUKfKFAnRWPY8UzQ3w151dsXhFV7brmHShb3B8geJMVL35W4f69L3QBUSxpyTLV2L2c",
  "key20": "2AVwSj6wV8y55JWUjD1GrWA3GKUb7G4X45AwppqSAb1XfT15zWnu6UBKyEhafouV5gjrZoAW7SrmTdQQx6nTQQSo",
  "key21": "LdgwqsmGbjGhznYwvTHtpXFwF9BNSexerJ9sJ8ZSvSeBSBdfHBBHyerVx1EZFNb2Xj8AtGd7RPvWeziQ5jRFHDj",
  "key22": "64kLckHQYWHpxRTzdJ8JPvUTu7PDgbF4xRhcArZnaxFbZbxLgdgVsoqrY9d55AwRc2A9PbtJ9qqNjLjgY24UvpmP",
  "key23": "4fzTVYwt7wc693ckrFm6vH3tgAGDnYLuam913TtSJyPvTN8zosLqcmihma5z8gnCNmNmut7MMf6fUtX1W56AHhDY",
  "key24": "3P1PcbAGYVuo5T9yyDxbyZ7U8XeS7a3FQFP6CtsPx3sgfDnR2GJYQiiCLL51ZPRrWYAp8Tk393E8q9skZo8cy2Tf",
  "key25": "AfZKAMtmsaF78Y4HCwQyVUnw5PtFBNdRFgmVZ3yxMhaPNv6UYmFYMYt9cjF12F3uRRezbwUna3tbvAxHVrqBE6P",
  "key26": "39rE8zDMAQ9WY1DMY6fSwMCNFKbjmDS9NAG1LGVa3oUzKmW5KnQHLxpoF5ttLjft7qizRSfQSiDv4XrMtbkfKtdj",
  "key27": "4qMoxEiogji9K75GZoa42GLZ4M3sJrNh8q4s8tXRf7Wp8LTTEdcifmiPCm8vrAwuVGK39a6K9ArGUGf5u4ZhHAVk",
  "key28": "zTLAUwucvbJV5Qt5hYsMPgxhDceMhMSowCAnbQtySZqUVRAvjTUy8CLV7frLCgZRtpcrSbwfX3rCvRsVB1VoYBn",
  "key29": "gXFtmBN8nDkivc7BeAnGfDYNsA7eafrhiHCZjtqV4vUPUUKn91iWsqL4mDGw2B14gc4iKH3WpwY5pwudeUgsCpd",
  "key30": "5LdWAGGrq7rQSjNnJayGWHxffjpggZAXKerW4UY98WK9WmXnjCWNGgFcLosTihNmCKw7TgzAKY1i5SCYgiu6c7gj",
  "key31": "2KvNm7cVotxbksHsGGbhjhcABBphms4RyoPcavs3M7QUPCs9PPH5dxo4vpN5J83XAnfWSRhkW2kvKZszd6e7EynM"
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
