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
    "5benADQot3DwwSF2xqykSt9o4MbZq582qRrXW7XHpW2gzNirioBFzyFXsC5JfQNZdMApkBpZhwS1Rxb46hSGkByn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Raec93pdymVWhA1RFTbmsMSXfrvth2fsEJ2BH2rdJLrakD1d5gXywqtg2NnD9H8XJTwKijmu4qGUZpWFzjpzr5e",
  "key1": "5UVf1iCMYTVEe9Xsfg62Dk2BQ6F7u7B9u5EpoDUzXjgjM4pZjXCAtErJWQNgPBrNSWkJoMXSHm1auzivn1skTq5o",
  "key2": "2SQHhAq6dfHnnoAkHyt8FiwZu3Z1QhgqZEdxmxAGpESHHeEmVyNq42suMYr6B84JSML3ptNeTywoLJdrji3ZES1z",
  "key3": "3zKp4A16WrrBGJmJBC3hpoUzHUAmNqq7CkFG5Fktir8m3PLrLhkjAurpiJhbWV7XDQTtxHFntM7j6vKvcBEz5ZM1",
  "key4": "T6VNVscnEwS3jcFNg3YkRvPNWiezLiaeQJfm6Lys9fzZGn6EL8qqkRvpJkppfuTBa9EcYZwcW6XmLcvFSxroMZE",
  "key5": "546E6pGNFehbwNxfMtxZ5tmNMcKXYahmUDbJFureFWNaLQC7ZtEpvDPSo5ppFLDntpSR2rvzhF2NhtzozztY8UVd",
  "key6": "4adpt9GBKk61oJVFTFvnUG3gCGEhbHRvXkh9q6gVzXJKEmBqn2tyyUyLazeh9d49Xf6Q6Cmhdzr6M4V75bk2tTgk",
  "key7": "5TJEnxv9uD8sWRxNyrQnUC5u22GscxJVeK1ZTVWysLZRGQ2EmnimdU6vJ47G7ojkPVDJjWsgdYeB6ksTaaayWRS8",
  "key8": "5hk7zheNH3PxCR2RxiAibJz73NGUpXdXUmF3u4r4Zsoe3yeguWaUzf6BtkRf5RU6kZFsfR4HmiDnrZCHyHh3jadj",
  "key9": "2L4xLMMdFwvMVpTqJEigEFX7uZDBsFBgm18GbGTw9G3CYvWTQzs8uMqwSfnpobMr85sqM1QQ7nP8TmJDQSYFiyjv",
  "key10": "2A29XHgvqa3uKA4ikvFjzDTuoSQCEGpApjBrB71xrRCBAUCDUpxTy5kcSEvBnQLuAcxBPFAJVWP8QJscHRuFcgcB",
  "key11": "4YLS2AWSP7uw7XBXNLoBq9FGGEgnkGYSV6HgpFGzJK7u515jGpbDLRmrHSkoE93rL8yQb3qnQ96W8meqZMsoJ4fR",
  "key12": "3ghXQpNcVE34w3oi85nFX7aukbfJqgJRdQMd2tz7YRQTmb2qnU5rMS1twtJGnzLwiRhCpAi4oXwXGmbmZf4oDRTd",
  "key13": "5u6W9JSjfeSjM2Fwk6PUP6HhuFm5g8KEydMdn2ZtHfztRcZqsxToo693xVVS7aMgQg9SiJANfXDDWxPdDsmW4hsL",
  "key14": "5kibrgrZ3YMSiJuXAD6EyAyZJKPMhHq7qyknNwfFguRgFTApAsEV1i14FBt32fzJh3YGn4mEzLzHvPWmC5k99N3K",
  "key15": "2Q8wTMr2ty9fhZf5MLLzRBbxvxrh5h5W9eKNfhyZ8DqaNfq1EM4Htc8iC7vJj9JWypichBGPFy7wSBph6UXp5dAq",
  "key16": "4PPeBYeTHpdLpNirxeviVMcHn53JshAeBywFfb4iQQ1vPfgFtwDRE9MaCekxB3JxhuMNVTnqKsynb2TzAjvTbHmk",
  "key17": "3S7zksvoPNruwYF6tbWKUZ4krS5PNjL6WXNykpnDxccJ359VZVtCyz8dq1adrboZKkPZfoxcPGgyMEF2yQ29zJ6n",
  "key18": "QECjkwbnbDXdifa1s7AmzbMKyfvvAm2oTEg8DCyUseW729ajd927cKSnVSs6iutdPM7x97R8u7w3y8PSAFStERh",
  "key19": "1hKmqsEgqw4vk21NvcMx21wDgD5W9ZC4xmbh9bMUiXaARqwWqhajyATRpCstxk3zNf7enSXoMuYZUQGRaajj7Bo",
  "key20": "2Zy72Le4XKZf6pQfiMY9GAbuXSCtTiM2v6WuUHW5nMPdTn8JjERJdSkbo7wTzWC6iM8DmD7xcFCt9xrveCLD7iKa",
  "key21": "3wt6j7v3W3xyqbuW7ZH8mM1jzSTxqzaNFTXdr5z6FmjjELGxHxVibavg6QBuPYxao9Wui3J3NtaUKR3dziqSk8pF",
  "key22": "5vf3nX3vtB8Hm3UKgGrketT2rJ5pvBfHw47PiAuzUqXUHkYwnJJiUxAFi2CQbj3SnpbAFUKCs78Q1FpxEqrF2XTu",
  "key23": "3TYmsCbAxn7hFCXT53KJWo36R1Hb6RbwvRxzMnTguMiKb7U6RpXiTghcbdAWQF48jjsg4hKiSf6ohu6ic4BqdtA7",
  "key24": "52mD983YDgVeaxpsCs3zjMZZELpK6oqbCEHA98TufRqghQSFgL9m7CYr5ekua3ndmcKnQYoNUiuwA6zYo6fsuZgn",
  "key25": "3hRnWvgadFMfFR5MnS9BfarLnJVTWYS6uJBmkr7gvzFcUMYtyyHgmstaDTeGgCMgtk8mKjdb6fbfCW3cJjbi2CuP",
  "key26": "5x1MefgUT34Ec9cfCFHtw5n8yJZWgw8uYANS9KdQNG3mVfWDoLxi2EQRRZVXcb9zxBfp2vkr1hEu6sEeRpt1Zkb5",
  "key27": "5Mba568nRPFXPYqFVR8p8YiqwgkuN9sB8QuHJnptjKBuvGJ78e4jnpfVZNDJdPJfGPFtgWXXSz3Xhjead46i3Rcv",
  "key28": "25vU4DxwfamritGh5fgdU8Myo396uAR5JWy7zZ9TNohAH8RjDSW23aBJTX6K2ZCPi2LdCXeq4ZiRxX1QCxojBYeq"
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
