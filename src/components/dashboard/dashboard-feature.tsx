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
    "5DuaNJHZWHYWykuNqsiLBSc59uSyVxPa3F3V3ZCDyuKD2HwGJb3qqN7fPXbwWQBKDPM1xQaqZRvknyjjTJtWXEw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XCe1XxkVsK5CsR248YyYQwxTpEwy8HHck9BJNB9unVeKKSUvraVeHsg1WtaRXej4cfi7rp1usRsk1KuE3GKe9u",
  "key1": "2vEHH2AA5np2p76wK8CpzvQb9rsk2HPTcDdn4wmyFA44UvCfhJLCdV3QuQDdsuy5p9SqNgCrpNfQJ5DgFSmj9MdK",
  "key2": "3F1pQNnipUZD7VVWTLqDtLco7zLb9AK8K3fAuCbYUY2jitueKB4x9apwkgqeTPi2hcPFseREmEh9pipZwbVCSYB9",
  "key3": "h3C92FbWLuJxuWSPbkqsdaQredL54PPi3b6ok1QxkEmuHehmtKcCPzsyi1qUufuWqDRbLAv8Y3VbrkjpU5ruWsC",
  "key4": "9NDdXM9yDhDHHsXyKyDTbao7ppjpE76oBwiJNZhqfVdokSKgrLP8VvnsomUtPbWq1obBqWp8ADG3AYpRafMJLiD",
  "key5": "2gZKpRYiig8RdsYXkt5d6SLrbY3fPpp11JNdUbqTRj5ZAVS3hsN4VWqHaEDsU1VApEASNXXSMC9RRJPx8batF37C",
  "key6": "4eMXdWJRNDkZx7e9JUq1HmZbU3epwiVANaLLYMjSZbt8iUQCo7Fk2axeJEhpgS13Ycq2qFiaTuxCnqstAEu1n8Gx",
  "key7": "5y7HkgFPmTyF864EhTQGt6TuwWi41mK6FLhgGNxtRQitC1oNhBiZqzfag8Ktrya4vfw2CtoEj79HScc2JYZZLutH",
  "key8": "63ZEDtfNQCzYPGqBPhXzBiMWq5Je4aqwidBECrmTWzMgvuYBAFu3S2EYf2iyv5YWeKeJQUdo9xxgcGc53U1aWSXC",
  "key9": "2snQUiK8VwtAULyB1RkYRhRLeHeQHDi7weAxihSDkEZtftJgR3QqDcSr3Pbf9ixt3d1f4zbQepcde3GgV9JQbVgh",
  "key10": "3TLqEdHM6PGvNpVR1FgFuVVcEbRKUaCGDnDSkV71Pb6NXjv9Py9EanZaZrLjKCZPLEX9w5HTT5aSfMM5wcyBoZUG",
  "key11": "4ZLGJ9qr4bbU8qpitrJsvBMQUr6V8v8WjuMcaMTX8oGpVq38FgBkEfWbuxvakgP4Ym2TKD5JjKhk81NFaMmSHu2e",
  "key12": "2a1AiRrTqsSGVerUipf7VpV2sFdEJPURf9KzwgYhsv6MA1iYFpa95rjb7JFAFxwaMETfXJaVqsZCqFbwN1g35amw",
  "key13": "2paoUhLnAwRgDdqqNWWQHTmyJwGEfo2roiA3wG6ggw91HaW7xA2mskHn85UxCZ9g32NUv6kqbSJnL6VkzGPCGoF6",
  "key14": "2Kv9mZtDyspDWCCKXyioXrDp4ffxukchDepqwiYJKN6iRKneW7ftmrG2UEGyL3RS5qbTLFg2jeM6ZN4Q1G85BPCd",
  "key15": "3cAPt9nq15s1vErNEqKmk1nSrnAcN8LhseAZRiarWLQAc2KKRdx5TaeCCDV197iS8YayJUDCXpmhvQWptxVNm4to",
  "key16": "26vY4fPcQ5jnoVx1Zv2EgqnmpTTyJrviDio1wEFsWzezfacRra9v6Y1eANxY3AxD2WApcyud1DLYVUPJKydC2Gxo",
  "key17": "3HUcgX4GaezyEcfr67x5uafY1CEccHtoRgg5nnf6aA4MhCXiyCwZB1SyKqJCwptxXDU6JrWuK4ouixcziiH3MS3u",
  "key18": "4pD47Btmdk5cvBt3aJvn518oJj8AY4MDi7kgVCPCHJdeKN8YWu8PrEKMFsDZyV2D2TwgAocp3YTho8GCYmCrWPFy",
  "key19": "362MSdBz66axfsKrXQjcywUqUfpfn3CCvP5n7VR4b2Ra7wcLQ3SZNNoWGAVvhghWaaYFwyPK2Cfh6zcXVKNLX7d",
  "key20": "5i87Knu3w5TDkkg761U4kjTfjHWskHiqvT43hBBFnmPu7K29krmuzucSpHP9upUw3ppKE24HmMeR6JoFKMAS7usQ",
  "key21": "38BgoQsYU2tDCcjWCXJLn9zt9PawdAWfh4yNxEo1oZNiQXoTTD6mX1d3XkqCeHkuYGfJSByU1oY9yC9uEFJHTzdh",
  "key22": "3pQhzD7XADQAHCT7wZ1Kh2v2e3JpXUXrBNKEisYkhCZEnKRxk7gxNb67jVfzxHnDA5r2366AwijLpq1k9QcqZXVe",
  "key23": "4Uxn6B9ai5saUXceKaFbzfZyQmwKUqsURSsmZLKG9vwYe18D9vSe6UUsgATsQJxSmekaNcduayiTBhh78NPAKY8K",
  "key24": "4k4rcJDtsZ9LaQHZ22NS2iBTvixheKuCgCRHUAyZp5LZp5jL1h3ehmbQ1x1yXNShbRU3BAjCeP8Gib1kBVTLpJuV",
  "key25": "4baC7dqGwvtKJmSMetpQzxDAYa7WaSAPGrobganRB3bf1dEPrWYXjDehNFRYHRVgJwt6zQA6hx18Xf7r8vDe1qYh"
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
