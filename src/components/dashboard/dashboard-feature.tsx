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
    "2UbkiPXJ1if1iNghhyuQKKcywAfVu2PxMhWJyFvyCszXbpcT8p1F98RgTTs4bebRscgcLra297UXDLFQmiHdxxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwEZic6PEwxxgdwrL9iEnD1wcWsnk8dXRuRfwZ9aCazzJhL8NAMkgLhbBqa4KeVABejiueyKwHU4LqE4UbsPJ1V",
  "key1": "4DaGs9jfmqpuk7Yg7ehL31n2AJ6JQoxWPt1crAEpk4dBWNNpGrvGNhANC5X5WjapCh7PuUFru5Gk2PMijqHPJGev",
  "key2": "5hbMcHPDcrquSgBbpNcnn7CCHFY7jiLixzFYet3KNanmicG8ri6cyqDdC167EEq2XE8jWqCTKxKce6uJZCN7DpMg",
  "key3": "3yEPrurbjDLBqCvV8SKr2rWN2AyViSUkQqrHH3ee8XdkJksAtpdY4rZJFwWL87WAvor1Rqr3i7SBadCT8YHTJbxD",
  "key4": "3b4J2F3PNQXyv1KbC1R4AGdnm4GLKTeibeAGHsAzGHaDV3TPbZ3S9TiaMP5QDpng6KczdntqfXxw63rpiDeZjYbg",
  "key5": "5Fzcw5mebS6LqiVyK2ut4xKj4g3N34srj6VrWanSgTPRF3UzKzmAeJtfHM9r6KWsfu6SshC2XZvGwqtYkj3vuCmu",
  "key6": "3Nr79WEB9JX7nJ9weVzgNAXUpaKh2nwZVuf1NnQWj4hnofSLVaBxk2zDp9ssN29BmniCpRH17EcgiGpQRZmJsFFb",
  "key7": "SGSRMDTmGkoG7RZDzZ3raCLTPkHenyqdubNkYgqPGit5NK7Dam9x2oLwjzTpLKyKQ6BECkCogj3FB5goxjn88sd",
  "key8": "b7sQWpM2t2oLfgLqxNMKeXnBQNFVJJtDAzBLanMMjZgRh4ekuAt9yHyot4xbVYfKNeznCHBRy4CiuWxZCpsAq4m",
  "key9": "a4ZxaqgVr4XnKje85KCQ3NHdUTN7oPPVrmGf4kAEuZLjCSWnzoVfaW1xe2nTkMSP4R2XwaH8TueRYNWy71oATJn",
  "key10": "4fDsRMTJtKQdL2uqZAf66XqdrtqT5bVzZx1sVuZjsYubGU3PERyJpuBBGQMyEae5JLJUnAT5Goj47bWyAkVN1tir",
  "key11": "YV6efunPicsHEp6hSiaKWGzyW2KTAhGf2uh7ukRzLyw7P3p6j79zDvZhpvRmraoz3kFveb1niE1TCxVTDjPMDnj",
  "key12": "5VbkcwnRcbg4FZRitNeEHGz9ZW3yhzt2EqAacJjdp1acGSL9m8gTw1RCjFZCB7oScVAL5qjRj44Y7tEdXxxKi8JK",
  "key13": "3eHHrmwhC9nqZH8gjbhwcWApgJLV1GjjMTnMA3gdSfQ6J5SBg1Ki8Vs7yvnWtCMZyscdTGHxgU9m6VeP9iJPSPm4",
  "key14": "5kQ4SDpt3M7o8LGKsWyhp54MgtJyaTRk4W12x8D6AVHiMuwrVNqk9qEfuLU3o2PqoSEitNTgY6mGJMDnoFQJYSPR",
  "key15": "3gZfC8vHcartaHMnaLkxN9A7svSe2Ui1SEuorNYtftk5tqzsF4M64piSuNW7RpCGXkXvj6cjMNmp6rapZsekJQQd",
  "key16": "4XMeWCxs4JwsMP77QqA2gqQrujFFLbgLFSsG25EyejNMyfArk9RtPt5Zy2Gzj7SaiMaAZkJARymSY5cAvs2QikSU",
  "key17": "4KHK5rvennFXhhRsZDRWPjejooQpSANt9oBBxXhpErD1QELwT89Jj8PYe6Q2GkQizTgGayUKXd2RZ8jxMRioC3RY",
  "key18": "2HMiGksUu19atPbnYAfDZJhLDH6oAjca5sC5XXda1fGT5waAwmQMJqUG4wHjVsVev5Uy1iZBULjqQnemZMK8tX3q",
  "key19": "35ppiRdJeBtYHpifrq2FGT9pg7DpxACsX4WpFUySNdLXXLuLj89Wczu4BJsGxq74RJnAENGtw3cfrDuPivGkdSeu",
  "key20": "2NzgzAEUvVScQH2ECDb4sU1Af1J6aH7ZPnuomDSXJy8kTExY26KU4hJu6GAvsRUSRQrTFqUmGkYeHSpdHhMrMdZ3",
  "key21": "ZL95KsdnhU8G5yVKmksuAHm46Daaupi2q36UKWA1oNACgPomaAr2fem8ecLzPj3LZsZQoHbVKCWKqhm9ninj9Bs",
  "key22": "487L1BEa67D4cVxgJKoHQiSftLJtm85ELKE4KM6fQJpKqmRik57gEL8A7PRBZVnWPDf6JMtCZBTrcN2hdKSi1eWJ",
  "key23": "3k91wKi8DJDdNP9wUHVsK2JFD4ePRzVwGHrVkHwza8mGoBY7UEmsWEQpvM9aWBciVYzFQvu3P3JsEdh2vxcbKoJF",
  "key24": "4VnvEWxAUQ56Vf11izWxW4KmBf72WrURU5gAaHn4mbrvmQFjSXtiucq3NMGWkDKQgknQDHSTDhuZm7sEPc6LS1Zu",
  "key25": "3W2xNmroc2YuyEnChQZTEbaZ61NeS9wmqp4EGSVxEYq9Qkwj45XArsR2nBYwVB9R8dkdC68BYWUcXMLk6dmVzPN8",
  "key26": "2YTV7ZbFiWzFZq9Ss2YKdjbBuQoSVdFCwzAHsxPTnHUzCPzPQZCaH2NutcMHEMLuxok7HgdSaET76eaZgTAsrfP2"
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
