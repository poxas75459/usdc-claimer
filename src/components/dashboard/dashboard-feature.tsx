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
    "2D662V8Hf9CHswB9GKwKhMU8mhSZimXCCX2uyL1TyycQMajnudCFRJJMzJKfo5RWrx8MCKLTGvUioXU35sVG7Wvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2193AzhinFaShbVG1t4B1E6UmkTTqr1MykJkjNNNMhQzVPr96XLCRY6jgiesXoj25agceTTT4fz7uJL96VSo6XZr",
  "key1": "2aEM9ZWRBH1m7cTK3jb1QfsFCrDHKGsBN5MPQ6zSy4CgvkykFnhVdbZbBaieLQ4xj31GNmmccB7tbDSiDt24oND6",
  "key2": "2pFZTkdre2hm5UD36aVxQzoiMKmVZzqaUYmwpwjTZZWozBzWUZTn7vSC8BMmFhKVgk5vfTSmwXz8aGsatZdnUay8",
  "key3": "56uNRR9VZpDD9CXnd2i1migki95hHpTpf88QNd4wzMbfStVrsbRvNQx8huRHdycd6muv79zdzvYGC9X1d6rpbkdi",
  "key4": "3xf5Qr4sFTcNh9b92L41pK7ExfHn5U2YayUDBQLBBoSvQVEttRMhzCpHMbjn2d53aXTEgHbMX9b8MKVePCpjy2Am",
  "key5": "4fGiiyvP4PCzYWZsxt2LbrwC7kaG3wYXnZZSLpcHtbWRYHb2UAmjaFVzcHnGnyVZYtJuhxvpCXx4gFV5TVm7ScK2",
  "key6": "reUVbRxYSN1hXSFn2Lj3cyarciaSTU44kuXEuypANVDjsmHABt3yyQ8ZG4Ri2NLEbXegM7g8ijjMdxTR93pZXDi",
  "key7": "5JFDjrSdNTBdnw3AoDgUfk8W51h9QdPWnPybguHz2ogqzMUHcADFT4b7HqMuKz6fk4yUMma2XLaEqAcQguAHYduq",
  "key8": "5GJDyp1wu82HNDHuYBG6Bg5Z17TUNTucnwwTA7PWGo5ExPvFXKnEPetYFH1qQZG4RPTyepM8r6rTDmjrHqG75uFZ",
  "key9": "mFnwV5wZ18hjvtCRUb8fVsN1UZrA6gR6PnbTtUceg5SLm8q14LRoTGzg5iCS2tLepp9LwBakdNRp6mgHG67xbSK",
  "key10": "4pzu9GjZikprgQcgXNBWbBCJJLNHzoWPMCECf33Dvsd1FHPRDdKbFy7FZ5v8ETprxHKP39iB8BUshfoZ1UGcgEcG",
  "key11": "2sQJS2EoZTHUKmH4mLaSMR3S9PoifTGFTmVqBw5Ajfapy2fdZxM4BMuw72Zq5DcTQDuBGPBEYeJnoFGKy5jKg27n",
  "key12": "tFm54ZP9LSbA48QtceU6Dk5Hn8DY8A47Lrv6ueTznXKSmbdP3xd23aUUrLtCS2bJaR5JiD91Q3Z6NCruSZt42j7",
  "key13": "54hF8zabUUbSD6MBRPS5AUpJcpuQNb82mUdF3AvYUxw8cnBK4uRMFZ48opW6HhNofr3ZiaEXFtnYBnhZp2HVN9Vt",
  "key14": "5jiA6Kwy68a6JJFLWXaQH41At7qsW2QRFNsdaXwG9UJ96TeXCaQjFM1M1w9YuNDshsK1jMmjYRtK6k9f4i3s5KeB",
  "key15": "3ZvT2rSgKwGkRmTTzMjqNaqmxYMyRyFwcaQdD699omDxFnBRbNZumb2JYA9X4WKnQmCZWobvECChr656WrmXUje8",
  "key16": "2Y34hYsoSL5rbLUuLKgmFaX69La1J4coymmMUqhu6LzUaXLdrPYDQjUDjXDsYM1AR5ZFnnii5cGtQ2GBPTNsEYvA",
  "key17": "h4M9soB7gc2A4nbt7ihgEvX7W81U33Q2uQ4A7dQMjHkaRx211coWtVoG9NCrcZ94t7iciANxtcRmMesc3FfL4jp",
  "key18": "XemmQZ3E1qMFj4YzBrPJVjMzB5694XFQCdCxqPgvDYDWLZthBWUjA4BBYz4bNsZ3hec9UUo2PkzA5R1ZvGaBuZo",
  "key19": "2arXi4hr1kgZiGQ4Bs2tvKt6CfYGRF2xPLbc1ReSYmcGDE1zxTwbx6PR4Xx1UiapNb1KyDXinDHPTseDxoP87fF5",
  "key20": "5BBStS4yRN4NTQQzv9tLz5QKHCeiJhoXJm4cC3NJKEGxzqRW9xWdffcr6mFMHrZccae3NxTeLbRgammncti3thSD",
  "key21": "3Vihq1UwAFmTGZ2o33ghRFaef1E2mqWkgxosBtBJcTvYNzNP7Eg6bRcAoCHSky1CnZQJNbgm8pCcHTRsKE6S6n6M",
  "key22": "3tmMgG4KzAFhU7WdmpRrMp76Y3WbFQV9XuawDWfnVkoAu1hajBfUTpW4xRhWsasZig6Sqhd2MDybXerPMVGimvnv",
  "key23": "2Cjz9EcQo48fsVMhqM6r2k3Pa4gqEGMSnyEqjrDPopeLZ3cQyPJZWVAtLTtTJpCTjLwHzPsDq2SoAP2d8sWQ25WV",
  "key24": "3PV3sDD1zLDn8CFb9Pp2RwuKCXmnhZ51gu7d2DoQKooXbHxptaj7ReUhoo1AbtTChs1zSH3aUS5P6DNJ8jwPrN5H",
  "key25": "4NKFjYxsmp4ZHb2XFfz4TbTurTeUUGFWH2kAAvaxuqRHz1jCE3g1GWwUqe2wjyJ2NPT98CMoB2e89PdBjKVHW6ci",
  "key26": "5X69HGN8RBy5r93X4U3K9BLw9x71Vq9k8mRHi8ZcdtvCvgBg9W627kyoTsfKwMhXSALuykKzy71iqpC3n6SwUsXV",
  "key27": "3md9jBP9eN5G5B26LaXRn7pAE2iDEcKk12aVdCWXZcoECJV2h5GfLVT2RKbR7of67HSBgTCjc4FGht34o6aAw926"
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
