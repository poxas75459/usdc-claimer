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
    "3wLa9A8cVphhP51ahzrAFAxpnRrDg65ihVBV5Y12g5GTmFFH6MGW8SdyrJbDp6csmPGzogijRnWroRgneqbT3UJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7UGmsHRhD7sfz2zw2kmbNbaMvrG64mLZ11yfbxmYX1ztSLDhGBvse9NYCBuPD4Zp8PUK6aFuX5KAFMch3mN8HY",
  "key1": "5ksNvzsZxZ9KKwVyhSn35iBn6gKz17wDfrH8gJtaJjPXRVg5wCqXYZiRzwkEG25joweYBKqVmUPdfHmw2gwcW44N",
  "key2": "3Rz59RHgrHAvvrrj81XM2mAiUh6cFWsNVH1ANg9EFrQVJD1R5CmvHSRc7smcQuYhKTHWZMVSiGr6ck7eVzv4Ymkq",
  "key3": "cq5DBkp3xuvNQffLDP4LZ7DYAie5eRe8fbtsNKY6rfvx716qVQeoyMgo3A8AZQMCJKn7XF73BriESq5AwjcjqJj",
  "key4": "3mnnri271p9gqNcEbi6jZYKF6J9FrrhiTgeVzntWiuyCoikoustu9yBAAHfqVFCVThxhsXuuo3Qim2U8iksFaP69",
  "key5": "3RfrMK6vYccK2JPH28NfUkp7C3295B7MGK9QzcUXkUe21cfkHL8cPSkxseCYg1crfD1smvGrjGMfEEJhM5ARAB7F",
  "key6": "245WcvFiLirtnFF9i6RxhKRq6atsDwN8VbCedvxCndAz2aTnp6ZsspANXJJckVjETbmHBbD9rWPxm6Z6x6F5Y4jw",
  "key7": "2MJGzD9YUiVxSBc4tBzzG3nwvrRsNaCBqP9cqzHJCyixfdb9KVAfCxYXhgaxafG9BF6ur3je9me6toimGnghnLNX",
  "key8": "2Pce3U5A8CFYfiGoT5dkHCtDokjMsRxnBwR2r8uPNFQFv39Pnv14ZAyGaRgvq4GE825GRaQmnyYhuzKJY6WHqube",
  "key9": "2LYqVGd9xhoaQMSRt5rXQpRUKXmEJaxA3CcNyEyGYc7FKR7kTkLYmzKH43rkzx6LUZNdzJDmfB39cyBoGaCsoy2E",
  "key10": "fW9cWe9v6Qdj9wLBv34NaJvYkJTXgJ49Mc21Hrz1RJX5JUhMN87sphRCATTRv84u3C9DV9uvpieDdUwvJb5Jzcy",
  "key11": "2mFYR1kyM739ZqyR8Aog8KZDtMdhPp9vV9wq6GkcS53iR71ZTRL7rMffS8qkM6qoDR8RPViBCeM51TGM23BWYDxp",
  "key12": "2h4nB6MPJzT8TKKw5SVJmoQa44o8FGgPfqM2pZi2oJUBvv88aheXCm3TFg4TtV9TSMBiM1F6zBCppP7x75FokAwa",
  "key13": "5TyXVnYqA5snCCVwD8Z4KEDuXamywxmVCBMsC1m4tPQs6jHBGoxJe8ptACELUHngaT956UiyPRtUzUmKQrufQXox",
  "key14": "4tQmzyJNqdUo9QUTdfVmY3U9QQDpeiEEahjhh9uqWLPij4thoxLB93ESLkdSS4qDoKdzKHHm8cd9rG1WqkRYzRoj",
  "key15": "BfHjyHnHBKdQ9fAwU6gE1f4oxqiyNFzzjxNMT6wpW37frrePNF8U49XnovDALn5SwLGwKFeJtaFLbDVTxKLh2ZF",
  "key16": "5VyzT3zG7LaiCmvaJW1ekikDbmpkNFPLFcQxBWv32MAxv1RSKSyXgXGdStNJ8F91onWBLRv5FAtaW6mntvQbZMCq",
  "key17": "3H3PMTsQgbHihSd29Vn2LbN5MQqKu8EZBvpXB9NhdcKJw7Ydnbn1xoNW8FYszzc1S8fyYNxtMAhU7M4S46exHxQb",
  "key18": "5eYa9cekWqaWUeKdQNNuwXPiGJrByXUEz9oa8waqG9dBTaqHS2t5vueWMzHbTeAu5mZH1RPZkfcMjCBv3MYqpRh8",
  "key19": "5jtN2RaMer5u55QQCsxxkPdoJZM8xQyN4kFyqa7wbZHE5aFAViX7DHP18CELtrv6KmX4Va3zRBEGxxMb51n1SBky",
  "key20": "22Du3L6LbJ9TtEBaoAu8BGruRp7P3GRLk1e8SNWcu99SjLWREEieUWCJHk2CvMXUqTkTMMkcV4zPR5kn5rY3xjba",
  "key21": "61UPjz8tqrFQvSoFmXA5WxzAqgJMjUFvaaBwqo3B5mxX32LGubWAFVafcZVkPcjLziGXiHAnwx2jP972YzpdJL7f",
  "key22": "5V4LoMd1y3tGnXkzyMs68uyBagwKswFaFtJHjAPLgCdZK61R6qqBRR1voSw9atwauj63nrWX9jCg2jG4fz1gLXqE",
  "key23": "4uVXJTWgCj5n413gvrXk6aLfXajE4Vf1ykJRqws8V81mhHsrRGtdVa1SRYKAHP84ZZV7c2k7hiTPYVWb5zpPoQ5d",
  "key24": "2Vg8YdSJ4qvt7jDAkwsKFjuTq2c7VTpaM4abRm2WN4JQbEJWdtrsHR557T147rAB7gbqWr7PbkQc8Fc57eN1h4sm",
  "key25": "2dAzjSmCgdoEUwvK1ALDe6noQ6k2TS5iqX38BDCg5T4dPSbFRDXWMn1ami3Zs91DyvpdhhpxSSLifLFT6jbv8b3a",
  "key26": "4BS3m22LcEetr7MUVnR3nxJfuzZjqJRUPexyciZTKrSefgChVK1wH9j6RoLXKGTtSKS8fUjRvaYYcU99RhxtpikC",
  "key27": "ZKhNQ9mGofonpw57Tqv5vVtpo7ntfSETLfMmgfKcRiCYF3TmeiMwXECKyoPRnet4VakEjkkDCH9ukoC4iBQodDk",
  "key28": "4v6HNfqqp8SH6BbKuZKJQhgbsDD3MeNcyDSSfBcSXS7TJhzUcjqiB7M62Wu9cnwgHjgYkzZwCnMZKZMiNeHF927v",
  "key29": "3rC1Jza9HMpNcFWK4yK6KXpyqPZUPbZ1iMufyACAjW9wCUNbRmhQJKkKP9yvydwkgS5JQN33B3wKtcWeT1TnkE7C",
  "key30": "4oZptkMEfEDsjXgjdYZw7CpMw5bkjF84yvFDb3Gc88Sviw99GhVei4TdNsskEKRZ3PH9pmFGWEJ8bjjxfx9GuPLR",
  "key31": "4uVeRbYGUphayXEVzc2srD76jNxYjZnWnKSs9qj8WTVKzE1joJvvdgBeetpRcbYmdJ8nHvoHvvda1cQMS17K588z",
  "key32": "m9j4x3k1dwLfqUrom7UHmTmSpYneVmZngrjMPFvgRQYZrnDHJZ1wHinc9fhZNhFu31fGFsZBaGdV4p9aFezkjF4",
  "key33": "5sjjwNe3SKVSSPjpofeyg6wmnGwmWqZY6nPewZLbJhUKVSkfmJBjk58gnDcEuwf5GpeBJwQ812JiLC625Sc9gpp8"
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
