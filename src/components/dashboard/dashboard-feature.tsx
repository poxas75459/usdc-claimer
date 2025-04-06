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
    "5GpHSh6D1KXP3cT4XtQ4tmZZrE8WtiKVpJAu1kio94oDWszxNUV6QahJe8GRausoubxN9nekKqizrvJewJcyKTa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6sVizmCUq57V7bSEDdba3cUN2ZQF8ezuHYYxF6uPvKnn2JcotkCQEN1di228heTnJE46ER7zcRnZqofxNpoLPX",
  "key1": "4Vz3bsJUT48BQDab5csKAXeCkrCeaoNnANHwRrFD6eu6sH9hWkQKp4ghgRFcikG3qYvFW9g64QSo7DsCmJfj7GTM",
  "key2": "2oD1bV7oJoLP6YC2DyMcrQZrv5k4SSNkYzREEaxG2BPNUfFbJeFE2g9xy3Lc8eabAaRFi84vkKLotQj9sTWrFaXd",
  "key3": "2afrL7w4Dqe1kqeMuqWuuTfCo1Twtu4uDjug4X1r3S8hamsbcXrSbgRyB9PUcMkVfYPjSnY9MG4UFrUH8XJRSkPq",
  "key4": "EyLJCcs2oCZXv9QeqF1UoDDkhL88aHvEvNHKvqB7Ve7KDGUSPcQuFLGLybG5zkfT1HGPgzEdTRbEMMYHQwMpZt1",
  "key5": "4Nud2uPrbbXaZwDuUVwcCqouSgjocYZKKiEBnS2gmWyyYudtDZHenqEhSHWaC2zXWhb2pWi5FPax5d6JdbatUYLq",
  "key6": "5GfWsLTYRM4aZytqMTgTKnNqU7GzP4jvJv5B7QVfnAgyLEvovZHFyTmmZRzkMCDTnFfhHdP2pkZUi6UAPVDTNa3i",
  "key7": "51FdedPngP2PZGr1R4cjim1jmh6FiUQeKKDiVpbaMmy8MtjE4L9UtjyrwRzYoZr5irFeCfxRipPUCdh9DQ5uxjp1",
  "key8": "4vuXAph5fW2UdDGG2wexgG2rMUTdVo2ByCX89uR7nfLgm3rDbysBuMktrJEMjHW8gSgJUr9BVNkZit21FnrSAPUa",
  "key9": "5wE67dmw8jt9jLKJnDie79wCwcYfy1SPzV9AG13V4U1YmUU2rkiKJamDuzje2DgjiL7VRGPe5fHUDjTGKy19RuE6",
  "key10": "5v93p16TXFwBpiEJtyXQWYC9ou5d795Ww3kCRLjygrh2uWLkdNyvqvdasGktm9XkX88U1LvwHTeZgbRdpkK2fkLg",
  "key11": "2a53PfUESTfttDmmuwX86Zt32oxtxGfzEJM8KRWj6C3afTyf36w87RUzjBcFmZX3ZemSw7VTSJtqYGBFdhN1jhxx",
  "key12": "24Mk5QXXPwf2tESjkvRsKAgQtwhuUqL97BxAm2rH6SdtwoGF6Aa1JqXKMa395Scqe7LME1MkDnrDC4xT5pmebKNS",
  "key13": "vZUHyJYfve2EsxeADKEajcWBSpACG15zs9mcju4ju5few63So3nK6KDP8kX8khPYXxqGZKiKvd1vHxbN3mzS8hc",
  "key14": "4ie1K6LAp7kPmHi7UNEkqbUH6J9gVffZHiteC2ezeDV1hMJAYjYDoT9cphZsRHpPhFqrWw5WabDhbFzfhkw8rJqM",
  "key15": "5z3pfro5eT1iZg8CneBBXyQ9fsTWZnpP6WGNaY9777FjQvsdnuM523kaowGTZ98H8YEHtU2GL7qdeRg7wuQfBBVV",
  "key16": "5GTm9TX4iEdjuAHMfEEwZxVc3eSFUnJnZscknGc4UincWM6PU7QfiFxZ8oZEBGzYQ8HxpwySPbkPzZE4p6Ync6SH",
  "key17": "3qDeqacFVCWrEFa4AYMh2yu4zMmtHVSFmqfRvTYoPkUzGZqE2Aqgn3L7JfUktutxceVmqtnHMzJF6KXywbes4Yx2",
  "key18": "EsqZiHJBCBykFFGA5PK98cR5bZYkdpwFwi5dZik36vf4uUbJzjEJimiCYKqDoUE1M1QKQWdBbBFYspX4nEUgoni",
  "key19": "3k73c5q4uzXYb5BgNNyTAzPzHe2ttxaSgpdHwR3KXJaMoLG7w7N7NwmMjQzxYefMRsHoJXHg1fPxpehuEibesWm1",
  "key20": "5DGBH5Bk6H2tV3Wn6Ekoh4EQKgotrvAjrx2b23SMYa8VoH9LTf3fnP41U5MN2MFtrB3tU3d8sfBGNf32BPDsyynv",
  "key21": "pjdSyBdyCAAKMAjvP4fTEL1z3zmRjV9YrxXRpNVBd4cG5iuqctB5Z3okG2VkX4vjFw6GRtfsMYmCYSUveY2BE2B",
  "key22": "3ncpHv512PH96ydLGS1c5JuYB8ZoccNAEQYgSwL6HiiP95wrcMKB3xVics42gGcW2ZvgxnXM6d63KFYYGYPYtnJA",
  "key23": "46zVhfyUvVA1aWXSenvDu2d3omtS5MZaCQACAe9ZHSXn16UkiuL6v4LFVsjaRLvADnmhzfcskZ42LwetnkCPVEwA",
  "key24": "48b3BbpQ9PedFGvb5PsGDMACAtVCjgV6LN6bx88scB8ZcuUgeocrYK2jiHMteac4kVrAfY8xtPeSwRZoyCkuQ4c6",
  "key25": "4cKwRYpXdmSyPJqaMJViDadq8oPj6mXeikWfgoLQVu2KCkeCBassAJieD7gtmwx1xqDdMw1MHdoZUmrNJDye9zuk",
  "key26": "3eFET8NNCPd3kV52uAgvi5iSH3mr4HnS4466ePEHDSK76XcGVBvueQQYninmxj2FCBL4FWyCTMKRLbTksiK3iesV",
  "key27": "5TjSPXM2YpAFdkjntaQh1pR8MEs3xy5ezKwJDi7jCRBjFh39YWe9zvLYv7Hqoa68x66YGSYv3yqzQaJDpsWB7mg1",
  "key28": "66ocE3fDRKDBgtc1SF42Ymp82MRCxMtAxVs45RxMT6pLZzB21Dw9sAw64BKDtwoa4UXPxLRuoACvxQYmwgBp5VxY",
  "key29": "4KxXgA69iHuAU6j72jRJooEn72GguazRrRQFPgSmjxPV66oiKd3t8UZxEqy9dDWbbyAyVmv6qiwbe53CkBrHGEkP",
  "key30": "5JzGi8VR7uc3pqHh6c1t6L86N6JBTtbFABoTPAm4prBUbHdvqejvb5KTYWibbkDPag5geqd7E78SZQGQFS56yAZj",
  "key31": "3BkJHLr3E8GgfkxYi4ttjKQJRR7XyHzYJ2knJKeE2vu7R4DUP24fijZTYp7qSa5m53HwpbkHkm3jKruhHoHbbsUz",
  "key32": "65CznpyDLqBz3USCN78LRexAKQbVGCT1x997aMpmZWS8deHnG37Jh8DhvefbxdpPdVLuzb1LDpNZiMigvkB5UCAu",
  "key33": "4K6vhFwGT6KVACFCdupB9eSefDtcy9Loi7HBNeyECr2Daxt7dmc2SUrEipmQ5NzaGqubqBwh2Ya9S8N7V8HmwTLL",
  "key34": "4FWQVpmYLHGjJzGavQzRNGR9tKhx6LscXrHND3ubuWLSZMHmGMPSE7RKFmLRkWGZJWMAZjwGaGg6rMDgQBjVDbjF",
  "key35": "28X1pNDbn4Bm16ahWMtxpwnbHkZHXspwVWEudrGiFu12cKR8PFHYuyVY2kfJjticpsZbzQNCDWBc3nNTqQEyCHgJ",
  "key36": "3aZ14VTidWSVUG96hbDgrKTCi3qAybaAdm6FNT4HyWWq43V7PAtzc8nUWU2SRt2rPZGg37ivzFQdpu67fEEueBCy",
  "key37": "2FrJ8xivyJWNbZggjwJUKkkRiNk6dQyx3FaFKTzPaTGct3oNusdRozaVAnaU7M15mhQqR5NYFGdiQGj1J7yGeAHu",
  "key38": "4XYBbJKqPZqpCd8hL5HEw1mFa8qG2WujJyrVJfXL6nCZ8QFFQHUerhJuWHnLvGSYs7pQ2HcxNiFxRB2ePzV3R5Eu",
  "key39": "3azEyHB7iqrnPPW4tePAJGPeXQLLxmmDTVqztz5XwA7y54F9DQE2TKeK7fQLikxDSApByDDjp9XkWZ3WZaJKK3K",
  "key40": "5m4gkkj8s2dw7gE6NEVSg6cXv3UjZvfXaxhZLbimjvCVuxihhGvRdHEtBnKfPsFp5oBjthdQyL6bsA1Af66Z2YsA"
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
