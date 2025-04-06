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
    "7sqguEMirL9eXtoSLbkXp5ZRcPnVLdHikXx3QURMHrsVYk4w2L8RYhXrxnnrBbSiRS44bX7MDnSwEZ1ADonFwXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "244ZVGcjsWnvD8GoGEiy9W4H61g5JC3QytGdmeeXPExDeswzAd6UVoEfoV2znJ4BALv6mAMhouxsf2WRi9U5ET8U",
  "key1": "43QJ4n4pA9h4oqbkw44MXqycWkHaeR3GzSeMbzJokKs4XpXpLhpZy9qofpG4xJR2YKpw92PDdAkPzHHzKcK2aKzy",
  "key2": "vVsuE1vWZxqy47bLHCQeYabxZMqSpM7Vw5u7TtEVyGX7zLaHLbfz64DdAbo3KtM15x5REHvyBtFL95DzgFZvVM4",
  "key3": "tMxwtwjg2n1ox7vmjDZRzZuqeNacf7EqNnzfRUQAx2ngQ8VMhLRPh5JyozRjE8f2nSPTNgNkvHhWWXR1rPWqrYg",
  "key4": "tDvd2UTRhXxVKVnbGVnogXXHA4srSQFD6MAHR4dx23Yf1CZ6k61gCzhdSaup3m78zYAGZ8XDJaMh4CLVZx7WkjU",
  "key5": "CcemH8U2C1NxG2RADgyndZuCM16WmvF4Js4nRdGSVd8KwLN6FXM2Yo48kHKnoVVM7kPmhk5TfSany4sz1J5rpbH",
  "key6": "5iP4tqnEAQbAEDHTjcMv63Ve7pfe2JWVErGznEVmN2KobsCYAZcovo4Mh9ZzUEioTFtAetyW3pvmtBojoaLBtCzx",
  "key7": "5KMNDU7nHETVzUD5sfKCF2nWJYbMEV7HJPYkNfGLgpim3juyY6gTev9guYAW7xY4aJHPUrEKZjJFibuXkNkzPa48",
  "key8": "2ca75wgmamgEC7XFEsVmcgCuYZKEy8X9UCZAPGVBdDmdjaekuqktjQTMi5QxURU8gFpw2wM5SEdVugCWaSw66PZQ",
  "key9": "4tBzTCXDgwPhReo3S8bh6MbK9Vae62u9H6DuuSLsYDYgEZ1Z6AmBoCE6RCQ2gcufXcN7j7wam1dmJe4xKSf9xSjx",
  "key10": "3juydjnTK8tGbbKRvcSEBKLgJqTSBcmf2AeH4XskVwRMs4YViAc39oM6Lc7sdgPLq6UDgmKdQRgt4V3J37Bdp7rA",
  "key11": "5wg4BZNoRwBLAEmYEKAGxYphMG294kAB6FXKvo6kpU9aJ23f7mKMzNAQdv7M2jL3ZHFJNtbBjEZT41bd8dF2HusD",
  "key12": "2XL4YZuGem3RVUPMGj4AtAJbsGHDKzbiSCsiCGUChb1H5amtnVNmBHPnU9NEWmAGAdAg1NmY9hjboMUk3UCVJhwa",
  "key13": "63cc1T1sqnA9W777MG7NBiUCieN2nGPySxeK7B4ZPr7iCG3fbYnyyUg6riREdxCEu9hSDEvG451UqJYwcAipyUfS",
  "key14": "4SQXk11yqUjeHNDXh13nH4uD6Q5DAYEg48M32QWjBBQGVk8XSBY1mcBuvx9qxLFekqTDpDBh7cwFGgH3oF3cwALX",
  "key15": "45auPWkJTHvC5D198YKCsUTDDk8vc16g1Uj4rB88kovuna5D8ai5dnSChV4Ladm8z4hPbLiHZ51BgjYrkjy8pdje",
  "key16": "35xbvgdMu39rmGv6uD4eoyHCySY78J8CMBD6V2yFWot3STAXcVTijQ2tbUcMzkAptSLzqCY5N1CCjXWke5SWic26",
  "key17": "5VZY2fgFqDRcGV3osXB7B1MhGWSWAzHvoqxuHoAcTEGXgAe4ofCUmZJqGUQ7dHxPbna8pkSKEGiDvcJimzmnBEHT",
  "key18": "2gExFCfSysJdoZA5Z3BvCQq98Zn8bB7zuX5fipb9YFXVj95veAonh4kT2bunf7ycnv4LcbbAWqLzzjGzhLKwaLyu",
  "key19": "4GDeEuDewTJc1yvunBYVHJi78iv1ebTft3xp1qyGJp2y9xiQpVwusSLTypgR47SuLe8FztoiyR3niaYMnb77jRfh",
  "key20": "5U1pFDmXwwPqHiNfAY4ZujoAA5LJRvMcQEie1vHkN6tT7s2DbxMqs53ve8rn4SuYU7f56ez7MEr9axMTvAFReARW",
  "key21": "WZcUYT4aoJHGXQLC4wdiPvw1VejfyiUq4njgWFJYCu1nv1h5hfLdrBfaoPXq79PzyGXgAdUGdqchTD3oKKH7m8h",
  "key22": "3S171RBLHdoCXCXoJR8UqYZ5XCMjFXU5qaN8b28hDEb8EDHUrChzA7gpxHX7MFaEzyzJYdfiEgM9Nwm4hWC3EMnQ",
  "key23": "2BZniEnkMconXNzGMfamdVQq2KqL3GTP57Qf6oadVYbez5RHgECFmfu2MgwWn8mFrhGGE4g6y7rcbrbEEHRr1Hjc",
  "key24": "n4SVeC41aXt5QCvexox4bVHRhRe8tM6hSE2mdUxiDDVbPnrMt2LqQHRvfhhoDGQWVSpsTpmTgG7SvXpPHfNHJnp",
  "key25": "3HhgqRrXk5MycFUKacF9mqRX3nYzNb2NBQc8xZospqXomHKriNVQdWNuW2S31VGFcRUE37Qys2SHwkcDjP21auxF",
  "key26": "64Cpamk2FFY6iz1zkCD1Jc9egzFMkdwtbGnsyaRpYjGmswFjJyNyvXyZrknBRFFvdcKnS5zrqy7iiYeXysaN8Rc7",
  "key27": "2w1HX8p2iSM5PxEL46ggSs6csm2MnvL4v8uF9NfCMuB6ie6zGLNTgyYdfF7HLjWbGnFYFvNAd9AeEKvov9H79fzi",
  "key28": "3d9KknjJsT9rG6G4Tda2DGYDGZrB4zvjZ9aD5HZLoE2gUSq4n8ktiYhRbZq7hxrpExJJD6Th9QSetAZWn26rvosp",
  "key29": "4PQcBRmoHCjXSgZxhPj1rLvYyopCZatz1K6Dd7KmDCGXctEbn4gBBMgvySadDPk7ceNXYCoNbfUCB7bHAGs4n24z",
  "key30": "21x79DtxCDPQ43stvdCBBPMUmLhjirnqCsXxkXMAD2kxQABmZqrH9XiKUUz138c2VmkHW9L8BPp7Unw19fwoMUXY",
  "key31": "cWqo9mTnytoY35Wp3wtpGVPH64NRxxpSKzMbzQ6wBfkJvfV6bmodprFcmCusUYpNRG9c6waf2JbT5iJBMrEUGc7",
  "key32": "2RknThpYGy2Yoh8PKDs5qrKKhMu1TKz2idJgUywvk1niS5snwmxBpgDwcgrrdqiTRqgNxiZov4ddfVF2G3azGYSL",
  "key33": "37fvdp7WAosKiq7P6Z5exG1fM7ZrcaPsDVv7R7eEX3o2yU7TAG6RVqA6fCJgRDgi97cN76r439TiE1yJ4hKxpHpe"
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
