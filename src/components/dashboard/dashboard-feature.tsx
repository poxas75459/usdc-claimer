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
    "5pm5mekBMyZmRqhCJ9yE6wHzGaCQwDotaoZU8e8oxhiwRvyed4SoeCZSMEqyHvA85DrGRLLtAz6AmzZ6TnQio2Cj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JjcqeXwTfcsQ267mnk5xcp1a86qf1jnzmG9FEnkyEfb8KpT95h4j1ibnJoKtCd2SzZrLR6Ln3HDih4WEGG3nPfK",
  "key1": "58VMKSEcZpeKUQ6ve4dPY9nG3Y4QaXBtYjve6Vm8HmG4MUAaro92txbvSZA4LAWMRZcGDE4RTFXm3umkiafuEhC3",
  "key2": "2EXoo1EFhimdWGdRqBBCzUBzEFHVNit4kPrs9mfUkbdnwaU4zkPvyULTCxTzgfnZEMN381Yu9mu8JF8BSW1jpt3C",
  "key3": "3CVTB7BongxrEU2RsxWaBVoq6XYW7V7S6mrzzLKCmAymzsgaTPiTWDYQbDnGdVXvuzVkci7fJQZDYCZGoPuzrYq7",
  "key4": "2MtQFE96y9jeXrBKKCpnKHfV4LqYD4F6NZYWbfyJEgYFrSFDhMe9bCeozPR6msyZ6s1CbHdwvC8Z6ypS3xtaBEtR",
  "key5": "2HuDb6SQgh6u8J6mJMxkmFuXSEWvLEgDiKFm8nyBrgVDiTeb8Ck3dSuCJj3Htg9oZvhfGu4bqAvEeoP82Zhy94YU",
  "key6": "4jScYGyUJspv2gQFsoEVDw1moC9tnkjHyyaoNj8pv6MgDMbppP3FHyEnHwcbu6qTGVj4PDBRbYv3cpxM6FMU641c",
  "key7": "2VvKYEjTMrTwLv2uDqhPg76XFkbLT8NVkHNGsrRuDoFH4iRjHUY4MUtxHFvDVqzMWeg2EBFwFheUfegYhmQYEzCD",
  "key8": "3FgSj5UYSfsFdgR7nYHpar3EESvA1g925iziYFCmraJGZqSDMuTzkpYFgxVKwRNJbhioFq3S8CvbfdiRsVrkbHnu",
  "key9": "rHPJwpT3t3Nd266dmZzVu4c2oB7w4BwsgW99SU6Jtce2k5K1YRb8qjBx9c5yP9jvMnDcjA8WXyYM6ycXMrn5m9D",
  "key10": "2YJbCbrSWg5y18LHUnAudbMwCDSY4zCZg1cH5hAWRE41gG4yXRCHiZAQSuMKGwjsq7Gonmm4b52WWjJx2r3My6ET",
  "key11": "LgiXisHSGWwuHCmJwKyGNsc86WVSKTE6GL6zNhTk5eoT7CEVUv4psiY4oMeRcmPH7VXXhTrrZxb1BnDHbVhoWrm",
  "key12": "5cveivtzBtdtpsAgAR3iBfsYx7XYAcKCRWXKy5aCG6za4mCxGsd93vV9yDGdnNnd2tTVp82cM1SNf19XiSMAMhUB",
  "key13": "46YpxAZczGhiA3uYdqoZ3zTczJbxwyyKqz5j5JPmRYb1WeFFMM7QBhjzMiqK3ZqrcrLf4bo8gXCjP14dTUgFjz96",
  "key14": "59obSHTCXPv5rdwCcCvp1bvwQP44rHNZnVfHTfyRnSmK4Nq9xK1RLq5iaqo1xwtuPWDznUxGr6WLz4ZiJMHpaRHH",
  "key15": "4YdJARKyqfeczJ2Y2MtNQtVauChRtdS5meqXEk9nZTg2bw9kRr4JdJjJNqtSAMnuuDXBJnutJPtewXVXPJNPtNUe",
  "key16": "bYgPnDT8JFA4mX9A1xcdQ8oYbKAhsEkTUuQuVSXG35aphwG1zH3d4oekP9nau5Ti6nGoFgzdHDf2MJQ4sCETaUK",
  "key17": "3AdVhCDvXBTidFt543bzYJZWzcikbpRHNGtjecJpWUHaDE2vcuRpJNY3TmaUwV6Vm1tuhRcG1nQ2zp6Xo4JB1NtC",
  "key18": "2jsC89YPFaXCsu1k1Nn6VQkFje3yd3eUyuj6yvn27phNeAGLSMKKrb4KFp7khhKjULfBmsMytixPJsS4qWdJMCYi",
  "key19": "2BL3hZuZQL2HpAacN1VeGe7bEgjqbRrZjHcj57zZhSZGhvmQxhcBqZaG5WwUJfaJ6TuipNucUpsrLmUJAXCoCCnT",
  "key20": "5eBZ3AUXmRhdgju8ePEM4suz7Mkd6ahu2geSfpZrxL9jZSoqDEqB6U8sCYgpRft61WUuv37yMqe4MR7j6vUQs5sC",
  "key21": "37e7KP4iZhtFsUVQNNTU48ru5KNyHa1zNV1UF4SGjRTa7iBAo2u5Kxm9QA8MT5ykuBQ6yYvXdmjtEJptpYd1vSj2",
  "key22": "3ff8LWZKwPhcr7WX7i6FYa5XAs5xkUhoPeQuLp7rEArrLKj4oJWw8DLo8gCUsAwj7WVjBvCvw5Qfs1yDzdbSNjE5",
  "key23": "4MFH2r4gkUnhzt57oCW3oP1XKx6G4ciu2qhsibbozitfct1vWPVwoXNbTaS8uQk8F3QWzkbAZyGyttqFfuKeTke4",
  "key24": "4ri2u6w9chsReX4s55ktbN98uP1SNFMfJWSsn2k4FaPeQtuyDtsnC9hq1i68E5qfycaJpzuq2HchhTpt6oCvmnz9",
  "key25": "4rK9QdYwpwp9xSL2jqagesbXhZt51ZwSc4DpfJpDtoV89i1Xh5HgnV5ZDqFUvuyvBicoAugFdN2dQ4YNkquthdsz",
  "key26": "2cC6vrdQuDvaAkvfgEdoF7oPT76unN3j9nvs28juogfkqScZcWBtDws9XDaZS5Em9zddUZkPFv4NUApJTFuvRA2w",
  "key27": "5R9UEnSQ7t3s5yh1Bt9ZbZ8wGX2RnCjhbsauraeWLp74ePDKaiJn8Qd4sRzrU9bHy28sFpdrr22Z7XorTJHL7Gqn",
  "key28": "5oBYr7f6PqLfmRrK9f5Jg1REFiiqMmBdCaQ7s9BhVPpmuZmWfoBe9d42iDcXfn26qLn3r5GCHUyd4kkKoP1gMnNv",
  "key29": "4tctXNspJqdD4M52NNLSQqwHHdm27sLUADV9Dgr78XsBrnnXihs1M7aHwJTEyR7PXCDMP2pHCqGPmQFfdbq4XqPs",
  "key30": "2CcaXjq3nnUbufHV6Qz9dSCsFYtiF9Ps9vU9DwKXUzx5ZFa6fzDvp9uVy9SPxCpUy71gUDADaqdfXNYGMrs2QGtG",
  "key31": "2JHj6Smxp7C2eE78iYEqy7gJKWQf9z3VESdqaJcgk8CfUARgJW9Jgez8TFrHASYqT226naKETma3wJnngRtKALg3",
  "key32": "5S6srytFVJTvjswaLhATavQXDBYs2kp7gFQvNftTwQ21xr2UWVBaV7Fmr1F9uXUHVvHmhUDsJpZKa499CJQj7X8e",
  "key33": "2J6nZhRrfhndyWMPXaNFr5Wsu3NH8sgG8R2a47aCoYK3P5HnFPXBXCvgVApiEBWFkk4F7p7jhNu1iA2K6JRi38De",
  "key34": "2a1evjHSGxJvtWLdUkvJRFAMaaCpsbHZf8C2rusTFHt9Kmo4AnFQwBaKqKRSocMvC5DvmpuxW66CxySTqimBqdNH",
  "key35": "3HxHxUKVbwtmaQjV2KWR1DWm8kuR4w4BqJ9wViM7BKMGJMiBk3uHDpfVVxuLMUhywye4Hkk3Ep8ykJ1xVE6rxwXs",
  "key36": "UUKVQ8mKD8Agz7yoZmF3kXcbwt23jE1J8Sr7et6kUKxy4kNxtdvosZpRfhEbdwpgXruKdvD3a3Vex5FrGXSEjMF",
  "key37": "2aNALeCGvfb4UDboXPE4LbYEVZf3GFQUeGL9NNHNkeA42ATzD4JZdENrGVXDWcyVuwW26CTNrPJsS3cLoMDrYxgC",
  "key38": "4EkxMJa3cFsYJDRxMkCu7LShUgBuoUMB6BHgiLZHLvxhdfuhdEsQzWsb38aYGbX3RGh63tfokAgN4jdvp1C1NGiC",
  "key39": "3uzvWnTkrfdmmu9vTvGnQfneCdFK2noRDZgKGTTHgnMKZAREpzPuDfTZWnL6kFnfn2BoYxisXjnxN32EG3HrjMxU",
  "key40": "4gzojaoXtrtfWXenDaDyBNqw6w1bY6h55yVj9RJP52CNnokBPgsrGP7bqUdXrArgV82Zkc9z2wtWP3BAnbREWADc",
  "key41": "2VfjuPFJecF5jHCZMef6b8c1sQatwv46a4o1Z3B7eEPEKcZijLtvqr4nEP1nzcsxeeE7qGgH1bDTgind1yCScEaS",
  "key42": "5DDfTiGjswcMo1gk93RZEy2AYcfoTodfdYfqKae76m2ii7udKQLqPiGiBEY5brvrv1AzWuu7v7RvY6D1nnMgSUsd",
  "key43": "46tSvzNyAaLowGGdWxD6gKEbJh8MBYLyznzKZRJGNroUMcrzWY9o21s6g6B5k8NRNB4d4RT7Er1pyZuWj696v5xL",
  "key44": "2sbt8SBESd8UesgtpSLiXHcWcQG8awMTeP3vKor2pqL1d3pjdYUFbM7J1KcKFG3YmNWv68zHYD68XJUhctrM9WTF",
  "key45": "2PSu14ReYtgmesUMJoJdBwXMfFCUbaaXJmLhgosHKER2orHHGG3YFDbGxEKo8NKVy98wXBrz4t19S8mBp6rDHNNx",
  "key46": "4THv1jycntUmPjTEP44XkgDGijBx2JxxZBNXowWGfuhmRbfoq86zmbzC5ogXeTEcERpDe5c3SSNY8ehWCLZwVD7e",
  "key47": "3itJATRmW7rrqpJSrXraebXvQyYxNGCfRsCYMQ22qdJBBb5e8JPz2C6rLiNfip1UtZ2HTgdb626uFSfSaSDDVYvd",
  "key48": "5iZWPd4ibJu1J6pidmRKpAaEjButoP68fojJy2qRf4zMxr9mmTZR92aSDUPKXYxa2FfSiapFA23kUB4Lj9pxnsMd",
  "key49": "2B4UsJo6QeoF5iTHJHZGe2mLGtYnk3EH9X1E8FAbhDmiqjdRvpFW6rwSf1fhnWgBD4FW8mGa3uBkSE5jVVAVRQFK"
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
