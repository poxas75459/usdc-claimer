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
    "4s9sWa9ong6iqBzskW9KckKTzhwfawNfgz9NJPfnMaEVrmHEyLc3s3m7rS7GGwRPNGpQMXjinQqAm3sVmMFTwWHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qW3MmofZv9xrmvi1dm6sUVhZNpFgNnoSvg9RT8Cd5QJ1jDTaTNGYj4ndqzZYfeY8HC6t1P69ZHtqsnqZQ5K8evW",
  "key1": "4cBAo4wvRVPrkVhcJfGZkfkWwX1YT8tzuw7uRoS1H3KPcpzHgKEPQjnB31sPu9QHDQKikEGyFmDogZKpAqZkp52f",
  "key2": "3jumS7WY6NHdrk8baGovCNJGiW8BbUmR235h8w8xmAerFZQBq8DmAs7ovMEApeQ4pMkTnn35swpbPRV8ssEGHDaC",
  "key3": "58szyRzD11LgK1Ui49mhatYS7RQvKpcziaettLUeDZCybnaZ865B2wLU2cR1Eg1JVXbToMCgrQFi3pCXz4TS6ca6",
  "key4": "2pygkr89PRTiuL8K1RtJm4VrGzkb5PYdJY7eGyQ8C15NwZXjaVafLrJMjCb7XX4gaqUcMYhaYpzmHZEDz9zWAaTP",
  "key5": "3UCgdgqc8vQMH9xgjv3rs325L6QVJPx5nLxYUBDWLTAo4Ryw1H3i7xjVasEayW4NaK9uo87pKGR2j43sj8NENALX",
  "key6": "25Yd53PuEZB7eX5o57A6MWeJSrdTre8jLxNfx5fi27LdXYnbzuWXJJGpxZVd1pWVfidUyv5frNVjcwyrgu4BXa9A",
  "key7": "4e3HjDmj15S2tbYHj6kHYDLdua8JYpebPce2MXBto6qfecuaNYTF8VRfoFutyYjwfpCyoNKcXJy1qe5QSTSgnbjE",
  "key8": "5hsQAHqBuzgexqpYafsnyMT2NGs3J2Ew6t8aobPySq5zcUFTKg6A7K7brsAXkhzjHkFDqojASuNUoNFd22B47gak",
  "key9": "2K1PLpdLzVNpkUa51ymRaVP3D7aJKmhqFxVpSqTAx84TuP7Tdr3hcJg874mzkYeT4MsLEej8aHAwJKnQ3Xh6z725",
  "key10": "4ELSqS9CuyRniZhoRDncxPZzPZK1tpDd3cWaDrLJi486CAmvaZKVQMDu8JofaBCSeM1bJ4TthQ448XajCybbazM3",
  "key11": "5JLYvgr9UYt8S23t7Y8aqMVgKnXTKekAQHLEegcaQ3W5TSn34g681pgySjct2brcAdywTEAvPPJs1r8dwY2LgWtF",
  "key12": "qSmKdRfxMz7A25Zk8ej8K1Mi8NujbMJreQfL4TVpi3o64QMjYym1MAUkH12iW8obDsQnQs7vVn4aZ6JhdmZL8Hy",
  "key13": "JtCDdS5K5xyqEd2PrFij8qYzjZMzqE3pVBkP2TXj88XnrZSHTPnuE4FBPgq85YJS5C6Wrqrm7rTBGxCWjMie2hP",
  "key14": "5rBDm5QzWnjnxSy2TAC1gK2J1J6pHucj6sG3XbdZb6zNWf4Vf8tSQriccDBZwExMfu8GbwYD2k3v2MnfbtTufeKD",
  "key15": "4ig5pvHzS5gcutpSwqy3k2s3oweTtw557DWqaVFp43tbxeaekVaEzmqkwDXwEAsruVDQsBvFHTXg2Xmr2uxHRnve",
  "key16": "2g11bncVBfdPcUsPTNgrW8URu8q2tqwXj54G2vfZsyYHr4brRQLzSjMuV5V93h93BSWmfWfPdBwKb9gxqEiXK6Hi",
  "key17": "5K8US2eNPaBoBFfkcWi71Hn34fM263QUWbPg2jWNApJFJFzZJdXVGzwfFkkxuPZeiUkHPRcvkwvPQCGef8CjazwV",
  "key18": "5m9CniQeLECsbPwpHDKW7hUzXcCLoeWJJHGXAv2PSsbK4cb1P4VriEeEVzX6Ck6WR77cKtFECssr94681w7VQP7E",
  "key19": "3GdGKCi4opHi21MAhHZiWuLfvg11Nbxd423JS4G6EoT32c8J9ftwjLY8kkdFtvE3CxT5J9VTB8KUxyAVaTXL6nzQ",
  "key20": "5Ct5wAsLGKjx633Ze9yLWroNHZ8i5ihQw2FZUg1DD5VqVoktvcHJX1DARK3rEdgKQwhNCVvJNUGxmMu9cXvDB9Pe",
  "key21": "3ZcrD9zThAtXJ5zqBhSLxtEE7Qr6CYUGNmZe9ZHeAzQ6WDRoPFMP47pKepM7mgiAN8hEbVpLTfDvYtyRqiEkVhXW",
  "key22": "4Zhpz7vL1ZoMsnhJF7X53PNCwEZzU5EKe5aUSHL6hoB1JYdbsmF5x3kT2kRoNzYFSxUe1os4hSMLZVjXywwf1rN",
  "key23": "2Que68BdjsoEzb9ccXcJ327kywpsXKGeu3P3RXsnw8DRmiDkGeCPRdWrxLQA6QMaMWMyR7fC3jybosioMyN1bQ53",
  "key24": "3BSZ51kpirnias9xQDTfwioTzxuTNUAqhhJ3bCoHWYp6eproeZjDMn8UiaBc3ZmPganYQowyYEQU4WGYaKktKT7p",
  "key25": "2FGbYprGBYxxMV62ubGUEJhntqhUdqADPeQHWLunnS6XLmUVRC6vwbtZLyCRguAnEUKvbvcgipXNFToZwa4AJRaC",
  "key26": "4fyDaybcepD7tjDDPEEpoGsQMek7CDxAV4fyUF7zLP3bkDTR2Ar8AaJgULLhzTkrJAaJPyfnxNXohYv4NmAJDfPg",
  "key27": "3z5XbKGeujH4ivKUk6kAiGquvk94yjyetK5mtQsz51YkohsYRLUskcUNsWEDj9C1dTTheHYX9A2nZzgzKeBxNvAB",
  "key28": "389DVjPCKJeRczs81xrM6Ecn8Ut9cq6vqwcL1Kh1s6Mxm29bKE31KCRDNA4MJj7Liz8TNLu79gR31FW8HptpyLpt",
  "key29": "2uaHmMYhusXUauPDXWZwNJHE34XBDiQzZjHHXc3BxwpnRq3ThSvbtaL8CPpBVCpuwKFQfw1xVf9RfMxVFLkLR5nN",
  "key30": "2Nso2TnBuzDkfuaUk1Jsuk4xWsKt7vhYzPYwwWVhWKvaRnF4gHtpWMJx5v3K36bcQCSGBoMpybmALGuAzg9isP4S",
  "key31": "5GZiW6SrHvEG2vDVTbd9WCpL8At1W5FyCT2t3VjYpJLbUMvVo6EMkb7dyoRQ5YEe975iqUpg2cpVmqGjz78efSbS",
  "key32": "3puyYTJxtepeDJtZWcBeFcvDVYgTHy5HMZvTehrfzwfPMiwMN1TZz3Kwvz8ZWYcjMhrFLa4UELhEDgKQJeR4hPX7",
  "key33": "44FhtmchBvWwTZnEY7smCN2UV4JSVrDhUXkL6Kt7cgq7i6Y6GGcSxPs8iH59xSGcuVaiUvZ8SL6NmyVcUAjBvHbe",
  "key34": "66T1wkfENQeTeF7CUVzHhZt1eJqpSnTQ5dv5ZuypXdMFrJspZnHuhmYDQ3uHRYBuq3mkug387fUML5vBBrYkbuiA"
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
