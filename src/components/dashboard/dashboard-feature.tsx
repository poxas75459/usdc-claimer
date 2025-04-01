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
    "4vCFXeqW6ReJbtRPbtRWmtdjLbs7gfQzoMswAWJxs9w8Ci2hZGv8DdcZW39k6cmCG8onH2rBLqTD5wDLqrEbWHK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydFFxm3SCJaUqEGMkdZ83Ty55qMEgJDxo3LmgUshVAYQoHNFWBiZtBhQZ1XEiKRHojTLCJHejuyTWLHCTpKzNsB",
  "key1": "B7ndpY59NYbHGvF36hDdS3EokEQthDhK2K4bWKm3Q3PzmLrDYhw9wwCmRtKg7n9nFuyMCAGmaVxPmtoKB8ABKT9",
  "key2": "5nZdu78bs7pUcLCkVtDtGDcqbJii3XHZGpvbBDfned5CaEbzneEdoFKkzDZRWgfp1wfBaaB9WWLJrzdKeFHFhxFJ",
  "key3": "65bWug8Sw3rTQX6Ahwdv9qFvhfvCfXN7tZFCMca2ueUYDjEjXFYdsFm3NZpQnZMQPLNUdda37CqaPycAxSweruaJ",
  "key4": "3kL31QiJL7aT3vff39ZZ3h6BVLimd3NXyQDxeNhw4S3WddXtM2to4rZFHssvpuX1cNGWaZTJMk9BEtxrbpTJ7Gk3",
  "key5": "c6tGv6vguuxtdoW1TtUv4ypiZgFuS9U7f6eceRjs5FKLAY8YBepxRBRjH7eecvY5HYqCqw8cQt4vDT18GTistWn",
  "key6": "3vAENCxVsMVjUcEYBrBuSoe99og33KY57mjuVGouUVbw3BB4X9KRpVc5ByWMnxGXjYrkaBGM35GY7pz6YCYxEnUT",
  "key7": "47VC4e5B3hbFFe5XR9AuYPCAJUWbQX2tq57tpEXjHkGGdQEU14du3nYpugsX4XyAnzdJ647vzjMpDC8NsY1HbLJP",
  "key8": "5AoTtuBEXajQXhk5fWaBZjWeZEQGZLcu2MT95rVkReVFuqskfJ7osNRRTt7AeXWc5Aajio7VDqhfK5SYnNh1TB2K",
  "key9": "EsdzKvXycjSWXjZ77DpCTMjvbGvK1YcKyty6rRcFaRVfTeupMqLZV5CjSp6PCjJmPLPRE9urYiKdZ4szbcs2yDH",
  "key10": "vXBeA2s1HmWo5xz6SzwiKdXdf1ysQsaVoZBSr2PD83sKWXRFfEgmWfgixXe2MdN2w5uZV1h2jtcsjS692hKniVY",
  "key11": "5rW9megXpt4497XreARK3DpSuagfzKo2TX76tHBTzxAaipDss8aLKVh8WKrcmduTUAJ7GjXsoBdiYXgwqksEdw3M",
  "key12": "5GayJduEcej7vxPsYAfDo79wN5PWiW86etiKYF12CEURR4UvTt3RrEv6dCRoBGg2FqbbHyzfWdJcQDi29CtxANbC",
  "key13": "3BGociJzdA7tsMKzo626nSCDM1RywewZBzYGwuek3oz7qY7UKpT34HiXuL91JMEgusNqvizdLQnYVQKgucM9pQCs",
  "key14": "3zZXGxncQ4ftsYHP4JE3jEPrYBv27U89Z895qgQWhUrTEbRXWxP5HQGR7XJkUgS2xwMdcXm4id4rzmSyBTxtf7tt",
  "key15": "62XD9VtXLQouU4tXYibd2KpsnSx5CYbpL8Wed9xkckvfWCEU9Bw3zBpnGaqaVN2oZ8geVZt8PVSifsczxhbSXF8y",
  "key16": "EYBDAza2v66ZzbzHB67jn9YjsixBYzLW3RHCZAgxjBQ3pqBy4E9hMHuyVhWS7aGmcBEKSx1VpSzwcWPwwHAu1Fx",
  "key17": "5chBXfqzSGbQoFPx8yizXN18MDnTGst5DPoXTqY7d3Tvm99Cyt5u4VsgKCrfzWZMtzUJZtjd2E4WWC1mK4jKsk6C",
  "key18": "4H4iN7zwwAiuQCxeoSaSpx3yho7shihrNXPLT9uimc5g3sVx9zfw35TFWqeZLfjPUc2qv1BxVt5oF8B4CZkKWBdf",
  "key19": "25yu1fVhTmF6jxeHvFnvGbK2xnoy4z4sYSpAtoWDk4tbDpLt2RTZugRYqr2cXBMpXMB3pYAioUdzD78wCDTu7rVM",
  "key20": "nzEhgFg1pM8bpyXWkzdBtnNccEkjupyqHNEzGvpy6BFEkgh7Hh5C39bDFG7yyXjeHWUzoxMunbekVEguddcn4zn",
  "key21": "2tjD9mt2gtdgTmzcD6iLnYrrr1jiThozbRLMkrsDJGQH5dx2Y3cyMzZi2dYdjPhDhtVc4kUAnU4a98yagixFoLog",
  "key22": "4pepd5Z2XqckGQd5HY9vPAdFn8x26FvUUkMsAxSCUFdZzaXbMfinPhgxC5NrHityVw7kLKaWWK5B5jwyDfHJP4rP",
  "key23": "4KfFBVFtRjgM16uPcmaAWekb8w4K5jTVKRrjw3QsjvUvo19aH4yxYD3Xd6kHKwru4QJtr3sRPxiK6WaNGT2G7zfS",
  "key24": "29EQYiyDrAwyyHvD5LJuA8D99bwhjQSrW9okwm4QKzQLAfkMCZkP4SGgBYoib7jUpeN47FdZwEFgFmqwYLjKmaj1",
  "key25": "4Xah7XrSC7xLRXoQU6JN3hNHd1MD4Au6EmUZXHy6dzbnkKYVHZAQzGvehbfrmrcuAvEQmXVUZHaHsTUwDtxrzSDF",
  "key26": "3xEoxRWkUJqdDjiQZAKhceaXNRqyNezL25CSeQis1g49ZcNNtbYrAa616xkkScVQDuYEzzP5CofVJ2pb5PjQWJby",
  "key27": "2PXGnN1vAe6atnVGxxznsBxgpWEoEcCcjRYZ6p2FPwVMzknbkhAfLmCJYtfZkabffWBs6SJDsCg7WtNyJDtpGG81",
  "key28": "2YcaF7VxFvzDQitnooaEAVGk12yamoMQBVP3g76WhAe2qr3ZCaLWqx2GBppfXhR4F12G2jqfapjK6KXLKXzbdRVi",
  "key29": "zkmUweQ1xKVK4KpXTCVx35uGHSyaHkxcSjtNUv95uGUiXACGbdbYr2dvjDAF7YXeWqLvzxKgMiT14rSJM2e6jL7"
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
