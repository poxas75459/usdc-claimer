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
    "5k1D2agCyairRK3qosmiRELzahkC6Aaj6eSfrqegmcGbi89DnKyTbC1ohqn4gKK9jCXjgpmNchC5VFdHVvcccQa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28khKNwaYAfePxJr8PpgDmEXRc6v59mK2mfMaoByvEqr2vggX3goH8iyXktUB2tve4LBePP91ejYm2Ln8DwKYhHB",
  "key1": "2JNX2bY6vofx66FWHWcvP7bxFNa6bHmqwdDpHBbAotbUCcQzQjJ7mooaTZXCrCvsqze6p4iA8pM3pA2AtMomhoaE",
  "key2": "5scv3xY1o5CZf4bZiVyzfNRkHjaTHTQFLSBkh1pSX8cjcoAei2bD3j6P3H38FNqJbJfmgdvjNSpW36YBGBheJFGJ",
  "key3": "M7rEADANhnv69h1f859XJFiy5p2vrCf9jurGWQVjpfXSuoeJBpT3fJNMk9SfV4KEQkr22p1NuDDE7DAbnnUPJ43",
  "key4": "2xxvfh9sZsokYQgHKoB3EAf1QTjV7JzqaJo826eCRJ23fPsFVQE2oXwS4Qms8LXbYhFoXXTdQgayJQidPwsbtYeq",
  "key5": "4SS5KzhrSLDgUtt5wFCeazERYbKb1kwdEzeWjp45PXHYtnzWEcKadJ5eopTRTMUrKfeg8iKyb6c2SpAJXE8KtugP",
  "key6": "NfgpNK61J2H97pSx9Gpa3h5jeBmTARbeHCLCd93cKkp1jS38kYVcvGqXAGL8Nm6zV8UH8u7NRH8yYsgj8QSHpvr",
  "key7": "3zpTBsLitSY122peiZuuTJ3r7W7FDVVwDpak7QNM1L5UvdrE2vdBC67PEGj1q6EEWQZVrznqFnRsgabXQjJhWYep",
  "key8": "2tmW24s7WhuqyrPRCZsLkyhBSwwApxQgFLQ7wMPPYwhErhvYnHGgoRRNUY4BqXAkmZEX6WXLfveicEWTtuxk4G7f",
  "key9": "4HEjJw4mpEhMw8yrRDajj1UQdX3mEjfzfFT76zfZSxWmQDu3bS7e9yedv6yiViFsFEq3Tt2vJ2YAjrtNKfkvUfuP",
  "key10": "3Yi72nViVhjtAdBEniP8ZrRvrM2vnpewFgKN6CRwdPTG8o4YDDgo1FcjPU9dpBkE2VvV9H8VUmudBCVvhhuRYp77",
  "key11": "2z8AWvCJwqrrZSgAaULVY3W2Xhd447tpF4gPqaV6SAdYSKTJKAjfgkT4tKxVfsbADXSKD2u7RtPdkjsvp36c8Zi5",
  "key12": "2bwiWbbEfMcnCmAjgiscsdc8W2JwJCByjhdknJLZnmiojkAa1eveVtL6Ljvsv3Fsb3UVNQ9iX86wpkugipVEtAPA",
  "key13": "B7QzWywnZ2bESvG64YwG8VFne6U83PKsSgX13K6GRduLvTUgcYq3n2C27issJeU3Z1JgjoECfUN7zxw6dh8c2Ly",
  "key14": "3H2JnoXgyfGBxyY6nrRPiT3Dty8cVN1jNVd97vAqDy61TTTBjjNgJz7v2dGNvZZtW8fKSbtFnjcdwDPXUfUchUzf",
  "key15": "5nQTZ31unoM7iGoVB5fpSPFkpNWJTthAyG2srqAE9BHgS8XqX1AvoVsu8WpYhCq2MWfToTZDEwuBSTyUNSa7kag3",
  "key16": "61uxc7MT3m9uYM6F9d2mDw8SrAKq1q2vn5n4Uf8TCVUqEBCTatkN5fET1oGYX9pr3TBgGXY6st5pHYvyHbX1gTwP",
  "key17": "5zhU2vAf1kKyH3WTbKeyhChxLuW6hcSE7mQWpY8xYaUE6bTXyubMJt9n1Vi7QCiFPRbxxJNQQcqvbBQq4m1VVLmi",
  "key18": "atVppgxtQWbB316ByDPx66pERk97p3DutSXtiHdgeEazJyXyYLYHrZQSTEKiLV8ANQTNzRZMnsfsgihf2VMK5sc",
  "key19": "2chLhtenQoj3JNRkdwcrjijrCZzUnwEE9qu238AogUwcjnmyex2kcgKucwxv5F4zMArfkefnwmXxgDwjPasuvR5Q",
  "key20": "RcJ2Jq7XZaacnL4nUbCHeFQ1WT7AgPtAQRh8Ghx97i9D5Hcrd9CRkKUsHBM7XgbavvoNzQnZCxv3X9WKi3whX23",
  "key21": "2iXNXwZ1ftnRxNoo6hQAamJRbjTke6pVthPjZpGuWxmo4HPPUrbSbuLJkjyzYgbwApuzB3gVMEPWygADgRzgiC3i",
  "key22": "dfA67aeKDe1vNL916YQdMNSTtoNeAXSuEzuomSx9JJ3K4km1R6P5LK89PGX9NYTVHS2TajqqLQD7uzdBKbPGerD",
  "key23": "FYou874qSUuEg9Sm3boFFdLnduk9oAoVzZCmqxiLtHy7ro8daRMC5Rhok4jfvMydoAtH1GiFaVsCK4aszwmpGUy",
  "key24": "5RDCofxx1voshptmvkiLoMGQdrwrsaDV2JM8uu6wSjqjnC6jXfR1YtaBvFVTZofGPyCZeL8Nb5vWvryvj4L5Vq1r",
  "key25": "4e29UGGQ8TavM7aTRuaov4dFFpz7uVL4BaGjognKQhFHgzZcAZKjgCr47YdS6p6BQzTK87xi1wmntryqTAtBRUoY",
  "key26": "2sUuLKdvwg9x3z1iUK7p72WjxXEjx4zpBusty9VeB7pANDGpCW46EGYFKU6eE4p2QpsWQjtxxWLUvihggFevYTSo",
  "key27": "CpoC7Ukn9J8Fw2iQxff39ZFmF7pTBywLuXVSEWs8ze2sykQ6pN2TbLVg1KSpHrq7WnsSCef9FhBarVNiscRYQeK",
  "key28": "32msHfusxBcWwSzHb9qBGV6DQJiFeUeMTfkeeD3Ehf4vsphXYx3Whuc6MmCgRUpixLDJCAnsVp6BN4W4PiYXmgLK",
  "key29": "2P7xt5tpatoa6tktoWG9sHmDJmwpa1WpQkceiCQ3wFmcfREbtZfmERv9ZbkAHEAWPNaPu3LFsAwnhFnUXTveMDnA",
  "key30": "5hAUtpi1cUbQXWQV8YxCASP2xXxJpm4znrCtwsYJ4875hnFgQHEhskuFQzGQo7Zcum8hdS1nBLM8KX8nHLXwbkqs",
  "key31": "3Vbx9Ep3j7zwsZb6ov3wf18CEr8pVEAmzV16CP9P8sFmwM4F3THwBJVMCjPPsMo8P8jV2abqUrcKpspyBtuCR2gi",
  "key32": "3dWzis5ZsLyptVHcfa9YEKEwUuvHJjGrjUokRcXBeZ7bjeNEGsq86rFkLp4yKZfLqjWUAA32iXTmzAaaFkhScq1R",
  "key33": "2R33iocp2n4Hed5p4WTiLcJRuMyAYfEaiZbwdQ877Mmc3vh1LdcR4qyLFSJHCRPdkHgjC7P8jQo9Eo2BohaifW7S",
  "key34": "2EQ8dfdnqPuYLwZPMm3WMN9ejqp9owhUTraJS6Kt5BMGJnhEnFPvb66gULgyrg5E5PoxEw1nb5KaMzFhw2TR2YWd",
  "key35": "477M3HPnT1PKwX5jJEA2EW4DfDatuoXdyiAywgdU5EJGX8uJWSXdyB5nYCwvQGSgUsbR61YBFgeNhumk7hwHHZw3",
  "key36": "2sTyXJQyiTDVmh6MyJitoSiyGuPybmRkg9A5FEZySsJk5mook1uK4SqXsf8Pp2EX21saerAyrs97KMEDHrmW4UV7",
  "key37": "2yRSeMEsmrKQPzRU7TJ2kred1VQ1a5iUBJq33smpsSdkqaWPTXcGF44ygZtPYeT23rGbaeF7QoM7tcsNAZkkHeJM",
  "key38": "4zhNPWdEfk592FVZNGsL23oaU1jhbS8ikbYj1nodZX9Hqi7ZTSwG4cvepjVzvPD3MrGr5jRbDbFZJk95JNjdNq7V",
  "key39": "5DRuDiRtWT5CccN5XXKhZkS2zmapmNZCC4CmextQHeS536LgBhsud5PQW6rVK4w7ZxJA5Q3sfXM3VZ1xt5S22z5C",
  "key40": "PJMJbYym4etsaabfEmVCnj1yMnM2XouGeaAU83bcmGjH5qRuxYBvEqMjPhfSkL6YPN8akXPPDiVy3bPD7YAoyzN",
  "key41": "3zhCCN9um6k3SYa1BFqx3Dy2hYj8ugudMqybwHzevWG159GESSJ5JyU7iz7df4sGdkZEbynBFhbnvGaSXeihUR76",
  "key42": "2HVWaNdQ8otxFVkDFmRuPremFZDiVkEv8F4ATL8vC44y7rkRByJuFRgMN1XffHEHpKTyxRVN1bYQkZgdZn8RMGyk"
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
