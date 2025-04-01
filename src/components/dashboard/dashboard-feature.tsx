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
    "3LFPfUkNBU3rcogZtGdjWj7r5Y1uUKJyEkEeWQ4ZkR4osAta95XJiFAekrfyMNJUEfHDoRN2c5mGyaTMPrZqWurv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21f9CrPbBzWQZYcherHjEGfFsiHGhEbWWr853KoHJN2CsYuVitzHCt6ka5kUPgL9Qer3asSRZD1daxWtq66xAjCP",
  "key1": "51kgQGiXYjXcfqwjGMywUzXs2ZYWD7Vd2Q7mdvru3TAc3u5Ju1i4vMySj8Yi429qybh1foSJtJBVAzPrTow3mbby",
  "key2": "24FXPpavoV98n9TtZvHY8jmmBzDC9ziJ8wH6EvKB5rF2Uxx4PgAKpppTyubzoVboQZ1DLastj5yN13WbxaXZykg6",
  "key3": "51RxLrMAHQjgDgE5cXqn9YTUjtuxsuYFb5yaV8togRuaB2Unoq9QrQ2qjJq7M6jt4ekk35KwXXJNXexiWvTd8S3y",
  "key4": "23MmEqwCc7RvfKaTnBJWGgtTYxkrHZGrGGaoEpg2trJdbbXKQPv1psqmNY3nC4HkgkQdb9GCktpLJc8ocaVvW2YN",
  "key5": "2VdDYAVf53rNeaRPt1fVXW45fiz9WMe6vVJdzTU3SyDW7ye5xhDjt9sP26GdbLVEpeD18UfSYxS24GvWQQ1stUg3",
  "key6": "28qTk5MH4p1uScypmpAjsA83sNf12ndAyqr2nC6AriBqk9gxMd6WVVW5dB6vJ89YUKrCR5iJpYyjJwVAcoJm2z84",
  "key7": "knnw6cG6kXzSRye55szjv44qhigkr9UeCuSWaT3LtC7e8pmmrRoRqYzPW7nbHGQE9aJo9E6QYSqf2J6qEmXJAFA",
  "key8": "597Yns4sKWZeFTcar7ASejfgC5kV823uZpuh9HsbemftpYV8YXDXtnpvgiZipCWJ7AfYofnyTD6bjwS8c19magGr",
  "key9": "5GJt3jkiPMBAh6Fp9S2bkrmvRFj7ipXG1UGgWCEttghNiFMnsCfC8fzoFSPGdr5pgYYHjm2Rr1ht4XM3ZziExUg6",
  "key10": "4piWhzh73u6KcuHiAXWveLW6Yv2oux5bzE59tAKWxdkDMD68yXQyV89Mkd4Doz6gwTXXjzJvVX589ULB8ejMLcxt",
  "key11": "5NXsq7fKaXvspojuzCaSVhaha3BR5jRnqYsLGBkH2koC1mw8YDND347sCrf6g3fHGyHhAiZdqWSUuXoVKEFVF5ni",
  "key12": "2DwgPjm9Sk5D4iGmE4fprUHBqKuvYzNoJuvh3g8xMW4hDP1NZmXpA3JK48JEjUbt3Mg3toLKs51x6qXquhyLf1Kj",
  "key13": "3QAZF3VHbnqy7o5Sa8Yfrb3RJUY6Li51KSGgS5gohmZujnV6tEiLK8h43JDuh35Gt7pEipdUSLZQa3B6gimYxuPy",
  "key14": "5ZUAhcwQRScmznZrGWMm9EhXmzXv6whx7Reprapy3YTmL57oBpkw88RQBWPQZTiE1rY8gkhTdiYdzkj1Hth3Lw6r",
  "key15": "2BvJR7pJfFhBR9DD2ySsGgMNiTGKVpH7F6p5gM9zcuWKu66X76symyYHD3xNRFjeAWSPVBTig2mhkMbdcuj3JTmz",
  "key16": "4TuFfcxBQjytoBuXMtZueFxjGBfEpC1PEtQc3JQuatphPEq3mhqCj8fvaj11hy6cmW59rniVKuK3na4X2gZtCkuD",
  "key17": "3uCc13vvosTR9iULCU2QJwqbg3K6VvUHLfNXSSf2YiSfvEkWCwcEzd57X7QsrWM2RBinXXDpQR2sTEi3FUqSvya",
  "key18": "uXt6dNJrsoPxqeug1aLX7bDvrzJMo5XPoLNFc9wn8zLPtyCy3nENCLXRSBBJNCEfAJRm1Wze6w1XTkATUteme4e",
  "key19": "28xXtyhLL9aV1LU11osacVCBe51fZ8MZj7T39xKcDy1YiuP9GTnLxTDGT7qb35Pyyv3LGYjhUr8t7yNZ37nHKs2k",
  "key20": "4q3bQJ8REi3m7WPornVR8Pvc3ud1DhfV7D2iL9w3dKYne8QbqLAGbaweERnUNGwSN4R7M67QuESHTbksYK7sQ6DJ",
  "key21": "tzgLYZF6xhZeB8JVuudbXVWs3vavGzH92jCwczVsngqqp93x8xqVCYsC97Z6Ah3kCVDxq5hAxhbuE6FU8QkCWPE",
  "key22": "5i7caKmcs4rC3KAcomoL8HqU89JK8BPhEkkgehfc2VThxQreyhXo4MrTN8uTLssziDu7SuAUQkvuHGNYjxvA9aou",
  "key23": "3ekmcXioHDFyfgTFmZ2PGTi2KTSskpJZxYUTkXQgVyMi8qdd8oHa6o1pQwmxyDnsEpAmhhppAZoNFtycnxJE1H9D",
  "key24": "61dPA7Qp9YcRSRoz945CgvargwDBH4NNNy3KUzioCH3Fx4ZMXE3y6enoWnsAEamwm2XLUKjwUQ2ceG59gVqnDVoZ",
  "key25": "4rduWoiS5jyxYiRqqVeQjbDZDCcy4ZCKVTXnwPmT9pG7p3VoDRz1jmkviAzsSTHPYea9A4DPckdbSvGSA1qxRd26",
  "key26": "5vSmNVDTLbndBYY99nVWwpAFyo1r8C8jn34hCbDqZXMb8PShVH7cJdbXw31T41AcLiLWGvDF9MoJypoYuv7mXeVp",
  "key27": "4oJwfGGNG44fWKxEFYWDLsYedWMEw2vRtywoyN4m7RBMo5uf88BBtUcm4qGTLvhYA1w2gqNkKfKQBvhUFTCsVV9Q",
  "key28": "5umWw51MjYBgKaLSzdFDzq3WnELMas4Ln8Za1C5ff8L2AJG67UPExaA6uxBgwzgrA1TAUbJKnqXDzKGTND5sm5er",
  "key29": "472dctbScQTv58EMakegze9v2AZxsmWxfgpH99bXoo8BKURsciMJTW7oeKkA2SVwgW5mp6ZAXJ5YaVyi5Yp2FYGN",
  "key30": "5uoV2taLC4VR2arhKutBnqCKS9mkJwyTNhcbkpgY1JUZ91xmUttsLqGdgEWdhbZNykuHtGZ3nyu9pAeYgxcTH7dM",
  "key31": "5KUfx6R7GzTgGn6eTCjiSrtCY8isNL8GQXRpJS4wN3TA3cVzCaxN92182iMo89Bjb3GsiVdqcaBYkuwBwWPGY3Xu"
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
