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
    "3e5yZcozsBK5d8mtKTetr2JB6gNXgY7jgghQc2vCtVE6CgyXaDoMYJifyrzUDgqR85KeHw2z1fBNCZ5Us5y9cpQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsLFnzq7fJ9ytjhneMyBgVNtXkAvUHct54UdmJ2Yob7JwnDXy4gxiSmvN3W5JCHCR2iAHSzrJEWiMCytdzVi8Hq",
  "key1": "3GXrGoGBtD3f6ruYZsQ9ySepNsxqwgwhBL4tr1W39zmcjWVzEWuiYmEFBjU2rByYoUrXSe8DvGGCgvcVPgaNmySi",
  "key2": "25mrRdZfNzXcPUpDk9ngNpKC7nPdsaTrhJkb2ZxCeubCuuq2eSgSseghNn7rHzjCfPD96FJFwcwctMcuZXqSu5aC",
  "key3": "4vtDSUHgPzTq13Jeb2fKnJkxghniexNhwatKw27UrtHUkAXxRybbz3SFhpk5xMg8QvAeX9f56hCbT3Dk3BNstUcD",
  "key4": "DRonYcPiKkrqUNL25TMwqb6qcp2YjAeoiB5gougXhuoUDCo8uqQzjxC5tQbfNRSstijGKBCon9TtggcuJ66offb",
  "key5": "TVbapJ3XcdzDDEc1vPgf2C6ExeRMGC5cY5ViKHqwCz9Tvm61WddKiz8LvPtNNsj3hHZjhQYUxLe93jy89RxCD2i",
  "key6": "64FucVntkDMewUvXeppaTBEXAkJepGFhxmK45W88EszTzJQngmw4Ej4ngVnLVN4WHFYCScxbcomEYTi9KuoHTQvq",
  "key7": "38eL4gmntgeZvXPxQLBwvAN4W42p6tPhcc3wzoxGLzi5Bv6GjtcJ3yZTYfP4PZJxfgpwF2pSRzoJpehDGJ1QXCHW",
  "key8": "63UeGengSwV9ch6tBzpwgjnT67MdCcZ5xTFz47ZV2RiHWupLPZ7rG26Ruoz4B7F3krKjYgT6HuUKx3jDsK2g2AMA",
  "key9": "2U29fe7FWKgevH3A3cYWrzgAbiZv39YiFTwTgYp2foAwzTA5LhGTBacZkoT2rJY9eTazzBp1Kune9nSc3Bk5JePE",
  "key10": "5weVFKxZJST6MH5G6QcmntH8i1LmsJqsyb854hFDuUMqcLzbfjXAANWmQNNzNvb2pfeqMfsk5dbNRELgP2LDs74S",
  "key11": "22zRtUPho3EjdmEmugDHAa11YzQveeqho1KbdEQyvY1ZC61kUEPLpjBr7sqm7uoViwLpwvEUSFPULqGqcQDcHPPq",
  "key12": "44BcLsqUQw7ckgzJfWhPRXQQvZFagUTq6wjjJ75zY8EusohoRzBfvBGLnjoPbRnaVRjPXVCUMANfgPAmRxdwxAqD",
  "key13": "5LTpV5XyKvYzGYxihshyQfyFxjsJe6Qsum4eczi2K6iyY4atYhAkXxMPFn2A8F8ZkL6LirwMWKWBWyxDSFY5Q2SH",
  "key14": "2ihZyCPVLUiRAVzfSpZ3NwGLAbCJ3W7DrgNhh4QQYv5HV8NYKXCRiFbzdP5NZfgqL72whRiyBdb232KfxWQvkbdk",
  "key15": "t1SAfMGknw2tGFVdxPMvJuKf9Z5iw1m6xy3yqHKsnexdZWbpAGDfMj7LTb1sj5jeFjTPu6f46xLi9LK2JWMMucp",
  "key16": "LLPnTUbHvLh4eia2Te5qCUrKymZEda57nYsYjPFgwLg8GoGFt5CMtukSAAh3aEweoMrXyZEdizKbTU8biQoXd9Q",
  "key17": "3jXzqxn855vgicu4n1PkAVJ3WZopJg1D1wpLycrHiBGxvF57W1uhPESx6yJuG7oR3JjsPZfsERkQEcjRHeo1uRUv",
  "key18": "LcREMLn8zbu1KQv9UW6tSMB7k3d4eauPtsES7EeLYCNij12dzAZDRRocgSDJLKXbq7t9BnpgsmfLyMV37g9JMTS",
  "key19": "4UFBxXB3Vn5UYLaZ8UfrZ6bCAStjWaNxXQsqYaDtMReCX6ZbcD4pKkons7o5C4q1eoDEw6z8j4n2LQ7dCoysAZYa",
  "key20": "4xBCPWp9PkvK7SRkmvebf5Fs7qgcnnF9mWZVCL5yYNQGuWjBPBMZDNi2QtfgPPK9Vt1kqf1VPNMHLeW9zdx17iZa",
  "key21": "3t5hzJQyrH3qynvxKTHukTVqVFuGeWdMHCcHnXv7MGp8C35PDRSrvu3zKVmkpNZ9YhApQJ2KLPGwX54L4DyZvZot",
  "key22": "4RoXQ9YzhUfYQFMxHtMSjjDz4JHqdNhAhxLi6H6k6S565TdFr1nyZsJnU24v8eRMfM87xVoJnNqMh2h7Nk1UV7Nc",
  "key23": "3XX8iUomiEDXraXGr27JUggCm62kbpWUKuCdBHGqgbbgRfBGrGUTSd1QgACbdfkQ5MrUxkveij7RTRoWFDjXe6tQ",
  "key24": "5qeCdTvNVomvMRrhKKjSRCEvhrNUGRLuiEMKf328aGiDWkEw2MiGyRSYcS3pV6NTGyPTaQTyfqHJ4yuLNchJYwQ",
  "key25": "cKEa3U6p81UikyBr75jZSmkbZEPqxqAeDs3TuYpJ8iPsVsRBJgXxZ2kcNYupCVtLXe2DzxdEJ89AhJ63PEkTkQz",
  "key26": "5AkyUSY6heSGrXVe8pDD41mPVxYjtJsQGzLaASjqYW4MjKkaQCipwV5sfTTwTDheFfGNst5SqEYnMLSbRHfKpFex",
  "key27": "2PPgMAmFPGrEkhi3knkN6sdnt56EJcRiqyQay3UhE3byhoxvaU5gineWXagM3KCmPm9BTeDKSVTTVqKuniFZ1xUD",
  "key28": "2BgMqEDwrpuQRQ1N7X9FKKiRLfoyHpmn59NU3PTWE9TqNU1Pko36UEzcSxkozWqiwog6RBEMwQ8dBkuSWGPSBEDn",
  "key29": "4ndtW2SwgjTmVob8z12x73tATDVpbgU3MpsNZZovtdTqmm93pfv7sUGKHmFvXkabRBwxnbPYLcAwYFrWuFZLDWm6",
  "key30": "rMwLCPviUZCZoVabctQ4cJb5z7Z1FNZw2MiwmMyByx1TM2V1u6iUWbik5Q5veN9Pwf5uoJaSvscPzHj3TPAsGft",
  "key31": "CDnSk3d6DUf2ufKPUkYukvSHf3bsA6RqKT5vPfuuWRaA8St9uVJcqrq9k8djkoqhJ5Vw3t9iobBG1HcpkZkXXdE",
  "key32": "4WNTXBV9j4DJoseCzN79FNazCVPzw8DUhGuadcW6ei9DZ2aLnQoJNNz4Rw6Qf6F6LMTRVFzgzX5fiKUicf4nPSDZ",
  "key33": "3z5yKJFVMjHp8b7yfKMyW8xp6TiQCQ8orvNLDVivxcvfQmx5NUmuA6mgKozFtCprZUeayrBw6dYwE6Aq9fMNRxkj",
  "key34": "3nMvjaqGXRXxcZ9WhbUVAbZouVwrdLQ2SDgMPMo7iV5ErCSyhfbjBtG8gKaqBucBv7wkjAJo9ux84T6c8pNmoyGT",
  "key35": "VeoyXmMdWvHZ2jr6ygjLTv1GaZRKg1eNdGAiyJwbSJLXJAeTKX9LsuUZ4tx5ZxhFL9CFTAv7CSG6QpiYD6D682r",
  "key36": "JpUZBj2fNWygswaw8WdTVjF61cf65iLDDTdHt3L3YWhdMMAwFG1jkUF1nkF7bjhmgc2wFQVhAaGLXrjL43C9VnX",
  "key37": "2dYwEs8nuJqa9BA65penV5m8bABVQqfE6PreXkHT61xUBZf7p2TEAGWZkHWMa4Zw8zsdsRX3vCU6xeGKcssnkPFF"
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
