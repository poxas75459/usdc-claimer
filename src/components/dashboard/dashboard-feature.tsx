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
    "2jge9wrgph7fsMNqGibA8DeXMxXT5QM71pfZgHBMPQRQa8djTujnhQ9YmjXaMmkfctpQ4pYg8QYiwZ7z4vhunnN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X2iK2YHB6pM5nJdGftM8BZy3VbfGcWauDT17ovti5k5shWAxmer6rUPeu9y7d2EuvLaom5EkZLAiFW4fjkq9Uit",
  "key1": "2HvouuDQ33ArnptePTkgo14Dmeqw6nyRT8SZo4CRpUHQmfDGRHKNTAVJagMMMjFkb96xdUZxCTEuWBaMjs8eB2jc",
  "key2": "3g1TzZ4WNLWQ9W73WwfgmdsnEJS44NCjD3W2xxD6p2LFGxmY4YLiRhQtGMHDgVnyL9hg1hQV9RXGkkmtTNKYyBYG",
  "key3": "3PabkiQCk3kD2fZh6L46p7kL94Eh7F3k4o4dHtnoTqCrR786JXsYVJFTiQToC84gmRdjFAby5dkEnYjjqNyKtJPs",
  "key4": "5MDoMfg9Pc56N7CHE75mppDoBCKs1nafXCjW64oFsmQCT2pUWn4WYmrKqkEMfDEpEAwA4Rp6TKGip38A15UVWsus",
  "key5": "tFSaXNLw8dZGZCEZ7PtGHcSEDEePaTYLWNTmXv5sMYRJjNRMvwQzG2m9txb79fHbE7T5F3xj43Rhqh6TyCFRACQ",
  "key6": "RrQwQHhrdB9YHZSHyNhNPhHvuQVe1ahgLMuBgeKACTFkLveWVz2XqmwpzK3yXVfd2HzqCaUudC6usMSdmhuwzYR",
  "key7": "4iNUWvz4JcmLbnj4KSJPGFJWeR9f7NodAU2iGq6Ja8GnwsrQFdYF7WdTfzJpntk2wuQ2V8KZzWmMT5cuX6pFGaYe",
  "key8": "4LRveHEkJj3WyHXSzVT7h6vE21nVc5VfYwKRJPL2YkdLt9PFq1iAaSNVnLM8A5E8ybQP48un76tFjXVRMPPkopG",
  "key9": "28XnEDgEeiBAqGzWpFDyPmdwnmoLoV1cenVcFCb21q6AKPvdzQ6W68MLFv2vqNGQwHdhcY8uBgS6Xeg7L1uDNULm",
  "key10": "5cbZiYdgNnfUmt7hdiEd2qUb2cRPUDrEh4cbAC7q7ge5eDSJeeG1SMaA6bxcSWuiu8dK1HCiKvkam4SCoVm1pAWp",
  "key11": "51d1SSJ148bQJ6cqW35acUnJM7BX72rBgMiR9cCx2nfhSNoxsUK9uThjrPWpJNzTZT1cnahi9yThMSTDNT42ZypD",
  "key12": "4W62V7L9WCb6eQwqsM3WtohHAYyBbfWGrxn3Cpi72F7XJMtepJkcFVEpraNrR6R5qpeuUCC2epLfndG2otixdHva",
  "key13": "TRRDdiRo6HGisuaQdC8NhYsooc5pEoqwD6GamrWgYcvzA8qjnXcHhN9TK27wUzomYE9UVENtT9Prgip39sEpiQc",
  "key14": "9waQzZ2EvKJYFWC3mrt523ouGSj9tBVmwCUMJa5muiiCyYWsdFsyQaJjmPGfrCmGkhyGHURixBtBAzXK3SFAnXK",
  "key15": "3ouSyUjuzQSX7TkAAL7wDcWVnN9uUvjDtQwMFA4cFzKvJ27SmLjcAzE5m5TZjXKRxWq1HjVhHoEkcNQkLhKqccjC",
  "key16": "4vFgYx3dKThHxNQJwcdmTjY2kossxKJ81oFG447HxTEkJCCLgNtQ5aapvTajMYjGpPweZZxBQmmkT1j5JUWnhBHg",
  "key17": "3gyhg4kK52ZCJzuLH8J56ujdmKAvfJY6SEdux3q8mzDjXp9iLAcjh8w9VxUAyeC9rxEJZcAqCwpj2qNnTQFxCNRe",
  "key18": "2m84BApeX24b2qUHYcfxYwLbVDKQ558JXBUZa2RL3AKsWWyRyjVEQqySse2DcaPSJiFJQxfzJoVgr4atbJounUBp",
  "key19": "446NEwHTFPvnNXV2Wm7sHqHShH7adxZ88bDNHJ6hQcwEMKMsfg8kySYSWH44Woq6yxKBNHLRjMBfvXsX64AqFk8h",
  "key20": "2AGpfKphHXJggPfPhyveXMZDhVYZRHf8AvfZaU73H1rgmJgrA3EU7MkKRSAdPr9FkhiigjUioFo4QYKU62oKnYoh",
  "key21": "2PiMZ3z2h67nyShSuU1CHXbBDk957XCQKHzeHiyk3sbG4sn2buwCaZGFC6h5cXJrMoZij8yPKFePG2hcDckQ2eo",
  "key22": "5yunEZ5mzQnwoc95tpSBhzRoGskbNZd5iZVHvdnpZpb6hQZZbDrcvo4forUm3eFjYaLDpstdpSB29sn3TUzEvukR",
  "key23": "3ukyjGdcSsBDANatcFpDXMjGMQS8Z9YP5Pjmix7s37YsGtoaEMJ9Am5GgoVoqv1qnFd1viCeYyQVTKZfjEgYPgwD",
  "key24": "2S89tM12duS9ojtssYQFEcPQ1ci7Dfwh8EZbnX1Fdws1AoyL7Vc4wXNzW1rTyzQyiAPbYQCi5MM87sca5uTwWH7",
  "key25": "2bXTCivTvcNLiALpKAwhjoFcjNURTbbmv4h1Cv7XjLr6mmryAuK5XinEiGFjRhLvPU2upS1xkycXXqMTvDLJMV6g",
  "key26": "2QfoduSJbUfv4E7E2qqJXbisMz6zozf4kjQ7RNUB2u3shCfqqnnFWTEpUM3PJEqJGQf424KQ8o5XW9usqc1hsqaj",
  "key27": "5GDvB2eHmFm5MBoS7TDvWAm7CfHES7B4Mmb8gRiTsvHouKy1vRv6K3qzBqSdoGoonupWbSaNLoi2gBAgQmac8DMa",
  "key28": "3oBTQzkZKp89SiBeUHuzGnUG9XgStjBQ5cvtnDQhvgHjykfLPNyw41ZkdBKjKk14bv6kwMy3emVBiDGjdMoNEugs",
  "key29": "3jQ5386QUBub1BgFf4Q4qJYuX2RCMaodoJmK7vXi2vpdjeQxU2SXmJqiA8RyEpBmXyrMHAjA8CHufHBDRjKAWVpW",
  "key30": "4ZYs3pYvcUN74ptZHag6LKF7hJEMp5kBcNMF1Lcw8u7MGW41fuNb9xiVgnE4LvFYPkDYUY5Kq97mgboTi6D8s9PS",
  "key31": "2FkRPzBxC5d22vNGJjeH3y631Pw8TUXR1RDcgFWQERHstF6SjcX5rTFVP6r4prAvPWQQnqVSAsXYSbaAjunsZ931",
  "key32": "2PVgkU69YsAq8ce4FRz3WmHLDVyJDkPvHrioSjLRTdVSoYvVw39UVeNCFbwfrYbLcDg1Zc6zXQeAhvHQZ7k5H5gJ",
  "key33": "BxcByxbZUktiFgqtk5Mj3ihr8rkgUis9ng1hVysrhRRxVJwiPtLquktBaKJrnRsyxZEhSgxsNuJVeVVPRD4JSPP",
  "key34": "hdCcEt3R3cDkG3d8HuSUnoChUM3VEzGePz2sWeybnvVvwk1vMNYyDsPKao8AzwCA2nxZzSgimUb7YrKLjaPWiPW",
  "key35": "3TQf8rgESQv3G3NKRackBAXqfASJxfbusRgBxu6AcWAatUJeE2yEmzCauWn84bhypSSFdRsx92DTgqwZ4XoPSaQV",
  "key36": "4fT7iYY5vXpZstSXoHW44ahnPpAs48Ki6Jz3UNsE6JR9oxNGDVf3jdhPqN4YfE66TEivhmjrUWUiaYwakcsoH8XS",
  "key37": "2F41WJXv6rNDTLRRaBqBy6A4SxsicWa4JT2CGvBEgb61zEnr7bsXuqronjJH7bF2WaUXo3DJ3Ui7mRkP9KehRfML",
  "key38": "41vHh8PhLefTRfDnhLerKA85LS9d7gpb7TnmQwqVfgxBQe5powNfNBBEjBCzsvGrfpvvZ6AAqdStf4pzozLNxHcG",
  "key39": "43YhJnkriWPki52yFqdYbLixvtToCFEqdm8jT2mHG7yoYpZYeFPnkKatzwCZe5UqKBZztTV9DkBQnMrfarhoVGCM"
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
