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
    "5nPfpqkMtHbw8TLp7ewsmdSMbfD5STaMDe4Xo6qh6918taiuQZWHbqEZ7fjdKX9jm4XkhbLWXkNwoqdJYZ11pYV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U73kvBawxCbA6HjrBYP8psEz3spb3m4N8MCbPTjVgvdbHcrKUUrhvnuyCEtQYU9hfBTGyAdC4fju5p86RPhAzSh",
  "key1": "JFZ2ErSnfM1ZiPsbR7zSJNP3PSoEHnCmCvD8527NXvYCmgnqamPPNoQs9vgQU6DctdYJzTjMzknbX4VhyM5Sghe",
  "key2": "2xrWc93rLCGJhy6MJaDyKpduMLFUtiEzBwiFYUqZLHSGWhrszE9T6sZi3RL8EQADaAudkBFeCE2ued7oZYjVpnKj",
  "key3": "Z4CAZVPMmspcFRjX8y1uXyfdcnQ5gVmMgNrQXAztzXfcY6dFMpxpU1m1EgFtEnJfFXnFQmAxtdurSWEDXGeNqAe",
  "key4": "48y5E7XcHEsobuzog3uq3VS6ohVYNgu4NXDf3rXA3jGrfzFY4GQgAX7eUZWwSrRjYotPmsqGsdBaJJFGCcz9XpjN",
  "key5": "eDpAod1XbKgnNH6SqHSjHCam3vhSfFVqtXdYtaKTHKLKZd62QBx1s18RR4cip4xb974E4yYovwh45XC1BbnUjWX",
  "key6": "66maov741GvetRGu7fE9N8qcQnfzmBxE9VzSEJRTFP1GtXGsdU1w6LzAV13J1JqKdc35kByLLMstVsQvLqeFfmx5",
  "key7": "3hFzAZL9a1G3E6nKJqU4iUT5DFcAQo7FnPuU45MWyR7FYLfdFDzJAVohS3zZat7ShH7chosCzHtGkdR7JBqpgh6L",
  "key8": "p2JUL1sL7E7C8jQ5zPjrxqkiA135ListjcASk3HPGXFot9q8pzmnVsUpEggZzsxQ21m6npRtMJvUkyX9iuJrup4",
  "key9": "3AKySdWeTKPr5M1JYKQ3YXstVaTszbSyfKEuYTjcjJW47DzRScwknqQffCfyf2imJLjFUWnP8DRxQzrR53EYLd6n",
  "key10": "yPVqaX2CNxA9pwGfVwT3XSX53eU6bm6w5L33m6whjdDR1ghWN34X4B4awH73DcAJwSsxcCZ9BFR7QERQLVYgu3a",
  "key11": "5EiRwm7eDB7QVYEJHtLDi6kfyqZcBUYL1udvr4yaf4STtrrBJPro3ckR4DezwtFZmRnoBMdjYhG6cX26b5yqqvdf",
  "key12": "2V2MDXoX3s61eqbCujevwPohS5CGWJEDXiVQEYVdnrmt3LNZkGmRP1B8FpxFybwA3iHuECgkoKUdezGZGJdSbmoD",
  "key13": "5YbEvfPWBEP26bsavTTjCm1d118dN7Wf1irvyYgMaa4JbKm6YaVxHYzNq9UWXfJRpcLgQzeKcrcND9p4ye4JkgXH",
  "key14": "5xkEXcZjnNrDBrse9bRHKmN5CSK3TRdB8rQxGcZRzoHqnbmz1fq1922jwzNmWEbypJYMEwd22SgFyaz77qQCY6Lw",
  "key15": "16SBrccg4WXC4427K2D66mctpXceKd85sSdyqXtimtFFc1cmwetFpF5dBdL2bhSDSzb4znWwXfSn5RdGQ4pPPsr",
  "key16": "5t9E5toZiVRcGBXDbge5VzAhonaX5zvDUEqWHkrZfzTLme8Krusrsz6XjWr84uBCr8f5pw22A3zdt6u6MqtLjucp",
  "key17": "n8rNLeFZTHpwa1XP16AXvkcXipySrBhne2X3nchQxNuGtsYs58MJHbEwChPqkNvA43W7osJ5NedPdfxSzMGpnBQ",
  "key18": "3BbjJdgzY7PMDjfs2eZy2XfGnjK9Pj5YZ7uHyJrJ1zs514hwoH1vahW7P11Kyr7pBpAw7LqHFPwjKghGdvQwmBdD",
  "key19": "4iy8ZpsFZ7RxEBwK74oEdJoiW6hM2Mcfv1abgvryML6VUN5vgd3Qv4HtXReeuc9NLzbuJnJ3j29nG2rQBAC4YQS3",
  "key20": "5WFUqbpMDKHPXmK1M6pWJBHyNJeyX4NZp1sneUZcBuxE16CW7m5iwQvrco8WkZgxAYvcg3V2fjCc5siTWZcq3kP4",
  "key21": "2RFiQXYtiv6Jczu3iQusq8SxHKXNhNexr4UdpMUdGhQEUKMnE9JrSbiZGoBXXLEVKmsFHsezQkGoHBXTH6vf2Th7",
  "key22": "4aKGfcPFEeiYYegakJ4h6oCxr3s2SEXyeszxJBRm1MzbsqxFy4ncC1fwdtPq23pvEdoyq8yNVsqb4dr8krj8s91E",
  "key23": "25C5X65npWpkqhWgXoj6scY5wwzHduoMVgda41iAH8hUYefwmMfd25F2iYtf5b97BnYSF437LWTXA7j8TXau36HQ",
  "key24": "2roafoPf9mXBECy9pc8rC7h33nKem9KK8vMq2nJir5VVUPCGdvd9eGUK97P6vSxLTfx8AhR7UfrHcHSrQroHzEWo"
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
