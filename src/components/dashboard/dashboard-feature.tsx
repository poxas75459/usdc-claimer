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
    "4tR26nVhkb16qMeRYaQpLajAi1YkE2HYiUvcThaZ6Mi3D7aJAgF2SswW8HsADqJ6uhznUZjDpNRkBrWu2AM3TEJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uVLwsSvoYZkZwAUU8XSd1skrGhk1rC3PD4mHsFeHdJcbh8TXfNvnSva7qHWbsXvFcB9QDMq45SBTBAZAcdFDcXi",
  "key1": "2TfNwBEdiSmqT7ALA3sSFtHMkhvapYi1n8gdBaXKuyUnRvs7WiWWhjAqLBRxzVnFhLdsg1BQw4ugTHAK9ZqWSTKZ",
  "key2": "F5n12JLQb9L5bvjsrQHNdXesrs2UjbmAZJt91uYTEfHJWHidqn85DhdC6zCJetM5MMT2cQuqLcnYMe4uWmBQfP6",
  "key3": "3TU2KZjNxrfmbrqpxBh6U5UzGp1XHGmRTsKqnfYNxPCo3vSXwH69gpyimo7yxji6P7spswB1rs8yHWXER2tA926U",
  "key4": "37JG53p2EJVLiMqhysA4nUr938DGkK8DL35dtnC9UyeyU9YygHXS9RzQPk9wzv9nZAjy9H9FsccYDJFC4a8gwvT2",
  "key5": "2QWDC39jbtYfenqRkw6DXPr5N68YHRunM3gvGu1TXZjureMmQgWcdJZPsf6rFMHvqQzP2rUeEMQwYjgEZd4sCXRw",
  "key6": "5dsvh1b1ZFh9FXyAvE2Eb2rDQF5LAaDBC3qL9nnS5gxHTDPWmryyp4PSKv9ici2HiRFQizq4JDZzqmjVVXhzVAZX",
  "key7": "Jp9Wud3BdjPiVcKTrVWos1J75n8eqiyCRuiBxGsovrXHaLSFaUjZdaoLaCyJfc77etu8a36UpcvTaz16E1AMVeG",
  "key8": "66aLna3BzDNze1KLyj1GumTM5qGxopc1zBWXnM6mV74521zEKY5T3gBKbRxoYd8YUdEMwJY4D1ZDragu4Bvhk6h6",
  "key9": "FPPzqXJZQzezEwtC8uoLB5uAtw1gttSESVkYUPK6Jk2z2HXnRtZNgg9aJ1kWhop24q2WppJEtJNyBav5ionF1Bn",
  "key10": "RPfk1NLFZo7KuFk4nMXYSbcZ7PJfK9oAAD9uc9rHHwyitR8Dp6L1gMtyvZ1DrTxbAEjL2RdJazR4NHL9DoXocqv",
  "key11": "3QBJNoNUb9U2SeancFNgBMd3jcfGCUtzb6yUjAJLEwkTwzKZmZBmB1LJdpBhNQjRkTFiR25fL9N1hH5ZYkEeuqCL",
  "key12": "HwYkPPbS4PDtnNcLNsURYXSeru7bj9ioWGaJKgecdneksis6PZjUWjAB5YFA7vuvoXosPqqGqmEW1KQ8ZMWE9kv",
  "key13": "4jBCEo6chALtrMAeTfdgMpMmZ8nPmNeVvtyXy6dDur2iwnQqrQbZ5xpmuhSZtSttFb1PvH1jt8ThuURixJa45Qr4",
  "key14": "2Zn8GY48HdvTLKwuRHk4mVAxXhXk6Am4FeyYYBQBpSAEALa31oTFTUHAiFSNm83TJ27im2GZ4i21CEojCwpZuqkB",
  "key15": "67AJZtk7NaM6Aac69ZVgAYw4GfQSQrLefnx2x8etMDhJHNEf6ymzAukbdS7dGANimcN4aWriEgCqqrPe9agQYBeH",
  "key16": "2BugMMYkMfpUyHJ9RU8njHaRJKR7W4FWt1mowxXV6DvhyMKcDQckucoUiagifarBYBQ813EEhFbuV2NPTFNn9uUq",
  "key17": "3Xj1QUUGqN4YDrGjYNtFx7eyPvjo2o9SCJpSphBNWQCGTXkpq9eZ9oRwfQrQDtVMoZ4NBRHn2qs9N12ucf43M7SF",
  "key18": "4zXcn4suq62psgVQcKch52AmsUBXknb15nm3cfatQSyT3wmocUD8fLyfy8PKw81G6UTpquC2QBy5D6HZWKG4SUsK",
  "key19": "439CY9KB6Dbz6XY9YGyc5ssKPTdibtyGXpy2Y3MfD1h4hm4VKEcSpkD5ciej9CMnwsXza9FPa4jRGpxqpciHphJm",
  "key20": "4GVwebyqm5Ws1vKVU98GwZqEpyBa6nc3kCvUnZFVHWB2pryY5FBE48UvLHcmvs3zdszdat3UDshszvyw8k1xqTSk",
  "key21": "4Tg8ca1xmeVkaiW4sDUQwj4pWY5Yr9EPRnp9mUs3oZPbA1NtiaE2D9NKXo5qQJPEBWENVPKU8GVpEnq2sezYzHgC",
  "key22": "BzYUmSrfisUTj747i8fGb9yNv4tDg6XmdSoaUFexvV9DhR7eWojARj6GfGTdCAdcNkZTQzN5EWpHSTBJYKFs3Rk",
  "key23": "3AYzVzTAjbtuNBxa2d3CbaBbi1tRqEpvY9cvWeVjDkJQrD3RPi6STdBVAwz3iR3cDKaM5dTUxoF985v24DkkNhAx",
  "key24": "3amzFahfJS63kfCWa6rW4WsUYLABk4Q68qDzBomzWgceKP5DMJyBmx1KQ9JevzAQk8QPoLTMpFSBGPwV1L2XK8NF",
  "key25": "nDixRpRzhKhQoQvy9o54jdCxwALDUBHjbAifaV7jKEubjmnXuPYWDBg3Vh9seJMJGmEwmKzs7FpbJHQYsmVLAeG",
  "key26": "5e2h7SZx1qJ3Jg1qq3A9dFzPkUfDsWRsfTLZbJ5XKHafmQCny7LvxFNnHmEfegJ4dNmbLNwWzom6wDGUDLUqVYCg",
  "key27": "EBrg5XMno99kYjt4zvpGXUsfr4otxToPvaGN1SSz38Lni76Fa9ZJxArgeej1UzTuTM9CRq4dnfmUbdMHo1zFdVY",
  "key28": "3K3xumfYGKimmtQUkrsXfrpyrj9CgMcdDf16oJgbbaMadG1uweVZ68jKgN2tBywSEYYJSuGhEbwn2dsP45tTiDPn"
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
