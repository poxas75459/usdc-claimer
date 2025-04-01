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
    "2SAwiKsADm3uF8CXiyau8fjaNC6n1yUnza3njgmTST8Zu8dk4k35GKAnBxtqsyvRD3frZoTVLCZEKogUUN6ZpGs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ySwSa5mdsgfq81znE3BWjpjPYsUZD48Vm1EsBZMLVDM3atsMLikp6NEU3mtHFEpgPFXGBUejX3Spa8TGtvvkPBp",
  "key1": "2nBXtETpNQnrARnLeYhSq2BvgMyxRLzFQCZQsoVHgpKPWGmtD4o19izsM8xM3fiXsqwmzjmiHeGtou8bJqX3eBH6",
  "key2": "2uPVAB48UWhPBn2nshuF1399NdW4hDG7HYNxFDzCuJstERkpudrFUdpjqPK1BHRaHB8GAu8SF4kv4wF1LBJPGt2V",
  "key3": "3axDRkzsm2hYrwF3ADdZBSWbH27rSsCMKdgnoPGaK2VeFKkLJmrnkSxcs6gAFYKCCCVoi6BYgpdm8iATxKLkRHYN",
  "key4": "42Ms3GpjQ4acSTHMwqyda4VR1nhvZhiXVB29Bar1jRQVBd9CE4z8ZfLHKRCC9rDazhKUS98Xn2kkr9CCurNoPYcc",
  "key5": "3g3XA58iRYPjf28Hn22jdswN2ptc2AbuMK2Fp99nKjg6G7XCZFmEChJz75cufdtKN8TrTEy2uMvsnHNGdWxssoPP",
  "key6": "EtfudDJvZB9VXSf6eKxCRj5WUwPgKsfawpKWsoNoHmfAnTgFGhvkmwEbE1c7EVCvJXXVxkUf51q5Wf3CDfB3qjr",
  "key7": "5dEgmfSSBm1kCeM4m7jPhNuZwqbUuZaqJjEvd399YK9vrqCLYg5QjmB5hBxoVcSKSPxX7kyMZ98mB85iBVpMiPLJ",
  "key8": "3p5uRftNKttopX2yQqU1Zad5U8rExguB4GNCw2c5yne7Gj1YyEc627bayriATaXY9VMNkB9eLPBDDNedmCfusczp",
  "key9": "3g6GwM9jzRTnq3Cn7Dy2uDSF1rsCCYYxvw4DG13wXdRrE8HiWmdYS7HLBQs97rmqEdufRGgPSDqeywrGHVqSJGzc",
  "key10": "LScpmdA1e7Gxr66oppWntfaGjqWSNWLQfh1UBpSXvswhjeJT9bTuuEUguVdpEeJm1k3ZTjy2b9BMvHzHn9kmmxm",
  "key11": "3Fgaj2Gfs5hbzduKiEA51ZVSvbBuBqsrsbZRk35zPTGnp3a5qCdiPHMZHnbFGEjUhUdx3mu8ZMP6u3F3Wq93nBv1",
  "key12": "5k6VNo4Tj1QULDedAXRcBBGEAuCRnoquXQ491CDfCKxZAF1GvaHquzSjBWKw1CRDEPy8H6pL2tx1acHDvibcKNci",
  "key13": "DbuU61R5r25Xgy1BZ2SBENKt1uo4K6v8jkAprFwzV98NcKeEJjZABYvKxZ3ex8Qhkp7WoY2LVv4Zm5RwStL1646",
  "key14": "3CaSptLCmJvPG4yGxofnEhUxibnZJutfTADYawHPLP7biXDy4hJ85HGB76W6v4hhUvUx1p8VpxWTfc2dXdYpofsc",
  "key15": "55wbtCrWDEin5hN42iRJkJGTeNjyVxyatv2uZC8qR9YsbWVxyNtWhaNJ1hnLUBS9Soizo1HwtRBRwmKinQZkiZb",
  "key16": "4o9Zea18BFLFoxtq9iPnju64gncJpg5kcmVSaJVtB6SaRyK4Vo2H6oHFh3Sko8XY1dkiGs8ypAGSyNtJTHWeHSiw",
  "key17": "o6GGydrPdjC3A27hSih1u9vh75b1QgnhEgK73w2HuWfXJdQ4mrG1gU7AjBxDnfTWow1fF9QwDz5pBtoEVUnYa2V",
  "key18": "4jUwGWqDAWJEd4W8QVAiuzZwxCYQxmgagcT4BJank5X2sHqhtZXv8F6aYzJhePrWPdMCx7YoEQwCcwz5FcPn2rZN",
  "key19": "2pbL2TQJ8eBUqtbPse9JR3PR2TKgMc6XtwXt7xpqtFghkR2oB5dx565EN2dSoEtbAcXZsoD371TVtpMF6XU443vT",
  "key20": "2D1q4yjaxTNELamkUEqYbqduaa5tWAMCCm8F9JV2LSjowCAY41ypSj72xTMq1kYaG8F5P1sSTocep3mUaeeGsGkt",
  "key21": "3doYxJ6ou7y786asXZcD7yPBZC1emPgT52FvpCemsrsNscC3AS8giNZpFn6N8JZCsQqDD17XfBJWRgMYjABuKcbD",
  "key22": "3cfsXxHftD8jpNuJSQS55kMCa9u3LjuSDvKdj6FEzRSvmP9bfgH5MdJxcnfLExJKd494XtFfLNMJVNnDixqhTj4M",
  "key23": "3qAUsucNtVVQ73zKPostKJUp6GSXbSKh8D6Vuym8canG8p1uv2tF7eAhJNSMpR2TaVbUMfwMtNd8GAMN8vcSnLC7",
  "key24": "HJBj68PE2rtrzsJacxUcYkQuwHbCyJXYD8VV7mBnrEuB5WXRu2wmtheHqQpJU9jwfqQMSty3oUy1tBQK4M4SWK7",
  "key25": "5KVHyEbRtY7xyftCaQnHZrNE726zASvAN7cAKwXHK9t6AKbRtctPmzT8eCfXWMTLxRLAA7GG8GQsVBKLRw6wTa1b",
  "key26": "3qWCJ3d3KaLTQvgGaRHdhszNao9e5GyhLJBXpZeGRCAssZZPnR2uMaC3MwJPWcLWM3bvsRYhqZRAhjQk1SLHbWo8",
  "key27": "2BpEB66tkopDjuvmqLHhgHCDTeURdRVKBHmKi7FL8AH4j2V6ZmkefhbJZmowmU2wGf1usMpdLcM5VXGFFrHJyMvN",
  "key28": "4gsAp3BbDZ1GGmiCW5xoC9Pn1KQ6vaVqjgyG6tfEGA6YgTsvAxPtsejCqBH9toiUFfjodxKRjAtFUBPRd4cAT3yC",
  "key29": "4fFpW5wF2raC882p75xHBGHbssPmmW3QoFSjMv2BF2ELunisqdgByuBkyS4BzDoA1YvAXjdsDHywPsqUUzaMKgja",
  "key30": "4VXiYqZik2uj7jWWEDYiEFdgAtUGxD21rQCwc5Yrr5HJE6yRQWEVPjipdLPjkjjjNmWjzNooVeaZ1MtY3ST9MbMR",
  "key31": "5Py9VNzrzRoCaaceWTnNNTZcdDoz3LTrx5RaNj38naEJCWP7SJ3wd4UJvrf14X1kNmCTC2F9UknKPphyr2T7ZS51",
  "key32": "2mnte3BQG8ffXVhnzevtuvweyZKkSD85MHDWdYigEAUiY5E7mcGBqvtwSSngjVHDsQddJ87YXDAnhhhLoo3hrvtL",
  "key33": "bpGLyvZQagq4YVX5JKg3FanukuSa8EDyDkVbEAVuKupjHa9sQXNz55UqEzE8xKwgZU7oGv32fuzUDbJj4zBaGUS",
  "key34": "JSGzaFpTLGPqE7Ezi7SLkfuNFiQirCftG6NHRvD18898BJBXhsrFaPBrufCNWXYCmrQxwU4EwyoAAJUUP7wnguz",
  "key35": "4CnzzecBFkQVzw9tzcMYhCqfSLfHrC1bztnWr86tEj9n2RoirgasytKMiC1gUumowQSQizY2JjhauMjXc8SWMVum",
  "key36": "2LA7DVaG5Gx3v3p2VPh2AJ4zRP9kBcnB5NaPUPRqMjm3tpZv9kXGTSQxfvT2J5BUwz755oDapHpanx9CGQokTZry"
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
