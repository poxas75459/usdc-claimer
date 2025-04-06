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
    "zMuCEsCiV7njPoZ8fhAZGX2ZASTSx4EPpcz2KjeZCw89bnHyC379TzmaXRm4ZJhEUrQizJ4s8axcySBVHNrXuGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3raxbRRzULfJcEFCggaX2NZqjK5WCEKTog4Db75TX7scxUD3Cg31bL8bFAmSKrb2QJDBh42p25NXbuWbrmAiPJ2p",
  "key1": "4s7vhD24omfWpNJQpaTF7KQcU1vK54LoFqC5SKBopHj9ndLBDZv2tSadtGrhk5yX3fFSFR8aQWGYZHzTbn1yJqv3",
  "key2": "adz6AYT3vVJyJWiis817uhXDMz1PgCgYdeNVaocfx9JMDcjJpgNBYVmPDwWaDx9zs2JarcoRTFZ5zzT5Jr7nRqA",
  "key3": "3JVqnUGLaxaFYSm2bHzgoCWV5uXjQwRPS61KNkDA5CST6eTe83HDVX5d3C7Gg67ss4Kh8DNotj29BLWAvrGhx9Lx",
  "key4": "5r9KPDhoYjDHY8ai4SiqRNSgLUKTWzRLj82Xv1fTZSbzh6z8YidaNktSNkafnMvew7dd3wfaDjprQ4JWLrUrsmz7",
  "key5": "3DcBDfSg784jG2BvA5BYmDCUdYwG6wo2X8jkt87w7zgN5vyfDMw1QMwpC7ddBsGq3zWhiR3XKTF3txqr7FgWmAqg",
  "key6": "XfjNHnAbaToahMnu9io25dHDCXgbiK8HuPhggxfqhy8g2KWKLevHA9QcdKt5ARCFKBC8gyd8sG8xMMybCA6gasb",
  "key7": "5GVdN1tWndsHqHhe95zTEKgB7WatMfvnzrchALMuBuF4zRocmTjnA54oHEVFBPrgvLfa1t8xKSSBJes8PAFCKUaq",
  "key8": "5ociwiiPgH5JuEmgChdkMjQLjvC8umEofG51a3nDCi6QcAFwh7fjr97ctK6usYswWS9gmSQD1y7mhbkVNKym2iHC",
  "key9": "5bRjtm6W8KatH5PW22vfzgXKDvjkZunzif285NtCnLQqrN4j4nfzUacmDrKQU8qakQKS6Kqk8rJJxG9WHD6WKPMJ",
  "key10": "3M2mw8C8tVGKxr1WBc8FtDZq64pxz1UjssS7iNqf5fCW7MaNRegegiS5V1DTBaRdMhAtFwLQkdYDWcyBtEqn9WH",
  "key11": "3e7uLadwz5VD7a97Mna9cnx8LCc7rTjCh3nq3Yd1s6qu7feovHCPv6MUNSYFMbkzzpynCTHvmk4pnzA4iARvJsrE",
  "key12": "48FEkrYtdSLCBYfAE8LZb93teBvsSpDbbLqYLFqrrJXz8QLJPCbkvnt8YYDCJzbgPcZm9wQbefJZ6mfBoa4AVMEp",
  "key13": "4Skhth7YzuqQeQQ221KqCAndEGak9bQAB9iVNbtQbMD6tfVh82VE9kiGvn2LWqfJJ4GjX7uYVQZXmmho3vJ4tGpe",
  "key14": "DYU9G2kkFFaoY282NFaGUmcjgQhEGnhWGt2JGUqhqmU6CSSCLXNd7YHSxcn2WhqyVapsznSrgEWD4FFfb38ZvXZ",
  "key15": "37F1NyUg7SBnhJRLm8U4p1pUVXYA8cwrGZYyad5Wu5CY5pJHmFDUjCrru3JqWA7wvjCAM2yNPhbLuXLf2JkjsfZC",
  "key16": "5p3oTtUU2M64VGxRDLkRjQuHsAnzqk355bymMGmn677Kzksw1BTPCxqsU9R6bPuYU1o6ir3n7FexjnTvxnr1zipA",
  "key17": "55eBVNdQdga4vtwzsqN6HdY6oTBcifuGvd5yZhZd9MZCKXAKSnjZdouPUWcsL8gtigTCqrv6vQqUZVHXUHvWVrxq",
  "key18": "2gR2vWw339mbAXGzGtos8TmtvjmiCAjm93Q6vwUKkhMbSUKnsKy1x9ibHAEv8Ar14TrQvBW1fEfX4bnWgpkUNRN6",
  "key19": "4wXVRG98xU12mmTGBc1rcM4nyfMUzzSA4GLLaNBgdtRpYiZNEWmgitkbp3AVo9KfbfXzp1rGsbbxDasMwFDp72Sf",
  "key20": "4CvKPoYah4hj77Mts56khfdYiV3USRcUCBTVezhEdMY5MQ7jJ4jHWo2FWb3XNacxHb4VHXp5hZ3iLv3cPxLhStRC",
  "key21": "3u72rmi6aJ49HGbtviyMHJFQXg1k58pcHHZW6SvtfJLhUuzGRhnKrhBvRznubVdemp7XjdGNBCUNSsQXEuzRzp6M",
  "key22": "33FejVdTa96kKHxHB1wVMQaNsxgnwxemJWAXoPknBHKiYBmZzx4SHiVZX196jBKKRmAzbh9kBXBf3YkoLMZQFSup",
  "key23": "CzhyDyWk54e767auJ4qQ29rzwHWgqwNrWGWCGNJeo5UYFuKVgB1H6Z5uyovSr4Vy7mJK5w1L86YKAgdav4rGV8u",
  "key24": "3zuRE8eyrtrFnFgoGwL516cikcTukpABk2r8vudxSsMfX5y6NsPKhjrR1BbPn5SzREAcuTBXLYE5aXwdZdQqtyVh",
  "key25": "5ffazKCwaJ4qgKHdqZGzbQjs1RYjbQ7KAGsbh3S1b8Lv4uLZZSkvAeR1Sb6KdcR3TJaSHNsQCd7YzVYRMXvohP2S",
  "key26": "53xbSYufZL5DTa8Ni3UpfFr7TXtrdAoPhMnrZKbez6v3A4Kdnh4dfZTmSEyvqrWBY7awJVjKjT2gzKUmAgB5fBKa",
  "key27": "3UraKicJxKCWvmNbEcwN8V5ext8hKhz2yWfCQYV57QZrGcS1XoCW5JVT6vHS9ZFnrmUF7dx6BtzmLKKUfzTXtqXZ",
  "key28": "46ydBEzaxUFxRk81TuC3tj8pgWhGDjbrZQQ6dyz5E9Wb2Gh4zffTN8HWur3VoAUQnNkNDrpFqGDrcgmKUvw4YQVv",
  "key29": "BuHyqLr3HNJjqAqV3xLWy4CJqYYzoa9QQLqZEdT1sSQW1ds1wuXH3gADxFwdDEznoBsM9rnKo4nbdqD8Gocia8v",
  "key30": "5zKcV8zNsQvM1np3EKGpMeQZT2UvPkjeoJbUz1XUsttSFnAgZ5ydbPJkYPJ8RFYKpWKdPvA7QL5PMTixRPd941U2",
  "key31": "3CnuTFbaBRZX1TZ7PJHhMBX9UxJh3h8KBuz7jewWkeYuTMG86A3NtVv1xum5PVdFexuTYPgaeShFpYLBQur9KDRY",
  "key32": "2iz8jMASCxr4b7H6qY6aa8DGGQfTN1qpVZPTK5SwRy7inr4gZfPp1zM556bXEWQ9ZCDpZeNquvCC45G96jpSKWs4",
  "key33": "riNBHHjPoVLuJcUzGvWFWpfRy6FfGZikExQdDvNGJ4qeneyQJiQutxcKUPruEsb7yuPyhqpqSzm1h2v5ZWkHn7v",
  "key34": "5akYbBDm95euzStFoNs23ysSLNUo5DUHj922xgvB8VX2JZGWB5n6beRcofiPHeaxAMaZbGfURsaBMwNSafQW7V1C",
  "key35": "36nfHbEvLnRJPc6muyu32pF7APJko8ESEym5Mw82hvNSWN6ktfN7gR5ugUhrRz8Ddwg7jcHii1UxsWESx1fRdbFN",
  "key36": "3dhkNNihi1zARgVdrKXJnYmpXfV3XydhuJtswWjxTtsyWT4kYetLgKQctj8fGT2Bcvtb2oRX5zEJ2kEpdHzY2Rzh",
  "key37": "36RgHvDiZSs7bq72gjqAcpcToAwHhzhDr5a2NeFCPe3CsQd2Zp6QKVeWKLmBNTkgKwAGL7DP4jk39gSxUbHaRh7U",
  "key38": "51nRqzhpV48wfezovj5vW6q4pUH14b827EeMHtSi38TpGFtuD4HuFXhFyomHVXcRLGAJkQBrbnj4NiUKtR7yMrkH",
  "key39": "55tCHKf9wARgzvq8mPaVf3p4BAM5QMQwwnMWvGp5fCPv8N25BmshLo6ZYv8bmZQUFSto5zpcFNPsit9JZ3bvQsvG",
  "key40": "66SeB2UM6teCMNWoPkRgHpc9nsv6qMyKLNBNB3WYzP9Nik8FwBi81mjUaV6QrY35PdHadnQZ5PrMzmCV3dRTLhyY",
  "key41": "ECTnoFQh6nDzHkaE2QQCCkhnNSFexnDCfHS8QJNC94aGXfqwSagwyDnjq4Qua4WivE241aA4wuVnwxb2QPzp7pT",
  "key42": "58DTXBcbSY513vjabyUC9eTHVsfaWurKMnZSAdvychgWAYf8vkud5qdfzCiJ1ZH846ewzwzsGZkvj6sxBRLCkEFc",
  "key43": "3KdtvFmLSBUrzZufhCqoZo56wpyhjMiHH2ge8MofaBDt272s9g9kS7jesF1KT19zfsMxihxCpudqCAToAv7cs3NZ",
  "key44": "51TKznK8FUwh8gSE6QQeN3QPkwHoNKin6ucYgD9aa8wwLugMqz8hwKCYc6RPnQgK92xgjyf8GxV33qxMrZkgNoPd",
  "key45": "5Lb5uK48FvysHpez1J6nFVSr1PnFqzra7LDi9wwGbBhXGZY4KgE9iA6z1Ys89BxNTNjMqYXKJpuNzB18eEMCsEUU",
  "key46": "64zPUY4PzgXbHE3jP1sq1XvkBNHurY79J1mJNp9VjmRm7NsRYFCbiRKB9nib8aPChavvytKMPa1zycRVSnmbmdNJ",
  "key47": "pC6M4WrLCW6AoQbCqYRYih17RtD4Qfk93DXdh4mgq8vwWayuWD6v7PCB8YBSzMZNpN2wE9R3fbPkDHpeGMRxTu5"
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
