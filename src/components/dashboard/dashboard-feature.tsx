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
    "2zJV8AZt2y2YXDxQjnWaPsCDPTiQHMkvtYUG48qNaCH3KPtUCyaTatZXD2qEfWHvwiYHpYUm4phrtHe5BWNqV113"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8sHCeB3YJKmWw9w9WaDyWEHJtJ9vEx4zdrQ9ZZnEi9qnwH4udr616i6iLz52HKVMR2fsDhEYvkrNyxCLPCkagJ",
  "key1": "2mHK9mPPx5kQGWLWXvV2Y9yv9HLuxvxuqSQwZVYQKwhuC9Xw3NcHJ4eD1KtxjD1BJPCcHo6mtxgjqYKfjP1RHwD1",
  "key2": "49jECkHv1XgHCxN4Kfgr1UJ5bStFmuBQ7gnWdMdoifWwwBv9zxhKEABWXWmo9qfWeyr8uK6aqj4RtBsmXrZsfnam",
  "key3": "3E1Q7RsPi81UYBbX8EPx2jnWCruanKhrNFqMLA4L4sMtHbFYmaFcN3ExVSFSFNjmUeSP2w77Q7LwZKFW4YvA8A9i",
  "key4": "5P43pDGgGRHGiBCKa8CrpLi6Vfnp3TzFeKVUBh3XHn6rfTyJT15wuMg29tb9oMkZ58NkNPmae9h3wQmwvM4tEnb",
  "key5": "3hLDPDrxHCAc2mzaoBitQL6mNBainbdvxx7v7iP9txzyfVxyA8XNsWxjUq6SY85gSpYfiMeuZp33QKsVaKUtUC5J",
  "key6": "2ipcadYFmc8g59BTZszpapaCW88tGnGupDbtrGZHe6YpPZGxRLevBz8edANJtvdnavjPmgRP49hiD76NBBn96mQc",
  "key7": "5D22dv7mq8vHRM779QWcAp4pHjVD73LPi9pfWLxxPcwaAkCh3ZvnwMDB9PdPG227Rko7HS8TiLzio8SYpTZcfFaK",
  "key8": "yzsr1s6zdewPpKpmESFypiucJZi34WfzGQmhTmhabzcEJsEiQX8MwikFnACj2YX2o9Yeu52be293Ja8fYbYYVD2",
  "key9": "5ArCFTUEgCYhYcAkrv5RngPFJ4PqdUhrcMYRcNbNQmLaRT9XpUuyngMY1ArwZ2ju8XB7C4WGZKSwgpuVCei88pAD",
  "key10": "4jWNbxGRwCaTNukfCKEpTm139ykeY1fSjd9UT56LAnmKbtXPfMS9FFNRixoSQxwMqhdZ4rya7dFFAW5V9ynJ4rPh",
  "key11": "5ZTYjnosG38rcGCSaeYhuJNE1kt8N6MaH2ePmonXXikXDnoQe12eMDNCoMW6FRTiyVgp39J4k2rkMv7Zq5J4wJZX",
  "key12": "5QwZLzcyoJrrbX6wuBQFv7yH62YtnE58hN441uTS6AdxMPrxYSVjJxW8r5Rv4LgB6kLnqfgbe6nq9xdoHvwG5mPu",
  "key13": "4B8NWBkPGBSTgus9Msp64FggKxRCYF1q5R9iyRSq3uYkedFPWVsw3om6FFMH684wcEb1jw8teRr3aice21sR3Lmc",
  "key14": "5PotMSMQkfwe66FfsAxJY2Cx3yqCVUyW7yAJsEAh62nEwcK8rmtHetUqUL2Xkr6fbPnwskGtNdymgd9pvxePKC7P",
  "key15": "a5CdA3n2uDC77wd6LQoERYK2WobFqXRswmHNcXygbSXGVm7krZQJx2pcQ9RifFAFBY4XXwk7H7BQZ1EbcbR8gwq",
  "key16": "28ksodhohHSvfNUvTvEnxJPmAFfPtTxGd1npAJkhR2n5pG1RGh2yKhXuemcRqTBNzPiUQhfFEs6p9cqTvZeHm3E6",
  "key17": "2FZDNPR5XF938gm9xpQAhd8ZG58MEDz854k419N1ooUrzWrpVEzNov1U5L27Yys49NYfmBH8QW3YsZxk6ZfdC2FW",
  "key18": "1TnQcXLfQiSKcfsgMbXBjjDVknqtDkdu88R5wvKWjdxibzrDXGDagrkk33dipJmYiD1N8LDfksfSkEfXVncsZFt",
  "key19": "2VXhk74MUm8471hgzwexuBm1qZub966rV4kehqfyhzMw36Yzx9PwcQdCgMQoZss2tDUAeqx95CnMrSeWRF1z2d3Q",
  "key20": "2iDf1ZvL4qZmmnXKp5Pzdv1USBt1VRbXDQQCbgRs3cZPUoak7mcF5ySR6t2oncNbSZjjN5TJEDUzAxLDv1Sdk5VE",
  "key21": "2H5Bd3tz3KVkRR8XWabCLpi8tNmtrFbTDp6aSzZd16EqPHXZFvZo1SvRuk6ag1Ae8NWLE6uUuKmSxDx5Xwv2KhUm",
  "key22": "4exq8gefvb8jyPxkuxVg1c6rBeVtJYXiASo8iriXxjxkG33bjhXcXWPeQtC78E1ff3TCbKEimUz2kz6u1eF6x6oT",
  "key23": "62mzsXWv5QNr4mtukbb9f5HfXgb6ZYS3foQuyNq8Tmg9h7xeeTyg1FsDCNHPW8YtzbxeDJDTFL9qAeqqfRAByU92",
  "key24": "2DReHmCVRVCmM6pjJDF8wuHxgmT4ij2Ep6rpZpbgg4Dc5jRwct67TXgMx8yurd4k3uSNVP6jcT8LgqWqt5gyC4n",
  "key25": "2rnEprgepymD5vo44DYrh3rU3XtudbRcP7aZp4e6nnME8VJfWczuM4LXAGAryscWBEfpGrFkw8CuizFh75GyBDvQ",
  "key26": "4pksdusAbRqoTVy69nQsi2V4VL7tPuA8uAEVFP7HkJtESxCkzS4jcobJr2mA7wNUJfGcM1YFnVjexNG2MUYgVyff",
  "key27": "5cK2QBpVCqugS5ae8inTrkP6mNchW17wYF8mGysaK6MmvUA1B5Gcto5j5WeEXDCEE4PxcDsopmdk3orrzqRD5wy",
  "key28": "2vUbLgZqwEDJfBfxYNXkGnsoiLhmVxcUUZTzgba8wEVmNmRTNnn1SCAijAWk8BwXY1ZKPgn1qmw2Tk2PT5MC7b7s",
  "key29": "2zGjmf1TFfHDzu34q3uNgwWjKBqeEN2aAygGG6TofQMw3bsxu1s47M2Vw8MWW7kNuF9m9kvYZAxuJ2W6zeL1ffrV",
  "key30": "3A15tt4FgfMVpFN3oWDDcXpTbGAGz52svQ8ogn8CoAFW4j84XRTY2qJXVPH4tVVHdC6JbxGTYib3Qt18WQrMgnZa",
  "key31": "5XMwxErxzr98rUNep2BQfZTyHEtfo8DcH2FTtwmova6DydLSDoXfibozm7Eq7bM53MKwYjDAD1CaAN53R5euVHDP",
  "key32": "W7ZcxiDnzJaWrdw233X8q4PeShr2QmrtrNqqzy5XKaABFndbnGxvYC34HSAVdrCrAn58JMya6wfhHDew94fM7Ei",
  "key33": "4m4p8eMxAs21fTCGnRLSYCGG2drh5Xazv4n1LTNhihU6ZWKE9uzSRyWAMRuWnAbenV3TuJJw43kFHAZNwLPvGdHG",
  "key34": "5gCyv6GDYRf9Gm6R16AJNmY9pugocUACpXZMwhDPKUPruYUVmdAxHU4xwqetGAES2mzKErJZ3dHFG1XZ8xqZuaSN"
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
