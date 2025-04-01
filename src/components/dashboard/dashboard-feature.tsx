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
    "4oM4dR4fXy6hzuDhh97jkBrSkUcMyiRpaNZ2vH3iM2PU2FrYY5EF3qSNqiQeWSqytGuvcLrYLFtUsHX6nioc9DDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KN53TEstrfApJKHp3ijBWV3bNBCXbtRJc9RSuRYzTAih1q3Yxrh8iinkJVAqCkYZrJrb2WTUjbyhfQW7WeBkUtN",
  "key1": "5aAMiz3JHFRs7CaXrmCsExsLuCL2HUiN2YYmQ78Xz8LsUBR1xqdRq6QdLfbkFJA9L2PVUr3Dwcc9DqHbRDaJCF4p",
  "key2": "RquynSEP9FNwJmG9KNX7GpLwatUNJqhhhTdeCFr7Q53AT3dsodXnCB4CDkbcXnCH5ghehdg9qqvspCCQuhQPCCP",
  "key3": "zx9R5M3qg3juq3CKpV7eRT3K21CFrtNKr1jaVvqCPxCNkDpPFHXFnecUka6CznYvhRQ1M5ycv9aa5HWiFczEMCA",
  "key4": "svznkQZNoZfKVp6QHJSbwX6x1yUg7gLnxRYmu4YBT2JugChHbhXgS4VMSYNnFpPnbB9Vggyu29tynU26NWRqJfR",
  "key5": "38ga1CvcioqyepF7npxWUs1NmitaKd3gCQqj813iWx1Nh7MkKHrLG6T1ra2fbRYUyoDGrW45ejVn6uMUs9dXjs2R",
  "key6": "2gwmj1q5bF9kQxV5T3sKXhfAh2dEBBW1KPHQ3ZrC9MLG6d5eZGUH4DXNJH7D8Cfiseh1ZG13aZM2RcwttK6y6Hx7",
  "key7": "5Z7fgpD8wrqjhVXoCDw7FKN7ksrRrt61D1LehBnu9zLa1XKsXU2y5qiM61z4GWg7Sw35Jv1v7DiHp9xU6Rwcrpbd",
  "key8": "D3zGvuLg1wPBtY6L64kso7oF5tedJ5o8ca8vFdgKBjHtnafZxr1HLezUruxGruKa5imcNAoou5BWc1eK6PNN19r",
  "key9": "4TwzXpzR1TXaCbrxToHauUTkcc6VPi4TkhK2yVZkxjPz7x7ZMPbQ9JUEMtCb5DApwQwqN4e2JZwcmVBtDYBi44EK",
  "key10": "2h8t9t3Z7rDPPB7jTZUSaWfvE8AkYptNGQM45aNjRYMZyuVpCpjtotwZqf23difHqaZY8VgpxQySc6SZSVS2znZW",
  "key11": "5DH6eJCKBY71vNwywBy3YQ42H6fvb2UEVVNKNdW17TY3VRGsAo3CKhBMNQz8PrGFCAEdUPcYEjNH8nroGTQiRLp3",
  "key12": "EcuYm7vikHsnvVbhg7w8E1y6gQkNxgQTVzTJYQanDMChSaLyJFZtJP7Az1VwEs8w4VnTk86aJGkNVq8tcJQMzHq",
  "key13": "4MFjaw1pKrSgdJ8dH5qJjMTsDFxpARxjUXgFc3agwNGdBwDDRCspRWNaRtnAihuKpkMTUPxwtPGr8NUpC2puiV8Z",
  "key14": "u3KrYd6qjTYrkUTJM7UJ9YB3DHqyh4yfxhsx94mnYddoJSfAgGjyor3Cefoc9MgE2KcayAFgpn8vDDdEabURj8C",
  "key15": "3X46iiFdsKkaxzaLfTidvaJoofubJccfiuuTVEoa2nCDp1VwKBULVRDqNqDRMv7fCEHyua3Zc3aid6FUFu5PWQow",
  "key16": "41SwkKQsT1dK36yd9UBKTBnsHNtTzwnq3kKwQBtWd38pgg4fpNqjiXxgbJoowkUQX79wJhsU3GNs5BH68UidaWfP",
  "key17": "3Fe3qp3rcWVkGHpzEEN4SFJKM1Qtf7dHUidLKQcyk2j8H4CospTSDRXkZaQPtWpExvgJnxLtPoxh3zc6nimRCZXa",
  "key18": "5bux13eYJT1VQ2Fj4X12cZEDJ2oPUbMKpPz1V3dRqmQ8Zh6aqjXvmjJPZx2PiEUi2Ax5XfubvoXyXJRpbegjaWNK",
  "key19": "5YCFv6oxW8xJ31A3fBAKvAVR5Q8Jss4yqFmhhkyMTxtS8kHKvbnhDaVqe6tQvLYVUwJuj41XGWbJUjEUTjg2AWbL",
  "key20": "63xRMTdWd8CtDH57bEJLVMYjRK6DY193L8oQLFkZLqf6GfiL8UXqmL38F5CdQuyUe9sgRDXZYYRo79bgE4Pnww2V",
  "key21": "2f77TqGCdPRbTxcKMZEHWDvs8wrEds38GRwGMBBXAQjVAJPAKY2VQD7gPvNieNVBcbAfbCco8Riwzw7t7Me1Buqz",
  "key22": "5DdDqAdRoSbEntAc1wDJ2M1cjMPRAxopCya68329EkZSPkc3mnVshpMFqBLjzzHbrsYXFtrTdoG8nKv5mvdXHtEo",
  "key23": "4rEb3nU9j3KedZppSFJa9cTdipPab2Qv1smC8dM8oRJU2uqsyn9Wo7VHqYqwDWwasixQs42mf4ZdxhEWuAjzQBU8",
  "key24": "26UviQiUKfhQbXE7qkWuc4ys2A1pQRqiRLojaQDHsLCLWLGiTJ8iCErpnnZyRnX6gTFtB7WPgUaaDMWQ2iXud5GY",
  "key25": "3Kgjkx9L8V46HkUJH98K7bEfj7gnyc7FSABDvhci93JfYxzfMsokSZvTaUfUdkQ4sBYCf23e2axQLvuLa1kBCB8u",
  "key26": "2xjJXK3T5yFYZK7DfP1tsGsTKRsYYMv1hrD2kFAS7oNg9vgASMtvuxx88KpHsPXVQDkgG3PNShEy7jyxPdEsf6hU",
  "key27": "4byh74M9nBw3EDks4yXbYpNYEWgmPc41bWbM3MVdo83TQgQBjLauixeHExPd42cTNjrCebH6hezLt8BVMEYecU74",
  "key28": "4NF1CgxkzGxExh2sdZ8jQyNmWp9CzzXiVcpNbAdWDCUihSdASEc9y4xSbCJqaJxzZLJNb1iXBTVVxopmAEixPSkH",
  "key29": "3HzaSTzUT4TFWbrx7shnPycibZUSkSz3Xpv7Fu5ogA9tNBWF2zbNwWsiQ9nTJQnUKWCoGd4eJmoDmhGbFP2hdwmx",
  "key30": "2az8ihZEGYj7Rgo7RLPoxmrdWRu3ReJgP4oygNPx2mToE44QTFPoJT2fFQRjrQgXEoPGH21TvhNbpok4WsQYRLjA",
  "key31": "5DPmMzFbAeppFjmsU7zD5fdeq6sAVNXzLgjaedKKYFZifUVxN9kT9S5G7TTCpUHYPjghUMjCKcsupeArzgWRCo2J",
  "key32": "PbWfciJQMH26yTKAqYEYrHzkx753xW17ywCG1biMPQkwub3U2Xw1niXYNg3U2NiZQ6GmqTB8wekiWUGzEuudeNc",
  "key33": "vjNDjSNzPPASzC2dZEgmhNKMGRVSQ48KzEkD3JGzAwM6Y2AGyXwwGMuzBctiRhH65TNGcPVwfHpbY7XQs3oP7Zz",
  "key34": "4vQ7kEpNaLNC6RSNWy7qBFMSvdAbKnm6WxRmWAgCDcb53J7K8xVjG8F4jywni9pgKfhx3iNEZ3EcxCfvE8BRko4o",
  "key35": "3CAb3VRrsLceLMaoWkhwe24mmg27yzmmwziHWU7j5L5JUsr3XWgqH5ixvLW5F6S7HXBr24qTNzofyk7DdSb5GGTh",
  "key36": "2Js1BNN6wKBdymR6UUw4Rz41n6UcGBCbwZPxVrLNLBFsxQzcQS96ZbWJfuvVNU1ZbAuJ8NkeNpurCMkMYLuZEVX4",
  "key37": "2XPFcxJuqvWS396bz6W9z7CVXzSDurSwXa9YDS9tSGRpzcUadjjS35DZMUXXthZH83RRD1hMoaZonJSQ2gSKBgFe",
  "key38": "4g9xuR2DJuMoJkKPfGnisrKTJBy2iQRPZRTSSm4t4Sf6U461iZT5GqTZszXUed5JYnEgHaX1zxnrmAhXJY7pc4mV",
  "key39": "3WBVWTuKkFGMKzTnr8CNKMraRL6bzWNFseKHYsQ6rVJoRjzMoXLZaQ8zCWFiWaY22RnirAL6aDHBkMfvu2MTnD5M",
  "key40": "5aC79Ntdy69uhFhnLbU1h25XDtfyYEt2PQMh4GWmEjbRCzUrA2r8M6czZcMWfXWjnffTrH5doQhTFTrUbirD9iDc",
  "key41": "31swajCiTTqAcqeWZuVZXZiQmjcbmY54KkKsQCZFmh2vb9mVtNNcd7wfJYfSP5Cu7QRUsqk7B5imCgY1Moggsx6h",
  "key42": "5QewacHjBRRtx1zhpZhRf6GFLT4encQZkHXS8wT61TABqnQbBwhVr7zfAeRNeWR974nEXDhctuLF15buDnRhVYUY",
  "key43": "4jdBH5RT5VeVkeniZyAbuMNAhApXkrPxrPscxeV346YvNdL4yBwEzJsdEfsUwYH7B4Y1fidERR1pM785nUugSs9u"
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
