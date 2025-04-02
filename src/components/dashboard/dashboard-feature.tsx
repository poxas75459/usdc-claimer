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
    "5rZLUF48BYwBAd1BgSuWEiJZrQDz4MBZd186JGy9WWpLkzzwu7xfNZU3DCTAzpdDmAv5xQWk9AjCaUrkw82EZ7qb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UtDfLEhxHR8zjnf2jDiU5mjqFcxh694mnxwoTcR6JkW7qQHW1i4buKwTqUYGMcx5bVtTZzDMf1pDyaUWQkm9wFo",
  "key1": "4kXQSY4V4PjVDzs8ZTWSTpmigsQ7SonfewMw4ZEg9QAmTd7c23WKrjKyd4iFqNGr12EkEXqHsDWrWxuEhYrJ89iT",
  "key2": "4yMFNTPPnV35rgV8M8BbynP6uAVNevbSsqjyzDV9tULPTYGCEjEnkqauoLTMPUYcKykwbcHjKEhYxCcbZt3cpsLE",
  "key3": "2zbTBLjEp1vtHQxu5so3cN5XdkWQwMswJarv5ptAoTWxjNbsLZATvC9cnDa2Rf9nngPwZ9EAMPZhTz4tC949WXYx",
  "key4": "61rBzVY918SFK1TZ8HsgQrhYf2KXEq31Cparc6KKLM6AzGkyaBAfL29FrvwWrqAbs6BijgFUoXTsh7sMTypF69Yy",
  "key5": "56Jocbp6dsH3PKnaD7cQapTN2Y74mDFr8R89rn7XKc1EB2NAEfMkTd4MTkQwJ4xruKehbyS4KhjwTBpKyr8NM1a1",
  "key6": "dEFETXnGF6z4yUoS4qwiALBqgppZJMUkC8E3vaeJKv4UesyHKwULxDp4tNCu9nQYAWaTTbG2L863hfQnRK5Nobi",
  "key7": "4YMZPmqr3g9ciKDqyQxFsE6UPYVXqA8cvq7FE3pjjjU7Qb8dAKqpKGjJdboh6QbaEe9zy71uAZQ8MZsibreKmc1",
  "key8": "5xdbk3h2xHnMXsHagmHTGcT2FQAD6ndrHNp215fdAZ8aGWKmdMwPwyFkmDe7ay4HyLXaA5TSnqvcrvQXETeLiFUf",
  "key9": "5gBiYKqJF7EfciNiNsEAFFb5Rdfhd6Xza4aoNHn3thciMwpkG1yaGG523E53BM1BBQoZbdcMVQdNAqYk2HgihoEK",
  "key10": "23TMWofuUiCTm3BmNyFmjuvtSLTNe9hYhNPhY6H5neW2jGNuFR8MR8G3QgoZTPtsaJoSZA1UFmpnuYdTz9abeD6R",
  "key11": "4s7VZWKadqPxMuMRKiC159pE9uKmuUtGZVgjbsSjbKGXhMsFMTtiFhZwqvwfoN3LFXYw1dHP9MGrWZujrmctHjw6",
  "key12": "5DsHp8FvSAe3HQMXKuno4CBkUGpHmaTwvH6rMmfgw3Y7NkC1x3gx9PPNSRAGM1X6eipipEEc4bCHykgqfeK7B4bz",
  "key13": "4zQzvMdzKPBdoY3mZfbXVEYe6gALAYCz7F9FifHQdDhPmZ3JN4J1wHN6MUmmZEdaHPEvcTFFumEyoGjznmAuDNiL",
  "key14": "4xjXNt3bq36d1SNVX59AUD8EFwEY3XDBTLZX2AXqc5RJmDZUq2hYrRWNBmtc9F23Wz5w1gg5ZkfEdsJ83GVnynre",
  "key15": "Ggg4QLwx2z7x87bjNi2ehe2QqNqjSPxXpkzPTPfPkPs9fPyMZidzhcyKNiZMmxK38e9FY6AVP88w5ExeiyVhRvH",
  "key16": "EoZKrdgdG84YCePZjEcVFM5zAAEzZ2qvhtvJYuVE9k35PXDSNX3PhgEzJuYZ5viQDpNz1Mubw8ND8TBJ35fx7L6",
  "key17": "shksiwFgrT7qTj7R193qEFtwdpgAwaBrgi2TzD1wNg3eW7RHiQsKqaRBjozadLXVD4NirVZ27QZzWM71314B3rt",
  "key18": "VyT1Ra1M1v8QD1ZCTHCVureihpRRrh4SR2NnGfPfJUS24yxyoTNePr6eP9iuNqTnDYzUGthzNHvjQKnrcMrEtVL",
  "key19": "5L9Xbv7paFP2pMc9tDerDxYsRchkvoBrG8NxiXhzWw7yT1VEG3eYEREg8Q3vGxZuu3PcyukvYHEkysetdsGmCnjt",
  "key20": "c5Ua5tVUQEz5BJ83aYiMdjHMeKSg5DYwvRuvprQo2c24iCpBrPEcqTVjhfEm2N8epoLRpqTUyPGdtDhigWdmpea",
  "key21": "21iXFFARhR2BovGdiMzhErrGoKtgxFXhBcM3Y8HvXtSZczBZCSuPs8Hevz1YCmdk3uxDGufSsu1XWQEDBFxwgxcN",
  "key22": "3afSY3Kkn6c7N3r4LWDVSR2dZkADXoo11Rn9Y63a3tAAw6j7e9ytAMJju1XJaUfn7tJpJk4Z4hPmkhW9aiSnPWcz",
  "key23": "4Nm7AWWZEERVoHrbCVGy4dw4SF3g2wdDkVCLJ9Wea8rAUCzHJ31xF2nvT8xVVf6TdS3dJuhLc3iKQx521MSC6BMz",
  "key24": "4uELcHHwGhfVeH11TgefE7eier1NyBS3NtjT45vERgrN7NJrFZGv3wBjzkej7kBcbMkcz91hSz2KtyeGryru8DRC",
  "key25": "5pzLKCTEYPfdRmYur1FuUAr7UiD89cUeq8qFXhkMJy9WK1MYRQHJqGFqAzG1Kr2HzTqCDbwxeC8d6eXPkWzzE1Pn",
  "key26": "3CbrGw3qB6iNXBnrpwGxaEc6ZuqA6RyrokgsEFpShgY3BUcov9YqdgAWtkd9U1N9cjgUe2kUjJUSfj67T6LfUiiH",
  "key27": "uZhGiGg5V1VQLfnhHX72gPoj9WeK4N4JuTgTniFbs6GrJY2wx1pKo8PhVpwbiJTAUafSBZiSbmpmYVddzaWMNdV",
  "key28": "2qo9xZ8hUUg39M8doDW5uVmTUoSsre4rYg1EiZTnhj4pyocGivfGETgBSZ8ZWFqm3LXjQmiaosZ3T1ZzHeoUiURP",
  "key29": "31dbEdPK3shJVehVosMBbuRo8aup7BKYYk28R4E61TYL5wBCogomHZazeEbcULhmQ1fjfmpx1Zax5tpwwUnM3dJB",
  "key30": "5rwKJjniZhuQgPWLTkxq1G9aMrbHK3J6WLjHZKvjjV6dU8SAvYGNjvtfydi4F9ottcJaGzUKSCXQY3bKWUm6S7A4",
  "key31": "3rY6zrG74fcwYrQ3RTAUJ7HT3Sb6LfvbUHiDsznA9HGpJYx8YjkjCpYgzHgQ4ayz2wcGMd4zEA7RxzaCprZmyiVd",
  "key32": "2NpWV6WrvDmQKNxxNFYhevDU9TVK9DcwtAyERAeiE2q5RqReFngCj1AqKsqo9kbntERQtdpb3Ru6PkdfBaSWbX3M",
  "key33": "4nvZdYwJGg3CvehQNdciJxCe7B5JFdwyTbgppENvZJWNUeps1MbwKmebSF92FgoxkdwajLxi11bmMFaURxEUk1Cg",
  "key34": "2HUTn2tEhaNkBo7YoC4NTH8brWq5JipSXedDdcpUpApMJKgb3cSpGavE1Twcne8aY6bGbQws5P3kS9L6LYf4iZVV"
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
