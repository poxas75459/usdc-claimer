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
    "5waAaZqU8F2TYz1UHKBXVNB9DEgGy8PFYr4nyd9PLy9g8sH1nujQRNpvzRa8s9eovixSfqotk6QNPXYzSSFqLuYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sPuJrrNm8ys4D4TPURmM2i9xixY1Ydj7DKnCVm4G9KSK2z3VBjw3t5KHvXkkQahopTMj322pRJfdv8FZqTSxQLj",
  "key1": "5TTRhQuV8yKniCZPXn8meJPUZdwQrTyuZPsiybTbUopH3pyRUz22CBLhp7LPsJSrt7z8dtq6qYSBUkwGyVhs4BcR",
  "key2": "32SFX7BZeyiUvs5fgxvXrfosWjZHnMUSoVCG95WMBwhs8NW55YW6x1PSFSYAYeUGzcLnoz2Z3VGNgxMbC65f9F2h",
  "key3": "BwqEBjz4tVETJfpna7UfZLDhCEsPLBkhG6addGsRq9pc8uU55ako54yUJVhc4zr6jCFJzCt3E9wUUdHwBYGPujH",
  "key4": "2MRvASQrP7jF2nhogZU2juKrEw2WwLURpYABz8MpBt6cRZi6zim5QckEgWisvNDsvm2bnVu2TpnSt9wuRTCKmhPT",
  "key5": "4WiQDcv3JaBaw9QfHetTYNMceKDgxb5tzzLzgdGtdHh5pTaxSpL37xwPy12ZQoYYeLuf1rEkMLVgYgPrmeKUdKp6",
  "key6": "5hH6BeSkkD8UE1q7jF6uYR8bbAznWKR2JETZGYs3Kg1xStXssTgfMrHqFiuWof1vVYfmvCWBLFc213ys8KD1o1TG",
  "key7": "59AnGtrZcfhhx77k59J9xaMedw6H7ZwgdpQSCeUWcLkJrDygdGhkJGD2nE1yMZKYS527z7dBRGTqFbQTfirU4pLn",
  "key8": "4obUUL2xDqLohmAcKs5xtKjzfoD6scRAhMiPmPfUkUj9J272vJKbSjuas8t9RczKH4mHk8LtdprWMAdK7P5zmmYc",
  "key9": "3xCynydfwh9bV1TdDoaSryJz91NuiUjmPBwcDxjnpvS936U7uavP5ojrPwi6XLWkuWymCdeSDGjXZgkSSfjGeGef",
  "key10": "59zw7VXJEDnFLLp5nZLUCT54AdL74MiPvbZJgLqjwzS2mbV8c6vMF55nWNB5CDpD97eFF1wZmpL2UsrhSaAbWFyo",
  "key11": "5iN5emWRYa3ZdoZRzmbx3UDPR7pBeAyG63V6eZBaCvYABHcaYWFZkKmHyg6ZTtm4RokvVyLTH51NoCpgDimt4UnM",
  "key12": "2zQv4EccL1THn468uHh4aAfmear52oTr8gWmc4SYT9o1sm7WvkKzH2kJhRuw6zYHJZTK3grSLuDb69bY8Q3zBmY5",
  "key13": "5Q7JAtRueUHi3tEBa4CMinUHrmT2g5CRk4p4gvnRcj45FGx2qzF8hUWbXs3T7uSHQcpkERDLhBVpe8Cj23vd2SBZ",
  "key14": "2Z7SfgNxUaqwiG4PK4zzVzyuUKKapBy6fosoXDFb5wRuGQZtamZU3iSk8tcmkapxFqxzmonz9gd6AdLXNMqQayhL",
  "key15": "ZtXVrtYyepZeUptynSmF9LhgPpHq4EqpMpdqnbnphcyShH1CTGTh1KhajtNPpfqVPDyeDNQiQx5NwbBREcXoDJe",
  "key16": "127JESVryFSYrRG9LvX5jjpbCRCUTCAtZtLibrY1WYW26SLhfQo4bzrZJTN5YkgoCBVpVh7mmEYnZhBB82ZEKf6D",
  "key17": "5q2zN1zauNGr7cD1owk1k8PuLT23ezkRE4yT6zs4PXDAzinDV2Z31J58eFqvMMNk2faSAJ1iseKBxryp2FPaZVVi",
  "key18": "4VLv2MPfhTytiBRf63MrxDkcPLiwg6dET4bs91FojrCvmcREJ6j6bhYwPPE1Mb3wf9mXocmnUx69PesDL9aczoTC",
  "key19": "3BQJYDPj2FYqFPzpuUe65jXQBAhhWBRWwcELD7fDcsheojHmEeCf9tVc7QmXiw2YHK6xD6ufNMqwBbop2fW9hVQ8",
  "key20": "33PA1R1G57QSSaQ8G9uoWw266f2iWDNvgHqKGaCmGvYMpYDHF5qiXoXezAZAsbH7A3RdEqXwX8tf3N9TePNTNqoe",
  "key21": "EKeVHtaw5Ub2TC28gRJ7iGCJd88TkAVJaZEmiPZEJwXFUo2hubFpSH84f3YmzTbjM6DjXCDZCm8f1XsxcSpUR2F",
  "key22": "GvJKGVriSBg8DkyrKiomcRKmzVw7PBHQsgz9U429dMfZ8ssPAVD2AsRehAjZXahzZ4TYfkLVzTwcN5Dm18qDZtQ",
  "key23": "bezJd9SomNNY8FcN2bCr2ZqR9iMfRibvNZoS1NYbwzNiVfv3F21ysM64XkMhZNbKG16D6TRNPuNabeFkzcjSriV",
  "key24": "3QySkzViZzh21tncQ4D8q3tdRkzM45yC5arXqQks6bS1n2vSwMdfF7mBzyA95BEH95hxAH5bz1KEeY1krVg3NCbK",
  "key25": "2UxLcrQrcr533rvJXbFwcxUzTwTBnjaPsepsemSoP4J9TGPC8vhvwJkw3tB2ZFgn3ZGvrqqe9goSH2UoiVzRfS1N",
  "key26": "63TU13ztsDroUcFuc67SLKJ9bSgwNcbXuJc3JR4mT7kv4EqLLjYyx62VacCSBq4CAdnj3oS3EMxZkzKJ1MxPD5jx",
  "key27": "5VmdKwbnJo2ETyT7BeC9hpGCUcmzfG7vXjz9UkkzeLdcYs3CAYRGjtF58jEFEyD8eYwrktV71i6wQkgYZJJMEZQ",
  "key28": "4LBZ8vM6e98REKVur5bkshiAe1kn3FRMUVovExqCK1LtnBWihfMQxkvM8UhZQAGPqNboK4bn16hkjiuyf8bTCGfq",
  "key29": "aQ7bxh8HrXRXquMAZWHKE8f89RYZUUHWAapbPGoiyANj5hvkKYMPdeMaE6eRPtu1Prvv89fjjSYYqHBqmnbn5ic",
  "key30": "2ENppLyaCrpxCszJhePfPvfwU8P2QegZmNQX21GA1EtjRT8ypfFzVGGgNXfowjLuVjoPJoiKc5bgEP6DoMGAktn7",
  "key31": "4PpD4vdnByY7hpJ7u7L4chQRRP6zwdRN3YKcqEnoigd7fpxaNLVcwmv5TVbceTJXhrDZcbivHNetxmLrRNg3v1CV",
  "key32": "35T9crtTW9wVT3e9RNvRDkM2DfC5rk4WztkEBMZeNbDnmLRrx8LYJ6UzHUrwKDa5eBKvUPnTciYQSgjLkzUCdbKv",
  "key33": "2LnB1LUnCicw3czeGZJroYEz5Q84ChGJii4TbwWpfMke8R6sGtTiwj72oKmVKbKHBddzKCgMBm6YaUdWKJfk5iVi",
  "key34": "5dCcUfv64Ebeu1MTb5vBga7Vo28wpn6D5FRduVxSXbDAmmT9bXhFYDqpktKcYoEW6HjF3vUy4qjez1D3vLqD9v8h",
  "key35": "2GQgvhn2d3C41b9rgWbeDpi4WajvPyL29vpLrJ78EGfVqHYh3WJHH5qdbWUKE8LroWUepTZ6gWjCCM5LDh7qEW27",
  "key36": "4Q3YwXVgs5HPyCkZHwHfGfvrQnEcZEYpYw7C24qhwrCLVPs8ggFH8EKyGbLeTASdrtrAXJhAgU3LWyTrC6JQJJS2",
  "key37": "3Vjzxb8YiVeNovHbm16L4hhUDeqk1WXcKQ6yTTerttRc23G3kAQK3KUHZugE5mnfajzYHAk3anUtt9Bs1VGFyA6M",
  "key38": "3a9VKP4KcUiJ9ckryu3Dte6EDZW2auYRUkiiYs9BVnPd14SfQLwgHxiPfg1jjv5kPhVmbh4UkXGPrPmY1fjyQNGU",
  "key39": "nSn5g7agFiFj9zm1U5821d8JBp3SSvAZSJZNxjfkB67tB4MR2uqoRDLsGhxYWWEYhM2cCESAcRTHkmQG2FW5Ue1",
  "key40": "3NKAz1cdHCAG59LBteBuCNMG7wshAfeDnMv5QVWZMU5GMiYDvMmpmzTQwoWpLJqKr3663FmKVuQQbgJLuqJbZu4B",
  "key41": "6275LpduaCwuy75fxHykZa3mHU1YyhWX1yf7h3sf9iqtFkrp6iHcZTKwWe2xbDK3CUdAz7LunnYGBzwd8hHhdw3o",
  "key42": "64rZKKa4eBojyEvWJ19STRt4xXgJNXDUgU25ZfPSDE8AifznxH6Q3zgiZcq3yZyqn32khS9WxSEcaJrAfiRAUVas",
  "key43": "2witT1jHHMnwmKxZW7uB3H1VRim4fN96sghPkH1tLQztUcJaEYqFHAQXLUYSxFQ9vjtH6aVEa2RpTk7fCvg4NKQR",
  "key44": "5yKiGi92pkvVXeRrBsNbw3sWH3MoaQZ1qFEt8DvDRqvCCZitF3nHLYSRrwgrcUqMuAhEzjY37i4gDkuYyTiGtmNj",
  "key45": "46xQRMRNQmwCRrH6u9tqQdfcbTRQ1iXQ4R92njxReu7LaftBan1zpUs4ZHhKexFrW9mw5gn1i5sdv8XTHYbEBjSx"
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
