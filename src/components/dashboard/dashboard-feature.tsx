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
    "32n5TdXVbaQKgcq6jaDek3tAJGXKpvzHEWhBF9UX7aoLgmR5TZbSbjBwXk4w2Vb1XkGdF1sEB2sZiR9SgVZNK8NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2av1TtnZ6xh9ZhYHdomL7R85js7KbDhFM6tU12Ug1ZsNRTaJg9Mc9PtqZC2kmr4BAwdC6jNgxSNqTpvLDYyrSAaU",
  "key1": "4Ynb6DJ2tHXfaoTYk5HuPCSvUe34brLu9dSYPkrJyiCxKRjyeogMzJ5XgV6paAjLoXmwxuZF4PFava1SdGhXRGCR",
  "key2": "EobHMTfTimqMHpnu1b5wBGLA5CfCZEVMCVFQEyz9k7a9LnmSc1bqkQAfu7VXcUdP9eitsCEfNoZE76RjuS9pdBS",
  "key3": "4BQW6i9DBsr6yQW7H3cAAaGLVxYoWTQt81MqBob3VYzN7puBpnTPvBPr9RSfvdkGYG6xnzC9LiWVfdTkVKKFY1u7",
  "key4": "3k3aoEfZKNHbQcMeGcftiXuMNYLCWPdpeydtfDgvPnwLTnbkZzZ1cb5GPJaq7MYnaK2DofACUXmPd6k6YLEKJCKA",
  "key5": "4fsebk9Y7rcXCqH5j3CeyTFnwVi2N621nf86T2D7prc6w5rLNYYxfpF1rBTTGzsYAKAepQ1LwAgV8jNFooKAQPuw",
  "key6": "vPcL71ka8affSLQZuudB98N7B5Mkby5ymmXk4YJxUCXWvoC9pyVEF81wAoYZmMT5yiQa8VesU185Hb6JUmwtVHf",
  "key7": "3Nf5v2YWyr6k8cyfKDDeijSZgGYMFEEYDxi1b6fERDEqixp4zNt6u699Vs4PR1UFJwdTwWbMPbSGqb5ompU2Jmsp",
  "key8": "5rfB2dNnv8Afeujswghp8BjzMGYkgCo1sXMPjfZS3mDfScU9mVscogvFUmDwMKXYT2oVHM3fAwTs7r6ruvb3ENBz",
  "key9": "66wdeRzFisRGtczfetiNSKDHHsFhKYdYgNr1yLM67rDmNfSS3thWpqtDmnXo7vyopfmZn8nh87ytnA7cnJNxonQ6",
  "key10": "4yYpFyZbsfPu2npGjX1aM1GnSam21mHMjMsuhgFLY9QG2cbYwfPX3K2XJTxg5ur6QLkYkiB98WMiGHcWhvXhSkdm",
  "key11": "3jijqis4u6VWzKkWyzPuBLL8RDwLk37iFaFY3res8JHZyMD3T31xShGNwn369w68eL7Fam4U7HUGF1ByKna4yZME",
  "key12": "ttB4sB8G9tkpgzRkdcNJGtBgGtiLWconmVenmqpaRSAvCZcffCvERFesM2J6pRnrsyiuhqpKf9wpbcCzs4Kjq1m",
  "key13": "5nSuBRx4vasrRF5gFCkidYa9p81EQ2XMhhqiGSW3YDPpLEzhLktHxe1YmaC1UqMKdnSkC9C5zyRGsqAyCyK8FKpc",
  "key14": "3gQyTRtsgsbAFVFmXVTo66aCrT39URtuJBSk8dvPT2qTX2CVGovsS1ipv8htJEBsj2cvq4UBCMuFyAVTgpEB1UAh",
  "key15": "4UQq7EjhVNvBZ3YV9HKcwSFTBnagbeu83iJeELMciMAT49czyePB2qCmMDE6ntaCthDRg2bPdtFYCpJYCfSwNvYp",
  "key16": "4EW2Xty5cnxTBR9kFx6tJdoLUiTjh1WTsGpgPgJnJtipyprHCZzLN6Ekx5fAzKbPAfry4ffUf3TYK9CriiSQ3gin",
  "key17": "2Tn5vcSsfvmVsmdn4A71VmKFoLmNN4jtnoNUzyHziYQL6w7B6C2VB1xu6iMDiKXDbFXfj3M7x7ivz98fUa3K8uLS",
  "key18": "TZLP549yXyBWAtyDsVCNrfCKM6utBZyUHoWgtKFzq9QRoqu7qogBQr6ej5qh5pcB51LwAEMGD3RhkRdP2w31fgN",
  "key19": "3DT952Atj7Up489BBbXdFW6KWiKtPkimXWHpKxDzP3BNRxJqqyy8VR7RYXG38PKHDfSq2Nkb3MHktYvk2NBbdVR4",
  "key20": "9cZEA9RrQnsXm9hWZNfDecCEYFMrxkdTz7T76Y8PVEpKKrEyDhUXxB9jUpuQ44e4f2iefMos3V3AJGuNNnmwRbr",
  "key21": "aZ6tf7iMQCr51nLo7SiXB219ERy7XLqNi2hK29Gsr9LeoHntbCmNLuFcw3TXpVLsXyk3J4MBktqNqwRRGactVbb",
  "key22": "4HMhWxcWk7V13trUaPyBHPYUDhP8GZLRVbVHXsNExVSrCpWt48W14po6R4pPAXCQkjr1PbjQBqQ8VTVmdgTumgo5",
  "key23": "4455SS9rXWrQiLHF6FRMgEJkeGUY7sPUx6CHR8M1ZmMaKyHBfHqRgSh7bioXcxMq25h84wjyfYAfVBXaKK8aE81D",
  "key24": "M88eev5neoqiHmbWBeaQiJc4XQAZAZrtNeGfz6HHgp73X6dgaVWAUcu5sdDFaBEtSZVdv14Hpb7vLSioLsq62ow",
  "key25": "3k4FyH6KLRC8dB57rrVEe3CjJ8PVYX27DViorCsNPnByUNHL4nb3rJ7kJSPC5NmyD2BdSbJaXwo6pK2Mwe7Xpe4R",
  "key26": "3AQ73XBabTrhvVkuFsSq2mpYXuKgL4bGJeZxohLYjZrVT99ihVCEGZJKdYirCAdwYi6y457YA12GaqruSY7dmBzS",
  "key27": "4XCrmuEjmkTMGXTQ6kWsePs4qJyfSac3mj1JKznFbepaRsvZhDa4QSs3JX6dbDjoypquqvceUVjKJvJL6WjjMHSH",
  "key28": "5CisjggE22f45f8FpSiamRKQKm2U6mLqk2rMsNtgNnDAA54dgXdR2EiJJjs5S8DLVb41wfx6q1q8yw7ePuVzzFjQ",
  "key29": "5o16s2CShoNy6C8uvyiJqaGk8gRjcMVLixcvZA22GWj5LxKHY7btf9j7J7nkxkXeQ1XMSn6kimQ4g2XCH4yUbTi9",
  "key30": "5Gkqc29kpwFEamixq3Lwh3zcWJw3smbmJfynDx7DGg8FPLswBrWVfr2oSVYobG5cq2eSz3wHPohTgFbTmt2hsxZ7",
  "key31": "mMmEjAQfSDAxc1aeC51JxuZrGPAW9XzhB43VnLqLGSYkGtDnke3HwKruDJ6NK4Zi26WDyEofHV8TXuP3wiAqjx2",
  "key32": "46xN4N5FCRitABZg4jpL9MrpErPcMzYs71nnBA3ExwyonJWbM5LAGRMpthddQuc5pNniYDwTDtTNt39uSqSiWM5P",
  "key33": "24f6FjCncEZ11ib1zH2XfpFo9SzumNnLf4S1JXTjZbCn5gA8jkWP1wxu5GtPrQgAXCYNf4RzQ1ghLhoXXGPGBPPU",
  "key34": "2GCecVka1k1Xo5Sxycga8x78ia5P1SpwDoXBNF4iTYs2K7BsTw1Tm6bUhUr2xZ5fvt2aNmWUq3i6eV5BLAzrekzA",
  "key35": "2V57g9BDVhEvfi52XpZpAYySTvYhwgT5qP6rCxyzzbgsfrCDjkvFFG9dn4fhMYhdHseejk4NRPuWne4GeWhhASbe",
  "key36": "Js6s6mi8XaotW8FREh1xJd9KcuwYaQLBXudRDDDSZKohTJ1i3hR35KsNKXvRZXRr3vpwi2mjWWNGryrtN5tSLtF",
  "key37": "3ur4kgKJuefVELX567QAoL2bnTpkpTQsaUU3HzTtWRHH6yUvMVijuwSfqtCmyB3DfGLv8UFpA5wUsTx4pG1WTPfc",
  "key38": "3riPgYsdgVDLv2LMa2SGZ79J5w88sq5G1LejP2UbbXD5dpEgCicxATuD8qMhEiLxc2PSvqSpTMgREWA2ZNf72sVM",
  "key39": "4BrP7TxDpxiutjck1BoZbJqVeXC6vuBp3GdEYk9A4ZjDEqD9iZNH9BdD4SPjqK1W3eNaG1bGXozqBoU7mboMVq5z",
  "key40": "DsUzgCXHXBYhRdNZ3mxx6skcuJAJGfqugUi1xpLQ5ZGcCFnEvJNHfD1qazFx3eWv9XhCpLLXQuSYRZm5tn3zPW3",
  "key41": "z26EayFw4zyMzDrfknV2A4FMAV2eADV2SGDc68bz8iB9b8GiVD9KbYpov5n7r6jk9hiXTfsQwc3C79ZE2XKddDe",
  "key42": "4sENo7ShnSBEMxgNecjx7NKamvRuU4Xvt7LqY54SjCfwkTCdR3pBmYihCdLpdDDZKUk982shiAa5xs1oRSwPHuw6",
  "key43": "5U4NPW1t8jDQ9RaLrsmjp8swenLkvXNrZKF3oU8wnv42E82fgFXoDHo8hEsfN9yDaXwUr621k73dRHLN19g2UNnv",
  "key44": "4ZBSEw1VatJ52iL9PABzTq3zmYtXyPYA1REGnJPmQsS5ZrtYxJniPQ9DRqsA5rGvx6gjKkFMPm5tQumYvQbfZoD5",
  "key45": "1qoGYBbniRra1uHF8rraEqfZm2BboLoPdjeDLiGBCPCcacoKhkypbZX4ZYUSiuPBJHng2xgKQ7wZ3zjuqzwLMJx"
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
