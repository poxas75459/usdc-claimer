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
    "3dn4DiA4rHgyByQAZENgTC84hkvpt9sRQMhfx4ghTRNE3EBxtJchSSU6mjW6eLDFEWYrXDKbHNuTRdJwFQAfryq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FSJp9WEqfWoFBRMt3fD5M51B49AQ9m4VhAA8vyjj4F7go9Z392EXkVcKki2C2KMptwi9sLzJYt7x3vCagY8qTEs",
  "key1": "4uCRm27uSuqgqS9L1fgxnjY6EHzes6yCwrG6GWRZ6PVep8Yvx1EnZJtkzJoQ8BrVdZ4VY4ikTrLdystRiDJjnM8g",
  "key2": "phWfMBYX6jLfUkR7qwXHWv439Fu1iHqPDbYDRwNUomrR5koPMqPX259Qg8UgVtP1JT78cYCdbVh6wtA1cDeQQsE",
  "key3": "3ReZbkjwtrJaqFfJxv4PpBqbqJdtGAnQnYYt6sdq1yxCQgEKsTQtqUQWJtQifUeG1s78Y6F7ixizhw1eoZ5maUKE",
  "key4": "5xmEYV1dE2ka3EiyN4FqX1yTqyLjnGCzGCvpEv9QEAcRs4vMGMpAiLkgdZDAxLGtRs1iX5TV7zDxtS1a53bmz4hp",
  "key5": "J5fxQJA7PwkThiVYeU1wARt8foJksvt9o42i8yi94vYteR8oZ8Yv1MKmkYwn6napdZhwPbS9bGYuh1D1dWtXEfB",
  "key6": "5kANgZiJaW7DAwkbTqxWMgy2MezSQc9owPQFKTJMTvvdnSfs2zt76pRRatwrGePTocxPLwN2x1F29dAoMC9FeP5i",
  "key7": "4GZi2DgyB6YjDW5F89f7mEzPYsM75nwbtfEPazEWiqouA1hGb7Tk4zX6h5ZjUyf4cXixn6uycoo2NdWxKBoDwGyL",
  "key8": "fMMFU3wS9PW6pjcN3Pd5AZQ8RuqwWuZPFdMi2Uo3tvMUoiP9qWunQjB7ptnNMH6jDAYs77uVXLZTsrq6NP359Ev",
  "key9": "5ENFWvjN4o3xLUzixC566AByHVnPL7nEMN3C8mtkZUWQRvewGgCP3R6RJRPoUxY4trZYFKJnLEfiUaxKPVWbp2fK",
  "key10": "33ibaf2vf1nPxhEwodqZh8VqLq61bnXGvgz99XgxRfKpDprjGrosRCc6kDNpE5dJ2Q9V9FUnsoSF2kNykRAxyyMh",
  "key11": "3GMLqZA3r3DZiVSDpccHYoDG6yRy72GjFzUzEqjmKAVYzFSYAVKkGPKnKaFJq9X1BhMqtHW4F1dP5MsyrvgaUKwZ",
  "key12": "3K8SNGm89NPt5opKZnFMr9A1NJPQBWbMgyBWp8W8BLwkSuMzSNDcga1M4zdBMvZdYsVDdZBRmk7frMJ549P8BBs2",
  "key13": "4QSpjp2tLXaAphdRJ81XqA4PCQV5j2uhTRSkm5cBhyHmoPfzEceBsDXUJoW1kkiENsxHiKoC9FNSttvoJ6QrBygZ",
  "key14": "2bMf2dgiiN6bwt9y6PkLHCtHa267DNLfq8BrCMuaGAQf3uqUtuzBBCegYEdt8hrEjw1EBryZKFwAP26X4PaXg2mx",
  "key15": "3ADPdZRQF14FoweYSa3bsNqvEuri945xMTtJ7a16ouyh5Ln712WF92y82KaECerQG7xaDnYwB2FBCUrZsb49ou2R",
  "key16": "PCWK3J8RedKE5s7w2LM2Apkn4N3LvbLuPoE8v9eBcxviNEAAV4X2J6STnaZ2vEDmk5V4GbCgbBCaxAmSm2DYfjd",
  "key17": "vrzbPaxuZLz9RqcH9gRGf3fx9Bk6hzqWpgFXS2WYcorpWsAkjzfVDUsmhH3JifR5eaZFN6G2y7cmXYiVY7VvTVW",
  "key18": "5FS53589eTqMUXfzvU52jXepBrcv5on8jdxcsMfCKoMUajz7fTT25eVKCL5hSPfwoMKFXDpNeFCJtjVW6qgaYQ2b",
  "key19": "5RtWAmyi5DG9VJpdZ3dwBSideZrnzU5XT5voJSY5wEw86c9NLv9XvnEFvHcitYxBibC8q8oaYszWbw5JSWvrG12D",
  "key20": "4HHwe336ycd5Xz3UmKaeGcqT32Z8gCMcMejL3u1X9yaSMQBu76u9HXdKHhp6w5iX5kuVquDKkzQvK9Ff88pXwqXK",
  "key21": "2PKd1Jdtx7Q7jPAghzZWzGGUJBhVwdEwVkiYPzCscioCv6QSeCVWFS91Z37aGrdPHZqLB1DN4HX8aA6gfJEPAfrG",
  "key22": "mkQwiCUHsg3QNF8Q1rcnBzqqEeeBqdfmAnw9tttoZnQATxiThf8rMJdR8CePdFXH2o49MR5m3KKcvyMkJnRJ9oD",
  "key23": "2c4FukmuR9x1izPBvT1nbizYfHBqSR8mG32ouXREg5qAZTojMhfGBC1DEaAzcTFQkS2yLUFyjnBDk5CNXgGQHGM4",
  "key24": "6VQ6oo1tDmW7TLa1wYCDyrCDWjmx9cVTGDDoiHVnFahHTa12eQBA17pxizCjh1Hr1TskuYLiAT8GY8XrTabEtGp",
  "key25": "5YafNyUjcBJ3G2KCtZ2aFm1ECsnoQar69q8tzVsy8mrhPzcrKeBgrkJfDv2izL92L26PzEVZ1YcFWtxQQgQCpwtT",
  "key26": "24jf21rdNDHp85ccSyaT5SYN1S16p6G5qaxuWLWnDtusmTdN8xspAM5RSW2YeKWWtchi92huf7WoLYTwcLtiSZZG",
  "key27": "3wMCjccp19pt4uwEzRxQ9ixGx6nNu8iEfRzyTs7dr9Rbfk3vAJbMYowMm55HYEMd8WbotMpwUzi4DWJCBKuBYFDm",
  "key28": "2PAJ1chPUYjib7MGhdwxLB5is8YyroWyLvz3A1HoHmSRNrhBMdxQS4qTRqJjmeKGMXk4zUJeR8BTjBNYGRjvgPzE",
  "key29": "jNmGzmwhZ3UYtSZHjtDh28oVbtt4HVKqujGz1wipA3Ghzc6oksePbRGLTtVJSD5gt9RxJEeQeUsCSPhtuZtrbcX",
  "key30": "25kHmwBkMpkgU6Uw8YUPBsGRLaZ9w25edEqk1TtR5s6KjPehzJbVaR5C3hubDmRjkSjKPaFPUo8k4UecBqCWqGgk",
  "key31": "4AQJdKA9Ce83ACoek8abUFGokvAW1yk7GyBYWQvTJZPXQCuQuapUiLpit2rkZyAyrDGm9XXx4uzyPyEzaRo5WFDK",
  "key32": "juooEyougxmMS6Luwf3UaR7MUVVBQHJ8BLw2Bk13X2ndug3LpRNtnxwSP2C8cMaiMfmErz2hBs5Xrr3vB9CAxfS",
  "key33": "3mFp33VmZzZwYDKeFQ5TBMkLWEmuRRcuoYohU7CombpCK37iSiW9ZaM9AFyqGqR1X47DTbkcMXABRoKJ6VoSy9rC",
  "key34": "4ehs2WpYwBcyPaUCLPfK2qe8VjpF3GnbpnnWzezWpPnoNteb9agEZ6ZaKhZTmQc3uUYh7Yn5g18CX6rVFa6G3dH1",
  "key35": "2WqJywW1AZqTmF9RhrTh1UomQt1L3micEy7XLJpkFpnCmzyCo9ntTRNbFBsn7HNqZaZQ6Hvkoy8YGdFSKte2Z3oS",
  "key36": "3vCbQWSJumAse4Ve763aAui7qkebpqyoNv6UvTjjuH6DsGCWYmykSRwvqNNVaZkA3QeB7ur2jLhfExNFH5zAq2i",
  "key37": "D4ZQggpEfJbVjJ4azysTwZypn2n17G57qSSaW3ukUGmH6nvyty7n8BrmojZg3mYGRZ4o4Z1UDvnL6SxyiXnisHx",
  "key38": "2bSk7SSDe6zkrGu6teKt7v22sDuALWbJw9yu4nzZX69iRQFZpfYd4wV37PDzJRJFs7SD9DidpW5sH3fnaKyM2Z4m",
  "key39": "3zLpLfmurJuvweYPpyKWER5Ex1U3GMiFfy4eeBveqw1iDiDREqDLUdcnQFNPaZyr5U3KsADx3WVrvPhd2srQoVJg",
  "key40": "1uEACeKuj2TaU4FGyCupvrvWsXwW6UG6Pd3AqE1svBag2Sd4uXAdMe6h1sWGWYCFEBiGB5pid3vX66kFzmnQ5B1",
  "key41": "XW7YWQx882RaMDQ1RGUPFC9u3jRmadQrMqBXV9HhA3z4AjsAsJZ6xYzcd9HMkjwbeAph6Ew4HRU2RrhMxwCx47V",
  "key42": "AeyYrKEBUXBBmmaW6QC86X8uNp7oM3Qho4DSWFYQwfvzt43ugJf6rZHevN5mZWYW2TLXB59LVTABkJKMA4fsAjh"
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
