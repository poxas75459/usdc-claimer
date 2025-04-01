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
    "5y8npMLS5Mk1UtiP56JzxfRv59pAFsyYJfsvcHjPo4d9xQ9hudctaktFvzN65FqSZjLFPqYt4ZidmD9wSVrygbN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uYNvCaUNQfyhPxoagWSHG6y6ouR7RVX4hjbXBoGLbtxx5uBpApJBwDCHVv9abnv2yHmZqU9hG9Uq8xzxfwCNYH",
  "key1": "63T2qxp2E6jwLpw7sqCLRsvmJL4C5T3iyoXsbMUQGdkwPj7rKLU5iaQnedp92JzCazTqPkSLoXZSJxBZvNxPCDuU",
  "key2": "3ahQAbHGQDegRrUo3us6xqgnBHdH1mE93L6Grt6YRWah11L14GU7QjYwpmGHD4zXxDUK5jxK7DGZoEETyb9VAeGg",
  "key3": "2vwh6aiVCrMpD9pWAr4bv52kVjb7kv9USK2JPV1zu8twMz7raBadRPfPXVPK37XkUmHaEcsFkt9SMwtuYo78fs4h",
  "key4": "3F6weGdkgkyP2ie49H5NWv8qDqSW8KKKmQ8NZ433nE2rVga1QB8WsAYcTua27AgPJFfyYYMeABGfZLn5tbvyxgQg",
  "key5": "4KtA6rBvTsBvSthC3qFjUe5NhAUGr2QGeHVWLcAJyW67SJmheqPWmKxE5QhzkTWPGpAgUbm9FGWZUFdPwAXPiYpZ",
  "key6": "zXsEEWw4YGJvWSLThYFcx1QdJM9FzYskvZRG6QnUoM7FmxkmvkB9nzTg4t9CE5F1FM9T7CWrf8SRpZLzeRsdxfL",
  "key7": "5FMeiKigqBRZty7rbC1q673K1nNFbUKLTwJ56RdVAg6jzR78uBdF5CA5pu4sATga3pGSbv8vuunLtt8AWPVrKQtZ",
  "key8": "5vW2miYYmkQ49ftsea3JUdghCAGrvZzSe1PEwAZyEx4CdAzFRzt9shtMVPqdVB9vfLUx8fsnK3PK3gx9rbasSv6C",
  "key9": "5M3BvKZTG5zUTy9PEPRUuKF8UYqJ6PBcdQWnm6tvw7zxg2pyX57oTE5onGkCBBaTCnjS176xJVD9t4KTyjNRZypH",
  "key10": "z1Dccoq1vNhJHgny1fUAx9kAWiHS4gCorSPPdujc7kTt6xd9xFyBER8rAsc1B2Rph7HYkwkstKrKazq8KG6w4uG",
  "key11": "5DhEp6UhBZTfbLbv5Cpi6pAVYs4CSknWrNscM45eFiF6xuzGZ2MtPyjKinditxCQmioUJUJrECLi9A9goQVX4TFn",
  "key12": "xF9kdguFEFUPNiHhbNBJNmGZ66cpCH9eavEj1wh4P7qbxGw9jToAdmraDoZMMkeFivzeEHF9PAY22wQT523ZdUd",
  "key13": "3dbEcp1VhhBeeBDut88JH26Fjvf6VKYDpq9f4tpvoeAUkCeJxLqKTRg1fGHfZz35VkipHnfk9n5yM43F7aSB1vMR",
  "key14": "5et3QtEP8WSTFvhUbUnX5XvQpqt5Dy3Tv2CZb89tPff8S2hSdQ3VyfFT4nqHP4KeNNfWi88f4WGNFoNx2Pra1D8X",
  "key15": "3tsfANGjYPPXVBpr94714iZD2Nj5yvyHSatEpaC1mxW8A9bGt2tYX38m98qZNSht4PnR6hQLX5ipYf2VLX9jp9fx",
  "key16": "4XcLfAZcCPdWcLV78iPTGYANESPThF1StsWY1ZwVPPkBoTeh5GaFpeFr6NRTysUREFpnHKsD2Jr3fgo1Ci6iVNvL",
  "key17": "3gqiwc7NQZtpXRzk348bPHnBeX87QjbGUavwaTFyJU5Gh7X6xg8DpbDK4L8S8sWjgyJ8Jp8Q9mptksNaeyAQdKRg",
  "key18": "5ovpj8dJ5V3mNYKaDSj9bDgYVHfoX45M4TJqxqvnoLgjphyjLVnMwUqFEJ9WeWNoTY41VAQvR5KPXXAVdpURaWxb",
  "key19": "4ojWRqVdjRKCw8XcCEfDn6g1bAiRVmKDX82Bi4QajJ3rw3LNeKMyEjEw2RJSwR6oyMmWw77LbYZbdcxQSdVscNpL",
  "key20": "28uNcnvArtDVipgwcBLQ5VU4Bps1GcmVCSnEotuzQw1XtNRcQt3fG1vD7bvPyGYGXKD9LxWzzxtBquxgCYNTiPTW",
  "key21": "25gFfEFhN3qodFFbWxmRM12NVXc7F6EzPLioDsLfnT5WDbvBfq8QQfqkfAuo6P4KZFd5D2epgYkRsujQQ2XpDEtT",
  "key22": "3nVEA3KvM6HT16RH2x5K78NpF992nQVL64hC5bdA5oHhTc2cBdvesXZuLFaKyT6pxGBkSL8uZ51ejQ5ix1hzpR93",
  "key23": "bCCjCsHs43JwpVScXHrot9bng8h76y8DPQ1ZpsH2qRXcZcMUR641NuiPqVZx4GCuJPMv3Khg84x3qDUbknkGksu",
  "key24": "2Ek7gUJfAnQKhkkeYKQ83ZD4QGibT3vbhh9iaYgGSFECET8KRFmVQnPmXfAfSBYyvygb9pSKJZh8zDFKbN9oCCki",
  "key25": "4NfSx528BSq4UxnxWpwhJzP37BMWa4SPZffiwJetX6ZhPnATp5EGASMs9y9bY5TpKqh8TyqiwkJWnif5fXwgBZA9",
  "key26": "2mP6141LhBKaR5ha25mUBNRX7LmQ4kaDSauvnEng5yomGGAfL7fakZdEyMBjS26pRg3gX3KRPrQZLTpDLtyAmEwR",
  "key27": "3WBsvkoaAmS8K6VEvMAbrGaG22B7cZoT1rNSdEXsUicFmRWcXY38aaJxc34cPt1H8o4mnzU562yXqHFfy7kDwCHy",
  "key28": "5YWkYWnVjmiH4kACiwU8dJmGjhL4KHJmJyWpyoFzcuNsvKku2aLZHiaqUEmJD5z8kb94YAeaDjXwiVYWQ7RiwjTW",
  "key29": "5p3cxXe2JdU3uWuraDUTDePJP3CXakeJnioRMfsSqkPUZka6BC7Cigd3PhcxnQJ396kVnLJNRDnhhVrekXv7uYnX",
  "key30": "3ePS8wksTeTUdoAZmFdPg2Pei5cqGTq1pTw8wZuJVDMPW5tBzTcym8mfCYCaShH4454N4NcNP6PVSTzpPXu1zWq6",
  "key31": "5epC46YZNDh6QxUuU2kdg4NRq5HSmoBMzEJ42DEXdhY9kBe85UR92A63ojUkNBA9CL1yTkWLXnezz7YHVApHbG7B"
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
