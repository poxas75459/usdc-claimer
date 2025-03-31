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
    "uanAgXfXembaxzNsVBUZXczxfzHouV8W3FkkXiidoff5UadD7xHqo4uvXuGzncCsSBnoqjPQhKCKPd8CEtwW8sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UtTwEuwJaxxP4hX8UoJmsj8VSNqaX7Uxui11zxUkEbmiPbPjGWG6dt7Y2EoMVmQY2wbDbbnNCfUoPyB6HMEDwZ3",
  "key1": "YED2DJP8WCKWwGrecTGgFTeyGVEsckvGsX14M76p57mXMio192b4ndxDX5wptKoWwf4cHLy2WdD4PLng1zys37c",
  "key2": "56MoGCAjqJGX2FxwYwxtvdtqfyRc9PsHmF3XHpJrtcqi73xh2Ro57WhEEfGXtb98L26hwR3uJPmYB3LcDL5rqK8t",
  "key3": "4AgdVfuBD7E2Bq3GpfA6JtisTRxtGBAWFz3V5A3AHNMMCnptpV743j51uxKZzMpzmHwWtRWAtgjdJwHtxehAw8zj",
  "key4": "5E4WT6tgCKgWPxtMjZT6ygYby6xVGvBkbiMFS1jEWSpggV4bbgySi5YSKR1oPRPZkgPRRxN3RhMa9g8pixQaMLSs",
  "key5": "5nh3zGt1sdNJhx4BXsw7ukZe6h9bpsiHKC3TX8AYueGmx2bucXAPF5W6KoWnf7Jr4uubHw3znRM5qmNHpsN2Q9Ys",
  "key6": "3dAuoViDBuXPtDFV4rCG9MUcZMYpQGTGZSdodA8JfBNBDUzdpSxSSMvaqwATZYQCggyuJpXUwW1iz2pBoxKEN8j5",
  "key7": "3LkmCFBkjwCTyQLbhcWidCL9nU2az8t3v5e7TEa6UuhioGtsDEdjTEtQvpHz1noqygB5JFicvHxySjsrBHBhTd5P",
  "key8": "4jHgS2v4NFFvFvbfvBxxukKZuZppHkxDxNw3uTdobjxaKDwXXmzetgZYxeND3BXkbuCt83cm8E3vNT2AtUghBbDV",
  "key9": "3WknigaMx6QEyUJW5e5yhmt3pqqbw82piqXdEZdqEF7qghjPEJwSPLkPzmrnXGkZgS4sDhqT2twMgEhDqJNb7WCK",
  "key10": "338x1AkKoqnnNcAoM5caX8xaLavEbCUqhgdnzRYiW8bZ4WhKoRGwr1peKZraWQsEJj3R93iRqGgqpNq3jbSvMjLM",
  "key11": "2w4LnD5WZQscKqqLnwxE7mAP7ajM3sHfitgePF7Qq4Ucpeh6n68qZ25m8XSPijrBDtmVCs6bxXrEGXGCjjcyeFUC",
  "key12": "1CfLCrsygg4rq7TNaaZRme24daBAsh55XPe5dMj4jae1j5erzBsYzbNPHeaAk4xAK1KYqjEEj83on1G43sRcnVQ",
  "key13": "5YdNEYLG7fBMPjv2GSRNuihAQxecrx3EwXPERLWbdeGfvZeBiPMWiJnGs3RMxBYTMC7C5gRxKfita1v9KfpovFtj",
  "key14": "66SUmeYGL7ZVpfU8M9JdHnyuKU4dbknSZewXq5hkwyfNVLQhd2BxFaavEcPjyxT1PM43ooKowvFH6itpL5sSsFfc",
  "key15": "3omusutyiKXLsdYNKp22oPjiQumFaQYhcstkE4YFzsdKxbRdZjNPbKi6Aq5i27wLyLkhhsvn6xALQnZeCRQBEfGS",
  "key16": "4CfF76bxtvNBQtxtboXxio5Jrne9dB6ppvuXWdm2G1d3oZPfnSiAriq8gtVfcovBRbHBznoYbfxT3HZYDR9yHwXH",
  "key17": "37tA1DTwAGuzArGTek2w4LoykER5o6884aTsNVGsGfZGNevFLjPKjizapUUVmZsPwuG7ps28vtkkthAoRG5MtBjA",
  "key18": "3w19LoDRKkG7VR3mvsxWLXGyeKNafJ5uWHFWgVPqiQuzwQHvLkwXArFozSFXxbcSua99M9ikfxv5pbneRhBKoeaj",
  "key19": "3SXCsExb3DZjTzcCmA1rqLLv7abUgkKbE7XfXTW86x8mpKs5JEUJ9Yg8VWdQU574t4QnRbcEnM2UfQQjKjiVeEAY",
  "key20": "3xRCvaKexxAcS1Lbv7S5o1XSnECSP6x4PQtbjgT5Vi8Szt83gFxPV7irv1sjzH9kNpbJLRZPM9miE7ptpahncXT8",
  "key21": "57tKLHhuq8CRkms9XfdsBqjGdgGi4W7LEyzUx2dL1wfaktH8VBowCMmWfVKZ3ufTM31qPC6WTXX4TxvaQDrazJmS",
  "key22": "43RCxAPjLNusL9SrqAqxMDHs9VmhxTr7tnwrEyGnPiPVbAuABc26LmSZWd942V2dhLEz5ivLYGd2Kp4WVSzkGeef",
  "key23": "4DGWxBgEZeXpUwUnNU4sAouCex8TJrMUoAPgANEhcdgqSq2tbA8HFA2ZRFamJPWf3KwQmbWWqYH7Nzi8iLMmU41a",
  "key24": "4qiZrdEjhddUXY8rMv1SPtJWsm5XimPnHUHtozAUWVpopTx5pXdgb55P788SmGwDfdNKNo5s3RgHGMnNX5rZ3Rvj",
  "key25": "4hwn8ksGzEMoAFMLpSgw1DB2PimXR22cUm2HQf1VayxufKTRjPCvbeVdtSmrWEC1avtcjNT8boqYeWjtahm22KWs",
  "key26": "B7EnEMPr4yAG6z2t84Dq5YPgEspnz2ijzPKdCE5dmApWJkCNb9qzecASGB3hr5uRFQ8CFitKV6PXvbNJivyLun3",
  "key27": "679wrR6UepnSdRkgdhSxqnVzbATzhFw4B8w4zZ9BNZhjp9Pww7fkMCnrcjc1KQKadWTr75GyhWRZyySc1zwoZpTM",
  "key28": "5syTU4bKa7Qd75LT58Gifc4FuzbPW9aKnhCDZA5mGdJPvXCQfCXqbiSTCTAe3fiQurscuJqmFzhh1WgM8ve5vwj1",
  "key29": "5yrurzGDheUtNVzTSpgsLs6qNKq8dEL8bfrPpqEkw3n261BMGXs1TbxzwtN8A8iVQnuAmSyWE1Wc68AYXJtzQVfs",
  "key30": "3HTHP3h4woVFPNQx18VWAu3a6kFV1hDR8dvLyf4VbTLuT6EXYMoip3eM247o6vrdfYtt4wAqUiWHNv9sMCotiGBJ",
  "key31": "5X6DSaraTSGgj2PJNyPzABEfDc8D5yUsg7B9JRTq3HXEakcjh963ezzermh12Hvw7ndgDnVyfHKy38EvvDDwQu3M"
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
