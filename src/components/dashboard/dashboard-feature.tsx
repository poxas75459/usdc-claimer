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
    "2TmNrYNTpwFRiWmAATXYCrnKHomZgJp3Z5QFheZJv8rP19oQdc8bKyLi9mnW2bN65W8TCt7YmRt1wCNa5wnDAS5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J8AeT7PBYFAhbC7RjCUPuAbsnjE3mKDg7dyHH8yDZS12ujgF92CNtqTFLyahU98QuaC6ZNoJorXhsRvVzN8A29V",
  "key1": "5SPirMxyM8Ci5zcVBrJszAjMacAT6th8LQEZ734KahAHdL4RAeHjv8TbZU6P8xxmct7PABKQ79B2sJ9vSK1zXXAE",
  "key2": "4xnoDLxBXjXdqwDZfVf3iYmyb9zAYm77yL5UzngvP6YJT8SmrVnZEMhJ1Gf2TsKrCRQgy3gXUqWDdhko1GN37RtB",
  "key3": "5SbpkLCFyqh3r9BuJ6iKLxEehPr4s3gBGptvHs1ntyL7SVq73EZkqETtCa63XPdp9gse8DkdhHqD5AKsVd3p9jkv",
  "key4": "4KwAbGifUu1DyTiC1QTknTkYrCV9bmdu3GQQanFBpWyJBVt26Ne3eTUE12jLAcZzLytApiUs4fRPRFEeL8vjrbUf",
  "key5": "Cn75VkLrpkzQSSGEgqG8uTJ1sb2txEBekQrZmcNmq91LYeeWKnaLZvwWh4oewnvzk8q5imr46pDodQtEwZPEraL",
  "key6": "4USnNZV5TFzMXbBfmgqGBrHcd4H4pVmGkL7AHFsiAZiCEekM2Y71oL9ajoGJuMjBxikcqBHhVuccfZqafLSmE7vp",
  "key7": "5XnoXhzMCUaDXVrPs7oGf33kqzpk145Ay1wp7fPwZFqCeTHT7ccnp3CuDX2es4cJSicCvF2worpbHv5m6D8sdF1G",
  "key8": "4k8UydpyzfJWUc7uHiGDsd6Z5jUx2FJxjZpaVZ8FDufAuXAXU11KQj97EPKzoWSRsNvEMSJJokdD7eN1xUZeudWL",
  "key9": "5XgJLNwQvoiCQyEJgSkTGnruyavUEvtrXyjcVnXthTvT6axxQisGxMGDugGjfHGHKJP9LeJs27YruNpB64zGABfr",
  "key10": "5eSuNZdfF1Fzf4kjEZ7Vx6jd3jzFaycQdW7F7dNLrnQMX6xFbwco2HfavNrKZn3ESmm4cYHpuqUiSsgdgnbnKxVy",
  "key11": "2u27aNfwag1q2gkNHjmE27Nod3dR4D7sk5wCSWdhNc73AWHDtrxDmMoCzUWoPehBQMqS3xvdagEGXjKkHQzT45Vx",
  "key12": "JH95eUSPZDCj3i2D5cf5zNcmGwJzLnVe4JjTsQfX12zzzBVD6d7vh16ZEXqxJRP38Xi9BAGDkDqPaiBCfNCsDse",
  "key13": "4T9UXeF2hq8NKTK78w7wHGo9v26ysBJUah6QVZtjTEyXAAjGDg4WsSEJE48vdao21hZtjUxRwTjvTAwShUwRTNrC",
  "key14": "3e5VQVXH7VB1c6CJ9825H8p2NWp7yFya5FXecLT8kxv4ds4m112MczfPPoJkWCxKChXLRt7oDmsk58bzohb4LP1V",
  "key15": "YsneQGbtXxaGSsyXb7kQfb8KfyTGVsfXo7T3q1jDWwggjbU71VgsSajXtc3Dez9CoBY8WoAY1Hcj1Ra2FesYdsn",
  "key16": "MEQyKvXL8rdF3Ls8bfPMmzEtn53ZQpELGHhKYPckYLJWre7RBrQSSBwECjGVsMcxN1Srio8fXPyvEb1aGF5gq4N",
  "key17": "2zw6bUrftdNZjXeVK2UuD919EFbuAFMF3yPDTscDr8xgitdTwVivSgfPnK9HUS2CDuBPdZJJq9Fgpy5LDcGMYM9N",
  "key18": "5eaQKUaUdaep7gJcSd88rpLaHqPHnBAj6mB333K9TkbSHS4XmSwkGRBudJF6zAQJASegF1ND31KADA46axkssY7X",
  "key19": "4JM1toBPyFGrSbBgVJAAxGNbzg7VHmb7XoKZn2y7o3UufuHhXN7KfsA3NqvFq5t3wCWhupqs7LRvFRYippxnFb9k",
  "key20": "2RjdbfXfi8GK4oXrXsNVnB1YWYNzYyKo4jkn7okW1bQBFjJJXRsmPwPRqSnKMpwS9GxMhXj32SXuoR5Uuetc1VSq",
  "key21": "SpSAQBsQDEGm4WR7mWEwKr7EnZoVv35PFxzijUWy4rG4z8awxYCAMDRMHqp6fuKo9PzxDX9zZCWunuDMiGuSADY",
  "key22": "3T11Cri9XYyUTqWAYHnqqDWh4jkvxEThSTiQgT4yaHaSwaZr3VpGPXiWyD1tVPBZvNJjfJ5rfMTwPkPztTz7eJqS",
  "key23": "23wgf6bmzr3PUyR4CQNkmhxEpFdZToCEGpECTKNxbfoZijf7St9xErRDY8NskDg9F5KXZUBapomuAStGBAnr7Ptb",
  "key24": "4rSYShDacVwN6qW9y9znoHUfA2JooPQgfEji7cHubSborv2VJFk6AA2dJaKEbGgKP1pWyy5zwTYkr4QPa1pSCBN4",
  "key25": "3SnPuk9tTUC97WwuwfchkeBsJBYk631XUZ713DkbUYUVBN4DpsTrEtuvdCoH37tWVxYG1sXx2iy5pULxbsNkigSL",
  "key26": "ya5bdbseWMd1SNt5EE68f5gFP3F8Gup4YQus1MBsySKWbSvEa7Gfni2yqxYC72wJfe796k7JaG6hxYCBfALaovB",
  "key27": "5Jz5iRg76QeFf6E88CdaL37zeMJr6EqQP4iFBUW78m8RMmfuTrWkKXP5VaV7U8w3wzDujvTq7eErDoyjJUchHqkD",
  "key28": "3J9MAup7CfSGAgXPcMqBnZUe6XjSRgBffN7CwZpEi7FneBn39HRcGQxqzyiAHvbEVTJHCUqP5AC1fiLnnvjRN38Y",
  "key29": "42QEQJBdLVt4NCDJKjmmK9kviQpbN2xqLEzT6PLSQe69nAU1jNDan9rhTeBDMihJE7keQFpmCoM2PArVtTimb6Dd",
  "key30": "3gfnaiYhoMh1ezcdaNqiGKn4aSPaEES5zGPd4Xx1KQf54iC4M9QD58tLJCejVHRcGh4XPkgwLJjozU6cG244LD8o",
  "key31": "3HFbH5uPE2YxTUwMZAoCWSVpeSnVUiAZp3vN5w2kAWLdodbXDtPmz77DNi61jp2hWBkZv71fpiSWnUHptZc5mXas",
  "key32": "2zuWAb56ap5bSypsXU3nzMGngwvn1EQxAcsbCFr14GjnQ4equtoREzcWPc3A7ssLTVDQkt23U3euQqU5x5dyJA4Q",
  "key33": "34p1LH1s7vP8Hqt9vKo6dtDMEXTg6kwRans6Vr7dCHt2MqG8yrZy58SkiEsdhYjrmXsJq6tTT6dYNsmYBR1z4Rus"
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
