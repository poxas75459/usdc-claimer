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
    "4XAPbt9X48mze8xLusZcgNuoSiK36Lwm46CJ1YGScpsiaSG9N4Mpdb5wLeWpNe8wMfmX9fRqaEakZ3KVM4p4mBvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k42oySwLkiijPNoHhzeRSDtCJUybmWfJzX5AMbhWGgAPptnvP4h644ucTpEahvxJ9gGvbeUZYEHjThQ3Xa71NzL",
  "key1": "4cGwT7avU9gkXKBdvbT9z6or5Ua8jmJozKzojCFfqcTH2qstKxUKga9dZ2rXT6P3zHaMFN7XKDKhxXF6Go4tvBQS",
  "key2": "67Dhoo75qYJ3AaD9467QPP1XkZHb1JxD9TXckzzktJb7Q743z8W1pLAAuTHT4D9VJnGLF5Us7Wb12psccLSHF2dA",
  "key3": "4FKvFLGwKdjxBLrckPLN7y6MMa6ZfhPTGadJ2tgYNgu3hdU1LKgbkrUkgaii2KWZVRViaUNNTgJAkCaArv4hpW9v",
  "key4": "aTxFc6pGv1GAEKSx9WF9QpbU2AiLXnoWrHDdWbMUeCJTDTSbLfwrDSd7JXRw2zLRByq3ShGAAmwHqNXPZePkCEs",
  "key5": "424yxqBK2EtJFFYLK74bmzDdWMCfPTNTRLYUcL1EvhxjXnSBJLs6PFko4nJH4AiXbjs2RQcf4sma1gt2232kCbyJ",
  "key6": "uEau9ZC4yPBkczWwQkXk4VTeXBaBKdJPmvMjpyHhaj9D5pf25GenBimve3oH7QikLf6oGEdcD9qmaAf62xsWhop",
  "key7": "52An9UoebCDgeS3wsJnP32PnCAb4ZCK8tWjkJuxnc8Kjp9mVZuruSzTTHDhEipZtWCxWqR4czVXbqB6bCmLKKPHT",
  "key8": "2VKPHGxgVj9BTYFQXhN5JaKpk7mgZFTAC6kHeb7xcXBcSQixhRyybgLeWCeKrWPt2YwUNZQnVJNcBFciQMXQxApV",
  "key9": "4bvnTv724VZ1ZSHeMPd4ix54SnSVYHb47FXmpmCC9ev2npFpSnVsmcWTJaJRLhiwZCc5Z8jQv2hwoSuzVUxWzax5",
  "key10": "2bej2yNwCJShSyMmgKLpTxiBAcok1MhpqZoKucJXEsThwRR4zTLHN66noDdf81cx2xC68FPCdKt6pKinepNU4NQr",
  "key11": "ApBam6XuTUEfpp6LaBY4vpoBQdpKCqkxcNJzsnK43ZMQAsJ2YeE7TcUwtTYesTxJu3KWqd9LxAf8ksptz1E3o95",
  "key12": "5E2skQPYmmBBX7P15my4pMc7MCCAE1SpHXvbtaRfJmYgyL11ZNcAPExJSVf1jvdzSuT3YUoY2CJtu3QrtPh2krTC",
  "key13": "48nnEteT48mebDg8vihkR1zLdWUXs5DreSs6cPbF6G2gBDwRF3MdVp1CSpapeVtxhAkRr6kKNZYvCwoWUpYFsd85",
  "key14": "5rcMcSh9NA5SA157P4oKYC4KPHsJeTooxniJmAJGH3VwJ6KDsJKDdkEt2XRyHpfZ4xgLCzkfnfaSUEGrz95rDdZk",
  "key15": "2y9ZZYn3QPmQ1eTmWqwWbsPxyk6HE6NJcV5bChoSQktUjWxg9VJZEfQRmHnYv6rcsM5gwd8CaEpTfDgiC7ojEcwQ",
  "key16": "2icDkQCBbQREXczJ7KELmcUBA23No987DTAGfpyQWMebsFzGXougMY8tSTgRFf1UkQT65mwLMQ2y8EiRq8yA2viy",
  "key17": "2GUkPjufRNa6ecwCyrQn7N7AEoJbRiYTQmwrUFSeSzzso8WC8NQpC6rkDoyxDH9TnaM5E3wJUhv23pwrddg6zzPY",
  "key18": "5ZVQXP1wCa1ftBtfVbuqNttmjfQnedqBJghqAoPcRmjLq92Qvn8Jrwgmv3r9mrxdsNgByRjGoVQ8j11RkAMP4wn5",
  "key19": "4pU8q18Y6oMM78q42oX8Tph2WCmAGvLQVUcvNjYy6PtBFVGsHWzmCoHjV6QBeZiBMDkAeDxTkY8hpqcaCJZAKueE",
  "key20": "4qRBvhVNj8wzwCLTnKpqsr6dLzAaPbywqdH2ZSXC3cy52ZsH8uFMx4TK9rHTXDVuuc6nEhZNG5WHVXbqiGEQQZyZ",
  "key21": "f95wF5wRdwCZ92KvM1CLDHz5CF74iKy7vspj14MsNfUzZvRhttT3XatBxZieTDdA673N7VEo4K8rLkZWhtobvEU",
  "key22": "4mk4bCtviix1A5ptyGGRXTMEUNBjrRjaGrXUPtZXzbxZZs8EMwKaz6NY6LuhdgboX8VzGGTVpeZF93CzBVQqHZ9j",
  "key23": "7nDGy6ARMUTmoxqbnMRtx1Ue47Hv5iWjA6w5qaUMNgZTxm3ZB654154i3WYUosbCfTquzVoDNmq6ohcteW11QGy",
  "key24": "2PhWrWDnxxfQWtvCjcD3okFwgQyPkATUv6RkJdgaXYgh5entxZmiiQdxZDfSufnNVCYy7rX5FF3M6TFC9emULivj",
  "key25": "5Xf8JmsYCWcX3rohgk9fb4VtThuRm5hzuBjP7agzxLQzVvgCrjzuDMqEv47oLq6hqvSmwXAiczho3uxdLN6dcYQL",
  "key26": "38uFqbwSLzDsrVTmFbfEBgcak1hiihXxSW5Khei557aaxfdcJ3srghSSz3hrcE5nHXGmFQHzWSdWvtQoqpVEPQWq",
  "key27": "3iWLP7yBuLVG5XnMhwjjkNvLSuvugHkajCt21gJd9aw9fce85Ri4k9ZsNHbituy9euZiknJ5tTzkLdhr9V6wfnyW"
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
