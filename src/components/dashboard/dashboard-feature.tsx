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
    "3pAXSXXR4fSoaMEeBbNsPGpgY8LFq4b5M5zMyYbmy1VNEMfJVQphjHPwpVgFJwK9Mwgk3o6pD4sQhfusqrHGwRHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPikrLNVv6Wr7yVdA2TBcPYtpdwRNoaPoo5yuFfD9YidbDDWGfdZ175yh33Dxw8dPb9pr6MoLVY5m2kmdwNzqTV",
  "key1": "3BUocdcuxuzYVNwuhFppYuPK8zNUMsfrp9vejcrKDqbTUvCM3Ukrrn2iYFgQCqCs37tSeq3GswajcnRPLfChsyJU",
  "key2": "4p1LvpPyh2BA1yHKZzecAHsNo5KizxboCRqqmFfR6dS8qvJwZdi7vDw7cBUdkudddJEwWZBxZLuUbXwZNtEEgBDZ",
  "key3": "2UuzJh2Scp3Noa5dm6wSm8AjaPoEAXrq4rCfGc73BonL4VSxTP3Wm5nQaurTo4kGfDrccDfgL5CMs8DTRm3e3NJW",
  "key4": "5X2RTPbQEuu1k3NhGvMwmwXNYiL2kjy7UV5eQ3Dc3wEfis8oBmfg1dAd2GMWWi1cboN7fD2HLxpoy3ns2jcfvfrN",
  "key5": "4VjYMarVoV1S6PqTsu5czjRwsqh1fMYMvEzyqxLSJEBYYYjgtRhjq8Ugjg9YBLg1RaMVJ5qoTB6bVeHjCTGpPCD",
  "key6": "2RxZEEXk8m7LrrwGRLUcVhSpjRyV3ZqxkQjewRiRwU7qR5pwZNHECCcQAqxaPZ9rLmUANUNyqrM6YVz1bMk7SST",
  "key7": "2LVpR4mBZM4K1fWixpkqMtkBR1Vf7mRbHndWHcbAkjSvFMD78jUhUeZr6n4yev8CYabYJowRMC2DtNe2HGBGdva5",
  "key8": "3JjXssZr78mFqUwzRXvx6HPjAarpATtidpmMZzXyhipKCmEB97wCux2LAc6GQ4kcVWBvuGNSDK88FLeHGQcBZo2B",
  "key9": "4mmPRFhpeUSPuFkMJZcAyDf2Mt9Yyw5Nq31bgFvZ6Y7F9LNU6Tq7SSHkFKwQRXeDKQPeDY4YoydLcLjN4McFCtEE",
  "key10": "WumK2UtLSQLGBxp5QHWL3yDXYzcfn7cXsppzTtFARAQBUERVGszQPPfozPbENBnPZuP2cx2GSRif6u2E6yZ3zGt",
  "key11": "2Rrw5gyH8sJPNo4LuXdpG2gVqXgHonwRCBEEpYgGLGxoGEKmtV6JLRZk8qbkQQRrTPRVz8JxVkBnAHpAsiQMbiBb",
  "key12": "4wLM7oszzqYH6JBMCLSAHJdbbpNZE8waoEREMx4VjBwQkG9L1AdSRN7aLVSbVEnKjh5BwzX8NzReLpwZ85FFjK2A",
  "key13": "32YLrisCRCGGpQofSQwJWA1zQvL2Erhy76MPiZ1nsnDVeyqTZAQAcp1BoW31WMTuJdPRvALHbJqS8m19PkQgSrGi",
  "key14": "4jmhrg6AKPupL7ThTb4G4KBwPZMa1A37VvKTiLnTyvc17CQgmQpcbMFbYqbBcJgrA5Z3Y3jjecgNLoeBehzVRyYf",
  "key15": "2YyPMiLHK4Vvh1mnHYXPdsQZbWc6omyexNFhw2F6JJ7wWcVecRUrFX8GxPUFpYp5LaC11k4KpA9GxLtBDM3BdLwf",
  "key16": "5euYPaohefavwQbvGs42TNyuH6NN8aEbXsNzY56aTq2ezNd9zoCJqxTGoZQoM49g3G4JJ4ErMpfUKycNZVKRM45",
  "key17": "4ShZNdLLTcZWTbcHRnKgbAjaT2pP1RxtaWrhGTF4VZB9UCkpqsctqJCBCQTRQ6PqdG53wLHtG9zYkuro1Q63YEbC",
  "key18": "4JV4jqpVynhbbw8k6r3QVjEfmortV1fQkuwNCeA8UeLUi5utU4poSUwuPfs8ZArFutZFMCPh7HprMusraWrhZG6u",
  "key19": "4wXFmTgC5NruyzouUisbkszK1Crrm5tFTRoqEfsZFU8i3NG2L6jsTGhh5amtuNtHQeCHWLqdhhqvBLgYfWGoWsET",
  "key20": "Cd6Kd7AvZggRwWdC1j2qmrMiU8PF5KaeraDdvTVter7UW47Wm6Pe7D6yU1T5kmhQtscvmvrMuKE8X9XLEFzPLkx",
  "key21": "5H352ujzAiNXVuGJKaPJ28uDLytpoG2Nf8yRowZN1U5czZR4YduhqMJ6KguUw8hxzP1uMCSDfcxULqBBds4uNMiP",
  "key22": "4zNP3d45z2xGriDXxK2HYiZgLyrzxGtAgqo3LgxtTfC2FW6F8SC5kpZUH7frBMRPyTcyc7N8dyyBHgLGVUWAoVdR",
  "key23": "5zkfeTJnCshxgyQMgCvFNJjQYTPBjK6FrY8tpRz5622wQLKTAdcJ5C7TVfATytG2gQgAKUS7XEbUUDjynBbbRz7D",
  "key24": "3FwECQoKxm6vkUxTaYoP2HLqDPxFY2mD37h54RrWeM3Eo3ppTbJY8VuNFWvAXPqwHZWx5uh2RgvfBCHjGairgCXS",
  "key25": "1SKjpPBAoqbQy79t2WeAvYMqZZTq9zJfnpSjgFF5nMdKZqVoWWJR8SFoVYKXydK6fBTcntgFk2x2haDH6rHxF6U",
  "key26": "4zB3gC2RMMzGNuJUyZi9noxQz4zXoBxhzaBiQpeCbzTNV8obbYjWkzGg9DEaUsairLpt2QqEHhJdSp2pX8v6fk3j",
  "key27": "4Y716e39W2B8DYz2ypmpK4x6UAmc8KGogw982D6VpGgzr5bKnzMPiYtfMTvfw4a4fNKHs4xtwg6791cNqwzSyWjr",
  "key28": "57xKeHMXwWzG8WxkCHd9vU1v9KGJE2GHMZBy7VF7efoRUkwm7zxMKYfXkZbeNdBwxqQNpwVNGAp7XByLiu3xG9BH",
  "key29": "5bikFSGUSPxAoSVryS3vB5nxuibVHt64UJaXmuuc8cQqMQKDd5XUhDrtbB8JjGkJQodGWMi5U41nxchnathZ1ueP",
  "key30": "34Rrwc24xcvBGQJLz71hx5grx4rH9eq9iBqHPnzTRH5wDXHwk8g36sKCLM5CdUp4GdBBuLUqQEiNJEoEgfb7XpxF",
  "key31": "2VReFZePT4oETTX1dpzj6MNPePoJNQzY4LTajoVGCDjJe3VgJVmAHvMqSrE4qqQ5H6Bo6GdGxbKH4QQnec8jzXm6",
  "key32": "36rKQFTUWy5Tc1EGbe7g79eE2SuqyBFXKANPkvgvfYvDPvFU2hv1r82r2ZUS9Am8z7Y4jGYBAa3unjsu3AtNmRhy",
  "key33": "2bXvuqbzSBWEwWcbkA74yNBWwbN4k5d2WQ9ad9YfVaXqwnNdQtbDr6dpLdFEVVmT2AReZj1STKXf3SRfZ7ztNx9Y",
  "key34": "5nidnfjRTNhefLM96NzU5JkvtsnB2kZ5S3yVJ6jnqB5ZycCA96NaWtgTDf7wdbqbqo4eCbph2m1sMYyoo3g4hsdJ",
  "key35": "5nJUYu9h2HSLGUQXbbEsAPyhyAPQxrmXp5NLp1L7iBgtz6PEYgiwZRspsHmwy98yc1Hb4oXZZtzYZu5XpF7e1qtj",
  "key36": "2gY9DiCGygjMssKWm7eTeJyFWCPfCbu4Vj5TjyurWqaLefrzvbcdRzDAUoqgF7tsULHqcSMjMmEGm7NMUcs18iTq",
  "key37": "2FeT4mDQvMpwZpiPAz7VYbbobERoJhAsWSEpG6FgzYn8UfPr8ahhbDg1xC6gCpyTNEM153PPixTnPUebUfUZX2u8"
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
