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
    "3TVVxLGQqWhzAJBRLWRTWCUHJoyK7YpQmst1pKE9Nucu3sLCd5rFiwZ8v3s2erVBHGQBbCbmpzAUeb8JKLdrCoSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNe2E7pMPLTqwWjT4vGp6PgisuVKawZ4oyP7vnuAFW9qiMZja73hTngEisigArWdByGDnfq4CFEJsqsmYMqjfo1",
  "key1": "4kA7uUi9oCw7LHSZ2FtQF9ib51Mw1KEzRXHZt8HasPHszvBDpdC2doPcdaGPndKQZqReiYEY5BSUh1MLSF3hMBbv",
  "key2": "2ZADXGERNr87ok5XAUhz1TG4VCseStJQXSHKW32GMYXtvh4EBttSnL3J6ZY9LctmL378hYfgBsb5RjBQWSds2zux",
  "key3": "9aDmxWVWcEvky4tgc8q196imzVRStbwQ6A5DNXGVnyCahF7tLpbs9smZyqvYHBb92yNnmw6goqCoGMLupwYzQqm",
  "key4": "2xiE3syJ1bRMEYPLzeuHQzUnFqQbtSbuWqUGuHzh1hMNp46DUz2YaQ1YqL34LJzZbZWayTY5g9Beydi6DSSNDWrd",
  "key5": "3BbDh4Y7ynWbLBF2Z5WCTXbzcFh47ahSxFXonZU2cjaKfNAxtqwCVU98Kxe1kRcZJqmFbCLzZLhiw8UyF8rrYzDN",
  "key6": "4wbbrajqYrke8rCK9z8PzYWfWuGav6TADhnVFqMFqXjuwp4eMKqD7RY2J66AWGZgWGM9Z9FiBzsWn3V4GHYXnDij",
  "key7": "5MzQMqYEtv3ZnPQ4gJe2Sn1toh5ATWjNZtgwe7FDqzk61ut9fEPCNjezsCP5baKJudcEG86L26WooB4NYK1KTZjf",
  "key8": "KcgBEa6pMuZE4QKjdsuSJsNA24hfmVQ9K9cNnt1aMs6xUixbZ7XaLJvcPzcAxun4uKQC4b3Jh1yhVfAdry7eLnX",
  "key9": "4UeuKyViGDRCmExtUagYBVrrGcVhjhkyDiHQMXfBdDSpkJ3oWWTRAChfTebtX2C4UUNU6baWVPz6qcqbZbzYjfMN",
  "key10": "4CLgy3dL2HL9ndY24zhTd7hueuRUyfJqoonvbvrR16hCvj81BFor7ey7Ko8AkGvvt7VkyxHiNPZqZxwdvSuQUPqT",
  "key11": "2tR3CHXdosJLbwYPxPfQQapdtz8X6JSS6WLyug8iSajj2etm7qFMjBTssxqVfRE3jo8MAfCB8mJ1cRn71KjAeYnQ",
  "key12": "3965HzCFVLT7YMyoU56uQLVcroqzepMAWVGrNpXEecCgbuwfo7tTi3Rv7wqEMARKJECAq5TvH3ohfQmkCWRNAuC1",
  "key13": "5bmLU9mSVKrHZN2TJ6oGdXMW8K1BNUCNZisyagX3xH3Q3thLyMsaKesZAKML1fVMka1g6R1Rx45ydLq3Lm1Cb8Ws",
  "key14": "XRHTDwccWzfXKtRGAkWAFT8SY2YqP43A2zUnbgWrUyY43zHYhiTRrnEuo7dNy5KmLbiPohuB4GXoVz2X5roqXaK",
  "key15": "3UQXmEYDaLECVLR1grSztyHVyaYr2JERU4AsR5WY6jNrWQKHJNFVewZWvcLerbJ98VgkhG4cKGsKh2AEXnexrV3d",
  "key16": "4XDAejGH8BRDsXhJCejjEEPW5DUgB94dcGnWhHobaX7SZeY7d3nixWJksHGSAbXd5m1PqecDMd7LjaqiK5dF5A52",
  "key17": "4RXjKP6G3wKP2GGbNvf8uHD23xyyasPYrmHf1niYL7utyZEXFTUbUBTi9ATGpy4TNTKuuZPKwntppFom9CTTDWJb",
  "key18": "2goxunoN9NzUZMumK1PGc21JLiBbLR5EhxTGKzUTheZGVHB1Z4L1m6vhNeWKPaT1g15YJHE2x3RH1SgC5ip14ULt",
  "key19": "4qMAL8yHgz5gaeztMrEyYkBsufQqrFByLrtiGzMQ8LbXd6uAgSoM33FkkcAE3deMhuNTk6aihtb4SsD8pnKJdguR",
  "key20": "4Uvq2L2bvUbXGarJerW18X1kwMh9357s7g7UXkMT8Lr1xTACw8TWc4JjKdd7CAmKdZwbihFvCk9gUud1cf6KePFi",
  "key21": "2LV1xYEatNTMCzmNiUwJQy1JkJHM7og5kyMBkCbuDiPzwq423SXVKs6RhUqhfUHE9vXw6q2jwLTj52xCD2aq6Uud",
  "key22": "4mSfiiXPB4tYVGaXMtLP2TUFT1v8BejQYpXTuhEUjSNs33HQanTVwFSMoyN6ZYkauVfGuLDyp1x78TtRgB541435",
  "key23": "33Jxex8qHNCjhrWxtn8da84qX4RUKgurwZ99dULcbtAYPtYKodsDLcRhi6XHcUMAGXSL1XgEms7nVdUvsNLTKrtt",
  "key24": "y8QEyLgFX1fmqtC8scMRwGmiGLQBVEjkyar7ciGwpJtZFzccBw3yiaPrd9mSu5fB6zUFQSQ1dsyP6Uhu4MfHDHo",
  "key25": "4u2hhCJqNXy9eYNctXbGEA9pCopJgdMZUzFxfnZmyE9hjRT8zBtM757wCTVg6eM3aFYS1dVMy4E11szXmCRMhb4N",
  "key26": "4QwuuLqph6HPrHjBFNuWfFiHAPFTnNTSNBoRVK2mcwZBh8vhKRk8W3HYH3yerqKvFfgBTmNcyrfQXBwqAxdG94YC"
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
