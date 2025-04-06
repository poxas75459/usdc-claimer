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
    "3r2qL9Sa3zkFApgu1FYW4MeWMqfkLZyaLcwbKjsn83uA6jZfgwgYnm7HHFABdoifC55GdAg68ByE9aoq7K8bXfmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nhzjJg329rMAkfVHFHL1BNaxX6ggAiLnJccMCSRttYJvLRyffQ5XgxfEXavrz21rMUpXf7TR8wG3MN68twPWSyb",
  "key1": "52vnGe6Cyjn8m138cA5MvC9BYPYQ4ixjq2qDsextNcRS2A4NfSUPMz2eG6RJEvZZC2AkiUnYZaq24vRYeq8MXkVT",
  "key2": "2iEqXAvbJ1dbcLnWW3DpauPpQtLwWVGNt3g6upWqUDyp9uXsFdNkeGMNN681v65Qy2VCdgcK9A4CCvyMym4jiNFW",
  "key3": "5SCY88RAc4kmNN47APpwKvhnF7brjKVzHt81WQmEjFujmja1yUvLoq5hQcMF7SpLE7WBMfDgFfS5DmtkaxmXbghh",
  "key4": "48PQGadR5ny61G4329qb7HgS7Dyd4SdiJt4KByTJFpb65W7SumBnJCbeGAopd1mr4XKNiBZvQBNF87VhkF1sWpd2",
  "key5": "216GW2decA5sYfiKu5VyX7rhZ2z1uThEfJ3z2WLYr6q6LsYtbfq26zEDAEPGV38knyjMjyr8Y8oFv7Wt2ZsfjY8u",
  "key6": "2MY4QLmaKQRE2A9TpmTCcCt6XKAcALK1KX2YCGvez5KzyB4AYhjiEvTqPujAVuwXguJxK8zfzKBwEaeRFGWUyn7c",
  "key7": "2LngZYgL7fPGUT8u2LVMxY69pZrWX6Y4WHqLaTJkUvGtfGACikQFFMZFpr5QtppEaxs6irywqVCaXWedFQFVeWhw",
  "key8": "AChPNqwxaT4FdnRkXHRfM2ivREq3DRMGA7EYh8ujMHrwLA62nbDV3pJHT7FShVDBvCcrHRzdkMjV7e1aVPMmVAX",
  "key9": "4jsSnZXzsjrgoPFgZcvfr4MYB16F3mZCA5p55gz7bZbF4LRmRcqBx8sQamr4dLeorYSB6ZeBycJ8J3jicQ1MHavs",
  "key10": "56V14QVRYRbxyfNmZvrTXfrBXrmRsGVyGot2uTtnTDt1eBQWgekao44mrMSLThQv4feTyiBmK9v9uvfvX61oDzpW",
  "key11": "2pyCC7WArQpNTXRDQemxoABeuj3jbq1MDK8jJYVwjVEyUEhWq59Gsj3wyB14zD37t3ReCJCe6e4DhTtf9PdfDkpT",
  "key12": "2GiKSyQ2WKDSnza5R7v6xvWq9PuFVJGW6g6fU1PVZUC1f31RUcduTH8au9t7KnNJBn6QGziL63HXnRqwXp3njqC2",
  "key13": "2EjGeamEVQeQVrWcyaLPZUyznVbXsRNuAoSNtUeZHjTfMG1NPidSFstZ5s2sHo2NGZgFMzVEhfYyZcwY5EDZj5gV",
  "key14": "2BbC1ZrAdBzLNkDLCYnryTnxBtSMefrYBYtDwv9ZXmRP2PBv7HN1SUb18qGkRFDRi4iJBC6zPGjCLR37XTLittFj",
  "key15": "obsFfGBoYfGqjiR9UJ9Fbwbi1vEztRfQCuEmsAZuHYNKsBaQSmDXMiAtHtHz8MroQEqALtXpQ3aSFWjSzi5Zzj1",
  "key16": "2CRW7fSDakvuTKDF6AMi1khJSEZg87ANhYGuCXH1HgH6GkGv54Q7jaVMGA94tcx9quWWuZg3pb4J8yGraqrXUxUQ",
  "key17": "4pKp5TNkx47CjLyyVoyrn9E11jwpDT8kUXKg6xmsHenTj4vTmsyvCzs2jmrJUc5EFobytqsjWfECbzutZtbTwDRc",
  "key18": "3JJurPgkNRcDyomBZZcETQGLNWnCbn2pPbSUMLsMDUSxZ8CHBuzBm2aHsvgrpEes6MmDjHwz2z5n9ytWZGiuT9j7",
  "key19": "4Ke5mzUffiRHBnYNfgF7XJ93h7BTkURkNQD3kCh8kxri9jddn4Tz1JwpNbxrcMvpppsr71QrtLAPb3PazzXKJeQE",
  "key20": "7dvWCLp8pCB41De3Sz2JcsvGhYq5QXPwVX3YKfTH6RfRJnKN71EVn78kffdJbBHQfqJp1pZoUPQDnJBqXcczsWQ",
  "key21": "cyMoyguGBz4CMBVKrLXt892v7oD2JJX8pzmvpaHBGj56xF9FYmDtpyDXkCLeMLpy9fZYB3xSdzbigLSimGjRPBk",
  "key22": "23XzRuUnqCQNU7FpZBS8zgrxbjTBFjwxsUt7A6TeGL2nZ5DfYpUsEfG8bJdQpKy86Y6N5Cj5zuEbsCQcaha7iyNN",
  "key23": "5UPT698bnrsvNZPuoShnadbrL8QmrCThJgSU9a8H35uwJzSQk4aMEXQsVaa88MeRcqk2gFGVErHcQrE5w4MCQJuW",
  "key24": "61nMceH7aKp4hcsWJw6Tic1dufeSPuGZH2dPqdt1zpNLcLZpN3L5v3DkeCR285WVHT8AcFgyrKVZyC7tXSsfbndk",
  "key25": "3schCuVnN6FBJyRSZtMbaMiT25S3u1BWqRYaGZQp4CPiHDuCkS6K57Kdnkmsf8zGU8T6Ejs5oJx7XaegG9q3snSu",
  "key26": "PYFQh6VvkW8g7uAWc5gcKpCVjgGRp8wo63F2V35tqrnDTSEE9r5J7DfQ2hEFgSJHA1CoxEvkKqnUi4u2KY7oadT",
  "key27": "4YQJzBVLWok1kkMc7K2bGkBYYbt18PvqydskY7pjSB7nTYXxNPbKV2FcWtjeSkjJNbeaFSr7qdvW4KuUAiBMdnC1",
  "key28": "5QpJA6RTYmHmBhKDhFJ2Jd76uWKzK2YDVcDvAuPoxXN2X4bUpoWEQEew5YtENWY5kBsrkkMcr9Tz7Gaj9pf9nrXV",
  "key29": "5Le3EgqEQr4cMyuhshZ8iXNVPf6EqTveM979CF1LBxgfL5xd7JFztc9YGChVsTCepQ84de7gSm861wK3LRNvBXKJ",
  "key30": "3vWASqskBK1kQepkLwpJUvE1pv9kK7YTJr3JCLi4kTM6hqSduoh6CLxk57LrCeRtJwiyEyYXG6F8mNJMk3YZ5QVu",
  "key31": "53W7skq9vRz4pMe4hiBA6YHrx7rWq7pWc9jMuqwjgefQJfVnizamYtT4ENUifRgKXDzK5HAwCvt9h2ow9MGc3xXv",
  "key32": "ovyjzbsXJDhe87BpY8pvRBFY3zZ49uFxt2Vodr9Fj5JdR4dA6BmwuE4X1WAw4Aa9rRTA2pqmUu9hEoF4PpHViHo"
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
