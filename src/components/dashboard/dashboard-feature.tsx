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
    "4zBrkorVXkp6zi1gPcbME43cY6mdaUuW9ifDThySC4uycCqnh891i4jADnV1pMxz7WGVEar8QmvD3DYtUdJbV62n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZt6JMJKoaHXhhXaWF5rhSrxV5NqjjBPuj9A8dkTab95LRorpXw3rgkXhAVULAxiJA5ZJodGraXXXK7iTdUWTTi",
  "key1": "5bes5kB2hfCKFMtLFgAnLViEBa5EBxKBBgUcQN4QB8ZMs31ka2eF4a5qkpejHqsxWVi9tQBndwYJJBL8dLDmT89N",
  "key2": "58UoEdhBJJu3L66E89AQFBPLbk5wftWJKmyAH5xp6fWaLuEzA2NZQjvyDZb7xVgu44vfTfcMQT73H7u4eBkJx7jZ",
  "key3": "2owkgANZGS7iBBDytjjsq22nSi4tt3jDmdH36HxR5ojMJH9bQLDpaEqhgvMvf2ABwDko9KhWyu7mHpuLuyr2rhmc",
  "key4": "2Gk3MTZcQj6ngdNBxeUdrvFs4tmM5BKb1dNZp2Kwj4GBHph26ctp6UE8o27LAAtf9RCmEp6vaHAjTzUuoSr5QQj",
  "key5": "DxaYRrA9URxEgeiaN2GUTwyPCpSaqkY8mqiwEEMWLkqXnWuPVF2Ks26vLP9hU71jtcvJYmj2Xm2YWbegZyRuwvY",
  "key6": "4sqQFQmiQeM5kLLpbBWYm5TyGXRsPCpq3yD9NvdjqGwjUVNQPM5Da6XSvpx95jK1ugKju5eQmWRsL624LznHigUo",
  "key7": "62ZDGbbsYmJQGQzqZJ36ujVLvxwrwbtXoiLS77fkXJD7PKo7mcCA98Xp3fjPghsVLC8YrXs2unicPch3x1uN1rvJ",
  "key8": "3P6vZe4YRZvbufBcHhtVrjU2kmumJa2ZyUmhK5ceaFDFgVdn5yZPjG4mKvTpdTpm45YhBdrWVDzRpFKZ1b8uZRsR",
  "key9": "9Q7n4chm3Y3Z2FeJpgGfxd6Ac9563LpQMsKoAR99LhSexnkVN5yqtrVh3Vq7qjwXa6VZJU42vGoeV8TijKXo5hP",
  "key10": "35SzqJJMjiiGnGoDTk1Hv9zMTB2Ghh3KpCfvAHKp8xeMJBoTE1y7QsuP2MHg2k3o7jqVQS5Lea4ie7w5ijyrhiP1",
  "key11": "CTxGd7ZfBEvksAfWLX8FjUEKoUsPyRhqD3t83tQQMFUNkjNcJZmef2GUN6PqfEvVGWSpgie1uPWtc59Mvw8QpN4",
  "key12": "5c63mWJ6Pp3Sevn7pLsXz4DRkz8PPXJtvHMhC6S5vQiAybTFCwMJzmLR4D8gt2PM9QQ6ZekhbX6JzKDqtNsoBPXg",
  "key13": "4Yu3WTD8V1sjTt7m4f8riNeZCFqMCwCQKjcQUfnFkGx43GTtjT95yfyxvNuAJk3AAK64JRdaMabRQtQMGTWoP1nK",
  "key14": "r5EVzPg3o1uT73VccSzCqf2fSN51J94JFre7uKSH5UgXS9DGLnPPjmBSvf9PPRFkmsW2yzEe91AF5yrHphSLv1b",
  "key15": "UNtuDFcLvzFYPvuHHUaND2Kin7t47HKYeCj3PGkdwEzYzrS3U3QD2XDqCu1AxgMm74ZJTEJQdXnJ4ik2L7MyH6T",
  "key16": "5nWMcp9nhK6YaXHyKFK5PNTCNgjVKXjms71zDxeFLiceVuykmSwpvYkiQGQV9oCfEvwXcA2RpN6ACZCmQkBreVJQ",
  "key17": "5mSD32VA7Z2kAtoKKeReZbLtooUxWZ4UnDtmfTVsBbLhA45TphEo7j4m46bkKbT3fXkueThXrGNtbEWutRKom7qH",
  "key18": "4s6TR8EmT3PXXXJn5shWWVLyj226MAKm3i1Zocv9Hmk83K35sMnrMyrxXuwzQGZmHQ45RfeWh4RsaZjvX8bus1m",
  "key19": "5fyTEQwqHufB9SbbzC8u3p822bS7pdNPPbvEvzKdrumgFv37h5hT41jJ5PnbXbmzGqWY4MzY3uAxU6Jt5juWTZQL",
  "key20": "37MPfYGvxxsKfj5AX3vYQC4N6MwHYb7ZC3W4F8bzF6ba7Dn8sAnMfJTXmataHHH7jK7CfLoWNzxpj2wDpxJzNoxW",
  "key21": "2g4ao49ATtXaiGUhBAHqCLLcAZbvueKpcRhW3SSpqRK2ZgFWw92HMGkkE9WXf8gFgr5a6qofZbUowaijw4VxBZEc",
  "key22": "36m3M5kkqoZSK4fGSLuAsaLdLbe2KPRvz2KU6Ecay9rrFqJkBM5rbGTGc3U2i5Pj3L2Ugf9jjjRCfMRaZmHYCgMU",
  "key23": "5nzh4oD8tNxeo176QYwGorJcSo6YxdPx5WkuiScaeA3Eo4jdQyJZdh4QZmh2sV8ZYaT9r5EHP7sKgyN3meCjcxGH",
  "key24": "4xFyvZUxC4QUW65djHWG86c4broTEtSCmJMJZn6Uw9TphncgAP2CBT5zmB1Pcx9xi2mMv71HbqnPwjJEpZn8H8M1",
  "key25": "2hZgdd6reXkgBBKBfCKy7VtxborhAZ2b2JSwYRAkVjsE2h8oTaMNximFn3qFyzHKZoMr7cmyPV4JvM1JiapcAoVK",
  "key26": "Uynme2GrpL5axKfV2Y48Y5wu6FzNLRciu9erKSf1zoUqRrhLpsaoovY3ZjbYMTysS7VZp91jDMcsvFkhG5W6S3x",
  "key27": "3Du1Yp8R5PNiMyQe9GQBt9r4M51K1DJr9wCbdQXR7nosbQxu55G5pz8dpcjHSwoF1RijAM4tXbjNSv6k2EAJBshm",
  "key28": "N56L3rX4Jy2qxeLT2ns3Hwki6L4TcMNYRMECkgLuJyvuzTxDqfnK1Sgs6vb2JxSXF6vmE8F5b3dP2hwFgwsrtzB",
  "key29": "5kbwDz4tEPkyUexNJkxVbLsn4u3s89EcKCW4s9icW7nX32gp1BscgYhVQA3nLRktpnDkD1WLZZRexw8pKLeKhMor",
  "key30": "49qbvcX86D8kadQgtcPh6e4DM2KC9vueLTJQBtBNC2DJLqnseoTQxsL92vSyt8PJ4qj55Bx6kTHj8XaBcVSyK1xA",
  "key31": "uQsK7EnikEn8ND4BiEVbd1xSsbkx28h9FrF2KdR85hz5HqGsfwf9Lqt2xkCEU9pcFViDoMrc83X7iUNTBAQJkgK",
  "key32": "2Y92hkpY4U9jKu1GwNqxA5ztJ7chNpne2792ox1FtzvvxZsyGJTfoxoo9auxxcQBQr9Ltt76EyTAep3BVWczbyyi",
  "key33": "3MDPhKXSVF78sZFERJTumM6vwfxgbzcEbNrStwhvMT1daD1KL4VNoWkPdgbG19Rok4fYDXaVYjnPNsxEEDwqaTGg",
  "key34": "2wZecpzKUmLjwKJeuAA9aER8Wunk7kUszGScFytsSTbRJobeRjn1GszFFHqwB1oQqi5VqR8CfaUDneWVJTZJVBsj",
  "key35": "2pANJu9hqDFyQCphqSTkqJe5Ek5G9eeBQwDFPBXr1LRwR1DDeHDZ4rXEqv3hodhUeDDfnoNSeWaPJ3bmLaR3Xucy",
  "key36": "YTHEVK9RYnSfpewYAMzGhwrxjF7EwqfMLRvxSUpk6n5j1GfQgGZ1kzG17zp9cbDD4wwMFeKL5DU9yg8rYGtmZ3G",
  "key37": "4etyBWjKpejxVLuZXpMwvmgr9sncb896ZBnmAefBHBmTpxRKyy9fi2Qg3ffjmgT65J9PWmsQ3FNuDC8hmcRLLLDm",
  "key38": "2D5C1srWZmyt8nAKKodzDc3qQvpErqEYBcR9CPCPW4e4a7QgmkQff7aCcijJx77NsGV3TYDvXx5Ff6eDxx6g2n24",
  "key39": "4jfDtM2nthNsEjQkCYJxoKdo3prLA3psGpVGwAM7S22Ews2n84CPJqG7PsxMjdUweFkVYC8WidLfbhXPMSDKX8bk",
  "key40": "2MRA2aqNZJ5yq4XFFy7yoX8Ad7zAB9rXnVfkpZBmkkMNF8X9YcQgkqq7fsqExY19Nd9GozWS3n3JTUDfZQ6NaJtB",
  "key41": "4NjNkVLcwH3YRGHZtBWdUK5k7tMUPh2GFCLwdGqiKYy4AszjbTshZJPkkaxUDDG569hMc4jAtYcL1pBidWneRPZQ",
  "key42": "5NtCqsxbMSeJc4URoFgzPkFaX1gGdYKXcBqGov8ar2MUcE4ZXbW2wrdLM25UmmBzcP5tdgqgojjLjyS8f73umhYy",
  "key43": "45vSDRuJC9R6gQiSXgi177J76Qky6qZLVvWyiFjRYjx7LETZop4W9iRWkJS9o2s1tmFLxV7My4NAdVGWnjnNwf1q"
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
