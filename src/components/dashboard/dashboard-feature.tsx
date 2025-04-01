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
    "V6TeMRTRzr1RB1tZGeUZDvsuvmTEJjSwMhaNeRXWeqR8R1aRXCvAWxhfVuAVTm5TiTgTXnMYbDqHUfoSEA8FEeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71zVm6rvfAu68DuKWoVivWfcEnknR8XvHUamU5T9hHF6XUfPhkvhkkGjw4LhKLRkDnYDyJLehrTkV9n16APg6ya",
  "key1": "2xVjDZLA4mrGMDfBXvXutoAncEsA58FrprdHAvL1YAN5DMLMKpxq4FGH7yxneiwD6pZcjAcoEMidHPR18Jw73sWZ",
  "key2": "3eDMDUVfyyQuMJavLQyrpCE9Nt43GdZCfF2roNALDTVTojM4oVFxGbJqSA6cP93TQf69qJsXLxcdmm5Fo27JKSZK",
  "key3": "tZMpfecM3WAdMKivBFKUhgJZokPsEjwaATnbTkuU8X3Y4dYkmrqdqCc2AEyE7yy7a5SMyLACazD8iio4NwPZDaP",
  "key4": "2Xdz4VfUn5i8xURqdSsQJKMdLNKkrSPs6kzatKet8wGAGs2w9swUeLtpMkRaP5iqsbTtQkU5W5T9vaG6r9p3JUCY",
  "key5": "4feJchL1j94HdGMPU5haWZDuHfcC6npj2qg1qPYmn5RXxC89BuiRnwTdNuxrgVEqwf9Y1fZR9TaZJCkZ7JYhyqDJ",
  "key6": "42MYxbFHrDdyCATmqq2UVbMVGBZDxXerugFcS35y8afPagXcysVZSLAGEpLebqSUKm4dxJeLV5xHEaiL16jQjy4j",
  "key7": "5q8zEUF5nZ7tgiYHmVKhpvgSFWbpyEoXHE1c7D3cPZZ392f3txumWz3P1zLcBCfgavLhMizPeGPNLkRdkMHSEbUC",
  "key8": "3Q2qPZJVUfLh37sX5FwnCrkcuJwrmeoXUQ3UcozBSdexT2cg63Y8Xz9tvQXjWsZQy1BNp3eaSgdQnJptGxXaA1ts",
  "key9": "gzhhNH4DcmBmcy2PhbtcAFM3pFahv2YdCq4SYAnhKuRZbA2SpWwKBW5ao2D3BZZt6zLxUYs38CwrtoJWYz6y5DR",
  "key10": "4t4T8TXF1c9dAYqsaiJyvuqh3FsaVfZ9oHB2NobzbddA5jxen7XM1z2n3BKKuQjacQAonV5RSnbrbeMWens2VxeP",
  "key11": "5Mhk6hShPqL1U1nyjqb6FM6smCtjDV2oxDGHtYweujEiwdF97QW77S8TEaW1VV7Qr5PvMpk8DtAQJkjo9HDEyB6P",
  "key12": "3zJ7VnPdD31cJ5vKHBXSNH6XMG7pwUNoJMnEK4nHa3ZrDR1J2uBshSXhyDuq1yD6Mcji1gAJXFNsC14eAPhG4Xbg",
  "key13": "4FidEDZCV4tXA3UXW9Pfc2f4w4z4GykLfv9HAsWuzqZqwWrfWKd8tdpXYuVtayr7QdGrDwdkcKsQpXqyzR2AyRz6",
  "key14": "2eUXUpXxVZBpxWd8W5ghPZ976sAURz6nLxTzM2cKSeZoruBSFQQN6AAFkpLEut5zXku2KfEy3PkgfSpn2uJFshAM",
  "key15": "65pudpKmH5EixsmV8BqsjHdugcRXfQQZPgtjw2cuJfB13K7cVq4iJSqmAS7tgUs6Ep9iXBTEWViWnhECXNzUeSMs",
  "key16": "4nf5aovxprFXZK4M8keDT8NQr7FaKc6rHSECj5PJeeHyfttQ8xYRH6s6rixtGd1cCbXmR9WaGqRy2jPo1BFfbCSL",
  "key17": "4wTvSTqV4LpgQ8NLahYXNyDxDEerUSGmZBE8rtJcBukXm2pJPGopcBsLSiXN8VJ998pJ8Tef7iQPtFxVztENoAP3",
  "key18": "KQhW5N6XQwqoMyiyCGJKtt5WUY2CvPynAwxFiVpi63yTqy9sPsc8VQSYr46zLYuEsrGG44QMejS2qfvPGAbesWr",
  "key19": "38P13eeFMkicKS6RB9u1odU1MBje6UXN78G3Z16sXWcASuwNqKTMpMTXc94FYj3pm4oNmEDRPnEUmS1zauVNyxJM",
  "key20": "47WK57KV9jZDdh4C159rkkVQHBuDKPfXPGLF6q4reY16WD9rAqB1oynVhaFHxMEKsLnzTVi7Z9MVKcgRAgJRdKQa",
  "key21": "4kCHZzqEVtHMXLoQE99e2c77La6YAJJ3JdsNwq6NhB7LSEsUS8FRZHbVBaAfHEjnHHJhryj3mbzNUc1UNBMP4pbC",
  "key22": "4fiMbYsPFkCBXS3mSX4gFeSTJFx1ziUtSevKU6mwpCZMk1B4HCHnasVDfHx5Hw7T5FChVBuse3AbAyKj4jqZiQWX",
  "key23": "QLGGi2fmv7dieCaqe4fGTiWrb2ZtwR6GHw9U6TVGeW6Hnxd1ysdNDoEThr494Wb5ZdaMToU8pJ5exLMsu9pxypa",
  "key24": "5XxetmkHmu1ZsjSuFgRU8CfmAoczQqaP1WTBZVb1Dcg34TNAonJvqVKTaNqJ9EPy1JzFJaZf4HKxJXruMtJjkxve",
  "key25": "2YC5ES3gTEq9Pntna7HoqXRwXE56oQv8cSTeApEmYCdkrCciQLMS6kdYE6UJ3PMMkfRcRkYpuREz2buAZJD4phaw",
  "key26": "ezffM6J8nfxzRNLQ59EhnDT18L9wWbMn22Qt3Ttw9LMsMHBoMAHc8Mc5yheb3fYDJ4WBXmvNjrhuiRVAKTYWJTu",
  "key27": "5xGAHMUTQzaNGpMCvCUdhbCbSXpjzqHBomC1yyDMqNVf2Ln3Wm6Vh7xpJq7oqsJuvSkAkmn5rjMQouCzUszzkaRP",
  "key28": "frSDEuMpckiiFNux8LJ12NdPGfQHoFNFBiSVQfDNrAzAzHi5dE5zb4UhWt9qAm5jSVM3iUbiKngiqUxdRsvEXio",
  "key29": "4VeS4gLyppTRW7qZivQPh5fiES6sbRgKwoq4pjMrNApSTZngMQzuDfY2etcPv5xeZuGq9yduWjRmS98bPkWsWz1v",
  "key30": "2CKCqYDgvovDKhBLxAjWr9rdHKWAZsZLa2aLCCgSsg1SQztgva5qAVkCw1jm9iPJm6q67ccKzxNEmxzVceiCpvDq",
  "key31": "3892XG7VPkn1KomBQiAdxZyVXEgyTzhuK1Z1aZ1M98GrJeXLoXYjZitMT2UruSGaWHxVb3HmpjNaznSwQLhCYeEZ",
  "key32": "2MaLav6hWDs1diefAABdy8M3acGYFMnbJvRBLfhBeRsFLVqQftEHbCY3vVarLEi7dDps5kQTQohiwaArCuhXmjZS",
  "key33": "vE3EpCijGCM4tWNM4MKRyNg8UW4bqTXPs2wbVaSRgEvY2iZtfNvLYYLVGhx9W1pWSB4VofFUKmwMuhX9SWRPqhQ",
  "key34": "2jh2vqZ9zy1Q7xcT5HDQtwdZhxqexgg6WtFS3eVTmEQWK18vQE3XQAgNY7FeerUkjG5wCCJ8vfXF3QotXcK7EeEk",
  "key35": "3CD6aCPJyLi2WsFZVHyhYzmM7iyiu99kbkgq6uP8om2ePpsCvEgiaGwVbFJyE5o9Ry88oAv7bVZvktPJ72tEHLTq",
  "key36": "34DuLh1CdqaM8BrcRJQ9tB39FxazxoNNBx81Mvr3MubNNQpvHtnvzz7pe36HBUooazLeyQ7dsJgiovH43aTUE3oS",
  "key37": "4PQUCfdzPtbPwz9tbiXwwYRKN7C2F3iiUvsjqhwXPXYJ4tWmtYM4Wb1t7Zn1YX3N6FHAV5d2fAn7BsUdEk86qtNC",
  "key38": "hWZgnRQBD58SWg41unaHngDLk2z2UHExtLh3X6HtC5DhHoBUVKWNm2BUp8qRmN8viVfmVeYCnpxCDrm2KzvmCgE",
  "key39": "3kANe5MVR1Q3Jh8xiybQdo1tyKzh5ECtbYnH6hJKCUFEn3RSYEdghwmNDH6f3Q87oG7mx8idicdbwidsyN8kiaZR",
  "key40": "5r77BQGz5eAnWN69SCk3RdWubu2822JNv92Gg38GPa15ox4X4LKP4YhSikL1yvNbf8FBpAZgVhan6BNqg2CM1Apx",
  "key41": "VLHjgMzZTgFbGYzQ4p2NYLderrVMsXpP5s9ZZsKDxj5SmDUJehewaGcKuq1WP35JNK3xsgBPgbv9Lfnen995adq",
  "key42": "89iueBj9p8rJmB67d2WWNL2UHjwtpEim6eXFNbGXyZThGLHTkt4jBTkcpQPhU3FknNyFYnybXywK95SiX7vz9zt",
  "key43": "3RUD1u1CF6aQH6phjgxmKa7xGNXwE7khU2mRF7ZYryAHHZm2HAAiwgxUTqPATtqPPkQpPF8g1DxddWHSzLoKB562",
  "key44": "2gvwhMTFey8cY7YsYVf11pXGvnruCP6zCe3spNqTrSJkQK2WLwGSTepHKSe2xUW99KbzUhFXACmDGcKNu4SPuEWU",
  "key45": "41L3b2sfENWhEQYpGPuStnUYYCMUDaFFr1pVC1eNCnruNmCggqRhFFhN9wRUufnpn3ymPd6Yg42EGv6nGYeLS9Dm",
  "key46": "3yhQY7yJrjTDST4A58n2EVf71m6bXoBPgBdNnL9rUXNr5yxCSDstr8igkaAiA8SYm4ANuoBqQV2PKw8pBv5M4uu9",
  "key47": "4ERuwBmkJoMya6zSGa9xtirEm6cjRcgnhTCTMyUWuLmJQCvHPhRM6Gd7NZ1uZe5i3KSL1HXhNZoDszER5cxk7uTt",
  "key48": "RimJKTDUbHGEfsA2ag5v5E9rUjr2AmvUw4R3jqKf6UaGBrsJKQSMcKB5kqZ7DeGKaquzprTdgTKMSFNG1fPrWWL"
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
