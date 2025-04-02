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
    "2wwE5EHpDsMy3q6kHbrf13Nekyw9jKfhhqHasq7bKpHzFimhwzvdicWoBdDSY8ArAYNZ8qcxtEvq3TJcR7X9cUCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KEWmWJnKAgGJn7VvXkwVArWUQXecaeYyQ29diJUXCQAvte5rkKYC7JAFHTS28Q8jGojisppTc5ykzHjFbFy1pN",
  "key1": "4xL62BGYt4743dwF768tUMN6VgdsXUE8cCcVb8VmDsNXsHd1TShzj4NvpK5c6krU9PepNEnBTHuM76jABvZXkEtz",
  "key2": "5ZmJPaTeJfhtsxZDoy54qNLbmfqPybyMR9697HeRgxHZBVnhKbEepeNrinEKh6Nhb4pLxcv3FDUwKqYcnAFzeh2p",
  "key3": "4nt5ZMS6GETa77n7qNr6h1cUbL35EfcZeJEGWGK2nwwwxw7AEx64gKW3ZZQyjUcBUpXULfcodCPvqLYqWbphdBsH",
  "key4": "2mvQ3hbPQ5R64aBiFmzZMFjKAjarccuwNyFDeASQBHKNdM6dErfR3gRJEBZKxMRy9TqTsKZRnZvY6PsEFoEMGWhr",
  "key5": "3Nfr9V56iXHnqDbPBGCgKr8NupY3PJ7oAeXWF8CEArQBFFFsCsLsGxYYkrUVNcWu1o4622NtghN6RkSsrAj8HkSE",
  "key6": "52a9oFADtnBZxMZ8caGfEbXUj89pH3deaDaMFqq8imxoUfDx728tQ4ujiJEgTWczd2FXwA2Bx1JmwVe767ToSzPo",
  "key7": "k69WeqsbC7cJtmD3nT13eVp4vWoB7iQJ5qiApB5y4jPmuHv8894zrKr6761zMnURVyqmiQ4j5ewz1eyeezMEmbW",
  "key8": "5PW3RccgeZJk7JTqa8P3FTzBwjEeLh8KkQfHne6KQEhQvzdJ9avnrdj915a1BNNK9RHrStc5fQYcTojCgiyD6ato",
  "key9": "4Y6S9W7UNWDEMWyhfY8H1NXKct18qyyDwz4GPPPms6qRsJ9cD19iNDHgiPoSYEW54qGGrbHMs6xBmb98mNaDPp39",
  "key10": "5taYjTaJaURW3LFvxKSwgcdvkToimNNj1dywkTdxZ9mWSyE6iBc8o9wBoFD4XvuriC12fQ6jKQ74kJ9Qd7cXXsJN",
  "key11": "4SGdrntrtGUJ6dA98CyY4NGB5NsJ4fMysSKbXLrRXhxQD6WkMqYiKK72QXTapBsWNuzWm9HMiDtqKDmPGT9SgcFr",
  "key12": "2nR4mKwFrr9LTy68aaeVh1fNjJmb7VPE9eyWTWtCWryNxxRPiCeop7H79uib3Sjqt47UVB5ELoTz87auFG2UbU34",
  "key13": "5WhLyJ2eTBiY3sgbHgGpxGHGQfYUf455SegWYscaEyyFRPajXhG3agqW7L5ZbBrztEPg3QLhtwSV4EHEYiuTMAua",
  "key14": "4NSJyMLHhTrm7nBsMKGC3idnyi9nYDGwSKcFP1NQ7UM2S1VHNw92CgUQFRZtufZw5idcYgZ97gcoYoKC7KYERDGK",
  "key15": "29SyXNu55gnHCHxgzEMYEsaTStEiyibXZpTz8mbY7Fj95xJCVzYadVLjjcu5M3jxEQ568LsJqtKoaQxYduWvjGyC",
  "key16": "YX8Yp2u4PBhARin2CLcAGcB4gGadrw9oAYL6WvtEUhLwnwmAcPj4rgEMf5DbDh64dBkKSJWw11m9vk7wvjcxLXg",
  "key17": "56Vs2Pr4YqaidDt5jpbCgaUV2k4q7EaM8KMba614MoRbLTaWGWC4pgJXnGnhSDFQBm2X5oVBk9qW1bvDFpmmMzDq",
  "key18": "2wyLWNpraKHWbafu6YaoMtdZNduP1aNVwSpYQjvxLxV6MiJfg88z8NQMWSc5koviWMKK2M85sQobEozx6EUGfgnt",
  "key19": "2BxA1v5DUn4ZQbKK8ox4yeuhW57YCPMK5vxKaphv2xctvmA5QZ9UUMKcQJ1q5y4VTigyRaxVZ3N8dp7dA867351e",
  "key20": "2cRtCefa5a7379s6W3YUs51jdqhj249i37J3udTM849PR17Q9zdXfbA9fhmHFwU6hWQ5Pqsy9jHCS5uf4NbHdtiC",
  "key21": "4Jp4n3CJvy4o9jA7fUyYMoYStHTJKqR14tVEUCAwoZn7KnPDWFsVHPDSfmwCUknPN9nEYSJUk3G3nyRwv5JpUER1",
  "key22": "2PapaNEmoT39Diex1V5zKYDPkr1Thgm28TocGK8P27upwVD2drZbFnFekYWHT8sYNUa5GZZaupPwVWWV8kyA1W4d",
  "key23": "3V7zXaCG4RKX6aX3Y7y3SqUP1B2V53iQGJgdKiq8x3KmqM8zUVUMD3evWJxUuCJr5Xb7pzGmy6Xrd8jUhUdTJEnt",
  "key24": "5Y18duFyTp9G3Gx7M3dz15vn2w6J5JxonFyaQMx5YhKydnaUcc1euALpF4cRCiTxDZH6ioNaa9fsGscM3vkh6Wm7",
  "key25": "42hGaiW1MLsbUk4x9Csf8ByW5TXKNUYJzkwdogovyuGvUeeYuz6uNcPGgiS3ptvap3UiEAWzLcVRQPmn1dnuVJEf",
  "key26": "AuaCHm94NL5abrm2RjNaKkTmnioXqpwRwby4MU5899WmnrR2Nti5ZDPrCKcxXFBHHJ6utCU4KhaUyJzoh17FjzP",
  "key27": "3o1SsDBYYSq7qr7DVxwb63RaT3NmxSccnobY9uM1thvGsrohGSbLV6Gs288Gf8p9J2EJ87Rs2hNyr9u3jDyQFSCY",
  "key28": "j6ekbFeAbmZDjtAEnHMd8ckhumjtezgcgArhjHgp1UmfPdARvtz4K4vWbb5nUN7CH4Gx8sqs4Fmkz7sW1bBKhBL",
  "key29": "8248bKji1Rq7wvGmPny6g17ExgY7qZ1zAaPtkc69RP62o66i8GPmua9mjSt6H589LrFDhnbUvzMNaYmQMSuaEfH",
  "key30": "5AcLVM5sPFEEG2MZyys99UzENYF8HB6hWK9THmMWBUe5PvNcjBw7i4PcBWsDuiKewsR9RwtTZkVscjAy9Dsq9qB",
  "key31": "4NKKXQkFJyBwhsp3rVszh7FUeppo141MBGd71yPjNgvhwpwToigBFT1zQ66kZpAbGTE1bvzs6tNMpcmQZ8n1Kot1"
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
