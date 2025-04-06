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
    "2JnVi56UKbDC9dY3LJfrga14LHMFX4dU4MtcwaK5o32DzN1C1NUgCR51hetWJaasxieuQaqTJdG6o9D2ENhdSDNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yargc1S6URL2rhWaNXv7b1rpgXxnVhqTy9uyE93kX1ymt4xxPv8dhSNYmXcNkgHFFGsDJzBvf1YgsD3ppE5VsLf",
  "key1": "3T2b1RqPJug5S1vvxgZuA768vLiD1Bgjat6tvXia7dSzqrPThnhMcn9o1hGP17SQe28HHkzGVuEiktAzBeuaEnf3",
  "key2": "fU1FYFvVb2R361vSLxSsirj8Z2UGYUCU1VVwYGUZXsyVeNmx8NU9opd3TheiHUvSNyYuWdmvpMcS6n846YWJavC",
  "key3": "43XGUQBWPnBPX6wEP4jZa5UtugbyZtvYCHCrfu7TndWQkGw2WMxriaR9rLfJXsx2LBZQPbKihzQnDv3pZ1aSEs4p",
  "key4": "2cWPbxohCurqyUz4oDe2bERwv6vvuknYkfLdEh2rhcNMNmjz8eLsBYUpCgGDHUGqdF6pdurhWpWXuMgAbUcdb1Xt",
  "key5": "4jpdJ4pCyCkRhagqNiiVTzNseGrBHhfcjKwFAZp51CzNMsiwPQdphQSuVJ3ZfoMZy5qw6u6FgBpRGycb5oMDh8ns",
  "key6": "49e7YRZ2b2Pce9DEHBmmMDygWHHXei2iPJFkcNgUybwnC6JDs8NsarfsALwzaXrQySDkmVHGAuNcSBFPqrmtZtSz",
  "key7": "2ryLqYFbLTxpzd4TN2UEWAWTUyqbvtnkW88LkAyjNpgN1yjG2Lbo8VWzggnPJM9riALGxnEfMU577gb1zr2epiZv",
  "key8": "5nrSLdHQ7JhNmixQoHr6VbdRBYMwUBSrFEHd5Rpeda6KEWRXQFt3KpfR9R6FhBHdLgVBujgBgpPZaMprGbhtdfrg",
  "key9": "U3Mgxt75pPtamRRnoEuV4GX7LUpSa3jpQUdAGjWGj1G22PXDyFM199LMG5us3h5RERvvdCfNKjXXaNiHjdHusH4",
  "key10": "5ZJN6AeJXWahWhpLWcR5GEyyWh3Mc2uDG4MekcGdWBN9QotCtiETgBpkbdk1dMgymgEq4LV5JEjhDuEBxX4cG2ZW",
  "key11": "5HSKKsgCrtm6LUeCcN9VucPUjfmXP5pTVj94BrTkGVgJeW7VkqsaE6DyqafBVdMKd3ZonsFwmnCSV1JS3sgRQP9K",
  "key12": "4k5bYZPx4cQ1SYNQGCT7G8XwiCiVFtHRtoDYn1yMuexdw8Bte7sx1Bmg1FAWEBkkJRDY6AhQjVM3bWeAko7rv8bJ",
  "key13": "NmPv7sh1PCt4zUB88832uBm6HoBfwPw4shEhdXaYFeFW9RKdJxVXHscGWDNwQYdtWzn4PuXmEyq6ZzwiHxhHi5y",
  "key14": "57eMuM8uTEPZhQ1XgZ8nBkW38Z7z7LBCNubxJcxxDrysdtkrUzoFGvNpDe7CYwydbRcTzNGeguZa12ZmaobrG2PF",
  "key15": "3XgXYR3iU2juSNkhycXGTLjLcZThhSgBPLU8qMeKFR4xFCp8NVJ8KtXFUU53YQ3zngdWiDRQSMa7czR5SHQ1kakZ",
  "key16": "3m2wfrNYQ5ac1VFzju2pywWubky9njaC93mCw6cocCMcqUy3EHW6seN5ZBCzCiXkApGPoQ4pSh7Weq37b6KJ9ZqB",
  "key17": "Hu8whDLxmeFM1dXqgzxALSdFaDwhbq5G1cKv8cVEKezFmJDWeafRtPA9u7MgsAX15jXYBiKrJkfjswo2s8pWDzW",
  "key18": "2DrjkNvdAMvPpcWcxgBbcVGkiHFiR3iUoDg6M9XkwWarheVNye9rTdjjG8zSwnhNir63DfdT4sPjPULRjPb3eAs8",
  "key19": "5tgLJDbmbZKtwkQSdNWjV13xpB7ssRRJ1s7wicn32p5YAc5Jw1m3Hjb1WYGKRJxPzkFUsQPm36xMNE1r6AW3eBEY",
  "key20": "4WzUgkDYZCCA38xY7X4caUvGMW3LqM3RT1adV1QrhwfZec9bZQJXmYBEtnqyhNa22YMDkcCyEDyWzsk8L4uAbusz",
  "key21": "3DL5kepWb9xL9ZUgrmA4huYPwc59SeKAUx2GUTNxWUDkB4c2b8vcxpgJB7aU55SgETHKM4pasfys8kdKLnKwqBws",
  "key22": "tJSZrLJMYwfjuPYwSQiRb4vQh9ipVhmyzADxraVP8sXrBcG3G4aLsuCbkqEgFcezqHdezjLEddj1iiub2zaPdV2",
  "key23": "5togfuWVJmrqRNYyPF7VJfakAABGKzNoEdyB1F7GvxD6dyjV91NhzxeK6VMF3a3EoT2PwTreLCmm8Z8RkmDGawx4",
  "key24": "3CrCjeMH8GBgD4ahEv8GE8aNXYNoygoDRfw33VkLHvXAeRGQLHH39NgJMVGxtSBj8miJdneiAMVEe78a7ypCdhcH",
  "key25": "vKjtvq5KCrnSBPNeSoHLp5nDGRmnkCPph6M8bMcWgWsuBFq3mbQkoY6iNAdh6kNWdqoaW9SNNHfyPW7ZgTNYNSq",
  "key26": "4cDSJW6kHDdsSuUctU9fead3ThCkC58UM4Hfbtm9P2ParsKYmqevzxyQHrefKFxWTG93BLsuWjeB5qaZMY2hEswR",
  "key27": "62Kc5yF6uiZqUhrTfK1darNJL8WdyCBsWg8CQaFkkqWJNXFmawcBufRjuDUt4XXmVLdS391Q9LVt7SBbMfViZ2W4",
  "key28": "4mHPj9XWGdMMwqV8R7cNjARgBRU3WeKS7EUZw2QVfeE736wnF53caYCCjqj4rcbgtHnhPGwf1aLq8WqohEUG1K1S",
  "key29": "2L33wWE8v7das5D9PcXjtY7Vp1yw9fGrDPdCLRQLRigguC9xpAgi33JKt6JHqH9TeaxgNjUwvi3CEJnDP9dhS7F7",
  "key30": "4PkREEG32UNRpFbLuEo5FbUQXBR9iCbNsa3WdVwjrEpgvpEy48KjGGjhNVf9ko5gaXxWEcumgcT4ByoBw7xYRLGX",
  "key31": "3vFuC5JUoLrrBNfGvzKtoawHojjjdFAfQL5XLr2FQMT3pqWdEfJ7gTdJcJXrGzQHFVP4FymYJi3n6m4DasG4DCGE",
  "key32": "5xDQYxtqjur8uceYnMUJ41sqHa3GfgdvWv7sxj8RXW44XuMQW1MSxZ6kreHgrYPYKoQt1W926JLmfjqvWFHuqk5n",
  "key33": "5sncbNKBNBCwdjF3ECgj49Q9Qh792dJUDEkgDTM1xyK2MLufCv7iynCmrqYSJhLNhf66RLAyJQpKJwkwkiobs4uA",
  "key34": "4nKLXxVMgGaktSMk9gwgLuLqJpGWv5dXvfgRagCAoKvyYzM2RgZKUVvvFgVHbhqT5bgdEA13xDew5qM8qFehtJAN",
  "key35": "38oT4fSb2NdANzUUK4dBsg6ennfuGYRRFh3Rj4CSaoo45gbwn45g7dg2suhPSdKMKkemHWZnotM8m5AFiNkV1tDY",
  "key36": "3edw4TGdB6ooDuqagzN6HFmsRysSabqVaK9vPXT6sVJpMK5y1yKjecLY7N2uWmCqe3mjdZkEmv84xtdVF4tLpnG2",
  "key37": "3eAVEUziwct65ELXAyN4HDcBBCejEUH4qkE241yMsnCvLRjX8VNUXKxMqur1BGRtuw8XwAENGWmKGvuCwDJE4LEd",
  "key38": "5fmrTb7pm326zErcAnU2rbLjVhABMFrDrfmtBzMCTtSnxm5tp6vXAPgSTk6SMqA6LU3MxppzAX2s6auxMDFtg7xj",
  "key39": "2cAzZYkaXjAGMecc6tFzB8Vvu2eiuJzknFUVgtEMbe1pk31P5HNoDgrku3Z9JSYkcH4Yna1Z7u3P8ewHpNyfpRwz",
  "key40": "3uQYNzMUwqzgk5YYg6MmLhHY99ovU7yD61gEUgeLNE2JA23rM14nYBjsLo68zzxcBBDbRXEvhBTiQnwPJc2zsqEG"
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
