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
    "5NfRv7Mr7tLzFRP2CvHfy6DKbxdvBRkB3jxVT4epPZ7bwRUVdeNqDeYFBBBvoX4ALbYfD856LuAmnH2EgdZoWZt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVouURVpeQwYbUSMJsFx7eWmejMbibGEDVx4tHj88TJBDdfYo1MkxuWucjqaxVqxiKW5JjLenmFj32y6Vm6eEEU",
  "key1": "28AziLSkKNEJg3Kr3gKSDntQKgEiJgdLDt7WxUS2uF5ujbLMqi3iPCApPoFGftbHgmxvK41QAcWXhofK3T8QuxYi",
  "key2": "4U75nrFe2mi1FZJYJmeQagZw19h6CEMHD4wgrH586wwbbX9xDfjDAodVMHJb7P7Wr1KHr8sJ6n9Mpb3qR83XovT4",
  "key3": "586J3x9RhKPuPum4ibLAoxTqLExfrWRYiTjKckS5nxBk2wcJc92pKy2YMEAjMJhGUZcnZnZxykGmkjLzP5rAiiLU",
  "key4": "2LupUkky76NnLwPWe5mJfwL8VaMpEmnJ8u5cSpuzUGXnDPudrKzcXPDAwsVc9MVyQytADDPE2vp2XLRuv39FUhyT",
  "key5": "33jg8fErD2PK5hmi3Vr8Na2MSDuvVdSwfh36cKvUUngDaxfWnv92sDWYTz1HWP8bnJq2ioe9XTqDDsPxPKaPqkLf",
  "key6": "2TJ4wrAHNYVSGCzykrSNuTQgk5mLXTJ1rwyNec1LSHChsf6H5g19CXYGti5q2uYLL2vXePcwBhTggHyxzaUNbjQz",
  "key7": "33ys6mBSVPhivyo94kt3TpHRzNJnWQoh1ykmF31QxwBjCKkZKMmWMmY3QSKLNxmTzXvWXD8SVGPPA1ey3tZViory",
  "key8": "2uaenmkh3dPHm2PpkX22DcZJYAgSnKmGEyHbb1KaQrZii4beHzXDCF3X7A3djGipfReFWu88PHtwTJ9wzAGsYpdK",
  "key9": "kZEaA7gxR7qKQxpqG59jgfwL7DkyK2HFdhyWB9N1LgPkKynv8wUuCCHRytgVpSCZ7CGUkk6DDgamqQXrJCUV6h8",
  "key10": "4hVknPguY7A5PSMZtaXr3cUnFvpM5WkiMhNVEasPUh7imN4mXs7FFmcLNzgtfSpwLGUfT5XcZ3B4X3U1589gLD28",
  "key11": "2MjknNdw8Sb5KQ4Z2gYj257XmQ1mAhMJeD4Myn77BuEr1gBoqH4ECad5gwzj7LPpk5BjbvAeePe41oMnUJxXwE5J",
  "key12": "2ZaiMj937NyxFXwuFnNXowNcw7Y4g6xr9DzwSQ4sbmyBAfJLLDNgTg4WnjgqXkKgssnsxq8Nx5zff7Nk326wba1e",
  "key13": "2xi6nU3f3JNFZfM44FNsJfwb1tXLLQSjvJ59inGurGMokSJtmHAni3oWi3NVxfVW4QReCu8wQbriatvRx7azFHmP",
  "key14": "2aU2vaJXuWLrnEFa7N1ngn2rk8JxyN1xPM22LFXdcc32dmGqNnu5szRLfnG25UmFt2zxdkfki7E4x4c1AynhedHM",
  "key15": "2QbpDZ9DChVFBBmNzkRfKr6CjmrL7zsFVTCAG3SSAMyUKFJ9BfF43YXEacUgAigXA4wE1EBedufB6uhUowqXVrku",
  "key16": "5BUKFBMuvDgRYH31BTQbzrLfveqrUjDXTS6i4sextxyFAmSktWWjkoBMZp7f5C74QfdFczRvQTGLhfoFKYFZrVsq",
  "key17": "4m86hXMnMgmVc8YwzXFaW61cV5EJ4anyMvMsXA1v617cgPxaz4drT8JB69cfPpKuP8cZMnj7Av5RvV6Y9i82Z4fp",
  "key18": "3jj8vdWpC3JUeAuyN29thNDeCTy13q3QxRfG3vDZJrrrH72tVaqmzi2FwuxCdnJVPwsSaaMDqpAdaAo8xwb3Jnw1",
  "key19": "Xrqa4GNAb1rRk9jSdULo2Jg2JDyq9hrYu5ftLC5PckfSo9FW4efnnLYFreKmBRhV5tYoLtmTfNWGbmu8je5Sx2S",
  "key20": "oMken2tWrzTQGY77nDkYhoD9u5bmmnpJ2DVTh6Sg3XBu5cuG4VEmDtCZ2xQtr4aGVBAhVanF2USEnX5wjmxvaJq",
  "key21": "NdTov8bJYjqcGHnmfURnywhsxj9o99nmUKqyt4vSLni2gU8cQvMVCTB2njubLPWtXhpod6WHGtWMZfKcNjuoAbf",
  "key22": "4iW1suXjDikVDvXkTn5dRKu56fb1EjB12dYJqwQaxjeAuAbgNgd4iAjwp6V1RGVnp3Mwt2wy8qJoUFvngz6sGBZW",
  "key23": "53ECfQk54JtHpMGdkUexP8C4wBaEcKh3XHLFgFHeeX7xu6d1J69thJScXh4BB5PUmd9T1Prn9fxsnDJyzd7Jp2oq",
  "key24": "5U4bni9sRDDXNmsxHijNAfqD2T8oJJhJn1T6kGXBKybiJS1LsheTz4wsv3HvvsouMg9EANbptxqUyGTDMmz8b99c",
  "key25": "5zZRDT3PKNtcVh4e34oS6ALaKbTV5HW3KfCtWyPdbu82TRw32rTpzXpiwwXbRLk1mne7urfy8mohQHXDpPVzMCVp",
  "key26": "5ZzGcsYCFou4ePDmshpqmFx3KMfpu1oY5TeUrJ8YaLuNPfoDdJAJATRWMVsdjBwxg2QcX5HUZ8yu6iqT6QiR9SV5",
  "key27": "4J1mCjQiMPjukUWuUarHFDzrtU6VqSjcBvxDB11jsMaDbtGVfq3eRcnWW2XoduGjoy5MJ6xC4EVeL8a4NF8L7Jrx",
  "key28": "24Kg88sv3GT1xvS7NetF2g1TGKTkDvJmxwEoTY5CZfcKyK3GhXqgxnmgLiNbmwNKZ2M24rs6uaVjHjYPmzweVHmS",
  "key29": "C8X8DWeJ3GMXKR39neQXYFWzKKmL5Mpd6xZiqg3sfH7kHuB8Bb8Rv7JPECxBXwMrqs6bps4FWszurAEyjiGn9tA",
  "key30": "3BPmGgQjmEjhQd5JQkixRC5cmfjxR2MHXE1PCLG6s8hFdbmSKcfB4i2LX8ArCg1HVUWcCzGYVKcgpsN7TYS799Jy",
  "key31": "667Ah7tSgVV45yn11Rdmk6jEka4HbCjyUhszNyu9DJJ54qvFgMMzh7AywLnGpFWj1BrWQ1pqDd7nmV8p1DqPkGBS",
  "key32": "4iJF5JQU3RqpATPXiaY2R5cMp9dePMjNZEzDG7BrVCkECCe3HHxbgine5hyR5JjXQWSdSoLsZBm6j9uRyFwJJZNj",
  "key33": "2LFhHvNAux3HLAqyDCTZzDb9NbzjSYQTJGi44usgJrUUmgwVfBHvyh2uSKs71GTVzT3WuYnQpewZMC7wcjFnYpQw",
  "key34": "2Vt1UHJQvhFpeHv95FgximZmtGY5wbGg6Y1j7LZ4EYTnTeHLc7RNH2FRsWEjifzHYYTm4pg4wZ7WcwxxYhDEiqSP",
  "key35": "5nN2FeTZnc9LwBJ2XH5BNhNuK4vkrFt5gP8UdU5Pqsktii8vJxAcRKGAD2gVngFJyJc2jYEYFxkDn53QkLbS1TxF",
  "key36": "5xUtnBZqgrNF1utiuR8C85cgF46QaAXcV4uNEqZd23SEJhJD8DxcxZmVd5V7kDWLeq856MNGSTxQ11AmCV6u81i8",
  "key37": "2dJD6wYf1XkkXTtueFyguoj5xdTxmPZFZwMfqoZBkS4T6iSGEYpTijCRh2HjESq4cwzXtxBjVyumyZSMcHc2AWrS",
  "key38": "knTLkwH8qe6meUyJVSRAUNiQRPPXPGVm3eh5aTbCNPRWb8avMBwdXoM8f3Yj51YoZsS69f2yhVJRAFhiBB66zvP",
  "key39": "5aiwpbEEQ5MuAbXSpyJDa6SDTsffd79Wh4t6YWpuwjPm3agvVdyrCs7vHZ3WEXeE1YyBtfRvb8CkCKTHmvG8Wsuw",
  "key40": "4dEAbZssbY77cpVoBHAfn15Hv8VuXvwwzBGjKBow16fA6S3HNFJy3PXwENgf8WW8McczoX4eUeJFospKYAhBdzqe",
  "key41": "4CnmKVUFiADoUysyYKnaGhM9LpgtaKXFY6sddhFQasG6iZ12bKbebn9mEnGkXTBAeBn3mWoYHaSid96u6MdhBhne",
  "key42": "4xnZusG9aZqFxmsxvgxar7YkTjWbqNk4b2bknet4cQtVM6VcAsuoFwT5XvmZirnfkDf7d3MBg7h21jQdW4jyeDFc",
  "key43": "ZyuzFHBcibQa8xZchC9fSiTYvTgN8w1JpD2GjciuiAeRXyRxZTk5P9khJGCceLtQV7M5jbcqMLa9oFzVTUU9rSu",
  "key44": "5w13oohoH3ujv2bLR2gnLLuZjhBU6apsjjqAuwauJ4r3RiTmNVdGdifKnXv1AWnW776dmKg7NS1ZJgc7gX75Jvus",
  "key45": "3WsE4L2v2XbyWL9CdttGamg6FJx6qvYXB67Wz4BbKLRUbzT56r5zNsc2cMGCVNFAKmatogQAw9XKSxp31HCpdHVa",
  "key46": "5ZKvrNacARwxgXiJqUuRhAtoqRFUHMacrxjvoEzeAjve532JnCwxvnnVCWFNyDeeU1Zc8PZ2h35ahCoSp72fzjDK",
  "key47": "2qXAUN2daavny3eET4e79eJtLDixWy5z4WbebbPCzLCRPSc1ck2q1gf6igGf8Sg5jXqJVquiNGqy6yVfn4JmWc1k",
  "key48": "2i773Qz6KtWQg8mAv8noEgzJbo9wWU288CnyazhitJKa6LkudDceztMapU1fJwY8wsNZPS4hD3b1FQE1SrQWCRhY"
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
