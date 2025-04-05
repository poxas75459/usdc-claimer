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
    "61pjfBfnHpJaZP9Th3pbSqFbbakCp33gmFA9bUMK48iGwBgVunhAiwGsZyo1rnoP87moCoZaun6NL3iPps5yLDaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXHWFu4NYuaprQg2BnCRLBzgoMu9dsu1ZHMDcR23ajRs3LDc5JwAiFgNpZmkGANkNZHSJPnoz2zEKscVnbaruPF",
  "key1": "516tYUT2GJZgHh3R8m4NArFN6s1mvWKps26VNq48uQjyH7mXEwq43XhG1JqaH1Rb6kUDLos8KyP1Ek1b5XqpCLcJ",
  "key2": "3zjRTQCTHpNrm2aCDCSVZhbLX9geovPU7cD9qFPYXU7rppBD6poYcwEvvww5VWzc4rEZBcioAJPkvETRq6ayLL32",
  "key3": "375DWgGejZVPTaZneg7S7g5eKivYXJK8S4gNxq7ELoAZaF88TUTpRSfGYVxRv7oNcDJekkerQjWy6jS4DiTAbBv6",
  "key4": "5AAkW7i78jHi7fbevxezwMM9ajo3mqXTq9kgin38qVLE2SRUqTwbSFmnbMyDCSrsrQV8S9vXvTLUwK3gmk6yG5x2",
  "key5": "2HdrxwkVpAEbx9KrufNVxYkzaziA4RpjqcnB9rCZAJb93otPLWUcLC5g7NSzy6mbaJAWTyJryQzDTbLTs3LUu9TX",
  "key6": "3aCqi8RE6hyZWjFEEtMzHkVyVpCVKQtQELBwL9o6ji6wfmynfd9BtyaSiWe7irmeBJFxqpxQwex28ByasnNxtXKa",
  "key7": "5C4Rz4sxDHkTQjVrEXL8zwVed4QfFuW3zPoHotLJMT6ZcuSSWwSRwLqNmPFNehnqn5NRsx37d8sodUmyGBvuWyAu",
  "key8": "5jb8PZyfmV2pfLaCx9CQiT2sAVHGka7gz3Y9mXAkKQCHoqWFPAzcgssxfD4DeEUUgB36mbwDAmRUo358Znip6J6k",
  "key9": "2mKX2hkQukTDf9pQRRaaBu9yAD9wcc4pmoDu1tTRedosjmENy6d7TzhaajYFaWMBbJXRmrQnxjNnioMLpkSfSjFy",
  "key10": "36yGsvMcXhZESWJes6WDGTkJWsXf97Wavw9qbUT9SzhMWjFw6cspkjrcsqFkvJQacfuCv9MjGKZ5JNAfnekoTBTz",
  "key11": "tJJccUEG4t3PQhL42i2p7miKt1axDGE9M9bCrZjABWxdhP9mnTUst9QCMmnqUaonbJnp475rivvEiCYP1PD8e2K",
  "key12": "67RzabddjJL9tyKDLHUQq8D1Yc5UCBHjxcfvkNgM4WptbGnQE7itUDKaUDchUd6j25XUssxARWupARSe7hGjHFxS",
  "key13": "tkX1waxBPE2VR5TBScwjXoa1qiPwCo8YynSpGxYRU25CG8DenQ375fNyGA6DQ17iMEvWP5sh1dKEquVoqpbcRTt",
  "key14": "5wiAuQ53LsBcFJr65jFfrCFzK1C5q3nXSmvAXGMeCxigLX5jJzu7T6hMyuEdnfpzY5kaYF1dzMqPwQ5tin3EfnZD",
  "key15": "V492FdfJA8YwtboD7i2pkE5wqWjU5BCv5EMatq3QLzud19C9o1BksPokyHYYyYqaoi3wTaXTMSDziU1WK4hRzNG",
  "key16": "2wK8NqyhYDMDNAbzGiqPy5GRxswpjcJzDdQuLFqCM44Rih5YmixHyYyNd5hmAkAJH1omn2waRxrdtJFw7MaESCp7",
  "key17": "4KjWBvRi6pXZHekfm6m9CxybB96Ph3HmymaNbQNnkV4jPpoHRyRYzepabjHqHqiXBCZZC5QxL35BpVrEjj8y22hV",
  "key18": "5WJx1hkNmze7UVjYBSXekBHpuyn8V2Rv7yjVqVLUvbMewUece995HU3gU1ChxdjTioJHdQCUNkpeZgEW8ymBycYT",
  "key19": "5Bn9Q8SgKMy8moLXZjivBYrJ7j5wyrNr3ge3KLwgx3gsP4MajvHrzki5K3Aao9q2GFeNChpBfCUrH59QpNHEw5Y",
  "key20": "7XFyW7Lr2UerujXkjHzzKjYVdTVBVsv1Z9xGiDmhGEUk3HXvfdF8Hkk2Y7wx4hnkFRTpjaW4wZnA91kmcTT5Z2n",
  "key21": "k7YDwyfzmMFAHCG5Xwr6SGgZnzTgk1reWF9AVd1K5GcFoVEBTrr82u2th9DQyQMHQRw8fuyTrtGV39zwZiJaffE",
  "key22": "3HBZRrVU1Zi6BXiFuzYxBsoCxvXbqVY3y3Uu1ToJ6GShH4GccME93rVbeRQ2M274p6coguSLCrmyzbVULzf59CjX",
  "key23": "fbaJKk4BjmQP8Y2Lw6hmnyWQDi6z4xhkBQjAMfkzazVTcKjqz3rRjNskk6CnqTsM4x5Vw8Lzbp62DaM8pTr5LgU",
  "key24": "79aJEXSznmCZn7upy3mJJV1xkSXN5Z1mRyz6n46SawQ8cHaHgaa4wwwFsczE93FZFNn2R7x2gkS1N1URBUUoh8L",
  "key25": "2GfcuQb1Vk1Mr2s9gWgjKEQnbpeWU6g5ovTptkyhEacb78nYx9dF6ZLErTF1ACgqLs9yT7Fh94RUvbx2yUTBAPAB",
  "key26": "28H6HJW8JzbT5M7DcV3KqTewMACgcduMwzNm9G4UjTvTuYfyDPdSbD97TZFuKSRgiLfQoA3SxG52kfupnwYatrLu",
  "key27": "4SM1rdqUdd2pjp2vBipjxtDYrZVaCFkDCSWXZiPiDxCDQbAAi9TfL5mkXkCAwiXLUMsCy9Uk4KMM2bHXszy6TXTH",
  "key28": "5ktBtyducMSsK7EzUWasH1qydKwD43vNz8Rtbvni3K6bnRgZsfb2NAQs82nrB2CsetGUKYjbXdDNeKSatbJ7bRkh",
  "key29": "4VqpQKo7GtvL2NLTgK9RYbJjRyb3xcTMrdfMHFSsLKJwpQkZVWnrbLNjxqoWHmGuqNdZmfGkuMnvPD1VP4tBCi4K",
  "key30": "253SK4W84aiW3isXKNgQNXe5kGNmmwhTiJMhYY5zWyVN7q9Bf3LETNNs5Q6D6vzAA85f1cyQ6tPxkq2uVA2mzFEY",
  "key31": "P5HDwL2bX7djPJS7PtLTBtFUSiD24mXpECXfL8qT4riZPHU44XmpyEWHdStq49LeJ5F4Cb2cApzKibe7mY6avRo",
  "key32": "2j36P6vmyvoau2yCtJXia1hDsfZZqG3gPBdwz46ejqChmrRsRFwk6mT28wWUfqiQW6TuJtBb1pn2CeLjtmjznbFj",
  "key33": "2teBVT7U6HJYCfVtEPuN3i536PzsPMxgENB1F4sYgMwbTcd3VBsSHrPeSmqeFUX5NPpwrJ3jd63MpCfYakam9rRU",
  "key34": "3k6fXPQ3euBrwRfYiJ6np95FweYa6XabUb8Up4k9TdVmcvxFPHRm9uK2gyvtpQ7fpW3GvFLnV9WbBskGf9izKVVj",
  "key35": "55edmhF35SHKB3pxGJF7tBdJS1UkjqNUNWKi9yg7xYo1bEfkpgG11yeDFRNQHWy8Ub99nr7fsBZrg7aggZz38gys"
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
