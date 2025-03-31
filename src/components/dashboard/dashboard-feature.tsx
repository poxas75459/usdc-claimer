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
    "2USNxDmoWFPfvRUvhLAHtHcM1jrigZVYPTMBtFkDJugtDLkxVnyACccs6WAP8S3T6zm9z8mV48ZQ1hykS8e9kkpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mUTDF9ToWm3jnW9oihBbCpfraejQMsxQzCJnceFxVi5tCZejwGy1SGsGPx6vvEtqmjiTbckqwsLwvFShVTfVs27",
  "key1": "29pFxfAo7tyWVftivHmiKxkngvHVhSNBMxoWqdpuiwWR5VYTJzjY7Cto7RywHyePqS8SrcycK7PBaY6wEJtrXYdg",
  "key2": "3uktQ7LeLTRqWR5gUf2bmun18X4mi2BhFArmBwuXxdoyeLsrSTgqATyLUdepuYnde4t3SWNx7vdHackpJGDQgjJD",
  "key3": "2juJFwhtXhSkKfi1oxARbudh9Cns6a5oP8Ueq1ThC8GNCPu8Z3gkvGeFMB1B5RvL899ikwLJ2vqvkS3KR6tD4E8Z",
  "key4": "2eEHzkJHYRAit2urCFhYLN7wCBED8KRJPzDTmPyXfQHtp6frh2PZoom6vWQUxmKpvj7FLKCsKM6dZwXyTDosYYfW",
  "key5": "27XZBsVrEE9Ne9RrhQP5eZTxSQJ248gXicE9Ep8EUM2KNYDfGQYmJy44h8LxYF8PKJGzfeF4d8iPzUwUvnWL2Qc9",
  "key6": "2DtiW44pxLVBWRnvdByDvUQG3diqzs53xCgnMuMByqbHbkSPAQyFLWa7brq1gWUpzdrjXPsibAMPkEfZ7xMD6XDS",
  "key7": "3tzd3z3XtDkzNTzhC13DuxEZDLh2Vhez6ZPKS9adVkAJoYchsWNbLDVZdNono3P3G8gPhmkeDb2aqSREEr5GshbJ",
  "key8": "4hQPSMQenfsumUdhjM8MHdyFrNM2VjsgfoVhpsaxi1iJt3y8HW3KqBnoV9ZiXGoNV8c9WB8u5U8dvndYb4mczJut",
  "key9": "5vxTSbPot6UErki8Yr7s8akayYpmxkRvxZmtEhsHQ7Qn7mTAo8bBS81znLyenKZumr13vsZTGcmbNcjq8dfREt2j",
  "key10": "3kAbGCXb1Si99C2aJhi2kVdgm6G4EdbW3CbV7xRsCU4D8oc9BVfdxpa1VALWJ47Th1VkEuNzdbx4abXrxRUh9jsE",
  "key11": "5e9WmZ2sY3M8bSKWhcqPNUxRTvRCqptsiBFhGZa2qWMghP47ZturUFjekPQu7YKugHZPeHsroJaBZUfa2UengdwG",
  "key12": "2HgGu5tGiFHfGL62EEhASLXEge7d3KeUuk4DJZQEr832qy3ca1R8N4yj8mR77Xino8yVd8CNJswmzaddiogg7xqm",
  "key13": "3WnY1VPRWk3N3HjdaK1jFw5uzVa2QC6QXuzPRy14SQzUpGDLCug8GPjMag9DKYqYdJYjryovELjHFoVtFrCRFD7v",
  "key14": "3T1mqoQFK1W53UbsYeonC6aJdw2v94BNihExt1rvubaxsD1KifqRkfHF4ZFfxn1Dpyy6tCykxNaWBv3nr2YULi7d",
  "key15": "4oyWeXh2GB9HdWQjReHgWvACSYCZFepVcWNPAS4Md1eDXsdLAHvXwYExBxVfY3JgCHBtC5x84By1D5v9GfE7dUxx",
  "key16": "3aLQZFDAKMa3qTLyXN6x8YhefdA8s1Yngp8MzRbdSqRkC1qfPcTTfAEter1duCr1vtRQmuayaUFi2Gzh8MkaJYro",
  "key17": "3LuyJV1LPcNbgmuWTr3uPiwF21sf2oCNELwZXAUiumKCYpG9Y3BEXPfuBJRWy9WePmtcfumnqvfPajAyztwTRTcU",
  "key18": "4jhad3sSLszbD2xogVceuuR8deBp5qqmiBhieyZFj5kJb49gDGuEd9izCQbJY7pHBaom2QrMrtKHYM2LkgvrHoAE",
  "key19": "5D8BXW8iHbPuRzrwfKqLHE7z59hXeRp7SFhE6T4c4neWmmJhjZyB1zBHjJZ84Jv2Y2DjprVyXMvVkmy5XCYh8yz7",
  "key20": "huMQFj5UV6UrY7p8EX2cUTZCKasR9uxk6GLmMeNQkRRPdecu2wVTXSmN91tXrhusgwSi4F7h524vvAE4Tu4HFck",
  "key21": "uEnM6CaxUQPzt6BpidYjDJ7Znxw5ePCGs1KvKCPbsdf5A2he1t4vvdkP9ezZm9v7bDEFT1K5ZEX19NaE994gfXm",
  "key22": "4EinipEoVqNzjw1sY7nQDnN13qHaQAHkxXmW2oGHtpagywFP9xJ1qhVirZsWAa99ZCsECsqdtuCwckq92w4d3WBD",
  "key23": "3D1aAUoogdSHauUnyWF8UaiBaPUuUKmv8TEZsw6LXQYQqjg4rCDkWbJyTrFkETV3pEGSg7VYizd9PkGTJQ5ajYAT",
  "key24": "4e73ANEsDNtMy5VdtJnhxDSDR4V4iBpHwVjhb7Y5AkvsfpduXvyFsxUxmezcRSqHspMKYbpTyfrn4TG8QdUjXyZW",
  "key25": "48ZMKUx8NuxxnXDf7EfPLEyjAyjhp1FdH5nGZzmxVKxSrzwTUWDVzTQNwGfktyMGspzeheVsKQ3UfvAdq41sQhP8",
  "key26": "L4XH1iKvHp75XZi8m4fLbZJuurQY1fKJt8cnQYMtfLNu9dn5eWB3jnP8eH1nhPY6hCySJQjjx23SLbgTGHK7Mpq",
  "key27": "5b9pity5GT4vds5WNn98T4xJL5RP1MRj2SghT5GuRLwoNDeRtT6oPkTGBpBDZbxWqjcuidgRDPGMn2mXaQKoEWb1",
  "key28": "2qimgfqXuFkaTzakQNrrnjBSNF6aANjA26r7dUgsUsJ58wTbvcyfzKmywAqN8qJ2gz5rvf1BmWjBHxTpWNmXhkpK",
  "key29": "3oq83ZqRzRodr2SEGdvLEJmnYj2TDELg44NcNFKfshw1Bgkn1qDcqisMhnSRqvVTAPQXHKAvVpE9kDfV64qXf1BW",
  "key30": "2hW4GNzDqLQ3mNeCGRbv7fdDAirpPn68Z3VJiT59wK2C1xoMJNitHJ4kFBrdQ2wXCd2AgshFD4sioHKuXoVUPdK8",
  "key31": "4AjGW4djMrFNgk6jr2g2mmERHEfJEj9dFC2tsK782A8GcmJGHW85B9EZRBwoqDtmwHMNW7CVYjADGVWRzwzzXiFJ",
  "key32": "3F4NsD4DoyrH9Zk8FTcaKjDsBNQz5dLT7UrvoZBWPdehmcw7moqoZcJtN38Rk6hBUYhMWrbT4JrreFk4uwXtsqNA",
  "key33": "4tPT4QuCzdBatDrSrxuB6zSn7X5fLR1DhYgNBg5o9dBrpeTBv12sMhYTZPz7nEA9CPSsaQTS5kSR5vUkkauUMuxD",
  "key34": "4XaMsB4uiswwwvgk7WYbQVJoLURtA7bRLnDoEVM6MhCpU1TrqKg9Z4CX6vihn6fycaaNUt3Pt689HFUZw86TyEw2"
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
