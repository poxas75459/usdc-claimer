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
    "64YynNYWenEvypvg19mEA8RUgufFTuGLEURGXtVzWnKwyB5ddctThXqGK3SSj5cfphEgm1BUkM5RxBGhNCE8BU8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UHwTyotH2tiy7seQuPFKQ6LQENXeN8DWy4bFBpCxPfTMd6w5FByi3nntPax2hW1UNev28iLxsT4dpGyQPC8zf5Y",
  "key1": "2oYTq1hyExxmyv4D3e8qUBwcsN1bPCFoDECy9GD1oDWJtKv5nHkbchvKDbdmns7psmCyaSEuc9ezBafbHday5vYY",
  "key2": "5CsxYz6dScwbjFranYxgbbMEPWavo5VYiwRrBdTGdmwGffdkgwXUNi2nqR2Bp4QerVWrTuq9uwi8TM9cCGM1tEtM",
  "key3": "zaj6GwqYPWTk5fwE6tT2P5YYCEky3QbZEVDcZ6FyDF9JzobhZFkSyAruke4SYge9q5gshcyLcXSSeUVXshfPPF7",
  "key4": "4F5ExenwRrrYVMFJvLY5LhYBBKtmwUphcQQRp3fesR1CEyhyNdphnrx5AqNp3JrXstgkBzu8CCKdv4i9AgKGuHJc",
  "key5": "32Y4aZQpqc1R6sFUcc6Mxc3grQ47QhvosmeRNMeUa8nYE7Mpz98cEb4kqFWHrq7LaaruHdXZ4tBgEu8wQ6ZaoFV7",
  "key6": "5rDtEv3jixFgXSriiaTHEVFQLA6mHTr4poPvyeNoBrnHH4tiUovuWQX79cd9wpYMnE4aaSwdqnfbLCXBu37xbMD6",
  "key7": "3uG8vJZJqi5KRXf2dNmq1K6tR4SzoPMcyN2KjKiNXZ74AMCQbgC8F6aUed5kdfYiphoHvKvs1iGNnpe9cHmFiVqi",
  "key8": "36KmrGKyKoZ537jjpxBPQYEnciQyTnz2ZtHxGTvDXVt4yU65LprZYkoBDbGT5jYhcGJYnMonEc92V626XjNwU8tV",
  "key9": "2Xkxcj8ruSJyv6waA7RgPPcukwv7YKsGnt3jP4vf2eJRdst32QXQsgJYMn1tZkBNYZDH2kSJoVrdJLfaH6cZd5wq",
  "key10": "3rbosy4ws98vpbd8NmpGqca7mbx1BMpYMU9TKXxtm83esSkG2zTv2RR9M5u77kuVnFcwYhyWeF94hEsMjbdBzjHn",
  "key11": "3FfmNHHhYYs1nCtKtsaEXDdjQE3TmL65dCTrrpdRAvQ1Mj3dFw1wpUrJFJtm958YAa7iYyrRa8TxhhUZ5Qr5DtWt",
  "key12": "3Br11YrRYLcrEzUns3vSQM4gi4jSYQQh9rgp5KykREbESujwDbBzVBRXdi9PcLRcJF88cyUAhhNnhszQCGwL9MQR",
  "key13": "5qXEETcqUHNgGHVd7gj2Bem8fytnCrqkCC2Ur5ZToXoER9yzZSVptsvrVpX8HMHrshVJu8Z7uHRvcf6WQ3vyXUTu",
  "key14": "5gQdDDpKCBnSk4ZU5bLGxfvuoA4cyArAoX8gbM3VXCbr8aomwkQqgh14kmHZuWsf8Jd9QaiUC1ygSjaDSPaxQrgm",
  "key15": "3ecKiKeduLp4VWwt4khSTFAGxTE2Xq1vgawGjDECEPFZATot7ya17DC944PtuTAMRNAETHRZCFmJSQB7cGNF2rLi",
  "key16": "5gHpyg51fdEhXfnCBX8frgs2Q84AKRZYXhwkP4JJ8xiVx2jqY92YaRyDYHZKW3Fp1eo49GiwV8qo2q8DxdTrZQ5h",
  "key17": "mrzhCxS59e6sFLn3ngJJDzmJE2HzPYWKj8HNMWiZZHnVBBmSYPhxxNSFSRrvKybWWGTsSYeybk2K7TN4BqhZTj8",
  "key18": "Pn2T9sc1LV1Xoey92QD5uR7L2tscHEZ8SMVfd2n7UnUXbYbJwMmQGMRhTyHzv4sZ8MEyRvosF5A7RQJEtHhsc7i",
  "key19": "87sqFP72rqnYo8M1wYDehnDUejaTFGVhq9GGt3dxqXsQMR6cBLiSZ3pDq762F9bHADNQ2sVDiRcJHcpSNUtba18",
  "key20": "3TggaUhYyX7iLUCE3g1b7Ahr3MswrTuPXrDB9zwXmLXSejPZvu4iwL4zntWmpMXD5H6eoJVdLp6rVMng7nTuMuWD",
  "key21": "3yLq452UV5hENMMjSh7MKgqtwFy5KVw1tYoaEacUVGUENboXhLPBvExXo3bvfMiJwvpf9KmR5omNzpC93fSGHbod",
  "key22": "3okrqUxqH8zJkymRoNQdBF3dGkGwvNC7PNXHNWQng32iKnitZfPsvJUEjR2vSCUsggKs91VVSRKXi6gapu5iBswm",
  "key23": "39C7xWamMUCMP2viCpRnuzXNtwVESCRxDYeuT8mJsxbhumY6GgCTiKWqyCmXAcnXBWEmXCEeF4eWJvAvdSYT7F5t",
  "key24": "2LNgpW7RxANWv7bmKgHD6e64CT6rkpSFxtdqFGvjXdbEpZRsbXuUWeQJbfVG83S6sk4DifNX4g7dT3sW1rE1PUcZ",
  "key25": "4mM7qABBHWQymDJHdK4jSCX9VfG6TzfHyxQJSh1dehK1YpS2v7NPWGKpGASFBGrdznefByjAhbctbykQ1N3A23es",
  "key26": "2s3HtbaTcY8YEGg5goCE58XZSez6SEYAbRL5p1TYdhNP6DZW7AJdGoksAVbuNQKawGrPM6nrCdGRkJsix9eDxn9C",
  "key27": "3qwcfDLNA4dG3DQYDnU1wCrwxfqZJRiXKxfj9r2bQYnrxHksUN8Przhkd18rxmvzYKiG5KU4URj3SLMGRjXN3Trj",
  "key28": "5w36nYfaKyLKHAwDy6pbSCaVRHeLKLHCMEfRWYs95y8QYKqtHjgQhtLwZeQMgciKkADj1RQzmkB62vnSpyVG98kf",
  "key29": "5rHvCQG8hoZ4YwDfXaMLSqHFs6K65cCeVsAr7v9ZHKP5pZFqL2ehBqusW1B6HsSdSi5XXRruQCHqAVTHP8g2Yaff",
  "key30": "5wYxLdQajFHf5RYs9CCqVKmSjiWeQ9HT81hMNj6oUJYtTEpA2CkPzm5fF3yBYJHzg7outF7YHHU4PaDKxi3WZsPK",
  "key31": "3YwwGpKEer7VgWC85zMgkahSTAi8CFxpMqv7Shnj7KAcJMjrxSbZ75nhDCCTBht4gdKbMMy3WvTXj2Z7rJKxJVdu",
  "key32": "66iDrc1S3CKMugWLJjcWRqrwoUiAVAqtS8FHk95zFoatcUMQwY6BGFnJ7NaxqFEmoykSsKax23y6552H7227a3Ws",
  "key33": "2yejxA8rKyxB5xTePxraD8sfSX2wam85GvDdAHhVzS4L8BQxbm3yBXK9qQ9Pv9MxbBVZjsRiMrVHi2ZH6QffVQLh",
  "key34": "8BSuaUuGah34DC6WxCA5Qt2ixn7FdZoRMST4piEUKuuHfzXSVbi9dtcsCgu1CgeLbKEUjnhmrSP8CoNhpLGLJry",
  "key35": "34qjdsTAfqMBcSWooLfttUfPY1yRv1vDLYDy614D93RPSYS7KM6sBYLkNXbpezHJepRC9Q9RE5vm9YKnaqsTgGNn",
  "key36": "2FA41jbkoN5M9yAEXbHT4sVnxVYa125pJsy2k1kc664nGBTgpsy3vyjhCyUd1qunRHD9X4xrG3kgMhW3WzmMpids",
  "key37": "5aFYKzd5q7ioyFYY1PfdQWVYTxyjyiiqHRhg1Z1b7gyA5fwaUgqDPQ5PcU3uBcHbyuMcerfmp6z76re8TyULt5ww",
  "key38": "5v8woi9UrhsVNh2KJrVuq6ALA9hJCBTbjfNn5THiCUFbQx8sFdggsjtFr7dbByvXB5SzSyFKRhqaRWABFygx6zcg",
  "key39": "4HsWW8VWGCAbdXDFrY7MQnUUGjfqypNer7ibAHYH3M6qt5WqbGpqq1AvhGkmpNhtqBQC1Kop2tZffjNPDi1LG5vq",
  "key40": "2nSFBomA5ekiHFP2bWCqKC5M4NXqKo7uSM7MkavmzTXMyUkY1DJwJJCGSJb5ZCCKrk9fusEmjwdf3LqEt6uh4urD",
  "key41": "4bARNuaE3o9A3SUHr9DpDayi4XeRzbBqD5HVZzmd4RUZi7BJLMvZxDWdHCzbisAysm8cuEq8b6HBMpinGWeD1A1a",
  "key42": "q1uFYWgyV6Fx8aj52rMUeHLLxp8MFs4C4QqrxFRMwAYJVQHsTtYZT1PcyFXBuzFknbRr7ePehJpPXPVtSrtj9P4",
  "key43": "TgZ9cgxVMNRbPN2JM1FvNsgWVifrFxqT5sPPjJbwmMveWnECYDHfZaNC6yedPh2FsWZpBHV3796kvdkpPcR3eGW",
  "key44": "37Ep31y4zvNJjCM2j3dVS5n6xuhEhA5G37G76GagLKeurZveUyCEQdT9nJ9vqXs22gKif8wJnbSbpFePHrvPUsg7",
  "key45": "2fUCvpHsqK9gtpCpP2cFZeLVpd9YD8s2jwhLZoXUPX6fpm6rMe68JGTizGCgtx6nygDhMQedQWVfpku94DnCF4cu",
  "key46": "2aob1DDnYdQXo6Ut66cZzE87BPmRjEv2oD3oWdPeqiKrWgDUqPa25HpP6vGPe34qQLW1h1c4Ao213rREavrg6y9b",
  "key47": "3aJY7cmHhPKS5mGpfDXSrCctLDGta8ZGoRGnQs3ZuvqnwDPkLvbQWpKU4CUyakEgZcYGrA5a24m7LMQcyoWd9Z2T",
  "key48": "5pyRqo6UBuZBY3PxEK7KnTXnwNyVzu5DH54oDjfyBrejQkDZzNWfiikaFPBuD2vpHmb5s1Tps2mh1k666aPQu8Bo"
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
