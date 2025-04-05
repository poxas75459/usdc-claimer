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
    "3aBwxUrE9gGHAAqnvXVZwYDpgq9yTqM5c3yH8hvU3xknfAFFBQHxnZLHgNKYnNjg2i5odeVhjqXecAGTycczpSJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YRDP3ELPfuTMheB1aDRyFgYw1PvEQ2vQc4FdR9UzExYYZ8qx4Ayj57WAXkNB698bUiiq4yCAyQsX7E6rbZFUXMT",
  "key1": "XvB52Qm1Ad8KXoA2UQiCKvY8dZdErEguqGNmDtharEV5a3xMBBo1hB4S7AD3hwKbmr8VhWbgnTNtuYNgcTMAZeZ",
  "key2": "2nepvWDS39D31HVZCksJsDaY1bwCbcyn2fv1Y24Hxjquy1bNVCWyJqTm2CbPHqVHkyBxcwt4DNsrMRRA7SHfUVKo",
  "key3": "5Tx9cf3TKeAvbd5SAs8t3qgH5mJibLQdYfoD78Za9dML5GVthH2dTzKx4TaofhZ6o6Lj9KFVyAYszpNFQRjaQeZn",
  "key4": "3P5PoYiZzCm5UBYHPBn9vbKTMGTYRq3VhcJoPCvWQEPvYGEJeWLi2BF9AYdiy8nq2MkVPLJrmMxZ22jk9Q1prdBV",
  "key5": "2wVBkG1E2e1HWBdz8wdAeo1jfuXFCJNssZvsSC2G6YcuC6LahYkTgRwgJR92fmtkAYgGKVowSgw7EwSp1pb1hLwf",
  "key6": "2Zn1XA6AKeZcR8qo6QdRj3eML8R4F9uHT9hC1mAZggS5Sx6guVbSNGXo2yxvUWirmPtrzBzXu9pFDJkLqM7Qn8dP",
  "key7": "25KWiL1K2dUoWKXuydevdyo5k9oPMMGiNyauEqHdK8PaKNA66QbpbP6BFxn5J9WboU3vu8o2tCU8b2T1jhL4LAdp",
  "key8": "5TWfY1AH551YWULENFcwWN9KAjnaNvnTzxZPBFRp2nXJneS74F1FJAzAJf1W8VsxPNf4oFpgNavWfNeS9a26T5bn",
  "key9": "2BhYEdJnbQfMoBNg7uefjYQkCM8brzU9eZaBMBt7EV6qcWg5opAzCnp9Sg7qjVsizPE9WJQ9g39BAUAUTbtPayFn",
  "key10": "4gXDixcvAW2gYq9fHYE6ZaNB9239PbBESVqFHJqGL2LvmagUYCibJimJHxq2QZ5o1UscrxN3xLu6XSKyVNh5zrzW",
  "key11": "2EWLQb53i5PQbHMTYhzz5AecUv2RZDvfWYnKeV2eCdJCjQyhbrhXui6R9devWKqj1g21Et3QAjx3sUNZvdb8gLTs",
  "key12": "3D4Uf9NdVcNcLow2fexqJnv1wv9HYppj6zdf9Z4fEbzCr5MCDSvxzVqs15Aq2u4iDJ1S5AW26QN3c8EwaNbigf5c",
  "key13": "4sPJHzR49Gfx7yDpZsf7CJGhYABdvDCJyrtPS4LadG4895sTRh4RTbXvhzhrBdwda25EQQQbgdWJzcajQrnEdmp4",
  "key14": "yM42vwe5yrYb42P2qXMBchHJ14kkX2ofMZdy5aGQXgKKN9cpkC9CDYWaAgb2FYPspSiCamKzG2FDSYrNwdTzpPN",
  "key15": "2KogFJGzTSBignqKTVnYVLh74tMNGqUsZEmzwmacn8NsD3PpQYwJ4KNA5LC8kH7NXmoNqnB71cpU1a2DmCb38pFX",
  "key16": "2RVA1h5wXZdabG3ytLY3LmXwXc7nCxnPAMa6pJAtDVTZCZeWU6GEai9g4E9CGnBnEvzkxoFhF4iKsbFjfZ6RmVf9",
  "key17": "5YcbqDUVqCrgEjSP9Y6uogoj3hkFdKG4NuAnuRmmxhscTiYL6MQgQoHytiXNptQmwoXyav9sVQgfZEZu5c6wfLcM",
  "key18": "32Y1f9nBfeeErYeSknn7Zj2x15kAujMjewk1jHqZdCwjVRUPR4uwXUjP1JfnJwRCEj9F5x5BkLT8kx5jZhXMM178",
  "key19": "2qWbYSSnCkC392SXawoq2dGuduFXcYhg4tGdSgCVTvaymEhSBDbFnA4XVDwyryktT8y1m7gJJ1gq6CQZKFcQfJvt",
  "key20": "2mRCjDCvC1XFvqgGccEKNCDru6DnNM3UNBFSAM7JuzMCghZP6WXbzSkfBiHsf2MwdwQzKgCRRAnXcFGy3ETFsPbc",
  "key21": "4XiUt2FnbKL2vKs1KjzApcGfc7x8GGXM94JPnVZtsPf2TQ1X1VRHtzhTr6mLLTKGgMWPns7gyzA5ddURfvKzumG6",
  "key22": "3aCyqkmfqDewnNReQFb41JjYxB6hLXEWgdYBC67BcjgzWAcdJCAsxGir1gC5MvxarGqvznCUBjDzX1KhiSeJDtqB",
  "key23": "5na4tJ9GxfWt4u72YStfW4pGYGSudSQgPx9kpppYSgZZbjkXjPuYURLaPmH9bWJ182zYBsUw9p93J5MAFW542svQ",
  "key24": "TtmypcG9Pmd4AjvVK8ppYwkekzoFcfhJTWxBfXdCc2hCi8X9UPwBJENvXEPBrDpvweVTxeZ1P19kr1MzFYDviMD",
  "key25": "5ZV4CNPxNd3DSrGaZuaceGwGoiVu8h4VMf8BHDTu4cDJpWGYXepnLjzMZ1VSsJKGdHnG5yxKBx7qJ2igHvfNC2y6",
  "key26": "s4oTv4nmxxd5GfKqV2rY1FaTxJXuHqv6URQAQFKcaV2t36EXCjiCnB26jcNzVr54BP8jBynQpN2zqamWGScuqt6",
  "key27": "3mr4LGgrCbhkGWZxjUhGCwAtZrjjJfSteCrn6SvwLVcdhkZpHchpoLie6GiDmnZ6RcRHjZyjFSBWhcnHvm5engds",
  "key28": "uvbrVmA756GbJyhuPzd8C2oTyWeyaiAqgvfpZ2AgMPbThMR8YvwUmR7Ttm569wVWYz6djkmw68KXwnhuwrP8Nnd",
  "key29": "2RydDbiZq6pvdx4PATdQkLwP5bh6taZTrJsbm1NTFAXQ1PAdjD3FTs4mjgtYF88oYa8BsfxuJcDxN6T6TFfEqN8q",
  "key30": "oUf7oh6MoYDRwf2jrVjve4cvpoxgevAmfHECcqZrSzSo1RoF9BpymECA5w3MNyU6TLhTZYM5ASaE7jPKEZEB8Ux",
  "key31": "5TQZvpvZwWt5h67Nh3XvHN3A1xh85TRqRKEHvrViafso5458VxfJZRiJvMZAspjBY7aQpqaKNHmuvW62x2BsbydH",
  "key32": "3RXmd6yTGTBk7kQwdgoB5diw6XMwL2id7NwP2Wja4WKmXpPyGKcj6jpajDhm28A1Br8BZa1QysgYP9QxoAJxVWc",
  "key33": "HYYUj4fjY3XPxkPvhqqardTnUrQR8JPBhhA51wvxc4NL1CS9s7h1nQCNQSHJDHqmp3ypotvjemZedETTYFZueh8",
  "key34": "4BcmUfRQfDxwmVV2u5tBwzEGEqTFXjwvxsmwYwHJHFCfLZxzczuBtPwByEtTPj1eSMhdCx8p92WkRgYQrJavWYNa",
  "key35": "32fjaeZF3qSosePTxAMjDppbHqVNCS2DZDLV6DKwu4hsaiL9GycYaUSZJk3GXkC6E4RiPGkuPVoJHr6V9qopvK6N",
  "key36": "mE5ZrAgy5RtkGaQug3awaFVKoXEPkuHPz5fQsyDUep3ZyBRggN25RGogTsbaQsvAbMYsxKRKqtN7ESfCnkqKH83",
  "key37": "5ZJmyA7dGJR2AKM71iiLtprLAr3Z5ZP8BtY88q3112JApMCEh7MbLGrNHB5R1FHyPgRTBgYyF8bHbx6qZLrYRciW",
  "key38": "5dKVGUFrr7SUGDgvmQ7Ryu365GeaLpaCqnf8Mzv8pQLXitLW77aX98e65cbufrciV4gaUoeXYm1RXZ53WKMfKaMt",
  "key39": "36QPnvy8NoWcq8icRrT4HH8p9HUn8vw2V8zMVxC2FkvVpj9swY1gE41qffsVFeawKNNiJcnBSL5WELdXqQf4Kvf3",
  "key40": "3T5jfXFiqR4Yq4fExaR7CJkUVdk9PgRu4tp1iUmJUzAoinixd1U2nDZ6wRLRJVQ8HGCAKcdtTZxJWefKiaaJsqyf",
  "key41": "3Zr3NTBMvDMkf43EnL2YbtMXApRyy7N3nmnrfoZd8SuWhM5oZjhD31ZGafy1AoPVjjwNoJP1C85ifzjut9aG3C5h",
  "key42": "2qDak3ighzkhLuCN7RdHVyiXuBsZH3pzQuTpF9dwzhX1ksYgZkUK4WyrggdpthFmfcQ2QbMYKcVYijRS8MgWpyA6",
  "key43": "3gADcT4XNT2BW1qasqCDmc81LckeyfuAjAMFrduo32NgAXqRKL5SevfZZzLdMXiLxS2Qu77q8igTTTMzQBFHEg4m",
  "key44": "2BNVLbBLiCi3Urj4csbcengH26KScELtFfHGUJCfjYFFnGQE6VDYfA8bjNR1JoNfsfEsrK83KfjL9XYGcxPPiPDP",
  "key45": "5aVdXQPw4AamMBaNG9gjQgFdTs2Nxtc6y6fAFJAkrAcf27tTxVuR1FtNMGeu28nvTfpqsp2kjGVwHbsdLA1sr7ZL"
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
