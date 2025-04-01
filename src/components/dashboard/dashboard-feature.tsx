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
    "3M2vofbTmxdfJZedbgAGDVdLATnPcpej8i569qkprn6zSr74ndT6HiTZurodJXnwJwbzVhK38i6b9SQFUQsmgk8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTEvqR7CmJLsidDYrdnsgUGzyxeQhqoDDGkUFj7gTzG5DBc2VgXF4LQqBV57nfXvE7MvFEmYDvHRVpQPvVKPi11",
  "key1": "5vzuiY8Ha9m66ALJj1rcX88njJr87Rmckty2r6nQyc1hApmh2Wzb4a4cCiwvQRuwJD4BpBWqejLeZhtpzxsXYvUN",
  "key2": "5cYt3pYk7TEKWy3jWuEKKeKjoEb1PG9rMogZRRe5GhvQ9gD9popvzQPQrNqafY5nvAu59xGcbMdPNuf633bBY6HT",
  "key3": "4k3stzH5L8TEauQktDQvnxejYQhfWzkdB1ruqMioZ8L91CYw5Jex8Lh9CUBn6BWVe6ZapSmj4conTwaWGCy6nbMs",
  "key4": "5bapzViqTNxhW9jfXVJvf88to4rYUCtk7qD4ELi5F77p6GLbgm8kpC5drAzV5GZVmVgCWw9XiDeSMxzTKVCL8qY5",
  "key5": "5p9GXeSQMMF5iiaMstcBaiubbh4H8wANmfVU7LAPfdqc3XFkDrvKNnya5WrNBdHw1T3Lgw9TMVNLeWBXxZqqVde",
  "key6": "3hDC1eqonjX7gBUHtopwqRnpseTMED7saeQTqBQb3KQviCHZ1pxWEa3NJ8S2NYFNZ7R7pxApP8zmC3HnESoUJJFp",
  "key7": "5QwszspJWj7UjngaC4h5AyJ9UqZAccMGRi3t7x5JEpSpDUGipcdwi3rGYUP9So5YNcwzQPvvgTwugRyLbSNtha4k",
  "key8": "FMWYJb2E9P9o9CEd5W5oxy79hYgbLavCtU1HftRt2GMqvESPryFSatWPsn4o71A1Pm1YnjhAQvZYGSuod1Joqo3",
  "key9": "2xb5jzn6KHTFv7NhfQq3eXjx2NLWUPKWJwQPToCffZA21p5EtNvfv1C6YqQ6R2DYYYuFgnJZyx2NFDH9f8vD6dr1",
  "key10": "5zhiwGGAhWhgBDbGq5TJgUYV3XbHVhL4rSjK8oFR8mTAjeRjvjzs431dq5LTK33RzhziR1HK9jkrW5SMZabyFkcH",
  "key11": "3FwayZ91P4BaRybVs5xxNufJy6THu57mJ1RtkFysaunkVZ9UvqJsGmYF13KLUifxAnkRf8vojoL97MYBZw7Xm1cy",
  "key12": "5NCrhfDsrhDcoMeHpoAfZUr83AQwWDQY1Jm53wNVAt6aKQDknFHBbCsKYB3ZTeqDme5FGYZoJxveemPdnDLRr3Dx",
  "key13": "4eU26VixgcbEGsdSXHLR6gzLnKBD88CW5jhQaMeWusfAmTjS8a4qh2atjrzjWnFLLXAdyaKeGVr4eRefEMjvPmUE",
  "key14": "3FAYC5UNWMq5udsjd7QSqRJosHRZnGpGEGL5afFwxK4UZGtCKWkembp1vvALah9hbmKCqX9WdgNTwc45XVhPSGP6",
  "key15": "3d9hExGENN5UDnr7gWHBFBHwnmWh9HmsAAUiw59ZF69dsU1jAoMUWwW78W2ieYhYGJUmrzsanhb8367VM5mtMKgz",
  "key16": "4Bgh7Quo2JhoM5n9yAqQZimPG8wnikgjBCJWLPFGZAxHEuLw3KLsKgyYWhVKakoqGFeRzZEpyvNuReSgsM5uqib7",
  "key17": "3SXsZbmVnGHNnJyxpqYz4DSdAMAiTgrSrGTiYbqoUuMovVa1xDv2e4nx2KDU9HyeQetJ2LDgWCiYq6yngnRnFUA7",
  "key18": "5ydfNRmozshjbPHXBbYWV4pgz4Ay6CJXdQ8LEcfvBQRDw1ajat2Yf2DsiXZbDyY5JR3N7xk735qGKYNmGioa1DTh",
  "key19": "5iczpfzNUVv3FMn1vMN4pfMQsLFhodAD8FRaJVRoDjponxa5cTDXr725Ne6zP4NhnpYSQs6fmhzecAQFHHxEf5p9",
  "key20": "3qGjQ52SbBwoYH7tgwbRhGdQvoGBqgyTM2ZLLpBmUNfg74ki97DTsCJK5ee4qBHV9hxKyhE9kZAkL2MdsNpPVMKh",
  "key21": "4ci1XMdfSQinBxuMrc9wZ5DSFUDy7WNvCs99mxwpxn9jbhXsnc9E6MY3j4PfgeJCkqsMiBxTAFcj5XJ7s7maw3ev",
  "key22": "62wJKq1gdE4Dyrhb4YLLZkgubZiasKwTjX5zdvPN42pn9vChyH8V5atxT8PufJ3rddxhNAV2U6nbpVKL61jWzqcu",
  "key23": "388e7wiooFUv1i4tmZ6QrsTKaC7MjHDqYbQRdL2B7mssE2UW6D2zbfgvZXANkUQbYfeBAHE1w9bjnXDtf4ZWC4dS",
  "key24": "2j92ZPJogdTFyDLJQgDGHAZN347w1AYZanN7dVgqnqriYyrxscmdE72atwV4KeggjMW21Yaum7cbzShzWJRaHnnm",
  "key25": "4hUxz9MwnnkieYU8cDruaz2hXEaqksZGUT79oJFiDBRd1qaJn6XhQs6wTEEsKkh2zHtRY1CPtSAj78W4qkvwW2eM",
  "key26": "26uzsbjCFbDt13tCoUQUHgcXDtk9URyQanYhgHUqpgnSTZUvEQW22Ayu6k13RVJHZ2Bvp1XjWHPML6kkNhbAbrbN",
  "key27": "47hWYEvkrmvzaAN6qNQZVkmYxDW7qbPP2672UTgxPVkr23GKQejZCvs91G4i6gijgdMoNtui69eD98Xi8ju9PtMs",
  "key28": "4F3c9qhS8YNZKKsMav7uFYpxrdkyw84RtJx5ayCV14dxyGjes5SoHJbHqrK7FukCde2EZRranRAyajnxTGQS5qYJ",
  "key29": "4Vpxn4ERnoqHTsKXhyUyU97tgdCti8fH2oy9MCXnWAgYYMC4zstZRsmwBLb2nH6HCctbEt2UwGKN9qN32AKrKgyV",
  "key30": "fj44XBvNHMACLkbXcwYzWRTgtaj8C12JwbMmYXFf1Rm6gX28vzsuyqbvQ8q8a51txUGbZaywBYZqhkzm7a3gcXd",
  "key31": "5nX5maRXX1ruRgiKFpKc9vvLdPiE22wXv2cbTPqbSYFkYcgQ6biMt5ub1RS9hQehwCvRg3o9GLgTaBGaenNGHqJe",
  "key32": "333Faaa3Az15WhhnMeDLSbQmDA887ywyZGqmCixXCVCNFcoanYhE8y8z4TMzkd1pQCecbVMUCSRm26BsBxppWwxD",
  "key33": "2sQ8QFa1nFKqbT1fZBZiAVNRun9X2VNXxqnqYsSpcEW2GXpVj5LDiHMXiMFgaw33msXCzzei6Km1e7HRaBmhgpNM",
  "key34": "2tWdPhzwQQ3tj8DvLeQGzxzTHtZVdJuTKKXGnTJWtk4grjZiYLHff5MZEkzK21C1TghWvfbRffx4M3yv7sEGh3JS",
  "key35": "uj4PuzdAck5N93ZnRPh2xrDJBnw66p2K8PSQeu9zHGHU3HbBHxjJwekgnN6wxehURt7xYpnNca4Gz5GKJqdqnF9",
  "key36": "2okBwnkWvbgTX563JYTMMS335jEsrPJXz3df1Bp3aakcDMYdyxp2igQFCNCMGMnDXB4ZmUdAAmxB7SwMenVcNmtd",
  "key37": "4F9i2zXkVChaFyQAt26kLVPwKgyahE9osDs5ZUNLmiY9DyRwFwdP3PkYfK85bxX8C6H78jfpZowmmCcVSxtMSmNU",
  "key38": "4KXY2YwcFY6ipgBX4X2KVyRu25NptBjDP1YqrYjwn41B4oZf8arjyqzhGd3NAoNB9uRv3RVw5Uw9M7gDG6buh6sH",
  "key39": "4CDCb2kKFypN25ntCHeBwsgi5S65kBMcCjopynixv1D4Et2xHDRFAn7K6L8EnWMfHsK2RMYJgA6iPmSu38xQDsPL"
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
