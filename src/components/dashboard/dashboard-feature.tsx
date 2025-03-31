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
    "2arfbyph1mH15uzUeBwHjzYqDBVr4ovXc4BdbF3tdmkTQzNSAPwjXyQ61ic3jqhmKLmzTbhEdMo6M8PMKGEzFDe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvcX2y7H5Sc5PxjsoMDmLYpsFLPHPVoiyhoZ1HSD9zi9CtzRAggV91yopHe6ULgbdYJiudNyC777MKBjWnKnxPf",
  "key1": "5JvxK7TZVpPbNBhhf37n3LEchUZegaG3R5qBavQU3JGd2zW3tCsPFUNAhphRwA8LDU3XATCBYQzmZi6Swypjtbui",
  "key2": "5q3nKS7mCeNV29wNVPTHicQhoNw1GjCXnERrrzjAKq2wD3it4MDFZXW4zY9b1Bx8uYAByzhG2GNaJ7kFR1vWoexp",
  "key3": "4zJCyUErKxX3QCx9SJiYuYcEgMA8kueYntkBJmBUQaWZqaMX841ZSYizEHmYc8ZZVMqXJa2xitMLm4FrjzeBZ7hd",
  "key4": "4wH6SceY6FoxY3p9MUNLPe6zGd8j5v9wtdkbURgEYazDCcUNKVG3piT9gT4DuqbyNZVGmZtRUw7oTiTALBMWmhuM",
  "key5": "5Dk9pNtmVNJTippQEE5Y2aoVd8qAbf52tVCvHJYsfSpTPcPyU2ovvsRTmhKV5w9L9rJAYqysKNkFHxyd1h2wwg6G",
  "key6": "v3SWqg2qheMbxsMyEvc4nvKECaEZXCe4zSDdwcST5LzpFi7DofBEadZ5fghj4tyQTNVcKCPgKrrTtDyVwVCtdV1",
  "key7": "eKaBV3UgwiatnsANWDUesJsByeQWBdNazykpbSzjF2vmNXk7HDG3FtzHGQC53DhWhuFiBYq8U5shCFtQczx9HKJ",
  "key8": "KT6mCaY1DDnexV9LVobKaxU6kahtP9UAdDRpKV2g8E9yvv4LDSCNQKPpZFmPRw57pwMhMGeFKEFfQpJUyXSPuYh",
  "key9": "6wbLdE5MB5Z3rYaDwj1yRhoAyN6F957Ta5CCMhD5DLySLyrXMywst28hjRUz2XJVttMkaLRM95ze288nQyArYjh",
  "key10": "4YWfb2FC2MxSMcFRGc7jaKPTL7DJkav8pP1uqtkygDvDHiqtRtAtBZvGPpkiTToKMskfrVfeDTj3E6sw4XbYK5vY",
  "key11": "5ehpry5UmAZXftmkAYkjB6z2N5GiyBHDES8r7SaK9xov1QPHXa5VcPxnBcJAxbaa8QvvF1dBQVCGMMLFo7FfN8AP",
  "key12": "4WBtxetE7Vhz1Fx3TNitEJinoaiecBsM8JHYAuaaBTzteayMg5i6wQkpuHJDfEEJhTnwkyFTMZW228N73dJdcAvf",
  "key13": "5FZreDy5N6PE4KyDTLDXTJqMiEPkvMA7SZc1SY9Pg4XUtqz2SwNzG2Anj6S4964gyKjEHEh8pVbTdfDCrUCdAohp",
  "key14": "422fVmPjCuqCXErVXLw3BTXhGKm6MWqmovPse75dqKvP1HNNqApj9tt7UjyH3V9cN3SWtmVsYJvMGfd1p6mQLE45",
  "key15": "2wWjdK3oeaUNcJTe9GWTyXgLXcUARjVyDrA7EsTqTSas8ZEMmBGzXdke6jYchmadYRB2MWmHFUgJk1gLWXxjCe9K",
  "key16": "3bFcvgMRH9hZR82UtMFofQtVWrbT3qLaZ1DFR6vtmsE7jBmE6Ct9FCxN82WVDhjVTuwuyGji2fUzJHNk8dWWk3re",
  "key17": "RJV6uNVrtf8uvhUTn9VW8ct8tQNgqdrCiLkDd2vb5JogxyouGrCWbu6uisuAa5Ne2J2ZoH4hSHBtNkzPJe15fPk",
  "key18": "4jJtfYo1BQEBeD8NX6km7GhstneqybXBhe6UFPcHkG59RceM911EHyq2TaDCyQmots4XK3MK1TT2QNgiyKgqvpjb",
  "key19": "2Rfrh5TuV8skZNU4NYMgXoNqxQ6jwWQb49zPqpQZowkq5H99JW6YaF86nP6TbmUhhbPdZAPGc9fSqhPgSMdA6oGg",
  "key20": "2or9kb7gPUf8jbB8qYERcg5FBfPqvwbmbWsG3MF9JwekL6L7o6SzrCh6ActSSrDYexvpMwAU9hjVYsJhJAzx2UHV",
  "key21": "2WLaGgRt5Htp4HPZGKLDLA8hYC9uRDRJRkM8HcDC2b3S69gj6EvVvyUqHznAFeb2nfewn2WWDmUNqSzgrgVLu49i",
  "key22": "3VxxXxsdk6cifwDzKxic8VUGrkx81zZ1Py8PuAfMdqAFv4WgeWJW3gXTG8Fv6RahqvQwBy2YEzmjFWp1fzxFi5yL",
  "key23": "4yQRg6kGhMQJN4P3v9PSatnJ7M3KyYpsx7u3WZV2b33TCN4XHWiATjxcr5qX3cYF19uwDS2ydVkhM7XZPyG6Wbyj",
  "key24": "3wEugbyfomxV63eqixtxLaiamyqjjvcdYhRtpwZi6wQYkjNVSSa6UXhkdfRwxa9KBTJGhjDk7xBR82S7yfxzd7v3",
  "key25": "UrLfwr5Zg29tdT5SogK9ScmW1nrz72jUHNwcwQLcQbuJQMSypaKamEMDwXYg7barBNgAVxejT5dyvNi9gsonYcx",
  "key26": "26XJUGWcJkzG13BbNmAUvYYsUHBhjaP2isog6ZDZLGg162bFTyTGzCooDCx4krhv3ExiQoQJoSKyHDvSoDegUL36",
  "key27": "58YULxdj8SADFwvS9gGe6uax69MvJTR1ZrZaLkGfCDvpT8Z2W5JaZKFyRDjYHEvNwwqc1zZcdtdqMmiotfEURMNW",
  "key28": "2wLUzRKTo3gDJdfiapw81JSgbSwBrAVpoJuu4s8eZcuTSHPuXfRhGt51vz8qR2U26MQhLm4JETVXXvwWY4FRECL4",
  "key29": "FuBVHH9raLSGg4JGYhaLLHwvKZYQMAswBkuLcWvC9tKjwuc1Hf4A4MhAAhsDokMzMUKM8LXJkNTrwGhLvto9Pxz"
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
