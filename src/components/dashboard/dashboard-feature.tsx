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
    "2Lj6JWKcaUgMGZCEDaheN6yGWHce9WM9USxEBt3XEHebMucuqb97Je2uXKMAkU8u6dBxkChiyoCy8yDrSFFviC5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gySFxMUaK19sBT6TK21yqXrN7hGDZPbwvNBpbFqZvoeKt7oZTZPZZHN5NMg5qVBnYrx5r8nGNeJDL6Pubq2PtZd",
  "key1": "P1ZTYMptUKNCD4DJiZdkWu7uC5S87CBLLdwaP4YMoohgmJFFoJExRs89FCkEzkPFSLQkBNim8kMcfCmxegQyDUY",
  "key2": "3wnsQRCrXRtaGVV9jrAVhvJ8NYiQw6LsSvSGN3r8B6KTqCfjgTFrwWoR7yxZjSSHgm2PvUy7cqtPCvvwvx7s6Pmv",
  "key3": "2FLt41U1RfveQ1AgzkTWTpinVC4TGPqAdwwN9EGqYYuLpUueUL2UQ3mJ2frLhx1uhrmptL9eBFPgfjrUZ4pX3Z5R",
  "key4": "61p45nfDkK1H97L7ptRJvEnBj7e17dr6vVV6ezjzxktM4fZbcum42nKXYpeXgWhrDaLVBc1sh7Pcewavh4TL6Sug",
  "key5": "4NTfxac4q9Y7JauhCGoSUGHfpZ8vDEjtnFskHyQXxvnMfNphfi6eYJ923ppFy6xxANJwaf3Tm1y9fEwxZYNHaTw1",
  "key6": "KuutB6TRyLEt1rrEQhkQUhk5Wmvr2xJkzoVdcv46MTAHH1XQQQj549yL2L3u4ssEKprdQ72qrucGMFM3Uprghdf",
  "key7": "5AnmJVmeffhXchXG4CxyZr7dq8xC9yT7PkbUmDV32aYCK3QvvMv2wJJ45SzdbK4uocwQ5jsbQSU38TDNWsQDr7jz",
  "key8": "2BNadGf5Ui8RyGEh8YWutGKCMdSkVmFWBoZiE46vDomp5ExeJCTdZrFmjZjNEEfdTL6bynegsgCJWUJJ3vcXX1YN",
  "key9": "23UyCisYAcUkUtKy3jj4vtstVf5LimNgJDnQEJn7GFxGyc5DHXXywC11MMDBYzNTrPNsGBJNzZ1YNXsCqAxvRYwK",
  "key10": "63j7TDrYwCRMSxToRi3NqV83g9zQv3Zt9DwZD7AvHMLguRcgYmzKdHT1kN6gvA6btkF1YrDC63vnXT5deWaKKhEM",
  "key11": "nqii3MvMLkT3x2cpgfLfNy345uxnfM3gyz8vML6EmYDe876c5MYdtCSZ1TBmuToPyQoTpXHGqnxkgiCoSg9BPY4",
  "key12": "GKtFnmDxJVwKBHXhMq1jcQKRiDPkN1EqS5y1TAHAKhqamRtYpegYagojoTMxTPHm7zUezJvyM1WjYnf2ieLya9e",
  "key13": "4MPLg7xJ6NGkg11WZEPj6c2GhcQ1M88QrE9WdyTc8yy1gWcdC7HXUKpLm5dpFXcySyrh2XaoCGaVSDZgMnEDLraq",
  "key14": "5ECtDckquz6su44pJnnNgvJc8WXj5uT9uDGxBKJiuivc9aQxtoSi8WaDsGuP3WVNhy2dhbinTTs3s4g7JFQWbMKE",
  "key15": "osvLunR8h1gCEWso5pFEBmVRkZYstUmWAvC83jJ8ZGzTnTBcsaErdSNk8vbas6StxtGCeL47FzzRYJanbVSKFi6",
  "key16": "4zmX3yGHzRz9BK7M7kKXGRkmzmMh4e4BKEPCehzDjVoYzvRx9kxPUNeBfF9czxreLFf7Hf4tPD66d93mETgkrxK8",
  "key17": "3LRbr7RgRxtpitmT7WFizuLL8JWmXJeQNSmb26gPrVEuuPdeQ2FEzM9DfBENkJTuuDKy4oc53RBythpf3ZBY7ynb",
  "key18": "8vUCvMAVi13FAkg81DYasfMDxvCsPTeRkxgfsxFmNyQmYGXbXNvAtJNNqr7KqEDxVoY9v8JhMVJ278o9H8naUpJ",
  "key19": "2KP5EKzTaqVEVGcCBMR7mpjnNkPCc1pnZ8V7wy6EYr27QtoAdUgyafsDf4eUMEu1zQnhsw5oKghqLoy3EUP5R9jr",
  "key20": "5TELWckXdoE1cz7LdFD5UUWJn7R86z9YVwjj1dAA7m1Tf8AzrCUMbovyncur1XfspWscEyWuBksHRGcNVM1eWEkS",
  "key21": "36g8SvvK8Qo4qozqF19vtRybtEhXegXvDfZ88QL2Qc1ezsvgQH75vKjvupHqEj41xqQunQYmVKJNU22Qhj38xUyZ",
  "key22": "KCyjsrk59EYtF9f5X7j6UBAkUgrLXrc6jy8WsoN61bZ7inU2HcvNo2BWLc34TzrfqV8marHK6f45F9kqaRSTUwP",
  "key23": "5vz9DaaB3D5SCd8zSq5fo4uGh1qnngLaQbJ2wAsa52R49DXoCYzF7X9ZDzmgRoXCzKGV9rb5SA1r8gGFYuui5162",
  "key24": "4XEWb2PLHrEPMhUyh9UNRggC5kaEHBfCxEApfRaCn5oCNxjMPZ9WV5gsri65opuFwkH13wv1ZbS5RiKQMYj2Edy3",
  "key25": "2vrnDubsFAtDG842sWbj4CHVrhxsJfFA2VZpK8nepJMa7HX844w3iTbppN2Zt2KtAW2mghzNtWsRm7K66qvG1MDB",
  "key26": "5WA9Q58tULDSGwob4pBdXcsUAsPQM6h133Ywk8MGX7FaCDYLXSVhYM8eX1cDiwgLLpoZTVEijBdNUVLByVrs2qMr"
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
