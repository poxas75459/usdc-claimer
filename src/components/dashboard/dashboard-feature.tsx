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
    "4KRCqzjXYbmJdpQEARV6Qgh6XQv51o9t2MxiyJctGu3vgmcrk1S32SaUAoDByCczv7XtcV2p2FXR9qZpKPjUQ9rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22y9g8p1s2h4KFMzNGFihVECVxgkoQ8i59dYDoWjK8edg8NVQm3EjrpjVwsj4BZEZU4reqgnj1NfEa6vJdfn8QXJ",
  "key1": "eWYR6iNR76RzdgCYkbPesQwhifKMt8PoPcQTAqmCiM1CvQDPGKeUvVfcW5RbXk7gz9H87ogsghw5eWMZVonP5jx",
  "key2": "4B2WXq21HQsv5nEgsnuWreQGQbx5hCTkHHec5wunMDL5th1NrYff9qpVSR9mKQw3xZ4un3ZwjPBop21evCFnC8Vm",
  "key3": "5QfXMjYmdWoCxVaDe7ecVSMsUJ5jSTgrK9PCMegXchUHYSHvc8ZgKXcnZCZzUTj5k4xiNiHf6H7RpYJyrfxyWcWY",
  "key4": "5F8MMTmFt2KT1bYPsXsrUPWLJXBj5vL9cxzcEFQrQry6hFBwEbJm3ypkU4vxvKo3Po8pBT2vyWbHtSSTq5iTTgDR",
  "key5": "4DhH4kBFiRENUh8TdFNTSBY3ewrXpJ7qk34QcCwytbhCmopVav3oizRqFzuHxYKknupfWWsVhtKqw9UdoxCa6Rb5",
  "key6": "34N6gBd99rfTwiBDnCbZewEE3W7D5JuS3y6VatbtknJ4d7FiY37QnNC8YAQd5qBkXedEV9XZVt7kmM9pYJCX8o8d",
  "key7": "5MbycXMTRnpksJVdma5TnHZ7FehPGmw3sNF2oxvw6Gex1vSYWRozj2gqFMmDKZpF1bdMz7oFeYr47jd7YeFXnPBz",
  "key8": "rt38R4zhpVTsq5sDRJFBsuUwQ2wpT96tx5uhjNWTjnstAkYoh9t66Gb9UvrPh5XF661baLWycRc5rzugkEtytkW",
  "key9": "2peMVtbNMReq8sKKamu2mkqqMp7fWi23hzkpLLpTGEUsLk5RnCqnKk72jbpDUatfVjWHPT34mxJhzpJPfuNVqwyx",
  "key10": "2epbqAKQDUhqqV5XeDscRoQVh34N3FgyM23m4e9f3soMB8coCDXy7mRrwhgGbvd2WyBp1W7GeZs51FEQsDG1Cjah",
  "key11": "57K8uCLamT2vMShkUqhBEb37H8D2TKzABSoVgrDVZscWM7wKwissh7JS1v2HaXGchjNKKYBfy44sm4tAeMfEpKtn",
  "key12": "RkxrdtDNRiS95Qd8CGoSM67ukjrt2GrGuNCPBKFdzX6wXyqJWbCTsCxt63bJPT77oNcxGQbne7kj6GchgbymN6J",
  "key13": "vpkL7LNMaedc8M1CcSvJcEZKvipRSYy3saNgB7JTP2LkGiaPsjDKCmtXDZX5yJbzJbpJx7iH4kPjZ4aTFKZMPpn",
  "key14": "3kgMGN9Xw54RYGmw687VAP65ZzhifW5phUewPAGxGnYyHDSuB8SAJNRftLiyEz2cMwYg8A8JQPizmc7vTKJRB52U",
  "key15": "449s5eQ7W6xZZJ3gPHMpJ92ee3af5RHFvu9PU9iiRqH7RwoSCrT8eUBpMvsSy2sPxLb6zXV9oAehJZWnCmigaf69",
  "key16": "4H5kzSbHBNVNV4rhxqiH9A3JwUTXDihBN7kQKK6zSriUy99cXA81nLuaUyYmZgNeL9VspX2sV2QqyVbA1exEbiDX",
  "key17": "44eucYx5hVNLpGKG1UEJ1LPw6NVgLsEzT2jC7ikH3d7vhqkEtqBz37FCayXFeDvtSZNpsqfbeVwB5ymJigtMuJFk",
  "key18": "5fDiSArwmREtfboa8nfCgiW1QdftgkrpMV8wkssqJkTPQnkozgqXaqxzQyoRCWbVyemP5SteCiNrvHXqhdoebTWp",
  "key19": "5MHugD8oyUM4yxJ1qWueA3rVhEZ6c5sZNuneBg5PVPuh7zoXx4ekdfitcn1U15tKwmUx7Huc6gSfh6yacMVu9LyS",
  "key20": "3JRvNTgN5kfyugYNyKXvEzBwmMyFk1mDUJQnS8iyX9mK1J86k9RbmH6UiA592BtBYyRTwgK9XeXyhpLTGQ7a3tpw",
  "key21": "5NYpPwk4Gsb7oeanQo1W79pCSaYYPUfiShYfpGpCXtUuk2LoUGCSKdRy1S1AS1YpU1bqRH7kUDchykryCV373cJG",
  "key22": "3NR9fdvhi578axw6P82xTTk8Eg61mEkHTMGwqT51mUbzGQwYiDfGqQrtfiKvyomHrCJfkffYq449UXkdXZsAbgDQ",
  "key23": "4jbgSTtvrvqGK5At97CVxRdnfEvitDJxULNRico2qVVb4tJHtUBLk42nY7tgVhMJGpvJwvRqGHoYxRr7Czr7oFH9",
  "key24": "4pu8JGvaXaYiwBuy4dBAB5fBwZBrsHjNiKCNWbwr7AFJfEjJhqxHgYotbU6NCsLC7s2qmPaQALF483v7vEAYXHuW",
  "key25": "2zh2WrjduR7MTtovtvArFtrjVmvV7EJVZuSx2j4iXGBhnZ21nLvDJGdgZqWSTA4mLhziPkJ1MM5nSmKNRjfGibLT",
  "key26": "3WAjYtmriXLVQjYe7Ad2UMjKXLRPcHEAc3J8Kh4JQmCiQTJ6dUaVGnPqspe4YueTsEBmPyyU3hAm8WAiqLLShmy9",
  "key27": "2jzozuWNGA7ZdCHinqhrvt6K3rZbDPTYLQ9XwxaZmKaGZdK4fSZwfsmpZDSH34r9QUMkLnUKa7d21Twj2YjuDjjz",
  "key28": "51XnCL7bo1HovvYM3CB7URx6GqQ9jXTgm1jj1FeTV4gfMGNzsJXMSYkiMRjbQt8o4EkyqZJAKAX7WDupD41msYCf",
  "key29": "YnJBNW8GwcTxdPyvcZQX7Rxebno6RjZBVaLWVUmzsHbai7cNFTmzCptu5GpNT39CvEyQQnWnX8RQE91cceC9KH5",
  "key30": "3cKUzRHi3jWAnADuAfk2mBxC24vZpYVsQoMNhPuAuvGFGvT72669VTkt8xVjqASAK1CAYxNyuKoyqXiMSK7BuRiw",
  "key31": "F7qs4sigtaSJpyAdHDqwh8Ub2Cf4dUUeSJ2jPHK6AazvsBi6fkGHhif1BBonVibG1DW6GzxibEScitU4HGUf65P",
  "key32": "2UDQeDS6iUovQEGdh3jNi5K66nVxc1NTUZ7JqSDmZxyYpdvJwECxfCyWWv8oMxjZgaeHmRGkRugWAzJnaEWtDcfL",
  "key33": "4NVkkEuxCbZYxw61sVpvJ7LGyPiEberbrRLmFKW2jiEdr8tszdEbw7A9b5s8Mi3jHddjjzPZqiSbKaWsj63KRCS7",
  "key34": "4RGXT69Ea2eC8XBzAwSXzebmMMmnURwZYyVaqJ6kdckTyRdeBkX3fNjsYPUHNdTjzmVDESu6YxdbhB54YMs3d7PB",
  "key35": "2H4tQr37HUD9wAUPfQFEjCCbQMQTK4VGktvNgGfQX2FCMoGDn3Px79YUjgiyMb9d7oaKWj6XeXFMtF4fr9nz6BNo",
  "key36": "3pas56V8XC1oZJzfRSCaBJv3eUY5GsL1XARAf7FG2jsM84SU3nn7VQbtGqmrFdZ9a5kXgK9GfwV8avuM2NPu7UVi"
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
