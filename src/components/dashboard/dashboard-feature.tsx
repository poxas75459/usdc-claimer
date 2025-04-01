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
    "4gvdrNKWaXqjZT6MurthVFVzuvJWHhNGwNEuBaScn9WVjC8SANcrGZ28kzcGZDNToLKAm73o6wS7kFy8ZT1rU7Hf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8bsbsXyjhRCiWQxJqdbFLXSQk2j9iL5zJtahKPoeYXFz4GsGVw1t5TinBrYB45yS6s8UuHetHiwcnQW6yETLRy",
  "key1": "cVreEisBAVnKs6Rs37qjaWUY3zbEnaY6AekiyRH978SnzR36GqoQEyCoCBgLTNbt6NEjrWZkUXX6SKqNDyovyY7",
  "key2": "541AXV7UJFgDuz64NCXqmf7UTMSonWVXNMZwyHaaEXXTRTr5rFB6BXnSyASEUX23camgpAHLcfk54yCfY1Xrm9sD",
  "key3": "2k6Tk7TB17jtUJoCtktgPyfpNHrreKHNE4ghQjxrn14vEgaRN78TV87CsmYj8RS6cRxsUCjaB4RBHSiRatgur4iq",
  "key4": "47tx7e6WC1RdT8nEbEweAAMdF7HjkUK371r6cFgbq2fA56GopYhSfaQutJvX43yjV16jFr9ykipdJsKVWAh22Tkr",
  "key5": "2tqYMSytSH4fseeDyZKxSBof8EU2SdD5tKp5qh2qjpvy9Jx82Ur8QPMKyN6AL2eKjAihaZ4ZJG2wKReQk7c11dw",
  "key6": "5uyfoDhxtMrBXJizvtgGvNrQBTJNsZrnK1Kyy45Pytktu9j7WiczvH4KsE5CyexXB8jD3sfVCJcMCAcpSZ5RVCST",
  "key7": "5qScmUtq1PzhriH6pouwXeCe5MFHdKpmuZXn2rvG5eKjvNjwByF2i7XmvusUyyp9bnhZDXkipM3C26aBD6PPLTLz",
  "key8": "49a9MBQ6AjrjfRUhnJs8EJFMfYTfK5GWw6MvNTrux28gVG53c9v4rfLpB2bzE7232rt7d82Ac9PioibwCcKXbxj7",
  "key9": "2iZQtssvmUX6YWVUtfynyhhstj9rEMq6BSsUREy4mssetF2dDmg2vcnKUQQRW4gKiRyd7ncG1K1vMh7DfemTxsQE",
  "key10": "AySmiSVF6ZPa9rjQHAXpWwQQz8HULPFJM2xWyByhzs86PLKd3xYQFYrJoZowEUCDwqo3qRd6YYesKdq7C2GPsxx",
  "key11": "fvsZKMTEwXrLjv5nTtZBz8YKiaaaHNDudw9ynNvnzYyjsHbmq3U24h5xsECose7Uc9XqtWbcACs62SgZYjtKy7p",
  "key12": "4uYPB9YgktCWFC8ZXEnan3ipQ8MVk4RFaFVmC82APQDusYqTWs4534NN85ognAXBnyEto7K7Ssrt8qvhfiZZLV4d",
  "key13": "wBSzYWPeRqx5tw4dpwU6GMZur1qBtjbmXddoKm8dVwyyAHMrqBCMM26HocvUSbVGz3A3KUiB9AjVcCsDbxfsfX6",
  "key14": "SHRvoZ81mHthxPaTApPhPmp2F3po2cSTZq7VdgxrV21kthVCRr5K8RWQffhBessXDyfF1KbHwH34Whsn5G5UKWU",
  "key15": "2qk85r7jN2FwAknFquwPC5GC8NeorHjN5hCUAvAxm4bLdowEwpmCgn4QVJBhRyK9T3Up31yhTcDixkzyeAhEoFF3",
  "key16": "58yfQ14R6AVUu9L9GHLtUG95fokccf7cTtrVEueTWjFKvcRPZ9RtvCbUErXSbk9iupV9Pirdodi8Vi2Ya5TcsqFL",
  "key17": "gHAFH6GzJXhUJm6MrVtPeP2QNP8rCXoqXonfivvzvHSk68ewjhd3RiC6FSeAV1nK16yTinPpq8hZLJvxvntwq7V",
  "key18": "4ePUx4DpLiTfEFvMrfuanXM2nHV8J5yZqMWjAwQiX1AcaSvNUifnyZxnGmzGVymdz1RLy9pQqWJ8vdRJtQmMtwgD",
  "key19": "3bXKRu4pgnRQDpApqAww16jYrXC3L9rN52adQSrDRiwCB2Le7knxghNTMdPqRgqjZBX33cujFFbFLTU58rMzMENt",
  "key20": "3eahxraw1ZE9tG81EYa8QbH9Ss7HZ1iaFsQ5uC9mzTjirDGH8VAYzHHpWCZi4Rc5XKQonkUwwz7JQDaPGuj2zvsE",
  "key21": "64TuNDDAQJyhKhRn4yqraBw9tkAXytFcVuXVkj4Rbo1kBpE64jnaAVyjtNqec2qo3EZstF2qWBpyt6jRLSPLQdGe",
  "key22": "3TdN1dvUpdKxfyEyBDtNhno3XrdRz8WpkAvnGhqLnmzxemL9f5TzkQvnSorpRBgMqy8P7EDUEvHDgEJHNc4M2vPp",
  "key23": "5KNXmDPiqJ3LjDCCbVfvJCD3B2geGdppyuCA9NrTKUNRnfnb8ZrSQJ7gAetMrnzdnVLeZheCoXBS2m75Z1GQ7ZBW",
  "key24": "4CnYfR6vCev9wJandF4z5mv7tABZfhMUX6PoX4SGxZ997Ga6U7coic6Zj6DMRX3faZVk6aY7pLEjum74dsFuLHU6",
  "key25": "3oznZYYkwLpdGGXV2yYEyNuZ5dWCoQ8vgnh9GXW65DiPuwDYju42KQsPrCD84S5pu918vBrvmFNoWvdgGFn9o5kG",
  "key26": "DzsLpJE6vMSJRpu539WPWB7RodzaoVMXu8BT1hfTeQm1CQXnAwRgFenWpUjppQUptstb7Ry5LRCYH8xUnR3NkyX",
  "key27": "sHbVhc6azDau1iMWSc4MFKgk3MtUKfHCXAw1hoT5oyiMMzv3DZfqGJcJU2FNMCZrgWRk9s7MCb3qksM28fvyMYP",
  "key28": "2xgGYPSSJrk5skLDXtAitwz5ajs2rei68j8RhW7DYeYhXBRVVEDeM9j5xXTDD83ZYTTMmu3yrCS42A5NV5Xgmavw",
  "key29": "4qPYUJXCq7Rxf7gJzRo1ygcYHUSX65HhxAbPzDtgSct1WVgmDQT5FMAGsxvnZQgTssH1u8SvHFWwHYw5dUWpfA8Y",
  "key30": "unrhemaYG3Dk5hZCmkJwvqA5HgzbWGFHmnZCqHNb91JfKgcZhitq1VXmdQjveNXve7Kw9hXXN8Y2Ujanx8fW4Nc",
  "key31": "5qR7RcicdQr6XP5NLyXijRcQAG4TF6JyRqmj1vhRZcai85xVttot5YWD9b4ZPCPLsRAtnTGTf86oREubn1XKNcRC",
  "key32": "3auz3bYMweEfRjc36tcu2bLPKP8UXQetvHmem7tmStzxuKKDFvWtFftgGfhgfrZUXkuwjvAU5iuGFN6Jfhx7CSzJ",
  "key33": "4G46v8Y18pZyHV3rhJ413twfZLw2gFhDZds3ML6Y8okEdrCkcZ5TiSLFe7dpWYxB4a9RyKFiXWPWkQd8w3gnfGfa",
  "key34": "2UGge2aPZCBc1Q3xaxkddy7Vk5Tcv9SGhYUHFz4GMuCaCe1n8psrkHo7mCXPrt5z4yvMyRQvEMqy5QMp7adnqaKS",
  "key35": "2dQf1ULSx5iemMCdxHgZEQgy4ShdCHFgVU3UWXcRPeUhZWgcHkpDgo73nWEZ9ruJnNejzzn6DvE1NRGJAZD1n7Uw",
  "key36": "8PrsJ8WNmynuNrV2Ku7Bs7eHGiNacYhXpNp3GobtWVLsEYGLaKUgNBfR8fkpaLF4W2W4ppvmC8D2TcdWngM2vcg",
  "key37": "5PWRxDaT3rCEx8iGSPbAbLAVkkgCfpKZuw5e6on2nfqG57Vo86LLdDpaUfcJSTwtePBa6G5X6gpRvGEbcxPHMG87",
  "key38": "4cDbGzAGNFUFCPdUr4d95gcTT7o4k1aroDfcR3TVCQT8pZjo2UxHHG6rXdjxjCyvhKa563gFD9dqyW12mp21CZJW",
  "key39": "26Gh2ZtQYrGL3RanUyCWVndmYbmeECMzfks4S4k9LazMDWXuAqSHny4kgBaEbEKRAEkPcZ8mFYijgono9aYAX78V",
  "key40": "43m48iqKZnriUHNgkbyWD371ikkrdZRbZyZkAsmjG2mtk286a8pn1yomfVVSYabwuW2daAxmyqgNF1nRrRAJoT2V",
  "key41": "NtFTVDnx3vVQhB5M8zBu11kgfVybcWxJrwhFyhhbciDWcbYVzpSAxiTPC86XSDQb6gBwrQLMiqpi5Aaq4djByhH",
  "key42": "4Tyy7GSur1H7PChNnZjfsM3LK4JewP7VMgsmP4gLYbBCG7f4JySNJNHxp3wUpxBSeW4Y4C3X6Hu6igg9Yq2xKNfk"
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
