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
    "2XcCQCjFi7jvGCwF3qrhK8H63Pu4ZKoHjoNwUUwjKGA4GQbTtvdq1XnyVsq9ZFWETvNYL7PjS3PqZcDTtbR2Xq2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hp82C5eWCV8DgsR8FKUvEwZLxbeatb2NHkC3zokoyS7xLaAxyRaPdfoQUq1P2xtLnh4u6eeG239gqBqauCCkNQJ",
  "key1": "3XZaaq6frJrQKk4weNxLfpmQRiFprhyQVMbMV7KxgnrSLH1zUtw3qxHEwG8PXnkZPb2V93pJkVAVgcAFMVrC4kak",
  "key2": "4jyph6UBBHJHXLkhaZAtmXyoTeQAyiyAAwNAQAzarHuooG81N9J4DUP5cMDuwn8Bske1Cq5diwuMPna7PDynEdDK",
  "key3": "2oMUVsFPDU9XiFV3sQ6EZG8TKb72kwpDYQ6QPdkf4UUuhqsohDJKYwE5maoLmeZAaPUwKUMZUDRKxJUrVVySEnD4",
  "key4": "35nUXuBqiqhvWKc7vksjm8phMij2bbCxo4Dtt6bfYBUybfuDtmdZeFL5mVk6RakbiBM3Cy9GZ2zLzQCEVKdmC8HL",
  "key5": "3FPrJDtRZAhswZYn1uizcmBShQDZTBxV2mmfedhy6Xjk1gZEiG55WtBF5BgiDruQkLoNRpZfV1Z9Atg4bDCpqFXa",
  "key6": "3Dy3mfrAgb1paijwnABdxfqfxkp6VNdTxG7LEShZ39R42px8GAUZorN39DirGDux24VyxhpidPyqvJcWVGzN3HjF",
  "key7": "61V1toiHYcZEZ3XjNXsvbLnct3pa4gasCmTbj3igQU1cJbu7PCKmzCFSmnGGCPoATmNVDTavEuvU3XXGCu1wXVR8",
  "key8": "5e34ZGfigwD24Qk8ijAfHkiCotsViynBWHeWNyhGQKxT2tDVxnhrJvXXc73BUn6fnvSpapvPSe4s48tYuq7y4ZTW",
  "key9": "5WV8tKBCmt7jK7U1x7PzLJ2iAV6vN7yS11ED4eF4Q2F52wszS6BFDgHokS171FL8qcL73SsjXmwkwcVumjzTBEq1",
  "key10": "5ZokyHZqn3qUa5w6dWYFoquSQJYVJWaQ7F9zDjdHwx97WPhQtKidBRzsFShJwCthgtKXm7d2GHXjt2niLgprByu6",
  "key11": "3NdWYzfpjvpGj3tA6BW929982VZJgcQkpRsgjfkWX5hb7CPtTtX32uA8MaXAV7k6tqf129sLTad81CNF7C2kc7fz",
  "key12": "3HC61riZ2R41GkLf4bMFXTPXVAhqdNaK63u9bG6msXGxsiozAZi7FXsaWcjPxXQ4ZyT3mfzTo98TpbNrhp2U4Qfi",
  "key13": "2kFDydn7ECt6K6iKCPTWCaTdttZFUHJc6k78q7EMsdAFzWBptTLj93kYWftbVRcvigvKhyonWDPbtFr7wtgFQquF",
  "key14": "36jDN6tPtgDx8GT5VU5GheBwSqeHvSzio9sui9ZMwzkm8zm9o1wGxGxiEYt1udNwQv5F71YyxXgHY9yGvoXZXTHD",
  "key15": "4QM52rZSgukm5smXb7Mv2PqbZyo8jo4Q9dvNfeSrVNxTiCrYusPmSVpDep32am5hRGCCieyqwDzVWLn73kymT8wD",
  "key16": "6ks2EiLFtZWzzt62CvubcDwFrwQDQrGgCG5AwmfjdCRR1o1RbKhgbTSDauWENS83Ndxhsz34bS3cYKipLg8QdXv",
  "key17": "3P8YpzLFbpyd3SjmKaTSLjVgq9tYXHgCWwP7H453uxA67PXo8dSVUoR86B5y8ECKayHkWjmRyvwR9gm4pn2nkWaD",
  "key18": "62aBS63C3RNN5M5tXpC9JPSdkLimPwsqGzXB1C5FFLFdpawYn8P5bjuf2aJiUsgpMpxkyKiW8pAqZHwFU8KdWosd",
  "key19": "2a5uM7rxy5DqsV22VDDK9BHeXZh58KuqcD5jmTc2GrmW9QQLaJqTumx5tKXnuxnZDNZdV64PDZ1t5A9AJ1JRoP1i",
  "key20": "2LVAJh6aH4jguMfG1BVyNGf8Pc58LxVeDQJRUfmmYGwa4BEemXSdnHW3ZJbcpp9jBUuHgrAPVV45T6j4ZSHPUoQW",
  "key21": "422sjD6szeoaco5me9BPzFVeajWPLAe4wVtfppAn8QaCEqJZP5jKYtAJTJXJW6DgPGJ6nqK3C13ZfnX9gtZgu8nh",
  "key22": "5oF8BZZQzBNqaX63mgFsSk1LVtpH51BGwAwFed6meK9KaZoeSLZte9XqPfWeoWdmXyQtRLjGP8x8EfDpBKEXqqDo",
  "key23": "5TQcErtSreMjMW3ZSvTzH2Fer4VLcLGqjgzfX2fokxVvJbajjYKQhWmzgQ3Y3XUceJSPYa3zdmxb3w6kqzrJjGfa",
  "key24": "5ADCAPgTcPaWUbUf4vQHhNVGSC4scviv3tpVUQbMgWCSdKRrpz86BAeE2F6aW9mhX4k25aKJoQKcB9YdtXzhGKjp",
  "key25": "356qtCx8kurDmjTc6DMorcoDNVzwyc6FZrruM2f4LEq1CGiWvrCyxGPdp8ZwN98PxyTw5Zp2CSKCScmUTdVvLAvd",
  "key26": "SLhNHGpm1jUAp1eJmzEiGtCmJf1CjX2NB9Ejxzn6HMYu5VR6eapxxZbtvwJZQEsUwvNXVJcxZWhQqk92vfpKjiT",
  "key27": "34WYzpXmmvHmw2zCUWH1MzGi6BgcJBkmkr189AbsVNkfoAnzKtFf1HQpNEzJubTjHyZqEwDJY82mjV293ayhbHHX",
  "key28": "59RZELtmaqvHkmfUsbpfJ7CEpf3cr1RgbV7EJ49Mr4fXXPdqu1Rh69fC6ARqdF99fwSin1r6enr6nf1yGLpVsHz1",
  "key29": "2WWAoxqnEiohPrdZH2ePc3xCh1pZotkLNTykegWiJvne9KM8TsEbpXVtLNe11GTtoC9j698uj3eCeeudsa3F7qgR",
  "key30": "4sdfSrYn3ws42Sp9WS7YvX6sKDh9q1Xp9H5TG7KVWdk7yYBSgrm3PCkd9Qw6zLFTwGBWePNVunmmJgLfFbSCsmZ7",
  "key31": "7RH6jGK2yqXRyrjn7kFd71FvP9JVyhmSLaceERgqkbUBsMc2PNtorrvn5qGQSSCVM88QBJYnxs7J1vWcZAHVi88",
  "key32": "2sE5t17vVyjv5kCWzM4SoncfcMx74YuF32iT35aMVMn4fhpHt52gb3Ztji1Rg3hCMo9Py82vcYzZuuhJejbCjkUF",
  "key33": "3nBg2Mwe1HKMKa5BXRNAGM6TRd2jwgZPXRhuN2DrV1qVA6TvohRaccw1VNU6YWvcRcVg3xgcoBnu5kkfhZLosCNY",
  "key34": "KWi9xomuyQezgWuKxgWmTaTSTbZfQKPRVDeyBPSGfzwEzMBpY3HKNNgWbyrzAAUNxMTq3bDvvNxq6143ugE2LZF",
  "key35": "chMmm44e4p4uhrzp52hRxvGzY27uEp3Rd2591sj1sJ8y7xkRDtBsgX43XSSBApLQjjh1g4xZRdh9Hi4H2ZzT9mk",
  "key36": "WgSdoMp34EjbszY1LHMPM1xW5GuF9w2kjgoPvD9QiU81qVQKyxghqtZKMHzFvg7Ggi7jXFRSG3DCaZ4aY81jUxU",
  "key37": "oQ43nLA9qVcubvUFmcm8USHGA9U71hiFPk2aqeAQFbEWzg2MRhYQvyriZsNKAAiYWXv8t6Svd3SQwYY7uCFVqru",
  "key38": "2vzytn2jqEh3NUuR3bkRDYKQvVp58gVNZ6C6KWQBXxiJpKFAdgeJX97hnskYYLf7Q3FZBpJP2qbHUXbzzqb4eFoS",
  "key39": "4e9KbJDgMSh3Xgs9MkzATbgLYXysxh2nfP8RFgGCChPzGrGLRJjgifSJkGwyRdV23vsRhHabkmGDu5S2MmstjHFr",
  "key40": "SrgEUQpQnbzxMMKY3NN785iwgYUZMkULaJmDsv2v4YSwEBAAJ8pijaVUQCY6HEZ9x5SQGxnE2PfZoCja1JP7XUm",
  "key41": "4EmuBGNecj224FXfncVn7VTX9gt8ndSVJHB2DuKdgCX6HhDCMK69NV7cYSXQAgvysJkDU27L8ufKHaysP9LHvhkP",
  "key42": "3VmpGnV2GBkTtbJ54m9hUMtp1KAjX6VokFPfqgESBNQB9thGdufebLD3GgBGUM6hDnXCXW5YZ8XQzx6cZ6ZcNB69",
  "key43": "5QaRip8CthiEpXFQaqrnU8QkbWffSbYbCGy2N1SC1cRi3tN31cjm44RmneVCvjGHQb2RgC1qGYJBUqLbsxpxok6F",
  "key44": "2ASdvsEX8WzDjMoejobmeWfVZN4kZ5ZPZu9F8fdUDcxGQhMXL5e32XjoVVUpcysigfZtP8Uk51DdYRsJBdmsw8aG"
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
