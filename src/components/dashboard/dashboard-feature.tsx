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
    "32ASCa8DBKdt4PKM1F1JRyBkFTamJpDT5pDWZccFPGEKaMPLCPJUBoxUUvJQeSedBWr7H3p6QXbAktFwJjVRa9yT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RUr1nc8tXihb2ZsfHXAMHV4ka3xi78fepBZpcPTb1YkPLYKkqxZ8ZUP4Yeaq8bUCRmNDiDqiBt6D526TtQgsXJd",
  "key1": "5L31nZixtf842x7avRPxnJ1qZbiwZWibmT7hnqEAkcMMW1PUSyV9UxC9dQZdZahKEZ9hWXc7XReZgSBYSyDjg8AU",
  "key2": "4KNcF7H8TDVhVxY9ckYNxicecgPb5JAWEpr1wSAJMLjskxVowC42a3RR681iVY9Dkhvk8qCTAJ3eWJ8FG8j6w9sk",
  "key3": "4ivsh81LDdYSuF5kRNx82G2rYLybZcV1cw3qdTbiw52GakfsNVHscBjkiHAodhCdtjkFYfdBy9DCiMEkMAMaUpNK",
  "key4": "4KHdNoKBFKWd2KDgGB8LH6NgtzrtxmV6xVxrhw3EbHXJUAQEz6F9saH9NPKEJeipHh31n24w3svey4GDTfTXjsAS",
  "key5": "4ZVvKCF5dvMnRtXpcFSgB1HLuuZMQTFLkeDavJGuVFnXf1n13mGm35e1294kbLABiHTMLyoRpcopnEjzV8zyFckR",
  "key6": "a9y5dFa2nBxxcq2ddGvHkZxsxbJVxCgJ2LHZqD8Ei1YvCUA52N5qnANqRxwYbzUZdhST2roFnjmv2fFxCevfp5p",
  "key7": "cNu9Nj2Co6Mg35kSDGk8gtscqem1QfGGFmoozEU1oKD4TnU42WLCoe2qw1eyPK9USTcmNaPUg7UNLmHKMUZxp86",
  "key8": "2LUbDD4enNgUyeFv1wTxTv8yMDZZJVPPLrUdGCbi8hdQtGM5rW2BryzFhqPLxQcpWwFU7yFkb5bDKbUV1CQsfwvv",
  "key9": "3MHi6sYeTMm7WKAeMFwLTVWRXVNKuekmBALe36qQmCjMiQXB78CijtMRyHKhaibU3XJCBuQP3KERXPZHXyFheHVt",
  "key10": "2vgUpoAqeqnmtyq2GRby4ZgUBckt4Q2nAbhM6YH1FCcmkVZYfiCNSwxT54rvjtN6WVdyxsD17Kc9wKdcZcPU4eka",
  "key11": "aRnR3T7i4HHmddGeU3FtxTP2TjN4Biqhug67C4NmUteuyu5YtcqdhLMaCmgBnbZ4jfnEymAMfjZSvuVGi1JR2rk",
  "key12": "5fAZnCEq2HFnXqawdFfFbzcxqFZKTfvnonKFCW83jAuJmGt7uWqAkcoG2EPZf3bAJXeEkSoUyMqG9QdNhXVHNYxQ",
  "key13": "gN5nd2DMD9sTCrJrxEoU2q6CQWwZt3v4q88qMsUz5fm29FwHfg6fqTnpjBJ46WuNgjbVfqGqHJakEZKxk6tw7TP",
  "key14": "2xYJVkGxbr2PSp3tQF95gxAY5K7b6TKf6ShRcsLQKzwgYqaKTottWGDBQAV394eSEgiASvAp5LM49pF2WJrFzjYa",
  "key15": "2Gd6RJdnrJdX7ejEqCqn4Ru4hnNWWbC6X4YiZdzCogpN823GAbbh8SE7XG19nwMCBYzLf9Szzcxuj7HEJEn8grCj",
  "key16": "522EdgPb96kbuS3dFdZ6ZTtikR3HQy1z5UTRWNK3hYCfH9hfoTSWL9UgLkWv1F23sHzumq8w77wxLuxASC1G3U8J",
  "key17": "4MD6NuDerUdBoxY9AfnRbZWSBc4X5vyKnroHWfJgvvh3eJ7YmeftXMKsEdQ2wzytAiuT1P8GtKitJ4JiGS3ffBa",
  "key18": "3yg76ciqiA7ChLaf9xg6sptGFdwTpK7xqm4ZBqoeEWtqJJSaJTgNPPZi2ZhzDA5JVAc4EMhe71YvC9yQZSuC2227",
  "key19": "39vaxzMdKRDVLYVyifqDqUpyu38eZTj8qehd8skWPFN4ncymtuerXjpMsi2nGh7zDM68Z2f4KFH9N6T8XNGA7r3G",
  "key20": "2AmVQa3JsbdDMyW9KgNMFYGx12uh73LaC88mgb6KfdJhzFt6oM6xJtLVAKd7t88YvYPpkcpBR2MADoq86XhjsW4G",
  "key21": "5y8p3kvzmQSucPocxm6HBhzh5vKHpanugPrmJZDUR2qzqaAbXs3zxPUPqn1HRTUAgC1qSNcja9krGunyEsFTmYCL",
  "key22": "3UxixwVdGVKsn3F8ci1Tx1R99SDnDyHzugNNwWbhHza7Fs6DGRSbwrZkZSPSWdbkBY9gxm55diEVU2ov44KvNajW",
  "key23": "58ZwqAYk5gksoFKvPyk8DfnBL2stoSN4huzBct5QTqM93SjsyrCQtCrFd5UrWQibXGmsgz2aiswfYNST9EVS39ej",
  "key24": "3H2LLdjBCMNB3w8wWFeZMoukq5CmsfNtzWbgfdZ2vkm3kjHoYaGFSZkMWfniYKBftwwYRi38bV6dmLpseNdZqnyT",
  "key25": "2xNrzEJkmYXv7RwDf9gMgFPQyx3Vh28ZcW9muZwBHH69ptqa2N2ztddHtqrHYvGs14CoGwJ6PopqaWZG7ew2peC2",
  "key26": "NipwaqKTybefzdebeVW8jtKfLR9ZnTV9y6AxZh5KTiH61a3kzh4xt3qPmLLhKBiWmN7YxTPeXcJqZSjhLLBZC69",
  "key27": "5W15GVTgrUxpRUPDazvXVLowXo21ZkvANHcxVwxnmtaT1RvnBHbbdXtkd2TaY5B1XSSvz367ELujcgsguhcVKitv",
  "key28": "4FcGTNdSrWxzzRPrgHFTWP5j9WWaKTncBBqnmNJY2XzNmb6k93u1sQJuep7rukheRqpaeV75eU2M2vHvSsovLEc7",
  "key29": "56V2pdqfubPSyZMwjNLnTapn18dHnjvmpvaQ1mXRxAxghY5QzxUbatX9583SyWsbT8RJfHhF1CF1sqTLVtcnqRJd",
  "key30": "4t2vBywCoo3xhRmDpNMyY7df1ATp8hWG5kaFDj7ZjkgiDhcFSBxwHBk4TZJoNFo2H4wD1Aifsh8xzMZ11bfcu2V1",
  "key31": "5FmhgjE7evbM157pSLwb9CWzSC66AQYvXfDJ91bf6UutHTAXkkdZg7X62QqZHBkHPqoNgEzMeMdA6jyxg6nWz2n3",
  "key32": "3rY445ArzGeZm5EXrWaZtMMcnaBkcw64Mw6uqLBfBjcgoefYqyBnCKADo4dAs6Kw4L3WHzmW8ytK9k8pcJb7kSGN",
  "key33": "4JjF7YmpW89r2Q4agXQjNaNAncJh7MU37neUU748ba5ZM7ZQHhqSPrPh9owDnnrJAPq2Y1H9Rrmk7H6JwWpfR7qN",
  "key34": "2cpXpCc328s56329tjBSfKXtdhBhRi93dHA4STCrdpshuZmKtAaJbz4dot6jX1xKT7r7BNcziU1aNcdbTvDvjdii",
  "key35": "4EJDv4jhZmFEwjVxNYyGvtcFV849HJ4WH7ZesbXqJn4fGLa3HYEpbTPX8nBJjLfPo4voeHeC2PysLy7bUP6mZfxC",
  "key36": "49vpWnx5kngDip88BvrA929BDEUVQ12TcJBYqtZABWBzWETymYR8cbuf1tCcGjVMv2XM48BXwDstxQTC2oUKy7Z7",
  "key37": "2grcuNqMFfgceTsNiZF8MPqeVSdjKiZTP5ssfrT55CgRchrcQhHC3ktpyHf4Ft2t5EvhtGLT6hW4A1gUo55BYcpL",
  "key38": "5XwMJiD2GBfdAun8idcVxCCtQoRQrYtwDh3wGuYCMCrmmWcnLnEjPRkNNQAjf5kN6KFY2gT7wmfzYbx952Hff114",
  "key39": "tRmHRXdrPgvFNzxNaVuukrQkD3LV3nc85gHa93nhmhjwYxPYKrT9zpUCk8ZBvgQhcWvWaJYoaWYyurSN3MsyNSP",
  "key40": "PLBrvJ8dU6DAff8ocrJQ1AxcaUpPdogF1b6vEwNmVFLziPvEQsLM9BYXn8zA2jpfMPp3SkCQupX5TzPAmDMZtLD",
  "key41": "2rDcMK1m4affj83ge3KZ34Uk88mKCpFQpgdU3gGzTQUoMAmurT2JccQUzr2uzfDJHS3BJqHAXjpLJ8RK79UGSEeV",
  "key42": "M6pSUeAkHZcK5NCwTdVHuWDYF1dX7a5LRFcuL8xnncaoSczEkmXshHKr9rd81F2qY9RxYRDCvfeyae5nsGre2xz",
  "key43": "2qQKzfe66iuvcX3F4Z21PQ6sNjq1wEp17Apy963xsUE9WRYLUPxYA6QVdVUt5f9agf2iHoXqf67Thx9hwSkG7dnS",
  "key44": "3GCw7cb1iRgGDT9y8bc4qurUcohzqi2VrAiD6WYfk6mUWZw1SEhvnT9XEuyKduk11s99LFrztSFWLfbY84yjhCVc",
  "key45": "U6uEqq5Mm3QXVBKFQXoVEhsR23Krvt3yPdvRL54kYHbu8QdUFd9Fs4vHaMGQb51Dc1U9F9YNr3pJaQSb33yUmxT",
  "key46": "VNC3SuEh9853kE5RqZphq4A2pRMRP7qvxAhG3axBRaYttdoSpx2XcqtK862g9USbpWs8t3Ja24XRJvJujNqJT2g",
  "key47": "XvF3T8ds163o1vCKgAcJo8A1YmW4pexL5GkPMEXqcv4FNrDnBtP5ZgErV8DzBNn1DqnwcQqpEjEsJh75nMbXTk6",
  "key48": "HFRqjmEtj1VYiLuY8PxryjDouunQCCY17RnHjkkCFW4672cYw4ZT4D7LygBbeU8y7QjJkr21advB2Gq3CoBcBKA",
  "key49": "5ojR2kFhpKeVnF8cntXDrFFjARZz25zNvoYvSq2mW3TaiM298X24sJvECgWHCK4b9w9ynMGFWw51xXzJS1eQxpgu"
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
