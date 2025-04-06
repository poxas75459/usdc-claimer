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
    "3Dy65mKjB8VTpCYEkWjxNca9NdpLtXyysbZsJedbAcK7K6XX8cJ7TMQHa1uoGb62Zs1VU85oHVLEEHKUVMEthgdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zt5rkwiegw5CDfvgNaVgJmWomwFLToDPtsMhAEumgkFxc1c35uwPC3PRRZ49Ryaz8RoVB7TCy1ESf8towQWskP4",
  "key1": "MkeWqrEjbgcZNKSchbEdFJ2QaFMhvzxZ937k2y6FQjsShubXS7KzyHNTufzqwbM43tDBvHsYzPddKWU4WUeLZ6J",
  "key2": "2pXP8FvkrGwtqiKiEievYx5C6ZaNKDbop99peS1GdMEUh7XCUHzgARwqT8o6VY5ztpoFNZhqHuNGNsuZsR6BvP3v",
  "key3": "mLtLgpqAp3bmvs6B2iaKdXupuhHqV2dzoBu8etiPtS48sDPa2b7vU8xFnChxU7V5nCLtbXagmjUePfR5R4mAeaC",
  "key4": "38BrfBbFocVzj7yjHy7ZnQpTLq1fFEMaDaffPsHkSLwPuCjAGggxCHyKq8zvgjc6C9Ugz3s4mFRdk51SNggVpQMy",
  "key5": "3UTBAbbKcapnM6Wp5NQKG6PZ5W4hTovPK6ayUL2SUvXaiyTtCjyMbtCv7kAdWTgLJ4qDoW9e7zasT62VAPmcBD4s",
  "key6": "nansG7pJQRJsdaHvMAY3q8Nky9TdMZcv5BdYStDTV9FKV7jnjGkdZKbRMmr5Cwx6Ja23GxQWUHDKzMEnfzZPKbk",
  "key7": "2a9JH9RAcoYHaqo8kJrykgwBgs2h8CD9Y7kziCdJLwYHUZkGf6fHEtHYAEQ2X4YbKeaW9H2WxCigy3Uz41st8Aeb",
  "key8": "3BpQUxi6kyZBBmYEkp5yD3vB7gqYL2ry1qDhZThPcuSLP7FKxUmraZWD1uwFnUQ3R4UzZi6aUifk9kCbfNbWwX7v",
  "key9": "66BfGiEtuLNWUMyMFASSvLaoXpVNFUZZGrP8EGiirP9TE5QALK65Y5MhETEM3w5dfWB8f285payQqxjcyDmEwwTA",
  "key10": "5VC8r7hVpbaZY6CdVAQUzs68NgnH94qR2oFQpBwqT65yR3KqdJFitAaK2SsRYVNkJQKYLdxvtMBeyAFWfbBE49WH",
  "key11": "KYKfYJrN3ZEVUGYNBV4p5rBV7CQs63a9LYXmcSgHvDKyrZetQzoxvpYvt8xbVT6SqzkeFWoXN9stLb9p4cdpWjW",
  "key12": "kpnDru8RcSYt7EvnN2aGHWu4p6ujLcdVPTZR1RnMMtrvKFc5Wxex2YHEyGrXRr1NGqrzgHW7cLZecBR6zJCH8V7",
  "key13": "Fn9qKahB5LHMS1gTPT8D6oLaY88d1iTcLC3ig7pqkQAX3iKAGGB6j9QiZCBpKeaMtSu1KGhbU8upT3BGBLurmsw",
  "key14": "5MCDZVVHb13D7txSzWCHKzKDUpqyrTZX6LYfTHBk4P43WL6MoAkRdHkvoVPPTN1WagWeuxoS39mHnciGdbxSQq5h",
  "key15": "4bYpYVR9B9C8tv8qXRHUN9aVkaoMbEUPTEUvbTowyXgQH7WmvFJX9Xi2ZASfVc8pwGJR34TvxKxCymEffwfEQJCA",
  "key16": "24BEEnS1ChdhakV4byQYNQPPEUTFAr11vPMZnqRRnrk1YNubZkuFG7BNRWMUzVGXJCN1ncPfTX6fDpKgR2DYLnt6",
  "key17": "4Gm9V5HTnRRkH9ztZcmBS3fec79f9oFLKB7U3h1DMfBAYUfQwUH6kzXqcpwVDn6qHwoEw6qjtbWZKG2tWrJEf3cS",
  "key18": "64jyQKnDzcWWy3VYY8VyDghbpq12xoYF19hJ1MoYAHZsparrhwVcMxGaQy3UMYMZpABdNrBw6ruKDhj7x5whzoFY",
  "key19": "2Wuaai5fLraVvNipzVdXcyXL6CJWTT6156KRr8CsSvrAKiQfhk9PPoAGPg6V8LH8LAwV7phhbuznG4MDM7dfWWhb",
  "key20": "27ufBeQnDCGEoXkVr4RULWJHzYUfj8Wz5PjWy2MErZ4T4yrpd2XWVDeV1zkiZpVfizeyKLKwNkfMQKVTyE4uf5Xe",
  "key21": "5ngvHRZCNrDb8mUzXVhcWmi9LQjthiW6JRf4nUUJdENAJbzNDwfNL92CTYGBV7DSnadmM28au6UBGDA7q4QTwqcv",
  "key22": "3LgeQgqDZFGxdWdLJEJckdyvnkSLQhPC8kzZb7BGzjEPQQAwFxpCfHavr1RyMViUhk7xyjJK18kXcDWM1uj3FDVu",
  "key23": "4GcBshnNLbpXidNczZWxTg4zsBidY5gnNWf4M33wfkErznvm7m2Wg72JqHoiMJeDfU3ZpEUtGBp2DPsuPJZKocAj",
  "key24": "2fMgBmBmWZ1MjamjaGZpC74YentFDPvSEkfKFobevf9XsCFXsiqNQVfnMAANJjCNwutxeyuvztbdfxXAZgBKApNP"
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
