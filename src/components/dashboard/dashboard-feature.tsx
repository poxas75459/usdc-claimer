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
    "43vU8RCzsbEW5rESwoe4yDkzSbkFYypi2je6wt2iuJ31aDopWbZBGFgNzQ66nEiEoo4JKzgh1uYW5ccvwesLyzBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35rX48PDSNtFKtLBK2GF71ZjjPUU5nwPYprASiDArX49nfYmTpw3jEWpddrWgksosUFVPmqDBYWc4nXzwRDEnnYY",
  "key1": "wTM7FndqKsiJ1vHNbD9D9onCnHGsUipPiPHphwocTG1BHuvmNWfatuaaqhGfJ4krYWQ2jcBUQCZUMuRvEes9DVr",
  "key2": "3gmXRtXDWCQuZgH5rN9Bn3XJ99KounyqK3e3Naq6DFubPEUdmspndJCyVKXzsBu1Vpy6sNwWSso4RPYexe8BJFMw",
  "key3": "2psb1sd8y1YGHkxBkVURVWHaqiW688iTFgoEY7Hg27Jxgsf5Rjin44BKZAZXW5mnceAsXLnJvbP5Hc39dUfLtXJU",
  "key4": "62JiD3ZoxPeDUSzNQr9vEpHby6ox2o4zbKThWzec4CojK3CxNn6fDS8SX4f6DS15nGQAgy99TEb24dDLxrfhDzyk",
  "key5": "5T2gwNv1RMvRsmtZRmJ5ADMz1qWfQEkhZQakCsj9TQJtksJ3Mf2PAxtHfurRT4smR5QEfALXTr8qZzBXRdAuwZxs",
  "key6": "4Pd2FjXr5WbEBYV5E1fvhmQ7YarRZiqSH6P2NcC3uQ3sozgEqCqoxcwU9bf2eNJ5ZJ6YejkzZnMAzs2vLa7eQMk1",
  "key7": "65os6TKWdXQJv5R3jL5UWtHExnGM1rWsXswRTQteUPUjncAyKTAAJXgU2JRtUP5uXsGuzw5w6vJLKDV8QLUhA2Te",
  "key8": "oAVQeHTs2rNApuPu7raT659WzEvmGhgUevmiB2Yy4iDzo1PbLEtsYFbJW1EHnaynR5Q9TcDviTXnxNkyvGrRSVq",
  "key9": "57b8ZwtSai7xEobC1rfhjgYRaxSmWzq83PttjJjBNFvMgZ2U8S65w5wZv1c5ohG946p7yX1ALCestyCKh1dvqU35",
  "key10": "4MSqyJtVTbrYBgF4zLRebW5bBibStvby8Hfh9HcFZp2stYnBW8M59sebmmvi8xatDZghQ5kXbRucAFYuGST64byZ",
  "key11": "5gBDSVyX9D1rGQYWvHT45jN5v3aHtzZ4XkpmQ9Zawj3Fi1AzYSYreajFRbpEn7efekU5yQa8ftB7SKkTw2k3DU7t",
  "key12": "3uKjM7zymjsWXExcyU14RSuzVirzJqhQk7qL2gEtFrw4CLLfBhaMnmppj4vgXba82NLy6Uppqb5G3AWM3zzhe7KM",
  "key13": "fsYCRMFqaFAuV7DFGd6ATGDY9MQ4BCqCwGpMEtBnbF6PizQbm1yTs53TMv3zvXyHaVxj5H85esx1uwEpmpcCcw7",
  "key14": "2SzAALNoMUyMhQsZmVeSus7cTquXVG62LdzyPRgwPwAq2SDbRnW52WBduEvDtCcMxnRoeefRBGTZUCVSng3v5GwT",
  "key15": "2iUVehW5nbj3J2a3UYWoShw3b4FWWVEgYoraYqohs3ruL231tR5WCXRYM4ics1DDSF1K9SFxzMSvxp1SywGyu2hj",
  "key16": "2EM788WsB6Sejh2TrRzr97ZbXYQpDo2WWrT2WHbyvBma4K6frRyFgwRkxCrza8x1EkRwxpdVhuvY8K5LEYzx7E8A",
  "key17": "46hvD5ofyFWSjFVvqQ6ALHCLTiJCcFfoR8CJKLpPEuwbRsxBNp4ff7dLzitwYqd5p365JhEN6rdDkdTAm5pSdtPD",
  "key18": "29GzHmsh8Ka884CC5ExDuX3sE942dGNeNTFykrsPV4N6pkUPVJKzFFjJWYGUkuYtQkAbpTg1JrodFekKED4fUzZX",
  "key19": "3TPjCW87wGp4Rm1ydJv5ms4szaL3Ja64octiuyVpr675aR6urogDM1bT62psvraoGULbErNmB98SU9Bpt97nViwF",
  "key20": "3GGqvWom9NY79W4VYnEihciUGQy4z48BN2yCgUG7FYG9aeGuxoMyQaXrW7TJAiTQJD1LULJBt1qbH72d6bVwRzYA",
  "key21": "2tXXrZL8ZZjmpgtivL6MpuqnuKWpgKTisn3jamKqFqHqTDFQP99jpMBBQkbAMxaxgTkc31nghwRXVXMYNvXD7vck",
  "key22": "5iDnd1R9ww9Jd8su1us5MgnvPFR76QufSnarw39qGwrLLAjVEVR4pw3oSoyDmgnxgyHduQGQX2TroFgPWY1C7o6u",
  "key23": "5Fjd7sZCtbrDvdkZUtjDZX54XsBXYZkGD4P7W4PQAZRdGChrzqTRMRXCP28Fq5REhfrWQSdm6P1cZk7Mw34uTnHT",
  "key24": "4HeQvKct3D9HicApsM3LcKd1MjH6fSiRiti4X4w5Fon1f5nw3dLP8JxNEBu71R6YFSMhDcxcEZHaf7hh4CU4B6uw",
  "key25": "bzKMgGHv51NyPYLfBozjQTcFtT72RjojqsUsUVvqBqvvyMSnezGYPtXtZgirmc1TpZfF5Kji4kAq1rd37YeNTCd",
  "key26": "3jRDRTPPC3pmfqqNfFtQQ33ReZ2XcXonWT9gaddL7tFaTnTMUGHt8gtew4ixienwcEdN8W2Evn9GZAtEsnwAdzXz",
  "key27": "4jqvCQ7DzwXHeNcYH1WastTx2ToEXmESUvx2jS2yZgpME3uvE9ymQZvUPgkv2b47eWXxaUgXGbyT85QEjLNrmLeU",
  "key28": "4fPbVmeEwxqHULQcZLjuy5g8MccvtT3T3tesA72D81d3X8qaQvv2AjZf2MNGhCumgPAcwTxJoobiYGtBjL7ZsAL4",
  "key29": "4N8TRRkfiv8ZcrxVfSyBEqrmZhxjEEwBLVeqZQAxRSZPLqfDDST6QvbJNRggL8e8ScEQyXYcvGYjuWopy9M4uaWX",
  "key30": "2ZkAWGAomj1GqWcMoF1M4hEp3Dv2QZtsxTh1JmDPWFgMJXvtFmagFyMqPnuQqTn1A8Q9pCnnqM3oxnXPYWtNTcDN",
  "key31": "3k2LC6VLQ8G6JWQxwMY5GTbMwsjaSLqhy9GcbZwcFTNaS2ZUK38BB9sQstsRuH2ZWwVp2GEUHJcWQn24t6hiGCUJ",
  "key32": "SGRJ7Qaj2uwh5T32eemKEdsDXHBhXKKW4tEfch2EmqX5QewwGaE2NokDmq74wWqGwBnXwFoQe1djuGMTENkYf5u",
  "key33": "4uU6rCm1gwVmKiRjELwwb93dMWtMeNd5MJPiETCKHv46tzPpNwMoghDvWkqwdbT2EUZFLtcrpWMpPrN7MEcrVjhE",
  "key34": "47kqroU5NQ2vLf399a3qbTYRmxabJ6my7pnCXTuZPZdYTuUHXv7ZGYqEE8U1pHjjHT1JMhb1uHyWMcFfP6ymA82K",
  "key35": "5CjrxqdHnijN9NekGCdMboCEGhPg27bndNj9vLfCMR89HWEEwMge6GncJBzW174f2RQapZghAo96fMAY3we7DSy3",
  "key36": "vJUd8fgqyj6Ph36AX7QhjycPKio8bx4gN2Tb7FvZRjvAAfF7EzjCKguHEu6JJNj7okxBw9tpwfp3hsdF6Qy4mRM",
  "key37": "5ugzEyHAsno92nj9TaKYv3tSb7f2wSid2ju4zQh5HTk6F5L4RXZpouZQDHxKTRzZ55Mxw9mj7BPaB2FWc9nsA3Ha",
  "key38": "5FgWXcrkWAYs9jCKxE2Av4gbuSGzWr6Mc1B7EUVDwuTPApmAJoJQevEBjnVCxJXpkip7DS8SF23FBeuDrdcYRj7r",
  "key39": "z7PzmNmucbMJ3F5NV97oAAqsknxLZTmvv25ZRVbnJuBqCFENzKFk4Syu4NGsQWpeNoxLbWgYdH7hK41zfTQVjvC"
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
