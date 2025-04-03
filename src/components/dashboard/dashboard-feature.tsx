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
    "3LEN4TcJFCeec6nfjrfdUCvxEvTzTxKuUxWbkLp5BMwAYzZap3vWNouF1o9eCUauwemsVA1yeurVCAkNTAGj3gP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUi96tVbrasfytFjQHJo34BVJ9kt18EMshqhZMaT47HdRbhApbvWdqFM35fsddvwkEuZTSydP9KzUbVv7aYXSqN",
  "key1": "2QZtNg69o21Np6ViJsZLRjjNzDR4dMe6rFnQHgGq4Bdf9xb5SEYABZyFxziEiXYw2jkeLBojYmgMd9kNLMAmZthK",
  "key2": "4eeMDBjdEovLR5JHr9wiEGd53HtzKjF1zci2fR5NnW5oypg4hghiNZYU98opsfkgsL2himYaGusMKiS29P4u6sez",
  "key3": "2ZP9tFa62pDAKDfdNvt6HeZykdNhxG7ZKbjGLPbhfqcWvUoZPt5cbsiuViS1DdQxZGgWboQe3zZZfsHpnoVeya6R",
  "key4": "2JpQibEqWe1VWio6aBiiB25kAKX6rtkaC6swYuVwGKv83JtUyzUgvvuhXCE5L6w3npvfJARga5oQtzR5fZ3bdvec",
  "key5": "3KnWvv5Yi18JKYMjxzLYW1Ep8C5TQCZXDtA1TtsrFCRaz4nxTfoHRVAY6HrPaQD8P8XYKmjDLdGx4J1jgJhVD5UU",
  "key6": "whNUvMY79TWvgNXZ4JiraEycVt3fFgY97sXGTu2hBkenEkMs9quRdLPkkSgoMyDqT7uzgHfyjkWioMUYeNRovv1",
  "key7": "3jmntwtGV2nX1rshRevPUBrpmKsKoo6xW6vnaFdZoFiXPLTNenpRvBVAAGov4zpncJ7L2NTmw5nam66Q5e8Sgppk",
  "key8": "4yt5rmqgth5Aru3HWZYWrN5y6TGkD7o7AbkkkrbiyjQToT88PKQtuEzpcchtGdSBTj3yQSCMucEc4ZH4m9z5J261",
  "key9": "4Bx7kD4ck6WkyJ7H5Y6uJbKWJB6BK9itm1hqi8eAp6JXAM4Gi89pB4PrCxFp9MJETaba5vQDkSa3ZibBiFuPN4Yo",
  "key10": "4N6mfYC2HjhNriUshNJe4eXfChvexqkGGkaDVhKdJtMuwJ4Erwp6m1Ngxw5CkwXnnoJCoxCduKinuBUUAN61j7cf",
  "key11": "5RvWY9mXzb5B2UCn1hqKQpU4CZ3A8rTcYq1rFRyFkNuUXJMo7YMT4DBUkdWZXofbpJPjy2UAw4qVniBczL5siKoy",
  "key12": "2P75NMqiCDWModqXzHoLkiobZNsqPbVs5XroGd5NtEX1xUjGgHkxLvSRJ3DConsiyB3a7jcey3iQe1dmhmzUMxmR",
  "key13": "5JM4cNmKMZsa88ktFFguyK74iWSNvhRjwjPnNftVrbdxt9ncxg5sVcMJ5CT9Q353ybf83BT5pJ2mnbc69Zj2KxJJ",
  "key14": "Nw2vebYph5GcBH8cEsegSwKxZPNCxrTtkVGHXRE5wZMAmuMqVk7aRWr96vYZiUBcWxWon87osBDCxxVnaAsA6h7",
  "key15": "4oUZPFQkCYKRTjB2M3behKk7JRqhj9e8STdGy67Rb3kgZy5xUjC3QLM6mJ91157V6Zw5vMQr7w9pt4sHZyJ6RUaY",
  "key16": "5Sjb1sSvCMZTaq71vMy2rrme81SCfe6NP2b6W984NLgpjX1q5JfAkW7K3gaQBzPU1GDG7P6x7Daat2Pn29WNFt2v",
  "key17": "55awc6Aauf3Kj2hyRE2apRx36mVePCtaxDA2eVVtm6AtpDks4X8js46hmoRKtzJUnbVD5NM2E7pFSZGFvKmsZziX",
  "key18": "4N973sJNJempFMq1HRbsQEFKmPBNP4B96AWJc1w1LSb8JFW8Xxb3rWyt24qaQBWinykL36KyW1TCZ72wA3DFSmup",
  "key19": "5rS1dhS28i6waoiHa7SYXLFbS3zXMSZAYJVL2zLoJiWnpKKbEyhnjb8LYFeZnZzBZ5os8JbjiCRndy7nNAPFffCT",
  "key20": "5YdwL4nqrktdo5C7G8MbTZcHprNjKz1TXejT1evT4i8T1kvKCYZ6Dq9awjTNendsU65XdqLcK21puqybxGEooMET",
  "key21": "3FcvAmctZmkZpDCoEJHpcGamCJKSky8CftUXJJ5oEyRnavpGfUHfVvEU7NS6ccyUyCJGdoSTMxQuNo6udwrQHrVN",
  "key22": "3svUaWoAaAfRngi7vsNke16Pii3xbLFDG5EF5QLBYC1JXstcZ3CaFLkitK9jY63x3rxk1WzfeKMkEZ4NpC1WCWQg",
  "key23": "EXFdxzGBMWNn6UDueA6XsyxZgDrKXB38i1o6kH2Guq11MS7LZqvDiCJ1wCVWTAcfBBbttdhPKLYAM2GWk1jws8E",
  "key24": "34z7zM8Pwgti8RGgQUMgYDBhoFp5usL6HteXEb3hcULnbM1qVUMcezmSrVBW3NG2rMxTxRzTuYC287wffRWe7oJP",
  "key25": "2HdkRDZcMpMb9TqGZjzQeGhrXCm1nGvDpjNm6vkmJExW4Con2iUVA1JBQQ6B56BQ4QbLjae8yGAxPnLDU1dXoRhu",
  "key26": "4wXyyMxfMD7YPq6QegTwknwWZuTEwq6vSZUwHNkBSXdEBDb7NXidAzutRo6TQeo1kp1iKXfrE4GwFgfCjmS1VK2u",
  "key27": "56HkqBwH3tkrhCi74WQr5UJdYpe3JGG5PNYhkjdML7wTcUFpEd2a4zwNeQbuPNAwPvaUqNUJaWtxiTtY4FCWsypD",
  "key28": "5chfSjB2pj5ii5sQuKkU1BAWYsZmU6V9fayKgMESBRaVe3TGtjNDoTGZZxLD3zi9fsYfRgPyZnjszFV97bb5g161",
  "key29": "2cRddK1JkLdGYsiED1Vfn4Y9YrgqhWXtASrysh7g2QUUTwxcBXrhXAzhXccZTyVXs4uZ3bFTxWuyRvzN9pQbpGTH",
  "key30": "8qxiTL4UdBfJ9EYWc3Qo3Bqb6jBfgzL7m2MicLNkie7cAsuWvbxV7Kx3ZjqPUgqFgbyfm6vrK8ikqucE2ksSd6H",
  "key31": "4Le63mMZb4cvhxKeGjF2G4cGVQ4BrHZbWRQB7J4bmpy8xKUTq6su88ssDk9wBh7ZuGj1vsNuPsnz4fBNgfL3CMtX",
  "key32": "nJKy194p9mRXagDutJ4A8HsZJh4bsUbJvtftqAfczgPMtVvMtmJELADFSPVENwGwRkaazPJTBNbAQfsPXcPKfQA",
  "key33": "5cpXenhfbMR35cg1a5t9rLNyh4wQVj6vaUYJSSvMjh5Z978JtqoaeM2f58cVtUgABPC83a1RYDnQZTWPKATWXyyP",
  "key34": "2huFg9cdps5rHXXWpebNJEG8S8gibyw56bUjRUMAiK18cFt7vnia21wJ6eEzM7tsUGAdxQvwKRTQ5aKvuFPE9aLk",
  "key35": "4bSexvtfDfG6sy1tZyzYCdswKi1MWJaTksvJ5emwCxvCHBZNyRxSz6ufjsjMyvWkoqAJk1cdNEL6JKKgWXCCnZxL",
  "key36": "37SbygEiZLkeUSBJk1JwEv2PXJAan4eDTBgf1NwRXc1Wti79ZN2X7FvK19s6UqH9fLMB8WXuEUHat1bGNSQSmqPg",
  "key37": "45C2ChQx2SUMP77begmArgnLi6niGHzKyE6xRxPcm4YTCQbvFb3SECbvEqqporsKAZ8FhCsd41iGVcwS6iiQj6oz",
  "key38": "3fX87vcLh9dZdrr1qrt3E5u8D3XvrPc3PuCzarUhf7gghVsCcx4qZaDbjd1Cnn66xgMBrsr64guDFRbWMM8oUjJK",
  "key39": "5K4aQ4DpQS72bEuoM9swRXfCn8uNZevQgNhFsYX4QnjmGmSkNMV5fJfKhkC1BAHJ8ZEZU1uC3XuGdg1xsJhfqbmp",
  "key40": "55BZQJTCnGetHQM5za8iFK2e4hAf4mynacm4RSDEskaRAnTBiS85qUYAgUvZvPNTz8dFLqcRR748mZHpfR2KViei",
  "key41": "4dLNgMf7K1CQrAQX527V3gypzfKVg1YRU85yqAWwRemRTM3LREk4MbbfnbEqB1MkqWarzEr12jc6b6zzymaL9LV1",
  "key42": "5GfN1Wgap5RL4peTdx5pwf4ndGdyjEj5E5wLzCexEPD9ihSJVwkkPBxboLRzQFu3zZq3qaLVctq53TbSKBNxNh3f",
  "key43": "5Wz4BXvQgeMt6C73rnm6A5oFN89Vw7Tmbr4Jxh8vJpMRHdcB3bHRq3zRXnFajP2whDtdWoJ7KfNJg2DqSusASxWR",
  "key44": "fBCj9XCp3iBQbfVdWV8i7fegD41kg8SiCAGks2iEN1LcGA5cMzfqKmFGNMqVXkUEbvkaCbsvppzgfUxvfJvw6wU",
  "key45": "3GKqhG81M9q5u8sTqNvhoJ5zgyiLtjjmwSuS534xzC6Xj7E6oyc1xxfY7eRM3QQbDL6UcxnNHwnRMKSYVzNbiQmJ",
  "key46": "mqMmoTKhn3pMKYh2UhEpTWHkMjF6T2JxTPGWoT7uGbUZNgBMExwm5s7VXatMx3XcZ6kyfbquDWtRAAsohQ5wfo3",
  "key47": "d3ZqmC4euWLUYeofuuvmwR8HkTUPucTV77hq68RKR4LrnUiZFiSC32m6n4ePCnM1t2J9ecKswNJKQ9CQs5tNFXg"
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
