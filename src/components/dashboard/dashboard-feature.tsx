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
    "27x6RHvfSsnkULMe26LXrup6R72yVrHQjBvZEnXtkeX6y7JotxQ3uxnpLGpvENeTNprvZnZa6ivLywNDzbksq9xR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gknDcfNBkY5UMSsJBbk7hVKdRdx7QAxpCzq7dNS5mNG2KS55CDg1SF1sFLHm6TaEMi7MrRrooy7ZttegR6wsdUu",
  "key1": "578rnaCvSwfU6ZxeyDpfxgqeJC9McUUffhEHKazrpF6K7LTdEp5QTo2nFCCBGF1TodLixpehB4252Wr3gCk2tX8V",
  "key2": "eUDcNjB8ge9DDwsmw12ux4uuJ76JwxmkaS8Ubp65EhXojjQpmEG6KaCz5qJio8xZuZjQd53DmJAMyVhrQbaLHGU",
  "key3": "4awfNHwXhdKadcT6NCCyP1hUJRSFd9wHkHW6XwJoVrezDv4MqWbQgG2P9RJFTY4znMW8wsnszrxyAC1sYYi32RHB",
  "key4": "3AkNiTxBx73CBk2xrrUdyNEdz9zEmoaBr3gBgK6EjFwhiChwGyFmhryCuQ7ft1jQRovAxrorNS4phgAExgidQ7xj",
  "key5": "3tc6uDjcyJhGp1G1Qj5JAFdQosLRYNmyQg9FQjEZA4kns7pSshSFWddrN3jMVeXu4a2VwYRWmQRB8ayyLAwhZhKo",
  "key6": "4NXDkYsC5APDDFvyZhp7YnhTXDSLYuM4hAdhWmr9z9eTQh8mRr3pjZzBLRstBJsJCJbwc5M9ceHRhec9LXKffsYC",
  "key7": "5ByHTra8woYXZ1xxUo4hg2eBRYHyAZFKmxogVzLF5XwzSyNksJqdW6EwE57oKE3ik9tCFeYK9J1SxPGvPGyFCY4G",
  "key8": "wxjPUPPmYVB2RLo3u5Xcs2AkYNRHjJkT1AvcuVFzVuwVFsWjUPLEWsDX9jwDpjrkD8ssmXxxwJGfqdkbVKyvqTr",
  "key9": "48hqMYtEjxWXuqAYck9RxDLf1mir6ZZfv9Da3hPX1uPAcM9xSX2DBYtbkoJhapwvjy2uzyLbwN4Qo1Cp2PtoE8d8",
  "key10": "mYea2tegxMwXNUrzjNZDiYDVt439etwofZCXzi3siQAMphkeoox4WXu5NYLCMRHq7awpqVLi9gaTwxjwADvbyb1",
  "key11": "3hjHCFxqzkYzM9R87xx1PnpmNdTc75r8ZHK95dPZfBRprQiRW4nJgCTaa6EcxkCk6NF6DNc6bsAFXhRjArtxd1XR",
  "key12": "4UpjgMFubAHdNrDSEJguU7ocWSZU82ifHAZzKgMh9wM4sYqg8h3kA2fLnEjUbuLSCJDJYfKTMdoiSfPop1FKAeDN",
  "key13": "5jsuLrh8hHXTYDsLVJhRSLVyWtNuu8dJVkUADxgVPG8tvVsFuczt8TkQWv1SksMcdAQsxfWC2yrB33EUDEFedkaf",
  "key14": "xtBSApve8cHetEhoHP1pkrJ6aFXy4hC4brYS76ku5165XhyVgEDyJVn1qAbSnPr11PNFUHxhbuNWmAKZZrBWJfz",
  "key15": "4x28PSFF9wpT4zctECMoiEmsYrMZke9AmxwpAxw7Qn3NteLozBJcM1WBgxzkadzmFyRNcZnQjSg4t6Jbtm5EefV",
  "key16": "22pdnYQD27Y2cCEmE6LcUfLwUi8We8HbeRdi5tjBi4bVJT2f31Ykw5dKrmNY7JqMj7drF7aihABfimpSPAyJmpyk",
  "key17": "imY4jmxm1veobZjLWornwa8BqtwULWjNaoPAT8VkDJ1bp2SPZjHtH73ZtD3Gpupd8sG6d3yiu4vmqTvv1XijriG",
  "key18": "2UW8dUt8J8ZZDQxDUFuvy9KAeFKQSonJ3KTDib6Dana2f25H7WG8KHADaKgc2e5MKs4oK3bLsGcQ39YLRAWADmZB",
  "key19": "CBBKZCJ1ahEssQRTHcvVV6AxLxvDeyK4gd9dcw2TTnvcZ9oz7uodqJNpzc1oQua6j8cspyi6YYqaR1Dfk4TKAky",
  "key20": "34oz4eUxu3rQMWj3qJNH9gYitUYGgwjr2sSYhcHdSNCRhDNpbmoPtDfkqd2MbY3MFcduFQ4tzvRE84RHmxYy1Yy7",
  "key21": "3HyZYdFJTZ5sVZfzS3RdEu5jRnZgksNcgWeipdFcGyw1d4Eab9eFNSFcNyzyafPffeDRHbuCqsN4kC2d71Wdbnzr",
  "key22": "nsyYnT8UU3ostTB3Fupnc4H7RtVAEayzPD12HPWeZ8kfYQufAmCdkXPS5goUKJjjwYYAVe7DbX7vTdv35FF7YMm",
  "key23": "fQ3sSMWF6tU6sx5vtahVj3GtCdfD2najvvJDYxukE6UaMAQEUWJpdnsByeHCDepYoUhu1TgrUHz2HRVQEMJZyTd",
  "key24": "ynyut38eG1isod2H3BKaoARPiZU91XHa3jhtti6taZTwPxbHhVDkNqoWkcXdg7LXwgwdB18mB43n2oHkvpLjfPh",
  "key25": "4DLxBF2xzLjyrSc9RZLrAFEjKQnquPcXvbwudZ9bKCfH3m9TNVG5YrC8ZwyEqnue25MBPnuR9U4LKkB3n9aHpXz9",
  "key26": "2nmRnxGKPm5egkdBCXuiwE4mDHcmSM6AGm5iT8jSfNtkBf9XrjZhEfZUfV9vTMp2BZkXxQtiWqmvDftAB2o2wgu",
  "key27": "uRq7x3AvKM6LESSYh1y2kXmNTYxy7E1qoUFhQFcyUKwhvF8s1XDcrsKanjbDp9XLAsm11Pq9BKaDaad8hXLFmUV"
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
