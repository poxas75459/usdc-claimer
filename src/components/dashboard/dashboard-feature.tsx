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
    "2c7qcdXsuUYa4YscBWhs3CeBdMXGb7auzHK6EQYJFp1MsWbnsfyH3K2BGShTtDDctXVSQ5WBCitv7L3qgd2oqnpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M5Xd6xyaMuw7mXD4ArJF2CEW4CDAL38QeAsF7wjjDZ5c3456u3LrskaVm1gQYGEykspcaHi5u8HggnGAYSLfCcS",
  "key1": "U3wuHxSBaYq1mXkM94MpwDzQYE4Mj3Q91ct5JdDkTVoVXvvgeoDkS1o4uDEjbA67JkosAgHXW2HoYA6mUxJrpzw",
  "key2": "63iiKfAMGiRittgyreU2WYBTsGmNmj3N5EEkeHqFtUmK3NHVGJp5CJ6pEGu56MT1VGzHbDcjz1KqWRpcKhYfdQGZ",
  "key3": "5eXUudeszxVnvTPoiKwGhHfxhi6AxGPKWaKBFYZGUyU4xBDd87RBxwbzrxV5tFtQdGrPVGrtgpgrn9jdXeehf25v",
  "key4": "VUXGw7Ymq3TZb168U1PcvD8UTJAnDrw5avsbgGzjqAJRAitR51EBokFihQKBH4euDP8ZFmjBme7q8WKFjPR453F",
  "key5": "4yyiNFeLLT9iPVscdBNZ1jHeJQvU2SHuoK1gYMq7fza7bnsyoxzXHo9qX61v6TbdioqQh6UM2jiAAQpYfem4rCgp",
  "key6": "H9peRvjrrnmcobfn1FLbTMkeR6giCh9dB4Wr1h3mnVscFVWAULHfcf8MtZ8fAfgTybQSnMquiSepiowF2HMBSFP",
  "key7": "3vzgTV2Ax8pLmuzDxP51YiFmE9LjfQaTKPgPFr44jY9VZwbRbonBBRDCxqzrB4DbgaZuQiVuR9YcsHmodMxztLMn",
  "key8": "5Hcyt8HkUbBiKd1LixGWecanvDUo7tRCLH9dUoijqWtwnZ5uJDdsUcpntwaawga7TofEqfdS4JUCYmHS5ReGBEce",
  "key9": "53Zvk81v7KBxSFMXiq7cQXDdPLyfooVEVGYc8WGwwu6fKUDMEvANtXL62cZ5fzTYsxqPYc3aeo7JLb3KPrdgekGz",
  "key10": "ga6jGcfccybkVr3y7daqWAfQXjrqge7Gwhq8xEFUXDspzjGVxzLfZtatZpL64CHhax2B4jLsiq5iqdY1kg3odZA",
  "key11": "5x9DeGvR4iUEt6P32EezYNwjmBYMuXJUFAzzpxF18BJjht419TH9mwPpRXyESgPCejaFpRw6PmYaL8SaUjXVQrCZ",
  "key12": "3WcdQF1DKDQARERjKf5wSdkpMu6yBnQyzZN6cNZuzweeqaSZQh25hEni37Qxtz9VfvzW9ViHvxeJJCeh8WpXwFCF",
  "key13": "2unq5eDLnnGSyKWt8foLfDNLyhpTbKWQWHefwbtbLLbcZQXHUmK6EwN1tMvTx9kGXZUbHML1M6EKFc5Mo3L8yA21",
  "key14": "d8rxJDpXwRHxXLjMiNY8ghVaHd82AatwZjabWqjVdrW8fJcHyB5aePM18SRTMzL4jVSkRjzRXVhC7FASTmknu1N",
  "key15": "5eiuuoWdWDtfBgPo3HDqUZ7zYMhjVT6KWKkANTRXBLGv7mEeP9kgeAYHgzi4qURm8ay3xgaCBxpzPLSKCaynS36G",
  "key16": "5d9nnZZzSRnjpUiMXGKCxdh8hFFG38B8u2fRU3ZQV5kEsATiakZX97ZcqhVk9AFHMENqBkbNdiAXXjrQAApMdKP5",
  "key17": "LDaWz1NtU5znkjFP61YSE3ysbTHuCQDqyPwB1bLi71B4ncqbGV6TTqF4css4HbiVJ2X4ZeYGkkYMLUqqWqHbAUr",
  "key18": "SQuVTphKCC8AT438vaQqJ1wJKxC1VLE5ztMdE4y3abE1qwQRzQMG3Q5EvMsQE1ru7DRr6y2Nj6gdCS3h5ggLmre",
  "key19": "5hBsvZbz2ZH14pGLsbWTJJC7cJNt6WXK3R6N3Y7b1xYK2fTgyRPGZdWaGUHUBbnU2Y7nU5tmqgt5SceKaQzWKmoV",
  "key20": "5qf82wkEXCXahU4VAMTEF9QUM3tLbUd7JUgQHWHoy9PFpRj4SAopahpKwNiouYS8RWFCRYzoPgFKYELnLXeTGHPa",
  "key21": "5KCE3eJFJdpUPZAFfib3yyCXLT5aR84jXt5V7sveQ5wjF9rw1tFyJbko3YUfZCHC7vThGuGSRfyNqt37bh2ew69v",
  "key22": "jgqjVttXyicnAijC945DREXFeQsoyWbnBExSQer4cYjCCi8ScVdNipM1NKH4EmxHwyUpzaFRbA4dscHNJrNcZHq",
  "key23": "5kpHzSpS5tpicGajyLrtoSHxKhjDmshp1gmN5sBgadfD3xEdN6jx7WMHLhFbivQbSFM7fZgpURPHo89tQgcGZzMh",
  "key24": "5mgqNxB6cuivCfuJLZ5kMSi5cfTEMakvqcVJfqm72zTuZLGjM4kAHGEe1gRB55Deo7KzQE5M5VzeYUqz7mxGv5xE",
  "key25": "66xroS5WxX2QETzgSozRusz6WrDdmV7KsRBu7GcLezRJWZqnSwSmb3isirFjwY3ve4npf45CGH3ACaAyfe5wssLe",
  "key26": "4WVjb94j54ghNMUh8gx9rKAQxPzZAf5AA3UU8vCn7bidcf8bgSEaowGfh1uzYwuT6gp2udU1appojQc6MrYNhs96",
  "key27": "2uJYqS8E4wCS3r9CSgaVUM8EkJz9aksfYcG8gf1eCMoLP2JSkS9696pkrkKm1WvFK7hxqgF4KFGXxJYEJqhYuniE"
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
