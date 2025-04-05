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
    "3nf2pk7JXjomif17ovt3bLhiVmD1rfhbH5P1JYTYDfKTQeWow6X7J53qmadmofUsLVbX9RyFKuPevrHQGhLEniBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfPavoYWHKXgiZ5zkVy8KuR6gcMmJ5EeUzteMzgXhtrDg2vXXyX4h2U7cTWQgHJqNXWBNmbWHUd84UTX9sPyPJr",
  "key1": "4jsUDNHQuSFrQNPe34pqFka36NNnHKKeyLubRCZGbo7ABdRzcdYXT2XbaJcZJKEuVXVQEQPxcgJnSTuhW2w62yXU",
  "key2": "3iXcDH2d8w2dCCsLEz32eC5f43nZVBRRE3deXiofK2gm8kSDN7Z54Nd8VbG6ReiwqCHTQwZiFqAVhQhQC2k3d8oJ",
  "key3": "2QFs4pAp1UjZL5qzMew62LnoUnYnR3PZRcsdWtyPQbN9471VyAc1CZnzHzKtKUJoaJQn633f8mmKEEHU7vLsx2PS",
  "key4": "2reitGuWbK6N5a3gcDru9VxC7KgvHk3KJsgU9uP6UWzjJsBo3RE2ZcyxTn7ouKWdypZUmfTgGy2PEWdtui8esEiH",
  "key5": "45w1ZSgHkn2BxCT9kCxyHn55YKcAPcYEkVv9FZzqy4JwgVfg3prCDNT5zjayUhBkZqq16NbjFfUihfFdnBz4zBaX",
  "key6": "4TV1TcbfTF4HbrCpSLxKui4eYf4yxFTo4XvuwUBqBPfnM9zxi15p2So6m4KvZCvpcMR8wHLp4AfUzGLpDqj3gG4e",
  "key7": "iAh9dGxJbdXtUbypcNvEmrnCvNUjAVo8AuuiLTNtycVktFEXpXQ7HdtVgUKKFDFgy3x3ku5KLzrJh6YUEzniEX6",
  "key8": "3xv17cJdJjX1pwv2E6rcAtHwcaxyK2LSUvqh8gyxoUH5Tjf9izigvZLvyL3xxqB5EvDo1mQ4jbpfW1vNeJWXQakY",
  "key9": "8nEbhfDQYtBie2eKDBzviXRvoPF4Tj9oD892zbzQ3e2mPt3Bu1E3z9TXecwby4WsL3y66WLscQpU9eiRw2FyPC5",
  "key10": "3282VuPE67vuvGTYpXEmpq78wQbNjmPUtB124EhTvA2XLFFafPJSXhdXi9wWM4J4eP7oDTwbVwmzcjWVXd2o2aso",
  "key11": "232fK2BXKQhv6AvgvUwE89zkTK97N3w741UtJC4V1cwYLACYiLdeBdDY5K1sFbn4opryDw67ZAcAQTrzSAyyLUd1",
  "key12": "5pHsxoEXXJfzLXXph1YyPV3Gfh6psPVhQj5Df6uJ2PPQqcwvZbXwC5pv965Jcq1Y6XNwUviNgJdSXBL7ZXqdBnC2",
  "key13": "4pQAZq73p3FEeXaS2sxwvJPPRUXw8MJQiMCVPuuWWffm9odLT6UwuiBSHYAwp6ozHVcxA4ukRFMZBLVo67MQLhD",
  "key14": "45wu3sWZJJU9g3kQA8NvbboX9AhPA5wCkqCaSBxgfF1gK7b9nYB3akNqVBttBMRtwNuHGWnxRw1B995JvpgegjP4",
  "key15": "3W8UVnnUHeAqh4uWCAB4Tu3W2B7oJEgDiHU7hwtvBukpHn2FmgncoGQwxtu3FuTSgnuQ7Wuib6FjA9mbfkmRNsT5",
  "key16": "FEzS2bnmXt7mhvtsGBbJ5cqLsHyBAMiZcVxN4YmFj115iPVTKWgZ5iUGGyaDS6EcSwwbfkWkVhwb9WiDp2QF918",
  "key17": "3ir18cxAtUZhVomHDFMAMC1wPubDtoH1teKRKxrLehVx6f8fgb3VxS3pqQGjuJR3YwEoJxX7pEAb2XRzKA4qxeet",
  "key18": "4NGsW42rASY66anXNmgsKuzh5MwxdCVi9mtZk7zZU7DUUvnXGb5BposGqRsAKTpvcoCdgVXfM98nVF24jehFdCSh",
  "key19": "5VRcDU6Z3rCKLee4N3PJbTWwQAWaa3ryMTC9s41k6LwQrJjBLt9hSgqx5B2d6hLrSaECqJDftqYV7Tp2Hq6Xntwx",
  "key20": "4ZewwbH9NPZAYUHa3pDDQ4C8NLXPqZxHkm5NM1EieZy5G1uszEyjSTCj6HjrevCkiPfrb71AV6TnadrpJNeaqWMp",
  "key21": "4nykJBEfgEd9mLKfyvz6cYf9wxkUoPjeocvbXE14npoVxwvHkvKs2J4EqdvsR4MFjksimVpmdsDdXPoXyTTXvpiX",
  "key22": "44WANMggQRp59ZJsyEDZgvoNVUA4bhuhujCfPfGn4kBeC6oo8CEeduJrfQTNxbrELVBoyUBSPjjtgeQu51newoR3",
  "key23": "jWctYjrN49D5kxuaxaMzW9Yoww1HbL4AwBc5Pqm72E9EXwQEyhqxptfhR1tBXp1ihp5EaEDSu4XkmS7ogh7ANtG",
  "key24": "4hi8GoP5iRi6eKNh397JDdgu6u1sPMewXomnaTxCFFueLNdZaYXvSrBBedrsTfyWt7goXrSuRKBpYTAbhEJYfHeo",
  "key25": "55gZ5z6McURCjDLKoMT3CJzHriHwHrYJux8YuvpSCnGw1rC3vEPTGsLyqkSEczL9rDYEd8fqhuNxEryo6dG4Gfsb",
  "key26": "L5xnB5N7KbxmAB8oBKJqr4Pf5Frmt4x4CwDTmgBmDCWiSxxrQzH7rVP8dTEGTgV9r1F37MSYuw8ihuARkhk3NLS",
  "key27": "4CZ6szodHeqUMREY4T4pJMr9qgVbvFqWb4FCGfVDm2gCX14ryMpWAHScWKJQi4NpEJcSr8oheXwMfy2i8FZjr1t2",
  "key28": "sgxVX9Fg3LkjQj3rbjfUmcbWEBATPLkkoHKWVteJ6Djpu1eQA89rNck84h8pPYd8LrHUr1uDH2fjRjSUdqT2kZX",
  "key29": "5jwKPLx8WSqW2NEh5NbuTqk9AiJ4jUeyZu1PuyKkLTBfwNUfWnAUSSAQZiEKTm5ysAJrCFMERkNRw2NRpS22ahU9",
  "key30": "2xB3D6nPLbNzDMUJm8kVmoNk15dr3CkqiFZ7J6Hz4RhQ75VY9VTiGDmCJPnpWNzPR1iS9HcWArFqoTPhm3y8hk1b",
  "key31": "3SjtsqtD6jw4WTTqTYSGYvxcrrP2dBPWZbKJMkTAbL4R9jLyK7oDhFD31vPzdeasyxQ1wnGSwgM2TzvV3ARAuScA",
  "key32": "29s45aqgVwtuBgLLxKU4LumuLq745rJaVxVyXgCNzgcucybp3tdNNaFUu7uSnBSyFe92uP8vMnSkM9XR8UCVVXVq",
  "key33": "t4UqQ8S8vxWTDM3VT6bPUu5wR9bxgv8dVfMwnrpDWzgB8h7voarKYJdd5ByHNNyW5dwhbrB2D32a6Nf1dYokyfX",
  "key34": "wuUdbd6p2TwhpdhnC2usWHHt3NbzN7qnogdHBkkgdtu5ZkJqvGP3Uq25tVYejPLFvTvEh1KyHKCGQroreFNsnMe",
  "key35": "3Akdr5bFhjNeUi9PrGLMGM1w4z2cpyUqkXoGuDM154GBkrQQVtuq58MBTxRCreQ9cqT3k2a6bmBZvw7aziVZPnjX",
  "key36": "2Ykp5T1Qqs6BfaGFoQc6RHWYvsWSUEBRx1mUhBr3byetVB7Epo9SBquhyENvMWxdXCi6Vo1VGV7mqCpmZmpftdt5"
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
