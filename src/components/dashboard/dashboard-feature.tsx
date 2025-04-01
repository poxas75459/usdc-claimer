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
    "2v9qP2WjrqKQxozpQdUeQzQnA6iKKQo12MqUpyYXrRnawDKhcM56fNxeStkkrGi5Z3iMSr9gMqoahL1BVPZQfVdu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bxbfXc6GRhm4mPJfg2kMYetaRaSCcSAzutbt7rap4oWwMB83nAGm2SYge8qPoF3SLpis2136VRKGq7mQ6FhbBba",
  "key1": "34bWBTmsA6sxzgeKKpgofKhy6GBnmsXCKe4T35DvNDt3ovAAi7WmakF5JH3FGVbcYJFErgSV9kZkaA38LyDHi3An",
  "key2": "BgLomEYUQBWuBUH1zS5dQMcQz5nmhTK7H83ZJKVLUZHfZFEgjKES9i7AkitezEYFmtdX46rqgCEv4Vx9JvNza5X",
  "key3": "5zsgGN821EcAdPzcsXnTzs75Yj5rwZMYpuCWuwRee3wh2ATrb6zMhPczUMVyngGzzKTV28mxivJsFbXL9xgwPU7a",
  "key4": "9iyL3HpmspHkFuumrnVZUwwZhoVdpN68aAW7v9eFNFZjb8fEKh3Q2iYmDQxM4WPrSDA6xRd7xuW7F8okUqv3aaG",
  "key5": "45ZUwKFaRLUgCNfQbUhf2LVVqfgeYcBtX51KaviHtVXH4hTH6d75mWcFzs1uJJ22kMsaWg4pTSByqJwa6Y8LAYq5",
  "key6": "2GVtmccbndEyAbAcwsYUn1bkyAEk1umQJMZhT5shgAurvM7rSm1a1JAWfz9CihUbkkZQ9W6zYN3dqRjKtEpPPgAL",
  "key7": "3bCnedwWUTFdXc8qBVDY2Um8MDfJBvkYYQ46qAqioWybd4imCdp4QaT4NBRvCoHWeMyGobrUten3mg7SMtuPCuTA",
  "key8": "hcGfECeWVqLiGchCY6gcrJbKkhD6Zyud6S1j3cWweJ45Fhs5LWmAzD5UX6QJrfmxSz4HVpDGS6mHNAjVfRek45G",
  "key9": "LAFz7DLa4GRgPLU6ji3RKsivov4V8N3HbGrqxbqPy8CadYCZ29yRhchgDdgxC1NrZoW4GUZPmpqiz9e6dnzFTPo",
  "key10": "4sacDCcZsuZhLwgg9nkkNk5aN2E3Kaa9SvFBtaRT9oW8UD7MH85tYR7FknQwW4ULArUNvSCvVeaH1geyDd3pavxn",
  "key11": "4LVZ4apMPwFuAb3qmZoVPwKZ5KcxGsovU6ZRJU6gWjzDiy7UqELWz2sQ6icbgpN7mXymhEgerPqcvhJdyLDX1vBw",
  "key12": "3By3b1K6UoK5PSFXV8fAkXs9cbusbxxcKce4Eg66vXeVhZg5n9Bqxg6Lyh42hstG79K7TDdhBZjagsL8zQ4fhETX",
  "key13": "4mC3vxG8yCJ6RHAdmw4ahr4pB2bhZusSBsWWg2edsfLRSdvx8C4QWE8uUF2Z5PShymQbbMnXwRxNcfJnB781JXos",
  "key14": "KEspXL8CdigvT1WU7QSuryJRdQouWxd4Bxm3rLgrXdgMhbJNNpf57VjUuQQLcVEA41LGRrfoJM3GyGUoQBkUgqg",
  "key15": "32QPQ4LPx1SJ5xWbxnRsT69ZWbi7TsWgJjfGGAzmAooR8Ji7eWdVNyZ8AMeJ8JDwXWwgejwTHwgQ3afZuMQQofQi",
  "key16": "5Ax6wj47Nzp1nKhftSxNJ4anayVjzMWJt4XJHzBgNh5GH8uq5zeVnfDy6zaARf4c2PpZ7SXdDxanswD9VjrJ8yaS",
  "key17": "2XMGMmH913zdsBwJ1udKwh6AoSJWDvZ8j1kzkhLLKhGi6Gzrdnm8Cb6GSRJqoKDXnReCVEStGK5mDR6yR5iZ5FVN",
  "key18": "3RXA9vavasBiLLAtJUFxcJ8pyoZZozAgriFWTgRBesaCkVi2bNnhTr2wruLo62YUR4XJAki6u3upP98979JpcVxt",
  "key19": "5zekXpCGAWYAKMLycsMfiUdn7o7vm16DNEC4aZSzpDotcGmSbrtwwq6WHupp6x3iaGnSoexTVinPyd2caCnAEPyE",
  "key20": "4KJdmQSuXU8pg4YvMcyywR8h89JbTZZwUb9qT1mhvKbnYDB9f2phaXgWpdr1oQhHpkXBX3iZqZPNtLvTvqzt38S1",
  "key21": "36Aw3MMrtk44aFZEGdbsKxWvhV9t5rTRc511gkpabcxkdPFoJfsnzqVf7ppNsZreJkBMfQosudqEJU3PYbdcxgwB",
  "key22": "3Xt2jRxJhEhr47hRuN6Dt1uonB8w4YJrwoswhWvjQqcoeJtqP5ayx3mttpGooc96AzSMG2HUxPBToJ9YyMGXrkVG",
  "key23": "G1JapYRNCuHqZiBkQjnxv1ip1T6JARiZZoA8sR8a3aWqmuEMgAgu71GPggfhkv4JJmhWwxTZrkP4w8EKkyVCq3i",
  "key24": "1Nxp3hnbrNNfwaK6BpYCiC57t8mxfqL93WR9onLgdKZTLrh4EM9PHa2pm3HKG9vDwWKkmQ48MYfGi1ePLefhHBo",
  "key25": "55sZSbEUR7surU69HGKXTSQxyx637Znz2ZgbTuNWBrVvUiXb94tjmrBnmLyj9Ab3XvHaco6fYudGod9cCPPmQfmy",
  "key26": "rH4FrXUD9jyvMZdLTFWQMVikiqhBuDZunV1b3p4HSn27qkw1NHUunHpktr8pFDuWbc7tQjxbMsuJ49S3Lpga5Zb",
  "key27": "QgbrD3E1vPQibXWN3xneNnKvgshPxe1hSKwDcUCEaqsZAYv2B8HkumngaPfT2ysvEfd4jgoBcxX7UvBoHKBxtm4",
  "key28": "5LpJKLKx8g1NR4mErz1cPG66V5v2bYoryojbxPTBpBLLKwwmCbuNrLuEfXDpzaHFyCzt1Nhza2gspqxbC25HQqgu",
  "key29": "2qVJ827wnFnzaUpvEo5xYCF89cpTT3vsE7fAog3ZZ9Pr6pxLASrfcVFZ7TGx9CkuUpUvrp8AofAzihFDZLjfdvxD",
  "key30": "vo5sZFp4G3A5yfGLWV4LsT69gH335wiFyzcjfuHk8BNmu8xJmrP4rRLcWaU7Nu23xUEKRuqHCJ9dEXkaZfQKXfk",
  "key31": "2QoE67HbFsdQZBMJWcVkS639mWdpsBkoxGrZzdz7XAfuajuKXe6YQdAtErvtB3k7BiWDt24PGDASLq2teAq6eCXk",
  "key32": "5SQn7Yx3GbZeBVR9owNHRmo9HBJpbfVzDMkH7QqMvbg5e696PxR8iGfAgT26YsrrWgmj4agrQdyXMfQEkVLVNETR",
  "key33": "Kecc3A9xBojKjqc8oWoDJZNLMw6cpt9gZ2VK4BiEaTSJ16GuCpcCTWf4ao7Udg235Sudp8rC6F9Ve9G2bN67aAn",
  "key34": "32Gk2dFfpUht9aKX6SESAUT1YJCpMe6kEQ1vmoP4mnedQL4yEnqWC4wvYwxE2kDSAh8QMk7q32eKeSL7AVU2rSxN",
  "key35": "27SFdkDqYw76GGyhPzJYg8LpjKqEnsXgkekPUvpH63SH3YHVgJ6bdgK89TD69Ey5D8DXFZuMEQB4kcBCo9nTv6Ai",
  "key36": "25fhPrbNunaxdaDYbbqbmwstfA51UZ17feo6g7gWvn7N7oAa6ZfuTdbU5iNXHXb9Wb398F38iXF6PEsbeUkfNDJc",
  "key37": "5tqeYkXb3G4ihYQLVtAoDfHNm2eXyt1rebZPgzadSvongRtV1g7Bx8LHBzsJxJycQ4HHxQVxGfTn8S2bcCdzMSsi",
  "key38": "46pXoiLKahZxZmhGa9Y8xxFPqsCk54KRr1Z2UhAsJW5s6tPKK6Yh2o2RSxVMd2nwyde4xHDvTJQhSRjA36z4387u",
  "key39": "2orHjUaXBUEzMi1H3B4J688JAcsceaGnin1VbfQhXakorF6MNcAVHWWr3yeCaDhUxU95R7Quum1wVGLcxiLhPmUU",
  "key40": "EinUp6qtfJyfaGquBUaGRp1fYrAxQ27kcVGSVPSJcxbsbKAAQ5HB6pAQhWxvkX5U4PLMwbxMkdZ5fzWYT7N6vwC",
  "key41": "5VEfHaX2ts3GkB9ty8piPNfWpqeaZESaTRPmLZUUuNKvs2v4dURg6jdsSUkxd38nkF2m87bLQGQChanvTqcjHdfC",
  "key42": "3xRahu5TvK3WYsKF5oeU1WXs8Z8viLZiTCAy4wMZcGsz8kLXQmBn5D7JrhcjYg7VxTzCbS5MqKwQCw6uPy3a7Red",
  "key43": "c7h6FQL2JW7TYYcgNkRCgrQFuPabyyktJX1n9dUPfMW6EpYbutqyv5DkFLobnAk4rYkGUW75kLNwbVFV3P1ZXtK"
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
