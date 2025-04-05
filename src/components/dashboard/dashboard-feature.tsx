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
    "5DLhjCtMdMb2sXCfFJEqYMzpu9yhPC1fxZUbkkYgWdztWLGR1PYDYFU5vfCjd6GMnMzmPAzBYACk3hnrypn5VXwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uFeXTNVfKtGiZFqrtYWPtsS9DdG71A5F86a2ggR8pByMTc7UUz9NGdWB72pRzBENkQuahZ4Mkqo721m6hBuKjLV",
  "key1": "22Faov7HsyCJp6utdMHwEgZmdGNREL7sctdtkgLNzEir3R9iyy8Kq12CcZdrJJcKQU1Cz1A7PqW6bGphfHLmPM4Y",
  "key2": "658iDYpq8DUWoRyzkRfApmCaEA9eg19FJ6cYNCXHKVk4RwaiGa71qrHNwjQ9Jf7kwSJJzbQuYH8Tsyx1Qun2VGMs",
  "key3": "5S4kYywuY9eeaFwZo8inunrrk6rKG4hGNvBBUhajZjVW5zG1hqGqCFf1WzoNoRCUbjMyvrWGbJ5oa7BMq2JtHTT9",
  "key4": "2MDPoc8QUChbAc8qpFL9fgPS3vG6cnNpNkDoPLReT5u24sDKpM1FenFVNdPAkD1pjpSdwU5AKYrUKpXX3LZ98tYY",
  "key5": "2oBubjKWE2bAz8QpA3ENjZryB1c1ggAgB35qNDwmGWwSbRtQdoBL3m49yGYN6gkBdo8M3h3wZtiBFf1AV5jR5ow",
  "key6": "3betMUppFrcqqTAfsLLTqPY7wdUhwjNX9cibW7HmcuTrRR7shHmjsarmJyt3uvFFg2vSioYkkFA3xk7vSdozvs9v",
  "key7": "tqyr7yJ6krKRTSRrivdJmTdU5XGqyE1ySn3m127KY4zCx6pGvRChhkAckqapZZPtCufyW4ArYj21VxyW9cSgw6g",
  "key8": "4jfJbZ6HGxGkyjXH4D8rH8x9QxHNHH83rU3XBSyATmCPpHvzRPVRyrjtZ2QgruPLsYcXfev6UREMhTFPnDHFAJZo",
  "key9": "rsh6PZLnN6ixHn9YHGMibCAW6uBjYtKjrrHDb262YnMfCH9g62iMa7UhrQk8A4LPs3xHeP5Z8qewA6LAiJ6Efs6",
  "key10": "5rKA19bKmBnbFAEM6MnM9z34EC5bapErGKp6THNVeKyZEuDFD7QbEBdvAq2NGa9RQ9DUDjBjNj27TNTiACaKDrhN",
  "key11": "Mt6jZqXG5qfHNgqvbDfeVX7SSSUAzDMnxBZgJNPEfdcqymhZSziHA8nrNCxkSMRA9sRqTUaZZbFRgQCjwEY7uub",
  "key12": "eKPtP9CB6pjfkmzo4Zyzy9Beyv27Zgjz6bs2GyFyobWLSxHbd4wfaA17haPrrS4YGvgGevBQ1S7Y3z7LsxjCT6V",
  "key13": "3uWUL36wmqNZ5TmJQyL9qyDcNENyjepQnCyB6m2EvJUMiLCPARfPL1GVU3JwMg9zy2EWW6ucfN8FjhFUaYoGXy7R",
  "key14": "4GdALNy3AJLwqetvySmTX7pj7cdB8pQbiypNDUqGt36QASURYSTDfJV4JtkvqTNx97Y9ccpEhizsfNJQg114Eju9",
  "key15": "31YjwNJw4sX9NzaeXWHTRfGS4PSRSE1pAHVpyxfyqCGKrMBy5vv946WYmc5jxY2mjtPuK7BJmswochdGiGUowgg6",
  "key16": "2NzmKxGYPyWUVidVYrA8gVE4iGnDALPJaFuyjDZt1TJAsW5r2sMYz3pGognFv2ahxgKVjzmELxLYK9bPMXJTAakD",
  "key17": "3F9JzRkW5kFn5TpnRNihsE7jzifxKvm5beeDFd6cxaDkG5wu3rnSZnRqrqyfA92fNL4C9ngTcvyy5EdZTJ2FxBNi",
  "key18": "5f3XNQx1tCvnvKYt3r3xXtoKjvjvXEZRgXiMjgJjq6tvdH37xrZYVTdJCmGYuPXkqQ3SGhx3FUWEzDHnUrZKnJSH",
  "key19": "2xEEmDw331s3WcEuVhFtwcvV2mzNHmxFAZva9wjXPFHjVSQ7fgmzswwf4okcPDF94jr6YHN8RoYtkUNcMd8Ugzok",
  "key20": "4a2kmdTnPx1rwejnk3783XFgD1eKd4AFLL5HXYSb8prxWLXZ8q2xJjZ9qsaMc4hEZMPSGCF8QKDF9okUu6ZjMo9X",
  "key21": "42SBbANTUeqUtt5CiJFV3c9wYzh1ER4UfvTGxBtzMUEqs4dQhdyii6eurud3THihLauKmFAH68HCjGiHRSdRfGNq",
  "key22": "5ThqyESVJzzzG9y5U1UHTKHWJEBGPxuHab5K7aEnSJdY31T3ftiaY5BmZimibE5Pf8Bq5jcPmYxPD26G9YNe3t89",
  "key23": "2XsnR22gUhWMBgRixH4ov8PA235fiKyBcn27rZJCQYy415FR5y26hcd78bANiyhBfBKyB8XJBZZBAUwJWwMwS6kP",
  "key24": "5Agy8GwcRoQYhUNTCpGcvB53YmPEZqhY16JuGUos7K2Fp1Tp6XwmPzVNy9honkKkJC4YxPop6Sx3oZZAfNW34Dyi",
  "key25": "2iXa8rTw1NCKeFXWGPFnsPU1PDNsjNu9oTUUQR4iBCLBzjN2XJUt62B8FFfJssMs9fnoJvkfkKWzmpCcPKQLxfkD",
  "key26": "3SdzqirLgGbgaCou3UUwE963vAz4YxENqhK25WjKC7j5qFkc6bcjo3KXS6EL9SLd251zu88bbz35j1xxEF5YL8c7",
  "key27": "4JRZ2XskqsDUsWxA82v3JZiRo1kqMEtVmFz9q5cPNwScnbQpAFb6jjHs8pgdWa8nTRunv3qHMgsnz3hNC37jNtf6",
  "key28": "63hZbFHQajxZAxprRUrGt2ivziCLK69zGUeMQwycXByKmqpPs1nNUdbd7AA39J4eSUahgs9siaHKA65nX7VJjm2J"
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
