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
    "5acPfAkSyBiLFgcEvr9Kv9KTmYmw87TwKj2dKTGRBURF92dgZFwZk91Hyao71fCrKv4JdkVyFezZ5fGJm8rAW2VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRgtSBhmoZnbSqy7zTfdDjx9fH2D4mVivtQmiZdyGwTbCWsBKSveaT9yWAkkbtDdQKtnYY5iW3kwEDGzxzAnUpA",
  "key1": "Dan79PFpV5h5tb5vgqjwqtsoZabXxTDueegurowiNeJeKWEHktxcszvw2jULSY5fzKj9dWar6jrv42muzLU5TiF",
  "key2": "2nns5DFySWmwaHnr8XbAtbBAmDgV72yuFwVDPsBnKF8wtwLiKk31f4tec6LhoXpQAADi2MX4PXGnXQLZPriTFfJX",
  "key3": "32NYFTzrMG6z3iw7MaU5gyRczbaX1JV2Tn6aBQsaRwTyFLBGaYPbz6kcXXkPZT4cgCRPYRCYMvR8cS8bW36c41Lo",
  "key4": "5S4ni9MZ7Um4MBpajsn74LUGoDJCXEEhaYn464rTbrGAK2nDFukCENowyPEkVAH6RgiMiTTnfAf7gD4AnRkfNrKW",
  "key5": "5AAX2357PhePgVBU2eVNPk2zjwgGaVx97G3LDW4vSssaWiqaJyDkVW3ZnKWwp6vqHE44ZdTo4Hr22WLp9eRbuk2i",
  "key6": "4d3UXmYr2bGYeUAsk1YGmz3QK9MYc9piz7FDsYVQRVruguUv5oRT2zVH8u3EYPjpb2qWsCRn2jrwjsBrkWfoyhZ3",
  "key7": "31nw1YLBWAbAoJj9iGA55nQppYxuteJhxp3nqiZCaWaAhFPxQD2SJ6JmDGS8Dm9R7Q92GaMbSKQr97AeTdT1vkDH",
  "key8": "5F1ty8gyD6qVMrp2kakuntFT9CtPseDugDMdbYwEeSsQR3HLA8T8jcxoKVEYVmjPnabhQY35D7o652EEdPCrcbai",
  "key9": "3RXBre6QDswwNbizM2M7BuJCaPSRSMc9AZpC8R2fBM42CQGqqKqhvRiXjnhq1W1TTpwRuvmmDJzKZfuVBDCqrY4m",
  "key10": "QLvSyGS58VbLyewVy8BJSjtUnrsy43kq4AtxTrUF1AL1PArNFMDmomYxNXvUwoaJsux5yTesc74Qw5tHfuUbBbb",
  "key11": "sMKu8pMBehAyXWNKsF8h1HMLhqXGS7MABoky6Gmds5Bnh9kF7Gm98YPEXtpykR1GSjscoTw1Q4oabgGGnFfZRLo",
  "key12": "3RgctpnatbLBPMzwwGJ3ffjTfBVCgyACe1Cs9PLoqd8i3zaSjNKic4Lt4HhtXTr72KJJ9tMKSi2pGjzbC8rX5nEv",
  "key13": "55Jbf5uqzkPfW5GSWgtEwUtDXVbWYHZsNKsLmqakig1VLsEgxaDugXDqcVMaCNjqUDb88XkSE6QCKNXCVfdgkZHA",
  "key14": "3mpNAjNDFZqvSv3mfH3q2DGLM7wSUmaSW7pKTdLCEU34UMt2npvnDtQcykMD2imuPchRDcwTWSS8Q3pwR4jqaM2S",
  "key15": "VWDisH1rRkn3eRYmCJ43HAiVboYgrCFW3fJLdFafxJvjpSAWk2Z3HMK9V3y5JNXdRxWUwcbGtrhtHR6YrazGJJL",
  "key16": "2fSuoViSf4VQ8bENe69uXvHuS255Cj1mkf56Xgm8J36SfuxkgRgR8BsvZw9ptk3DA99bNs5PdJsMTqsNvsVpWWag",
  "key17": "4XaZrHHoNMdnwGq2kZa7eB8Rig5UYhy1BdYe9C13jHokCjFcVGdwZc3YhJzQYpAZ5ihJHayjz5ai5d7NWW3kzDmt",
  "key18": "4BPHGt87U8pxWqrPtTAuFV6cgwWVRTjrRCWkZLVzUfYwiF8VjHh8ehqncLbFMPAzqZ4ja1NjY3AhcgNDVYFhFys8",
  "key19": "4gZkcQYNJHBCRLYrSSPKGmEdo1BpmLyUz4cZP1bnT5aFmvokZqVBPBfhEkDizNVfRku6nyQqYBAy3ne8D1C2mn11",
  "key20": "2ch6F2X9CpX5yddT4E6RXKj1eUDfudeynQ9FKqHQKF3RpFAGsSjC1aoah5pSmQ9F9PWpJD56TTyZEKv3fsLhCTe3",
  "key21": "4Y3QdTeejGoRutuXyfGrjycP6u3atJxaXJ7efrLiPUWTAkURsLpCBoPa6csdQeoBzG6xAvw6z7KYdV4g654XCGJf",
  "key22": "3HPn59tLBE7rypHpjkpeCAwfh5f7CCeLgSMBppV153pfGNKCYBQhcBx8MAgGY2e1R6QvgNxxiZw2RNL5usGcJryR",
  "key23": "56kPANYmZ2TX4duyQP5QXh3c2Sff2x231gzcvR2zUGWCWuULbS2VMdEP767NjgS8sUAHA2jnTtAZLbHL5eREvrzo",
  "key24": "4wWZrXDTVsdxL34pcKPifExpz5tUgrz5KWkEkdvRVxYFq682Wcg213AFQ3MEVAeB2K7m7aAHgP3UkYECQhMyw3wt",
  "key25": "2zAgZqxCzGa6h7uBgZoTgiXDMA9kcj9RVUHjDRHHcVE6PJRTWfys1uFebgAaLoJxBRYoHFfu5jmbb4EW2ohnYQdS",
  "key26": "4udTkNgVA5BrFjbZDPRY1rG8pPpfWhXqUwqd3RbdFEDaQGgtijnbr4Yd3kxy8L4LH7Ux15WvujgdAZoQXDgFHG4o",
  "key27": "5PqomUpgkVdeVCLd3M8CrMZYAJCug1En8RcpP5XWngkvV2nc4z7JjVdRcRTbiywBdYvYtyoYtqAMm7vaRf7tMPxk",
  "key28": "su4wqYcPkHzVCrP1har9Pek7Czz3Mr3GNoSPXQX7zz6Yqd2vwsW8uT7Pxbpsec66X6damaR2uXano7a44Fg8Qih",
  "key29": "28rHqXFxGLTD7Si6NdH8EPa3ND4Ta15qGPATiQCHZG7NNDx1bdY5qt6niedq3PQ5btWsnBnyBiJpTGknn2dK8uYr",
  "key30": "5wkS6MtY7trbknoNGeescvhjJSF7e2uvaa7RKGWUrmSAgcPpKdyWMjje4qd6d6TgGaj1NyvhvPxKz3c6cTrzYu1Q",
  "key31": "4WPhq1Se7uwUtvcua7Svs3QU5mCccdwPHECfk2Jdk3snDW1w5REyM3mZB1GV8KnTR5wPoTW1i3dqQVBKj6U9pnHj",
  "key32": "56J3cyNNaRHo36Pps7E7YBrWwfvaoGQV8Btk5DZYonRWifAhpSjTVJZRQY2Hcpx6VUMCbusV9SMBVbJpgz3RgCJU",
  "key33": "3RQZ8tBdK3rdUWiabJ7P6BsYWuF6J4MCQddHeHQNaLyZwqVkf8ZTTosWeMXTv7b4cD5u1Mdq7kXUNoSn9M7D7WqA",
  "key34": "3Pk7Kvm3TKzVzCaPSgPbYUrYsHD9EcDbXb3e8tW1oZ3iA45wkrSSdyoADVnYvjq1mBUCoE9uxEzVwRq2Ns8qtrie",
  "key35": "63QoJk38viNhaMM3Az5GoRCi6Y1oxtLL3UGepP7Gf2UJUpeU9wvxZgd6RcssbJgPEyrusuGMB6KDesbrz9aTS6jK",
  "key36": "ChFWDy59yhmQENJvJhFp4MMNDdTwDYdX81rricGjzvt2QqU4pg2BBH5yXrT12TT2sQK95ku7smWye99yrKBH9ft",
  "key37": "46r55CJpzk8NMVRP88pEE4xvVQ1RpzzarEcidQWfN1Ks6cvQLQW8nJzfV8xvRsSevwtJgBfEXnfn2sex8N4UeovJ",
  "key38": "34YFupZ9JYmBuhvCZ1ZCSHPUsWhLurvaX7QG1nRWswEvfFQ6QNNuiXTXbj6AhnE6e2Mh5TcarfirPjBnxcfdLUj1",
  "key39": "2ifxMupd9gyMBstiwWSZ14eoKsyStn7CRwPuPnwdBHzX3cJsELZKTKHxnUya96NJyBpNUwUhqqCZiqxfSUuWbHER",
  "key40": "a2FPiim5XPbFdTVGvtPyHZh8SEhicXiCB7uVT8jywpwRJwgHcxnLXaw832gwggj9Yz78FwwbnRkJ4NrDEYw7STn",
  "key41": "41e8fMYK34qqGGeDFGVoBfcxe8pNNmgTry6gL5GE64V98S6igoiw63W6CGpabNsLzzuRD5vw7Xic7dxHusKFt84Z",
  "key42": "RsqiPMXHvpbm6QgmPyxHnDNMGY5zvS8XW4eYGTzAXeLf2kq3KqfFyrbaCthbu4DTT7iN61gzrhK4d7aMa4pEihj",
  "key43": "63mvfV78UmrscWLEixLfR6KHtroC8rgEdcgf2w3kXqhd3sHjaR9VDXqh3955iboH6HZoaQmh3Eu4rBpLAq2c5ZPP",
  "key44": "2e8GaSXZysKdJvHMtec1yAB8CMNL1EdZNLoBByHZqCWf4VkFzziqHrcA9BjumqkFUXe55LuWkRV8mzykTCCtCppf",
  "key45": "2x6TFizX21p71QnAyuHKeotin6gWKeVKCRFXF6M8pbU3gDQJk5pYwqdbkRmzZH3XbsYvmb7n7XxNKw6bQkdCzvYi",
  "key46": "5D9JTeR2CP8xNcXXjyrseaAd9uGnXkyn5oh8z6rMc4fPADKkaNQ5MqyEK7bu7VktznRiAB5yF8wBZkHKNx11NDrT",
  "key47": "5pQ1Q18DHzNJj3tWMF9EX48u2fGAgFE7jvHewqabDNmf5TfC4TUJifLs6HBo4qejdX1dvwz2eub2rP8E7LxPB5hk",
  "key48": "2dt4Skwxh5iFEdyvCNCYs37mVRFV6bzyVpYuGtoMUWZrqvPoyCnHU5j1vfuQU4Nu9t9XPxh96Yo6W4XfodrZyjDs",
  "key49": "ZJfcVGm3SdqG38WmfXyx3jAHiTgyzhLWUHMhi8wNCxGC7JRuiHXrQgYN4n8KBTzj2VyYQ1p3ymrd1J2c9qRwjkQ"
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
