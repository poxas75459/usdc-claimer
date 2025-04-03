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
    "FqEKPk9f5ui2QM1FZqiA1rJNgrUYv97pNt7jr4hkL4fJuJeTMfsyrP5qQySSqpHwjoLH96RJ7w8aFEfonWU93KV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hoDTPNC2Cj7aAoLADbsNKz4bcDFEstSg1rEP93pXDbPnL3pDDBy4ghwbAQAJ9yoH7N1SU43yMupXfv3JKkQkjae",
  "key1": "2R8GewaH9ZGPFmuWkEpRXgiA3DPzzD377V6nRJaGPVhpKGVN48nAwnBKLuwBkmxeBr1B89CbExX9KRbcuoaTZ4HZ",
  "key2": "3Mzs4JMBQfPgcGoA1uW1BsPKKeXjTNva3fijXEh5i5YqEUPdeqB53hmAx8ahSS8mTjvkrm1hTippDuhVEToNe6kN",
  "key3": "44k3TS498B3i4gBY6oDTqLGcnLyzZxRYcH3G9RudDcyo9qL485KgKpEvX3WTzFnRcezsLX985EpZmRBD1ediig1G",
  "key4": "3pWySB6WPZ7VtjFErPrQwfyQe35DFSa3b66zPjPMN1ghf6VhhBc1oPhmpA3yaGP8NXhVm3e2tBRkUjvScdzUDxid",
  "key5": "onjN1gBTub8Sq3ptx3HEaZPAQKVLtTLF3ZK8eckvRhMYfKeTtXARGdAH7vBaXjnq41BWgZT3b7hnpcehF39gzyr",
  "key6": "2z2qJ31b3UwGyvTrtzS4K9gTiygPvHht6qcn7d35NaJ3ovexpd1URpY2D45o1J5CcaJpeNrgwF3JoVBjid9ZnRLM",
  "key7": "Kqg6XnUbyk1fS4xwCeXoUG21Lhx9UDyMXNQuZJtRNoTn5Bj2YrcagasUxei9Anr9poCCBrFszn2WYACGRA9NBsZ",
  "key8": "PWhkmgNT4XFpjdtA8dvfCrzDPh2vVWR1K4FZNyegzPFcSopQ2UUKYgrYsYZZd4aYnmE4pxxJrEJw6eaAU1Ngo4z",
  "key9": "3TxiEr5FsqE9AVJHwqGMAqJQ8Qzaa9C9Zqxq99mF7Aq7g3W3gDWto2e53oQgG1Jk7C2mLvjPLQHVwSSTPH8QrXx5",
  "key10": "5i4GqAru7yEtCQdzYgEyWgpQHdm9HbFxt472RxU7YjqXKrsVprKkHiJ63bcpcNaRqaTZjM4FzzpwTx7oWgWnrP5B",
  "key11": "3gkxbT4wDNPcvWzYLBEE7h1UgNr4Zyi6Wygn1HKQ4ULMLZuqZpdwhCgputusQQbAfejzM3nBPbHfKVC35KesPtwE",
  "key12": "5ekN7xrhk5b9BUGMQ58ps1kM6fpqfbLMhwSFzjsFo5Po1LKcKjJJP4cbs8Vj2JgQQURTMmm3jrN8C3nTHJeuqY4E",
  "key13": "cmuk3HDBLT26MoUTuVCt9t3mN2Rh8kuTnB31eozFwMNeoHD5KMbiLs9padiMtivNb5kGh76R5tWfCNyFX8EzUiv",
  "key14": "4D4mdcCEJvCzt4R3aYoLfPNxFLfiNhsftB68n5UvsSY1krMHVkAZ2LprUNv2oSZkoAf2q5dTgQ7AYVMq49KVni12",
  "key15": "32ywux98c1XXbdtwBBfZUBLCXmAJwxnB38Q3LmQVmzhh2gb9d55r8vzFp8PCxP6ZVwXq6FURfSAs9TB8mzFWRbyt",
  "key16": "5KtNSCSzMc8TBVBgXNsrGFJeUC3wXy7173kakEKPXcp6LhjQckJ3k4LERrvRhe7xjdqYyXfqUfUfMWpvMNf84uhK",
  "key17": "2Kwcd8xLqZkREBzUm2vXkLQ1mXJqX2FtsnNSkV2RfhuMUTwE687XnigyYr1ZSaP6JkBAR4DqqNrMzW3afK52SuAG",
  "key18": "5xRogcdwfg4K1fVsiHssHyehnrBe4hERJvEHx3QNggBj74NuyjritU1niB2naPXRq9iGHwf9727qwu48Mbj6yaK8",
  "key19": "3RheSox4ZUozEBxMby6EgdxUBTvp2WkKuXk5JLjkRNYqEDJbuFzZ719tQ9MUpQRsgFaQrd896jEmRR6ePtLh1dJX",
  "key20": "2pf5c57AVWyrwbPGCCeNFJC6X32ACbKx5XBzM3AZQDGgsGh1DJ8mNi2wgErgJ56QGutpsRg2SBP4eUcscBjvoq8b",
  "key21": "3peGR2FqjLqioXQKTHNUbixPYsVJEdrnceAMdBmTa6PyBBhEraevxpFQxgEsSLLmN2wBRiC2q5W2uUt7CZLL6fQZ",
  "key22": "3synFJSW8M4m22x3tTispDRoGLFfDcqs2WRQsz7CQRuMMMM4PHJMMeY1uhQMqMDbQdioNsmWYXj12veQmsHynria",
  "key23": "2rUCcofKJ6yBjJUA9nfAuFmQB7DnRe1gpe38fFYKBsefR8P3pp1gLic366ZNr2VhX7CJNBhLhrYdiGzatg4E2rXx",
  "key24": "5Lxr6wDMrBX75gxvycs4bkSbpCrEDeLoc1YdDdYCF16mNdD2VYFhVeXgGKmshMYHXryZDnSc9svCByimccHvLRit",
  "key25": "5NE757c1sFcwuuoe2VXvgdUVDEoKS3BS4e5zmq3Tq67m2NHidXzzU53Me9qYpG1dgXgZtfKHUsoZ3itpEBKgujRG",
  "key26": "5XLAKmv4KfrDwJnYtm6dLuJpD8Afp5pFwhXETWSdRjaWTQoT2ASfqMjdEC1caHwBwmamjM8aQbLrpwgy7QL3W3Gu",
  "key27": "tXjiAPxfbKcgGPu116bnAou2Yjx1eXuJsagD4SKf69JEugaBDGt9feFwLfZZrQgvLfkgxCXTUrBgMVe1zTv6tGR",
  "key28": "4PF76x9sgWkdGFpct53kVVNPYTwMW1vugJCTYTqvxt7UynpbCEs3GgyXFFA7nFLtNnwdfnA43HErA71h7AM5noem",
  "key29": "4CwKsgDRZzMtmyr2fvQbrwnThtJzmm3aML7QBscQjcujUnuKHZ7JXfKjzaGqU91zwgCoqJ2RUE2iQThFy8NuQ39N",
  "key30": "5v4G5SpHot6F2rAV74eZzBGamx5HXamC2RgtToE1LxHkuRSUrnxUFNsCchTDkswD67CVgCzedyhN9YadtgjnAH3x",
  "key31": "PnBr8CtAs1bmyRGDP4awpfbu9q4eVNG9kX3YawzTEjBDhvw6AeB2ffkuHk6n5VQFbHW5n2CnT6KetGSqQxs9kw3",
  "key32": "J444k79khmcQgE3gzUaxnDMtAWh7gpWb1qj5fw16atYSExByfd5HyayqPohCgr53yfyeCenfPtcFRpeqGhsCZfX",
  "key33": "3rm8pRJBrYExygdWKP7kYjU4QZFVyDuQLABKaSjR3NizYgs2S83qGSiEyAuvmpTtxvnxPoZauDEAp1q5VLZUMcD5",
  "key34": "3p7U3StXD9sST4sbA1ruKF4PfrX8AqvWD74mfAaG4YrCmwCbbZMNLf8RoPQCp7zpeh71jdUHc1nyJ7t1yjsRAMnZ",
  "key35": "2JzAz9EnT6kyAFDeHbVcvR4EY5UAn1rgc3GatJQ1iesTtVkxHY9Rc6ndKxY7G5j8WKwQy6fV4VUTQWXRCFxSzy5H",
  "key36": "UEtf6FoXcj42vegtwfRYkYUt4BpwCKYBJpRCvkoE1CX1i8CWjtzw2dEzT9jR3DiCRi1H2mvC1gUabffuHWXtiZy",
  "key37": "3FkjYLEPACLs72Dvc244JxmvRNkphDStiTkajQ3qDnVVPn5642poVhVVFDiyb4cfmcG5XDDfByQ1zmaTHY857NWd",
  "key38": "3VjDwf4wGzxRxPsGntaWWHkJ97ub48YWevyhvie8bvwnG14LJ6P2BTJ28wASGzLmnCmiPvEDMDDbkCVDnQb6j4UG",
  "key39": "2dSa1hwSc6ym1fzM7u4pqUV1Thr5nmrGcStfcgWtw8XWJzhr7MFP1ZveVxKE19AAy7pfVa4YTiwugFuufYvdh2Jb",
  "key40": "3bWYix3WVKn9gpJWRBBY5jSdsN3oQyySGrXRHd5kbFXCPruzHJ2wVD3kTWJqiH5bdLVfeR6xNnmmRG4FgYeRf49Q"
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
