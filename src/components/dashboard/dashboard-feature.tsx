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
    "4d2U6rDuNTbBnDZGiE8UVN48pa2kMzSjYovkcKgpPY9tatd8r4KuB3bcJMUWKED46hvdmZZAwKUGqmo3cByH1qV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46CE36UvbGPsGGSsWETVcRfzM8EpJRVymRfMrLhURM7Jv2e3Yni7mFJWqSSW7HUsi4zzrFGM3f3hMLCyBjjpjwee",
  "key1": "64GvnqXQXMGo7dNX6USTYZZaJBJMWLms2ayGWHYY7oeTFy44BtAscW6jhntmDc54vGRqdT2LGUYVdiZNDY8xCnEj",
  "key2": "vRiUBiVW8U6bjGQVz26rdxwciJK6yDueLF4SD6fSGSVY5jBqmCxhykhFQZd63dpGR9FDTLgyWwhgPcvweKTKuJ8",
  "key3": "2bqhb26v3A82pHR4q5JVJNV6tzTU93Utj3HcfNBnn7Cr9KjtUAEpc2PKBgZqT1nQ3oKnQ8Hv5PT5si5nQkzmW5jJ",
  "key4": "VKK1C48QDEQbmHX2FMGEZ29sdh85wJZBnFvj6eiM3kpvrRrjcDVbm6RoLHHtx1sDaUnBqJ9EQbjNNP1hEeMjkeo",
  "key5": "2HrBTZiotnJVuynJCZy3E61HkiCPdiU8dGi6wCKhtPHwfrDw6xEiMr5Cs2ETsHdnJcX3KmeoRyB3CvQCjACBHavz",
  "key6": "3PCxSTJFgJxFKxjvrwr9xnZayZVGXnAGg363sfmv6np37Qh3ej18ZiU1ek1VWVNTgrtr7RkFSmd2n1fycXroz6RN",
  "key7": "a94zthja2dbsJaD1FHj98XeNuWRCqwdLbgn8HHCWVYphX85wKyrqTLpQH8a6SunzfJ9haMEjfPeW46F4DJzr1QV",
  "key8": "vN5tXcnMdT38fPNjPrf8suNEXc1GfTred15tY55FJEjtcjpEW7E86RECGtYm2GK4EbsRBsEHzEJD9amf5zw4ZDC",
  "key9": "43AJHxqVKhG4GaSKEakRqG1wWnk3ywXzbjkEVPmFJBiRP2GgBkYf9q4mmRB9NsRrBT4dVryPfumJTQo8edHhhGfL",
  "key10": "3jeQGApAN5hHwLuDSsVyEPsTTPCvJxPGGuodiUnPHMtiY7xNr29DHcddTCvotxXVVmeF8Mr8q6w83f8wynXooF18",
  "key11": "51WyWDqMEe5XwaK5qMaFDtrgAcpP3fNYvYGrD27eisCkLHxGjdztP93ZvovxqMyHghs4x7vDHXaTfoTgZzuh88AQ",
  "key12": "565UAqUwLkQyqVnrAzXZ9bAsV1p3e8qJXbXUJyKBYH3F8gh8bQ4L2kWFPdXxkxuuMtMKrnGfJv6v33JNa5ojcRw1",
  "key13": "2x7sBc2WXxB1hmt943UTSsxyys81wnTT6B8VzTJdrh6s3SEmSU4HLzTEqyL7agbtFa3bzZPtrjxx8jvKaM5Erbio",
  "key14": "337PfpnwJcPq4XzqhaEiYmcY5iCLRdYQxqd6YbKzUTSEuMm9aSx9xKVMzorWdfJJro4GvMaUDTCNQwXWANsq236V",
  "key15": "4GkZHkiEmREyj1Wpdj5L5kEAUV4bXKsFoBDGWsViH4PWfpBxJ2nGgzpQcE7uq9ssGLhmyWnfzrrGz4Bbd7L7VZXd",
  "key16": "49djw6L2XHN1TvJx1LnNetnN5ymxtTdcZuzce2g53mckBWRiEoxu9TGepLNS5qEFiDsD6GUWQAnBGVDs2bmDqcpB",
  "key17": "3oUwK8e2pyJVDzNsqkwxyqk5WVmezmupjdoVeME31gpoHbAVQsBzXZQRgV4TyGbMLQCssXRFyfupK7LT7RQkTZHX",
  "key18": "5kJNX4r2jBfyY4KhcXRi27fEagQ3yov22yMDYd18jP1PndHp6kL7yW15y3jtX3geifhcneTouRivgk1rER7DGLas",
  "key19": "2GnLJUsYsPGr23yvnErtKq9FocDsnGsN79BQ4KHTeBQGLPftf6vHhTM5FN8MGDGctQw88mVFaMRmve3vp6J1oS6b",
  "key20": "NKDReVWKGqjJxk2ZDT1RmecmAfoqtrSgvecGFkpSyFiTEFUJbY8b1UyLrXWYWxisqrvSuv2YVravfs7f842hcHV",
  "key21": "2Vo8FVyo6gjn9NXAYM2pKzLwkfrRHQmSQwqxYczgsdjPjJCr3NHgbZe5bBiNA3e1CPMJhrXnwpoHyRiSoViXG5SV",
  "key22": "2M4Sm2UGdeamyEZSPwMwsDgu9rfwMjnz9PNuuUVtULMgq7uXxVyo518BiNxD89psczpoMDeNXUgZc96o4JSdYNj",
  "key23": "5eBLGwXrFUV7iW7jpDaHEU2DW1vJLmiwY68VULp5eZhkv5UKtp2N5uk2XYVxXrLUMAgAP85Ut14UhS5dW3LxAaaJ",
  "key24": "5qL94YcTTQUqYwRmxZ1tDVh91cqEFXviXPJ5evvPrYB4W1T7Qv6dvcMEoA9e5tdKrspdrSKGL8jAK6cE6BzYX2c5",
  "key25": "4qQUy1UvJrWyRH2Ty84XfBNpUCsHNu4j7m4aHGC7WNeY7jRmqTFUtBia1is21dB7fkCuHaEK3pkU7362eUx1K4MN",
  "key26": "4waAzkRJ26bVZjcMdKCZ2wvCbXMUu17GsfKfSYvi1gsGiCFPM58NmFkEQCUK3USroN21XRZJ3mG9gM6hefvYUST5",
  "key27": "Y4fb8HASoehqXiYHPgcRu8VTLzpdesEwaQ1d1C9ospoQddRN2SyZHPjDujpjrS4WHG8nmZQGHMLNcU8WkcEmqt2",
  "key28": "3igxN4irndSeFvM4NcfPCheFmpsXhYM1gn2TbKinq5iYDVcYd3UanHuybB84V2awcTwZKtA4Hd5TThDVyppVP57s",
  "key29": "5NkWqVxyTNwy8JR4mK4jnPcRa6Pwt43rCFQmGVink7NaEMGAtu8HQVEc7Ss9MTTnvC4fu4Z1U4aL71Ho5NQDcrgZ",
  "key30": "2Jmq4hKRubLSuCZLH3EzmR63NQbWxd5bbLgmVd6QaV2fuhdnGqyFRL6S2tRAT5QqKLbwCHR5UbTMRjmJCbSnts4n",
  "key31": "5McXxvMcYwZjac4zBmBVx8XmCtGKcHZBmRuJnKC6j82S4HzNggzAXBCF1yjVTv3YpPHVTpX4YNGuN11RzqMQAohx",
  "key32": "43ucuVdsv8Ds9AiSqwZhbFDeBygjgD5aoEmpjYBeDa34J2kK6cLhfCe1hfqturxTgYn4F7n1TbEmwwu36rbd9yyb",
  "key33": "qAZxmjiFXuwH9MtLLg8CfpwmvYsbbFJ3gNRNaWLqifq7Ss9fzNx5ZVprN7zPnMb3YvH2SogbPZA66b31qc6ZJUy",
  "key34": "5RJAKi3ARjr7ZWQ6Zjs3yGtwYPMLv2YyrfewpcmKHpE73o6qdyXXMaVCFnrcnT5AonfDA9jdkR6CEruQT1bkdSVA",
  "key35": "4g8UbB9ab8r1eFEyaCo65yAnJHQWeXxxY1CTsTTGtNaKjY44swd1HrrNhTPn6zUjrPG9pG2DCvjHHepbtD6rkhT2",
  "key36": "5VdrW6GKjqEHaJSnnm7CME2yKmePc5E9H59khkVymEMf4hPjQSXKVyUX7kbTKkADHGC7AA5fVfBktLSgwpo7mXZm",
  "key37": "3v6bBmCVvqNFtU1P7kMP3R7UqdwWqTazrwNJLe6CtEqtsqMXFqKQcd1Qrs4z688khdNa79AXETYuN2PGuVhZQgk5",
  "key38": "4H6dckZ3ct1qjKBZFjRd2kmw4ZTXeCuK26pVtv7zzgiN1ow96KeAq5Kt4d4pRgrEQ3R4m3P8BPJApkKaNXrr2hzw",
  "key39": "4ZiH7ALeoTYbYvVxHpN12jmm6zoMGE3XFMjNiscDkj6pCp7HiCd7jortNJaWAu749j7UX5iLsHCJvqqsx2z5AVCp"
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
