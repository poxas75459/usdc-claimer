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
    "2AFELRD4rTHSp71p5vCQZps7PFT7w4erVjN7bwisNt4G3pvxE7FGDnMKyGntKJpQWhCUadiTGT5EUtGd5JeWSr3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFGh8vEqzJGBzbthxKabfkEBrqaWzjg8DhppniekEaKAB2xQ1VqQokaQ1RN2VYDZLRF1jarQFw9kMF3GbxfUXrt",
  "key1": "rBhhU1yniun4KPPZmxVHzS9wdVJkJsL9Z79jtfZUz7iqTVXS9pdYhAqzcs3TiXicByp2uXEPmXjeGPikRzwba2B",
  "key2": "33qK5Kbce9M7HNKSj57kJZosPwsjWJZQXdbBTyTAjXMvN1tZk1rEb7XsLGUQEc8BDLKarNLMMzFFLfCr1egQ3hZ9",
  "key3": "27oHKKsWsMxXKcxCcytKwK1qtiAx3aFcW68V5c7VsVEaExqtD3eqEnjGAA2LopW9diBuNqvG3sS5fWK9kGDipX9v",
  "key4": "4YYCA2ihtWPbnxsY3shj6g6CoyFJmxXnyN5UvDBJx4RV3iWLBxnBqSkxSaZJ5cBNYCxjevmL3xML3yF6ZRBAF6Ut",
  "key5": "WQxVi2RtU5GpYe8ewP2GwFsBiAQX2kbK7RunaEFYDfr47yAu1ZUYnCAA1gh1CkBEPJB8sdorHCfth8Pz1VaCX3m",
  "key6": "4FQnVYWMkvQYHSrYCkCb66QVM7BANVzWicuJUazVw5DWqYoe22YarBiEvsoeJFpNkxcCHmpzUae6ZQeo15GFVyRt",
  "key7": "zNGBZFjCKsHvP7XoAAiAi2fVy2R663ZdDN5CiwdoLmsRmJjBF2cABydtfqHBZNBqn2MFA7CSa7usFFBoPNK6tWN",
  "key8": "2kYMtuHWdasRkABBhNtZiznCsn5u13UFnasEHGqdCquug4VKhGipsghpD6bVbU1wGiLyNNi611auxWuwQEaYPudm",
  "key9": "4z7SqpUdHBTVtsAtvcCRb6GPMhCAzChEFZRczwjMiC1wNhDV5H1g68SjjDbR2nN6hMKEDrAxcXVMhKB7VR367vuA",
  "key10": "4vtLMZxifVvxruaLiaJnuxurSbvX7DPoKgML4TgecoEqyfgConNHkNGads9EVRGRTPjv6wCZiHBuukvjAdn5LVyc",
  "key11": "2mUHtNtJ5TbuQisSjtrMsxCFQmGd21XA8wcPQarEQzm5p4Zmus81GZxGYBVG8NpQmy9Lvc2MakkMAeMU8qLMiJ1c",
  "key12": "5Aup7hyEtfrNBH1TmHGeuB1umK9pjpAYsXCgqpwSReNUKyUFrBXhvNU1KbPxuWVhfcJXP9ohidLr6skcaoYfK1Dk",
  "key13": "2k9RpjKBBbuBKirb2SXkSYeqa8xcmaRwLkw5ViFQDKTU3SfvJggDWDvjmK8VKxreY2UsfnEaiKqKqopkd4DVsnzt",
  "key14": "3i1Ed66erPcsYvhTey7h2h6QBiu7mr8WdUDi2PN5V4wpvQVa5Ltwqjz1NDzFrNur7hRK5FzX76TuhAuRBNxBvGir",
  "key15": "4M6NhPHnGoiUGLRrT5tjV9wwNTcMSSSp5A9yz6FxzCRBoRp56TNij4DdV4RG2M94FHNDyBL318HWup1pgdTPmrRr",
  "key16": "3BP3BnZonuKUra4BtEBQMHHNqRyVCN2bpUtypDDw9FigP8Kv7Spr7VKxk4QC3W7fdx2ZM4X3pNjgS38Kfq4McAn",
  "key17": "21ZtakntJRJjPgswJPDUsgTYenwZ7M7rNjHaqqCyBdCriKxCiYFxFY6Pf9THiYfMqBp5MoTnCbM3bvB2TaEiMMzT",
  "key18": "3hQCNaMPWDdGN6zfD1m2yR1G18DvbtwgGJ1L6hrTiDXpowrHJwk4S6MauxZkaLQq2m3pd3SFNbgvJxbUoFXzjrNh",
  "key19": "QUxgyFFLmXBfHZoQV9BjPd7jt1WDaWaVAFoS3oMpzv3pLG76PDzssnEV1EPVh9XEVzQccaLEXWpkqswwwGxWZ6P",
  "key20": "5zbGVgMvUKBq1UHBbFHzv8jAHsr1v8ntZsGz3euYHMNFUSdfH2J7V9JJWNHDz5BsrYEZ3qc2t76KiPwwhXYpZ5qh",
  "key21": "4m3FAAC8mDTqP5WZoegPzLHg6ouXDEQbDN57rQaFPUcaZXCh9CaBagWxxTRHP3TnzbRcLmtoeHwFSDFMP8wa6vct",
  "key22": "9YsejFuYzvmN9bqzv4fHiUcQx1vzoEMpURK3UZ6EwyJTneFNs8fTfxe8smfagV8PT8mgNEcHojFBUnVMDA9JwnJ",
  "key23": "4GWr4n7oKbQZXJRxTV5DpXJGF9o6FqzPzCzh9A9bRjJEfw22pSRLmT4WCSXuga1EukTPMHmA4Tyn46fa2x67eEKC",
  "key24": "2Ci2ZSxbUj5EBbuingEBGffDujqUC2frc24VWfbN5JxtWdiJke4VzWWYrmDrvuYBYVY4FwfkBqNLw1db6wXd79MV",
  "key25": "3QAsSYzeWAwR91kqRbdv7RcC66W3N8TAoaenN7mV1EgwQyXd9PuvByLfzsN5UDnUgrHHERvKABCPZ4JyEKE59HHT",
  "key26": "5i3B3riWYmziEqdzPihZ863cZXm5BAPyxndzEhsc4huxc8Bmb2Efh3JoqUgn3Be3hQJkXmv8aiZqFSsF6QyGPQ7k",
  "key27": "28uudotgiq8oRDLZtYuTvCfcChZaxaBafPopTHxi9ZZi2w2m6kTbwrCfYf1ZH9HsSUZiHDbbujWzcTWUMc81piVn",
  "key28": "2ZsjYEzbvwYvST3YRdn1CExJpy2gSjyrGvxDjcJ7sYGWVdhnL5ofTBUGJVyP21Hiq4rbes9F9xxAcRzApdE6s3Mp",
  "key29": "3F6tWbjX5qJ9fDXsPKH6A16ZcVH8zVbkyKYcga3wfgEa2PXymev847dH9hh4hWfgZMbB4qUZm4fdJqKF1ufAEVS1",
  "key30": "52LVFse9WVBZef3LNozbSujTX181MmhA7wEZEqs3F72XwuQzSVh1WZkCioSw7Lzwg97ZQCE18BqdfvGgpCY8gRBV",
  "key31": "29dZnwrQdo9pXW5B3kFcrp3P1iAH2yw2dKfrvmWP3odeBJhuLYQdYQucEZJhU4v3c8d1aPpc6Jed9yExwMYDAjPy",
  "key32": "3oKcS57az29mYyXLrVbi2Y6kBZ4xmat7R4rESMiFQcK4hhaAQ2wfU6HgFW5KE21KpubR71KDJJPaV56KrL2sZ85x",
  "key33": "4y7aGwoByVHUPEhgDvKY6XhEbBQfZzET1vswWKjDAzUUPdoTR1T83oLxKTHkf3iyRmEowSRqREZFGa9uyy6if9yJ",
  "key34": "2kMzrQJowQB1ZKVkK4zfSUNPv2vpQUfWkykjy2e3StGSgB2Fn527wcY5HJSoLWJu8aazGz8Y85D8kiQR8uBLFqAc",
  "key35": "4JMqewdg6jKxmCjAyDzcCgd27LYBynL4TimKCTJAnFzxydGWBH4r6sXewsZyeqi4RJX4MeZCSxVHPfk3k8skg7pB",
  "key36": "GonfNwUCFy1V3EyodqsmVhFiGiQ6WH5vRFijFTFm2YK1JRjNJn3H3PhjkCtxFm2VRgTuTy9gExpmzXMsk4Uqp2U",
  "key37": "5ghNAN9jV11XL2918ecBB1AuqQXC7NeEATeZZ5VN2CNfztZwDAnRtLrad6YTHCqHWdocLfFqfvooW1WLZ2UC8Bc8",
  "key38": "3YvFE9fgkiqggt3duHQ8ez22qXnvpjeYGrabcLfAJyXoiFTj5CzNzSsHTc2hcXaNsTGTeHn1KswxSAUcrLgNncDy",
  "key39": "BzNkphLhy11eu3NuqhmfkF6rPkV23fVegLCyptYL6XMQi5Q5hqr3wk8ozNp3tnMSzKKqmNYs7h1zPBwLRobWcbb",
  "key40": "2QxJqt7cBvN3BeYRxBDuQHWxLADvaN2H1uobC9JN65CxBYQ52NshjjyKG8x55UYhjJs4ewVDF5w4Z4sTSuRNUUdA",
  "key41": "5XALHhzJCyGnSMpSQcRqMj6TeCktwvVRpVe8LXrV2zWd5oy5WCxAgxm3VEkBfyDHrCkWfq1M4ipnUdHpDnbAZ13F",
  "key42": "2PH8tKTEK2wK8SRYLrTP3XAXM9zxBTdj6cp2LfT4uZdeUVj69MSVx48QKBnWAXw9EDd26nogb36316pCqCMjnv6F",
  "key43": "8G6UpsADKc2rS2CUh45Vdc7qwkfgd7kEWQZADJySx5M1Zvvt1kBk2PUPqQ3vdgaEErGx6VhD5PtfNaRkT3TLqu1",
  "key44": "4XC68x4pojPa1NseKApY2TpEEC1ucijf2eKAFt7zj1h2rPU2Mygd6GdWiFC2my9M8d1hJ9k94k615NVLVVECspUp",
  "key45": "2P6MxZqAe5s1fU6M4ZFgpnPQxwD2ZWm7uEs7H7tMdL722W8nJTdcHt6Q3KL46yjeiYfw7bWbSAkeYTGuJ5mu46U9",
  "key46": "2JnEp6CGtRgPr8quCct1RdzqYVVeb4ghhzojBLUxZjAV1DPmfPMHjhukDacvNeiMaxAmMqK6nSTGoN23yBnmg1kH",
  "key47": "mY2d4U2HCEYKXW8J4Uyq1gskKDsCUUmrKDNksHXixXvCWESQnjcW1cbaTiJ6BjP8cqqPLea5MYZ4akbahRYPa7K",
  "key48": "PE7P9panEc7Pe9WQvLSbCW5qJM6vZGWMfoTS5sTWFzkRDoHFHkKfNkphGWAtHrWtnoL8qXz7YCNjyaWAYoPa1Ft"
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
