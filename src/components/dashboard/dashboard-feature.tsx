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
    "WQoYjn9yemp2qxKDFf2TxjaqU319BJ7iRigtyi8eX6zfwFKcYUbMAvmfebAGCvc5U2LAKCc3u56tDv8PLQTfj1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "219XnPq57FJ6AyC12GkpxBZtEXHJedQS6reZJPg3kq2ZwgEwSmrKXgQhuesfhyPcLNruhaPPKhZv556BpKNVoAw1",
  "key1": "31U1KvVeXczfU7FGj5bxrDftn4b9nMmWXCuc25hnj42Em4YPXgqp6v4cuqE6iUqq1aS5NgqRJLPyCTvSqPojVr3E",
  "key2": "4MCcuG3BsAEy7PNDCJk81zDVi7stCZw3iCp9pdU6cf4xbKw6dMyZHPL6jJDB2a8YkRhuhYnWSRFR4HBpdzs5GUsb",
  "key3": "4r7ejcgTB4jLuBXGi77LRgwiQS9oK7fU4zikKZ4teQ2WbYEts8VTkoxtAwdtLsGKxv21SKB18p9agXZnPLMLjaVf",
  "key4": "4RVLweigYrsKGah2FVSCE22YvxxeGsZLoCoQSL1VvXiEFmTEavVqK81XbtiHJdq3Gh6nbszAuF6ZFVkYqvUwnXYv",
  "key5": "3FpAvTukb6pRvCJthPwwXYP3nSAJuJtnR3Ad1sktdZRq242Wc8vo6SJaHEJ7aPt1PgxJytSrYE8J2SM2GYXwUswS",
  "key6": "344QSTdCvUi3C6s2bxfAQKk4B2kqBmgCh3Q79qRVLRDARA9dCU4SrkBYtXBN1Yf8pBEPEMpDYKaHNVX5BJSAakTh",
  "key7": "235puXWzhvSxFNL9krPJ6kFUuZFLE6B2ZXbcAvteHrRS4brQiieaUPpbwVMvGjJMB6WWT1Ah6T3X4tYerdaqWJe6",
  "key8": "4F9u8FZ9xKT93fbuHGtshHhAZzncD3D7sGyHyEXqbQB1Pcnybojh32UtAwFdc6gJWYtbEn2irMPFGaoL8uGCf7NJ",
  "key9": "5NHwthnA7eFX9p8qztionSA3XEoAHK2UtUNYNj3XHSge59X1iUVsYubmGu4W4Hx9uWTBrNhwiNdpHVXpR9epp2DD",
  "key10": "5VqPiwb6Mg7vhnem1DoufXk1VyR3X2AxJJ6Lg7hMmqh2YWKhWs4Pkuyyhgrnwz88s8M1azcNsu6KZhbku2XrWhDB",
  "key11": "3XcV5W84haSaPFv4SXEEundXXs7Tg8TVvdth17Edd3KN1sRmXi5W9pCCjYwjLT6z3hw6bA6i4NvFmcRTjFrmSZsY",
  "key12": "2Lfiah3uESbU9Qqvm2Pp7SkeeG7s3375G29ScEZDicWuN4sNdzhscpEXCQ1pCbpQf8gwUppENZ6RatnRSPwBrm9F",
  "key13": "3uLHTJvkQ6arLCc8XQ8yYMCo6GrfsqUTtYKHxNiWP9BQ6f55bWAE6GHgKKdSttKTeXZ14pba1JEi9jUfYys3cjkz",
  "key14": "4frw4p6e1s7gayxZ1Br2G9qsrHwME1yjVrUFHGsUjEufE6zVC7esNKDK2uwoL8ESz76Dc7zVM1pKJiCPpp5kthRf",
  "key15": "4rVRYAiMVaWDto9J2tGP5zJXpKm8zxxmm7Fn8uMzTqcRoTFdKewFq9GC4nPoewGt547oTU11AgjTP1dShKhCxuFF",
  "key16": "2EdUgzaYcjXk7M8w7Wqa3u5iRkimaR1YWYC6bWABF5JS58ozwaNKRP9sfmiuxkQpcgfdPQV3RvdbVn2uMnVqMzTd",
  "key17": "4UZZ9saxrUPNPc7JnpDua6pLgK8vqf5SXGdJKUgBkZSvmHZxkE68N51CK4zw7h3whNUdEDYiBehARpfXYaNpCmyQ",
  "key18": "4aFsQKYPDN6w1egTzAngioHm5esZ74oKyF7iTcsB6WZ7Lpm9XPAVMhh5NDi2hyJEDja8zzhxhLpQcTSrSkRbppYN",
  "key19": "4RJHNdnNTr1FroxC3fbx1KG1voMv5trmGDrmmLRMVkfoVWPeWdhAckteLmR18fwueoYmCY78ktPSuNMNnaprVMnv",
  "key20": "33camTFHaVDjbHZ2CbK6wkPTZAA5FUXy9oFH4JGaXcRXfWLFg8YZSkxg3qeTMYWBMDakYGrnkA4VwAtKQNFmXjvB",
  "key21": "2yDaqVyqhh98DbqjdhjASSjgT12CR7qv7NjNPXQqueJXzz6CezdcKuBB1kxvtYiPdpCYs3pa87Vgs2K47qc5HyuC",
  "key22": "PcFAgVB8CkQuTn4rDNSSfqPFdXVBQMpqTiS8CcNTzhn4ijahmvXat6GDeu7DSpUmrgNKjZ2Z5Mpy8FztdFk5pj1",
  "key23": "5swpQNXeeGaagDNgqcn2KShG8bGECNXH1J13Xyb7uDVmUXiAJpv8m4vbHSnMpiAt4oHnAFBxFQCP9YyqtdxgQDpS",
  "key24": "3zaGqQ2UQMKy3fVgVSybeZQW5zg8ieAq7recQybgSZSZ9KM8mXT91Lkz7FWhurSdjLustZyB4ApZyCGSfWmQDE3c",
  "key25": "44EfPb2gxsTv8XJuy7J415ze5dx9pZwmGQ611i7CH9bayFgzJ4fH7AWXryUV2VsENppiJ8j7SPZVbSCPEqRuzYe3",
  "key26": "5Lc9rrA4onS79KvySbQtz7rcPzPrpswJtWpGz9PAXZLiSL9i3BaKikcushPgcYpzWtJiEmvceZmGxfhFiAgcvUgT",
  "key27": "3sKJso5TVcxsin6ixUjJQs1JoCphKXm6ArqdQSLCNnS5QuJsBJpDSifR13J7ZVcejAZ7yw3FFxSUqk81QiLrCJg3",
  "key28": "22YEP6UFHDQHs5FEx7hsDcn39o5yC81AzxYhJsMxaGtVZ88b4d3D15k7qFF7hszSds64vTaaV6fhYfXLw6ShHDAF",
  "key29": "2SyyW61KGVVvYuWhCqNJCGS2nvon6tF5mZvntiC74LFfEg7MwEZ9nRz9kK2LZDPTHBEdJN5tdHtMdeH86JhrHurF",
  "key30": "3chkyog2fcnb2WPaFYNjVdT4uGQUrkG8gTZuDUqQ4Ag9sLfZV11gLYqzyQhSay73EgU83BVWKaq6Rowjj7XoAzHz",
  "key31": "5g8Wzkqtenwvv4WT6BgHME2j3BHEn3epZvihecBvZvET4LgGUwjPzcvqsHg13gvvEZW6eqQJTjghHWSftCtUFHij",
  "key32": "cjeTrgLVgkrndoL7hmgKqNSofXCRLae8WJch6ziDPWTp854Q8WNHJJ36oqy55pG6JhzQLErRPphMfRtwbz4dFUo",
  "key33": "3mHtrauimq5W4Rp3nzdV72n89gU7jkgDrQEhbvv6Ztqq5XYxkJgH1JNZJoemsb7kYsDdxqs4yDqwZiScn5v7AxDL",
  "key34": "3vwoS63r7ujNn7atyCTqwskYGuqYwzjtSedq3mhKAyUjcrn3Ajvbq4LPqQrpGT7LQYq2rNxrWMvMEuf2oWP6Eggw",
  "key35": "2zroAyJTuioJBMg9jNBCxPt7BAjV4b2rLzgfqp94v1h1Q3Lb6pW25woQ92isSU1GDRQEbhvok7bGCwcJaNVvhPi7",
  "key36": "4gKu8kuAvviJrCNLCeLr3eqVdUoYkDnySof61voVQjAREHY1E6bLzgDgJt85Wh6bphHLCdMpuzTxPSPyfK714V1p",
  "key37": "2PNETo7D2G2D6K3nYu6XfRhbNDoEdLGreBqEi9hLKNbyQiE9ZKMUsWLKC1rZrbVhH3FixWteiRvQY3Sd6tjGkFjx",
  "key38": "631SARmuyNo7otWZSkTuLoM33cF5YatSsrr5wQK2kVQr6EGC5UKm6T78A45a24Vs1jzbM4P2W7aZKKartnwLixcd",
  "key39": "2vjCiHxLTQ7z4CttQk6iKaGEqFcbp5nnCKLmhtX3JyHSoiSihpZpByd3jcQKqyXdtqodnHiWGRGAu9EarfVx6oHt"
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
