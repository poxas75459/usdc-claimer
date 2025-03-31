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
    "3yAKNMnDx9b7LFH7FTNYUSwGAQgnD1XpvgFzkRFtB43vRwNxdHu15ednNaTY4hCAERqC1aYZQZBLM8eDQdcezsWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X9JMtFpsXqX2epd7RAbd8wLRszXXpAFA5foDERKaZCfowwZYryRPEU86pqFG43CcbzYdH93YNYyZGap8MJuDGEH",
  "key1": "UfFMwEMEj17tbueCx6nYxfva56qjsgtyTUdUTzWuvsfcAbinr7YS5pw5kbLPajwp2XUV1K288M6mBHgjMadUnGQ",
  "key2": "5fJ1mREFEcnHf7WBNE5VPsYQtApGcmX7ZAjZ8bWp7FZFp2oBNiFVNcYJn3vrsZ9h5XfGFapA6HzAxhrNAD4JS2sQ",
  "key3": "3mzszHXzdEd58MFq6XYFrt1tHXefhaQrUdn3DkMe7rpLmwNV4fDrKxqVJgcGsn9w18Nt6q85GBdmxPPPMoGDaQqt",
  "key4": "4YxycB1iPVnAdGvgefzrvVkzYdbNSfXeShf1WMbvtawjny1iYz2UUQv8JhQUnCYeqZQYFPNMsbsb4STEujD46obJ",
  "key5": "2sj3foNoZ64fkFDkySTxRav9txVyr8GebraQnYSX1vF4VJWPXU25xq3j4PZuejHaCReHE2UDP5MPy2FdDwWXQiiC",
  "key6": "2SVzzqSjnobq8vNFZR7Tr5CSL3vyry4uJeURjssqfSDw4F94tnpAdB9SX7G573KpxcATZQ7HWsBDxxmybcg7xcjJ",
  "key7": "2xMgh21dzHreJik6Y1cw1FeL62bgtYH83ssXiFn3vwzXPyy8xLgqtP3Xm6uRqBGGdr4pCtoCGicVdYvfMQy15RxP",
  "key8": "4Jr2X4egjLRqUh81GBgUXniSTipKDkCnEDP9NTeNmrmG28PfuHKLQCRpkBCPczh29Q17i3FK5B6oCq7gx3gCXpJy",
  "key9": "4MS1MtDaL4nce2Q7VaYtRjcN1Kc8stdharUgEE31kHVfKQ6teNmDucqEECCXws7sCjM4Razp1tjBszeztTwyx2fB",
  "key10": "5MjVi4Bu1cKEWSk7xgej9hD6S2uuRxUQm1mrcR8y4qsYFCW88w1sePpRfWfCav65hsueRPApxXyuYcfBp8p2QpoJ",
  "key11": "gjvRi2vqaDydiiMKB6RwA7fuiNm8zKuoYu3TvefnGvLKbaMsg4Vbpc5FcJFCxiTFToXirHyDLCgCVhiphvaU49z",
  "key12": "5gz1eytR3z3L1WGvB8sFy2NRL886hiufQXgLhAMLpL4Abo9nayzEUZxKsYdLYGkvDii33aLVZJf7bzKjRwzmNTzz",
  "key13": "3EjB2L8gY86dFmHCikRJyecunrmgmMX5eq44mA8qH3ZbKXtygvVPoDwkfXCSq9F8kaNs3cKcesrgXLnCVCrKMZUw",
  "key14": "9bHnNGzgeGaehB8A8Uo6UwSr6kdBHjQ3SyFuy7WrPXSHeFd3SKmKyxBiRx1Zx2Umt1HSJUqgsaWhX6N6FFA8K8Y",
  "key15": "5eGjXtqgVtWunWdweexkkGymmBjycbyB7S1NYogy76XbYQmEGuX6FBU7jMsXZrMdJeNAdV6bJf8iJE2sgtDSGa2D",
  "key16": "5AxpMVxBmGqwzhB3f2myqRiNiFh52jtgirNaMMXVuUC9pdhpAGwVpQsKb3VB2cB834SekHvAM1GPKCUSBJXB27As",
  "key17": "yCN79W9tRM18qfWwfe5mfo1rHTvVUqpyiaZvSNztvsr1aatMHm4iNK8ypWAdwase8eP321jWkqeinv88sw5a61M",
  "key18": "2W3hD61dRAA81VfE2P8Sp1oXLMRD1okPdqt9R8TqG3k5y9wnzQgDdGNHU8Ugynkfskw7Cu6Mjsh5oBt5YGZBMZhv",
  "key19": "3mvr5E8xi3EcusUrbQtwAgrghszHwwQfco13ykH7aRHwc5fKTtFgSGdNogkyPMW8z963KKF5JkYEKYeJei9k89oX",
  "key20": "2M4b68AFQA3oNftooQ34XgPnq22SycRGAsJMoNVWm1eijt6WKaMXqez3J2fBeXrqPdoYnwDkpK5KyXNQPCeUVRbT",
  "key21": "3YVxAeqweUB1qNG8U9Qxs4x3e12YcKAErx4R6LsRXv673rxRWtdtKLEVXZAVqc3WhUqg3kNJ4qwPcb8z1cAfq8CK",
  "key22": "5eg7bnH5qgr8u41Ak1EDwmXnhEwxZfTxNigHatARyKLq13KdHgkkudMBUnW7XhBycTnciS7tWb1SUbueBVndVwQY",
  "key23": "3B3htpoa3yCHLe4YTu11Uh3dVeS86e6cxModVFvTwgmjSrHZ7kajXzjAiMbCaJwK5WFfzL13DFspAyJBSBUSQoex",
  "key24": "3dD4xq1MN8EvUN5fkoqUTpmt2vTu8YfFgnE5aGZJ9gqDVLrbiromxSSJvYGatHTTcK943JFAAgAvy99fAsFxnWE8",
  "key25": "CqzAT2n7SDWcV5ztpUjD8ky8rT1C1owA9nqMWMabBeiGK8DJFhf1xBrP47ij7RQx8EsjvSiWxJcrzrGirkmnDhD",
  "key26": "RTpvkJkoaRg551YpfLaGUPxCgJnXiij2J7NaC3EJXP2xZa4LHBkwxHDAmBg3DPx553nmcFAZHrKBR6BCD9AKTh3",
  "key27": "2GUgp7gn8cxtpcSfodJXvayi7G5RhzPhtCcdB2v4n3PDonMu2wTzR9VhYvDi3PahiwKu9y8soXsyARfCk6Ryunbd",
  "key28": "UUNa2G5dmmNaHMpcdoEn4THsNLC1UHRywx1GJ8sichAPKdk4TJUgPPRY65TgTVq5hot67u8hNrj1NdTugFcWYY2",
  "key29": "65SCfFjdZ3WgpKcxDLPriSmrAZRwrnn39MHQMvmdVVrEpN7GTinWBjPfHMd6XLjD8CdF5xnrZg9ZB2b34AdCisET"
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
