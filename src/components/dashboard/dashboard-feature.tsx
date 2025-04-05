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
    "56Z4M3AA5bZAvbxzZF4uvASiJ7Jan8mXcAY8UJFbPfbfzu9QyUkpHKAxnjuvjxFuGEuVetJbhvXvRKr6FEn8sau7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJ5TWKEWL9Yjit2jQ5GXLUfEMhByHvxja1WnWyQvhSy6S9n3aDZtnFEqdJpAEf4kF2whA2JjpsF7R3iHUbGtnTn",
  "key1": "2CgxDbfe2KDz2R2bBXn7HPXB4PZNz4pRiv74UTdAx3hWxNDwYFSpmrsMZ5nSaBb3uuZXKXxAgebxonqCtm7UrcB4",
  "key2": "4K1tKj2UcXXgJmgdk8UJx9uSu4z3ScTEQ55415mrNaTMSB4oPbe83zMLCBJR4bSSYhx6d21HgAuTvbCpo8rgNse8",
  "key3": "2kksEhWAGAyGXpcCWg6Q95sDgX1fBkoQUrLcBbCJ51KvmmZn2nVX87j9iSA6w8Su2ZuxF8pvmfzTCBpCmd4EB9d9",
  "key4": "4D7pCUsVsFjX8o9eNMajWDoX11AgXpMrcmCkuD5Lwgb9c2wQk5oisa29DXynvVDJ59NfDjSUPenfthyX67njx5YM",
  "key5": "5JWq3kJGTZoEwdtwHaZUvsv9sxegiLeVvCJxFbaCafP6o5eCNCbaCk7Pmhnz22F5Nvv1KFisLKdtfmyzhQqH8Zgh",
  "key6": "3Uj7axmG4sCEKQSHVXPbkTVUVC1bDg1PXjyNnRfDSfrEH4tacq3h9aTtBjr9HFGYaH7LBxPDhBxSF4rA77hA5GNM",
  "key7": "2hd6m5H4GcBpd23ayoFvZAp1HKhUEJDF9Ya4ZZ8MDGrhgzMhJ7av6vr4Z6vbdvKkVgpicwzJaUNsbuPuF9jerfPx",
  "key8": "tWcyg48UsWiBtMZrRxMA95ZftVfDHhP8vaMhMXXzteUcZD9Bdid8VeeLLmtkBXR74GuDuSZeZa2x4Lby2xu1WDQ",
  "key9": "GfKtQC43SdNkZbBuZZzq9zpboMHcMvZB8DSDd9T7PZEkwxbTC7Y2X9kWTtMKf2XRG2u5RWzjxFGVQzfBwJwvn86",
  "key10": "2RKm3pnk9qCHJxSADSajxfhvbhdt39b2zwwX2EAo5KDGr1dsHRw9B25SNwbd6HQn4sPYyHVtxpbKueyqyDr5x4sM",
  "key11": "3jyXUbtzz1s4Jzc88jdehEj6gbMv59vF9t11XaiiKyKuiy1JBDeE6NQh7UryU6SLMVkMTAXCRwpnVNwqC812Jyas",
  "key12": "4LebER37M8vidyfHTrU3tvKijt1mFSDZNJeicDG1jbECCqxRozmDrVW85Woq5TBS8UzKpFnq18EPqWELxttq1MME",
  "key13": "4tAA6Z81LUuxHTU5mit9GeHo4bFKdGZQzippVh4nUvoTrs2eeME7No8sh1L9RLXtJfQWUU2Hb1UeucLMdT9K7d4u",
  "key14": "53hCu3zfA9NDBrHTxLzkwqeboDCAieoNNDkoEft3dUsqTFGFwHpxQhfTL2srusGHn1uhVfq9rRA2SNCoJNpVMWQy",
  "key15": "42brSznWE13fzq99pZGx1Q1yTpSpQXG8KRTHmCRhnmeTbXMQfnC6hBoSMu72vZYineY9wFnQvfDQWYC2diXdYRtf",
  "key16": "d14fYK1oXuR5T3RYFx6jJhzzu3o5SD1f8hDk4zEYBbaFeDmnapW6yFkkTAYmD4SpALmkvJjEjuGoAHZEd4J2fDh",
  "key17": "49ujsVmNpKNDHy4DR6fRnGcZ69MjaYzsqx7wuFYEtzxpi3RnEUmk8pyYMqZ2NkdYrNPucaA3UhYTZKirQGR5g6ok",
  "key18": "2MG7ZpBaFYW3UQoyvndq3HRnSozjRqRNEQ5i9ZBYKavmQF2wHg2GbBCDGYdvhxuiEXt2TrFgPGbuFQbcNxErPCV",
  "key19": "4XbCq57ixpgEtTSQB7xJgaD2pfdXh4ug9VZ6oVGp5KC46wLZ3ar424SjYRDhc4wvHueLYRiQBgagmx7hTerQC6Ww",
  "key20": "5xqBgohSNe2Byv8hUrXM7KkKy8uhukUbFYYrFBRFcWDo8MSFuJsukScrEbqdRsvHFHjjQEq592PWyjCpkTAD14bJ",
  "key21": "23wKSgjirANaMhfJwHxVmd2GoysFsMtRSbgMYX8J5BSb6mxtKkvtWTNJrtmvMPX5RqHueg313ScHTELp9pmziDGV",
  "key22": "3qaDHr6nkf3VRhXZSbw3ZVuw1nKRhnyqjdzjkMnp6JukX6BcN5omoZeBgDWF8xZgNLvqfECTGF1TH9vJKUrS4UjV",
  "key23": "3AgMwtZjfXtEiXiaYA9zuwEVFHjt5sJCbjDnUZFYHrE37fukTaugaiucYo8NyDTBQamSU2ax1uJ4bxUtJSGcNgNC",
  "key24": "2WmsjCNQ4MaoHDZB3Gwqv9AC3oAe8DutxHPgwa2vjE4dA2Jn38VJ7wXF7kB2icC3r5DaienmccLt9TS7CoNGuJbx",
  "key25": "5gs1HaJv15u4Nkp7YCVZvdavf7KUqCSkgZPbPPkZbJUDBYngE9EU2zxwFcrTpZnbcERbLSLsm6dRhgFV2ArjvjrG",
  "key26": "3xp41aMZm8VkYvFCMq1HdU1HDNRwqGL6zfm1pwbA2tXv5R4Qu9XUxE8bBpd66ZVPpkeKUFx38zSr2pbMYyf7fbqs",
  "key27": "3anD6KSKRZzThpYkY1jLB3rn5DhD47ByCeiKfmTtdvDoGZriMP1tFfZsTxjFckJafgiZXBUGEHSrzuZAFmzqUozj",
  "key28": "3p6tmUeq4kxXRFGpAcUnrQa2HwMCtNPFHJVzES7bQgZZi5RdHB4zuKkD8qrg9tMgLg7DpdCxQ5T8ijsGHAqGPkr2",
  "key29": "xFWfX5VoZna7tVznuV94oPiQx8ECexnvtvZaVCEWYJir6DvatkSuUNo9RymnffpDU43D1vqCs2WeohdoVTDuBDm",
  "key30": "5LNMbZd9V88ieySeUKFsvmgRWDmVeh38aa38RpRYDCAbkdj4dHWixf5EvDb5swinKz3H1rCPoi5pBKeRH8pbMeUo",
  "key31": "2eLAKyY1UojwaQSkbFEkPi2fj7vEpHhi8q73HXWJ7iGuWvHatiBZXw8EJzx9FrBeX6FJ4ia3XBALgJjdomQkXAiC",
  "key32": "4JwRzY4hWrV3juCC5DhKPjxJ8wbzCg18TVVtd9uZQxttaYY8h6Ux9NRJfko48i5SyPsZwCKty84Wkvx6MtzGa1AJ",
  "key33": "9vF2P7n6DGcbMtY2dHWGiXzxF4dxjQsZhXz2qpkLPSRT1cf7V1S6yhSPeZt459gzPL77fYWrAokT4rfinw8N13i",
  "key34": "EiGZmCLw4PoyX38yKDPeb81fr3ouiB1r4ji6p5gSoNCnCpTfUjyE1u2evMiRDuun3PHrjdfyXpv4SB3D92crigF",
  "key35": "59H5NHEGtPFDKKiwoAXtsRnkFGLBoHVVcL9FdVriNXTZV14YS4sZJ7o2NQiWz1xTkWDxv5ndHHnJM2ctjRGb356N",
  "key36": "4oqNMREQkSy7VCcgxy4qVXbtoqxfA2zbsVjJkCQVmxQrfGKfY6ViXTPTGJZp1nvswXmexycwdXsWp8PS87Jnv8f9",
  "key37": "5BaAfhgeE6S2pz77ej8oeeGBRAPWZksp4ooCGi4nS39ASW3uXkH5L1yFce39xjkbZwjwqBsxXmY9U3iJVjrUP67x",
  "key38": "63GNGVeQK4BjiH37S5BM9jJNT4nnZ9AxYbnoCfs9FLCUVXjJskxVdKaLLb3RcRKNPjojAXnSQ7aGZWtHcHnVsqPh",
  "key39": "1BpxzfwMrKKnGofZ7bsgzHCxP76qx664hAhxsrk3QHjLC9KFeo5QKCZ8Vk7Eo6kNj9GSQdjMD9bR6suuHVJP7wE",
  "key40": "4JcFVzqtFPJrDo9aZ7csV7od26gASp7MuaT6KvEoZTBZvzjkExvtP7Nis3dkCy1E2xP17rkXbVn49hEu2qfLJkfD",
  "key41": "29QfkkSpP25Q3naBCCDpA9usftyf1LuSVncdorZadxFkCUxp2QKrFLKW7QwaDrfVqb21GQd3dMYBhL5ghjMRytL1",
  "key42": "5W3RjW6u3ay7FYhtDsKgsUVtb6td8vUiJGK6j9SFJWiwZ39sak7GS5NbzCfzXWNFEQs12CBNfY6qgNXPwcgTXW6C",
  "key43": "21tWKq6Mr9GGcZXVZGRfB11dYpnuJAHQvfykWoh63AqgfamrPyFq1ejUzLVZ4FghAgpsWo27rTVGW2VFusMYFez4"
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
