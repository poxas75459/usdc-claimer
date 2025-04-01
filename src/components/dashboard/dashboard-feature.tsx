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
    "4fMeoC6VNY8Vs44YBSQL4zr6RmKPZFiUFMK67BDd9jHqT1a15y4QMyFcgH7UhQ7U81HWvBvj4pUrZXpTg3peZUkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QLCAL2f2YYtohoEwqKVo8nghKKrXnth2gmak7Q4kwerYonCdHxrGJVXBacodDYzGc4mzQJgxxX8YF4FTyeHLBh8",
  "key1": "piNFqdc6Rj3VeZ65AVyihU68StVhkPXNaswP5rrFArxpGx79GRan2bhr1mnQigYTZL8Bsk3bqfGQMVzjs1nhGvG",
  "key2": "2sPostxbRTzRw5zmhx42HD5o64WcrSxzpc3nb9g7an2WFCbgxAi6s1kUbpgjKSdVSwS6GpWujJx9DzPFqFehxYCK",
  "key3": "5C5GJbKhxPoUesJwhSD384cKTZP1HMv1rE6VBKqc3VnwQ5mZGu4193P1v6riXSV1AyWUbbuVovxxLeyVWErRbtL9",
  "key4": "4MyVXdYZqUMrd6KzMH3zuqLjuyEE3MDMRc1u4rtmy3Vr4qPJq2y1U8ivsGkXmKdBaiMp2zxobUDrzNnyRauUgnVG",
  "key5": "3xE5XwaAMNVZvRGBHJEBsutN1mL2un1ynKJPydG3FJoe2ShpQAG297YDrZC2wAkXjVUdZvhRUMY6S3zkBjPNNu3z",
  "key6": "5acpTxrs9YxMK5rzheDNP6zAGDVxoxfG13wo1z6Zkk8Nvg2j5oRA5ceVffX4aCHaQcNaVUavLCqEbt5LdjHbefqt",
  "key7": "62eNs4GNE8ALEbsAFo58vtbzGUwLA8MuX3H3gp8dMCcjLKK81BErrYkBdWCfiyjb19VsHtyvEN478PuoS1BCKxvo",
  "key8": "wv2i19muNEHYwGBywNZoAABeUnaWEYUdWU1p86eXdgQRooYXcKdMrVyCL8hgs6r9nCcv3pzs67YSBKzgvg88g11",
  "key9": "3YiWPmorwoR1thtdgyJo6V2TJnahm683QQSFnW4oGLqwvVxWXJivYzXY4d2QbwikRqGCr7KKaTYuKK2QQHJHeqsi",
  "key10": "2eMydJvPWJVKSbwoMcPp9MLvfYThuYLQDQSbCNcNUoJZ8HxgQJmd4X9rnfibzNLGWYPHu81SGi7B4gfbpjb4DJt3",
  "key11": "me1sBkeqfT8mHERsED7kTp9AgcrZv438TnF6h7qHMibJ3mpp9yZmBb3vWx9yW7FZrmKpQaAGwwPcdTa5QVLDpiE",
  "key12": "5LabUdPyUkreAQLykT95eRULYaXR9V4hTcybht3SmVKVY39Gvb4GYvmpqu4PmouTH3AhcpfipiKiTVeVW7qWRWLi",
  "key13": "373dREZkGdKAjCajLrJbLxBPD7JoD6geEDauhWMWseaTuwVK6FvxZVoyepAgTVr21nG3sP7iyLjP5gmEJmzWSEz",
  "key14": "4Kyw4NVqca9FbaJA1V3La2jrFNBAjs9T59g3Mfb4yMSnHKtcanMNmYDTcJs7ZtDL6P1zJCyQMN5etQna4djLyTi3",
  "key15": "2m3RoWU4vLh9ka9pzMPG5FM81GjxkpT8a7DTopqwC4CKpRLdvePJ8cACMR2yZuQM5X8UMRZ8j7n7CBBbqk3NzV7J",
  "key16": "5zziEfUQ8HvKZdn7Z9tG23r46VCG24Wy3dZ2fsNWHDnSWT8G9SCUXxAs3n865MqAEZkmJXD4E5wunQQXW9SdFWbJ",
  "key17": "66ug1tGHd4pFu28YXAc8o9k2Wt4vUpDAFu5QSCi9YKrygb6ZVUX4YcciKgAGiz7jDbSCVLTUsfK28n5TnN1UwH9w",
  "key18": "2aj5mfEaEZFdyHXENbtGVCPjkCiDTzwMyLRuBW2QUW8CBywSZLF9GEDDhZYqkLG7Eza39CFaMS8Q3Ys3mvPeiFX",
  "key19": "2GqQo5sSNraAip8GsQ1zvv8hsAR7tBSRrTiwrb8sc1VeEfcQdo6TruoxuBkKfQvKfYUfUZKRHnSBsAKbTScs6hhL",
  "key20": "47uWz5PZ31CYbtcaGaonJLHUBPySt3ypYqSG2RbxsWhFMiqA3jFB6Ke9Vj1TFmDMDNMBVZx3FtfmwdVm8bmpchdy",
  "key21": "3J2muSo7soxqzKNfiqmJv6CjD8HxY4bZzdSwxLdBNNnnNfqDRzLJf3ciyMKYELXayc85Bh2cNeAbDjT6SoyTsiFm",
  "key22": "5twymRNBXenTCPvgu75wNsWWhvYDrTy5bSxhPrRsHxL73mSJgrDU8TRXs6sF838d4wBoRHgkYUc25xX3MHsGzDmT",
  "key23": "3GBELWGuUDsQUEtesfyZZg18xznxiBGB6Dj8PPfk5z8y4naszXsWwoyT71AzyThnwyKgEczn8T33pW9HBZp5z9pE",
  "key24": "3EERaKSoseuCW3Tx5qg4WUrAmzp81eu6WXVoRJ4noycjYcFcZ72Pi9qKHYiTbZKtNT5Z4p4XxRyNzzQPETKMCAds",
  "key25": "4KdgWiiQjNr4o4GwiSFPoSYA4oNgJD4ApWKfFrBhMUGbciC9PeasdBCaNWwxPhTeujJqzdG23K19xhk6iWCboyME",
  "key26": "XeWJCXMactXi6uSiCYbwELFfbv2cUDY7pwqtgPhBLfDt3Xmbbqbe7N1NKg4sgnCXkNwTFvsQhWkAuaT1fN5Np8r",
  "key27": "5hawFKJK2GC1zCk2RGKGx4FLaRm5hR1FHYFRDfyfxyeWsfBZUGq9P2xVX9fc3RRHWwk9xT8kYMj3zJ5tMW4S4iwe",
  "key28": "5Riuv9ZU9ap7AxtjTxyTZzBNFzN57iWigXgBjCQvHa94J3JrLhj3J3mAy3pSF6emNj6Yh7MKGBqBi6eSZNYZExB9",
  "key29": "4nC1nmZBLLy2pBiCGSiVvG5QNfr61SXLMLAy6HuUgHFCUbTaEmsX6brB4NNDBVTYzGEkoMpx8A1uksy5gcuCUpKg",
  "key30": "3YPDksbW8NJZhEiB8kkZ1orCFjsC6FQUfeuzjHfhwMbhyAEQ6Rqj6cbFMfjHLGpBqfiDL1S7VpiU81DE2gq57xi3"
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
