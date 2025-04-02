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
    "22AZoTmcNCFSeMLzjZc5QjNZF6RRvi4UiVK58HBbfK8aG2CJ36iSzYTMvFwAGzCeiu4Hm3SRxHomu7pJjRWoSfMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JASCtFKCjck8vwwRFiewoi9ZqrBpt3ypQLWVvTxxoRfsusn7kKDnJ5eQ34yn1168qFSjwtQHhBUg5mm6urgGTYa",
  "key1": "39vS4GHPby6HfqxF9dkcM6Us7FyQi8B3mDZBpf2DVWkzB78V9K58e7FZYML87tUDoB1cDfZcCMBpQeTYQVY3hLJY",
  "key2": "5WJmGEzKGrKMj7DnmpPUyk55vyTQgAHKBiDcdx9UQ7byQYr3AfPxeNQSPBPpsQCaJQsov2dAYXQpMxE919aRDVdU",
  "key3": "5fXMd4imUXXLh1AUQQdfAb6Lw2LzzXcUYbsfEx2UJiP3wYdhLmsBeb9K4L4s9K3WReKeD34GuEuGwpAtGU6YSvAQ",
  "key4": "3gVuorxxPUpxMWmGfJ9BTYQJMkeDaf5Ph28QbiRWEyzvtwidoig8nmh7w5uaNwj9aCJMxdBDutcRNNMfpiqW62aV",
  "key5": "3xqieKmeiBPyuAn2rKv2BN7ZiorjSEuSn2be8zcFJ8RqxqtQYMPwrkaWtNBjwfqotp95JLu4MouCiCJm7AGPLXnb",
  "key6": "2dTMARSK7omU1CXWCMzMLmVcCj3AiJ8V43QLfFY94Z5gZV49VPZdhVTGW8FEdhDrUSA6fHF6vVTHcpnaZTXg8Mu7",
  "key7": "6419ohX7wiG6xveNxEPSEdE1dSTjkj8H7MdNDG6f2fLHXgb1MyfKp8DinFjAQEeZ1pgbdDYJvmgh1gEUAXswDhdH",
  "key8": "JwXyJbi9mQ8TS7KVAHrpdxfWFuULzHzfGnMKY4GBWz2ZhE93aj1tpXy72gqwAME3QqWSaYEhMUTk1T2vRXGVtKR",
  "key9": "YdWzk6jfb8AFkqvvaTcXnKWctX18zdvWCSyygT5ifuojm448P2sg3QajynkDe7XgU94sSCQnz9RRu1pYPzcdSFb",
  "key10": "Ayjjc9Xx3GM24ZX2A4ELCCfaW6aKFBCyh4RqBXQAH6cGKjaafXkuMTAB8uGmU99N5TcdFD6t7u4FgmoJiJd9oEc",
  "key11": "2TuAk1kiScDVwpdYcyXkyAfySoZ8aZ3qWGuXW9AdLnUGS1PwaKdbah84VJTzEvKqv4CCs2yptG6xB3Bm7teh4Epi",
  "key12": "62mTitYqvyyzEG8JtDL7js6UnoSG72eaqkaNFu9yXjgoV1GtHoJJHHkQfAST2vi2irPXc5AwaRxNxfz7NxmXRbH4",
  "key13": "59Rq9wGJVEgVQkYZcGxKVXf4fmLqXz9dKYuCLdxmVMXpg9Lf3xUqwuTUhPKhiiC2H8CpNUZrqZsaDaxgwqMMS18V",
  "key14": "3bWAJjHZneFVHZdWSCUosmDn4hNJB4J5bkJjKRRSiwzWFeAfM5CuLL4ZC7YY3M7WeUBFn7caZiPpTFn9zxCSfPeu",
  "key15": "4gTFifir4avw3C9Mi59mQgVgf33DUom9NXpmYwy4JGyTVmhuKoFvAAxx5TECv3ZeWVU4ARm7A6hTfK58nn61zEtx",
  "key16": "dzRpdiLtjeM4jCwK5UdogMnC1vQ71zwpKq9VBGux5QTWGRUSyUs88zEXiAeE3XLGpT4P6T87JmDK2ibsb7pSW4V",
  "key17": "TxycX1eRC7JrXJqKAmJDpuSnDXoR8XYBXrki8bVgb8SboGHHQR7zUaYNdccmXDAxpLJ4aqoEW8RahfwVFibD7fS",
  "key18": "3rBLYRXSjdh9PkuhJ5FAAKXXM7ap6odSo7Bv7cyGJdkMXgYF3J6CWLQC2TTiCmXHnVnMfDqzcEbSfoSMpR4XwKLK",
  "key19": "5QtKUYZqRgZNcveCdsxum4qAJwfjFdXwWv98Qy9GnGapiXpVd9HSjY3JXjD4sntVhB1ToeeSKU2FXCTEucK8qiE7",
  "key20": "3d1tUoe9KAmAaR4p7PFXi4cGvcpFpTq92HU2nzmygdSCcqEK4gxymb5u1c4MrmHKJQWHdEXPWDmgoirLPa1j9XRT",
  "key21": "3PDNLLtn2SPGoX6ErgfXa9oZxJfGCjepikEDEE9FhWqA6CTM99wdy3fGa5WaTbKt9nRGXbtQ4Y6z4SPcAQvj5ZXT",
  "key22": "2yYiu7DVb4a41r6amFVffF5CEnogcCUzuBWWjDdcHEnLU2cSq4FRPjg7dujzqptbfChe1mfaMM5thMzxNtPkxAGE",
  "key23": "2VF14MVbZJcS1Sgm693eKtKq88RCBa23f1KdfNEHH2fp4e3wdtELzBpTsK55mx6y474xGXzZkVcUUWx9g1pqKSA4",
  "key24": "61LRjJoiRLy7SDMTammGucpR3dHJ4dMp3xkszf6SFMBAJuf9tExTJwko3aqYzusLMkWMHEWytZTvdGpzKFHDHhTn"
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
