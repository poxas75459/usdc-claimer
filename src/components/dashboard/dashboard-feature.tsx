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
    "3jvLnoBneTvdPxUuvK9JLRRYpfZFgZXsVUsUoSjgNNDAMn6mkBbiF2P5SFa4rN3FcfiVsNJN7J7fP7rdmLjJuzgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39TLoqfQNpR4t4LRvjDqth5vriezXPvcFJrNQRNcbmFXa2X6NwS2phaNe5tcaQuamkgFmcTsGukscPL6de52YY2p",
  "key1": "qgt7Ztbv5tZuBoC1ufJEKEpzdwjXHyJGovf2pTkwW5mhSye5AU2MqC2RDg9wFr9MzkdrF6yYYRgvE5zDXkxtUqa",
  "key2": "2zZLJmi4JKrKRoa82NVWCVV93ees7pVLaji8y1yd7UFQVpPr8vgkvVm4QXR9PjsoLKagWQwaKooDt5Jw4vqvU4UF",
  "key3": "36aMWgGEpUaPd35VUTe3XdtjjWwnParFDr8NsT6A3S99N1t67Kc8M87zgM9ZxbKXc6xFVDgBRLRh6QDfc8CpRrF6",
  "key4": "ESzmHVpifVukTz8oSF5czB5wAXqiWLWCrwPRMo9ggzoKdLCHVmv4yb6Ykin9xsMxHVZhaweihfDpzSeHDZYRwz6",
  "key5": "5ryGEVTX4iQc27NbBb67oLWsmaqffjH3asqutJpX5F3RyjqtdjwHHiSJk1VLfN6HSKqwkq68mFk2yGRy3UkQmx5d",
  "key6": "5Wm2Fz7yfwXQFwF7RomCPxTLwzHZEmbxsbSFURtMZzJFHcaNUnJkHvSHZXJWztjq1HLC6Dqx7b98eGLL2N4u67TA",
  "key7": "BPH8rr7Y6J1wnLu66YaKNDXvh6CAJRfRLEqpQXihEM9S3HKDc14avgtJt2Cx737SSkuyL7PYr3KB5JNkz4wzgKD",
  "key8": "5SzxtJbHy4xS8YWR9JEchzshag9uUXhstUSwuHoedKQp3mBtmPN1xUgx2eeMWSGMHCgthdvujaSM87nM6FhNwSSK",
  "key9": "4HbV9EMQeS6yxJrz7qsdT3bhHZqaoytDJsdHnW6v8uD81RquRpJm8L9n21MDKSiR9FVz9vS8jLfNFbD9HLz9hk93",
  "key10": "4V3tVAkg9zFHyALQD1QNxrje9PXpkGfK3CtrREL3Au735p6m748qQ7q3B9fR8xpT6pcgKt5nghrG2b78uopU2Duh",
  "key11": "4KLLUUcYqwvLwNmZjU7vxfuJvCMJ7R9MchVypPVpAwXzdQTmGMP9QxvFqEevDTRSmrsN3fJa722RCgjWcxYU83Bb",
  "key12": "3cCyjFJ1yPocpLwFncuzYV5AErJrJeqGHf6ax6C577MkRas5RsHrVaEa7NFH5Ava1Hsf1s6j8jBHEcmBBUWYkefZ",
  "key13": "B4a6jpgYb34nup4bFPd4Z8Mv8YN7sLAxmSxECSrUcALB5KjEJJ3CuTZ2GwSjE8TPRcGgqVeK4rfX6T1nRSHsSUh",
  "key14": "nmr2hDTtzmrev8osyztmVKSDRwih4Y6xyihSNUtXRHjGwwfvi5hm3fw4XeEu3WEpUVQpXicngAQDsD4XRkk3C1p",
  "key15": "3NPqyEDnKDRSAhFb9zfpt386WTS8FdRW6fRiGzzYm7nAQ4BrK2jAEhYwejjQUv5xgPWeKCRNLodkKJaLc19fM1xp",
  "key16": "3zDA1EHSHae8PL3mPkvXRf9eSS3JrGKLjF5p2MCUvfKAqeTSAtVd58u8KeqJ61n4FM1ahh9fbBfkknM4GEi5uVt8",
  "key17": "xG3w6zVu1xtDxqHZTt1ny7gdKMnHpPHCkiR5tT88EuNUtvVKvXAgCTXSiCVYSCUsgoFmAaLbYtfCLdTsNLLXRd8",
  "key18": "5VVHwbRUz2hARbhow21KCDTadV7Kk9F12HSQ4s8UrvU6NvCh7XTUcgTTTQU1Y4iK3nY4FmpnVsHk7DiiwGDf1hcc",
  "key19": "5ZNZmuHmxMeYtzhoX3uVZcAc3qDFBYN4fsJgi5E2fcHGRBrxep71DDrXPvzbh5Ngz2ztPYxu9dvrbYSe5LBzu9UM",
  "key20": "4qAbY2Ev6LhDEFX3JsqGGXjbcBGq9v5aGH4bXccmaPdxVC79gxNJ3HdgmcnJau9tbkzTK5A8dCKsrFn3bEiEHs5P",
  "key21": "5Nmg65PcncKieE4jHyvoggptYpfFPqmDut2bKB1wgBpJC6h6DCCBJhst2Bi5cgApxy63CNB8Z61RcvpkbkKUEFSp",
  "key22": "2t9YRcFiAYB6PciHJKKS8Jew9Nc1DWQx1ozwRRUvAhzcLgbABhUcRFe8RxjCi9ZcB8accojEx3Dp36yxEv336kkw",
  "key23": "27PpjC1YSHE1BR9Vt1cLd32B7WyXKXhBkGqkjmofciVLe3mhzQ4m5uBSDgUoXXuPWxHvxwXfru2YzYkrMWtgPCtJ",
  "key24": "4eHuRdoL3B8awyg4y6cfN4zH7ZqzL9ULdMuWRffyC1YAEs4nRADGDyhwoM11ARsE7cdndoBXV4MBjSDWpxvAdMZf",
  "key25": "3YbQ79wtuenhxhHy3BcyV9aW4Ghr8rkVU63bPdoitJkpAToLZtQ4MhKBVssjdKfnMTPv34emyWcMSg8a9e4oXWbP",
  "key26": "36hA9RRcfLR5di4NzGMDR1uRC1GZmqtNZ4G9J48A7YoLSU6o2C6dQtKqC5g8sGBsitMDr34HA3FmvzKDtvtfQyiZ",
  "key27": "mYXdPL1TXAut4quske8LFcknN1RLRBmWMohxS91h8K2MQt87oeSmi6QCrkF1SRFGuXsFc73yqbGWJk67hW23xTY",
  "key28": "4AgGvB1gFXEDVsrqXHgY413MswDZ334zypQxT2XMDNQBbYMokGJuKguAVmK2TjxH8NAxWA7JoZX733rwovLxWGGX",
  "key29": "2AzNNNxSzUfwzyQxKYZA1yAFcKre8B4j3ncmzUq9TfZTBuk79ovwFEvBbtXskoTvdfgnDmteKfTTB74DduPJWwTd",
  "key30": "3UER4z4UsM87qrLqakekdDichdYUVxtTUrEaAd86VUonXkXtYdKtDjU86XFs4b8QoteXjPGkRzH4ndxVpgWnoSf9",
  "key31": "2AxVHMmczjLwEEzcRQNLgPKx3FfnUeXtVYydwmCFh7DJAKKfkFBxBpxmm6NnM6nsHQ7wgVH24X8fmKVFXTA837dR"
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
