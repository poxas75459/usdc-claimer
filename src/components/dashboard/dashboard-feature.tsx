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
    "5gt7tSXV8qQmZ8BtKwzNXb6VT7ArtTVCwHRHLns72U2bZQjNXY5fr9pdzXEcNHvGqQrHoCkLDLq2iq7CSKWER9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsfEHbxbNppF6eTKYWAijQiwiC1DxcWxTBWFrFxkwoZRa6S4sBRUfPoHYeE9byci7AEYhs4krufuEboWUeEgEnU",
  "key1": "4zF4LW2BYd14pkL9udeunrydJ1S7vWkCRZbtcm7RFLZ5YLvQqzE4MyZSix7K4sKWTT6Y7foEs7Ze2rdTZA6x1a53",
  "key2": "5jSgbZ9ckFzoA2tmkroETmjXqyXR4fdX7bPB1fs5H1mc9kzCT5YRmodbDV4uKQT6zJp8yUKZwHaPTxBr6hsb9yot",
  "key3": "2epdoV2msxHY5ZV94jgX1c1ocgP59fdvk8azESN9DqiHdPNA1Vud798FuSwzioyVRVjLMGyLNWodKxnHhrXfRqVY",
  "key4": "5K9nwoppugT6D3iWT32mKi9v5zpBTFsSodTGRModFsfRvByQJ9HErBh8FaAEhxgVadmw5hYTTZpARG7fH6UK7B83",
  "key5": "2hcRgocT8FyK9tJJbcaSrkLb1CZugUTY1eKYrMxAiqLqKHoc9WnG81HJkgy8rYTdbten6URB3oiz7WDzDEy4mcGB",
  "key6": "EaEvPSXyksJ2iGaN7Y4viz1FQ1vDqZ47SC5SjiGQxEyRfXXdrgT8cgBXvfjX1JoNGZjBzXgJP7bQNHN3YXsWDfb",
  "key7": "4MnpJ6zJeuGdXj5MjCKVdKi9dV7yPM14CBpaTeip6dHFJkpu7o9gvi9hxtchyamh3GKFQgWcXHi4VFAQNqxiiesE",
  "key8": "5d5SJWNb7LxyhFW98bnfoBXAAyauEZWPRtu3jbrtCtcE9bE1BQ84UGmVnAa9qCdcRJyibfsVohyuJAKHNwbho15k",
  "key9": "2svXBDww2rxtTR8x5eGCWuLwwUYFutNdWiE2U3gFo6rDRBe9S9UPoF7hXZkNsSUBevTrRkrHW8jTfyEaPkWX7EA4",
  "key10": "3VJgtTWDsWfUM5zCwGpb31Xx62YkZvkjfCQyqn31vkYVNc7KLM1pyYGMQVSYSzw3c2BmUHsMZW4x4LRtec4NzGyV",
  "key11": "2XhznedaaPxRHDe3MhnNuHvKfEqSvYAbDsNHzd533W2Z9JjuHEHgjQDX9tkghqYdaGMyKgtY4aEYC6c4Emew2P8d",
  "key12": "3ZKKJ5e1naVnfGbTKPisYH6FficQLETbpcUxPVi98ZPy58vxGtb2pP9fLMr4DKnXz2DhwrwmEimRJk43vUKiGGhp",
  "key13": "3PesqetX47mijv6YxxyxCc2fKBznjZnR2TTJREnbmYTKKKkigvVWtgzP7NzVJfjHZXgwmEWQVgUE2pCgtKer6BjH",
  "key14": "3nPS2ErCuix4xsURm9bR6ZJXWiQdP1y2y7m9pPYUWe3bmEkvWzFMzjfo1vZrQhTmVL3E1ANJ2Wqozd5ktTHKJW3A",
  "key15": "Prp1BapqvY1QUiWtVh5f2GRa6KvgUSYiH6xvXFuUtsbkUpUYkR7GpTXJUb5UTxp74hQiptp6XTWqDugxrERhQps",
  "key16": "n4orH2bm282WgSwZqrgxC55PXLQxXCn8NVv58faLMvhBTadgfUe8jXs2rgvAc8WgTaPS2oTciDnzXmCDpmEq3t4",
  "key17": "32ykLnNhwbvWXAHex5iFap1eKnzkxpC9witPhCU5sxE8B3AN8ADwGCxcoXJU9yvBMRMraL7BTPKtX1gLAtiW7bNR",
  "key18": "wZxfhgGZoA458FV5gDxVfvEKB6SP4adUtpxdss4FENABDvTWxBhrWwKSAuNwuxLZEXZ1zhysyJj5Us2WjBG8hmB",
  "key19": "52hCLDWkxkUPgdDMCdgbf2TMmsuseg2mEm2G4LLikAyJN87cwU3dMAkD2965gsdzH8x5ejGmF4aS1mvFteaVVJq6",
  "key20": "5VkSt1BogwU2YzQqwPSHYTYjaYtayaSBgmBot1uXLghzN1NVd7CryVwgEFTEfQdvBYmixQHaPRESWaL3MwHz7fvw",
  "key21": "6kAKEvAeN73bxEHub1jZqaXuvJtYTXD3LPpsHekLKQf8ig5v79EnNLqCAZM1qh6wpdMhYEGQg6zSddu8JTLM7Qy",
  "key22": "5Ph3rLg3L4fNTtEUbPzYAscE66cJfSgxaBjnxY6rTaZEeeXz5FRVVsFdDpVjMRFQ9TuK7ZKPGCgngFr753f9ch5",
  "key23": "41p4yc1ekjgAFg1KEr7bfRBKef3PomFQwvbjqZ7ucutMXYSjSLaGWtJU1WwjKjpL1WRMobBXUJy8s9zZRoDgu1f6",
  "key24": "4cdP6KnVmnaP7iTWBa76xPCz3TZKhRJ3secVzbd2PspfHnT7HJiVuurhSzqvUAWititQhxegaGxfT9VZvtxmx3D1",
  "key25": "4XvFPFjMKys4NUBM7Qrx5ToXKeNExtkHkM8iDK9wiAGcBpruAcJEMz6cjXciGBr5eigTUQ4X1nJdurWsxJt9jvQV",
  "key26": "38FhujFQXfBDzKk3owqJkA23LaZ2u28wuWrhDr12NykcZnx9r7dUcixUWSZWFWvb9prY7yLm8mh5KoRMTLDPJ5dU",
  "key27": "B4yWrcjcXwxj5cQkhaLuDkmyiEhChhD6AsLPkrKXffMSLALAcbqJECi8f1ijYZh84QUcot64sjeEfYSrMiwU6en",
  "key28": "3VrxSoaePYRqEgyECLLUybNwQsTwUMi5AMDFaSfCPt4V2hhtMNZGc8iQ8WL4HHFr9C5vwFijnUGMcveRc3d6dwNg",
  "key29": "4WbqQihGWN4DbKy8syimVq8yCLEe6XS1qW4YmCbXh4p14WgiStQSb2nLP9typwA4EbaQA7Wq6D2LXjDKMYTHBYKe",
  "key30": "JMzhYruVvrfAbPM7QGe1DrLsUF8WPTyGgF65pRbP8dJWceoj9srC2o7QrMwp1mGk84caN6vLXPcPPb55CJJanth",
  "key31": "4pGzVUo3RXrGnLdYiduMvuukyGXK97UorhoNm49Ad7vqHxvU34dMWLRUunAFqJHTof6wLw6jpwbuRC375E76TM2S"
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
