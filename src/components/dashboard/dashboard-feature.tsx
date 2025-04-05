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
    "2k8jBEaLmSG6ks71n1hdbGhDViakz7Zbr81kqWvRNt7oge3gJoiQETs8gJXFDx8mttaRHFFd22rwUGHZh2N6TnZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56zVztUyV7WePsVvxkddEE1PxN2w8au8tgh29cHeCn8ophW2QbdjFbN3Y2oNZdK1k3jBmp4b5jeKUArfayNqzmjM",
  "key1": "2R8dVyGtvSacxF6UbyMTUNmna1WNe7i9ysZUtDME56Uc5w5YNeAc2NHtHp1pAD4jrPaiimPfYkT2SWxo5V5ZVMNi",
  "key2": "RfxAQTtfY98uown8fWzxvWyUUE3VZ4oYD6svqbMxUbypEbouNTQAkBzxfYDzYQEhTxUVUFEYBtywNmt5USoQVc3",
  "key3": "5TXLt3Z6L69RMgaN6WWqRR3YtPayV1BiwpAFXDmTx9R7puzycrApytMy7sMhQdcK2b6U7sCM6fyzq6yrsvhngbhG",
  "key4": "2ZJioWVegttStRRewjj2wE8jFx4x2qS5UXtieDrRYANnWmjtZkikGksBydsfZ1kyj6ebvFwN6subPoDJuv5NTmu9",
  "key5": "4f2A2jEsQKR3BeeYvpJVE9jXCaGKjFdFUUEnaFMKzM8E8symJzfuPEsTm1mFJ3SwoAcyMATVx1ECgDPh1MQkMR6U",
  "key6": "4e9yyjML6SFHQE5v3UzbsP6poEKD2aBZHWsLqEcYdoy2LMkFiFs85CVj4n6FoD2ycGBHubef9HPSmabBsiDUU6Z6",
  "key7": "Xn1hw9NRSDZQDURve3XNPVs2p8tzeCzMm84YkMVeX2VHcDv1gAa7cfYjHkfF2QdRyqPAAEcybz4eUxP9RJFRiJs",
  "key8": "3w9B7ahsy8zL2rZJNi4oPp1wFM7i6oRjxADaNwGnZooGGuFT1zZEergLk6cfa6DdchLpeALNRfesQWqGfAhrvQyG",
  "key9": "3xP6bY1yFRD47q11tbaXrGQapaWgJDbpLweBhfHCYBP383e8KzJGNyAPGZhRzNaRsjUNv9JLJcT2UchjvhN6hyMr",
  "key10": "5knqqi3Z6ALVNfFuiwbke8f2zAqpUGM8BAdQ84KCrzR8t5mVoCMhEPp2phwr4VB5AcRDzoJmGu9BsQFRUZJ1YEKc",
  "key11": "3AZH5xUEmq4Th3HsA4bz2fhXqJ8hjVBXoK29cbDGRs2SYSjPcfGLAqrqCJT4oVXDr27zLzBtYA2WN72QFmUmCFRZ",
  "key12": "5p47SPeCdDmSsmZ1gL9ZAcXD1btYZU2zZZ7cKB8TeLrduwm4HztXofM9XZ7iqHsQvuGKX2rUY59BDeVK7K1rXoya",
  "key13": "3DbLQWQfNAgGxHaQ7gJDhS5kRGAmkSPyTV5oUP82Pyrdo51VW4uRtkCgCwPkYBG7GjqMLFwDDrERvtYSoidt9MpT",
  "key14": "Gywe5J4aJSWKBMNSxonLdGRacaYptWPKrQFCmuku6oWA6D74wTiaadDCLsLrpdUEGSY2f3KQQw6GuM2etCSGNGg",
  "key15": "4WdGhLv9CRp3nbL5sAgMjwqZTE33zqU8ZYQJKdnxrzXqffuX59mey3aBJY5C478Lcz6qX3APDqe6fwFreBoMg2is",
  "key16": "5nYBLs9fyhC1mVvJkWT77Jz3JTT43qgRmH1Nr12DsUXnbHrNgqa1HRRSGA6LEiCrVas1jFcjQuehdU37r6xbNLLi",
  "key17": "4sWeugRDUpgezh5bASndBkhjd4xX1wdPCcfs8JayvAo2xi4ZM1QUUk5KmgWHnpqBNxzTppGBS2XqseAxWqA22UpP",
  "key18": "4TA6XFe8KskdqSnLbdBJuuVqs9FVzcgftN2TC2AjdWdcki48BdcbeJyUecbnoAJicY8LyGFaCv9qy5jHhzk8d69D",
  "key19": "Rbyv2ufnbn5jpV33Xvt175g2cZeoXQmsKyXRhms9aChLFp9xSrRTbCjnfW8UgfQGvyRC3N7dtZXzUSxZHZ3T7Dv",
  "key20": "AMKtFwoqKKKL2zW2mKeercXxRYj66g7DoBfjcKekBz4EDv4QuJSPRxwEMnQsgtPsH4H5E7boQBRLMqcZHVWgqHf",
  "key21": "5iXeNoW7bTkWg62jNh4WX6cELmp5eAs99iPntqMqzu2xsvPdnnuP45tsfNknJV8fuUudiSAXDthwX5EuNn8jS6c2",
  "key22": "9q3wsTGszDeQzFbYnfeSrjJRFR4MRxxK8das3GJwGaDu7kye1dqyraMXKWec1gfAU6jnExjv2iXvmvwwADfh35h",
  "key23": "2YyMDMSS8PGUhVxix2rRDXRnAvtmjAX29UMhxuesHzq8etSoaC3kLoLZHsmWtdfrAkLFwf4DM8a3rq8UUqaVv1rA",
  "key24": "J94qHMLVAZEjBYGQiyMTmy1rXqsw1ziVUzxYaaUZ5GAYUA1arHgs5he5nwZ2aGG4fzhVt9dTCh3cJ2agYo7ENju",
  "key25": "3t6VV2dhsEP6CUUL8B85tusUpX2fkxRUTjPpWX5TsjSVUjaCtzMfRRiBJexPJJybMaDnnxb5mmD85Rz8DqhzkaBE"
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
