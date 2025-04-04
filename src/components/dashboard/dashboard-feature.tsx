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
    "zaJyecCQcQHG4uUEvPrCbMsQYiXn1skmCFq4fANHt4UuqcgKUDGFRb1N2fLmZ5U3b1CBQY5r6PekYZqLE36vNuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emp78ggvY8h9bh7ghwMXAcagsK8hamgggqp7MafaZJ5WkJ7HnsAeFQLqDLcAkdJjUKGXfrLg3PPdmhVL3nrzTUz",
  "key1": "76kNYkGmm3zq6qip9xwnJfv314ZjvU86oBRLtZTCJxakCvT6MRe31crpBYBMuCZiFPvSdVCGfGht3FtLHWxbCfR",
  "key2": "21738NBQTxAC1d7VA62vdYB22ogyDwHTzqV31tYnBkcitauxrgBBxR5zsaJu7NQBWDuEkc8A6vgpPXAUHjnEFCDa",
  "key3": "T7y9dc6qopWEE7z1cKB6zrkB7SZay8kXqBqyBgWoQ4GS5TzUobkHB1CE4i2fxbfp9zDVQ5y6gGG2ANk6aLMbcSd",
  "key4": "5jJ7wAfybEod6QNkjS6eJgnZScQxT8aBexoMw3DXhUbXNwipVZFcqctJV6BUg7ML3KBxHTNiBZtFBTegMan8qfyP",
  "key5": "4AqJcW8DpvS3fuE2nVf7GSdsCeCxo6HSYThBiaDgo4kyaXkArws8mWJ6iG8VUXGJCHC8uMcxdh7KQxTB5eoh2Pug",
  "key6": "5RQ7Aormc2Z3f5Jpn4nRiRWALoG7csfQCM67Hk54Dfa6NcbGcumX4FSmKs1CbMdgSQyP12fGUpVmuPzhQBULarrY",
  "key7": "3KMTmHSMdy8Xxv3scNtVAtV1xadWwANuLEwxWyraJPrijtQ9VDTEF3U4TZ1D8qZcgFXtot9fhfY4wyfD8gJgowgA",
  "key8": "579xM5rqfNhzMaueuWq8R3JHj5bgePrqkZ4nWJge2fK27R5XR4YectKmmcrFUu16pb7Xh9HMD4P2zmFUL9UUiNqC",
  "key9": "5AutbtPwUTtedyguBBsaEZHVMx3SXCNMB2uw2UMtSWwAXkYddaAhPp9fsWmvg5Wz5LL6ueeEdw3P8F7jwkKETzBR",
  "key10": "3zoCjDqCss7XMQGLNYTTBzuc1cJWrZqViknNMsosDYtTpWQwRQqCxu8MVjmFTbcMsT7svTKgJXTu9fx8ruhEzhNL",
  "key11": "3unJnDPQNBppH7vVjQ5WWKjZcuEWjDUsRVJDGXpVHSVfETfXTnGvj8dNJ6kTzbTAcuf93jPjw1c7hsGbXs3wcTiH",
  "key12": "3UgVar2C75piP3jufi9qV7M7qFjyMUbNYvTeewRYaQBwFmxRHo9u8zt2g4V17E3zkdDpYcQTwLCcpMGhxjF3n1dw",
  "key13": "Ja2EWyfUGhUcThnuCQaDQnFKrZZpoDhqZEgaKqLodqzfVD73wwJprQn7KKPE4xXsYkFosBN7zomKvdiSgsiRc79",
  "key14": "3FQYGa68DrmbtXpvVFhzGxhRVX89Qc6byh5tNZGABzguRNYsdEoFQMZewvwDog3mgijxiKbkS2CR8gAd5irBEyg",
  "key15": "3oWuEhUsKkTRaP87cJ97JAKauMEhHnL5f2Ve5Vkax9N2DipmFnCyBVYwPcdhKuJHUZULD42WYGo41dFYyMjFdx32",
  "key16": "d3RAeQhV8nm7R8gXBk8Xou87xPorfy9mEUGo7kMPgDeMCD4dqLTR9VZ3GWaue1EY7qvCPkuj4Zg6EZ7QJBGuFWA",
  "key17": "2GAH2QQUeQQNsKA3Yk7ubZdX6eGa2TTbRyPXnuX1PnqsHraiD71aXzEcu5YruQB2DroWxCkzh9KHHDWNRbdDxEgb",
  "key18": "3b7e1JV4MC7CQ6YvkYbjHadndbPrQBgcPw8GZy6LuhE3mj9tj21e31tgdhS98wyZP6jtqCaxk2WSzfChaYCwUv1c",
  "key19": "5yRncRcVJdcFqRnHKPmbvGmZBMssvvKA7YD9PZgtCbKpabLhMzfxiRtDia78ZoD4eZvAWDWovN5NNfYYHZuPHoR3",
  "key20": "4dWuCiF9qFuaKAg62n49aHyjgtmWPnHy3bUkE5YJGWuen8Yv87rGxs6n5PoWBCvrRFh65i9r45UZ7HHbZyZZUHkg",
  "key21": "sFjjYwibg8GKgiQJAJgyRedmfD2jvgDP2KXjt1oYdg1AaBLtaNLzxffLeythDzpQFDBW3s1n9ap61KYFWkZCNGL",
  "key22": "34rGXEaBmsLbK4vrQcuYcgjPCX4WFZPnrx62WpezUH26YGkwiP7eYwLCmBeEmRtDs31D5UL5JHhngvoUScawJeaK",
  "key23": "K6yKMCLTzXv3DnzWGJbuxtqLyBCrHTfw8VNPivbcZnwzkiVYZsUTyVNRMU5vZBmoxzyRpohUdyyteD2jGrSLwts",
  "key24": "S9BKe2fxUae4briWwjpMowmnMmYgAHNR12szon4cYZkVESXCtF3Bonustc59g9Yt6zZ9TbUcdFzv59CdJvoY6gm",
  "key25": "54DVcuSzceZ8pyg7M3hP4aiPnuqvhK5f65dvoRBeh1ctKEGEk4NMiS137TuDU6nk781uwjEVNSBA7ZAkzsnEFnwt",
  "key26": "5oqui74UVMcMcJ3RNCKuidyEDHAw7wfHkpcs41FChA7251MLcoo3MiAQ5VVfXjevnHcGqQU6CaMsg2rRhYZEfC3Z",
  "key27": "3xZ56yAkA7BhFVpr81qPJhMnyffmXRp6eBmrPu2TVEjA8jPED33bWeqkv94ekPRpAR1n5iqrFWU8dBHUFiXNZ3D6",
  "key28": "28YaqvCEK26CLUPvbQTv96vg4um5FhxNyjQ9G1HizYYSHfwJ1DoT1LjrfhGAGjo3t7dKoookce3tAscunhij3KR8",
  "key29": "55PcDLB3uFiWSoa5RcaJZWrQEoZWNGSXh8hjCC8zEKeh6E15aY3WXLzV7wig1ejbEdzasU9e25SvnRAjvWtrPmpK"
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
