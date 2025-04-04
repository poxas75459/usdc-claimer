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
    "gJSAyNFPzJSSikgJZB9VBaXRc3rWFa6cwkhrvKTKePGeNMqnsuHs2asZxUYfM8DzodGSzQdW91fPNU1McjJFTXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CovHTnRmZRMtZ8573kqUyyCBAcxPwnAPr8Exd74QWLpvyNVf8HH53cNVV9NakxemaZpzkdHnziAtBAiR3ea1PpQ",
  "key1": "36bAaJJqtEZdagJMJgew2StTGbLnQYcCZfHB6Lz9SRKQZzSG4eEpNEW5tRJhLrjChrWhtQFviLTwGubFpZXMyysB",
  "key2": "JkvWZWGSk64SaTFL1mQ5i7fcyYcCBvP2h1ZnFyXY5gyD3G84J2g7PszCUvj8q8qyQ5peNFf4XXX2RBbmCbwSqGM",
  "key3": "5NiRWrsSGzpQwVexq8DNdQLQFm1VSYyhNQwJdenqUPNGSd9PYD1SCfkXNTWgqrfwKhgVdkPj9jxp5Eq4mguLYAeH",
  "key4": "5DemQuDDH4TkNvQS6GUKMYHsWwYbgZgnikdjd5zFVRXZ8c5SAhTG9dT1UwswYVQBq7Ue1VS2Z6zjAJoHrUe6UZNH",
  "key5": "56fMYYoq9b29GZ1Z3rcHATxJQTXQcdU61gfu7rupDnkTGn5ccii5wv63GrBD9ztzmtct5Dc5qwCvcgVwAWDrWJo",
  "key6": "3Kyw6JTNvjEdkJCsAnDkw7ifotRcRdtuvE4BcmH8edTHZu5rW2iXom17a2cUX4qg4R6THv9LFnKhVbeDGfWMdLDg",
  "key7": "4pdqEDup3qQNqtdT9kkGJY3wXmMW6QeA8GxJzUT8UpWt7mqhwXj5sEhGAZcjbvZDKF6bX4kV6kMGkvkRTNGtbq6H",
  "key8": "2od6irPjoMKqkoYsMm51yEe6ZD8Shgru7FWbuXYuSFqExuUmB5hLTZgfRG9YXKCtW7PjDyZV5gxVu5mAqq58ycJf",
  "key9": "3RiKAMkFJutidee3wop99iPQZfYstRw6zM1vo8UAyx8SNWnEf29PDE77E3pp91QVXU8PJFpj6wU3TYxHS3wp2iqe",
  "key10": "EHnJBWDFHdHfhMp3DFoavCpMJbtUFb4HLLdf9QoibFH6Z3588UJwGUzjgx5Y9xbT5hJ9TdohtGquwnZALfigiVy",
  "key11": "55Fxm2QP5Jr8eB8Mb4rEgKQVX9SBtkAiUeBVLCWbJVhzfRPSdQn9exYmHTtde3cho1HV6woEYCFMaTcG7QaWBu8n",
  "key12": "5ZoEojDxQ97FJoWZCmCw3dBLxx2rEXWYaEtwx3Y7osJQ1G5MbYnLiUTvPKwVCCfVGkv2wEHUcykVbrUuGZoLwnmC",
  "key13": "4eWbKJEC5KDBKzURvRm4Utw1BZUPHy1UQ5VhYMNSjJer3VFUfp6cuhakevmGqzCHoTi9ypZYmGzzzBK6SD3gv9La",
  "key14": "4ZZbaTWp7WWZSbRKE89BoWaYzzwd9AAxezj9XTyG7rJmxU5FaoXs5Kx2aG7rvDLaizjzRe8nHeSWu8CuiuwKrnwA",
  "key15": "33C7jbyBUDb1khh1LmcMTa5v3gj2wWffd6APS1a42EFCP4atJmAFZhDbw6QatNHUu8e3WxjpvsbQwxeKjA8DDtSM",
  "key16": "5PhKRUGvUuguEXSGGvJAcr8YHezBFhM7YmmU6LvWKLeHsBodQtmujFCpTqoaFuCwyh23L6pTTzVAwE8nQCccMJsC",
  "key17": "48cDKV2pHvdHhnK5thSPKDdZaaJqT4kowTT4h32WACSxyAsVq3hk3zkSeGpZ8vjDzeuEYow6fyRufpJEeVpv2BcL",
  "key18": "uJzoEtxrZyh9MQhCM1t5wkns4WrckTXEaST1nzF93L2zRfS4ZrRijrtdqGgkH2UnKFSfrScSqJ7jJaWhWriU94E",
  "key19": "2qZJhZWRXFfCnF16yMpBhnievA63nqJ8t242RQFcyahy2hF32PT9sArBk9MSjSyPpoNUBqV4amMNo45nFtUCqXjo",
  "key20": "2o92KC99LSP8xoLsX6HkbAzpKEZtEaqZticLyKu2E25dofvg96wEyn1pYBBRsuguLhMDPRiTLnqhuEn6Nd84qQmA",
  "key21": "3kzBA7MaRaVy9pAYstuheJcbhcQHCChHiVeDMNvicrmZXvLma7sEkPS7hfya1dQ8SxaQFfmZSsdAYfFX4SRFgfDh",
  "key22": "5EG8dfFbQq9t2L2ECZuLmTqAPZnXgyoBNSgPd3Pb5YBsDfkkinaJS6QoUPjfVfuZEMXJvLhqojxcn2jqPiy7Pbpc",
  "key23": "2PtkZV2Tf4xtzeDAjzBQ3WmafPL9F2VETuDeFTd9Yay5K3J3S7FeXcUHHaCQoZTHt2QjR2JvtmDekpdJ8hx4ZHBm",
  "key24": "2qUzfLN3evxaisPMDnCUpwwrnn4nmumLkRHNVLb1HwJsN56rnUydg1PY6rxz1yCQ9xWice8QXXSTnhiwc1rqEm5N",
  "key25": "5EgUiJ3bpB67n4cq7aVtGtVfsYWshGCmiSpSotjSHayZ53zWBuphE5cf94dd6cx2JXdL66wU1KmuK6oXEN1SRdgT",
  "key26": "qHxjDxZCN46vFMcJztkZ7G65XzRzjPyvFhCv1K3stPuhZ1GpmLryaxbUd5Ytq8BSa1rWEcTcTbiWZwxaJc5agvE",
  "key27": "3vzxExG68mLHubkb6ot1roXaMugU1NSady4wwfyDh7AADRg3QFjZYwFvgQ5BGAfu1vZNrmf5KXMjJjnsiez5ftc6",
  "key28": "2YW1YJBrfSAsTafeNtnQA1FtebFbG2sB7okw4U9mL3YRWHhCuCmh1kkZKmQPNKhnqBJBpa7Mmm8eQEw1kqRGDmLA",
  "key29": "3uxQwwcuiAJvpCPGjZTm6gq5uTzwpFZybuLLK8sBSJAH4Fj11SJZYdeEdTsYy7ZVi5mXzq9kMyWNTWR4jRUp4uMh",
  "key30": "y5w1Xck5s2AHheYRw9sNAhRCFJw3WiHBU4hQU8RM1YHoseKeEPW41YAq1Mc7tpur2pg26xAhwUcV1Fpg5yRVK8k",
  "key31": "27AXpLc6ZVHPCJLqTNqwQp1CJdeKxwhpXzNaaRHQwW7RjVLkb5U1gs6tck22hUfh8zcMQdPHiyewHGHM28cATasa",
  "key32": "4euxRqHnqz6z7yzNPvu1BSoYJyffbe6Puk5YEm7rBjczqjyUBFTbBm4Sdg9scn7uvAEF8H8K8B5bZu2q2jK6qzKh",
  "key33": "4ywHw28Pmi6ohXjimqTunNA59oSh5fjW9v6M2tDpkWfSyFo7PZ4wSLhjS9Yxr7wkGdvtP8AaE4Q2nskFj7M7RG1a",
  "key34": "2aKUKcXLWRpvWBTPiuBByqoRo2YKiSCDdNMSZpDPBFNCcjZw1tWk11d4DtmRdYySY8axbqBpCe4GVNwEGzsfdgBJ",
  "key35": "PhZPmQbtxeyYT25MfhfCZcAtYT8JSfSwWCxLsELAzr5qxbTNYozGzdsPPeCFhR4wSpRMNpxrwgKuQexopP44aNb",
  "key36": "S9tkNpPs3rZs8BFgu36xoMvoaguGAmmKQii57ZU1Fn2sxKTwQKzgRJ1E9ydDQeQSNwLbBLtq83ygp1FvT2AdZYu"
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
