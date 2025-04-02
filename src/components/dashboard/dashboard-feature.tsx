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
    "3vtT4x2Xu9rhxoKNrV2poEuKsN8zhP63KScHtLR3jUDWKfNHD3TwXqmsDtDUEZiUSfzBgjwsHECf3EsYJiEB7hsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279Evy8Z5bug8ufpnbvcfXTvKmSmAZdpYm3Ry4GHifqToUTdz1jZSoViRN7wqMWPTfLgQ6nfBA4xkpdraFxTcEbC",
  "key1": "5EEy3jUBXQLsZd3sgjZypq76e57bDPLrMFh95W6AvqTneQoAkmiokeJNjR8oXY5aNvuvJz9nJEbJW7oMSWRbRwnH",
  "key2": "2RUngC1gM8nhQKa5y3J6K5YtqwmyBkWKJGw5vrhbgsWzA87yFgrHufkGr5bXR2Pa71im87bZCuMMEnReHvcLGHRC",
  "key3": "5oSkyH1VkF889RXUGGGuvcdVZUYgogzKqxzMPQptRbE6q8Apdn5qCaRiXyoHHz9KzEQaei63G2ErdqKEAPZ7f3iM",
  "key4": "4tQj2ERAViB7Cvvfmcr2nxSJsjvAjNUEQSRDrsUG5m4qUChZd3idUiBguZaRns4asVbBEdkyo2dXXzRLbdKAbc94",
  "key5": "4N5s5ztbBQvjUYgCibb7qySNQx1cRxmNFGH6xsofoi2vxCwkBGhoqcZ6Njx9bXU7rAm8iTgTtmDqMrLWTACggM9m",
  "key6": "3WoYYuouFJMZ4TXRzs2zqE9ryi6hHgbQ8R6TjB5kvjshVziM3RHLJtmrdDusFXSvL3gR38FuDrKS5MecpkG5gVRG",
  "key7": "5ekGoUduc9LsmWGFdEUSv1Xsf1F18KaFzdzBqBuryM6xex9ryE1GZdz7pQSFGSVFQBMrHfy9usBQxn6NpB68C5H6",
  "key8": "5zs5BGRfGHnXghm8NcxwutAfw1N57YasYDphanm7zeATuuZkastVHZCBnuBSorQE6tMJtD589o9eySnkcGAGuNj1",
  "key9": "oAGSCX2iwEcamR2HBDq4b3jkxn7itWShMDKYTBARzGh8XwN6xfmaTN6yB2AJnyXKmjuwrinDRyHe3wmvyNBjjot",
  "key10": "ZqbbqA8sbR48CFR7LTDU3rGjWS88KuWWruByMmvDaCpQvgSgcH6Sg1E8kaeGFiL1oYdmAhgCTtARvM4H7esheyM",
  "key11": "4v6Ymk4SK1to6kSHkRA8C9G4rHMjPJ35Qa9eTLDgnJCrV7e3VrGxktX3H3kuVYf6bAPni3Pa3hTax4ZbRDYXKSQR",
  "key12": "5SAJxPFE5x3CADt3gm2x5ugZgSLbHAD4SHr79bgkEh8kHPi2Qcie9aUk4HJEwcWNSDJFoPr9yGzgxG6zvrkHYKFz",
  "key13": "6C7259KUNNMYLV4CXmgPYu111B9bap46fsD3FcXq6isqN7E3w3rz1gE2BwxHorQA9FX9qPSSHndRa79LGSH1tsd",
  "key14": "am1MQRm8gvpFFqNq4tR3p7QbV1iEztW7jF22QUX1RTEYzcY93nE8VfqHMHEqvFNB6gvymzKPU8oi4CfjKw72YBo",
  "key15": "MKUBMxjfQDckvsXg4tQunHF8ygFthJjTjB3YyqraAkw4VSeH7mBFX9DfBN3HirM13s3pEyPMunywvuePi7Z3A7X",
  "key16": "3Ss4nnu9A6bP8BMbNyZt7FGskqaM3imLCPsRQ87Lv7bGtrCazF5bCwGNQiuvZhRyR7G4o56EtrrggHPt11WspHNt",
  "key17": "43orWmxnmnePBP2h9UsFfWG3gEHuYYTeG8eSoFbgg8V8VXxpRQxMUV1dYUMiVbAZrWpMoC73LNEqDbcsyCnMxbA4",
  "key18": "496GHYf2ySdMixcU6K4h8uCm1W7CTe51FivBKxQTYVRNvKK7jSfsxVWqAw91QB9KED8Sd5Au4CRSuGk9R6npbQhc",
  "key19": "2HVc1mUdXkxThCkZdyuLCSYrH8FBFMC4N64DSvDbQGZjg6Q8fmvRQq2DKYdmzxUUg9MRhYxPQhf3Taqkctqvw3qh",
  "key20": "3tM3ZFz9yndZz3csGDVEDjuCwvJvWRD17LEHaCEa98RFk5cQzn8nnqCPkYEarW8gtuQFYphLdyuPwmmQ5vaBatot",
  "key21": "33L7pEvGRX46aN1aFkQuViVBEmUVHZqFgTHsxHHE7VU8Au5vvEsj8NWzdxNh2T2Zj2cTetGwzYH9eNAM1zfxi7BK",
  "key22": "5Yj2kqMZCtPKMKYDC5aGNFhvKSWH7CqLc951UPSLiEFXkajYdHPyR8jdsUJ4dkXeZmzzWEFQogHmk72ohiyu3aJc",
  "key23": "3kwmUpVVGTH3rvGwLhFZw2gdkwpziTecNqM4MTwHNs6GWLGFahJMzPrwcpCrZYT83LAmyr4tj5XupBb6ZseHy1tW",
  "key24": "67Eca2Xwt2vwPjkoFZa4TbLc4b8yoYzUPx9tSMmFyHWeKAbffjCo2oeEQzuTvqBYMFFqWSJVrMSFkFfReuXNLkSF",
  "key25": "5Gvv3VaUGst4A8xRi55npffXf9fAqvMQSsX68VLEC9AX67vZJKijt1fD8Tz6NFbj51rqKctufVaUNGvTgPKVoqvd",
  "key26": "gxhG6p2G4gWf5edACbG8WHo3GHCWCXeXowvPbCAHKaKPE6ahkrcEaKxcNYAKryc8TmSDoJFHcM8LquzDRjFdhUo",
  "key27": "3yZegvvHYac4qBbUVPQ3D3SmPDZDnr3J59HHfHZW9Wxqf9SWHR6Ex6Qwot6nc5ZVEbZ4tudTDzB6JKkvL97J1Q1J",
  "key28": "3y6fvoR4LNxzASN9hAMbG93vgvzAxhU7S8eXYteNVM56fsLqLJ1ZqAC84RrjTTTFfyiszcfNkk8NyzmqNwXVXuZn",
  "key29": "2iuAWKZY6HxEhiJdmKnSNewmTsTgDY1PVy6MoV2WNMfUzFukx9hcjHze1PgpkLKeR4QV5juEDMtWvErbPvmQ77MT",
  "key30": "5oVgcYzM2PiAvRheVgU76ZjUwua7MPpym2Tbz7gvvycBbb5QBiZBbjmeL92VEuTdw6sUMZrWd3bdTiFDixFU4Brr",
  "key31": "3TmntVyctDrWAqvadB8yMsDJQdJvWXAByVHkr6XSFDdLS9FCUdT95wHHAiLNbybWN4VLf6V9YHJuEbqP9FQrmQAS",
  "key32": "52M2RdrEzaAPrARkmuSr4JBQn2NQhuAbaSAFAoMQY26BCnHbmuF2ygNfKzr9hvkCnv25seeYqz8zG5oHNkVtHypT",
  "key33": "3MJCfYSQ8VF3PXFvEZvch44R9k96GfdKA8P2fJ316zyaJTSQMNnbGXZnJYVengHm2PtaPPx8bMepVtcMGWSjA15g",
  "key34": "3m7M3CV2ochrkLxBUiePtPYsbFF39MJMJokUbWbDyPiwHGXMU2YHEq7h1ppjPx6ZmG1cBhLR8fwrA7aL8eV56WBf",
  "key35": "FE521DEdmhTfoQbwPU45DEEpfX6TwFvCZ73HgjSNYCRPusLQB4S9CKbGAiJRB8LDt1zn26i5qoF5FNrawviMk6C",
  "key36": "2PReebU9k2A5vSZyi3ZbMg4psPQEJc1Ya2d2KM2zEyHFMAB9o6wrUf8YExamV9uMDfNoehdcpRBEYAr6hNJbA5tE",
  "key37": "4gB9LzyB6JQJdQsi2i99psnJq8xSmKxStvbLwufyY37UZhWDArsnd9keLQcGP2n7qTs5X6xD1qzFMYBJoKWtENhY",
  "key38": "2j6SHCeF5eTKe6FsocbHtQawNCRPkR47ZDPm5LeavEUWCxQVDooPUrTE5qFGrKmsNAX5neFqmRnmbB9cGeWaELS3",
  "key39": "2tQXLhNYP9t2uwy1cEwhNucAmYuZix31mGA6Pv9Bmi4v3e1V5tSvdcyJnGzNbsvHpHn9LWjWnrMWVSFk9pq67aPk",
  "key40": "jZN3BKNFTvKsErwrHcWB5PnF1uf2MFReMUPvKUMdscTXnXXNEGvVjMSSj4sU6jc84KHfyx8m4fDJteYM47mpCTV",
  "key41": "kkES2ke5S87kifVkqQwoPHxmACnGEKriFuTV5T1MEaS26N3NXV8LbXLZ4dKv2oAHFgnUUZhrCFHmzCqzpc8M6S7",
  "key42": "2Wk1tuKPQ9Xjs239h5eC86H8CRUugvz8K7cS7TVfc2HEAMuSLAtdx2BdZb5Zu74eW26a3ZPv4bndhdDDn6B2u7u6",
  "key43": "4MWCaiE7VSN2i6UWH2Y4fc16qV9Dcp9indLXwd2GoL6ReRTrV6PTY27nYzcELCvEtNWfRtyTFjDF9MrezMohWjQp",
  "key44": "61LJP2dZkoQrXZEjUMEz4VFRiKYYVr4Rc2jJn1Hmao22gaKfob2KN8cJK4BxcHYrZLLf4KKuXsjafeYFGCwrYumF",
  "key45": "3oGPGDU7U4U2Toqn4ybmhDRLonKcEFG7wijrMBaQFws26pEVYs33nBrR38WsvqJvP7WnJ2yBLTtpvx7JTYvrVKpg",
  "key46": "47kEDNAh9C9UfMZiwKZb2u6ZrvtmmZC59r7zzZDvVC65s9zrV2Z3G5UjbmPfKSP8NT1ww1W8ffUaKgmKEyEspBYw"
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
