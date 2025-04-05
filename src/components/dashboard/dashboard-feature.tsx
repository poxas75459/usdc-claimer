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
    "5kH3txnPhJHRnCZjM2FaNDkR8vTnPvPBUE82LEqT9Mg87ohUSbins9x2A2AiaBQQkuGpD5M6JWtyjHQGErzUG6oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qKVZ1qhxPMs3AaRN7SVuj6a8qazkvMZBjkYzdtNKiSpUc5crLXNiKo5aNwzextVBECvjFjjQG6G7EAKo83Lqy5",
  "key1": "4K5Dz3ATW3VWnSfubSCxsHdn64Bdxrv93Ktu186PP93C7JZ5EGRFWU88LQZJrqMCuHQru6YWvpjcqcnmbZ6aZQQi",
  "key2": "NAZ7fVEuHpxUmUZ1APBh4FbwoabUW9LKrvNrJAWU4XiHDF6ToHDoQsRBwRjvqMW62EbAyTP7i38VbDNRJUHctHA",
  "key3": "3Crp6VAUhh55AZuXuwyu1Pnhw9jq8ZjEJFbf33ph3gg3wBsiL7qoVKB81jtrZviPN3g9SArG3Gu1g9NU4B4GhhSc",
  "key4": "2PWGHWdPkakacnUicG4qz21v9yAN2J811BQveDCF5MLPfvcbsbdqgjPHMMEJMDnuAbUJ9XMmjsyHFyiKzGwpXAbV",
  "key5": "4J3UT74CLzKMtdTFxaLkXahomb4GAWxzxseaipdBuV98mcQxPeC9rfKNwmzMBe8EQNSMS2Xqo9tGoSmTSpHpzFLK",
  "key6": "4gEyPqowtsWjpYRza9DHTNXg9V7b63RSJ1dG2mwMmRWaQg3g5R78XiLHzHGVmm9ENjv5XVG8tjjyPRZXdpj71Rc7",
  "key7": "3ZgJ8V9JPtwVDuFQL9e8p4UFjJhL9UAdqLsmL8ZJS3RsoWZ15eFJzhdMeY3rLwiq8pgj5TWN2iSowsuNq65LPwvf",
  "key8": "5L8ywLcCbABZcpHCoYQcCeoRPUFJSVPqpEqKenA3kbqMk1F8wN9tERm5dvhvFvgFj5USJWA6g32jVHLVogD4AUuz",
  "key9": "vUx6zZ4Efz3SZivgCiaxMbJrMVXrXG63kZcRicvbST6JAEwpe82WWUgDxz5imwy26pDhzSDizdy51woTJK44qfJ",
  "key10": "3zXnKgZpCNaaDex8a326hFHqxByg7T1SECzx2yLMdek5wgadhAbs5RqBEP9raN6Bnkump3gjSZDQAe3km5vDcmRn",
  "key11": "628r43XhNNMcEZBSeHbfuBvhFeL7pbKjV56rYGDC2nsmtFUbxnyE964YsNG5xcxDrYN4vLrErvjGbyHT4eUzkydU",
  "key12": "Mr2cSmLQC5sbV1yD524tiCckbW4mDJtrMQ9kENn5NiAzbDUyZoSibBLCvfKc3LwZDcC9ohAfFHRa8awkb4omJwX",
  "key13": "2XFb9p884BNHdBXS8B976SBbbAd8v1YQw5pZy2UQxU3oESquQqfVReAwU5MJWvhezd2Wdzb5bj7zhHZsmaaAQwEs",
  "key14": "A1x4oRqKVonbQRd4oNCAbsLYPxFUHsCsY1Z2ruiNP6xPQz6SYxhDf2aNtZew4TvKUeAhye64yYsU4oA4A9UbcgR",
  "key15": "2bdYrt7471KtsT6KJv84tJu2pJV3opQ97watkBAntw5Bd2zT9zhQfrEujfbx7ef3ekG95xNNc9F8Bd3am2FEh44V",
  "key16": "5H2DWFchSTaUVaaSj7sWXaCEbDAoF5mKYgb7B1YuixuoUVuXExXdE3fQBb4ni94gfA6QMpG9FrMSesWacAwxqVP8",
  "key17": "66Fhb1fekJydqzyZEDtq9exKjwGLGz3JeEAVX7VP79VYTY3BBToNvtnS3YxdyPXRa7uQmUStR8GZ7CEKZBrgA3g1",
  "key18": "5dGXX7og8VNmRgBqJfRK5qqYa6BgiPpXxWacGcLxnY6MuSoLF5Q5nCMWBjjEyB2WFuz5PgmNiVGDY3XDiHTNXt8d",
  "key19": "3WrDaKHU8JCn2Gt4w5QFXHMKCaxePuzrzT9wcy2EeLyZQnGGMinYmohizS7QtiZmiGuCH64wyZ2aik6FepJ1Fw4P",
  "key20": "66m49pGEi5JyhYeWGtQD6yCpxTmUmWLHBv6JmPrmWAwzK38ZKUTn4UDJ2V7inmPrVUnUe7GanzE44FfZMQgrMHnA",
  "key21": "3KFepnjAz7JFCSwfBi5jbY9k1ugfaVFLidhDzWZJUwmpsLBArVhLS7HaNbQ36jWuE32drTXvpeTCNSPAU2Cb9cy2",
  "key22": "rGf5W7hFoRFvPnn1fzeinKxDNT4Sj8z2RMsUmJhvnqjP6wPhBecaGGZeLFosByEznT3HxsSQz96JtUnbMsPTgfg",
  "key23": "56Ts6RrmRAay3ptKf5iP2ZEwF1s76pRjkGebAKNUL16Phm4hmrXobSEFvtKV8Pen9eypUC6omGiHFTgyBnBcvCDH",
  "key24": "2xuRfi6pyrjD1j9PPSx6W21hSMycCk6nzQePw7LKnWpAyhQiegTkN3u1LPmsEkdQVcEmWaTdGUXoSo6xbBzC9PHM",
  "key25": "5ia4rRekTUmf2TmbejpkJNSHJFhaeL7stmn3UGoFtTWUNGa87Sy9QETT3VbETu1hHtDznx8uGznjLZo7qemWpg65",
  "key26": "3nrTcnfqkzAdZVqk967rj6XsDQiYNMVw8TD548xhcbxdMfLkQrFzACuwW1Ya7VjbusEKCcENdjHH1xcivV9MeCd7",
  "key27": "3BeicYV8PpmaQXtwNmagppUxe3TTZUEa7N8BUwJLNoNmuzf6FAeykXakfeHQY4C6HZREzrFvuAbZBnyNDc6irW3x",
  "key28": "4fQcbWT6phwVAU3XtPxPKZARdAyQWecQATJtEhFDdD3sCPQzVVwE9sjWJ9J5Xxv6KKKfvhhPAkTRZbyE2NdSknH7",
  "key29": "2NnD4NHL6wwzLFEn3BUY6aY7ZMaDzeM1T1q4qkxdqCSzL1m5MZeZ5DVLL6zyuiQzcaMnDwZDdpBA9YEKaVAgeqtV",
  "key30": "4sMHDNtcuuCwCAiQSrTJd4QpKaYNcKyY52e1k7biPhwBNwof3AfZDK1F1wmMAR63YHdEXypmCsd2M7eUGSF1YYv7",
  "key31": "2V9Qr8NbUpv8UM8YBDy1xNVd6HKFYXxLmr25LZeV5WthjDpFbv1yB4a7raVqgVh7NZyNJQzqoFRMCj737Ts9NjVK",
  "key32": "26T2aoCBxoDxLRetyEvuRJ6S2paQ4U6kWdE3Azf198FhH8WLBgySba8uSKRkfGZyjN2tJ7y8NGjgjCEnDw9D98PH",
  "key33": "5MRBUnjJgHMdKLU6PWnSt7BukfNbrAHt2xBbBWhQ2a3P1AyLx6N4gFxaQ4A6n1xrd3qPAKJjhPUSV7QEf5xJU6NX",
  "key34": "3TNE88ZmckpY2eyjB2LNp9N7w1g6miJ4fqohKCXiv1HjBbGr7cnhgmUQcNfDmyLn2HunTVtM11gTf3xY4fUCgWWQ",
  "key35": "4HGBgL3qgGPUwq3Dt7PbFsEAbfzyj5QFBx57jharEtJWDBaWxZf91oFctnfRSxgGktwxpyxGgra3zktHqXZ8mSyc"
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
