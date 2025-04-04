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
    "3F5WWvedRMERdpepNtw3WGBSbvkoPKff5ZciEoZ32vKcXjSsU3xgu31JBUXH1xvKP2gbDqPpnDJaJD1vyDhV46yE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXNRjz3FFtdampFydExbscVsuF98bUpjCWwos4Yzxo9445jV1UUW9LA2t278GivrHm3YUnNz6zKvPJDquBYcP4u",
  "key1": "43tcvkM9zezAngsppEGPzofGq7pdQ67EqWUF7iYWN26SNFur1cfJmbhmJz5y3sLm4V81GFJD6S6inTEbUrWro4NA",
  "key2": "2U7VhrBWLgBtQvU8WYY4zo5HBgzZPLd81SdVSFQ34L61J371Vu6J1HbnQVFhaYDt84fXmZ8HivQGgsqewszTfap",
  "key3": "5QS514KG1MbPGDEabPEN25EvqiAdbwpVgb4wXRuH5cCpXvqu5ZTpaMA2LHqSpEK5wrcp9ksCGrjuYmWAq8CUiDu8",
  "key4": "45QYpLhUEAcfMdMQpVG7kZgq5G2nD5953MdyUU1oBY12qjo5CthSb5MPiZTdXK455zd3aywRphnQv7peULN1BZRv",
  "key5": "2ttHTpYT6xmrPAxpdzCFkRrqfSLHHyNMm5e9wTrxU8HKcHaXoJgBXHsCMWdDwMggw6a54YrVV95xyanGKUhLvyfV",
  "key6": "2kzt8f6PQwxZZcC7DEoHCGEVFtURbryHRKVYAZfQuUvnKQ8LCKpcGE7mrRTA3VeaUTrATB3FKFLb1h1s467iX88s",
  "key7": "2NyomLSqo1Z7aDEwHZR5NqsQ8DKddDjevYi74ppqoKz7dMx7dDbTSYxwBge3NzpUWRTDhnYUduEnoKH4a3io1bx1",
  "key8": "U1cbX4iztjXELzi2i9UuGGEtv38ZTNSHF5yZeiJXyx9ug6wQrQGzuQWVL33aWFNuXsjPpHDXBYN1GEDJ259XM8q",
  "key9": "SqWV2WWoUnt3NqCZEE9YBYdVSPjrXoMUhBnxRAbzNktrD6dokVPqPPk1GWxHaT1Ryz3m222hhsoJVgAq8xd7o2J",
  "key10": "3vXt8uBifEqgsgdXTkMBRSQdQr9EFHc52nSvgZtRJxrR8QAvBNVQMn1KvwSmLz71uwnEbjqxKvock23QBHz7W3Dp",
  "key11": "5dnwVqjt89ybzQRPS2Fa9KrUkUgeiMeibnMqoPU9RFo93B3a4ofeavP63oYGh6sKdie8hePVTJhw6iQoUM7KNXXS",
  "key12": "cRevZhZ2S3dND6HGAnZpQYiZs3QwCLnJ5r28HLP5erV8tu6FNPZUKU3C5RTkZoQE58LiAC8JqDixBJDNz9X4tas",
  "key13": "kFyr1iT7jZA4svcMEHFx2TJmcjk79yHhf36m6kDGZ9GmtK22zNyd7N699VLEU8k1DZ1b47MxhtZc79AWriiSNBD",
  "key14": "2YDXeye8PqKF3THcf25aMtZzxCbBB9g5QyEQ478zHojHrhcVrSNz6oaLaAYwR7xJ2VRaWnFSaYzY7PQ2iS8FZQdy",
  "key15": "2w6oqHgMyWf2LWLu9QnEQAmxQcyZzbuM9aAbqNaMtCbz9S93shqnJEEBkrgCjtmphy4NVtUe1iZ4qUDZNoJ6e8mM",
  "key16": "5yZqDnkrFSf9LA7vPWHV5uCHNynqR6ndJfgyBZTFJuBADgWPibPzPv6LgroVxL65Phpeovzb5C65gmd25xYmJ9AV",
  "key17": "2aauWXCYywckLi8LagqTWjADKJgHHkUWSif5qczHi2gyxe6EyXggv8wMN4JfRasPbs6zgb3S2LBKUkaRdELvpWf",
  "key18": "2PD8scTdbzNTFJUGuMP325Vq7cPYdx6EavTtTfPgv3Xv77HwKRG8VLwMpx4iuqFUZfhBqsfjanYTyqJJnmoijZNQ",
  "key19": "4WvZhNFAWBu4G7hooNpZUJUyfsgS3x3nSuxBsnGbVEzu3VWf4PD15EzqyGc85bPmEtgv9q2bWrMa7dnfqjUcfLT5",
  "key20": "3NzHQhmrPPvSK48JH7hDS6WLJhx5HRzi3uaALRXyyaBtfigpeEHvvXVSwwus7c5TMc8umqEDKBMd4sicKWWXmS4d",
  "key21": "3ruDqctyrjMA8xbpC6wPzRH1HeUZQyvvjAW5AUYGhZuiTGA6jupE4QaT2xNoUgpUxjm1zLAZcc38iZy2zG7bCSoo",
  "key22": "3rmy2UyNBxDjG7BhFiRyWT21h2L2tKP2gvJVQo2m2fmaP23Qv8ETq5E86DgZ9x448CT9rYr3P3kHXTeCkywx2JK5",
  "key23": "5SqZz3ort6k7KvqzWwjYQogHzZ67naLzNeQ2VHJoP63iZ48sjb3PVjvyH8WuR8eCqN4nEge4nWdCHSozqjxyavu2",
  "key24": "2EaV7qtk3uJ5odjRj4YwMrDLwttEPaNV6doj4LdPXUcLs5nzH81sfEognWVuFhHZuFpokmXsjEfLHw5PopGosPT5",
  "key25": "4j4FfNzT2BSepo2kWfnHWjPeWVdMFfsMNK4HDRxVgY4K2FSnnULJ3TXUF8FqWEWPNzfkcSJWG3rREPfuA6ZJcsW5",
  "key26": "3FwG3VXkJJ4KaiF9PuDhuEQT1Rduewcn1xZrr5a8AipHMyZgyqa2vFFJUm2VY14QEr1zf1gUSBuVyE1ut5NiyEYy",
  "key27": "3QFk7zrULrQ6VHgESdCk2D8Dk323uvdzfhbsQrR845z16ghwmhKC7mDoGUKBsrAEZXGrmrD5dPqeLwB7Hny6XZGW",
  "key28": "4g8JvZaiV39t2vdSSgbdnZRYp1VBoVSaSTFSHYLxGLFg52H1D44MvAiCApkiUQXbF1CXXB4dmnG4cv8cxxA4Nsxp"
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
