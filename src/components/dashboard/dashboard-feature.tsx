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
    "2Vp74fnBJ5TsiSkFKwwLrBeCJNNzJbkXbAkhkCNT5WK48ToJjieLwCTn8jSKi5y6M3JNWYMnaWc8AgeQYsnr2MA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4owECscP7Z1CK88v2v7HDQjrnuAuQX4CBTnseFgQ1pC9oUGT33f5mS8ka3CkcGPouwJRnYua3x92FmjZKBTBWDQh",
  "key1": "4BPPoTdK2o4n9hAND1mFoTMbgqmXLywwpzkGCbg7UQH6cf7D39QboXwigHyff9vvXww8G5k7nBjeF6NnJdL93FK1",
  "key2": "5P1aoc34HEyuA5K6BuaeJYLUD5eDEL5i8JoMA8egPbvyXeYZDC3wYndXG9zhXATUh5YTKsZEgCkzMM6U5K2pcLk6",
  "key3": "yd7EWmLpB4MFmnZWNYa7EYDDJ49VhEWM3ELJfLhC94MHzHku24BL4RCzsDowr2ALcYiTuStEu9BXKkzqyjiWGW8",
  "key4": "4U6APHCDKac3TFKdofiJKNicVnxvL4aAtXGP4y9a6rdrS4x3A4pThLtbKjQyAe5HgrN3F2hTTTsLmT3UzA6neyDF",
  "key5": "5XRffnSvYwcwXJroYSXzvThPrB9HXt7x5RseTPu1LMuFBPZH6VXcHAwtp2B4DLWoxDcNtdLrcRvZBw66snzTbqqS",
  "key6": "VHeQNCxfV62wPm3QZGoFauz5E4RoF3nR7LBXyeehbnWyXJA3VzDm4nZTKwf9CR8SV8N5Y5trJ9Bg42vUMmgSE3Z",
  "key7": "4qUnQ7BozeEW8vYBUTcdZgueBt3PDNwtQoU8Y6WfgnWPkQ1H3Kq5r59g3Aea2GYTJmTqLTZgfAmV4oRVrjFk5Zfa",
  "key8": "65yxkPbC7tyouTQPvR611MubMfs6BKufa2haSWtDm4PkXSQxYu4YvCP95nHYDdrk8mH9xcXofZCbXq6ah9Fs3ZhV",
  "key9": "4PowvKqmHqK9qdYibGx16oQGTy3rHNfUiwyBBodbQuwBsNzAxQq3T3h3jFXurkZwTJ2BqSGMU54XabS86fvj2CzG",
  "key10": "2eV9i8NsVjAFqFJRb9ZGmkTucNPQ49acwvBpdRw1paDqH3McRkf4cssxRg3xMj8UQpmHRLPHrLsGCN57hnqKGLEE",
  "key11": "31jQPU9NNVph48MjxUSiEyGzVnSe82BPgUavrHRaR6NdzUrgGeVWxWC1xqFdPtin1fo54qVbWbCAbZ8tqhpUD9Ur",
  "key12": "3c6nXenvBrdDuP8GwSxMyEBoYAM8dsabP9Sfr58o8jEbwoSmAnWmFuxyQeGGEBQkd51tTEkeh26jNLg9ZNDTHSgz",
  "key13": "C4EgvygAxApE8ugWLouiAu3vqfwaVDWsyV62b9RqkUHcZnSELWtepWGCNrGG9PoNVG6ZinVh1xPrPX4nUQoxrqf",
  "key14": "39aa3LYQj8GYJT6NmDdTYBbYjNb2g9MsqNMyFWzRr3Y8gbAPYaroevfPMmBe7Ke4Hg8ftJfcCr9qXyyAiPod4pjV",
  "key15": "3aCAJp1kAmaFbxpr7YEuZ3fVkzS6Zy2gQiLBTUBDx8qcNcVSjRX3dXqaduoA4KZoEXc5j3dCSkfMX3ctkPEqgZsD",
  "key16": "dQHUa9i8iEi51SNc5n5ZjFKggEN8vKZkpXZn1qHPZDBuSGLYTpsCbXGboMCmgFxguKGPUeNwPwrcAQxPaynAbny",
  "key17": "4HGZMAaxwxpjsbuQ2RcQVSVW7vZVsrASBZbc7s1NRVPBhs3F6PEwkowbg2vQU6YxxBYe1VbqUCTtQSj7KMwp7Nko",
  "key18": "2WwQ693Nw4PkYMcq8ha9FoUYR5NjEb7bCNddMugpVLSZ5y1JGpK6BhJwscrs5aCnbLnosABWUszWAUhnGGvT8MFA",
  "key19": "47YX7pCz7fpYzpXfe6bAM5gk4whgqd1M4RHrvK4qzvqc84Fd65sPhy4XmiYRYKgaeg2EjKeWJVfNFmxgWucrrAPV",
  "key20": "2wcuagWUg1qSjwA8JjJURvMzVz9ro2j9jJtyMax4YpgDu78rVnnuhxscgsi4R9NdskFD5wcPQLNEdh85KLH5QTuc",
  "key21": "Zgo8XP2NFujPsh9NmnLBdLLN3j4X8X4H1jVg6w1BfD6d6CGCa2rxh5vjfquXeEeVdxVALVA6PzP4aaGRNJX8GBF",
  "key22": "27o5YGvvVkrJaUzhCtBjziuhqkh4YGKd8M6jb1sws53t76uHufcP2STA7Y7samN3uAhUQJEKHwch6aLKe3MAooQZ",
  "key23": "259yWDU3tJxCmptXdWYmuyKTmLfVD33N82Xd4XU7DYGtjUePpu48aRUriQPNSf9hgXV7SRevcG4LS2a8sM2qSGyS",
  "key24": "1224wtmdBW55bdRxG8j2VYXG8SYwpjhn9Z8ZSgFpo5Q7sf18ZqsEc5JT2WTg5myNHNYkPsgfZcoXzb1HtRPqrhtD",
  "key25": "4zNhuMZ6cznrpAVEeyZdHamuoYp2NAumXyHJEwhTLQJc3bHFKLQQAYQo7M5wdwEyWS5p2oY4EYMMfijcZCAngdQT",
  "key26": "5anfSqa46NXqYrXyvRBD2RMaTDxXPnLQzVqDB6Pw5XFSTqg7BDxeE4m8thgsHoxhFoNp9DWRiim5BLdnMXbu1JUs",
  "key27": "4UQ41tZp71XpEtSeKpNQcnz9NmiPGMXmMxbVRmUXMR3DMnDD6oPswoWXN9pnZoR6QLGQabUPFVFb7GDnpMxQPpGm",
  "key28": "o9sfr8VeWHPAC8kjBZ82yrgFHfdhnGbuxabrjJ1iJe39QdU1GtQQtjd2yeBXkG27HAVNf756gWm3m6ZQxma1UE2",
  "key29": "VCp71UtqwzJyBwgZFnrXwZbcsJibKKVWGCj3hthfiBVJaFGWrLvqXked3ysRoCS18mjsfxYp531WjshRNuuchw1",
  "key30": "8AV4BohRpH8T5y4RLPBRtoLT4dV3eXqykz4R7qSfmd7N6mBygGh2BitSwxD1gMgyex6XjXxDpSFwZWVZB6xPghe",
  "key31": "3Cp7chaq8g5dKJdRyKZwM2uxgcuniSwB1BABkefwx8dP2a5Uzcgco7nAT9TQQr2bsTnxwfghygGFRX5e2LFXaX4R",
  "key32": "47S5KFF3a27eBcQsyCe7pmPEpBiCvfT5FwGxVfpFDBgbbhjJnyzabMMcLsxZKrwYuncxTUMBtsAtz7HB886DmeRh",
  "key33": "4n5PiPkhwNx71uetibChUKSpVaMLc5au7m384Pjpj7EU7NacER8sfoNcP6DifzeR6DfLtRnKP1iFdQA1jBJQhL2",
  "key34": "3L5yQvdrkAxyrgyJ5VJHKnhzY8LwViwJhJNwsp7wj41EABf6YJrPJkEwdn1dwBbigSLFyeQj4rMsrxe6kChmksa9",
  "key35": "3imCLoQ5NsjGPMeS6o15mhHYggjYqBP6ADb8M9S9xpSST9CV9sFJvTAW45ENrHJ2rqCuxkqx1TG7XMACwdRP5prU",
  "key36": "37PCXkA5RwuxenzPnauTxHak3GSDdZvwhc3Ledzb4LNGqXwGiqgY6kS54Crg9HjEYeK5aVNNm5NFCXtniLYWQ2JE"
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
