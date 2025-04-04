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
    "5LEgjkwvLtKnE8jos8wQCEcbt8kBxvep1GduxXTtLGGE7QeZEVxGGe47BMWBZHcodi4CogUx2V7haxmvsp5TkD61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zWoppGhd73fYqoBpQDNg2sbmRZ1F3ke958MjxNdroZb8q5PsHwnvGm9Tf4ew5QDCr6vZJix3AAyfM5MX1nTXFn",
  "key1": "DSsv2kN5mCYPy9jmiE92PZ6Qcaj5e8rYfpfP73nf4moyMwDBQT6rRz6t1HjTPHyvJihFUW6qAnCvYTj6m7YRawV",
  "key2": "45AJjXViqGugEH3cKiQ5Z5uXQPzYzEJEZQGAJ5knRkyEk1vMJmUQ8VUszMsYXxb9dnKDLtRjWCaNhNKSDripdcgE",
  "key3": "54yZzkr9jgPbXjXQSNp6kSBxJxaRdLY5i8iJCyUuzuKR9HgQ9gT3dP7Srban2TfbBWrtjab8fStb2KDCAtFA4sDR",
  "key4": "54Lefv57NKctnTf6QF62k2rVvtiY6GTXmtvqkRLvknTxfVfhKWLbkMJQRe3fWg45yzCxg6bjrPaDZ5nsx2TRdQGB",
  "key5": "4BifQGhcgTyoSJrBxeVbrbyFfRJrK2A7WZwktZtySkrz6CxNWHAumCprL4gB21RhNQaKuThGPqqdsAuHeiAxtsrM",
  "key6": "4WwY1HA6XNupRzfkZnrEnmqSSDgyVuwThSYK56SQpCviEWTAeCmPXwbHtQaGQyBYuxgYsChPZMoJATFRqcJEUTGV",
  "key7": "3dxGdFZGp33r9B7sTg6EJDDdFhW5tuoi9tYFVqFz87wEzKbysKdbSkGdg17ozY7LiRq27rY3UWwNwPNAfpr49gUL",
  "key8": "63HyhUWTo18NTS2kqJGT2WMuKYesoGPxZq2Dmrs8bQDyTzEMVD35mPJyThTLFLjDLUs2FsytCnp5PpssrpZhByB",
  "key9": "59eAmeaWeFwqLm3mZ9PouNDDiZLAQMFVVGEFntxVQEmUMybsBWF2d8VPxX5cMYWGh5uBN2Y5X9K3hTgdgBTf1R6W",
  "key10": "SLFLWV7rmifexDqs2BR766gHnCnhcNPz4KNGgiU49nhcuGpTjfxESEsEWA7zWRpkF8uVCeXNLrWN9ZEkFrhSwXL",
  "key11": "2HgEEk35ExmcLZL9xwwt12XedSQuZLBbPPNRhzEdESnyRgMug3pBpDQFpQgiodd3TWaganE4WwDck9fTe1PoBD2Y",
  "key12": "4qTxERd3Bcx2WPnN5FmSaq3DCde34D6prqYviZFS38nDTYtFYVZq4y3eSFADU9A9sMfJLe1axtMjipsRKK6ybP32",
  "key13": "2BogumfKYp5ZyevyqkWPtB7CMhLJ7rH41UKrYweFPyr9Qrjs9rXhcHSGpkbx3FxAJxLDtEF53x3EESfuGEEoCwii",
  "key14": "3w8z3UyntJDeSUzyC7WQRkco6DscJJFFZMkkPeQM2GbuqNrvhMCkK6KWL1pcc59QRSHpW1sKQ5cd1cyeE9ML7tm1",
  "key15": "4DyCySisWP1QX5PUSNSShnEuHaoAZjwMP2RRyg1DsSLSUgAogRwQPdYuo7mJg5GUtKSjPDMt9hwWUXDfCx4KBpNJ",
  "key16": "38akR4vUFApf6ormw2jMhKSdyFisyTRrFq1BKF3g1aRvfajHrkUH6pHZ2Bodbwoj2uLBNNwxFQbPYHRdht8M7No8",
  "key17": "5hEBAz1VsAPM5ymkS4cFiKsqBsqxW47nb4CbJ35nuCZDKq6TUiTw8AD1vrad63tqxq3cdGM4CuFbZTkJ95yhLDt1",
  "key18": "3K8JCEASfdkvXVFow9DgRGKiMccbs5Nk1i3xCdNpAdM9FkE27yc1XU1xAAwBqCuzQfcxy3kisCu4qdEoiztTFL8j",
  "key19": "4TdTyqExcmaPDfXb9u1MZvNAhzZtQPAV9ngm6yUDgkRNorxuoa3KqebpaoXffAFaVDXzQrLSj83qnxf6Jm3WW68j",
  "key20": "2TpDRp3XBZXNvusTtXFxgBK8h2JQJdeer3iGsLNPvGDn9EyHd4dsedcP7wa9nVXhEcfJGzi1Ekp7qCcs386B9tZA",
  "key21": "4nrPkxEg8Bmf5F6W4a5tvzkieUnFNQE2rUQEjctF3Zb343miSLLTVVqzypDjXg5iZPkriEXEpZCJy1DDrmSoHyYy",
  "key22": "3dTR5yfJQt9huAGzkN4bdm8Ujh5mxztvZuEEyCNu7qW5gVh79trx1sfhk8Q4giVjc8vBbCnMZn9ovSbiFY1d2ZKd",
  "key23": "MR8pZjYHtS8PoDydLcWAkusJ9Cjis79CzGpBkPUNL6coBoV4NgD6cz7vTGeEFsEhLGbAvPskX8KSvYbtS4YKKhF",
  "key24": "4zdZ8seNH8jEHR9HiWj3nz4d5sww1wrss8pq4Z17JnMsdQ5yg2u7RRtqwjXochLUtmr8ShQZq8Bm3CRnp7UWkoWi",
  "key25": "2SY9o4g3sihRNwtqKYWLxUQ5749xDYfpkQCKkBpyRieysM56uBcrpJaj4o2cnKAznL5zBGcv7rqkWMKgTiUfpZTz",
  "key26": "2rtgjeNZE8Fcd6yk6agVku4AsM9ApyKmmvFAYLs6mZDqTZX31ifz8m2w4LZ8j8k1usG8wDqbK2WEnLENeBCwaH5u",
  "key27": "2YBtmxm9zZZZQMmj6ieSynbPNBuCnTdY5ChtdVUrL7UMLjTiPm1MroqjBxibnVvCRSZSW8xk23tBajfwhNRLmatp",
  "key28": "23BgiS71d34mA2s941rofrHACf1r91hzScbpt6LxripBjhz5vd8idw53fbwyEH35VxFvNhPuL9rv6DrGxXABnCp7",
  "key29": "5YENdZHvraRpmeF5WAALJEeJLXxypQoMMd91q3wpmB63xKbFhcNKKkyWej5PNxXPi9Cs2HcETaY8BbLzcCUX63bp",
  "key30": "3B3zbKzEEg9NZHeWsUTjgyi52NWSQj5XBojSkpPxehg3qvtF3dvgiwpUmHUPdos1RbzmXDvCpX9rExZFM5C7QS34",
  "key31": "2ct9CxrNc1CGaEBb4aGM8UxMJceBhVvJ5WmyWz3gYNBVNMKeXZnpoxHPUHzoLWWa16j9ejn5ujJGNSphX9BQhSgo",
  "key32": "Gt6xDhSBQ59dAuFVghSqrrjyooNwn7ttZciqLqM2HTSFgQ9qhw44sEbd4LGFX9dB5PWfSS5vbXr3im8QG3GCY7N",
  "key33": "2QZ8Lpe41zyHUeacWXseJ3ihKj1giBihKDkH563TFuwKqTMh5h76MKuKPuqNquH9tdGbYYd67ie7e4EXKGeaSPXL",
  "key34": "2R4E3gMnkHHcexhNaNjF4CYVxpstgaEQDzypPBdEgFxeFqk953kB9j2AYNqfSSnmmY3CEMWwURVHgEJwuzGizHh",
  "key35": "5YqwhgQgsc4tJ3xg4CKu474c5RTWZv2fGvkjCDApGwQwYN5zDiyvMdGoYAxiGThcQY4KMtQ6CeL6s6UQYudnwzyy",
  "key36": "J4ahp1EGnpg4S3DJgcVT1aUGdWoay2q2JnVT1u7SUvE68Awdzvm3GApRFZyeQ8JEQyvGmb8ny2rTUtrUNnwPb4N",
  "key37": "4sFMDPTrpfzyhijecRbEhjUUt7JwHenqVAvcHqumJuV8prFKPWwcAd2vBPBzPLxyWustcm5qeCSWjTkNV8yWd8d6",
  "key38": "2R1ALW7jrQr7ZteDY9NKYxrLZp5XYcCY1u78iL6zYdovHigi4RH56qDPHn8naudeK74JYzzZFxqZuEiakXt8gyDW",
  "key39": "Zi88fu8sejHYkCvfndJ4wsKFEYrjozXjDRpq42d7fmtsgQTPP1HV5nJzLNL7Gqtc3S1hEjU6WS7JHyMfUKzrs2p",
  "key40": "3e6f6L6uefuBmymwmHKUbyPg3FszCkvuo1Q6PMq7qdPbpNf7QweMCDFDVDJMuCZaYUhJ9w7PhAvd6yWbRmRoobUe",
  "key41": "3VqUxM5FxkjaEsxezKNY68quF4UJyx4XbzuyteDwya4ToAxZ41UQsuhaTiDG4JF3qnk5WpiqsXo1f3szPpf4iVo6",
  "key42": "2SWig546Xz8R5BhFYhJqLDuCDgxBiXpjevXd8hcrUgLBKeeCrxaE9HgzAC5R8byNpitaXgeMx6E9PpaEMthCLAdG"
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
