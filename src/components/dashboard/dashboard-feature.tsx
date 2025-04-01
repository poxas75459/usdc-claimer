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
    "2z792D4JXvddpjqBshsxPnPNp4ALktcXb1sWmzM8Sfish8B7cJq3XpjgShPDutaDA9H36QSjKqpWkt6i2up7bn1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGJR3RVtmnWyNTPwkWeWP2F7vvLKKWVvteLwdKbesEEsHP2sVucz1D2fpypvbTkMjagR6PSDq3HmMDzaacsaknE",
  "key1": "5s5NfMJrJkSEqsbsfxJaM96XatqL4FqQ3DeyXWpabKcXXGQcmRA6UdtZpo1PftCZjaXzaAuoUfUEPohVWPYqns45",
  "key2": "3WYKSLWewNvdENJXBN9UqXgS6haQbaaAgMSMAk6kPknYBZQKbzNe53gL1PzNR535K1cPuWFT7ZrtjMXHd4XZUUDP",
  "key3": "5G4HtG2Lz8Bvwxm5QQFp2W1vK3e97qChGo6o5pUat8MpC4WZWwrVnK41GzZhxyfPSinvNsaXw7kcJu4HQriyLT2Y",
  "key4": "5CAv7CYiC7UhXWYJXhCFjP9i26Bgg8Lzjm7sYFRtSKNvneyAv7R7kGiKH4RjrV7jUfUooNFunCbi7sczeW379CEj",
  "key5": "dimZxP2FbqYJXY7MHr7K1KrRcYimykGsZThVSoAKjbwvVMvpcTqwNaowWpHzxbvCvC59twpY3dkakBt2FTJme66",
  "key6": "28YAGwJXnw2K2QTKBYDhqpyGRxkagYsu5GvmfxqUn95f4P8FRjT7APRTZu7D1MqaZGgU2TGVW9GmqGYKPx4RYWxe",
  "key7": "2t5HHEbYTABEq15XkcxHvXmuJi9SvpG9Xkqogn9ztahYSVvP4QqPhiNEQLjsXsoExrekT4n3GsvdMwSegkDzFGAL",
  "key8": "4S8bsY3o2zoeEvwydH1gd8SJFTdCEtwoqybjBxskjcZa49fCFz8BSc1w3xqXByRzc4WJBeJUrsoFKa45syd8kUj5",
  "key9": "DTcpNXRiYCxzXunXoCfwp9vsR3GxC7BGREy3Ph3a2hegfNzLKnKRn7P1Fsgm7rPJyTrFHNLCFDrz5uTZpAhTGj6",
  "key10": "MXB5TfHpzWZMw3CYQR3Bfxvpx3FF4h8UWSQLtLoaqsZx1xjMyBDB3UNMM6M7rGDP1EMmezrVty2fHwenpVdtCgt",
  "key11": "GrPfS7viv6dhQmFBanJqTZ3WthkayzPFep32bE9X9C2upywKmyRxo3sLYPE6vNPoQSyrpEZkbJUpWfN276ycD3H",
  "key12": "4q42RdHmcJSkCWZMCCwUUiCJSYq4hU3ubSVcnNjPVtvPhHEKmXk7vny1HNk6j7qiL4ogs8pE3FCGXSWBZyzFAGgR",
  "key13": "5w8vNRCusyShhmGc3Z881eUB3yTaKALzweo46Bbbvxqi7eBrVMXKkse8UPy1bnagez2StgCnJNh8ssk536thQ2Rt",
  "key14": "3ZRdNJC44rgNXrzmtjEb7tU7gFs6DX1EpkoM2kk4LrCvJTkLHuaYc5bhV9ThsDEueSHJ981KHyJWAEJoFtBQMMj5",
  "key15": "eNaQzi4zX3wZKA4Bq8RkvN9huong9EdiGc8b8beGmKebvhk88envzf5AR5f5QW7pNWs48d5GJAsjkhsmdjjeCTQ",
  "key16": "5fY4Cx71QXekMChz6nznSWTsVS7LsYrXh1T7r1tGB8hLME6syEq8y3tbPXsBsZL8Bga3LRHJhnvFzYmLzPLgP5Un",
  "key17": "5nQvS9qrFNeoArmutJo1cAB4NnGaBBTriAftEmT6kGhEXP1V4LLCxDnME8fLpkyKXpCeuk7URe7hR7vjV1yukeTf",
  "key18": "2CiUJjm15FRfNPsccAVjLWwaudVYLHWmdRSUucy1RNitkh1ejJKrGHiWpgUmRscTQjP9GSav9uUEmy6pxzknXjKS",
  "key19": "2FoPHxN9jWxo27oMUf89FNh95zRsKy6UQEkgTgrPuHkqtoHrpL5UjeDH7euMLeL1zaSQVW3sXfp5ajUbEK3wxnHR",
  "key20": "4YatBCqnWitXKMJd37iHsj8NAWUSAuTfSGacgTvYLNYazZJ8P44Bjg6LjwqjmHvUcy2a6TB61wNXZDah3WnGThDt",
  "key21": "5NaUb7SM8T7gBe7q532bsF3S6geST9RwUEq5LSoA6scVDSagWV5uqdoN8yokTKX6i4Z5oyYjyPXcT5Ped9qHP2mh",
  "key22": "4hUxkMkT8fzn3Bb427wYgZ8nGczL4EdRUhCWz98n1dKUQqAKwgvh171UwEDGJ26ACfbp58jcUtVnoVQgojjSjZjW",
  "key23": "4dRgJp5eU5r44qzBCqJmVEo2hwDhQFqg2ZScnzBTtVjGBiBhtVA1FLnG6paoNbRxUD72a6rDvApoZGHRMnk8N6P6",
  "key24": "36LvA6khebphSekXE4chLyYYNNJ2SAxEWYiYURMYjP42uDHrZwRGc1eXLT11UY9TiB7yZGn5WVTMDYkvhRTqfug1",
  "key25": "4xYgYskBoJNRmqgh1jCzhdVTJ2wE5FaUs3Ag539gMTbUGB25i62tKdfoe5A6i7MSYrvEY5pCtSxptFXqnUCtxdAh",
  "key26": "F2q9kZ5QTZEuPXASGaW68eX5XgZ3owbkwCjtPsQge6mCXp14D4GzhcgKAb1zcNefiDdx7GofkkjHcGpsn8R4156",
  "key27": "3Etxy7gmqa8zinFRZ2FHco4PRuVQaG92ny2bacsjfD2j4pKWj2hfhm93J6rkzngwL8zBFVpTwvsrqkacGobCNaA3",
  "key28": "4xns5a6wh9CSsnodYTeGt9ihiCNDCNRZZswgLnotWABtRyprwaDoktMyuA1WuU9hwMq5NmrodZsVYQyhcx3wUUUm",
  "key29": "4tndsNaCdNbfzpD1cCwhMc9DhW8eV7TeFpLVqEbskM6kxb1N936byPURa4Do1cUgRxF6o4FsAfe71KW2fV4m3fn9",
  "key30": "2xXYx2Qa7Hv7eU3zsF3yPGiuwJW4xfhLk8Q8RxyyYVUnfB5Bg2VcGgxzEDenU8n2q8G15AWLdnRPHXH4EYbMGUnS",
  "key31": "2DRQSTUM4LdYqeUpLT4HadEFoeHUiZrciaLV6omQScJojgnBjjDSCCRff3f7W7oHzxzqUQgMcn7rzM5dqdfB7Tm7",
  "key32": "Kn9ha5UnqoSGksuALWeVMSH2VEcGwjkekhbrYqt6bCGhf9ku79Q8Azavx4XWqzmiUsDx829jcmZXia17ZLFPsVo",
  "key33": "3njuypRsdtoPmadyXXAmJRm4XAe5iE4nwsfGc24HDVhTQHV8o4THbrwkHsxzErmsduVYKvmbQMXF2X9k7rLkQBNN",
  "key34": "4J65N7PQDcNN1UYNWpWzHRPczRFFovuNzSXBBw6z4zKMifZcjZag6ncjukrY7USwQh1gTETTR2MHFebCG9dgYXSm",
  "key35": "3T9NLDcZyHfjqRsub6XjgGjRZy8exvAZ9h9ghfdpmqwPcrXP5yCo4R1yKPjoEXLCMB81jWs7jopUEWzbaG37rgbH",
  "key36": "4cBEp428DzkbJ7QGrgK8amYJz7D2qVAEpYJV8Npb8PfVjAzfzYQH8jTcMeziCmDNJH21rG4QxU7rFPFdGSTnPo38",
  "key37": "4pgLXJdgVF22rRhszMVdaESNbeHsDVgwk79qPk1kz5JPUZEBK2cbDSHRMoNAdV7u6UPxDwRTPaTd8jBReH3eHUjR",
  "key38": "5TyPcfkKsEtUeRxm2pDKWLJTXNzn2x9ZaVpjtGBcx8wqVuxTLns8KSBCsg2mYJuGrWWAhtXg7UptVNhwhFYtzBiG",
  "key39": "Nd2dDfTWsHix5wjAD1e6u8kW63irrvEJWngDzaVTaoSpgEzd2VgRbN78KDgD7zZ3wD5QQGvvauF2LQJE3bsvcWG",
  "key40": "29V8SxJjq3HbqpNqX4hBp5Nr3YmtFMMmUhy9DaitZptJzKfg2HvqrXVqEyinRF8j3LUH9qJw41ZLb5Z71sExSowV",
  "key41": "4yEAEEJqq1Lh6BjEKwoCB7STwWKchwDoCY3u5B8RVthtDvKbDXT8m4G1EtGQneArcnpVcBs4qzmHkGqQ3wCHWSbh"
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
