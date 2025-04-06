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
    "64mtVBFqqMFCEns8cqb1nh89RS42LeDxWz2ySCFW1zPepzgDQRWMWUVhgJxsrcBhfgcdrWfR9LtFXjJqTdUCLVyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mbVDGWWmHA3Z1EekQpG5gjQrgMw3gocAzQTA3p9UKvYZ16JqDa1BioiYU7QJ3UF8ptsLqMKMsD5FP5ZMzYZKzmb",
  "key1": "4SgckG2Fp5kB2nLgzTzxcDBZjPJsudLCuEiPFhnEtqkBW6DJ7EN4QE9rLHhvgvQYZt7GMrFufEZdG8vLnhcXv8rm",
  "key2": "2emQiWRGnBcAkWQTFfAK89K22MocfhFyZAre9AJmfmu35RoKJpYmJVqakyez6LzRkSgKkSh5naUT4AUryGEBuEko",
  "key3": "2ifbqiRJL3MQFRvCXUVonRpm7r6wzVvhMWiAK7yc4iNqg5Lbv47JH31TQmZJKCqubqgaAjECRxQEv3qUxayk3KDr",
  "key4": "5jW2hkkB2XnvgMnemXVfETBVvYGmR5mpEfgSVcjMRB5eoqvSAdjTvSvPDXrfVzuHs6ysrTnfSq8dzPd2Aq9nmBqZ",
  "key5": "5th6RKTciAqnJRzwY1Te7umhD2A8hcfXS3VABZ6hhcnREgQGxQxTTfCpmX3Lm5FjjsaHc6LmM2MsMMiyrCAJNvqA",
  "key6": "2apsTdfequPTTXD6u5F1ynvarFJkrLetT8PkrbBPfnpvueJBfRmFFu3PbhiKWZDEKXLUBKKAb7JfExWg4P1uKKq2",
  "key7": "5aGYZUkeg8fN7KHNtPByDxitiPEFX1kgk9xp34ZLEV4UToLkkabQHrYg4zMzkW75MX8KBcFuALSfKChmbVoyemRo",
  "key8": "k65dJn1SzF7sh59ZCueQ5pkscnrrrh7ryS4X2zK7cVYjk5gXXgCkoZ7de4V61NMARfY2HDuR319bSjakBjo1mdu",
  "key9": "2NBYSmGEkN8eHyK7qPihuTaxVTekMRTJKQv9D4U89kKdycVDN6bcyHMii73eVECWvUBu6cLnpr51bGRYtDMUjEZd",
  "key10": "4thVXycFDEJuUqGNAf5e4FY4teJxxGW3m94iSe4Azc7ctHdyHxMTWA6ko6j3PE8wmT9iLW6Jn6GkAP1UaoVpgJiP",
  "key11": "2u7rMyMU36ZiF3P497gnyHc6CFUXdVJziXDc9vcZvgMkdsNNXtK9vMRgs8XbKdFLqF63VbKoMyG9uwrvDpGcYryr",
  "key12": "3vtbGNfSkKLsqVWgpNY3Hq4assN42bt9wV9fY7pfUxNNhZc75v3ADexupgdweoWLo4UKTmkE1VzNWmpWM4p4sipr",
  "key13": "3GHaAKyG9FAychsMuYjg5T4Yi1Tv44sUTvv9fTd8PsYN1gVXdZj3VkxcJBhuzp1Kzx6HGAJ9FzhWZYCc6nKeBzAh",
  "key14": "28VzAwm9w9mpdBD6uxSNJdUHJhvw171knoSF2crrHGLQYyYmHSV3zqUemnJFy8kAwBgrzvyri6LhMT6EsfsCdqTH",
  "key15": "54o5mQYKjJqSMQeHbucbeiuWtsXVzyqqX2z8pms2kgHUmZCvXS8Ks2Abgw2bwbi7HZ84xLVfbHurBdSgRrF1Ee1C",
  "key16": "4jCpxvvfxU1gMRSMpPxmKwCKEJzcKNrnnqUhPgiGS6tf1Fdtafvc3FX4UmzHfGapFHi4pwU35UHUY9xk6MbwGDg",
  "key17": "5KhD3HJFeuXw2vtTsfxv5KCfmJUzTXdHeRRPWbw35W6gG7FQ4r18ryL3p4QBxsHHra7tM7WZMMUFYdmmhKM8ZBXu",
  "key18": "gqbnQCLkazALrVUYPCteWjU4Je5yXo2PTxu6NVP8mUJfym2vn9BSsAxfyAts9pcnfMN8r85NxN6m5EnmE7Uwbtb",
  "key19": "4q2LeBfNCXtRTB6dX1MyxV7EehUXFwDHtM9ZDnsNB4pF4bZ6zcucntcSuSAWWt1apxfqGRFrj1idbkVgWHTupbxv",
  "key20": "4HRS7TVEpocKKds2Pj35BCzjYwiNk4rJEyCNmnV1Rzb34bfvmD8YPmtCFXuDn7884N7WWB86gWdcBXDM4zSWuUNo",
  "key21": "64Wt4UqMJtka7TwMShWfKV4cWXShnvfpUuZcjYGrLX3TNuDpax4f8qyArsA8rJBDFbV4hF3eGi2TNQbBfmLzCK4d",
  "key22": "VJ8eyRtCQHUaYu6JhWFL5JFEjUgFrcTEemYi6jjEkZPutfDPUoS3s1bs7MwkT5G9bYYykvFoyx6okeRgYmg62WZ",
  "key23": "3UeisZrZmV1NBdUGwiPSLddn3RPogdqhdqxeVxxKor2c6NnTXAx8VRKZkUjqx77GuyqswktsUXxHwmokKGsPEBLe",
  "key24": "5n7vwmedXKVjtdntccGkxEj5fPuD4fUvN3tuYdK2Ga9nTVUJTRRrHmWC2NFMsUFwBiURE3P4JCqWuBz2YjKkXJfx",
  "key25": "3fiR7nAvEWPe7pveiAb4CB4o4CZocP9wG5aaogzrVZJjevqEWwoKnmRqQUk6S44N4eYEwLNLdCKXVin1tmFEZHZj",
  "key26": "31LnPdGvkxxPKHNC7mKhTaomstzU3i33P6ZbFi3zJKy77P84XjYvwnosqM1hsXSsGABG6PwyQYYU5brDAuMLucYN",
  "key27": "21vZuYoFAX6EZ2rPMZK59JwmunrqnXxLyCt75wFXYX1Uspc3DLaWQd7qVyGs8X7mYqPSZqouC38GmAL2Adg9xreP",
  "key28": "qmLgnmA2YQBLT5bBjnCAXBgU9TMfaBuV6gZWRomQH1tqHp29NLMLcLXP41jF1qjmQYobftwcPm6vmfyfvoRfjjk",
  "key29": "jiGMLWVUPsqTV3aTHxMGrA99xAtBx5dGQjQrxPm7dgumcN5TF5sHFdVxdgGhCFHFe2XeuwyasA2LYKBorMn18ok",
  "key30": "5vezmnx7zWtgYTPNR3LzkRxV5xrd118agjTNjwDQXCtpVQUursJ71YMsGFNRSy5ShF4f7w4ApzMmNDcePNGaK2ur",
  "key31": "5jRE17EV18fQnQo5YtKkZap4zgLsZcMANjW4NEr9ByF8qcf5AW7p2qmjUe7HpFBpVPEzjVjSkiJHzCwqR9TWgXDk",
  "key32": "4xmsMhP7UEU9P3kwgguJC8TrLSKvBVwD59e2iLASJNWwJRRKAbPt8N5B115TEbwXntGZYrhmJko7YKZnqVrqos69",
  "key33": "36gqZL7huuFLhGJ1SeXtXw3sUqhU1ka51D46stwmpB25Q2gGpqh5P34Nog8hWeGDFNk51fm6VbEpDqc2js1QoPsA",
  "key34": "4QwsD57QoStKHJLWVjC5hKyXkVoJHbfqc5RFRdCqeoWPGFk5mmH8D7zuTkBFARMHY3iLSBH9vJe9pkwVCWcU3cwg",
  "key35": "2KGd7MT1tgphFNFbz2UEdzmhxaFqxFX9PwnFvHTNBSvEaq4CKVbBX339QDLFAQMUNvGLdtVrTcBgGVxXm72fvhrM",
  "key36": "63BGWZ7gxMFbWyxs5YZ2NfYhPWrPb1mQeAf8HiTyh7NCJeR9v6ZphdzBC2YuU6bg5VTUWTZfQ2hK6KbK2DkgbQTP",
  "key37": "5Eiqipubd89oujiKr8UHEZn64TKvZra8rSstwH8mF7W7TsEa5VhBTPUPinsGFYjJyRbnEKqJy35YtJV1UnVf911r",
  "key38": "5EqwCJWqHCRvEJtZgBqq9JGtqH5gmGRebUVXiN6aS93Nrnz11vd48QenWLNdQg8KyT6ncBPNJQwZ11WiJ1C7Ai2E",
  "key39": "5GWpjVqKBZa2FJjvn1A9tAfPXtwNi7idW2j3sb7z8aiG8DS4z1iuvwzWkWVPTc29BeSYpcCaUqSobLVhnAQN6dv7",
  "key40": "5qaNPDxeA1SkngS1FezegB89XonMbDM6NqTzdLTCUM2VbrhPsXEWMQ19JRYaqaXmz9cozn5TfbF5dCwQgTnEK9wD",
  "key41": "2W6gTH1ksUoTDc2HmUPqB9Loa6bJVLpvcVGmbzkokyS9BkCphEVePZLxAPvtcc7VxjXTPYcnRV9qXXSfMRq6jxgG",
  "key42": "2rKLXhjaE6GLV8UpNFm76RG4ecPnA2iwX44mC4SA48b41YYpgtfWjXbdVKWmG72PrizQ8fdMKwCGThj9TroqjWkd",
  "key43": "w6b8N6SDd85K9TBtXShVLtRtTHS351duXCo1uq13Dwf9rG9UxLbDuESeQwNNLcCp9NQPPCDk2PSJ4MWG6PJqv3o",
  "key44": "npN9qT2Tx6Qj7ETtxwb2URYvweiGnodvK4mHzrZVhwgok5i3n7MaaHKtJh4qPHwdqRX4moHD5yj64AUmJ1oszud",
  "key45": "4Lj5jw1WBiXEkagrwJiyJKsdv3WaTbdFbYjGEhqKEUYiko5NWs5gnX1snFs1q8oZ6XjE2Ls5xZ96csciZAqenrH",
  "key46": "VbcWvWsGz8UU5u7cU8L4x8W4ToXcM3y3jEidQ8y4Sg87zDCEuUNZDkwx7KgNpTes8Diw7fSEjfvvmVERHVC41Jk",
  "key47": "46yDKupYbRpmsdBx4eWBkbLQm7eTf62fm1Wrs33wpghNfLhzrynQWmpEN4izo7yuJa2pr6WspRr556ts6S5VFFYM",
  "key48": "2rLQMU217tNnxzktbi97yNcCf1vwnw4ac2uBSXDfvmZg1uatFyAowwnBCFxEDPyh6QRBGiquKSum97tzYFCa22Mz"
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
