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
    "2vMvL9FFc4aAefw8ffPGvJUP7kakMatjTaMFDtP5XUj39NEAh5vqjEFaVi2LVjqpoFGAkWmng1TNwvKX8rzMaHon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jGWwRiWWF7M3Z6S24bh8NnWNxpvHmwHx3h4GELNpDQ1q6B1jhGqzTV7tSFEv9z9seGVEcTKAdSUdznDyMwtVfhj",
  "key1": "5NZDvTnrX8mANLoxKEBSWphBFLkE3hUkfUfLmxex5Uc7uZJqKWrADoSYUYaL3xkrZv6h886WFMUgXPiYGMed52Rx",
  "key2": "2tmy9rCnGyEccPfQubfQoMDXWrtqdRVRw3M5gSkyZo6kovj8TS7cKrQRCiUBjCYRPYkcmcUCbTdpJa8i4jcdutSn",
  "key3": "4H1M2o1uQvMBQ7PDdp2gS9sko4TDinAYYNTTTXZn9Xdst28DUREgf9WBgTaSbsstST4wd5WBSodZ8wvSmngEykuw",
  "key4": "4XKFGoAXjBMnwYTp6EH87vfKMGGwshkhFH2D2p6kBzSSFnrntCL6PBrG7xSGCyPjFkp5pDqiFzuumF5CnE8arbLK",
  "key5": "4T6rxvCvFLKbhuAyRkfksDcBrCpQwKXuEJMCjHXrC2PUyC58nyEZMDtitvetWAAB8muTtPUvFJuYnLkdoeUwcoZy",
  "key6": "dMd6KQP6U7U6bxJkes1JdCvu8ntqX4UWSrG8QhW6xHGW8ucncH8LPppgCqmmWupVQ7euAW14ovsm7Uz7J41Xojz",
  "key7": "37kzr3Wdx1woyP4G9xPtvkY47HHwGD4prF5KA6PqKhsDV9RmJ6ms8JkwrenQuZdjNZ2brKPvDRBBhwYxwugGnabS",
  "key8": "uv2Pmo6xfKD8F7Vq65v8k78iTxw7k41wpdeCJkvyjBBEZwVt9EyA7xzzNQvgUB4ke6rAGcjnBfVb7WUNTF6cka2",
  "key9": "Fq7KZu2NK3R8DURq2BacppmNFqASz81orJgU3ouqN2XfKAqcvXHpKSzZcnDRzGCF1o6MHgZmgvTjHNRTi2dyU8u",
  "key10": "iprnzN1Zeqj6Bumt8QRktys8iNkZpPTB46TsNKAVvxoXJqqDwj178fcVtsb9RADcDVAD4Bhv5BuDLfRsUUuMiTa",
  "key11": "pqdmXiWpbWLk35VufuxYJNxvMR2Tb6MqQjkeH528Z6t3SgC1ua5pbaJUy5Ea5PkpsXQDdLkCPVvQS8smPE8U5Bf",
  "key12": "5jCfhBYcaB2rMMrHagXdLMUR7Z7FMNeuR4D9webzSCDmnt5SXV8LWizSi5Dt3gv4ej2LN7kt1JmGjDUoxRKGxQZh",
  "key13": "38Kc1kaXNVDCeAegN25eFKvm97rzX5jhghXrAZaUp7c4jYaULZ6ZbjMJMTq2X8KvrJ9isx92N8MicLG5ko7fz2RS",
  "key14": "3neqa6MF3JXgjShsdU1f62nkdRnyVbxvAzgtYJus4649ZJZzZYKhCayyGzfac3nhKNM23oHyn1niyMPTFQr9F692",
  "key15": "2Hfjsy3f3jom66cMMibS8NWtY8jZjJEUDzTLBZjp9xxKhaZ251SGzjFbWnxEwjHR4pfv4YSB4YyDshABuNcBrKyT",
  "key16": "2K62gYeabDdRcoQmUKkN2y3MjXYkaYhR3t9gtup1dBW3Lf8gjVrwpsQZBUxapNQgqBFU21GUDf7YmkHG4ZoDs6dh",
  "key17": "2PfXxDb6VothHYEheneJH2QsgkoknMsiu9bXSoDAXiuMcv5Bzw51iq99NWZqxTirEtjPZxTnL4S6QCwXmLYXPHzL",
  "key18": "3JSmSSmqBi6CqWLMVzpszoaS8RZXd4QxcvdiCJ9S6kfh7nQMkdsWYTHep6ZGbERi4WNMdgxuS8atYbjAL8deFh8H",
  "key19": "fXm27ibu2Br5mpfqxZ6DZ3FnmW7sh7pUUbHbJFEyo1SLVfLE954gRwq7QmYpkxBQU9Ya9X1Xzjpx9QmPTGufdoa",
  "key20": "4BjwW3pCPapbgCV6VHkvMJ4FiAaiTaXvuFDUtAqMkSxyuNm8U3Ds1xihrDBRgP2TW8oBuo835ssFTFQpTT3bMoWy",
  "key21": "4LBzmDSSXzWRaXk1tQmhFZFkrU7mMAcT2hvE7Qnqwohxyryu8VDA6dCgSvzV2ogwaGz2gUgBVC9ZjHfXkyzAWSW3",
  "key22": "46zcwtv9m74BpghLx5CKiRA2qLXtqzWxBebh1rzByW8jupi4iSjA8bjn8RNjwycFrhWk2mwU9oNZrvS4pXxAqw89",
  "key23": "UPip3KaHi67C5YPbgXamtveEyow8wsrkFRvQBKecEWmpfXECyWDPbwa9NraGr2xxYszsHapJZTfdjcaUYYqQCQi",
  "key24": "5ejRN9EtdY4wBiX8hmqwv2Dv5kXnnB46YYwHgna8wQofdquAtxREfs59c6Z5ZFVYCNYZkmFeGZ66jm4HLodsuC9W",
  "key25": "2BpSLmRB2rHCGKp6uEWkdAPjoQSgqETD6uLNZ2Qj6cxKupDJ2NeEiNCCcS47S4xLpLidmqMY6iftpv8BMnh33zLU",
  "key26": "3NLXA57SX2SiGymxiWNrY1xqkC9MkBnYEYSvQM4NmYAa97JatzegPdfFbvn1Rg1UQwKD814gGiCq1fmf5DxW6oaw",
  "key27": "5fWMHjcz1NgDbRvrbA1K3LzsrVqukCWovBha3iUhqRE4RvHBTDp3rphJGtf6GXqrdu8GxaQc8Ymp5Tm96uPGZdZ9",
  "key28": "56T4ff7iXBxK5Toc5dgJu1uj8zqJptQKKGH71GwpgdXY7vWhn7JduaE94CVcSVKWzrmXUMypJXCWE9dvwwWbRXP3"
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
