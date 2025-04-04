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
    "3CAJVUGUSGyVGuvEsvPwFf64NzLW5xp6v1rf3Sd88bQno8HtAtqk3ax3DQBUvY4miyFXQ7RJBLoa7B8Zx6yYZoKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39YzXtPCnxzD2NRHyvxt7EVP5rnjKPD7d78u7yqvEtW55sGRLP5VxJ5Qjy1U5fpszuP1a7yguKEcu7zQcX39mLH1",
  "key1": "5gkFS1bY7AW7kZR2myt9NE6x2JEDYJXSTJcX1GQ9DXTD1QYd78UFycgCNf9XM2BGJXUxWP39MAPoBeSAbWMEhdHe",
  "key2": "5uiTsFkemUXZqotWN7dyiPiK7EcwPoWArKzAJbkzHHR1qtC16Vmq9m4XzpXRzHLWSwoU6r2Npafeaj9s1pKRu2EW",
  "key3": "3ZMNX1MSifCyY76KpSLdLrnv1UenDenKG2cCTSfE5WUr1CVqrNwobeDDqdNTrTuEbywj94pn2w535KuKNSGEBTJu",
  "key4": "3QUBtH9a9DmYrTwQr7R1T1aDua6FpU1bmzwij9MCiHocHFXciPkmZS1stYkgHCLJp59eH1ToBMSfG5mXyjJ3TQ2K",
  "key5": "arwLxETAqhb1xNrsPzrbRowaDXdWz3GXqU2tX1586XfNNTddT6CoEwxTy47zJ1P5GyAc3Xc4Emn1iQ3Z3gwVcxt",
  "key6": "4yPDNNF9mFp7Wh8jMfWWywsUqNsQ8kS3LMt4LDxsWCrTmkNook7JFAYBsshvJtXxmBopb5DpMFigAUB8dTDVcRHd",
  "key7": "5iEcqbwDzYVek5f7Vsxn3TgfdRd5quBpXg4TPs8E76g7MpnyKoSi6nzRuNt1mRrdMDCqMijsARMK2XbhAxUpVPM1",
  "key8": "2YzphdBTYFLLxFVZg5uQRQ52McTvFMjdQfZ3xcQM9gQ93rGtK9fw3Q6HkNrHCF1FGwW5LcE1tv7vujCMeZwkBDUg",
  "key9": "3ye2EDvnhV8yKjkYnyGtKWNDG3iV7ci2238Fg6a2CmrBdMnRckKCRopjucms2y5Hc4CFRWP4AavdibJWnRmsW5Y2",
  "key10": "2QNjVi4mqRugV37uwHZLffeo8bxMwMzzPgDPWrD7mUAkBTtupNwtbYajNJ4AH9QEdAbbqJC6L8XjKpiXxTzZGgWv",
  "key11": "4VYhhyRxWJddhpPuAKizK9CgBZrbtdBZWCBRXGgeUJgKuxQAQPK4WJcaThNfbt5MUwhC3pQTuWStf45ZPvLwqnHf",
  "key12": "PrbB4Sp8QTXgkZReity14jMxZemNcCyEocaTuPbLvFec3KvxNofWHpvsz6eKw6jNWfMbyHCxcf8byH1L52VLz6Z",
  "key13": "34Y4urksAJPFczBT9Yuo9ZZtLtJGcoBvJdAP1k2xe43xHg4dFoa5YuR53s1cAhePfVGKEbeCPg6M5e317nEgCr9s",
  "key14": "44cxpMpCCeNHtDuqVJzjZdcdUFVwNadEJfirCAYNdC8BaVXwAZArutHD5jQNFaEgS34MVmV47vrgqPZnLMchumK6",
  "key15": "9FVs8PeE8jDMJzF7vydgQrV8cvvaCehYptVS3pkL5fq88bQhAsKh6P7dGxqEtU9SGFJMe1inX8kmD1bZn1ARs9Z",
  "key16": "4WrhHXZXrKKegt4HeDaCeufQxXn582vbUkKpYFULVjfdA7FjsoFsUBS9HCSmiLcpKRqWJjGNUTXoA2saui3ka63P",
  "key17": "2CLBzM528AfvZFFW9CboAcqBweJ5XE5WkBUzfAiv3zS7Je8dFsz7AgEHuQDcpKxdsw7UduRGstvvirnZNyeUvSj",
  "key18": "2DZKhWCv3SVM8cp5Rx9xx1m4i4KzRpqjsTa6iUMWt3EUx1vJ2oHCyGzr5XsXyp6P94958aGKFn2wjfPpwyU8QTw",
  "key19": "4Eph4t9eMX8XKXZrgNVkYn4CRLvAHxjA4v2LFYpRwqJ53q64ScRJpeXjS81ckrcpz1siH3bUkfH56N3xHSzUHA9g",
  "key20": "374DjW8RgRoHPbBvGy2bcdLRh4vKMQCujAzciXKPQZ8jgrB2MWDdA25246JJ79RtB3CSoKJ5gRtDy6QQaq2hYd5s",
  "key21": "5GkZrQcEu6CRgvgRo7pAx8jRQZyETATZpGF927rDgLhwPd1V636piQpS4JSetjUM3qrXD3VQhrigZJLAfQFqcL7q",
  "key22": "3Dfj8bQg1TwoMVBLUrdVk9qwriHffxEzEzfEQMBwxibLtXBZxCTJjqbfE2wUuUt4XjaBVswC6Z63wK7bmiukKQ6S",
  "key23": "3wzk4mL2SXTnSpAuSdPTcpy5k5eCAGhkykom3MjgERKuuT2N52t7xteGBPVRPbB4L2bE7LG7aVns1FD7XhhYsHmM",
  "key24": "5TKmLZyvKU1XL7vwE64ZAddQVpgGYq8sE4Sp8comVXiHY481ck6uoEU9gJ6zH5jgszo3hdcw5vELtDbRoKXkaSCY",
  "key25": "2gFNLGyt7w3rDZr5D4gTv85CXy8dBra8pAAggevSsEpMLoQno5eqNroS6nna5dz9L7yg9zrSJHinPi57N7Wy13CN",
  "key26": "3jLmmgFnzkkRDaq1oCubN6U5wAYjKqBDryQnPYbr2WGwDuWY9xYPY35q3oWNcWjPJyC3EqMCQc4b7i7HkRZuosyL",
  "key27": "25dJrt84uVfyvYHFZ8dc49fHECckYKVbaAArcHNAcuRyouHRLuPGN5yFaKF5qEoCRsCwqVdkwArVYopsindmcQBQ",
  "key28": "42hGDAzTGe4GgezPaHeYzSRqhX3UVM9jTREx7MzpVicFYfKLadkQTrXdBK4RQVWedgCMiKGMMESgU1QoRxkjNA8H",
  "key29": "2pSbhV7joq7XjjnYKF2sWh4sbiQddCEMdXmJktHx6qwWzYzcjbTfcN5ijCpwHBfFpf9EhWHMv8tzWRciLojEr62S",
  "key30": "24jzjq7Hf2g9owvAoGN4NeUVM5LMt5Wvj84yMN8hNV4BTEBHP5CRmaLkQy65yEcjR4yBUad8f2iTHsVCaesA8XPX",
  "key31": "3MDJah5EtgEFBUW3aFJ9c3CYq2qXanGfjUbWM4hE13BZBzDQT3VFucyoQpZP9K8Whax292pQBPvcqKn8vxQaMaYp",
  "key32": "2hkiNS5bdnSd3BFEA6cUBdsNSFiimKJXCKv2397GAjs8gTVUskzGwmN8oE4AA1bsg63s7VT6AZ7xVG9tvC4DChSo",
  "key33": "MrgtXvwKaZSD2NVg8FdqnWsRecnbbZh5aE3B6SpA2K4aRboBJjTgZoijXbbpExj79NU4VA9o9ToqAMiDT6Fh6Nz",
  "key34": "22QVgPdmkmKd8gjcGeanYTbD8P9ySFQFNaviCnVWfJNR1yMKR9TYzsSP9Dvde2UHBqUGxiiwtmyGMK3REupGy6i8",
  "key35": "2G7p2L2HmxCQX4P9CXtyNJjQZUBrccNS9rNuGVDURi7B8NwY3H4uD9sBuYB97bJYxy2zZva3w3QocdG96C9s1TJV",
  "key36": "3a71semwrSqbsQ9fz8iqP7tYCZaBjySQ7RTPcsqzVaSexMYegpQwy7ndvf9YCqYWCE8PHkZkXspdqc67QyqRoT9X",
  "key37": "52GohpUHa9LQxDbeWnuTxrNc8Ldek2fjrp6XQCRj2GoX1vEvPS3CDNojrK98UHSvMc5RwNvq4JXacFwFaCczyxyt",
  "key38": "4DbayxZ8jHpx6eH2pj8Ypijhc8gXvGePMHv5EyUCnX3R8dbevD7BeBqAvgJ2CCrpjp7jttt3ykHDPJski41jfazT",
  "key39": "4wB9kTqxPzdiQgpcCFB5i2aPn8EeRnunbK8yq7LGQeE2q3MKZ5YZnjnkRHDckptdHRvhhLsjZgGGMqYDB48ixCtd"
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
