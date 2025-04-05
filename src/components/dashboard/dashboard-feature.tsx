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
    "2NGYLfsmQ5gNxzBjM1yBkswdbmYFwn7AXvrXuAHdG4BkESV8n6fiqhwcxwCzyv9M59XKFpenYdEre8zHr1ohE8wU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u6RSqHMF8up2E6BHKMh1Nq3Mo2GVZtd9Pr88BXng991EoYHZY8eHBDurRXuRgEkFeSCvS4zFSiVPRoN92FADCx2",
  "key1": "41a4nS8MK48LCDJRr9AkqhcYytuofYVzg8xFqjLC8YvyEAyeiQwHddVvAZG3CVnhtemQmdg3sPhRMYP6A33WNor3",
  "key2": "4TijTwPgWLgXui7WCJDRU5Uh44KCJb6YvqRKF2jcTyZLFSt5iPD4jT3YEcULf7pXFE2MPWnQurzWpQuTSGEtobkh",
  "key3": "SVaGK424XEFYWhQHrscpvfMrg99HAPM3Ri457Wvm8WVPWbNS4B14qEqaCPLSorUfnWPX1xER8tru17y9ndisQG4",
  "key4": "5MLFqQ5hwQsx3ksMFDJ2xhiaoRcwrd9YAK4wEo7dda5oLEqTLcCVGKbsPdeTPu7jjaaKhaQh8cnkVMhYc14EYde2",
  "key5": "DwSwDPELdXU5A7qYQ1Ynaf9dztJLoPG6AQ2GC2HmnyeFBh9fuqiu5yj5DjMoYo1tf72bgbAQBRTh5rftxJPSED1",
  "key6": "4HMYAPycpzzNSABd7w7mrqT6uuijM4DJX4XzDVEXyfLviqhJJCuGtpmHPCrHba2bkaLPY5KEnyQWm6wXCRj7J9rf",
  "key7": "3aNMfEUoHhDLYEUt2o9AQ88Wee7RFmvXqTAvYrpDotihsHhAHrmrjEe5Mx9xKWDK98PE7iuEPLkHodRZbP84r5MQ",
  "key8": "ThRb874rL2kBxSaT4YDRLhefQFeu2tvAycmQzcGZcE8HHc3eVRZaHAWfhn7dYsUXNEDu5kjsnuvKY6gKn84mU6N",
  "key9": "647YgMMR8cftWFEey2eAPbuFW3YeExit5TcDk8fVKyDPYDrAtxCaUtno4W62bos3GZsZkcteukcE9XnMkUhxKbE8",
  "key10": "5DLaK168nQ4C9t8Q4ydobjHAKPFWmWtWquo778WtRCSrMe51S98Mq8UQCF4v5xYw8Xygb8oqKLuWnTJXTEtcDB2q",
  "key11": "3tESCvv1B2qfqtUxNmVtebhnVuaaK18xNvBArjX7BGLLYJ5hBL62mPg64WqEGNXG1YCTDGu6BA4oS3exa2JAga5f",
  "key12": "4stUJYAZ7MEFMjzTL3oE2Jchrker1m3KL5hdKnGeuWHxtHMSjmirW2QgNckPda9YBwUFduAo1BjUgK487QDw8iXg",
  "key13": "oBaK9JbDQ5HvowJsp4KYQjDFJYbLnKBuaQmE1v5f3FnXoShMrEDLEk6KiWcM3Ag6bXpGvGdVxtWq5VR2GvBeRYP",
  "key14": "2jQGGPHtWgh2QF1ENRBz8QuuXgjUd9Ud2pMWwk8571D5UwNdjUwsR1B9rV3rZPzSmurkBm8oRYofZispkpev4S6z",
  "key15": "2fPuQBFDviyZAg9Z94CQEvt4jxhTwC1s6NwKjWeeeUqR9as2wooNcoxtXvy4eTtdFtbPtnWqpCcy6YUPDv93x3NR",
  "key16": "wXJ1ooUaTA5oicuW43fSn9dasx2iJgZMwZpf7jqRdUVAhmmeo7QiP9TYUu5YxoiHjp8FP15PP5oB44DC42gr1k5",
  "key17": "5s9kU5Euhw43hY5qZ5qSfda7UTTx1HJX1qfoNLk8iZwy8s7eurD7knB5XKJjGCKajC6CBHViE9UpiLN4f8ngrgWh",
  "key18": "4XSLa6L6rp46TViWLV8ZK7BUQEDPWXNx4XxxzcadUT6SMtTbbqMVrU8RWnvG1ajCk8uQRUfkXLNHaAxownG9TSsZ",
  "key19": "iUCp1NZr7HLNs5zvCanLzx7dPfcdt4maLBbY5h41ZERKtYghWGzgqwVXP9GDPWEZVrR4HhJzdnnzX8Qu9aTFUhH",
  "key20": "5y7tKuooiK1sySBpHySGkLdxBVspMPZAMrdtaw828hvKV3DCsWCeifB2epC29G69Dpv5c8GcM7vHW6yCikzotAe7",
  "key21": "2WMi3xtYDYMqoMUxwKpU63iqvJw3N5APrSSLYfjGvugb1T1omcbhVzrDK939dUnT9jJyKNwxHXAvDthWys63kxou",
  "key22": "5LDJPfbzUaZ1FUBa3fcAB9nxBUbiqtmkWkzsfh3UUM7Grm1Jogo8YTKoGoHF5vvGjhbnV7dHSe7JkNLpMupzKcfo",
  "key23": "bFdNirTf9n8Q7QsdVNhrbBVHPEhu1MxriBGmnTT5MMaSQvdXB3FHMhi1uKJviZ8yvCKPuN4uhsDcHyh9R8ZnK8i",
  "key24": "5ubuRGAgnHeNrYrRYMUybrWmkMmr9SnQY7LLdzJh1fgo7WZ5d7ee9p3XmiTzqr663tbhWrCevLSvVDhyKWUmQ1vY"
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
