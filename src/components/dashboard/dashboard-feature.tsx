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
    "3iDPQngsHgNUWrL1ZzVDgyLNHG6LXiLoCTjxzsiAa477wsXTZn9SYdPmQYXb4XuEskko2skGjaK8AxYeoYURda3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmYeavyC9BrujBubNDjazmKqnSSv3JKba1tLAqdbrXv6ChDkWYckEAWeEiHKnGUDBB1MU5nLJtDvrt23EkeDbuh",
  "key1": "5iKch9rnMLTLsespq89tCi2sHv49rRNmFzKwLYpFs2d29dDmZWrP6D4pMYJq8BP4xkAHT3UpSBLDzbHg6Q6MvxZf",
  "key2": "42s5kz51MKUcDi83DDD6Ahc82aKWhY2PmLVfFihVtGgEZXBD333LRyQBFX8iEWnssLKo8oXsNRtqqcvaSjE3ACmw",
  "key3": "4fxu5hk2BX1ehoipgfMSccAk34BqysXVQRe86WZDPbofA7YaUuKLapcHuZthUG94fzeMyf2yrcoYgMSY6kWzWAbb",
  "key4": "4oNv2uW6DzconL7dQQkBZvhRh3D5Xx4WMfUsakwWbPePLksG1vePub2HUi1X6NrUT9jSYVU6aZxTcMFpySwfwtt7",
  "key5": "gwDeyyDekri8VRzNKBoMZztKUfTPi2xxXHUFBDDDvUGajb6yZLKgSDq3ZSmMVDUtSW6Na2JZTE6AnTx6hqMwr3k",
  "key6": "g66pApGqrx8RXPYY5dSgFrRSji7hQomT8BNJCGy9q7a6wDd7evNx7EG9qsSoaws6JXjP8moX818vwVsLwaGpmDX",
  "key7": "3EJX4D5sgkkSva3JT1mA2FeoztU4ZDZxgMjgvLUkLNzVQ3gawbJ1g5moaCxVTbFQLc3uz24LtCB7aTXBn9YdUJXW",
  "key8": "4aWAgoSkSAWtq8EaWnwCQjrW8cpStwbtWTpqUysba73vAR3PvyHhJFQPgN33DdKusHLsWL3uvhwtyw7YrrYcWixM",
  "key9": "X7PEqSgQbztoAAPEm5qjfVYcuEdUm9XvccPFqDQLqaxLQmMHrEwuChmEHE6dXU5FqVLakSSaWMSJREChy4ZbNMK",
  "key10": "2Ahft7vuXW25TRjAwraoQ3b6h2WxGiWQu5x9jHvPys9NWHkoqNUnaYeQVmWkVgEyZUKNzFsa5DYLUaGeg5Zkvm3q",
  "key11": "awdGWMJ23L9rZZqwbsRXs86X1qd4xYn1u7jVgiGHiZoorb4PJko3CFKL11yQkk8so4oEXDQci4YruceDiWSLFk3",
  "key12": "25GPP2BbBZrSLVdSwgjkehpaq22xzjSDBgnkuNzzjsKaEZGkpDbdQJP5kPc8KKGUm5p1GPhFNoRZX5opX7kTJmkG",
  "key13": "3myv7ZHzCp49uqxvhEpJGNiScF7um9FhDT8mNEGznd2ZTF3F4G7rnWR311ALdSipLw3Pad9Loz51mPcWwuvSkcHT",
  "key14": "poBHwar3zTCC4QVGEB17XjmxCgc359AwqwhJMrxwv5NcZNaCnwKvXM1NVGbsYS4mDfZHKYun2UDGMUXyFC2BPJp",
  "key15": "4r8ea8JgQT6ANVEyA4Vt8rNbnjEdoa6xMFjW6B3kJtv2tD1AUhpef1FXTXQE4uM2N77LwW17JvTfW1ALxrPU9TnD",
  "key16": "5KeUTCU3gqi71xf83A7jM5S8TewS7WqAohVPDutR9UqskuFi5VNS7vqr3QhuhtFoX2bgUXES2ZfoxJG9zd8PqYmE",
  "key17": "4d87ttA1ai8z6XP4uirC1CF1KTjWdHvhHnAKogpyURvA1dvmKQD518o5VBQgKm8njf4NFXfKhAA7wbMX8EN5cRs2",
  "key18": "5ZhmmRFEtF5VmDGawgHBQDia3W2sFREgvY1iRgBMpDxYWfU6Huc446e3FUKS5WgX5WMeKq4Qj2XDS6iQiRS8cp2h",
  "key19": "5VkKz4VhTSCXZo8Te1HWzYW7oWF4xyJA3JZsPr1D3v2dMms8xVSUK8GznYGCQQZ7eHAhVSiQH4vRq5ScQyfcW9Ac",
  "key20": "4q4cU3beM7cDQVfpif9d3btAfjDBFs8JL8LtUtGDdBUF64Pj9eJw59JER1qHHdy9yb1GW6mkHhVV6avRLoLEnMzA",
  "key21": "3AjdbqyfEtWi7oS2yC6VaNpm5vXZRs5nHxEsjpyT2GgcwqdBWojTDqXc6bMxnDBPRirD77VawE4GsMRGkdhRgnbv",
  "key22": "3kRywdmxMW1HaYcHjtPoE2Y4DDswjhq5q5kL4Hu5rpFxyjwMo5oYfH9fAnMYco28MpSrA7W3hT2uxF9PJDiFPKn7",
  "key23": "3hiSVPcjju8jczQNWJBzbaxVFrnSeZnAcgDBuRUyGn49k8N1MqWdEJqw5pYWHuntUcAXctp5433mG7Q6BtLDbTm5",
  "key24": "2sBi3poWZbEQtn7yxCfiQpaL2xWo3HhHtVVKFupkfcxAVobSZ3W4JM7TyNJDcg4BzZ8TJb26ipGotGZekHENnDv6",
  "key25": "5L6m7tqof6rFSrn2e7q4rGV3F3stDav4CzN888rxtV1zfCbiUEBLf9uSVJ2ixZMP7uRK7Ddz5XSutcnWsgJJenEx",
  "key26": "5wESgwNfgbHJo3NzADTcBdYhMzr2F6KcTEx5VaCiS9YD9462DmFMuwUqGxZ6CcwJ5hgfgoxvygyohRG1Shxk9C54",
  "key27": "26sEuWFMB5HaG9JTFsK5BL3ugwFeJ1MqwEjqZCd3zdN2FQsK962CXH9KHPDTjbaE1aURgSHbbGYayioQA3jn3P2E",
  "key28": "5PCMC5Fj1pw1je8WNhbeLkyKPLxx4nSpiGZHrXsMa181Y64dC4m3AzZrns9691wyo2LR7NEHpY7k1xpmNE5MSnBA",
  "key29": "3yh9fHYHu9jzm8o8YuuHMEnDUVXGcq6w5XvrtUvf7vFdXvGr7qnVjQQW32UhxfMdA67hMKafXw2jJvJYbATCAwvn",
  "key30": "c2X6sQX6rb4N5Ys9bp7qL9nAED7fFWxknBwicAf2JefjCgNMLh4bjx5CCE5xmu8hjG4R2RJMSFaXntGNbaFoEJJ",
  "key31": "Uk5fjV4FcERBXZT7uFywrNLoyZKU5Hf4KTkcM4vvVaVuUGDHwMMrCpmVzKtfuFsh52cSthzabnNoiEpNnfhsmhu",
  "key32": "4z8SFrWRL6NDDEGSNC1NX9FKrJEbJPxGAeQGRm5Mw8iyxfKUfXjR26HyLDv5Rb4sHTEUfhQ2DFpVpjiTMhjQkhds",
  "key33": "4jRrWYaR2kGTeGrBcKigAcT2aWu9DGAjJyc1eXFVDMtLCwYrmEq1r7nRMdQiGJvH3HBXUXb3azjCfyRjHeLingwe",
  "key34": "2upNRUTipJD7rKRG8rq6zW92Lnv69w3cdysQUknSMFnabR8hfXS3LBS9mMr2kxAsnMYU4LJCUK6MzMSRLNf7v4vr",
  "key35": "5Ca6rGdWByPLEYtScD8yZ4a5hf97uyLzdcAbvQQLtT2AkfU5rZBuxhjWAtPUsoMYSQZDkqdFhBfPebF24rmTBfDD",
  "key36": "4GcJ57VhV6HttLjhLM6fiHaT5CzUVgUso2qFQUADiXEhsHwWqquVduSRJ891FfehdbUGE4ARPWiXd53G73TSiKmz"
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
