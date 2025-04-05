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
    "WUKoHWYVpHwqApRkQ36xq2DW6P5Fv8GW24d3AiyzLv8tHFxHeKe7KB2BxqXPphp91zUegbmJAPmGyWDtqV8bhQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SxtsgKjQAhZfZuDKFrvdPD8atpauSANBuxE1sUh1sUMT5y3D7utxXW5q5utAQQbpSewDkq9bsks6hMVXEfmHDhr",
  "key1": "JNHoNEspzdzpzapsYpFTE6NbFeVXLDLWAMZ5DRc8bKwZ6sYWVWocBidjLYXRfurtgDNjEFD9ESV4ot1s7j3Fhys",
  "key2": "zxmJr3YFe4ULpEhuvc11p9GFtd1z24FguSQLrDbZBFrR4KCcCzKPjpzZZtP7J6jiVyo8jMWp7d4fisX4DguJr6D",
  "key3": "5ve5PaDKDdgwjYAhehpLbMu5A3HL8t5MZZ5B9tJLNi3sfxTeZKwjKGK7bfSNKyQ4bbtF37qzvoGEq8XzyWQgiefv",
  "key4": "83Pj9X6xqwkzdnJYwrxQzrZKtcuoGv7hPAWHd4fRcQX5fEXkvDdht1pFrSbiudq8YuNkmvrqJYJxRKrWAUmftve",
  "key5": "2PXLWaxoiw6U5EGwsF18aR5n3QobgtuoNKayTzDEbAgwAx8ofxribcA2SU5iPstJHoYkEP3vmvmjuau3zgPVVxd1",
  "key6": "3CcXKxKo2d9GLDzUm6UKLeSc95WFi372iTuQgNqYNe4RaAukRfqAG8e4KHetnJf1em5HBNQ8nHycXLBswTqWzFSJ",
  "key7": "5is7iP7VrczpN821gBJN8yTFBKjFBXASC5VEAuUecgjs7mPoZHDPuFLCvVaSGj6VQG9nPbJDymnuF2b5zB5nifL",
  "key8": "5AKhWorQEfq9HNeYLk4yiAzezd6jn2cudNVn27UqYLaAgwsB7JQAGaUbnVrYJWgM11eZxE9eagVJQqexBy97BLe3",
  "key9": "3DmUBJXwB7xUgLVZ4mY19nkGFAYd3nCRy1tMqyWcUV1W2nNFgmEekaYBQ4UyKRfhLtyd8hi8P1xnwnFLxq5mauoR",
  "key10": "63psx6edLqL58jE3nmXyrigRg7RaB1t8ik6PCwfNSfcAAu8dwfA96JSCiYNhndP2wQwv3pzaF3LiCjcEyZUzADv6",
  "key11": "64qB6VYVHHPYhay2bXV4Yw4FdXW2VhHWtKVgmY5NQbXanAbY76UigVrFpYcgwnggudz8vGvPisAbHxND27X7rtzE",
  "key12": "45gG3zTqhJh4GcWRoKKSKvT1KfGWd8N1rfziJYoJdFWFmvomhHNp3TsgxngafQmYDUDWMp2NUtD2RF65JwMiXENh",
  "key13": "384kjLX2HqKTL5vPTBeE2moMLsV7xsU87uhEmrmrGTUBdP5ZeQKDTE2DU8dgcrp3gwqa6WidVkBNw9eKLVybmEss",
  "key14": "3nBN9jVQ4SB2sbn6c8gxKfTFLH6vbMSN7URDUzXsCff63rmwDPNg9TezHh6UBwAtyR1UvpociHwdxtiQQUqFMq9w",
  "key15": "2ibdCgva27SLfLQy3tuAaMfSVfmZquDwFGFMJJrokhbpFYk1PcLuKMTEWuQwa9w8rVsyigMouUVbRXqhTEs9xXHY",
  "key16": "PCkzioVdQGitCBzU8DL9JZkJ9vzzCaXT8cQcYAs5ACnmWW6SZN3uaoWkoRVuNLBARcpHrMZLRfTbHKLSDpX2GEe",
  "key17": "38SXMM1ZbGdhyk9516XJSkBeP5CpPiyMyFtfJVM5qC419JQJegbzbLy9GeErLPmCAqdkCiJVV1eodJnRaAJZZJau",
  "key18": "51jUb5yGbYqQQKkVRMUghe6YG6dCsHA9BCs1AURkPsAk65AJep7SdugrRahAy9hEShvFVL63w83Rg2BjmQeN2B9X",
  "key19": "5unVzTVuASRN5Dg5PuhooqVz1hBjY9S17tck9cBm97vH813mcNpHFgxG5FzywiSYybp1fddF6m1rcgBndFBmpXj2",
  "key20": "5iPRGx312hQTeTfstoJUbusS88XYnXMGXdzBZ3eWST2Hc2iBQx5Pzz86EQoERKS9iLW9wLMckvL89pP1qxve2vsL",
  "key21": "2bnR3y3WUP8QEsA9RUasqW8EoZKZ3SiDjDYX161CX6vYdQmsp84hAed16C6umVDNwpAqCMDrNLfqcfxY2wLtNQMR",
  "key22": "4MdMXXMue3w7rcxqM22rtuENLcWEYD1F641iNwGB1pRyfWW8G2QecbgnLKhC2o4Tk7eeHKMnHLaQkuEZmpHNnYRR",
  "key23": "2suTcz69gE1kzfDPZArY31CF8RhGKHAawa2uhrYNMeBkyD5axQogfy2bsppt7BigwQk74ox641YkhGbK3ibeosKM",
  "key24": "3p783P9PWVaUUiqkmcVHEvb7CezfzuGFKLjD3NF4i9yh9YXUaGPPcXBDKB1SnrEWbYfXJpkKjagY4AXCvffjsnrG",
  "key25": "4FM2X22W6TFMNrh1YE7dCQSHBFLe4X8BTP6qVb2d2YzZEMSWX2XaTnHkoqconHtLy1GpzaVkWAnVQkxHoHNxjwxp",
  "key26": "3ZXu2VgxLE2vWpSVMA5zrfukzRrppAVGRBajxZRcgRsccfe9EqtGTEceQanJQA7xxNj8utbDq8ffJ8hHmMYwBhfe",
  "key27": "Z2WxKndS6jF7sifHwRMjvCLEuGKMVfPvNWdpQmoxJN8s7vv6pKmkfmRan6nRLb4r2ZjjrCfyGWZ9sWz91m3sHou",
  "key28": "3pP7HA2hguKiRob1HLRfPZfQ7tKZcJK7koBPPR4xJgrKRS72r1f1ooDWPQuBk5WjvvFhNiH988NgmEacePTXF1g5",
  "key29": "Xc8K7WTppww3tXcMvN44TxFH37ioYtKcZwmUyDobXFv7iis5sJaqNH7mXdx45ADt3F8HSyV7qBejffVTPCFDPqp",
  "key30": "5uZHav48DcvAuyk6RptycG78yWiXXKaYwwgVuTE61N3ib9Mw8atx9tvEBJwLC27xWAabEhU4iEqw1C99HYCdLqD8",
  "key31": "5Qh8s2HYnYSv7YtXhbvrce334MWpmirmmcRh1ikPYf8s565wm1bdvAkEAip8uiavEptoQxvWMvo1kMgPiSV5XGAH",
  "key32": "272kt1BHtneNvYAmHKmEiNeZVyLTYdF8eBmpnhwY9EvQWXAXdRADV73hmhokWbrMe8WMJ81DBFsRaF6Gym1Txwab",
  "key33": "5HAeqNz4fqfLJ5HCapLSHMTmhvBDoJg9U8Tc2YYAqukkRLQzWxKt9FjiMmxhhkq3hVubDcAcyW7P8M1UGc21LzrC",
  "key34": "3RU6jUysMewV9koZpJBBgXLCaZrY3TMgknEQxnTaf47HxiBYdCYfTaa2TkaQsqA73sdTB5HhLVDReRPqpHP2T6aq",
  "key35": "5N7ADSyiNfH3weLYhtGT4ubN4XEF2gaQFaguczmwa9F2WLEvW5W2FTqcG4wFeRQSpUTzF5zh17Gbfh2VBhuDpHtU"
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
