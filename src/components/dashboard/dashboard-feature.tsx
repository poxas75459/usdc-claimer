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
    "46aZ9ZjmpbNM5Pxt5QUVTyw7q4NbE1UquA1pGumhPdq3bgBR1TJGapae4qAkrz22eWPsVct4Kpv9uM6MFThz6j9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XwEkZthJNC95wHRBJvTShqkTWmV8DKqdB3dmZS8XRdS7UGcAp9FRTAgQPwZ8NnFUfa55a7ur8ERDzT5gxU5rBLq",
  "key1": "4HMF3fSsVsqEr87gUXvDZfSDMqDACedF5nZjZLNeQrh7tQgmfRoeKbXotX2VpMGbefAEfF6nKC6z12YYynd1UdJF",
  "key2": "2vxz7obfxXng91dG9u86e8H4qwyoCMpcxREXV7GCEB4ZtTJ5NJRSznzJ2EtpyTNo66mu9HgbEKLT7MGGJxxNSjqC",
  "key3": "4S9y7y3dczSABKo9cwVxdWfe4Ct77MvitgHXmSaJcAQkFzjxpWe4tcp4mqtZ8ASoUUQ4ew25aj83RsT15U37hhLs",
  "key4": "3zVCmd8GnzVFF6pKC6Aysvf4g8amhzsZvSUpfSNL6JzJ9xtMuwe7RhahcZ9C2xEx9jkhL2GQu6QsDfeNPiwwQdd",
  "key5": "KxXn88FCwsekwUCR2f7gRtUd1EePmJ3bZv6Gcgxdyq4CvHXhML1J1jcaULC7APb3FkFfZEP3P7WqJCatw2dV3hd",
  "key6": "3Ji8DytffwKXsve79B9Uo7JA1mxhSsG5RbUDiYipcnnbAujRissW1GdhvE6b5e3VsvpEWaTn6BoH2PTAQek4cuak",
  "key7": "sYiPy4XrsC1AZAUcaAmfTgdZ8YrQfe9GmvwDvNzyqDSkn4to7X8LjsKQNnKVn8vx6f6kghQYhZ79cXu8BExsVnQ",
  "key8": "5XfCedmHQWNGdqDZsj8BYpfV7BaocQtx6GtFWtWxRqaapaSZ5iWKmXWPRic9VBTmhBrtrRRAe1Ctb1H9jwgNXBF1",
  "key9": "3UPFXZ73hmDuxGfwXUJGDDPsCg3GWvA5z7262nTtFSUHEohhcefop3sTEQhSNzdjQ2PBXXSRzW3my8sjUnY2vJXD",
  "key10": "Bsy9ddcpwVXi1adoBTxKftLRrCcAatnKzbf8sb1sbsVSHairjRiLia6JkCGpjgEpVaAwznvwk2k9wZehzZfLTAp",
  "key11": "3MhvbufqyNprws7ZqniimJGtiJYCUHqB3zTuXWfNAFVYTCEg5Am2GrEkSTq9dEuL9Hve3x3M8dGQ3sNTaPxuRote",
  "key12": "2chwfrYWVyaskS8tBVoMvfEDckcoc7xiW1S7TEwBPsUGYizWyx5vwzFuLAQ5KzeUDVKC7CVdt7SQfbfBWimDoZbR",
  "key13": "3UnpgVusagdJzGJCJSfqdmAkhjQiKCRNYYpLzpVo2i82ETndsx7upLBuxox7fhxWddNeUbsnhmino7HA2Z68WffW",
  "key14": "4gEs3XdQpKbDW9BjH5iHfZaNj3Mm9G3zSNwZ53c4c1WeNT65uHce3Mw48yXVfUK1uwpqiVWkhqU5MD2aDuqCq9uG",
  "key15": "5QUw5fGX8VEnvd1qNZcpa3SfzJC5UYmk1rLha1oB7Tj1K4JPhHE2qmkiEP1tygTTgyNSXHMSoZVrmU2Ss2pAR5T9",
  "key16": "5dsCEnXq9LgbnxeCmMCqokoKNTpabP2UUdbcBeBfH1peLZjWNphDf12xGf1gahZ767S1hZNpRKj9zA9FiewS1izC",
  "key17": "45HiXY7c1xEAb6VowAQtzE3B9yGTxZxjQrnv58UMEv9eG4HNGusYFC5YVAxM1Fm6iaAMaXRGJTGTMtt3itLh2M42",
  "key18": "41B23jPPLweGtDLfmxKs7sYp1RSef75HzXuhDw39rxEPXSJoQAzRfGTwhN6ou54nNz13Bzb4Pyh9AwEpyUrftfKg",
  "key19": "2G8nReLcGWRRP6yaVQUDpGEGrRZGwD3DaoGcwjs5xWhoJz3NPWmDscYge9qjfhKRnSFvRhQeXXZ1mowCvoLQumGv",
  "key20": "Y3vMU1g27NwvsTXmMQJYuAWhfPyjaom5bNA58EbNEWMG1KvoS94HZUQr9QmP5K3z2cNdSrawZ9L1XeBDAu6PB3V",
  "key21": "yivSkwUSk6ZvWswx7kwHWwXQzCX6noHERETBL3JYdygzBbfiHpRhiyXRaW2Mus2kyoq66a6m4GZCfT5hGG9zHtk",
  "key22": "3XJqS2Et7EaFtX9AQoY3G2SiKb4xUL4RxWYJzh6pM5nyhU4ti21YzzCCMXZSPtFBydc2qt1Qs7b7A37w2fQuWekx",
  "key23": "3dqmVf5tzeGaeFU3Kb1D6E35njAsat2xPh1a4epi4UzjxoNjA89KDymYoqdtFVSHNcHjQZkxs4cj42u4DvSSGpps",
  "key24": "5yEbWc22yQZKMkPnUdFGa9wYrtG1g6E7puBZA2vnC2okVUzqbeJ3dRYYGFLWGUcoVpj5RisDnGeEkf8SXrcshDQD",
  "key25": "3N916xovE1BUXEg8E6AU8mJkQYf6bTGW4C5v4BH2Bkbydtv3npjnFio1oX5JgNHsxQDJ58SYLrH97q8SUwdT23fV",
  "key26": "27aupgCkW77HATZSFPZZJFH5oQNHV6ae3u8hx2zZSVR5Etke6waRQ3wXU4xQJJzZRqCmU6LeMWfpY4RJZiCVymg4",
  "key27": "5uoJWgW2CzDB9TddB92dTth3oGLRXn3yY2tbST55NJuVAgQ3b7wWsWxWMN8xrpDdAeWdrPxQWcU5YDKkDuqqLhS6",
  "key28": "3vxLo78PPgwB3UcZrKsyi7sizCmtniKcA8HeKSJaVhtooTKWNQzPirx4b73MKNgrJgXqhc61SwZ5upF484uLVZGp",
  "key29": "4RUSJnw67Xr3MmcJLVQF2eBLbXkivbXZ41fhrDRbBXhn4gQpW8MbMQcdcE2c6WbQCL7CtkGjm5WCBZkgiR9wy7W5",
  "key30": "2Vb3eGVPZJm9K28KESw1oWpx1bggwcSfiNB8pX3KWHFSyhLX4xyAfTziRXvRGoYsmtEYq8heftaxaukpUMha6bck",
  "key31": "63cr19xDYqLhAqs5DESAmA1hfVDqMY2BNimbngXczo9GSL7EdMLwAxbeua9L45rvRNWsWPvUtqbDge3YG7jnpBtj",
  "key32": "5RvLpGcysdiKtndeFr3SQsQYSEX3Svv2QTfHieQSUhwmz3g1m44Dbmh6Dkk5oMGG1XtgVSwNrpmyVGjpEMJLY6L4",
  "key33": "4XmcnLMTyBaKXDgAUdhwqZyxkLDpMi1dgTNjVq4RBguTDcebUy4fdpRfhAtubwCgFPEPDJwFPPRaWG48wRXaiCDi",
  "key34": "5duEpwCrnhjdycan6C4GVppxpWgmyRy3hbTigLuCasfLKuT97QF7FCWaDgouWVBVU2npaEnwgUHZGbHekPHXt17i"
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
