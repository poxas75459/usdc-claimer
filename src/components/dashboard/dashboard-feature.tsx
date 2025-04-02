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
    "2rqoTDYFj593mStkCADGFzezUxu7dUt9ZHH6kWfZ7qHZuTd3oCLm8RwpceyWtQvPYwyJkeaRyRMmuEL2r7BLSnwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VCNq44LQj8kr68Dh7KuGc6bXTSmSQxxUz254YfSSLABwy1Q1C4W34nBoTjcehGbPCVLEYMKoPWK1vVStT7g5y6C",
  "key1": "5ZJyV1fvm4DP4pk5m8x4TqXhTBhNXadfB7W8yjXtPa2sm7ij4Sorg6Zq7gnJgVjVRSW11aw12Fswd2C9FmQmeGtN",
  "key2": "J2n78rbo9oqCrQ3R5kvZrcrrytjrpFoEn7bJho6JukpFdMZhwXB3HaJEzswp1zPqefS9VYN7bzMManZfZ1ZFcpN",
  "key3": "5Zv4Am2rP1XUkD4yufhKyDk96gXukA9CCA46sW4pmGmRVrtgZc7zARy1rswPvEAC9x3xRs926Qa7UCkgpjNNshu3",
  "key4": "3rpdH9bJ8ejxJL8A6X5LLt3xgF3KX7WbALkwrDGHnVUCqTNBSoVSK1nJzLVegq3BEcB7izFNSbkWcux4TBacDme4",
  "key5": "2A6sf59a73LeBnBVy4HGcxHFJwkPRhrWLDx1VstVNKpBRKckP2ARn7NErJZP7axYK5365AfTTCsBvr8qzP3USdoG",
  "key6": "3vRsFtR7SnX1H4jXszjKJWk66zuxUARegyKUKbJ5JnoHtFgUAdQUHjofVVPB7eVnrkEnjSz8Au7Bp9aUvqdj5NCi",
  "key7": "3egEPtrTKEVGZuwVHapEdfbYNjtuRUxPp9n6FKTcB2TVZc3oZW3uLfHX4w58ien8sPn5en29tG7nM6mgBRRwQHJ",
  "key8": "2iz54u2zxhBQ3ffiwXHz8atFvunFeKkiNYYoBU3hXRYN7c8chQBRuk9TsELBMMwRsCUFSC37gmtQVmesmsM5qgHe",
  "key9": "5ukHVprCipfP3eXmGHieyYB86BmcwhnNX8EVvSEFWJvjtMf7qbcJvyXzW1dd1DKi57cjDiXPGjPSifkQwQriaC9c",
  "key10": "5Zf7JUSHmrX67WqrkwjM1NBbV8U8EYaPmuzrn9UgkTmgix5w5VLaKQLRXcQqpWX9LXr8EVPYygh9apmfuzMLXtfG",
  "key11": "58q8oXNt8NhTZR2mej9JPq1hMrTxp2H5Pk9bfjAVWD2mMPPUG1jUGDurRkZVibvfTHPdh6Sa4L5rPGfay8x2MusV",
  "key12": "tjyLXcDqsC3ZPL8XvcUd6DcyQyWCz74gwBznXZe3PuhFcg3SQ3FZ1YdFdhmKvpi9Ga3Y6zK7tTPe9TdtqpcLYh3",
  "key13": "5BBUaEQw9YVySyLGy35UjRApgczB4GNbY59Fo2MKJr96WRLuzA8KJUFgT8oVsX4JwmhQRDdLTqJ7VugWztwTZgpc",
  "key14": "3zzvNjqcHwZVZvnqXNGuHTjWWp8CyF7wXVWxyNd85oA5iEtbkbbzk6w8GbVSFJKWkhyNLgvmSjcXgiye9TkbHUzE",
  "key15": "2Ktf2Rqh4cpbcsMu9UiiBRUs7nyykCaw2EH1cidJ4sPoYXwAJTaxYwWmLSAEVg9EC6TsPNAenZpqotXPYMd23owY",
  "key16": "35WwPTz3YLNqY7iboyA4KE4jAdXCjfQqemFYKPv2xrm3f3iYNHATmnyNvY5XMfKL8MfKFJ4hGfk9kyuYv7RBGdKL",
  "key17": "5fYuhbmuUGyBYV59xm7HLRQ73iqStA2MP81BoSarpLUKKgARZE2tvK1XH8oGLTxMSSPYXv814Bm8oTceEBLdVdmc",
  "key18": "dcYqv3fMChMvDgPs1EWi5iRYTRHUJgHCYMFid6ZMufKKoASXqv7eJVhz4wj1XyxBeHG86LRYKikiRbzWnCGTtKA",
  "key19": "iEtTPtXf8snA4D12KgbEhuK4WtcbtgrcGAiPVSSF1mrSgeWsV1SCg65b9hiBjevbKdXvhYtpyLfNFmRarqiH5GL",
  "key20": "4XG2YmBWzRgP98pxUVmHdBJoJr7CHJdRN6388NawocTvBdu2MJrmT13umg853k3FvHvRP1vez68hN5xEXrYNrtRA",
  "key21": "BsQ7akbVV8CFb9UvYpeN5c8nVedPsKGnod6Gg6quuYNYJJPwCBVUbgWBs6AeczYf96zeyHR8nkLQ1sVZajMdoqQ",
  "key22": "5LVFum9XRbdfDBpNarLB68Ro65nDshaBUNz923sWwWJDhs7D5XBVZcwiZ62xn3oydMK7vLvynhVPA4LZFiM5QRjN",
  "key23": "5UemqrJK1PGTFgkSL4vZ1FgJVrPZLJTqm1xCcQoEk6mnoiVtdZ2vVgfxH1HW2SXm2BPAGFx7UGrvvDNwAGRLQWkL",
  "key24": "x4EB62XHkW6fU5rV84TqCgQNGJjK4XJi2CgiKBgW9fXhGF9t3x1GNhVwHFqefJhKAWfV7ngLtMJDsbN4XMhAEQv",
  "key25": "54VmpM2iFg8oCwsPkLGYK7uSnoxQtQYnM6duBR8nM7KUriUzjzePfLnSmiudd9iuLBVfWGqwztcYWSFaXMgmBeQQ",
  "key26": "4PLMPpJkiPUGnP9mVVqgVhQd1NTA3HuwcLTMEBn6PYYLtmJbrzQ3v7nXmvY3vNLUzc9yMSNQFrajUvoybRU1utpg",
  "key27": "2DovFjbvDX95faBpPTPFvs5FXAuaZj9UmQH7N5zXZkoVyst43RRm8kVdcXNLmS6hAb35bv6F4vdUDEMvcSz3K3Vq",
  "key28": "k21Dx9KtaYLdnuMGG8KG2nyqdcYMEw5bBKbi4s1VNiGfQWPKQ9zEBhViGuN2NkVBYFAA4fhCACRXMKb764nqa2F",
  "key29": "4wJW3xKjVcPYiFVDsViMAoVTkAibxTVd3ZnDy1jskcrkBRUo1tDMA84Z6EZ8xBvXGHhq9i95H2m76dzbnicgHFNs",
  "key30": "3jpXCqV4McyKnR6y1PYaMSCxLhxado3SNKD5waaF2wTekDRoNSBjKbeBtRG8bMbr9uEhGwQLXuPdeiGNkwEz1UdB",
  "key31": "392QRKwmDc1MVUVyF1Qi9JLo63d2Pz8neUrALhFN3fTVhgRa68ZcoVe7Em9KwUB2qxP7mnTuVkK4bAtNSraSZXEg",
  "key32": "4CKP6k26bTsRXZr6VZYjiV7qXWsvf2srvx1TXsfWmJ37b8HLrgCRafSMT9VsZn9Y7Ywcu8KU7LZuWJ4f2JHJ8uBw",
  "key33": "5ax88oRtufwxAQ8cyPpJVzAKDWXViCrRi29RMg92D8XqZAYGnFECCRGufud29Gc18jKErDSJfJd4JQ8VwzFYDeti",
  "key34": "3c8DTNM1FkNbmWrtjAMUAGRvVreYBrL6CMxK99i4F64ssHpqnGKMw8hymCA1Q8uSEwuHx1BG8nvL2BzdGunCppsZ",
  "key35": "4FBMgMYRW8yY3Ha2hzRXiR49QLakc57ivVuZBTzeQm4uWLKq5tASS5XRRWfJzg1afxRkyxSGvak4h4ZkYALbb7qV",
  "key36": "9Tv3TzW2sFkHXcPeT9mmSarp7BfR2LJcJYMFDMpVXH6u1v2S4rbfJhhoVwRr8ZMTQ3j4M9hBmwQX36hHB2AaYZK",
  "key37": "2NR7e2x3nJkdD4EdDnxhsXjLqJmmo4Ewzb2cJC2Byc1TCFNPWwQrmH1xxC1Rtob5ie3odRQSYDCDpngxFW33sD6v"
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
