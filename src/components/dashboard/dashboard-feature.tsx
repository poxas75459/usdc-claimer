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
    "2uTDAjja8JUentKehDLP4qSGyoNSh3Fkb5itYxJSMQLCkjkGpeL2jFaZenSDM2PsaYDVCxnhbVu9FQca4smqoFU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52sjZQ2zKmhqYqS5WeY5tbkiqUGkvwUYsQdLC7LaBQ5Jppwq1M4GJchym6B6vvPXcYYwUshQGWEJcHM5L3SBRJ7V",
  "key1": "3UFKMxou8JaN51tjYppuZ2WgB65B1EC3TkHdGDUzGLrfqFKupTV2FNZVSiWBfxeipRLEVfxMXmUNE13iUB1NEAKk",
  "key2": "3xvRQ3tpDYmz3JJUghBmTgU4vqSH5RpBWbbnoyMbNd9BkRcMqSeHiG78e8fZFcBxkwnSnXUCAudU5MSwcf6Dg8hf",
  "key3": "3veveYpUcrj8VNUcSY4jHe7oe1DzDapkQB4nt3XYKoHYuD72rzf543nMQ24bG45LyzvLJnDGVTK71DzMxU6nHzSR",
  "key4": "46tZwjvj37RqQDzYtAeDisVRuMJgAKCQsXb3ofMJoR5RwgF4zjUDb6ZZ7fMzU5C2H2t5WxRVoUJS89rfdAyC9QgQ",
  "key5": "3yv7M4srtRZR95SDPSrJQTXru7EnzKdQhYdsRb2e5h7s1ggY9rNbotV7u2u3w9pXr7bbxXRvL5MBspTQhHEAnyco",
  "key6": "Rv9ck9vaeGmVdwU73QnFwkdKhxn12Aq33Gp4TsCDLTT5cgw7grxrcmxunASBKdth4eutPRsFnQA3AK1L9PnkRHf",
  "key7": "1aPX39F9ykYrc4s3dvy53wGRMkJ6kUSm9YXpShDFrkLNKbJoWwHcY2xp6uBDYfyAAm1JYRa1bru185SgM1WspW9",
  "key8": "3UoKRXCNe2AvCHsqdeyouSrajxsDdzM7YwWDskq5PY8pSPu7JfhztrK2FRaYJdC99oEiNdHW8N51u8z8rsN1mrwn",
  "key9": "31utSajtmA4gR5jiYqjMZYsUHtTHmMiKfWbKSeuK39uJQPSMPoNaRiFGonSmhHdiL8fRAHeTvJBsGDszdAGHPWwD",
  "key10": "4BFunWEvigFJKDtAFK9JmcVNNr4vKsMK1Yzurq2K7gqCZTX9KeR98TZjqFKXatcB7irFLHkqujfhn4rTqtT8YeEj",
  "key11": "4reK8PCuuFDfL16g7yyhNqn1rJ93DWGZWDbLz7P6wfQZ629nBBzXd9QqzwW2k77jMF3277nv97rgwdbkLPhFdA4S",
  "key12": "3jmwMRSwCfhdGLPjnvwXBcBBW6hs66RuzTDAHcxYaJWpT3VqKoXX5ycJE3GgiqNV3thmjubXbCYCZqp5Fv5DMWff",
  "key13": "3oGr8NfeCLTLGaAUVqKoGuZ7fFf2DyEUsL9FxL9bRqNiAXys9zrk9E24zPmv2iR4cdkjXkbnK4pUUA1x1kEEQ21Y",
  "key14": "3Tjz8BzENFAPirrb2PgnLf511apreCM9TRSKhaHiPSGPVCgiUXSWL55nRKMZh29yAZ88Kc9kuW3fKNDq4Pw5xMUp",
  "key15": "322QTRc4JHDhKP13oREEzSAB4SQDGtwr9eajcmCgo3UJq48McFimWw4QRSq7x5HkJDHSz4NSoF2C8mycmxorGPML",
  "key16": "4ro4fuUdqYH7Sm52rqQPzU5GyMradtPrZud3z55WaUmTCmb3Qm1Ha9XjuZ2yWx5hFSh42YcLz9ABWFt2Lq6nYLca",
  "key17": "2viHaDLKTXcioc1q91f4m4JjTx3rM2PamrPGake2CQyxVzwtXbZajJoWSv9nWBFDQzvm3uJqWEM7EfGFkFzLQ5HR",
  "key18": "5DtPqhqN32DmGns1Erun8749t6Ae1HRjhuXxaBinz7yYMzi2voLni4GpzPRGPH3vQcncfWGT8cKR4R3chmU8X7jx",
  "key19": "3QGs3vjZesF1WsUpYgnWeLL2ABHanwe3tKnCLB8He9nQd6si87jzwJ3PfhrVuD3KbPuLBxFMgeEX2RJzpHuFE9FL",
  "key20": "41kSabucFLtEgvmfotpV35Uu2citAsAgSbk7oZMUFdTxbrGTCwCjdLd7rccM99hxjqmfVAcReNPzMFTnAKco1LaU",
  "key21": "2jXjiHQJDgXWEV3FeAsKSDEzBsaRrWgfRgKbhhYhWUGTLgPNV5qjbQ44ZyuwqdyvyzmERP1XvU37MUP9mLfgreWW",
  "key22": "6KF83kjQHuy8LQqWRtB3PChQYeU3pYZuGVcMX8BUnE7Tcmc7eHVU9PHgmczdakCkzcZrGKqLkLvshrANuFMhkK9",
  "key23": "52Asu2QrAV5x5eLbs77768YDsGSCw7ht54uyz4fW6eBbebwF48wBFwKf4dAQ22Hy6zHLWw6nWzdugtJFLgTnuZFm",
  "key24": "4k55rku2sibt4dqcp4C5nDEmbR3JfaVK8SAg6bT5SjGzVbcSnQwPE8oGdCFjV7MdiYKnoHh4Q4kpgzC83rGET38y",
  "key25": "4b4LYRyNqSsUUmBTGVgwmNTCiH3rmgY7HfqH1xkVgNWQMoaqB7nAvQcnRd3DLF17gXUkw5ut8ZLEA1m7WqzYWkbD"
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
