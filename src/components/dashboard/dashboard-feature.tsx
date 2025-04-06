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
    "4DKC41RrcMgiEoiqHJyAsWh3zyUjr7NowqPuWJ9bTFSY2DrSb74FGQFYXQH1JmuwaKBz94UebexmaQniYLr2r9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NViR3kyEB4fZ1tmEoms1UwBECeVis8CLv9VsAWCUgHxh7pLTE2TPEwVqzwXqsS6VLZ1bVPLrAefzot8KxZPdexq",
  "key1": "416K4JxaTMwhM3aTUnBHGASKYCqzCemS5XxLeAGhoCshoEbqqYoq3Ei6jXXNeZxTxnAJsUeZUQECzzeEgVxbqkTQ",
  "key2": "2rr5rEedUgTgzQj3rUCwEevEoK3LAwVkwmaXtriVGfg5gyVffbpm3MZUdWYgYdx5oYUwNnf8oiT1eLt1QcXHoNkV",
  "key3": "4LqB4kdiR8B8Q8qr9Q2ePjha4jsBVXBBvidFvzaxpgqStQHFBCwF35gBkgGgBuoLWvWnR3V6zGru2X5zGVm6Rscj",
  "key4": "2kRbkaiiB98eJbT5sbi1FNesQBziEReVt28AkBxr4o39P4VGqeaT2MXpgN9fzjznYsY37Ho91bqbdYcunaU3ncvN",
  "key5": "56NLXaYayFuJidn1jA9PvrNPHtkFLrzvgBhTuFxedgC4RqVBjgt4RBD8ZgmxDGvhfLQC46JHdsCSv42cdq1ddWJG",
  "key6": "2Nu3e7QmadrAtWwnTrTCGUfstwppZkeqpDcYwkp5JS8BpgdMrf8rkV7dk9YBym6qmRYi5obEF1Hu5i3h8hbe5raC",
  "key7": "5haMoN44Wh6rv4fG7RJjjfEbK1KyrJ1HG17HZoqd5vcLjXEUe1wd9HJg268kxUgtsARZpDeNnksC5pPb8a49Xd6y",
  "key8": "2uqK7dkQV1xUdYQSEHFfr8Pabk5xhx8x4ji3mjnfknMGHWFp7rrGDUru9TAKxb7FuEKjo4u3yt9BHUcekhYH7w9L",
  "key9": "HFTu3V4ZXsSA8JVX7WmkyE1QEadSDnsMcTSeWQWtfXLa4JHTiEWUrKQ2nQpvjZ97bisxgiWbNKEquhwGZRkedXA",
  "key10": "YNAr7QLLrjJy59nRYdeK7hz7VPdyQQXUkBvwrGp8o7zGcfj8tKENPvu9QAJVnE6gaULQvoHADoNWbdbeGEKiRg8",
  "key11": "WZ8NbfNqe33bBndhuHAp79PJymnhaaEArAdSZuVRMDfNj2sGxee8kjsZdm3DCHSt9wuzEPHT4gmVesmMUZuhyLd",
  "key12": "4HdMmSUFVNY7dsbmBbfG1W8qYxvt9sumtthfcF7oEsg4WeCzQPekTJVbsFYe8tFKmrdKaVraPMgD1iSxBdNZaHKv",
  "key13": "5bXw7a3FWudLziy7tAPfYuYnC2yKzwnLSGipZyhxpywjLJvPc9Wh2oFCqtMAY1QsH2zUdvJqPPGkDNneJwwku63y",
  "key14": "4kRBHbqhnsbZjK6rxQ9173Z7FgKRAEjKsoNSjCw1Atd5iX1XgexqtUVhSpA9noAL7KvX7M1ZHQFUiuXUAbRUK8QD",
  "key15": "HuvHq24vddBDVzkPk9WL5P69fdATwCcE29VBwkMNFnwyXNtLEx3CTYwzMdKmaJXQJb8pZnfgE4tneF21Vas9yiJ",
  "key16": "3d5CPjXxM1M8222zZ8uZG4LTUwStNbegjKbQaRzP8zapzRTQ8tXz8HkXLqQKVrjtsBinm1rpwQgXzgJQ51UPCHp2",
  "key17": "2C3CKNKbU69QiQLdVj54MiUHSVDQzyfe8aFukVzsCx2EfTRY7MxLzfsTc9KekoFpjBeVDKnQVZYTRJetujWJYNkq",
  "key18": "5GJT4W7ZQUF3kJsPK4sCT7THvgWhcguWrYGbuHNUGWPgDvBRcCP16BYiC2FDie5wmsacxGaKj67BxeYmqQzyfgZW",
  "key19": "2wUwJcsmN1HD781p29rDfvjw9CVPeDLtgk1BrLdDmFXhLsMN93v82SBbAwRq9f9H86oFqVh4MaJoWu7Un9KWtBsr",
  "key20": "2DkwMqv5UkHDJC79ae44dWWxWPyBDJUaQWCWuykqoYztmVTf2Jd7LXeYMNZpQwYrKRX9KoxZ1Ffv5HizkYaKx6jx",
  "key21": "4rhQquuDEf2wCsSgoeeCiqi1tG5W3sdkUmRZ5fa3KDxK6nGgf7erbyxxsQ42Eq9eZvH69qdy6kRdKKKcpVpoUPLw",
  "key22": "2SPyMP5jnWSBQaUbcsTGFTRRRyr5NoBJEtTJLrTfPukDNffqvJ5ST6qwnRTuMmSh67RsCsPPmgSkzH91ZmHuqa5Z",
  "key23": "4DTFbvPRGouGDSHbLZ35bhoYwxasJmrR4d8bafjmTZVBUrnyUpSaHDZQDE9fG14CRHVt5hhbUqp9SqrR77DMUZ5U",
  "key24": "3EJshTRo8QEPXuDCtDzp8KNNXzi1EppkxijhguvvZbNVZZ8ymseH1gUkRGUzx4MfxjwJwTQQP7aTzoEDsRSyvgx8",
  "key25": "5wf1cQqNUswbb3dmGw6P8PYG9frAGNYwbvbUcQPHhehcHRezZgan36zwWF4RfLJ7DMtzq4FG6CJSu2bpdgV57bh6",
  "key26": "3GLXBtCw7fprh7NH4ybyU16ZzBYLXL8egf1EVDhxoFgExKzgEkC7RMMVKVS4k3JYujPcHbzcUz7xUm7U1MSatDKU",
  "key27": "2fzD5jmtpvJ3fqXb19f1pSHuH3NKpLGNDiTfiFAEzSjKngP4XWgW3mvVUozjRMAXQnxhonBDbEjdrRymDg2y8Ti5",
  "key28": "ijEg1WgzFmrDTSkyk2Jpe4KofPgnqsC8GAedXcrLc1nvVqw7SSS5mMbTY994APDJPhu9Y7skcTmEQzwGFXcUQzM",
  "key29": "6kU28TcjucooC6zKxDumbDvzMFTbXTcfCpViKjW8feL7JfdghSGrMHaUrBToJTZCQummZysYsMJNMMvtfC8mbcY",
  "key30": "24RRvChHcTpyaVuBfW8z88R9C2Va7yKCVaaNDLgEaArow4pjbERZ4T6o7jPmeZiacNs6vjK9HKCDntetoSnjoyfQ",
  "key31": "5PGTnkffC6yyHCg2GKZGrSwE64aE4irpzyNKmzqEVfpZo8VF61wiTbXNhPTggkQeMUvvsyvRWFfUjE4684jDyjCm",
  "key32": "4d6FTz4Ef2tP9mBMCnjNaNKQmfNHSPyNW1sT6wq5XSq76UWeUk7DXjuxa1sbfKrZaBZbfAKPjPMSqGz3gMUo7YTt",
  "key33": "61bMpAKKYmsFUqz5nnodGfX3XG4mfxkr12LBb48VFwdmnBhSwq4yQ2ub5jWzYTuiJcAXDiXNVbYETwAao4DZMrD2",
  "key34": "3TN1ZoLATigYPZNeH2KoaiDU5NBd11a3eX2p3zhZAaoQ6mM35cfyFA9MyzGmxpYn7EEfpCvW9uLckgYbcnPqfboH",
  "key35": "4XRYgecX2xwLWno2bb7f42nJzYMHy35o4CEPGJSGtfnNgfPh89ijaN67kib6HWWkPfCyQyZXpQTchTzPnwcGr1jv",
  "key36": "3nN52W94m8G8uBoG5j8ePzu9mcZtBgtnTbheAkeH4VLzXtZbAUuyC7ag8omys4Cp9JxffKzEbR41qgBdChYHJxyy",
  "key37": "W1Dt1CmpjhMbDr8S7xX7nMpPHgNuEMs29ac9jNQUx9Fbs7GV8nmkpBbuEAZ5hxge6sRCaXSzDpJ9VfteUjPTdJ9",
  "key38": "5CZ1YjMJHEq3fu5vqrWUck4k7xcXMfSyzeKJQMtAFDDrhL5cdnGJDmcXbtJkKT8RDPx5fiVUduMFJQvv2PaHvvRz",
  "key39": "4WVGiYUj9TtbXbd5DLvVffneR9tyAUVC38jxpXctGnMGHMD32NXPVSAzL7TU8Mp97WLLaH4CcaGFaZpAiJP7p7rS",
  "key40": "4k9MpiE7UzmcDqf9pjD42Qh25f8PEMyW24cUDYXvPQxzectMx2ULcg3Eg9WDnWuYrcYHiHXEh6LvgCbuEQe5joGZ"
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
