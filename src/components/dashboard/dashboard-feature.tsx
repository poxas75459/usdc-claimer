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
    "3ZeWXkHo9rbaBCiBvtV1QZeC3p6QxpNSQAsQv1dXsRyzeGCjSu5s9MipkaV9wBoH7LYFm7QyWKv2eV3Y97gp5jrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bcjRv2AahASvhi5gCa8ffe6xXkeZZmhBvXDSt1cVpCZMHpvaG2UiNEziGSDmdNjiPQGchy8qxg3vYjuA2Vnw8w3",
  "key1": "63gUkybyVHXEoaW6vHkMV1NFTYakyLJw3Zdcce2StLvSrtfchmumeaZFdFSHgvr8kbaMMVYHDNpr1wjKm1GetmmQ",
  "key2": "3iXZaYBM2rhfrg9PRcp6jKyXxhqkApTk5CTmNCLaGnN6hKKDDbZUxGWNf1goWQH6MMUTbgNV7etAA8B1uxFs2L3w",
  "key3": "9HUR9dRFUW4WVyhggsKdrLYN1bn4TuUHu6rj6m6EFDp4M13P1uJTk4mz9fbUbygyQRPQ794htk682Ud7gp33bwE",
  "key4": "47oBQHDQGHeSh1j9gqQ2Gfy7coPQ2iiVvyNXBYF8E74B3D8TsTRf7CrhZ84CujKtTUGhkHwgbK9uHjRJEb5QryTZ",
  "key5": "3ntkDa6tZ8gatWsqAdt6MU4JR3E4FVvzSAeX8HoeMjuaexgFAwSrYVfLbZQw6c4YkQdKq1gH1tyNj8T2ta2iKZ3B",
  "key6": "oiLCagYS6UmGJqnRy3VUUaP98sHFNBGRxHnuXDZEkBUAR686p4Rjp17b99nQN4x3nyJwfTvePo4tpGN8UTACQCg",
  "key7": "2mbfLnGZbDnsDMn9nY94xqfkQi7BuXy2LUxaxUz9qDcmvFNeeAvtfN6Rx781MKSpS3qQaPqrMLFepJFbtFjiwaUR",
  "key8": "5ecpALMxYyZaZZ8q1Yp4Fat4FFcDhA7rczSfuWTM28rF7kn7c2um3BXttogRFbs1yCCAUbudN4WzhpAjFSfyzuks",
  "key9": "5gDAkYRpZvC89C7979h9XUgva591mybYNGA8Eq5DcuCDVhuB6Sx95gyoWgrT5YCyT5AaKNcWvaacipEMG3FDvsy4",
  "key10": "2wPbAiA7Ew5zS4YgRUj3f4Lw9mvQjs6aXtrLiupqVJYsAgRfNkFH2qGa11vts7LNSYKZfwpgtSbGjxikedkmvA5Z",
  "key11": "49fwru2Jeqg8t6scrBt7r9idMADr6cJHacKxMSktsKrYYpomfDSbbQ76G11iCh1m3d8YLZ6zGfJnNTuGdxFkLvNS",
  "key12": "3z4bCYeJT2XdZjhACNALiBfiCR8WSDcRbikNt5kCRkUWt3gUchQF7N78UijKvy4o7dDTdkBEPyWmiDgAhi2Ezkwt",
  "key13": "3JTjBAPpZH5Z9E4NpnXk2RvQmUioHVMp7M2vaChApBHHLbGqLLMhQ3eU9dHfhZ1C2Mo1164MbvTL3dpAiAbBx75E",
  "key14": "42LzNYgdk5Q53Qn8cnSNoAKgC14qYdMgdLkgoEiyQB3oirWcaXkAGrVityYfUBfevYnv8QqUkZqWsKGnXwfJCXLp",
  "key15": "4xCWBAEUSZZL6i6ssYurSyisrTERUevmspm2Vz2KyjreA1wjS6jnS8MBkqMoK26j3nactRVfmwF7S5rnGz791xBd",
  "key16": "ooZXMENYAc2pHDoQuzecS5vjVSDdEzxkcWhs9yUFVx6jb1AXH2zfTnBHtEtUeDvu5jZZs3RAvNzMxabBmAw3RXX",
  "key17": "GZXL6QQ4wxmTWGs85nSThBbUw9F7nyfitH6C2chXaZgfdrPQPSzezHnbmZtFA42KH5AjWQ2uvvMYG7rmN8UoTL7",
  "key18": "5aoMgPCXa16R1q8hF6vRB7RnEKdZJBdtXQPDXwPt9m4wvZteffsAMXG16vWvfnnJxbMH8dbMWCu96NcNoyjRww6D",
  "key19": "3uB2AJAVmWAzN9XHRjrq27weZGypVzNZMknBr3pRNbv3sNEqJNfGhNTZCFSQjBC4BbzAsYbeBk35xbMAE4dfdcDm",
  "key20": "37eZBtQqAPoRAavhVyNrGCZYwHAbHuZU3hPa9jhxsZ7bheeYzScYD8Q74JHXpAdTqQXMwJQ2Pf61gAXKpmanxDgJ",
  "key21": "53yknrwSUrupXuswKcJJZgLd1iXWCRhrXRFsLVHw6bdoQjJdVWd6GDutpzXbMxFguchgCBqPbJupNLAZHYCCtnGN",
  "key22": "5WjXeib4eH4SffDBuQtRSdaPjU2BygUBJbWmHmc6Ay4aPXJFDnQJPoqVqpbj9euv9mLASSeaWUwZCBcXCaVyvaWV",
  "key23": "2ftjdtU32eYqTefHBfHRrCxoyfQ3MpyhitLSzFqWMCKMn4F4Y4Hcb8X2SBpvJU9Xw7e56Uy5bozzVjoT7vCoP1ak",
  "key24": "5ZL4XjZcGzraZpxPoXjZft6r2difaB2K16ik32xSNqpgs42TwyRvx8EGcuCELtNsveXPZHZpcr96J9nH4djiqVkz",
  "key25": "jjgG96axShX2W2AsQYDu3ASEQKY98aRLiYasUqvYucKrqUBQxhgbwbtyaRuGu4FajJhhSbyu2du8qsw8mRctDcn",
  "key26": "3ccNHC7pANBVShgbN9ycTWQpgyJmDiGGc97qfwTncowoKeJ7EyLYyFEdWTVJ4sEPpTtpiRWrkoZpGey8C89MTqNZ",
  "key27": "bzvJZRFHAhS8taJaZd5sozEnYK5wPdkCiSBE5HSzDQdXyQsY77zifYBES2PKyvJyUYunaGtrraGbkQemChN9TgF",
  "key28": "3cEzzrXdxqbvQg7wwF2tiakpPTjHEZsCNa2hwPX6kAx3xnE4bReVK4MngUGQ8EjQ8JvPP9XsGQP26EvGsfukgSqA",
  "key29": "2J8EW4aAuqAu7BkL5DAzCU4XimjUNgH1fYCKhKeZWnhFWCNHQ3vCnJSfQCSwPJzXzm1BubB2dSuef4ygsHiR2v14",
  "key30": "2RoNj43XNAm9pUbe5rW5GS5L8gbucZ2mY5DjKoUTKb7FcoyKip9WTC5yoHubwS5yG8w7UGLspgvSUimpCJrtZB43",
  "key31": "3LY8Y4GkWRNznqysdhzHmf89xyzf9xUD8kEwNqgyqAnYzQGGw4Rm4NTpVd4TyxJgUALjCBTz8ZqY8YJcgVAuxhCa"
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
