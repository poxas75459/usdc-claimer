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
    "5pVcEHQ5Myumka8PqoiUBJ48V9o43nvE5Rmzkyua1EANFAaSdsGSSTWKDH5sbDiR9RKQ11f5oGH3ywj5gtSZLnce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSfaqRrE6YHgoJ91ZGM51CccjCLTWES2xcyBzCgXqUhH1Vh5UicReysdbwWvyTUkZChiKGsHkRgGLQY7DfaP4gn",
  "key1": "5xq5GgjTurP57pZjenLSZ6w3rjLTm8LZHMySiYvps7E2teMCw3FMKy9CrAvLruLDypfCM42MrhA8Cf5us8WieUgV",
  "key2": "3ofLbhaewEc4urrZCAe2ktJKscqxy3W7u8v6mGnwMkW8KyJbfX6u1mdrkyNJ8vZQ6CmVADQ6YEdhNM4bzNy94zDL",
  "key3": "5aX4LaVvfMSh7eo9aQoRqE36smHvh3riw67WKsx1TzJnX29f8NgpfF22XxXjVjT8f6CmLbo6YousfEQBxLiQX1kH",
  "key4": "3SbX1MArBYYjH3JoXVRG8m94uxE5YDmJ8oGkiP4NhpqqH2FHut8sRCuEfeLXBjxDtziEkMFQBzX2BJ98Nt5ZsCPM",
  "key5": "2iadpYc1yJDdAqF1WzCZCUdmV8STf3UvhfeYCqhWGjhkPZcsjDF8KafTtQ12sdCgtJJp1vZJzf6cBQFJY9W3vdZN",
  "key6": "2SMSTBrqqARYDpmrQujFeCjeriVSEBreKdGoDarhQWsHvNejySPqs8HZDzPvwyft41DG3SVxMn8rqjHBUEsBFvgG",
  "key7": "4ydrS4jzYmqV5FUDR71j39zuB6ryfj6riG9EQNyud4hfCBA87JRQ22bVmJBm9ZFbj9zEtw1nP9Q7QHW2hpQ5GbxN",
  "key8": "3ZYia5hcZkxxV6uVscP9kWgVpP3QgVgFmWXv6SB2qTviH2vSD8reGbZCNsatjW8Rg8HH45xPVvsPi6gK4c1jaF84",
  "key9": "5SeV18KTZBXQuXmviexMf9CDoQE93hTgYSHPUVfVuvFgKeFNyuctU75haHhhT9kQmrSbV64xkRx9vchuUSy2BzPv",
  "key10": "65wGFffdp5bJfh8vs8eBZZuSUuz3yopsYWYsW4JZ3naFKxksv6ukDersEbrNGPwEojXiNL4PeScxNFSZ8smXN1T7",
  "key11": "3b3ZrkWw2KPWYT5YvfkqqYQARv1A7qq4np7DU2aYfv9UpbKe49Mmewi2JY3kLVdZUi3Hi72bYPaJLBoQRXJGgqtx",
  "key12": "4vSxNUVMpFwCr98Bh5zhLW6pAuWkYhxsw1wjLD7L3fyYGQYTiopdGWr5utBHzMFWF5AA9KyC6o9AhzAYLG7fbKgc",
  "key13": "5pJFWuGmfzHHxijv7fEuogP8JfWW8xTJHNG2umRjhGdWTttJyKFwDi7knrg1toWv4ggQPtHoyNz729xunyM8hSYR",
  "key14": "9zuitjWHqK45o3bCLs8rmjU25x4TSzpbkCsgwFYWg3v4g8Ey4eZ8g4KNXv35nZxE6MyAaF8xNTdPvbntEsVMyw4",
  "key15": "3Lu6pfh6sf4UUJnw933ZdvDtCSiT2VoGtpUTNnwtJKjnKVAhzon7DWNGKFBu2VuyM6Ui2FM1Kf8z3xWXz77ngGAM",
  "key16": "9LF89i9TbvKkXNBPNPSCtNTgVRwtemcWvvpCPZfXFVfq5Bf7m1MtBL7Khg5xc81tnY3JTc8Ks2KrHtMAbsLnGv6",
  "key17": "3epYpVyAa8bZrmbMK4QgiJyguKzSeakLfSoaNgRikbw9E9LhDUQe5zT3yt3ToxwSqikfABfHzf1mfVsnzqFh8pZR",
  "key18": "TVTYQJf6Po4NAxuD2318xg8nY1tsMMFzVPogwBriRHKiVViUVMNyuFQP6BP6f9JmQYhBQ2NYXHR6avzxpWGgcRU",
  "key19": "5XWjqzPjNDUMBYQ88BbRVBD5fm3A79w6oHNqTvDacEuTQ6qarQagz2JRUczj6cnBG4yicRyx3eAdFczbfDq1uekA",
  "key20": "5RtBYbW8sVLVAdw6SEKa7J3W3rxqTvPQ9DsgNqqgkGo9uZHS8eivv11uAdjM4Qii1oLRZFuriHhXzqGo1UPadwpK",
  "key21": "3xjZ8LFgmWaonduHTrGpAddNec7maeWkDo2c6o2b8cSajg7cXMbkB9xEs3JqEtXjqcno5aSWse2k43oCBPtB8Hvc",
  "key22": "pidaEQdVnVL7x28DgriquGN1Bb6wjWf3mYumLKHPFZRnCrU9S1be7q1ygYWAXbCeeQAcmYban5Q3vqW429rMB3B",
  "key23": "4WpZVFbiTuiGjjk6Psh3yqQup4Ux2g6fBm6bHLFToDcz7v1qrpKp3HnUH9Lkqt1Gbq2GTQmCmrtGYcPxCbCvSuKP",
  "key24": "2sEfidqnGfQbdPjuJ5QSzuhaY218NjcLd4u4Moictthskqa5WTfsQpA2zuWtBES5zhWqbzcKQgYCyuTQQUERanhB",
  "key25": "51uD56AkUNhatJAsZzszqyKVaBvFQ31uo9rJGD1ZN7sttsdtX5rJAxWAiB4KFSDRXmwwzeRF6nEoB7G1ykdVs37R",
  "key26": "2AJ9kmqdmPmW613CXBdFDNsmWT28VVAyGQSha7Uq82eAZqRMgU7hbQK8BLNM68kZSnwRZPWBq8oouT3Eiz4Mieh2",
  "key27": "ge8X97ustmKAko7givfMBLT263veMxKLTydvNx8nU4XWV9ccH4cPDGTU113m6fCJBtKSVc3YmqQ6tSNhpo96enN",
  "key28": "42F9nHXPeqxhVgNdPY64LhbezY9SdSvpiVNr1gFhWx857PKFGeuPNzaPhHDFCfEZhia54wcFCxQ7kbQovekntV3H",
  "key29": "2Gj4piXuFSKfq4F6dB5BTSrFZ9km38paEwVMUYktQxaK2CAMS8DQWoMniN78ciJ9QAeDbQjEQV7jtJibazcETTdU",
  "key30": "3NjHzP84gmZgYaRJ4bhf6KYv9sW3cTW9EAa7fD29NQDn5qfjSDnuoNXeUxjSSMEyVCqpbys8saErh5j8Rd8HcUAF",
  "key31": "22snESxdDwbW9z2uBPoxwtFscAruaxziPqc1r4b68u4LfzvoYZmciakeRmByyrUS54sRgpSrEBEuB9p6PoqBoVts",
  "key32": "5ouXTEH9PJCYzwfjey6MKJTAyDdsJpbZzvmUjHPX9KqcVp8MPPMqm5trTcCLAfP2mFjimzqKp9FyEJLt9X7syKCw",
  "key33": "yNr5q4jARo5NYM4uViPFVGijQg5PEuTX4b1KnGUjGwNzGECFt5TC1oHrHXQ4J4bevgc4usGFLx2iXQFML4kUUp6"
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
