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
    "5dBb2FYUGejgFLU8TcQH93oRzWQ3AjMGQ9z8X6A5pNY13QrF2rEhTsrRa3SzHqCs88mWhfMaXzmxapHPk5fQeMe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHetC2Xpx2vRq5sPfThjpDi9e2K7acpwTXXh41moTFxgG1jttcj5tmMEMHQzFrD8PrL2k8oaaEGKpW46TphTFT8",
  "key1": "5ub7K4rB8u1a53GCZKFY2dwLBpzojT2gRZdZLw1XVU6ehLzuf98U5quhFZVdZ9axLXgRULZ6DZbnJp8hGQGux4ZD",
  "key2": "5fX96NWmsXXWC5EfGjS5YXYQx7qdntCX1kBhz1a8aeXNinSnwCFUovn5YrQk1KkZTS9QXa4jS7WhUuoPv2MB9LeH",
  "key3": "4FL8SharU9idr2vmTNDhEyzyYcmVk79q3cVNLaTA7MdagbHrHBBGutEcr13QKXyTpSEGtjz79vYH1mESct5VJi1s",
  "key4": "2eHvH45CDJ54Z4QbZQiUsjsXtAVh5DghiJhfu2K3F1DVZEeqKZqHeH6K8xcvK7zwCMQ5gih4PaCNvHvfHmhvYAUC",
  "key5": "3Q9gAvG95ZpDjV61HhZdnH5pjEXRD5tr2VpnYoizWyNRtRRGT9Lz4Ff2JNRRM2ir2mdwVBKuou1RpDy3JCdJanqM",
  "key6": "3MUKmV1jrMFzS3r4wEkTWav7S3VatRjjZJ55UciUTsfbAavrFd7vhZVxyHusMwXEcJdr8ixu6KT8rDi9P3FAyC9f",
  "key7": "3twjLpq6LApFdkXrYZjzSVPSn5cq3jxS4tctUrVPdvTQJUHubWNvkfMPnKDBic8aV91yyz4GTbjTvNGPqbkK4qA1",
  "key8": "4jMd7kTJGyZ1xiJMcfzVmfg3hHNZYf7t1RpFPJq221exodRffjJBTEDFSXmW9gmxhuMdmNu7vkS31JpAkx6R3dCa",
  "key9": "5cwu1yzhvkZV8GyGzNiPxeHrzqjP81ooT3xWJcC2eXjHZqS6QGbE7Zm6MmA8dPwgJ358b3u2gWqDX6MF9sZ4XXhe",
  "key10": "5yyt8ax7ymLzBqawpmFT9eF1gC732X29NfBWWL26PkPVz6AexRxn8R3k3bC6jxG4H1H2xWdnwYKY34TWWg359h9R",
  "key11": "2z1pgDsMjWMAmMsM5eGVL4mVp2Wqr2BM3BaFFD8dWQwrekJW1y5aMjg7uDtFJtjdf3n2uwhZf3zkNsTz1VUrvvCs",
  "key12": "2e63MLK9WeyiRdu9A6q28aEg46PoZDd5GeQ8xhkhJaqj6QSqTufJmBho6g2H7SUAZXAxnu1ewNn9VaN9Vr7VaFgp",
  "key13": "3Z2ZRFMRTvmQvQGNuNf4txMFBia2XffUgmsLApVfY9SdxmYqJvxK8evtXN9nxkGEmx1ZPQmHXacjCc5MCLxAQiDS",
  "key14": "4CMhyF5L2S8DLa74EyDQdqyghf5iPan3oRpkyeQUNbHVQGTU1QqYhQpzWxC2X5z1nN77URxJUVedP85QeqRdaf1Z",
  "key15": "5BdaCcJQKaXVXDr3YtoM4n8RnZYCFcPkjPoSP7m2ZMurbw1nrwJb4sGLngkWq1q7ekaWH8WrkpE6KsickBSXthxY",
  "key16": "5DCoBHuKV4KnfcjbZKw1HCKjwVmzVHHFigtMbto2RfvEXYksAGbMvjPBLaxWMcAQcjPg9GKdMWmvJ9H3Mrz834em",
  "key17": "5mqsadTN1rLhU14kHJUvSs2tXEWCQxDog3e9i7nUiz6XhBp5YZUiaQNuoUvaq5V3DiqzEpUH2Syu5PWxs6s3zC4t",
  "key18": "4XfRU4adAcnJm1hxYBZrsnYZSuNErKrZDneQifDoWvYJ5x5oaV7NLuS4FSx1EdnBP7dMomTHR8cPpfMVU2yJn5rV",
  "key19": "2KxAnmyr98XNjMqaTWyxYeRG4oskA3Rwy8jcUpvXyj87MLHmYnF6QU4jBpcnPy4akkCFLnLoUKPeLQruepPQZVY5",
  "key20": "hF3qSx8U4GWwUvPtpgaSzGkFuCT8XLDQeCmaspbQgUkdBVoyBRE5tAMLTcMqoquFgfHPkzkRZhGKYkmuexA1Kia",
  "key21": "2G1PEFNzVbNGHrqfNrAtazeGZF5UhaopJZbpgM2pCJckkUQX9u4KXQZPsR2BsvbjaTtRXjnFJovzuyxSs6j4vKkt",
  "key22": "5uvp9bSF8kimY3jruapD71FYWNJ8psVL9KgGatfKbrMKF2crVWgUbNHu5VTW2CXj1iBNWb6DmZjkkqpMbmchKjHz",
  "key23": "3o1jwGFLxPXLvVP7KzCDdNwyWE3QABUiZH6fqg9cyuddYr1usdinCSMK7tQVFZryUDavXQBzQ76KZ1eHys3waDaY",
  "key24": "2yTgLBNSTKz1M6Nd8eMSyjcQdMxnCn8236dQezB4HRatrjohV7Ru7kVEjcJvPg2WhfWEwcEDcyboQt87Ei2RkM3v",
  "key25": "596iV7WPNpboBa7xXHT2mtAgkpwY9hztgmAyXAQvRXaABLDebBFAzJugFrRyG84XgNgKiG3JeVCTWyiYsHZ4kLtY",
  "key26": "2vEfsHZfP4253qXmXK2NYZN7CMFjjqjmSzXTDH1Di6xRULSuQjCND2P98wR3zU18f1ETS2Fp5et5NzQojAVkDFHH",
  "key27": "QgnnLM6KaG3gkvE7hstCPy8rvTyVB67AEvnLc6svWMjv1btkR39FEhAVSFE6qAY8e8AJAfaRepHWikodWkZHgq7",
  "key28": "dd9GoEDufHd3cBV8UR3ZKvC8iv9Am422n3ZDYx2pTFZTKKgxitVFitYrEqXS3J95G3BN3TGyg14czEUZNqDFGKy",
  "key29": "2eDbZypPmNs4JZPApCR6HKsTUcw2RvoXUH2Tg8tt3q8YfRaRorPS4Z34xeJXvsQTj4iyDQzM3RoRSkhprELszoqK",
  "key30": "3H8tXBCtVBZvz44dkmb32Jhm6E19Z9LfLyhkBQ6uUMaAiUJ6u8pR1mPrP8HXVriAdhMFRwfsfJyntDuSB1cv81oB",
  "key31": "WaPzmja8C4ndRHXNNe98Lwx5fp7X1AnjVC28pdVZ8wJgBwiBhRwdDuQHaSVogQmTEKHxwKA8C7hcYoSmhrGsEXT",
  "key32": "2h96Ud3Te7GNgn31oAjYzMGK4jijrHJ7tTMKzoERWxnqaGYfkVK3MY8x2NjnqpwVhsUoQFDUgDKeSrTQuWRz27us",
  "key33": "2xmDrKYMWEjM6wZV35LXnd89xf372KaQFJUkbhNY8fwPAwpQYifJeqCUDfugGaW1zmzAM5Q5djmUZDGwsuUFKhj2",
  "key34": "4YHydWUVapYwtsLBiAUoTddHWt8QdFgyBd2nFfuFMefVmMzjexnv2d1aQFifhnr13UBVE8sx6Ch2L5EuwQ8v22bs",
  "key35": "39kTcsF9KajeHrgE559wLsaSAArnr2oB9APJGSMZyPv7aMoCUmZiLrsFKY6ci8FCiM1AS9UPTCsKoWsC84qtQVhY",
  "key36": "2SpRARDycpkZ3r8FSNhsG9iw6nBLdjXQLKrRNAmzxfEiYVkwh2EoAkp7xgaDwpfdhzpcPz7FyqqiZfDHzcL6kvP3",
  "key37": "3Xsgbjet7PcCP9tRhfxMFXKFreD74xrGMYt9yRAA9dX4x4yGfdxWjb65YBjSfKHu8XrFtBWfUPLeDCRCAR4HpTbz",
  "key38": "3Xs7Ha3nmad7u1QZs4zt6K9YcyWCrFnFF4xBMrGUZ3pjthWTebYmbjLAntsZsuhHUUus1fSPiDwyr4N2pcRRPe7a",
  "key39": "UcYPMZQgGfsX38QYTqtC7rEQmuLNrgega4wDoRaySXqEbUaCibA4Du96Xe7esLu5r3P1r28mEd3ff5Q34jVGbnv",
  "key40": "5QuCWvWsXbh1M5euSXJ6afp7CMMs8gho2WJUS41JhUvfF2ziTPLL9zBPw94geeM8XKRD6G6mDsXMtsLf299SQxQb",
  "key41": "S8Ra1NrmDaNRJTH6eo3rNJqijdNpH7Chmfgb2bQ6drJFqt1kDzAzYefW1dZxEN2yHVRuZ87RL1XJPAj5zRnp9AE",
  "key42": "2ZhuuTvEmYUHc8LA4Y3dvY3SSu5A8pwWJ2HmdtZyfbGVVaV3d7JkTzmrUGvDGateaiqfAcz2R6ZhaGesqq97ALqM",
  "key43": "4A5qhhjdsxF82Uq8RGUKwq8WBzPt8kaAr9sPVBvQ2ep9TvCGmurMbkREmPoydFfcFFHTiQ6oV7B3PhD45KKEu9S3",
  "key44": "4Rfn82g2N75j3qu3DrqKZz9bXf2WgPZaprbKmKBEnaqBotzZD7Mc2hTPyQH8RRyYt47xWDayH8ohmD72q9a6rRu2",
  "key45": "5NFeNppdBR256BYWBmKjAQLSNddnTgT46Lt3mGDoPxNocVjyz4JmPyQKj38XDNCju6rTi7HW6sYFRLNYDWRVysFU",
  "key46": "29QyKf7RAgTjPJbqMz9AKoNSuDvvC761avCnYvZbAUWQ5rw3opgasL7Utk1ES9eSfGmGsfJzo2VsKCAFunKETytr",
  "key47": "213FZGZwckAvnppUgRjyrk5pjhLjYsh1h2rrLibFy7n7MZdeyBCty9DFrxQrvqjYmYq2Dtm3ZWivGZnGFz28Bnsb",
  "key48": "5TWQKJZhmk7omLU4aSjwGGhVc4BWrzUYC5KSh9WBHxnDvxrKV3sMeoxc9usrxnBC59otCkk98N8oYkzqcYJL9wZj",
  "key49": "4GRufxccDCyWEqBtZtNvD4D6UpanMHH7MN3U5sk1NJEzxYR2cuoyh4AyUEmqFEJecnw5JBeKracK3D9PmcWLmTQt"
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
