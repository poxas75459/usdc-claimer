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
    "22hddQHFbNW5VWh7qmokAJJSeqxGs7M1JSBEzL1V441LEYSXpQgeqMx9H14hEbuoxhh8JfjCQV3GjJxPk7v5iW7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nPGDpJwZCJXtKwFYpJM7nGijA6TnuUqRv9Uu811PQxLgtzaMQQxzUHviwjFpSmyAyjPp5HBJwruXR3wYzrCiBjA",
  "key1": "5tURDM1F8t2kx7WCmYuQRtdykQeNutjN1fFcSWGEn4XGdXCUdXi63yMiMxKmnUpYEaBNLdsnuNJoKeHaX64vvnaS",
  "key2": "4XfCKvGG4GUu4bYXW39YowqGFYD1n9DgePHucf1Xi3hXXvbb9U5iVgodgDBo5cicjMZaRpCiymDN1gBmurEv5UW6",
  "key3": "2hoiFrAmELi7hMHKAJvjTrnr5kW28qraFHRPAJYhqhuEKe1rtSQ2dkLLR85Txwz2LQzyao8LL4Si3243pGNnMTzx",
  "key4": "52ycpm3YGs5qvews9m5ZCZjh61BNK9Cyed8sEqUogre8g87ADAQKmwMnDMPWXqc1RxugPMGjdsgPeJcmZ6LKvhbm",
  "key5": "5hv41FMmuoqwBmjznuzMsTfY7yuNVJxdvyFuyYMgJcbKjusVQKMDjVSJewpUMr1DgJeR36geg6hND3EGFX66pYQ7",
  "key6": "2MjSMCp8CtqJcZBgL7hC3RUZiBJUbS2KN1JB47iE8kq9wdgoNXuWN2fjitiiUkpzsg7zQp1rGPpn8ein3ZKpdjcb",
  "key7": "2XrEdyj49neZMEQqPiKQAMMGr78PEJ6kkbXiqgyFxyvUpPPk2XbNP3BuSa6JtDnwZhwdHDgrwuqGXyYkApNK9Kdm",
  "key8": "32yknNmk1s8U9jdbYSVkvk4S7LkrpEM5XfetkfnadkRPhbC9eyGvZVMG4wAzGxGNwhJ66HYQcoDjgRqasW5tGn6g",
  "key9": "5vhmWoPDGz8cFEQd8Z4pokGLk8gZZKq3FcWVxjC8RhbGyrPWqqmJzSnduXi9Pp5gZigEpEVoQWxkyqesmD9uXD3g",
  "key10": "3znaFbokoBe8KXQj7cJJ2TYpiLXTJwiUbDnnzEHQvqh7xe6zyXHMVzFirqiSv3s96kxnjbP2EhGorrnxYQZCesRN",
  "key11": "2Qbzrqtdv9XrKupeAR2UiWVYehJi6DQRtdvnwZEiBmhjuhZbfFoPigVGjD7CALTHPyZzLmNB5QNQbzEdTkcnn8Sb",
  "key12": "57iLFDQBYqT1pHBS9Ju93JSGz6wqyXHzKowbkE6UocimpTmVq1WWJD4zXJAnVAMDy1jm7rvhdQB9wPzZgVvE35pR",
  "key13": "5K3Nw9JQmX3pM3p12Da2hBeZmnYtMUNNS7TPZF1HgJyHXSfWwjbHA8y1Q6GcXVvmww2rYhWQooy517ktfLTgbvmG",
  "key14": "3Ye4Y4pdHautJaSteBua8h5UcqVqcctmfrjRkArmQ26kndCHPqxwtZ2TXZ2ASwtTZC3g789ysx5DiwrtPYfiX3QW",
  "key15": "5CCooQMSQeriEkWMBcgHnUNDR9htcKatM4PVStP5hQFDtN3dJ8kBU2EqMbFHiH9WuupCZiAbiMJP2gJQheX5fRYV",
  "key16": "v8YLpCtNEoAZ4d3j9AziNqj85r8vv6DP2CLwVnvDiorYtQybamGqH5sPkbA4ejCFkeUaSJYUhhNpYoFU7Uh8kJb",
  "key17": "3uasvF5oMCnNAEK85sRkNjis7dQDSZTDPogo4nhjuATvSmEsxcNoQaWXwoJQo9g4XdoSaQvQoCMLs9CXDYX3i6vG",
  "key18": "26DzvGLk2dAdB1RiY615yYAP7q6sF8sy9UpBx9jTUH2YKgFzFJEpw65CKnP5HAuDQsh1oRd8pZwPit6zzSspeLYG",
  "key19": "5jvTXNUzHLBhU4AoqUYZjhB1GV5SsUKXzmsfokNk8LTtHE6L1WdtqcrzMiQVc7wuCt8xUtHpBw1g5ViavjH7s3uk",
  "key20": "35i1FRwiW11RhZuTjtEYbafaUchgL2ahYBPrmKfprJjSRyf6guK8GMWJ5D2awW2CgRtnjVzpo97mWqqBwV76QxTF",
  "key21": "3UVDuwRGMc9Fb9pkFxSziULh6ZgqxfxM8XqFwwixBYSeS1N2QsrtZYVxfUx8erqku5V7H4oZwt8vHxYfw2SLhtMd",
  "key22": "5XuiaVpbVPu1WiMTdPnUah5GkbBbDECPRKF8Gaf1cvs2fS4SB4LAPFAaKmguys6HL3JJaokvpW44VsemXRVcAYau",
  "key23": "5aBNcsciZNYjenEtTpH9WVUn1NG2QJCSWgYMhnFhwBVtDPdnXorZKYfkDvPRnb6Ed2YDPHpMJcoPD7HFcYsHWGsT",
  "key24": "ZxbvFWscBftmG5auXgu4BoRCUAKUQAd9kodFVKBD96ycs8betqPsHWY4oWwQsG2ct674AWpQZWcbZtBZFsknnx7",
  "key25": "477yCcPRvwnXgcwiAEPEWYGGWt7vKdc5sczsFoFdKYbhtLjD7aYavMDJSRDmT9MvRQHcuD6UvZowBBDQVzXu6tgp",
  "key26": "3rfBpp1S2Acm7S4ofNkQEwnnfFktaybtP8iqDzLtyJ1CcYg6HDCBkXYvrhwJtPny69R3h9SCbBw7d9ThmVJuQogz",
  "key27": "3rygQS4bwUqtZFJczYKRqfjsFcWWsBtdy8RQfeQ3GZfSEcMTSbM3G3n8jgLaKkvacv18oiJdoADMYqXbUTpbbBAi",
  "key28": "2rXVZtRFdMn4Q9S73ZSoFkU5fwQ2krPjq66eDvGXrT3g3WhheMtuyX2BKLLFSJYYjixaVGKrGJ6KR1CtcMfsNGru",
  "key29": "67ha9hfedVw9aoyUmDRuL4vpXkPDBv59Ahsi7JAaXKXQQWzPkqLmaA81gyZvM2YHjMr12iuPzPHSHWcERoBA7Rtz",
  "key30": "4o5iitbaQJ34SpsnfhYRQTcC2Menoywh3Z6Uwdnjpy6dqHDL8LSD4JjFCxAntohMJACWDUhbsRuoK6G74kXEFj8Z",
  "key31": "5gGH65wgH1GKef6WG7SWWAoXgX6PYQqueuLeztHTqfemCX8qm7tnKjBGM2CqJ2X4Vgmh8tuX1dxG2HTd3XJwuve7",
  "key32": "3W25SmEVwzAjvqv41UydLw8DetwDs41TUFiVRnEJ9GJvBgzaQKhURAQNhJmk4uyipaERcgFKGS3VkaLQyCj4teko",
  "key33": "zxmWbWnavuTxHAVYxvJWfDf1r7HtpgMKXYmrBz7Sa36h1byrNLGDvzVkcDTvdFnHs8jca3jbHWr9fyPAhwSLGWy",
  "key34": "4cAKummTnDKvcrvWUnAABTFokugMUuarUa1Jcgjsh8Z5WZzZys6qDULMnWUytAGeKxntLBuBJfr51hGcWokXXeEE",
  "key35": "5AVrmkGUmjXBgvEKQErRg3f3q12gxGcJVVXBsDfg9oMPe46F4uAufS5Xnk5Dgd7yFmoU5ACLG8YvSHthY3tMcHud"
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
