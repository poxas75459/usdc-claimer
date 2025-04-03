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
    "4fYzxrWPy2Uf2mvwVxiChXyD2PrzpLkn7NcLWUjkoYh7mG36zTcUTEN7USfuu3wVSpEjXzxX7dg4F7MNr8GaTDjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g7hJQVBhUWVgXYeDZMP68rYfPnX8AbAvUxGKPiaWFTXkeQCHcWpD7guCthJEf1eSa98ZzRtoQLCfWmw4z2Uv68M",
  "key1": "2hWA8QkH2wT12KNYFq3YVVCkPsdX3hT72csTK1XVnAC33SthttdSqsUE1AowGtURp3CutDnjukdKbRUvhxXPDKCP",
  "key2": "2dPjDr3sp3uLmRn3wozeexjaSoopJE1nebf5cboZstSqUH4LxveUX8dtJJPTHrELcMZbQa29w5HBee9Mo4MCCpof",
  "key3": "2CxFPfkYwQFcEFdMcwhmDqWK3mS9hMWNAhiQRDPE3Cnz7ghV3bfNTu2P7PyA8doaBi1QzkNfNGGDz7bUGLfvUAb9",
  "key4": "2AyC9bS7bggNHbz26HLSVnDYcaBRN4MFHfEct49a8vSDVfKgubR4MjNQi14erD8kgpkNafRrMsEBfMaaTH5umWWM",
  "key5": "kP1iGCPFNcbdDTQutGPMmMqgZWxt5BpZeG83G3XSvVap9yMyQzrerjxWPZtpyB1gHHC2o6wH8MyyRxnYMB5W8nV",
  "key6": "fLnnzEFJG1jiGCWmJsLdvmvUebxerjaZuuBi6Abv5jDzs2HrfmJ7UBeGv3uqQDmTB3TBox6xX49oET73svx4eye",
  "key7": "3MgHe24YB4njXbdR9p9q8T3UrYxuJ3nntDNBsXowbKYTbczUUVMuFJppU2PCaRzczTjaH5A67aEaJaWjxxERZ9Uf",
  "key8": "3otcqqGpcKtdME2oPEGHk96MjpKjufqR2Abc94h72q9UGyEvGYQZEZLzbnLG5XAYvWd2F8x9FU6Zk9Z4TLsd4XEr",
  "key9": "471dvxTBTcWCNozZqThHA8TGj2XqudPuvUbWrbkV8AzSq27guVwWKG2wKhq6tK6HDXSBbcNaGyXu3mAakYPWt6AM",
  "key10": "5RS2nmTDZvJ66DiimGgfvAqyt7UYXe1qV2yZphQMH2tdYzGxsqZ8L7MKwLFFs2u1cx3rd1gxqN4drmBZGjH2cejo",
  "key11": "3Vo3WTw1S9huDBrN7EoYeEVEDdXBahgsGFjgccqBXVNTCa1taSVeGd8y83nfUSj9fg1f8vem4rjtAhtpVRLJfzdQ",
  "key12": "WmzZaHRF2vy5oejvbF1o1iT8oNcu7jE4d3YvnsYm6Y7YmKxdeu5zuNGgVbDVCv1gMJBwpkTRaH3aVtBZvKGCGNU",
  "key13": "497ztLCk1iB5rY8DqSJ9xEpxejNWwPUWzi4CQQarWe23Dfx7sdp2iHi3SS1ACB7a2YZxrQdUC1HCBmit4Ak8qdoZ",
  "key14": "auFRjsAZeGA6a9gwUhcTYUzFgxV8Sw88Qy7Y6TY76AY8TVZ8S9zYVwUaD7cJfe46xT2EPzp2LmgtgB2Pkt8NT1d",
  "key15": "675unLgvnwNSivnqcbWj1WAM3vcXAPrPYQrRjZk5v4rCyfZTJM3tY3jP6EKyUaGoLXB7ViGRj2hTp2rLVL1BJhuq",
  "key16": "4YK5PvEStm4BTD3FqJ7tQK64juQWa5CW8Q15JqPQPp4YS3MMgMi3HdyhgvZV2N6fnv2nWLKFXKmRZ3wU8YpPySJM",
  "key17": "47YQRkpnzZPXsszMPqECrnnoPjza4L3JmfVo4DHJJxq6rEm9TBpWkcoCJMbxKnTqC2X5fc1w9tPYG9sWvynaBZzE",
  "key18": "kkJwwZfJ4mgE5FE412TWrSqCWEXyGKv8JcG7CGGvsHQXHDXwazLP5UUW34EyHGFtnr99xN7B24VUdkwea7qeiGP",
  "key19": "BbUa1p1yYhm98QncyYJXXJvpKLfeqepoNoswmdANxADDrDxic3BUkQKiGz4oDA3cEg5X3Boh7Aw3jjgbH2oDVNz",
  "key20": "42GMLKQZYNiBH8AKTV719TuGF2F7QRYztrbZANxQFnuT6vDqmPpHypYV1QWLBAaff5DxijsRu31AqNypmLW1jsnH",
  "key21": "2Tapf6S3LQEZnWU4TZDfEt74FGerAUuEDLCUdSe2HZWxHC8jZNRhvw83DZKRDLNtmgHwQbSRSjEBtwqynYfhuv9p",
  "key22": "41AajfCCgnUW7ibos8nXW96EFZ5sHJNMKUwBWZoH5hf2Ds4jiXGfXVkfgH2FRV5xHSxFwdrcVsz3X9KmHCtpRGqq",
  "key23": "uPXQH6vc9nCatCYjwxPLSTmHNbuECJdq2wYegcXfpYErLYzadnNWwrgFL6dE9EQwP3XAoPrMQzBupeA7YMrjsh6",
  "key24": "2bqLuTYdot5Z3WMuzrpFXDZhYhUpvWFzG7nQYNPCQyrRz8qUuRRth2nv9cAfoKZmPe64GSt451UMiW8ACUALqHoq",
  "key25": "NjvjKdk7dABY3iTitFWrCfxCdBnUCDGjtGruBjNzkbs6FQZjn5WmhGYfVfqGFQE7wayfgdnpo6QNqBLFSLiTSPs",
  "key26": "2gpbgttuWQ7jarsco2qzW8tvLQvX4KDEAFZbKLqEXzr5F5q6M5GjvkfeNMhtzXrQe18MpJGzg6jbsYrYBGLZoQzf",
  "key27": "uFs8Tp8jfmvFnTTsa2PjUoJtRwsHCSrj7rDiKDDcuDVdvquVtjvA8ptyaZRiytEC4EvUA4yUW17eXiFQoRnfztm",
  "key28": "4mQQvatYmJbJE6qhZLZmugJYu3zinXeGvLRLFYhvJMYwqX6q4N43ba4ApkubkoMEUqJ6eKchqczHAgb87vMbSk1i",
  "key29": "3ZdrDq5Ei6jvFHjRKCVWx1K8uZNYKJHtvp2paihzVUjyv6cNMr7PuA1z628m5vSoXJdZm9eqQvnZxtC9GkYFB83h",
  "key30": "2R3WFRGMAcPCd6TnbVrgGAynSPP4gRXjrxQKBvsgPaXqSBSLXWhBUwgLpnRwjxCe6N1mjJsKMYZ1VWXipRMDfxkM",
  "key31": "39VCkf4VLgh22gLsga8XMy6cffw3MppZKRicjkYzZPcZihLNS4t6PnmQtuE9ZRZSYkUKLPfAkSSgX5WxmZYdmkY7",
  "key32": "79YHArP6GB1zjP7otRrMs7nazNZyCu3ihngmiFnShrc9HoWkXwokuYbAxJWpXnfSbWXfdnRYxMBB1KQ4sYhZbKY",
  "key33": "u5MAP4cLXXirbNc4uamTjbvJjKU7cKBjdHEzN5u4APBs87XomN8CdcmdZ2GK3MkYmf5mppmv7Li55MP7esuGLJz",
  "key34": "5w199H7uyCWCmKaJiHv5pMSMPkMVdNhdtRjXHAdShkL7a3KjUPwNaR2kP9bueRvn16DPp5dLtSQ9UPDfwmXNaqTb",
  "key35": "3jUpj1gQZrRydowvJXgcXzMtL7CZ9HxzBB8Evw5tQxxX2zfZEu7H2ukVG1ztWgCjM3jVreUyQkxoXJGxKN1WJgRr",
  "key36": "529N7cs8YLuTK2RyWsNXGU3i4daxm94iFaVgp8vaGecPDkyv2pr6TzY3ZUuQdQQ5p3wgBgApaHDHenKGF3444rdM",
  "key37": "4rp4d7TAYs8khBKhS4WfbNpF8EmiVRFz2s49q8af3nyLZY4dN6tXnN4Ec3y4Smkj3WDjJS55WeD7v2EBntQZC2ba",
  "key38": "mjBFUnYBtZ2Q1AUangpDEv7H3N9GAttmMq6D1bpWysEWFWsKDR1tVTexPtGoFQ4dVBFW9TBKd32EBSa5c1qpo5a",
  "key39": "ar7vkRfXnWiosycJRJ6wTp8bNdRjybSrgBByeHRmoMtfNYq75V1gDm6wT6bGrpx8iJgDHXzFW4sS5HzsH6YukYE",
  "key40": "5fbut6Zwh4A1c4nEPieMzNzBfH9kgepurRpegpdSyHW8NccGW3gTw4gfFsRZRsDUNA4BQChrUasiw3kMCjBm1CxD",
  "key41": "XhMWEQkDcNcXQdnSexdJyPXvdoH6SEfj1rL7Y9UYPXcPkyxcowmyTXwQVA9VQFjmkkuNFq6pWZ5u9tuxxKkhVXj",
  "key42": "L5swCAJp4YPEjqCAFCaRwAJAihatFifzbXqLidgYnQRfktkw9ME3YA22sue6swPjWaF7eG5Q9k3ZmnXmsFc6HY2",
  "key43": "2YN6fnGRP5dxcFNP5urBedzn4nrDSdrEondBHa9uxim818Gx1iYpPDXaZAQfMTDNpQQQUWhqUU7Ph8ySnARnKRwV",
  "key44": "4YK2n2Gq6txYbm3zAPZmGrJMiH9DKUwEzgPv6JQzmq96WnBD12xU6NaCLrWk2KuNiPdnQtesUTfC4WBXepS2RGpR",
  "key45": "5jivFWCChwoAQ1QzJZH8RSNCfrcDCBRf8WPvwartCgUHX2xer9FUdpRvrfqiErMg9ECDnCimsTN8Jq7W4d3Fr5U2",
  "key46": "4Ca3t1MEFzPQbzqRoHpTySBpSKSp6PpAYPpgRjhBoEB9Cu99oLP5fpy1ikEAwfA28yRfTYteQ1z2vzDXXmDS3yut",
  "key47": "aZYxx2WRQWc2GHNpH2tnUeD8VY5WkfxGC4z6dshygF2RaYg7cRDYXUcRBLoyKWg7KQLpqJPke28PKGXyi2Kfd7D"
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
