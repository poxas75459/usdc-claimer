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
    "5W7TENuPJj9gaLxa5SnDkVGag7M2qXvAadmJ635tpjUPHiSVEVYLQ7q18bBUJk4qeJshybW1E2aRwnrBQ9DspVE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsypJxSX5SGZud4GG4PKRgTTonN7971778G6W75QQeGFe8fg4qMXU4wZuekdeo8ATNLouc8o1MsYycg2v9SqGMm",
  "key1": "2YZHVvin6HU3oRYA3Pvv5epzmPxKgdSzqxfMaLBPha4aJCkyrkuhPCnra1Xpcbxkfkxh6Ed8gk5nRkTGXc1G1WGT",
  "key2": "56mx8AKQSvu5TV7kbWo1LnbfUc1AoceJb7pcM9PBhBhXvoT6fa7qWzmXTosjYchMmjGv5brzP3Fnxd2vzQvLT7zJ",
  "key3": "28aTT3VPsjvhTRfsStZtMMiihnxpQECAy3p1KBXU7bVWEW7U4TEir9NR3v1f1bB2vagu2VetmM9SsBf5frXZs4mJ",
  "key4": "4UGT1mLKXjNSkGGb9xzXBMkbTdHzFMonSjnDwt4s63vLszGpraMmij9PTLaPKNbPeAgyWoaJGXcu8M2x8T5yu9mV",
  "key5": "ziX3YhbGuMNuwcejHXnJY8jVjLdTLmtKEdm17bPSnQc1hHgLoyMNakCybTirpduVhWtyNqsQJMX812sTfZtZerp",
  "key6": "22DQvon9AtJRvPUVjFbGJ4aKE28vViKa8p3tBxLjxoevXypGQuWouk1PR4kdgDCZe9S5ZYdxsf6W3m9opi8fJmxL",
  "key7": "2yT88C69wttan3qqh76wFkNLnuy8fBXZ3AnHXTAcEtjrEM8tnokhifLv5SRGndjgCZu9ecCaMXvWPdsNDr48dGy5",
  "key8": "57T7buCYCJcKMHRpZVpTBUzSjafn2td4Qx7DcnJCFxoaynZR3H6oRyMtbfkMKGTyfKeNg446GBM4fkBpuZpEaFt",
  "key9": "5c62A7cuhSxLd9gVxwf98uES3oxTNcywvQMCftx6rhHorZbMoHYNrfyh6qWzRwkb3EhrVwaQbVfMKx5NqTCsM9j6",
  "key10": "euTxaanGhB3N5RjfH8c1nzzrSCA7edGANpbpwbwE1WpVgDBXqsStfDF49HcxQtrPUfdXGfLf7ykcq3KD5gr4ydL",
  "key11": "3TZ8HttVszJb7HZ6etdXHtBEjdG9XFkZi7PZKupubwZKrFBNrZsEkvUaC3NyD7u9pcLDDktAt2kqxrfjDFKCMGtq",
  "key12": "M7efoksPc9axaPsecpdPSRw6PLGWRVGEUSbFVMgJZBfXhn8ixKFXEER6nE4b8VFc5gpTWEU3U43DQzZgGYdScqb",
  "key13": "2RkWhyEPFinds93pmgaXSUmZJDwoE8zj5zZzD19Qkdf6B7MRYc7aHaccsH3hrNfEeLfAWe3g5sULbuoqF1MgZK8K",
  "key14": "2HfjV1R3AbjP5jYUoBvHhq3WRzDnTBusj6AZYv3ptWVifKPCFo9qKfnbmECr2JPnghhkHdYC1uqbVTqyQ6qTDEc7",
  "key15": "5J3a2wvG95pJagFkrNV7ALSBVcjzCM6eNCxuP7TtF1M837wMa5vjZ5Vbg8Pg3Uhi8DNcVdSCLLjWs32Wp4Ao3Ycb",
  "key16": "2bZ4vHCcBZ4woQm5XuJGFbWkiUShg1SRrLuHPhGqVhqVn9w32kihjefzv5d4LNNUEohX7Sp13yJCT3CXWupKmutC",
  "key17": "3Q7wVbRBQefUThzxbQkJxKrD6UCxAYcmjLJNr6WVkpLxQ1vE1Rj7Ee2KyXiMGRApGCS7LTCj4LHDN7ddYrEMD8Tw",
  "key18": "2L54iuwz5H83ppk2xjBBDB9zYPFCQ4VFoRH47dTLRScaa98n1f5SjsUJHvBDh9QiAnHjdK88tGthz1RWTYLfBNDG",
  "key19": "3aY1huCvVcPrjRrVJHWnpSnDHBzjXHFfrmK8T9NsZvzc6cahQLuzt9sHMWQTcZbSDESxgH2Hh87hrtuh1BN3H6SX",
  "key20": "25UcTXEx5LPpgd3BoE5QbrxUb6dymWoNceRmUebHZiWnsq3rTYtHTCWLvCwe9jNSusG3szVk7ZCrn9gDpBZktX38",
  "key21": "5pnfWDDkiyQN5b6BsKJFR2351FGhCQtNYhABNzByvbCvCdUT3BSxd6K6JsniVdQ5hUUWs7ZMARWaigXEzGUNaAEt",
  "key22": "2C3CwrUswTbPiAA1qNopLEP5PvuUaEQBgaZbBpMMHXBor4vEtoZrCG15Z8b2UiECUJmFUj2ndGxa4iHx4qVW6reV",
  "key23": "5pM5kva6zFYvrNP45fPRBkmiUEKUkuLrtsPsP2khEXxmZ9qN5hnjs34TnsamDgqshpk8C232EkAjGhwCYgp8SZe3",
  "key24": "1XYQFUCkZk8hF5Tf3iWU33Fsz7iYffPngvoGRHGtNjHv7YDv7PtjGkUyj3mkgFEAav5rnBQV2KvCd4hu8pcBJ4T",
  "key25": "5SvLnBPVp1FpLKU4rQkjV51KT1Pnxkzc8EfK9XVBsWLDntDHKnSiBrURgxfdtwjBVmwywJwbjoD1oDwbCEygPiS5",
  "key26": "2GBS3VqRebAsgrx1odYXhj7sC5Sy7x9kGcXEAEkUDsBguWKEdfqkZwTvehUpzEomne34JKVS4zMq9kiHZ6NsRsce",
  "key27": "2r17xr4Ro3AR12jGbQqKogLvCcqxoshmUQMKeKZe57UzKWhPfaHUfKumwYuLDmoajBvo4zB2StFWcFjnGKBeACSe",
  "key28": "Cc8BPd2BBiN35JAvdLvetypCisXYaJLjRghezuEQQCzHWCjdZTmcVmuVmm2jshUh7MCZVEnpcs35vLU46Khx9sB",
  "key29": "m4ihM4FUrbn2HECkHzgoD5fwvdJW2WYDRmK6raJzDfvU1wjC19knYP5fxsN8KqKnCqPk5po4x7LT987fpCkLjFw"
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
