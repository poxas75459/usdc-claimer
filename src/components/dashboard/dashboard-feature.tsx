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
    "AdNwb9mvPN59ufuwr6Vpyeyn79pLp4MCcQyJBtjGqKwCR4GZa5dvb4dgdZtLHyBUPT1C9zq5WFuo94sXvpQJZjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gbfDJs2qkpjTwi6kQ9vZKW2qUQeYygzvsytVBnjW6rcxHn8c2XQUBMeki6WckM7A3aoTKV9oghduDxwiANaWJyJ",
  "key1": "4LGbWB1i5oewyFUQdggvrQbjxdfFz6oLLNc9VUrnxNYaN9LUWBhBFoomHriTuFrVU9yYGX1eUy6VDWNNCgwTUWMM",
  "key2": "7SHBi5ESGhX1MXq8TcjzSM4D7ic7cPhgg3yBNm3SCqC3XnADdmhwSu3D125n14arMCNo5W29FsUt86Q57TYVVBP",
  "key3": "3AJ6fc9T7n7hAVUeKZ2ytgecT9nF9mWBFo2yGQs5iSngZmnBLmuU5FGX4bBRtEP4aucvinTft1kXLYMjwGhdwkgh",
  "key4": "2ynBKy4jmAWumDaQzwqpS2Fw3c3NmP6rTgwTaSw8fTntKCQVY7wMeHdUx8A4rNPZ54vESmWY666FjTZDs7M1mr1n",
  "key5": "4gGEPVMTMNFywdgyjpBmYwEiyEgwDJF5pS6Bvgw1YU2zVXPSw1oVSxujP6y8vxU8unauzqfujcHEVzkTrzJpya3A",
  "key6": "PYWLum4fFbrDjK9UKmUT6jjRdG3uey24JFe9etSP5TnbZaq17EG4FQnQxwKQDtFeV7YhHZkXsKJTQazkSDUZ9kB",
  "key7": "e3xfaKS1x8o5wS8fM3xKA23PEim3yvNHKhjXoRMkP2A2casRiy5Sx4Fc1PR2e1M3MArHiA9GjaBwKk9Bs52oX8R",
  "key8": "2VKnwsnkMuGZebujxuaCb6ui8uMjBR2238UUC2dPSu8v7MmbGmBG38yf3LjzNZTivdbWeigM5zb9dQCiCSnh8dJd",
  "key9": "254XWxFukFRP7cyrXCXe5qsAzU7JdPFEChmHG73acXiErdUjHpw8gqNGygNQLwRy9uxAtC1eLpkbLoUUWSfwyksf",
  "key10": "4Pt8gMfsPMrUgKsCkLcgtwJjzdvNeJitFwN3NM4XgBtbvgC1saUhD21MvA74DQuooxsiVMgKX3MtSLVomSoK2ABW",
  "key11": "5zWQvo2TTaqdLgqCWPoAATHK7Rdr54VJ2xPaAua5WcQRHcgVnNM7xVvAyU36gKt5TgtfAHJdH9Zm3wrvrCNaQASx",
  "key12": "5nr5Cp4m8AWafRUNHkrbDjsdTp4pbej8BHnvZZvTUbRtQcppyQurDV5EWEYUFdAvhiihmaoJeV7E5DCpGbczKmRk",
  "key13": "54cL8kZfZzjeuRvE5GSdqrtNMRMukTBbz2b615zg29C3umrHTHDrgknvQvkZoAGCJa3S2gUHUSFt7qxDaf7xRVUq",
  "key14": "3MWug2exwbyUfwLXcyMge6idUauaqnmLLK8cCDYyS9WfxK9jj6GS9HoY5Q5FbNTxtNFiJE2ceovuNBAR6tGG5icW",
  "key15": "4LwKsRnTSKEPWSmcZNACSwtFqSNpvGLAtt1MMKsvdC9Api75VJNnBxpjNqpA9sUmhfvctVGRWFJfSo68xvrhJXz2",
  "key16": "3CD4pxehUJs6ZdXcjWt1GqoVKF3YpzYEb5QySrq1DeRPh9jABx1Q3mr8Q8aUN53T6tFWjkq4tmH5UBCPYLe5o9kr",
  "key17": "3tkKkAXsyTJzikFP8ABGwfTXudFXjfSoyEF5KQxyQEG86FQrEUjBfWfBgvGg3HDUpttwDENoTGoHNBZ8yrPRocFN",
  "key18": "4XQJypKG9n4ojat24xuDWqJfrz4xnV2Efez8suR9PjZBVKdXkPSATq5PtLWCr5J7KdGWkw4cwHpGwhoQm7L5vfzW",
  "key19": "mBbph6rXphbcyMzT9yqDL2BAzApgLLq8SVkL4ZMRyKZeMLgDESdeKhEC2GT3UZFP35CnCeQRMtLh2gK3wWyvW5g",
  "key20": "4iVNYQUB7JP6dTA7a9263MbkreFUGKSRNKrVbFQsJms4mnyqjNyQqCpoNdXwJ6FFc6pAtkTmJ4DUGm1yX8fnY8Jb",
  "key21": "GkiNtKWJ3do4C1mwPuv6zw6EeazFhamHqwCraZRSn4VPLx1HAYA17jM5x1YaBB6mjMxWDvg33ctZcd3gbNvJhde",
  "key22": "4KfJj3R4iMv2ap4RH9vDK8P8jaQS3g1i58x8xTYWfaB3vWFY3vjpvCpycEc5uPCSBTL4syZtYVqdCQZVRbMjf3z5",
  "key23": "2KzbSWPjNbWvKRHJ9EUnQAiqHVHLvEZ5KE9UCtLbnhWgCA8ysMB8hcAs9Y2ErYR14h1VSX8tSrxjLjrR4Hd21i9B",
  "key24": "5bsxD1nz9zsweQvrGRVWFum4QguXUtMQZvvYPd9Xi4xhMqPdZABpzKkYyRW2bzRCfAMvXe2unbaDXyZwHVMtmnVU",
  "key25": "4vsu5g8khj6vy6sg4QJxm4FimowANN6XjRsJvuNsnA1hinfegE3CWr48u3Rf8mLGf2xy7VtEELccF9XJea6SM1GV",
  "key26": "3ub2nmayEDzgP62RiDUaCw6GU6tm6DskMT297jDmH596wJdiFL2vQuSDDbqYGgjhyXu2CHSWMZ4RcvSQJGzF9GkU",
  "key27": "2ud5PH5FeEeUG25wcNiANEoyc5xg6MBHHxDM7akbxJwJWeheE3JFqgv2VBQK8NBgQMSPt8RajsLvwp4rTczxCT6Q",
  "key28": "mcKEi5EH8hMTKzbAzWYGppEAUvg3EUMJhAp8BZYpZwgdUmPF3GCSjmFCamFuEhYqAWss7NzyDuBhGAjgCQzTyYA",
  "key29": "2Z26fSUtZuqsUXa4nYX6pouVgiTUeV17VkBWUeKZ55tftZsWcACc1ZrKo5Cdo3FTvju5g6PsBaZB72dyrkvp4ZaH",
  "key30": "223UqtsYox22i87rjAvxPGxGqSwJV88SvMyGPdVvKJ5A3PGWKR4KEMKUV1PXxZL3C1Awe5j3gnJfDrsgCd13YhAp",
  "key31": "29bywoHiQKRXh75BgwjGwjR6EzUG6WwX6sfDCkYtkLmnwJmJFQL3S4r6ymiddmUV8MoZc6y4Fq4FdfTeXyBk4eGA",
  "key32": "3QyDHhnTCp2KCtfsjGxXdeiLkJtWKGnUnbcP1weLWa6dPU4XKjGUsNE3y4mu8gVoaU36Lrar2rZeaU1ioemJ9WwB",
  "key33": "GBPR1zAMaCM8XUUPd1isHeiQnjy4ENLWv5VhxHKzxPYpmd9v7rTPVudQFhXSHiqrp8Z9C7C9joyjMFsSrKpR9fd",
  "key34": "3mER2LfDpYsy1yuSEW5MQFcGJGQYGJqDiwJTjNiqma54gwbKYLqr412bm1VPFM416jPFRJyPgdi9KGSz92uUEzib",
  "key35": "4SU3WbyWHsjjdMow5Qbbaq4B57SKFYcN6i3SvG6pivWp31fGXz5Yk2ksosXFczgwYpPjjTM7kwU6YYqjfFGMD6Bq",
  "key36": "ASucpaJRtq5J8AFGixaUXxrF8Qf9idE525nA4LrCZcvot3rewHtkHKnTNNxJSmtK2CYSsQ3kcEZTckhYmq8Z4VV",
  "key37": "32cc7TGBaCRkY2NWh4zyWf5aQNw32xanVAnfKfaB5yRRKAzDefSnCKkhW5tVsebceYAzXC7c99gkfonQsZN9X2iz"
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
