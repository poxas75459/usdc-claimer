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
    "5zydWkLmQVaEjBSuNgP8yDAShPHVRQ2ge8hazJUjfVTJqA7xSif4wFsah7qczKFZwQWffjjEN2r1qozRMGzV7iEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39uD9aG7zU1JchaiwJhkw3z5buP3JM82uVrzJqNuyxiA54dPawY4me3ucioTjWDfPTLahM29YBp5hTTsoETR9UFW",
  "key1": "5jTy7Jyv15j9r8FUpyitUXXNSCy5vj3Zpi43bzQuFyxsbdKyfPkQdH3sWG27Ecrwqs5crhcBK8VBmFpg1TH8wu8s",
  "key2": "2ZiPfdHxt2ECE4BL6fMXpCWwY8L3J1APbEVCxoZZzFrxukmnVBtGZckHsW6kG7e6L6HxPsHj4PmcBLRdDuNvzhJv",
  "key3": "53nZirKsTVmCDHdTRpVt5cxrG7SGCze79EFxpWt4xXDctWxnppUqVwYwcToA5Lv5NH4x5dmBSTLkeThiq2qnLwrL",
  "key4": "4NfbEFsCWAPeebsNU9HcEqv8VoSvS1aAdUgKzXa2sQLVCkp1mCRoB71fsqomRUHFRmDesZnWaWhrEdTHGp6dSehZ",
  "key5": "3LDjHU7jGEthmhUeoq1cSHx8kYpnE2VtUSw85wg2c56zUbj5xpzY4RLaTPrnCijidHKwF7FdjAQesSHFgHZwfVvV",
  "key6": "2WYrVPADKzNDsQhy6FjHaF5hTNfzsJN1daXA4bSMnpPYFRPjvXx3sDGKV7BN4UBMK4u14Bkk2H4gpmxVQ25gBnAC",
  "key7": "wbTzvaBywMWJDSxDDe4QcNjBmwecP9mnYSKXQ4tSwR1ACngCrADNEeMd61i37V46cv21WgZ8mWGQ7BY4qe8TfCc",
  "key8": "r3mj4QKmu57UpgxtH3PyYwr4kPjcL4dQm5dnvZ7Xn17MySH2xd46S1N6UGRrqMvtKzfxKs2La5CQZH6GEr28TRr",
  "key9": "2cZ71AQ7gzg8WdF6CxgJreFepYm2dMb5t4UnhRJV8HEY617YBaSgWH7gSWbxA2hN4BcvNaybg6PAmMJwKLtVDKiz",
  "key10": "26UusduCdbLypgpKmdBgnzyCR4WUkauWgw39h6Uf1vsGhRNx9MeK65A6717VwQx3MWDUkWsBz3Wt5DJctdJWmuNT",
  "key11": "3rrppiqER6vjVvyg98r4kE2S58FoXXMXP7L8nRLeabEbQgVJHiaGAp8DJPNFCWLHyasJUYaQCTJv1jBnPXdXMEBi",
  "key12": "3d47Wj8E83L8LeRGirpDhiLvNZsbnmtqwdPjkbkaGdC9VURCTHTRrbN5dNb82bJY78wad9SQmjsQmgSVCBbHc3K9",
  "key13": "dghoTBii9AyzkNbY1dzqCt2rSWDFNkVsT9SY3H65m6HL2QKBhSjMDzB2vCPV3r65PvFqTWrhNupohUjkvWyePs5",
  "key14": "2Rge3L3Zwoifw1gDB7Wvo67HnPY5aXZhaWjjFGo2XrTEdn56qud6xbsoofruvLQx4c5XfP4hvbLa6oQDD1vUym43",
  "key15": "5pUiu5Ko7rBtaBgeN9TXAAyqE6ecy14B8fSJhfjZft5U5VAx5iNubC4X4g8iNYHX3eYn9Hi1VxQoEnVuRrKG83ED",
  "key16": "3uakbffmMSAfv4fT3SKBVBzVhMeZFkU6dqDxZXzkwJ1YVQrXrohzwgj3XqLNmMeJ853pE53fKiLZcyvG3L5HtFAA",
  "key17": "4bjLQnayZSo22LphxpJKczujQ8cepkoD3XaEVy6daiNGF9BAvKSHWAWns2CiEqG4ComtLEtycV3nymr3YGj2NLTT",
  "key18": "5bHn3aCbuqzLTV4ETD3QmsrhAETEc265LGMNRSGgakkmqQwTdiyGqanJh92VK77R8rni9Ko7rSEdmj6sdV9zphFf",
  "key19": "2k4mmmsAD2LeZV5WYAJ84Gf9JHkCJ1FQhPArXbYCHZbzXkgikQKMbp92m9GBp3YhzhBGB5FXenwbUg7YyGhXK4jH",
  "key20": "4pximDW5jEqKXgvzaJCJN92VPGdiVJYrquvYZQGADP4cxLBRbP49h1H2m2W3eRXcVE7jdqKHiNGsfSTy9GzPf4sV",
  "key21": "5bv6iLcopbTuNhEmXabDHm1VGrmj5EQC3NFVtafbjiogkCdvtYjpkrzNaCWzpYL4uaTCbtmNzCAytc66XFzb4p1e",
  "key22": "4D5bjw6BYVy4ThPHbDry1qz4vMcbAUCZTv7vKFC7yfhpCsURHeKX2hrZcS9dBVwy6sr6Yv8tii8M8GW387K3XvsL",
  "key23": "4A8dwVEutyy2CVbH1RSAFCM6mYjfYjZfdLmQco3syBSMrPHw7wJC9pJLAHWDsnUnAbartPsaxVpmQp4nkQraSGp3",
  "key24": "vTtvKSUMXpF4QtyGvWjSN1BTQvLGEvnH7Ze6DJu11D26Qd25REhmGDMDxWgm1YtPBoj8ZqWDkhNFNY4tRN76nFv",
  "key25": "tiPmkwDHGcMMBQiFfddLdEWi3WF4qTvWmM51WzBRoncURiom7HTvh44JoHWTmYB5nXbr2cWpRML9wnpjf41ZmFH",
  "key26": "4biR8idWxJXLpdRxd66CRVuZfjDppejWTYQjJXFYaaYnMsRs6wZoThPR5ThWF8uv2MeFckCDpAkrwwvRgYX9Papk",
  "key27": "22X6STgmdDbWWpsgptNiVD2HZKg3JJ3cV6mQyRe7i6HyAqUjKuqV7ePfxNDnm2WAqMf5eSPa78ZK2vrwB6adZKCK",
  "key28": "5bL5SAnBYsfbwNcS2Pas8UW2F6FmjvjLTuJRabxyLz4EXtri14w5UPp2HV7jps9PAYA1e5o8y5k974WDwajZcXrD",
  "key29": "2SuG76uje2HwuGbBQdiApuQLUA46uCq7Sxkrp8XxDYC26n8Re2CLVw2eyTQ5hjD83MpK2KZ38bKvrhvh3FUFRMPM",
  "key30": "41px25z6hrCgHzkdCKhqWxtNR9kMkPS1Cf3ngZanfTrbqnhvEmdrjUvwqCg7PGvMSRuZTEQNbL1MuMJpMmSfmS42",
  "key31": "3USNS43hQ94cEQQJKGE1RetdPaTUj5ggJDUkFAhLLj9Wv88Ujj8ZMg3bVkGqCaUMT9wCsgXgPzM5M7SYPaEhYgng",
  "key32": "4599y2xy8CKwXdQPzUdXAJY2cQmRS9kp2RjeRbs9XD6NqXETuq9kApZcyJM3Zfnt5RJgKMEtyFFiHynGLzEhNW6x",
  "key33": "FKy6RNH7zBTumejer8TBPqpsxzJXfEpcKbFK2LPPfGusLjt4XXgAGUcaiEWkwTSrzY3zXsGn3j5yuJqzA4UkUkm",
  "key34": "5ARtFfAhLo3UMSM1pea6LqdothCKLPUGHrGhM6RX4tn8uE7vw57Ma6K1fgWYqokuLwZiNjzqGsNTMeZKQA7siitV",
  "key35": "HonTgMNei3BusUKs9Xwum8DAEpSTZAb3JwhQvg1zMa28qWz7MUb5XvRaVxHt6SJvx4UVdSUs7cVyxgmcgS39jnZ",
  "key36": "3uwgTYYghNSXABvCy5HWsEc4FtcfbYn6ZcodiXd9VrecLLEUSgPmjQENJPrku3zmf5F4q5gKTSNjsU3AqiYX6eEr",
  "key37": "63GVktpGjLUyiGAjxyhd2dzLogqw1Yrcp4rRB3dgCaHwf7MPcZSwR8VJfkPMs53iLQSdmfDseVc6erG6uTVV4Jkq",
  "key38": "4znsHtuVN4UbZWdUSVCGDDYVNqC7p74P1TeZrR1BXqvKKmRUpfZBENA4cRTV2aYtH4sGhhZKoT1wxH8v7qM9dygU",
  "key39": "399HBekHBTDbfpSrrLBG2Qf1FQ15Fi1nkh2KZbi2KvYJNpsGKeCVHfaQQ225FcMoxAcC7FxixTKYop7K9Jd5fHhF",
  "key40": "228vLR4sFhEPYB5zNZWzQTJiAzqYcy1aiyJnAdJwLXYzc3XeA3Uu8CJgadPvSsz38r4uEs1TafK2v42UfKsUe9vf",
  "key41": "5gYHEx3mg9u23UUHoUHxUiMUmhgCQ2UDwFrukK6HA3ViEoVdR8cjDUJYfsLu8reyjAcGAVCNvoPr35pz4WtKpZUq",
  "key42": "dgm1SNzGwmUrH7CPCDbXVHb8bagRtP7Vug5QREUbpgRrWC7dAZhk3RksaskS2tn1c3zNP13MxT3abBt3eyyfj8h",
  "key43": "2rTXyQmVNXb2bPKmhEqY2uR3omMqMtExhWDFvaqBDJR9cvByBgW8ZYkn7Ugk7P8sJDPBV4af34RJ2Bfnej2zJDPp",
  "key44": "4qTjvkp2HiWfxhoEfJ3j2JZVK1keYB8xTdwJmRUt2bA4KSA54u2pgHRus7h2gXv5yR1RNHDkmz4zm8KLVkRLG2fA",
  "key45": "2tipWnXn8X3QGEZnxkKT4dG3ZeDwoXmjB1rLGskDBUfVCMkYqdqSHHPb2wDLWqKzL6bmbGKw7vVdSBguPjRp5iTH",
  "key46": "5N3EweduQEp5SQkzjVgdG8H3fwXz2J99C1YG3gJ1fMPEZXZ7rfwKYK1hxndWiVVujwztHbtE1qUF7stYj1oqJnWU",
  "key47": "3yWCMYSo1DYEYT7ajqGkvb3t3gFagWCjBpb2xjD57mbSMXwAWKS6K7r9jKESypREZLhK5VG2gtXq3AFiXAipQYRq"
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
