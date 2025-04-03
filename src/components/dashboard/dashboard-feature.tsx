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
    "4umHTFp7gTEp1SCpRXUAWSo1xQpkUS3cfBiCSMDch2hfG2zDgHzkkBpCgzbgzvXLgMrZvKkp2Va7NPtUxHtVCyUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EPcnd3Wd6fDYVyJoJ2M8m8y2MuhUVf4e8qE8fPa8UpkrEHVNNCTrSFsNHxkkkypMJddwwNii2o8QhM5N3EagBLG",
  "key1": "5G58pxPR8Rbtifw5hX4fcwCuBsGMksWEtzuarbfkWipEpof3xXKXsXejY26vgZJAf6evhxCgeJFhD1vgfQFSxude",
  "key2": "3HgPVU5iG3uCBXRJDtsv6aWxDyTajLRPEdBchmp8vrq9D1crtofkns9f5C1BVNxDTcCvzsCgq1YDA1C7VNitPbB6",
  "key3": "7SHEqHV1MxgmbfYg3Euv6xGRVy211gLpnUtzvwXfFEq4GUVUVSYokEwCcWma3zoJrd5ZoQxB49fkuCG3kJ5rELk",
  "key4": "5DhWzn1kwFQ7JmDC1JaeiRSDQP8Mc3br3z4oDYnabuaVA2YfaMfxbqRoebDJpE92hwun9zUh6uGAzRYdbUg26udV",
  "key5": "5PSaZ1WGqiicb3atTYVAUXVULKWCDcwkExASi1GqQB41zBZeAQTa4jf9fyZqFRx2CnfM1w4RAj9R7U89qZkE5FMp",
  "key6": "5XsYrxm8qPZtsioxDX9zJZqxrtRgsK249dAuEePWy68yvppAkAiaR57mEDPBC8KQarU2Uu9ULuWrDQzmdzNzNx68",
  "key7": "3zR2QVrfHQXWfCmBXjMR4Ee4B146FXc3GAeeCZwKDnHttDXREbwco7diHW52DtKTkXt7mFHJH51BprWSnNHpEWt2",
  "key8": "ptKzVUJTwGAtUnKres77g7V5Aytd5HBgwoLcaFDrzPbapfRM2Joj4WHuUEZm8WdcVs4fyqoxDs9KhZXxbvbbb8U",
  "key9": "5akr4KQqUrdusDLT3eqgMuEdEZ5M5d4AfbdGUwHqkwjwnhQZXBHGX7UhUuGkKg4JnfGSuYPfyEVeLUwzZ5aHV5ff",
  "key10": "2F7dfjeqx3cNeQP9KdCa6oJV5pDanf1tmjkswKu11sC5VBHESYfewoL6Np6FW5vPfXgFE47MFK4i3gfMxoC93FK4",
  "key11": "5MPH1uRi8voDMekT2naFpzqqSEnp5C4TADJVixPnYTqTHvehpxWusuxRjBjBdoEW2e5zMrRvT4rPjejUegPGzeFT",
  "key12": "3BgLxG95ujZUaXSFH4wun4zsaG84yTuSp3U6aouEyJLbeww6PHg86dp1p1Dj8vX8CqijUDVtwvy7zdGC5FzKMyuC",
  "key13": "61xf5gm4je1bAoNCQH69poSKGSpDaNy6ro1P2ijPCnssN2LAJkEBaWw5TC6CmzTQT8iPWx6qtTpTYJ3YXJYdK6gE",
  "key14": "42sX4MVxd5bRVq8zXPp3dSWNAkRaDYKWb6DpLXqEjBcajF1o1yP2iAUVF7ou8QZ6QYtM7MPeVUy1YHVYEWwTWmoj",
  "key15": "21smw76JkUXaWg5hoMJwRbo5N7KpHR6y4YGRqAHkiGau3yoZBzhAZgZCoby4Du7yT1EHjGX4sDa5KeDKaBJ4cjHi",
  "key16": "43WxhNc3g2jV7kKPLGFE7whXjKUpeMWXUvTx9uCzs4nrNSykN9pBCDFpZRcbQ9arpF1CeJjMSMy21c2Vsoybfjf3",
  "key17": "5io3gnADG6FvdcRnVfyk2CHg7CDks2FX3BhtFL747sk3FJRRbjRKVigrFxYPXuGXLFPA7KyE4kAj11CxxhsKie9w",
  "key18": "2639RDiGA6xQC6vznhx2HGXaVLgA5sf7qgL2z9G729TPNhU1abkMb2GitchxP7eedYYRK9EVBK1Zy95njnn7Q3aN",
  "key19": "wvk14PcvXiaiVJNDVoLuVK9oJLzzSBQQPMABKpo1KT9rLRXK4bH4wEM4UHnxNcjF3aRoAazXVCth8NzzgcBrmpp",
  "key20": "4cccuWuTh3dMVJbvusHvkVYvvA9LKxVKysb9e3BrjbktmZX2cJ4YYP46uFWbmPnbycfz1dbfrpF2v3Y1FN94jBHq",
  "key21": "3wVhj7R7nVmQab26UqP2v7ErEPUYiigrAfAnrvz6efHEcv64dx9XQovDaLoKpff5EG6cPbEpN814S6sg5BmxVSMa",
  "key22": "2nmtTzEpMSW9kHdFwAUVgXyCNxdtHkKXtMTNpVj3EfBe4JAH8dF1CZ2BBojANLiuQ4Ecb6omy7JSmNbkw1pbqoU2",
  "key23": "21gHM6bwzE543QKcZrFXS1kwxmU1nics6G3Y7Q4geFfoxmVgNwqjaafZRUVe5VutKbg4RQKvu6ajcW2zTdR75wUf",
  "key24": "5BrKhhKvuTKMuBjUcbMVhmdXWVvv66xVjLtDnPkUJUQeeAUVaAtMTqR2GZ99bsdMMHvn35bmLPrrKFsZ3QHsmnjj",
  "key25": "khsyCZHNygEV2LE6zBntqrkU7ULYVP9mCCkBTWLkv9o1KDtHdLsN1xRcTiimbQVBG3AqHKbf21eNasVXe8crbd7",
  "key26": "57nEVi9T4S2svyvAse51V9QdEQyN6xwK142T8SuUXr2VuZcymPoUgBAz4LHHT9kV9tf5yxoDc278u6JctYhXr4qp",
  "key27": "2AmZPrz6kqpFoHi6dPsLT4vKnQtzcnxum7E2YSCB3zECGWENSJbzLCtivziFTgooSz5QmDybtcCaLinvwtuNnAvS",
  "key28": "555CWBGSayKCQq3nxyMn7aSxS3oFiMWeR14mziP4ty6BLwDqrZSrfGQqQMnnrug2APSbtYCebDxpc2B4oKwikVSi",
  "key29": "3oT3sgqWFJYsKyH1oh13Vxbe7ENcH3XPnAjVntQVPaDnjydBH2v5LEEnSm8funeNYxrVGe1HBYKHX9jB3ThL655t",
  "key30": "4nzqVdmH4WFuXEuZWpEhE6x4G33MZDG2krznX62vBNSqXbkiAW7HiYxB3yxzMYdMdeWJCPc3JmgMsAxAy2PCkJWg",
  "key31": "NZnmQH67QC27caffuiD9ss5dgwPXip9Nvvf8oeeBBJWNuh4726gf8h6wPdYYjm8k7NUK3BRJihLzaFx2f7UdXqg",
  "key32": "2wwQNKWwoHK4KzWnv8QLTE5TrPMsUQ9ubZrRpG1MA2PSeRFGKKNDnH961sCJabLv6JdWJ9jvDVS5SDWtqy3nTe1W",
  "key33": "HJUGEwKzgrQwjy49ikZrn3y133EiSx7A37nZngyntnvjHNXZXmD66vVAgAffZoQzPyQ1g13C619nHFKyH8FkWiV",
  "key34": "2eRCBZhyNNe43AMytCP74v7QG7ptYkyv6128MjEijAj2LaLGP8RC4GAt8cEb9Ue8aCcq4Ao5LiaX3u3eRFmtL2JK",
  "key35": "4RGxUK1WRdsDipxZbph629UG4PzeD6Xh3VeJkQ8cVQFaGSWHuQt5d8gRmddaurpwivd5h5NKZyx79iRNXcTYmg6R",
  "key36": "3Bc5gmawZBhQ3kk5fGHeH26XtzLdNTUbWMzEConQ39MpWCwSAHLtRKkJkzRyeM5Cdvyr33UizwGAo2GjMphifjGr",
  "key37": "2zai7brRZXw1jYyTfWCEwYYYnM4oX2uYadfr11j98eajwYvxNUYwME5CmeY2TQZZw4HTAbjdkS7PwfndVLEzSToT",
  "key38": "4JPd8fmQeipSK5VvPHqkQR4Kn8uj8RTTzoXiWmkTjbXVcg5dCFm8pCp7E76ssxp8RwMHfXC4z7Gh6WuoeAxqs1Rt"
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
