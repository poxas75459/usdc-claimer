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
    "nEQ4idTWD6McrQ9nGYAVrqZRTNawfBJUKNN3dkEWZzzpBwFw6x34M2cyhMdzMKk7vM84Sb4YFJZfg1xs52B9wqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNZdkVuXiN9sRwzDJ8TK2sfzN3mRkrgLRtoeqHGincFQBb1fN8i2im95c6BDRr152xNEGYfj92nGnrb4V4EBaZh",
  "key1": "578obzdRFAdmkWMg8tFD3oMGYTF49TbAZfwDxggHKmxh1wKKCxxEYWJeUnN4F2efhXRP7nXAN47C5CjvzxCW7P2X",
  "key2": "2jrn9MvDkdJCuR3v9vkHFzWqy2uUCYDufg65UN5ttW793ozWScfnmTnav3tuV7pseDjoUHDKT4nyAwznqEexS3Go",
  "key3": "3KX5eRp5gZJEugU23hH4jq9dKSzad6bsPib749ZWPh8ckL4GmV19qT4K8eQT61sVtDBQJudsHVEFmxRmLZaLoBgP",
  "key4": "4TRJuA5KsoLavYuwPuFymhYY5XT6RVLQhL17HsnXGywojC8VYJHiqEShXysKDe1144NVh5HncMykwqyCG2zZpcjt",
  "key5": "56XUZ19gjJnZujjJzDdSS8DthY6ifUhxjMkJE3BDWGVQev1vGJ71PaPRZvzA1dYhD71tB1D7cayzQMjeVL86TjFU",
  "key6": "2pZXDhX6JKsT5k4vWGsJwuxk68oZRWshxZvocG6Gyrf4i5RdNXTjvHSgr5QPJfpLzVifh4nXHiEH4s43owAtPKX4",
  "key7": "4FNnvfHncVPEYfo5vGGT2wYvCYHK8heczhvCBxHfNZ2oqDfXrDxRwaWanPbUz9WFNs7xZm45uactbqsXfVBiwwL7",
  "key8": "22RB47aRzJxoVw7NyvVwuxzAtrESVWNVG7jkXxnTDnjdzosLqVgbx8quxJz2hVKmaDzx77sfn1uai9p7sF4u7RgE",
  "key9": "522BQk2YxWLGz1pCKkFRdBjjaGFtatFbPfxEuFHvYsqpeekeh7qSXj5LNEayQZkeLw68Ys22srFnBHPdCcj79GGr",
  "key10": "65ZrxfCDzQCoUSMsaAYzEfuWEK8Exmx1L43Y7TUGRu3KBUFKKUsLpeKxfqnW3hjrnPi5Vxe9C2y9eS8PRicg93Em",
  "key11": "A2NN8mLSndwtMh3u8G8VbMyiBQPe3r5FZ6rZ3MzRsFuWrvwW5C68tgDG2A7ifEEf3wxSzfVoRdPdEAZ998nudqW",
  "key12": "3gY4qjzcqUQj6nVbyXL8Cj5LVACPfY3u371vCNnJ2sDq8ddD8RsDuL8m2PosBFKSMgbUgergnaLzx8A5L9tmnBwh",
  "key13": "5jKrKG1D5jsFrtCR6pkipvPhagc3yVx7UqSD4kwB5EprwgpsiSSDPLFZhnM1V4DXrrgud44j2nYSsi5DnENP8zp",
  "key14": "3TTpSJd7te1gzizzmD49DWd5Es2CLwEwiYZ2Hbo4cWtN839ZNcKPsnWZ3pcK81KmmovSqXJJTQoRCSFxTkkqdeMi",
  "key15": "39zshcVhSaPwg6UNTPCrcNtf9zCiQPii4baKTYgV9SzAP6GbrbeGs5mxGt7EaqYuQvEBz1aADaEKfsoBLJuRGCTS",
  "key16": "2rzjGTR3D4DpZa23RtEirvF6JhDNZGxWxZPykYnW6v9qmz7nLqpBk7dCKFU3orxxbFVPNsYDw3BN6eKMM2ifch2Y",
  "key17": "39U7hhw25s3XBjHqiE8VZaXN2aoQnx6ogMXd5SRYwnrG1eSwPeJ8xTzgPe1iuRNt2mmfcBJq4eF922T4pcPnSaua",
  "key18": "5QeLfk1FuZviFbxsCnXc3jGHHNQfEHVWeSKngSjT2oXDtp5NegvzP2DAwBexSQJixGaFRPP9ShFViyNhP6d7nSX4",
  "key19": "3c1G87KQNsMufokQZdaUzFxmALRtudA6Gz15rWW9L4FLo48EM6DHc8KZQX3ZKxcQcVDos1fB8s3zqePQQcpbBo1t",
  "key20": "5vUFiS7sJrK3fnrNX1ZwYpidoWjQLzFwgLTkgqR6jnB77x11uVrDuwf6V34QsZfU2wexj7UfBYUjjND6JfSpZtmA",
  "key21": "3PgAEyvEHm88Q5ziHEefCWtRtw9v6WR3dYg5s5Hru3rzxDKcMNfGhNE8Xmmb3EzGL9R6EL2TThoc5E714n8f2TyT",
  "key22": "PdgQafdz3H8Sovj4SuzvnWvpQKBSpAH1UjBn8DschYy8FSgVXAZj4mCFXhoco1Av8DueGgCZdu5CQFVUKUKUhWJ",
  "key23": "5KWjPNRH5eGeKs6mGdNypEX1Dt85G2MjXhzCHxxcZ2UTJhoVzVbs5uJqRbufUmujMecdomE2bSR2xmGR4fueVUCH",
  "key24": "4KTUBo64ojcQ9uaP8jjkYpTBpfvU1aGx6bfV3XybQWmBHSS9RdtPXxYw8e23dBH31u8nKxcehvrzs25bQVyMFosn",
  "key25": "cD9iajTZK8AMnEVQwgc843f12SpBtiSBHMJQx24cWWUKVE1NMpBACqHpbZ1vGu1ryYE446YfnaSfZBZbUvLF4RY",
  "key26": "2jogAUPzPcwka7gHFkAcyY5nEMVDwtW88q1qutSCV3YYwkjvBRCQ9sai3B5Xz9EegKEpjQjiEifnEk67FhGSyV3j",
  "key27": "3qnRvrRScFE3FYaHnn9oQjA3V9WsQTC75R94gVTwd8dnjBaUQvjZ2RQG65vgqDc2h2zCaq7pTFGYgSM1U963q7nK"
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
