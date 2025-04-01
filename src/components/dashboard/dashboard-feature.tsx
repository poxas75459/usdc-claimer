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
    "4iAGrcnPFRmSWFh5LZKKHgyLHSo2bxtvYrGLSa8M67oM82ev9RKtgRYXTUaHdrScB5T5kQzwT4V53ym44wEhitwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qJkvukwgnoBTvk72KRZZ72Q6AA1ZykJBtd88Xbyuv1HcEEjB7VGTLvsNjyU38Veq9cyWxvuLdHk7fD4i7JzPCTP",
  "key1": "634d7QYhNrQ4zVkUKsedhMBPqZwT6opFnBKpggakLVTahgF7bQgbw6tnfLhWz71DAu3htwsyCzj2VPZv2nJ9efTA",
  "key2": "2ZmhZqVKerZXsVMnLp258Rff9oweQUNqR6SdaHpnBC5Hypj2QLmvag3n2zRA3Di9hGSUowU2pHGp4BEQdY6NSF5m",
  "key3": "5p1gfgx3XCtBC7jPGbUTbRA9RVgxc5FXByf4k2eaphVybdQEv9v5WZbdf2vtstG5KHLs4XcXubJonpruem9gmrP1",
  "key4": "3yZ2RF9EE7hJk9vbCbL3bZYLbdom1UCse6Ev2oFtweLx9SfDJGfdMvVdDMHPSK2PPLt2ZM37ySLsBwDHH5TzXYih",
  "key5": "55iHAznAZTpigMmJxGjqAKe7z29wgBPyqsDQ85ENj64bv9aQdHacKDtHezbrfmjNvUjQxZhtErLU44uib5AmMdoN",
  "key6": "AMKAJsU3ES5UC92QAiaJCLwdf1bvuWCgmTNvQapzP2RwiTHYuz9p4H2fPn9UL42idywKuBc7v96oyAEcLdnym3u",
  "key7": "3iFvs6wmmC119NzyLK2KeWpzYvTmixAcMrrBqZsjHdwDD5LDSS8QdKku5DEnmwQ19CkbMCrMHQcG6RzbHHSrPmwL",
  "key8": "N47TfQEorFnaNHjbAMKpyC3THVBskJ7nCrLmLo4p7ojCMBJyBZLZZ3vcSg6W8STb3J5L2kx6Y9gVS7YngkfH5Na",
  "key9": "4a9XBgRYN5m8Y4neT4uxzCMx26bptMP1PyJaiifyChoWiLxmJWVXrB6F3mszdDoiEykK6ccoC9pBZkyeKTLzwiBn",
  "key10": "pyAhkCfHW7z8ptn5gNY5XdVfaYy1VJSHgRpuo3P6kBx8PN3ZCBipFPzGSYKZk5Av3Kp1qT4SNEYM6Sk96RxDCEa",
  "key11": "BGy511MKKLeywe7oki5vq4cbcJ4UXdDmKtZs99bNzTASPQVjBGmGrHSQdHfi4TvFjryQdkzktsVnzZ3TNFb2tWN",
  "key12": "4zAcH13UoDAqzpF2gorXyW9yGrLXMrbCYtiVH2iTpd8RU1LSGkuUXyAE4GCaAUd4qQ4cvhMojiVx95MbJNLjmBY5",
  "key13": "61Kxo2UR1upaN4q6R62fzq2sLXEUMU4LpvNrsf46jjW19jES9uP9XQQb8a5BwQ65YrfDogrvWFPxzQKYRd8aGYod",
  "key14": "4GcpJA6nzSx1o5CMNH9EL694gwv6QbKahmVbSbbXys5QPaz245TrbKkbkC8gixKRjhu8MbBhmwrGRcocALjFg9bQ",
  "key15": "5Csg4PgvF4he6iSaPyPWhiyVZKKpaCxtWfdWHTSDjqGbwYm3otkJq7mNaGkS5NYQ1EEmhAj5ByEzLZTaniiytrWN",
  "key16": "3tfnkd3FUeJ6h5wS3Tn87Dcdqz6iSKWPj3JQy3iA6tzEYGU3eU73eSecFNKNh8r2yNiCfmK75o1uXsXP3TrQgqjN",
  "key17": "XgJYwvfYobmBFPuyGjQc3HqP63tvKKrcrVaE8EitCWTptx78KMND6Cv3Bk135CzHmDrQNRGYDmi1hDt5DCCbV8D",
  "key18": "5GVXQUPxFPhY1Z551N6Yxh21SkEMZne5MGLUmCrz9gVn663NFMgkoBE5uDmxhXvwkCYBgvY45ZuU8he9zZW2ZXmt",
  "key19": "3j8at1U1dqXMUNbPZhZCSgefYToYy8abPrRBUYm6e7ppEVqKm6f4qBodp75VYcgocHcvrJEC86E7usxS6nfR2pgN",
  "key20": "4wUYz5cwmTZMAPzRsnpJKV6A59mWGM1k5V5Vs8CBVCYHucLeSsyei8h61cQn4ATux5FYDQ1MWUHKqeU4htd5Ko4i",
  "key21": "23khMjNPBj6whGC2M3wicfgUzdMRdTqvct7yPXkZKGPKMjj8x52mYLRis4H2dms3joqbRKw2GfQTwzt4Uvry6ya7",
  "key22": "4x4VdyKBey3yeD72ZYgD3XXc7km9PccGMyxzwJfTfKs4rrmm9MR7iPiqFVHp2fEgCdZqNuTmPxLdomy6CUFmxC98",
  "key23": "2oJdKBWRXVPGwy3ptPtYdzcs3NAZPfBMo1bErC8v7rachwy3E8gDB724VW5nFU7KfqU416pxVT7cogKW4W2ykiVQ",
  "key24": "4Av8abPCGhDRAkynXgPNztwuaiARSWyL5aPhzcsfDiGxFxFku5bCa7zLcK9YU4vPn47AQy3sRMmCeLgKLCvmgnYx"
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
