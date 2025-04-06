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
    "2BzqK9AyqnMS2xj1au9LAfuugxYryhDy4kTxKeAsrsBxmo78RwkJbj35NkQucno4SRfSN17Cz8fTcXK8cC58EgDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37ggtQiBn4EPKL5rM3GMCkyTpRhaeZaYpHM45aDmktQ6jQHkysziLxQMQ8XPpAxzvX6DPdRy2JGMG3xkTyXL1P5m",
  "key1": "37ne3m657Be4SvAavBLT8VgeTzTU1f93mWuVCvdbeVAPaQYfxruiLuyTBQ4dmGanKkVYD7PQBwrBjqnKeyYFHSrr",
  "key2": "3dt8KYC7hzP5jHPpoogRRv1nC7j4JEPpJ4ZTeKbUQS7PuSyEeQzdecw3WGb8mUyr8ZakKBV9Z6NYUyGqaeSzZ1SL",
  "key3": "2t7E3SzrCK5PKiyuKVLvBJf6DqT31WJVFcBHgRKnwtXZNjoC8AaXkD5SjW6LZmU1UXNGbNJXqBzRi6LRrQHn87Qr",
  "key4": "5KvoS164d47ASZXcyeY3GZoTsju75ZJo3LkPwNEwN28X6kaPGcN2gr6dHgGXCsiNXw1wAsca73EYUVayuYWgFa5n",
  "key5": "5z4vVa14f8g5WT2oLoErdNbgGf1es4b4Fv5QyBStva24XULtH5QGximBBmwU2jBcGHuCWsTszUdrEHB2CasMJ4J6",
  "key6": "4zJw1HjyR3Kw7biPcS8491bLuXV82vrfXCnFuQe6idtN28W1ezyQfHoySEJPYh4ahsFsRk4e1A1XzeN5FzBpmCS",
  "key7": "T6wZtu6rkHwxidVYhqHxwNyp31qWpSmGviYpaZzEyHaHL47CSqZxhp7Qnjqy2EJSXngoZiMeZgK8thXoSHGiK4M",
  "key8": "5sGjibFevD7tfLT8A3dVmhGxTA88SCs9fCpuyxBw7Nbf8YpkTwM9xBtgddFC44YE95jfEgH6fu91FSs193UKqcwj",
  "key9": "5bQYR4JahJTQAfb7YkxfgD86MvYXmKu1wxbKh6DH5AgLgiKpebKEGhc7myVyTg77J6hT6bQtAYCRRHSQPhcBQeiV",
  "key10": "2RoBv1EuD9mit6QfQ8umFgz7YPiTy7pSWu35hed5HEzKRt6o9S3ntw84p9ZXs5Qg5X95vTYLWmAQDNuPZqajc4bV",
  "key11": "5YC6NeVLtGRTqYWxpX9zWZpF7QTCNQeE8pGqLYaycj8cWSkSdiG43pU9nyiHyDBSyvsB43dXnYfm7ZYdjisSLKZV",
  "key12": "sGp1XHDrqLRXMBdQYGC3gyEAVRy9msoBogxx2sQsbuvM4UVCWaAnJQPts1gF9FEsdF6V1RRCn8Sg7ffhEbpNSUp",
  "key13": "3DNisSJYu3KgiUz9JyQFXNaPioCWYJZXEzLYKh45Bkvtnu6xeiSaW3nJEPgaLY6c6MvqeYy6xp4KX9PUpXqd2qMK",
  "key14": "4KsfCPaQnRQRhu2a8XwYUrsDxTN2QNfncTLhzHP5hH97yDy3wBB6C3VdQw8Fg3WDJKXvk9WZqMcpxvoHx82pBTeh",
  "key15": "4foY3bNywzq247QesJkrU1QoAibDwqVe6Ry5xt7wqLCLFVWumetgVjCNHG71SSzVySpyek21vgeHJ6Nu2xc69CPw",
  "key16": "5EBAz5Fcrmu1A3FP9KRaEML2B6CzT4JxhX6hcFJNi1wGcqUBRirtTpAVdA784rgL4aqQt9PqqqTKS89WbnWmD8Sy",
  "key17": "KfGH2iyKgLs3on5qeSeQaPcTim1NBdSFJoJCNfuMPwS9gp1atE9ef5jKbs1aBR5sgszkteu2Vr1vEuSSiCp788V",
  "key18": "YCfn5fhyYHAnW8jD7tPCYyGuHPKdjVcDXMFhty9d6BsP5PWM9eL8XBF5BfGYsEziGgrei52nfNJHME1X77eMPtF",
  "key19": "5ztD6An3bv4YHhz6Xn96rKHCX2nqv7nHeb2qb1uFDJUaPkvx4Uig9fiE8PTrpq5Xxjd9gXZQzqq4KpXgP2pK6kdS",
  "key20": "eKu2TJRxtSVDdsNz5G3xcY4ruy8f7FAoPAR9WJRBzy5Stm3RqttSqiNaMqJm5XrCzKN4EiyoYn1gLFgpXkUqbob",
  "key21": "X2wpMDwtsnAA1Nvb7HJRhhbBHqCxLiXZjyDVrBgkA581QXFmSUdFGUusinJstoGJdrMa4rGcVbEWEtCAxB7Sogi",
  "key22": "4ptfWubiDEtj4AR6hosLHXjr9j6b2nLGQ9TnnUKYUgMGmkwEsTW1fye1cuukgkY3dAK9RN2fbzuhEGw8UDwX9nqy",
  "key23": "56oFsJSHnvKvCZyxp3mFTS3DzukG2isN89q4WqypHJNim7gRHnam1RpkvLQ5JGCa5mtoPwKnfKVuPh91aKkcK8mg",
  "key24": "4H3Xs5xsdW6X6GBWWrj1cSEbXr45Fe4xihikYfKAUYt15EWdUotTpKCv1VJXHkaucxuYaYa2d31eXSi563hUh48f",
  "key25": "4TEosK34jVosYqjsyVhtUgn8g69Cf63N9qvwaXKRaoc5GXR814xjnRtCNrdDvzehqaZQygSyaTeGSuBfuiLniXh2",
  "key26": "5XtssEBvH8fQfCGMZN7DMkuxGqmmyjVRpNzTj2ruUomVpZauKq79fdoKyKKVY8eoS35XeZqQU2JN6r53oUTCc46z",
  "key27": "4kib59nnrPrYyYRHthJzckUY2CvAxPhn7xoxhQ7TfDrAYgMSyj1qEx18vAAkvzaaEgJuwp4MSLV5imky94VZArNq",
  "key28": "5LyZpyPC35Mu8pSbTVAZRYfo6a5pd8xuEx4nzLjhdCVcEiGgBPJFCc3arfApastNS2FfBCic1WTMXnaqhHnFByJJ",
  "key29": "3kDJCyajngbUM5CPAwpgdY4rmjbZfjxcs4S64Tjbs761VUihaEhtGk5zTskdfdJGyaS7Qtcnqx5ryFrMSGhFDWvC",
  "key30": "2qKRSwWW2xi8WE4QSvqx9qzamUvm6DKzpMTDnziWpPxVVozeuRR2dMi1WfQ5JR9MAVVM6R3H2pHmTadcLeGEs4Pn",
  "key31": "xRuukrbCPF3vTdpZQB8DNsh9tT1ifUbkb3DCotawDfq8csmJXuTn2XEhnQ68Qchdnp5d5XmUPidMcTQj8n9DEfe",
  "key32": "63j6K1xSWpBJRegefbXScd4MiRAVLpzzrvDkWuotjbonX1kn7jJ47VngFePfwECVFZFoQPawsx3RNrgc3ZZ6CFm9",
  "key33": "n4prhNYPaE2RswQ55Z66McJftNF1DKseZxBpfTaU8BzYuwriozkNvKsZRPFqcE4q6zhaQJevV2daEAMQRRycCAQ",
  "key34": "2Q9PDciZ1LmcBwc6zNaihNvdNYvtejC1iLGctm3eqHVwvtZQ1o28y4onzccUs8ijTmeHnjzsqdEjjEXrgodM5uni",
  "key35": "361iGw9hNL939P4XrBtem5Ucx7dBFtZeo5JaPNjjGHV3sxiJKTth4ArNgYZhpZYLKR8CGJNmgHmA8i33ttDMMfyk",
  "key36": "3DhkmGLeTsqyniL5qsvhG8bwg3Krzmtkiq9d8ogWpkgHr2JM8MW8fppfZufGHaiZQF8JZoe4xY9cxn5UzVruKhBN",
  "key37": "2Cz9m4NUHYhgUkUoqmJiKuFfQB1u9fakz7tgatxGSU1nH2bCdC6W4zJjeEMszDAqtzP2QdwBPzuyGMC7H96uxrRJ",
  "key38": "419Lry16WAMnzneRGAxXpyRiBCwrUVhVEso5hQucncJnHhN6emmPxDnmiTo42qMEpuH3uygc9bv35cGe9EP8NV2Y"
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
