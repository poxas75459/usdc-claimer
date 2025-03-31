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
    "28AdH1i4ce451MtzCJThUn32UsrXZgorZ6gof3Q3rg8AWjyiH6nP9nxPp2GARH2oboNT9mjUMpLVAvivhs9dNvjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4scPtK3VowGpNcbbU5z9QWL8iLLibjn4H3oCx2axUXQbAb5JKCdMHMkqxMVNMG5VuUA7BxfQbh9sZSTfxPzTrsSw",
  "key1": "29NA5aErTSwzqjX41moruHnfdoBRD8pexgC4wjPqUpY89L3xRt9x6tpYd3t3nJKSqEeXxbewr9K1AeTM4pUsSuP7",
  "key2": "4KTnACp3xhA95RF65jn9mmhKRdChaWxEeLCkpBAMzFDvuapdbnWv3APNgrLde2RnXfKSbJ5vvBct1pZyqDSsFgap",
  "key3": "bdMthu2g86UvK7nKVdTQrexVP66HLfims5cbR6VGq7mZARdNjRrB2gdF59bCM1ZFLKBNvvBpVYG4zEqZ4Y3r9VB",
  "key4": "27pjk4ACU9KHcdbwR44aCt4XJRUdvkRtcHA3Pi5N2rz2waGAgPGHfbfQK9NbhmibrE2aC2AsAuYaTRwBgyzwy2JT",
  "key5": "sWsozE9Uwb89g1kAjXyCCzsXUQRee6u9voazeQmkTESXXRbMLL2hwW5RdMrqDRh7wpv9faXGmEk2ff95z8yzRPj",
  "key6": "2wSEn7WFNyd2Tb1cgMP4e7aybYHCngJKmQDxemPjkhWKMXeqGTktp2zx7en7TMfYbJfS1JJfjFTfSDPP28FQmEKG",
  "key7": "5zYMwiQdt3osLbnMujiPwoYh3F52b4Fet99y2UsG473wEXDtmTEfWgXcs4JNUv2HBAFiinqh3EGC8EdJ6iuNPWC2",
  "key8": "25xxj8UkRXiFHrB7jFshUBqTJoy2YDHqzAA2nbmRHBLytQhjbZd4f8S7rbwZFNCH1rBdJN5qgsuDgZ4CYC7a3rZS",
  "key9": "4iYsijTJyDYTVSDMtwwdrMQs8qVJZX5TZX3VVFfR7Bqo4Lnrs56Gqkh1LuVEKA2WFCSCUR1C3tsbAgEhvdFTL9yC",
  "key10": "EHNDGZVcnPHtFgyJcH6ciAj34kxTmkfYgfdL3PKSJcKWCcNZ1KBsCNW5KPZaKHPqgLpPEMKcE8V1WHJGuhTFP2q",
  "key11": "4WC5hDbqYKAuP6g4ZLyrgpBte2H8SKrAmhey71ykrafoEbSh9Qj3AyPZy2k6aLBXszE6yLufcWGFvJ21LKS7wqUL",
  "key12": "2HGdGomsVDzitPWEBHozPSra1hJLZvsiDboRYb1t2U9SbHQvFVHF8ogvbwFPjq5wbE4ggxbdWCos9xTY7opvN3R3",
  "key13": "3c6Ju6NeDKXrdbiVoPd86fKfaTdHZBHGmBEmUZLQLFvhWkymdSJ379MMYgTi42V9rNDwZbV6RsH89jX85Rzgzco2",
  "key14": "4UozgrGj77DRt3GWZXmG3Q6VecJZLGXEeQDQXUYNLMzZkzzDVWK5LmBGcgy3j1J3qqzDWMu2nFWVzKBzSjWge8rG",
  "key15": "XyshkR9Y6XQigh2zsKkJBimw66hTQk986FtwwcwSRpoLzkWudoXbkSbFezZCfYzNQTRzfNDUHEDB7mXZ3vaj7aq",
  "key16": "5RaYFpeYdraNLMLHiV5xbSHFW1qCjQ2VCfud97L8YpuLESqTgUMzEgJRW1r38gzRM5eDMoLLDAqKrv917jcgUYhK",
  "key17": "5b9U5JKVEYm9ZkqoyFYSKgruLURpTCCX8gYaYPZz5kBVqBRTgbGRuUL7Y597vMPy72gUvUxtpqjiZDLHohou8whZ",
  "key18": "5pA2JYixfVz1x9yEnboQfnd6E3XyQzVvFfZnd6NyYj7AFEWvkmRr8mnaor1E8VqwUpLQU41krDutTCWEKs2odu3f",
  "key19": "2R2bW27w9wnLfkDHyXmCeMNLVEHC71z8JzeYBQtgTYdBEGuYa4ELxCHwvLh5oD13APR321ibvLy8HgHPCx4sVxk9",
  "key20": "4njeZ4JPhT1m9spawRdmUeqfk6CEfWQiwaM42vMJgsKpnf3SxMaqJDoocjFRvUuPBgvF31P3WEvZQUCGKKufp78z",
  "key21": "4cD54VYpB8MA9bkxAtMSAe4ezz5r7fRo7egUX53hgLraEVLAgTM4JVxQSm3Fg4z51GturqJ9ZkxkSMCf89vPGjA2",
  "key22": "44QS2SDnLhxXbXmaSxiMUzEJtyfQcbzLe5oDVN85tSofqvkSn1Fs8TNjvLUSomxiEuwRiGzafekFBW43X2K6Ghwc",
  "key23": "5g2LXiA33nqyVXnLrjpNFrEr2CXb4HKJ4yd37G4kh1M8rGnQk9Qchis969JCqKzwBRQka54wzePvxWHmQgZJk1kg",
  "key24": "3qDUrAD48B8gqJrW7krATttMEJ2xfFUPuZ6o1SXHwdSTtJcmFxPy7do3CX8BiUS23ZxNwuhwdGT9E6yCtg5eFJC4",
  "key25": "3nwZv9ZM6iJ9FwNmwVh6QTcwX9YECz6dpEVvPMMxFmtQg1oPzZQE6BHWu3sV7jTCbWsJJrpESrDSUxVPjtof1UVP",
  "key26": "4rSjx4zrkfhRBGH4Nhw4qYabYdjqZZgwDpddcEdm9Shrqg44xABx1HAVcGyZN1EMs1NJu4v7MS7aSnEoXdnDqF1N",
  "key27": "2Ag6j235w7EebxSDd22f27K7wVm8WuiTGj1wSuAxNaRKWDxQrZz8Q3GB7HW9iuPoGvuRJiBvh7hjzE8ySuQSs72a",
  "key28": "sAPsj7Cr2VQcnaeWCwWG3JACR7hL1u13wtou9uCPSVnxopbbFx1h6NV4oPnGNruj9igcjTanQguzUxwXjS1bt9J",
  "key29": "4ed9ZAVRT5r3qqR8e238duoCh1CpvnfyJvdkByuP2dz8eWAagADFtmJ1LqF3kndDmEA6nNvdXv6Hng2iWU8ynAWJ",
  "key30": "2NT3bWaraPhmDkDRQifx1NHaQ9dmY7csdFwAQdWmXk5EuCCRYjLNjiv9TnXoZk9CE7s8oReoWKj3JrpHKnhjq5Jq",
  "key31": "4X46Nk4FXsXLGoZsYuhgjKSncio15oJVvLxJmqhmpRd7tabBehSVMXS1FySkNphuYqk1DhVDQ5jEPZGzEzE4iukw",
  "key32": "2XXx2ggmjZwSAqD8a9J7sDSzwk77HqqJPXJLUBx8aFsPeUTmsyj7GbNFUpYQPMg2gXSEvWkWEzYX1hV1HP93QrzD",
  "key33": "5LoYHPrd9DzTKJoywyyceGz9ga5oftCz3icg2JpRge6aq5FhQK9b1itktd18c8TitwSTtYbQEaoqgNH7tS4HHeGq",
  "key34": "4fDnRrCQ1gYtv7Rdrf55CgKYMFajo8uK1JrihSAT5zRUdQNZsFpaSYYetBXZRpGBCen4NVfQhuFpDofTKVjgVn2B",
  "key35": "3wSYAL9YYYrL3FzVkT9G4UeXe5JrFsBxPxd5tCjmssMrC2NdQPyUsvqc5kHAfgKwPYy85VeLG8LaYNV7T3seKzv5",
  "key36": "4pDq7HtEmTG1TChEPsjoGkwb7bUFAhLtTaif6uabg2KWUpdamUDVfQGfGHiUa1rzBjDKzsH5huT5iH5bVXZqHUmA",
  "key37": "3URzAmctZsRo1Eo7Y7LeQDWXShvBQriMxf25ofzv4nkWsrgdNVShkr4fZdtZC8Lm51srMFwUHq8GwdKUhRQTNzp",
  "key38": "4vTXxUMru4XwLeuozuGuU2xeYWRyxJXRpSWe5eSvSLMunfcMRxh57nMy8fr7H2ef5gvPAAmcdCQaRxCz7zAkMvpe",
  "key39": "4HSfQ8mVhVzbRyhWQr3quC7Y7yq143k7BoT6oUxoVG6MnUfpLZdCr69VHoJgqrNUZuQahirkVuu1jTDn21m4yNnT"
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
