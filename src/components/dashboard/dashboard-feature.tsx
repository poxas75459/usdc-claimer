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
    "4HgFxcTnPfrbd3AMs1geA1eNcii5An3toxopMfT28C5R7o3TXhavvoaXtJwf2qKAzS8nX3atkh14pYkg4gvh1JG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64WBDb7ue7MVj6KNkpUouuSswx9X7FZfMSVTunp39Srvf9eLtxkSRt7u7vLnb7QEVTxWrNcD1YBAvZwvkLcQcRVy",
  "key1": "fwSbxK7t4ZhBBnpxM16zHKCqGiFKZ9XUbPzVCYiwjLbKHMEHppixKDVfPRnxLH72qFMtRSEWd6L1G1JMQEfqtHS",
  "key2": "38LjvASmo6ghaqoe5u369GADoVATK8p84VmDd4M6Vc3LsiU7PMtZJ5p8KuL3WQvdhE1UaHQTe4GtFWcwLb7PRFSk",
  "key3": "sPzrUpqa3LCUQ8TThPL6RNUrk6bjkGoxDxFvX6JJh2zfv7PDkZk2HDAJRm7uTSKJ2dfea8ck5dZUdz1FPo9oKNN",
  "key4": "VfvbrwmJDrjdo151w1jiAzX4LPwTMNHh8adxSxXt3AxQr79tEVs9pdi3Wd1Hhs4V6j1AYofyQ9RpeGSTmVTxmRX",
  "key5": "jSyeDN2LQUSCjpLyuaxdQR7EZbUHUAE4BKxuwcAMyRjtnCatJVJ5Vk9zzBixPwCwEG6LfBCtv5ZkHXsJ6SrADSg",
  "key6": "3KRscGWymD7MxMuYz6H6ggZ6DapZMzSc9oeTpP3Q6z3iZDZYnAU6a24AAP2DDpCR32ECztBWvBuaxfwB2gToZN6Z",
  "key7": "4S4qzW7pxkkXXYgPu75Y3YtDciG8AXTuedzkbjzo4TEdCc2kZrSGrDKBHHHFdHsZKo5U3EfDxxq9DBuwCrjzYEw8",
  "key8": "akrSbcY2z3nBh373kj1ZdULRM9pziPdQK6NzmeT972v2CCsryAmr3dnXHrUCV12VhM4xdo9kUvFfQCKBimXCKhm",
  "key9": "6f5XhhAxqck5zG334Vw6Z2qJSfSaHULQ1uxA8f7Xqbfu2ETQus6JuL7hfEWrRa9zsdJAYpyyScMYXX1qXCiCxFf",
  "key10": "JtSsZDNUkQmLta7nJP4fJKfS949CvohdP8K7Rq3UosP9xr4DMRd1V5U7UuV5nBFWPMhLzHv5nrQZAcWSrm4EHiU",
  "key11": "5fzYGGA9Sc6MTyBg7gNXzMLm2goGrLZDmvYGBEeay7b8h4KAFhp4zpDHM9fb9SsM59MRG2pbRmpj384uw7pCFw62",
  "key12": "5y8tdnWZu4ZbthzWva2bCNnjd9m8rpBfBZi6yd8tPzyV85AruqXoZsuUtMbkmXhY4SfSCkWa7skwJX5y7T7Csm2H",
  "key13": "4TVfm3E48AiN4ePtYetCJ9nY5tht6Z9ymKLcpft731NLuvfPkMaJfNkbdjT8zHWvB34KBu4r33AKd7tSNgmyRx1B",
  "key14": "23UMpLauSsZYZ5U5MzRwAzEJyLP8YkHaWU181sgSxo6vyAA847b9LUypow1E3ibzjEPhmJKDUe14xJsmMU68WwMe",
  "key15": "41adndRpSCdJr8dnaUESTeC7aNGeDJm1GVHX3zDXc7yknspK9R9Nj5zrveX4TnWtnnaRtb8xEQBBuzc5BQhQysAS",
  "key16": "3Rbs5d2Jdagj6wETy5hiSUjHiw3nU2ySXVtNL5KBwauVAKPga5CbNDyinS4dbK4jeTVFgZWTVvpzxy2VnzrLr84r",
  "key17": "3P8cZXrbaEyGhAsft7XhJQeinavG4zErXeZYDYmHL26RXHgEtWmiqUZw16ZACSfWFMq9s2W1gwCoQ3nSZeqEiYdb",
  "key18": "217Q2YtCvkjDfupYgQoc3fME4RCwmmEWJ6LtUp8UbtAtqLR3CeGbYqa5v5QDCfeuVK9VnNM8VnpRNAzmokmQ5zA3",
  "key19": "4tKPD7ECc5h9vzZn59WTwF6FYGLXYdUhpyQVwG77EVtS3iZ2zW61e7BYToZS9Hubb4wzyRSpM7WEHAbbWHMEzpmR",
  "key20": "o3kvn3FmPyfDcGeyxCxNG6vKEvVjrv8z1bd1p6a2hWQFTgRWCZ7wBv6edyhfHs4uRbutYPFmjfTULsx7sXwNjYR",
  "key21": "2UGszL6jGahMeTvLGU88WY4XmMCveDoVD3gCFvaFjZhgz2CK2mUH3iuKe5bDh9BDhGJWaHhPvc8Q7e8K3xQ8yeEd",
  "key22": "51h7jjKjHBKLUMzPwAb7UhDv1oKP89mgXowtRRCooAGYVjURD96zQtmFfJPxF6VQJUkAFcJGzmFQGhVFMVa7oX71",
  "key23": "4dnLrVQUbi3gS1W8oe5PNxMrosb1dyUJSCHNKVWdYPtBcx2NR2WAyv1LNwQo84e3Hi35cHZPU7F84VzJX2VAR2YJ",
  "key24": "5WMrAmEDfS15n41MN5tmSiPWMxM4wWUajfESYk1XwKhYJQWLPmAnKrMgTZ2V6RHmNZHaAvaPusH7ADz8QYcXhpYd",
  "key25": "bq8uXHAvqbBafuLNKgnwcc3J5SwKF4YsfGvo8TNQUv6b6DW4P9FtuEj6rqZzky2DeaUSETntt5XnsiTGtYmcN9W",
  "key26": "5i3vupyJmhnTbVNJvnzEWVHfmHcRHVrpx1ojdnWsqDsXc4ZoSVLyJpxKoKciU1X81zeNKYKm9hTmLM9aU8VuVSPh",
  "key27": "3K82ZQYRTMjpfTsVZAYCD2o5JXDZyENpheJbrHME9rEjqWcrH9JVrSMpkVnNnsBeTFbSS5Fh7YMvhWv6gqdw7cic",
  "key28": "5zt6GGGrVN3CVFPyiPv2tYzMSpYmn8JWa91x7Psw3NdZRpEHVeWSoNBQDs7ACJt8p9mFNWa9Wn1XC5QujWgP1rKT",
  "key29": "4noyUtkjRYQmCfdm6B4RXEKVV9jYJAeazfYGmjJS8o76te66T8bKyctsx6NSkmfaDL1UY8xFG22FdtiitV1iF4Q3",
  "key30": "2X8HaUYnyZxofpz1YU1TemgtPTDgnX2QzDobxmePaupt6A8rNmDcRjDVys81UgvYYWxCQ22hL183AbqGVmW9f3GP",
  "key31": "27o42Vhd1HMTSNyyhL6TZAHM8ewkNLFNZCTLJBRjhCRvnGhEST24FnuCqybhUM3gPdZGeKwVbMnGcLCBo8D1shuk",
  "key32": "o15vhdqf8cvRdxe4AwPmeLYnmCer2NS3TtT4UfNDKD2F9wf5vioyExSKV6ZU7xsi7m5Kox6a3hzChYyujbQAKBD",
  "key33": "3LXas1k1cvNyjuWUP7RyXgUA2Ja2ecWwLKJ5nrupFWYWzCz2kw9Bykn3LwhSfaxhTsZn7yztshixNYJaqC8YKFUq",
  "key34": "5QgvVBqqQ4ZvEgkNAHZwxr3Uxx3vCtqkZc9Uw9sZ5e9uSeZfNrHE1FkZufaiGnWtoAVz2nPitUcMFASJ46hUbaGA",
  "key35": "4HpE2Q4t3A7wYLFhMpxiw2EajiyGA4FrKTj3gJt6GjeTAcZMRfC1mqTfkBcfB3gJtyCLkgHCQcAFe5A1TYoiNia1",
  "key36": "2XVvmXBdnB4sYgSw2RgFZWYnDa4Ha3GWpDg6J99hnNdR8k93zssv8ckPrMLcLa6mwcRSPdtQEMMj8jYDjaiMRWEn",
  "key37": "4Fh1aEhmWqDsS7XNKFxYe1HoZyUVnsFydH9EGjruEtRuSD9GFYTA32w7DJ4KrF6raKchKubbFnjBpEmEDJtSyHFK",
  "key38": "4W5yyskQ4MFKX7k2xVkUcuQkVWoBYn87qt7rzQRvPjfzbxbJqLYtnAn3yCXYxP5vLYE32ZS2vR2bXQiuPM2dem5L",
  "key39": "4Z1VhmeFJ1QsUAB4kbn3PL5Ux7sKKtxR1KjpJ7hDsTpLQzUdbrtyUcmXTV3BRTxR2XEAWhhtPBQmeaK8Wzv3L2Xz",
  "key40": "uXpnVdpNBqBfxN6XMocQuP2h5HGDa8Noc2qAwDiv9dWAA6twH2ST4d7anugidDUbbmnJzrRvx4Rv2kWjN62bHcY",
  "key41": "557PhGcFmfcfu1uVyGdm5vThqunBRK8yfc6DTzoY7Ne7peTu24cZjoiEuwr2gA5vdjkxPLkvUKYVBzLaUsERXcYT"
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
