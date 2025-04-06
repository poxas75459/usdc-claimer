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
    "4aAADcV7awZUevkZzCusW7W9YkAHkQN8jWqVcmvr3KwxoLmeV9muEcA9CGeFjvB8UAujcGMXP5LxzUQzY57f2hf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itnEUENaspUwox1TZ9jf3rbuWwG86RjEHRFecUAMxQeMS8xxJsFmsDpvxWSp8o6Do7u4gieYLfu3bHoULtTisvF",
  "key1": "3tG8Kjy5S9eFosX1dk3LKfLrN2CUUB3vr7Z6bjM5kbsmKzyYhorGTzREtC9cwrGAfhfnDsXgmtG4NTzv5jr1vjni",
  "key2": "AKZ5n8jCjbsGQBDkNr6qEFPkpNyr5brPp4AxSqUR5mrv56wHLrvku7rodWSwtSmw7CDzrKEWNwNeveyTyPBnxBV",
  "key3": "2sxS3zqYEDP9EEv35sos4Hbc3zdWEhG8mBKEzZiKkVDcNMt5Hrh83Wh2ZiKZ6AqsEjeYc5FZDi2QC6Gmcep4GRfd",
  "key4": "3s65vCTAV62agafraet9Rde4hhZeo31R6TdGVefCaBox8hhpZTRUhpaGmce7ojzty65Lur4d49CPJYdHGRnfsWwJ",
  "key5": "4kYC18ZJtN2ici8GRjQHPRLJXnYdcD6s6YKdKhoukdAcp5VMwNadQsGkDTZ1XXxHymgEFqmXqR6Eetpzz5yJXo1z",
  "key6": "BokrV9mn8MrNCg3uenxD9BLM2RdjToapHTK3RSeL7mC53ZVWjQk6fKXMYJinZPNtw7io72D2qTVhaiiVgsnW3Ks",
  "key7": "5ay8ce6b4JNzoVS3iHAaoEDz2RmrHAFnjWkoA6urDNaR1FomB4yNoZMHVuUze9uRzL86ohnwWMdpJ9z38um6pAiX",
  "key8": "2Tp66hJfWf9fkNyYuj31dF1QVcg1TSkMa5mBvEXYyPp5WJXccgNsPwVbt27agEbpi2aKJFdWW5fx78fNaMzYhJNH",
  "key9": "59qbd9MxwuMgUiR57strc3DgvBSAQu18iWpuhgu96WppbzMBQrp8DLerBAMZyYfc8iDjAXfwJoxT3nYRgrzAx3vP",
  "key10": "5gpnmfJEBGwwVCcfN3xDa5sF3sFbbmwS5C3T9qUn8t5dqWf5w15TJ5Qk2TetkFQnRHT76hbaja6GxgRnxxodBsL7",
  "key11": "5LpmMVp72R4dJdXheBHFLTpiuhNKYU16e9Pd7Ha3zYqvydRYVPGWcdBcu1PBJeQEH2ZRmzJafcbWK2xFhkJtWK3y",
  "key12": "8bSJTTQYbxAqnjdgJyyzzgiH2zt6K2Vxsv4WyCE7ciqNXhor7r2yg6Fo4X4mmnJa7rHCXtcGENfMqB1pvhmwu4K",
  "key13": "2v8ZAHSXSKh6jkRHvbqh2761MzutxBBu7jrFsSinjiii8hPw8K8zoP6bdxoKgWijHGjbAzeyYzUwS11HNnHzNafm",
  "key14": "371reqLBJcxkHo3HhHxSW8cvSSgHP1xm35hdfPttwRnUcNE5fMiFh7mU9d1Ern2o5ztBtCHBBTYjyNkN5TYKLmH6",
  "key15": "3qfdhKZWsNQPbfvs2jEUT8iPa2EVBGumX2cx7Hv3yw82SvvJFXGEESgaR3YqAB4XknYm7yxhWZ4AkykK52VusZer",
  "key16": "3FifbWNYpgBibMoXoiKSjR8bcJ4wpFTXvEekvTw9MvJEdCocscrk1r6M1kNPQQ7WSEoToDpCtW3f36sLCfbVQzqf",
  "key17": "63i6ZS3ESLVXNtk2PLdHycWAhkHQnJtuXJKR7U1Jq33cNhMJ9cvYmnpwCzEB58mCADrkeTNme4x5KALDVcpTzMHZ",
  "key18": "5zHKc58QgrGjCrxs5Fp2wEtt8wwRhrCbmjVGgqvNr6B6LB2dWzmieZpS423X1tA3zKaiBua5Ery45gBTBs59VJMG",
  "key19": "5K6vWHuf2Fj1GyKYKXRNa8sHdWScEpcZjK1kXbikXuXrhEyt63TwKc9zB14sFfB5ufLsHwtqb8ckNvGKdZSprAsT",
  "key20": "3NqzJwTsktDhiqeFUzmDMHCqimTozD589Ym6iSj9PgiWhGGuzVZ3hkv5ECHcwNQaqMoASMA9gSsTAhiKhz7Q49tN",
  "key21": "A6jsHHbmEYGPm1X9aLeaG4bvFkGYeAZcNZiTiBrbB2DMAB2quDe5ssrrVSYBxqT5tCmsjC5P9ayJcHhZAkfnuDH",
  "key22": "4G23SBB7AzcoMHuVrGj8yvBk6GoMnnof45pKr6R85RKsw5UeMynWYBRwVnt6LkC46cQCgVPBRgyucbQbfB9NA2Y8",
  "key23": "5S6Y8VpqkjLoBrtANGoBJw6VBVkhRhgVaAQ6TBUr5Q3DTm5mDDEJpSkr4KhaRojbevJw21xEbtFUUE98on7GccEF",
  "key24": "5hNHBMUK9adXnsWs1UDab9qwkFqiiXc9ivDKCh9sT6EAUG3ZjzQ7cxHytk4ZG21HQNkxmKeD6CwDphqaVMQcBsDf",
  "key25": "59Wot9YtSm816iwLH2vcAATioch4jLuA6bNkivULguYScU3S6iUGAsh537fiBSAQnmt26kK9A2QWxUw77ud4iG4V",
  "key26": "1oyhNZHa9M6n468bbWgdM1V7TeynDyDWcCBrVU1zFHkhR1dFF1M3DEUBkjqoSS3Lk7uBGYPiaigcMzr4vjBAv3Q",
  "key27": "5K2FP2p9JX9gzrp89ZX3kzXwLCpyFtTsMCCej8MSRXTCjhSYgsKGJ9PP7rt61AFVxhfF5Hka93Vc4ugZH2ax1VSW",
  "key28": "3d1N7RGUBdvtKTx9L3i6Sfb464v7Qqzz7NoNMPSYpCEUP6taMyV13QSQHPvxcwqQyFyzqkkogXaq1gV41btA1knX",
  "key29": "62gSmm7fPHKJ5tkDAs35J4MQfjRBR8kxyXabVsvDrmy68kaVQ1me2qJ8xkhQRgVzStz5r5E9bAB66S6dWA1vKBmM",
  "key30": "2q91aUUJyujBeqzEVZbndKcxXvrtkpieHeMVijhYXpSQP2XkYd2RqCS3nt98LN3XjjnQkNwUy7RkKKbQmx18wpzR",
  "key31": "2yrtiATCRWGxJTToZTWheAwt9QBATkdtPYUxhoCHERk1wX6jkmje3NWBpqF9jQe6txjQREkSTG2TZQ2YvHLoq9NU",
  "key32": "ebB2dTFzTcRtTNoiLZbbRaPkGUm5EQNbwQxNH5SiLVZbfFciGJ5E13FE45CzCMzw9bFrMLc6z84CqmqKypPKhXW",
  "key33": "43SJQ8ownFdYzmbvqjpWoBoWr3LUmGqi9h9Vy2v8rTB7AeKrCuZ6ywHhr5MGfgYmV6hXMyH4fEY6mgZsxQrTsRnr",
  "key34": "47rrM3WXQdADBBhKNW1Y6MPBdxHifSfTsBG7eQkLp3Zq4RJCQR72YXj7ogbx6GNRGnrLveaFYMyEiMFQEU8RG5iz"
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
