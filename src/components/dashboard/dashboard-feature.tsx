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
    "5nKpNU4L1XYGn8j3gNQTZZfVMjk9nieBPYtMvBNXz4XZZHcrnDnVrcX71fizo17jTu5o2XRCiVAUewKcfT7ST7Hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvCh4jDvpAfyPU1Lt9KetGKNKbqQTzjt3FQWCwNqaSYgFuGTP4nFn51H9raZcf7ovGxucqETB1pjS318wu3jJcD",
  "key1": "BjRyDgQZHDTQWBSWWTpbKFDX8MmUL8fzUBFd8ibtwHcBpyHCUDSdmKLApfQ3X9xkDW3vvEawJHnG1LvFqKvSXzd",
  "key2": "3Zc7JpusJKaotxYTT5CHShQDQ86fhf6Df95j3C8Yx3iNqNnRgi6itPnphA34sgv7iK2LnWDot8eRVwiWbfdvD6kE",
  "key3": "59WyKWqPCG9ktie3XPaqRmjb1VMX38JijDBiXLsPCvFnbCY73WVvJSAHpfD8WZU7852S8PKDnryjegKEzcgtauyU",
  "key4": "3LeX9NpwUc3znCUTfZENUgky2YrYZWXXhSNRwzuJx3z1FNaxxzgEGD1eQuX8ukFj33Z5UtvvFp6gbN8rF7Fwk56p",
  "key5": "5YLkTTqsigFS4oF7AgikJcV6KA41Ve6FaQFtbZ2WpZU5UneVRfmUakipe9thNw9gAUmY14DaTAV6jemDNm3FbDDQ",
  "key6": "YSUVrapjbgN4qsAqe1gNq9DykAWQJCenmgvh2Fid6pKvdTWwvjZ1YAGhnTBrgJB1HgVXof2x8Gbc3GQdbARbHsu",
  "key7": "5YGCz5SUuRxpNVTrVRNtCKtmXuW3PDEE63CVxQcuyXpKQhVhmNdbgZNHwrUbhhKBZhL9zsWA9AjVrUWkxJAwViWr",
  "key8": "5gHnJobGcdD4TRjCZbzmKs2H7vFzUoNyvMRbXcGszMJ4hWASd8iXDAZ2iizNrmkQHE1CuoEqtFBgyBbc5qksZ1Tg",
  "key9": "pLsTWz6r4KKjwz3BrmkjAYtH7wwDYi31mWNuXEqeLbokv5tVG7YuHRUEDEWVU1ggzDLruaqmkKGzuybYSP8CLBa",
  "key10": "2bpfbnTUyd8y7r2xw7Ptar4RawPhcKecnJ28jQyT4cFTJPKiL9hfkZ5WmLtYiQ7bcXpybswm7TVTeo5o94UxJEM9",
  "key11": "4injbXjqVwpUYX6SQG3aCrH1AQSPcegKDYqm6rB6s3qeKNXyiUDgaySdFpXAMGxXpRtBVU1wmhkDWbbjTzXAH9qD",
  "key12": "4R1ibmDKgeihQw4ST4BF5TWuNZKqLbo3wyw6BBNwhgtcL6pUyp58ff3uUSXbrJQ541xTvd6gUDbrc8YJofGogr2s",
  "key13": "Y7SNiSKzxCxGPgX7LVXfuKpgMhmKV1HHgVZtg5WuRf9ieeXzhSnvh7rkZGaiqw785eA7UaZoZfFDfiKQJ6pvxpw",
  "key14": "4kZDup8tqx753Fv2TZEyQeLDNNkNUhTisg3ZWKh2rvnBaYL7JVvxuZpMqHnNewpdmmKwRUQJQpoeF37agPEqmw6z",
  "key15": "3q1wyCVF7kZ7wBR3G6z8bBGMzLMtLahGBFzbg3Ym2gKuzMKSevvpYnPKcNiSb4gdYvzsxVqsn7RxrCKydNvMefL4",
  "key16": "4efB4DL7JSbMEfb5AA3VzKYsC3BDgEHnDdwnHRXSUVSCUzfpYcxrU9q1pRf1qB5hrwHhSVnQYA2QLrc1fmTMozuu",
  "key17": "NmyuVCxq57bqh5R3fPK4GyThgPfGCcUdkmZoSXNbstnPC9sU1h2sSiJZ4GTFsv7nsNRSNLykjfJrtkdzDz7RbBx",
  "key18": "gnWtiJ9cBjTgmRJiLRF5cPzF1pMSfdhXWHG2xE7BgNRr22F9VtLPZ5nQamtHSAJ8KboiWBczqjJnKBSmQj7YmiA",
  "key19": "4oyKABMvKLWZEo16mSAuLqMymVsLVeL8Nt5Sy53tnJW9XeEgPYqBXVkgVEsXBY8y9dGp3PBW8FhwiveN2Nm4AgGD",
  "key20": "3zhUpfvAvKh1zmoY2jteXwx5UGrq2CN3VKneXHEob4Gpt7QZP6tGdtfaQrESFzyakEoTPbB2Bp3h9R4HKZ9j7NRq",
  "key21": "22sUCx3UD2UBYKakT23mdkSyP998gafAf4ZV8B1LC5xzS2EJXGgF9LnEPhmC656cwJvrDDauNrhFHVcggNyPd9Q3",
  "key22": "5td5UDbf7NtUAXe9AueznLvvfBd1SP5ipwempu6N8WbDVwCyp3WGNLbmW4m1e5TAKy8tjnmCLuAqFW2J1LSVNxrN",
  "key23": "4u1kAtu27vzhw3wrFu5CFkA9xUtzMqR9We6y8HuzA8wE2C43XdKuYoVvfFEtPYQVBrMFWQw6NECz1FLB7q8zDR3X",
  "key24": "jcTZN2Qmuv9AurS5snVBvHmZQT2hMorVcH9SeTo3Qv8xXsuaH7q6MpaE2uTpq7bnKxmGENJAnkXTbwTUA7Jxd74",
  "key25": "3rzqSTE2KBLeVXYfn6nTzjacHVZ5sm6kPgxpofgPtYqW6HD42ND3g5iAWuojwYaY6AVBFomo6NLxPohhLUQcbcLm",
  "key26": "3q7FFbRwDMhDiwo4hYBwcNoqXGZBVnHXY4dWaCdF852dL1R8L9YeSk8VduQSNawwhxcEBoGWtrc5CE1MXXereQqN",
  "key27": "5wm2Aayj1QBJfTTz9DMv3Eg3FBiMus2bTr4Nd4WFDcyGAX8TYqSaYWomoJ3skBpHqU23etLx1gbJj1xLN2ZquQgA",
  "key28": "4BtEt7nzT5nbzqM1WSxoVDvnZjLwLusHLPcZG9S2AqxQnJhqZcB1YDrAoKmoHPcfFzXQFxmjstpWApdGJamnSseA",
  "key29": "5UbX4Gk7iiLCu594gu6Pb3Zjt78kTfu856JdShGimoPEXE9afJBcw978JgJv7JuZzLawqaob5S2aerovcaM9VHJQ",
  "key30": "2eqWxNg45Q4yDhwAXAkoHTWppkh6JzTZdC6M3Ak1Ld33BYKurnGMK1pPWyNUqYAMH5cyrA2qQnwsbRzEz8zoqgTt",
  "key31": "29ZrUMAP8iM4NzVuNoaqQMiiEZJCUn1mFcxPU9c9LSpZePayR4RTCqgADrHhaano1BoPfMavqVoWU8xEnvS6kKKu"
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
