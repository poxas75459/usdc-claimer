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
    "XYwFPPsqZvg5cFEa3o5TyU1M5jbWdNGZxj7FChzvB4eMqBE1EA5C3Lgbcmw1RNiQSW8abSxjb7fpPcNuP6epvoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66fWRu4BWqbRyJhfJ63tU3yx7JHeEcZS26RE7ZoTCYYATq4TzJj2t9Efbse3u6VHiuPRgF4BfWcEYG9uka7b6HYn",
  "key1": "3XaXaPzDBQQcvbxEJc1WG8HvzFrZUVGG1vmCzKWQsQAPm73ksE2R8a8WhBFH7776EuP68zM22PGpQ4MJBs9Af61t",
  "key2": "2EMQEXf5e8YmqeJPiWcBpyEeNCNNJHM2pne7LQcmBSq336D2uxxmtcLURoQuKkovREsjjiP6f8TR9E4n4gc7p7r",
  "key3": "2ovC9EEMeE354wXAjAxTihDCMZKuasxHo6rv3PTNGyUFV3ookBL2bznH1drYPMU8QvGL36r7mc5pa5znjRSJFpWm",
  "key4": "5pY5uRze7VPjyN15B3Fps33ptc2wt5vKiXsb2tCga95cBJEDHTbLvPS2snj4X4ne3ouPDBVWzeQuiGRHhFAc64Tc",
  "key5": "4VS7sckSqRPXKDY5vB4m2jvTExCQYn32YvYsRqdh9ETrkKEyCfJaGh1H3gcXx4oMJ3SSKwytRvrEXH6QXdTvb7Jq",
  "key6": "4MVzfgwCvj4yek62D6DYmsmhwdsUdhkeWnaCt7HeVRRw2M2euDNEtdMoPJzbcsXoFfNe9DCQnHJQD18tciF2eeey",
  "key7": "2w4w6JqB89A3k5nSH27DkcZVDTwdUuCUkfLu1NjKCqFmgKdySp8SqviSeEpWd3juFn7upYf3DXGSPFTv2VHeQWKa",
  "key8": "4hA2Xov86QLKYNMn6hrxPXajJVJqMjL1jRgDuwWEEgCDKH9zyy3Z49DdPB9VJvfCeREj3MBxGUbYvVcAEvawnRq1",
  "key9": "5ajVL83Ei3HW5taYoT4oDVjJQjMY5YvNWuWBRQNFkfH39xHVNVJ3FPzvLDTqwP3tKv9AFFVawLymcdSDeHrfv8EB",
  "key10": "3memzvz3snsDe4MP1Zk3RhBWcVMdvqRkVxtJ7m3G3GSUE4jj7A8e21KTkFPsYeTvEuEehwwMyPG6fzEdotyMXe9k",
  "key11": "5BUmTCFJnUPC9ZWFpeZC9A4vcznkWWeN3hu6VVuZf4RfaZZD4evFsU7zMw9oHyR2gjV7KFXsPDaSn8T2z6k7Lpf7",
  "key12": "4WvRtsgYyLyoQdB2aQg3wXUuGDXcrQ192HuaFuo8e3Vp23jdvPH4QRUBvDAfNAUdNkJGqhuu32mAs2hfppVMTkDV",
  "key13": "29KYYgzpGpvNyPHnm5CmEjEpT4sDahrHcrhyt7YpHyiEix591t371HUY5cMS5zG1ipJM5mGhYUU6gnYS73mpuBqa",
  "key14": "5zbiHmT9WwQsBeu1rkBbQoQkCwS55d1t5iMBDB4sjmQTuvHSjnNZvEkyArE14GGwkUHFeMRzWbAHP6ZKJnDGDsPa",
  "key15": "5FufbkST3EQ1v6uHyq5fmaWr73BYZDvXPatyTCq1YTDyeAiszDnXLFa6XnCpTFQbG5XhY2M3S4tcehisFHPreVGM",
  "key16": "4TXCHbsBkgiWhfXsE4BWTMsxcKEuVK3Z87SKWPFXvu8b7eHfQDdQRPUU1J22aTcctpiiqrZ7JRBpaWv8ZwXSqzW",
  "key17": "284SS9YvWJuqDJtJA2yYmRsyHu1J4omg5BfiCcLsaABgr8Bn46xX19mZPUM5LNBRofZCV1zPiS3M2KNvYebCqFrk",
  "key18": "3w4cDY7agzXEpWWjXN4wXc8hKV7wR7p2dZddotfUEsPFvPx6rNqwt9oUuVGMZKt7g6WvV7dw4gXuJCFn1KXpvizx",
  "key19": "4MyCAtEcYpemi6x1UKqxbCzuF3n9FvpuXTx3UvBMaMMPpHTGRu1ebqjPaAEfeqDhg1ZJq6EHimbEcqgvHP1gkDt1",
  "key20": "2fWccoBUARVXHzZFt8zV2UeyuS8HQK3U49qGKMwGEpFtrRTLgdfr7vgfsW86TNqvamGq3x4fddqUat2UQRyVVXfF",
  "key21": "5paXz7c94Mgb4Bxsnz28Ck4ZUjezNSDZcrJQc2M3iM9H5X8sA9iDnL9VBETwf2z6WSta691z3H2q4gujxXJd4iVm",
  "key22": "46jxzHkoYxbrA7xMsFmbnhvGCzNqWQtWogstbwtCkEEy8H7By5xRJYGRTVbrujJoJWtZ3n8ni7WRSeiapaWMKNRC",
  "key23": "5EFVvgNzvTRdxvw3jxV1CLfL4Cg6ngB843YjxH7JHinMdABNkLJz9aNyvV6VFGzKXjvqsqgKbdKa5N7xLyVzLn1h",
  "key24": "5GtomHFje2aQKGtoEFeYAZzz2dWTc8oHA1pnEJ8ernmsfBTRfS3uAGrQvUSfShphj6rbCVjZsYA4CxD9x1z7txKU",
  "key25": "joaiWzEBQUhMREqsinz1Zp7V8cPn1BiG3krHqYMbxvzZmS21285pHUy3mTWua1ZsbGbjYXrmo3UJV2LSuh6ToFy",
  "key26": "5KK2BK6rMprruqVMuQybCmDsGvBSPzLZjyoEyHh5QxMBYRqEF2r2zsCxBPnrwJ5TSox55cVsbq4HhztNgqR3cmpt",
  "key27": "ZaSSKQBAYkukBnbZpeYxKeWXXUnwkjVBZtDXZBuzQZ9owkgzoriAhb6sZobMhEx4T2Zhn7yiWMuA5g8aDDKayjb",
  "key28": "3T2EpPYDrgiNcmVdYwS3YcDPWDriSPd3TsTViG9E7ja5CCn2NBXNhH58JPcNJeSmNMFN3iboJc5RitDgP7qdsArw",
  "key29": "5ULJWdTQa4o5vYzXm8EW3MECuXaRihNEg7rUNsGgnTL8aFP8ougoo1e9xUN5FHoNAPRBHaN7jze1DPd7rCBxyJXs",
  "key30": "5tUkz5auD2T21S9XufE7RAWUe4WKLYg2LTnjofnSPgjAfSUDVGDB521FFKsEZCbV56f81KDyo8iACkoCpHaBesxZ",
  "key31": "4VTeaopx8WndVtEV1J42QJmVtUpMUY3HdAzqQCFQ4WmAaLf8ifesUTCtQCHMvzn88rpBeBnkfwJyh2YJ9yB2VMqX",
  "key32": "3vTxTPGLmc2cn9YECPALz1Y4pz8MCBwyE161wzbfqpHj5PmktskGfxb4F3JCQPYqonzsUbFNhwLHiN6c7L9BTsEt",
  "key33": "4CqBdxg1DJLzvu7z8cb5QnVTWuB7cbAe25r4vJXGFa9YCTziFd5r6DQ7svuq4QZaye7wr3psNHWKgL5KwVGNoGcQ",
  "key34": "PdzjfCRVuRqeGQbkG1mHdSVHTgJUohtt25DdQy69oi7WgyDJv3P5DTMNcvSocYowiBSKEsYtwb5vhLjDsyC1uHM",
  "key35": "3ZoxBw78wNbyS6Wcsg7GurUD1oRJJisBZMQhHC3URXRLyjHCQQGiTZVycrtPo8fWxhmXZbxyabgrJqhb3LYyoujL",
  "key36": "5Shi4mGWzeCUYRLDbcTuA61utKUdBjLjdr3L5NMEGG887ntDcAgue3cPWxEh47RdEpwhrcEb1EQJ9UjT2yVF6EnM",
  "key37": "WtrYW9kQRgn95ZpTuz7BfA3f4YGoVut4UngrQka3VQY7pC9GqAT7c4JoJAVigwJoQC1KDDjFuKE3bYvFGQpdCSY",
  "key38": "66JhZRX9KCcS6Go6ok1U3e1xkGhQVfK1wnq1QRTnjsfm7Fj1u3VC2Q4EiuVC2FH6VtUdJbZNgRM59ufGsjLWoxcH",
  "key39": "125ivEs2YSdi1ci2xapteV5Wx8btNUMDNoDmj7LHD6dKVVBAiesKA7ZrYeN3nwTJdEt4PJEH5293JyV3aD1VCRcP",
  "key40": "4sAeKzCo7NYuUXjFd3oznMP5hFdU1uQynoP16GhAuECit5fHHm7Md4xDZVKH6NowLWLWyNKFzJnMShWgUsMnVVBj",
  "key41": "2E9tXiUnbcMR54wanCJ9N6pzQ4KbnVcPBNabT8XHeiZ7bGYcz1gQHzREHkNYQtJ3GZL7ENVhGFvwZrqcmhZNMNn9",
  "key42": "2pmRxZun6xTm1stFsevMEeL6UnTggrerYMfhBVenDDUweer1WTHM4S6UroVyXtdo7hC9CeEBt7NNHFrXKTBwQ6yM",
  "key43": "56iWzEVrKqXa7mVvATUJoueDDMBpPfzQdXMrg7PB1TttKg5XZ4ADAZvbmJAdz2TRo4RFEJT3DCCggPxZwbysugcC",
  "key44": "Cf2ELda3NVwDcJdNbQCFicebAweMLAobvC1E63C2RXHAuSYUAxVpFFBtq6b4dem9vrgoCaaFUBeeFxdxHp26niv",
  "key45": "4x4TE8WLnPD7LrmnCRCR9YAwK31ikEepBjx6HtA5Ugj6RLFyJGrBeaf3pCH6sS5cSrN5XLkRV7BHhsyy9dJrVWjS",
  "key46": "5NARNRbtTk93kMJod98WFwaCnCbNtQvTev86kcHxYcpkEy3VnnE791MaaAD7kykkEpopoQTAv28EVxhp3QbSSaE3",
  "key47": "5R8YF9W4ftUE3PdK7LhBturemjQzFCs6Nvf2K9a5gh68UDev32Z1Ru2rcqPJSgj64zn4tzduwWTswgNwd17D7nHm"
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
