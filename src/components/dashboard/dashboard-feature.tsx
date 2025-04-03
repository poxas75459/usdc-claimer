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
    "5C4vHVHTyPtyYMJ4bni6VACsDgzexrgdejFhHdLFrvoN9oXx55zJdH2Zb4vZZBu2afQ4CntMSW3kA5tCgjncjMEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66EagB7m6S6wdevp4FM8aDnTusfNLwwqw6wKAui8rfD6dZHChwBPB31PabzTbFTtQNfozhQ2JurjfCqNJJjLB2cg",
  "key1": "uxxMzeT18FwkLGTFafwVNbVwREYnPDQ4FNTtcZm7NATvi6eyLrYC5V1ZMGxsw5Lm2YJN3RvLkFjQVs4oFFk6iGr",
  "key2": "5gYkULr3SYMi4CwX8rs9p3jQdByuQMDc9U62d2XZEtKxuTn2cQGuhr5z82yRhcjELKetEq44riaYRQesiNWPi1YV",
  "key3": "4RE7p3cX8LDMyJJbXi5coAuQEzB38Vggu6zJKbbQVY88vspeQirXMb7nyxAKq8m9tijiyacK3Y6VAh2cFyJ6crZo",
  "key4": "4usx1REWzU9RFqHnfPpTY1g2fvSRCHRaEqti8UVuJLd1W8R32pRv3j1R4mRY1ZS9NPqtdXq6RQHWGfyXm8uxXJyc",
  "key5": "TPez6hrQvHMCFG6XN92KieWdSZFQLXxGF5A9csCHRQ1CKmf4Rwh4BsvK2UosQwk3baqDgneigQoRfTmrEcTSQY6",
  "key6": "2AbfKV9W3HWrrTJCVgZmrfZ5XM6o93aBkbBQ7VZ9RCQP9Yv4k5sTF1UBNVeh1Hua7TVrJvybuh3JvAA58P36y2Fw",
  "key7": "62KNeFF6wbShdc61TF5KARhwUy3MtbKyggeVmsZ28Xy4bkM3dB4TJGidXktR5uGqSi8KtjRcDgJTKZDy9ry5WoyH",
  "key8": "SNUCnwpyx9GnoYmXwHA2WNwo7dgrM6DMMUo9r6Rk7RJjP2bk3iKGAS5fqXRbdjFPShtHAaU1zWLFzLz3BpTQjki",
  "key9": "25uTG7fTxSnSLJ35wpiVvHk4fki2ogEFWjFC2YXtNri1JVg1iJwHZBHYiStFZMEofVD8T7o2QRopL5mHpZH2mrEb",
  "key10": "4RrES9YunB3ofcQejhJMZGKfGqtCxMArbp4SPCkardeiT4gvQcjmXqyPYokwZv4WEP7w2w9ekPT4o3oirm2JRd9B",
  "key11": "3hWA6MDnAuBquKzwRNxFW5AyDKU1fQY2P4iThRbVhZmQZcGTviM3K1XDvke7u8Tvdb6C2gdpMyUrDhsHSFtTHZvW",
  "key12": "4zeZmCb6ZrPpMkiX1LRVQ2NKAvuB44JnD6CPgi3h4RiW3eJEPx75DEojGZTSLzH8sDY7d3htPxn6H649MdeCbPGm",
  "key13": "5JjtBmwkL3o4NRfrLBC2QDrdYGsdZFt5MtdyZorGPi132J6SYBvN4tDm8BUxe7a2Qfidb6D4chCHcmeVNL82Xtfn",
  "key14": "38a2rj81afAL81xd41ES67L8PC9UQj3Jh41FB5jDSU6sm551vK3unQSHZm4D48pnP5X8oNWZVLv7GzpmhLFbBDgE",
  "key15": "5QTw6Zm6BkJ4LAphyAqtGnhQHx2adpqc1YbYDSddueNsunChBJVm1DoQ4d8F37gZgwq3r6eCt98MWxz4MZ7LzE2G",
  "key16": "3why7QCReTuzBsLEULmf225brWPtzjVZLFKFEkZNkkTwY6cpPVasncwBMjrdXdE2X4FX2Wq3DNzSFDnxtUXHRUaR",
  "key17": "9ot3eGYFWhCBMtStabAxCq4woAmvLv4qPkgLEytFVPvfE5ksWbQCG4VRNtHs1Kz9EFE86dkmMFhZYsxTuqVAkpa",
  "key18": "5fiyb6SzMsvYxqbYJakWpKros4UrNiGRFYTZ9jFzGtrVGuoqLvJkU3bdg4HS52YUQZXg1EZ9YZdBcyYt2MAw2Sv9",
  "key19": "59V8dYmw7tgfdwPQ1PXLUs4GssrwrJJizhs9aB6uM5cK7fuENjf84sQaPpyxusKkDauJtrKs7hVDTHaFnZ2UxHxE",
  "key20": "4Ry2UrnAEtfViGh67d7PmUQxnAczdNpwni1rEjgTkKv2hvbzLimtHL7XKyXdBaUMZsqZkirKz2vR8fS99fKqmdQd",
  "key21": "qWc1PgzLu9S2rrWt5H3VTPZx5WSimcmzXBbPvoG3A7xVANnr3wz7mFB46xHrHhcQifWcFoTmXwgxpwtu6qmGkiq",
  "key22": "3o4yEemos6GT33oHbRBVJKX3nEH3SLDPmS6Eg45SYMpnThZBATN1kSY3nzG7WLPJJYw3t59hwMFSMWfjm516bdLH",
  "key23": "5y7SktGKymQ2NkS8scvv39x42TMzwwRRNawJxStCZp8oq2hFHsmMxS8adE4D9xYJJrmgoHSi6UWz36p2nWXQokR6",
  "key24": "5evCaw8aghAppBt1CnsLTjey4ExVg94sRFrLLMzEeW1ds6xtfPGFn11BYXyPKtKAKxN4iWRZjjC4XeFS5BQfTawq",
  "key25": "3BN3hatVAJGXXUBVw6YXEUfkBTFdfyhCBDS5XHWqZXHT7TBKcWZtk3QMyVXdEUdHk7YtPRXbTee7fACwATJUb8Kx",
  "key26": "3uYqMVjVs2UL2MKYF4jENj1Sn7XskwLrawLZor6oEsuX17hgb9wbUiZ76Lsf57caPbfe4LBEQ3CyW3vXgBRteYLy",
  "key27": "3gfQBspqoBTX5TzzrNQKo9f6FRBypSFfyBYWai79LwgyTQsB5SPb1QcsDqhMAyTdiPjtMyZbqCUTvW6oQKADsokv",
  "key28": "yrUR7GbMpLcLaDVbrxdQXsbfzSZ4oJkiThChAmv9cyoWK4mSSaFymB5H1uTHuPAhop2JkWx6K6teqD7tDp4BBPG",
  "key29": "wugvrwqCwcDj5VqNQ4BpEvVASvuirRcbjpJeNfQAS5EsAo2NR189wqWXUgStpM6rrFKMBgXUx21Zb5G6rKqzGoT",
  "key30": "h7JREkfCNJyMsd1NSeNDJpfCpAoBPvRZ9VsDtsoRGLrYhfUHpaH6rDMuHPaupj8EQ6ymzPq5zsJjXHpRSvxCqRi",
  "key31": "2h9NWUDKs8jrSwwrvXjzngCHohTCKXrhqAatL7q27JPYXkhMR2XhiXE5XEK3fS1YiV9VxE3vH6nkqNR7hvsdPWYn",
  "key32": "3mwEMCkhcUE7ieq7CRUJmGUSvsH5Ai7xJHPsmsiKC4Xai2psoDjLsp2sXKJHD4BrZrZehUyrJX2nfmrMEBcynj6h",
  "key33": "252n1ZL8fNdGRbCEPZody113pi9eSxhXGXth4VQd59u4yCrj9s8FHKaiwHt1QpFUSGLda8fLYByaDoNHZT4SVHhU",
  "key34": "5d9GFxh3P9DJW9rdkRmNgsxZFRjN8Mdg648y2RCY2UU37wmaV6YhTPHKghrz1zAXhLM26VnkfMuKJ83Vf4Lakh6P",
  "key35": "P8a5USbqm9BZXm79kU3WZ2WjP5FP8nupfgVo7cWkoax4wVn52yvtgHGXFDVS1QZGgEGpxmaw8WhmJ3wBJ3NZh1S"
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
