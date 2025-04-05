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
    "2s6pqQZDfcZr9tFyEXW7crTEJGWpZujYyVENFnYwLf1hV4VLEjHKVGGZYJT33v8s1kyqjTEQe4Ue2DnBYBcwcM5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uB8v2bGDwiv3kBvEzGWHqVtW1oH6F87rk6pFkTc6YLvdF8pHM5zxmDakaLyrqN5kP2XZekiLtCejXZjrJ3abZad",
  "key1": "23hcUKvYP4t91QrBw3qp54zGaooDFqu7GA5Yt6BANcDxYtZR9CLXzXKy5EYpdJWfaHTGRNqYJyaGcx9KVwxoTJE1",
  "key2": "42jU6hUYaoEkL3JdYmAU9xAX5GRSBnhbhLNt6q43zbiTuat6RJSxQbhcpt7121zy4GXWbvJ9NZfCMn3c8hK7VQb4",
  "key3": "2ZDhwbZPM3e1RDa27TvmMB886XgsGBprBn2vnApCXFrR3vsZbwezHThXKBtJkC7z3agHHeDc1sfANhE7sLpNLRwS",
  "key4": "3gjHsjX3yJsUZEwxB6DKMAvS6w66isvbSjYDPK6TpQrHd5TU5bjgMTuEe8W7rMPK89J9nxzT11p5T3e43PpK5QhQ",
  "key5": "3s89o6CWeeonhecnZ6QiaUsgLeUkJSV7qCVoTZ6CBPrsheUudPg4ATyX71yPsEPR6ndB8KtyiR8SwzZjDmj2hNAM",
  "key6": "3wQZqHptVzSiMV1mBqEKTfD7ehzTDrvX8HBHuuDGpiZcGrg9V3pxPABCcj7kBeMuTqLWnEjWMPsbmKRWomDQBbUy",
  "key7": "5LwV226FkWefFvnienaAC9QKGJHTkFNoh5b7U7qL3jE6eV6LriXP5mLheNBbvAWBReja5jwgx5VAd3WAvezs3wkR",
  "key8": "hdBrgjHbfeTPLRMGyaBX783jkWkobK3bsr2amk2Zz14fBP1aiZNQTzH81NjBjtg16SUvqMiZfmpQa25CnPiwWUw",
  "key9": "26eJzYukptvFMkzkxxhUk4D89hKAUjJQdzuTMkd23kMibtzgs77Vkq9a7geYtbTSXxRusSQLjzX7LxKZsBMABbzK",
  "key10": "98fU2o61M1Rxf3BXoUk66RF1g6aZV68Kphdq9NjiG15wMdAwhuuzsMxwaoUpF3bAQwcN7NQSr2WRGctBDQRpqmJ",
  "key11": "39jBgmv2toJPPTmWTz2DGizssLf4YGiEnG8W14L3Te26u7RrLLtwnhEEZTodemAV3ytdig7g9WET7RFohHPYCBhu",
  "key12": "2SURF5u4Q6GXXoqJed9wsarkXmtEXegia49fPS6mLvj3UeT4QFiHLgc6giUT4S36Mod2tW4CxtskXH3Z7wf8jxrV",
  "key13": "wQadXPq9hPgKi1vcrVAqjo4PeuNAYbPKuYtvrzxHUT8AztznCrNnEhu8X9zv99mv4ufGrKKSvYKsuQotMK29WBc",
  "key14": "4D3Sj3qNKYtRBujv6EpbNgyTZGzJnTGD6UcYop54dWhNpQpghp7Ctti3s9uCJkAbJVnTd4oyjrXMTKzkiCNXCphR",
  "key15": "2NftLuuRoGRDcoGPnZjfKZuLmNzBTTd8bFCvxRR92goTAY7MUiogPM857jZUqnG7gCt9qfdP2MmMaVCHC4mCzXJb",
  "key16": "2WXGS2ATJfcqdRerk7S7CfQy7w8arr5V47osia7ZJpuH8d4x4uLhJ8gARrVrhQFFxn8Q2xecGMcD6WvZbpRGGjKw",
  "key17": "4b5kVPr8V2UePy3776bPiJSQpRjecMFphNdV7fCfDdSDbULUPdmWebNKW6fXkudxacYoLgudUqcyJktQ2m65FL8Q",
  "key18": "5oG8k32nN2Q3isvuUK6CXefAGNUREGLLamyFCjrK3txMX8iXYhTJm2Mg3GphQ4L8NK4jQ6mH4TKmksC2Xifc3UgK",
  "key19": "3gaYEUdkrhgYwhdhJTDVhTieG3uTEvqYtfnQJd4jX54XFVaMyjadqCvqswvvfUMHNzRTrAK5w5SN6Fdghqd8XGrG",
  "key20": "3aJ3pafemwDKxyk5dV8XkYdgB4dsF9mAQKQGvuU9jR25uWrRHjf3V3TsNB3NNSdq2ACH6W2jSJnebTAS4MJt5pRE",
  "key21": "4xNGTHeGAJ3ppGVvT78YLWmM936HsDkhcMAXug44bH3J1aZvaNVzS4d14ppqLtuX9w61ZFoobFdaz1fksiAGRkih",
  "key22": "2Tem2bHc5cpbeDSorUtRjX2gkzpunALemdottbTuTHB18YkCfTeYry3AZdrLrZMFhGDkt7djKv93hGnfQBfR3iFc",
  "key23": "5xcJogyGwV97pYroMzyDGxWpoMM6RYvvPh2cNobRQXZCpekeWDRVLaUWKXD9X2mc2r12Hg4aMXsKUA112rdaKAx6",
  "key24": "5QGH6Y5rNT7DFcaLVqbt9ahkwVZ6RiW6vKofz2sYC2WWdHiGM72rExYBh7VjkYdPi5m648S3A6ppUanKrEp3QS6L",
  "key25": "4gdpvmmF43SZDUyqYUTr4hQ86gsRGnWNRqBJ5UuHXTbGS9q9o2w1H7FqZHhXBidEDtD7yPR6Z8XD9yYs5i76dUFz",
  "key26": "57wQGT2y6ZVPaF6Rtrk6a73scNTYuwZ1JMeisEgRzqxMGkRUVAfxYGp85HbKXsAaL1qZKsNjFYEnj5hBJWKNoXJ6",
  "key27": "44UxFouP8gA6K9yqvnsfjTriuLtDwHYR2yWD7xkq64wQVAYz1eS9LhbYYCTDSc1JjF5tFcyDRWuSYiQXxWKCoSHt",
  "key28": "3RrqpmTiYdEVqbNEoACYqEQt2jiDSbyPCTSNXX6zEmcbzFXSDBSLLDKTt5JtFRh2y1cJ4Z91F2w1uRtLHDkMDEjk",
  "key29": "31nnqY3mZwoUWBtA8UnLMvn123dwjQDP2WBsE6t1GAMRh2BJmDz2pXTheGUtBb1zTeD1vgjydRao5brXpd1XodSu",
  "key30": "aTZecmWXbw1AR85jUxG1V9j61sUdMkmyLEDXZtbMGMFfyNuybZr9sRJukVTcTUhuQX736cPhAmKupjYjyjYKi8R",
  "key31": "4rNCTqCXKuS8Kx6AX3S4um8Ardke6Z3ddbB4hLDufBb3f8ufecC1HQgmoCNt8a6N9UuDBth7iwRxaCMMfZoyWGNp",
  "key32": "nuD8hpjiuG7AGMygwFPYkV7iGi32SQodTuA3TuYv7rRXEWoe3n7ooPwvRDuudhY39kAbnifnrc4r4xcmLYKrU3h",
  "key33": "3nC7ZvTf1dsRveVztvCzhjDJjYWRwz8hKYZH6c9xZkbK5JzQSCvKdaQ52KNjjXTgwjpaYUdtn3iXd5hQMkSssm5N",
  "key34": "5zEUSY54od2SD5Fr8pJRAEknVe9n16yiaTBdybpqL4mrmPTxWbaYDpyU6CZC1gompgLWYsvVSybWVHmEgQhnJRuj",
  "key35": "4UUko9aqdKFdci4omL6ojR8EHsiguK2zUP8u73Xd7fsZmqgTVypLKwZ6cppjBgW1HVWmbuSXVW75nNTagLzceRoK",
  "key36": "51BiWQeAWRCAQw8i1y7xaUFrmBgx2dMfB73TEyfyBHHM758bv8t4wXCSv2kK5Y7gfGs8HcnFJnZJKKGGsBjKNWLJ",
  "key37": "3p3v5RLPUev5JNEnBPkDAGvPpkqpror9YUTgF84WeHpPsKquvqzJbUcCMY2xwzL691rfmstLUKXRfNWcEHe9YdMf",
  "key38": "5LtvpvCjCUeoW4igi7hHL8twczywFLzifpZeRPzpiccvz6uEwnLunQGUeBs7xTHiy75R8vVXFhuDvkhxH7ApFVnU"
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
