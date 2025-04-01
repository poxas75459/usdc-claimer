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
    "349qi7NZEr3yRSim1nhrk8EpNxBR5PbpxefAzyifL4VifPgbefMt8s4YwAnjUnjgFuHVdbSkrQP4JJDEbBKES6St"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctUAeDTspAUQHVHSyzSfWT4nxUKpjzZen6MG9Vq4mapd5qJ6Bm3vYChbZmpPqzgsNzM926svUrZ8U6DtZbHHZ8p",
  "key1": "2RivRoArPh6X6c56QJx297t9nXQ64FMk2XUwKxpFDdh9ubaasnomVaziL5hcusm89Km7tT9Xvz44EEgescjHB4BY",
  "key2": "5s8XULGFkYSj1Cmn7axY5B6FpzpXQH9GsPfM1M1Aa8YaPLvU9JRcKNfvasqY5GDtPD1TUnome4YbR6knKdQQcfRT",
  "key3": "2xxsm51zg7mJVwyvptdbs5Ur2GBRKCFopAEDZyDQE4WjCYy81wuqrick7uqY4rsgzT5DSNqVNPJtT9aMjnEfsuZa",
  "key4": "3zW6QW8ThCAz7dhTG9f2ZZY1A7oLw8RbyiS5snXqZKC2FayLZtPUSEoqsNZs9iSUwdaoRkZrZvZ5y3yNMKjg4U7E",
  "key5": "5JHDsafLhP58Hm5aHXGtL9cPugzhbCFgXWpbJG4D8vv546LVxMqJmVgPt2KJtibqeAPpA4yABkHvZingd1M249Fb",
  "key6": "46Yg8NFdYDHB588dBjJE22XF62wETfikhKtRygKtzM8hs89HpcQsJ3mAhNsnWB3TwwYeuVj56yANgCAQKjitRdAe",
  "key7": "Pbam8Jnme3vgQQozxxnUdmHtR5iKzBJxd8bgeNStwm9HKuQnSxY8V3y3unZGHRWsiNL4bzjCoQ96dAGE78a8ctC",
  "key8": "7TYUAshFu6rBZkn1M94SB3X7c41iagF7SFu6oNPDXhBhcJ5GVqp17zn6AAEJv7UbaRLSBs6Tfc2j4yggW65WDRe",
  "key9": "4xmJiKB7mQz4Km2rcbLCcLT4g1jCFmSzMgFEcYn7TX7z2Ug5nm35kobeyF724AUUFx4hRPgmis7tNNX28VdxxB7p",
  "key10": "KgW96fUdMtw81hPKzDpjPVpHB5wXyoUUxaQVuV5rMFiZBzRbPWaKpP2ywqodHmu6YmDCgi696Utd5mf8Yc2beb9",
  "key11": "3DgXowAey6Pws2JBubmfwUP8RKSm4gbko3z8ZgVPnSPLa4Lsc1yQEn5PTy8q5udKePgSLEQsGmn9v9v2ZpNRPQmg",
  "key12": "cAnn933BFjzzYdjNnddUvgJqkfc77TQd4yUd7PpRpHFZ5hhZ8KKBzeG5wHYMwrZQnW3XJSzg5W1GH1sfTgaNxeX",
  "key13": "jCAP8sS9svwpFJakJXTNcvHceuKsQkTdtZqQdt1F43Uc4EnHstBrDFZVZLCS1EgURs43pswAgGzuPZ2HxM1fVjp",
  "key14": "2cx5qrRfqajuGe1SokwtMSNVcnvw9K3rVfEEuzFm17hKCbGCppwy73X3iRt81pEPkfcRtW9vj2WtJoxXE74SVCEy",
  "key15": "3CE99jAWPQsRVXgbaJmNgkD9GbrCb8N5SVisqro3K9b8yWdg5RFyCZCPifVL6FbrTFZzsAvHu6d8ZFsYyVU9cgar",
  "key16": "43i9z4GPcYx5Qow131oFFHSrxsTh6uhhd8jvr9Q4gDKHvRJqpihYXVjhs2DgVo9qspUhakgCGpNET18hPA4tEFds",
  "key17": "5SJbDGLSqTchtp2GRLesgG8JMMTNqLJxQ4tmXUbG2f4nxoDosL2RTpGMxvpqj3AzqRxrKRfichep6BGKsDgLAdpx",
  "key18": "DcyEqPmYrHmRdLURXrfjGwDWeQJvb5WrKYFBBdGvtNMPF6AaKqUXgrWYJy6z8BUDS7UXnvhUdyMNre12omrV13s",
  "key19": "v41CvijaeKTHKFP8YSq1J9UcBr9c7wGaYGsmsVH2rXjL7WJm4FX48HRLDSyiZEXuMkruKxvZ61ojiQ4HCB6oe6X",
  "key20": "2mugLxbrkYe9wbG57uQ5MxtskFCMqhCurLpw8nsETX3oBSpDdA8pKqKsu4TfQTQWw5UZDqHqV6y6mYYH7uPdZ4FN",
  "key21": "364iVCeEeWKhJzFyexe89nATcz249JinezCcB1QohF6QvdEdyCAPiRZbXZKCimKw5xUdVnZbiEWw8ER4G2XbJv1V",
  "key22": "2wZpZVxDDc83zuuqWCw3Coj3VoMTrV1tMwdPFGMLJmSyCdKmZuUf49QyCe6am7unurzvqmt9R5PY2Wam6fZCt1ov",
  "key23": "42kjEViE8qWa5gEtaFzejrFcJKSMJ7n9GFXVBwmTCQ5FeVLD4A9SMYwoQZMy215hqb7Pqkk9KNkh5ExKffSTUU2g",
  "key24": "NjZyBtG1zYqnsUhfjKDPfVyzCADvzTBosh6hqo9Hc7ZppUSAyMaCEAFZpmzjmpDNA1q5mC3FTrjBxnE77tjgHB9",
  "key25": "3BVaGJhBURN7BXuqozvazF2rCXhZvFFaW28ZmLoRpw7ztxFiRg7dUFZq5pqUjaVaNeKVnmRMEUKE5jKGfcJLUCXV",
  "key26": "2QN5M1YCUnzt4gK7AbqT7YxTNoTecb3bv5ZrBU1DPJEWjUd9S9mnNxy1A2Dn6aQsFhfzvx79qpiBKpGf23FcYYMW",
  "key27": "3k2qBAtKJB4YgAjBTumwSGVuv2X6xXGSui57ftnabLeQT2AW3b42BpXBmYcNy1dmLkeS1uqSrv5hqWHBn51QpaVV",
  "key28": "xCmvCZRTYQcMNPE9uMnfKjB9S3otAV4dkAq2ENDhe5Adf85ny2c9jYJvCBYmqmRZUvKkEmwN7kmr1jToGpm8G4m",
  "key29": "5RXw2gLv1fkeWcuv332sFjsdeqEML4qesfHiGv4Atvx1bB71G6iQEEskaYosrRsBMpiVNeBS8TtQ19xg2oKkdLLF",
  "key30": "4oZGxxcMYSUJh6a2XyjkjFHXdUc1JoeXTUUyxRpyM9SVg7pvvku5v9UAMPUyRjwGgRCmUGLnbn5NPohiCZos6Kv8",
  "key31": "3En4DAg6Tjx6Pyv9R75caku4iEE5mqfkfeTbeEqSzi3uzvyeWAPi3nS6TSGaMhWBxVngr32dXTmJG8guEEAFP4hE",
  "key32": "5A4WGwV6fWJz9SEZrXJEafZw9GGaUPzyntQJMzuwiinFp4458au3J9ZeotjhC5N8A5BJ5tt9D7xD9ikhqeSqiiki",
  "key33": "2iQ8Xw6mAFvA5Ui1gwXZXExMm5gBFmtCZavW4LXhQU9gcWTcvtLCi7DTnYMbEhXdDSzYt4bFBG9o2X4nm6P9drUE",
  "key34": "3JzBKmnBS7aZPYqcRsJiYL9R3xewAvc4aJvM5MkE6Z2gRHYYrPK44hNcXvLqsv9QpBGoxy8y9F27NH264oiCeAAh",
  "key35": "3GTcEZp6FKZaUE6zEP47sij7dbXj3huTAiMi3RxYikdSHfaMxaSS1aX726Zx6temVNx6uXBn48ZsLyABxJzAUb76",
  "key36": "3HWyv6hWwSAw2Qb4aF8ArTo8EXKteEtCMvdBn5j3wzN8VQMBK6v2Xj9Jo6tAuTNLspKXoxEtocSJ8xCGzkckyuNx",
  "key37": "3ptfVUXQ9qvEoSN2wGmSkFEWNEtJotFVZxG9zLf4xZ6vRXfkUY7SvpGx19TegrmC9yNyypPkxKemoZDqr1vDH4uF",
  "key38": "5Qi85fPS3XtPqoL1T5ciBuHxwFgQ682ByT4wjnasTjWet8FgpHKc54fCY4BsTCxZpQ74ZYdptKMtVAEEjHHcGurK"
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
