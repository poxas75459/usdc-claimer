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
    "4XC74AkwGKPYbwwyYQnwF942HuBTSLKCi5L2bNBhtsdNRf8iUhiJUJtAsi9EFDvDK8Vh8zMW4duwPuikAuEyFBM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHuMwjzL8RhWm6aVW3KxPzn6e1VtE5Qmn6WCEyyGAq72uUgh1uxdzF5313YkYrgjZYfP43Rjk7Y5VaRs5kbRnGj",
  "key1": "2dMWcQHHhFtvwLdQfKdrrF2Gg3XDCphPstZpKfzxGB9rw4BbyYuCbaaa4BoLfbURZK6aZRnFxG43VpNDbAaevnaa",
  "key2": "T36vKzCA2ey8nGuT4DvipnvzQD7UF7GTvVBL3dDdN1QRB6mQjTFVufBqqbmPSMwsjiM7si33F6hXt3sgiJD54sr",
  "key3": "mxTvYoFaCM3y1aop76fXt8pwSS9xm6pg3vs5kUNsaDfCHXE6rdond2HuzWqUDC594jvXLgnfKEhJPApereq9d44",
  "key4": "Ri7dRzvZrf1HAnMmSfhQKBKAG6QaRA2gX9GVVBrrvfB29kmzHQsx2cPH1evsVLtyEjSDPAfryxXffUWRvgdQB9b",
  "key5": "5gHNBab4WrGUW3rSKZcXQXxoZNKE7xeQeJbmCruN45suPWLakt95XV48BWcQNdZCe5FdscyiURMfbEd3YyGgSCfn",
  "key6": "3Uadsr6yjMBDDZNebSa428kD7ukpWu8eQ7vx4vVDvWtpdiJGejV9McqRXzgUcdBCor2npX6h2j4UC9zWZADY8nRx",
  "key7": "5Jx1RDoLRc1J9tSwH2RxP1oDFBGHHwUKNPC664tQr9kXHDRBiMz6qrF3msHqDtTUV3k6XazhMQL5nM2h3oijFv3V",
  "key8": "dqVuZ9BQFXPFaHyozJ8bFKkKTT1n6pLcqfasn2oC4KRaVH1vsRE7uiLhcDYaKX3e3kCpfrVp74DPnxbH4K5yMuw",
  "key9": "2aC7YF2Y1NRimSuB3jpXcz5QVAknDbEDV47mBzmsnRg7PZ4p3fxG1kcQbHKD9QtswrsLgsrHJN1eVQPTPPhMJbsb",
  "key10": "4iJDk2stipyPFfYY7LsbPUP9ZreNzeYJWDN5D3cZYwjZwesCuiAwbSGXUBob5DSs3yjjQsupAsP24zSF1DCxH71w",
  "key11": "3XwC8umwN7ZvQnN4Q1tozNnsGMsrc9NAUL2tAKQcMDoxLbDo3rqW1UCJsHutxHs7AGpCCruXi89FTN1ZF7WAY6M7",
  "key12": "5agBjDDwTgudz1TK3FLj9gt88sWzcGdKg1YN7jN88zgXTULGkKnXWaAsqHt8SbkeKmgtUySzEZ3obotJudMF2zwH",
  "key13": "55hWNSnb4nmCVMaUA4D377v5h3dtMahckjcUbbwTygyNBLjbBe545qxm56456cjQwspkByVGgwZVZiQay3BD9kPn",
  "key14": "3UGLcW9UuWGnUFTjFbz5C3WDPMBkFb19cuYhea13uLNngQr2wQ5ZUq6oM1rwcPsp9p9ta6M7Lzr5cqYwAefq5i4z",
  "key15": "3wmTYhJD6eT5S5wUAGWtUcwbzVAyBg7EZioXdUs5SoSc7js7ZEV8BwXvPF5FthNyxq1cDmzFQhhwP7AVyboj6Mer",
  "key16": "4Cw5t8KsQ9fgnqQJapN3dQ1Rwp8SckdkLzASLk1Z1wfo4aPzyaF3ZVbpHYD9KvzSTHRCCsD75PBmTEJNy8qRTsSV",
  "key17": "3KAp394VAhDEzVtRoaT9x8P2J5pfTkHdtvBH8ndVw8o9jm7gbLG3X6Vn7MSxncA9qgaBvbx9pwzoHoJHprDFngYQ",
  "key18": "3AYHorxyMzFhKBLqBKY95SsSmmJqrsqUph3ap1MnfwrHFPSzkUz6T97n3Jp91BefRuSt5hrHVBZBHFidoDkptFXu",
  "key19": "369txsvBNYgEYasfMowzftZAwcoxyMN8mwH1z7GzvzUXxuNRX3UBP1WEcRktsHzH9xico31Vi65Z3qYHgxA1w5DV",
  "key20": "2wLxTKg2vqDcc7JJo2sVuAhGMFJGLcXyxFN7U3431xwyxpR5JMEp4qisCmTdWDo4kJT4chyzacAzCs6uJYQ2apT6",
  "key21": "25fwfU8dkDEfPgP9FwdmXCeP7paaB7nTJfgixb6Ey3GSPg9dTpXSBr3LZhWoUgZvnxeB6dabx5UZCq1nrfuyu1sP",
  "key22": "dGxfQxhph4Sx89gdqo8WJfgqmqjouwXcFFERp8XYbs87kHEyLvWgzrdj4grJEEU4fxFLtuQo1L8Az8nTwxDfG1J",
  "key23": "2H4isGCxWHjnyvbstoMhqkpimdSBaaNqzHe2fPMzthFYtWZAM2MsryHRZckgiZSKEFBkn1ZDkcbXWhneECAKjYxK",
  "key24": "2Ag3TkcWpGQpPpbHCNdKvbJLckWBGASg3EoUw7vpPfAy9o6drCUThgrHZ2gxQC3HhUDfRN7SjNeCx9BUoQPvnGzF",
  "key25": "3Dto1MberqJhxzYRTrC3Q1N9suHJygfziroEDh6S9sUGa3wXPEjNAuRrLyrGFFJkHEZKgDmshydF2UCEwG2qbQ1k",
  "key26": "5QYpP8xsbBgXKwqejkL5VfFvtsguJzPLZZeamRC8TxF3RVQam2ewKUKjLkCAf4nCGpvxYp4XSJXoMCEVnrGEJUzz"
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
