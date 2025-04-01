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
    "beQ8CwfjbULbjsyYEW4RMxBRekyD8Jb9byPJz3qBndBLB4pXWUg2Upati8YHzSqJZG4UvVH9qCQzNTEn6e7Q4ZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZkY1eKh9m1abumuazyiJ8Zc7zddC8nN4fZ4vomti9RELrgnD3dGEB6zHhkAjmY11hjbHi8PobtUXYxCSCSMWw7",
  "key1": "4z943m7itg8xZp6C8nmhdqJRMNU137UhNJ5HTWUcZaW4WNwuTbtmr5YwGxU7W7YMX8vFLo62At6ehR92TBAp9gD2",
  "key2": "4tYcsBK3dvxDZzCgJ6GYAi7jQ4N9P2TGEDdAUHzCnjNHdwFthXsiJPA94TBjGCFZgbKf3H4APnN5MnNyRKXJZAgd",
  "key3": "25vo9fXUMeFmjgrqtkCxYqkLBikjKjQuHgDAndPBqoedbMbcEKKiKgRw7aLuuHd4bWwRoXyqjscme28XaKekWPGa",
  "key4": "WXCVnQYPJrdbWxWMncLeQ9qNHziDWDXPm7xuf7d2ZLMrVmrApAbt41PGxoHAU4wvFBwGvikRJszEC8nbTq4WGB1",
  "key5": "2U4zyyjc414iLWmEi2QW7BXXNqpsvUytcRD6MmDGNjREAg8KdDJsTdxp4yELGDHq2Yn6Fg8VGoLnfydiQuA9GuEV",
  "key6": "4ivtjVAwcxZNSPhwPTpLzRiMVmW74QapRjKZjA29rcv92MWhdcZp6B5iLDytrWfvhxHGEmwCtivcFEWwYQk9fwow",
  "key7": "5jZ3HKjdVyDMw7aZS3JjhCKFvf8fBfTWNqTMCyMAnmLeiAK6XDc5chqrzQYhBusrk5cWu7RCy5VVVmLUBtbQhXMz",
  "key8": "4X9FAnYqzN9VnzqGQPo4Kkv1yFrmJ2M8bhMMKubqLiSD7CeYHs648hp4UwJvpZncbcVGGji5Xtu6aGpxBWd2FyL3",
  "key9": "4YmBTQ4FqhDbFZNWPFrMmpuDHkPSmwxzxTTW78qsBtQjTVgjVvkAVJPhnBTGYT7Qw7FbHE5kGH3BsXbhh6fj9fx",
  "key10": "46HweTKXJ6hwWREL5cp8UWKitj4QsGxk49BEPBpYK3eNQDGNTtU5cxFxbL2baeHC6wfEWoyp9pbiSodekWn41apk",
  "key11": "5Lfe67uJdENYZa1QG2RD4SAMmgRux9iZnRb9v81Hxs8VV4EupSQRHvZizzB1Tcz7xg4mmq6qvCkAPFbTsjkwWw3h",
  "key12": "4EYD74DXeKWDhr7HfyBGv3w1N1KWBX1Pjrwrqp7wXpo28MWHmgA48vkMPJMzvVRR6GATk8EupZJjk9qpPdhFAufu",
  "key13": "tfNQTojekZkGMVTZC8tuVj1DjDgEt86GKHsZNiu7vWokPKiP856ybpCE5h6w1cETHh8T1PpXhvGXmpsgv1SSkZL",
  "key14": "26k9rzuAcVbCQwvsbzYnP2iQMAySBanRp7JqEZ63ewTGHZUjrLuEbiEVbjFdfuMcDEGAeeqivFqTDVhKL2cXDXkJ",
  "key15": "Pkwy4y9pHdCCkTgTGMitvuLeW5SzbqxE9aEs1mhVD2stgPW1ZhV39ZRNx2qi98unqZ4YydxkBp5jRHrF5hgXHXi",
  "key16": "36WsSnAhGK12NhFbozWHaPTTK8MkCCWBmXH8CHPDdUQ2xgTHKdpBteGXk4kWVtEZjJTt2CCpyxwbdGUDzTNKfb38",
  "key17": "3ScFYLU11aREiTYnAU6zT5gMwHqx4JviVDPdF3yicCcTtNsWSBL48PTdrdukr1QCwzBKR4KCDJ7EdzHdzLyGEXV6",
  "key18": "2hVqAsBabSLq4Ncornx2CMChPeNdekVHxPKtXi8k3cGMFaQBpt8bnt85AhwrpXuPbimeEgnYnSyJsbabENjYQZSx",
  "key19": "4YrXfKorKw9RVqAZ6fcnZFn2uTcpq2QxnbpU5t7QTVHXScupiJ55BHUpifqnhdNexZJcQSbAobNCpPyfPXhj5hGP",
  "key20": "2fPm341hDmM82vtT5Nabc77NYWehTeMXonpFeW9dtuZ1a1Vi67QNsaVVDu6dwSEnMrX2P7758Vmhqm8NMY9Mm1mS",
  "key21": "28t5ytctk727SpdGJBbV7ksDhZRaZJhai7GncPiEeR1siuaN8m2DxZTQnmLbPkRJFDBSZpyxGTHZCV9yKigWay1a",
  "key22": "QwRuBUuwtUVc7zJe48q6VQHUt4DPAvz2DcAiRR4DEq86nzHW7hyhB8P5F1vT7k7UcVgEQ2uPMdnAAtURwUaEirt",
  "key23": "2BXMTfC29GjpTFqvESg8bKBjCidpcmvHrTruNU411YfkEBBf8TS3sxDBQYEgE4tV2yja3kRvEyW7WWysxfj3RK6L",
  "key24": "6qKxmPibx8HHEFaWn1B48FHA42wUcYb4sZQqyXQcreyhzi1e2VVG2SBxThi9FenGLSBDxSpRWHtQPtSj9GePNNQ",
  "key25": "4bhMFvh6AY33EeBb1ZerNTLBqz9Nb7eJgCiovh6rf2crVvaFTRDkshfiW6KxVvEV37dmUYDP2JzgFTDrt2CKydPQ",
  "key26": "4DEzcTvHqjSoMicHm4U1DbSuam2kFRCqFxANwktJfE6qLXpFpfPG8ud3tbCbbVxQSZ8S4rnpKpJ8fXmo4C57YJhB",
  "key27": "3Tdfm683xr9F6b45yjigWrsTooM5sPhmB1fczhirbY7kdUzApE2z4MxQhxub5njH9PDEhsU6mN9Rw7fScw4rixg9",
  "key28": "yEWHCozT6hzUyoxzgCb61LVq5CZ281dkQp5e5FUwTjDPR7h624e7N6kVDUkL4pBejAkX4zYv8VyfVfZ21YFnF52",
  "key29": "2LX1YABbAm52Vta6MR9uFGdQ2B2vYv5UiskyRymr3T8k7FSxqjqPSFm462Q4CRed1NMfxXsz8m5W2DFDH3vQ6myK",
  "key30": "44rS1qgpBFEJCgu5csjPosEtL39JK6GBEpgYJEVTjbeHf6EtoniytVGKnMtiGSfZa1Y4D1NNAK2w7QE4ogEH9fCv",
  "key31": "5fRPkFQwjUshSerNc7ou38VsnNt5532rSEXxRPkTbdZ359Fehn3jgS4Bwwo9xmmEMeedTUKvE1cAHNsdSqGFnS7",
  "key32": "iQgb9rh4BGuE1xHg1EZ9qTy88MLRrTTWyGy4bxDmEWYbcVPCcbyRp8JjfZtECJkLNgteefgySeENu3nTmjGW7me",
  "key33": "53eGrMbQvc7HyeMbSP1TSPiv4wwhrGvePw1pk5R5h29ctQ3ECNZBFRqSnW733opDL5gxXzhHEEGBnG66iVNjheNX",
  "key34": "etzgP2uuhrMyCjo4vycoYunxwJdd7ytBkn9Uz7C3tegRrBTz5eLwt8GtE3Uu8tK3dLH6xUN2oiFXgQ1JHsgYxR4",
  "key35": "3aEXLnTybTyEMV8r6szBm2gcVZ1veMpsXRvdGAnPu8e7aHEC21Jp9Q9wgtPzdryiNU4ToVuSNdyWZeGHKqSiBRcP",
  "key36": "5zTs2tbD2oie2EnPW9zy8BqKKQCFnJXwAybzfWtcbPp8XNRuUoH7TrXW9Cu9XZDdAyq8z3mSQDSFg7xffbmE3iYe",
  "key37": "M5gciDZDim4LEvKYp4njuk2thaD6vDpLjAFXPP8eWQEt4CtKHXBoHZH7CM7Kvpzvgy5qKSdcFbmPSfE8YazBy7g",
  "key38": "5pqfaVktqQZfRixfeMKwgacTHJaFRE5FLFTrK44qgNwu1E5hF8QTZvQSLYG13b2Xc5P6MmmmjYktGRLQkGZJN9J2"
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
