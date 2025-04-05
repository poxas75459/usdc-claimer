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
    "2ycupUEAPbbaQPNGfNnMWwnw1saoVVrM3bc47uzCf2GXjtqwtRiUevbzDngisSqaJG3Sogsh2dNbvNQqh13fMUyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MmAqzg6MAbebZryf77K2bEixszuryGpVJdmq85rph2XcTr2wJLkoXuUzpkHakkexNGebv2YWQoaTHctg3YBDrGV",
  "key1": "2uKQZed27beM4DFrwVDc4M6v3dRUJgnTxKNqBr9eC1xE38B4xHc9BXb93fDBq7gmpXRQhX5bToHzEgz96Ngnd48G",
  "key2": "3PB1Bn3MjQ7kTomteaY7nRNkLBAqc3XrQnTCts3ysssDAfo4xpkb9k5L3NKpvLHnJA1twwYqwbht6BjziFmPWF7A",
  "key3": "5CWBcA1Pck6JJBJngJsCyAP6URpqiA8We7z5ue1utxdK4MupbfkqiZvhUKqvtEZm2Veaub5csAMP2BWUNWw9p2Wq",
  "key4": "3ucKYJnqxcQoUBhJS3w7F2WuYn3siuHoqLR97iBWASe4JHRkJFRpeiHfG3KBiSyPGXABnfgYfnDWMUGqqYSY8UA3",
  "key5": "5fhZ4DUXYD6ZumT5g9C69auKS1AkPeaLhmeEPmKkUjgVzQ33Gc7Rc25Qxxd52zYmUJarhmp3EZsSdpA4VWFGrQXT",
  "key6": "2HPkvNk7zJtrrs5ghc5LpmUoHNg9zKYr6dhdJRR9Lx2DUQwEJaNesSYCAguMa5T5LJiZ3YDYNKzRS6SLkcMyYD8e",
  "key7": "5UwiyYjC6AcQH7GC5B7GZy8LRWEeyQ7K4V4MYpf9JVs7gDhJUzciyYYuLwJmbFK94s7Ue9wYkXMqyTxfkaRRMiGC",
  "key8": "2k4EUchL1WwynrewtoacMZAnQqxpcQwhoFtLdwPkNatm89bfqu54GQgNu5xpff5MnortEN7Jw7rPzMAA9sPQaDbA",
  "key9": "2bZzN22YBZRk9qvRP4DBTMsrKG3rcvMWZWBYBy9tGAberJSDCW5uenYWYW5zcjcsPDw1JszmR84YU6CyiYZr2M6F",
  "key10": "3ZpbaEMVqFgyuwYdhRMHYwzTQmP9MThSS5xayYUapJqjBps3FThq551Fj5uvymkHqCHV4UiGzoSs8XFujag6fyQq",
  "key11": "3YVxZWDjtKYgPKb1e7GLFWHXdWLy3S61HSVgUk6hxhocCVjG6rmY89cCDFzfrL8MzXu7kvs1a1uC6ZfrQ8J37rY4",
  "key12": "4MVucP2vgvJjTZFDHvt1ZhqcavXHtzccDD2CbphUNTZG1xPZ2fen4c3upEfNgLX36ojNqBy8M1LRL5jb7KUTEtkV",
  "key13": "M6Tz7agqWJsKbTeGtpd6cA4ZojhzUmJHZEqrcgGVs7DHrDD9D2B7n5fU6sgfPGLtw4Jrzxuw4En7ToVQN5SAwwx",
  "key14": "4wh8vqZ78iup7hUGqa281BfoMcdVu2w4dJtpZtdiyFz4Df5kfDcBfayGYmAm8Z5HUcR1xCtb3VUhUzpdx2S1HaxC",
  "key15": "4GhPko3MdQAy5NmKRcPPShdCgMdo7H6mU2Qw9AQqum75z7omsVvg2wCAmjeYcDNPSz7pe7GZR8FowkKNCYyfhoSW",
  "key16": "26P329uWfivTxfUKPiRNQXo54DTsNGBMeKGkJZvUnKzWsDX6hUG4GkAFVdWnwsAxr2M4uGzL3AATDbM2PLXM6A4W",
  "key17": "391c2VewZMMaW2D3yMsbgU973MBsQXLFqEFQttPuBdEW3H6P98WFsu5x9rcoApdo4djQNBXNq8CoL59Gjkj13gV3",
  "key18": "5LR891hJrLSjx8ASZgsAUkiVs6yKqUAEx4m3V546qrgr3rmsh9SyeSjAQttSSxyE481NbATYdChT2teVam4w2jF8",
  "key19": "2nRUXCBkWSDXeNFBL7J7nbZtBmCKQoUqD688g92MGoBtW2DdF9C1bwiMmhdpmNeCPzN7N8PRQBEBBjRQ58shtxKA",
  "key20": "2EkHcpicPZoEBWxabwJsieFX9CnW19eHgg57DDM4Shvym3u5vLovMJ7wb4rQpEW5UMzrVApC76nwRTwKWtqgdvoe",
  "key21": "2hfU7WWRoH9BfbGQkyGA8WZdry2UEau4NEmaVbrQz3BQnpKTUK671hUfcLXs4C7612xxsEiRExdpiANJKcwrMnc5",
  "key22": "55yWSpxGA4VmFZHV9wTojqppxMTNRTo7QwxPyU8PLxi5nEREfXHcq1s55YLcWqDVXf3kx4rzUp4F2wXGjUC4yU48",
  "key23": "2sGJDh3JiS65wfEEWHRUYgYkijXfbHRgZBcfTdEsdmAj98BVHSA3w3Dw2H3JqXa1Nj8AX3MzzqX77wF4XkkeDjDK",
  "key24": "36MRiQ647j3a2jcNaNcA9AAjM9YVzn2YV9od3WBDYe7X3eSawwxDoGvpGtSpXuj7oqWFsa126uP1x9CD13p7usDA",
  "key25": "PNHn6hCfQttjGPv3raDpf8cF6M4QrYZomMcruedgzahP4S66jkQ8cJpZWg4HHgjfkoFupYnpsffKhnYmWvnkkeB",
  "key26": "5xvXatZC4Z4nvb3VDh8Lv5EVvzAWuNvFY8iq4HxmidLzrTSmrvL8YTahxyQBbeJHFVeThZtXrdsjRQSonLaoCq4R"
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
