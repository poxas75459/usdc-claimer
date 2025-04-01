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
    "3jSmG3ezjfShQsyAiJQpddCBn5wLM2s21AFmx7U2srgZX66wVzhAWAkPNnVGxnABZhqJzTgYsNSBgvajG4e1Yn52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8sNP6BrGZuU4No3XYUBD6c5BxmcWjvi6QJqPHcrGPGUXKDU5KMGXwu8tDuwFwhuz9AM161C1shicJzKawFTyrE",
  "key1": "2moZuU9gPRGaQZ792Wqd9MFwq12wNky9WF2fuD5KryfLeAJVxzSWJn5T6zJR61yDDSe2qgB9duext5JSyPEpby6a",
  "key2": "2UxoQYSg2BNSCS9NhaUrQhDskyGCtNVvLvu9gxB8YKMRPj1JraqyXb3sB7ndF1Qb48yn8mY9xM7MLD2jEUEdKSLm",
  "key3": "vniCtoiFxzYspct8zwvAS5bLtjrQa3uNwWdYKThJhwpzNKoAr8DAKvLDxs5X7ptu7RLGCS8FNxCNYVgKepKCW7z",
  "key4": "38bS4ywyE1G4rZpeeNmV9UQoAz5L87xd4imEzNokJ8fnA5PHKYEKr74LyL7pEdzdLC3vqeYV7HUyxhPYrXKfjYCZ",
  "key5": "5Ma9iqwJFQwqz3xaj8DyQCSrje9rehwYJcHtouYzD42Mv5DDurUeR3DBhsF27nkgfFcsr9TpbgYtR2ooXemAuxsU",
  "key6": "4nhiKUoRcbt7Nb1RaviKHsNPbT2y96QoggANbXL32b37f6kuAaHK5WFT25wdVxRmPZX8jXQnCJNb7XmqVeRwyWq9",
  "key7": "4xEwz8MCTqSCrCyVzTK7afRY78Tcaoee8spVZFWR1JBWivtLjSNAxaykSpRrGffdpgxhoNPySSzqfZwiTuZHZW6",
  "key8": "3uAfRgEki3CyUVFEy3khuNftYcTWLjD2KcPBJfsHhYi8DvnvA5VNbyq2qCoPq84AHvyBHVtCVw7inDCHNM8WWsPa",
  "key9": "3BRp8fgpzkcNK7DhzTsCkiqbhjuRV3Fb8tDKDQVFpH8nbx5Hhc2tPr6bc66HouEruTTuyY6v4wqyi8BWLz1b63Tz",
  "key10": "gjN3FGcEzr9e5wxMJUeWzXf3vEsb7BndVdhXEmjeYWjmn4Lb3rEk6MhmQ7TWF9ThuX7ubPbDnwpaXNnw2DPG8Kc",
  "key11": "3u3iYMypAG9tVvd7qak8yBFggt2yPVAf5YzevpmW8CLQwzMn3BYytLGYAGXhfH4h1N198Dm4nvQCL63s1RcwcYfQ",
  "key12": "4PNEeZv8RZvydt6DkycYS9NvocsmHaBoNiAcNH2aUDwjc7P7oemp7NTwQTV4Koio9mM5t6GLUDDP5fPyZpqyiWyU",
  "key13": "HUUgC4ryigkWYbJLiw5WZV2P1DtJrd2s7CFmRspESfKBb1orpmmYvXn7C2z1QewgXCRNqTTGx7vKdisgPLAKLVp",
  "key14": "4xc6NroshQe7iCnv4Y7rytw15tc568Ag55Z4auxYM1E5wCUkEWF79XcAwykp5ydGKSHe79jMpQCqs3tJzZP3Qz2y",
  "key15": "5het4VvZCEyeoJwAQpvuaZ5FMM1AEdvKNtbxckKL159EW1RqxmHWLH9Kpj5PNAhssjnsdh3AudDWmmvFuiaXEtPw",
  "key16": "4ktV8rQHWJ61DxdFTzyKSEDgoRKoq9zyqQ3C82TBTURads5o2HtVqUJC9sL4UccXTST9DH3Z6Sdk7D85RACbn7Kq",
  "key17": "VHsgZnC1TPWQJ694UW6sKWoaxDZ9mBz7hQLM2hAjySdo5BNVoUrrN2aRpYV9ohHj68Tv2TA15EGMpEB4BdizCqh",
  "key18": "3xmML5fXSH8qv6aiuh51LBzvLU3xVjdnHFEhP9YTwpCfGHgBpGec4uz4zqA71tvu2wpjR7Q59f69CYbWK77WqrN6",
  "key19": "5aKssDwLrYzWSSUgvRSFALmW4dMnZPsj6wF66rtMxiaTdWxmFLE6Dg19k64EnbX5eA1AbWJhwamJ6xZoNjT3kDTC",
  "key20": "X1e3vVKuZpDUcaonmdFTKCisn8uhiofMtF4sKduC1dzgXyp2E92REXS4aLtoqcRscqZDWi1puwTbZ7dYT4xUNpG",
  "key21": "5suGYWw6iDkTfEwnTRpNpSutM3qtC4j3yWkoJr9nfYM2VcP7YdJtTo1YW9Z4AEaFLutERACtQtmLNPq7TU3HbmKW",
  "key22": "tdwtS1PdsrxMJLHxceHw1fBQXdV7gE1wLX6Y8zRJi2yqVeP9V5perfqqbLV2NFYi6ARNpSWQorxA1YV39SDXKFj",
  "key23": "x4xPQnuGudFsuBrXiKs6MCpHRey5yizwTf4c255MW3iXVAeM6q7REqcwfSuLCrykVsR97rUGzk4wkT5cfY9y55E",
  "key24": "51yR2mrqpAoKBooMp6yF8vfiXFwsScMi2cawR8BW7TSyNZWi3qx5HMCpX96pDrzKJwjYeYc2ERxhPh7ELVNHPJWd"
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
