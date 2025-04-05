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
    "2oEBVKBxJgW5JQerHhvhqiBoqmYmHbw8hYXTjx4itPjB8rYzALXWX5mZud7DhYtgn8Ttoy5uidatYNGm1PUo9zKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXHaohMUGoEeqgopJ4Ph2T2gXMVtk9agvHuS18m4Z6mDVHHaMz5EeVrt1Fd8ADVy7SqixvpY9LTPWLvaLXXepB3",
  "key1": "5GSokH6GA7JSJhrJMrQHNZ6uj2aRa9QqSLsaTRDqBPPCYqDo3AaBosauq4YJvdcHpPajcFbbaKD8qszYQ3RFWtHc",
  "key2": "67Adh7cTewYb9FFYMcZ22nGCCxrXgBLzyWu5cawxqD5eoTHdCbQ8thrFyWxVh5tuuWfUBdfWCoFJsEuwLakENee5",
  "key3": "46rK44tzrufqzyGKx8Rbds6fZf922kH8nBTcLrnP1rpa5M2pJTkAnmnFf33spgbj7nZ7PWCvQQQEFbGHT1XaTp8N",
  "key4": "5eobGQA6RCcXD2fWAyhzt7TsLxPY7vew6HdCLpPbnW5o5JM5VzmrvDaiGyZtDKSZFBJeuYsPRyKEBNTqhj8hqsz",
  "key5": "2z1mo5Dzipp5VJYwXV5SjUmT8VcvhH4kCgsrvocsq8Y8zvTXsFc5xRRmyhopokyyy5P2LnJa2uypk3DjpTCKJ4Ao",
  "key6": "5vCpmTH8yNooUCL7WghnYEzLiTi8YHViSDnX4ti6M8RAwv2gQmin1R1Luk8E5c6qCV5JWctRgTFPXjYpNpF6Mq6P",
  "key7": "433n6fj6yZ6QPncH5TVHrTcQuav5gnEb6P7su5xzfjtW11mRx729YtGS2fRUUptWvDL2aTnpbFMJ7CvL8He73P8H",
  "key8": "2RmXEc1G5Z2QtzmHgsXSjAzpiLsNL5gEjBhN8DS8Z7NbNDzrp9d8haYdrTCnRdWndPNj8sDRjZDDa9j54ZxsYpYy",
  "key9": "57eFdoU2kf9CuChAMW4GKBf5CWBQNDh4sk2vPCyvc2n1Lgjjz1LxHtWWz8zVR4RfDQHGGKQRPxtdeTCfYmWV6DvQ",
  "key10": "4uYWBmz2S2YSKrsDGbg5y6AXpZWkRpoZho9rP9mxK48DTWaVJ4EbomhADmDvQa5Wr5JSJk62skqT8RybBns14y5Q",
  "key11": "j7SqgxaGLorgVigWmTC9B6f8c1VhP7GqNjUpFTrSeX6dbALNoJmyE9oKY3y1LfEZQ9sJMb5kMv581vjNXkPHhHX",
  "key12": "49kEWuzx61qNYtQ9eu5g2yQjdbBgejPgLu1PbS6V2d4Gorsk51rUnrK2r5sBVZ8NbBeDvczwYmC9vyGkSHjVqsSK",
  "key13": "3Aniusw55STmE9CogatZ2ABPhTNp2SiAgxPr4HmWKtjgoyGSLZrAhHqtd3vjkmeEgaZPbxJJ7tWR5Xq9aJLwDRhL",
  "key14": "2xcuDLzXeCw6QSaasEJPQGibnuoTbi2JZQrTUVatkVidtXxjpqHSjZAGVqb2FzJxQo1v4Ged3166LZZRn41qkoAu",
  "key15": "3XrcRq3pwvfCWo45AKDgF7dW8FMPrCvrA9BSUUMyn7jxXoZ2jtjYx4R2gxWH4ZoboeJz2V7xrLLHk2RniX3tvPAX",
  "key16": "4eXDhRowoE1CM7MUXB8TmZWADJzc6xjVVV6y6ZFh9fubuuCfLYWduTYk6AZ7Hqsa3VmfCCPA8VFsU3Chy8KrHR4o",
  "key17": "55FhXdVdJcKnhv7ybQX3oEPwQwMgPVpRtsSdPa5mAvTiV6zQfD41Fe74caCjSzgUDKACsns5H5dTLoEbQYjx9QKP",
  "key18": "3cFh4Mm76pFcfcCMq7FwBfjCSdpjqQozNttaMrmH8xVNauzt9uqaNnmyY7sJWxDnVECvyJFWpohSngsxDQB1xKgd",
  "key19": "463Jdad8JbGSYEwGRCCNmYNuFSDiU4FhtZZRWxjdB2LujMV7Nq2cZeM62CN5dME81NuRXVTu6joRF2aJUseFg5Hi",
  "key20": "3H7EoXm7JtC8E6jx8uQHZZjvb9ePZY3upXRLuEo1kAiWjXHoZfQhTTsh2Q5FddNcwCi5535pAu9miGWP7eMaQCou",
  "key21": "3AvMJxNcxHHRA7CiAEDP898AEQkW4ayPhR9JRg5WP8EaJSD9RSDysG9iv13hgT2bTeFK8VNPifqtRvgNtWHVvLDK",
  "key22": "4A4qYmswYLfyoRDKbZ5WusgTPx8fcgMFbdcxTmJCd6CDdanyZDRMJmJm78ZbH1tenougJ1zU693MSUsBPVKu1QLd",
  "key23": "3VhzPfxXiqqhev7fBzZC3wxmda6zNBazyoKA2sV1vD4HxRiXd2XFU1eEbVBYXT2fTaruMNDVD2xkhMLLJtCQPgZ1",
  "key24": "5LVLzzHRqPMFzLCW5NRZDYiyEfb2XxzxdZjLSTms5digknN32fMR37T8heSkfYrJLwd57R7rrRteEZNoEBzJtor4",
  "key25": "R5RakfJmBJMFeEPG86FmFi3ZzypRqsiXFoAydkPqWJnte6DxfT7XARiCuCaRdXFz8Bsr6wds5Q63U3f3XyGpjaq",
  "key26": "2gYAdyXtUQK55Doa3w8q6UY4Xy1kpQscZBajKLusf6EzXknpz758eu6jLHH6fCwh1KC1whgtMqiXvTUsKwNX3QH4",
  "key27": "2Kmf83yUznkXgdnp4EFRzirLjT27ZPeK2RGCvqBq79i8Zhq4v6WmR78i4jNWD2n24KQr26i2SSR6uC91ZJbAxT16",
  "key28": "62ARZxSuiXWzqmz3nFugXbrG1tebZ4priee2NH7aGDEympScNssAfFASmGj5oYafDAkUZ5vZQP2sbVtzooT8vGUo",
  "key29": "4SmbwtzD4N3SLXFn6vEZGUgtyHn5GCpfPdNUHpYP3CqVYxJsN8joXohqeoXKBUjGKFA98Fuy8xxCJ6MobAmB5sSe",
  "key30": "RBkWvTWQCkYUpgP1p2Sy2BC2SjT34VuXoXPfEzx6o2adyiDuKFeeUkceHv6vQ8Ncy53iSQFBXRQHKuULHu9nsjo",
  "key31": "4uxkNcLeokToUWkj7zzer99mTVki7iZYSAQXitVG265w8ZQLWi5Mx12Wn4NdaaqNZXdsXQMKX63ZpEEsProXmEcT",
  "key32": "2Jp7qBJjhzn57KCwGDL2DcJNLMCAGVRTTb9hWC9jfXkLRtdPYa7fuTepLWnjNgxARJWUZAFXp21pB5aPhuhcDBJr",
  "key33": "3t8rSGoZALHqcDJSgdR7252QEKDktjftqzCiHZFJKzQhqNB2uLz91XTup48ipb9BjLxN5Vss7oTysKq5nw7wD7RP",
  "key34": "5xosHS8gpvxacRuZ2r4fcsnoXkzfsPM2YMmAGwdKhwFXpmTonxtp3VnFmwxytn6bkWUKExfDkrWkLKB7W2KcieyM",
  "key35": "59bYnsq9gWYDttrFGqqFjtWJjazVKHFFQmG878PnQxcQo4rEPgCNrTaWQw9x4VocsrEYc3jDbJNgrvPbtT1Crs8a",
  "key36": "32T1MXW9Fqwyo4pp58Qe3BxtaV4YQohPhfSTgK4RPQimZ7aX3Sc7rcV1iDYK2yjijMeTbgCN2vjqTie1qJtNmxKH",
  "key37": "2fWQ6B1ypdMs2Pix4x7XxpnwSwRtmmTFo3dEG3hjMWDbRNwyRXDxt8GdjZYZJbeGXziergCsWPAUTFLDBuink74V",
  "key38": "53eRw37AWUSegGWFmioZDRg5GmjLuDmp7i7yKbsYYYTnC53iVDv1yDehig6tDqHjNqMgj7BHoWy7qacCzV9ciHk",
  "key39": "YxheDSb4FC8SppNpxYfGnVxMpgbaB4xG3aPKTG85ANLxmvESYUdwhWmdST2bKk1D8t5MjWR1supuiEMY6BLV7Ai",
  "key40": "zC3PEzgxxVxfnfVB2mhR1tuj1MhAiJsj1YihA1Mdn5JG5bWrnfcP3L2KBG4hmWKqxq4saGmcsWvUGVsYbFs54zL",
  "key41": "ajXXnbRNVumkTSrPR1Sb2FN8AEjGXSsBcVV6UkYEukzLmVQwP2hgWxkZiiyKvxLwfBtn1kGWhH4JmxdqKyG7Cxj",
  "key42": "4b9GeuAy3sc9bL95P33WhEobPomF9oBSeNQ8tWyW3dm7JTutcRfqE16oreEY6N5YxfApsBg8krLep8jmh2sEZgXd",
  "key43": "3RgAiFNBNiqMy36vVaRTN2scNDAzQV1Y1fHQRL9QJqNfMNER7nPPNM8DUbnvhJkkroPUBxEQu69zpKiAhj2NG9NM",
  "key44": "3yWZG7KWvscwyhigzHACgf1EdLYrxatsLjzEmigUXgqydQRhgMKfNbo3Gt5xCPxCo1CGFV25zRZ3HXX2GC421xT4",
  "key45": "5F4yngpLQZob6Vyqt3v9QgSFcZ5eKYjKsemJz8GhSNGGaSEpHM1ndRQawE6pEB2pM7W3bkQ9JXAiGBG6248xF93G",
  "key46": "5fBLivVuZ4Hri2fgtBJFH6gqAJDhcYpv4izY4va7DSMZe6t9MGZaE7QZeHaQjP6RqpatXer1r5GvTSahJK6z1L28",
  "key47": "2ufhqZwrNzejuKeSwus3By3AYBww9SyUXrEx7JPEEaYLuXx9Lgb4xmWSQj8EigV7KMGuTCUeAix7L2MGBer21uBv",
  "key48": "FuzzuLsGUVAuFEkxuLb1scKp2NVfnaPiapdqg1Vv3WSyyDvZhw58eEumdwXtTAwgpLznE2n6okcLnSTJ5gurKBm",
  "key49": "3wEwh5ywhQANpnovCy9KLQTDQsRt2QPoTYVGWFr6rRvjcGt6jEqzWWAfr6mfD87rCmSHgAqapc9FGg2k5Nboqgcv"
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
