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
    "347JqTygSxhXDqW8dYFx4jhfBcx7R3jcWsEpX1hjHb3swyaENzbdFPGvRdgVddFVegE82jNj3L3W1SdhTMZFtc17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64dpW998bFF96qYdyDauYqBZBfbQRe8ktF3m1o364fgdZeQbZhaisepGXZ8cNxBcEzp8mZH1xqWircqaApnumEib",
  "key1": "4sq5SqG63iYut9EctwwKbQW641hHdhCWAb9qkuRAmGGTtLrwSVLBcnP7mRZnjpMahXmwtRCYaiYBLyCuaZM76rux",
  "key2": "2WSiQpv7cEvCLAo7Z4vq441RVxF7Z8SiQa3Wcufv6T1knLudc6yiKgqyGwbS6Dq7zBdKjWtgjsp954w6CXzQJJfW",
  "key3": "Ym9FDaFNshysZQ6dsoAhjr9U5HxUNsWGXGWCg8x2kHtLQE2WUrtJUrH1SfVUbkV7xx8niJyuKzLA2CqjDWj5cHC",
  "key4": "2rBzvYd3M24DM9RNU7e5KnUGtfjLxH3GkkEvL25rmx7FM9X5qRRjZHE2vyQHTQKfTswNH6Wwy1MSAR7UeJXcPNJ5",
  "key5": "4WsVxUYsk2rHGtC9zVSEgU9TYk4Ps2JT78KqkJgD9oqYAx8Uwns7mMWi2Dw4fpcuXM5yaGUfdMH8Y1sXTVkjNj9t",
  "key6": "EaDNqMsAiVv9eN8DbYtnv9AiqTCjMmBmJkM2i5m6e8BCooLYDAAnfT8X9NHzEmVHuNfaYTWk4eAvcv86XTZHG2o",
  "key7": "5BkwTtW6fn2FQcUBzDoV6fJ7BkVgYiELuaykWwGzXY9ov9A7ejs85kLtzp5WJn8ZpAX8roaT5N2VTvDjHEgyr7rQ",
  "key8": "5q9jGVhshiqKC4a8wHCkek8AnwpzGnjQuiti5b2PhY94rm8MmhiZ4vo1EadcDWdJHbFb3UbkxjjtAyMYiLnvokXX",
  "key9": "3FAyAkihKPjDT3esWcDbpmLDECX7yottGgCRUN3f3tcvAX7WeFYqf3phzbmr8XiPJ5duj4TMySWH4Lm4SS51gvwK",
  "key10": "4eTsmT6s5BW8VjZK7BbGqZNnhP1oYF1ZqAEC5bmgGd2MtzrZQgcSMtiQeQW2J8rQi4bGdEE4DwuyHtGzf8cLUoos",
  "key11": "YKBPp8vwVyUjokN3yssQZof3aMP6c3tqUYodPfT2xLbncmbdzeCTJoM9dMLwJ4nfYcaqi6iMbT9J1KUzMoieVNH",
  "key12": "2mLKzwEwkJf3DtgQbrxCZKaVTuy3rFzFPujckoAZS5WJD2jAv66DUQhDpFkFtiwvMebymEMZAuRAMMK5zs5CsAug",
  "key13": "2FLuQN1ErZooW8iC2KTvLRKgAvhchYB9hyFNs9FrMGwwLos9H16qkeEEWjoFRuPiNybV48sBcAbakh4es27ZDGW3",
  "key14": "3SPj883bZb7i5jsU23nJyAGjcVFEb7gsPKnQHFgfLGexqPMwGovTq64RPrt5Q9Cq6gd48S2yG285ctmVi4PvhM6k",
  "key15": "4yPaTKoDn1JJrwXuoAdXcktqbz8mPxuXGyu8puTZTMpc4aYPztUUWPzDkh61sQ4LCFNZ3jhzXA6rLpnp5WpTYwac",
  "key16": "3Phs6pzVQCHnWitd3FHqeaqKs3NUe8M7DVwvbcsP3oCZ4FxYT1cDnm2pTQG1Rdtkh4h9BEYv4XmPCBEb9BFxfJCF",
  "key17": "61dxzAYPFQxTwQ6gFnZ9bMvFmAPQam8ZWWW578ZUGoPuNv7FVoofPL5Wo858v2ddrWgTB65N86hYqJVRpqjJEwn9",
  "key18": "5zhbNbZoUcBGukzmy8HPp9BWx16AAaE3te3BXfbUuNCsMoodFmnKPu7wTXL7DcyBW2j8vP15Z9bob6Nc3sa4fG9J",
  "key19": "4meU3NuL55buEtbKubPskDAA8tiHuQsGqFK3WbG27W7d3tudVzQ5fzZiD3E6nGjH4oZQWH9SLbbn5tu2qzVQP2FS",
  "key20": "ZcRQ7dJbST61kgc6r7z34guCSsdL4AW1UrVZzEU1RFscbzyK9HCVaM9GsR84YQSPUoRhtCVupMboK71mmhqtDC4",
  "key21": "5JYJXdz4aVxyjfSxPvs4xd4TwgKeamXRaH4rRLN52TRpASsAk5TRrt6jLEyQ8KHrt2hMwrjH9qnEcnnWNJW9Tdq3",
  "key22": "2tEbK9EesK83gDunYzt5FunNWHVRCndsYDDaoU8BRvBuocGpiEuSVeSS4a94WWFNpBfzkTzWSzRobNJc9ByMxAwf",
  "key23": "5CJaPV9sEvgBomKCsG5tQRua38XW4TpQ7fNhjtsmcFfZGZDufShNFjj3pNbUsgUYKeFb3LFfvJNs6PkswHkNBStD",
  "key24": "23xMY1uZUtJN1vugUbhjamRwFv2p3de8xwMfKJBbFXDu5F3KjsWUx2QiKfWsT3HkUx3SKfxfYXynQaEqfsiijWYh",
  "key25": "7bt6Eb6oqzTgWr3QYSrwZaxHePxhKXKFQ3yStpeks6GxobtYEvgNhYc4ofpRdTdbe7bCVH58vQdYKnFUgjYunHC",
  "key26": "5wsPyfq6BSME8VNXjspcaGxWueWS3HUCWGMT9uaN74ywNVZL6zf2FAVRxV7Z8aahcvnBniArSiyFAQAoAjb9k2Br",
  "key27": "2RxYwZqQ8GSHbTGn9QkjH9Hgcfwm3nbCH4TcE2KCtzF8YWg5vvWfRRoCPB5C6AeUcrmWqT8dJEcZcSGNKYBBwebn",
  "key28": "41N17XauHNv8nQ62QAF5FjA6HVZ35pD7aAKKvDyVZy5a8PL3Lwxk3166BuTgXyLAasw6vDjUzd7jgsLoJ9EM28fk",
  "key29": "2V92PQYvBfweqRa9dGN82KEXi1j5uZJjF2CKoGVJY9Fkf7STuAYiQBNywwcunUCRTAkx4XAKbHs7EeuDUPZcYaMc",
  "key30": "QfJHaeomzbUitFB6rx8TCCSivbM8t7Vw6tqssziVPQhB2rzH9HWKK1u1RbsW4Zey4ZNuZpWEqtmpGp9VmPeTmnY",
  "key31": "SHwgeSr3jx7Xhw6XThARNNYtRL8dte7dXt6NF13QRZY2vtyL3XLUhKJrRA7kaHXscFBa2hZVKWSjuTLJfjYL32K",
  "key32": "4Z2uZbNkKJnYzTHAUJprsWVbk8sWfrZcsq33KBjEc1B4fiZKD2JLSAGEbv7c46RciXwiF4B4zHfbHHdu8YKRBthV",
  "key33": "2UQKVaFcJ93zNBvsz66Uv9CHVeLZdJLc84qpGy3tMfspdpaQDfA5Y1RRDBk9QCjmVQVsDggb3qyjAcHdjmPQLcGb",
  "key34": "3nC965uRaTKzjp21jzGZuMy7xpz4FHj3rS6F9cG4wiWhmiQh3PAM3NWjqTg6HL9VKeYb2Jk1LXeDNjD9ux4qhN11",
  "key35": "34HQzMGiEaNFp7j1LyNZ6ES243ETb8e5KZCuc2Tm4ugyv47AEAjLwmUAmoK4KYfV7vT9BkHQTzQezoBSMbKHnmeK",
  "key36": "2iCSaqMJFjuyysL2F69ainBuNXCtUSrJampHnMoebRRZ75EC4Y8Qn4y7MXKMJCBUHBgbf837efFfAGMBMkfCVhuX",
  "key37": "3o3FjCLJz5NCzFdnoaXMAGKKgX88hCjqHorcWJMuhLQdQQPgwcnYKQDqykmoUnSmEANzZWXAHuCCeYPi1k577yjp",
  "key38": "5Tgbk1ncCnpEU9JcgJz9YhS2rFHXxekzWiR73w31poech2e84epQNsDqLoqi54WtYqo3rNZikg8cNGYh6VZgsSFr"
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
