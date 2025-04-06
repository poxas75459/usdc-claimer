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
    "3cCGeb152Lp3DvFv8KTPk1KqDdDkFNQdbyn2JNzPwQfVqem1uB42vx7C9THtSTX3pRuYUTwzJxiUFu4StkZx9c1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "388XQ5KX55ssDYcHvcu1e17VtQBFBf9U1TbTQmDaY85rpmMFDz8xoGHiRjJWrgAqFXtCjUgRjTbTsbBb16sbmmwF",
  "key1": "3iY27wSESoyU6vRKEKWpMwVwv2zLf8rXa1nJsic7tmai9MdW8JFwqzxF99JxR6Sfk3tM7nbZkuaULPXKBqA4BZJ3",
  "key2": "37NnmZZpfeeHJeZk7HwBeuVUKFSTkqMoNcp3Ue1gyzUgr5RcpStAC3MJT9SdckCWsj8WjPehCZuMa9H2UmSzR55u",
  "key3": "XvFaBVvxNLvtbhm12vua5XFJXBiyz6fRqxFUHY6vWaAPqrb9esYnC49xrBWXrZVA6VMnmWR6aUyvDGSAdKdBFdc",
  "key4": "347ns3mnBqFNfTbkgoQZfbMB1XqkwgkR9buoHKTsAWM5KEAkN1KFrR5EZFLN8uFpKtFyt4v5PeyGzdkTn7ZSKqnc",
  "key5": "5tfv1kAYN1gTz6VGiUmFGEQQ1K8qivfh82RCPopDPkNv2ENaD6epyeR5ggKvyh9widiDaMDJda1NBCgzvexSHAi6",
  "key6": "G1wntAnG1aKicCMSEBVp1gnQmMzfEzii7gezfEQKo4a6YX8zX2ZAtf4DijbQGWLpcmECyUDUToXYPor5ogwtzTD",
  "key7": "4RjtQwx9eGen1vt9iyT36hctZH9V8R2EDp8L8rq6XWwpVDtiZq9koGZoLQxBSoRYq7XSJxqj5j9YVPcF46zj8Y4Z",
  "key8": "39wHkWUtXWUgdxNSnC2AvRxofzzJwKYyvmr5hUBWRUb83pbsfuGxfqUKfoTHnM23u4QTqiapq9aVrpWNNdqBvAK",
  "key9": "t18no9M8b5pQuDVzdbKJVas3kqvTHe5NVoaAs7tyHnL3YftGPn9qbjTqTgdBvUNBxscaWEai9h8MBuBA5YNqnaA",
  "key10": "pudAL76QPXAr3n2Kvk7gnW7uwnqXjRSWHDQWa3xtwi6UuSkY8scrNffqhPYzjHrHSQZHEJDcHyg5FCbLP3UHHh7",
  "key11": "4P3meE4B4zgBVkzQTF96rmQ16Q4Qc8D8QFjGbZEC7JToAggRF5JUYmdsqR62pnUxm6a5idWcHeZSZqxWoZUVoP16",
  "key12": "2fFAet2ru3jQCaz47XJQAvGzwzQh9wgD2gNMufQn74QvBL9Vr6bnqM17ZUywHJC2J5fpnigXGw3uTrMWE3eK29uP",
  "key13": "67SP2iaBiYdQXXc2kVJjYCMRDway79z2T5tnADdasgV1VtM7ihU2EDG6y7HrSUi6oEw2SPsZup4bk6UoRfxVsisD",
  "key14": "2QotbPAkWuv93zbB1KbGZQ8YggBfwEQ4YTqcLv7u1WjgkMMXNsWd4DSM9ANaqcGfKSnU8BvgNTkMR7QxRBgF3bsE",
  "key15": "591aTgHziV9o9EbCrWZm4XAhMBEuaYs1ZBZSzdzQbskCN1pfQs2rbrxbZe7hghRm83TWGDm6HqDnmBDThvqaTCbj",
  "key16": "4PPFip12PvuyP6qTrRMtX4qcudmBdzgNBZafe8NrFe8qhukykrTx1KVNKCJa3ihRoqsvaDgUPEbz85NnCcCBLXoz",
  "key17": "4TaiZULgTsGHfBaNEyUgDu1eMvzkb2gfw7bquQGFK7wCn4UrjwFoGUQAP8GrVxps4gENDwEVhEUWSuvjyenbZRA4",
  "key18": "2ooV8HPckooU5d7ioqDGxBSAXWRDVFHY8NsLyDQjJXrqaeUdxZuKSuJLfcSsFQBZu6iS6zpSnAoA9e3Vw9VFGYrs",
  "key19": "59GWkEeymVoFH6123xyi6aMe67Y8SgNLRQUmEQSML18zp5zaRxjDybf4sZybfguFWU7KJjHZB2zRnayLjCLNeiJi",
  "key20": "4LybnaJYmQ8VEh1TWFFbg5QbkTamKrioa4J7LSCz6EmiBSmzxYY1trDA6h21GLLr86riX1wHKBR1atjPahm7V3yP",
  "key21": "23qdBNaekTZPZC3i7wEJwvYAjBekU2i7DYKdkhw2HUEaErsupnCXtCXZUrDEyRMb6deY3JkgYd5Lq1vdnA4UJfXf",
  "key22": "2mYRCK4hxGnZzyYvx2L3XVbf8Ne6Kzcv9yDqYsVJ3yo8k21cp9GuafyBpBaq1wPLuQCoamHBMECUd8NKxJSq8eHn",
  "key23": "5Skg6ZSQ7FPJZ9Pvr7Rn4N3NnVpvBcjcs17SkhwmYk2HZjvwQ3yKD3txcgZsP2KJ8e1avrHXpQFQyqJpRiVkTeEw",
  "key24": "hK1uWYUfTMRWE7GHZ3MuV3eUkvDtBRCD83F8C7uJfxaXB5cpUev7LBbZk4UUG5tP5b8fiaAUuDTg89FHt9e6PEg",
  "key25": "3vjtoAaSnnVGi7heAh9m9svkPvAFuRSMV2STq7nWG2y1sKTWcfUk6yqCTz9b7WC742xQXAiFJz3p1F1PaMtt2xe5",
  "key26": "2FLNuDm98KgKqj5hTDPjbxg8FeeW9uy3APAEN4DAyyAmii5rVTQKZPTKpn9NpqJCNdzZtfm2PW2De5VpJwrD54Cs",
  "key27": "4h82RSMVcUSC94gp7gh57gn6tgviQCSoRyjhGrgogKhCeY1pua2LTa1C2Ew76DkEtTGkJ3JWkXNaPaCUF6kynbPm",
  "key28": "5MdzGCc8vD5LSCJ1Y1nHWC6e8QabRK6Ac9b9eNDtE4EYdz7UFc9JdQM8YCD72zi8aHvkUNnhsCPSGhbWF825sBQ1",
  "key29": "5CGKpwF9ah3rs9j1umPuEfb5gSHnw3Du69Zvvj7oUXQt1sf8vNd2HDFjfNszyT8RZxTzctZm1ohj9krbZs53LoF2",
  "key30": "66V8UzdCQd9CoY5PCVt8q87rFCtkWRQQnBZuh9sxmjcDVywJQ8rGhpToiSDd1ifaCpD8o7Q8TbWzRYKuTZZMcNgL",
  "key31": "4LnzA7F9zWQvSh48xG3abR4fJR4AoL2G8J5PCubS376BX56G21ikbtbnx2sSr3HvQDQEDEHDYMLamjy94DJV6UcW"
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
