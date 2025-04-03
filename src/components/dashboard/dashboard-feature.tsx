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
    "5Mru2T3oMPFVSbwfpr8DAKkpUPXvsiewHFpEB6iSsavgfSBw9AADcQM3KEwFjEyckXSVseKgUqBcRh6vtjkeGBm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DjYsmqe2MV2RMd2RfWFcg6JW3wcafBuVaoEDuKzWGwCKDg11rhAWVixL96gNqnxjCzrqJ8G9ZetSunAjvLWfCp5",
  "key1": "widaZbaKULjw225iXJdspG13joHgm8ZPfnGbKgQP38BznHEFm3qrBt4m7dqAQFnsbaD7qEVZaGnbf9Y7xc3bQQb",
  "key2": "2PhWfDQDDaBTcioiusMHUtwFyGgf65z6kEFEeLWLABgA7Y6ahGya66GZMGeGWJmg7N2q8aV4M4zmxxEzNgbWtXzZ",
  "key3": "3Egrm831qHMFtx4gHeVreQKdTEK5Wc5JDfGopqFPJjx5u3q7RjteDDQcuqPwPMrCkSLR7QDfLUDxeKAPvazpnmJB",
  "key4": "47NKMYrwtX3Ysotu22K8kGAeVFxPZhwrASmZwjdRK76hhojgrwGs7yGC2HfFtVaFmRJtkYR6ZJPCSrKyRLt8UHoR",
  "key5": "5sKS6CWvZAtyg3XjudSmG1vUVJTqB6C2dwmcR4Pcq6ePLtTeje3fQ6nrwvpttd961xvA58yhG9K8kUKCupG6Nt9f",
  "key6": "3zkPBN54xxXdaNMx7AsLXXhwdid7ryco5QVKFn7s2aB7EMhXMmfYPUXXdE3H7g8DZc73uw9x5bM25zYHJb3rKgnB",
  "key7": "5riAQk669DHWFmzxjiqQug2tgv15cFG3kvSDa83YQPn9gpqjJ6hXWpemcWssrfaYVr1XvrGmgTMzoBmiV6mBtNBv",
  "key8": "3cpvUMeqf6trB11X25nwemAS7p8x8n3mNKp3dN8RWbFzna1Fr8bhphaTGLuRWeT5eY4jUCaSGynXfNavt6RQbPC3",
  "key9": "LoaTZAAnssqdE3E7t3PyYyUwttX5fvN6Rp337kH7aBWr8gs6LtZHFxArsRs8uxC3nDCtz1vMoGBBe3kAHT7tDqq",
  "key10": "2BU2XeqmuwKGapUtupTFuhGqf7AvaibVoyeD6hxyUUscCHSsjRx9ksjEemNi9LXqxiEt7wCec3Ly23kn9oF4Ar7k",
  "key11": "2wjL4PaNXP8PzgykCiqHvdi3yKHuYdvVSaYJ2hScMrNcm3Zy3yszF46KizqDZoUU7k8VfzdsHapDzQ7K6BiuyNTS",
  "key12": "38D4YRihud3Bi8jiY5a3sEHUFBtsnSiToMXRUHdCgGJuMn7Kq9q81MzsbtveWbTzPpyr7zQtMa7PPXvJ1BN7CcV9",
  "key13": "4oHN64vnrdJEFXkikNoKN847RnFoK4fG3fQGdMYvphuYo64anJuPUnqoRNp66t6zMz7h7UbfkHc8tXgXWv322Bgq",
  "key14": "4oc99iDXi3tB9LS8yLLptBWASMqgFc3NfDVvTzzsB7TSYP2j3dYnPfBLRDnL9hwz1Rtk1WwBA1zF2nu5YxuRcUoX",
  "key15": "3HV3RnTeCTbBcSSACK7f8D6iAEY1cLmEk9Sr3xuy4JgRCgYBTWwvKHDL9adM3qtnmQRW9JmARK5Duyg58QWfsFkL",
  "key16": "wtpdLtQJaYBzX3ncN2rVCJTUcfFEHm8YfN4C4rgd7rPgK2V5fxiExzae21rzinchz5AviiHufqxhkMKj5n53xbC",
  "key17": "36Yn3JspyxdLkknfrF4z1H4Cg3EtyJMjuonnAUFYyCikrz9TgTeFLgsTJDPduhBGjLsWtjuUkZjoAXHVmwqscuNq",
  "key18": "2dtXzXzpZbZrJEW4xAcZkktnKxFmTVhcRXviZwHBKyWET86uSHNiqdQe7fRAq9eQXeAPeBFmdfoJBv6D1A2gnooK",
  "key19": "35Nn6L8vPCj7R19Lryj6jHRDNahgS7RyRK95jjh3rN1QdrYojB3crfHUHyxoxTYQhoztBMd8ZxurtHV9CRqvDg5m",
  "key20": "5DgPMwFdTJNVrip74mcRCQZgC24GkxvA86mHLNbdvmDU29W65kh8nwV3JHX5g1XHihTCN5TrE3wj5WKFbnAvVEvF",
  "key21": "677kDtoWYPNNEVcRoLxuBnLh9NqueMNBEd88pznKokJHXhkKcwwebyH2VcD3z9jp8iusJan24G7nPpc3dGPNDE3s",
  "key22": "9YzpGNFwJUjvxEKXxiv4vtMHspXkwvGpDxAVuYZcTKBcWnYgfV5Wmj6zuNSkNN28v2H36X9dAvEqZGdLrCU91WQ",
  "key23": "4nTNB2ZR7b4ervzT6WJqU9YmP5gKCeUmEZ96svfVpxW8VtdS19DwbkcGmcZFJR9xc7A1We7ouM8L37rW9qPv47PJ",
  "key24": "4LaHzgdkdHhxSVZZWpSjyFGG8nNZepYCotizdPcinayVDzZrwWda8avTZuo8RS9hkNnjjZE2hpwYw3FmuuR8KojB",
  "key25": "4DYSSDt5EV4wqz7YzMyT6NBB7SknrCENfm3ZurhqES6bwFhPS4jJ4CtDBdCnTHTaRCot9zTK89GpdF5LJu3rEYVy",
  "key26": "w2vKH4cxxeneKcKKcjayiPY7GWkQaCBy9PS1DAAhWcCTSSNr6Hc8fmQDvwNG6ZiNWUiXzyPU5xz52ed3ZttVkyX",
  "key27": "644a3gtCYUswLrwULruEgjUE7hBHWraCKiFGdzqykcfoLTvLH15qsTYMaTbTKqQ7gXEQ4gneCZTwX93zrB28Ms7D",
  "key28": "5UN9XCHaesDEXNxQZyLwPXdBs8n7nSmpCBPiLXxYgWnSXyPSn3aQxAS1ESJBC3aZcYQzFT2Dc8DAAtccS3J6DBLp",
  "key29": "2AZfMoLMA9hGcWneXnkMmzGw8AUJFm5oxo2BUrUtCvXynxg7Sso9HQ5wMxWsmhz6h692qjuomwKxEB6xqxrLqe5z",
  "key30": "5s2m5EFWPbk86zdZTX9V49rrFgkAkZ9rqGaHsYE5jcjb5yPqAQcaE1ndZQFmn3Q1oztxWBTM82GpQQDDCYcVd47g",
  "key31": "5b6qfY3rYbANvzkaDP6HvZYK8DsByWh1eAC3pYiHJLP3zJZ4K9qY9UtfFqU1Vk8UmxHgUKCfW6nRWjVpa7WwewKa",
  "key32": "3en3fEY3Gz4kgj9rozfX8izW3QdMFnzbUwTgpevBWL3DV8Z8UxFzZ6Y1Uo1CdBMsX7ntTskHkgg33BF1cFnDs9DS",
  "key33": "4ETfFjtJeL5kM1WuenBBweNgioFmecpXLd7V8niiEh6UFxbs2CxQPkF8WKaDpsrpFkxMKiQXFe9P964sbMM44Tyn",
  "key34": "5kk3sxbuvLJA57G37PkqpuG7CofvznYnkDpGeuideTngq37Jj82abptsYDvw2GcCWKhfc38rp9YjGu4GrRDE6BBS",
  "key35": "4gtQngt9JppMgt2SLPFmcPa2G6rkKJNCzSWi5B2Dp9Fstbh9JowjdYgrb26SCksF6SctFX4wccdpS3jvUR5xQNer",
  "key36": "5aqX3SwYZHmxYHZop67zQikWVRudzpghvN8CPjh1KTBHiEaJHpxr4KLCVH549hcy4xzNfuw21va3MMiz2FL5oBKN",
  "key37": "66FVD1TZQkzH4Krkp1VW63RPqwsKfAASz9a9eEnVLY1sDJ8mhVWS2UwkggGn9SmuSdY8EcEJKpaUfq7ZjTumetdF",
  "key38": "4vAMAUwWS5fxmmyrNpaRhaukNwV54WwrX6cdiqQLQjJgg3gskuqw9NpG5S6nvVHoeYKdcUNqZvZN4AHunNiHmMTE",
  "key39": "4vFUu4Cku7cAPJnin93xbqNT5yMsV5VE4r7metjDeLTpHbrN8Qi3QbbKbhWG9NkXYovaBwy2rgYe8WkxrctHKrR9",
  "key40": "4UhXhrdojK7ntPb55eUqgd49emrBTVZFSTihvEmHKDs9aFd3P7HE2CV997satzgJbyAdcdJ1pTNw2PNjwpBapUzB"
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
