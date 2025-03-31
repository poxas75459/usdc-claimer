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
    "48zfAHsewNzXsHRnxR3tcgQexCK9uifsMhQEE8YBaztAY1GvKbkKEh8hPJb5RbEmG7vVmfcZuFeKzpVFhwzLb57e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f7W8VLXNmJFq7VK7MfhJR8G4oaBQD9d17ETro9U5QihVt9YhuPuxzyxRwuGiE77veyo6zqMCfyULvjNbKizxqjp",
  "key1": "2bdUCbvbpnR5DEmhtYu22Kd9SVPbSbEmdnmXMEzUTYdXpAeHeW7KyQdXRrwTignCtf7SFvUVXKvpGVynRZPkfM9J",
  "key2": "4UHMyZHXoEztUMNb8bAs6E9UPwrLQUYkLkQYYvPxy1NLUeLRN53EqfKDu6GP1t38Sh35jw2a9pHSgsqseSexKMZq",
  "key3": "4LQg3wDc1K2TbiRSGiyLrsuaZA6Ui3LHTSEaoVXeS3P96zNzUpJB8PJiJGaZf2X49Q9veUmzpL2BSHnQmXgagnkN",
  "key4": "3st2dGfJZtVrpLWtfBAEPKt6woZ5MtHYTin7X1zv4XPrATwEHREq5cPTxhrhzminjBZ9PjLnEgczfw4MKN75Zhbc",
  "key5": "4vQtxqs1QTNqKp58BYrJkaHBKBHtiGrwNYHsm4HGpu6BgevSMnTkS9eb1aGo1xScD6jWsXEDy4arccQXThgrJ8P6",
  "key6": "2Pk58nMYwjQYvyihtcY3VhfFpJiDZaL14AjZ1gwiyy7kTehS6A2eyVvz2opsBVA2wXaHj2ep4qW2Z4Yr2xzqX84U",
  "key7": "64KFNeH1HNjqDtBe95K8vN6LS8b52JLKYTp2pfhXzk7piLFqN17ccdkTWehtmnGyRYbjwpc36nUWkjhGyKdcbmRH",
  "key8": "5oGPu7gAtLRwKNDnAqvqrgBTN3uPgDnnGVCZtv34C1h8L5jB8vzqdHLxQHazzXij8Mb1E2ofood64KAeL1cvXVBa",
  "key9": "2uVYYWHG4oassjfrdQH7DiggJneY9FDQcXFBetq1cFBQ4EpXj6nRcg8WnokyAmWani6sT3L9MNwRHn8JjRzbdtPr",
  "key10": "4eP4zSYHAxWrLRV93GPvUWwjjyVKLSidV4J6TWQYBgDtx2bPMrZ9Mv9TQR5f8fBpDLah6qf9fg6YXummKeCgYFaS",
  "key11": "4PhokYjLd2v1A7y4JUfAz1RqYQuyZesq5TChyeY24JA4pFPtK9TzycuCVwCLhBYtXmD6RZo9dYgF1QG1WoF9o5Uo",
  "key12": "5Zeek55XjkrSFcXGNXQxNiPjyXFRNFD6KyBXC2gVekiGrKennN221cX4sEGdbfAhXEWUx9gtnh5wb7g45KsyvMEJ",
  "key13": "3QA4MA2cPctvLEpThjEnDbo9CvmLaGJbBPGmmDRmr1fFcG5sR4bSRekzwqfmqpVsHUhpHSUCKr3VdWVeZbi6xkRQ",
  "key14": "3FafcXQgariAxYWfCf9oXVz6FHPBV2Y6n9KMea3DUQKd9g3xv5FHKaLxfX5S32dDUafWvGBNqyNwGQRmGJW2SYgH",
  "key15": "3YKk5d3iyzCNhytJo6wdixYQm6Tr6su8SwXrhTAditzgAtPgeo63f7AF4Qh5w4EonmrJpjoFzGTPdHZdaHxXeduW",
  "key16": "7rjz313h5G3RfyuTRMcuiJEonPVBWJsNBtC79pWJbiLQbnsVbomnyTuRXgocYeYMayzDEye4fEVoB6HpV4JNcch",
  "key17": "4pmx626hsxuicbSNTpJ12h1pgK1AD7vUirZ6LpEW4hw5U2VcuvyfwngJXNbyqJqppFAZWo87YJTSX2BJes35Z5X2",
  "key18": "2Y3DLBMUX5qVMgDmsf2ksNuMuS4WwD1ctZX7E8j3mnzH7ywF2V2Kzsovg75DhA4H9yds8UZgUokU3tPbibTW6ZWn",
  "key19": "239zja5FEetT1ETzhxcjpk7UrRToeppbjXhkPW2RGoWqDxcZi3dDgsdezPZ8caeJD3Vd6eRft9EfAf5qPBcxyoTW",
  "key20": "5rW95TTsnBZADbf9dF3sakBP1yMdBg71fbDUj4B7PpM6sJV85abRgWrbVjoPLzPgTuuv38Be79CAxeS6qt6p51RZ",
  "key21": "eMvy8o2wnpBDfHyHnAcPvpUjn5wafa7xJ3CtvAinJbqKXsJbwRxVK9vztFsJnmc8WVeqng1Tc8TJscuMstjfTNM",
  "key22": "2PNBLTGqMuojJA2ZhCha3q6CAeizEH1qgCGDSDjLJHTHKjk9PhZw2mpdeQJK3b8mxjQ1iAVKmrY6CBHUXcGANANy",
  "key23": "VhVna1fsDkGVntfK2QnVETjKPuKzXBspA1JW9WBry2jaSyGZd8PMNeEd3ta8jWYCGGjLvYFSyUZH1AN2iYXYvst",
  "key24": "597Tr3CCuBPJBQSw8kocWFwLSyxkUoDqNqsJVCrCYj6GUYEvcmSJ8ropKoDtEtxU9apVwwGhCPjtidjs7A5EbKqW",
  "key25": "zq4TfEXKznZDEq483vH1vgxA6crYnS2zdZYPrqtuBD1NhrxxQUEbynXAeEmn29KDuEfjJBivk22tMFLDNfFZjnj",
  "key26": "32wgxTo7CLwSoAjqWeyZJNwuPCd9rqfgP88KNNagM5Y78gYp4Em9k2quou8WvXKoo6ybef6eQdBKUsj3Zx7Xcq9d",
  "key27": "8iyym4d3BgmHD9Q8p5EKHjvoySkoCuFAC6APNPQ6SsxseFTfuFy2hjJZ5k4V5F1w3kSw3fLSWrqP6apzXV6UP6s",
  "key28": "5L2UXZQyZVwa8Ve9bFrG6fXKmdTgeAkN2cxqfnC3xu88t81bgNqGJKmnVAzmb7vUL8zZ4oPZWh5wiPUgTaPUdToc",
  "key29": "41Z3nfP4HzTavrzrqzsqbHkyXMAMZGmswW5f1kdZvtKJ3MQr4H34UKWovHQiK6xtMZJHfrX7pmXQTTQuhYSZzVvH",
  "key30": "4aKg8hUL76vcssHL3gSHF73gfnwwrZwSBGCGdDjAxs4Kb82BDKE3C5AwefMcf5Rzhvs8ZU92oG3rjKkmdH9USesX",
  "key31": "sjAqxtiBjEvXqH4PMJ6op4XZWehskuqNh3MAxhDNbZja8wRZKqx9km8XEWGbpLDTKeLim5ff3zEaRsaiYFmRB27",
  "key32": "3wwsXt3aPEdK6JTuRHFLCpBhkEdYv3Svb2VVi4kzFPvUUzZ1ZKfakv2eLuyn8rSdZAdTVYsLWEiFhsejciSrn9py"
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
