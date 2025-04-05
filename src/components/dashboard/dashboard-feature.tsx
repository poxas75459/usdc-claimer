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
    "CyaFxoNggeWyqb3h5My7zcApYR5YdgSFkr2ZTRAFRheE1kfzyMfzUwoHzgjhGKU2DCX1f672uTKspNtGqfn5Kz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e8s8ubbWKc8FfzF77e5Lu6TLKbHnM7BHrYmfaDSk67XutkZogqUX8K1tvwzACK6ZtGB1pWc6mko4tYWeCqf1apN",
  "key1": "BibRo58iF9usseyvYyVQAYAF6a6bcp56M72HyFJmDhPngivMa5ummoqBN2QVAU4EgjSLZuBShehW2KKGo3bY5LX",
  "key2": "3n2bo6ojxrdCbs6BxK1vn9bWn46hWhUupAwf8nhbtMNjvUJaBMQ9So1f6jpUAPbeMrr5JnyeJFccqi9maVypE1Qj",
  "key3": "kmT4tJBCXVdT8a791vVo9K9rLqxzNyTBrEHCgAHnvAPspnFXXHvCrLvVRpCjnEk3ppaio4Q2Bjh7JEFvhyMmz62",
  "key4": "5At3yifkM7JbHF65Hx1acpDcreHZ7396R1yGy5qVsXzzREEQEQVVBsVBkEKy6AhXdUNXpjpiCsj8uDgdyYDJVQgm",
  "key5": "3Ta8Q78ETJX4BSbEi2MywEn4DEQQRZkiTpYWRmmptiWtPzgBre4ySiBh3qUi8s6ZNaJmspyGefkPEmMLTyTHYPRT",
  "key6": "2siuxAZHofJXJDFvHkQNbNqujZ2zuZWKSw4xkNgdaMJPdzUA2s8AWHuTsrnCsNRvsh4pdKnZMF8khskjnw15QmGM",
  "key7": "4bgQq3kuQn6CnALLMGDDKECXg65wqoEXrcZQeZeCJH1queAnkkiXkUQDyhJSNwrwZWsJxusKbazPw1MYYRYKivwg",
  "key8": "43DnWDnU381VKmG1buTsb7xsQaTnZ1XePFxEbr4ZZ1ypJwJ557GrvQ3TQJpLLfpAPH7VPykzaNN9diRntvDYVPD9",
  "key9": "5D9BpzftxbqDRgj29Heqns7AvSNY7QPhukMqb5A3CEsrsVtK7FeMY1GVQ6hVPYMFbj1DFJbYHtGhrsVesjQR7hmW",
  "key10": "4ywLj2Y7hLWvJoQ3Zf1XgHwpU3oYVdfaDu6PXin4qAjBfC1dszcemNvr3KeCZ2zg9dwHTsCnyR1eF8DFoUnYgPwe",
  "key11": "5tgKpuJWTPdg4GcwaJ8s3iipQpXaBK2H4EywrKktXsaJa6ATMKzdxiSNu27AG8uhFkQ37Uv8oUqGK6xvrrCVrSkj",
  "key12": "5YyYWLevHJVQTsqVVCKiKw5kWiKrsVJn9HZiTpkz6Sp32eA9azshYLTCKHiW2aRihviSamQnepYNeEUFethvZwaD",
  "key13": "bK8gm3ano8oTVt2CKnUQ6oWuxQ8v5UoZbuBjbUqeUS5aVS1dzzsWqVQoeBeJqiYF6TzctkM5WqCuUem2vTqx42V",
  "key14": "5dDTmBBNBpo6mto8Gc9TYZwtwSDNcbDEWJwLVg5NJfVrvf7ybmu3h9i2KhHFPY25j46tGAhoprKYsGUyomtwbs4Z",
  "key15": "2wjVo2Tcp7ULea6h5Lsfknrnh1Z5GiHevBXjrPRz5Gyp2b4xuHwrTQzXurXNa9diRV9bYF1oi8nYx8K2zNsqHaeC",
  "key16": "pPjwwPR5V2c3nTEUfof3EJTK26mtwvXHZvHrUjVTNXtvqm98dtSTKhvRvE9HLhW3prd7K3nM3SzrBDPLTRARPSu",
  "key17": "3zz9vPbwWUG7KGBFFQDVJ416pmfPkzwjAKGGApSfX6RRhzUd429y4VVrcokjcq3nhBmmB1ibdw5KSPU3jziYSRq7",
  "key18": "4711aDD45qTmLdw5CC6RbeTCS3A1FQHPbenjLFqcAMiM1RXHBGYZB93suHJLc8NnJVRNmL4rP45y5oRQjJT1KCHm",
  "key19": "4T4RRwguWG2uKphdTCMttGN3HnkLQYWW28mrdHfN87LifUSmztcqnLw7dtUswYj5SqKMJxLNB4Uu2SZbxsg6FTLD",
  "key20": "gCWq7i16e9R2vzG2DUfjzPkBwJQLGKZzHifnsZgrp7pTUr7xqaTpiUWnYbnfQEczxAm5TFoncxmekJKtm8W2grb",
  "key21": "t4Sza4AtjAEo95zzYeryBinuc1SYU2fFGrpxdSTDPApKgNFR9HMTMUEJvMwqHo8vwhxp1DwNVqGgGLv6BGyotWe",
  "key22": "5r3J5pXHGWXJXYGUhc1Mv4MKhRyozdmanWJNNu2kADBYkre3smzBabvvpKjov15G4pgAkp6xXXRmUXouf5w3j1JQ",
  "key23": "2agqBtnh8nQ1ce2ENN7f8w1JxyUo3pzKrxsFeNzJ7VRnc7PkzavyGFQYhHAbJEd6SwF4ZXWdVMMNwRnUW4FHXLzS",
  "key24": "5t4P9EenkqGhZxLo8XcXwc1LU88E1hMaiUfMFLUXCHRtPXTgyY83A49nbbV7CPNTuVEk49zdbPytem2tdPf12HHh",
  "key25": "dCYxfAZ2Zn6AgxuY5dKyMNBoAgmhESQGP8xmapfhvtH72BSCWEuM9shUKtBEPZ4Qkp32SocrdmDBocvM91LbeMZ",
  "key26": "3kmZn5D4yHydD2jiyi695CN95T6mE9wapYkb8P1uZeJXMtZ4mAHYhKMqhyzGveYJxTviFViwYr3jQwXfmusTqdAk",
  "key27": "5VHf2EszVfjNi8AWU2xJEJSbFMvSMqRLR3rnxqKT6AK3Ls1crEAMCj4AJbzA2gyfC8eGdqAkuzRTkvGCfbe7Csyc"
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
