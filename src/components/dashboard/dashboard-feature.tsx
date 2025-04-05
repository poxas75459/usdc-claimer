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
    "56yjKrhNh8Xz6ysXMag7rJYh3hcWu6eEBuvRQWyf73TcaL1bjJMPP6NCrCYrwj5gTYiDJJY4GSJW73Sau3yfJmQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FtQg5pVgf4xRAKoVSBobLTuC1BsqKtVdcviikeRm1UQu3b7zL39QtMiy7u3rC5dk8F4Go6748SmRvZ1386767SF",
  "key1": "4ds1uBy1SWyvmi8YAd9MFMPaQFW3pPFg3tjJ8DxhR3US11syFzDhGRhfxGXj6PTxX9894FdaQXo7CadpkdyTTaWK",
  "key2": "44CdSMMTGhknzVUJDXmCJSgsWc57gvFoD3uDoaZcKfzi8waPSr22RQyoPzSCyFg4e39MS6XQ1idnCX67MTaExmYo",
  "key3": "5aUKRboMVRMD6RdzuLnSEjJ72kq6R4RiBVEExi26XiXGj9JxxENCpHRzpvnE36RLL12s1SriT2CdHtypBZW1CSgw",
  "key4": "4nXPFgSCs5oBsedeR5Bopp9c1QmYEJFj4AYGeufPDywFSoyKYWnArc5tJgobitaZKZCvUCZjn4nfwgpvCuq9WFbE",
  "key5": "xKZ2QY73tsVHuoHnmDD8rwGMBBBf1wLhyzXqWj63oXNjEUeenVjjeCx4e3dGEhrVfjEyfp5oNbP9dxX78GF5tgE",
  "key6": "2c31v52wWFkmM6Tg9jLT6m5ae4SLktvvEQLowYVGKdYhiupWrPuEph1kJZsRRajrMg8bkZMRTk7DMY5vpcmkUXTE",
  "key7": "2FKatRjWnxDFjNkHJvmUJvcHLCZaqw8ccUdmpWFuxwaY9cujw1MRWp86HtMsbXaC3vZU9pAr3ntQkPTXJSVc4uAg",
  "key8": "5QASRCjQqanRCgtVehWHQtSBPKJYyXNjiM9NxMaz5dQuGVZUEWkksPJa7wrKKBHJAPAz21SSDpV9ZHM5WeGtcfsj",
  "key9": "4s63k8jMGxtwreBmHusPGNkEjtDRxm3ESMC8MzgCV9NLJ6Ep5sPHfxAapiAd54yg9yR2cqnq4TTEpv34R9HTZTHu",
  "key10": "4NbBm2YabCXjGnkSxW3tmmJWD8nzioNecBAdoRw7dNQLLb3tXhS1xwHef52Q5x4S95D6HPUAXTSrASZooR3DfcN",
  "key11": "533RtxiBmdvGs2ySgEnq3uwzA2LXnFDALMkUoHQPBGz1yQRvX2vyTDtbyn45yEBMUmJz1w8dcvbxCinXt4mv8Cc",
  "key12": "56GtQEhzLymoh1wWq8DsZUK7UcAPb51zDW4rSqH6jrP2bn3VHVrxgXtHkP4RzGPtEqPcdQuATYnsgoY1mZniGCAm",
  "key13": "5uMwAZ4mknidumxwfNou13X72QV6DV1zp8RSsRp3FX3HQ3TUWCg6N3EXqS71mGAEn8bQr8k6c66okPynxJfB8rYs",
  "key14": "L98yYhHSsVMJByYqswz5Hq7kPVZQ28Jrhtz36YnXX5sqEE1bsJ2YBwpZhQE7xJ2KoATcdeLVZKxmEqyX6DfBjWZ",
  "key15": "3pKLt5nVwCZZHPpY9DuArvVEDtY9aXq114AeXVpfqpv4JwEoW7iLXAQvZQFXgaHaxFpccozkKAB2wWdqvM6aUjm5",
  "key16": "5QdNDfLtrF4bE5WzzQVfU75yh6HUZZ9mcges12rVVjrPnDTAag7F5zbTtZmMHGeN3LyTSuYjSzBtfLoChiPpEZ7B",
  "key17": "5sV4pXcyZ4pdo9zhghsKj3CqxhqSk9pWZev6yh8fsXEWvqJrYzraLrKNGkoTrH6HEkW7XmyCfXGpaKQnRgYohgS2",
  "key18": "4v43keFuJrpnUkpFXRoYcQWG5ZRmqsBhArY9usiTDit6KHbWoeufRbxak7zwDKZBEnPZgF2xZZd6tmhDk1kcQBxu",
  "key19": "bAGcj285sx3pasxLToLsBvP7gG6iQP7hU7qkDbLH4gUuszgxfuREfhwuc5UKzcMmsaczhTHrGJ7HMBxPkTLNirC",
  "key20": "3w4CU45og8eYVGVwGdexAaQWuZQF3M8a5EF2VmDYRx9CiVrxr1yEod9hhReRxTF9Y8hfTubdU61cXpatRHvGWz3B",
  "key21": "HCFSckzrTgyfF1jH91uR9dfyqiT9HdioSh7VAwhhfHgMq9vQZbYe15GyJU73oCqWz2FyxFmb4jrGFqjzrXMsaJk",
  "key22": "2CLJDBMcYRdjX69UPQRgyZZQcWr1KjsdpJ7bARm1hJedQQwoErmNKsmJGMpSgVzNtttkM3BTKPyVtWFfm4Q7XsWd",
  "key23": "4A8iLUqGCidGzJNs24J3deBgByRSEmNHEr3qii4ULvW1MVfzzsD6ETq3K3GLLkS3cx3gC7jS1kwCCADX8nE34ckd",
  "key24": "3iarGJoaZZg2eFQ1uPnEHe7smaJPYMTxzMMH5YNjEyCuBMWqXbb3SGPNmA8iULCrx1eX7is8B5aqvPXc6xut5ZFi",
  "key25": "3mHEtiNLaVVu5fseEXZrFPTt1MDmKTefcNrkQ4o2TMgEFyZLSh7zeqJ3U7tAinwXXp9zwwZ4vRskDoz6Xzb3BNM4",
  "key26": "3Ktfr9gdJBQ7e8qMcaYU19Mz7n7NTiWzRscz2bNR5UqDiBQPiFH45pfUeFSTRM4c9giakgTTNZZRGACLF1dxtojG",
  "key27": "NswRSqcwiCmA2TrUjWnma3rtMEU3yXgkW73qyzM5WQig6X6DNjzGvKzAEhqe2PXFjSoZYWAgnU9MByLWe9mRAnh",
  "key28": "4UJv7TPqY6M1at5spYaSKW8xEpwYfzWXptmSPwpQyiwtwmuRbG4jiECDGUwVjNFjJZsAgu8HZc5EZgsPe1oi9HVw",
  "key29": "5NgKaqhCLF4HZKxFaHRxEfQpUqr4nMDRcykQ5F8MMKJemrxqjtPuinnV13WSW2DrqRx6wUGMzLcJqvdWBpQDVXCf",
  "key30": "66oPxAKmyii7BW1LqWVFGp4ZpcK1rJqF7uzaTmeSi6iZEFTAkeRAMXtPuE2G98r7TWywBqtHagQeLEGHPHLVAo1h",
  "key31": "33omZQEi88Qd9NqoB9ZyVvDcvCJ5v6ZiKX4pBCeMqAXW9KRXGDJJMA265ivHWLxUJ7qRRTBzKjYzYg49rZktmQnu",
  "key32": "3gibzMiDxMw31mjdXaP7c2a72ChcHJkmANU94cLcjdGhBE2Wh13BGgrPjarSWw6hGkGQoovjVwLcyT2ARGCwdJgq",
  "key33": "2qPYkBvs9XNFHvqe45r7WgFEtcWrFZXiLKDdfh2XkjkyAg4Pnn3ARqsnrAXTPxwtLV9vnRxTymXtmhQjisdDRbUR",
  "key34": "3igwNrUwHEbYHqDSSXjhg7FJtvURm7ajPyEDnB7pSUgM3ZHRTvwMxLV1dqhcg4jUKYWC11eRsFy1TKAsmg37AgdD",
  "key35": "3bvwbb5J2WmfLA2FgVWtdrqTfsdDdEqMqykRcKvMpdRpYAFBbiDzAkDp7uy9g6W6gpztVwrv4TbVvPzwPWu29qdU",
  "key36": "5VHor4kYMKE3hS5h6hTqczTZFxd2TsRQzZE4axwTBg8PLXowCAfQ8DFvU3scHMax6NCM4Z8LdyBS3HouE47pydWT",
  "key37": "2SFfEgRx17USsLoZkdSTarv9RYUgXZ5H1PT1gmocuVS73n7qJR3cdkJxBLYBmqdj4gsu4Ta9GkBDkuDudJjDDp9P",
  "key38": "2N7LJXdYDSZPAktgnrCfnDCKWj5mBoWMYHpFhVnCdTeuNNWADs6w1s7FiwbdYiMMawos7nNzVKGTeyPsWurcZ1gM"
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
