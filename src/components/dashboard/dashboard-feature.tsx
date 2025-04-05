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
    "2uvSHCmAMwSG3WHMHfmn92WPBe3tj2ob9UWbE5NzVZc8KKnNbg7mAwS8mFZh3NMUCM6WfPa73zSxZHRS7h8mvkQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CS28Gb4WnL8gwsESWphMKy3hqHby97wE6CnLsmQVBxj1pKDNteiffBZXDDXoYDDViTVp9iwE1UjYTPeVajBX1Hp",
  "key1": "5Q25hy7vwrScAj1oYWQT7PgqBehREdt9nnRqkbXieMUBidEGyfrhG2ofdoDtm1P7PeqDN66boWRiPj5QkW7fx726",
  "key2": "5K2DkE5sM3PEjLnS69tFNJ6aFCphqRCTS9PYC7CfFJ3tUVCC211wg3R5yt8GiSuv79YW5W5MECGucEi1iowp186D",
  "key3": "5JDCvJeBgiPapCixDVpESBFCgwbPvhyP8niz6i4ea15tV7yDEgvAKraHd8jbKz1b1a5FzcDpKgq7TfcgDyv52on6",
  "key4": "27BoQm1k18NMRQpGTNMkvBKdbiC8SKyNkUwPL2fDvi2zXzjHKb8aS994xT9NLi5SjmvCmo5GzVERXtY3hfXUJ9Fb",
  "key5": "2dZdo1Z55VZjhhCMqVQFgqz6wxmyzuuW9C9DdmoTHkXekea9B3SWZgz1GTpmsJbFV6YYgRRnEGo67jNRtf4A875L",
  "key6": "2G9HkZFzTz6yysBnxDiy3gekkfzaMvNigFJNUjPbU5TEDFMHyXMXkJXqvHEouETGpoBQW8eWvu4tVSb8p9rhx512",
  "key7": "hYWjrauXwSP3y4zMHAmWFpJHf25NFk7SnqCPTSons9HHHv5XwHA2Pkv76k6Njt689D2GukJ1qMaWzcsjbKM4nry",
  "key8": "535xgSP1BgpRtarP8FDErvHMpMtGba5P34YgouLTBFFLs15pfTbkt1PBsedpqcCq8do3sUwHsm4i8ZCrnx3EpJrt",
  "key9": "22BRhpRhKQGA4LPYrXF6KUFfeaTR6eHw89Kgjd1R8qrj43Hn3nDNw8WzETbhXwXg9xqjPEgYUjoiMAhV9yN7uDy8",
  "key10": "417U1QqpcrZH6bTiTdEoXYCDFNAfMNhWXBxgSnbaspZLGUkLh5pUptxJiEe8u3SJc4ajvQxiKsCLGBgrHSJZXJV2",
  "key11": "359cwWLLaJJZcMNv36TtLcCdx2EMzCy8dRqj9Y5iDpXhnXZ3jhMGmCVLApR4Rfrs6ura68SJbkeBtjofJ9upsdcN",
  "key12": "2dwYyN3T71i3wPqzKdt195TQ5tfrm36zALZcKL2weFTLWZ5W88xZc1Xx55NdmG2QGBZTzMKyJkcHwxthGdvxA4WW",
  "key13": "51paSFrXGFUSgUNQ3TDhzwkZ44fpk7SHJVBY1ur8tjCSWqWVsRweDMfCwm8fvSkYGEb6ttmExFDpbZS168hkzdTh",
  "key14": "3d8gHpuzS6YfSoKYrhQy4LjsoYCG3w5NsQ5bk2d79JDK76wjVnYFKLHzLmy9vCY77Hyd6kGuEvTYwMpTYvaExe8R",
  "key15": "2bmVN9GPTQszqbFQDp4giuVniSpkY5tVFMk9RPDC75ivSngYdCzGa5P86s8emdB8TxzCgzboRTSyeNMNDgZHG88N",
  "key16": "2hsY7yBujsC5hY3ns7PJ7UjG6TouerNfuwUYmFtnFwUmDGhfUawkamuW7EL7frYRbj6N6uzwVypb7qJ1ZUV567R5",
  "key17": "2JdfmpiWg5gRcsugfuYboKJ1AicoVChGVUCvSo4gutLRfQDLyE7tnvJD229xAJy1zBaMMgjgjQYaGhZtHmb7ZnF4",
  "key18": "5ZyrJWNNxVweJ4acxLw6s55ddmXeHL1WDHKMcAN2KBdMEM6Dyhx5mTe2d5ZgpFL8bLsAQHXExYzcDUe7Uk4JYeCR",
  "key19": "2CpS3vvhXur6sKEvruuNS45zHbq67gmtNL1a7hbtyHX7uug3iNXKwe9QFbxxQtYs7EeG391TeVu4hEhYEVCCSeHV",
  "key20": "4yHEywTGj2yZ2fEUEsyaP8wXQqhasCRowxwSiw4fRqWHixjVfzD8gh4i1iPp6G9aPCi6wUJfN7HNtMPDMa48LJX3",
  "key21": "2goph8oC3sEz47DU6AwBF6qibtZ5FNNyKRynSMxpTtsDvnDRt2pqyVFm1Cp4bvPd7zSR91caWe38TqGxqANDM1xc",
  "key22": "5SboD3t6BtALAzFJW1PXntseFuz3cEMSBqsdx8j3ngU1T1wqFaHo2gwfi4CeuPSUJwbEA5g4cVhVVJNFxL6CWe3J",
  "key23": "29Ehe8ztXyWhD6Kec7i8aPSmvaCLTHSPxLbX3BaBLzhDwBS4nmkHrfK262BKvBxNT1DLNYLtuKdguvVDYKRNds1J",
  "key24": "Cck3Jtto6e1sTuyT5iKYtZZBBdWCt6Ax6djLyisrvuPuPAcPCUJkqvWzrvZg71EEUJakxkjsA5cLPxxZy8wxq7m",
  "key25": "67BKjXvKtsynxZrUV9dxymA51YqwVUGKeJLmT79ayvnUMyhASLWwPHzVxHAWzSNjrv5iJYvG6Qqaw3zzWvkrshK8",
  "key26": "3EeZPfmwfgtrRnX4tDav1hVZWYep5w9CjvP9jwfb9Kfhbe1nhc6vnyiC69uZkWv7qpVeKeeKyWtHf1V5pMPmzdXQ",
  "key27": "GhzD7HPXFMPxoKq91HMFuMEWoUSVyZodR5UWvm9MxQb3wbd8ydTm4bE9rZVixMeYqZQTLcMRfvX76YSj3QGPEf1",
  "key28": "2NJ4krKEiupFWqoFTyECHyU9TRhDiXwWPcaB4PUQTdgwNnfsuKLJpedau2KsyKSt8kiCV7i1r6tosKpiQfEKCi3R",
  "key29": "5vicyx88yYijKse6nWP624LJy8brVs9tEuJNmyV5vEDtokkbHUtUThXzc3i7TXSND5kGx8G95nTg41zosmWcV1LG",
  "key30": "4T2EJz5JNxJZW1VQLuaY4PfWS8BW8AtBRNUbpeVtkGjnYsczqBLPynHaxYE2MTKcogEmb6EqL7X71gvqedKV3QAF",
  "key31": "5a5EWLcTVUyvYi2BHcto1XMffEwqx9pXrUkiLJx4KYVWgBrFco8hN5nggUDVJiVefT1hickd7vzJwTFkh2ZCzgGK",
  "key32": "2ghdWJX6ry5H93BEWTixNd1axrsMhYSD8dv5v7JhxN3LhWTe2kdgiANpEpruVtwYj8zShDMBbcXQXGvas3QuUJp5",
  "key33": "5cYCPppRC9A33RxVof8J5HsEHY3ZZrdqiH14JXLQCjfATGv9AMd1owX2WzQvnAgoNXoCiWi4ztZBQPv1gkMzpYjm",
  "key34": "4NAEfRG9p7y1j5ezA1hwRLgkzWUGpNZQvCmfSY75Nqo49thiMcrTDeNg4uLZ9oGMJfTZt7DDXkJSm2RpnpzugfcV",
  "key35": "5FxVrCoQBZc3J8Q5Gx1t1TBvhhCi1sji5Ck4B9wPKwV8ZZgqYeUmdNW9qkcW2PAehVRfCDBU2QimFU8rM5tTYpuR",
  "key36": "2XZ1rRAG7nfsxBRy1X4wAcNKyM7dNe6umhE4y3PMTYDQghenbiermQYxKBXWhGSxC6YNmqTkEWg7QuYHcEUkXzAP",
  "key37": "3L4QAr1P32y7myJ65AvAj6BBk7SGW8WhVeZNcwMGhydtrpyGghsf37zQVdVZN354QgcWW4p6KKAELicwFjF1jXA5",
  "key38": "4aA71iefv4UspMEK9zyjxrRo3XqFKTenngmph9mnHG6U2QvwQpSZGbi5byscYdG3FqmhcUjzHDo3Y9XoJe5D4WFX",
  "key39": "4ZvjCctokvtEagjMDBwk1ME7uWRMjtPuvPXUfcRwmvAE1TMoYUj9hgi7K5ZXy8kAoQCbqZ2XA6Q1ApL2RV6wLwsg",
  "key40": "2R48kBEp1zuyKFYMj57FsuNZXzZhkDQJrYEL4CjyrYG17TQrU5e3K4Cqtad7ECYoZrJ2AMqVJ6Ro5HTRyPppbJQ7",
  "key41": "6grcmDcV5kYYiwSpwRGRFRxNbXY9EYQTZBD1S6yNQf64zG9eHQ3dRK2t6nL23Me5guhBAuF1qbmLT4CHK6Mks7P"
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
