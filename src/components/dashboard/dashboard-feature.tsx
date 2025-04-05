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
    "464XKRdKu94H2h67rFZmbeWYkYW4UXHDmgs9M2BFKRVtNyUKVGZe5ESPvQUK6GPjTCKoCm1hd9DftYKFRrcjwXk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srBRrewBoD6JKC4Mg7wT5yBbT6EMwE84xkub2R5EEa4vKqs8dh98GgXC5kAoKqhB4dcWqH6szh59JEwRrJs6ByF",
  "key1": "3vi8d7715RtUPHPKc2xHS18TPBjqGo6f2gC8DWLCYhnHrxFPNUZXts2nz3LA7omnxUe2iB6qo7GEbaMzhcfhcpwU",
  "key2": "2WYqe9XyZA3NX3Cna3YT6N2aTSYGepiZzTbjJDZQLSRJ9f91nE2iA1NPokTxdbydQLYkF6j7b9CDysG2athJm8Db",
  "key3": "CH5zAwH4ezS7f9j2srFLoWKatEKqZzeBsRTuaH7AjPhYos83oV9bSP3WWxR6m64f1JgEuRjyYuQPkHimUMVj1MS",
  "key4": "5Eke5kQDpKbfwoBvfTE7MHo3UFQAeAVQnCCHfafgGbieUWfrA23jzizPyb7ptEvLpc3kFQM5ehtKzGrKHgzYxxoJ",
  "key5": "3FqBJzg7BtBJGsxcY6dyJTnw4GvpuStyHU3whtYSiWiA3HFQMrXrBdF13yM13zMbxcfXngnugFCbdhuGtzH52Eme",
  "key6": "3JA4rfrkqRDEhGBGvi7PsRR6YsvAX2M5Ad8NsL4uy3FMeDDu1cFDpEMuEfur1PfDJVfNFvb8CH7o7zUswukaNYLi",
  "key7": "2q7heAxXfe8QZwM3miWQ5fAErrqayFPjW6xFZCQggYexq2qbqESV5gEBGr5out8u1hBdJ351Xxp7tEBR5Tn29XQw",
  "key8": "5SemanGCyFmoRrS7omYbzB8FF6WWATLM2KuodbE7bzVXXbhJDL6sZknj35B8H9iV9H91qtg3DiinXLXgn5KRmf38",
  "key9": "4hcHKxPdMgsLSRGJqKA4xPsrNkWv35wcARQEkLG6H9EDWnvU6zYQ9tTAfqU9RzP869mQ5y7XqsHpfwxuX8AsxEQK",
  "key10": "3cwUkwdq3b69QS5tFQQyVyi6qHFvw1FbNJWxx1krGBUZpkmhniSYB9zzwGseEkKwCm659Whda4Zk8BHDZrJjLe3S",
  "key11": "4T7KJd6drHtv8x92xigQgmfM3fa5d4mi5GCT2vkPV3Ych88ughuF95NpGa4n8cAeh6GaY8VXrgascoMZj8gR1Vbk",
  "key12": "2aRXZoaiuCmgS15PtyecuXKsAaBVefcV5cy5g2iGJpscCC51oQtDKvbVLwg2E1yTkAvifZ5NvrHw7NXzN1eXUmrL",
  "key13": "5MzYaBX7r48H6NFhJCEjLmJ9wBSSoqa6xYWGt115HXaJiQQYHcDwmEf5Pwn5pqt6hTocVYacyhnKvALa699UF3Zv",
  "key14": "3EPpWav37p7qL8itsGRgNBnAHnHtXZ4q9yVrjtjpVGyLpj8zjCk5tTkUdV5igJqEnDkeBvc7j66Db2cXX5kevmNp",
  "key15": "5AfF9R8FzHJi49X99xSY3aPQTj5BxaxnJw1oscQzA7FVKhpKZewJcyEf4HN38QNfCygFfyk5dM6nDCtPvtxFfS8",
  "key16": "33hjtKMJnwdVd6pWh9uu5LFJrN8z1DBgazBmi2LHHxx1HB75PJGh4yVxAj5uh5gA2oAFRZvpsCMyo1Hc7UUvt7As",
  "key17": "5b4VGQNkYeK79giVH9kn76P1Vkfnb2mvhGr5Rook65ZkGydDJNY9ak488Tz7Riu8C2EHPUm489bM4ZPX5ZByQ76t",
  "key18": "2j1W597eVkyFpXQuJwRpkChs6JyGbLd3vm67cuuMN1gDB2v7bUYuBQa7TG5rbEvg2DbJhR3F4shWjt1AYUGQN25Z",
  "key19": "2Daiqej6oAuwZvZXm4aCtSHsoPjwpNzKHNfgDNTW2GTqY1njWgm5Min2xc2TjMTDoquEBM6DHWCiYMLF8M7eR7dK",
  "key20": "5sihFnzcYZyWvEsHiGEYvegYWS3J7z2Q1FY7rrnNP8oRmMQACSXEkxXuF1bRrYVoY9dqrM3a3pDznaDEuUKAccRw",
  "key21": "3pFjYDSx86PvVjk2HMgkp1SnnXepPAUqzv1dVeYDQSV1reQPxZeyGQA5ZFjy8GZSwF6LLN3M4XJ4w2XUMwss2qCD",
  "key22": "4J4rz3h2G15MzSKp6kg1zYo8jr9V2wA6Wu6F7LXebhFZ3eLKUjp9nrFUZqCDL8qq7VP7YJMRT5GtzTvYX4bP4e85",
  "key23": "3KNvRUg7hCe43oUYEGX18fLoCmaGaco8rdi5j6Myt56zsgWcfzUy5MKfrN7kGscsmGMFf4JCuKehX961DxbvtSTQ",
  "key24": "5XCCTGC6rjWo4a5hMu67rzddmyzDSAGGKtMZyXWPknEyyCeucbfzNAc9Sov7TPBUnJWv1E1SGKTe1ynMh87HGTtL",
  "key25": "5vfmDy7SnH82Sjntkoecnbe8LymgowJ8iRBpobxAqASyFV4nYPkYzY2Wmojs5YXr7GtkBPTpstUz9Ci8je9h9eVQ",
  "key26": "nURTaqEvk16CMHsLJNVN5nrfQz4cPq7NmdFJu5hwXrtUEFLiPPSYJJReWBg1KmWU7YyLEr6nPGu2rQ8pxYuDKZb",
  "key27": "zoqtN8pMswBRh1xA7o6eEVfNyc78CJnLjnCTE2SC1hp3yAfuVmhNxxoZb2KHq516RW49EzZK259q4bdfxhKCnMj",
  "key28": "3Ymwsr8B64p8WsUJWL4LbPTo4r9sSPwgex5V8YiN8fVyK5hJiRt8F88zfQXvAUEjgTNWXqyhrVxaX1g1pB39uDXM",
  "key29": "Ss2y9Z5V2oLEGVEPBpCjq9Skub167ebtrn4qsFKevasmA5vcJ94Xu9TvuoE3cEPdoU9wZME437gAoo95fFUwNxu",
  "key30": "2teb7EZjRT4dq4G1ZYQVRKcpnirKR7Kbs4PpcQREGsEVCUqUwMruvXtxms3jYeD7VnC5Mpa1mG5Ro1QtAYeGaynJ",
  "key31": "3sVGt7KUZQVpSf36JoYztPAqvMFvBmPt4z8XaTCzp9dEB5dNL11FpChrsR5QrpHif2dmcDW5y2uGVfWXq2JhsKiw"
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
