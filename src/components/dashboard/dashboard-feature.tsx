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
    "4KGUsZG6Bqwy6gL6JReCpsb1VuL2wCVgbbjrJpkpMosTZAhMNhByS4s2beujHp1KHFHiovU32Jp9vbezPAP438ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645AQofTUmjkCVgbVaU2y25XP6MMS5V1qWJeinNgeEL68oH3ysbZv6NWYsMCNpZTHeY5aL8egD3CchZzZGyRTGWB",
  "key1": "6C4Rru9W5BmDWichFK6P72FfzmRRFAuCNF2GyRtLQSmXKCy4gST7QAEwR36pinzRB7hjm1ciWoH83ZfZKBEhzhw",
  "key2": "2uE7kBL7du7ZPvWD6Ez2bmmA7ZW2YX2jUTt9SJzdnX249kzC1worZu98ULAPmoXLYm5eKCyb6FajnJrvxoCmHVmu",
  "key3": "KhK2ez8DgkCvZbcH6kyMKDzkwsdUN4CYZbn1R6gcwSo2jv284A9hs3MD7GwVMGEcrEaQvvtFnx3vF8Yg8qerEUc",
  "key4": "2Q93uLarkTdLWC9ongEV2rhMxskxhFGaRQkcNBkpCnm8WXWU3CoVaHUxHpCJ15nGFjZQf6cBzDdSZsSV5XnsZjna",
  "key5": "3F439HFoaGVSKYsGHz2k8tGKUezAy967bpV66ysn1pg8bxkhVe8bvUB6s2D6Sx8GABRKJAnDYcBhNxV9APYzu74J",
  "key6": "3cAqtFDQZvrW9Fz6upS5aMGxxZHNbhT89MGMtXwxTvbxsxDHgtj92r2KLyPQ2nPpVTgn4x2ihWX853w6JunpsYnc",
  "key7": "4sikbfFgSxhdY2SfBuANhZFtBoiSnnazVwzmF9T8VsGduKpQhtY8jPJD9ah2W8c5yHEji8yXzHgPmV74t33Ny1Q4",
  "key8": "4wKLNZBd6uiTUV2h1s5xdrui3MtfTFnh2nfQWpZbd7sooY3p23FFxveyy943cF1k9BH1ywgomxwLNkd77ETNQTGj",
  "key9": "i4dmiwuEpYcDMnje7zaYPboMx7hGcA4Ktnc5AAhuaYnkUJedCoXBg4kDVR6wkNnkNzD5VVQ6JFZysoRCioGZPFw",
  "key10": "yHaAPTk3SFKwRctnxUYvJGq1DC14wdZvCMkdEeQ1LhJXyht28PJFyTHDD4GZwhXwfTzLpkH9YsrTX9YRZwn8Gtc",
  "key11": "56SavZ7XpsVQxZiVb3sumzt4pWTUKHsqaEwGAZbStDXEozVxEXqb5XoisJ3KvCUdfodXj15ZpzJEGnjd5zjrA4sQ",
  "key12": "56Mu4XuhY6BfTRJ6tKqPzQCa1d9Bmc9fxspE8tTcjptpi8SsYboczmuKgtpcPnEF1yA7C5rnYut4mNvixqoXkD7V",
  "key13": "4ho87N2njszDzYZwxYhzj2g1XWXhG2U1iptPFkCv2CJYn8y45ZJ2DkBf7fvnLYqLXBhEebGRv6sqa6jVVnBJXJhW",
  "key14": "52oRircRxMdYSiU2FoFfgpHERM5pP8bWAU6C9LDr4neJSs6ZMbx3BXf7jtgKEJXujoWQpmofhGn9YbnKbwAfiLbS",
  "key15": "RTPJEUfG9hLHTMbpxCeCsyzrGdkUSMHFsxLQes9PvSh1Ptd7nkqgng6hi5P6kpM84MnSFerbiBNT9ADYxRWC9zu",
  "key16": "2ktzEFwWhrBsnBwoumPr5Qhnn4KkSC2hksdGgqgjmp3ftcvRim5ttTjLkrGEVZMnuv1iVtRHfYrMEY6zZGkCsMSS",
  "key17": "5mYtepZet9eD9ruQgfaA7MDYXxAF6xq3nP2cY9L8vzcHmFVEBztJcgSpkPUtGpc76JgtbEi7RdtDSKpoUWM6iZHx",
  "key18": "4c9pzvj1DisYREyLgXUD8szyQEtpNqWpsv1HFsaNGx1dSyRcXjNzLqCpmgpRmoaB2717YBGnqAzsQFkkFwoJevwS",
  "key19": "4E87NkkZANqiuYhCrHSqqnfc3JGxkXFC35bDLqNMPka8vJiPaRhFEh7XuLzQ1iNJX7pbSwcmC1hGwvGEABwEvs9b",
  "key20": "67Wri2gMkBU1aDNPSWqHVrGcbY1ng8FzHYQpfhcXzbLriD596Eifhz5PVshv2iHNXDYzGJZzdwDRi5xfu2PhUoH1",
  "key21": "YAybRwdAejhkX2Afe7qnohmUyQMGhtrjZyXhMnEVmyHgDfzu228rTe7ZLT73KenNER9nq3VCRNwiXXWeKo5VE34",
  "key22": "2MAYqFhjM97urWH2jeaeN5SGq6vF6EyrwUXuQ9xB7UaMHhghrKZxmXF4LpNL1nhJAy2keWEsQK5YAoVxnay3P7F1",
  "key23": "4YfhXdACTGCnyxecLiMQJqzg8CL6t4HcVBSF8uHb9Fj9VekDUpiY65fzaMcutUmyjWkqoa2FDh5y8fcLdmGcU79j",
  "key24": "3EVuZLGZeFJBJ41WFtw3UyJqTY5e8ThcHGq7Tchm7gMfDBf8CZUB7Szae3AiLMUnekbHVA9f7EfqDuRmF3phNoV1",
  "key25": "uPw5htCzC2k3AvoyHxFDDGjHWhSGpZgND1gXmgH3frHk5orjkeGxnA5RNJwVQsBGwHpRbLR2gxK1HrBmbB6cbPz",
  "key26": "41hFyZCrd5stuvonanNs9TVFvsnALTi33Kse8j4d3kBvJpyyhuQLbMEZDSMqDicVaaEjm9NFAJiXkMBSHrJ8LiJr",
  "key27": "Y3VQF13EUESF7v7zsotQ6TWwp3reKHTeXc94rNVFpgySR4b5LA6dpFXR1PDE1L5bR1jw3dxHSRjPrzSWXv9DLnU",
  "key28": "W5usdf7wbiP3eSAHzDFpzTLQgYJD4fwt3oo3WqdfjwQrfmH6BSksg64UD6M9FsfdjFxjGfvXpodR7xCZBvPr44h",
  "key29": "25wtxhjqYwnMEy3Yas5thVY1V27EiwBvLf7L5i3d4miWvKvibS1TfDt9zMTgU7Lk1mw4wRiudCGnWWTvY1vVe11G",
  "key30": "32BgWNqt7QunjFWrvTTvsirpdSWNpTQMiDUqCMq5EPbm7LuLRxiLxBxMoUA1o4DqJZ8uHT1i3ZJzioXLauAsRPcp",
  "key31": "5APV9Q9TSBiNoJuED3YQF4GMTNZv2iSEW7ARPb4go4P9kv2JCn8NKzX4Qb4GbAtywK3Sw3qLCqmS4JzEKAepDTDL",
  "key32": "66gdG1BHMtTUSKGipSANgeT9bkfTMGpWCizRv58Hn9JmVVv8VuqQVyUpcuPKuxfR5XUXtpUiLDC9oFcbYJo2Bfmn",
  "key33": "2GRW7wKybNPMYo9ThLxNW2z2UwBkwpmJEfjFx9tWpPPnVWHGcj14NFbpDNTJQAYmfUTj5j8vr7bbKkv7i7SbtoaV",
  "key34": "43foXo6NuGGWEQJMTdauMXmkirGXQuvUMNz7zepjJMPbYUos87GZWyypY9ApMF1kfhn1iZZ8BhyfS5tcyCjB2a9J",
  "key35": "5cjJXMGSUcv9aErNak4abUW2UiNh7LzsWXPKWmpyoA8MrQBcatyiBD2jNDihrCDxjKcoZcw6FNCWjt9ngmgaMCKo",
  "key36": "26GGVqcjkcoL9NWfWTidPdXvfAyXA6THRV8Z5XYffq8cQ74Abve2rh5y87hA1JGWWu6QHBSnrJQcgMyzwVAja4Gj",
  "key37": "LfAfiiTm9SwvZRP7t96gp8ueoYJy294e5nch9kLjoVH4W2qhfKXAbqD3FymjnCyERZfrM2WMD625tLGcTBa7HqT",
  "key38": "65Je4synRVwMGhMeXBpXAJy6rtsEE5xvr53uszejnMSoXm1jwxVZkeHqnyFhzKTKSYaj6xnRATjYwA1uU7gjaRA9",
  "key39": "3LZ6QsDzb3MFAgSkWyRMY9J3T51pkUaRtrYUWgv3KKFNUSLyGZ5v9XfcznWRqEHpPrFwAQDdxjjqp8BA2TEokTeT",
  "key40": "3D7kUrdJzSo4MRcCJ7PgUCNCm9gtfmAfniJmAkA6iH2PNpmLwKgZACbsMWeE7q3fu31YgSBXthFoHpF9n43p3LRN",
  "key41": "4AqKtT3NRFHBxNNWo2bCXQwmSHwKhjcJnVBsMRXn5xwhQihyxc3JgacPANWgUS1Qc1qNT49DRRG1En8UU9toKfjn",
  "key42": "4yoZRxdW1wBpwcTYUZEuxmSacHwq2AdN4oNQRDkR9rCHk6Gunyk3zDz2e97bZ4MujFoLjkXww8kNEBqwZFEpnLdf"
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
