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
    "375WehJiWEUYineT9r6RijrgsTDWePoUCuxVWvhiE69HPguDnphW3BRPLKRhUrcwQXBZjYKui9ssRuudVGcQ8PGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67XDRpHB6LRBR3Z4zEEAtgMk7NHaTsayfMtiwjrMSo3abKFDcKyaUmoQ94UunYDartb9R3rPgmX6ByGwDqEHHPYS",
  "key1": "3A5RAcVFcoTFqQC5jhJhze28dcP9tvptZGvzZ8ZshcqJ6jqX2HpQUYrwxSTF9rKVRfYFz63EvKfib8X8VyRFymP3",
  "key2": "3A19sMdBvbZtL8dGxUzZdw3vbrgSGdkZJq3g9Pf9HKrc7afTHXMnE9sJKL6t68fYvRJAaqbWwpQqGvL2zNKYFFsb",
  "key3": "62EEr9ZpxLmD8tBAZCgYDeSgCgYzbrUtEtrK5PpeMewV941wNU4r2sXLrWsfnjGamvc7WD8LDHfzAnc6mtmZu3xj",
  "key4": "2rRQwSgur36HrKmXJ6EN1mhSgLXZh9uLrDv8KVZQcxcqeuUHGakyQ57THfiTAShKnqcYMG62i2sBU6YCdTyPRdF3",
  "key5": "4yHUfL7tJZJkHMjka98CJdYjo8AqMAfpeSbJ8CRGsRDFG8cGsdSnCjzeGip3eMLDAZbQ8XqU3NSERxLqNvqyixTt",
  "key6": "3tTmhgjvseKeJZGsJXhsWyDQXkhx9fiMqfzThrXqe7Ef6Zb3PntQfirQcqeUgAXovCY7EyQAVJ8XobzJGyigshhW",
  "key7": "4s8Nod46EY3cZSJr67rzU9ECeVKWvfmK3cVrS4LUKrfg9HfLTxFWBjJ4zkjYRU1jU2CsRKqRQR64uw9DxxzriwWQ",
  "key8": "5yT82mVki6seTmZkzfeowCawuwqYuHh8UGUY5Fcui3TwxoWfG2YXagspHNeMydu1Zc6YbzrYwb5RVuEGHtGEzrHt",
  "key9": "4T5g3wdtSudomQFTGew1MShNBVSDosDt98g58fXqdXYTqq9wy5gK1qnvrQfxEeXk6WfueuYwjGVfshEwZ5FyAHd2",
  "key10": "29SzjvkHmUNvdhdkbd2baZnBVT1k7Hu9Wp57LYAVmCHq1xgo5UawVoe9ZHcGvvYz8xYjvbFtXM2F4wwhVEjTMwk1",
  "key11": "4K7s1HooADKe2zrcnS5j15KmnxWZrUfBknnzvMGKYtHiG5HYc3gq3Wj7eU6Eeppkn4oYkMsfXYSddsGcHSof42xq",
  "key12": "5vb19WZzfxcox7gp8WjFLwRoavxRrzNi4gXDaVZJB3ro2YiFiTR7ohwHHSvYiM5Yq4FbtTxVwe9FMr94ytevSEYU",
  "key13": "2X7QsVFyC4E6h1biB4KKV9yosnC3AChwvKHutxpg1QPZartK5QzbejRmt6i1EY8MZHhjzXqnkiPjpDju3ZYsWTUE",
  "key14": "2rDCY17iivS8NuerSpXjxPC6cgUK1vbenoDJWiFkAMVQuWhHfChYH3CyNnHaEQeakxAmTHst9vC1oGtdpfPVKG6w",
  "key15": "5stuQQkjRJXyjPwPMXqtLV6sF5Euvc913PrhG7wzE7rUNQL1EAfqfCcnFopfbkAn2HYNpCNAvTk6iUxmGkAMcjs1",
  "key16": "5thrAqisNKKq2fkwHBdPvwQf29Fks46FEoiRCdNwoNDmpPxPycZhocCq9LjCq86QBaRod4vz92jVadRb3KcELTaz",
  "key17": "3ETRNZnYCUA3rP3h5G3v5enJfDYyppXsbQzWVuiJdVMfCYLBqqx9r7XaEDToHVospg3gWhrzLw1uBoNtwGxjSMHw",
  "key18": "22mFKZKn6j2u5wYtrfxPbVJ9eTNaApKsirYPtnYwSRYqLgCqTZYn4AfWpAGHZwKG8xjngoQg1FCzUeaPUU6vZ318",
  "key19": "66naiTwB8KteQuumqKqiEWHxonUENxgAMbXgZGw5dh2HT3zRhH3E2BNqn5ndvFeLoZmjARYG6xfFTWawYkQTbFAY",
  "key20": "5TkH52kzZsygpSy7zs9MuwcjvXMGAK6NrMoc1AHWu3bJDifuRaAVtaN3LcygUmWLRNXYGHqEczs5uK8sRD4UCwk3",
  "key21": "4qkesnrYFChUEWNJkWFzoQF3L4Wt9jqEkctSeHD797juVxKJKC1xjerJDxsQvESPYJJSXCjFALKqMnXKChaptAsY",
  "key22": "5F8QGf611KAtzJSh4QSgZyyhH8AfdBu1jY2r8YD2ocf1m38tMMBypCx2w8TLgCpfPkso7SfD2cZA9Jtw2WxqVtfw",
  "key23": "5PxpzaHX32dpniCkNw8gtQnvebVhDTMDmMyJzboYEMhqYJustxruRSPuRZ6Cj6GKqYscfsZyQq2sDxLZbMMn2x64",
  "key24": "4EZsAjYb1v4w1T9K7GFTAmN1oSLTvXzLrGSKhihYWJMn5yZL3puZUM7zH6kMfunrx2iMVsf8AYT7CT2rmrRgQR2k",
  "key25": "Wdj2ZkSNn67qVNf1avDoEQ8wxnUmbrbBXhDBa5vLKyMJU5oqxKEL3o1xjkqVXHKyZytk6Jeof2qkr37eNNc6QjX",
  "key26": "3gHoxUNk7LvTj2xmWgDksDk2CosV779m6BiRbushyprQGUrmGsTHEj7HjdTaQNFBdyQyp5Dx6eKcGqSMFTkA6GZf",
  "key27": "MhJE1JNagbEvGpAyVAk4SnYC2s6NA2MAUHoswDynbsETv4ayMKv87irRYFEh5axgDyuAPsq2mWw8rrwX66FaDAN",
  "key28": "2mpHH56ncZNpK93KAjdGMgoHUxmU8Pc7S9kdhbBbdFtt5CmS92YT4Ke9HyuRXVm6k6JJmfDbQGgLqUXUfKegG8DX",
  "key29": "5LuU8De99WShMpbhmeTo2VCV9TVgGv3XFRz4PRyPGvQwkWXnb6ysNP7mfNbsPdiPu4fHyJhWfWHPnyRopDvHmrxY",
  "key30": "uwT6bv2hGFexqTWbY94dCga3cgs8R5Y2SrmZ5Pm9XHjYU5daHEGw22Hs9Fz1w5N5TDtSHk4jruByE8jMpzWKCk8",
  "key31": "62RFEcX1CtY77zcjcfqGjHGL4dbWGA4rr8MCB6MTaHsLGUA9ifk4oMposA76T3crz7NiBKUb2VQaRiKcMdCgJqYv",
  "key32": "3NP6XsEPgLpqW3DcunhsX4sUdAqNvMevkM2MuPv46Ay9KLjxQahxroqkWpRERnnvRt1erPF2pdECkjrQhD6TGVLJ",
  "key33": "k99T9sdS6Xo3emJH4pJTWjrAn97nFpj882J64RDuz3H7e3gVkLHRwoA61Utw7GbEjq35z7pbx1pcJMngb5TkY2q",
  "key34": "5jBtFWY33tb8HaDbPiuMH1w5A52mhHKi7A575VvYFrMtfbzsBut9PqpfCnKHioNm6dHHdALr2Bg4NYzXeZZbHM1a",
  "key35": "5hfyfcwwBPVTW8Euhfvb6ujC6aDxuTxbiSFBpHxCTvKDC1FgRwzoDMTxpdrycjb2yahnYHXDTmyK7zNxrqzwR2nJ",
  "key36": "4W31gTDaY6aP2592BWRBnTkC6XH4PBgG2okBGxQ52UjUuPJS4upqEjLrJmeqKWWwXeom1vrLBtDZfU9a5NMs84BH",
  "key37": "5qcT1So696CWAFwDGpuBUxvGemPuUjdgAA4bcsKhF6zQVCDTZP815PYYSWSspUDgiT3wr4QUoCwao94KJ5RkvyWn",
  "key38": "3UhLqytqnNRU4PyoKwnUEhbuhBmWCFZeJrUzUCH5WxFCRYaueUx5vxFKaQ2P5uGsrDR4kVPM6tCcqUq7sLz6ew82",
  "key39": "2nuKqxZEkL9RMZCb4qiGu3P7V4hoW5b1aAgvUaF54K2d7HTNyFzAemgVPNzi4RmPhyjC6bAxauQ4ccDCjNinadKJ"
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
