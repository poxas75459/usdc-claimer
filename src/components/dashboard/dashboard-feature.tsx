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
    "3yEBg2WVoojTakaKTN23okkmJauadyq9uEs9M7qdfT1dUZ1NsYgZY9FKp1ydtLjtbAmugUDHrE42YUrqWT2sP1hB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KMFAeUtkmyYGeeqyETaD7tpKG3PrY9L7kx8N4vPErooVBHCaGaX2NX8FT9mF4N83SqQA8MYHuqbLVnvvHyCmw2e",
  "key1": "zWmAzj1azzQdWXERphzXdmuLJTizJ5w4Ce8dbviivMyEoppqPJWRV6K35PMbL79s8dnqfwKHFaPASLHEJxoFRaJ",
  "key2": "L8bZLNXPgjBvYo3ZbYhnVQ5oKDP6MMAZwU8piKp6YhAuCqXm76o8KCJ8F14fPxH1GtQ4QU2BuUQm7fsvWoZjTwx",
  "key3": "4Hg9aLmBHGGtu5EvytSVxF76R9LNRSaSZoEs7KR58DBuPkhzCoNtk4Mi1CxeSyqfzwE5xbcku646PknrkBz7nU8m",
  "key4": "3NF4zDEyETyzzVTKu5B1i2s6sAd4WdwC9XDDspzhZCob3a2Whg6JSX8V6CvkP2ocjfDJJJoaHkHwLNPhgetgw9kJ",
  "key5": "3t6eqyGtnpAGq2TqfQSqHnyNY9AAUpuXmdcvscaikprMnhQ75ShJ3fiwi4CHpNBpTiDUKdYdyYmuDAEep4fP8Tei",
  "key6": "5bAvNnjkbRSWLJVjtTNpcsDXxXKpmxbstBJsRbiqDUtkvV1RT5Fm1jZMZcGsnMHzHXnxyFUa5QdqFeyci1eVBjoq",
  "key7": "5ei7u3AEMdxUtzP1ceppyVMFDrDtuDezi2ZTytPn3FZgVewUixASNmmfae6UD1X7hRGy7G8eTDSfzLpLRieCvUAr",
  "key8": "4j63V16df43YNxVuq3tzkAJRoyHWPiy9mTLR84T9keyR5hD5MwGUsvti6qa6pU5SAsnV9WDri2crT3gdkNvaWLUP",
  "key9": "c8Mt4DiME2fazFimBM5zStpTpCwr9HPyG3k3uN5p8kbhrEizGXQANnE7VVLBQwnyvHpqu6cRWR9e8zxbkCwtw2M",
  "key10": "AhX42Y8X2YVz6ykAei7PGbLpz6epjoBZsDE4CvzRrftMsELqTcvhdzVnEiyLTtns6XMsGgnf9pdL1ExZUpoVSa2",
  "key11": "4uUhzMNoQ22nnQhhcMWzbg8drzSqQuunsBdt6n6MTTq3pYy3R751UsAWEFNDzwct1FxWCMvpaWpatwM3D9VwenfU",
  "key12": "etpubJVV5JZMfbsZmDXms7ihsZRMcbbjPfSBZpgmkjFguv2PAsWxj9ADPdsnaLSjPLJdko7ymMoP9pLCuK1H3uw",
  "key13": "3QuJStycSbHsXyi7YE5JGXQv2pdfTfhv13n3GZYC7G8zxVuW73dyhFsnoTHj36c5aXNPBUyDVo4tRjw9RVcpdbxp",
  "key14": "5dt5zMETwHzrJB9K9UALYfyxp6yyTWp8ikwWJ3PKF59wQ6ReVidpc5aX4MCW8zgpWWXomBEhR56rN711rfNC7DdS",
  "key15": "4nB9nVcXiLWmEB9JyRpUg4WerSGGjmE51Bpr1KdmEWjndRNKrMeWErFKZc66y42gZNXp3J5ZqD69Dcpj3RxXJRfp",
  "key16": "44iabgRPwJe9dxr3eKMEjexRiTT3YYg4r4NyZET3K5PbpZ6L9Quo1Jr6v5H4MUjqfNdqbmiEZpw4vE4zYupBYRoy",
  "key17": "3FSMEooqoUqmMQqu4AR6wFodcQTHja3ha6fiNcqLUp3ZckmhTDE3pmZfFdeCke6LGQEg34qKJkSKzR4Lkyac55Um",
  "key18": "3vWeVo82k7q5Ke8kqZ1U2MkUEXSNo2mpZdVCwQXMxdsZTMMH7tCvcdUvqCryFwvwzguJv34uuikNjrNJbo7fQt4j",
  "key19": "5uUqF5q2dM8hj7LHfTV4xrDi9WxcK2MA6z9kqZ5CzSToc9q8QxB5kuKkYgsgEszrSyrU2Ge6erXxJG6Mf6ZPPDDH",
  "key20": "4zodHhwHWLTESoeX4VYTwF5mtCZYtftTzazJBccwre2G1PeRmMKPpkvjaGQq3hiDWZM3PTcsBNwqfeSGtwtjXwz2",
  "key21": "67E3saivDJG91rdd33mcMXnMjG1q7yqheh81nNkJvYz6J38QwqUH9Mhh7q2YsxvKGzc2L34ZJVwjQzd5e4pZgfus",
  "key22": "5sDgE5kWM5iUDKw19UeXszKpPhAjC1xvhMK4JXsSEwR8Nv9fmgieAHCejKT79sNYUoaG4u5ZvgzA37gzqsDyDoU1",
  "key23": "3Fmq6kKEHu8deZHo3ziSkjCebwzgTRUBiUw2KoQ6Q26CYvq4BEHbDdxxQnNShtrP4uDn3XtWZFFkxWotUoBQG4bw",
  "key24": "4TiHkBHEWfLmnPckFNESJPwCmXb16WWZ5s1rsKSJ85TQyzYgsVjix4HCd8VKYGdHNTv9UMshf6TxTjkQj81b9m9V",
  "key25": "5Ur54V68w4W5QF4rwEN4NbcuBxDKtbjMAH4net1uTYNM6gvzxmMd27XdyGuJk4s4dyKTuMC3XLHWRCAoUKuxqUvq",
  "key26": "ZzksHbLnU7jmr22una8M5KFH1YQPPZFDLjyzHJ4nbsLMNZvLS4FTt2JyGmqYwH8FdXNJLDoLju1VzsgFXwZR6Af",
  "key27": "3aWRbFFyPW8s6vv5qigp546iSixdWQ9vMyYwmFkZxP2nZjerh1zTrz9UzfRT7SHXDva9nNnjKRH8ZfbZV61kDxZZ",
  "key28": "4EQjp3k9K8wBnmef3xt4495Le2fMVDUVdEfc8QmTwJkVP6VFEJLRHhFWgaEL4UZoyXLukbphA8yD9KU4qcyJQQ12",
  "key29": "3TpchzFtZ7dZ9uWf8FmsaXhUcLUNC3YBHBSbgJLYYQUt81kjvyNq4R6vGrK6NhakZ1JyjLcdu4aykviR4VYNqg3r",
  "key30": "3BddC5zUMhbRXYnt15yx5qt4MsNdHNE6oP9mnsmDZn2NSSVoHpvehENyXuXXByTuytfWzzL9LNnnhrN9nfv3uMPw",
  "key31": "3MpCLfjtAUcRZEv2Z2MowAoZAxERXeXLHZvXHkWgATVJEtHZUYwCicECm7W5ZuV2xvtNJbbiMFG32Rq3ZmkMSVy8",
  "key32": "yqPVPhK41VqNWuk4Tt9YiKpUFoK4J4im4BJQax3Eao9ND4jvhLKyZxy2AFZrktXczTc1YLYySLcwDMderguXfWm",
  "key33": "32HgxzGtyrRSRZypUgTqmujy2TXrp5rMYuU23bBiKHFgbeKAfcWrx946pnrhoNkXBU2trvmu4FCJMoR62U9BCLEh",
  "key34": "59hZ5DgykbwVbqdtBj4XLPyk9DC7pmC4C5mts3Jtfr3rCU3TkttXeJtmkwhQp9XD3dnJ5kZtexepvKzUKNGsyMv2",
  "key35": "2DiBeMvAdJ5oziqCa4HhaeGqontmB7ErDsdpt68MhCxhEeX5s7D7QvjuXaCyBarJ9bNG9MAEsM6JYP6jMzL7zr9j",
  "key36": "4YmVuMPV4PkxUZuS4T25oK2L8WmrmALyeGM37oHnK1LNv3xnnYTTsEoXHv4eunK2xQNRExzmoQayoeZL9hWCQ21C",
  "key37": "4JjCYYvKmRTSuP29a7WQAyCjZfC2GJgjnrDexKYNa4qRjReJnkq2LSPNLfJ9RGgsuFg8sdeBphR3vUHJ3bUsRRzb",
  "key38": "2wKkw1vHPycR8WWnVztcxaqhAaMBERnwuhoEv1sU5uhd8t3DzBfgTZzg4AiEaF4dQS85nts5hSbqD7dVeKRbrb9q",
  "key39": "3A7XUkWXxzRmfLnDPNb6ZU7kagZ1FCH1ZGKmKLdtVgvKnpHcgb2WSXUp9QuEo9ZwUxCtsSuLAQjq6GjX8dEKBZNj",
  "key40": "3Hp5XpSfUb1uWage7FfMRSUMXhxb71cEketAKVuCHbxzzTDPuCHaWwYrZw9mYM9ANdAxyiLjoXU6k5X7hVLDxuJS",
  "key41": "g6jquRBGVhX97dLbXKitL99jsexaBJqstrNjU6ATCgz5G1QpbMUAT9ADFPDXLKUMLu5NuPTaWrg7diznWftght1",
  "key42": "5z32c7jspKJvUPdUjmSYZnEt7TXJUw49MzBZ5xUTMpVRqiBXT1puAaYrF8mnfyT7Qph7b1LWG65Jz8JkApQpNMqc",
  "key43": "5gj2e7rU86m77B4Pu8wn9WPQFbmYtY8KCCEtGtnesKeFaQ1BdYybFb99n8CX83DoHvr1DdvDtpUpp15uVpYVF4Sr"
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
