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
    "27LzMG7XTqfz4cRSNRm9qwyXAVaMtCRKskBVs9UL4Q1DesriBr4JehZzUNomBi8xdMmYHHQNg1RRqHQuvSwLC7wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QrJZTPrQ5QTfp3Cb5nDUdoymF1x7d8wvtRDFJoM9n73QzwxQ2hPF8CMh8G6BYFNzUfCAxrYZuPjEKBVWjjrTGUz",
  "key1": "2tDRkubfAmMSNv6vvBL1WnJioAhLaz2x1oXE1BFm4bv6dQ4ThF1Hpz2bUKsjonTvbzE3UjWeZJkTK9Kq9rH4VpF9",
  "key2": "8xSDG4TaoahtRUZZ4owe5uxPUFD3heNRRqUiC2PMMFPwc48kuzwUYpdd3tbEhoqXZjqD3MsksiiV46BA6xmFTT5",
  "key3": "4ndDfscCgeK2HczCeRPKpR3xLurYF8hm3idXHhHFb4HivVcHc8J61ziP9SBrSc5ZfNYJdiyj9yMqGzvWSgYgYoUM",
  "key4": "3XXvZWd5aip1d9MEbfPrRmx1KGrR5ab4wxVce1CKfjDbYCNMVcjbmXEUH7ebPeUTJdEjw8oZiQo7jfDhsg6zVx67",
  "key5": "5uRNtahTrs9tNezA7za8WtM7443zuJnXDavvqUQtsMiWvm7YC2qG4jMuejbHJcBvGy9y77qd4DyXYy6cZ4Zc3pcx",
  "key6": "JttjWdX1mNn4aFjR22nqTRDHpsSuTuYhX26iCSrHM3aNBHpb9S1gTZWgAavSDevFNoyekhRbMq4d4shG8Hv5NmV",
  "key7": "2QzC3uYbHwH35GjPeh1oistZ26h1b79KeGdayBzffKSwvA8enoyV31CyAJJNcswFKhMUjUrTpen1PUKzmDpz8S4L",
  "key8": "2FhmW9NKtTMvqpT6NtyEGhP8oCuq7uH7HgJw98B9enmi7tYzxEojjinjFbJJcGogUQphauTtJ3spRDywxkvRLjbQ",
  "key9": "5cBPg9gDGsdG2S9qGqWHnamh2uyZfGTzMCQDYovQ8N4JZ4Wwg7uUpu61vLu5M5yjEZRSZXQJYLRbFKMYsRPUa7vA",
  "key10": "rVp4Fu4frk1qLPoxZDB5ht6ybXfZDEoC1rCkiRCMo25bngkyKPasr7x856e7rUXP29Z2LcSkHMh8bAP8tYn9Nqk",
  "key11": "5jz7h9hkzzhDXbv4iJLsWyGGzCqmZNhQz6whiycLS6nUU9Y4UGmp1Sj5eedAac7xtqqEB7fCtdQQg41i3dZYjdew",
  "key12": "67ik4wTM5RE8wVdnrqh6siGQY4CDLfsw99a2AmTSPVozL1Wne5SrxsKqdXsKxcLHSvmJkBViJoPryj3RuSnMJ8SD",
  "key13": "2nkG58exA36Vo5xSLLiX6hnvb5ag7pyNGwD53EAjnTwyEQU9XTE26kjd2nZ37CCNm1o4RzCu6b9eGmyYhPLvkxqF",
  "key14": "53g42R9QQ8EDXWViDKpBfkCpfQnnXczNF7bKJjXYfbnovKfhJyTmJURq95QX6te43bkTSSR36951BtFyXzxM1wqe",
  "key15": "2aAo3PLywGSaqVocvfYuDXadH3qiFnFZheN1SFGn8U6kPJmcMsD3zynDdU8yzD5c3rkjVKoirHXKTaP4ymToHmf1",
  "key16": "2TW99JGtyFvZ12MBdgJS8AN7JxrP7G6HfnCPijmrWKKQojUqEC7rgTLAx7ef2cjj6QrxZJZU6Uuj9rcpFrp46CAE",
  "key17": "3YFEikYYWD99ENwXv3hcZSuZUKfHuf9MjtZZamn4dgVcttNhEsiiaCEXtuo73nLzqiRQKpRL8LzhHXsQE5cVtyhc",
  "key18": "5ZupvFhDKpJZxTuAeriD7HjJohWa1nzprogUy3yHovSLLhArtKMWp549Jg2f521S6PuS8tgNGbXnjbkrhQ95YX55",
  "key19": "2s3pkSFTSWgkbVNGuZM8mjhwZAm4QHuu1bb4qyqETrYtGhX4pPZiqwnJxKSU2XQNgvYrVjLBnPfs1twtnbzUVrqf",
  "key20": "4USYpAJb49xZZd4mpCwVQA72dM8936Fh5ETu2ZZQgJjKtTaAFb49LKe2g3fQFCvW4SQNP2LJwhdwFevGh9HnJVDK",
  "key21": "3XbJSyQyuD1PcUNyWXEdXo7QagD14jk4uMvsVfJTscUvLgErK58Q3Q7LCB4WeBaEWaAsmA5t7aLd4ASzT69Pcziv",
  "key22": "223KA4yZSVdSVRepzdq8ekVzMsCAGFT1NTXRPzMMWxgnU5xWJmbHJid6TehH4izpGeqxdBDfWaRX7D1kQdzA32vT",
  "key23": "2oS7LW6THrhVymcaPHHVn1wVoTzFb7HenjH1T22ZrgeHFLp9RmpXXdKUQG38XDYsEyuocSrjYKHyoFqTVSivtwe4",
  "key24": "5QEpaCUtx6uXpiSYN7WwwNoU371jmMoUmMtBbqS4kY5krgWEsjTg3ZmDkhbgg4w63qK6HCdqZf3bgner1Qib6ga2",
  "key25": "edosKXmH7oMqQRopcb7KvQjrFdp9pTnvUKCUVSM2aiDaBWrU9ebbo8x9p7cMYxXGUL29898R1pHmDJJBP7XHvdJ",
  "key26": "3UoNSEgtYBKmanBvc1y3YhxEYEowczPqMtoYabbqmJ5UF3J5QuvrnPBXyj71wRbXpEEHHi7cCWxxLY2HL4CH5xbz",
  "key27": "2kzdRGsTBVFKFHax3R9ZzycUtY5rYRUSnrVaq2FtWWYCpjt4ufm9mff52xnqd6VjdZPL5UUgTf4fK8LpeqZmXAJ2",
  "key28": "bjRtFkbeb3wVDHVRKAm3TAYPauUW747khT8QQ1e2rwXuY3QmT4dh8QpdLZKTXwY8jock45rLwpYrqqCAYsWLEC7",
  "key29": "54yHG4Dr6PivB787h357KuJCgq2vadNSWDUxbPQGUW3pvcLH1gHnp3w9hdd575frw9sC1QP1DEx8uBbya7uNeHvm",
  "key30": "2LttSMDiUbv4gNsjei6n7hBugz79MAWa1QHZJ44zcxAdjZ8VFBYof487TvPJVYkAuzm1W92hoPLRDDByGbR8iXQg",
  "key31": "3hou4uwxKKn36guy3gzz8TJhAFTW6pguHaVJWtrniaQy3nAvAVhVzRcm4Yz1a1TZW1ewMiVtPRqnLYjyWizjLMbP",
  "key32": "5xBPTAHqMzuQPJTxvru8gybRFbqWnJESKgQPfWb7ZHAM9CGKMvqn8jSszo2G93iFURTXx7RRKc9fTZmn7jy2rhLe",
  "key33": "2jiGDnopTzsdeodWqB5PhrEDbnQ1LC6oK9N7iU2vBAcjLQ9JaC5Edk3doP6cyiFZrzaHQ3YsHp24Bgo5GiNqtU2q",
  "key34": "4JH5TaMQpr7thvHqZyJzyefCSNdAoeYuYew5Wob1ypbLj66tJ4gxGDmfACG1iVn96C2x7ifK8AUQNFbAyWsQNg7w",
  "key35": "u6hhna5uCn3iq7Pw8QV6TDqUdigM5xzr4FAq6jy24UCtwkecVhXn33ELq7yNaRgjDFMx4g6TM7CbyNyESH2qYJE",
  "key36": "359qC5vxChbe8RMjdCWw8Qhbkok8fxhdRYqFedLaHHN37nijEPvXChQCfHNTpjDvc17PU98YoycwqCvWEbPxoFyz",
  "key37": "4grP2qbvsTAbRimh7ZcXmW6hdHR7dKzLXsmFm7TBstSFVGqEw4DLJvnrnTf48h8iDaSVTvcHTb5KAKH7pQAHPf2A",
  "key38": "5DpshRTrwmj3U8XMGmLFamG4iaeegvYc8ykEBPVy6ghRFiK4G5sMhx8EKVrLCnQUzpkk43TCffgzje276QNnwbte",
  "key39": "5zvPyZF72B6nSXnzhdvQH8dXDREm3thprzkhUKyHQejQN3thKnpxwspJ83sg11zAbef2cz9eWBmHRsAa4Es9KN8g",
  "key40": "zHE6MSXZhLhsuioPWVFddCp71yn6F8jSEXG3eMAYoXy8NCphYDdydm74LdPSi6Q1NKwinYPkmuvbsWygU6iKCeA",
  "key41": "2TUroPXKqbeqsyTeYiMr2ftrrnRQHrdKy7nR4H5MXkzF9g9CVT2cQzn6QWdQwaKPqRaK5RwNzNGvby3bPyX96WAa"
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
