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
    "5RqiNe3JZpyJ3NhyovykT248iPH6hpeWtJGyHYyLuPuT6atVZqdcUenkKE4v8taUvnVmeF8Q8AodaVZVYRHcFzsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnEaEPW9BriDbXVaEcWaQtemtn7NrAhvyBFDCtvb2ZjTabKUWW4zGVsADVJBoMowWUXz1p4Lv3fcofh8D19JsLG",
  "key1": "4o5cNabRR7odJNcQ6sZoFZEN9nux5oiwpXWAU8UXUAjKMJSd2XCkXEnSsH6fGKzpJsLqvLrq66Xgvo3kvQ1Naz1o",
  "key2": "KfZZYKS472xGubW1RqeADuhGoFasVAPL2vDWmkX9oeUMtREGQk6u956bJCuyYn6yNhcF3G3DCD3Kr5uKUhuzx7u",
  "key3": "YQDnphVdATVwqeZPTvE89HYuEX3yn9RGruCyC8VgQeVCCpAS4Dn8yiA4NB97jy9hcebpihX3nDnNcYZPdDchK1h",
  "key4": "2uojduRxbgqSGR4ATvHxzdRbn6yoxTjwL7jc6JXcLd8zqtwj7tb89GYXeKiSJo2arcUy8c95Xcjc6HCBSxT7xr4U",
  "key5": "5uei5udQ44vpiwvieQSDAerd8MKDYR9e8Z9isoeoFHzjG37uAbCDa3GT5BwTYA3sVGeVLghUSHAAvqRjSnvUm42F",
  "key6": "4GsF6rUp4mSuKb1ySymJUkXe9iABTnsYbDjQRGYpttkzo7XyyMWYBid5jAeLKJjUYYFjGopkMzEdUe769cgfKmuM",
  "key7": "oWWbjjLx3XpgJaZKAwXuskD95eHCskzb6nEFDugVDPZSAB2rWc28m8fNBWemyv1VH42jBZQ2atr3YgkiyRfJeyy",
  "key8": "4X2jLDCQ8V4NHnbWsNLLVnsSFcPBgjmL9hmdYeNYmVUitjhgVP3rqt9opT3Qrz1vTvkWbRQ5u76J2hVksnsceVs8",
  "key9": "gpbXn33ajgjUkwyaPKFfVb7qebmHmtTki2Zu4bVJrN6MHBmc9LqvMsaAkWSV7aPeZFrZ2zMRJanzbu2SQAdWMuA",
  "key10": "2KCUeL4q5v1GHUg1hKaJMt95ubKs2CAGTdg5nMSzZfPHtJvXe1ceCP1ouepfrMcZQAGHkiCjSrnFB2QveAaEcZnW",
  "key11": "J526KTaNK8rT1ERiYkXob2TtW68z87NCPqdYvYXHmTxKhhefcfHgAzXkjaiy8e8EaZ9EdFWm1mXFZ5LHp8SW7mA",
  "key12": "3h5hEeg64Tn5P25natpGPWstTbJAJhF3KCuU5tRddCZrQpzqMSQPebeGhqksc4pkfJxB4D9f6bdBGaxompVqKvBX",
  "key13": "5iL3aD8HAG4zCGtdAzwRc3nWJk8Fj3Fy8rPWwmyysvy94A5N6oY8yvEZNo5TUaidWGSapsSLmDRisDR1ssjGcuQW",
  "key14": "45e2yGkSKi4cBQPAhSzh9wWz5RcD514Fkv9jMQpwsyPpDEVtVrs7oWkTAHRAGqRNcQnSg9qEsuEXkUVp53xuFREH",
  "key15": "exiyqWM1mjm6GdMcVpyPUkXzP1smZsLL81G1Pbns1MiR2peWC8gm6i4RcTs85AtEqL5jsKpBL56HsYGgqZh1usT",
  "key16": "6Qz5kbU7Gx3A7y3DFZ7bNxe6EcBR5ufTiXPJpTEseT5j2f3TBaAjak5sYDAKKqNKjXR8hqjzjByn6Mwj1EtJhsp",
  "key17": "43E82qVhJFAUM43dE1rbNAViocGgEGJhAj26snpUddCwoDExoxEsq2D1po7TXBnd6FjWY2VPX2KBNgWJQYA4ZwVt",
  "key18": "4KBDqrKMfGHG2L37XTf51PoLgkmsBDsuS4QRpzEeuVUQLZoHbAK2bVq9DhLGoGSawYVC6mynAw4z3DqDs2hYjvFz",
  "key19": "2CEBK6vsGxWB2PfEQbxs96AGDmYdWV3DJQNNGi2oBZpvniPtN1BYDyts42dmovR7X9uZCihNMWh8Jn1eQ83tw6qp",
  "key20": "5DcFzauD3tX1sT7Tqt9vJE7YqMKpTujrzLyMgNTarhi3eWXdM432BjQYufFQK8f5fRfJ5uXEGyfkQ2sMmKdTZ9zX",
  "key21": "25fg8YJ6LKEGRtpB24ZZUX7YKA9whUzeZzMQWqLjZuwo6zrf6iwBV8HWr7eUcekxaE7Zs7EqLdoCvqwSihxy9BbP",
  "key22": "4CQ6VJJxjQzozpjvZTQJuUFedy2Y2hcyj3a87nGBkrs2yHsFDgrvmMwsaCR4qMTrNGmETeEruSYEgYr2ZQaTyH5k",
  "key23": "5A6Y6Wbs34k9if5LK8gJ1T3x1kX2P1xdRazsPyGRpTdHrVht8x7WVU4jUdkbDw2YzZEaffhqTtcV1q7GuAhE5Hf5",
  "key24": "3zQrXSUHwypyYrihbZ8rQwNwLxtvdpBGKeQU3eVM3qQ149VubdaRtwLwV196cQ6oA5BdWnwX2ZVVxqgpRYiGBJoe",
  "key25": "65u9nKJBYJMXUGPGCr7CJ1Zb3kzuj4cSchRFw6NAAzqrueMLQFVRnuoamDMKd3hxSzZm4a9BjpJScjWMB2GKY1J2",
  "key26": "2jUezdEHLzbguxqW5Aw78pVHyk1qhnmQ9E99S6fQHaoF2i5N2v8b7S9Y1EBWrzNBBDj97bMiFBqnHDSVEksHbqXE",
  "key27": "2mv8VN6HQzDXpbGqTT7T1BWYufxPfh2qBUmywwejUcWRkA1jzfSsKjvftzMULuRRVti7qLzxdmKbpYS2Mk1weN2v",
  "key28": "2JT59bZ7wFhhUpq8TJ6K6Ee6YGMxU4KRCYh2JEZGEhUonCMW8f4pkjpJJ3pMA7ymehgmg3vq5tfKxUitwAtGUfgh",
  "key29": "3WzV8hHdbU5k5zqcdTtZnp4ZPo2Zyzun6FQeMnF6yQxrW4mkAWwtwypiZHhCyA79nhfsSdbAzVM8JyHYauDT6VQo",
  "key30": "3jrAweSgKupBiSA2My5cx4u2LfRxzx5MmQ44ppXeRQg1QwqX3beVKRcH3yS4DabhcGNmwe5FsfKNtF5oPCWw38Nk",
  "key31": "3GEYiu6gWcR7UJ1m9ecQ9GGjHS7JvkmT9U5kz8Yqmxps8drUzLnQ5TbxHPhZfHa1id7GRDEGom5DSLqZbC7Z6NDJ",
  "key32": "2QL5V7DM1AgHCP25YyzBwci6Ywrq1Pz43LkPHFuWJzywnFAiNNMoEp7NWzwL6iLZTBD9iuiEccLyBihFnFDBm2Ke",
  "key33": "619s7MgwG9AFKdSRQsuxgtqfZzvdEvQUaiYVDLZiRWtjzrEcvHht3Wgof6x4f2ap66EbmLE58GzPuGcx8rFV72VQ",
  "key34": "5cR5zmdguRXQGPP7DYvNEuQeGKEbnUKuh9mkb8z955vJX4TP2pbcBefpxwEwoQrovni4EMEfX6MM5XpwSHbUNnx8",
  "key35": "3VEZqgmAnpcBB7uk18L4MqSaDKtDHEgKEhtNDbkuGDUHK6n3vR74CuQrfjxcdGUecjPWL6KH4jSLfgxVtDXz5K4j",
  "key36": "32Ht8x2vzTfDSGZDgbfncVxuXA5oB38X7QBKBcPgvkouz4BZPfoPTAZvTToeWgrX4iKzsxE7cZ7MHHUKtYh37zyT",
  "key37": "3xWNyaE7DBzzbvivoGU8yvd98QvwVkQW46UCMLojaJUusKbKVimEqXaNS8D5LvZNve92GTK8uEKWRFZvGAzcdaHH",
  "key38": "HjbT8Voa1Gfhm1E1LD8R23SDQEhLNgLF5x1kvrAVPzUJrW3mLyK1UojGrbMVytxvnhMiPHWsP2EYEPq9i2D2yYr",
  "key39": "4Poc9zHQ4yNuL6PDcKDWZCmuDPguJtHLzycWvvKQpongJTiN5AV9edhSaUNBLcQTPLRhysfr1kjijratVdQ69y9h",
  "key40": "4f9rhvfz8TUJRRizidCrfzviKQbKGesU5vq429Anbhhum2YUgWH2fgR1tUNVz8nxy3FPff75PnzLNhHyFmCb478f",
  "key41": "3qJEEGDxj3A1Mn2jXQ23Zj1NiGdxtFbeKyYNYHUgBB3udTHrw9yd18s4hpvhkCPhG3yzfttFzh1sr8jgBHQm3wE7",
  "key42": "3gRZqRqy1F1hE78jkcVRhXz7VUPGeieuS74tfzD9steg4WMjoSHkPA1ubULc9rW8cGfjeXY4jdtuMhPp3BU7jgCL",
  "key43": "RAFzDK5xWSC9exhkoKiwNT2tVottqRdEsevAGLUpCKNs3WHy9zPL61NxJS3nur7TFSU5SPYpXdkNMPh5MejWd4c",
  "key44": "4qmQkTYGKU9gVWGddxg54z1jM7GZL3JZXdDAbc9F8p1gJFKhfQaYcF1duaZ5QzWvYH7aaZMZGujzkR3FSBJihq2Z",
  "key45": "2xqY9vF7x9C52drUFmmE1VudyCqjntKvFtd6utjKfU9SZ8S8uHHin8VGiRXFJVpHxsCu4B5RzaLkjLGX9b2cLsPm",
  "key46": "nM4JfNLrjrZt1RWjTTzzwweXoCuXGFsZSJceWXwG7Hz5QkyA9mN6fJM4y3mEtqrvtpS1hqFLsWBVKSjdN66qyBc",
  "key47": "44o9aBn8cmRPsWzEkxHBTBDdaw7eiFC1z2HerAPfgBiC2dUqkj4163iJrKHeb75euAxQjpqEEPKGvCUki88KKcTC",
  "key48": "2FoqD819aDnBSDCa8fcwtYEr9dVynmCkxCuNSjUQ3uhn9P5csvX9BhnySe8Hew65mFC3S7rt1PdszC4TPZZKRVYG",
  "key49": "5myboRCNQj7EDxSPDJ1ft9DRYPw5pwq3TnBmhHwSpMPdcRKohLYZKHZWBJXH7KimcKiaG7ETbe7jFdLSMq7Pgr1y"
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
