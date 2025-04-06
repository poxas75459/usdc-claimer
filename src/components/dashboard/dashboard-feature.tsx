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
    "5jeUqtfZQRWeC8Q5XBFKrmPLtmoc2EbH8RUBihuZ81ra8HtjhXV2LKFYoFV1iW5kiM2VuqiaToJoeaFQmC3RzyXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LyTLGgx7WH9D4bMpU1Jr33JStyCvCHh86cvWydskpURvaod5Nwv5oLFpwN1m8gDtth43WzUaMiHzQYY7Z2A8EPP",
  "key1": "4uAgcToDwzv2pQXEaYM9EQGDhpB7TvzD6RaEA3ik4zgvcH7YR4JLzXujxngBMhtem6D3oq1r8GnEhmL4LnzspNQP",
  "key2": "2aEtfYAVqGRP5deX89cpjstz2A3rLvK3gJiNP348v9YuHNc7LzoRP64sQSRk64Gp6FTNgLxLfJjCvwQNyEHXFT1o",
  "key3": "3oJtzXgW9qenYNfTKErXrUQ2YHzkJ6ZgvQdVX8LC2KLBCd6oy6bLYGz4iRfeHHyvKhgdVytbigASJt2PZRZGiVDS",
  "key4": "H9bijHRfDaCBMTemkpSTFQbfMZG97JQJ1ki82rWuCSoh3CHxoy7XrioC9GGezfGEaby2ftucPteA9CHYWNTwKAP",
  "key5": "5ypQr7ooo2PMGNAGpG8JtLqbRi72kRoVa9x5vRxTTg2iWVryKdQfzNu86XZUirGb3WfVz5jPPVbTRbUdPuhr82B4",
  "key6": "4jb6D79tWtKaf1EuJC8Z53kntC5hDZVHZA5Y7i3WjSYRqTVG9NKnA8xsyV8SDtr1SC8BLwf6dCUeRnSJ2xHLx41Q",
  "key7": "66usveBGhfJ8vMnNh7Vu1D7aqUUPrY2GUA8pG3eRqqNEvoTsuFi1z2bK4C7kra7AsohUWDsZHKw8JbCn15h9VxUC",
  "key8": "5LUaq7SjGA6PrP21ooFx5myG5LHyFM4w7sDQuD9u5tK2UpNkuyo34qHvddCk1TuFWuuTnTdn6BaPv1Z9VdDxQ9DD",
  "key9": "MLXtkTurSaQX3vkkeJyXnJincewvQkiasHYNHTZEU3UTp7VJv5Xi4AjyM4gVuTNBEJhTMEHScun15JQzZvXjAtt",
  "key10": "4EQseLDemnmrWD9p52CGY3Dn3hK2G3RKEvr4n16nmmTXDKeNHq7KsMxYTYsGXYoKu89wRVRthqfSvz7gqrYgWhRM",
  "key11": "3X1ReattRoNfazxbRgGnBkMzkXRbsWQK9t15rg13y6B6SJareLmmj8YxwXQY7jE218XJ2Drib52WuMEatp5HiQwf",
  "key12": "3hunWNtpudz1Djb1h5fVYoeJJ52ywmQrXRtbMyFwXz8eZ6eAJmZqfa2GDXzE4rNCs4So2jmyoAhaLWQZxb7yD27W",
  "key13": "4UCwuh1FXxyVovS19qkCVSJyGumq4bbJFSMUVhJEeaoyAAahobB9pRqn3aQTiHYBgyQ3Td5CKzEgcJm4ugr8ucXR",
  "key14": "2EFkutS6XPe1ziBqMjuU7T1svF9XBXNj3hTVCaUAn27eua44Pz1tZLHT9Cbrm7K3d6A8D6mL3yqRvM7sNmpDcadD",
  "key15": "5BdDXb5ojKGYp28jevo2AbuG4W5TcVfqh8b3oxbsmgiu4RjZiMYMHvKqAwg8UWQpvPP9B1ZJxuHCbjETArSJ1jF6",
  "key16": "5fK9SvdMM2uZDfjaqJtT7i58E9YKAardLKrBdGRbvRb2shV6h3paKfk7HPCb4RKhCLGwKBGMpQYevySDjSUEzpD3",
  "key17": "33ufV9hhQakqZHMyPdoSKuyxXJEmPdr3f7q6zFjWLfJv7EH8vMgWhsa9qtsNA5mnxBPsEJd3Lgz2eQLv3ziRbo5c",
  "key18": "4WpNMfHgcHjP7tsy7Yj1EbY34uXJhJb5JPbdbkJW2gnJXfhZUunz36QLezwR86EBEvqyhfDwicXAWXKjsdB2j9xt",
  "key19": "hsTh5jxk21RanZVysTYJikN8XaVLiyupQzx8eywKHtgiYKWd3Z2fdX4oocCakUxTarb9oUq12RWiU2NzDwBt7Ay",
  "key20": "4CKgRhYYzqHyYjnA59th9mrULociQNhk7hDN1wgrYUdsgLxyw4L4Q7P5hJMUqK7P6RX7mXdxJggBhtpTvtWYBXfY",
  "key21": "4gvLuYUqRPffB2vQWtFT4fy8yP6LLcENrXYeBFkJUpbmadeUsJenBGNez1gSVE91rx8h2BWGZGLCuf4Xjp9dp6hE",
  "key22": "M9rTKwe39Ya3xgppVA9s4u3BqfHjLrqYvhzeP2UL9d7x6PysKvBcd9NeWuj9MefNE2J6EdQP93dayEsYxxG1rxW",
  "key23": "kBfR6PrY5576hXQYJ9gUFHP7jC5K6qXGdhhMspkkfAq4u5Xx3pDyjGLL13NiChEt5J82qTcp7hhkL9tW2BJUy3F",
  "key24": "2CthRT3KuHU3g1ecrVXjnKeu9e5nNrHHXcfH1EKbfTsfKat9pZg515ddm2X2JWxcx1Nqk6iCph1uBDhMqzPiUx59"
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
