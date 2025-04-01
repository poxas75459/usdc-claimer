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
    "3tBfgd8uY2GaEAFqUiSbMWegXMa4zh9uDsqNBwDxFFs5fuWeaJEAarNvCeGPHwMsK63HbogeiFpNMQS6UrJ1GQmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wm7W1ceT9Fh1SsLpnDkR3XgLT1DzJw7bDS1gqsMb7cD48dxSSqm5kEyqJqwkco9DLkXFFLbDeHNemABMWpRmog",
  "key1": "5d4uZpvRyjnPCvZz9SnZagsAPgj6sEsj3k6Ujv1aqPJedXCVD8cbx2JLAjbsmj6VYLdMJ4YdjL8tgxeVe8L6N6BK",
  "key2": "5G7zuVeobdwqnEsTt91cxsJV1KCjcAeVoJN2pPqMrhESQkQttRnFh36qp864Bt72aAaqYVemRbWQFjekSaMCJCqT",
  "key3": "2s7E8J8zpcDsobM41BHC65eWtKBGYzJyxgtSQzojxWwiJEDq19UaGcsUM13Vr28zyT94mASbX1zbyB4f8uuP9zpE",
  "key4": "5dScyJVv9CpdSKcxbNko2GC56teoMDzGWVgmeFiTPGxMXchQobX4nPcZagFNpG5cSgdu5B7JetEwXyPuqg3TVLpd",
  "key5": "2uQU9BNw4junF6DPYYVFJDRUQCm6FQYXhUhdPeFuyRZ4WazvwHtqTu3rSwZcbmcZXkz799Y8bXcXYUNZvRWAxrqw",
  "key6": "2vBp6pPWRZVTw7JEsAidRgQhDQMcjHwYiSV8wTcdpvj9nAdeWJWCNUvxWWTMtfkH6wEGn9KhUY9TJESuqoK6azv5",
  "key7": "481cvPepwkmiwMVVdtsTMbbt6rEvuSt9n6xzWPAhtprVyw7SxhdSTZet9CqyXa3HMCysaonmVqcFbWEjpfwvEGsY",
  "key8": "2wkARppzGFJZwyxTdvW6zNwYhkeFptdiEaETuuLLrmaRZgZ2yMzY5SCgtjSPCLJkUyNkcq3m38UUnPAVxVThbAhw",
  "key9": "4WqcAkxkJ4XuQhfeASeU4EB7TtTjqQCAwn4tx4JRQsABA7JiF9G9uGU8L2y64QaZyjhnF6rqY4SVPYK9o6Wmvg41",
  "key10": "5toW7p5nCAsMNYwG9TdN6qNfgvu2YY2hERaL3Hj2zqAnUCpZ72cooG8CDP2NtUuoHwL7iAgjLfzRqiYx2xxMjsBY",
  "key11": "5mSm6SmYqSGeyqS2Kebma68ab9omjbr16UzahK8rNGzArk7qg2e3DEPsXkdLvfZ2P6GMb1eD3S5tMv6c2XM7c1sZ",
  "key12": "2XdeRoDkQrPcVWUkJxYpmGnUZkMwimVbt2eNBDEbYUEekZqeDwRDyJrxRZ5gQnrgP43y8k1Lp2oR2ZVBXEnSq4JT",
  "key13": "2fPBVV6RQ8YzxVbdjzB6PAjL1Td7aBUYXhXcG1C9e1t5tPBqsWDqyyq3GxYmyaYtpcZkmskJcYNdrM9k3FRzdVjU",
  "key14": "o7XaLyf7YUriMedhB89jwmBf2o2bMotoDbjvxKvmxESDUUzqJbBEmsQQrNZiVg57z1PJ8N6KomKYhUGE1njnxbE",
  "key15": "2zRphEDiDbn7MTaBFo1hPPJaJn8WzPry6PwJmMSZQZ9wst6f4e8Lk1uLZ7PtyUBWriJPiuJsSb3n1bdyzi8v3oiU",
  "key16": "VhfjN6waiFznWyHDRq1WEHvPYonQjFFYD6ChwP4u7soacTQWv8Etzcu1dTDaFBwvRCUmshCjsT7vQXAnckxedZJ",
  "key17": "3hCSTh6ruLB2wLxXmG43EhgaAn6NCNPPxLAFt6YgRrWWt3NVdpzRMbe8VhEDSHo3SrSy5m7tAt3x7FWLhqshL6nF",
  "key18": "3aS5sCy54gbJ5FRguA4rLqqysEz5bqAYSXkRiRpBCg1nkqQCW9toWAhcs2AyGwwEbpN7ZPywnrn3vM2fbER6a7oE",
  "key19": "4zXCL7zGkeyKNW2ETmroLCsVR4Q6nsXDVA6HSkgdpkam9tVnxKTordN1XiSHoaZQQZBnLg1tSYPSEavcW8Xo5ooZ",
  "key20": "CrmKSdW4i6nFFQrZTQTwu5zFSCYoscJexfB5cfEyh2wZEWtWwCFnEd7h6ze63o5NiLtjXYwodNzaNe2of87625x",
  "key21": "58ohihkpT7sEUJb1r4J7LdgSBaMPJAYcFzikB8Zj8FxeU7gCWviBJw6mEM2kHTun5rcgQedgu4eEMoEcZXqz7GCX",
  "key22": "4bBFDBv6X1ZJraqPx7Led1zYWKAjUHT8sQUaNkfa5qpLTPndFbeCR7MD9NDagEyD95ojcDuqygyhPJq7Du5sH7aD",
  "key23": "4UfRHZWxiATZBNr8yDvvutinVNSr32PYen7LGvhvUyk8DxNmoDsd2mNeQfF9dt3MgDdZR777q73CZTkGctquUTGS",
  "key24": "3TJomT3VGLFUMduEoQWvWMZ28szWJK4CnSKhxEuwCscJsX8wX9BykxA2UzM8iPfQocNSArwqRjyvXmWx4t5wakLc",
  "key25": "5Evxw8dwEjqowQNa5pnEUjkghvskE59HPbZmAUjvv9CD3fVcS9oDCj7YLJPKSAQJxrYki7A5wRXgix2gzgN5DzqH",
  "key26": "5NZ599rGqTah8T8jeD9KH9nJzMbFzkorhGiEzM96A9Z8QYWKy3tQBj3gjE2h6JfH2hMnMcVuoZS3FJHiUC7iUbEk",
  "key27": "4DQL1hLg9Bp5A1kqXPUyVNtMHq8uiufyWAET1AVh1HQFoMNnJFTKm2eLgjV96cVWUJG8VbQggBrY4K9MVotP6VXW",
  "key28": "56abv48pZLC8913VnwHW6azWJSaoQn4bammffcQrjUtLsnyvJvfA1Y3Qf3wd4r2T28cZywHKUXv9T9awwPJA5cJp",
  "key29": "2hsKEgxxugw4zQYEpcRM9XwaymeNgj12KftYgitVWpCGh3BvUo6QrTZWKzRJAxgaZpQ22ujPagXWJfQVa78X9UE8",
  "key30": "5rCvYznWaYUqQPK5EYm2sZLG7VUftGChoDnyRMNeRtT6HCh66gUmKYob4mQCn99jbmRbHiiJG1eXfjL88JgdaFPf",
  "key31": "vffZJKYojLoNe5APHvGYKxsESFaBPH1RBQTH2X2V5v8EssynR1ZKG1Goc23YF1cY7DeCNkyiuhKTf3h8NX3weag",
  "key32": "4NNpW4B8heoo6YfZzyTmzFDpWeHMzRgddvpXftGjGUd4EacsTm28xrmwj2rqGh5DE1ufnb38NYxeUMB7LsKYAG7M",
  "key33": "3imYn2MoDMRjFdgzmp5RjfsSCQKCAmgpPrkWFRMtHteVmrXAeYXjxA7s6oJN792BnYEXeWEn1nKAk5uN36YZP9F8",
  "key34": "3ty2DvL36yfvQK4Gj5F9BvbEVzQNmTdY7w2v23MsS3XEEjSvAvRFSi5dDwmuYQC1huCK8bPmfQrzCeaEwpV8gxAm",
  "key35": "44isCqnL4nczCyDFNyfJHqqoEmHbPU7GEXpgrXBdT3JQ7N9ac9q3DWzBbkixw1KLpW4SgfF2sSqq6WB7ZfVEd8CD",
  "key36": "5AQaUhevfC8rrt3Ub9uSnxRspcJRbvipzKwYbWL9K54QEXLpUvUeVLQfoQgfApex6ud11ucSUUNkKrXVEd71QPqb",
  "key37": "2nmhV6T1D1PYXjRc3SRtoGy3MdaU9RQPfkWwtByNoyrmDQ4ppBvERGtJAsFHCDZnnjMWYhrhdYu3RYqubZyRrku1",
  "key38": "2ymXbtN35z71H6Ha1ch4WPYELXqf6a4jkobRcEktYeSkjdyHHDzRiHywdYfq32pxgYQR94eAneKLuWgJQaiDJwjP",
  "key39": "4DRLRLXpqc4CD8zERrz6Z9r4SUoWw2K1J7t4aoGDWUKavR46biSuoC9H9wWUWqJp46LN5oMK3fkpqnCRg67kqnG9",
  "key40": "3xPSbY7nzjiNjjKEd3GSLS9fQmGdraKGXQzjBHiEi42oSNEJVCYt6SKAidU5xrtyMzgvcuANsXXRMCrASJV2Uk1o",
  "key41": "kucbYiRAT3DRWAnQPXUrAj64aeFeaB7rJRHzuWE4HGZRHkuEEyhggEahe1C52rWePQkC3xRTNC4qiv2sEbf4hgy"
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
