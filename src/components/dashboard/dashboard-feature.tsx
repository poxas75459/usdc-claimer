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
    "vLEDggTyQkMQ3QrvNDqoRnttyhPTGgop9c9iYpwrKYHaU6RHx1AV5JcwFN3unsTVB7ffeBHmSdT1GSoTLPkw5JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xWjQT4r1DqbhkMdfTmMkJUxRN4qckZPeFAMv1awML9aeHLx7rxkdUk2uYdVhYJ9T7Z6HZX8Ud5ErYdMX9rnC3mA",
  "key1": "2rT9ZvCsRL1o6sRcza3qbGSwP8Wn6oyF2Vsz15ijB2BoLDUT2jVKeefYX8P6rL7Buz7whMa3FQfMFN7Dtg37Rs45",
  "key2": "B8WZNF8vXV9mkk7WrUBKrobhx9B2DLUz7FgxuXCcq9Br53iNYDFa4sELooUhFGHXT9fv3nTBmAjVPPmdEJAbsLY",
  "key3": "5nNs9TuPjukwnT649rkzyNat8m1qKSCLwvaqffzd41j96AuCjYTv8creH2DG6Bo9ovASFwYNsAicjsH6dZNF6zSJ",
  "key4": "fa1HCdeScwzpLvwY6H7breFypNvXAbQjYeaTaKsah3Bguo7hbzdUTMpF3EtWdNoVXcstdLLBQX3NPoBMxPv5vyW",
  "key5": "3VaBRcoTVoNPiewGzoUVuLTirocMyBHPDMnmdwpAh7tGj7p4xpkbtTMnS1EhBCsqSUw5Sk3bCC1PVCdjAiTbdeB7",
  "key6": "48FtLukHtPWShrgt3W198TtLPdnQ7vudiKhecKizPZ58d6JqjDqEYUPA3fFaE4stZkLbxTHTDJweGoQmm2VpnDBU",
  "key7": "GKY4x2TiXjWGG5PkcczKud2V91SUWbVWd1PCyGSVjgMi7uGZNhfrk9jPPF4og2SRsK8vHP7HHveBXxfFKtke1iQ",
  "key8": "4ZoikZPB2rXxkKpJNbdpXJG86Q9H5XogxinW7HL4G9WFbEkr5egpzydQkXXHj6ThxPkYih28rArSfQqbGmZCwZbv",
  "key9": "4mB4bjhFDHPyntMBZvtjVnfHBjYnigawnSZ7b5DL4PsW88qHVKwFD1EBQpXRVjC1KnmihaZw1P8HqtHjYTiMKvAQ",
  "key10": "5tDea3tXT4Z1Q4hkwiyCRWakVND2qeKMSFNLBCECp45pDN7kAgJgUFmiCronvaZGxmtqjaR2Mz6DtQWYEEYiTJuC",
  "key11": "2NXT3K8HbbESXWHT95fT5qY1rJz86BVBvuXJNivR5MrJQWM1rq5nsbNhq6PcK7gVf4DRZ7J9fSGNfegG6veWS3JF",
  "key12": "kfujSABRXooATq59bBL7W6SBHFj3ojMaGt3KvfCY1bMx4UAqXUPBhT9FwUrrFtX9cmsk452EuCjivFv7x1hjd71",
  "key13": "3izSEcdR2JMbASB8krcWQV3au2e8x3ZDGQsrwgRqwDFuPGnKiwDyQVJX7kfyJFgE3cFSK22WwfrFgzKminmhPWsh",
  "key14": "4DB1dkdy6tkhpVH7MxuHSqdjc8ixAfyBTvyG7XDPBTQL6Ru1euYARpDupMdhnuqAycVsRTeCAmWLJSm2Ropyh6rd",
  "key15": "xoxaRGiAUXJ65wn9i8A2PQLKgRqVmdfFSrV76zgD8ubAxAA4qMyFFPFDtpBL8wMvYAzCv4ED8gSN8YFA2iHAb5T",
  "key16": "2deBatjtSb7H2EJN6U4ta1zx6quutfZv8o1VUVn3tGA7ZeBTACAaTRao3dTWY7XcTS59wmzEvorADrcCDLchMx4T",
  "key17": "5R5hVty3m5deP51Kp6FYVQ11uYtg1ppT3GBFjRu8LiR2vVZP13CCPc59ZpJyMrV5YnU9KciXQQSkPT5j2GJ1EKx7",
  "key18": "35hmq1dAwhiTPZGdMvqGGbK7Wo7hvMcMUygbgRwEw8gKBaSy1Ze4Z66YWS8tXjVzSRY7a9Ld67TgxMuRqwUjdrAa",
  "key19": "5aFGmqyre9cMupje7rx6bKUhRn15JGt5e4wgHx2bUDxngrvapFcodrLybRUL6rfAPUr3qC7p6WX7tsEMDTRq6UA3",
  "key20": "8BKTixhJW2iStWRK74wxKJNH5zhrSqSXxdJZFAvrdJCuakMAyouZ2AzD3csB5Pm5DoGkub116eZZBs6jeABmrtR",
  "key21": "2YXV1VXmNHuskvf7YhrcC7ya6hbUZtrbfFZeq3qanKW9rFpyJAFKUeaFjz6fdjiEQcwK68dRt4Z8YkPiAmmB7CYP",
  "key22": "2AJmSe49ncyVjfMcpp6CVNUnrhZziAx4Jq4UU1Rjm6LWUpDC8zEFD4n7vBEuGxqr6RGE9gG9A3xBbzctDb6hgwrs",
  "key23": "6p2SjbvhCxAoqd48VpUBzL3aNeN43SPPEZYXW8mPck1mWsudTo7dvpD15rD4q3VMJfYh5qbeJb5DXKvAc8pD5Nu",
  "key24": "5ksw2aRpnjbmXeottreUVHUss326pDYEi6WqNx7MwkKSkrCyq6Dejc7KcZJUcpUgJ2AdAxMe757qPWXHWhTj8wBL",
  "key25": "wdcbYf6u8Bps44CoCApVjXhQr6KqcJvpUts32DSBWy87xD6AXJuxvZJS31m6ZnwaN6urqsXEsxpgCKLxGTrHQ85",
  "key26": "52DL7oip1WykfCWPnkKhwLmkvP2NxgHZE72ejNaaySqJm1VDM3QkrDBsKwt1voT7rxAvNJFPp9HnQmt76DBBowsv",
  "key27": "4Vas345FUx9G7ijLJDQNkD9pg6SVannytDJspT8xqs72T37bqxV5YPB7iiApgnFKBnpKcno58pKNtB6wuYEtNPYx",
  "key28": "3aq7D1kyAP4E19PLhpCBtK4u4QzzMbjBgJhMeM9QceUWZ6Dxd2gBfYdKaNfboe1BoxzoULzroMnW9PPVz3PGBwn8",
  "key29": "3cmVf2MDv4eQcwv6iomysVVEs1qjEZgSEHHHADKRLemcAePRJMbnswgnBGYzirZFDgiesm5DqATDE3wPmrnoL5EL",
  "key30": "cR6TnCszoz8wFuApZ2n4YbgjiaHGyjKmygHYUs95ajH4D6Zpzma2fjUihH6CqL3yJiwNmhy5gzgfGhgRa5cm9zz",
  "key31": "5m6RfactPNLMBkRTfwZCr9s5azq3qAgrCBhyZ3RjDQMEXLhpc6ueJuQZWtL8yZNnRnDRshhLnL6Pnvwcd95ufGPW",
  "key32": "2VE7MDRZk1WZPodGSjsdciMMMCt2gG7WNeq8EXJP4iN4WcjcCEJgw3xk6d2m8bUoMPhHhbBky1MhprM6feKZa7oh",
  "key33": "3z4qyrKMuUcCZpvrNNdnDWXH7G6KX3Kjv9i4E8EQuP5pJWLZw9URYLBPMUMs5GLb4dTRHYjhJPzjmVRbjVALFscB",
  "key34": "V9tqBgaPzpBBUU4Wf1togfjaRQab4i5cfAifW491QGMKCL4jwmJGGdbSKmBDfvmK7vit6GKmeWRE2upERTA1QTi",
  "key35": "2Pm8f67NXrnEZKmWkmQ3G6nX7bKw9McAHjuLDKT2wHF4tbxay4fSbbRTxf6xdKojR4iyV7oj6U4Lwsy1igPptCJn",
  "key36": "5yM8cTJhV5titadgHJSjkGmuwJX6KF35QuMvkHUrFLj9mryTVaJPLGxHVwRM13hPRoZP4PuTgQxEJwQ9MMWjLgAw",
  "key37": "4JBnSNfpwpsoCNUUzj3yR67nxNUEtVvh4gLKPXK7Qc7j6v2hrHZhFnmxnKz77Gehhsa5j9jovTD5A3urFPtp9Cqz",
  "key38": "3hGy981uNrNCxEEQ3UZZzevg4zSU7wZCVxtiUhwepWx4Ao2z3ZwRsUepBKwN5jBwZNqKJ7WZywBZWJ2BfuKDFVWX",
  "key39": "3Bwzn9ghLAQsLgk8fWq6ZG7ZnesVjoFVM7wzafiZcbbCtjiAnrtHPjURYMMogHY6PrXGLzUaFRHwUQZVtBreQwnX",
  "key40": "2VmPAXNr1Mc8UcKEn1SRE6hysbV1xNxSJxFMScHrnb7V7tfUv4FhR5LrTzm41sjd9dqDzzst8Q5XGoVmKfsa5VwL",
  "key41": "4VinjXY6sAUfXxEiDQT2dEEXbtwFqLfT4WFTKtEJ7tuiVDy63QgZgVKnYmWqfaDEJHPL5AgDduJNubBXqson8wAj",
  "key42": "5oi4QoLT3Bd353FDpXo3Xc9BMwCCSL1NA26bEFnqfKR1s4rYrBgd7vvGzpq3RsZ7uDmrPVCDNuEEZaSdu7tEQFPS",
  "key43": "49H4MEUyzWud7Wn5paTxyqLBCYDuSdZHFSWxp6LksWef17GF8JfqEqcrK6i5XXc9TLaCcLryA42DJgAxhtAu7zpK",
  "key44": "5jbSQ5n9qHUwQ29VFh2sHj7TjJC1UpFRcieLfLUD1usiCXDDSTLD8Y1wGAEmrJCePCBXCS37Ays1aiAwHcfkqSrc",
  "key45": "66ENbiLL457Z2mPTpDtAdyxx1RhMzAwnQ7YkEc2etwKgcQvYZTm9QQDoKXbCx6orZMC6uXFCWcTkX7SakbmedHXR"
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
