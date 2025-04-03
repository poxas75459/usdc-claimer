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
    "5fmLMEE3pEcMVhveDmafQYstggLQ7FTePGQ1ci8J728w3yWdkidNYEAbhSEsNuCSrsnb7tNizNbj3VaaXdWi4pfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L6mPCJvaeWmEgNACGbaPcoAzvsKjPs6JeZ8QQERQFQXQdNp5TGqFM1hsFqBgU2yoCbZeHUx1N98H1cNPcX14KVU",
  "key1": "5xW4QjCW6SSQKQVmiDQCuUmDx7QhPpRGm16AFaWy751zVNghDxfXnPiTvY6zDQL53ohs6YHe5kwzDB2yn3VaSmtF",
  "key2": "393aHzMECfjuRtKcrGxasWH29xqtZHVz1PdUSSz81y5MnaKeCxVRYgaUCFh1soRKrqR7wT5T5H5dZsRF1PicY5cX",
  "key3": "36C8Bzuzk2WneL396jh9bf3b93EKvVa7GKEtb56gH2wqSFiJupDCFofpoyB9qUX3aRmdtU29v5usMjZkcCCcxe1H",
  "key4": "4PutTDtrJPqPfep6tN9BQ5Aru3hZp1egAUMGoDDVFVkqA8U74FURhcbt8z8Kekq8ukJQ72yhaU6jyTcBEaCUw4FN",
  "key5": "2pbrKjedLmhe2hpJKcy1zpixS3pHDzNkrZN7Jb2Zfdwm6w8AtYTctxXQp6QBnxcZjidy23SpVCLozTF7ugMiL9wn",
  "key6": "9K95K8nBwZpNHG4aVDPccjtMN5mRibhDCyRoHmfZHEcNGGgaAeFKbJBYsiXJ1WL9hvPdeZnwWWGPRYDCc67rcX5",
  "key7": "5xQbJjbF8nmgeiarPxyWEx9WvP5Z62Wukcr3unQgZpRiFTyGZ9EbJW1xXsema5nQe56ZYieRLUCeDEcRhwXgNUHX",
  "key8": "56G5gPGuQ1hL2bH5BZ9XY4MEuZ6MzEK7T3eWKN59He8aRcjDF3twPogAQDehrCkQkv3XdGxwMywyPmZXU376r62k",
  "key9": "U5p9xCnbQbrkUbChdutsATaxdMawPC5fyxqcYywcTs4XR4fqhMdKcnztnxo2rpR3V4csRTALcLLDMYKn2kNaRyG",
  "key10": "5jKxcgH2q23Y2mUyS2eYMW8WqxAapByBmKmtGkwrbkCTuQcuMPHBXzbomVjizZbrus2NJ3AnNUGLyMPVuQFYYwpD",
  "key11": "2t2Yp1BXWWb7jhSBABsSFAsptMCwHREXyUmrv5S7m1hDqgu3vzn1gfm5JYoWztGjEsHEiHmyAXSdSAKz9zKH3gZw",
  "key12": "5JNZ6xEPcjPTbysHPRtteMoVDMc3uvbGpEtdUqtzGGeTpebGko1HnmVk2M3eiMF2TktxdHzTCUQaKNKo78UAZ7mQ",
  "key13": "5dFH1Yt1xqbphRdBKq3DEBcnGDwEbiVCQknMXA7ZHy8BRD9SLMVPCNzow2iJy9WLSrHBDoyWnrmht99rhWrmnvGV",
  "key14": "2rM4dCG3WDqtj6GondwCxS8ZUEhfRmdu9evr8XxZDo6epaTi1JEPPAMMHfvKZiMVatz98zY9iG6Dsa8mtwkyS2jo",
  "key15": "NARAZZtGPrAr8Y5hQZ7M6fVwUDfXeSKVw52fLDPVGNX5jajBZE8txCYK7w9BvehwK1DrRmVm3ek1BrFac4EwrQs",
  "key16": "36mZoySVeA48aA9yg66GeQF497n116G5xVS7sKVPnTaeijAcoc71WTgfeSDoV1h1JTePJap4WFAugvbryJ3GaZ7s",
  "key17": "2tzGJp9mYYFqhjfwSHdogvAjE4bRRuvzFet2JhQMiGEe8Q3eBNNcQrJGP3P2GRrHYxAnEpcA5fLMEY3nK9g7bWjt",
  "key18": "34wq8SuW4vWehZNgbSPojMfrmBVk7UJFMwcphC1xESr7N7QKmE5cZoVYuMCqcrYbmif4Pefm2qx51PuZvhi9YztU",
  "key19": "UhJw2K1Crn6EcnQUCLDAxyji4AsjjwR8RxUkZGtmJM46xTV7DBeRKtVQ2oswn5s9nSHFqqfCE8qNLefzkESwstq",
  "key20": "4KMJY1MiduqjETzstzAa4NWRKPTiroT3J8d1nLs3PB5Dty71vhirsSSesjNCJR2yCN41micBUE8wXyT2J4Kgcgmr",
  "key21": "384uS8TfBRXLhwHFEN37iPJZnBWMCyY8qf4ekwRhxYtDHmwk7CLRwVEzyxWgsCSQscayAp7qwbem8FRKqSXhJsDz",
  "key22": "2JMxMeCbQqtcwBmkGU4W1RSNsSyZUFCr3SiCUfRfVPy3SXZuE4bRMqFMofwYh4FE8pHeeqyMTV3ovGYQPHe9dgz2",
  "key23": "2aHwRUkKy7e3JPx6K5vQXZgVoMoUK1a2w7jSMe7JS8EtKmgWDNsx5YgLtRjW48HwFfp1BdiL3wjWFTKmixLw5kV5",
  "key24": "4JZw92K9MpsSHwwq3JDShzug1wHRHJsKpyE4t6myqKXRExUu7X6JNKQs3DNHyJYNQVdRSCKn313mBzydiwAViuQz",
  "key25": "3vGf3w4vzQSXBHzveLkCnPjL1kgAThJZe4YZNSNmyWoz1XULi4hsbYZnoG2aQUPdYXbuQKc4PYpCJh86qe1vZvq1",
  "key26": "5WRDKW7anFUYS3L4prFbbykkcegLBAzUCDKJsBYi4VnUpur2qzzJB5wCyV9oGJqm4pzRXXwBrpSBFrZfLqxG4iXk",
  "key27": "38yf3tLZNRco1DQJmiqLX8qjWLMvK2wM25KssP2cZrwRESzQmo7KgQWDXdw2VKd1G7uhCovo9mrYiBn23SJpzUsd",
  "key28": "4UzhGdoHGuNYbFe8NcZRcPtAwLuJScd5BwGb3pntNaZXLkp6eFg247LYZHRvJ5q6fDguPv1zbbiLwGCo3pUYrCLt",
  "key29": "2rMjGgRsJmYgp6bmZdi79Jv8wsGvEJbv41qGJsrt5nhYHkiAtQv3sPP2GWJrd4hXgeCK4r2ctRNcB4S7yngbfGi",
  "key30": "2wDFuLGZzXscfm6at6gwdPvg2rHw41ak2ZTf3tex1qNWRGiccM3StnuWYUa2Nd3ypyBxofwzPaSLj3L3va67ng7q",
  "key31": "pK8J7CJfeVTJrXJE4rjkd7d2Mx4wBpFxJia86rU4W359Upk4ceu2NyTQrz5zQGABC7mgiYXVJoXRc5qgXJXUxQL",
  "key32": "5zd31mpZHs7PBHredAdntW9b7DNHCt6yRzRRTtQbRjdZTv5P9cDoDodBRCUfEL8gj24UHvseXAFEkXWQCnBhiFT5",
  "key33": "3ng3yLdduYSTJWi29tPk32iSri9vscinYEq6ncEWgrugdmR69H6FbkYod52pWYb7bgm6JBr39Vvwk2sEv5XZysif",
  "key34": "5EPus9m3eCFwJXpLcrEGEEAXQPGPHXfZY1DpurpanvY2ArZ1ixiFAjexdrTUSCBthUGqBVRm8dQb4LSDBcWWJgQb",
  "key35": "2dtjejm3TzSFYB7f4jET2Y5CnscniruFh9mo9vDqWvPVRbbPmuMy3NSURH3KtiikR3D4H5qgRRJ4Bt2KrvvTtCVb"
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
