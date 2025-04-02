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
    "36eJonAoHqZSHAvQD95iGSfyUgG68xouYA26Tf8MDCTo8zjf4HGu9xr23weurQuARQ5h6HsFrL8k5Lo3vjsJZYCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HwjFZSWnHeCYKGEESUHEWrYp9PEQGWCHYVwdd9hL5NynQujYVHX8QpCvC1Z6ubc5TzEiFYw1Dxss1LuUMHWd5FD",
  "key1": "TpmapiMXCuw69CTcgACYTRkqebdj7nmNeqAgEVseox198FWMic8kTGAmjtzQJ5hMUhhuWcR4eot4PraE6rp5FVp",
  "key2": "5xXwRKj7TcHcczoiCbz4J9b64jzxSuHM973w9YgoXsudpJSd5JBrkcHy4nXjttifqsQEFRzTtbZf5SFkjdf83K3X",
  "key3": "56i8Bnz82ePHs5teoLVYXEdSZNAUaRsc2kmXNyBWXz76mKBmJxWVzoDXYcxnFZ3s71zpNpkRetmmzh2NZhyNHfKR",
  "key4": "5hEnKeU8Wc72WA8bhBfeFXETJ5J6J5fiadAxycQjkio3faeSpWLd8EW1nRuXcYsYMzvwNCZzjBVqNipeYEMtsFDb",
  "key5": "4yN3w8NHEVZErGX1QL8Mx9WChB1LYm1DLCsQdQ6qaTETtmnGegzyWGFu8kuN7kv2uvQ91SGQUnQA4w1N97YWNqgV",
  "key6": "3u4mQmGpGsbwLNhzDpyAXE7K3WExY6onVYv5qNUT98mQAMA8ucfoSrXCLSBUo6YPxHNR7EdFN1UtdioQNmPcNcN5",
  "key7": "2v1Dy9rv9Urv3HJ7qsHDLYcTPZdNj28DodK5KZAVfjEMXA1qonZK727iFi1YJDS9gRSkNUK4E3cm3ZbQpY9WQSKS",
  "key8": "4iUaTTyoYbYawbix98hrmPoJnL87gkf6jbfrkj2MwSwvTVo5tajQ6FbQAaJSqFfkKoZ9sYG23fbvpVrALaCqhjbe",
  "key9": "nsMjAEUHMZrWh77kSs3Hv55hHPXM7F2BvSiwr1p8CEni6gz5PFnyu7smCSheXYr8WC9w3bpNgj3vBA7ZtAHYifz",
  "key10": "5epKEdq4PPmeb6jML95qPsagdu2qSdCXLykZHFHDuWLEFQYNXvN1D92W5iXZXYyU22Wmi6GrxJ5T323J8B4xwVtQ",
  "key11": "2G1SoDijt9kKgCuoFZwQaYACKTHZ3QQG1KBCMhFbGJc8NGeuBV8MVbP4TS5KBrGxSeeAb7byMyTudzVrQ7cNJ7u5",
  "key12": "3KSacvwUgw2XgHLES2GS4474XiFvV5a3zn9HDGT1G1zsAFjGsaciEGif6Vp6S8LcTZW5MZmEMC4KMJF77GVDgf5u",
  "key13": "Qw9PegfdboVk4uMDKNCHtsffAyLMnme3NEq5sRucPupnbqMuBY5YxpnnHvcyKZkX88ToTVMV3WLWuyFbZ2Qmzfr",
  "key14": "4WHrsaSRkXzSztzz33M3bvWcRGDbjXm3F9dK3dDUBLYqH7RMi7akTwMjnrgdFAUWFM9CNHFsBsztn9htqqoUajPx",
  "key15": "2ZENFp9V6CeMMF4sZxXRd5wWXMmSCYrwh56U32EozhE7CJdB6PLPRNpJFnYYJW8FzZVM3hyyG67Bf9dcDkpaNDfb",
  "key16": "uvd16gX7D2UfzDGbPY2BQZsd5RBwPPZc3DTSBT1ZZXUVnJ6W7qENCdEsqPv7FpvuSbPHTvRdUfLMR4Rg3EvoC1g",
  "key17": "3DHvQxbYMtMWazWzpqgXAU4xgNSQT1c57PsaEBkjSSBkqQ5XKGsTqo214wg3C7vDzuTbxfWRCvKFhr4tiuW9muTU",
  "key18": "2r4rpEo7heDr1ynQRF4cS96VFvaZaxANmzPp5cMupSiX2qNAQKFubS8b2nkmDYALSr42LvZw3EVu5Geu24dgEAV6",
  "key19": "5USQKbHxSy4PbJHUFSzsdAxiaU7826VDkGZqHNVe9uRP9FPwKcUr2UiPMH45ZVEbcN1BfLk2JzrKpB5duAZAGbYt",
  "key20": "4tfzaDkdpNtZeAbFpRBS72SDfwaxVeL3f5hJ9r1uGCrSxZkwJmWAH1q9yv3QDHjMTkEenheJCDYyhgeb371Bjewy",
  "key21": "4bPdN62oH2XPNgiaeRS16z3xqZLc6JtNer8s4LXeWugUEh6i5gPkVzgxZtssWjbAuyhKPAhnbMPbrkiYntcLgSfE",
  "key22": "4UAprpoBzUgGQrczHbihXdEeQEGaeSEPUx51Md9gcFfk2m8QpgeagNeU6z9oXq9GrtNoHZNMAnyjaSA5cuJb1NPk",
  "key23": "4K2Mf6gKs1jAytuAPKhBaRN5aieJ5xysgCs6irKraEYTwUuZEeA3K5Acbg6dNGcReYSYvUPHhBtCHCzM3P135BfF",
  "key24": "5j5u746tesTJnkcmQ44b5YCVbY7zcM47e4qxr1NHQgj4xkDBFGzSdMsPMr5bhSc7NRHQshndiZDbmYZEsaBbHTB3",
  "key25": "3H4bhYst7L5Niw8TGneEPfBwwUnuQHxFwzXBqYq91jswX6fzJmoUWbfLbe7W7nNFNuBP8BieKug9ZZS3ftuMr5Wo",
  "key26": "4b5bcLDQBj5LvhHfgQ63AdsDaNQK6RwS2gkxpLXK4LspkF8LhcwnjQhA6muKjaK5Sri4TLz6P5cy85sHgNchtaum",
  "key27": "4xzydFPMmuycFcJ1d8SFqTrznuzQJq9rwX4rc6XukfvReKfGfzBivBYzyEwS4Jtsb95gmWV7YLTw5ehr2KadvWzw",
  "key28": "4DcDYT36d4TdoSLCGoLRMcgzNxt7JiETGMVtorR7pDWDhLBZDEP8zADm1oKMNsVpLNy1qzmF7vcUbzveLAegJ6mT",
  "key29": "btkChMDiBuwssgqvCktMpdFXCLijvKoLyFezxUCt8xdRACEeQLJU9N5BmDH7zhd7HD6MZYZdKYGfXDFz6sADUFB",
  "key30": "b8Eurm5f4iSCSg5VYGyxjehHfLnxsfmw6mWxmAMDDsR3hyhRuXbaFdWMMMYy3WtAE4vu5LNXVZeTK6yVpqS6XXj",
  "key31": "4veiEuADmRZ8YQ3R7HxeGxAWu1caMbX4WvHzgAiqECgxkYLGEMukxX9KUhzfKCFUSC2dBMzpheQBzeFHcJ1yFw3t",
  "key32": "2XaL8rVcitxQj6QjD11BgxvBj8SiUB973RNXFeNtn9gmjcG7yHVNDsX96XkWVnZQhNNCFf5e5LZ3NaTLFhrHeC55",
  "key33": "3kkBJVms77QrAvy7xvfqhoy6ZbasLjeZEH5gQeogyW6PaNiHErAf1kQUAkUQw1Hu3XZdjBHSDxeNXQWohHrxBJaE",
  "key34": "yr1jqiA4vBgkDoFD1bJb3Pm51xM5zyHdv1a837HEfntCPSJgdhaG3vmymECoHgRQU54snKD2nMDCqXsYEoctMxz",
  "key35": "5Vjqrs2hSbSumuWf44zafRQzswwK2gwrAz98wr1fcK2o1jiAzr6SEEfyybCosKj7pECuSX4ushbfqwNXx8wdvWer",
  "key36": "5bXdYWSL3cxudv9difjeR8cz6pZid8J6FPuq2tnHPuS8XshYkiDfVWbrzMoRyRGEVHoX4TfyQkYRWuF9rgJ5FFUX",
  "key37": "5bb6ooi3qTTWV6uTfM1L1dNo7GCi3fVKsMGgEBE2QvSXmJj392KrH5nyx9xrN8eTjxtiDQE8iuCXcT31DHn7Mwii",
  "key38": "CZjgqYzVXAJP1UjQWhgtDHjL1CeZqMTawgBjmHdj61JaXqeK2pHirzAqWkJCaB1W9a9BN6EzxiMBtCWr6D5F1r3",
  "key39": "2cs34vNB8mJXHLnsAnexdT64nPTfJdUkY8AR1b2DpumdupUH2FaVjTdxk5sN3gf97ntDGMMjPgqABHMRBQBtJdeA",
  "key40": "53yDSVGmzqewQDRtaQDGmA6QzVCBrjbQyR2YA25GFrXubsvQMJ594Mii9nwAyYUPe4BDwQ9LfbG2q3ENuwRhnqH7",
  "key41": "25sTzKFziBHer4fsmSKpfJfEsR3YVvVcji2VE2C2gmtYsfhFvse6qmCPUFfZKGZQaYuPdqi4n9yp32eKMUWSqsgW"
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
