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
    "5BZ1i3WHct6ZNKyy4UotHM8akxEeTqRxaNt5mn3KyVsTJgCneezHZqUSRuGx4BGqycon37JBGxUCZDh6PNZYuuD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eys3BPi7uQRKbH1t23tLQai7er5ncvddeZnGd2Jo6neWsvkm4qyxD5kH8iAn1A7nGDmPdoBJ3KqAtKqS3RwSrdt",
  "key1": "4tnQe1dQDZcDiJYNP8Xw2gSoUJj3UR9dgZDefDwAiNeJeSyZRSncNcF66TZPbQa7xAb1eYMX2gWw9nvaJpjv4inG",
  "key2": "2WLabPZee9pxvAdad6rxbFmJLYGQ2bVZWHdxpTg346fNfT2bU5KGsGKtW1VhPyaewzme8ZKUrmpEE4ck3boEptPc",
  "key3": "3GWZmBP97ngCBZ6wFUKNRBCKHgCMHpWtHiUzheyWtNwHppNPsfbVo5h7cgDisCHggPpR7Rn5UzB11fK1Wd6fuZDB",
  "key4": "5RKgnRazDYSCLuexHMsDJvY6vQniV2rwWK44HyFtEwHoTxcGZk34GnfA38ncX7F6u9sEZCTd8E1WLBqy5bJ9fJKD",
  "key5": "kjiieBgLuykHsL837pPHrP3emhSb3vFR6FR2UcwfFGfMrsdkgiqyrKdruJhkFKb3yyxJQyy7gLQkSGDUp2aYryc",
  "key6": "3W4nmEWbU7EJ1ANxcoEqwrLnNnzRfsRg6y52pPQvthoXATv9PR4N8MPRMyaaPGH89g2y9AiW3jyNaP2k7HredKce",
  "key7": "4brvNTJVae4o5NxTs4Rw8GaeQB6LNiXYnF3LPGfRsxaxWsnroefCXoG6a4VqWf2Duj847qn4AD7KmenUNs6DRMt1",
  "key8": "4Pnpv7eo88LC1kgBtFAKDJozRCLds5LK1Krp7yjUvN74wwDD3HXhEiaeHy7T4V32JNht5A5QdeRGKmkPgFuPUf6d",
  "key9": "28GjgmnWCXoopcmFX6CfhbbFUNPRKAWkBrkaPnEwaopBep8fHhnkC3EeUzzLBMA8RZkdhwSEPq8PNd4mGhfQAsQ5",
  "key10": "ragX219UswyerEKWvP8qCSxH2jXpWp7Gbip7MDibLXnwJBEYHdTqCeSGpX7GvknodaLFmtSLpDB2n89JvE9p3gd",
  "key11": "4U2GjVdSGJ2akj8NqbomQaZ9W26jAq2dQcQyNjVwe56fpGEQUh3SJitzmf2kW5hjJCM1Ken9k2h1MUhn1KRCGVDD",
  "key12": "3KqyfGMVAAtXdiqbRXHTGgqU2qd89UejniXDaLjkbgxPYNYUcPELPDX7vQP4YKWmpHpfemTPDHvuhBvoymnDYf4G",
  "key13": "rBXKowEga2qCJfvaRTcVFCVnanLfpgz1u8Cr5KfyHJLezBpbDYZasU8jXxNzcpWjmsSwxPk4hjqacucveiW75oz",
  "key14": "5fsK6N4qL9yDB8dh9fjD4nZi7iB2X3e24F4wP3vFDxHgwt5dAHxV9jipU9wtS6g94HCyfNt6t8P6UxPP2NogmuoM",
  "key15": "2VDFBZsburUFtaGCbN77DdAFYy4giphkjEewJSPs3rGopH8zF2xy7NAT3naP72NDL5ddeLSbpfqcLJqPWaHhfAxb",
  "key16": "3XR6kMWqmVgxvakv3hMpo7kVJFgWfhkRg7SJ8uGTSgvrLH7DJJq27icDgGfCihGz7QH9n1NWJzgE3VAvvzrFkRkN",
  "key17": "LfCLYgBdFRp4hycFAqGqgnVrKNVpGRnBhdxSyrL2Hy6NnYFX2DSVVRv9KyqdcXZn9aqpUB5eTdW7LHCesU15pgi",
  "key18": "34oFpupBzVYTFdJLvhbu4FmyboEXw4DTikjjRZU95DcSqMtMQZjHzULhCpu2AjEqrmmKQ8azLdRm63h798q7ryWx",
  "key19": "3znZGqwMpK6ofcBwEkqt2TgoTDMnd1h755y73tN7dfVSUb8nWjqZ2hFDXivNGvnD6JbH9gZTDy4ZanJMJ3vqLLef",
  "key20": "2kGFUskgSec2K17D6seS2BPh6PNcnU5jKsnaLXziw3Ejj9eXaUDLqA8kJeBXMqpQWXZsh1W3NNnLowSEKK8Cdx7a",
  "key21": "5UG2cCrhXM3tdtvrX9szMCw9MDhsLJjszxXzTATf5zwTwdYY8sZYjNsZjsy3E8Vr6m2jwX9x23aR9nEHhK7yWp3M",
  "key22": "3KPmagkLYVbmSGTyauSaHKVyDvWkTrteriEZtgiKgkAyXAz3FfPxkPo5Jn1NwFWPvZgpJZzWEnrWxgoyPWbWn343",
  "key23": "2wcYKaNjaGDZ2MEjsDCaqVhqRAArxaY6KyDmHPgd8uFhe2t8YJVFAk28mcsH1yQY48ncSpg6h23HP21YxN4kiPh4",
  "key24": "3kU2YHsNHqfya8eivHbEbZ3X99aqiRkCb61b3BNhFSSaSbeDSvqmoCNJLMx18fn1t136WYiqA1vd8BGo1PXxpvah",
  "key25": "5rM75cMRx82NZ1LrWhjmkoTs52uA1CJuc3iNKDetHn9pzGuZ9b5z1vV4Lz3kSazvBR956B9QbTRvqpfj2MWMaEgW",
  "key26": "2EVPABMMuczvrPMocQmEMpR2un1dh1CXw7bocUnQaZhrmnaJQk2CDgsX8uRNNcGjBKhtEVznFyBJpZ7QNvnfJ8kU",
  "key27": "5tX66ztDCT1hP4n3Qq6dQ4PohCYg1B1s9XKckDaN4nabMxm7QzVqaHw5cp68rLb2RDGSrB8bX9n4Dsj2gcsPNr84",
  "key28": "CcnxrBGpMCHggSRt8KNeUroLidW8QBawJhvqU46FTNnRHLGEYv6vegG31yPRCPH1R927xBHCwD2jpakFxEz9ey1",
  "key29": "FBEXLxVZMTrZfhnEekfextrXMG6BueXMBQLhSTbL5esAtPcaTwT5MGwT4XG7eiaU9Lgw7QfKzwY5e9mMcQ5tYdS",
  "key30": "iiqxNPi6pnCeHMwL4m2DakygoCbVNgcKNaqBYeP2g5wrL3nM9y4ntxC4LWvVDfnF5DwxSSZx8y6hmPhsEgxJStw",
  "key31": "53F8KNsi17xpLq7uFYZNABXxDfXWCHHLH7tTywvm3MhQeyJmxsJdkLGqJKZ4UKnCxTqbsZK5SwT8KckP8hjmuTE9",
  "key32": "bVxkWBDdSggCgLACjhtqRx7iXQWBFkoe3AzDoJ5CWtgXuwmdi2PA9HL7EMyUt1Y3zVEhftRGD31orro11TuJ8ok",
  "key33": "2Eh94RP8iVrq5YPhBGhxeyjpEor67xUurwtaEQPTQfqFAGjkuDuSNaA6XgavogsMuYASYvm9r1YoFAufhN7xgqqv",
  "key34": "25AZJPguhc9miLcS9PebVY8iFbBd14NmxfK2nLXDH1pcEDzXVCv3b6JgVL6zb9C5dqUYgMPvt61JckuTxtGGMQje",
  "key35": "4evKpqTdQTfrky874nU7Qm4Uth217ALDzxCh4B6aYg8JAha2MNL74VKPqx58T2JjgM4UFqAKAvQszxuk6Priewc6",
  "key36": "5EScLNQtZuXoPhP9J6LhgCngK9wmnDDBfgyKz6AGsLsWQE9Kr2VUV1fhyFm9xsYEt6fHiSCzqNszh68exYKg9W6j",
  "key37": "2RoJUFK3CYKNDZJudgyLeU7rFF1BUTS6pe77tgFU2DD1NMW6YExC5oW3jvcDKY2FB2146khh3pa4BQnh5znyWSt6",
  "key38": "2dnqRjTs3hVRzJ22RbFwefWDU5G6tnSJ7AA4rgaKUq7ig6TejwVmqWYLACJCLH4aSGcPc1XLeMJxcPDqKxQpw5hM",
  "key39": "5WorH4tuRNfbkaehP96c1GF2eijQoHN3LbbbB2N76CZY11SYbhmegMd7qx6Qa7viBWZb9wELUPHHicJSRkAqok2r",
  "key40": "5ihEE2ku7W8ATtdmdiM5ksC17YcqX9iLZggFommecvqD9wqxAfwSeFUfw7ket2yrqcEjK93i8TLYZBzxVrhDNwPQ",
  "key41": "5k5H4LrWW9ncuxjdN2HwrL2W265Rr2VeRsiLzuVVfUm54xqoYn8RRArCaFgUwDCp81dC8FS4vgWMTzcaEsh4iG2Z",
  "key42": "3MkR1YCgbVvueGF7WhkxyBjwSVZAw3WXVHzaUcyrnr7kEfDXpYhBoaNFAxQcpXkjGkRKjQFDw5ttMAyzZaC6ZbAc",
  "key43": "5tDg7JxB3MxQsjdBatoJmA1ejpKn2stQdZXR3hXqnWkQviLUc1gTP4jKTMJgKizw5aXsb6oS7waZ83hDksNLddbQ",
  "key44": "4fJLo43KCfJxY7iYa5UNE6te4upSyT2d2bRieCt5KeTqao2axZ3st3DXcqGAKqj1mKXtR2rbNEe2jYAfN29JRwr1",
  "key45": "3dwxhcvsX9VLtgGNjWtLMnSrej9CKweJhedoDemWJ7g72nZ1brwgVsz1x9YNmWFyDJyhNMv1YYJycPKU2mZ9oREc",
  "key46": "2doAwSdPwwYSYz8izFXDe3hBTA9111cJei9mkUDmBBUdAkhn2VDE6enjwuG5PSfASKMVTVK6Q5CDitT59ucNSXvV",
  "key47": "2QWyjYdwcrCxXSR4EMVwzpYmJK3Ti9gt28aMQdp96PcagKPSTcBLATqdwEfFsijXkZiRRHCSbr2bvhri9m4bK8Mc",
  "key48": "5RFLY3bazZLQHKphJVarUAdPnTomUHriQu1FJncFBtmJUVpvdXoTJyuQdVMTmNqB362myTAmubuw1osw6fZrHAi9"
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
