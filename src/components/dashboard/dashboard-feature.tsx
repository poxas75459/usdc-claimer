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
    "4EAVa1EU9AqNytCxep3pus5UEK4D3xLt1PUE2UpnFu5m8HAP9jZmdvoaJrca8Cvv4SgbJFXUq2CyARVyhuvoV2Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g65DbBRZtRvj7xRk1YvE725b33woa8VWavvmHvMDfRPwsKR83XHskwVXFQpeBXCnaGwSCuF5itNVAvhgUrGt7NZ",
  "key1": "41azTqBAA8U35Cpps7srg7w8UEPnicMtTSmFKXdG5nRZmoXMZmkGe1JqCsJw59UuPPhXzE9iRPchXnHGxRjyJZ3C",
  "key2": "3dDNrdBgFNyKMgS8SiuSAJuM6C24PQ97E29t4SBVFQe1KaYfWrbxNgP5ETh6HuztqoE1NxkyRoxUZJpYz8BB4W8R",
  "key3": "2omTxp2piEwjVL4rCdrnueJ3jXLduHj286voZdDnuZHsQwPP13VqRBgxV2NZAZCm6NNqN8hWoB9iEMUWX83NnCq4",
  "key4": "2WqLTuC9NDMJ66UZ1RxcVFBS6srbNpfAhkDDsYh1RpEeVa9ceEdM5PQfwoMKCFeLaKnLk9DMDUjLdUamtFNv8zrY",
  "key5": "5jSHj2mw1XC6AZnMehunoQPok4e2vrMYaW6RLxMDxmDe23jUDrAWvMdH9iM83LtpUb1NjF4YNLe77MV4f5mMamFU",
  "key6": "USXiQ5UkNgP99bMUeXoJmNx2uT5QDnM3L8Xq8fr8yN5ooDt4kBpmA8Hy6mBYr5w4rrjheXmx76rYSntgyWUAouj",
  "key7": "3PAVtcMPph63wo83Xo58BVTR9m5JDEisab1SFMAAAUXLrEgvyQ8qyRTGGzVJWUH9RosLyFaywSSP5nGtRSxeHV5K",
  "key8": "31mr9YzknAWFVzBDAJbDoraHqg1ERhZxKSMMqAqjUAytpSY6CAh8A5yXGBVihzb5kMBYyrbgwiaNdpBqA8deutJu",
  "key9": "4eQnptBfgupGvbvXcc7xC2t7dYBDcRRo9yLPsYjv5vvByUPq9CnYbS1dTmpef38bHpqHtM9VWvXSUotZLV9Ed4S4",
  "key10": "3Jh4DZsj6ty8iU2vQJ3yajPreomR1RKnrpgAvmxt7YM8xWMetpND68UfEpLFVNVTXGFhr1NhmJwkcAAgvmw1oFiX",
  "key11": "2SwSewHbtHJcY762fYPG8GjvxciuYphz8XESgnvNNXFA9b3Up8phNBS9L1YFANMjCTzGR7KhdQ1ayiMYERQjvBPA",
  "key12": "2iuUrqqh12L5EHHuQteyNQpMShTLDDKC8FDsa6vSGoBHZidASDNsNYeNnrMpvN2etqXeu8rYPU6oTkb5R3VrhSsm",
  "key13": "4v8hAx7CnjKBqL4db87jFCiqFcmBCmGRuT28pV7SFggxisbe6SXFJPxhTrPWk2H5LUrNNHdKoncTeijANjGRa916",
  "key14": "XRpEe5eV8eaaoJ2RfEgUAQBFe3Ud4pjncDaEdtzQUMDeiMx1UDENKjPuZEXZRNsVdyY3GCRSCaRxM9zVk1bDG5U",
  "key15": "4dzCBst2M6c4PhRG4fkNvrQQxWdshQAyYjgmKBjNfDVCDWE5uRSRKCBpunwv1nQdhMdYQ5TzDyQ8c4QWiwqXnDVS",
  "key16": "453zC4nP6tRdqwL8zcri5J97QiYYQ2DSs2VbuozYZk3PVMncUYqMWFM3WAQEvMNeRmtzBixCSpRKy7utd2mLTThD",
  "key17": "3M4rgqnVMB2KEn8tikV6vVunJkAMJvPJ1GEU8V8bfkxwemfFPw9NLS1erxLj7hqDC35udWq32wfwdBGVPhHy2ZuS",
  "key18": "5ja5F8nBFxiUsPdsPXyMSNZmVdLnYgTf78Bmq5Yw7pi5M3zuDZiQw1ryBENq5FCRx6wpbVSEm6KAe3QahS5pEyYd",
  "key19": "3s2Wp7KnBcq9dBWd6fNCW4rN2uomUmTh6NQ8oyic2NSwPFiNT97sHwFrvMxWpUJaz8QNVzBMk1zgyvnfoL3kCTCW",
  "key20": "3p8Kk2AubgXoVS1K51HeDs3Q3fre8zxXnU98hyG9gB7r3UE2tynjUoP2kHWcxMg7RdpzLiadPZFEXSauje3JSMYZ",
  "key21": "7if9pA3tNaHAyFsuoN8m15syTJNbPUyouj6QZg1jjFrwkSY2XCzFVUChN6weydQ5cT7NRaWsd1NSFZ7vCNDktQe",
  "key22": "2Dxuc35uDqTMhyymHN1Jk44Azuv8xJayDJ29cZw25KTZrr1vj8WJW4EiFqQ8BPwez1qtm7DHLeqEsZG7JaoiiGiz",
  "key23": "ueBn1FvbhRniwUxMeQqvQkeGX8yr45iM1zt7fd2JYXsdV9s4V1PcV7ndtf2Skyh2EhGZds8u6CNGHwANT2bKYRJ",
  "key24": "5HhrV5aZAh2TzQtdXcpwMynPwmUp5nnU5A1D1csU184SCzzXbqhRQ425DFnjeE57pAsHWAGfvRPeP4q1rRcTT1We",
  "key25": "5PNLuoWFUqQc4hMitKgnhmKPSSejEEe7q6iknMD6w5DvQGRub2nM7ex8D5NBNJGpuTxfjF1QaSSKX2QtBykeLscn",
  "key26": "5sS9a7ANCpuxT6iRBPYD5BSY7ABsqYbEUhgzpchJ4DF4NMCSrDmVz6CNvpG6ax7gemZPEqsq223MrDy8fXLqy6bB",
  "key27": "4PFDe3VjCApqmaBmXsVzpsdDZF1VGtwREAi1Q6UKsUJyUUPLigc1d1QTfuUawydxeTp2QS2WE2FUNioxUciNT8xB",
  "key28": "5YuRhhwT59oDX7BktYScawdJfeYoQeN7KXtAY16vxUfD8NHebgr9waCuViZbAFVfeo7dFH2KwMaPXinYioo9WeUu",
  "key29": "4DYkxt6E2eELPKdL95iCdjEDxAUDkBzUeZL1N6s1VCUfiVbqm2D77AuMvdDLqi6K6ypX3uP1AZr1sHh53SqHLSpG",
  "key30": "2Nwy753tAtotp2F1CNCtAd8yPbDHoXpjBCcDEk1rT1HBHtexx4GEk3t6QbmtsoZSVSF7dXRWRG1uHLbUGTbueXWa",
  "key31": "3VbkdRwAsT5wPjK1GQzBZAxgSac7JioxT51PXWsCS98kG3DBYVEAcbehrBLQwySEXYWep7o3vBzoYP61RXECW38P",
  "key32": "33eCWkWDpX3NUabAZQ9TGy5EFTicznrGm25heNTEybeVjFtMVhvAgsJ3ezncm8PFwMdSn42BaL1gX3fPpKPSNQG3",
  "key33": "5hwtPa2mgabWww5NvkWqSy6XyF6VbAXqhrio1XhrzEDN2Qhfk3dJBAQgdtvzb1gWFzfgConswbLr6VXU2mAMd5Qe",
  "key34": "2Sv8xWGLk9DPMYEr2PBN8ejF1BMYVpwYXY7o2JQECAnj7qdZh5UwucNCBxJp5m2t4uXbSwKfvbxSozLD3WSE5P3W",
  "key35": "2RAQSV64Pc4zGUMAFc1Bw7geBQvn52CD3hqJtzEjyC2eWvkdF7D5ZKCxkBY34MCjiWqvawoZECNfF5yWhn6q2GiG",
  "key36": "391aWLFeAR2HAqJ3yxeWTA91U8RwFMSqACSw6kQ6QAmkF3XCMtd7FHGF27vbJiNCsJzBaoP4zCcs4GGtvcp5fpje",
  "key37": "582J7ACQZDvMg15s9thucF1DFVjoEMDkJH3ZekQD6wfX3me1VDeYVtvoky9YTJ5tunAh6iauz8VF7q36ySb9x1Zy",
  "key38": "sf3YZpgK5JnrnmXgTLfEwcsG2upvnDYRsD2F3ArM39UF2N5h7hHHCbXNmYjHADLwHQyhZLL7nmqPVMUK5WaZeyq",
  "key39": "2kNMc3eoBV1UvhFAFr1edjGPRdP1DBnQjGttguzpseGgF3BQbRPmcbmBJrnr82retekBjXLZNMdwx1gWWsZPR5K",
  "key40": "UiGKeq3WBnzFB2K7GLK1K8Mt94isHhMov2vS2Z9nqixynwzAfS1Cd5SSLVyStGugC6wes34WrgJ5HXYtAQ3mUZK",
  "key41": "KEseZZG1Hg5hfjLb9mWH9CFDXs2joRdwEqtRcSedhP7MzALpPckCeYdFa5LxQ2BGwtPtn415TYcZg9zvrbWz9n8"
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
