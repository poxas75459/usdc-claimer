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
    "3p9sdcwapJnwxjLKPJGuTGAsMXDLdgMnA8v9vL2TpHpU8ciikNh6uCfC7n4rg4mUS5E5uapebUsmUixMDiYtKbw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31m6i8HP4GgX3SWxxshHNAAFGhVcqKozpHqbfWhiuZRZKjdToX2qomsLVCuMhquoXTjNuYBBh9rvnQ92MmuDNjTc",
  "key1": "2dq3xRTwZYcGDWn2VfChuUeECmGTKASbYDVkxDZ34TVKTqemEqk6AmEYwD1ZHkG3nWWyD8E2dVW9ZzGYHy2d8Bvo",
  "key2": "3XsqHwfvDWKBZqCmzjyWzVTJqVFNGNWLQDPHF1G54wgHTE4vsoNuAcGsTWqLe4pNvfMPZ1wMPE8PFfYDJZwCRcYe",
  "key3": "2rvEi5iiX93HrYZyVzDtL49d6UFxV84ETJugn2aLsTXVBTFXY1gpnK9NgybiFAPSd8m4BW3EjHUEQDjA3PPmmQHx",
  "key4": "5aNaPLUTuSd1j7Lvh16mAHx4ccbVR2W6FGPiUEtTSsZZuBCz6mPKuSjHTUyvxbG6vHD4u2zHoNwP896y1HtKfWPD",
  "key5": "5hPY6HZfRRwamMSH8SNX1HHFoiLUebWe9L6Ywj3zwbcRaggbxaTEAjA2HauM5tMxw3zzFZ6XBigG38xLcVR3Am8m",
  "key6": "5mq2ecDLfHdo8XQXc1QyTWnnP4j8JrMCMggUyiugRrCbwbdQk9uL3risPmHho6vjotDuSpP3sqDhRYA41u445LzL",
  "key7": "4UtpfeAuArFrJEmJ4HLiQRneUVQS1gHPfZtpcXPhnUjgy8Axxm4BEuaPBqUH3u5KLytQm4yWXV5WPfDa32rv3HW3",
  "key8": "2KXD4YMeKMaEAkFBPiEVoYKvAYEhjXwz992CqiGcu4UMx8qMNLtVpPCq5PvL6AfBxy2Jx4oYpYwWxG9s3dDg2xQj",
  "key9": "GrKU1pWDhDjjXX2aNDir9vfmRFNWs2p6Z5zKtCFquZVU98KgbmBv6dCBJp9n8K3smLFZnxLbX4X9QbqiX4ZsC8A",
  "key10": "67MrcBKnaayhJ14itxqQH5YQv6fRAijB5qeLx7wj218fNRJve9Rzt9Evzs4rWquKg9FDoL9cvda1gGXLT8Aw1PJY",
  "key11": "4eSTBmPgbAY1u2P1wpNpHJumNofjvsmXTepJvLgqkqhRbASsAq8NGnGenfUS54W2uQcfRqnUaaMMmHGZY8PJ6zDN",
  "key12": "5jSVz1Rcg2LUtSKYAxVmeHadpgCaq9zCQxeYXT2EzW81wF2puoXQVfU11YwRcZHqUpaRGgPZUNiXMvyJ1QAAhsPY",
  "key13": "61wnVJo1hLF7GDXoZwrD4wnFZc8xksmkowV2LRRW9CvqYpLGRWgrjs2uZeV8JzU9JJwRFdBvVPEZWvPW8KpTfiQ2",
  "key14": "2m2n2h1J38jDTwPP2ytaz233k4AEUYnqrhGYPkSTTVtrfB9zU9g8cDpgN7wWXpyfZNKApJwE88V41p9P5F3PTEmE",
  "key15": "2LpxEi4Lm1tLSa6PhozGv5VYgkAgNSwVAzFF8dmpvSMNoTfDMMEJ6GAW7PNkTGG3xFKTRtrHXdnD7WRmvvEpiz2Q",
  "key16": "4duBSqTFttCWXdEosLoafrJLF7SGNwcUe7zbu5iFhkobHXPeYkodp6cZ3bQFu7DLFdvZ6oW78bGD4fmWr6Mz6Edp",
  "key17": "4ZsUYugu5eULxS88cz7cktKKXRGyyNM89eVshSCngyxf1DqJZ3AFNa7i6smzcbb8u8hcq81qnGv7puNJ15QKCyE",
  "key18": "5C7jYgQCSapAjXosLuBNUpFETh6KSSPamsXyFn1mTY2wCkVk2Frwszh5TZgU7CmMVLZR2Yx6gGeQoGFCthCaLWNv",
  "key19": "5tv1NyxXvHBF7YSViDbXHim4KLCJUxUWfvSN6zEGDtgG6sbf5ULGWEtrjfQ9nKPMebAaHDQF1nGQLao2hvBbGD43",
  "key20": "2neWrmpSrCZoDoZwctbxVapSxy8YP1gdEvqHiX13BzCiznopZ5gn2TDCzyUmm91uH3coxqNRvvAVmKg1PfvKxBXp",
  "key21": "39sfYs49MyuNHEuX5RnGJXumm1sggRQRqrkFCSCd3iM54C3omZXfbUd1kwzDyrUuRwqPVWAEo6R1ZrhwhnGVVy6Y",
  "key22": "4imdZvttcN3YK3SUYjwCMWoaUmGg9cMYPugGN1FoVuhfejDqp6rHgNUtU6cGyFnGkq6YWh5R4mTGJNh6ccLrFqP",
  "key23": "3fzagwJB5cds7tiDxdRe3xmoKgCGipKe29RCr1xaAMmgQ5pBjLa2j4J71XYbjXDYtzRzYwzhc67GEP3vgMv5hScG",
  "key24": "3jgxT11bY7PwEMmh6yYUgqpzUz86mdFosfDLG65Dmgo4uikxZZAxu8nD1eFCwAw3mZ4CNVwHox6j3wthqxDEWC7K",
  "key25": "FirSiGAME3kRhEdxn8RkT9ovw1EL1opxKwXedC7RXy8wFGzUN3DFprxn4EVmHGYKsTKsY8wP8yHcC2T46BAvjbY",
  "key26": "5KNKpkW7UAhJBEt3b2cqsUXhjN6raMj1TBHccyCf3j6EGQsaQP26NV2QTRcstae96RHiSJMnTB7pG7ieaPhSfaC7",
  "key27": "3QEsEuB71bXf6NamNDBxEc1qfLJxbPhApqn5vcSF6Qe3cc2ri4WrG8foy7DDdsKbm3GV3dDbQ1yFdNVeYWsdyCkS",
  "key28": "3gcasrY1mpSqzC9HRSbRD5MbifCHQiKcSP4nZZNu7jmZKCPPMJmGNvVRUEtfZEXyFQVATAWS2bBLcqRUdniAtdqA",
  "key29": "5RvpMepaAHEc6YAmi7a2afkrQBPH3hghCYKf34ZqxVD3mqkZk5A1bRYEa9QajuNM1ePMidPg8aYt1RWTrCxCjn5N",
  "key30": "5NfGECyNQL9pisUjsBTniusqHeEjFLuNfwg6BkfuBLDXoFJEAC67GZJukDGgxMyntHLN6Y6jwmh31YLwMMdr16ZP",
  "key31": "2f9qq7YXr1yY2Er3NxpdoqiqT8kqmU9Cwp1evxLydBnyghibNqzY14p4wADz7Er1vrVrSqvg7XTkNujK83uwsijy",
  "key32": "NmqRbCxMRhQ7YakipugWFPvTkchjd4LarypzapLHjRoWtPvyYA9XtNJADEhcpw68WZWXiH5KBYyZkL3nHtU3kPt",
  "key33": "48w2yjo29r67sDQWtZ4NkhdJ2fshcckfLSMZx7hzrLRZ8QbQvFEnsb7Co5eNtau4KMtqzCqZQGvnMLCgAs6kHfWz",
  "key34": "3WHnqEA1dD1v2uxEzBCKUNgMrKqKBV22r8XeVJc4pWrteMAXYwVX3i8e4Mbn5iksk8Pjgg9aFdmLbr2zCYuPpMhV"
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
