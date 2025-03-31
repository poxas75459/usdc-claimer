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
    "h7EXgYP5azK9MBDg694BnAtEam6PtMxujFte7Z3Q1swmRxG4nZ66EzTjmDfvmSELBYrow4MVEpB6gX5u8wwVCDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKVvPmk7VCi7nkLTh6L4xBFj7FcL4cMVYkLZ3K8wfLivghfLyATYjKmHNiRVgVLdC5esm1T3mkWaZGM3bput2jY",
  "key1": "5HY3PQ3GaAGVFADCcfkzAfQ6PUpMsfe2inXEqnae4aTZaDH7bJyHPFQaszEmoBzcbNCXc4XP53WysKHAWkUw2xYP",
  "key2": "2B1mo6vvku5CJYy8Q6PrdZZTMbnNzw99TLkJHiihiSFLzTVF2FLGtPgz5Rf5bRzkK6oD52rjf9UeW2nay5dLu4YD",
  "key3": "4wpHgPMazyJV6DKZphZVJ1kcvs22khe4Rof5HthRncBzN7zAZdidhpXSttat8kquMo1VZNMUCbsVEaY3qinYuQAG",
  "key4": "5HKRVXd15S3TdZFDCJA8rV5qmv9A69heSaRLZz6o8E5hV9mw9HMm4Se7sKA94CKc15knEpuJqk9PbqsVPVeQk2qr",
  "key5": "34q4HbPAASUFdM9CzZxsYYwffNfw9Y13FnxZJZWmmnnUatsgtRPzAQZWoumPuiKVRWoAFrQTJMFhBAdSbsvfyVtd",
  "key6": "5fU1Z2ZVu8pwpCNFJyX5pQLQcqiJpvAMtknpxEnNhsJTikjNJWK7tn4uW7hHpLbqgeFFPUHE4mtSGzpJAE1TNgsF",
  "key7": "2svMhLLdPSZonKNS8Y2Z8WTMvjxzQ2YMgzS1XugCrwFene4JGPpDwHAkKj7aFeBobthPwp6YN2FnXd61ZEKydYL4",
  "key8": "2hyuB95BQs2GPodELuTs7FhQXo1qLkm96BEEcSPfiwUhu1ra5JsCHvYekp9jRxxhFQURiuaTydBg4iwGZTYkryNg",
  "key9": "5vJ7EyytCuJp92gp2ndneQgMDixMvTWN9sEe18cYbGZJC2zeWNtqdvgyRf2TJBxjgvck3EED1CvxUShhC5ALYqUW",
  "key10": "3tqA2F7D5a1PKxdFuEhagPCszbovFn7J3iLNTeaRX5x8cGQbNMSHyTViUbU3P84JDzGpJgdrKHSK2LVVuZoU3pNe",
  "key11": "3NXsCFGjnecqg96JQysA44p8uk42h5Cj8pi8Ws8rXvJqkrMxNLWHZitMdfokQgTjnJV3sVUjy67HKhhKpKcWMwp6",
  "key12": "61vKct3RbSBQjKhzySRCm6zfh4nYp4YudKTh1WjBnEKHJTe5QtZBBJgJebyCr79bCNZo4CwkostM5NvqQkePgmoM",
  "key13": "4DTYaSnefGPGq8EvySu5BsDrL9tsy8EVp1Moz6ifr7nJ9XRFedeRjRnMnCGfUuAuE7w59gt76pxCcjnJhBSGp2Eq",
  "key14": "2P2fMBkfFbaVXiPrsDyTrXSYUY6NRqFajcBaMLqDcnXdMFgn6s8nJhZ6DxUspQzYr7D95a71vHdE4DAcEFtxorse",
  "key15": "3GzzaF5JxWRVJviNbdi1ZtTxVukFKqYvRjqESBe1unZihULFsSafnHActsjp1e2yNPXUm24RK11pxChrhEERPxv1",
  "key16": "LwcD92LYoKAncbTnrDMJqhv962MnU81U7wPTxXw2DKTyTJanH6XLwWR4dXjsbiXCYjPVtdknUfVCJq9BCo5U7ku",
  "key17": "21hvvuSJssPiW6um427SxU7AdD8mKbz1Xa2TYg7V7xMpK6Uk9AfrA8gQHDMk8k8AZYJ8sCm4nNs9Eupn996EW81r",
  "key18": "6v4EECQZisXVfaHZD6FNJJJ7KiXpMA8M2VJdp7iRUCjH3yoKD6sCYCftm1LVTviGWBnMQ4fhUT6EpBfzwgxM3U3",
  "key19": "4XyU8gKRyLYJeaJx3Z8ufJojunfTuFCK8AQ1Zi4SeZ58vn7V7rSHCXHrtq3vnU7wvdA4zgc3fVAcivtAysfbeXVn",
  "key20": "34Nf6zYErdPHJQKYjDYZeAjozYsZgigyJikqbQhGLRnru2QNk69jUM4YyzszmqDUZwSknN7Cb6KSPA2fWnJweB9e",
  "key21": "5rRH4FAdzwjHuh7w86i6sgVFHjk5o5Rv7KSKeL8F97RwabLCho1cZqzx2ATvLjVkPXc3MgzoUnQNFntZnWLaAA9k",
  "key22": "47N7dYEd8HNgaTrhypVVsagbH76U1d5byLBRNcR3WgYa1Ds9YiH1Q5ZwGsVmbYPiuj8XmYmZ4k9eBYQszmfHkp2A",
  "key23": "PeNTYARqKyfwwCBJ5yEYebZBbiCpzLH9ESxSRtQu5Ci67Kd7YTCrTtpxYHDeu1pusyPiXDzPewxV1Nq9QesoaxX",
  "key24": "3cNKFq6hRxyP3HwxVBHYn2RBQwFk2Mf1z1weMy1Gvu55piPScTAfZBkjQdpfPsn5o5JsVhg4Fci1i3HiqGiJxRHX",
  "key25": "672X5AH5vrLsFAFS5RRQPNHjH6KP2Myb4rjTepq1uKiv8naiDrqpt8LHrqA3LVPHvexfCiDaEFebCWBc8ZzgpLg8",
  "key26": "27F29SmwbArQx1EXWD1cqnZtSbEx6jHcsmPdmH3PUNw3djzsH7JqWQZ9EUZg5zYbHsmVMyutAH7XMGdV44JX85BR",
  "key27": "43FAkSjGBHaWefwgqrCCuEWr5pVc1cVX6iAgTHM7HpgoPKWa1dAsoV6GfB9MpWi2H3hdS4mvZvN5j8KGamfRGtjY",
  "key28": "65K6nTLYTNnSWzVQiPBEZ4EyYJWf5Dtp6BBmYgePZgMMeYFfGjj51PZdcft4GWDUdgBEsbhu9mSXwZ5fZ3TSJNA8",
  "key29": "2H7R3NA9VYzVmwz4hKJvD7nXSV1t2zJzpj5jzC5oux3haAabjGTXjuDygsne8syCgnvf7e1gPkRKHjnecf3fPkPv",
  "key30": "ywkyrpFFnUwKDnMPJVFL9x3Bzm1dhE4vcGw1ukxRNykaTh7GmGK5oN6okqSkwxtixW1wuDrTtzEqrYgYGah35Lf",
  "key31": "5cmHLXVv35UqJdZ1YWayytCyBd365MJYX1EHiBXzCagNJC8Cw8S64DuaipT12mZwCmy1uBevNhv2GSotmRy7oSRC",
  "key32": "3RgpSmP7EeWJcM8NNskde44yKoYd3wEs46yi4qpyisZmFpAjcREEan5QdXpja4Wu1e712VRxi5b8s1bwiqeTD12F",
  "key33": "2v2qhF3WxbCFL8oTwiWsrU8ksYnx6oUxXcHHnynHATbL2nu2h4PjH2W3GHeJBJzZzhFsp4S7kjKR7VYYjwJCHQ2w",
  "key34": "2nFx25VFEUHfjYtasgtUn87LjM12f2Mgm2ses9FSjeETDK2pSA15SGBDSEfchPSvrjNe5qRX8oMAQyL61LB6X2Jo",
  "key35": "3YybRJ9m1HUwtD3m2uxNX3WHBU1Y8FyJ6v7465i7JsKMcBgub2gFJN4Aqbeop9QWjpxdLE1yN9kDwDftnpwTS9vT",
  "key36": "2DTbUsGLhuzqybM1xHoHRVkjuNJywE3QJj1MQ2g7U9EVu6huep7rU7Z973Y2unWiKitpHWGB32aNp8A45nRdt2en",
  "key37": "3KPKtBMoSGqd9bqxAkmGJsmT9K4k1K36ez9Hu6eBkHVxxmAEjyWnv5HZrGobMQHtKcuNdnzXzwmNnDURdeUN6EPX",
  "key38": "5j6sadYaU9LpRcHVYyKZQgWmDyUpbcVWtcpR7FoZ62X8cchCj8nzJCnXvzxW8VHFUUkcezc1MttNMqQEju9opiBf",
  "key39": "29XCh3WWahoBejjupMHtWqkAmG8DbYtiirkczd1CbDG374EJvMH9GCdBrgXt9HbU5DDSHMovLaJ97RadxLsHTxR1"
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
