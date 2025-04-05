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
    "3PGPi9hoLwi7taCpZ5ibgN6zYJuq6qJ9Prdg2uZeDYkmsJPpdz8LcburrwqCQp9owSkfnftGrTQNoSXhk3fyeYyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcqPxbJDDmpXvZZEskpbXT5yRiBAwSqv36Emgu9JcHubmhBSHVyaMveyADwzo6ySfBYrU9mBMwrtGmCzkHUkCxq",
  "key1": "TZ9hwFfP5HXvZf5ByRV9NUtq52NF5291Dc4zvgxMHNZg8LXqisxuWD1tzoRiyqdcnw6PNsTgEMqKVMkGpCZpkgp",
  "key2": "5SqjuyHZDyKbhDKotvWdEG5wrrFeWXU81SUoJHa9Ws9EkhJtbMGM4ozRqnkd9xyRXyYujv9iRY89px9oNXLV6rkg",
  "key3": "2Bz5RmXkhRZzbVAaVQRDJvqYGqfquE1mVAZ88x5jqM3nGRA6GS4jyLsWr5aVgsfJy6HuDEss9NWYk3H3igDiKJzQ",
  "key4": "3GnQ3LpYAaqYz91NbFGd1dkiYvK2Yhn5oRNJadQry7SzKsrjF897q9Mwn8pgKdcqKtYYzxiNVdp2KT3JxPvzp4aE",
  "key5": "zv6A622ADokZFRBpiYQ3k4espoWyQXsPrGMRWwMzhnZfshWD8AYPFeLotbWJ7gtuS6BkMv5jNCUsM4VvE1cPTAU",
  "key6": "5wRfmVfbP7Tf7fajoTdKmSTCcPBjPXe1UqxURkoYVKNaAPookCDUjuMa1CfoeVSnWfKu7CGcQCr9zeMz7Ve2fQ27",
  "key7": "2yTWCa2sUtQQd4viarGS2B4sjC1xjUjzHSyaHEPqjntHGNAWNPU2fCbz6n67c441WnvHL8Uig8fj2YeHm1wdPcqy",
  "key8": "zpy7EEtBBDg1pUhJqRqXnY79r2G3hX7ByzMo4JPdpfHaQmuzwfRDNQcf8sUnNRn1sJagCdLRv7AVfPRqLGuNEz7",
  "key9": "5PYDRTA9zh9i1HURLCq1FTHJepLNoNbLE2rD8S9Uodo2fcojNxo77ymPz8nTY6y5iiVXU7uf9a16uqXoGNW8CM8r",
  "key10": "2nyHsSgft4Kw4ikdBqEBxLGZHSjqRJBhVR8jMGrvRw2VJ9JcLdnGdkbi6ZSQx7iCCUSgZPZdcpgBdanpY1byJgHX",
  "key11": "2Hpq4gp5KzyXM7mZC8K28441gGsd6wJ1NkAUFVe5aYNFKa543LJQDJHzoLgNKqjYmo1GEcJfFKyj9EZE9JUwhZZT",
  "key12": "3r1po65kTFcixJLjxS7ouEQRvMLpufyJEQoHRNELSN1d1qs6KxHZq1FHK1BkLpoecSga5h2RahW37JmHe46KtQXY",
  "key13": "35kuiN6JjZ2NasxobT7RCH8geDYn1AiBSpNaTHN2gvKnaB5kuQNCJFYtz2Qti1biAaN4WypUBjTdfg7tzPsJXMvs",
  "key14": "26rVF2yqFuXFLo9dzxJNjFct6cKMXCUx3yhBDAidkjdDbnU9ABcgKMQ3EpRXnTMequWy3WhVypqKm5SkHmzEPLvw",
  "key15": "2Tua93txVsgQf3gJm5KcLuNzVUSknbfqQcq1QycFHNBKnK1NGf9bHuj2EitFHbh3HPF6qEu6svTFh6P1P3xwuocN",
  "key16": "2TRwACiaRvEq1dDUJPGC6QARWJaeczsasQ1GnDYM9FgtEUtSxuhGkfptTBn8GQTZbVvHDKgidiBTK9TFZR1AsCtS",
  "key17": "52nrZ8opVw4tYqy4jwQo7xuzqQL7oGQy2CZeVFB944zmjiVYzweZT91mU8UDYxKzMVPzHHH5iH1HbNSYnqzpx6ut",
  "key18": "2KczHRETVRzYFEb3evczeF9aGjDzXt7jRWzuTUJJdPs5dgUnUC9TW65uMyb52jY32CrjA729SdzZMwwoxwsv1fnX",
  "key19": "2emv37YyrgBShrKh9KDcxNgfwFLz9Vee9r4SUrxLwfruNHhDXjsvgk1YBRykbqTR8XnNa2PCgi6kATkfP9DMBZnL",
  "key20": "3gpfgd5g5T5YMG9nkihA8H2srS21MbUcQ2BmArBb4U3QpsLFnGctnXp72moPvQ11ovTTDqvARCWpGy3EUsRSTcwj",
  "key21": "AuPoF4Veu6tSReJ1mHo72NLKVUWeorZz7dNKETfJw4eVQHfLHX2SwwdMQWgHrbQcqgvM2wjrnrrq9cgk5F818iN",
  "key22": "juN8oS9R4wDJCRns23C46itzpxX4RKjc7Bz8919Y7d7yKo4yKTiNyaSct5tsTkeHf7sm8ycy3gvYPQeLuQf4fUc",
  "key23": "3Qe8pNM6B6n1seNpkF4ihwqWdgo5u85BSK7kNnkVoadkYJhw4L52eeupkUEWcJe5gYMEAazYnj4Uq8UHyunJpdCG",
  "key24": "BdgfBKCFXrFuu37CwoTwSKvkL8dgG5tDGsyUZ7UCfDfzeH2DB7ib9ZCD15FQvpkgeomosRcWmahf2GqfmbpSCZs",
  "key25": "GbNnQpniQKU1fq98Aa83tkmtizHQURraQh4amGVvNauVjE7SErVo37nve9Zm8zBshncG2De9Dpj6xY4U7VGLrFK",
  "key26": "626DfqCsvw1QrxquTBDjPrySqHSjpRGZXjH6gQ2Le1Qnwpph5JQNTeAbpTMnTnZeJmxfcPK8cMB4qXgn4MFtf3uk",
  "key27": "2G4ejDyr9Gd7VozJ7StX2Dd1gi3ji3TEG2m3DWt2PySp7eQyjJfbhXFsmeMmdeebQVwWpMcwaM31hZVAej5gdbB3",
  "key28": "3ecPDMXBh8vD6nk3MJVuCkSZvqoMdgj7JVumMrHCAoryPmsPChfj52u9EeDtvnXqjE9NSH8mVu89oQWLHiQWHPQM",
  "key29": "52mZWNTTDaS1JCsoLTpmPYDcUDB1bhpmCEPaRarAGmFjjpSNkpenCyeEcv2t4J6TbtTpCNpLtJqCSpaasQmxtWSK",
  "key30": "61wkCZTDKa1jxeyBzn6WEUPAoLWGZQ6x6mzXudSddDzaWRsjQHjD12c1jyZeYTSxJ6uz4AroT59g93GyvSjP6QM",
  "key31": "2XbUtZGt278eyQnCme6cRwMqw5BhvoxdpidN9tZLeZNPQwwoDaZNDjAuCMaxfDa4uZamtdReo8HqnjmazA8cHqyz",
  "key32": "57RsNJPQq5NW5NC8ZEwhdGHiUqTpyPDUfmx2qGp8JurRm7dXXSXRigu3tx99Fp7eoV3drfRmLSAqZ2ymzagSdkzp",
  "key33": "3RXaWX3zjSHnMiBzMCVUrJ2o6jGKPVgsyJ8HYY4vJhf5TtLinp4N8J6Rgaho4zn9g3WbQbtjrNN8iioAeUV37uqo",
  "key34": "2eWT5miyxYaohNzj9tvLkSTTN4JzKYxJ8nAcZ2uC1gxYu7rgXRyR2h3KqL1otYZd1GVfsCm9gfWBucYJEQ4mLDN2",
  "key35": "3FmRYeKi9t6LmudU97xZCNubvouzYAus3xUuKGycJi3RWDkBqBJwMVJ5vDLiuE2bdQi912rWRJ892zEHEyegPPN8",
  "key36": "25kTnbv1fj8ANBege96j4d6fFmdMJijBJC1TbVsdV1gpqwa8aMxFm8F1PLrbDPJZvUTS6XQwg5FRbubfWR25SHPF"
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
