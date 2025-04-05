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
    "5gFHJr8EQV1tCehGU8dmig9UGctrPZpaN5prdhNevCGp2JH3LshjvB7ML599zfsZWaLg9wgPahJZh1jXJpixCnKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hgVixtaeYZZXnVURAeTcohcYQ4GB6ZpfbaL7PLmYAcBZx2j5Tjox48YFfp9AUqGmg6zJC6j2b1QkNaWxRu2zHfW",
  "key1": "2NPUvrsjfRXKqAP1HrKPLAf9ri2a1YUeDzQTniiyFZGzVPjTFfjgzteaVWdZWy9JaZ7njx6gwG3wGrhk9wtKrAjT",
  "key2": "65n3Gz9is2EpLohqJ8g5AgPSdezzqfTSCBS7G7H8X1bwwUXoDULwzMEZChZAXzGp6KQpVFiDVwC8JDekuweM5jUL",
  "key3": "4WxrWtcSNNKjFZxwFwQk6Sr5J7sNuSQBhUBJ25CYyK5H2b9s4xUGzogdZ7XGYiXthf7E2p4zca3ewTo6ZuJEVb6a",
  "key4": "2UPCvfL4qphjX6hFB4P3U2TUTX5TvomkjipkAL8Rvg3QsTBfaKsmEX8GqAWj31n2R6DVpufgzVDUV9Dj61SH16yv",
  "key5": "66gc87pVUhTUfWdPaFdouC2vYHjLknXacyYJ6n9CrPRPSTWizgvRvF8SJG9NKBYkzaJbgosrD15XwnACvzwPb5Hc",
  "key6": "FKz7MDYhcCkPzV8TkCiPxY5u5SLXbGteg6LwCH1JDVP89LCNpHy9gjVTuBkHd4hpqe7ePdEywtWEa6ymPmZjk1E",
  "key7": "5b6pJhfPkLV9knv3SnDeiXsdFYJZYXjPaTzCqvvkQLhpugBgZaJpTwS8qSYL8NVnYHLoX5QVh2kGgcdzfBeBo9MS",
  "key8": "bhSV2BLwAzHSsdG4eVPpSn7i9Pc3vbUSNR478kL4ULBZEdzpZ5EZuWr9qLQRFejB3Qi18ftrSQqpCJZbpicAcHu",
  "key9": "43JwHeGfs5LjRiiJamqo4BvPG3V5Gha1iZjeMjDMqsPu3PEEDFd14CK1Fj2WTUsfpPHC2eF1CCUFBDBh9iDZTn57",
  "key10": "5Dv3pLiVZPNaz7EAyTCXhF2sRnTSLiAtLhqtBmSdSJCr2coqsD8RKqkczoNJsJZHyphrzyuSFS9m45LXgxSeGJcr",
  "key11": "3UfBRCG7GiWv1bRd8jMjUgUKaVWfhtFZMGyimPX1ocbmxGsmzMyqLzAUdchyJeMqrhCkFEqXrpBfSAnhW6RDFN7i",
  "key12": "4D4ZFgt9qUEebZEmfuxUeYKQj4Xww428cmW1KWzoxfccaUsEvFKRHXuUxAFHQidwQaJuCd4eaRihrdNzFeRMqZoq",
  "key13": "5zRUVM8fNNzUMpvQdHDSuAo4QVQytxgPGNCZHnG1RDUXdxSWoQx4db3hyj3qai5bRdBosi8P9DZtUzJeYdGA4JWa",
  "key14": "3c8phLGUU3xzbsikPdrUu5bAdifJeszQRCE8BAci4oV4Hf4YUbkfSvnciLinn2ZdBMZnxSXaD8j5eUYZQRVAx3K6",
  "key15": "4UYzr3MgMbvBwnVimruE2Q7TDtmnvhpU6Qyigj3BU5YUVapKTTCKcej83bepjYgoVGKHyxMDqHTU55txRGEGD2uM",
  "key16": "2UELEnsKZbTVcNd4Ur36dRRwb3mWZiJ11xEzzoecEmV47CtpRtgHinMDHkeqf7S4HGn6F5t87NbaQD23YkC9bj2A",
  "key17": "2suesmgVC2iNi2bBmq6naGaCYuY6nGaizTQphzPwdtJ3A4PHP1A6XSvGnBWrPkT72sekWQ2V9DAZNLqkFBfqMLHW",
  "key18": "4sRTzv2pqjxZ9uCbwYEkboaT474eH6NMjd1g6enBQ8ipXZH4fXTCSWrqcga29kDX4j7HY92Asqfztmv7uWCLZ1B3",
  "key19": "5eDCptUho6Aq9Paeo3jKsfPNnEN5FoBUNQqEVmYoQfSHMT3Po7eq5Nnww2hYMnjKmtdDEcvjrbMneTq9yQyYFxB1",
  "key20": "2ezcSw3psJNHrt4piJnqcHjHu3ZfLB1HnfwfJjZ4ThgjDdj6JavS196N5fuL86YfidX8o4CAJAYnkXQwp12K4q7K",
  "key21": "3ig99DKLfK7PZGPc7ZyL8NTT9nprX3RckMDT9p7Ag1KRj3dUya5f1Ajd2YQzZSVVoSC8yaK9JZNRUEEArK6M6F6s",
  "key22": "2ZCikcTAgyBwg4LXTNK4Aj7xmLWE8MJVUpQrhKQyimy4oH2FoPduMSWasZnzps95XxC6b6qQ2GihT4WoFCwbjzVi",
  "key23": "5kXosa3BfRYSJWP476huahoZnXKeZE5k1n3LUEzdTBd2JQqHa1mmbNZx7bwMwxBJYRrEYsixny7yS5Hg2jMm76tT",
  "key24": "DPaiduhZEWUKf77EkmEkMzSq3mM23TWjSjMtU2so9CyY8PHLATXXus16WMy9H7a2SewwWitkrbHSFBWSLVkzQZn",
  "key25": "3j7diWHHSj4rV8xbVyLRnPaZfzRTrng3MPvjxNAevHXhw5JgXBTof685MUgd4taSntqeaRqMCLNQDubbdMpBrzRy",
  "key26": "b4KXzgULXjybQyoaDVDmAWHKiM4hyfwpvAnctxRmFnXjwR3aTqu5yTMxoiWSfQCoQMCeNLFtjTNuvJQJY2XDMDk",
  "key27": "2pn2VcipLaKq4mQqma86gjuo2saboYrdFHwzLGMg9KT89SrJMbfwyNk5dydqNov2Dwc4MtKPkdto6jtcRJ37nfTc",
  "key28": "7JcwD7ye6duUN2sgHREWvh826idxhBNXSexDXg3d1SwsDwH2gdHmjw3PNQuLJATQovC29uBnA4PitK7Ya8w9iWZ",
  "key29": "46r2CASMjVDS4VkpF2inRiabym24mntsDiZUwqXThr5N1pwEoB3jrNEmwnme9qRa44YGmw9eTCpegxSSEjNJGvwA",
  "key30": "5BhynQypq9wHTsBmYnia1iC3iSgyHbbbzLVuvKdTyEFXQmbaQhsdaUhkRw5gMCSRh9oXUZk8a3j6oetZ3NUCKNr9",
  "key31": "41TwxDuvyEgZb542prAWPabW7WB9b2bF6M6Bhs2ynGs5hHHdNy4x5FJaEek2u6CN76yX8nzYLPgonSrSVewyNE9",
  "key32": "42M2y1XPUyHUcYkTExroXmEVpPtG1PaGrgu4MhggmHgU5xTiiYtTLEt79czMFoTotdJcKoRUTsSP3gTcAb1mv1Xo",
  "key33": "3MAMj6BFFU7RzgheoeDb3mr1pwjrRQTiDog2MNec6pq9tgvuhj2PGv8RYsGiSZmYyRRbLeSxUDcrDu3vMF78eJ9E",
  "key34": "64qqHMrK1DezDY7NaHre5ZvZV3qYY719uFYgXymSwpgrmndc1nMh4JiWHjZnJUxewU6iaBJ8yqpm7zDutk2qEmJY",
  "key35": "7GmWDjKxdwVR9Cn3czdm1dHejrE1BP8GuCtXN3RBDwZAHgD8iZhD7Jzap6xLVwN5BwqZE7KKqXknxQvsgTYpnnn",
  "key36": "vXjLU13UKixFLNxvG6LmBPeRvAXPCejdU1PqcnbNCKdWPJj3fEErpyGa5Yok8TGhHnUowaAZiGRFEzt8eka7rgg"
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
