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
    "3DAMAdnT966QAxtme7eHEDs1b6TzFnJsMJSPTemBqBchJr5kBNjRhM3DFNgMuN2ENQ6Z7KAfiY9UVgH2jkEi5JaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w2xsgyH9o4efvojqkQjfv4K4LQJAjn2oG38TveAUbDQo7H66FzndVzwyC3viWdhP72n9jZByWe7kLUtcCfDbthJ",
  "key1": "3kvkd2KDoB94YTQAQQdbmoH5VWcoe3S9YQsKEZTeDYAp1GiHEMQX19ysvfdckBsHC6dkt7rE9C3d2Krr4g2T5btx",
  "key2": "2qNMjvhGT51aSbMmfnQni1TyYVGKH5sQqL9JY2j4WDFupmehTnm8oKhokDPHyqZL45ULg8UbLkLVTN8Y6UhFARjP",
  "key3": "2jZe2pJeC9xv5eByLTZq3hU44vTisSfBNUSm4brMYK5XeDbUecbodvi9kcEasdY9NfZVw3BXB7HZ7sXMniYxn6GU",
  "key4": "1auPnMyBGeYx7D8PngxZSQXUtz764avJWhLq1ikTYiwTRHupXkUtXfVbPMvLuNZHrPCBbmxvBfNk2hgTRTHNZUg",
  "key5": "3TqbhNygrbeUiCiCA8nwhgSiv8ofuTe1iHhewzkw7t8ZZ3sPpjTi7dNod3n52T1gU3xeiqYtc5A9NHkXYT3vMHDC",
  "key6": "2kw5NBo9ht9bwqr6q1BCi7JEDg1bdfUKZiTNvATec369sp6468HeoPcJvYpbuqimsunP4Xh5nXdno3E6zqDkXH5c",
  "key7": "L1tYkQnaJ4jUpCLn4JmTS4ZqqnZ6rS5phgXF92V2MMDcM2Dgi9cSCCEutq5PEmZyrwnPbcpAc3qgLkmVquzywve",
  "key8": "5xqNmCbHJRAdfL3NLP8JTGrcBMciQJaAD3T4aAd6oJBYJMLiyNMPoJb99AyVLXkT4zYbVc4rEzoauzQnrcFerddc",
  "key9": "5F9WwgrqoC7M1ADTZmi8EGShwMttGN1htUXjsPdY6bwsACN2aLmZ9hqdtfxNp4FZ1FdgUvpdeh8WfcFw8WAoVVtx",
  "key10": "4WjiByyY9pt9KNeLcYHKuCpCaWd2wDGRapFjmaaYp9nNTG8eCBDtDdY3rUCnVsqauoS5HC1MEpdhLwS9QU6d6uTi",
  "key11": "EY7xz2HPt82YUbCEQTNAYzTKRVRTPR8adtQMVaCv9LzqMFGdnvdL1ZXsYBpk2uYyW9GtiDZw1zTp2oZNMioCaXh",
  "key12": "C21jRw4WUGF26i3pUWM4j6CnQRMf5vCz5o51wAV42xFyxgn8FvH1SFQVoZpHUCes9dS8gqwkSVeDMFP624f7bSU",
  "key13": "2KrrpKFDZa65Rjrs4b1xnioHtejusM74qGQNJVYUjhk5okDU1sKFB3vWGR3BHVkffSBDFk3nLZMZrZy1oXA5RpHs",
  "key14": "3iDJpudy7aw6PZoWPtRmNwz1QsjiDKba82mYKnsc6ZDzULwmi93zkmchppQy4ZdzzLnfHkg3q2HS8kDwP2adqz8A",
  "key15": "4SEkqiTjx42z3sewTzYyaSRM16nwmWcMDaa2icfVNTBmPqzWvzJSMzKGUGrQk98LUfKYAmjoNGhNhCweiRT3cege",
  "key16": "5kKmrkufgprX5pQdzVsXLGEZLZb5PZVs4AF8hAwqb1iMGZVaumEWoV5UFY7ZPtmq3cVnMNeq4Bj7aHPfDvtzxos8",
  "key17": "4iF6wm6nS1C4D7VLA5EJSpjy62BQEKzuK1CXNxojT7L3UKTXBcjNv3i3hqekxZQvx8XFUUkFAph1W2xWewVR7jFw",
  "key18": "5QMe9VqBzvpypShDFDiNAwKkCzoE5pT5JCXXugToxXvJonjA59FER5oGLHHLSyx1tyytCgA25hvYtDmA58xZxCRH",
  "key19": "4CH4a3W2JesqLSRXxTBdTSnRLqLfsAcx8uibnz85QXhi2sMKoay6E7yTdsmCtQh1qhYh5QtnK5NDTxB7gvYehJiC",
  "key20": "5mxNc8JYUncvrMSjWGeuZGrXkhhTV7FGaV38FrW85xV21co5KsxWXWEYCsTEH48xJLxRFGBwqdfqtLqhjjoBHWTu",
  "key21": "5tW4fyXi2eFb1TzyMs1mAGxC3eQiuEV6uHfj32zUns5s3nzHmijpX43Bje8gskCoh9S1gneC3yHsMuyB1cxUhwwt",
  "key22": "57yur9YJyVguX14yCxA944exLatrQTjiUdLxe7KNH4qWALkdn1a9EK8fQMXZS6eZ1H6gPS6SXx6cGVYSJXRFwZ4U",
  "key23": "4HiDLYnViL3uUJsXFbzWeK54RrSJ36Be35WWHz7EFtHEP346Fa84CPCnPhdrZmVReiqzJ9uPHDydmuV7RAGmfXdq",
  "key24": "4cu6wy2SEQN4n1nGgk5dBKzB6poJ8mLxiVwXFGGrmmDBuHXTJUy3kDN2ZBUFMPtMi6RbWKZ2HhsCd3WRXvaGKrG8",
  "key25": "2nqoMLdg6HUK3hwoZ5bKNBuL9DjdeV9H5G9t6rYfvVvLj7uVcSRmba7Kd9sjupA1EiDRnJRkAmmfXtWjnHvz28mF",
  "key26": "4h9WyYFYptt4paE84TGXJR5PQossqmmSobD9BLMvkqUuXpQP53CQQRUyyPYnJFoR8reMbC8LE92kRZPAEtro4Z2G",
  "key27": "5yKXnRMi6G81AsiEuMmGiwWqi291br7Nd732FHM9C8C15k3ahNGkzS1nWpsMEVYS1ibdeXr4vEBY5YRp69E4k64r",
  "key28": "DqYFYFzcvPkQHS8ziwoevZe2gVXMzaUSUxhQS1UPpemoPbqMgNunZK3ZC3sZjNPaAFEbWiTD4UWoExqccUkhdJ9",
  "key29": "SBZ6sL1sGvJnrKJn1KX3Et9LEs9r6EneRgwAPAS8LS7ZQLVAK7MtdXnfm5S2PrqWwuzrjHtznzPASvUeX5hRUVC",
  "key30": "4gEFdiJSF7Qt9VdMyMYFZKHLxs2ipEUsf8NkTwSKhncMvanVvS1cFHZMxTvwfaoPLWzHpU33zbWmwvBFQSFwTweM",
  "key31": "54Ku9HbMXkskrZXnQz3E3w8XDNzmLEdoT3M98SXPnHC3DwfftsQYsaHJBR7FMM8Q5TrzDyaYnjKQtpeAeTreyrHc",
  "key32": "5146XH1JbnAZukHAxE8GwbGS1Tmts3FecRbsM4XZ1WztHs1tzeGRPcTCMknNoKX5ozH16AauhHc7DMT8U8Hn2GBN",
  "key33": "5XpXbmC84pjZV1gBNewSvdA48mwwvEjU1uM5mK21bXy9owe41ELHdRPXopjeEjKCVsQG21oYPB8oWDrz8sZgq8Ca",
  "key34": "3ToMd6TKVk5mzkbsAZcqudJwertFzFHCTLCKKQqaMQHEmxKshptBUTQDZ2N4AVsQzNA5ir1ke9UfjVhD3DX5jzvD",
  "key35": "49qucDiztuLusrFfuiAVt9BSP1NBqVDZ85GdiHc2RkdPCeag1NXbo25JyZKww1At8yrgSuFQ8ArT2bKjc6xrwW6r",
  "key36": "5t4e7RZxPkqeLCQ8oRtScTpa3bAMHnHRczmRGwspd5DRktAECG85Ddh5RCq99sHixsPNXo28cqGJZKdNeXsp8Cru",
  "key37": "4qesaYVNbCgifWB12tqo9SM7ABtGdv8tAxaGtTcEvwNfPfHgWZRLCrhJuFxE4mFYjcuTDkVXDvzHT618JNPZWgmu",
  "key38": "yiDNo8uRGXbSFTBiQxtCJMGpvgYCSJ8dy4ARQRe9PnyFRgh6x1P5hHanJUig6SHwStbfBynFCLeP113zjMtQxiZ"
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
