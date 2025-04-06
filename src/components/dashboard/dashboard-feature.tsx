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
    "3b6iyray25URtDwU3RsLFCfXsiENScGrNtbepe8xz6ieJzzwFqmEgXiVWJBrx8uQYrdw8jWqpSw19THntuzvmiFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvwgFs4tozLz4sjtP5CzrJJc5Roce1sGGDQSsHUmmBeMRYj1qbv6umhHUagxZKhp1k1rnzfhC3jF8mPp5hg5423",
  "key1": "5L2hw87bitybSq8574NK1Cs2h2NScRxn7sNHch8xJkLYJrfcS2e8aWpXSNjNEHYbDSGesRfSjeKvQKWpxYmAkoXx",
  "key2": "4SFrGaZYsaK1sRsRF16H3j9hbG9zM6qzFzPhzAFWFhepefMXpHuvhb9QA8qzDrzUv5pbSp4512qq7PJdLhK6XFMo",
  "key3": "qXzQCsh6uNcBmUPunvFEk1xq1wmcg7umgYUyLXsAW7xGroq8FkjMLCgiCP8Gu3zgMw91riEirDrz9x2AKbDxbhZ",
  "key4": "33emiqqSzGhvNABdoVTJD6QhvvmoVut9MUQt2gZEHVwnU7YuTX4d7JFR1vpzspH81AcA6pxpQAXLUWpXDiUk4xSE",
  "key5": "47TN9vUhMNtRqirLcocRFudagGYPAurDUHCww6q5JWvEMKkRXsxyFCe88uq5WxRxCs374UQieL6VkNZWWSdNvx14",
  "key6": "4SSAreEwpuviBxu5BSB7bcDcZjnztSTHQD4DgobpsteekvG639eiQernXg8Rzr4Z6dUfjkx74cJp2F2hg8PBBwvq",
  "key7": "5B6kgPKun1JRG2qeaMWXnmKLDZjopFPJ7TmncG1RnPCGpqAQG5FxfTkJQXJZ4JbELKwo6Wpvr3n5EUDJWGXVaKyz",
  "key8": "32CAdJfLJAU9naszSEjK2feptiGpXpcECcQb5KszUbADu5fFyjFqLji7sAd2bVPnXtdfojABSEaDVH8rXLNagqv1",
  "key9": "k3otUFrQQKWhWbXsTm5W4WPfxrnbkyE4bhti6LD9fKvbeRQyWVTUzD3yYFEPLLxjk6SvXRNcuoXRyvvHxnkhcSW",
  "key10": "2yPuAegnPm6y38dhD48obF3URgBiem8AAu3GPjd1qFVadnnhQLzggHhiRQ4VDR1BsgFfEJrbxDJQQcaznBWANsJu",
  "key11": "3YJBvv5fcKnRCUj5kAfSRSyiYzqA21cN5Ubbc9sH6AUQ3okvbdSdHzwbNsDtxgfPwSeGW5qcKSuZJXnrVoC6mH5q",
  "key12": "2T3iz1E3zLLYpLmAiDQo8gCKQswxgZ4iivBM2UGNCTYmj8xw1FA8VzhKnNWVb4BVgJqHV3BDVoTcckVNRKVDSaD4",
  "key13": "2bEYKCpKAjGhqWbrFiinENuFh4zCyDXn1HEW1rFs28XaQSshKjTJmBtm9QBeuKQufBsVbQgqSmZXNUnfikgWtTXA",
  "key14": "3anhMhkqQVn6UFKrNH72HvDZb5qbPmBygPqF8wspDZadDBgTv5nCwpjfCm7TxUrQqKL7jmoYxibM99mnatqkSKVh",
  "key15": "47j9ZMCheJHoNd4TLfPqis1LT3USWSN9VhA5XzLYwADPiCerjPgSc2kY63p9vVtntEisA1rM3gpeQ3tswnkit5YS",
  "key16": "nPSHpuLYvvZpGDgr2phdnF6HWgvTNfrLJN4sAaDJRZZ8ZbAWJTHz6Te4KwxDeukcnBAvaFgUYNQa4PtvdH8bn9B",
  "key17": "TdXN5RkBLaJW1W4wtoDFksjgf44GdJGTTwQcYM7ohXYXToSaPrbfpoXt5YqVQjrVn82tYgrwyeAiieQ9X3XfNyA",
  "key18": "HiFN5R42y3fSuePHXUMp1m8SYEuPtuedWQ4eSXgnzY6KEa8chMN6c3pQvJY6bzUwc9f5squDNpSWBqywYGyGB1s",
  "key19": "31QJtJLH3YzPvmmGHeXzKZdXtn3ASNhSCWskjtvgtHL6KFpomXudGZqq1j46qTKvQnGMAFvmuAVwwFi9Hh3stN2v",
  "key20": "2CBa2TUQh2H3NvAZY2xeFvKgUeuzUHnUZdEKqe98j6uh5b8CLHK8b4aA9r5ciWoFmAJgGwLe7TTSxGiknwT5384L",
  "key21": "Q2SAEREfZ6xYVgYHzSqx5h8ArkLmEYCJaFZNAuFMgnAQMHCLhRfFgcbo9kzhfVPiEigAcFm5jVhSZoekCo5YNMd",
  "key22": "49qFZUQWL4tr8fG5UjVJCdvy3Vtx4WHBNPbZmYg18YZ3vphLsTuhxk3FQoRtNFd3z96UuE6Jhkkdo7A7y5kkhEeu",
  "key23": "2QonDGCjfqA7BQQEJKg7vD834g2xDP2FNxr9cRccUFpXsfoVKKftQuDWfe8mH7GrSVRMZsBsDUP9zG1ziZpFjoMC",
  "key24": "4mxdT57TJcnTaQ8iacPW344Q5xwpQtJcaua26zgtZ5MERWerGWaP45A3uTcj6kBXxQXmCMWFVqw6rxq3jTpm89ri",
  "key25": "2XYLwFJ9S8vv65CRYsUs7pfmBYqxeHJkXL2VvN2ZvMnKw7yBFgy74nnwSkLqqZw4qizeUX8ehUtbbjrTdNz8jCAV",
  "key26": "46Lnc3hH7SdiroTEhGHxK4nNG2ef6e2iA2Zseqv62VhCbEZDKeHiiBxca4Gc54AzbG7Vv4cqFtXmdgnYhiRyGSKa",
  "key27": "4zL3prYHU23HNgpmV9Q4bPc1UfwxVDAWR29TQoXHBqKvcVb22Lee5UzsTfxJLBrMzFipL1nMgdqZtMFvjhmg3aPk",
  "key28": "pe9V6F6nDPwEGWvZKAq6hrLyb7h75vJYPmUGfMFLzVKS6aFpQttrWV19Bh5krRjSAbQdjWEpHU3f5ohRxRVjoff",
  "key29": "398MFm9mg45cZT31u18uRyAB81B5vkGDZ8ZBYJv9h1HxKoZyuwfFGcrae9hQFSzJG9qnsARC1wcq5kEMbwZZ4YPW",
  "key30": "a57nxUCeTedXurJVNo6B4tE5nmkVcAHi4R4qhJbXdbvu17u4bphKqUCn6L1x4nNCkiwWqm6HuWRhYUfwBBRwCqj",
  "key31": "5j76tLmuTbpJ2MCbB3jgjmRiKiaivQZUtEHLrCMpvqDVrVssVFQqaLKJCYZvzmgpa368bzwBgaoMgkCdHUiZEoLh",
  "key32": "4ttB91Epv1KgSptYbTfLDGkiFEJEMSTvtf93KaDMopoG6iUqRfoPBJKC7dBptttD61VPy8iotNyLoc8PcRRzGCJc",
  "key33": "44eK3jWDeL6MiaACEusgSXjrYG2bx7vv7APUaLzxAFmhJocW2E9KUfKBDpE55oMGFd42gFVBHn1engqSSiVqeTLQ",
  "key34": "23s3A6UYoYcEPQFhqLWcTLJdiZcGYhNao2LCZMwEivtWozLEZimDq7J53jVW9eEYjL74qNf3LkNqDHDbRmvsxACi",
  "key35": "63JKZgwJQKVzqNsw51HLkxX8EU4A7EBh39eLqehqHQqHF9dDdz7Q3BKsGPhvcuLPvGGa34grfCvRgjupLZaSgPCi",
  "key36": "3fAcUbYbW1xVjUTpraFFvCeG9bZ7qg1g8DtFCT2cUMYM3K6DF3javeQsZdimFwHjN75yaebKrDfEUdgKtXEEhrTM",
  "key37": "4MU1m7Fo8j65GYM5x9UNTeuGKA8v5fDPHN9mxFfUPTui2orKrtP2WotYeTYTcZyfFLeEMaotHKjgrkToZvxnQ1id",
  "key38": "3d3gQFLxjazaW1GSihGxZQihU3T5xWje8DCoGp2hjLXvgK31cS5RfVzWK7VRqpbTvwrPbEDVUhFNjkSY93LhGHzC",
  "key39": "3eZjyBXFLAJxqScUKzs7e3qCk1Nc3amNgq9ajnk6SpJMsUoV9VMY4SpuF4p1ddoWkoGJcNgUwxVL8i7eRgk76xeV",
  "key40": "5B6rjErhZapidb34VmKysXDiSQ2XSAihWHyGAi1UQQJGgGs8GjxecX19p84njwoPhxuiVu7NHKkucxrT4r54cqRS",
  "key41": "28H5ANAmZjDC1N5xgtBWAnyz1PVSGH7vHu4jxFEXry17ft7U7EL5xvUtwDoyNbGwjjxVkJwX91Htdhhhi3W4fE9Z",
  "key42": "5t6crbk7TdYgE1WBVRCeF3SuTasxTVQinVRAmiABM8vEzGEnvFTxK7fhchGQn3QLQK1W8bw1o6XwuWSawpNvV3TS",
  "key43": "2aswdH6t7pgaoTFN3e26GHYjXAp7J2RC1rHqHNWLBK8sAuA7s45SBGuYYZo6bMMtongeEmtNSy5PtcyUJESESGLh",
  "key44": "3JwJz5XtQLwqQmxUzJorjWk1XDDJWxAzhAbCEeAjRmdhMM3wbse7XXRiV7Fmvabg3xBUdmzmsCUSKxKEQJWC2SDH",
  "key45": "3tFY2QhVuxekVaSvDzbS4dpSvSfukq2XCTvaKoyW1M2aT8sowV2g14uU3M4XEVdezs1DUpgfEqASvF98takTV1Hc",
  "key46": "4Yc45PDAkowQajJXipMZrqBSeD25GYeoZchuQvPBkgKJLa6LQSQ4UctJv3nr9971b7VDX4xLuUM7s3PTHPSwGu6g",
  "key47": "5fvHcTV8xxVDf5HMU8CDdseyBEDJXpN71LCVCN3REtA2Cj4GBR4RFoPB9tK4ZAviMKUP1oDVftrznWrJjFzaZj4D"
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
