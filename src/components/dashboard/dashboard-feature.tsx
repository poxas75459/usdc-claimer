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
    "4HGHu6czWGMmrKjphFtR6gAZTyrz2gRraCPPVPvBcQ1TnBiC68DUdLVBfnWSH52rwNLdeMBTpvQx3QegiB5mqgrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xkQmaCMquVCpiAy4jC5ZZDnu1xZGSCsXFCp2ztMumBnx4CHm98MnNP1M9DstX9vWR9ZH1BZJedpVjZkzq3ZoD",
  "key1": "KXNP42n6VX8EZf4SdKMnBoEMFtW3ZEhyUC8cqbrBxe1LQuu9ZWtsCUAn1Pr5uY6RBhrKU5Rsa5icsQ8xGqNUV8q",
  "key2": "3urHaZnzdrm76ouoy1jEGsBZDCxh21DHryowKkG7TZ3Z5pTCQDTdBV5N41whmXwXiKxBAMMhEYi6Q6Rju8XeXSUB",
  "key3": "4HY872FshniDqUnoPTwrK6g4ATV9nxwTV6fLs7JDkvBKSo1dckMB4zbRwCVDyd44VcTQCpzbSnkAWxrspJQ668tc",
  "key4": "21qNeQvUgXXBkihGtrXZnsYUDoEtDdV3s6UDFzQWfMxgXUnBKRpB5f7k9nRNMFde45usYk7RgWfELqGE1NJLkgeT",
  "key5": "u9UpxV5GRKY7dXu8ef3SxhiWKKu17kHnzSed5V9Cg3LWX4CMR57M2K8xciSHEtGvsE8EyatrqYPNddJKtxwV8CD",
  "key6": "28eEwkoj4gYoDN8dsN3kZWSceCoUJAMVatzjcTG92LEbL69TsPWx4yfHmbgUR3Fx3876ntDtn9dgbXKPjDPkMZfi",
  "key7": "YJ1gYiPS5WJuBmi2TgKTXSK6tnQzScQYyewQjhxDGJ489rAaiC7z8UaFY8vp7Wb8WPjjSqrymv9qK1qGDUpiPZf",
  "key8": "tAtP4HFzpWBgEfmxfuEhmzER5Upi9UwEj2XMkFJ6JmDMjup16dyEgfPXPBgPqdTHw6vZYJPehmS5QRH2ycJcVgC",
  "key9": "52LPS4BqEsJGCgU5iGsP5GDuk9e4Aq5Lp24EWtwBMHSoHFqy5cw2jEApj5rEwAsCdAfFRyyWVZXV5NF54MY47dof",
  "key10": "2y4yw4JAuNc1BKV7yq3xFmiF5dQSXV5bwsQkQrCfmpeum9vMMkHnBfgGchpyjwymhsP2bAHDVUpu21jnL7qA5P2j",
  "key11": "B8HhJtBEZH6EgacZFgnXxVLny5bTyYPo4Ed8VGuJt3vUVqQ5nV97K4bm1saUZBMBsdKjNmWeWCYvyCvdxptVEwz",
  "key12": "3njVTsYy67xvQKBnSBuU9KYin3d7XjqnwG6c7nKvDrLmXCC6RZrm8KBizSvqFzJNoHacQCVw28A6XDLcgZu8q2vt",
  "key13": "3syWd4J7jZtEhsStLC478Rt3H5QLxYx2CJG8NDErUvR51m3Ru286mukx9S5fTgNu4ksQfrPaGGHETkqet6tZZLzD",
  "key14": "4wYyVjepFgpZBf9CMFsMiXo1X9RVRaukfBdbVjps3SA2TW7x2srNa3P5mbWpXGnearVkjcj8FVXEVyG8bYN5Fhyh",
  "key15": "Fxf6NgKS2xmvC6UkfRaW24sbN1kK7JSCPQUGPS2D56xkzSzj1BmapnPgCP4a3zvJ8XxQ2oMw4vMdZ66YY9hmDvt",
  "key16": "4rxtRy5mKDXsDPNvknprcvuiUzHcHhznwLDStDGPxauVpEUi3K4HV3fbzKJEkjexNNiZYErvR3n1s3kNHUvEN2H4",
  "key17": "sMwdsYFbWyUzKsN3WXNVq1jizzED8v5nb8hcsiQRg8MyVW6NDYGRcJNAR1J2Eig4QtBPBoXX8TAntBiLU8qTVAr",
  "key18": "33phqUSLYtVDYkhprtnkxpbvpegvjX5VFcbaobxvHKU2jHb49HToMrL2qmxL6R7cbrCU6v9o4BT4GWKihPRapSn7",
  "key19": "JrFdUAgoLxNDFrR77SZWtSrBPwzxnMNVJP8TVjMh9Sz6gMifufev9ygoUnEqZLYwb8SKvYYr2umWEEm6g47a6Q7",
  "key20": "3YTUe43exRCc3YcszdudHhBPeTivAkzKgQTETzEkp7zD5KtSTmLf77xaBm15d3U8eyp5dd3Yr7DRM1rWhdKaMY5c",
  "key21": "pTqvW626z1AwuSJ32c9Ywnw8F4B5k8dVpwAn1Frz2P18RLNWrvsSq6caqYQi4UnzGfhHxxvK3Gnvqbm89Hx2K8b",
  "key22": "5NG5CawfyS45zTFnt57oaZRFGj99YqCaefHUyExQjRC5S7iTPYRkm1N66FK8tgdi58HpZgfzkRhbmMYwD17wX2i5",
  "key23": "rT92d9WLzehTeZkoXDzx9ALv3NjcgZRKtsjXeLc5VRU1Mc92eGxVm1yKf9GxbHQBp3CzZh2MspbgtiDr58TvFSE",
  "key24": "2zC2Dufe4Cx9JHTXgoqCgZQvpjABLt3tcVdc4Siej69zum3hXUQao3nCs1cj6DHk7p2VdtZEimMVapDp7pvA5uzL",
  "key25": "6Msjb2zzRio91awvsuFMywebgmMLT3G9pT5urYN4Fz2kXkLLdx1CaXQ1SKgdy8qH5m1sjvCfWa5nEX2c5i1d1BK",
  "key26": "3xCdRLGjcEJVuNME19WjT9ESLifr6Y4BuwCEJZPfyU6fNXWMU79x2VtitCog7M4L13P9L72iVCuBRCbZs6aXbJEJ",
  "key27": "2wDvaf9oEzzjbyhVbJEiHnNiaL5raA1JyFLxtK7WrgaedCWTKZGRtCjBWVqMpLh83UoMZJZ2hMvhvgEUFw3avBVD",
  "key28": "53zA5nJbebk3MwTknmTyWRCzXrCgWZpfAnzcvGtS78q8Xgy1Pe1y22q24HGusPr75J6AcYdh5uss5T2smy8PWucu",
  "key29": "23JEwehs6KuenxZBNzCDZ9yWmvaXtBBdtnxfFFfrr4S7LjtfdzoiFtTEL4jGVsUi9K1d4wR5msgM3CiLhCZrcx7E",
  "key30": "4qQLsp2fuS4amSRLDg68JVqSRrDvwqz3SRYZKsByW515Lt9d5DADi1DjBpmcgyWbQKBzyD47z5PVwz3Jb19PfudP",
  "key31": "62aaG63V4i67FstddKMxpiqsTciHKUGX2rBLBBZxFfiS6vJ8FvXExN9FcA3Fodhijt3j1Bcps2QcFBonQohCAyNS",
  "key32": "5SsWZ4KoHkqJKg1WEv3BD2mCMSnupQv3jsMS1a1M6uDJPEkod6hJiKwMvUjWhYYQq3sx93azssYABtJ1FBUVKPGS",
  "key33": "3CsH64PuKSP23VxDhUniDW3AiPtEZmcti4p82daEnNBacTKap6tHEGKo8QX5bjnTbiY5j4UaVosPCngJFk7mkrsM",
  "key34": "36pPzgwBr4HrGqJDqynpoGrp48eJLNXMa9hGLRdvPHsEAoJZePVs63eWdSf7tVCWsNK72SY2YAy74vradR1NsSXU",
  "key35": "56XHT1eVFUrDofWGdU4ZbsGRkyrw6MLbKsiMBhFP747s1XPirvg3k1C32pQhowMJ3f587YV522dZiYVtsMM7P5Lt",
  "key36": "42er8QUqSzrM1CzGe3pRQfT7XyLSDbh5gvVBAebkucRT3n1jqQf3WgaihVgYnAK5kQtyFrfcEejJ13j6UriVqFMT",
  "key37": "3zH7yfa7hcPw1f17Esnf4j5sk65dWzPMnRLzGXHbJCpQ5GTtczfxcabmdDUEufmdNraXtmi1gBiNki95hEbwjMYr",
  "key38": "34waQeLh9xTiUngK7CH9gQA8CTPqYBtjg1F4yvYZETLoviSP9ho2FWMUDLEif7Dz5jEvz4QekShVkhQwWt3LpZyG",
  "key39": "3vPmBudRuBmeZeruJCMamsTmhMmxXvBemhfnUykAEdCT3qeGJUMFZQYNdmUPQgqkfVxZcNZN66PLKgNShjGUGsqA",
  "key40": "676snRdKxgbKHquC4b1Si3feovEbGSyPH3APmhthSsPjrpj4BuEbdZhi3coBwzTuPcfje6FrmAZqHa1ZJf5X7CJ",
  "key41": "2xn9vbAXkXkY9HMikBBQ4egEYj82zX1H9M49NZc9uRgfkcah7vQLsJYkBnsnDuES51t6mnxyrUZGmt5AHTNaqjzp",
  "key42": "3TWJEDPkUFpMqusDyfMAFAxsKQfMtGVHVKxRXTmd1AgJyemJBVVDHJGrMotAoYnAXXQ6NxUapzD6s8C2sFAxRetz",
  "key43": "5ra2FpGfotBMVk5q5fsXZkVPRMjZXmSra4VnFrtPjLddXU82cYzXjUQBVbxeSK2Y7mVmigvWSpUspURauJ898KMj",
  "key44": "5wXZpnzMiG25CECwwr4uLaQ8Gf266YDDmq4qakBNenMkiKm2fPA9Dt7UNZz3f7CTGcKZoao33KXJbk6suQLMw9Hh",
  "key45": "5qamT98G2QGZvEWJPWVcPD9TVFQsDxA1s9TQQH7VTPmu23mknvfuAp3MZjy6xP4bybUtKBYY8suDqgeM5YWx4hMN",
  "key46": "59ggHNw59VrpZD2Hhd6kq9x14nhrMxbjCg6bRJMT7FKrC2hwZXQyrYz9Uke8HntQ1nAEXfLM7aSTAqwMvSFSpEan"
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
