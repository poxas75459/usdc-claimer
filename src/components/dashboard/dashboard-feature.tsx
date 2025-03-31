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
    "tgidhgCA9qUb9wCqePQH6zXQYHx8fRRnYbpXunF1mia8o6BEmV9Z6tVEgkHH8oNYuBwRtqnpkJFSd5WAvxPnzmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34h18ZECZXcPFV7wNGdRvwD7bjqE8ZzXWNp9PRx9bW5kRnvf3k1BvXsHWnzcYg5dGMr74PKVvyLx7vtSNqGw4nJ6",
  "key1": "qtbXxbg6A35NNJyqNFg6J5JR6WodHSj4DbvSzHh5SL9tL8Swezo2qbD2pwmhTMxQ7ngatqG62E8J89ptTvnqw1X",
  "key2": "4Di36uBFdP5JyY2DGVnoTCoMwyboF3YFn34x9MXWJe7UxkkeWgjokjVvgUYx6CFzzzHmyoNojy4Ros6XsYMhw2iF",
  "key3": "5SuWpNQFq9F6QGHtphK5YQoY4u92WEapkWkSVngwDkccbE5pCcfBAKrDUtMxcRCv6xhEWp8fknWEkvezpve9SHZh",
  "key4": "2sUtCcTv6hgiqMJuFASUa2y24yTrbKZRyaN1mp7PQQn9bTGCHrdFqMoDzWScHVEKJLSdMEUNYDVwjsdviCejkCod",
  "key5": "4rpEMP9MT54epQRhkXxvAjkyC3N3VxD84TsQrAAYbJrMKUoi6tcZctf7LmVowG6kKwvFLb3amRvEH9rDhsoMGbne",
  "key6": "27MW75ysQeVD2uhsbvc3rRMW5okEWRXZS69t9QgCfv8uv53HvHPTRFP6GvpuD9u9Bd6FqhFGSvDSFEBr4f6yupKa",
  "key7": "3SuexRpUgEFacUCnvvxgtvKb4TusZVfSWYaSwTZBdnGAYHhEEm1eVBtyrmiT7CyM1qckhZ7c76UsYbbYT5QsYPnh",
  "key8": "4ruPv75LRJuD1Lg5auZXSr5d868YLq1KScCUrHYgEjJKi89t5bwpHVL1kyv5PSLkipf5oHnGy4qqcs7n2UiqBBzR",
  "key9": "2LSdJkPsDGmr6fbkGuK1vNCyXHvG9tb7fUTyE892VUJWSJpWXVDBcVAjCrJSmfmdEWrpRLuUFAwcqtgeYVd7xcQv",
  "key10": "3KKEvFEEXVEodRkSLMtpR3jRDZDp9ybw8v4oEZc3tLC84TkigXHuVMRUJqVqSgoazhN69Et5TzE4Krz1tFBD5nQk",
  "key11": "34oitVQpjKFoHHWHVdB87wKKzoJBzXj12FFFmCiQwuofui9KbFTQ5BxQvEvo6rDDoghxeVu3zjvQqRFCddf5RimS",
  "key12": "5isk1buPioH8yLET6jEH1Qh96mDz92qX19KSfPWP4f7AYrv5sybNUvHoC9yizE826hMLM3ffUwfiCd4kJtpBJsVW",
  "key13": "2ZfSt4StsqQNAkRDmdGDfU271PCDVy8kQ6euCoy6MgvLjPucDyu4NrHjjop1ymziQLN1wnY2Jcv83M6o5RYAFhW7",
  "key14": "8mWQXdqvH24e5ETNxDQWJScfz8oAyvqb34PqeX89PwBT8xC6HJSUqsarY1dDdF3Skam19thCbaAaUfSykfPgA4m",
  "key15": "5V5J9b5whfELASzmZrmxj9JqY15GJEYU2FmFvL4GFTPggv1igPSJjQKi8veKntUoDFt17XbQBFDUTqdP11YADruz",
  "key16": "4xu53oD9y4fqyoT7vxoW1UzU1oA5eLR7J2mCVUzi8RyM9ktoSxjz1xbjrY8XCLUawpxiNrK57PEGUyCoMsZ9MDcY",
  "key17": "4WRQTdQgSfyxvDoxyVoUPUBn8fA4NZeWykSXymMDh13x6Xqvt2EQf9tUBKYngNwE6keBMjQEtxZPi6gJsHXpuyWX",
  "key18": "G6zhSVDNffFURmQ2TGtGrwjMLmp1RjDG4QmKsxbgZintKhiJfLNagPruVmubELiYxm4AgsYS5cDbCV7xXaAhjLZ",
  "key19": "5nayTxcXZY5Va2q8fBWAReeh9Lh7zJ1petM5LHAbtpGcPMF7BhbUSze2c1BGrDy96SpRWcppT7yG9K3PLHKPnNQD",
  "key20": "WtTi1KMvNJ8BAXTcUu1iUvKtGu8U9EXMzTeMwCxTf7wD1Ltn1cic6Ea8KCbkggmkrSriLXm5hzC56Gyf2y8NTCj",
  "key21": "4jiga2e2pQJXnYNxXxNnRNukJLaFXjS3dNDeiGYy8dwTYuqW47bTNkGZjnhSEM5TmeqRSx6ARsS9GWkZtYtB5HaX",
  "key22": "2sGjAtjjyMD4VHwbrfP61CKpqFuB5rJjLLkQ9VVJuU58WaToo1Vss1GXSwcAALJvtso7dyNMfuGWpxhx1pmQdZB8",
  "key23": "2DgYwHATt1WQM91PRc3t7oYocdD41JW6KnoH3Rpj3hzc6dQ3vsth5wygZV93QCVHFTgHh9wrWUWM3EThQtdNKWmB",
  "key24": "38Psvm6kqDXsBknychw3HHfDQEeDbZcXUWAYjU8dHeYTcqD3Bmw5ERaMSg335xZw4ezBAWLsABxfhMpZBUh5WZkv",
  "key25": "XFChib2oSfQZHSGGzymyBiGNsiHKaChVB1DD5BE3me4HgmyKakDRcMn6jmNd9AzXuJHJsJUxNjzsYNJpW6B473z",
  "key26": "653rdpqHoETXt53ym2YpmDyfFSHmCdyx57VZVZ8UeeDiUW58zhh8zeJw8G4pxw8BsCRnPPeHXQFouW6if578sg6D",
  "key27": "2Uq8Gjw4RjFvPAKVbP3jnUiJPQGs273W4fY1nvse7NgQrrGN1KcLD999KWzeZy5wk3sryr8HvF43QGFRjAAA1hTq",
  "key28": "5E9u7tU7tKUGRqgxk6JmKanhEueHz9VaTYRmg73sG8p3sNGYAq2Qg4hhkpCEBKfGELsgucVzWMPdhxTqEPGUYFMj",
  "key29": "21teVsDMUHXzmHsCRvS84iV4sbFKTtKLgnLL8rQnLgNK83CJKk623L45zaCo6vDaZACbXUoFPEopaXtjC8PmQDnB",
  "key30": "5TMwbVKFNbA1HzFTFV7kQHMaDveFhC1gxpWSFcYX4Tc9p3j5TpB6pBHzzwB4jS2cEiFr5w9AMCuJHD3uqGrboYtZ",
  "key31": "4SGbQQLg56SUuG4V2Rdc8LgXKvAHqcPgVcmzQ9sxMLoZmeJmkMU9GiB8CLqowjbhd58G8i3FH6up1Pbdumq5Qpev",
  "key32": "3hvQA4BgoAtwMUvDRy2nJ34DoBhVgH7WphAMHwGpduvUfa9rAxafa8WGeY5QHeLpogXgmApggY6dE7E2tGQn45sG",
  "key33": "43h6hAKaEkYWT8W4mGZpF4aXCPxaMtLhsaNUPbJErXfXXMxi8z4QARVZop25bPwsjeaNU4WVKqyY3rgwhQQiN7dh",
  "key34": "fV1xYz1J6dFg1jq2hHpC2TFzT98uFo88fuvTkDweGkyBDE7BJ1iTuq7Z3Z1ym9orDZKdLhc33kLFwmWoNu3Q3Bs"
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
