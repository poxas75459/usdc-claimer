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
    "gQ6fYsA5LL4Wn6YKb2CaSFDSxxr4Ac8H7zRgxBEsadmWikC5XCwR5LiKxx1PnHeUo8Yp4yxaJm9BW7uFwE2rJYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLt4GAa5pGJhLPRcZGSA9Dng4CTaPVkfgdjfLEDS45z6d7QWD1iA7Svu9yEevgm9pFGCmuhMhrW6rGo9HhNHPkm",
  "key1": "2m14t5fMcroUJgsoP1SBBcdMG1AUBujPRHwpsi4AuCsDv7wrGETjEPdnkGsVkQqVnTRkpbi3wTQ3VXSNZePPqWYW",
  "key2": "2VHiX3jVhw9VMeARwKBuSZLpX2KZMGaiFADQRztjzdRMwQgziuuDtxWHXpg7ZBa3R5mPpaQQUnxR3hLT6qcQDApn",
  "key3": "2XHQQnBTw7eufqudTXJec6P814rwqeVFyfyqjGieNtRqSjPe8tuyFQH8WhKQnKXdrbm2vyqsNru9wfmnWKNBxkSh",
  "key4": "2F1Z6Cw2tFBgyiXepbJjB6p5wFsHUidR1zXiuhkeKr2LAV7iqUuvPeQuu91K7ctzjQ2vQGNNM9p2DTQ4hNM2cYC5",
  "key5": "621MNnoC35Rmo18DAqHXSanroi15yPTVZMQFz7gngiNrApzEUPMPP6cYD4oyqG3Z68yUzvPrp5ecBixUYg632M6M",
  "key6": "3uqJyngG5sDCh3XeDEwuUbMojqk68uAsDcMtCHXpTsxUmPihVg56fAc4phZ5CXpwUCQ7gsamTKt5W7pWHj4CAfeX",
  "key7": "tWQR5DxRcVH1WWSSZtCvBhfF6uWNfJ89rvtZ2tups8oMopr28AXiJXxeT5JgKo9HEcJsaKhNrUcksdsygCYR471",
  "key8": "2YYYA99DFv2kmctAZFHs7LWWnVq5tN4LsC6w94dPXhbG2B6KAVzCP79o1WL7ziS54kzqtBksNHSXPPFmFnMtyrum",
  "key9": "2BuKYXu7YaFrnMtSLbURQd714BMEiDE5xdC2rAb2kVHhj9ycQabGtHV1cYdypc1439pwn68592cHEjN9hVLKoAVP",
  "key10": "3E9BKCcCBmDB3JuQsUsq52mwmwZXa84gpcDsXVxue8DHKL7A6eUuRTiA1VWhn8t5y5zmcs5EULusjB9GvXVrb48n",
  "key11": "4C4tofnCUM5HnbuSu9rpLoL5rF8b915yVuXtudmmx5ygp33WHPf9yrvhEtUjAuY3QMYs2KWgxZGhCdrYp5wFVXK",
  "key12": "J5qyceagTTpMCQAPxNu8zRZHJJx7syM5RZQNJ1esHtLjtCnqzWL1W2AZpESngpuZDrC6iZBWChJFeFgT4qxqTmK",
  "key13": "52UQoPbXi3TaF3vyuzzLQgitMJ9Tpd2thFyLc3pZHiQ4BmY2gGkiahi1CC63P4DbAuALBMR8yP6ZaoYqn5Bujn99",
  "key14": "2ShcCGhNhr2H7swLRguWupThCytYpDQ97CmbdSf9dNZtetwxTnnYtoJTgw6AsNFronFE4FnLUBvipAxV2VfoSWNm",
  "key15": "9JMBpGRE2d9s9iN2X8XLBPbGoSCVaDVEJF4avmR36ZUXz885ceKFpo6GthNUT8Zamj8yfs1TfQ3gzN8DAGnB8rC",
  "key16": "3QwZMbxDy1G84b5atxRgHuEbNZ8DRZidCansAdVLv7Bq1iR3v4qeLwdU4zdNNW4qK6E35V6CjkcXPQT94rztKrFd",
  "key17": "2Z1F9Y2Qdr8Vo3Yn3p6MsYsXFzfNaBQmgXBe9SeEGrVaLGpnMYPuGttAUh2peigvLoMn2EpSPtevadMhQvo55EJh",
  "key18": "3TNx9xgk5DRn5fAJsdd8z7eWuxADNj79WzBY886azCcVKfzT8f4JB81Uio6oBoQYcA3igr59FmdJ1WEwmZnc4Qs7",
  "key19": "3hkgqZsamACQAdqk4wLABS4dtHiqduEWEhJ5wSgrKZcqqY48K6FvLNF24UcasECfBrC9ZrisR8QrrdQE3Aoxczoy",
  "key20": "2u6kv4DFTBGfCLzVdD2pBfVzkeGZFyFVDawEEtwstxSQnFc8PW4FsZwizE14WDAmoRR6gZShk6iQ6cQ91YrPjBVm",
  "key21": "ji1bxLtvNRLjbduWqGRJYKj5dCVS64q4FhsYcU2SkUHxm14yhYXzQNHHGWAQyUG2xM1ys5n9XBH3vsWxAsQVwJ5",
  "key22": "66f99NNYuToTZMPqCeQdf1RpWAEwL2DV5MhBH1uk2R9C5YomMbWjsBo9gmPdyNLykwjjqxX8W7M3bTUKao8tvQrH",
  "key23": "51LySZ53sQfoKQ9QH82EXaYsDLjdaGLgSFmWrE8om48o29dM1bKSL1kSuEaBiU5htPU3fiySUbVV6YDKs6B4oSVm",
  "key24": "2jb2rAFDj7wFNauAtpAusDyXT8ufb8jZaiB6inS4WhSFwtvt8M7t97gbkHzzDyPAVifTQUC36cBR5B8ABhdq9Yci",
  "key25": "3oU38tvf3ZbJsffr61q8VxqeDGxPcC1xtojqJ5WJ1EBa8P7zhuizwivzi3DVX8Zsn7Y5XjfEHmz6AJ1D63qPKioK",
  "key26": "3DgJ7pDtaT6gaPFp1hWaMx5CmCw8XGcrwoJCnMFoxzt7gutXJoU6Wy6nGoUzvN7Dt5aRkPiMRNPMHg3hUxn2fyjr",
  "key27": "3kr9KSZEm6xBevWEMaG8ZaYyTDTEmjQrMsS4p6BKvKhtzcH8EPyZbrKfqRK4Mn8ahBi7k6goya4GEPYCKpDFtcGV",
  "key28": "oDNDxQdG8T2ME8nxpyf1X1G6ZXjDdmfp8nAKeb7Bv6BjrAD8gYCYw7PU7c13VVeZWHH8zLSK7PNm4QVxKxKFQnt",
  "key29": "3Kc8wGZRU8cqMVgsfgXCJvhxGbWS4xBjchqaH9K36CaLLAPjemvkDrjhtCqNZwaEmRxpq3i7w6BtXyhuR8KF457Y",
  "key30": "3uhvGZUK7pTdTfcLxFLJnP4LAjtpVbn7qJQQidVbUK25AYfsPSkEsN9HGmRXj9YiRnRJAy4RsHgcq3irusRdk4bc",
  "key31": "2Sh9MLB895NsJwHjYWCFjpxFwWa2TDoFFZfFEGNmmcqgVxosmwauDRHaWrd5T4ZBFFkJpo2z3A3PxsUqdPZT4ZXd",
  "key32": "5Ugcw2svJMzzyBB2vgC76veKXHoQMR1ZyEaMQW5Np3xHQHLJax6RCVU6ad1Go3Tr3q17MdsRhsHrDs9z4FRzzXag",
  "key33": "2mwFwEzuTzuLVPXbQ2TC5AKE66rddMMBiqHqE97XsKNA6XpCFoUGRuNh1Qn9QNNf6bUSVWuVsQKitX5GpgSqN4K6",
  "key34": "59TLSjr22MpCem4qhXZg1U4r1XqTBLNEg5pqXVDwuWJh9Ev5Prj6PNGdHgjJJTEbVEA2vJmFPxuFoe98K1BpWrbc",
  "key35": "3k15wBNTDZWzv4MkAWaC6S43fpVETHpTFWtUju4rWfCKmGiWENBaAKkaGsHQqFfgNANDvahVkWeTQ77JYyBvhWms",
  "key36": "2m9v3sNWyutwmVK9j3LynxZ8zrU3gFnmKGVwQxRdUrpdNAp9eoFa8N61UcUrt2nFm2TAesGZC6qitk3z1kvYZwEP",
  "key37": "3Gs24r2LqnH15n8Sre81zLgm3LWkL1kYADN4SK81bB5LQHwcSMCDBauBvBZSs89kPTwW2hJ7gSjBSAitWY6gm9Ve",
  "key38": "57Hy6ZR3JbF666Zj9wJ26beDJJygxVcDmuBfpJpANPwVw5MWxBopoDt3pUChr11igRSqwbZtG2RETrp4aqNdEYTL",
  "key39": "2XhAHiirDduvwiPNiRaTPTtzqySRk6PUHbmeu17iafjuk1i5sjca4Fv1mxD8R1wbcZyF2zMFtrCjt5xMwntGU1bu",
  "key40": "mdtunci2GFxWTxC6E1caXfM7uaD1c8xbMixMDZ6HkgoR1aomogGKso3DGNhKrRRQNn1otUAYsz9rHuf665jtYzZ"
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
