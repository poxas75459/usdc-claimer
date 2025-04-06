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
    "5EhiwrRgKqGHXCqW7YkeLPpPcAzdea7Xdhn8XKVWSnbwQLy7rjTvwp5cAECpKhWNZnZNEzL2RsNunKE2JTLfTEty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5d9YSFD1LxbVcDMXaUyCprVqBS4NsDzVMYuBZkE1MB9RheZahgxySyJVffT7d8oWSW2mJSxSexQbyVtTYFoaxY",
  "key1": "3GEWzowKR1Pd3wi3MzPJpRoiQ4xPtKVGDy11qtRC1mgr6ncWcyTM3ihw4xDqbj1BRpjrVE6kENmEjg6bE2qNrCQp",
  "key2": "5iVDmnaKXXutCYAxPsn8o4GHQQwiBGAafCgHBaJpZmaBqQWis5nAmLkgUpMH9CfA51tmGE5xDsXntejPGGas34cm",
  "key3": "uWXKJNMYQiv6epS59bmYygm7Uwtf9cchcKRS86tUTcaJU6Ce9BwAPWWDTbJaPWcbCK1nHXhGv6ZPHEZVPHhY43j",
  "key4": "WBQdMTkzMqBjsEbRAofZTbiHRXHcRVvMhy9ZeZkZe2mHGqK9UTkfe3ut7M6NcsKCDHVwLbyLUDe8hfub46RT9oN",
  "key5": "3p9DsqNytPcJQibTKCtaJ5hL2FP5NxCcjPaBZrKbMw7VyemtkkEVGeKPXXGVV4J4zfycwWJeMtkFkda5FiifMT1k",
  "key6": "FGF1eLMx2gBYAsueLRoKk9DBExJn9Eiu6FbximweVPCwYQeqpqPBpkppzzG8gBcFbyvdaNBiYEPvTwAisDXxY6n",
  "key7": "5VynUjGUHyyrM8ZnMn71MabYMrDtJs9tNBn56gM8Mkcn3nkmR88BhBpn8Wxj7cMHybLqUVN3eEwM4VmGxqm4gDvC",
  "key8": "5hfaYfWE8UHtXmK2iTogGFwm9GhEQYgoyVMia5NDA4oc2AB9hgms7p3GiKQbdTDa4FMUkyTkoHFh1B1SdAThyfm7",
  "key9": "3FSBAqDXdyiBeECjb8WK6VBjMGZDbUzcHVuKi38Yici26kcpYwPKGTKeS2aG5jNc4LtdqDeDmMsdVCiUcrBtVKpQ",
  "key10": "bWaqnpGpgLG65VsKKyX8nisH4oYviT75k5Xv67pPXSMmd7HoqYgrWiHFaGbQdmtfx7QwhhRphr9hq4eSGjg5rX3",
  "key11": "5TrDrV43Nx7VTKpBhd1ALaGkjvxdvvLuQanUVgFEx83CkXxw8eZixRrjgmUSfKziuvkq87eRVQ5YNbJLBJMFRjaE",
  "key12": "63edSmsD6SSTTidqqXPswUoM9hytxQHM1cQR18BhAPLU3VxdPW43vMNWmCsZr3aL66a5XX9zckJsJU3si9sHSX6z",
  "key13": "5jFpFMVy4Z2Fn8qAEXvenruJWUGENEorUXJdmuq6oYnCqzHrxYV9trRXk6XLuhzbv2KaowyxjpUF9mHEBPRXbfw",
  "key14": "bS6AT37wGaTnWVdEQLxa1UbpM4CizV5fAPGbK23xZuPiKMUdMMcPhrsxgKS9n37VXHCsv5TWQ89wvN3rsN2Vjqc",
  "key15": "c9HoqSMDzk3FARXFumKSpkMWFjryKSpH9SB9vUYwBXpZtFh1YHdNRUwVzpjqxuVZjhLEd9APSFHpHuENBpaW3gR",
  "key16": "5STjrstwQkLwhVc8gTwMSKqJ3zQ3e8Z5Sh8Hd7hbDiuW1XtLmrgmWN3jNdqF4Hddtz1BHFafYxwsVfUcG9GW8ZwJ",
  "key17": "v2KWyrU3gj5zA74YdjkQdZZhSeruAHf2uin3GEVf9KVPwekGCTKoKQyxPKEqaDETWDHv5dqPqvQpymvBHtbLfhE",
  "key18": "txcEcTNsxvy8HXGpbFMVyJ6UaCYaU3Ptu4YuoumwB3AhzVZr6VT6WV655E8c69fwRJBayuDzMGj3SKkQsGHpYGA",
  "key19": "35NN1V46PMsRN2FkEBgkQcd5w8NeG8YmEPDFTjqRJjYFLg4jwucwptWkV3N31uia5ZUJgcNP7YVXTXSSm2ZCeUb2",
  "key20": "22r6572ZekmxnAMFQ9exUc9uFrJw57J8SS7U9r83oPZ5iWqET9ps2UDDVVcANzpRVSRzKiifSykxeSxgEdXPM15k",
  "key21": "5jYUDDpXJTewPWevFK5szjGAo9g4CLPsDfJUxCLgSJpydmpRyPgSaVKVeYPmHj92FU2YzURgfMQTs8CcDCrXDsn6",
  "key22": "m7UmS3vhXTdLKxGuoH4eLL8oX4wBb2qs5tDLhftMcTqMV7a8LkNbsE591bBKKqATGYPf3MWEYM5Lgi7s8mVwQNQ",
  "key23": "34JnKJysSdio3ttr8Ya3zJqtNoodEs1KXxVY3G3aTwvKHA9zQ9yJA2codvavNUaNaundoQjhbRAQEXcm1bJaQL3g",
  "key24": "4jF9ChohRAAJ94hyf2hpBpm5ukWHg1a17Tg8tGSsdC2Szu9QdSvixxPnn68VeYsWktWcUwKJAuoKT747vM8D3Lad",
  "key25": "3X6aSHk6gkygLhhnFKfRRmMGhVdygiMMqdT3W7xWTCnjv5WocYWxBc4iGFyEhL6neLdsHjC1REVFBpryUHW5KyTZ",
  "key26": "6waoCb2hbGUFKWtobkrnVZWzJRS7FX6vYZxhgnGpVGtagCEjNGP8u77nb4DZVGjjN6N2DnhVckzYZJCmjJRBuMv",
  "key27": "2fxEwRmYd8vBwB686G3w4u1Dg7G5gvi9zz7nuWpbXVfdNEntJrEBjoYEQVB9TjUQA3yRY6fdog6g2CfVs4mGAzy7",
  "key28": "64KstB48qNTxxn9ExknAUhNnwYXYEZnkCD8Aqm7wMF9xjaaJgL5Yx5MPUhyHN24bsVb4sNGDBLpNA9gzs789Sbno",
  "key29": "9gp8Z9iRMQEkKrApt1cYqJLiSgUaPZ1teyRVh7Xpf4TqkrWB4xEFe42STTLYB5wYnfDhZt3jwmx2Hy9AXgFfmtg",
  "key30": "2k2YqqSFUfSPgkqFNkyNfVn65ZjcUY8sA5RpjcGkCAYT8mt5H9PQHFtZqPAFo74vvkgrDEkrMDubUonR7bh7yWnL",
  "key31": "QihBN5tAMAYv2uuUjbcybvwUGuwH5n8ZDi7CpQGTnLkfdccqm8NEhhGGcXCRKTPrguNFeW5ZToEFxXQ5seTJbMz",
  "key32": "2FRddmAVNLCpowhaQYyKYXssy9oehbmKiUF1c6u7J4imyWdQnn91uTeAv7ZbGpbvyM3Fqdxq9G2qFjC8JA9atbWW",
  "key33": "4Fvh5u75TABgAWRLZFL5wJbiE9TvkEtDRyVVncQjV71GL1dFU5d3h3EWQK18YRLSnGxzSN8dNrUJmRUojvNgiGRi",
  "key34": "4L8Z1vSteQss1LinwgVu3dvNfMhUamqmYBAbqfTdQiFALDCiqSaWejTYS9TQPWnacQHfrhs9QG9RGxohN3b4iBRc"
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
