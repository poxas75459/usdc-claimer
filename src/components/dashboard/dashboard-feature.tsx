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
    "5prbeqaHccjd932UfaGRWpem2HXKNPk5K6i6PhqyymguidPySvYvB5iKq9s691yxX1WKEwusDMQMUM478YDwsb5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41v9YGKEgFvvHBaq1U35RzmnJKwMTtNBFvseSkNzjSJH43W7qSDsZ1Jqo95aHACoDcB8oLZGakdgN8uWhQZDbRTk",
  "key1": "5mk1kGk3Q6tqWgBoAYe68LGd98JTXNeQwCpE9RLTSq9MfHUaSyiRdBF5eN6JiA71PHwWUV2DTvuSGmHEKP6Q88ee",
  "key2": "2QHcxEPmY2sxKTvJ3bLhkedDxcEjuWkGWrnvoAxX2qSvHGeQ2xFFoEqYgV91HFyUoya8wDHd6gmZqyYqwiKyUfdP",
  "key3": "2mH8kGxfAAjyKmoN2XBwxCq3TGgpfMnE3quAoNLS3FEo4kqz2Tq5xnkiN4pwFZKqqzGinc5NZDwRqQD8VtLxVaxw",
  "key4": "2pt7nVqkHuMikaFCQMYb1QyhtEpHPJ75Z4epNenMDiTngEq6tkA9RbiKqPJ2w5wj6Ch6rJb273nYj1Pk4BTU9N9v",
  "key5": "3dS3uWDorGs9LWZH89qedcgtPo9wqm5X6wNk5rccdmdkTsirUR4rByJWdBrNWAqfCCY5FztWw7SKufJqpZiVKoMD",
  "key6": "4ZzEFxoZuhhtySz8Sc9J4aagEmy8M41BPjGT5y6osWXZjjaWTaUwyc8dq5htDdE8x3D3T7WiNEQtcnQbruuoKyCi",
  "key7": "2upebaeZwhEBo8SpLQhkdnMa3DTUUomb2497tA47ojhhBA6HYUucg19w2JJt4JXPRWzshN78qU3XJaap1iueo9Tz",
  "key8": "8uACETEYZkDT5kEJ3zAjZqL2PmCmURAiA9214yThVqvcyxH54S6esZjXKRDxk7qoLjBt8b5cSvTb8uD4H7yptug",
  "key9": "2p81UnUegweYtbL8VxqcXAUE94zDV6nVmBMX86B9d3bS31cAVJBrGe5HmRb3oj9B4VfkQSUvC59bGCjkyH6KQRoa",
  "key10": "2kc3BszUPpV3Leymi5PwSVgCjfUaWVj8YNSLMogC2uHaTWco3Dhb5B2VoQzD6RreQEUFAioQYMP6LzFNmFy7QPKk",
  "key11": "C6TpKqVcMZv1wsSFFaDEbUaT522pNaD99WNzvnSPC1AKCTvveaeEfEvEzhRef4jahnvL8ZvYEHLA5udhLEcnNvf",
  "key12": "DeqK95u2uYuKuxPPhad6iD8rm4BDA6cQWprPLnY5ZUE5P2GfEtytEPhi7TqFAoqg1iuwQeBzt38THCdW1BGw2er",
  "key13": "3BCMaPeKnZc51hYHrC6vCZj1gdwPa7pmkuxQW4QF4ZkY3oHYLUMS6bCAXtwUCFqB6QU8WXCye66uqMmg4nRoafjy",
  "key14": "3YSVaQZCT1WuhTWMUeHLpg9HqbE4hXrXizJKucmQoDv59YqfMFKCrKXzeHoJq6n2ptbMXLDSrbZg6UgBmfBNEbiE",
  "key15": "2yQtcgY7UL8kJLFLXsVMxv5c4oTknzjfHYx5u9r9FFy6xivdaWwtjhrF8FGtLwGLTsctP7fCQWbDVuzjz3RBVTyP",
  "key16": "5iuANrsFzMT84RWh2pToGKp6M3WZ3bnE7BJhQHB3LGsi6JGz8eU7p2YCWwRLouKZ2keLT9vKdWfpEeWZB18Jrsmn",
  "key17": "wFei8M7ZTx6UU9yEajHSMLicZyjvKUPq26sYr7cpNYS3AFSfx5Vc971Kisa8KD2UxZgrWegd647uEdxyw9gBnbA",
  "key18": "tFXU3oVBjUqQZkYbnuLtrSLLv4wn6z4pctkN7mA29dy4onHPXs1evXjuspj6ey7avfu6aYvrm4hmCGiE8kbnazQ",
  "key19": "4X9sJp3DcnM2VKtbSQ5jhYPkiz9P6bb8Evg2xd7hnhCAGGTARttDAzA99iinV2JC3VB2xF6qXLGGq4fW4ciBJPBg",
  "key20": "24RB1YrfXH1PwkprkoWseEPvoihKv7W1Fah879u74QPYifR8MKWnyjrqUNgvw86LtzR3yvC1emGkfgWuNrFqgExu",
  "key21": "XYzkyJJaA4T8ZvTqzeV8UpWMJ9MWRdMViTzbi86XJ1wTDRF4gFr7sf3K4irqYFjygPh9WAxTWVFYpH1bqZoyAMW",
  "key22": "3ttRgDt46SjvhkVLWkvMvEhNQTuiAr8b8MScfYnbzFhQFQap3DpiHF5x31zQRfzfSWnH1QKqCbE5TKNemFS5v7Cb",
  "key23": "DwjZiTT83wP47mfJYDWJ6yWgwdfxiT6aBJdqpQHTDLCEDwLCbSghLiyoE1wjXBNopBToZ6gFHTRvka9Nz131S3x",
  "key24": "4G74TwPMfbSG35KyHS855Ms5LEcVYqxSGmmMHiuREKhUyzK82grdVQk1U6zo6mxDumLXVBNp6CH25iY1MwsJgcyE",
  "key25": "4WPXzKzqrmeJ1bcwtH1pv817PbtueAiUeTdmgVMhXfa67kJCgMHMkA2Vsd7NVmuqbQfnuo9uQrqoLnKjXRtcNCGF",
  "key26": "4Yoek1QFwFYDdpQJeEJnxvzWoPkWN2VmkXsgkgG9oZXPshHKfPDsgFGxBNSyUdGXMknP5CgMeyiyKcoHDJMuy9fp",
  "key27": "4U6HX6eaxyc3bCn7W4nbgsoyMTSL8K7CXhTx7RCWgNKHb1Js9SgCTr4Vv3uFs4Uerg76vmxUnSVzfQSSvSezQRDx",
  "key28": "4dstkFPay2pZxJ88cr53HnEDTppymgDNgo1yK6RejHCRfWNDgYPNHwptGmEK2rAQxChARrZ4QxiLthHynLbTKhwn",
  "key29": "5owmPn44x9tSALpYHoPrmt7EEy1wnsuJ75CituQCXNuBnUt6ezSDK2VvLkMFLWUuVLs9USKBTPrzmqECRvqv641c",
  "key30": "4WStZiF1tg7keEHqj4gyxRE5Sr4y5H512gASCmqqLjW2VxhvW1Je5URjAn7UMGwEvftG498FpHDEcZJ2w6CFNJgU",
  "key31": "4yXt1aSjXMnRmArbE86He8pU8qbWM2MDvmoX2Ma4dyxBtTJRn7ox6LMc12Sok4gGGLdyyC8hEyGEJJCwSkVZRZrv",
  "key32": "3oXmXSgDxLYRoi1Zrk6ACvv73a5BUi6h1jfLSGQxBjFS1qFYQ1PReTi8QvuiugowQnnjQquQr6Vr6FgYsU2uBhMC",
  "key33": "27KgKAzxgzgN2tppUxCSLw81HujrXnFYeKNeuBT59gMQSJ4uPxhg9uvY1B85gR9P9fLomfS87jTc8iqa8UyVr3bh",
  "key34": "2A7qufykBbRcnXySq15LgXbNQP6HAAa5NvZPbQDAkz8SzeQvFEAz4evSVtZtxKRrCzzw5e11yC5cDczddSzhnGTA",
  "key35": "5Ltenu6FRSZd22UkGePEqhSnxwdahJa5Q7ptpsMw9CJWkNFMWipDrHREk3ghVpV66b7VhBbjDK7i9yTf1RRMLAQc",
  "key36": "5RhnEWj5WyaoiSV6qs37p1CkMvNwcEjxR31h7gnRb4AmTgn4ngQtr17RLzna8gtnZ8JZUrH9U2V1j1SmvS8UP65Y"
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
