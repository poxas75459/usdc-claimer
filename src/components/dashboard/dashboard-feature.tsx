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
    "59Q8CKP9G5NkjVAXdjD2STzcRzYdowkiTLPNNP8R1gBzLwWMCmFRXhNAKdE8QwwUF6tF46qSDLWPaDZ3TsHbUbkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ohos1frYbQPhLXAUpSdV897Mp9tvGncRFJKrRKhm8EBftQp7YxMbg4Yz47py2HBhv2yRe3y5UhgdAWXEWi4gdg",
  "key1": "4nNJHnTXZGFEoddAk6YE2vFELhgsyx4pTEKdNmxtgxZn1a7mbiKd6wGgZWSYcYcafKsfLn2dPuPjt8Yc9NCkPkVL",
  "key2": "5F4PBQ27Z1Qj8ixpJWUeDeFH4o8WGEG3HaW3YoDatwTfuAdZ8Dk58PVJf5kWJ6MdgDPSmKtAM7T7wa5WSSixfWMw",
  "key3": "26iCovqd9yTArvxFoLVcgcsKTrWyLqr14dZF4GVG34h8xGqugivaxGRBQZozSEJoMAYfszAGE7x4Qmc2z3z3zWta",
  "key4": "4urEPZiEh4bjLdUD5XaxcHFQqeva4S9c6M6P4NAwwLWfcQTYQaaC5XNTMntbKC7ZdCyNHt4jzCr4sikBBHbY8txe",
  "key5": "YxFujJh23dqrs9C3B9RutmThKBG5UkUUBfZQTpU4hSFh2cdPRDi1EfXj4Mbp9R5ZzaywoLjCQt8Wf5U8JLuCXa1",
  "key6": "3cx1qUhvM3yrgBKPbfUtpfzYVdMy8JL7nvrJtmzuMe39hKNdGtsxyVoPygaDt1moeemjo1ig6FspgLmq4dUrPmun",
  "key7": "44KzCLApFR2KAihticYppRGXU2qxjSvM43Nz6aJg7FErjTiaLLmg5Dqo9KuJ87bTUTUSQ3bH8mUnp3MtZHbcP2qK",
  "key8": "3pAz8Z2SCibFXhuFghPSXApwQQGj8gWVyvsb3PzqeieJUp4rUpYrGS7izMGDpQUy9aV52Tw5rLobx7fD8fKM6foX",
  "key9": "2GNKRp4ZkQ1ZT41KHyWSeFB8DwgSVvaXLcRk66wMb4Dy58CN5FjebxLcHMBP5aA4bS7sYsC2AmTFSgnoeG1Vh97G",
  "key10": "5TvpJaF4Ag8EPWKCPHzFcgui6Zx7YrWRcCQoHrkn94k1mz5NRec1LEZQ22Sp9mTpH6DpfbVw2WLgq7xna7nZGR4h",
  "key11": "5qkY755A3kWW8FtKmEsF7H8NEocx5oK6dJf9sw417xTa4qtAPtiW7DUXPiqetMYgQF6bbaMdMiawcKzjyJLqPyXz",
  "key12": "3YnEHbtN46TLs84bevLmfLSCasNMAcXtUoqZTS7thd8XW4JrayjcjuRv8FkExyXh8qvT3p98ft8LaTg6YEBRb8mr",
  "key13": "mBHMYRz5iXCW9WLNoFE1wTdmcw2x9cvigUduJeCtiEgS18Tkz5qFrAQrLyjdkdmMcHYemW5BBJiJe4RundcogVU",
  "key14": "2Yqb3gcHyFCQYZfx72Myv4Bh2vmWxHBNap1bEdpSCnLnFdPFf82hxtzM5fjGvGXDG2YK9rxuMep6jgGqPS1vCu3G",
  "key15": "4xx5TjEsG8qPHYXN8EmTY7aoM3gLvBM6Qjin8VoYa6nVHmAKqCE8ARmPLKsY9vXpPMSmQSZKL16Vt8pxjnDtgCUN",
  "key16": "51DdqAW5AgZp7vQ5WLXqjqqeD5eqsuJy138evP9EbzUiyahrCVZakxMLspRis6NZJPkJtYyz7wecd2stfu1Rqwwx",
  "key17": "5EhjBZsi9C2zSB6ABmojDg5aUdKYKk6nx1RP9Kmhn1eVtWzuvbhZvbbz3A3WTrmQU2bCE3fGNAsTyUpYjFT943wy",
  "key18": "2HVXaDqBVBDnrWpJuXjifWHWnEaLv1JVViN8ZVhXdujc6cXF4GxY7RHoxhB6T7sznzMjJywCvBzZ7sbndWoggiJH",
  "key19": "w4urCkD4EGXUHbZgYLXmZYJ4qbBrjZBPNbLCP1LWW8MGA7ma2MWaK31edA7GZXPMxupVhByDPDQSkrXUBirSA4S",
  "key20": "2EV69xXkTScjp1TKxJWh5C1pDteN3vL5mR4fcvgF888qBPYD5XFSHRH2HjspkfswNWYMaPEvy9tk2HJy1zc9XCGg",
  "key21": "21yKAAbwwBYWVz9oYXQUond8zimHCTMdDL8t47xqT6qYNYk3aAAdqCvR15w3Z3f4vqQseSRmQngdUmfMRTG3R8ZJ",
  "key22": "3n5w58ToS6FmWnzzaaLyWmW5hLRGPGqipW6uCUZfoc52bno2jBbnu4S5R9UtxAEMBWTdsMAq6WnotD8kxVDVLdWC",
  "key23": "4sY9xDZi6TYyYgE1RVPk7J8w5g3aNmbrTQstfLFrpVax5MQJhEqNPGKP6oSU8ztjugBGDBbW3KLw661M51DuRwUD",
  "key24": "7myNK9kWS6pRvDS27QakwpXncQecR1Q1k7dbr2AB57xKs3417rtMQN2aUHk5mqW8RQtVVhEd6F4881ew6XVTmNF"
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
