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
    "581zPdtk297E7RkmqJsGEtFS34fL6vUAn2DXnHbjrqg6ChEcMixCkhC9fzvz8dJU4v5ZUK2iGiH6AyyTUZDBXEdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xg4ePRcApwouc57NvnU65Lhk7F3vh5SbTfseTiFtiaETBrL7DLNhqTWEripZjtactRQ327zcHuma1ty64dKS5NV",
  "key1": "5ZvNKmfZis9XeCbfwwmueTFSok95fEb1sk9PKgUfX8cWUpvgK5frUuM6w8Wkm24LekhWogyaDx47eMWRUmjFPLkS",
  "key2": "4a58oKGUe3SXt6vzffyNcnn1bTqv8TWu2KGfKreWsjmYtyN5nupchZDEHJLxwQPQLAvYgRfrRFLzAb916qcfmEGT",
  "key3": "YUYGig1PLm83Nq2gFNMuG9gFFrYapJ1wU7zjWmJZq2TK25r4aKiLPFKg9iLPkZUG4T7oQMG8KJbV7wxRuzixZvm",
  "key4": "53uBGNVDLXYt89LV6zCzrQQgdj1PgxSn2uLoRHRfQkGnnHFn4mYsKTj5RcdB5RPqQn3edq9HoyEcsWJd1syRuCJW",
  "key5": "5Nvi4ZUJuYC8wcpfwN5FiCtqvSxixdVeZd9LKUzrxnQSNWHxjbwgkUtqmKoUBaTL3EBwqfhnh8WuN875uCvjxPxT",
  "key6": "3dDKDdFCRaHRKPwrtemC37EWUpuFQ5me7wio7cX1MyKWTvP6Wokyztt7A7PVrdpp7GsExAHRge5BuLWee1CVZweK",
  "key7": "4qRTy36rTWgAL61Zy8aBRUr7vdWRiza3mnRZZWS2VEdqmncS3g9aHpYdPnVPb35bEWYHQJGx1B4H2xaYEe1WwqrV",
  "key8": "4ifbj8WqHNFS9DaVtfPfe5UF3Sr4xXUwGZp6jBh2w5JMJkrVi1FxyNB2tCGx8K23r6VmXK3XEGPxyTbVaXWo1vf4",
  "key9": "5XYk5iTsCYe7DrMHcykkPhBwHkjf1qxZmwPaXAuzrhvZJv4nFgANTeuXzY3fkLjPs6pLEVHDGoRKEgWhFwPJLq3Y",
  "key10": "5HCFZHAjCeYC2CCfJRS5KiPkrsmt42gZgfx1XS6jd1WnvGtvV78TsgNMunpXynLRJkQkdhHR5TAMiSaw6ZLy3gff",
  "key11": "55BoAPoSe1CL2PvgJ1rf3mmmQRXcU6XFH7nyWJQExABsaeLMkAV5yau1i6Pdh7bW3MvE8nBEJTqt5B93nd3aELsU",
  "key12": "4qvEa2Uiqed51yTwWyjCwxErzrj9FrAoSWNYZTUANiVqi9YgjPE4yadCmvrBoF2HtXS4bodyXrxsobWWJuNH52nN",
  "key13": "2WB9wUhd635Sf3Xd9HEzVuVRLB1vQnCVoErxxNmRGDYPXQeyTNAbb6oAHDrzWyQHrVY2jTKSJaTjsXCvztAC4Nhz",
  "key14": "4tLdR5jphospN5arvY5CVNr1A8t7f1ZhHVq8qttLFCj7u45LAKWDkvErcKS3Ptt2V7Kx8c2Z87vXNfMFjFuaqYgK",
  "key15": "2YLVi51QyTndraYuiDY8VzX3QqJswCMMzJGVc7g8fMUnF7D8CZhepq6ineWTeU4iBJ3HQqmJnpUBKm9QNsWmGYYo",
  "key16": "61XeqmLARB7MxgGetecq2jKNPZcaG65xVE3FbVJh3Mns5k5YSLdy22GiWuCdAa8MU3BdzKBWkF4fLa4xgvtDXkRj",
  "key17": "4rm9ZjAnwH9pKxisztcAcu5Foc6JuaoszPz1GTt1KuxnY2C186Jmz4jc3VtZNCTeQkbEU5t9Ygt37eCMkxui33T8",
  "key18": "2H3oMtF9XiCENZauvE8uYXerXNhyCCR13GnvGsKqUA9TeVjJ8pkqyPRG9FrEUUybVbWhgp7n84eWm2JLRRnn3civ",
  "key19": "29mtAri1RHYsadKXAX28tFbeMykGSuTiTukHzJhp1fisXD4WCwFYiZQXdoGwYrxtRq1vKZKah9fjmCiVyjeuhwnh",
  "key20": "5jh1AeYvkyDKwJi5ocNKsnX8VNE3oXkSpcTaqdzYn3VWphdQku1BRW7R5YYWtYzkBMo5jBCu2FfFAk2UTdtTtmsb",
  "key21": "4UdDLYP75uqMGjKKPZibM9UwLv4ojv6YgJA9zmJpDwQEJXubkJCMBuGNqR3bTRQjmkQTNf64Zoyf3oa7EydaYVUZ",
  "key22": "2WeSUUsh4d4U6j6PFWzz98N1kDejJ7eTs6Ge8qeruHbd4sHks8eGZJaXQC72ucZ9oR5yQ93t46QNtdb3VoX4LvZ7",
  "key23": "2QZjbxQMawFa15W78jpBy67rm4SHqS8tYUnPodPUXGFGLGdadmSHXMGTbVK6KSSQMdUB32GeqRJbTS1ZAN87h8Rp",
  "key24": "3CcLu3nvPUu2M3wZ6xdQTjKsLZuXBkuze4pwDHd4cC7a9M1w1UXneMR3Bj6HGpPk1E73rgvW9XdPEmjFQdGnRCTy",
  "key25": "5V1znfPtRcMjoyUR1RSGKfWqPK5uhzJV1sZKcmX8TFhkTj8rGQWvruBHVfbhu51ZN2CiD8yYECJFTPNzruGN286v",
  "key26": "2bPee91sp3XswgRxkoJ7MmMgXtBA8nDGaAKq7i5BPSYTFeuJT4dPn8tJZ6UyfpwKrxesYXs9mtc5tzRz6CyPGEXk",
  "key27": "4Qfn3koAEUq49QzNgSpVvLyTidTR2KUkUHDWcVsAKCyVU5CkfKr6XKAw3pdZsSSZS7WMjEbvorBaGQnNbBTCSCAq",
  "key28": "4kq4feoaX5NCSA3cN7U9LfqC4934q11ja9QzFFssepNXX8ejvJzcWBiAh3fvREfmqgZYDBKc89uotaaYapLBr4eS",
  "key29": "3dXqChKNbHkZgJdg89sxtZbb4HnB3mzKrz6MVxKkX1p8T6GPDXabk8WNfs3sWH35fs3pXHfAh147VBARcHtiP9Au",
  "key30": "2zsDUEmhPvRCmYn6jhmps9KvWF2hPUafbTUNCjgcDma3urRjE4vkiLfVz5Zvzg3CNNrSnG2xremwtxDxy2umCiAM",
  "key31": "5V1r6EmZrmt19uVWpQBUTpfK32d5hDd4MNSFnPpLwyxDd1efLe5vb6JxgyVEJ3ZoKwi32SiMxkfogxJD18gEdRdN",
  "key32": "4v3P5bv7AaFQPGrTJCwmpW95dqVANaLG4uEA6jbT1LUmYk2kgHGLtDQn4b33dGG3Gy8F1umSwt9LZB2yuFBruPBv",
  "key33": "2b3MqZbNrjtxbbP8pB6Trjfz4cwnpDYZkgFERkGn9dFZkbHGA4mcrh3qheGMN1qM4LGzrgHoL1Hguboc8uGwWdXs",
  "key34": "4uXhkk6oPRSWKq3L7wTH7kGqQGF11GKdneGVagqrXWntTxy71YEErNHpWuDymYrpMshPtD2hkeNRKHz3CKsZaNvh",
  "key35": "2WQRZZyMQEJJLacY9T8AwKoHYtdcFBwpkhjUKQod3vXjVufyE2vRbYk3xbxhfy8uhEgC2Nju6nsxUKqcHADux47r",
  "key36": "5iai4YaSyWrLmxdwn5GjzqX5ZuwhXFfDna2G3FjzwsBqe3dCLQWiCMLXhJMDavir6aiTwHSGivRK5EKx5k3kT9qn",
  "key37": "2wsW1j3HYSvKHxuh9Y5vx7ZoRD6MBC1AWHQXurLY2oHbFauSPJ4bSXKe6Ri5ZYogBoCdT16BCBQp3XyG6Ar5kW1V",
  "key38": "2Do7bigcnbFMc3H7owaoVrDSvHri1W3H1DudwyvYsnwJnMvFRmd46LRrZu4bd1jBWgEadE1drYQ9UYrYUwPX33S5",
  "key39": "5BFDzFHBfY4ykdWrCHuLpgUTkeDoGwsfqGZLAuEb3KjyU4wt6RFMWGsfD9tsJgmsF741BDxDVccPjsYUYaX95fcV",
  "key40": "wXffNvsijPZj7o2ZQmKd1vojemxf4XEYYFXoQ8ZKvT6umVZhEpddBGeU5s4U4W8rrAZjDAQkuauQoRCUQM2ffwE",
  "key41": "T4LGy3H7FwY2cNKvHMWV51usUZEQENG4Gt9xtiKGTZC3rDfYpTdMp6xNAYF2BkDUYmm1SGdy6uBnLnVwSykUrTh",
  "key42": "3vurgNy6cUWfPCUixKmHhmPvS3SjAftNFRK9ABdeU5fpLNjWCAR1xfz1tuJxSSb9aRyoQM7uo3vDfbjLKWHioEzQ",
  "key43": "3R4vJBeKdy5K1rXPQBBXuEfbTVk8dpupmyDBPS4ySuYxB3Z6L8zkDnFbDnLCyKbHUZiURo4g7MqBX4uyxetiSqkG",
  "key44": "4S6rdYCpjFYFCZkkMMzesY6fU4k3vnxbjZB6mb1VraVdmfBCVUnz4ANUZ9AVS6F7dLsxeRpVNS698gTJEvtjNthh",
  "key45": "59a8eZLyzmEG6x8dAiipRPnzBhaEiocsuUnM2BCPjNhEbsWL8yGfmUvUGZm58zus1jRfcKE96PBeGeqTZCVjgbPs",
  "key46": "2QexMzGjtdH1141aaB4Bv1R52EMEgbwzCkmrUQjLr9KYRmzQd5Z4ZtKJZLiyNkLhhD4rFYSb46AqWfmWvxEjsB6c"
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
