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
    "2priECHYKNXq5wqbzgYiF7gHqNN5KnNRa5NuQCaiqmLe3mG5nhYD6uAaVJKVNBp9vHuGrvrW6MnaX9rT4iqAeJs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpymiX2MEDzU3U8yCx9MZRPwHFKpeN8MMfdZEPBBKvb2PAGXurdaqVXLJsKBwrb1wGmsfni2ciXXtacvLkXTHhf",
  "key1": "2SNJjrFg2niktzX6uLv4f46X4fP5gS9hPt8MWmmzRrmPtbEGiPdNaSmWhfVz3pZQ3YGLUNg43ypsDqafB9N73fxG",
  "key2": "4RiJSB1V3szgzSVbTtXNBPyZj3w4zBNBPZTWUKrTqgDvoVDTiLXGon6o5E66d7p9cAb2esruEGEwFQugGs95hPPK",
  "key3": "4rKEcinmLUKm7HVLWGkfU4DLXE28QVeKZtMCuD22AkBW4d9WbuS8XeUpQXgiVXDfm3bDGgrmWGYFrAs76LVXSPpe",
  "key4": "3tu7tQiJ6LhDQgW1FQzDkcSw1VfZeyp3B2E5KfA6G1V2X6A7XCt4tyGNSgKbtrQskgRtaVhahqtg5H65QVhyFBjj",
  "key5": "u6s3kntibMXj75ihS3RVVKJCtbUBP4jSuJPAvT3vTn62HpamMg9PXRy8BGN62Z1NWWzvWu9ov56ih2EXWv7GJuR",
  "key6": "QzvkaxFv1NwcEnRMcBzEzt1RniL5PzfjL1DW7oi7HNEaefsZT1q2FxttZE8cyW2mfGUgLkF8Sc3bKSAdSo6GDMB",
  "key7": "4KgtcC1wvxz2cY5U8g4fHciVoNJC7fTAmpgHKt5LyYfaHf158dVetWiriwdM48icW28C4LEAX7yAMQFX7J3tPSQJ",
  "key8": "qX2gmvGg81u524xDvyQ3ucXp2buhbP3zAYaNo3wrBnpYk9UHGrEQtn29DbcUxoBttwiyV1rnbJMWvpr1QoC6ebp",
  "key9": "3HXDKxuvAifgUqKBdmHhzn8dMx4GYKVFGmX4SxhxzdvXK4KD6gckW5D7tPVpSBRNNKXdc3tM3AGFisgcmubxADRw",
  "key10": "2x2gWF5LGVPRWGQ5Dykuvfuurny7jTPkp8HHjbnWdxxkBasjKipF8B1zzU2Jm8wEm5nkoUAT8uwYAk8oeSZU7ur5",
  "key11": "34tV2ggiVnyFJaKYMq9WnXE1q2meq5Vm111sKFfJK3hRafGmtRLLmHByFS3iSUPK4yGAa4gW4amLgMJdcbHf6VpX",
  "key12": "sZeQAzzf4Lg3MFHaYHSmpw5LCr5QsUHS3Du2LcVYeKytMN9gTa58qyeXDQ6i1HQtyk6SdAcbQmz9TSktURt7h3H",
  "key13": "4qboTTQouVFguGUacu1rpBzneiHNvQsy4FKbvBUxCgVW3ytWGJoYXdvAAWjsyoVER8SjNiBLh8YoQQVPyHtn8D77",
  "key14": "5eJPR4rAmNM4xnRnw83C96GMD6WKkPa6R1RvnVUkLVH3rKNCC2R6MwoNSiDeEWp1XYSaywQUtjmgAqGcv9QZUwG",
  "key15": "4rCYcbzi3LDXGHCJQxLzcAn63own6zzEzRK1gXhytdGpk9gDFHhQBmYdbxECxBiLF6Kj6Hz4ofbpkpXNVpcYTqrY",
  "key16": "3m5KZxhkRgvV5rMxsCcn3v4ExJUchhDY6sSjE7bTQ2M9iYmkFwg4seCMPSCBdHsqatc68fWkcuqgTvwtDEFQ6Rvu",
  "key17": "5SUAmnFYuBPJrMmS52TYQMrf6tEb8ScJuL5i9b6uurN6hhkJtd2SW4qQ8Ju5agZ1bfJdcAa5J12pyYyZkESCsBqd",
  "key18": "2XShFMkAEXGejuCWSwWuH8eqeBSkx9FMpLDRnw39resbtnrdkDBykgkMp375j5vgxGAwsAXsDckdE7jEfgV9y9E1",
  "key19": "5cGHsKSKmwRLNf5GjUPsaEY7gMEpMMb1xKgXjKUivGNn5fT3suiDSCFE9zHVjYZJP91PRwKLkrLcqxMUVqcQfDLG",
  "key20": "4vDsca2Dib9e2LVJiqZDvJJFkmyFxkCJsUbm3MXg6uECUSEPHt6nZN8Uju7HMEVSQxiCKRo5rNt1tTXpfJMF3NZV",
  "key21": "5qgwDvQrYRDxyyakxGi78HCFUdZCsmzsYkYR62mwb1e3dB18fHJw1sN9vfhgSnxXneWoUBLyDiSpjk5SQUX5zvDp",
  "key22": "396Xo669pzPTijeztBRDARmQvtgu4T6JtwwVceA6aqVCsPmaVSirgbZE9rBaZZ5YTT31WXm7E7iKDtZgHFPQmRCt",
  "key23": "56b9DsHEhf9e1V3kDLuNYfCJisRms5s9VPtDUiZti8p3tu7k2xFjQuvVV2XmBfdCedhf4GSG7EjFoEA4FfoAJfQ7",
  "key24": "52Xq7M4AkQGkBSLqzBTxktoUq8sexPhAiRy9Hveb5Dj3AJZCjmkGR6fADKTghJJw1EKtiWy9XjqVQhj6mfCbwocJ",
  "key25": "2jLjXGXMx4FoXUNVGShFL3hEBnt2UqdmEfFFUq16NwdrZKoSjd5A2Q14Dzq3sQLjvXBJLXw69A8jgLr4b4EBN4QG",
  "key26": "4E57Ux7dp89vWXSkVvynRPZo9w7sJs5i1iuimWDCDhnGDyzA3Jm5F8fdcs7dBKbejxcevd34Vo1qJahT9SMYJVy9",
  "key27": "3TxJGdmdKm6kzdw4xedBQK5XZwBhznfHy33VEuEXZw6eLMTDwPLvAX9AmuFYNZukJnPCkJmkSenNxTvzMdRLD5Qq",
  "key28": "3vFNXFh549br3KL4SeJoCCXPh3uVyAGxexCVhm9xfurQisnkSvnBTre3yP4RqsziZEeYKb8cfE5ECsZB2e4qnqFs",
  "key29": "4N1To7mctogEDPDev7ut5KocJ9YXqef76xT5WjcEt7H46ddzqGLcUJVuREhXbLCT5tkdjhTRXKPr1aBXGqr1cG9p",
  "key30": "2fnAdvp4U2MASuFuRogUMxbMBeCFo5B36XPexaRe19a7AVxtYRvn7ZafjzRWpV9R5wSucbBjyiHBDAvjCzUKvDGQ",
  "key31": "5MVrUZjHhfq8sCi8t1JJQuZddb4BZ4GKZnz4MQ3ENM19kYFgV5Dy9LJgzzVyPbozf72xmvdcuRiCeAttKwyD8cxD",
  "key32": "3Hz4GzFTKNYzLNqqStL4bfLVotU7VpiX8XaPeRkg2tJf1VYpWhHFTD6PzU4z7xtxETxKHHrhMcf7dLvF88XFMRwb",
  "key33": "Rnwki4Qu8mfhyD3MkWHSjmHahj5YurRk53GcrKJbaK11htB7koSWY9wgy3cW5ZDGPYDH7rnY4EsEc1evmbcPqsA",
  "key34": "4sjNAWQQT6rUrmeYkECKPCAeumo2CZctZvFnKGmAJgkawp68BaL9PV4AznZga81aJ13391DJDemskBJPRBunSfKV",
  "key35": "5LoEwmie7W8K6YXFWuPXohWyKkxHe5sk9C4HTXuGxjBcNDUfuYZbS4eRtqqAxFjD9n6bkASn9KLYLPrGMHEnPZpG",
  "key36": "619JgjVzUnbLKmjmcodBCfSERDUq7yKwfCR4qBCrj5ogW2RvppmyALmET7zHrQgs9sfsSaxaSnYyRre9pzYMiuEx",
  "key37": "4akmyPEHdemiVza3ijXKWrwTusvxqEPASfVBYhn2V3pa7GY4PNWgwtvTspkMR7Dnd4B2SSC2rmje8G3tXV4eDtW",
  "key38": "4Gr2P5gprEfFhPyoFqjZCQJPHCpemCX2yACKXJDdcvaGHtAEc598YXr9V6YqkLwHRrKoZrjZrFCGF1gTvUjPLg66",
  "key39": "5N1xLF9jBBeq1LRV5yksyepcMpg7dF3WGsz67UfNYtAfcCggiP8rTekKNHv71RSaHn3adBcUuuQ7uFz4uQRvHDhm",
  "key40": "5EKMCFj2FP9URqbFtXmWz2Nw25pwSKbGRYngT4reL2Dbh725vCkGesGhnmqtYXd6G2uiAh8wBFG9wz6DEUasXfAC",
  "key41": "5pCaXRTtNm5vzz1c5oSLtezwRrw5ZJp5BoDfFCfsHYtvMT3EM4j8ca3Z15HrZdhvbTaJzCSNiHbw1Q34LVnqyrMA",
  "key42": "3knzbCrAdocYWRPyT9z9zVYDR4tiFFb974dnNNFEqSkX4muacgjvVFWWYe6AFMjdUWPeKij5kNdtPRLzYMMagCTQ",
  "key43": "2jGJEfiv8EgiXfvdsqxbLZmFqX25eKNWiN7HKEciS72Cy2z18WyKwvdLwQTtLY4jHiubnn38UJLhuQHMEoDMTczE",
  "key44": "FYtA3Rqvsq6bm7RjJZF4VPdjwfX3xUA6NTSLHBshP1ue39FLEWo7QxN4226K57PQGsQaGe2JPK9ZyZPTx1tceqg"
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
