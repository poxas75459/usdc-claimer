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
    "2EtnqwEn7Luf53GRgtWb9TeKksYDTT6pos3X1t7TYPBcWhcqtm5JttRW1sAT74i6wghebThoRewkZhGMdJXQVwPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TzVQCrQZPWaiCANbJJJiVNLaDPsKQRpMtYjnWvWrvER2DmP1Ad2W3cqwkXXGFsyFo6jqT2c7KcVXN742vjyGnus",
  "key1": "56iWvtkN2xfHqFsjNqca5nizJYkuJaRSGNLEix1J29jCeHiTtGe5q6kzRVXynixGxDGimMttrwNkCj7vvKZxyJ9N",
  "key2": "64qmhV6UnXc5CVzUmUDRMiyPpDCURzFNiAf1xcooLE8UM3J5XhMewNVR8cytJxYpCU4S7E963XgmSMfEPZjZKbHX",
  "key3": "5Q8oA1Rryv3wGuZSzvUbWyrguuoeEUmk2W3fFKcBSDLmJhEaVqjCa91GnfATGwXMr79EfdQmS9u7XrgvKNCkevdd",
  "key4": "5r3hahBnw2Buhu1forNgMqA9vQm7RUEWPgEBRve3PFeWAaKs9LpMBAGngwDjYnMFHtZS37Kq1vertgj965M81tzh",
  "key5": "5fYZeKouEY5pqDgEp2Yic22PF5ynTTBR4sT8ra1vffeCddqYGmxjAoFTXgxNEGub49bofnoqNuZ8PUTKg5HS8BHP",
  "key6": "5KcyeT3xNsjiC3w1toc7GGruMeVuHtYQMPcBTjvVSvJGcfoaEabDPGTTFUfzhuaDWtAFux8cWxXbcfVasidypf4u",
  "key7": "5zb4BDNPjZxkm2vfq1kVatVWVUvGAAnVwzb434svEozxhPGebUFUCZ66wa7E4jE82naMHnEy1MDUNVxByT2oHq4Q",
  "key8": "4Hh3mjiRf4rQWNQnu8xbMMfARuyWXJ3BMwRdrQ6MqM194tbHrNefkYyrRDFFTCHeALN9fkJMySmkBSjqQAdnZkGJ",
  "key9": "5ZCPgaCL17AN9x8o7pxXfEPDsCYRDVq1g5YPJDiGero34rbeJSKBKbE1RCg8QdUFmMq8HcZw5G5qmDbJpECQWpnf",
  "key10": "4uKmYurF7ha6HLpC9tGNiRTSPtpf2WYjWtugh2VSvjjoEEpAeN949SnmMWBwk2RSWR14n3indG5rxMo3PDrbFeTK",
  "key11": "XwNNGojfNBRDatCQBoGekk43s7b9RfVXuHtT6mTRyhi1QmRzBT4z9ocFhYU6XokQbWoGSHnYHc5DLZb8X4FtNrD",
  "key12": "2WVyCMUwoTNm2ov4QfBq8iLknzWeSUQ4B85N5G7Fki12A8T65cjerLUoJ3cx1Sxb1M6tgosMuURdiXX84ivsp1fo",
  "key13": "5MSiDafwdnDkUty67W53T4JqpWDswKGhRaoTXVJJgU7qPPV4f6TjkY5fzKUkpbXVd3n557AbwVLCM7NFue4ZW2NK",
  "key14": "2jWxLTMQVihixRbCH3u2At4HszqEZyGyeQWjmnUTiueGWnKSwfSc4rZ5tYjydtgupxnKoXH8vGhKzR5pEzSV6pWv",
  "key15": "3huzmf5iV3toYGBFxntitJ1j9JJBH6Ggz9orbnhbr5zFBwWWuzAx1QCnDuTi16RLYuMbQwYAc74tSAF7Z1TLNvKh",
  "key16": "2yD2bndz93YHCx4qHE1rBVkas3tmCYcio5iBABVpGbZJxWNUiVE6YxhFynAp9baB3pbLSBnAwsE283FHHwSLF9Pg",
  "key17": "2JkPgzYnGE6p8RQndF96n19TQGPZEooRHYh7A6WkcgKDumxp9Kt1BHHEijVRsMRdjBE3P8LKkzswSFHazwj3tsSX",
  "key18": "5c5wirjoSBr5AgjMhhd5hwDrqSjzvgEvRtLG5WrFrPvheBvf8EmYCnMgat8cmpVkZTJTnx3bFdd1XPDUwPGW59ZZ",
  "key19": "37FVWkfir75p3naw73S4UX12JNvzN4Wpv7WaPErRaEk8xmbHKxqhbM2xW4EByQ9ytnZbvehPApXLixr7WyPE4ZdQ",
  "key20": "4beVPsvA2Q5hLEj19bq2U4tPXB1qfveCthLwGnjDhiTERnifLVobPD3pCTf1VKWUaeJF1uys43Mc9WmjC4Vdgw83",
  "key21": "4emr4Cy3uBPj7kJJWmf2b8U3CSfXH9rB6K1CLFyJU5QwHF33SjSGihEDrrm3JpWrqAEEVyXcATJNwYy9a67fEZUQ",
  "key22": "C32emGj8nUpZoYKEk2pnFgESiwmbshKDrpx4kL3xjW33wVwGXZ6tETVJDQRybb2ySFvhFME1VJRP3cvw7aT1cKy",
  "key23": "3CZNtkQhFaVoFQ4AZ41QcWii6KQrGpx5QMm4iTfLkBrFSA4odz18awc844V8Houq8jNf2WwmnxQWWDwuYx4CrzYB",
  "key24": "5oajLnJKFL9V5wrYFYAxphM8Sedogeppb5geZRiMw8nEPzm2aHXo5dyttGyFJZWTLRZxVi52KFfvvMJr85ha1oeu",
  "key25": "4n3RYkwHDqAQizYq4TqzSoLU4aNaFdUohU9GqJEdXYNLNREVudYo2YifGKUL9vz3qWmhrL8wHMBA2tfYyv8tjYAA",
  "key26": "hGRB96n62CpPMbAG3KYJfYTFrWhif3n7itNDL9yCSzeox6CJdn2TZ5Q7Jgu5r45TqJRui2qJ28dPjrUWBzr3Gpd",
  "key27": "pgebGCQSrRE6xw2Yqp7HABAGngizC7fPtAHX818W4c2gREsPm4orCuhnJFcxEHSSQmsUbVHz51SFFFQapQryj7R",
  "key28": "2Ugw19uW3jXXAXhU7LabXrxUNGEz6rYemnt58z1dyDvmTXsksT8hoLvsB7i9oYjTJFkUt69zHfMvjFWHYXfgBzna",
  "key29": "L7iPSjmEMXsjdGmVfyPDGaHHgnNmrEJz3z53yjkYy43pWJ4JLp3e4V6kqE3p1Gf5hRZkdmnZiq3kzc1yKDwaExA",
  "key30": "3t7azMW7rTbvW8PnHrQNEVXQACYZXVaN8Zcd6saJ64pzNnzFnGz7s1HueQEimUck6DPbsdnJWAJDRCs6vPdkSDvg",
  "key31": "3e6Zym49ywowfG9bwBRF9kRtVWKqwRTXvRumsMtGncZ9zMnFkxWC8yYTGGaZ9t19E9GmYxuydQSJaSTfgLWhchAX",
  "key32": "maSvwDNeHakxvquNk9oyjNFzZZbarVspAK69zSdcHzsivUG2AcY1copYg9WfWUGFxeyjDiE5HHNRh6un3pshyuJ",
  "key33": "kEvZAJjeecGvQvtDxxMDsUmd4hP1bGF42eqD3Y3ZbyhPfRgiGy38ubigwrwg4kthQSNpgQEtW9KUSwHFoGEjPP8",
  "key34": "udJrBNfBUyCnJ7FRkHzJDuK2vZ3M5aDr6zfp8JtFs35hW3zNhwxm2ic2bytKv8Qpt7KDZJTWRLpmhGJ5V4294GP",
  "key35": "3cFwTBqvTHBF3Ej542tMk1BNe119L6sBr9LZMtLSScTJGuQxTqHf2oPoAWDEdkQk6gRZwSoRaVUx1Zb3FYGmdrd2",
  "key36": "5V7wZX3Kyt3EWnYysU8xCxej44pr8YerAm4YD4yDEwLGTsp6LSuam5xKo2vHFj9potShciDL1aZJCNbJKwhrT7j1",
  "key37": "WuGRwGt8Au9JTRZ9iUaNbimb1NvFrWyPpdTxTZW6a4kvSQt11pcaXBcEFWBf8CcJHG9vhgiS8CchcJioDEHxDkJ",
  "key38": "3wZPXicg1Rz81TQCSWy4xCBdtuudXKmPQ83BVvctGYvEMD7hUjhuxdqp2kRy7xymjvQzepotfjXye3v3Ez5vzRSh",
  "key39": "4xKA95X21zFsVwLNdfp4A53CEyqEY5g67onG3mohqeLfZQrzfnsuHZFs54GnKV5rMKjCLdDxta3r5poZpznTAeVz",
  "key40": "drbecoUfiYrSptGsfSXhKbpVykBFi29aVJMZtzgKk7QW2nMj5TA6gPNmLACrrz3jMb68oBG61ZX76ekFpgmBEwt",
  "key41": "44665N2xZz4YRm2CrGKYf5ScQijSHh6FRdnSg98u8Fv8GPkrpKHgfGBFzVeYopr6279Vg2tWAyVmn3fg6ohodyFw",
  "key42": "2E84C8RUuFDQTbcwRoNQH2R8dhDz39nuctRraBGCrxMHhRDWa7Mjk6LqiK1K1GuJr4t7WPmamYZZe2vFLPQGL4j6",
  "key43": "1Ckky6RTxbcQTHRPSJYveJ2WJMqPyXue4vG5dQS81reraKbRmPRL9rwddJ8Fp5q4BcZ7uPjNWdZTz5FV5rvc4yP",
  "key44": "yPwde4Cpg4NBasBaTxHEfGRHmTq1WxE5ZfD63k8emSe49GPeudWxYLgtX1UcMrzhP2CQCSSWa9NjS2QnVBAUccJ",
  "key45": "3V5dB1T427Q4w65zyxw7zyS89AejPs19hmR1f9tvZiQg9MeDumUZ8yyyDyd8tFbyLUQPFtXHvVPpS8NvvEXjVXyi"
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
