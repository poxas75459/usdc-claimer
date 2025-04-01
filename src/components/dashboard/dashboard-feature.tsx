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
    "54ANvkskEjQGr4ZiQcrGFwsmHyPBixeiYUuHieL9ZZmQBup69bg8R1uHas23DEEE71qDV6RnDURtCsGPbnAoAGby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErmSnv1uKeK8jVdkERAThcBkGwxK5MULK15JMri7XyrRKPSAxpcW5aTz7cBFmgosJEqRZ3zb2SDSKKHSBqpMApZ",
  "key1": "5dMKJEUFc3xQYMda2vEFxpjn53PKRHF8suXduvNKv5j7ooV5Hpq7axmqb6t21L5sB8gaFEyDmncwTJAkpLhLkc93",
  "key2": "5eB4Pj9RkFPViN9dYoXaYnvEFK7ke8HEwStCCZRyGFPKovKARqVkNiKKDWiAdp2NRKAD9ME7NXjwArCcnUXp5937",
  "key3": "yrX7Ejsx3Pm5XYGUnfkHxAEuEkXoJWG5NsHn2aHdUgdNZiq2TCuH6tNHRV2eDAHfitFVuVRrzqPxiZw9AmAy6tk",
  "key4": "626KyiNeddXxmMicBQDoKGb5piFTdhoyNsRdxpXTdeDN19ze7wSWTypC9Dc2VWua8BUnunpCiHgMuAK81BTDn9HJ",
  "key5": "JADpc9LnKtijjMCXtKWyZg1rUyiLxzGaWLY1m5XtwrdRsPBLZtnuUwv4Aj4vPpcrPAJpKpceeKjNU8RJarDbMZj",
  "key6": "3miMjEjEMA5dFAB6mh3KejbndwyVM5CcFTiQ3CAZRUK2NYUHEZSfKdPkz9yj19jQbyxua6gZSmQpPYWJ9B3pJ5Qe",
  "key7": "5RWzYemAxCwKoC3EvvTiH68PNprX79Vnfd2quH4LFbC7gJdQJzwLWB3r1JA7FiRbTyyXWSQDimgeE2kDBWM4Us7C",
  "key8": "2KeykRJ3uGCKBiCc65w6rDroyVcimG9PvrqrTaFZBCW9srueo8K2zJqKBmMQ1PELxnjJRMbkE8eUgpVQkfZ75zTK",
  "key9": "2Ut5ASn6GEdjSfB6ePerUsf88Td1cXNTdXPpLSXqrZrRg8BJDF3tSc8fdUNpv5dg52MQwQsBDGZ19FwvXjAgNUZh",
  "key10": "4cpwfQBjsh6gYrMeTgjh4TmGWzT2nr5RoXSWWhtNGvNTnPR6dQPwxFdWZsAwSxRNygDyGeRupm6yXSFpjHoroTJf",
  "key11": "3bS3dsLmKFVhRmaTcqKuhsntkh3bf1QSWb5x6Dxw1zYdjEPBW9G27XC5ph52o9yyzFanPomxJMQCPDXcfLDyZ42n",
  "key12": "31e1zwBeBkDd8ys76YNTugm6VrMUZ39o9cgNLvPsqQfFYWfbXGnxanPfgX7JNLVadqrQ22GgR7STP7U57cfzjwib",
  "key13": "4zbcskDWA9ZJiGZaU4mVPLznyWEkFgDur4fGBnbLRPktPDNbmcBwkNaFYDxgaaWBdcZqgBjoNsgSXnvxLMs26h97",
  "key14": "Yf5hMntvngrWzFyPxJfAonkWKMTWyNwGx5GaB6QAWTVgXW7KLChEQ8GLTjSXFbtJNsBucdQwkxTnZGeW2bJoN7S",
  "key15": "3izRYhjQLjjfWR3tRZPzWo6XmEnQo4amYBH7hBYAdV3UJpo1UfCJMMTJRcgdXk5UPmxwhPMLwKqSs5MG4MXW7Fat",
  "key16": "2PAwDqeFMPxe2iVgnhnFRue8ogi5HzrJtqLHzArNQhiUmg483FtdKJQCPZhj7oGAhJuqLLBaWRTxE5hoLJqL7NYH",
  "key17": "2BXaajkjHYdBggaoANfi94TP1eh4HHD6B7sEZyzcFEx699YwGVT1NmMTiujvYEvwM9U6DdhbshDsBndk5io3d1p5",
  "key18": "5itp4AWem7r1qTvN1RN6ZSmrcPjYLJF27SaRBBtNfXJwd5KyVDfrZBcS64WJTUitSSdAztXWF9Um58XMYobgYm2C",
  "key19": "37HbHMeNasasNRHuPABzrmp2C1bSy6nSUwhBshutoh5FoGSgiTJeJ97qZpwNnEh9xSAqv41R5mFxpyBrAmEnP12e",
  "key20": "2nmZB9jTn3r6CYvbSBEx4jGBYapFqDbvCRy1YCfdJ2DqQcoScjFnyK1jYok5sn3o6BfFyanVzhpG8ZdBGNEmt4wv",
  "key21": "5bMJf1oxd9RF8cKD6gxU1upG2AfnxSTmt7mDDEmqmWqKnupbccpfynHyp2tmQRZNTAxkvQpduMHK7Y5q89R2G1UL",
  "key22": "2tF3hYR5nBjUv6NE91H2wGPUfmm2GfAycKrQqoWiJ12r8Qnv7ZU2YswyX2BKjg4KFdNrNVRaWhTgX7nnJTibWXiG",
  "key23": "2nAnNQaQ23vumDG3LZiEJSTAfYDQUAHxv86Fke8JA2x6YsrPQ6wVPLaTNn8LdS1rMjwykJiSPupovSMaSRmNqTG2",
  "key24": "4TbPyYvBCezstVnQSAxguju13pZXjw1yafBmMEtn4BtSDb5iQ7rbhn7SYhG86Qix3YmjF9qYUHsgEQ6aY6t2rkBn",
  "key25": "2iJ7cqHmPyozZxay64rTbwXPo2kVxNCDkfWoL6TxqfsDwrsQ8GpfvhcQ79YHRvBoNY7Xe6nxS7EyKnK4GuNQaVKq",
  "key26": "3WkE81YDmxsrjoMLkEfmXkqsPac3aLsCmqrZ2cQqoy6HGtqNr1y7xgM7o1xnTKgvCgzX9PkGRd4b5EeFedjCYPiD",
  "key27": "Pa5qJtSMghBNB5jXQLiJabXPm5tVP5uB7DHb8o2nPUoDuv6SFtRBybbnx5HCGxMTzMAmXuDF3ZhSsTJ6acihsXF",
  "key28": "3j9wQBqzDjHiRwYs6bAxkMVL1LZrSFwTgDmPdtdwqUkewpZhWJyh4pPykoLktCcZynKawinSrdZn27J8gcCNN65a",
  "key29": "9PBytpaiuWR2pwLWqL1StserezyvM5WMuTeSQhGbJajHZQ3HvoDK1Hy4W8yqqiNtrepuVvYu9wMLYo7vhc65HhH",
  "key30": "4skmVrzafDRY5EMwUNxWBzaW5ue6tcP72kNXDbHiYSTtmrYaFXU1YfPp5duK6fWh9wFzDj5UBinQ61GwYp4FWJna",
  "key31": "3JxYiFtBdqPGy5xLcwxM5WgBs9nWafb1rP7652XDSdDaSrPvPyeFA7RURLkS1ZYwZHDZKcj3cGqFTKzcaHX3cKtT",
  "key32": "pnxCRzmRV9cFGLhZj5EDTXN6SvDzmuwk2qxSYJJVsLvRWLi2szHYEswD9W3D5ZWsAo18KkwikvgouHcXjgaR1sw",
  "key33": "5UCypxY6pHPE9Adg7TsJNjEgUQyCfTZHbgQNUR8v8V7aSYrsg8vJw3sM6j2gNiPG8j37bYbxxwHmCizzYr96ph52",
  "key34": "5j1xPAdgqAphRdx51fcce18cUJAfnupgsWEG33cZCtFyfaV7JF8u6LAzcPakQnD5ghNA5NoAM6QTDj9z15GkjWqy"
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
