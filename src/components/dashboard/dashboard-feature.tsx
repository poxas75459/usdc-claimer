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
    "2hZBPzzFas1LsNQm5NY2QrwXjBnXef4grD8QhYhfdgKWbEQw75fxzSLs48REuf72UL6mPAmGMiWuvgEQG7sgjdNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ordLQaQXUmCKhgoDf7ds7i3w1uh6gJWCNFeTurkCdP1V9ovFcxsKspnUtAoPKKSaas1CUJsc8wgYWPKkcdKiJRc",
  "key1": "5rLCrMDkPTquj9CpZnESmiaBfbVBREQ1ja2uG16txo8BfCvGYxVXuH58cKUqX5RG1hKZ1vbqbzKg1gveLccWVWQA",
  "key2": "4rV2h71wGDyjppwibEybkPHaLhhbmF2QyRV17VKAEKfoJTtaWuXsVAUGKRAf2GeBh7yxAQK5Nwuso6dHSUgH3Aem",
  "key3": "2gLZbyUhnHoS3aAYhsyjSjaQ9tSrB6jBFL4VnVYs8RgtAwEqhFbYnCSENnv572NzEtL9vepxKEexggihBXksyp9K",
  "key4": "5mQxumqmkKcPJQsAb66GUooC5wKGthSMjUW47CUZ6YcE5X8bkzzAvhQq4jN5R5UVGM4RVQRfFEq8un1KXW8KYsQh",
  "key5": "5fjLdTj6ZfVfQiUMqN6yXLTbdLeZZtWyY7eVREoAJ6Z54df5Y5Jfu2DJHQgxpHw5GdjtLo4T6K7PZnxTinALt8gs",
  "key6": "2P8Wfm1wvammi44Hokn64YcfQ5BqWLFMobZT5yPFyVrp7miaTdSQ2zY69j1Fodw1yTBezKAb7LtkTQBTV4Wo3nRF",
  "key7": "5HYFXsZEaWWMg8FpmeHiquhaAoNu7rpwYGVtEweXX1QQi6abp6aqRSUrY4AgjnNS9bshQYRJjygntzWGh9YBnSm2",
  "key8": "zhhqu7oGNgHHdYbijtBaC8T3X6xRmGy4EDo45b93Ajmyj2dVL5Q5p2KybTrTuadrpZ5woDYxBmNmacrXyVzzfTY",
  "key9": "48MC7LHAJ9bjgFpYx9EKi38eJXQP5uJkdzrFUz6kvJgMYuNUz1MJ9GNzQCBuqca2CfWXLhUCFa1KpSZxRZNUyky8",
  "key10": "5YkKmFZzBmpz6H7DefSQXccNb8g7pndAEkcYak1mtkxq8FnrecLGvYJ9cYKhvDeysBkiLqTURw1fBCkxqZBYL4Sn",
  "key11": "4joYZFd2ePmzDUKLdWJ9SgYhB3wHezsSD5VgXMYZnVcrpeGH238MhESdgfy75cvx9UM6HXTXugrsKzyHo6HsToog",
  "key12": "5G5nTGizjeRZHhT2DyhUhsJtT2cp3m2aWkGK5ZjpHqDe5RRdbMMkxt1J7RwxNuCdzUc1eNLeVGqC6k5ebwCcxMBN",
  "key13": "4sikBqf2yiDtnp8kg7nioGtJEtDEzQCYZ1wVuxvF7XCzwXjpj8AvcutAWxpDQehKNoRwuiQroRfWx9SXLa9VQGuP",
  "key14": "4KGxTP6W1vW5onRQPSyK3hPQNddLBjqawY8onHMjtqzffHto7xcfx3RLmXj7Apbtn5o3AWbr2ihKybFADrJ92zZk",
  "key15": "4FLVPjNsnwNpPa2x3uKUYg9x2zVaCVoDQrUvJvYncVWA5Rf1gPrF532pK6RNadFN7zCUBWP4cmaGht1JfAkQwp6x",
  "key16": "47ZUyArEBRoJL8H1MLwmzvsYnX2o353T1sSGmkrg1arYagzaEKsHsq9zGuiVR53ip8g9xfkdEWWUxovau4rgPfiH",
  "key17": "4KLUFezxWbn6N4TsWPeVVXje5bkFGrWshRuWYExaS4pqdvCSb47RowUDZydNjMLVGJMUjseHSMuaakkPxLPmefUK",
  "key18": "b7Kj8Has3cjYKUXUu9vVWMsbbD7H1hfzrXdk36jdks9Egja6YLLBynER3qWXyGoBfjVn9UeBnC18wYUt33f7bKg",
  "key19": "3nCmcUt4yDs2csNrXuHkwipZ8VtfYFxQRcELMofGVFa5BwkfMxhcecqy7AHKiHnpKArSG5WjTvXmHAsGygtB89nu",
  "key20": "5ASLFijxiwkykXk3MBLx3mph2RmEuZU3VN68fAFerWxiL9PKdFUQic37M6wMjvZ5FE19QuBtMyiftrBJQX4mZWET",
  "key21": "62e8ENaVeHcQcdHefAh5dcpWzWHQEdr7A5aF2W17zdawQDNVKhgssmGxdUZwQRDNmVSkwH8caeXiLkCHY3Vnuvy9",
  "key22": "4AUsdFMTmoWosKUwyjuRPfKWqY1dNFqNwjh7e6m48ukM2NT3XdAT95wytYtPKUnH8mMJHYCNwZJHWFVXrQf6kdwP",
  "key23": "3zXRG46WvSxR4CpTQiGDtQygsLNXnZ1W5vhbWT9Z4fyjFLc72jH6HqVjwpJY4hArtnPdBAQ5JKviEEhasxALHxCm",
  "key24": "5WM8dRH6vQPrRCT8aGz8WWfJ72h2Axf64SEDAf3gZXKmqMJdLD2ZJxyJ9WyjzwJDK1KgzwsXfo1oSXs5BMf6ebTa",
  "key25": "36nPHGxHcrtHGBmYHMKJR3fi5MiB9uUgVbBWHWreGTHE4xauak5iL5Q9f3SMYo2MhZX54G8PgVVmdZVWMrY9qqeY",
  "key26": "bbhAFsH9NPozHd568uaKJpY6EtRP2eMysik1PGZEWZcFwGagzT6qQxHGjiebr8jxKLZw7jjK4kYp2KmUMB4Zhx5",
  "key27": "5D2vPCJSKoYZ41NKSiZSvsDbRwSHPL6EovDGYMPmqVmoWhsaz3Wry4XibjskZxqZRPtMYCMCvZyHvoEapLo1VA5t",
  "key28": "587AvK5SN1WNiNPCycJDuUhtDgYRrUVig1nUPAjy2W2KxXpydaCTaiRmFAaSCivSRDL1pSYYZhDS5YEzDT9e3mNN",
  "key29": "2BGAvTYBEjM6xD6xUu1LPE5S3R4rZrHWvr7b3txdnNJ792XtrYN71a4pa9Na2EQpb4zG9vct12MMZFwjqu2yobpL",
  "key30": "x8GQwhMS1eeNCnc6iSqc6xvSWXKrwupkcTCWjmZjDaPpjyNFkQKQBAqvon3JYLf8BQ8xBh7CNjij3wFrdvKEmSw",
  "key31": "8bGttB5N7SrGEYyUFDEqMu6X5r8gnVMMhxev5UxR7YXtFACU3bmLC5QBGfH5qvVCf9e5BVFSkNAoiTCRE39ynR8",
  "key32": "3aTLjmJenWK5c5DEwpZMkFNLaQ3z9ErzTeeTwhKiaCKP4JHSan2vMf33jcKxJKH42qSGQRqZFA6cwucWJb2YA1Rh",
  "key33": "3Nz4dY1WWCZvCEeoD1x2Ct7LucKSxdcfEzkriMUz6sBANqgYB7eRfuaqwqY7kxHh7S4e9hgjEu6TV2S86SpMyp9Y",
  "key34": "3R15Xsz69D6SZrohVaZMJLbHGtshoe2WXv53B5Ek7hPJbKV8S68xoqNj8hV5HqNjKvnrGEp8V83fUPHaRRGg9joC",
  "key35": "4oHJdQmiT58FsQscdJQvTJs82dJ6RbEEzF3CArkYwnPB8we65QyKmtU7RZ6fM659bUuVRuPvtNiV2PZxiBN3awLN",
  "key36": "5LmXjdKhHRGJoWPgdX1U8j2cV2nSpQeqhpuc5QjamYrCYsfaVxqEkuwP2qpctFsc3b6DGKggDSuA11bPEohgHvAL"
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
