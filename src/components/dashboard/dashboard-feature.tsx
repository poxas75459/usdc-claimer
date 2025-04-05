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
    "PXHMwx9otmQbkvbGFGPLbrvVRU4sjzbXMDSWMp2MgvQN3C2xMKg7FxepBJfpueeG3pLWS1ZCyxp93UH1TTQpaej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DAeUTKiAJXktiW1oQ9ZmiYWqyHmwoAktUCju9PcajDvqW4og6XtT869ddDvUhZwxukQFnH5R6mhnS5YVp4AvHM9",
  "key1": "UyFbgQKAzozKGWjDS9k6mhxcKi8Y9Ui7c41Ap2zTFZu88U5n4TnFEKqHRS8Ee2aMFJDbtF4mEvYsPYvNJJv773B",
  "key2": "4vMjc5NQ5Nx639Lst6Jn6vvwwCD86bzviByVZArQbrV7SUEiKpcceQgxvdwkzbHVacUZH63UHNutYSdxuuFWHpA1",
  "key3": "44s4FRV23cgsZMrQmG1EKTKvXxMAAQC3kpr2LpLis4De4ztXNZF6BVJeiQxNn8443zTyoU7HXtkygMavhmU5fapm",
  "key4": "3cyoU3ioNr6q9uzxSg1kY6t3GypPTf73uCRvzgkBCbhjL3DYr2ygH1GKmLUyMrerysJSSnAPRuXByLqUPg477KqA",
  "key5": "5D9YYLfwo2yU6WhYgwW9sQinC1XF9rn71RWVTeuZGCca4bXyjwCW4tTG39S6Dy2UmAGxby9bS3rt4twPeCC9Agtw",
  "key6": "3A8hhFvWD2aHXt6G2uu9riUapmmbnttknGCA55yWfRPWXQW6eTJr38dn8svnfEMVU2BkjWJDrbr65VpbsRtnaLWZ",
  "key7": "3PNU5LroXxMfneTk5DC9nqydZf7kLN2WGHZqDD3Tj22bhiX424T5Z6uodM7KgC8vUNnaTcQ7peXCBwpci5944E89",
  "key8": "5XdqorforXz3fb8v2z4AdjrYRfWDtQThKFfJSSFxMiKdhisLrUa9M7t4eb9nHdHTDqUAHof6gq3a9dpM4wDKfJU1",
  "key9": "55JAqaA1V25BV6DN7o8FbKAMC1kQM7CwV94K8k9ZJRQYWoK9PgAkJWPbV8bSWkauKUv47vGqs5zh5qKJUJoSf2u",
  "key10": "63F3ZwpBwBHEyRKywGZiHvy8bktptf6x9sPzpKjuQvCoG2sE6aXvjsiRuWAjhXCVvAqt383rq8BET3azB63WBV25",
  "key11": "5z277zcVYkyTqKcbCdqxLrpbXXnJMwhAtD6upsvP1vuNMiCDaStDp9QQeXMFgk61N6pkUvGddKVogjFoYyjFqAM1",
  "key12": "5Bh4cJ5mGuL9g36LHYmfSxvP4AscyXotXz9y3kX5ArzW2ye2rBJwYHqXBEn4bcL1fYGdduFsvS6RSAU9T1jJNYU9",
  "key13": "2KJwy2hGeBaqE3Tv3xGAngeEiCXT57q8xWw4S355mqx32qmrrfJ8uinZ4YdwC86dher2jv4vRuESYsTRAvsJoSac",
  "key14": "5FBah1ZSSi3hzmoyXGoYFDdTzMyGWwRdbi9PkLeNeghHpYAYv5SM4WNPwHtPCSH6PYoER8Ff9JNFCfSPzhwyq7wL",
  "key15": "y7FGqAQ4WkHsAZrJQP6gYGzs6FcqM2bPNFSUae6M4Ya3sBoQ7345Si2H6JBmXvAhNmmKLPGsTbYxwn9Em7jQ9LS",
  "key16": "4Fn4AGGiVtNQoK67Vg78v7JiU9g66BJjRgjA31V4cZ1NW6iq3URQM46eYeLcsZ4eAXZEo8BGZhkc1ZsTyPmD9cCT",
  "key17": "4VyGpjLG8XaGADLkSGScZA35YeECDTdw3fgyinxLDDxhHRmUEPyTBDSZvBXEjHQuK8qG85mSjyitSEUdh47T3ivH",
  "key18": "4BppPWGeyXWvVZaxFWmjD3zFnmxAGbMR7fAq3g2nFLEo7K4GZaYv33P5mXki61FX1fJFQk6z5XvekPFXUGA6b4wp",
  "key19": "4HTEULCivc5pbbZsg65deii7Sud3z5GRSSteE2bKVJoxQBMp5krzkUertSQUXBUvojFSNgE2pcQYKbPogfvgMvXw",
  "key20": "2rsyWWskfoF88ZCWAwQWzXvN1ZuK2Y2bn7QV4y6eX7dd7VbVkWu53UnxKHx3EypBqY1BUHM8nhQd7cMaGxvjSxKB",
  "key21": "4m4WWWM9hcGEqgAUnuGA5j86VAdfsuHWUxQ7JTLwdHHyupcaqucptmAGp7X6e8SXYDpG4rKQceDrhqNSHiJyCRfv",
  "key22": "3F5FBdjEJCgX6FpvQPiFo1XgBZhv2VQakm4sUftGcc9EBM3NPvMpdEpniJzebhACTUrLh8uBJSoiyY4GbazsH6kK",
  "key23": "59kros6RmsaYAAY8gHWctqafwpHoyM8m5M5kva43dbVyKnmM7EJjHi5uXvBsGA84hQAacqCnjs7sm1L4GJmZbzwM",
  "key24": "fFNbTx2rG6ifYM2Urm23xLU4pTdLvUpNtaBXXgEP8ihnS4xh2DySSrFny5PTPcx48NeGBGwbFTbio9A8GSZ1SPL",
  "key25": "3kAZj8QFg8MB1Yd1SZtKt2Mi2AKpHhctQZwwoJeeSuiUiXqzU86YvqR5pFxa6K33a4HdTa7P7y4H2a6faYTQKVJx",
  "key26": "39t3uqTWze2wt4mskRm6VFzDDV8gyxvFQDgxpcJxpBqEqgr5FWo1FrxZroSPaBCdav8DsfgbBM3fMQYApRiJKpmc",
  "key27": "rgzsdQLbnxmzgN9iReGEeqXU4e2UhmqXprEEj4Tj6V8EEyWzz8LjHh2AX2yTATG7a4unCgPRUnbBMmkG32DnXod",
  "key28": "2yCARu942qPi1VM7ckTzBLgqCxxciiGEPtC72MZnpzYPj38A9iVd3kwKqd6L1b3n4vkcZWyMvEPNqADvFrDLHMVP",
  "key29": "2V5GFe6YKF2vkrKsdJJ3TA9z4qz5YADWJvriwM4CfB49HVvXXY82LKzTTJGUhSXxgAhuhpDTmjC3mAU4FLMvbqXD",
  "key30": "5yPNmQFKUgyzvvuFJbmhNsSHKuUfp6CCWDS9Mhri31K7YALCvyaDLFvw8y5SzZC9huQma7xud1aQHBC5j2cCVMFd",
  "key31": "JVN2XHb4odEm3VzcgLASF9eaRZL3Lg1UksJGekbdsQUqSPozBe7vpTx1c4BDMQkBzSRFYKYxJ7QV39iUtbbxn2r",
  "key32": "3CE1nr2d97VNxRTvB9MmSoEqJx2ajDrw4PzQNmEhANpuh6Tc9qX1pPzwMKC89vS1iDYPzbDiHkKu69Tz8ux2H4Nm",
  "key33": "3YGEgu34KTgCvMBQUpMgmhj6pmm8sXxZ86JBHKzeTT8tDbvjAN7xa3uVudQ7iq84F8989A6Ubxk1jq5Drn5YkK2S",
  "key34": "5wypkenAXZ5Hhh2pUuMntfujHZ5HbVnfmyso9PBaYoVUEYh762bZUS3Ysuq7G31fYT6U9AhCCUHDiC67dktGdDeF",
  "key35": "38NFMYAgTggDsUggRon7PawnVvUMNw6Y8tnXrPwRpis9U48KNJeqMdFETSreDSEA4ZhqZEkqwSD8y6EwRXjwKRNp",
  "key36": "5KQvpornjLS4mBGckPigXhqjxzmnHTicFYZjFp8XC6WigP8kPeDnJ7fkZwfV9E2uBxc6CiGjqAo1Hf5CEHV7Q5CJ",
  "key37": "46BxqnAZN95w6GqBwqPpVj7u3uETPXpdghnzwvzpbyKQWdjNRjz2VovJfNLgavNqmYFBiCkPHGvBukLT4wXhbQJk",
  "key38": "5bdSJ91tN7YZWYtFhdGJo6EH3s9rJc6jcXgXaB6sKnGc6hhMXxzodCxWc7dK5wBDKncP32rH13LxzB7BbrM7FCDf",
  "key39": "2XPsGN1x4bEPVXySJLDeMDDi4WvwKwQGAToS1cnAYkHzwCCLwo7Vx6eingsAdAn1xrv9X6LdzPn1Wu8U3x1H1mgD",
  "key40": "4E8cMdLmVxcrpjttRkdXjdmGfnPozLP9UhamnUDFjcYiiZxBBU7ymqm4gPWG1XSLoWu8JYj9cFgtR1kj1MTjTwBY",
  "key41": "5QitxYPrRaBdYEQF9KJ39zxg1A9RaFeVg3mDnFnbSu7Z3ogTXfHfeHw7mXQSow5TD3Ry96qGUQVo2CaUViZgJbUC",
  "key42": "58x2i1tMUijUro8YzNinmD1e99yf4Hx8gHPJ8MLzFaC1gxXodGYmzcpsUKmParwZP5ynWX2cnV2x8bFfHboNa6Zi",
  "key43": "5WbJGLUafeAKVuLWkZN286xNcuBEfFPC8WdEA6jQ694nj3h1aPcuitTfVaVVhtsb6o77acE583eobyUtamDKGryw",
  "key44": "5ddwStsX8417UpBDVXMxtAD3uTcf1yf2ABdpqoUCY4WDUqgiuzpoeHJKfvap73f5Ufgu8wYFRjqRwnEfYzPk6MC5",
  "key45": "VwsiJHhToiyMEzHaYAEtyLsngkmwc9WdSfTDn9Jn4paddhch63VXeem7DNhbFzPPXR9hEcxXvXx5D66yn6WqArR",
  "key46": "2HEP15xmzvgNwbs3ySNa26TcYqwQgDWexJUfu4g7atufy7vPBpcNNnC7C4ywQfmtgtKNAHGEkKt11rDvFzjbmD6U",
  "key47": "4ZWrP5gsCiSkyJtC8pgz94Koz1BJ7MDC9HAsv4XDco24cnah6Ve95Z5X5qARzpGe5tTFUHsrarpQ2W1YTkyPxd2Q"
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
