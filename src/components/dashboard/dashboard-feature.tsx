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
    "31vrFCz5j4GBD4UnXtFdBqLJftPSTXARAspwBPTV995E4UjYJCEvW8WVu4WWNe7SNrXeUKaG5EFVh2VasZUo41hN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "596hsFr9HhzzGd45uJpNVS5o7XbjApgH7c1PHvryeQ4FUv81XuRCU9mho9prpGYkm4ckvD4zqJRnAcgwoM9qthS9",
  "key1": "3SCmnG1JX128N6bGaG7AdW3r3ojn8pSaqAYsfQzxDe23w8Dn1d5SDHaMeF8mUmkbKAwG5Bk6KnQT6ZE6ZWAxMoWX",
  "key2": "5EtY4a61TeRc2tjcf4JSYRCvGdWBKWDXws3tLKWpgNoSekdTYH9FhGLvKmbBXchg9HuRBZ1KvvrRakR2ZwoBzMdx",
  "key3": "5295kz6drXhsdy53muTky8Ukeeum85dAKyEvzBsZzbooDAQ76AVQcQKncyqMvUH5XextgdbTM4wcNcWgpixFyEpm",
  "key4": "4myYdZZPTAAP1gBzBXtzLgLcyXwUQYVgPoKyMco4YXeFvHHiixuXun97W5RQ6xTKNGBaY9CgbLdH5cWjRwYurtGG",
  "key5": "348V1ycqz7PagLhMtQLDzW4rLv5DQvoYTwWhVygTrc3LUNX11vxXczUju2UCDrxe3ym99jLF4gphXq7ckCZLvB2R",
  "key6": "2hQPPuggD2giRVYsZ6EFux4TNTDi2TfhHzH6ViYABjnjQkbY2PDdKpn17K3ycboxJucGKFmF3WAptGjhEGtLBDz5",
  "key7": "4vp8U98z4WPZ3SVVK7bFLxrmLHAZ986tPGEA4QsZxdoQH7kfdq3WNqrv4LW7dpnoAaAbHnefNnawcNB7hiHnjrYV",
  "key8": "2hiP93EKRstnNBMcvj4gSfgK4LMGv2wydQ5dFwGEo4VMqFyrpWJTEp5WYPff7EqjnmRcXA879QzUYRXstZZgdcs",
  "key9": "3bUApzBpb4F5wAoWJMZzExT3AAoYfrLXEevfMTiJSY1Gc9Cw43PxAjxYHVCrf7b8dcAf7hL8WxB9E97V2Y4rh2fa",
  "key10": "52oXvXFFsE64RuzJJd4gWvd6EVZNfvUtWaAF643ruTp62iXzTAX7VpnGRCe4Lq9oaHBnREgXFPK6gjzG5e1TwTh8",
  "key11": "3zZeQdKBAB9si9sqqr75bEFnqkks9uFEohJUTa63E6XAH4dgdAgySBT9G2X5QiGFHERPAYHfBYLVMJBNAzffpYCh",
  "key12": "z1TvbFHEvWmE5pgHhDM93QS1ebix1GgJPjA7fAVs7H3zra8c8MRC5vkoBA8oG3QKiNtxr4UYM7RL9fwY5A6xcZM",
  "key13": "gq1FycPThdoZ3afk3qRR1PwfGdPhxb2nBWA5g9dYTQwKZ4sCs3EdCM9np2rDryqGeSMnaQs6TSky99nqMvTrxJL",
  "key14": "3qP8ztgMyQL7AZNrZSkWQfUi7frzcv3fz3vNEv3j2CoG1Y4nuzSYF4qnertVXpSazXMdBnKHZsTZdbu7BiXRtddq",
  "key15": "AekjzunWeyRqy63ZqV3R4PzD3mjkh9ceA84YWR1pWvNMncZvPDauhnC2y5suYBKtyDAGqXUxEGdoTkkAaPLBG6k",
  "key16": "csmiFtaFcuBfTj15zM1VTLGhxBLBBhWFaba25Ch7SvFcc7D4xXeo4RyWzxMBSWB5fSEbZHWjpMZrUhqKfVJcP8P",
  "key17": "3Xm7YQ5h9c7XrBViVBrrGkB8LgtMhbLv8DgT2rXuNPbAVKp1A58UwMhZVLtYNB9YxCeTwDUVi6eBGYV7uQPzpJVH",
  "key18": "hoUdBkX9UQHHJmvEdBgngSj51JXQnuckTT7eyNDM3hDwewbC8hqHX49i7ih5vWRj7DowQqweeAsP7tDiScLGaRq",
  "key19": "2yMtbP7Grmhm1gV8mXbFxXubb15wX8aW1AaiPwkDWjsKTCzjzUNASzJJq7MQBdcaX9qHcTdKurMA5AN7JBTmQSaL",
  "key20": "7rq1SfWm6WACvor5LsYRhzUHJuGpYwBjZGoZdBu7znKEp98GFUN4fSmDmTmcA4moRb3NUU36DGVv4iHunnawjeJ",
  "key21": "5VDyHNfSmHnjP9aBHA9WmzKpQ4s5S2XCtmuKSxFPRFMEuj7qPU5vVQH5BpkRrCMGSxJofweexhwYxseofm9oDRCb",
  "key22": "4gyMoDVxFUKuU7obfcJCUw5MJtmiicpkY81eJWCMCfHTrNCfh9QGzRJRhNw4Rn9B8iCBcLLD5PVkCnpi45v4xapJ",
  "key23": "43hXpTjjVSWyniudmkQxbF3Kx9BetBC4KzjUrXCRCtGwR7NUteauMbNXCKg8wCiUsNMrKcNfUkLvjpfhCfBT5VPJ",
  "key24": "21vfQ2bvvB8qpanP6ojG8JjZ6H3bRixuunwH8nqqPvmEWHKgvXxbDENdSCmCMeLr8fqwuptn1M2DQPGGioARrfX3",
  "key25": "3hVxbSezPkaG2ZuNAgEVYnRG4cjRYS86SSu1ermnocJXv1ncWE8AyTxdAEamb4Gb9bFhvRLVNVenWfagXfhM2kdz",
  "key26": "hWfLUmYcML81gS4wd4EJpAiidYAuQGaaawVKu9CK95eyY5kr2SxpwjgGHLYqPDR9GMfdhyK2TtmYMKE9TY19SdL",
  "key27": "2uVEhNotjXaKxg66s4kPKTGiw9iCzpG16n2qzce2LcrgymgjKP9krpLerzps1snctpuBU9PwTzoun8Qp7uaJka1J",
  "key28": "44romURSwGDrF7FVcQN4z2xQfUgtLGZsZaAQw5pSo8nhL4aNcbXZGnNizAMj7qeV6toCspsVRXmnuhRBAizvyoxs",
  "key29": "57BMeUZao4L3wzBYva48zv4a3aSLj9wLXYVZ1jK8pWmTQjQqWMqhWiE645eorDHSydwWkQeydQb4WdDYVzBnZLs",
  "key30": "3bwFpbK9RtdKeWJkeyukAsgbP8Rpaw3gtwT9iKasqVGh3BQbnDBvTHAznDKXcCk33x1Wx3C3fgP7BYE8UwaX7DHo",
  "key31": "59KqyErNzhHUh8j5cnbvs4czKqnUzWKHSaw5PuDrmW6QiH6u7mprmThSPxDQe8Exp4sepkv9iwHdGexN77tbPTWs",
  "key32": "5MBrMSMDx6UvSqVCS6hBuD2veJeBbBtjnMkmwcif8gW6D1vZaRyGWihsuKpwYsWeZTEpGAx644W61svZAJvFMcGz"
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
