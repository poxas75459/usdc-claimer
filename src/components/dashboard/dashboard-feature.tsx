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
    "54WwBC1YCz932Vpemzj1h7BD94BkpbpjtyMZYyRofqKE7dNy9UN7qSkAqwsFULabJWYUUkTAhtM2gjH39GpXPGnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vXjiZiFaJoa2iGXqUCmWeFBqJtjvxtfw4i11z66rEbe2a4JRH2Q2ryGjzYyZ1PcRjTT8mfQg4vJCqVr3hwq4gwF",
  "key1": "4pAMTFSYYgTSVPtd3kdotstVeHZ9L9r1CghGo9ayPTPKkJ3ZYsyEBUACUofuvmAFKd7YHJdmbvXcBjKGGqmuaxDC",
  "key2": "5V157WNcKCusQe47J9zhAqP6DWEXQmjk6MacFqPoo9UHPJRTa1acPpm7NwCN83DZmPffnGRdMcueVAmMLaD39yuu",
  "key3": "jwHoGopGyi2sfQKcAExKbKz9EpxMkcNw2uxR4tbzKSYigm6Con6WxzCR5BKFK2vdzPPt9xRT43nUJgKKh77qnBF",
  "key4": "fiZjzvQFfxiW1BXXmzGn39mD31Fd9QgTAt8pxuNzSzaHwVwuGeXoYxjxep58UU352nXXDoVnR6MW9RAuqFPpJ5Z",
  "key5": "3UKYg3ANSWG3ZDoRYbpz1CCGXqZNBWmpNJzJ1qanvSRkGRyJMWMhBqbkNinusrVbdXUPwL984YtE6anxR6iS9eRZ",
  "key6": "5ua546oxn998MRmrWo6c1CyyPq7Pb29KsFGsBJmfspq3jr4WcXe5Fe5jNBtay9cSYcXMt8HRjo1xu4b2Z3eqdKgU",
  "key7": "57YS82yt5nYXnVSP9CYyLmenaViCtVxMWnBGHWqoGAngMBYAA9vLKU7aqxfXdsHmYxN2mRZpMkJ7qvv4u4jnwtBv",
  "key8": "5KU5PyXxJHV2BBksvFvHj8BaP99S6efzLqgfVedh5bCP8E7Jo2zRHqE8J5DS7zgdvNcptAmb5fseLeuZpweprH9Q",
  "key9": "3sBN5CHhHzjqX421VwsKndyiU4FQsqPpfgFfRxH684qZVi16Tc5BYvggu2QNiFYQHD4pN6REnoWcxoFpggiGFPtv",
  "key10": "6545TDNkWtzqmvgw5JvMqMfPcWKx3MPme4yGXreamVXGqKudzFhQTcw4udGiwmQtpWL9Mb3gCtTspBVDDMvKSXAM",
  "key11": "3MCUFN16RFxsxTg9Nh2r4JEeTeNtpd8GxAyt7ss2dRG5fgxL8HowD1ha9eJuMFN9jE3adnifyZDTUxDaD4fX6Jy6",
  "key12": "5W19e5yBRaAvhKnaUzeoxrHYYSYD1mz87FRftD5xve7ULHQY4uF3yX3FnQoUnw3dxQe8dLSwKXE9JXqHXxNAcxfi",
  "key13": "59EfWhk39XR9QYsGCCmgHtVnNV6FEJbNu2rvZ47HVv58tUDDusPKUXehqd53acQPAx6AeSB8UhQojMZTFnLUTpoz",
  "key14": "4Pg8nyKEpPJZRc48VAUGtmDgcFAyiuCrrBYzpQPf4MpbBkj1hmah9xvt6UUhxrjtUS3yUDrr1bahZXzS42EnJqhB",
  "key15": "5cUDBUrTZzQCKjVpxCDS72k6SmAT21tweyjG2twbDbtAkX3se4UDF6hPMU264kMfLuUWR5X6qxDcqZ5Z4e4SSZQv",
  "key16": "4v2YAUfGGTKZ8M4CvukH7EbkaXm9nf4xRtuYi9Tw8nfgvgRy2z9wiqEbcbLJgGVteKGTBwKtfTEmYy5Qp1mWYy6E",
  "key17": "48XkvvRMGDXdF54ijQ1WBcawVj5EuLQcka4zC3LXPxXtQMV4BCSTBvZNZsjvMM6t758ueQVDqpv524fiydsjijnx",
  "key18": "4yjjMtpwRyAejZTpr5ix1TbTa12iWaYxqFex9aG5f2PWdJPbiyxGeL951rTxd56bS76z2GSPmfN21fzbGrnimegU",
  "key19": "2KpVFQBqNRYQ5AeVVdtBow6sxWLxwFzAZxS52YEWFDTRFQT7ttXszjAnTYkCBNRZiG4FmeMoWbu42inz4KtvsJbb",
  "key20": "3ZQ2Zb3AgnjiUEfEDyQUJeQ7tpj831nwKzknecMf6QjA7GiFCBbBkLPmc3iWYe77Z9SALQP2PAzhMJdCwXUBsKxd",
  "key21": "36HMoEPBvU4FipgdVymoTN4qYCyPCr7mfhfv7YzE6UdHsv1vf4A4And8ArL6BtdiM7EaAkEm9f8NWMFv6WzuHeMH",
  "key22": "2BfCnwZs7aFeGpKqwaY4rPZ4iuEsbKwpjyXk94GC52cjEkmy9bXVJdAyFk7pAEhLVzTDZtQeLsfomEyJQtFtKNE9",
  "key23": "2szygrBBPkkqWxjfAPeTomNrK38y8oCqfkUcqri2hH2Biut881zXt8u5KibKYpPTsKYjbRhGEeJXG1ZqKVDkeury",
  "key24": "85LWJAawyRGUWnTeumqcJezTW4F3Lc3rgxsr9jHhqn8Pzo5aRYg55n9WKMnewKn9AZrNhZFusGFJmJ57Sp1jyw9",
  "key25": "5gTSKPJShkfhHPpFP3UvAfxCSns11YLiXi43nYRsb4bNWhTHaijnaTSxK28q9Un2YnXJuY7bC2FHx6SviAdgPZWk",
  "key26": "32RfYN7eWgjWYzbZogrFhU1NU6rJjhqaMPQh5C5VG9DrjQ6VNhb6LLuB8Et2Kk4LZDE6umD1hzpZb6dTGsjDkFQF",
  "key27": "3DXBvWPMsMbHAGasXjJmbwKRxQgynk5DUzQuWQURBan7oQgzVohz4ZFBcsA7A9oUZiBBzW9sjqYerPrF3aSzvxfr",
  "key28": "3iKm8SRFLx8grw8y5h56jBxDvu67gaPyy8SPUuMDbVnRnHBMwtf1UiaGKvrWesWezdyLLzPziY6ZxWwGi6xMA9X2",
  "key29": "2HnBP84KLVCKAfDSJSLfrsgv996L3VPEj739J2aSx6fkyCC7MQMpaYii6CPD5u2ww7W47eEbx8azkeJmZ3JCG8QW",
  "key30": "4XVWfKvQQRU9H1FBwqsXP1eqf4o4rYfMgLYRCTznZb42hzzBNnyAz654FMcdhCpNsB7yeNEz46MrNhuuzQz6kced",
  "key31": "MqM7awK3ivjdu2ASY51PKoCaTbVhiEC2cPpnwBU3XXfaEjQNvkDKVpVScPMQ5inrL7hVzL4ivWeHjnDwdoTT5bC",
  "key32": "3NGgTHBzqCZTEdmDzPwqG2cB3jUsLrKhB4yNm3DEKzwmji3KxvAqH6JKqsB2X4BTuLdAbfMyeFLkFJwbZFRFJFZE",
  "key33": "5hja69ycetMPqFqYwpyAwSW6cVd3JDn3tJp5QWc4nnidWNuRBX22qjZWK1MhxofizEYsV1SVeDVYN86ja4eKSUNU"
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
