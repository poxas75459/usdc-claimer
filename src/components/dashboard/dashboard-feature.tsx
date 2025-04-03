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
    "CLT2Mm9HJNxcg322j4zARtWC7tRmsAoPp95vcpoPCxKtBEN6JmL22ESzxoFnWWipF6jV7JrST3hoV6Y7vNFjCTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoHKbg9pSJPsW7cK9kkpkWMscgyaLef6AHzYnsVd3MPPMk5zoL9RZJk2mNfT6YzBEqiF4jKLnPPPWsD7fmiSZ4P",
  "key1": "3voaHZ8Nm3XWt39AYrx2HLjqaqsNrpLT4HvxCQHEupN6NiWJdaJWDxTjo8mzVDZyaSsvJxT2KZR3dHEZMSXKZ4A7",
  "key2": "3GwzQRbcna9Xq4qyrMhXn88TiAuqn2NzA7bFXnS4EkdaQyfdZ7VwbmM6u9bcgnQDu8Lz2tnakzUjNE1QyqNqSifh",
  "key3": "4ezcqZmVmS9Qy38pyWt4ZQjqKTvSHX3PDRgfWS66TEzybYJSFtGfwfDKBH3VRjXkP4DYiPKYetrQAaUN4dcz779o",
  "key4": "2gJ6AfYP5GnWbgGYUeXhsSTE8pyK84hv8mSnyoS7qcCExEKmsVZmJsz1WE8URM5CxAHpmrKWUrbSMycnhSkxsicG",
  "key5": "ZLCNiWKveqzsSDzVRd179iktuXYWxpfdftA5aX9YMVUmizgoVYtzUTxbmfuNKypxrZzwBytsVVBS95JwofQcDKx",
  "key6": "3RJhEhjsPTEp7zWLAbUuVnHpjerzLhLoFcfWhe2tuFitzX6AUpzCuQiQjoEQ9kPeVERifT9JwfDqhA3UwGNKKg49",
  "key7": "4N6WG5fLstpNJAvVSDvHezshJ8SnSbnDZoLYUZUtr8DgSHWthtm4WshC838kiSExyYKxSNB5ubhDw2T6ndiNuQJw",
  "key8": "3Hvya5TTuNqf6S58N5sHGZhteTqpxJiHtVYDC1wVEYdnLQDxEQvC46upVXerAwrDr5hQEik6mewa8EjPcQkykyR",
  "key9": "5BStM9zJqrs4X4p8cN76ozjB8UiVqfF5ft8qKWQKY97wPf9JMNpUvJAg6SYMwyGxTC7tJHxJTU54VLCQLmAMnUa5",
  "key10": "4ApR7t1zEi6AJBdyYTfkpDgA4Y3573o34JKk1KFVwUsAWJ1biE9yda7vVQvVV9ETB1nWg9ZX23ZYPec9jYKxF3gR",
  "key11": "DfDJSD8N1d1f26DkMPTVgMZ36YffFWHtkVEATYCtedbfs1vd2DnjD3LK9d27h5nxY29Qir4KimhPUDcmKUcrSMF",
  "key12": "2pfK1JSFTqmJh9xoB1u6i9nV5XwaHH26Ygt9KRAPiBWVuXg1zEZs2aLijenaJRikTirFk47Cx4BySCuDnUrKAENi",
  "key13": "5rF4CevxburT9dhHVsJfYWhovvcc7R9Zra4RgeGHHvUkUVkgCjAc9oC8i3dquiCFvVcS8rCxpiCthpBR5h7La3Wq",
  "key14": "5KDAz2qRtJ21crf4YDupgG9T98zTRxdNuhthHcidkHeAcmhRY5HMHAaAcpjKioAbtMfYpKyxJhdcePCzH5ZR2ikr",
  "key15": "2sWxTh9ZoCkUnDPj74WSDiKruUK9fUnHySntDJCTtyyAzAGzpek4uc2Qii9nChrAtoEJHrB1AYbsnwsaK2fMZEqf",
  "key16": "2V949sTa4o3jPBeL8cUXSAzM11ZRKveS8jbnvzob3dMxew4Fb7oMeCXLmNShL8QmF9pZuz2V3GtNGsjRynjWRwMT",
  "key17": "5PW8mbfcCQAr1sTDgE7Rp6sgkWWSh71qDnrDSS6Boi3sbVc6RN9KJEkZcbHNT7oz4KyM4jmB4dVG85G6LsfS4oHF",
  "key18": "49UFUYf21anPMjZxvAQMvtsLV8BCESWj7cvXyeHZQbnkawAptPbr8SNByZjhuhDyZQrqt3EJbATdoY8SiVSDARzj",
  "key19": "2ndDswPyEXU72iNzTxmqJsbJZdoGEVra5e4bBLfD8tWc3ykpfWkXm1xi3PQDkiAykayoSsQmusKbhNMyY8Wj5CFP",
  "key20": "3xwyEyYsetTjBC1FemAbg2Wh2nYtojtLHMB9p3tYqBHkXu8mLMcubg5s9vFChrTjoUh5ywghHcGSLxKBtHZeGapR",
  "key21": "4nuywsicqzLB5dnBxmu36BPSvf5JVYX8t8a9K7RNePPB6GoLeDNCMVzGJpADoYNGxDpkvgsyRTEVAC23X1LUkY9o",
  "key22": "66uw8gDhNhMm5KB5rg9xUB1DzPX96dbah35o9iUnv9B4uDV7wTVVWKNqzdhLJEkPKbYz57yDoXK2geabgHnyPoXF",
  "key23": "4U8EQB5QawkCZVNaijgu8FEGqznr6y1nZ3vcWW6wNVSxjVoRC9xxZydG3wvuHsXFXBpkW8Kvtt6JMcXjz2tMY2Su",
  "key24": "583y3oWC9FPdjY71KSSoV3fG1PJnw49aQEPQZQFhd7UD1fGbpXq3WRGs8n8ZcRgXLJD99Q9cS7p2Zjedxb4rZz4d",
  "key25": "2ToPPi9QZ7qUsrVpdXThdWBC2VtpcPihhbcFBkzKDetSAZZf5PevNz47ycrmwcWBFZo3AhEkBCcGdq3BkZsFGVn9",
  "key26": "36Y9G3aBvKxavmZgeSFDTGUSkEA1yLxtqCuzK49zm6p2UC232u5CtoyvbPRHHmsewCrQEDzsz6NXKRmoBu5PK6ri",
  "key27": "2PaD5GMCdXzH7F98MEE5U6iFFFbz81JqpvmSM52tPkADPYMYJXVMHt8C3WKrHbnBPUPPn8jBC2gVid2VZvPG8dVQ",
  "key28": "1wZ41cJEBH2wJs1KcSvkCf3F56rn61uA65DQE4P4igECTHhtKRxyZA7dEndHhCeSFws2A3QE2R2uvvh4LtR8cHz",
  "key29": "3719P5krNkk9stXw3AtBwu3rp6teK9arZJH2nTbLJDju4KMbXvZh2tXHCfpQDXevtfwPve6ngNwNtJrrbqKVfy8L",
  "key30": "35RspdKVwjXretvrT38GMPjyuztvaHHVUVacjRvjMWGhw7zbTUJ4wrhVeiqCpqXuBuaPoUFBPW3Z641qrbfPoXCE",
  "key31": "2qYTUmuMf3tQyDFQbUigDC6tRguskbkKMRN5rBJYxfvC3tDXCYHWRhWjsg8oBUrSUXPAJedxehC1rc1m7FZbGmd5",
  "key32": "3GC98G19qPrzQC6T5GL7AMpEbWUues1MjKq7kgfSYHs5F3BM7spJ7oMahJsGWGEbq5oPAmYJC3NGKF4sdQm29CE2",
  "key33": "2C1Y9Fs7uakKAv3wx4mBY5USykSrHuKsozTx8XEDuvhrjMWoJrxHTrQ7qdeNdno1N1aCvwrYrV7bGZS8mvFmgoVM",
  "key34": "5RvLuPHYBWuXEV78wZvMdbpd2PeSjsP4H3iA3Zxy3iW4BNWsuUqcD3WdeypVgJB35cw8JZ2hvhSPMjvBY282g91",
  "key35": "4KxMP5hJgZxJRFUKdWUks2gE8kputdVX9YTcp5vd4LKqW1DN6NBt6zwCecESVtceoKXHP5zepC3YRLnutU52XGFN",
  "key36": "RyBmAqMwgrcos1etShfgqoPzD57gTxRnWFXjnBAoz1JdrqWMrBS7UHCPZxbBzDc1mamd8c6D3xQHvHZN6jvXYUt",
  "key37": "2RWqLkx13Z91wfP2nqRbjxvZicFxghvtdT18Wg9L5w7R8CobzJcZ3aMPMAzaezQZ2GFBw1fsi8sL4zihZ6gzFZq",
  "key38": "3HjhX1ixQkze3QdpNJkNyutyiqotCELT338WyZYQoEjg3QSYB9bmjsw9Uab65LEsbS6dDr8WU4og85rQTqV2rMye",
  "key39": "3fAAkoHwxVdACDUAs4xrXR8ZqgkB8MUxqjpm2TUKHN7tQWKrETAjzESZ6fYVK2RvqvV9t2AaM1CVfPK9YZxTqV6m",
  "key40": "oa9PZRaTcZgHtebUEFPHdhpeimiptFsA1aq11TWBYax9o1DYhhEKR3ReMQUDB9i2mAbosEd7WCv4Ek8HAnQGUWg",
  "key41": "4nNXDmaQdfRD6xvsAn9UtDUgR7jixBrSXNpa2ExBRYEVBgHRiLg8f95S12JGQKZQewNkKxtQRsBBWfBDw2GKcdth"
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
