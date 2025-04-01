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
    "vKJN43Nh6gneK3KeuykQ8CY6SwxkNihV975X8Hv4kNJdSDcWmPYFaaaTyiGUZje5V8AjV914fAhYdGUHWJzWYPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NguCgUWFYV43qmWuSZv9Jbx3SM8dBKo83qDDAs2jEu9vfShemRn3cZZz1HLV2CBr6nmVcWFJHnwN6PSSdShU7VU",
  "key1": "3YgUjNQvxHQG761tftDNqezddkCeBhGG4xTGsv2DsomQHABXNdHkc7h89Uj1VJd5zbP6ZTtZXwByqo571CfyArHk",
  "key2": "2T8XsVAguaakSK1kKdC7xfP29BJsCgGcd1Ae2cJqPUiBRfuMTHMj5QK2vQTHE5Q2bBYRZtdGvE7w6ynET1oj1f4g",
  "key3": "4sY4seUJnsP12kSGiFauqWhecRFNxKtqsRrtyp2cNYLFuoSmc2Cseh3cW5rawaTAffy2SSYXM79DQcu3RKMAyBi9",
  "key4": "5xRqsBWXo1c4QmG8qqHrtGxT2eUuWosG8g2MXqVz5rvSxpYraZrFLLFnyfdhy7UZQaLoJ6nhbv2JasVYDViAQwV",
  "key5": "3n2Nmn66fCHhMPC7vi3nBgXWXFEnToJ1sHJkhTmsiGzh5u7m1T8AwesYvhEoEYT8khQrPdhmrAm2i6vNpeXuYEs7",
  "key6": "ucZtk9SYAhKWuzZr9mbXW4yQyihYPRQtuTdWNR1hbiQideX6z7ix3e2ZD33qwby6H1ht55EZDWCCVmBKotJGjVa",
  "key7": "35H3sPhNPaQ5xsHZWSUPQNCwfYJCg3ykRomgu5J2AZV1NQzHwQ3CmUSwyDmpda4WudhRHbrsBQKYphUXs85qWxn4",
  "key8": "2ninuw8omfzT6djGeTeZFXvAMs1E1wsZcxBJro4kJ1Bix4Au9xfPqrcSbQf5mTti6Zt1FhipevPFVjRqYDnkEbfP",
  "key9": "5Jpji72tgU92ZFsThxNX22kUBuEdAY2cLNtLUDvZdauAmY1MJZgkwvEqRJ1qhxzUdQdEHz8rzr4oRRVWWYZUsP5u",
  "key10": "tm3u9s4w7pTqm4PpFbSBE4q2r8em1JLbqCYTFDjyjMhZPxpFpf3VzhDtxa135MSycwAm87xognMja16H9YhpfAG",
  "key11": "5TwnMHgEdjNqdfpbwxqPuCEvukoKR19dARjRhnFrPqp5n8Vof1sKrD6t7wN6AnNbuZgr4ZmhUpRPRPELrf35v9dU",
  "key12": "FgYx48wPJvm3FtmKJW98Hks63GEVFWj7quMtopK8G3L3PoPNMaX2rTB9bj3dyosowwv1Kd9fq31AVUKH88QGb7F",
  "key13": "3EQuyS4n33HwQ5ijK5nVDx6m7vJoBJ68dLXLtq9nspWJmUmwGEumy3KUVoTzyMUisCLQTPwtM4GxfzktTvdMNPhc",
  "key14": "2CALX5SQAvEpid77PnUQ1jmDhakNiqQ5rSDNG8d8vNJwR1EUfQMe8WCnDr3rNgbJaXKmrULPwn8ukLnsYSjFwfHa",
  "key15": "4tdPpkf2VuCx79XkShPXP4dy1yFNF65K5QePuNhnMr3sr2sb7BsKPrLwknycCfbQnUejxBXo82JZ3N58Fh6ucR2k",
  "key16": "2MxDgVMmEKYFVGhRGGxM1ZJE5eL92NePfmZPQcZps7bjpuzVkCVxUxKBTEhG8fTg9GBgN6UM4kHJRbM7yjr6gjSP",
  "key17": "29jy5paWCih9UemvhRHN76S8nuRRBTa9FQXS7CPzknm5hxtS3KKx3zeUazXLxiGLMaxgDWue37rbxUdrUMosVrNJ",
  "key18": "3ZsYzhH5kq2JRvpdCDQn5NPURhFU5UyAZUcw5cB4YXWGTPLxfMYLvqYotqdNPyWd5n9q1ZNJP6tBLHNCgFeGpFgd",
  "key19": "3DsfLdEBnzbXgBjcpQEmFUWZrndZdXzyedV4bvquQCbvQ28efSyj43tAPnthZJpysvR34Hq97fyTKj8nmUjBspDF",
  "key20": "5x2ZSFFqAzxxMncHvoYF4v1gqtupsYqxEPnN6fqmwFMFpJzGSCurf1HVs6cjcyb7y9J9tixEHDMN9aYcrnwoMmUM",
  "key21": "5Sivx97yFsemMnsW8TAqxVe5yNc14o9R8biA55sjB5548hAT1zKcFkWzaKM5vvnW8a94QfS1N9J7meSnoKWZpQyi",
  "key22": "47WhWacMSzq6XjY3xZSFw1Ebu4mfjPLQLJuMYAmjP7D4kkQc7a2sYx1a5EEQMQk5qxw19u35bknghJ5n3JLyvqdn",
  "key23": "2pvXZckxrscBZp7RL5DFqrNbop3oJR522TuKkeyb7tL8Ka9AvwQpQhp2ETbipoBGATA8Gj8UBMnA5k9iiYhfsPJQ",
  "key24": "2H9zEFEttGV83Ae2AE9QZWySsvVKWREhuzjVE7SRxHxuNmYus9XXDjwpHSe8HRZNgA8nw4ow4e7VsH7M48Dk3nNi",
  "key25": "PcEYHzv8RigAggW6hsCPGSfQom1pfCAxKyidGTgMVKDA4j1KZA1yKwwmfYva13AbRb9RTG3qRmUFyWhWWUxEWVF",
  "key26": "4ivso5RYhAx9tUBgH2QsPafWox5dK2gKDN7GCTZYUFzqjZ3NJ2xKaobaFXzTnUhCcgS4K6wBLkfnVJ3u1jEMYVih",
  "key27": "23RALp59qwBXWU661iDiajfbQWzevPPFBGopWKws538rqLpuvD82jfoUXJYNKqky8r3W4o4dqYffYJa3u3L8rdfH",
  "key28": "22zZBsFBDypzVnskgwAqKMFGh66Bo5rZZvvuUN3Tk7P9aqzRLtEMtziFUMzYKrpKnDnhFiwoYomBEknNYLdSpaCT",
  "key29": "BaZAWagDQpJHqZaFxqCYJUjtpL1MoqQpC8L92DpQKALc2TPr2ZBK1A11bjS3uv7zLX96d7Dw7eAzYSthWqUVnEZ",
  "key30": "4uP2AEXfptY2QA481b9QeNJWkvYH3SCrvQLQBn735oLn6vqc5z5NTFsBzQdFxdepCH1pHB1LbfSQQCq34s5WDJxo",
  "key31": "4f1exFLemxs1KQgJD6rkgDs3SGwfvhSgSMhCdKSgfs29rc33Qp5MNo7T1WJnr6TEGn44CAVQNuJPLrw7fL48MZKe",
  "key32": "3mFwNCHiMH5M3jZZo9XVzamek51CU2rp7zCiWRZAcesWKu7MwWtk38z7MCcCisoh14trratt8kSYdhTG8VYM6y45",
  "key33": "3vvF5AbjMkn9CpZ3gXY6aEuTV8s3ur2ENkG7jnu8x5dF5V6ZtGzeXjGv4qzLZQLNbKvahp7HHJFthZAKTWsZ1Dja",
  "key34": "63qrXUx2LuD8ToV1KYnb8ARYzZcNL1XYEgyFJUMx4qAjNcrLKBo6ze5Ddbhi9UAFjKZJ611ZkzuFZfDQW4DPTXKw",
  "key35": "4bNrCavGsSmvo3wXsLf7Hhi6pBSTsJpGSeKd3Se8gXZTfzAVf1yfR9DbTyJCzM89bAzhH5RhGT3guR25AD9E27Mo",
  "key36": "4KHMf1f4hqj6QNPY3Gw2Wq6uGyP42TbhvuPXVBBF89iEVpUnCnwKmT8UmWT4JsyA8fd1KwtieKHpRxqe6X6vjRgu"
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
