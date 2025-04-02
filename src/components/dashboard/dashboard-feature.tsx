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
    "53JjsiwDk4EHav2pmnxgjQYPwo2ZiB2AmmxNue2pb2Cgp8PqrUsszgkyLnjUrTkqrDTCvFtw1SV9o8GSWLCEzYB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQXefS3EG1ZhD3X5zEGiU46gCnRHPgvLkBcseDdiFRWNqT4wqpSkGyTSayEu8aaQwCxRsudKv4oU6fGVdbsYYeh",
  "key1": "61rpQVzdEWgD6zM2sQa3oHWhUcLki2XMj4Lu7wY8y7D8Qu38jC9LQuDSekro4644GExH2yZxjzWHeMQk5hs5PGqv",
  "key2": "4KSAq2aGPLNbLTsBc7s92HTPQAPtUCAx1hvyf7fyNkrz6Fczb1LtWZtaVFbgUfR4dNxegZdtf8GNEk7k46aKGgjX",
  "key3": "zqB5LP6Nq4btsxy78uap89vPm3S8qsiXXHaivLEAq1b6tfESmrC17maigm9tMM44iZtagUdmgGDLurBsYtcJMTX",
  "key4": "2eCCQ9ZmnJD5f3e3ow7tYjmPMv6mE8ygy3ERYy7K4hRDyXkfZqysTZJdLmwhCcbCrUvW3Ei8TXjzk4XDzQkjHSYN",
  "key5": "2kgVNgMgyBpSeBzypveiBrXQ2ubeAfJHwH73vecqZSmYPvG3dceLxpbCwVWznMrswP4vqY4XGzh3F9Xh2XsBUr7z",
  "key6": "dJ3UzEsLtixoXGSrPXQjmFSEXuut5U76VF4FYgsKgnsgtws3bDfUtW4658WZAuP5qhtdm4pbvK7ymgR6jYUQuvz",
  "key7": "3ufPdH3EgWipaq78oSUeUSqqrisvRAhCJq2xC6SPz2wabN4LoQTKwEFdCJ4uhPXoh7LGFvHQ18KUSeqVN1AX19tD",
  "key8": "yDsuc7p3iUWB2yxKVzXy9BbJu9eLLtYCX8hNn7r3p899gJCEoYfTQs129EdcdmqSfUbYaX88WiDBxCDrq8Zx426",
  "key9": "3NKX43jEHsvtWaLSPHnqr5w6iQSVrtUhUxnU8msnzbFQvmGj3CJENjncgVh8yWN4tss2rbXbBkiuhK6fUEEjFro5",
  "key10": "2gfB4u8LaQ5zuUeFGVnoqTNdARasnkhtw4fU91VtVrg92SbWSdiashb8yavSgv4KqGJNh33YibM9GNpk4QjMr4ub",
  "key11": "5Jxu9wLjNiG41Yk5BkManfAhtBU2xDSwXTJKDv39gk86Cpjyh4Je6ebBPTYcK4cNoDHJ2kNx4pj9Axz3J8A7UPpT",
  "key12": "2GcbgjRzvKzbvosfBgDM3Ra1S8tuBLN81QvvcXdKUbhs6VYoDFmS7EThnR5fN3AguEw8benwSBPxZjaTa6XkzVVG",
  "key13": "3qMFpnnXTSYwkCjioySJwQpMTTTMb7AEKnuAcPy74g8MSPGcnRf1gqiwh5orARLEELbqYMroDWJ4KftoYsdWE935",
  "key14": "4S2EZnaJCJ7Nqtwim6ydXxCYypzzoPeBGxhRKnDMY7CBU25LLQcrQezTnUWDyssNdDwgR6uzuNpTJgzYdRDM3b9t",
  "key15": "59qkxw6mycZcr21mgj5e5WRoG68rHb6mK7n2L6ViWDY1nbff6Y1pTEJE6qwp89cv75TuvBTnof6PShJM1bonyFSR",
  "key16": "5X2uBhb6PygKPYkeXZxoomoZdpym2xfJXGeL66D2DYhAWFJaifYSNyW7g8ai4t5itybf75tVZffyoyvdpKDn9eac",
  "key17": "252tRpJZPF9bB3xWkDoSVUikJqyyUppnRndEXLUgyd39ke8p1nAbQNx4FpDgqry5sRr5RsqPNEGDLN3C99DBSe6p",
  "key18": "2oJ2bKmDxNRryYVhnrxGpgne75tgLR1yXtg7NK8Jd4SVXCYWSx1aaYvLpWd3bpK4eSKXUvGvB3BZyNH4LkDGFrar",
  "key19": "2hTEyr3BGPMiP3xSJvmaywPFcf7YSZpWqbxmQeFEM16FSXp9tiG4wX4bPGMjPYU9mTsVV2gRvzLqPMhmiGq4C5Ln",
  "key20": "4veKykf2WjzcQFxL1YrL9FoGuJC1eHFA9aaGwZUdiRkRSc4kyQoAQThZGoyVXtH5aKh5y2XPqTaSp8LyFqPREiuU",
  "key21": "5MjcqWMeaf3xHwjkXgu1WikYGnaZAvfHmcYw3cgQ7wENrTHPBbsWFy38B7tESpHy82Z6FAogzMcD9sP83ziEa6WV",
  "key22": "31DmiUbaBnheZMy5zZPfnyt92AuvH288m8jHCvecCfzCypX4U4ftu3u89fFRDU6Ex9pqXrrLYSbJnCExDueZMe7G",
  "key23": "4rGNuGMui9wQbQi78QK87Hari8T2ntc4conMkLaewr1UX81TWps5B9Xty1DRRygvzbgqKoS8thhKcPx3oQWUDztX",
  "key24": "4jd1pK92Rgz8wzRQZoVmJ1SdNfwtdMccdB98Pqfe8iLvShPoUX1HGF5kmGnx6ziVPNggZku5cWQqLHNxf8FZZAnJ",
  "key25": "2xxePvmsaWrXSReLVhMUPp5LLrcNFUtg6Ne6kaiQrnp9pysZmwK68YvYY7KP5hYDNqerofHknFKvRwbick8m2wPQ",
  "key26": "4WaY6cbirR8QZV9PnDBF5ke8x2VyEqaJiEPCwd6GvSUo4eGBzBJKq8t2KHtRzbSyt5PgGruG3XfsPVD1LoofYriN",
  "key27": "2HFdi3nbJTZBUWHZ1VEDCf4SvxYX5ULfk2oozny2EGqfu2D9rniCYhV8VevQ5HZdDYGq1zyJCFVytBGnN2wDxWQo",
  "key28": "SDnwTTSphf73pGdPd69G9sHuzXP8oUHHT23871THsiFGHQAaag3x5tC46iyy4yZUhHMb2AAa1yb33t4m6nxzEdq",
  "key29": "31DegeQwXxyaCxk7PF7NMMYUEc2378bVTpH95UDECtbR4khqmJ5VfjmBEFbGJTRrugdXKuJQ2G1j5KgNrFGFP5dS",
  "key30": "BU8FNip7zZwDvqziC55wxqYiavxQ25uVZ3LTSQwyyWB9sbXa6Qmgk7giPrnjWtVZ1sjwCpdYp31BTWcdLviwxCJ",
  "key31": "66NPc85vKRvHX4LFtktL3dtYZfNaFHyxkngCh34saMQYqubQ5d9zayXkf6rCLrBa3frkVkw7xPoAFfDqB1hpG17W",
  "key32": "4dRh4CEA5sr1vDARueMyUoAFGotcgNE232y5Fhhq3Z5Ry4xVhGtCSkFJ25ShQEX1pc4ks5TpCzAB4v2nhqhXB3ts",
  "key33": "2KotbdqgF4XpxFvkk3eFaxKP111Etv8akWuUYBe8ArTWF4ATympjnNSpFWFCFM4Qb3rGaDfE1Lgxxf3XhK87gHrP",
  "key34": "4Qf8ejvDTjAuDebpAgAgR5AbXBZ2PWgNexMxQjeuVjcPh4kXJZNVj2vZgnjY1iRTTq1MgpC4uewPWFW1GfFJBk2M",
  "key35": "QHTi3eLVBMZYGC6L5c4tm6viXSuxXVTSULw7HfNSgBXnw4RyufNE7ZSeRgaMKqdPVV7cgYTwgeSuWAXZvz5UB41",
  "key36": "3m5kBzwP3Q6oM8CN7yP8kEcdNgaRyJKWgTkxwPx9Wu5wkBhb7NhKSjJ6KzN6YUnLDnufihbpkAXrPG2UkgJZGjvB",
  "key37": "41h2jAAQ5nd9HN61PjBiYuNMRJUYq2sf1PtFWUic6G7k2XnfA7vveyqwcePyLrRs3BNU51iTQsfhKRYXM8Y33hmQ",
  "key38": "BpUp3N7BiwSrgwwXHmC6S4eAjeUpbk9xgeXFT7XbqyGTi5juAet9enDvEHSri18dJjUjUa3uQ42maxhTdmmKi1x",
  "key39": "fkun72Gups6WtVLm3vtGFN6oufWjAPfmDoZwuFXT81RiEET56yt9MyeyUaGDMEeFznjNYC3MCCjD1b39zk3vvVC",
  "key40": "4qD83x25oaQSP5AhAghYxJvWVBh73oNuqJfcgfRQGgvfQ3qNDs5z2y8bc5bqsoHW3FW243AJsCqKwtyNEAKpEqQx",
  "key41": "4XhoansSwkihBWocDvJ6NeHEKzZ9SZ9icgzrRr1hvzTSXDeax3zPwh96PwB7d1KRRgXpdsch9DnXHsKiJ24ExtNe",
  "key42": "FbACEjADWytQAH3CXhf7Px7mEdjAAZwfsXhjFSHMV33xPbyZKdYeXNk4MP1zLMBwSrTmsJiwTwbjsp2gRaYVUdA",
  "key43": "3Ghf1mcmnA1wvu9XVB6ZgjLYRoh6gFtqRnJGiBTNxJHPUQyfP7AC3FFAn79eGRMDS2NF1wbCRkUtH4MxBPz1gbf2"
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
