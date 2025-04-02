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
    "59LmXA5f9ZArJ7GKuUEQ3xR9CgVY4ZpAkoMp8Zduoe4xwnri2PQNXvVeTZ8iJESVs1zVhZ7JcQxSRFC1CZiHMfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gLXcqFbMS7jeCV8hb9zYomcULatr4UifAdv62WGmBLi8U9ttwMZMEa1aGMGCE1RLDMhCod3HVS7wcuWNwvbhQQ",
  "key1": "3nVey1vgvLAuREtWNKw96xhVzMkXWojcrkQ5G3gaB6ThYddJgZd6TrWoHQFVJTFHHnjPEf1TmAgUTHrCp7oJxc3P",
  "key2": "2t55iYhe1f8tBt14Gvk7cMQLXCy8o82o7Y5izHye7X3RzvNLW6RsagZgfNLtcbS3u8Nr6VUw3n1agoPEXrPgYkUo",
  "key3": "3GzTVf3yc9hpnBGGLZ2u4KKmyxTvbP9KRvTzt6HXqRJjkobY3R48gCthNYL1EkCT5VtSAAMroTBEjP1FFAAEXhtL",
  "key4": "4C1rqoTMBvESNFJwY2pd8Jyw6enHSRdetabnNRnnuGTBFX76LXspD4iQw495UvY2g3zf6Lf7W2QSkc9F5H3nv7gS",
  "key5": "5ctYpunT2ssNREiT8J24h5gvfYA26dS8QP7LmhFBpSb5SzGeS3rHrAgkQLoevWHJReoSPuU49xFgkZF9h7xyEi7H",
  "key6": "4EdhEre4YBo4fAATBSxtwsMKTxJMxUx9yamTRwfCXW7pp2kFK8LREMRyqbkHkpQXLuqRpgu7XuDkzT2ygPD8rXNf",
  "key7": "2H6mMbCeD5QZyVmTP2rnh6zNUUo8GhbgSDuNqH44mpcgA1fPei3BXuci3UYQKu31EwK9eCsZcwvKTGQPda83yuTc",
  "key8": "4VFsHrDsN2DABPZJizw6EVJd3RzjBVaB93ndgiZsDWcfoRiPzudzrY92Hh2BGpzAVgUMYdfXPJztsU6MTmsTzQBL",
  "key9": "2BdjGieEt1xdNXhcSrstLr87rHcBDsf58E7Q9d7ZyxeXrBzHzifFbRvzEdVft9Wp8j8d6XRv3pRr6MXz6w2bFESm",
  "key10": "5bu5zUKcuLdU9Bhy6FeGhBvKzxPTsPBFqtowJQoAdKLcPMKrKkcj72PeuVGVVKwhv6ygMP5QDihygf5n4rLL5HBp",
  "key11": "2b2aVmyDkEzb67pWKzouCvDZFBNq3HBh9Ak1FA6u5xc6C2R2Fj4ZgVjFiFGCBQqyuWrQNsa7NYxCVVEXhCz7SXPn",
  "key12": "5qvBR8xz6ZpQqVHoydxFa6nUt55ihJaAZ9TD5vFNnR8v4w5QEqYe1SvWwmTia4ayzoq9xGWBwyt8hadTN98DYZ2R",
  "key13": "39qBTBHhnng2rwhtvYrhRugiDsvELSEBSDMcwg1vYnEGxznLqmov1NP2yvJpJsU5jybeY98WvGpnYQwpEBrgkXhV",
  "key14": "4h3iwoBbrYZong4uunTQ2vgiMPtp9LoLQj3vwmGB6WTCS6yj7FyhTLVe1up2tBbmTpozLaMJN5KAxEzWZEUfXkpo",
  "key15": "41Vz19q5XfNe7MHwR26khC8ZKXAGoV2otAgwZndzVzPLwuekZYEnkyhEAnBiJaUhfqCBUaq8AdkRaKj8ebBK5QEf",
  "key16": "2yPNGdMom591xs64pDiBpeowXZu8C1FY3uZjGfFrYjJwop71WwnpndLkR2knMXGKNsWZNd93gzHXpAvNFEtkTAzb",
  "key17": "47jHB3SxHSkui5FxxxJ4Q4Si6JBJippuE4rknDkJvqeYEK4jmEWXzhSaXT7jiSCotGdF9JfByn3YDyhB7L8WcP1n",
  "key18": "4poXGKUdhz9gMHJtHFohwYWtNtn3VebsrP1QaQFxxw5oj18JLp2ZF8DrqnbGANnuvoUxMzZJCjyCrKqe1ttvREKn",
  "key19": "4ff8w3VkhRBNzWVubrkep1RaSGNaPJ8uMxxXkkQLn7yyMqMSMHWSkYoVgVqwY19U3mG9Xdm8fhEBp21fSLYtVi2P",
  "key20": "5LPC1vH4Bnt8mQLbHPy8UwgSD4ra9FWSJ8bwbQSg8MaAK2BYwQrvFhbn4e2wWomMgEBACj6Z4XRAfxT4zwUT5nGF",
  "key21": "34d9GeB5CsZWCQT8pe4u6okPTkjBw2Tw5Wcmy1gU6oL5xqLFKsnpdYZAjLToTTAbVstVm5tchLLJ5ZtosZsQrGXX",
  "key22": "4gfG4zwhZiC6cpMooDhMmu6fMUbV7rAP7rETT46Wb1MGMqqaqdjy8B5PKF3kERLtADD4j4hqGSYYyMu8Rryp8xjf",
  "key23": "zC1wLCD7niD67WZtT5iFfH9Jk5LHzAh4PToTmjQuFBThnf1fDApRKrfS7hos47aqZvT1WKx6hXU5uGRh4QBMZ7i",
  "key24": "kKvdJmpm2NzXoVvp5jCb13VZhTaZmZMfe1DgUuy9BcYSiZrNFK6XkdgFzM5jhmQJNwqEzyNCUWwgNFurqF5PDLK",
  "key25": "2DRvtAfSa1Q15GXuQBCFGeXtj7KNh4FPuUwYy4vC399fBstoGefC1qpi7UAZVxAB3ANxEzawgzyPzSQ2A9Wq21t3"
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
