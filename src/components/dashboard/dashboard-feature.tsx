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
    "2xKwJxTFMZWsPEquUfSsftoVo1wSF2c17N8nGphPi6SgQKZwxmZyzQ3EfWhGtzbr3ZHjULbNfho5vRw3AfRQkyFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3Eic7EyJS4CNXpNkGCLg5AqqEztAkmkti5dK1cit5kUa5LayEYJMGg4YtEX5yZpBLtn6z6K61tnLp8GdDwReNR",
  "key1": "QeGrCnABsk6uJ4mSJScSYtQo68pVyfaF2GZTv41yXtJZFzz6QRYwe7vU1ELX7rrNpwjX8k45pxuGC8iLCa2ckD3",
  "key2": "4jPe2mCDfY7vZ1xCYgJqbg6k98FfZnuYW2mocHYj5XeiSjtaE6t6B3PL9uBk1xprTDTFqjRix8Cw9wA9gFQNC529",
  "key3": "uhLNhJ97EcqoSaThdkaQMpKQMQL3SGgqtt2HN89eKFJqxSAyXgga4Tmiedf7pABCyGQ5ENLSschXsTwZbRkMxBB",
  "key4": "5LQP1ggzGa64s2KW6qtyrekkRY9FsnEQHo9vdSC4nGGua3uNa3fa8tLNFZ8gxQtFrt7yMMJtWkmxudbc9tSDkU2f",
  "key5": "5iyP513jUgeXrH3M8U7xevvMVswec1kBRr1G8uQWpRLNtjWaRWA8ZTEcUFv2tfkJnk6AFtN53nyhPYsdoHeGepLC",
  "key6": "66jHCF7E5HQxpNcPPhwpTuJWuwvgQVB1FHNRGCuHA6MR68YYWsrXPTsVXFj8ps4tEh68uQAZvrhDso9bwM4GQmPB",
  "key7": "hWKSvEunPXBRy4DBaWRR3eiv1HoxcsL2u2AGCbFV3d41vg9nySyS41o4HSqr4zfEdFoZpkxXW4deZixjiAuaaQt",
  "key8": "4yN6be8pAmnQZfjcxipGRBcd34V6KWKKcXtHd4okXazdbmmsw36UWdwy69MbEPLmSDdnHeqJNkfmmmFVXr3BZ2cP",
  "key9": "9JUKphfpHzzKKZqieqmhDNKTgM9ycEdhqPzdizZGb8tPhZg5UGCYzMVzR2CXHRzQUNh4t8myxAkjNcRnX3sbWvF",
  "key10": "2HWxyFMhPHKtktgkEpLvobkUAqNhzPYJQLoHEobStYHdCXCSYxD5tHQFLmxYWyHsZNkNJZ9jUxGhXdt8MA67i9qH",
  "key11": "5TuBDXofQsjT7tiJ1icahD4qbYg12TSiQZskBM92SmpVbXoEAveaF7SVpL3Yft47v9WrqgULSkRYmQAiD5CoTBBA",
  "key12": "4v2T96qr9SN33of1GRcGZ6ifo8R55fUbwNHFyHS3vDCpsL8pc8Q6cHqGayAo9co6X929CJLhTkQMWKqQbFoFwBCE",
  "key13": "3ocJJhKzT6sxNPd1KkzSQ5WGVFR1TNs5sG1rwZnov16ii5RXPPWfRJ79A5ECXwSEgG57jELLA7zesBjbx6x43q2b",
  "key14": "67GWQhmHTPZ7mBupJzVpuwRKT8pzpMD5ZX2ZbGcntTjFTYLTxhzVseE9P4Fi55aKvui55tqu4Sfxi8oVr1FriHY9",
  "key15": "3XpWreJXXMRmC8zxWP8jUEeouAJHSiLziiZXLGVBY2sbuYN1ZjJCAxSZkbpaj9hfw3ZNfHTrvZyz11m8cpSfAnnK",
  "key16": "41HHEwFBLJua7PmZKf185138BWjduikL6m8uWXQqatMy6ccqKxEiamtfTqK3DpHvp5Ezvv1wCXviyoUCZMbTCrNQ",
  "key17": "5C7Jo9LrfmhQeZoDWjNmRRJAwqVzg2S3yVEaAiG74E49VkLeEXqu2PoBBjJ9zBpabV52YPWsgvk3Gw9foN8gH7a6",
  "key18": "4TYnivg3jFMTupTvUBM8CcQ4qbGvhb3Ny1ai8yBq4Fr1jWYGLsDdJzDwAsxQxHjqiPxCkyEHwYDf451Az8uTNaU",
  "key19": "pXYi6Ey3618RraEvVFBBZNs9t2svhmHqVZKSkdzxErDKhjQHwQoTDC169iQ3eGEqpG4mvRs8xYUXqii3LZmUBRA",
  "key20": "xm7ReV663Kfqyt1emVH6CtAUqK5BVewa75o5ToY4rh4YyJAcSZGCM7E9Q5BjurJyZJ7juD7EEirhNmfXp7wpN4t",
  "key21": "3nrjNkXve612gmqHCR1nqmsy3nujXLAwqajg69vHovBWLGgwXFcoZaryvSmknioyfxkLX4mduWfu2zCVi5FP7Dqk",
  "key22": "v4V5n5GDpjAyCG5bQK9gLXisuYRBnMUaYyBK8VB21xKX8NtZssi6rYV89YmGvUV8d1kuk6e4K45JvNZmGvruQeU",
  "key23": "4bkposCo7VHS4svaKPU3VdhYdFnjNRfDiGjgmMogbpDHZ8XgBzeak2LuD62ZvkWXVpukjNcgwSdxPgrvmdsxEYym",
  "key24": "49cEyXiwNZ44MkRGawPPHnEhS285LLHQmA1AQT8kJpMVYdnUa6oUmYFxTsu2USBHRUV1xyFmvxSeZmHeRWDXhoSS",
  "key25": "VQCRYLqbnLucZp92CUC6RRScoxs8Qk2mTF5fu4g3AcEqMGozba1WFhMXtpB2a5qENtZnbh7N6wFtwaJxKLj87Cd"
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
