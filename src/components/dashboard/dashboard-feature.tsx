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
    "3EcTzYFd3vrAaw663oJ3C2omWZLrxFYoneXaDDYV7GgPaf7e4KfGFBUbDLWpVQcL9mNFQPQ2qGjK8dveTyCJp17G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCxMyWNuAhMnwC4xntc3bYTr8SQwF9X4ugK2DUk8cX5XJv7k6DPHnQXMtqgZNy6sar6Lx4ToKCAdJpqaaR3eNKN",
  "key1": "3BFyE2tvamTEycu1aiq7MKGPoPwpwernAMG8x1o4wjqTVntKombb1ujFaDm73mi2jKMDktEmzzy7R43KtJ1eJXAW",
  "key2": "4wr3FHMRdEVPe7pFazUpt1PaB1DbZkDHZtjYBoL82Tcnu1AD1JGBruHN4mMkrDmEnL4aAeVLo5qDwojwVz13zSBM",
  "key3": "3RzSkA9zED9rL3s4qv4PGPLmWqn1atQfWzHMY8atgbsQMeN1D2hR4QGfLMZGeYG7BCMj8LiTRKeq9xq72nn1Wgp5",
  "key4": "3YoGN33umQPBBetNLAHTG4pab8HXW8pQBDC121tq92a7hEa8P961mEjA2qSHN4zmYppkkSKHeZfqLeqC9s4VPa7R",
  "key5": "GrU9YtaQkuoPgax69RgnxyCJVqRJEAjWW7R2rFDEXww6Kb8rBHAaCBW6uUfbYseCTDaqajJBLrgoi2ry3Z2iJo5",
  "key6": "ijMvwgRk5iqKCNK1838Z6WWVoEGh4aEFS9kyTp5ArNwX7SKhambTpeHMXmqbKb3hs9eNh776EFPWPGb5CrS7cWU",
  "key7": "5yWRuniX2F41ZubnfwSHL2rLHcybDZzKSkFFTXfQiBR1rHLyZMD5YbWMeykPipJYDFxuPU8yt3X91wFSL267J88h",
  "key8": "5QduNGfBAWoPcLzofLcRNF8gYCoGNteYhmrXw9zfqWQsRB6CXzAjtHWwpSQ5QdP6fACBQyH3tH6thQ1M7QCorUxS",
  "key9": "rHYVpCKWPxdckPhERZZdRJsckPMGoG9zRxEzrV1TuS2pnkQeTUXWAqaezdBCEDrPH8TaP14jAd21fSQkKhVWt7T",
  "key10": "4oPYsnxv6riNBeZevdfyYkMnZcxmFqFwFYUxccRogjPcf3TjBSUxJYsAt7C7ujSpTM7R2QvgQfxwQpLpZV6uNVQS",
  "key11": "3GyHqyQwUbhnDVKnQ8f8umQZGCNyR9nGJNaWzWUHPbfSuEGnf3ZxgdiGZar9Rry2HLBjLCbgfAFWryKqvwWwmy52",
  "key12": "3suSnFP1T4nWFXiziFN2DY85iXMMF36CmENFKMAdoVLK7LZkLtvJ1L178vsjtB7vQNYKJSUJ9Eipb9kTX4SQMpM",
  "key13": "XNFgoYJpt91Vsiq7RyHj9UTip32zU3cQSWyQ5bc7ZyV3dnjoU5YVDcBnr9H4MjqgMvMviTZ3bVX2HzmXt3mySQF",
  "key14": "4UhFTTK22QiMv2GSBD81TAuHuTnJN93qYaPKSP814qAdaDFEBY3MfoEoDbhurLsKVgzYMjRmC5S8iVMgPDtWuF7c",
  "key15": "HPspyVEiMsaTUaTb6NGtSP9qc1aCuSx7pZv7XspSHjmai7nmy3eQ5eGQZEn3F2wDixeUM9ZpeRTnYowbCLUbiNg",
  "key16": "A3cRCM1tGrYjv64UK7W1QrDhgkjKNgK6sNubQEhSwf4aqPNPgSNsfA9W6pvu9rRaBv9CC41y8yM3fJ3YensMjVf",
  "key17": "4SLyKtpUJHLoWSdiZwBRqYPpimribTLNDzbynQrTp3hmSFBTxdL5jEFXueJv9S69Zimdx5QKFUxYLKXqFq5b4zY9",
  "key18": "XBm2YgDYQht64CNAo1uvpZxt4JHvFqMLC7tiop4rsRAyJ8WUyMr3DYb1w1JtZdARANb3gDEd3kvzUJcD7ZgL9BD",
  "key19": "55j7p7VoYVcRUm9YCBr2pa2nH7wQF7HBFcMfSB6QUgGPTJUm7tdSLm4JjJ2MgG5GtMAMiyWyPjkZiqGWzYJRA4Yb",
  "key20": "27AGBeEamJXYyUsKXgKcRFHj8vK6PSMNf5KyQ1v2WTMk3YkYVPck5FTZ8VCryqyDgVgt9WydqgGBWseuhdc6K2hp",
  "key21": "BN86YPeCZEgj5THrctZPeAQyG8x44kg3AVvtLfCkxhHJ6PjQpk526fpoYvepPq3bBbQXDdxE33NB8vS7prFrDZn",
  "key22": "41AraJo5wpetNXYqUqhz1oh5RwvZuxsyGbTtaPajW9XoUhEbQD7L4esRWvtnvpF5wRjz6nRXyhq5wV929rjchRi4",
  "key23": "38isQsRDqn6w9duwpVsk4ste4MA8qWe3g3aSZddgKC4pK8mzBKahR2vEGokXDuRTBtGVHAJK5AMgwSVxoMNzBAM7",
  "key24": "zjAxZNsXDNRb9pBm1AUyptHHSSv5Z3Y4GT5zCZ6DhVidT62PPPHsHeQyAy8BcY5wzvwKja2ywSQfbt6UuzcAQGa",
  "key25": "f2ffNaN1icX4p91cU5fqHhmYrMTQCkgHXvPag6XPnQFDMSnQphg94yQeFxwoPG7yZJDV5WmGXk66QPQzK6FPppP",
  "key26": "5pTjzUZjuDtiL8c17RLBUg7pdGC79ccxtzF22iZnWr1XgUqfGz3UNLfDpxbGtKVzvFszNHeoZdcxRbojv8ke7pBE",
  "key27": "35tPsh1Ccqawr4gf3hz74sGrzGZsLqeibHJc1D2zPHHvrYYMfyth1N5NixKEEwiMG6D7B3hDK8KDyTn9MND6EKH4",
  "key28": "2z7GQkE18ANYhwDs69WtgMCKeMeJRNHsVokvpNw81baUD2fGKRVRcXbahT6x8zEZHWsQ97DDmu3vzFvF94fHUpgN",
  "key29": "4UsthK2qpzh8W82vFcHp6tdEe99UqJLKWPqAVbWRNrtvBDea6BWbyhY9mEqa437LXUiDCKiWQYozRioogvAYczFu",
  "key30": "UFZV6bJ2Fc9bCfDivGwjnG8Lfi24aE6dd5hEtTQc6Gwit9WRz7qyaGCGqmkQsUJPpKxEqvMaQoup9hUHE2u2BAJ",
  "key31": "4c2LLE2dwwa4S2mxKNa91bxzzcSsaXSYhKny7EhgwBGQ13kpGisBPefxbxaJhnRceUp7rQR4A1KEe8WvQCZGhSHB",
  "key32": "2bJD8VJsB2BSMs81oeGA1miwNCtLnjeyKJniePCe9gqzxSjZhZ7yysV5oNctw9zjjNCR3GAqh19ugPwTg9Pp8V2U",
  "key33": "22D1qNXrVFAjjrHbyNpcGrLJaAfqbiuwaK5Z17BwhSizPKfTexK3C3udk757PAaghkP34CdPLRuRpJo6j7wAd6DC",
  "key34": "3CLS4fU5syPdvet5TWKLb8Px7PxzM6RgdmyWV6etp5ZBrDddxM8uzGmmSXzBjcWn4jYqe7qGBPS3j2nD3LgApbeC",
  "key35": "3vkXpKYxua1GAzoDcZzPj8DgFXqWyR6ARv6iuK1XPg3f6eCJztUxeHnTppBgWpn9G7kNn1myJMboXcwaDqyEUSsU",
  "key36": "4gHyNAe7YYVLakNafusQuXUVgKFEuUamgocxD5T4cS4RKyD6HdMC1JAheywENmkU4YWLvkgUHMpm18oqUqRBgUCf",
  "key37": "2Kh8iGse4MmSkpNm68BqAzQpU8PKUCDDrCQowwf7sTZdK4hezbe2BxPVVebyTXyR5AQn4MZ2YpAGDX6hrY7N7Zee",
  "key38": "2nFLG4PHd5pnxU4UNg9D5PevWfBs5vaRkjRFojBujf2hcb37EBH39xw8AyeqjbrzbNWik5B17Bp4GfQK9srsbBGY",
  "key39": "4whz7o3f8mFwzMbrgmbwci8E5WGHZiMXQGB5mY5a1yVJA5MQzh1mLbzc2bQHrrYPfVmREy3dRgZc5pHnubhQEiuK",
  "key40": "DVMZ36pdgbWuDZDF8mdY6CcXTGCebJx9pun6n2Qt3CqBR5YuU1PmeHRtn8z64kqXN8AVkFvcAQLR2LifibmNoS6",
  "key41": "pw6KL1NWgqcZzwT6Un6Gsg4NXABy6xeLzZewwmAcW2ixopqiuvpfYu3ehsjBTxyeXu7xR1xJPq43y5iptBdktzA",
  "key42": "2PMY276nsgQj8NxZ4XCSBM2NFxN43kYeZRgYXRGj91hvWc6yZpgFiw3PoPj5EvT4H9M5wCMpN65bC139G2kv1Um8",
  "key43": "64upmHFp5wbTdvayRmyPhNHwYe6kRfita52UgUrSZBDbASDVY8PSLzMC42GQvykSgBhKsfGhzxyTZvqTU5YReCmM",
  "key44": "31yMfXePvwihZ27ZUTSiLsh6yiuxjozo1JSiadMZrbhVDPxhL8WRw7x2JHirAmWMdrtFqsjo5cpPph9MzBFaPfBQ"
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
