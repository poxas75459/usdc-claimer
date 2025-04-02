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
    "2xHDPWyDZ7vNp699zvrcR1vRbYeskhwUstCALpJQEgWbD1rTqSJXp7jNpoJnZo4Db7NGfq9Z2V8QFs4FHmzd3CJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52R2SV39r9t1cekbpb7JyntNCgY96EHDc1V5RZjfUG7zYMaxxB5dnyZNut9G1KbwhwXVsJGvjoH3wHkVcUg72RcZ",
  "key1": "2NKyueVHk9aLcuy2EhPEAYw2yANAqk8goCPrn546VPvg96BL8XS7ufoRLSuy8Y6DtHxmi1JZjbqu5hXuePV1iqes",
  "key2": "1J2WwhKLGawKUuDYQmn4FtLKJzgvTvry17x2hGDNhMynCgMDNht3q6CRNV8mrAJYpKF7AeckPriTnwBA3yGS4ph",
  "key3": "ebxPJNBGVRNJuSCh3HDBNCzhBwxSxyKB33ZLzfHBLgRsDR7Jt1d1k1nSYpudLfwzJwn8VsUw4HZtGdub1VA3r9T",
  "key4": "LFcHMZ6mZoVV7Wy7gCHfdk1mRVo5c39z3XrS5aSyfGKWeEnM7vdMBvySEBpsfUY2VoCy1QzTPTQFM1DURkNF6st",
  "key5": "3akT1QcVyipqQwKw2L3TZuA2rYpyH5zEz1YusE71m9C9CYUH5CsfybcP8cj4eapGAg3EAei6zkHhyHfLAEy3mPng",
  "key6": "4cYCy53MsL4EHDjhrz9jd8RSAyv14WtQe7cuefQQbk5PoXTg2MTfhBr511GYd6XnKwDF8mHQHj9KFV3aW1WfvfV2",
  "key7": "5AkfmcRuzyL5tqcBsWY1dQrTwvv7Hx3Q5ebEPxoqdstGyDvXEEVx5i61rTaqZuk5MnEAHSokyR5sLJNfJJjN56rK",
  "key8": "3VTJNjX2UB2M24xpKv9fi6c6x7c8vJ1cnAfCA8YS1UCwKkEAVXwnGRhYe1vT6VTs7StsdjNWa8cB5XTUtPYvaMTQ",
  "key9": "4hGx6QomkmWZuykVecaQXz94WGYqu1Ztiur2gsbjFoUkqSgHUs6ynB7VgKa3U7fK3ZWS6fYvSpRgTDM8Eabghasq",
  "key10": "2BWngPfJH5CLWAEui7HkuickkdBRkc9WQBnSCdhLrNe8Rb2korXZ9uvrGvUcgdZhG3niL3GmXHKJRuyFCNyBazm1",
  "key11": "5VvBVbzufPzMoyBy4DiA5GKXSyy6fjeYFSUrpbtYN1Xh2tSp9Fmqj4jJRTcFdrmF5dC4fp3CQGbAovQfkhnVYYfa",
  "key12": "cyTaPs6TvChJjDZ8f2iJaq7UWPbYVzP7SXKsibs39oFSANTNYB9ScK8faq6YbEwbhvHZDNoW3JVsT8fH28zkRMD",
  "key13": "3xKzZBXyoCNdovjesR3ccSRYDzjdU8Tw1H1PW5M3t4foV1mSFCwVTqrd5iyvPrwh8CByMNmnp4EtKnHmechhgGcb",
  "key14": "5f8vRTaTnw9PetDPedpFWouc9qbPsabv4wEX5yCBQF23quqDD2pXkNabKibrhFYw74b78mC8bmVR3oLU3a3Lq9Du",
  "key15": "5TuUbwkoiqdGh5PxG4Aecntu8cVSg8oY3bhSBoSN1x5pedD2bxQg7FCutrYEUPqPg55JvpW2kyV9iSU8cwPSf8F9",
  "key16": "3WGgDwTGqNUrG7tEegvawb4zShsnt2zFpeQyCUqBr96w6LeUTqae3SxMGbpavdGm8kpnhGPi5U4Vx1FLWGaX7mwY",
  "key17": "4EtcfYNYayeCDzFvmsqH3u8mBJLVyvdSWL1UzMCCSpzpKy3dAtod87Nz7aer6kovdntzGoNJdGQtc7y92YJnDXrF",
  "key18": "2YSLehPu3B9fuDhtLU5KowvjHNHoEyzC2XHDyi9ZTB8GMkHZcSCMN96zerCyKQG2Bg2tykJQx7XNVkxhpWRpFkS6",
  "key19": "21MnUCv9tqSXA7No5nZLD93S1binASrCcVifrsW1oCck6En2toiJgZbJeQ43Rokpz9tcFQG8ULaQTYWkvk2d59e5",
  "key20": "2t8DoQynHw4fpKm7j24so8T5SNnbasfddci6RTwkm3LVTMo79AmuQ9gwSJZJM9kzDSkjG6KXXMxwjgZRkUPdWwgF",
  "key21": "yNf7GN5fxcavNCJHJBtBmcqxNsPPwT9RpTZM5a9YrVXhvZ7sX8zCFpvaftdcbu3AWiyY7GRcsRmoLzEZ6ytyL6w",
  "key22": "23UChGi3NxFs1pCw7KX7Ps37SxX1n8UWPnAh7p5QV6Dybamokh1ZoPzwa72UZqdu3mWMy1PHY4zxM819wJKsyQmY",
  "key23": "eeWRYiUQYTaFL7Z388UjbX4MCaJTZPoWMurdutzXos5SeKiYjFShXC5BL4TRhPr8tvARsbS1ngo8dBXR5tMa2xX",
  "key24": "4rbiEdYtMQAWJ9mp4htCz9grP6wn4kVrDp3kY8B7PT9v66fv53XigpsjWiQst4DEyxHvSSAT7fhq4n3S4oc47cdF",
  "key25": "qRLkYLNJVpepjoVTuvcEZ2Pz6mc5ocq4fnET15zW2Vs8rBHV2ggCX52xgLNTfKr6gET86qnH5jiumeorACQ8mEk",
  "key26": "49y4GKfzvR2D27FP68MWfSEyVCXncys384aab5KhZmHgkvP7VAXfkreTEDhXBPLdoiWAMKMDrAtp6nDDP2fY3Gxq",
  "key27": "XVK8nPV9MstEK5R34moqT1CK8FoWRHGUMHmoAy6dZ5q7PJZPqno5Gg4pP1zHjbNTKEi3MvsBQU5yJiytqXNWXa3",
  "key28": "2pCdek4L6bWsQH8ogqr2pCH6hxNHwTzu7kgzCsXDopKMLnCD8PKPUtmsd1RQivPqWyz1CRqXmeB3ixsWL1xBUVFd",
  "key29": "4gHLj3kUqoM2MjTDHWDMzKu1hWCJDY8FosiYj9pNdHQt35PLhQmjSZc4JVjx64kJ3m3QoAo9d2CLYQWYEHRMPxkJ",
  "key30": "5oUryUEQNh1M5t8LFxAPL14mzFoJ6b4xgi6B3537rqGCmuvnqof87r8mhU2rDW7ZVJ5U873xGM9mCEHjYMp3EAuT",
  "key31": "3nuxUiCk8sTAc9noubH4RcxRuPFQZv7L2XQd7Eq5yjAGwiCdb7D2cY1veHZQsUjGzRsBr56ncLro15My848tNLn1",
  "key32": "3bNRKueEjVLf4Xt6TQwjcSFZYsZgnmjnpdiyha6MFppLqUCrWrpVDk9Su77RVFgWqXxSCmqDmE2BPqKiyffsRDmD",
  "key33": "3g2RPXXsvE1jaYswABSdMKEo4bpfE4NHPDe1jrmZsSvGkJmkwJYtKyQZdnT2rRssPdqJgxhGqfsyA1gAc3Mvcaz8",
  "key34": "2PGHt2BGJRH2eJzvqXu1fqZZSLLJYmKsq7MzfUZTGzh5R9K6w92WNC8f7fSvvoNn9zAVLSSrWhUsH1hnTB86YULd",
  "key35": "41jrHKmhtZB2c452e6pjwzXLdDn4p3N8muvZzwT4qProQCMF1vTmuiHjwAAdPGFqPiyFuJhXwW6ey4XPGwzJ3DAz",
  "key36": "B4JgxQkfo3JYUX83nHNhK6Xv2ec94cQNiLEi4qRYVgJ8CJb2MwGCWSVLMaa9ugxFjNbVSJRRsYXMnun9kUog7Kd",
  "key37": "4gcSbCTEcvd6SDxYLiGAgquxNtVM4XaMY2yVvJyyT48es2PqPct4Z5aHqrdw6PUWcvYQkN2xNPbWCtEojebKVabg",
  "key38": "4qFY1PqQWRzTcowm8dgiXzhvVkiaARMbBVxWkgt6azYhpq5B5UsSi1dZkRRj5q6RFvHx97e7Eo5QwkVuV8DkkyfT",
  "key39": "3erRPwqN8pSn8DxCKxZsHKTnbYxgfypkWaM2YvkKBBnQ7z2t81B7WDNXSxrQieNQxfzR8wDEB35mM1XUADGBgBRK",
  "key40": "id7CJzfnhhvwbs3jjFzTkzCZqJRaT4n6KKUnozGyGHFTChmcVPQxtYr4sHhPHseFyKeyALKRURsFrFTAbXD6nxt",
  "key41": "3CJ2p4xwPXdFq1qH7zQCndhYCexhoPkMd6AGT3YEBkJtBy4AeyTA4UvYVvvsrX6AA4VxNHhBKBaWu4ZYgxuqqorB"
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
