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
    "5bk1qCXzSiYcE8ufdbyCofHjWjYC1ZMjG6a8fRtAnKDodR33mtRK1wJkuT4KQ8tM5zJ8C8sbjqxUWeUZRBhrCkQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MT4okrJGP1xRxorNUa68CpGRhAXe6XRBD4qVZjJwVQQac1q9n7LiBrGbA7tM7wEZ51LmFFLTjLmnkqZE3nGLhdD",
  "key1": "4c3j5MxxTVLzRfj5ta7q7hQ6Ty1JNM7CxgDG4Lyx9oboJWxnCJ9vsJDzaMEcLdxvnSafRXVA392SJRvM98rMRQfY",
  "key2": "4HBNmGvkkZcgGDhN52rptQB3NGSoaZCoXEqxsBsuL1TDMXDGXNKqYXF3EmqsouLyj2z9nb9LfNREZY3eZR43iA9a",
  "key3": "KGdGNG9q3p8doijiDMkxP2i1ApKqrhk2vtaq3rJVMmjo6W6g4RkYk68byZKXAnGv3DkUFHSoSGTSWAQUjYmNamG",
  "key4": "64gXbKtkaaxPMALWcRbFtLNUWYeBasgCN5Tqrt4ZMeYaQAWbtFz1u5yGnG3qsEVmzYb9PDVH4uCpmhUPtieYYMSc",
  "key5": "6gHz8RooaYasanPcRd38GufcAcEkjiZCVTY58w4VzREWWgGR4SYsJvrXXanE8chqt8NZqQ84HBTyhY4fi7cB6kZ",
  "key6": "3mi3Z4d3Zoz8byvv5sm8ijoHtdnnXJrmHZBgw9Dk35TYchNo88vb68oCSGP9ippdbXmyi6E5Lr4uXapwPnBB6KVR",
  "key7": "4Z5A5xYLwcREhg43DV7N1ieqXVfGtqELwS4PkowsoZ7sCkFNi7kEo8XS1PNGbPYRJ7RGqMWkgdztZafbTY2fEqo4",
  "key8": "3VMFHee6wAjVqY43cXjwBvwvg4YnLr8LGshHNW3F2gLEPyXwkyYErqyHmN1ttNg6tZBua6LEJVDdr7CrprQZPU4p",
  "key9": "4koyRtnRrBn5zH8b46fmpBTKBysyNCkasGoiGWk2YZE8di1bnCJFv4HfcSXaZvo5Lzz8htHaJHs2CXPgFAu3aHu5",
  "key10": "2nZN88d8QZaxNpQoscPXiYQA1vnyvVf4XpZwQ858AiUupah3Yo8ovFqcHgcz4ecm6M789Qs14ZeCD3CEmuLotYYp",
  "key11": "2RvprzRUaUSwrofvW91AfH16S7WSjTmbtcGj6wzBmeL8v38dmTGy49VbjqMGTCXV6eUnwAGWNYkUafDg3z2vxT5b",
  "key12": "2migRNL9yF8vk9m9rVT77Qb48J79Poxhgmk6N3ydLjgz9LPBP1EJLu4bnsR4Wz4j8u8SywUyRPgQp353eXG85AS7",
  "key13": "8LdcA9H2pJuxwi1rvAPDC4dh7kzjPXxoieha4tyY5Pk8efoEA9mN4cCsaThSgoSjofuiALJmMRt4D9LoFNE3yqu",
  "key14": "5Ch8HvvUtH5zuqDzPq1Qohypwj9V6hrXKpQwmaRfuxuAEWeXWzh6AwBj4vVURPbWw3j2yHJ1CENkPmNaUDVfzLAq",
  "key15": "3ffwkieopbzwjUiDRaVkQr5gTUy2WiER5AKmiahaY5Wnh5x6UyqqorB1Vk2cy5ucA8hGhJT6vvVUfU1dvK4mjMpa",
  "key16": "4WZ4B1HancR1GrfXD8tarK6aJ5D6VVpUYRUfdGdHZX3a3uqbUt6RFsCsxxxWdjgXBoepcMmaPb5L98JFnd8QfxRC",
  "key17": "53NckyWxsYya6Rej8JALo5x8qMxNta1ec9yUeSRJzG6UyNixsVyUp4RUkcnLn3QE4puoRQJCT9r5vh8SDUFy5p79",
  "key18": "4ZaKCvZRnFsRti49dCJ9YZJnv8CXtZiwMPCP5TZteF45Ekjsy2am9CYahPiE1ra7ggemgFpt2jKSmGrdsEoL3dPb",
  "key19": "3dphaLrAXB4EYFv6fmgbnu5ot17jzbFaNumUneknHKpy5EsvqwrWvMG3UKt3hCYzY4KgYzQQhbsVGEWw7j54zSPp",
  "key20": "UkDSkviDDSstLJaYJLb1mUCq8fVo9Yc7Fv6ZLCuaXUhnRJxowwE27Wozvx1eE4Q8vXwvHNazfFZvcHF6R4hjJDZ",
  "key21": "23paCgRUc74mgXY4MJ2qvsrdCaftLj4gUF7yXs4q38Ydr9Gb9GMysSKQaZ1iokczUmxyzWo1jPWJnefBQXrWAurL",
  "key22": "4oLo3Pbz67GM3gXznpqqbowpg5FJpTqSxC3e8YqvunAjesXp1xCZYquHzkewNwsp5BTbZfGDiCC6puiLaoiQ25jp",
  "key23": "4pgFMpYHE1vbSNgHKvSpT87YVjytfdagBpuJ69sBNnKXQTgSn24CYe9YkUJt7YRrCrqFshrCprNA9Rmx7Pd7MXjn",
  "key24": "4uCGTjrhwBhxvEKhnSzYCHf2TLhiGegEo9V8qSmTEqkLHhCuGSqGXzTFxgdUgPWXAUjZmzB7e2P7YzJNVY5R8Jst",
  "key25": "5UF4dLGmwNYHAiCEMngAz2n5c56Jy1JZKGmtoEphcgZSVf5aKeHaRD28QqDExGvrCrxpFGB5fNPpGJAUwD8jUHsj",
  "key26": "4yApLcw8TGaSqLjrrLAwhPXkBgGc6dL7DEUqiTmaTxNaWgybp4EPKUg3kRCJXRArAMttAfSrHKFdkk9GDbxnGv97",
  "key27": "4ggjFcXPcUtdAABgrXb12FuhGYB3Lpzz7VTKNzwLnVtbSKjein8QrvAjUAsTsgXEKxpBoUdVHX7kKiB6DuYvs5Xp",
  "key28": "2sB6tTrCesx4JiGJMd4EsDZ8cEvjEYi9EMSzsg8WhPQasj4gJ86aY48jGQnLmi7MS5QjY6FEuK1d3HAAnudBg6Mk",
  "key29": "33a6ESxHJHKSQxga8Hskps95DHNvsvHhuD1M7qdFauPFbMU4di53P9cUHXZR3ErBnisr25MGSwVUe4JT9hteE9YA",
  "key30": "291ZBHGeKnTGr1WXCwEt4pPiVJX8xGjEH1BLiFkWP5yGfAy5fv9VYZZ7ZFFuVdMgtQemWKHWBBDZKY11XhF9sqJ2",
  "key31": "BHMEg7fi2bt5HWdBSAUmSub33rr1z3DDXeMzWX989nCxz51nXjsxEQ3mMt2LMo1GFxA7C6PfPoY7PNkEHRhj65f",
  "key32": "2pALPsESV5vxtkgbUspTW2naYdSiB1nNo8MdGe7JmoC8omGej2TwGWup8TKiKQSufXCFVkMRnVxGghqCaPsV3voJ",
  "key33": "2LbJnUKi9rdeosp1Diue3do3haYMhAkHGW3gcb2ALitD8g4SLqM6iTJLy53Nzx23HGZYRUDkQPvpMxj2y87cP2wU",
  "key34": "4RTna63PwPpePtX3pjK5FinqePvbkBisMJBaqLcRakxx1sm9qhCGdMggpATxj35MtrQWnVGaP1bKxWz7QETqmvn",
  "key35": "3jDGSPcgLFecKLBcgxLNJsSuvwXvVYVrNNxToTCtcXPzDpnyEYVsTz6CoFRqxQ2hGADSdASVH2KosPN8G5neq7ER",
  "key36": "24KQ61eo9iPu6mBwubR9fKcH61EuddL1vSE6bQbzBJYZBeuQdrCwSNtZLcvPrLSPL7ZP13zFTCtgt8QteNEsAGrd",
  "key37": "2kCWrs4r8cj2SHszQvw9vB4JAMmdYRRKkomRyefuGoHtQnF46bbLZMBqVtHMckWHzfuMZ95UL44ooyxpSoFcKuSQ"
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
