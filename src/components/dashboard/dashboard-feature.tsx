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
    "gBVDKjbHUPCnnRTKLAwRemcvay7GKWfErPfXvQVL1vkQHDfZ2zT7HvpLGM4qsiDFkvbAsTfCTao3HgeDoxKyDxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dd8ZKaZAzeJ8SRHfJLhV9aDgh3rSht4p2RgbjWQ2RrSzWBnKNpFKCFJYWgPt6XeXWPrCcAPoPH2R8eXWwca8ej5",
  "key1": "H1gsnVkQzt5WrZ163GfwsjeajMQrAbraerFBupfYTufQCgS7W2GdNey4LhKzxkPyh8xR5hVwLtQNMwf7RpjX6tm",
  "key2": "4Gd1dJkn3nrhoK8Hr5SN2UPEknme6RC92LGdWFWtwi6EC1yFvndGCpPBuVdFChSjsASi3FJM2ZgPGmzcQYdzbyzf",
  "key3": "yB6fq6BfihzJ5RgdcMnK9i1425kJaS7HCH6fe8K4dGf2z6QNY9JRy51Lg6uPWbdK7t67Yy7ynzP4BEWDECBNzje",
  "key4": "Pn1wnycjBzYV16T2uz3A9WMkw3KURRsZ7mbjSARrBMMJk8oC4vfaRbZKBngsgkB7E7147ViCFqu9RYFwfXc2qvn",
  "key5": "2qvVpnU1vCci6t4dbGwKCeBbUjZqLSpH9XXwsuSaA33aj3WzYUXEFiVuNgQiApcpe7DELTT3ik5jucEjqbpbDmpX",
  "key6": "4sRcWuJaGY6fExXQPnZieWVzdxmFgK1QdWzi3ozXrWaEze3YHZka7c1F2n8UEmvEE3gZyBVYvFBFCVk9kByydHF5",
  "key7": "JUG6TEdi1nGYgy1UhDTBUSJv3qRzqBTzrsFBr8JHXgfQjN6oXNbf6bGEWEYETKBRrh3kXTfTCT9btqjSQd8QCoA",
  "key8": "5sGtTHGbU6rZpQwyvPnjix2NEvHmhZZkthoFNCpAqZ6p4G7ZU4np8kyTpSv6kvLAGjE6CKSAJJ8m8uePYv99WfQr",
  "key9": "2vySsbf9pfTkpgWkRkBr6b7YQJuf4db6GwSkFDCAtFjSY9eGTpRZ8xWr2MFL66tSdfqwiLeBaYqRfixdgWJp2CTQ",
  "key10": "5cVaQDUT54kdMsDvpwHfTQysLCYqLBBRduBtZnp5dFmDaC6DYZsC5iF7ZzUiJVaXWQKcEhM54geNZf75yCVrH9Ck",
  "key11": "4CB7Cp2PnnnuGxWmSCBn8mmJ3nLxMrcTQoEd3bAdbdbmca2rAYmT1otFsfgejsu64sGyrXH5Tdda7YE3BLJGrZS",
  "key12": "3mrDNS3xF8mj6cz9YTCMnP443q7MzChKNw8nf3yb5f8KxzWogWA3JVF8Tb26b1GHv2EEqCfAAJzdfazs5o8m6psT",
  "key13": "iA1W3txvhdrnNzAsfvNXu77Zsktc64CbEtXuNYkUssJDnG1VPzV8QCnDcCwYfUnxRWpHSEnRxxC1CgKHqv5CKAN",
  "key14": "HDK62RB1aZoxkf5VZkHeUGPmK8ve5v7WezaspNVqcAKbxfzGC8Ptj2hGPRcPdFbvcT4QPzfxHdYL31omVdnue2c",
  "key15": "2m5kSEJZaNuTGeiRx1dZoVb8eW8WXYc4z8oHHMN4tmFVNh4DP9nF8tb4SK8irHWQrAZ1idYUKy4c1FtmGYRAwqW5",
  "key16": "4S4wJBLVHkyLfJKRXm2FAiSQgsyichWxAZpHyWRRQDKSMhLGJJwPG9rtSZwQ1eH6B5oVp8Do4LqxLB4YxzW2AKqT",
  "key17": "3ZVyjoENmd37u9xfXRPEqdvNoiKNR8qLBqtGWGa7BfJyEGaQYWhuG8um6EX9oBoDR6LnwWB3nxwWdXB5ZvJYndhL",
  "key18": "33CvvHDPSbsfPV9C4bwquXuGjuFeUKPjq82QkgRDCmMe5HB1hoWJzRwRJd8oEsgnRFfGn3ZkqNtY4y6EsLTnAHRp",
  "key19": "3kfxdPEJJ1HEg7X6SbPybJtK4mspBVFy5ikaJmJxNdXSgFycEyHiq2zQf12tPpVCFoub6DnZqq4LbcboNmT21Zzj",
  "key20": "2MSosjLbr8sYLFd5ZiJFrTDHExcByGT5xEMmQ6nJJWSNVSDVz2D3kkxVqjEEmp9jP9C6F8hqK63xWsrcdj1vE22S",
  "key21": "tjnXdM1yoGoXSSUVjcH3XrDJeX8nEVYmeATbK2uREr6nvHXykiSTYzhEdgi199XoaftpbtCSy8bPhv9hAmKzRR6",
  "key22": "3oGu6kzEFf9jqjtYn8mkwma3q7wsycsYPFzWcxFJTYr4mMS8wrDyzGwrvc512PxjX6TEqRxE23MmTqCDVunhcQHx",
  "key23": "3VuCnNEPMtLSBXQAgYFr1D9MKpQTi7VzUtprogscnv2fvRLzr76zFA4FztXJkQ7TMhoS7aZkDBHoPAkoxpezRzgj",
  "key24": "4771WizYYJCSfZcLpz6PZqLD9N4Frhyhrknkj449JCGciFJuW7Uqbo1j2zrYZnF3AVBRqyMLpwjkGedVdbRxKfS6",
  "key25": "3WsD4ujuKqujtAiq27qp2Wfe4RmdontTj8LGkJXPSsH9Kjym12DLAfwim1J3epEZ9r97UFdcvCNjRox1DsUJR67o",
  "key26": "4zE28jYQ86Q9GBjFAyvGVBkiXP6PTUKLyWrQVipTkuyaWSt56ay2KPBDCgCD9WgC8GyNb1VdhEZEvL74B7ufs9np",
  "key27": "4J5i5JEijdSG3To8rSaDSFR8wQ9KFQ5EjzNaGu4bboW1nwUYjHd8QBVZP54Ve4LAeK4ERJzNg94sqsgcwa7Bw6sY",
  "key28": "waA7zeQzgMhgYB29h7UjqpnADG6AW6fDsqrNAyvNP9HeXcxbHmqzDK2Ke1aSywsZkqriPdsELStsLTJHBXrSuNB",
  "key29": "5UUtb9u2yDCgY2i25UcrzWfdTNJvybnGeqENoup8Not2ergLfg2fkXdh3LB7HDhNKSrwMGKCz4Ln91MzwQyxMRmt",
  "key30": "2goADB9mAdMBWwNsQbNzDJi4tif6iUoi1Atz4UGNY6QmWoWk8ZZRfZ3B9XfFzfhy4oAvSMfZruiMR5sK64LFMHow",
  "key31": "3SMSWUPPkt9pfA3axXbaszNib6pgE8XeHCyogADuChknB7LBDEbwRtPt8XnTZsPGyJepJosxtsvrYsW89mMxb8ki",
  "key32": "2nKdcE7tmTEGTKqpZNktSmUre29uanCPGuocTzjNAnh6suWnWQUpwNY9NVh8xkZgdBtDDGxDU2KC3uophKLvXpKG",
  "key33": "2QgW7bv9GUQGNzV6qsFAY1pCUeCKntePReDZmZHqi5bGoBBU8R4Fhf4UJbcHXeZAe6ZVaZHLYWGatoYKfiFMLnKZ",
  "key34": "3unTZp75oe98xXLb4KW9nzR7nz8id719HH6qT1u9JRRM2buh1EfQaViMzmibyhk52e7WPH1xj1cBbJ6tbHYqhcfN",
  "key35": "MACKULu27WYxMFKHLyH9mdE3SmEBPdXwHaJChFEonnLfL133f3Ptpk9kQ5DctwH2nXPiF58Euff647C7FPBbUGK",
  "key36": "92pLnSmEq2C72eeokajyxRe2gftxGYyUwFU6pVWZJ9JdYom58QQUviwyHisaDf5n9FdG2ofWR4GmbqzJQ7QpUbk",
  "key37": "2xY5eYC7FWDHrf6KoJhRwMe7Rn5kNnwjpMBvPX8rqVxZv6myj8Zph5pb8ZkYgScXdWsDTyGDFqGe4oAunf52VZcB",
  "key38": "3N9D6GAZzuVFDbB9x62jRfU2AgmtWYhNoKChN2jW1AmRgtcC8ETSnQuWpPcJZKDMR2iyjpuH5fk7ZgaaUeeQn9z8",
  "key39": "okCedNGZTABj8nVo9AtxQCt5Z9VtyhwRUJt7MWPdTCmksL8jFxYG2TixFVupRhp7ALUAtfZ6bEfVV6CGsehweLm",
  "key40": "52TB8oTTKRfaJW3yurTRdPDdy7XNYWu2KgyvD7hs3it6ySiFbnudLU3DjjqyTSjs7FXcjKEqaWJqHWCYo39FiwCM",
  "key41": "3LNrre3GA2V3RVTzw2ZPeirdTsuvNy1s6HgybdyqsrGH1N98S9MCAKm3pgntxmk6n56cyfm3RkaQyHmdFyKKKhCn"
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
