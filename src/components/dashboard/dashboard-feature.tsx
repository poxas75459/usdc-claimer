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
    "3qkAjGCpU4wPoDahwksU6rPF7PXcKbD7roacPw17wSPPB2z2weTtbTQuVfjVd1Vy6eoWJiQ4eU8i2u4UeWDV5sWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t7894gUHjhTHawyyaFxXyARX8jMY4ULL4zrKxmDyCraC3CHzdwPU8PV45k9nReumM4MkzPxirKBwby9v9ZZhZXY",
  "key1": "3CbUP7r6VTfqz8rCH5HPtWM7pb6S94i8HZBUDbhsnprA2rLBSGaph12dUUhkNHsaCzuz5mofZVFFDuNZW3rnms2S",
  "key2": "3yExtT2MwmExhg7CjFDEqf3ZNFLvejE862irw3tKmUjxqEULb46vRCJsqHuaAvT4PzrhJnsqwWh91LrijQznGYhY",
  "key3": "gLUPrEHF4qSRNu5ZoKqYeS9qK4vsezTgRNtAzRpmSMeR2EYj22LYNDQaQBzg14CTqjRVc2628HfMM33Nw2ZtS81",
  "key4": "5YeFbsEni5khDNMzawtTVKqrknAcTnzbxaeSa2iBiZKyKjFQGHN5bRiEB9mimumW67WiaHJ6Xccq29sR273JCRf4",
  "key5": "4oWsseR4wGBu7KJDVEdmki7Cy3foT1z9tofmcjxBCtKjoJifPzGiTiaJ8ZvHxrMJaD4DmQueBDab469cdC8VoQ6F",
  "key6": "326zEUzTyzHBNj93SsoMxNZanukLhQ9skk3K4ULVjABjJpq8ZrQ65y5xjui3erg6Z79Su9vw5jGYGQTDb5Kp474s",
  "key7": "5xy2sModkfHvue8Z6TjUKzCoqm182R63cBSvqXSkBZZ1Fgzv71S7JXHSbyZxhxC4DL8mhusFEi6C23fwcRCow3DX",
  "key8": "4AKXkoM1ZUfoRZpZg9AgBeLyL7vDzAGBXc9ZhMTx2h9nZSm9DEo8qvMgPa6RfvtGudWCDNBcrNSdjaz4nK1igHAT",
  "key9": "5sncmewHReiXTXMvncz2ykgVkAamC2mT16tSZz6Q7RvmRpPmGdL73M2TS1gVd9rB2puLeWgv6wGGGSJN6qTsL9fZ",
  "key10": "5mN8kPhWZUmXu6Sax9djbmvwr2yiU2NH8RcxkbEFctn8vKRJGZXw1Jy77SB9ztWkjAZwxrQK2KCsexqTfe3ad2YE",
  "key11": "FxXV9qaemQJvKNhSjZYZ5V4rE7vRqfXZHdBkfo6xfBqY1APwptEWh9eQ3MAQPZYGbeJHcdoQRHBFrMmsEoDDNgm",
  "key12": "2GMbhywgWACN6HCJTNQK8mtzoM958TSr1tGMShXw1veZehSUZkBdvYG7NNRSmQkVU8kvkvrWPW2N6wCSZF3rtz9d",
  "key13": "3jYeQWoTDEY6KoK4W6RSSnYji5B8AxbTtwJq8q7j9W3ARoh3ofipbC6CDPLJqfddrHaDncQY9vWKzh9d1HQ6Q7KW",
  "key14": "3GnbKneWv4qkaNobkJF4LRTfmqsdHfHxZDiT2m5mUAcf58Fc4fZEPPFwKtxws8UNGnYUF91gY32dctA9qRi7vc61",
  "key15": "1qZWgr2wkX8Hds9wXEdDenyzwAUSQKXxnucPnXc6QP6SpvgkWKNJ8hgRD2DhMh9eGatMV8WuBzqZRzeCMN9BU4L",
  "key16": "3VLSDDEtp6T4eNWdvyRNdGAw1hbgfWVaZRinkzxionQZm2xS6N9QQB37rfJAUHHZiN6q8DbYe8FybwZ4ZN1yDGST",
  "key17": "4LAyHum7A9bcHnfY67e9wbJaGnytTQAdTs6rZwr2LB476QiSTCYsZzpfyqeE7PTT8z6j8NLLyQTGfQnPgT19V7ba",
  "key18": "Lsvm85BQhfTRSVv5wPD1pYSRhfiM9uxptTzYpz7RrCBXHxn153D7soY1FXXsnKW3ViQNnTsXPXgB5knJZDEmb34",
  "key19": "5CQcR2X7o2AT3YHLa9v1enCgKReBkXMuKPPUxf3w5A7BfgkKAgk65KH9LcSkjefTKWb1GDokM8aZLN3N6TSVbsKK",
  "key20": "5qGYBMCJc1MjWmXH4MFh4Ts6JH416NciZKE6spC9CsYmyCJ1CgQKarhQK9wTT5uFRFRc7Cr6mq1HixR1gGxBGGRV",
  "key21": "3YNGs4Nk6AfddMgpoDK8p6EYoqET3PWo2UJVqcZW8MCq4u6GiNEdCzsG2vxVVfrin6X7USbV367WqBfFGsnXbQ6f",
  "key22": "5bv7jzzHH6GnD47pwbQnCoPtmqVkYNaT9GjicZ2xDSdFE5bqJnPViNSgq6bDMXSKk1WxD31kYK18aDuN6Xa13Gyt",
  "key23": "3hMSeoHreyMw8pDb1AiFNSLtJCvyANDvsaQSFhyUhtB16fx7pq92cRzzkrupeFXDrCyC4nak4rL9SP8HgrG3SGCJ",
  "key24": "2qJ7zAuzc19qdnJom897t81K1x48zE7mEZyTYL1BWZUzcLrxXF8csfMXC4Ed9b28icU4nvzRwhDDdmky4FnAPZaW",
  "key25": "3DgjmvkYMGWkCCqPYqVDjP1kpW3PSu51WAgu4cZCbicRiCMC7kuDarNTeBSyvLctbnb8b6JP4E2AzjdCBGSTYG4w",
  "key26": "LVWnzweJRZV6ZBTqCwdngBBhpMyf2T7Q4StmCAuSqXWa4bqucKaG3npxeQzMvkRf5VQqKRRmVo1trqCLvNENgMo",
  "key27": "2QimsYYo9amAzEXVh5PYZuxrzJan2vQK5TZAuBKkXXxjSiRmH3D2uyf9Fgy3X8LbcKgyMRTfg4JApkwKfPqcwppo",
  "key28": "4vTp6YTfqxAWGQr9R51NgzGc7orwDTYQwoFa7z7g9RdtWFmUSqFkGw74tJwXMVypuR9aRvLNPp38QSTnkpRav3qC",
  "key29": "2VjAh5tMF96GKxkfwGScHvFdu9wni8X6mDUubXvFkVt1zYSpEPGEW8xurHQJ11eELQhc5EYxmDRpdodbx3B5o1oQ",
  "key30": "4gRVfFoH4jCUcLGFuC4dgFCe6vm4EQMUqF9jZxwo2qCb2gERwZw88EBAJqRNNjqWLmQUjHbbi629Cp512Lmgwb2D",
  "key31": "5f4YSKfXr1ZKWB7a3PczhV8boXhP73A2vm26MiUSun3wYPHA2WdwJ8xRzNmjxDzTDVEdUcZ5mdmzCxy8vDcbfzB7",
  "key32": "4iHdLChEdgrVCawVYRN9QEsExQRotYHhPpS2byCJV1GWfuwLJNbHsYFBMKyMjRZ4XnPiiKHR3enHYkMRYyrxW1Ag",
  "key33": "2tMncW5nh6eQSefE6vLej7ykfLAb37taGVxpZVLgGm57YNMYQ6aW2C8JUfTuoYWnMS2gAj7w5rRohUhRtgLomwbk",
  "key34": "6hrhYyfEPCzTggqRvGvkYDmN17vnTGbZDcrvjfadEADS4yw6DzyPMChfXMENeTNuYhMoiLvgrRbDjN6rK3N448Q",
  "key35": "4BtNdTaB372ZNPaezYh6XKFFsbzYQccsenovHW3axbM9e1rj1obDrpJXuPvN4m91nNzLRSmUFzzfSedLnvnMsYPZ",
  "key36": "2agonbTEW3zGpsWKgVid2akNkuEFEGVfxgNH7ctjB1Sz5uqTXZwXGVBfNyATQEyCU9Aea2428CCwbzsjrdygDx5T",
  "key37": "2ydRoocKZYqQ13o8Tq6GpmJx6A67kdP6A8KS6jUbtSYrRTd5wCqKnxgDG6KVpFFCf9c6qVha7DxmnYbvM2eSKKeD",
  "key38": "2S1NT5S2bv4GtogWEGv25sfGLmCiur2piC4nddr2fLT8axh7bAiVxPx18hvTbVqWXd8fhUBojjruFU4EiFw8XSPg",
  "key39": "5zU5WBQJj8AtmxEPKTyJDK7GCH32YsiGs4YEwqbErbuPVnvpZ8dw5o1eYKatqZWqPyn3zvPuefccnrXN4TaKrcAN",
  "key40": "4KXs4MoG9tvrRXZBFzjTCwk3oQ2B4bnYRZyPbdVTwVwGTARC1whW3YnhiJTxPRN6mdSC4AouccnHxF6W59yikVmp",
  "key41": "3dDyHTS7yyrnhijZ6VQ5eiWpJVTes6QsmAQYbZP8R1NU4PFo4btFnfynzB5EdWaX5Mj2kYFzNu4ZKkjmsEsfAkHu",
  "key42": "2aT26PVYp3FmNzTFshPupdnkxzjkA96XSe5dz1cdYgb94nNsAAUndxmCa7eXF8J8NVRxCsiiKpsvjT8DJto24aHJ",
  "key43": "2M8JSMbK4r1hABgtMq7hco1obiyWuM89paPxnLR62mrmADkGv2WbdTrCyX3cYmMDQLTrZ1EYXiQbGcaTipmMKEyh",
  "key44": "oiAAPDsS6coH5Bu5uyMn79m7VurwsaRzJzmtC92FbABfUnQiuASeH9XDF8PS1kG52WMJNmFQ41ZD82j3shBFefD",
  "key45": "NjcaoTaZgFbJRjUnNq5npHKTkhmAxY4zDGVS9RpH9ZApN1vLGTbNwdcPdnKPaN61USibPicMUpkgEkAX6trTrJT",
  "key46": "qjvc1mcWB16w6z42Qiz8J2fC4TacLgZy4ZLH8PvAUiAnAvq7q7stsRuqwLQi2BTvyfAupFsCL1CPhR8gC5yN1eg"
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
