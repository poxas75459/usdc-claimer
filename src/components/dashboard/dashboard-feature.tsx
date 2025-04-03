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
    "5KpwApMbMiyctgsL5sdnAxLmBRp2CGYfAnjb1wjXrtdyPxLfTjZfMurgFbYvg9xYQgD6E3nhYe1dbumXPUMwBYx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59cJwaQk8UKu3dbxswDUiJwogSnTBM7nrSZybYP8ZYDQ22Kn7wYf9u1MAdv6XS2HCEZ7W2uFHdv9vEhjXUjuegwT",
  "key1": "xH116ahV45WgT2BCvyvBshDJ33KiSjEvQzKz5xeXnoLxQicf41CKTbQyTbtQnDevRfv14XR35bAMkQ3YciKxRJQ",
  "key2": "2YhMuk7syo6eZKiZgLMFpEbjEcAbCC9ibE6J4V3Kvdx7o9FUDK55FtBfbqD9yF6hkzg9RTctHuGScNUKFb9Chze",
  "key3": "bSKzy6E8b9v4kSLDXESeuaVkwVmHKuhLNEbS8prxpqqdDturWtiaKQudiDMMRrT6yByvW7HsYZq4x1fAkRSuUCF",
  "key4": "4dWwnt6dy7vaKUuGB18MZ6xpnQHEG3QSj8d91uNhi6VNqrNTx4rZcARst72gWmjdc436XBVWcY2PaGTXL1iTdpPU",
  "key5": "oCJvdYQtWBvFf38MEBVzKxyk1bVCPv3c6ZdfJBYT6GoWu5iwmMqud4HoaMZcnP3buhFxkPbnPLM1sASTxfKftbn",
  "key6": "4JzoeJauuZBR2N1kH5VahkQU5GuQnsMXQykGUJEK3TTLXaYj753TJxXnwMxb1JqJG4anRpik8vUynVoy2o1AHXjF",
  "key7": "PE7SRXRqt4zNUqqjfQrjtYjZnSCYW3rETbUbGsJqkkgECAYYDzeSEu58Rqj4pF7wjjrgXsJy8daadzUGFp7HuDj",
  "key8": "3FN8V9N3zv5kk7J33G8A5MzSEvL7CGYRCAZfyg3xhs18YCPBcswFhq32K8AiJ5fZJwPcHBQMwZZmacn4AjB5KbeF",
  "key9": "3UwUCramc9Uk62Bc9zWeqqoSFDjgdUqY4FDjvhYeYNoSt7nyiduuYAXRWis5HgZRtdTnCFs2QWCKc4mxorg7c36n",
  "key10": "3a2ZVmLq75jzP9MTJ2TeSoSznGSpUUbtdKgNyF6Kn7cVc8iixDLCQQGi37EfxGkac8qgT46LZc1nUEtXxoDwaYhK",
  "key11": "2jzoLmbKfrwTyEDGLKXknMNthtnzMmzvgHh6q6WvqU3KaDiHma27LJzkjpLcHxN9EtRWaamucvB8epBCWMX4E8qt",
  "key12": "3w3uSs5K5bQZGwFYS3STAZ8eiNifo1uDxpBq2kzthhbnbefn6SgPSHnVuTw7owbryriauaRqGgMR23kJFonANWkF",
  "key13": "4uuEzXKVfnoi9RbBUBwNPHdQAKCW8ZgxE6qcujmqVg4PpEYKqK3id7rcKtDWLWETJJDxfNPqaU2UHUuVFtjYVVT6",
  "key14": "2JnvhRvrYQHNQMCuysDD788NEuNSVq6q4Y7v98YvLCYC4PSm2DsnVXxqthExNgQBKqa8YEe4YZ88KZuZCiqYBpyd",
  "key15": "QZS8mDna2s49aiGdzD7Bq22hKc1EqMvPjqMNGMKLuAu1HzhxgjN7HqHmkxJ7Y6zr6XBEVoigfPcSEAZKxsmoQcw",
  "key16": "2i4f9oq3q366QCyzKUU76ZvT2Q9fyFioxt3qyEKSE22YoJ9cKud4GacyeuqwvsLo91Y7M6vezz9XjREVn2wmdTsJ",
  "key17": "4yRBCNsuvye4K2vwZamma4hUGuhq8KChwkj4iF6JvDYxYRBVMcbKvhPR8SbE4krc3b7eZWdz1H124eaFaiHVQCRQ",
  "key18": "QG6unhrbkiQbaAi73GFc2YX5TnLy7svWqoxLHSVivMRf9FDCGZFVqZLmJkTtCTM7Mvuw8fExPm8HheNDkJnYDuf",
  "key19": "4hDs3PfuXLrxmGUajhUJci8ereKp2FZ4G6sQA9eH5e7etdeXETx6haEApcmKxqNnzFheDCJupqYBX3GCaysDb5jU",
  "key20": "5mAeFjUYu7Wny5CLcyk5LLWkzme3sNPKT9uD9aWwt7ZKzVTap8Ftv54YhvKkVwS7EqGEWKKSM38vVnjywuPTuRNH",
  "key21": "3Z4rXLkyVsW698Hyf5fneVShU6TNmR8vdVGg1oPmHS2ut43sQuJ8RHktmGgVjagZsT51Uv1Mp8fgRzG7XjYfug1K",
  "key22": "2aqTZbfjWWgTZv3nMBqSaP1zNvyQRidnAgwzapo2q7JDhAdhNLm1Tsc7kn6LtetaMYVty5gCmoTGuVHfmwfmmRxL",
  "key23": "kvLwjUe9dLippNAuwgjjRQwHontie1eWf3ZaZSRb6SDqpsK7Ts1Y49hZMqB8vd1rG4WHoRuZBeVhu3Arirqo52s",
  "key24": "UWJUPuyjm1mAy4zUECbwFmL5mUDME6qPNFUqiKzrQFkZrYqHvodCYpntb3v87qtdzb5ye9TMpHEvdJZwRyyjFJX",
  "key25": "2pS6StqRaFuYaYY6AssV5yFNAxMuAaPxtNaf3hh58H3BGoGXVoQjimH1kxGVovpGACRLapU6ME6zfwtSCoFLE2Jg",
  "key26": "26ussA4peCX2WFMMJwZ8JitqHLa2EAbLVCzuGu3mSaU1a1mGcWBUVqFqBc2ghdFpN4oNpzLzYRDnx6QZVWNUzeov",
  "key27": "5RfAj3Vpv3XofuCkCJYu7MWLnWwA1yB3qV24QPXU7FnJNvHXnWxcxTGGu9BaxvtL9FM3zMfZHi59g7ASK1BpP1Gt",
  "key28": "4oWy8rGHwHuijWFuq6p9qbe7d48WTHCCgvAYvo3x2rNDAajFeqyvErGpo2vtVGMwVk1e6ZBU6jndUBe2hMpRKxEz",
  "key29": "367zmcbarBk1mWCeujRWTdH44TEDLm3Bhh7kGSch3LCLEeHmXcrpLwLGATAJBTgXXVUZw5HavSzULmJ1K67XBNov",
  "key30": "4iRcGVkjUBuNPhcLKVkV9nvbeKQ44VDxaEzcF7CsdcaxFPvu61hRBjdMPehtdZYbY9WqLmjSMjwhGQ4N8VHZZSmb",
  "key31": "4Ygk7K5jBX3TNLGPTtP8rL2R2MDFhx9Vmr6Sf9L9irQkA4pjdtPUwvGbJby15fkT7RAEfKYkuLAPgMdEvGjxFAig",
  "key32": "2Rt3Xjroa6Kzw3Y3eZ8MHrjeGYT2Eeuu39DeLSYv9A7TJcMTVi4BR8MoGWWJJjs23MWo4AQHDxXxxgK4BSEc2Dsu",
  "key33": "57Vz9BJFhzCAR9YbyzZ6KkvuGfRsEntcYibttBXLsDFjUVCjnqHG9k5JHXWssetuA9UDJ4uEc8n3pLsth9p4jK38",
  "key34": "5SKEUekdKZsRuhGns8kBPngX8c3FDVpsZyPTaUvuuJLBFfdVhY3qfbcHz7sEhZuNYKhLtHo6949iH832SA7bTu28",
  "key35": "3XGskuUjA3VcYP44cGLmS864yV6zTmMA65gb7LvQBPLFGvxWdaUpwZki4dwv3zJAve4iYKgYjheBPDht93UQZSrp",
  "key36": "3nFGKe48B9txkbtFVEAdTwjr8qXBF34ELVieovRxMYopGjhP5ov78uza8BWTQoMQkDc1t7H2FAg957whQchMRgFX",
  "key37": "63RydmDW6dsUjUjjHWH6wTPdu2a6pL6StoRHpuEoL3MZoXP13F3QLM4PUqSZg8NDfFwKxvZjL65GzJJsaz8WM46x",
  "key38": "3dL7AbB75r2vbayYjpbWZz78QoHjANRBJKzQC1wFkWNJt4Y6Te52VqPsc1hzUW78Joe83JQVkaTtnAsWcx6tW5Ur",
  "key39": "L5HzgboCExPdfE9bioVRLoKbyqgzuSCfMzAKoZuM7K59jwEmXt5XuQKte2fAQYhdrMsuo4sB3T1H7BfJDcMwYJY",
  "key40": "3C9yjGHoGDwffYpCQGe5z5qSsZQF75qAr8v7qVcmKoFhYNzascqaE4uqFjhkU5m5JjaChQDMnYusYacC2WS4ynvX",
  "key41": "5qeKXW9YRTjDycHPFDdAEX3cVmyNiRDCfNm2NmCPVkVS8TuK9DJ5q2gsdYeCbkyhNj5kgvZYvr8ssRCg8CicfAMJ",
  "key42": "UrFEETtk4tTrcUMQeSsGUzQ2219zbmXNhDnHKHAruuxLpp9BhFH9Vjk7X4z6v9kG91Jdsme43YSqucb2xuCK4JK",
  "key43": "5oNbtZnTyBCbwJQKNMP7v449chQCi83XfnQnQKeQw6fJSfiZYmUVo4zMvjwtBySbdbfnu9ECCLJ1ptdesisNDMeW"
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
