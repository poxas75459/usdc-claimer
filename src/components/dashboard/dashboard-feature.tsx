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
    "2L9GDRBN3c8bT23RHCW93TBXE7BLWdBGwuVTevWhYFnWhSofttSSh4iYwiofzvRT6Q6Zenq6VNJP91udXtTu9Wg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31iAtU8JTjanB3Rcf9Tt8ByusxQh293WSdfv3XXJ2H348mYhtudEqYg3bwWWRWhDJEfvBssnNoUM7vHQxfd7FN6E",
  "key1": "4L3yrYmHTqoCGtENA6nKpZ2reTDWNGprN7dfDNLJfVgesDRQ2UfU9rAdD2Zff3n79ot1isUuYGdh1AUD9SZ9KqzL",
  "key2": "4Y4dHot3ScyyGkXTyVsch2vPHn1hZqknMpfua7FdLdiTdbfDMjKaBdEGqXwaTUknSJ3BaQA7LHM4puv9b3ogG2Dj",
  "key3": "5rVkDHds3uCfAiyDmmudDPmyTBQWALjmAwG656thebjkhxp4FjY97CvcSLcP8aKvwgyzffjJBDFTwUwrNdAXWBaN",
  "key4": "fUyd8mgFQ2HB5gYVzra3tRi4naqbGZ1fu4hEzk9XUFTog9DgXHWwT2mi8ZZnxfUNowhsdiJwWZU7GLVrK8CbbS4",
  "key5": "5j1UAWhgEHMaghMWNBhHr4fRUKNFN59czH8QtXgSdXQJJKUUJPCq7sU87pKsLNyNGaRD7fP3eqYq2zSCiGrn9m5x",
  "key6": "4A48TD9faqcBQ9K1wDKZtqinAUEiRhJx3tVMK9n7wzeisJsx3DXnWgrQgADgQVyv81jd9PLKaz21MdNDPP3YDjg8",
  "key7": "3ykAxkf7gSg2qUQLx6evXxsCDUu7rYVAcKRzvUhiz1bQsh7Lj6HDjTgrP63K5tyknTLtt4vL1m4nF5YNdmSULC4p",
  "key8": "2mKezHLroKH1E1wFi3R6ugLKERNbU1VeoxK87FqMFbYujeEGLPgrbnvfmYoNZhdjDGdG1KJat141FUBTcoKUsfu6",
  "key9": "38o5mjn52t2VqqdaBh4CwZoHAvjQkfQ8Ev3XAEwLux2ZeoDjPBiHTfR22n8Ndmp1PNTTwVFU4mv535aButg3LHEL",
  "key10": "4gRRvFoWD58J2BA2qbnwcM9NuRZQ6XsVBCGRZ5uDgywZ6stYXksdi1tDR6FJHe5eYuBwx2NX2aQMqsPS5HKZjeiy",
  "key11": "3J7f7cFGNQ2wQmGzhvWo2HGEVVLhK82EDM8abawhVRMgHEpwpJS8yQ6sb7e7UZCdquD3SbaQf81rcXyhkV7xt4b1",
  "key12": "2fJp4qVR1spAtgs3ydLArrhJCAGUi8CWE89i6kRZJYJA4A1eUnVTiiYPmKNzxmddSJvEVDAF6BtmJiGkEHZ1CauS",
  "key13": "5iCSyCkeeQcZ3oUuqMbtpzP7C7FnhdU4DZEq1XRJZWw17vqg3tD8djjamh6WsiY7PrjXouEfHmr5rbKix8wSbksT",
  "key14": "53ak1DHpwpPK6H8Hg2TjSbYA7t1koJA8dABDosUzJX6h2PEzoxXWR7gqEr5JXk5maR6GwJ8atrbjcaTUVhgpueUP",
  "key15": "4TryunSzahmCXa6Da6h64Y8kWvsFdZuzvX727vYyFud8kB8Yc14ZxN4EFdhfPLTD2MfX79t7tW8uir8AP19H81xV",
  "key16": "2oF44uok327JtTt2W1wgX68MF9WfC9tNdW27sr6zuepyzwcfwnqXFvTFgsyX6KZn7pTakdVpMYVpDugszQJf8tyE",
  "key17": "34P25YEgyRdCNtE5K1diHb69qZccKb1jwigre2Nr4afWe9EfeFbSwo5URVYkKShZRie4DEUjbS3oisuStTLNHZy2",
  "key18": "2TmH7rh1LByFPqGFynF95bTAVEqDvKyCsqcCU3ri47RXPa58SWrkDnJ8ynTMKPeed2Q62tiMSP6jAdM3vCXL6Lew",
  "key19": "4s3FDzcE6thEo8cHYWdrex9uzc16UWdgGBpLrBHiLZCFHpRThB6imEHhWiyXkDGx58UFwdyt4Jgyb2YCASiD7ujs",
  "key20": "6SJXXyRbTxZCqAZss1sYqA4woQ1EnCAP6z2qyP5tMEzu7Pnx5JuoeEvCA22hc17c9gPR7dxHMsoAyXKdgWMLT3p",
  "key21": "56K1sap6WVyDYS31PmjKXLpDNNzBtiBjKuDwQwBk6crLALQ8NHzXBcEw9Yf9YoG3Ttyh6ugpZpvNyQPV7QzKiDYk",
  "key22": "FADnaf6M8qxszLyksR2pEUCDoR4wdSSJnUFtkH57NLLprWP82jWwaME29e1pDKeuAJSyst5NPTVmMwEnUZbqzpu",
  "key23": "26aY5Mkjh3ww7yarm4W58rZMnkTPUq1APQAPhxrYVz2dAdfp2N6R5HswiPDi1o8zqWuKzVVVqq9c8FShA2sjDZpj",
  "key24": "3RPFjXr16V2jdDbZ6qhVcYbzaUyRxegBcnDSeeujtaZJVHaHWSvjVfL5qwXEf5ixKgAd2j3Mi5oE7vYFS6EpBvby"
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
