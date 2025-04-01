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
    "5Woe5meZTZpRkotwjbMcULEXzm6B93WvMwW1VLCZVsmGwLf8pkmo37HgxDHEC96amDmToZVoxDfXMKcXMrpmUfSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmHu1AiEY6HU3bExW2oAnMs94hmx2MsjNMqVsMedGy8RnbNkrrvgssLEuWJfR5Whgw9FVsYwKTGsAK7oWKecDim",
  "key1": "26jWbgYPqfJu1Kc2ijN9TmTaoLZnrH4tRWk4b1kzhAKaPdawTGzZRsxJG9foHjtRNxWjWLvEy8a5HzS7Fu9AJCeS",
  "key2": "2e7sUdg2DK3cwVvdkfwsUxWKo7RUBgb8mmHb14u5qtcraHKrsgfcQLgZbWzKdSkVL6rnh9zvAcipoK4cQ3y6MR2P",
  "key3": "5piW2N6mhLmb5Enfntz9wddpCwqzFT5miqoSVJdFkQVLcPfN4qHGAtxHViMQkPzreQTE2EtczGNbNiFuTnQKgouC",
  "key4": "2ezjpSuJ9CkuD1fcdeoFWeEdhDDZJij1znRSUB36sgBiFXmReBvrbcjayLogEZVhnRCcJgcnAdUoPFMFk1Ar3NNu",
  "key5": "2jXAmzKvwPNG6PCzBYjqNGtxLH82XHNsuCQDi9cfAVaNDPs5D9vn4qzMWhQvXyfA2MyyTCcCm5ZrNxMfujXMuFXL",
  "key6": "5gYpVfnU4Dkc3eV9D1Wm8F4eaiDgwqvccSXSA5sZqq7gouhAe1cBc1f5CjENLoXYrW2QvokmvryyWDq17KpzfUVv",
  "key7": "4a2Rm6z5i1yiGKQWKnanPU3wyp4Wn1PoKRAQVXXSi8fNPyge64bXK2ChmsAYh5kiQPabbhicb3BvpHBKoTjrd5vv",
  "key8": "4BfZmZkfbewdNJsWkH5M4fWjb24y1TtEVKu6C17kDxi2ER8L6QfLTCxYAbTQZGsD74x2SzgGg1fZ3GfGCpJCCLAZ",
  "key9": "4hvRNjkhBSqfmP3fYoVhdQveQtHdyn8hCt7j24G9TSbA5VzUyQDP1teLoaaL475HQ22yskTkbbzd4J5KccPVMhpF",
  "key10": "2EQKPVhVJLDdNEdchRb9wgVw71ddbMjMpUD1ptLcKNe3cRxvZdqJmX2vw7b3DAAo2TKjp6N6dhnokEQWs9sXQWSu",
  "key11": "5wJSY2SYXjjH6tGbayX1Tc23pu8Rr1ZYX1pJGgS3k2L7gescHEZrKKVSRXtuMmAravMotPUKorAeB6MCoBSDAvz3",
  "key12": "4jGxY1xUX86ShHHtpyXZUPfwmpEdkf2Hk98kKn4n74ereyMhwMxMKVMdmHt99accuLiq9sxSADjmQ5znwRYR7tzf",
  "key13": "5R8Q3Bb75FueXqkHBDn3Ev3Z2gqXFd8szmMvESspAHfKkEW8VJMrkGapXBTvR5CLpF4wqm4VtxPKgL3KJUpV28q8",
  "key14": "J5q6X9xhfpqryRvznidccss4Fnzx7HuiYgosMbmix9gJs7d7qf5i3yPQK4sewoNv8XVDHtV8B3BKtVdj78qq3nK",
  "key15": "3BNYsmt7fveQTgViKAA5Zm4AQdD2k6ynd6bnpsSRg8KNyGwMWBSJHSprGLSThH6if4cMaHPuQy5dvivwEKSfQmFm",
  "key16": "wHTBHf4BTra8D3B1yK4hEuD6vRdgay2v5a3VAAepuJdgknUge3vL5TEYfXMTFMvMJnAeYThPZHGQ2X5pfvNayaa",
  "key17": "458ye2BYkVnZzhTisCn6iHQFyPe6rkHf6CBJQMj8RZxiVdWXFWxvenSor3oBLDt4LP1cRUfNknHs9AUd2PMPAAnB",
  "key18": "kcFUGVtga73oWTbgP7J4eCQz4jGADnPg1L5r7hKhCvqdmSAZ34HhznZfS43REsT8hdXpJW6hYwCVZeBqLWduun5",
  "key19": "4S38Gc1Pb3oUWFaEDC1DoJYcSVmAzKLCfiFjiXr8MqeykxKKhZNV7quq7rtj8F1D4U3LwhpoTRJbKg7HAQeNGDrL",
  "key20": "tc8tXkUw6AFY5tcD5wDyuKRvPdsArXM9iFGCmq9mpkuQZ1LCHZ3Nmwqusiz5baLmk8WJdHvKKZ1uJEba97pX36V",
  "key21": "G11h8UC9A8D9rCUAGfoXiFdUNXt1rgoNeu32ay4PgcUyhkFq8BZbgqNx1XnqKQUw77SeLFMYn7GrfJi1DWE3cQ7",
  "key22": "2V8SNsvTrvhxJbVRcFfCs9WhjgxMyggg2RnP6WDFiG5XydwGkKXHi6Q6oaJfRjp1CiC2ScXL4PXp3gfyszQ1tv8v",
  "key23": "4xLFkKfi9Wny9juRUoePFEK8EZDQBdy5voHMDiGkK6kG81BgW2Z6V4eGapLPQJAwHP3wzghAnUhh6twVEroAMtx7",
  "key24": "KcLARPu95rGN4kWJDSBWr2EkS5Lx2gM5eWkmaQri3ejFtXMNpZs8NyPBiHXpdWXB6rs61x1rkSEsRP34hc2uVuw"
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
