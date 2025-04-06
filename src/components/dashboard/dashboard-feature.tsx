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
    "3adFNvzfBYmuwF8Y1vSTsNrXQMmacpWBy9J69Z6VvQTajpQ31xyYUZDfPRrQZR9azFto5ju68D1ZjwEK15ZytVGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JpdJuYdb2zjgwpCe8PQUzxqR94DkYZ5H9rzMP6ME8sqNtsGdFHoo9c8ruaZCRv7xwRwm7AWKYvHvqebcnmnd8op",
  "key1": "4pQ5LX2tuu6jMvnbGLqBTPnJpy7UqsJdJ6umgfg3z7Bd9SG7M3CNEdFqhyLmTz3DvYJfazogcSXE6Rz7HbqGVSNL",
  "key2": "2fvMLzaJKQ5MDFTH1RHusjvyBrxzpw6F82wpVd5e9yH8sWwzWaPqPFBSDruJeFfFERNSFnXn48Xirkb6TUB7kuRu",
  "key3": "R18n2nH6y6CHomyjyPe2oAVfaNktLAuqz1BiAyMx95RQDDXwguQsxgjWdwpHo5SGJPM6EMtDFhaUo4vSKNSwYbh",
  "key4": "Y6kiE2fkuStu6oWzy5pqW8Bi9HTCmL82eUkRGAp8u1AFA7cR66ococqgD8YoUpSSxK366q1xvUwBTdg2YJHcV9z",
  "key5": "4jpQ9Wc3QRDbiucfSjuXASNRiGn3AtjREk295oSU9UgXmTrgDK3yDZuPJUGAnSqKJhkLr16x5VaSRfpheiq12M3J",
  "key6": "2nie8nVqbaimTLwcT2vS212NUKKdUiNs6gxs4NsZyBuMKPYM4FUqpGDYWUiAFC63TZPXHYFvTszZyAUzhM3inHbm",
  "key7": "2ER35QHsLv4H2dVYYsEYxT5tt2JDpp2veu3DY3Rm2mc3LqGujSaX4iuxAXmX7czNnBaEAV7NuLbTCgv8kFvTj8RK",
  "key8": "388N81CDzmE4ErmPYXQXTBMrTBuP3b8J28oN293sXnjYPsDGhJ3PechVVC2M5trcJHbwQvxDwD1iJQo4nBQeu4ag",
  "key9": "4jbhU5XAJ5CzfjB3Mp2kq66iXS9LDrpfyD4hjxjjQ1G1vG8KyS3amDTaLM21Ldu1bpwAPWJ4QGoXBotT9GdPvCUW",
  "key10": "58Nkc4RJ51zgc9XHPJpFzxBJ7RUAfPpqM26ULQ4mQybKGF1rjEY3xhv4yeKAmhYQAkQL2nwuZ7fBGuQrgtdLYw4t",
  "key11": "namTUrmbq4zTXgzzTfQWJqNbshEk5JV5vkDcPzBF4fWueLHpx3wU4Ps7cmWuFf5FJgKJEmqqJBzjcxtvhzMZe7r",
  "key12": "2e5wqczEMx13dKXtauQbSkFLnPvfqF7A9L3qM8WKGL1CQW8fdyPAH7oWJWXWxvNAoTS5sLumWomiZi1ZVdFvYVJ6",
  "key13": "25xSAMCrqAwQc3GaokM2tPpHbB8hFBthJFpfz8M3mfymbLvU7HUj2Hgq9ighfhHnV73fvNCMfkpnoD11z9AUqTG8",
  "key14": "4236MBQfcRLqbee8PrARyHuGchE5xMasJbHZAug3RNSbT9Hm8uCKgRe3vkmuEhrcpJCX77SSFSWSE2NVqmwDRij7",
  "key15": "28EN6uj7bua2JW4K69tuHDJ9wdukFBmzkgx4oyW2hWjj6YVLpxoFFZiZMtBHJy41xszcx3xQWAuXKnccHoaFFrzh",
  "key16": "5bcUc5Ysy4kczrTP9eXWDuep1AT4hfw4FEpXZo4hExkwNgAWDHkJZGhpRDv5euqojEtzfMhyabTYitvFBu96S2hj",
  "key17": "52uNJ1dXrfEpoxVhYj93J3nhsEQwkFCpsMoEmLdcHdBAoF2DEFanLBFA63dEsUvRyauTds63CkZ8EFkfTkJo5yPi",
  "key18": "HS2yad9wvqhtiZjtYGz8g1RDGYXAfEatXjEBx9LrAnpSFYhoVnL6PoGrDq32NrGyqP5GzfWG7up9gJqEQvAXuEW",
  "key19": "3wyokhkARQg1XjnLhQ3MsX4GVLaQwmhFpMpQrzzCKrHJvz3m5YYpkPSN4uYEe375vQSPSxYsBSPHbF3kpuTtxA1p",
  "key20": "2PVGLFg9QHNi2wwLim4K7w6rFwbdAvzijQ3L3zrhy4sz3q6cFdjqNmWvaqq8nobnRdDj6rBQBC8QgBjm5iKAyyda",
  "key21": "3MSiAra7CMU1QXnqFmBP5j27EnPEUtnH5WAXkKhj9PHeZ2QVs5cSVeefFuYMMwBqDTxu5Z9iYPUAM5YLF2PZqzk4",
  "key22": "3poAT2J37T2eB6RtxPEXqzF8eUhsWvKWvH7eN6PwfzGPvVr5kB7wfbATsBz7fTdkCQ4ufje4puzqvevrvHyA7Hsq",
  "key23": "BgCGYdwa2go3nD7uu81xwAJNfxmcSYcBzZaH3Rga6TiVLaN8VJwmPodcpitNs6UXXST9udKgBS4fdQmNiNc6fh8",
  "key24": "5x4W9kd4JHyP4RxkmrGaxbVvVVUJ1hMS5z9KGpf2dygvRapy9sWmLfMYHopBHicJxgyT8mW45ENBL1vVo4NbxxS",
  "key25": "2CK37F4ecnqA9XAXAH8wxLu72PeS8LdnFFmAEfYG5VygWzft5Dh8Eo7CsSqnGcWVoAR89zkTVmKQyXnBYmDcsJTr",
  "key26": "2RjFyyy5nED14isKTAuvAxHdibAvpxMytzbVEADircYs5vDSEVm5t1r3DpruwmdR6PQVT96Q6KGBkb9mW5byxeVH",
  "key27": "2cVJFNCNRcqgoRm6jGVrXujXPNQtDHWcFnySBTGVLs2TaAtNQCjP1wYv7dhs7EgVYR36cavgTjXJFjdJHXnX8iKG",
  "key28": "4hpob4kkVPwcyfWFz1F8VvbBPZBF5WKoWxaMXLQzWoAnwUQ8npS6CdcLQ6Ezo5S7M29CSyqEVWoWM5RXaiUcbGfD",
  "key29": "5ukYCiivgVujd74u2UNH4sif1V1hdiTiu6ws7TwAFHbEanMGp5obZ5Q8z3Pi2T2rMd6sTcPhXDaU6Go9HP5B8wBg",
  "key30": "4d31RLwuw72jmtUrnxLDKwgZnbGdU7DGGcTC1uWdLKCrB1Thivr43Lj4Lgp2DDsyE2GFuwdHEpVsmfEiqj5kRxLg",
  "key31": "4hF79d17WisDpJVSLrk6jp2YovhwTnuV96rQK5CG8nSw1NUeyThFvjAmKYPr9VZTEwdx8wUQkKwq6R1S1BLHs2DS",
  "key32": "3hryisvR4CY5RZq2NWmEd24Xp2H1XBgJFMAS6XVuDmiLz9nRiAATzM2w35mEtbzRyfRaaAfs7H5QM7qcoyQwoA7J",
  "key33": "3m2UNDBLYZKxt4szaCZ9fuNcMEGQ1275hHmBVd3BrTDeGu22Vjuf8FzXiHYfYiFj3azp3ePsT2V3ALonSQ8HWpq8",
  "key34": "5Tq1YVYwiBAwK8yUouEDbFMfycS4vB6wAYBxBPfCdE7Es9Q4MzC4m4UJHktMngWuHV5n4TS3e2oCP4JbKYCkmLNu",
  "key35": "2HeCpy4yW87MwC5rnoKtbSeP6Pt3DeU6rB7dtsQpkS3JB4hAsDeZNBcYagioEMxrenRLUEsRWYvPwYZazUgreohb",
  "key36": "5wYBENLomHMirU43d8TuryoN6S2hwijW1S6TrFitbA8HUN4yNFRUEBbZdYqRfsw5nAmmNd1UM5oeZbsfVxMRHMLK",
  "key37": "2vwHW8PkqgHvqxugfJc9K1j6QNRD2m2vg5hX6nCLFyWyeFNc6pdXjBaqkKr79gA8zkiags3xCFBY4wA6BBihdq2E",
  "key38": "3bCvptBZayQVCxGndj6MdTPYRm1CVT9DciqYJRCNNPti7hMxVrZG7zCQpMd5f2wx7ovgDgaEPe7JwBn61Enk566H",
  "key39": "58z5jwYMBupmATGK55JiZNE2sjM3JLJd5b8vnErJfRL21s5iGTZHn4hsGmHotB5jwbhptvuMrwFtPZqFvAz7w2LX",
  "key40": "B3rTHzfo7aYKvHMB9FdUS8z4cfAB712VsXnfGUEEH8f6pojX4GrwXZUdxkqAiHBWwVaDrD81GWeBtThy9brVVbA",
  "key41": "2jVn5sbLszydjMg5oJ7mNv67EfaE3Qg5MXdfbNTuzKjeJWyPP5rrp1LWiLbe6VixYS8eMYVYyBTksYbVkfnH3wUn",
  "key42": "2DHK8H1XDWrDaarTNe3yLCaqNLsDG7Tkn8nHfkySNcNktTHX3kf31WAzFxThUrSZRGBqfGWza9avAxtNqCQ476zM",
  "key43": "27RE3FumYT8yJ7XJsQACek29TiQs5G3wHyiBYbLbhtN9Ycy94dtPhNjqj1GztYUDTpeB3XNxSzNoJ5ffWrtiaHbP",
  "key44": "4XLfU8SyYQwt4PYUoKsoPPAmnhYQC9b3vrEDAqrNge3ZbXfuc7aiRR1qZoXF8dDg3q6SvJxwpmULEz8fv7k1bqMg",
  "key45": "qdR537fYQ6m6YfwobzsgkvV5PVZRD8dzu7vJ3saBukS2fookurWwh2kFzwtEKnf4yyuDAwnoZjUyNrPoW5GcYrS"
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
