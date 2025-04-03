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
    "crx3A4qJYKeW2aepi2R1NJ2MMo2qzyDY583LkCiUxz4GUXR5tyazeNfjmJwiha618xtcpkKGmXYx8MvhCTqCBTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zmLK8McBWDpzv8Jjn6D8W9xyPz1Z1YdUeBoidfcB67Cy2z6jriJNZxecBmxBKRce3NAGQjAtNBQazaFSdinakZe",
  "key1": "36DyBtJg5vHJgQ7Jt3eTHhjusjybboi6YBWgsR4FWEqu1AAAPvzo5KsyGNf7Rkr4rsYw8i7NWxSZ44p4px4SasoQ",
  "key2": "n3r373nFPiawkDRoKyuF56bUbhsUyMpCUiJ8Ma4sePaWWpec1EoSHRvaLUJSusE1AyaFnHPG4dRhp3yDQ4hhdG9",
  "key3": "2Eyr989DCgZ5mC2WkQ5w6DDsJsmWcagtFtcSngDgwyAZp5SBSQr7QY5ffbf8niZeW7WT2MKt9eCEUuCSX5PcUx5C",
  "key4": "3gi7PHChXR3UCk4XLnnFxL8TRqNnMuAwYZSNrCXbHX9xygZXWJzzNStYUwUqc9TdY1S8wG3ZeidpVuFZdboXKHVP",
  "key5": "4mCd1WuyMr9NvJCLQAvSFaC9H72QusQEjh9nWrRu9xHwYQzKnrd3Ptcpo13B8z7X5MDx8eMj3S8qsWECy8T2Hq33",
  "key6": "2cPiwGCQrmXnc3YXsvHyZqYcc9a3Qocvot73oq2ddppDKdoD36zVvX8ScHoXeMmnuqBnLiqk9GRF84j4XizLLuaH",
  "key7": "wpbykKgJwJ53eX2Ug67gMDRFyzkie4mQyK8TpP6YztLLyky45mTKxUMLX2ejTtHtcr1Mc7ABoqXE5DzVHp89cUW",
  "key8": "4DZTrtNXe6ToCrzSNhuiC5zgYMk7vydHrR541JQN3QZVvxJTwT6nU2kMoDcnWpG5FfVq8EUHa7DPaB2ADJqg5W2z",
  "key9": "3SstonV3Dnom1XH1z18YYAg2PUhUTUiTppQNS2RxVU9KYScHFJP5xsLidvEZNFBrhefqbdZY5VHqHYCGD6SnJRVq",
  "key10": "3nsA67XFQ3itKu5WncHFefkFU5QM4MrniUnAJ4uHDJHoKTuyBnvLXJY9sHXsqFU1guAs8MkJhADC8HsN9AGKRAGa",
  "key11": "SHZhWnBed4psG6aV2VLKg7LBuR5ypa3ad4VWJ4mELCAFPtpgJ5MEfAkEMCSXNwvRmYuLRNpDutu2ST6ZVBgA4MX",
  "key12": "3dzVnJQYcdCyh2iPrboUMjqcn81Bq4BL9LerR6N83t4MHRuxM4M38MESWNqn9eYhGLddp4HUbJ7GNguLwEag4YiR",
  "key13": "4MWRGnyPNVSyCR24Dy28K3LF3ZX8zcJeoQuKbeRJ8fZ1DxnRLsmWJHcubku21YNSjGKYRrVskWUJ86eP7T4GF5ch",
  "key14": "2iqqXxptg4yN5RG1fsfB6EwAxUDwJ6F7mJXfbo75vEBYFWdF2P97UwGvrmq3p9QcyutWBUWi9y262sj3chmonant",
  "key15": "5PAdUn1VyqRRQPe64nVw5a4T11xTSBtdT1t8pPMirRrJHaygbxP4CAJk74urR6wELTG1YKhYfZGCGqBkDua1QYFb",
  "key16": "5rXnZcaSan8PePhkiznTDixMKoxkrabpGYwgoZ32VfWDuWc9YAiPYj4b7QDPQQr2asn75iXfp6vFcG2ni6DersJv",
  "key17": "RaUn4fXRU3ocAYY1nUN4gguKtkYx4292sSM94ukNkECan2TC3kQhLfiJSjG7ArcTvg37sSEoEi5mXjjBrD66Jve",
  "key18": "9TYtKGAoaHjcgQ4x8QGze8YaJb49m41QKrYgL7rVdDbdE47kAScKy9tN1PtCVr4vcZVKjMsVJMeT8C2ZsYGxUW6",
  "key19": "33x9XEdiw7xrQzLPvDUcHWiLWCffavSaNm7mVqKwE39rbNohPM3V7ztF99z11JX5iNfDx8uPGSiXy87Tt6XYvJTe",
  "key20": "3hUbYPMa5f6hoMuVNidfuCm2UU9zmPm9JaAM1zYoZLwfHoYXsAJnGG4HZxMYpyBYxPvArvgZEcggQSA76QWeMgjs",
  "key21": "4bNwzyYrY3LZGBkBzn8cEJoi8PmQvzuwzWVEUZcDeZ3LY8yfL67QM4vaCW6JsBSS1aNe3NnmHStAYMRHdBsz7mA",
  "key22": "5coYqRVB2dhnZkGF99hSNR18JvWTa9hT4szEjMiTWsSffLh5ngjQgXheMqqbpDzHaRm7EoEonHwvpnr9jcrARL8h",
  "key23": "5scpBoC2nJ789ggzDgCGHdAAoiTMwUwnrhYTau8QhuTJp42vXm1kbybFMXq5oguyX11vk749f9WBis19qWJhh5hu",
  "key24": "37hAhnbcYQH1xkqQN5LKQ8sYnLKePQLTbhuVJEqUnWUnweHoPxZNBNSxcYseFs7agszKq1Yirvo28S2tnK5ZQTfA",
  "key25": "4Xa3xnUefDDspw7UfBRJc5xrt9CjNbH4cqeGgMqKV2hFdjc3q3gBHgGaZsKYLEkUuW6hYnnmnwjv4rTqHYjzNv9b",
  "key26": "5SyFZDqdQVEnpeMVy8xywYLbQyvx9TV6atpXeZh4jXenuVjJ4Mvns56i9qTLd7SXu7FUan7mxMJrYuqvFb6Npdps"
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
