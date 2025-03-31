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
    "2hhSujcAm4816gkQYMDhxrXiu1k8PoEr99WBnhfP88M9n6QnmJsiQTQCQc9EM2hXmiWMZ8RGc9LHf1CFQ4VbTc7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BmfbjiwAKE4ANaKQTUXCWrasZwFjec8YmEaNGf2w8aFCroEnzn5a1TaFadMr7ufYkXkv8rr5ymjmsr8R3A65CVx",
  "key1": "5zPtHAVoypvs9i2HoaMbq1Qjgi4yULv1xKpAyJoCKBLMH8c2zjj6h68qFGUZyKn53LoNdrc8RQQYM5rfitsuEYhG",
  "key2": "5tsUjW2ux4FwCf4BU4kPecu62zXs4G45DbZiRueXuEunt72rLEouxtzi9X7s7q4b1oXrQDMjR5fNFqetXeMzLC14",
  "key3": "3rBD2VjuP16cGMMHhGYUCEd9MPJFgcf3zEkNTqZa1dXo7uPvbmmX9Y11gTpkk8HVHs56ABenMivAkufdttNrmHqt",
  "key4": "4T3rb6p2n3zobvqqEqDN2uNakYmjPsdQCHr7RkhZLTuksP6JN6baa7qxeWdDJWLegGxAtJU31GBc4aoo79GwZV8f",
  "key5": "5APg5jaSk8JRobWxsTiuHQZZaN9jLAvJobLDRURdtd1Z2vRvg3qGeciUWg4einNZ7CNqcmfJHjWAu8VKf3Z2UscE",
  "key6": "2gCjpqs8MM5YuJ4x3tSy7d4BGhghT3DjPx9ghcYVkCLrhbbwTic8obURdDmXcfpxL5ZwFDymM4ZxLssLgqjtBt4A",
  "key7": "22GBEBngZm3XjSvKTxA6kx8uoAmvgF9pgPyEnzQkvw2oweyC3R7RBJu3hxg3rjGCyzLtkBraVqL2mKo8hMU3wwmJ",
  "key8": "5PiqyafScJwZYueHDTEZftUYuKMVo6gNojwBDDka3AtmnCR2PDWGy6at2TMikPYsotmQhy4WmHDMKySNomB8CY2w",
  "key9": "3SYEC3u8fRomhhJk4nsfDfJ5LEaqamayHULkrn86CGbmKRqttQMAcUKCBfQQYUgrsfzVcGWdCJupRecatY2uv1DE",
  "key10": "ALv5ZCXaXD6dSfkKTvEiEaApPwo8CMZzFXmwtQM27gEHm77QhWDTchUGaw4BcNiqSHBecs2v6Pf5G14qDW8bUr2",
  "key11": "2XtGkzV9P5egaVScmbN7hzDy2JQre8FNesMdHcm331GK1915vzKUic74CjFMxAGM8GmwMAZBjUeU4EQbQuH3JiKc",
  "key12": "2u6BZ3TUuwrpTgpuoUhJTNRkfwuuoeHpxeKmk2yTjjD92hmgwi5kwF91XMsxFMmQML74JSeJ7iVDYKuo1idp16iz",
  "key13": "2LrHXVxaacE6LsrEaumyCEqtjy7zM8HTa9mrAYjy93LQ6i2BujYGRjZwDi16BKKgJ5eosMsSDXkvY8uKi13XYpnh",
  "key14": "UFvfF91JBrX3L6LtF5ZFMdgA3rN9D1jVvqQsdTUSFK38xHHERUqwJi8zfS7Zq17i2Yuh1h49SLSvxCfhtMNpKRk",
  "key15": "5BCeKQhc27MRrsgsbsY3YhLem5xhx4P4BtVbqzEACbdtLxmo9PBrX9ZFSJ4FkR1wekYRcqKLyoACcWyJLHR485uj",
  "key16": "ikGWG4Nt8gz8WCuX37X8boCjpMWQqQNxfsEMDg3xk2kj7YT7u4gihRwu1KYD7zaPAzTtwtMtZsc74zK36psaswn",
  "key17": "2jqHUdiqgNo7KbQkXgCSM2KUHHHZPX2YWqGJQAqUKti8T4Z8p69on7VVgi7KDLKji1h4b6MSziN2zy1E5nC6Hd2g",
  "key18": "3Bfuo85GGeNz4pW6Whh4fGhHTe4yuBzWNazebWyfanTEYx2CabnctDeKeqoh1RuY5Xr6YyUAFWbM31MRXekCiYFw",
  "key19": "3i3a7Ftsn4ugbJcrxq55bAvfZXbEdsktQzrezLQh73QSgpyMhkoFhPWjT98DW1sGjpKg2L6KoHe6KwdousDTmKNM",
  "key20": "4h3K7PcG4P9FNeG6t5dJNaxf1DZdgSuay7A2hXrdZUEPRPTPaPM1PmPPpBWqNMyu7eQyU5UCzbZe43aD1EnB1ZAr",
  "key21": "4uw2Tnnspss3ptBzv9VicFb2UuEv7GCzBpx6EqdkjBSte9y1nApRs1CcaECxEnWpK6DMnX7GT4u7Kr2VvTsuw6qK",
  "key22": "5iqd5Mfp5kUwY8JGN8wUNa2tE9YPZo11fFyczqVLmQVc4ZxuvRWKsZpadwe8xi42vhdk5ckVsr3bVQcETU3UzJ5T",
  "key23": "4rMeGQTSFrs5ecJNWZRqSBJHLSPuyVNthdew9wM5LryGKTHi8riiPkajn8TCUmvrxygRsmFkm1oLvbzddBBFNVz5",
  "key24": "5Tij9KC16iiAxAibrEKHQ874tGdKS81BZGAe6D3D3xTB7fn3hTEC6k4Hv6AovQWk384vtoPV9zbJjsVWetvpNEpM",
  "key25": "6QBQsMnABwP12TL63QdcZ52mBh259cgMaFMYDxbUSUAV9BnbwZcmrofNM8igSieWnYKM1sUBqrPoEVnXgSu4nB1",
  "key26": "5c5jXhakSb8wp4b6GEkvp64RRsQkUKgak5ERLBUWKtvWttD9YNT4FFBT5924DyDwNFNWS3V3MUJv3fsFWdREP7R2",
  "key27": "5SWmeCM1on24ji4habnwC9c9AWnoietWVutyU3RFCJZWHYUysFidyCT74MXoDidJaiHfYDsCmdbJEGKnMPj5NzTa",
  "key28": "3cvGz1ZKgTCXqeR5r3rzGKm4Qy4pdtue2msqubeqb8v6KgFA2cagdjgngFJMGRj6HUctrJHTMn6bDbGSBNEyqrZg",
  "key29": "4mcCG8vuGxYnS7J8nLfVsJW2wnhiDhh9W7GKYN3A6yCG3mFdv34sB3hFpsGEj7oRm9zbmHNBavV5PuoYuA9waqKH",
  "key30": "EBwJMdxCG8kv1hXGde5D9RYhSKfYGp2WMoH1siB2oCMhnfDZ1pe2CVghq7yzAnkei8RPkV9NvzmyTuUwN4dDrd4",
  "key31": "3hRF8UmVSVHC8qUb9zfbyBXhtXmBQuguVqQGfd4EmnugBLtD65cXLnuN7Knaz6izE6MrvJtrBDbshRU5qoxFNbN",
  "key32": "3egiFg2FESES7CPGHzCeabcykZ1uHYFSagQK1qQzN5FZzwuzQAMbxbJVVJmSMtY7VUDcRMQ3GkAR1qkpyjNKQSAJ",
  "key33": "3DdtGLCCsQRsCMAZuakwRoYFbL2TZ44YkXcN9DQQMbEHL7R7PZUKSYbodBhKesStUCiHh24ctKMbWJdfpCEdHDrV",
  "key34": "ezSCSVvLWnTxXdhdNUUgayg7m2v1ZyfWkv1fPQ3qhq2BNAyQr4T8pMfwxwue6YTYW18zaYAbhWhihKw4Ansyy6W"
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
