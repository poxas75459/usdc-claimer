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
    "5VzdxSbVHvbiavoxMN6eeUGu8AMsKzLjM2qKvTsnh3dd8TqUV3yrEiQEnpEXNtTFZMk5xTzxrth2UZsuvWTz54bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HbouAXcyvvMfnxTQfYUcWKATNqV4unjvF5SkNBQjAAtBLmkY2XUL7KpbjQVZ1RTesCTz47PHcwc1fr31eYwwrxL",
  "key1": "28CSoUbXw4ScipZRR2vedkJhByg6EeZp9mFdQSHqzrDfCmhfSoaCEQL2iMQXsf6qmnsGHbpvuz4ifjvqbmhELbUs",
  "key2": "ZNj9gkdL8jUJCNHRaWfZaH2iYkXNmmjqmDGEwf4F9W4n9MusiWngxFEGNMYwqWao5KPqhV3ZLfzoSww88LhWxN4",
  "key3": "2HZYQJ94FapmyAwyZnH3vGHcTdMHcBbFrzvXWFqB11RQ4rLbbsPeCUTmj7queC2jdsQKedaxUSCZPtmvsQvhCSzB",
  "key4": "2PBjbmCuTAUhC2hgpmyLXn21xtHG4hKzZy1KPuyeLS8VbKNM9wj7Fr8NJ9LLbYjw8hgiUKZ7TiW1A1vhCSWp4L4g",
  "key5": "4bxsCLjQf1WeacrV87JN3XxYVg5fYRE3ZwkYZ1VejFP5Jvf81WSg8iL2RE5VSbzjHvjgRM7iKQxCDxiAjMMoGZXJ",
  "key6": "6ZeCk5Q4r9QepKM9qJGWzqJisLeRkhaC1VLnzLwFPYVdK9jNHcdsAYB1EKLBAiJbb9wGTKezBi2mTHGN2KDTW8E",
  "key7": "Xq6bXmWfGGvsNjiX8UXx6EebHdGmVYD7s2BnVykW5MGjfCL1cy6B6fFo4tQgygtDa7EXfTtkSfgBhQMXZiuuZgM",
  "key8": "33fyB4yZXy6tyBpaebUn8Kv9HQDNzhzWguDNEbtPXdjRSHKGi1E15RJ2379M66kmM4RwNm8K7FoQEKj7vNU2M96n",
  "key9": "34e2gx71TNZmVmmpTdjDpd5vR7yA6eoct7zVYAmxfTvVagB7reVS13vbJY79HzZP8hs38rUGjpRoBkGEzPN6bp5F",
  "key10": "5Zt5n9VYkzVPcDPsUeUkuR9wz7UPoZqjy4oq4T4w8Fp5F8FbVNtp381EYmbhbGqGAgKZDkowgZ2YwT1MGsy2faTb",
  "key11": "2Fj83ANXbxJmAPkWxdikXM9UC1tLkDqGHMDd7o3vsNHRgnZ4r5jsi2QubvTxhh7MpTwA488Wt4AwHt946F2t43Qw",
  "key12": "5ipHr5TwfdXZqVeVHcPyrFpBXGZC7Hr2kb8Kutc6oPPn99FVk5jg4TBHa7CknejzvFdntzawqbh2GMBBzhwMbwNF",
  "key13": "4dCAwX66CAeSgMjW3eHmoiL98H8GeoXs5kUZ5fGHXP7snV5nZEpV5S1JjMgW1XRmdDGxrYg5EXjzrVac9oR67yHx",
  "key14": "5852HqnV4Snp3kmPPPpwv3JFndW7gqtQqzY9R3bKuRL1pWF3KgKQbRV4HMwxcc3tei3xN2HV3wCnHET3T73bu6Je",
  "key15": "2izSXkP89Bbv8uLtVLbomMBVHFqRbN1w21XyS5uPxJKMqK5ufCwEGTp6iRQqgQicHt8UCt8DtZKAMuRXtVCKSUVU",
  "key16": "4SiDNck8atuFTNrcHey9rQmm7r8Csa5iyRghJZPZfc3wCQQgXAXB7J6zMc4KiutGwnF8UcufFLhXFCrz3PKU8LhQ",
  "key17": "5Yo7qnMMgGtmVQEQ93eoEHqXFk3iqpMsJQzf4jjdjLs3UQPuKp8vRosjXDus8fmZygJ1RPgmU6SYZhzUmj4ywKiv",
  "key18": "5hMXnS1JLCCEA23aUrfQD6aNEbEmjzRcpD7p3RbpaXDxQYxAuD4taQreBy19CFC29LDzVRuJKjtCBvDyZBSfLKe8",
  "key19": "4DwSGrxoVjrgLrasDcpTPKak4amag5V7h2FS2PcKzKphmQdEAwY48WNd7abdQphLvWu93z7EVokYqrHycraFC4rS",
  "key20": "joeuvVPrMwYhUUH2peKicjwnHt6ujD65FYjeZHDr3UukHamyn9qyphwBD3P9uhPKugEeobTcSSRn5Hk2KgrVSYQ",
  "key21": "4PCP9QrhAEzADbipSu7wXj9vTAjKYWcFZd84zAcZ34RTPnqJspAZ3691zAAe9fTZxA3MPhkDYugGmNP3CY2MqeJb",
  "key22": "66swybtQzLcvENcyDXrsRkmi2HDchwJEzB4PWkGz6RWNbuMNKcQ18csUpzHK4VgfD2pnmbacQnyMyPg7JYrW2bQ6",
  "key23": "2JpXin6ssAWBwYZ3TTJ8cTaVAani8GHgkWW62UbjtHUpnjBx3SB1S4zqEJAv27oisFJyGS7NFuNmpusaTPwwPw8L",
  "key24": "5zphviNKQdJpRDnhvPUNC9VANECbWgjgPYcRyeHWfLb6M3fbYmpiMSg1q1uz7vgoiGFfnArgF1dSzEABHmUfWXw7",
  "key25": "3CjjvEZbpo6gvGrATxdrPYbwS4LNnvr6gYZSkLEgFy52FyBF3MtRXfBR3ofdD53Z7tAH4DfDq3LJeuuUWeb1Rtan",
  "key26": "2BZeN1zo9bsCznpXpoeibmxRc6jjCeVPPchH6hCKYTb1XHFwqQAimRkuHDPDMEXBsWGkmz8YWn9Bb4uXFofhpPNN",
  "key27": "jZSrQXf7BinZv7MrTqCZGRBLCbycNe7h4aNAhij1fM84LECBoRiAYVLLqQ7KTo3dn56XnXL9NdbtSon9mbFZiEp",
  "key28": "2y8D9itRr96df3jwgBnjPy7DfSDgzobF5riHvGdLGyssurSvp2Ja231dk2iv5uLyBwWL74YEK1Bc7FS9bBCYuRNS",
  "key29": "43qv9D1VbFDsW4JSiLZqUjc2eeZXzoWRN2eLGLtQfn583NxmDfoJyadrVKcFy1FWuhEVqLQSM2xJ5ju1pTF7LFdw",
  "key30": "32d3BHgPeyjQbsnCq7drogcXedHUddAWGuQF6aNuXnkbBQ82QsXXcJgjx1Ns2BCEGKEd3VNZitPC6V8xB9zG83Gq",
  "key31": "2DZvyQSmFxoiHz864HBA1HnPzfkPV9YfyCe7GsKxgKGbEQ2eCpKviibENpyphiAzMCiWBJ1YKrDKNWKkjKghCb8c",
  "key32": "KH7ZUVVywWkXDDt895mmWFLsGQ2NTBBWDLgP9avbcws6nDFmboga8hLQdWYSRkiRYJUUzFppKpDp8DQNr8wq8Sb",
  "key33": "4i2PiH7HsdYEJ3LDV48XuZL3BgWVsnLaRgbF8Hxb8B37kPzvsb3JhezbXEqqQVdgG9LuveEpnw5onuUfPXmwrhSo",
  "key34": "2CCWGioBXZdpqagaVeVk5kYnXDnrfnCZPRz2vD8QCh766Ekk2UR5bQVPBDNomTAMLA4tHeCFz1ALdMBM8sn8yz63",
  "key35": "3Ne1MoQDk5Jd5tUZxdmCsv6QVZBucoC4qi4SSVZV4jUrGXBGugY3a6yEiGbfAcQyFmKTCKZwauJyNtDHLxCgmWq1",
  "key36": "4U165Jju1JNczfjyp2J7XRWwgMFXy1Ur1USep8ZdFQ5uCYZBC3MCZpbcLcHZyF7sdPtBB3xmVfUnYWZ5sCYZHFb1",
  "key37": "2kmsqi4vEBQW1FSJDYvGoZHBHxcc3s6qL261r7T3edMN9YoZM9cwNjGZSgWfrbUVpdf6YTdnWt3LgHQnTExqWZ4m",
  "key38": "4NXbkqiNze69HcDC34YXJHfoQV6nubbs3UheBaH1KMP8AN22ynGkPzomBJ5gTJmctGBwcT9w2t2RtnKvyW8pGCh1",
  "key39": "m6JEXB99bW8PX6HWDjNo3NXQJ3s77hFMiJbPPNWaVm7cSVNBjbXiqKNCcG6CL1YhU5WxyEcmZNr7sfZFsDvjCTj",
  "key40": "4RyFnLj5m3gmtwMR7CLbmXrgbyZs3ibgv5ey1GaFcseNuFeNUmDkLMa1eQ3QpDYSyMcXSk2umQUKaL3SVyieGeMA",
  "key41": "3uP8QBk28oBzkB9NER1Pj9m73VvToEV3c8b8PcS9RsAKkt9ogXxw6xAGp8fzvUbqtg1jYBoDqK8G5xdgT6Eiap9r",
  "key42": "5cy1wb4XhByDQBg9PgsJLWhYys1cQmQ2GKwTgkEngTkSGCVymeXA1XPVidwEC1iGX2ZP2wbhptWUFLU6JZxq35wh",
  "key43": "4RHRCB48g5mVA7eda2HNFHRhBB4uKgfipLTf8DGSdAtERCbUHCt6NNwAtr3Murfjk4QPF3zuZRDEJMSAmxgghyPq",
  "key44": "ZKgg2dUbZAQh2bnWNqBn83uwsN5meL2hNM4nVpZSMpkJG724XfyRZjW3oRbFCzFLdoEXuZv9GBQkdUZhkpxyb1n",
  "key45": "4xFq15Pj4Go3E9ZrBsCGqUkhy5KNyMVrsutrCW18ZPdj7sAz35qwqjnmcx6fmgojDZrRrKSMYhatu6YbSsQFb4NW",
  "key46": "2LbqctGqJ16hPfUrPiLWMh26tuGNK2BVNd529Jb9AN4YjFe2MWgGbhqEMtidEeaR7sQC4oKe7CyLC5MD5mvjKjyt",
  "key47": "2EsQnoVRBTYWqLewCN35H7MrkxgPwRjFEo9YLbeV1K3KS3HK9a1u1se3hAxKxDJ3MxSp7wLuKQG15c8gZnUFfU7F",
  "key48": "5SppbGJC6gXRoQbikg49LKNfhfkpCkFj3MJjuWLfsgDdwr2fkVyEq5oddJajXkRPUdn5Da553eDhcaiZF8gSeVcu"
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
