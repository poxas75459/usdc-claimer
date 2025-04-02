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
    "5adqz4TTUF9bG6ZLNfrwQJ67DzVV8Y7tj3egKZDSsBX16djhQfbC6rMWVSSxbdH2vsSQDii1Eh5ajcfvyRG882Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ArQrGeaFhn6ufMopiPU5qRKzhvRAhsHLhu4cm6uUMbWoGi8yMXEYCPkwG5CNQP44WGN6fJQgRKX4JuFXqTRyBw",
  "key1": "2AhPn3fMRRydhCiuzY8s1yu5Ac88vhiyxprHkXXH18EwPUBdvwSXbE15m5Y9yTHsrowySEDfjoHf5K8Qoi5cddDX",
  "key2": "2dJLiHPGydoTvRmLjoadNg7EQuTbipHZSysWL9D19PmPc8dq5CkqHurDfLUsE7JCiWHReJLaasnpWRyKRNwNa9NS",
  "key3": "522TrnF4oRSA1HqZGK8aT5gkqL2bE891bGkN3GQfM4dFwVpBfz5qZVMrAYExf7PjdmAzEukEZmmvS1DCAWPLj4Tr",
  "key4": "2qNGKmsuAkEqFqnWeRTSFFGqFaQC9GKR4TJ7qEpmnUcGPATAWFsuNEEasgzCSZDobB3Rh19GkPMCd4nqUT8auNae",
  "key5": "3mYQnSg9nuFuhRNVqax8bgANPM4LwdSs8JznPpH88AbLSEKbbFCCj79L5UM3jwtBbjn8LMnTasRTZ4V2DBaaoM8m",
  "key6": "w4bbGBtXxmVuwr4rQjm3UkkmJg78jJzabeWDM12prb4PisiMe6M7bzAM1NA2kcAaNaUvCA3dinTR7CqpGRmM3bq",
  "key7": "5rbwU7Qahm6ntFSYxymqcvJ6GetKdDHoza4F9vDxpb4txXwBkg5y5G1MrwBr2SdbjezAqfdyLyFK7jKxRjG1EoC1",
  "key8": "5pgubJM7SVsYT1pRWX8W47hRpjJjaXJyctvom42uxQGwMvLuK4VGtcsapziG9YQNKzRV4Np9omVCE8W1ZVvxpFXJ",
  "key9": "3dtKTVS8cBfJvq8TKCaYqq27YCXyK29HZU13cuhudxF3fh6ErvZzJKPp1SdcSk96uMDmkZfRcX82xiaAb8wY6t2j",
  "key10": "29xgdYqfrWhEdYjWW8Wc1vRGBorRWBFU9gKi9rmkfmf6gb3NrzGoL1tMhMNDiEJVff5s6fECrm8k7jZYT77qzVUo",
  "key11": "3jFcowJZeqZgawk5WyWfujyz1rjrr6RVHCQLkSzDiY7TQSVF6wjcR1QW3AH61D1nqNCVK5CJpNkoHkwe45KRcjTb",
  "key12": "2xXe6fMerapBa79o39sEsYZvZQM8TmYqdC9xPwcmMzGifmyXn4SEPa5TPeAid1yAtWyjHzdEFsY8AzmeqBgbU1nv",
  "key13": "4WVBMAL4sPGmpnpoAc7yyXgvsSHduNQAfccaQiokNN6q5xCU9AVpnJiyizXnvzbgo6ncLgJ7iMu94cfjJvqpaFCM",
  "key14": "3qEbvV9ZshXYJSBDUtZTeZH666uA2bED6HbuHAiC7jbpiV4qmRqfLjymkbZssHrhC7zjFmvhrTnKrz3KAYrizB39",
  "key15": "5qtKVqWXorxaf5EDM1hmhsN2y2g8QrD188obWeb6DcxAtPXd7XTxFEVuo91ueNATPhh1UhRHyR8gVwcKtFtFznxo",
  "key16": "5dsvnbyCoh59DVb62u2aR21CLnkEYYsF1QA44723Af6uYd1XcsdfcpibDwHFzEcMUq4xopnpJTwMXdvEKubtMRns",
  "key17": "5CYyhzf4Q6kC2d9R41KCX2ctZG4Q4aeg5cgNhmbNWKvWLrkVPbVbtpAnvguqa7BGCSMZihh4VE64bk3qgVwpTdnF",
  "key18": "wHYQErbuhM7NSsNeeHhQBjU4i7pjvPN7dS7RvCCnud4Trr3AAJMeSX4KNGt8qKcZZ39LhPhNMBxg4jTQdFCXQrK",
  "key19": "2eaem6bLgrrg56csw2Ha3gd9TqeUh63pxAvs9nauq2FzvaXiE5LfE1BT6iPWdTDzEYnXroW52YRpUBD97ENynH43",
  "key20": "4kWHYYVGFFxQv2pUT3ynvb39w8mvPbrZt95chQS4dBYLuWZpQfvZzi4P4suDFUdLWG4Pcx8EqNJBcm1xtWdVaat5",
  "key21": "4UDqpGxQZkYtiB9ixTTkNopuinDsegATGpwvvNDK6DKcerjYkQpJDSH75Uzeub28JovnU9FjR2vGQwHwJH4QBYb9",
  "key22": "8WMVpAPFHnFVF5Hr7WoLWz92N13sxb43gh4Cox5SoHQayEC7spSB4oegXNQ2cihMMBdsZwrsxgXjWeuaDHYEg9H",
  "key23": "Go1dcQsvv7Mmj7UytvDiJAUYVta1BSsceMhLyFb7BJUBgukhMptQLa7dQA8cUPCzoNZDZBpRu8MzoTzV1w5ikxm",
  "key24": "4xpbuiLUimgRdhN1pYW3brzzH6pJmQ7jHWbQhiwuSJ4uBtZDyzz7d66Pnut3FTCtKYP5pvcGeJ7iDdfdG2GUo883",
  "key25": "43foTeskH8EQ9hfAJRBDEPghfETMjXXNdRR97PwiJ12oze2jkp8cTNAhWCJ8p12FCmxdvMyexawf2cKLLCF3b4ex",
  "key26": "3XYtWxTjLfQFDG4FmgoYrfBXkAqDpVmUVCyXS2zfkS6XuFny3Z6cekCqS8C5j2TS3MWAZBm5CWRjiTREy92mo3cF",
  "key27": "2NRdQJKNVJhjf88Wt8tYsRtMxrrNpWJsp1cxNzVtVq291XXr7RKcuqFVFciguG6VYcMcpuTFiTo2UwDX9QZBBZ7d",
  "key28": "4EnhaRzD7fTNYC65Q2Ruige9Cz8D5NLA8PJhMF8VRWZsNYx7E3RiovkmbefauW1uah17ByXpKUBipSZHEid3DRo6",
  "key29": "5rZDFYhGM1SqQ1zFLXD15Puaca2Wmr5QTbF1xytmPAe1hxjcnd6SVXoDEUvajn1Q1mMcg73nGxXA5ZN1TpA4wL2J",
  "key30": "5Sw3HQVA1pfMMvNM3rHEkYKCK5GG4r9wyUeZzdNZ5J6218jsBThLQxaqBfg6w9hQSnp3jf296B53t4fp77VqJDvz",
  "key31": "4VN72vLaY6cstsrskutr27AcRdvjGKTEGfHaTYHKMTR6uLkCLdNbMEJGZrGCFtrFmHFfYBPJR9z2w7fdt4MyQVkq",
  "key32": "ZZJxcWY9Zct67aJEMpSpbxENzARmiZ6zjSrud5GwLCPMiDZAmSuUoJGyQkqvoa6doHy2CABSf8foXh7rCkczKtZ",
  "key33": "35QMDkCbe9xRDFSZpucJMZfr9WPSduBP3sszy6GJYkHhgQ6z2n7LXXoGbzq5oFghSp6fjfiR81ozL87YAJd9VimS",
  "key34": "5DUC6p8rigYbQVDfNfUwNiRJXdUw2ohWa7yXTFNRpdZGoizJQsUo7YyWwaaV2TLif2gfye9RpdYt4GqAEVm6GiGY",
  "key35": "56AibbJi7wWg5k7bTcnQxJLRoaY6JAgd4rW5Zqs46T6AwWeGpwGLaimMqtsrJetAofz7aS53dMU7b1Cico2boZM2",
  "key36": "jWciF6AP9DVVpaaqvBWo2vLCE8u1EMg4yN9swJbvsKAS5oBYQ1UcKWJdcW6L1HgqgZNAuQDHkuKLcjSKq7rpHEY",
  "key37": "3GeuuEADUzUQb3Z2R3yEZYB2H3R1NywzvMzAuqKmugaLRuMMypNrGpZdnzPz1w4YgSGEv9ixGkVxNZgH4e9PwzJi",
  "key38": "42UsKBRMsvJRCKP5agGm9Do8TVLMwzJWjXcMDN6vBVBrS59FuorBJY9GApS7UaXt9qKxpFwds49KvqG2CdqqGrRj",
  "key39": "2uq9NUurj7Rq5tZP5eQKifAFNUAAKUu8NHv4f2W15S1gePJQo7kbbPtgsyw5XBJfdVuGnP4XzusDsuqr5jiG2rRG",
  "key40": "2i7SkXLA62XUxKJ4KPEP9gr7aGWMWpahTApoNNBiv33CxjgApdMWRVBtKr3SF7ihtY6aiyJUDQnMUgN59LYsQLHM"
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
