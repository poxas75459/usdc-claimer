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
    "3XR7hto4kyoEKnEV1p7m7hfDAxnu6NVC2mSdYBbaL8iXjJo6nAj4vsdJyHMuyxfVfTBXdYmBL1g7YVJrKmvBvN68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACHoy7KZEjWNdGkkrQtKLrZ3UXzDemoNGTHJemn7xheYaxfdS1ta4b5K7TmjiVTP8RNoRi8Wc75KaKff2AVjCap",
  "key1": "3XAFjKdRfjir5iPZwRnAMf2GQphbmcMuQpqpgjKuMkJGRfgt3iL9YiiHnUv5WLLZGNDQUv81yy5Taw3yfitxYxQi",
  "key2": "txVa7TQogjQnKmWKZWRQEhygfQaQATfDo851ygBTbn9Guy543czDjxnJwKhM7tE7biqj7DdsmzygDpg7zuWVxHH",
  "key3": "2WNEaBXXU9cSL46NLufoL37njf5fyvaeGJA5A8XYHcg36y29KngJ8tXoiCCF759DKAUNThnEwRJGYVf6WKeezVoN",
  "key4": "2U1zMjFc6dFSJHtMkjRNVeMCvbM3fUvu9EAm5Guq1cSgR3YVkxXnhPPaxtbsoqTn71thZh1dTbfAheGVQPSoBMZh",
  "key5": "2YebxrkQvxX7cSivmQuXyuv6fyQdAF8vXVNNvCLoWuiNJKX3zydkNLnU5v5cGJgMcdqwznZLA6veBdcVeBxLGkko",
  "key6": "3ajVYrdVraYvdaZUyqWbry7FM1da1gHH6YCRowRnumyUhVCwkLJurZXT2J8wxUuFPNgyGqgZEMAZpLFEgTK2W2yv",
  "key7": "3VutyUDDkToaxyF6yW5FyFENxhYPKYa871CishcuHiRzZrtb7dxErJDPFatdGd45QMu5WwMmmcUu95wEwPfMa4KP",
  "key8": "65VM7ayc98YC4x4SzYujL65XhDGGzeuTUE76J1iWnZ1FcmPQNgHZMZcaXQQTY3UEEei4sNwQWKjfTZv17Fp6k6QL",
  "key9": "4U2UEhhkqrv9AnwXYpwjvj3uKsXcWzgMqpPaSJyTkPPB1yjLKBokLQBjrpzxhPY7RTftmpKDJJDsas7F3D88RDps",
  "key10": "2ox2NYfFwxPERLFRaETtgYXvpyHDZhbLuwDDzeZe7QExz2MrmJJSWiuoNmdXFR7e88sNbjep19DxEnbxawyRWDLB",
  "key11": "5ubkuyAaRxqczWc8RbiBojxGdcSZRR7xb5P8XpUpCk7gptwCL34gNj5Jc7QrkFRSD86svmd5ukBKDZCNJjT6N6r8",
  "key12": "3uTuidK247Rt7Cz1scanqctZ5zvQRdoSPHm2bAoiC2mC5HPD2GnqUW9hyBxjW74diMhe3GgxbVGDVn7n6jNZWeFK",
  "key13": "2MGHqGxDLZYF88vcMFyHS1bRVcpwXBybdjAYjX8wnw7BmQfAmbtpLeo9AFfivkmg35Ewf92Zrtq2qZGMSb4jg8tE",
  "key14": "5VsDx9ZV73vcmkCULnhB8AKkxS5KQaivsn3SasadipduugTGadCmXzitYKjjgs7bko3m2UyHexGYwrswkJV6W3E2",
  "key15": "3rM1D38DduEUPNzn6rGsesXBXUDRSpkmTSsQdgQw8Yx6tCKzBZ1dFBFwY3edjWnA5kyj7MLcedEBhBVfnuxD19YU",
  "key16": "4iMS1BavkzCfBWF2tC5oKb2LewJHYSAFH5zqf4mFKMftzqKn1gKgyAMHSToFjHSWjmm2C2ufWdTiEbpsoju1ZwKg",
  "key17": "3SNrntFNzmVp32CwDsz1FdmB9NGePBcnys3sBfwmMhp4WT1bTyLEq55rp5yvqByXHMFmDHL4YFZehW6Q4jZBLyYC",
  "key18": "5iqpaB5D8cubrZnyFA2wwtm9H1pJdDooXek6T6gQHNwgfqZYZPgNY3xeRuZngp42UjDxAHtGR7Tv2fkex58rN4vg",
  "key19": "5amoLY3Sqc83WuY7ujX9i8XiMrgNRjfSpKwriikgsDJhSZZ9FeUXD7tub8ryjo7FVBWzh1TmUCwA3hhakHZjTSQz",
  "key20": "5j7b3nQKxnBjZSWd8WsPHZx7yWfHPx6dBUhrP4bpVymc2AdfqfcUyV9vX8sQ7PQSGGYq4erY9VzKUutzq5kmz6hh",
  "key21": "ieBMMFtNGKgsWn4rXyeDADmXxUECdrWRiFnqn5XGtvMN2ugjLLsGFF9PL388eGgxxUxiCDKzxKAiEVbm8GmYWMG",
  "key22": "2R1wnKakeTUQbNJwPEThKiGEKJEJEwwy26tTHd8mFt4bsx5SBDxg3Q7vY77wcSzXovm8PgVHkLnSLMJ5zk5vYn8G",
  "key23": "GoPpFC8Jtn8fUDWu9HxNjzT61v4hCcpWBm7TbWY1vQUxS2yaMuSmhRiRgLKowp3CByyLbqFTfQpsd6eBbuNhYwb",
  "key24": "5Jx7aJmQJQPUdXfGwYeZeaC1xsoJzyyfRovrcmXgt1XW265KBUaskdb5TRcN2p51qo6sy7wJdHvL1GkSoJfEKRRa",
  "key25": "jgJnYCCkyUz7FoQHLQCqSApTbPe41Fj4S4nYRD32snWtwKYvMq9nxZAXyeVbzws6bfTuhD6cqQuSuhfwXugiRxV",
  "key26": "121q3kbhyWb33TtKRzCYGtHf6zoHnLrduvCjdWGTKMxwZg6xdiv7WBgWm4kBAGNWXW1CvzVASfqSCvT9fYQj19QL",
  "key27": "kjtRj3xCFXSQtyV6nuJc347KqGQzh3W9arhT4iAr72KV8EQbM39pNHC5UFZUkwph3am4umJ2XqAm8cuWeipY12m",
  "key28": "gw1MaUbTcZywwrPdd74aSzvYAF891tQSMnbKLoawWt4MdXff2dmLEvR3zArvaV1e6TedmLQhquYK8mmefSUybd8",
  "key29": "37CrHJTmKoqNwGXyYuj43KTVB6gdkNAZMn6ZYgxX58uoELRYvBMSTFQqcJHP16TCNtRp5MEcgrFU5R98sZqXsCta",
  "key30": "2apE7YC8dZnuYRgSsZw6SEY6H2HJCrvVNZgChv9jJsU65FYF5rR4TGMKNTQxN8JmU53wzkkg94Ga4XJRghjkD2yf",
  "key31": "19izMnVAa5PPN9qDdAg5usDwy1VEqoJsBjgEFaqa8HnpeTEFuPhLjFtnR86CN4bBPaqsKKKsb5aSU7ZhDZ1pzad",
  "key32": "4YXZqta8B58nCdxPGRejZHec8LEJZ2o5PLJQtbGWYL1VcLrsbLbyE99xNxrdfXf9QYG9ypMBdVSDxXFHiq19DA9a",
  "key33": "2VckjwRAwTeyJAX25WsJZqcT2CoXcvAESYvPAHSL5iBXmyhnSogFJq3SaMt8gNdJTeuek2J2GhSLQ47nZj16tfgx"
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
