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
    "RbT1qWEMfY3rGAkZKAHDv3bAYBm9SkXRWaJm478GnssySkWiMnR2w7BNkbBwuNmVeeiAQZATUpMA5pp29pHYAs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54cdHg2GrDvKr3JwKkrRxqUvBWHjWa1QG9xYin64EonNNzy4TV3dR7FsJBcDyePftiQAHNBKUE4pTBNtBynSGRms",
  "key1": "2nPXQp3rQVPoVffSVLw7ABS731nLf8idgi7wN5sPcnBGAC2w3X3z5uaLLcWnNtfHqP2Dh92WuufepTfPDoK9Sbkh",
  "key2": "3ogthkX51BRbeKEPor8wvRRxGprvd76hntCLea3f1x8XVhNAaManioLfE4xGtDHpggiKzwAzW5S9fDGk7mroUM8P",
  "key3": "5BkvWyvEqWwUrQQzYdZDu99PWJeMCAxwDoBKLiMTeUyht2bEvBCf6YEd45YYYQHrt4fVHZ8zCBbGiDvRs6LfQwvg",
  "key4": "4K8oSmthnYjF47r3X2eYt2GTdLsfZqmWboXsP9tUDgFQ4nkcHcLJv4xpdDpnDZ6LqmArukdfhh14LRyrNpqAw3rS",
  "key5": "2JNWNaYUWtH8YxmwwSQZNk3obkcyy7yA5e2xte4hthrJTiVxwtPVW8YrtiakSFRQryGywDU5d9xFnn4Rx8GwfgLZ",
  "key6": "3i7B7uNipaeX7nNeoChYq3P7fy7pBatoHBMapVLpFc3YZEGhm8P7RQQFoBevGCi8zUDvr9icjbx1rDGUziezRKxy",
  "key7": "4VtPtWJPQiBmPAngnFnrdfcb5Gk3vuyzKKho9kVSQw59yGf9uKthMsZGR4u9kKbDAmBKsH6p17APsKpF6W5a3Sci",
  "key8": "4cSrdCwWxkvpZLnB96B3twx4yGaQGUR2J8v4aaL7XLTKh6hWJg1fqEwg9CEeLrs35y7U9B5JMuiBkqFbpjfmYVqj",
  "key9": "5o9MFmYjebDPjRtDoJyLw3s2B7CQjcgPm65yuVDC5fDc7uDg4jzhmv5Sab9YsV4sKimBZoaohEz3YmKpu8iHSagW",
  "key10": "4mYABddbE82QALg8rUV5eT6kwf3q3xKsDj2KaUit7XT7g6xsdtDXAkJy4phvjZJejenqwMqxBiqBjP3Tu5LBMGrq",
  "key11": "nymZwgpxN7t41iAiTj8Lkd1ca34XD8s9g5Sih7jFTbGiqmUWrG3VP7f34u7gvVw3WSPSwkRKxHmbkc9sQuECZwz",
  "key12": "QhNybewAN4VDQDArZwCVDeBXEefUyzKJghraPHm5w9iGBeoxTikU6PN7yy9kXKGCCSpHxjY5GxSXUr6WUr7mJc8",
  "key13": "RoicEbossPLcXeQg2bYUnvMbWDuZZc6MDpMCK281aJSFjJkFFWXRQqGg2rMXQuvVejjrFDfrShA51je8N3bAjzA",
  "key14": "2ytUkUmkZpHEQPLvtcEjFLRGw2ZAZ3NJYuqKUaywAGaA2cXqqDcbmnVEtXk5KWebNxFriRGvzi1ckcbzQMMX3yTb",
  "key15": "2bp5YKoPM1m5inu1ENgXkZLCmadmUgW7bUMCQ5JAgzndngRrEaUZtyi9qmRHH6Se9EC9QtC6qPSfeBLpJHUzSizt",
  "key16": "49PzLCheBeFE1VAseRMUd7UuTQvuJUdJ4dyCDF5UhiY24LhJwFeeNMWRf6SuPsLjpkzxabJAG5VPnpS6FmYh3ddk",
  "key17": "5WWuniBJef6D7uyxbBkretJDPXPi4oqhdZCZwiGnAmFPDRxVvih1gWXS5oPD3oQm3DGRbSPiyNUhvUXjHDnwvQwG",
  "key18": "2K7W1tGKT7n7wSX7uHGrrYUw1U8NoNAioT5UgshKGpEyYuqcNVPS8AAZURcx4b5aGqXDk366DoBfsBTCt2qSqXRN",
  "key19": "5srd3DXGa2AjKv5ab6vSpaeb4hBQ6uR59EEbyr3obQS24tRjBoUQBi3zpjUffdRCL2sSEr5SXFkRGFc8kYzFV5Z7",
  "key20": "2gFRsZetWksbTUv34WcLHLbn44ggi2FSCWzUSpbpHwpXj7tnSBYQVfMtYqihgc1DEFZkNxLNiniifK489pv4Ss2",
  "key21": "63ADsTmqMH7HEvATSqaNFtNzsshLYR3bKeqywAwGQSC8N39s2yHAVdVdxYhukdnwnNTYxRPVS5BbevbnbBiqKaCz",
  "key22": "618xd26rzTrN2KrwYYQBKhHHnUrEL9mQx6bCFYSiRsVSNQPZ9tzz17kbYK3d16kD4WWeG2sTn8itB6ks3xtKCABQ",
  "key23": "2v7efLaRm93wSMty6whf7fdjdNyJJ3Vo12D5oPnVTC8cDDaiLZRQ1STVPeoQpShNkVdDGMR7fzJ2GAX6CotaCedQ",
  "key24": "5F42jCDxwJ95wnUoA649LHZQ4kDv5LGPuEz1vEkPe3emhJD8iGnuyoxz7HWWTDYvjebo83HifcB86F88Jy3LmAr6",
  "key25": "333inqDb2JTWyed8o2Ls9T3ktd7Z7ySqP13HAuN1HXweUvPDXuVPqigTEQxKM2K9znTJ8tXyEKMHhRJJRSnwjbU3",
  "key26": "4yzgtzdyRMfrHuX5SzhyjZq8yuXvL844pcU2ponpHEBwuir6orHEVWHn4RX65yN9jnqcxPz67Sk6HGoFqW3A358g",
  "key27": "3mCiK3GUaag8z6WjCkceMgHDS5rqTpicNuEC5WdksG8wsjL8xWqPieqoDfU4qxuECf5kTzD2FMBRjwxoDV31GbKg",
  "key28": "65ouAiMwnhMdPnesr7cf1Bg7JMaL4ebZ5Zh9dXkhGkxmPcpqqWnhuk57YhqxZ6rPsF294FzMXe4mXKfu5D48EK3j",
  "key29": "2Ly4dLd6zth4TQEdvqMTm2p9epSqMgtseAgnWUvhfmsTSvSmrY1zJQ7bFHZPXDcPgEZeAD9KopoFqDgEvDdF38WL",
  "key30": "2quQs7JLPUdU8dh1MxZYED8wUPKTUQ6gRQPqdWUyGEFqLnARPWcQFznSBKrV6oPZz5KGLCtTBhxeZfXWNNA493v",
  "key31": "2tiQd8v6eaaYFdqJQKjCW75Hc7oWhngWHm3YkhHw7nn3qedhjKNBZNUxddUdwA6SAYCYnHv8WD1mhemkvXCSq7be",
  "key32": "2RL4iF2Feazghn25FfHWWtL4225zDQUkSiMM1LxSzFcaGGaahcyxwypDTCBQcKT8QdH89ihbSLwBd4QQY3BS3Fx8",
  "key33": "5U8ytPt6zXRBRQu5fWHYhrPfFiqTaiwcax2byqrm9AmzXBAtwzYSTKCwxFKXEJz4f7PCSNvPA9R8Lwfh44Z5Xo9T",
  "key34": "5SuZj7tUj25wqj8msKmz3apz6DXaSsfvztAuUVqhf4F6hqFzdE94xunB15PMpifJ5xUghUY4qzVBUYEbnnK6RDEe",
  "key35": "4uz9pLX5f8QF7Gahc4uuMnQHNA392FQTHqezmjGGVNf4M9joMy9jyE8X7HHqmW5KbP43yrArnsjzRsKtcvTjfPye"
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
