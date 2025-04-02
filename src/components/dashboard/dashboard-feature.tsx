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
    "4JsFMkk6WLLCjzVMDzYEb48F3eNMpGcv4gem8g9wNgRGuDzXFnygrC4Vq14pA9LQAYRFS98186P5Pvx3BDcCt2J9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VqhsfuhbdmVXwpxL5QwCDZXAjUfsJz9L5S3dtTTPYhpW4bAXXFFEjs7mdASWB7DMuNR4vgs61S79NU62P6mPC9q",
  "key1": "2An4YYrmWoyDkG6PumMAB6hHY1v3u4jJUes7DCJegTCU4EjUMpVefx5mg4sGKvgwyUN3YHTngW9dHUXgZcoectPW",
  "key2": "5VoP3to9q5MfV4ceVaZQtuwy98R3p4pXpSi9kFsgXBT7wAfV2FT4Vumyo8FvAWHtpHLqUeQYKTGiwLi5sZozjSPh",
  "key3": "4G39AEzj1WNVq8peQfsYZr8xysNdqifccABypjSkVd5sYiuWDDxHxSPKTLtnmKJPhL2oCXQCxsiPQYNkqaEVzmTF",
  "key4": "sHzyS7A9SsniuWY6ToJsPVzpNQhbKwmf1WDC1T43Jjim5AgvAztsXBERL3uwubAXJbvvZEKJJLfgcoNvCa1MUZP",
  "key5": "2YYGPhB23YfxH7n4snL2rmFRDAhT7Z1e6VEMv2Zqsx1uPH7pYsnXWDPom9vueoBEqF4btitRqkJbtThBMRs8RCTA",
  "key6": "44cwD5f3PNKoDnyiGRGhG585vZqfo4dpze4BKz2SzkzbPDRjaKYCT8di9zbY5TGGmYgMccwni47yqALt4vcCi2a6",
  "key7": "67anWuBQz7FYQ1kSck8ckgAoxGywgB83WVZ7Hevkrbu3fy9DfW7m12dikk2X9cgQiUFgyNt2j1n9QNdG57gHzdSc",
  "key8": "t6rvorHAdsySwrGdjzS6cLirX5ke1p4G5Qbe4kwY2Hfdw42RoGzgxAirFfWjABm8zXsH5YRBv4hsbVJ6kQWUuKM",
  "key9": "4qngDDC39yD6tETw36NkCSfboNX8JVnM9719fHwLcqtm5sdbgJuLMdjdRRB3Be6m8abuPF4FfugDX98sEEaG3iPZ",
  "key10": "VUNWaKF2DsrQuuTqacwMsXVkqrJxT3id3FLz5YHhAfk67TRGLg4Bpaopa3nJmqoa2VDPs2dmav8mm7fq2UPwkeK",
  "key11": "4MHhf8sHXypRgj16mjbZqFY6bV4aQN4TNrTCAVEWRnFHycsJ7G44xXoeQVYzkWthNXvNSsg5R7GYiV4R7gnQd76D",
  "key12": "21b1gHAWqDWCQKhcLLbrwKPtN8Lf2XUYXVc3iE8PN5NDnvAoJAXKKehJeVn3ZPAosyemsnokN9oAkzBwQ3jxuLJr",
  "key13": "5L7icy9n7L8CoxUJb5UVFmFtL1nWArge7gB3D2MXBtHRW2xF9wP8Rh5mCsdLNFnmbPBgGTHaHyPM5yh8cD5EEVFt",
  "key14": "4zNTjr7EfsDLeqaGFkGAT9ReA5Fvx6sTT47ZDVhLmFPJkt2Wgvyw2To85uAZ285dq8uLeJKjmpe9BaTQxLhEaWen",
  "key15": "57pgcEjeocotsveXgV8yjMyTUtBFMBhUKuy8cJd9JmSHQucVML33Mjj4zruRvYQRxq8SVeD329v73PzRDk7CKthQ",
  "key16": "3canKKRU7z3SciaK9ufm29QAe2K763wa6mxbn7xFZ4CSwNJ7SszNCSdFnR4RavpTDFc7MrfPXNjVx31iN4HohEjY",
  "key17": "3QNMW97FAUCUqJxHvuEZVfqtiLf2SMpfAk9gcU43hNx3UPJ6es5gtmb397Teer7nuWXfRtiFAThAuZTBcnrnMhH8",
  "key18": "4KaJGfY8fHu9Pogess76utDXvf9up1SW4x8aLSJ3FAqSdDSEjYyHyZDg5XEAMkdfweUAgxisAQNpC9yPr1ArsXP5",
  "key19": "4ppAcMimVj1W1AjoAjEj6ZhZ62hG1yPoMy6XjGKyDyGhiSRna9LBzknNbBSfEPG9UvdKLakRqLCa7ZhxhBPFaYzz",
  "key20": "3Tu1zhAD6dSJ1TZBZtHk2okYok4hh4Kt7DHfKSvFFc8yoCgtZNoXEsGPCjfn8dkYt66sbyvLVS7PP8YUTZbc7GBt",
  "key21": "2YjaHEKL8STVYMGMfW1GGZJWpQjDN2pRDbvwFvVFMFwbMawt4QaoCDwxXB3EePwWMo1h3MrfMXBNzt5yXeZE4Fmo",
  "key22": "3n9SNyFqRpkqUrQLMoSxt4wbMj3A2cEFeifaNf6FN11snUzVpBnvLEzTQXGGS2R6DHtYFTjf6o5vs8QZHWUDZ6PW",
  "key23": "2MEhstFeFiWQVoGSjh1Ng6teSR9Brd4fqchmqsYjMKdBcSi72zbMbBeGbE61gjXAkb22tWsGbVzdqqdHW3jkW3Qn",
  "key24": "Btn5ghNgdmrW38cBvJhoBZL9HJ6cSMJ7qKZj3LweoARv7NC1WpurLfNBbJopBCBpBLJZXCX7Fowa8HBEVfarZhN",
  "key25": "4dDxde4xGMGLym6Q9WXKZqeYoX6Hr9zQgkKoz2ndfszs1q9t3oigNxB2x95RWYWC5ngSbWvBMgqnYoAat8zXN2vX"
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
