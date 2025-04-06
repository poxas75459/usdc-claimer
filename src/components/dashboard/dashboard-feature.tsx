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
    "5UcQ6brFUD9dXPxA5vgXhttUaqrTwF8rCLU4GHSs5DEmKnwsSjpEnHEKYRYM1FARFdv37BzQTfPN2BF1v28hvVwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VsLZsrpRwQJB38nCrs8mZw2axAUr5boS8stFMHQoWfbphdLMxhWJMcHiqp6gdemP9JLpyQM6anhekdkP9XjMRN7",
  "key1": "3Tg77ECS7FwKcyRLDaDpWANXhdN66YtmNWMVkHSuvpbhByDsCe4ENgXrNGUrN2i1FefNSQLbRq6E3QeUt75P14rn",
  "key2": "5XKq46CJd46Pbyu9MLKZ4pqP1wcMXgmUXZgZE3u68F2wRkV4kJ4NMesRjKc5shmp6QUUF8aVY8hxJ6MUmH9bQPzP",
  "key3": "YvdEBs5Jd3fRca3eRoAphtJzXF7mcXHhoyW6gSGD4ao3hajNR51a7SexqVax6FzpJHfnmUxzkvbkw8yjQ4PMAmc",
  "key4": "3TLZqoPTTTqufmt5WecQ9b4q6zG3eqxk26ZG6pWZD9aGuKehqje1B3jG3AuPpkQgTdMQ9jV2CxSGabhdBUCG8tUx",
  "key5": "3ENac2G4TMWU1cNtngEnuEarbZKDjApNis5RfyvWnKc3W9ND1BdxMEUdEGSdGBuxRZVMKx7KJWy6bkYPxKVgendp",
  "key6": "q2ek5CcSS2V2EVjXUCy13jcWg3inh6HAA14zV5EKhugMfemwdARE8BUNXkWS5BeeJABNYQXwaZuEvLc7xSUUU7S",
  "key7": "4bNm7UbC2hNLc9xhgY8jCMW7iNXcEk3o9fDoWoUhN6Hoa18sJKWubtwWKyXg1wbbgZiJ2uLZZz6gxRvgEmttdVLu",
  "key8": "5ZzVRo7LgdJNHpLVme8fQ8yye6tMtVRbKAeqpy9M6wMnR7fkQrM4e19ofa99LnkibM1hM3HJQe5XdUxUvbtwL6G",
  "key9": "2di1L3pT95DFibm94vHfXpoPB5EdunrUQDzRVohWejrmsjwehjP8uJRVtoLit57uaD3aa2mYvtqAGX4mEjNnVu5q",
  "key10": "3F3pg8HZ9WFgG7i5icLXNKo7dJSscQKWyPmRzvK74Ye6RLFfB2dX8jLCXQiwh48gh7Cb9BNYMLW9i1cz1KJHj91F",
  "key11": "wsWfZbYK11wXCSBnFEPGMcLUrjKPNBxa6CTQP6xKGgXwNjJ2AQuMF64626Q7fHCaZtFNFtKRaZTnk9u68WoH91e",
  "key12": "43d7adxGJv3jVi54xG53f5bFdwc1nFnKL6Bxp12qJk3qztjoYjDkuS2nijZa5FRjhomGY1zqXKjRvzpTe2fs1SD4",
  "key13": "bHy2BG2oAVsgexySyMstjnJ9nB7NvjJZywQTH6b8T8ttS4DAKGmtJ1yq4Ryst3NQMXbjQirn2wuj8ut6SCgRsc7",
  "key14": "UZ8oLpogZ9qMCobcJ2hq4rMhy4hDP7TAZ9fPGqiZ1rc7vee9CNFs29nrCMsSQB6UczYeCFUVHancnq439c48HrF",
  "key15": "5bzwScZH8PmktV3MxGFKowWjWpK1864CiovFtUd5vULQTCyPPWnCqTBA1UaGdYF9bZipExDGXAYo8wLzTHURJ5a",
  "key16": "hXi5X3tDAUJKXg9SDH1bU81VgcS4r3F5ufMPyDs1cCwhS38BV5HG9LWZ7V2TKVKXVffxX1LoC8ZLHw2GKN9t4Qi",
  "key17": "4fFS3aaCsmDkw15C1i1E3bEWAVcuNq7hxiRJg2SP74fcb24sRYYwe7vkCr725djbw1Kgy65ZKmo58MXZ4ET58QAX",
  "key18": "4dQMjqM75bUE4frCUtn4MWwrF55CdmRzos9E77M557c2KeT6fQ4uWmJdC2VNdCZ3hcQJfkNsdUiHshhHfkQtqjY3",
  "key19": "64AbZgpsJ6r5FBc5CiUmRsAe5bPwRwnBybRkTDVZNVpQc29hPd2DpVcjEzhi1moLaKqw9XyGmZFU2D9awqsmQsdu",
  "key20": "2PimJdSs3FaPKGtQ5mvDns5x8TPvqtwg1rNFqeztKeN9KcMTysVSP8XbhwGQ3F4LMN287HmdQ2F3H8ZbbBikyFdf",
  "key21": "3a7gtmqsva2vSiM118C8tXhyBsE3Vo6CcBeBn2DFrrezxMwyevb2RqK6D51PrqZHqZq2MR2YEGzkxFfY11uwuZz",
  "key22": "24ks5zKdLr5ATJWHg6g45R2GDgKT52GB7XpMaZUR38ZMWgrRj6c1juSiuMAopKsxuJr2NshL2WmVPBDyXrrDmmh6",
  "key23": "2S8NUvZR5hnX657gFfdkrkpUhy9YbYY2irNxuCJevesrmXLtT6aC1Qz1guT7NUgeQ89Ao9FNXEDzSUDADUh7qsrJ",
  "key24": "H3LZ2PHMFyjYyvt24fY9VNRKyknkRjqkdPaHWUsaRktGhgobpEaGrvxm8hZsqY7ioYZC6Trbou3e2PWUSXvCrn6",
  "key25": "3G3DXpJf1HGAEpKD6QwMoySFtNHYe9z1576pM9RybTSB5LzpQVosxoPLikNCFct5wn9h8RRaqxe6WxvXccx1f5bo",
  "key26": "4dxpjjwacghfyLt73fzXE4sfLZvxx8uuCV6FkwiyTghTkt2U98edvJ4NXznB5Hv6qrEccpHp4pGVkDLZ9xxT4MoR",
  "key27": "3DE3wFM3kTtR7unhqwEAGw1Zxs2xmYEmsji447ErtsyzcrTVF8iAWwpTyKjmdTPhRegTTGM5TpmSpoTUaSSPEVRM",
  "key28": "2bTAW3b45EJnyZHxo88SJ5jXviZysv2TN44f9ktgMgwnidVpvBaxferDsQMrYQS2BEKv3UNULtTLMz36bYBM7frD",
  "key29": "2VJmiwJRdph8J7cVwtckC2AiFUXSRjkQh3Mpzto5nzfcpJHETSRsnph7Aou2dLR3cVzDRsU5Np47jBrg1YwJWnr8",
  "key30": "5KPtPhoTGLRH9MJNw7z1gW9jZsTWmXp6LJbc8WLiDCnzzoVSChPbBGEAKgnpjMTxca72FkPZkfTDByezJXjxjJjv",
  "key31": "36teUz9hCcukMz1hQTvCymAL98ATNw8FwqpzMA77szq5p74XFZN9c9x6nNuKmivwizb1KnURvr4AWDvyuU4atriy",
  "key32": "62adSn3tPB5YTiyXLHeM8Any5rc2AD6jUBzf7ReHyTs4eWahX6TXcS4x6URextLsdMPBMUiko94A3UA7CzMrumcc",
  "key33": "5yV4rAcduWFGiZPjsKw5roRxptqBPB4na113vKzNnwCey8HfAZBMKsgw1jXSEQyAKZyZuWnQY1Skqn2XCbRz24bR",
  "key34": "2XUYF1GiZofbG7QBHj4Zj75UZDFA3NL6HkCvNoA83UJpQG9LCSpFnnhSYHHaeTLSAWLuwjhRJkzL2tQhh9WL9uKQ",
  "key35": "42TEYEYZ92DH8i65iVxn6SkAHZ5cXRY9WqWrfZ3dcYiqX8nT7awVJz3SbzSMz78ievvwZEC2b9giZcTWFBMMD1Kb",
  "key36": "4zwgXriK5BeD7XZ2D2d8W57WukUc9vxQbXE5y7gkEvWTmPEdmNxbxqyrV7MbSAXsxFezVN9QwuHUBArYHwy755au",
  "key37": "2Ew4mmivvRK3btLB59yxqfCVjKTHHLvDkwaFpLeYntikYtkoLgipAHpa2eXDZacrvy3XYASfySSmaq9YFpRDcxZj",
  "key38": "4Xq78WgY4DcWrwEJQNEnvMHkq7PdmxSP7VZsArTaLj7VWR6Sos2JhSdHKCzg2U3F39PH9FYo85JmXbUBCM9kNzRr",
  "key39": "4HmWFWFtf1zdX7z9ASQpbeMDjmGq5XDBfBgLm3U7GvntauJStNhFCV5YHAsaenmYzoKvLNrqVAtnnnGW71WReBuH"
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
