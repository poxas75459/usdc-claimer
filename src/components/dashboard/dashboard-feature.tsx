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
    "3ZNrYTKyFYbEGvLaL9Sj5q2JFc4jvPxdtCTHEZbEsvNBWrMTNkFjEweiLu5h1wwGD3fEBb3PNY6UqkBK4WqMPc17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37pyBnU5HqW2pTTdhsmSfqh7aJykBbndn3WYTm5yBduwJCjGj8MyxF98Yj7m3rDY2fRtWEHNTKssPHP9VXLHjmGi",
  "key1": "5UX2dLZeVgsx5ChToSCSvZZgYsWqM67jjx2FoJFFWCPEUvaBgz1hgfpYqmmoq97FfQpdAmsT8RV1o1rr2PGEudHN",
  "key2": "5PJk7RPT6wEEZyeWEELuJhC1AjsLqvKDF7HyXtC2gFFwpZv99AoXyW5KgEwkSFeK3hdJaekQ2G1eJSgpj6DM5v1a",
  "key3": "4dWrkXxefhoY2g6uyy3A6m2sh5maU4aDuRZFzzpTLtTGdKg5fbpfPNRDwF3bUK2GzkVBPwfctzK6sTNaktFU8ttY",
  "key4": "2L5nv5JEAjuncpJrU458hHpWnQAY9eXTExpzyTf9usE5MkC1N5HiJHsQTeQezK3MLA1WVDRdMYE4JoMGDPmRKveZ",
  "key5": "2qjXjNHKswAX3m8HBLkCovWEv1eBUEU3ccQEAnghaR9kLB3W6LyDBNLygV8LQDfsNSHpoSSLQTUngk7eQb9cNq4K",
  "key6": "2te8xeNaySWC4RGvG12JCJRXqiWVtz49Nh9Gnr4eHKMAC8juLXmMoGvAeh8qkrFfemP2c8eeUkm4tMUW19Y8CPTg",
  "key7": "5x3poUWuw8aC59wt5KfXzRsXAVomJn5JLQaEuyt4M5iE27hkj8ExZbdR7xXyroybdMRo2GXEuyvTXjUiVYXmYfE3",
  "key8": "5BQHNgGLiGSDyX7BvjmrbdMrKUDVmt1fCk8MHZjPPtTpFZbV1iUptGAsAjpGRdgYAnYe4S8oKeePv9639uAyiCNt",
  "key9": "5jp3uMHSQvp1P4232nSsseJjZ4GLYxZxjS1Nd7jWrSBq2H79qsSApU3YKWsM9YRbBswNDNTFcnggteDXNvUc3BuL",
  "key10": "kMafaHsz9K2kLyaM1YsteBZYtS5Cw7S4Lj2Mbz2bbSAdjw2z8LrGsSUjwvF2NmodN7QAiTbrfEPUVzMsucTXFne",
  "key11": "2bpdrRaSera4EYNtSKBJZQzEBoUppg6Zs2c9Re7b2wQuzPXSM3mjQt3fWbtd2HQfPSMvkbJ8wvNoSfdtkLhN1gFh",
  "key12": "3hWu67UcgbnLTfLRhHxzDnpswiJbhXcbbhyaQTZDnMat8eut7iZitQWfnriLHpPGmDTpSKo18M8zFDn1yx6S3XDP",
  "key13": "2B1kywhxGeKEURxUaYg4kViuVbFsUUa942C589vmG3r5FWtTVv2sZDUMyaoG8s3taksQ3qQZ1Nrv7ByS4Wj27pux",
  "key14": "4prPYimx39Vv68yy9mvvZq35UAXpJEFizwykobxv3hqbZ3a1BGMXrg8UKSPQ12DAnGD33AMjK9vGeZFtVHPv7v92",
  "key15": "4EHFaoKW1YqK2cfy57NEnWJAkcxW55dt9gavVQmcaZDZiHte7aL4F1BZt3RqefbKfdeLXYg2PkbAdQLmFg4ySoyu",
  "key16": "FcvaUaKpxam6dEzxtwfyS87WfZYyXM5W3cXQQhrjgYYsGG875oiDiVjBNPVRdkAh8esNeYYZpKQb61hk3gUfc9w",
  "key17": "4d5d3znTbeboryzYC8SdyRTh5UxhX2Brvk2cL2UqJerBir9tZS2ZkKo5UVNLQdm5S1WBdC7aKxm6sSCAUHSoDtrQ",
  "key18": "2azLQ4VxRqaX46ko3kSpj12mxATqCoUNchXG3NmCLiVm4KNFXph8hhKX2C8fjg2NmxwvSWnyVyCqX42jhsgQTFxR",
  "key19": "2GrBNQdffHVtMPcy6rvD6pMwWN99gtefx9FwaWCtHz3L6VtejARPKriSmBxUuBWzueLx8HF3K274YTGdsUZs7S4",
  "key20": "6Xg56dgy6m9zDEU2SnCZphAcRstFvQLxqhFpd2Ar57uCvNepP9h6HhJ3a4Sb5KfxqJc2TZ4i8nWtUZxpjsnDr8R",
  "key21": "4AjjYVHJTQfbRec4bXYP6qRNNRJfWmDJ8MrDyUXJ7wQBRzcHui1UEPC7uBW312R4kEKuMZ25ESVUawLHAefd65wq",
  "key22": "2wvSG7Bu5KFtB1fjGrT6QRrabomeABLTnMJAZg3bSjpEyfZwU92iEdGGJzTLnKqen5Rw2pm19PnqcxMgxC1WaNeU",
  "key23": "5UWVP57dHKS5aZGQD4vNzjqNc9ivSFWfCyvSfqcrwZZi9TepR1fDdNbkqmr6QYGuSXMtCxyYobgBZrb72T88w181",
  "key24": "7iLy3pqmSk6BSB8SF6KHkiwwskFzmapBVEkJGngScqgT4py7VFSTrUYmHjqR4Bzpxf2ui5i1LiproiV6P1SgYgA",
  "key25": "38DSdkdYsJEHCP8yQNGGwCNeX9qLLiuTYRHMZY7UtVutxqGr8fEg6cqnD8NhoFojGZWzBtnZr4BuXbMsgh2A8A7m",
  "key26": "4r68vN6whfK84THmupoJqEnk8CaWW33uWBnmEf8wnLZQ7bT2q4rHWevXC7Vv84FmphsLhkBErqNDU6nPWbPFjFhQ",
  "key27": "w7zGoAnvfeAJfJcdbQKycruG9rqm7DYMeKWXn8CqmfHSRYtvHbyyeNy1n7EczafNfCQSpKkigMndHAhgruC3d5J",
  "key28": "2hfsnt5PQsPWE6xkuJVqgfTV3t6A1rtdJghiifAjwkyBuzgHW4R2vMWASSoBXKvzmqNbHDBWtSuZgnX9H3wsjh1L",
  "key29": "61oPMAPMHrZgBL3gJ8BPugkp6m2MiZ9thLiQAbRwQ4r8SzDUcLRtrrgipGZzVfF9JxzuQXmr4FuMMi3a3KLRW3Pb",
  "key30": "4bABywNiUrmYTPHP4C4EjofAip8mS7dXAqd9mJVo1grNiN8n6Wa7jaJMSeMoXZ1FQCYLYzUgQnhHN5QcuMPNkEJq",
  "key31": "2zb4X7aJ7ffeMGP1gVhYz836zzr662KgQWcofJpRMQsQHiCssVnazRTDfEeDk14Q9BdQixTNiHAwgqhQPm1ewzL2",
  "key32": "3H8ZncDc1g3qtG8A6YyGiW5wBEAjParCC2LsRAx8TC2y9R4fjju5yDLmDHU9fjaDp3de84ozieFgeunQJ7siBoSv",
  "key33": "1rz9bJBVBVhuz7R2VisjKnszJKmY1CxVzEsJ8bAjfvA5Zv1f3rPUmpEecojhbNkqGkjUCE5Nop3vHaL4d18EXHD",
  "key34": "5aFD6d61wueo26wj81a7vxtzm8nEdG53oEAmjE8s7B8HLDvg5JesHxMF9UfUwrbJUoGF6KMVD1J2qaf3uQdULCLW",
  "key35": "2zyVXC4XSajagREQH74PvSJc9UEhvGs6i5RhGxk9hrCwJUyzC6fZrze2EpTTfjFPdnYaA6PxwjX9FfVRyifbMnxd",
  "key36": "4Gg3mGjdRHzSiAW7NZ1xRG8JbTwVYsniQyUUJAbqQ18P7RZbZCrhSmRhGFqcnBwX92zYJYhcT6XR9FPGtzL2RJPS",
  "key37": "52kKcwHA7xHiKiNkeB6JumQChot5TeZspSG4E4F9K5Cqd7tJUVvmoug2rc5rpdnKvDP8eNtr1vyLLLi12bWtcKAh",
  "key38": "2QERfuZT5xdaDPqGdrVDVL3Ff9AFpJUpD2XiqttYZuhFo77DopiTiKTVGes1JcgDeb2GettXpSTE7jvyTnAeb8QW",
  "key39": "4nxH2uPkh29YJ4YsZSKcqXEgtRezCRxe8xhA2wChkkWNr2UTnYz5Eig89ZaziVJp7DNpuftvbuiu8mCNG765J4aT",
  "key40": "4U1ia8A8a6ZTYrMJ9CNu2oagChpiEmc87TxMnQQtwQALALnUh1BkY5yek22LNkwXRjk9Bhr7t7tH7aMETEaCxrQL",
  "key41": "2pncsC4YiqeGGiYK6umuGNicVnvDgvQpCCjS59DzPJLSGVcFJ4St7crNYNykDoa6yjot3Hz1aSZh9ZhbdJ4A3LSj",
  "key42": "5KuYeLG5EvYjqtnnJhR1Uh1JNh7seXBJ6mNnggVQp6t2oRp4GpyPeC5sVcNk59ySpr9jCNg8j7eNHhaDwqmYHDnx",
  "key43": "3n5QNiFpAAfCF26vUEUxu4iEo6ka8AvhYFMdiVuG8ht4KfwQgob6tSjZkS6j5dp911Ft7Q7MEckEKjB7irkdFtkG",
  "key44": "5tBnVPQzJeGfcWkj6vfvrGZChRUTXtTm24bKUAAYJFNiXVATx4UTUW1Tnd7ssyE1g4LoBxwRMk4g5hqMcUAnjUFk",
  "key45": "3XipUhAPAj4dmFXzrMSX7UuQPpvskzTd1kRBCo983PNiEi9VNt8iFwfYv9XNkF3wJgssEVM5qFmdhrRqzbfY4DuX"
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
