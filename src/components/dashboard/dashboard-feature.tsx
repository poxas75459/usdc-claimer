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
    "5n2sVgRvYzsDNWNhHoHfALAd3xFpDojpn7chgjBjb9CbxXhzzsRYDjzP7raT9Gs2qAQ8kf8UAJp6EnNgq6Zxhn1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N5ZiBuUKzbHCRjxS95VPWpcu9mPYMz9wbZfaP6JVUw2VqY7FVdbj5Xg5wT5JExxyguJVVHDyLwXPyYxSeyZc3Ey",
  "key1": "5hmhFPKk82Hrxj5QQUmjsANgvRjSz43BggY5vBrStRZvhsZLQNUvK2AgVJt8mTjzqYyw9ftRJYQGZweBhzzXwJSp",
  "key2": "jPGbo9GWAs4NKwmoUWfS4GjafQPzmEuE687ghk35jCNTcC6qJ7GSNfXho948iEnenwupCL75qN43LfrnVKjQjpZ",
  "key3": "521w11oPa6odRWUDZta5gWKnRAyP91r4uudhM2P3s5UaWXiZKN1J1nVt6WhUSQsL87aoRjeCWHcGX3mdzzypjnnM",
  "key4": "3UwYud1J5rX4tH4HKKfyiwcTni3bkd5kA1Y5onVXcZxRDuVBhh1HHaYkSAfdSqQsHoemSX12UEsWwTBx6RGfFk2E",
  "key5": "2BUNW9EqRvo1SZijZMeecNnvu9oHhBLm3CrFFJZXCccr9Exp6d4iHF1i17fzyX1JSP1bfzyoti1L7aNa2f79uAj",
  "key6": "4T6qHkAhU7v2PrEa8Aoec6zUrF2aEeQ2axgAYCbd1FBUT7sUmN15Fo2kcZoPBoZFM22pRKbqs7uKn6XprbFUS93N",
  "key7": "42itH5eDaxzrKBvW9rMBR4XyrLfbspWUrwtYSVP6FMoa9XtEbnVS8gVfTvbEARueVbcJtMrUjnSKVQjEhtZozvnQ",
  "key8": "5CM6vhEHGTDNoigRXdMCmPP2qJzVhAdsXCvroCB2wUYqzJzXczyJsAchhy9PHrcuKA68AgFso3CN6FCrjBrhRjLY",
  "key9": "CLTo3db3jmsrncxjH1fEpedWHQzX8zqLo7mk9XPfSrTZCkHJvdR8hNxgLn6cLzWZJzfcrEWTWUpKyUSsxFWKpda",
  "key10": "37LoWagX2pmWHimiuUdAvMndbYyxLtLqWD3AZZKFHqaPWK3xrt7Aq2zTPgCVzysMdUcX2ZuFrS71JCume1daFCEx",
  "key11": "4WxtHPSy8FvXF9CmYvQbrtVjBZChdCXDceyfWtLVehM7SoGJPUy9g4aQ4WYHNtsj33V5esdAaiyZrV64fLxWhsh3",
  "key12": "5gA59aR1u6mysjSRAyXWQNx5mFjfeGwMkkGeVUbu6o8cXvqPkWEPC71iwU4FnL2hZAHZk5ZVEVYaNg7odHos3FwA",
  "key13": "5wnyPuEHxV34Q4b1xLHzGcLHGgoE5UWBBJSa9Fr7qjAP6qSGuotWMy9kJzmxuQUa6shyjYh5wAcZhqi2LCrDmdJs",
  "key14": "58eYdna1kE8UAHQ9R4P3tqpRZcWgFDVpWMMcfqi766PmjJJit1G9vt1bcdWfscD3XkYgk5d3pjSGKE9PjEts9x2N",
  "key15": "3ySv7HjgCdKQtRhV29Nffi3ftr6pLn2ivvtWrNPDitqnd2AfMnisutQnLCH5vq7jQktU3XGqss4obqDrzTvctF84",
  "key16": "2T42tjGEiEkoWrgiNvP35MfrN4Rnr9P5Es4MpMvVq4vDiJJMmLERcityDMNgKTizokq4A7meqYnCzeoNjicUchuw",
  "key17": "e92JpD78uyvM8ywRFSSVrStwBfjetChLeFpyN9RzqPeheLaqPEzuSJE4ik2ZbZHkmr9Z4oj7faFS7LcGvvqJmvj",
  "key18": "5aqCu2Gp5bkFZyaTPn3EuWGiJQDFXoJcEz9UDLMy1Pf3zvbggckJ51P5FwBP1NvF587ySawWykAXmQnWgiX4Kvxp",
  "key19": "5k2k1Cp5sg47EHXScBNeM19RQwt81VmGmp76PnYwYh5SganweXEGZyjvrAMF3ty8HcYc5dP5BaK143qmVnLgnUg7",
  "key20": "3aRGhdd2fU97pjMh9ZrCLF6XKaqstF9MG5T33TKQmRRP7RUJeMRYK2yrLpVSNDW9TsQEkUGCfKck1qju2vzeoQV8",
  "key21": "4qK5LK2Msikt3U41dG1jniY5wZ5Zj8xG9aBCZyML9cDPz72Kz1HYcMARcJjjBG1YXzsMZhYJAf9J7VDEvxmfm5Hg",
  "key22": "5FiAsZPQUP4syzPSq9e9BebQFgje4B3ZoGiwvKofWvUoYKTuwGaxdbFaegMynr4VEwK3jVKLeAfGicb7C1U9LAEP",
  "key23": "2PGymBJQpsoqHrTJ9kXTt2hSRTBH8tBRzWs8s7R2cdSVQN46dcj9HQiK5tJLproSAn2eWeVEHAKXA8t5RGSZyGKZ",
  "key24": "5CZNAhMhq9aN2WjETaK8oZgK17CmX4tXDUeVRqZSRVsa3jme2viAdUxvZ4PwL79sLwjnkAaVABkWndYvoQ3Erg93",
  "key25": "5aTGFi1QjsPoSdkqDBwRkCdCeEYh1PuUfuXx1kxYDPZHMMyDHcDohyUVdmeSFKHvEsmiHbk5bR75uc85WkVwDF4F",
  "key26": "5yLxR87YvpPaTYdPAYXcdvsRuYNbhFmSo63hserb2w7n8HNqEK9QrA6FW7qZJmWzQhq2srjKKyXsjagwpSTqjx1y",
  "key27": "6QYZfKFeg3c1ZAom1usw2nCXcVXNk1DzZvGXEHWKzrKKe8DFimD6mf8xB2n3FrsBzrvXZLMrMSsifmJhqRwfntW",
  "key28": "62ov6VVEgCiiaq4319oQywLfBbTcV8SSpDP8uBesdsM6cYdRgGQyGFHSJtJACUD7KFbFUHApad4p2TyPcmWht4FX",
  "key29": "3H5TBxo7TRUytWorckDNgEqXmyZfJsGZYnQppupdZeyj7rYMoyuYoRubR5dd4nKByAJ5makuvSzBJvkaXmqtKBQh",
  "key30": "5wWUM2CwsNtAPR5epJEkKvjiop2KEWySfqDZprAhQhYK5RbQ5Am2iGRiLkUHYsqmY5Z4kcCV3DAeWgYvU6DeAUW8",
  "key31": "2AGsFaKnd5f11EMesizbzv9xK6zqQHkxtB7XFS4asPLcwmnbSoD6vTMsYUYtmadCTeYXvfDqMzkXm3vSFkayxaXV",
  "key32": "2ycBujMD3V14gXnRTtcoYMAPk1wfxpsqbusNEbpCy9Kdo5UyWLZgJ2wcJtCZknrp7FC7PSYCpf1fqjNtKYXJWEk3",
  "key33": "5yTYzU2xrgsD1T1Ts2e7WMd7tzVMGmxeZEo7WEEZQYwEXDvehBHHcouKw98Rtwwu6v2TNEVPiFjUPTdXY2ajF1h2",
  "key34": "U7XcWfGQCNJUmw7RSFh7ogt4iAejC8ZstsPCUdqMPTbMfqXFPcvvrDLUJzRwQBrg3qt1PHmLkf91e8mzGhGNpsw",
  "key35": "3txZKApAZpm6mhQNBJ1wMon95VoazBy6Gm8kGTLKrporRTAM5WRi5dVxf78hwyZLdaPaPSRgWuX65Bhpk3p6BFXL",
  "key36": "f5HNZmVMnoCCQfaaGPkGKN8q22ga7Q5Z2HQD6zEaJWVFeqS8WSujtTrrTeMjym21b9fiRVCZoQpY8Q1eAvkbFcT",
  "key37": "4d1ejzBHBJ1PDpAhhvYQ3QoCe5ttqk8zopxrV5ZLJkPoDkaxGq9WEpsGt9HcGu3XTX6hKnto3jGPe8mrMDypUfCL",
  "key38": "3iZe57EBfEmUVK4Pzd3DkJmj1HHZUgcJJK3E6z7FUuV3NR4nj7D6Pov1T9Pq3bGuPNC4Toi7d7aHYgxwvQQKm6Dg",
  "key39": "5Xu1QNipihYYCtvhhoDs9u8xhjfzLEMzUjxDn5gFMo4jTahttawz71DLxy6btedDBr5bBeajtMd5wjNifYS6sN67",
  "key40": "daFtxnfSxmLFFSGfZMPX9iqYP7TSqwzfnNQmzBeXUZoNAQCnBSmkG8YyHXyYiYCkvk2VAwv4dcAYRie6rMfNb5m",
  "key41": "4juFyWrsEpTo8ELHfzKEXYDjLxRYe9UDyRtucmALv474MgmAKDD8b2EKnr6JiADRnkPkoth7zaXE17DfWG18DNUv",
  "key42": "4XeLFUwn9fmkkHHwdcySQbt1cPRkxYAs7ypWDGmqKiHtPoB96d2ry5zM4QtPVa9dfWUhQNfvVveP2wr324nJ5eVy",
  "key43": "5VDWBEF9mNHpcY1rvCWPvsrBSYj71SXmeDp1Jxi5fY5fXRtFa1mvQMtfrEPsrcqCJakDKUysNdrpZVSNLAvGpCi1",
  "key44": "3vQLfDBPFMJNSMn2abSakPg9GbeLt4gVvf7kqFgLBB2vVd1kKaUvFqWvMjNKUpBhah8G4cnEPTaYhjge41vxncm6",
  "key45": "uoeEBqQBN3f1soKqX73ZnSqaqq7Sur2LkhMaXKZxArTWWkkA41JGS8m5FoZEoe3T4x971Ma5hMphK4auxPzD3rJ",
  "key46": "2bumZLDqdYqHCu9rtu2VTfExYcM1vUpWaBKCLrhh3V369ZNdSGSY5Sjpy7L3QZ5RSr9BKGh4a3Ao5RrJKcba4WD8"
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
