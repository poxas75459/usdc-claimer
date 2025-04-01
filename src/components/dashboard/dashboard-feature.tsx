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
    "3RTZ2SMJ8Su7wxWBBDk4fkoaxtVF4Z7iu2tuoFxDGLCbA5bsBgys4hRrfZFEQNx2DqaHKzRxAPKMcrg9hbvPdomJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561E6hWxjUjiAX16ifR1boPy8LtzppDqm7GrZqWXHEuCLUdGAdGXkCZxLY62Dm3TCHSkjUihfuLeMXYPnpFCU8Y9",
  "key1": "TqPNeiZpihN6onNzfRqHNQmeSubVY2j2S3NtufGA5Xc4RuxQLWKCUopM1o3GX83Tk38LZq6mMspJponB7kx4pgs",
  "key2": "4spXJh3URbA6PwdiQxKqV6dhs2U9VqWb75RArok2X1qkdEpyFrGveyuM2Ss7LiYpspMsYMMUotrLJhBCoXL95Z8X",
  "key3": "3oFG1FQzx2rjYLJKFeue8oDfsbEJwtFbp9ATc87jTNEaMZeDxP892zAjSDSaGmQfuBV3sgyZUPcEJwRiQR5WpTKB",
  "key4": "b3rH8qZ3vSYKGZSv1Nn1Ysv4JgaXLbK3p1BLoMfUQeEm7tAkQVBNJjsGC6FrzDMZxDwWmiDL2JUZLtBUiqAG8k7",
  "key5": "5nwauoi1p1jJ3eQ2ThmeY6Z9JXKc7TcthK3eMYsJ8jSPyVjyfCwq76toYN3Kvx9415BJR6eDePHq2VKb9RxqE27D",
  "key6": "4vYhGAXd41Zo7TLSAATQe8qcZMAUkBXCAyuoVMHh6jVgTJH1qjSY9NEU2azPLTZhbhqxxta4gQFbHneCoKcUegrU",
  "key7": "1CEnaxhwvgnNKaCCUGhmq3AxiLMQs7scpqLYTiQVKGfRxkaUR3hawbCCRBH4Jo1kPEp9fjiPWUzyHECvrPZvCwP",
  "key8": "MnfYrYD3Xzimq5dmc6a9HvTDEQjPp6KD4YMpDNZGcY6A9AbfyuGb8GzZGNrHRTxKRRQtUn5XoocWDtjmsCBp6Bf",
  "key9": "UKwm2V3bNDwe8eQ5VqpXp7oz1bc17u142PLbK8YJ1c6QtoUD5XtNtSHs94WKEe3dYHCjFK4avmGSarcCzrhhed2",
  "key10": "2EyrG6uuYWM6eYdRZAZ9SdAhDqqQntg9BcRHkt8SoWswQkns5agwEacwQmsfw9YKWdTpmZNuTxAnmeRVPRDvwpgQ",
  "key11": "24YBXCLxcgnpioLwfbE2uB1MvkH6td7vbpRZHqCAscMNntYUm8U3LnH7v5qbhYSuU9v99NFjwwx2BF17AQ1Hb85K",
  "key12": "4QYDmxYKVzFBJbxvFNv4L3xpFJ2shTPJCjz9tqdFtcdRwtwqtWvrfDinFppZX7Efu2nmANpZKtRr6P5GEyqBykK",
  "key13": "3sQnfRYdUJqan1AHAkftdfiQmRjbNwex2h9ASHshytcpY2wCR7eWhU76afZvHSnFdT7BDiet3mu2VBmn8FFBFcAa",
  "key14": "2pHKWHDzER2VLacwCNzfkkmPgwRCFdm8qKXM5nrSz5rvnF1pJtsUR9GDXzYUfXsYfvEFigvZAmSn7L3HUQALxBRx",
  "key15": "bHgn7yyUf9FMGuNu132imgrAswaqci1iWpJ6SRFRLQikqtLcuYrpUCEBW32UBFwgzaUYH1GyLqH6bNVgLhQt4tW",
  "key16": "5s7mLm8UZyKcjAPCZjxufcYZHB8M2wZsxQEjNw4yrGB5WKMqEbMCZvn5sCiZqG4TMcYaDUjYF41rP9gJwKzBs5V7",
  "key17": "3mepZLFQ6iCSZf6dFWvm746t7sZJP61zBGfgzJVEeq1oPkLZJPTBBP3wFBLQYvjkfZMUAwBZgF8hMXTcbDfMzvH4",
  "key18": "4wXVF4z9wQYmi98Zs8oSJGyWpc4BokLw4bSKKY33oY4D9mhHxAmnqC2vKe77MQjJB4SJQN8WX4XUztiVBaNDAebF",
  "key19": "AtnRJqnqQJJB9Q5NWQscNS8nQJPZUkf9V2bsap5WvUu8S5rxwBkfnehi9QxjAP4YMj88VmQFNyonFu8jTAt6Xi4",
  "key20": "uUtFztecnedNJRZj49G9ep4r3Sc32tJmoiDu279Rj83DiU36ym9YLS8ksX76pmamhjyjyza3TRguyzu9Xzp3kWX",
  "key21": "57Ljcjc3ecJKUMxJ8njij1mgg2tnHjbki6BvLyvB3MgaWV1QHLomcErLyNPfhzyUsqrtUtTZHPZRPDSPXeTsKJqL",
  "key22": "cAsnDtdyoNHV6ZFBKL89Z29oV3KucrsLsjriNtH9zvj3G5Zx2vnoTzALnbGcZVQe1mrRQnrCjPGLuvYobx4WSCB",
  "key23": "3kqiqisgYtCDQR4q4oogJnnUQmyFk18gjDgrB3h82icvvooF123PXM9qm4zwf915vFEjKrKv1XFMUNQA4Y338x9",
  "key24": "5ug89RtppySAXfutwGFRYTpYB6XPoD1esSVm5rX3dSwzoQX2eYrVEvf92qWrt3es7iv8jBK7sRC2vXXdNSgnNq7Q",
  "key25": "51ZNMRB2WbgYauLEUX61dJHfcUr2eTB182J1s5XJ5q389tRZ8w982x44pg2y2qo6hrmS45Xo4rNKos89aKSHwWP6",
  "key26": "4ELsipt6sD3AMKMGJbuZRtUYym7To25FJguqZcuiw3mSJMLn9xHa5LCU8LvjygPETmMFKApsHj9fPmgadEMw1fjn",
  "key27": "FRi3xV2QHNa5pni747TsAzWF4HN78rnqQxNaHFgLiTJYpNMEDxhjPeFogAcgQ7hvGRmDfM3QUy4Mu3zLu1V5TUb",
  "key28": "2dzbawYjYKuzkKKPdyHTHuFyzXsG3u8LUqpog2YrPRt3vbkoyEByGG6at6NbmS6A7a7ViY4Uv19XYsumKF1wYANK",
  "key29": "4bXro5w4oGmhsJYKQ6eWz5Wadzor6Fd1HjRwcd5EueD1wdHjMe3QyybKw7jetB98stCiJWdg6KTMLmgznSNELDAu",
  "key30": "4jBWK9i2XU9XKsRviSVBeNpPb5cMBD6aknqs7Y9ErGwQM7r3hmfSyXHchA9RkgKbX4PCBJNdUFvpQLbn2v4QauGq"
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
