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
    "5DdjiouHLfeSMTVgopqANvudJJ75SfMyWGgYPPLeRWyDEgVHTr2d8MiaQJ6Rf6edCVudxv9qrA5G22BdNiDmg652"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GA9cmc34TkbTeRrSqWVeMPz9gtmrkr2PhqQcDdERQsxUgc8V67iNxLRE1hRnGtGGHb6wrxRXwcjbbMVqtamBaY5",
  "key1": "2eUaN3jvE3jJUWGmMriQN2PRmRq3XG4wjfzaB2cmz7crxVMeDEqXYTMNCFrynomoU63UHL7AoKEMyz8WCRrFBiTo",
  "key2": "4GwkbCGhMnBmVDRYMr1myA3AWr8oMJMNK3Pp6FD7Zun3vzZ7sfSRWMFX8e4ZRG1kKfn5nvrmL73UkbXLZvpARkid",
  "key3": "2Y4ZRUvtDYxmr1BRdHTrKH6zSy1r2G97pVWPLGj4qK55HMMkkfGREedFppPobVsfCazEgSj5h9Ti9B8LowSBrJyD",
  "key4": "43Qt8TrHxx2uYpDuPteUXb3Kr87uPm2R3soXy1WQzRfJAS5mxpG5oZRaG5LKq3qQPG9M2c7g1R1q2EaMR8wHwSVo",
  "key5": "R853HwoBtzm4q6ZjHGB5FrViS75TrgApCN6FzW22yqwZhYQu2P765gxBtpo4NdTZnqXppFJbkSEdsJsyWKTNuas",
  "key6": "c2gd71LFbKnDr4dpYobLuR5cF5DnWYXTwouApepPQYM4F464VFVdddWgMGx9TWAfRuj1B2xrU2VKpLZ8BxnM4YH",
  "key7": "48yybLMBYkVYYqDMGa5SVRLfHoiQqfT7SMiy8T8z9XASEKgBhp6BWpu6dP8ytNRt1S2CKsiM7PJ5dHRNcdMMJFgY",
  "key8": "b9LDg9YNHzULAAa69C41DM5beqL1B7EDiH344wxsdN3BnMu4CoZ8BC83dmqvnmgGbfefsbAgbntVpLE1W3jnF3Y",
  "key9": "4ocKuqbj7HJyT4NyyFBh1hrixe5ddaNtUBy6LhNxMCskLqswaTp4cVbU3uLq1DMLdWvgqn8sJGP329ZbcyG5FnYk",
  "key10": "3pCUfQYZLEWivZW7TvWMcPtomfGCjrtgTCjTGhUkiidNdbPBvq8DTVwVujWpaEc4T4sS5RPfb5GTFm5eNXSaEBrQ",
  "key11": "5YX18oGY5AcP4VWVcQkGuDbbKMPcAWNtvvwkDhuTRZ4pCSvkDsQw9aeEdKSwhTp67mMEzvmrofLQU4czp3XwM8p6",
  "key12": "tR4sB3UXA1YiqrSsfBAMxcQ8aPWoBeSTPYVva1a4HqfdH5tm7kHgq6aMK5w6XThqK8nXMV3DbuJuie6L3JXVroQ",
  "key13": "2d6xr8kZjySAsxbeLTfwRfBhd198iGjMecXAAsaYmYdLLJrbnpPGs4cBVPhQnV1vJ5GWhH5d9Uz2JWVqE1LHq5ML",
  "key14": "fnd2iwduqXwZsB4bcnBpaTfNpN1vRuVyUazyJRupMGhB35oj5NaP7CJt7eyh4XGGikN6UAqHyg9sB4dMkoeAfjQ",
  "key15": "3s2UFM5xoYvWjf3H2AJhPVvsukZJ1nRcf9vovF4juzdRAxNGFW6G8WSTFPRHfi2riZD1WCvk2i9w4JkGk8WfxC9V",
  "key16": "4tBuN53Hufjwve7Q1dZezsaq449qGs2PoeF3SGcLxxB81iSLSzFqVwi3a6THspoRiQAc8cSWyChWfdYi7JwBvT6m",
  "key17": "1hLpoU5qK8srtujt9FgzhjW3jUUkPv7S7G3yuWLzWpZeYemP6Ur47Hvo5R8Mc7chkqVpqfDzxhqB8KMnEfSrwU3",
  "key18": "3uoYCdgdY3XFJUfEzDL3UJGvjo5TzGzQVpbVktZUo3LsPbv4YSfhqDPMDcN89MHDS1jjXWrZuirFPqe6nMxYrAbL",
  "key19": "4ewxArmncNLG3Mx3R7i14cRfqrpgSvLuxZXRsUpWk6z5sfUVFjdhQuQQG1Sduk9wSPKitwhh2Y6PGzDu6fAKZ3Yw",
  "key20": "4Y3pcarYn38NE7EvCEyUopKPSbehB5JZDXSSLk9zH9sYosPzVFjSCzSsNo3MouNuM7FsL9gsBFK8bSZeYwJFhthy",
  "key21": "5vwg8KUTeJzRXP1UV7JpZ1xyzv74MCYmQvTatMkf51ZcnrWQrpxu7BBwNKGKETi4CaQFLg7jXqnpX6doiUgCPE2o",
  "key22": "4CUXFKZCtZi4d4fNXMFYPWVfVMvdA4ZB62arQ29Do4RjuxrntAf7AhQFnrmxw5m6G5ch1eJToRU1a1yGY1Bye9vX",
  "key23": "47B4WUH3Hak82vTm6QiX5PsJARgp4JTRFUhoNNwLW69NmQqzXzf6zptQ9YbwG6vHqB5iib9FUDXirEzcZdshMagq",
  "key24": "2mZMS6HfPVXifmbfvrcZNkhda1hkhkf8ZHvCJpgPQwBwMViAcqA8BaGDKEmC9aMWHPUwe46Ltb7Dasx6bdgroJ6W",
  "key25": "3STEMs5y3ELAnikvvk8c97T3R2gonjAvmWqmzCCqbn5AMsgKeT2zSMr72PR4VFHeGJ7Lqqh4zicWVWetwySnCagj",
  "key26": "u5pdv3xYAqMKbJiQk1kMUfXJUk3KZuH1X3Mt3oKk7HtG1wnvzE4AizBQe4F5PcgJvL9TrBdPKoaDgAWB8MHGW5R",
  "key27": "4TDH2A7j1uTc6CnT5HqWkSpkwG4RHGfYQ6p9MKPmBpAw4HuvBizkqGMBw1BPpxLBrYLKKvmVMKP5dvZkKVS9QY9K",
  "key28": "4G8mxCe6DbKdwkgd39ThcpFiZxDdbsqkX3yixv4tj2tmXxKBur9QTqn6t422M6bPm1G9YLYAhrWPWgQpKE2jDYY5",
  "key29": "47tkFsGVC7yvPKiqCHvQKgaHHYUYm1Ac1WviirpfeHyV7mbuXC5JV6vmhoyBYLAPKthZQJWnp4HWvc7vt24FsDW1",
  "key30": "5i56Spr2cZj1D2tUKr2ZpdteqU4ej4wwjdMhJwyF4p7WU3vrYU2fuNaACeT4MDqezU9NnRFg4zeDC4V3C2t8Hfya",
  "key31": "3tf8Q1WH3kAgp7fQzdemjULPV7VjJH5wtwihSiQt4KW4C4FrWgisNXv5kBCBjuZanYcuTkGtz9P87FB3M1yQ7L7T",
  "key32": "46JzJkpdg3zrNwrkJFDmbkMz6B91bJq9M76X17D9T2xLXdsdmdUMagERa6tBf7gp6PQbtzqLqtXzj7pvPzXaEFn1",
  "key33": "59Bt2vAQWf94AkwXG6HvYrAQwNwdtRuKcB9oBxaSZeZhroShdKT3JkTm7Akj8hZMoySMS5wsGH5vswsFLABuagoX",
  "key34": "5DTDqJsWLjbKQ2snF26tqEj65Bgvuj7yBL16o8B9Lu6DVxiQAW6R37AdXad4YWYXvMfdcV1NKQKrMdAYx1up181e",
  "key35": "3WXVqajS9owuVaHx6xhKZhsft7zoqKcNce6L4Tb65AFxZK7maos6GSefeWRL8Lu1eQymgaB8i5mXoCJvmE1jqcBF",
  "key36": "5BnSqMKw6wPnQWFUhXRVruUFnd63EWz4DbvLx1je9z9uUYxrNH35hZLgRdwnha4wXw739A3QcpM8KKrfgZkn4VUQ",
  "key37": "QeWP4Wk6ZXTn6MP8sdaDQ6x4X23uabLmnbEn4eWoKts3zVCyDoozUNxnDztfaUczyWoD1SZikPSfeK34xiN6iZT",
  "key38": "fM9R5JwdDKFUVk1twujPX65PnMzzanpNTcyqc8wpi6jxLgLi5yJi58ZL3tsjK3cJMy5enTTT5SouSu18oJwQX62",
  "key39": "2Ksh8XZbzBhUR9mmwNPyyKf9E5yMTTWf7emaGtm2M69KEuTMCeDtVV72dmyu2xEF9RWiZ43YZrmLpayrZ1kYEsx7",
  "key40": "5brXJq34sBzwzNSjiwaKq2uPv6TkdJnaUHoAKU4a12uSvLmwjAK7rNTtTFvZWP4gaMBywTzgMAPbY5LiyXruYofh",
  "key41": "5nGKCSDsJ59PGVi2B6bVAcAMmj2kMi6LV2X7UzJSkSZ2PSPVSiHzpjdosEtbHrb1RjY36nwA7L3TXMk8P2Bc35on",
  "key42": "5SkVmYHZV9B5yhQZ4dHoggor3Q7rd4gs1cbZ3UGBnxgTA8aArNekySFMsEESEvkaRGSSSrskNzQzeT9FvHA6QMKy",
  "key43": "2t4pjvpMWzhTzsAvx7B4mbqWEbzBrQmxAFDDnxpRTSSpdAosdh4tuW6MjJmnnRSdDsmKatjQ1mWnxf1ingQkob4H",
  "key44": "51mNV5LSG6CP9HRdjPCpDkXdisHRKN75X4NfJMA1NNkuZY82SJnCE9jo8m9aAJbrLoaQbcWqpKjG62ESJgkUDEFy"
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
