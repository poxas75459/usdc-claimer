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
    "64vJUZFom72RBd5HCqR1WkfeUtN5ZWPADbWrS74WSYhs5LCogTSWeYoLcZSuF13d7bhVcMjnbLoi49YYcBay12SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wXWXQUqGfQT87eke1QAXMze9nX68xTVsqNKeetcHAwjvKu21Bmfo4F9VCkAVxp5SyboDqpB8ZC8TymQ27RS4ziM",
  "key1": "4Sq7zCpv1Tk5j8LsS4RbW9jNPwqhLvazGnmHutyBS4ZthBM2SiZaU61Bv6rXRuNMxs6XbAbHxwyAHWJdqcxeifyk",
  "key2": "5ugYKgVKmMav14DbvUfYHVcruEA8MDV37nRD6ntzd6yWVW41XneBAGXqcRt9SiucMosV9PsczEFP6FM4Cfz5MfSM",
  "key3": "3gQ51JDzj76YfePyuZPvVCfEax3Gg4bcQGwndscGreiNGGy9zVWr5vmG26SScj63Kw4nPvZQGNemTprofzaT8Q9s",
  "key4": "2DX3wSukdGcLmUCPp5G9yGmEoTmgoVXparXenU2fs5qbocCeTHHHEGYaHY1AvbPvm9PpRe9FVZ5oXSFTD1fR68vP",
  "key5": "2gWRjMA4xfxoSzyJ37WKsBBEBMy5UEQQJS2riHpgpt7gyfbKvgozkz1LiMj4VVGx3Y9HayCX7KU48GDPDU9N3Yrf",
  "key6": "2Dvorirsq8R88EhLpQRxWY5g3Ls4tFraEmGtsumDAnQeSsh9sjDEx1LXZkdzULfMxxJVY3YxRbmckLRfVBSKv7dN",
  "key7": "qpYcXYYtcdjstdPNr6eNohuRzgx4nDC5iCEoTxTGydrhHXdtdmiRuBY9mHh4DyKLArWoRXVDP5QjNg8p5eBXT52",
  "key8": "2D1VNxMENGhAGLdk1yp9HTsrhRCCURkFTADLUvPGeqxsYGncs529L4qV6rTF7R5Z5y1SgXY8B5MX5oSkpZrz8kbZ",
  "key9": "Lgw3A6DLd5MxcQUr6hfF8NeWhnPNMDosh3kifgYRg5wBHEwy1HzTeYeZKhoisAbEmbghWiVvLnT9szK8vDMuEp8",
  "key10": "pBUQrzvCg9rJD16mrfBSMf8F3X1pytV6Wr2gePKs9h9aS29AsNyoVSmEZ6Cv7N3ZH6AkuZJR1ZzJw8d91mFxuN4",
  "key11": "5Nq6dk2P9ZYeAQhg9V5xmgTUe9G1ypqwcRVTRggTVDoXiZsrUv33C7anP8y8StY6wuRqNuCTUCGMwHciKKW8iBhT",
  "key12": "3w7NK8YjCP9x9T1FqSgBnKjpSMsHhKa9PkdnqmU6BNhYkjkBSJYXEGc41aPmEYcTbSsMfReHUGKd7vUHu1CdA7Sn",
  "key13": "3kTuLE74vRoyJP8KVMosqoZnm3uhHnadPvcJ72sTsgTJ3fRfx3468dvuDLpGyTQyn8TYWCAqtU6zkmWaGJnmVzqs",
  "key14": "2yudjsdbGKWdaymuASbcFYtQ6CMA7YZoEmp8y9zSu4UbyXQsZHGujXtYUqd2jTFJNaCMadV14i3H47ZSpbvJCrvG",
  "key15": "2jARPpno6S3dDzx7csYKD63omeyApBFEzK23DWdjJx4QVoGizq9cFGwmSBV8V3zwF9tSovcgB2MvYFxDkWRCRMZd",
  "key16": "2ooVx9Fif8sNnku8VmBbPKUuj7b8zsMej6oJuGBoX5ZSbwcQeFX6BNTqRHLhywtPqNK4QVup2Y4Q1Eqq88WAKtcB",
  "key17": "FcECFaLDk9NGUe7hGwWNZvKXtQtEpzfpEdza5gFv47ZPmCcyiwD2zxmR7FiakQ3ek312HSMerwwRV36KrUuPHxj",
  "key18": "2vWpz6Tb2HeuZmcxtQ48wTXzWKGRrigkBqFGqYTSAPimhjDNG29skVNSAxo3dPjsw9Z4otnsb8HAuGsMHH1Ljbfh",
  "key19": "UJVRjBnKa7CwwY1WCpR27DqTtAabZU6u5qJ2rDhirB73rxzWtQTHdyyqVyhupJK5Z2jh6eJT7yLir15xnncDfCU",
  "key20": "5kNPZTF3kZML3TMvpg7RWrcC1d3Gi1QQampoRzWXurEMyJves5iMRK6bfuV2TeNF3zQjoFnLoW4WKZ9WWuLvaJHC",
  "key21": "56QY4x7UAMWZPDRaAu2odwL6co18biSNfN4KEYWc1z2Ri8sVicVH5fi5as2ZNz82hJquZwXKiuYYi77kNYtoCe5n",
  "key22": "5is29C4aadHU1hYqX2UHWyDZohAszBmvqEkpcZVG1MZT6rPBYQ1psdirp4RqdDCXKp3JAShMiruFLWu5ga6LNf9Z",
  "key23": "WbeKmbNxCss3SBzpGWFQ6t5YLf8ARsvWk534Pzbuobt5YdgJWvozHkhEwViu3HKCyWh56xA11z8M5JQgMm7GmbL",
  "key24": "2mk9aufKKQWPnn4GvDJax2ripy44r9FrWuHoREFazNXK8PV8kkp95GcvLxJDjEBhe6ceTZtYumnjqU7ndA8vJdrS",
  "key25": "59Bd3oEZpf13PocTthuC7j1sZFuG8twf1v9T8vQ8vGRP2RHGPRyZ62yXuPUBags6opt5WxGQGHwvL5MK9eLmfDpv",
  "key26": "2yCw5DGRpLuDunktVVk4fJan8R6PRAp1jZMKNmxMTSrDJqyy9xyt9F2Pkpvt428xgP8FUQa2d9gWmk1tk1MqxLFf",
  "key27": "im5PoKKorjbuFhFqJtwJtbjcw2tmpUpRn9Qz1HYSkE7LyZPEDWY8zCG6rECZJPCTT2pQzQmpfmSWAk5y7j414yy",
  "key28": "4RYVV4eLzgRYsLo2dFvMaFhEZZFgVkSd9qjgHo59oxKMTxYSY3mQpvZQJdw9CedCTaFuVit4DK9Sxme5P8MzG8vz",
  "key29": "2aSMZbbCWpBhGnopFBSzJ2TMs1YoqgdPAAvVdRKnGBXPGja5xnKTFFf4Hd6tuYbZ9vVA2pwsZPNAHBU4buejidZ1",
  "key30": "5DzRg2HQwFYekzcEQKa9s9d4F3ijPrNroxuVkf4sGK58iwR2vUn5VDtmEcJUbogRbM9xELaowrFtRFRfjH4Bg9Ew",
  "key31": "55V2HKmrCieymjY8QGzZTSxkcYim8YxxZW7HUaxRQu45rmTjmnGZgWktvHLNear5Jf7fJCkMTp2eoWh6jpL7x5oA",
  "key32": "T8EWgTrhivc9D3WVvRToa24mqvJwinQR1GbdiQ7jSkR6eJhyUAbhZPYyVhJoGUqaEF95c2dV6z44SWmvs3zZa94",
  "key33": "cjxsYhnjN6HQgwxG9zzBkgkJFSxhoKSd23mi5yLnM1HEnDbRmAC5LbYJXZQe5nZZmaxRXVz2oPkBQWjcS78metr",
  "key34": "5C9Ju6EY8ajQBMP6dRyriQ5nHBRYAzKXUhsxSzCLmnkrnZrAiriwZEpdZWehcBon7iX5N62j1xK4T75XhfgKy4RE"
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
