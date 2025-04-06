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
    "4wF5mvwudLxwWAFTRVkVZ6GqZ3SouNBSYcpBP1FMYZFyUb9QtDWo5fdqktVUbkiNGMLBHAD8HAsUx8dWMq6QC245"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j7EoWAMUtScLqPa8BHpqaCwHm2cxqNG6SqUyRYaha4bPyyhGG27YSkwAbGDaCC8Qgjo1YhZz5YBrcQJeiw2xa5U",
  "key1": "2JKVGFfinBKn8r8SLjMcBppUAC7rYwXNTN7D2rJqyCxVgq224ACq39p8s59b5UB4ZREbhSHAK4N1VAa193ciasXs",
  "key2": "2mJS8NkoojB3rGLs9BQphJJ9sKwTpmhAmz8purkFHsUJKX1ukFjDRkohgvpjfcb1Pi9JsB1FqeDn7bAqakj26hmi",
  "key3": "2BjV3or8ChnpEKftboiiPVSJ2U3Kafws7SKdKv7NYu8mbEbXCBoEBJeBwcGBEEYJxB45TSj2CoVWWiVw7B7ZfpVV",
  "key4": "n3fxApgLmwPzZXyt9ywAG9sf1XYZsW1XkkJ3TWYshJRzbtEsyxCDgrGpvLfWoNZvhy4R7hNuanHGbqxuaXJvDsQ",
  "key5": "mEVDq2fJzLVUMe58vzG7FGmRr7NC5pDVcbgLC2SN4XGjTVEfgrVtXGGPKYcgmbREe8GfhVsEhU5noaTxKVZQkbd",
  "key6": "2pyBJHYVvjbQecZRPTuFFpnGqEYwp9LpoG4Qd8q4diMDbbareAxUmJFArrB12FCwHRsbHZhsftqrNUWoZ5okumU9",
  "key7": "5jCqs6EmB7X3eiANLJhFmMR5PMRnStrnEqPmr2nZCBpKVq3rBGti3B8hvf72ohtM5nqNoEG9Tq7MuQj742ji45MB",
  "key8": "ymCqaWG31GmyVWdzk46jabpfeX83TVSszRFW1idSyAFLERhxZFeBJPg8k9XmeCvHRu3cbkrmgKCQSFrSEmpbTgr",
  "key9": "3tFSt8ZajsmjjX8mqp94xMdX227sC5L495GyGSNdBobJtU2H6HnMojHtiHBRqtd25Z7GRFoJr52HdLNf6pYhFGJp",
  "key10": "4munxYhuQ2z64F1ApTpBWDNfioFXhqFpVWHtnM3E8GYgGCUjFtqjtmp1PZhipQG6edsZyFqLXFvyXa4ZdRCsAuYE",
  "key11": "NgswcCkZYcHxPH6AUCrooRdAsdMxX36sYgaNoYRE6whZqY7ir9aMyWKqmrnRTpzzi9wAzFCo45noHzzfZX3PYFd",
  "key12": "3xgGyKDXSsVkkRfSoxgvsiVbj3HddGwo7mJXtzjzCVWGLUNafoi3WUacfsFebeZadQjKj6Z9sSMZiWnKPUzhQ5Fg",
  "key13": "2CfgzfyBjGjfBpzwZhNz247jq1kT3Bj4xsDhZk7mSDt2MGm4kkp3xzXwnZ1SESbbgspgVcV8B7xZVDa5siSggUah",
  "key14": "2vAD8swNjTsbDhBa1Am5fXv1Q3PgdGCn8kqfaDraZuekZ5giE5n7Qf97M3jz74gtYnhj2RZZNdEujMqjjUNPsbtd",
  "key15": "2bHoGVgqTEmZv1MNfjBwn5D3jAEeaEMhPcxc7rmtHeGLyug98CZsJ73vb6E7YABZiqw4h93dkTvndYqCjCFaZEHA",
  "key16": "2RkauPsBzcYWZNCN9QoQLY7HdKM51zaSs4AtmS9ipcHpqCqJFdwx8PYwtMZv7RyoqDYDkKQGRL5MAZH1kErHv7E4",
  "key17": "xDqjPekGdzjS4yjKLPXDdDqY5PSsKVaeyoJJqzxzcYHUCfi3LjMVkvSCGCaCgqZY1mgBATSPUERYcEGAfsnaaTp",
  "key18": "2Bpw4gej2hyeLWayV3VeWCsCzA3aLBpHp4hzrCH6GpKPTiNEHkg63MhdUSbPnzUfYmpSeFSNipCdn9juxyprxUhG",
  "key19": "2w3ErH8sZbMM16aNqtzF2KH2ZUxrgXq8SHh4SgZzZmuZvryECAaAvr3hWToNUEBanFPLTL1uM1WMRso3He2txaeg",
  "key20": "4Jr2dp1g3Dth6kKxwavM6sRyNpJ8VX6qZqA3yRsfdvb99YpEbWCci3ghAt5cFaKcVsSNsLJbAUKuHqzPDJXnKfWF",
  "key21": "wg4LDKoKbyD6onbTEivQmSFPg9qLgBJcSrX8SLbFrwt6L14hxzSCXe7qczc7QpiXANp8aHc6yQHmL5fRPw9wV3A",
  "key22": "3LAu1eqFi7TYc8dqimaaWieERUoCiRSUXNyJsBPBE5XqqYKq8vMe5u6kJQ1x3YEHdsbqmqmiM9V5DFb8yRDNbrqa",
  "key23": "3LNVHbngXt6c16ifeoqBEsQP6KqRQKXurhHJ8PK2DnJYyx1iqjZKSaePgnNS8AEyv6Gwjgtpnp5wNDaDxE1Ngdn",
  "key24": "gii9rnXLGyS6SzgmggMwKZJupfCiLNy2sbWaqNq4BnCc1ESWvNwyFu3ggYxa1a33sDEfYZhhirbeHh28rv4YoFC",
  "key25": "28D22FrRZSQgo6VCHhyL8XDJ8hQ5gAJ5kxPEKAdpAhQhy5imeYW44dY7tuzGuKETDXjNgZyMSezY2tCsc1KVCoje",
  "key26": "5hBNvMCTqaxkWd9NGAMyfxf81nSpv4gdGQC9DtvtsgK7FGph3Xk6qp5rtNGF8dExkdbBBEw76cbXEUYnHgWzzk58",
  "key27": "2V5vHG4BCMuzk8WXWhpAZ3tDywCzH4ckyVhUvviApeYddKVTyD88ahda89nCV7EN84gPsXuLQib9V5c8Jrqbkr6Z",
  "key28": "4WophLfmnV4SaDssa7G2Hp659o6wwQfoDmjZ4PXjVj9KeuujqaSk7VSyvLaXJJGgH6U1rNvzrRLMYkTKgDxWhgnu",
  "key29": "5VVBZbY9KoUUv6VraZoaqtwLmMpLZsYQHyyeDY5JazcPmhMiWf9G8h8csSiYLRVRiCxanZqLYKH1SetP99kHjYKx"
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
