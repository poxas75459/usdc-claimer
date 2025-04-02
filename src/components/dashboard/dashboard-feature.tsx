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
    "4W4cAKqd2s4gfMtq6oNEhcVD4ee79AjiDGxF4XPtfQMHDJsvZnscPQFbKToj4t6EG1Uep75pf9J89sxPrJvrpKaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t3muJRLd5DDaKEdSN9vgG1SkacHPyrBvdAt8HcbaLsLwwREfeabteEpRD79nZ1EHKwY7M84EiokDQkU8rVxZYZG",
  "key1": "Ui39DLDhgdaAXzRBvAsAsjLc5cyGyp7wK3bcVjHuooPsLAs4zjvJ7jTSi7ESa1YWpmLFiSDAoksL2CADv4mxwYm",
  "key2": "uEFyArr8PiiYdHSvzULkgNMRuxHgF497pPiHQF8SS4k1nSQjACBt4ZvFyrx48hUkHrGqZCikdGPyB1YXYipaxzi",
  "key3": "2tmfW33BHq5JaZFgkqniN5FuW8aTzzW3LzRnn7uhB5FYpQv11SL4zdnRvrv5ZYEMsFW2D2izHBrFdcJffrntDDag",
  "key4": "21tZXbcfCKDp5SjR7aApD5q4vf1bWqQRkd49fa4zxy8n5pwRf7MESToQCP7GKit1ABkrT4eshGwqQZW86iCbjyCq",
  "key5": "33LU8PZUt5wKMR9yutcdK9cbVA3fxeJ9Gb43WuhuShD6H1zLKpwgoxapzTk1WfX1g8BJE9ugUycXV5erEb1xNWZB",
  "key6": "B6MtStagY42oUZ151WpxQQAouqnkE4HRtVxNUNzCKLsoFLnyoWPgage5UgHrWmqNFL5hrF7YDQs2Ao8w6fXG4mv",
  "key7": "5JpSFkeScmGN5W19qpNhy9PRa2nssoV96zRpsmKqdfLMAg3G8cE73xeXREzKDAU2URr6HwBhBraPhgvw9qgHmq3e",
  "key8": "39LxS6h32H9pcKYhh3NG5NR41X8C47956tsA4S4UGtEVGzm6AGmtSBLqyw5XrV7hYs6QRLT3NGmiPoq2RRVNwGVH",
  "key9": "2rJGn5pjYjJhi3mrqSZ4egDZb5jrXmJqeQw7iooL4FqUJeY4ywHQFZupzTZeEJrgTYTBfwhVbxcqGrN9dTyK8dsK",
  "key10": "56Cb1qZLP2P3ezCoQYzHzP5qnuMcmKbxyYja8cgKpS514zEwyJG3tGudEs6v5xSJPCsXpfDCaJoffPZ6FttZXd9L",
  "key11": "iGrdaX5MgmPo8tsQEEDSsevUAkLeDMfMVeBUmze3Dcpy7h35pNhYQSzjp519SjHgCpkFjMxJLFfQXuvB5hvVZgX",
  "key12": "5c5vH1GghD3RksLZkJghVyvSaUhAftRSoDucYsYortwYzEgQ7EZ7usYWvqSg2rSFuFUjFmbqyxfVUtKFVXziHRuQ",
  "key13": "5RrZAkMymdHJpuKWjNjwjnGBPbc6mnjsvkdP4vF6GFtvbuoZ6S5xEoz3wWpV3C3bPToTyyXbGCB1KZnejbPZepop",
  "key14": "4NVmERBM2Gz8hYq9SkTwyWKFpNB96APUfqDeyhVZ5UPbAiGTgGxDWjBLtMmk19a9dFJRp5FMMycdZEKXZx6QV267",
  "key15": "2mjWMYRknyPdpg5SGnomxdxuBMwpmHsQMzbdhqdnJKe9yLP1R565rLjGrWCBY81b2ifb8DXHENT71bE93XpirKpM",
  "key16": "4HVhNge9WBgLHwYLq4woUTyQt2LALAcVBXTWJZbTbdaUWd3TCrvqLp6SSpmrcChqKYNkCWNxTvnfH85YeGmWt7Da",
  "key17": "uDJdWTo4W5jFZyCwPYejzFxb1RWJ3h8YBPyLzHMMJTNnC41hDWAjvhu4RLDKsit7brF7raYTJGsnbBKzmNMedNp",
  "key18": "4pabnzLzoJPkJ2KUgVMiPJYgY3CjQkLG6dhvDXPgWEvCqmnxkoLscS8BPG4auZB12cGJxd7k4ckzb9FKbfPvb6oh",
  "key19": "4yLGMcXXpLjqqDAqv7ysgbHF9sjkhZGPooZCi9LDfiY1s7A4ySf1LT2UVbewH3xcbUfdxSBdxtg3tcYzT3zFqUt3",
  "key20": "469Kr4LCRa5b1NMJj6UJbvLS3Gv9V2c2RPL1zyJSRhP6bkXvC61jiLLYpkHaD3GQGPithzixcmA9p9owYFm95Wb4",
  "key21": "3GMqeQUrLNDZ64MV8XN1XwdxCBRhR2J1sRN3ai5AYGhbXyqoqhVqs1YKJAeTSHa73yFNRUrYfWiDE71VnMNNBYu6",
  "key22": "3LosrT4XdoCbtLndUunzAxSRs2HbJx6QYFXwYM3QSLgR5rDmZ4bWWiDMfvPNbd8afEHj8tiRb23Ch515FFakvf9k",
  "key23": "5BR1Hbb6W4rNE8k5TGGKQY4P7ziJvmFGUGSWn6mYQnipPWHzM1DSRYmbggz9UYoDhfcdrNAu55bfe2RuPzHUE11a",
  "key24": "26WpmmPfyP85RuZVESTqjTsAB8jQ4ksz7DE6dCuKLQjPjSACWUzAKjs9Rkq3P6vKZeQmpWrcvNSv5ha8wKHK7Zf7",
  "key25": "5mUAtCjKyKeG58ogQ8FnfRtLkuRGKDtVx2vqS3opfptpsbkbRzvSqGTAVX8WquF9FhvGJwcSAus75x2MCXPLesMF",
  "key26": "4PguVvHSZbVi1FMM6wok26cuXDZsEDHrPoBZLxtoHSqidgsUnPtCUU8geaDPmVHPvfCaYzMF7JpFF5xzS5hjojme",
  "key27": "3FaZJRevavgUBBXCreBnthYBBmpb22bXP8qV7mPda1MUBZdoBn6cYzZFvKTsB13BNTVNTLhG55DjHshnoRobyXXz",
  "key28": "434aZTn26aKwzA7jCP6S6hfWrnARAw2CyJ5gEAgqt2pGESsorECm389rnzbL6FKgGA2Tp9kQe6YjBsvYfzTWSpSG",
  "key29": "51i9VXnASGdy8Rsc3MDzioicM4EodksevjajVcUQsTvQPbXy36Mv2xL43Gtdje4YsMHwxWHxy4bXGDqQAK6b6gNy",
  "key30": "2sz5kCjkggcLfaE6T3gyfALaH44WSUAkLGqqKuQohTpuUj8CccNKQ6K5AeikGZQaBb9w8RBt6h5zZPG49BYWKoGY",
  "key31": "2rU2kYwVxQVTxo44k9as9JvAKRvvikmArZ2BVxJDxzbUaMSF6D6wnDhWGE6szSQiBTb2R6QNw8GM7Yvv7r397cXx"
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
