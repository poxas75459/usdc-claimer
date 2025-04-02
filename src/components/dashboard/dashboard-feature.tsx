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
    "32T5zmsNRRRDVQWSAZNLDSQZtfxVGZYuZ7eGjtAxFgwdyJY3x8JciMde5zaDa7SVU75rbdaeeDgHPhiBxvHuNqQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSTmCsRy7YZB7RVRAcozFEzxUmCtEh5KxHxipLggLm4MLjM68fV66fYzsrmgywKpZuZZv8Z2CTPtFrtUimk8LXJ",
  "key1": "3FKaZR22aarDujWi4eDvUHAMZLqMfgCoVMhvXJo7mZPAiRY6iruhmKsL7vMASCy9BQJx6w3cRtZdSGtm2KHnJ7Jy",
  "key2": "2jyLo3UAKzj4tKBYr8oLWEL8fxPk8je3K6NTGUhaytE6RE8FQFwrzvzjgs44aq2jkR3RdCQFiAz1RZ8SPrCa8wrd",
  "key3": "XqWRzNKzJ6mNNozbMWC9JTssr8yBRRSLRDKrbructMZLhcpdJXy9tuVUwoC9YKznue3VLyzS38NPWtov1J1rX7W",
  "key4": "2z6SthC5SHfL2sZmNUXo6zGfFgjmTgRTneUs6fH5PRhZVoX7seQpiHWAgNnfyWF88HZbYE8MQHkAWaU5uHe2waJo",
  "key5": "3MhQAiUkTQcrZJhHht536RejeEcsanVqf5weUMLSsjGgipfwKWKRwso9Qjg6TntQKY2uVbiZWcuTzH3Nhp1aRwvG",
  "key6": "4sZAPqQizxBauMkZvdk5R3fNQt2LpV4ayuJDtf4p3ocY8ypCDBJfXyaeqnSez7BfAPshNCwryUad9GAA9jwvHff9",
  "key7": "tzQvxFAFfKBrhjTv3iRiTuActwRiFL3nK7LnHDhCxgvaUCsSqwhjDbG4FUvRMVfd91yecfWCX3zcwxdiwcpQHzs",
  "key8": "4UsuBvNCxD4Y9hrAqKSmMuu6UariBQh8nWdkg7mxWeFeHKwFwJKxTWcp9LnaqcVneAtFB2tLHhgtnHSgsBvCDK5w",
  "key9": "3L1fmrmejKnktNwRU7bmznCdsx5wCkSgQpRQuDPGvyMrhoTuhXXxUc51tRDinsbyinggzRq6mfCRdgkFfQX44DKY",
  "key10": "5knVf1U9SvFnKtX6ZN8AHJSgXnGcVrG1ZVozZaqDtWZjiA3mopCxUrFVqW1BiiLZb9WLaZwgndusPpnvf3NUbWjE",
  "key11": "5Euu75D5zKfa7rRYEhyeduuqD7zPL638RNuirvbZ3Btac2oXb2hCK3ykVTGQia2MADiJcrNfkQ2och4wmjDwXXv3",
  "key12": "4H8EKU5H4WUskqyHK1LWKcDBYaWC1Y6tLFDxCUvCcHCnz6o9CYv9QfAaNhRmMxuLWS6FjwGeAPU9Rd7cqS5Df2rM",
  "key13": "cezDh7WHQNhjoQEqQYJ748HhmtCsdYRUyAsmYspaKYUgdsM5SBCKA7REkBX33bog52rrU7cuoEcuL4DpF8Ti89r",
  "key14": "45A68B7xpDDzjoJr7DmC5DuBu4XW6RVN5TTrZ1HyFoPCTtar8MszgV7MsAmoURpkm5m5z3AkrCEpA6BLaW9McJbp",
  "key15": "5tgfWR3vUWj6DFtSgbWWYWmBj3X2RmHuggZZAony7nJD3mzqq8JoRXvr3tAS2MkHhgBXhq9N1xLCHmdwhx5xFH4i",
  "key16": "5Y8Fe1GEUiHBsg2o9oy4HmE8jJJrQBKLWkYqCYxW8YDFWnSckx38hth5cZP1RQZGkF8LkmwKBpMGbkHxbrzmRZUE",
  "key17": "JNpiRrex2Aj3RU6sNM4BGri33wEQMEyAH2LoBJsy2rqpXEiGV8fQJK3Nc5MqfS1MBWr7pHPwvK9wP3y9kiYVtNo",
  "key18": "3jyHamQD8Ywh5F8ytj78jhTJa3juQtAfpsjtQFg67aKLqEScWeWn3AW7TyZdM9yMLuGq6uH9G6KRwUdVgbys4A5q",
  "key19": "4mfxQGFE8R15zAp3uiRHYpbdiefvRAvbhW9fiFSXN3VLaB4w1wo1VWSquLYKdcueiLY5NqJHA9U973hXKi4pvX16",
  "key20": "D3J5XPtEjeCBXTznGW5aFkuPpLfhpHYmSE2MjhxVqEUmdCkMr4grB6jRKm9RTyhV4J13TeKR2kA6wUcCpg3ktLB",
  "key21": "4bV7HvX4cf4tj2M4GgSsJbRbc7SN5AofJqbiHsVCMaznprcNjwDvRy7d5BpPFDFB6P3FdsZaFrkcnD5d7zPNsRR3",
  "key22": "4HTNrzKCcrfonkJWqhMaLPqGTd4LbJsZV4biBt1dSCJPqzZkxoybK83b1BTP6hMaCPEnropMsjFLATLQLGXCVrCh",
  "key23": "4psmPpzgt7xWpvze4CQMiZoGFZhBN7zbLbXvpw1n1VX2j4Tsc4McYuPYbcYBnryqmQCfXVoJjfUwrN31GrLoBdKU",
  "key24": "2NeSsjUcPRkThE5gYTBgHqvbNkJ4sXjQoNhEwVMMk9LHjg8oHjdMGgSt4SrQVBuatTBGtk2txZHkNeD12KJoJody",
  "key25": "54gZEWDYCzW8XAgnNYbakMyu1n4Kr9x2TUKZqdJAxbV2DcdsUHwWAvRJznE4WmcdqDxCKbcAPRQTxBqwNmsS4Mcy",
  "key26": "4tVtRWqMUC1HzTHRQ8UZ2JfTf3oWfGtze7JbVi2fxhumNAWTqzh3JudoHaocTq48Qxr2w8gecmTEPizUTLMcfs7i",
  "key27": "4244vNP2V9eQFsprz9bzFq9EhPNz5UBWs4cQdefsbmtEFJLJ33gJjRpbhXd3oxfYAdUpAmfRFXkLvhVjiMdfGq26",
  "key28": "65xMqBCpAskf3smbF8s9VZxa2TuKgxVp3s9c9FWgxKsoH93duPBDy3YhcH94px9LAGSrhrPQ833wsqdWyv7opzfq",
  "key29": "2WzCsyj8CZvJXVdad3f362JAGNT3CSVV3EqmynHYRk7p1YSAkZgVg52JXCs7H8iQfzQBW5e2U5G3kPcyLpQ9YEyR",
  "key30": "4pu28HwoX9tWypx19Gryv52koBFdY7sxGwMWqoHpSyFiFPHZ7gwty2mCUuArwGB3qrhK6tamdz8c98cbRJu99dVa",
  "key31": "2oyz8dNvLJcUbBB1QfYJ9UzYf8PJQ6EdArVdsP7UGKPLMJ3gS2iaNs8XmxY4NQ2eke1nR3TXaVAzxQ1Df2q5mFaf",
  "key32": "5T5DmEigeTexuPVUpNo6Rvd4QmuyJsGMemkAxLuxt7srVDs2igomwXb2G7jQHnMeKZnhKce9D9xWGzmWDUSQDzjY",
  "key33": "2yGXjJcrTRB91aggmazKjdupB85CGdPEkzmqYue1BVP3YfxhCnr4A5gqYH9TKDGNcfrRD5QGW8a8CPCGnB8FBfau",
  "key34": "3wgbkKARiPnHrDi4g4tuAKGeSubemAMZmfxN6wn9ZjzjsiFCnddNHoVuRrsFNPKYg5Bgkyc48Z7VKCfyiJ2JeECK",
  "key35": "SKvBbAErbKsBLxHYBdh72NVRkYcV1fYG6StWLQoNZ5SV1FWzUtysPJmPptBG4G7Xp3eV4pe1ar7TQWpXUjb2KFH",
  "key36": "KczxQ9h5yMAErJNX9i24fDvETknmmJJtvAqaxXjHarzsUhVLN2hHnhrEnWXceLVJnXRtEqCKaGUhwRTHubMdkCr",
  "key37": "5EP4MRV6bi4TPNN2kxSePf1hqCgbLXDt5UsrpxWgRF5GccHaVb2EMtaysZsEhBuRYRm2jPhcKnASBjmww14fXier",
  "key38": "5ATiTycK6bq1iP2EczCeYZUaLSeczTFPVJa43HgfGsNPuj8FB7GP8BoD8DCVFAjs427pAerRZweNnGu2s4MKMYwz",
  "key39": "2Fm1M8jtN9QerDpGD1WiDUn2gZBy48jTMqkmzDoP6n4CQkRi2dyy1ataxwq1h6MEbHsQVkBKaZ9oUmzrpppXLS3E",
  "key40": "2YCyeY4FLCgeaa3DGhCou1YDpXha3cZbjXFoS43mDauT8VNUZ5AkMKBpSZwAKeqWqdwvAhey8DkPJYKTz6q1Ee1S",
  "key41": "4mzUQD62BJ17LpmPQAEwnSUjPbe2N3kjvcWBW9LZy8i5PJ5GDYDC7FLoGRVuxYv6sqWgVMwzVFtMYCfVBr3f7dEY",
  "key42": "5FMQbJWTCDWe9T51RAyvJDenNbU1Debf2Z3ScYoXfuXxHYUYLwshQsspupdqapmsfzbX1C73CpfwnBU7dfevo5a3",
  "key43": "2FX5s4khMJe5VuJJ8z4dfr57yXCopmCRLCBkKvpEozpbfiRKFDvnUyXWPBxCCS6U69AbTe1xQLn7uRd2DyJRhRjY",
  "key44": "4qecZF7QHbmkB98xLzfob6PPC4rMyWd31GTfEh2vkCMtGt5Tit2s7v3cWcowgHAoW7k6UutCQxgLwJQMPEorX127",
  "key45": "4TMdswpcn1GqR8y8TkLUN9GWgnGpfNoqt8ViXHL1ctRSDwZ6SkJXhuYkBaxd4zJg6VT5JchJpsTGPjsJU7Sr4L15",
  "key46": "3EmY1M2FvxFjEap3jzfhvxSHoWbKVsy2QmE7uUkCVFBdUmtJiNuNcW6qPRWwNxGFYxprmj8MHpUgpv72xriikNGR",
  "key47": "4jsGcKXXLKf7oDfQjWzeQWcQNoMZqN4wihpKaeQHfhKpeo8m74gC9QyrYxjPg7ubxrUSP6xL6J8p3QkNwPx5bC1R",
  "key48": "4KdETLzd3GKCQ2o5TQP43iwW46HZUK13uyHyBaGrMS3LXfdLkiUYKT49JjZcnrmcxXggw6sSApsoD1ajmQRpc2ui"
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
