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
    "4iRUayNzQ7q7AzAQajbeK7dBZYNZpugVdW1hBH8LibH8HN23o5vL39VyR1FVvzxVpbqcUvUmZxhzmYrL8Arwsmcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXTZq3mEBS2TZ4Rea37j2D5hMafGX2j3NWmggnSzqFcAda1aSqSuq7J5VkKKFwmYdDnLr76EwUehjqZLUW2Pdgi",
  "key1": "4rLdTv7peuACeJGdEre4UbWj3JsScmz4AKPGKuaNt8Je3L4bBF4iEftMiZM6Z4Rf7rMqYr8ka2iHHqdhXDJ22JLR",
  "key2": "2WhSGAFEGg1xX6AfbHJSkH5VNkiiFmKRAa9YLG2dVRDsx7Yhc2z67mo9CR2oWL1K5Mb2UwuVZCzsRRjCjkRdktzu",
  "key3": "4YT4iricxcazGZji4cFurMX8jinNB9iW47KTyfX4XdPV3qa8JCFEikF86jiwRnzFrAmEMmTNzoKpGNFvE4hAzrSR",
  "key4": "58Mmcr1BDbaQexq5KbCmjXeHJ5X2qHsZPbG6scfnZZKphaX57Tb6xsthkZTa2UiY7UnJEZTREUDLeinyasHWH8eg",
  "key5": "5njZw1aswoVixEuxYQbY99vWwoJtQozTgaBMvrBPTJ7Gauzs5onntXCYbLrMUiPkj1LjvhECLWpQoAeh2Sp3fvXy",
  "key6": "5f4U8Yru5FeWKxNNRrFpYKSBs2VFeaPBYXSZiskKDwPKvUVawP55dYRG5A6ACBXWVn2Qdwiw7x7JqxcPHaKvQnYr",
  "key7": "2LbMQHtE54sCEaCeGx4ddpEAKh3cAJPnp4HAe6MNF8RfFzCuPy4oGDocJA7HhX16UEpeYM3ip9vrM9RhYTmu6cT4",
  "key8": "dnkGXMuGvwuuBPXs2Z6eGwkFv228yh17vdeZpGkfqZNkiViXDk6wjGkaYZeaDZjkhc3ARXD7juZvWWdGrxG5Xmu",
  "key9": "5jEFqy6jGTnAjmodocJ5e9XSHaNFVk8c47kuhT266zg57tL4qkZFf2wf99bzF93h6rFejbC3m5MSm552tFAuzy3T",
  "key10": "4aELVPRsRKCkS7AAWWh6sUTTCLQRHW8yj3ByvGJ8SswSDcEJo3rc1Nua4iu7TSPacstwGLo2fwyNv9TUaGuLALYz",
  "key11": "4hX3kLgU9RijUeBMDH3tQ7biYZRZkejw1819srd6k7oCiXSqWxy2zDKKpZ1Jg8DYKcQZ8FNHCs3X9PmugUVMY2yx",
  "key12": "3X8U6oubC4WNxxbgSBJiXZBi4rnUvv6TTrNM5R6UcecbpUiJ4gTm7fwH7UxAAEPuTiCE2Sq94fXDweroLUwK2Erk",
  "key13": "2kXsyXPn1tqn43YWu6T7vAhqXy9q7tJWgQwfuCAH8BD55afzPbVR3BALDQq8beb6dokMuBsmxfp528ahvS4QjsG7",
  "key14": "3bP9i5cPhTdpk7TAZjMLjFfmmmK1FXkAP49pJ676fPW7nAGUGndhUXiqC4Xnee6ScL9jybZUtV64FCqcDpS7EzbS",
  "key15": "3774Q4HEdTkDVQ43bU66fB83bnD3gUsnQguTvdzoSRKNzxhBdYTSPjibWfx8C76AnaVzEQN3zbZX3PeMUQ8vVCbQ",
  "key16": "4xLpyNwLEAhPBZun1Uv2jzuirAJixsJdNyHtcyUY1rjgctB4AE2MJLBWN71fknHVWasK69cgWyhGaqyAgC93tYtx",
  "key17": "2DduDCa1nYwEs3BH4TTpBwJNkFN51q8mmmMuAJRmfXoPYYYiautqUaDG4aHBeecjmmWY2Kc7thWALwsFRuejodKZ",
  "key18": "paJwgcJ6MkHGrW8y6wBTfWrDA8YZEA61XTY74Yuye2tNFcMHFjjE4mQMuyjM5pPQW8pLraiVNFqvLdMrnPLS99y",
  "key19": "281peB9iGdAWe1aGYrHGMBtyobKJZ4z7XMgCRc81NmFg3TaRHwkf3TX5iu4FDDmT8i6hGcpqbfLPsua5E3BqY8b1",
  "key20": "26TLe3xYkVEf98wMHWRypQQzkWQUoH15dhEpV41CqxirPcvN8k8vqdKpoAmfxxdki2dhtsNN4PFzKYoCbqJqSR6F",
  "key21": "4DeTz299ntyuD3qMqkejhtY1PB3a2ccZgpADGndNcbWkGeCPxAsz9nXF1y37XdQkeufbSPFYSyCM1zsBcZBeBVgb",
  "key22": "4PyMr3wEnnyGGSiyVkBX7KfJh6m7rtQyvCfhw9gP1ChJoPyGiB7T3TCgmB1MbyoruABcQxAJJx8KiWrqhGFnGceK",
  "key23": "5x3ijh2vssT6PvUFYbRhN7YarsamU5nY6v1Y2TCQuGNejbyXtsHjPN2yT5XRj6r43pzJFGZemKLWpyXyfJ1SXwjJ",
  "key24": "5xXNdxiKy46tZyp2ETYS7rZ5751BHS9dotDHE6gfEF7uU89jBn19ukqMK4tXjZPp2NsHsFzzHLCbzwPoyVu8GR1C"
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
