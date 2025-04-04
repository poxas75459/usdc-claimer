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
    "Pup5HAhCnYBtWQ72LoZW3Y1i1KCAuGMEx6rRDNssoLsqPFfe2JLenDHAk34NcQPQ3NqQzqZXFhHYprc5FYJuLpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57nYeY4gDrc6kz4S4TnsrAT3LivVKozGxkKp4arFPB6aTTUiyCpf7iJUrKebNMf6uQ77BbA1aUd55a5Kk8sbzhsX",
  "key1": "vFtLDTET2uZEKgJp1RhgLxHVsX2bpYzz4Dh2qXip1EaaF9YDf3Mg1EQoLhyKET47y3dFnFzD5wjaBjrg7gqwpwD",
  "key2": "5AdEeG5UumNy2o3q9SGjJ6xTD9Efv6CnHeBryibd7YqnZ2CkwVJcJRikJPgc1GiA17iS55jaAWYhdLY2BW7fAeRn",
  "key3": "hShtfjgngih9uFTFneiErvmYfGeN5dWUdeeqBaYbPKsA7ev2MFA5yPSZHn3H2ubzd1nd2pDLrupD9taNde3Ln24",
  "key4": "5npuT17qu9jf7w3fZevepXKnTY3unNZd3CxWsTtdMfYRdYXaVj1apKCtBLVZz3WXEFxVZxnffCRc8JvAqSHgEHNT",
  "key5": "2EbK6zduyCL2tWRRmRrZVLDERGNkFmm6hYbmd6yfDzaEhHGHjZJr7YWso6HGM8aWZzfCBfD3MpjCamAyedYDwmQ4",
  "key6": "NEQqJuHjbyktHjkdh4DhcUpUguTsDFv6bEZkm4ADtHhmMHr4pdRqAMe9C7dc66QiZCpLqLm3tMU2buqn2CTqodT",
  "key7": "442aEEnQju3ZUTKTNxaDDYBiLvqyakmvBJSW1rNroLG7J3Hzj2hb5YzvCcQQP4HugGzh4VyXgdhzvDETZMY6XAyg",
  "key8": "5JfzcxyQWh2xrgZoS9JAMsA3kRN2qZNm76n6CTjbaz9JYdSDSdqBdNj5tm1cMXYNHTPNGxEbS8sqWBJTrd7kQycR",
  "key9": "2DBK5n1EjCNatzG5jvVakXHo9i2EXrmkCVavLZJ86ayuYJ2SXT5VxcndF3d398hrMfN7UcvKrrmdaRgzboTLp6fz",
  "key10": "4bU2CcdDw2B7UzFy8eTKBVEA3M2wBTuZ5n3b66Jjk5nmSrsbkzfgCxNy3uHhMvWxBydumyXkdEPx1o95qwm44PuT",
  "key11": "3Xqwoec4z6Aw42VwuugVudfyvkPmrE364t3u45nRCjV7oo8XCEPmTb5y9zbC9nTx6nU1moFqV5TcSEVXUeeBorm6",
  "key12": "5n6d4fESo1g3kAg3hH1nCGjbUj246mjH1cBkTxfeeYDUDBj8iKej9KrnqMmEafKD2FQgnbQ3w61M61peufrYEAXc",
  "key13": "sPWMBoALGyudMhKtWxC4UKbSMPGk7WJ7tPhH9K3S7BqA7QcmiCHZepdAa5XGmMH9XnCDr918Ut8tyeFmZaSAfbZ",
  "key14": "5UidqsMu16md9gh5ETpTke5tUPsh5PjvVnSm3iHqDJYMJbSMigTTGgsToTpYLpgtLDD5LTqbPysYp5tJHgDU3daG",
  "key15": "4Z7puv55HRf4N24Dn7dGixBAHL7EDzR4xhy3Smv7otRgkoQjTeDvQXizP5CFesdEfY9hpG121xkiuLomtij8ruy8",
  "key16": "5CedNi3mCQMcVWSUgvFCLiM14jV355XpVNmkUrKz73xZUpPFddzemP1Mq2aAKRxf41XJHYfjLAsdod6KRRnafBh8",
  "key17": "SqhrKTsX9UemZGZFDnZdbABE9auMf26BBN1JCEw2NCn4Y4u5S21UCG1JWtUeGeEjm8fvG32Qa5dpUuYiMncjgmB",
  "key18": "2wwNe87FtNvMZ5auRKP94Bru7iScdN9kUKGZ8M9CDV8C7PS999oWhW4Vi2zkvfiyJ7phnn3hEWywXAtdz4bEGg6R",
  "key19": "457GjqEZFe9KfMvRGFG4SuFD5TzWwkwd6jswDmWz4aAzeVp6tMyA3CLj5PMJFwuoFcguvDnHfZneKKU6VrsLUrLu",
  "key20": "3szvLfKCgxaDxQLbu7ZCHZLkCvga1K89t8APZvN3qj61Ro1bM6UqjPkiG8ZnWCtmHLW4iW4gteuaA6MHA5hTmeth",
  "key21": "4jEfKrzd9J6BWN8M7VTqhZ8t3q3UtDLpxkQu4F1wM1ubWApV7G6EEjJHanNuRErzg43cDYm4huXMvE7VuUF2mSyi",
  "key22": "394YisMq7qggabsv2TEpdKX4Mpk6e3sxxs46knBLendSQT55PzWN71K5wdaUQsuKwuK5HQcEsBr1516wG7rikTpD",
  "key23": "3TMvyrTYbFjb52C8Vw2BVKPWLrUb7Kv2ahWHVqsCJAUfz1RjyevdNF1no1yGLTS3kqLxDCE4WkRJ95vvYjW87gjZ",
  "key24": "4zCr8hrt6CHX6zwBcE6e1fSxxavGEX9saPyX5fzfSFj4Jd2X2DJqabitSHGFZpboDJ8toc66XU5gMk3t4LB24Um1",
  "key25": "3FM5f5F8oyvNahS9KzRS4h5Ekt9zygi8vGKVeTSCVXsKUx8SiiYbfexkQPm7sfnc8gAKWiujwvCp2KunbTAsfKkU",
  "key26": "2fd8x8fcMduE1n6grCDL6YiyX1ReJqe4xj5wy8yNv9Ue7TPfHTPFUhztiPjs5kwHTdViT1dCf1yo8rTc5ikxVwp5",
  "key27": "5eqt61skNGdXmsSHt6SwMkjXTGsgyWwHnHJqBwjKLo8Dd2cdEfjjn8vBEmvNiwiSwFLNgnZEXcF8VkZuqof5iU5j",
  "key28": "4X5v6JJT2cykLzkox6qswP2PDv46HycscDzQhoRHiXYDK5Ajro7sSBQn8TZersWnBy4HnrrZ8DS5xdLNHorgQ3mJ",
  "key29": "2VYX3tfKEvj1kxdh2qj3USCsa3pDWjTNP74vbSVMu5eBPA1sjUnoqNg17ajEWofLGbH4UpSidk5aTK9fs2xZuFya",
  "key30": "2L1tpdWohGkdK9hsdviyiUeL1dr9NAJE8hddGT8B94JZ7GCJXZPSXdxyGSj25sphgVNxhUMJHx42eW8tZ4X7s2Tz",
  "key31": "47moxJepkYJq5AD4ds2hnQTwU2P5QMvu6FVQDBoBVLJ53CvLZWzzFaKURb8CxEBjFjvUCegkFgGDD5MCRwiBM12T",
  "key32": "4DWDVDcaYHHr3cwkbQntz1V2jWDRpeVXfafTiHVTpBF3Vi6S4HCmRaSN2gHJoWxtKwxZhGHthK7EZDxbZ8JacCve",
  "key33": "3bRCvR5qMJgs1zhHqkC7H3BQSVpJiuC9TBpQxWMkkfPCtXvyVrNE3hCvFd6q6az45YG1vys12zb3ErTGwRGvizMd",
  "key34": "366YzCJn8LzDQoNJe6AqxstrNS1DdXGG57XPe5QpHpgXFmt6KrB5dTvD64qADpA4Aa1UbFNnLQAGkiov2xh8nTAM",
  "key35": "2KjK2AaNAk9PGJS2zyCraSR2ThoBAspkjPWBs4DkpHVbdThKuEnkdUdQ1jcdWDpT52JtwKCgxNY7pNKjxtYPChHN",
  "key36": "4FJxh12V2AbLASbKKQnXasdkwNYvjCkmrexzVMgFq4KmD1tDxLZTpyfhK2QxJw8cM6SkRBDcPgnNbhwzurJQFnfQ",
  "key37": "JLFHkuYYLXTGDvodXEr7L15vFEyMpaMfRZca47jJXYNQv1YBGBWdLWepAdgKs9XRNjnfSDebB9bygavNKDwLc6e",
  "key38": "288Zqpx9rrBJtJzvJ5D7UwSVMj4pt1ioy9iD5so3Ve4KsH4neK634EJiN3PhZHWypTPzj2GWaaNVwAbNFikRm3GB",
  "key39": "31x9yMpqJftoAnA1qxVNhFwZDY2RWgJARprxuELqM4gfcXPxez758zcymT2rGMrNSxukcT3E6s3hS2zh7M16k33Z"
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
