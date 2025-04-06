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
    "2keQv9ykm4seAy5Tez8waZWfmuRTpXY9kTRP8XXZ5pZoJiA67Rbgfvm8qjzuw16rcZ8sY6kKCBMBqD6ZNZDFsR2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bkFN4yhoUhQ5G9Pr4B1nxrTjYqED7FKAapWeYwd21XHQhAWgLk8J9N95HNUzJaZ5hiGzLqAPAUxWJvon2KsdK2L",
  "key1": "3BZtmECJdZyeVmS3pUdWmcetxTh8AUPCwahEE28RzDJ8Pfpskq4xwVFgGsfar9AcgBAQsDpt7p1YpreLjGiko9NV",
  "key2": "za1KVnkQ1XcuQEE2eFHTGFuuwma4GrwbKrKBeYiiXYsYrZbkiSrUiNNvrE5H7fYDqoWqdpYeYangX1ND1D7psvq",
  "key3": "2AuUNAHy8vurLBSpoNESatHAm14bKXcsBFkNcnEGygmgPMcAareHqEFrFPVELkmFt7HCCQMS7orwoW33UtMf7nvp",
  "key4": "2i9UQpr3qQX4jhzvSLKGMwb6igQXFDpyPnE8fuqrMZF1ikd61GFumVDDBmWAEJ31BXjZPL8QP29yGogjwTG4Baid",
  "key5": "3Qd4JvyotHVaVeN6qqD3hvFNEMcFJBFvibHeK4TbH923Pn6Jcn4UMfosMTYDxAuZoudcHTdDhVLckoswgVYaH3Uc",
  "key6": "2wTo2rdyEZWPymB5C3TN4CKofvKddenzGi7R2nebRqxG7nqmYSHYEebjbgtHE4pkt75VUCbMJqTrskdqenrqKJqj",
  "key7": "mfBjE6oquikKeWAyyBV2eWBLjdV513GzZE8L4kgdTm4wCPxUS8zCUdE7tzjSZK1gfCZ8jy3M4cmYejbrTHhtjF7",
  "key8": "4xdL3hwGDGsbHsAUjLXvRKcGVPSpXT6uDuyuVEzWGnCENf39QKww6qattiQQB5vnEdFG6maCoMktwoJa4sHYj5Us",
  "key9": "v1jyZsw8PdDLxCJb5GD39mT5kuVopvUECrSq1tsk4GKkSmgoJozJTo9h8rTcYxfLjCutX9vtfZdJRyVuHcuZZ6y",
  "key10": "4s3MeTaYywZAEN6GjsvdnrtGhPC7mdbftK3uaJbFyTRH5EvRuuRP9fDGEUCiUw8rycw2AGhDu25mcSZ8XC5uy64b",
  "key11": "2QADxjmaXcAFi6zALr8UXvq5GCz3iCooaehzzcswXEVju3inSixCiYEBvqTSxWW4DF5d6aNDmSPXTXHvb3hfiP5u",
  "key12": "5EwAW8oEL1s2s1qSQB5NEuHXLEF3Wi77BfsmDAZTpq2nUwX4KLDWi1K6McBCFxZsmZB9ZaGLkfkCqJsHM2m64PcU",
  "key13": "2gvQHRVegf17zKAcDQPjJ79tPeSnQMZBiYnBKykwXRh2dHLLXRvjAaMeQCPp2ihGXmGZrKiYo45DMVNmtAnQA8ud",
  "key14": "3NaybRLNY7v5qgnUic5z45ct5YcvFmomKMdzu34r52nXYpKB5DgfTPBLNWykHWTihjnb7cNzhx9WnR8arjgFuHYT",
  "key15": "3PGzt59rnsKkwyLHxg2pshFzqrd5FtHFeQjWBkFoaQdZzHHocnjBWn3fz8yFe1fZtdvj6wPkbzMSX6TUoyudECWe",
  "key16": "4D9hk5Ta3Da13aEJwPhWru2fnSNCSzPKrZp65R2wymUR6V44Y5YDsGuKG4VtnnvYJYXR33Bt7vPQ1WePPKKazqnS",
  "key17": "5bkMp3ofAEzTcz5mJwMq9kb6cGp17i2pXHLYxuk79QSC2f8BbCsVra2tgPDEmLQPFKyoV45Y9gFxzeofASVmEHCk",
  "key18": "294stzDsTDLkVujCZT2BW7nWoGC8qdYZNEUpRmTAoUCAhLs5hVi8bW7TRzTfpUGQLK2Cuwyv7CPPExyucEaqd9NF",
  "key19": "4DMDiwhPueUebRAqohRwEmBn5xaotX1HW45gVamFxx79HGxQkdtVPfXoJ3jLa2uhtgbZN85EbnuYFLLvSDbtohSp",
  "key20": "5rWLoExoQC2btuQTJP2RZUsQoMcmx8h6XZbJsyXhFsJpWeeAeDsJrGERBtR4NHgFmsdYP2c8yRtj3oDdcifEFHdp",
  "key21": "3bpLxzXBJP2Syo7yMqUpB1EFvpikL5cVR8qG1pXVPXjX1qKiiKz2rmrEDZTUBGqf9Uk8gMNNSPR4B81fp5EotpZj",
  "key22": "sMvM2N3JerFvY6vpKqnqXiJZgRuhFhytC7eLvwfqhT3eJXeiVHkKpnWLfSVoa6XPtuNZQkPZoxGHUotSRbJFbS7",
  "key23": "FhFeoMgvHX2tS1TFKThZJosLyN6BYXiXHCy5VsRMQnbLQChAHsT1igvjjrEG6oEakPv85w6S2GrsKRXhEh3xQST",
  "key24": "5WXdkBdj6L7SN12enGDuCJGTFom1e8v3WTB1e6eYicsW1tgL8MuKDnPncCja7cPvgctw642eu5Wg13CKXmp6qkjp",
  "key25": "5aQrvpxNrBX6NzCfJzcpxapTdRAVThHpSPQHyXgvJpenn4DYKa6xX3qBRK6xu9tptSVnVachu5MnjCjSmH5ivPZi",
  "key26": "3vEqAwCrpHNNBTzPkbEgavMEPWxW85LcBBdHxfEXBMoqz8U4X7D4EmDzLdYyj2Vc9kf2jznthmSTp8xi7W6Xae7F",
  "key27": "zn5VEebsp9Jig6XuwGusjek7W6114w2RPwe7qghQET35dRatMgRWxvummk9J6Fof911RTRiRJP8rJMCFWcYCvoh",
  "key28": "5cHQsdg27o2ZnHyg8hC36a5r4QMb9NN3n7cs7ZvYwT9EohVa2FAskJQgLomwQAezqQhPtDz8iyKkkUUNktYa4ZDm",
  "key29": "5kvQim4wpt2i1x44mSZMt4QptC7662rnYwFRj7CrUJLtAUmXjhLLUhp41eh7j6brZMWzs6i9HhR6GKuoaEBcfXce",
  "key30": "ZdkLzarSe1gbhjDEKjafmAksgJirXSZghHqPLQuDcZZdj7PuGCz6aya6tmePSehxRwfnADneBCJWSmPQuV6FEHn",
  "key31": "2MrdsYSB1QcbhbJY3xZTwnpgAWyY8NiaChmL7VyuvZEqeunEdZZduK2DajBxz97Yr9UtmTxL3zFEsswW8yLk1kRJ",
  "key32": "4LHyEazdqCkyjAjnEGCcTKjrykUH1VQqBDpRy9qipxG1mCQcoTFPAkHtcNhxscF17iXrxrj1TXyhiqpz2VDjyok7",
  "key33": "5aBawqMD7q9LxqexE9EGWj7i3rMxKc7piEQ531DCXufMYa2eQt45fQhgFPHHde6xVuG1MQfBCGtXdR3qD2h5fYSm",
  "key34": "5bUYRDvZPaepZoMD43mf91251HMUPJfKqTasVmDWL3wVGutxVXsdAqvWmpzxY3zxzE42vBnx22wk3nNtDmgeLaJV",
  "key35": "627FtJvx8RTjrLGr94LhLLnqkdBs8FQHmEuL9JFeDP9UYhhuUXL7XS2wv7GA6NfqSJR3RdWWbn5e797EbqUr5HBa",
  "key36": "5WS3Z4xBpX4qcGaHHbtgpsBDYmk5tdSPSqxobK2kjgoouSUHeuAuUFUejSe4fj5g4UQc8KYziBb8qCmDmPd87Av1",
  "key37": "5DGWXorBy2FXEggcvX1392wQr4ad4N19SnFHrmvNMghxKQ5FPCHBezkuEpFVako4N7LjhrVV2zZH1tiZBKzr9VUs",
  "key38": "1WEoy1CgVyMApTHBSxC2Y6i6o7UofMC58B4rLgRNy8hV39tPkQ7zo6JWSm58nFciytf4zgiBjP8Mm98LECPfyrn"
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
