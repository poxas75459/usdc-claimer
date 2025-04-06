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
    "26Z335wYPGea8Mq8V3rr9AcPNBiLuh9Uo1duZUJ3QufNePMfFKw2RScepCcfqfDfGcTsFwL5vwochXjvNc1MpB51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZagkBRNrHADLkinNJ5j2DWTAcF6jrMAZ41m4d8EoN5a69ZQLzdfk9yVajUBm9HWz8o1958oPAJh68JeKNveNci",
  "key1": "5QL5mg7tqqkxRzKU9CEbVBm1g5DxQNDcqc26coHRxqvJFgCs76cgSmxD3nryonktkiqDmrQvFurj8uKhRSFHNgi6",
  "key2": "4cGk85CT3sHzJJXVYfv35B8n79jGDeUw1nDApDydCSbFmQwf6kYEHq7w8dLj6Qa6xfJHdBNk8dwGvTpZEg33vJ7o",
  "key3": "d14oXtzdASVdqdAdsYYpG3cwgCMVCxzVZ8Xed6W5QzWVMfLNJs7CZNKn6qb6duhtkMbpjaDvpg1Z2ArNriPNbLv",
  "key4": "5S4AqpNGQVUkdC3wRUvcGD9byWbWjZ9wBayf91H2Y42u2S3SV59Unbs7b1FbariMBCnsv4VAXo5Yii6RAqChb2s2",
  "key5": "2R1jrR1u5tFKwg3kjoyDnZnJLw2ZpvUohyvXBKihKUPGT2P6jXWKGzkvLKHudcUocvQDjGU9hnLmquwUSpfMVUnH",
  "key6": "3x5MMbipLycJ4JmkkP37DkKiJMpFeWtJrbmAQNAxUqXkjdXguQDcFMt3BRRSCg4ivtuquE7qQjokeUTDYafTLVS6",
  "key7": "sbzNsGBmHJEX3oRwwJwDd7m1YrFfY7f5hur24u1rkt62HvrRn9RTG6qnCkcpbngp69k8HUNsXUQEtTKeh8EW8k8",
  "key8": "4tMivxarwAdJoobFyc16KJ8NfSeoJ19ugj2acDEZf5gqHzimapWtQQ7qvcZXskCggN8gJ1G5aNVBQgwYDDmCtpPT",
  "key9": "43P6VZvzVfWn2vowBN9tp82m2vFe7nW8Ew7hhBUo5PJHB9z8u2py2JppoyX16YFRSqGancxVZQT3tpqQgLY8NJbj",
  "key10": "34FQ1WdZtiJWJ2XX9FFDbi6LLbY9mN3uMDt5GfoNpNvWCaoSChwkmbXuw9y8SWknKGE189v2BqhsnQy3WA15FC9U",
  "key11": "cbXDWgP9sUY4SxnTGoNuVuRai8QvLKvUChdazGv6K5jPQnVH85Vk4Vthup7Kzdrc3WfSFpRekJq8Urnb84HRrYm",
  "key12": "3Xn3XYbH7LnidfPouTHRmGjN4YXz33JtEz1pobRkEpVFsswyz4rggYghkSsZTDnJZAXBTX9vkHxjpVMhnXm7cx3f",
  "key13": "NUyMYus2f2aobJXQJGntU6k7h3tKY8MKu6ShsTfcugWLsMk6BZ81pFH2qdEjHM8QBeuGPxYp9jnaawcUA1roX6S",
  "key14": "5EWbxy4gbUxFiKCqGjp3vLGsscPq9YP4tKxwY8XWjY8CvWW7P6LsL3XzJw6sP3F1he2fVecPVmARx4Txu3fKpj1r",
  "key15": "3jF1d82U8SF7g4vDjJxu3BBh4w23GqB8YXD3K4A4T4fE7rFEaUo77GsMjHsJg4xxiDknKL5gpaZytc74Lu7RLRFC",
  "key16": "54GR8gUx1xapknwEgPNkWxEKH1JwsxND9hBZ1UNQaKsp1Wsgj9Vnm9xbVaP5gM4BB7TdgJSixRStLroBg44CpdLg",
  "key17": "23YXqASLtgvQqeLYC1BxJsBYhcp6d2xk812CduNeVhTCkUkJqc4UXDcTM28XhjPG86fGh8SovWoVc8FJ5jaCu9Xu",
  "key18": "2bBLCXZiGDA2qY3zvZuCwcErUtptBwLw7PJ9YqUEuc5ihG9sLeLdJHWiKXxtpkn5MGwNjBZzyAcoQKqHkh4w1RFK",
  "key19": "3dq4SvjQT3yYRbwmPZjSsDRMp8FbtQidBzfkALh7b2vQazxn1H4C24mr1yKVE2sfCyHE6jt96thkxF5RhGvzaB9d",
  "key20": "5WHnfP3ZtUxpdeaBdU3SSsVR58A8BVrwboLzNbFqdkKmJnnQuwDYKfsj4Cgh8pWnjSdwBYKQG1eZXT1LFZm6waF9",
  "key21": "5Gb5i6KdVpD7ak8Ksj6pAv7uKbEaChvM1AcryqeDNV9H1nnrXVNzEuABWW587WoKfeFjWx8vyw43TutiSWfJMD8q",
  "key22": "33MuToHtp3RVikgJNLBJjgzXmJ2BZSZrCySi5KGUQBQPBZswro5QocbpmspKzByifYKLr1P3j8nJYahgiUPGTUdf",
  "key23": "5bU1vMAn7ZGMjvCJXwMZRR4F8rSYztgYnQYpy7FNZ7q2j2zAL9HYvKye8Ejethiv3TowVgrK3ozZ2LxuZq1xYkQ5",
  "key24": "267BGw2fTNWpoah9ynrBke3HTWiu2YUiNaNcFkYUBh2P2dbVGCGySsWxCuouMVxSY33mM3BffNzLssmA3EuX1bL2",
  "key25": "29wE76seGuxgZ2AsUgs3SyAJPr8sKvGVcNe4NYERayJ1E4C2Lk8zWsSntqyEJ2dDTp77fLsh23R5TWNuCYKPimgS",
  "key26": "3UWkaKkTMkNhDeBJHbgBrG1vZEqKWsYaLELobiPb5crg1ppDvJqhdrAQTQPS7pgYE9SnDd6K5QSAVnwZF1M8puV4",
  "key27": "2cf2W8MdaYtt9oVeh2CWAhDCd1CviryhF8emDefCEJFtwCEhc86nANSvzPMyZ8JrQmX3nmUMC1jYaBoHoyBxFpn7",
  "key28": "47BPZpQKwBvz8j9ahE7msZirP3V5qDgBiDtugwfJ2R4UsDGiLVokMHVmdQWbgoEvTuQPVbfrQJytEuqBcA2MfyLc",
  "key29": "4ZRij3iqPRhozq9h64GcisPoXKviJFrDhqbzknGfFJeS3yt2PGr3adXS75ZqV9hwz2qXPGLUkTSc3fxSwuZPtgJe",
  "key30": "jWkeAznzkiHSxWtn4Gk92njoequkmqhc4kwp71YthtZVGBuAy6MyqF2hdA4VgKw4i4UnWL75R78cKaCW26iMhJh",
  "key31": "3M91MuZAcy9GQuJi5hmN3AojFA9bq7jvXjFWpXhgB3HQBD3Cyhkff1LA8uYp6vrbSCm9XYvTKibrUZCqNBsQem2r",
  "key32": "5MAXK8pJXy1VuXbc9egaiXz3mZEsCAq34vARvwEEkPWuqrddSBoPCkxpRsjnpYp94dN9renNSMrvfmef41xvYwoH",
  "key33": "3ppaS3cjYH77kk9rKBThDsazPyTuy67n5qPFeGDedk2HdT8qjesjSMajfrk8QA8cDpAdqgahBUNgskJQ2YUjMb9z",
  "key34": "3MB1n9kVCcZHMrHJNrC9dMzNyKyrgXdqraL5UZ6WQyX2diqAKYPzEFxNQCMcdRY6phsCMFPYYihzRKnEgGQ7pDqY",
  "key35": "5xi9zkpFSSGMVCkLU23xUov9WaUfnUrR6eMdPt9TjzefHbJKD4ZJtUhkvcecq5PGA6tPmJRDYvtiDPQhcu6YAA5U",
  "key36": "2X4CEYgLaRoKdzoL4WbLtCbvBptKw3oMfn9AAgAtSvZHnmggJ2r7upcjN5hGmFo1N5WogEnXuUqG3dExSRWcomQA",
  "key37": "4sSFHeEvdsRvjVEdMcnW7GtSP9Qs92PDxLTFjLTJcnDPL6enKC445kQSpUw2CwDYEwWpVpfWVYYVGCfzy3tvSsJ9",
  "key38": "FJcNuNaUCGqHW6uBt1gLC2ajioH48yJz2oE5icdNYL7gGBp7BWokJ77c8DreGYiYuzu3C2PNeQXMgWT82L7Ysnp",
  "key39": "4SfbrxqxMmxYo2pXPUSPpM4VoEM3zwBzix82BsG5b1ZJUgn7jNiCdN2CK1BcvNou2Kic7oZ6tFsw7NimFeDL2QYn"
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
