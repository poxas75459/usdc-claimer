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
    "3g4wJhMKp3UzvGZR2rjpNJEudSPfvGiVNmdfnhFMNvVtwNB7r98TCQ1Dmvf1yyqnn4skWfDajECjqN5VewaupBy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZS6VJXku98xScEqbov8xQ9VXkFasWtmG3Dzmxj8p6qzceB6uznY91eZJEZmeEem3rmbAjEW2EsNnHK3t1hBbmw",
  "key1": "3P8ZrQ6VHj31GZXYZzfkiNY81TUf7tEhHA14S5rnYTuwivngGEButerHYmPM3n6G3FSD5pXa9tHE8hmgGGM7aAd8",
  "key2": "3Zu6mCD8nJYnnd5Vwq1eaj9pxDywQA1sP43TprK58xAzVXkothY934DN5G4wA72NSUKSzoPVBcn4EngNoWEi9BbM",
  "key3": "2bJxpXBE5rKsXvHLPySWp8UWrJb2uRmL6R5jFDfHfkVHujCjRk1UkLXgVx9kcKd8YNEyhaPwNZc61ASU1tMdG7Yh",
  "key4": "46pmsHENVW8tY3ADvhBat2gi4xFKNLG3HF873haBpoDPgTUukpTyDGLKrhFzrtQdDi1QpoKf8H7QPwEE8SNqV4x2",
  "key5": "2mPPjyDVuPx91avEfREodmm6H6b9zxoE5EF57BR4Bo8CLk7PYtKGiQevFg6MspK9JpUtcJVgP8jpYNnqV259MQgz",
  "key6": "6xo6uN9Ngkwq5yS38KeLyWsPQcDyTJR1pQadRKkZDbLBaVTJC3E5wb58XucWyPbPfuNN27ycCt1R8bhtSe9zJrE",
  "key7": "3DgMdWpi27CqaHaPhN3GrpqUTneTtj9ru5fUBg6wqrpE4pJ7p5MY7snnJwgvCDewyVQsjKBqKd7YYLF6ot9gDERR",
  "key8": "2jBWfEsqNZqZoGfrQ6MjrZourLPMDJNJ6jCra7vcHba2BGYdm5FuCustcAzooNufiFKKi124pc1XS9ptZA23Nx8B",
  "key9": "39y7wMFANQT1gSJSvxv1RemwFMXaDAwtrnxkK6qN3A2ohDBhwUw2B15tnTc7phmqC6Pam6jTLBsmwjCbhGUR8gAs",
  "key10": "3gcihs8zUpErGTTdbKcZmhdcoY5PfPkAV6kP3sqbYYt9EMBD3XMC92vWf95ZZ1GLV9RArVCedD3wmQ6H4ZXEfnfK",
  "key11": "5f4ZutKVL6kduEfJFv8JQqpbS5TuVLscDCwg16ZV4ZMTqrH7ULiS938dNUXnBzLgG4ReUGKsRGrYkktSxsyhEyWW",
  "key12": "3exRDwwmJ3DrZBqRKbBS1HfAewepZajJc47ToUw6uiJP2qXCEqL4usKLkVcF9AN4pHz3n3mxGDpU6grBbnSbvB1T",
  "key13": "SjZeXaCoUmz3HS7V349BxB54ejartJ7b78NDwQ1DxjoXx82q7FGAAgwufwnP7JBivwQbuNYXBcNELAqHwRoM14y",
  "key14": "3CjL7PyrtA353rxBupfmo5qxL3XeKrNTDJd2YViZuekuToh1XW2zHj8yUJqkQnzqnh9CJW4zTTcsTxcKBfyANpNV",
  "key15": "2oPHQ5o17w2QtaQm3KFFSfyUuohJmfJTtjQZRFijuwM9Uboa5yc6X48MEeLReeMytJRQBiYf6XryW1ow39iNEM5c",
  "key16": "5YFozw9AhfsnUwQnQ3vPPz3PuEYijw2jqrStX4ytVjAuitKp6rLXbwLrQachKYwpq7LvdpywwZa99H1ryhNsmkFz",
  "key17": "DCnUA7KavNoxfkUeS2jdNmEHxh5P3cchas2fkRM5QsRvVsdtE5SWvKXWnyzRsTEpzB9QvdtELxwfnPzKDWnHDVt",
  "key18": "4HgaESbr8VU3DEDCQEFcguoHWdL5d4Hs9Z2SgvM5TenRwcArRQEdEQ2P4Zerd4hk6t6gq7MsCi83GUDDGH6W4MCE",
  "key19": "5zciJTYvDY8hCosDedBCgT9oes3nXPiGJ8RoGS9yjMXVZaTFH2VSPro2MYkPPVbFtQeT8sCa1LLfJv2CZ6FDZYaT",
  "key20": "2heWV9v9AN5KtdqMJLmntW5hZgbhgDZMyzPRuYzdnbhffsYqqa9xzqe4AYjX9gp65oXzRd4CtReypb2xz6LCijoC",
  "key21": "3sdmum9Gy1AEV5uVDtNrLpBVEY5g52YXL2BwMqsbNznkLQvcX5W6U1vZLzUdBQ4xM1yJaXkyie55kYUekNWLXNbN",
  "key22": "2kM8uo3DUi7fFCw6vY9e1UeFufrqHdnXScdyET5s3hgiUJ5J4vXTHqLy3kcMmgrBzmC5imAJupybdJKZxEJh2xwk",
  "key23": "4a2K8GDJQnH6JQF5sPSLrXn9V63896NHDfJgtH5nbVwjGJcqbmtyGxp5WdY8uSCYyJ8C1P4AFztJaywDsrkew8td",
  "key24": "3smSHftsFAEcQnPtHzqwEbZzsBogEZv5Cjf5ViAjLtcgbyevhKweDThjUCNM3i1f4A6WJk1QvCtmZHbD1prTcD4g",
  "key25": "624oRSsyti6XLy6uQ5Qg9ewjp58o3WgNbaijxauW9sLPEvEkD1aCq7Vced8cNtdSiXphKjF9nSgc5DyVD3Ry2AYJ",
  "key26": "29RR1hMsxPSCeu1eanMYqWyEps4Kjp7rrMnVsm9JtgmETnsM2x7WsYp5tbkThkpFPFMKh4Bek1fB858uBbKgkdqm",
  "key27": "3jrcgZGKuJHes1mJTQ9Woe3eQnBvboaV1wdKNMNJZppFedxu8CQzNZ5i4sCj1m33JRNag8LBbZEv3VksVBYkdCoS",
  "key28": "4yGsMqwYuFNDrxGqBeJMzRRu7mowc58MNa68qEKeBdg1GUN1NU3MPuWfEsT5A73Ro2p36qy52jg2fzJ3tN57CcA1",
  "key29": "56CxSzQed45tBJxus5gW3pWXi1eW3qubUVEbpQmrB4HsTkStf1gbQ89Lj1ds6yGCHqUegcuGoebCyAwg4tKavpHo",
  "key30": "3BznXiyrEujvGEHL6mpKCf8u9cfFNgUXJASmqkmiRr1bfHV5xpHdK4w1hntxRpDooCjM3JNbvo7fDVAVYNsYvpex",
  "key31": "56AwRWMoN2EYrzCKY3wYBucrarR69tTUJEacjxZTCp2zLU9JLtqzD6RxFfithWVSWHwu56i1wEsR6XTr9yCyDCgz",
  "key32": "36t7QcjdUzL3mdn4PvzFQQRiqfh8niRTjji1D6SZyac1RYn98hsG6su63MPPh62wSTeeK2kxN4oxc8Tdakm3MYZb",
  "key33": "3pnyQK692ESpK8i1pUTq8Wi5uBL4tCiredLaHL3hsyeL88Rii919gXQaQqSJo2TudLgpXNmeMhxBasjue9vJs4G6",
  "key34": "5skZoM84k4QUtF3iYQedfx1VtD9N1NCZMED6d2ArduEbr7x7GMRw1Mz2CZQPykLDNezqs7VXRNZEoB5BM4YAtaCY",
  "key35": "38KP3i5SaLuNEdcAiAJfCuGnC4bGMydAYLktmrbGig8gNesWkKNEEsQEEYCr3xqCpFnFjgYEX7H3Yss1sh1b2VfE",
  "key36": "1tySRLZFpnBthi9wQushp54REyZG4oB7f7hQ8Ugh8gNQde2Z19PRmifhwY9MoQFfFtK9dvCdYrSG8TH71XnrcHL",
  "key37": "4TRscAS7HHta6CWF1u2wE9wvjKoVvCmxF1wKCFzjC4MyofW7H5JUaNCTFRFNNfL7y4fYto7owwak69394G2FjuLD",
  "key38": "2fR3NvDY6pXsAfgM7dJDXyi5rJhBP7FpguRqbeNucxHzowFGvoNBJqZGd3jiV41pNHPadFxzM7C4nXn8hM36LL42",
  "key39": "4faSA7pq1orMv1wNqCY7imgJpAiQijHgJXA1Pz68oYkZnii622kjhUiCePpHVM7i69DVu81LSRGLhidVaFYDdPTC",
  "key40": "3faLNd1u4u56gsmuSSrLKPRFHArucmKKk869q3fkcdUmM8miL21VxDPvsBFMuR3i2gk6FpPEK3c5zaFMyPLaFSAw",
  "key41": "4WLLbM8xgL2vDpsZ6h1C87GBxJMytcXiLm5tVH6haEkEbMqatQ86bp54JfH4UaQ2HhXWB1xBXdGkZRqnZki4ojUb",
  "key42": "4eHEZJkfN5JW3Yj1BoNpSCkHAU6P5noowdTUtgrcYe4YFTpkLkLRLHVYNjVJqziyxiXnFUBdEeemzC9ADL5FzLcp",
  "key43": "3brm9rp43ZZC5m9YiUtiwLDfzjmKWqMU7gU6fZvbKtZCBXWLYPdnKAYR7orcS7bCcQaUJfqGneGkC2thqN5RGVR",
  "key44": "3gV8R7hr9YjkDZsSuPwXG26zA5GHGF64idBQBVF543AkBFh4B6nfPXMW5T8dMfQco6iZNz5YG6zdWXJdPE3F9PjS",
  "key45": "5KuaJpZdjheC1yAmPZMvMhYczu1aUyddJ6qSh8Tw35dgX7XR9UM8WUwZdhiUGdoaivLq7Gpbrj41f89y4exSm2wA",
  "key46": "31ocrPmt6ardxYLoQZqYpq3N6apo9G6rsZ5yxrt4DCZ2WWmDRToGxMFhxLwYbhULNaZQZRCZq66YJ4yojKMYQzJ4",
  "key47": "58GdSMhuzFVMa4LnmiHgyiiX7nbrAX9b1kaDnBtzBhHbJHhGLFKHx73ApMFVGm17uhnrT3KWMsyRTstHdsmai4q5"
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
