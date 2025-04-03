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
    "51gmfuCCucjVsDxJGDgTRLLB6bZHDYSsFxy3Z2RCK51mKDtovPEJ8i3AsVZwJaJHkKirXqvBn49S2qCvjRhrt4et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VvHoEskEaeNx6z1wEujndysHpyyKk6M288Li45BbgM4X2np6uP8egpf8gdgY5hEoJFK3ZdQyZyeVHqbh1B6R6xW",
  "key1": "2FN4nQh6jgv83Y2K781HBySvMgqfrniyiFRBDJTvXNtJkwJm4LbUXTY9cSsZNrijp7yvTA3yqPX2dzJHdg7P9THA",
  "key2": "m6v4jHiin9kMeTidAprD41SJUwAeuoch1yJ2i4rLYfdrU8W42v6pQMg1w2nywstiwUP4qL7XvPWfjmVexYZT6YF",
  "key3": "nXAQZoCrKzBHBpJgtft2C9j61N9R5h69hhifmT8NXajR9oPhPJDrKX5SfZTWyQPhRvY9DfyPcxir3awyZAEH9aG",
  "key4": "3gTNKype8oMiLCV13hGP96GQ9WtgZnKJkEo41HbEihj5cCqGzTF7L9rpvzAYWUAuuGrFntAsEyRVfdpo6QCfxoHS",
  "key5": "2T3cdLztyP6MK8gZmS7S1z5c8NMvYzry5qs33qjgDZyganaZKoUHmowVZdiKpniH6tCMHwvaxsmua3N65kxrD6X1",
  "key6": "njwA99VPXATgdRWJkGNZZK8njRoD2jYgH5RgRt64LaDE6H1Q1a86o1gaGZNk7GGXxsz2ayKqD3oYnkhMyRquVKv",
  "key7": "4NdhGNtZ8pVVNeav75MMZF3iNvhR7ZnyPzBm7TvU75N6HrSnYyxTMNbyzqqydAKqnaLrqaj93HTPA1ZwBofmQY2H",
  "key8": "3P1qn5vyAJJzZj9vsB4krUpbe9STffwYS5UX6xo4zJ8t5TnAsVDnVorQXjMHNnZeBa8yQaV3feX3cga2p3AWjoC",
  "key9": "ACETYBfrmWiochVUGt9TCoZvBeJbtZ44nXaxrupQTqFZmMWVFVTX3uD8yMNrqTzzLj7AGnhSVuk3G7wJyXaPZ7r",
  "key10": "2CEXKP5KcHVWwbJrkZ5fGTBiN8jkziDLhcEzdERHgKJDoN1Bt9w35fDek7W83SUsdwf3BoA1tsdrQaXjctGM6EGE",
  "key11": "AcF5TpaXYrtzu1HUnzDXAVniPpMuoChrpBPR47y321g4h5u6QMFQSYt6y6JMdRvUtUVNf7GFaP8UGJg3Mif3LVJ",
  "key12": "Dy41fH3V9eEyJaP7ht6NmovVcMMqJXqwYwiHzrDK7KuRrLyy8y1AqGnHxrgcKSHpxU1GJxtgp18HtZ7AQU1jzFX",
  "key13": "K195izi2gk9vqcbajUrYy2rcRJ6z8KS7gmDGES9ctaFmrA6dcL6AuQNiZvX6NcfLfLj7koXFxoib4sZ5mdnfha9",
  "key14": "Lc8Sn8Vo6FLGY6u36i2JdU5FSr1KwoVi2P8S7AkKbnPETYKYHRX61z3jXoRSWoRiwrEFQkpu7PkQ6qMBfSp8rq1",
  "key15": "5Wjm682DuSJDhMDdiT9wxYCAKe966FMXqLivPotMeLpLMTtkdfc7YPCy4jM6rsKgtgd1EfBM9jnmdHmeDp5WJByE",
  "key16": "38VnaRshBEiknvf8eYxaZ7KxeAMuL6B6hBFDAtPGtuHGp89cSrcZr9TiCbrSzfiUsu7amSQdyP2W8h2EigTWXncL",
  "key17": "5MRWut1bHUvVhpVyp2sEzjCfg5Q7scd7vWZeRhBRgU7TR2NcsS9X1SkxPuKQmMxEywHGcB2HfPRGMN8Y3tR8N7fQ",
  "key18": "3ntd7Y8sVJ1phNDzJBm9UbL8XxWvdvMdqtDuJXZR8m1FZ3NCANgkrsjnE3Vb6AKrXsDqPyoSBMbupco9rzYKcPd5",
  "key19": "GzvBZ5WR399GjvNnry284CvjCGnm56SjsANP68hxkfKbesuB4UZMaU35Ai5aUxPYNtr5ZQYJo3meVMcWL79uBpc",
  "key20": "4CEfcJJD45MBdM1395xwJL6xqRUCfA51p5uqw5uL7Thz9sLVdbafGCB22SjgD7nY7XoaG6Venay9z7P5eaMe2ZTZ",
  "key21": "5uisCxqvXKXzst247wQpxfuNWgRTMMJbFv7XNPQLnsKefEp3pb4FTv8PoLLYacVHuzrVsV23GKEY85ynEkPZdxdS",
  "key22": "5CqRdThL1r4HEeN6wFZT4a8XoMjnPJEnKpkyEZYKsSjQnxoJBSGHdsXksV3JFPwAwq14D5Au64GQRZGCTZxFWjnc",
  "key23": "2zHpzXCQbv5PBed3NrGH7Nrtf8YC1zMZmmki5C693MfrUEY2xbuPqJXXLTGgcYotEHLG5A5vc9f1H2LKQQLGptEc",
  "key24": "KHHomwuPdQsXZiLENycz6bEo7H5cs1GcCuZDfpT24imwRf6az1ZoMBv1VouHiLpXBj6CFo6Lu7vF2QDUfW7SpzZ",
  "key25": "34XbNsMP7Nmnb5CC1yurgvKgZABTvv1DvypgJjSskNGYus8ytk6718PDkkDLwR8JBMEJMegQy7MdtYJN3Nw3APd6",
  "key26": "2Rq4YFQUMAj9sTWizeAp6Kb6Yxb77pCksHZ9oAxScaHEH7x3oFN9C1sXFC8XP7W9RGQJfDLgrAvwtBXbQGNKDLhv",
  "key27": "3sDYKUnTG2TUmdn5xbN9QSH4U3Vt48jDTdUumY3E1vyF5Uaqpt4N2pNVYxNB4RhZGoJXMZczHTcKs4Mruj9x6dVS",
  "key28": "4t6aobjYCvZqRBcYtsRhYRtziKNeXRRa6bGdSTXUzW1xiqWd7tdbqcZ38VEzS8914TqRn3J8u9nLkLYLUzcUzPRv",
  "key29": "4o4nD2MJ1NupJXnN571qh123a2cmfM5QerbFx4Z281Mjkt4axhWt8KXpbhZTNz15qcHt8RkSA62MhrQgRavL8q96",
  "key30": "67THVPUHoFd8GCS5jepMohYepqDr31FcFVXNMStw7PQao9BTCtY5sdAwaw1UU3t7hwHasRiGvP2TdDwQwAkbAbq2",
  "key31": "4yeoAvrv4DL3Jcuzet1XsBEJ9xevn13hnDriNwo9Dcc8JMZQcKzEch3Uw4VA9isHbxaahtf5aAu3PjkBHvVe1NE1",
  "key32": "2tfWK1HJ5Fp83fcaW6AbjzCVPe6exK5bzHL5oUMaxqveKFAuiKpedHwirYz1VztXnyUUNJXHH2seJSC2oamDh7M"
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
