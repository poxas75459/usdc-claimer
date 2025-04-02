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
    "4H5QafUVAkoowDNLXHooimXychC9sManNmqZfFRLuvdv67MuTeTRUm5nfCUSd4HBGseK813AcKt9n4qZA1VPKuxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G8p3GZ9ZTerx527LHqDZetninQgwWpt92zNkuhZMFRe5ZAFHBDvSRSBeQ77hTUyKrkGsaU29TnKMrsTvM7oXuBL",
  "key1": "qzQsFQZkUhPFAxKUrvP1jaZXmhY4b2uDv1dzFSpWExZtca59vHGgfs9Nc1gmTAyhLFgCyeiZ91bLPBQ9C9dPCmR",
  "key2": "3bY82HEoVQAmWpZjFpoqpntuUSms1zVEobZAajPGnhNHLbSdqXA4d7jsrSH24XxM8kZj76ZGHFXkCMjjToRqa5Yk",
  "key3": "5tbc7bvunZTsPuKdkwm7YonWyRWvmjCP37uwGncHdqMZ3HEpyCCNi1XBKYmT4AB552zm96ZKRhRfcPu5JJZPaMf3",
  "key4": "2ZL9jADkfZQ24L5utgwW2A58fS7ekxpW7XkNiJtcQgcT957pGx2ZT6VGiCtcsWDjC4uQ7cHzzXbQsk1iZizgyHWu",
  "key5": "35RtkWvriNkFrMnm4vJKsy1DLvt3Jm3LTSw9TnAYFeZL8yKreohnFnCuhcfKqvzHBNxyUg9wbCn61VjcemPPd1rD",
  "key6": "5NP5ifFDqzdkRG84av71zSHVG3VhgPNeREm3ocixDw5625CgGphpW5tfbtRSYb2BfZP8wQDvssUyoormDAx3seb3",
  "key7": "3rHfv8LcDHpw4fnDPByf6PWsMwzKFVHLJVZ4PeyoWPocJ6yBcbfhEU94rDe8cW8TQUhGr1PRRsHuZHr4niFstA3N",
  "key8": "3DntrqU27TZiSxVjkBnjLxa5ZShgxLmaHuGTHSr5DRQAsdFMv1GzBzZbLBARXi8QcPBLBKnxDoHgv8taPQsy9bpi",
  "key9": "2YUeifhyR6TNFryXf73E3peAWQs1SBFiV8V7Qb5xnGoH8RupyMWPuu8eKuEfZpjW9qD96r6Yr6uoS2tCxAjcJdRz",
  "key10": "cJ4969VMFULi6CQhe9SnDVv5S887Hx8jpLAQVwbsHqEALVEFBK2y57Ezjv2FmNyRxhQWD8kJaSirCEHnzme8RM6",
  "key11": "62nFuXv7eDt7S81UGFA4LyFqHQXjZZLFUVqtkCzDq6yJoa2DfNuDkVS13uhMeNsiwxjW6cdaiFDgs2gsXKybxvSg",
  "key12": "2DeBEDBXobJ89QA69Z28NrFsMFPzckYQE8GtodmNYRgJAaCiEQZXzp7TvDi69kVgFqJt7Vcy6zCpypF8WTM5TUB9",
  "key13": "2VeFyYSH5fDHksmHbkixXekr6En3avdZ5a9zXBRiWWxSeAs4gHHPsLmYWcaeUqMSKTrXqCfVPTCn8Hw2Q1cQQ9To",
  "key14": "4pU1ifgrLmNS7iqM7qTt7ii2W9mppzFk6z1bmpYmJbazTmyacS7qSaS7Pvq6UsFvZRzVGcLnUALFog7hd2Y8o2ET",
  "key15": "25d5CT6FjBrnvjTaCfFLxfLkSTDqV7HYt897qFUaWnvgSMPUayrKdejEtD5eTvrFw3sY9GpFF3vQ7ycYkgNeWmFv",
  "key16": "2RtqGzDPpUoouSjvscWTngi4BcQ6dGahQGWJG91TMNXciKEayKh2zMFvgfxoeWtvd2e6b3gCCQtzmKkPFvdpzY22",
  "key17": "5bBKvK8p4NqxnWGenNEgRHk3m6qZtHYNaK8Vxm4fC1oHMdHiHHZQKgKsiXxmEqXhjYDjJ5yr1HtwoFZm9gD7V33X",
  "key18": "67mD9gkKZRdNCTopuKRiXPuXevLo9PYtgEMHK7z8S9jKHENToAkio5W8eXFFTFQcnLc4QRjA8KkaLfuGTbwUhEmS",
  "key19": "5Vp9HLgNCk8W5oVm3TH3go1VNwjNuMSh4zaLKPjUKgqaPPKnYw4YhkcdX92ZTWptXPAmJjoAJCSngn3zPVSgMtYw",
  "key20": "3uBDZboUiRdyAonHDP3coGFnPtcTmcdtFkeXTRJzqd2cRCFjjBGe2AV1U6sjprUBcnkhLM5r2Lc8LegXbDrfhA2M",
  "key21": "QRYHiCzKFtdgUpKV4jgJ2sgbqdMJ6m6MbPLAhps9ZHz1vzMQxPNmVj87eNX881TwwMr4P6ZD4UEAit8QWUQEZi3",
  "key22": "yH7BBANKVgZJoBzsRA5U3D2aSakGUqbH8TbfsF61S6V9wH7fPvGh4z5J24S45nMed4jcGjKZ6Dd87aaheyzW1Ed",
  "key23": "2gJxbFdvihhAoeAGHR16L4SioXCMKKHSXMrA2Ng844ZwK7RSyifPQtAvZJFELwrquVVcBhQbwC8c5g4crbauGpc7",
  "key24": "4b9x3Ry7DL3SddwEkFd49ghQk1rJ7opJLd1JtCj6gJQ31KAiJD4HEGkc4oBUWc8EozxWHvMFXs1wHUu1bt8qnY7P",
  "key25": "2KLeNXNGURK5YfTyezhtnXe6YKGjW5p161kKH7YsGedmA2ADGyhkEuqYHNfxpnvCZ1fgZ4AJM93BcV2JNErhJmtH",
  "key26": "2CqJstp2gbYJ42hCCxd18tuFUvt7wWgciGzg2v4ufKbczKYwHypc7tWj8LcQBsUBQfrUe1JLx9VNoPKzambk2vii",
  "key27": "H8QTn4SSGiZSDT4GN6NWVL5cB98sw8bH9n4Yas4QarPiB8sMRhyMcs812GzzzbKcPkPQJoTc3wE4Fa4NB4kRoGV",
  "key28": "57jox8FfT5XUAmTaGsAHSAbpxgDKcr1x2L2kQsrqb11zs5QjWvNJZxk2mCMQmDKdLnsMSaQGnHDLegVkAo4V2uB4",
  "key29": "oAxkCfQGX7B8f7vKTTApKyYnRxTwzCjT31cihpiwEwoG4fAw63Nm1aqgkUCMBao3DZK1PhpYUAaxFDtSC72i3gq",
  "key30": "h3yFiDjdhqD5HRo6jiiKe8nZ3pRy1esA6p7vJA1twN6ykQPsRPW6ZVJj1NPxbBchSwWBRsU7VKSRQ5so4FjitBD",
  "key31": "36faUwUxJYqmK4HQzRjuTvU6gFfqGNyFAMy2ddCdmFSsAuPytZsjn2wGAGvzenzn6a6WNANWpMUXr2Lkz4YcDowJ",
  "key32": "4SkL2BRSzgQtUhE6nNcUz9tsRTE7JGzrUNL1NehfG5a8j6TVB2vYXvX5Y8LQZESdoS6jFcNR1A3cvADEPBbdoHiP",
  "key33": "5sRXdKFiFGQWAb9vMkjRZ55oXK8tGJgvm9RJBWC1kkaxkMtke76twt79JxnfSP25uUduKW8tXbhzyHU83Scgv5rA",
  "key34": "3PhWeHnDNzBM7KqrRaVQGhDbhZKr4znQ59eqNHh89qMJZqLL6egeEZJaWFRB5pswddbcrMWsZPtSboc2W4zxhXqx",
  "key35": "4k24mdCHS3u5vzu6TcrZAnJGR2eE5tv41thohTg54R1vFtQ6KmD2ev1q6htwcMtf3yFZgYKSruH1SDtG5Zr1NjZm",
  "key36": "jhsoXZ9yrfqm4KJ26PTB44gGtFDeoVYhkg2cbwfwQGCQAuz1FDkP7YKXH5rqm2vsL7NCmeHWaU14TWtyhMRVDsF",
  "key37": "2H7rExSkjzzdQCyi9gGojBEaSytiC3BiPTrwF8bhe4t67tMmCyMSPzqywKGdRqz4A367nrZ4r7YDffAC5urQpxrD",
  "key38": "3GnQcfoTiuowtc4ikBWDUxBmfQiqh8wSmZjZ8nL2vFxDNUghvyDL4X54dyfHB7U29NB1sq1GLkhY5HCeoX8MTC9n"
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
