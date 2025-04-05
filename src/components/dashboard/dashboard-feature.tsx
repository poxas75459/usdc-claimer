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
    "5nWKucyF9Apk8xzbR9mL5FySAkmnr7ddi3E1YTfu9cfr3rKJs4SLtP7dz6DsggmPb914AiaG7353QJyzqY2C3rGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AVsszicCPcc366wUZ5JK8Zoyu2yeKB8NxkpE96ySVNFCzmmtZ9GGMcsgba7g9RFU5rBpuTWpuqYvhfKw1fYFQk5",
  "key1": "5WnYey2SaRaLBu8XaDaGT4SBfW4qKhpEcf4qoX71nJq5gNRUGqHFWdqd5sTST1TgwGWTryusfrxYHBnAYTvsWhkT",
  "key2": "5E9kVRj2kwem3Xw5DRbvB7EhYufxDjewPiwGUKvA8fLeaR5Ggp7DXney7oLzkjtDiAmcHyjLtJBdPz3qgPp6vMX5",
  "key3": "57L7foew9jcZZNGzzyTKpEQPWLdAJxArybs1MknJHejSQP2HdXwRkJj5DVrRA8ReajpCVwDDSTu26RPbTgeff97V",
  "key4": "2kioedAw44n9gbiXGtcQqxsBSGA1kFJhUPdYeiPAwYf87RwJmEdLDnBQpCN6vDtWKGHZQvutt3AFV4NbpSzbKfE8",
  "key5": "3AsDq73BmwP44R4Fb8559jkswyXJh6GA5ZgHxUXum5WtKQeHYMuiuMSk7iFLDFRkojTXtvaFNNLRYH5jWDTqHdyZ",
  "key6": "5DYLXX91HHJMj852vY4uHKvCfhSjtEvY11gzzVzUaBSnw8qpsyjjYANQ8yhZ69KbnJDnT4PjV9g3S8nTqnz3PAwQ",
  "key7": "3eZT2QYp6PkcpZN1JcHCovesCkBfptcnwXDe5bjwW9T25uKuYoppUgRd2gT2hoB3mG1749KocH1sBh8gWNvTKmYp",
  "key8": "4Q2kgxyLAMw6vLrHxtKk2JK9hBnkuK9yUbJpKXcTsqY2ih9KASGwhiKeUEJYnQKCUFAVDQwBHQr44sYWjBFjgj65",
  "key9": "4evEi9S19DGNRqqRxAYDPXs4pZKerJFmeHBE9s7AnayiDfnhqtDzvaNU6cbGCoa6FfzEb2Ln7qycn1c6Zrz6ZTxn",
  "key10": "8XAMHVKzzAHD4LZY5orNi6FhMvtiuGhAHMw5uEvoZiwCWpXLVcpUhtJp4UtXj6NJ91DWmGvK3w2WNb1jGVmkZ1N",
  "key11": "MCZLR25mjSNAtCFp5UrmXSLo9tUNTdohmmiWbPzRgdkLvCMyEbieHYfST6fzoPCGQnGUhE8DGcfB3XNi2MkGwBW",
  "key12": "4eM2LqZ3Mgj7Ar3JEaSxYoj7wUNLtvzMatVh7wWkiCFyNBQZq3oAnripESrauRZ6f28TTSow2Gbhmr2HSvpoeroF",
  "key13": "5c9AgiuD1MXwqNLqYxwBaFWKSuqnWjCTw67XZ113UeQJnt71m7J9WBz1SBDTbcY6ZoTSmAx66SzxGaVWo1xWaC8A",
  "key14": "4YFom7Rj5NLzTGs4hpyJ9qgPHMQuNFg6cjw7Ktza5JbuCwrX1fxQ9VXz18Q9KYSigTnX3rzK3ivrEjbjs3naPanS",
  "key15": "2y4hcmjz5JpY6Ry2g9FgsLqPQCqoqsagjuDd1bF1UhXuHgWhym45BmW9ZaSZVJ3VXNBHtWzSe5GaNGvF18EB4Fag",
  "key16": "225ftZm5YRrrB5Lv4kvcj8YCocdaZJpv85vHDZigS6k3hhUyoKCzWXDovWbSQtLbsKPiRAWFAygcz3muZ6UWrTJD",
  "key17": "5zCN4tn6FEJP2ZLu2S4WmT5dVgqRDx4VWM7jHjParTKaD3bVYqsYsE1ZRRt8Huu4nfDN2t7MKfDkkkwfCGgp9E9q",
  "key18": "bowCg5ksNLR5ZyduRJALtorSRjXzqNYdB8ojTKaTbDs7D3xUPkDRL8WgXrc7QNhhxNoopSbfgXZLXMzgeYFinGJ",
  "key19": "4m8Q2b1mswDb9utQzT54wKpKEcorg45VfGuWYEtLpp8NyDFh7oVeeV4NkLBK5qkmmvnMetmW5zsQME6MnN9Bk3Sc",
  "key20": "3sBJyoUsbFtsPUdDDvwiV7sMV6tDZATN2ao1vHF3MqJR85ByJkUFxJBboEzYijvFAcMdj2weCWj1Pz3AuFTChXEi",
  "key21": "3ADZfGYKKknA3YvaaZ8mdNEtLxGoseYNHj42477GFjLhW3Pt6n1Vp5AnQYzBYHqLovakEQu45JAZpgKqBJSLEwdK",
  "key22": "3LpwESQcf46nAMUNUkX99ABnZwE7RKey6124483hgK1FP4A1D78WSgqPEGeWMAmgCQU99ZS4STEaoKT7rjEWhEad",
  "key23": "2UER7DEPhJJDr3znX6gUuZiYvmRM8KXMMfXNXpSVHbDkDRNwxzHJaexGDHY4bJNXPGR625o8S9xgNY2eGxQXVaig",
  "key24": "2koms8pXVXaMycb4XWQkJvyCmWSwti4PKnquSTBGirkw2WXuDcjPLn6ikrjKX6dZooXqPCFKM6JDfCLqsy99DhAS",
  "key25": "4PbsbSEpMT9ycp6YEiM5WcT7g54jKfUJHf442pTNQbouLwCuz5M7bksXiDjMfioaQBwv3qGLYfjPYLzqnJjAayWJ",
  "key26": "A4PYoi4ybDAHouPQhgCkW2beHxfv1pRAocguFywLM1C3NnpSzyBUXVz94Y1Aj3EAPKy1nq1ZjxvgBLJXSFGM7DX"
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
