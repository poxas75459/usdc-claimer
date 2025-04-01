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
    "3xHwhHu1rFrkXgwSpapjpVoEoPUwV6bCvvKoSxaFaBdLaLLShfC3qBS5CkaB5m8FMHvnW7MbFGa37cWC5gQYBJ4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzdnLeSFaW48TuQVk7422wCXMicD1khBHVqEmsBZehrys54sghcGnPySkR2KM2HRy2xHHKSvUEHnR3JCksCHCLK",
  "key1": "35qiVMec58LiyBZEZ9uoJLCoXu1ZhnLd4G2fKparGxpNKYpDmWPZFjua11xhFvAJGjNE8scKboi4Rnzi8Y4xjzRw",
  "key2": "4ebesGhVpumHaV8vVs9QPyo99S8RKsEiF92o6XWm6CPKZKeeF2gFUj6zBtmLqqFqZQQV4QB1e6coJ1jmLgxC6DLi",
  "key3": "5554iAjbraz8CJkBCvQYSyih9Wf8fHA8aCZFdNxTktDo3bz6jeYhsB7PG8e6aunELh6GVe1SPyHMxDhQ28hX9jbY",
  "key4": "33BdD9EdQNw2ph7B45Wdw3YvMASzKrZC3MZnf3yqqXJCrSEuufxLMZwPrkhW1gPMMCwiHCEPvc6eAMP4Jf9zF8rc",
  "key5": "4fRgYFPyzu1pwZJG6emq2Zi2cdy18ujEQJp3DuEpepbwR282a4oeRkeDyhbSgkHfBY9635NMpEc9G8wfed2pMML",
  "key6": "aVwyRQdfakcawtFTSFRkYzrisoLJ8DCnvPs5yX91ZZALAZfnPMvecAuBXVovmUsi3dM9EnEm6PNVWyikgsxjaa4",
  "key7": "2iaFc3u8QKtCiapj5nq8Ls55RihBGBxsqf9UTvvTWzF4zpDiPeujqR6owpkrNyMnAbv529PiJmxUHD4Fybhbd5tZ",
  "key8": "3yEp9NaZaXVCLrc9rykmGdemcx3xzDykmVyaaK9mh6BACu1iKQiR2cPvGteAaua7kYoVgmoFCRxep5W3UH1n7Aob",
  "key9": "2URj9Ue16yzyk18ouahn231oTp3xyAcUuWJH2jLeeqQZhUvAWDTPYZcYxpyJNNiVsQeBQdEX224tPrvfwN6nwxtM",
  "key10": "3ZcunGyQ8yZRa3MJacwyDGqyh7VACqoRwF8w9a13k2W52duTaJ5ivQKCoVfv4ayGgbdUjyjHY5WQW83CXr7AYVdW",
  "key11": "9zpX2v8yQqmvV4mTXM9EBdxKMa7143JB4E52pYp8kM4DoMwZxPywSKPgE11aC6gby2z14yytKQohTEZdzUCgCUn",
  "key12": "3G8buomcGQ6TaWNDkG2rAJU9m2zwWFm7mpgCZ4R69XpDuX5jpmJtwuFHF1Q3EVSNrEg6XAv9j8UJAtccp9YE89wU",
  "key13": "29MQsBGqjFjKjhj1oD5aDCVRv8NqJBdmKDaF7voHrqC8iepEaDDWfb1GhLNi6mt5Ts1Mc7jAqx5ZE8uiZgk9i6EC",
  "key14": "4ix2RhrgZGZXxvauwN9C2axGZcF1Gn57BwRmv5fukbeXereLZBP4sfhXG1L2bcazPYqbUtz8bMVyLk8gU6gHnr19",
  "key15": "3TdVCx5Dx6Amhvemxeg9DfB1uNx4SaZDvPmtmTrrjDs1qwif9BCu4iCokbiPA6KYm4a3xSPeiScTMP2HuP2Tgkh5",
  "key16": "21MVWbpt5nNQiQvtL7ah19JhjPaT8r9YAQEDiLHhFVdKwLDTQisrx27VGRW1B79QQ5HnpjsaM2orgQGZAhKWC7b7",
  "key17": "ifwi5tTyBQekVX24dzSe75yJC5uN43hJWnqtQUYYYYAefZV9hNt8wtxjWxzC4buxp4UuTDbGHnqcfirZyzctsFg",
  "key18": "4LWM7GGsvNnxbfMHYQiWj91yP1qYACDBdQLjxFoCpKQet73seBQakTHyGDLqvjkyy2XyWPY3ucXtMmvUHKMYsA6v",
  "key19": "ynBQospLiivn5J7Z43ss6FaWmTA7ALbGnxgXboHHMUjhmRZYraNuN7UdEyjyUS3YUoBKKAGWubCQuxTPfZKNB2d",
  "key20": "4ULEzxRi8jNWAkPtT52Kr8gnTziYeypkGBYfb28ABJLqckxHH1n9q4umLFEz8PRfTLrZXN6JcakpryzUiFAfQre2",
  "key21": "47prcEX6uYBE1JyBjY4shZ16GNri5UppprhZzEPyRqaRHEwqDuFfRNDF3UBZSr3PMZ3fBFapcDTP2fmHAGLe1GF4",
  "key22": "2MEYRf7kpYKhtfZ4wS1ArnQ1Xgyvyqfas4X346HpHAtUgdZ9YgAm71ujTUTFvRyheAKFmiSS3BZyoGZ37ddc3Q1T",
  "key23": "5NL4J6VVAWxqr1bLm9KVNnzHbWij2ANadvFwGFtLKBjY5aRv3AZN8zkZ3zcjrMFKvpuYSnbANxiTpKcvpW6bG9cd",
  "key24": "5rgit7i81jiWmg8T8VtQs7Yx2KYjDYw49BTkgfW4qKzUy48zhfLoc4E6uqFo6y9Dg6zaFStDNaTKQoipNR2i9dkC",
  "key25": "25rAsdPhBWUHkjRBDUBVZW42zExjqACwaorArBdWvsQq7zvpX5imcX7SMmNL2zdsaTHcksJRVnLqUHkpkHjz4iFk",
  "key26": "44g8AQ9j3WtitfnuhY3s5jwoQ3VDjF7qcz3P3vsDEfaRmBwX7fQQFaiZ2utGG45Z7bJ7KFgjbi2t8hepY4JoSje9",
  "key27": "2hrAcaTw4X9jdEGEEhbhVuUumTRKQxrUUYeNY9RZ4jMwD67fSV3ZGK7DPDoBwJrwux9xjVQtzTfQ4ZY9P1yMkJKw",
  "key28": "F8cQCd7SR49rfhtzNUNYYmZK35Fho163Q2eXrYvUAMPd3abyg6MthCun116xCVHTTBjzwE9uMXNoPL2EhGfS93P",
  "key29": "3CugvFSEno9kmBrgptmq2dJBpih83WLjbcZ6Dmnp5w1cjvuiXQJJra6Zu8uhJ8QWKNWHneL987sMgUW8t5zkhkc3",
  "key30": "5MQHPPua6JUYLAbUQzGxG727zQkPW7dtTY7hkrPHsKyUHNeurfD9iLX9caB5et2BwGnaX8iQR8VPK4Po9tA6LbL3",
  "key31": "4g5nVUfH9APdtGFqS9WkButzRBEKpxK6D5q8fTMMcB6ZUvMwSCLYv18EbCzY9nbzohcx3eUDU2JTFS7XvNNhk9ub",
  "key32": "3cX5qJAtAzyxgQwEjhPCFPY9k3mCD65obGXSB7jNtGeyGB717PjQEbguEULmDgAAy5ynrVEGbiY2rWTKhJ7Yb2Jc",
  "key33": "5my72Pu6jtnHVeicDktN2bAhz1RqPwNBnzmmAmks6H8EYTPAA44aM9bdgv22JLHusSHyaBZDrnLHwrLd48E7wiQ3",
  "key34": "26MHnX5LRko8tUU3XujVGpPQy6FxNXujxsruxEv75PeZ7wAKsorqPYbNw1yH1LCKL47bMmUj7gNztbRXvscfRDJ9",
  "key35": "5YGfntqvaMiD3UcMDXLStLCAbDa1BGsEuyjnWvMLSB3PB2rkAGBchwFXouJwp4BDjajwmbLndaRiDbj5zCjG9V5T",
  "key36": "4dX1yq3hwkxiGE6XMjVeRdtUJwFs8tqFHVPN2upki6KqrdsA14bu2E11LEKPgKNw2okBeSkkqNujnKdUFXf3U7Qk",
  "key37": "2vuxAsUevNq15jUfKKMPFL1zgFWDADWMjnEMJpgmsn4kz2JNDUeXAL2uyuzcHbxtnsauCpMnNP1BSejdqX9UimpG",
  "key38": "4LLgRRUVZGgYHxk86EXf3xht4b189YPVbqmMTmFLySgCak12GRiTTUQGBokrDe9FJoLg4gMDzP7Ego9Exz3KyLVs",
  "key39": "4oZG2UXW6cMdz8FXQ7AEWEUZJuiaSBLSymmoSGsGAuy9QZjZ98C8awKAPCUfhjUm9uSwPfhywy8dPruczNSqqd6r",
  "key40": "3PgxsoFJTBcKuePDgm2sMpP4LKiCfwxpWzx8jwwoJE4R7i2uUdYKjSw5UKNXoBVhJq5CNRU3vRaodKZ8hZX2dtPQ",
  "key41": "dRL6fg6JBPZXsFyFhchqTHxT9PG4vq4nB2WPqEf8iqRbG3zptWAjt2CZgBnbxLaVDJShvuYwJheJckuhzXVowA5",
  "key42": "2FMidwzAvDj41SbpVd8C7AjRf9JJpk4bWyQmnq6k6mTbgFkh1Xy1ttmf8vXRmfi4pwf5SDerdMqPW26UKpbrhz17",
  "key43": "5F5WEN3fm5UTWGgNZP3b9q5ZyA8fdv3FZUJTazfcDkvTi25fKRk9w2sNJKwHFarwz8GwJz3NwL4xSt4i9z9SwgzT",
  "key44": "5WidYnZg2vNbE6X5NLkzrdsQTsSneZoDNhx7Bi4Jf2ago3QXiVZx25UaHaP11qHhWpCB45Z4AMtJ7UrveYLrsMGR"
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
