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
    "kbHhWx9KtubkGL6KMqotGpR4oz6bS7LCDcwkQQ1qhndwxb955ajD4uNty9Ec9KGqT53qoBC2yBLY8AkMAgmBVMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Ty5bK82wJ238c5JoSFDtynRSDYeEtiZ2fxR5mHADx1ppNbjg6SQg8cVUDzoHWbnC5FTrf3M5uMUm8Ahp9q3CQW",
  "key1": "heFJ4GioX331z5jL5Ps2hrFStVQkEovNjdZyL49pRRsUX9PiMuVWctAQUdDPefy55xWsHdAUiuNH4hqpwgi9gLn",
  "key2": "3L5iNFcrgiqtGBpUoSUAJyXbeyzkvkSLahdd8rPbyY9U4U3g2jgEfPpQTcySobVpRPvyFVWG5R2redtwKuxbxYwA",
  "key3": "2KrQJbdu9UzFAsRpzByJngMrpXAHJAfp8GvUNUkjbMeBMaNtRPiArSHmGEadrfeJecssbFuh3ckfqgi8KqAuqjLs",
  "key4": "5ndtAt4LK8DuzjjsfoxiUaRueEFmj5VVHDTxDtMjuH9o4ii4TfKNMWaMrw52vGCjGT2sqeULBGUAYBpQsqS86z5w",
  "key5": "38igX2H5RC5LQJBoZrHWXBSTMEXG7HfrotWmtHUb2TCfWkZNM8QAT13UEqE44kFTjSoi9MnBMDKFb9k5K18QparB",
  "key6": "4wU7dVYgwfK2kufEwnS9zudSrFqgbpJBZYkfZ1XppcNCjFCzVvdwqgDKBEBhPGvYWkomGgdKkRFmFh8Le9UhLeTk",
  "key7": "46ujwoxJLcJPLsv9z2i3QkngCUmfTjN1dSqXLX2EQoKiZEYYuKxasCjSJMmiXRY23jws264MoWtmZKefCz6VFoUW",
  "key8": "52FUcq3zcaXFcmE26ZreqZNmAsjRZF2qrGBSMYRFkz2HhKXF3NxXkh5Hwyw1m6amSvps1uumNQHv3D7y4rQtV8As",
  "key9": "53prT5hTsNRbAse5J1i3TGrWKMm91ncbrXvj311PJZhbqNE8YtDhYBd8UmPYhTPdUzqY1NZJ4p2g73gwoFbLfBAW",
  "key10": "5Xt4kxgyGSE93M8dSZL9k7ccrPHoVQFNzNi3PapYgpZ52pURibCMLmTk8wvjwGxpi982znVTi9aF93fnq1BWeBHn",
  "key11": "5c9sVwuArtH9hwhghpQ4unvjM19NnDpdPFMJsEobMfXWjnWE1t4yXjatdcf1SqBJsacyJyrkuCXd6cNd7Vm87J53",
  "key12": "3gmimqVRJijqBu2z8ht3fs6f7VL2HyFaagN2ZPRWUsbqt8kSVUonJLBnMK3uWj5UNdzjQWorFQu5LN86AwBDN5UX",
  "key13": "2eUHBHfJjkKn5h6PbEuAyoJZqymUdZFvtkSPAN4C8gYGsujYQTBD975Se6NezhqqKDuBgH4G8JX9y4gMAxxJ59L5",
  "key14": "5cLDpTHsAy6icosLk13iNRr1FME8z7nUWDj5vJbFZ2KCHMDhFbzVhi78BkCLdrwkjYQyBmQ3k2fv42YgLk1UvcmB",
  "key15": "FnmmrEtwLUpzzMGhpGitnM9XcR8XL7tMsSnnAjiUwQxFUq1uujeTbk7FiEPVUrsezqwi3eYrfos6BnB1HeMUjsE",
  "key16": "3QyC7vs6mtSSAHn844YbDi33S8eMjeU1muyKDyUoZ8fA35HxSWib4X7auDsSiPDV1tDJ398wPmwpbVvLS79AoUeX",
  "key17": "3gGbtxkE61BPzgF4g18gzJZfTxGGAoKtfRGT22r8dx9b2VRHjye2C4Lg4QEvpjjtb2k7MWyZidqjeDEoNcPiurJH",
  "key18": "318y3cyiiKiM72byxdarLEXfBiPhW9WmVGsmmZM5xax7q4SEpV8e6vp2V31J3nJy3AGpXcfXs6BKfwrtxwdJ9ZS",
  "key19": "5BDroWQa6wot6edwy5tcVinbVHJ3iXBNfLn4c7GJUHeD8dhr3zVYYDY424cQvCqK5ZJ3xPmX8YaqSzEs82SHQLCh",
  "key20": "4St6GUeU6EudQQ6u9fNnh3asMnfAe3fNF24bFobZ6CwNKa6xbzLgY4x7ysgjWK7snGGqUYua4aLVwevaU8ajVTaj",
  "key21": "qMdpxpuZE6ATMdtBcwXRa2xBvPQBSqzCoqWCBVpvC5bhYQM7LtpesM7ACoWb3g6Md5qK7mE43LaZh3vPvQ4ae3g",
  "key22": "3B9HJTETnnKYLH9b62kaXE54csn9BceNb7Gwy3gJZTW3nx97aFRLGVjwbbCRJ7LENrW8qQ85sqUmDus6rBLSQKwe",
  "key23": "3ffxZJSyP64Ax1f7PJmQANm5u4FVAtrjpw1MauxAQyJ1EpjmTC71zCpQPugGphrNxcACErA6E4rrXbAJX59mTNFn",
  "key24": "MXpUjnzMgMMUjy6cyBV9smMGkKf8J5LEJUFTRVMSSVm1d4Q7EWU42e2jBpEFhi66dfm89KSuG8bNk48c7wtxruL",
  "key25": "3jnG1pVkV9GUDmjesdZhwMNKdpc8zFaEa5BGG8kMZSfWQVpKvJQeDSzfpkxhUVrHjLLZ3e6eEtox59JMhjfc4SGN",
  "key26": "tdYwqxGAH6SmHYhYrtJE9R62XgN4LUQLYiLBKE7uU3u8gp1uF1jcRVXo3Tq72SXjoaywdXE6o5boV8vV6hSuXL4",
  "key27": "3feHvXRsCWoC9tZzSXv417uBBd7H1WrVjftCv4ejP9Mmdc11rQJGEPVD47tSVcn7jMExeKLab11kgEzJH5sQ3gWz",
  "key28": "4faFmPsEFXJbgG3ncPWTX4KJaaz4XGnLHqTpHktH8rtzKfF3Why76ung1Ho4i2r52nhKKeXPDkfsPTPNPYX58DwT",
  "key29": "3VbyxKD4z4S6BJWcBKU7nr3p6FRY8aZ1TpGu1obMnnH6sfXeKuXj2symt29dHdKcWTg12JobYGcs7rv2UNt5JtKk",
  "key30": "5jZTEs8tebP8mbgegwTfZERF6MVUqDKBr3kd7SFKSqdwdACxzCNtYAePNdXUnpcK8pLyi5GRun7XWfSwZ76sBUtZ",
  "key31": "5zG4zBCcoqGnBdt7HbsxoTixbsRQYCwCqT6uLSuyQqLqEjswL3aQVR75bisws4jpbq3qygtRgGz6wCJQytcykvkb",
  "key32": "2qQgjD1kVsbregL1oQFPsznNXE7PeNNW5zAzRAMqriTS7o49Fvh6Fd1JY2FC84BkFqDbbgeYWL3ceKqL3nzztu3Z",
  "key33": "3bTxGuT6N4d9QawCULaE2pz5Ha4QvCEP2J3oGfBtMDKH7khz8uTZSpPTDv6YEeWMmSbKnQCmS5UmbsXMq8guSbQm",
  "key34": "vG54bUC3xPkzeF2SpuGECFjNZuo1qkH76oiXRHtmdrBbY5SG7QBrE6pag1amziQaSGEvMy9CVdLGKgoANMRp662",
  "key35": "2FqwqZ1FNNA5YG4MtN1UJn3viU685t76r732DH6MCFFPHpNRm3YMVwu89g1X5xRuxNrff2zFBBMscMFEHEfzeK1g",
  "key36": "3HNUUB4Rygdeom7NGPnUWqg8qALUDAYUxSH6752w1cWepfR3NKH5nV3ifjfM5MuAxnzKRYBCXH4iHp9LsY3QcHLC",
  "key37": "59ChFgxA2ncie7PCjLkBP7ZokoPbmTQQrcXzQgGUim9pxMBbeFtT4mcjUgTmBbhn5HiesSKf28mrrVpNagYY193g",
  "key38": "4Tt9SfeotUEpTDespNYmch74WeTuYzzkC9QgmVEPzNUR77EagCya1bx7K1TbVMNobbAVR1CmFidWtUuJJTrrvnZ3",
  "key39": "5eiAhUnLeh3eCqZ24eUUiJFjyCjpZnGLYXhixMuosGYMWdEp6L2QypB9Nb75WciuhtpcrX8zS7GX4EeFj25XkABj",
  "key40": "5YPj8TsGgvhBTDeNfEiTqNwMqfT6RdQUAoDvErFvsxFsJsmJMCJaxsmPVjFqH1wrHXyYPPrtMP7rTYYZ14snckQE",
  "key41": "2HHKnCJhqM4Agg4WevTAqvofg1azYYaDZXQvBvbhd8ksEYaMy4jnQHQfCU8rHFLdpDK43KLpnNiKBDEMe4i4WKJ2",
  "key42": "2SGJ26bZ77X2pGffzLfvbFPAUmhQi3MepS874BEPCt3NfP36akTN5UE2UZHEzHUhRfaE13hW1ZMbcmLvKehV6ucB",
  "key43": "Up5SbSj9TknHTdBhMXtv8S2ibMufx6oeF5ogZYtV4xD2EBQFEz45VpqhKTrpm617MrQ5ohaL16LbsD4UtB1o4vE",
  "key44": "64UP13b5EeDWkYGPKjHBSR1e3V7KYyRUk3nn6Di6RLpEbvWa2XxHQMfTpMUATkojEhWxQs1g1uTa6WDQoWkdofuh",
  "key45": "rAw4ZKQbNgwJ61wsXpGnCoBuoQuTuBvKikLgnaXDN3CebnghgmUAbTbZg2ZFjrEF9R4ToSWRnbp8NXNEW2ZAgKm",
  "key46": "oACga5G2NTQgYesvW7zqB99b9iMNsTmrcKyfvdLYghKXkfEcs27bZhg1fMQqAKwPHitFDkhvhRpdb9dX42eP33p",
  "key47": "2VMNFDmSGJ3MokPKyXDzCb6DSYeZm54Aqn4Wsd9pVxTr5dgXienRR574rRG56RpShpVKUGS1ZwkFkFZX9SD2guCj",
  "key48": "2EAV8xSPfGf6ULmyEoaQTWxyDFnkGfh7cgJmHU5nkTCGG5VGM9C6gukfxqhR44t81d7xbhrsf2hnyC8Fvy6fKHhk"
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
