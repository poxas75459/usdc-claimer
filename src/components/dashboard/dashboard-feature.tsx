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
    "4JCkfcGyR4wL83VrUBFjwg4V6gzm6Jc8EW1dECTbeZLb6nuoWecxixXbxBdne1a5K5HrNNkFygfTEWPXfce91zZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fyYUk8rEBMdWczHhumciPFLFgv1K7YCpJWcPHwXX2TUD1xQb3mCmE6JC7sGC8Wz68djxRcNHktk2p3PCBZY5VF6",
  "key1": "3E9d6xF4KkXZaD7N92XefZEdXhiHzQQkeVC2FBQhCUxyQbRBYQ7xANzMXYTfsZkpMECz5XmMqqP5e1nrU5P3oTFj",
  "key2": "4FfcFbTkLqTBd3HkUi21tQLyR4hLn3swcMxPgEWP4Cz9LcdMBqsSsciazLYqTwgMJofMbJWUkFGA8PoA3cAYtyk6",
  "key3": "26QkwYXFnDtNgxZJgBXkJtxZKS1syTjNCZgWe6Hvh6RsNDyoWWnZ5QBS8E8FB8NonNgrx7KP1sU6fMbrc3yERQ74",
  "key4": "3pQzxQttHNwpQ7AbJ6M8YZRFqo16ENuq9sAsoYWgYNe8u16eiKQnTw5RBLoRkk3a7PDKMq8uhLU6mnw7sWSWjJ6g",
  "key5": "5e68B1jSK7wTH51aJhLzNy9a1tnt8SRuZgAyNqSSAU8g7KQaGjVFh2Xr6VUfRx8nD3FEVCmDJNq2cjF7ZAfLN2bP",
  "key6": "2j1k7gU7zVwfe8LnquxF6ByYWkeCU42ycvfTGaakPPqqgekqZZBMjCquecZ4aUm5p25MCFi2WPuUjLAtE8VDKyfR",
  "key7": "7cE41n3syTMM75Xvxnt5MZ65V26KPmgDVyr7gvnq8zgHcAYxysyGEYsKdSfouCJ3f98YcyeYEYJTfxoQEud6MZb",
  "key8": "3qp6pddPvLpgSEEicjCmzUDL2fnSdbK2P3QeYv7X6wBvTR9N9TyMVhbAbrN9j5PnZcBdiK99QxG4RYjMyhAwgLtE",
  "key9": "2EuQuotQNTXLrTyxG3uFoMmL7wHt9gp52SLy8nYPixSq5zDXF3t1aJPUVAqJpuKkkoMb9GSPM8EFqHYCgERGR1Rw",
  "key10": "4N1q5Q8cmKaqxtr16cKPTzMtzDqQJ2JJjmt8cmuAMCnpyJzq3JKVVV9urPV7kxkoGuEbQRRmCMMvMLqu3isUACh1",
  "key11": "2fcZcribTPe4sCrrA7pBC4G57ccXTA8HziBcnwFLbxdqmWpBJGPcf5SWfP4eYj1i5SwGgFKFvbG7yisv2yoG2GGy",
  "key12": "5jrNLQsd7vcyCwZ7rU2J75HX6E1VdH6pom2t2mPPPTJH1pweh2b49F5tmGpJ2WRBQdFdaraDaRRhayWHooCCKger",
  "key13": "3FrAxm3QBdb9XjoNyTpaK43fJGyPFgMmNxWEZaa8HPkakADjLKmXs9Zp2Yj2fCzQWq9yPoQUYC9MKwAtRuqPgWh9",
  "key14": "2VZcX7JoJ217enP6SjBFKRL4ByxaHUsAdpqyLjVT28NxXZ2NYDGRun2EECvfge2j2eP9a6co3JW5rcVNEAafRbjT",
  "key15": "5tdM8Lzi129PV1JVHwgVhfWNY99W9JFXb5nwW6P5HzMAQUtJnUQjLKX3ytafH3zETNtQjuXoNQuPVyoRJXdUzJCA",
  "key16": "66zg4BsdcVsrHaqxZ8gAj7vAJhLmH3JmkHBn2SG33sGmANttc78MTdAYxFeMYd5K9UsKvN3cke1WL4zxMaCCbHfA",
  "key17": "qp3FKX8NW8NURksRrsV1L46NtWdsAocPJa68ruTCyPxXQEbxW2VE9uKRfEnGR9prCd95NmDsSS4pjDv33Kob6LW",
  "key18": "26yWNvLpbstsGF2oq5BumpFHikCBkAqYdsQZJrXwDMv8mYocFsqpg87pq8dVK1qFu8FX4ZecKEQpCV1kD3RAkfxc",
  "key19": "4JG7wNgihySiMBqxAa4745Uo4BWwxdejcejH43YCjdgySJTdt8xx6PUNJDCKZdNE7gAFJUZdvTQYNmbqzunDtZWR",
  "key20": "3Hz5NoPVjq6TeLZg1q3fbtUzfVzQirVff88L1y5DMhmhiJh4ePyTZp1xD6bSCrE5epJf59q1Ame7z5uvnAMdBS9n",
  "key21": "2h58UW26CWCsGcZFt9Zh6a7aGsbhjsmbxwYYEzXJLUcTKk1jtVqL2sAaFWn6663YfBjz8kdGdBMbZDD8Vzzcey8L",
  "key22": "38uzv6raKZNGYyiyXdN8AF52PFMy2DJMA9yFntqSKvWyPJr4MFZCNYvHww9ydsT29f8rSAjSTfD1auMEHcDu7j8x",
  "key23": "4UVKTdLeiMHsTrvLqdTuyChPCtjcc12dQ6eJyjhXeKW5wQJozLhNUQCZWU7spb5w7braHAXzdUvXUbA49mKKrAYC",
  "key24": "128n9jHCBcXBAgVxYmCEchxTfBSMDmPZtwufBqFcx6e2m33xPmH4NBCGLHHNrgaHbvBQcW57N7pL9pcGC2yUEEp8",
  "key25": "2DA1yD5tfvHZ9VHK4UzzG9us61nrCDPnUpwJsb48CjQubNhonFbRXccKY5kac913aeA1v3uQbHE2UEsmktKgXKru",
  "key26": "2iHhVdrjvj1wsExSES14XRZpccbJUYtAb6mNnL5pMgF25YhrHEfCT5ZubP1K48cpuYbHv9xsrDYe81UdQmLGy8LA",
  "key27": "3D5GuHB6fCc6f8YnpkhGu4k1jX2MhEu141oJ41W6sdof9Ypu7V38N5AgeKoeYAJyGUvVTuJ4NSbpw5SjzWES6BMi",
  "key28": "3r5zhZmnhALjri6CBAcskakyPbigYRfzHMGBijH7t9rqVf5NhdB71p1QXrA3GfV5wsQUnTj2yEUnkjzPRkCwzpx1",
  "key29": "2j4G8ctXpcCZsdz6DGAbqjYQm7EWuXvspnL1v51g8TfJEafR6xRaTLnMLg7aDSXMWZPvq3vNchyvrBpEd8ycD7mw",
  "key30": "21NGhUmjRjziVFrqVKm1WmGBMwMAvDmYXG5LHCZ4sQ2n3PVhTpb95ofAgvbaHRuRFfsZMdttuptwKBf9cy1SV7Qk"
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
