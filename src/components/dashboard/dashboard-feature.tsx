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
    "4eEzQpQ1koCmNCNnYbaDmEafYESGndDAC3ytwcRqrUzrTkvz1tEMerDc21dAg1oTZ22tc2jaTUxyb7KwiNT8m2NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4akmKi3Zht46d5Qo7cm4xt3FZwqFhAAx9u2YxKEnt5AHjXuehH6dEfLwdHyp7zdrUyJCFHYUoF5A1iu2cjTc1mzR",
  "key1": "4pQnKpFXkrzewM5m9rxVpUpQnw39bE258grrYNw9yy5XNwaDgjwpDeiyUcKAsrtQPtLKHo73nAMTBYErcCofWhiW",
  "key2": "51BBRjXcfAPJGX6Vv9wnq3iw3Drtwf7hMThWBaUyQNccQ9EtFmrJeDwqPVpxsXubpuThXksbxZm8xuVzhpVK6SZ1",
  "key3": "jfTnoAMqWpRs94c8GEAi9dm1wpbQhAgFw44ivnNH9bCX9KdLBHsTV65mFykTtKKcZ43wRUYhzEhduzrWcTNok1v",
  "key4": "5nhz9hXExemg6TdmVphDRKwGW4vsunc2MmG6kaoNWrVdsvPoCpoUq99tcwbNcoKfiqaNuZ31j1tgkR8rFaTgKaTe",
  "key5": "2azAspMeyLJmq7yZNRPssN1Vnjw2Dv2eaQSd3hV5soFvMwNbrVvmsiyq4vbTKnzt9yxn7zuWCr6eSruQECmBvsqA",
  "key6": "pjrQB7srFRVDsNVXtwscNvRGakCu5fG8fct4X1ue51M4DJPxwAqa9AFz3aUtTABf5uW9NZDcN95vi9qoAz5kvLX",
  "key7": "TQCwEhAND613LXzeGD8UZStRBYVzuaUiTCWK1Cz9pU2khR9EBABFGtcyYi7s5TPR6YMFzWwLyiGmgNTs67T9YQt",
  "key8": "4HuUiBJR4i3egQkAMzTn3TpYofrmHfkNk1WZPQKxjszGEh6gNeHsCFZHJ1x9ZCiVQwurZcWv1crbzkin6RFLrRq3",
  "key9": "364hRwGfkFhfj5fF27PKTff5k7o7axGec8mdfyUySajCUhr3KASdyBfS1sL8fprRV6hqBNUsgvFYdaAbtiHY9T4H",
  "key10": "Jy1iNhQWCSYRFdfqKAqKQMyU28n1Rr9YdFJ6GGauUxUhhpyTLeMFS1JLGMYC9UpxCDN6HVeUeimGkF7vcsF4xbN",
  "key11": "4hxzJrfExweYSNYv5LRq1d49YcuxheKUvSNDUFjMWNXagw5c8xsm5SdsWQuR5oga1beawpUFom1cnUEAszS5pjJj",
  "key12": "3WgHnmW275F9wf7NAEPTd7SSK3xHUu7eu4KjjLRi2BRnbt4gQR6CFbUd8gZmKNRkysuFqAFweYGwYPFtzPwytAvS",
  "key13": "45oD3rGYxsRsxyZeqQvsBwVqBYafcWDezo2rd8o9AfJz5FjKUURpCn6CRtVXwKZwgJRW8Xi9sYnqiBzUAxtvmiiL",
  "key14": "3Y2nEc7JE7r1np9f2bDd14jDM5T6Uoq2vG5xnYS5cWvR1ZGcBvqu1UtuEFjAnxXkA2Jxu97kCnCTCRGGQY6gts4x",
  "key15": "KMYwgrB9VahhZmffHB2whQNQHEUxZs6fRh1zHPn9rFyvYExXb8sAtWEZPpcTophdtDxsi1E2SqzwZF2aRkqYNpr",
  "key16": "2sTMrddZqhdAKJtzHeLJyfjpRrXprRo7ccVYxXo8eRkPVVdH2gHbyTjqLNe6ugB78zgKiouiky6KDhXPV8qnpAzU",
  "key17": "3bP5qBz78WUti8Ai1iQcsRmPrk11pe4Y7WmiRjq1aucxttUqwVvXchCc4v5CZT72gkTgNSEtvVyJkVxN4rGdRtJ8",
  "key18": "2J4eHcmBrchhdSYrURM63UkMgoKEt9FQX6pXEx9JevMdTyL8q8oGynYTaC7pEYgU6wCmDdf67yT7CQsu8EY17g2M",
  "key19": "WLUcVdx1sKNocLs38yPTtaq5hqpR7GpiDWro1YGaxYYxxGF9t7ZbgjcJG2vFePwVQrb9UdsBFa8dmjebQooSer9",
  "key20": "5heqRmSKWa9S6Rv4EZH6TQ1GFcBSFJyqUH5Bo5bvoaWukabbg8jPEchgybPRLPt2FLkisVLeVatw6bUggZcLqX4P",
  "key21": "43A8K52XHAVq7NVUKzJVXYe1fj4QqNK8iGAHiqChcRXTHgNL7AqjXWPfLcwt5cU1AhB7DZHve7otxKwmAfo4jwp5",
  "key22": "24uGw9Qd8HyMtWZGjZqgnei1ywTvAFRa8MV8oYFnWmtPnkKkp3AciXcsUadLTMnyFLwDfoXHQwKgLzsdGfUTJRHd",
  "key23": "32fjZajpv87oDEKjVgGFAWxENJwssm9vm5gEXBZ2RhEk89bdjFEZTVmPWRBnk2NsL53DxSCevw3fikxUb1jNzCfh",
  "key24": "2d4d8VtuTajzUu3LMyRpnesHq9JB8AmtVBb2ioH2vFJ5a5DsqnG49ZyF1gHgffu1k9nkDSbuHFqk9LtbZpowi5yQ",
  "key25": "4yvWpffVktbbyXY1aPND65B2t63dyuhApSQWZRa5Qsu4dxWqgALCrRtCmStXm1YddhyeVrrgpQycpyC2EHHSX4YF",
  "key26": "5w4S3AVRcVucZC9mxAg5Ez6Y9GkRYCrsYxbCZTvA8a9JHuXXpg1oSE7BPUGga5WjNdZaWK6DTZEQkRuvXD6HLwHq",
  "key27": "4u1jGc75yzChqA24uo8gfdKop5QH9i7QxaiAoufL47j28f68bZE8td6NgktkFD2j4BXAobasccv6XRS5qRbSeMJ9",
  "key28": "2TpsJmme4H9GbMSDyaBr4Uqp9CmH2rUCxpDj8UTg6VmLjyCwsfhpALbSuTQSET7B688U1zMQa5npHeoiUeA7A9pY",
  "key29": "2u5JasWfwb9vxo7GtvwQykHcWMNrFBqf71X3d3xv5zgZizRUdmTfRCHfGYBCo9QCgHpdhmNN3S7ZTcpDYz8pVTbz",
  "key30": "4trPEb7KY4N8YnsahCJvwn7153GhDaUC7HSXf8XSM7r5DWTSatktSUxZPtMRY9KA8eKwdc8MfEPzBjuNcQvAUa6",
  "key31": "24rUZZZPy4G4aBrrcwpS1ebdnm22kEtSRh1bHhtK8za3LbcM54aUyh236UoZLUkzbUPwN93r7Hrett23uY6XCQo6",
  "key32": "3DC3zdqHtYpkbXL2QavFCsay4USvx35ETGTdh49ZxEdy2rJ1xZkzd652tciQbM98D4Hj4QZ372J6AMLJuhVxCAqE"
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
