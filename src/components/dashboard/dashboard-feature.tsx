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
    "2r38VAfyXq5RyhT7mWzXNcFerighgAxZ2fQV1yZ414Eh3NRhGkrpjGW9cfMqiyWrKQKZY6W8huycCfz9fUwpCwW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwgzqK1hJ1JqU6wsJU7A5FMespdcsSs9jPKd4Pszp562DMArZSvWkkF8JJ14jjXhKnHJM5jGVsjHLNSryVY5Amg",
  "key1": "3mkeejia2owtmDP2yWMrWGxiKaq1qBEY3vfULz5yCjjLcsj99EdhhnwwBYLMqZoRGxqVau8BeaFay3zJa1bA54wr",
  "key2": "3JowLxyAqbn7TzezvE7KNXVE4rW3KP2hL9i7scqYm2BK6L59n7chc7nX42FFBYpQ4i1N6ssoSUZYSHZrpa9nQbd6",
  "key3": "5DejaaewpmcY85E74AVz2ZBg4TVpB1W8TsVqqQi1YKNCgHWLZvKhpJP45dajv2v5hrj2wAFf3mxPAzdD1y2FiZVj",
  "key4": "5rk2JvxA8HCstYXNyHhwdws25cfBWbpyo3VPWb3uy7VsFP62QHEW3N97PAbipNX6tBZ9Uz4QhennLNHq7c34n3qf",
  "key5": "4f64ZVfjRZaGVYpan7GE4KyzY2dxMAeoPsnhhjsoor9HgspcbcybzQYuGtHodLJmpavAuU6u1yXcwrwZYoy8vSrf",
  "key6": "5BscF7sVVnH2jq8exDaSTW3xmpiersXfbcoCwyYNCJBYDaefCsPnqsroSJ9C6VsADR4z42KjjYwMFHW5fFRgVrXf",
  "key7": "Zg2PKRMpQXtcxAUWu4rrXd6vMNg5YQssMzmhY8zaxpZo5p9efiKQRyxVtqkSciZcchsjBnN8x1Jb6dEU7duqYeR",
  "key8": "2hrMgVphgnejF3WCb1xP1R8vNush7EHM6fQ1zYdnmM6zQEShbKwXHPD9a4gv2oG38onVyzVrWpfDmcch99rrVvmL",
  "key9": "3yAFZMdnLvrWcKm67BakspocHRnG5XM5ysYXGM7rJoUN1YXLLwLanyFdmHXVwC7weyfeN5j3Chsq8u5zunwTTT5N",
  "key10": "5mQzz59LESNttVyAzV5pPzvBjTipUGJRmPNTHkCW4Vs3X1HygnMQ4oGPQaiHXY5sujNj5Y2hkBYQ3VcejUcZxpFF",
  "key11": "4mn3wCYiieEXycgYRvv5P7G9nhFbUsKaseQUCPmR16tAevprnALUpTSZ1iZDrgBLvWqnoEMvahiMFJAxMb4Jt2TY",
  "key12": "3KG1CR9waKUSjCfDtaXD2GES1DBGbfUVxjsf55pbKLc7PCGDvMQucE2QstZrfa8D2p8LjWbDPhiXXzQCSNpgBxz6",
  "key13": "5nieFkXnYoiSM1cYVtThaNz2Ha1ngUobWBt8bs9XC8bo7AVToXMvNZLdPuZzjBTSCso3wBtVPf16jNKfdr2QDcd5",
  "key14": "3qHw84CpZUaNvZabGBgXk7yrDZvR8ZCteNxw4d2iX7J6xCPdLe3JKetffCKBtgiMdnkCDqrfY845suPTXFpszNQU",
  "key15": "2fao76jHRaA9KauR4ypBT1E2sqL6UXcRfojmE1xDX3Wd9j8jzjzCG8LoVEkUrdc4HPSu2oFrdCZi48BW67pnWUFb",
  "key16": "2Abuav66yAsj8c4RMTHGyiTmDLbNvR7QfS3vxtQnFbKUCpT59f1GZJ2iEsBedaerumsoKmmnSWgpDqimNToh28Ne",
  "key17": "22WozxzGfBYPhfwWVq16StgSCGBZTshvPkWxKUjPmp4RNR3inyGUUzh7x8uviUQAPCsBp8JiCjG9LkiUPwTcw9GF",
  "key18": "3vUf2ghpfEM5j8DXBUJ7wTrZuxQMnpvFmkf6GKdJ9nUJpvvEKFpoyibtM8aPkz8YcjE7b65vT9rFuX7VrqjHfqzY",
  "key19": "4fEmgjWkxf8virBYYC4x2RsP3XSLdeGXDHjahXAumMvkARSGGnF8KS6xLMnUVQHFKCdqp9KuCgFtiPbxNaGPxeKc",
  "key20": "5VU1D6Uw8LRK5fDgbSTAuhP9BYDX8yBjwA859wYxKiSuQW6HKfFvHR7n3MiXeuFEsSoMjrNSPDXQ3Xfrdv5wYCeM",
  "key21": "k2HMxTXeTaPNftR7NaYed2snZRieaQb14Xo7dYetM45Vq8McjB6CnRK8v4sfzHatGWnMveVbJBpxtjJBGHrh83C",
  "key22": "2xdxmNhJAHqKiK68hHsE9HNCZQXGAC8pRTYDWrT9UrDf9qFSvQ4jNYM5cY53PDB1MNWnkJMPQdSSftpfqVqJcLXq",
  "key23": "5HitxyomxWGjB2gETLfYixDnpDy2p37C3zNTuckvfzBa4C5E9rg4MNp11wK8ooUk86nREUMQJH6xbfSRT3QUPohX",
  "key24": "3pfqajB8LxGgeNMi2KZzzavq6gMUYCMpx5p4vsh6BpV4hQG3VPjH8E3Kmv63d7u2GCMTdg97yvXWgXNC8jYfdtir",
  "key25": "bgTZZjmM4e3PWv1QipUCQTNqdoe34hfBv8vK5RU37z1xVb9mMS3w6j1cY7HpKaKT9QuQycenoA6L8k7fMyCXtT9",
  "key26": "5AXfze9mgxjNtHsBj8XRi183iczYcETPeZcUCBBj9JriNtAJ4DYjA6hCmy3f3oBWkacmAfH6bfCcFuuXib6Vs4CR",
  "key27": "52EsLSmmKqtaVqQirZXwKd5oDCFTC5dm9kunV7E1rQeBkQTFugfUQztKwPzJu5YrDSJ1tv9HHUioG5GgtMDJCcEx",
  "key28": "5MLF9WvPQmbbsyjnt5VU2NxhhFmpTV821KTgiH4wk1HxobapUotqu9QprRbSGNnLPpVPsZ2P66UYggnxeCMK1CT7",
  "key29": "2Vy8zXaxVEda7KMDo3X5ZA2pNFhFUmdLxdoDBen8Kcsae1EpFo6GBwFW1TSmZrBnxEBfwCuFQXmA1ay7ibur5ruN",
  "key30": "5xiULsoqYDrMSATjw7wh2daYYgL82wmBjrDeuwNTZ52wbSLATxhxa3WgQT8k7hU1AQMkzpE2wmwkaiJZqJeBmCmq",
  "key31": "54W9dLPgFusv9aeaeka65jqR6VifKrMu6CSvXbPV88ghRZ1kX9hydooPMgvhMVwdvZZtc94mwL8bN8mdfC6Sy6yW",
  "key32": "5gjgajTTmbsvUNZ7ABLjB4QJqmiD9rKHo4Qgg7kbAqUnCwTikTBSWDwtgv1AZEQ4A39Hq59mk2P6nVLrRWQD7hX4",
  "key33": "64FU6ynm8deW8JsZ7i76qPrroFNmiKVm2WVjHeEcmvz342RUEUmTePYb1gWJcEj4CjPm7b3PuK5xgUHMqnQ1H8hm",
  "key34": "2Y7bnJeWKgHTBuEsWJpi2KWEg6oCDdwRPwwevXGWjRCb86waTVLTVBwTvvzw8CagGDYB7rnRTDPAM7D5x8zS1Jf5",
  "key35": "3s4hpe2DB1JvpA1rsDCKw2iSG3MrSVuVh4PmDsLsPbAjree3QqZNFosPksUN1CGP4gnAmCsmk13haiLuUUpXJStS",
  "key36": "3TJB62t7yFcRPhAjLfYaZcpS3LPLHonx68wU7BuYjrxRmfEhfDq3LU7h6jBYcCAR4LUnmJweJUWBZunExwHmojHw"
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
