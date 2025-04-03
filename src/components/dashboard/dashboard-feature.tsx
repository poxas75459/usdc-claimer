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
    "45ZDYfUBRWNyuHJP5T66KQ4n79YXt4PZDYhsp9sMCVxsXuFTQHY4XghhbktEwq9s1jGR9Syec5LQKKy6nnXhkywT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JsoiYqPCBWW8CmJcUT3Kz4dSPPjevW3avWCiCXA6Ju332zj7XH6Hu6P7p4BUcPfD54EjLpeoRhmp2RXSSv13W53",
  "key1": "5N1LfoyWj2NXWCbSwhgcBxC712GhzFGstsMktDyWAG1R3fZETy19eHBAauoZmg2bc8SRGJkrgaoSnh9vT27BCvRN",
  "key2": "5qt4GkRoiQgKh16546iAY5eFn93NXMax8CCnkmRahQbNEfSyVeVZXcni6ckQa2BjxrngQ5cCDnzhuANhH5wa77X2",
  "key3": "zmRQYyxYrE87tKecz6KdVDW6EKc3yzhXGfoFTYAKN85mkJN3BSEvkbWLWh4EAHXE3rKEgjR9vCPrEDT9nB7TC5z",
  "key4": "5zRHjGbXSL41z2Y76GMrGkCUpQ3WwPuAj1mHd36VLvh6Uh9kAbL62P41Spo1tb7LCDj9CGmSEw1V76DTFwZJv66d",
  "key5": "jjpccfsS5K7fpH34rPnvs2Q8wHCvVFv3Ye77RXgKX97tfNdfddh45StmhGC5hPwiq3si6jZjm8L1LCsC3XTjgm9",
  "key6": "5Jy1WHcuciGmubcD5WVwCVxZCGsNru8jDBqiRjvDVxBDtdWpGm1GS6beaZSFUiFBrvKts9QGTpwmCirrjezq6Uaz",
  "key7": "2Jo1zy6w4MYDQYwqAVdz7T6zN7Ga13EMQzN6jsihFnk3Wq41QahkEpHG65tNCYKGA7x9HZJvPenEAzrFMbujBP5m",
  "key8": "2kKCU9FgvNzbUuHta7KNBSQGJXCSv8z4Y5ZE2QobHyWJDiKardDt37BYxPAGNkfUua8gsCcKVHN9HxZRnuU8gVXv",
  "key9": "5vw89a29TNWSLxY7PFMjZJX9bwQTyBSLfekqsrfATE34YDWPgbQ4KdUrFdEaFgxj5xpXtb7bRWebNcLmbznraovR",
  "key10": "2spauyohW3WX298zZ8qmWgaR8wetoS9vGVAd9G4LXYCfJ6PqeZWxAjoQcDgTLXFbbE3r1NbRNsEBFPy1nYpBHjw2",
  "key11": "2AE52WxAoEwNcvkLRL48yp3ukivXz5t1DZ9LWD57jUGJFPaXdd4BEM4kSJKdevzJcs8Woou9GN2U8agmjccAcP8d",
  "key12": "myDfATwVx288gUJYoaXwroTiFajUubrX9q5zVBQnjbz6ZwAsWGwS7kaAoAww2kh5vkJL7UybvrUQEwyVThmNVyH",
  "key13": "4V8a7XV9QgnXQyDisV6tmc7ed7HeGCRQCfV1natxpEeNrww2zRX4g4xYMyq1da5db73uFxYs8hfM4zc4tJZC5bXx",
  "key14": "4CzoR2fEceG4r8Am9DbzyZzzEvYz9uenVKYf5kJEyTSNNq2vEZQpdC68j1FTwfPbAie3HMyJ2utHDHN5YzSPvpJd",
  "key15": "2EzgoZqGb6M3JCn3cWFoXR2npeXbnZvCeBShDixvQ1ifTdh5CTrVK394XqXfrhVCwFgwV9quKnfruv2XvJhXpZ8Q",
  "key16": "5yfYiFzdVC8nyJbWcEYxzCjPTsEtBjUUaefQwdrLmnx6odhix5RVf5gu6aMmhNk6wKT4pK5v5AhVLoGCXag9o8T5",
  "key17": "AgVtDZspqPcm9iqhUCjtYGFnuwD4Nx9UAY24oK2uh6aVnigMYYgA5jh2sx5z3Hnz1M4hRSMhZQLYp8ZfciEENyG",
  "key18": "3JpcmNt27pgXvEy4Y1qHbSrKm76D8vn61DWdKyXJi4FJqsSXSYYfFxqWzJ63fH16HzXfBF3cuVLjjCZ5cCjyQUwY",
  "key19": "5jikhjzL1NWV8k7LPREhnnf1pgez8tz92dP3CnihYXabwrtymVphLMFEXjNumUWRwViKxwseiM8fWAafdjxoJkNo",
  "key20": "3GZLah64twqCLY2ymnrMgWJh1Qq9ASkUSRA5sTc5abqp5K4vcSaCwKUnEWZt6RMpfNkssuDfRuKhwWPuYahdXeHx",
  "key21": "yGNEDc9iZGDLjFsgma61R1tVv6e9FgK6geosQ1N73C9HCroYHkPbRGbA17F8StUgAUbjm9ExwmwYvnAuYRscLCo",
  "key22": "4WNWqQcoffEfrRwAD23wtdxcEdvdVC6sh7cwDZ7jsKh244TkPqcXRFZ1z5tL5arFMd5z2FvkGqCsAayqxpai1B6F",
  "key23": "3VPY8rC4EYBUqANrDoFFaezNokrhfLJ3Kx3T5SMV8pKR7P2NyjEwiwSr1LpEFJXuFecucWBiFuztH3mLmKoQ8SPo",
  "key24": "26KhkzqkKh6FZkespro3GbkLKWbBjiH8wKUnreBU1jcXDxqXT5GGuBKSytFPFn65K2tdK1acYX7QB5ugnP6cQfA7",
  "key25": "5f7RqiLVvVTHKGZQH84QqwmtZcZAkcwFd8GdZtkXExqLkCBbyhut7fNYpDrM1Y3unn2Y9m2j9ZdGHHfwPfAksEtm",
  "key26": "44WmHisQmvE4tPrJs16dmXNpL3q8MrdAm9V6K9CC2H1b1EKowSqQbugUaFehXB67kQ4GEvxeVushjmsTVPMmgSoe"
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
