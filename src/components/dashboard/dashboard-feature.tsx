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
    "2K6zRyHphcMCYnhzeJUx9y4Yav8mDHN4UY92ZbeqKVZq6T1sWdznSPGaaSoUTZeYWMbuN9KwbHW9bGLsefV5GepG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49F4iqqazcePcknN4zcMHnW46gtvK4yZa7yMJd8DWSiYXYd6KZLcB7bujKaAgLvbovfShCqNpB23uukJmRD8Rpaw",
  "key1": "sf6Y9QJJ4yfc45etZSsCb5QMYzuLbbcxNUTyGzaKDhsC7ag4pHHejaEPmcxQLEhc3ue3eCv8KViZisEj1Rjojxu",
  "key2": "31VQw1BHV42ZQbLcb7c9MvrYjAZbJaTNHhLdv8SfwNQ4ntaTpapMbtGxHt1a5CP8RZ97JGB4wDZiU36UoG4fWeNu",
  "key3": "22QWQADxsKAfyb6PaPHHJE6DWgbtfk6QWod46QfjqfwzY5qDdemFEJYvNEfPXkzKvQHmYCaKMxcBnQxo8tfKmdrq",
  "key4": "2gDpVu5iX69dmXZ93Tv9EhhxGYYwKU19VkTAiTGdGZr3nK4ZJCNuVLgA2KFtbkUySs1weosFZp9sfZzWSVU6M4p7",
  "key5": "2wtdA3aRvzcH8rak2qRpAm2TUgMKYpAG3SrfDSXrowt9Qug9qcoantopkGZkpC59cjEJMQewx91vbvSqHwEYR772",
  "key6": "2jK8bYd1j3MTda9UVw8uQVc7quh6Bre6Sotb8AT5a5suGozve56yGTZBMCx4gjV6DvAmgBbcuBY4DEDaM4mmhaTf",
  "key7": "4pq6kDBL6s4RzDbG725irZXW4A6rs8TjXKkMDmz91Tt1frPyjMM5bNTn9TBSLPHM76q8FQGWvPgfDLSM2BD11jZ8",
  "key8": "2EiVfCeh1VzkrLnNLx7dfRBSHYMhCDGBjyKsxsT61e1tQWGwbDPGVbE81dMR3L4qvJgeDBmioGWisKh5B7pF2UHz",
  "key9": "5Yuf9FkbvuDeEsdz1gRgtjiD7RifrfdNhf2aRBamwo3w9o3CvEtpF27dwVDAx43VA2pGt4Y9D2KQ7Fiiyjo7abmx",
  "key10": "22iE6ZgbQKnT6kSzCi6E1n22h9bGrqWU4pPze2P71qBgSztntFW5exGLz8SZvQM2FT5THDNru9xPx7YR6buMVQcn",
  "key11": "3FPibqUXHk9B3P7GV7JBmF3cQX2sz7HPaYBFngQmr1AKb7CnJsfpCoLjYLFB2nNFo8vTZ1QPifzsP8yYFe8emfqF",
  "key12": "4uzPsHTVrcBd2G7mXypLgFYrKFNej7aRMKcbbEd33DnFm3CSn1U8eXSWreKoBdm9q2ogdZ3sfoeTCoyHhJSQikpC",
  "key13": "4AZ8Lsqvmg7RL8X7DUq4Zz5Z4zRmycxvfVdZpBGG9n1pbcREwccUVpmPD5brXJiX4gBmTtU98xcDWZAku45rnZaX",
  "key14": "47GJtfZYoGd4dCvHM3TcyWrviqrcBKiuAo3McGKW5FWm57js5zu44rcGyWnzJFujFxhvbP7VzZeTyeQRQCDYqQ3k",
  "key15": "5TP72CtqZg5pTvxKEd7e95M5mSHzTcZe6Kh7uUHbBoWGBYRRWgHyAvQwjf6BjPv85nVYUoufGx9GL9ud8ZMESpW1",
  "key16": "GrfapXw9xw3EQcDt9SbhMLZvSMzdJgwwvuwhAze9qJhTHKRbiSjSQH6e6gHQ3d8ir7hiKtajQP6gjcia8DBcczP",
  "key17": "2j8QsrUg25CJaBGFQoj3ZZsaF6MdRzPPjxAmMPb8vEPAoVNcyq9YAT9N6VigejN9ywYpRQBBv4dA777yNWgq52K6",
  "key18": "3vATEWHFGzB3bgwYE5Tywj5yxxT2akrLqPrMvb1PYcwRuUFFiiGoRzUoGA41YWbvKUJscREFQ7rqUJndN8yQ2iVv",
  "key19": "3GP6joJMmU3JvUFpTHo2U4AGRHB9XBX8gN5JovxgzTLTh5a3ARJHEjVcyrm1grtcgAeBG2j3TY7ZRQQCzjJ1tnnJ",
  "key20": "5wHbFTUEGgmjWqnJse43JazpEp9WXs2KiEBSwGPuYcbMjji93LomPQYrf9dvFDbLnpksrgkoKNmMhiJzYNA7Sfwm",
  "key21": "Xqhz87pr1B3AL9GuiXigSjH4AGuHhcxZgLwRFyY8azTnuPpF1Y5oACSQPHfxezzJNYo844DbYxgsj1Cc14cJDz1",
  "key22": "4KbuWVcT9aYYg9SNejbb87gx6FjuQDn36rS3yWUj9HZyF6o19Hqj4cjPxxH6KdKhN6LQheSCS6p4ADc15agJumJX",
  "key23": "2YAKsERrvZ4nNP1zH9kka2SSaDmqwPmbyomMz74a3A4ZpW9Qd9279PmApdafagzX4RdixoCuCNQMrbw2kTP7PKoR",
  "key24": "2fGqfeesSZ5KPfPnHWoSAaTBZ1VL7rCkxJ5eoVuG3WZsa9WmtVAYTLKAJW3aJuN8BjhXXx442w1xnfq2fgPYn4zi",
  "key25": "5CA4aDDAbHSVJCJcM5tgqnHf7stisqRPMnwjybi6RMYrxQRibaLX8cHwtQddvyobquneBgxxj8dAqgs967Rctbgy",
  "key26": "2qGyiCh5jpAVHyY3o3Akbh5YWv2eT8DcVcV3XEYnrfSRd8YXRoVxhF1PorSXvtYbZ4vKtRWwUdNVz9npJ9JZ1PKC",
  "key27": "LKEqU6jTAbGAgXwXc9rS1PKVfVLiZMwWgA9baY2kEAGe1dBdztdU4xR1oFbEq9je1ZPzzt3RFYzTkSNBGL6EoAv",
  "key28": "5Lo4qBkyKLceK87Qq3Hw4Ge1rwvafow7w84YkLfsTrqxvn2MR8TPnWYMDGrVoBEwUkZYL3adae7NmQbHWLZFd3w9",
  "key29": "3ouisKYDJn3PHrkvQ7t5t2LEonRw3rmUxW5WgTh5aKPuY4pFUZ8ffZ2FxYXdZahFQ4xPiSCnNmMhfpmP5ajxAXHv",
  "key30": "4ENxgNCoxKcEDvKB3tnkh26tv6JCMU5Un9H8pLxQLpPiS6wmhBn6WpJQrForjHF7mvYYWRnqVCt3nEx15KNQSTEs",
  "key31": "FG5XVFX6pt2iaXFrk6nXwhxZq9EGqD6fnVitYuYdFGXn248KQHRzgfpqpc1oQgV7kchTSQtBUrZmRU64sLB1VdD",
  "key32": "ZuDAmw69s8m9MfeuzChqQJ2hTYwdDqdfNz7YcrpDfBbvivZkJFNEMraj9PZFGWxsHqMqigwCfGDiKHHU7jxSFDP",
  "key33": "LXrCnuTW726yF2JEopECm8ptiunVJPPP7xuocLmc88jz2XotMSMdD7rgDDHA3pSJhkk4jja1QGvcb15KDNundAA",
  "key34": "2WnKCfrU3zCXeAtt7Xqo7ASezzRZeFAPBmFbjvhV2YC4c7sD1LsRebsKdFxtPgrFHVFDifwrMj34i2F5mN9DddiV",
  "key35": "3SFpeRM2nSzrDdqSfPzF1L6n8MrNwDeDY96BhbcYG7prJMY2nQx9bm53pT6YqkrUyKodtYRibk7cvSb19B2AedHd",
  "key36": "3Z3n8FmZvAUnWagWz1y9gXuz6Rc17Dzf7GV4sJZ3p4GJ4FifNFXbd1wsndzWq12X5mgFCgypX7Zv8Bufcn38ycjE",
  "key37": "FLCkaVnyfcJ3eT1ZhGLSEHL1h5fsXRwRdN4MpGdpi3nZ8N5LcszL3n2Gr3qQzKaWZHgyomhupMQpyzUDAZGVS5G",
  "key38": "5oCv9Lc8JyEpn2jqjPpVciQU4JWLswnRCC2oh4esTxNxQw45g61j7h1HfKV161vjCNMrcgy4XP225GaJL6VpJCzw"
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
