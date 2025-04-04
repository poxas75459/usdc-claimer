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
    "5FM71WqKwcGy3jkBja75HVzp9UT24qy5Xhi8HFBdNuBQoGfauq6UawMau9medifKAdvxYRYSjZ1qb4ttKcWWfJL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44oKM7hc82kw1TNSvVdyiUcBrX5dDYxJxb4LrzCTZnA8Hw6Y9MaCykbYybCTR2dPPEDzBpou9R76inns3HY6QNyR",
  "key1": "HKYhHNuYqPmozPHRxKKa7ZTmwMu9hyLZWDMKWFMENAhLK5e1Tjra975tnRgBXV27RmsGp6bNP5BDdmKoiN7fVBW",
  "key2": "35uTGH7KPLpPz3XdYj4xGo9QZjDFWLVChM7ouLHJsADvWdGs7V6tDNBucrArc1kYarSXdDfTRw1NBAHvZ1kdmpJm",
  "key3": "2cWiEgeNJxmqviybhHY3BNLBKbPv99gBWqAz3WjmvCUreGHAvJ5Tkt5rPwPL1UkoQ3rYcHVNkRacDwyXeDBfPU5V",
  "key4": "57XLSD9CD6qTE6t5Hkfh8MigAWSV2YvyUuNB1G822mExyiwPiJCtPgruYePFUtxWWXgTf1A4t45ZT47wuEwcEb6z",
  "key5": "3SrBH2dzYYSizVmaoWSwTr3AdVrmRXrYMjRFpuMMiZBKc9uw12VryjB8BM9TsLDk4QL6pazyUcgY8MyRXv3ZfeU",
  "key6": "RVvErqx1okKtFXpCMQ7SZxwGMWuF7JBWNKBLQh77fQzFLzsDeSid5NgFxhLL28Pa5qfUQPcfHZ3BUnrUf77XNDC",
  "key7": "27Ym5HbRheFgn5z3TuTbhojGGENdrCphkSG67uizfLq3VFJKACWX1aAqP7mNeMBSGSCq2zWoKhhPG3naiNw53fjR",
  "key8": "52QraxZhqVrS8Qu2gZBp46sMY9juyNT8FnQQDqPofZxtjBr3WsNQatKkqk4wMCBkskEgEeL2wZn4PX1Kkwsb5JYZ",
  "key9": "2yJQ41L44p45hibbpQyZd85acXJwSoX2jQropfxPpzJTxeSVPDeUhPADoKi9VUZ9H2yrJsn2Pedx6ZYUHcjEzh8R",
  "key10": "3tfAA1nfYnoXRnaFamhaPUk1WurVXcQvbLRgAXTL87VYwBtBqpb6ExVnyBF7acYvNATRFJV2SKURhyzwxoMC2MhD",
  "key11": "2BMWEJY3iet2dqncx8dqVbSmGLK4ntr2N2GjDPKwgiJxhJKMg2xShvb2wdoxoeEC8M3istbZ9YqnJriWecDdio2S",
  "key12": "3QjPSWRYvcEG2WPWeEEr5Ukep2uczcYPqi6VWPF3RtKM2UTVFtVoJFa8uPGMWABccHsbSDbdxWavLmmUpzXP8KSA",
  "key13": "673iipYb6EB3CjoarjUj5uptPQ895aRorUEmyPWAUrAyadJwfwmzZToWFF6FJHKh9RQTFZy2SiEG7b16S29TQuCU",
  "key14": "4w38eqixHY87RVNzwuP3ifWWPqiEdkk47J4dvr8pE73QTHMnYEtkvtQUCyk5RZkDmW32kZUmziSuwtSbSMYBpTFb",
  "key15": "3NmcvpRQWZmzSNJFj5WhqaTg1novWvCYZZ9hbrSSfEns7nttcxkmkJXoctDfiUtqnBMz24ZAqyJeXNH7Qp9SqJs6",
  "key16": "2dS8YiU76kFb3FBtrUFtUyNySM2dStmUpwDTJmF5vBqzPHNEj5ydZqd4zpzpRARWjUaEcw1QCSizEfF36yQ7K9AH",
  "key17": "5nLxTnuPgp8kz5nyKXYwFoYLznWmerBhC47fpf89fGApesRnmnsE6ZTCSNJg5PQKpBuTXMGcN7VyBrmmmvLiuJh3",
  "key18": "3Y4PVArMfanbz1vbXcWfJfMnxSNecToXQtubkHiRxmfFYUTYjjnpPqXC1bAdL4xCNfUrZwJV3fswY7Ldjhv9Ffe6",
  "key19": "5jB6sEPUMdsZxAaAA5zvGspxxaWrFsR2syBzwUh5coHHikZquuqKzuFw71MgWL7qEhFWqZpt3g5aShNozaFdMxKs",
  "key20": "3sgh9bwdgYGnNZrDpVokWGoigJy5G9XP8Vzi2CyzvvuxKbDafZuftzzPuA7etY4jVXPwKAu3ALj9qo3VyniGoreS",
  "key21": "5ewCqq5dTzK4v2EWYFcY5XGmAUTCgkmhbbknH1wnLPatrhCYZKGqEJtc5S9aodifSoexetaPSuKno5PjMaK42bim",
  "key22": "5schBsbRjhn2DGeTHRiNnYagCgWqtWVwaDfNLdgroPQ9T8rET466e6xshoZcakeaFsFy9TwTKtYwLFVb9Bh1tyDo",
  "key23": "7f7moCnGUREt6pcZcU29oga93jDkHUr5XSMm9dQgW9E8tJ6Eh7JH5ep1gWo67rFQr9Ud1c8gpmmV8e5yJgHnR9u",
  "key24": "rfT8rardfmMtBtxCBpGXot1P1AjxMwte49kNanRwBAYd2BzPx3zbx41X4WKxRWfxVmzRZySGgt1kFsSdA73QqqE",
  "key25": "3yEvR32T9CZPDzWzMaHFNjmPRNVZ4qzFwdGKTdPcUnfafi4ohsKQLiWDEoAzZ1bfiF4ZBw6g4PRkTjFVhT1TFK55",
  "key26": "5aCVgfCYQYvTmrXQUw7GMgqYnj2GHy1LkPFZjfQgHAs6wz3JGG7cTj5om5KEohJYiCzKJVpbSUqwhm25sVA89Z9P",
  "key27": "2LY6nAeAaS3G8FC71rtmtQ8MuYX1GuufAL45bxSEufRMNVTmeQs9JCZH1MoJQWS34WYL4CZ94CEmbsXhuTRS2KSg",
  "key28": "4YUpXBShNekAzVwATnndvosSxkpG2vQqL5UuFinEoziaozv3vcAcTUUMcPVvybA5EwNsTMDYTD8KqUAbwfDyBnev",
  "key29": "5GeX5xSXvGoSJy5PkMd2J2uFn5c7cKzqMD6cBQ1fML7UxxBxs1RviQcfjTNL9QkLggzBkZsX5aWHuJ19Eafac27u",
  "key30": "2VAFPT8FbxBMrtGKPShrXPqiPNgo3U8PAMYN7GrqGjs2xKvszzvs2inqWJTmH5HzUB8cr3ydjmmwVgG2jkKqrDMb",
  "key31": "4Pr8qoRstChGTnSrkkJRFQqLEArtGthWWDrg14JwUFuu4FNcdgrSd6vuzpB1HdRenHFVwzH7V8mtQp793XrceDha",
  "key32": "5Wv52QyUtuTiXEith8uzSmVYe5dZKpDxqEHsUNeM63TQGDGDLnd57eXuf9fgkcJdKFTAVTY2Ac3eTwszW4oRwURc",
  "key33": "2NQuTY3XQUgKJqqBWW3GcCXfmzdEKTKpfV9niorJjEVhStdJb5LEq9VTMkPdQpXWoo3H8RJcCAn4bfkn9xdbnaTg",
  "key34": "5XttCtmKLqyRQcZHhiHJsrzf1sXHDMjCmd9NT1k2brNrbiXogsTVGdrVMBBXNHjwadsTX524UJRx9pm3dcRaWarj",
  "key35": "51fPpkvDu9mR7b3BTnRUCjCH1EQ3n5ccunSP3wSopnQEMCBXuf1jsntVm6RtWMUxqGDxQ55Q4u52theiz6W1kpmP",
  "key36": "52iouDrRvabi32YVr7cAvavEMCT3PMZPwNhdxPG1MH8YGqCzxy242mnemm34ozN5Fyo2ejKShvxxbCy1BkrvRoRj",
  "key37": "4ahs7viT6CQV7b3SdMoxsfUe7jS2biawJgCSh2FMgD8JTdBoGwt8u5VAVyWiitj6V4ZpM8MJoeRt9J4FpGbhy2zt",
  "key38": "2KCRACkioDHvFBcGu7DpYkfLFbiVpRFM8T6ecKLEu3WEHgwfAJ6YP4w59iuEH6XNCMzdEXX3kpp4zqB3oBriqtZA",
  "key39": "qwHNwEUGKVEMBFPXBYZs5sQ8oXF8dtja3F8XgBHt87h9qX6Jr4XCgnBfLNaMhjxePifYyJkSntZmVbhPqBUQWz9",
  "key40": "3N74oUc8MTHKKXcL4jD5KJ2Ze7wdyaG41XEepsBhbwrVXqmLHipaLND9NsXhgHFjhyeTJFccvCYaEJuuQa3TpdtL",
  "key41": "2hH6WEYz1fszUBpyuF6ViHfCVahhH1HhgEVbPC5Z1r6yrvb2GBFKTiL1HJaEfHqTrNbx3ycXeocbDA4uaxQVt4GN",
  "key42": "4oDAV3qmDLkc5wePeDuegkLE6NKKofzw2PyHggPGYCwswYqvFd7dg1EMwEUDDLrDvSr3SHQHfg72yytCLhdacDnb",
  "key43": "4H9A3s6PDtqEAs98eVxnJkw7jJKjCVTQrx8VMSkTDnq9sAJDVj1zdYfmEQHoESPvkys5TUEpw1E2gXbnkJTmo17r"
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
