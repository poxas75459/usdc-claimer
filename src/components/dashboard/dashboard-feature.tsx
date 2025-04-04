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
    "9he5vyGCk1jYJhKZAUiCjyacrA222or8hsjo5ykdUYAHADTCyYyVi8jk6jAdCvsxWYQ4gUXrYLKSNEdkrk52Wbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QfFhkoGwnub1bp88tR866DZjZGyqCedKUzYyscBKPyaVyDvJJmpdGPx28sSFAjxBekfra4gkWqmshw9dpWpL3yK",
  "key1": "5WjqLqna5er1Ft3P4eaAQnRAaSKuQS3N12iiar2t9g2DDd4yETswc8SETE29mxu3GzwB1Nepf3KybBn9Sy7DSjbD",
  "key2": "5fEQafyQ7yWxGCstXCDRXC6KoFqhaGXZ4EjLZS62C6h1xrih9dhFa9mVsYdE1sGXN2tDdjLVeQupqiYmdviKsrF8",
  "key3": "2MVGq5fRna3YaYzRYBQNmWpwv3LQJfJN3hc3ehaXf2Wx1UsHZv19oJWebqKgcyBpMMGHiaJ34iKmASgfT5C1t4ad",
  "key4": "63Anxq3HQmRmotZAjAiqbrn7pZQw1bZJo1HAuyeUMveu3SkRy19JMzqYeqCrXM1hnC4Dmu9z26m5tinRm81vtpEy",
  "key5": "5zZsY7aVZJ4PgdvA2ecs3RQoMevkzFCusqwjZhxKCV5hLt7qPkQZUQ8nut6esXbkQidMZ8GZXBYiMmhotCewDwfr",
  "key6": "3e7d8mR7zWtptb4QTcbfcwGXXby518EuaMatTLQYtKPDZdpKV4bE89HLpHWPd5MTFsw4GLK6y8UrM7GCiGcHeQgh",
  "key7": "3oEHddv93kxn9HRb1vmSnQz2jbAwBFtW2Ds6a3jmrh1KUJf4LavnweURroWH1bQ9anBth3BC7zJuYcAJdcWgLxSV",
  "key8": "7shRVFMPQ5LETW2CxJmpkZC8f3XnUmRNWXir19k54zrZq8nZmPz7kLu5om3ZLvddPD2HmyZMJsmFkBb67mvFg5V",
  "key9": "5QSLnYmBYfg5z47n2UyYHzjqg2ebNTRQQp2W5LjN1LU3wUXJTXMAUUSn5ozKhWiuYVEVnM3HQ1E2NJ4FVc8DXWVw",
  "key10": "3d2BPwaWtLXgidVyhygJb85fqAHLSKaD4sPhz2G4UoU2hcd8jhP98hEz6J36o1UJXADZ6m8kXWuoQLcxd8NaPBD6",
  "key11": "2rd1BdkCxk8L9p7K62u5QMnGvMVBjDQaHBiMR5kbSm3n7wtxBHMzYJ4sSPGr3ptUphxKoCj9hpfhQd17Ux3P6evg",
  "key12": "4QwJ2ah1zw7zGdNPvN4cqTwFEKKHpTTnRTBADrQdEeubT4zmsjy4Vuy5MppndtcJ1vSSBBcV5qvxrc9nHEenmXo1",
  "key13": "4wCrjsoXLfmrBvpHtCRJCcqEoJFii4EcFLvXZgWEFjxMVrZRo9BNfGAG3P9sig2gN5nbBDrFFMXc71Tww38hKQts",
  "key14": "268zG1MzDkN34mLqk95brnQDFMYgvRGHfo72Ycyojg3RYSEh4kP7cXVZxQfTLtVm5mABYwJXde5NRQgdjdAhPft8",
  "key15": "Qaj7A3vDXDejCsiRsDXZ1nzZ9PYAn5XtpASNjp3CSeKm6JuHM9dAmK7SYXL3WuSUvqeafq8VuvjqMoynQmjHnhG",
  "key16": "3mwWT2VcXWNGjXkUgiorfFszyee9APwEZ73s3RaJvv389ks4DTYCZa4H4DEoU422mq1XRdrmfzTYdEEi5h14CkU2",
  "key17": "hsX83TLRyJQ6AzhX8N6KwCyfBwtKy7K6iCpXTvZZk7dWsX56AzqTL6Gto532VmzsDajA9q6R92PZ8DXvJ24VuZa",
  "key18": "2UbAGi5U9zh9pQ61oLypDdUGF1YcE2bKkGoXTipUY6znbP92WR4DVyvW9qd6htyqwtXG5c3rVB3bogVKnibJRbJc",
  "key19": "4CY8cov4mVGwYXyJN1x2AyiZmaVHEcaYpQt8PLE4sEPUxo5hLv8uKKo93eBHTm59BgL3zdgvbfazqeyodKfStmhJ",
  "key20": "P1T8kApaAMBhUAn99LaJjmvWwbnyBTqv1JbAs5XVvVsQLYnrtqXoTgRoL4agXyQCYeMQBRZuABVree7m3qJVTcH",
  "key21": "mHxBobK6VNa1Cu94qWJf6gMibMZ2mgjNiZs8czCfLL4dDG9F7TBzxhHhNxRHwjEFBcA9mh2QhMHKbfv2wqCtRd3",
  "key22": "5sHH62kxB5gZPeUsVkyByASWDGUYTsRiifm9aMd3QhSDVb88JhaVFJy8KfJW9G3RaWtwMepTPaEX34ND6CncYguR",
  "key23": "5W1SLz72iWoYpGoAHyqs2rvh5zyLWy38UpMoYd7eDnjJZiJBS3WNfcSdApNJ7anZH9vUhjzH17EUHfiMRWzJXWSf",
  "key24": "4NqJ9BGGuzrigtUjmK5cVX78o55XiAUYEJX7yNvcz4Mr2Zp9xtDNJze8JxaBUwfmKfKYKqytJZvqQmoxQEZUyUE8",
  "key25": "L8wAc4dJ2w6h8A7L6bWD2yRB1RfaAfK8XREP5rTyYhZn7wWm4k3QLgxNtHE4PqgGmocjbmzp94HdTsv7ZqaPfG5",
  "key26": "2npLUw2LVAqUPUqMcZk5piFasqqj9qRsP7oUdnVJsjSh7KsQScgpbu77zivRoR8C8tm6dnBgvbNu9DphrLbV1Dgz",
  "key27": "2ssFjxhShdT8oBB36KKUsHrNVpfmZLACbB57pUZbdM9FyqQMytHqsxqF6rdBzpjG2wj9Z3xsduSXmhK1jiAs6RVS",
  "key28": "4621ZzaJVaro6wuCEJmThCqWecFu6Wcdu3sAj751hRZMb7mAdvJNVMJXsswsinRHZA5djajfTFktDkEMGf5LvAxF",
  "key29": "27WhvCLDmP84yEAqt3kAMQ3HX59Beeg7QP4uZzDcbBJ1n1VuWsC1hQmSFK3SXEvPixD4f184pQX19mQVM3HWZUuX",
  "key30": "33cvS5GJCWHSCxKvMwAxPsJzeM6vhA72WF49x4QPiksjqMdtFQ5mdPT52MZT7y5beHXSjxooRpg7AWTn22dg7Xvn",
  "key31": "3ucHtJRbELJaHbELy3rHkCFFpjkSdAqetvvSaq49sjTYEXdBXvF13Ymy4FunjKp8ogJdjkzq6oewKLj2LSBAQCYp"
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
