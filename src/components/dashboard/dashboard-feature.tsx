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
    "1JZYtYR9b2VCtjL9Wgfuk4qsbLTkXXqkkG58NZXXD9GyaSEewQU7L1qQUQQ7sU66in8ZuPmeej8StD6gtyTrZVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCaPX3f4G5g981eHgr8Uq8CrDoAbsPLgvFV5wTxkM7bxRaPp1FRstPh9VvvJAzvEveCithqwWNkdVKoxazUzSue",
  "key1": "3XnLZvp9Y5pNfamNb55bd8G6LzkUUNqiM4LwuBXooRWN8NEmPF1RvnvdDKeUuzAtZceRtgSQDbW4x8v4uLAsafqT",
  "key2": "2i5MSAGe9ZhKBtNwrJU2DCQbxB1x9m75g3wKVGHJpEhZNUjeMubUBHmHxVbS59iVGCzxiNAu1RnkKNxUn5T5AiXy",
  "key3": "3vnJRY5neXzniGHNCrmwdqw1MAGsG23sPH9Mm5kb9AzXJyE9vc3KqusUndPyBeH5emo88zuiF9zY97Cm8eF1Cpiz",
  "key4": "9MTzrNMiYnbfRk5ooS9QmwUBnW2fQR1Y9N7wFAbnnjYnaruERsP7yWfPLkrXV2XdjuDLKdYJvUbgVrvLLrYxM9M",
  "key5": "2KhGczoLoN4A5v4bDF2fFaq8bfvFTKrwskYwhF9HtbauvvC3UBqY3urBBS7VFnG5JndthFL6zT4ZoSbfCoTLYhPA",
  "key6": "2wDiFoSsJUCpH64HaByCgveJVqZk1cetf5dNL4RY4j29miUSd1JuCdsTPtHkFjRpYrT6WEMdVoExWZSfm73dqcmS",
  "key7": "4cYSEjLEXB3AK7sShSu3eCgMbuGJ7H5kwGufoq3y71V2uGogrZdg5Fvbcp9BBGvjfE8uRxZRqFdPT3mV3YXCLrHE",
  "key8": "4v7XP8kp7uU6rzManK2ecCQ6aBXYCbHTDi9qFZX5r79Qsbnr3EF3MGgRrPA59c2kmRfpoorX3rGh2D288dJhaBnt",
  "key9": "55ukhfuqshB2nNnAEkWhkXXg8t3wXRHaXZsDbPx2aNp5v16niXe4dUQzgA1nqhqmtyBfRfRKSHBh26rVpUhaYY2m",
  "key10": "nqtuqSPTUqA9Y7q992LZe7hHQERjDLCWV4YVeHttxN34HuhiGyrrSBy8pdeQcf4kTsrvujhHdFzpb5G9PmLMDz8",
  "key11": "FEh3Jk1t3kBZ8n5SehMSTh55uegdGVrWT1YHqvduBfVpgauZHPaZcPPfDem1spZ2P7eXG5nmrBGiiciSSxDvoQn",
  "key12": "MjHaswipW9FmBsmBYvyRHEFtEfF4jMAKBAybWq2ZpzCLXJvCQwiG1nYvRF6VyrqpXtvNwLmvdxrBe4S33VJW5YK",
  "key13": "5Lc5fRVoSVapas5dhe6yFAkTArMdA6ogieyXcz7MmPEgsQDwfhM9LzYDtFQJm8n1rE1qqv8hrww337RSZ3EGyNKc",
  "key14": "ZRk9g8Mv17Ly4WMkA1zbm6MoNBmizo6i23CQKqN2kGpukXJ7r6K8NZfY1KFneTeC6LPRhVnzBpbecogxFoSx9LU",
  "key15": "3rKuqumYP2C3fhQ5nbSiYoy532RgFuSNxDUcbx9XrRudRKdMa7B2Pgpecx8qM5fjSGnU6cteu4uwKqzXcRuxzMJx",
  "key16": "4hV3jjVP59FV6Sv3v1zqwSpuGgjgzhp9W7STAwUvQJr3LruvXmrMiBgfcHUEEZrmrr4LKs5UhR7AHcMFdXYaLkwh",
  "key17": "2oLwQxRrZjujaYDrrbsDUobq7qHhYfJYuU6jpyr3Vx3d2QLFifC42iGcD3rtvfyqEHoGuBUwpWH43HivRqjmW5t1",
  "key18": "4eXGeVSacjJVHC3muarNyYmwY1FtMQepxPdt9vQV8Yy58W3VmMio9z16LJs4j49YvbgGh2wz7kEEZPmJXEzku968",
  "key19": "5TLbjaJaQ2kaTDxgvd4rE8NFxnRovLbhSfLp4NjUinycF2SaGp84xf2SqVPvJYKxAa6N63wE7mS2SoNnzTQkmyfY",
  "key20": "3y6B1DTb6MCvcuChBACfB2YusHWzEwrYMBZaCaBr8PWj2bdxcsMCTdmSePx4Lvwn3VRGV6XAYyFUCWxaw7pKhzDf",
  "key21": "4ViTUhShBopiqGSUKcX1dbRHeZUgcv4r1q5crZ6eHpsRnN5kRbvTzhepcaTJWYxj9gjoUbE7PNTJ1hBrYPoeHkRY",
  "key22": "3y7XU3dsrUbktBahmoc61v1hXqidkZScWmU2omVX8j71dhWxZAeR9wWh9gbkdZ5FFm4Rsdc3ziiZ9pybYstqeh4r",
  "key23": "KbUn5XKS5uBHVHqdRfuQM1yakd4aexmDKyQQH8Rn2oczWYYGzZtdbXdKATrn5GybMginWyhM9Td5rRSA7PeSpn5",
  "key24": "4JmvP1ZpkDvt4Re3vM6diLmCKdzJrgT3KTRhnemG81od9aaFx46LW7opQmi1TvzhvzZJUHZMnGVRHFG3hoD4rwuC",
  "key25": "4N4yLeZkh4NRSLP8BFrYrSG39qn5hjarj8dnpyCyrz2VTTtHkGeYvbSxFYhyJWW1Vx8XMAKUrcq8dSWd1Jox7pXJ",
  "key26": "3sL7ivpimZLkRLTvCphz1gRpj1ihpBCkizSz6yrhjiMMQKgqS7QGyQge7hgRcgMJAge6MCzGAvZ9iCENn6G6Uk4E",
  "key27": "34EooSZ7fvg5V3YkkbsekvjUCWRbXNdwBDmFjB4TZ8xopbvMKH9ELr1AYZfytTagxxQgxpCpBoVWB5hNVv3SieGr",
  "key28": "3hWx9mqTSo4rcry5585qFF3iazHrpU6a6VRuCFgBeM2zK3LV5DzNXs3mSxze1oNcYBTm7sfSa7aPB6kyW9jUQFqb",
  "key29": "5rAhH1GSASyB35pQvP9x6NcWHthMYe5RHZRhDWbFzKeFo4DDQR4rZb56GJmJsGg2dG7NBhUkdrcoW66VdkhkfGR4",
  "key30": "54sRdnNtF3RGuNUBFhh68T69QKSJUMgtLwZPYYfK1pfzEPiDTZ4qKyNjfR63H7SNBHSpJ5LVVcF76go9ZkBk2cnX",
  "key31": "2WU1CJ7gk8vmQnRDQTz3U4jHH8AvFsHjr7YHuQeLCv7whqMRNzQUo9V1vqYXTA8Lku1CCdYxh8jVVusMDLCkJD3F",
  "key32": "2NUn13p54dahNVKhFNwTGeCZ9AvpLzBHpo4QAKtEJJUpoC83wnLh73nUn5zmRu9Y9xCiohXYpSFdZQ4Sm3cpY8nW",
  "key33": "4MjCvQ7LExpcVc9PBYVkF6jAmLF71h5W3nwyunqr8HDNR8oA9E3x6fiC9MdBUUruKuprF3aNfUYerkd6i2BDKLBp",
  "key34": "2HehCSFEvCaW429qfUfS9xzWMzjQcDYbB5VHAd4wdeze4yx4XyoLdFytV79evbXw8J7EBtTHs5QUP6J1AzMBmrxS",
  "key35": "3GdXDNzHnXadduRBQ9zm12AFsfsrj9FVpA7TfEs6B8P6V446uACqc9XLGCz1oyQjLRwLJeEfDZz7eEeSDApDUwVA",
  "key36": "4qnyongk6gwXwUKruuYCHtW18zCh8S2AvnmA8i3tVDWe6dYZmJh9uy2oaKidyNXXLDJkbN1NsEJwKtqL4imhc6wy",
  "key37": "2mvcmu7DX88TF7pSEQAn9CNtWqLcfULYtscmBekeVwo8WAeZ3MsxAEydjnqUdhhE7jgEZVMtgJZ8VazB8rhAdyUs",
  "key38": "4L8E21yWHnfb7MLAyfRHdinqgTLhB93nSzN3M6Y5XhyKegN7cwUwui8pvnYBdVVusXsfmHHbWSj7sxf4dqhfBXBX",
  "key39": "3q7C1aWMzJFpyWY2ziWSXcSGVmymXmNBCX6VPzyeBTKinujvhet8C4agEUEyJjTB22pnusoVNAN9s2vY8XNyhgPf",
  "key40": "2QpGNw85mhHZn8uBtqexpQ5MH68XZCAmqzemneSHRPf43brB5Y2Rd7hTgEZTsb23F6knHRfX3h7UW3eCRM4uKzrn",
  "key41": "5DgSBShp4L2N4RRv6neZpZKxK3SosKdjX7c4GbPhaGopB8ifPnTkCkv71qtc3fKff67SQ3KgZBQ5Uo86JBrXvAZV",
  "key42": "3hKNh46aYBXueXJeNUmdHSpgnvSLRKj21Rq9BC5tb6dj6Bpn82uXkAUE7DNpBFFf47uALewc1RjJw1J9u6gLDCxs"
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
