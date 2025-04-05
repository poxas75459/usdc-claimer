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
    "45tBVarkVFNTLRc9hiHY77HbhqX1gZAW2KMCkBAYbVnmceYVpFPpUj76xDD44fRCjfZWYdiywMfZrtX67zPvHu7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ByUektLL1dF9ciuKTvSk4eojga7XrdaQFEXZDFEZT5oN6eShTe74r848SLwfD4unsQdxDWe64pUcJagC4u6p6Hx",
  "key1": "58S7EtuQRvCBeyLiCsaUS7pQ7znkDAMAcW8d2weFuTtqD9VvAnVS337kPRLSzbQBKsvXnWzEWTP6iZ8M94HJqHsV",
  "key2": "4dXaSGHLq73y5bukRDh2V4GSjGg9Egu6gtJMMjv9vgcQmGZxuYiCD1Zsb4Gw1RwHA4qhreHbgiE2VFBFyAoYwe7E",
  "key3": "26DqpqPmtzGaGKWQPBDqzFmW9v3XPi2cm6Uxs553DhDMv5UyoCA87Z1j3JQzab2Lv8u9Q41yrtHTF6E6496KQRwS",
  "key4": "1gg3GWodh4N1oZCmeN9h4Ufd4A9dpUcedeupw6z1kZHtUpR1BsSx5DbtzWYdbVotj29XrWQCAN22CEBHn3oYApU",
  "key5": "4tuwtEgKxx13rYNzXfabU9s9iV8hkCTDiBuJuWLnran6Uz2Le8fpFLGDoWWDJeasHHv1TLhdg5TYzLMaitYHKHTG",
  "key6": "4mgq6vXdAv1oUJAd4NYMeuNNeHZD4EWucnjTwq6mS9X716kssCHo4soAkWEr9p8SfKPbriS7PnLshHJGXyaFDhVe",
  "key7": "4BvkKCRtVUBB6S6J8gUHBai1Teo5BUYeHdDUcGvj8dRNcfMkbVVqY4A7aSP78uKpJtWyd4ftmD3YpotwBnwf2ekA",
  "key8": "4g5XUKFtafMEMD6g4A1Tncn5eBmNDEzEPjMR1akhygKt2x23evbvkhS7Zp3Mb5NBD9J1ihhFPKKe7jjNQrQQeQ5N",
  "key9": "2noaDB6pGmSLDq1wB2H6seEsQu48m6NFq9qo2egTomnaxsn1E1vCnWW8keQSN8Q14SanRS2PmGcgfAwexZo1c6GN",
  "key10": "3MPy8hpeLnkS84JVgsfxmKuNeVQCTMo9yAvEkKC9zB3zxq7n2o8reSoGcGfjBpKyNDsJ3mPgPcCz3EHgHKfAVFJQ",
  "key11": "5NMaeYBEcMDmEeVJb6Dvcu4r3t8DifRvZDA1jJCStQK1riFofJj1ukobJ4rXu7Zz2Gk5zcEFNjCzsnDyd2ikeZdK",
  "key12": "kFK43FuiyuwWcWzuKM7XnkXbpsGZxQ4j7advUwHdP3auaLyPLtUQ9KghyQmdsR4EdtAw5a93TLMJo6PKa6CVVq8",
  "key13": "55z5u1afCJ26BMazS79rNA8bvWh48oGuyvozk7bpobLqq2aJKnu3UJELxKC8VtF1jL9meRTWxUNWseAWdebxbiZz",
  "key14": "5W78p6bT1yWZHJmjTzNtjGa7NCtogEodMe23srymULtVai3A1oTvuKcfZaYvGuTzQh7dcMc5pmwimTXGuk2TTNd3",
  "key15": "reboggNY5YemwkYUH18ZZ6jPYN2PvsrtK1ocFHMQhDYPbYrU8W19kU2Tmzjs6Ry3atu6vJxeHkHq5wiPrMi5xEV",
  "key16": "3Ja8KYf8tAsQRw7d8YqTYYcLX2wsHhCxfGS8jJVPi1Pd1931JuAZGisgfC1qTPCEL7W5sf1cchF9Wm9p29M6wQsZ",
  "key17": "3utmd9sBXoS9yPdk6NRTJB5GwLaDXpqRJVGSfmdUErwo1dHCxrnjsdWan3Ym71kjCGErsW4XTy2GtjY7soYUhQbK",
  "key18": "M3yiCjtRoA1r2AcLy8u3kfFv1ejouYMYKGtxwQaBwJqGxU79rqgLrC7gmiRTJrQDcE8pjU1tea8zw4AcZTm2BcH",
  "key19": "4eYDXr2uUBBxjaAMRG2CzKX4n2PaVfgWNsf7XN4rm7n3AXB6V9RcHi6tYtzrLb6Utz8a9A3xjZwDzqCbHg639xpu",
  "key20": "cwXoUNStR4t5vwn6RSruXmYftf68Ja9geXrHXKvjT5sXpdwrTaM2X1AvVxT3awGuZtNctZLL27xH8mt7csMHf64",
  "key21": "m7gRhYsZuwTsvuqGx8bvejyWHt8Fk22mExyaC7BXJiFrtw3yWthSGi4i6BBQAvx21FtoNpT5sL5UDBRtkpd1fNH",
  "key22": "3ZecVSW9hF91zWvEy5mmpKkT8NrS1zqq6rVm2HNMs9zJP5hwSVEDM1gUtNDNxJftagWNHrsnCtiXkosgwpVgRHP9",
  "key23": "45ZKAiq6TGNbyWqPrgJa2xDZNZCtuT57VgM9YW8jJAarTkiFPCHQQsRzX2v7GZbQQ4bFyY7UYBHeKe8zn7GZEYkx",
  "key24": "5J367dANL1QK6ek1XWeYw81U8gqa7E6M2VcvjHS8fL9QeDZVexBHyoGYHYKbYMqY3wqBFjXJ7FkmP17PXnrhVnsE",
  "key25": "8iKuFLEvnxQZTuvto1rbyTbUzXtNHbt3RdfSusu5jPXQqdbUfNHPhKAjhGeWVeboBwB1NAmDuvVQJTBBLX4uZdt",
  "key26": "3u8mPsC7kkrvZFDXyeXqS1TgMUAEo1o8mnezPGHX82dUZkePsjVGuVdqKfHNh7ydg5c8eBaRfdeVDRLQ4Dvrjkt5",
  "key27": "2fNT9HKakprar7tiCZzvDMnReKGZ8t59E6MhG3VxytFzuJ15npEfjb41coTrGK2pVrjALcWGmX9zb7QMopTPiER6",
  "key28": "jF32c2Nc7pUFzH9xngCpq6t8Kv7uzf73fSzeG5aeBEfwhD44iSgEkWw6vCFqS4irxZ99JnCsPCN4mFtC93x7z29",
  "key29": "48aJhZ33n73LCiSFesRXzhLZ8cG6fuZ65BZFL1cdrHhj1eQfd8BdApS6YaDQFyF9T89DKU266Rj64uuaRPa4uNZg",
  "key30": "5EHU8aPLk7ksSxkWiNuGrVqn8R9RnEJSsyMexpcemSHWsY36JH9rJfpMqMLR2G3eVVPW2dBmoednCPwDcB4DSSRU",
  "key31": "3yTwMfLfRdjVqs3Xu3SZCf4FKyyCX1yksFc1nJJ5CwBV4nPvug5qQgmEqyz2QHyNvSmfjQdZHzggG3FHUBzrJkSL",
  "key32": "2EC9B2Pn2fYn7ZTUxPTH9RbqZBVZD52ikSzVfaNPYvoriPxhVBRrV26QjHSMimrQXbxJbVm9CHGMbmNyXYhdMxQh",
  "key33": "3KHgwiRuMTcj48Y8SRCznkgSPCaNtGoH9ohzjqDVkZ61ZNeLMUzCueyLJB8ZaPeVBuiPPz6UR6W458uiLrWDe5KQ",
  "key34": "5vtYTe96SE4SRdAx3TQxPxorYZZ3Ta43hYMZAdkXPgcUM1icwh8seoTHCWmZzUjkUAppvfXPEzgJuT2GpKx7Pibq",
  "key35": "5wpZ2gc8zEn6iRJiWqmfWXnJQXBcvexjaQ9mtn2mHhVN2iDAfJMLc8Qbg91y28YoDQt8DkEVBF3NEf8y79gzUiuh",
  "key36": "4vcUVTsmuZUaqiN4nkTDFvyWR5r6mx6MbGt7A4uwKxUNDiBjAfGCv2BhbFN8af3d61T1d35Z93NtzzUoeoVJXEDV",
  "key37": "5E7jPx2MtvFiPXR533ZaaWizbQj1BeSM8fmatkeYKKEnmqq2qKtR4gPNkwEkQLgo377AHbRnLu7mcNsRgoAkqWwX",
  "key38": "3uWCdz3DAJeNrJM2sy2YFVkMeYRRh4J49DpXhiHrJkY9ouduMf9mwbMvssTZfp7cuSjCDJ1sUobgqYaCaEtPvTZt",
  "key39": "28N7F5cwNJTnmaZ7Z3wVkf86NEdQwPpRsnxsqXTBbuvMJ8Wu2KPBwkvFjLsGJfcHUVTpDko2qC5f8HAMvLFUXnNd",
  "key40": "5BtyBEMvFs6Ygp9uK3xUi6uoLscepkCzQJexawNLHZssKZzS8nNik51a8vUmkZpkGbXRXHfhj1RemVT76hsp7qwF",
  "key41": "21drPwLRLjEbVD1V9r8H3yaLhnNYmUwih9kbDRCxAxHCvNhM7WR6A1QEZATRowcQdmZgc6ViGJWc2bJsM42bVxik",
  "key42": "3uQNr82AtHymAMYBbgasdAaGXUJUNtJWpJg9PSijHHUBnqvEtHRjEydTiWPDSwzwMam7ibiaBTJiR3g9NMdPi5Tk",
  "key43": "3dKjpAuRKEDjQjUo1k3BbRWtRFrQJpuWSZ3zF83d6Vinkyno6gMAAxg441CnKkxVkopEN9JSFrjbun3CymrkNNjR",
  "key44": "3FRpaYbhsvpg3vUEDeBvm2FBFE2SQZjyuH3RW9kLT7EeC3QxfiAEnxdrNGwKxyS2NPjyWdtgk3MYNvK5SuCuC8F7",
  "key45": "5X413WLDjSKKQiJEX6u9aJihvCTbqX7WtcHdeythGgRs8qKDU1mjAZrkAvT9GbyzYncxZPPRfsS1jJfzNVe3qZwh",
  "key46": "2hn1UGqTY1MUPK3dxsZdzGxZLKuGi67wQRPnqfFhPQNC2L4zhbAPTssDGGtus1qS2JPcCFEPsbSmjUBcpGsoMknt",
  "key47": "3wZmziKm8dy5syDBeDRjg5K7BiLFWJuUo7HQcep4MiFB7kigMDT1XcyCYnoQ8jrazmGm7GQqE7QSqv6HSRTneZbH",
  "key48": "2F9p97u1jKuhQiKaboDm6exVbtDZW5S1gJYw21ezdgDoQjfAzKsFy1i6EioEdVVVJfAbSWeiZ7jyenyuB5A4SePW"
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
