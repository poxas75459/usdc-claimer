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
    "3BnQMxAYjw4YvEuvutE9UouqqKwaM1ctc4vXmh9qm3SYW4zcdG2xinM2vjTgePqC9b3dVmSBd9eebBDapPynYwst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61CEKXAFThsgHX7wMyk3euCcSRqoVYMwskMmhVmsuDwouuvy1WyemUbt4WzJVFeEJ1xss1ALkkwsz6cWhNGU8awc",
  "key1": "3AYarmrAVRSc9AS17emd1TUtoZny17VtgNY3sAVdsi8wdN8BuepGSTsBX8toSP9fRVHzZz7RNadzsksbL6Wocx71",
  "key2": "2tE5pbETtcxvzngZ1jgALeQsVsAjAmE8LxLnY51Rvsg2v5hbvHRv8BEMEr5zZx8cevLFtfn7FwBNnGHavXz3GNC5",
  "key3": "dDPrqiFmCzvvHmoXaWwrmezx67C3ZCcxyrmzRSvP6tuahZHmUbtCc2UsJqdfGPK3TNL81c2zLebWzXKKmmUvYra",
  "key4": "2kw3MuWhJkvBwVeWGSfFzwqEXfz2jmRaLwSzAXoJBZew3qWNuJMWL5y39HyJX8uJFg96FzixtEixMidbP5fusPZF",
  "key5": "UM7svEotrgqwcVBwtWpCmJdQ3z5KhTmK8kSBJZR9CcUX9vaU42FBQcMdkTQuJ2X7KX28m769uPurFiQaA7g6sJf",
  "key6": "4K5nyNtspWRMKtzX1AHZZZupDDocPxn95nTS8zED99aqEqEePGVLvWo4wJGH3JMdWV3YPVc2fMbCgwwmRj9njmwE",
  "key7": "3T4ifLWQeZwUKAB6tM15uz3RceWUWaxKuARsagTisUbRuXTZzKH7zsDdRXyhxPDdQJFJ68CKLBNnQmE5cPn6Wvjh",
  "key8": "27FkkZ9GzPF4GMqah6LfYaLS9SVXzSiNiaNB1pJ1uG1mcz5PEd7QM9axjLLykQjssZiC1EtHJjqmLLbr6JvdPYaP",
  "key9": "2rQ8snaVcsk4M5p92Ka6nEMreJvcwQnZDmN6eenUEkepF5SEQfJ85zwGYY3FeRW9PEVRwhnexKiy1vPLtaeWSUjQ",
  "key10": "oCTMrPvgrmHrD37Vhb5DJUfqB37of41pxyJCCx9ek3b636rbNooug2UWtw2DjMJnGsqLNVRbLYc5ak6aMmBgaQB",
  "key11": "59a98qKbW2aC2wsnJ9RyMoE6FE3JJSyaos5nnirni55MXRMddVJAyWXnNbyda7Q9iUD4kk19AHB1v7voAJwT7wyV",
  "key12": "4TCLeJ7oech6iFwaD7v23vFPBSp9Wsd6XUebC4o4njpU6MvFmkXEXFPuc26q86b5YXqnmHPTqn2YWBxF6SigyPr6",
  "key13": "3SYeJ6g7ZZYZVBAxwbRC53Ezit4i3kDaJ6uQQAZto1TXkjTdbWscJdiPF7zQNGTMiWG9vNENVT8o2ZqEAGjYNRvZ",
  "key14": "3nKrDLpJHg48S4xX8zjhiyb5khEnjvHzqFZqap246hBPQLxWH5vTWxuhLESsdPTs68i1NZSWyDKG2VARmPEp62ry",
  "key15": "4hNKDBhFcZKw4qkni4MGs2VtueWBfuLWCTjbkFdADKmxSqzUCqHvBXhRXxyXTWz6VtioRkbisNiZTHnnUUL2FWEm",
  "key16": "4RFm5vEGpB5ELtyj6r1Zg3TJZB9WTkuQQ7AUkzKUMPEuSTiged1jHc195b4qvhJCTseMZcvgByMaqo67QhDgXfgk",
  "key17": "3cvVjfYCotcorWtDVZAPpdhWG6rRqk9W4E1Q12tCAQuexcwboaJupgew1UnMS9T8CY8MDtovZ91aYxexYDEDB9v8",
  "key18": "3hu5FRMtmwDwvB2jfZxALjUjfpKmzxx9y5CMiEPVju6qUQCEFs6pjojWjNuwGgzGfF8n1GDmZzHPfNAXspTRcPw4",
  "key19": "fHTTHAEcZmqPWV1yX9KGxGG1RrqH7yNvPn3iMwfnVRAqaFXT1byX8G2vedRD4Fg1oREh5yVG6zqGLhPzB6kvuFz",
  "key20": "3jETNgJp9iKYAXZ58GTDyoUoBpnKyhmCFuur7wGqQYQLqC4MHZCj7MYVQV7pyPb9APHPjiHtHRSzXksqFD4ZQs5C",
  "key21": "3LNAbnEPwfdboZFwncK7dFFvPEV3Bm9sGud95wuNJLbtKWEyB1t2gCpd53dmjABrKHVhRSYvqHPd3EmmFdQMMQBA",
  "key22": "65oUZbeTMuiXGU3XHmVpot2VnT34iv6vtSwZwESoTAkL9v5GQYCaAFLwRiexbt1DyLvZz8t2sxFdEvGfxKEQfCw2",
  "key23": "3u7unHVmQTYjcHZ4oiSm86kmhmqskavKkjXrcwLPH9p1ULYfBPNxVdjW5C53qaKTJ5ah4VW5KKTq1e7Ujzm8ZNBe",
  "key24": "3kVZiEJa45Ek6TamUWWfBEyWh1FDJsgEMBYqVURivqzSpaTz2FVkGrSpwC434PsEkDuwrHYQToxCDkgosGjcdxac",
  "key25": "2mqqpCSy6MR4YByDhezqaH6qPb2Lqq1LY6TwSg3DNNvnQxZdjyeyE3gLjhLLHmsY2NHqhsgC8idvxbY5Q2EybX6H",
  "key26": "5oTxJiGuvq9FYr825VHkjQ8nL6eYhv5SDZPNYemNb99GuGGMKmN7JYx4iWyY6MFevo9VV5SBkF9fS2aCgWgemxP8",
  "key27": "4cjqfvWFK3KCiUN5wMBHciGe7iCF8c566WLztCP78YGk47gEkUknf3q6PPgHBpsFq9arerwsoym2vp2VbtLN4zW4",
  "key28": "5FG8MdXTEgEVokkGauM4LesKTQWxk2LaLVtezb1UAZvwxaArMCsNsezxxuirKnVi2CBh43Y7Ki3kYDAPMZX45hcP"
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
