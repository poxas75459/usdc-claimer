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
    "4NELe6ih1NiUjFKZLCS9MHKR3YyxSENpvoaMHf5MJKTrsvzUNR6E8h3kz1dkg7HjYz1QysgpCtqZZ1mQEtjHyQdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wj4czrGx9QQcdiiqbLpsemHPv6hQgfc5KBxpsMJzQkj4CgDZjUPbu5Nseg71PYKdu1Ku1A4qjAe1CxocgKJBNY2",
  "key1": "4QnFfbkKYCKFtoEBfqLyvosAkXSEGzQYrqWsyoS4i9uqpsq7UV8BVYFYPyQD6q7xAzU4HBZjEGC4Cr6sJPmXTcKY",
  "key2": "3ta9GCGoR95cxsFuYTkmZ8k16DesfUbpSoeMcn1N3HE6MRBCScegXWNTE6Xj486MPNu8CbLL5utyjGmU2PfXtNRW",
  "key3": "MmaqThp1x6fibshopJUj9vEu4EheRXRkZUWna5vfQ6KMrHAHeFzW2bCh8W6haWyvsyuTZ97JraiEJyTkEjXYMXi",
  "key4": "4Jw7J78YU3ca3fxCWLJD2rWx4a3DHeC5U3oP2yMj9tN3KjZwLQ2kbEDetj41PQSz9MWwdxkVpMyGcfnTb7NZ4498",
  "key5": "3BJZWstkhhtGJoSAueZT8UJHUanibdN7ynUJ9xLFeUcibmSzZGzaERy7yTAiyNVW3UKK1p6hX1bHawDFJpCgJgDD",
  "key6": "4pnCYyDSJcU3bhCN8EvKuCAngVr6vRjeV1Gq97qmMTh2Rf7ffwZbtfcHPE5ZZhbEHTAHvK7aro8J5HEiyNYWrDWK",
  "key7": "3Nvdci5KpsEYnigpXb9WQtWrHSzFc7uQDgEKKppMHDgiF29DUm541ad2RvtPwmWtfDGojDK15fdQRHh4DBcXmKk2",
  "key8": "5qFcw7Mth9LTHWUfoSNFJohooagVrkTivqafFJzBQ1UiwVG3qAf2VwQhGJ1Ju8kcBxQ88SB3iUDGTBwQWpgeS2Bm",
  "key9": "2JMFWgWDhSfFNtGkePPmFgpRJFzmowFUoqCq2Mb1Cb5bBDsfH8ceYbqng7oSk5gChiBFyFWidh66mxjy4Nsuaxsj",
  "key10": "3SX8YXT5uhctqLNFqCeAn6NvpMrfaWfeTziiwwSewkayynas8s9XpuSUZFWpJXx3UXtH9Awi9D68wR1g1PE7BLph",
  "key11": "58wFRtYYzS1wPk5xzMv1Ap6dST8VvEHaWaVovUwytptYTG1Tq8iQM8XG5K8BMLKqWrBLDjTAg7hPiZAnASU7wcWN",
  "key12": "4Kg64RbtPy5i8E5LwUyB6DTdGUvPDMNFnbJwF5QvAQQahJa7iT8QbXciBDpv6ttu948wiE463kT7UWhjaXnoyJuT",
  "key13": "3M1VbUDyAYoQ8gwV4GtEWfvFmtCjFFvvRumfo2Ks6ZhvXAx7zC34w47vCWtCimPwcyRXmWbsNZhy9Lo9BX8EGmtX",
  "key14": "3JZhMhFhyFHwSxzLt6rJnJRGwDDc7rmRE16Hj6GEqoDhVEujocKUwxCgSvZLxWNkjNr8SMfttVyhbzguPxiLgQMt",
  "key15": "33b4yqo9iGC6kSL7tsxcGmsnBhNyKLBkHY1NhuesiHbiAADK2jfp4SPHycsHiwKkvdYs1Q9X2NbxaQ9RWiqLNvYm",
  "key16": "2zphX7L9hzXyJ2sG3xEsdBC1Fk76Gr8KCXwrpdb8UptPKovxS5pu7sWrKDwEQ8BSkoc9ed3p9ASwJbazgwQRVBBn",
  "key17": "49USdcs81wsfjHCs8y1QTxumy1ktwgWRdyqciBUFFFH6T2HsGJGtk89psGXXA4cHMK9LRMRADcaoFQ3GDar67vzH",
  "key18": "5VbmBqHZmFnniS71fhAQL5rpnykQ13GpaqpPTx7qX2NtnfM9wD9tjH7UgwwJjQ15BkcogdVdqqVL71V6WRroxikd",
  "key19": "2yrkRk6vpg1vVMuzQTUjPBWXo5Tzz1FWkmdEXCxgKgbZRNU5pX9y8YZooHsMp5GV7XrDJKgap7pufmjs7xgYYv6c",
  "key20": "3CzVxfyJQnK4rD3mREyKFBHkVRWsKdTyd5TzihTS8SEkvs6ZGp38UYJuPodY7XPvTABiz7M9XpPb9Tn2UGCe5jMY",
  "key21": "5Pja9dL66zBJqSBYsRgzkEMPEkqjDemZatjVqtZohGJ7JM9LXYUMpGsh5E9ceSKVJRMAuJFu4vcBB2sZe2NHdFpP",
  "key22": "WqQ6fDqVsKCt2vG2yEKbqNkP3mYttcGD87tHQbQeSLhBF24MWTydTDaS6CHXKB7kC4kBGzcdjZMNvoCLn7GM1KJ",
  "key23": "28xHfRh6HqPUAFXPqRCmwtcRfcSZAHpz6e6hnVPM2jsq1R1iiLEN85sLewnSbaG8pwVDGrDRH73qkAsRRmj5Sf7E",
  "key24": "3CKExvVEjxfFbA7rUYKUxL81x4erhbVHfYEpSBCCCDvZaVBiybavJb4QPavYvdfZtgn4ooWFfv1Lkk2WkKiibYta",
  "key25": "2rnP2jxEwdqd8sDLSKU381tKE8NqSYgiCgwn1w4owN1WG3gvffGcT8djnszSkDqKTWTf16QPL5jHChc1uuKcv853",
  "key26": "FiioumrziVrXLHwvJHw72bV95Uou6rT9uEgr3VJKUNueTAKtgTTTwR7FKgSVdniTxwu7fwJ4gvpsdv3c1cmE7e7",
  "key27": "5x2kAutHWGXdbcKGGyJZdmqCXyJPZs7kG6qspAKP9d4pSQDuEBfkqnxoZXrVviKg7pMi1BYm7eVsXhP1eDWcwj4J",
  "key28": "326YkM4K8kBbZmJqtLCr51KJPo2X2vubNvFVM4xePijKd9Rn9xt3CpcoHEZS2m42HyVo3B8YhjbKwzw7dqBJA7Nd",
  "key29": "48XpA6UC1J1hmp8pg2QhcvKQSzVKc2CZndBuQdpihyXhnFiiceM3nGM5e7E7Wnp7AaHKf8cDtHjQopa7bRt9WA7q",
  "key30": "3yxtG2Ydwkd64xZVqUcyu923wnuGmQABYcZCSSABkbs6bASyfNJDs9fw9YZAkZL8s6R95J1qYxDvTYr2FxYWACiQ",
  "key31": "44qqcy3ka1wCMGJd8jPwNaW3xjqtyc6js2PLH2dzy5VGUZZuSMgJpvYWs4VrNaD2nGw9aSaaDym3rhqr6X4ui4sw"
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
