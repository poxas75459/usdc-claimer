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
    "3wdhQAbDZewSyTaiPywvb62xCt6eFsnBJh9ahvGRXh8jV5Cfg32uKaFS2nwVZriJFtDUyXBCnasXNmFuYiE2vvS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgHYPxmNL7n1YQ4pZGo4kCpZJ8tGrw2JBsMgT6THeFdzuVC9JxsAy1QTXMjxgrX14FaqGCd86oUNWcnikwZPJXs",
  "key1": "28YrmmYYq72cVp1RHzXRuGqe1hbpDu6JTCoyHuJvbmZU9kWWAmGaWZDY9mUCRdy7N1rsaSZxpHD61ti931D8yqMd",
  "key2": "2iY5RPuw9gyCgGpffwYNBroJT3yBU3TRKkXPxpLjNdCAe9btHGApzRtiswEdP6Z4dZzH4ZYKevwobaAhFHMAZ4qb",
  "key3": "5ZcFXpnUN6fbFcZM5XvsiabEvwVvPjwFMajyHBqzuHH7Bqps2TAmaCD7fhW3aVutENGDrqSNvk9ur1ksUK9xeyEX",
  "key4": "22W4AYLAdBphqrJu7gswDHSCKSmTEzN8B9nsRvqet9ZDzFxdwMkjQ7HNgCeC9cC52fQbndt7bmzMZxXZMGKqidTk",
  "key5": "fxEojeDP2o3u1V8qbxMT1dkSpnKeCCNXaaugokuE1AVpTcjcb7y6YRqE3uh51Vbpnuxkn9LfBqdJyHRKmn6TNtw",
  "key6": "4gWKFCKVs9nMckoSe7p8W2jqP7hnN6Caz1GmkshMUru9r5ANqjxALby7yRyZYWcBCbi4iGYJAdxA6gqNL3jPxABz",
  "key7": "Dz5WmGPM9ax9CvbX8dAR7uFGyLbyFeHMxhVRLHEtzXFL1sqtSheXcq8JxR4mV5ieHiRRCBDZF5JbX9hkYawYueo",
  "key8": "5PzPcVFR9L81axvWVhJiLTQUoyvjTzTvmbn1Pj5hZVfXvactcsFeDDc34QUZRyFEXE1FymuAHLb2pgFN2SdHGmSE",
  "key9": "dRDnqUXwdzTu43EKSukDpaszw4DVmdCZa19vKsDkENm2fUNBLBR8STi93WqtdTF96JJ3H6NDPyffGVKBjdnBamP",
  "key10": "nz3eR9QdEg7aTGyvcjAMorgEKPDVZYh47xs1kpkxMZcuT3hUeQJyw2aVLsDYxZ38zFzPUt5Trz2QBQMgtjSetxB",
  "key11": "9osCDheHz7HKrHijiJ6zbbmXfnADpnuK8wskzbB8ztRWYBeUdNG6dZR24Ur7S9hVBFsPyBoMwvt3a4ZCHWQBKYR",
  "key12": "3VpCuzcCJ9pADYiYTaJu11kBYZghjtqyV48vo3ajth1vdBwamHUSvKoEaSpyMHW2YkSE223j6xvEdmnHxgeJ8ivN",
  "key13": "uUadPztrbM6FnwJRxAzd7nRX7T1So9DX1HCHtmo8xzH1hBVRXHVSTYMoJUiW7LRCztp1xhXdAGhNMMepAfKCM2s",
  "key14": "4idhbdaFXKyvWWTeckzMuWx8GngKv74meNdqXTHvubD8fbrmuHrMUy5EmF3BStRrcLQp48DLgwc2SXxocTGFqL19",
  "key15": "aF7Mvb4zraz3ompsoWY7mpLWWvc1o9KVNBXTfBEm3TZd6Z47nb19KQpw7Aw9R8x9BqXWCbTRTQdZkwBvS2Ygy5Z",
  "key16": "iccqAbRhaMknGTSP63DrmddHP1jkWzXsQcMEqAoXDUGpcW9XB4sPPwCTP3VowFHXjBCzWQgEkkrHJBsziNHuqxs",
  "key17": "4fKWZU3Ac5KapZuybWY8REeSKEWxqkpzqq4WvkQnU7w1hf6enNsJNmTM8hAp16bwNeg52h5MCTmzuwpgzrfQ9Ckp",
  "key18": "4SyEhEp8nWp4BiesKSPUQAixQXhM2JJLrcBpw2hcMSUWRmoGfvJ8FCraRZrXD6uMSGBZV5WgRcrkZK3mgM2fBcE4",
  "key19": "5P4TJkVJRLbvw6jnHbEsFWiKEjFiGgBFTQzqnx3kxh6BK8C98hLpokksv6VbX7qDh2ssr1fTw1SsBRXrQ3vP524a",
  "key20": "2MPoJQvLrYXQ5ej8CW1y4A4dzqWZoDwQ4vczmhwgxeJhw6QtAcwHo2ztxk67gVy6vzExd9sDaFWKuJ8XAz1JAJmU",
  "key21": "3A79JuKS5prmHBWXS8j3wod6EyrAR2DSePPiRRe25AQo3c6e72A4TfTkJ59CVbN1SDpFVqAWHZRaaMpurU7HHDVP",
  "key22": "km2G4azxpg734RbLYmDGoz8znwtFCMtxsQyJoiw6u3mWEUyME2k7h6u9eAHGiq54JAutVD9JSR34mbG5tNVXps1",
  "key23": "4Gb3AfUHX78dmrU9SyWqEkfB6AfhU4GhNXh7hsDYQWpMk7kH8j7ce6rM74PGm3eKKrnNy5WUvBU1ca9Zyw9Z89TP",
  "key24": "5haucR9BYGCMVxefaBRx1qcALxiK1KtLJJuNo59pmQJm3Uzw18dPLGS1MXho7srLybpq8v3aHFZAV4jWuWMs59gC",
  "key25": "3puWyDrZSWbSKMfj83ztqBVEekrM56omSK6WHbrihZ1vt2YGy8qwL44in57UVcV5BCtQTUcg9mSgqn3DqWDEFxV2",
  "key26": "t9JnCHwo1aUVgAmmXTTPzvPLcwWM1a9oqFmJkvZ2zQFoF647Lfm28SuJkjgDJXPNUjHg8aKPrUPBW9jj742v7GW",
  "key27": "4V8vAC6jeFpGE7KopDHJk7MwigBGtV6mvmFebv8HpC3mabNF7vPjAVKrdLh2efpTGjKabACnHcBcfYUyoHq3CV8w",
  "key28": "2jUcAGTE8Qdmza5LX8LZFTF95t4kPfLkt332e7a25ULcuRRi9D8NeyxWYAMMyNzqxtMgQ5wT6H6seYiqKNHU67we"
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
