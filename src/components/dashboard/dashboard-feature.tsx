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
    "2HNBo5dkpm4XUeu13RqizJZFhsyL4DR5B7WGtBr3imRMB9zwQJyDZto4RKmBtjVLWk8diGtFpGUEz7UkrguyoSdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Xe6jDT2pAd9zBkJLVR779FDquunW83bgKfePyGJ5S3GtsNoVz8dgq18f5oG5puJ3FAHwMevfLc4sFkt5Z379Cb",
  "key1": "24btoiboD7hoRNkTLdRqvUSPFHBumSrvb49gJWBZzoKH2bP8z9toK136MKLNBo1Lddi5YUE3weJKG9sinVsE4e73",
  "key2": "Bkw1hqmKdACQFQGzrU6NVmmjVM2eJxcuECq3hy5tNRTG1eEvBFtnrGP95NWHwvT2P49qpACCXKrriTUnRPGgZpw",
  "key3": "gUXwmJ3zUYFsGRddVPfqEUfAjVAS3kvVsjDgPzckCZi2qGqPfuCdGZyPKTtsnspeF5jhLr2gDCQPfuVRXbWKk91",
  "key4": "4xxHWXniPkjoz3Ecxr3c147KYhE9oSrFsqWGFWprSuvb5HLDMDEaiwgW9K2z1wKm7Sh1JvLvZx7H5QNbCzFijPKN",
  "key5": "35S965R9bN9RpRSDG3NULdzZXZb4twocuB5Rnz7JSncnm3Yd8i1Gn22pF2JAQ7q6wcmxfmxmENZKT1yuK8hxAXF1",
  "key6": "3b2n5bq1mrfFtPgkC2Jr4x25T7rRJ1PrindWeYbd1EQQ84ywAazcgD3cnPTi1oBconrXw5V56uzsTABdH6XryaKc",
  "key7": "4RCcDLgGSSpcHv3ytKgeKdag9TbnHm9wZBgQS7ob2zuopB771S7oua3No1Ghvf1mJ9DxAqeiLrTeo7cnEkFK4YzL",
  "key8": "4Saa1P8BA6Xs5pqyySe2MU2VLbnAAjKbktqMriz4dzMsegWAPiF45rwYFPAxFgfxZp8nVNWrxnztEmv8E5pwf5iG",
  "key9": "3uoHCReUpNJY9VxJbXtFKcKfcjDYW7F2AizPgGEUve5w4YzoMLVw6Zs6NEt4T9GUrcdtrANbV91wpqUonSk9TrGU",
  "key10": "ofKeVm8asddJJeE6Tj3VKZwpSPPB3M29hLSKwibueF83xCVteo6TuuMLWSmLqwvuWfUiqkhHP4qq7JnJZQcWGu8",
  "key11": "4Ac1jUqHtpL87SotPhdx4MPRM67g2M4vBxRxoFRo8FMg43AaypeYRcGhazT85vgWTgdcSRNJWzCaDEoXC1CHfJzo",
  "key12": "5pAtsxvpoHYcNuBrNTqDRXjCrbGkqf1ssf2ynrCbie2epJHjYH7gNogMj9eGRxv9NRiRHAwoik3EaakSy9AZaQ2k",
  "key13": "xp3JwJBzbLhL8uziMgwQ4Y1xg1cZKadDHLe9nmRkftH49uRS9atuHuicsFuciz6xrsppy5gPcDXYucu2VW57omk",
  "key14": "2tB7nHUj4fSNRpCuQkz8RfAVQf67941Gmis4DYZnXSQJMJMZpEQzRSwCXN3RvGZsrXEbwZ513y9QdMVfxyCXZh8b",
  "key15": "4sPLJ1iDoNt4591eiGRwNtWNGk3A84Vqw9mmcfuTRsQoT619ynoATZz2BSUwyAqKrnE5QwboSPUrpn2z3LtyMmxn",
  "key16": "7iX5mhhbXSQSkoaNXPmfGc43oE6xa7PrUqvq7n4XN78TaN451RmKQaRpXP8p9etdfhoN2YHp5X4TjcFMhEPJsG6",
  "key17": "3ciC77H66ejLu7KWomL6jzTXx4hrALkdjosUcX7RoZyPw5JviLH5BfxDcebedr7V3dKHF1LrHYoeAt2FzbfmWpvc",
  "key18": "5YSUtyu9VX9CDUVyM8Vq1sxfmj2jDvs9wMpPXeHBJdxiW2PRZ5TuzBo18GDViepNSBUSivGYdyzd7xppnYyNqPgU",
  "key19": "cbNRNederBefMBd7dtjJfbPwHAwQhyxGYtLkrsAeEWnyYnyJeCyEiEXboZpzYSfu2ipz9PV5dvMxCuo4RraBrKn",
  "key20": "4qT2GGqAvvzLA1UVasLeHCW2fa7LvEq9j2JMZHE2Z4rXcXfBnKLRswFCq896CXXYvM1FfANGi7btE7HVtKjRjNGy",
  "key21": "121mF6hGt73GF45hc8jaEqBNxxYVZY2YQXjdQrWj9EFZ4ioHcfxMC9x1UNq2M4U6A843uCCFF1YKP68imYaM1XGJ",
  "key22": "43XGUvawH54dTZWzH84s9h6mLX8bw4fKgRTWjYA4hqXwWas6HYQbXAT1rqDVqBJ6mXM9cgFP7zeNHtq7wcyLqdoM",
  "key23": "2VQurXq3f36bBJLFKdZAcZ5qrs9wbawsAs8aeJ4XWCNw4G15qFbJXcm2Zs8aafu9g8RgdmfX31889gHYY1BegRLY",
  "key24": "4z1djeYqFakhExPfn6HadbQFj3sbtF2jWbSwFDkZyurqsTJp4thjaEU6WxHA5NsUHtAbfj7Z3DsmnWuM2Qpc51oC",
  "key25": "4Hy8deG6hE6bHM8fwBgrz2fsT1MEYsyPNTNQtBiY87149gTEh2tsVgDgEAE5Qgu5LZghdhe8mph5y8MgXGX1n3gf",
  "key26": "37uMUyAvW71qU3qBjEJWiuDF6sJ2J3r9mKHLtzUjRDvHnGsm2LYQuKxvJAUcPCMV7YmYgVqpix7LQt1qfhpry2JJ",
  "key27": "2syCRoX6UQAtszRJaJKMyUcR2Cu5vwF1yiir5p9jcebdSGkxGfy6QMehw2LtgvFLRJJEiG6c53bTpnjsKVmZXpWM",
  "key28": "4kANmnEqNFgaqvehJ4p139Z71vcaKGE5SoWEQDQM2xFhxDtSbbpQxFBu4qDgHTQJsqFPezJzCDjKSaA6mgF2NT2K",
  "key29": "2BeZYRp446QYFeiZ3erYc78wA2BCjRmxajZ3Z6VDMoHdm4UJjkA224swvNwJAjhpFStF1B9X62ud9xFu2AzG9hBM",
  "key30": "4nR7sWgs2cusggGTZrLYRbcG5ghPAeKH7vYTHqPuCFr8JiemKW3MWBmvGKFxwhwLuJBEbsQhAB8bLatLRMaqPg5z",
  "key31": "L9DiDUdTW5v5XnYNgxzAKUpiJD5ucSLGm5ZkzdRGT7VAq268M3LrWLoFVPeckWeZLZ4YkVcBZPQBRb9Dh8E2bQX",
  "key32": "5AarXRib1w8QjXTt8WH88tKzu53SbwFGbr9vzjzWPF2EQQ7NNRPPDsjuTYv9tz6tvUVRNsXjyrQkyVp5YzxVWQra",
  "key33": "5aHyXiNJR6um5bDNg4So5uvVEHGbLNXjUy9NFXvXzNv1mCLwDPcc3QteP7dnP14HyLWga5BHfsL5R1YPfeDtTnT9",
  "key34": "9LCoT45Ej74z6xi46C1nVtgmEBTcj6kEsEmEU138WqPYTo1DRNP3Fjd37YNt1X1L5Sn3pLX6aaYX7jFzd6w9Hbq",
  "key35": "4iD12zTWUqs3J2L16aGBKdWSyABjefiJPNTcLNuxig4rQHmJUZxYFXRrGqUx2JhkNKPsLjPU44TkpSx4z7JjxnMw",
  "key36": "3EfaRNPYSrKGUSQropju9HXmGADUgxeiYb8NhRpEHik8MyUAQXPPAGvsUzn6cKR3LG9opmzQFBKoDAET8UwWxu1F",
  "key37": "5oidSdQeuPQaxfBDMgsNMovYmDpyXYE5rvpFYxs6FsLw54JJSJKV8gAma48fdpcWN6HcWZFjK4ya1uAFwGnfgvD1",
  "key38": "5NKzthQC7mUzSchJ7wnWYJ9WhErc4aP8Sy4c4wFb6KV4kc17akzeKnhp4ZCmrHg6SbjoS8NB8trMdWAzPaD48iQ1",
  "key39": "376AwVcy17U6ZfBPNhtTc4vFU5XiE8LMMXn46Lvi6mUbL9QPg4WbD22nNondWcXXeYvn3yPhWNkPKCbKVGV4Wexh",
  "key40": "3cFnMhAzcS4tf37Ys8gfeh1KUUmdQV97tfAQexBF4zbJkuHu6h6EHctuntWMdM3ur1S3bpbmY32sMewxj6USQtGC",
  "key41": "2ntqfWLTkbR1yH8W8E7w54nPbKqkkiLAQdP3uzxKJgrjtksrCAgMwYkSAn7aKbVvNJKCKaGAoYsx7CPjZ8ptbThc",
  "key42": "4W5ma89vHogNLkgKRrnPRxRsT8QF2KeDWmE2d6koqrGqAFPKgLRXrpe1E8SzquuxbGPcMofcj12oDVurpxg2uVrW",
  "key43": "UrMRK69LfbdTWJMp8NxC7sfMZ8R7bWu176mb5seekM2ZrtP5iKvGnyx6MXoZZfxiBWrWBsF2oxMHvhuXZztjR3v",
  "key44": "5ma2sWeLaxUS2Ehy1Z8PzyUxJLcVFk9uhqLzH3GMvjRGhtkuYBFjN9uMaUPwUhgDigHMcUWjspBH9sp72ggksGZH",
  "key45": "5CTJCUHmfNQKmrLY7rU77gH93ijcUkcrkHWfKYhgDEbs7AYRGSseeBsEv9VEos78H2PyDngHiwnNTr5XzvJUx6oc"
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
