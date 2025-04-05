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
    "7ewNeFWQTabMrNS4L2Z7gMCdtxKEYxV6odfBaWRpFNBDBojsF9FJr3JN2mqWQDncsBGkxauZFwanULF795RMxKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31EpmQzjR3r56A9SGeuGkVpf5Bk1V65Fzv6RXeibV5uMTgXRgpbnw3vvx1EJ6XBstZGCSAZDz21XThzqAncX1vc2",
  "key1": "4mcBLwquejZG4pXgU3FZnSD1bFtWWKanDkge9C2ZMrCiERwJyDbp87U7MKcsbpSkHyVU54FBM1zn6rhAkqWoUReg",
  "key2": "Hkm1cPCYtRLJcbbVzyTLzRZvGRvV4SmYTbJC2Pkhx1x4FYoU3hyFwmNunkSjmK9tvP1SqbS82apc8pFdWDCoaq3",
  "key3": "LhAKbrczBkMHJPtjuzv6cEyLEunu3F2sdNgYVKJvynGReagighukT9LwADiCF49PvWsaRWJVKYdZJDkv7u92ArQ",
  "key4": "5HngwxVwriTRn4WB9ZSx8wkH2dmTYt1ivTCX1u7gSA2fFLCrXs8r5sZiStU7o2tVS4mFYpusPBFHoqDPQ4JRZa9D",
  "key5": "3uEKgMGPoDb6weXasPK1xQjogU2VfP7G2dgzQVuojU7bn925K6mnswWBzXJyBDH9Q7YYS6d58dncXzg1YX7tt7r",
  "key6": "2wXCpbWCWKcLcXWtSfiC9wXEm7gKdids91fsxuXLZTKcDv9hrf9iGQdHKzXqpxYNPFex49kyKLZEPgSNEd6cgNhm",
  "key7": "2ZaYzH1SEvfbzBtLQKgD1MaeoD6WScFcnzu3ma3szTdNUGAwaS1ReXbDvBWav1PGss8iwUD539YRyPEKu6d75QWT",
  "key8": "2Ns7ujJR3qQgHusruY8yJ2ww1Sk2SZDpeu7xvw625jtpGm4S7M6bTVMMEfgu4TucrLGvX1WAaQ8iz1kHfXwNv19J",
  "key9": "4A6hLZJSuWHgmDVJWQXRQGVaNb87Jck2Rh8hdkUZf3ZdFCu9PLS4W2Dz6UtXA8QPncxE3bTAyRXwJnP4ui6PkaTX",
  "key10": "5jzt6ytCMio52Z6LBxijzK61jv2jadUZ27e2mUp5QaAvNTpvNC3NuqH8z6WwMJvkQxK9TRZXnARren6iqLcxhKNu",
  "key11": "2fmH4fLFvHBBC6mPf2EE3MbGwJAfYxuAEnjfUBmkEbbCwT3PeBBWPFJFcDpitkshK2fK6DCCCJYFb99Rf88A2aW4",
  "key12": "XW7q7L2Dxp5jfZF19LTDRJBbvPGbycxNenWMbcvs893hUhBvyUMsCYyLVg3QEwUPWoQGrSu3efTciGQgoQBCgXV",
  "key13": "5dDwthpxsy6JwMGNVNuRQSypBnYtaJQC3EzaxkR759zYKxpxb23SC6Wv3PZWvY3eBGbZUVLHtME9xZ3ayKbHmqqA",
  "key14": "37i1LzSbar3jBgtUK7i3scwchkgQg2esNt8SebCquofuVv8zTxMXfnHvQcPvBJSyFQXWt6sNdxHqsrhyrAVMCmGB",
  "key15": "3Y7oe6MeyHMBh9oCvnit2qEvu5PghmTHUF9Jb3nPvf8C7hqm8KYEpfgdfJwyBDoW3Y1DMWvHn9B32BZjpNGUKu8",
  "key16": "4xjScqFqyq1MujREhUsAw9hzXEDLDixj4EHSonHiikoi23foFKvygs31RxM1enUFPMvgsz1riYmjMw5vFxdtafgH",
  "key17": "tou5GiiGUhvMyaH48VcDNR7kxY1YePRqJJjzeHstgzEhPGT87BdLzJvi9YNaCUKDtUhQQ4rNo4y17sfUyjZ78gp",
  "key18": "5agt6owuyDNJSadadan3Dt3JoJT33tU51SV93nudqTmKu8s5fpX2f7jpiMns7ybtwKiDqwpnkohgqmH8KCbcjU9g",
  "key19": "61wRais4odUQt32sc5s2K1396GVFtRSLzDa1TgeHWu8NeJPuQknZihjhrYYje1c4rWh9YxwXZ2E4Wp1YCBHJbBu8",
  "key20": "3RPB6MrakTz9QRgoAPfZN6o4JwKr2L1sosH6Z13JSdVcLUnuRFbRSbk38besVk1Lh5taho6drXgaobH5MXrZ5BBb",
  "key21": "5toKgopEvm5GJygXfdiH9rtg3Tw2zLGwXW164X1qKPK76RcS2pf5dH62AZHfs8dHomQiN561dGwNQbkdELhWrWys",
  "key22": "5honJwKFVAkjux8t9yAWCLXGFokTWcqk28gu8W4WHk1tDcNKuZn7CXhKWxiTUHaeN6asriHMHjJqWj8RG5CigVMQ",
  "key23": "4Lkk61nRgW654vpS4cERroW3JT54MrJoUxYmnaAWmQwJkVYAatwEd3eDswj8zSAHdABDfsnuf1A633Bf9QGkzhWs",
  "key24": "S1ZAui1xcqzN31e9wZfY81BTVaJKu7XKnL1A3Z4KZ7LgaroNaRE4fHZ3XnE2H6QmrL51fDNgbe9sykQGkPUm4jr",
  "key25": "p1NPNqykSDaiCZuyh69m8nqCLSqX8WeY26iafCgrV7aAm4dMwG6MLcDDeJ2X3jvsgsguwAnG3XZA6CUdem4cZWa",
  "key26": "2ritTSaLTWoS8XXDF9E9mLKi98e3CR3Fvfr9Utgb8kncjS9rzzMwcWYdEftCQEXYdSK3rVoV7XmYKW15sLdZX56B",
  "key27": "n6tmnkAVGQyvmfSKUmd8b8zgAQ6ivktg7WiAqpwcEpzzJbmbFGWnSocg7dVZTZRWzwTxHSgSgN3Figo43EgzEYA",
  "key28": "5eoChVFAuDNRdbECZ8aBBrGBxfriJfeDxBb15QhNHGy5vwcAXFzdbyZavnyDrt1fSoKSgEWVR47yUWXEq8HC9eEd",
  "key29": "3MUSw2y5Wcc59b83e4H1khhtQsiLUeiHx5DNEek2yQSkkoBR78ptaweHoRayBJSZAwkQhTXSJpgEbJrXPGXidB8S",
  "key30": "4USz8XZrLcgpiie56Mj56d9Kqu67ZADKAS4peghdjE96S2WEoYgvkWVWN6YAcdjqxwcbJ9FNU8KyEzqCcrKvvjcY",
  "key31": "59bZfNHkxFNTdD1mP7aXg9gTfkYtB9DxSdJsRzhaW1HDfshEoZTSKUYjWoiEoRa2SY2aWpqkqVMAdW7x8mF36CBq",
  "key32": "4brtKe8x1iLtTCrYJTLqGQtZJnt3pd9B5HSStfq7acdMurJkSTFjjJqRmGRBXpcE3WWAxjJFpmZ3iwg1FKwqzcDr",
  "key33": "2HPjvSTffX2bZ31Mvje9FtLd2gigikyMQxr6mn161rS92JsQYb4BubU7og3NB9LmAKM4cRaU7aX867J3xuS7oh3n",
  "key34": "2gGiyFuwoZtJQbV2E5PRY5JCMnoD3Mqns4yfrarV3WqtV3cPuXrZD55dwujNw9jUiANCHqiAxazSHpgbRxsdHEau",
  "key35": "64mrpSA2wVjQnnZE6G5xCL6UTnqfmJLNswQXcgTFYwUi5NNWgFP52C6ASz3SkQE5DLq6HPYA3rMkNUeH5vKoVjfm",
  "key36": "aZtGNQNqLnyDWtP55iooGzahoBDghtamArv4LLBJJDRQ4q5kHn4TNNe741b5LCoZBV3yD1zUXYMJtYnzth2icHt",
  "key37": "3r2RWfjwVwYckFgCFeEPRtkJo2L3KDBghwk8AgbdT58FefTZXFy6TkeJBWgUyS5N21x9jNoDVBFaMvBWMPeq5BYG"
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
