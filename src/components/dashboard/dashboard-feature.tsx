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
    "3tVRYgrqcAYsaUZMEK2iM7HNwhY3QYsNVdJMWZ87uRM5d5mECz8iu6D2Dsjv62vNWLJVWnnfH75yMnzN2kRZLvht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VjVAgTeU7Upr4YMaGVbcvat4jipjd84PLfZiZS2mGFPRgAeNUPmjGyaRhE44geDrCLePxxA1hWweWVRNU2g2LCW",
  "key1": "5LaYBqFpfP7hePuTZWePUxTJXphqZ42hGdDFJFKitcDvUgWMvE3ryiNbHu2TUF2VVpqDC1p8jNTTsHT3nu78ywsh",
  "key2": "33dDzXDhW2rSKJGtMX5sw7QEhEbaE7eVbpFY4mr3YFhUY651ihpiCUD3EQfm2J4vx4LQZPxWrnyxZxLdLFyZtRUh",
  "key3": "2GBhU8N2xfPUPhkZug7Y5iG6u8GACzPm6JDfoCXtRHDf29DfRpTQpeG8MWUmtNrSABwg9kWrsUGitBxtfMUZmDWN",
  "key4": "2eToQbqvq41s6EaWYFG3e6A2mLd2AsjSUBhAA1kEyw2gkStBSe4wiwotPf5nJVPCUyMGcxi9KJYgsPTepxikjmWG",
  "key5": "dw21MqQKAMD6HJ3SZkjEp5UKMPjQBvE82gg1WTkcbgSfQs7sijJqgk4122E6zc8rRF19aZkq8Q9uMs4JDhs5rrr",
  "key6": "4KPs68tvbWa9PvKiKCEDMVYxjTo64P7JgkdkMxEesX6Bro55r6wVszcb6LHMBzJsVwuvXjb2Ma1A7bqZtMVuvhLk",
  "key7": "5L6PT6vH2kUMf4HqnqLQkhPzTy4uCo2FPWS7k8qfWAGjsvBbuRffz2KSbYuwLr7zCT5rmJzTTUAkpz3b7bRy1kJZ",
  "key8": "4MG84WWyFg22J3gXAa3GTNiv3H2xG3arGbaRKwArJ6Bh6uWumkuRowQ6eZPkmk9Qg4Z4SqsyFf7cAjHf5tHZSnpi",
  "key9": "5hhmeMt6mpoWj2h65XdT4zYhCP9vFk1FGF29GJT8Xaqe5wrQ62kb5dRGqy87hRVGRevbzc7X68jZhojdmJunritN",
  "key10": "5gxhVeQuY9VzuKBFURWZR7F6H2YUZ113juUEaHm9PWYjxqJvkTiTSK3WQibbkKFhYMwPNW2oP5MeBrKXPDXodfvx",
  "key11": "e2hoJ4cjsTHei7op1vidNU6PM9CK6TysZd6a368nu6we7ZM6y3yZydNN5ZzBRxBeHDjRdW2jce7NMCc128bBdVm",
  "key12": "5aQEVK3AradTw1RyguxRGFoYHiz2hiNUve2aYrzjun6xcwnL4dDAYD7TTC4LWPhSnuuiM48ZxrnnWPffFYpuzNj7",
  "key13": "4pKVZrtfJ7E9yCKhkFMhRT9r8987qrzQ6NNhPJicJ7UPHrPNf5hvhEhkZTCXUhiSeHxjYXfJuMMdprs5ucYhaTvJ",
  "key14": "65DoTzRA6vAMdHHUhaTcuFRNpRZeby5yRap4XWD64RM4BuojFrzBJMcYgN5F6nDnvAg7TBrXYU6HxxYxVZFVsGB9",
  "key15": "1CuuqfS3V3cc6KRSR6QKSugb9snQTVwe3pzqcYb7cHbtmvXsiPX4ZVs1mUxzuQJm1jjRQB1i4ZVwsefn7sswpxL",
  "key16": "3JLe4chjSX1fwuppYW9MFStfa3ffWRuQh1dRoQCJrMEQYrVdo1HZ2GKseATvFzsfNnJinmin7wyuKyCUzsNZ1cQg",
  "key17": "2HYdpzvfb2U5XdBAi3xrWPojH2KLUvG5ja5QbrXK6Y3rsMduqvwcEH9t7PyzbzEyXPJsxKbCnXrg5r7iVqh93e1A",
  "key18": "2fwojDiiKZ4SJ6HiPiLAXu4Q1LsMqidpG86oJaHSquHRMJeHXz8xe82ikH3ptuJVnwKH6GghnLk51vjScLB6pUei",
  "key19": "XhS4VGsLjdndzgzShbmSyLWteYXkXfHXZwNYnzD3tf1ARwdKVpd4DcGXWYyagH1UyMEr4m5oYSopfkB8mQKmAdp",
  "key20": "429NP7uZoD7Mn9P8r6AXtYvvgaKoAupoW54bANoSBnUY7HCWZvAyXQRhRBgAc4XsYaUbpoSPgH52zLSZnifczmjS",
  "key21": "LDF7paQEdrHFLELAPxSzcCQgteNSBHYpFHQkhEehPgAgi8edKtVzHybpnRvH68hBexxShrSpJeASWNeuNRLXVHc",
  "key22": "3Bh8d8JNaushD8syPDwPhb1XmPvjspdUsGWZZMc2T28zrR6UGkvCfEQ87TJN6DUtYbsE4JxeXpkMASs63s4o9K8f",
  "key23": "BG9NA3NHFQe6vep1FUhTWiEDTcKz3J6kavx7EuFKaidjBH1KKdvuLiZRhNMXqzJ8EJ5rEn52KZymksYWMvoxj1E",
  "key24": "4BtY2fGUDfSqr26S5v9dCUvdDpUJRkX2Eo7THtCMvLdZyC1Qk1bskARrrNHurytubcMPVCrd74Qbn5tX24SZM78m",
  "key25": "3RssSC4YSezyjJ9YJBVXNfp8jn9jjE5c8zbDXUJrRfCgnyUpHUeyF38Kia7YAYNkXXRiCQxMQag46aHf3iGL3pRb",
  "key26": "omqftvhz8i6gMw7Zmjox5JCeT796tdCTME1Hvd8XurLBeXQLRfpwYbBFxS87jJHTqtZCCBcXvX8XSJhSYwfcEUo",
  "key27": "3u4b5s9wheb9fBgmjM9X4rENvRYPE5N8JzFy62YXtRSgmqnrb4JgmJ9XqduJHWjWtgD9sCGpzMu463M7HGPvoHAq",
  "key28": "2kg7HmGUZmqKtjuSam8BpSCvq6JHBk85xuhMJZ7g51LBSTYfetCpDzDB1wMrQf6Cw8uGdtdEZzW7z7jaUwNdgSZU",
  "key29": "4evKeKrPwFivof7JUwixfHLY1xsLaKxwi1BHV8qHepNC1tf6hWr8pYGxW4CKBEtAQsyFtEfode6HLpg1XgcK2LB5",
  "key30": "4fc8TovpM6BG3KxEgSG4gEHmi6ngEanq5yPb3rh487JS5PhZRCaKLfpA3Qbe4RsYFswz4seQAj1z8DTnSsVM9i4x",
  "key31": "5BmCPoNtUsC5PZuZt6WzojEKDG8JuxSnGy1b5YSqmQWKgYarNBvALE2Z6sAojzT16nPPnBq3SxyU4FTW19Ch6gkm",
  "key32": "34sHRdMHRw7cdcekQ2qrXTyARFhErw3FSga6bZ6mfcuqAPKQRrouC1BbTVB8fx3jdF5GGkbyuhFY7MeV1VCQA9P1",
  "key33": "61NRbtiT6J7NiRw8u2Wc8xNSGBMXLA8rM8Mk7xit3YueQU4QhDY5L4opdT9vheb7zRAZNHZrWETqCferuyuBMcXU",
  "key34": "2Xjw8Lzs3nHVpEL7NzN8RufBtEXk7vzVzyqTSAmENsjCtTDGpVSphoUPFy2uwkrgoTM2YWws6zm3VNYKuNHy4WsD",
  "key35": "PuETLB7jH9kTXdJfeCD76SAscs1aFmaLRUoCPbUrtWi1gyCXbq3eFp6b1sQELnaPSrVus791gvvMgHZBesrD8df",
  "key36": "5F8w1uEfJtaQDMEq1DC9i3KR3XoMA87ptkrULuowywZLLxhWbSufBr5R3yKD6gXNtqSwpQQqHwozZnx5TovN8Zg7",
  "key37": "5iWEhunJWWAAXUG3wyjqkXCmw8qt9PdedGSDChJaD8mv7QjvYr54T5VRmSvp5ovMvUJrje6twJb233Mm2i2LvtXi",
  "key38": "2yihpihket2r6C12KvGH4LtrnPAC2YGALCopQsNE8vkoVc4VcLbskmKB8sWdxEjY2W7RMfYejsBe69a4DknQxmQw",
  "key39": "on47eiMmB9o5SGAWsE2MFqY66MPUaqVkR5QHfVoVq2anLuC4PeVDhnGpV8fxZoHniNe8t9APwLKtY73dmLWjbcx",
  "key40": "5SQ3ZN52g7sAgZxQGBb6qUyGSSjDHdY1AkYSH671y2k683LWsBnZkT9HdUALRUJcZQwCkFBbWh8dQXFuUkbXk6EC",
  "key41": "3qn4Gc6Q7SrK9rfnjcgAM2PB6pmMANzwmFiTktXVHnDr66TRjLxBx94vumqDyYsv91ZRqVBn9R9e9sDRbSa8xey",
  "key42": "5Db3gETi7nvwCJ9KTVaQdPHarRXuMgZAdeqer9yBgdEmpL8CtZHtRCW1zH93W8YjUZNBdS5JRn6U8WANKjG3xKAM",
  "key43": "4xmRne76y55mjRQdqjTybPaVzpyyDGSRGCa48kBF2vVxb4hbR73kJPpi55kC47YWWvaSKNshGk5Taqa52tCFS8pB"
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
