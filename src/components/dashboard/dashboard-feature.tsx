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
    "3CQkxfzid3wss1jqquHkaFXgnwXtX6fwkKGnWfJnjcZ2pXNUwtw2hBtwgUiiEwHJHMKvBqbqi4HCUansc1oSn6C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46UCCHSvYqePKpdp9ESvqwPNhPo11wyJVsqRXgwhgih47CMBNDbRLCBvzGPphjrKQT1acgFdQakCtQdyhKbxxoEJ",
  "key1": "3murrxGowtwoWSsSUTxaCYhNCP86hLa3wGTtMTMtVMaNoVbXRn6kDyhwS23gM2heE7to7gcwK36UGxuQDJnbh4HA",
  "key2": "2x5obMGKuCS6ZQZzE3aEhCAavecTkM1Vyzrwkv3F3oqKH8pZzPBZjvypP3BsDKuQiubPyHXumbKkKCRrxk7CECMa",
  "key3": "4VJQ995CgXPMJCLVsiubk6xF6dfXM6JWJPGbdq6MCHkoveJsjByVDaoRzuUAJ5PrXppio4U3Sy8zq3AK3LtDFpgJ",
  "key4": "5MJiMA9rtZKBM5HxoKDtQnCDrdzfVTx9A4UWBpozW1EiAfCJJotps4C4q9tahaAm66id3hGge2uwicrbhYPhTCv8",
  "key5": "ahEv5JbeacZNSJKkuuLANwnFAZwRXqUP7Lm3aqrL5jXafiYNCcU1UvkRc8nU6PaNjKjx9f87MqpWtZwCzJEJjZp",
  "key6": "22krGpYyeGP42ahS5yrq9AewgwVWTcgv3ZHyxarZAhbqdiQkBhpAtvwmeFm92ZyzhphKvvgBELsqwTYoeXstER4d",
  "key7": "5zLxmbGS1C4n7Gm6tDxeEKtgNFyhgXp5ChGABmVF27G4WdCHRXKe6fhs2P9svyVDLrqPSZcYtVY2mZYnXtit2hn8",
  "key8": "594vWj5yjHbN4vD9EHXgispcrSeCsyVn2fQZFM8TuoLWvtb6Ai3MsdU6FGX1roRTwoGMGmCKjSmBNotoWZCp7P1D",
  "key9": "2v5zVs1j6go4YD6nZRGw3xPYuXyApfsSTjtPd5GevefBcw9ge8Lko9MynkEEyTfFLNr9mibKL1H9kJt1T7NBdn3U",
  "key10": "V4uQaoh5Zmpj6kGBj7Xd7NV9vwPWGA5zyMk6yarg3n44oGRc3tpXZZFGV58bP5CYmans4hrLmqckTV6mdMLr7L3",
  "key11": "2RUwbUXjzCycBv9E47HMYL4hb6Sn2aofDVAsPMTyqesUwDTxzrpc1af1zgSGKRL4sxqGUcEmcKzMqtptjoj9PSKE",
  "key12": "4JwrpYAjgFJqM3nYqdhakztJ7gfhRHwhKQ2hNBYzPsxMDB4NqXzeyy3cnhsUFDJbiAgruHbaokdZGyu6eTNP14bY",
  "key13": "RUCtaL9QsMRzPdC7k7C4feSbeB4EBNhCxmJ8HmZPdXnTLF9JJjvNWMhx9NCHQG3ukU9g263QwJwmLiwQQBYcsUP",
  "key14": "4YHVD63pUaLNT7TETAe1kg8sfVEQ5Tz9yW9GigDTQzCB785ubhZsi4HGNimzbetpdEnGjMvuw9c1caax7G8wP7AM",
  "key15": "XSAwhoxPyjx3mkDF1XscFVL1BpZi1qycyP3qFm9qGE2K9eWjixrvknGK4ub81PeyhomxjX7xndiBdeccoKbxAEd",
  "key16": "gaW3zyPXC724CqvhpJkHDa73aTtmw9TWptC7HqEemPopG2UMLcaHtET8E6eLKYCa1gg2mfv2HJAH5gNGUC4RXx5",
  "key17": "4u7ys1j16dfg19yBRqkthBk1JV7pGw4mWRskwZhsZL7z5kVg4JBnvbXy5wke1euVVM618iJYQPC1jYCDifsGyyFo",
  "key18": "31i2kXtuuUBkpBeL7B1QH6QGtwA8KFdA9UbnQDyLiyRG29DibcbMh3FsB65yPKeKbgCAfzUwuMzSYoVDMtSiP2bz",
  "key19": "4WNH2DAJRs4abobjNxMKq7DcPMbZ2PP9ZHBJimbhWC6C7fd2DM9WUcHhdpEzqBq4QjEj7PWydAHPJqnrCED6anAv",
  "key20": "2JMfNoWfrDogF7oDMxYxDMaGhpSzerHFCKeKUyGM3uREdHztcv5mytKdqHVj4nhm7743gpSybZPBgtMUNZQybG1Z",
  "key21": "5A5Va37iNtZA1cB3kbZ6u9dk8GYJPUpD7DaWaKdBcvYPhQ1beSd4sNSomQ44szEA7ttBXUYFX4PtXtvz3ByDEgor",
  "key22": "4HCHovfb52KneUbXNSnoANYGsmTysaD955AvYHMZ8hxd1EQ16gckQHmA9S2UUPXKRqUh961LA8fKQWLwhubHn1XC",
  "key23": "34e7dNdkvpm5tmwqDxpWkipCtBxJSdiHNVYJtyhSWbyheqJLehESJPUigtKmCeQhFeWkEwkiii88t1WMjiAAqjgW",
  "key24": "4p5NQH3trProx1iLXwJiyzRcDG4Lm3LqNYqW6j7XvUekk2gocGTJ21HXShrvLJH5a1NWrjan7E2NFdBJgQyndbwA",
  "key25": "4VgW6ML2FvVnyHcyBPvygHz2dLUQtnpJ39HR8Vd43UVjwwrQNxogrn1AZ2DuHRR56LmGeEnDnwvBbEdVymsFrMig",
  "key26": "5QPGobpZkW2x8u1YJ8gWifeBkgXzYbXmgqinZKe46McpRtAsmq1uTtmv2ac8Lc9hjE7qixUSrBBz76v812gD8yt6",
  "key27": "4rFV7EhhKErACtyLUyiVfJMG84yiqJSdfGqebNxMrNT4nMQA5kGFXL7kHqDmzJRCneC55Jo3djxn25N9qjvWJq65",
  "key28": "2gXspBmMZAVvuKX2YtSSPdexj4ErzDpZFLhzG588TPqa88H5fJFyNbApWjMFSNTjXVMwH6RdxQFvL4KzP4CGDRHS",
  "key29": "3WtFHHQYxN88pia8Gootrf5giMZ5NPR2apF3nL9eG6F56PCqJKyYhQksjAy1oYHSyMj5ShVZjPqdQu2swc6zn1cW",
  "key30": "59h99LfcXRbr7Xy6m8FSqAeUuA5zqEXQh3AmbP18ESRgXCcL3HvVwdCSpckBqRjYewqJhDG3cmyyV9ZkKjxNbWYq",
  "key31": "2byxMkmtuuCjvNzeEoenR7tFf51fCXBTkgZbJxqvYBWcvLDLsKggNz3SDejVyGT2PRLoESaH3fpqvgyHq37rvcHE",
  "key32": "4EjqQsgkSzpxq9TvM8GUGfieiCL6C7RUpnbPXRbvb8k1DMX9JM5qSVydAXG6Zxegz5eLWHkDwWBjTKhNwMjtrFR3",
  "key33": "64sdLktyneLLQtHiZDY4j53Hzo77bHjMGRUiNHN2iMMrJgYFkQH7XKqnbpkxJjyhoJTNALRyLbNhLuv7W2wTP1ZK",
  "key34": "5UBiZa7zXyFCwUTTAth1mfmbtJnnfDh2XMLg6Zpz7t4KJThh94PQE9y4stgDqEhQU4UJFJa9DSUikfHRpRCth9AM",
  "key35": "gWSSyitYpQ3KB4A6QTVxsLfDy9PjRb3xKGF6AzrdeCaSHdCmADwWTDmwdqv8bBmfbyWaYkwAc1frgiGiX4bsUMT"
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
