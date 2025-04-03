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
    "2fhcmcwnYGo6YDaLWPWg1nJ5mDiTYeAt7Zr9ePKa2UrdvZZi5hweKwNr3JiZUGfUwDm6Dsg71ZsdmC8hD2R9oGn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3weWK6HHVYzTSQBrxabY4n5RPaZwC1vcMgF6jydghE7HBXyP4iJRoqttNQx9G9KP6Qwg3Fxfd6LbPiiM6Ui3qACV",
  "key1": "3eV2qm8UAca4V1A272N6uoMKKMaUY69y74PJKWaAVQXVHJBseu79QvPcCsJDH8h4G5WaJNSEZoteBfGbMJToPhBi",
  "key2": "4ubbU5eBUZbV4G4r6UoXKjd4pJBfcWJp5nx9HfDVd4jTxn8zr2GKm5E3J2GxtWNNrRjQJrvHL43gDpPQQ5E9NH3h",
  "key3": "Wu8H27AdHxPGqxKfrRXNWRAojtxMd9Jx9cDKMZTbZPi1K1fYFSF1Nd1fm8Bx9tLw8RRFNdkRUFiDbBmHHmysfhe",
  "key4": "4sbqrfx5Cik2MqU7zimMm84fnNdaDWMbYURcxBcZffgZA2aaYV62HWqg8meFQYgWZ3WtEd2zCGqQR4w5D4bYdqxQ",
  "key5": "4mU9GE2xSgLWU16Mvbuohd2gbjC5Wx2fgLr2kfP1SQCcRjahDUVUscgKkDaWxFt79MzZ8Rdn2DHNkMRmftx4eS8c",
  "key6": "3QvwL81vsKDsz3dTqEsvC2RLWoudVU41fGmD6wnnZPwbtNoxyRcUAZi3Swmk25CA6SMBxZMyg8q2FcZcu9nvNbj",
  "key7": "5WBQDE6PhQ2bm5GqzJQkudWqsx2teYz4jmQxbWHYpRH3S5uxpaEctLrxCPKogmZVFSAghX5BxYYM8iHjoTPDRehV",
  "key8": "4t9FkuKUpgPiiq7XUP2EyGjyNJDSZPu8riUvrmByihJabKQakwmiHfAFL7cymzVGTwbnHK6GcyX6atgP1w3W7rHh",
  "key9": "jmqKxHjEqwxkdFtFaCdwH56smZNZHXoHTZM4y2p9RpdKYK4TxoNftHZhY6Bkq6qNmWLN8PbxbpmQqG19y1cRHKg",
  "key10": "5XWRcW9DcFp4ei3DwaKqXfbxpFPHg77w1mD2wxcfKDoJEdm2MKBzmodDodBqKxzQ2iL9SmfFV58VncuYYJBSQSEo",
  "key11": "zJZ5rkcpve4ujz6vgsKWVs2HSFLi2KmZ1qVkKQms3tw63yyZ6SqGR2fQZgnLZBosTKD7LJBa59xqDS8WfWM25hD",
  "key12": "2RFJuNGJrqyBzV8vMitnUc3KfmMYXm56padSuxvj1fAhgZLYNESz96RtEtacB3SNLrJGvwkCL7C3upgJrcKm3f5U",
  "key13": "62kFdALigjBifFXsfzUzczSyEFdixfBPo4xQTXQbnCQy8E4g3De7ePqaZJLr7jz24sqExscaHAion58RW5T9xqMg",
  "key14": "9GW6eh2tfn8sy3fW2VGS6735x7Fyj9i27K4vUouycL4MXix2N9oq7wQxPxBv2uWsii4c8PDK7HMmqUGr1BGZn4Q",
  "key15": "2E7yyEBdtARXpqZ1EV8pFyqQJk3miRt24cyvJhR7ShwdqXtG9aABSCz5o7X8APFZ49jEuAZX2dsYEBj6FSEzjtr3",
  "key16": "2cox7zfWMD1FRSpkD55jFPsZAXCRpFFYRv5cmkeqih7TGU6SkQoaL1arQR21wXhpsVtmaDXLZ2rRy4B3uTfzRq9S",
  "key17": "5eQCBbyZsb2yeGfsuJ913sdoBnUi2iJTgXYxLDhhtAmXQimXqZwmMkaoQsx6ftaRJDcFBhdyhjw2SPqdmyLwqVJT",
  "key18": "3mieoxNaj6BjafxWNP5QfTkGRaPMbWZCMUBudFiQQkXycAPhz4M9GfFGDWALpncAEoLTqpndoyKu2tvfPjTHBJDg",
  "key19": "2c7KLas2PGYwduLDX5Ct1gPssaeUb1779U8oNW5EggXwrz5JSCoqEHKKtzsKwno6EiqpAoWYSPi51jgQ7A29J5WV",
  "key20": "2G3nwiK7yQar8MErSR73628ThfxGH3fdFRoznqG8QdZ7afhziP4s9HSRmZuys18tpZVWUuP1vYb5AiSYiWrq9A4F",
  "key21": "i1WziWGV9JiWgAPn4231FCAz77wSuibxvD2gMmwRy7es787YLRxLPQe8jB5X5J8LaEpkhhiowtAwBxVuWeLP7sG",
  "key22": "5Qw7FHama2pe8c7GedWgNBfVwAVYoLVmBaY2MXfc9BXkRCjR7uK46NW4xgsWZPz73DPQJ223aKDdJuQTsWzZK7h9",
  "key23": "5H9tMwPUB1jYor7zosZP1KLrrBrMXq4qiVpbV2iVp3knKeBX25uAGHiGqAxLNJ8cM2s4RbUUm55eNXDwpN2EmxxN",
  "key24": "3fF1iKh9QcE92pAqb9hEnYBGcXTuSpkxhsmnaYjav8v2izDg2YEdFBsfBUJV3RHoVk9XntcjqRr6qMsMdE6Qdw49",
  "key25": "5yuj7KjC5kmfFvkBWyeeFF4E4mF4ja7RAFZfwYuQwgavSrRawYGNvDxEcVpNfniDLopuyTWaSuGmPN8uTEhMQuzR",
  "key26": "3n7WrHbkHDWUsgmLuDga94D3KqdudhBRupUNb933pTf645F6g9aggyEJeUXaMstP6xpi1p9MNw6mCRQ4XRZxkNtj",
  "key27": "5YeGxGqW8nJJoUN1BEYheGbqWRRshyn2ithAhnvka1eMWYsfvWH7SLaiimQ6jXg3m6NvDXyke36YLdnTXJceQCsm",
  "key28": "2BSjNJubwARfENFawwLUyZukwUPdJMsW2bpkeqBn92rm52ESLqy1B9qiAGnjH1bjgZR8cDyb4K1oQpKiXtAMAbY1",
  "key29": "2S9b7EWk3Uw9u5CxL5XrstJmFJM1vEfpNuceMRHET9qopWuSiQCjWT72hXNUa44hNnAAQFW7F3zzcWB9R9fTSRBf",
  "key30": "5mr3KhNLWy8eSAMMpi4LEN9idj4HSe2hMoZNokN1CqU9jexYcfpBvJ684fWP9FnD5C4LfA4jLFVDfDW1B19rz4er",
  "key31": "4VWNAHvUNBGmjMkGETCGmWjMbRvm46ih83rzsDKw56gQjPos5yGCTcEcfywhibvn1hrYp1EkqXnLDAy153EWhUQ9",
  "key32": "fwgKa7nME3aJogJ2qj2nZ8pio33YEyKAV79r1Vah9J9HRrqdSr9Umw2kQmsJKiZ2CDuADFrGJvvBAzGCoUQR4Mk",
  "key33": "2NYh5ywnLpL5faBpbz6nPYQcprWetxy1ykxm4tgJXbQ7LbCyPsTTzKFRo2C4pguvfurzycetmmTbEfov47nGrtJ1",
  "key34": "YkipifEbNDy7bkMS7CfFxnUTk9xAKe5qQAjuzSGpYkYnVmmhRWFug1vDJARp6aCDXzrLSejhSkng8jVnXr1VFzZ",
  "key35": "2RtHCaCvxB89mNLUku6p5okG51hq1bqBYBiDALrhaAAKmKcr6H5PxTFjaU5eC9voAzg2scW1fRjvaLarWc6fiYF6",
  "key36": "5W2Ag8LK6GLdMVateF6v9o2QHsZ1oditkdi2j1V1EQXyzBD3LkyKrJUjb75FCSjG3jhxsZEizZqrhxv2VbqCekhu",
  "key37": "5CUgNAvCd5Yd4Kan82VguYsMZCfnhAB9QqMQJpzYf2aJzQg4RuoYJXGfKTL2rzkosfsgUotxWPaSQ3PSiws9Rfin",
  "key38": "2xMcd1XJXtYC2Tmhy2jaafrraN8LfW1nswRf1gwxxUgQU8YPQ9sZStpSsnLx6XhmJy5TMDTnTxQYvwe69vyjXKNH",
  "key39": "5xbguvKT6VrJnk8xxCHDmJNNqyJbYW1zJoUeCmKd136ph5aTAe2itsbwzKn86twbLRW2EgXgbghk6RUWdweAiBd4",
  "key40": "5sDbyWH45WgFdr8ws6KnZiwk8Q75kVBcFXMGRhkpqWMBFbAJo2oke59o2D8TjpXBYL84BskPMjzVn4M3BQNPq32d",
  "key41": "GrGNVMPUgzUAUTWqcNtPVa6N8StcctSrRp9G5cxe6EzjeSnLZo7Xf4sz8XFPfyqbVQrwVupq93HytGmbMZrgwgX",
  "key42": "2WuCEhtGVWfHgW7mVxj8y6ahZX79te7QzHEYgt8Zt9S2Wwq85BSnrPcKX15YeNfMxcb9cC2kGKUSZXfTRDFqEAas",
  "key43": "W9hrPZ2aiCLzbVrK2xPuwEAyQcKusHSb5qRhRghaxybX9cvGR6ZHTi5ZiVYb5mG3Hzn5ZcAS6tBUqanhvnZ6GZ8",
  "key44": "3yfATvJaogzEVEh7DLdxzfXNznsaazyNGPHFVkDds8VY51Yh4WwDhTTRgdpaMUH4hbnMT9Sd2JSCdn2WXaXFyWbk",
  "key45": "4jCHuQEr9J8DDMFfKsNoAJN6NkKPKLb825gBhbBEyKXQqWmrzezXa5t88NgzmzeaZ6feSzHkx9HwktQ8PgG9XfCj"
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
