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
    "3evsp1D5zPc7fdEap3EoBfg5PxJKucFajWPDccQsmPgwzsNB3SjjU2egcMGzavc7q1Zj66Su38u5S7t5dh3t5hK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJpp915wdxvwYs41d89XrGHqg4A5xNdbbzDUs5BKJU3PCk8rZd1zUtv4SYagaGxR87tiyfRonCxr9tEsQvLDjXZ",
  "key1": "5xRYkGvM33fhH9nwViNHp4RT1tpMdGX7cgxAGkDbpkLWWTyw32e5CBad84nTm1K6HhMiAd3bedffM46m1nEzgYxg",
  "key2": "wTARGbFhtzSHFk2L1hFXPaMN1EewdhbHANFKUDEzeJUfAMV8LpvMandTcZnmLCzhrQ6NvXWaRzNXoGpk26mjCbN",
  "key3": "2GEVkJfQ9QKy2zGcMs4EyvkbEX4oRCDwerZtYTVEnmtL4HB1xDJvet84hZYSiKubNMiReuMEdFp3KGavZKPqbaF6",
  "key4": "2E9rFxt28ZXxV1X7vsNJ9DQaexRhK8w99eaYsxngexNETppgFZDirLsN4AAdGiPTgb8uKxKQdMhWVKPoVeWyKmi9",
  "key5": "3XXCGopVBGXGpU6KotxXiPJvYxVN14rpQvk7KCQQgQZ92a1d3gWMVgETugq6gcnsxxS2DH2a8dZdQqLzXU1zuuJG",
  "key6": "4FJTyt3UYt8WNjFrpV4CB4kxXmsvJCRVBcs3SRtPQjT4y6TH48oLUtc6zHZJbDUFHjHQJm5LURtqHKenSZSTQPeF",
  "key7": "3NCt2N2CYe96tTdZ8kz4HZpoaPTuiPDuYawVMbodduiW1ANyweAa1EPixJPPB9rpNV4LMtLbeFEcpRwugeMRfdWb",
  "key8": "5spgWYxyRNn9My777r3oyhXLFjgjXTpAtoUKFSvHReBQaWmN4NRkMa4dXA1sVufbSdanjwQqDvgfjTtR5kRRtbxU",
  "key9": "5rEsgHMwiLXRSRb4wAw6umwKABhLBh6iM5hy5iKsZWE5B4aQBEfKWFRAgRBjLBrJJVFBVSrywaucfvY7JpMWGAJK",
  "key10": "4LiKgkEevFvW7tqRvyDsVbXhYAPVtPZECz3VKSShcm4SiBtwyUnPy2Aasu1rvYhuMJwEsfRZjoXbZtFeAPTGgQG9",
  "key11": "3bDVobCUKCVc7Nzn1rXwNiyma5BUG7D68n4dx57RQjVFNADoq63wuheTVZ7mYEd6W6Vxd6gsSb8p1QbJAx4kmaMt",
  "key12": "21SREf3QDhYvLuWrqVqq3vR1GikYc23w5UwMptYiApb1XauiFtiTZCAkv41BYqWv3oRA8RspY3VSQw1RYPijqE57",
  "key13": "2q2HxvA7ymiBLxEvAEGpQgy4bSSLZNa4A2pNQ8zJYs117gKbYRKEGtRrxpjrib3Pd5yqrewvSncQwbcwfBYNrKnF",
  "key14": "5zG99seUFT8F72LyxQUXuxqjuk29pp4uo75Wj5SNFsc5PZnRiP5rqykvQzdungmHu5zUPJMsfhwX4DhHFEArtX2i",
  "key15": "59jWyvA1VfZtxqkZ5WBSR4MaWa54iq3UpyYditfLWmtLTTvum6P3GbLnPTe6BnyNK2EvrqzHx7NV8q9KSB53fjuv",
  "key16": "496K1HWLDCUQkztpRGWLEsX5miy2uKfziYzXmNz32yjd5ZWxG45NLX4HarGuV2ypg1PEpC7ok1fqw83s9H6sQTyd",
  "key17": "3ngPB1uATnCt21maWEZvdgB1b92ZAwgs8qAVZbd3f1jNzycBzx8W8TFUaDyg6hCPYXp5FGZZ9rvpyjMi3W9WWFYz",
  "key18": "3E2ptWwgYELg68XPWJ4VEm2fiwiTN4Lgqz8ZMiu1YF3zR2riYqjMF4oxpEMn1ZTFgGBv6aFF8PWJYFJH5hH7CnCN",
  "key19": "AquMMuHwjzRmGcW11N98ok3k6T2mPHZRGnWZbeRpUa1ZfM7ifimSRi4wrZJcvNETepfGsY3QWeit4jmQnTCzSqU",
  "key20": "4q8vKBShgCFY5VxwCe8cJuKdVzduwgEViPMkujDsUMW6crWDptjB9xwRUvdiFttZzAVX8GcAy2tiCPx49m7FrsDf",
  "key21": "63UcaKi9pvwiwmFqs4kttby7HsLFsbi8HsPt5mX632RVwu1xVVa4AWBf4KcHRHKMajsnryZyHF58oKG9WcCJQPZv",
  "key22": "3z9doP6L8YopikkRbWFazoVre8GmWzZgPNtiHmRzFUXFD6uu5Q3YKBgpHmjrCJED5VZXNmSrp6ZNJJLgg4Br6CCa",
  "key23": "22Ws28S4hztsV7nHYgJzTkDLGcLP1qFR5eNEDys9pHqnSYfmaRNiDLWSUWR6febeYrLjDYdY5hdiGmweH2BXwDaP",
  "key24": "2b55qfnpLPYRFEfg1bUE392Ykbvc39j6kavK8Wc8jUgK4G9hdKPjNCf7rbySo8VG5yFtq5hhFRBsRKRzsFHq3m8m",
  "key25": "3MbVFEvwPfZQn1GuLT22zzjoJYRbpnTsxUCVJ9vjb8NPPgCGrqBGezev6RqBP19Ugqw7d15gxux5zrLEWPbKJ31r",
  "key26": "5wB79oc6WGKqWEBBGzvhT5kG2hPcuB1SuDipEXy7XQiKQMoeBz3uFXW9YAZJeLvd4hjqX9APXkAD9cXaK9opAy8P",
  "key27": "3zCyEC9Rsgq6i21LfhUG1fcXvWQrDBaQKAoVCTnGEnCih9ZbUckNFkvEqVDgjYxBv9emK9H5zZ5zQ2Sa2KQ5WTrG",
  "key28": "542ogRTJeZTz7wBBJ91Z65adWRqWdikiiJwNBdcnzaB9JgVMjknTC7tmdpLbjwk91irTnUuvtkc3iYMpddQkGxa",
  "key29": "591YwEyknG256UJaRr354cyULWFPUGM9CPD9V3nzcAYxDr6QGbFXqxyN1JZW53Cfkhh14AopKHiJTGUfiv3877BH",
  "key30": "48Q3oUsHC5bjxWvxyGW1vaEdthWXF57bZM79amxeM6CZoDt3c4baoAXq1TexBWreeu8NuTe2friio1NCJKi8MSbB",
  "key31": "2wD9pUU22P9LeAdxdPv1rC1x8ceKoh7GHY7sk7nRZnGi9N6npUv7EPXW2CbWcZ12XyabDTF6NqZ8izbCsdBFCFCF",
  "key32": "2Wis2q413ByoGVEh5FszckH4FSNP9adhFcko6Q3zSMQDhUHr3iH5f5U5Y627ugg7qDjtnw8iZvEFCGbbSRRPvdSS",
  "key33": "4kdSxBxoEHf6TfotaB5PzQgvzL8uU3yT6VhbcnY8fbFZs6EwtXZu2oyguZrzy1ARH9tvuJqdujXiZYFhhRHvGnTM",
  "key34": "5UEAsvBFjSNtqqh7atbjEXjMSghegowCTYGadMWyJo2bG9NS35vW59A1F554wcP9j3kVZBhdxRVyctgBgCn8FoNQ",
  "key35": "4nBK4vF6fWmqTxuBZHHvpvKuUFrwmmCBhowY8UCF1Kdgxof4F95T1jGsGDNQcTANGSEeKY8A4rV9tvPfHHhs89wJ",
  "key36": "5PWkzbunGiYCW6ZwErUjKFFLkqFBxz2WJcsnUVQm9uzLs7gDk1P7abhxawmQR15U4x4mCZ5QnQiaFKci8vksTuih",
  "key37": "3UPquRLH7JS6UiaFPBGrg7vQZnfAZqXB9edqz9oW3R7fFjhxuaX13pWoMaRmKVVNPaRwPahLVLdGB1hfukwFUh63",
  "key38": "3th2CFH4cM9GaeTAimqe2EUGcrqJdpMGtT655Gz51hEHrL3d312uyL3re5kCqpAS7okPy79fCMfS3PUoVkbE2q7h",
  "key39": "5FLzhWtVHZakq1FTaNThhgS7sB8AiUrT4wbqCuk1BLUPvQqVSwgzf1Sy7USc3J3YrU8zi8pHZukJiQn6Ejb5h92q",
  "key40": "2pKHZh7U1FSCK6onxk48v3K6gH1RiPd8Wu9GTWsLpYhGF4qhoQ5ycNHh2QdgDj1cyVRUV7snxpcEf91mmM2qb654"
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
