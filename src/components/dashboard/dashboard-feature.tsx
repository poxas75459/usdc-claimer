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
    "3MSd88NzVZTyyTr4v8yJTBubxVZLDoyvszWCigBBbFh7j6NgyYExcX26eVcrKtZMGCy6mvyeab3iFENyHrkKynGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pcA24zJBD77HZJD3ZgcF2GnMuC6sehjGAckeAEYwXSjzhbo6m5XsvyCae3qLu2mqjt4Z1mnicRtYauHYrSnxTDi",
  "key1": "wsg7RfG3pWQwaBqVNt8AJVVEEc3WCDC2bK6sDJHdDK33erB8F5CK3w9Rrw5GZKBcu1nn8a1jR1GooaMNjwq29pF",
  "key2": "2k2kPS8cMv1P2ukEWsRPAJvGUCg4x8X7tpPAi9wRUNvPEsxSoUNUP5rQKEPD3ukJqMevdM34iHnPQ6KswqARXZtw",
  "key3": "4Ud9AeaqdV2ck47JB9ukJoi7ixs4JsjV6gwJfNRSMCoj5BEnYTid6Ne9cAP9Q6mNeGVZSVZ8R9EGG69egdRKrWQK",
  "key4": "2qeBjscAChbhmhUVPEBw2cpf9rXdjXxWoGZR8kLsZuQQTx8b7ycsiPAV9Et7fX8Jpjz6G833Bjq6ndfY7vHq4kHc",
  "key5": "58JzZ41rHG93tdGDbU58fYwqMkPBw6sMkwV86hMJMwDNXUYbcAus92XbrcobWVE7yswueAQCYHwqZVRe7ptFStsd",
  "key6": "2E4TdDVuZGrveAr49q9uZZ11jzrCZK43Fx2BjVkU3CnghA1pDHBmhzYiZv9YvBSgTwwJS2Fnxo8xx8HUpDBV8fJC",
  "key7": "uDWenRcQYZ4VET388xtPerVtBnDSm16C85SoKYpeKmFfDKwYCTKPhByM4XQMhu8JATXtk1r8zpMucoHVP6hEh7B",
  "key8": "5ykzYNAzbtptt4Cs8RAvXoH4rZkBz2miTktgtsqWG54EbfLUVnrMDz2ouo6aAZaTvzZMXhGd1AALV6ffe73KpxFa",
  "key9": "3J6D6BSDNBoRDdww9zU9w6SQV2oFXBRwtbe9pbm5DQRcYkbeziQi2mbZiimPHVaMK6QXBNT8kqZVkqdj4bzBxMbF",
  "key10": "63FiJsqbFqEt5aA55sv32JeGDNTFBUnNDFgFdVY9FBHQuN3ZHPKZibqo4zxSMnBmWBrLnqfxey8NQ6L4y8zmBBSN",
  "key11": "sJtsdWD28QC421dxN2nEsobTtcdeEQ8hRT4DbWcrLLSWGsAW8N8WiQmZcB9v7x7HLzsXH1GCxWxmoaJ1uFBoJv1",
  "key12": "2eXN9KMDocfBRiszDGsq4TPooPxQpA5HgQZ1VGURhHyu1eFMmeF7ZK4AqmM9jRPW6u4MoDNCMBSkuimp4ccUHzZ2",
  "key13": "5cPALAPqyFJRxJcZNzqM6GcVBW6bjgYZLYXHLMwSQt3FApLJVa98T4TVGY9bCWojYc1rMXf4dvc4G5aHZvkJADh6",
  "key14": "dPGPimPnSLvmKT7jdw25Hz2epCeZG9U5kv6eDivJCR2SPgzEYfG91gbxYzvyUwZcmeXAM1wPzws5EA2ZEdyVXmD",
  "key15": "JpeW27Zm6uLw2z9jY2ozgjNNDArn95Uygc7CqE2yjwMTKzXwipzBxfSkdXBbXzr2eBgUDondXVeGkR3p6iyKWYp",
  "key16": "3ZWsUxNAPwGFbpo83VYzQGZA2kG2VoCiF16yWrkuqRxiuWJYcTt1QBuQCXNsyAw2pTqn1tyChkTtMymzM8PhMWKy",
  "key17": "59iKNPcKZrzYZhFikjF73i3iVy58LNL8Q6XXSq2JAYhy6C1uERLqrx3n8Y7XAqnEMQzydFsRdQQCio6qDeGdhAv7",
  "key18": "3YENdEEarDYn6TFxjDSz5ZEZm3brcfeUv8LcQQtmHzCrphQ9ZMX44tkzBPHSMyjKsx94MPA3PcxRi93BiGqVQtfh",
  "key19": "4y8raZsFGLscTqLRugFk8YPRpVuZz8EtySszLtnULmUqsxcRsDLsmJYe2druihWG5CgA8X8J42ahdkaWvZte97Z3",
  "key20": "4GJdrXBW5wuaSMeUY9sKedX3x9nyhiaefLf6tr4wsFQ3XJCwHDYK3fdBUGknwGWt8UgVu4bxYHL7iJqMnUpHc8xc",
  "key21": "FushB4LeFzNbyCm3NqeD3iiVeHPSzKADbKWn6CL4t8nNGeYAx9iWWBNEsWonG2Xv39pUSoqc2XJEGThZ2Ac75Tv",
  "key22": "5aXJye9jF8SQWthtEw9hRnUtTt5zMZocxtY9Ek4NCEB86KRMm45pE6WL8xUwJtpc7AxvaVYa7xHx69q77dM5t8Z6",
  "key23": "3PgDhRybncLBrXs9tYX2a2rVbD3HjMU8tE4u7aM9kox5uqHgB4yAa7HAn2jvRkbrVukS1pFEpQKQY1BaVR4EiYJx",
  "key24": "5UvxoTZv1cLhrXQosmkK7ry4SEzvy5eEzJh2c4M745xAL6AA58W3Xpp23q2jftVXdBLVcePe4d2RfTxbfChfAf5P",
  "key25": "3Vx6L656Dnxy4xxxfqvEEGRVSmaYDGv6Jnjifb9eGSMfA4h9FdoE2UgEpxNGFR9P519hU62gAmmZYEtJGzQLo2EW",
  "key26": "5znaBZoauq2zagD4qQmiRSJhSXacvoofnMqxQC5vw4hpQR2K7yBzd38CLs76LTA2ATzWgrazu4imzMoMaLaQG2jS",
  "key27": "21Ar5R5QLxjiGkDNKaERca78fnEjEE1tPiKYoGdkvFC6aPNijXcN6Z1jDEwAa9saFU1MhtML4K9yBF6GRETARr5t",
  "key28": "5tmCcgxkhYhAdCHmW8VNNyu7HYmfv5eTpE71SfQ9yt8Mf5GbVj5nbkecHHHfyrNLpXJxb1N3de6no1ig2izpMGjh",
  "key29": "4d7JhupNSbbc4pxPzVmj5fdikXB5ioEzk9A4ChrqvtfETGxFxpm8NZQ924UCrSwibFf7bpyJSHYfYfQxbWzWn4hW",
  "key30": "5FcRAie2BRryzqS2CgxLy5RX78L6AJNBiiWQHsu6JUJxJq4usXiZzXs2hicL78VSfihPqiX5sAsLJR4j2tK4swWo",
  "key31": "2YrimciDRvKEntQW81pWYd16xGHK2gBF2QpfL5rVikds79CrUfmx5Pz7ZgR1rNxfcCUpGtarRtji57hxtHMyAnog",
  "key32": "2xPUjmB3WN9BuiNhUcptrSAZV536uXBpPTpvJV5uGYZntb7kprHXb9HRreB2rvQM1nHjpyVtqxbuH3aa7p7GYZiM",
  "key33": "3qgwExsoHD6eVrRx4axG1tyJqnSRRheYWE2g57brjxG2UPG62sKNr726eD9w4tr4USMsp8CCZggCZEHUpQSn3RT2",
  "key34": "43UBcnDvB469yhHECtacvuUGeV7pzRm23aD51uZLtpRZd8LuR2U3fxpauf8gNvV6S3u7rwHBbuwrg1NJLLv62Jpa",
  "key35": "2E3h1naWF3vfpGrPzGERd9MDUws36x3aKkGGUAjnxC4cRGSGadZ5P86pWFtBt2zzgmL1wfSePiYhev8tgCyVKUxP",
  "key36": "4JKPnLy5aJCBBZ8BYYDoQAacBgDL35NwhAY2fZhJTjswW21hHqtzC6qC9ZF7s7pjymB78LDhPvC54TgDQnv2ypWR",
  "key37": "2fejfqNtJV3Tk4jHsLUK1TJRSQwkn5469M7sVDVaEpJ58mjSiZtPm2vXMd8Wweq47nQRpFAXg2mjZDAhjpih1P8b",
  "key38": "3ZGL9WF6wWUiNu4p9qszS7pwbrJbL2pffSrfxmx3bZvgqqvhJ3wDgJX7eWUQdsQ1HYs8bJceeLNicXwc9AdCQRAj",
  "key39": "2AcGqoEYX3JVU3Et1RHVFA2mQaCcQo8gtEYZMgHnAzXLBqbHrzPGTwutbnN5FxMpH2yE7Jm3ibNFC9EXFmAs9cpg",
  "key40": "493WyHvenTQq3wS9vvBBX9xrug78gEsL7U5A1jWd6rArwzHszSX11r2YQGz2bpDNDotHmYr9urxTkDEj6dwPScck",
  "key41": "5sqmDtu7Pwrwm1VWQBq4W1eGZhjJXn3VST8gJpDf2PEwY4siSxqsiPQm32ELyrZP1rG5MVZaLDyaYEqeYaPdzz8N",
  "key42": "bUHeJfyoq2N8swxbJgf4pJDRu63rnmHeJvwEVGYwVMGhKnvBETWoTVz5XAhvfxGD6JudxFQHQeAHPEr7BeUQZj8",
  "key43": "47CLGnStR695wLN3PjRKHncgSYoBSkHj9VUHwfUyC3ZDn8EWTVmbvUjVGY5Ew7Ka8aLzZhsUFqMXhLsWTg5nH7S5",
  "key44": "3Yeo9LbFDHKg5LfkcYwLQRVZA8rUBN1SwPeJuJuNoHnvBvFjqHUbgRqxTUnjBh1e5Ja5eJ1ixgbAChEfGquTQuda",
  "key45": "5rg3jWrdGhgS5YU2L2KG5JtrW4tKkosAQHnkGG7PTTc9t6S5SqMwP2AwnXcPYUsgmpPHQPv3REKRnTszdGJD7CLX",
  "key46": "5n6XCa7AL8YLmxrbbWgcHL6EvfBHeEHjTtQuMqQyYiwTLSPiwizin2xU6crXZy6VjACsCVeM4XLMmhMeEXT7igzv",
  "key47": "88t7vNxc3NDyGdNpdRHjTQZ9qEiByLB5QRwVzbjAeDwRTCgJXusfEbtZcxzQrMgSmHtX9PQNiZYLmRE8MUcYqj2"
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
