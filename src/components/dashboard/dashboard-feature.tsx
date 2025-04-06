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
    "5A1CxnXKPwvP2zndVyjtBhxdiBS1GpUBxLrk5d4bxGC24SN9pK97yygYv4CVKsKwc8v9zSXiwyL64eyt93NSRcuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "224gGVLGBhAesA6A3i3CU8P2bNgK9tUA3mSC7jtjJwPqV9zS6w36JpmJuovCBjEcomMvV1x1aYnATHp4RQVY6BJz",
  "key1": "3h6Af34MdZAke333Uh4MDBsGuiWvz8wifBsw343uyqNbRMyntig1hMVb6kFjJd7oRZYpvGX4yu7ovNdafYYDztVV",
  "key2": "2s1vfGLS4RzPY97sFRKMsiahhe3Gf4E45zVdZWE5No91sJ2CMjJxJ5chVfGpdb3pg8p9uipWLvnDtV4gCiJKATM4",
  "key3": "5Z15WSnem4H5VjZsHxb41Pjo7sRKhQXFkp5mezYy1ZG2F2BUWS7PXmGCGqwEA1yRmfG91dXdtrEZE9dMGi3fr9Kz",
  "key4": "4stEzyWTrnaLmT82QoQfWeyqdWC53i7crbCiRi3xqcgHawknyNWM7daRMRX8hfykJ2np8qHJwgvdnLcWSF98MoHG",
  "key5": "4kvpSZK7QbzsGB3vpqDyptwftpfUWXm9QjPF4ESDvWVYNSrb2CF1tkwBy28QCjEispNDdz6ogd1fksyHa5wVyDeR",
  "key6": "5fe8HJDCjh8EyHATj3a51SXvQPAt7JzJqYMrZqrxicvANUrdzriDfH6YD9d8S2qN4faXZGb2RW2jvPzip3YMMiQR",
  "key7": "TsyZvie1EKYzhJXFQxkmoFNeCVgyVDFWSAuPKi5ZtTrLRWHktu26FHKTz7PJoa3D4zRatX2MtE2hLdbnKCuTLqz",
  "key8": "38J7kUpEPsNhs2E7kW7m7jy9EKXX8usJgCnPjkiuRDNYcs7t6tnJWG68vUty7DoCbtoS6kGZA1DVXfneerAFxxu6",
  "key9": "2VETiE5xnyMPUcn2CKx3dKm1RrUrJ9zqRehQxf3DZVfWWRJhFPwuRwrHDyML4XbSrFptsUc5pHnwMzR8PmGktkBc",
  "key10": "4toFoVM8texYxqsqPP7ZhhX8hWYkh12o8qafDnEBT5UqcAAz6n6RU937vYyBPShVSZBWtkwtCD1uVZR4t7AqDDf6",
  "key11": "4DVetdUmCqQxv3TH9dnuGwndEvoNJTWvoxwkbyqaiUrpoWSFC4nrJKZ68X1z4qXjyxiEKQxaH6tvNbCnRffgL3PS",
  "key12": "3wwXSfbHo7mcGGWAm8PjKBseU4KK4eXjik6a3fDZcMBFEBKwa4iQA6w2VBezYCMzAHrTDceRRNtu9m2hu7jTPaoj",
  "key13": "e4wNMRhdJg9AgwtWKXkcDVZVCx8ZwN6DVKSDLjGwhSVRZKdXNiwGpFthZ3m9iyfQnCp95YT2tkhdDT7tRTmTu7C",
  "key14": "3XAGuPb7Kxn9RvFLMybHkx8fsbLpe2VQ5jX8CM9hqpxLQQxxWXnYZRKunByEwwYvxDVdhmCt49w4VPnsN9xyyQ6p",
  "key15": "67Rr9cvqi34dRyz877bPEtbzX9midq3R7AUssnUNoAScHohLSv3EMEtgZhzVEtKYEFgHhxet6cjbR5F6sLFdV6wW",
  "key16": "5ne199oZYDCRdMSNkbCDSEzHeUyJj9igiXjkzKDnv2DMeXZZjLj53NTSY26Yc1neos8kuAMkeQSMp2iZjiK2Wsc7",
  "key17": "632qTY6ic23BpVUnSCCAKFaLG1HC5KqRhh7TDj7hL1D1SyUYpZqTYGn3FoC6x6qn7WPhCTMEs3g9ibhcozFZDo2N",
  "key18": "4qxMs1RXx5LFii2HiQMcrJBHEoWRA21nsZh5ZbmFurh8yVtq4qqwPnebQUvYxECURrr2A3J6U7Re8zkXb5noz62H",
  "key19": "u2pMPeFCGWKsMDmoSdk6dNbaow5B7iCRBR7t6SdSAfEWTCL8GvnmcSBszTWqsLbDbqfqnSk8sDN83tgECLuyUKz",
  "key20": "dvvdvDao96pZaicSj3BpzjdmuuBMucDrpUpYKnDeScZgaQFEAQ65xJ1epimb9z7yJRRiremdKLCGH6NPFYR571b",
  "key21": "5w7GJmoN13i3QqnkG7VCM8WdVcvM9ni7yj8JmPtW7VuxRTpZzyy6qpRiWmC4FBPcCyyA5UUeXSqJxn1TjePkPbnS",
  "key22": "3NzrDXt8LyAwHXq2sCJbVtGJ4esqYwc8P5tioR2xf7FS9SEDHRwcmXVHNBYM2E528rherxoCh7zqsiAcZpLsNk4X",
  "key23": "2c1Ai8PepgXjYWbKMCpNmU5ebFwj5VaH8D7eSMK4GBUNF9RSFSQ8A4dMJTBmqqPp43f9qFrfnTp8KrHCmu1c9HZR",
  "key24": "gHYbUJx3yLJwZZMA2xPPbeKuKWRD9z5etQRP4KHHX7NZKztu3YwSk4ZxJri9xYQPdaYQFCy4ftmbG2pmy1Qqmkf",
  "key25": "3xKmwAybsHNLdHcnA2J1LD7Cw6LDHpybJKbUPjrZEsSMXtjPbjbnXgMDTFnZaSa8YRJTQfyXWfhPrHi5kFJYVPnG",
  "key26": "2eD1krXhYCa8TC9JKNxQ1XA7rH6YCR8djFPJtrumA8UVUQKM2hyXnMLVasPj8tL4hJqB8poSh5zYUfV3LHTkj8Px",
  "key27": "1Hs2bJmR7FZxbTLTynAm7Y9gWFZXSRwZYbaBb6a5Hh9dRZ5rPpxGcHjv2oasig6FeaMMw2Ky9UwL6YLm88f8T47",
  "key28": "2zM5zSmJoAVuTma7BxqEHGtGYFpsWL4QqvUpkE9MS2ESu4DmLsTssuZpruqZzFEpHCZWdUN23KCMjFEqPkGuq67y",
  "key29": "4LbaFB7XaebpWzrPBCfFwjAtLAh6HBcDhPzrJock5wXkEfQw6DApw4HAYQ1amdRBxe7VU6AqjW8SXjT9o57yAzAV",
  "key30": "2Fn7dnybZNrxoEnQP7SXa8ShoDNcPmbCX7UyhJf8rDpqe9w7Tyo2gYsUVgU3rT9gok5PE5EyzriDzvqdALSTgLXV",
  "key31": "2vmHp2EsezrGKMgHA6f7puGkyNKCmc8ZHvDttwoEFnRn8pGzwXrrBMcxiUopmYYG3vSKpXaiK7oEAcbsGmNkwY5j",
  "key32": "5BwGCRGw2zwxYJ5FqXdNpC1c1eRGVwcv7sjGJjRFMMJ96r6GVWWTWfZNioWRpLqRuvm4s252DFAygovBMzEF7VuB",
  "key33": "5X3dbpxbBpXLpyG7y3L1Q7FKfCxeRmnrBFkMwkDPYcP8dJaPzPyDACpnDvop2AL23QwQLexRa191XEWfRr8G9QqT",
  "key34": "5Wi5G8co3QPZnQqgcsdyJX9rKGuiKcfCw25zwhjTxkqa5TTrxF7G2M8DmripJmn35isVVccsqHRGLaWL2ur7x9qL",
  "key35": "4JJwHh4zMTpbyUuZgpSNX9cnGJ6i6xVv66CBRGE3MrJZm2HaH4LVcrgeCyDB3Af3xjS1Rfzz9E5pGH3x3MgUxqfD",
  "key36": "4GrycnaY8UqRf7tfkGqqqAx8kJMwcUenFP1TNrRPjLFonoQaHWMzdFudy7PEoNeugw88kfG7JrCuC5fTjE7eCLy5",
  "key37": "9CdEZutsr1C4mvYKMWxx3xpz4HGKhN531N6Qzhs6ZRp5rEGqsZGzxZBergfQyC4gB8VMgoZ3QSAKf6BgrwzQVEt",
  "key38": "57WLMdsmwQKD4cxUsVMdsiM9s29B1rfk7rpiQ5vz9tVdH62UPwA1HRA17erLQ3xBm58p1mVFA5BVBcpdrLKaXTpE",
  "key39": "4dJDAwVDPi4UFkcXtkmZ3zBePuq2jXdoUFkPu6uM13KtnEvxUj2ecbi5s47dyXYfNt8ceWeg4uE6CchDF4QZyefV",
  "key40": "4z269AAnr4AfwsKJJiThyw1sQTDEBpqr5682crVoD9PzbRWxMsxU5WVQFvpN9whkQaTdCX59S2gbAUGzNTFyUqrB"
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
