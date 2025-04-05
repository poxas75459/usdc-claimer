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
    "38Ttwyd7SjT5dgbkrVRRsePFQXp5aD39vGCxTtTZAiTvfPUSfehDbQSv9QjUHqkYNCXCrXYqZ5NymaDQtrGma9ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3moYbC1vi4xQPetRNxLw7vWmuBUaK3wg1GPtPWzFB8ZWTtvGrC2QWgZhyXEhtT1MJUch4jge2nFBpzS98bqePBtd",
  "key1": "4kZ98DJw33HKXFy4UvDUvNjQE6Y3RpZ4P4ieekqDT1rHT7ma4Rk1unSHth5jR4ok3Q1JBPiVL36UTTQdEkFGhy3r",
  "key2": "mMihoCngJVQsvv4ju7P2PR63vbsK4jEYP1bDh1GVhwCk2uyvdga4eMaVEg7Y8weor4xjT6bBuXJwjGjYAnw1wtZ",
  "key3": "2Mv6cZ8ARG2dwTfHeom3XwikbtCYevGLazhGjZCc4wpasvdkPHjbVqE7WKFMa4rC53r2P39QtyzjJcSNFLY3dvdo",
  "key4": "5zYgVutZ5XPkZ5X25YvmrtPWHb5y3Mwy3erjxgWU3vc6Nr5JRWms5pbcEspcje6PT7AQSbSNq97kVMT5oBXVBjag",
  "key5": "vLuCYhbCzdiw9Cw94gQpP3W5BwoKshJWCNsUwawJGvJM7zvKgWfmLRSmcG7xGn6ichJYN1R3bQMRqq3KD1FV5bK",
  "key6": "4SN6MCuuEVp8GfBapvSig7XQnF5f9P2Qifbdy3L9E25uJmKY2yjWBzYPYyXjViBoocDWN6jgphF47T3BnoxcnL3F",
  "key7": "2qSjcKLFFTnXGtmm9UQLtkJNMF6NTXp94YABGEWhsVpcrY1C6FHuCy1pek46pRfq6a5ayWrUjBUzLR5gFfjD5Dzc",
  "key8": "5t4NMsxNVNt2DxDSqA4aDyCf5DNjUFyhUQxLydeN88vmJH5AvNtqYxjiiQ21HEXGhbDUsf29EhZYWMenH5QDamKu",
  "key9": "3bEmsP1ScuYG56A8kxezTEBAJSPB3p4yUmpuQFMkHZipBT5gZhGs3wEWN9ixWQFbM3DgZSNa3ZMEddua63VJcx2S",
  "key10": "53zUbokcBodmPNEW7WGdbbjv1a1AzGTyd3AZJEzv7kbakFaa7BGfjPQ9osUDEL7J6E2Zj9D7P1QU1LjjQY6K2m2f",
  "key11": "4nC6eqcBYJA9qx2uegFJ39rVKVsmv4jWpnVXzVTnCUduAGi5yHBhpn46qBuzH9QUrpFF3doPXv9J8bxEBL5vvWTb",
  "key12": "2Z2NUyc3FZoTB6K3B8R1N71FiyyGGFK6v3ku86Zm27SMH5eoPWiZPfHEBvM8xouFCrG4DYWhq7fAQ8TSQuGwYpDt",
  "key13": "2NjbqDYQAaUF7mAQwzpj9axLq5M2ygTuH9ErTVZdthS2TdYkcCyMFZjN4X8HwnxQM2mehakku2rqLhtD6Hj8oiwh",
  "key14": "2Uc7oSR14D8BM6Reqg2gr9KaH8ho1y796uJXwMj4QRikp999hK4iekWuwcvybscpe5VxbnXKQxD5aeZiVTxWnTay",
  "key15": "4ZekMjykHHsDh63Bboov1uoo12aswW6GWavQAYxF6ur533M5hZoYp7rxFgdcefhVSgLcjMt9h4SFtuv21rzwmzbF",
  "key16": "NmboPKQout5Jp5m9VzzZ3wztBcTncjKtoHfy3UYQpR93MQZoCy5u8x1gbGfwYy6hPx5JKRLqPfa9XVhkKqBqxn2",
  "key17": "414pn3dD3oXCQwZaHdK3nXgqcE3kAKTHKFcyyETcVTGMyUSSYPfd3CPnxzpXTj6KddRHeBkRMghAgC1gcdEaeLuZ",
  "key18": "4o4Uo54sEzxoMuUsqWDd26Qskqp6CJipitLUphJmfeZZ5PdLxD9f81Vvb7EUJy3wndE9eyzEX3cGtqSNgFtCpgyN",
  "key19": "4fYyG69Cz2nuUXcSnkcXK9wYhfwbuMJSGJfFmHboX3oEFo5cpZL6ChEhZZRjJi3SS8YmnQ5qYWwqASXfVasuEBoJ",
  "key20": "2BK5fkmfQSd52R2SPYvijTBsffWv2vZoyaDchmWpDbAFjYCcLGP7NNYdndPCpqZJ2wv3iVeJTmYmTL6Bau55it3C",
  "key21": "5p1iEBsyRi2fVjXEa5UiEwDgFXMYdpxSQxqGGpjShRQsXxQcztBj852KhRwciqwhufS9nhGXmT6s8NFj7GuuocH9",
  "key22": "2q9ENjZE6A9H9FXsENxzaM1gWoaaLsLPFPaAyMf37tmVJMh2AtjpheLZUfnfFQfn55CYYgbJChD2z2zSgJKzutnB",
  "key23": "3favaNjtJdHhHDcu8wVYhiQ7MUKbNZkpLRCTVaMBsqnYmVYHUFPzgrF6rQit9ekHGSjsTNTGi3TUS3Vz9qQZ5wrT",
  "key24": "26o4fBCqK5LNcegBJ8SaLeNUXd62KqyuEJGcAvcw4vcKBBh9bjtENtnehbsMq32MEigvgQuaXC9Wjuv4k4hH7PtN",
  "key25": "2QZKU3iFhDJkvUs8JnrCCeCPZP36FCPp8oiKDkDxA7WADSVi5h7bnyjp5bwjqbuTSYWarqcLbsv6C3FDyWW3LMqx",
  "key26": "3tMXqdfy1PLGJVS34UpDu1vvsi6PdWRk4PsKXDWGZdwWMVoJmEDH28ev1eVrKfydgfWepAcg41vaV8RqvuARvCuz",
  "key27": "2eU6Kn2tvTcKJi6fTURTX2b5hsk1srYnsAUUiRAvmuGzp7PTFaHSztRsRA1EipxZjC28QcDZMEBkUuAK6rbwgpZ4"
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
