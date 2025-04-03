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
    "TSwexF3KQogiEpqbtomje8YGfMuAKH84ToSCjLWkCnAkof3MVGfi5xMkQX753PrERqSSBRoPe9bkRpwNf1AHnaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jwoxcy1LFRF7puNutiQ8EoAifugHhHZr6gkhxRBSVQeX1i2n7ZkG38HBQCfsaK7mUmpwN88TkthtG9ojqL7pdUK",
  "key1": "YbkXFN8AaBPkjUHM1QZSdT11aPUhkzydmznS2JfzMStG6sX3632uhGtEaq2LfXnFEke9Zud42GcsCx6dgffWj3E",
  "key2": "4Tk6t4pUmXhS8GNKdZqJzhH347ernZ1hfGceche7tdBsckMQ7NrzodzwhVSZCNgdpL1Akcbk6K9UmGCLSTowbUMh",
  "key3": "4JdJN3xmq2Z9RieathbrBje53iaRjUJkzkcReLkUA2WiK4NsxbaaQM9CZxHJ1HnJoEhtUU5Vn735kN9KRTjwpqLJ",
  "key4": "5y9VbTayoTLsGULKmMm9Lu1NNQPeEcoykroLajRZrRdGWy5PBvG4Zy2WkEbrFhXG8iB93qn5PWYeEZLhoG3zDy8v",
  "key5": "4mYQAXJw7DnByLrhK13KaP8WWF8xMTNzmBZt685j2mABYeMYY8NwUdQtkB2TSxV9xSSPFXxb7rqu8zRjmvZCPCkc",
  "key6": "pFSS5mUJgwMeK5AnLZsKxhtey8BchbKj9iJyJrMfu8Y9LfJZe9t5GeKNLE4Y5MdrnMQbyK2EsweFYhoHfHM89mm",
  "key7": "ZatVsVj1ZCfuMeDMzGh8bjSQAAN1NQzKxUELjTEiwPmSdhALtC1ea3RJkN7Ku8cQqGSwoTUEM7NBdPTqU81PpuX",
  "key8": "mkgxcvCVTAhXawqaQtovBWi2mMMQgiqgiTNNnSomdArJPaUcqJsPDVUMPrTH3f9N5i3HAQQnQfiqnyfQ7UJ3uh4",
  "key9": "32DBD5ij5FMdsaZNuTUu8LqYLXNvw591uRvnP5NSZ4h8HUokHzkr6Vg1Er2mfNtAcWvFUcutMr2K8mgG93Q4kzvt",
  "key10": "5dG3uNCL3W5vPALGBRCJvHHr4zCL5A3H6in6kTh2bpjxGMGUn6d1QVtQPrMZRTMj93B4g5HySHQvTvfxEJL24ork",
  "key11": "4ygsaubwG6hzg4e77md3phDDNppSDH3zSF5FLLQbg16SyonSmyT4JYXbYNpCqeENdDngCap68WEdJHeFXwQPKKvY",
  "key12": "qFwCA5RhxWjjvzhgkC9x6ZZchEsFaDMBDAa2HMdiun6FwWofXrrZWRG2eScjwB2RkMSAxfWtECVkQc2AcBs9pGG",
  "key13": "Wpmw7C1pYrZyZSqen6inhCoa55G7ZcqawPEgtaay9vMSer9XD3rW5B2Fu6C2vKh5YzWQyM8zzcR3kmit6BcSYZU",
  "key14": "2mQqn3GVrmDaQztCjzngxNqiRGcuB16KMxJi92Vfa7saokrWbhZriAEXtqpD2ApVNNyahLuV9vVPqK4hWPXySoja",
  "key15": "487fxie6NwJjZ4sACbRGFjRG91mDUrMFNFPSKvPeJMdKx3eMo5ErCZvwiWVnESNUznrj1PtyMxRWBdsZtw1X77am",
  "key16": "4o9bHKphAB9sUkJ6LsjScRFbeoWGmZqnLbcBn1t41jDmFGUCf17xKKZqNW257F1V8oz3rMrpu4CUp26KGuu6yAUG",
  "key17": "3FZiPrijwf49FLeZViG5DWn1kJxNxj24NHCeyuhmKo7cH52SLTGZkqB95apdf4157WCvTxEBgwvU3gsipZ7qjaqt",
  "key18": "QNCyQk7cKhSNoydTeykE6aWb5HYqz9nVC3L8HgHJcAb64MHaD9aRgrL5yDqykW5Rtt55PqMeiu62A8jCTVKLqpN",
  "key19": "2iLciMxqbTBnxYUjs6Axy4vrSDAoy52zXPCLYgAjniEjCG5PFZJ9JwZPHsdgjXNZ7kUE4eggE6V8V4q557gAtr77",
  "key20": "5YhmPzbegrDRKdEa2S8Gyj4ZE2eSzSPwYsdLQPfxF23QWGZuK9Rd4i2qZ2GauRZrtqm72ekktZuwmh5oX7PUabDi",
  "key21": "36qZf6jcrWiGLWeNRY5Qzx84pBCEdvuPBmV8T5UgewNrV88Np691PCGULd1D2bPLKj2CW5iFtbyCGYxDdVapYYQb",
  "key22": "SLF5VmXMEHJ1TvWCy5XTTYmZaD3ZXiW98F4a6h9s38922viKk6bnQxq2C7x6ES18pLsbwi4sXdDhxcdZfDN3ZqE",
  "key23": "3kBQy8rmHS3TkVusa633TbLftz8kzAvbPuZhq2jB3xkiQKvAu84RRoXN5FM7fTpF4XePjXEvREr6nNsPwk1ScWSd",
  "key24": "3ydKSiu17QGs9gVscN36Fkn64NPvbZPsxtM22faZmgpCBLXBx4NDRzw5wkovhdTH5xYMN4r27wQ4JTKzSj49jRPK",
  "key25": "2gvk7YPfP91pUHYqVPaeX6NvAYNgZQCC9o7MkMRvUWj3LGnfAhUBun57zcspvf2RV5vci5fdyhT8Bzgnvs2SfSru",
  "key26": "3TRUyixdoihJD6rrSUxvgEhrQfvFwHNQABH6nFcmCdTPYoEnbZQu7CioQRUYNGUnjkhhSGR6o4wwP1Tjwj4BXKL3",
  "key27": "b9mdqKmbawmoYARGzqrtcGAPUKoAsWzNp4P2U7Uc8WyQerZiYc1LJ6X99bfiavxbM2NZqnCx1xRJLNuyoA5CsPj",
  "key28": "39vparyThK23jxXLiQ3VQUqaCVTimpMxMdbLbt3sJDoL6dic1p5x9P3LmkdWJ5k7tyLeChBNjHqcACfGX1d5Xe1w",
  "key29": "3rwCT1vZG9W9gPvp16BqmBbFnaN7WZTVsWy6HSphebjCiBHYgEUBkjjr6Grs7VfTSPeSeaRHfP3L5kKgi9WhXGCb",
  "key30": "65M3PXVxDSueoo75qbctm4kQGEB87SZyhPkWyvBLMq4727zSpbQWgRrzN1XrA3dhi9pBPjsB67bshoRaQFz6yit2",
  "key31": "5Zh2c6Xtngcygyp8NfS3TZ1xRDrpfPxFJr6HYhkuwyrRX4hghMw9sKodcbDQv1rrKD7Vdz7xHmJBNdWdXXgYCAKb",
  "key32": "5xtP9dxMxeBr2XVDwqTbxkULL3TXF7pdmrujGabR3h1sVGJo5bsEYC2GCSHSK9UcmwFBJ6PD6RBTPjQTr7SmLHh4",
  "key33": "3conpgpW24hTmnA8SqgXJoEoxogirSUKgavumV9f95nJHLmASGBG4hA39J1zkzDKYymRrEcUuEyxugFLfMeNJxqy",
  "key34": "36PLw2QCPoTAToBTq2E4i1BjsY53sYmrLiNCKNEnPAdYWewiQR16eAfgx1zHbpD9scipufhucR6iLdECbS7ZQmyw",
  "key35": "51DKrJYsdpF5YQcM9FuqvB7Zn1nmr1z8gAr5SngVFCiMcFdYKq63jRxatYF3FWTqm37G23nZEm5JVrvPm8MRV3UZ",
  "key36": "JrE9EDHUWtPY4zRmGZvnpG4biBc59J5Tas5EW2BpryVhoqxLfoY2rB1bxouoKjRXs5zraPwQeCkpJgUVRDNH9AP",
  "key37": "3g5PxE4T7a4cbCpbqQvCYEWaE7qjNjc4gnS6piAkefgi6aA52oErZLQvcF2RE3Lw4g99xjQ2QCwgfVm6VnqWLJMB"
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
