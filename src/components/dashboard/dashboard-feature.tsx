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
    "58aR5r6QHqKs2NmWPQBJWemajdXZRHJMkMTnKwgfaEkQf3o7kGNUSaRr9pGrUeizdsRPkgTSx8RRb8PP6oMadGSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bwKctCQP37jVX9xtEmz88Ztf51FN1eidRMWcAnPKUzNLtWiQ17LRnLHy7VpCTiUb5LSEut8dRtUF9AM2PC6y4qs",
  "key1": "4SSzLviSojqVTvxDPPpjXD7RnZHfWN9kdJkNB3h57Y4LRhgy56GJ6j31AKhYDrK2fV8tuFLx6BkeAuXeVzLxjGi7",
  "key2": "57pm9HujF1bve6MmMqsHRYQiwa17KZg1aAz8nJ7UWiAyV9CSUQmxNimvAepCL76LAAbjUArpZgtVD78GZZEpCvrm",
  "key3": "4EYsGaJnpXpAne35aWWM8b5Q4nyPLuAs8v2aYg1Fzh7TzVC7c3bdkayov2ntabCN145ef6hZ5DFzjUvqn425k9xV",
  "key4": "YgtEpKhzhxYUoXbfcdZ99q43WnfWyyfh1hZ2y4rQbTaZUSauki7fX5P4SqCQpfAf9U9kfUx1eejoSaXLnRvtaF1",
  "key5": "2NDt3pYtyZRNfGZ8CkueU2QUnHMzQytr7VbTetBFR5kFZb84RY8haxixbNAMZbrJJtUBreeNbGHQ1nEP1uGz9cnv",
  "key6": "5DHydQeLJtPHK3nASsUB2ygA7gcvrKtCUo63NvDUUXMaan1CEGYr939xegB44oi9zjcfw5zGDou1xR6UkNRfeYus",
  "key7": "359rkpRn7oFTLhF89yjK8QifiNorLD7wnKxbVqAyjVeNKWQMxhyZkxkrVhACvakdXP3q9MMqnKxvzZ3HN7C4NMMj",
  "key8": "4QCumACnnSPzHThyvUsFZrMqBNxNYTjRBsPXkGEM5oj7XmThfxrFoGtti8E2PgzXDufix3JVy19zwMJC8xias2hw",
  "key9": "5WMyQfYGK7bigNavBaM4mpeqcM1v3MKmdNw6fudTWMWVCWYWWRA2KiHo7zYAghUZ637hxxUcDv4ZCZ7jDM8CoYJ5",
  "key10": "62LKkY9UHpDoWefnrU5YinCbJgYnsgkuDmHHDdTKCWEknjABs36gPKdyFt44V7FLPoA1imozE8F7z7w49H3VSsbT",
  "key11": "2Qu28yAaXUPJuvvkSmtfTsD86GY6gGNrVugnhrfTiFnXda9W9Q5PhXFmfoaTQgX7xRC2Xv37iAXdAr7vgfXTKVz8",
  "key12": "3ua3L53sBgnnpoBY12HNRFwAZv2MfJzUV4oyDXA7EReZXxzR7roTtE6eqVES1fLR4zFFMChy6WE9DFqMaFBrGXig",
  "key13": "2aXL1mDUjBrGjrFCYkaVQYWFKKJcxroahf4NYAESLPM92sttWAhrXGiXpQXJs9w7aF19LuQ1VB34HWkacByQ7ye8",
  "key14": "3bYrybBz1KSAbxQD4CipJmsMz8gn1q3ymZw8X8XNdywzpLEPcMcKub4yeMJZXmBKpvCjpGBJKD1e8dH1Ke7NDSMS",
  "key15": "7WHhc8qcfHzzY2swix9TfVbzWLbRGapYJEsC1CgtGDBkkTtzrprhTsQT1MhGBH6EqMM9dEaRYVSw7uc8CYtuBQp",
  "key16": "3df99N2h2V55jDTfcL1oE15AJGRvZutqhW6TrKdHfmVjs3nn5z8DuFArSgWwaMxBfAkndmdduA48imSZDtrj1a3T",
  "key17": "UF436Ycrq3JkmLf4RDN46pofKhZbSHL9dtw1Wp8ByR2TQW3SFaeACnnr6HMR5FZpvtZ5J2w5ghEK3aNkrVtcnpu",
  "key18": "5Yc8EFZdAnwtKzqfZjbGQTZPhA8KKU8j1sUUPYFPpvkD7iahSW2nsP9eBzYXNkcsJW6ytuMmKwim5PQxvkYi95ar",
  "key19": "4k3yRSFy9QbWRKi1wDesp1RoJ61k7jaKnPWt5VX3GMsc34iNj3CgrDJKsm9UA1eZyuiKffX2xr48awvddgcufg2p",
  "key20": "3rKEUgUVZmC1rxwrm1hRAKgkcZChFkJ6mbm2ncdLvnb4ywGDrG5zSyeaMro1KPkHSMqazUnj6yeM8NhvX9Wed5pN",
  "key21": "5wFA8W7YcEwGmEBb35Mi671kY4ySgmreFSBWtdtNmpsznF69NAgD78gzTAG4ydBuj7Dmqf1G7g8VvrQdetuPz6w6",
  "key22": "2E7XCP2SsCK1n4g9oajbJJVTBSLfCb278UgvSWwYXbeZkAyiUAtTTf5bJyG5u5oYbEZRb1D5VFYiwXed1EyMUUfL",
  "key23": "2EvrA9MYEChDtGErTgW9bf1erBJwnxU5VsTGoNoEryYn1H4Qn97K8PavT7gaT1JqqJtGygVjSNR84vLYSWagvrzq",
  "key24": "2jJnkmg1zWbmim6hTZ8h6GUoKm9MkgycgKyYGCMwn1CkYzmh3furHFusWu3Gk7t8kCqZ3Qg5Gjeqkstrg13RNQR1",
  "key25": "5H2e45u2rn2RJFc63VLBzC9ffnkfqZb7SpuctRKFYx7uv22d4R5QNH1QZgSUvW7fk2faEiaPEtDR3H9rjQuuguWm",
  "key26": "4DhBemBhWYme2maCCHrPST8YWZs4L4rVTbyK1UhWeMyageKqvebB16NNXLZHrZQdjYw13gPLKffu5ij3QbYEnPqa",
  "key27": "3P8n7prV2hVzH8SttKyxPag293DJbqYbvJFCynppa5uwoxMCekKLsTcDQ6z9XC4Mmh8qgXUDKEyoDdc8EHwzx9Cu",
  "key28": "32QayeqRbqxTpkFTKA9KL92rgPkhVcTu8b4aM6d4wsDdywKNhUQdCnWPkgphDXSNfhmHoX1C53UzMNX8XEhchWCR",
  "key29": "4uUzPyAVM8aoHvWR64cR5qJdtpx19qwCf7bFGzVR7n77cErcpiGqheTZG1itJ1fL474WPC3Adq6as5TSfwCQHY3u",
  "key30": "J1gNdUYeCgQeE5ncZWK6oPMdWLP5u2ksusi3HCqRA2CHfGFm3p1WshnevieoZtvKftx728cJjsyM7Knmvnrh1TL",
  "key31": "48FQs635D8nQMmAXVT18TePC9BBmUAo6ja8KMTcoBzytTKejrt6Gp4SLR8W8ZnRiawYFYHkNmZBddyAUAU4xuqbz",
  "key32": "ZZCHP95ZHsdFbzSGHQMHpc4jofUqEB8CJ8w7tZu8xpNmdhZbSHL1GfxTD7jPZmBduyQdjHpnMcaqTi1MGbi5oRM",
  "key33": "5MEozRr9Ey5iT8myhMHSVdsW2SKuUKJVnVnguPEd65conKHCfYY2DacwYghnatHejuYxZR48XhCYkh5gPpwcs8zz",
  "key34": "5Nwb5k2bSx2npCf3a3Zd1wRFEQ4g1hc4Bty4NAhRoV1dn4U3zuWn3Px1np2ouBLrD3HSb79kUgkGP5RGDX7b1u7g",
  "key35": "3BUXK5zRFFkSp6R2epD1yiXD9kXgSfPQXZjVcReQuoNcNDaWqFfd1yjFofzKHhNWgPVXeSE3dVzcn3Br9UWPBh9f",
  "key36": "pEatzEeUJiuqXkN2t3qMRE7jaUab8kHnaN97bv6Bo8JwqhppeeEXahid9CRdjofzcm6bab37t935AdwiQ77ZiBw",
  "key37": "3a9E5WdpnWsBf4iX2n4gy13BMq5rg9i7JJFiLybxFnWDamdcM95LHgM2BF8yc1FYT9b8x59ERxNmstzRqfQB7WiM",
  "key38": "wziDNkgwvjHA5ViySihmY4MiLpfYvpGkHZVsSuSr548s8wSLmDqKg8cLDqv3sxtdfx6i9VYneAqd8maFpv7LsL1"
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
