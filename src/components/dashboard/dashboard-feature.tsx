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
    "3qWfGQdRNAeXXWy9QASkxDcfJjFSLA5e6AeCp7fwZ3ueYg4XDBEQ4mxW5dzrNPHP71ort8QChLy5QvwQwKVtg2Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ad1JqLwLEUwrSqdYuYFmfcq4nKfsGzGQGCYfd5R4hZ28JoVB79jtfXrXHFeoiLwCCSDNzc86CsdLiW2djX5QaQ9",
  "key1": "WKKuDYohe6ayBaqtwhJrQijFp1TWuW6mkbry5yeXWWWPy1T72n7rUcEdkobrYz4QgheXyr14pzSaokL9JpPKZBi",
  "key2": "3JLfau7VkqaNiMtpfunHPGbRNTvtN6E9sw5c2gxu1VW1yGtCcYQUNpijtduuwnzv5XehZWUX4d1cS9uK115rMtFe",
  "key3": "2iMNFhsMjpWic2TzYg54n1MiV9BHTwymv9pzoQY6Eas58guJ3FfJ3kMFE9KnBr9g7M3zvmhxSzYrZHjJMFjoVXkd",
  "key4": "4BJ2if7yHBVt5TEA25LfaDf5o4pnA3afu3oPcN8Gthi62zU6ZMyYawMbcv8DHZV4g2WbwQa8rREwQEkY8n8D81bh",
  "key5": "5Z2QWiZmvtawZaaAxDGz7QR2rgbK28GaH3QGFxUgjLt5iRdBw4V75iqEAEt79cSP3F1ioArg1eHeVZfFYUsqZab3",
  "key6": "5buMjJWdXwvLTksbG8cASH1cVET882B3huqkFE8Si6217tv31kxeJ2HGkLUk6ZxZ5jwWNmmk4JjLhuBDTwrStn5X",
  "key7": "SDe4BJcydPWqsLf6YEX57FmvDVKAg3PCMtEAr512rGYWEWq8mBe47ePfvJCaPUm2exKwjXUofuGYznWXZLuwtXD",
  "key8": "5G68pwwVFJeJMAKo7KVYKeiCEB7PwAYqrWHeULbnVpLCBrgWiqUvctSpzEJSMzWrDYqkGCh4hLV11sp5fkNHhD5r",
  "key9": "3vrPmmyQKX6r1yRSSRHQX43mmpqEYLSWvotvFEhNA5GxHxoybZLCmHPA1n12X81JzPHvGhjcBQUF3NB8rmd1anNC",
  "key10": "3LVGES2GpzJRMJsJUZQpnDUMDzzZhwJ3dnUYGG8jXGGNQGCqDBfP59EWmk95pCXXP6CjnYoXa6VhRtFT4BefiPA1",
  "key11": "3xSrMqgBLytZ5xP1nWR1n1i3dMXBH8HU4VZyQYUspvNpfx6CUcVj23xMTLbaXPftKfTdR6oT85wKigDopNhK2pdT",
  "key12": "3THpKU8vXneVa9SpPhBFzcho9QYAAaZjvbqEytPJDnJjLtD97U7ydSgAoF1t7hsYfgPMhWyzqV3G4ZSuAcmKWA3G",
  "key13": "pJxU4ujLsHX1EcfJviN9J5cE3b6PqDdNnFmye1GK9MMX3RTvktSvQjH3tJSyX8NbooiaM6u1ukfR1BEwP8ZcbEE",
  "key14": "3ZyDbn1rSPnGi8aDDt9xj6gNe6jBr57UTot4ZmueWFuGahrJHsjWZTz76GcS2YdZfLzUK22MxqRnPxFH2AufPaTU",
  "key15": "2wPZ83rsweDCNte8AgTnDBKzhco9hWPH9bNSz1jARdd4A3Am52gjTQhYUyzZDDcp85mUR4ib7FXv7ZWLK9kz2Jh9",
  "key16": "3nzHkU98TdR62yDbEfy9x25mUNqQKXkv9aZR4xc5xvN9ET1VCx1J2uZpJANrWxDnMixv3QazKx6GoPmd7xJVWcvW",
  "key17": "43MCFzNP6efth3Mruj2d1YPjAzXkou17dbG8E36hw5AfbU8zYRuAzjnxK3asuUZ9YLwdtCU3PMoTQg3s4FgAXRVD",
  "key18": "3C78yhENDZ2TD9TfiRyTqnd5pBfYANKTMfbiLLv4ZRFAcdnx3zbksw767XRXH3Z7Hz5j2ccZ8xHpHUXo2romH9vp",
  "key19": "3LGgwh9PUPULp8veGKjn9EbfdLYRhzYn7VoTQTbNTb4mNCu6wUHtgkod66HSRqdKrZrjAuth8hAGfHuCVWvzsS1i",
  "key20": "bJUmY4F2MXkHnCKJ8QbJdn2D2MUNK4ttRfGbq9YqsHVnApDszEDkC8YQQzcVKL6p5sq2dUqLBxbQdwhdwAULYrh",
  "key21": "5r4yVQRRpn2AXGadBQRK4mbUqXHXYc1gikAZLh5FYEtcExTuVxwv3eLoLRsufzbwhcaaLSfB5pkPGsomHKzNRkGL",
  "key22": "4PY217mRAvLZiynsQGzRmC9eDVAidJHjDKkvCT98h5S7G2zCnCuk15BEy3Ntk5Y5N53qkNYzegJvgxT5FhxcxgF8",
  "key23": "5o28uF5qu3VZ8tRgffif86sodv8pr5JXmdcuQApbezWhCWoUtgXYp6yg5SMrqYchJpdXmcKHTYT9ZmeRHkaYfMyg",
  "key24": "yy7RLdwqtYTEB1htQvmw8jtwHjhpidDo6B2VYYqZR5PFSNW3p5PCTT1LyfTTu1JCz4jmsfagtBf2g7mvfasbS15",
  "key25": "4gR9HksiUQQcnpTAecbJs2zvQmjPtr9ctZUstAr3odwFfMXiUxZcfoi2tqVNCuuQdZcUFVaTjmwTVN6LV4biu1WH",
  "key26": "M9BdyBK4uZ6ad9M4Tp3HqUoZAE4GbELPkSp5dVDQwp67eBWwvnbHdwRajp7gJjBQohWCxHRtjxyvyWeVyVVTkoQ",
  "key27": "65qWta7WMZBqPG8mSDKftefNUK7DyLz7ZATD1Jho2CtfRPYsdTvaPFuEDPnLw4EFVTeXvouk9c6ErPWnBLmJgjxB",
  "key28": "5ihta34X8QtAVCC94daBo99yKLyazExsXNodpRShUkuVhK4ZMzHwuYsUrnXKd8qa9xrwP5WApGxy7WHWgb8WpUBS",
  "key29": "2BfivXtubyVmzJ4WMy9U6DYzo91VFAREbN2UYNGkJSYmDGCNTDpmbPM66CdponcKzE4wmJKozu5nk3SoiNWj6Uvw",
  "key30": "3RvLmCqRf4L9RrMKfHH25iJtwNUq7FmHQxUZ6h85WgCpLgkLc3YEaM6Hn2xyb9AfSpWo52doJgLfdxBJez9npPwW",
  "key31": "3Z1CdVNdMf1tVXJcsK57MEiRHyxD7HbSJLCGWsbezHWwsBLDBiHXdj4JngqbyrUiegz7qSeqRFzm6xW28a1JezLD",
  "key32": "rNRstb5vgnJCXVMtTxyFr9TYeg1WXnQTWi5LUoDwA8n4J1YH7CvpWBxiFzxaJfKRBAvn4pjjg6NjurJeqE3dfkY",
  "key33": "3pHZiu9CkPZynGH9dzoraMyTy6KUVugVoSqmkPKvh6QYzeBCxqKS2CQfyRJiQQVyhNraxb1RWPPsGU78TBijApBF",
  "key34": "2DevRvTCjYYRF429r7MM7KXQkqVSnrMWakPKydboTrNV9TsJPr7eQL1LFRzFUzGDp6NuVjqviBvo5nRwEFLBoW9u",
  "key35": "oikBnk2GGgyfkN2pDv5Rk5ajkwQD6ydFJR3R16ZPjnF4EdDRyGhD4zCNLBZsbC6YDg18BUQNtXdmwmeM4EdE4jT",
  "key36": "3iYuokfWqHkgEsAo5CnzeeyPXk9KTfkjt8jfLHUnc9dNZ2yk26iW6hPT2FERSUHunSrr3NYhfK6ErA7sAChvTqSr",
  "key37": "4gP6FMRvLRutk41tCYumeC5v1J6p4iuBXv7u2iwoJksm7G9PGdgmgFQ53Pza4jteyehdbaVzN7HQsEJhAuKJYuvf",
  "key38": "4JoGVmQG1SKCWkfgS23AYgTH7FRuSiMzBaV4EarCBRQEcwHsojNVDp31kNP1onN45tNE3jPuj7D19zjNnzZXET6Y",
  "key39": "643xDWQZYLsvPGTA5kkmvABNdP23pQWcAr77HnvAWN8VnW9YpqjaJTSf2CnzYmzEpSM3sVM3i9dPMzsaqRDwFkYa",
  "key40": "4wmomuLf1UAMT2GE471C2eFFR8bQ5a1yTHmqxnbh98zqSUcXFqABcZRErLgDGCdygwX92ZXjZ2piuXzMoXaf9Z15",
  "key41": "4vvFcQPpQv1oiENFqubvQ1reMhjmqSYuSRQHJkYSf6wmqKcDgCJvWR6UKhgRHmhDpmvUaMwG3qAf82kDhReHDcsd",
  "key42": "4MuoVMLs77x8DrP2Lxy9DVxW9iSkg3S6X5R7MhMMyHGH77YSPbjoDm2wf6dNiSFAzhnhTQb3UXXVbCfWuECSz8Ts",
  "key43": "PHvBAthXKDVp5VoJer6m3cr44tahRVjUumfbR2RGKhPtCPY4eeaXpnE3Tpf5X7Udp7XnEMGikcN5YGPtydDAkgt",
  "key44": "4v8q2PF6tieuvLQcFUEuxuBwBULZBJ55LPYidmmv2SFjrTBhNYiqJusjH39H6K8JtH49wWDUTm6rgTnfhRE9LGEE",
  "key45": "4UADeCcWGLsDbodytenzQGGUw3KDGTviDFK7BAZn1FFNQShHqRkyp4nBz89tnSpRm7XtYteU3PZUWPS2zPBvbKv",
  "key46": "3fwYMRrNefp766xUf193aJyMCXSwnaF5KGhNZLce7GyiRNju43HbyWzRSUY7byPaJu6q5cTZxT8CFa4uqWMvabpP"
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
