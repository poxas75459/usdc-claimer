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
    "2921MbEUbeYEt8xQriGn9t5EToiXvNT9RBfG4r8h3PjLQFz4QNSveEL9BVadbKff2bCVwRToChYitwLamykoxzgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ah8URXdzgFMHfKpJvLqiJMG8biS25pujgrE152JGgr3v68xtfmMhoKRPncjkMQpvcF3sbsJ3nCRQwcdoLFrUxVA",
  "key1": "2eSeRCq54b3tRGGkaBCRTQKN5uc44VZDGX8Vfzh53VAiXAtEsktu64pnBfMdBZktAaDiSDdVtbb8TMwBTahw7at8",
  "key2": "2FFxBCXbxXKJ6enNAtYZPRrPhHpTpWSrMMpghKrKXxVhayMES6npof6oBtnaL4cWC52nR9VxrNu7QRoADoQ4xuAk",
  "key3": "2mVBDCk1dqWCXdnNLFN5j61bxVoAdzHgXgrKXfpQPstiasA5WdEMnSYbNUQrSLBKLPpt8hz7oTT2UWn1jeLyKM5K",
  "key4": "V4YVvXWRwjG13pYRpgXYZ8Lr3GzQoTXYWhqhuWDaM77eMJK8a5Hyc8T9m9pKdacwsLYcq2g3qZBgX5W26e3kU8i",
  "key5": "4yyRhnGLqzN7qkDXXA6X9hiT8PPRrdwQncaS32X4rStzvUaJFenvJ31fJLNRf8ce1gmSmz45yboeEoQJRiLYwb4n",
  "key6": "26j53nMxEQg3EZU2zXN8iautiLdycXNwqJrPGsAqpUdvVLcf3hThXPHSguZN9UEscvafmTu2hvz4SSD9Zzsrh1LZ",
  "key7": "2qBK31VyeZA6RDPKCL618WdMfwU5DEu26AirnYpEoTYhJAcwLbbeye2Zk5MmBzXQU2Htymf3GBtWaqoMdSosL4gm",
  "key8": "5A2xSYipZ5Ei61krKv6QZZe6Vm95HBMA9FjNxg4tM1rHe5qn5jvkZL9ZEpTjVNaLztVWYLmmET7hNTP6frsrukY5",
  "key9": "3YrbEBzM2XAwBHEYJ8vEftZXZV9WtAZ12JTxAvY1k46Rd7Mgt7Gx4Z8SDfjabfNXfrkFkkZjShe2QWmNQm3QRh1j",
  "key10": "4wT5e4fQ2ALRRVDuMJ3iodyZnMUDCX19JoicKRQQrgkC1t8m27HBszKBpuRbMtx6DwMeoUcQfRQMTRop254VWXBb",
  "key11": "VX7DKoo4kiSQnJwL1JN3b1DjGdgKcwF3U52JQxqKpjKy5KLcfrGvDuppbo6j9n5hCd7wHz9vU6DcTVSBEcXXryb",
  "key12": "jFmhgCzHfCg7S5TNkKGgugUj4zV2sriT6LueEH2rU46UTondZWFQ2enWSxomBobWJuD6Ta7eWrxEYwAqNSXyX38",
  "key13": "5uHGfDt4sScV13er6DAz99QmRqBZX4M5LMpDKF1BaxFTFrd6ZQKpLbYUf2wgCKUu5UKCDcVULUXmbVLSDVT3FJva",
  "key14": "42UNUZ7GUXw9FVWdtChY1HktYLzPmYaZLbNHLhj1TEc6SqUXeJLsAc1qawJhGeYhkn73AkzbLcEnK4D9sZoZgaJ3",
  "key15": "3EbBguDESSK49FQmCckjhEkyymsXzKgMTC9ybQ85RGk6gpqbEvYdbjkZn9eshZmWtFuhugz6Xq5LpEtGWo3EJPvd",
  "key16": "4xh8KTAfmzzEUV73P5AxVAnTUU78rzGSh18x5DtpqgRyavVULW1jkGSbJNKutc7bD1tLN5V5zz7C8jK9QuSq1dDM",
  "key17": "2Yi245nrqbodavXz9owzG5ZWdCk9cWVtSvQNmQMJpJ6qYgLL1thdK2GQdaYqw3aXU62ue2NiNAoE8KkKnEsHgKQ9",
  "key18": "5DymMCmd1t5dtKyts3syZFRceHES5RoBHXvby6xy19SHKbVDWjxPCwerMeaMEhiGfFR4MFpT1iQ5PC7y1U4b13za",
  "key19": "3fzWqZFaUH3P25iGTf45Z45F4Q7AZaRExf5WoqVuH3qL9ojncjSLxtZC6H5Dtny2hBqtPpPVEb2zAS6z3sKvSF6e",
  "key20": "3Bf49HzUdLMXFh1qM4jds38xFrG2ytHdFHMHhkabZ7hmkQvPWXeHxbNQVPx4gFngMRQqZTNRY7GJypjRNRpEfCLb",
  "key21": "2EMHJU3CinhxyTQBeXroKEgD92oLCq4L6DhxRwegqp95WfVtCYVMshsDbpiEwkpm2Vp8EqqNCt81rRQRbGyyaf49",
  "key22": "4xfLvsa5VaLxsG5saekt1XESPkjZF2Bc8yTR8rku8uXdADFNQv6WXg4RwZc3oVP2bwCexBQNVCFqExvoNnBsVW6z",
  "key23": "4qo9PERkjzy53CUqSUq83ehqyNVkAPvsyc9bhkfihBMo4xJvagvNSPwDJFPj78883tUF155EkdPDykWLmn9UUAtt",
  "key24": "wf1NroBMstVFwaSxBdCH7Js6zgJzTWe3S5PUnoXyxCutNpstx6cW5ev957JiDLu5phoTv9sMM2RZa2Y6dFRehyu",
  "key25": "5DguxiMASUJzGcHMtFjRb2rsSwGxTMm5eKhfPUyfgr7UzX7ibEj69rFMaaP9NEGyRmNmDptk3NZVESUo5t2TxrQr",
  "key26": "3pSkz3tzi1LBeqpRozmzUUs316xuBkRcwJNEdufJnCR62jpi2L1n1diJSPS32VHxqjrL8JnXQmMKPuq63UaxEr1A",
  "key27": "2Ejd5rTXPAFEQ3vmZQRzcuGgkbcTYBfCjVp7CbrJX7bpmjRsp1wV1gSZEVvwiUhoKnXqrRT85rG2yhiRPzJVCy5s",
  "key28": "4VsvPvhUCkBtEtxPtdmgCnQvD77cS9F9WgQQ8VwCaNSr5r1oZ7tdskK2DujVDovdrxDBj4rzvAsUnrVxiCHMF2kZ",
  "key29": "pM2Cm69jdLMQGQREAHvwaaiqBx1qERya9LnNUeToSgDfcR3J2qBM88pX7kENWrds3CZp3WjnUdGwxo1cWdiEDd2",
  "key30": "3V3nyqdFMbgf8dhMAzLW24QyMgRGiHrxzfCprpxqADzMnbFNsFYZW5SnygEgAz2KyXbz6jzifF4cY2xqBBtzp1ik",
  "key31": "26gRUGCKy4D2MXD6TB8Cf8nAXXk55kHQy15iXyqxzhHheFbuENdo6aUamc9QTV26V5qj9XsxTVMdStvdj9RXnikA",
  "key32": "3wxFdQhZy1FKEyDZNoicXznc314MEAudnw24BZdyiFKscZtxXJw9UwjaarDJn4mxkm3SKvigcTUmJUgriVtFJJHu",
  "key33": "R6Exnb9azxWiE1v4Lt2JZwHw8nFaujBqV61xdMmL6r8gFoCAxCfaT1exhGKVHEBAhQo7okzaZhNwbfpCUAN67Dk",
  "key34": "5eLDQh1TFuz85i3ZzvJUaE7gUFro8RdWY9r9LVEgsF7bMi9HUzugd44HtUXTpEk9VAXxqDRm13r1FMw8j21KBXTs",
  "key35": "3EEm4Ueu9xydmjhosYJDgDA9nc877L7hX4inZrU2eX2dyGeLmYmq3yQqWQ82uaAH1ohohFTuxPN4NZLkVNtj8tmA",
  "key36": "6CcGEufZz6TpnpnY3iSwYyFLkdmXVx5mXW5Bo5cmyKSrg63Yecd3amUGkXf4PFxTj9gFwCg2mbdMqUGDXPvWdN2",
  "key37": "2wAivcH3i24wcLuF5eDSLRDKP6i32ZmvKKQTV6dLFzRthhUNzxoTxGvMkFN8EL6PWQD8tcBXfJaB5cqc7tNHkedm",
  "key38": "2BHZvXgR4Udqs67Y4MGRgoARUEwgMYVudytwd5nsnfXCSTk5xnKRLwv2c7FhPD8o2uRU48E73cuQCDQxvyr5CcL4",
  "key39": "3rTjvVANemSNUzRvgWM4ZvZgi4XdUmDm2ptU2gMKT6gMMJndQRbyBeFecVZ6uw9t7ddQbWkxiNefbWeRmCJdGQUL",
  "key40": "3EmgnmuDbt5nkFt1GnvB5DZJGeacFMxGtkZWobPifSXqyx7yfjat1StL7JXQehY8GjCUrY22t68XXR7QavwiiVNN",
  "key41": "4fS9NBKy9neiZo8rXrq6HFvRn9afHSXqMGCP98bFnxuXRnnMvnkdiq44gX7JA6S2ta7Y4ZZwBFY2cFJ89Y57P1fs",
  "key42": "64cu4FjqwLUKQc5LQ8Rtjwqco3GCkpXduKezcpRXQwGwQjaULRATyBtxefgjf8SpNEosM2JHRCXPgaHFdQJM5uDk",
  "key43": "5ot4vuUjAF1dngBVYGW2kkpVHB6wLRTLZAVxsV3zd1nSEqdCFbGapbxWYxHV8J4L7qKCmAxrW7VgaoqVDVmEzLrf",
  "key44": "3A7a9cc2nq78AyUZF2sqa3G7BUCn3ZoHtX3JaCTooMzijx45F1ap1evsJCiPQA58t1Kim8j3bQBugNMctpmssFLW",
  "key45": "4ihZg6ZwkPYoy9ad3B7cqLQbjeVv5UAocw5aWXo3v71JdCDpRZ52NnRvWABijhrRDjbrcHdokmJppTKvPiQhXrJs",
  "key46": "sFvS2AMxVNYBoXzT41m46nxzSmbQ3bs6Zg6rRGyj8SXbZuCXBJpyD5fsMctoqpRqhdGmRPxPhL4gsmEAgFwTQea"
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
