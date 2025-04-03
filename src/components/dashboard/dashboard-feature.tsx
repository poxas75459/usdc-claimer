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
    "5qHKG9tLmdRSYi5DMB3CyB1HguJVCPTGqFZ6mgiu968kfxjdjYmQWHwEnVZar5t1KDLg4RkSgiT3QKNCVXGraMgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZDAykq923MRNurmfxZwaxRAzK7DBF6b84X6JY3ynRhg1VeUmkMumi6Qxekq7MrarTAtGWQogYc33QsAetT1jjaJ",
  "key1": "4rJBf4W7KtDn7LhvGRTcNWFzNrnMN2MSGJTaZkL861x2b4TQeMCJy2sHFNeVPvyS1HasPYSz4CBRaWkHoAMWESyo",
  "key2": "9uQEcFQsbCdLnRDNLotQTynTx7DMVD83xZpEixSUoxpSMqLXCiSTbr8XeUJ6oqaDGGHnG6PtWjrhKC5JxYCrRtg",
  "key3": "z6UAwCGqkUEa6md3FjxZ6z365G2vFcf7GdwjjQwe3PyzU38zNHWJcj3hEGzmvABxJV4HzBLf6XX36bCW9CCVZyL",
  "key4": "23JX1dyWMkeMH2zvd2CpLnWNf72p25iXEEKtENPvX4bWEZxX8kvecMEJeMrdon4NG9gsS1UGTf87KBZUvqucNH81",
  "key5": "3REkksVpmhUMvU6tCFCZxpewD7DpMxD8PiZsSoGxxAVuBsMCANsJkGWrMTbiqy7febR4NaNzzN3R2cb4gHYvuLyk",
  "key6": "UotQWzDWX9bYATZr6FK2bN6u94mtCvqLrjvbXoN2cbWPa4ZTYB6Uh2R2y2KjEDTtvQ5ezQssYFCk19xi4iWdMsT",
  "key7": "4bwdUe2twvFAk1YwJ3of2wFpx8GUQfBVFV3EZFJ9xmb8pYfqXxUey5NHD2AUmdQ2xzSoH8MVyAQpxYPcCcTcJepS",
  "key8": "5NsXxXx3NtVtzGq3PYvV8DRbgR2jHvau6onGB7VzWmWJCECSgX4VguiSZgS293yydqczprbUrJibTFXSmk9M1EPa",
  "key9": "3XETyUsG33MjEeQYq4dRp1Ga5Pat57VYZZD3BW7BxA74RcMVtYnxftboaLc4CjE4DiKCpyZH1xkiaH8W9jUwCS3j",
  "key10": "4qkbwhbU7nMi51wS3DAQKoe2zchULGhfhZGFf3cZVPUXUteQzgouT5NrWb77y7iMeHUuC2seH9APJqeWgeFqYHVx",
  "key11": "5oXEpbKYm3ex2EcpqSWZc3o2GVv7rjAroRhTHqgSuE632aQTidJqPtskT2YqMt7WpAPDx211EBcNxk7n5LNFbFRi",
  "key12": "5JAjWQ5QhTmFzmntvVPSv2iUhUVauCWXxYrtk5Fm8JcTSnmdS6Np6d6FqqaiGcA3pwU1Eherp2Q4hUEj1AhRf2pg",
  "key13": "38HHs5cxjr26rS5g7bMuSbFG4iLSZw8YyVoWEcn3ELVLwuaLPam4cJFAmzgyBsSbMi5ognHRGA9si4oERY3zALKe",
  "key14": "2xMQpMLZKZfu5uNjj3hor91rePmb2TdEyYPuFyBacb1Smgfz549ek1ztcx27be76uHBf4o1wBBKbbLQiRhsLWRRa",
  "key15": "difZs6LJ9hv6WHySEWLL4ELwyKGEkUQ5hvRxuzZWrowNYCJ5DrQvQzTW7J1oZ6LgDCWYCHT3tvgVSR4avZrQprQ",
  "key16": "LVZ7d8RnituGEVRGswnzz6RaYdFpX61jpXRuUfQaBGEnkQ3JFUZAdKUnRv7SmeDHd2yZE9weTCJdGoLh7AE7u4M",
  "key17": "23QjbPTERFyWBfb7TEQsTMACDUCRkJucdhFbVJp9po6N6LvAcK2TQUMxv3Wm9U7pUEexFJ36o9S3ae2BxYPEj5nY",
  "key18": "2dNw4S2VH6C8DXgJ94BhrRGLDYEs5Y7xYsGhCjP89enEm1suUJkCTUUHhfPZieobkDxRbKr1Xd4kYLwbechzmRfy",
  "key19": "JBJbC4WGbZdC7KcnhuwJ6k64bx5WRo233zRLmVwdHCRPRy6LL5mFvqv3S2d69X6ndasHfsKKXvFPUCwNrrJi1JM",
  "key20": "36Bn632UvcqsCN8NLURVMXwSpGb4jLhe8uW6BfmgijT6xdwa1ZgkQpW2wd7byvVtgURC6X5ygADJpXBcKYtYxuT6",
  "key21": "VdMj8pAn767qqexgnwHk4LNgu6zW6XPq6nb8BNqRxtybgugHJG12YjdfqVSKx3Aday62jQsyy5UoQg7cKqKRwnT",
  "key22": "5yb6H529KYTkaxx7LP6visz8mWxoVefFsSJyzR68A4CSyN4jc7QeSpsBWi94QJKiEEiQfbJnpCv4NxWpGpEiMQhH",
  "key23": "2D417bSNoyXGkKxzBsfEPzE5uZoJztZYUBgdtmqTBE5dRU9L41ktm6DQwMitDeHFs3iSYiHfUw4XUWfcaH3vviKW",
  "key24": "28SQmP14H8Zg2SZBQvzhvPPiQYRJdmUUaAqGUyRCsD3FLKtuSbzjR3PgnZDMrEEv8gcW2uYmwrqbTAhJzAvo2aGG",
  "key25": "4VxjqYfdQ1Ewst3cUFUmFjPhzQj2aiySUGaNMf9tFcjjn9zCrCDMC7wR2yVrksEV4GZS4MQzg1rtW48pcdQCNkPJ",
  "key26": "3TuHwWGF1xHPtkcAnpJPxD2q8i92mgoomdk8WZPfiVkM5sddLw5giBBDAQAd9DMppA1DuV2D6kfSakZ3xWvXrGdh",
  "key27": "4MWwQKn98S35b2F3pqWofuM3PcPd4WEQD9ymD4xCRx1owy43Qh8ESTbYzfdWhDWKtWNjyZsJ7fWssoF6mEkjagRU",
  "key28": "59BKVnHGAYcSqW42AnSHsCeToCrXGNAfYjv4o7iDFtG7QRPijdPNP9DKFG4rrC3MX35afFduvi12kRnYEvLJU5Rv",
  "key29": "47ky2pwvgjG5JGC6cH6Ltev74So9xampoNjCPMTYmdrad7r3BdbTNWYbGpDFDFfa6fQMxf1iAfREN4ehLUztB9uH",
  "key30": "5do2pvyS33FhosSfmbpv1Lvz6ogr5DJLTD72xFyRUaYk4BVX2bYAxzY5r2Ygau2C6K3hGjANKkuqssg4gBv9jKrv",
  "key31": "MbvMu6UUNS1xi9b3QGWL67iir24ExEUejbJnaNjTMx6MhnomekXwvEBH12fNG5NYL4oDGMxESPidZK7n2kGrxVh",
  "key32": "2DvBLb9q2TCXvnaiLW5vqipeQhQghFxBTUmDTxwNuSijPxS6AFFg1sHcpaikfWPtCYtPFcxs646wNUjW1sxftpa7",
  "key33": "4Qii9fWfcw5MjVJEGq1QSP5LHjmWFDxg3Yeg9yLigmHgFs1u6fCfbzwCyTa95EKWuixt8pzrtzVnQFjivC8TdjFh",
  "key34": "5zYy7B8t1fE7H6hbrt3vP5YKgMRKHeMKbrHdy4AQ8Zgyo8PJxfeys8VLwVTq6y9WpJQk5kF8VozZUm5DNm5wLx5B",
  "key35": "4gfBvkUjnmK74eqNeCBxERGuYp9FEYGxXLJpuidsShGayCNMpZMGFCVgQTKdrMtbcEEGMRGudxFkPTffDkVa4gg3",
  "key36": "5na4dCboAjP2p9RXVC813ojEFUp6dFiGhJzYfP9xquU7NPmkyuQdpgkD6WrHkYZetUgMFWr16CJBSkX2b1SfgDWp",
  "key37": "2B9BdDGPQM95JxSvvKpZ6wYjeSx7TNwmKDdXSv8i9sjQsm3zi9c94FyP9nFfUvTvFnT4sq8k76rH6Z3gP5ECpqfa",
  "key38": "5BqSqcv3wZGQ9UTBa4H96YyM9yGWAubDWkVRYmbAWt5Gvv7b4C5NfaBnzMcbnMiCcU5DnPi8Uu3YKgZTZMEC27MZ",
  "key39": "3Ar3323sUFx2fFCBAPd8EAWr7VAnxmwX4s68Rdf1yvXsP9aSJzHXwbbfU974ZYmK5EiLWjYnFuppzvHXYLg1cmCC",
  "key40": "2WDwo1qCtdCKGiDci8bTaYGKAXDrsC1ByhrpA7GWCuHfE4CjwU6zDiersM3ThNqrWbrUiCPE9BWx3CLq3RANetDe",
  "key41": "5GyYq8p9rB5pgdHJRMmkDjRQb6A8NzzGEyUgJXb4ZcKYVSeREKbZuT6nuMmkeDwzUnJ3E1HocNLeV3CJ4Rz5GWqb",
  "key42": "anYBT2ib4i3PjJ2nnrbiKjPBaNVSoLqfaqJPddSrtCowVjxjgrrqbzHiX73EDD8r9gXiYNefkpn2ZpPTwp1mUKM",
  "key43": "3GchuM58VGLQR8YFhEtzKRfWGn8jci1SzJeiiXh9DU9eZAHSvpVqDxFWPJmAarVWx6t8vXEQndT2mXq44kVRDjSG",
  "key44": "2kcfxPuLXZmpMjRTxTATGGhnsMV8y2kSDxAu2h9BTUVeYUPJzXkVY4eRJPYVXzJ8UXwJMsa9zkheYKyCeLBsQ2iG",
  "key45": "2RWzkdr1SdDRvsSeid2p7Pzw9TfGxMvpd5Gjfa1t7G1YvrnSfynHDVYekxx5oi5aeaJ1qJyF6Tx9aLvD7Jtmb78x",
  "key46": "VZNM6q3EiRrWwfq2B8wYDuaVtikWgsajK49gbwMdDYjGeWsy6XwQ65ztzFW5tFJMGLdD3192aVEPyForPhMiA2A"
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
