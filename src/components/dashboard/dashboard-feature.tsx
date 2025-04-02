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
    "4stx4KZYE9wH76SDM9SLFCegtNbmX5dY4tTrcwKFuf2rJX9tWQEeZPSCyvFB5GuaGgxwZLtD8QNCzh6UX194cAA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AzzzFYaT12ToVEhK3QsuiCiBZmwYK9ocBUQFkstHesJNeKwAvX9zNTPRuiSzpV9NQfwqAdLN1k8BEwQLwKsm3B1",
  "key1": "43UygCCJzBCMsrPCy5bghFp1aYm9AZMbgisy63EbkA27CXPV5tFiPYAnTjAJxTpCfv5DUkvkucgeZjsM6FVPito",
  "key2": "5rmXSzcBQzdwQ8dq9j6Udd5HEaFFrhrebwxEPJKKLfqE6jN9pPzmhbt344n1s8hXtcv1CseuDjYN9UJ62KVzHHGq",
  "key3": "4ZREKs6nbEUmB17zWKijuwNUi1WHx5U4ZUBEBraT7ph6awVu6hUELAfXofqG8jgn35yQSUeGHBbAv1DanED26Q38",
  "key4": "5q6ixkbNQrC8bFdopf7uVw66npck33v8gnaPjzUigFTfB1mqEy6YseRpwMyLEYuLP37sAfAFTqkQQfSHtrKR9zvc",
  "key5": "4XUKR8K8ULYN6hoDfrSuZQTz1FJcziAJRKAiBr9YoCudMpVR6j6sNXHwo5njK8crRr9G2GdGsncM1wAq1AsKbtAv",
  "key6": "5x3ssbAmCsQwTGHbkHb5KijEPBSAwQJZ5qgwRzNtCb91gUCfsdvgpbESHzWiufCoR2B6kcCmqFu3UsmKxexPwBCh",
  "key7": "25NidwufgoUaJMVMzTonYAnP9DeNzU7h1rpMpdUgzAnPrymdxGKdXv2aoA6WEPzcYdhNcpSkCTyB7QnL2tjUrA3t",
  "key8": "4t8xFH2DUeQexsiYaUGKjEmFibFxYBDj2qbauEfiL1crv1atuB28zZjxX1phw7raK69KCmtvD2cTu5RcE66WLhP9",
  "key9": "5s6hmCqV9WY9udZX9J5ov93TNwvQkrFvCtdMSZoAD5accBZWTXGoFkspVtbC2STzke7MrsCkXMCo8kE5rBpUVi6P",
  "key10": "2DTzxsuSpzTWRGnprHa6GqgMByihd2fyZrW7pxWodDH8wzQRHhp3E6zzV5zX4qXTU8YHMadd8vm9Efhf71FkaB1D",
  "key11": "5e6WnvECnCQYdfJNGDvM4dwd4yoMUt7pcgmN1CvnVYVkn4fRSs1jiJgSFc8CWXjGG8NUSmjJETSV5PQYX8uZXPR5",
  "key12": "WEBRUZsg8T3cW5B8H6j1DnrXgPptapjxpdXZQKop6zC9D6vdCJZgUj7W5W3amiVY84RA52s6QJfa1nJWYNef8Vk",
  "key13": "cf9mfugtaeP6ajo2xfpWi9jjFFvDy32wXaBZEXqpP7zsEEdP4ooTvXGssKBzFwPNn7pAn6Dv7uK4kFW4144LL53",
  "key14": "Km9E6K8ekXkAHxk6LHjXrbZ1tAW2CeQMkUv7eCejeYQNYASm1gDxcG8QbtgGki116NodrN3Xu9viJ5jBJ7QKZXP",
  "key15": "2LvgnR3NzDvU9dDJV3co51qu4QEBQP9nWBAJthE8qdp1zPDtiA9EzR75n2Mqq8AybRWwndEZCNdpPHEDf2EqS674",
  "key16": "3WRd6cXXKbJfHjbaYsbyu2rxV9ukv5MSKFqV3pJar5YZQHFUFtQvk92aNHVmjVs3go9RoJy9G7Kjrs8Ek8y17Nfy",
  "key17": "tU5UxYo5xJvw1QjggYw49dhZzGeZzBqDDrPoRFVFvCserWi6bnX9WuWAML5AuqneCoHDCY9yjcbikWVHtbJ8X3D",
  "key18": "5sCFax1QfuoLNRTWUEd4Ku651PA57QLWrWyTb9fStpzitXEkrwGPt4y7GTRHNDL9vGKSBr52Ci59DHG92GadUUQ8",
  "key19": "21mky95rAfZGG7SKQ811AnozdiT4ScmbM1NytDVQEWNQveHfC9rJTvxn2YtNg3WWQwrvo1H2RnmauQmB5CaergZG",
  "key20": "2hTWPreskJfwMoQyefFQenExFhq4bWnHXwyK69gDEJv2sPifQ5yo9mBV73QNzUPbkjyuX9MHngjJTPBRWhmsgu27",
  "key21": "5X1xTuj4PbbxoaNE6kHof99WZoa63BajdZAbyvDk3bUF8gLTiTk3BXo5GhH2uXjH3cYR8AkiF8TA9i6LKNQvioS1",
  "key22": "wZ1g8Wn5xiG4xBHaqX74WK4yE3cs4TJYt59fZvYHxoV188SrWQR8HiGyMuUS126iVzgwoqhAf7HAXANvk7wKSEA",
  "key23": "67LYQKPzxD2dE6m6xrm2FoQ41nj1eSWRqPkySpyY1PfqL7d1wnxgMSafzpCYK5TT5pn3fmxMHGbjuyQHzzNMsj1e",
  "key24": "5R1HBtXybwxSm5ME1xfQYrxPELUC9kmLomhcCA6CaPDrWvkuVnXTfLuDyCgyw2zKGK9g1y8msazwwWpyKdmqEprq",
  "key25": "C3KKzXoLNqQMkCkMPsHcoRvx31ANp1QGRMfpMXaHFyRjctCBYmVgpo1SBuETy7FMD1kbdTYCEbgcywCCajmhnzn",
  "key26": "3rtiGUeYu2tJ72Dh8zG9XackrJWFGckcCJQUVfvy69bMFVxycXxixvbKsU7UUkrk8EBnvEZvAkK52cVVa39WSy78",
  "key27": "25s36SrNTt5iEuLggXXd85r9ESfnF8eKZKHb2UdvNyxgiUj4hANqdAb8EMUwUzc7w84NkfFVXTKWqsmhDnXbKdoK",
  "key28": "2y75g9Cczu6jkddwk3GAh8yKRfbqTpVoQ7EJMfjT7vygtNXiprWwnkcWKSamsY3Uetp8ycyAzjBSwkR6vQ8HAdV2",
  "key29": "4DmhqvbA4fRpNeCD59PSnDMDVcbajVrwwcDdTXkHbscPQREDix4aw8S64NLTaTCVVsPXNcyb2vdizd3X2EWcbCge",
  "key30": "2vKV6WWcU2od23kp5Qr5Ah9t6nXKBKa8T76aHN2772TMGHD1H9TvN7gX3jHPWH53669uPh9jY59Z4LzcLDXsFVFp",
  "key31": "3QTwGR4vz1M5xdiWMB5ey7iSwP526mfPjPcKh3K3qEcTFbzh2EeXHQmogJMivhZZFEdWZVCnQHdPgth3EE5SX4TF",
  "key32": "3gv4gHx72XaXaFr1V1u15Qi6X3Wj5Bcrj4HmBiJs4gTqvkt3sjR96W2CpFFtegsEi1DRooQawDdPcExSpzyxmyL9",
  "key33": "5XA6SUa6Sb8HjpehYkBeGiCANMpGfiVE3qVPbTyqTHVFZZvy6F54wemjSpnLyWZwNxfgoh2QujzAXiQ1pyXg9nn7",
  "key34": "54manDeX24YGBKZs9ig5XC4NsmH59UVo8rXAFLw76Q6Gc4ZyNrFd3YZqwWQBSfEET1SxsgPTrTTNidfaZWjeBCgE",
  "key35": "unizMnWLvgEqwnkxBu4WGtGV6KtTjQCkhRFHe7nLQuVAXsiCXnUWJNtvb5XLYg4p5RLc7qMeWUAKDPevgsQEPhe",
  "key36": "yoWkDQkJwTfJdEK3qMYG1vBU4MPWuvxYkGaoL4RLhndTVudQtCyuoGYnuiHPmfTtjA35io1wMmSqrsbPcsJDxao",
  "key37": "67qWKSimeaTPZSFqZVWkPvK9DKjHLRbp6CQKv2CR3yVuMhG6j9tJDoeEKf73wnU9NhN4xn1PnJ2GVLqwoAtv6VcS",
  "key38": "3GdbnYvzR339tgWYW9MEdydRbwiaMy1KzPTfDCqVZb46GYiwZk7NfFVES9vfCoVTmwzcZMGuiYS7vkAPnhiABNUC",
  "key39": "2BDRR6dfHpqxEouMwrA1f1ordhTUuGvB3iBXu5rYQrJBo6hejirs1LEF3VPSL3Ceb3nzycvaavq1ATRAg7TxARjS",
  "key40": "2Z1wEmmkoJmGs2LoTWKSDj4ocEcPLrCMezDVJAGP6G3JCcj9QgbbgJKujohqpwnprE2UZ93TDPFNkd9rE3AWDg9U",
  "key41": "2Hn6oGEi5NpSbntZHw2stgZtxeNUZ9hvBY1qqaDSsjn57ESQxcBJWw9R5EdYhCidP4EQqaeHxLfbHumxGcB9FyYL",
  "key42": "3VjK93DbmdihZiLZq9DRe8U8XJHGFFBAuW8ADoj8crbL5N6meb3xUVRio6obd1ybnNhsFC5XL57Hj8JMqBeNX7E7"
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
