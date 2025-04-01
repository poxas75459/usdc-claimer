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
    "4ak6NWU8NAKvxVxbh4jmcCTPqUGPPZSvcKmeokWd6aUoe5jnX6McqZ13rRMKukUVKw6rwaetqDF9gG2NH2nFAMXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bzYZQ7AHKRFkZqGQeypXWYf6GnsmdDu8Du88kkcKcFd4EQLinq6xDnZYsLxgmVekg9vz3xFBHLneMTeEPyD8Z5H",
  "key1": "3RFGzMAXZeCcea6vEwDi9hZj7n61QmCxNypdGhbZerdXrGFoBYyE6KNjKyKQVMDjbP1ryoKUc1gcVvjrf8y48PMB",
  "key2": "3XxwfqVDw1X2PTKQ6bycdoE3wQ68s9rWpPmJ8msnVHznM44gNphPbQs2pEuDgGKvfFP1dYEWqTedweaJkXMtPLZR",
  "key3": "4ZcRTnbDbCByrxrEbkf76caFbgm7LvW9LFrxDanvyuJhqAAPjS1H33r5RyAbYnTwH97oYivYo4PXZrAmteGVajFk",
  "key4": "Zt8bsmWL27sXdfuEUbCPPv3am5qMoRq5chrXtE9iUqtAkaHr1HNpv35Eg2Pc7bYsPcPDBz3GTqJppQY6fEhPJYs",
  "key5": "31kFDkZpMNmvNKF5Qyy7jPRk3xDS8CgwSb5ifMJZXipPj6BMdEBpT5ogo4W56haNktKYU6xWi8ChBH8sqZuaS5oK",
  "key6": "8RQr1i8mFyLNcx9BjTUSyruB6PMaf13iBghGKhEhdZH2cSiqpdGTLMeLY6utsWJG92KiR5yXMDQE4tM2sx7eEBi",
  "key7": "2nqjBrNQ5BPA6Upa9sqgLebPAAyYUyZJzc8oxyz38RAd28XGSpUBLBFAc98LtM1UH1z7RdRFX4R1ueQg3Suf7bux",
  "key8": "5d2PSBKYm8daFS93u7KfZ3XMDYASPLbSxzbG3gzponi3kRqmhhEh317GvGvojGSYwLxtUXFkJRFvSRdhurp4iAav",
  "key9": "24H8949sLaK8RBC2cdfLDGV4f36rvViwg33xraE3zxYD4WtqKbGpeLHcf2dVjATrUwtH3y5DDytpFhVTudNrEGAP",
  "key10": "25sqvcwHpFCQk6Ede4YUDB5Em4BQsxNrp8rWZPeR6acWUxQDKZWdK7zZ9R3gwgfcDbKH3NmHhHFYkyjjBsMLbKHs",
  "key11": "4u2yUdDDoDJETYJjtfEU4a8Kcoj3UKMNYG3aWM2ELaXumwwqQvHdDHhJmTDTXhqL7bNNHqcv4DdvY2t2UseBMGpD",
  "key12": "2uSHyrneFQ26yKUhs4h5ztF11G98gPNnT1VuzTNSLeMNCCaGnZMBM1eo5ABdJ9PbweqvLW4Ph5E2qTRiMyNZFyga",
  "key13": "MpU4oHqCJQR6Cc5D1noL9gtqJvmuvCRWDnF4A25V9um8ieHQA5Ue5ePSA2UNj84rsdXtjaKZuYZYCC7YuhQZb98",
  "key14": "3g77g2iCSMsFcTkb3RpPEjR5jCXv8FMtETriGCUSZiYm81EKAuUB6Bu9QTHaCVCRiEMiJRUcXYQoSLpuCiu2X1DZ",
  "key15": "2ZQsYzLkSFSr3aHe6kDCokFKqp54ZBpLsRkCkgWtysLTChKCELzwUvEuHCoEK4ojZmweSujL7BZ6Hb2dyzE9oj4b",
  "key16": "3skcyLCBksmLUykfQAfdRTj6WMfxw5SRswPHVB3DPKsDR5ZULcX1TgngJUUtYLw2ZZBgeG2d3XvUHLfdfQuzF9PD",
  "key17": "EwskF8zwB1CHX6z6LB8ejyU2NZJsnKQBCuH9cjY2xV7LEZ3PvVdQXW4uvozqEGnYZxDaJDEk6vshG9sBTVjQiRM",
  "key18": "2xj8S4FjJzumCEbfjDq91grSty4GUzL3i6HKwwocEzmAwHVFqTnpZv4Ay7xdxWDARF37bd6U39eh853mQgsD6F94",
  "key19": "ebhyR3vNuzJjw6eUYe5k5iV8M1yE1PEtGbsfTFhYqdaeqwz7GnRJnZymj6L69n2auorzGUELNCrVWSrzWpCaEV1",
  "key20": "opKWSR9nHsUudsJx4zxL9P1CWWKyN65qsGuoMfP4vJ1igNTEM1zRAEjcVA5YgQkg7ZRnFFufr9i5BQjr2HG3qAX",
  "key21": "5BikUpJB7Mjvef9d1m1qXVYpxDaQ57FervPJUuhwCsNTT7v1cuWvvMT8mJxf6zoi3vv7nCjDKMKmH7FU9yZrFNLQ",
  "key22": "2jnfPuxRKEm43zU6cSNWQRLntSriuNDVB54SPqX4vkwy8SeZhhmYtShRnBDmjQ6S8kww7TR5jyuUWuX4zAi7ud9H",
  "key23": "2Ub93TFYR1uVE4cj2FixpsFvk2435xwtsnnDRsi8GNeVvZUpfdvqo1yyGY9KtvrYc2pTGtpYiWCuf6XfegQD7nCQ",
  "key24": "2eACCj5yfi27AEPuejpu7riwnBsj4TMgtCwDXJz1EJHMwoMUr56ZiL44BBKbZHGXgW9xKW8bzRDFyRSobV9cjAta",
  "key25": "5bFWFjTR1NQ3PjwtQWfUtgejbqQCxUC6reYEV6QWezoMQ42wFk6dRgrdGqJ2gndvP8eetDndUbzqowXAxW91Pi4q",
  "key26": "4AvhF3nqyW2ZibPBdBfots4oMMsXYFR429HmpAtnHi8mdZuRHhQ5Zk8tGCY77XT9RjJUd9KkSS5dqoVJxQtFMC5U",
  "key27": "2D9YWKkrnqQGeausBwcX9JxzszVTD1rDhwGiKCPjdwRg8LwDGczsxS2tcRkv4hYaqmWBcEYpTT7gbKnExW8wQadU",
  "key28": "4swa5vjPGNwRXGybMdCpcnEyFSEvVfukHPgkjmQbGwwoniwL5HjNbuUYHv8LX7FJhb4JkA2A2RNSzMmphA1Py5Gb",
  "key29": "2E4K3Cx19WPwFTfQGjoJi8hchKxMhYAD86GvfKunooBuja5yJMJrdto7QMMKn7MCvcLTeBymei71esgDH9Zpxnve",
  "key30": "4gYhwsN6TpJhYBsPkqfNzkWWKyqHxRpXMs6xuBmFLaYGFmLfo7yBQfWvFFbdbycY4894c3kuWLk5r5bEc4PKowza",
  "key31": "u9rjxk9BC2WgDnJJEQVWpbCFBJUv7iHEtfAhvPDgqyNGQwfbkTcfqRPPwWBKji2bNgfTrBQ1MBTyD43MS7mdXWN",
  "key32": "3zjeqERSNctUd4BZzTnosgrsHWPr8Uf11Zn8d8JRaTFiMvsWMmfCtCr7MLDayKJTBQgzLvdxX6CcxxcTK4NGQfFd",
  "key33": "o22bbpQv4xjeK5jgsYoS9SiqA4Nkxvndc3ZzNs9g9sursZPTqTtsgDJCfRSULcyU44uosvc6PLTMUXCRbftXeKR",
  "key34": "3oWDee1wUwPmpnfzkP4f5CARiiYvDy2qodq96dZy3rPACBqKsVrch3znjpmxXpBr7DEQo8HupofesftJUGL9uHTX",
  "key35": "hWSc7zbE89bDTgSoeveqMz6dfkVQyppNP9Wka6Wfm5LLx6vLnb83mfjuAjhimwskivZ3BMTCAHBgfBCCVxwuhLr",
  "key36": "ucJsBrUTq5YdESDhpGn7gJCN1uU7muESDGCbojv6kkvyMTHiZWgKRRzo3s7vtVZ5oj3Kd9qZGzuz1mcDbCHn9qE",
  "key37": "2RjKccDzUzGKn61ynj8pdg7ijrkR1TNsKxX36JTVg1ZvY3XD6peRFsk4xXZcJSdd3N2Hgbb55siMZh4FK89Z7WcV",
  "key38": "GsZg8kLFVxNmGBkzVs6vHswZYjaC4GD27Nogxc6Gf1CDaTP9C3L24aMJrioEeNFDYhfo4mSnnM1T2eB5f7iSNZp",
  "key39": "4jQC4EGyzG2xYdBAS8ZpEMVz5mfwq4BKo3iCyt61DsoQL1FzEGF9Lup3hThJB1mGP75qLoQuabb9E7J3P94YV9bp",
  "key40": "3W2VHLeJoAbDcRMfdeXC71rTCu4J63ezfv8RAVFoDtdAc3YwSELT28vwiXH2PyQwbpGvezXvwXgYYEVdwfmwL9jt"
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
