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
    "4GkFUL2bad6ueeLUgdLHtedZvmAJKmqex4cWNfxk1ysE5jvhL5mfkW7KaJsZAsabWNciZfoGKDzW7siKm7NzEYmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2osDeNeyo3k2E6MLyR2FqEn6EfkopdDmpKJQV9AJbfq8duaRs6TCkLkTBeERLQDNMSicJmeR16XPkwjBphZMdBpm",
  "key1": "CZ9crpq5DvBA5a431e2JGwmsFtJcCZFXmLSzYjqafWBcB8Cwkr2vn94XQhw7Jf1Vfn8u7LnRceJn83JHiMbsy9u",
  "key2": "5Xi7iAChsihh43xcteghka9DuTZ5Qn6Nqkw2QFLCYZv4vBNMxujtSZrkHraMxJq5sjfLEGofq5qzfxccTVmY6TBu",
  "key3": "4ue5ZXtndvd6HzV1FkSMbvRh9GTzVRZ74z6KGNCgsi1nQ21cnCVAmvohhFGQuAWywY82bfC9eomhWGHEXQYniW6W",
  "key4": "i5ZpMsak1mDyCkyuPFZhBc7D7bTHjf7AoB68o3gHpKmxNeJVVLmtaTCAn7bR9zhMB1V1DwawTZWv3G8gbSpLE7a",
  "key5": "5myUH4eYG6QwkW4nPcXJJXhv81PA6dzVMu1xK3xQDuA3PJQUBcUGyiX1LY6EpT3k8jJkVAALNC6soJxeoxnMexTP",
  "key6": "3YKqfCiJtz24mzVsiQ6XwpMw7SHyv556MUqrbiyu9GhmZDM1KPwKgngcnJo3xm5qW7Aftvby1ZoqrdedLxkCBBBB",
  "key7": "616Q2tWKt443YEPTMN8wwnPcodKfwAC6ZRFwT8ULy1o5RvZxAysD8eBGA6fTrHvkxqbsHEXG4ZChBT9DPSFpNAvW",
  "key8": "3TK1cMweKYknyR5M72jq3w92jpbmj2a2TAFw2cnjMtNVFM2udyrgFFNtZ1pbCZE9TUnV8RVQF1L6XzrSSdDut1qX",
  "key9": "5Jxb38kaLsj1awEvMxZrww7NJKop9ptDLiKMbrp82TNsQfjKJqayrNw4UmKvkvbjBsX2vHWSnh7bYMGmRviPySQV",
  "key10": "mPDpzFZZue6E1yL6HjkzhZakXTeXS61oHhofSKykM7YioggoxFU77tdnfJAuEf2Trbz7w2j63G4fA7wpdPkckGG",
  "key11": "216TWgk1Qvb24psqtYosQgSVJZYT4WXVwSrARSmi4BzDV81pSDvyrL4ejMzTqwCXrreMrytf1otVPmWdAttnwUq7",
  "key12": "3nWYdZd6cpLrtbYsdmfu9Vxmw5ArgsSSWss7GivjE1Zpom7BXw5V4F2x3VS2bfW1y7LivNdbybiJE74yd6gADCpH",
  "key13": "61UnvyZHRWaswa3KwieRAftJmgSupymyDfTteU6weYa5M9m6Mr5Q7e6MWAGNqwUt91id4AZFKZ5dFjBPyYUzLk3G",
  "key14": "2iMWqc64xaTS7VcKM7rswPG93kAkvtf2CfoVjf4ZKQW8RFAF9vCdqPkYC1aq8j1yWCz28USEqnL4CfoRnrQxSUnv",
  "key15": "3z2mW5MDT1f292x8T2Rs8zwqi9YHMsufUuXqyLH56cr6MUFZ9f4B5p4sGcV68U6B24B2oFhzji3un8bJuAZnyet5",
  "key16": "eaWjLVAaMsmjhjdVW2vapJZ1RHRErtR1fKJzXNPcUG2fP17LxqXco7qzX93kqTusFyci7gm3i9pgT89UGRmo8aJ",
  "key17": "26VW6t947kVogvnorkjhWuDSpHyAFk4FfNgNwgZuMxTFePE82ky7v5d6ir8cDYGNDpU48syzyRmxhf2wTGDt6d44",
  "key18": "2YfPbia9b41QvEYtRWAWTfWjrRC6b2EHhSxNkrJnCgpi9va9dUwcoiAcK8paYHRmPENCtkp35dYKuog1ptfzAUHj",
  "key19": "94spYeFDSJgj87kVb9kUoobT8LVaEXkv2JuELkemNXJcSFYGCjReArgcBfy6wY8yybnZuEDCcZzFP2VqboRi9Wc",
  "key20": "57SifCv8xn9LTN9BXQKPBBLaUd57V1K1pcsHmHXTFFdaMe8c3yRYj9a71on6xtQxN4f4qZGYoiXVR3atfs69hcq",
  "key21": "4XqtQj6C6GqAPCqJdmMy4FkecH86Dsxe3C98Ji5huw6XwmhLvwLH9V6PgGpFgkQeMK6dUK4xa1YtyZxaa6sbafgm",
  "key22": "5mH3iPKoVAFxqQeXwRT4RAdcYJCz7bEgaY8eEQJK7tjnEZ3x1kjmkJs95vgnLdMokyYGKtK6Q7Wbo8TTYAaTfdTi",
  "key23": "5ew3CbesV1kiHBeta9chuyTjhCEvHCW2jw7wzWYwvS92ChFgxJnN7GuFmpLwQStRKGqTFKCfYPn2FKnMF2sNDEb9",
  "key24": "2r661VxWgkCC8Mq15LsYKyPbaJVTg8AnWPEUDbmjogcfQthjtEqw1SzkFUYstGzHYf9FEf1yUfSjJhWX3ijTfvJq",
  "key25": "SPtMDehFnD6RbnwL7jt129eRHBMc1icMLMcXHReeVc7mxoeJyMrsbMzz4ZRmRWyj86m4BFWq2DK2V8TXFDgD6XN",
  "key26": "2hvM64DjxUbiiTUrDTW5oYy8eYvCg9PoSt8SGbuDReWpA6wwpAoaTfefiHw7fG9ge1qu3d6zN9NR6VRQRNAYUiRG",
  "key27": "3FK9AAzdCv6AcWwA42ncuu9A7MgkwLv6de7tJJCTAV8V3wdmQgxkpsN8jj2Q7B4b9JDjkHgj7V23AZ85U57bzb1G",
  "key28": "fqG8i6akVLiSLD8SdXMrP4rDV2aex7ATbTJDzy6bRUJBv8qTKob7Q9Cy4crbxzq8mGRv8aMX71DM5sFG2zme2aj",
  "key29": "5ug3BRPCKPBg37QJLkQjb2x24tEheFj52iRrNBNNKmxHK7DL2VtYoLpjsPrpHBE4rJWLqxvZz2nrbZfTvW4ArxVd",
  "key30": "oVBvwbYhQyqCfR7Smykdg9s3ULDoH69iznjQiWN9UwSKP3EMKqMnDTVQwNythvrgEZYHSYmpo7bdVeRkYamQZQA",
  "key31": "5rxsEAL636ghvnkL8J3beg1LD6qfLnvp6V96TFGraF4JEKr9rVAyMYJU5tFBpTD6jqFkyo1hsw1QbNviuDFKLdmi",
  "key32": "3WN1tnpDui5Jeh9Fn856QQUCw5gz4Z3yWEhZH5K5ZZgK4xK5AsZNY1oP5uQBHyF8tDR1wr2JNuwR4t3bTeEm4wzU",
  "key33": "nYnyEjC9JCCnyBzXn7MaFuC1T38jiqDoWnAkDKGxF1BjzVzgRGsafcoVT58GEBij4uQRwBGHN8Sgm3BGRWbxMwb",
  "key34": "XSbVEMmpjpafYnYvXpZAawpgn6FXro7QY5d6n8Z7TSuPeho5jx8QVqTedbY58gBJmkLXWL5nVdxrJPngeJ4p3CL",
  "key35": "xcaMTnkrLWABuA1bgc7GeMrzzBwTvx7KLhMjKxnBGaBQCgYpjRfomnPczAmfaVhn985izL833M7RmbPye1gSaVe",
  "key36": "3m6ye68yUUFZGXCVZJTHyxeuGSVUDc61au8wwkWxYqRtpb29733gy28j6cRS36B1Pk2jWQhDyAo9x8f3UQfHehyQ",
  "key37": "5EsFdNWA6GEePj8zQpBtBihgBb6M4AwQprsxBZhMHPvS6C5CJstXLkyQcRsbH9arEZdvYq9NWPA4WCYor1T3SfGP",
  "key38": "2rTRqJEgnU7YMZMSye9iNrp5MMHy3YBbMz1m5Pnzf8YkZ8MeR4cdrTvGatWwCfrkX4mVVhezGXv7AFsyR5mpUQPc",
  "key39": "hh9d67bN1q6VgWF7mz437xNUcwQccAtZb4tSziCmCnMBaP9PTQiUAVbu3uPX3vbppG75uW3XKDQ8yXyvpiREFR2",
  "key40": "2r4FGCr2j9eppYNAobihcK95Qywj7cssTgCheoqrB3eoKLn8LLVmcsKyxdcn3aGqyeoCpQxhPmvuMBpDVN8TiGv",
  "key41": "2Dzdao4mT3c9R5xRUEavE42e5MSLNz45QqzB86GRVMg3SVtvravaj9qVXJ5Y65FvYRcgTu4Tafpg7BRz9KyfKjxc"
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
