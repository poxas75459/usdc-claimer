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
    "E4UPcNc5fWnkA8tWuH645jHDdWLqG3PHE7i3t7jHJRQmNxnWB4MuJAbXZCeY22WJ4TbKyX6uPD5RGh9E8PrcMNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rgsC4NGUAZDKXVum9jT5rzm6DgukemGAzd8woUNSJt8AA4LKx6XZjCMvEQn5F2p5wVkzZ73XhfTZVRmz31yftLu",
  "key1": "KoYLq6bBPpVEfA4fzn7fSVMAhf1cchjC6sZyoePVUx8anWa1rrXmoDXrsjgqT7FUgHYRqFviAXWajRF2wDbpUrn",
  "key2": "2v8GkBUCrzgERg4Tdto92RB6mQUeqn9jmc8ZBSZsCtYSmYqKCq688Bfi3AWBQ66HQFxmUSpM2BP7mo9dbn9DVz7b",
  "key3": "4aWXD3XkbjdK8p5qampuqy1TArZRMkNUYPM4YsA22ZXb1f3fHszMgt4vHihUDbXWhFUJMxJhwf5ohHYaJ3YRfTEK",
  "key4": "2dFaCLah4Fi2G4nCK9QCEVKAWfMmtgGN4AhZXLQEPc5BVzGsVgSvXyzK9fgWkae4rvwA1qE3XY35umZ3UQ2t4ZFF",
  "key5": "5SEbjVARBY9Fo2YjKSP8mmNMXkcQnmTsZe2jUjcJChESamKwoYhoNgH4yGHidmvJgfc1hP2mN3V73BY7X7ZYKFXu",
  "key6": "3EJSEDV5H4Q6vumDZPvPyXbxXvmDGPtALdsxxRDbzWdyiHNt1Tjx2dD4ccadKnGsCABADYQTZbCxvLDtKXZo4gc7",
  "key7": "66HpXqZTEMp38x1ASecbJtNe8WVpqv8Lb4ZrqVfkYTEgRGH2cRhUdgUMCFaTubQUZafB8pfv5EA8KvvYFrxUzuJg",
  "key8": "vk2Kuw1HYpF3KbAkxapY7msKyG59YA9U8SFtmax66Qcg45LbfM8kpE79kuqzXCg9EN3dHhfj9bMcduiJbm94MMD",
  "key9": "58T9RuweUoE17Rix5EnCFciFTbRr6ex1WMCsycQHRx3CTvwgSccgK1pKBP1Vn2Ny9K1367BvX59Ea2HdHqP72UDZ",
  "key10": "3SQTrowvDKrjdijC1BK1JWCua9ydQqp8hE8tKMx4xv8QYo6yVEXJeMhQBawUw7CtEvh1N6FF771vMGjAamseCg4W",
  "key11": "2HFQWhU48Bo9aPh7pH1NDwLjfqWuQhexCNLzAKDMwNeUhsgbupPhWabms5KZZ413MBPq29opZ4aKfmauvVSWAC5B",
  "key12": "64eZ3sTEAtX6o8NNCBk41Hfi57saxmY5qSBDaAVBGBemimoyTbw42SarbQ6pRNiCBnP8KaMF1TBaHtWDofqmUMrc",
  "key13": "3c9WFWrZVeor7be3hPb8U24jy5MRN6GKPhwSZix7vkWFVZMMjU4DEnHYadp3ZdmFyiULzsZDsVw67uudKaY1BkyR",
  "key14": "2L7fseZdp8Tb3eGWcmqvGm8mCnXrqpxDSATiTowxtC9HyALJWNgzHB4Ura2mTgfiXEqXvwm3Kst38NwLRRievcmE",
  "key15": "A6n7RHhiZ6hKndC26Hw2DUeH6eUY9D5PfJY8p22SSQ95pn1PXefMYzHgCAWfgsPpiEWeBmFDQfZsqSuh16rNd8z",
  "key16": "2PDaPZ93LSTN4QRGk8VCXPbPSRqWsZSRRiWmaH295EhNYP6cFa8F7rb9A9rU3UV22q6J5u79LeuB9sL6eMEJtfSQ",
  "key17": "54m9vUMtUxwRopbgj6qevWmZHUdNdvkpY9yxxA7aY8fPC2sRFqEgvZc6A67XsFFJojqD7LG6EwsE3u6uGWXHCUwx",
  "key18": "5aEQBa3dtHjB3DMVFCuPouhHHFq2xVyPkrGyoqTshDJ8X3dDnrKmAAj3z9xzwsCymMQQSjhZRABVARekUEQ7WT71",
  "key19": "4jt6u6iBs17qNcngaxqM2eNafFQrdJpsoURaahMEKxNqPedhZTMnbEKgsFpLa5LqASTiNt5EymjqMPaZztre4VHW",
  "key20": "bynwuFiZVDrCeMoTD4nJrUjNyTgouGCv3QwMUhuNkZeX5c4vP4kmiKAZS5Mq62wmJEyBuqkFN7L9f9ZyF8kTkM8",
  "key21": "5ELfDkKoKFCmuJVUjq6Z2sRmBeVdpQ965iP4YVRdkVMD4QZhcMeVwgY5CJPqx6Jym7DAyDkRBrpWrb2a1dE1AHJy",
  "key22": "hqZrgpm692BRGcddLERYnfRy51fJHHeJFW3mWt5eyA8pVMS3QyRdue2dMFxXututpT9Yv29QsiTNu7dKMbFyHix",
  "key23": "65QdRGHno7iDdVtyQ2KjLkm4B3uuW15AF3i8TgEFqx4PtvkoGEr6Lr9uWz3MJpmtLyDkdj7sawtqFNmJXz86iAVz",
  "key24": "3UQWPqun7Uz3E1gbDvk5qmxRosvzFnaowKTALTwDidcFZ433wGkujL6DHVTNeacXeEiCCNEw7U44urihodjYKskN",
  "key25": "5EkkVbtPokWBv6VZvp1c7venH5fwkZr5xvkFL1ipTEoG3YMbs3t8w7ijSE3665cu2XguMi4tZRcSNXwrKD2D58EK",
  "key26": "4KaKb7533P2EHXZUKbNFcgu5xJ7yAr7h8n1G4aDeKEEYrrj48RJZ3LMce1Y6j1hgQyFaZfq42H9yQFJ29kJmNKQj",
  "key27": "3BVy9NjXHXLYz6ca2uQ3i8ziYKPoh1sADME1Sct1JtPaoBmjygjxwbqHVgVB1oAVDbfyjXSP1mofxpWBvHPGxKwv",
  "key28": "2Z2QnH1LSwPTB9d9ouDWMS4cNSBJ2Dp9uHwwyVhjVYHe7x5cEeZfvxkMEdCk5rk71BnUohnfGHhz8CSsjM7ivgV2",
  "key29": "5ePyNahwxHApULm75EDRuL49PYYcec8VQqxCkc68ChndLDh2EBFg33tdSyKFxdC4F1BBmVuHyc7GcsBndUyPsLw1",
  "key30": "2qfbVkv6FqaQ4Qg7hDM7pq8RLWxH8PGtjJsWC31W8PN811SYKLDXGhUYRaY5jUACsHSPGUg7aT1hwdjFMihefMpG",
  "key31": "o37BRF2bLc2RtsignJd3ew41AyKUXHW9zufoBsLQygqJWZ6Xmbgv7kU7wrwra1Xm54DWhUdLeo9d2VvVP82b4LH",
  "key32": "2pMBP2WVcCrLxTNrMigVQfZehhpT2U8MZJBbAxsYJVsMMkmuLSWgtRvThuAkzq7DAYa2R8XdV412XnUeHbzcKGqF",
  "key33": "mPu355qWctUm75oDzpj3Zix6eScQkU1su9mr472BeVWYzZGkYebeTwxirTMMHEooEp8GofCc6NWdhoBfRJW7nqY",
  "key34": "55a9oLRtBmdCHBEpRk7iHAfVrsxJqvtXKmu88mq7KKw9xc6kjEVa2ysreYQ8jhFUw22UUEB5sgYSVy8aPGja2Ack",
  "key35": "3UcDiCwvKqTDWKmZs73ptSg4Ze5Y8Xd9wQB9kqFAf6ZWuebzKT4nAoEhkq1BSTcgrEuMKWieecDHmAWaoMbeZaMH",
  "key36": "3zqNm9k3mMDdiD2mDNW868TQ6o6smdpwcuqbpsyTKsy8vVrt8uTrJm9rTtY5Jy1P1D6guXLtnfqzG63wuUqyJQj4",
  "key37": "496jb9nwvbiR2oZ4H21Le2inF8xWGNpr9yKj6v6Z2V41NVgmHqy2JM4r7u4F5jgtTaU7Jg7ihYynsmRWsz1fPpf5"
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
