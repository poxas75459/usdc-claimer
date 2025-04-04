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
    "2HK9Bdza4kpSpEawy9C6kF7sSDP2HE6knsdmpgLW3usb8VQ7Q9hbegfWXMdGJCYPx6bjsYtzhCcyzeWMcsQDMTt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHEtPnCR3YyA2TyJLqZixaFSRrtfmY2ZQp4Bpxi7BkEmsLs4WGhedYRtcTsScCeF1nD92Wpm6WtbuyncqWzqjfa",
  "key1": "4mXgcYwxj1xA7t2MCAhurCcsYjZPwfXmuxjWizZy6V8YeaECgy5VvjKhPg5MDbUgCNWpYEMVoB2AdtZNEgMeguy4",
  "key2": "3Y4njUKVBVibpGFcrpEhcef6aDHyjCorzMxKAbx4ZDTox9KRkZhJJVuxEmQaBFDAsDNYK3pyWrWoHUZmEUCcrV6p",
  "key3": "2qie5xRkDtUwYv9H2zLhLDrEE7H1Vsmshu3mPCKZMiFBJp5x6aiGYkv1DuToUh93hLpEYM41BtL1cQY8jhtCD4T7",
  "key4": "3xmy268YAjPzmgJDFia2xyZ15iq1xUzaiXSJAswtyksPD2tZNiX4it1ALaeawBYEk1mFCfcnvKRhoj89uLUKs4mV",
  "key5": "2BXft3yJ5WGc9Sahwt4CNscNdkdUVts8Jneg6aHeoZ9vVp5pVinCfzSdh64JZXL7yELgozb5NwPbhg31Yq15PjE8",
  "key6": "3mWDUDAs6A2Z4kzEGtpe9TuzDoe6ghGquPin4rCKUCFvFXoVvkkQStoNwJQW23fog5ZapChJivu2u7W1v8u7hTBd",
  "key7": "ZMZoYDQQEpWp74expiqjVGjqfTJoz86VqzhyFPyi7YnSChRE1XfjtSpevLnWtCeLdnjrVUQL5jvpjq8XKNQa2Xt",
  "key8": "4oeKFp8MFjUUwSm9X8hLrUwdTVnEq839gykv6QH7z3r6sjLTzKcAXtmSvhaLVBNyYpR46onM3o2Qmn3DzQuMCCPP",
  "key9": "T6z4yQ5A5EWtwRdz5gB9PdfAV3DC31iexADQRWETsxEDwwoarSnXxDpQYsthsNnfsGTeP118xwx8pFNCetygX81",
  "key10": "4GFXiXHAjA65zbBAJLzdFBtGPi18xj4wzWKW2bPpGKyvUTN6Ly6VjFLr3CwMCw3WLVgnRQ3y2ajkZZspoNrFA3bQ",
  "key11": "3NWtYiK4pdgMfnFZKgzhkJvs6B5aSAPWPy9cE3aUya8wDHwUNLi7BQKQ8VVoxEWUSCFb9vU97wK6zKJmquvvweM6",
  "key12": "2kxXpL8icuH6HreMfkPCNKXsmp6pWG5HkAkxbbx2iUvMWteRLNy5AgiTpPxSUjhpfvVJzMMaCN1s3SQYQwjkdRqR",
  "key13": "28jraULxbtfM2vdukKsyxL29WvuKPqJXrNjgfjokVG31PYA57iWQmyq4kjccMVB2iQHFbEoSS64cp4f7KNrZBGnF",
  "key14": "mwGjHwX6KWAohgmuSYxZ94t2vcvkXrbt9EKrAoMjh8GNvPTtJ2bZVtsv6p6HqzAq7ghehzk5Bjag3bed5AV8ahr",
  "key15": "5PvZyQQFurP7mXmqDuunq1DfM1mL46DUKRARvCNfb1iaGdmKew6V3vxGmznDySNQXvwTd6194GfPed4Koy652zKh",
  "key16": "317FEo1QKbsLD3EHgMRHCJPAPKu9W4DL4Hir2Akzb9kqXcE9Djwx6FoPGAHfoggjESENPfAUensLgmNL1dAkqLoQ",
  "key17": "3zfPpc6izwqxy8baAsYKrWNzpvk4sfaQsRfCXVUkJq818FeCd3mLnUi7RZUVpBeqNbMYDPWtUJvWeAbTaL4RQKwj",
  "key18": "2aUs6hVkav6aozwSCcEUcUnMH9SekoTwrZ3n17Ag6ytjUBanTAbpVEZteAzq2q4eypdw8smGtYSdVEVJ9P7cC2F5",
  "key19": "fLXgsF3zQUHYsxd5RYwPmwyDqvNFK8CVD3QgDhQVCrnyCC2KbSgkv5eM8kVVcvqfxWVC8FGz3o9mJESSMkz2pf2",
  "key20": "28LaYNj5ESxoHHtuGmZHtQtnPpoR3tZ7r7CFk8MBFSNen497poXR4v468DxosSZWAMhXfvj1yRjzwk85ytPWt21y",
  "key21": "4DHC3ykXxfXvqCagsjdH1mETUc3654asswB4vg7JeunLi3kUg7Wx5cfjQHVeGDbXqYbQ6KoKkZqoTdpoL6TExqhi",
  "key22": "4ZxPsJzasN7YtUaa8iwPP9j16b9R7F2saqMQBCrftX6n4Jp22uKFnYjtN4PC61j2h7rikAzn9Kmiexon2c5Mvsnd",
  "key23": "2XyTFe4KbEcZABnF3LLEZgqL9uvLCRmKVXnTbqqDUyL8MCnRHNqV39suz1oDfeGFrKxQiTn9Zg5faAdhPY55BySj",
  "key24": "2GS5y7gd4yTttDpaNwzprRdvcZQKtt8armxeKKYZzwDQ3TakytCBJRZfUdWFakij3QDRWiDivdZJ6JXyMkFcNrF9",
  "key25": "3pEHf73ZwSNFqdAuYpyVVQesQPbhUya8ZtPzr4FTATEpZDgY9Liu6ofpvftumskxDuXUAmS6GquWdkwmUVnyM3nd",
  "key26": "K6tcCVeUNYiNnhwEyfE7TkPFi7EUNufYTNd8xRJNnDbpJCxZ2PhSBpD4c5U6y1EpjCzqtiRBrzXw5JnbUt4yVFf",
  "key27": "5LCGSQuj1Yywguq6ttrwyjC5ftmYBETFiH9TtH5d1pLxSxZB5Pr2HvBkEnQUoGrZpaW5wxskKbafS3LSCxVocEyb",
  "key28": "ajz9bfEWk3L11HgrDBtUEsivcpZUzerMVtUdpPeCMHurETGJ5xDSTh3LL8UoLkfEyrcpU8KGHuNV9nUok6smpX5",
  "key29": "5413QLXx1xxRPdHTiZyUq38gbX94ZL3x3BrgMC9srYjDoNEYhuztLouWmhu1L2jWLDrPEPJjAub7YgecMTLT5K43",
  "key30": "5adjyUkV2kHNwUbxPV6XLoAjGtyE6ssriybv5xeBiSiVH8rXWSTeJEkF7wBrUvxY9EDpdqTM9CTg3ffkkrt8mGkh",
  "key31": "2Dftb1NxQNq9Rngk293EVnCMsHgYaTdr52cahkwX4UUAqeGcDHifPf96HLBWAbK6GAkqTtJDkbtxcXpF5BTNanu4",
  "key32": "31t2Ch9F9WdJgHCBDr3UG931r6xbtkYfSgGwuEVW5NhQknSKfTpLa4aGAKjdGe8YdxF8ZiY8hLEJ6GBZ4XKCkD3V",
  "key33": "sqNRTHJEsEdG19Sns86NEtpd4vWTHFBh7rQNRdjh7U2Mp2cQpGaD8t6Aa84iRBAe15gdBzn59F1fd4RSteUMCmy",
  "key34": "3owQ9aE5wnRkLKYekkQjPkeVy1MVQR2vJbHnnzeJEdGRm4qqA1Qfrp6Ruq4GkzXxM1eZTM74G3czfnjCvUjsDi3v",
  "key35": "RLmvn6JpAn9gcnCT8z49uF7MXoZgp87k9f7PiY1MjAcef2VDuMtR2BMogNRj71XsPdtXqVsi6bXy39NNrTwZSXR",
  "key36": "4nvApDmvZgWyyVR3GCEPjggujv76eS6kj8KBBkLiqfqizen4vZrigf2A7in56qYNmK3A7TvNELqjJgS7GJtbPsvs",
  "key37": "5QhkYbkS6z1EhqKNyo1tKh8buUzqDfNdu4FPWcm1joNe5MNiWznW657EsrdX6LMRHUWsLhcweqAxxfELS3PWiXxc"
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
