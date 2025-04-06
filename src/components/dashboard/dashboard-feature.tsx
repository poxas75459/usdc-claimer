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
    "4ghL8BNurz42LrrL5sXzLkrc7KqoqiAt1ZFH34xeCLYxZaenJM6wko4aZy85ate4sEPpARvQmxT3GbmrCF9hnYp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jDcJDarJFxBkARspbMrvvchZXs3pPvXefu8VnZjQzkMBfRc4eUPQSraxmZj8A8u8smwJEeL4KrA8n7GPMVc5VBM",
  "key1": "N4wjQ3e29tSHuNoSQ8d2YTmNxoBRhxYgmbQYtZcfLtigtHukQf1s6TFJbZ32eFrvegW4zQZUsiW9qbdwY5RgLRi",
  "key2": "JtskY2poZhwX3NAXM7d8HbBZEC9sZqGEDQqnjGNEEJwFsRUDxmw3Dnf1y8gu8CmLB4Bv17nutFYooGmbwwj96RK",
  "key3": "3SZhJwV2YSLsbx18YW5L4W3rJiuTbsXmtaWopRbTr3YHvQ8arn2i4A6wdmw8F5ZDnEqSr8pa4zJEzNG9TXX3q47N",
  "key4": "5iS9aYjfJCZBBg366rQ3URfCCyA4g7kM8a2UM8eHQNR1sEiCVQV7pgJwvTDXQk4wYyxbH9Q5AKCBfCYM7MeuPVHY",
  "key5": "5e4qZ4mZKPWrjaiSoao8a3Vhsgeopf1rz7jeanLcS9bhygenPz1HdM9BZDZrQr77Ada7BtVv1aRjdW4HdkfQTbKW",
  "key6": "56MbR8hLzXjsgHckCfHUSewkuq4ymFi9FaniU9jA3R56fFxsakDjMRtMbGiAWtUd4suq5ZYgjBv1PCMovh8VYrzJ",
  "key7": "DK25gETRxEnDyGNCEevh8oNzgn74bhmAyw8N17jC1kH1DHSWN938svs5ftucppFcFYXQPBSPgbfoBE3BAujYai5",
  "key8": "2d8pA9xZdPsKUvCaTZJvHKatbiXmYedPixAtRaChPmSs2d7AjbJ4MzN3S9ecuEFxGQyKuFun343qSWdhc7mMVfDL",
  "key9": "3PmegNUEdCFDERhfzuAkVSh29qo2QzVk3QNMPwBU3T4Lx2trM5jY2dkyq4vXNSVZdppUAMU71t1wTS9kNaufV4kQ",
  "key10": "KGxrwiifUZ5qdqANc7NCvKo5ziPekEAnbUqEz24iciRqcW21wKa6woSuvEuHy6Qu9mav6fmUo7imamR6dhXMY7v",
  "key11": "5SAFaN45K9EkqiqEnHvGpwhSH3b5Qv7vZB9GFT3UqxbKArsaoD1KwLcshhLLnveVekXpAaz1CtVuHJ5fmR3dmKdB",
  "key12": "3QwvXEwjZ2pmRWqweGM4PpCzvPwrvchxKKtcNyfA96bvwdZPjS6f4X37bmmjRV93JtHCaVh3yyS7JkLAJXUbyMVJ",
  "key13": "3RQCyjN5PGx9gTwCYpLAXeWMrt5oT6gcqCrppNaRaPHyHtpbU7288T3AjVRPJ3dBzBbMnHFFjck9vtYmoNk1xYVv",
  "key14": "29Vx9iW9F9iQ8FiHTMB8fNZzx6diyHitEpTPUo8nfGmybz94q3YbJxT4ZpcdaX6XiUfYoJhh1AGdLPHDEBTzmhWv",
  "key15": "2NHx1caEDLESxjinwgjAL73sZotFj97ZExMCvA12GUNCWkmkJJ45LnAJ17vpqS793W5QyCGpRbcj1LAkKEtez6Q1",
  "key16": "3Xfh97CWR5BtkbJ8w971oh7xWu3keeYnJBgCJfYjmVB5CvaAm6aQhPbPqdrDmymAiYqmX1ds29KyB1AdHr7FvPXG",
  "key17": "21Eh3ivTHYbbpPxqtvbptqR3HUNxrjfpNAU6ddmGEbU7MzREPnVegC1E2h6pjuMTEjAnTSQBQPqzXznBkgJvfHks",
  "key18": "2XHNFy1g7eAFPyKybCkTZGVFZuUNxVKJJP5MUCDBDrmLh2Estn96WEvCgYpufaHcyjhxyr9pWGwsvwKPshm2s5ee",
  "key19": "c6swNre7DjSGJLiSPE7NDMbQFfFiVMhZp6qrx6Za6Tzb6ZFUS8Mmwv6cDb7N6k3bsGMZGBNVh8bgGRpxna44Dda",
  "key20": "2U1jwhXYe8i4UZhyEfeoDmjaN9w9sRVr6vVZH26WNouqtteLhLCi31PjbtYamtuSsiMX1kVjYWyh7Cy7tzLe3Bte",
  "key21": "5hVaitFPnsuCUMpGKjh2N3JAWuhQwD77aS14m7ddcvNUWSRbN2p3EtUXeouBPJzEqif2Yj3MLz9KmBteQTMrrzBV",
  "key22": "3aacRzc95D2S4vfoXhrrkWXKmE6jwGD4nXPBHhgrDSuz8e7MiRMfEXk1opkAAYjX7UxbcBPgoEAFb91sxHEjZ6hc",
  "key23": "5HZA33Dou6RAK9EGaWzgWsBjvC3pj8p5iRb3RERFpYvtG9GcYdgZFpAWjS9o4rBtTCpgHUkPsdX2i4A7aU2G3dgx",
  "key24": "45aUn6zvvmMjzHMzTxhNi8drughscT8ZjxQPHgKtAPkwp4xXj4tdrjngyR2QhecNyBQbKFpzN3FmdCPxSqd8pKA4",
  "key25": "4rmpUM1rzhx89zDSN1pgiDREFTFRJjtpNRX6LHFJSZaZQvqNxXHkPrNthJZQ1FknA1iJyeanw5zAyHpgA575Xmvy",
  "key26": "5JTBfV542kRvhZdbo6ywDkfKMuSHpkM5t39hpV3jpfoPJqDPocrrKdpntLFuhutpqEQqgVekoAifURH8ZiVPsT2c",
  "key27": "5QbCrJ9XcgmKhdD2XdTj6wHNb9Gc5VP8MW7jLDbLGGrzj4rSjCmaa8JMFy1EVeabAChbzCpRSAbcqxViSHreKHZz",
  "key28": "EUgZoyn76z5GKba1cEXDLcgbSdRx7Y7mLbq8ciHgr8sMW3S9ME52a6KUcfcF3iqSzdDyXTabNCUmkMNwqfy6oxv",
  "key29": "5KwHmGPxvbvsFCPgQT4qgUigPdaoqaNHU3nsMfkuKdBSDVXYTz8pAzC6PKRrz5pE9x8BkkiaZWjhyQgyHjmFKVHc",
  "key30": "2dwizLsy122L6NBPCR8oxoyCJuCDBo1iwrt1sLK4sgGSypgmh8ZgV9J3sfL4FkWSwDmdfyGVHV1Y7ejL3rXm8YLV",
  "key31": "2Boo1ELB7KPXj2Sqe8g5KqRCAQ74dmXMmETuHTN8YKpzz8soUNakbbwmMrHxfXVwktv5BhRJbnLL8ueHfqwjmBuK",
  "key32": "2siGzqNQ6oF211LLNfJH7La4F7UzUq5BQzyVHyvoAYMMDVi5NJgDbF7B63hm4maSQeKSNX3TV8UBhm8FGYSRQFeW",
  "key33": "4DMJnNLtPtJ2oixTMaUeNgoAkzPDJ5XMaUt4jkPfJSznLrUmPSk4HUYJDSWqWYCRiQLTtaLQX97jpKvr6tFgM3dx",
  "key34": "28LTfoKP9TCJ5TGfRdeMp5NppjMEyURb4Mk9mctFwHzHWJ4qDK9oNtSsKkH39SCDzmkfVNhgt3FrgYMf6GLfGTdD",
  "key35": "3QFQ84UqRjmViKXgkMYX3tmQxdJMrPpbxUcJabRsck64Nqtjyxox3e4c7PECsG7FF82Kc2pS1HxVZbQzssA58r89",
  "key36": "KkUAT7nwHDXw8SJqQEbcxWwgSarTcp7MKr8PNA8pUSTBJhp5JtNTNHYfVVfhEjkzbSy2s4hiG1RK7XqpR8yRGiq",
  "key37": "4tbhkPy4a5vMKcBZtPKumyAZHf8YQX1tk3NMvENq3UECDdEMUZS2WrXzwkKanjoQjxYN6S6SL7NK5d242jyxVaTJ",
  "key38": "QEMdF7DCpHUxUWFy1Z9yFRRULiGBK5nCinvwZmPki231Gtr6ez8DBtDNPfmtag8LFAjHxwdd9uTYQrSDQog4v5T",
  "key39": "2oe9qvfcxj6vZBbzUE1h7rkkukFeuzrNfjas2zepqKBS2g4bDNT7McZUffyJnneraQjoW3tSb6yhSeGCzLHBtxuL",
  "key40": "2on3LmgSn7nwrftYrY57d4Tkqb8pSu8H9XuWHmaosTy8i9HtsjtTLG4cd5hP5xsCTzfYu9B7cN795eLKnftuWToB",
  "key41": "3pbe44ZyUXfGfcRtQd4RxjLJBvs2yyznoAc6NQU41zdSZwGdeCUnpMeS6kLb246Jj1k243daZXB3EbLtcfkcCNGQ"
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
