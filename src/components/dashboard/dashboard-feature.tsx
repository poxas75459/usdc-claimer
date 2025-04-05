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
    "QvrkJUBcsFfPJ2vn9WVcyX9d49B43y166nyp5akKJSrxMF5hGea6Kgsu7YJhUGhUUiH23o6wgYtDYPGshEuwLaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QM9byeVDJjyGjip9zr5zVn3auKFro3gx8BEK2Ev5ptmcMJNPnMGc5x3V8xm6SuDdQ6Hdeqx94xRde4C5cjdzYNs",
  "key1": "2nnffa3TqpqxfjUBnP7kg1SxH4WcTX3bt5SCsYFHHgdtMqoTuQeVm9qhC9h2Z6ssjF4Pvzr8XBVjqXswjxVUXWam",
  "key2": "3zJ3JSAkUF9Y4JGC2pKgyjpN9L8fFZir4MyDj5MfntFcf2PTZASYKtprpSmm2Lgj8Q99NC5BVznogkdBJkogtdxR",
  "key3": "25YzrQUdoAG644zmRSPMuvQHnUTtfXLUiqU8oXxoo26TTGbuoXhc24QkG3ur3izbH8u2KkMLGwnNb2GJGUPUjwFi",
  "key4": "2yZ5qAF9mgxob59f6H2EF6bHxKv99seZF1yuP2hSrZ4tATNFa7bCAJfEGVpdYmXikVNyt8MmwNPPn9NKSWb1inS2",
  "key5": "2AbsEfzzryfRuowho9k9Mt3d9eFCrgkSjoAymWRExHs913dXCvoRrYhWPcqJs6xfwEr9VUfzqC8QsDQBB92hYKoE",
  "key6": "Avq577Jug9tJAzsTcsJJHSJe1WdysY7A4bbwaATMHZSDnDcey1psr7VngfhF1W3hvNZQyXfRdBpbGURWExEzMDr",
  "key7": "MEBTW7CAVi26Y9DrCdXbC84HE93AtfSXwy3n8kuuRA9nGiVQ1XaMRKs2AdVoV7k5F9hTcurKgws1dpLz5cGXBrY",
  "key8": "2aMmAwa7AaYXhF3KHe4h5nQysG395GtPfPkEXDq3h3zQfHCo29pyvT6EBMVseMBM7jsuJs5k5MgBXZWMTUtVhsdV",
  "key9": "2YKLY621y18Z24Kj8nR9p1Hwmuggc7Pm2rzLw46tNa4Aj75KEmrxBrzKvXsuRFn7DXnZ23GAwWt8Wx5t3L5ShHvp",
  "key10": "pq1bpPoEhGkmfPv4HR8vvy7Aioejs8jCTeYHYAhSBqKq3JRZFigDqCA8ZM847dGYUz958Rvts5QKTsfcZQXjx1G",
  "key11": "Eknvba32nQdJiQxFzGZoHDysApbhALDuqP73sQ6fhhFwDRoHLnSMVqiDeFP9fxbac9BidEpxvfi5gKVcoqSxx5s",
  "key12": "YssTFFT48qcAsoUBkjBmUMLbqBNMYWbidqvWbyy4DCKPW4myPBW3noA5GA4JL71PBXEPAWj7n1YANY4Y4EkmWga",
  "key13": "28fBVNAZ3qNzbXVJHg6LT1vnFuVFtBctrePpHoFes7vXgPa5VxHjsfHTorqPZwD8UDpRW3843bEXQd5cC5txkpyQ",
  "key14": "C1e8qLvs1oJMfEFoUUGEgJb3nAfjRpbgpww2e4cso5TWHxKRMssW3xUm2zHoewW72yqidsuovAQDV17uLE8oB2B",
  "key15": "3WH7rGNYjD1F7YSwYY1VEfinaquwApKSKnzKLvgEdEgRLmfDHAMrkbxWJCDwesMrBgfcnikYConPEpQTk2xzmXTF",
  "key16": "3cdMnP68fkXX4JTtfeAkr9rzy6JWUHtmWFsegpiCMHmGFocWaqh7p4Pn8R5jB8YE2Mz84xoVFqMTRCxhK5daUyC2",
  "key17": "2qNTuxyGtzbmyNHksqo3y1HELd4HGJpkxUqxaxwPrGtsPXR8QqdvyJEy5KcpjWR47WeJTrZkYeSgoy7nq2NrvkMS",
  "key18": "EzPwLpN8b4nVfJHLDZHJoDBFKjeTw7AuKz4sPvvGRSEaM9t3Ezh8ctKGCiC6pCLoHqZUweJSqqPcPXmEotFinzF",
  "key19": "4U1FkDJad4vGzeg9bbSMARd8B9JbKvKsDay7jhnEeu9hF463tWFACepDKNwkYv5rLKqr24MqtExNyWKb1wVizV9h",
  "key20": "2YqwiW8cjoxCCWx9cJueQwGLeQ2vjjD58HQ9SoYEbT5ZkXETLZj2nnN8LnXd6vTcXN3cAK6GoENdKxrCZNS669fv",
  "key21": "5b54aPbbA6joBtetNTqj1Tgu2LKtqeMfFemrdLbmvA1u2J37kkBgKLsmB6dYnabLZ3t3NM9DHb9sxw13kfxDswFi",
  "key22": "21oQTqKMeNFu9hxjQsj7UxkaeFdkv9NcJrJFStxaRnzVbG5u9v6wGsfjstgeT3bVcQ7nhWPdKizK4eYgnBomRMaw",
  "key23": "3itkEs47CWu7TefFfJXNZ2jgcVKzckCRBgAktcR572CtzrSzZZxAy4bibUwB737zPxn6SqWTSod6rh326zvK3NQF",
  "key24": "2HiM81nsdZKtdtYvUNwNqG3isJ78CoZnSUBrmyMLYhG3o4VzBbhoQQMzPbQsMPMwN8SfwVE79BQ8bjsrbey6ZLW1",
  "key25": "3SPW4fZiskr56NdYrAUcfv51PxSepNFvPaXTD3XmguFvpE81vJeevgmrsnngWnbqQnDkH3rEp5TGYhEzdARDqre8",
  "key26": "51FvuRGaqLQczMB8Rhpqu5VvnQDnRqRP1CdXiBatUo5XgNr2A4Qqq7XNWsxFr3KzBofsdC9R8nmUu4t86aEQV9pA",
  "key27": "2KkSEoxBAwedeoyNc7kEwdZECKc4LUwsTPfvX4x8tnNeD86TTHmN3fhZZpV3Atuy3fpgw1oCEffqwBPJMASNcgZj",
  "key28": "2dKBGAXevXd2B3PMwWns7hmJqYdA2Qt55juN6jgcWPrBmWTjkEvhYLfo1pFjDigdfHMRCEFssAhdC5RBn4UA8k9f",
  "key29": "4aJQkvDSoUdpYd9t2XF5XQYwFKYxC7mgXLEG43EwoAEbTwGqRVFK5mEyWqjkCdXqNQgzkEVLUNN7Y3p866R95gjZ",
  "key30": "4gRZmM3xJ7ktvgkA2fHvy14hb6thydeYcCmh6qsmxGLECUet5ajakpFdehRjXSCcp4KfXQ9ij955ifC249ZHEbLH",
  "key31": "2xF5pVcmyxZBbWzmrWbtVvpkRBNHWeyTaJ6URcCJGRN8eJrPJVeeZ94iaFVsy5Wv5ETrY2tatwE6mXc3DxY9P4hn",
  "key32": "4CDDp2AbQJfrK1dnBBL325s4AskydDYCZyoYaeswzy6a5fGgvJaWXWD4MZ5kGCcasAQjrURakQBQejV3ZJ4E65a3",
  "key33": "2CHPjUAX6XTaRgfjEjAM4qqGNRrbeRPtw43HjPUrXPqsrP1ARoCEUCxstXtup9QvEWVX5NkZmornwGdGo54qs8Ms"
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
