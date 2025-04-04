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
    "4tCmZ5usdAuMuAZQSZYwX1qoc5PAoBnH3WfEiuQPs1yoPfzW7LRngiF1wTR5qqAFTJX82vsZ7AL7rA62bF76acU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMU7ZLxV27bHEjCDhcf3UquHE86W1BSzZ7S28JjrBMbF9AAGv2EXrBHC6mjRADzYSnxkwzm4DosWRXiKvJYbjKY",
  "key1": "HEGTKxQjaN8eAHN1E5Re53qrTdGgRw5boeUENdgLqTL6SKJbZ62jYKUm2wgXcAqNWGBEqPbUGB79Xyyf47wLd6D",
  "key2": "ufok3WyBdXdoyPVgbsPh5FLC61r8G6K9Nq87zASFFkFeEoFyojWnV8JypLGGtj23tNfJktNTHXJck1HqJu613jq",
  "key3": "5SqmTaYxeJiEFARk1oci4M9YGt1VT4QB6mhC2r2vgk2eu5eTVUw6hQZpLLNjBz4MSqXJawP3ojMxVJcg3MybFnSZ",
  "key4": "4h5An1xtPnnwzzS7bHEWNCFWQXYeBqeCqu1tAvxz92LAPbkhuuZ5HjoKD3pRUDSSwP1bRHiuF2H7AjNmywNUeUzS",
  "key5": "4E6isZeo7ATdnnezwZbXFLwmmK456pgQkCgrwdDYv7jqjdQr9zKPHJTar9VmkTpBfdMREqCF2u97MQZVRH8pwGTF",
  "key6": "5km8Qta8gjuoMdHeVpuwu8AY5yxKcgYcYSVtYFrb8a3yTkaBk9dF5k1nvaa6TYkWd1dbdquzQTw4tvbSTj9Am3Ep",
  "key7": "3E6Rk62jDAZjVNAyMLTijYgy4UkddjbrBpthHErBqmy9YtG9YYchrFkujeghu7ekgJyAiAzwkJi1jrDHsB4gDbcP",
  "key8": "3xjyP6Zyx2D2qLtyfkqXa85dRpxrTnC8QV4JugR2wCNoZ4p9uhATrMEZdpwGrbUfBHFkBx7ZhegWvmoxGoT7vqk6",
  "key9": "56r558LLfTF9wFk6BAAMxR52uv2FU9G5pfRvKwfdqj5ucEUXWv3MCGYNMgysx98MDyGauDbuzzQyA4kbZwCUMZ8k",
  "key10": "cmTvBKkwZxmgu3qiyUXADJy4N7gmzVsC2QixQ2gHxg9hzpeMaPasXph4P6wxGsSffxvLcCfQf6TczVLtR7Zv4WG",
  "key11": "2V9jTiCaqFyfcGFEZpyVT597gssfjYtcGNiF5xeZSXWg9fzftMjWG9PwfLyU12tzseKgt9dpJH6itrA5g2CXdHGv",
  "key12": "3LJSV7SRjFTxAQXmZpPQ1AzGK3ojuViAqTTBPHGsFhdD7SFLe9xwSDkLCpY8R3GttzFYUexYXMfoABXcQNdgHW4g",
  "key13": "jDHX6DtTir2RTKXuQ5tY7W4kNVPrPoesvazvWBFNAJJx5aZJdig7vi2uw8obD5FkAYCp56PeyHEyP5aApp8qWGU",
  "key14": "3KM23x7SQUr5rWxF2jTv6rDM2G9pt2jQtDutyHi5tNrWB65AEwGiU1VJ46AUXqAMgWKHXfQdHg91NGPWvoKzNNK7",
  "key15": "5nRQm2MRPbgfdjBwWuG9ubtyUqPfN2EmYVWX7BYJgEf3EJEXEzPhhLg3rL3Y9FJCFvTgRFQ7TreU4VwY7NbQmD2A",
  "key16": "4Z3udyfgpP1AFNumygDJ4yJS4KHRiuQEy64dqgQpUCLwFbSzxbFBoZzbeQEwrkuQLRoJyqNhxFv8xcJgE79oKV8S",
  "key17": "4xHzag7GrBMtAVLRhGPJcGUZGWX36ssUFi4wYTquS99v5ew9fnFcrQfHUHPGgQgMnZMHUKQsXFdt3cV3bBdH5iUm",
  "key18": "xGixEPmPSeDVqz1BKMzFAhd8MxxJmKjpyDQM7trzeRHkGBvxMBPHNTWngXUm4RDJTiAN8qbs39Wy4zTo3S18XrL",
  "key19": "2ejSLqsY5fH1K55S9ohxbVjP2kmwaEMoZhBmeehFfbgmMaZWGZoPCqZcqPjQBg3PRfa6BQhN4j2LTA1tWYzGttMs",
  "key20": "49UF5a7V5E7WaKKnPVpgfAoyoShqcRz2HvVT55WeengRSGfHq3beRtTrGEFZqjsAPL7eu5HNyyCWriZTiZuTsUU8",
  "key21": "LotFfcAKgiJSwa8uMjUjBTzTkQ3jsWt8KXhADcLT3jWysuCxt742ACj5fY3wPLPiRxRQvjeLdKq3EpPiP1jQLU1",
  "key22": "4S8p6ZXFCgTT91WW9JCom3ngC5QfiAW7qGhQcPmNWRHTEDv3BhXadJwJMvw2B1a5BdZwnJJZ4muoCoKsXPmEX8qN",
  "key23": "24iVW1yoUsgJRGPDmByEB85F689VHGfmARJhnXk7DSvTL1ifkPdb1sGHCoezwBYxBeC87couhQCF3NUTyYi2fC9h",
  "key24": "4kzY31EjUT9JtqoKmyLy6VTA5PHpBGHKGsQL4bQ4EV5RBi9CUAZt4ZGipMrCkfiLRreRkoodW5wDkmG5dDQBrd4R",
  "key25": "4Swo9kaUR7hTd3ToiY2h4QQ8PSDoGd6hqjGtbYB7PxcQMay9oRwjbL1rGrGyBh4g8ZJqZbZXcEraiSmzjg2ySvRz",
  "key26": "EbTd876U1WP8n8Ujopk8HJmQuBYmvm2s8sRvYyVh2tdWGy3QYsFCYbCEc2cn27vF1cG6ZNR2LJbhshk8u4NHM58",
  "key27": "3ad8dw943DMyA1MA3JJ8xWC2UWeDm8U7YoNAKgteJUF4zkyytgrMHAz7ENNzSM7T7KbhmSdn3JtXa73daMue2iee",
  "key28": "4pUqZaFTbKcAMwQoFuyJCfBEeDrCwC13WgPuNjifb4CVa9Gs2dzYe48t7PQm5d1mVsbDnEot19t7z5RWwd3vNyYF",
  "key29": "55FtbMZVgmianSjR8ExyYUnE8XVMKoi5zoKc7WvVs2D8FWmdDDdYz3RAPiCAtBuRQg52RA1M9MkGDNqUW7VYMAdG",
  "key30": "cXLNoh68RTUuAKWss6awjrroeojqS3oHyYkntSp2TZdJMZVbgWracdfQErjwdv6NpRVjLSFV1JPgzKxfGH7jbip",
  "key31": "3ohVczJDdRupScJ276cZE5XNar9tAt9b5HRPCWpXuh22P149DGNmAhdg6UF3fPdVTk99ZksG2MJdM2AJTRE6vAPs",
  "key32": "57sszMs5fpWeJNyopy22jTf7cqhryQRKpbivau5Dyox4P5KWYvwZvRMrjACt6b7shrvjDAVK1KDiwUTT5fWdyTDj",
  "key33": "2U7zxNtbsGzVWQfuKb2fkujgWmbJVbNdc7ogXMFy2YW1JHsG5JhdPsL31QF19r5KYUSAgwQUmWjHVngnLgTE5CZ8",
  "key34": "e6vEmdKyXURYjFfdSk8BdbykxMX6YSyw2NWJ68cBdkwffvDjahx1Cpvcr1egVJLCCCLCJvyuwTqkopXe73oHjGR",
  "key35": "5K8HJEdd2gF4onFqiSH3hr6ansYZLhwYxdWGUf48a9fGyAw8iZg8xWaUSqA4Ep6pK6CarCZgDeYC8uDK4KNaehas",
  "key36": "2NWS7vkGZmWwFvrRUcpQ2kscZVGEMRAMwqVNphSkTBwCEWJzbNX8VX9bFp6T4h8Em3v8nya3WsCC4XT7kar2dmyL",
  "key37": "5oMtss8tG34taT8un9gK8rWSjCUVC7cQv1waFxnVqRp52uwKbQiQEH1tNKSZbTVUQ5vWCmTpEFJaGb732tUj4AZ1",
  "key38": "mLHxXEMTPH8BSBMrbKzdTpmB9msFKPhAuAmPYK6zUPmQsvzHX14v87ka4FysD64JeF81fduKmKh65yUdPZ1dDYC",
  "key39": "kgdbP1RYqBnmXureZMhTFaT7BwWmxXgjZD7yL82SjRWf3bzFbPRaYNd9SNn4RBB3yWfpkERBn3YE7gJaCr56mNB",
  "key40": "5fqLQ5UwV6Ed9taZ5kkxvRf6TukHSH1kcgE5vm9BBktjTc8w561KroEmaEXK9qs1DNTcnktWrRdSHbXhzjGoEj9g",
  "key41": "hAxA3d4HqfEBwqcMamVQJa9ySYefQgPtVcPXig5MhrmHZa7r4iLP342EYqzLGohaingULGpiRseWjooGjiqofoK",
  "key42": "4AEA1g37y2RofqHYbWk9b3vXBVcD74zqBmvCvYiUhF2EpHv1qzPNxPdWmKSyjMeMb2LhL3MAPjNuCt1vDQpV2sm1",
  "key43": "UBX8P5YMNWcYDxk9Pj6LKygfBBjGiFGa64ut1GBrhaep6gZic466y6zwXUEkmRKzqkpuWZP2VwA22evrqZDQVaU",
  "key44": "4Du9biHn5Af64aawjRjpYmFjmqukHcR7qrq8CJhJ6t2WMsrmpqGeVhrxz4BZ5CHB9DaDNNPLoBjQr8VkCNS7Y85L",
  "key45": "2Vkk5xLDMdeed9tgXq5iyQ8WYqFwCmoWKtLfX1YV5NqKJNeETD3N7if9BEFUUEfcFmsi8t6hN2SN8WtxA8gcRVQP",
  "key46": "2afkUEPqDEwA1LghT3C4U9UqYeMZ6G1GPvboTCqYtUEGZD9rF1L6WdvB1972uiuuDNYBK8c8A4RBMEXad6Wa2KuD",
  "key47": "39wqJtXBQb1rKzKHzM5ax19u3azWb11k9XjV9LvkwUoYoG7tTnGveYxifLc3v8woVaxCoMhkLQT7ETS5umhGLfiK",
  "key48": "39Bc6huWsAy7NeG4dmJUQWDRLeYQTVgiKiByKnSdT5zwbJTdPULtBDb1fog7cTP7HDGCnjG2TN1c6Dcf1VobXNHW",
  "key49": "4XyE4oCbRFNYjM9nuAMmxXwukuhEi7xbMK85SJd8UjEjcbMmaJrHDrxcxgEuaULgejSqNqFzutCoV4XiWefFfUaU"
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
