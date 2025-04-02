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
    "2P3nkam2gSFyzde6DnyVJvPuDUt54VAnQw1m5gVLx8gzTBx9SN5ZcyLx2YReNConp73L6z7Y1S7Xd1iSCFtDAkoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MZzBnwrFVGg3TatLGaAUgFViJEdJar6H2PnmxBh3RkfRSk8pG21rDgdo3ck1VruiMs5kTFSLCwyUNrdqkZap9XK",
  "key1": "4UG642W4yuyJHuz1KbQJVCKULKxPPTW5VEwrpBGvoGvQyLBH5A29rK7UjPwKjP7LCPMNbEL3ys4yy2BPxtoZuX4v",
  "key2": "NpoCEjm7RUWtjUzmq6hF3AK5dTX2ZK34VGHqjqkmiioV1eYx4bPcRdASiB33bmVVb2ABpXShNqeY8Wu933B8iiY",
  "key3": "5kQjmtNGiT5rpH8PXTxcvoQnU4NvpU8FMMtDFqsdYyjXqtHmQwFk7PUPR24sizTsRQUubYNbcugF3SeHaz7Rkwyj",
  "key4": "4PeAC3qayNQefSWQFhcaRXzATnypnX1KASfRkVv53A6DBz2A9nph6dMxNbYkjuBgug2Fyv1TmjVjfjyU4qekGH6p",
  "key5": "5GpJgUYdfXs3KTzQkQryxJka1hMnAhmEgkFhFb9zQ7JiXHydjq9RCxX9X2CJJbeX1mvBRNqfPwzJm6qZVBm8gPxq",
  "key6": "2vfcZQTA82YzbZ6Y8oivMGMSyjEpkaveCMtC94NqdSw6UxXYeNkmYUfdPVjDNggTdJzDbQGmbdqfJrUXA9a6ddjF",
  "key7": "3kEbho9pwPopCTkmPaD6PYc78kpxZtYStTceNUAr8cdPtWHQM6Jrg3Waya2KvBk3QpWfxjqdP5F4pAs3FqoPiyQj",
  "key8": "2uwXdt2wist25MvHWyBMqFNiwKn5E28qowMGhqLYz4up5xwkzmC4A5L6b2Bk7jwvdJi56ttGdxYSAhN4T6fHtzHq",
  "key9": "3HB3ca9a2dPU2R9Jn1zHCiynwjwJSbLqn8rpRqSkho6o1M9NyQK3QknVkbTZQUKvaiQpcQAWL14vkGbDR7p48Vhp",
  "key10": "21igpNSgt9gRgmgKsFmJoiEkgC5Wb1mdNb6njWuYE5WeC7686npwY7pcAFUKZu3S9q88YA1vtayjAc89aXvNu6db",
  "key11": "3rqhxZ5rX4BuHUnkfF3wfRGm6VXGK1RnH4ymmPzzu9wooLBdaV9rnM5j3hvxd26ovR3qzxEoHjDKUPYmC77DfaAY",
  "key12": "sudDtVnnQjsJqunBBm9Qhko8zpkRYVtKeVHDoaoTX9SJKGj6dG33uuc3e3wc2oMGuUMgm8wfhkcyCgsLLBgWWUs",
  "key13": "4ZeQa7PuXiXa21neXhob8k6n2ih9QVbp71hjoqjkWVeS6FZ2rkohf9WKnaRaJctiYvh6mB5puqeV4AgPPpUk4ykF",
  "key14": "v4XftPhbyC5GC18ZfRnhwvzs97KXnLhgujr6HoEbZPNadjybrNy9uWLVowkQgdY2giw6BrWdv9oaCHtce3fqQYn",
  "key15": "2GjfcNFt9GtduJDuiS8KGZUpa247pm4hhPD7cv36y9nCY9T7CLthpUVds8EmR7VdswmgMbdRYJm6bRySwFcJ2fAs",
  "key16": "3GDppukbeRT3UN8Xkpsb2XGd4DRzf2HUJamM6CdnJ3TzcLuQfErr3kU8Jve46VZwSHocdVZmidapDj6ZgeLTQXCi",
  "key17": "5K9J8e9pnbniaxbv3Ys3ZXKL9srbi59jsd66naCAbfjzq9XAkGyXavfexP7nLhHaDsnLBHpVzzN7geZoWuAnge5j",
  "key18": "3zifHeVynnovD3FhKfPPgMcbfbcNdonpgWrjBJS2HXGMSowcPfJgGEHzXXf4cVfc6CrR5u8xXKRcyAwiiH9Ftt5e",
  "key19": "3SwGmikp3cm8xaNSbDKJu83iEtDhjNo9BztsPnhT3vDRAcAZoJBtgk2M2zpviygMDaYCvVn1hr15mjdfo6En2YxD",
  "key20": "4g5WpDEphQ8PqyqZXG9Mhxb72zJ9KMWxHjVkE4ZkXTxqKCgMYVVZPaSeZyTYaCRj3GgBhVHQ41cds8f5ZaXh9rtf",
  "key21": "GDrMLCZXghR1TFBwatnZRiCkMUAQH8WKa8VSfeNFqHa7R19czuyidMSKBe5ZA6nZx8iAxTtEYgmdU6G7hJjvaCm",
  "key22": "3Qwyuojd2KcSGRjnXxs84TWG7byzbRk1n593XHQ5LNLxSXqNDgwtiyhxpqz8r4dft5bFWZUZ5MGaUoC4skpeZNWH",
  "key23": "3dMK21pBNjbTrAEgcbhNDt3Q8TeMxUN9DT45e4x2scidRTuPC4PoJ7cJz18txQDntqNaPQa2gckSMichpqQpkt2v",
  "key24": "2CnrGWxrbrzDYLfuCvpnUPYmWrmkYkcKkEmKd6wVLnWvUbbCiQfHdjZvR6cLVJkqCrdPwL2oQ4Xzdcxr8MKM7tLB",
  "key25": "2XvCDBWLFSGPpDFJjnBKGXMebuUtvNiBHbuTo44xMmQrT3i9mvS9o7Ko1kcxGKwghtJbXxR23GfCTCpPRNDWCz4q",
  "key26": "5NaRajkLmHdWCynTwCFGke2ypumyyDVwdy7a3TWwH1THLhYvQ8H6t9HDWYe7fqC9oHPaArHKRjM13AeWP3XNVPJ3",
  "key27": "3sBbCdiXHL8qEGUTQLvYfZYvwEpRcL1hxK7wonKYhfyRaJ6mUYrtv2y9L6Fb4cPPz6JTiG4higjt7XVeMwARptG5",
  "key28": "cvhY5iTaZCtATK5Q2tk1RCd4aLEhGMP4jXCbpursELFuUzHEoMbrMMwphv1VbtSzx8ifa2XLACnBAgj55J82GYj",
  "key29": "5FN2wgruuGqqtSg4MWKqHZjaL355EVWippPpq8s6DrpnjFz5ct4DXLTKa12riQpRnsZZFYpCHts5V96XfcR6rEeN",
  "key30": "Mr9uJzj1iLg77wswxu8hhZaydn1Mop3j2JEqTuVAAE93CqTAJdfj9S3ZkXN8xLv8gvpiHAoNWx4QvvBwS8NRxU4",
  "key31": "4Y8jRqY3fdFSrdvetNbNVy8MD5goWko6eWHfLZYXRmoTDFqGH15JVm9eT86md2BygvD4ci1z7frbdYDHKQJiDC71",
  "key32": "2i3kPk8yQGgGoibuiH73JBD5CcKGNHTFkQrERmqhcSxmawhPHzzBM1tQkBjA5ujjPoBAUjESQMvkFU4kDDqfnvMo",
  "key33": "3gNJiQu9Wx94VzLwnezrAak2z6Hd1TkpW6nBFwHz4y6Qx55kU3Kr29brgAWQbcQW9GK15gEoK61bbxqRVzNMW7rn",
  "key34": "4QFDDkuVLyStYjcdxd7RJPBC1R18HV9o1dS8aLnz5zCkJh8PPxbdysJSe4oequqjeMG6qZBgiP6BJqiimKGNqP1C",
  "key35": "3oJCwG2USrazBiTALr4fRwp9kt8Hue4frAw2ty2YNToUfzA9PYjCvJ5ueV15L2Qbib2AMjHALfpw34uFdYTGuEUh",
  "key36": "2FySwdDnqjoH8Ty2Wh8hAfrqQbkHQvbtZcwQdPe7izNJ6Nap3fJE17tEQCvhZtzXTQvYbyoy135zdkwCmgdNMJ2W",
  "key37": "2Ypv2qWkEo1JsnTeAQiNcBzkp2ekfD1vGTvLp7W4oD6F8aRDqfk3SXmrs3BkdqYbeAzhV5U4R8Lf5zmB5wdobSGu",
  "key38": "255Nnq2kcEmREevwTyoVy7x8DHnQ78jmT4dViJFTXpHyUoCMFrCGJtDUzTX4dps6DwUsC6JBM42UjTH4gtdYdmSj",
  "key39": "5FjTigBZcJnjKzuGHjsxjnQfJEZ9okLUBk1Xn8fuXvuU5KDcMr2GnzqguhortyLf4AAJ1HxioRuSGdpML8oMFqee",
  "key40": "48eaduGcPZR11GSTdY8b6xx2GWwNwAF5J7XJfNiHNWrkpqwHVcMLXWGJgVziJTLHULq7PbnL7o3FRHUKP1zKFYEd",
  "key41": "LcYsw1BRhjvsNaV3BpTKH3jqsH1xzmufw1ZUqJFrdieRGqkW4FLcMC5LHKqvtyimqGyyxVbxxVKCxcW86YccDA1",
  "key42": "5RMEMZCfw7bCjAtDPTxqAunJjh5GrztEvVEsmg7NjzAnHNkBy837JwhLeiCLBVuMmTwX9EV65mueWPHqfhz4z49s",
  "key43": "4kw5hDVubjRhoBqSRovY56aecEQ7W4XUN4yj3XKosneeVJM2Xg1DXtGuVcfg2W8EmeRyQ5aZvj4H62ZZE6QSjbzw",
  "key44": "66SXUySnm8ZXnCnELm7VQs2czbCgMvqn3vKvEchxav9Ddcf6KTWWLn88DcSt4H5J9X95VNgA3g17t89L1A2MUpMu",
  "key45": "5vL9Wp2XW73CTEsA9UEtBu79pLAnGPUHpZiaAdJ1FcghViHmLVbzZxc2DAABUF4EmZxrDhHgZ7GTHTeoi5q7zyNa"
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
