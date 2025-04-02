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
    "2BtrKxvPo29aE2sQGVseu2Maf523uABwHB8ZBSw6qdJb5gGpxMyhJXhWw5fjwSN8FQWuj7PYectXnsLWHtx5EEc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uDHQaB56KXG2bvB2ed1CCrQVHx6VCsAfdP2QjbcpMgoiBWaKoeuoxvjFMVWhqsrFJ6NcEzmnUcEQUpPAx7iW3Zu",
  "key1": "22DiHq7e59eZhYi1sescTf6j76v2QTFejoG2QVLmfqjHdG2AyRk4J3pkZ8GYiqw4NYcw9ERR8rBvxK9WKa1LL4Gd",
  "key2": "4kh3VzGvXcZGVG5hYuHi6dpE4kKzEA9oXRpJB8WgFwjbF2g8Wv1mbNT6BkmgZsornd6grSqLFcyVJoxbPAB7mMEF",
  "key3": "3qKB31KGYqbbVQTaQkie9Qko2C5yGYs3mzuLFwgtNr9bHxntJcK3SA14tUFRARgtFnskScktMTfHx2Nrvcq3qNs6",
  "key4": "2HJSMHH1mfzjmNmNp6kJdcS17Nm7EMTpJyEhyfFNu4TyRwvmwsiZWL1ZBQjDs6fWHNK7jYqCet5av5E15dQdveUq",
  "key5": "41cYixzCo647m2n1w4UjWECoqgdjYisN9HFGEFerscz83wmsxrXVKot1WwvBXQPKWW2vfboHBR8bPAPSs9N2Ltaz",
  "key6": "4GL1WUcV3baqt6JcVFhtpMnXnAE5kmqhVZxmygXWCKiotxXjFh1fgAeix29dZEZ6XuR6BnuZAxPVoXPmd4X1gvEL",
  "key7": "3kmsotJnpbKCqtrmEC5VTdbdBTLELLzgbqggX3nYwzrd2dT8Efxz4kP7yV8mDhtXC5o2smKnm62xAdtjm9duQKqh",
  "key8": "aEUiQYrn1apmbiEjwwKHddWdrS6c9P5RB8cdYsssxJx6p5sXCysfbgYuQRDn4Daacs33Hswx7saZT6Q16gEVedZ",
  "key9": "5Zy7ATYNxBmxQaDJ36fFHmU9QWhXn9BBH1FRZVySX6gebLyahm5EBtsvSLhgVaQ1ycKWfhJyo5QFPSALFvKwBHgC",
  "key10": "5A65dBtfkaC5UqSrBnQQYyUruUuXQ45J3smoqx1vekuK7AWWeiJvr2kVVYNwnL8LPziXWtK5TSYjSG3fXcvyBpAm",
  "key11": "oQ5TGn3ZZrpDUuv1cbqNNdyCrCG1Yp949cWCEcbwJy77q1WaVxu5wc4MWwP38boWmLMMtcy7GSWtDDE7X8emKrx",
  "key12": "2Sj2wFfQ3cDNd8fUGKaoNLYSrnSdGx4iJvKGbWii3kXX3ka3yChS1SLipRLEza6CxYgKU2jZvKsodPHYu53w5Xzu",
  "key13": "5yxP9xMb7yvNFdtNbacZwNage28Pmj7UFdANQ22NYVwTmWjn9pjFEoNF312s5NFuUtVBvTRxVxSTUu3ch3kc3Wqm",
  "key14": "3Q2ShzwEWUrGT99XoY8Jpak7CyJyqJXkEfhNusr5p9HPU2UGK7q9W7UQghGUHVSdx5Gq5X2PF6a1pw1UT8n2fhTj",
  "key15": "5aw3HRAqbCeAzHZmmvSHHCFSemWRTwXf1aj9qa45eoDqisVZsfEtGTHhN2iQQAUnjHBCDHpjJBs8AyjcnRgp7Q2M",
  "key16": "4dvH6qPEcp2zU5FKdS62uZ67XDEfEVzNABwxKXPm9rbvUG1kkJaymWWV8RCS3Vdb88Hyvefgny2grHsBzCFUiDLK",
  "key17": "3VteW8XyrQd79HbTceowbofVjDrrsZzfaAYb4w3fyfzspotoaGHoQW57cGcH1x4dW1bqirJ2BHdysVNexgSqYeyF",
  "key18": "4JRRSnKobZMSZZSA2HqfQMFo64FcdbEDz4GXtFjW9bdkpYBoqDwDH1dG4mQ7HCD29FLd7TT8fhk8UiM94xxdfKpG",
  "key19": "rbEQ2qTWQepGPurqi7HQnF3yCtawnJs29f8v4RUJ7gKKQNCyj83MFv3nPLUHKvbsmRNHfcbtoqNWw97NAino9oo",
  "key20": "2Aw9YaVU2Ey7FiZ5RBPgefQTuuuDGqe4y5MJaBVHcANgGeXmb8zHEfi33s5A8dtVhuQyYKonLQRgWYxsY3WkTqSo",
  "key21": "5pADpbGLS7dGNtRZF5BvmktNbcvgZ3VGiCNV1otFpcGjRorEaYarE1GkU46mqEDvWcjMEtVWz4XeWoT6UJgDuHby",
  "key22": "5YNLRN8KNKtTrVpC6j2vqC49MNYFehEeb3uqWijEbEdnFbnBkauiwvctmMo45WmsToVcWh2pChKK6EepmgwPDBra",
  "key23": "mF5DF2zJeCBnCGxZ2U2t4tv7K6wAnKhQL4bYYjwxwN7FHjCdGgNMQseGvaWt4QufhF2B88EEGsAHdbLMsTwp8iD",
  "key24": "2wimEqJ3jAkWFnfFYAqUCzzNDTKjsjvdbDGoqkqgYxBUUhCexN3dhC3eYjJPzCPJSiFVQzBpcHaYsJrFDEGeXYS3",
  "key25": "52Uptky7UcnzgivUdsmjcHs7JXvmeF9MGN5sDdqcdTX365fHJRF2CtozxfQqZoPAw9gwQsjivoG1TW1kAd2Kb9No",
  "key26": "5z9vobpPMbmjqibTYBM3ZT5QzANpr3irhZEcFDzPjKP2VMnFzJfHqmkESNtdP4fpyKvkbgSaSe7xRED2ppBURNAu",
  "key27": "2hovWunyZkQ8bdiUzUywaa5wfqrfPQFs9jZYZmTTsTQrCxwmoxVTGcTkMAErZHGCTPX4cUhj9khpk2aVmHsQ6KK3"
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
