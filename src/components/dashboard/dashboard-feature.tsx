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
    "2dGCF1fF23rubXK1BfJy9XjzJamxjCLZ35Qp5uviNizU83RRr6Mrtq8xvoQf6ubHq3uUYbni7qT2UVUyroenuFT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tA326reEb6f14NGfFDQpXuw8T3C1CduQ1a8UsUErpST5YjQrMy21yFV2pKVVwmTF2E6R4KZpanbg3PXcMYs9aev",
  "key1": "62JBKwmHAZQcvk3GEYssgUNncdySpR1jPv9idAs4eebU4X4gh1upiHnKye8Vks4xhHp2TD3eCDbbcStix15b4Co7",
  "key2": "5AbY4m2DcFHwpK8ws8pvJi3pkAZGghKTC27M6FRHhagHmDEcUa5Zgo3WYYJbsumkXUa1UFgNXbHVS2K9YW4i1GKZ",
  "key3": "32vtvX715RUJokfEUSUPp1zSjLtqN6aAM6xtKAucdWdDyFoFuP8hunQqQ5UWR4Kdwpm4hRLVT6imd5vF2xUYSsSZ",
  "key4": "3oWQXLSdypCX72Wbq7mkG2upHD49qFdnXEuMzhkHdwmmxaLK5m6sV2z9xgkth1wmR1Jsn4VUJv4QjmicPmFLLJQM",
  "key5": "5URGJwJ3N53KEtsxRWktA1KHRYCcvM7zXyhVsbEtdNssQWYXCcAYpxsm2qQnjPmwMM8df6xMqQfPdNXdU1QrpPgN",
  "key6": "3uPUeovygGrjLsSrYsLsDQpS4NXJwgwfCBbrRbPA6Xn391dkS3zRCK974YJDGUXzQrupJeGyW3cw4TSeq7S2hWFG",
  "key7": "ixLkiHMFxa3GU6BuGXCZaKjnEwEEyecX1UD4GmqHvTZunXF3KQVJZ8nHkMGN3T2DD2cSJoQbdZ8RU1kAJ3fuLuN",
  "key8": "3RmUwArFox4ikYf5SxP44ztCCg9wUMn3XgtjP8QGuzvhCd8tgQnYWHBZSVoskedBNwQAGiyHFnbqyiqp3SdY4ASz",
  "key9": "2DiKfUhaEeHH2zMtu4YgZ8c7j7SMW5kBgYt9uxYMNBDTfMaofW2E6akagVynxFuoaGNhDeYYY8eb2cGR4ZDQxHS9",
  "key10": "313G2mdqoXz7SNV1f8C5CWNVZgjzoqY5MPswT4Wu3hRkgtvvT4urubaBz7trx665iAy2EB2ukvxq4debGNcwBPRs",
  "key11": "iHtdf9f4XgiNn6f59PwUaopv2RrEUkj3EMJJyDfdwqWsD6NbHiJKJWMCyx7m8fnagyxenVfhVc7ubV7ezhVtz37",
  "key12": "5KeGiYzZpXofQLwLguUeDT5XPv5oB8SByVb4Rw2WZdye77KnYXZseYF7d8S9K62NXPbrZGdCftBnbMGYCUVtY2TY",
  "key13": "2cDn116PLa2o3oTiNJsnoTL6dwAb3xJwMBHucFStNdxh5xGffrsn8UF5FTZD5CnQTnKoA25puYbhXqAbcgEsfg8q",
  "key14": "2WJFBcQXvUs6224jkDnqWF8PQo7uNdScoGsv4yeBGQp61bxKdFcxmyBkboe7jpTLvycEQQXcj768ZEhwdMqEVXPd",
  "key15": "kfUagVLot1CoCs2h1piz95bs9tpt4rh5bKF6wqmfAkXYjeQVCot7x6YxhgeFEHdEssoN3DDK6Qf3MTrNf1YTJpZ",
  "key16": "5GcD2sa1FCzjqe8UpjfzbfhVGnuA7yLhnAKKdD2s7uLY9PEgUFPjACirqPyGmLw8aVMeDiagEHyCTLqWL2BTq7Ky",
  "key17": "5eYiws15PNgRLUgGmWLawkuitNPz1ubWpKwTo3DMzmNQ1rQK8NqwzTviLngdJLVNkTLps5s8VfSh49QgoENDuKHk",
  "key18": "36hycCijeS59DDpCVZLG9tsD1kVP6ccUX5x4GsdGHJwFoaT8LYStkUFJ4vJSyHevUBuKXredUiDvUhK9h3bUxW9o",
  "key19": "2CgxASCJTYtink8tiyUqaEP5hL2mjpCeeYziFMaBRS6ZSmQ2hHfUcSNvAppWY5k1CpwZG6dLCB5Nh9mW5fC8AzcE",
  "key20": "4f579875B7yuq3fbL4MaHoFV5w1QrJD3Qhsu2EZyF5pcGykn4Bmnth8TKU32A1UahhxjYkXNKxyg2TvxMEMPk4vB",
  "key21": "4pLofZo7HrMdUY9VJr11Vcto8yQeFyfyiVaqHkwG5oQcvSuq2JxtU71ArgxR2UJ9Dzkf8PfZe47GimcG26hRK5rm",
  "key22": "3RjyYwXu2VYJU3SYUiHgL3cgm35K9TpSdo1726EXN6j7DPw9PjCxb8pbN32FUNZKZroHBFtssedwHMz3tP9SDcY2",
  "key23": "3XmBZyDT3pbrxDcs4ChMJEPS2mJKMG6hifFW7V9b4LigNXVbAzhTozydw7J1tuzqGZYBkEE7PGDaHKjdttitCo7Z",
  "key24": "hzm7KuUA5qZi9i8p5PHR4ksiJgyxcqVNWifxKNGdNkdud9AChLt9yAKzbArbkfgRab3NWye8jkVr4B5UTBo5u1H",
  "key25": "5RXZCezUpQsXR7DuHm6qrDmnyGdXbPLZXBohGnayv9MLH2937YjNjWM6N7YyrjTAFz4VnpTUsHPNLMV9i29jZTsm",
  "key26": "4wh4ZYiTJq652o7NsQ6V6JFKaRA8oXRykehVn8PAHSQBoi4rBDsMgnuUzUnFwo64qzPWpxKR5tDKj4mFWPBfbWaF",
  "key27": "3NKhncwPcQyRvXiNR7VWsToGPsVZThsSoDTEUbcXwA1qG7pfrMUGwSXhDhqthaU8ZXi5iMuXehcviYkJ2rWZRpM3",
  "key28": "5r9obezNeDs99FTYHeaDLqtakE3qJqWzm5dcUsLrDge2brDjfEhuHTgMJSpTttBXmpPfGEwqoTBcfuHKzYSmfES3",
  "key29": "5CUv8yc8DJpDzCMU6cyS6z8NTGjsrDmXt3T77tqztkEqyVyUCDiTVmNNxe8FLpGh1vyv4MiH7wCnSDm3jiHsEKAd",
  "key30": "2fY9R8TPc4S3n95Kj3by71wVUnJPUiDoUqNMAexs1mGpXEspp7TAp5MQKNBPNoDtZTpkzZk5r98uKcVRh42KTjWD",
  "key31": "2c5NnCT2gJBBWEeBnqVtzGSSsL5pNDTSpeApoaLhHTZ3cFtjXnAY9Z7hNdXbNu4U6KkYrPWpYFuZiQvibSBSgNvp",
  "key32": "5uqYSoeXSpBE2brKjeWhakehea7odCoKg3rPFTqLTd551F9iA8ua27sTFFnWzUTvehLWhMP2abwYtShuNMbPAHgH",
  "key33": "2kL9zQoyMiPD7mMgsw836vgWkBn9RxwnzvDMKdCvAken5T9smUpSxD1Viewr8VuQhUKJiBj8Qajx1nEw56PRg7aG"
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
