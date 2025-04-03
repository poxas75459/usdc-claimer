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
    "kJh4Tn75VPuQ86ktkB64a662q79mKbPmnF3YqotcTYuEoZxqfBGTf69c9XuBxwusPn3t7DSNinnwyS65BoMHEjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZpVjgsPhRK19VvNq8jKQkn19AiQc7TJLzENd6kdA9jJxjB5SCerfNTafo627WqTNLgaJ46epf8CvL9Ut99edmJ5",
  "key1": "23yh86VzsDbqSDxw7n5jx37WWG44e28AAWXBZ9rRtVYcpRYfJNn2oCaLL5rKw8prwKq6caEMKh7RFTXHkj33xtvG",
  "key2": "5pk99S2Q9h4Ttn7WVEnnPabpuVgFTByJJVMcjC1HJxopMzxfBRdpDCsBkbEAc4nR79NxsVmMX8XDHPRxfbFQbXW7",
  "key3": "32dWWiCqVKHrTk8fja2pAtj8XZdMht2CWJt9NHGgLtWzyQ3q9Dir4ZEAuwnN2uLTtU2BCSypp8kbhfN8qDnibmSU",
  "key4": "iu4bUJvB181k28bfyo2PA6VfRoeXythknN35v6KnCaCnMAex5PVCHKBZ1vvaEXjkkSWGsekfcH59n6Gu1LJdhnB",
  "key5": "31EjCVAxq1kdNTSHEZhwrU84NG1Qrt4KYxey94Y6XV9fP7W2UEWrTk2fXdcJdnvJKzbS7zs8kRjvqHUjXGcYHmM5",
  "key6": "42jaE9KCrjSZWa6HANXikMLV3hrzCWeh9fcagAkRjoH4Ju4q4VsxTEcf5xYv5PMC9xs38kxSJ5jUKwb8CkshHYAB",
  "key7": "339ndFtF6RcvS8X8agZMykPkt2J7pGB2GHCokDhYqeGFaSbHZvUVbQmS7HycjsYY9ei6T3ZgteZGVobzR7n8MJjT",
  "key8": "2nwFChaZx8A7w4CBDEeddnRdfeNZ771zJGdJ4btqP65wLZk4bDF3XHMagMDWYDaZNnoHUvp4YupvcDL6TbB291Zk",
  "key9": "27pKGVPJ2RxEtvaeqwochMoeBmQvF5dqcb4psabUo8j9vjAjs3WgwVSGRRMkomxABwsWnsMHSWALUj8qaxATr1tP",
  "key10": "NBqBo3FAqhWgmsC4baPQcMtXmJmRvmfbvV7pTUgvHR72ySaLUhqPKS8bs61fKHE72mKLWcfoSgmZJq5MWpgy5g2",
  "key11": "Bn6Kutin1RGp6ASJgYjvChCM3bCdmcQmPFgRzpsiqy1DU879A98kk9tQnLiSTA2Gy3jdJhxZ1rYcs1i4xyxEM9H",
  "key12": "2RNtZcWGfPfZZMeAuDZwU43yo1qTvdT6vH39Gfp2JKQigvZaCirqu2Tz5wRGtjSdUKkPbnXW9YXJUKPfecSF3ZG9",
  "key13": "3roheyKLQdirm947oz8ByhH7r2pgtrBByY9JS6zdaWsdfMzUVnRXPyW5GvBG1qTitsAM364GcpaCRsDqc8QtV6M6",
  "key14": "FChzhNAtVUpuMnkMoGeYE1pZ6QY18PDZM7nDbCLqwhvYqY2G4fDQfZer2zQ83xCtGG4jTXWDuoxndeGjdB8NQzA",
  "key15": "43NqVDRSEJdedsBUnPV3xeMgkFPScKg4FyG3tEjQAe1zEsfwEEUbepVMTKgYEqriL4tmqtNdSJNx666jJxFe7gsP",
  "key16": "2HmpwFxetjVXsX48A2bNbgxRkJiabdyV3p6NPo9CYX8sLkV9Ekuuj6sqev7Pjpty4vjevMXYz4n48cDNNn4j68Ks",
  "key17": "2XSbE6zLGU11pPUJ53ynmcP2gCxH21WAU24xYbSjdUhPDavZuhooN3BZcEK4iZdJkf2xeHEgMNr8sL5VwcXCHCCB",
  "key18": "4FTahUDpucDB4Ye9Jpu5TuiSiHUjo4HnYi26J55a4WZznDZDpDS8SfE3dJNXZ2B2jhif3M6DdCVfNXCLQL6eT51h",
  "key19": "2VhzajwEmPPVUqcxkS9pSF4AWbBEp1CKreVkJDyvSoQqa85gpUZdXzpq3DLDg6zF46Z9XtqPNLRSa8qt7rA43ABH",
  "key20": "5JAn8Bgjfj9nE4n1agRhYLmM4Qcc8rqeycsaZCxiXA7sgZhjZauTf1WKTyw84sP9bwjMcYh3z7rz5ZtFMRRa883g",
  "key21": "3mp1oXid9bFRpHV1Xy4HG9JHqz7xA5H8tDe9Hrv1FxLF9ALmUsV7hkSfBPW2hHSkt2dRjitwq5MDPsgUEBEhoqNk",
  "key22": "4Bkc3GSJgaQcsHKnoWbbYG5EDQk2uazqdhwzPJaMEJhMifZ2DcWAevFsJZZsqqoZsUW41wv29iXWAaQFGJ8Wrf6U",
  "key23": "26Le4tjJmdvoyT1SeKfbtnqo4C3QF1ZWMa7rxjSCxT4Qzm2pjpwGEAq8P1BhoGAG6JeGfxBeFio13CpWDcqdAdJs",
  "key24": "2U7rwtkr8ZPBNjCgQ3rEc5CW6fv9nta6vorGnNjXZmvUEp8H1bcdMtvGhZYFW3rLuM8VAapE4rjnttHuKBuoEtap",
  "key25": "3V3k6k2eTiumCzbiXUGSLiNSgd6Uzuug7rykogbuTArF8awuggr1sPxy2iHXoy2K2Js3op9HigETbS1QBan5yxAZ",
  "key26": "748Hc587dHrydBzjRt6j9oxYfVBVvDv7s6eP9GtDq4tTyjMuX1ksnGfguSnNgbRExjTsVNKZH97YNzvAgtFLReH"
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
