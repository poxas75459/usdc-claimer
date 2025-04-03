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
    "4UYfTUJ2x7wdZx9oV8gHBVxNukVypxarwZFeAX7pQots6C5goR4PzBneKSAW3aSLrBPis9NzevrKsh5jNg5tWj4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZWhUQpuwyzVRmuPzhfioTpp8DyvKh3TSmSbWcHgbjbSjF6rwoncASwc8vv4bCHLdTX3cxPDjC4sXxH5ZXaJkSfU",
  "key1": "3Nv2Mau4RphkMxEajHVTQ8reNuLg8cYL3Lj2wpXdJx7FXw3WC5zUKQavNirVC6zPhf3H6wjppqPvSxesCmoZwGVE",
  "key2": "mNknPY7ARGBNcKpeRCAjPjQgZdZ8fCe6e2rC1HPKqHFiYGMzWisM9J4G9jGHp3Mjt9zHCnBETD8UQrsFLxmDR5B",
  "key3": "L1refNvBiY5WUPLAEagRqnQHrkJpyXNrkTWMMBcGjYftn3KZYzGotPL39aevpVsN2rhXMcvCSzDehC61XyWEdCQ",
  "key4": "55Y5DUE7GCMWZCqATF8heidrQpwtnhcKyyvGfuUT9TFMsufGDeykmCb54nwZmhjTDH6YVsYU6eCCkuozn7MGsppB",
  "key5": "KUY8YxYNxHtfQ36a3ChKKhhW9ug6XEULpBRtYM5hJHgVFHogC9BmuHYA6ytJ1XNcTv6wsoEUytMcmZoKGj6vnsw",
  "key6": "4TZJjdP5vTwcaxEi4jDpeG65HLgmbA6zaEZz2wrV4ZJGCecD89cqbLNQnd5JR7kHW4YZ8zJcrSXRsB8DMzkk7KYC",
  "key7": "5Zf3MsVLKkm3zZZsepc3rEzZuWf3EmPsmSNs68GjtQMcUTPda9bFTce11o78CUP95e3CBPdPqusTj2ieJRCTaoa1",
  "key8": "5pfR8zPPC64FKwbD5bLSkuKL8RQfmQ94fMh6veDgZyybwoTpKWHnAJFc9EuLV9KXrUvcjN95CpZhM7DAnnBQNjNy",
  "key9": "3ikYTP19cmY8QUt6Jm4Fq4Ftk59YJTqtwHzsL8w9hzwx5n56UK9xATHHyW4sGMFyaEhyi1bKu1Sbpbgboo5GpkKn",
  "key10": "4FnzoNS8Ao6RLfsqDTDcQ8aXWFSU6iFMScYpUCMk3sD2QGAxRw4a66tNhoqjDxJE196unWkZULUKH89D9fovuCJt",
  "key11": "3zhBvGYCWtLPCUoTksDL2tNTLEk7vE9KXojGmbrApchgr7zRQHWFPRVUir4axEuJLkL996u6L5UBsrVdfSykgtth",
  "key12": "5R2iRzfXZiSQFQd6q7dDBjDLUcL5tUiM84QsT64DEvsxNVoHYkyVt6hCiReNJkRtwzWRQh6icQd7dKNUjYEYCxqw",
  "key13": "3dreGaYh5cGYigi2GaY4TMTEu2ZdUUGNcvaM7z7T8Hdf6F1pPTHPCQ8kcynjMNNojeAzNCWCeTPGXYR51M4np7gc",
  "key14": "5jn6kkkVXQpLCqKn64bcWS9UP34AFtF34VyrfbvoSsAvzy1xvmCFfBwwYPtUm29J7o8mwwgivy3HSzJAoReUjo4b",
  "key15": "5Mh9vyh4XJuKiT5e94Z9BhhJqb6a8wMWPVYLSJW7AEf2NNt4NVHd4QdCXaoQFmpCb7zykiKJB1MbbD3idYMu47ke",
  "key16": "tGR8m6QWnw2NBQY4bC2j71g2HYWwU5cgENfsovqmvoRRoENyLLGr7ZcumGki3PLTdCVtEE3cvhEZGFpAsbVDCXF",
  "key17": "3xqERMCMVndLUQeQUtuxvTxnTGU4PQWxHPtvv43thGffPhNDQ3wmfCYDkQyquyd8FWuLbwHP8cqEuDf3bkv4wPt6",
  "key18": "45K1jD8dZ4EYLxeujpkTVhsZmUCefQPrYHfhToKAzgMmJvKFFZijFhk6WEVN3tFYBtMgXbxVwx1eKPUq8YBSiffJ",
  "key19": "5JagJsA9oWETscggmDFXUtmxdhR14B59fvB22sjMe8cMPu4aAVBiTC57qh2b1qefkUvFbNf7tTgATuLehSFisBnz",
  "key20": "PkiktWuZ5o8MQiVMERPgXg6sJUpW6YQ9gy6gpRDfQj5tTV7fQVW2QmuhZzqemZfjqKjwNH7zou9R1bF3qJ9qmTV",
  "key21": "4Lwa1mYgv1eS1Na5e51KszJeE6hX6FAEYyMBUaMHqM3UhoNdHsTmng6R3rzRVu3GYjzATemUjPBjZTXB88vwvQEZ",
  "key22": "M526xqLJuncAhbHQvUqYXfmL3WhBrpADsMsMSMJ4nnQMPdCXJLmpegiZahQmw952S1ibMeEVwdrCFVsCSEySHbB",
  "key23": "2SqcMTPTbNpUPUZHz2zfANfd43FxLyuQns2wWcCcSgu5dEXbTW4hNoMBKhtMv4S6UnbLEiPfJupf6Lfv11GG5Ljf",
  "key24": "5eTiS8fTkWYgoUHaYLARFV7jFKWKzLLW6qtauYnSY8qCB5cnZ5F3zx9VkFjoy6mBRk2bAujdruABkGvvPdvE1Hpp",
  "key25": "38YMRzSpdeA4a7VznLh5nJ876mAi2ghBiqEKtPs8TEdPmo8qP249BSuSLXBkKzT7daVWzcqy75P796jbw4o28NwC",
  "key26": "41yPYomUwBM8gqfQ6hmRL6bVw33JHVDapeHuYuPPVZZiqBu98vTf1heLFg4sgdCCgaBLbwJHxSgPzgzR2NWmeY1p",
  "key27": "3TckFppWpLrUi2qeRnMNmje3LN23SMfqJ73BGCbQfdGn4gG5vFmqR45UYE8frJPG3GirXTpEQfF56cg8AohDWmHT",
  "key28": "5Pn5EZyBYmCzjuqCjt2Ak4QdUXRKtfE6on1sVU84SeC7vtiJqagYaAMahE2sJESvgYjdaXZj9gPLMY68LotMBhqc",
  "key29": "2xvZHnhzhDgHgfYRMb5CAjmckKKRFqCfEPr4vdwzkaVeg213LHNoAaLFG3iWVA9moaDEJUbYkkCkq1RrqWJdwMKg",
  "key30": "3xTCpFAvjMrMoNmaKekeLpUBBvpLJemfwjFobEbGxAwSK8qSvgbH8cZ5bw4qrwD4xoxzYRBd6qvRG1uhVoXjNtcB",
  "key31": "3siadqanWfoeRzdiZBphVSm5ZtuT82SdKtvuTo9qGbmPqTDVzHmEaH211zqgWy1an5QZ9QbUJjSXadcDW5eLFi7w",
  "key32": "2jTbzJ15xcxtNNfuz3fq5ZmCk8xiW4GK4VKWimWNAvQjALEhq8b1w9S4k2Z8sKJRZuVMDeXKXDUF8Za24NZMeZiF",
  "key33": "41gKSvjP5XyShVKDosPB1s7Kh1x7crF5xnQKuHLKtcRBrvjQBzqgC6WnDHLzCwnB1WbtemfbgYCeHXdRu2zpeGuR",
  "key34": "4yQHmtuCGwdaN9jyaCsRGqMXfQ2qBgZnFAA1c8m4TvavzC6joSK6WQgJYbvVHWnTPtRNdPavUdKeyeiEmARRvwus",
  "key35": "3hajr8c5WcG7woJtpCERa71Jn3zuSDXypf1E8G2MpRGYjGTDZtUTJk3nE9kBsPzXQ3vz3Cc1m2AbjsroQVCMm5UW",
  "key36": "4CQSX8MQWds6cLd2BVwdEsNJfXBKH4Ed1kN54X5v5K2bmedRt2pibJoQPQ68kLcrWXuHEnGkRRVVrUNfVHnwUqY",
  "key37": "3Y8a98NPktQsrXKhcqWntxaGVm9YDERwuj7RaiYGMejPTcMKyoj4sZaRiwaLGUri1oaQaLNiAuuRqtQvnH8WhH7V",
  "key38": "2qhnisYgWGJGGgzFCLmDYFPorGeKxv3rdjCnCpn22SEDAvXoBTJe9mNAzN8cBZ1TwCSHf9kL1drtbmPLuk9iPDde",
  "key39": "5Nv5BBexLNdHNhj4RrCXR2z9qPnB9NLQeKDu67SRyJxWrYjyAs1ghFTdDqscB7TJLWFTmSJDoE28DQ6m1zu1SBAK",
  "key40": "4kgHnT7cas7Vf8X2XSEHHcnjnVWBSwRSvL5sR8TSyrKozBJeXvafmeczYymsQvALsgGD8F67bKdiTRTQ3PcU3Eoy",
  "key41": "2NHkk1QhM3quy3XquNDN9sKjGUwheJZrqBvsp6XajCHKe3MXkKaaZVqp6cyHCrg6o4kvYeT3vBZhfo8HgpqgpEUj",
  "key42": "2twhppnfY7EGp7Ku3S7beyDKScFjGS7LF6yDENCqixTm8NVnRdg7V1PiE7ShkpncjYD2YTXyS8njZdAusiXmNZwg",
  "key43": "4cU1Fg1UMPeJmqmba16R2hnvjjtHg4aUMro23y9GrgcnejrpGuF4hbwHRCaS4wyGsiG52GcMms4BaX4E1xmGi3Tg",
  "key44": "27vzfvAaC89dmWLLRzjTfnyiq9thPiY4NEF2VibQmBc4MgxJ1wXVSVaF7XXwg41vow2zi72SvZhATjaHpYtHs3g8",
  "key45": "26gaFAJ7ZdxVQXB1fEKzZ6beuH4fdPPQiJwhna6K7FfR2E2yXConhQ2sVnm2rEx7b9MJAhh1L2arsgxYZJnTe789",
  "key46": "5KAgkh4MEibqVhrwJHzP7VyPvyicZowPSfxcRiEkvpNuRJsJx4Ph294no8DZBuHH2dhMgQ71veyoAVEuRxQcKRya",
  "key47": "cBZcndB6ZL2PAwyqXmjVXMeSFc1iHASrdS8EmNk98yToXV5Sqz5GpteXc9K5ni98YzANLvScFfhPi5t2WsqVqSr",
  "key48": "wx5hUCnRX8wQPzSZBPfLSwdD2zuNdLJV7oyCykWMd9TFUNC5Gew4rYm51EtNm4A6cAXehcNZzu9usQXCcaF6AN6"
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
