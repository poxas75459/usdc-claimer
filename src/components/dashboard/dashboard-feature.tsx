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
    "2qkey8kT7r8i7qs1n9xzddLqb2LEypP2WU4efZBMU5psbJnAC7HaFB7XEUF54RgL2VGanQQKbvvmJyGfQHYQMAUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1eDQLNPYFHVmyUATHM2u61FtEHuk7WUG8u757NNPxuoBbKMEddE8P4TmdgyJqqJSQXSTKRUjjKsAYKZtjHjM8C",
  "key1": "5191fjmbsuVWBR1i7qWs5sbDNBNnwAS8h5Qnj14StAa3rxR11v3mqhFD7idouFW8Uqpe5NHtpFrW4bSUorbA8PUh",
  "key2": "54JfwuYRgVz64trpmKymBGX87kQPkJ3yveuEm7Hvw89pRKZbpLNBFXCfktdhEcvWTMbyrvKr46tUL3d3xYdoVLLj",
  "key3": "4351KjngBefjZFtCbFywho4zkM4XcpD8UVuq7SyN1d4NCHd8XSoiMdNDr87ZUu5Em39mBErpi5zzVYcEinhysYDw",
  "key4": "44xMS4dF8eNNoXHP7k5diuZYdBUTV3iZTSKg92o8ycHdFXk5oLkUt7ptWpyMzZB5cP5yT3kMXHLUCZvFMSUcpZSn",
  "key5": "45tVCEWM2bk3edYnLdCC5BedNQNzqS7Jby8kp5BbtKC7ZdMGWAoFweWwxjrV831HXQB2o8DdafKvbtAWnTKAuGir",
  "key6": "35BHM1pML8S9Yf1T7R1g2QjtxjbZqi9QdLwZMrTac3cFDzmZ26LoyyTM7SgdUxw1EUghCfL2UyBzwfDgWTWMTbHi",
  "key7": "5ve5f2wFEpv2CnGTS9CdsWd7CYoPtAGCfGZnqvZAEWkSzYfdHrw12XmXC1tKZprATVy6Z3YgUj8ueZZ58mjpVkui",
  "key8": "yFK94tPrEpj22xMo1G9FnHCXWZvX7zuFT5W942vfpgm18CXYe2AiY173bJoooRpshTC3P7kwc5uM9wSWdAxVfj9",
  "key9": "63JoecfU3y4d8VyQpEjz2ZgTHDMtjEnUskrKaSSUA4JZL24Hu4mnj57yaZFo6tUx4y89XNNaa8hRhBDQk6jFhHyd",
  "key10": "5jvAEzTsMcgpyVjgtScxHeELqch7DpF4ijpVQfp1GGGT24ax6jcb3Ub9Sgxg3q4vgJiayBqWiZNR64rXKzWVirfb",
  "key11": "2riFgbNR6Qjd1323tkUNgovDGNEFvwmeyCRp7Fk55E6WnFTkxsWuwbTVG5uYtPqj2NFznhB9hd8tSPrCXZ7eqen3",
  "key12": "21ZHLpGCDksqzjrPLcwvZehkhk6xBStBStdWHanH6cC2Kvj47w5Xgmm28e4iKWJEuNxJgkhsGZdDTf1qUWT2YMED",
  "key13": "3N6bdgF6bdgnYHfYH8aj2gwTQDbqFXqeamwG1c2FUPSjwitRFJYmzSDCYumhnxJPHL9i9sP6bfcbCc1hSUvDUKXy",
  "key14": "2N1DD98PcRSV2Ucxa57grpEqzZyftitmHUKm8qEy3VWUshsH59H4LgaLE9HmYman59ezTwP59uuGGRF5RRFZMQA7",
  "key15": "5jnb1priGv4pGtCn23KCZq4NoRkzs8Cuokt4hHHPw8cnmZn9kthnpu8LA9gsNCBzYUH1HiyoTYcDymYAoRLhpcnw",
  "key16": "4tExkDbNyraHnKKXXAfW25nFso6pVoUdAkbZ88gKqwTpuxt3ZvyUUrJAmg6J3LMCaAZ4XDN7kdXxLvqtpdGjuBF",
  "key17": "4YDYoiTqT7d8jNooFYcdKLk1Vk6rGtFgaiA189sgF8qRCEec8JrpqokZ6FiS9M7TcJYETqGFKgGJ7RU896BSgDVc",
  "key18": "3Ru4Lf6efLMtmftLsfeZewdKteH2EA7Ja2UdoBmSfMh3mwHRJ4HekxwTcdDXtMeMEExgTggfQPUBmW2oc5rUZTGC",
  "key19": "5FjRUsjyXSMWLPwP3oB8b9m3tMpau1Kt8ETLFdBVZeXY364enrtvNxK1VH9Dsd44xudrjb27EkwRck9khzNyLWXY",
  "key20": "2WcR4bAF36B375snGS1czoNLMR5Lj13rww94RD3R9EV7QsHTGkDhdjdk5SkK5GM1EbMBnnq1mqQz44dmysdDVfAp",
  "key21": "2LLb1PukbseqP7M4neTP41ADT99AD4ks5ZBkACPZH6WFNVCDAfPTamzKfHMCWLRRtpAyE2JYrPCrBWhnvgxTxAc9",
  "key22": "5Mq1P38rvN4SnMBcBuSQPev5ZXrpqrRb6heovT7TmeVjFUiWTg3FAdNgbJVNXhhExsxjarkLhgcneGbEyLPhppYJ",
  "key23": "2oyrz5tNZWZLdTKjDVDmeFPoZ4ADhDcio9y3geFRjsXz2tUnEJQWjy3b9cNZ67AUxtC4wt7u3PJ4WDZvf9T2BpD4",
  "key24": "3ZxYskMp2bjLpJVVxBmT3WSZo12YG3n9EoT97NS9oBbcp5WL6J181FsnRTJ5ASKB4C9B69GpioWuA23DnZGWneQv",
  "key25": "3vhv7ponWoqmiJnq69KWADVCYnCWVrbXtWwcWGuWhJASw7JbVuuiX1exTYpbtegSYmuccAFr2nTBiiCWDTrnF7Zo",
  "key26": "cu1hzinNPxC9nCQKVezu2qzKzUzpcYEsvqYswgcWJNAvUGzXVGyD9nWKKW9LeG8E1zFMpEwneipADgri3GrYHit",
  "key27": "JmvXKU6fS7bagrqjNQm8ffANQK9Fc7WyENLKCUwZEsMzm2HGq3wC5H96Qc95vv523bfD2TyoJCpiaUhNAPyvNH6",
  "key28": "WADwJd4hEigEaAoErqyFzFErPLLq9FKZtp4RbvMJhN79m3TuqrDoZaPgUzd9amodTCWapqUtMkHJtr8cs764VEk",
  "key29": "uX5gFK4ti9Kr7twbUxyewfaT7MGd3hV59gtdMzXr7C7G289N6yvvvwto5ufGjw7mnpbUbRd89BZBkK7gcCHvvJE",
  "key30": "2D26p73gwzzGKD4ddNxbeCwf5pT278GtCycUSjPV95RTPPVF4NF9RCxtFzXw6jvTwVpA8ZBUHsYwm6X3kMg25jEz"
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
