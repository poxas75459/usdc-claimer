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
    "42YPWjUXpGzqyu8kwFL9N9mHER3kr6b7aS9MNtPTo5xvXvrrE6bL89bgK3v2W7kuRAXDRNNC6oK8JTi2dxg7ABnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42p3JNbrn8RASvyMb7dMpm3UBrzCgfKTkg1c3tuRc9xmDUtcX4S2fgJpjdafxFXrCukrPQicZSA1imMHouype4RS",
  "key1": "4FD6VWHCb1fLxzhtqfGr1srvrXwJDJA7qm1rWAv8XzraHZo1uhPjLf6Y2GsDM9BK62sKD2nC8DePk2hk6SXHgoZE",
  "key2": "2kbFQpgM6Hcc7FJi2vJyDDzdjB6E2m2GdsfniaJforTEFnrh67Wk2szghbY8xAQafDDmvqNny3UVfpH1AWCWKM5Y",
  "key3": "64bV5d6MXU563gWZ3DseBSd8vxLdTYzLBjHgDnKCw9YLyK6vaJ7bjEFjKmKUdGV5ZahxMHp8XdxbVPDExKhYNFvL",
  "key4": "DpGetQEKeMgDS82cZ38xu9Q4qsqsAxDDdGYcow3uYRjaLsUN7qFuiDDytiRbz13Wq5iXurXm7GUcKq8i28e4jZD",
  "key5": "36VF7a2FRzzfeQGFBppJHYj6CAKrZhcQ1nGu5rPsaEDUMjeUGCJNPcigUtSJe2udxtMJKDaCfqww3nSdgALj3vJG",
  "key6": "3TTbnrZAv3jx3nyh55STfCY5aULJqYrhQha39LMBR71JR8PgBf2TtGTY6JEP4HZYzUVQzKLzm9Yj6FXn7F7nycXP",
  "key7": "1wGpwLxWb87VYyW7cJB7J47ci5hDAyoP5bWzmSYnPNcwUCxaRgz2XTLL9iyhiKFaSnmtLCUjR7LsHmuDnwpRmPu",
  "key8": "2yUXxyEZWurmAnHtj66EeQvW1LxCCRiSZzq2YRMz92kFc7bbaLoaargCgYz8YFqnj1cZcWAGh5T62DsWBpqJZqpz",
  "key9": "4L4TajW5T5NvNndX2gnY4xoQ4DzYL9cYCCARgLSFLoTxVHucVYFYuYnWE9TUNqbJmznGqXrSH5TtNYhw56gnVRmV",
  "key10": "24qPuVrRG3awbnw2NSpqx9q7GRd6rYBQEUTiKumGqft7CqCQvj132SMbbc5AkGBGDWNUxB5eAH1h5ZE8XrnKcEtX",
  "key11": "2oyfYSNMWwsiHHcqx9n5a5Vz8q7hKEQb6Zjey2V34mdL1KZLdLXhipeco3L5HT1QtPV9DLykdFtUzFyQ22jCQTYs",
  "key12": "Wc5XpAH8arzd9S1QykFFNbVJQ2wZYaBgVx943PwAVToC7WhX2PnTyf1FnChXX7Vs3EjWZoUZQhBiccPfPr6hxPB",
  "key13": "5zEaLFvTrYPEYDH7zZ8ev82cZa5hYETfSZ3KBac1siZivWuWut64GpzkHkRAd3yvdVXr1fwz2dUwBQAyv8TX8m3c",
  "key14": "53UJSQJ4LK4zpx7LKPG7bRTR3N2jGWqY1e4zkWKM5x84RRpdVWDAWFhBtuGgANJAA5ZgJrYEtDkrrMBbwCzcU9M9",
  "key15": "3vjn9DbrpTiuSgt66d8snHankk6iv82Sc6LcXRDkSaYjPxxt2gkPntvTgEoFbEiz53zdbWSgRM2syQfwfRouohdH",
  "key16": "tmo4BBkGDgrzTYa8Ze1pfgfU5BFsHydnTyWKGux3EmKmBXyBm7e1Y8Cd7BuCYrcMLJY42a8USnscBRsgTHrvRm7",
  "key17": "5nCHEpiE7bdqVbQHBKtfq6gRAn4gqa2zPRqxcUgiYP3We53Y2iZr6jpKrpMLovgXsMiEgB8ZfCPrbFMZC3vFM9aP",
  "key18": "2XHLkJM6eJJH6hyCNiS7g5EqPzqz66Hwjwi6EEZYMkjgTKLXHX65f9Lj3X29JPEqQuAaBeWtuBFXKYcGY6WkzD7S",
  "key19": "GHrjXuT1fv44oVoD2XZ8AtuH4rDr3h5k6NNhTpsuvLKmerFQW9VgGSdUE7nwz6QnWbptZfu9x4KppKRxktrm2T9",
  "key20": "w2EEYvexfdMvcc27QcPxmRLeRBzREbJtSThGudveL8WAi8YoV4NKM8VowXuzCyV6DQTKYou6ukdgZgSPKok37Ru",
  "key21": "2eH3De2tsHsNGusqevntUM2dcSAi31EquxkS44gp5cQ8XyXGrvfDrV7Uzz2C3x1EEgyitJZWckaQQ3moMRNrmKg3",
  "key22": "5ukoy1ue3PEnfkK15qnHmLE2Ewpm5EE2UEBstWnxJLZxXPXHipyZ6LDs74UnaV43F6pdKN4mZ9USYiQQRCSY7U9x",
  "key23": "VwTDSutYRh8TcAwwpmggZyEbLXEEaQTbeAC4iqXUoh5ew4k6ffyod51XwX83u4oz6aCiMwwBRdNgZtmn13YXwzh",
  "key24": "5DChukDUGMP9CBoNVW9AtpDR3Spuv95CV39RPQA1BEWD2hxWopP8yDjU4jtP5EfVM6gifikCJh1nFtKHWcR6Liie",
  "key25": "8nZCVSAijkmTC9ZMHC7SFvZxVoGa39RcxMZn7rMy6fxvfQUdd4HrEDLhRjuPMB29PGYS6CoD5P1GokSwwvKNLVf",
  "key26": "32offH3Uf3b7LhcKmuZJSjv6dsBkdiipZK1HHn4voF6aHNaxzxUZjs7VBArd7W351gZorVnD516Ns5tF3bSVpK1j",
  "key27": "pp86Pe5VjyGaPRuZdfU29GZGpQXjNS15P24vknvTJEkgNGUzFyXHMHNVqj3aaRBzb48SyBncnPr52s9sSHKGPZy",
  "key28": "3XwTjcfv4x1QnA1VAVc3gyMuchsdyuLyWdsDrWmDkZr8QQ3svZsrbyKV8LMzMm8zgEru1j1JgUfNG4anDx2h8HyM",
  "key29": "biqT6czyosWoPc8fUr5VL37vBgon6eaZzX72s5ENkvC1ozBjz6cksLZXNiddDFqxRhuYtw8UkPBBmPzZdvvLgxb",
  "key30": "5L4rNAKsVDhzbDAe94SDyTD15xww8xw1fQoHFbs4FVLruP11Dqeq3WrbdeBVdm3LiXjJBzUSYi7VUN8LioGymHui",
  "key31": "5SsZTNQV3Yt3NN5Ea4FLjBsjvYx6Eo4dkWUuJotbq4eQy5PqspwSrPWd9bSUEgoYzccZzDjkTyXwiNtGVatUv2VX",
  "key32": "5BzqLA8HfuzKuujcvpNKcAdD4GoyTgg3kpZAGGMnwwWp9aDd7xiQAbf6dXiM1gZodZ3seLZEhV8hJ9eTpszkYetb",
  "key33": "MDBLjhNiQfsVPkJg3DT9P9cJNhQC3QkB3BauCMe1BG76DxPM6nUxyJ9SK3wqwLC8a2JDreDVa7tV76hEtuJXD16",
  "key34": "5ktACi8T7sFEBX11rr8hdc5vjWAXB5V4tWTik5Nu4MWeTsrptPu1SKoYrdjEdnjbaxxsr9kmpKef6ox4kK1gSiQp",
  "key35": "364C1cz2dAZBXyYgYt4Kc67RqG4ZRdv3ofGrUpNyrjCe5fmyv9LD2uRNj5UYRXZDGvkHJWkzxtU5zmXFCv27KHQZ",
  "key36": "4KwuyEKQ48W6oHe81rzj2DC74osJre7ttujNzbTMPMY44cc94wtgMk9QV6gJVAdePuTH5Vptm89aXxQmnsaTYC2",
  "key37": "5Vtb8xCb86e5Q1PpC6JAdeyLYLFV21AauJVw5pE5iNPFwCdbZ5AvHcr9u8KiJSrUswVqaodk9psUAJqFdCNQXk2P",
  "key38": "3czdHzA62WKdbrs6JpbEzmu8Bds883fVjH96HBicyLWf9kyW2E2g2hWp7qS5g5JXkJ3GQJ3uSL2ZGNsL9M1fBSyo",
  "key39": "B2QZ6ApCYcaKPHKB2nnoZetgXjHzVCFWURU8wD9t8aiJgdroVHj5ErW2a5H4WWzU5cC8NkKpHTDx9BKaZT2RBFZ",
  "key40": "3M2Uek7aA2HKFJcsRKFQuHEnq3Ptevoeo2z1b32vr9F84ukkh5yjb7qCSAbGA3xB3uATv27RvP5cpPjn1SaFXJH",
  "key41": "5HC9oSboGS4Q47vWT3JTdFpzFaNgtLPf42QaTyRRt52V9uBDsFxmbztbrVTNkunuEvm78ZoqrtmWn1ejaTxJgz5A",
  "key42": "541mRqtzjS9AGvuSrachQYLLw9gz3uKJHr5iKPDgUQLM7m6KZtVbs2Xkj9p7ama6i2tYqRkA9vhiW1tsmAUqnQ5D",
  "key43": "3Ea3JtL3kwKgyvvdZmLbgs2BGbyWAhcP7DRVJ7eG6H1u2m29FFE4u3STaWL1fNvqvVmpEjwJi7DeFAJhBdyDKrJ7",
  "key44": "4T5noanEXYt8n9brdUaCJyVr765MmXGHGBnDgXBgs7xovxt9KYLWVch4gFwqweNsmQQoNuh61LAFC2m4bDXzP5W2",
  "key45": "3QFBYMcEdTuWPLs6tfdGV9ni3kFGePAmCZ9aQKinrs4xbhcRE3z9Q26XhSMwMxeWJtUEim7EccpNVL4T2fuxbFRE",
  "key46": "4pqyQwDvSwms5qxFhifeEh9bcegqkKJ5PqAuGcXjN9jHQxZTkpPdqyA8q4m6z9PBfTcVVYP3pLMYEvt8vjWCotvS"
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
