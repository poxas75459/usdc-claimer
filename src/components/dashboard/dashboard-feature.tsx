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
    "3H12fa49FBSnLmTmrHJ8nXgZ6BrfHHJkWtr4AQoeFjJBGu4ky6vEvNxJdEYdhopq9KmfcZDBv9eYmikjs2LeoGJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wBqK1ehNQ6tSD25eCzKLSMgmWRNsBTb53dfd7sgfbv7UeFSTx7m6VfQLdHhkyk5d59YsS63xEY2nSFsjg7yfJu",
  "key1": "5T2MJxf44HcyrqPCZ5GcDJ72a88eV6fvr9odcixvtrGRFM678wbQaei5AawfF1a5Xng82Tn5Hgk4XSzAKo2w5Ah5",
  "key2": "2Kxs1WTeyVu6imhtoFJ9iM3SUspKfYX65T1xdzuGsqAtTx4pCkPZCYWBBoGdfhM5KduHshjqS8e7U3FJNyzMcJw2",
  "key3": "2hQdzTARj4LXvJnWA2JVWPadbuTojG2fKHwdF1cHFy11GxJgdcMWZtbkC7Mox3ZSfLmCaY4fNWskVJ5tioFNSUdQ",
  "key4": "4PunuqrHvA3SEJRG5coE1vi3bVGmrEfX7edAm5gN9X5cuzxMoPvr5NqHkTGjLJg8vQm1SG8qr4y6ukePeEEeJT9M",
  "key5": "2HynKVgNKE1GZpS1oeQGYrxDghbiqyzzMiSiZ8wU2M6MmbSqTMWnTJtRZ3dT6GprSzdxHhrF5h45VmNgbWsfYE2E",
  "key6": "49HuL5ZmqGacVuL88Pg6rCpL11PPviq557MzGmBcrjs7gdShoyU9r6ntY8A81FrJgPXEAtK5hZMdrzCWwCc7io6D",
  "key7": "3zgDSPee8LiNtCN49HEdnYpU5yRtAyvWQ9kxCNQWScfyWEoCaWsU5qmMjDEbcAnWk1ZPsyDo74CNbWHokWxocEev",
  "key8": "5LYi2e2kv8kBiNGtnGLoHn9qgcdgaGFPE7DLXiYBcWGPUpRyD58zCKRMcZhVjXk7VvmXT6xuB8WthwPbLbj1v3gN",
  "key9": "3FtKqREUbqVTiX5wwu84JX3TveWZEZqVzk2abu3Kh4BnboBKkL1ixecJK2bYkzCa48BDZzjjbcMYS3deCrZyWxht",
  "key10": "5sDGkBwWmS4HEFXuQFhoXCUQgDLdqrLhDeBkNogMGrQCxrWgQMkbX2qCnLcDAiSrZqoxG2ij5G2ryHvEXdd36Vc6",
  "key11": "bpkv8Fh4UiwgTJFpzjtvxt4NAvBUvyVTmd4VdH7bzbyhJsMEuE6tC6SFrQSGE7S52tch8qJsGcdKGSj9ddAHJC2",
  "key12": "5utRHPnPckLnZha8ibvjuaTm4GAw4srzVtjR52oBfWYgNJrzi3NfhJyksTUaLqT8q4WyPohp5tEVwoMMHE3UmNnc",
  "key13": "2T3EUWPv11eZwh8ge8XSzVRUiVCNwJLwow61jVwBgVH9X677Mcms2xs2xSGAH4GrQLP9yFhogmg1dRSn5BMy1jyE",
  "key14": "2W21q4TZdFukQ1ccKgsUCA9hfjgmSYm1UFh6khmQ9uNssKDxW11eRxU766nQE6iKNkUFXZJjPz185Ua7bkkrYGtL",
  "key15": "2Poh6vdEKVuHU4T2gyEhuowJ9a9dXqKNFk2zPCrn2UWfkuqJwEDP4MgiAvi5WnDkzEuz83tpcCovs3VfnV2exrDx",
  "key16": "5psfGgiX2Lg76GaLZN1iqwigFavMadqQSoh3MvApeZyu8k3KGoMohMJpk5Gv5tYPL8aEppc7DUGVBMjVJTtcrdzx",
  "key17": "2BNkRZm53rYwWvHsSnfDV7H37QfjbNuGUwYwMHBWtnYTXHgYH7Qh5mvUDBhgSDch9i9UsYP6yW8EKFhqFi6sUFQ7",
  "key18": "5N5CniVQHikTJR47XYMDBognXzQB4gNno3eL9pE4zcBtW2UojahBBPuNBAk7px7q2WxkQNzVB8Ee9pmskCvsNTJW",
  "key19": "3euC9kLD2vJ9ZKUST8LPyQo6F6nC5tDpXT2xbjHBLmqPFiNBUFoxMUBew5bbGrZ9HWKDEtS3MHqsDft6XGDeNjjq",
  "key20": "5hPNwz2NvCm6FHUori4NRZG82Z5wFz4zAgmxZLAh4EGJu7qnyvenWCTqanDaqT9Hu5oE8aGM5QBJ5o4dGjdbuUP8",
  "key21": "3QDmWzUG25EMWX1cVUs25mHZzvUUwxmXXxVnBMZSrWyKQ9qjWnZ6kHK5iHf5PdjnAK1peZuvfR2nJzn6Chk8dWjS",
  "key22": "5efFMk3CMRQspQXMHzpQFCDqZTTLCnYvZSgReSgTWEUdbvfQU33JTLHb38KETRbmjgRK9sE9yNkvrnmruUFmJZtr",
  "key23": "5u76pPqm1GpLQ7uUrPAu1mNgf7Gw1xSijsuMzMjJw8EQZr2EeRimn5K4S42PEcbWFXeH7J9wnF2yCKfHaVrbhstx",
  "key24": "5bVK98TvyQph8bt7By1VVdTWJ2bzwSZnQyWMdnC9ahW6d4vpz4uEgHmDanZqZ3bvyyNxuWXrMMLownFnbPuSi1zV"
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
