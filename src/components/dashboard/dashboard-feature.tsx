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
    "3nsS6uywy9UbrPCCZywFDV79fVatMTw4JKTN9zAPuUntwM1cWK4FS6c98McnZWgN1Mm19JjSE8CGh82qYV2h8C1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwQ3sKp7Hi5KVXdP7R9af345NbqjLPcoDYF8Xw944NqjBNYqcmpz4LeR8ppBSsZRQbLpr2YxHfcqFtsMKtFiyBn",
  "key1": "4PhaL7dbNFvaCvFoTyS9QvE4k7qYGS2Tzg9XJd4eNCVGcSTn6hxf2sPUw47BWYtWkd67EKr4AKg9L5Xz8grw6n8S",
  "key2": "btxC5VJhh5wAMVD8KNJwL1uNstZ87gWo2wmXPhyRrmYdg2HKfEx6nqwAsEqRVcHnNBdmMcGxaTbBtS9qmgfzYcN",
  "key3": "5iWW4BQGegUQNd3rjVv9GKKjNWPvaJXrBXSvLcWc1LhQsMDq1SsA6KLTnAksf4zZU1pu7uNt8eFpLfsbabJ3DNhc",
  "key4": "5UiKb8WAv3aBf5DA2pYvVn8AASjErrw6Mtt8XvNX8TyhSD1dK4hy4F2sBKR14mg2AbT7sN2R67NNASDGPX7xjaFr",
  "key5": "5xHJiV1H92BEZ3GBVrNfx7HfeVuQj7L7J6aFvMV9EHceKcf54rvgktVwbwy8Bfi9fo2swDgY52REtHgrg1cV1WiW",
  "key6": "3ynWCBWtE35LScpNukcVxGUFGkjowgZzZcFmHDFzLnqu4HPcikMfnBc4dsSpV66bucBxr5Dm2PGsBpndcBCzdFEi",
  "key7": "24s2FvnPhpKBA228Nj2HxV1VgtYLNAPmH6xN23Xx4wJBPurmjSiyhMYNBcd275H6xnjv5BBeFFuEXoSK8Jewz4ur",
  "key8": "4kFuYcGBjRuua7Mbnzcjk1fUVLW6NMCo1D8n5B8SzcgXCcM3iCDt6Ta3cCaDFZEsdmbXa6Wb9YkQLgGjPXbURnJp",
  "key9": "5dPVK9FVxtqzL4FxVE1cEig6BRCH8aJnx3J3wf4FmgCysUCerKAvPKdvPrVXW1ekPdNHK1CaH3Z7KHNtw9QoxmnV",
  "key10": "2gD347BZ8ywrVU1AzaMPMAd65m9QWWxL4hNm97kynLFumwM3DFCHFYHEGK87hBVvCzwUkgSwz2uRaNTowduTTxa",
  "key11": "3HTf75LZ2EVcjtYPPHnExFuJocJ2pbY4M6ju6bUjVnGSkYcUUxjDcoqXJjV6ouWWuzSrf4LwF5u6SDgHiFtKV7Ru",
  "key12": "afacQETLYBTMFiSJ1vpLZiZZQbG92pfbZdLCAqSfDGzcd6qjFx1jbC53AvBRBjtoBBtR5UBtRPNtcuoSjYT2Mpm",
  "key13": "3c9T89qhDUKbbmB1Z3Ed334BmGGbsYTvpjLiV2qayrnX1sbNivk6P6nRvxoArritXHsw4LJ21Bkbgrv3SfhXqNJW",
  "key14": "4HjAFF59eQExXGJmJFAQAXTUQkRdsGCb1egqrtNzcp5Cx6rchBK8qLGfP9ERCVUYbayiryzUjn1S9gyUcEvFE7Sd",
  "key15": "3YGZ6NoWk8ZxgQVc2W6VSiDhKyQod7fvEsnBnywguTHFcmqoEpVjfGhPRuaP6QLazoNGs41PnaPCYd34gQ2o73Fi",
  "key16": "2XB6SUeaEJcoqv8KNru4KQXqGPNFz74xtXXn27RHch9xXPGLuNgD831JJW3jEHSn9hUb9oYojpAWNygQW4NVHJ99",
  "key17": "4vGASdRvLpRkR2JpAMDDumoto8PZsxR6wTMW6x1QzqFbnUfYhTgfR77pZa3txEcuH7E8c4yqYyZWdMZrcJhJ5Sjj",
  "key18": "cVk36WRFZcWZSTZasE4S2zyq6oqjoS473H2TjTjVwMiPeLQ8o7bqyKJ8SENqdGjq828VidtYfgRsnZ91Bm6sVu2",
  "key19": "5pH1sx1F7PmqyCMWtrHaKtoHokM9sEaYSEy2CTvHNbNuCbx2iF7cXFg6xsviunpETPZgg74mtR4BK7kfYoQjaBvA",
  "key20": "5nGQXRShSsQwdwucxBq9jBKsboKaswLuZ7mru2ecQV8zXy6XjeW4WPTiRsYV3kVu1Ucj46CGiFaSSF8CVBTR7bD5",
  "key21": "2BRczuhsU3Dy66nsKVXNCGvSUBs7XMnVyiH3kbKi14EKrt5bDZwJqxGdLH8ntMNmnH6huKUXNRTNkN28vANnQZDb",
  "key22": "22ts3LYncG5nZ1BRWrKau7CUyGUxFCdYY6g71U48W5bry7Fv5xsLodAVGQMsp12QG8SuTZgCENSkr4TcRiJgPPbc",
  "key23": "4dxwwd5AKVpJcgw6cvW9vYu55javUhtKaHKux3hPpEzGmhdh4cK4K5o22HwBTwFYvjqxLh5JdfRWniz2XBGoqarG",
  "key24": "2K1RF2nt13WD5mBi8puDcTmVpbBMSVdMG5PuzNEUDTLvKRWFDcqXywbqTgPHoQSGHXdtv416X83w3Z6TpmT4igTZ",
  "key25": "3Wc5C6ii6bVZcWTxSXZgHaMCy6hakDwkRQqcYNGaUG9DS94HaVuduuRarVkQpht13sPDwNW4YUGSm9z5Vs4u7fgF",
  "key26": "2E1PTWjw3ipJSCtuDhCG5HTckEGbMBJCjrpjZDRdhRnhm35rX4vHwKRMNVSVS7ckhpTbgfN5vxjSHRHAwFHPmq51",
  "key27": "5s9nDPowFzqX4s4DwQy3nFNTaxPgp4crwds8RWWP58Rv3d86BwnSKxkHrU9BgKJ7v9fS5fm7LAxRsf863gSfSbx9",
  "key28": "5ShoT52dDPQ5DuCH4fJLPPRrw6qqPeNgkD8cXszJ7LUuFjrktm79XQrSFyWso9bZjDmhAKjWAs8YZ2Fz9rW25Rdr",
  "key29": "4cNxYgGEhs69EDvtCKxrC8Kcyed6fyPSda6DDqGnjcLZTETLrXk4as2qgvcYmoESEZ7nFXmBn6Z6QTmC2KiW9CHm",
  "key30": "5YQe6UPbVwkoievrLFxjS6RyRdnpq2Pz9qtVjU7vJjNnF2uZjFebxeQftf4hfhghb8Z5nR7GFFUpgKK8GC4caE4b",
  "key31": "3v6QmnP6MpGRC4UkD8Z2UGhM7juQphuFPbt5ww3M4iBkbKXrv1tvkdHrc3SzrntqVBHkqiNHZKDd1JNQm1d1LsqS",
  "key32": "o9eWvLHrSDk9SSi3AgtFVi9DoDWFjxCWupnSTt6xf2RdqdqqTHnmcSmpFE36dcSJBeTRAE2BAiurw4XuxiN8doj",
  "key33": "3aDF1RoiLHgk1Wz9nqA1MXojpqM68Fw3S7Wj28mB5cDVcf6gJ6qK8FFZpnhd5CKymcDPKeH4BXb8T2wvk7j3zcs9",
  "key34": "3uLHKdwDK2LKdht22MP69Kx7iraDaPtaai4E7U3RoP3pncgQNtb9bWdVEDgodimqQwLLTry4V9pqisk9D4wwyrXE",
  "key35": "3hCNiKtfhPynAKPWzH8CdecV77CeuB4unDsRa2HhseJ3uCNEQ4kYyXAQtPH6bQLccEWDLcojrK663Gagn2RbLWR9",
  "key36": "Wp9iYVULrfhDukY4HaKitX1aiasZN383nD1K9TFbaujVg1c1piyRrcGesMTmFo7wFcQfFexL9DfMkKds97uQnUX",
  "key37": "2hpWnMfq8mgirdbzq68fP5C1kTRNdZ7cnbEExY9ktWSstREVSYmoCUfq9sxzW5XUQSqKFNUL67c4YMzyeLvBA2XH",
  "key38": "5P7qZcmVfPiT9qUGxdkyBGSXDyxvd5VxfikuBvmVLqXzCVhm6HmCz8s2wTGM5Wf6N7QMCuTJjkqDCwGDUWJfHsj7"
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
