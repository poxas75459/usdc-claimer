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
    "4qwYaN7VMaa64zJMh6z74MD9vKX2twdZRu5jDQPitu3TvnvoWdXgsGZ8h2Uidp6isM4YSP3KCM3ct7JgENMXNZiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wUYHKuah8Txabmc9YCNQkJLcpPjVgdnTnvBVB6iqpwDyCkC3MC6qNABVbRchD38LNNx6VFyv9mLaJS8WnvsDAUA",
  "key1": "4HJj1p2YTxwz6DeAxvCFaqVzAK2BgC4yn9RS1M8KEcqPAfT2Z5kXqKsasw8xBWNZcJTLhrUGMCZ9Dbiofbc3f4gr",
  "key2": "RBkn3T1LbnfD2PoBr2aTiH6F4ENnx2LW2hsB5qnps8RMkC8Z8FS6c8vWGL43ckMVKM6tWUo2yQxcKighjyLDpoR",
  "key3": "i4KUfEMFxtyEeQkWooPoZfMBg8gk59H1n1vV5JxupA5GqKkv3AgWaBeVu15ML8o6ufjz28h77RNevJiSxwQmA5u",
  "key4": "3PwLNcJuYo1tA71YqDfHJ6rYpQgL5GehDLgos56zZbE1nd1c5wTGM68jeniN6rhB9ezZf5PrHwRtyAu1CgxbVoX4",
  "key5": "WfY375FJCfCC7u8PnmWSwaWGrnBnWavu9hha3hP1bFncyNTFSLteLxdjZb5XHQPRKJHpvBCkwDpVgG9Lf4vVPMk",
  "key6": "5V62KikzJUiDK5ZTyW3gNdfQ7Z4e7HXBHNS57xYnhLVNrYaa6EMskmVEcvHAs3oYbneKzoAtYM7KordELexyRfgX",
  "key7": "qgxY2hwranYpmHLqSpqkak69H5SRF4ipMcAdk3CznXSuWtzAsfqQp2g8NqWsoGNH63CsLRynN4jnqQQN8Cas2z9",
  "key8": "5HhHUyPWYG34jBWq2kWFpPi8UD5dqcnzEJ9auvukDtaEXp4uAMDzsUk3bbbtC85Z55mwuLgtUEBh8yH9vTuCjYBH",
  "key9": "2PifyD2yC6cLgvx4gu62n3xisYEWJ93KJSgFTdfMNBBj4NaGLY1foedzyMRtNcdE4AGzTuzcdyZFEsanRgBt2XRr",
  "key10": "1xFPwTtNJGbgmz2QLQ1QMsb7KEcJduwufQ3VTAkyhziz1KP6v7SxQFaHPb9AZ4JhQbwXbxrvKg1BEnGntnHtFoy",
  "key11": "2nY2YvjfyKRv2HiMzFJX9ofHENZk7m1zooDGo1om7GNBsfezyLtHqDc9Wm2FDF9k98eAdJdZadidezMx8ehTau3W",
  "key12": "5phmEYEUKttuuVj5Usvpmp4FMDUJZwtURyheevZC3FmXYmU8FFndqyGmKAKjE2RdiroV9pFbRHX4XkJAvH81ej7U",
  "key13": "2dgT9mSceLF2Qp8XE7KdpM37oxuizEpPnkV2FuWRbFPY7A3A2aavWwZJMZbRTXk63kNZTkD7DBFAYaBWYTr8fLQ5",
  "key14": "2UhqZwSHcDVFf7NkJuKW2Z1iJUCFtsUvwhRXrM8K5rVoLMWMMydJCBbTLE4Lpt5adDjLuKec5H3pVuqBx2T2Bsth",
  "key15": "sez8acgCpSQTzK62cTMRNfk3edpwPJxzQAK6fFtdwsv6v3fgwh9yttJrrjJKB6GTnWfZMZ56v9hDVp6r9gkKApj",
  "key16": "3bccGZphQnyT4ymCxVvoy3bgKtkY3KQdDy8aL37aqkyrRrtmCfXQdx55HW7xNDGYru8kUTKHHbywCRbXdgfX1mFY",
  "key17": "kuxCZBsfaeaK7daNNkcazQPXLqwpAgeBnxTAaYrX6ddT2Brwa37fvDtX7FFgKMuak3dmdUYNChRAKE8VpKqif3x",
  "key18": "5EGhfpiKEpWepNGmSq8WMtW2y92c39HSRraQaajY2xA4LEjSoXTAEjy1r9MRs4cHeueYZQv4Uu5YFm8F5q5LrAHi",
  "key19": "2mLJF2AjcisSARFsdriFUfudyKyv8QMcL7NdDpJPNDGv8yYhQ5mRbvbsjiz53anDR7gDnqStVBgYStoxAUqE2PVP",
  "key20": "2pqt17oivVWVZXMMiDLq6EZTAaoBFepMphmMyvbVwgP8HMZ7T9uQtZeZh8GfLjy91ncjQwNhqioJ6Z4rTnPggpE5",
  "key21": "2nkCDVAQMqcFuYZBRmfXBrySmYMoBGYB7ytLB2BK94JyGe2LrQUpZBknEEaYEx3SaJcVs6G65tU4MF8AY1MBpqxL",
  "key22": "5AUycJAweMqCeL9MsASuPkKkXHTwJFS8jaKPNQCjN7NWpk82sfnbyzZTie2b5EYZGKBH5bfokkafaNCHbQtAudfX",
  "key23": "5FZWcKFYb4n7BXBDPGExDB1omCFca8qniPj5zA9afAJpaemxqddy191gryhRKQgY64DHumcE6F22P9urRrkiwnLX",
  "key24": "3WgHDnWzuxF3QHGPwdbcaELkMyqB9oV9eVkisj3DaBvoTCgsqw3A8tPju5DHK1k4AQ6iDxg2KknDzM3ishGZgsvQ",
  "key25": "5iJXSQT5mFzxkHLni85hDtCFHSXKjLdPcnPJFzen3mFWhi2sdSuRk3yXgRTXKZ6FznBnnWzQihHjJ7rF1Fck8rwa",
  "key26": "dfWXdg8RkgMW1W5pLvmikLveeu7oh1aqECqR3uyrUsdQGr3HbAPUUZ6PpSKvC8Hs5j2TN2XCJCp4UYBxLXXk4Ni",
  "key27": "31EjVjYZoCcMdCu6dAWq9CWsvfG7ngoaaXCMYWtyPw1bbNu1C44DiqRQCfRj8sMXEJTSs3R3vcQsDCP1SKCPgGUc",
  "key28": "5uE7gLVUdRGnEkNi73eopYJfw3Xk3caQbTwqiveSgvTJyTFiQDMwvM7mfUh86PTZ7pXovkjtMRpgApYkNucDjj24",
  "key29": "3QPTFJhW3coLKxskJLECXidsdNU2cRPcfqiugF9HZtCRUbRtnWPEeuNEPPgx9aBbiPSRUgLtKjWwU4AGZf6vwKPJ",
  "key30": "zHAManhV31QKzZpLZxFceGv8atas72sqyAmATMZfJesbUZ7k5N8h17uunUhFFKWrtxcRCyDwJvgdwfZ5ZvWD9dp",
  "key31": "4aWMdmWey6aDFuHX9YdybMc7EvuHgUAuL1VkMRyL7VoTgXYsbMvHZBvRnekJBojJQauJfXCemueZrdkVPJZ215uM",
  "key32": "4ja3CVLYpMBkv9x8AZjz6nBFQRDH63umdqdroSFDT9ENNfyzNRPPutZ7W5igLZzc4cZAs2Qau2CAiYwFC36veNMq",
  "key33": "44jnJkrb8p6gEBdiQ5s9sk1vGPGzXP8ZZdj4DqbApfMKrQaEGVLvKy8YbJzrP75chZpRadog42J9xqZZ7gRBTy9k",
  "key34": "5cTgJ8NdWji4s3pjyczU2e3gbavi5ry1d5zEcsiMo1ehQH4jaxtUEvW8M9coFJVBwoetFF31Ff5jKnUinzGArNcs",
  "key35": "XZpstgVipWcvmsfdSwWTaRawXHpiCwsehsYc72SAqyC3uZ1aw5QfqiUJFcw3znR1Qt5mTX7hvckG2aL917cr6XB",
  "key36": "f6Wn9Q5s2kWCjpfbP77EE8wFPc9apQhWsc6E11JU8cvLWkAVK5tv2JorxrvX65f8bfamUQUuVSAWbXM8We9JFGZ",
  "key37": "4W7e5XZXtgFLFcTUX5kddzGMB2Z2Nb1ZcwWzBieVZFGNnddHyyewx7veo7dQr9sdAqG1Q43kLWyUhQ35tszEREYU",
  "key38": "5miHBhFL3JQz7AD2LmM3bdEv34Wnb8qk98b9C4Xrv6jtbciXQuX7uhYDffKW7dUhKArK9uV3mCXZUmeKDjAtLPJX",
  "key39": "65QvsQ892zMaPWwTobRzFDp6CzKCrjynENJT9YhG4W6CKtpnsAUT6tsGKT9E8PyTyXjyAkLh4zjicL7zBiRr5Uq4",
  "key40": "yHf5Uy2575HJmE4haSFcaMFFAq4EsP9PuvHs7BRSNfzpzp5vdmQB7PPA4MfQmiLUXmYRbPhaNBcwVH6XzdXZUaZ",
  "key41": "23BSsfZTcq5rhuLBa3x573UpgPU2thbTtAEB28Lnoq753Mmg6uMta9DZGwHdbnojiT51We8b91RTcAKLR8kpDmJm"
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
