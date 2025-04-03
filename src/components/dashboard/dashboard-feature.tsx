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
    "U9GvvRLNGv1UnAhpyhnoPCn7S2UFP5DJB9RaQnRWhjPyTjawEKQwQLQ9aZgn6ZU2T4xyUMH88ycCMyzXJpaC4rL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usmyTJjjfEBUGPNW5R3Cw1B4YpTmUxvVFQBUQeH35HcFmqMkRu7Nebm8AYdSczWkeZR3NQUSLZosF3jXmeVvaQH",
  "key1": "4D9dQghwcsr4g7xNVj2D4YrZ7vZJZxZBpkHL8fpy8aRhvVQVjDF1T2rGfJNvsrkXqW4K9kLoii1CeWdBXhyi2VsA",
  "key2": "ZGorLXYsv6BSezSgfKfCBCXQzWYm7dyf1ecqJKL58QdUjyGF5TfNq8TM3pfo666J2x436CfQDp3MHT2uJtQGF3d",
  "key3": "SfvJPGiHSknuFeaqVZ2hc1ZGpyk1nxnaaVXmf8Sv9jhw6c4mko5PRin3Cn9BC93vBpMCHVKpJ4dHPmketyEaWSe",
  "key4": "4Kx1UdbVJT5kJssQpTWuUABF2wjTgJCMStuQB6VatwMzuQhiwaTzyrYdN2oztQfdPWdhDmQG9wY4M66D2Hqwhy3Y",
  "key5": "4zAiE7LMBSHrrV82udSrSqESXv8PVjr4e5UHrGddMJ7ejdu7iLfF1xVrz7zRLyc455DPeyyiwuizdFBgJbCotEJk",
  "key6": "4iDKD5bMuse4BVs173EqPcodt5NQLZu2P91jX2GLUGXgCDG5bnmibVDiXx5TdcPLsWR77ZXVqQpoiCHiM6ywQTG6",
  "key7": "2kRojaoChdbsPKtoA9a6C33wWwTjUP1wwL4voBvRnW8WGMgzmSLj5az4HDZp9JVEGEM1QQrE9tnZs7Vmn6SsE5Pz",
  "key8": "aVFSrJtEsuV1W9WZEQWf8B5GUKo1AeJfdz2VFcKLGvUoPaAcerfKswAPfoG8EQdTMJ2KatNQRhxqjgwDpvvCfLg",
  "key9": "42DUVT6obmBXWhntJCohV98DLz5ryfpsZrmhB6eC2RZo86pdNuiL4Ko8Bo5zp2AP3t3WrZmCiParRZjGuLtaqUtb",
  "key10": "4d4BN3uMxgGW2WbrH1bJvKEFJNAzapKpSHf7gbiPasr27bRtyEDMBH9y7x3rD4fy2daSmyS9o9YJtbZMZjvXsbFx",
  "key11": "2zy3rBeNQ8wvTzWHFUajX9ipG1RFapgtcBaDDM64KyPTj39UZ5f7R5cxvde9BxjNsYvHU5iVvrKvqiiS52AiiMeJ",
  "key12": "625HCQEEqtCLM3qFfpDGJPxh7HKDpwj1sjZcuXANN8i3W4wGgNeevYqF1uNQQaKajS49Wo1TrBrwpXmDwqzuf92V",
  "key13": "64yP5hSjNZixgoSpsrv12tNxS9gw8kZHRBpAaX4oe3Zf6wY1gfQCoMoiWkZUNuJh3eRUNdCFTpfZU843N5AouQdc",
  "key14": "AcC4v9BWSN4BUo6Z5xTv4N5iCQfEHtX6TENZNQ6nRhkq3r2NpWXjQniXPVR7BynogyM7EigPxoAJ4kA1oLLoB6P",
  "key15": "4JL2w7AWqjJ5faXR69L1uxsvcmw5nVh2fRuDKQbsUDt1fz1VC3sTZxm5aM1B367366wrq27BbTuuytGTWe9trJrG",
  "key16": "2hB5LLueE1FLFXfmWLyJmTb44sT69AfSg8MBzeE9GmxrZFkBVJZFRG2ZncBkPYhQmijNSw8dazLJhiQJVyWfYHH",
  "key17": "2aCnmfRSuqXEjqeut3yRR1wL4ZBDQAKNXXvaWq8BXzXYm4J5rXRWebjGUHqwrvdVUEQRKTSqzWqcAp3FFo2hxAvr",
  "key18": "4KGiN2JhhmiVauwUj2pv29PpsjUGZFdATDFQeD9SKqr1PEHohmxPs9qK7YUbyoqTpAVEVGzupGZMicuupSBjrtMD",
  "key19": "5RSTKmB47uiBx6zLQYAbA9xy6s4aNktKKSQBtg5gAg8CP1cBesJURqBpHXiNnAZrU5g4TvADrMCbZyKRbc7A3yyN",
  "key20": "3jo8oyarHQcGn42ngnrcGockVZve1XALxpBSeD5g4y9Mm6r1wKYopcwr3v78bXAqJEE5TmLa8FUXdEzWL8JXopJ8",
  "key21": "3NfZ5dhsrvnNbt5YUV8MJPadm7MUiNyzvnBdVboRRpjbYmoTzCy6aCKDHTcwtwUmb8ALj1Mre4cBcvbQXi7PkvMK",
  "key22": "3WabPVwZsWDTK3pyucb6S9J7SmNvEz9KZfBzt99b1uYG44eu5WAxBZtsPPyZEKEAtNygm3p4WDQRCc3f5iFJEt92",
  "key23": "5quidmjEKFD4VXNtxmJ1hcqmpe1n1A7wHuhGSTBnSRpAM6Ax4EGfvfXnHy4M2fNcoW2JdM5gfPLcLtTyDM1DaCPQ",
  "key24": "R8pSQWg4mMz6nE1ZDh3xHiZioqWrn7z3y2nktnepZkBdeusca7j8f8qLqk3BjXhpEuUhePFo4JR6Kw3tMDa9kpx",
  "key25": "3sGnPDEBPvFSjrpNY6jtnePxGZZ1ACmt9F6vg52E6grbEcii8MkrKNTMYgMgKZbnbwoK3b6XgKVuRgaTGFiFp5YA",
  "key26": "3BRLqe17GFH7gLQT6uzjQTh96xhhkfmBoFbcNym348YZRBCWsZJaHyieGjgmFQnuohJZVV46hAet9JvRkcS6By99",
  "key27": "4k72t7hyY3KiGEs5eGGFFohoWpympMBobWBeSabjk48Fd8VkvfFjW6tdAQzAMiVY8tyV5abU7xUQJQyEFdiZzgxE",
  "key28": "2LqWXm5eFy8uKTyK9iyZp5B3ANRUUjv6GLh8B9d4yEtpg91Jjatr68t6dqMDLB5rpngQ3HFp2MKpoC9dPuztKr3S",
  "key29": "Wqhp7SH7hcaSjU1ZF6qgYQhH3xTYw6jHppmscKkQVdiHcgppHNGJzpxs2qnH7UuK4ssVV7mRwJDQkTfefqgnFph",
  "key30": "2m6HLjoZcfyibPW72wxTugd2ai5CaGcfeLCbzmyggPPirrK6Zuak5wmnL44DZq5FLfwZ6VmXFTyPixoDHavmyqye",
  "key31": "2xoL5yVeszRKRMQqN8fYdoNXtRfV76fHoNoYC796wieQBiR1FzpEPb9i4psZhWarjsmJiS545HFjmdqCcPgUzB3u",
  "key32": "3kLSqV1nMemur7TpzYHe5vgup1wt895DcyeJJ5PjFGZAkraooY3CuKhGnQJeuLKdNyHuAoopZZqU85Hy5wKewyAV",
  "key33": "2FRLHd8fjBW1jDAvma31W8pxxkexaRFvTQhSoYMKVU31DDGwVoCaA6Ur5fv9m99boAayDRd2J8V1VcRruQ7jGzzE",
  "key34": "5BYdYFXzacVdHunAFXY83XiCqAjJrLYe2UcTg9mA4MmUjeHAJ4pxMu9R95wqMPyzZVqwK2S6rZKyYodFoahQm5Up",
  "key35": "3YAahhdPFSdr1HX8Pa72HUhVkG1zyqw9Eehj62o1PeGktrCUHR3a7Lw5bjgGjyUEwucvZBqtxc5FubY4SAGRbQRS",
  "key36": "2bgaVPtMNcsjq8b4dWTLqeiavgDjSX1q2vtm6eWRH9FS9yMmNbegBKQjXSrKAPbMJELXAngKbYxD2qAjEpCuoZ7J",
  "key37": "5Dp7BQoBgfZCFyaX4Bk9nDngpwQeEGbmtwhp6kohZeFpbPYv5uSfsKaSAaanQenuMANfTUSa1jPQToQRXbnDoexq",
  "key38": "4ftQWe9awj7gw1E7R6o3j2MnUHyw8HMhU6uLA5Ho3peK2Q6N1y4UWGFbULSKUfRgbgoKiMZ9YsdAfBVTeuSkMULQ"
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
