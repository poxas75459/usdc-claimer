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
    "2MsdwT9trMbXu8kTkvSfpxF7WGb8WLD8sTLdtmAvfJ8pTcjHAZ8zTXKqXGXuqcT5DfFhcm72Fuqmo9RMKs9Bhy1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptYdkTRJZBg3NqpeEPtSedyC4NtwRc2xKZR5Gc5UnDFniw3XdPphhHqv3pLRgi5ipYUUr5Pck738gfZzm3CjDWw",
  "key1": "2h9ed6ktRaiJVaBpVQVQmBHL1Rq74LCUSkZNs9QJeLjehXcQBektMKZPiTQYFQSik4QBFA4mKHM4Wei8bE72Gn7Z",
  "key2": "5Gpj8TQJcFNPtR7ydJCBZZGpSoyR267bUnRg72ovAH4L4kf15taBUBo7ELvyfsFRVZvaH7k78niLhV1qNR4Bjg7F",
  "key3": "38W6Zvd7WzV3QZUHemaR7SgfaHxLjcs7dx2Ji3txnyao1gnqqTSHRo95g3bwrECxRmJHCMXJmQ622DNAC4daUxzR",
  "key4": "48H3vXRv2yCbP3udfDLxsi4v396UAVtV57BwSSWoBQc7LLjstK1wDZmMwa38RGiaMjzCzvDqqUTmVFmn2orFXVAG",
  "key5": "465tpP2u5WMgKoZ2eKFh5QRHvCjBX5PvWWwdhDeVnfcK7nBzea8j48LFF73jkbeu5oecw5723JYXamTqEy9WzLU9",
  "key6": "32KWDDAa54y58gZZTizz2TfbeNXtaSbnqNVsJKVk1jzMVhuADRhVhb3cdTannRiW1Fi6pch8Uk6BJQKGKHVhoBPm",
  "key7": "4AXAjkGDZJtVCeZb3VPGf9s3auySCjXuCnaBnqhTuPXHTBLR9ZvHb5v23QaqiTLvZjCYsGioV4U6ALf9eTG4Btun",
  "key8": "4XF75REqq366gJ9f8j9YJJRyEhxJ53SGmFAQWqdmt6EV98qehu9xBK1xaNKbg1D7PQ3FHWMrFjGA73bLu4kUavmQ",
  "key9": "3GuAhgKW62sp5Mm6cZAn5D1zL6TRV9v6euEKrBdnNyYPdV45ViJaCqQhYJ1AWArtj4rWHxJ6Gd2YBk7Pc6G1Kdbx",
  "key10": "4958vawc5ju8mQhrfFEXdhu9t4Qt52iZSe1DsAheqJvkkbJR3Mq1dgDkFfEPTLtw8icaEuyDWDUEfHedL2LutBur",
  "key11": "2B3qJgLypazDncWFPtkXRU5EzBbXBCgkiYeNJcs6dW3PdXnW83soRrqxEsry9vjbfRGaGjrULaV8QZ9uC9xkERK8",
  "key12": "49KigtqFhZsxERXhxxqzPisqChPB8XUV3GBUz2Pr5Uuji9967qcMG5w7E1WEgqWrEyn6nJpxEieHofQ5Hh3n85B5",
  "key13": "4r7vALsPeNcB6MokmBq387Av6nSLCXDLi8kKeYbUyKJuoTAhbXBDn7qpcaYQNkVpUbVY2NX9cpzKP811bWUQAt1q",
  "key14": "3aXTwhEKYJfhuHYb5aTyZoZUREiQCcF1Yf2aRDMGXfohB8sbvf4Cw3Sr7dSzVuosPz6wgRiWPcdFMnHd8QN61fGq",
  "key15": "2NUyYrBq1TdrLgvQMuy1KdafHuMPACdSJsEzu57pdYhonYJ2vQM9ntZcnf6FBD9MtUYYTW12zgrUFSYFG3drxj6R",
  "key16": "kpc4BGyjywGa7bPykkdsqHHwMc8Ri6qVnY4bUVLVZWpp652wrenasT9z7gTRcYL91ndzft8ynBqmRw4pTupeYQu",
  "key17": "52K6dkwj4kywMJdYWLu9aQt16U2KvKwh7JgdpfMTM5ZpxitDaD3mehvJzTwPxTTGiU43TchDys7jaPxt92AMyJHD",
  "key18": "3wi1fbQDWm2EW3TRZTkKJU9L4ESLMy9v3bXDTL1x6KzNrVrniAcizXTdL3BwETuVLtVDnGpy2u3LVA3haYrdeHmb",
  "key19": "433ecrAedVTzs1ATtwcUUuEwuqpNfpktxS4HamHcZxnesnWjXboWxsp5fyKj9QCi6FLJiN9At9HA8Zkj83hKa1D",
  "key20": "1o4mabK8igrFskW8thg3ipLjx9M97kVPXAu8b5yVV8R3KpcTQAE1zrPTHr2NMV4N8vex6hUeqJBbdn81GqRQ47t",
  "key21": "5DUmhBC95LwHH6oykhQjcP2bGbAf956riH85mfADjpra6o9hQvMFUGP9xki7mnqcSqKM6cqRk3N8ZRbfY6SCu1gJ",
  "key22": "3dX72McgjhWWEDVXJG3vZNoaJRFr4PMAk9Rfd9nC82RWcCHgHZnxn4Hh6sMFKRipGWrVuYm3aj5h3aPxYUfJroZw",
  "key23": "2sDLiigin7mZYKd4vbgGfEDno1JbeHfab7iu8MnbXHq6RproFqVRFb7j1N1DS2rad3Nx87MY8Sod7xzFquEfFMac",
  "key24": "3gpVkH8ATxzEhKLMqXnktahRT3eaMPLnA9ysJGacfcH1GEC8ysgW7siBGy6ozMtFaN46jQubyqDKvUVj7ny4xyGM",
  "key25": "3FzkFjsDBXXNCJQHnzny58uZij1akaJ5hPWMWhQvByBcfaxekH1XQuwPh17AgWGpf5p1nFGPUA2KZp9oMXiUh4RV",
  "key26": "3KTtBMvfFRMfMTspxhtUdCuhhU5vMqGBg47HPNcgwykaxQ4JYRDjPD61fLmphaPtsPcA21xvKbY59LVBTeQcH34t",
  "key27": "5Z1XLD4hRT4bVRz33QwUGXn51AY9E5CVB764LCeKDY9m9Ao24Q1D14NpoiUFDtuHYo3ZMvdfTpxVaTK7fEeqbaV8",
  "key28": "2oXzWRzHPcCeaYpEo81FTYWNGCnnJxHJwYfjccyN2VVtfJKhdg6V3hx1BUA1ngyhkgoPQPBFQoaXE2Uz1SXDBX3F",
  "key29": "3CcRPu9orVEB5ocfEZpJ8RzoELb6r6iDLxBFXMt8qQAkfoJihjQjuYS261EmQwKVPUR9U1qN38xU5d6JVAjKGC9w",
  "key30": "4iKZp7D9GXrdBR1AaZbHsoSgdKGNrZvFqJquf11SmFAG5WWY1YLrHgZtUmcHGtnYEq1wz9BB1drXbTZySfQ2uSeB",
  "key31": "2Luh74qNKArcLdwiqXLNy2hHu6rqgTNhMjNuhU1t6a9nAYNtFN26iw8pGQ8hVbHEtaAn9QGCaCgG919aAsJmKk3W",
  "key32": "3i7uwH3FQKZXK9oVKnQpds1qtsx8MhCAgxDRp9PQkUavnj5vLoSxA2zC8gzXK9VqrZTSLuiqTHtZC7izTGj79XbS",
  "key33": "rF3KcDEyK69Xho85HAiz3JVDrRPi7pSYjD7epxAitgivnMQSQ1PamMsKBi3c1DA6EwZznSXaszkBAC3JhVP6qxq"
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
