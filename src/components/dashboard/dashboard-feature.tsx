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
    "46VeAvo3kXXXrp4fywfU8f5p45nNmTZZGzg1HdcRn25uPxr3yoEBRWEiQf1Wz8R68tSnNBrE3FSvBQfQ5hKW3osv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232MgSkzEB777Ae9kmBtxJr8rBG4ZfM7tzc79Bcm5YMnq5dBGbXptWedouWDVCpWvAM2V41j56PEMGcVzAywKeS9",
  "key1": "4dRmNN91bncVsAN4qrFsX1FrMNA31TDTngjasXtAuSAqdDckfDr5Tcgk51Ma3PB3YZh2phhML6LETp17g5VnpMWE",
  "key2": "5EUBactTgWe2UrGtet5oExksCAbnptdn2zNzpsfzKNio8AhTFomSjXsYASNdGd5ACmoKrVKm7rmoysovFia238xp",
  "key3": "Uxaa1jZaJrQv3Rmvkpn92LGDwkv3tvBpCf71wHBT5ezZ4ev8VGg7qMp5L97cwoMVtpCjxa99fqnDWq9WrXuzgr7",
  "key4": "5UvfpLhvPjqaaYwmGrpAALuGEbXCyXmirk9dnxgnG2EyTt7wXqqGKuL7oTwaDDcSDXpxxZQ69di7jEHhEr5Cc94C",
  "key5": "5GYhYpo2Hs3LRdvJekXKZfwW4LXA77Sd6FSPaMXiRsy4TBLHEfQXz3dfcFjgqwB7mx8N5eRJsm4wRNHHJ76886xy",
  "key6": "66qPdRPfynfD6DBqLky1rndwhArY7gkHzmzGZc3jtXCNeNJrrVh7huFpdGVrJHsdc2TCiV5vZAYe3GKgoqxrJeAd",
  "key7": "3JtoMd3jE4AuitG25hHHSwkjNFsdhiosptKE8zoELqX64YUynk6aq6nGwoDmzSdqRyngFk2sbwssbZHRtpQ1XdwK",
  "key8": "598HXCkSmxXpTHGVuF3b1scv1ivFPjcsu8rZLyxtwSvzMyfF5YZE31kTQjXKU2tC9HF1f1WfXjRZmnhc4xtqgH3P",
  "key9": "36VXdu3BuSr3nWVVn9UEiqZU7pEyMa2Mmpt2fySFuzyCPtJSSMAqAEE1VsW1K3GFJcKhhF13NKDvP18RXyzY2mFZ",
  "key10": "2URt5CrxrAd2bYwteVgQsaUVmQ25nAcqiTELaaW8V4US6FyN8H2bWveUX9USUrQp2Z9tYo9ZR7U4wiLGykrmVPf2",
  "key11": "467Xs2KtDqaAmkpnBY4ANced3jnXg9dnrMDq9MHHEnuPLHta3undzJcHNLLH9FKUm83pzUNYEbA6bFsiu6m1eAGb",
  "key12": "4QLFQHhg1fsj52erxhJqm4obxHAZBJqRi8Ge7ZEtzGPwEPcaWXtpuyX4JXJwTPfH1G3ULrrPHf5z5LGBnDR1Cs2n",
  "key13": "2QADwF8KVGgiCAbTEuiG9T27VwxQb3qVj3zRudwo3v5zc9QFo3qgyz5VNFgLqNTo1WPvogxYYCGsgq3FGoeMS2R4",
  "key14": "2dgafKoLVW9Kai1m1euo3sj3bgB63D3qyvB8QUV3yPG3CGN433EVHKzAopQpcFja1zkfGVUuW5yPf1rxTNQgox73",
  "key15": "5YdnDHT8QC3j3FkMT9WG65Pdg9JNtuVuHPumzUoEx3CE7PySJjY6yW2XEtwEyWYQGvxJcAb5wtdLCW4cMf4T6ALV",
  "key16": "3frMJCQcotoVNaVoEQ1gnE8iaS2VoV1Hpgy3PRPdEELUgt1zqtEfYWiqLoFzQT21KSfMCKi2JA7GxPnYZ7wtPXoK",
  "key17": "Gew6NoTncFPsmYtUs1jCGsqfzNjWjgqm4KSqAqD8fq8HD5vvKJJJHs76B8wSssSoxxEa9rv9zw3Wct4dZRGMXJS",
  "key18": "3xNMyKWkY5H9dTVjs2UFPdUfgPR49fbSsyCWns3iAYpKzaQYz2Bm6dM6HfJBQDQasi7BmuzDBjDSv8UdsXAaxhCW",
  "key19": "4bLDPETYUoCF3S5sCC1fQTn4aynNo6cYSSuuG7xCGhg7EooxDrnoScpb4rHRqLb2cT2TJVjunDgrm1uRCpHAYZsf",
  "key20": "4oSwGwDM9zjLRcX9WMGtG2NVwwy9CeZVFcYvecFTyNwhnsAbwrMEMQ71GZnsivjVph4AjHtshrtaiNeSSgZgEKbu",
  "key21": "4ezQs2sAFdpxxDSYichLpJ51V9B3LHJyZYajHUNovKM8DAhmoWz7dD2NSMKnqj8GtDw6y1bLDLSFadmBT9cWPbE2",
  "key22": "E1GfP12qv9hGdM3xiJRiUj19CfGvcDG53DNbbws6VHVap3JnaDzLvDeyoGspLHgKHNxEsnG7q2YCZkvWS6CoEQb",
  "key23": "3piicz1q22XCZ9WndvFFp1wN3PoLTUCax4ccYSW9oXevAhAnXRSgR223E1fF5WSvvBXc2if82vuQNb6JPKaRYYyV",
  "key24": "5s2t4tqSKX85Ho48yhGugLwgJwK5g7jFSM5XYBpZVDtv8jAUmDtiHzddJaWW1u9NgVopR4WJRqUAMhrwA59cxc2L",
  "key25": "4eZwm96FLEHBDvpcc2SSufr3TdxfRDwTi7DwWr1zxyBZB1MFy9kMRcPD7tLmiKwuZ7TXHeiZRWcyHyKsfmwxfAxW",
  "key26": "36RJid5oJTpaYvdDec1CbAGwp7yq1ZpMdsr2oHQE1WinT5R36FD554gTePkNczrXnRWrgXWoGHZA5HCwTASMysdH",
  "key27": "33JX46kGNbjVwtBouP7GceVwojALknDMVvBrhLEVwyNCWy84xH1uxS7RfbtyHy2tt5FNyVP6e8RJ5eSpbomsmx7a",
  "key28": "54UBU2fxmmP4pCemKtdCJtBFUqyFZ9abYVLYGR5RcGgPHhJHFZ8GN5fko8vHDfTXFv8rH2ztcJzSGuoAF5Wkfrkn",
  "key29": "2PxSn22hPLS9mTXpxEqQ2qqE8D7qwspQAZ3oowzVMWp7orEWEdFL22e7SPn3KKpVmc9Jw7cyySZnYd6UnMNjHA42",
  "key30": "4TKny48yYo1CJ3EGJmdn5hckjiGZCwvTw8uTF1TaBsu7PFeXUgFdqZcgviZvbizWKQ63fY8BtAftCakaSWHBrGKr",
  "key31": "3qTWXVMzFPwaKdwbSgPAy3Kmp4t9QXgxUbSgGo9yAuPTUgVFqinnAEtEioTn3ZDRTLuFqxTuPSYjeYgUQs47Q9jD",
  "key32": "4EtWD7qUL6cKNAW7N4xs95UH6zZybaWGfXJDvbB6kpQUkxekdzwTksW1jW8THSdDtnarzKoPNseVJfpvFX164G15",
  "key33": "3RnAr1JMJ1hqtvJ7mk5HouWHhi7DfDKwzgCsZX28srnf6uY3J7g779sefZuZxcEGS7d4qNQAnGt7U4Z5ofv97CCt",
  "key34": "27XrjMpdkUmECcfajszPgMFMpAT3HGa5gM41S1E8mx7WdjgDfaZboMTsu2vJckcaHEpjgopVf4nSKzqdsVhbTHN8",
  "key35": "3RuZKVq7TjY9pzJhTfnwQD8wJWzHXDjb7dEcTgqoQmFfoPmQ4nyyktWhtcbLpBzq8gX34D4b9aR5ZaHGbJvcXzba",
  "key36": "2vJLpU6668UnSmEdhATxjzxmYaJCQJaWVtDc1cgSWTeqhtUSUdqZxaiYkbNFV9BvCsw1Jox4aoxHvkvzWU82ESU9",
  "key37": "afQioQyorZMUGeth5v2WBcZLMd28FmhVeprrkran9HBAvEfCeE1zD8ZQhjwcjomrKAYDnHxFCMjL2mgCa51hgTG",
  "key38": "4wr54KM8cGhMtQpfUtT1Pm1kriiBVrXMcg8dvmFhyTBdNSaQ9DKYah9LGsy8Y8U7YNvMYUwf45yARbnnsYv8ZMAj",
  "key39": "2hHNg35dngn4wEgCJjyi1Z4T7cAhRxo6GPhykGAsBiL5hKMDWzbVqYMJxUQsFcvQDsuUyUSTVMFeDX5DYn5wjZtU",
  "key40": "4ViFFjBVkiyzZ6JnfhSbceuNRdbsyDhnbhQD2zsVfzR5MWwXwzWXmcEFuBgMSLLy5veVK2hjseHRZXwmodMoJFXo",
  "key41": "4DKASf8LPEgimXhudYaD5ddkUwfrAPswBAJ9YdSJhbtHx49eNcBmUVeAHEGeXx2xeCpBB5XrQXMMa5TRstsb3NMq",
  "key42": "4iAxcXJtbMQGF9VvfA3F9MzHdhQpmwRY21e9a1qXzsDZHRkudWTaVQAYkAveFGvQPUksFjrHzmcmDo1WxY6BRLy7",
  "key43": "g5dhXnmjC1KkSzA8HjYBuUEyYcmWy8Uv8dB1FUnf9cNwBhK2oycWf4Ba42PAJPfSsD5AVqMnZFga9aKfqiHdETv",
  "key44": "4bSSDvguUbmKjtb2XMmCTnqEtjtLi7jnXYzupCKSt3z71wUo6YNgP3AJRnWe13eXQ31Y8XkMbhWH51XHhYJMmSnc",
  "key45": "2RkhzzyTCEgYSjGfuKsRFuModTAyPruDqhMMkye2YhT49zQJv6USw6iQSmz7kZ6zqJ4fbPNoczkqBKH6WPcr7B6B",
  "key46": "4e9Yhi5a7YftwpeCUocdwEduauBNkjAPchzejJDpkdtYwaiyimwKkSS4WpYvtQk3DarVcRNrP8i5e9bLHXrEBU67"
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
