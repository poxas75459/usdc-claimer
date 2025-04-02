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
    "E46mzutkB38fEfrcsdr1ncCZ9r2utMghvusfekYfVpfet1rHYpEzQcwP7ddpHvuSjh8CCPaSfpNRxsqCkZAk6jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o4pddvFvuQ7E7gvhKXwv5uhN4VB9Cb7unoEMjq3j411rKwhv7a7EcRizJ6TgNWyNsTXo6uXNA9ZEXUxPoySSxBt",
  "key1": "ZBuB6riimMfw25AKd2vhPmd6X4syWjVN8TscbNBuKNgWX8dAoWBvBAFuYe7jAByJrUqkZc7wYVCWg8RokFctMLF",
  "key2": "41vGLvfqcaC6Fvqrb6G9XPr2uRQTyeQZEWX1CPS2CjxS2dkcWdkcjDNBF4asZ9izj3uMhoqgCGrSD36a8V6RrFbz",
  "key3": "3Kof7igbwHVEFMjLvs5mCywEhStTwRBYQWHFPH2sRRZ5U6N8yswDuvxWqT3DSqTzbKUa4yRx1sSuhVU9jaTxjGrJ",
  "key4": "4kJxDbWev65Ljc49pLKgeYvXJkqDCGmLj5GjmMje36oxNKf8coJGHP5bH78TDW2hQ82iRJgmWL3zf3p6W3BX7Crk",
  "key5": "ERakmS3fiuusgiu9FajYNqroBbNf1qA6NjRLgr5JcmT5zEzNRBr1BftUmqSYqj7apXZFbEYWqeU4Dc3VvXd7gRB",
  "key6": "3ppQBWvYRWP3RE3De9bjNDjoEKRf53xLZTq9yeWSuNtoxChyXDvZac7Yb1uPHcT5uP8YU4ejjW5LoY8bUMsRyowi",
  "key7": "p3Sndfbx9FHpWmy2xZSc6S4Xy63PKvKnDsZ34R5YcTnUgK6amxxeJNmgMiwV3Ah4txVB4PmpUEV6HDsdaZcdoZC",
  "key8": "2CzGNZP6npnjYPoPgLa7DU7HMt9jM9EsnPTixCdTxpDDdR7R5EgAMA8wsFynnyRcpH85WPuzUnZMz2khNaiXwSk7",
  "key9": "5CpDSEmrEEDM3NdrCmBgRkC9eFHNqWRfRQvRfYxf7S24aCGBdmXjftgHQyoXi5nMkeiRWfKppKKMtiwpVsXRGxPD",
  "key10": "3dg3pwgwnLCQT7YsvocjCjypkbbMdcg4xwPJSo4FHurRxtDaZAxGhJ5tQQ6mWeLPA8cYV8TWKBs66N1E5rNho1Hi",
  "key11": "3ibQFNfER9xnqEU1wpcF5s6Crkswaehy8Vvc2ttLjwCjBh59rnwRUH7ubzXtQYVyfbxcjEWt4ArneKQ93LjH7ooD",
  "key12": "2w3skPu54qqERjGz8rtb4ga1gUA7iegsF53UBmXdV7j8AMZURi5jUY5CBNkVHB8ABLaVRDjCdm3Ruk3JiPiNNcBe",
  "key13": "5d8xhnZD6m6owyUMgX58DNLfsdKbPvkaNFB9gxtTTs4XS9TBsquhn7LafRh9u8nPxETS25PhhfigW9S6MXA26baC",
  "key14": "4ARu8vY1pGSahVGZaf6jsh4bASfbcvQasWoc2pDYhGBCqcFeBF4kBWCkGfUSK9e8n5da8vjqND3Q7n3SDQV9VTao",
  "key15": "U2HeCqnGiF8Uza9dn1k2dXZoMuF336j9tykurpWZ6vZjn3ov7qENnDkyfRp3d4m5SdMWDWp1Vwav3nMrxHFfwnc",
  "key16": "2WX4kDXEE48uQ4vDTW3LnX7pwUY1gXeTpTmNPyjSVhTT94Xxhu8kvSu5NDYKUK275cHLPtWn1A534frqr1W6Q4Kn",
  "key17": "q4QH56YxXENURMwrM34tEhjUdspZNEEE5HoqYNie6VZ2Uo1t9BSvAZQcsePjqCwmNSRcxitdCzzGCg6xyNJCqRd",
  "key18": "2hWVPApRnAqFp1x86jLHFFAuJyPn4LY5tLmE74wvc2QvWUzWCfHYfMyF4bJYCEA8vowF8wLwXCRFDVo99fz251pR",
  "key19": "2Df9sCVUaneRkgzeViXS9TKokaQXxxF3erXvVpzFRDSe3DaiELYhCJEgCJUV7rTZGNU5dgQH2aKeF9tvgFjfFoFQ",
  "key20": "2vhmFHz6whLtRgCef4tzVrXitvHt8tBtLrvzKmXySXAULDyU3h6vu9xHPFo3oW8wVt1ukYRxZrKDgWDL1qAWUoMx",
  "key21": "3s1NXbpCxQCb9VquB9g69qW85wDGieUh1sePnH4DBdP72T1gVFWWzLLUerbLcNu2e4PBkmVb57Cn1ZhWXt9xP2cJ",
  "key22": "32vhX44xooc8mjLAfJJAJEva13psrFoB81nXuwypZbFdmMs9W6gZYEha4v2L8Skccw9NF6qSvcPbyemBoZrWJxTH",
  "key23": "2uAxxtrqVJhfmazgmHLbtFmzBXTRikcnxkmycrDiVgAK4ibrbXtJt7QnMxGxeezUtwVMWLKk6BcrmWsJFgGwdEBk",
  "key24": "51fAbE7aCzPA4EUfABL6oDgLmW6pu3GyQK8vXpbRVyw7rQgJP4VCLzw1q9AnYbB54ajoXuDKtjhu5hg8sj9CEL2i",
  "key25": "4uZyfNGsmEzE45FvNWRtZ4isKXNq3Knuh8EA7gUUHL531QotWeQbCVcrbhooNGQBSJPcPHeGFDVQ8CCHHZ8Dvmmm",
  "key26": "277HPwrgb1HhCV193SVnNP5bGJa8wGmMiBtKkVXFx4wEbQCBAjmhEADK8WFYzDa5sidSWcRht8zDrkiykGk1ax2U",
  "key27": "iyLfACNu7cVSyGkDppFNKGrLpnqNe25c15DkYN2zcXAZuSt5JHEfU76vRsYMVj5Dk6ZHyUkonkknaw1NcivaRV6",
  "key28": "3XB5AviF3XSCgziNxW8FKHvoQSjevELfc33q7ZCr51f8H4SArThFhsRGsTahUjJQugcPKhD2fyNCKzAgGHhLh85r",
  "key29": "Sqd2XY3q3TtevhgwuyQAZCd233giwUQekqBxZJX1k6sPfRcyVWvsyvYkuJCMUzQwAGnrxUnywCVNqgTNoX7W6oD",
  "key30": "23eaYUM1F66k5Zutc9pUYifXrCwkZfqQUSTCu2rQeGGDQKKEmjxvmaANUsVoi68HF4qTgndKS5UmN4ZTm9xxbpbF",
  "key31": "5HLQM86v5mfWP5JFMrJXUYgD1CZpdf9z3ZNdd7tH5hmGY1iJ6zYGZf7vZNZuRbM1sC8f4wqMVqk67v5bMm4abSjP",
  "key32": "ypHJNfMcHDviyg7ibWCWnDqwkhLbPfJnc5L8HZX1oZXuYtTGPYNCFG3ntUe7ASBKoMqDcvZo27cGcpy72CNvWNB",
  "key33": "2byvbJiY9DGEMAbVc6svNj528P6VpeakrVNRGWXu2SePbWGQmzhzEqD1kaUJqHQsYZRDTc1cUFfcbMEPizUja43i",
  "key34": "2ghwFspx4LyS12WPGzycrskCq38S2FjRSZNPJ5pczKLSXHZUfuy9pzqtHanXhmkXbWL7vfzKhY16hmirFaQPkRXd",
  "key35": "2giGPjacdW1ESigBjgLnGS1pPJB1PCTf5LrTrEzaiz2BPvW9Ud728kxVLCX3Lk42WkN1fkoqDXveP3DzNbv3VhLT",
  "key36": "KqGMyekVqLZFw4BJPefoLQ2RRezzvwozEWsKRc4n4a9q3ZqBHSaUVY4PhS27YPfv92oqzFCr9yrQA6HMmi7irKF",
  "key37": "24pLDodg8kWm5SqNHc2sSdy7uUH9JWuBf19wvn7go1eTZ1q26hGjftw1xP8qaWts2sbM65EkVmuKtPhtQe4VEFe2"
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
