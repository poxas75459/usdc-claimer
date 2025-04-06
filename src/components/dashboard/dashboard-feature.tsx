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
    "5ZYCAEgJZh1Xx4aayoF98NUYcnssmyi469AcHP7agcGGrgBhfj1xFT3Nkqijtew8WBA3m12yzdoBerpq4P6juoTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kiSfMKK71ugj4cawMLjGv7FArqbzHQbWk5VeKpuSD8fuALmpvCzWYwDWqQJqRKxaNTkpJNqvRB7orE9NS8UfcmD",
  "key1": "447DzSi4C6Q4eYJJEWNfBniUoBbHAM82otKaKjMKB9V9JFjJbdmsV7fvz6nWMdXoqhyvuhZ9dGnZ17UD3mWeJ4jD",
  "key2": "21xGWqtBUQvHafLn7xsf3f1g8mig8ugVudA2NUNMK6KqtQhTfmLeDeiGN8QMRtKVsjsFo3XbfBn41d2JTYKTQW8C",
  "key3": "2WA7375AQUhaJRycV6sLMhpHthS24ddBZXV5LzNz2PQNTBBdjB4eKrT7gXxerkkBBUoZzWBTgBYrT6nvGdL3wj6p",
  "key4": "3uRAJw2XV5PXWnJoYR4KMNULZHjNb9ZHpn52JAMUXJqGcsXpjBscbjFhy5uEeMEXFE5AhVCwmd1JnsSsUTkbarhj",
  "key5": "3gHiAtuoqy3PU9V9cf6sxkC2865RaFx2i2Aoa8Mn9DyWidTGTzhp6HijeSU2pCaYu7HocDjUxAhT5LMB9rhkz9Mh",
  "key6": "2ZLVgDmw5JHkfDDSVYpcnuSoUGHZdAcNM1Evg5ci83LkV3CGhk4xnX9MthRkHv2tnJCaaX9P4aP3FTbnchREoU1s",
  "key7": "3gMt9JeXv199cFHAgdU149qMh2QVKQDaMiiKcuJbVR7Dto9sV1EmDAFgp8dsuHrzDLF6BpWC2pCS8KnoV888MnpF",
  "key8": "5NZvDkokjReh34Xb4vPp44xUiwBs6KMyJXKHdEuqRKYxt7SAEMGRptBmMMyfURkLDhHDtMRHCZpZ2WgFJLn7A8sA",
  "key9": "8VtcdwpY2NBF3pNzjWiMqcuxwV1X7od9voRNQRGUFhkpccDdFNuY8RbZQfiq9AMUnWre9LxW2cPZhkUXQejgxQz",
  "key10": "3N97escU4xNYhrvC9GtMmb4QbcUBbt5oAhe7NAk1AAviUHW4xJDhE2XnJvAcMH8r4bik8kFM6U4KU2PSkEd8XXUT",
  "key11": "2bZ1sY9FMjutbu6DT4ufkwrqwwm8qJR5XQqVpdr6kbFJMHKuFHRfECgfLmj8YYHnUJFyXAeVBWYjvW8ez4wCc3Py",
  "key12": "4jVyvqGPyCgfV4ve2PskfpXMX5D4QyeMftPhbCRuGzuvfhr5u1e1iMe9Ea1njvqBoCj4Z59YgGZzWC6b2UyQuxbA",
  "key13": "g3R89o5uboRFwmYo9MNn1TkoKAqp2duXBhH1QhQMRh49pUwyi5S9Fe88qCaUtVKXB6AtqWpFmxXh3rAFj1E11v7",
  "key14": "SqzCpJEm65CV7CA99BbbSVq1eJ8SUHXDnhAd6CGTuq8922PMwmzwjcNrHtPhvQ1sLtXiXhiZHQfJEq6Y8W1iNFb",
  "key15": "3n5NkN1XYuqfZUjWcozGrpdJBFxsvpruteqpNzTwMTreiFgJ5QiLbdWoLaF5U5oZupL5aHp13fEthfUDLedE3Hhq",
  "key16": "24CprydcAMBTeih1tcPqqGedBQnMLNyXUV3z3si649kGnnCoSE5EcYbJKZG4kLvKGx5jYHDkBgEWqL4M3wvgvs1g",
  "key17": "3fFDcNcQbNEijBhEtY66zS3bmEB88HhY9kpGLGVsjXqgZYThiJJbvtZsvquLaSXZRws2ccebVNh9kdvpysnP1pYD",
  "key18": "5QjeSnRi6QNgD9J1ctGfdP2WByaExSGrEFeWRHV1Z2ESrEfhvRDQxDuXjdBeHz6Gmj15TEKqLWBuZXkx1DF7vsNw",
  "key19": "5ij7x3JoGECKRAhJegoF2Lt9CSgxfV9nJCgaXdbQW1jMGbSsKTCytZDr3HfPTsosdcp9kwC3BNhLnubJMwG1Y2K9",
  "key20": "64xbW8999kLDSt7mUf3vgVAnGbrPVKkwjVJKK6hgJnDaqr5wFsEkHNe7PwTCc7cNovEwq9XdPnNKGm4qozBxZh9T",
  "key21": "4WuUE9sKKePab6zNxb6UKrCVeVXSpkjXGoYEb4DxTGDXy5rpDzSGy6YefKbkf6uJfeUYpR8jr3v8oKEftRaV4dTx",
  "key22": "3z9hFeV6EgTaQuiPEySjkp1RpR5Nyee75aDbFchkCMNYQoMhiB3UCMeVnbScg3JdEnFqExZFkUTc8gfeoMTS4kf8",
  "key23": "3i6jXYVig8HmogbNyyQLmxxrkbbVGBZnTntN4U11J82unaHP9MQYHgGmmRPYhLfBAyqST1UdiRhQkXitUu2RbGAu",
  "key24": "54JbHRDMH33Tu6oB4sMhrApwADpTDUSGkxCCvuRrdv8STMj3M5DG2sFJbxzvgx4swYEeeAyAZCm7FXRJohmFbu8V",
  "key25": "XDxyrbfmtmYANr9N1NJ78n3XmrGr83ZBtKB3YrbybP2wTxaFzvUyVenjvtLAgTSMdwgCfTwjYPtR5ZVjEM6v7uM",
  "key26": "YUQcSTQ8hjbsVvRAPfn6PwLp23qdsr9KKY7En1hLosHsbpK5SGviqJCdeDCovV5Q33AfVjSzRcNVDsFtf8Mfa6X",
  "key27": "3jf6jZJMJytVLHB4v1DvMGTjvVzeGpMBN2kqitGckN1est7SQqXbQncfSKjeFAeakt2FLrGYL67GEMTQ2fviFBfp",
  "key28": "5WuT6yHgw37GeSMVLaX4tMvPv9k75PCYT8MX161bAoWh3So9NEf9UtihzwkTAvqrybyt6jKyZunxAmTRDKhoopz2",
  "key29": "2xh5evMt6YzTS7S3U9tyKBQs53snMNFUVtftQFvyMC6kS6zxU9yqT2LzNHBCdt6Bad7DsaBDGwU75V92rfLzdEs",
  "key30": "61rfn8quVfDasoRE18SnFCEvA3hEjCzvpn4j9Gm1oQZu1DC6cShvUpHf2DxD2kfPrzUTiKxTJujBFEf7wGbPARnU",
  "key31": "42uTqga1zN4XHFntK7PEFCUqAywETVX6kD6onCMTrvkoin3VmRggrPA8FY25hR3rG3KCu9uqVpJgavAom1roPpLq",
  "key32": "4vQnYyUkJBtQDi15Q4o5tFYzpMQEX6RYhxi5cqKmCT6F4GWdDyzfHqANBDrPsCnpnmKtBgU9TUEXodyzBW1NzMNz",
  "key33": "5imJDAxCjZimDaaDvBugUAK2i59iTGw5G4kgGwYExMkWLv1bi17tTrmsYnExZCkHkzLdFDTc51ooK7QF69VxbG12",
  "key34": "X8Y9GoPyzGkyKwiPA4J44iUKAHDpFSYo2FjrFzJz5xHipfdN3gf9zrRTUuCGHucMmNfXB7cgsYHWFpN51jwEJUv"
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
