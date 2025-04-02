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
    "4p1UfytfNQWurn9WupAkSB7buwiccWWHBc2tdwXU49XyRAZGjh9YaKDbMVrNetJwXVSKMP8w9B8U8eYM8dJMmS3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66FkZ8mhEPygYDdbzJYqomDvgSKmmxXpD8YzAxGLxrqdLmyFPmfvigMgwrtFzpYhgXKfHuxmoTV92oiXCG7ufhwS",
  "key1": "3ML7j3QNJSt12oAEfdaJd925yUMu7qNhZQnyJ4QC87ZJfSunnv4EsENWFmhSWJffEQgpgeHQ5NSKZcspmE75g4dm",
  "key2": "4smyRuQazA9WA2d2YcWKQf6qRp5KMnC6NhLrji6gJiWfG9HRGRjYnffFWomM9QK5jULuxaVB1NX92395WMgcHhMF",
  "key3": "4kPnPVCibG63uACnYTE4XfUa1ihPUEGXV2TpNiSHAdC3N2xoJQJexcVQHU3wUPHEVVviZL8fQ9S5frLQpXHUkVhB",
  "key4": "x3jwdukgeYZrXQZQbSsg5SVAvJ6Q2Fw4XF1JecekbrpuEVnEd5znWodTDURHZbAbMDMCSdpYY9Z6kuxJfGbko9h",
  "key5": "3YQPeDFJgZNAVCZAcbVVcXh9niFEz5EphbGtb4FRDuy76im5ai86CFF34KyyD8fJtUzpYAq9mXnJEXN8PoUJFtkg",
  "key6": "4VuVZMpTmTFvu4MAD7SYfRurTEoE5VthbqwivLv9uJVAoEMqQQogJS6f3fSm71opS7SJxKPw6TUzBqAiAM8MRWyq",
  "key7": "28gx4n6VHTyWLFibRustW1XYsLxGWqRnmeP4F9fd7cEhEs4Nzte8yQXE17xxNohXz3k6HjpZtXazTFQJ7fDh6fzB",
  "key8": "5KyKXyeUhepWZAkDEfjtwrnc3eu8nY1nMhUgrxgmBrJNzX6gWPnrdEVz6mNZ9sJy2RoXRgDV49ETpPCf5qfgQQKK",
  "key9": "23K5T2JZKpqqivKeszv2q8Zj5tjTYkff9RoXSxVzYUcyC43FgNJigcd8NPkyLDvLj3EvB1mBm8VZuYjYAMeUQyN9",
  "key10": "4XBfukXugKF8mfpCoMadMgPuyY6hecmJ4DebEMVrFTgPQgCHY1kKoyGD1dqrwev9ffrXHTB2agNjrfMkSyY1N2dg",
  "key11": "3nsoWNPdW7js1ACSQ6BzghL2JX1dM4UTXBNU57kqcpWL5Av12f1akiVmGDpDdFs4Szp1eyZHmFEX6aJR9HH8Kcyb",
  "key12": "4VGL5DbeS8rjmzAE6eLNYiGW8scRrQv9SPawPwSJNZazM3CumJJaQ1fpDc3cPk2ZxbNcgwjTLXBELaCHmbMF4e94",
  "key13": "2cYLTHxGCmnGdpZq1kNMRw8gT5AJXw5QhGPgb4FLBapnMvvDvoTD6nHkv7ZiNt9td8Fj7bf59eWJBc3HxamYgrys",
  "key14": "3CaWZjCatqmBq9LF4chSjJpahjoHactKNBBgLzBHo8wNCoX5zkWqnKzdwUS1KVe4imCaxVpc1LMB8Q5m49D1gHzp",
  "key15": "38gxEsvuhF68fPYrMgXaPNLrivu54CsDNx85BYBZgUtCDEoQr5sMF1siVi3L67EVpm8HGwm1Bg7z6r6nuLmyceh3",
  "key16": "xsDwvVHXMqVRJi1CpjgPrfeB6tRVCDA8CoTjCEZJz7NdLr4fZohEpmxBp8nePDHprMNSHfi9rwd9qrE7qoEqfzi",
  "key17": "VAs7EY4s1e2Uc1YVRAyNgfUcwQYNxZTsUmwitNpsyyWt7Jt4NCMLLAk9uXSPMeQ6dr78yVXLvmJ7RYW3Lpfsffk",
  "key18": "Co78VxboAKUQ1h3kLngVNPexWDrqXuMnEBXknN91pBd55eHSWb26CNBxUYf38eoWovagAKtgwG3Wsn46LsSggoZ",
  "key19": "4vG78xp5YfYBC5wKkdp35knqx1fNC16jUhq9VP2FHjz29LvaDziVsScqzCAuoSLi9ssybZHiY6HURwbwrJsU5sTz",
  "key20": "3UA5BJBvUTpcVfiRncDsYJRwsFu7Z8F8efww4cCAoAHo2T2cWiP6zFDStmEyEuADiPWhU3GKjAtZNag6Ukn8MG28",
  "key21": "5Es2YsTkCWaGcHTASosAzA5GTTXteymXJKfzxchmqteSo5sMiGviXqjxKnSdzVsTEHJr643cAVjB9jtb2TTqaZ1N",
  "key22": "26eYbAHnjQwCs5xa3yrKZystz3S9zJTiqDC1GNtk4cGTXKVjFCDCK7ecXSYxCFZjx1JxiCoCZ4xjcFz36wyZNtaa",
  "key23": "583EYp3XkYo8Yovqm3uQkzFXr5TR5GRfbZaW2ExNzmkX1drEf1ZCzGFah2aYciuwjU4iM8ieRqynhKCXqezQXsfA",
  "key24": "3bfKfbARzx1wAdSQMPtAZ5H5pRNeXc5cR6cRiqVnFjsDvtbijoFovsWBSZfZEPrn54f9skxGx4NdALzTEmAy3JMc",
  "key25": "4fUWxYu2yapjTM1h7GPSwqmYkEyJS2Bke7uYfvUePz4Ezz1BKvjycQWfbio6Me43GJAUxoZjD1tGrgGAsCMCd1ku",
  "key26": "2BfAZA91b3ZJJz2ZejmfovnG57Joy8m5ACdC8CFagqWibnA8XftwuiJgKiDKk9YtbLtFUfd8DFu4V3NL5MeTR1tk",
  "key27": "2ehmnHYuXXvN5jvbkm6WEBcXQ6p5462vfh5wXAXUjdRjtVXSjmorFLhmZ69GqzLWPM7SFue7QAqnmbamfsSmaiE1",
  "key28": "2QeyKALvQEXvmr4P9vy2orqnvE1CVu51XvqKySsVrcHUqbZfj5AgcC9arbYEunX8WScSdmRY92hEk79CLswRw7fc",
  "key29": "41cXh2SA7wxEnjYnVE8Jq6erbpEorHxXRCKeyPjDFaQGV1BPS8HLTjqT55GEPzBmuCu396Nq4iEYKYbt3Za7UPFa",
  "key30": "2ncJ3e4qKG9cP41UKT6PWBWT6wc2F21YPe5PQVu42uMzT61h41dYc5Mk3AaMUkfL2bueL4GLvjD6RepmuSA5i5VD",
  "key31": "27xqsCLmkDqqxG18d1QcZDi7uAkU3a5aJp4iaqA6NnkKBDgwxNACobiF2Van8sjkdPfVY4h6AwsCTUq5pkBW5GqB",
  "key32": "3wQAzcxvQ3TkjRnZcEjQgu5PQqThgTZ5m9nChFH2mQ5AkHrRpsnfhnJkNYANG4bo6XDiKDpUQFP7Z33Lq3fmYSUn",
  "key33": "49kxHJgPx8XEpe6vHgu97akfSGBpLwotJD8WHE1QFAtdeBEgT4jtVJCyBJ3d7oWBpRUndoSQN9ff55yBa2wSxRLx",
  "key34": "5svbT5yG1RppnP7FdE8FRfYK6iNhUUjZKBJW5hnwYLauyrvqBvMoTqo6qWdoGhW68ZfcPsPWgvBB3fjA5g5nmr7D",
  "key35": "2Sa384Kex2GmgkTDwzMhaK2ro4sgKMs5zdNhH4SKPPmaB1Tz92fa6cdvEvs5yN2HW6yojr4RqtBy5sZk7WXHW85",
  "key36": "5tToXvAXiuRNs6T2deYkTwdZBPtd2SaQpZVJfqwjEHkV9cyShrC1MPs379q28kmbKCmBBKNXg3kFwPFDwSSBxmvQ",
  "key37": "3drgXnQyrCGyQRrL9Lx17o9hTtoAXVUAF6Gw8DnV8Mmhx2jYVn6UjSBDsYFyHTk5NZbFijitht1Pgs59botMrsWt",
  "key38": "3myJEpLdHDcLrS3PEpTfEFUvR4yQAmQQG2HkeeLvk91dmfHFzdhHYWYX7aSamMtNWfT9XDDuTCt6kJevP2WR9BUX",
  "key39": "3VsTogaeWfMpUPhz6VsGaqkME2kP37hQH4EqH68RpZRk6smeFoAD6eez14fqSBsSP5hxkH6wVrbswAFaDEL72HLh",
  "key40": "3UTENwNbDibzqDMioLTqy14CPwX6dRZ3ph66gfR8Pmq7DyjS3Z5WC5v9tegxceYcs8Wmddx2vwuPhcmVdxyLQEKa"
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
