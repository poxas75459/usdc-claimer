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
    "2imtJVVPY9UKRtmH2p87VZFB6L4aKVxGPmCEAnUPrH1zurwFN6Y1cHKJrnM2YxHMWGgiN2ZiZ1X4PUVFJwLR3WuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnBibCaCEfuYSgvL7UAp776A9avA2vMU7QuWhnT4o7sFCcYNkb7dDRp4QkkQ4kaaAgJVs2eWW1pyzB8H9kUdzHY",
  "key1": "9UQwzN1Lk8zzsqUAW5uHkNf2Uf3WJ8Q4aeXs5mDZb1Pi7VoUc9CiWbEFgRLTkJw5m3H9Axa6Vmf1ib3odMENC7N",
  "key2": "37vYUJVipZkMwN1Q3rWabTwdFXbiUhWFB7BcX2AhuEfcRtwSjJc3sKywGz9VRNUxbcvef6VUzQ4MTLxG9znE2SLF",
  "key3": "3ST1oMpqajBeUMXYWXnGNm3ErXyJTh6Gtmtk5mupAyf5mXrE2wV7zXme5igfUghmreCGDY7jQVDvEjVXpRZX84Gc",
  "key4": "NipFXzP2KBHUoneg2TvvFoHY877mk21faxU94cQ7m4UGR9sggpqsFmS6qUBLFVXUQZESQRfjb4CNb8LdMyVAH1a",
  "key5": "2mvAKkxEGN3dC9vS6X36nFqMwXMCktJVGkRicphuWkJFd8PZtb27PSUNNJYfNSkfPUAQs8LJbQMnERdzxZ7zYxt9",
  "key6": "3BatWDTmw8ivG5451M7mGh9FmLDB8cUpjBp1abGGwj6SNXsnW8jL7Z1kteWUqzbyHNmyLTHkgiwypfDJdTLCRiRW",
  "key7": "2dKbEqp3Dp3LefBFnXG1mBGGRuo2pA6Wjco41y5nMxr6QV5x4aeWWGdYBVMvvLRTNv2kAmMhMN7Bnh6ZP8vAeywi",
  "key8": "rqVqoP1B8eTWthUWswq2WqV7EAJ7z5Y6thFcHWK1bQnj3WRZo8jaTL292LKw63XrX64EyJbpdzFCH4YXp2xf37v",
  "key9": "9tVGsG7ZjQw9drpsT8pTpqW4JGLYzNxyUSCTU2E5BAmrkxaCxzQ6h2kq7sENZEkxMo4BBkvys614xt4QBRxozhf",
  "key10": "2NxiSSfnjfFAa29cav1mpYrWvnxYmr5RuaUj7fyQkYSzbipbvh2GdWr5RkHSK2mUt6mF7EYQ3atYhmt4XkfTEHek",
  "key11": "5it3dfH3F6e6JKxHnqbprGinjzRTbYNjgdrpNJr7oEXw3tifuhoprrDF95igtETXYZkj2w2wybSBCicxeBDDCkaF",
  "key12": "44fv9trLMC9yKnyfGbYYf2mmB8eJBDhtvKrZGHE6BQCRDFHLe2FbeJ59jcHnhxvKXE1A1ofLUV68sQYA6QkAZ6Q7",
  "key13": "4p36iMkqjm78NRMgKDL1VCMYGJSgkxTB2VbqmQaQdy23Vxcugv8r3LEtAvHKL3r19dmJFGTxHAe8ENBo329iFo3z",
  "key14": "2QeYnZYnFfcVWM3EvzbSwGqhH4iuTr9hoMrd7nEcpXRVwb1cp4yVj7efWZK4ntXvr1hzaCCCt5JZrVDm6qddcKzd",
  "key15": "4L8FbeScGMmqcvGv1Yj4qGUcmtuLFHgt72DEy3ivv6tduCVZdJkAA9t8xkAWSqAWBmgYcgwaXReJL6kvtppMeyvG",
  "key16": "2ZHgScwuBrJ4uWXQgZXvmtLyKPZJGKyKzj1P97mcwBkPP6kExZJgpYdVxmnK8ASYBfuMpGcEvEmWGjXAKbjhr8V1",
  "key17": "4AN8CnCvEecNE4iGUBB1itDmrkB8JKrdh2USHLFcN56LjtGav5LjgWi4BcXGpeKMoP6LsgkTNsbc1r9LEhFwW8Uu",
  "key18": "4UBuMgvvWJAx5f2aPd3F7FLAkHDVizUkWwMLAL9p9QhzFWjw2arq5kSgLuB2mMAuTpCeueHufdiz115aN4FyuRs8",
  "key19": "2yUktYGajvuqNZ1QLnNFWowSF3fKQnyvkTQdhXfFp7Z8HcbCcXhEg1R4sLdo521gXd86bEJqyn9kH8U5AkYBYSFc",
  "key20": "2LM1FhGkurK1fG2d4RJrRFQ2TSuqubE6QTVkygdFn6SCsk7zGZmjXwLCXZb95Yry85XGpxCHE8jjW2kgb9t85LKu",
  "key21": "24GJKChCZxRjixXafe2AbyRrefZ5bDknYv26uj6pVnNrxXjC5cAwiXXnVjUiNt7TsG3ykfMmrCaLfdFmpVrUK757",
  "key22": "2mB7Zm1GeKCn3ofbXyzPUi1QUxPM5eHzFohHMLq9d3YR9FoS3tPZ3nMNyGhY1Mrwv5Mf2CurgyTDDjQuP465wGqQ",
  "key23": "579w1Usk3STyPQcQriDNxRDEnKKEWnjbiR9bHkFP57xrHRxoYvyNxGXFyf91owEyf9X64bdigQYRpffMRRdPuEY9",
  "key24": "468YwYFW67VjHj2YArkMgo41CFrKMR7DCMPRLidYwA2WYgocLaQV7AzhQEuAFKGVFgwQq48Siav51fY5YxCF63Qk",
  "key25": "59C24SLP1zAdyCJvEYDnaPkpzm32vYU2F86KPpYeaV9fd2aWmNAcEg8e3PzUreua6W5s7G4jiLrizHPAFyp9bz71",
  "key26": "3XQHrkK8GGZyLihKgexSm7V1FTUbJu2xjM4AeUq2kgM8y2Gac6NQ24nhCBo7C2278vZC4yorYu69oCz6paMv9CgR",
  "key27": "kcf2Ai83h2LndiEgKrFhjWe33EvK1ZdWEyqTJJfzxaLxX25wrxZoRnV2V9U6nmzPDfvugz9KbyjESCAyd8q6Rqn",
  "key28": "4sGDGcUZtkfe6zZnRJMrt7ju69i5pYHKKL4Q4hQox5fsKRJZ9FWW2VcoyDjcEjwHY9jEgxqDbYmtjhvizWb6upsj",
  "key29": "28m5Zc8SKKi3SZRWLqM3yBwdwrAAAo5qSbQkXTdosqdE9M9a82b42DYHbxPLWL8srbYMxkvmXPTq82vaiGzrCnzC",
  "key30": "5iHsjBuDSDA4Lrzfrfrzj8N8iGojAujUdwc9ecFZCjyAiobpaVYGPCycKNEgdbEqx26nYqH6Fgouzy3j7PGdSXRp",
  "key31": "25Pt3kA3xo4bbKVRU3ekJ1RtvrF4fLMYNVWibFMMkXua3YEppn4VkSrUMacoNmScoG7NJDMqCkED8AZC8eNunhv4",
  "key32": "613mobyyJST251TzDxMjwuRwejmtThsqaxgdJfVXjCTYV2247yUyqjzPEsS8gCPdVNFpT7vHTZcfvbXS8dgGLGBE",
  "key33": "5schVU2URassiyck8zsN274xg4f79xFHscj5cyH8S7sLwv6u5A6jHkrEo7GA3j5FhwC2Ef8gowJu3P9rQwqTuakq",
  "key34": "2DwgPXBV8aiCztaRaN8ePvXpywayDZCLUbmC7NktbrUufghEybhXsx9gPxiYGWV9VbM5xJVZ2coPkVo83KkAFye",
  "key35": "59jzqzEy3eqCrCotvXkSizFkP3wHyoizb3dhGUPTqBfAztZWtUKVXmbGwCCNUETkHysguLEZUsjGnZvoYqcCh4aj",
  "key36": "Yz6SFsMmunVJ5bxRqM8A1iYgeL5D8SiqZS4MC5XnhQypSV5WBvmdr1g7xbtxNJS3RmZrvC51Csd4U7dTbfD8gPK",
  "key37": "2yanqy8sWSE9UNsx3FZELY19fjsswhx3Yn7ejegTBsqvPioiJM7Qz7ceRda5bpXrqPhADhwDeqzWdAMVHLY3tax",
  "key38": "2y6c1hZuJAYFjSqRi6zuTtoCoZQNKHMtWYZarReXPgkmwynzJoRMrWczkBpLnf88wgzug1hsWYLnAoEsQJctUqSm",
  "key39": "4YT8NEW432cQoMKfVNrtGEY8ELunj5cfLqPWCdF2v4CWyCsiwEpWtD2BX86vmYV9uJZrAsWdBg4dKXdCuvGRNy18",
  "key40": "4kM3y78UHAs3oRhtEPBFEPCmTtFtvRPpZKqTQvVdqSkkeJkTmFA68dvYKKz6ndmd4QSwhQR3nC2BBQjkHwdeQia6",
  "key41": "4mejGwyJQTt6QK3Di4RZCDcE4AJEfccccuhk2TzBqpEBRAdyKyhj1Q3ZZZvoMBNawKbW7dLrMMKkXBjhheC6Jone",
  "key42": "vXVhWdjGVqaykddVwZUhVBjysY8LEhzdZ4XFKjScfFsBUXzPHNKVQb81GCy4ZGzZ3mDed52Djn1XNs9jnLN9KW3",
  "key43": "48qsf4GSqc7catZQh8Fspzc8PxC79v6FwWmwfF2idrFwzEagZbiQrYBmxKmK4BDBM8epTDd4xRGa97vgnoMrm9K9",
  "key44": "2Eka3HeC3Msn5ULaPcfzcErFQGtZMusFfNb45AhjnVUr1j1XLsXBvZsACeR7ah18TsgmYFdjxt3shdhZEKWnzeGk",
  "key45": "C5jjoX6Dg4XVKgm24QDCPSVGJE5TJBiYUXKJKdcyWQE3zu931b49HMRoNUDEVSRP97fFJDTUpsVeaHdhn7kko1Z"
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
