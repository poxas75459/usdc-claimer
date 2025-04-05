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
    "2S5hUPaSsWBnYNsEZgvAD53tYPJUpZeAZ9ZK6KFexrw2PjAoeG6C7j4K6yUxyV6ivtTkXHpskbmavgJDhkDztAeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48WXZ9S5xwxDFfbbAuVKYkXWy5Jp4VfjYrnPTxeXgEC5EDqu86UZeSAmc4AS8LkGLVgdYWoh49BrdGuFe3p5f6T4",
  "key1": "cRyk6NhkB3pZcpqzMxvNiERSXbfeVsLYFyUMBu6Gc9kW29KcW16usjdM9C3529RpDt4DCdhVcFvYZ66TYta1g2S",
  "key2": "2JiJgZ63vkjd9oVWB8CmiJEpnaBRyLUHoTdq1zXAzhv7Z1zqjxQnNe5A6TWGzryFk8MTCWSxwezKYvwtiZKCTLgH",
  "key3": "5hBxVtSHPKEfVYMqv2uzhZQHqPVjJ8AK4QAUuHLuaPnL9cvM44upUszM83VX7XxNsNX5hos6feVwj6ABVGj5AogQ",
  "key4": "5GmMde3BL2WCwJpweUwHsmBFPqR48sTHwY9ynnygJa4qKGzUuanZimsF2x4BC4xpvPo3WQphiQHvfECJZhmUd55Y",
  "key5": "3i5a6trFy9FmfhK5DF3zZ5JGmrSo88MKV7J3bCdLroKDVCCxiC9WJDrQyht2oqF34A3EzVueV4W3xkmUxQ8TPuBD",
  "key6": "4KVx8DxdPNfXu6bFTjDLNpMuBwXpQEsUHf5Twg1kcLzxXfLutAfuu5F4cQQU8CxZrG5x7RrCHNWFWKUnkmheDToW",
  "key7": "4NrJGohzjmiJLNkWVsVzYcYJZce1HBeJxydhTNCCk81f9C9qMozWo78bzdf3g9xvyXYREyKKbTwLuJMMfA2XyHw8",
  "key8": "3Ez2UZAXaAkWJNPdB51DpWR61Y6kkoMiBu27ArMQcLNvuvQgtxiNKpjcjEELu4uThFrdCk356gWLMYUBh3jFqPUR",
  "key9": "3WR63mRJdjKRE4pvxA7ozoYJgPCbJNTKajDuCW1Q75QKZ3R6gPbYR5ob9ufoRsZMcErSUykSoWKvCSC7HH3DaSx4",
  "key10": "3pGkmbAP9yVAjrb2UcKDCx1EuuZ7QbsPX4N5zsha74ktRC1rv85tKtgrskD9eXj5DBxb8bmMN573tqj1JLna5nKh",
  "key11": "3kWbioXZxWipGKLYgNHN7mnSkXUCuKpUeySsB9b8qZHWNxZt6Uwsucq3NHWyPCw7X2wVWiBZMkw9YpXQuyNVoipx",
  "key12": "2TGd3G8Jq2cRoj5Vj9RrcB5TGuprgA9v2srsLHKVimj7PTcct2YQGmhTX6PrpmXZH5M3tA2UxK18tkuvbbry1mUF",
  "key13": "4kBVBurSmg2QsZJs6rZXrAvWkTu5s4wf2XGosZtiuQWkiSX4KihzpHTgc6k1nE5DquqdwaSKXDsjx5ci1beJtZc6",
  "key14": "55WLxSbkp3Q2M9HMEyChu3JoWFqi6xES799t4MubpNKB2Lmj65jTDij3856erthjoCXVGQPYYcm13RnqtGtrA9gA",
  "key15": "4megkfs2LjDFQcawmYff4fmSMU2m5nwzrsWsUCXPpKhvbamVkoE9V14VhmcbWjQJLR4DSFcqKjJgLZmzCUh6UJwf",
  "key16": "pYRf1rCADq7A3CFQCrXnwmyxbzoFt84Fw7wNuP31P7VTaWEF2iQd8AbEY3dd1BdhVSh75d2p3MPLeKgNwK17F6d",
  "key17": "4JrrTXQ66Aofktzi79xHDMVyWcZD61htQNk95qixchDL29J1dzxmtxHV6enhfycc2XETh2PbjTuHUxFgEkkPFCQs",
  "key18": "2mHEdy1enKTisXG3iy8T3ua19fvdwY1XnhQXwppuupSkGcfcsbmymGLnxSkCScF2sqYJby1D3czUqwXEQkZVgUVT",
  "key19": "2qbKgQc6quHaSia2fNf7egcCPRCUbEy5JjeQNyCLKFdJgBtZD4h193UVmfq8ZfhQUAQgmMTgP11ZRDNGHSoTswxv",
  "key20": "oH6LmKyyVw7M9fPUqmvB1umZKC4SBUyEU6SbhVib3DFrxY1vqZdNxqKnqhMByqmC4iGpJ2894C2Fim41UfAC6vm",
  "key21": "4DskAB63ntg9FZeGPJNvuwnHCEGxXiPnE1Ese2Ls8abbX9PAF7c5sAuovDoDQUyLQiZtLyun66TP1nnARAzq7A17",
  "key22": "s9CobDDXqkihEQDPt2NZ7H2KzDSHS1zTMV8PTN8K7LVftrz1XKksNXwAjxRpLJNw83RicqT9Gqp3A6hdwV9RgLa",
  "key23": "2WA4mEToj8LHHP3Ferd5hErHsWJYF8YidTUjZNwWn9wXGn2FSUFek6jBB2sh6gH89Rzvg44FZbkLr1gQq2VeCbme",
  "key24": "3fWdiZMxft9fBTHrCojqcsVJM8Qrf7ostZb5zCzThKi9MViXHLQnf2KJggbZZD1NHNoiH26x2zt5zo6yHY5D13T5",
  "key25": "2SNqAGHRDGWvQB6gVYTmTuTqGaufP89vHZYZmYrrFewpSfiXLFtXLeAZ3ohV1DXxjVvK85VJh2Y1aDCVLw7i17ay",
  "key26": "WXsUiDY1FhypwprxkECndNCdiqXVPp3T8RepS1yoRX5AEbG86hJJ4tMq7W8HgXgFu63tN2azPBd7U54qBaZNeVi",
  "key27": "TxX9tY4cCvYSs5yQgCzX3SFJwvRpuTna5aK3UGE8ac695xKngyn6dFn8FC2btF6USd6eUgcEowzYnLSRKfGDyen"
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
