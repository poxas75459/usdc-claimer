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
    "5665npNKkXNZuCeBwQWSXyenjSHy6wYAu3S3W14BetqMizxrdokcygX36N648EStDwhY6cmJWnbmXDVDt8vA1PBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tH1pk9uj6RmC8MNH9PFGEGo3i7wJeMNPEuxBxhGUxA6coiH6Y58iv6JMg1WKqhZvhzaGoH7amw4MR2bSmUqdd1p",
  "key1": "gGkmSaVpfrJgCwUSQECVwRTYzJwiRqT7gCZsddCESJ1ztDdTpJq55zfx78KQRS7YXGaDtVXbRS5s38ttm5gmADR",
  "key2": "5bvfXuLPLrLGYFNMS2GmVJ3EJ9CeDxvZRGs92zLU3wKAiUykDgf27StVbYZneoKUcTGt7q37xAFZMpkR52fJdf4G",
  "key3": "3JKepnds946GhM2TdLyY6EkCLVCLmrVVCkEyhVdhmiu4za2iBrmRd1G6G3x4rkWFzdBqHMfDj2ttghWCNGAas3Qw",
  "key4": "3MJi4UUMEVaVdtjjcWm6yzxuoc3QheZFVRfG3DAt5eUttFbYmMXPQhZkK2vEbSbxP7k2HFLVqmnkZxzKRPS6pvMh",
  "key5": "4CQs9hFWKWPhwt3ECYzDbiympB3S5bC2iJcsh4PXcdt5QU8sCdUrfJ3cfnu5Duv3LVLm3Hx5vbVsPA5AiN2mqWsZ",
  "key6": "4R2MQ2Q5fskipHffkZUJUX1mhEP268o1sm9LNbo3CvwLmRbNqkeyudjURdEKe7EhgFPRuKC6AsTqTEoA4F4g1LNk",
  "key7": "5ZyenKPgCNPK9NBGjM65GHjCmrjr7vDMTiyABFegc3DJceJynbHXNkNHugcELcr3ceFzenGstmaUW23VcbMpLyYK",
  "key8": "VdYGS5dg2Xqte1UacZgS1v8ThipXWSQtGUrFMLH1GxkCVT3AaYcwP12z13Nvx3viniophbTJ2zkMBB3Y2odFceH",
  "key9": "2UAt58MHtws9qadv6M5vftGqPbcEz6j4h9bSUNCpe7oqJ3T8QAcHCw6XwbAZ9YYWhzL9vSZ53GFBw1hR1yXBdymz",
  "key10": "5iNLYyyLJpw6e8jobzmLjT9cv4KczN6F3TyeRVzxyhjM2gYJHRTfW8NdsKS2Z9jDVKCoBq1Hjm2xSSx3yqDmhXaa",
  "key11": "2YW3roLrjwFBAuCYVVgmnpLkUqy9P8tBMnC8yYV5Z75LVo6R9BvWWmPY2uGpY2Kh944DgXY2RVDuCbcqpwUhEbPv",
  "key12": "2RGdNHFS2q15wdXnyFsTgUsggZ931TLuWZMKMTthv42gzQMSBjWpDiY6QK9MKwJCw2btdPMQdBT8kzmBVisbQLvL",
  "key13": "579mPXqopDGNEs26myakbMmsRLWejEgKD8JFsBLbwGFHdFn1NYeQbevfSDc8dbaSm2nAbBTqoiYvjTcSteDp2Q1C",
  "key14": "557oqNTn2ZFTZdjwtessVp8SFGHAHphJLGQWDEQB6xmomw53GsfAdbvvPqhYCwS1nMeenWr6cee8sEQEis73134i",
  "key15": "5PMEyr9WvE9L73EvpDH7cVtFxBTCrP5sf53BiHce8vLVJyKtj5xQBh5SHGL8qdEKbA8c9qbNQxHfpZ9K8emAG8iS",
  "key16": "5SCcgZ39imgwoMmcYTukk5g1np8b8mxzV3jPXDHRT8QL1yRBjeN8hqmrtwHH5HhnQNjMRoRda9ZveW8TrxKT2szV",
  "key17": "35nCpLqpnHvzWnEuP3X71SgViBguvdjrAbNdNRwNVq1gDWYDro9ZbnpuQsAusvd3rDrScaxr5ZW4QDKFVKhPUZfP",
  "key18": "5nqJFQGfBVgkZf89Ekc1QnZGXfLD9AUTEH6GVs73EwsZYz9eMhR65JW5YknCNkBxDWo38PKxSnZAELUcqC3N6bGC",
  "key19": "2mbPa7Yt5WTdo1nuCfc462WLQnmnuLT9bEMzKqY7FUW8uBstnmA2S7hqYnCt4xU7ZovqsTyBU9k9aU87zsn2A8mR",
  "key20": "3quJVJcZd7fQTVbqcSRLnCpMnXaBH3e6kDxcegA5fMEoHRcKjGeabvoMkYf2qwsRcVx11pYENtdmqPKpn35mZPqM",
  "key21": "2DmWfoCULFrayWtKSWrQGnuEmWNV8mKLzMimtkEmiMWTQQasMMLd1Tmf8edTjaVXXWaVoyAosEekSu9J31XFjWYE",
  "key22": "v6vgQywqFiMR5bRwSURDoYztvdpm5hPnk66BciZkrLHr7rCujA35EWrWmk6urTavqSK7L88mj4BTcC8AYSgw2Kv",
  "key23": "32qDSWNTqfRmg2jzC5SBt7FR8sbbiCBL5zLveqExSCyACMkGaR8R2upACF7cXNz8fkbfpvyL8GcWEJL7KV31djtS",
  "key24": "59PZ6dntzmA8EFhgEEVL5c5modK75EyQGqiP5Khi7K8N3DAXVbvmvENUoVSyCztocKeXdpKiombv2xFn56EUKL4i",
  "key25": "5Yy9t34VYUwQ4M5N4P4xjaK23tn8aGLm6FhmsA1yuq5k84x4LMPbZfLNpfRLyT7KX5rX6tByStEsLkZkAc7RZX5H",
  "key26": "pYRmyRrr5okKrERu5EjjL1fwbpv3tUphE58ojXimJX2u3PPAyV1hnjKwXEocbna6c8WXbw6QFhiH7raaKQ4M1xE",
  "key27": "cBSCd5oRGAsawcYeM6GfE19u6mqmxNUyMbPqhfcr41YnU4czC1WPHQ8eto6ASTHaiFQZcesLB9WzQij2W34xf4J",
  "key28": "41siFG3x65ZdSaZxJD96o2hQo6FArXwAkg9GSS58iKfnKdDW2gy9vEvAgX8PoTR2GXPKWA6iapiFAWWnYmZCaseC",
  "key29": "4G5jFKQD7Dko3iTmpXxxJLMQSxEoidjrGT3ffqQtp9QHndX7fv2iibxTZ6Rx8RTmkDcfPaWGPGEuxU7h3DvcNP8Q",
  "key30": "4K57SXtAX9cdevSiqbGkchhnWujTVrB9mQqDjQKz5wxJLQXN8MrPin7wx8mUgmJNpTGwZpynSyvPbpADncPD8Qqs",
  "key31": "4Hwb6qSaiMpDK2qi9ZB2h4QVCBK2P3ZYgJfJbdHEQt5WqSJHo5HfLrqX9McgMYmQmzrxuozc9H2TSWYjwq2kCuBq",
  "key32": "4ttAvYq1P4jpr5PzkZAuBiAX5VqCjdJL1GPHUyxDVEqwRNQywGMhhE2FZzXiW5ESYNdD7nUMGEk5Z1ewGFydkUk6",
  "key33": "3rYyTmcYsB4s2sLxHcioKkQ3VCSv4f48JqacDgmhRyjf3s5tDYCyxC7hAVypdpWj79YCMyQg68JGebevXd1Ksnkd",
  "key34": "2ZGF7A2n4QesGeWGxcx6PuxyoCDRnzTvy66cJf2TX5hNHu1g7YkPRB7kHGKaQx8Cmk4dipKG4JyEuLxk7WavEgu3",
  "key35": "6UjU9v2zZb3zjjux1aoCfHETVdaK4jZjn6ZPVvtpV1F9HSvfGr41qnjKcCaM27XdRrr6pGBczCAxw9mo1bta8YM",
  "key36": "3GsC76gYYGeznN2xtvEoJKto7D65gm9fzdVDrkNJf1JrrPvHxCbNTSsoT6M2Rhnap5YHiMzfYFvMvkS1zReU2Mjh",
  "key37": "2Pqvjfs29z6zMWi1rcZ35HFZv9NaeVMpMbdPzNiXcKD6HNLaxiece4NeMaSLraniVGrp8L815U2bqfCgvDNLY182",
  "key38": "475VygkUAsg8LetL7r1m6xU748L2bHCKtKW1WZvqUTKCFjaAynHgzDBjcANNMuZnYpEAipPfD4wxAb7dA6upcCwQ",
  "key39": "4KZ97pyKG8dJGdpq1wkWRDtCMMwo8kQVnEpM4YiStWrNHZ6UWn6TTL1R8GL28iNTPRUZHr7HgRzsgTYwW1UAe2eH",
  "key40": "4oxKzjecxWbpKURYum26qjhH7CW3a8h9dDjnws8moMs1RcNfHg2gH1AYEb4aMoz4dHkcZ5BfF186rupH1MdkW4Zs",
  "key41": "5rsyRL8fmL4Lajshtpsak3Puf2cXPXTpqKsSv41aMAjhzPcd34DZmYR4BY5FGNqS1MicXSPcynXpBrpqVz8UHmQq",
  "key42": "4M9xdsaNVPfgr3VtGM9VHf1M7zUSPib5RADngbbk4883BheWgSrG7u8QKb8z6NbkQT3WKtD2nivqSCyDF1FumVnw",
  "key43": "5CdBfU6CV65RC3WmkYmAwZ1D8kaNjUkypPz3ZUSAcRN3cHnpq2sv9WgazxcxcosDt94np6RsH9oAypw9XARuKigo",
  "key44": "F33B2MwLYkRfPVJaYVL2EbadVRn7opmFPgvLpfbh7m5YV7XZGS3GzZRQddgrgC3jHYA4ESwdbJsKfhjhkkfUwBQ"
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
