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
    "wZL2CXW4uFUpLzkZ1MXUhWh8N8sedT1VGpfnXkNYDFs7ofLj1BtsdYmfk8Medp6EaBNhDGPHevgDjyh4obAgqwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xb1KrYb7yTQxyRVV1vLM7ZEHFuKJBLYuJaQZZUmH4TpmcndGngeThtdQjtKBmUfqx92aT2zx9igt2u7amAboFWc",
  "key1": "2A4wj9areNe1RhTq8x3YAPgiBD8EiGdL8iiQFoNbGZsHsyf8h69rcv1QvxGVbBUxcdz25mECznSigriNBbjPoGFa",
  "key2": "5Fe7nqaZd9KZquSguCxh3vonn2d4oWvsmupeevK1PaMQhmMQFjLdcown3gCMiEiEFX2n4bmU8JvwJzNUhkmukDir",
  "key3": "4AbyCUWTe2vQvVZKA7qcatS6gLxrNhEu2JVUZa61gKj8mXKKMQteYyrEJDFSMbmbikxbcj6Zqc1MgPBvom9HGbtP",
  "key4": "4uNbc53YVSeMgopZDHELUHRsERBntFwiv4h4tYGsmQZLMsS6Srrvz91t4pjzE7Jj2RkW7vu8zpDtwiRpCUzLxiNU",
  "key5": "C9xKJuzFXZmfPmkWjJCAC7ofWqbJNBALXa1rXaHeJ4okUUMa29ot9XT2jMpT3yuFiKNQs63rfYGo7b8KwJZQUQc",
  "key6": "4j68FHME8TXSfNuWPQT89r7ztyLrJsPbdJteZbQiKLSfwNmFNXzKG1MpFweAKpRk8YnbZdPX5UGbaAvNaGosfURd",
  "key7": "3b2pAXdJ6sZ9e58aCiHV6ixnKT6q2VjFRrLMGotGhZDrHagFDk7x2j1mh3orvSyeXFaybwYnWYm3wZTAdcLQwSTX",
  "key8": "4i5Xy9WzuaurkBffkBbwGrmEChSnZXZyYP5frvGbTSerSP3muWo9Tfcc2zcUYXvXWA9sxnvvVRWTjKT96aPK32gm",
  "key9": "34JA6ewVtVHoAPijGdZwSeYVQAUCwnWU7KDo6RZwwmiCab5JHSoQYJo9h1RiDYKNZuLKhyVChah2qiH482mrFCNL",
  "key10": "39pfa227ZrYWNwk3SfuntrWuySqjL3kharTDtWsWRWRzfmPf1WF5skNWi5nEC9ro3kEmcmazHQWvPy9DLNKhkTf2",
  "key11": "5URVKGUsfqy2QbNL6o8eYftoje2UtTpSSfisPAtPE3xH1b27F4PV16G4VRfpRWywSAw5GxdNKnRxBqwtnHQ9HeGG",
  "key12": "4wmVsD5RPiNvsuGCYW3fVoBHwULHT3Pp3BSDMUh2bxBUFfu7cutvjqMF6QsmrK3fnQuDGTJaJTVJAMKC6pVqZnko",
  "key13": "3GhkvWTFs7KJaPQor8bSrjtsxhAUmHqNYRrSDrGWQfBhZfsA6wNLkL3Z87VC3WTZ6BjW5srcxwTju5oJjA3DJUym",
  "key14": "4QaGpsUDRVkrsMa97rmgoBP7EATrDxYniKxrsc4Ez4oUoJSiCmf1781b1s9ZsTAZwrs9quwzRLsi2DoqKm8oB1Ek",
  "key15": "46C5FGxx4ygUJ2eVymtNX46LmvnBazAknZuwjUj8bF3JstVU8wGphrGLKE7vqXakF92bjtK4YFaiTynYDwhWWeV",
  "key16": "k6RQDeBQo5t2AwQSLXYGpSKZFx6d8psLGTxWS7QxyDnm6GJXeYeKqyMBKJmLM8UHvxrKN72ZR28BhE5UhUtDfSd",
  "key17": "4fqdYWtTNxLHYLjHNM9BZmmcLicbvQrtrFyn9BXuEzeSWFNStF1gE7ksCZYScbyVjh3Ge811BEJF4jGod6W8mA6r",
  "key18": "2gpMVVxETh6m2ibJpG7pHL9HWMvEVaZx8j3czKpqmmoyAZWAratBLsQHDcF2aZ6RxPMfpbQg6cQNQxz73BjN9Sge",
  "key19": "3Jsy4118zmc44X8ACivxZ97BKZJznVFHELMxK3e5PswiALW5DJ3kFiWCU2MpQfChYwn1dTRE3QER2Tidz33G3vWa",
  "key20": "niNKR2WCcPvH6RUHGbmX1xpRUAPHerDrNtNqNiUPDTSyERM15PwBBaCLSVdz83qkyjWfUzECAvhJCdvVhnvMwmi",
  "key21": "2efZVDqWXotyVrFgT3drAZDWKzSKwUs5t19XBqkAqCqft2RYj3hqinNgkrm9jv4QQH5cHmeZNPQea7bFagD731h3",
  "key22": "4vmrjfBYQzHJRuAS5tyuWBATpGQ6p2RusRDieUgdtHbYkQMJPFWreVQr67toRq2NgKYBU4qbfzwNB5uiasb7Wva2",
  "key23": "5N7yytKJN2BAnUmf9yvPD3uqywBKETDSpaLhN251Vrb8qqY2gf5tRXcW9TaPiu3Vp27dAiWAsFc9uDuboKgNJEGp",
  "key24": "4DeS8V3SfjocmRMRd3eq9umV1GGTVoThqDMgxKZ7hBRRetyJkJ7jV7dSJgEJ56g3B41myAnJTkf85chF8UxHDvfz",
  "key25": "4k1mmFrkfAcaFh8fnp7Nx4GnTcdTU7MKcciorWrihbZAeDbPPZTrukMzDF2TsC9UPspFZuTA6t9qcJ6NFDaouBxE",
  "key26": "2QDhBJu7BdYE82JPTkcGmbZfJmoF2aJ7WAYkJJfZGfCPuEHJ2u4EMzfJC13WcdjnyVrbAr4ayWgwBXjagJ9z4RFY",
  "key27": "1oCzCq6vk2Fdw4Lwh5X3LqGDE7GqinpA8hgq2bQbyAVbjAUgHTDraGeTZW7dZopZSveCppF8Z5QucVf1QMMPHp9",
  "key28": "8uGWrnHShvgHguD7U1W7yjQYc1uLVabGiD3VFu2EhwgbwwX62hfHzYuDXw9bMkZcyq5a51fzPNUrjLCq1nFdSmT",
  "key29": "3xsPAiF9wWukjWAxWyi3sANWF532kP6oXeXHak44rb2u1NAvBLvj5413q1YQeFKm9SMa9HcHbGYkMu8g5bx3zwkv",
  "key30": "2umjp2iZ9wUn6S4kDHiXkkqqfC4GpwgNMEJsPc8mqrTVcxs35wR1LGhwPk7a6LphRKPUuxTv9ZQqqrXYYCtZg9vp",
  "key31": "3m6Tek78H7nU7BcwY3MGrcsFyA6SXan1Cr9bXzrN4hXmxroYqv1sVMxutJoma8P1C7FHqiMcmb7cAE3xaXTLfWzX",
  "key32": "5U6Aae69WDAFRFyhXUtCeiTQd9oTPssd2kT9vhAxfPutah4rBKj9pj226tqqgHLKJLRUsVFZhJHLscZwknrSdfAB",
  "key33": "WGqBvriYoktB5dYHZitn8zSLZHviLkRJV7LUkAXycR9cpjMV1ACHvMUsMqNWaQgTPiHbGmdSDn6viwyqjZreobL",
  "key34": "2oXUUsmaDUHuHt3v1BNS5SN9tduvJzFvdYNU1pVfa34oLnG4q8jYqAJhMaPgM16AaK1mWW447ckiinrJHd43Pq6N",
  "key35": "iSg1cUCSkPoQjiGZgujdWvNGux1gH3dEq3THB3JCxB1GCPsnYfsFUtA5iLAwnhrtb6JPReTQkb6iBaQibPvMZcy",
  "key36": "4GRtM9MTjvT7UEiEbSYHBbPPxMsZUS2aN9SWrE6jfQfokJAovGutiKqUgBSQC5j7g1jnJjKt7V9zFnxofGdauR5C",
  "key37": "2zvod4ohefC6koJQuu2ZW16hS8YJh3u87sg7VRMagsptNKh4jzzCHNkKy34oUvDNSbMVc6fcMmmMwj9SLnYRUEZJ",
  "key38": "4KYWJ9waw6yyK2uthpZvzDzfxvNDkMwz4pLyiBw9X2dAYt4gaYs2cR5LHW7NiLhWELSTWTQPm6hGMwL6krW2Kba6",
  "key39": "3DQHP4JHyfGuFxtaiDVny2nm3UhwmMnroztuJJDzibCeTF4ch8wT3yaU34KyDvc6fDhsMoDuCKAV9gNh6jmUjGrC"
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
