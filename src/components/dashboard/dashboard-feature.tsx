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
    "3EBWpatWn5AojDzjYLrQmM31gbg1uhJ9k1CCP4gsbSPVH65L7FxT186rsTT2gVaCUG4CS1aPt68u2tw7M4baDA84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xNTJNCHr6uX1C6g9VLmzcxgrsUMse6wyaiSRs2pURZiQdMdpe8b3mxopQGxgsN6t75s9XmyZg1RkV8cYRNcLZB",
  "key1": "2oPwUDoJVkXzxvvJiEPjEoHBFTjsW5qAeSY3HCWhzmPeePpn8WHhVvVKnaufhaBBQjzSYenVwQXCgzCo93R4oqHk",
  "key2": "5nfpmZJe7mDwPhwNedoSUmNa9ZvS9ep4tLgwUunRQeLWNtyZJ1nTj8ffnK8Tco8HtrDW4HSa1PsyLeHfqJu1tspA",
  "key3": "Wz7yZdcuRE4AmBJEVDnjYdSWapQXkUoHwuJ4XQPztdaYgmC1beRDpagiTUpUu2zd913dTv7o5gBtZCpuwbbwHUV",
  "key4": "5eFAcPXtvQ5bhSH7f8P3uZ3K879V1HpvD32neDkGe3og517tW9HmKCJLyzY4dTQSEmbVBGrVg12y1FUYDkGwPCU2",
  "key5": "5ikjicgpod8SPehXJhvjwM5Mm7U9zG2T4Yy5DWewzAKjsvztjsf8utaWq7FoUqPxMUuynupiHinsrWdzUKoBRTJY",
  "key6": "zSkSbh42TsJoi92oHwBxZvUN8aMjAntn63zvzmRp2pvALX8Z1fBkjFbtJY9QW2w5Pxj5AZr9iMr11QkJ3T3Pex9",
  "key7": "3Jpo6ccZRHKmzdpsVmFcCwHMDXbKDxCukGavoMdQ6ePNyykUtmAQUmrhk38C77zib1WcFiKPt5snkwgccDSdqNjB",
  "key8": "2How3bPyMAj3E12J3FamjHNHPwWg6cRw3bNavej4zkjC6fEzdXRB4ihmq6dA4oAC8W1XmvrLVrsrtWqUiDS9ESag",
  "key9": "25io8ZmeZBHqVuumNN3LnPXwztms7DmTqGHdSchkGtoGkhWEopSng47wCskR4eAkeKY6QgyRUZBoyhEa4NCbUJon",
  "key10": "5PJVyuAQAjAgdsJvW8DFe5DH8L4oNNAM41JeNMYS8YwxEou7NSLoBoV6Ed2uaNsMSV4nTgV5SK6HVs214gFyFmmx",
  "key11": "aG1Jzns8PRhQDHwoUTsTpixCW1WtsDf1qut97eThgrEvSYH1BpPKoQrFhfCk1NUFuYq6PqixE4TXPgbnzYCjewt",
  "key12": "3G3R58SKbPC9grwFH7sTYV8ZYph2QUDLP35BFHeeLvBYvbSka6XD6aJZH4xFWbGRkWCtqz17bLqovW1GgC1vctNG",
  "key13": "2Um6BRK3vWpSmetqS31YqQk1AS39DayshQSKAKKwgeYUQMeWoas7ijj1qA2WezrpNz8EycmSL3H5Ed2B5QyUZfn2",
  "key14": "2RbRNJnHrWxp9ek7eqLf3mGV6gB2uAwSUzPq9YqkjqmTAwbWGjcQhh2m55ybWLwKb8umAqLXkfS9sqCQaxUSZ9r4",
  "key15": "oAd25h2afmKLadNTZYtMmMU9gMVvLMuj6eE7sybC9X46jbzhdJ3rFr92YSnuLC8FsKPuHU7YQxaWmKacbEWxR9K",
  "key16": "36BcrdECqGpek34xEaVtNe9DetfTv8eT6ZMMrmMbaWEqrVZkduLrTZfgM6zX8ks7t3Sfsf5SPM9W86ZWZFtbau3B",
  "key17": "2tjUHhZfsARoKP4dh1DEJ98pkyWxHAnJGQPKMS41ev8eNX6qrcXdefvZPrKuR28xRpsY8EX6Wbwq4nngNo553Y6r",
  "key18": "21LafSvQhq46XWPeay5SxSW2WaiTi3GETEP2Hz4xkbc8k4UrLpaMdUqAUEqZbPxAuqqUxP2nYdsBL3qnRoMr5ZrJ",
  "key19": "4AmrPrdUWwGZbwsq8wsfzSY2hNcbTbXQ8BXvGwYxE9HB84yubAhJwPUjbNrULNCGxfF4GpDpgYEs4dXEYbdmvjyT",
  "key20": "5k5xxN3zEPWBaR2sNhrzVvYAwBNKZW3LJd9YWp2BNECyaTJ1AqCGWt35s25SspVi4MyvPoqxN8BC25enxoqvT8q3",
  "key21": "oMFwaHLB6urqM3XLNCNKn3GWhSkxsb4bXKVXNpWhuL2PciGADyPVgKUiwoLUq2ZGkQNzGtUD3iZizUE8oQVrKp6",
  "key22": "5d5DinUvpQ9HxSRdvov5kN9AiYYJpxTbKPxXJJjzcUek4eJz9aC93xZsSKzvtiPWMG4MQDCjN66ABhfMeQrY5iJn",
  "key23": "Dg5tjegW1YcRgYL6cY8YF9BCrRUkJtFvcRz6Swvuf11qrEK24PPvwkfsWknDxdG1MFWDofuSS1NvcYQV1mruw1v",
  "key24": "4LvogjWSiQZjXWZcyePe3g4omCjCpCiLEcVcmaZLLTgnz4Mjf6qMwPhaqWPFJqD3ZVuHfkUyExDTH23rP2MaQpi7",
  "key25": "TCtXH9aMZqvdaXcDLJHZvYXNNcBFX9VuuBg4W29eZRKUwyF2u9DYPoDaTqrz9MZswzQi4mwzdEujCRQfU9ftTbT",
  "key26": "2RcAmqkaszeCvGf6AV4xt1KwEtEFS7nvEnr3ySqNGqz3LrydyHieqDdUszvwSHksVkcqY3mC4UZfncbzhshj4g9R",
  "key27": "2fTxJBuY7eZXuXMS37RHQ2MP5cfGekzNjKFppxXiFh6wTfjudT8awtLLTdsp31wupnGV4sm7ZmAXLFsHDswX8e3X",
  "key28": "356HtGL4P7txkLb9XQJnBpLYizovBy5GsDuXnTQ4QGn4icdP8GBf6sNFjxypjFi9uzMKbGdxtBfiGzMiNiD352S3",
  "key29": "2PehNTGRptcRmR1oosmBx6PMvK5AppSVe2SYaMngLBi3ur8z1K6Exy9frWBJDSdh5DspvwWcVCDh9zZKrpZgy63K",
  "key30": "4G4g4B9TDoMncbgc5kpucHEggF6Fh1WQe8SXrRPjV6fPWLaUoo1jyYJHeVatNxi41UiB2oCbsA2wKhaX75SamuFm",
  "key31": "4X9uBnFFaBxUUpJEu3WM5SDzEHhCNoqz5PPkHHPED34xPz8KQuHSRNh1UR6SiaMBq4NaWEmTgx4s7LRm9gjHktDF",
  "key32": "4WCQkoTA2kCtwZ9j9E46DFrtHqramafw1UweJNVGRbgt7L5Y8ZRea6MADskxTsJ7cVPub9TDD8CCMXhXkJ74vxi9"
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
