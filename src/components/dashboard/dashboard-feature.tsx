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
    "5FsnLy9u58ehE45WeKZkqyXWwELHCvkr5KWRfUZ8kesWkp1N4gWrfZumfBcnM7LsVa1GWpFW9Pc7fb7tLnHh9yJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bkXA9eccLi66UqiRQaPp75teTfR8R7mEC66A4gngGCgMWgAD9ha5hyuwJx42qajDFiRQKVw51r8TsoZBAZAUnaK",
  "key1": "2EbxCEMDvK9DCmhydc5dpeUcjDHjTcTcjH1KFfXAoLrMgWnRHFP4gPCtN1dDZWi4KM8wkPoEcEdy4D2Buv9hv25z",
  "key2": "5BKUTDkoPKGd9Vpi8GmUVvmj6QfT4wy73AhfW7tGtcmNBSZkv929jGcGM9nMQ2eVqrHNRVkKqRTCroEKjoG6Kf5u",
  "key3": "4nKx1H5yckwetBgqZBSVPvnm2wKkgTM5ZtkZz57Y1hiotwd2EunfrrBn2ZkdDHMeb42ctpuLfLWKHHfPrutevmiP",
  "key4": "2v2TAscyus5BCYAmexQAkyjyWbJeGq4Ltd1p6ovTS3Z3d6KMFs82QKZoxa4VyuppZzEF772HteQxf5EjBV9xSyyB",
  "key5": "5g3mLFZoSfv1q2VBVoGk7qp1CrQah8cCUpms5JsuwL9RQTLRFEHqdg82tgWnQhhhGVs1krbad8GFBVi6QSPt11KD",
  "key6": "5s41vsTwAHW7ymAAWZ9gw4KWSSctEJ4tjKVS5y6VNqgt6PomiVxcojzotKzXfLvJo7L2tfhyBQNd9JsWVaSr843H",
  "key7": "2hgy6xQJ5cBkN2iPHL3ap69R75kqH7wj6mCwrL1ab5U1bL1FU7kS9Dy5e9yr9xU7nwx3p4E2D4B2SqJj3pv2QVjE",
  "key8": "4srqSfwsiNg5NfGKS2xL6dz1tZAfx4sFcMwfUWbbHV6QbFy2MwgETNZJucTwnBbdFxVwHU6tUAmq7ZkZwe1fmBLi",
  "key9": "2YQncXgcC43gQnSxYHooPNLCLNuLPguhK84ExNwMXx1cBSPaeWr1dckemWPbSjuYveF3zpViQv2a3bQNvQLdgAjv",
  "key10": "BVbGoZTFz4w5sUgLpbng6bsMH7XRjGijnhy23pmYoVZDBtfq6dKMupMkqofQJFEd7oF9nkCD8AosFqWL4t4smjw",
  "key11": "Me2v2rPwsUe7qaq7FJKJ9NzCnqStPEZm5D8z2Q6daNWU8Z4W5mERfad3LsBaGwuAceAh4DsZwn8cvhLZM5Ft7HR",
  "key12": "4xomVodWUy4VhjMeScqSXWjBRiJnUf7GL7HkgBXGJcSHSKWN9ACgaNavk3C5uouoHLox3xmSbCYyw8Qe4SUmUhSF",
  "key13": "5gCQ9fNovP5vzDR89RDrh611t78A6vYAUh5AXhR4LuvxTdEtr5t9ASixReNXHWF1sLEuABV8ZufWM26pW19kQY8L",
  "key14": "629DG3DEGaELh6ESipwSADLAhiCnrf7nsUHR4wBAoNFQW3di4BfraMnTbCpLuUAQBCUELrPDUbwHxU3W8LJo5BcM",
  "key15": "4PYuVTyS56igUYsAj3FnfVt51NqP6BR28s8UXuXNDrHhQGPrfCEKBPQWkSdRzwAeogfnmt8XTVVwkM62BFTgqh1n",
  "key16": "4VraF9urUwKjCmxvazuBfot7K6QW3myWEorvbS1hGP2R4ZwXG8ozMe7R3yKJPVPtv8sciy9FWCHE7rXTqG4pbLMC",
  "key17": "4Mh14Upd6yhv8vg2puJzS55Yk6ZBD4U8MwosufVRGn2cihLs7MPYadSBbsaxVW1ShSgvg9VvYdmWckFXy8WoT2SB",
  "key18": "5EDhcKCsPNBigqUbL3FUrHgadgXppzppznb7ex2QrqcUyG8jdZNX2sQS1fZiAQkggLPdw4t3hsvp55zfc5i9QjBa",
  "key19": "5qRdx187MeMTZB8j8VeBZcfco2MeZpVb3Sn39JKwBgsPadtfUJ1pgVWiVm6EUDzPJhQ8noozuqzy5u9k49xNpyG1",
  "key20": "5xaqztKwYDhfKt2os9M6z3KRCH24cNSqUUJPzuikpLagwMwxUJwA64SSTjCLLpQNpTjnBVn5jAKQJKAkgLEAoDQa",
  "key21": "39A3hQXHNBAEvkTFwA4TFep7R9tXq2DsHtEujLwiMzKpwg3JWwBKCDnwpMmvtKMN9XUitUMGMk4MoHWuj79fWrq9",
  "key22": "3bkVnta3dZUPyQHmuGwA97pVZUEHDiPpSCpSnu8a46jpVjGfQvX37qm2WQd2AgAezyPGbTGz7KPysaxtE178Uvoe",
  "key23": "5eQ3J89NuDsKfr6ZuGFQnRqeGqTSZa1PE3xPPuANDwo6d6kpLDrmVSe53CX27HmWnXKQo61qczZY7mHd1GPG4z4K",
  "key24": "Nz22qcGdgvufcdxM41ksJoFD4xmKLjrrTJqYDMiEqrcTRWrYC6aSHxLVqgqDb2fUDdeKbX9T8XzLX7n3H894ckX",
  "key25": "2YfdGJLoBvtfEYoxB6tXRevAUwRbvt47umuRH8pSFbT1YyXvTq7VMzGYejMWWtGarX1Mmc3etRDzUUh1rQd8U9uB",
  "key26": "3DZxmNkcujthQjHKKE56iYJX6BkQjDQTfEFWqRhedqCaZnMfUWSs8zGE543vSjoRyprSmAoTs6FDjQBRqkd3cxJf",
  "key27": "3rAkjwcfeiNy87dDBPLfyK7fbbrSUZCWihaecrxxiCZCwy7cn1gTqFnnHLiniKsrPkdZGPnX6i3MQPgP1DZKXz4R",
  "key28": "4mj2Ua4WySTQJ45K6w2KvSycM6MoLWFYavLXU8kYbFHAMPMu8qmT6JHE2qkWvmUYPCn9GnP9rZWVNjf9XrRp5yX1",
  "key29": "LzomWyt2raMwnW339cE5Z7ZWZN5WCUto5roPEwQ3yoYJo1HxXRDZKj7QfjAKPJALMiH8e8HDanv2dNbvyXVhXX6",
  "key30": "4VMov1Ht6C8P6NdJR6aS99ZHDHofNfqdPQ32nPbnYwNYSrBbHQmmzabTydwq1dbgXBFMgh6b7yKZieKejJj6cxVD",
  "key31": "iey5qJho4FtTVNL71C7sdmNRwhguckZ7zoepAqzrBCpruQC9aSHrRj518ytaZm4BKdHLnnXhJu7SvAE271usTYU",
  "key32": "32KQsukafvpZHG8PSJfb3E13mX1b2t5CiuMapLjhDMn7Sf5H3S8zcx4kM2vxgkchwFTjusdnfF3G5Mdqf3QTQMMZ",
  "key33": "4ZkeRdPZXDuf4bWN3zTRZHbhCyYkovFr3puWw5mB4cDkgpf3bcb2FZMEfJDWeFJZ9RX2KfokG2aRpWzUzj1p4bcV",
  "key34": "ocp643t1RcZTzognePdXNm5sLMP9dAQnPSSLvsCk8tprp3GodMdpijxjw2nzL4UCYvjkGCggV4G8ARU1LLVJewE",
  "key35": "5ZrYk6YjhHw7wu7UT1DGNNz2NhzTdek2cnx761cHHAoApV4QA1QrjkhonJvSvADU42hyHV1zKQ94y7oNQ2kUdAjg",
  "key36": "5V7LVLieo4NJUneve8HtLCVMU17EMfHPKwfP2ikyQxWXcYZLvXiXRx8cmogS83tDaFgL7xUSwShQZpDP2PW5s9Jm",
  "key37": "4q3L32novg1bSALSZMB47cu65gnxXsqJ11h4f81Fv8MJjLxu1QU6rQ2nNARgyeQg7oZcAxSBkEBbHC5dBLnj7uej",
  "key38": "2ThJBZFweZ5r985UkJUig5SCVgVZkqNMPnAhwQjFdZA1YFjZhG1fcwNAoYVWAW77zEQ85GdWni6oynTdRe2G9Soi",
  "key39": "3ymWXq5VoEtKYbErsdY89GGTXSQqaX6YFA23LtbLSK5YFf1WQB1dj5N6HekBsnG1YsoR4Zp2BKk4KBjr7ubFChAg",
  "key40": "3KUSoudMCm2iUMX91gfSjBaApDWDDVMs2vB6pvcsbkAANfUXNgDe27cxfYFpdo6TnBdiqVyzoUacdberk9AmMJno",
  "key41": "5zxSPz8CsqBxnsEXwiLkuyB7zaBFx9vTP4ERcqX2JNUQqP4u7wf56k2Jf69QTjcz5ctY259bxa2aBZ2Nm5tnDji7",
  "key42": "5HQ86PhFDdGiJdtHgzgoq8KCQj4U4MZsuD7AnWcJH5FAd4oZFLuqe5GMNfsmBeXuYHZ3oTdUYCzZ1vbtWWux9zNi"
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
