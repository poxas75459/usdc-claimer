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
    "SN7j6NaiXtjiTBSs45ZwkwTiQpadNqeyjzc9L9T1GVvMi9rCM1aXp12BqULjfTkbTwcE37pZEKYrx5rrTA76T43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gC14Mk6EhgmtDtXL3wnZubE6X9J2KBviCcKvzo9wNWfTPcoywBnPtyCnq3WDaj8uMrxAS1rDB2GMr76kbsXcYK7",
  "key1": "gJsZqZeUHgQbaT8y98ogiFsSWayLjPwzKTpJSiEPfqvWUgBfBqTkCPnzd7bYB5igogGUeBioZ7BeDV8nXMcRSQs",
  "key2": "5S3KuMymyTjkRfoNNzAEHfwyjKyMFhgLE3ttLdGHED7u4PEe2pTPG6oDWrEPbAa9shYNatVyKDB3rpR5ARg5TB4h",
  "key3": "4WmSCMbjMqt64JXzqPMWKq6kHqiLLX6gfkZxvcwLjuJzsZUfJzdEryMDr3x46yCZgWLWosfQBnd17GyTGUGpzP4e",
  "key4": "57JVnFJ3JNa8eH8yAG3xNdn79Wz5hgepvQt8P8YWRapLgqqgNeRjcvj3CEthw2W3Pq5aXp8YKKBhHQDZ8gDc5auZ",
  "key5": "5jXVTJE7Pu2AmYszXfqJLRK1P8CJ31BwwHcXLMcoF8E8YmLBShNdRKhS9bASPAyWBwJ7sBmyYBxvPXPXveTBoA1U",
  "key6": "34ACuPa5hMSkumnWRNyibQgivazAR2saNq8oNcsNXvzRxPMgwchjKdtspkp7eM51wS9kkmHBmDwu7rbaJoxFsDNt",
  "key7": "5isxoFUQEjox1XuEERQ1vxiC7wXgNXp5yurXdhPCqGHf5jPrLkzCcRYve8Udr6zkVrwLjtfWhDBxqGGYrjsfhnW",
  "key8": "2BBPMDCiQiNowFkZhb2MNEJNuc6x5zQizhn9az9ustmFQJVJGUe5QDPv2EfAcbhf5Hy3JJHLBRGWNrDcnWKJGSEs",
  "key9": "3fcfYrTBPNWkauUAPVLX3rQRegabuUPP5WjRYTF2M9Q4dMEce3ArLoEu7nwY1DfKW7mGL6ME7Mj1hRtZmqiG7Xad",
  "key10": "36YWKjkdkSgwkGoAjyi7qh55gqtmnLjdQrrWKCR4wKuCnxVGc7DqibW5kJMTJH3NeNkhYvGtDWtuMibZ948xm4qS",
  "key11": "suHsegtjKcJZrzAdgkeDxTuiRocmTyDYq91Vo6wF1Zst3rYoXZDHTo3DoWDFXB3E3FfCmZLCQRAZjNbpBLSc7zU",
  "key12": "5jbQygQSBKKChdZ9drQWcf7qZELox69nGk6qxbpr2hYmdNeaJMamc665s3phR9qgKeWDVxxorfAxrTZdx9Uu8Uq6",
  "key13": "avGk7shE1ARYr24S6tJWswYwqBXDavQrZ1PvyYJBMk8Y3fZT9q3ETDVQcq9iVAA3mYqyNDgKtZwcM6rmeaoiACR",
  "key14": "27P2vu8t8fsDtVcB7UxiJ5N5jmBHz4unPwyP3UbNAbKKjgzbdX6bk1B3uP2Xm1RvREgqKGSDGcExyTbtBTN2ML2K",
  "key15": "3cWQsT3WRVkvmqGMJYVEETZx2ACexsmKWLH3DT5xkKY6dBbxmKZJeq8PjydRY2KL5RpEyLY43yRz2LhcqiPxgFMv",
  "key16": "VYi1qmp76fzJwhYvUkVX66Fd7nDMA219HCvBmY4eiGphVPEyj6DzoTwZmw8paPp14AS6yAC9bWtJ3AxhFeTyFFn",
  "key17": "67MQg74pgkDxoCRFAvTjdEk9eXZqEn2WanR4ioskeqdmR1om7LdFF7DoWrhD8U3j94QgiUKoAe9TDV8mcJ1EGuXu",
  "key18": "3aqzU5y91jSG37BhzNMt5vnjgAtvn2w4vQRS3Gvo3qztcoNV3VjqeppHnW4okKLcpB8vDWMPWmFo1EBH7fpdDQMz",
  "key19": "4o127xc5WvScaQFA5SLJZj2TrATFCwSrD3YEBN9YGW4DDvmdc5uMCKg9iAMunrkSYvkUH5N4529HkXwjaiS5h5F8",
  "key20": "2dueeSh2d78DA9untmQz7QqXwR2nbyB2rLidFVsqnX44GzEFhPwzbwoBiSSgkxR7ZSopXM8TSLPzofkVHu5FnSMx",
  "key21": "48BPVT4WsUggG96N7TPgbUUWukqnjx52KCmMXnsYG1DQ33GEXctFXCHwnUW5rw37T1L2P5zvVmRFarj8NXbwH8iz",
  "key22": "32VU4Nh4rVZ3rAGywd8L2T9N21VYjkAd7Vg2wnWCw2sVNHJabqWtFW7u19HgADzZitgfeS3V5D6BcHN9cBFqB3ca",
  "key23": "KQM4sdUmJwyTXf1vjkn6hG8idtNyjKh6tHpcEjGw13Gg4FtfY6PVLYB9uPv2r46NxthqvYs9tzGCEYgje3rtUef",
  "key24": "4JU9YUXV1KBwNrQNeH44zzjLsLMoqsa4WHFdWjBtN5eTNd3FSjWDiPy3MvQMYk5M84wtchCQcVcqoPsLCtwSohHG",
  "key25": "4jTV3XZ6BDaZM9dRKY18TzBPnAZUpjYK3Hn8CphFnkYpLss5tFZQhrUSF7JxCj6Unjg9AqZhKYG4TstAKxgN1jRn",
  "key26": "qWcHFfQXLBKNqJX7RA8NQqrCnYeCnRNA9NS7JHUkGEfxTGenybbZ8XBpVkxfTGEsmNc9DX1CQ8LSAHzcVGJLXxZ",
  "key27": "5T1o5t6Lak1doRESQ642yqfULAuvhaGSiJRCMe3CBKyfqrpA4ru7o1z6HLsHdRMsfARoWxSd27Gi1KghFMTe9Eu",
  "key28": "4TkaYHA49MjndM5tFEAzvU9nYKbBvhPnmzWsRoWArMo7qLpDrKHJuSt6kN6TawxTte9rrUxtuiiMfTNHnJbqmCBY",
  "key29": "21XQnYhVdCsVmE1qVE1gQW8oFoGL59bKkjftYaJAVFao3QeESYxYpWWBXAET8S9M4ak8pytDmsKn5N3uF2yyemr9",
  "key30": "4bzKyJcrGgBhPbpn75JzUwpp89qAr19JkkpuCpmUGpKnSmHTG4rUYuyjaEXx2BJ63T23WhhmqQjUUrwsVuEfj8Wz",
  "key31": "3CBK2wvG8wDJiZ5fn5KF9N6jrcjseiBLKcU53yPcMvgRG4fSgXfiFtENUua8d1MFfMKRmXNPMxJKTXMyC4g6FxkN",
  "key32": "XU37jJAQj34PyS25c9DLgXoXPhFCFM3gH4jMi2eJGGExn9LDjKD8eW6GdxUpGaQAFvbkTLWu2yiiuNKySPjiqh3",
  "key33": "4h9NyYufyZwcC7WoiFrxueD3MyrhzWw6ty1p6MjgKsGX72rfadUJYDk3WLhdnC4ZkdA5uWE63FiWuQVShagAbxmr",
  "key34": "3sSiu4hQuoBwNZkLEcqRG9TxbDcppxNagzuFczBeuzJKZzQioNNYnJh8TdNNdiALiU5ZtbQtVAkEdpzZsiFTnspa",
  "key35": "MmBDm2UcnY1aADa3ZbPLa79nCt9XpRrafAEPuRSPWSf4y8suP48HSnMj89J2sG4WQp4WWbpFRTDwP529aHbMEyv",
  "key36": "CwXcX9pWPwAbxHVNj7CsToGyXysnwukRucL9jGYBf8DP4TTXaSHVofkt4KEnaZ4WuUK1HxHEgCGPPx4Z63Fa8kt",
  "key37": "4BFjkH3j2Vo3sGFuFyAG8V26nBwZamYFN2NGjxoxZcshFRKW5LEy8f8LdcybvhXoQ77FZtNni8EHmDfKXBVSKpws",
  "key38": "22cP3dLiooME5sAsxW9EBjo8UB8HA3DtnUgzHqDJ3FoFAXvKY4xS8AHxfFWEVrBQc8ix7eH5MpCMFL3jHAYXbDM5",
  "key39": "3XHWuN8eWxnjfaNxpcnERKMrneTU9haJwcH6n5iM1bidknqYrtqTPpzh1YdZx4Y1878LHC1k53bSSAJqcMcX4hoz",
  "key40": "24grUdYaKxPmkXbHx1YRaEWG2iynFYsW3WiF1c5eNsov2gRV7QqnEJSgp4BJ1MM5BFfv4wWzVoZbBuQXk1zwVspb",
  "key41": "2Ynr6pG5hKAN11WTrA2BLXSrMRx2w6iy6CGmQ2qAH5RZGvbGevQh2uwJB9G6FJnpHfedPe7hiD9aFsEr9a5RpFvg",
  "key42": "4iAn1kmrF5EbHJ8ZK268hAjbCxFxCZUnhkU6bd4PvqF32NGQ6QZgaGPwKcqejhvJ7t9LLE1iGwE8mRrxTyubPisp",
  "key43": "xrCCZHS3kiKQYARFQFfz6NRPBwb45QRhpWtcVE9rdgGQNkeXD2ecpgACRcTdTBYjBitQYRmemQsyqaGBDq9hn8X",
  "key44": "UBWWAPmPCZkdSkgYdBNM7ovTWiKqFeqvMPSTKF5btwBxYFih3amcAiEq7TwALFA1Kf4X9Kxd8MxbiQQNomVZNKi"
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
