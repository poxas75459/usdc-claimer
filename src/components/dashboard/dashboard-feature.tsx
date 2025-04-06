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
    "3PQefhFdM6SsY5x8QiJT9ae1TFakdmPmfg22SSDRBtyQc1jtTfwuuN34X2ScyV2jBQraDFb3GNWNHrZeM6MERZpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fobhop5cDAa2gizkJ1bASXEySe1oJ4rabiDYtRSGHBQStTU2q88ZuhotL9BL7DcRKbpUFwuzsuAarcBWfuiYFQx",
  "key1": "x2ByCrCve6G8a9hfxRoaevBHcAKiziMJ1ZuxzcwyCt376wvv6CTTKu7KXsA6yE2yojGeqexxRbEsHN6qUzA49ak",
  "key2": "5KyjHNqVUZqJ2dUzJCpPgrn8NHzdsgiwP5mThyLDxZxAR7h543UHXCW1oQ4VB1WjY3wfjX7AgvVsrz9E9nFZ6aww",
  "key3": "4EFiK7gvPCu9TC9NdRPJzf9QVzsxuGZTSEipuZPQecJxwHP7UnGS6c7DtfUteTrzNra2F2UXz7F9iC8oMxj2Gtfh",
  "key4": "4rQm7dFWnQUA3f9NBL9T8GLcL9rwiH4mShX785o3N96KqrqyyS3Fjnomf6WgMo2nuVWRAT6eBQu2Hibvv32CxdcR",
  "key5": "4AaHHkBKy3cBEMA7mAvCKV31f6ri4j5gDg2y4mh8RbriEHhUqntmjmehpABsczqWppCBdoQJDQPeAxc8hvbzevs4",
  "key6": "YnKkorUA3k8NYQqGj68JR2xTbMwPrfxFV7tc3UUu9vvhTnqCepqvNpzUimX9Su6yer15JXCgs8xNm3kP1f7g6WU",
  "key7": "4MH9XLEZhTJzFc8y4J3x6XQdtKkLSsw6BAf3SBqgRqf2Tcp7ajHPyq6b1uat7td3ddFsNUHxQAnzMFbgWiXkkXPj",
  "key8": "NtoLLq8HtmEj59XUGiCUSTcbYQBAV1kz9mBBRETmvBqBQ7kDzmZQ73uQ3FrfnGQN4KX7y2msXwrwaKUKLmcc3Hd",
  "key9": "rYgmiCtEV5UnrJn1tryLVXx8wCVNkM3Kd4rXL81Gzu15p71bUeMdVkHqPRM4AjNRwecQwDSNosgH3xhmwMoWnCD",
  "key10": "5bYdtMNqTvt3QqrvdVLjXDReb45p54ivtWoTghLsQoSPdbQmKQaJLPXancyL6YtH1S3kfKzBJM5wP6WdJzwMENNF",
  "key11": "2N4rerR6Xh7oHxfwYcNiVEjvsQxmW7epckXmiKHhwZFXACtNEx8wvrKk4M3xmu4vmVJozRAasopnJeu2kfbnq6mj",
  "key12": "3zHrcY6yqS5xCYjguJc6CWLVSYUmfdxCd3dZkfJxfWVr25N7YUJ2ndEBbriekc6ydEYHbk5tsxs6pBjTUTF5sbR1",
  "key13": "3w1YMspPqZFyqQ7z72ZzsB4Gs3rcawMzAW3viu3CsG5fe92YFeVDU9GJJpex4K1UTYwqBemUmNpfJadpKLVdS3Er",
  "key14": "2NwBRDEjAFPN1tPfcCEMbDVcBpckKqtuDWh8D3tazbHBEYWqWj8BEEK5QWig2YbJqQ11KreTMgzRppRvvgm49a9V",
  "key15": "4jWG4ZLPsU1h41R1Lpkvtxe6Hp24MiwYhhxSW6hJj5nvtvfztkV1Z94nogfQof24NFn7B4EJSRmSeK8Vn518T4SH",
  "key16": "5egx6tCaEsNxTSohQQ2DquSyVBoojrFq76ZaGQmZAnZrPD3dmrTbUaH3GR8fy3uhcS8yK5gyvbKH2aYjr5hQG4PK",
  "key17": "4xmpDBUroL4nA4oko2DRegHSz7wQF9RXExccti2VGdRbFcfes4ohd1v7PwADDWCAD28Mf8AuxmrtGL2sv553zKNm",
  "key18": "4jqpk5ZJxJnXXdHkvisfr7JV5SXvPB1C5WEWUWmsUZvB2LQ1sRxbtXoK2r21UwRhRpAk6JyDTsMqczxvnAErkXeX",
  "key19": "553hvvMA6x4XYiTyLuHbMtoxufSP5m3kRBTWGSqXKkCskuAUhn6EHZEbm7GiwEmH7kVgu3RKgU1EzvoUi8odc4wX",
  "key20": "3gXN9ddSt4ajvQ71GRtcgR9rtSE9Eu3u7qnTzbqNSNMeihdKmBDffYVN3D5tFXtBijAGd89tsA1QPvNEPEhTfrQj",
  "key21": "612Vndu9JRo98CbTcuUjHS8qALp5znyeePpWsw9DjorBvEgwjQrCgwvv8Kvh58CPXW6dpVB8pcSwjrUsXMwmp7vR",
  "key22": "24PBHeue3hJK6wjp5raVkAa8znHCPBeqjKbNtwB3Qca4ww8EtADEy4LDvXM7PoutYgoi6kr9a6eWcfXw5RcczPQf",
  "key23": "35M9drpXe66caJDKwGSheFGtALtjh2cEmEAzr5jeXgevh98kdVMdpgrGg7YudDVq1u1PkWFgZbaJQrTb441t7zPd",
  "key24": "3QW6j4BkggiW6qL9cKXrRLpyxxbnBR5bRDL9P8GLh9h78NaTodDvbmZcSxCtRzmuETv7FDPP1AxkWy9n67jRfEvx",
  "key25": "2bnfRHp3qLUXN8yNtkoJwtC6ihQvgFwFoVNrmg3T7mwAnsNEFVET87MS8uSY7Um7bUtz4Zf7Gcx7bVm2KCaPXAYb",
  "key26": "23B5vsqLBexuoUDnMmiHiGBHSg5MmLwAEEDgV3HwERBDzKRT6A3RG3C34V2kWtaQv7aSCvsHydnQhn2XLuwCUptS",
  "key27": "5F3zGTqdrRNQ1AqGzKmV5Uw9Jw51AWCeFJKk8EmfCHaqqmJrYKf19kmMUKUUwogdiEFLQohouEzU3VMgUj7Dpdr9",
  "key28": "2Tbmo1wukBsV9bSWFYWZeH6pZqLjc98toU7aSkNySjPQuYbdcZT5ebbQGC1qEuEFePrLNfugY3yr454zsRwxY7Nx",
  "key29": "4s3Nf2BqGR48eW1DfWhMoJJGMgB54m39QJyWxcsrP6eMjbkaJmHvcpvDWSvejGjK1LD2vtaKZU91V4VATtLrbccu",
  "key30": "d3VFythqK6cdFRmfFUNxXePG48BTFywxV97raBNtGWDVhMmnRUKb5jEmszP91YaeDtXsFLCoPzQXZFddk7D7jKo",
  "key31": "2KU8nkTwy81dkQgLoUiMfqkEURqxBDB3Y8Pf2P9JVSxVvNAUtaNcj8Eu7D9x5aFP7tFtJu6AyHAuwRLcLT1egdq8",
  "key32": "5sRSKLTTZLHHwg8siHwHhs9J13gsjTX9bPocVZRassYtbQirxKrLtUHsZWkB8V9wUkQrosswgxjkPT43VMMgVEYB",
  "key33": "4qtcNDVfNeFRNfyUxE2xchZnCd3a15Go7xz89zJoeXmv8CRecvaoPHm1znd3Hrf4smXAViCPq1EM85Vxm6t2Kg2q",
  "key34": "4r5Fdqcg5vcMsZqwgS8W6ztYMcNwJpdgtLPzEVYow4KVtNQFxkrSvtFQVnBN31CGxCv5QuStN6teW9nQwnvUJHc5",
  "key35": "2ZyJyiQSdcnxZySJ7RpEzH91zDugzJtNWANApLQn2FDu73h9zs9J2rGGHs7f5SZUjzn2YbnJYm4s5Ab2aUp4PZjV",
  "key36": "2oHUhUmWyXxX6n1tVD3DxNRf4Q71kuoAXXRb9si5fGH7axgKZyvmW8Txb335kkbMe5eJ5dtrXvTZonWf3bcob8Hx",
  "key37": "329RtigCksduUamdZnjQLSapxp6B3MLmC96qnd4gXfzqGrpwU5tHwabBGpWWNQiGRNkP8iReCrqkw5oz9auoTghr",
  "key38": "4xv2H9HMPfNRxJyP3E8TbF8WGWWztowAnuAtMx47ckzBb4VRSW4yWsGJiXtHuVYvSP8tRVkk7z8PPsRSNWGXMaFR",
  "key39": "4ksP8eaMnwawLbi52ykJvNn6w8wXtKSnLihATkUteeg7M2jowrpWnqWHPGXxZkzHo72pJHZMyyu45Bn23hZujRgU",
  "key40": "2uuj9MCaTRFKx7GJWqmNDcHa5Nhqq3fgzdzf78qVS5SrGiNP83WRETu8W69MA5ZDkMeRrEonQnFE2YkAoPPPDecf",
  "key41": "5e8s8G7nTPrnu4MXm4TUsis9MoqqkdLWoXX35FTUt9gGBvASLrTjEPmaLqgrs28gVVNfsNvqUT9mWyqv6haUfVAN",
  "key42": "5GhyY7b4X6Z16m8geaMwRk3iEwefj7F4uxNN9izv3wGTrmo74G3gbVSYZYq5xKjnv6dtkJcYdaZfdxL7ZN6oA4px",
  "key43": "4fMxVkUtzLspkGCZT1nH1ckf8gjjjJ3c7w7YWL8QfCYTxTn47WWMweyn1AqUUx8n1CrCDs18t3SY6F7jMKnQbyqe",
  "key44": "DHWcrFqo2gtSMPNtVK342rZoQRgMde91g3n4zpT6STk5w5SPPSHMfYDuyiP7DWA1GwCKuZHtpnJKhXgiua8XDzm",
  "key45": "tWURPSCRNrvoXxM7D2Wm38TiCY4ef517t17roT9xbwsPRm9RrcMsUYboRdk1rJ1cNEkE5wnEgvGkJu72srvzLzA"
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
