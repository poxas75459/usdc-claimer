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
    "4qwCqzQN145Q71DoQsuvrLzBrJWuTQuVGkuZjt3DdVdgDNq9RdoyY36Pe5M3FEcJArcN8FYjuMoqeCV5AnzVJAJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DuXhBWGNYioLW2NF2fmPNFiyFyquwvjBYTQbDm4jhUyrCBGkrCAibtPgK6fTFQCrzV8j7qMfTDt2HUWtercQVKC",
  "key1": "2Jtgi5A4DhGsUps2Ysg8B6HMRfGxxUQrrrG8E9QmjJKfoJ76Kvt7KKxYTn7Z9FwWt6NRPNBMRkogWhRLuA9CuGiZ",
  "key2": "3ogX2yBzCCjg9RLKuW44NEG1MHsFEpHqWaQGNTXivup1xfRHMovikGdVXVTi4JJ2Lv4F6NguS9b2sa3Sxc9WgTxt",
  "key3": "2PuruBWdR5U7v6a4ripSDV3yZQq9hchJjyv3QaxdpZapZZJu3LPzV9KepVoNb2vSYaedj3CYaeqDsqb9V5AMpPmi",
  "key4": "5dNL7aVB7BY6fpZWeYLv89UpXvMFfsYDB36idxEtLvRgEFkjNG7V4wvbeoFsnCDqtpAZDYMxjUu7B4d6SPMWDgeY",
  "key5": "5TPdRoytvY2Ax5cNY2KaW4puydYdDnj8gb8FsQBiSfWbP7rGAvoz3qVMUVufFRCSfAQfEwPZpQNQ2Sp2DvrXFRFR",
  "key6": "2x2w7q3KP2bJPaoWNsTNgQQxrHZcmY5MDGy17WSBivgWvN6fwqdqnumfm6RcFvoTh2reNPoJRXL99AMhN8j8SDxq",
  "key7": "4m6ZF4ee1FoAhowAWUroJV9qJHaBzfbPaGnaK7eDMreF9ym52GhES6ihwgZkvU1wdrsYUDtHTvADSTy7q9MFQjdU",
  "key8": "4rzHUpqhdqj8hTrDa4q6ZAJBFb5oNyC8XaJex2SFUUHbmprMZn43LkUs4r39iGUqKmeAbGkCv4rBpqpUhDdfGKAc",
  "key9": "4usQaUfytZnhUPmBeEa3PrzvtuK7VhkrKh8eEXhkm9H5ZiKyyKLQjcaUS2FhgCmiy51CqTnMsUPipzoVDb4pteSY",
  "key10": "67nqTYUJyZiCjJjESueYKtRsxjSNnRXUkJNiMuSKnrnnCSjDkfsUPeSZWY319jEWz3VxgsrnzoRSAZ5QMykAX4tD",
  "key11": "5vv44258VBmgkWDRkCFiA7Vwm8grBo3YLW1VdEFehwtbn2x9TeczK6tA2fdsQ84LNo6o4rPfJrScYai33DJYBKbK",
  "key12": "2katw3vsxwFYCi93ZSAuGWVKFQFktZdH9oApxZiXjGkVtufhJv9KkQnF45Z68ZTrrsCyL1CH3psCYWVk8EGZCCwW",
  "key13": "4X5J6WS2tzYMix7rn2vqKK2U1tLtc7JXAK3jyFgHJfrNVBRRYG3Q6uUf7uQr6iF6m3TUcRPSprjxrg6cDYrnCLUR",
  "key14": "4kAuJaQNGfPHHGpHDu3siZvwVwS1QEDfMazWHU4ZnF3BJJHfwiwRUmEiYRCbM2sHvEkY92cLiGrkB5jiKd9SrEBs",
  "key15": "5TiFgga5MRhqVozXb4vKm1AffuSKKzuxvh86Mx6vAG8U7J8ExYt5ZE4bXJj1bnhjzRvmh4RxiHQQKQd4msUiXDRz",
  "key16": "b1AmrYd8GjjZdD24msAE3ywSb48fK318yKwMTmakxV5SaUs7P24pUstLNxJdqAS28f6BQXeBtAv9s7GcRaqweD9",
  "key17": "5V1Nq1unEwQQShFZao2muf7sLu7u8TLPsHxtwXcZSFoyErxZorS8UbTccJBp4w4SWe45hkvARzM2FFrWoanbRCNA",
  "key18": "VsPckb9JKuTBjCDUvr2eaTDmHFaYwHDT2vS5hCFggXVs6NFvCLH3ddSRpPQd4XMc5hH5a6ftR742AEpQrTQ5v2V",
  "key19": "3urXMKbQYzHfq753fcDNTkixbYpZAvRaUKYfeD9w48fcEcZDzUcnD6vyUc7vxkSd5q2HY51WLmWj6Fh5Yu5qSbXd",
  "key20": "WYisJ2iiYx9YzrguMmzH2XRevG87PdPDbZUCi3pVEYDaBpCABDvpnNKXH7r8VBrZnezDzWRocmcivRQpwXDqyxj",
  "key21": "5tATQNCAAh2WdxyUFF81UKmerKgbxmk7oBn6mgTRATHbyWnHmpMEHVyHT8MELzx47n8niAZd4uyY51A4Mqb2vKSH",
  "key22": "42EKzCbsyZ3dVABUMtpPKakDQrU6NHAagZiuJbByqMvMdoJQSddjTbD4UbxUEk12hiWRJiG5HcDA9eqSrMZVuhFw",
  "key23": "5nSvibNyJ6BXmgH5A1oDWzf3cYbzY6aMYgPy44oAy16Rqs6Ug9rXERcM7LmMgohuwevnvnbagvtXDfvTAZM3eRq4",
  "key24": "R46QqfsFJG78x8zexQkxc36Wbm1iFdB9MekZcSnEMPMzJ2F2DwNBL19mqejG3egMjdzkP4rav6UeF4H9VB37FJY",
  "key25": "dGdPpmV5JAhcaYd7QnCLFs6QmcTNbURr9uvgsRg1EzEYAPr47XLLT4RRm6m6xPyTcBNfnwfKaudkqaX8TdfYYB6",
  "key26": "2PnX2ZqJMXtmjJeazTUbDF3gWy8qqmjrQUDcxYYmQAoQNogNdTugncTehZEroKirHyqFe2CcxnwBDypFxWtEcWQ1",
  "key27": "hStPiA3EKPUeRN4FrF7VKdpA3ZotyQD84kogMjhzM3ry3EypPFb2cvxhoWGobs2wcTV3rNsFDDAR6uWnhjCcCp4",
  "key28": "2Dc6LmeDmhkMZtRF1z85TEUopfP8HwqmJ6XQwEfAjoSAaE1E7t1ma7P8sKsN6uJVzcZ3QEC2nbiDRcevqDuvgJnr",
  "key29": "25zQkqf5PT3gmFc9zhASMSL6BFHaRDVrhWcQvXSoCY9y2cTqcU4D1HgLtMJQE7ohVhM7kDAkNbtnn14eEijJwgC7",
  "key30": "4ZUVVHaSWb6Emu21R6u1cCigcjz17j1XhjDvzGHJtbtMixzarNBNNiF5VJZ1XECqsXyc9CPYvKZq7h9Q7tSmKrVE",
  "key31": "3u6EnihvG21sUdBbeAVJXw1Q7PNRarRYWcS6nCkcmL1zkRA4gKuNMRvo6T2M83hj6oRo1CvfqtDKdk7zhVAtkSy3"
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
