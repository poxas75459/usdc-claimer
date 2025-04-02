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
    "5vjtmy9McJfWJ3KX42wsTYfTzKhj8Q7eK9EJFZbKoYBYvNXsUzdBjFZVh5Frs1h4PekrGqy7jm7dxvTiJ14Zc7MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhyKNet9M2y45eXqgTapKzM6Xmn3pfUwNTRS1B7ETLT5CeBpxCWhiUW4gN1ifHcQFex9sao2tnx7hrLogUsnKgo",
  "key1": "4BVDEQn2Tf8PNyEkDCtiPm24oMga1nmbEwnVs1ng1vg1FyDMnuoiR7PmST8Dn73eSou8N4jMNrnfTxWepfQC8MiL",
  "key2": "5LewtN78KY7A7boKDxzBEkRo4cnLbqbT454By8JUw31EeuGYCVywsiUwQh9fzz1AM6ZhXCcVknwTEQ4QaPuYU1mX",
  "key3": "4Qg7DHaTsW4xuELANvKR9cruXL3vmANG4H4Me5K1w5RuBxjGAv4jzPxbvCCtxxSPMHA7VMSSaa7cMNyEkDi5UWqp",
  "key4": "LzHBeTAw4U29aUfBwMy4ritUvMiC2wLdXuyiZDECwvENoQq1y3YvZy7E7oWzrnE115MuGpqJ6L4DwepmhBe8sMv",
  "key5": "2GcCBNQ2aFUer2reL2fdzah1nkXg85VG9HYo1Cfff1xetixt6H9HJtFByviWAsJTm4uM58j6hqc5J5d56cG8WhyC",
  "key6": "3JhhYswKyAYPJqbWFLP3YQS9YD7JYHRbgbVfMra7N1gvP35mFiZf7jxsvPTZTdjmWZxQtd4qmJDhUCsngLWTSXZr",
  "key7": "Z7pbVn9dVWnHoE7J8gmvVEzjSvzhopARZS2RnB92Pk9khw3NJog68uD7Kdxk6Jq6iibweEyLXeVT5etcAfp24DH",
  "key8": "2CKyUySn4JWQghQRtN2Bih2E6tCHcjYBn8HRA12CYLzCAqYwZ52fuwRHeQuhj6pwVLJE5fNMTqfKrFj5fkwgV3Kt",
  "key9": "3fPPUPMhfw1gQrSKLCCUv3fPSXTPju9GBkebQV3v1cL1w8EKg2RcarvCh7o2vpJf5PCCrtbPXjjAjiN93KmbxwaC",
  "key10": "2Jb5L2L1Z9of7YXEuPC9shpWeiPkpXjGeSFtWd9gcct94NBDuPePT9UKDC5e5w4QNP6GuoukCmD4A9vnEHQPeRSJ",
  "key11": "3Cj1M58d2G6tPE8uZ4UprnmMgMNQbHMVjtBWK8W7g3y6wFgs1gcjuE2DmWzNHQaY1EyJDinHrJJtcchcMGEFpYXW",
  "key12": "3tNNT4HaEJbrJxPWdaL3ijmc6s1pjR2B7q1kSbx78DPFVQmK8GTduWqa7R5CVRNq1K9PC3sspce4512B9M51x3ES",
  "key13": "4qaPUniLXUBmm2p3cPQf1n2YiWTQegbcgnJCy9ux9NhZcNcMMmoHjJqWP79G3Ng8CQRrSa2xzoGqRgzzCkXQkrYe",
  "key14": "2dEjAg3fdhz7CQSSu2hF7mVUxnSUQ4W9HJxBz7UXyXC557wHrKM3LbksyzTg9jcVgQAKr4MXW59dvBuoKKdUvKNm",
  "key15": "3FXHgrRWgeNfWroV2arykbv7bH5YbpvEwzTS7giEFskxbzXTEFUcAXPPYUdQCvUE8abLPaF5VsAvgSkhMkay9D3J",
  "key16": "57fx6cRmVHhCaqrJjLXnxrfXvSapWei98UotpfzbMfYtgUFkZC6WKC9PwepxVukDHsbMuBE6MYNttYFyVm4D9med",
  "key17": "5RNam9FVdQAW7sw9tSEEaRjkHmjQDbUdpDA8UqeBSNbV2mkuj94JPzdxRUXTgk9CovBRP8K2nsMytdjhrkwExDCq",
  "key18": "nHHWYJ7vrmRct8ZeXf89qwegMkANSGpRWATdFdP31PjGc1zj3DtSXQCZJtyHDiERWowbgCRANXStRG6sj4Gtpka",
  "key19": "52r4NawJryqjrqcN576iZF4vySYCqFtAcXhM8GgageQxVie62cRvf6egjQmhvq9sPJBdCxDbrH8v9qkM7rk2PNTK",
  "key20": "5wWAb4JPmX6vnSFH6k5PCF6YtfAstbNW3Y4U2mkJdFSdRPsB4tiNbTh1mRAUTvj4gBJphMuPZQZsZbEUA8uaz4Yk",
  "key21": "64Tdi9nwXYcxeEisjKDrAeZ2DQjq1eDx4PnhLf2beLzkLE8acK2ixo34527bqZ2cyGCgnV2QzJsXZUrPMm6vrWb",
  "key22": "3Md32P3TgPh4NGffuWdUkViDE9FL8sg17jquggRwzFHy5aUTcAsM11XxyFxgnqhn1gr6Qg7CxcJoSDT7jULTn66Q",
  "key23": "65YocukxbCbv9dXJ19csF5v1V8jYieCXCc3dxMngAvfH89hhV6gxReuT2228pV89F5okZGsjGw3Psj7Xoh1dovUH",
  "key24": "5UkGLfrtSgbE8G8qzyN1ywcJa4ccrcfdpHWNFPuAA1MA7W8Cgsnuq7dwzEPs7XWMAb1rvMxypTeskSgmmjyDTRHD",
  "key25": "4s5ZrAeqgsF2nS1dhVseCTa7rTqdVqEeWqSCo4gafLLXJoDztfb6AFh6hxUxJ8szrbw6sfskThm1jmvqLA9f8Lio",
  "key26": "4C3BgXFo2AWPr9nKNHnmjNYnAHqAPsqoA64c2NCfxvDTtfZJrcMMNkkWyAPx3eWs9zxoQjUQdZYfTan23CJ81FJ8",
  "key27": "3ot5S9SeLqQetVpzKKNBioaJeemq6VcSC4JEQLAH12RXR9iVES5YLjN9zL7V7huVqDyA8Au7Z28r3aXnrkfJsbBw",
  "key28": "2yB2b4ZDKyJrSjZZWdqGdjUouDwqMuJbQy6hX7jdb64W1iZrC91KpsZCMeC474o1AzLdULXaqaUKcjo3NFiti4Vz",
  "key29": "4RKpfUdoP2ZDjaK8D3TLmHhTYeiBxwaa211m46RhLAe89Xdnhb2p5FjS3i8ofqa6gaemms8WFZvtVKSaUy4o8ofs",
  "key30": "4CxjQV2qUZ8ARasFCZi9xSLGVxmtL1Nn3uBCz9Nma5hK7QZnTzAqb6N9fdo1TcCGrEuwC5JqjaB82CJAvCyPUHDS",
  "key31": "5vBDfJTaJNqN57op6n1zeQkD8qZZZEHjfSk3ZLsCFuhZzYpQCDqMX3urjCm7aXmo12btT68f1VXHYyt1FKEmGpB8",
  "key32": "4WLoRumyKZFJiCcLKq15ALffbaTMwAuE9W4mNvjCVYiPWfM6WFxZJDgiUSz4ZJ2ZH6gDZxd2NjRM4HLi3jwMQbvJ",
  "key33": "2Sdq6dg4LnKawAvZi9hfE4Y214PucWVVNYVodpk6bTxQHiikC4ujdeGqGHT7uWZtrx51jHpu5tXujkgJXaEgN7c7",
  "key34": "4KUXiGnBSifDrAMQdHGJnyet6FNEDpr3Nxe89A7JWi4dkqp5P55ZmSn6M1SHTRoHozTcGVqbsowmQNJg5hypx4SL",
  "key35": "uyT7Wxezo8gTKeqiAeneV6Mb1QopUCQWQ7Tcfp2L34yye6wg5YLr9adP3WFGJnbE2vnQcKV9ZYzufYUhPB1ooJu",
  "key36": "VR8K7hrf2THFUweSERuofRZ5w8KNvAfsb4WKVKmadVcreMr5gkwi4iUHc1RrWd5E2seAtDTYtpxHfEcn5khtWWH",
  "key37": "2vVxdFmXNNmyrk4retjBJEGQBu1bDSErW6jXDskfxhddtUfQpEW6wECrMUL8rYDccwQ4Y2FMRsNmougeM8sQhXz4",
  "key38": "5iooprN4Rr6j5RcUQravdn6k8vrxbKtepbrafYHZWUXM8RPCUpBZsvcENJqajozohn4kwMzV9Z61LyqyDaujypV6",
  "key39": "rShA2mJeC3X83WyEV94NU6Z93XCFUwtQ28v2nArjQsitHCsFM5K2PwKrpuG17UGBgQausbr3aXe56E9JTwiUz7e",
  "key40": "4aT4BrC9n2ktnJS8G5cewZmMkeLzMtP7tqTqipuZS1uVqEKLsRztEq8sztCDhFcM6w5itZ6zxmtatvyQVV4NfvoA",
  "key41": "JqNghQQ2siNwiwXMSJiDVdopgLDSbUFY2FdwT37CiNboSqsaE9W3TwERCTxhrZPcbcvC1uxVJnY5bzDJmpSR3Jr"
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
