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
    "owKWxBsAp8D2jeDtd4PdUy6UBSr8urm1U91wNxSKsiUszGQZVBzg4XpusaE2wPaKpT5YachnHLhJgCJe8yseis6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyCdwVJp2KRsLodbDK8jJKSchUJ6UJQjdy1LXbGYb8pnUaRuyfyTyhPBziyaE7mukSsDVfsWhWXXuATL8Q96ywi",
  "key1": "657nWon1kAmXRU7PjT6pVm1T6i88G1QtCB8gVMnaPLzgC9MvrGBPAwNnQgUeXZBh6mtAkG1VhJqLdFCbUAFeB7nx",
  "key2": "5AdLHXJwFhKu5rRZpNjyjmUEGuaCTzSHGKr6Rz7dcvETWJrGwwEanpwYyWwqNHuMZ5xM6Gc87zzSoSDqMJyBbMd2",
  "key3": "VKQEzc7J5Zf9tK1GKizA16c7FWRM7LijPkXMhtJt9hbvEadff7zcN6LsGjgqK6bGmrck2RQ31RxLgRcrKGfzbXa",
  "key4": "5Yn9JGE1HzYeiNf9tVndn8RJWvS6vWAwJqf5oT7pbK296vZp4WE5HYZGijEWCQW9i7NpmfzVE2tKApCgCCSF161s",
  "key5": "5Cssbvz81STATZv1C7DPQBoBQTDNW4ruAppEskbLHakEa9yAAaBoVZnWWL31SUoy3km4DhUF7qpzrkokSGrtu1UB",
  "key6": "3DZxkpX6EQnnpfeQmKAU1nBUMV6xtqgmS1MiDTFDywJQLWfycrjJF7nFw91JYEy76kUP8Tru8YtKBbGSphDGybpe",
  "key7": "23MoqvS3LJ8CaxknYEMpj6aAnCdjJbTEB52GSo16Ru3rBrR9mrUabch9ucuHRjxzmApoYDmyswUhJ6E8jc76vbMH",
  "key8": "4iLQ5maU86WY7oAg9SDyBRm1b11BHd8wzAiTG4pZtzUSH7gPUCucdT9Xw29QbdJy23qCjHS8WzCEeS3CvHzPrrqS",
  "key9": "5fDpEQKxz5HrLJfR9dpEmqQnGYpbLQEFadL8RGDhkYg6RRf3vr6Y8PgL56sr6M4BRUcNSHZM5SxgFC98zQqLzihF",
  "key10": "D9RZHF2N199rsGAhb3yDyw2hoJam5Q2z5Tn2x35uWLksc8XpG9AdXwktCxvSJKLqspL1j4zTUYJEuvozr87rD1a",
  "key11": "3vYRzv3GiCoskXGsapm8vDq5Nbps6sZVmUx2fH8furzqKz5m2oNuegybCvQ4Rqo7Ykeisdj8AM43zoCH1fBGAQda",
  "key12": "5T8riYEnrzhk66pUfUQxG3j4fpb2vi6feiLKymWygkFUPhqVwfY5zRmFEP1pR4swN946KbBv3w31QpDqXkgB5KfZ",
  "key13": "33HPXdMLrM8R5ToaovbX7mdmArP5yKyWQvJrANa2HKSw8YRkiqnin79h3wzQEtAort17FGjdLwEcBCjUpaBdjJxd",
  "key14": "5TopH4iAW6rGNZPxbfjFdsM6JRM1B8weZq4wPhxS6TMge47TxchgvmKNjYtBpbaRDMAyEk2AWJxr4CayTknGAS26",
  "key15": "2GigSaYQ7qVmyyVyyTuQQNHZrA98h8ZCrp2X1sHv5FSxn8Z6yoAtycWJwBs7irEKFXBi71qsXR1Q12LHo4q9EyJG",
  "key16": "2zztsmN5EvoBUFJXCgyJJTbxuW9DJrH9ShdMbW6SEZ7G8vtoRhS4KktFXj9hirCX2AY5E8bGv79mYQYgWVykXtmP",
  "key17": "4ZfiYRTJsReiQfR7gFGLtmn9fYhgrEXHBHp6ArtopERK3Zhr3a3695fWbZdEJCmqyEAEyAiA72MMvvrPTeLmpFzZ",
  "key18": "5jwYGPRMGpFoN6DuoWGJr6xUhaPYJisPD2X3TCq5bXXMfNUZmnQC3Jnhk5GkGoDjKJdZk2R8AnSXhFHqTB73n17Z",
  "key19": "5q7Q3vPL2romrHuJ5hFRhBfyiyDjAo239neTGuNsSimJDgsTMhf76EVNLhe7X2Zrd2XrUgs22HBcvHjYzHVGMCV",
  "key20": "2FRptVUbbkWF9zkSVF4GhDWAEs2KtYhSjfAs28oSGN1gBb6ijgHkeBu8aCZ5PMy1azP4dM6Y5EuBdAT8pNf2vAhr",
  "key21": "Y5HmDqQmfTVV72GJ7GCGphf4tsBFZqLqNwrYVxNEYdrCEsoiY1AspfzKKujRfErkJt9YhrNNLdVZUvZihqppj2E",
  "key22": "29eeXrsupjw3fVWxp7k7DoKCSNkpDxakSJjvvHEvJcNCdVi8L4M4kMJUDVXuX5J41wkRFgtUutg5mZNTnYsea2uG",
  "key23": "2dRD1RbECM75J3kAS7EA7V8GknYpr8KdzFzXXht6n8jJ9Df6Va3QtBe5Fnw6YEktpZLidNmShEXMuw6wWHNa6Qhb",
  "key24": "UcG4YqE1LKCw7ZvzcgZhePiqvGZAkKjzPwWzoLaUqqZzKqRSdboKj2qkrH2XsTh2XsQdaeZppEPZUT3k8fRZpjG",
  "key25": "45Nw7uig66p4XoHVFdgfWhh1L2Rrxz5YCo6zZP47N2DmzfNuwN4PTG5aQSQewxNwWsmtyLDkevATYkDreoUvc4Q7",
  "key26": "uRU2eB5gM6Pfjs33uShmzyFrEVeB9em49aYPbPv2qpEoezAQfNRK4nnFcFRtY2ecyp8nXEYSAfBGmL3rNPhDPJv",
  "key27": "5WvfvKH7c2k8yYR1n79tR4pPgdmexo7PUViFeNUxJbfLXgUqJPDUtpGQsqAd7KCYVDfcvMcJyMUftnrKaLz41PXE",
  "key28": "3tUbe7td5Pdg3oCfBTwK3KYYFzA7C5TCmAWg8jQD9R5aSEGxdWh5seeNKWXtE4PYvDjQBDrkWG8RETz2F7jMvNZr",
  "key29": "pontZZV16DJ1TqXJY8jWfVmDjVfQuktWoSqHUD9hHGTQFvpu48bTFdLwPUrbz4J4ZkgxxCG7iUGKMFiNkmidtbW"
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
