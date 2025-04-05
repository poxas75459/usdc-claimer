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
    "4DD4Vktz51kayTokpAtxPGT5DGwS9hnQoE9VScUCkZT5RWsp3QDJ78SoBiPvemsYtkqbKPJ1N5ftyAYQV2TixsE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "433SgHz6yTfQKvoryfmS3wp7eirjnmH2jXCtiu4sSbHpnmbzZ7N9eUrfujs8UkJwS76LYi2E1M8wo9Hx7yAPWNGV",
  "key1": "3FxCuJRPyK8VWgBLS32NUruYY5GQUMMhpSjeBLrFeTTyARJLfMk1A8prsGjTgRC1FfxkTW2Zch6fpFZLcyWxso9i",
  "key2": "2vc6ajuWgXYZN2hyJoMEqxMnnQ1RifwkyzHYHo1DNftamGWFe1fnSiV9qPLWA6GZtA2prn4x9d91oKGgk7umNEdb",
  "key3": "jttCM35utdTbWPw8EXGkpS7TTEWGVMn3uLkBsC4oi22VqwR4kjDdmQN46onWnLU8236t2TLebrFfKRJzZNB2TXv",
  "key4": "4bFrrQxxq3dFZeDy1nmYNMsqXpxPbTTgzE87isM7fwQShS8oCjn5ijj5PVCMFsf6keE27PsVd5MEyo4VaMgR9Gy2",
  "key5": "47gJsZd12dkoaYB5YP8DDHLwxFYiqUc691XsJ4Lyvpy6dRUb7gP9t9tWLqbuhNcav1HE2Doo3U1vMqMuSN75s2uG",
  "key6": "tGvVbAL98hNY8c1wkReiZYLEq53DeMHmqgXZXwsUsHdeK5gt4rE4rmctBqpPLnNVaCrD31hcp7xhtM5BjejqPKw",
  "key7": "3cdDqZuHyUAYJfuURga18EkGfvFABFsiJqv11k4v2Dvb2pF2aMbDLndVdCufQqWFMYcrnX5MjPRPfBoK5S4SQbAk",
  "key8": "3aNzjS95JYiQDQbdMgMyHRpWuXMTnbsm7nc98vsK7Bg3medwG4MnrfwAKCP3fpQr1yTdDW8ddHeWpTHVHzXfL9Nt",
  "key9": "2rHvA5b6NPfytk5ZDF5KXaoQkbC1JVoAK8XnENpHYUWcQk34rkDc7Q8e6CWchHDuLCx35LiJgfRFHajsRNtScUkJ",
  "key10": "5fn8njPSfvVd54b2fA1g7oQ663ohHuN5nTGfPHqDYodi521dESCyrcwuvvfRsSetAmN8YabXkxotPEV9DTy2zysG",
  "key11": "5sayDKPF2VfCbRWiMy8AcmLh8Y96wpY563X2p191BN9tiqLivSUQ1Rcp71yq6d7vncogoh2PfgoWmeeZELS1gYna",
  "key12": "3oMr8Pt6gPZpN7vbiE1XJ9QuFp9qVownGFFzW2P5RTBjCvvqAhSSJpCPLDvfr55ZP1D8UQhroGj3AAQDdDysNnTa",
  "key13": "4q2PCCWV9pvSB11v8j8ncgwpTrwx3atccXFutQ3KgpuEM8YouT9viwS7VRLSj56xrezJ9aAoyiUpkRCPMCBtQQ1i",
  "key14": "5wL4k9BF8v7fbypArHqtphqvqQm9kiALEm67cbcFajLCgZcqSEY5NfUmtSzxCEWr5VMRMV6Aekdd2H11o7uUMLWy",
  "key15": "73kpFP3K4eKiY9ysNcfeEYXEPnaLLVzjwX5TQYyWVFYb7aA87hEEWWnD6AzsQ3RqnZ72R7sBhunMHVp5e96Dz2s",
  "key16": "9dib3C2UiiHGMTrRmnwV7QMdhbvbAAZc8ctxpdE9aehpzYJc8bF3aqMmc9KvVnzPrEyn47MosZzUs721h5kfqR9",
  "key17": "AXqG1zuYvPLDyYBPiVWCbqYKYSJTznC98mXfMxDrjjYKduSbS1Uj5Y6gSga3xEKBCnpXN3vkttEKAV4J3G983sA",
  "key18": "3JEo2dHUDFkxZMmEmYQY1jU3Y7VD6wK36wB69ZBZ5C6PG9Y6z7aJpn7mLAdekrMEiWPCrX4qgGBigNZ9Eju9pbCN",
  "key19": "21qHy1XECZhxyhunAjprFapxT1b4QdcRKponHFgVtRtPHxfskLzGB7Kte5rKThkp4DB5oaAVCxazNAcvuNyD6g7G",
  "key20": "5H7scxcAK96u7nY6QMfeZs7WG2qMQK8ANVWeNtNQ4Nondpz43F8DkuEE6xzUcNsRf1RE1gR1tCCKZsaDYrfvZB5P",
  "key21": "211ubA1frdjr65p3hhtLBfm45yTDNueQbbaokX9DTNcKEsbptFVzYoAK85GBaGHAgFmq7gZQsADjTWDTVF6zsAWj",
  "key22": "Ntvq9EyxV8yfu3DUJaDFYCQbDVBQL1XHrkWDB9uuuxqWNzbXT7uZLpaBAKPiHebd2be9C8jkJVXiFbf4SUbVysY",
  "key23": "5utHExpPsG44FYBWoAjjeidbckgsyLHSVoVNZHgy9d88qh6k26LevekD9W9MythLNH79jTXzAhN2Y82eioc93cFs",
  "key24": "y2CFp61HPBVq7Sq1HaPjM45m8tdJUesbk4gHahmWa4ehX4Wb9BfvBaTxLj5nTqqEEZXitoY1npLe6F3Qc9bwfd7",
  "key25": "4wKVKs5hZFFjLr8a4kNw6zjyC9MHBzoZVRiEtcgJnc8v2muTLGMdHBTkPAfrbWa8T2Ae5WBcTWN8cw5LVFwaFqtN",
  "key26": "37BV5F4ShaiT6byv4YsLcdGc21J67Ux16B9jKjbECSUz2icRoEDe7eQLyrjWdDVJiE72sQu9eFkExiRyv648Rwyy",
  "key27": "4icHCwgdSJ7WeWRS4DT9UJ9z8mWa9WueGHMhxP8imfPAGv47LGAUTE58EwKjnuV3c2dj1AD5CPU1vmrR4oQDpCDZ",
  "key28": "BnZFUS5nGwnF6XochsnDgtQ27FPyuHxZNGoMuKevfwvJ9UTLC19sG7uExRmA4KezyiKGKfZqaUHUn9w8gC2B8Mh",
  "key29": "4uqv4cLxRJ9AScKjRDWNXj2d9mbZYyCfaaCvvLtLqPRdVoMwabHVT1JHzEq1kSa3xEZR7jmS9c1ChFb7eRAMAAFT",
  "key30": "3zqQ4omV7DSn9uqHoy3DsstM5Nf3UWxqME2WoWNBoNR6twM5QzrHXNgzVd6TLc8AAx8ZQKTharpnSZ7Roi8BsoUW",
  "key31": "5cMA3CQUWNZcuP6ABVV1KV4Xm6Y3xMWf1jQnnzPYUrc2PCLVW2JkBAAMRgunS2J9TC3b64yC7Z5Kc5wmbWiJrbEa",
  "key32": "4dBNy1fHQvtxPpECCYmKXRQ6pBXiyfkKDm3T5owXgmPqVVCEZfnvykrB8fhC2tXAiyJDM5mxp8eCwbtEg4Gvu3G6",
  "key33": "KNJEbu68Y9J74b9CKqy4TpdEsGp2iKgnHStvYNWwvtcr3K49Z1fsxB4A5GmuRoyvxzRjK5a3iy5BzQfvdf24bDb",
  "key34": "2x7iJmyWKdxGuMhvzdq44H86ECUzWHs1BSXXbGsnVSiXuLCc4n12GuY8ziHFVgib3CgCsSSWDNZnaejFNV8xUcWf",
  "key35": "3ejoVmf6McqLbtTJ6qNUH8rtdGBdEzirPG97TJXCiAWsyVFB6CzM6mNXJR3s7j7Z5vDYotRRHEYvhVCLqZzQS8wE",
  "key36": "5gVg7BTEQsoyh7M3a4tsSfWY7i7bF3rtfXRkrESoAexd1GMVES9tR6udjb4p876bP6FvBw2NayVDs6BBFVgj9kpK",
  "key37": "3xn9WSGDLJE5oTtqXzncaqnv6XKTuxdhFzkFmYPU8ACtwMi2fyyaKNApUP8vVbU9unrXuXTjnJb2PMy8RMkWLAjw",
  "key38": "4svAL6vHziBqJjaqGBDvMambLYWAvh2FZRsz4XvjkpanugVgV3xk9gmvRvH4CF8jEcffiu5CdBAUd68ojFiU4aUD",
  "key39": "4f7wFJob5ypmkLHkBb2ZtSDa1S8ESg2435TqRH7KThh8jV41YFCEjVy4wZxwUuuir73SmUZJ4LWjHJZYw41naVs7",
  "key40": "enuEeZgKy6mwNYKanjox8CqcWTvJffmYtSjrAtopQhBxRA7pG49oRgWZfNt1o5zEYaZ6Kp4ygBdEzvzebBDoJUD",
  "key41": "4k7Nk3ecmZQ9sBy83PfgcVHUCX57NJJpa89Yzx3a14FQDd4WvmKyTr2XZpzL2ZcmoiWuPe7Xn8szFqTWeDGqqzfZ",
  "key42": "56XFzxqwWEtgjjxkLN7buipNCXJDyUcGUhPDm9qgpQD3U5vktHZuJUnoBLwzWsaRk61we2ZnSh4UYZZ9bbdXGD1N",
  "key43": "3CLionj6fevPBzJY5KTMep9KecNLA6GPhamwzCmb2K8EWNcMeg3V8G42EW48VgxUPHXrqsKUNgde31MeeTpbU91F",
  "key44": "5zbDYBXFbhhdRiAmAf6EeJ31Yf4WiF9VzHaCTPWYbfZjsEeZ8fvzqjAPdZYPQXFE29vsjxD8Dy5n9coygt4NVehk",
  "key45": "5F9FnRJ54F5EG2DF7dA5JRDXxAivczzaFsNsHqJeKGeEVrztmmgRutcPGGSbX2FcxAyXK1gNgNQk4n7Vnicg9Hk",
  "key46": "ETj9c6Mv16dd4nmE8Y267CVccwWXSwDbs3byN929yPsJhY3Vty5h7T43PPYYuW7zY9uNh6JYU9Nj5tLmm2ijnhX",
  "key47": "5Rio81jTKi9gFNmCZQtRR7Rmp58U3YmNEp1eoNCH9xKs7qFSvRFuqW7iAvWGmRWtpYhLomgZS4CJeLqdubPirJMi",
  "key48": "3sWcmcCWLjdt1853f4sUxiXMBLFoJqZNKh8vbUiLgVW12NocArvqKt5NJ2LMFPq4NTyySTWLy7Xqo5R2KPujk1jb"
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
