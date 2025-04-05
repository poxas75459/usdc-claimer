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
    "5dnJthXMmim1GktF2yw8bXCuRpnKtMyAXPWfLMYZaz9Ub6EVLCixeZkoihouXbUpzsUuTzwPFTzvGTqxzvn2cq1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xiP8CaoiMPHPdCV9FeieFN1bbkCAxzk1zVhegVojRXWLpS7cBkLomz88EEpZB4HHfVFRUTogbSMFoykgj2pzRm",
  "key1": "P7i6yoG9h3GZb9kgdTnVSP2XHsvP4bjPgXhSAnuxuxbcnrd3ySFqeArNFUQ7x6Et9n5RR4oe7jef9AQRSwMnBgr",
  "key2": "iWhLD61DHUT9YNffWJrcfG6JDfmiCZEyJWepZj7Y4ZGYPPYQajFxDzdxytMT8juAi7uSSzF9QBUyYoe6onqDyBq",
  "key3": "3C3otzWygv4o8J4vgBp9CvxWsVQ5HDthn3SRnMhUVEcJWe6EPSJgBs8RLBoD8kyD2N15Q1RnMYejG39N3RYXrGzc",
  "key4": "xuWWf1xX94HM57hhxzGWQAumasahejtArpnPguEo5D2AisXMEzEaHEJJsyvLgngmELNY4pi6HxmGdfgr7uBA2m5",
  "key5": "wpF6mYQEHidMDrcnb4eEsMfzBV8VCZmEfRrNYQmEPAGz9kLEPCSQfwaR2WQ7pm2cf6ycVaeX78CRveJCxFzc4cU",
  "key6": "5FEtZexiDbKvQ1Ebmo7vRdTPDPWFftK9muqas3tDVYBRPWy4ezJQfF5PuHdiMb2UMRfnX78ert2ZnQYGa4gfEhtU",
  "key7": "AybtBeLJXB8YtfQSsE17Uw5hNtZSVZdqtDuy1hdKArdeaE76jXvbfqdvdUjyDSL3Tw7pm8QrrCydwfRqDYHo2Nv",
  "key8": "3XHJaQfzVZLxFRr31UnenWAgcvmbe9m8mtgyFJGKWUswXAq9V5KKu1pHZMVXUvjfhGkNJ5p9bVvjZAj3aAE1htz1",
  "key9": "2SsU3dFtbZp3KwXQFiUgYz8hfhCwMhhGZdrjSo3pTex38zHp77sxyRvEiUKLGF2uHLocm9VS69vKJSSDFJ5XYbzc",
  "key10": "4pyd8eGcM3cYGGw7YvscUTbLSrrmYcdwC3kh4RJ9MGyPLaKq5TY4WGBvg2V8sYPMFmH1X78patfisg8rU8xt8hCA",
  "key11": "4gLcCZZQ1ttuKNnjtce5FxpcX5L47Rt5eq9Y17krgoTdWsAAKzA2HYMsW1gwZx9QyfBMbLhoTaXAUiHMrU5y14PN",
  "key12": "32fcwP4UwGoSspMUTuenkCZbi2XNLPa2krNMtwsrpcxLPWtBgeZDXuPAttLzoGKmyKxgvqHbcn2omBTocWWVztqZ",
  "key13": "3rviZhYEL9X1AwidRvbRAZKJ6NNhsP96dpduT12ZMPwTQTa5ZfFYUW3HGMWoTdx7GM8TPu7cVRqsARnrWv2TgcU6",
  "key14": "5kN4zBt1SZqXRLBnHWFRcyG9BvPAbc7AMarTVuxXCjjFHqpDYDxWZXwV7WccGwasiv9uxzVqCqNKswWu7hRJS5Ko",
  "key15": "iyxwJi955H2XejyXTbRp3x77wWrmfkqHqJEpZbRVvSEaAKkkaRH3SYQoxqrx9VfX1U1rqcq8YoBSJnN3ENNDJYv",
  "key16": "vp9C63iNxrPAm2Re9zJmVMaGo3oV8QSgD6kQvfkxmrfsJBTyVCEAQWwmqYBF54FVSSy5gwavtATHzYMJrnX8VKt",
  "key17": "2QutGMnyFf9uxf65DoqPZS1b1v8e2DxH8XkBabVBCVnwEKby33SuACiUPpaXeikH25Z5p9s9nuHH336EftNALZEB",
  "key18": "43NuGJcAfQ8VZm18aQCoWhv9gfhZjLiuT2w9hrrtE7K9axJw9gr2okxNReMdzMgSHLjvE68BAuEqmRPvThkuzsvu",
  "key19": "3HDVhLTvmcAw59WVZ3WVCW29fBhTyMK3yEFTVAXzUQYFB7KdMYyy6yUE5NakaxgScgP9Dbntw15PNL8ZUgPzBsRr",
  "key20": "Uw4L6BAcJBjiigUvCi1rzd58KsoaBCPmgrnyHkmRzQ1cE3PTvekvR7RNPfDvHAqFsHFkvD4Kq6A3gPDboHNCUyN",
  "key21": "2oGdqqrHyyNDZ6yXQXWvvypicuGeHuisSo5v6H36KjJwxwyZ4FMo5AMcPVZ7y66xVDo5zepwvofEGTL7YEu2R23a",
  "key22": "2A2WhsdeLWbAyXE5Qbn9JdEpZBbQhEdoqbLQFuw6ipF5jcdcgxbiT7TsbX3YrWSqJFoMrUGQ2ddCNz9WrNT1VFeY",
  "key23": "5oTv6TUqztshukU6NrSn7WgCSugoxqR16bSNCvgC68TkqjgroHFTW4kjXSJBrhEEPU575GdLTJNSD2QXfAHwfakD",
  "key24": "2fWUhY2AGUHQz6HPf3JVeZuLfEifbuMJZ2UrGW3nAKgr3McgfpUgJvtD7MRAXPi2yt6AKcsSdtjtFthUW92FY8yh",
  "key25": "4DbffpSH7zXaBNffRLPuTmBBWFVjw4Qq6ik8aV2VwS2ZALHSK4L3w3ckJcoACx63UF9pgsXpxxxnEoMP8iHm8fJE",
  "key26": "4chpfAmWeqXjwSiyS7A1EqAWoU8yjjnLcDrAKkyKUYy7Xh27DqmKNVQG7fc1vSxyebFWC22CF8ijP3EonBuyYdvS",
  "key27": "4SbihNTTJEPZwCVG5xXmPDvYVohzqGQS3kXX44MtQ13pFVSdXsXZZvz3JMyNd9GCGcKajbRMZizjGfAyBRg2vuqN",
  "key28": "5v5uSngGKLp3SvPHsK7mH96sxn9gG1ivKoGhuZUfwVuNNpvuqFMgXY4G2NiSmGLsGs1hSvzvMeApwR9FhY9kkecw",
  "key29": "5zjmY71cxFkBc5XatinwVW8mXCV2SzHPQAv8aBcgWFaX74Q9M1ivVvbG2VR2WkVRvb3d3yFQ6cL6KJYfnCwuFxqp"
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
