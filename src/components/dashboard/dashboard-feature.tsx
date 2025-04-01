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
    "4fZTs64AqHgTHHgoBvUNY5wkhUgXqhSJBU1ncJ66crEB6QxvtWvSwhNKuT4tkqTgueTcAR9gZ2KapB47WVK4Q5gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHS3oXCox8iSe2WhVc8cke6nDtrrhKXh63r5R9c7pY4n8q2TTiff481SP2zdtz5RBwF7QGWo1AXHPNasN5mhGVj",
  "key1": "4Ut8B3RdvaQrpvpXfQ4MmZcLHrgd6zfhHB887ZWh7vfuDmygNUDxAmvxq562ruhHAzmEbM57f7mEBPdQZtnfZYpM",
  "key2": "2upAUgUcv6WkBdt9QYaws6rKJaNaRbtzTq2xDqyGWCLThzixzbTgxc8dQhpXZgQaQ1icNQ1bWfv5t6L112WGwFxp",
  "key3": "4h8KSXvc8Q2U9SUM4TFBxrMQ7zJzwuCMffUYp7fmmf3SbQqQTrSmkNqUYxfzvTFPWjFYmxAtMwvoFw8veLmyJEtW",
  "key4": "35eFw6ajCFnXtYVhHip86niFHRU9TVQkG9wLSEF41ityQYt6KvYimw7nvBS5U2mKy3uCNmHDPnxsQ8pcN6vRTFDc",
  "key5": "4LHLHjzitJq6KryJTw1wM5QZ3w9TDVFMxTMwe1oQiVapKMFzzjz1jXrCB9girZXVn1joxDSSMKRYSsiZgREMjDwK",
  "key6": "5vbqFMBhEPCxBSmnFnN2b7CnBG9z4vyntiV3nPJKqzFq5PNka8U1QnJpP7sc7gJGKjpCHvBnvErGBWfNy5zmWpfb",
  "key7": "ojAqoghnU3puHA89ypap6JEm3pjU3ZZ7MoUuViKhnxeM8QyokuhyNiBA4YzM1EtEu63DToCc5zWAyhvSCHTzshA",
  "key8": "tV8daVpqcpH8TTnTTb9UfQZ2QMgtTxbHD8VCdF39JuywCi9oguM7kT9NTSW6JMXQtzchShLRZ9DdGK7rPg9DG7y",
  "key9": "2s27M4gbEV9J7cHemK3DFDoEQTp7a7r3Yhizf8nGZ3v54LbZDTVLXFt61RPWyWcwZthgjkyBp7JRyyFeTjamEaMf",
  "key10": "34cM9Xm8foQZ4gvda1ebqJPeM4F6mwqrnWvN6kPMyha4S2HhV1WLJfhU6J91ecMJafSSrwKtY5zNLAgxMKGU6xgv",
  "key11": "4xjiJpT5PAysbUC8hju7WFMsPmLBcGAvfrtkPJ5ZMSLWsjwzwsmyYyyndLPQKGCG1D6jWY3dr3hk1614mD8wSDEh",
  "key12": "3nC2CUFteSPps61gEGQn3pUhM2MvXpxs3UZehjjdUnWftwyUPencCufXeU4YfjUnyevUVnYsr1CmXGwpzDo5YAvi",
  "key13": "4GZSkvnFgEj7sM37UPhVbotCZAqcLi6wLKNGnHJ6KVeUvag6UDqYY3ZGfwEsjCz1P76557TcPtEDqKkyQko9DKHU",
  "key14": "4w8SUY3ZAkUB9gmszchR9oUDVjvzD2qf86enEWS967g9QWtnb54fWUbHDeKhFEzJar6WbnPeqzDNSoKKZfZSMe8T",
  "key15": "64uWuSSsHrp4RWMd9pjAhey6kcrLaPnQzfFdv5n9Q8aU8YvFe2Y6SkGkKToaLLXEc87pimCzL1ZzYHAc2szrN9ff",
  "key16": "3uCPNHVw5cWZe5ZnJfMoY7nmDZSmWLSfMCKupQqU5X698XGSyLydYxqdR86gwdzmYc5Cc3ztYxAbHXqWzkctfr8d",
  "key17": "3uTYK4BBuUyBoQUJiTHiouwJg4BsgeP8CsxVTGzu1EDLqSWiExaJ4ZarWkWRwrwASo781zMukkR7ULTjMX7ZhyyG",
  "key18": "iLADSeZwR5NVgLedVNc9eXZjh7Lh83oW4WKNCpJmkpeUuEWhUfNxikhYuv8pHXdQ3MfBDWJeEZQNqgc5dShru7N",
  "key19": "3kWC2JpxetxiKrz3ZqCQWaq2Q72vkQGZBVcEvbktwfTvUprr6vX41DP4K18DzXJV2XaDjkZyPK4JiaXGdSVSGizt",
  "key20": "41WiZXRgyB4CYa6mhCVWB8EdZBkEfot8ZQnFk4E5fGu7e3iuouAa88knMkNsrQnY5atAE1fagRcrFEaUfTpSqAqT",
  "key21": "45LYyFcjzyFsKWAACNgEbVZScWeZsgddJqvCqbCsvnCg3UE7nFZXy7kiECGcaZtXznDpfk5tw46qY4HE2Uoqs22p",
  "key22": "wENgsEPmMsYdCrGKbmeTNvtwoUEFcBp9S7GmpUASikd85vpoDbQVCCyfqghkvmbo9t7Nd5Qugca2KFXMXb2Te8U",
  "key23": "5V9X5MnuTjYt6NFPm3NGYfkjDTDWSUytUYJpjCCHeqZZdcjvZxe8JwYdE9F2D92DbEgdMadTrK1RSqcPDDaWy1V1",
  "key24": "4Ru1CfHxWXVfGG8ApBnSCQZYBmJ2CJXnxFRm7sTuevAC7CNjSeS2u3DrFBXqCaVqLD14qMoLL7fNFJkuTbFM7aQC",
  "key25": "25QuXTPMEaaWkfw5JA5mKKhcotBdHatSa57vMb56icUP7BbW5TEJorEFAVeJgf8JMfLPpeJo5GXAratAN9GJejrg",
  "key26": "HBvLvbKk4Ab6k1y3EQM8KDSmmW8G5WzS2UKnUbEgFAEZfLUvWDXq6SUfse6F8Ht8vTM1wQW9cd8hNNGnjpw23ZF",
  "key27": "9EQQPB9wJ6yPt3uNxHb1Noxh8huMkw6msW6cr4uEKBDuhfTj8LfdQ4rTQKqx151Kgt7gxkAAbH6riyBdBXuuhbw",
  "key28": "3TZP2Pc8j1PffoZzFUovBsADGnTK5PyLACe6G5WBJvhizkGCrKjLZuryVytDuz9FW3a8oCiujErAMLgaSauftgQS",
  "key29": "2ZMrK5Qab8FkJKfgnsqkZNYgKnwaREHHSmjXBwsthzYGZpxQF2VBf4ucCVMs8fQ3cZoCoAtW9L4sWU3fDsDSjZ7Z",
  "key30": "2KveSCwYNzXqAbFWJRSK9EkDcDEG4BU6UMyTicxQuGVNmEWR1YUdXNkXGnT32dy45hoJzL1sCJvuGEsKbrWE6pMv",
  "key31": "28sEWM8QeZhFYYnm8X21mLihiMVJ3Svbgi2ZqU1cvJfzbG2qCMPe71zvGCXq8fDDeUautwQzxc1eKsKpCNTJkvmq",
  "key32": "3LdQXmd6fqds9LRS8UTWZo976rUif77zg2jEfNHVTSraC1WNHN7MEQxGEDg4tgi464oU3T8bJCvZwi4HJvxsooZr",
  "key33": "4mnzHEH5ovxuknJ7htGp2PNKj1j5v9vFHrWY8z2atTjAetZpTgx7FjkqcZgX3vk2hB23AKT6DbYmp3cF7JzYSB2A",
  "key34": "2shPMPhrA5E5F9utJqm3Z7VupDELXV84vBNUfakffCqFhph9FtVXKzb7em6vuu8KbRErH6RNSNw126xS1d9yZCGp",
  "key35": "4dQjNeH2SH3K22R716dsHheBEzbkvmX5Himq5DKs9evMZ7fC3AFrftEf9QhSjL4tfXmGS8JUiPiz5mgzaMJb2dHw",
  "key36": "uhfu6LpSGbosG1gJnsnj86Y1mT1isPNbzrK41WZUrp5NkWV9tmkLY39vTRkMt4qa82a9P6eazdf44zgAbJh3Kqw",
  "key37": "2Kgk1b6hoapVoK3UKpdbVEos9pbZY5BEBnEfJ7yQxMPW6vG8AazdJwpzKBYHSnBMBo65tuAy8uWWYcbXWe75AHUY",
  "key38": "4Abc3cLJRaYKZTvmLpa1mCx1ny4wb33mEjtnKReZAVj3RGhsEJsTHTbdjgvqHUCr7nftomE5fWpfFFQ9QeUcah2v"
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
