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
    "2NdNs5QvYKc8T1Lv9yxEWNKqKJBb6riiDMYiejkFxGaBToL3n9CxMxADF2WjNiVp14x2mhGLYa1YscKwyA5jQz1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u69ACmgatxH4BoyseWTXYXUUMB3RGP5dPxGTe6Atm2cstvtiZrWHXi9uUfP2uYgC4fcppZ5bKxzoJofhyPUfFWc",
  "key1": "2hXXip8w8wDFghPB4yAkPEUXyWdvMdoEKmjacPLqkA26XkZv4jeBbeSmpfLwchCViYeiBqnN2XoiU6T2znDXTyLs",
  "key2": "3BHG7AchzkYsVxh2xYTiGbu62iKgU3qH4RDABkCv6kBXeqDTdnrrath4Bqi6M58pSdfthEhjNqwK6PTKsUAgVuno",
  "key3": "2qTxQUJPxWPAAXWzVLaGzZBS6q3sPWFsFZyaMtiNMpWyBiwJEvFP3m9RCmgofsS5Vr5QGwXKgQ1mUM2wjgjvR7wA",
  "key4": "PBytazFHBcEQ3WY5sZtGR6EugH4qcnL8WvojdoWXSg2PD9UeyBqDVg5iJ4DEgtZYEoAgwNearoND9kvk9vdNoUY",
  "key5": "3A7JDT4K2cB28hvB5a8MwawUf6XMmWUJcwUtPcGKaA8J6WyTnYZ6W3X255xYSywTn4A6Tey9qvGNBUnAfLjX7vhX",
  "key6": "5aqqNMqdDUwHxdAiRjps8Lg1houcvvcs4q8QsTiC1pttVbjTS9CkdVZZZf6w25rn2fid7qeqqk81qUC6Hu7AVjMt",
  "key7": "2DjD1XCmJKqTBYwpNvvrPs8TbgLWREHycZQGZUtjPRVpgxHyXQKYjXNmCht1ry66XTQZjHjLC9oB2F3jKgDN1i6r",
  "key8": "5F5WnJVY5nd5XLDDsFtcn3H1NhVPDAmNviidu4b4Am7Z9T6RHBcY1CJZpxfbUjXpMZy83cVRdA7bg94Am8rqwdr3",
  "key9": "4nRmGL3vWhHxRbkDYVkNT6M2kSzPw3ykkcE1T6PJf4jLeWDi9JjKLtCiSpW567Ymtvf3Y6d2WAgmuoT8WVpvjh5v",
  "key10": "4nEG9ZT45nZbKau2wsn9dyNKbcDwJj6Q9JATfRVNdhRqSxPNu8VjhQgmdNExQVytuC8fWYicHAJZhoHN4dPHDpnu",
  "key11": "3243qzvYtQjnjLcW9zZFnakb1SpqVvUcUsHqLjyZ6xCKCdSAv9JEKtGZoKj7JMNkh6HesnSf2MWGdxbhjPkXbUd6",
  "key12": "44AfadxBbxbbaohk4RXkBEZsgg9Ep7naTit7UaurwNxnRpxZSdZoaXJkdQRgEiJXv6nHca26bgYjmn6X7B9RH4fk",
  "key13": "5gUWJvkvTi2t7Pm4e4TG7G3u8Rgx2kHu3kFtbwQC6xhVEeTJUuTa9MiwRSnQbr4vd7gGHotEr65HKZncFvX1ASsC",
  "key14": "3EbJSz4Jkd68M3f3Lqb19mgvLyzrBkzHHxFYH4TJecAMCeahAcMVeQkXJDT33gJmvNqCZ3xabujFJqY6oZKTu6Qa",
  "key15": "24WFzSgwyUWECjrqK4ju3B1M7hsnpAv8jTgeVEAHsajQHG5k3U2ZVe35H43E7EVKEMjhRxRmuAxD1FjvA48HxeWY",
  "key16": "5pjMxKnDuh92xt82stLWBdudhFoxbjDcA7EPHwrXyK9LND4gVeQ6jhQtyxpGVMtKEaWpmmmmYpk44iWqmXZfaBP7",
  "key17": "3Uxd18aygVcDq51V5YRn3opgjXsaZhjp6PuPPcrjU2zddk9a58hgNEd7bPsB5GGPNuFvwkumVHUfXWaEVvmVNWMM",
  "key18": "24PQRcoqX2zCCgtGMixKHpdEM35tTMrXKaX7JMw7S6JDiX2vRVXrqpB7ycedYLC9Fbk625EWyo7EaV1zuw8eq5TB",
  "key19": "3kdbhwC2BAhQMT49369y86YpV3R2VgP4SaScExoGBbNEGbvJACv6QiTPK4VhXiX5CvMCEmhDex7w9rRfw1aLTqMZ",
  "key20": "3gdM3hes794fSXrzB4pP9ZQY3dv38qMowu5Evk5XzVF8LT8Q9v4bnkDhDCV27XGrv7S25xaYCUyiswCnZTFkFNve",
  "key21": "5W8rhUvu9KgRQADyVDCxEN7MZe3T7phWQb4vEzECdBhrnWAAcp1bzu2KQQQ9zzRYugsmhh5RBhyZMUTsGqK29VTG",
  "key22": "64wCs8hzpGGVjFP1VAG7fK4a4RhH3jrfjAK5kGTkSrgznFUzoBt7RLaq8VBDteVQ2NgBYzNq1zFSR3sN5ckbyDSX",
  "key23": "5XhRFf7XgkXum3MxV4Zk28dbpAtAhoYKKRxaUmQ5LdXqvnFnat7GotsZDJYYzYNtmigWEfHgqKP6zdjqzC3X7n2F",
  "key24": "468AL1kZDAT8s15tQ1ZDTQsgtQ8psDXPR6dAUvRwCYKo59KK5bLvEUtR4Vo3G5nSXkZLyEPbsv7CwQNTwiBB2xj1",
  "key25": "Y2e3X3hSPH4RP1LG68WLEv3rDQzfXj6GwbH1kTgrhuKNy1udgAzom33pDCYFc86HXW4TiQDuTAqAb4puCYw8gF5",
  "key26": "xBbGmfcscHP4gVZxpZJhfuQYCabWmzEpQHwcBREHt7ijrA4dr63FBxpSzQtTmL2GAZaQpqPqPFzHBeGKMbef4nx",
  "key27": "2fYJwJMaRajgcc6JafwwaRmLHE3NpaE77iGBBNYGUqYz2ijuCqtmJqrae7UPFFn8WxhAmTks5rQB6xRyyKtNk5HX",
  "key28": "3cHkpuCVWNHMZ9r4UUnDtbg58YBtcTYF7y1GCuLmH6mQuUVzo8rNxTAuWNrFVTx3hdeSVHb8hFYxpK2GqthmeCE",
  "key29": "4kktLnUd8iJypd7by6wcrctkVdtwyEk3kpoV1zhSox4SgYVAnQZDEBXsFGvsyUkg8kHjmJj5C5MfQ7xs2E61pSZd",
  "key30": "46X94HbNq5y4RotJfj3NUkxgQiMTFmWdQ18j3PCjwjqGocXktvzDRXNaSQNgy1qTE6kaP9sWFK2oo799R7EF3bVs"
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
