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
    "2jLSzKw4awg5iFmAUMN7aiToFGhCHhAk59Qw4E6ycdy2qdyjzaQz6YGzJ5QRzGjdtZDVpig9HKXdZa1ZZMs4Hnyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yK32v9TLeZDCkcEYUJosTBgY3183LDSn4BsFoSo4KRvARc3Y7zxyg6vKUkUhhKqDeDH9ab9YzXTX65DvE5GvoQX",
  "key1": "64tJZEmsj7rNNn3RAk9ncUsY4ALYQwNwNMUD2yXSPuoWbMc6yDu4Xb9WzxSetC2SPxAqgZix2ZL4Avmnf65fAToA",
  "key2": "25hxTK7L7TS8UFyCjrfpiVV4Y3ofHRACdyqSt2zz1cmvmGMVLxLsM72z4EKgVt4wMA5oKScTpsifuMs5Am9Zq712",
  "key3": "2mgS3hu5Qcu12XDWdK82U2iiPAHdgbLQyrLoNqQDyr4QKrd3n3fVGAAjTK9UJTj6XDkBhFQrZDkoQq4N1yL7Nxfz",
  "key4": "2Ewmw1Sj72uVn8TuQwM7ZpZ8nCbc1LHeLyn6dgL3rBQADKS4xsfWsfQooA8UuezGfVepm66qmKU5gFzE3RDucAU6",
  "key5": "od3TBSUoM1dHBWHXM7Zf1T9L74LKAf2Dt5A9etFGDYqBvLjrmhz6Vd6VKHUJgveFyKMdUFh4eeAYbofKeAf8i6r",
  "key6": "5KZjsXfozTy1V5684F321ePTLreRVsWQyzRVxP5nndvo5xaxRGUpaEAtki9cG1YkuWHBAUQPA38EzwCVwwaw1hWi",
  "key7": "hkqMtvaCQwvc78EWmBT14FjDbrWtXzfEewDz8AAZnNKZMDNYV39PHHvC8ERuZWQA8tuikgc3reK19Cmfp8qqq3E",
  "key8": "27PSqohqddPct7AP4J1bB7NVHxaom5xot5rTNFKj8VpGv1V4zUJcrW1mEWmVTzhwLqzPvee71u5FzmSXg8duMGzh",
  "key9": "2AAJxiQ5XgyTTQCttV5SNNXLJBy2txKDTrpX9MNrWP3cGxSVKaCmkZgsnx8SnksXs7B9Lfk2oAZJf7fgJWKfWLQE",
  "key10": "FAnicbJj4BJYwMvYSpfXa86MnkNdPzKtJhw1sXqjYEUtD6GKgWtkMER2dREj7NSxoisevKaWs1Nt6AwnfRNmsLh",
  "key11": "249UpBTTPeF5qqnz3anf52jRsmPpfoGjFtDaRH7QkN6FxS7AWqFN4WCfACxuPjzWy7cj1ehPhEfeKo4sq2HDkQs2",
  "key12": "59qjitV4kw4DQCeBoTGeoagfCWJbUL4iCeadDpohcN5c5tn9z7Xwjs8jvAwgEnVaztCaMLqmQe6f7Xrz68u1Rs2z",
  "key13": "2h5XWc51RqErfnf5w2JQ2XwB93VguaZdWwUvkyASWmazkNNdSsLaC74uRKbmnqHXsDADSecjHwNaomzp2RHQPTUA",
  "key14": "3GrDnE7EwjaUzTMU2RkKouNmEUDuKzUAFppJLu7Dtw4M17UVemgPePQg8XFsq61fvPr1yDiEdX5XTZ9gjpexSRXa",
  "key15": "5Ujf4Kvk6kyaSay25bhLRrSQ48UQCk4fxCy3N92X2x5FMfHv1vX2GKLj6oJsDD7KvyhAhmGcGWHzz9hvZZqdGzrE",
  "key16": "66mjJrNbY5TnVVFqjQQSatg2LdtfsiJd3mdsfLNARqsws43dLqwW8SXebkau3X4sLzfLX8zgTRajVMU9ytja1ygP",
  "key17": "2sSvCMmJwZ8zjtfeN5ZcwNnozmi8KyDVR9NsQ7evWWk6C4kF8khNvYLDHAiEWVZBWGQLf7CrykybnRLuqn5wTxuE",
  "key18": "4WwGPkSBhiBWyRsm3rtfmt6fqucGUgiD12ANoq2zDWiHb8uKHFGPeczYw4b6FE7dAGwMG6wh9daxgwCzKywSr7ax",
  "key19": "5v4pRRrzHLBW5cwJuYXQTAjvwCXs7LHmycFrZbqToTCX19oMpLY3pU4tVQsZuC2NKHifYG8TH7wmLqVyVfnWUEMU",
  "key20": "34p5uCPGv24bECJcUWnwJ7Vusg74jCenSzhtVATEBGkVSiWLnrAps8CFHGj679a5oRNyZebEtesDcP8i87S6AVRe",
  "key21": "35fmVFB5mWPUqBWLFtnKG1zPtCJxMpWSGNamPGV3XvAuEfExEEGK5dmsz1zhE9fmRJq32t9N9pzKZSbJwN7V61v3",
  "key22": "2dFfjT7jjkdpti9S46mEXQMFw98rVsECqVHg6fpoYHa4DNPJF9sEzADvRDfMd459Mq4Q5qoNDhjsSirMWmupY2AD",
  "key23": "2jC7AfWMGe5esN21zvbozmg5YKCpAkycpHxqLunWwYh4nGV349iDFn2zbYfQEQqP514ggu3SbWfXN2ombCucMrUo",
  "key24": "2arrE5d6PkKbSGdMNkpX7Rqc5irEDp5yVi4CqYiVgmByeahyknKuib4quckXDvXUymsw2tDbUq9JPo96U1CAAFm4",
  "key25": "5RecycVTetDVFc1Aj5hxafJ9GR4KNYxKENUKQYQqD4ZNs5XZXHmRJFzCMu3tQhyJ8yuWHkPpk8kg2xPFeBds6fVT",
  "key26": "4JgudAxNnk1uF36fpt1BBBU8UXoPUbABGFdpXQr6G7YsQ7TeyicMf878AgardqRQWf5ftLZ9xBamxLtWDxVFDn6Y",
  "key27": "3zFUEVoCjQCiza781uaD2598X85GtHKZAjAASnDBSjU2FacC5vBKMdm8gZQa2pz4N95jE2JjzVfopW5JaJQSvanQ",
  "key28": "676Nope2kcEBeWXUj5KknHshNLYLpNzcNjVr4XuCvQEmxAT13z3ZNJjU9JcJC2iQMoNXaqzGZEjBFRPTn6GtRhKW",
  "key29": "5ydaEb1Ceyec1JeVgxFwp7BczYVoVp4E2jQ8av1h1w4kHVeSZhHGsgbLu21phmoY7QS3ACvW3qsCn7cYaXwVrGuR",
  "key30": "3Q9xv5Y8JzARTsqj5EX1Vy66BW33UcNp9JcHc1MbBekc3Pmpe81auh8waFrwJe9VTJHNoT77CQJESS1eywGujD7u",
  "key31": "2kVRVvPeWYm1MwaG6qRcUuyo1ZuhCQdkDnCDiDyUMPA46VQNMc6bMCrFzwG2gthA3ngnHpvJbqAxQFcczQUTnxrS",
  "key32": "2EbGQFD4p5N5WNZph6JbAmSuE76UtErTbHexNw6RhXgwFKdYvJA8jreJtx2EjRNwEttfpeZAJm6R8KgHJLWAHQPy",
  "key33": "47w7jvV9UVee5JLhNfbWBtatz6zrfRsU1UZ5oLU8pnxLEB8yCjyRHCTSXihzJ682FUjdhf8YjFB7fUovd4uaTpWc",
  "key34": "3L93rPHUcPUaUWVN91etCAkdESbDvKXXYqQJgojFy6TkHbqAAnfK1caouL3nLpTeAFZh6Uukt9wagm5an6NyKkwM",
  "key35": "4ZNxhyfzvvGtCEQ9L2HgDCjdpvjMiShfZRBzz3uYu82QQmENrvu3Yh3esvUBroZpgr6nvUSf5jsMBUTggwfV8Szi",
  "key36": "YaNpEXETYCvNPZDxopmTSjU4KPmko3PEDSUmLcQSikZzEquX4MHCb7vj2pduULt8yQamF12SbnvKyyQehC5PZ18",
  "key37": "5ybCxwfXGShSSiRvtphByu7rXcF7L58e4HwFErUyZJZgtRRidFpwNz8oNQvAmbQ8JwCW2LVRQ2rKZPoGdTRmB1kk",
  "key38": "3VkMAPW2pxe4LByzM7t4E7AFoBW6tGVStZFYuaRU3vBDx6Epc4eYJFTWAeMVYHrxMkiTqGFDxL4FHDfCuTP7V2Ne",
  "key39": "mywnMxeZLzFb8zeMfBqSVctvAmVbpZ51tW2quaa8mAYPmdMv4RYyXmae2np8Js3nhYxaHntHLDrpv5qG8EzY3ix",
  "key40": "5B3tuBQr4qmJDyenfJdMy2hF1yWdtpNiHSe5fPdP1FsNNFuXaDfyCZKYnBNLM6kJP6A6AoFq7UBiE49PGpqt2oRp",
  "key41": "2reGkm1UcqkD6MfmWDpsJHcDR1XoAMnpz1NBcYG5pDnKMD7aqsMnQSXVHmv3AH1qSMAFBAAa3HZS5iJEtySv2Upw",
  "key42": "3xaaZsRYAsPzKYLBZwLEByyCwLi3PMz5QcfT6gzbWTFYX2krNoUxiAHoiDh8MZnpcmupgFtHD5imJ7PttUbPqeLx",
  "key43": "4ZNjxA1izij83xKpnL58bDZWGvQaE4BjYasCVnqUfaFHvbU5wFCnns5zobpT7jpvebwQrDVqAN33oMtjoth7Kxdd",
  "key44": "4jfgZHLY6Le6ZVzFvYAWcib5Edkkix2fz2mUdZe6yhnZFhLwLYWQKcv21Vj8kvnR6FQyF6MrCABRnNmtqgmP3jGX",
  "key45": "5QhBVxURh1ZcmvHJN1N5uK8HKKDzhhWpbz9WGBtA92dc1dQPav78CHm7uxwZXz2MqPVa7jbJw1RCYs7foCZyrPan",
  "key46": "GhMV37U5u2QaapnuqrtRGUupYkvi9v3con6syYCVt9s5xDnzbspgcKFu1N3qo1BSSjgqefpNbYM12tYv7mMsRGN",
  "key47": "2hTpgsstfchYKd54niV2h7hTohDiGrwftGijx3h5JkHE4emSt5ekCBGNwqVRS6tmusq1ydYx8VevR5142yG1kpvY",
  "key48": "5eAJYVdoHZ5ipm5w8NVjnnrrfGeLfL9n1bvmUUTBqEgje1FgPazbXMpb5t3x4r7BR3g2YXXWmjC8V8XSmrUfTpa5"
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
