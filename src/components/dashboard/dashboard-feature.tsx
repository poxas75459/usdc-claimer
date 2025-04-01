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
    "HZwwJ2vSPCjaJExvF2rNkNSDkJ5w3zMDSyuwAxK1LMK4xWiAxKmWWpPwo9HBkLAVzzeJav3CQxsLBm81GELp37a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pDg6cpZzEgns5gMT7gSqXf8crEtB6W8iqeiNZP6dvvutAeQJ4ey3JvNMXffvcuMcchSgSjBVVvnA92QU1ZohSk8",
  "key1": "3oegG7JszEYvXTwAaoeKguLcgAJwyUUZQiQzrfqMvSMKaya5CdE7bzirySLnDDiyaqSUzuoqi9qBWS2yw4hL9Pz",
  "key2": "4GfU5GDD5kJwFfNjPj2vK2RR3mWpF8GW66ijgReD7v4tnXS5KD7jjHm8zFFc3neBVykB31M8u7T8V9tmrvkz7aGn",
  "key3": "5qhzHhCqhmhTchgaTyNiBzMdMZrEGUBzWDPL7rKZyy5LA4pFkCyW88KhVUCkZUeDzQHt2xpyxuFSHWwaqxdBq1AM",
  "key4": "31Z25RUtuhoNBEHg1jkXhSVLar3Ckne6PQqa4xNLBmyFVxQbCGCYQHesVL9fVjFd8DP7FF7FqriiYRFjaBKZLK7K",
  "key5": "5GqRSHwVq9j5sFCzPrLTG1rnTup5KeXtMnFN7Nx7ffiAoAkrxQVy9AQxEV4n8dxRM8gmBvNft2fDpSWTWLLZAode",
  "key6": "2QTWZwiDqfvGfQmwV5v7MncPDMKsVWcaGoDn8FuHrfasm4pETTmzmCTdGHHQ2FwKvtSEkb2ePLfGsnx6AkhgiCzg",
  "key7": "3dg6XviQKepQzrsNK7xwXCrRuFfSsft12EjHfsqq5TfGsNLrgj2FAxHdmfhSxm2r6ReAgbzgvBxHtBMTQhWH6QEr",
  "key8": "2JZFR8mSRoHVdcdfbXSUtzb4EcDRi5tCcLEjG9FAxmnSAyFnZMwYaHNaJE7PjXFsN5UB98UMdQTSP7Cja22AqGC9",
  "key9": "5axtGkhMd7twrG1hN5r4q99KjUn5EW9h9JFs88KyTHHS4MixURKhne4fiBCwaUcU1sVvMctykWWmtFemWBB8aHvD",
  "key10": "5MXFpiiCdySgsvdk4wP5v8JdsybtHhgpHSQX3sB7BvNNFCs4V1Q9GmuU9WZACH8PrEfNDiE8FXuJcGRPXfDeCdse",
  "key11": "4zhnMXLcHwKF8ML7iqQ5apyX8yeXyYpB6LYZGFjgARXWwPSs9B9yYDVAknFopdAxd5FmVgbdYYx3DTRx6Nw4TrUD",
  "key12": "44i8Z6TwCX4ETNFD8zSveuF9XjtrQbVQQCZY3BrHeV5D4Tk4y55CzTF6Rme5NYJG9LbWLrq119hNoDMpV2iMJPs2",
  "key13": "cssbhjDSPrxKoUVStEpUwTUWtuJaRmh6SLDb9NqfYZmBaaoiiDTEQT9SndjUpdis8eLhUNU7WmRHqVhQU2apPNd",
  "key14": "5UgUmsdMf7YCuokLtHxA2ULy3ZZYY4dhSPuCvDciQnqZLazSGyCxqT51yXKDdP4t2SE4ZZBris9atir4AMfm92H",
  "key15": "5ozkcnnHmmRcBycC88QcD2gKFLyGWfba9Nj7VQF7EuEuk79UYjeroKVyJ1533r6KKQkfvUkNRWozM7MwpnYduhzQ",
  "key16": "xffuXeSadEZDxGBBtUhTntGn1YEpAirr3XFBGjWWD3tfexDdcsUUurMBvyJsg9tQfbq5D83tvPVdvfrNn3D8pZA",
  "key17": "4R23vmh2npYkVV8j5kibvXjqmLPFJD6ZHNY1JFRpGVgQB5KAfiAkrvorCkHmfdh84hDSq1ETTgS2mKaMnC3dhp3d",
  "key18": "4aajgLFe62Um4cXirbJ5KE1zR5FVUZCZ5Qy6ffM4YQd7rHz1j8SZya9qbnPL6pUxbNiLWqUcUxMkhTF2kYMaphgY",
  "key19": "64PmUoDutSq6CJFieVHKVM9DmmgsEnr5fwMPogFHwyPko4x57AfTi3gmkUttSFYA6DLwbunnLMnyE29MhCmX32EY",
  "key20": "3sHctpLgkjH5XB3L8ac4f44hgaFZwKmTctaCSEZWdNinQt96qb3aTR2RHFDUG6mrXbyS8Y2mFBdogWB4GeArr9Vg",
  "key21": "4yzpngj6zcNnCyxqU9fkkG9cEsJEZBoBEkVaCez6rWfoWbAqZRW1er6Xbas7jnBSFGyR7TVody8nRum99pdoyNZS",
  "key22": "5fyPNrWcxBt9yTa4bdUbVrW6hPCMLRyT3Kh1P5BFnq17mwdqbVdX4DifoS1GsyGnUK4kLDTm2pDAHDXpnVRCfw9o",
  "key23": "4L3HU9Gsh2vLyucL1R6cddchYEMXXdjxa1LcqWS7T3dwXfRHLX7JPQzdnXHaQ6BsqBt482BL2k9Raqqr1vxTkz77",
  "key24": "2kccToK9d8P2NVJcfZC49BwkthTpNnkAGDqTQAxKTfHugMJDoE9HHd5Q76kgwssR62Ebsbj1YmBfMEFDNp2K8Z3J",
  "key25": "JKWhoJHPzFg5pkhDGy11LFWmZKAFBb4STs3nQeyBnrxJjXvJ5c8rJ5SYqJghDWNUhinTfLvbBaMCM2NLvPkjBNT",
  "key26": "5PJijc3sibGyywNVqAqxU6S9UMF3LbJGeUher2xLciXwV6trWkxH4ZLtovZj7m2FWAyZA3ne8LRThFmJwHMnRQgf",
  "key27": "3RhbFkS2QeWmWnrBKRDgfDGWppEaZ1iZbpkw3pGAEda7kS9jQahT6ABYhwv6zxvkZYtGnMVp5HTnxNCLZkiAPin2",
  "key28": "5SgxAwa12hsECZQu11vAPY7j5j8VXhgGtfKkAWs7zuk95tAtenm95Mktokn53uxwPahVEHQYAxtrYLKH5gGW4aRM",
  "key29": "5Tg9HeuTAkZp8nacCG5eSX9jdjKTdDX4KPw9d7YoEcAKGaedUzHiLNZSXgdzWdHX2t998ETrwGMXUU15iE6Nc9Cz",
  "key30": "4CWXk4BxZdDfNAvkpN4t41JmFQiwnJCzBYX9VzkRyfjgpKkBE9UYeMSJ4iPDzQteEBGyQPUWKY9Mi3m7qxVfrpVA",
  "key31": "5NHFGMeJXRBBfkKKG2opi1bKfKbCi6f3SxJ62fKoyVBjAXeson1RrNEqZvLGu963z8a3yBWnESekdREps2McD93r",
  "key32": "KXFYrCJr6m9yG9qSn9d3TvTe6dM5etBQUG1uBdVVEidVvUwozAPHD29D6gapyoSwER5gpk5exJ6Gc6V3McFNU6X",
  "key33": "224GmPfbf2DXnTQ9RmGgpea4riHxnjrN5ReFNz9r5sJ8RC3oDimCXiPPSsyYsq4Nbr3CqvFkwAM8CnC6AgsWro6u",
  "key34": "2shabApWXVsMgqj61PWgVtNU24SxQk1zsfFKpiS8GB2cLEH1nBDwjJpkjQCB9nSpA3CMAy4ZWex9Zg7j4gKxaBXW",
  "key35": "4BQaYmrCRskuFXy8gQycbD6B7fMcjpvre9ntRGGMSgQ1cKCVXqCizQgecdmU7CAPixZQ5Ys54q26TazWgcYR3D9w",
  "key36": "2WGyY5cd7i2d9KmqvGiBRPc68xvYNNtg6JLZ9cWcsWSX9uFQJT6TfQ9ZUvjbuHKcVddnCm9irxmoBisp1eh1vhpN",
  "key37": "3ZHUTGwbgRyBNqt1BLraQGQSLFRgEWSdXLwAWVYHaMUKugHdiH7FPEWEHkasNwmwfxsW7osJ7BXm8TaJHXoQkK5J",
  "key38": "22rgBxmj3MRfsrTCMu9Hy9F7rUxEsqYkGmvpFZUQy8UG87CH8GT9Nmu2d5CJY1wipg3DwcYwjnrTPtM8ZvMsTcaY",
  "key39": "2pBuA1tL9c5hf8j6UdDGbxZDbMPEEe4TJtVfwNoaC6sELq9ZmxpwttFRU7H7X31z9RVrzZmDcZc6M2bVWZkGH2Vg",
  "key40": "5xX4d4NYQ9NpbYRhCmeD4iyqzsWJ8bHhRhrCM7Js7Qj7kFNEXcUDfH7w3UYfY6L7eCnjZozL9TRNtsC4DnAuHm3g",
  "key41": "54Y8dE9LH4Px5k2dmsEKVVa8SiXUf7qr61EWT2nrBhCAu4sDbRG5cxWMstiTDndEJnfRVuHyBSAni4FF8RJcprAY",
  "key42": "4TicKr9BmRPfH8J5MeWAYhF6zuyhJuBmqTv8bHmr6WTnU2mFkjEUFuVNUqRHD66mk2rq7RBu2VSVkZG88JFY6D5L",
  "key43": "4XsV7omx6zsy53T6kp94A9GdRRbQQf1PXyWZyS3WmCfoRZFZT1pYkoCYRqfvZBuJaqrAjmjewyJZc46BGkfdo2o4",
  "key44": "3gRv9Vr9JobLuR67TzEY2hJyYCedeSFjoYxDTvrWJZVMq6nXjCPRoFVKvmVXhBDUxRPJZ22cqEkbu4cN9fqXc96Z"
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
