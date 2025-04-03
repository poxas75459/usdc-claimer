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
    "4cEAcQ76QgZbRuRfMkaNuKJgua9aDBytvw3K9s82HhRr5tfH85kL7ofSJ131pYVto5Sd47VUSPFbeyDSggkPcrHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgfEu871TJpVtbtdjeUv2vSmsfgwdcAWF5Z1Dr1RSxCsijfbQLcqLU4k55zzJ3syBNeDoWKVC3cGfzonssG2SRk",
  "key1": "5a98T4HRHJHKW5zxdkKmufzhqpZhD9dh8oMg9erjBHXRUyjVUcfJyxfAr222yGoZe9aCFQVAdgiit7Hpe9yRbxzq",
  "key2": "FAGDGZVx7AVp6PBfrmyiwec2USUiEqkreea5FR4m1a1as8dQwiwWS4sKEbXU3WMMyxnS1Nq27ctJuHxofpriopM",
  "key3": "ZeD1s667bmVAxBWVstr4j6DG8X6sqQ5eEd7A6ozHyywXTHY2LK8mA1xSBFXiafZHp3x2uNdJtP4sfGgxHevdKZ4",
  "key4": "3rrcS2KkgdUu6wkrEauYTn5ZaH5kRHBuN4gCip6sh56BHEU4w6hfeAPmrEkzPQSTxeyB3CfKqULstUoTHY4npeZW",
  "key5": "3bcMvyEsrRDZ7DmrcjponWVQLJBPyqRfwBAb3RxwSmMSGSqrUhKdut6mMZ54wfL4nKHPPaiNY7pbXKf4gHtTeb94",
  "key6": "JCsVJ3bfyJjT6b7Zq8jQPmVVw9ivvsbpvwJWVxq8QyWNQaKBSKgkD9KHhTeWexmgdxhDUFwoKs7J9AUETtuYXKL",
  "key7": "4wq5PMeg87qZzw4FLZ5e2hhA5chMNjVYJCAiPw9qcNC5Ca8sT2LDHeT9mdguz83noReBfMQRrAbmrPwfz9GSjJa1",
  "key8": "mBY7nLo1MZvqN9VgvbidbLmKoFYNvtwcJcmWoMawgS5Cics5coU1GxbEjU4z6m48tzBCwqqHHo1GPpnWbNwJ7iv",
  "key9": "5t5HvZsy8DZX1cwNXscyzrcnua2S6bgCmsPCgNXfpFaLsYL6kmpyHi5s9N32MJmmXbuHWPRU3LSBS8SqMxk7CWd6",
  "key10": "65zCQjzUXpn33N7ihebGEH15oyvPiMfazt1rRgN5J4Z36mnimsMuxaQK45SHEikwx9PZEhAcgzSuwXMpGdGawmJ4",
  "key11": "2yLjQfghiV7jcjaVCPj6y2dg6UxDZkz2tKQw9Gt6gBy6s7WihJi5op9EFzwXbYYtXoVtpydJY9qusXsGzPjj34zV",
  "key12": "2WFdGon5MvfaBZaWykXvvt2MXdLe15mtfVdwpUU2zV2bRoiWX9gxJHRF2ApW9huJ2ZKis9CrBPE1ZmLL4gUxRUDx",
  "key13": "1rBS9t6hHMTkkoMyLi9TCVoTCHNwQ3KKAxLYzxRZj8CGgL9NeotPoKy9iMrNft9jyPtoU4u95U8xcBbb8Z2chFF",
  "key14": "214k6EQvU4tbmAS1C3i4DXPtoufp8LPpYMiKxLXDwEJFP4Q1GYFExXZM6BoZq7ajn6MewbqKwUG3Yr2bUqQWAA8w",
  "key15": "5wkpj8dwncxwVDBbXLgNafyEUmjTwqKvygVWCbZVNBrniEe6qtZriaqY3xVJaWsuMP4gwFS7NXX85rktzWbUK81a",
  "key16": "454X2sZPqUxvXyjWJCNq3bcgrgdwPnoSrepEsa2Ne7AEe4Pee7GFB2vpYWoYtU1dGWuWEn2MrWgM9gcA7rN1xsHN",
  "key17": "63aYCHSX174B3BiPSqY1Q41stSHR7rHaXUNwBMUR5jusasGTFHmvn83Vrq3GA8TZ2PEWdQz4krkmEsvmWTncz7TH",
  "key18": "2BkJi2YkYjEof9hbKbA5HAJhSwfPMQYCJwPXYvW4CKDJhGNGbLhCD9Q4qN1ZryGe1zMs8dPtzMwbmBKcKv3rQWp9",
  "key19": "4wNriTRT7ihEQ25yNcTyN7divf8LDwLFS3AnxiqWbAHdcpNtfsqqs4vuP3sJKczLkjsg1YRTwD8bByZ7TtEjFnmi",
  "key20": "23gpUkJjN1YerkjxUALwx917oPySfJsSUK7JgtZT1B2ndcvqZL7Fz3iz8vFwUmGKACANyeLyCXzbrRqwMNTAdtx4",
  "key21": "djc6C5jLf8iPrxTo8RzysgeCyDvcxzUjQpdLoDgirjaZdyB83h8Utp7D7Uk4CCskfqCEqGQPoTzUeeZEUcbryUy",
  "key22": "4BYcxhbnBVZMAiWSoapUMV4evsMgcX2WirzR8mu4dtUBaoKk6Qo289bVJBiMKCjTxZQj3v6s2w6qcNFj6FrZ2E4J",
  "key23": "2d75J6EM8pmJaGa1gePnrxiEtM2WAYiYRAug7j43kigts53ZDUtynD8cxtHZtxBzfHTSSuMw3oT3yRtoQzFqurm5",
  "key24": "5avbbob6JSFUHUshb148gTfrKufK4vkBp2gRJVDutvKL8KmJrba1qUdsncgvkn18qZEtqVQXrS3Uoeavq9RYwcNn",
  "key25": "2RTzfMG7t8abUAK7wA3pdsxk8F32DaFNgURh1dUAzriRjnKSfqvZ8Tq9SfaR4fM1g4Q7BhQceYe7P8zJu9Jn66a7"
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
