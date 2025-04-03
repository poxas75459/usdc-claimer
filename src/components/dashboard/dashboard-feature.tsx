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
    "59dNXX1xEspw69JH2f4miRQmcRKSq8FEGj6mHgjzA1EZ8JtANQvZQxbEmXmiDJhqDEGMGaDWdUCZ8s4RVgFv3bLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WbxtvtCmTGRurExRA8PJAhJDDSGg24vDwR5Q4EfVYLVdYTvk84VXn6p9Met6aJxfz17XDeBeL29xbFr1nJCiwu8",
  "key1": "4DuN2Dm9mpRdxP29mfZKV44AWmW4bgHwqRhcDubthYibfxExMp8fSgPD9eo3spBS62Ut15LrYrV4xSRMePcB2Ha9",
  "key2": "Zdr2pqx9TuLcMk85KH4nGp8BqdTeFxaQUGqBbMfWbrsnzCqbjXk9Vjo9zprANknCX8EywxfTFBy1TCBeSsmaD1W",
  "key3": "3ZZXwHrkW5LRoD7TDr3XXioDMycxdrRGwWwVHzUrC7de1yoQypZAciZbhwdc5rn4Ef7EwmYfkceGKaoUvcRQMFoz",
  "key4": "3xrLaLvM1iSyY1VxtcFPSoVrdtPvbvDT81Nur1z6n9Pz1FGKjr5zGEHxLZNDAQYdJAhC9wtsJRFgSLKmJFQ9nryK",
  "key5": "4o4p95yqZh7eN2k2c7EkwGEAY3T7cWgFM5Jw9GkSxLfDdy4HhZokJ1e9vNyByGbQ9sHKYDgNtqSvBWH3Ew1DYwR3",
  "key6": "292zm3c79dBv68mDiQFU5Uzg15PrAx78KQwUHbF4s294emkYKYo3ai6J7rvkPXpqXmBZAuGE9hiK3cQYUbBxRDEv",
  "key7": "2o4RV7f7sVmSB3X1t9ZcsnS2CfwhWFexgxmggJwmQj4DqicVbk3Q4Z6LmpMMcLMcGmyxXDrKKQqAgVn948gHZYhi",
  "key8": "56nsvtVk64aP8GuJhV7F3KmwPPcY9Y8stdcTQb8apVGRVVtoFSCPJyMXxpGX58wZyeDWHHBcCUkphJwSHsEpeFPp",
  "key9": "5Agwtiwuo2mqYoXTedLm6SNA59QFiytDTGigZmxfWZk8LrATGjfeFez2sFXzDkwxgP1FMWgW4dcZZJiMz3nwp7rz",
  "key10": "JyBTKkAqTdfYUcVTsaYKmJVrGx3kHsGjhPzBWrup4aDsUL7UbejMG6XzH27kyr44AjjTiC3nACc4euvCZaCBzjd",
  "key11": "2eYGJPs25nSDNhxFdMABJCVaqCEm6GRVenJ2YUMdsnXdbCziNMdxQ7H9tzbNQwt3QRoENV8D6F6gdTtAc1s5dsjg",
  "key12": "3tuoeSQB5qxtSB9YBsQmw7rw3JV8cCSagj2g2qaw1Kc17U2THFrnKwW6yZ6CT4CWidxABQSKxv9rDLaEaQE1BYUS",
  "key13": "2XzUbBuWk2dSNDwYCrwpNwNcUULo7zbCSHqUbKauSNtdVoJbsQPXyatPMpBPifQsoQh9Tteient9PzdpzZV8nmLi",
  "key14": "reqigQhMNsx35Rcsca4NKhUvkumaCkMRpQh2pfvicdbbw3bYST6u5bczvE4opndwV9Eu6ASVyjdJ7nBEAT2GLqb",
  "key15": "4W9UkAcPwqcji9Zijv7Dt3rGffTcScPBJWus6fUmA9XcbsHVhXxRxDWcHh27ZvJbcK6YifgRwqDpDYcU1qWsjPL",
  "key16": "5vRNhPHrZdmRMbbKRM14YVm8jtgy8wH1PjZLM4a3BnkxsZaTqxGUd5D8N7z1byaYJv4AKiEy2DsEwkW1qFUMvrHE",
  "key17": "63JSg2yaWDbVJVAej3nDDKY2FLaPfoKEZxKigBH43WfD6FAs4CMDJfoEamW67kKi8frmTqSDGd2m8SCSbk7oxWwB",
  "key18": "5s8q8TmYvKuryi7ZT9pSNe3qYivbGeyWM7AnqYPWD9ykrpHqun9ynj3zL5J21aT5VsirzJw5W3SQhCkicENyhjNC",
  "key19": "57MjM1T16EcaNkydDxP3JFW1CayUTVaTPixSxSFk6vi6PJ4TwZr46QDjXFtNqgnFHPMcyi6jrk6sE38MgaT2x7h4",
  "key20": "5tgzeZP9bd8Z4pE7LVekdteDzyrMqpxUzxF744BC2MM7xWV67VHUHUy8wmatGTyToR1Y2P8MGzpppdyPURPhbsWh",
  "key21": "4jBdBQwaXgN92VnHjt8mQCXyS3z9BKj2SSGL2EZQDJUWWLTXCimgHiEB5tf9eM9DbJsPXQDKXBcSNYq2mhtwV7gu",
  "key22": "p9fphEqLKmymncGFPs9SUDZ86z3ZUoZ3nxX9KS43oRawHJ1dw3SXjADY75DovSzxbhavWLynWDVFGujjcWwmxEc",
  "key23": "5ygbHbJ1onNSPZzoxz8PqL5QcVhNwyLezYFzm9J6jBZWaAe5sYM65S9wjuSoh55TJuraQtFHGVM2UUorM6qsxVAP",
  "key24": "2txSdqyFzgUBQfdVUgeYmNoAUBWy8DezgpQ7u8EfqjgL7Zb9NTR8TXoMCV15MSXPjuuiknw7PSm5CiVYHKaBjHiH",
  "key25": "sybiaiMj4m9Xuwu6ksrRHyt7csjvxD7v9QeK78zeYh6WnNVJTXfnTbWAk28xhJ513jxEZhJiAgCq28i6pBBhuV4",
  "key26": "3c5LcNmpreCCPES7kbeG9jydXhKy7wLY8tLwZuJHwTWMyuAFMVx477HWTaWtWDY6jJLAQdXnSUEv98KCFMUxsFLd",
  "key27": "3t15ZFuGFRMvDCRnKBw7Cz9ovjGps1HmZP7nDR7GUHK1ENVAxsKsL55cPvj4Ft9zSnWLEr681KnGfRtdQBMRbntb",
  "key28": "2DykUuewrKv6z473KXVvUEGABRG7U1DPYpFEhLnxnFCuUYt9SFtgj89yxYLaSiTo9BS4BnxQcdu6Bkap6x3UfW6E",
  "key29": "5XzxShWcTXwyFtMpN8thRE7wcYGVm4wQRb1mKJ3CPnvAiDmvFYXREmjCWrFTF7SxxBGerC6mksSCNFAApu1zKjwG"
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
