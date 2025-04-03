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
    "3tz8kxPvSnaqGuSVwKwF7ohVRbBQD51YsmNkGyFU9NHvkCRa7eGkhkwAbbXNTpcbs26xDFRfGAJTVD6sPggteo6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yeZyB43v6nn3nG39giFJ14AEbwFC6A1rmUQ6ebSTTYiN21mG3JMd7py797MjCN1e2HazpyBAgZkwRPTMeWege1S",
  "key1": "HDca13hpnCZEdH4ZTaA2punUFjFiNRHuHAuqxKSL12GS8WDHJ8yr5Q4pPygCKSQexv4j8E7kb13FtVUW5ivkRyD",
  "key2": "4FPEE6W4P7KBuvsxeA1PBhCfELeoQiQ7RSoVdJV7FtqQ5e5M2vaJM5wEKiAaARMNw4iqFSEXLuDyGr7Jf4xe6qjN",
  "key3": "nkj1s1D2qtB1druwfo1iirNtPcMDu2EGr5LzxAvC82UBu21NbmPs3xU66oZsJSGCTenweRcjeY5gTtKEtYHfUup",
  "key4": "5UGEafNQkq5qioRxvyGjfR8CWmQx8ccBQs6W8wU8a9C9SsYopAEnGyHvzZhH7bXaHDojQWZ5NCCcbQ5fq9xKwz4h",
  "key5": "4Gp8Ahs92m4cWS5xXMxUFJG4pFUwDqT8BdSMYRzm52fAFq8CyRhkb8Jb2JHVAGrqkCzZGgqqGNtE9BX85TJe6vXc",
  "key6": "32gTDh3E4XVMXdQ5LtffW8jJ4YUXjY6AJ3Y7yY7nvdPFFmJT4SNTev5UbJvxTHweCBgNksteVSJ3q7kaZp6g9QS",
  "key7": "4f5Dz7NVjWmLWH44uCHptqBpReYZc9Vo52j6jNUj7xAkV5AZn7r1ffsc8FpiyyZdwyjKFnsHgQ8VvdUBCsou2qux",
  "key8": "3G65VvASzzyvS5iKFH2btSDmq38hZDWG6Qud62iS2MsVYhv1Ywm1ix9SW9JyC89Leu5RMXLTumLc66zK3PC2Qfc2",
  "key9": "5ZAt3o8HkvdAN25Z23hoqiNL1h1smgvPNSGLosWiwxp3dEmGPe8DVNV9yDuxk2dqJLzCXjjmmcQJGtYq9L3kUZRb",
  "key10": "3MQoXuKy6RyYtieokz9hkbmUzMt2m74FsMtyyxu95oMrwdnfFr72A5mSaUjdFmkainjnVU4zVGhyWAYx9iVWaB5o",
  "key11": "5ba7nX91ufBtH3S6E4U4byuF9mJG8gsKhELyikQKePAGvf6KriM924hDLwfnioB5xsNEeS12giVnF45sZQiWKZg7",
  "key12": "2QqwtAQ9YUjuMVT3WSVb8CJW3jFM5hxzfmYreQYzeKKiKXEmVx8X4JxGdF989gjuN4PYrDVzGgPzAse2oLdrkxFw",
  "key13": "2b4WuAeC9Y3qvo1LWw8j4GCFrTz97ZZQZiYksaZsLvDGN3w5fH4moubETJnpSEjkcBwrEsbZmZKLiwLjbhcuwoy3",
  "key14": "31HfxwwY87RC4DfbabkgrKeywHSwQFgQCd9ezCQr5mewQVFqpD4zeXRuA1jGSRrackf1x9U4PZbfDcMCpxxJTsyc",
  "key15": "5WF3RMB8dHPEk98vFgXfTQpikiyQaypZH13wPyMbgBDMUnXmdVAQSuGNK2kADnf1NjNeGJw1c5VskpuiQq6AvXLu",
  "key16": "413DALWCJiaDGJcSdJzmLn85bD6bauC7rTiLC4ybskbsTvXRY3ogZUDT3aN5tzUxQH361gUEg9JDpugGs2K8RN9n",
  "key17": "is2Bg7YyazET4WVbcW8giwBQXJfaN1z526sw12KmqFq3y7bsdLZyLci49AiMry2i97dGNiKkyq2imTRiVqBvGha",
  "key18": "5D4d8AQd6Prd91r5n4rJ5D4AaigxhPoTNHoAHJ6ro7TDbV5cFmLoYY7E2DyJA63cDX1gxYuFGqCE7tLVcnoathq1",
  "key19": "4R5zwALiNHS5EmzXx2BoY7DyNbgnqnKxjbbuTTt8vm2wRNUqeDpgvxGscgHSL4N25DRW9u3ZB9AxH1JJnawMUaK4",
  "key20": "5ubQXeLDzMY5nXoLKWxAa7uQp9unmz5947Qts3QjAbNonpF74NySDtVLxeWhfTKp71a6kzYag7DA9usTQWuvHEk9",
  "key21": "2WEg7avvkoYKgwc7q4TwVQVYwhLxxGfjxtP8kNKX5wBQAjZkMM2phDHj7JCFGHyTinFvUSZT291z7UAkFM2jUSiq",
  "key22": "63fgaK3UpFmsr4QskU7ZVwWwrQ4rgtFxDvdESe1Ht9Ryd5mds42rtezJQwoR4CLPE4oZ1SSLWGjBTuhY7DfgsJLd",
  "key23": "AshV2LCHGBhQmDbavXgzJaosW9rpCjvGtbDzt6iiJYLqeass8rQphLCKGaUdLbhHCQ3Tpo5i38JTZ7jSxN5mqi8",
  "key24": "1dUuD11aBfS7kXfRXtLo7kaAxTKLpjFXnHCMT7BAdfH59svpt5Nwd4KfDxYpERTKxKWx4BpeytkTASWV72LdkxD",
  "key25": "LLDqvgBQMXyLctuBuPyG3LcmLbvpLLfTSra3BZfgH38T6K8TQscuj6mjwiqZqH8dPTm2og5Ly68MxdSNyDdqCS5"
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
