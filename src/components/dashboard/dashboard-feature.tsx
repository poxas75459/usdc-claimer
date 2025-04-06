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
    "5udzuACu1Aqwx6Lo99EbtBxMTdsAULt8fyaMRwAqvdJ564Nd9Uhic9MKZGHFuXLkTrypm9U7QnuC9McTGuSNmeub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZsRiSXKPsruouhsrpj9ZiXJaxhULMGNsiVYPg1GJo3ePrFdBkG5mAuAX79EMTRESg8HSSMKd6DavTNnFJuyVW6",
  "key1": "gqEsTttYSJanuapdQxGMY3YNRzqw7dwAfqST9wmaKmZh8SL1Ng5BSEPTYGFQAoBQ8PcN9JWuo2TkKM7jYaDGdhg",
  "key2": "3J4UgSYTLmXmGjwGLridRVCdjHvy2MyX1MNri5yX4cFeyhKeYkyUnkgL2CGBHS9q76ZNR7bizdCn2zSWxrmcEFkb",
  "key3": "4v7BG4jrBRkuE8QV45eaRQxLW7eG7SfSBGYzWvsY2mHKe3j6Bpm4zWBeWbpT5h9cbbFo59SXeLeiQCdpyRC5x5AW",
  "key4": "4EvX2y1tVKCd7XcE9bVWWzjR9n6Sm5kitaqjoypJahVvJydDccWSRikNc5f6jGRo1AD9jkM87uy3bwsUxX1BQaw4",
  "key5": "5t4wETqUDFBWKkuhE4h2Kkt53bGpeFR2egmkNC4iSkQEPupomjTYSy9CSJAcf7CXDhnYEPgGpeNMaFPWgkKDEG4S",
  "key6": "3aNDiocRfMBAXB9PFeLZmT8knYzqUaAcEq7zVnpGNdXz58qQbBQVkjEHNuPYua6GhyoZJDda7VA66iMw9VQXA2Nz",
  "key7": "4nM5mrCey3Ztto4zQqC2kUpRFBzGuBdAAQJcnZ4fpbDp5EFuAZDejFhAtkgAs8VxyJFQcJGNKY9W3fuQgo5BC59U",
  "key8": "4g1yzPYBBoiZxNapcuJVs4ZsXL6Lc7GwH6yxb3uHDWtErkajAKfPESzxxyEKYPTWE6CkRoBUhToqNtj8NsQgMmGt",
  "key9": "Fe5uH6ffyywTXgDfVwDk6caVLsCaH1woTN62NQBmtRiVPPfHdsJpJAR6Q5y5kzJBefxhDVbsisf32X3J7Yuzvkz",
  "key10": "31mE6PygqiCjne7nSFQuvXN8zHKRLkCXh8enSezpPbZszKGSCX214RuUQR16tWFbPNJjdzQ4L5xYa3BM5byk63sb",
  "key11": "5gHvTqTgwwrY4UR7EvLmPnVPgoMhSZajytmdBEw6gnj2H39omm1x9hdG4gkPd8x2A6kY8qHVwp8y2BEr6pDYLAmu",
  "key12": "2dxF99JU3ijszB9wT8HxtpTDRp6ZiD7pC36FxRzAEHGg4DHSBgnD8Jev1iUdMiCPS3KnjPB8HcuEhZbdBd3uoTsp",
  "key13": "2pCawm7qFwTzvpXGpNPtwNUYu7kAYQk7mCEMdK1ZAf6EpGY48o1XSeu1siv1xbNcmsQFmRjyTJGF4XJ2FoMgQnBH",
  "key14": "2x3vo4KD1XCsSHA1mzXrviqtjqNpBWSK3Ebyvif9VQEVsyCZsZtAwPL9b8UJMmnLXoqMcYedrt8iwBmKxbX7LSnc",
  "key15": "8jmNdjMiBBrd5jKxA8sw6q22vWLdwn8Wt6wh8oZXQGrULakbTsRfQhKMnpDfXopFwcXNPfiQChvck1RKXYYDpdB",
  "key16": "3RCyWzxQrmeE8tGrM4VUdXXUQ4GUPFG1BPntV9Vp6q6G2s9vV5KLdJn5kwTKN44nxpLvbTYkCWBzwvMZqT3vSC7X",
  "key17": "STJmWm7nS5LmaCCYtAqsAGRj24fCUwftEaX4GHCeiErGzvsDeGWhoA2UpJJoUvFMYpPip7cJjoVc7zT377yxcTZ",
  "key18": "4xP1zEvaWtx3zMbugW67oksZtcLXJBboWErQurMEhTGJNQCzG9YPLymWCeRbctC7HdyoUrVHEXRuuamLnD521yTM",
  "key19": "2rAZZ3WhxEJhz4LF9CwQejGuSS5AAGuUJ8ve1vAgkNWr73gTRdMK6AR1WT9CybPAsVpksfMvQT4t4MujUH2d5tTa",
  "key20": "3HQWRa6t7y3ngJ7x2Aj2drmMw9n1Wergn4nmZBsCX9DZDeoZaMLM3QdXRGXZ9zeN8MUKJYnqN2VA5BPaTTH8fPPF",
  "key21": "3oT7unBc5AAV6U2UTwB7gWo9jMJ1rLpoKUsdx6kJPszodgNddRmeh7sDD4koGbFtUh23h4XU5QURon9szPh9hpj2",
  "key22": "53GMaVgQ8SSfcuqWuGHoB9HidhmwXHtcUkitBiEi5gszQaoBBKGnGN3jrrdX9sESZBmxv8DmwaN5JLUDLtPopyPA",
  "key23": "27NjpW9B7E9259BhHV9G5fN3xecmZeBCzRLTXCWJMbTUVuve22YoVR9YJuX5HbepjrD7wfP4tXAhVNXvMcDV8r7i",
  "key24": "2ao5W9LJANtPJGZfXuorHzq6WHCvv3Ja9WjSspVaj7w66ASTV8SSJq9jtre4AaZ9E83bwP2iavSDuzsKcbn8umCW",
  "key25": "4WUKWeG97vK4GFc5bbWfaoXxNRH177kdRpGvTAt8PvPvZ3pivTLA157sszU31XAKrBfifEJDBoaA891bsa1pTFB",
  "key26": "3zJcUZfutS4XjWNQE9QE6oTkSd5NkBy4mwaMjx3SN1Jah7KHytf8sVuJfFgmh1nwzjjUv68h56jwx8UkeWeBmgBS",
  "key27": "2MKrLwaMAvWsqNqXQJkdgPwrpEQV4o3anijC5MHrxiGtrPW5rKUchXuhhWfbao9SFxPdA71JPoNk7dw8k3Ta2vjR",
  "key28": "4mPpWinkDEgjKoqAnSNYHcSE7LDxzLcm1wBm4xUashUK47CkuhnvfHLGWE1h1ji2xtBRUok4Q6jqwK6M3hL8vcf6",
  "key29": "5bquf7n3kcKU48WGHDeA7T3cpdswFfiU5epfZFKE84w8ns5PRXofPr8s59mfhxrpAGn8h2tG1Wa1hkPBmPgkkMzV",
  "key30": "2yugWWuYxyei4RSjwGsa6YyW1HbmfTsJtCWMsQLGdS279QsgVbbSB2SVrYZJ1EkPDb2j5iMX9mZ9Kbimiz4xnB9H",
  "key31": "3xh8zrZedDTiStyiFP4UuMVUkEzd66rf1xcyhG7XvgngkGHhttzci8yXBzYXcdbTHSruYX8qRnmPaEdb5Pakj4BG",
  "key32": "3pspfqWHeiyRJhxDPUPejofhPpTFx5X74XobEu6vRqM3MZbSQGhv3oy2Z5DzMqyQF63wbtJr1movQcvf6pEg9NYf",
  "key33": "5JqJkfcSvYTyjEfdSKASw6Gkbr8ZZYVJDi3nfqWiHjtkmMDHLhbVoJTma9XnXrrMA4Gs8bGuKDcFh8fFDBEoEaVm",
  "key34": "5y7NvpxKw5anDqbdQxq5ALbbm7LC9x65uH87hUKC3QriWRfAx6Sk76DYgt2HbLBRYvajNkpG46eehTEXRqypmW1M",
  "key35": "VLMKQ24dBgGUA89pUtuTP4CgLsPtyvFt2ZhVjZzsZZ9Qs3HBYVt8zkYNBfTikDSPNZJ3UqyrXEcevKE9DFovFG4",
  "key36": "5uhxikLQWK5BAxMkMRbTPPp8TidZki8tmSacA6gbNswavfM7GbcRJE7hwGSPPZC98a39xNeUU3dKoDB6hTaCkW3G",
  "key37": "5fccJpoF4oqUHJv8cJ3C7uTqzhCGVcpkRFe97kysBPkeT3WneVrcTSkwEZWfi2SGh6k7hGE6cNYk2X5mzEeCkvjc"
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
