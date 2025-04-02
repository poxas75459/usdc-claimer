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
    "3rvXc4XPV36nUUZrnr8vfGCVsA8Tz9SB3rQ7Vp6BYjET4BZYwwrzsLGwqXjNQ7mL5Qrzd594JhN31gLqLg62TgAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e4J2UaARQoKEot6Fw2gYYEVQcfpF8FdeFrmq37kFxa3tJU7kfm4imGWPsGaEyr9ANEDSgu4owCtonJvSHgTAkZv",
  "key1": "3ZhF6UgmwVs2KyXxPmnX2fNSybGJ6ALPYc7kbRUu4bS4nhUT9HcJcyztiJzggbfwzMfqc9pyKe2warGqXtqhxSMT",
  "key2": "YfGqM72GHJzYjR2CouSxgUGyq49XcmH3833GZWtVS64TDRMhNi32ssDZacCCwMiu43Hpd5KLRGaTQ8FALWZYbWy",
  "key3": "4RdVbZeJxprCAmhnhSKFs7TdoUopD7qBhBqF2KvLMGSKJL2xek5eFWDd6kGvzi5kxbqCXBZizuhEAAsGRWHbvxJL",
  "key4": "27cacYJhoL8fYBgLcJf3Xgsqb1mCKEXZnV7aQTACMSdjXWWzWE5AbyU6p9MZs4PPw3iaMDzsYa7gG4CLU5U2SwiY",
  "key5": "2pnD2mn6ZgFGvX2Wv58J51AmQ96udX1mux52moDKrA1HhGvEnzwBTU8MYF3Trpsc4qyh7ZN6rvaJEdF8x4Nos71k",
  "key6": "49Gmi2xWWHScyZ9jGkQ3xDAA5ofEJj8FBg12kK3ukr3tbBxjDwVuS2mv5m2oof62r7gRCfY8Km3BUNS3aQepmBQs",
  "key7": "5c6YnWUAbcDxxWLpETifTsmSrMzfHui3dEbG6PTiw41tMNZzRFkGW3GUCcQee5LhWocsF8YrMeHa3EnMXrVD6NeU",
  "key8": "2FXDJ9VTKKG8cfw9eKo84F61AVZJ8CjKkw9rhGiLw9DsgYA9whmu9MCsjFM1US9gFV8VHWRqXRgsrAhpis1afbp5",
  "key9": "2ZDNnHSZxLrWqSj43Ua3E5muQdQstyRUSpJfhCwvmfcfXGEMbJxJq94XQkJuszzJGyCe48pZuMr1R9LtMNsJGCKW",
  "key10": "5GBLkK7fvfQiXsJBHks6Gp8BegkeE7gZUyGoX56i5KafYpX83GiD27bghhodT567wZKUsWAGTG2bybPhxzKWWLUU",
  "key11": "3Facyt6Ww6MTbJsLsc9GQBTSaEhU7rBmTjYHEzHiRinJc82kt3w4EKVH1Jny3ppR48AqYFxdsoPkkYgaW2xJuitJ",
  "key12": "3kC6KpT3MUiqBeb7mqRpk6rFomm3Ez3r1edbY7n5eY2jeTQx34QYg8Ets7oMKLGHm2UBxjsZcxHjFe1cS98BSUyE",
  "key13": "5mp2KFzoJKm4TBDpchRTfF46JkzWwCkKCLdXUJkWwz9ksf3K8BFddiUpDS8cPjqXCgpbE1jKzqAiTHcMuSE6ppiz",
  "key14": "3yW3F6Qb56vtS5peJWMfFw9rXnjCdy7Q7gozQj7A9GM6q7Qu7STDGB2ZGDFpvMTZ5ZvjLZQHmDPL2nRrUrPQR4zw",
  "key15": "63V6xvSj35SHaEY9gdVwZszNYqQJ4DziuKKPK5ZPDG94RGeqjXBi5RbHsbSf8h169T3YFD326MCrfmGm3XrQZRbq",
  "key16": "5G29XZtGQVknkdqxpDP1ZNdTnZNvhn8DVXQkYxj8JiQeaPuGJKRAZSj9k9Xhe9KzANRj6rhKD7wWHzqjPJCo6Uma",
  "key17": "5pcpK5PPvk7US1GaCWAPatGzRphLFq78EbdFBHaF1eXwx8XwpFpD7sZYXQmSdjSU8SciSxMBPBVFPYQ2ND69Tr76",
  "key18": "2TNThvV6wEi6ooM8YW5HdRAFA1sPL58MaeDuwMpUR5G85bsgrbDooXXJ7jH3ihQkSWrtvuY5nvNVchQAFqqJ4Gf3",
  "key19": "QpLso5L47DhBSZEzcvbyr6VAnsQj8HHFVFUACtU6FYiS4VS7dzBhHoqJgR44tGKi9ikWGuMmvx7svzWjyY925xq",
  "key20": "QE3R1tJ3wwKbnDT57mSC4LWSGZvpz5rFZwVyMp9gUdVuNZgkqX6zj1mKg3MxxLwPfCAYEmxS6UAciwRNXk8Pwfw",
  "key21": "4aBZ9HBBbHq73cSVGvwEu4rGqAEfVpYHvvhrVGkSaE5CRgpg9bgV8UCPPtA6bSaWrrSCigSnh45sgipL4JJ2qkbG",
  "key22": "4pLbyRXWCTJEMX7s3gWQBuuVuTTFwtpSwfNixns3oGuoJMBmezUFr1G9eGExio7wSgfYzBmJqZKurGjbDwBjbZPT",
  "key23": "4YhJcZH952WurEqMD4WMSBSTdWzLb5hUUfnShLR4Lm1z4qpgo2x8bqG1c2HTbiHiZUw2UEzjF3iWRi5HmqnjkxvD",
  "key24": "31sNH5gYHHDbN4ohXLntCWCnTyu5mEDLz47USZgrdbjePRKLaF2cbUYMwxyWCNpHckjA4caBnbALWKAhBxkhqsQ5",
  "key25": "5YrwHUiikGAJeTZPUTompcrGi6eGWxZDUHek8KVBj5eEMEWMUNoCk2CqMvhEU6GhgmCif34KAQb91FdfV6wbEjAx",
  "key26": "5eA8j6TzHQKFtBXzgvyRnxLRjQt4N7cUyXUgNYwbubSEyYycvNoRgfafnRtrpaWzDgxUvGEwLxzWsByNoajNAQPR",
  "key27": "5qgy2adi3TUM4K3bae8Jrsa8ZdVq2bfppUWDhA7Hk4mNUfMEJJKToLiXNkkoSquR8k6MDFRT2ne73AxkQk4KNBE7",
  "key28": "5XRJec6b2QTt2hEtGXPDdyhhkd8Ak1YAGjDuuRmqAF6YFLLintw17kMFcKFoCwoVeHWQudRk22T2D26DjzezZKmX",
  "key29": "4TryMyWiY9Cgt4SQt8FbaiZHvZAo21beJWSfEF9NSB8BcLgDmizZMHMPgpmSciCQ2yNKAuJgBvJQ77hUdfexhi5E",
  "key30": "o7Jf8HVipXosDeLd4aT3ut8rqQoqdmkHhjiaUiQbgcSguaaCR95tMPSpxgWvqbemYibjsWzAQrpfKZxgBRBMouc"
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
