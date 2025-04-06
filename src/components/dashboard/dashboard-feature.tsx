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
    "2PwQUCyYDW1FjVxGpBMgoynqZEr1DVdx5LFDsj7CpDRjrVUU3NKia8aDCSCVEiMiv6AJSAoHCWBphuoJqg73JvnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7VUqkrDDyLLLjKLCeWJJUymCA7TgcyrazeBRpG2t1EEkyh6NXadZQPsjCsxT1PscYfLWXCQCdySHP1Zfjy55Qq",
  "key1": "3Mb8CdbDFnrYdbdf2Xwy2fjCzhvCFfxea5L42vxgUxbykmpVbxKHEBvctUdvoHw9amWXYaQZJgGCbvVDqRGLzEi",
  "key2": "4dKHmWwDzw7JygQbjA1ZMaN9ovq5hthv3yqjQoJWVdedH7ZKjNbgezXJgPnueVKQhHanaeJos5fYPC55aMg3UaCf",
  "key3": "5DoKyRruZftHDvMrftLcy1k3txV4i75RMieB5eLHRqkv8Woo9ttiYF9qKamnPp2RhvLmDmochAsEaYAJW7xhTaUq",
  "key4": "FykHwwvDtgGK3rxJ5B5Xp5ewCgGQq9Xjk9ZvKFpQsMeH18mhvn535jUunchxvz9cVLUDWL8dUFZpq45Jwp9LZFS",
  "key5": "5vdMecLi1sm8TYQFYJdn6iRzbMPCi4XHgNuRUusR6Vcr5fGxkwL1QcPhKCSpu5HfbMGhL7XBXh5fyAynCeFrE75Q",
  "key6": "VUb5HycC4BMxYhsV8Ef1kUEd58skwyQdWAbN29RkMzs4ZesMUgYgez9NcrSrVkkZXtmL5jEkTW3bZANKb3C1A3G",
  "key7": "3JWGnH52puZxeFc3BkLFi8wUzMPUuuAM5yQu1z7rTqHVvb58cqeqdathZYyBQLPszN9xN85ftdVi4vCL2hjvPKXy",
  "key8": "iY9BCUMBDL7NQhMvXGF5nGgn2RJbvx2sSb1oi6WWPmeBRiSM3SrqmmGW2gLMFp9G7hiMdK73wrUoqPa6EZk8q9r",
  "key9": "32fqRZacinw9fsEzGukDEVCe7YWuDfTjzzRiZ5gSFWrBeo5PWP2azzaryAjWMKDUSzmVR98FbJdBcPEKdfSxH6v6",
  "key10": "2danrHr2GNrFDW7ryAduUJjQHRthc2i5cxHvX9fTStFZ67jiJssMYCxjVMGwfEyVtTfFH4m1qHCAwfU1VFt9ujEE",
  "key11": "2PM1kBzV8e6W6mYGLW8ofLv1PAw3sjMZqK79kUfaihf6MxJ8eVbJnjpjYt49CWGXVcjx21fMJyDrhpBXKxNHLBMk",
  "key12": "2e5JPgYPXu61g9rqoQevusWDe36pndhbehYp3RgpKda8vmWvcGigtN7eCg1cie3VrJpMCyUyUynRNEAQeEAxLQsv",
  "key13": "pUHfHCzHqeg2MJXXXkuTY2L34nW3udYZ9bWpVxaoZJBNY5TrzBGumVFVcpx1vF3o16hML4LABDSDcp2LpCD3mxm",
  "key14": "3g3N21LxhGLDefWnMdef4cJ8gu3HPrc1wwb4Nrka4qxuC57ngnADteqFHrc7E5PUBjbBwih18oNbLMuF4LkhHB8t",
  "key15": "3EgM5Qo6YaEY6QbpUFHHaTvDXW5m7YMhcHSYvMJ68jRw9q85YsjyX3VLBCkbvydbsWp5woPYcQwm2fDBi2sJhB2Q",
  "key16": "4axzizdFq3LHxSnR94JFKkqjypVD48f26k7G7UJhtjT8Tro39tXw1edZZNq7UiGfYLkwTytW9x8P4zoNfiDzon5N",
  "key17": "2nvdGTPZx3H1RpPYb6p1cwcZM9j1bg2aR9AaM1YGhJ1J8Awk4bqDUYfLJ2p5iPqnUnThYKANH1ME2ToEWoMxQoVL",
  "key18": "5LABvfKb96HoyrTd623YK45w93C3YYFGbY5j36JZmZ5QWxdLPQ8AAPZHkxmGnXP2GWn7x63SvtRgdpRPGvNwdcFo",
  "key19": "4eVYb5hFnQmmcJc18NDVovmXPWZnijjc4UjYJnbpwATz6amPyyXJdwDeMbT5VWwgBVKKYkiAXRQuyughqgqma5Bf",
  "key20": "324aDs4QH6d3ZTJhFCoPPQAGPafj76tnbuSardGSBq7baj2ijYe5nCYHi9c6s5PWruKJDFKGfxUKxXLh4mKffRqQ",
  "key21": "j7YqrYQoPyfY7QxbYmR2F1FCRfK9RTU5ScYEHJgwCPPfBk6hQZGQ2uLguYhoJ4J7ikEpKnA2Hrs3DrWYaeXyLEt",
  "key22": "4GVTb4ZZrkpkAmqrDEVHwpWpfRVFqHxGm3kJJmSiQ1572c3B7w2MGDqha7trBZCZk3Xwwgvk3oXvuQ4NVbyBquez",
  "key23": "4orr6m4ftv8DAN4hF2za8mZv6TuB6Z9VRtKt4kyFKviz18Wm2y5Gycvz5MLVQM8VMocMuVUMagguvuBzFw6S3rdL",
  "key24": "P82XVjR5wU2YmmoLBJcmPidgcU3X4QzjjGdPGtoCrgUXW59Ftd3BrjJZTxmdVkcFs6Kkjv9VnawohFsVfSAmdSg",
  "key25": "422ntk6rV33S5xwa9CmDrdFskroefnT1KwYu2Z5Va7ihAKLJ3Jt7DTDafm6uziXfJba9JjkjPRPMQXtsBpAqrP1S",
  "key26": "4SAXcjnV8xhY3czYtStgUq7NC6mVutDC9ndeXa8odpuv9hZ1RYxdXBW9kEB6qf2JqAxRYC6ceri1txhzT5d9n4e7",
  "key27": "4MhFVQiXxs6W18jM7Qfa9nAePT6wNsaPBCWkFvba3gL5pKkEaLtwid4RjW5W9FwmkssHHob69w3w2hf7jx1qbDZ6",
  "key28": "3VHvWiNZyNPvfne4nQZHoWcSkQxDKWok3jYyif61rE5AhWwaeCodzFzpkQqSbuUqwWCGgiZaE6bWErpL1fuy8mZ7",
  "key29": "4rx5DM4Wre6CQuf85rbM3RiWHeMT1G9sHJpQii62zYPp8ixNKP9RU8Ef8utn5APzuTb34dRuDQAhi23UcyoxJNwa",
  "key30": "2XSvVZb15ybbSGpbmFdpdT7YCafEtXb6S9gN86LPXqE9iAmW5fy12UrWykjEv2qgcDgobJpFHXxnQDWrH55iYQvX",
  "key31": "q2T95kvJLMY49vSNGVz6MXQt2TindfrgvT1zZ8BDfiBYFXX1ZNiEpcFy87dfLDEzSkqJdd7Ftcw2AdE9cxHLREJ",
  "key32": "4UwzdeJGfoWWh6vCfenCoqgKziALqaSsxr9ZoRrq4xUPeNKqeFC1iD6a2qJoaNQrCvStrmjt9QpV4AjQN78W4Hu9",
  "key33": "5Rixpn26KX6X3y9z19sszSYprKbWMzUgrTHPNpLi2NEuGijjkWH4Z2QV1R23bKj25V8w59tAs6ZNpALh3fXhLCR",
  "key34": "8uxxn48BYenBgHKEiusR4iuSGNNRxWyp5uv92dkn98fXXtXoPaoyyAiiRPWtDhkq5hELVPcpx2S64xBNe1aKjtx",
  "key35": "N3swkiCygUHWLsLmtDpdZwxFzYhUbNJwTozMK8va2P9qDJmJGUE9FB4TQSBJKWon9Lj8wvwYmykjdxCJQAVmd5U",
  "key36": "3ufEgj1WZcGGjGyhYqXSbgcgyVqoYDNUnnMHWEkQacPknfWbNmrB4HCQqit6p4Gcm9QySoNF1aXgZAStkukLzGYx"
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
