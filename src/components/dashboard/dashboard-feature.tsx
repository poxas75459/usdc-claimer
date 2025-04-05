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
    "RS1WWbpBGvWBfXpdNPKMDAPm2T36s63fSmg4sfSnczvfqEvYzTuQkbYUMjSj2g99qKAkWYnrjbTKCt9QHfKFYMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MTt7RA4675JYfxoAAezcpXSxdcVnbCihKoJngxxtsEAMXCNgMMcoYevzdX3xLiwBkH9S82hwkJqvM55i98wccd",
  "key1": "3WteQa2zZ3PWXjHVznLrQwGcmWXhkWMpdJpJAuuNuTFpdZbGbCHtU7RTP54XVmU6wCNZtbNVLe6usKWT4Ly6b7wG",
  "key2": "4YTBEioSKBN8iStB2ZxcRDFKPfXZ21bT2uP6NnvTBvM2YfvriFNYkFPnQDgjxtsQpbaF7BgfSaRQPE2VvNNRrH1Y",
  "key3": "5hZbEAxB6Ut1rnArp3X2tH5x3qp2bGniLQ9WtTzLe6qaZyQ5xecJxt8gbVndG2V3tv6XjsjNjPKhREua7H2VQ31C",
  "key4": "5qPhL7dw5djkMci8aK6XUjzrG5kCnxPPNwRMWSFYa87eTirEVGbzeBbicsGoVAEvHyjDJi6J5s72fsrT8hQ7tDJA",
  "key5": "CC6v1drkR335n19qBi9WfB8dPtcqpETiWrxPVre6n66TqQyQVnWwqKhJaNzA5jwhRiYsQuwtgy5YpLwXvHjSxih",
  "key6": "5wjJPNKR1243tmzLuCKtLKpXs4Nf9VJojh6AWcheXw6pdZU9HaNp1oDc34sAZj3kCBHFUpxBnsSENPaQVwwV6HaQ",
  "key7": "2fmQgYq8adhkVfZuojqdbmpYhwKNSJBucnWHAYAZNjxVawFJE3FtxMei2Wnxc3YQ5k1ea4Pjc1Yp7S9qaBG5MvME",
  "key8": "2jUGKSK9q9eysZv8kAdLHi75AWag9Kc3tEswCoRfTHzFPkQxTaHeqyDujfpeDDnaB2HNx8bkLGMNbjyuE7h7YfY1",
  "key9": "4CTw9NRxZ8KQvC5fj5V64mX1hGGqd2ppDNzd8oqc6PTboeTTbZKryVm6NzkCKshFWuY1EWiDucWU9yqTZrc91B1J",
  "key10": "4UPEyWMz955PH7PdjHUWRF8aYZwMQJmraC9fS5P9hWAuV3RJfWUEjZ1QwWFJ5FBGeQkWQfKNWetMewp2rcLuDFTJ",
  "key11": "5oHnFAq2E5yxJpMvqZfcgbXdbxnHXExW6f6StC87GNy2QWu2nfVMbjuf4eE67UtYJZjdJrj85ktYGMpsRgnpsvLC",
  "key12": "2dfBKS1CZJLgEa3rYreiSuEim6w6YsfhUGvmP7gfp3RcrezzcQeCE37Nxjw4fUqtXzh3VEd8bebSp7EQT3kUTFKs",
  "key13": "ikxxZqrGnfeNhDTgLrrvGGH5z8L17j53WvNfMq1Px3SujrYw6aAj2zTXPcCVw38Nt35ycK6Pm4f6CaNehqxyFkn",
  "key14": "217n2RpZoh3MbB8Q6fbezusXcGvtzfm1inRNZNTb9Ajyr3xCjknVd8KYKL3MR2sBqctQdpQ2SgrhscPbzkWLwMRQ",
  "key15": "YcsDVXTrHusxHhbact9p1t3jt2QFJg3V6PzarmsxweebkoQGBFYQeTjQrbWYiQ17zyWnWZMkdFSgdSfNvyRiUvW",
  "key16": "3eN5V3sydgqE5vktq8QqWhMAC3YdRgRcUdGC4XTSkor6cb42ZwtGkL8nFNP1s86Nwxo2DSjYoXUzwoKJmGth8oRB",
  "key17": "5UMfG55LSQmjY8DQnGG2mAwDQvSUBvqAiE2o1CfTQ3Sz8BzaVWHiBKUAdHoXYaXmpHqJ2AHBZqghijp7YS3ytqLW",
  "key18": "2WL1ENVaGn8b1VgSg3bwLJU8qx8jNdS8MKDj7W6CUzzMip15yxLeKxmhoEfJh6G4xvWkTY7n6EXgixKXQ5VDaFHc",
  "key19": "qMzLfGLJ4aXdd8A8MvFLCuNs2dKTRS4cAjTJv1MKXeVSNMTveRoXuzxDkBnxUWjndicmFUXhkKxzWjakmVts2PC",
  "key20": "6AZqq9DYkEgEkjL31vXRgrWo57CXWk79hmKn9xkeCQNryv84fpYaoL9AWsdYz4EoXpxfsAAgYzHj1f7E1yFB334",
  "key21": "2xzLApUZRcLkMkiCVQ8QL1d22AjyVkrpdUM5G2qaCeq2sZy3k8AdV5ax2D2gqMRUt3AjptMecNV2XJdw64HDAUZn",
  "key22": "27eP3SLvHUgZ8cLYfHtScinW7wiHkVShS4w8mhENBBnKepMGnrQELKtnYE8zdoL4xod6j7XrZuDkWoFBXzo31cVx",
  "key23": "2Wuq5gvVgFrpWKra9HZiP8ixNrXMVPYR9bSnxVM2R1xvtBGvNTDXR27HeTC5bPVGFphZe92tLDn47JPNpdHfPyD6",
  "key24": "4JWgWhkgr2cYKtH4svSmWVy81JKUXPnwJkRU5eJdCfJ4DRzoB4i3hFdmGKeBbzskZQkfggBdGDYYvUgoSXLMhbJn",
  "key25": "4CzAKA8RzuJ5pk1qrCh3Avuqixqshubcof7N6ck4u2uZHL4H3Mg3NwQ7xjTh5pU69UcZXRgFLThG3sJpLrgicMzc",
  "key26": "2ezxwq1PGmVmYSeEMUKQ3bmHx1mwhv4aQjeFYeKqn2kbw41DMQQrH8qqLYp94E4SsfPfcZ5HxYaVRB5uGFKNjGdr",
  "key27": "4VC7MZu3yA6tCcNeZ8aRjjueWUPHepG7b8a9UzPMUVF4sk3EahbqaQGfBSK9EHv8PpPAADHJctaPHenArz5GJ8Ve",
  "key28": "4rdvcPySnh4hE7X7uzRdoKSXQ9WRzLRLn1nNfDTNxT67cFN8d4kVXxEAAJyN71dmNeKFgrnfoqDXd5G3qP7MhMVi",
  "key29": "4m4iiQcFUo9w56kcs7E17BXM7ZTQG7Sz7EThAGD7VDJJbsbDfVWw4oSPguensCSN45Ygm5EKWe1C1W1acNb5cBMG",
  "key30": "4EcpJ8qWWi3FD5vB9J3SRYz6PhsmXfz3rz64zNEvat41qRcvDdP45zvgeGQ6aPRuDmkpy3qua1fj1pUPkg6jPvue",
  "key31": "2pGkJzJHAoDr2cfQaJmRS2ByQLiCWVVWiiQ1GHWj28V7TaSBP7RhWX3NdmtioxbaHZMebLYK2vnGoFY8dPT1oidj",
  "key32": "59X4vqNbQTuLGEqFStTqpApt2H85DCfCx6QihRj87x2JCFpf8E2FFHbCbkYxBqWiXLbCsL6gLQdBqZ8Gdk6Cgztj",
  "key33": "34UWx3yzNFFBGTVTQjiJ2rF3GXgG5HxdPyiYX3SwpLZFpUpuAytyGwnNKi4xfscrwe9L5V54L5bQvfcN2KuWZkJR",
  "key34": "4z9k953r9LCPRrL7Xw31fFukxU8c9i7W9hw1j64Qp761J2rrfKWX2JGgCU3gAeg1yGigDQAryeFRGQnuTh1HDuhr",
  "key35": "hZ68JUrvGynpwjNuF1kTnyiMH6DShDvx7vN9HqTkfbgRpkAHEbZd7QMSbkAsKEHZVSZKTP8dUqRVjDP9rTA8DvB",
  "key36": "4qkSxWqZLn3XCKDdsLudkSHSoA7Ku2xY1drP2RakGUNpZJqx3QyQVaY6RKhxT8wdeKmyzCebeMb8qEQn3gnngBtu",
  "key37": "4GdQwUnggJtqc6c34AUZRN3P8uMYETLodyhZrXMnWPEv2TnYNnYifRqKoM9EX3eQ5dnNmxuFW2mSTFTi4BjieTbB",
  "key38": "4XC3vmhHeBYdeHSeoFaw1fxoiMV47nrSTKaUtjuoxbJeDsHY3XLyw47wu4PoimW6XKm5mH2GYUHv2rUMebWWgTsz",
  "key39": "26rQu4Vv4maDjUBFVrzcZGra9UYiUuGaUrVJP1P43Ydi8vkEspTvzverMX9KXD8PBLnCmqUeAHLprkmjGhJpimFX",
  "key40": "5bRADAnDzJbUKbzWeWR84m5G79wyLkSRqmjqnioDGssm8RTXVe7Yhhe7scH2hcUC84fPQ5ZAWrsMmHwBG5sMKnwo",
  "key41": "3m4AWz26L3SfG7roaQnS1XxhtgUyYLkX6UVfraP1eCPiyadmH3AxBjuVGh1UsuPEPFuUy4Y8QMJ42okyyAydfPEv"
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
