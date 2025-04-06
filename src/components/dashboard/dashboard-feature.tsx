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
    "59uGPsBwJZ21am299uk8eDpTJHauRMRdDQVzeKgsp6W5UqEViX5WJEGBDtp7po8LBoFpx1qZ2PFjtMQP54GN1b8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fEb8TQzdcYMKS5Z7vX9xuDzD3xx9aDLW7ovL3Y6vV9BNnme8osn1z8jExQJyBQbEqY1mAFWKPMQMpmcv3M9Rwah",
  "key1": "5gLDj4W9jqnmrw6EmqHK9qp6fZ5tYgvQ4wF1DkfTrCNFZF3DLt1rSj8QVNVPzEqXEuwNWF9t8VKz4RMAY3TqQAXV",
  "key2": "H4dhVbv8csVpsX5PuBZZc3tG46wKGvoCDjyKQqbFP5ToAVxAEdBgVDeLVRuqxhFHL3a2XgVtM47Nygq6sJNPpMq",
  "key3": "5ZLSvyeATducPsuTuPe4LuQZaKPfqNpATdvqZMhtd4vmLq25aNLmtyEnGkQ7G7Fpo6cf3RYWzbXiFVf5fqDPYR9E",
  "key4": "5NUHHLX23BtRZysw1DiHidkuiMf4ofw3765vqJCbicNTUbSWKZxZXisnK5B8JaDVLdWpnAmUuSmZX2vyVon3z8Et",
  "key5": "3kd7Bo2JopD7f5sFTV7UGwgE3tvSvky3XU8mnc2zRKGSWnXMWDhF1DM5mBsk5W9JskpAQKzY9TxnYdNy2zY2h7Su",
  "key6": "MRxvFQq3udjkR9bf9duVDJJMjxGtC76dXkZWxdS6FLhCvjye4v64Uo9pB6hy2Y2B2BjYsk19AQYXNp5KibWqM75",
  "key7": "2o4BSjwGy5MXC3iMz9G1A1fTHShYT5y5QhxaYCvSsrzviducsxEwSPjJwgqhA7nrzTFUSk9RKGYCnhNUxF8AHH9n",
  "key8": "2iWh9c7WsrTj5bhtvsthJj6RcuSnxr6ihicnEkAH2BQfxjpbsiimWkEMxQSdxkZWLy9mVzoNscDdQndEqgt2bKuY",
  "key9": "4N1cD3hQnXdTgcJLHydLutjQQotj1Dd2TPMTFADtsDHULdvfbXKBxMY5Q5jC3sTkpcn5XA3zbHKc9G1mu8ed62tt",
  "key10": "QTGixEjgEg9j4ZsBp1sbe8QLDFD8EL4gXpo5AHrotg4jr568qHq4Vx2iUghWdEgngAitbzeaLwwq5fcSnAmiTe2",
  "key11": "28ChTCaXrYt8MSr1xfH5TjfZnm7ESENkT87iow7MHPjVjY6gcBMnQxTu3gzoA4nCHAR1d2qtpsyh2JwxXafN1G7T",
  "key12": "2gs59y3wmbAGioEUcA26kZSvThZXwPn2s7cErXi1iJejANERY68ab9H6FTF5G7TzRHUQr1MxoXxEFvKbsN4HpxvK",
  "key13": "5ii6BpXm2mhsMbxhd84yd2mAtCR2G6sZUsbphU31HsQWXLvDcrnuyMcWrZkm3UPejFtMaimJbDp2yckVR2SMnpfC",
  "key14": "5Cfw81JopEWZ2epqkhVczcZgZAx17YYzTH652e4Hv7a73Rt5btPwc56nncTDTPD2wBrMzbkfL6pSTKWYGmG1BaeC",
  "key15": "vGiDmkymU6u2qwjZJtpMnz1EevMhqR1g2rAy6MwJWjWu128tyw9Ti6dszZpVBjigmJtynuabfKwqDxWVVzzEs3P",
  "key16": "3exHkj41HnPXVwGcqcMKHFSn8fz73Khn5HRCioGjsAmdxu65j4Zr2SgnXQXWmNSdBqSEnD9rQ6F8WcUf9mM9rRad",
  "key17": "3mPjyj3advaFwFSRrqhJJrGBqbdxjptfeQ7QNtuNc6w6YrjHtxg1CwmuC6Q4Fx8jhcuKci8xBut7qJrxGxFe2rpA",
  "key18": "HCGL9YZbfxy2gn2pK9MibzHQaXE25PASSXRZNbU68iuG23hp1F12n4WfKJS5yN48QU24hexWwLoP1dKvLvW2uvr",
  "key19": "3qsmyk37n4YMygFrxU4xhkNRJX1429VDbKPgxEn4tKvQy3G9xpzPTDUSFep31XcfynSCFZPvgW3zbPHtkPysmUEu",
  "key20": "3dzf5wD5U2U2L8weKSWT9rNBeSqGtvMauR73hw77U2NV1cFU1Zv7q3szxvcWARTUyU3aLPghT1ActAXT8g8npKoz",
  "key21": "R4wio5scRhhwoEHEZcSioMQiehbQt2WwEWJzeVTpg63nxzHFm8N7gQo4sHswka2wMxUS8gDzyp48h74iXAh4pDN",
  "key22": "tAJy7qM3FJVJKjyBmUEebNamdDFfeSa81py2gc9bjdSLsMZJtpxhgGkJE8E5isFz3pggv3BGtLAM2zBVHUcD5D8",
  "key23": "JAiiDdv8df23181Sc1JzazncS9ncdDL4Q7UY7oT5F5j75BMgNryLKwQUYqvv1SeDwpshiGi8qNAtd75akwhLTsN",
  "key24": "5CUrv9XKxGVY7KiHCpdR27NxvCjPGNSvUHLBiBBDWLDutBV4KVZ2jqZKdbtKCgUXAZVQDLq98NwhiYV2idMQTR7v",
  "key25": "3K37KFJhPa2RU8MGbPsQdd1nbHheroZY2WgwLEccFJ937JLt2HHcCZkL3NkmyKX6nAgi7YTFMehBftdDzfFg7tf9",
  "key26": "5ArEW3tJWUYt8s8s3UzC9CenKuxBUtTVpgw8VY1hAoau1vuYtStNxxEh4nNmBQ19oFPvk31PE5Q4HpMFb4iCcWDF",
  "key27": "xsm3ar9wWGqoQXFQFCDcWBpzdqN21fnHiyTFPxsAv2j1PSeoyhnMdJP9njQx3du9NWtF5zSTrZbu9szxNXeTQsH",
  "key28": "3f8ZBa6PwohxwEQ5VLNPSRkZfowSyf7pNMmXLdNKwXs9aBoCAWCFTK2M2PtdgrfptcbMUfSYMHvhRpr4XU7pVrhh",
  "key29": "cDAimxra4Gpa8E6BG6o3aNfzcpm7ef1xbBR27aq83LPiZnX4GY3BsasMZBqW6HcXM7FLqk58j65mYnGVv3aPXXw",
  "key30": "5apSMjUyTYg1Uau5afS8U4WEzt98UKAHXR51XcfsMXiy9KJsDWBFmFfytHspxWoDhn8eH8dQXJn5MmcJwbgBty3k",
  "key31": "4sWTkq6xH49FBXJkuyDwHmxRe964s55Ax5MrX7RPRzojXUBUohc4NpNmYwBtebjeAtkVy9y724owJrN4854N89W",
  "key32": "2kkpVKLaSoT2k3JMMiTcPeriTjZNmR1Cisx1TJSCp5kNzLuTEuZ3G22V4VCBuQgCnKbkTCJdmVp7Amza966fH1fx",
  "key33": "34mYCZZdeB6d67a5pmQfYuAsgwsiCV6aAD2AFpbLVu27z4TTgY5QWtyNVQAZXhjhmK647CVtUsTanXzgo1n82dyv",
  "key34": "2FHMVZNs1RGJZ6zB1KFUbhvsxPTBTRfMXoN8kHnmQnWDWGJ6q79jBQk6ve3mo3rNCDH1PFQrQRPFMWGzHA5QrXm1",
  "key35": "5oa7k6yY2c7BiSB6jnqxdtMGbBDM238hxE2EvDkvPgJHKHAkQD5FabdRJoid216prBQBwBicDvycetWgpetAYPTT",
  "key36": "39nqJMnCEn6hr7oSJgoA5Rxf3QxGLTTQcQ54UGWQAsqGdTdA4JoBt9xWPMYxTEPUGgtyQKYMmUNFv6RWLBmJYXhL",
  "key37": "45ozcRjR7ZenGh8MkWq3PGLk2zvBCVLx3aAQBH2C9BBMReCQ5CnRAyfiLTDtwmYPm23dHZQq8BK4zv8uGQtBmpGL",
  "key38": "2tYsYtkBU2TbZ3ZB2a1UQ54kRYiUaKpa77s3Gf1mdUwHSNfDprQYDmXMbns2qSpCzmzXQ6nWCUKWHj7ZmQp3tRLS",
  "key39": "27TXBpN4mk8PW5KXp7CYj9KSi3AvpHWP5DsQLeSkTa3VeMpLUkJRMorqqqEtvQdv5CaXxWwqVWqa9RtJhPUxSRRk",
  "key40": "2ocjH9KPtSBt2RXq4bY2mHBweVu8TJKVET2roD22LC2d2JdtiadURNDY2RY2VE5L98mX1NaEa8P32BjP4dZW1bd1",
  "key41": "49KuRQAQx1xWYGXGKNE9SJjwnwcHbeGnAcPDbcgunJ33HK1t2RX66TK7CzFHrK2Hzz9h8ssspBnGMgLNummwYqnA",
  "key42": "whbyf5aTdwB3Covj9sUkFQxfbwBm1TqpD6hkkt5cw6Hr8rvbcw9gpwARgxya6URcKaLCNq8YqQRLzVbU7Mxqnwg",
  "key43": "3HJexEM9Xk4uZ2fS9KXg8bnCspBC3AbdpHqVnsT2zrCzSAmByvURgy9MQkmovzb2NzvnupdgQTopae8JLVAW1Ktr",
  "key44": "5yiaQ5KytzmD6EG2tiJwvTjLyKSaxSWB98uyH5APdevZWrAG3iRdFgE2EvfUbPiQYwvwsfNgEtkiHjeWCw2pK8mx",
  "key45": "5A1yKJfNNRWDwMfRW7eeKdy2GqELdSpuVpcDxkSFGS2w61Ldsv4EKvby3VaAu7sVAk9gcWFAnD8Fpmcd4sCGiFTj"
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
