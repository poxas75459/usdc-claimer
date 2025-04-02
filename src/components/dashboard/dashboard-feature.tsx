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
    "2taroJTWSnGtGtkBMg47SwnRtKBZNnASWxDTBe8rdNcGZLyApYp8c5tf9Y9d2jxJGArJe17dpqmQt8NmTzASkugp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328o3aQABMh7LphSjxHaNboCyigkYTT4jSXB9mVbyUZ1NtFqnsJrCF1WkhBjMYjERWj6twRUN7EDAxdJRJrHfHyX",
  "key1": "2EYaTdDfmJ85KBKS19b8926iYFG4K6TF7J4rLXvsxAot71d47y3pTaNeMgD6vyHJhuJxJWPpWBDi2HwT8nXrFSCw",
  "key2": "4n9zBeHhctEZ8uRNzYfw3SMy9TUEn6DvCZxmK6o53irn6Q6ft9SpZNe1e3hpUjA2rhGvTr7DGghQAtD9R8bAzpv9",
  "key3": "4HXRmCySbr816wCq68GcV9XG9aCrqmuuQX1sjQ2EzjLQWA4sZ6bw8b75EmJAL4bJrvaBzYotSZZciRGXPuMJxzwD",
  "key4": "iaqqekn9uC2qtZsGpTpU4cP37JUsKmxmPqAk6xFxUUUsvHYvNZjr4esi69VThRYvhkKG2YLTeyrhMoekVth1CL9",
  "key5": "2HqpvqJeg3zHQJq8qhTTL1dAzxtb78bZPidrNMQiTrpQQKZDrGsXDQHoa6dY3JeHkcRk1z5HRs6CNmz41s5zL56d",
  "key6": "449DdZWUay1SZSFPJJLfKpbgh8hFFuJpS64en8nCiMxsDYs67QHWgMX5pqNBj35CEmh7n5WdikM3Afa3vmksudhV",
  "key7": "2Dgy63NrsvCsJJZ1tHyGZdYdiYV8EfsWVC1RPVHo2q4Yoiw4Pd3gtvkzzBSLfSptggcGuLc3QYkrsuqSzTc84VFG",
  "key8": "3r8Qsv1bcf6fQSGTN29nH8caJ3SLb4HjJrXX8C5w755rvFNzR4fJ8Z74VGAHCcFZiBdqQJFmjx8qPUmSVdwACroa",
  "key9": "3y7mJ6SDVwJNTAik7ZDXX4qt8N3T5Q8GAKHjLo3GBTWnkE35xdafFWcfnCVKqpy762Pk6ZyQPUaANdRqz7DFxNZv",
  "key10": "2db5m5nWb2JeQqYUxmzAb41N88XoyfFrnYsQF4GFcPRrzT6D5nemVaC2DUvzUXgKRhCPLUjAZrtF7vR3iVWcjTR7",
  "key11": "3Qhopg1fm575dSmwdRLSaauJ4URtAhttun7ybGgbGQBWbQGz1Nu72tn7Ra4rSuLTrRMZ5yrVuWAfQULLXrhkcihi",
  "key12": "q31bX8NEzZJ8dxFE2c7jfLnmvMaP5CY6pt2Cg2wrbVgABSwNN9yaJbU1H59LFrDfFXMQswEMnqYS1CachPUJBf9",
  "key13": "3gYWgaSiRZXnRhKjakMiH474cq6X9VGAXuF8VSJkYbu7iUpqP76ZzM5ndrXkrBGvWtZ6445zTY9AFvXcH3M4pdVC",
  "key14": "5bHR9VtozsAbvLM6D3wYkFEfDghRtC348UgJUCyP5Adr3LsCWs5Ex4BQx7AGbPu9s8xMrAiGHewk5zys68RoTwAi",
  "key15": "3W1pHq1aoRE6YjMzNgu6aNEFJGNFd9CHdHM24R4vnN1bspsFVgaNAedQV148VsEhMwjXRRpi3AHBBGmP2nffhPqe",
  "key16": "5cQqjnLYQGLf9XFfxxaBk1n72cQjAwDXSaKaVj7ev6S5o4hFRyaU1EQY6sbQSWRB8KxESb3f7nTbrgUJFSz5bwix",
  "key17": "QCHkayKQkvSNTiBMKGvBPctTZBrVaMc8LsEMqPJ8wPD18cqw1bL4oX741ByzP8hM8bYzrNLhMjBpeyfhUoa53hT",
  "key18": "fEsyYxg4EWEpLJCLAdskgLpo1QCHTA4ZHi52QVfKHRvWjqEieHizuC8UzDmygcELmgAVjPipsvSD7TinZkbwwjW",
  "key19": "uM1PQ5iXNzK381L8CS54CXJ3SnL29qSaq1VRY836MzpYqFSze1q6VJwMsZHW2XAEQgxSGLAGtExbY2VW4j6SsGX",
  "key20": "239SkABfsGbfZXeezaDe7FamazsMZuL71s37aGMVd4LoKgsMbmyZcZdBKryAsmmoqLxCgikdPNJKLvxNJE8SoaQt",
  "key21": "dmRZqFxkmu9ZS8gGfex8nzVZxgTHzMi91Bj69k1qUhVJvTQr3soBhqNc86Wp65HP1JBMiAR6o7Hh3dct87pheBQ",
  "key22": "3tTq8zKwnhWqU43AZtFgt5hEsiqffDgPMEtyKTyofDNj2vgeeyTPpF5WnY2UcE2MWEWz9hG2kTyasG6kgBpZXzbe",
  "key23": "4r2P9iMfjrR2Rh5DYXcQ38vXSQkwQn9oZsmJrZZXKpcP3KDXkQskgvByBFGFwNNddT4wunGb5VD4VxysXU38SEbh",
  "key24": "55kru8wYw6GrtSx1Ltvgqh7g4dBEwNbCzeCCiJd9ccuGRHDZBJ7ST3Jme9c22dVoT2XV73S5rVRQnGvihYwQAmNu",
  "key25": "33FbZfr8GyRL2sj49cFzvZAYaEWvTfcK2WFuWYsA29Y1cSJJjGbGHp5n1yKszyKmbWwAvCJxeoaanPuCn5sfKSig",
  "key26": "2quCLnhizBgg3PzDhAQ5WzxFsFDWzYjccRj49AAtWqZ84sCr5HaJDiy6nCBxPpjsBRgEkxMW9Y4U4uVmMEyz5FGP",
  "key27": "2ji7FKKL7sT2VjHg1GvVdSHKbeEKhrpY6MMSJPfpc4BqDusoA5seL9tUu2QaJ1B4Tja1dx98azm8QiRNttsq9NGz",
  "key28": "CLBU1xmrS1QPvRk2uY6eDp2QbY6NiQrwreUadstLdF884TCnM7fkPMcw36YfJBAnWJhGWW6d7KecooyMdLhB9b5",
  "key29": "4HteiivMLwZgFKUg5x8bF1QAgX44BMzqsdgowQPQYEyLsjEsf2VZtxEV87U6ybBfkxYWKpzhKeyPQQ8hp1brjtNn",
  "key30": "5pdQWXhrVM7M4aQ88Hm1KD4LypxSEJtUMLT6UT6hidvFnPpvsHSJM21kpu4bix13dJ1uphZ9jUNaBpAYE3GoRJn4",
  "key31": "21iJLaztLf88b761LMXg87NUo54r6zYKEPmyFTLKoJFemk2PxT1LjjopTLEnueq8iw6CK4FB4dCo89LHZpBgmget",
  "key32": "5HAJF25o5MmceeQzQQSxft8Ne2bcrZU4eTrjLiBbx4XwiDQ2MkBAtrWfn5P7QMMbqsn7ysn8KVFTFMkCAV29KbcY"
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
