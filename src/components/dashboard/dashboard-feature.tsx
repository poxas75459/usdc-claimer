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
    "2wDZgKcM62qG8DwjKrbLK37inBCUwRkL1UZgy39M87D7761DaTWxZPtUVECWERhePDb8LidF6JSiBqGQLKZ1uDRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ThHbxE5cNVnbbQp4UKZGGmKkJR8D549Zyc54VxDwo1eyLL1kEuLKMGbyUpxhjpoZwTWyprmJXeUCDgMRSoUpMEg",
  "key1": "2cXsLNdKjRZJMPzbTKuSaskCh4yn7jSupAf7QZAcLXnVRNuD2KahQL133xXGAacb2kajvXW91XVPduGubgg35wyM",
  "key2": "4cxdishYeVXEY39hMGGurcv9eCxM627jXDWAK9wbWzDgVjFxifzerBkjqJM2uhPcqHnUn5Z5citbbkxCS8E2o4yE",
  "key3": "4hHKacKc5VubhynEwHLbf5jUVV6sBDKHeLHnQPESELPd4DEqie5QQgqUMX7YhpyjAoNNTDb1trcbgNePEqGb5JYX",
  "key4": "uRBbiDybhVefSvg4bSD44jbkbm2jyQGGrKta8aHCRc3gzRkZkXcMnKbmhHcNTL5Dh5rHwwFirkjJmUk96fxXzcR",
  "key5": "4TE8nANUa3sBJWHbmVdxz7DAv6zx2sS8MsFf2k9hmcTHdxzkuuXxGoGvPtKyZfkQ64BBeuYfuFnPHCeszTnDJkZo",
  "key6": "26Teh8nB7nA598PCWBQCHZWDEoGwxGKCkUws24RsHXEfTvMk3QUSaNTntZNAptkEBgNXxqSu5Q5s4hKqYPSdkfZt",
  "key7": "4t8kwMLnci4bonzZWa7HNx1AREHTfcRvoYVm8mJgELNprDVQHLKXcYL6eJauRsJJ7hvBrxu8biU3vU4LK6218unD",
  "key8": "3HVVMoSNUbgKRVWpzq5VdSEEVPUj8rLEw8352XXCAX9y5ffzaxyUoUswnw8rWZg7yxWA73ZWC6o8S9ai7uBDhWBa",
  "key9": "4XxfcfGTWXEWqDaonUSZD5GycF6U1dnyVuiy1XJ6MauyJQaqmVtzV7G92fUKbvh8UbF1WKkqJ4EtznuqVSyh5TzV",
  "key10": "5WPyYkpppcrKExGKbXqUGYMoRFVCtH7w2EZPUkzN9eXZLotTnrjtc4fniAPgwZbAJjLTdno3JPnETgXpoBduehsH",
  "key11": "2Xg2yN4goB6KNBVQjD7moFJcBYQNSepSHYUfeeE1aCDdxzB9ifqJpbCN78chUvEyDziudg5vGAyPDyt3iJZEFHvr",
  "key12": "JkBXYCEYvWpGu949yGGUWwbwXdgNacUSq8mEFG9LR4MMCmv1gtZPoBGBvMjsJXKQtwstNwPQub3gXT3Gh5ME4Ba",
  "key13": "5zaiHKcwzDMc1VH6PKM92zWp5kYW2hsRhrtgB7nwHgmq1L9r1jFrcShWknzoZjRbneznriUDCYkxMKv9HzWpogv4",
  "key14": "5jynGvH5v7VeUWnB2NvAMxTwZ2xrVuRaAYj7epBYheU1E9pGhuih8HnYTzKRNro3jCmRLabSKskzPYkzsfm6EAXV",
  "key15": "62ZjNTWsWdfD5Vest9GTrXuL798vmEnHG9LVYELRCDnSb5fYtCotQJopTDsc89rsYSP7tcREo74CsJnss6HraGmM",
  "key16": "28xpKLMwJa2jfEGKJQNo1hMdusSw134HU6mkHV2er2RE4FnTuTucgqSVdU6gnTTyuFTu3LF1zXWhL5EEcbYDBvgC",
  "key17": "5khAWxYyMhoMB6pSZ3V2b2wuzYM4g7JGpv8BYoCV8MzLtVgieYnLc4bVdVfiP41ZFwmDKCL6a66tpHHRAsLwLGbB",
  "key18": "5ChaMzUBBUazEUa4mcHDk1ijabw46vs61QzMVyUQCptHx6nZG7AKHrFaCkMYkUZDWFwayhHLbxcF6YKKes5b5a3U",
  "key19": "497PDeoZUuCjSH5H1WKJWL49w92GkUSvc2xSiubnpzLyiQxvdJr9rYdcQkNRonxvEoWTfJsrobU6z3Eyne9F8sHL",
  "key20": "5b76zyJxYuq6jAaYg6rvh5D77BG41ustKyLFsKYmWbxS2WshhKVr5hc8Fo8dxp4Nov6pUWNAxRF2GXHTNqnZQAAw",
  "key21": "5sQws2f8Pt3XRmKYZAbtwL44JKt9imr3nS2wQW2h1ndUAisUJ7yWbcexiHNog2TSZqMqM6MRaL7WGVzRdNFBfKnr",
  "key22": "55RqyxsXrqL8x5todex1MuCFfjUL5sHsLK2t8UwPpLpsbTMjQzKyq25FJfsL53QWZh3CZBtKreh7zSBiYNkNG4hj",
  "key23": "5ZFWaYASKmUyriLy1MpGyxm56exycBAaij2RQ4rcQSCeG8dV7oKoN8nNsgB5Bgurypr6wqfGwAj6StRzGeBFNVb9",
  "key24": "4uE6s1YfsfXPEvvg4Sd9j6Zttrse9pGYzgThCTJtFVPddAqB6deDbiKv6k3AnuZ6zynczusEqpTeTtpE9SLZVT7m",
  "key25": "4Syq616nc4SJeAg2kcLTM4p4V5VUyaf49uVbnbk5RFxPwiUqn8whTuJ6Jtb82N6B63L9YYBtCyBTSRRvcvTM3p2c",
  "key26": "vcdW5hMq3TooJ5sBGoJA3r4fiT1aKtUTaxvFK8hQECPAyEtWwiH3XXD87RQ5QAedzsgaHkiWV1RdJHBra16GuY9",
  "key27": "5Pvob18yFZYMjiAaExbVaT77FmzKUhD9uZ9jDQKhea4ti8E11d5U6PuryXbDfA2zseGEYrzsFDbFodWMurvCyPEp",
  "key28": "5qskcnujkFzS6JsbEifVP633kpiGb2LMVAPM9t7cyZeFeGtD23SwAFxzJWBNGRGhHAYCumDtDaavrwqEi3WJZ1Qf",
  "key29": "2Rbfc61yuugLMCuqYoYVsiaXzWeutkWPuhPkAxb3GDCwmZARsvdGFJ3Ze3DuPTetUJya6wpKwSnpmo3pgTNtmbP9",
  "key30": "2sknPwZ1KSRnQWSt1ZYMicog9rFuSMRptewdG4S2qXZXGDrRUGnyjuhw5LypkDnLrzLwW8DVoquTvL3mCeJiSYUT",
  "key31": "kg2MnQJSBPXCiFj6jSqSKrYG8zQnW3SVG88bwiph24gmWRjR8HGjAVj6e5nTmUGBxs2gGDhGUZiFkchV5n2kXYy",
  "key32": "3oTZy32LdftB6vXFp8121oB4tweCsHpvkuNv765AWBxsKs3ZzVEPc43Xzagk92wL9LLfMrsYcPkQ6qDmYKkrK4se",
  "key33": "3zGnB28uT82TnHAm1rGdwKWuHujefVowVLqK1boGKBZLdVspsCsQz4BPyR617Dk6jJevJ6fDj8P5DpEdqSFZZgDQ",
  "key34": "4bd7v8nPk8nH3jqQG9RBZ33KScWM3KBjTKBW3bLBPJKdizMugxMKdjczRQFYDiw9z1pHQFykXY1CXXUgSybqozAL",
  "key35": "4XGxmgXqGByRXLbV8EzFjiDyJvNZdFhPncLJu4TpM94vmhrdov66L8Lah9LnNoiNruAok49HQYyvxruDQDhbgXGy",
  "key36": "56j3UgvqwHEMcMUBHaGRDUGZJtLxaNJhrdZPAz2ddg5PJw9Ywc9iecQhQ3zpjAhwT3kkGKx6way3z4NY3ChZhqeK",
  "key37": "5Z9556QR3WMNHHVE2FCfLxmzdKGhq3YePmMqpwMAviYK5zwbaYEYTKXLeinqJ4hT5LjZcZsorV5xqG9bVN2xWQkS"
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
