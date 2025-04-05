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
    "56b1LYWnZQh8HkqSiV9Wm564ahE4TRjpU7L32mz6pQWAePB4MpjSthGahSkQdK1s3XBKn3KWicwgjh7xqDSVpHUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZUDWjYBgRgVivCwt3cFdG5fqTZJYBDyknP1WQi19CDcu68WbcKdttxYjs2bsmS64ZQE57x7oD4cvyMvT8NTDQVD",
  "key1": "3viGJFNF2NmRffcRLy9voU2LzBP3VbP9Xcj5Dj1tDWppMHaTn3wTMGpA4XuhZCHXynqycQzWcLfuWtjEKo8nsjm6",
  "key2": "5cam84j1QLMpP21Gqxe81AXrwnmAna3F9DeMn6t4FJW8aoRLkLye3uPixqJ8ih2uGkkuZCwMbTfsPB3SixuXT5fd",
  "key3": "46fxAKGAwxcsrEeuBaJ4RJFW2jHhjt5AN5btn81x2LDn8uypDfcjKbunLJjLfaddbnUGERWAoXHBzXPkYT7dU6EJ",
  "key4": "5rqmiVfYycyf779kMLiqF9r7dJJhWntTJwrFxm8rwXSjgB3qj4FevRK2kd95aYzqQMvfNknUUZ461QxF6iwNDZoY",
  "key5": "3rNSb8ehiYvJ6cJyt2yxxAbaiDMbYQ2GQFpWwPQms5x95AyuBnQ9ujmD83pNHygrLxyvTyGjiad2obFwEp9zmRGt",
  "key6": "4BQHmgYn9sFrseocv69XiVoZ9aGNpocMMwwdZF9PCG49L218pwBpQZ1inWuSgBJ5Gyd1e3U1eDBjaSqVdcAvf7Kn",
  "key7": "4pK85WGpPxfDWP5HnhFnpRs4qyJcdN43kxdwUYU5VASKQ5we4vquhC4NLGCCE76aPECVMKvA7D3B85FrUJfSSP9z",
  "key8": "3aiQ4kFdBHYAsaQdDhTXwx9kcdBBLFV969Dvm9hUunE3BCVyxdpzySrvoGnuLbjwMvQYmYMFqQP4TmaqrLmceVWR",
  "key9": "2tsnLdwq5dgYWp6G1pPJ63CUbPDwQjwkeFUMoJhnkcGr7koyH3Ht2nx4vnNmqV7BEuUkmGdY3sM3Y3TJMAYfDWpX",
  "key10": "5ZveP7NeyUfh2dby5WS81HYB6Kr6UdCifvQEmdxhb4kwJYSjpkHav6hknGTMY4XpZQ3iv7E5ZCYNDJ2V8Hn266sP",
  "key11": "3kk9oHz2HVgm3yfKZUjSYS6L2KH8rd5DW7QdweotshmDfodWKqpzZwPxgQUMhk92fgekdfEPLHh4Dz9EWUFPjLew",
  "key12": "5J11wx9NZJLi4RDByJ75ih6N59B3zgjo6AbDAoQ1w3jY1HJFAtECduyJUkagGSbQAiq83xLb5e7fy49y6SyvLQyJ",
  "key13": "37RKcLhT8ghHmD7Ac85Q6478tD2YpzwghYDKx5y19N4WCmsyE9YAgz21gNX29ecJMNQTcjhYZFvxiVf71G5cLktZ",
  "key14": "5ZUUzv6fPCTXv3cP9U211eJVDLxbSh5krRHn3oeG46oq7b3jtfsxr1RtWsj7jEGtVb5sVv4xDiDF4H4cD9djb7ZR",
  "key15": "4XBGZENEM6SEuquZcJhoWFVj9BuwLNNMLXzUHHv8bBU4s5uBs3NbS1RuK63nS6WDfHAjkGV6sYDsV7kXWStR4xim",
  "key16": "3MadrfLsWohNLoAz7vZfF46XsK2fmAyJFZZUuc4fo1LZ7xoqSBZbtKjN2NxMhwQ9Cdk9P2kznmZ7rXYYy9MJHchi",
  "key17": "2VCyjhevLEFFngXCUA9qnRYX4Hf7aDBo9KkopHHXobzWTA1h4wkQLB41rYJWHPutviKb7FRGPe3E2GMs77w87GRc",
  "key18": "JzxwNzCuHmPRse5uMjDSUSGQrJ4drjf22gMBznV9QneQKSo8rtMe9hF5G9L4epdnFL56yAPiAZmaKsmjHH4oSMn",
  "key19": "sQSsFyTpneFuHFWjhjSFpd7fNJ676aeEqW3fN8BHp8FbYPT2c55PCYzLwHJc8gFJphYqHQa2TB4QFn4bMCV7Fao",
  "key20": "2jRqcP6eBUqtjqWRwBwmSi5F2i85N8YZLC3st3AEhqhpsVPnNN2S9VGSvPSWdP5psV816TtgBn2zgyYTGX2r1sES",
  "key21": "2CwP2P1w9KEV9dLCyeHpK6BFMFLzQHF9FKfCU5aqLtoV2k6wUoJ3kkARVpQAovPjK9G8FyA8FsEGwGF6RoV9UM3K",
  "key22": "5QKshABmn82j2CzJHWdtSxCiBWmqvXQpSz1xZUwvt3WptgeNXSTkBemE6N1422jwrdFzrHVEgBVfewz2oy11DXsK",
  "key23": "5Zjhu3tQUeR5tC4bc9GwPnuSAoQsLRCUUMCzBCyuNeBZGTCg5fhQi9KbKAxFkVWL248PTSM3AMBs8tJptzZMBYY8",
  "key24": "5iEkXfjhYrQLh6qvmsEZfiUpW8y5EXZSKnc4GLDcs3c7rg96kkyKHehkfvjuts1X5ZqTcviGxA27hPNm2mcMdLvz",
  "key25": "3QDMDMZTY1g7w26qM6Vx4xSdbd2DMd38WWK5ZjvQCZBhfDe9B2cZwnEDJKxsPRha4cYXqtSVSxe5GcKjBLTWxWVQ",
  "key26": "5MqnEhfKJd2jNAeeDsAPGn3UcVg7frM6W2GQngrBUDZ4xLUBHVWD3ZAstg6X2bLNr8C3HbTrcTgHJDEwXd79ZZey",
  "key27": "4vHHuvM5TN5rbkEozXBCExQH7tE4MYfZaM8N6GKXMhw2Eh66T8A23sgAa8sFu5qVyvLd3qm6QDVNYWcpmqjYRTL5",
  "key28": "5o4CGMWHBTxr2JA7Uu6D8yN7yGVnhgsyfxwgh5V993hY8m8P8A27ZSX79e2kKQqWWryqCbQSEHoess4nkbJoxy7D",
  "key29": "43ZfVvXC1wS47kDv8an3D8ZzUvGFR3SQHFNgQ8A4a7xUeTZRmV1Fm2df4UfxU8FppC2j1Y3x2tMg5YRvNTKyNxwv",
  "key30": "5sn6hWRaR6TaCCebkpdsPdeZCEhPXzP2GSHUSQhcRWeJhNGvsrkkdwXtEtGazwWcHQXJb4R8WfZNP7NnH4iN7wmM",
  "key31": "5uoB9X9Zvjr4D5TH9HCjBM2DuW87w8LZCLZA8JAgMF6SB97uW7CJypzWSUnwKFRTV3ctcuQUEVofDfwupncaxLNa",
  "key32": "34UCkpfvPtStTukccDtvWvp16HWu7VBwiNGKAfTy8WLChRRTGg4aG19XT6RtpUGTMxNQsLiLsrxdNXYv2BpMnaHg",
  "key33": "4YVcDXE4v9KtPXtS35U4JZW1tHghcjQDLZbK68J4HS2LPfHjnWveyLdsGytmkRwBkWpTF4iNB8CJoMxqvEoguUrK",
  "key34": "5arX1CfPUY2fwj4988HfD3yk4bcFq844eawWgoFVVdWUHnpfWYyJqvxygY75Wamgq3HD6MYu5otk69EDRrzBMFwJ",
  "key35": "2QxsuqSxY9UVWaAsN7ad8j8SqP56egmTkzDTLbAPgQvH59kar8TR9YvcwNTbWFNCSZbetgSaKMAKLUwWzAPeCuij",
  "key36": "NNAkzLThwqVmSuSoNdoeUZkhUMYQ2BALnGFzt2z67wYgPLjg4o8TzM4LjzLieWFPDGoYiGmAZCgtXozJ4c3K6jE",
  "key37": "32McsA78SBadZirk2fj6sGjvQP2tWHcgnLvQ2ST9odt7mLxFC97KSuStf3reMjysKMmm6CCXCjWwsjJLtcJY2XU6",
  "key38": "1XkZvGEeXmdZWUvCs5y6gH4hKBxoU4JmcKmEzzi73Aq18xEPtsSQZwZSuBxEChs5D6z12JTUu5s8dwvxuY3tK8p",
  "key39": "59hjLWFhuZFPTWUYfJZpMmjvXgDJZpxrscLd9kQc2as8iRv7D11sC2S6Cq1m5LQ4LUCSRsfG8VyAbQ1jJjy7Rejf"
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
