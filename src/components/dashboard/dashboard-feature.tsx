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
    "2kwyDd75oh3hZ7gq5zCxZKS26sL15YZ3bm9WfsaHTEJkbicMTQiZDBnWmcz62BmoLv8MVqKBAYEsFi2SZoo1JT23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41i5GPtU2SvTU47VHpMHwsMa8wgwrNCaqb1NEuNCYS73hhmVr45K1hGtKxSffK2T887CMxutQVhqWuub2pHbxBCa",
  "key1": "2U6oCA4VnHpBHpBufjqkr13wgmu9DbcEfHMTJaJEUwZmdCZsB91nP9rHnL2KDxMbjcQRSM7njoJU6cgStRRZhr9c",
  "key2": "5WVRRkMqnqHbeS6wCKSeqRHr7e96HT9DDy5JStmsrTJDXtfvui1vTUJjqPcyTKyp1q3efoTKCSY8rtoMfZaVtyau",
  "key3": "3x1UdJNsCKqUp1dE8fRcqUbrUHbNdkXiTvMpdiwFdapszZhUGpiRQckB86eK35VY9ihvFe4NLgZqbiSVPveJgNKL",
  "key4": "FLWCHKE2eHe6SA8B2qY7ayKEAcrX3b2M9vcAzL3C1h4eAuoYMqhGZhXDg3APmSaUmaVk7ciVtLSAhUme95yvnRN",
  "key5": "Ko8sz2wmdcZXcezemWHrw9TBWqcSbT7Sr4zRzN4HVV4eWYfh1k6KiWpyM6Z7NqHnSsUirrBAyfDGNFQT6tEbdVc",
  "key6": "4B6SGKLLRozY59n69iBpXRY1dk2uDq6AUuzk1B3StPruJCkVGssGgCt2fCw8hS1wFrinRp3WKh2YVzhK5w64p5W3",
  "key7": "41YCWDez3JjRmzZ4bd61vyQ5zjA2WCVJdbeFFGXz3hfv2CtGpGPUpSFCTXxFvGU6K7jmkGmGDmiSD6j7uho1tzWq",
  "key8": "37eEdaSTsxMWtsu57HSvQPC1Wavin8kusqtw9tF3rCgF5MCxeLRqB1zcw6ARae7SZPyWRsgCjdw9irnRbHXXLeee",
  "key9": "26TpHff8nqJvbCyW47tPHnMSXovytDRyhBsXL8UaK2ec948MUSWGJirL9nHvWTe6GrAzornGmwnA1HMcdfFULMNC",
  "key10": "411NWqe5GNch6pnSupCTb2Kb8hSPvCHjsU1MpTrLHDdNUF8v7ZbcLAe3vTiQLSwAj8hnAZTxCtF2HYzhHLJodtT1",
  "key11": "vF9H8NjmvM1bHnDBpDQoqNHhcfBQ8KyipUbnpTaSUvhfTZLvxtjhbje7FcHxMV79kUzocdGzL98cX6HAEhE7amR",
  "key12": "2hYRXs4Grd5fwrT2YXJ8Gxp3YmaPRdCcYuXudxBupjSVfMY7wrFqcaCNruKobGhvfWiSHKBbGNmgEfMnxtcfXP3g",
  "key13": "2Jym6D1VaoxMGpQaPtuBdqZtmrvEhDVgVkau1yHY8yS6hPZ35JAuhgX8tiT41cQN1m2J33ACXD89RjYXNvD8RrNf",
  "key14": "3vycZYwqViQvi1ycVK5zXwS5MmqSjQqfpr1y6XfauTdQATcMhM1dqii6bdMST8aVj477WBaDLabMBQAtu9jMF8Nv",
  "key15": "3hCu7xG9Ho5MYgDaSPJdPM8DjGRE4BEHFXHL7rBv8FFqocmsuVXFUDgVqK1eHW88UbuZYuqHjt23CEfPBsde5YWZ",
  "key16": "8LtkuWUbew4jVga7ZZLLewSi7gskNZLBJT97ZBr7icYBPUJTha3eS2FM1pAWcn6yanaj4o6ySDTwo96v63VFv5Y",
  "key17": "551MNxMFeCoG9RNqmNBsFdpeFNubETxXFvXaHasytgSqfkfnvHYzGCEWgXu4Utjt8iQCabg3DJC71A492ELyskAh",
  "key18": "55xqh2zABXVyx475wof7ULUXAMskzXexLbHv1ZZXQNJ9awRBm7WpPJukuSfrKB8yPJhCeGdczUvHF5cN9MkEjNoZ",
  "key19": "2p6LmkmmMwBcDk7cdF9YM8GcAbGt5Ej6qudBwv8CoxSXQnjwXvR9CuQZfb7rEyVvNC8KegQJghuD1CoRC2kw9ASu",
  "key20": "3YnDJUsbe5vfZasCYyKP3VhoYJgN34vrAxvAkFtgaWpVAXQ2Fovd6txsVWGrS2nPs5VEHTu3swwzyM37zrSrRsJA",
  "key21": "2hJhJHsspV9CVbQ58spYWXZeNuXTwre1fsWfvSpCiQGTy4rgcX6y7pudVnp6nnX8x6ezUSrkns8q4KDKMqPtQvzH",
  "key22": "54or2Ey54mMv7Yico7WgyvV7k3NDzs9AQ4dxjmz8hFm7gVd9CRp7EoKg1GEFF7T2JsLCPRx4ViHEfjpkSo2uBfBm",
  "key23": "39ZvKAzYk2CX7vseHvfzD8xh5vgx2tbYz9sxM5xx1pdrwUnzqZjx4psvhe6ujZGx8GfnQXvsmqQud9XWRMaRCCPA",
  "key24": "4Ctp8yJQAi3gSuS5Wwp2iHMgTMFpT8WLbuGZaGFAd2n5ChWmEmCBaNnr7STjH8sJNMNLmEvVNHC5ux1LFZS13KHD",
  "key25": "m1WVJceWc7vamQLGuWneM9Y4DicjUd2Z2QJKNMMnfkL29uaWTp8gw94s6w51o1jSbVTKievZqFrSWmLDQzLmRfo",
  "key26": "432mTb5UHpdXcAJkBQ9dZq1uv2TGg89qMhbaiAA6CrA9cZZ3FuCEjRTEFy1WWFrv2y5NZ2kJvkQodUeUn3SVutKP",
  "key27": "3r8WKzZk3KDhauxFuHVjPsdd52NUgtqY4g3jvJ9fTKbR8sYNUBLPKEJ9r96YhF9thDcWHchXW2p4KTATZLrKohZB",
  "key28": "46MG5PEi7KMH9VAzrch1tZBAYcy6ppC1fd8sJFgbRJ6hkGEUdr22JYgVUjU9jLLLuTQ5iBqcLSKkuCjDysNbodzd",
  "key29": "58SpjumiHAHkGuYG8Su7kn2xk7E9q5JiFzVcrqUCfZRfAiYb9bhQZDMyayc3LQzxX7BJDiF8qY8CJmfDhcRGbCuU"
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
