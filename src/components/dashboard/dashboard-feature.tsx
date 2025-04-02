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
    "b7mvCQopknfkPFYynpotMHhmQMGPa4dHUnXF6wp5xVjnQm9TPNotmj76VxEgCrUF5GTxBKjoxHm2WfRikbLYkv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPWpGu9q72AfgmDi7NRjrHZWR3g5ndSewcevqDKzPjDSBe1zSUATzencng18yxAp5G59dv6K4Pj8Va5NrN1Rp7o",
  "key1": "4qRbsy7bE8JGZFEGL3VAGTH62zqKJSLe4aDAcmVX7gMwrAJLBxfgcYRaTEpUn5g86yN7DPvgY73kvR6WafdMKL9c",
  "key2": "4kPTWmCQZRLhZhJydHFpx6iA6Vwdw9k9erwC6uobsDvv9nNf3UXvjtMQ4zUDxnnFqmtaKoBP2Jp1UBNk9U1izv3L",
  "key3": "41wgbDMLjxAw2CckgUw6qfsMpmtLwRmrf3Xbzux4MsAPX5398oh1ANhFD8ooQa5g7fRojqkZUVRcHKa7oXRt3oRV",
  "key4": "4Fskt7hynLGNtVhqWWjktjrpnqr9GHp61sjZxFTc3vByJ2CX8KekrndWYVDwL4Z5PQnk5qMo32jKHpQEjMHA7DWf",
  "key5": "5mSi87jHVZwGHfNCX5MeRVmE4QxUyzJKgi68DHkv2mgLY9WJkSFY1u7tBNLzSe6KdFdMShXJdErZ3jwGkXXVjEDw",
  "key6": "4HYiKjLHvQHEVqPAwrQ4cX7nTu6PnS9bdwQuPMnaaZZ7vCi44uQTHcJ6FT2vmX6nG9BodoPaon12q6HYwSVP7XxF",
  "key7": "5P6j3LqRcL5fJ8DAiwQdtF5aKRB2ZoUbFGng5gLtahNERMRC7SmCjJy6AxfH91sbmWmfUz4KETEXWFm7MCVAHcbL",
  "key8": "59QfxoBgdyGJyA1MeeTE7vz33yhBL3Z8S8wxCtzBGjdB4oUKmu3uci1wBc2q13Sj9ViHd6Gno4863dnG4fL52hwd",
  "key9": "4i96zW9qV8kvCuddWP3VtjrxswWXz2259syzsAejNZ2myfiGLwoAv1twtBwS5tn1cxCC2wpQeSd3Prdgne1RsbhF",
  "key10": "2p5qtvBVKirwDnUvvnK2M7S1YdXrTpX3jyNmZMBvEEgYxv4asAKGYeFtoaDDLka4QKvcnqbeZbP3zHbwYt2QFjG9",
  "key11": "9z5P79nNjg3NKD4Lz9k4XALB9iRknnMFKK7ZaEEicq4fJQuYG7TnHtJEYv6EeiMnu6ftxzSx3V8MNTwbqye17jq",
  "key12": "2ggBhiFYChT2sS94ona7x2CAPb3Po1H1x3U3ab6GVZDUKKuSqYi4ZE9a22b6ivoysr181Qj4BoRwQ5YkTcFKdcJW",
  "key13": "3pVyvG2RnFvhzxRRFMndt5BjurAibS88LaDePQsuX1JW1hhQX8hQAwR637UdgGxjmFeiMHWGmuw5DtiG6Bam9wNo",
  "key14": "3kCewbfcXUxVW49KfbnELwu3H8Z3CS4brd7svK9AzJgb23C1D2193LFxi1vLnP3z2bXr5wzCNSgGqihMLE1X8oJd",
  "key15": "daqQcvou9bDXwTrYkH3G91P5riPH2J3BGVYbpzjo1PdAKWbFzQs5ejvU91q5uGqquqXX9LKZyv5rPhXbQPciVSW",
  "key16": "Pu6dCRVj7W9uxwL3RW5f4ArCvVYjeU5rwyRK5CCZz94tqXUcFYFNnnURBJva8x2FyeJRY1pJkJnnnSSCTfecuws",
  "key17": "Ruk6izGFSHyVuGrC4dm8Cv5nG8nwpbdiENFmPqAmWKYhJopaGa5rqNV1yzuZkT9imfadn9YJh1VtXjiPz3Moy23",
  "key18": "5haLNpoqW9kqbKZb33UyD9iTDKUqyeAHJ9uw7RvkE5BgBXHYVJ2QLXt9cYUcWPzP4575GtawwNdQJRLAPFW2ucQZ",
  "key19": "9REL8GhQR6TDPpXoxuhaSQKD5uW48w2quCD3RfHhpAvMrWqhAHCqSBDxeXnWP7mHMnGyPCwTCNvek6EJaJMeKQH",
  "key20": "3xqE16Ves5BaDDBNHYmmURYeu9FoUzb1pj6t6ZFpw5W98k3iQBtK5jLivG3CMCxjcz7ecoHZt8GGmdqxyb2wHUEr",
  "key21": "snZgXSzLHhgsKxiJkZY2xadfdn1qjhc9KfiFyNyUw8mdfa2Gnw2a9E9vKYm7v5nVERKGZRwpTBBD9RGsZr96kfD",
  "key22": "51zMxvymJAWiBfCT9ohnS7nGmHmp7rm9yjLe9i9dBehtMzA4qumwLvk4HRc4JaMhb3arVhys2AeqjznwvvT2Exm2",
  "key23": "5r8ufLXfjCkmxUysfumu6uNn1Vgep54yBzokBVZm2HpvgBa5CsCQ1WnkR16wezZeSQjMYNncxd3bQ7WNTT3Hi7wr",
  "key24": "3LLy8eCQuqfyfikgPkNSMcr8gYGsrqGVtZ1GDe8Y1J7viYUt2xdH5fgoYvX76ksTpeTeRHsBKcPgcefm7JjhFVWu",
  "key25": "xcPnrJ1nM9nFH9y9K4gVVJDduVkCHyArtw5rGgQah7Np3nq4w6JeAqC6rS41YXhbiZuVVTqjiWKcH12PyJ5GXy3"
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
