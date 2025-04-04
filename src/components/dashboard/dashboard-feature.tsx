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
    "3GSAAHhhT8Q9TArFfgr7cY14Y7zTd5bKqAnWgEkqUuBCfHjAwQT7dPWeP6PsLNYBqn2n1mKKTv7zhRvyb87djTrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyrPZy3cmx9LR2w42UCLURTWedD5ejgJKSMnc9wEpmsmEUogUacyikoYhH3YezqjjcvwUqzC5UfVzw7i1CFTMDG",
  "key1": "4VFXQF8zWX8xcbqC4KdJVF7XS7LSeiDegcucmpkS9ZrUXfsNAgnKekz3zwtMdHGrZpZTMmzykeFmy5ZVZQmW8TC6",
  "key2": "2pgNpqE8aUSMrWpR3VDyx2FUiyM5AnooKPiZ9cEoK5P5bZjmsTzqF9Nc3MPg7LtFhdedn2GpVVPMH1Uid7q74ybb",
  "key3": "4DtxUVyBw5c6TJ9E56iCeqEeaC8ntKzvnDnNEeJXBHd4GamXMWhSQWiDUY3SbqZjwR3ZUgeuW6qZSL7BLS8PUBk4",
  "key4": "5xCW44XV6GmjSahBWWTVoEkpmuLR1Tsg6u4REYcdQHAPDGoTSaumWZLThaCfqB2KGmtXLgCwbfrNiWGSbPe6EDh9",
  "key5": "5EsHXwreQdN7VLMdFYTB2x5G9TfoQhyWr4xMzGLB9s8NckmH8QxVhnA6hQobjsGbRf2UPyURd38i4bF1azk1Sp6u",
  "key6": "3wdnzMqAecAYYwpw6qafptWtjFXjRdGBPkfKrrBNQR99DRxSRSPa33183M3ZjpP9BaB4CYkYmPvW9tomyMwdfxQ5",
  "key7": "5k7pFPq2xRXN7kZ5xP8GHbDtNJGeqs95gWRgsv44XqciiMoT8xBt1dWLfVeapGW98n71Ru7vzSHJHTRBy684Yrm4",
  "key8": "5xqe96h2nSAxC7YqsDrzEGq4HwkECDq4oMdLkDsXYWqqeGNK4KTBHK9hECfzfXi6FsfmLPdr3Z36CMBGzg717TAS",
  "key9": "23unS9Ab8dCB77rhyKu7S48kcwFczfMbPA1qPDzhJq5kCQkLhJGMP3ytiwXsMm31QosHSeApfK1Azwajpp1B6eBN",
  "key10": "454TQWQg2aMg2SuF55DUYvo1We4nJkFYcHBsJGAi4NoM1Sjh2oxPyVrevShbNW8JomSws1yZPPsrCRkmvzPyTs2M",
  "key11": "2pboyymbx5tothjNiDthPs4N6dUVeZyjUVczoBVPxxpeXUwrcvdVbzxawzEVZ3ps94hFAtG7SQ47yES84ASiCF5C",
  "key12": "vgtVqqy59uTMFdJ4p6yQKc2JVsuARFHo4Fs3y4749mSyBPhSs3QCgSUAnawj4qgCJLuTfb8WWwtEnxmeFgtvCrE",
  "key13": "5LtxFNs9zgJQz54hRkTqDhMDAWSpk1bJyxZxYVZuBaNF2S7d2TzcdfZtYjC41MirTpUwzbSHtezcFAwU9so3eabK",
  "key14": "2Waddyx42q1X4ANdCgGTCXWs53tR1TYiJDjguDuwqfjA2JmFdgtmYFSDHXs1kd5QBmn4ShArRPagvyyW2XvKc3hK",
  "key15": "5ov8kRwK566rMDgiaaw48uwXmyJcvnfdsX2bb1QZVtnYFKNU27ac6FMbag6sAhARPGxxk1R62g2S8xN8QNwUx7rJ",
  "key16": "x1FuYQ6bCGNRwZ6JVca1BL2KniFoNswfMmx8E3hFW8M8tjcUGvazURxqPn8tPPW8rRR8GZ3s9aeEqkP5fJLTdKU",
  "key17": "2v5brw74YY2DNd8H7qTg9u8aZkKbR24Gabd2tCphwWmctuGgNYSxAJjGT88yxTdTtY95wLxAJgrix7a7e4pgPr3s",
  "key18": "2Z4JkJLALPRcY9Fer8jWqxiE29ZJfoMWA6733ZDdS5WTDgwR2bUQ2RoJKG7Nc13n21eLKKbf3TpkHav4z6QmfFjJ",
  "key19": "4tssn5E1Cc4VeBA12MHYpFzSKTWCEK5dsW6YhHR9f1aFdtp9pQCdVav29w6rHchAGSrWDTL1Hc9Df1Nm1YHM7m6n",
  "key20": "2mw834RrM79UvfGrWNpaQbQjJguNrQCVZhWQrLrqNPaLkdd5ZLgJYAn1GA2PE5vmfBGKnBagKkmNdpjfUYLmHT4Z",
  "key21": "65LWzysaHxTuHKXh7BBYbYnzt467VnXvY4uziiXNvWVx5wQfLFbhnnpCcqHhei5Des6ahyvpo3nGsFJ5wKXiZak",
  "key22": "5zeMh8Z1TTSVg6fYFY5SSkbqMRcarXg4vgs572zc3aHHPYw2M4AMHKTB1RbnYYGaUEu1PQjepJCpcvrsgKjuLney",
  "key23": "3enCndBmPN5daisC8pdmf352SyeWd3BPooyTpJoFQMLNrUtefZQWsSbvNqQU7qoCWYbVabK8VHX8cPiYgxu1T7tf",
  "key24": "4hB2QEU1263iQswonAZtJ6Rw6rKDfKoooRKiXsxFWjsd9i77NoKZm1n7hEqRJLRw7naXkiPReTZ2R3mPC26pVWXX",
  "key25": "36s2qCsPwgsxqbvFN5rLA36ndefFYfcg7oE5VASay3UT9i2Ap1nQEUGsTDNHArtWuKZfBQqBNqxwkiAetWvXzZsE",
  "key26": "2T5bTPvZ9AvMNMkr4feGhF6ajvKX3Du84Fjh4dTfrTP9oXTQaBjFBtjAYVFGA3Fmdt86xHq7qn2BAjbL9VQjEiSx",
  "key27": "3qeG9BAUr7qGnLBT4NZrAVbbdYj5i13Prrm1cnoQgr1FfZJYrcmVSKGUa3ZXYQsRZnFcpZUZYcd9me55q3yhYKrE",
  "key28": "2tbuBc1kQKEGH8vkV5NdrFotcBwWod6MSFW96bGEbWjssXbpE8WFZmNqwGxbfTxU8wteYGm71FqvHBBjA6MZwH9k",
  "key29": "2JGAqmbuYyd2duw54uuUf8cBRjX71oD5hdkpaAu4WxAyzWReEK3qAJH9drg2hXFQsNGukpFaLZphtAsC1rjWcveu",
  "key30": "3URjXr9d69o7nL1ZenL8DTreXzDyfpQx3o3zCNSiWZa4TESxKVvttpsVkxirCotxMu1KKsk4mzuPmjJ1KKmiiC4c",
  "key31": "4mH1QfUxQuBierQ13aoP294Xtd68oDcE6xNqw85w67Hxtbaj9pBBhkjwyNhuanC3QhQnbrnkTDpubh3RnBTa8WR4",
  "key32": "4qhJAZbRJei87Mf3fdRkTbnohrTBKcaqwbLFTbnsJbQPcpKiZzJXW6KFZNP7ARvKGEz1uBKpjhFTo91vTLW6ZdLU",
  "key33": "3PBtWLW4o8zk4NiD68mg9tB8bHsppAYSbTZa9yiSraJDiKnnZ5KBsU1wskPsyTf62wrJRcDfcAWDuo7tKRGtvJoX",
  "key34": "3RoYJNXqv1eyUr2Mu8Q5KbX9NmLNjZQRmStA6Wvanp9UUTu5gNMr5EG34JqmD9MzXFbPxH8DVTCrpNKKVyNxmYfM",
  "key35": "36hDL8MohZevq8ecLYYQH149snNTWSeTNVroBVmBr8sb2LRuPGjseue9ggDcYcoKPhFF3MhpF2UTNWbJXDioufHQ",
  "key36": "3mpfk3wFDWDHaJCyQZwBmYRwpN9R62LcUiZrMsBZtksq11xgY4D4Bc4YAQyTV6UTzpfqvn6ABbZgT1VKSgyYeAY6",
  "key37": "5GFsz8MUZG3Mj5LJYL69dnmyxQ3MgMqBMhiMRaf8cK463bqWZZSmtvPSm7bWy1PX7GRbYPmF1ZRZ4xcZyb8zcpNe",
  "key38": "3pfDfb6K2yZfBS6ZeJZuS1U3vSnXcWUnPqt7pwrwpzHx3XzCN7TiggWMM8bhjZ7zkjLN2Tr1Uacpdei64dBKqyxE"
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
