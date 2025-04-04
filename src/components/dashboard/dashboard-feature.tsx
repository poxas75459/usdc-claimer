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
    "czmp7W7vQPbp1Rjc9agqUzhCBhezrr37jsnZ8HsgiKbfpBsFE3Uf8WYWVXSUSED9w46L8HxXJKKMoPrmDdVQFVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ewpERvEWsjkTnsBPpoCNjr7QEQoH5nCAyjsUuBC5RMQ2NExC2NBumqSsXXtsCj4Y53TJkCfbkCQzYq2Jr5a8Et",
  "key1": "j4HdHDNgeFFJRHCvp8YiwwPXhz1t7nU8SrbBG6oAJGqEdkHhV9bNgvECe6fi6Ae1j1je7fhV6JkBAWXhQvDZCRM",
  "key2": "5i8ocSQupV6CuFysKWjq7yZAFkcW7gWCCid55ZASqmMvVqpfNgFVMigpQMpEWaACSqUJH6kcNhThYuT7FZwQZ9Bk",
  "key3": "5usTgk1D4dRnShZgrV6Zz3Z4iLKU6M6zcocYRzfdHjt97BjqxpdpDHmxZKTGpAmNdKgf27YDXQztZEijdaH448z",
  "key4": "2nEykDXjQ1VtJ1FUHBiqe6c82RJBSsRDQ4QTaiP8BX7YJXVxq7p5fhSqWhQkNApbQShjrkypuLD2Uwf76SeChoT4",
  "key5": "2q9v7ByPBqJnTYEt7L2282dZeBC5gF8LSqzsr9cVAeheLnnepyP1nF8BPQPuD4SZhrjKgSY9DemyLSMWHBWremP5",
  "key6": "4SVjSo14wrsamcCsAc5UiSzMDFNWCNRixyszvuAn98qQJkw61jwXmGJn6UcBdMkFoEwZY6D1N2C4LYf6tPyQG6VK",
  "key7": "4DpWjJ3x2Egw3irtp19M87p8NT4MuDV5VeEado1vWaeEthGGv8EWJCt8MLkWi4GGqLVhBaRVe5T1jigZngcmcds5",
  "key8": "2rEzuXF3ciAmMAurv8ZV3dr7fHpdmS9zpaxTXV62GHHFpEyA8djYd5NTpEkGfsoKULcGkWZv9iXRSzAtUDNL73HN",
  "key9": "5fArc843Kn1cEoZ4e4mRNSH7wanscTmHGzHY1pYvE7j4iePpviqZGPvYt536RzrzVFmu6pfv6mFyJ9M6x5rsvdn1",
  "key10": "2XNSWpTGPntyfZcB6cMSrf2d5sgimtKpahqGWYTWTJ3f3njRvXsRYzgKFGVrjoL35JHWPUw14dqS2dz5csj8A3vM",
  "key11": "4v6kixTC1cpXyuMmE2mLLh3rskJyBVjMg5Jp5hJvXWr2Q4pkGgbVTW5bJQQAxEFtY4ja7uhsMGNWWEfH1sRD4nip",
  "key12": "4fJnkK14D5KE5TFEFK7t6MPWQfpcT2cS6A5kxPZrmCqUPS5Tz1Sq4rDzp2FmUPF6ZjgQCBVX4oivYshstBypXfGc",
  "key13": "3Egxputs9rBkHruRdNCzzqN2tK6iZL7qKJu8ggtjTDHaveiMT5qjfmWXe12DwVJBp1mx1qcaoWif4LYJKBfXhMak",
  "key14": "4CPzhYi5aUy6c34gLmfXGLkr9dXr9M2aiQsFFsmahi6cyDBkZYKGuaoWwGNMBDpz7ppYTc1qGVrX9rhS6sGnrzuG",
  "key15": "YFNFfdXgKvpUBjXVzRMH8iAV6Fm3Di86KprQLiAjrfXMEU9hHCwxxUNeXmDpzwpZ3sMQ8P3nChQWFmESoHUAoEA",
  "key16": "Grv1gBg9hZ9tjP7t2GGfNb6iBTn2sLU7vxwwEmbTemGe4AUHSo5SKeKXmW4S6EBhi48ZLwL2FjaVd5jQZxHteTP",
  "key17": "YZMLk3ErGXKcizx9YkrAPUSYGHXkQVgZbxxmsepkAxA4jUEd6JqVqh5WzZHgr8bqdbLGzt7yYjSHStaV8n7DXch",
  "key18": "62hkhSXabvY4DqDcwkGnt1GPABGtRTTZXEsbN2dHhcTSfsUh4yfZC4NmPgs6zYF2e43YT1DoSY7j19fvyhgAu4qt",
  "key19": "4K8LBbiPzZQAUT1CLsFUpRbXyyeYXigYNzvEhaCMWdRx7DTTKmjqop1LwaoqFaxup198MoehHjnMjz7kK4QYX9sV",
  "key20": "5MpPJLexNp97enNRnSt5hhCLg3UUyUbggpw1rvFV3sFuFuxiT7Gox2TdWAYeBEQaw7EdVbAFkqPcnuCF43RzriBi",
  "key21": "4kYbtULzkmJAP82Hn32tz2C7BaPWDjfhpf2nJEMiwicqgN4deEJKvYMA64H4TXJVBPXo7XD21iEyyajizhNSKhFH",
  "key22": "MuBeMwffVayewiwJFWm2sQGATzpgWjzm2BSEJJy79LGR3pDsQ1aG9quHyi44jpkRXzZUW4SpfawUGiYQ8urirTW",
  "key23": "5suf4Rs4Gsjap5yhQkJCduy6J5hv82tMD723CsRBscnTZjByTbD4w1hqMykdetEQw6Z1vhRykJDXUXzDNLa8kp2x",
  "key24": "RMFv96aFJ18Lsy6FjWMHfaLJ8RevmGdd6YjHiprsJ36n51EQbMKq67XhWfoN7L34mvC4xEu56HwXzXhz8P9NZJR",
  "key25": "35FbhoXakEBW2FJ4Me9k6ddAcYkqvDaJGwpgXkDe8E3NfqneUffWnGoqg8LC2c8TNJy2KnLSpUymhJYrwrcg6jxy",
  "key26": "66mSkebsLDJodXCSJFNCgEohCt6w5MWEctHnmFjToSp4neb3EJ288iuJCtiech9wfrdoyWceev6M9wfgQKyy9vjm",
  "key27": "2Z76mJUr3TuP6tmhZ4mLi1spycSW3di5WAPosAvC7qkeTnL6pyYRp3fmZLqJeKYE97Ac9UP59gdiVhgTCSmaapkp",
  "key28": "2W8JipPbNSKH1fZuZhXz73Nmyctq5cBMrJJKNxm1uok8rYwJ3BuZV9o8qYSLKzAYVzqgihNhqRGpCdfze4GqDN2n"
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
