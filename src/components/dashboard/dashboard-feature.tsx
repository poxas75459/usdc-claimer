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
    "5LAnaDcmYqjz2A6xuqjLfjDdc4tbpAaCXyga3hDTR8fbKimn2iShwXL9ot4HjdqLGiPyMDaAzdBtKKi8h5DggrTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqGSsTeyz4PE1uMYcjKdMTcPTL3hPBAxa3n13c42jag6WXxAVguyRZF3XTo6j2A1X5JAuQ8q7hMnoDe6vcxGkrQ",
  "key1": "ePSVnireCVGgivjVftiDwoWB8a87eQNVtCpcwMaFYhziRXDpCbAynxXTJz8p7N4je9az9ZQrDDG3d24Pa4uQdze",
  "key2": "DJKPv5j1FRqXzCZ52NRJx1Ax2b6w7VYLxqoBvFwaK9v4GfFBNzvvj8oCBKmMxDyfmyqVakmFhQDsKGWua2hM8rD",
  "key3": "R6D7A2D1kJsfdX2ezb8oXpkSS1rw8Wp2G7KC42K3SMB86SwEiwUBBEMsTiUEfJZmhmqNTufyszSmUiS9FoujBjt",
  "key4": "Ly5urtBSnX7XRHjNpCBPUdvjxbNaCPjVmNDuSVYFdfGK1pKhHyvKa3JJRskqAwgZm5JkyPNKjKYDjPfKrfr3YWw",
  "key5": "4tagv6KXHd3Sa9UzZKLLRog8nVxbVa1jmgz3zr4nqnufuebQRh83tkorhf317HUdY2ioWKQo2q4G1CqAmeR1LBw1",
  "key6": "46wK2e8uZZNBMvVnKVBtT8dzYaugCUyVzmR495ou16vkm4yfYRoFWAgKbjfvaemcPZd54KHbdZu8E8Am9UtUKjYV",
  "key7": "5vCgREVFdzhJVuJLpGkYzT9Y9arrXRXVGTGFVC4cPbsNsw9JknmxEjhNSDcaoLVoLKaGeYHDgGtT2Yc1R19SV3ck",
  "key8": "5suwvH2dHggHAmWNfAokLei46X7eUnGcKxQb6AiVoNVshfpEqpb5ayHXJvqKvG7ynV8aP2kNAeXJcrLvzzcyvNvH",
  "key9": "2TcATcP2yWRHbq9TYqbeGtKcV7W6N98e5YhYQdc31g5gRuwRuh1MJZq7BuC9PAcssezLRkPyuyGHjQ2S7a2mpCWf",
  "key10": "2MsXAynvuyHWpfPoRHxmVb6Dwx3H8YeDqHCwzs36fau5VpiXokBUqCVEKuvA6AowvbCVrgY1TBzJwa27xy4UsgZr",
  "key11": "2yXwAZvm7jK8sy4DurrjHCj2M2mcsqWKYhkP3ZUu2be6mvpQ8Tf2AwhcnCVTx7e7ZvWa6TDC5WiecejhvQ6YKMci",
  "key12": "5WScSsMBpDvpA35TRyi1ziV7pSXc6BKTuwo2MAPJkVbjez7Snmhv4cKirseAzWWMhbnA7rBvqcDEoRd77wfuZr4Q",
  "key13": "4gbG35fymvv5jrG4yGQL58W7NPMibCTa5JX5cQsbBitYW79T1U6Hpz8JgmNiLN9RMGfS2BEJnUwQhXnBVaDhXajY",
  "key14": "2HF2CoPgL4Rk8tGh6piHrTMFwVC8SsA4Njp8LrLxremq6hHCDK8Svv3q75KkbktT8EHvX3NuYAgThEEj5gBwDEGv",
  "key15": "5qDqw4FNDH5hF5TRzf6TdfJZgQchDA2MHWrRi5Rs4GrhPQAoXyWhWFBzGnhANkVUsfN1PNPCbyWXjuWUx5HzpDoC",
  "key16": "5buUsV2dFkGRQtbMRBbY4ZDBAYaLPmVxqtS9NM1LJX9uPFJgf5sUYbx8kG2FWBJbimUuJ1zbK9T5SY3zG9CsyuKc",
  "key17": "5muAEi8WNMU2ZVKaS6JLRvBH7VWTgcwYfsFxURqXxBxBa1ayXzsjooxcxtuGPqSJKnmtNkVuqobrTDRJtZvGN9M2",
  "key18": "52gkaJB7zXjEJ3j2Rd5bunTmppvN7hUYo9u5cjjVCTFCs1deRNCCRUSyoUbno85DhZPoXaFtnaqiXaaGtwbFcdWP",
  "key19": "4SKBbMRo2TLH8juuqKbPsnYPDyGtGAGgqfCa7ng8MGjM8hPFNmKnemgioNfAcg481gbycbtYysjRu8xuS7gBdwMN",
  "key20": "2AgX4eL9GUW3TqDYaC6vUQmamiix7GGQkXo9FvWoZdy4eYCejc6SBAK4nCFKrDBW5grYcUkqtP8iGp9eLqrxfWVn",
  "key21": "2DhZ9DoE2LSxy9BX6KyFZN5iiM4BdonQcMwQsWMcc6cLUkUGPKfvGUD6dyE1bgRA4HTHQHfYHae33WZxxbCDXzTW",
  "key22": "5QPGo8YTkHyBbKGm1myfXwjppu1BpZPh4ohG5xXhKvxW47UXDeAhnLsT9568qHKp9VzW7fqssbogt1TfGgPtATRJ",
  "key23": "52zLP2XcmshrDxqkwQukRNMG5t7qFoBrAGGA6zGBci6eZeQgVutkBV4P28w8JhRzCTd8Q4qZiRr2vxxmgxQiY6Kr",
  "key24": "5DiXH4Nf9X5YTeJMzknpcJRyy27KJoUiQB5q5vSYXmPEakcSubxzb7mUGcSKCZTzpKSC2PP3UxmByrP72UWswYiw",
  "key25": "4LqbQSBeWMXD8J7rTqmnVGaFP27uT9qd92GD5zLzkTyrKum1nCyejZe2gee2LSuQJNo939N9cPj7D77GBbDWeEND",
  "key26": "5CZz4qFb3KpnHsXpihSaE94GFx6VMYE2icC1ACYEj5DXNmGPQj6KrS2DiMYjHr7LaBnZjxMbX7c6e9Wxf4EdyyLw",
  "key27": "2Kq3hyYomv9f4d2etUHJ1oyznhaGnzHLt2rVeW3UUDS9AWEXnY6caGk1gZLcLCAQ6H4G573p1iUUro4N5s58RPUK",
  "key28": "2vnrrq2k5ciqLxgcRgDoimMF3mPe3e2anfbVunCpqxK3jXsCwSzzHzxV7NYtensV2ZUuPjPKbro1bYLmBx7ZJVoE",
  "key29": "62xWgShaBJkw9Duy8D71o1hkN16spPXmQNMmSSG6NPGG1yibMMzKThvbqNW9jF5RNi52tsP1fvYpx8NnKYLu5eMX"
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
