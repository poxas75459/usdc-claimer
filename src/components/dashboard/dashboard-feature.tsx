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
    "49RXsRuoVHFRjgZ4fgNXwa8AxV9xnKASuNPkdzVF2xQYbrYK2hmFRqZmUAWtytvGtZDK8SAR7wKxeEqcZUgCd9Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xp1MyqWGwqiedWYz9kQGmpz1FmrorxLaAZsukDBTGvtVkF12KqojJybfv2GTMYU2rMqdcUCCCrbYJH56QzXxBg",
  "key1": "4LZQDUtbTXhC3JEd3Jxs7v4Gx3pydbj1pHY9RNsiLFbxJpHpsLZcTxPTyixSyQ3tkWrfqns1Go31USrg9gyRj3Sx",
  "key2": "57zaWCFQ2kk9Gr9sWF4wdhzV4PjHVq8s1wPgacaDSYhd7kMRFMuZcNH8DoyFYDtaFKL6TPvLyr3xBpoUf9fZU1bd",
  "key3": "2MXqJeAhD94js3NEiVxcXdgq9VGZ7c8MQbZWsXsfZRjZdWaCxE3kbt3wuSn4hAbBiZL7TbtVKhc6mxSwihc7xgrb",
  "key4": "Mhjj8fzRxnS5taPNa8vd18MVQRGyWGQ2MnYkGB3tZ2FXuARMz8MLwRHoXUDrXcvNs2NDpmcP2VXW14YwFGzHxmN",
  "key5": "3uecEDg7QaWybuUGkBufho721TysQyYNB1uv3Eh65K9kN7CzwVSNCHupsVTsdi2RfgaXZf8PyibLhetwWnQgzyKk",
  "key6": "5CvF1KubXviRHBTeoXnJxf2HRRhaEVpLBKoMCBkJXvdhoFbjsgdwZLk4iXdZHZAPG13YdkjkXC9suSouryrw8ZLL",
  "key7": "28im1tXmgUBxhQ9jjZCtJYvsAiiG2EFHW8q8ZkVhSJzkbivz6Qj9Qz8uG4zr2SH2xvVRyLzJQDHfPPe93R3WE753",
  "key8": "QCcWsan315W5BUSs6opqLGuCb4i5BN95b7GRaqdGwqi4BmE3EJqX8TXJooMYRGHfXwC7YW59oRG7fs9sBV23Heg",
  "key9": "ZQkmKdkTnfoLqS1fgpJUA5bSRRr6oPFxnkdk9ZwEqzErvrjMRHjCdejDbBzG8mcUDp6KM7tcRqdjHB5dvpPRexi",
  "key10": "DZ8GhTpugxuwM7aARcgcdGaimWiAbW1LYMakJtNZqMjS4B8x9Xx59XEfxjKLupDXxXWurozUAzyrmJyPWvVAH7u",
  "key11": "2WzbwDkzYKc4MGJgj6LgdtcPgS7HjhPX2PN484HjcBWebwdmHxgwQRTfrkN6J79itjjRpTvyHg6qc3kQhkbfPDdV",
  "key12": "25YmCVLVnZryzmv99wdtomjNDhHthAp6soaWFG23C5hNgCcJKXb3eHkQhxDWtzBPgdv73C8cPcQWZhjy9N7q7w5h",
  "key13": "HJ7YC6ZFHp4MVS9pa327W5GA2A69o5SyjREP44VXKZtTZN49bJP4aGafXnMSUamX4kXfnxy44aEAVozNSdsXqQA",
  "key14": "Sau31acyfa4w77nyz9ETTdiJp62aihAhi2zhuFbgosq5pMpoomiGpS8UoFDHZpm9bCJhKhWhyXBPaSRKWAtUscB",
  "key15": "1qt6rxGDyp2QTLF2cUC76eEbguuhCdfmWYHBxtdjHpkWhkkEFco9oXmoc7Qbx6hhi2qV55SBhfvgihAw9Vr1KXV",
  "key16": "28BXCNFoMs8BGyF1NCrBcyj2vAG7W3s2Mt3Aa3rpXjMy4bawC8zDsg82dGwyJq2XUbQWeFgKMccSeGsCtsYmwAA2",
  "key17": "2Gm8cFWhshpjhhDnjixhwGvTrw7nmpkhWeDX1baK1upERfazZEsA2siuKx2xux2T13DHkctFszyZ5NY9xEMXKoBt",
  "key18": "4PxkvhLJ32JU2sQRW42Ge8PQMJ9SE7N8poZFTZzEQXx7WmvKxaoRVxNtSkeZwGMwJaT9dTPSHNiYx2Zxzsp4fSZn",
  "key19": "342yHxWQSdV1sXB1BQLt1G6FHQFhifwc22cYk65H3u7uuLMvuhzXyNqd4fhgVQMSr9rv9QUtttid1NNaPKBdnheK",
  "key20": "3cMBMAe9SALEHVjSLPjfG8USj27ouwkA3bDbcszGFZyDWGPfnu4u34tSfhnJNMeJHuvMNJ9sMEQrX5fvBfvRHzxD",
  "key21": "uwxwAzwq6CzVnURuSEnj23uAWDLC6fE5uSNiJbWdwBFpFcEC3dcBhvTjuU941kzAZqyEhCsABKTonZyLvKHdFSg",
  "key22": "iBsyA15mHvuUcwroxh1UgZMd8YFwLJXdqdKRzcv4dLWQYvPbHs4CfDTcDqoaJWVvaeLwgLuQ92sNvTcSg93kLmH",
  "key23": "5wds2zyjeK8hCmxP1c4RWMcFsBqT1zFoWtTUdxwzddotwLxfZ8UHs6ENpeboXX2NKBBA6X1Fnuc4LWgayRNBP4bY",
  "key24": "5V4wsYe3i5pYcjEVpsyZt9m6FyMTBQuMjkf4dtiPFSZSYwFwDUphqLfaxKeVKcfbm2vxCcNKi9tTjywSFDmDwwZY",
  "key25": "2mgXHiCYKNzZwx7RyudQMi1VsWvzMd4LL6rD1zHu9P9PFamAoLYHiZyp3bNAuo2LCf2AfnRCxbhLLFjpvPAm5Yck",
  "key26": "399CEGGhzD1tN35oZBfCvi7rrUGKkq1dQ7jpYCZqBrE2RtdT9qQwgft6cT8gDpT7tWyGr65jVVzQXW4rTsREbEib",
  "key27": "5uYvAHtqr3bTCwuoYNEHjbDCRs6gDSS9PASX9XieyKRkwVGBoKNQvYDeUgE47SDCH13NBATcBFNqcqJnPVucA4km",
  "key28": "5iWaRcpEieactpnrwrSfCjYgZiAyirJHsNehWcM8WdFstHmZzKcYpmrZfNyRmYiiN1kUZytFcnTsmV2gSQgiu3DZ",
  "key29": "2Aiq5BESSpLpvbwoG7RnbbF5u2iJ6G2C27GPWxD3vkZ3eGue22dUjLKBMpcwhXNADoVF2JTA3KmGc4dbgzZ5n2S5",
  "key30": "4j9JFuMstVcmsPhxrj6GpAUMEfgkE7LTbfuZ2acxtBGyXGSiqLnYiQNqo86N1MPcAKowiaWupkDWD99QgoZyyyho",
  "key31": "4ebruntxyRytHiS8sUhZHagxbuFHPrqBHgsAyfgBZmr4nYp4ToXCYULpLNn5Su7ZZqif8BHCAosoMvbgrbdKEB1v",
  "key32": "4ev4o1RnEvNMNLr85AnN5nXC2zLUVZ9ZpjwPY8aBtupKXwYCTXHLJuVJuM4GvSKfbip5CKfvpofwhAkautrsxcZk",
  "key33": "3MZNM6R9G8WSPMZ5Kp9aiqHjksdeugujU1d2b7xmDDQYFSPwfUueCv7VJtq6TGxwnikBEfMgyWdbpoSwVgT41c8e",
  "key34": "4QTZy32TW2t2XpUWqm1CeHzDnBscu2hvb7oH8T3Z7hJ2Fr9WZy4MycsU93tVteLJD3dtZza5ETeZrZN4RpibUiUh",
  "key35": "Ph2ohj4uYRGq83DhiNtABEQ6AJVjksXnLquhiugaeT3R1wywYjXp7vFthB8YRJAFa5pLYnR1gkK8scwXkv7uao1",
  "key36": "21at4FLnWUuJwhUQGFSNDHsRQ1SyQEQT4bYscbsbe1PatwztTx8u5E58jFvLRDoUxnuzKYTArL2A7qh9N8C1tdUw",
  "key37": "5JZQbQAKsudZEi2VZ7VgjbWM7wdC4TnyYpkcx7EkSG5GVhnMPa1ggWkovhz6o29xAguFPgDeyWr3mMmpcAxpPDAc"
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
