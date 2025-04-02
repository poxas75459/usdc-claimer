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
    "59r5YpJFr1jeby9WpAQiTuqXESjfmi8SDVam5DRkSN6TEemY2p5QAiQZVkXDbmkTjRveuMejTttK1ZcEBzF9aJLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKu5SeDtzmA8GmbAxY2neXGKuaovz31WpFoB7qAsUAeiuag2v8zmXpLs7hyvWLDVBwQaeHTR68jyWAtHg4UafAh",
  "key1": "4R1tTJJFUndioNfy9cboXVgYoUgeaUbrKfkqATc5HKFtEn1tDiBKY27gwqTcrFf4icPTogxNcgKxTZPsWCbsqN1b",
  "key2": "5bzRjmoUockdWBNCSw2kb9fnXbVDwgWd8kRAtTgs21MWSbMa8i8bF6bcqgSEYsnAQSuKsLHVdURnyHMRecPfDpWB",
  "key3": "4SNMomce75kdrcEYF9QpW9Dnbw6U2LnomvzVyKrYvXiFeqzVHFnvSvrRWvKFHtf9XGinq6qoJYRmiELJTQ5UqP1L",
  "key4": "3CzZuZ7mJiD5yg6eLmR4SG3pGozFQ1rw5ypioAoNyT8DbfeMvNRJgcd47jgpMwpVswRZnS55fkdMEuWPyKY7a8Bh",
  "key5": "5HXZNGjzsG3sfdgxwLYQ2TtFXkqjLGzRgmm8qMPQbWmgCaqbeE8W4uZ1EBYXbbiGjd87kRwiQQAHSVg4riZgzmuN",
  "key6": "318eJr419vahncH2gjzTNACBdULoyMGrW1GtuzVThHLqu4ySPxRL5fQ92BoB4aZKk6CYmtwVLToxuNPE7RDfCx4X",
  "key7": "4qGNSDwziW8ENibdy8kwHBJhFakFVz5yGSq74SouasG6e5ZsiZa8EpTAJUdjxKcBrB8hnQK7uHBerWqnLnNVHLed",
  "key8": "2fkKCjWB4MoYvmFHB2zZWq42Uvo7rMeC2nnXT6U41E8CKVr9j4Y1JuuTrRnDKNkYVSCmg86a8aczta2TgcxKSQrR",
  "key9": "4ot5i6S6ztaKHbjyLT2VepFf3rjFbbeQVzY5ku1FXvk9NjJ1bAeq8V2QuUSo5B37imckCvw2vKUrKAJ2qtrH2G3",
  "key10": "4ZEHxdyKEmRhCRZo4bZPRkSBDsT4qpWEeZcafdHGRcNoFJh9QsYsfrnGDrCuxuAsmcPo3uUuFAhbef3Qt4NkJ169",
  "key11": "3qLvZuHfwvTuSsjvpv6naDyQm1ehm73qyX7NcTpTMGSrKG96ZSEXou7jJHqept12e9P312KMBL81zibn2GgunbbD",
  "key12": "4knwsjEqZTrSUD3fmQZPGJ8PPzZs4TQ1gmXenkruvC2PKE5YinXcmq1CD5mXb4tyqK99FjzYtSTUs7FnxHb6A2um",
  "key13": "529dXiikjwB2emCizkSyz7rQ4ub1LjwVyyTcd8bDFagoXsgeAog19uk3vAUQTQWqBmSfGqgDRVKTpX1887QPQ8QR",
  "key14": "381GogdKp2uDcpKqiF37uQUREpYVdxmaiQzjgwqz88VoFZhBwbYaQJaaJNNjeBCLaYzLVnyKdkqeT6TuwryvjoTG",
  "key15": "43qFAFqE7ZtNbwJ57HxxkUjiBzWFwsdxMdA68BNWC8RrMMtYPTGTdPDkqNTFWNkz78gwvrLxoNAL6r9fLHe3xBhq",
  "key16": "3r9RUEx5sbckBY3FQ6DLb8BwP1xh4YuqNntmkwywQPQSt1M5CwhhbbqGyNUYAgKcAJwso6sKPB7SjESxmbDdzr6L",
  "key17": "5BeDk8BBF52kX2HY1YRJFeJRosb86jTxsotvb86EK2yXJpGH3QQreBzNkQMdeVfjb5Bk3UXZg4RR5ZZE7E41sL7Q",
  "key18": "5hdbkgmKoAkKSpHE5jbR9zQvqyCeNxH1Vf8t3dnByB9eGoewFBRarFMvnLt2MHTZqGhZAs7J6iaEpvUVNAYRFxKJ",
  "key19": "5gN8QQnfveZrUxybxgJudmXVN65HsqzyLtEGPNq3ZCGqhe3C3ymkrkPVfsaYe7gpGLCB94jGHixX9KQwJftF7NFj",
  "key20": "5HXx6HrMyNvmc431nv93mpcq1Xf9LqxExyzzvetpFYi5SXvhwx9ex7gL3kkUdEm37E1aSAYkpb9MqYqJaBnSjsjj",
  "key21": "4NL5qGViM1oPHBnbctUDp1S3VQcWj4kWvB6Tdr2WrDbT5AgbeyYEGiAAxZakHjjp4UYj92jLccohbu3jccY658j7",
  "key22": "2SiExAm4tM8SE4Sv9g5gC1WjTgiczbzmcTqvNWp6U7fj8jW4kZybhXWwLVXd4xRGuTyWLLVNjJxJ3qj3CAELDGPs",
  "key23": "22mvPXj55r6AWXgU1dbt9TwtHE7awdXf3SWT5ZyXHrXJUBuHnoAqZ1e97fEUPTnyhystupHWLZUoKQHxTG182wUv",
  "key24": "VwqMUhEdCFJrs9f1WtWxEj85ESDmA4E1dheicrToSJREfYTmGrnwZesjehnst9PcuokwiGkFtHEQSsQydaEFbr5",
  "key25": "4ouSoCEq8QP7xWKC6W4NcHmACDcvSFcPNqYnN5JrXpUpHBq18PRQfVBkamTi4DBTccMcS8NuDM9BSHqSfx2wzqw5",
  "key26": "5SpXojHC76wTat14rxtP225SLUkWbitCxL2QYy3fkEJ19jmKNwmLe8KsUDUSM7n2E2EA1g8UxRE5bEYPH8Kj2iEa"
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
