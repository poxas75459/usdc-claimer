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
    "2APM34AyfEPUVwE2RvCSkDUgcCvJGWZNTj2peFiQQhHuVzsh46Lx1cMcfDCr1RBEfShHwGLtRbRWhNr4PjG8eaDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ph8ivbxxmon4utkgh2y1qsucucGaW6eBsbJ6yqH2fWjnhEPodGrpJnwSin9iPxnoxzSxWWxbk8FqYFwc9K19BsM",
  "key1": "YHnWz9EyWfrdEGZptRATAYQSHZNHEM9ibjsYJku9dh113qeTayQWMBiNRYzCxGybKMs2497GE4NrzkE7wep3wV6",
  "key2": "k4eHbmYPfQHEgvwkf5u5vxbrCskrYz14a3j321EsUDQutwaXhUxGShMv4EVSWxG1zZHghP9XfR5ydkJgia5znNB",
  "key3": "25qYKQjegko6ZAWYstagtqB8zoyrheSCjbpSK4piBmxMR8Ntqc4h6yoAWBsMHq5TVYUEJTzHCH9i6ynnVH8BjQJ4",
  "key4": "ZdicYEqkaaAWZFQn1FGaQcN99JpjFZtkBbvTttv6BNkrqUfnuJRpU7TcBTp9prXsWFcbnyBgaNCKMv9CccbeJdq",
  "key5": "5gJdVEFwSrSCUwhscFmfvz9vvWJE2z6KqmvnQg4911XhMp8RfzPZeNiMoyKSRGaaM8bfUNxaq1y93JKgL55r5Nug",
  "key6": "55EJdUSR4wFDdUJYsrhdRTZxbRBkttYaoePzjZQT4UYYN16QKXYmrwfhQCjowA28w1PocwJWGu1oW7RTGvX2vc8v",
  "key7": "tKUdn5AvE498HJaEKJjeq3xKUFZCoHmoHR9Vn7Y6Sy77peGPrCq2TbwrjZLke1axJYr8YqeppqhsaB2Acwcn3iE",
  "key8": "JWkhs74q5PqpXCR7rHskGiCzPxUNUUQU7hhS2GR2aDQ9Wx7GnWhVdGurLCEsudqXmW2JWLBbVmJj7XWAkeoXT4s",
  "key9": "4VF9qGz2YqCayNrSs5snGXVHe2hftFaiEQ7dmJE4Cw9T1hYJpa4TRyvyELN5Z4h9F5N4aRAN5HXXM9rvtkc4s2Tz",
  "key10": "CLxhMh6aXnvAR9eH3dzruNppx4457PjbREJRFNUc6vsjHidCt7Pg4FKEX7V4TvAGvw14yAGqiYRVZn6ShJ138sa",
  "key11": "2Mqeuf92SoQrGRPHPcep911apY5QHQhDfGdFiMBBuW4YXXPN8C7WsZCr6LmyZTM96F2MQCVUxCLezW3G1AqazVJe",
  "key12": "2CT4t7fwztntTv7632H5w4yAmei6eAkJZfJxhSxSjjdYy4U6zRTYSZEqyUXsJ1q4SU4BCzm77pVtkUd11cRUGhfb",
  "key13": "5s2haFqYjCpMixaJCscEQ1PgfwY88giyMFVQaLfUpE1QoZ3Rq7Tu5dqDTdKgHfbqnbpVxzvgJNRMgz5T1kmXE4KS",
  "key14": "Zr8EcRHBrb5sdmxdofefiC9FvnJ2KpkMmiCbo5PiF7316hpVgxFipVXzqzjCbrLdTWAUAuJMyCUt1PGHuFQ5UYj",
  "key15": "WQ9U6dLYZigVmPVu7tVAceWCAEmBQWsDRdKBFohXfRhQaN4V5jUJZ8eEi9pGGd8haXW9UTnqjGZoJUxudVdNB2u",
  "key16": "37bJwQ7nYauQcS52P5oesiXxHoDgPgUNDJKYHdQDRAd6fxvqa1g8c9ftMSaXqJnMucza1GwaUSTiwN2qsH72NCmf",
  "key17": "fYqdyicEdgejjsCYnLFYVdjNu1VkQfNaf3vwcPeUm5sBUxfmLmJaBkQZZgdKsiAtNstos2astyPyizNNvZ2esEz",
  "key18": "nkSEqJyQwGXmVytkshqC71NFA6MekK2wewgR6a7snv8PDmcn7TT7RNEKY17QtJSr5JtiGjQZxWCGLDcqQMibakr",
  "key19": "3FZ8Bp3Nz2kNcuVe4pYnRMd2QVE7LH5TJN2taNnzRFJwxZZrjV5Xgj7Xgek9FM8goKAuZDSx5RoQHs1KBFt4XDxR",
  "key20": "5AM7mrnPCKZXQxi1u4Q3REN1W2UFTajRdpDpLWBzUUQeYXF6y8zL32BSqrBwe7YG9viAcWhEpKBJxQ4q4JWLKuVh",
  "key21": "3Y8CW26kYFRYphdn5n7YDdAsn1Y2aMgCAjXrJyrMRMqmBhfarLE1TBiLjdUVfwQ7Ycqj2yHhLJRdPRgZVBppNCw",
  "key22": "27YXgEoHSbbew5FeevxjmhFkBQHzyWzxLiF8h6XkH7Lq28rKkSZ4UtV9sbttbB1eMuKRXYfdvM5StR7wP2gJNHYy",
  "key23": "4cYrJAsfgpo59xaMW66ohJaufhp3kv5cMvU9crHvGs8cZCt5L7PEZAnX4kPUPuo96zRmpyqjNh8cMMqGyaN5kxHi",
  "key24": "3895zjffdi6UEMCKJYxX21ABYASDPkQdhCYr2xdvDiNYHAgWK9ZGn5q2F9A9a8sNGiX8SC74pHV6rhtwdjk4eViZ",
  "key25": "3REsYrR9ZfnfgSNWGPzmVLBZKF7QAEcAi3uQ7ptqEfZszBNzYuGU9wccMwmCTJ3K9PpfUYZpkMJ9FaxB93fh2S2z",
  "key26": "5rFrh19PpHrXbL9Z7yQ9JZx3J7CKg8Ppcejt82uWDDhRT7wCccmWfPt18pauCBxXiwHqxw6uMmoVm4BcbZJXp99x",
  "key27": "PpGEeTyz54G87ghQZt4L7V1voS5HXutZEbCUHEja788rpDHjgWvRbsYp1GtWxXYzTbj4FUqdtuRv6eBUQgaKrzx"
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
