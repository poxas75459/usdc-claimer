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
    "2BZiCAz5T3hjuYwCqYtkEHTEqTo5yT9pSRM7WRgeY8Sffzw6EQCYrKPzJN6paHvsPwuPtst4zLsfzoQ5GJ9cdHZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BE29fykwY2Z56QDWjkYHFBmjwySdFUk1jHE6nMd9GxAhL4tSxV5t7fsAMLJndiFndkhSUcskEmYkgkvMWb4snYy",
  "key1": "29M91URe6pwFfW5AVvV3dnhrQZAXe52UUZhSoQL6HsNdpkFMeomWDYmD35VJhnXMx5MLt4MPUKoh6dHC38qmUkA9",
  "key2": "4p5UvfPSs4umxmthxMAMETu1NW3ViNiGpHrk5Kan8hAoMoEMgDxzt9XfsQqMEQRH29tQcsmbrUoZ4SvK8F19XPBX",
  "key3": "279DpEXNgPc42UzsPVzT2UwZUPuJufPSLcrZZq2VzWrqhBBgLmtkCTaZJJ1YtKZix4bQq5X38pUBpW12feqcf8vw",
  "key4": "3qbGwZ1UezDTyYJ44WVd3ifnCBufQZFsRD8CFx1FATdYNPfLyWGfx8XJrWS32RJnGKJLJnKAosTN3vxB3gYbHXmg",
  "key5": "t2WqBDqecjAPJwytmNLrjKZDiLTdfxJetLU8vfbS9Sg5YF4imeQgykeV79t789uPRKK5rYfngUa1q2iwnew37tU",
  "key6": "2Hcsx54svxagnkfFgR5pyaidLMUmw3avyR96tBW9GeJN4XM1GGtFdsS2NJhW6GHvgkVigXK9oFx1b8HuGFji2Pke",
  "key7": "oRmBpQJVEPG34yh26P3bkmKmGWF6wGnrzPeiATSbn39AkzdZwA1eKG5oEZHCu3yn2QWRaU5JKYy1dufPYgCUtVo",
  "key8": "UjebjMExxd2SJPkNYY4m1UkneD4j7GRt16RaNFxhL5iMxMR35LhvDUhomhavt7Qc3QWfiCmhVFDYpAW64nXXzzv",
  "key9": "3YwozWW1ceNrijnUzU9GQhx8i6u5yE9AszYp4qAe7BZ2mBgrGMa9URtBWpdcwTbYs6JsyFdpPnMKFqtej1VpsnV3",
  "key10": "564APNjzBcLjhgqTsW6U7DNgRQWv321MrNpD3NZauFrdxBhzZf9Rws4E8GmGPhNB9VnF32YihLK482PBQr86T8vk",
  "key11": "3ECrvRE43WRfStLqi9HHkGVThx3gnp37Lcmnrb6G1PLmgMnQ6PRtQHs18Z9X2aVuWQD3sTKDby2oxVFe9FqQ9XcH",
  "key12": "61NY3PrgvWvGG5nJAnyBkVxH5YPwJYXdHf6VoidNHRZbKHHzPqq5wdRGBEYKiEPQRjbAwPnEy71NjhEHC8WhMVSY",
  "key13": "58TJdPaa2e6eRTSXYBz84ypUASqiTHA3RX81F4MFhUWQXSi7Dr23zF7uWYKeDTinALERTGaDTmJmHmg5FUEhDgAW",
  "key14": "PZ6GHtQvN5PUv9fp8tJZ6cyJfjEWo28UiwbKNbLvdqunVxxWeQiBsWa3mYNq2FvhXq9jwrviy31jmi3mYWTDTVW",
  "key15": "3eUaQ33yV6hsF5E6xqiFPMQX4EnhGtUNDCqKHa2qKM6gfBGJ5Tchbt8kCfdTkPhufiJyojAZVpVsomfB4C3ZYYAe",
  "key16": "22Jph58MKhxc9N52HNCK84ri4eg8CddkciWbkirC1zeoqSuLbY6vfTUZyNnx3XZFPMDYdVXf5AF9b7Q6LB2HrUkP",
  "key17": "4PCLT6NmrcbsLroEbt889zsd18zQNDdTAzPhGaybF19qYdD4Q3xv1vLKB2fkYVmp79pD6eanMBRs2UfhXn4Ff76s",
  "key18": "4cW6PBniXej69m85qBTeSsDHeiEgWGVBrXWaAcsi6wnvDUU1T9KEVHUNaB2jrkHJKfV9HWKSMe5vou2nJXdE9yqv",
  "key19": "4vNhL6JZm3gPEfFqJMGJu3aXCyjWpumx7hs3SUCPY2XMVt8UQb5bfTXEvQhWPVZNgwbeXEFy3NmZb9qCGNGCSjbr",
  "key20": "2QuJRrfs1nfdAdQDiXzEVf2nESe8uAtAJPGdCBQ3uynnCokF37JhBNLSwUdkVqRY8fbrDdnYW2kYbmFcLLeHmz9a",
  "key21": "acs9A4KrVotpXXJLjBbaG6EEU7yAGZ5Y3sg6XFMWtF4niZzHzV1sTPfLCRyhwxuzNGw3ef7e3WRgDVmv9biWRYs",
  "key22": "4G8sBeKiLfHBG1BmXT7XQUysHkvKLEiKEU3BUuXWzcCsx1rDrPrSGQUqVruiTfHWXzhYxpuTsDZD8CjZBZqzjw8x",
  "key23": "2UdLAVpNyxSoBmZGoHb6xZFzL23HLjoMSBJV9p1t2KPuUeJHFZNrVQCunDKhtqZ7ZsHVgtDzadLjm93fPLNQhJHe",
  "key24": "67Bg3ntD3NXARBw5NnrTmvshSoUGVt1yBUxmtASBv7NLhymBdHAd7mTwrA93zD3c1rfMwCYLwqqoLBtQmfNzmroL",
  "key25": "3P7oLsZZmGcNkDJFFjB14agcsMwbsfugrsqqKTVs1nKyTatt93mtc6HeoZBxNyA5TkzpHG83UFN2mZjUNbV7nJJM",
  "key26": "3Z2Y58S5nyveAB9ZKuMhj6gP2QC2T6tZEBMfNThA1zmvEqrdA2nerSZC4NQD3EvnzGefE51wNkcrSkRV811whvxg",
  "key27": "hL1iSugvFcL6xuREycC1dUnD9cEkKzLJ4r665iG4S4cVCYggFBHZVkJ1aPApSYHf4FekaVhSvaBLfZigxWurQD4",
  "key28": "3bc9evQBnZQgmN72Rd452gb2wDGf2Z5SwXeb8AKpvuaPVSPTYCpopYYMNDdsxHbpoiS8dhznLqNzpK6oKF5xyvPc",
  "key29": "22GVrcM1p8abMybSrMhxmauTJje8KN6jhbVBGZcSgBbAzpuLxeqhKZ15D9dvt6XRYXpPK5916SdbV3XFA56cGSRq",
  "key30": "63EA71NsnS64ZLCfYPGRbsPQtnrkhxq6QJUF1m6z9cNrrUT3hU1WBtxyHK4XiZY9B2w8QhwARN2BBXkaQV29hXxC",
  "key31": "47uZacXpVNLKMhCWvXqPGA1scR1tHqVpkA5XNCQWWupoLicxNynZTCekSns6aZ4mdtaAyQY4od3yiZpB4PpUmrLJ",
  "key32": "yLGor1W73Hn6Pk6SCrUeKygpvWpqdow85Yi3jM9Lzi7KRyDAvzLom7Drd8vwXzNb3Aqu4xea8pwMiMJFkvvqBDj"
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
