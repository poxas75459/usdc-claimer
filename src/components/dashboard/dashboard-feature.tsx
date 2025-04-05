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
    "vrWjWg6frsTSyS1ed4UG9V34zDtND8odg66pfoqCVE3a72UkxBRXRRDHETe19tfkhHJRGBToaqujafmkq6thXcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KZ6BcxXNdTdn9jEsD5kmgVkrs159h9KkjuCa3ANEqzhNMC6wAYXZchxiRsyfsi84unH73XcpsGaU1SXgtDQYpe5",
  "key1": "32C1TttfPNGQr98CbfhW1zs8mv8VKLyhXGMGLFXa7kJrr4GH9x7JfSkxcNVtCYVBwXktQ4CbNvTropnjvji4YCho",
  "key2": "2e6hDn4z5vFgELTqu2gLeVi2DKz1mUxWkGby6xttpxGSHXXh6i6FvvtDPXFMK3DB2fTg1q6M8RcqYDc2Njk1brMx",
  "key3": "2NToFQdRgMtzpxGJbRZJjhidzo35fg8yYMJgUBYGeM1jEvyE6wUxoLjB6DomLUQRhFct32Gd5SB7BosGX1weznnG",
  "key4": "5zQkyMGUFQXnan7W5Hrs7RnSPX6P5RtsLVVcEXYNo81XGEviaorHsRnwn21VSpbtzd43qjc5frZkkDXkgqh5kdeV",
  "key5": "2ghBE5JcB6ugziXR8XmSu6Zzy646RSUbZ7BJEE4sN45ttSTN2nDtmsK29aysx7yjtALZiLdHqwe7UoGmys8EYoVa",
  "key6": "5veAmPakgGHhEtdosg6GTFzreWhWadUQUh82rCh2zACYE1ix25nfbEQ9K3NX29gHQJgRZveXwJPQMbRYajzYoVLK",
  "key7": "3xGbDrVHtBkziaEv5kCbmLgeiU5ZsXSRwYXecGN9nFUnSN93xx7v3RbmgKaGYuvxHEuohzyV4fQbTCqLjae8eXZJ",
  "key8": "3jfpaB68NNzf4w6pjQxATG8Ym2d95TfubeDwTinHJcQg3UvbZhwNVN252Ce5BFCDXQGWMAw9i3NwasxjpmzVRFqJ",
  "key9": "4hZZeCapQiMLbMbbJFCaKjAGFRbhMsMJQGqeuPXNkk5fw8kwm5dcJDPoQe5LY3ZjTKQkiDFhvNrUUPJB1vUzLMuY",
  "key10": "38TcN22r9mKsoBcAAiXoCqFh2cyxii4pGLUk71PRojK4msCmG39KU75ZrPRSX4HZWwoR7TgkNWZUAL7J6FEmR6Ej",
  "key11": "66QkEPUZ5YxuJ28xbcSuYxmmKJVEdSgj8Ys5svhDo9UNUiDsFpGbdMyW6kwFvGsHTqfgmYYVmCjKBp7FQKxMDDWC",
  "key12": "5f4d7i8uY9egTJJrMtMYS4AdLaAjFtBaUZ6nwB8aER1rwqyDyG11WiLPApg6Dhh8qRMkLScMELkQTpT3Wmw1ap4A",
  "key13": "5wNhkC9FT9odEcnzZ574HgRZrJfy21Jx76S9BN3UywB2fT42oFPHxjNaX5AS2N5iY9wWFDhsVcsxin5B3KJPwZv1",
  "key14": "2ms6tf2PD2CnFBzBui4V8h5P4TS82iDzdQuuYJzT21tTVSSE8QX62EqwRRtKabmtqNPYNdcFiR9GWn4MMYNJbK6E",
  "key15": "38d2aT7Px9u8Urc6qBJ8NJTkJVMcizvfkpL7L7AvjUR8DtU7G1jSzdeQ8F8Useu1tEm3B7ahYa334dheSfHP3kqH",
  "key16": "2oMQnCjkxXrHfz4Vcn5radJg8Bb4CBjnzdWhnV4K5kTz6gRAmb43gVD6vNe1xEy688iK5v2EV4w4tkodbDw8sVeF",
  "key17": "3K797S9MWYF9rJnLtCrmYcCqT3t5rV5XDZ3qNzU6HQWTVysCobFz5FrYbDRb6yBB93NpkBnRtFD9Zf4xgE5KBtzU",
  "key18": "3fMJKnecaqsQ7vqTJZD1gnLMQ9ELJwJ2cTkLUHovZhhbWHSmEW9bC9nXRJsvgUcYsUq9pveBkEBp6Zo6LmNBpfPz",
  "key19": "2vikhEnTvTea4BcYRbBBecAmLQDepUKJxxBctYa67wbVq4MECMe2JtTpmQa1hZi4DuAEeymBAa5YWgV15noDYDK6",
  "key20": "71qTZZd5nwPjVgGCyT9X2ERQMnn34HHYvnCAXTNomokAsGUQvQ3i7EUUootgorm9G2mPkf5Exm8NVXgoyDyJxRA",
  "key21": "PmWyL4ySvgUptpGFWNYE7ZN5vRg26gBftV4QZBq5BAfCWkNstQ4R1upZ1utbLB1p9FfAMgYXYALKdN8XjCMcrSK",
  "key22": "3QQNMG5YyxQKhuUTofi5iEnevbQtrz7fp8shbrxTed9aCXMEcr3k2HUfFhoa3FzQnQtjwnTuZf588vFPomRCtXsy",
  "key23": "54tyzs44x725fDQbaykYp5qnGn5DBiYwhZeEXua9LHiMQtJQ6vuvgiN9YjAgaNTSNPBXCHEMz3ZcQu16Wx2dMGX3",
  "key24": "2y5sR4QanGHLmXSD1g27t6MEARiT1ANdTsfPVFEZA99Czp42DgtAAeiDw16uhnzejYKyGmrB4wEqg5mFRHkow6Ui",
  "key25": "3gdbCGpDXdc64EiA8GwmcyrCUgz35pHqqZXF6La4fWL5Hou7AJTzfSb59vbTeRth4Y2MggxSc98qZZKUdarUtqN",
  "key26": "62HihU51Ew583MUujdUr1XHwwpkrwzZznKdXbvwdrH3CkcY8dxNnMFt1UKW6C5PXRGwEcX7TuzomsEKNpHrH1ptQ",
  "key27": "4rvovwb9BtTUCnv497wER3sBhURKFP4nb2hHfpFoFJt1goAnvU69e9JTTixTWDi8HXwTihUe4BXZUFaVJjeckEWb",
  "key28": "5SChvHnGFhuduegWjco68vvXy8qBpBvdR2PphWXeWLthD1ZyLBNobg76QWdVJ7D2nP6bAEA9xm2HfF519m3AkL3r",
  "key29": "2GcESzfTmTFKpc2hCKzGYPrNK35BoaucfQDtKT5HNMVhC9dCEVk9YEi1qVqgLmaBJDffHssJD62E4dto7Def6ZHh",
  "key30": "28CF5GBnjogNHRaQdBfmnFE3HyQZKXWo2Px2R5rQ2wFnPPL88HfRgsGVm1MYCrXaRj9Vp2RAA4VSKpSqwEbAhL8M",
  "key31": "3YMeYoWrbBHjMVuR8dZ9rT6YSiJixkJDhj1RrUqzJZwa34hdM3cP7Tzzcckp7QQpr6PgmWHvBUwKSziBQVf1wtPg",
  "key32": "4D1zYisnfmHwxZpCUQHpPpakqwJGFDaW4xu7qXnbfjHPQMJmyBTHonGFRtwfApj55HL32tCMVcLdK9RjHzyPu1Lo",
  "key33": "3imBXFmUbnq8yVNhbjAhqfCJy5nzuR4oDm7cVDxDDXcSAihCotjMTyEAG2nsgda5ieqiG6SrFeTfC2VEjiCBAVGL",
  "key34": "id5arVHtJUr1Gr4gAwc4T4A4QqY7GLUcmYz4KZPKd9rdfAgMuh6BQNvHyEC4jH5Ad4xrVYBMXfVssQrfbea7yqP",
  "key35": "3KDixe2rji5JXLEjTmwY2sE7uy6K6o2s6v88EcRwErCcE2d4qCXUiA3zPstFGvk5b3WY4dqRA5d6qTnirjTjhkdY",
  "key36": "4A3qpyM3tMivqBSygKF24BgHL1vZvmEDgXE2qKTxVc8FVmtj7xLg6TfmmxxE4mUrGKQLGUDmWvadXC9skrNLieLi",
  "key37": "2FYrVnDzq82cY8LiqznoBB9wwXCe7fd4zgnUjR7rDq8fregKxWQ6Q6HnKB7v4YEXHQiyu7i1Z8e5LeSBTe6vmtX2",
  "key38": "jJwFjcR9KLkiar3A3oMXUM8vhVoSE5oEg3AcoSPAVsKHcf2wURmUHgkjcP3JYS9qs4nsttLnn43wpY4WCJYB2Fa"
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
