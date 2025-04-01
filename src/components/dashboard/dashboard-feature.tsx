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
    "52hpP6JQtrd1KyVNtYPfdAAA1PWaHWTDrEma2RsW7dHgs6EapA3DiSAEKTbaHeaP2cZ7VETo5YAYtksDgWrV9QYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f5fhh2ZkSAw9YrpxmhZx5TFYaDd3ScLfwUP99TSMFoQSPRsy6FNTRPpAkSpqRtp8uN7NPA6JDw39DLXkfp28gni",
  "key1": "fS5wxTLBW9T3xWTYdyLf8t8z5SqbHbg5KhwhRcBNDPzyjpuFJx2gtxEhD8UBmztKDHdNeDJYtqxTnF1TwjGpNtP",
  "key2": "5yP2mAkAsD8gaRLpUunqDj4raiYxcvenxtyVGrr6yGBgcDcyiQCYehCCh4YC7SWhM7VVYCoV7HeUEDW7xQzirk8m",
  "key3": "3Z4DncjY3RNV57L8ZMNVS9nHudQTYmjaYU9LoE1SVVb6H3dzpYrPGt5mVkBAvCVdJBVf4dEZVePPtw9iAT4TFi7z",
  "key4": "2ykbEr2KhqVU6PxF5n1HiWHaGqUWfU7a1tGeRY879P74EjXNtHQAtQRp2ZyyQJAzChqUFmEpG5AmkmeqNraaktV8",
  "key5": "4zxgy46xZarzkfREKBD3WkoGwaNLkTx4j2mA8KELT89zFJPZsAGCR7K9UXY33ugvq8kRmwnghpPtr3KnXafJoTCz",
  "key6": "67rY6BqyzjwesMYAcgZRs1W44jseDhNVFtkN77wiaXdCYsUaQkUdXmBHDc8DbUwByc5U7F6n1qBynmrU46hUGMBs",
  "key7": "2L98pPAhhpRVHmuFnuRPcAz15fPx89y3unnuVHwR4HbbYgifaubPi8nRWFXPB9XAdTSL7CMfNarCbzv2HTnXqipK",
  "key8": "4LPynfyroYMUbs7LMRsTDhctGdPiVrwLLiUjQ3aTp91cTRKvq5yJJA46PEu1bknXBgXJBEj7V6LJiQsfZdNDDMQ9",
  "key9": "xGx7dtQbqg3pzLC8ZEFHdrnf1hRuuMQ2pJSuCjFW7oJ1GSBNNw5eBswFharotDWsMVyKMp2oQmatE31DLEjcE19",
  "key10": "4idd7TADVHUWqZc8Quu8PiqWPv1BL3GMWiePqFsAeAKdgS7ZSbpbubKrA45DNWpUq3P8be1UjnV2AD5H5ujpVoAi",
  "key11": "4y2cCCY7RKoKCjmDY1sniES3uLpRDivYjq4d3M2C7Gmvg3Ur1281dBSNBQ21iUw9X8rVYswU9H21XaDp7U3mvr96",
  "key12": "41zeSru1rP3jnG7Mxof2LMfgURBF393xTWeFXFLCz2ESFGB9YJU2YGXJkg3xtQvSBfK89Vhj628gAZaQfDtxS3nN",
  "key13": "2avFi5ZUSEVkBy9FjYJjf4SXKbb9UnErKEbR9kos3KN9gjzymTE779tjXMjbhfUQ1dTRm1RC75iAAJcvMskgxUrP",
  "key14": "2iwQMQR6Qi2Hihx2VXa5MrxS8yi3NGqS9mg3zP6W43ofPZfHrbAVErGCwniRNnGH56G2cXP57sQCcFx9diZNe4L2",
  "key15": "5NcDz2eRJVjQckrgtmGsg5Ez3tBSUAVhRpwWtDV5z1xEAd79mHupfbDgUbQHh5F8Z5fAKXV7UbxApYFyV8gZHs5s",
  "key16": "2LsFLyB6GaXn2wZ5Hq9PwHCM85WzikvHo4TE8Rki63PGvxex7ftrcZEJQ4oqxvTUgyjfhbFbedEy2otbznUHmiYq",
  "key17": "4rXfahbUyhpz83M4pP1q5Q5ucGm4xt2UPeiDmkE5CK1ADiZKkKn5cAEkkcynwLou2Pa3MMfo9pj31tH1tDekht7D",
  "key18": "2syZxcZtZkt4ouZvS5NiXNTnizhZrqyQpWFN8PADEJAzQsVNFLRD5YBffQrsh2SNWnVDKPoQhpFehC3SdXgkhZbg",
  "key19": "B9FfWE11votHh8pVzuANjfkm3yAjQTAP2nLmEym3GkJqpRKGcqvXuRCV9UL9ssD1M59DofWuG9Yp4pkQvvQd1ii",
  "key20": "3DZE4WgC1Z4bXciTAjzgaMfz4a9eS1fuj55gDaQ57pYezFBNdQjXdg4LPgHE3uW65pbmSwHPprprdjxE1oRR4KFg",
  "key21": "5xwJuhvZ291g6CzAessuP29GMQYsmdEWoKFEATver25EoAUYeBQ2LiiSiiVftbVqrXeTbmHG9VZumKMnHMGUKJ1W",
  "key22": "5Cp2GJLwSsHTYmtFPp78UVxhrgRVEroFpN61VECPngK1WkEoKJRUDfXzEiFuZKGf2SN3ftmijy6Qjagh44cgfNSu",
  "key23": "5kCsz7ga9WCEAzwyRwgvDTY9ngmgnEWejYKrXtKfYA1kEoei4zves5uDw9itvw1TpxrC8qcqdwAEDqAu4CrgxZ1r",
  "key24": "VSRxdD64rJYBYNc52g8p55VGdxs6qMUd4565q6hgKgeNZ52ob6BXDihnLyaG1brCNpa9o9iqLo1P5rbNE1KtxxB",
  "key25": "4yfNF7ULwjb9zZd3ffJD8ckDWyVxPWen7d8C7GjRG9ZxgmdNJWvHZhXsAV8TQDvwG9YUVBXjMRAthbPhZY17GUa",
  "key26": "46QB2Fppa5spux98Bu2mygknJuBVSP6NjRfokS3XXU82tqRDa43tnLJKZdhTqjCDnDFDdMw2mPRT84Y7cLqbpwQc"
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
