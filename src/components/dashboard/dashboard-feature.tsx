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
    "2hnj4U168ob46jXBD6zAKkKL2wcN9yPGaHUsjsypnmZpwpSjMf2PACZhkgkt3RRwaofxct1sBUNM3ZShSgkVXWDh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G6uFnCHN4LTSXepNM69CWJ5H5LN4bBeEkAzak5yDEMRBs5KAqveoRR66FqaFUnu3GZAEk8RtAcrTsHsBrf4FvpV",
  "key1": "2LUjn3o2dzCqbmMCkRHYEkRakYV83kppddHW4iGGHSmhLUXuEDfw5zmLhPzB3SVrpfJFHnwEdSTm8md5irtb66a",
  "key2": "5m5h13i4oxh9tizhXBKDUiNhVHx3aYnotZjQ6kAqnYgFmNi1rQY8AE3iPnGQ5fsziHE7D1GYXfgX1Npc9hr5ExKv",
  "key3": "UQTYNwGJ5EeHgYyVDgFy4koU7NbUd7DhC4dEWizFBgyv1rK8LrhFTm7jdR3kapmMfbEDoTJGnNyWU81cZWoqSdT",
  "key4": "28c7KuC9mtpTzyqQDVoMcyK78JagUkPCFZ3mR82tfyNG5LWv82ve78Pz1VL7RFawaj8GkJjPKQAHJCzeykCYusge",
  "key5": "5vyRquKrZLcq5guabfT1je9VoSA8qnkJwi2XDeJZ9NQMmbYPX1aYuPwbYNAmcoU8eYyXfKWzht7XxMPye15qqWck",
  "key6": "4jQH5vCodXkjUWxDpm6oerD8myo4zjAsREqhG8tbqRFg654dy8dnYTs3KEq1VsYkgPoJMGPHZpZb9cx9wfvgJ2Ay",
  "key7": "cmRNKbMqokMZP6PvxUSnDuM4z6rieqKizPVge7brtkr67jpq6WDiSBhXsP6jPpb8L992nDKhGaJTp9RHuNtopjx",
  "key8": "4jbVH9yFyweNe8gAg223qPMYVKeUDWDv2zEnnBDcNAMHhrHrVCVqLrXaRFaBqL2rm6SLc8ofHCciNhdsR6rzLXMw",
  "key9": "4VGk6qFgx52cMJy7Bdb7FQhaoP4TGLx7UZx5FGHX46Mw3hETYfpDBJi6eMsrQ7vQpfAbUVLUFEg2bqe9mP14QCy7",
  "key10": "5vLZu3PxtBGrYWxxgrdUQskhrdo29tAaV2HWoPYJ1SgAzWW1XoBjf5M1wyebyvSXP1RTvYQRPKTGhB4Yu1QqgQ8o",
  "key11": "5Fdv39rkX9kTXGCUJxeXiKvWjTDZxd3WapsjKAZUheotT1TLkBLeGovxoBZgszbBb9Xf4ZHKDYgT2nLK93GdntBm",
  "key12": "4KzULpMXjsHYJSqhztcwoyUzZkYhk4kuxKLG1eKaCHJiLhQYnk1nTn9m82angyDdF6drFVLrfbEmnoTnHCMnZNg6",
  "key13": "3N24dDKWhwrtw2AVVqrneiQXTFdNLvJjPaFUKWjryfZnQyjmmxciAQtEpQCorQvi3BcJBbWeyM2BhRRxd98iz1iL",
  "key14": "Dw3SD7BoXuCDHWR4dBJsqBSJUNYBqvqxwZr5vZpzfYmpDseGHGeaU7aCEeYPKhLwKHgaxbjEHpcwFhkMwADDT3D",
  "key15": "2DMXtbz53heJpfpLarGdwZarV8G5sRQCQ6sWJE8uUHMoi9quU2EZXUdzSZ76FbWTbh85vhAzY4dATmqP2hTvFZt1",
  "key16": "2NzRkh2VLu9LbKmEqSP6e5xp6kAXhAYFJYposNh3RmSqqGbx97gvJuje89veAW3CtgB739ont25EUUkVYxtSyWmF",
  "key17": "5vJGPDcrTsXi3tneXsbWHG6dKXanXa4T4i25xHwAvB2HUkfix5diau62gfnC5ujPioLnVwGRg1dg1yZGXFBCKTmb",
  "key18": "k27K129wYuYHAecByPhHpFXPYwGvLLiDJFYMbhkbPGvu56J4yiDkSKs4L8KhqQLqps5svzMCDW4GAdSLcCn2KrA",
  "key19": "5uiCnzkFfXqJsb5XnWKTcxQozFFmHUxHBUm2NTrGQu3eQLn1rk6h1S2wGQ8XYxRBVPhVKkiH8Q91bA7mGpCA5tje",
  "key20": "kVWapMKU3bczask4g4BwkBJknJ9Wp9f4qBxYuDjcw5z7vKe3v2yFrE96RBUXMg6ZE1jhPD1HM4bP59Q37CYoFHK",
  "key21": "55Jaav8AMNcifzE8uqdrcs5A71bAjEug9to8cdtxqNXxJ877J5gNQmPPEqzXm6B9CzYzUw7bvBevYDvGxPfKDtoE",
  "key22": "orQjdFqRWpjQREa9TjmXkGgpDczCgeUYVCHRAnLrVuBD1TQncr2pgYSC27CoN1kRZyWoVrXgDTbuycDiDAjiaJR",
  "key23": "5AyE3ho7KNfMGA2qZS9W9jV7UfEfuELHGmC9XPWDVpQ4NuREQNwKmjsXAqMnv5b2WqCyfMKChkaSBVyVxmyPHahi",
  "key24": "4dW28kFP13HRDURyumy1cWEe6ouxEaKZTBhy9xcFQGGZRjzQdBpMw5gQiPyMsJjs3VZQ9V6jBeTbDNp6n2DXNkzt",
  "key25": "3dkbFm3LprPo18ANLuS48RSJWKD9jNHEbVvMbkh1tZLxzofZoWx2nfwMJ5T9PU17Gnn1NbKodsx6Dr2rLM3jgiTp",
  "key26": "3SkC6BsB8BFMs7e6zUA6VdrZJQMWTLSXApNGkqMo9KcLUfhkY8BgQtJjzTLB3cQxKYjtNaPs4zs6Kiyp3pTLyhrk",
  "key27": "MB7JpSBL7KoY8ioiwcK4FZQ4FMFsgcEGhxrpByHKdmEeGe4fWyqH8uyTudkEUfML2GUK9i8psc7yBav7vKz55BV",
  "key28": "2s5EES2iZWFRuMJymiDkSXHkKf9WULfAEwhnNKZhpPK9Bh3AMYzkVT4mzsZggqvf7Nt6qbJhYNwMvR1MRSQPGMm3",
  "key29": "52EspiihuagjeTbhCitBxuam64NZPiA6XRAmAzpbJADZcDPz7hgBFUijPVXp3qdRzEnN9h6iFdrTPZU1Pp5cpWvx",
  "key30": "Tbwr798V36ftWst15Z3LLCkAuZqAzMc9tDwhFZbVT47zZ616CK2cnNfE13368JisoBLXF85Pbd7u1vWDmXDGDjk",
  "key31": "3WdnHr1HPpJFg1nkoprTBmCWArMeR7BX8TfqRiMe5kLchdoUuP7F8Atu97RxurjvrFQtsBS4R8yrjfJ5tz1mAQGS",
  "key32": "3vtbDyxUWcqVpWj2LAhrwsf6q3bVLX9mktUo9ZDd3XwXbcx3kPVSAuKhUMU29NLAaEZjQhJMeEspfRTeBAc5J8rq",
  "key33": "3EFVcPuGtRvdpabVMEAMhdUetWYasH9mUJhiCwRZzHSjYGyrPFJSErocpCbhxm5gfKUz8qjVXGLY3nJonZAVDzbh",
  "key34": "4Za3bWwvSYFqk9Vu9f9UgtJD82u7Gynu9CUwbnYx6CSmEgXNcYPLwUmQZsY6Xr2f6hsFd4tcskZMPpNznurdKUzW"
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
