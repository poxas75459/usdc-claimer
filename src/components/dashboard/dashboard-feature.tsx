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
    "3U8mBvRTqwnBdPhQKyoqXVxG9HfqKs1n9t9ZdhHAGoqgnSknMuH3xj3NfzaaEaLBLiETkGgZbChM8rm68UHjXWhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24GGvjssBv8A3h1YqFSJx9VLjvyRzUKAcZz9dTwJbYrAb6bQ5LuknFnLkwhThUJ1rtoSjdAh2Gm9YBFLpNRwtpq5",
  "key1": "5oncWY5TLAndkWo7b5Kx4wMBQhVJoU4LZqMv7kYCMns7kxiSaqWMpWJcYeLP98kAYoDG1ZXK2RX6JsTTZUHZzmz8",
  "key2": "4PXRTFgS6nb4tXEXEc3wpXgTYEE9KRZ9zZBGR1bCu8DSZi4HrpnCGycPi8SWv5Th8qWv3HWVKYBJdapjf8fz63g2",
  "key3": "4TYQjzQAEkFLPDoaYyq4ernjoJdWo3GDkcXH3r1TchKCtHgkzcDN5TcqmmHMLWagRoNUvD7uAZwbNBsrbewySE1C",
  "key4": "egVTxrdKdE7kaRF8K1DRY1Rnj3foULQ5jYk6ub1pqz1hFKYeRpWnX1AvVhBseJiCLAssNLVV9PBuMt9MYBhLSBn",
  "key5": "5SGHNr48YGQUQ9bFbfu3pMUwzPXZZPk6bk1pH2GaHBK1ygiqhf4VUvWr9PyvE7VoTV815SqNtzVysMyNzYkn9zY1",
  "key6": "mF4QJG2f2piW33JMw3t3RYzosvGfT2igcf7LBQEdiVfZS58NsWXSvwdNJ5pUtbdzVomj7B8o5tGgLLuJShNLRHf",
  "key7": "5DxJjFhNRhzxgcFuZn8F6gpZZsxjguszXrqDm1gYwvZFfhta6ioW1ErFRVVW3vmvRHbxAgftxH3TcRPueB98wg7Z",
  "key8": "4uUULSSv12HVwR45tpUfptsd1v5jpQw11KVGk4yb8bMBfPEwvNa6G9Cy69VkGGRgLANAxzCuVcGNsqcFUns5V6Za",
  "key9": "36UoeJUcMNTt94CLcokyfiL47qEA82zxLVCH2jZ1BYFuTy7DyaqpCQ1NSMWhA3pSUbsuQVZfFqrMEW8W9QDePw9E",
  "key10": "3z5DP1mSbxcwrfjQhjJv9fQuVByrkeC9wHnZi8XwTqMQaRPyxUnjCUaRCPmWQoz47TpfN55mqygTpJxgpY43Yp7J",
  "key11": "2z8hGp5Ce2mBr4jA5cuJ7T7poPCTjisb4WBbfiRs2mStT29ZUSELax2H7rgyKxygbPE6rKBJuAnmtpBV96JKQGpB",
  "key12": "XF4Vo2D1f8BxDWgecahYXWe3bgk7gLvPboZ95up9czR56mVXwyyZo4f7yAYcSv558pQC9LqdK4Mob7XDHyY2Vys",
  "key13": "3jnff8mM7pyN9kaw7Kb1DsRM4aghyxETxJ8dRYNS7n4Snt6M3UmcZhvuWHagsrAkVFtnubdJFw274fkpKm5fq8zz",
  "key14": "5UFZ3ejAGA7rpcGVBznbE659Znpxv5spmngzcyijbTBTGNH37hB5MRWWKgVZXib7HYZasY3EEvSHErCHRM1Z5YbV",
  "key15": "5nNBa2ECde9PwAmarvqwFKNgAL2qMV5gh45XUm8CJJZZvKv961aLFqqBZvR5XLHugbn9LyV8KjxJvcoF4NSMu1SS",
  "key16": "kpfvmVhqEjC6Uiz2DD7s6DAAZgRZmKTowSDKVmbhW8dLWg8XGpeNzxf6Uw8cm1Ku97nTNmaZwLgLKyNyCqnfP2h",
  "key17": "2T4B1Am914z8Qf23nsqcm47mQSGK1135GU7i9Qfziyn3dgeMRomAsE9PMNQVA4v9DFfHTaE5TnUMVBzgMeNvJj9h",
  "key18": "2SHhGcFvDquoXQqkwRPRu544PGAUnYew8BZzD2XkEZHJnJHX5Rc8UiKpGbSxzqzLUD4PdvxL57d4kvtXpmQhngNT",
  "key19": "dEPhdJGQAEKy1toFH2n4RViNfTE5gG1bteU9oJB9oxf8bpbmoGdyHDg8oUeV8wSHqtRsQQffCK7rhKsd7Td2sGw",
  "key20": "33jVArmWHv3iY54LQwNYMheSSeAeMhRrvFoAM6uJxRAygZAYDhhn7t7LvSiLvc7G5dRVh6CoGyNzuMoxku9hq1VV",
  "key21": "53jyLD7MoRrP97vtbHUkAE8UoXFguSqY8ze71ev1S4Ey212kAxRG82JXUJfyDG8XAYFu8oFf7dRNUSZtKvzZGvxk",
  "key22": "51i5cdPe76oeD3vwhtUdBrqYgyKeCL8q7LuH9fJztVUFCNWkEeuerVhxjUsAKvEpg1k5VTKZ2UPKYLAVTh5fiSgS",
  "key23": "4zY258WU1CDyuoKwGkRNMSs1dBvSKTQ2KVAbvZUAyByMaNBW8jvSkPLLu8sncHVTQJJpR7ccdLpaQcDacfuCeecn",
  "key24": "Qp52jPJnuNPYMndsadZvWugQeQkgh19qEgAp2patLGnuUSFGgWuQEKo1FMZu5kjroiUkmPThLT1H8eEydrgcuh5",
  "key25": "2F8JAuNHks27GssZhxSryB1XX8nDQxEVxQBSv2PsfBF47gQ2kr5ucFhtZ88pBxZEhy8iEkt3hGzDzdmtzKAJvFx4"
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
