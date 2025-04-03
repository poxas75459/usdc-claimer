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
    "2iqetthdJMinx2yCv6Gxi96EUSbSnzkyD1GXbDpwTySr1bfxR9jv15XT94XFH93Cp3JyoYhHQ52Ai8oM24qfYPtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49tcZhStncQpVT2kEfn2xfng92qv3YEzW4nADz2ZQ649qzU7zhhtDYwQJ9ZKkhDo2FrAiw1B2WabjiQpct6zxTY2",
  "key1": "aVgmtmG6pwxM6aTYBRrKrcXEbMRSuthcH1Sk8CpLf3PhFxZSurGhJ8FwChVqJ6urgosVq8dLbtet8PFQ9xkc3cx",
  "key2": "2Dk39VVwV4WTXrBfPcM5U46Qp8Fo93Gpxnyzsc1SfWgRqd86uScpmNZLpeqkoMF8zdhm9epGse8bC4rDoi8xQAFS",
  "key3": "2hoC67h7ny7A9oRKv6DhBEGKibyayQXiWevFj34kg3Ab5YxoHax9qo5fX3wQXXECrVxPH7y5CAJ8WHEQNyRcxgMV",
  "key4": "3Fxw6MfitsjfSwqf9ky9j2EozExsuZpYsATzmZh2fYkdbYAMn93DZ6Zf3M6VRkMCwWFAbMVAfMyoEL3txGmZ3VU8",
  "key5": "4tKfLGgQ6RkmxypH9bNivqQbyyrH6f4c3b74dbbmAVicbXsEPG4ApeKQp4ZRSJGjm32aUuHEotgu8vnfFKUtaeWC",
  "key6": "3gmRgsV93oV8px77QB2wVXKWX3bTYVuYMCAePKjJPxMcw3XFZ6t8Hu7VD6fbEwQvvuaoAJ4Q4ya9VHF8zXExWspS",
  "key7": "2HaTvrMWWC2TQg6vgvqr6NRqmWv2nmH8gmrWNNMJ4UzyR8NMtyeB2MjwHD1kftqH4LPSduYQ1crHjxHwYT4XFxnu",
  "key8": "4yz4Ai1aLUdSdL7Wr7dYuzYXFwcFkXgoqCixCLKGQyvZem7FadPkuoL2ot3JNbifVVGkbNUXZLMY8JfuH7riTXky",
  "key9": "4qYgWUQo3AGn2h8oHPJuAm7DVobytK8GXcWodvZ1i32gFtmzAawNgTb9MBGPzf1eUNRcCCHRxUYwy66DTYoPYRWh",
  "key10": "2sV7Snb7hvmbtQ1N8EqeEGja6h2r2qibsNKY2vt9zKsUWHt2CXrxF6wzcSTB8imxFV96Qmg5rpDvNg652UDhKfZa",
  "key11": "3cmDFkkFwBTjk8kTYwUuT6rJEcU5z2tpmg6TYmUfKmM8qj2x7v2Ef2H5tr1AKQ3xJmDLqgTZC8AL1k45ceFjChkX",
  "key12": "272cMdxjY4jDqB3ZcRNckniYfqPjVaxMVPYupgS5TJqayBiYEbybKhNQVAwmN198F5njaS7CYkRAGXSTawYYrk6i",
  "key13": "3rMEzApFa2T5X3TR5GK9SRJAKt6N6qSuAUxpXrDsgbAF6CnvYxPGHDSMZACr7t6DaeSvWkP8DNv3fHxyxBSmDJYL",
  "key14": "46pdtcQe7wogqP4h2jsMRYaFQs99DwAwK8P26zmuwZbmD4cViGXz6JFp2FATSPnn4dZoBgJdjLphM4wvfg3RVXgF",
  "key15": "34bJvMs2yhna7xDgRNC75JuYMuGKAZsURuEFWx7vH1pJ53eL91ijBAAoKwhpu5NRYQEhim3D7HJdztaijMt7nR2B",
  "key16": "CohW4CGzKTR8dFraZeNVCz1pd8mjTgJbroa2XwjP7kMpoxALuUBjnN9J5MpoRXMUfnAA6PehPW3LPuu5NXXa3f4",
  "key17": "3Zvf7JApCAvEo172FoF2UwDcgqhs6x3YJ4HyZDWYRoucVFJDwjxNvkdgoRyDyWseJGbEAoGHy9a9MUQ57nx3BBnp",
  "key18": "4VfTvF6tn7xg4GXXNYCHGxAt6FHJeVnaJMcH3AzUggCwPCh7wXTeYY9nRm1ph5zuQK5dWxKLr8iXifF3f7wnwmPo",
  "key19": "4bW8FNNTrdQYcsZr4Ts37mTrjC4uFGahf9rz9dDodJJ8w9n84Lh9HyfSDFuovavK9hC31nP6R4pvkkEsMuZoXb5V",
  "key20": "5AwFxm3jx9uXVuk9Y1EHGphv2WVyUKHMvj9vziWdypMxiygZPJVYC5TMiSnWECGr2eXwwS86TL8iacPR1tygsAUM",
  "key21": "4fHDhyLGVgMp5jjs6wTGTF1yLBBmquTEgks9kRDcFRtpkkUaceGoVtFBa9WMzavSTKkz1LU36xiq2s4de7tRxV3i",
  "key22": "2avnLXDafWA9u8J89S3mXDEsU1XGuYoXcJUgdvLiACFwtZTg9Xuku9JHaW2nxJkbM8ZsvY5TdT4r9sabc8A1VPdT",
  "key23": "51qrDr3gLTvupoXGxHuZ9G5BBsLnVh3VXqoGuWUKwYymC43LKkgSown7e4GP593YV48UnNTYsv8QtsSqyYAYfZby",
  "key24": "2yJP2wXKJVZSoi8gWNzcM5wdxQgJ7SKGfSYpK2dVFy89gmSFLWyUz3UEUcckBd4yq51U3xnfD7Nb6Lz3hNFxQFmG",
  "key25": "4D7kkopVjbLh5GREyezusRfVqEebLMZhkjPhxgGia8CJmJMY7NcBJkP4EfAxAufrKeS3KCwvSo8k3HbN3temef4Q",
  "key26": "3aS2c9SNp2HotDC3NR1tTcuAkTTBWJoySKxfK5cXX3u9sW7EiBsGWSQpPhb6NdhcNmLcvNmKr2CTMAuYvDNAcuAT",
  "key27": "26cqCaPCDJkbnnL11miZAnrJQAefjXqJC8V2Epy6FUFkn4LfZXsCvBjnZ7dzCcfprGctBJs5MNEQ4CbDizmeqDmN",
  "key28": "d9ChwWkUvt4RYSqdJYa86HaSVdDDcoUKHS4u1YK1sqtyqoiYCa1sEEKcscuzjvR6rPavn61na8N8mWuF6STf3AR",
  "key29": "bCF2XsPeFSa8kcba7Q76ASoa3EdsyFcXRwYxuGWiw1Bf3jH1ZmXj6WmrFJABBuBgev3RrBKCE8JjTQkFX272wn5",
  "key30": "2ZhHyj6UA8Xc6BormEvKEp6ZBkT3nZ94hjbcFRF2wZJkjkT6iHRfthxGqCoYcFehLhEACg9rsUKm4EC4dJLq6X43",
  "key31": "2s6NmBuuDR1KA6fYLiYxWmTkY8ngcnYNf13fxfawmv42zEMsXsGdb6znVGuMPAZKGxkHgRZTYV4HWTdBK3XnirHL",
  "key32": "T25YpMvAmLcEtmg4TuFBNFxzv4hJgi11bQtUPkh1KpP2pSSHgpYyKdCdTLdBEPfCsjYrRFAm7ikSwrfjqd5xtrK",
  "key33": "Rg1GQbDMx7DkDm7PJB3FuUiHoxegXJQvtqPcM1RVFvvPCi2k4rPbU9w9qtQhMSZU3vgE4BKi3s8WX19zgzbd9zo",
  "key34": "5vhsBhA4vQAwtApxVyEhShPhwKfDREbS7aEYzVzt8PpSMy8rbkXwtmpkHryXFkLWj6pXbTpAtoGf3mhKZMRcmGV",
  "key35": "Nf36R6STe1WaLWCrWAb1T288kxDuVbnrY7e8LdxZ4r8Y4nfjasaoQydeQu4YfhZr3N6zfrVTst74t69dB2Niv54",
  "key36": "zPtsTYDUbwSd19L6S75p6jqNUrn1U4CYv3oCBrkr6FTQgsrt32ungBaVd9sg2AF48KPtc2TcjPJwGJoR1utaWzN",
  "key37": "61JbbkrnvantKBbwZBAnuJRz1rcug5F55dCtck6PCCKyTyeXcM7GgidrXgSRG8UWtWtdUeQDkpY5eesJAQ7xXaUm",
  "key38": "2x3e2q9u7XJP3cEn6KhQ15fRWb2YQXEudL7GfGxbqghMnBgDu8rfaeDXYa8aMxD3v1hekm4rmWcgqTdApZCadPqn",
  "key39": "YGWfKNmc5mgBfmwwtx5G3MZkBhaYGMtmAzKZS6nV2oRGBECNN8CuuE6HcEfSr4atcKGb1RuYQtVE6MGQ4kR9Ruy",
  "key40": "5p9Fj4rm2N1q81GFZnAHD6KBSzDrDmyuje162CmZQe4MyobHMnT8VV6tdR31edgFh2TG5RhSohgeLacNBNJkeVps",
  "key41": "2MFwDnPyUUrmQ3UxZjtBbXpNu2uRNpCD6oj5mmVUo2BbfBD3QTy7NsMHYme79tHFz1nN8qqquWNnQKDky9JHgnDc",
  "key42": "39k7RRqxx2xSrfi6bFnfLfbLs9oNw9UZsnc97yzPnS36tCGna9i9UT7p8zspc9pZn7y6ccy1TfErEeiC1R7ypDQZ",
  "key43": "2DZQYE5fqGCkZoQ26bYT9K2UQBK6EQK9XMtoAhdSB3gokAaHxmKa9UzjYmRMV9be7u6AxM1Nsp7AyuzgoVwSHAWJ",
  "key44": "2TuY88QDgP5xABHte6ikEgUMrrpEnPt5YkYB61bv9pYk11DDkvX861EpTFpjWYverjueeg7swq5sdnWm4q85Exfv",
  "key45": "XVP5zb1HNc4b3kwJtdZxPNXaZLJTVrdPjX6Xskjtfbws6NUR7eDxKnmq3oCKa19rKaqsESgAq5yTNUHmBVEEvGi",
  "key46": "4EnshvbwoSfAsvEegeaFt6zcRiht1hFHZKY6MTCAVJ34sCSSiEPAAN1AhYZeitdToSzNrTFm6PYstBPQ3z7KviJm",
  "key47": "nhBcaPw5RoN5DL9rbCknSZdZxh9miqLrBFRsUuryBLejh6D5drrav1CzRo2oBDPGGN5SQDBVXgNATbEF3UFqaJ1",
  "key48": "2MQJhLE9exf1k3MGnnA87XDhRPZUhsxLjTLeWPLwmmWr1Ym13DdYDtstcwTS9RsQ3XLchxMc891NLe5dAFZgsnz3",
  "key49": "5vJpzqcNShm7i6h8C6TKp1G2g6GvsTNW8RX1RYjmjNcmR78fkbXEkrZoX6BAT9nykEKANCZV6soe73KSDfuoZj4"
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
