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
    "5YyPUzSRXi9tSg5CrwELv5CZ9hr7HBFyDNEGrPBNfpX3z5SRKkek4vgKiGKfaUiMoWBoyUKu1jkR8ypt53aqVvkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U3MM4NS2yCstcj7EKmEjiRTGEioDiZ191uK7vPigm8BcnZNLbohTPxBLiRpSCXKURHkXAnq4sSo5U9hH2sG5FuZ",
  "key1": "4MNHGZq7Z2HQ9MwTd7ckBbs1fDftYaYAztkBrKzfLMcxt65yBVKHE2dLvFyBujwXgW3KzyxyxZrqxrWVf6HoU7tt",
  "key2": "4hP4uRYNLqGFwizvgpLin4NK5apDX6hcJVtWgNCFGgSosNQKLP3piTPEq7TfcM1fTXk4YzwmcwaBAzWcEgmiy79Y",
  "key3": "4ecWSjasjg3Zxu65i9dkVhFow79LwTBF6sLN9wbcps6gr5VnpLwjVjxzFBSBQPi1gs8En1qYzvELi5oWnGbZyiXG",
  "key4": "VxtkHd6p3hVNJpJVMRpLGNkqF35r7JBihhn6Pq8vmR2hgv8YY7gkNw2DjoFYcu3jiESDw2JWdjVp2Pqdza5RN7N",
  "key5": "3PtmdPyjKGJLB5UmVr3ETGCvKqEMzAomKrXKg6txZUVsgBcKcJj7LuNN1VwAfCvYUv9RwrcrRmXCXkuLFZ7UJ7zx",
  "key6": "5AsndwwGobVLMF1gHVbrovSBapmD8WAYzC2Wg9qcx9CLPj7JP63fpDRp3WMKQcXhufm36xAoLBYq9W7fKJqDCNfi",
  "key7": "5VKavkNz3dim5j1TJrkTqrKKm33VcN8sTQCr2aasBJNSCqaDqmrKaCMf33iPYJV4FWS9xdyFJXQELp6bVfkREbNP",
  "key8": "2DnF7Qw5kLsNbk7tdnwPdq623yCucN2gtYTPbV55upUehcyYkNgpWNip4sq5syqMZ8uhu54wkqZHnbuW5gPQtAaw",
  "key9": "3TZaNTNA77rCLGGLsp36fS2LzqAPCkswQNGSKeGrGo9yM9spTD1zfKX4sbGxF2UP4P7NNKmmb7zXznEi1gAtEP9",
  "key10": "5ixnvhwwK8MMtR7tB6Y2aKDvUEajmawerkkawrmpVp3UbKhdqYfioXVrbyDfYzpSoTBaoCnmMnUFrN5Ez8AiGa7G",
  "key11": "64QFFyjVfmpAecnJvBKpb7VeEUxcHCsnf6HreB9sE1ewtNybJSERnahWJR4NzKKj7eeWquJWkdUjSWQ5ccaq1nSF",
  "key12": "XpGf4guJAJ62S3yfWikRZGWgJytbGhJiuNr8QNEMBohPygcFFj6HHuhSaPoNWCejhZhgHpnvNtCRip36xh4de8A",
  "key13": "fCJQ77MSDwEDXS3KMEBuorsgPP5mnCGBH3xEpAKB5PitFf5qw4aGbjhyg5EwcMrm34u6eYHdRsP9D9t6NhT8FB1",
  "key14": "5MLvEpbk7YT7UJwF79wAeNmbdkrqT3vftUKRzSxjXTUNBbobWUd8G1B1BYCwYiTz55FmjUtaU6SPZ8JheoCFoZXw",
  "key15": "CAApCxZXyP4G7Kii1gkbkSAQtBN3sZAAKqFkvQ6hkoPDe2s6VYgKrrcaVeD6avVADk13MUpv1Ja7M7TT6GhEniX",
  "key16": "2J59uW9ocL1w8a1nodeoWxqEu3akG3mada2d54eC62S6irYHWYXpogZ8pfx9uJ3zmKtCu8TJTmZo4zCY7VYzZ1eR",
  "key17": "3FvxK2a487VyNqrugJMt83qUmcnABnyNgXHVe7pJvSpi77SyeLeGf5f8Kjmi1KnbY6nq8UC6ghKKc6QgYVviqWXz",
  "key18": "5zMuL16KjAtkUZKt8EAPYXDz5GeTdAmBpxUCwmRRm3g4383QnjofZsFAc4kY3Gd7Fkha9zf25xr9DNDeg6Tesaom",
  "key19": "2uJCBoJbm9m1QsWTLhr4yNMKG78U1DQatKVsRTa3VH1oC2TjuGeNhY1TA8gdQS1zikEmm9ZH3GpeGhDR2pEYG3B9",
  "key20": "pnxD3QdDTPnT8mFZWuykzHzo8Tzwm4k37MKjPJpn1Phc8Gj1AD51Xvd4BD53uGyvXSVkApKbqeerZbpEJokBxGU",
  "key21": "5GkJTGQp494s4AnqFYm7fF4rxoKw3L1GcQ3ytGuexJDi75MsLsp1bxCSfaSWoiUqQXPcpCoZd6gHbvPCPCd2DUBV",
  "key22": "2vZXPiF55RdppGPag9UQL1pkMWqW4inNcXZgHvKqV5PzP3B3L37z5fKbTBxk3hVTNCykbsM4yCbDZP819Qy78hAz",
  "key23": "oGNneLtoHrSuLvrGe8Tzo71u1HpeqeGcwwusbPPaZKLDjiu4CRtgJCoLH3J9SZgHuWALQK1Nv9py8cgAo9Qrt6b",
  "key24": "3wfojG8YYQqbNZ4dFM3MqWhgTwivY6coH8gG9yc9ktKuX5YEtAhozyTBeLFervS53fpFQRmnsYp4L6TBpGLYMbdN",
  "key25": "2DghX47pZDmdFDMhdkCZLiq271T5EWPMW7rv6cjGeHLrh12FNNkBtVA8ccs4z6MtoTqmBzEoP8CUHhSjAU2hyNNe",
  "key26": "4XWA1B7pUhRtCQJLAdFptJsbvyc5NgLunCEkuJUJXU3vsHmDDoKhdSgy3QjoujtscygzVApctVZc6vjLkVb7iAJp",
  "key27": "3vjZ17UNvveTE7FL4kawXMCrUK8ohxMRi2s1iEczMK3oqbd1t2VwzNX8AxFtuUiqc23EUYsTTjniefnRrecDHshj",
  "key28": "59dcGivy9p4htd8t56f3bZEDR861R6Vbof3aV1oapKP16rCMWMC1LdygHbZL1mSNh1MqvTMrSsDCEH63ivGTygrV"
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
