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
    "3GYUWtcotELX1AJFmPrtM7Sd6tpe6f1mxT3ZBZsMC1RphbksAm5nvRYEPKXZHUVKTrbcCs8bCyXqMy8wbuTFzRf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAaQmuRSCCHNKeKLZ7eWi29GVDsY54BioZVPVspS42DGp59c5pfBVzS2mySVXi8vHmhtNRdjtrZe3jnKy2WyiVw",
  "key1": "2zBFL5zxpShytcYJyUPitiNkcUSNA77q1JBXwY3fjb8QRsWWuLzMispKXwv5n2FJbaQoNF174Mio44WEB3m6dSLc",
  "key2": "3Z82nNVMp7zhMDdvMQsRVne1ccgCKdN95tiRoGWnYdDhGzwShPyJJkmyKRUdUWMJM9dfMMGbv3nfTxzSh23HQ2KD",
  "key3": "vhD3KKEMB6jfyjbx9xXUNjd9sfoYA3B4xXGKaAQyjA4m96GaMk6B6LR7SJegWFtVhQntGHGWJE2xKZJiVz8iLtx",
  "key4": "67dVc6Ass2aE7xkRFXzvHKtGdrvJXQohdPScK59i3aUCjsWfHB25tQhikbEzPyevwGnCLUSZuWKucRUmAmF7XaDW",
  "key5": "5gVxkWebWjtdU69S3aErqLBV4Nt16igqu7mDCAbJqLb98gmKmnej2HQZoGANAkdgxjEsDWk3u6PrGkoF5yfqTrMA",
  "key6": "2BhUEtsp2JKAM3YAdKZ9rKihAvDy2zbPViu2wxqk6vVqgUnw8Yq7QBwjWTS7bL1BLeq16oYMCtfAcrvjSoq3B3Qs",
  "key7": "y9a53tkqtrSky2MHrQKoXsK2G9u3ZGxxYGDQ71AuwPnVbgtqHT9ruH4dxsXWqq8B2MKfo5edLaYLQR3TvMTJvfM",
  "key8": "4nvs8Xduu4RF1arvMWX6PXiZA3ZzP2knBe5qjPZN5DUoRLjG3fDb15JtGLVZHeQwXjMnFCm3pyLUiNzgq5Mwf4Bb",
  "key9": "3yUe5hUVHuhn2dK3h8uhnGeHkSrFsDMUcvFZsAkLr26NELoce8Z8nbDeb2fgADWY26uW8zLo2cWUv18RSqiinhMA",
  "key10": "2edG71D3Z2R4Wh7Ms5ZCHAvH1qfbsGPjwcMgR4uW16kwD2Tu7aV48wPpbuxVRTBcRdN7RheFLPBKHNUTCwSBi5NJ",
  "key11": "4mYLtnUawPyrwDs5kXFGcn75MvsZBTVtSJZVADqE5FDZjbWFYXyCjs1ypwr2J1iKCPnTU7XQVPXti1jrVFS7pd27",
  "key12": "3PD8TuY7mZAJjRqw6Ziy2rgoBtpgRXs6MJxJ8Vm31Mg6yYPoas3haLNnbLPNvDnjMQCgh2QGbjQ1jm99Ry6k3z8r",
  "key13": "4dgVM9B43JQApU1M7gJU8C7vg3eZfojtjL9fbYhSvXNYPSYpRvFJuzxnPAoZrLjTuopxmZt9BwfsCwGf9QZ5hgor",
  "key14": "qcM4WHjdcfKxq3LfnfYYjXUzX42vRNEkT5L3wKECJyZyJVyrLtumoAjADGiLbYxK4ZBWEu85yKPdYNVCwqy5aqB",
  "key15": "4uPTbpr9W1a6MvF9wvCQ79ijmSaJDixYUyZoEME39fGt41Ncad3GF5fmw5jZZCPMP86bV7kdeK3VXm7wA9kqM2tS",
  "key16": "3FtcaBsueNDcUhd9JoUKWNP1YiRJ4MLZvkE1F3cE5tz1qXZ3Vu3knNJDHNBhLKBzpyrJ1cvXZkK8SYjwwHVNhLg",
  "key17": "3t7Jnna2L4gQGV4VciMmLJCpa6X5qiYuYKrEjZ6YfsemNd6HPBdigkbkiPxg7CP7Qr4qEesTReWPx8dZMHDCLEyo",
  "key18": "4BAg7Q1ZidhkAKiEJoJiwFLsfkduXNHC4JDsUhn4DMw5itKufVBdJweU7miN4qW7Binmr685C5NPoTS6CKZJjAWu",
  "key19": "3DnwKWdXeyehmNsK3FLAFHuG7HJz4VSi1z4aAn9tSKAzjVyucP1zdcPvffLLmzWtkEo89essBUm4BbPMHgTPLvu4",
  "key20": "5zjcoRRYEV6u3x6uZxakQGTrJMpswDnTLCzbNcoZ8tRhjxdry6wMytRY37LrGtM9DaRgWNRFj6kZggvWY1FrCSAY",
  "key21": "2WqC6PAumLXmFHTmkQ3qu9wzona1snKsHa5Gh1KqcuAoAnykghAyPXZH39S2PQYVyu6YVtpnqb1dpNmkiwRqwkhn",
  "key22": "268k2XuQkLLFpaCRCwPcXkLyznDUaXRhmmTop8d1ZsnmDimcSmDfp6dFsbHaZe7ssHGmcnrr1fhy7AVsS5ni7ezV",
  "key23": "4hvcUQZRcQVnxcmS3vVGekrWMuVCpfD3mpfA6NcYfXf8MhEoFxM2KDYXA8Nb1JJ51oK1nTDABkocXf8RR6WD9xd",
  "key24": "53vd553WrLj7w9YX4pD368V11CorcpaeVyk8yureN3AMkB7tiDtUnAV9d5C7jKqbwQX4WRmKE6vJ1gYYv6fYFqYk",
  "key25": "488odYt12N2U2sygskqXk3ScAaikV32oiB8dtYTkavxnC4akBhbqRdeaWNWaBGGE2nBM1pyxJV5VPqkPuudb1kq9",
  "key26": "5ZpVQoJZTNUNgvKa43aAPKnEeLK5R6BVWk2xMKbToWnHr8Bsn5vGoT3g3kx4bZpah5vAvk9UUqHtyXiijdyYYczn",
  "key27": "4KNmVQJwwHPG9mrtrz8NKebtmzEtoyeA2VJdTngmbopEb2QUNkgFXsoFBkYH1w1ocYaTzCjRZtDgaSgWWPXuVCwg",
  "key28": "4GEfGpPERvTRmT2XdeEm9NVrnUDTiYuojDpmsAjQwmKg89Hj6RCSuQPBBjyEcNRUTXakwo8cH7XXuai6roqpCLst",
  "key29": "yF1ozCMmKm3437unxE2vQRnZXtHYEpAeEJbQ6ArWEduK2XCzstzVeE9cmhAK2nMmsj72LqPgFaKi4Ufw1r6zm1Y",
  "key30": "3gZu9DT4E8ZJ5JVFqm4Rp2NRLpxs5Aa9k9fAT5mUnsrHcsN2mVmSWrJa4K4RjYu1QTUk3Ymrwg7LZi4xekmbCtZ8",
  "key31": "533wr8tmY2JfRupipHrqPPXqXaf2cP2XMLYLdvRPirpjRPxFPm98QG14CdjtaQ28SdUug6TCGTjwdHGzzTZAUtpB",
  "key32": "3ZvcYpefD4JpP63mJNHTTPkazpwZWmcKPUufmaeySv7xrnF5mAyEKPKFJkNQEW8nC514EUyRzi6PEeVjL4neTtpi",
  "key33": "33egsJPMqRzM2NBd5TSjRDzk7uwhUSHneKy1SuXW3RXpZytLkLaoEJMZKHUNxkGkqWtp8zi2tv99jbiME6QTPgBi",
  "key34": "4RW7HhpNtS21p2LXdha3nvEKV4uQscuxZ3qGfGS8HehabsWEk1DFMm4hYoNBu5C6JsaaDY98fayNtH2gnLxRagNC",
  "key35": "5DufjaHJenhDVTUM3hdHxYck1iRa6bUsvG8sjy1Gh5wSjLj7qH2p92DtBd8oWZaouk62bCsmqBvWSZ1QVAEhzjsU",
  "key36": "32ozkCkK2SCvPT3yvy4nPTCWKkMdrxP4RfP6MMCgSCWBo26AGXVgDBjS2qJLH4zfNPTVwbVQfWeNH3hRiKBmhMWA",
  "key37": "52t5Jao3jKqFLTMnrjbrytmf9zz3W8NV77CgDwAFkmKbPwtssknh7ymMvAoUtF6wN2ZagjSyC8TdEbASRbcErQor",
  "key38": "3CceToMCAVMbNjySmdpJsSbzDySqV2r5paMUhGdYCYiQ6fjioDyqGxghqqpCWfJ7kSQmezqUZMCgwCUP4UfV8J47",
  "key39": "2NBb3ArWhyzqvBn8Wx5tyN7gPDt9c96vQE1XpHsKrKkXMnftYTK7c466KsgCRv9363vZfQ3kF8ZGfBNP52a2yXCu",
  "key40": "65WtsC322zedaj7ba63YdELPVdYZCG9c87GWASfzVjbeE9GAnsy1q4rAiedpVjHAwB5Qs99KMS8TKgxXHGhevYFg",
  "key41": "5YQ4tPEdN1LHjanKRCnyqgSkgptPBBFjHSmo7nCq6gbHs4XUe2eB6ZwYkTwAiJd379FswkqDBfgUBndgmHRV6Ufv"
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
