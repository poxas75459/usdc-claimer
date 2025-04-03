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
    "TwE3Sr3BWmZs3p3uJFhbhBTuBczvUnCtt5wSUDZs65rFBBC2hLeTBvJwRXAiUoGEg21HfSoCXdRw66DmGKDyY5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDvFMn9vaSYZBrKV9Kg9Z97qeGMiB1B7HYWNoUU4DWC6vY4HGYPDLRPuGeQsfk1A8wHGWCKvj3qYKu5zGiWARnp",
  "key1": "29y6tVz7kcG4Yvz2R4caPrAa8b3ndnMiCmFDFyfG12pPBiTiDLFsULf3bcMpZVHVkPkDeM2dXPJefSBLuEbKhErG",
  "key2": "WLT5M2FY8HesFuHJoErn1HLjAJspQPUKwTHjkeKG1B899BDygMMH2FDDy9eHE7y91xfyZMSzzSJFJDmDJruFXth",
  "key3": "MsSLQhpvcmHFnWduwAyGdSPLXVZZjbAvXJbJomr5smyUdCLRerfQfmxLTcSEBWJz39xVrXuwSz34LMV11TvRF3A",
  "key4": "3aLFWVeDtwZr3G5VVjHUbohh5n8doeccfSHLqHmGqTXvw4pxxpi2kYWpBiPKxVJ5PJbgB5sSPjU2aX2FYJyTWJgR",
  "key5": "294cV86R8SECWkeSrvpCjMGU35xwjtR6KYk8YebeJNN5ovEgEn4KQZ498Ce27t6HhvhLTDWnCupTa3Lo75VkbSTT",
  "key6": "4KRfVn8CPhrGJVBKXuyGd1jopb254dWiY7gpQ79nog2eP7XzXcPTo4t3k8hW4cqbnjEJqUq8rQesiuQ39fs6r2Uf",
  "key7": "36C8txXCYcY5XRRFS41vU6QJBTTcwgRU9c3KR53yEKALjyx2sy3V2utZyVy4uDP6ZEfeFig7W74dk6qHr4tLBgEW",
  "key8": "riKrvSU4oLhUUdhmQG15bZm3REv6VkWcGWcf5vyXC9JJMARKRRc9bvxbLnzwUCoK1yBbASNrsnkbExuc2Y61T9B",
  "key9": "3jMt7qLFbakA96BfECXJ7EQKhoxcCRNc9Gy3pYEkagGAQREqqT2MaWhrdJbmhDWHKWpUDJayKHBzjr8mMPt4oX7R",
  "key10": "5nwsHGau7TsyrbFVQD4DWcbntF5xeYwUgnXfAW5xNpK2TLTqFfse79TbKXenQWD2pXWZWneUvAJHunjti9Qd8DoL",
  "key11": "4HvrgwAX8tTnSTDcCz8kiEXJGdtWoWfeRznxta1ktGHVVH7awyFAvFwpU1LH5ALA78t672iuo7FRcDtkmsA6b7bA",
  "key12": "2NnR4mtZ5XjaJrxELy1wgx7pqPw2wHXPB55kZL7CRpYDuS3Zr5Cfts7BQ5SYm4KDcUVc944dSKZQJEURReGwgfyA",
  "key13": "54AFTWzCfLfzZ4qLE5nXWGZqq4Ckk1buQczK5Mi5WbUviBU6TvXV75N1RqJZQ876WVU6p3Q8RkTQYeHJe5TBTHSm",
  "key14": "587efXuNj9JWCAimZ4ThTctZxDJ8aKy4HdSNWBKrmaK9voXyP9RZuhsDs5myh1JnUhF8wToMuJUfvb8FmfvncML",
  "key15": "2LHRSVZMMNKG5J6nkr4e8y1s4GhL9NUNCL1owDsU8BZsm6xRCLwcUtajnNaeepcGcqyoJtcaf8dWT7S6ujA6KJ4k",
  "key16": "4rE8ju38aSL5udumDcSqjm77AHryRdZyeKpbwM7dhFzNy2C8iL9Wvww5XUecAYmWavoeYGpek6gS5ESLUpbfqrY5",
  "key17": "2id5r661KNRqo92339WCzVXdf3VQvEsJ8GDaTTHVpFJ3jg5U282xotkv5Wzs2uQ8dYpNQigVG9SZGXND1VjdNzpo",
  "key18": "28Shi1Ra8aeDd5e46Aps1FzRRx6sEUm6oSfNnQP39UVBS7ywUooL5Q4RmhtR2MKPdTSKqzCZdSc1s5tJmgACX4tK",
  "key19": "2aWjer8uNzkGjt383i1YVruqABPQi1mcSaQKXhrcUHotyyz1KYrf6PHKiuceNZqkhn4hPEvZjCcZpFSRNWohKAZ9",
  "key20": "hdqpjUcE3bUrioJBfM7Nqb2tDNSRQC9oTbSYsN4ZSeosPRazsrYXkCtm9nV2C2vStjkhcF6FD47e4BJUCrvV3Js",
  "key21": "3RfWJjz73uGumtyUfTVJHzBzNDojteQoBjsMQecws44pPcE4zXxQ6DmnwmjL3S5SNwwsAZwaGzamKRKggsFMUWh",
  "key22": "5YVZwgxquB74oQah1eCb6krJn8pShjz5dNwfQiTq3uFXjKuBAdJvmJVHDbEUqP7Ci4nwSnjumTHqx52F6kKSJbGh",
  "key23": "4XmWjarGPFBAH7A25vjfC3poteyDhZ7wqZ3mFt3FjoCRZREBhihH6b16YVRzdQAq3jdYt2HWffBrLS48TNRqkgrV",
  "key24": "3WTQqiddPQvBHaTXi5TJMfeV9DKz3R2mhkWEBE6Vhv24ykyjFhpYHn7bMsGJ6MogGYWvYTigfcLtXyvoTV234MDg",
  "key25": "2bwQK3ExM7ohnbqf6jmA8PMnWEMvpESk2Cq6JExTQD3RpKo2uczt5XFLQ6SEENSRx2yyCvTqzpCNojinpztdZ1fc",
  "key26": "3UEHWmNqddAfDpKo4QjZV8QMLV3f2wpgo81EY2Di6y8y6VY51WgYCyXCHLHnVQaf1iw7Qcsifr2pWcTEQFxpWUct",
  "key27": "3ME9beiDtFCMU8QXwsJoUiHsDzAq193Th1aJBpUoxJYukEkgU2fghjgcvRXDvViZSoUmN1FLwEchRbaJZFrqH1pZ",
  "key28": "2dsAhyTuEvTqPpLGQhGRa3TiUS3AXTB7PfQBy2P6ucnARh1aM4cADCnmmmrUJCS8gDe13sVKFWjbFN12uko7Q5zS",
  "key29": "65JjW2qXv1tWnnB2LRF9PULsE4eGnmKYPHtQXYJs5WpXtJAYowLrETVW3Jg1LgDj47rPzhcAXkiUZBrgt9ZVcfhA"
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
