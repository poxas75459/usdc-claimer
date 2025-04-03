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
    "67USwTbb7L3b36XrfNmukJYKYdcKFDTnXm3MSKr9yezEM7knTNi15t7cR4xrzbdtLxhoDzLqak2YvniCg3m7wv3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NCYfjdzApYEszBZbKacFWhVQQArF9LPdxnqyP3NE2gimRZ93fFtcfikn5QbJsbwsa9vKEnenrhaEeSNqQmQ5Nm6",
  "key1": "8EyEKpVswxTvw87MnqSmtQKp4SqZ1Lp1aXGvKyEGaudAFJ8UYeH8TnW9ob46xKsyQMqcvvaVXGxWJicUbvNQ2uR",
  "key2": "2fcHGWZD1LKKEsMZyQRJcrCwyZ62E8vZ1GokY3Wg9inJyYhiQKpQzd3ouK8XVjoRzkDDzgzEEi39d7MKodVuXT53",
  "key3": "5PngSGU25tg9712fUTzATn9ofg1XaqXk3nZiH8P9pfAeNkxCK4Xp7SbQQYYKqfxmFdBLsFBYUona3xae6oitRHAN",
  "key4": "LRnM8h8nteTv5JTc512WXa57jsyFnwdEvxuhU3kG4HwWXHTRWUz2mE8gWiSnKWWEWnKZ4eDZ2BAtoCajtQCuVeC",
  "key5": "nWM4dP4NK42x6WRcm3aGtNB4TDPXSr5fo5QUunKrwyzXuwq7evngBemEwxu8pbrso8uhYNvw2PujMyqpwERCq4k",
  "key6": "2rDELxQXibwXMoAfPEHrdLkS8R587SMhYxKSmp3f9ebasLZnWbcbmGg2Uww5yXEXKtwf87ms95kYzGCCoYQsME1G",
  "key7": "3KucDvhJAZ7ynYDTtwjqUhLPubf9oVVLYtGL1pEBsqDvTLB1G918D7FBFQUrWRi4XoHvR71VfEHw7GFEbnRHY3cA",
  "key8": "2bvXc7rYyqpS8SfqLZNums5H56HVscLAejzvRmhkKTStfZfovTGwewaSUX2hh3gBVyd59bH52kMXPqUCJWivwiwm",
  "key9": "Ybk1hS6Pjacdn882xqPhnWyupCKPe7gpReRfEaZALKn7XHzUC8oc3tPGUxVqDUf42ZDnYbs2N39ArgtiJXC3Tt1",
  "key10": "5duXEFXCZZTLEteWih8iU1Fk2Gsq31GtH3tzHvxSWhTSjBDMXnbP2HVGme64PKGCQi3yxidxCcoEJWRhdWhqrDZR",
  "key11": "2Jb888cyiVo6WCvq7kLjb2M9o7FbDHfh92XC8PW6LpF9F4jevRMQXvfUfKWfSNvbCEsnEfjL3wrxLPhti3VAGUPK",
  "key12": "3Y2KvuQzPH32prFXTNiS91snTvRQQrH6DJL86D8JRfZjXCMVyzv8Qxx4S6w1ji7ym6ThpR5Hm45QiwcdYwBwWV3u",
  "key13": "4CGWMkiztoGXUoCrLHMvTpJ3pQqfttk9E5xyHvWvRiee7Lgbba75r7r7Z7ezTGg9H8qJ7hxjwrVGNSB2jU6nNgDc",
  "key14": "4CC9gTYgAmw5zKbGAGoyMgqzHJHD7ipwe7xZUUH85mgaBUq7oQPccfPhZz2kVC15wCwpyaxaKbFzyVoUqMnCg3Q4",
  "key15": "5xuTPtia4cbm59z4vGMRhhNdGaqqCyxkfydAypC98JC9dxww3RaSABxZyzp8KT5kJrT5ywgjFm48bS4pHukfFd2u",
  "key16": "37CWxGcGjknchBCceNKfUku2f73ur9VoDpAknnDbD8ui1kswXUF6G8z6ZLGk3KnvgoXNYYmvtkHYYU1iZ1TJwHvt",
  "key17": "3Q4X4gctbj3ArKLMczMBwKeZHSZxCoC6z5iLyruHoYv2UmpNhUpeVcXF6X2RnqzfFzjV5P1YwtRGRrbzcpsSsq3Y",
  "key18": "ipcmxUzKHqwpLbJQdyRMkFMYS26uss3G5jsDzeZHLCNt9fSWgue6E4qRwmxL7cvZsxQmnV9LvgXeYssLSEyDd29",
  "key19": "3NmJWc7nBRzZqScnAZQbpr2mDwRms6whWZipjhg9cdeatRvchgEsRBCddGnNsZipD4dL8DzN5xe9tAtvDi8Gi1b1",
  "key20": "5jm1BFpntXjDBpZA9AuL2sAnmta6dpMaWnRJJ3UdGv6aXWoQhnPdRB523THMWet1kJVxhV2mDEdQfw2miVA1ZdUs",
  "key21": "2R7TWLDNUPq3X24uJMsDyy9nTtExQYB7FWqLYm2kTzQ6X1tVxPAfFV2CwcAMUb27Dfqu12k9Y6WCSp2SXprqzdUG",
  "key22": "9UDLNRouYhmaa7ZhyzXbTbLXctixsy7SMfNf7pdu3Xar4R6SyrYiDfM4xhHzTW39d1vLsavwLYF5EjK7VdSYtBh",
  "key23": "54APSNCBJ6rxCDgagDMwFFvcDUfLQwXEyJYVCab6cB1gCXokrUgGY4gZJaxJ6YSXVHbsWVHCS5rT8pUkZK4MH4jW",
  "key24": "3LJGpN2FU8Z17vbiX7pF5txCeccBDSKzt4L8WZDxpeHnHDfacvzC8GTUCf6TFM3ZbL959csu47ShNEDbKYL16MwH",
  "key25": "2WvRXSf5hutVsyMewoTKfJsFjGbvZRrdgVnAGgfgLBfmQuQ64K9MsvsY7yAyEdScH7gm7BFe7cZoC1huMyYLpxyG",
  "key26": "4uDF3xTp1EGvAuk9khMaeFTJ4MnT1A9ZUJ4LPab5Uv9fsH6j9CiDhSX3Rax4QFG9oXSeKXwL8j4fUzANzWgzeTgx",
  "key27": "64xQNkmwX5mHp39B354HcVnVuL3nPaBTJaRTzWjrH6jm6Rtt1h1D98cvbJKBUgj7qNGbTCY7sMvEj6o3KbRCKv2G",
  "key28": "3tMWoi4EP6xXfMsv8S6up2unXXAFcvrXgHjCVWJjG36535k5fiJvttr5Kg4YsWKxRdk7PZxWz6xPdY9JB4UVqUKz",
  "key29": "1o6A9WCP7RAJ9AjUz8YKcGJFJ1DW6iHducKPa2MP1XhnV3Hud45uNTWBx9K2C3zvnEQn2CCaC8VByAmY2mxVXQn",
  "key30": "5eajrBmw1tdoJrkaRJsSUV53uaMdfHczCPCGBEKxDnxAinZv4zrw4DRhYUuWdKzUv8GjKSxbPsscHUfMLLzu8kVe",
  "key31": "2cMjS3AVpqcTVBmRaBHMfRo3YHiyDdCNUeDaFgoUBMigNuncSXmhaMUaokT7EK5NBVU7xTL6DKYEAqtZgbMX6KUz",
  "key32": "eHCHUZRwudiiG22Mwu5NzqMjnDKqwodd6PZGeqVmE7RcXtEgDSU3GGT197eaonMuDwJquFm7iEUge7dcHoDVA5J",
  "key33": "gxryGNPAex2MpuFsyAYsdC5zKDpsYccMyZFEYYjFkcnbYzotP7KiH39PVrsqHE6n5o9jFzfKtTJKdgJsGTRjKMh",
  "key34": "sjRTEjU5GWB7CZjAFCvZpudQQworSQUtL5FySjikUD55HC2nkjjBsBdCSnKYB53qQvrfics2fFRFbYnvXiE6T59",
  "key35": "39P82NGPbARMQo8LXPPLP9RGSVSPiY69FFdAAwbVPPWLyUMNHELtZWsykJB8kGSCco1E3resQNnMTNMJo92wymjc",
  "key36": "5A7eCe7Pz5EeHkiZppxMBq1NiKpH2tQEC9cuEusuQf33brD98sUL7CfKiRsKN3FSoURy9pTkvXfdKSygRnNbqFFT",
  "key37": "2vzy47iUXqnPkqkaCFaKxbNcTQ4mhuY5HW3cwk6hVkJRtg9bAX9YwKx1ffLh365P6qjgkzogmqSmPcfY3BnaK38c"
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
