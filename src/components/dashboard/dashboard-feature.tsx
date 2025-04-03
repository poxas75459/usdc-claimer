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
    "2RRyeECHFTcnvZDvBd8LxNDWJ6Q16Tt4aAc3YSHHmdCAHYFQ2Km23DkM2upAaxo2MgaptajwJseWeCjzu5pEfctq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e939cfP6uZyJeVsQ4yxnnTiPbtydaDcH2dFEea2J7Cs5TgQ9ELFKr38eYwJFMAJHvuJnFJFP6fpbQoifNdCZLRA",
  "key1": "677HyMBdpdR7vJFZ66BfTs3tyh9tebg4Wmg7wpL6krQ1Nrs2d4xPzzkNbpwTaLYJeQCjrUZ5EzbNBfQuzz54mhBQ",
  "key2": "5Nv734T4bwF1DKaEBhFbqEypoL3B1xVNNGikje1rjtGPKhH3be3MhKcSa6sVfmAqMQHjtt9bjQKXFXcoazQ6m8RJ",
  "key3": "4yxCPY2nomhrHXy5urbx8mNXQgpirj6RxLceS3D9wxLTTxihMXaTa9BinToSTWVtnSS3x4iHw6koeSpKo2AcWfuN",
  "key4": "35HFAHw8CLpmK4b4sMxSCqguewAusT8XzQNzn3Lc51cjbtKSVgrRzfrxtSqwSuQn8wmX2oNVGsxtHjHtdTmzK5oY",
  "key5": "2tWtBCzsYi8EdYypC524fEpQDAiBkxEcz1FoMj5Q1JoYqMjxkqLA5rHDdxV9XxxF4GivViQPkZss5bJ8XHeyFEMX",
  "key6": "CHSTRxDM6Hiw1voiCEYR9j2MkRvZYjjGty8wRSs99kJrmJ4r5EiXwAvgaHgCqRGKFarcAQbVNCbT4ceHVXoGx67",
  "key7": "bAnwxJkRd4DjSXfRWC4NJsLnJ13wVSFXxAzQLvXNDYibrr5AkSYdMypT2SyNTshgqoyfqKHY4BtEnj5kyHK8oxF",
  "key8": "5NNo7263tWaPWCCzEyNfpbFsY3SyGKkiUWLDKzgBVK7C4xcNw2rhbkASW37PBLFQReok3T3G3WaXiVUGb1PLSJgN",
  "key9": "5hiRbKFBsmPuVvSWJkEbCgSmr3hLo3hkE952y5S6Za5nU4uqpp4kdZbFCW65VGGdWVvtTPG5T8RB3nAeoF1WC9DL",
  "key10": "4uPMUMhMomvpwdFNW4p5mar3DDxvTQaYsTBbkv6jK7nVEHrfZFVQF6vpgD8v6KxP9zg9Sji2M3kJP1SyPawddzm3",
  "key11": "46Fw7fcEnAoSu4hqVus29fT5e8hQpw4CRwTuBG5vhKFCCd98nTtPDzcDH2X913fTWoCZTrPD1tL5PAYBgn78pSnt",
  "key12": "3SxZjSMLRx18evk6U38WoUdevRAnh48AoFvQ9Tz2XS2KDAQHfUVmP5ctrefc4QBBdxfUQ8KWmPsgXcSwLR79YQhd",
  "key13": "5osvin8puR8M79uW3LWGjYJwe6tqCj1MkB96JJVVP1tX4diKxWtP692JCxEK5rDbv2ctN2iRNhNSHspVBrVqp5oq",
  "key14": "3gpu1iCJVA6z1nVXU9AemfLK5febYgQP3LyZRMea7asYsfjAMP9kn6DjyP7Dh6hkUudqcqHWdXcHMKKQGLWW7z9g",
  "key15": "3cijXgRFTiuHpF584Fw4Q3qKrZvmQhKdieBWy4WPUVGAKzV38Xr3YxcYGdCcLmRrKtyav2oxUz39twHf9VBxVPSL",
  "key16": "4enCSZPKDnsLfn2hNHeSJ1jLi9UVSUcN4eqJBXGz9CgLYBdypz56tKwpkKRfbHNSdWiZa1M9Tn3NarpaAsZg2Ni3",
  "key17": "2dCYRiohLQYXyViUfNgmjnMNSEKd2Vxki8fSy43opSx94Bov5dC8moKg4F4mv642hfd8t6FUxo3rxuHFc69xscJq",
  "key18": "diVnXUdKWKgKHjD95NLFNWLGma3fctd5Hd8zbgvjGoMTCgfHzTvLuDtemyGzf39fvA43KaKnG1KNd2oFR28ARiA",
  "key19": "2rBzwujD66JTAiR8RUVNGMktc7DbG4jRxfQa3amCRxGGabCq1KJy6LKacsqf2bRVtDQR5DnghGbqGZC4DP9GTRgs",
  "key20": "5FrUiigb9fm9WMxW4CJMSS9RshXD4Es22ACTEPwVNhkHDFD9b196xerBNw3vV2tPTBLHH3zGcFxV5j5uWPksztsC",
  "key21": "34w4HHDZV3dbu363qxja9U2Ho9saHQPmjD2ZRDdrdrVpfHrxq63nDntbmftQikZfjmxYaeN4QgRdF7b2Di6ygoAn",
  "key22": "3g9YpNkEHWnWXBQJjvyYmdtQ3FQMSS5HLpKFT1Fpks5qU2NxgPGgzbAjA4cPmEiVkdk1WdY7qC6cpo4M1unMmVUw",
  "key23": "3k7xxsBwUnfi4FtUNeHZ9NCfbK9qchXTF1fTN7ajyDEnZvnmembLMHQk1nToLbTakAdGVEEEdXvrrRrvPUrRcudo",
  "key24": "5UjzL3Cr3FhysJ2DUKSL4Vvg5S19vxSYs3bZiuDEQn9qk5qmR7LnnKTmUnFYq8PCakaAch64f7G4DeLSEsDeu9WB",
  "key25": "4rFML4jWkkcUr1rGcakGbWCcXShDsm5bw4Nbjc3yfkjhc14RhLhca3cpnugJjGVLDBCiczT1exLDZ59Mha8qsazU",
  "key26": "47gDNNYJzQ58ikvT7Uhj3kaD2TxShWKpu7zvd3vbngE9CEQ7poK4UUrYagTXPDbHXJi9gCGdxaL6vLDzYzEL5q8P",
  "key27": "5xBvrA8fsbfhAH9fezahveLcVmwbMyjichsuqpCSfLESiLkkJXMrAkHg5L3VSvaACaTe6XhjEmCgjESis64LoB3S",
  "key28": "SbfcvYnSQh5A91MJfsCQ1YdQzkF9iLARGCf3BWp7sujj3oJbSRymCfY6sU3ULDz4CiAMJLZePxuc9gcKbd1kGyE",
  "key29": "3n9odU8PovMBu5yJmabTfP9DAZqsvLzF722kH83X2nx5AvnFuurLGrbjeuQ7rx522A7To7hmw7ZmMxjBRwPCwBxm",
  "key30": "3eYGp6XwrbctxkL9RALR3aPt8QRfqitAZJVm7gBbf3rRmeZfhzXmjSkNEp2CoUGd5JXUB7rxo6oM3ZGkgTS5ehxR",
  "key31": "YggLqN9zMPykB47LEPfotN6DrSvcSNZHm3fLorc2GQwkKod6tvQ38sv3n22EwiWxmHGr3GhoEoYBr6jWoJwsYog",
  "key32": "5BSij8NfMQMA9Ta1C9CPop2P8pV4Va5rGUuzPxj15TAmpkYkzkg9Q3UiQMWhQexeyYDiB66sKRm1QHQVrxtir36g",
  "key33": "3KM42WQRxV7fVhEzS8zzyvYdrGBUtpbza2JtWkxDWyHB9yh4umDiM2iq37A7jEWor4YXjdHSo1wYJQ6cEKvYXfMy",
  "key34": "2qGFnK5Hefp8bvqtwTChuLtu5QaPDysPmefvqCmybtXkodHQwDGBxVVc4EuDTMF3hPWGe3LbVKymbirYGBdgWPBt",
  "key35": "3g5eppWxvRTfA2n4QnQn956kfdvPfozLXfePRQp5VnYSAHwxWuFinE9xqF2Wiwkw5Ydp5wFTyV3ePTrmQFuctPh1",
  "key36": "62RYXBG9PGW55cdNaVjtQ29j56Wm3CuzzNn5JTerAiu653i1JwVgNNhZpf4Gr1EqyoyCMtWeGbjhFpdDgYEgw63i",
  "key37": "3Co8RKVDs2Q7NnABC65wKMwQei8yveiXaYRTiXjK2oJQUdahGvXM7oDNczPGL1Z32xkymeoy13DdgPWCtJRNrdxa",
  "key38": "5hH9DzVTekYjCZJjskGcxLXUwqksbNpeEkDYrpyKL1tQUSLtcR78mkXwHwG6xyveu8m4GCRrddgT9bramfRB5wqd",
  "key39": "4kEH7UfSzkfoYHTwnLhqTZwL8uJKeiNb6fRmCqxKeqiZeYdbXxUspmiumvEnaDM3SyQzqHqXEoN7Kt9B3JByUZqq",
  "key40": "B5tEnsg7BtQF36ZgE5jSDJkF8drthPct5z3SuvsAvPG7h4FyseeikiDbvD6n5nmVCfEQL2WtFhgYy8v2F9ges9q",
  "key41": "2TES6gC9GZoy4YKrjZcUwdMAbf8vbgAYfgybFdj3ti9WAf8Qke9rCic8H5u5z3L2yzCHmHRUi6QXUwmPA2uX7M3N"
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
