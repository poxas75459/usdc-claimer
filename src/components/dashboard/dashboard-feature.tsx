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
    "z5zBPaZq3zicrCys2u9zTzSDRW769tcQSHYaNUDUBnRzCeWb1CdAmp6MbPtCYCFt5FaW6K8ZRbptcJ44F7UgjCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45GbXBuJuHmUFda44ALdKSyq5xTDNohTP73uMmBVAy73aHdV5VZczt7svv3E1XxhqpAdoskz5v1iWBvtmtojB1y8",
  "key1": "5wnj5oa15QVPuoeDc1ncTyFW4uHuZwrYXsQue7pc3KwWWyBPVmjPWxmJf5vhyTTLe35jgurMWqwEa9GN88RM8H3X",
  "key2": "2342juwu8UiB7GUTLVWap2J9yUsCCZFfoeP647JSbGUvsiqavaWybRny8FgbiTVt28DtbSruFFNf7xgGXADto9M2",
  "key3": "2VF2f81bF4ucUqE6XsmxAu3fDBbCW32m4bnTSjGsBQzPvyJpaSD9U359ZcdiXaYLhKKSejGJnyjHAE6QzWWSw3yB",
  "key4": "3HiHRLMFxpsWQY3Vnitd338w31GsosJ6iYjkcntSmeLYKqY8bnsU4Rtvmjb5dK7HP5tqf4Rp1m3UYadFMTerj2oG",
  "key5": "vXQfh6texWctYg8DcXCVWVu4T5nJuUphn41aZDd2JW1TjdChihDihEFFkpo21Vp2daEWmtqRjUMbUtwteE43h1F",
  "key6": "64ExuDRA3ytcoHvRPEmNPHSt6fWcsQxYdgUTrNQaea1Jw7KEnBSFaSFMxoo5muB7iiEq6mv1k5RzrAq2dJQm3je1",
  "key7": "5bJntCi7bLG2C66zvwQYVi79tXmNzHNkWakMzuQ9UveQAVVbHq9HEhzpm7fgKhEwK28ef9kid5DYjBc34iH21cxe",
  "key8": "4X6PY8tT3jDrRg4SZVMAV9vcrYrxMd7cS9D7TzW7JoXERZggYSpynTUAaiodCiwM6c9oo57S9n4YGL7X4SAPRqKH",
  "key9": "4Pf1DbTMnDNTWskq7VPoDHGZfpdWnUo8wgSV8aB4bt1CGGLTZEEJYZNSda3ef1PoYaPvKTAseF33RoDAEnJ8g5ET",
  "key10": "4SQ5c1d917x8nN8FyYu175R8gZyKYnieLekwG1jjVG7xE4q4rjmgS2U6batMBBDTNk3sJ4MvDeLAwsN8z4NnYfta",
  "key11": "4ZzRQiwEcupRg4D2hSd6jQmD4fkGTeGsiWRjY4NvdH7Kr7Brhr7dYm7Q2SvKs1AT5ihk2VAY7zytGtZQNGUdUhJY",
  "key12": "562tjWGQoSE9yqrEy9zzRMeXTybDkFGM8g6XNviogGQwoL4jBPN5y7AypoxFFjbSgCMtzRUbkhsrT1Fis3P6FNgd",
  "key13": "4RWA5Z4XXd6UEbY9rg6eMbeLgyQyXXgXNVvE9UZULcxKqwe8eS8MsH9ZpoiPmPS2Pdk4n37JaLe9wbsP4EgoExw7",
  "key14": "4Lw8PiKKFUnfxZb12S2csTWL3hVWeAs1ZXB2GRPwyq6wyQz3p3VPfJwVxM8A4CVvwmDunygNX4pK5q9pkV2m6vTP",
  "key15": "3t39h73aj7doPkaesZKE3vvzPp3eihXt4n7PJ3JHdqSHW7XpYdNjqUj7muxc5qo71y2WjZDtg6eyV6yiHbbs4Gys",
  "key16": "zp8k2Rrtpm44J3raQbUmQSvoMVVDFzvEYrTG1wwdQoq2fx4jHVuk2wGz3KBS1ybJRj7c6rnhfcEnBwk3kGNLW3p",
  "key17": "5wAY4YzSHLBskz8bsApMAHwHYKmypyEoWVD4AErkgdjoRGKjdH8ErjRMJ3pfRr414KNic9Yns21XQ6cjEN5qSi4j",
  "key18": "34sugzx7W48xtGShN3nf84LNsp3FRfSjdJvBkDWeAaziZt4BLCppaTSnHVbuBSwMvRXApe9D6TEZFayJj2pWrtmk",
  "key19": "4nGjyvrdZ9dW3Es2RkJ63aFWuVfrL84atPApBKiRDA2VMUXpCJMZtq1YJUxQKocvQCydSFW2iK12UXRpLtLkUXAS",
  "key20": "2RMZkQ7QHswQBVU9TexyK2CYzjVShN8TVEnFsBBTwRCZU9sp5hU5MReGUh6cPQwkNBYoSFa4VNXaqNG3ozS9aGci",
  "key21": "9rUTtnRcF1HVieqGwrSB4xLpPigMHrCtC4SkVe1RZHqanShkkRUAPHafDdZzNjTPFuxPyB7NoV4jcxhJNVgLmAY",
  "key22": "3buFrzA88yhSyCT7vzcvEZSfsZmiTKwLY1vqkP58dqpmKFGHj7qjrNzvYS3bgusMauxdXG4u7qJWBBENFqKngFkp",
  "key23": "3UCkZNYcvCCYNovPCEmWEY7UBixvgAX7EjuA8SwWbNhjzGZtsyKXMkiDYzsd7V9ucG2rWk7X7GLdvUX1C5d8nk6w",
  "key24": "4LZBFDo4xrAb4RpBD9fCiT9VoA2PdBbh5e9KbYU4ASv8oL9vd1pXGjwsefcBnHKCgCzsQAQ2pRsFAbe5EDn7Mnjf",
  "key25": "3t4kubD1T15TWeXaTFyG3fH1Ec2dhkzpekXu3ZA1qT5DiwyhYkNRicP421D6sY8qZ7ZUP49gsPstwjGRRh2tgrqs",
  "key26": "5yncTV6xqw1WAuTryNXLhKVgDKgAk9ECA1YFVayQv7QEUZYKNx1RNqp9y7jXE26XPkaPY4Hik5FZo7S9FPWuV49s",
  "key27": "2XXrKPpzse1sWxizQ6swbVWqpwdYfGvyvZ86Hay3BHpgKHHWDGZnB5Q9TMWauR6mYB3ULjWcepVWvAZpPfTPPLbN",
  "key28": "2ThsKgdkTTnyqr3oaXf3h6cRe7zqwnm7dhWk6GdARbsGRGKNwUKJnxvVUUVoF2zUmBJmn28SF6WYVXLBHk51VE6C",
  "key29": "2azAGyxUMuCsEEDSozB3nRHCaNmQ211VsNCDjn2c1WnXfHjSH3MN9AV8sFfk6DtV1iE7voW5o7P3N8t1ZGFbgm9e",
  "key30": "4KjcvJaReFK8oxdFUbqEossg6qQ7Zf2GqwCh4oygpjY3CpAb7S6hsUCit6DhprSvnR6YcB3jyptNjRBhoE2PHSva",
  "key31": "24ifV8hd8W2e7VUHipvjYemZGMqWjzNzZdtrcUeQqWfTyd4SqoeikUxGtdwwyQVUhBUTvrp76gqAWHufeRS5u7s3",
  "key32": "2HfUfssSLMPEjoD1JZPnu9niAEof7nqnv2ieo2FAYxQa91tnrWVLSsdAFZaQoopukZ2f9BQ5kCzBkz4L6z9pnorj",
  "key33": "jbjaiiSAQqs7Yty5kLXe58wMqg9orx9PuKBwYME36uxSE4NXpanuzuZ8kEUN8kDNh8xjoRSS56EN5QMDBaGmhq3",
  "key34": "2ebZ3ER35qdmvFsVvoaLcUhjyS5oXXcRr4kCM5G2tQMon1ejQoox4bnYKxHhqcJ9Jf376LgwDyARFUvqRqspKbjk"
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
