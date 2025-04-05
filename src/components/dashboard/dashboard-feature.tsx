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
    "5HQb6MGeajCUJ1tcLxhA5DzD2apG5L5zijSkTYfU95GgowpNUEn2kVJMRoPhKiB5SwkBW4A6WdUQVW6NMrvng8zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bpq1bAJvoisYjaZhTFeF6CTEzMDXvXaedthe4ae1HsmuWY2FFgVhjxWp2YLHQFRnHTsmewGQTQbcJ6dyPqSDuqj",
  "key1": "3vAf4CtJ156cvvzDvTLb2xhLdU7CBzKy3QmuirgMTs8TmzECKSR9rLNF147oCUzEG4sRESdevHEFjXSZd2xwqPCj",
  "key2": "5FSHtKBYfZ2ukeLzqeNskzBVPsngPCaPud3Cc9j4mVfQT351MtcutucVr6D3H4ffjcutTAc21MksFgaixrPq3Deq",
  "key3": "jhPBMCzmx8skjMCckvkoTy1tWQEoe6iCKdDoS6f7zLB1SJJUdMaofgY3BQWsWEVntxKXeojQN47Te5GBnDSRHZT",
  "key4": "3fsLpDpBYfwoyrKvPQabjmJtYHmGpm7Ww7umXSj5nj9guQkDcBzEJH5rhwsSSM4jzaZ4yeAmtbTo4fTJ1yqDXtvQ",
  "key5": "2NPAAkjHXpxNDvnbtGxcxwCN1vqXe5DqKKnRmFm9pvPTTKL5xM6wCo9YnKW3KBVPKvqeCjeYrkoHf5BweUkcLkxp",
  "key6": "2KZ8CPSvuqSbrkhPbjQ2Lgsapc8cVcnSAzv1xBB7Mf2Jyg8xQSxKq2zYsrC1jeP7pLDXdPQnV9TFMnhoeEDnLdMy",
  "key7": "2RMVyTKecd84K7rnPJp1YRNb3Woz2cY7m5CoKZbR8AhxevdjzjF8fUCoqir5e1WgMM9P1xPQWN45esNtMpNYkc9n",
  "key8": "4ZD89Epkg7k98JL4jPeCVasDU11dq1QPwoJFL7qMEmhKEK4hRxUNErs6YPacKdKBvjmQtfXnvzjh3AcequeMhB6w",
  "key9": "a41cqUmJf7B4gF28qWVHyLUa8oMspm8NYapXCodaKB3X6VmL5hGSoZV73WPALnqG9GUxSLryqkB519GR4HK8rCs",
  "key10": "2GsmYTvFxNj1LKfgdf2ZhmX5qfVjaUqSER9yJ8EgT2fSzdijTvNjg6ssc3VZbqTsnCJJKYFcdfVZSKSNRug1GKov",
  "key11": "5QnpPFtjaUntP8YvFCk3hdqSQK8fWT2akoCyAPZgWunVVr2qy2CFWX9fJ1aEy9yNJruXmLtaBFSd7xNKNEHZP6EW",
  "key12": "2oGZt2izQpZX6P8o1ug6rpzYGtE5sNhCzysE5v1oamcNypub8Dmzfy7GkHxEPSszVutF3VVrYZX5m2Bqepjbvn6r",
  "key13": "VZu8s9vP4ss3v3uvdsd1EtescsPi6cxPAueUMAX2s6XxnM8mbMjr2yZtEeLAWRsxFeQu4KyfeHKd9cWRY4JS3sX",
  "key14": "4nf6oiiWcM3nHhAvjDYekg39w8Mu8EgKneMMxG8msoYqwn9T1oZrRK8PzuTPpSDECmgQt2zSfkQ2uBx6TKgahmWp",
  "key15": "3QswnjAKwEdSkHde3kQJvr3nNc9Ans7c7QPeUZeSZzk9TSurqaAedwix1LPC56WrY37X7ufTeuNh8kaEDK9GcLeL",
  "key16": "2bLQRLcE7VQwVJt1iYXdWLkW3Lm4eZDNWhTbi4DmiUEFMSe3pAz4WtiEWuivweZdrZKzkNhuodjtPunvicsVCFv1",
  "key17": "rNgPZRjpzPcKSbfBtAWAYE2Dkzhp5Gc2GVUGHj1NGD196yQZphqKi6sAkr1c9JKDSsjx6T7zYUwP6FHFaHXiTCu",
  "key18": "3XRpujAKSWQmXkrYpDJTbJNvfriWmqFx1B7Kwo7xnQcSWWrZeKoJhpi1dSAfK1sSZ5GTU2ZGXLejeCjo1Mda8poB",
  "key19": "2CHDZXu48si2Wae6ueouKJmtHwyhbphwfvUQTyQnuyKu3g7CSy6R2VKNsBtAVXPywR1MjmNUz4QAhVdDsgvY5coy",
  "key20": "2ZcZNANW49VvCYss9m2q7v2zf9u3K1hgdTpxE26AvVRXqDNTBohAtyALtWQLWKWb13djS1gzMqtkADw1kjJXTfw9",
  "key21": "4aTVd4ckqHUyFH71v5ob91KXzdW1iUoFKE3xC9LKiNokkSY8mwMFE448toJCXoRJDrHDFjY9WpDCzeNUykoRzQmG",
  "key22": "VKuVyKF4PRdTVJ9jA11pRvVNA8fKFVNsMbgQC9yzUH82RUEbFu5umV2ncZ56SpswmPGBPuY9dKpsRrzs2jngJwH",
  "key23": "2hGmLnLgAU7Fdsf425GXFMPTBPPF9B9g1RrQ35D7ZZ6uF5eZKcUeSKUJChKFuFji7cqewsVAkM4YXwC5Egi8uRTc",
  "key24": "s3FMkMBWcwUkzt99TZXTNYRzhwak2SCFcr4qDgWrGhNfUhgTcvDWJX4eFBdNqfZ7o8X4in4wkq4cbQFH9DGuYGo",
  "key25": "35jwveCer4fUAwuY7EhkUbM8KJd2whRSL7WeL3w7smz3vQpQoRzdsPKq8nu1eMp1m5PeqfxniCevbU82gzw19w2e",
  "key26": "2eFur547ejvNxvAxGb95jArpeoPkYcrNnfPwYPoBu5kYBWxmuZmsy6bD6gLP4YadLb5YtXkvsMXwG6VQpMtB24Jh",
  "key27": "kJmkecF6w28TMPs6uqk1LTFFKsZjpBaUzgkoABnSMEEvTxFsgzxb6KLn7baVmqDuq4VCoEad1zTSiRHjchPeLF5",
  "key28": "2x7KU4WzestL1bAFpLicFUq3zoHyVhsqhAdcbv2fwhcZShavMs8eG83tMeqwZ1giHN65wLEm1DB5n6rer5SYvCCj",
  "key29": "E6YLSNqJpz7XogjZMmFJf1DtH2VW1nrjj4adu1eEZYXRemVvqqvR1ceGveNTNFmpTnKmQ5NSjDGv6yPHttRRU7Z",
  "key30": "XVvbyb3ofn3VQDKHr5YVzmkMmKd5nEqxfsaZdgEM6PBfBryUyJgjGU1PPM9DtrBFz7e6NzzYNFVBtA2xhgxPs5o",
  "key31": "B4LhcvTw4d3TEaYh2BH9iTDvcqLUHrFjZXAnZeqrkvtCSygF8jNdcuCH1x4uS634JiHPGTUDcGgV8qKqr6jPeUJ"
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
