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
    "5zWoFD2ArmP3NLgD79nDWqYiLALnftxgwGtzQwXSAMCcUCyF9XncjTejbG6YbxgGaukigUt474VEWHAom4RUm8mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uiGzmbBTaU8gnuYN74fvbNUFsHTuJqTgFDavucajGPMb6UcTEyAvamTD4ZWkR9Ueo9SUfaHWkFJxisVsVKna3K4",
  "key1": "4B9jP3Fh2X4xE5pjZ788KHktkqpdDYNHVAkBpJFGSFgXT5dviXvSTjao4Ky9Vjszuw6JSfxPxgXcRj1QvKE4kSZ",
  "key2": "5DJM7duPeUTpCna9ukfLYEmY24u8HVp8ZnV1k7vNMpSLu6so29S9h7QLd379Tecsef73JrLjm7tmTSRSkpxpFnkT",
  "key3": "PL3K4zF7amSRFrJ4C4gjpsdqkuqCSrNfU9yLbv2NkpiBweEgLNfUwbMELZ1okXiMHEgcsbaPDWKyoLj11FJvyrE",
  "key4": "3MYQCnoUkKzNbQTuJiStkmx9kuM8YycsiCs2kdffxJyiPaf4yGgNpguerqrJ5eTTE8KEK5SFgttKGJWvDZeLMjg2",
  "key5": "4tkqkcXHvpLNriRqQ9KvnHn6mh5eRYEFNpmiA8kwi1YFzdhr322rH3NmhAxpnggYgEpieSKokvRwd7ECSkpRRtgY",
  "key6": "5cyfRBXRU5CWEYN2TV6UGTeApocFTQiJmEc9TZRVGraiB8hVFhtY1PoenPoBF9ciY2H8wqjLrncAoffuRUahNaPX",
  "key7": "2wEV2cRbJyAXe3zUX159jDupLnRWW8Jo4XtqC3PXHGikgCtLiwYefn4r9jp8uY5TAdELYmoDbheC4YvMUyi2wEJE",
  "key8": "2UfXjLJ57XJwqNktsR9MX4YvXAdiafHpMdSxtbhiUuHJXuygWgpz2Kpk2Hei19ACV6Lcx6Ao75Le5Kz9nAzfCuqb",
  "key9": "2RaxAoLVVjZ9uDQoZEnaLZCwLgRb6dALBv9HCWGm6BT4QUdocGDwgKVUJDZPySee3EcLGVnJv4E3uJKwE9FVjAab",
  "key10": "2DpPUczXZ4Avzay995x3pAeSjhmTa1CbTjCZPWxCwq7VaSArRbJvNJseEzin9DwnHxLh7FHTDyENDCjpzh6wjY4g",
  "key11": "tttiq69JWSRs4RdU2Lib1FoLoP8neJWQ4vkkPnku88WMsKhcrbueMYcGNYTaU6wNxegKJgacsZppocWcGymRCyt",
  "key12": "2hiDaBf5gSTFk8pWNJ6ypStcEpUCTc36ygWsVyZMb74GNZVRWpXWCpQNCEJdJ3R4ypfaX9vzGmqupKE1UWAqduPU",
  "key13": "26keRKnmF7trqTs6ME4umpwaXW8rraDcXGs68uR8KEZLmneNmanKBSve8VvEZSJrhkJxRNDCA7B2H5bre4wpGqh3",
  "key14": "4kaRQXDVKSKQyD8EmhUSkMpuAsDg64azWbKULRX2TsAYBcgNvoCJx6Rh3jRWb8Mpp9aToUgCVr9XyXpH7ZaSgPJs",
  "key15": "Yef43i1niXinsWimUb8EfcsNf3nmQTD9oT8gF1eUyHmkySsY6pUHhiAVDZDxLj6RUH4PGdCFDZRJMrUHMzezBmc",
  "key16": "5WfEoan3N3A1RKCzSP8Lnrh8iq33uXe2ataidJuqTi76GyY5zg8CzefWCBmAe8roDHmtjyTqXgoZzTNWr8zJPDW",
  "key17": "61gVs5ev2NQp4VwqN3raauDnCdzMtjbMnVWVgtwTdGJVbqrb2rxPEWcbDzfE2xjaZH1G17VqjgchhyEP22zDzbrE",
  "key18": "5PG1xCTN8kXtKryc7y4JqgJNwAnmqJioJxX8HBB7HS3MHcpqCLn54jH6f6QgTpAhbYMB4iEDYP33VX9gP1mKGa6Z",
  "key19": "5dgPLwwHWZRLNxQDdUCiEMDLeUYbkLsdRWBZbbYtQyCJXtFjJjtoNNf5rekDHbw3qLwB8GF6gV2r8CBvXGegfANW",
  "key20": "5vkFZ33JwueWk2Ejvznu6B9iQkF81EqPCFqhXjmn8cWn64kpt5ctz7TnexcSK3oLyTjAGz8PZxWUdv8BNUebjk3i",
  "key21": "7BthVXoLJcbnXBjyohn2NeV6Z3CDMLL6fj7k6ADTfKMr36K1krVywDHb4116GtgsNPMXumzjd2y3SXZRapgC44R",
  "key22": "dWL6kxkm1jCHqH1HMs5xHhEhFKdkpyfbGMYp4E7BYWYA7xYdVwNdjUJZrzNxqYyANawjbqyqc7NQ3VmEXkK5Cbc",
  "key23": "5W2m4SCT13A4rwxSoku6LV5NsMTFdrtshoDaZQphkxfkCtqXHxeAfFqXzqPirRHaq4JSiRuXh35oaJ7AqE16CZRj",
  "key24": "5L2p3b3FabDSx6ZEuyWyBpQwCfxjat8jcmgB1Yg61SXrBrtrakT1pvW6poyhidNZGweSn8dcQm6RawPKnW4Vrwwr",
  "key25": "47h7vdiAeLGFcCbeBxXMjH2eVjCgDAVH8Vvy1DTFBXqCZtB6NAtnFpSPUbw331iaN7sLhoF8aUTPSuirKDtPVLmp",
  "key26": "1kcbhgKPNbb9B5BMZWKBYjPjusCRHrtPuzxKMSRz6zDXqt2wyxiiomoQyudLUgNhKQ3s2r5jsHBmKT7aKg1tioP",
  "key27": "2MuAnKjHnBB2YZYfAMMhsftu8GRPMHdQPCzerXEJaoyMQMWZEhXMF3Y8fsoPAxVZW5TWBgTghSW6z9HTM2bZpdDm",
  "key28": "3UWrcmYw2e9yk4UmHjyGJjd9SwQsYCT294Uf9uH1ep4Zgf99tXA9UZcNePvfHGiL4cNKEeVq4QzvBRx2vLuoMjAP",
  "key29": "2CosPaDMiEUufB6VxaJY2JJsWFdbh5xqd5jjMYyU2rA3EqKqKP7dnc83MXZTtCPDKgaKTNT1hkMwjGfZTe2wX5L8",
  "key30": "4YQYqUrgnQHTzbySwa79nbSpfEBS17BcvqPLkcnjkw3dowvn98snri94cTd6hSJkekbtxaEwv3Vo5vsya1VUB7Px",
  "key31": "2oPZihmpmwSJFM22YDj5jYrMr5jBk24QxNhuH327yAXU3VrYSvKzt6ERuTE9Lpj5VPmDjg1UeFKa7c8kTgc2XnFj",
  "key32": "5hRKEj85mzHsm3bkmeAimdMNFxWDpgebNH1vwzhtfQQziks4LswSmdNpwxGSELT6i5RiSNPsQwKezmS7ciQKJ7qe",
  "key33": "PVg4MbYhBKBsyRTNz6Kh3s6Q3oQYAhZHfzyerWBYUHFuXf6ds7pizhGektc3jJCENYdhTPpT6k381D3EvyZsgJJ",
  "key34": "29i5EV9AjxEKxnmVbDqbZGiqoKiGvYn272fQhjGSNrLmjLjKrdFV5hcZsAr1NoxZs1PAmeRbfram5cm5RYgiCsvx",
  "key35": "4GcCtfnuYy23QJvSYvNoGWN749F5qDPQxUkX8DVFkZ8SQQohnbdxm6AYvPRph6HBALjEja3veGpmRqic4juN7gRM",
  "key36": "3J4axUiJv2eHrmM9wuv8mbsaeeZaGkh3KXjmWtRDmLwyLV6jSVDDpVXnE1T9vMJajkc3qjYet7X1BXLciG825Hko",
  "key37": "LyExr4fF4jVRd5o1SQBSz5s6Sc7wYNZWRGJA6nbaS58owS6k715DGUJpkRdUmxUUsjBMmDiRPPJQYAW2XxaRgyh",
  "key38": "3ruvVG1MRLFMXKsznTJSN6sWUCsgZa9957XsXa8uz5HLhPgqB3voX7ZSSWE8xsHvN28psmEhaKtME4d7Q7NsdHc9",
  "key39": "r1nuNtNKr7rzw8pBmvvWAR2q3sh7j9v9g85GWbrmZ68jnew3kQ8riUEMdEMgJYNcUpNdwgbwSuqoyDHBUcjAgRc",
  "key40": "5kNjv3Q7Q4shsjfaQqmUQa4pi9rpDXuGWGGLUCQNUtN5pE6sVDHuEtAPipEZeXmThpmETUV4FX4XH38rzcUog34i",
  "key41": "3KsRX5PPC3hCH3MN5qTbXQGz9QeYk16epZ7C5UfguC9pMfHm42Uf7765NKERJrEjW5UNbrSLKjLMJYdcbk7NqQxi",
  "key42": "4FgKubZi6kjkaevgZvb9cMKpr64nhRUFMLqTpZo5ffHGBv9Uf9fXNV5uwAFYFEGn79sUUD4sYEtXQqn7178DUKv5",
  "key43": "5y1E7GsFkkC2t6wvAh3mzZA4bjg5EXGM6a9CjvLiLJyL1xwgZvynwKFrwtqNDuH89JoCNrTKgyUQHbfTisW5QqtL",
  "key44": "5RNCY1AJKJCMnv5pkjKuE8Smc6CgNhTJkqLUdPpMgZR8zq2UbyN4soBymrwuVfJ7FkhhJsHerrexWecPXEDYMN9j",
  "key45": "5HohteBeTDxijApLj6SAs6Yp5e9GzhJrMRq5JWCRcoLzkMnLpW3uCpcvN1ipiesniRwKESFDQgnjwPXfReoKfntP",
  "key46": "4FeCBFakTUhNyeVNFfxZciiqX11e4DELQEmPkqEPRguvK6RW4bRmsREe8SCuRs6HVkcFNnvAMBocJnxmPZMADoZN"
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
