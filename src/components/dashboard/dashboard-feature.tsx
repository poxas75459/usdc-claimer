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
    "3iezmv89g6jHCCD8oZHYA4LeTJJYQCwzaP77iJAnywKsaamYHXVXYwL8GiTYSnm5v9Q8h3sbEqKaDRu8VS2bHLpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T7xaTcDZUQJp2DsM2ZmDksh2BV7nxbnPAST2G2LWo912Vw7rtjp2F8DePbGBkt391mjZWYEbCxcayM5wjmKXLuQ",
  "key1": "5swP9iHNHgqKfjaQHYADxfSgfHCxR2TgpmJXEBHAKgjVJEjdbPk4vdh9vV5j1LNgLgfN434N3FsaGpY8SJvBRBd6",
  "key2": "4E7Lp8WiQyt2iT46z3Dq317PzzG3YarguquyZASKJpAb8KNrsneLGJKSfTnURyK44xMEtPzS7QPPMuyj6kFDAGeB",
  "key3": "2gR13EE3fiYGr7WGqU4L2JT3S8TBYydseojjhiGpapELVhSyMp2zVhhAmgCZLiXRz4p17xBLADRkRCsanSvrmbbL",
  "key4": "2sf36t5vCyfNwAC1n897hTxvLXSkbpuPDDVN1YFj7EgepYGeKcqFUSq7a79pRS5Toch1DtuLnRxtFZUVbbRpQigK",
  "key5": "5X9PsT76yiAxycdjTWvgqVncU5vYTHikrabdsUqV4JVqVTPTvqGCd2GBgWNyr9jcRjJ9rxTmyUe5yJtWPdd6QpMM",
  "key6": "2fbN3dQUbUbfHaR7mHaVVhNKCVXH1kWUfjU84We59AdtwptB2dZ59fgpU1K3uLbnsJUwoFTvqJ6bbmiPmLMuFkNL",
  "key7": "5EDLVE3xbfPBH17LjfYswikEeDP5rmLxpUR4m5xwjPL9JJVDKbsRzhLRm82xeFTqCDCWf2JJ85hfN5KaCoZUQdXA",
  "key8": "4VHsSKztriL2TVVptj9nMUu1tezL4RUTZozbKFPPBLLa338q7xnZoNkeGaut2SnTGRYppVsdRvaj1ReMg2Msj8Lx",
  "key9": "3HhgAJMJMnjBy7UWcjnSdjN9J6fvJNbMx9fRySRSL5LgtE2odXePM8WiT5GrtDCoVFdiTKxCKaxGb9uGAW4mjBV1",
  "key10": "63Qf8CH3bchfL2TAB5pZMiJhgGGsEhU1CvZYsmAkZWWhjMciscyGaYn68TJsLGMLVLxCSGPArbKoVcPWDixcsnSC",
  "key11": "2zUVk9eRngGtzt1UzshAjWt3gLYvmjfHNRjnuvu3aNtaPMFe9hsfNPGKFMUbWorcxutqigZh86kWhJmtTUN11TCA",
  "key12": "2TbQ1AHNx8mzjuUaMnWCBMvghDEjURZ2NywxuH6V9KkE7z7yUugod5XDRM9YLMQBjid7dimhrxdWNgfQtZtXBA7e",
  "key13": "5iFS91XcioJqSiGB6mCH4K6gmBHjBT5novBY4er48mw73e8oBeayMa82hBNdRTZq3wGAKddPPiWahjgk1Zvbt6gZ",
  "key14": "2u6W2jf2kgYL1vagTeCoC8tPvpSdyJshcs6X6StYoJ8PHzhT9V9KLVj7f1zHGr4R4JoP5NhnkC1xwDAvbjSzsNsn",
  "key15": "2zrsbjNRFaAd5ZpUyejkFs6TFkJgLpHsKn4MvSaksG3PbpP68qsuV5NJeAwWYsoS6okVb1ft5LGQNhUvb8C4CMPZ",
  "key16": "3K7RayXsfar5uEXq5P1JjT2FRspdbDozcSk2H9NnN1HVmz7Tax58QhNLYRbugnPqALhrnoteCFf9YYZVNf2YdAq2",
  "key17": "gnbuVmpV72wDiZm1pDMSUGdvvfUAn8xDqSM18fN6u6M6jSMVQuNxgnn7kBoR31fp3mP5E1vff3JWdGR7bS4YYpi",
  "key18": "2UKrvVnxjQvVnaYBroGMjdns7JmsZwCDBjhHPodFJKFEwYWSF2tcJ3mgiSZhDDZkCMJ4XceyWG4VgCRHrRKXCnvs",
  "key19": "41KzG7uQ2vGuz6uqNTpJUW5iQZFgVvWjbNEKyHoFiUXGFBphmReKxZgiHybNnDWTKEQp5KFJzCK9fxqPYpWcnmxD",
  "key20": "DZd1LpuekrRPCeLyaUaehq6nkqCwfmA5nmsAtrMWaAPgKjRnkqcDvJdLFm8RFV1xtd9PywUUus1GTfqDeHDqSHP",
  "key21": "61kUBHTM9UTmFxe7y6wMbQBDeLp6wGgaJCCxPVVk3CKK91pN1df479dzHvLTg6nwBquLxuEoJ8pTXbzW8wKazEER",
  "key22": "4nPrUSDnJS8wzVSz4SHTntou3FmEjLAB2KAgfdhgS8T4fCu4WpbVRhfvAj2pKKTVqpMkx3rd8sgC5StEJyotNBip",
  "key23": "63PqJgH5MutLb4EPFAqGSdfNiBHYcaxYYGncRvHdxntmpL2MWz2M7sR2wCbDrxtAprztuDZpCXsy2fCcN6o8MCJj",
  "key24": "2CjF6nvctWrTiCFEE71yr3ZPP6G9mTRqDC7GvkT8Ja73iieoBokc1CaMBM2mz1HfGk6JBBm6H8Kq4SnUY5ymR676",
  "key25": "3xaQVjpd1X1H4Jys9Gq9CJJk4jjTthkc5ZhNuT3KVaDsXPdqXPJaDw1Jt9NV32V8d6Vkq3iLqdhX8YvT6UEc9mp9",
  "key26": "2EjLabKww52ut8yrcoRh7gnxiW27XnsWR9JYfNm3Wm2vv53XfWNQ9pVVjRpZDa3iaWxk1Bk2JzQ3j4DdKkh47hid",
  "key27": "dzB8CPuBFNR88gBGhK15CAwooY6ULDwZvii7A8h2aufqmFtuhbSKazpK2UCEDnA2MZABHr4nCv1otW4n7ybgp2w",
  "key28": "2CP3urvoUkmt3uuBBcfRtetohq5MtrxfJum49VRJgdDKtsbndVBJcCyHXP2HHrvBgrX36ECQtNM3YF4DBDyWmdPy",
  "key29": "3TY4h5xFbtUjxyVDxgPkpFHwqEp5LWCuK9j961GyDuTy1tkUguCE8xJfDm7QdMaRJSJHGBbuDF4M2kV2dFxuT4oc",
  "key30": "3hUyTKmNgd2YgBKcsgJRGscupd5KyayR1bE2etWkLMdmqxXMDdu8uL7w8PVVmnavKD2jsDTgAQp8J4vBh6YJrTm4",
  "key31": "5HX58Ub5PrLH8NwTtSBpNBqSHLKJu2JfFX5SbfgFNx85NLmtwvJA32mYn12HbDMaFKBH7hi8w5Vs6s5PeQn5UsB",
  "key32": "2RuKc8FKAoK1cgtGhKDj6east5AX63aJcDgUHiNFVRDuv5KSpE9JwkHptByk3ZxLM7uH5gb8QFByMWpesTpwpNuy",
  "key33": "2nLDjdLr9peCSRGCWvFivYe7c9o81CJH1zU9bycxFTsA1e2qPBc6BQ4HM8L1UtUHBpG6iaLYmYfp7uCySRJneHNP",
  "key34": "3DnSyDfFEtfDi9v8QsVo8cH3EmnmwtiAKf55ChXo6pShon7WJrtdBppqfCa3wWiaf15DMv1wfvrzqjmzy1F9Czif",
  "key35": "2RAw4oqDHkqtDSyCp6vSTTpcecVaKP6Cm83cLS7858L39o26m8hrrXXP1udvi4CUhf5XkDfBofPzvYCJYQVDye3s",
  "key36": "5bV293azgp3EQBs4nNfYaqbNibRmCQRsXUvBG3UkFgufTo3M6CadtZe44xg79mkKR3pPKPEQ5UpcN6o6t2ai8fvC"
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
