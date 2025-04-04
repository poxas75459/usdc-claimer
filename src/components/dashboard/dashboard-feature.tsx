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
    "gWXi5Jw3zoKr8r7PwGWCMzNcSMpanH44ac8z4npcJzoiTS9UEP4SzRxfEPJpEcVfPvZoD9SQPczkv4WMrpfb5tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLJd5CvUU5xymLkRbaoZqJZUr3NJrmV2XQQ4tECWDg9MHLteMr6UqARob4HEqSyYV6ijRS1CMSwuazv1svKn3Kb",
  "key1": "4hUnezyJt1vxfyVKqZqwg3zVSiHpbKDCq2YUvDH5kSyMEvLQrZsoaBdia36DxwFE2dbnDXGd4AgW5BmgxXRHDqBd",
  "key2": "3GQKt44YKgrF22knQtYxncDz4qbJ3JJ7gWgbyjNiC4G4BjgcwahCXWuQWMbVz6YHp9eQr4Vcy1RMa3PiXZ5XM2wV",
  "key3": "33Yqry1G5Y3CXEy5Wcmjq4uzrXkHMLjUUAMNCYe7rzW7Jfg4WDMda2yDZgFY1DXALKs5xgixhGLqyAU1q2w4AyuQ",
  "key4": "4E5JTUcRBs75qn2iDDgQPQahxZZHP9GpMjMYwA1CrbXhjmMbDuzXKQ4FKHLNKGw9xCPyS8Wx5yGoQvri967ZVnQz",
  "key5": "5DTXp4xxPEkyanuBQgZNeywAaSbNY5iYQKfCWt5jYbbSAy7bGDBpfYyhjCeDq1wH3oryLfWSLowYUNZQ4ekiQJ6z",
  "key6": "4kPpJi9dLtMcTHASULCW7P44QCMGmkEWrRy3AvHvm2eKfdQVMfNwK5qY5xjf3XMbbd1P6dWzEbccfA4WKqdWEcW",
  "key7": "4BXCKHz7uSHfo19xJgJWZkBb76km9wBEF187tLZLsuD2qtFFc5a42u9aM778dTfpxn7VDhrpCYFPELBgyu114BT",
  "key8": "65asXbpuFrenKvqTzp2TGeACmq2jgaDkz5xa2bdFDToug87g6FMAQEKDdjedyigd3pncm7bYLhqpNFm3erQkfygn",
  "key9": "5UBmjiDQwj74ZkM15q7mipXEHetnxshxGNHFiqu3dfYmCHcP4BtWuSRDMX6CwgpcoUeu6VtWDMEvNrNaxU1zkdFH",
  "key10": "3v5iZH33cbHS3vgg2WWZCynELbe1JQVcZTp7NjYhve2PkPnMPmiEDGHPVzsUea9RwXxEYnsvbd9EV1xyFxs2fS9F",
  "key11": "5982xvxRf4R91J9vF3HSvezAmmVQQzou8HwGD4mcJfWvyDMUFT3iRFhPUXqkC5qPHj1jBLseNPd6kjMmvsVKXQN7",
  "key12": "5jXYddrYaH9XSRYb767GYYNoitBwpYk1kBabaRa7NoddbbskLj1sDdNQbMAgU6q4auZ5ZDJCDyWSVCEmCmA3zcAc",
  "key13": "4XiaNJNaFzYAHXG7PNL6q7eFzibwgswzQ7x4FZpDoFFdSjEpcfGpUhc2e2toBZqvcSdPC3cdHprRK6VHTzWEuVAz",
  "key14": "45A2V7LPehPg7rB3JbU83siZ6cbbmG9sQUoVLVhHUt97S4JTDPy5w1MZjtjJv5fdfHcp3uctSHSVy4Tf1ZBttnfk",
  "key15": "2BYJGKnLybHs1xD74tuirDASyWBpPXfi2a9jTaT3SqY92xZxCz1YHRAyZjgetrarQVh69UrLx7EGSe4mc3dZh3Tn",
  "key16": "4ykbqpbZnspkVT1SMCijnfXfwtKbqXhVf1gsMKqErCFQjzBF2UWwo8yc1wV7FEtrrTJ2vsX4cE4GaarNucv1MP2z",
  "key17": "3tyZVeMobB8kUVHuMVgEBTCi5TTRwbp3YjSWW6LFgucEMEJRzXwZDv9KuwQ3i7Tvsuwu3muFmxQ31pz2TAZqqnst",
  "key18": "4q7JZyCJHHnSk6d3DGzPkQypWduECq95BRcqTgrQpwddoAa73CGevUhT5EZ3cayBeEuViiXg12QRuXVxeTpAeKdw",
  "key19": "4yEGDta72GS4M5hQ2FDV8NxRpteL8F6SYUMRpiBHqMskXpVEtwvVviQuuYCA8Cnznrq8sF8tBjLm47kBRu1gTbDR",
  "key20": "4GGbg6FLfeLeLUxe7h1WNGEUtqMkLdK75KEEAchC37BrqDZpkkbXVrUbm571imFjM2tRUPgHYViGuYcuS2kXiqg4",
  "key21": "3A7UNLe1bXZ1arDr58Ai2tyanmyHSMLcePqhfaE9uQY1oWA3pzU1ttjevxBWqW8b8DFzsLEdeiDjGEPeWZHbgzGv",
  "key22": "kBpfms8N6oHBvv9zKRLeER14SJsK6iD474qPNkgF3LAhm4oCWgML3uFDbtJpQu1mqBcCRjcJMADmLSnXTinKSem",
  "key23": "23R3TvARjfhvhcQcw8XrTcHFEtRXtPncCVwKX3N3eZGmT6khFggTWwLMhPjq9b8hJUZdJu5oXg3uopbFPd5kpsjw",
  "key24": "4dps98RbBiSTqYGs834Cpy7SkhSmyjhUXd4AvtZkdmyPCVhC6sc6wugeonM8VYV5t5uaTzUJSZWivafRakEfcGBc",
  "key25": "5XDfMPsXPhG2yt9JNrWbiyaPD1wXFuGS6BZ14hBaRmD5L32cEpCswfBgGpGmp5dZgJ6b8LKif9uy14rH1za5S1wj",
  "key26": "5G78y37Ldws3u6bpguxrfqJtSDBycw8UgD6AkyyJEPxirDtTgMgJvRg7S4QcbXejGu6X6iXqd2kPz3qB2ghriC8q",
  "key27": "kcauDXLvW2QztFmhh35i1j97ZZE1c6QVFwDrFt3QkrBHZ9K1BupRCweGVE69Ah5Zq7wDQszq9k3HW95hda11bLY",
  "key28": "21VT1j6m9UTu5UWJNQD3wTQbbQ3dcai1WuBd93tWiXwRcDi9bhL3RAVWCZ8w4zxrRbUZpt1nAf5uyjgNvZWtXoKa",
  "key29": "5cL4aQu66Kmbf8aoQ6o5rtnvGQJ4QjSyFXjw9v7pid39fgudKQDaKY1kuAm6XrdQyvpRzWbWU8TyDv9dWk9fGqUi",
  "key30": "61Ps66uWAiEwPzzDwayEpSxHJw3ngUQ6oXCkLhv5cKrQ3bwzXq6FiegB6RA6ZSpszxPftNciX9U33we1KDDNZcRu",
  "key31": "5JjLvDZ6bPWXpZXwYoCXE5C9sbMWWKuawr8rCz9yTV3eEiE2yQNAqrCDekHivzbPmXobnFNzTgXtMiWGTNssitY6",
  "key32": "2QERdvSo2q6m1cNdFkZDep87rwBYbAREhRMbcGSYQ2gW2WEGKuyycvhd9SnGdSQxpkPyhMHdWFGtRuPVC9h84EeT",
  "key33": "2u1Wa1LXQad1ZteScBA5NhMasoGb2beLiHxFwuNvxYHciAr8McyzqAAfAtGf95nh8KnnN3Xbn4vDNt5SWD7yXisa",
  "key34": "3bcFfk1zgcEeyvN9s4VyBPR4tyzX8uPTpVbxG2AKVvf2DpJKPAjKgRcM48dLFFF1nQPMXSz5qnRYhusP8WNcCeny",
  "key35": "HZ1jFXGmV418wWDfn8BLonjSwVBvMvib7yjmFLbNQFsggtXNFDYXksyxkQCcDdpMiVnBWFmfzsN1f5Z3fTssP36",
  "key36": "2QxrSzjfv7aVgv9F7dXtuMPVr1Qc5Z62XoC6UXFbHxgPLQw4HVwURfYG8iFdziNdAZohdqgCTmB9B4N7VMA16LUq",
  "key37": "2Zcwqs2k6oKso1Px86YZ5Eg1zsk8hWox7bec9fpc8TBsF1Bdb6ZdPYwRY92RYZGcFvrRE6yTeF9ZAABq6jyTzeZC",
  "key38": "4aR4dzwXnWMMgt1hpEEhfXhnEHYPgFXx3QTUYY14UvxNxsWfrT4LkBb7etNjkzp4emxYucF1ZN1XbDTp6qUtSPRq",
  "key39": "5tToepJnFWrfbvMi8DFW8UcHu3sHgNfes62bVpjHwTzDV7bEidDNwxwWGr4hu8v1tFqUepqmrZqLxomE4c1fx8i3",
  "key40": "4BZsuyYue5uEYV2Ccw2w7euk3AwBkYqVuHk9k8dvhT425Pn9zmYns27M4fVTsdNm9QcxUnRX1qabYtetmnUTAzfe",
  "key41": "59GdPvKYDDfmQHaS8o5mhrZYhvd8oVzavhdbLwdTryWv9o4v3dcYGfBx1k4t5AZQypXkTg7stdNhqK9cLXvJDu7u",
  "key42": "2sVCgqdKHMU8mTBMvJhaywvqVMzjuNRtKUSakmGKNqH4htEu2H3n1dYp45te38ZsBhKZbHqj7w8ufdk5L51TqPye"
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
