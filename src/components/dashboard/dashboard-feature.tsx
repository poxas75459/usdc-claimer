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
    "365XBYkyXC5YjAEndD8w5uwCU1qx5y8HPJ3Rm3rgt9BsNLEnvdLfP1T6kX5HDkAK8HVPZPrLV9zvHVFbt47RasBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TYgoH6gMSxwMToH8uphDP5QMvTXcm3nAxySgJqE8kipT7HaAwy9PREwdsdGSScc1XBKbASoS6yzDoyv8qAdKK8C",
  "key1": "4X2AxTNn7sXULWK2PVp2DMeH3UgMQkkMTQwdmX2rH4kKZa9Rsb9d8BeYH69mmV79QTE2c4JFYhSQwaPtKmGtUyrf",
  "key2": "4Yj6ZwuE7HBDFxMczNonb2GHqN4Vfu9BfsMo3ULYeSiUqMQydvxBjKYFoaAeidpx42oH4YegcjLUdoD42UhkMnE2",
  "key3": "4rf6k2Te1AxrS216R32HFzsL4KnBHyLpyZJRZ1AseeJ7V1nGiurLGr2MotN6DjMyLfSRP1SEiYiF8gTUwLR9bXge",
  "key4": "2PC4PhqhDs9N9uAkyKmKf7c21wb2yuB7K9j3ie7vkchosYAdMD4cT4EAXR1FLGxHyHjjFuTdNv8X1rzxE6y2uS57",
  "key5": "2N2pcAMrRmE9RdspB5WDiArke4Rpu1N6fL1hPE42rGzGKRwuo5jHcTgxcE5cVpv4p7vy7qrCBdq5XxyFhgzGcXMQ",
  "key6": "4nRt9tqiS1ZiZivihkvqtzQUMUHUx5P4uiCkUKUbTaydE7B25VsEQD45MxcdtK7YmXNVLCcvcTbZGHD5C5YBSiS4",
  "key7": "3gm7Z7KCN9Vikw27S5fRNawvyHXbxu9Vbj7r5HkhmrjvZ897rvekiCTRUMcmXvLAg5MpYfjRGek1YtbCxRoPdX2u",
  "key8": "5jUUejBKkCGqUMUqbPGBZgnksBnYGWdDXXuJeinsrFBKpR7Sn5ku5TkBxrf1JQEsh7fFQ3BjwZzJri6iWWvfVrH3",
  "key9": "3nhanNooQYe2LRUqg9EEcPaoEzoigtLc5C1u2fi5g57yYC73YBEwGvQyrr7gCwkpJsQqy3fh4MBmVpP7mse4gtDN",
  "key10": "483jjVCBSpvxciTd3iigV6pc8xk62Gm8fkk6c1ZUxc6YRgvj321nCX5Gg9biZQX2y1cEG22SgFy7cYUCiUiDd4TD",
  "key11": "64XFp3HaMqTiyHgyoSZyf5H5hL6UHgN7fsHVkzQtjb2p2twEZMX1d7DhURWECFtUgBADrKrAjiTKC3pPHKH9kZhX",
  "key12": "2wdz52C9eApr2yEUCYmXdfChQ5s9csRhZaUwhsJ7QggN1wkBN3dmH5HmDE7DyYv5oko8tTWDUBJ9D7mYBTptAeVr",
  "key13": "2uepiooXSCaMdmUe2zmf2f7L2HvML5uv1Ak2He3qQ3GgH9bL8nS8uzrUzgNkQDn2CBiEMpFzDBSkbocZpCbb6v3x",
  "key14": "3FNPGBsnLmrwVYAk1547GaahYNaLYv6RzsWjnj5T3tPqrPpNKKEHXbYH6ri5jbvkTn6hXLESFAoSC7Fa84QdphrW",
  "key15": "3EGyrdvCQuoBbXQoCPZQRZjUvzPe5ZzLeWmVAgKcv1rnfRRK2mAoSHMvg3qV6rwSRkQRk7fDAmwNtW6VpnFBfDrS",
  "key16": "49eVPusf5iqvUGF4bGgBfskrT4nEgxXbK1NkR8fzxg9NG9mjt8bJ8TVVu2efjYEk2inB34kDeFMKWmxBmzBJLGDy",
  "key17": "5icyLnYL5C2ht2fSzMPvj7r46UDGN8atgfoxjSeRgXPhhfJPfp7v37r42PV9YWVDsn3rQkyPKc7anEh4xRH2jicC",
  "key18": "BhA8JsFzntfrEUFAWPfHVPj32apaJEdZogkfhKGL25vwStf1XrxJEEPTnem1D3fFaMMUzfVouYyfKGWFouYMdKj",
  "key19": "5aantUXMhvoEvDfcsv5Ji5KMhPFzuHBZ5BtKxyBxqL3mMLeGWzKBzyyWTKCuUjqi5MHHbv1r9ZVm7e1b1B51Kkz",
  "key20": "5DwzcQBWfeYKkKk2TaKBkC1sgS4G8VkBAYX2ysYsYpfSKdvzUB1cJZz7aJJ198Y6RaZRrafDiM9CAFZD4Xunveqn",
  "key21": "5iTmz2nCnj3FUqVpFZpsVkttDettGVX39kBgg7r7i3Nxz5trVbiHi9ShmwYXA6U7EqAnQAWx9S4H8WzcbdpvX2jz",
  "key22": "28jRDZPSfGbLoN1M125Kt8mp4D4CEJQqHQneHErJS1z2Dn6PLw9qRDDS7xht4JgMkDAPAKXqKmun1xJDRzKrVU47",
  "key23": "5Ft8cS2hu2V62LcJz23dh9kxCjeZZhi7F4k9mQJ1XHD9yBTzVv8ZspcLgoHNJ7L8DMe8rr6iMzbjjPcBzsdmWGam",
  "key24": "3fWZcGbp2QirxFuasNipmVRFiXXYiKdyzV3wPisA5GTQHuCNJUC1SZxfez3xaxLJq3CPbtnbvnMU1VDU1zoZereb",
  "key25": "2KwFF7nJJNGAmXb9fwvvx9vntUErNh7ytByvFQfR6wt7EFDnBaBQaajjf7gTkxu8LJjWoDHsSAXqK8Z2E77vTjGv",
  "key26": "2JbtMXpZa7RoypthwWFxxBYBxCJ61qbFo47ygHpmxhASv6bZBHsTwrvA3T4kxs9y76FNLQibermjUCQY9ABMFp6E",
  "key27": "5F9sNJAtEZbmQq1yjHFQ2L7cVL6QtcjCsqTQuYtSRFnwJEi82JosNfTxo684nX93ge5GrnWRxtPrXoNBLHrS1qSp",
  "key28": "5BudmvEhFL6oeba7fmSCTQotz3CBgKLP27FG9EXiJgPXkwSpzGuSiUCUYhs6Mnxe31xCKuAYwsowDqfRMRLH4fSr",
  "key29": "waYZ9XnzjTSzx4fTUoe1dh8BEpRQsm2b8YUfXzyRVN1NaRDMxvMnBBpfnpeNEjEitQvxR41AMNKwqzmsnSYf5QU",
  "key30": "5sGMTKv75at4p4tULJC9RUmedctFjPhLw9VLALBVLHuYjCkbpAawgJvsQ1kLRpt2wFZgAYaSMehwn5JRhtvBi2zP",
  "key31": "5P2U7YuejtwgnkN1qiBZkmeFuoz96va4qhkwf17zFh4hqvMweaCy5CcdM9SHDXXbLKQKSpNKyrLYvjFf54jsFVZC",
  "key32": "3MCa628Ci61GrxsJcVivxAASC5JpjVKyxAvr3GfMzu6Vf7zfw65wfTNxJ95x5qdTuvBocpPgkkBJpk77xQs1V9H7",
  "key33": "21TF9sGLKAPx4Tf2BcydhF5nEp6VNdvnwczvYQUcwiPfCaaj6kqL4rbeWEeFYrxjZM5pFzTm5FCpbJUxRjeKYeUi",
  "key34": "5rXfL1uLUtgJY5HmhmWxhQ8ZjhDKwa56Mdx76YCKcbcyyZxxxiAaabCcrCxVNM5C4M5aQiyx5VpsuryxdbBpx95X"
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
