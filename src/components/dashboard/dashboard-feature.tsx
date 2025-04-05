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
    "KJebs1HBxq6WBvaHdPcvtk3LnW5rD3ASWu6dkNRAH7fAiTgLwd5annho3pm8vDKP1ziJPvRANHn5ArWpAxXpP1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eRG8pUeAyYR1ucdKijXk5zaDTMJtxKotcdYdxtzmBmPw14ZAHZMbGYkpwfrki7fsQR9FU3DV3EQk6NRUQGmtJfu",
  "key1": "4uxmLW4A3ywfRnomfDtsNKiVnADesKiRTDecey3rfitSRAjQ5ZMNLZWqXH36w7YJHxDTRanuaQWu8bXFwYZw7iN9",
  "key2": "3XCP1msrnue41m6auxvi2oGGzN9Je9UCwGyaBDR4aWuHkSB3d3mEcDxGgqhJTfoF7fXMfLfwBt7NkTtPJ9EL8CTa",
  "key3": "5A7ACVnpwYYnLXWvkhxNka7GgSsAKZWfPyRu2PzPo4bdbEx9EXMFAGUGqGQmUrB67E7CnvsnS3n5tDMP3duZ1NB4",
  "key4": "4HRpDrWMmFv1DufDFxyn48LbsPLuvAsczk7ABqSJfTLf1R6sGRzsfweBhAShxwCTxk3xe7nC9Z3auphJ27Cme68K",
  "key5": "5xNtHPoHoJbZrpr2FBNGxedcCQB8HGzt8uDRwzvuaTkFwnUNLamzeY7Eca64pWLUufFapi87gv7iuY22LwPZKf5C",
  "key6": "3X4FjPhgwqkaYdVeTRwrTcVaNMSSvs7ca7ZmtWYbKCu3831dRktLacsukNvvAAQxqFoNhvJJqh4XuSPJhHknFq2k",
  "key7": "42FCf2z9votrHx68fSBhTvoU8yYGK3mAZi3KwUNUXSFnnbt5gApdUXv94ubeWqbWUDG1CrVp2xX11iAXAsdp7d3C",
  "key8": "2Rd1KskxHimxE3z2WhyBBaFxdK4Yo9moPoZShr7NtB27eKbvAZhWDFveXdRBrsm5ZMttXzT585tcqMfZ8aQAU4YK",
  "key9": "2HVm51xMLcj74aQ47p4LB4TPpQnRgyoHHby9x38YgQdDa1ejESCj3yv7frQdmmpUCZn8M2SiNx2gcm2iPT3WzdTN",
  "key10": "2KTpbrgjsehaGWWd8LLfTRdXTBMZRGJB8ZoW3RUU5PP875XrsHvMacsKGdECXQsmsf97exWETJY3CDj7dZiv3LpR",
  "key11": "4jiCYVkx4bQCgRyHfac6TCjFjFbFLqyMQoX2aDgRgJGTTvTRRb6Pht3wDp7nCURt4RtAUKRSXQCokycqzKKSj2AW",
  "key12": "4c98hdgvRMKcPuagaDHbbGBbJQmKdFiq6CgcjvMoUDago3kbpAce3DBuWcTwCM7MEDxCmLEvpnz2f3mPWABMnCzp",
  "key13": "54eE1pSy4YRyg1PFr9c6eWaBDhc335YHgeUhC56k4pp3zWvzM987ujknzEqE6Vnuh5oPkj13BqYkmr85BsYDAidn",
  "key14": "4SjmoxYHa9zvhNBr2zBBtJMqkxPgrzjPL3qNK1R7t2nDK7oYQXyfZwAecMQanVnEQVkrs7PDznuCzShFqMAZp7RE",
  "key15": "W1cfe7sjCQysUhzQdZHmpgNwv353cSn57sJv2cKTUpJiL9hALBfTpByEG6dRes6JRag79KWP3uUiJbC5yLqm1dK",
  "key16": "3TCaK2BCxYa3tBHaApfwbTshKRA88h5FUWmAbCBHzP66d61Gj8zwYM1wM4hCzzgxEX5wYTi79EVFzkE7swmW1B3L",
  "key17": "2BYMJ12iHPis65j4VrweXfbG4fj7th5QGvYdu3PGR3ewDbF4YPr9KeRQsw8bbVQXmupTBUWPMGUvYxxR72ErJdrh",
  "key18": "5876RNe9pjCbLkBndD1VEN4mgBc6WzYYjjJm386GRfxiVWkcAWUHbqg5rR8zzErfPRUNuB1tGAcywizsfnXEHf8s",
  "key19": "2YETv24R4ZGQpNs5YQuKGGbb97qCJkrjfNknFtVE3UhpgTNAcrPRN4vRYd7cqKgVdvG2JweCNAzScrPwUvi2bjLy",
  "key20": "3FJgrHkj37wkruFrVNEwU1wb5GH88k6NzjFutfKo1gsrAAM2AdNrv7tQ3xkmRpj96bEW4epa9ocGEdcx3Up3nuq",
  "key21": "2MgAnK6UcXiw8iD85R73LSQaREeaxL7RNRVgMPAYNYAXomxvTc2as7SpuPu7R7z4e7FkVmgx9y7w4XgN7zaQ2i1f",
  "key22": "66f9VVSo25qqfT4a9RCSqLzSX3zvgeaYZmSuB1QjYLjLiQ4P1j6JLt3jQSEyrL44GjkUebs9xBNhaBAfTLEzMoUc",
  "key23": "5qrCfKnZVzJujve89zroyp3M3ZnpyCZY34b8Xz7r2XtbW7XsWR326285w2jzxeo5s176hoZWFMnX4LZtjtwKvPzL",
  "key24": "2Mmf3x3PiNbg8PjR8i31oG4geEiYNH8RUxPUxbUsvTPQzbZCtvkoQyhptJFN8zbxNAXrGgd9iKXsRkrqRuotxDQn",
  "key25": "5cyKSJwdH8dzP2BZ8CND7wD6P9uZTEcXLAzFnyu9PYDLgU6BgmTjs5Ecv19WzNwoJGvXB56GD3tpLWvNxVbtGjhn",
  "key26": "5FnscuM2JxdTCSaGcn82yLEkJhF5uMgcA66oYvfpNewtEhUBFeYkxfxQZKxY8QZmHfPWqVzwVKU4uAG1KcdtFHLj",
  "key27": "5E6u9nQ4vaGERpxyCx1bH9r19V42LqBXm1Sq84SpUscfDpKzgsghizRs7dJGjRTXFTsCDiLh184WoRgAsrYTZBaL",
  "key28": "4MPHxyuo5kErAth8FgaXJJixjW4FYN5dXaVQkiXYCEdy1Wx7jhZ3PWoUuzvQaWuE1MWuf1FEXVuQYXnxqKZTi9Tf",
  "key29": "2EbkiAJnECJUZNeSPeUYi2QVpWXRUvzpmetC1uFecXqhWKWRAv88eBKApDDWJQV8CGGxgRXoPvwbE2GdeikFDkDc",
  "key30": "4EXtTe9dLkostuZWiyMpo8ouf5C2SU6WU16xg81LkdG2gW2cQobJq8B9Q6GaGX5TVgQCH6QTuCPnJrnvt46NDWBm",
  "key31": "1sybsXy96pjD9C4vbJepnsTZktDrrhcWQdvMU1r85Q5WoUxMHHaukB6QrHgk1eGCdU5snK9rpPn8SPT1s7ZjAL9",
  "key32": "efXza9K3tPAsagi8xZfuhGJcdmbj2JbjtGsTUGXhk8X2sr9rdC3XuioQd4LwjyZsjCDQVCcaTzue99D6wGWCMkD",
  "key33": "3TDxpm2mGwsdSqEvmWiYqRPfvDFivYvRsoQz3z5hyh3BymrwPAUdtYnHmSPLkrpGuDEwTJKJfdjBaYnA1RmbGmSU",
  "key34": "5tfy69rijDuiZdryoPvavNbupFQf3fMGZHkbL696F7kpgMrurBNPx3V4xb87BvFnuGT8XibeGm1VWUeUFBncq7nZ",
  "key35": "5hceUDwYkgEJwH6rhDnvcnztL7g3sHSaJAm1tbh6UwyLDoxXQHHTMtonUG4xLQkYyLqNsonSv8MUhv64itxjPaex",
  "key36": "hLJs7Y4SifzytxBfAL13borMSK4JCTh8AiX4yptocvjmeciVt9cgHumGGrg8yEYSNXDjA9DQ7eVJczc6GTdyYXb",
  "key37": "2SwdbU6qh1h3mJXpvUYnLfR2LaQJBvV8gQF9Y5tQoc2gLguzZyLb221PomGEiNEKPd6yteyX1neYGnv2GzpH8aP4",
  "key38": "4ZmntELCgjgaEfG8PEcJusTJrfShFURtdCWhaksxeBeSpJpH8ZUJrz2BT3oFeXRepopYAEt8YRm7RUuTnrpWyFit",
  "key39": "2vnV8ikumnJTXE3pSZeFHmFPB8KdbyqbHyhjZTsF8bLNvjp3a7otqZJouvx4T9LB7z7G3SghuH51bE2wBY7tJxrq",
  "key40": "5fFYRFn7kwkbKGdphunTG3eiKhDGsNEq1h85daCFTRqVHG7nayd7YZD8g2teyS5Jm6r5ikPmStio8eFtj73Uq2FA",
  "key41": "2o3Uay4CZvGiyzRdiJH4wtDTDi2YMj4GK9dzrEcFmhZaqdcevnuCnuVZ6B3Q7FLU1gsHhCtCUxft6GNsu9hrQ24c"
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
