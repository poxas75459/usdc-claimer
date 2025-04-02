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
    "3kG7jah9AToLRTGaSA7eaYziJcAij5REnGKchAaZC6ynSxwhBgkRzpdkCztrDivSpARfZWWDKgatqmeQDvoRQakr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HUb9ceTG2mWMpshxZutCo8n6HVgBn8SbPkwsKTD13dLLytZ3GCt7todazkBEj7NKAiZ9GSku8xivQ8gJn5P3ZUo",
  "key1": "2wYaSQAnceFWPHRsZVmnMQ3yb7hDUq8UPExCTQ4bZA8epAyeCsWtKzkLgDVAVSDPBxWCfPyGbBJVudWcsbAXURdr",
  "key2": "5rS2Co6kT2mR79NLfPB9S6tzdL95wFsDrpQzuYAECzEcBqhXUWFA4Z9bCDbQejEexxFJ8c15EqmijVwBUheg8nv5",
  "key3": "nRdnP3AMyN6N9adibV3LorWW4f62411r15GzHVBqnmhewikBM9LdNipk5qKJXTDQZNjVWLmDLZ79MVYKGtseraF",
  "key4": "2SkkiPaNef4mdbbPghMSH33yoCEDGT9RT5yeovAa5PcjCqyipLs1jFbu4dciojVU9yLHTH7NeG8GfvQD1PKCb9Gx",
  "key5": "27WuiBDbZjxyY8M5DS1rktcKNY9AzhWa9H5pKZfA1XuK24JBt1kyef4x1uPSqNgstCjddRxVudPRso28ZMi5km5r",
  "key6": "54zMSvrCMonAZkbtqbGeNM4jUiz9jEJKxRX6sbN59nbLdEiT439gijF4D5XB4Lsnnp3ZcwNZMZ8iDfrsDRSdUR8E",
  "key7": "4yd9nfDkYeymvmLH4RJUx7wS5osqGCLoA1YUXEDTJzC5Du4ccGra5eosgTD2orPpK2K4LtPKAKUNKfjbz27dUDGS",
  "key8": "wZKyz8SVvxZSrrAuLHoAD7a2s5Hph4x2MPHtyS51sYTqNH72DGEcPHgQCeDxB7VY5vEGN39756jNCJ8EP1FwaFh",
  "key9": "3Tojy1g1kn5rgTRiidTtDa8FeQh5yZt6C9t4KaSkBJ5vWWZNz9uZZuhnEcA4oUneFEuEDt3ecYNjCCdeEzV5qcke",
  "key10": "5BuKMZUYLzGefV1bFTvyRcUFC71gPTcX7KFhnHMz4Pg2rWkkFz8UcYYdkSpHzioCqbhDZPViVm5HyVN1KYc99A9M",
  "key11": "32UYwnFaL49vfz6RpfdUMXGuAB5JfDUGTeg7GU4nGUmzNYJtvW7hji4cTnAFmhe58UQh85oyKdmrGemJzVzcYk4y",
  "key12": "2GT1p2ymwDtRd5p1ZVcbT72haQwgbPSGG3CVS4Xv4mLA6HbQkiu5YoojPg9yivLqtgmwBYxBxBVpCetmDX5SQ3vN",
  "key13": "FUb2tvJhhhgTYBuoT2P4nyektxaxz6TU5fEtMRrpg6DJs29zxkqzTNwXgep8fMmX2QaXE7KykXCaENdmYZAgL5z",
  "key14": "5RJFMYYMuiN6m6KX9NPyeKUg9FjAqnjN7AMnFnEopFwsqQrJUxVgSqN4MEaiMvvKFQeyqSuX3go6jwxNswsUYhsi",
  "key15": "29c66qvYzsYPgfps3Xjoks2PjNMLCAXDW2EQkZ2mUKtNsoyRR7sCcLkVDixT9gzcN3gV6JSRATeD63RrdZ7KDQWq",
  "key16": "4fSjadiww7nYgusa4tb9EFdbCA3TCjMhDMF6ihwjEaDN41KojZdBSa2SfB5XKuqtECdqUw4WiB16CbTTfNXRU5ty",
  "key17": "4qVTS8Bvt5EBqT4jt5t9k3t55qtsFFkQRmJcXhapUkpjySLdTnTL9u58XgXPaJPYuqVErvBbU2CVpREGG6wSZGVy",
  "key18": "3keoPAxdNZHtfA2DvaZjechE8QuN78SJxVVvhRVusFF89AGwWrafdE9DsWQyiw3Bvd9odW8oQNQKi5kvSt8rvAkn",
  "key19": "2GGDeUjKisrhs4doiTkRzq122P9F3yeqXWaCm4GEGjmXEHZcKeH1pxKCjT4kscPsyaw6KkPEzPF56dmkkPSXFbyw",
  "key20": "61osBfL2i6gHn4kzhpMxU62WKsAg2rzr7pDzmBGzk9E38uMs4CgKaiNbPhw313Jw5QbXhPUnEaQjzutamVsVW4eT",
  "key21": "31iamMhQRqZd9NWRmDzjjBNPV7dNCH7joXHkQ8vUHQXNtTyzBdhLDPkyuEipckwo4ML1DtYiW5yUBfV5sddzFe7T",
  "key22": "2aABo11Hxbv363yq7Pb9wZLZVSzoFMnTAf62zC574qZsAUGd21mRDseGh6bMiBuTMVicXPvMdECEQRHV2RKryihQ",
  "key23": "5cAwzzDzNeWr6KsceuSQyooEV1dW6v2MnV9SRtQ4F7za8d4NGhQN3Ahp5ta6qwYScmg7RW8GRWw9TXv1dqAEkXAd",
  "key24": "mdLWWbkaaeyuUFjGBtdnPET7ba8vgDvxTHFW5MLPwvu8nvgan7e1nSLSCvkDicy8PGK6uU36yNsgzFdurfcz4q2",
  "key25": "4PEwTjucoto4gM5oYf1S9BdgskZzcHT2AVMs4DkWSgHoSZ57sDsjt1AhuB1iYY1g7n8ESbAh9VEouuPtfLCjEY14",
  "key26": "5jbwUzpNruPnQkA1NMDE1woJmFdTocaunX4bejPG5CuDYJYqDYENDFS1GYoaTnuAkJQie4GX79fzdVkL2SCWqPXF",
  "key27": "2LXsYPwEq3f7YPz8UrrPvvNxxXmfAaa1bxFcRrU1xQi1kA89JWpKFssG2izxBiNn8VvJ6RjCwA3CgHeSVpvFt6GD",
  "key28": "3V8d3ckGMMMf2iRrW3RJ2pYdgG3zm99Sfp69o86v7ZovvDqL2M88cGW847EaXLbFFQ2jdHXCVLeybX2BwkyxuLiu",
  "key29": "3RRQHR8g7def6EUYm13ncz6nwLL1UtLgirmXn4c37rbttN7yxP78DByjxutv3qATbot1nqcVCS9EX5efVLknRvPd",
  "key30": "3cvsDDv14V2ooM9Ey6ehib2sGw8DuPaAAcvYqtpb4gbAfgEbu2v38pyWoXcv5gT16qEk1zVQZzS47vxANkZnkqCB",
  "key31": "3DVXL5Zzphrx4Xg94fVztFLWbrQSvKEaYavJfJsTp8eQYKJmSFFpd4LfBcrSaoFxeUmXtv7yH8VMQMr5gccJRyWZ",
  "key32": "5AEB7gLyArUwFzdKQVTgHhp9crqVH2T7Mmxz71U9ZuZCRNrEWQfra6SPg3sQrKoZo7af2C7pJQoPVY86PwSzc2hM",
  "key33": "WdBEkPMBX9E5BgLoaA1tyi5F7MouHjKAPpVUtE69YzSQhnGMcDNXkD8Mnb36QrMVVMR2kB8B2hErs6SYsH6AoJQ",
  "key34": "jzrK7BHYajSsoZ3FBJem9LpBgoqXnqdAQUho9Jo29UMUgWc5CP4s6fr2RFdFM8Prn7djUhL1vkXot2WVKYHvMgi",
  "key35": "2HAz6a9CgNHm76wDVbnEMfNPcK34WjZ6eZe1z5Kp4fNLaeGzwkFtDmrrEyYsV8VYExmmXYkDAbe5wnzJzjiMUf5x",
  "key36": "3f51FkW9RWxTwF7wV3ZKwpB5RurAxvt4TopFUDs5WzLNpB1sqmjji7PzHcobe2an2tPkJGmLKKEZHeKPHg5yD5Fy",
  "key37": "4FfhbNEqGK4PSwabWojCS3HLU7yVXTAJwRsQqTiRnLzsWx1rFAVNjENG9J2EkW7g9ovbcySw1gCR2zAp9fmCjihq",
  "key38": "4R5VCws5FUTtsGZEabyE9hUrHJCHJN4EZm5t76g1ZMQN9rkNmrcnPTnGUPvTwntBKzrwKPUJPttNrLk5wfxa7LS7",
  "key39": "3v7jXYqF2EjkcqwYyZqpd1eUpd7a8swayDPgSnEweFQxDu71ChwK4B9KTsY4ELMALST5fWgJ5tZ27JK7Wmc5ZTv9",
  "key40": "2Rx3gFBYz9VjexFbJWCuUpnTkh7E2kVgE545dfJyRnRfoCq6Bn6dwigpq4tMshZi2jaFpXnxcwdwMgZw84fW7nZ1",
  "key41": "35jPF2PfSPGCvA96fcnmUrgRXSZFWwtubLrWU7Uh9YkqYZY95TLPpZsx3Uw4hqRwofbGrstvcSacrrw67si3s9sE",
  "key42": "XYBC3E7P46g5eheaNgTGaEZZWKZsGAaJpBFw9rKca7VJW1DZF8jQv4ECUVp23XtfNACg9MoKJi6RvqiGEm7HDgL",
  "key43": "2sFcuXqCRqtpBcwudSafiPfr9oq1849ycM5sHE9UpAi9gdLUqKQUSRP2B34HLpLXTwbmz4cdPwcTiwR1UynEfkxy",
  "key44": "3YrjajjAtvfg8JKRRZ9oFQYiSeGdGEkfjowByS4cUPZSX28v1uhy9h7WHP4aVz11AgCdbSyi3qP83yxu2adpe1QV",
  "key45": "4eF4dzNFzdDmuUnNekPYh2h9D32P4SML8idosExjPqHSECPZ3sJhySMd7KJyBbjoi9iQQbxzVguZKEkXnQC9V8Z6"
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
