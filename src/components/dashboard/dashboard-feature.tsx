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
    "3Dr1wVaHSXtXpLnzpiFn7BZvTUU1tTKBtXdqoebrG7utbERiauVvtyx6N8uTstxzkLTWXZu9dmJToc9BAmQioXRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Grcmy9oft53JpMZvRQHpPwDs4ZWYc5Fmdw49VZGV4RTYxFjCXnEGXbbo8SBP8xKRukptdf8sdYYiq3S9kEJ5WHt",
  "key1": "cz57dzWK2Z5m8uEHT8KU3LDkqd1FdwMdLUeJVdfEgDU5u4xkG2bzUTd6yY7tNpNnxwVEtnptW3XePB9fK3BoMPx",
  "key2": "5ouvidMhe7z9dQBYWPseeYh6RQ1SvJdKUyYqsjqB8ffY4DmnGCsocryBbeTr7qDQaWvsk8A8Ta7j8hGbZ2zm2AKY",
  "key3": "ZNRFoZ5dtoqRJRhvPuBHwZW3YKwhhsckVAzEEnxM71NCKs5w3bMKRCzMDni9JScx3eQssBybKTta11WB24AYYBF",
  "key4": "5W1JwaYk7WyBJXFPraUjXtoFkrzrqpQVV6B2zkSSghKwj3fbMQa92JALExQfrfZagmw56SczzATSeQxyxPnnhz95",
  "key5": "jPfyYx3Bc3XpMV2NreMkrJZLFhhU6Q68NDnpwHhQxDJtLAPXZHkSCSghorUbrbsez27myK8Hhj9bqWNNSE9QwkM",
  "key6": "vwU3HrEq77MNm9DuT4VmJGZTQnqqpuJSBozRe3rz4uPJDMdPGoqC29Jed5Z8hdWaYqH5hZ2T4HQddbVf5J4uTSB",
  "key7": "66V7JEu3YaUtRxbLzYXwFaB47e9J4s2HMYo9HHTZ9Y3w5XeevRntFeuYhKRERBFyvW26EE5Ez9CzLJ76L74dbZBe",
  "key8": "2sJk5mZ2jtUyXVqUTcEqJ9btYTBFCqrChyqRxyWJbcUbTp3r8GKnFpFv78berw47X6n4PdJZjLDmkxQZehRGvKTP",
  "key9": "52igze4cJLJNGGQ9aPXJaDz43sGxXpNF7x2bcKFryHvN3ovqPvR9251nJBQ2MKZWXLSGB3c2XsWFAGTMi1xM4oPE",
  "key10": "5LgbsPTm3aXHpHGyGAtzKAdEtxqdA8GCT1Ft8RuDFHmvxb67jHyjF2MoT8KR7DA666hmGSXhUrngZRz1iT4wUik8",
  "key11": "5tKiJP83br5BG6yoshAoNzbxDbzaiPpFrx8qC2Pv7oxFcZAyCYZDWqMt7gKeA84rFVkLqsKNG4Ww9p8TkaD3YTLG",
  "key12": "5rm2MguWMLfMRULsqQ1f7xKsAEekLyQVzjXwtw7F5oEcQgvfmhLQBxZ3PmgDhsT91zFAyQtTEfceviXQsYnfSze8",
  "key13": "4uVthKSpxnhjvzQJQucCF5dt3QpNejnmejyerz3VzG9igWQa27hWRrw59RTEuqphTbiJoqap5RFA6Ww4zxg2Ya7Q",
  "key14": "3y4Vr759bMipRw5wFR1VMBYLsEx8yefWGuJAK1NUb2ZNEJNGqUHdpV2kNBJJMhxcb5pPi8Z6GLQp574odXKVJHFF",
  "key15": "4ibSnU2SjWLP8uKvS2hAigXqXvDc5NWx4xvVKzVN7zpjrAw1rRWTRAZ5cX6fHL59z2QZSYCJD6SS45jPtVDGC1nN",
  "key16": "3m67LGFyZSxfDaZ4A6HYziJ9L2fuHq3nrnu8YuYhY6QpAUM7rCk58WkhqDNTBZYRKvbTvmu1N1ac6WcvtxASdcRw",
  "key17": "4Dh1z149gqPn9bbpJ3LUi7yEz8nho6gX5ir2d9UR3LDE3JCGRm8DPkyxRAjRydzzqra6T6jVq9pJaCHnirJ2dYEj",
  "key18": "5rCcAC7HptdXwXQKNJ3m2FT9U35mRe7ELQk36H6L7CRD3J8hvpScvtMgrqvGyiuESFnEMke57yk4YvTEHtogmHPj",
  "key19": "4Ab92SBrB9xaDmhC2p9XPGvXWrTuZQqBgxW5EkhVJ8X6KVSrWDbiBi4579avTV5fkQedEzh2w4nQ2RXsh7VrhJv2",
  "key20": "467petFDx9WXzeFYiUVHzjhxbPamQwb2gLRVWdwszXwiLymnVDGVuayuK2TuQdv4GSc3WeQeYSi54TcvcbiERFae",
  "key21": "4Vnsx3oMDahG1j6NgEhC4oWgVY7CNyz49P9vJPBVuXDm8MpnEo2einXpkNRZhRk8PGyiw4oVnBb8E3frh5RgzexV",
  "key22": "63QyShoM18h6PTmsQjjnLmgR1eUv9mXGHqNY481j2YyTJMfACHy5iosxBw7ZwBXDeyCHHBS8vcdUnqhARq8knVaf",
  "key23": "3a9iEFve1WGbcPsaYdfG9aoPw8mqTiokmx3pHZXHSWy1s6QLtd1RqdTJ9pNZ8yAiTGxFZFFWkMdgqMreHTCUDMUM",
  "key24": "3wsKM5WtiixtMnYv76z6nm685QgZzeWimpUYwziRakoMuRoZ4HuY71V6S7FHGP4qoNbZtcy5TrqaLpG6N7QEK6y4",
  "key25": "4fj556YHd3moc91c9bDCmYvdzUycrDytPvHDqFvUjWu6wgwDNatwy4dnrirYXP9jht5yQm9GesL7t9SDVqi7WJwL",
  "key26": "4HBKMLtJunw5QDh2QGMTV6JgnxMsWQreUzD7GUHj7g37MZXXtUYUadLD1bhNhB5Q8FqptTrk9H8nFfKmxrd4a6VL"
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
