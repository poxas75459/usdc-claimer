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
    "2SEE2unwUtxznRTBZgFAUSeZBFwWfhBiviK1vgTdPFsBy9qwFazN5JfsNWmvpcLdse4WZzQz88ZZJkTAfB5LBxu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWv86kFXnin1aJbn1QX5RhG1rbjmWRSbRaFAXK9Pg7MZRj3GN3Hgw7JaCyaEXPBCrfmtaS2z8gfBRzDptWDvb6u",
  "key1": "51iWU14zm7Gs3nkJZtTc8RfuTnm78i5RviawLwvBFtzy5f7gLXi54upkEU5os89ER5pa3t9j7nqLKq8ctexZ4hdr",
  "key2": "5vm3tzwD63XhetNBmrsMSBnwdWfjjG9Ukm28bHcYqt9yUmykRM1sLoMFHoh7mgcUvvD6ju5uydgxRtQSV34m2Dr2",
  "key3": "5DXY1AQbVownHVtkGdBp7j6D9BmsVVB7hPWxRdycL3FUVg95xKMjMNAwjJJiq2yeNrdrbzKKxXgTKSKUDXzvkGgK",
  "key4": "3dJLGwMwWWwYLu4U2qkes1mb5FyMdFgVBhY7wMaHG7BjuMvZjyfEqeCf1kN17BcpVhCThLWwrg4rvYMuYcxmZSQf",
  "key5": "cbAGpEUQCWExyoyhxKNRFGbVXAsEbPmUqWC3K7GYBUuDgVCrU9pjShYv2B5JSEGsDzYHXDhd45c8E1XkL5SV5QN",
  "key6": "2NHpeYB3eL54x3PnL1vWY3gQSQTPueLoyKBRmuSeWGzX8sFt3ay3ZrpgVv5yuGMDyQCpCKsHG6enotQcASyf3BSQ",
  "key7": "3nETVT9gYN5RzPBZNqay7NM25zFUMoqbmzkYog9H4mGghM5QxAbNut4hSqVBiC92gbPgtA3yuhDsProP1RscGYSc",
  "key8": "21gH2fKviMXReRTEdKRyL6KEUSW7bPsCCfYbyQExbvbZd3so8gNo2RtuoJSofE5yZJvfny2BokfjqjCyFYjo88nc",
  "key9": "5Z2Q6qo6SHzEHULf6vaeV8q7SMgVcpspRKLJgx5DAeN5eSctaLCTRgWpuT4J7qCsMZbSv8eRyL4nHkSiVGGK9iF",
  "key10": "37EWd3JA8JPsKiSNvuzg6A1oDd8fnsG6eqrPa8PgitRLrycneLAh4cLx8pZCfWkaFVoioxogKPKSGWew49ZR5Va6",
  "key11": "eNiNLcEvEsXHAgA6joMVDwXtYPGgVWVTJHpg5XfLirBsNw4PiwjsbSQx3s8QanHcBiEkMkZhrfNVtDuvyf9s1v4",
  "key12": "5mFJdtcWG2fXncCGNLGkGHU6hoetvJuHZojQQvXprrwzqyLMwTSMWGnZ4BGWKaS8ZJPyn2se6wFd3a3fqxjx2xDf",
  "key13": "58QtHvZBmqDaPXQiamT4E6RwXvT8uXtno39cZXD3jLy5MbD1aB4X38ComW7PUhHoeP2rMbsmhcS9qZCrynj5P2wB",
  "key14": "3TV8CpMBo5R65xLNYuLDpjtzrxxCUSXQdYS2jp52gbiKCJ5VyifJhSmkLhEsyMdQhMUnyhgETBwnAHfpTm8e6HKr",
  "key15": "r3QfPpv9tBNHJykFP8nHypXbk3nZb8zcZF1mdzoQsaj7TiGLNNfXY1FKUW9wLzETq3jvEk7idcEwhAeQVyEJabZ",
  "key16": "2mj8CZPniFCZwvKEBEfmTPEnW1y6FweGhaX6H5zz5idyzozRAtA9FXRR2RKhyEbWgYySB94ttgPYXrhgUboDwduV",
  "key17": "5v4vkDqsnXZMH7Jri1k5HqeX6wrg8rFTUjiWpae1GeG7b5dw6i8teVXqisjpJNX4xBRAt6QkguNCwAjTRKxp2GyP",
  "key18": "4GVx2tHLDd97qfNiR6s38jZJjnn2yUHy8ubsTvHD345nW51GvATzfGxcSk2dDwZtmjcuVZzcacAEnjmZPLAJoGm7",
  "key19": "3qfwKPGiPtUPScHB7jMgQrcgYC1vFnssjGhcSoVAEbNzF1R14yewdP8f7ugfZBpxc5C2iXDb9xFgAj9bMXq8afnr",
  "key20": "5eEWrpr5SbKDfTJXwc6cqobAPLf8HS4nGFeJb8bG4mhAc5H5UPz1fGgLsi8FQRaw1K9cs2SbXgGQRZJxEXTHZnwX",
  "key21": "4P1ud13aUvpssM4WjCJrUQfKAS9bRKC6du783P2qYgfq3sxr9KjVv6oruL8vhyaPxkfZPrieuwbZzw4HgtHb9et3",
  "key22": "3juv1bA8Ek6av3EiYWdiqKG4vx9zyC7FHHmTQBGeXTcjq4Q7RpKgmKjuuGcfdENM7aJ8ehbLhVFGdfmv9HRoY175",
  "key23": "43sn1NUQvyRBQzVZvCTkZaYnKMifR1pKx4hRPV5wZHLs7Ldbs4ardFrKEVU55xU51F17KaKZG48vppU6U5S4EJaY",
  "key24": "63CZzgvvDELwUiz3p4XQUQ25bgQWT579nJ9fY6QZ1E2bmVgkQ1x3enXtk59nP1txkyDj9aLyKzM4Kij6bohSCw76",
  "key25": "2LKKgBSv1rjgd5zNzBccn9Cbs94SJNcZmZXWFkwnBNpwgs48CYRuVkJSwnKnSsppwsecYo9LRDDbUJZfec9J7HEG",
  "key26": "2S1HoCs4RwXf1tUQAiBEjxyerUcF6Pzk3xUX66K4Q8dSoouGEjMw3Ab4a17YFFQ7mnVb9ZH3SLzjJkD4ymZ3kpyM",
  "key27": "ebHxTVaMyeq6ADvHt593MJfZ1CUUJ363i9T9kN3ztSAFbAaUgwh8HvwGVFdpSyeRqUE6PvEPdSiW4tzJ5TW8giR",
  "key28": "5DWarjiQmzntB8rhMGKK3r2JQGK4yAAqQGWJTRPeuDLxgagEm8wU9uK4UqAdNL8GaFLExfmJU85djsUZ44oNkNpn",
  "key29": "2abgQKcbQLBQ5mqx1eLGhXGs6TQ6Mq4VU72NJZG8amRSEdQqPk8KcBodAciML5Pi2KYEJMeiaHXxG8ejNVf9Yo3M",
  "key30": "4rsAX6usNaXfR7L4QqeRgwvYnkGzFEmNVxJNoxzBpYiChKJWXDqox8yR4kEWjSa7Z4a3wVNCQeRUVp2AfgTUQvJS",
  "key31": "5UasjvZth1dPXdWBnNdi7YoVWtGo1hufNh3K8S8uWktq3JK4JSZhkxV1XtTV8WUuFKqT7DHkQv56AyUR9z5rM1qi",
  "key32": "4NZp8YDZ6rUaq9Fg3inbREcopE5icMzaxv8ZwVfMEnvnQtNcriozK5xmjSCLxMwjjzMP8TEN9koqX2xhimJao8dq",
  "key33": "3SPfi9J3nFsB36urEigc8Ptz3i9qMJUMahZop97xT3huCYfNztvKDdgbwKQ1KEFA7CtYuwdfyPjYXLWcQn5G4R3K",
  "key34": "5UGy1VztJdZ5mUXxDZLM3VypmEvv5xWwN9AtoBWWPewLvMS1bjqQSa2tJ9Wids6Yu1JeJCQW3N3owPr1YawjWVhq",
  "key35": "5cAJ7aWPYnRwLiJbWfEvEfSzDbY9JyXARKeAUdoQD2BeUZza8eUjZPgYEvpGB7uPweoXV6YwgcoovXrGTcCHfTVK",
  "key36": "WsTRbfbZ82mYtbPAUNtJJFQqSH9yiypu3M4u8uBL8u6Cx6fjeRtj7bD2HW6bSLehUHNqQA4HzzZNZgBdpfaM8Ei"
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
