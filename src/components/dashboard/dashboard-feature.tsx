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
    "52Mz7bZ573FmxHJTnxxarH2qZqET3fV61jHhYNtfrHqnNvNV4Uw4vtzBd8PdN5zvXWpP4u59VAZ9kx6LyCjuvrq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oW3CCWQPw83pEwCR1JYq2uojmdft4F2rjKdqNgxeYkyzfo9Q9tPJtKA6mFabKMEfBW1NdTAmSLTxRFJsjj8N9sa",
  "key1": "52EJxGgBWFH785jb3UsmzmQjcTH9jdUQz8xshTUvdpeqzxBrRfHNqjTCHo18r4LC74h6WhY2Q88fNWo4KetEdBD7",
  "key2": "5xvN6guFpUtedqfhsNAUiyBSzjDQRE2odUHNPtGN1kKWWqEP5mbWgztkucxiZpuVwo2aHecFyTHWWNVRjcBTYz59",
  "key3": "3KyDSw4bxNkjhaJ9pALf2U9FYPHGtvUWaaRA3c2NmLDigYGVFhWx7xaeUktVQKWeLDc6SaYBxrjBtvY4Efe7vSTd",
  "key4": "3XtwXHozHcUX3ixgrJ1vCTvaCPkRcQFvZ6NKs5hu3qQ5XSTaPJZn5uqR5HFeesfRFnvN2MqW9ukmW6uxtm79Nxy",
  "key5": "3HjR7BcGPLHjCcfNdc1xNWUM3yjPV1iiGuhHL45ESyYzrbtHJsYegsJeg1B5bdDk4tmzhx9muUT43Ft2Jdpx7mnv",
  "key6": "4roQwvXFwp9NdP4Aokn54d8RiqabEQ1P5TFSxj5C67VP2wcRy5HsxJ2Lq8sjwdf5MiWEoynETSEeoL5rkbMZ6tCe",
  "key7": "2CtL1GPjRh3c7FzyPW4LdN4u8nmGJFHmFRMRYwiaB6tTstXztUFp3GUq1ugKwdVF5EHB27ghfRRKSE4SzCW19BCB",
  "key8": "4itxzSSuHpMcihjnoNpdEBiYGihmMCaBv543byQD1YJMZuSqeCqRP5xLZsL2i9koAYCkSntZHuLaGSFu5D1TN26M",
  "key9": "61DtfyknQctNxt5v8oTs6ikVaczUqMdeSbDxn27FMjmcAKxubKYeYhDT3KGcagePEHg7JnWd9KZAmZhjMDu5jmrP",
  "key10": "4EVXcAzMckv1sMV9CBpdBFPBuxKDfHhPEp451qy21nTJrwL3CxksZh3V7ZFU7q5h2f4qRiMakhGcj1iBcNKaYMAK",
  "key11": "3fqpvBiLWKX1AN5c2s9Eh9kb43EoEjBmCvyZUs3kvVgtRcS2RnkWyKKBVfEfBCVvhETnkuKerZd5RV8ysPTpVjFj",
  "key12": "3QZE1MANV5768Tm4DjtQC4sYSARfMTPNJ7zYS7wFaZ6ijSKM4n1N6vD7T9QWAnRLFjegePPsTUraqSRgs57r4nMu",
  "key13": "3mMCjiftXGJMRN9ppp36GGDEWuTnufbp93XT5trpmC7RnTpU5xmHwhjWHH2RYqan4ZjB9yvadby5Jhe2Y4vHyJ33",
  "key14": "5Fw14r7pa4oqe9sA5ThBVnJZJHuLsYw9v3TjpCkW9VasQuNeYgb6v5PLwkmmdQtcL2WXMHQhCAXy3YkXmhuZ25tN",
  "key15": "3FypKpaRRHeFBdJCrLGz1f7EgqLeX5q277j5buAUxijAygdBr9rmtXBkAMFfCeoi6CjRCHXLDfxhUr4o9qEw5avt",
  "key16": "F9QiSnMVj8kP8gVd7gPLf1gU9fWvSpDMR8BzwTKgK7sDbsHgFWHrEpwDaNawpmkVJozVeL825aNtDtmW4r9kQ9z",
  "key17": "2cBcTBR3AA5Lcg8zWh2xox4ptwvfrxbs8RH6dSfYdffVq24BZavWgndcLPaxHS3iRGs71U7HetJHrABVPq3EJzm6",
  "key18": "4FEQPu9ooBtXJMAHeRqYkozzm7wFZ6TJwz6gREMTTHdSBRMH9uGRrLMA53VrwKpa3gmspbfXsi4fUfVR172Aerzs",
  "key19": "kDdYZXMaFbUyYkFFDLwjM24zdHYHtct9HFMLBuGdqyNdYtSrJ1RX9zqJvHrNaNW8hKVhXXkGQJ9e9bVnUD5tibK",
  "key20": "2gxyATD5DyPMzg1NZJBTr9G1P2Lni47W1dhWAcWNA1UEp1dnRm4Qo2Yrm57vwicVRz1D6rVGQ5HnQDegK6b1xtCJ",
  "key21": "335eUhQMKLxWToeAB2aijTKayujztWhaCqwPyy4kgaTE4tnViBFkVGNuiKtjrVhmUmuo1LAnejUavVgH5zXY8CsK",
  "key22": "3n142U4W7PGHC5CwaAcbKE9S2orstGojaE8MWSUhTob1Rs37MDmA6LTvTGDhfKxCFHHN2AaYDQGRirtGo17YHP4x",
  "key23": "55hPoEBmxgYbQLGBLaF3Kjq5kEc5b4mE9CqzFVf3uuTK5ajmXtELcbT9XnyHVhyHwF62utJwaGGSEri2EugSGx69",
  "key24": "veQBjuMf1XYPKn4FzcdbM6KRbfCYbgvs5QnbvYrdcFi1FX4ChnJhZqXQWE3wxtExUEuVKopYcDh6gcHRDQFBHpM",
  "key25": "2gyfdiav8rCgY22kPbhmiy6L9X9nr9wnkG8DBinq3huP1MhskjME5pEgXf73tgQmLtgrjkxKE9yGVJtLwL28ksPk",
  "key26": "3zB6aAvWDGnuYMgnyg9U2YhkrRrthqueMWMhf1paLgJ2ZXRRADRzAoskmRFJbGmuNNFVrPBaxdDhu6JcMQ8zPPK7",
  "key27": "3AVXHW3ZX9Ceoh6MyEbwQP8grjawLjUsc1jEQPd2CXvoxYgJkhrWxQu3P6YsjQMBvuNEcrhLJeM7REVwJiwcf4UT",
  "key28": "2yoTm7JE5REgSQStqpeG87MEJng5JVjicFojbBPPVBswueJfm8mXZBJbRAxUpEe81huQadFrqh8nVzZfLSRmtVmn",
  "key29": "4rktZeU9CSVNNj3u4iauXvwXoxSvZ5fsEQvT8e7u6gyKQ4QeeByDRvzXiNJZHRCVAv3MFfb29r2U24hvBR91NaRw",
  "key30": "5BMmthX2DvrL1yiv2sHEktReGBxvZCwmi8yu973NtvXMLnE5reqVrq4BcJVuHt2ZXxT7g1zF2qVJa9Qg3JNE7WJ5",
  "key31": "Ui29vqMWUfoCgtS7KcXCsURNK8ojoeHY9T8da9q3zdtp3gREwrpouXMS3oABDEnskUvwfSEuHNeFeG6hejmKdYn",
  "key32": "2vk5ZSXry3AcGNtZZRfQNTEsXoPPNVq78JuiSoK5mhEy4Mu5LHqEDC74ypWY6CJDhpPjbuVXbaq6K2ckWxPqJDLK"
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
