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
    "iL6TzZMoubsH9cRnEkcD3g2nSPV1ZBuBfg4zSU4WCxyZkR4xn5zfTPZWNtJxYNv3tn69mPcXKRpBKwc6SP2W317"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65bDoCfKmvWtjAZxEq2tZvJRpCGvbTe48pKYoudr26YjLBn8LcYXUgnWb5qLzVxkuHR5BCKHKHzBPdmNMiXCgzPL",
  "key1": "2x4L41K8ofLy5uNpdB4rWSDZ3nxMkUBEh2zBmjQ699iLinEbKKQzSpygxSmUjH7xm3C5Y7YLSapSSS4PCKBLzJMv",
  "key2": "3WFDr51vvBNfZ1FAsyxGFc8qF6YpwoSwMmUYoQZmVKmtZkcuQTJ7skgKyae9vYm5GtJgDrd7ZSXCKtyDv89jgaRc",
  "key3": "3QHZcA5gjctVY6cD9VYbfN6Ur4vF7pGAxHJRmeswL4ezzw7zsSWTaTCgzf7vZBkSfCAfAAu2yFCFXsXAiYuhZJMZ",
  "key4": "ej4xS5ciNGySocEt24K8WihPcyayxmwk2ynKgx9WnLHMjSVy6rU2WYPi7BMfoXnfACjcjjJ2gRMSWuVvAP6JGRC",
  "key5": "4CWj1GDBqx3etp974Kn6y2dZU5tcpq5XoCoGxdiz5ELNrFLForyuYWvLiA7DxqCmWFvSBo7UiUM3irLFdLJXG7TC",
  "key6": "66o3FXmbiY1fQsVxCB59rgP5tFnKaAij12XsGqEyVmaKqe8Ciz13KubCtYbUftg2e8pQJv5VpcYetHt5qDPgfgFY",
  "key7": "4joWcbafkQ5517ZTNXNY97beNCgRMYGNuwPxKFeyku5ycUGHUz25Fzm6Jpdu5os3YGatgXnKMbAUWhE2po1uecPH",
  "key8": "ChrLy98nVe5X5Hagv9bjAetccU1j2YEXzzYFAKCuk711eMbKJdagav9FjAgyZJ7Yd8VAMk9XQd9UGqEzDhBov4v",
  "key9": "6rheo4LC4Jv7CV1LUrCadvXVgQNf7WCRsF4biGhuMHhdSAA6oYR8QyvH5BhNvsgR1Gg9XhCwGGSat97LPoyLC63",
  "key10": "2GxTLLG2JMrJwZy5EFoBT3Z427kn776zUeTWFWkmVN7uRM4E6Pa2UfPHLRKj4ewt5F7U5fT38diKczFD2AMgt6ki",
  "key11": "23sp1DvmfJtdKFrKdsCSHqbmyArWjMY75rR5cJjBMTWSk1ovss6jDT1KCPB5NncrkH2s6XLSomM8H9GGXkC8AoG6",
  "key12": "uzf6Yu85MwetLF6wZtMsnwHz1iUj66o8VNPpY6xFXNt57Yej46ZipPDQg1aoNsdGNeL1FbmRVUW8CeKgWW7mMps",
  "key13": "5S9v9iwygToPPCqnCpP4xjbmpxopVZFAfB8MSYFbUsTQpQHBo9XrnbP5bv7fZouEH84J3mfH1FYFp9yzSgiFVL8N",
  "key14": "44ttZhRipvAeraytM3EeNyE9RTFFi6yv7KBb9gBGURHrNJcjxfPJmgY25xUYbcz3hm3jG9gmjbgSQT1Sofwu2yKs",
  "key15": "4VbooJ8Nbfx4kwM1BixA8TxnJM2YDXrbGy1QMfth5XxtsTL2fZSDzdpQsAanWhPc68SEUx8wGfwYo3VsUkRehVPH",
  "key16": "5KscQLDQvJnNqP3JHx1aJtbGmywEgv9Euf2T6oMfhjx4urBjMcBG1qketAe633zS8RDTnxD9TfF7C1do1TA7yPrq",
  "key17": "2N3yoa2w4NhnodHzwXdXoguaGnLBhsJr4YM2T1gbPYu42at2sAu56SRXfkGqruPLxN5YESRVs3UdaFuTWNxBa8hJ",
  "key18": "41d27E8qbSy1pn8t8LuwWCb8pKvpBifcwbZC2r4bqAwDkx5icNvY5cPXUSy8J6tmoMrvDk33Cikqp1AcErBTkXR1",
  "key19": "2JR3v2RrY8j4bPgHo7UEMYAcQZ7RF3YsgzH4rpo1Bhzy8qbA4C7GJAvyPLu4tS43Rf9vFtaWiRZEfSEsT9xEY4FC",
  "key20": "2vGPdxsDxYZAZYedBXegeSWKs9zPSYgkWSrv4r1oKaRGoFKw6KSuuJbu17AddNKfFoLY1FtZGaCjrgTywnX5WDNc",
  "key21": "5sLXSj7js13fsyKKz6ebAEDS6MVYhDYPbYV1zQnfeUW93PUSfGsM2sog9vzVHYpGjjY8zJ62Ktq2NcMRio9zxNPj",
  "key22": "4ERL5L7bKX7TVdYyLhDT9DwN4pBte61iAcqZszvgkksYoRzRmTYuGPFxkLzN7KY546nW9Z8GX1mwPVcPV4h9JrCe",
  "key23": "4LVgddCZLw1FB3yUcmMiHjD1uLg5siYY3gLRTtQSZELh6hcA7LXL5J6eURK6BNMYpzPRE8dG5ohjsYiVNdSC1f6i",
  "key24": "tDRcJ1aE7cHoCN57MTyM25RyQ8XGcLfU1BG8CLXEdtCHdDXWVxZp3WcnkFGjUDndhFGkDXVVSUYgvAoWKx72DZq",
  "key25": "2GAjqrmDhShrCgnFmfDNhaG8zLrvJnaNF2bh2dmjmaJ7LZsd7mtiSoUhB8wmdFEqBcJism2oN5e48mmAZMMUuwDc",
  "key26": "5ozrrG7FaC7bMpTxVwnAmr26cT4DG1dWFMB34bqwpP3nSDYA57q2iAwwXqjhLP2FJr3dje7v3hjT9fCVtzeqyBQK",
  "key27": "MrSGPYuQBoMMk52GqSu97xgimmnyqT8XEmfKBpvmX7Vex1EKKfhnGKFRZHVtHoG4Lvcq2s2zPm6AdVhkBippq4X",
  "key28": "3omUUvkrcXzB8v4Zx5UjCmCTp6ZG6fggfnj6engyScygZuZmUFBm3cvZmNzuehmUQAkLzADg9aEYLjMtLNcY7MQ1",
  "key29": "At1YLQ7VFYufNZVhf4oHQEg1rmmA1uZVrNPXuARXiy6uGUZY3eyk6KDMgHCHQrNB6AhgFydGz97RXe3SZB9yQ3E",
  "key30": "5UTYbx3fBgmass2NKHr7Ne7mb4e4otcc8G9yqjKSr2aCA8MXjBY7kXP1ZvB2SSSWV1sXiswnSV94GnAjZjKD4NZN",
  "key31": "3qGTyXtSmnyCHWdF2wmqK2shMXhEz99mLRP9uAcnzS98kfFfUAy8oSDKfBzLRh6veScZXdzjMugn4MaB78fXuw4g"
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
