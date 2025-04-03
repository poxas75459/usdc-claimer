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
    "ggSaSRVVhKMEuebuYHC571y4oxA4vfRMwKeTZxckbucbd9pwjUa3evT4Fc89qJgp9mrcZYGiC9LW8Ez1toB3925"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5efGZT97Zs87xjCPSi6fSBJkSEnPbziWAki5uCg6CN8DhR2wMuzmVQzNrkoJ7MFFBcVWpofUezMPBQvSrKVr76H3",
  "key1": "3VQrhSf1jdKjzeaFPvNGAK3AjxvzmxyuU4aiw2qtBFD4ASyZbA3uU7UPuruCtwJjQFeD9Td3DUpB6gpTfKfKTQAi",
  "key2": "3k6aQRoucpVQxma4mAB6NhUihWPsjLyoNti8HXDV9y4yJgGpJykLgHF5HfMpA55ejbcJCjgPymkAAqFoddZX9PHW",
  "key3": "4wV8Za9dt1GUpJoPUnMbf3iyYNSKC5ssfwLFSGuNB6AwjLVXjFrS5VBD9ZmAjVruvZSMKKhW1Viu4YKen2gSnUnU",
  "key4": "4oFziWG1PSi6iyz1trLQc2HGbY5AqTBA5BuvXoYBcsSfyckfYJ56FJi4yh5BzuZrCeH6BBNLu1DcL4yoYokEKuoL",
  "key5": "5gi7zxHo2yYY54BkPWeAdjFj3rY5AWCV8GsjbuyPD4SfvoYCaPUsyHgGxFUhPfUu1WjWcAFys4iqrBFBS18vPB7N",
  "key6": "4r4aWjMoeF7mrYfP3xSYToHde1iiSNva6WsSkbWnNm2sfEwxTiep9qhgEWRh6A86Wjpi6KghVbwUnyj3rHE5xVut",
  "key7": "H7H9e98bTtK5coCATEdZ15hniuTa4v75PfnMhdL4PRP2xF4eT52FZ1w8qfkGcJFqQTYZEdhtQdv7sgSxrtnhwdY",
  "key8": "3U39VU7eaQ9XxQrasPNJ8zygak6xq8Fk17ZQjRanEdSVzXqGQzMLEdK2ggSjrZaLBgn4YT7AK2JZCLho83QPvpbY",
  "key9": "4mFfzsuRmRSGivAo1xePiP2bwh381CozNHajfTnm8YyjMQP3JonwBd3KQ8U1a21KRHnvLwWa5jmFNzjmYSynBsLc",
  "key10": "3R992j3QLPScvGxAMhuqLihVYqaPyxjaHnZbPwU7LdBVBAW19rJqRwed6hbGv59MiyWT348fXpZ9ShuSXjDu8RDc",
  "key11": "u54kMUi9Pz79iLGvY5Ld8fgjB2kv6YvDWnNJ2ZrHCCpqCdqw8iQKVcLHkx7FhTFwq1svdcgQvBh7HNXJf9rsxqu",
  "key12": "5Q5Rt3Cxtpb7pMzGjddn9p3KDg4WkqgPjxpHLy2Cv1acdcQ8fLaEcKzYMmcv6yqPRDx6RPX5rGnJR7rPn2jxoUsS",
  "key13": "3TigJ4rdHSMVmyH23fLfLyG8jLaToXJ9yPnsAvQMPvKNZMaZ247Q5guuewxnjrJQ5PHuY1PpHaf6q6fxk2yzWzYq",
  "key14": "o9xZCNbpDUjsRLYaMi7HTBs175aNhSFUYZ6No76i44Hkcrv8f3qFCv3B4maE5MHabtC91aDgJ2kqrFx7j4Tp6u3",
  "key15": "26drdP7GHRuYVyBW2o7jw8xevstZ58EUrXbyoGDPAkFFHAFXacbs9VGiBFZTfNyyMiFbwF1NsHPBbEhf3ajiev8X",
  "key16": "3sY8yriL3CdH4JitaS4RbdQP4zp1ekA5yknxciUa4aLJbVQekeH47Y4tZDmBqnA7sBxPhHFucMKH5pSZgXzWidzr",
  "key17": "3BC7UDg7x7WZAa8ae5MgwL78YjRkC3NXcXCUWj84teJLktVFFkFnVPjgmQAd1QqQEZHpmkzQkvBEq3GwHbpAZafD",
  "key18": "Ni9fZMu9954HoLLCanpLU55E4B8tK4oE8tKyLJ4LJKwwdETLScsyUuMGCs4HL23SsNXTWyDqNrVLoC1zBr3r3P1",
  "key19": "5sW8G5r6CZQ4DPJ6q2rD6SHv3TrMnDAkYp4FeLswNvsABJvapoTrPzJn1XbypaUL2gZVzbWPjdH4EqMwRjSyvxyp",
  "key20": "2i99GwQivMox1mqmUVzASE8Yhkm4D6DKCoZFnxJbDuD93iKKqFiS656xkzBWXktHzZ7soLG6YPUsdvAjQrevD3ma",
  "key21": "2meGrwe1CUAwfRCHpBzFo8FHYDB8yRFubhiPEvFNVgL2oqVfb7Jbwwv8QzFvAJjegf2haBqJ1bbhfL38jFMTJNJc",
  "key22": "42AhtcvTP9DpNk3roViqohTqaSredJLWcSYGu3NLDNThV6kpk5yCvE34H8XEv2BTeEbx2Uk4Enc6HNSuFd75PLjV",
  "key23": "4TQZgxzn26YkgsQqLwiTovM1HU6CvCyxUd7ihQTnG6LnBp4V2FLWacLgK5DvPSXEGqwgYiAP6Y1mEtLFS7Dg2xWn",
  "key24": "3QCPV7qdT5wMTMQ7cxNp9aJ9nZgyC7abpFMcfQqPnfCHSauGdVyU7MPFkyH4f4FX8DbAFP7N9ds8SgV5GaYPQ7pg",
  "key25": "3Fce2kWMHqXaixFXwwCGwi4o5XMdxi2LiohacrsVrSPgQPzJkiPVSggNCu48HyKgTpBWUsKNWiJ8z2s4WCcEc58U",
  "key26": "3ejQfN79h3k5FfqMukvPBrVsvnuB7W6kHnxhZwXPp7Ewt47yBCj6Fiv7mRkmhMgBbnXFCSeFAHZ8RwRgfjcQLBiD",
  "key27": "3GpWqXuUDg6yVgGtNXUgspAdXi6VfHGrTgQCpaJHDgoYa9jQe7xLE5rDG4ZPYGHZzU9owQ8pJdHo8cwwF2g3nw67",
  "key28": "4qS9iupKx81zgo2q4p7fA9iQmij5c8aNsdgM45P78C6gu7K3N8aKKSP49m8YUk8h3pmoitAYD42ZB7XZcY2kf8o8",
  "key29": "PiyMhiU3S63z4o3xDPWDKfrHrTwnumYE8wKz5wGLcRq6R5CmkjqUU4BUeiSrxXbY2KyHaPMojPKYdhh9fhxsZ4p",
  "key30": "2WqbX1ZoJsJpd6beLo5eSzhmCE2aKo2D1Zbo1NubZ2kuNUJz5auCdVSY7zNUNNLQx5MuY7wUpowsNoM74rn8Eoyr",
  "key31": "5wWqSijkhzU5pXHY2K7cKHQbtRUEeiDU13fno57uoze2utUWJqB27fmA8wt2LPtwiYbHTywkzZQMc3MJkcspayu5",
  "key32": "27zZgZ6NyqY1bzK1cCoWN1w1QBF8mXt1v2KxsYptR3h495BF2miFU9P35EAfMkKndRaWmrMsw9hQqhuTQjMAq74N",
  "key33": "3Y2bSDHmgfwY9okWGbTSdJCkkpDiopgGbjzc3NsKyvwf5U5fDmfv73rLED8Kx4rsWi2qrxsUReLBbA2C8CbZpvbx",
  "key34": "4p6jJPwACugT5VefZ3Za1WykjuGRyhqANnRSqeRbexiZdB43pbV155daRB9kfB8C925fWqE9dzvB6P1pG3vrgE19",
  "key35": "2EPGsFB8Hom8dhnZ3p3B55qzkoGtB7WWZBdkemi3YhokNZ8RRSkimJuHMRGdaZBYWtqh1Yt8UM4av65DQBBw39yN",
  "key36": "3HrBtgxHYzfYQJr91PErwsMkQGsQw1cPmtQiNwVHR3nMzug6ogdL2PNW6mmBxofxFY6b93eoaZJazxKJuPBrMwQk",
  "key37": "53KtsVNfGv3sm3U57XLh39z6KAXngUi2s9WYZcRTg9TqPFrnF1wyfGLb3ju8fnfMrupoizN5vYjo5JTCwv15xBwv",
  "key38": "5Y1A74fJfXoHugpLFXUAqTJugRwtNEtAGipptFJQNhLUQ1dB1VyfXmJfKxHxFm7pjh1zqb3jSNocaZq5fuNmPjyE",
  "key39": "38Q9DFADwPF2e2oYuDLG6Q9AfmDjAZS1uKwB8iKW3KUqdjPWN1kbfhWzRCktoW3Ra45oahCVp2LaZ4CPmiWsujah",
  "key40": "6717PBrobq8Gq4ye87QToxFFqZtPemDeZzDYptAwLfzKhwbF8yMzWQMMPRwZZaYyAgF7NtAYCRsYuPi3QhjPSJwf",
  "key41": "3bgZfDGkCHcr3irzzfjPcFgmNvocpfAm6P6syfVMjSiK9SV3L6Ky2kwdFpFCSKsxz7sYFJw8G6ihM3aKKcRmVkkP",
  "key42": "9cMAy2g9VZ7zdY51jYPBbgXGzG6PmWnJfjpJeCg2Zp3Zwhj4uxFy4JANGrUotsvd6pFSbyQxoJNiqHf9DkQddcc",
  "key43": "2iLLx6oj1AQoX8oodCN9rhdpUNMwtzbXgQmoNEoixtEU1qaDXxaTgY6LTHzEufEV8mG6CTvcwQGA9ytdDd2HrAZ3",
  "key44": "622hbbN5EPvHLHaTgL4Qi2BZEEThQQf4GuhWdtWvML4CKErqXfnmG82MfKjyu7nmbaNf7eDhBKrhUG8yCBPcVKNg",
  "key45": "28EU4BziG2k88fytCXQvB99yViX8wdCyvHMaEnTcRtKpTQAsyyJ99vBuo3QcgbLz3qDNR55PJ8Y8oUpMRNC7ZPJ1",
  "key46": "3ZJxtGG3B4DMA1KgxpZWrYBxAvRxQVokzdtZTVbQ1CbhGru56FXkjBU39HSz5qBnzRcwDCDgwFMS5KwNVTHPtV1j",
  "key47": "5JVDRnTGqza5VxKABcjx6HRPSqXdA1PoBkxAiWsV3gkctchT9EUxBjAZTiNannmCpHxJaRQLTsnMD8QdorxjVwiL",
  "key48": "4QU1uiFTiQzepKhSMfkXeYc1rGGHqtHMpuMNHypMSYA5EowEEkDwzjP8t3NNDq6SdNchAK2KiGXhPf6ajJzdErkx",
  "key49": "2bm7L8HvzsrQ6msJ8n2ZfKr7ekBEsHbdaTnS25MKqo7ihkb1Xqoz3hw5doj9h6h7ZM1hmirUapZDYsPhvUCP1ZBb"
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
