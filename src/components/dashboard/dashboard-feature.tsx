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
    "3MXTPbuiHwkChAXTXnRhFsTT3vgEJrRtbbL3cBj14xtySAxfxJ4XdTGvrZype56axLMRQfE9tMeVZqPKNwBev8oV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3698c2CE4yjFMyFkZSqNtbLifsZ7HuUMoBvx8C9g4SHHfdPe1NG7McLbBArrm2oLFgP79qMWMrU2STQzeh216ijo",
  "key1": "5G4bTM7DNnmmoynL6Rtnw7CxnUdyKJ6bsKH5azaYAMYg2XuBKjSLsgYq9psWB61hfRGy6owxg7we93kHYcPxvYqv",
  "key2": "3gfhsTYp1Jj5wpC7X2VnzqeWFgL43bzT7J2d7Q5cZzg3k6MNBan5xK1nCqjGsLxmVvXV9BqjVBkhuStyPNRWJHnA",
  "key3": "5ZLVkoxtmkz2pNeR2YJqwLjeYttozTafXwpMsDeWNDzxVQyyH9WQinm5sBgFpGii89jEM1iDxRpsTSobF1nFXsvN",
  "key4": "BEtTLtmjrw4sJ8EiEPK91bxzUaEoos2jwRmdKhDLvR4JLQgh7b96HNqmiH2YaemPeuXyzTCwpseVb6oRnwzozM6",
  "key5": "5YJ6S22x7q1addzzywXYyugYLEqYu2GBsBXyCiG6SjfuGU3MDyX5oE3Y4GnSxQSyBNvWTE51kjJoQFWtjCr5WfjC",
  "key6": "5VEo9t8b8moS67YMmrHNrteG3AwJHGwdT1Q53ZZu1eQgigaRkQakfv6TQpZsgX2Yc7bhqUxncUQswUaQT9yPgmFw",
  "key7": "2teoXrhH5q6bBDNrmSespk9ecoaBH2FXYf4BRAFdh5vRLxeZkigua7AaXg2b4rRt3nA5WB3KJEmRD4AE7LYf6G2G",
  "key8": "2W14VUgaXKpPARgsRDfEbSkhxe9GgdztoUxgJAkUsBN7GsQavjrCN6Q5NPb2pti6egLQsayZU3gBnMrx1qgSLp3i",
  "key9": "3pftE6HSWbk2fJTSmEXk98QcDeveLfzXtR7tNGbA44wiRhhvHnn4Z872YqhuKS2kxi8rrhzgWkSQjz7AS4Eqx1rs",
  "key10": "5hPKCMXgNrJUkQFeDtQkLdGT23tUF4AJ1aQrNeKcw2Uy2o1kHC6JNFe88CFqUFTqkqX2PLdFbGUeEffrYg2Q9U8A",
  "key11": "4oN7YxVuRb253EtpKkGksaQibTiyLcCLjX1RWN6H7eFkK717bwcdBKtpobpn4mCjCpuxwHwMe3Zrrifj55NAmGTa",
  "key12": "2gJRExuYeTUgTz9A8UFVDQiAaDjTHSACYofTKWmnTMNCtN7U6GmB4K7WRBmsyEheBcjUtVvACwW8i8JP7mk2RtJk",
  "key13": "5maFjRF1x6AoeeyZGFFTmqK3phadr6mA9LyMnWrsQ5Mw7wwizHXpQzEpcfz4ZFJiyyNzE7N4roPkR5b5kWadZR64",
  "key14": "4s3Fg75RXuAqMc2QtfFLh7i9Pnyk3iadgECMTAjgbxUrn1XWAqLoZZUKoF6XhDPyyJ6xCdiLWLsqHxswdeMUkGEq",
  "key15": "44bR5ZCf5hL1ejsrTnsw3Ds6PkoEZcJfj46b8QB5XARRo3kb4q3Mpo97PRj69B14XfgQyZMj43CUWkPFBSeo2vcT",
  "key16": "3PKdHR3S5TA1jyhXJvrABixWv9wxKTzTf11VbVnvEQ2y67mYTxC8aitL36dVakhFQUckni4bMwq8bCa2pafZsFaA",
  "key17": "5x5PDuEvrWX3cpR65jAkTaNcz4VEwrahp1TYSvmGqjCJuvZq9USFNrbbu5sTzTgWrUWWBmP46S35LiiPyBMBVLyC",
  "key18": "5pQM2jerEHkttEFRfxiJJxam6fGYJsZZRsmgpXY61HjCbHVPt74DWc9ELTFBh4wZsuJvwz8z36h1su6a9DPrPJfq",
  "key19": "2msqXyMbV7xJeuNsmdoZr5fZ2vK19zC9JndKxTM8y9hmM8BVKrY5sNZ1FqhcovFo7DCBqPDKsEeub5kixD68NWu5",
  "key20": "4WD6xLcH1mQUcYWTTEMGTYh925E5PiZHzka8uygEv3FVzNp4bUip9EaQ8zV8AXNNuGdCx1MXL1RJRcLbUCCZpbS7",
  "key21": "5Eor9NWpeQvgA5S2Zekrm6iqo9K5FrNcxhm5RVJBRJeT8pWeDsUAGjnQnh3jpb2wQNpiPtCV71abYiVDsnbii9d1",
  "key22": "2certerJ3dDzH3L9ShcjZ9GpomBVAeGyWSCLokJEBDB4RwXdaVK9aRx4koB4FtywFdmXKY7TQgdsjCEd2Vc92Krq",
  "key23": "3LiLow24aF55TnJpbq1gac9jEwydqEY6BWtRHcqANs9uQXKGzSSzpFLypbixEvVh5v5YpS5ZGFQFWuARhxJqAXTY",
  "key24": "5Y2XAynSibBeKio7HDVUufq5ffwZS4LLbFj7X7NJZ3vrpNc7BagTBFHfWsG86M8XkTUP7gbyWRZHErfSLQAF7qK",
  "key25": "5agHu4PJB2Wr2qVWbh1i2ovXGEtcaS6CMQfy9FVKMv67t3Rc29JP6He2NjPLLUA31Nfi28NYgb2umyeKCcR1gKpA",
  "key26": "5cxT9fF4xNA9en7inDUDNDDLtu9U1JYHx15Z5mGDmNShTjHRBdUhi5mbsGFP7t9Q6keGKMw3KF8zdXMK8hGBjwJ",
  "key27": "3RKjy18a6kdL4Gij6B5jwiBwd2FCRDSt7EJejcA63xoARvhBe9cQAvYFAYWroXEbgSGtwgaqq3yREREsXPixDqqv",
  "key28": "43Sr5kxpeSs7LNd3FxEYjZEfb491dpjd3nzgrfS63xiiBZ1a4iA9a1jMEV3XVKsiZnSaEPWDYagpMyhBd5dY4WCa",
  "key29": "4ssxhT6yCocEQk5LW7sX4TBGRE87v1cLJyp6jQstu4pECnSFs5oXSUqCoKjiJgcwRSG7bXrc6UvnTSXGsvaCiYRr",
  "key30": "5Lb28UaaZg4wpXHkyTJE1prqHQLf8dgvfmASBt6u2qhEZ7dTEWRwbZFaJZD7x76GMVANQKB3ctrZ3wNn9nsT2YHW",
  "key31": "5dtbuWWErrSwfauzAPVGSB2NJeqAudha9YDweeP5SodYHoCUZ4xCtP5dq2RcAYUMpdgD4CQWQNuc5DeQ5WLnjDBh",
  "key32": "2R9gQRfAkLhjyF6scaCLzKzXK9eVveT9VVJhQFG9Ta3YCA5MruyG3DkdnTp1MKz7BvEWm5MJDieYzbCXCXRGScZV",
  "key33": "5ddkzUdnkzYnbymc48RG31svaCU5uDkLeKpUcqXz1SfwmCZmaDW7KAiwAP9cgcv8gNuGgLLwgwBAX1sb3YE69q55",
  "key34": "HxdirmH4qkBYZgqYTT9Kdk3UGe7pM4WeTxXScoGVmZdZ9zTTZf6vmiQpoFwdrLkj6AyP1SGiFjsXAyhXmashg2j",
  "key35": "2o6cdSP4mVaRLsB98kc4otkyxGPhP1HwyP1ApLVhQDNcDt3VAFPx9T8BzBnuyiSnuakhEKTb1kwKPsSUbPg2P1M"
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
