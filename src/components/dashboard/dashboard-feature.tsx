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
    "rRvwJBpgLzJ3nD7ojkEammn8xpymHYT97UTmN5TChaKvm3MiXiL5nyLprmmp9Wv1ML9ifV7eTTrpcpWWPM8Pj5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QFVRGGRiyMHXKThSXUA4YqbT9XR7KKTzk5UraRc3GrKiVbqWhVQE5mLAeTXqpTTVDPhy6jbSs2K2Pq5Cbk39Yk3",
  "key1": "3r52u6CoxCJjt1kD9giLgxhw3gN4CJxqohk4mTCq6NvLugjnP3nKUzSdfnbdT6HLyAzkqCbzzuGvoRR5gbfMB5xB",
  "key2": "4FNJH9DgRaxkj8S3aEwcK461Le3vDsB1DPTFj4mbe2ofipy7KTnZUdK61oBifFQqZwmH3zxgjpwMkGVmioDqyqk6",
  "key3": "uP7CAPavypTU9G458ZUJ9vP6akRgzcTQKfwF1Yep3eesDJ3s1eXyBq2wXy6EN2g8TYmkjwV1SymaRPrmLtQ4h8d",
  "key4": "35Sufj5Fo6VJHeqb4kAKyPnNCDkzf67m6BftVBT4ZSKtoxW5UvzoXeFPa4R2cbQELJJtbCn1nkRKU3QaTPx8Atgi",
  "key5": "4Z7kRk1UtTPrkVLhtFMbV6kmCg3hC8T99fjtRDBBiM5Zx4aJ9e2GzVyzirrsJuE98995KLqQfy73sBpmL5AwjeWw",
  "key6": "2cX4t3iZLXxZQUNThMWZ64BByyPiUrZom7EVM9QhtWpaVFR8kJ3zx3JUtL8zm4MMdKqpsDeJ2aiMr5LDpjB1NDkU",
  "key7": "2S64AmN9DppHr9m6UW9tjfrHYqyPPkuHMmA88VzSAj1zGKVZJWd8MUfDhTdCzkZ2WV8YrKxaWgE5suX2knbHCxd2",
  "key8": "2vmMAJeuBpyJwHQTENSMWNxP3RjkRNkPDiwwJBf15RVQjTzrZy9ECJqF6u5XqMyvijwTyu32ru6t1MV7AeUkYNfQ",
  "key9": "3FiPnRidBLvF4P5QTmgPGF7xQeuhr96uTCxeTZvCwAMrFzWurkf92BTbDsjg2S2NBbHNL5qZDKripTJ7myD5rskT",
  "key10": "3mTAofKwZrj5P5cKE3Jrfo21Ju2pHhMzecPHWEWptZ61u7eowtsCeMwmoZbFScDXgB3Wk49duvVuK54LGKSTzUTG",
  "key11": "64twFqtEzMvPDacQM9Zi3PrUguSiWjaUbk2PGRC94bRnre4UHaJ7WrDvbK2jtNgPvZWxLjJcBpnpSNxA2NiGDexV",
  "key12": "2F2H8FtnVQfDiSeVQ5Y6MW3QqEgZn4LScKwR2X85korVjrvM5tmsSx5pG1AC6My13dDmCYHeSoVE7zz59bMYJuzs",
  "key13": "44aBMx2KBSybWXVCS7HYh7jjTiL6zrmDP5E9PhdUKWcrJKmXmQVJCNujoQLf7rse4hCvhMRM3c5bijNu6KqdvS4a",
  "key14": "29d1xmcgpTRSZXtCSrf5JivnSm31AXCK2JDZj82rQF3yTu2LG13bJsLkSMcR71eVeyy8ETuVJKVRgn2A7SENHMKz",
  "key15": "2zCjQBFTdz4dzNa8jLLjcRCY5Wy3poXogEGuTae3pUaPLH8zCGUPeaNj4ggzpzCNrkvWq2egNCmsZ7gAx9pnTAFx",
  "key16": "62uEPypLhn6qevMWvwKJwmbSvme6vhdU2RdAVPEz25YN5Ph5renkzcEKBfsLbqtQpjHCS9eq7miDStzC9fARYdGK",
  "key17": "4B42KqzF1MpC9kQy1MbrrwS2s4QK4nQ4ckJgzxMc3YGW6ezHDeKuyNtuEKHVMg18k2vMzT8HNccqfV5eNrq3tXj",
  "key18": "4Rm4uoVVupSYBJ5c5uGTBer7AMGzJAL1thm93DarbwnRD472g8ix6Ff5MwFksReaRqjhZ8Hw8EQqeZhC63rvgbKd",
  "key19": "4jFY9PBx5z1H15EhKYrWvMzR4QnA9pJgbArYJJJjpqUD9SLZDNaoGmbykjjdBdDbTAV6U3dbQPdkfGmLWHdj6yVp",
  "key20": "QS8j6eqEj3bYsDLKx1FG6VECpKKkBddDWAfrXSx5tsxxj8sQU5PR4cEgw4Dhq6tET1UtaTnYzVENjEdxv8ynXvN",
  "key21": "2EEA1XR2hStv2rQnNw9Kk32PzAUPDhdYQ37WHU8vd6Pn69RBpjum3EU6URJkZKan4Kx7pTt29qHpgHx5xkokrFYH",
  "key22": "5M8mR19QWeAtsmq51EyrX1uojrPiDWMfsY43JLYhNzY8F1UG6eWTbBdVqj7Tgb4TK27dLnLPj2Knvb8Rk9e1wXWN",
  "key23": "4B1C5QA5c1E69zwLf5Uw3L1zzwvwYfgzRMEVXqshhDZTjYQ8Le3MXw3dyzYxMAzzSKbQ2TeHNW3Ug76KGJRhFJqq",
  "key24": "FPeT6QEPP9dfGhTJkHhpj21NVYkrC9WyCb6jYRWCYyVCpuavxW7jyQUwLVDXDXaf5pE444sGsM7APu8RfE31wy2",
  "key25": "21Q8WqeNCMU6JyY46RZULRGQeTnZ5EbMY91Na8hVHcqbvMbbY9JbpjE2Mjso3Ab4vay6GDkyUhG7N1zqsKH8nr6y",
  "key26": "2xLanQKXfWEFVvW8tw64Ax5dVvyAtLpMTr2jruWMY9LG6porbxvT51B83RkNyCyvJTWQXSQcu9XKJdNXifXkovmW",
  "key27": "2XgbFwZnKv6uBYYrJyYHvGvJatRKVet3ottLfPJSei5wM5kdbSrhnJwR6Srmt8gCF33vEPQATbHtAEMz11E6G8sL",
  "key28": "63838Lyk9VbAsEXz7AinEWXdFMA3bXMtpWt5jUFyVvVi7RYXTUpJyiomyKKZP8LiuaEFd2CfG8FkzfQcjSgnCBL8",
  "key29": "2xMhtkGWTotWowuS8jsJnfyWfbakrAzN777VXadiitRGaEEQARgviwKaLmxUrCiSaJUxRmyvKLH5Zx5NY1vdPXBh",
  "key30": "5y42vvFKstBneiAd2xKbymzMmfwRJKaafL5S2TyiFNdbr42tKZU6g5zEea1KaPDovqyDsW13kK8ZRVmxwjD1cpgr",
  "key31": "59HUgbfj2mkHJ1ZeM3EsQrSZe744SvLmnq3HF4zC76Nqdz2pzYQGXsLanhzRxJsF3XgHxgMJ5NB4eUAFs8EPdwzt",
  "key32": "3YoT8hWoHgpbTs2Vk9hXvV85g5ARdKoMo5UK65uYbZX5QTTzVx229qnrByiKveyuuuMjH5szgwBvjfL6kkaSEXQZ"
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
