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
    "3W4hzXyiWwrsgYE7SSoF5mCMizkBfpXAptwmFeZuttAhGautztMwG2bf8n1E3TAsKaxGGjb7RfEYEYbWVDxGBbjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XxuY82QKmGue3jD3CbLLEqgVPf1B25AoYojNoh4s5wxLaqDiWULwKKVU2tmhQ8dBPJhLc5hR6H95BnffbJidMEo",
  "key1": "5WUvCEqD559d3xyfCPDh3PZRUSeu6HeZfCmYCdB8b98gSoWCUBL7X7568tevDa2tPetA99x55TtGaMZckPTasrNU",
  "key2": "rxYaGWc97ykb15dvmZUeWKbhNJNpCTJ56xAwEUzNSMemd9tkSVHBLyEYFnabFyFrLfgUbggEk6S9hGSTC47vAKW",
  "key3": "4XnCVY7a53h8bz3UCGLPvp159NAnnUxLG7HF3X7qrAd3Ru4QF9ketQyjY7JfzTCY3or2ZBKq5Nu8sN3zRQZUShQ",
  "key4": "2ZkVKf1dwxUpVDGzcBy6mUxDYzMtLLieVaPZBmKBqzAqAAQnzN9SoWKcPvpLsQefzPExWYFjdYkPX9Z3BkzE5xY8",
  "key5": "53QoQKjX2faWviQLWGtLgaCcYnzvu75BpsnmmobhkkGW2dTsBkS8EuJBCzTGQ5MVqQq2sHM2i1AhfuSQaQh6MSwC",
  "key6": "M3CiHAH9fyL3CWJQZMoPFPP9jW1vh65LChZNsmnQQVHDd8EKx5fhnxjLgKHMVWAcyZxZDnUSFkcLa166E3AwdvN",
  "key7": "8veJvWASLuG8tCBnM7eBrb66WKWZodaFmNHjrnw3kQKBoSegXrjdgsf4FPABzqezieXpKrfrMTFceBdZ5qySvd1",
  "key8": "48SBub2jx4fnA5X1U4uZgGWL1eSfwECSL2sLEBdR1mwSrmYLEenhFF4fHgY8cigpoJbpL5e3aLUzrg5oUEq8bXBH",
  "key9": "3p9URozEvz15pKfqucrQryhgzCCntKNiiLMrgQAbuwwNWZBzb1eyEvUkMXaLXzNmvNeoN3TyAktFHUvud6kfXuzW",
  "key10": "4tN1QdFUtZcti1pb64hg519a1d3wKB69pfU5qCKStN86ToG1fVt2QngKyDFWScoFyEits1u3dHk8p3NiJmx3GNRo",
  "key11": "3zjD9P3UH5pizavi9epSNJ5BewM6PzcGN1FD6pRj1x8a3t2Qv5X4bJYJUQKDCb1GsABUQVrzoTUAHBy6oQAq9Rmd",
  "key12": "wuC8pWmhqFZg1aUQec8QSQ8cbPZB3BBYbsfzRm82B5V8iE5KLUyrqF5pWYnhmqEoPdfDgRTZieWvmkPDwfNYHTD",
  "key13": "4FsgPA89x3KierTbWPQfZeASRb7PH9bay7YV3RznkeNRQmYv7XtuFwyChkr5hpxPaJa4osRjR6Eya8BaPK5vMiwR",
  "key14": "36e93GBpuxVcshpUrDkPK5jbKuCfX9tV7hLYaNb3jw2kHZYB3SiKBmMU3KGxCQJjeNSnpDjghnPtMWfc7uEUqYJf",
  "key15": "5MNd1e3McnSqqD54HJCr8pVkDFVUwpaGfegZSLbCiEsMMBbHXFmQQVUCpJUsjPjnMbdB3abfSL77nQdgA4c5YvHj",
  "key16": "55fasTKiUJJK4yJb88qjZ1nfddq6oD3CiPAqf3LSRwJ9Eg1EwzQr6koVdErks7TvapcG6ZJdc5Y9eVoNbyQdS4iQ",
  "key17": "bQQh5SMqn7o11wc3h5y1ChkR1UbD64uhAUVPGDpNXD2uB8NNKkfuJteXtJVAHVA5aMBh9WvFCDpKvYzpfCVYRYY",
  "key18": "4D4K8fyhH34hiVTK8uswF32E1Gc7NnNJhGBf5cvLPQnEG2P8yZuhM1NKxtPkKGi4eqcDruT3nrvnaoqB49rYMs7e",
  "key19": "44mkfK5yGZMdKxukX4b4ApUqMQ6CnXjhw2Xay7up9LmZb2ytMueVUiZowaBz8b7rZy3iABKaL4iiiXj3DkEKjE8z",
  "key20": "2257XQTjRdYRMYxQzLif6pjK8uZNN8WW127YpduVxv1Gp97mQenAPKFGD6vAtyhbCBtXisnW4cSBz5SC7G7CZMZ8",
  "key21": "4EciEUAyYQUmpeBjHD7e7pvtNyUSrFNCr83fL8uDnWAD3PASVt6c85kCfNzhkUrfYgzhRcBShuLEEL1u5Bd6DmEB",
  "key22": "9yU2QBfVtuW6izZsqkFBv9RPYpEQFhNzt8o3BxXvGdE7agKc7v8AAmXaAq2HD4Ut4KMTRxXewmE35P4LtCB82Qd",
  "key23": "3URwkttKCD4zW8C4FVZ5SkUM48f4u3wewqrNkLHp29mio3Jg8DuRpRC4MdRGftasLk49B37vRccM89Kn5Djym8tG",
  "key24": "492WQaLqYWRFjZn6t3opGwqZWiYr24Fh34STWP7H9KbvAVQRzRkygcksTfjac1xspT3tQPP9kg5yXVnaxcBaCruW",
  "key25": "5voBXutMc2wNqxRgfbrEyc8oCuX438uCJwuAturFF9696pBH74qpV3WdfQg485SWK3widqCqGarKbNkVvqsCuPb6",
  "key26": "4LezY8aKNQWRGpu1M6tcm3qRgSbvvBFb7roWdfRgVHNutdWWYp8pfkBYhrC72e9h3qaCDQ78qVrTdMFicibTpzgA",
  "key27": "yYUkrwX6ax563yi5unminesZe8d72jQXWdZcrYpwtT14tn8ZchNhJggUFBf9XoGwzf8FugxKVFXzfv3QEnLXZcr",
  "key28": "2rFR1pPBdfFmqFmxqtv5zr5iJ82BvCZnJmmErbUTzNyWvqXXHXoaxDZTCmGxDHwx8KsofGirne48tKEZaW7kxXzg",
  "key29": "4Y5eoP6Peyq9ucLLXTfDTGzWa3FqgRiseU6cvepgqjBq2L3tQzZSceAW5BhfqK94M8VLMg6jLZ81TMjQNMLtx6Lr",
  "key30": "2ruzMfB2cfAuTWGc7cWM3Ntg2ZmNVSKDhw8p9rtbDtAfFvHA9XgVjixBtiDLxFnWuU19teJAyGBKi8KYpBNngUv8"
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
