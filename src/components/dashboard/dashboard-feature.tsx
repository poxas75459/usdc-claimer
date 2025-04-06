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
    "5VCgmrToGEqsa2icYbfzKGKJj98HWq6TR7ZR72TKcrVx12FE4Sr9gS3KGPigc6PUjrnPBL45CaXRf23xcdct8akr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MmRNnHsfEdcbFVWpLYmoHMXaFgBGwcmszQeiJAbE56JTGBv6iUUiEqVyFSuHUThvB7iGt2L2CKJYvvete8Gr6r",
  "key1": "2PipfsHDxDdvdbpQMp1huzYQuN2PaQeaPK7xTauxiPpcQ7bUocAhH1X3VeAqSRdcFDbSNEiKTJji4VX1qW5FRg2j",
  "key2": "2sEdRrGbXWCd37xQPN4cwVRwvmpzinpVbjX7md92JutRysUNDjq4ze8UcU8s7zPNdyfiELtumkX6JcDThnZMvNTi",
  "key3": "3eWdEos8EdTrKQFBJ85nGzgV4bSfMWBjT2pWCXwbQovwvEJVoHw8d1gSVGCW7vfD98bQBzPJHy284SRXJ9V7rT6V",
  "key4": "5uq7NceSMLQtmZVR83U1AfTma6QD5CkZyDpNDfXU14CkNjZSvwAgW3PvAPyEgoxxhbF4axNpvvciH2Uky6r45d8M",
  "key5": "MDt2efmd45PpnMPPKpYPCrZdLMgpSGb7SmUV1ScDKFjQZR5ZyD9YxC1HQzKpLPGG898JX7HWSUX1sjGCkWDi9i3",
  "key6": "xCZvb4Lx87RTHK1SDPpgt5GDwJyBgpXmzVQe937vWeYu9HEmFA8dQpEUA8LCjzvJWkEBB3JeDZQC28aYEJeJqvP",
  "key7": "2KKjN9aWPooLRT6sHcRZUATee7phCBku1EuBRFFtdhpZaz4F9rfSvu62GXn2Xz5KdKT5B6mi2qnyCgDa8fiW8otz",
  "key8": "2PDmMmrhqdmhrQXDbT3tKon9Hq9DvD5nyadASbcDhKq4VEJ3VuNhbnzoy31pB2XiPFYG2s3D1Y6roCAgCswMRgbt",
  "key9": "eETiqdghQn6WXmhY88wMm1GFs4ZH6bSwEovMKS7UnfMUk8vAy9pLnkk6EM9egFamGt1eDNbw2zMj6ZkvmmF2icd",
  "key10": "5C9m9XJCcrMNkQzPzEoRAqe1u744LzpN9vcUKmzhi4L2dx6FXFuVn3ndB872275kbmdFrE8Jc7uLonpPkzJtf8bH",
  "key11": "3FhWghyDVCSTgvnduU5KFjT7Rq2cYWes8wseCk13ZAgxMoKKDwkRPxttCthfo5VBFwTwrWoLdeQGG9uSXXwcVLk8",
  "key12": "8BdkTGEZpZbHyaWBvV1rZST1V1VZYVBCFa6sTWZZ5Ck7roLgQC6wKdWof3AKpr6seZsUtfofeECz3GfAQPJNSne",
  "key13": "3522Aig1ZFT9bmksiQpPPhib9iMQ8asc1oZe7zcpaoFFFAzh4x2fS5dKFeW8zjyXBYmu7WbS1RwVAGzc1sDtSiYR",
  "key14": "2fN4EYYYRcYdUWeBFH5ZY7cU8ptw6mo9bj8vyxcM4Thea574SX9m25EoNAA8BM8hGxJV9nLWUTvtWRLGeiCsUew1",
  "key15": "63NCvYxnx6mtU8EnmJd28gKvqwdvPzRbZv4gHmG1PYosoRXLvGr2sAxaE9hm7KgLi9AnHzYncVPRBYLrsyySvkQ6",
  "key16": "EynqjafwfQpiEuiaq8EtrQAZ6HomfDeVPNwbZ8aeFFTJ1pqwW3Sgecqu17tFsMUjWHTYmYmqLwZd7GuyhneKSZ6",
  "key17": "59txNq4WvxETcYLXdg5Ji3jnLi2mQZ3ywWusjjxSt8uQLXSyTMF9nkmqn7bpSHqc9RLJAkf879MHCTGvLajp6Pm",
  "key18": "4cnAkLPdV5oAxAPcRN5qnhC7eo3ke4yunCTdEaeQkJqSLkTdAnVenzbrG48h67Re9XRE54WfJsxEoaY2tcGEYWtd",
  "key19": "2g8KmnKV7D77btCzwVBAnhhKHLz4CWxSJ12zEnLDwH8jJF6Vc2Dsb16P1awnqMMbd74WBbQiCa5uM6ynp2tNHKKR",
  "key20": "4uaAmxt2Ndm5vHW4BHrsV3ixaixHxvuBWpZRetKkH2MssiZqXJP7bJr7iEvLcVtjQPCDAAMK3j72MJiCmmu2Gj9X",
  "key21": "4Hq5LQi5HcdwroB1xMN7kHtcvKytkvRBF98vnT4QkJngB8SXbGruRAi6nyKbZvaBTifdJit2vEdg8LXAhWXAmGf",
  "key22": "2X8TtWvdNTV1EP48j4vy5sedwwkReXxua4KqbyvGd2KnPXkSmkdZUizbtxsZp5FhHJGq1rXwErHXTXQo3iUFzXYe",
  "key23": "2Mid1K5TuQbfaU5cknPJY5cqx3vuiNhE1atK5AGwLGr5d9nBdE2tTNP9JX4vPrvCgEtTxdpJKwRX6bUe2sh7zVAX",
  "key24": "4d7thtADuXtHfcmkPXPX82hdYF6xbvPKCRnMaRGxSRu5epCPQNUYvpgTXUJXS7RTuDoMq9QjPJnwKmyPUrXntWcn",
  "key25": "2DPoppFp39o1KArbjWDTyjVP2L4Jd21Qe7rMnG2Tn5UkbD6rjJ9J1UYLvF8E3GsfdUfJtc4Ejr45MuPgxtdUguAd",
  "key26": "4AipYkC1wN6yc1nuvpwZ8kZUx9HWHdfbLSkjFakqXBJ5AQJhBzHfQRNGcDwpxcquqrdxpohjM2YXf1eH88m6bomC",
  "key27": "62zhEUGX6cSTGpJmfNgMHAk4gc15k8o6eEPQxZ3QeBp1tvzvoupVYTfWQqKGyTRf8e5WE8mXK6DjUQ1zgzbMNNhZ",
  "key28": "5J2rBBa5jcko3FKscHaGfH1v6ftQrtijCRRkc3kiW6zsXV9GC7j47gLv87h7JCYqrpBBE2o5PFRafHpPTEoH55To",
  "key29": "4a7yTnZumLg4RitGt2JM9si3rUp2gKAoR7DyvYX8V4zQFzLLrZgWCgD5wiBXoSkAEy6gWyZ8TiDbuM3iNeVtyvfY",
  "key30": "2nqSRxJLv3LbkrybMJPMtpJQRVQ4uvBDb9LxARfUUoZd79nHaoRrLMKwBuiuTE1DjKvPhGJRT6CVB43c3tNV9PH",
  "key31": "58RZu7k1Dcw1j2m17VhiefxcPp8wMPqBgZZYZdPioCJvtDMK3HSw5P3eXH8g9wwsxJoJQGsMojAVyaRd5migojot",
  "key32": "3tFMsUiVWT6DyzEn7BKhvzd9fZSNDm3su1ebSLQY3d8TPppedDBrmPQGcury1fyWijCst69g3Rxokr5DPFR1WY41",
  "key33": "3NarjXHDpmAHfkhmXDjFKP6Vpv7yEwc7ucgGtpqAZQNWmkUyPKEcpNPEcNsYb17oZ5hWWQjiZHBuDF76ocABzpTi",
  "key34": "5wnR7ARZqXVa77fydvQX3gXDqHWLtrZGzQ8jFaWDj42sXhZcgZGfHZyJk8CXugGvbaf5ALryc8npcNbgRcQ9uq36",
  "key35": "5chwqkuKnmunhzqAZnmjrEkRPeskt5Fw4ma7CeaUNTNeww4ZkcHAbBx118Cq3gEUuE5UaQYfrhDx2YzGYKCNWw8U",
  "key36": "2av3LV1E9P8g19mDx3RqLiKsoYAsir5sZYUTusXPzZ4tGa5G3ajniZc5T6RbcxCr2iUv65ryAgDMter5KRLia8xW",
  "key37": "22KXvgRyYnR8dnydtyDDKYU2SYfERD8prUY4BiA21g6RRyvtEYnj2uVgnxN2UyPBFbDob4qZZceM2CRekQ2LjoNi",
  "key38": "4dMvtdEF8y3NpUhotjSwqPFm1tPMcgXhgayCzBTwUxSGhVkmKsaVDNVBbReutLpVZi9WHcbYnvckdE197ApkzeMU",
  "key39": "5YL7swvqCL2Tj3TEC8btx49GdcgpGqbccC7HspWGT1tJn11zeZjtxEgonQWghFJyaynXaCUQVWqmoNNM5qy2aJ7f",
  "key40": "519N9FQLmvoU3wrbFSmBgfGSWBqAghB1wV8YEep84Wid6ssPoR4bwhK8rn5EcdWJoBFRavQ8yZytJVMunzEJLTve",
  "key41": "34p6RrDQ14mTYhSefif2NHHCwGSYDE2At8hfZ1cJPW9uDxjSpi7aPXaY2ND4whSvdji4Wz3XjfxtLh9tv91A5mWJ",
  "key42": "5Z4z5uMiCpox6fKLsCJbfNzStxQyDz8UHzm2qFoKduL5AFLbRAcBHkDhi5FW6xeHVWpYXUgujdrcE1Shjw4LvFJ6",
  "key43": "4u53tjKcHGgJUjKMgHAuT7hrEsgu4cMoXbLvMdFXgHp3fbcPpj2Gis5hTAPz3fyaKDbLD4SPezy6mFzShjp1uEFv",
  "key44": "s7d11bPUCWLDHZhsgWtR2oxLZqi5M588RC7myXjQVny3674VWLCJUcgPBHYxtskT1y2j8RbogMg4rNo8dw1PD6s",
  "key45": "ZeYsUcbJNk2JBZQ3insgKsVMxbC1wiswcr68K3u6K6eSLCA7WaDKeBnjqHV9747pxeykEbYULoEAb6BcGEimpVE",
  "key46": "34AsfbZapAcU1i5nAEeQwL7ZY5JPuyr7wmF72bTN9D2vKxWHCH2m3EA7T5efPigBsPrpr3vXjWcshPJaiAa7RvGK",
  "key47": "2FfDBtQZfGbqeYxi4mMR1A1yKa3nHbxtcakZbjS6iwpog4NK41HXXAJkhun9mWtezzSPAbmmk39hpPg16jmN14do"
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
