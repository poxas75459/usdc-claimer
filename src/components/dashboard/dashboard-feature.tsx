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
    "5BLF2aj3ck4scbW88tzcAgCzHSTqK7Qz2vhkFt1SBLViQeUJW1uU3AwgxVgJFAdXVDhBsWG1xMBQitzw26JLLz3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22M2RvynewxCvV9AVFvgeceRVxofisS3RyRLoqfs1awqpmSNQkvmG6GCPLFzgHycRbXdeWF5i4C2NMpCS9A9WDKT",
  "key1": "36RXrmaDkYR6jjFNKM2GuNfqjkCYWDVUckoPNAkAzbHr27G1DSzndqrDEEq18cnFYeRi1CbProi4w244sbmW2T13",
  "key2": "4e5u16poTGbkBpCiaMsU48tCiDjNnwfMuhTHCF1DPQCvd22SFnGwYDipfGF19sGFhz32Tz1t4FjBJvLmNZdN3MBi",
  "key3": "3prXQ4j3yL5NCL1UVPuiw2NFefBWVNtk2atRu1X3yWESif44ZV76iz7K9iLwxwtNJppEq5mXHu3529U3qxASDA9k",
  "key4": "4YSzshmq2vq43nX2aJ2FnwmBfrNZhHvzySFTnmu4fep1hTedE7Y5KBy3MhWGQwiv38HKGXeA4AgddhTMWYiXTGMK",
  "key5": "4wf1oChBiigXSJi8mufT7Wtqea9ch16N6G2xEaLc5VbLMKNKjTHkefXZ4tTM6Ta9eAokPiwMvotXwc2iwhosw9Xf",
  "key6": "3jYrmYsNu192ZjQUngWJug6v3nRk1zhP7Fs79jRa42zNBUMu9Gs7wWQUN63nCDnXb96tm9U2K18TNRqTgrCNuFNm",
  "key7": "2ykz66DbBFaUDBHygr7KsygYcGhhD67ujfbFYbtA4wF1W55xksi4uDgLQgN889HfNSzAtzwsTG1fbqGteShLAAY6",
  "key8": "2Vi568RjBHGpvwjgSqBJYBjJJSLmiqLB7BCRftqYD3hXtn8yohDqZRudFZkdNQ9caytHoFLVfKkwfEML4bLn3CJr",
  "key9": "3R18nsWZFgvDBd3USsqFQPJHRfL1PM83Wei6X7P12VwwPB442HK8B2qXSqkgGisRJVi8K8ixBnSZixDtRshuN9pp",
  "key10": "24Y7o3arRTEz7aWSzddF2CkLzkABhwXd3EH3FPfGTQ4eMkpWfm9Ybydk2Vdz5c9TmmgeJwuLrzMnwfc5D3zXVS4q",
  "key11": "9QHfD5NAhYHyeNo7EM7dm5eCCQi6UNNTV3d8W8LKt8c6YZxzH7wWdRiMfPJsLX3SVbDxYYGLPw4RMBvRu3Ds4vB",
  "key12": "HMa5cvVgnQoTCxMgzqLWhtVvGy4smopLm4MsEvP7GhLeX3G3SAw9ddJCQW5umh3uvVrc6MzTEHz9FMrtJjyMFJf",
  "key13": "4aFBHCZqXEM1J6C7357uF7gGAFmYNcKDcQgtN7zu7nLFM8h3FnNgjCFDKuty7vrNnrw53wMEW3NnewtHcQBN6jV7",
  "key14": "n1XbE2v2fHd6HupKC7i5Phkk3Cxo5MmtS2b4Ta1HqU2mE1u9mrKd58PLQqy8XY5LYcYjgiodCVNTJKN7VAm3CeQ",
  "key15": "23WvbcRHdsDnNwhpvrmREsfmUC1aUdWJVeWV54jRzaz6w25rNjsjDZA52Ev6Fi9foXpdAzGqpcWCivtzkScNSDph",
  "key16": "2cWkbYT61az9FeDbyHSippQLNTVsmMsYY2L7KnwTLMBZ2WTbkKQv4KSSxG1QvPgGiekSVWi4Li1nk9QEWSPp9g2D",
  "key17": "2QBTFXoxHwPvyuv5JiRsPaYuGjGeNBrq4pYGe3tPBw3YFjst67ZqcrA3grnoxWjzpm9NEPYM11Pkowk1LLrtcnhb",
  "key18": "2cjWHyqeMV9z5pX878WuMK8iMbWM4y49sKrMHerVuJkLhqSkUZ3Rto3Nq8ajR7sD8oyA2e67Gfxkreo8awWMQWTJ",
  "key19": "5PjELG3RMQNftCXsUpngacWzqQjjn2z3u6i5tpWvzuwiB3YGSkRsDXEANMJAQs3wQ68gGpH2cwxhbe4Bscd6Zo5i",
  "key20": "2xdGP4h7miUNfz8DHbLG8ZUz9n2JuxnhTpK9ZSgewx1MPBkK3Ycn7oLKoTGwiPe8RhiydT4XxiCpMp9voAJuDBr9",
  "key21": "5N3QbsQmetKoeMs9kKFxUTaTVjmiEt7VcbJ9NNzXLQwZai9ZuhKgTGwt1Jv1Dwr6JFtGWc7NMer2VE21fERoofuj",
  "key22": "41CdrrKCQRBdFxADKV5fTAk6dY3Sf1oFrD2NeyFuYpN6xT6re7HJF8qBeY6fT9v3QLVArcEbKCyjx797wpGDXqKj",
  "key23": "DvazEezNvNdRGy6zszGXmGWhKYW4pDzwj32TVKB19ex1y1LLqooYJGNb8EJTyYdM4kdFeZBhXegYTRFnHDmVeTZ",
  "key24": "3ewvhxunHGdH5pNSjdhpDKbPMzwKUqb8P4uLyUo4ckKsoWrFQM5HrB9aZaASCjqSp1NunMNKgQtY7SBxKVrqzYz",
  "key25": "66VUMUMx2pmdrnTAtXPX1SSrYBBd4AwAhSdRcKes1BmDbqq23SvQGtadraon3LJZuCDTqnsomMMwGYARFCWk6Gje",
  "key26": "Af5LjVKd4h47ZiAciWGn4EGP3PxGvoULEyBGvf4pRkpV6kETiH3eHX9jKKCT1jKyw1Ki6s7uSytUe66MiFo7XhE",
  "key27": "3fyDrkAbAhqxLaf5fDDQzykQ2gTzoPyjUf6gyTknbzanWXpACfSnFGYiPkt9kV11DMXmym6xTUS8sCLGptAAJf8p",
  "key28": "2kCNy8WW2cr7SSprzDJRbDPFneBengczNxQhDkc7RGEo94ZB98p2mvhV3uecfFbRQtQ9Kq93pbgxgFcRBCmDYJKr",
  "key29": "9mqP3AAu2Kpyh18e3Yn1xNwzboSitjY5ziH4a7aJSFY7EifqR8FM3459CDrLDtauU6LrfButMN59ibEnCZZjn5K",
  "key30": "2hwkoWu7h5qdGZ3yNhXvPtoav1sHd3xgxGkMqzLkQDn9EfoZMH8bHH16XUoGairTRW54wLhdRcB2cSm6HoNAu55p",
  "key31": "3kW1HiGKegL4FWhkByE3D421agAtH3qf6yCRcCh4VqQ181krqF2sTLsFjPJS8k8HMNRSSVLrC66Pf377vq8RkAKa",
  "key32": "5PkNdG9iXge25XTKWm7461DnjCrS3n9grp4AtMwcJDZtPCbWM7vqocyJbgS8Rts4CG2JLVzSttGXgGViDxEKvuCE",
  "key33": "45X1hR2YtZZV8ZFGKX3E9bwdvqeroY7bZkDa4kxiru4PyZ5hU7W7Wngo6BHpSeYMhxrEZ7oxsgbZL7s7fKDrENxw",
  "key34": "3z7aPQr7FDLBpTef8f6udtazYUF1dUwS6tnNymcJFV3fN9GCuktjDgLy3YLZ11Wo6mJ1BRsb7mPdDv5LixApCUNv",
  "key35": "5opUVEPPoWoQgktG4w8WDgchdhC1j91TFMucUeKYyMyVJ8ankon9saaE8Ciftr1tqYim6cXkhs4YdAkXsmSUiQXK",
  "key36": "UBxmioKyNAjChUAKvqG1gSLStMqBxQU855UnSpZAYLD3enfmvuSxhQ1oJnYg7v1RPTeS1VMXeeP236vhHfqDhKi",
  "key37": "365jcUtaGvvy94BBRPjHZAKjkF7sty69r4JzvV9USg8LKnDRrMi3KDuHPFVpvvodj62STxDs988cnCLSePRCaxVG",
  "key38": "31mKCZaP7KDjh6WtkShNqJGjy5qaACm91U4d33SHWjrmEfED2gnbpRoNqkHMCrkMWkqADgcRzFiz8oeueeK2cEiY",
  "key39": "TX68mLpH2abb5SA11m5hF1PKuFQ8Hc7zk3L6z9dWtqHcsjjQmWzzWwkau5Bgte748EWegCtD1gEK6oTno1RRtK8",
  "key40": "3YUrS4H6igWMKEHZz3fvPtUcneS9cQMmsom8HBAPTtFWY7xxrBE6HUFVMUAPZXJWYJ1hP9DSCzFm9NsFGKnnfiNr",
  "key41": "5d7XaqiyKXZXH4adC1ehbrrErmKEP8ReVPDJV8eVUXriXSfCXY5r6gvfv1FRHxzztb5AQYJaXEwUR6kTsRh3rAr3",
  "key42": "5kw3QyeGHXSLRmebRYnZPgiGRNzK3Dx91hujHw6zGSXSB9PNaYtPZQiCFz9CZunSD6yc4DLfoceytNDUNhexY1KN",
  "key43": "5T3WRZgie8XWYbKij4zXQPqviGzsBgSmXFvthvs8a32o8kExLyQ6hwtHJsdVjYxX83uMV8TzEyd8yMUFPFsQrreM",
  "key44": "5NtMZcueqQtkidxkLhv1FPegxCzy5rufhan7LSCRoxh3X94o8cpeKe55njkpYAG7TLXUWGY7cgVa5TJsZfN3uYj1",
  "key45": "2FH56V8hU5UQnJ7bT7QyFT3F8tX4iAWxJoks4tJFugb4Sheott5VZqU91JsiEKSAMUigRAKUyTXq1vWfCLt37PpY",
  "key46": "43TaxK21ui946XCYQjbBMrRoqdsLkXjtE3j2B1GKdksx1gBoLkrcNJxuZSRSYvqUNakX5UDUpvjQN9aSmDuz5K5R",
  "key47": "2vGF5sUdETkktShfk8QxvC2kxdFBrP2oSici3XoPWJ9VUSmNC5p9ccojoCLAqNVTP5K3zM2KAbVERTUqz4UQqTLv"
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
