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
    "57sPLNgw4omWTLErbmqwXmcxhjsGMXJQ7TrX1KsgLGAo8ex8hWRqZp9Pi9ssDhw1GdE5JGWG5P9bTAhW4CPZph8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZHM3v3izNpRy9x9efeHh4T2XT1434Fhn4EwKSeu3YgNyECoTsQGy9ZfEes6nQacr93XSxkEJN2W9uHtPNHiyuu",
  "key1": "2T54r8A1kFqrjUTerjcc7QqeqreT5xxzg3HCoKo1iyz1QHcWR98nJarJEQismyNs5UFZkYKkeJ8XYMr6Szt2RKet",
  "key2": "4sDyZbjaZ4kRXQzaxpift14Ux4jcgYfDZmtCEs3ciTof7KAGg56u69Lmu65nGek71AVzKtPJMEtpq2ncPicyZEEA",
  "key3": "418wZgGNbqb6RZo3T8fxtSdYZrQKs72sy7ZWs6M4iRW8Z1exE87afEynbMjJSrDJHayA8gcnBV5yoQB4iU9MZGDs",
  "key4": "5j56oUd5QpuathDph32TsU8hqYho7Woei2ZnxH1KRUKPCTnh2r7LuDPn2RkXgY4SXcSx948hXZ2fwwWV2VCcpR3X",
  "key5": "5f1YiR4N6upzMXa7NyGrtcTnj6yyJXPokfsaVLJPoQQJC7SeFC73M3W5S7mHXhNF69B7vfbZbJBvyYzGoUhD5DwB",
  "key6": "5x7STgibML3UWfPAoSZYsC3XvY1SopKhJ3QW7yqtTqQpjwNEpD48ewZTxZiVnwrSGZjuKbrNxmpQsJkviendKsnz",
  "key7": "41hLmUSu2So3riCxw6aYXGRuZLGGsWPyuiLzs7achML7WmoHm8z7cSbQg17Yob6tBczXXgFHii4vHcTcj41tMxgh",
  "key8": "aJjZ9QjFdeWj1Dry9F11rMqUzqrndKKwHaExEQUndc8CioWDvYBu5s1kLYDztESwgG5dW6zpteBF3GYtun6AHwE",
  "key9": "5VXj14mrvuq3bqjf3Q7mvGkWrF8WNtkTBZ9nNYFouHESroKRgFYmcKo1KtYbqQYNGB5MhFRKgBwM4eziQDbXoVAG",
  "key10": "jvtsCWqdEuSFMLqGDfzXcf9bxL69HoqJcQDiiLYgDXVqz3R3dd8CJ1DvDFFXddj2JeeM9GWRJ6j1iox1xL1uo3p",
  "key11": "387Tf13YkBEqC1QQanSMyMRvNRwj3NKie2LG3RmZSPknGoRqHRxgMarj3BeccWKsAUgCmtyEkmgYxvQXTiSFSxrz",
  "key12": "2gjUDEnp9Z19C4v5KzJ6YttkibHRh2nzj4fogRSHa4cPTL83HYVcbP4rzo2WYWvHZmLCDBPjqCFDZqbGkCt3du9x",
  "key13": "22bHthHGojGioMB6wUvtC8q3tUdtGytwnuxRBgasnQpxXC11ZNpKiDyyF55716KUDrtwXJJ7xfeFfWRWomRq91mq",
  "key14": "4cAhYXVrr1n36LDf1Q5Krb9SUJ3zPDL8qNqonenfeXvxqkC2QZSEe13pUGb4853Wv3exzh4qaGHUg8ytmF6u3UbP",
  "key15": "4zXgDmYzPKRUi331PHuYy5c96T1m5UTn3BYn5RjdTB8DrKdbxzazNKBDbFuBKCd8roWtQiUvTkdHzyMthQXisAXC",
  "key16": "5wtPa6iY4eszgCs4egJpZCamZgVeQzgx9nf1gWTBECQ9guro1rxsNKRTrV9Xg8pXUZBt2SKhTpH25GcNAZZwJCp9",
  "key17": "2eFeydnszoKM8YPRUH5T9ZiD1zgwV16xZKXozRq2VqJv32ZZCfhxJ8ZCTXteG42eHmaDssBsHqi9EKjngPWbSM8B",
  "key18": "2Nt16ZQp9X5rDfYJXFMK3hyzrqmwGh8WBqpkHG92hAX8h4PDrnNTXZspETeBhXQwPrsA3hQA4cRSgRuRKWDf4o9g",
  "key19": "Kj8bJzRFotJwnsGsHdJFenTwoa2YgiLcRvmff9R1hnCBKxUuA5cwBTnNYBv5JxtxSrV9BvHHVtjJFhxYzemZin9",
  "key20": "2DWh3ZuR9UNz7x7PXCZhuAHCj512ryL6RjqmfLBHtVBdH5YattvHer6W4QcoFPndi3M9JAZX617zR6u3AvRmqpL5",
  "key21": "3UawwfiKHx1DstEY8D3VuH2251Nest3TAGo6rsxWEJsx8RoYLCM6WUzci8thd6pAok19kki3yNmFP2Mn9EbEdcdi",
  "key22": "5kRpfnyxQjKwFGi2TYpiNbSj9juKEw9BhLHosi6EgBfPWmKbbdFScoVkwPLLuFVqhrmjpSsx3TrQiFMEMzXgu2tA",
  "key23": "RwVPSoQE1uuUdo8sbbw6yAtoBt4MD7LK7YZkkpARu7dDHQcc9aEN6A9XwpUHZ8Ew91wPNVycBdrJQwYPf6ZFSjF",
  "key24": "ghDvHN3XQvJCurY6EWrnTto72h8gQVqgXhoELvSHE9Fyef4r8vZYeStqwDzTQM5yzqPVEZFft8GmKSVJYAkqGdT",
  "key25": "5T7ALU5j24X3LKFGzDaTrCgwo5UgCErt3YmVDFNbqc3QdBDg1UhSjYzwKhKoS9xjfoqEePYZEzwCzUjeuP6tK3ka",
  "key26": "4eoVyL1T8X6M9Pi7Gs3q6dfSv2T9Vp8S7EQ4zayL2g3c1CnUMvEacJFg1r7LC9fn9MLonJoiMRy5zshpx8DJEA7X"
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
