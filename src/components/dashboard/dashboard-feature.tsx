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
    "RNzZwx1Y3E4sbfSqeU4YGkYyVkaHRvwW2vbV4YNJnbREnZGdZ1AoBECfkBgf9K7T8zGmGK6zpgGCZiqyLX9gJhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f5xWCcWotW6vWo5zJbnFnx6bBjWbPMR5VUpNpEGMzEVv3zNWXMmFH7DPjQMw3B8S9VLjBRGsKnhCSh4fLhGEy7R",
  "key1": "4AKkiBR9iYYRHiEw6KJWwSXK5LytsCj2tXRvaNToSZTFbNcZ2CMiw8jJ13CwjdCZTQ5GwDbicSbdS8foeymtKrpg",
  "key2": "2146rV1krvcVCmrUHM8qypQ4hJjRE1AHk5AE7weAXkij7SeHTceh7Zq5V3w8SAGJBZQkVWtgTBemN3wmEwNKgaPd",
  "key3": "3HU79xWcGngBNCzpVcQesLR2mCv27YNLVpy6vjA3WA3BJHiGe2YpbTtzTQzaKVX2NFmDzCLD5CnxV5PZ3X8q9pvC",
  "key4": "2uqPQJaCUcFAfWMX7ZN9rKBRrgRMm4R2RQzQnKVW91EU1opWpPMkDDmxYPpqMBgrCDNDDQMH1KNy8HsRTUYZFVee",
  "key5": "4kypV1hfkmFhjZiMFwrVbD4vxn86usxvfWHtXsFyhUXunKrsef9W4JV1VVYjc4FsdeUE7mVLNKHSeqqCTNrPbSg5",
  "key6": "37gpkZbwEjyV7a1MNGTxAa4VFZeKhgikW3MbYnsPbqxur2fdaXN9DEgJxLvVkNFGtVhoYVz8Tavq8MVygoK8ZYnG",
  "key7": "jrisHJ86Skm28zHM1rFbJ87XRLgqA6xSYtArwYT2FVoZYa7GahVRsKRwNC2LaghYpfzFkJKfX7n9X6GpoNqid6H",
  "key8": "4y1sUwon7zxHwqYUgNm6BzhYW8zkekeRNgLmUeYiAD3JMdSRFwoYxNKXpwZY3w6Xb1r3GEXA4opx2SNy9cjsvyUA",
  "key9": "4d8LfVtP37R6NZDybvqVm17ECdg8C99eqwyCFbU72yQoouDaF64mjVNkexQQdZ1pyPEpnFH9DvRFihXHqTuP9bAE",
  "key10": "5VMemY7GHXEeApCNea1kGo2QD2pznejTYRxe6JRnNEQEhPzoWPqaSwetZ44SVr8B1JwURfDzgdL1eKZaPmTyj5Hp",
  "key11": "2rs7WgSnoTcZQsbcqq4HKjopBCGn26t6ewswrA2gEEEic3Au5Rw8ZZgXiesTmCKLc2DsH5PfBog4zXbuwHfdW6xc",
  "key12": "dPMsQ57oMnHTVWuF8dq7427M4XJRXGU1EBjCnHHXXB7xESNGaLBYqB12jBYQLwPsWz1vsXHcckQXcZ5Fhw8SNAB",
  "key13": "452TewvpzpQPJcWUbMYmS82YRkd1RAi1MqtzN8ZN6tQhgjt3i4LNuwry6MBNRkP9S1PkfQVMvs8oT17GFhP9VfrB",
  "key14": "2dVisBbADF31DQ53p7AZMtKMbceXS2PLKviekx9burdYYk7nh9V5Q6uJ2H9uGKAgSuJ37vLtWDy13tz9oVhvezYE",
  "key15": "2DyAmxchda7RUR5J6M9nsW3aWiz69SVrjf83WDPyyoPsynecRTVr5znMEptWHRohR7D9hc3LHm6p8YfD69CGRq9K",
  "key16": "9xbiiJCj7T4jh4gZiyqgtcqLFKa7LMUDjWGSfCRZguWxDM5MqNnY3qrqk1fQtHjdzPpNyDpJNjwh13rpp6U2Az7",
  "key17": "5VkLaR1CG54sAnmXvgnxh2KSCXFXe33utkTJkH7vsEfFr1L4hwQSotfRZ59TURGQrJYSWk3U13iQpRyMAHe7s4HH",
  "key18": "5VJUbjhZtgiAUCSvuRXax1aiR646hGW4g1zAm1zrGfVjUaKginhtkedghtnUsmfHyu35Fy7v6Gi8Sus2ngETXR2S",
  "key19": "jcbrMuzjWaciMbZQuGiLmWdbFGFsJsRTEu4rywnPdatjoDcbHbWhNmyK7W9uX5fdJAv6XjFeihBfyDiCjeW11ZZ",
  "key20": "5ei2tKQ8qM5uVjq86QXom7ZryBHej2i3mama3E6rAtms2EBzGAMSe7nZjjNfHG4oXMUkvtruocw27PmhrC8D2Hb1",
  "key21": "3uNnchTjntCSddE4Go2qvn16Qr6p6xPocyuijmr5J5Gqi93RjwApX3EywDqcaidf8GQy7eTyuQtr1mSDMbS712vg",
  "key22": "5AoW4ZE7avMxvtWEJXY4Ga3eMWau3f8GH2RmX7KGTa2H84KgRaFAQkmCmMGSLwNJvRRRmUxvycvphTyVRiFmmS4s",
  "key23": "kJncksTVubhbYHRfwZ78FqPa8J2FP4P7GFM88D98hFA1V5bV4Uj9QS3MtGA3Fdy8HtVQHN285hJucrxcqLYx7GY",
  "key24": "4qF4uA2c9ZG21oaH1Zg8ExchSJyt2Gyp8eC48FFMrme1Tym87Xu7up6uCA6t8CMyWWGq5BMwzs1d81VnQPvGNsBA"
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
