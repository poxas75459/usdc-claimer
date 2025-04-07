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
    "4oJxARkUEzgBfxKcK9Xf9fR3aYKQZWWNs5xMCnucrdwWJxwTaFWB9dwsbwcmH7dGAYf35eb94ssCHcAsAQ8ZZbbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EwqMkc6PvxQQLf53WC8wyPbA1KzR8pW2PJiDrEtw57FrM5PRewhgRPCedSkegiNjnJANXDdoWdBqpn6nHyvAgss",
  "key1": "3aTMRqpHBXm1AK9Bf9JqJP6o1881WUob1PfXoXa6hN1KZUCnkpGApcWDio3sypbSbRMZnBJhQjv7qXbdVGS1xK5h",
  "key2": "5ux2qJYFrXPfXhEThXiSYR5h8MdKdF5AgTcVZW7SnTB7bA64YS44rzTbzT6Va3Xc3FBWT36K2DDjP2sCM2avWs7w",
  "key3": "51m86BtQZqXeMVJQFS7pyXhDFcRxvxWmFuztvw4WyhmQrGZeRqW3ezfbW6WUZFec1dmTwtBhsHzzndVbb91nNuff",
  "key4": "55khq1sBABe5hHMhhpUhYwL9HVJj84NfcGgErJZdT9REGALBEjBvM5CCV6vDDuzNUukCC4KVwA9ironnt8LAceuh",
  "key5": "2d5v4QXoR5d2oQhiSfo2gYJf5HPfW4KE4TW7szKJQSzKqbdjzx6bRdiWLq58Ta3ZU7SYW6MrviMPMAiPYARmvDgj",
  "key6": "3nyVf3JKng1rsMoG2o7pJXxFgKErDV2mcnCrwoCXnsFJSU9RYE4PjWhBNBRjUkmjiwt7CTzs2DVxPqgnp6ZyU9zm",
  "key7": "2usLMmfEgesopsvwSWJ6U29YtsaJr3teFAnZ7eQvTUQjn65Ngj97qMencoXssmAg5JFdDDLhDS7c5qNK56Lfqbxk",
  "key8": "5BRAWNNKJ1NKrqaev4956FMz5hRu3eRm6FHdp5oxk5ccR7cqp4TCxS6GxNPqojqdL11483FaNkHN9R1nkayNPMJN",
  "key9": "5Egw8heFznqLbdwEhTkpMxMSa8hFDs1bnanEAJTS16jvtWvaFVwFSCBHfGsJrUb3cMczr5TCnv3QtvguheRTJSrF",
  "key10": "3xUtpZXu5avZ9UVDXbL87qzTEPFjz211fBmQ1EkvKRPnFjVBJbB4tv7d992Uuh9ubA71MaipyuNef2b9GvT4FwBQ",
  "key11": "5mGku1DegSsTCNX21tJj2KxE7hWuuwyTKrFhEtJPJ7xBkrHmRAtMjuE5aXPunTf1iHrKSZBtKVruopstmQENc2k7",
  "key12": "2ER4b8fPbUy5CaSEKLc49upPMCNNaEisyYJBZH1FQiENxJ4Hi34x4hE2G6HfcPA8aZa5C33QtVKkVA8bxt9r4xgK",
  "key13": "48TV2m5yuTirNrTqzPwGgR5LkBxpsKQUu9tT2gBy9xUvCM1WX42gFqxFR1DdndsXBS47h6Zjjcwbp1Z4q3RWfYB5",
  "key14": "Gj1PZQ2dFPp16WjwLeWuoiLGmqff1Xp328JDf2cCdqj9JzLG8K4uPSfSNUwdwiAY5i4nVNCp7ZQUbDT3phGn9ZR",
  "key15": "5vVzQpF8hBXtmhR3RNafGxeoB7XDBycBv4q2BzGmEN6tTwBWJm3r2ZSTX6Cs5a1jpwtdj2gA5h4euAYHdfhE6cNv",
  "key16": "4oHd3PpJ8rXTN1RkwYRkoBxtGnbpSnjAmrGLhYbbe3yCEZ13qUg8NwNayjAdq3Jukf7UGfDfhPhKuKNKkMDkxVCM",
  "key17": "2iDH7dbB6vn3PoSFFVZX9pZ8A6X7d21rD6sNLLCGizrBk2un4siHbzvREZm8zwHnrJzutdR6VMQBgsRneMh5jYQz",
  "key18": "4YMY35tDdJat1RL3GMfonkWq55HQXjRpMiPG3Z9pmUoeCi8yng8Et2nzZ5PPNpi98kPY9ybHt5HynwJAsL5f8LEr",
  "key19": "45tBanNhcRFup3Qro4iod9hbKLFoRFsYbiHZN7mgYjF441veX3auu9c6f6Z75UJG4WoxdrLWifQsS7T9sVUZarto",
  "key20": "AcDor45CfLTDyEz4fR9dGhoux46qtdHoZio8pYqETzHK43cbffXsJy2327aoev8uER2wQQbneEDaiULnGv63r9K",
  "key21": "wB3rYRxSji6ejTcgDjB7Q8BnfQyzMXMHSUutHktJJZCVS9q4FERBRxdLdXeiTfcZG2DbMbu99mPCt84GoAP2Rj2",
  "key22": "67DEYSeQuqdDkaA7fhqHviXCK46342481mFj6fmgBVhfWHUvXuYCZD3vNtFjn7kMBKzkUAMhzCpECJqZS5KRM69Q",
  "key23": "3T5kFAXW8p8py4CxqnjaqsGgXcUuUM16kvcSQmV5371os7hQuh5KuMzzRcLMyLxxF49VwWv3vvA8hp4K2cLq2iMW",
  "key24": "3ezqHgkx77oDaQdvrhpn3vq835bYConAYmntY4Y8DhxiyyWYEQbmUu9nvm5DcWm5V16JqkWezTbcrbFCtcb7u3fy",
  "key25": "5HoCH9AMvXVUPRZkJGAqQ3eB6bC9YccZsPwuaLUs5kMrkwo4udVJ3UX9oNuYFYFERH72vEzZgk4XLKSSJJkAsfcd",
  "key26": "4Gyhs3TkX1oWsgaLnEb5Rp2wsBQPHDeNTdhk5XxkHwyWAHXNrvu8QuRd3GWdb3UWLQW3m4W7znHZubFMDMMEU46Q",
  "key27": "2gLtyruFQPZj3DaqWmXcWARoqxfZhGBdNiwnsnEv9UqiUPEzbNbniLjjqseZ9xiMVNAgQ8cqqbp4RarHPsUisYee",
  "key28": "xD3S4YPiAR6YPZsVW3PnDCJy4i1iH166bWPp2MeYndmJsPTndhQ2KVkQ2s6EuK9ijow6P2KwdiAkZPZAwfFKEU2",
  "key29": "22xcZoCuvAjtBdaKGbmf9QtNssdgGmwtmMaPd8QaNC2smbSN3exBmcn138Xz4yxY5YVEMJkUMKTdpYPxrv3g2cox",
  "key30": "5kATWkw2adCqp77zqUcE5DL6LWF7HRmATkUAAkbPhVPfUXHUogVs69yYLnEZtdCMe6CGCHqr3kw7J3XG27b18jjc"
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
