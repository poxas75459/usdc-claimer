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
    "4BbHQPYcn57G4BjsA6B7AEy1SYHEaacLtJHRYYQWokmr6Qk6TR8BVacdKNoGEm7tnBXKgtkwfaSzHeUu5vgkkPm3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjFMr1csbycvSfvsXQ1DJ9LEDHdjDQ4npgZjEJhqc7v5ieXQfto36sh82wNHSDxAGL4yKxJgC165DqqNQtfhiRy",
  "key1": "3GZ2CBAWsbQE7bm2iniK6oQMssjHSjRJvELkudp2xzYxCpWKvDBp421NiYuoKC2cuSNEfqBitBxSrYv9zAx1MJKf",
  "key2": "1kcoVaf3trn1x7ig28JAxcJgzeTyXbszqftmE5chCGAe4fq8vsHQ9vWLDaAj9jXh9hZt2osQrHaXKRG23rqz61Y",
  "key3": "5ajdQ3UGbVWyBHQiczFVKAuKgqRssxniM65FwFUs7cciMRvFRoKggW8bUfT4BHHf15kqdWtyNnJ4MSDGWWABdC2L",
  "key4": "3VnW1Cc3K5BxdzA846Br9VS2Scodxj4BmMo47EynDefgE5PwexhmDWZKDuDcyU3rXc9BuVejN8B2ConAEVFahnmZ",
  "key5": "67HBYvhzs4h3Nyg9djwnqjLBVb4DTsqGK7LvL8YNqDXWkJ6hggqDNZvPxabhgddWszPfY7dbrrpgBcuHg7ixN2AT",
  "key6": "5q6qGcrR7DS2QvotBGY6mvHCoroYt1jk68WPTf2b6wNNy6X9XMTRTs5XKYwcLdaMZd1qhyHGfdxAY8DKewXSnfKM",
  "key7": "4C8v7AGzffnY8GBpmcdXMjYjXiAe9Aur65L25pKqZAmnpA3jPdd4F6fKXgp3pWeXyjuFAthW2Y3Hyc7BSxWqgc3h",
  "key8": "4THRV4nQpfhBifvYVazSVFgWKBfVjTqQkEv6VLCvMas9H1sTsSNw1xQJpqMaCBe5uMG1SLBH2yANqYxbBag8rPEp",
  "key9": "5P5euTih5LjMPh9sqFcztf3g9Nx3j44F3JxZQre5dzwEE3unU85f4WS3MbUMu987S68zr89pdS12J7GV5ECNiKVE",
  "key10": "622G6MkxS4dHBJb3QKy3VVDG6TpqrnzcRpPMZ63RrzpV9QaYmhcAfafqfZN3LnANrfzd2ZdgT3VTAcWgmrNPGG6R",
  "key11": "37SCochfTxebYXL1QY9kLTHShj3owbEP54WAPM7eGbzmYAgf38SyFzSjT5CvupmcFCGYGojzr7UjHpzxAWgH1uR7",
  "key12": "3NFgEBKPDcrXJBkTeCvedXN8zEDUq7Wenv74FF2p37hxPEeS5VgSepbxoM5sc1Uf6ZgWUmPdXkZzeV1RSMA8CtVD",
  "key13": "Xj21h5YDRwo3RMuFzeQvgm6XywsTxoWjgGD59PzZtyswmG17RpRBXkRu8cBbhE4gcLEziobVCFJQB4JHPsmsTgU",
  "key14": "5Q9fBAjbm8t8Qx5mrp8fZ8U3cGaxkFRhHnsgwifZzRk5g6sqRBkxySgTHjRoCCUkxrPkCYpQC5SFUCf5XG6pVFg",
  "key15": "4rnkh3XWnVm1MBBdDPMkaYE1GiVU4U4YrdL45GBQEPksfF8XLs35YqG29DtdG3QrDu6E5Exit8enPhioGRY6xyaL",
  "key16": "mhJBUAKTqPRkCLPPGyvPUSbLAXwouqypr1fS8GCkYxJQ8yqbaiW4NtuPx6zZWZpUXe49XTCyFDPqneCx69mg8wp",
  "key17": "56M8E4ZBcjfMARSAetZv6a4MRmZ5Dkjo53J7q8g719yyQJA4JP8otMD7p8sJWRZAdbLfAmXxSakEq9kEp4aWL6N7",
  "key18": "3VFHnMn3RYLrditXTVESiVhSfAcVKcY2GLV1zWGMBVC9iWUDKYzC1fTYn5cuWeaNmfX1Nzqp7nys8X99eMy9RKAC",
  "key19": "4rUiGdtGEuWd4NJjCH6ZKxgQad3FatzkPfhP8YVENjm85JCEeE9JhA1kYH1RUoSXe72vYW9tCNmWWunXRdiWoZQj",
  "key20": "28BXMw7Wftq5mtL9XnwhwWgQSc9RWfayBxXEFNC2isub7xHZ89Q3UszxbZZGkSfH3CMrnSJVfrkosvChZwu4TkBz",
  "key21": "3Rk5BmnCfS6wCRsvjpcyuHcKdk1LK2D5bbdqmKsurSbEsFS4iuDT42AByZMrf7DYF8QJZ5ZMvyYzjqTv2NLgNoPB",
  "key22": "3ehtECfM3NYRranPGsTftfFZsgvELCDqLAaRqBWZ76zyt98PgdrvQqzXuZ3kMmqSZepEGTkVnZT2PYm35PpK5LSB",
  "key23": "3Ac1uJTtiFQDqELCdN3dYYCxeDawjFGBkVzw6j3jyJc6p7aT7Z3ANJVtDYRfetGD81WALtQwKrmnZ2PWjqnx168L",
  "key24": "3qmn9dpEEDjjg71Rit8zFAufN4e8esnNqhxPD7Hxzqbtj75MB22CqD96GWRDSU8TCuKiRyH39J5rTM7Qh61fp3ZP",
  "key25": "2bRDUwav4qNXTsS2rnNSeY7ZTVFL2mgUHX9NpB6jwnbCNs3cpZmkvr18VdmTgtnCeCvLYnDSRvozfYwNKCdiHw3R",
  "key26": "4WBSHBmq6U95xae28riMLuXkEDd9x8uqyHwgKtcpVnK5VjqYcoyicVjBbsk298GQ5uDNBcoccyAMBEsmkHMwhAA1",
  "key27": "56r69aaBLGAzViZETqxbrhFGH9HeGxbbDJv5hcUVbipwfgwNuv7Lzz9fhUSmLS1VtH4A6C8Akkmo3DT86BhSDkYr",
  "key28": "2cwtjpTsKgUCN2hmF4o57gd3q2stWpn2oWAy3hZNxFQgRwAJHan9Yq3eNSeSVJjbdi3SRquEXqYtoYUKuuYaJCvv",
  "key29": "3JvGajxTd8HbihnbLtGgGBEt2W65A5Gy3nbpUSHFuPT8GEs9RmqY2UCfsvPsB2nV5KXeeH2FzaX4XkPcm7VGbZ8z",
  "key30": "BQGV9QgDCZiGRNcibV17aeKqJXdYSSDeSuKfNBowLNjRGUZ1vBvuPfu9NM1BognspYfsC69P2R5MjmbgJuDHke5",
  "key31": "5GzsprVzc4UacMsdvRYM29YJEKGdCffUmEF5YueqAx9RMeCH39smRa7PjPcz7o7tckTRtaqQLgTfuxb9PWppKi57",
  "key32": "mCBFWuFjDG9uBeDLwcRd2L39zcGNmD7H3aHRsSn5AeTJbW7P8ToiwsVQS7pydBS4orhqAif4q838dbAomqHctuL",
  "key33": "4y4N6hqH1qD6GCRmAZMUNWBFptr2UTyJUX1CWzWzNRK5pHs1u9RBeQKTPFUAVRp8wAvFm1SyeSfK8JFkAPNCjoS6",
  "key34": "43pnj4BB8QnJhESkpsW5HSGrxn5UfhRX8N2ENYGiVq7ikdRzGs46zLYEYEAeM43XmHpCZzxRRzkvsvGNsuAh3FVd",
  "key35": "2gLdZTvajPm4GzqWTgumvRwWnhCtZ1gp279qSUjECvPzkkVqoaQhaCnXiYPcYBmf1VADkNXPcwFjvD7Mm7Agvy4y",
  "key36": "R5K83RngqoSvq4stsrh22HJ9dLU5djJyR3u4zXhcYVHAXr1Sjw3qWXAWLcypDUgWpufwoRaEcAYCbHk5PpYXhvX",
  "key37": "2iZBF2mHDC87Num7jn24hqk7ysQEmfVPhFZfX4FAR3kfcyXMB4S8MhzGhPgBGhDVQDsNpdbuakHxJzZcPwFoD3V9"
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
