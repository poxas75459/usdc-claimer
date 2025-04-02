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
    "3S3np3mTLPgaiRWHAVFemz5XVRNL2AApsfj1J7xSQDgLicjybgiPqWRcA7DaPKHqDd3dkMQBhYuGLfAW4Pz4gK7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6BR3rHHt963m1WNZJfzb9WvwgwE12YYKTidkPsjbWyaA7ddeY7RHHDjL3Kby6DPqrymoqYfcsj17TbDRWDjN8q",
  "key1": "4qvbEZvUHG71gjFH4qETZHyRBUzXQd2mAfiLBncD1c4GjTKb9VFbBF52R7cbvh1Jp57HhSwQrz5yDmNFfww4vWUS",
  "key2": "2svEsqQ2CZpqbE6KDmYEog5JnGGDfRi5wPx4WHU4saqC87Es3yELH1K6AgMbtcaiJkytibdXhHKViBYQwUfixnxP",
  "key3": "35SsqzPMzxW34Qf7mgGcqDcUzvnQQLeUuvs9Fb8MaYANFEz1BgPim75FTJ9vA5nVm3r8MA3fZnXHB5qXARgcbJTh",
  "key4": "2togeMD3g9Wa7pcj2cU2gEkrjrbePEAeHrJGqfuGosot5xF7m9YeWA4eqoC1gziCSY9z3src7FAFomq2M4yUSXDs",
  "key5": "4g39Hfh2h81gGsouZyqJJ1EjgSacNfuAY1xNo8WwrNUBUu2QE36LxpW2XnG3DRxCEBzoZkMCTXw4dChG6mHVuMGw",
  "key6": "5PkVkDHQ6k2EL9pniwUtkNN5Ukru3NUb5oXwcj2akWUqTrGwejeAk5dHa6xidrzWfJnxXKpDeJSa3CpiREUS8kbW",
  "key7": "5gmq1GBVBWTUNxwSoLLsCuGAjG6qrAbetmmXwBeA4eEPjCo7uYzig5qmmGRg8VU2vyCtJb54PJiECLHJsjCdHo8u",
  "key8": "594es2HyANMmb4KstSj8k5WVPrSzoMwm5VqJ8kxSCtWdCB1x2cfzxfokknRo4XySYdwLr4rXNbzbSiM9Vbiced8f",
  "key9": "QhkvXBPD2GHQBjXF6p1XbduUPcauJwf4HsCKLpeUUfvzjWUwanmcfNtCHrtzumJUPnomSfk9b7v9ZFAWg6dJ1LJ",
  "key10": "5egKJXLzTVm3TQK95EUn3p6WR5bUE9wDqShRjmLqqMwyK93rVDD8dHDdL9nitiyPdkXgYq4rs97rLMDmBbd8uyq7",
  "key11": "peC8bFXqnscKCeAC1mvFiM8UfhbtEWrA3ZRnoXdBs9jHLi8ZHo4mBWuk5rDgrjaaeoKyNrpkVMPLSdTSd6utJeG",
  "key12": "63HJNcmQRvsP9bnUKTxxM7aAmqoVhPkDqc8AZ6YEdpnPby911t1FraDXyuPbpNnvrCEcKr5Dye3yXj96d3fcUVzC",
  "key13": "5DZvCwPpgfwg1WNukQQeM86SgUBrP6zjwXTBC1pkjZ7vxrX8d6TgJALCcXndX4cfy2zNe1vXSbiiLV8owyoHiXFF",
  "key14": "46dsVxxzRMyiq2cFwWtMCfheeMqv6wddEs5LXEkdA9BL3B7r3xDqogRmUuG1Sit5uA8SEeecJvUVDjGDW5hpTzCt",
  "key15": "2LiE6FzHzWUhrWVpnQSWh4fdpzRuQBiMLJEi32YNxp9e6zRR7Ncqia73HaJojRCdN4vM4rkqzpy1oKwEBNLbPke9",
  "key16": "2iiRNTSzv9EwWqoupqqgeWpThuRBbEX99aLnK3NhdzJ7VusSnPYuRJpJ9iKjwJGYLw3ATaktDPC8SvyGDLz7az33",
  "key17": "4QUEJPrxE4pSbUHRWnQeSKjmAFawJnTrBec5J2ceY9f8ERD7V4MEMPt747ySe5vqMBhSQK8uuTN95uw6rzCEjM9a",
  "key18": "49K4NfofiFxhid6JHjpzrRNVHcLZ9vhA5uEYGPJ7RKohHRfWc3joDr1m94dGroMUjrgQKEwaCSr7RPXh74fJNmZd",
  "key19": "2HutH41xnmyfyCSJbvsrp8sPoq7bZcSZF6tL7jank2rSF8Bp6dopJ557vSE52yE7bSjjmcHuKTYiBBbsGuHAfhkS",
  "key20": "Xe9evT5sdFxFMpRswJVsXx2JkxBFkpYfiRg6eDkTJLi3pxyaRJnd6webVdpUtYQVqcKBw5fghryMDdNw9kBmjRw",
  "key21": "tfQzmkyReriPapXcuLi6RSUUknUTSraqXHeNzwziXy1EuwZjXkjZbbAPkRPYFd6J2BKCM4pnZkjaPtTCqTySxkT",
  "key22": "3Emw2HWgTNRZZYNkGX6YgbWDPqnEmo2D6BQ5JMGqrkPtzHqfqMZsZvnGzqgCwbj5P3Njxfh1j1tixLYvusQ6tnHQ",
  "key23": "61wqtSg3uzNCrD1GTViFRiMBap9VXWP5U9XcidAoQHkpcDaZEBZfG4CqgijBSCS5iBXFR2WwuZA2dP7ncwjv7wkk",
  "key24": "4GsgjXsBVMs8NYqa6huw4kgWNjQnV1xaQr36h8VnPx5CGWV2XTH61D2qf2Kwf5mkAHeoQ62iYMLBrhnfDLRLY4j4",
  "key25": "4aYamdyCYFAFiWxjCs8BpdYiwdFbURWzvk8iGVmNwypX5RXNGb5TdRXZpoMDHAnVdXy9hMEJESBf8RndA4xuuz9A",
  "key26": "658yia7cxTiFxZAdtNcmtCYR1anJ3Rgkd3kcgNfEf4qZvqpdk7Df7Wfzp4sBahb26bW2zPJj5CbbWow8mfFZqAE4",
  "key27": "2t8g1jCAD5iNCb4v8PZbeMsSfYVsvYgAgWEQbRPKGZT9NSWTEr54swakm9wzuT2LYrUZjTW7SZyb9xEx3XzhHHqs",
  "key28": "54qKzz33cd3RkX8HRLWe33Nyhy3nprszJGHWGFPeVQUsntBDBLAoeYe2i8W7c9nAbEMFjqWno22Y6tYbTEWXcoHY",
  "key29": "B1tNDMsWQNpARJJjE8P33ELvBKzAvYaryE791QWXEW2ZFDQfUeNnWdz5pFpvtj6dLjvPs1ua99JD9YAD5Y8ddvz",
  "key30": "438Ui4wGSp4s5APbaukosBNAKbWnjZNDdkN6HmhQLouhDQ4XAqWCYtg3HZpvQBu299D3ckyjgmbRzFwh3tRmVqxy",
  "key31": "3xnHjQagP7Lp5t7fV4q1YFcpFrkeoYEepXdGvxfdYV63S8wJ2aiaC4VHHZZz4cCVCH3jaQYjTvTGvapfSTvjRxuu",
  "key32": "aSRHfGfWNMC2EBgLiaF388ZnoEDb7BDs21PEy9MZStEoR1DJk65Ct3iB8cE5yCKAapfQi1wU79Q1vdtnuR4u4xy",
  "key33": "3J357FDTiA5nwd1jN31tuowiAn2L1BNXiMKKucm1naABXvWd1hMWDQHi3adZBYeqqrrdgnKPexnRwmxbWp1ukGH7",
  "key34": "3ubMWBNig8TtpgTzzhUzNqBJTKc5vrE3c5FBn3Waeo7SAyUHvVWL3u67ZQgkwHqnhALfNiZV47aMQAe2oTtYhKMZ",
  "key35": "5WWLJKvgM6pT8mt4MAUhodB5sNeVcB8HWyB8EezVNXdY1aKkSWNYtdN7NiHC6dMZeQXecBQ7H8FC9mqNiYa6johA",
  "key36": "3e5x2ZTzraAfu9bvJYVXdH7ZLxgo2A67MQ6igaXezsowLsMEJUUJ7wX8PzQc1o3TrHoP4wsye4UXx1WMMYCupPWJ",
  "key37": "5jdSNJDFnGvDDN3fzJH5m7f7uu5wfyA78tzvv8mAC4EYzAH7WfnyesiNxUMtticzBY8eYDDCXnfv1hHeqRzcnYku",
  "key38": "3aNzKK9vgMkGaxfZGH4fMvzehwTdgTWhAhgfcCsKRqouBUCwwAJZnby8Gn3J67PoBfiiuLKnf6FAXry27x653Avv",
  "key39": "4CiPLfdRfk1KXu8H6odcQZfViY7pV99hydsgTZRkWhs6V1FrRRGJgphPA1cqAWYaXDt66jM3GN7hoXFyANXd9rVv",
  "key40": "2Rk7kVdeLm1WhgozrMJ6dSF75NichxoLP9FsNCa54gXezrGjtJtHft7X7h7sYeyNCoPH5La1doJ5WDQQb2CZ5JxQ",
  "key41": "4B583nmn7EyJRTbFr6qzaao3cZ87MbsUtw29ZdYopULGADJThpFi2GDD1JpkZoonf5ZubxsDJB2dAGdfs58sA41y",
  "key42": "aSDgWapuWSMdEADmwKHfHDcDbM9GxNoVkvjjY8GFmU3SPraedUPFpAUywmf6VFF7oobaWEmBJXhhAZn6JixL2ou",
  "key43": "5FQtEa37KXktZ28a22zjE1qNXsUrpKrXjXsgD1e6txZT2urvXXK3d6SZxa1e9YjPWFiCtbXXL9mU4mJqTrs7dxf8",
  "key44": "5izjyBSZJvQWGa8SPdSvVgHzAGM9G2sV8i6fjmfpS9gq6e1JBfCrppKG2jDrCKNG3CCzWf3HRpr8jHuufZh4p3jo",
  "key45": "2JJJvYBJDGFB6kzUZaPZRtu1W5CdGN5Jfm5oq1Bbwouh4YNrt7CCCbUAVp2NEdW7Rsu2DXhiCoJ1X17AtME7xJbC",
  "key46": "3ZewTzQWrSBabSXUhotAu6JPMkXpXzjMoyjAvBvTJCDTK9TmRxpXoFr3QdsMaocVWHzkCqbZkzu88qwph6YsEnv6",
  "key47": "rGSkWz8UqWtrPqtzU5vSgJSKRqjiEx7x9SpeEMJS4fWY7nehrWaJwgSecc5typpRs3JDwnoAK3g5WhNcznjhcmQ",
  "key48": "61nZGrY2quQCvVN5KfTQ5v2iJu2Pf4BGR5vtjTk44L2Fv3BUJPGAwnK9MxyyS8AyC1ZRfpzM9DqdtkY9dmFuqNJ7"
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
