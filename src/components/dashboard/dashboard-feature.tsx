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
    "56KxEver4nzdTtS9qPME6VT4PLLV4Jt2zdg47pwpPNPfjA7vCKydHaY2Fqa2oGhqz7dQooFbzFzxVYAiNnf1ipcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SM6xpRqGRfzbZKz4BrXHVpkvgQoKn7w4FNj1Lfsab8VWGGGp5QrrSpA5ZSkUSf1aWcBrFWRmzmtJ14FCbU99NHU",
  "key1": "31hiu8FuhAt8g167eBFuA7bB6MYGaQKaMUbBXB8CuRVBpvfXAiiXeEU3gCW4MDfvnHpYxpxN6oEeo7FSBk61UDg5",
  "key2": "5zu2eT1wLSyBgBRFCBE8pHfS5aWaHUsRPUpv9pruRHFRXNMPvZSx9VwawzLXikgCfhh7hqd8pSAFwuQ9sBTeTFA7",
  "key3": "5WK655inMTeGoZEHP6X6rxe4yXeN1e898MenCz968BiPsv3bm2V7T5kCVBrqG6DjCqe3yj6AnoRapR57jHGqQGpC",
  "key4": "2NWfRYHkRrrdpfzAa5j9ijEi2UMnNuXDMFn8LNhEfPrJ6YLijk81srB4xyGYdbApY6ZTSSuyyxSqd272YFaJzL3f",
  "key5": "4jLVavpVwJN46Mjut8jA2ZpDb8zXaFWiyeDt1yuQFdU7m3vArNSyfHPvCrjnLu84B4uJdShTGUfe8mzNU2292AKt",
  "key6": "2yBC7bgN1QdZbvFJjKHb9aNSm2ct68fCvYAG5ZqyAb6demoE41pEK32inqDBXCdfqYsnRC3ZPAFq3MxmQhKWRAoN",
  "key7": "2uWcbJBZNXmMVmc4Gwy2JAArug4NSD6LH2RAf4ncJBwtmz2ZxcMvZb9aKyo3VaUuHdG9XtkM9BeAU3VvGuoYAAnH",
  "key8": "yq1ZXQXifwWRm4RJ1xcApSfK9xWkn41EqfrWjggmrur3T7Pd2qJJ2FPz8TPwbar9c1GzSMugE6aNzg2hYVmJ4Er",
  "key9": "7rQHPtazuZa6c994frFBhYyj4ykuziTR5fpGVgujgPbvgJ9kFeChz6Wgjsx6YhgqzHsdbzKAjLhL9fmtKoPAgwe",
  "key10": "HnG7ahB1sJNThHkf3NZ7UFDLwwHoK4vr2vGR2mE2V36MGRzLggJmNFeKbJ3c49FXQYYzTGJNqWFtbyXMa9Z2oj9",
  "key11": "6VE8e6L4ZgoVh7NdWSkyewfG1LCm98vjzSq6iWCeFFrq9txkTEieh2uZ62GBhCdSEk5KG3DJ6Xrx9YwErPzYQWR",
  "key12": "wZQNc2EVqdzAJYoNMfV2K3Jzv3KSywoVVaYqWN93yJrhpgxEbQkSzwUgmSeUD7wnqVwkcAS5rfWVo9mbosxz3cv",
  "key13": "5zmzEadcGx3M425rZfNqtxXxpPjXG1nkJnUMjmsTobrfPSjF2RdCkenjYXa2vJXyUKMi6qPL5XUgLo2FVbbj4C2z",
  "key14": "4ZH4S1zr7RKtRv2zswCU6buHKvi4DsayfHtz6sjsVt1tAbH2sGZ1bxBLxBouMxFZcr6UJhmuQvEWzSfGRWh79sfQ",
  "key15": "6NuRV2J6oEjEb1yDtdMu5Z35hr9R4334rzd8srr88m41eNsz2uwePbEKFZgogH5EyV7cL42RxVcD4HU5nH1oGfL",
  "key16": "5ZdjaF6m4MuJWw8m1wyDCzkr81jcszAvZzSYtdtYYHGtDNEyJbZTGCtVvDJuh2fevoL5ezu8MSHbqKGp2TEFuczE",
  "key17": "4aPMz8YchcH679nTWQFNizVACH1bjCtWPWCN8mH8ZtVwTKqVGzzHLSR56uR7DKjKuyrZpRgfuJSv7eUd31i5F5nT",
  "key18": "5TsfCVic5QK1o5iZciCkyFxaRtHkgcuy3ioqAQVzZctzukqG6PqFtr8iC9C5w1pBMnWPxb92VGs3QBytDgQPKmq7",
  "key19": "3rLCEj6gU31rCSmAcmtgVws4MJjYRHSwVELnLzDzugQ2csz47i7Bdq1P1hDw3cjqtT3BFf7WmHNqg2GP7ygZ9RXt",
  "key20": "3e7joxmbtZf7Nx14KBSHFj6BdxDNwU3PCVeek6djgQvoCqo26C5WrM56KESwoHQss5RwC1nqD3oWHst5YLy1xQJ4",
  "key21": "3GimkBREVbsEKh5tGENkZsfNDUpRP57eCDkgGMXtdxNx2mtz1B7PCZaxy19U3YQzRyzmcEcdtGciteVBP3UMALBR",
  "key22": "5agL1haCJ2NhJgHbviJmYufByurHeENyhPnFmWdpXKoR1uD3qVUFjEAyCKs2R3de5EKbuwMNToH9sor4jmSDBmMs",
  "key23": "37Vjv6iyTMSAP21JSFq2k3CwwecopwBZQ3Q6xCDEj4Xm1dxkdArWvb5MfPfp8yJmghAmSZxmUvP8xB3xG7p1Ccme",
  "key24": "4ib5ibdAXTsfS3iv2XZQvToTdrTBu7wtug5QPT9Xm7vBswgDRNdPiJB6RQzTeRvwKdoLHSFr6jevpDb52SMoa7iu",
  "key25": "5sorpV4cQnpWgNM9uVv9bSVGLbeGBQjr5C1ov3RF44SrijRQfp7xwX8pW9iTPX6bsQadQ1kG5xL9oHLPNKAKNcf9",
  "key26": "4jBfxrD3g49gA3sKRnvVNQJzUm6LYzkoKuRcF9rAqG1yrcFFHo3yx4zycxBkJC2fYW7cEf2MMoudWoBHPxsceBTT",
  "key27": "suPy4UNHM8ZBosqedPo3k1Fd8GaR2BLjiDm2NVXa9KzkBxEvisvMQNrcpnpiJzLE5eiSBcvQmnNRcU9mRiGcFZp",
  "key28": "3pDeY6ninE2wewfMHTaSNsp1bG2uutkYLit5hoB2We2VMMLbCAUoRfikTZUQFdhKnuwF36e5NaZQvt2LnoRik9Zv",
  "key29": "2KZSniTBbMsdUK82rqHEwDifRTKxkMhExrxS13cp5HBg5edSDqPXLEC6yVF1rQ8BkGoErqzWhcjeZvBfC3dkR7W1"
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
