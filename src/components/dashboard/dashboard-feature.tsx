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
    "4YtGhJ6ttG8JwqwtxNWcww2WEkubYsGGfxxeh3N7h8DHGie76wSJ3yN8cetjzLjG5bzw32CJT1ZVRwnUpwjsqXAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4earL8EkVYNJx23bRz3CUxpTvYzdubh1GGhrRNgRTyvjfXiwGwtw6XCh1oHCYtoMG9ZkqjgezzNngouMAWQiAA9A",
  "key1": "67X6y5qQdmCHi5gU175nH1ywggMSCugDVzJiLocxU8Tz2BnbNgCUnvz5vdzJR9YqC9K2swhTHMwQXoNj1CPMu6dJ",
  "key2": "5pCwVe9sWsWWq8PrWDZtRq6QCxd4mxnqFohEpaUBXRD3Twh9nFY4AVewiantw89z2dRiYf6yFe4axNmnBn2BzJwZ",
  "key3": "5js444cpagFRDQZVzayD2DTjAbiYjHGFMLvcETL7DX1tA4ha8zuNbXGhoBV2RhsiJ6McvgQFKFwpQbG1jUtBAsKv",
  "key4": "5Nd7WpNsDDDKrXj1Jag77sHqu6Yq1z7aUUnpdPDQpY2BVfcGo6N55WYLMQQiXmbksZYioXRnyKvT5YUZajTqE5z5",
  "key5": "5JQkeytiHTLmkd3pM97h67LFZ41bRoYz3B9mwni6owKPtF1jd87Fe8hqWYbboEtPUHe45chmzjfXKPmh2yqijtrG",
  "key6": "4JibwWHvPsPnNpgn1697WDo1dxjVvxDjmuzXpQaQZ7yL4SFWMz3fMjySFLEk1GLjACqcC1Fq3QHSKTq3pFL8GaV1",
  "key7": "5G1LcseRxbo842Yx6xoJfb8tnXjfXZh5ukvewggQQQEV8C3PTVQ7bjZyBSk22QxG6Dncv6QHbj2PLvdhfs9aFfPz",
  "key8": "67L2jMubUz1f89t5tywG7NnznT4445g3mDNWW3YrMfVzZqDPwbjcBnmBEb374v3c8bVXQoSgyrMxM12CaGdTF57b",
  "key9": "4LCM3TseM9YoWovhyz4rSXMoYDkYSzzc5QXGB8YbUiVMJy8wET71oMX76tMtCtUJbDKSewGtBsVReJXqmsB4gDxD",
  "key10": "2zheRcg7PgeTUd9CrmZsWqvg2zySTSjXU6sinayC2NPiTse3spMNS26aiSi7XPrFzfNyZZa6s1yLjYvcnHkaQyJw",
  "key11": "5j1N5WR4wHxP9VvAX3tt2yJUHQYDEKiDYFsDqJ2NejWS3ebjxH7xC8rrECSSsWpyPNzspib8e56yV9W1yWc7yUdi",
  "key12": "2e8DVx41eDTHjDKnHW8vr9Hcfwu5ts6AaVieoa7ibd5mAdXKkJks94KfjdjxWhKrUAxr1Gw3UKhvkTZQbTfHErGb",
  "key13": "SaPUxak7UJtAHGiBU7BN4h75yi48N7rR33LeVN3kDLYTwRzunctYKE2SmNH1SRbGF4LYJ7SA4BnK9YPnPmkuv8h",
  "key14": "3kdxVJeDikMqXVcJUoz9s2PBCWC9A6ccSU5gYeS2TVnwWg4KBFYLtBbbU2kRR7hBPDzpi1LeeENPtGaHS7meeDCG",
  "key15": "24EAniPrwBrfttvyRNak77MAProhFUWg2mqC8ResnchBvTqsEaWLjNCRd1QkcdmwMiV5nvK3dNQsQGoQEcJGfhKz",
  "key16": "hmYbZeFAoG5KyYa4q1sVQ7DsrWWjUEeBC38UWFk5h6KHsvKMKZSPbVdfqR8eucAhBXfRF2ymacwQRJrme6UEAdt",
  "key17": "455PsN3ETEXoFjQ2NJLmZUUR47Ym4A2uKe5DA2iYRXFgxcU95gbuwzjJUVr94qEg3sCxArC9USjNk6KEJ9NqggDi",
  "key18": "252xzRJ9nM9VdyM2JJ2bVbEzonoShDm5CaxssiQkRYhvSDJViFgFi1AsaGuHPxPsownj1SwAmgPCWWdUVQ61VJdQ",
  "key19": "2H7fkxCYwaYRSs3GHT8zAv9AD1ZLhZm56LLoUDxHuqAmynrnHJesgFJntkLNbi3zoBW6dzHCFhbHmvNq93Wtu7HB",
  "key20": "HsoofqmBnFMfdxff5Xz7vsobHhAtHYyWzYMY3fKWdnGs1dTGrh22Y4tWQ9VoYkwUZy5HdqDgB8HvpVZwfwGV3g1",
  "key21": "3nQuN7TyoN7yZXZu552D1zYWddzgDKT3BJeLGRRt29HsQx2oVdwvuZsmotBsQLCPEi1qxNXFpmtqtjLY6kRV4FhF",
  "key22": "2RsPkNdCZfwT15psbwzdGdRQWZyDa6FSnCpviAz6VTJquaYhjxWHWjNbNxgg6xoTh4CWtTwdsMUS9sUeGJAiSqKF",
  "key23": "4DpvHpiMKuXR4eF1fiDN4rM65k3GGfyatGZpJACbAraLNWetW6obrLdhWtgkxmEcZjDVJj73jHDjuYjo8jXM45N1",
  "key24": "3rWBiLcjnMouEPqsCQpJwhSFb6UHVuiZWGw5FUi99NqowjoHiZLKvpDvinbAFi9gTWTANbWPYDHpR2dbf1j4YMm1",
  "key25": "2zxaxsCpmiwq7aM9JaJyY1tVwGeei6XHuD6AkJJCrANPnubu7vPsdUwo2CgoE9tKHxDK9cYXfTX9sevf4Ad1osZz",
  "key26": "4VoVijNsjq3awEXSJEUtDDrtajCq3dGF3NKeDcjUZgDyNz6Akp1EBQUVVVNSEVaKieRZnt2GvhEWjj3x7c2VCjSw",
  "key27": "2EBLHkC4dqHrbDqP1fnDWTC2K8GTeZWmDbuLy2UUCdevxtH8vbxiSnaRhigCJuKjgdNGNfFHbTxCWLKK55UeMkEw",
  "key28": "1TT4UgicNL8QcLB3ZCecjQJe5SHn7Z2XDCxqRhBuo4TodYUcFJJuJX8yE82EKpd62Rrg7vcPo3pLEwGpgPd8aJ1",
  "key29": "4V536tRac4Xz3AZ382JnduFfAnxXvBwbcb2jBxKEPHWcFKcZGtdaJwE8vooDNf1dcDUcgHoRoJMqNu9hrQebEiXK",
  "key30": "4F3KGKXcWiVwX3vJvBkgqoMpXyfZaPVCoh692F1oaihfod1hyyvzUjHk3r1ZDNy3SaP1qvHQ5n5wznCmmz2oYSX2",
  "key31": "3nJtPZD7NMkxcFMd7TbsAQ3Jp6Kpz7QfA4e6dkqGURNB4jykP6CG9KgzRK5biJCF2Xijk7ZohPxdtEhckFx8KDEW",
  "key32": "yiHFv13LXQToWVnCq3UTwojHJ9SvMn6BXiXQWoeum6iUkLeFQbWpAAh45Ckkpbe8gw9apwYa2PbU5V9GueyuRnh",
  "key33": "5FaongRnRxnEzXjaQNkzBPEsHb5bWbj9UbT2fLDyfCZCyty12NHTwFUV5LR2nBE9S6VLNGVet1ziHGZQ22Hf2Gqs",
  "key34": "5hAb8qGBBrZTb9ZPRTnDunkinHfvpiBMK5GSXFhGBLs2bCSrhFtW1F4yGXs1Ly1BcGHJN5kspTx9gVd9u9iK3dN",
  "key35": "2WqopqP47AsZXZWXa3DJN4xqhcQdhgWrTrtURxvbnhWeZaGW42jbwa7VGSoZCiYinQEpV6T8pnjwRmtiqsGkqUgD",
  "key36": "2az2PFNof1RaZn5DdvyXxggSsZhN7sTnRFyZq94j5LmVpFHHTDf4jbrBvRZknDAXLhcfUSfPGSrG3RhWr7mt4oFv",
  "key37": "3RnzpgWXTpaaffxfsAtei8ueYyEmrH1uSN7NJfKCMZJ6XX1wQVdkbdrbACHDGGcrFpAWqfppiYcUHdEsWkpEMRRw",
  "key38": "3idM5fDYKnG4m4qzJ6m8xD8GtHN1twgzxhqQJFRCwqesjAnwyCDzTQXCtZXAfSXzjcHQgAva3DAu3oaEzess8B9J",
  "key39": "L7RLPySV2jvBLhQGEJkmzzWbikubgPJ9sK9gbHWH3i7VKZbw66Rrn1P2aQsKeWNyeZYULCwAV4NPpAddnQrijZo"
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
