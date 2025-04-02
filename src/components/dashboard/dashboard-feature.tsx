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
    "5jALgN5onX12kKiQkffMTbVLzBWHwdZgsY1T2zDaHLjn12cqSkXLRm8WFsLoDgecAs7S3GRAq2fq5tbhF7gzacHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tuhPHQVjPZLJaCRH8tQp3ZWzz6BJi1VLwJGVcMfAgvUL2ZvvHm15EoQYveJgfNvSKFFoJDXpuQRqtKWBy34NuDS",
  "key1": "2PoXeNBURryDc8tTXxAEHhRqfUSCiiqWfiVfYfYz71PrbpSfE4qX15zijyKxFfM4n4AwAvFXbEzQxW3PJapC1WXu",
  "key2": "2fSnikiv5qXwAsp11TBh26urLwJN3vbDmn6kFjRntCLy7nT1nXKg3N2jNWJX9TKzfkLS6ThgNpmgaRJuhw6HmLAZ",
  "key3": "4QbvDSRNbg5wGKEQpDRkwbLZbWmNuEB3zFvsk12EbXP4NAeYAAsma86cjB4e3HPZ6SkWf58k6JySFSrRmuGQxGLm",
  "key4": "39TkVUFLYonmyhomEmc8TxA4RYUsDforZe2ScS5ZZfjwddXmmzRXqdy6cmCFwcSXDhpqZ9XiwBWzZjbUgmfFnQFL",
  "key5": "3A41cEK4YVrKPmwBsBitxfxZsZ53RtsPBdCywwPCWCM1q1PBVA3kWQzRznij4GThs34ajaHnLB2Ep7SmUPLccSZE",
  "key6": "2qQwMFxko3PeWQSd9npgMKUVQy9N3VsMHosfiJAakDca6MxN1mg2aWpJRTf5B5NoAZ2FzTonfimTZQDudC34M4Ju",
  "key7": "FeufnEdju7G57fScQskoFCPKah1WhhG8bFikvuy1rvFNqSmkmaJn23gT9djtGotxYR3wqxQCoVgE1WWoawiXxUd",
  "key8": "5DeCe4YBD2D1MJYa4qNzxnUgT4f3sAjKy1fzy4p5ZHBKHxu14rP7Tnq4DtYqpAVKnmw5GvYosvFrLiJmbo5967Hf",
  "key9": "3rTWhBANosJbwrZ9W5faUBYtbjfJ4Zx73fcmtr7XuGg4QRyqY9rFfVMyHHjve5ZXjYVuz2Hk1b6LhubAM3xp61Wv",
  "key10": "4NR4ttWhA2pUWiPv8SJWMLRBA18HhLpeUP8VhEUVk5wuvGEyY6j6RXa1amtuUnfGHewsavQXJTwr4Wv5QhC6dd3z",
  "key11": "588fKdViyrNFQ1zJkFR9ebhATHd4r3tDMV6vnXCFv4PNguthpcAu27stbNqxFwwc9tirQCHHqGb9EgevPQCw7x82",
  "key12": "3JLmkQEuHR1gCXK8P8J7XZX9sCr1ZE5e6ast7fqhoyUcQJdw8pUprF9gAeciXbGy6AGkXSpnaD5dnGtN1bAHGNLo",
  "key13": "2BzdF56iDsyCsJcN4c3oWxBEKJtyAru2KfR6224afteM3TVFMgHPwQ7hVt1MADeThUAKpDNQAGSGakwirgYGFUWk",
  "key14": "5kaz6SBUh8TfYYBs2qfiHR7r6e2g5dFgNsN1He9y5C683FADfvjendYgrrhw83sH4tTQfNQwuxJ3pfXJNd3S1zVU",
  "key15": "xouQqS4Rsz5dEAuppXzXCapbhsaHQc2QDwXotGBffKUn2yyW7KMBwTi3tMhEy8EgKuCnpPSwxaZh7ArTgke6HDF",
  "key16": "3ucgUDeySdjMoPFgGUAbQVoi8fEkyML72FvNj6CR1Xpe9Fh4RLydLJAhRFjYFNJGCWf8Jx4JfCZr4YZoiJBezr8S",
  "key17": "4JQxLTkTd9nRUwQJufLrocLqeQb7qBWXYYGYYcHeAJuuHA7sozjPqTm5ataCKvYmyQcrpyhASG7rPWRqCaTeASgt",
  "key18": "2AtBHeZCgHYFxQmELJb5PeErPqhF9w6xxNpXdwrZfhJigT4dVSreKch1Lm4qQHzoW6BXqxQ9GK9V4bfXf3youhJw",
  "key19": "55RumNcwJX4eTGGyV5mvovLUbHxiWS71kN9zMxSPZf8dNcJotcfpqYBBX5R5wYzLfTBpKQwrZryfJBULtrcNJT2A",
  "key20": "36tQUKaMzY6Qsa77HNZeZGeAMJPo67Cb7B9XKUFrbTk1JAK11qs4iCjvmTB179Aq5EziBE9ecaqRtYhvKbVa4XW9",
  "key21": "gnh6JxYCbVQe3D5sRbcvaqjLhJg1scCLYpRrKjkZSqAMncncc7BoKGKM1zDB1eRDq4veqXET4ExHuF5utjgZ7ML",
  "key22": "aQZy46DoAnQnGS5wQV9dF62FkkVcd2Kd9xZjfHC3x8Sos5hRimG4zpXg4nXsoRMokgVuvsbUPawoADToAZPLeXm",
  "key23": "5b5BennBXxEfdha29hYq7LLM4pmfEtcpdpgFyabGAaqPkyrFFaSPATr6tu4fb4Z9fdmLqxgDkrkCQRHXrsbr8HAd",
  "key24": "5pDZc1tWFLzd3RorJ7TJqG7sXaPnDZ8Y16LFKW2a925ccQGP8VZ4qAmSvb8PsjoeoYLvAimEU4Afriy5cTixouZ6",
  "key25": "3knWR5LWQhGXRXRuWK2rkK8GyBcjKEUowdTQW1xWgM6RGLshpi8SnubNDctgyfXRNEcXNZ9oxuXJphfN7ABMFY9e",
  "key26": "3EHvQMV6tC1E8wx75c6cQtTWBmAVVxv8tkjNF6dF1EBXg9WRBQTxbw2XM6ozqBpzCw55CX16R5Q9VkWSuPQq7q1U",
  "key27": "ugixzdQDxnhyJ2L8StSboTn7qHTQ4Ca34gFzTUZs7Vt222HSdCsMG5a96SYoZz8We69LSxRW8CE5R5XiXLxSqNF",
  "key28": "5BQ5JEKgXd4tksF9ux4cHMwkqh1ccowvrm1zTmxdqZyxXpDvk1pQbqY39NxueFrSk7fcZ2ZfkfYPjwYEKdXAhR5D",
  "key29": "5gtiW2TnikKY5PNmtrdxDgVppvYWfqShmw7cRs9qtMdidNLRjToE2ftqPoJ5PL6r2TdC3UqjSQCy6iWxWhc44kJk",
  "key30": "3FBtbmufSrHWW7vMrkaVM9K4qcwL86dYMsQ1hFF56Vd6fttgNKhdtgRpYaNjSd58vHkEq4s9h8Jo4V1dxfo2LMDV",
  "key31": "3DjrNrqTm6r5SrtvWM7YFeWnvGPgh5sSJQFbBiArQRyP2CyRaxniGgJndG7r6MigTZwbY2hb6U8F1M65hmufuCyL",
  "key32": "5RQowCs7b85KWPXh1pktfYhWips5MF1xzqf7nChzD5Y2dx732GqySJ23YvYiQ87h7VATWTookmyqLfGt6aNahE6i",
  "key33": "2qGDTTPHPU5ePbeJfG6L6ueN2ZYf2n4N7mUJvAFsCNaWgdjvsG1MYpZHmpxyBJcWT9FLwodT5E2Rcseb5Z46LkPM",
  "key34": "668xKLVdt7jhG3wT18h5o6PQ6XAhKvRZqjfLC2PgnBwoPezYge2dkFWf2d7rNPt5TDt78GAY7gMM4mDbYYJtd25b",
  "key35": "3hsWeHhuAXTNEJtkRQaugDi3Ls6RTi6GwhVWj9GBjRmYWCjDWXhmZaL5gGmatHSv34G3k3TtKyPaFR99iynKCZEA"
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
