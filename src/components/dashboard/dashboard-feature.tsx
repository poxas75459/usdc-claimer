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
    "3zaRwNEQTGSSaj4SueDN5MN8wS2RVwuif4mJVFDdJYjsTDXiiKZHjvLsTrsKEAjbCP8Q2W853nttrZgYq359vpP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7fqDxmgmXf2ZL2fK7oGiDSUZCfe131rvNd6RB6nh95LU1AMZq54NabE174EoRQesihAw1Ms14Mwsr8txNbBY3t",
  "key1": "2v9vK5FNspVJdUTLWs2418zxaUpEn8fa82r22UNq7eMERPVbxwwrvyzSzUuRyDizhBc8q7FvSKqtX4SY7nuBpaL",
  "key2": "5n7KspHah4zL5xpQDbmGM79w4D12MA5G4QKhEWrM9RwABeSHwWnaaivE1xrC5me5D3ZjnuYfRJZTd2VcjnoHHDE5",
  "key3": "ib1xmpehe3atNT4vmHvDJ1qL7JuYJ19ecYUrLJj5dsix28Qu3XnkkfTDpuh4FHaJxVCv97AzDj2d4MeCyNC3MG9",
  "key4": "3ccMzfnbrcycVArNt87sBDbPVEVgiek5nt7u94BRTx4LaN2xVEgLy1q3cRNx5vzKYaZbh1k5HR1T1bZJ5QfvVXQ1",
  "key5": "4QD5DNcoRoxyhZMZmwzETcjmVQW1rcCaFQsieCTCJd39jTrNetTNrCnRtMRQgSxez2EwayGXvNY3NzUkDgFHJgWe",
  "key6": "z8meCnUPXQv7sVL7ebzUPmUT8b536piX1eJAdtFLjWQ5yqXdrozJQ3tpQquKTJwk4RokXx5soBRgo6nQ4kf9wut",
  "key7": "2egme63J4zP6jNHV7AYLZcc4nhbYu25aQSAJryXZ3GTknd6JKXBLcSvLTbx5bbJuEkDNFJmYZtJomxngUMrGRiwy",
  "key8": "5qhoUMSvRkefL4Sbi6Y77Gju83Mz95PLBmxRuELwLMmeWiC72mDkDxN8nJKqSNKZt9cpSkRXDai4UiARmvL9k1B2",
  "key9": "MkKuSM8XdjVivLMB7LrHmuMaYMuNEVQFP9q5hQQzkP8cQ4cnBr972vvJ9sJrJiZbqL8ws6e4nh6n6SwR8Cat71z",
  "key10": "qf59me9wGoQAQCJX9NioTHHaPZRD45LLvjfVnAP5g1MMBHRW1AyKphDvwxo9wbYtnxzgQ9J4RyJYCEBFYWxV8J3",
  "key11": "4xS1613ezvMgz51NLS8uBTfFGVASeqHXyDkH5gS8MhssezM344f25H4Qie4CLgUCMB1x7wnN2MnopAwyXbuzeJKi",
  "key12": "5JP33iw7h9QwLsdeNjEvpXRGa1rHGZrz4V5gpBFCnduH4T5Zxx5HxGYvkCxSgnBo76xWMV1Ec7A7yxXrivD4fDjt",
  "key13": "2gBndop4b4qagnxzxLGV5sjTq7D9nsr3VnZohpb52yFPnibyUkna299UXa8F6CCHWiJd3VDem3r6mgYJQxKCMRqm",
  "key14": "36c72M4Mrqf8xYzJuQ4cCvuSgowe3FM21wcx4he31c2NC2wxef9wngygM8srVfG2XekKUMLLe9Mctg7GYXf9fVdA",
  "key15": "5eRSUFXZc85i5QKGYsKFqDAQ4mZWRWdGR1L2CnX3uKvH7ti4Mc7eta9NYs8PcHaoB8zysgv5jSist1svGmGGWQJh",
  "key16": "32Lrc2ti2XhiWTLdn5BXGcEpcnAi5tTSvNNQGga3mnxr5PKENSTbvVLnh22bEW2qUTMYxXauSaaRirhi4ogruRMQ",
  "key17": "5r6ipAViSBvK8q5LPvm4UZAqGDBHnUrQrAPKBMNkzdFMWLLTwUAaULfQtcT2QxLo2EbpSTXJMLJZ8MVLqBPzPBi2",
  "key18": "3BCemGkpHphw97edeoEWJErsqk2CTmYFai5Ym1HYj9dViKuQUiwS9JraRadPWsux5gKoMVSvE9JKJvkE6B6uwmkp",
  "key19": "5WUrTjRQm3h3nZ3QraHXenJxLL5pxg7QJKuUJK6F5aS4s68Whd2L9ULFsYQUfHhFvmGk2mwp3aCU5Xb3nNmk3ymx",
  "key20": "48Vs5t1EajEajFVYqJy1Z8LBvTRjkyM1kT5x6hvPCUc6Vd5uuh3s9hg9q7Z3VWHb6nGF5Xa35KXna58ufu2L1nsS",
  "key21": "WCvt1jXaQ1GqYQRxQ8AaRvTD4qsmy6J2qgH6kkmApnJADaF8ZFQ9YwRreUowTRyBGJUKMBk9qfWwZwEoPp4N8aY",
  "key22": "3h4wyhx85QcaWjhouU4eELEHNpjpngMnvE1SvXCRX66D2mr9rLNcjUmMiPRpTVKMrzz99XWytU4pNfqpDY6dx8uw",
  "key23": "2XT6PBCJ1AHFGEukAAbKHnhVKejkUEc5JuD79zdjNb9u1jq2QrsaLgWMwaTmRhiPWpvvKRYsZDLYXcSzNs2gGSXL",
  "key24": "4K4ziRG3FjyPMFEJyVbN7GBFp6yUNAAkNP54Dvxc4HGsRmXx9B2NgDbmupzpCYpsDE3dvN9AgTXrPqKfqDm825Su",
  "key25": "eKyjH7vhMtXVjvrvYSrZCoXYimNLpkEvjmXYAydo5QEBZJSQPY23bfbRgeBSNcqNqjLHq596bT94vUxCZuw6P3f",
  "key26": "3L9RY3UG95Gmu9r4b2pv2THN54NsQ7WvNv8xjcYsepWzvWQLzN79J6LduxefbqzEvwg5VREnZ7aLom3KbDv84We1",
  "key27": "3BE2zobaSRw25PjJtyx16JoCkAW6BvTXUgobyEdXnL9kR1GTGeZx3koxd9vpLXDaeCfdr4ut6iup7WGQzDKQcvr2",
  "key28": "32NfpYXH2VJyLDKxFxwfwKPk5NEKbm1ZWuMxMg8iajg1HUqHwKXEd6uNe1go6eVNbTwb1hpEa6cJQMuBiA55BmuM",
  "key29": "49djhp5rG6LSat4UXGco2LCurCkGMqRUxMRjCSHmaB2YTkN2WrPaPecuBMYnoR9t1BPPXS6iFtabTb6xzHQvUbMi",
  "key30": "5ZDsMSgK2kT3QjY9gDajnmd3YaamrHEviqaJ8a1NS4a2aGfrQS3r8MEUH6jGTfBzwsrT3FDZ73mT36NLpz2JY9LL",
  "key31": "zYBSYe1PSeYYDZduy1vcUx9tCMZoWFBtYTUALELMXR22Gws49rRSadNWtwDgVxBRwnrAUjuBn6GWN2G9pvjj78s"
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
