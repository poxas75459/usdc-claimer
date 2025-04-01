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
    "49mhbq92EWs5BcBjNgPBLe84S2nFhC83FQKdTACuqp5EPGrq3ibH9MVxfHQ6Cc64J48btDumjnCpNKmxTSobqKma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccxt6xTYRkXu2MVyUDiHipxvx4Yb7YZafB5KSi8spsNf3SXfP1ySvc4widnnjnwTsQrVDG5d51sjwThuWiQKByi",
  "key1": "61w7w29hPWaXiVquH3uizCK1Ak5kYFWy56Y8twPmvAtzkEn4ZqB8a8DV67JF6sYSNTGefj8toFFPzB68yhR2Ni8s",
  "key2": "5Bka8UZ4f6xDj5x39Xig1ZwCNJhaELvHEGgmTks2fqruDutpMGthnk1zAzauJxbNAzYKVcQzZLNocyXgn8PREpeS",
  "key3": "4QZUmL4DuiPopEqLanGKdRtQdvc34ptGdEyFamsVDLGTjxf98we3PQiXde8n3uhdGGbVaadJZ7QtBnFYDVfQ6627",
  "key4": "5g8ZfMcuweoL2R34drSu33eApRY2SLADgjkCUdon1ZZrv9oqP7tTbFVoKQZ6hxFnS8YKHxLqKuRm19sweFpSgmKh",
  "key5": "EdCgz51vEFSZzLvgLLYWRQqCLcg7VENLsp9tsRQMLGGD5f8u1NC9YXEKSrw5GJJHiQYwvZT1bpxU62kiCVGz1Db",
  "key6": "3wP8h5ePt2n1tPx5qe4xUZuwmVyTvYQT79QY1153iYApWDQqSh5KyWHZpBToaRtJsSVSyu8S717QL6PC4ziQsaXF",
  "key7": "45FaSM52dhb2HDvRniUUXo9HoXBGfEPTD3jJkyBQsMXWeBMRzSWjn31Moi1kbDKsWmbMKVVfdrAMwoC63GM7vWoF",
  "key8": "yQZ3msSRgM3bntAx5hVm9UYecB2mppj6PiEtb6aCYQNUQbuiXaj4tN6K2ffiVXN5TStnhAdyT2aLpMw1KDWF8Za",
  "key9": "5HC8ku69Uct4bixtEp48tSqu2dPm1ZucB1hvNwNyr2RtfLtaLbhT1hf6KqotorZJXUhqdgwmgWhoYG68ws3j6svj",
  "key10": "2D7kJNb5qwB2STay416KwVEHjKEximQFwQMJPemmcxztHN7nDmvqNHCbGPdm23BgUV5D1qK3EkWRche1dCcgr57u",
  "key11": "4uHaTFimRamNViKDJMJmiPbYEKC5BmGr8PXypZqYc2og19gqdKrjjdkrDcKw8PE1y8TKoyaYFNUtiwidHzUHDy7k",
  "key12": "5okf2Ay86Pxswn5bA4VmrLLc35FDFG8LusVxGfoLxZ2jK1Kse9FN6EP3EnnLbMVXFC6zc8AEiNAWHKBLQ7LkbNfr",
  "key13": "3jUzv8bgarcajwSBGJV463doRynSSFmwrk3m5PMPLd4o7efqubDneSELdj3y9TMMh7VszJUNmKevrmJBQCS1CHGr",
  "key14": "3rvJGFkjin5GZQqEsYARNmU3wyoQmm8GVY7zUkRrGv2CJ7qJUwp54ZUSH4XXegSzBuQk7b5e7jXbs5jhQJgWRANf",
  "key15": "3qKNQSo2w5zHxj77SYND8h481NdJURdAtPgnEAnLMbRUXnPoHWDPkoihXVUqRWVz9ZsuVituzDWNkm5fEhkERgnV",
  "key16": "qXpZVg9DPZ4noNBg2ciKG5nrddRELk5FEx7g7evUEpQP5jz1zVQo9S4DG6ep2hKPBmkAQzQzf75w9W1LgeKnun4",
  "key17": "3eWsu9xtu6b1YjTpuftKuPr6sVuG8yAfi5kruZa3Nx7inxSMHWCjMq4gCD6StoJGyapjZzPK3oqbvttjv41pYdg2",
  "key18": "4seL1MWPcveaJXHoX93ADVdsegEp8Pti4FeLx2V262SnqrNZtryeRGMXPZUru3yyKhk8t6owzZXq61Gdh3pPC3vf",
  "key19": "3Tuksr7JUPdKCF8KSrj3eC5iANGQaGVRmrLnyHojL7xoRm71FeqAKRniN7Z5LFmb68DGLi9CwzCZMx5S3NwB64eC",
  "key20": "61rgcuyAdT19Y6oD17GgHGc9Dv2NaaRpZxvbtxLN2ekcuCiUt9roTcidJ4tDa6psbPs92ij4xX4mzGHUGMMoFchm",
  "key21": "3FXpxFTngJ8QiJqc7nsRYKiPsSZ7ssJU7J7xSjNMsUPCkWvBXvAbFdW6PtKq1xeb1cN5rjS3diF9Ys5wXWz5ZGCE",
  "key22": "5cPTuCjS3pifB9vnKqLAowW449PXPjfstrXym5dL4MsZ5TiYydG5NoPFt2LdEKFtg27RYGWpGvV1iLp1cVFZKUqd",
  "key23": "3cqUSWbJ5my4yg5jBzvYbHWdrkXC7CiZaru3vBrq7WwPGH34oRNpNc2YmKdox41J82K7ErdsMS4KnxSsQyDqwmJ1",
  "key24": "3ev6Rnw8UXAvzEVQKcFRp2HjbiBaoPx855yiKM2vsFNyFhzupPW1pnFjYjDZt4ZVCMAR8Zx58TfkE3ZdKiX2gxG7",
  "key25": "3QHAbY9dNm9oWKW2pBsWdMtYUpMuyuQutrQUMcPHtqK4irshxyXyNyKmSYADyQw5SuWrDjUmm5saL5s88EziWVNg",
  "key26": "5jU5v5gGwB6mrL3jggGHjDW1YkXttVTb4wjTvw1Ak47aqkLuek9jEjMn6hvY8ADubz53aY7sNoZ7k5Lg6xv6L45f",
  "key27": "5oN9yzXCgkHHkLApW6aTNYDrRXEuTmiSZwYhX47bzrvFxjmrPFcy1TW5zA49EDkUebaaTcmVF5ndrEJ3gUXhXo6G",
  "key28": "66ZnXxYWe8F8apWFPisugtSiHiDQmG4Mg6vsR7LVt5KZJNyyJjD1hTWs3odgf38snRaffiLzwcyu8T6xuzrRTDbo",
  "key29": "4pijkuYcRiVkihDRQSvUMcPoATtaPmSZ83jBpEMN5Gqd8mUKKrPLgUf81gQwhV13pwCs7g8RVCkouQ2n5S4gAdHk",
  "key30": "28Rp4WvsDZaujBg4ps5aurKZJWHCPeX1nSbNz9UFPk5aHozJSN9TcvM7LhKZu7onrrt5SmqbHW8kyWTtF8PNZUb4",
  "key31": "4wK2mjQaKkXz6egwQT1BhbfBfUj41ckdXR8s5Y7aw3sJw99mDGd7bi4Q6kZycZcA2ykzNLWgfG2vCeNQx1czc1r8",
  "key32": "5RT9531Gi5txontG5r2kZvpLpx6Fe2dRVyNpShJUCmTsC4oPeQiDr416iQMycdgfU6oo7UaYuLYfaPs7fWM5C1hK",
  "key33": "5aJPpS8o2t3Nn4QcU42iungd9t2qHpPYRGWn4EqXz5ZTToYmfpytwNyJt5hgJefbENecXY2hZnfqW8nY53V1dzP",
  "key34": "4szxLoggcs7fdTc2dZwcDuQ9o6guDCZnEA6GTiLvoVQixKmQZizECCdQCf7ghRngoEDAcpeDPXXbWVYrwyaW8gos",
  "key35": "2EBjeoVGkoR6rRhpqS4U3ttNp1ShpyVwNvweAChpEifaJjC4vNKgrpp11ECUpKEDk3wL17boN7kE55BBbjkP85ua",
  "key36": "2b6wdmy74gkPp3wwCxVr5pZBKDAwV3Qi2Y6TvaUBPuWD1UmSH2dAt3eQmHouyR5JYHPpjnPkwmVmGjkx2VrA3H84",
  "key37": "V8ZeX6ojm8HDsqdNR5V4hA2H4hokpgJbisq9r5NcK1rUgee3XwMSqt6Mw1gmkwfZWZmky65YGjZYH2witkCwnj8",
  "key38": "3qGfkQw1Y1FbkUyv5HyaWayXgq8pvEu6sLHLBEATMtqBsQssF9vCeND9j9kXMuZ5WEDqm1HpukakzsRqx661QjZa",
  "key39": "3LzzGB9eM63M8NeTKLCMTU8cPMCTesJKrQNNr6y4yF1oe95yeYS2t6DbSmM3qmTkckahz6b2nqxHPhbyjF3pHg19"
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
