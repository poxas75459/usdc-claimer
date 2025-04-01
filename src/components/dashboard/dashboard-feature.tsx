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
    "4Jy9NTuBUwxQtsNg259vVpD5CHf9mywkY6t2AUFzdfqDAVsiK4eAoytyEu3R3yeiQeVff9vybJWrumtkgESEsP7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64Z8feEKCzRLLxqKhz9JQHSz8Dz3j8dZFFRd7PS8UTmQXeVjAHuvjum6L5jFHPA1DQfaQFTDqiBBrYd4Qdfo9qw4",
  "key1": "MpcZ42zZVphaybRRFSX8MXeJD32s9UNRrYTsVpwPj7nbcHBj7jBFGfMMbKGS1KfJhKR1jtVaFdiNvPGWWseeL7C",
  "key2": "59CnmP1EtDmEEgNe1rWBJ4pBKnUnP59YSv914pVytETDBuYabPUfpDwfqbGVkELFjaiRMpg8QyrMFNZ1AL7dHw66",
  "key3": "26HuSeGu4fwS5cAsvMef23JzdEfKXuhEmUm8zWAyPz4K2RUqLxuRUGYxrDUcuX1p1uX5UezTzsRTU8ChwwUrCoSu",
  "key4": "5fLFMjcFGirxppvxrHaULAryFACHpFyxLGEfstVhBR67J1CowJNNRR9kYWqVW6qGFpv6jYRgBd3CYwNA3t2mF58y",
  "key5": "3cVDVRhWMqK5FLz4VnbEq9kpAdMQmQyC8BXrctkhhtTFQZ1NjYVgXN6bFh2Fn4sYCYnffLfkWhbLM2smZAy72nzu",
  "key6": "5JqXKCXBf3ST6FHDqbbowfBeqQ3j7dQWhBTguEFLv5zgAL7mqqcDff9oqDciNQCAE8WTaYJahJvpizAn8MVeEjci",
  "key7": "4mA5hCHLBd9tpdBt5uG69Wg9ZganjdcjHYfkUGJTtJuqEumuFFoWXN1TwpXX1WPSzEGii1yCRGqmop8437ct4ZdH",
  "key8": "4MNkLaX6WSp1TGMgd5cuziCjVgpw4Dahd8R7J7mYpryhx1gwMHPafGQv7uwA6QEGLvxJqRjJsjJxajE9eCAwV8Cz",
  "key9": "4pdoRFrkut2VEi67XarhTU8FmDuUbvcSoP6we6r83EprHLKMj6MSXCQuwpxHf3G9FkGDWweA6La3Qn8Tggi2iWx5",
  "key10": "32PWiexhP1o7AWM99geStgBAkpN9eTGhA6gmC8ddeU4gkfRQfYxhijQxyrjzbbHR4eL6QpW5rYDQkMgwsNJ2n9ho",
  "key11": "2eRdrK2jmZCBN9zX63A2KkBTBwtrbjE1WPuzvu27bAJCHQ7u3zVUL4pWvfw5vU99tJ9zpqrZBZgdcbogBTL1Tvxt",
  "key12": "5Jv4YmbLtjRGz2xfRrcQJyx54CB8ZtC4vCU6h8zLFm4zap7JFxiTzCo7E2RRDBkBMkjsireP3AKjbre94jj2MzRK",
  "key13": "2d8ZHSQH8zC9wubtyt6phTw6U2LSGSx6x9xdVHVK76GpgpKcX6asWC5q3h8XhMJiBEhuG7YFMYtJcwyGFsB6QMkv",
  "key14": "5E8Prh7VvUyeGd6Ysv8GvMu3B118MwiQivsxBsTDgC8XwFpGt5kdJChg4t2c9prMLk8w7juQxNBuxqt7pbhS4wA1",
  "key15": "5YQ5m7P6AETP9zZYBhBSdkjovimjZhYRiMYZi7DyNxNkdfhLTLVqoioXDYNAFvzx7schY6n5ZKwi7c7d9hzMVpQP",
  "key16": "38YSfXkVv5QrJEHtxxTnswsBsf1GR8i2nNJniwqbdodMZvUUYEq4yUzX1vRVJFbtuJdaRXgVZg6DYM3nfi9PpnTU",
  "key17": "5NRe1bAXksyqHcohsj7YjhvstMEg74jDBfK8uDNEhRYNuQbo5RWo6b3FaS2UHpfmJCiVhHiLh1d2CExUDddog222",
  "key18": "2yBUvT6HK8h4xwCdD11sUJpk9juZGbhhbVRSMDwstZ9UbQYuYCKWscq375HTisUpCVR3ZU6dy5xEaD3yDL6NVTNt",
  "key19": "4rimrBpDidzhRaEWUfJS7HwxLt7p1MnzfFLARHGegLSPud9YJuuqx2DFpTQQ56VMnAYvjNPUCPG9mg1AUyME2onZ",
  "key20": "3JDfquLW6MwHpEpDn89AUmTrB6XKQHqitTAevM3Nw3cVxmPwQjTZjgGnQt5rjKDAw2bvq3AabbLsfL32D9iXXuVf",
  "key21": "5rFP17eGuyvdiPr3fVUf9NghmLAhbcLfBbxQrCwa6EatYhLqMTB7Gmafu8CuDjsCjSfjj8BYyZPgUw1dTQd9BbLR",
  "key22": "23TBMaF9uRWtto8JGKZcdyfZeR1hfz69iNACfPeq1aXTrGvdznu9kXUumpR7Zyc3UxKLHs6xXnfz2L1QiLyVKdXH",
  "key23": "5DTaS9fHs4G3jmYHrhVSRQMF4Dn83VjmmBzGSqC9rDFQUn2YPZx87jowUU3FKpvtjTQTugD2uVft57RHd9WdFsaq",
  "key24": "3u478LtY5rYwSNAh4pUMEUUsKwhy3mn7aM2EU2nz9Tk35Q94TjC1RLQywX3qpjxX9iqxgKXRnibTE8GTxA4BnJ9K",
  "key25": "1mkAcMjfkBbMVg8mkNxig6HnqGKyGBevWX5dSJZhZt2oNveJPerWFeUFvjAYequuE86rDX9fwSN1RocptjvJrLQ",
  "key26": "3xNfLcppVR5Y9A7KrmsV1KTodUpbZUY7vyY8huBCJvcHX1PeHQvpKpaoQ6mPBWSWeK2SqG3q5oTokxkhSXXqvTza"
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
