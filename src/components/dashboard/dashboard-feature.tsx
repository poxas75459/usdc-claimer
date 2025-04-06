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
    "2w6XdUaY5vdagJLe4b7HELrBvZhMR9nXb9wC28NZigSHAUNc6VQQoep4iuagivySnn4Bgp2LVpZV1svbo9LqZW7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RupaWTj7d2HfaoLFWBetXuSnqKa3E3GoyR6MZihYiD7pNgWtHY9MP4GNGS8NvY3tcBjj3t4JKW75dKyBQFAGHLQ",
  "key1": "3NmLSgmxbPHM9e3Yoikob6c9dCuVZjdsm9upw7qJGYie5kQLHjLo3KSnFnyaKKUHtVYEf8zXgYki9bPMfcawdPeK",
  "key2": "44N6TcfPvsgzUh3BjeUjgAxXuFzrdPfyzWBNci9cYmeQf4AZAWdQU7VGWHRXgp7JH2vHfdZqGHT3uehiQKa8RAXT",
  "key3": "4VeQhochkrU8W8iVMWGe1gXDMEmS3AVoMgSz2Bc9gY3A1nZQZkSqZv7VkMACLcUvouSnnbwaJrdpmksaJHuuxc61",
  "key4": "mXYZ9REUcAico7kxVbaEwYiksC1i9F3PRzvS5PRdGjaKDsRyrWXhqMBSu4JyB9VxSGgZv54BgetYsN78CRcjJce",
  "key5": "aeP63ZVXsoSGGvEcUSEjHDR41mkDcHxFj6x4r3BBaoHufvfTRNB5yAhkuPUttvjMCvPwvo9eztGtvh79jRJkquT",
  "key6": "2UfzXEFb8LYLcCqJK4srTRzWtmaL8H7EvjKR9LBXEyi4BEqDWQ5ukan1MCQZpjSr1SU9KzJMuH5rGZe79mYCUA7Y",
  "key7": "4fjBiKUR3ePoLyv9CxPw9T4M15gU76nqnmNbLsc8DNwkEL3Exkaiy1oFXZszW4D1egqwjSKJpmLe9bArvAarePxJ",
  "key8": "2eLMEekNkVdfsh5Ef6QRgxLten8JBeRrJCMgQMqsGBCdUHCbyA61YLtpqbAqSQx4CMZrhwvfYYpEkL7udyhWV1SJ",
  "key9": "3ufvB9S9eG6TJhrHEMmzc1GVKXSqMgSFiBAVY2mrpMsEQ3vubdwWduKuzjgJcDivfKwMVWK59bDvdfMjac38octZ",
  "key10": "3yc5Eph2PRe7Kn4ve9nbqBB37J1D3u3jmy4GbZKHziYTJN6D7JYTmytinS6nC5ERwEZ7HdxZ9swgXqq9a9octKxA",
  "key11": "FDE2jgYbYdi37tcVuPioTSbgSkgwoPMLZPZT89tb67tYWD477m8DGRRuwopVbey8TVmDGQK5GHwbGDCBuVztxB2",
  "key12": "rJ7jLSv4foneJ83kKrEr7nXYV9VDB8EiHKcG6Myxf4U9FJ123R7udpnWbEA5M42MZ7VU1TjANaosoqaG67MYVJf",
  "key13": "3FaPjWXTTZvc9EASqXb5ji7GWwTmivEoWZcSUzE9AF29RcSyCCvCbTxWU7wwNPj8P87TSfAhArwtFeSzhNsRFP5h",
  "key14": "2sLKxhyk39AsNPsTQtMXZjnFU2466Lgr1CHX8JhxtudjXHpwXzY5o9jtBeJJdLiryLyZwCWjss9XCcLbH17zamhA",
  "key15": "23b4hjyr58KTGKSQheWpsAEqY7RomgzanZRpbuzcE8upfU3Naj1ZyKHY5yN9GPB9DbJRyJuSDuUxsX2NSzk3pqbu",
  "key16": "3xmcJNYyjHZatRVSqXGeB7oZGnHKktCQj8JMuGenusXmdxCuusppkrq41Q6PbkxG5pK2zWU28zKJJfdaF4YHDJKr",
  "key17": "3RJXmVAbxHPDFWTjwCddX4LeYcMe69wPoNQDUPmE5Ra6SLvvFPDMYHy1aUfXtuZop7FUuvWBm6Ef5wEFh8sEi4d1",
  "key18": "5tyLiu119dyT9wxxpwiqb2dSHX67P8hQxUnW2q86QLd1fBPmhSNJTAXScvvqggAkJqnMKFzC1D8pb4qo54oeKVdx",
  "key19": "4Ttsd1Cc7FULu6wh9sAwNehwpAYfmjnPYqKC4nNBxzBRy56Cxat2riK2ySu8tWcxJiSm8WjJprVCE12qidDstG23",
  "key20": "YqNDo3RQCXabfdpcifrCEbv2mVtzG1mmYHrsGASPZ6UQsDfsfr2ichpK5RRxqRm2sSnwAihpQYamDyBosu1Qi5k",
  "key21": "4m5wrtvv1kYE7HaFyccShKXwa6PxjuEQW7etvG2kMLp2yHMK4nrRXqZmSFNNXvtzXJ5fKQuiLcKbKSbGtP7RXufJ",
  "key22": "4h7awqurfc2vnXBgWAf39Yvm3xePH5sU2xSQTx1iFyn4YjNDQa2V6xftRkWFxCfajipjHHZp2AWTUGwYsZzwTbKA",
  "key23": "2Vzo9LMNfGM6dfmcAjw4qif9tqRmPpdKTrtM8NReWBoDHh3tWSQwzYE99CiJnLHYdrTC65dDnMfdW1riVgUaqweq",
  "key24": "5FwTgw11cV9PAi6QTqfnSBnkfmBqL5AumempwjyfC5HAcQEHM6u4MJScjvi21mmpamn44dJfcSDY4HcfASok5Rh5",
  "key25": "5Z7krNwcV9w9jkHd17ApbNj65posDbHYqK9ZuwDZ8urf1gkgZ7HbphwzdwiftbgWCmKCgQRf4nTPhBHjS9eFZ4gY",
  "key26": "38TWVudp4PW1ULQspnp2gocQphufRUdTCuoNjNa3NsPGRhX325GjzBQfCwpPTgHEicanUUuitdiBvrqTfrkJt3je",
  "key27": "3FQuvhj8ZzTVU77qDyRz3QJgwooWHeVPxACJizKiBEickpqQfbbNh7Rb8ifdhj1Xj3kG5zoLNv93WPwrdFVktQEK",
  "key28": "Fg41yDQY1q7YoY4Ew6UBCHPrYTjuwAP89fdLNxQS417pqD9y67KuNMtLTzZMUaQPfvQLjv6c3kWCNRM3u23iwZS",
  "key29": "tVDQCFXMssUXxB4tny2NeFBnBi1zSJNsW31b6xhdWEHGbGLVT4HKZfUt7jVkAA9YShry8YsmfimW1E8NA9qFdW4",
  "key30": "5iWUbbK4sENTSosVk6wqVWgYFYLTBLx7vkuDPBqtTuHT5foS7qoBWRkFEBu398TwFiXovsEAq6apgHD78ZAm2dLn",
  "key31": "3vaDYujFJLCh4FqxkpXRcRPtudyJSHKJDCtmJFr6qWFHcvypTM6df3eaAQq7b3BrXbGxL42LZiEmKDwdEubSUmVn",
  "key32": "5aVmyFsybT1ejrLNWRfPaUnUryP5jNuKLzE3bYGrUhKqk1iLAuAiGdtzUjQuBPKUsiUnznhMSqUgSo9Y3NNBaXNQ",
  "key33": "3a2wpuPLBnLRY1JAivqydwpdJqtSCa4QXwtbSsyf66c4SXFTq3k1dFixbCkrYbGaS8Q8ADf4yXSG3mzMwZNWUkUn",
  "key34": "5qXP3TC3ab5fSkAJwH3rDsopX5oY3wxcaEUMNV36eZH33yk8AweYu97NdeQBh9M7BPFymj9urGLDQwmXkzwvzjRA"
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
