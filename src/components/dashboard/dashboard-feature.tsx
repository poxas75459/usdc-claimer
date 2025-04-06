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
    "JfXX2xFdzhwZraZ4qqrSSFejDKxjhYHbzdAbcRAv4za62jG3AbNaasqVy6wNBg9aEkBKB7FAUieG9eK1DtyjJoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PJeKZt96szcGeaqD7MQNuRz1SzzZuNPMxr1JnxbxHtLjUKfLqu5ChRhksR4qvhQgKnjfzDX3aWfxu727MnGLgnf",
  "key1": "4VAA3qeqCavEqUZKSDL6kBXdSqXoxFpnPFfxN5A6UALjnZm6BCpZQy8U72uhnsP6tv6rPxBV8FkvPb6QkJr4yqCf",
  "key2": "2NLiPnp7eEq3HRPAeuvRP1x4vEmg9w3taFAJQCN5fyH6qV2tjFBVV6smLrKhKQzgXE49dvDRFFPNNAi3qjaQ71NR",
  "key3": "2YxAja6dyqFiwsQEHUgG9WLrE5H4LkhMqkiibPZRzR7ppYDQDjieLiE3priXQVSgKuKw3azsWks4HyZxPmXjfR7r",
  "key4": "5RVRobJJhc4K1Bod8qt4AqsDTiaWkcfgkQ39odRiVsEN8o8VCBrg2YdQQjJmcg1x6eJJvYXWfPosj4QxWeQ2W6va",
  "key5": "5qMWF1P1khemLbVbBe3nZd5RAkCGHGtwNuZpYfgFSeiYe3rgTw7UP6BeK58fzWjRKB9Zrk49ZmkGBE3LHX821ZAT",
  "key6": "4R3TxtJ9uCAy44gkwJZrnjKdhmgm924AcrpcLopcwUnzURbMWq6fttqF2RoRrCRVhTSGrUn1LEhuRro9QWxP5Hvz",
  "key7": "4WqgGmJ1qYQK5DjmxvPsDQZDiuAMRvEtQ28aAXz18KUmEeoh1YWwWJodMWuA2UKyuhmhxbM3J4NfDk2FwUmr9qs5",
  "key8": "3ShhqWHiZdTzpFwDVtXzQa7DDL7vd9AukVUs2iH7f32kTtTGSEkvTY1R6RXBh8jeR3Y2fp9w14MLJQHf43Rcz6BF",
  "key9": "3nAAfmPA8o3aVzLyspPDHURJZPKH5iRKMQT9fjzSfEcmtcCEHLZyXoqVnUeXzEKaQE5eh3MMunBQqdiCUBvPGgWQ",
  "key10": "326XeeXTAMuCWWBSx9dkd4TfTKy2cWd8xqCviEAH8sDRsAh2CJiiZFfdjwTxLHZ5GyBdm5AGuVkiBhQFTgAVSCMX",
  "key11": "tGEd6VQMHLiVDe8PaTj6hhTcqQcoxekznZ2DEZd2Zc1RSDhRfHi5oTnDW4mojnAW1BoSvKeHo1NWabbfMuuu1Mh",
  "key12": "5WKniEcdaihDt1MEwBexRsY14tBBwD1my6Rc4ip4qDWdLyUJ3SS2dsYAWUhw2h8PDkn52ynwBm2RSRqdbUgeTm1p",
  "key13": "36ukXK7ig7ApwZW5YudG2P7xCKNAepsTEA76rJ4L2v8npgyS5S7Yovr15Hhmg3cQaJ4XGRtWKaqB32E1N8VATLrZ",
  "key14": "2k4sSGMELcVCaFBu6Bs9H9dQEF89LGwjptAmJqXscXa7T5CTR3VChngFvFJnBtNUPBkhYK772M5tuMN5C2dv63cH",
  "key15": "iod5RWKuSqC6mVAxiSud3G4n5ryMkFVsaE6usCxPUGciVV2Kc9q2JDHz4evuNXUH5LEwwyZRhzdmCko1LtctsYm",
  "key16": "25kxQRFbFfrQYiXTbjYUt65sgTA5XYvorBqUSKhyM1VSsK4gfgz2FN9kMyq6r8e28PHFLPovPP3FE4p3kEHQYfim",
  "key17": "5fdUbXVQ1N79MVariZRrEueeQXcGnmYvAByjV3pw184RV3TH6DggCD1jzBPg4CXbTjR5ZuBVrSWHTDRgtNBkk1Ng",
  "key18": "2dVAnX3muyBpMW5Pru4GCLNDZhWY3fvicDvSeuBasKSQ2aGUQ24xuLzY3TknU8PKXhc8c5kfjpKvYBj94YyvRvia",
  "key19": "3vKWge7JTtFA95RJb4S47JLBG4jey7Xqsg6vcAsaNgutHkHdQSi6GgQDZ5w5UjvcTAFMxNTMeoco8vfuTMxGTqAZ",
  "key20": "EwQHXxHugT8wsya9gmNre3DHXGFP7XTbCDyq37X3WVwpHxEMmPLmzrCJiRTcsXmUj4VhssFVYfKkK1kdVWNrPuo",
  "key21": "2axmsCJAccQMsNrb1fycUz55FaXP3y1t7ZH5ewyoQUTgnhzsoqN13XPyRFzYeWBKZLU7YVXodWQBLaU3aUW9UY6Y",
  "key22": "3E63iwCvvknDVyFdCV1JLBerG6QpTsKohocNzCTFQUisnTg785xRhfZDCa8Nvd1JqJhaERoynjQm5ZrFGXyGezif",
  "key23": "3esJke1wpRTw41c9nr79DeQojZbbLbLknAPkjwAmYL4otXk6bLapdcB9hRbEM6aVwAvDSjudZabWeQxmgfHEhosK",
  "key24": "GJy8AhKX93PsXuMcLtJVcsTGFJoUfEYGoaNkFvBmCCndntuWdKN5edf2LZjZ7xjeZRVaN1Bzffx3xnJC1BAHjWP",
  "key25": "5sj1gGDqFB3djKkKuCGkdz2eaxcJVt24f826SLC85i9CWJkLNPNYXhNRBLjKTw7w4m3hh8EsgosbRmGH5KEtp2FJ",
  "key26": "2GuaW5gnD6zkybe8SzztwDgevLXXFPYQCdpzKuVukKe2QJbPzPJN6U8wH6JSmbFUaiVZMJsuxM4aeB8y6Moo29YX",
  "key27": "yanB33TMHA67YcWVa7QKFphUQr2yzTpx4Lk6AoWyyh6UxXcc2TD7UU48a3HPjzTHbZ4WPsuQuYExhAzBUoi5LME",
  "key28": "2uz3YBCSEvjqgj66oBPTfFwyUaqF3Tnpg7PwjPgTXSyXDxqrFEbZwRSpvAJyoPLnNmeBtG9NqDTcjMXFLYNqJAQ5",
  "key29": "33VYCLwP7WRzp1faxh6D9J1YQ7hyTBR5bkhebRoWbfTKSPe2mJNvgLzbVPFJ55RtjXnQScTeTvgH2tjBmiAKTaZu",
  "key30": "5Tjq5CSYev1B4cLu5XTKkKTFzeDjhPGu9G3BxwZ7Aq8X1jYpweWbFBB85mhAEqK3jS9tSdXJt2YzduJjvLtrXC4W",
  "key31": "53M8EDj9gXgjrx9tAjYMzoupqGaxxL9RSaD2RGyT65A4JYZkCygrvhf7Bz1etKLGgoVzuEiB5S8X31g6ALmAP4dL",
  "key32": "4E1g4vf54QuANfpD8RpNzevgPsoWJ4TEWTMQQMt2gM9vmf6NYq1TR6mccuRWpxazgFLXCuHpCd3jxbEUTTpHKEHp",
  "key33": "67EJVLZMgihrsBV4CTwAv3WQEiFsFATAFzXKkA3iXNgDAYP8TQUfcAGWvZ9foZXohiEuYYr2pRbqaoB8Y59YkGXa",
  "key34": "5pd9wbMM2FjN4FMvXswPM3EsPLtyerQw1V4DzENRGmHaMoPsvhTAV2CJTK1XUN2DzQ4mandFQnjPCGAFK4BJnkCA",
  "key35": "3dY8URPN3tEe6CpK7bpM3vndVhkwe2HQAbjqsMr8LUs8pbzaWp3wnszvxAtuLxTuwsAyvtNWohUADR59D5D6bdcM",
  "key36": "5T83rwshsf5i7D5C3iYweTo5XFVAVGkggezbJjCLexkQCN7kVYVM4SqdzgUstGK8iDiYt2gR7aVssM5HEBWPDWpA",
  "key37": "4WN5y7cBDApr3GvehiVWg42f2yrT8mhWeDWBEyjymSgP58q6gj3RDeRJc3qdszH7aZeBakGsNpUz2vxcXC17TB7f",
  "key38": "4aoiuF3YykYD65hvwZpYEPivngmynfu4G1YcL5aPY6mKXLf1ou15y4quFPgci6m8R35THgnb3UGXS5XaRKbyFc75",
  "key39": "5kRHUuDfFoht4ZWqi7PGwYiaX31qc8H4GWRGGbkpEEZBjScGKn2x7dgtLw9j7RuoxLtYEN7zsVgnTMuzHQgMBmzB",
  "key40": "5XqaptnEoJECEYHRQj4wxXQMaLSgwFPTWupaBRWfA8YwdpbEPXUpvFuBFTu6M8NidJBDZSsb9YwW3pUbBHCc8ixz",
  "key41": "3XaenvDDvYhCZpX976fzvZQbKFcdVN5z194yqrZ97xVnV87WNHCnTj6CuNSNvmcPoiTVUDzMRnXmvNGdrJfpY9Eg"
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
