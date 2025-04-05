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
    "3FWbMuzi6QanTscfDQ3PNk96oqykzGiHkz6XUBmQKRKJETvj7geyxQNR4SDWcZn9KyxdqiSTfnW9CdAG5cqBq3R8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQ53yVYnMhr2Rx8sepavAEhgCZ318hJ172QVTjQjGL4rLYkBrbz4L1oM7FfZ7rMy64rUMpzuaezf23UoLacm3Nq",
  "key1": "44NTft39oKqeSsW9dmTzYJiWtRKuMDVcV8fPgmKquZE7DcdwEAr6TyswWnja3kirfchovGzZ3pTSANbn1sShTHxd",
  "key2": "5PUwSxicwtKLjZJftyXN58qYmuxWG63reEWF2jBG29sxocTjPNv51GWhATwhTMxE7DdE5AXm5znHcBNKeeTuUWFC",
  "key3": "2WWWtU6tKFpNxwYW1fQdBBZLuMTZLNqNZqQX9MhEyLNyMTDt5YZPcqwgKHxX34EWy2trgZMVtx57MLh7W5K3DcJ",
  "key4": "2nRCTkS8zabHnTbZk9zEt7TQC59D6hQr7EzkFtrUkw8BmU23QSizgUZcWPWgbbxfYTPtgQBJxxjHVhk3mq7rK55f",
  "key5": "2z8SdzLoQgKbosGf2kk8EzUBVHam8mm4uA1k9DipYoyovax1Sjo6GzvYTFrh5dPa2SoqNrWDQWHB6dCuzNNaMgbv",
  "key6": "4RHf3Ao2Qmy2zvBo8eiBNgpp6bu5nbwDg749NEaS3BXsWsb5x3iejkTeh4zu2ar9ZU3RgbkANV6XoUXUwhhgrkHC",
  "key7": "2JWKcbjckHRMnFy3A29mJrZ8JuBvaCVYYwC3DxzCwVqm7jjP31kZz97EEFNBvMRcnxJxTqa9cvvHkVjpjnGZnPwo",
  "key8": "3gNzLJrBsba3nzG5qcRFHWtKeNCyMH9VYzuHcRrm7Cbf54w6xRYVeD9cy6VnkDgjf9j8ZHj3w2Qu1EF6rGs9jF88",
  "key9": "4SyGCN38x8hNCMUiCdpXCyqAUjMh3MnZX4gMBafav3r34m1W3NMEsXee86Bc8ziVdLNx4Q3MK6qSzYqbGDyxnxMr",
  "key10": "34ctKQegA1qKATkEhUnRmmWpjhXB8YsR3sRwhb5A2pL5F3JYtYVe2NMvsFxU5A2hGmDfQ4kuUBKC6wXt57LZAUGd",
  "key11": "42baPUrrAcVTVBkT5GXBuGYsB9TuBV7EcCg5DnBKBeVcCTPbYd2uYyH4UAQZVxeN9Bhmwwmj5Lqw58r4dwBh2HMS",
  "key12": "5sKcapeSMfgiS4SzXo6bch8ddX1z3bsd5y1DtDhCdF4pHRC25djhC6Q8tCoiL8nHcmmCiPzNBsLwHk2YHKhdn9BN",
  "key13": "6KTRXJyZLkN5FTLyBNXsx6ecCt1S9gtEpNcy4xZuqNy2Fp78pqdsg9QiZpt7Tw6kH1XYzkEyc863AKfZSM7wSy2",
  "key14": "3t7e5xSvwSJ6cqkBYmb76isU8VFLKPX5yMYBwBy1sJXmq6g7XxWc9BHrxPHEW5RpnWonVB9UCgZ1kjt7NH6PGFPv",
  "key15": "xUXbVKLqN6A2cSB2wFEP5CPZ8sWGNKBETeDxvxQqxJbAt3f9vo8jxq1KPBArWjHnjk8dP68pEAYRoxBMJ8TUPUp",
  "key16": "48VL5qLGdND2XrZ5EiLHtFkhZ8TYPDBd4CRxabKvvvvcr1RAhGuGA4ecM3cqdEhHGd4yy2Jjjb2nh8B78WqVLptt",
  "key17": "3oCs6yUXwehQSwhMyxYAnkihk8Bq39UhdXrRxqzsjf8JNgsC1cYPZqmoWw3mNKACoH7s5yQgz1egk3dh2Q2z4Vfg",
  "key18": "3yxJL56Xk5whecZDDoxWGEmXDLLDA8CZtRQ67rQRUsvYpcmdCFPrAthmTh1iG85iDyQyeE9XFygV4MK9PqZHy6kQ",
  "key19": "4NsGHaChqguvPAEYVeGZBGcH9J4eTXXtZnQFVw7JXZvmCtzGY1zwcbCN1MKAhjSxXU4Uknj3j5yhb2drGtnxFfgE",
  "key20": "45ddyeSW52apLByLi8pnN9hKJMBCD2zr6bnt9CdiHtLjhw4rQyVNXYBjynaH4ubQp6nLmGsiefd1RhrzGSqVjm3z",
  "key21": "491CPaPqw2uQqz6FLP3CUew1sSzn4S9qcnjj5EjQE7ZW6zJfm5dgttddbN51nRcQKyh4SwDXPSER9D2VazeoT6UN",
  "key22": "2UaGxA2uXsevg86YEZbzik9eUumi9JZKgfpAnccJ3CQqWTFvoAs3QCZtzEa7GcRi75FwefYAu7cvsLEA4Jp2xtxX",
  "key23": "5qJyuHXXpGzwEfmnDNayc6SXTbhwJbMjAKd4V6KLJ5EMrKz353u9GPh4p8JbpfvGwSJPoKpu6rp288qCWRjx5Qeg",
  "key24": "b3iGB12Xr5CW2oeL1MDswpNUp6ZewAmkvFjYxPr1LVo5eFDVVjdbo8SBdhc8rfknxDM3WzYrAiTZLAWER8VDUjn",
  "key25": "4tRaS72Peocy3C8oHAGK2eoP55fjbGdKtQqSEeyUQfH3HAovoZ8pYxn55YeQdtPmbYXhLmAhcWL1YvHa9uRzGNko",
  "key26": "2VozJbErHTweKkx22E4oKkCvAZCYLpZP2mqnwLRduYSqCB5Rv2aKEEWrXHtH9Rg3LNdQtagHSq79AqmSrugPUPyJ",
  "key27": "61xVd1PNzb9FAmwXd91b4V4mFw9UY4HQeLp47x8nLL9TjEL4gwwdGA8yCtrEhpy7eHWZ9Cpm5ursGcqVzrbANy5c",
  "key28": "3Y3q1HojWGhjafeKTeExsX9JueFNQ4VPFBViNaeqThMTTzPoWFQwaZeeKrDNJhJEwPbSEJh8Ss8X6gWoc6A3g7Qq",
  "key29": "3MsT1qk4sGa3GBiLGaCkLrKjZutbsMwHUxCK1RxiNPeKnaX1Ucip5boQV1Rjp97GxWRZo5oypAkwfQ7mzp5HFpZ3",
  "key30": "21g2ayoBA3JKrhcxAAQYGusEhKhseuNXSm5xcjwkaHEi23TKeTVugTnk6RbXBbvTHd2k1iY3ha2wGg6U6PkDd6nR",
  "key31": "59qjtFAooSvx5mGRhSHnRSr4ugCmTK3d2Cz774GoTBPXoqGU1BcPCjzyyKm16eeUZzaKdksYMVu1goLbFKccrJSi",
  "key32": "2GC4fcumE4jV6CBL19E1kvbwn4ZKEjpt8W94N6YRpjQCK8WG3bTUqbQoF7GJt2Y2LaYJ3dh4YfJZFoTjGB9bKkDT",
  "key33": "5TksHyxTsABR1G83hJBjZ8o9TjjNCgAFkNN4sG4tnJhw4T927WijrZLgHMe8Q9kFqmNSFjK2mkruJW259ek113hS",
  "key34": "5Gw3gyK9LRrmLoWj44uESjgWXbARdBY1tR7W63wRtACPuRQRmvzra1pm3LAyKm4UtFzpXHxhKXQrEDGH44npTJMu",
  "key35": "43HChUMg9QdYyzvzbgsE941WvYC1oS8cj2qyuYiuoEhCWPiy2d8xDRuNWkSiveJUirUUybx7eoABQptagFBiMeYq",
  "key36": "4rbkLDYoyzde5jN3hbZQWcP53vSKhnC9JzwwCtCpJgNbVN9zkQhNbC1ZPK3mqi2T8VYQbHdRMfKvNNwvuYwPQryC",
  "key37": "5BcXwAjwRFWacwBc4M8eiZGnb35vtCfffZfyEY1JV8MB1kAJmJtstY4m72tBrumcinyzrxxzZp7jRMCp2KpHaQnK",
  "key38": "5apHNgfwruXzZAsPVvdU17x5fxoSmxvqa11UBj7vHneGhKhzz6S6xdYwctktyANTikeCNMp55bvm9XJAvwXqbZn2",
  "key39": "3czUvhdawnEptScs2FAZtvcwnjUafQW2onbAN6gPyoE6PY5zA25PajMHani2DuAr4EM3tNwiJrwtTjGQVK3yukg5",
  "key40": "4dgpwxAy3stJ5rpPunKd58H5745LpzKrpECvFuayY4JgxX3J7sw9eTEEP9faxrRVeva6aZTzRdUbe1KmXo1yuSTi",
  "key41": "5U3Lhk4ifVUPy1JquMYjNG3WxvpBZYiumyeiA3FKTZ2braTsJ32YPzzrPjPp8LJsvaYB4u7Vm5jMM7TXRe1TcFwV",
  "key42": "2o2x4X4wVt652D5o2ocf5CHjaXNC6MMP5n9xTX2SEkx3j4aVyzXrF6x8oTzbvn4UgNmzQUhUpbxosqi34CAUdkCB",
  "key43": "4KvwNYquSBsX3Vb4fC9xggmzTH9Xr3YmFQ6STFmxuiAqKQXRqfafZrKnBgvN2BwFxAdsgsrnpb1knjSpx2NvpwFR",
  "key44": "3Vb1bnmDmpB5L3zCRQjn2wU2fJNHup2fuJ7mE6zMpVAhT3Z8BGjBz3k4XjovTKdU2uDJyLFkrd5C8byZ8jvVANfQ",
  "key45": "3MiK2YxKUdKzozXCMWoZGEuwTh1REpTXp8xst9LryXSGAGZ8wMQZN7dEQbUmC8VLMzKXsmAfAmjmFN2j9rF8u1j5",
  "key46": "up2AV5wDkwYPN4rFgBdCMEJ1DxTSSxrPWuEJWGrxiqyvPLUeVwfAJN1e1tMT9y1KjmSgqHj4WZ7kqqJb3wCiUe3",
  "key47": "5KohBwsL1HdsgJLj24BHxVzbHZzXzmaNNpftgVKuWZkcNL6ksDQnvB1PqBCoim2iymYbFwspK7n4FN8wmrJMs99e"
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
