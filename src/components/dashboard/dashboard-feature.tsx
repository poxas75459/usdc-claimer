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
    "26Mt8fPTZo9buizbXNXUZj6UWBRsLtkiDVqzpib2b89vPngSbh9whn5ZckHjsLfaS6sgKvvVSVtpuignyTSDEWtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ket58WLuq8nxp3KhA7izoo2MaNR7Qzf8FdcHpvz4GWqr5o2wZupN2yDVwTYYVM4kSXPu5Rk9UKpnDDyfXTGntin",
  "key1": "4hFkS3gSXqtfGEoEQwej1zSWVvSbDeFg4uoZUmHWPMTUmbPksH3ynhizm4uqaEhMhR7i4u5YFDSEYWw3PjcHHacJ",
  "key2": "2GTrXK5CbMjPmKKm6YVXcm6aC3wsPsdyQPB2ugizxw4C3HgNtLHQfZzhNwDYQU9gsRbtoKwKJgkXUTk3UvMREeWa",
  "key3": "22q9aa3K5TS6NEjaoomxKFTCXaiRM3HBkxGvj1yQmfwVNWiZPTgRZDpUAeeioUyZVeSNRYySMLzCobTdW1nqaFNw",
  "key4": "Uk5M4CRQGU72eVLEkHaw4Vy2V5AWeE3e7CaYGqXy2Hmc32tB4Ar2UZJ87SoU2igj7rUpn2jkPEwgbWsgePNSNTU",
  "key5": "53YUDKHH2cGq3vktixHthabgDR7RDnPJeBNmcAYAxEhoTc4jVuBYiJj4B7fC1ZGc7Ai92YF24HJFtiL9gYeSX2V4",
  "key6": "hbQtGgfhHaanxrtNApcrQYUz4mZCRjavbLzJu9pBJ5bafV9gTRSA6p6zbYfupQQz2VWU6SGTkrdjwrSmMBFzsL4",
  "key7": "27JozFJ2EpjerPstaX2FDoRmXwGrUZTzKpwDQtBzuwxyZyoS9xKejnB2KFqi3UCmZCijcc1Gn25zp8mpEVPwLMQv",
  "key8": "61QUmWziubnbDU8LNraRkSniQmjHCPaeLxuoD6uTW8c6BcbGmwJcTmyaLZLNu4yUsATfmiPGt1zM3JaFfqEd9TzX",
  "key9": "4Mo5p1fTEp6SpD4x25JDtcA2MBhZA9ZWT3wQfm2sJYo38bmuPingfuPTbumJD8gqPQJgc8DuPwR2QXgRWFvT574w",
  "key10": "622B2oN2msDs4m7bVnvbufbxwRRMs6tL8nRkAtE4PH2rPraD2EajkHep7nJtmMa1aParcSyaAwH4ScixXLmy1cfc",
  "key11": "5svWxRTVWBu828tr2Ws3GoMnHfp9oHgf9ZwkaEwW2DnujxHWsZVnHZ2b8ynBPhT4kHQsQvpydK6Uqai4tLs2UPwo",
  "key12": "3SbS2SZ2NEhzEUzVBHpscX4ERwmfXRCF5VNLQRPqeZAQdcpZJBiK6GeCeJZPvH8MBd4THYUwW8e1qHCnZuKYNbZi",
  "key13": "MBgvjxutxjXaTkTcBqGnxPPHN3RfqgkUWrynu3xdcjBjW15fYv8Qcc7NDs6rt3Q5YcA8ALReAWK2YYSPLeboFSP",
  "key14": "49hVVyQCz5Lc35gYjp8GMA2U1Z3Sa5ry7iTve6uvBGjmAq9ULxNv1WTq3g8zJVrh3NEDiH5tSzWz8DLDmkq3dHR9",
  "key15": "5D3KNoZ9hN9rwJKokDmVMVeRBUmxWCTCFgtHXLMFzoBk6xeMo5V9CAuJzwb4koy5uAu5gpHf76Mq1aHSRkGvChm5",
  "key16": "3FjfNxgH6GaZhc7eDHWU37nCMR9fn3WpiBz2aTQJvjpCAM8Mm2dkMMCSaYM5CwS5VUzwvUZj3iHvZLYNgDZH5VRJ",
  "key17": "2iN9iJKvgHwzfGmQJ3Ya5DBSe464xce5DZnLZ5aSBJSw8b5dDD62eL4h52S8acc3XrGP5pp57TBLTtx8dtbvZowE",
  "key18": "4A3QbTqLSC6hChJANjYuVLjy1c1kfkDgm2X8Z5s8sc4rHMH1P7NJ8Xk38gwXr4sWG7EYE8gKdYp75rpE3HrPhQ8g",
  "key19": "HwAAeDds1bFwHW6KUrytQzHscEccxzMNxVqbP1bPx9gcKnpWEJ1FWahcGmMiDpbu8GXXSsZVHGymmBFqHbL4Tua",
  "key20": "tmUgu3AQdXvBXqrxMCtycXtqQASEqdztqL8v8jLZPfP2BFPaZ1Y9wLdiDXt3To61hDPdLMJBnv487qLYUyLzJ22",
  "key21": "57VHV5btBcqyH5XJ9hnmyri7kaTqwJrwsxfphzTSCCWax87PjaVrZWLGeyqbfJZ3BaCY4rtVq72R1Bhy2X4vYkcy",
  "key22": "3LQW6RNKWVCdEXz4gWQchgk87ez1aRUYyFHUG6dUkYW1ZU81DVvjqUxegUPu5U5TKPqmajGEEHpESLzgMHXP5dN",
  "key23": "2ViLeD9BBfX6ztpx2AcH9pK7oGBsMGtZZn2MGPKdjiXTTp2ZkDeu7VZMMnb1kyDvHu5dbR7Q4gRXtvYtJQdbsAwj",
  "key24": "aEtCs5Gp4uGV6TMsBv1wCocjeVSSzkZPb9tqhvcLgzz5JwwXD7RmMxw1accVbwBP6CAeFCYjD9P5jQFJARueLzP",
  "key25": "APXfQsvBxo6vG2nnLtU8zAVrGBs4zYQramK4gP3jgspqSA9QfvYYCRqz1x44fy2VcyCVzGrGu3LKUMH4gzw8f5v",
  "key26": "5oUX6inzxnuTcvjY922UfxjMpjM2Lq9LRXFKuZRq5pG3DSTgimogFJsQJYdogjFkBtVxRVsyZPpyRcPN8euMywg9",
  "key27": "4Yhzf3Z9eQKqkduxdopScydUT2bsWBcNc72QyhZP2bMB2nsnkHJKfD9KwvugN9eT4htbw8u2d2PVm9dyLvxPH9H5",
  "key28": "3yN3Cgmks1cVnpQxkgdbFE69zVz1F3DBNLcs54rNt4VbGKqk57bJD8YtbMgSMZXYYvGHwMqRYzgRY8zi5XpvDKe6",
  "key29": "26ymz36aiZ3JEBCGUpKKSmG3BkbHRmvARB9LncVEzRkMDmwf9Sfkx5mZwWkBRVNRtn8cSt17Ejm5mJH1RNEkCHW4",
  "key30": "3KLTz1z78AHQBuCvCJrGQJGLPZrMVXTBMzBnGwnXavFQiSEZ93TD67tJ6EU9Sy7ivxp7qL3pdkSKUXaDEhqUt7Yg",
  "key31": "47duXPuiecUc4Y5LCai8gfT8YfyxdxYbr53PWcgMMXjnJBew7siroAxD2Cwrb3JPYY4VZ7spW1bBh4edxJvjB7x6",
  "key32": "W8ppk9BBpxiR378YYGyiofaEPuhyg59NkeF6TrAgeAyoYNYJUQE4Px5adw9gAcwdwt6XDfEnGe3EusZM6F2HRnd",
  "key33": "24YCfU1otySjMa5kDamqAdt1WGZ2bKioR5wnZkrNmqZtSS8aawHiv7sBey5E2sK8QN4FDZ7U7g6Yz7NTGf14E9pM",
  "key34": "8i9TGdtzeSASBzevXBDSRofRGLe6W5meb4b4PScTXrRHzmp9RLaPmUVg97FE4a8LEJrKuPfa7x8NP7RojX6hQBp",
  "key35": "3w4Lx8M7XwYrdo18idyPefQCmgh3NYLGWom3wwkn3YYWYE65pjF5xousYNHCVkYE4QMAq86Q17jfW4p8qas2mkXD",
  "key36": "xLYs8PS3NT2pZGKjUwnXmii3wq9VXLDSGNN8cA7uGt44VsmadtNXYdhZS7BXmR4bXz9muppS349PpD5KeSWRShW",
  "key37": "5KJzpCpffXyHBApvPaPKrboyDVk5DDvovPTsxCi39c9SMtKnnZdRUKNCU12ucnRCKjMvvKUSYeEAZnwP459FiMey",
  "key38": "SiQ9dmHskANUpHSYCvvVexZ1febzUrXHYwSpfHW3NpaUKRnqnsD4DFnnFBa8fKphjSJU9MqmdrNNjPxU9RbLZzm",
  "key39": "5TDqrvXQqB2YLoqFdDSjjimtgq5UTTnQtAkhcdSCKqfmQUBq1rNeXMeoKj5qHkGBjEJPVCtuiWi3Wq5a3YDjTRxk",
  "key40": "4MG7EfcpTW8Zg5iHQg6rq3hcquZBtbwfpLKsLqGYHBa7P5p6vyg6q4uFjhQBWgXSLDjaY31fudQoz7rbhcd5ArHt",
  "key41": "4mCmhc7PnhWGjBTmVriDqZYPmV3juDhtDzxQDThX7k1UQNQHjpkRCX6GPH76NPqJkQk2LcV5orGhZyHDsnUZBVjm",
  "key42": "4bk63h9DZmqvwoeSYpVQf4T2uxbTPwF13BabnbhCWDWdToao8y4hSNdPASX3U4Qf6o4yohJpUmjARxfkLjt1H8Ej",
  "key43": "4FhYDYX6PMTGUkpuAJCLA6kBaK4Paahsd3TcAYP9rMQ5gfnb1TseX8cJjGxwQZs4ekU5z2q4UYdjUgKxPRHbWVR"
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
