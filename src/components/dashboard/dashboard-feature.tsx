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
    "2HdhAEBdT6EaEj6eppotZoPhcAET6nXidwNbEzcxuFGuWdfw2v25PhGjfgWzgtSSffrvLDrqbDpRq9xAQXgvMy3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nn7iUDqz2MYgaFLJmUpU8xYASKYWvWqy6xYJWTJ6ZfDDjsztAh4M6NgNbjEnwuag8U4o25mSNFXgiLvNx6LLGVa",
  "key1": "2qoYqdiaDxdvHE3U82a6dJWJXBC2ZkVNE2HpX31bsioK4gFUjzuUW64nEuYQaDFPf5NdNQ445vdzmEyhdUCe4n2d",
  "key2": "3J5YgoHT7kvw7qFss68zEjXzLxkXpeQRPQyUWoqUBMjDf6igzri3ivpGxUSqTmR7NExbNSMGmYZpoJCTXgdH2Zmv",
  "key3": "5vPfNXJiErMugJf8Mo8HPpRunyieZTPAntW9o6HwERGEK36YDw6oTH4AisPpfpTWzRWV7DYxLHJBJTUtZkrRevUp",
  "key4": "JRBAUHFcFjG7JdBjCGgAcUKRquAFT4ysZUqGJu7UoyAi24KfrcG4NYwEi2U3vRmUhSj5ZHhbYUkuU3i7ZwVDYd4",
  "key5": "2pPGoodQM63vVBtDHrv325aTfd3byU5PSdT99QsyoVefnBYqU1QTUhWowEa7RvLmBkGg2T99mpgADmf1XDe1qd1d",
  "key6": "4CsFb7f6ez9nybeucVPYQL4wb63ywsKJ3K7Qorqgf2AAj1g2m6Z9TJZo74CJLiBvGdhmEcpfZ3bNVExVFJ6QL1Dd",
  "key7": "3QPd6tc2FywAA6CRF13779F1FbLitiKmCyNcEjCRVWS24YrYcSbxszNemQ1CJSJhDzY1Po3rJpE3oC5QTtczrvjX",
  "key8": "5ruSMr8DFwrVxsFk1GoBJ6rk34UgBR7oviKmhwno54b3Kyzptsn61eZmP6xpwv1nWNCNB3Vu9eGToCNKukX8y7QY",
  "key9": "bRkG1aCvvMvKT9cdvjs2j3x8V2kGPTwFzNWkdbYfQLPUnyQ3USw3UPZ5CywFa8xnsTgitcYTuGp23gYi3uhu7iD",
  "key10": "5kEJrVJhjyPA93MnU9fRG1C6WHaRCJcH6NadtdaPd3pTuwjRtDuAZSko8f3tNXc9QBF2ruR6kZqfyLCtTzZXDvnM",
  "key11": "5isV5TqAhjBXz3dnqbZN65DvAkPaQfvQMES6t2v5M8X7M23AeJcrmdvFTYrogZMJsCafX9tDgzBxcCxyVH4YNHMW",
  "key12": "2hjS2zEJLfVDaG7nwacp6KUw7ES1Vjasen7tSi4869nmmC4BSyYLLvS75a38KvNSSEs7RvvQ7rSfeH2nBHkaTknu",
  "key13": "2HD4ZGTMwfk6efaZxaJDgugcEnJ6GAj91ckW7r4mtwuXFdpKWQkpxytTucknY7ifb555mYYD9QEeU5u1BCy9tTtV",
  "key14": "5BgopTB4k6sU77fRQJgE24Mf9njfy8ktaivEmv4738xtS7RbPc33Jc3gpZNvvdepM2mJugvGaCcf2eF9UyWdqnuc",
  "key15": "5Jw6QkFVPzA1FbgrRVEvtYfHLe2XFPQdGx8ZxYBfB8Vws93QAR4ymMgyEAvCx3c43jZsu86L7uMYpizJe8VcrcNW",
  "key16": "5k9Rdn2LQiffvjUiDXVGxWVePd8YwbA8UXqi9ZDxBFdyVyqYz8WX4qU8SWVXbQmBak2s4RyAH3Ld3d2Wd2m2Y8Tx",
  "key17": "344mZT41ukXf9AJw6ADEpop5YxG9QbSHU3wAXVMfPJVu3ZQUTURce8mZUoz89NoQVezZSsSVNzojoUN9dRnzotfc",
  "key18": "gHMLLR7NueujskWsc3TmkG3FbZHupoTzimDCTHQMqDV5PwMZFwE7mwfhu7Udxa8JN7J2s3vSZLwyPSQ4Z3mJ1yE",
  "key19": "4E8oPWVw2TtKgZb34kdtoXhm1nz2n62wXgeBdXjAMmd2nxEG1R3mFHynp7GtjYLxEuqracLs9pmPbnzodEmE2rNb",
  "key20": "64vAA9p7KgB2i4eL6iMu2NXbTckormEVfzjqq88o6Husp91cKUqkwCNiPD5cHokoj6hgE4p8sWrmttJtXwADUrEh",
  "key21": "2pErysBSKgmHcwBeHGJK2ESkKbbrdUzTtJWzzT984X5ESoqpGgUuEKoNWCJJnXE8DYpqJdSzyi7ZTbBLXCgpLUtE",
  "key22": "3yrjNdSFy9TCz9dmiMpL8TigC5XtpHKDT3nYrqGcz735Mkou9jE7v4TtT3pRGY5puxh33RL2gsbkEzbvpYxEdTSS",
  "key23": "4yyJ67VQQatR5nkwubaAupAjtxGtxdPvQpgtqprwtF4E3xF6YwC3tzxN3dMnMara9TG9ht3ouv7FKtZjw1xWKn6E",
  "key24": "V86uq2JXZs3j2HAeSYg6ykFUYR2bwGfaSNVyNed8jV8mpEKbQR41aY2vwDbW2jGnk5oCqtbCxpQQjYF3mG4VKG6",
  "key25": "3gP25xETEsyPaKCa3BuwfW34hZgmJiDn47CpTrhpohkR84CbfncKUgTUtJ6DyaX1DsXehMdNEhnNzqG6on93gyge",
  "key26": "3NFnv4kdgDxgncWWYxpcyif5p4b82nzEkSnwuLWNg5e56y9VuWUvjQnLiaX3XyqgGzMBwGDLoSWoVt9Z25MXJiVW",
  "key27": "3aggyQfR4DwxEreKWXeau5auL2RqwMWuYnt6BGtdAGx3kk7rhE6LC74isQeYtd4w3VZUj5WjRZfWBV6Q9E2aWpX5",
  "key28": "63i5FVnsUZtBZDSrNdcBwRhVqP25WnDxrJfw4NrGtX2FnCd8pGvqTB5LNL76kTLRCA3MnFmDejDHSsDMw1C8dXWc",
  "key29": "5cNERXRXTxtNyAam9Wvqtg5jwpf8BKLpyPT8ZDXs63pyph8vRPDsm8NdcS7nDr6yCtQL8zTDuYySZtJrxUJFJ8DS",
  "key30": "2tL2rcQ8JyW3A9VXDFoWrbpH3Jvf2CaotP3cgRbDbRADi3oA3KGRNwXMgQyDnq64gkTq2vfCHHqRCZAUQ67CqeJb",
  "key31": "4rSFK3d3V7UhW6zrC8apyRdtJih9MyeVMUad3qGh27Lq61bw5F9oApSfppwinkEHGo81iYPMjCvnprg7hnwnBMP5",
  "key32": "338ECRdx21SWfgzehEb9e3423h1AWXzEz5K57MdsSMqXSDXiLCa5y6WEQbLjTLtjCQupiexVbKVW8bWRBp1G5T8N",
  "key33": "2BgrtwEFMRe6F6RSSRfxGQ12ws7agRLm1HPHUrjDBn5sA4jcRAxiQJeo9C45JNyv2NtVyFWra1gd3yC9TVy2Base",
  "key34": "2ALtkQS78JwAcKbggnmyX1tSHSMFEazUACeZhFhCVTYqCrfgzETPHRAefeTo1pYxWUHx4STg9m9Uw9tEUdcFma1h",
  "key35": "3iby1XnoiTJcB31hXCuCpKVDVCDiZC6BZ6uNLPRoDUsa6NNH7VAFzEzhphk9gYAjubcgCFeYdgTc5t38qMWUmZsW",
  "key36": "2S2XYabHWMbLwBDwCRBpBnt8JVDaEtyDyYPmHDxtrdFBX5HWuRr3vBFef5HW1gXnWYfa7PayhQqKR7vaWaStGzZv",
  "key37": "3ymAtB34Gm7oUZcw3zFtKWkLybpV7dY8rCZLejbX9SYyt7PHB5dHsR7SN5aXxsZFE5qwBhYRcckG8MPx2ZAthjVM",
  "key38": "3t4ZAtxMzesxzvrXt6VzkBPHDVGhKSbiXvBKQbBUSQZ4rekJx32DwkwMRTXVspAHixJbo9Az2ikwszbUM2vo7hDn",
  "key39": "3k4VC6mqfEXmsjxykjZsBC3UkCQsAuzF2LwKq7RJmekvKqGNBfJBc9RkkrEc3ih5HJyRpYG97ZsgVYSmP3vVCaTe",
  "key40": "5jcoERTeT9WFRk9FWuXUitjWvTH77mNqDxbEPzN7xmNBB4uFQK6QYqHk5ydkFDMGTooN8XW2mop6AWySyGaiLSGg",
  "key41": "4StP1Ky6dj67NQh7FBDmtNoXmG3tXsLE8T6otzbRgdkLqiZdrfzdC9X691DUf1Y32oeJABEJLLrYTx7Hj8BpR5m1",
  "key42": "4CoBNPm9q7tYGJAkHA7MmoxNQeGtJhU14Ww6CJhyZckpUNVrsvStYiyFVAHpa1GJG4U3UwcySuo7u8nodVXLjN4V",
  "key43": "5r2Fm5bzfpreUqxytACoyWbHEaoo8UwbZksARajLVdAMKwD5Hhj4QGiEaCaHwUFeSk73fLrbjsieSYg3PbE1pLFR",
  "key44": "GKN2Xfsgra19vsG4LnERNzg6PCBgirhE5ZE5ETDxxmyFKv8nmT6oTiZ83PeQfcBqK1CJjPfYjg9EiHShv85FQSx",
  "key45": "hhXprACze8e5giq1mDo5HhsTmUCaaYMF5ZxXM4mWc4UYpmZRxkkP6yaGbJ39DQpHQsR6R8xrpmw3uspvTGHjNhq",
  "key46": "4trquBZ86SMZeuuoRAS2Xosj63B6CYWWbL7FkqHWskiPEH9B4PUDYcLeZE3cybYhQTSbZX2LMtxjjSh9cNJKkrqG",
  "key47": "3GGPJNHLBfKychv1NDxzHRZvrWVLXEcTegYHK8KiDvRRmC1NfBeGaqMh1HkGdZnSdw839fQzEzVvUinCJh1NEHen"
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
