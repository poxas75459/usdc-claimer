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
    "59KngVk3LTzZbgPUQZyTEwddrgzMPLJPQwzZnBFTRSfVasr8bCUb3NDZhLh1VDxt1BRZdnEmsKjFvwzXaWFifWwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Y2fur29rFAp7XAoxSypVM9qBn6NqpscZMtzxfMrirQuCnh8Qo2a7N6idQGcpjQqsPZdFYqs1wmF3sbExzjG748",
  "key1": "ZXsWtWzAG1GMRPybf8a9UvDWsjX4C6YhRmU8WAaCqFtPLm8iAVJoUwCYnuJWNK4y23cNA2aEbDx8CkSZyF2CWPN",
  "key2": "5hjLgaZxV8upAW8Nym5hh9WYWUBsGNFWcTeJytzQ1uNfViQfrdv73mDP7wo1Fpi7Ep7s1v9rVHudbXhusdiD5gFx",
  "key3": "P1Kmaq8qoBMhRoVV6fWpy54RJqLafKLnMtHSeZSiyTgLNYpmaJfQsQZKXmUS55UrmHPY51pBfgARrUL5EdRs7Tn",
  "key4": "3gea4AtN7otR8iXyvPHHAsK7tC2MQXNHE2aMSCGDPMY4JkZX5CX3n1kw277vArxtHEzrYzLKJyGUvKkXysDDTagK",
  "key5": "2L7QtP1vQ41rvby4sUbhD7o95Kowey1hPGnSUU5yC1fumGdwCHSRNt6j4seEjUJD7CsB8mVJMAtydRG19dVFwH2n",
  "key6": "4P2LjxrVB7fhGLYV22r8kcuejEVnomiPGPDp871N7LjMQnsQLUazTVYbdT6yxWhQEvJhfFgvbbtwFdWumGgLcvQs",
  "key7": "3DeCQnBJ2erRYfurNudkXSK9DVgGTfpM7EyfFpkskMQnzhEXvv3E9trro61GhA4FHWnA2E3xPuLiWii4SiUGwLoY",
  "key8": "KmFM5jkwHqxfnALwz42WyxrXgHNuZ3tA6aPdRiyHknaXLZP115iiEqq4Cbb5MizKBQYp4H9F42sKJnWocW4Hwf6",
  "key9": "2ixpyv6N7dQPKPoecrt1Co8rb2xPN1Z8jLBjEy5hfjfcxnRo7nHvTZcQG4F1YWVHpoHKPZsqFc9LEzQZ76VDiq2T",
  "key10": "4Pg97mtSjeN7FtmAE4DhjtP4Cbh4Bkfm5qTXAbe1rBrwWtJ8tpWwKA9dmashxZ8VMHEzvqVF81JCt5q8muTcHfrK",
  "key11": "QAGeSJSig8wR8eyDSrTJiToNEKPYyA9fkxzCofhqaLbVC3xKhzUia9JR95GvC3TjdidWrtfpfigqS5HxcemqPrJ",
  "key12": "36Xfud8yg3AYWxMf7T7eJtDitLrPKTYessUQcyxNqNXR49HzdoBfwZ5v4cVPW3GELMYswKYZvwy16YDjGyWbiwsx",
  "key13": "4rcLySAL3JgjFbwvY24X4L1TWwfwJoydPWqRzYKspexu2tY8c2AoUKqCjrokJrNLYiPPThtLHgkDvaDFnpYwLYEP",
  "key14": "5LzYqcdoGN2rCuLceyQ8XAoi6Fp1URHhMiq4ZTNiaHoZmxikL6KJgrkvuZtH3zhsQBf934LDtLkKv92KkdECpU8W",
  "key15": "4xf1h1VLtYuU6jtu5qhBtqWvgpn9ET6kJywZGeb78Lgt4Wy2bWUoPhpwFrURy6i8dxPuGZPasMQrreDZR3onzQi8",
  "key16": "3b2cAYN2wF7KCmqyNdn53JAzpHAuPitK8zyCAYVQAhfwckNz3fAbbBoxZ3DoBaCugZ58CaVJBPpL4S3Cm2nPxQAf",
  "key17": "m6frd5n35ubMaxQm7qsuo7UtqquaoohXchgpXdpjzkJSPJz1vrEDZkCk7BZYwNPrwBKi3ohbLXHTHxt8TnBJYR4",
  "key18": "3S8eC9paG7erau4B2xZn4p8nGLJ5FdKt1GWLD9J1mv9zuD38MPdYR7RBWDM42P2XVMLmsusnHPjMFxvpJjNcrwm6",
  "key19": "2ULQRzaUhcTa7R81xNSrSQMn9ibnn3PMkhWj5S1EfHbEWNDfb2SdpTVC6UtgiamgZyspVPbKktCEXBpgNpgheiwm",
  "key20": "4fgNBVGUbTd9mUm6NfKZaiZDtefSAm7w7iZM3Jkt77KzSpSonXjZM2cXuDiyCEG3QW41MEb41gfPkoToQQiTehK1",
  "key21": "3gWV9typ5H86YxH7LpGQs4NTnftgjLwUhiGncpRQdYaKFxD5jLa57i9V2XxDZqrFBnjM25tRwTUSsFNj7q8ecKsa",
  "key22": "34tUuLYUbN7D25Uq8X2bXhVvmaggjvfC7uwSg5BSCboFoULu1KG6rj2BNCQLsW5RGdJW8d1RRywUBJCzZF1gpLvW",
  "key23": "kaVf61v8YxaunXoNnCtp4NiUFhv3phGjgWNc2bQSxACWrX33eW9wX8nogxSM8kMbYKgMN1yspRBCBcsHrpo9LX8",
  "key24": "5esYd8pJAwSqFabRG6nGGL8kXEPz9qsu1VUNkjSxr2wyrzt4ejW86B8kbwfutQeuTXVR4zXLWR3GXxKN2LvDUxd2",
  "key25": "EVt1AQYWG8UCrgvjJ47MEf1uxV3yyPVhoxHudKGzSZtv8FXYHFD2w1yhjkneWHJxa72nk9kHEmV5CqQnrL7PGPT",
  "key26": "3QSvBAQBhzeFuqzrusgUBa6LuoXNYyUw6f31YZbuQp4CHmavGZ6gsCvBgQqvk1KuvNGnaSzojhcHCbUCVLV9i7Sh",
  "key27": "5D8rk6PRPa6hQr6KKimEHZT98QYmGb527xw8tUUYZH2db9PH2un2SNtsnqffEkpswc52Y292UD36Acdzu5VENmzL",
  "key28": "4NyMcMX8bPiJQMwpJdSxMYfTJQJpayAxkkb5iDKjmgY4CLRokjG3hwi9tcbasvJL5ArFxmSx3rpKc6esXVjit5Fd",
  "key29": "5T53K7hcV9MgpwCc62KRAYkWE27KVz8HfhFuzCrTkUZDLrwo5R8vJ4zKHP6zprxmeu7Y7uwFm9roYyaw66jxtm1v",
  "key30": "kZ7zcaAFv7Tgqqtz68FozbnzrtTAm1X9rkXyzscLGFt6Cv7qtn9sgQXvzHWfQcMZRrodGP6drNXPdBsJ2x3Ekf5",
  "key31": "562w1sXedygFUpRqfDWgZZsm926WamD6WD8NXmfftkt5EmMVMYwq5KTV33qoDnCTYcsRcBbPuQPUJpjm2hc6fhF9",
  "key32": "kstFMqVrMDS59madEJHWhqvHvZ4TbPgADsihHgW7HfypnNvrKH23YSVtbC413cKyNgd2qZ13TtEZqyFw6qvWjLd",
  "key33": "4BGPWpEYqmFJ3tut4VwAffoJ69PRUrT1zALk4zDxBeqjKsYtTxNS9YqPP9MaJPR5FE5CDCC7wVpphPFAY7NFrSQe",
  "key34": "3WgvkfxjrNMNW2tD7ADGZiSveKurpun4FWGzMWCN4bBD1rTsCSEA6rtbWsxmX9GPttxzKutP7X94qTivNBb8fHdZ",
  "key35": "5KCYGV1m1y4CE4bExqKfgMH14opATNyWxzZgiGoaQoujJDCYZxrTL21YJjCt3hb6CZdygzSxvCwYsM1WqcNFWwW1"
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
