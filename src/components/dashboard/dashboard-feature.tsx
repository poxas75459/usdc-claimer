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
    "oY1QmzUpnZi4dC2qYyC78VsNndGGz81CPX1hianqkL3WNvhMmgjgr5FUTqrWDYB8pxNch1ksG6Sz8iw8dkcqXy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qkaSU6C5iZGD8nshAQ4m8hv3mxqqFCR5XervbENvsHz25WRLCPTFVRZ8MJpVu3VF4htrcZpMxV7uvD5hvuEDqdr",
  "key1": "25qrcmqyTro39swLFpNxWPsUtkch1BhccuFAPSLpqnE5fYjPF5Uc4ub73tTUKxiDjtDej3DixsCu2x62rf7R1DPy",
  "key2": "4UiuktPaKJz4hwSTA3No7hzECuVD18Meoy4FkGzZAHXknpCJnJphHcCvwzNNxhngFZwmxJVPyLPJ5edqrUMdHShw",
  "key3": "5fyuk8RRFykRv7R85WT1nEhpZaSGxHWvwbvcHEbcC29KFBFN5FJYYgsMNt7Tegqm4gcq6Jkh1vLo2Da1YezTAoyX",
  "key4": "4VcRQ8T1dckvaAE9zgE3bffHdvusezBrH2QZhgyLNhCqV8oWrftL359XE9bwTNLttJv25qzauZBCzwQ4ndFW86dC",
  "key5": "1tMQWznTQtxerHWb5C27iyG9GXVvG1zFn47ckwJMALB5Dio6dzhprmpecLWvai5xChiXms3XCC7Euhx5ECvUeiq",
  "key6": "4PKahu9UKtw7onDcxNrjfuhK82GdG6caqUdNxTvJKEypGddgG6BqTX3Fwm1Z2efhumujEVbVeLkYiJvPHfbRyYMs",
  "key7": "3ShfANMm1fUtaxLPYG2p6NQUY7zHvQ4NrPzRYW7ALpzFseXxUnUY6KG3hdCHcJ1LZ1xKnitAnn1NcMttHV9Rkvbz",
  "key8": "2G38uDtxxFZDpCtXkZiqfpqvsFw5DnwgrRMBp8yec46yxXbrFqHRad4Jy8pxDCpLwgNgDAD9o2pHU6WFzJiKKbTE",
  "key9": "vKxDzhTUVAZL5YUQ5aHoiyJZaAEjKY7gv9dhJXysZMPJK7e2y5Q1trnvHvbhrHGzBy2yLs4WQDiNGNTEoWY8Gau",
  "key10": "3zKZytcNcj3yxBZTEgfsdb1Y7284s4EQGNHD8NzHkCNy7K5psoJXdTeuqjd4tTt1HKemE86JXkoi5RRS9qaS7KYc",
  "key11": "3kiprhYwMdNw2YxfeC6SrbaA18oFyzJh4SaexT3FfuLBtuHkfy791uJ9FeVMsWbxcP5du8we33qxMjY4XA2qVMZv",
  "key12": "2XGD3hsqdXix7Xk8Sc7TdgGHPMTYKY5dkySZTg7c9S9h2tu4g68QmpZXi24GHrtvNcmrFyUsEvpBsXD2s4bLKYQG",
  "key13": "5vhVU3awHqLQU1z1V1FWE9CizNki8Vesid7V7a1CnYGdA8vceVibjFzAMYhW5or5rsA3r9i1sh8jvVUdSQ2iQYN4",
  "key14": "GEjazc71LHEevwuuTidkCagA8pmG7fmHBGzYHbjqLoFXhcS71Zj2oqhBxPLkjZXgYgisCXQiVM7KeLL2NZ9XRby",
  "key15": "51KibgW4uTpxWTpLcATua5tvCjTpy9sChSbuNfLy4EtdXxCFm7ErZHfhMbczyipR3p7jpEemvSo6DkE4R3Mz9sQ1",
  "key16": "5Wgd16MC53TKxjjB6QcKWx4QnAcoP6dYzcCZPni81EnVhsW6y1BMvwHd2PzvbcU5h3RA1kwfbcHD5yUnvyF63cbX",
  "key17": "3M4q376WpZoKUyhWnCd3T331sU29tPSorf8nHAWeJ6ZLN7Sua53kBGr34P93cXue1TjT53Bn8GJpT69UsmQSaa1X",
  "key18": "2Xg8jKeMH8UMcm1VVDVH5RxANPd5twKfgmYu23zkSzu8SfPW26jYBPpFQznScf223ahLSxqsrykoarU7tdLnQrN1",
  "key19": "4hkHD4Sa4PG7D2upMRyvyVeM5rCtuDoaqwMn6bCAPQdDgmThLdpxLmaK6TF6NwfQS6ExpVhpCdk1xqKnJ4hm5jZh",
  "key20": "4FAe9T5nvpXmV6eQUdA6pePN3dRkj1CMLioQjLPfRYdhNWphRqtKxBDQ1RfSVuLWHree4WuLP2oxbHDUbgo3F2Jc",
  "key21": "25RFPDo8ygCev5u5iwCw66xZUzC6PR8yg5ytTRfCLQ6Z1eiUiTvSmK1QepJur6kV9U2XnQdtJNr73yVQNEzd4cnD",
  "key22": "Rv6JydsqVXdDAH4HrpmFQxQFQzuPyTqQJ2xBj9cygVbBMxP35JnzPrf9e3vYED82gSgJAHK5Eor1xpVGPCh1Ptr",
  "key23": "2ZWJoXzZPNqB7jduaXkjmUPZKbKU2sShu8QVBWnirc4ZQHk88QjmPV4tsy4otuCTnXD7J8QoxvpcP7u1bQWH2FbC",
  "key24": "4XD7cxKcWN95CiXrKSb4bJPLYWyfhueoA7t7aVgTV2K8ryQTPvtky9wyE6sdzu43bWZbLjhVTWKXRGt6gzG5G7Sn",
  "key25": "4aZGcnu3TwWhPrHNtzPbk7YhgHk5ghP2pK23GqxzQ6nyYPMFpBVJpNe9j2cNEA97FdQH6ovZTfz9FsPp5rXnAutN",
  "key26": "DjtbDrZ2Fz32fMxZXi3dqo3oNJrG89wXnzMNQYj1XHBZhy7vAsUe4ypy5SPJVgqPBUNxyrzSSbjbF8kKRVb4zf1",
  "key27": "2SjQ6WphqjkH3VcGvEo6vq8FcAUbRE11sc3VUNAoHPDz4xi9vBqWaEKrEhjVS8s9Aa8qTCBCU89H5NYqAndiYzGY",
  "key28": "4sJo3xZTnHUBHHcuz5RribbQqjgPCkhvo8e4aVdHnMARyP8NtbKWUTispMPmgqwFUeFAT8JRxqL76mR4hRobntmx",
  "key29": "3nJL3BmPAE1eKpKVKJ1FEERy4XWMwfw4GPmYkF3cwqAm26kGwZUTPMwMs8bZNtWPWB6QjhwuyZqXmPiXJFif4haa",
  "key30": "5psR9EHgZa1zmmWH8zWY3diEesD1KZmke29MZdYky9MWhMLGJHrmohTidqF1uzVo13uyAZzAVapMS3aZjTdcUumm"
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
