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
    "5dLPUsBsSmmpfzhQ8Tav4skur9B7KhxQmAHSTbZtwTpyHFqyi6qwto8TpPqw3EA8JzmS8k1QGTx4hKdE9FJK9X1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5N2LDiWNzccAFjqMpWbCzhEAanrkTkvvirNTSWkWv3HL7qAmsDdyQMP6vwThatw9iGzq6CWY162Nbc75CiFAiY",
  "key1": "26uKPi94Wquim5CNGagcsihr8swqCWnCdYqGjnB6macT5oNrPNuUu2CwLFK91TmAGSxKC3rXKhd1LdHr5UTduL3m",
  "key2": "2aQ66NMpxTDSgmYjSwj1iStX6zj5n3Ui1XG1oRKycGyrUupjFBkMQVMN7CJv24XYQ8uuaDj7x33nt4DVQKiRKj4L",
  "key3": "2v2DZyvP7LcafMDSTcKZg5qEddum6XgKiZdRHEhP8eUgLsGLULNWDt6TqWTRnmEdcpBn5xQEqUCJgqcUCvwXAkHS",
  "key4": "5nWgvjuRWfN42AGMyjnQA83o9jKWNeyB5PVUtAmQFmDzvYq5kvtkjiasyymm5mVswTywVJZnvxcAQUogTzXFDEeR",
  "key5": "4nVQG7qZnC2RZ9DSazL9MPAwHXLbaNJ64Nui1JfAeDVcjVZCt1K5YQBS9SjYwsgb8HE4V4ZVNbxvFmV8mZ9Pb9de",
  "key6": "2Emdxo4kk7tRmxJo9gVovpGCJxtu8uzNdYC6jtUoTBYaji5cPygnDtrDMMmv5BwWSj5iVoyaAi7najHkx6RYfbJc",
  "key7": "3dSEnQQU7ALYa8QmZszEXfSgJ9VSEXyC7UJFHwoE8cd5M5LjYRPN7LVKhAAnAbM9CXJosRHBjbeoouzBb88oskMh",
  "key8": "529igJkysQuaoRvEe9tJgSUuVqj6PbGPyjrtCiKoA6xLUZy96BPmQBCzsjSpUESR1FeSFEPqS4bSVjBs2Q9FGPha",
  "key9": "b46kQRBR9cdG8Qf4hUA7Y8ortE8pMSerS3KprWdTfD6fDxBWHR8aD76Fgohj9GcQ4XEtattZgMc92sX9tQHjqs8",
  "key10": "4EcXqExZVu844bTWeetQZeYpVjnV92QKRHhDvYcUxHPWQABVNa2JL1roRQ3qFQnSkeyWUkbKRjioUHy8UBjZsXJe",
  "key11": "4HFhSt9xy74duDhP6e5vdbLuC22ajA52QSNfz2Q6AAFNW1PGRXwr8kFTxEtPfAwDS4VYz5Qhw4QUbg2Xdfvaq4gC",
  "key12": "4NQRGP1Zetmhv6oqFJcG7EvsFpCkHbLtcqphnkEpQCuvbbiumQ562vgBu1BU4aXLhvDrhwTFMT29dbe4JoqtGbTf",
  "key13": "3Vn6gyjpBP1GXQ8yjViCwy2QY1EbARm7cNR1bQ2bTPQrddXQrqLtAuxTapQhtUjoEBkPvgqbT4LQ9ogC5gacyTH5",
  "key14": "3bqHbCvtC23RUq3KdiEfLQaHv1x76WgjLTNDzAyHa7rUyGQiNydHaiF4Q9VxK6uonf2AXuu8RWKkAuXPgzZiiFUY",
  "key15": "63QXx3dWiJzCLpaGLt3W2kuVvHTVGtPRZdYSE53woVAf3NarfXEKM7x7r89sttjLm1xKj4dBVR5hLuKrbpGoYqfS",
  "key16": "2xrt2pq6Z8D7Q41MRbVNSE5qMo758dMLjnib2dtqH21o5K4LkWFDtTbfuhCBq2QxMBJGKjC4paKGKU8ndevsSied",
  "key17": "5gZUtoL5z4YqTdjnT8EMqZSLJ58bTxtcNk9u29wjrweVWeaH58BiWWtTFqHFuzeJfJNVaeukqSnEAh5uPiGBRNcm",
  "key18": "5iffSvTWuW9nyT36JtVXjpKnHcdu8APWSGruanRPxkZc9XP7rL81McP7MsvTt1tLREKtwDaZSCQtdTaR1uFEVssJ",
  "key19": "5iBnkw7vRqFF2YB3KzaCGfzSicVZCidhUdSp1ai2HCqEMyLZzyJMGXAZcepSrarEdn26doG4RXynBPtU97wsavwC",
  "key20": "4sGBiz8UvJr1UPd7aUHWAZwzqX9qR1yt5VvqvwWTGT8oKWRozkwTBaNSVmeMTfvWYVDQBEger7ATgW8SZUyfXZ7W",
  "key21": "5Ny7UphWwTMnb4PFMnkqez749VoteQqknHX8m4obV45SgeNgHWGhXd6FH3ZHbVJGr5T5F1h59VhCq1Uo2ZodEBKF",
  "key22": "24Fmp8hxg9RMGYAsKS7bsdnuNF3aH4vaFLcjMABkba4RK1jvWFEMu9wYY225qArk7poYhpiwyxoUJsiFrynyuJb2",
  "key23": "4QTgws7W8c9qJBtVUP9RhcXgJ8nuGhM9NZTqSJ4pZQMztRBx74pbtghrMYgcmsLMsD6kJnLCv96NUy1K6jLaArAF",
  "key24": "4hPgNVtaJicrVM8GmFTu2hPPmreADgtxFZcFUd5A38skFipu7XWgepSTfGrFPXiHLhTa3SpM1ut7xVJCe7CLepZH",
  "key25": "39h9UfmmxmFcWN6dS8VwwUeyA8mihi9XsAUKA9pE46eY8iRuNZmPRMrgJrXKBdHsgckgS6BpH6zqfsE3R8CNspFM",
  "key26": "43oi2yry7QznvrkUHwZNmM3eCdi9yqoJFcZ4F5DwHcYfd323pjKDmW4eKvRsgLg1kJtccpQjjUYW8TQfa98tndh9",
  "key27": "31KycJ7Jha9x69BPSLZjUtkzjqAcTXKiRV2FeHyzX1iBcbSHFHywF4WqsS2e8pFC9MYHjbGK3fiCX9pbbibncund",
  "key28": "4HhuS3w2RP2oLraj61Q6VNzRVBqQ9D1iBzTxesTChHVpsd9PUmHsmbYjX8SdzyeRTzSCK6wGhRs6yM3YcNsQMMsi",
  "key29": "2c6i1B77Pmj7mBEesWAhT5V6iG6ZfJburssrU2DJEuqVsTRJf8VL68tWcyaEg6qLBvQNpLxEqbnQq6oj4Uda3fNn",
  "key30": "5CBmBTaiyNSEf2sXqAQifPkWKA1VGE9ZW4fpLkFj8gK96n9b29s9wT1u2zB9tZAHHPYdbq7JT4kBNDESGfzJv8km",
  "key31": "2TQS4XWL57MQtzfBWx2YJpdTLArkGTptF34mSQi1preYV5T67vJepLjQMPMJC9EsgbQijfer7LAUHYz2SYGgJMZ7",
  "key32": "4GjwMkwbvodtm6ZBHf1kroxFTtp6MWP5m8kmyUnwCLhZRyhnmPEWbAamWGXG6JXXKdavuaNXiLX5QSCMoSQyZQqd",
  "key33": "61KVrHCMbjFvsGK3ea3yxFRJdz9ofQ6bu4dq8tomcWbsK62f33LbmGyehWTQ8CUSgSwM6tv2QEJkAK37yjghXbtE",
  "key34": "5Q3MRDHQ6jiBnbMRhNAYwQDSs87Qt8zG2HpkWQVcVdtHZ5zVy53vDcUkFZHwZEwkQWph6fZfg5zdvvgDG5YAdeaQ",
  "key35": "5YrJEcmW5wMmhRSJDtEmf9R3CAb9idZmf4LWoar3iqtzTJmEkx2Ck3uhR39QBJGquMM3pCto4Tm6q4N2i2hdL731",
  "key36": "9YGYwwuVq82eq7J8U6afeko8ydRQPKakH616pBDBkyLjC54wxKCnPris7NUCET4RRsSzykKdNzGBe9V7XTfAFY4",
  "key37": "61SeMdiD3aufTsDocsKwkFuQiHF5quUpdrMAY87Cx1QWSZHnr9rTNv5NRvKFFodS6ZkP6HLS53Vm6Pov8ce3ReoR",
  "key38": "37we88tPpdibQF28nd7z6RjA8eALkVXSsjR9Cbs34SJbK6CL5JopybdKscpbF1EZ1ujh5RhvrdyxyXRkSyHYeUfJ",
  "key39": "4V6TJXnmFMvUaa1pCoUXvE9cExKDSEeHtJWM8Nho7xEZGj174bLgEkpczVsahFTsKJx3fyJVHK51VPa7vqb9YPfg",
  "key40": "5cBWZmw1zpQaP9HaNcY66J5dQHDHQzciXieZ5UDyc6ayTiG38aj8d7cqaUWgiHUk5TCyzsNqWnHYPuCUZys4Z35E",
  "key41": "5yFrzCw96f8otJPBRFmsRZByVaC9c48PzAk2U4gp8YYMsc4Zvr6T9nq777CFpEoz6yBnkUkFb3qesiwrZWz13f3j",
  "key42": "icZp75J5hDq557RzrNV1DNFM5nbe9wBYYv1tqquKvsjh8JcvnAvWembXjoHzMiw9DFkq6nvrkTWofKztvbfwofy",
  "key43": "2vwtsAGsDdS3Yvwexsxmaoi5LfFQVUHDfugFkFHttv8cSPqvu13yU89u6wegCP88fpBp1a7jGLRPAgaS2bifhdcd",
  "key44": "3yRuF728kumKRPtV77mAtL7ESwvYnZVXNTAUE3Fsp4iebbDnz5HgDRHpXFHoiRAfosDGxv1g1maxc7jUY8qQAmZB",
  "key45": "5XhYaiY4KPC6pwLGa7rPkWordL38sJPDajzmJFHD4yiTB7s8i4r1ACU9Gm34tenFR49mvpsMVjX4FY9T2iJHEUvQ",
  "key46": "cg8gnmQTq8tgd7vj4oo4Abm4sSqR8JRtJ3Vq913YAcksXDAG36ckiKrafw2HwcM3YNc1AaJwphyn7BWo64BMjJS",
  "key47": "56BCFUgJkBM4C8NBHEDKTQEgp6pRtB8wJDVQn6Xeh1KTtmKGm4rDXavEyK79ywFZuo9mpCV9qhxSKXBVCnLYwHbV",
  "key48": "2htQqdwWY3RMZ6qBRRQoyQ14sm2bBwn5qrEHQLVCdqUtqqWcFqdXBNcLXtCHdcJp5ArUzqsrLCYsv7xG7XHAgocy",
  "key49": "5yNA7Wv5F3v6fTJ4phH3BGdkSJscaRU546CJ1JwfKSE9dM6tiZQzC5rD6KGTW8FTJZ1nmeCi7jMaN3NV68tZZ7Vr"
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
