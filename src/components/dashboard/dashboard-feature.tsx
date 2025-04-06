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
    "26fcnJY8juL5ve5ngowg2wg57LTyEkv76439d9suGCi5GpTXtYDyRHmqZHDsjbvv8z2RwAZJRwgMvR9nzWJjNYfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1hcizzZ4u5rYk8bzBpKoJvECBdb2phuRg1vYgJNDhvACFobdrppP7RJnt8LDVuypP4bTwAky1pYMtDprupiqJk",
  "key1": "3a2i7CDFEoQcVAqGoWh5vGsGC7yq9ZNWyxfvgo4Y2dWrkibSCLSW3GSwMhrxWvw3YXvVADVBnrn23QirEpTVrvpA",
  "key2": "63PVfxE8iV8RttfouDm4A6mC7PwGeuW16Usd7MyFqkdi8YDYnvZygkwS9qfi34nu5TB8CtMVsh9RyWra2GBSRQnP",
  "key3": "5foXrbLnmfQy3DKmfyU3pP2x4xjTojxFPEWCjrEV6rNpFmQ6TTmL4Fiv1KMKLc1vQjhjZemqbPs58mykL3N4PCSb",
  "key4": "2qyKCo8Mmt6Qmfk3x7uEELeGY173BCMojtQELoaS5gr3rLHGfMJeV5j8gksNNZuz3AtTatyT3LeoqTyfQbvkC4hR",
  "key5": "37ooaArSkt171pMULknqJMrHcma4s1CkTnxit7SuE1otkX5DKUcJqFBSFu6SVkuJ7jPyzQexWjgGeFn5uYeq5VdG",
  "key6": "3bgpQyahc2FKNDS9ZHFrbt95oE9Li5Nw4NnN5xLmjX6AvnDsGTkLpKwXaW2LpsgFWgvjqYofHRcXkFFVXnGPTBo8",
  "key7": "66ZC9vpCSfm3MR2idsyLqRVCmzW35rTQtvaDkM2KGHD188yev22pSnkTjJnXibjnD2wZyZ3J1dMjR7QJGeFMuskk",
  "key8": "67PWGE7x1MBYmk8uBDfQjuX36v2GZAEQuGfntQVs1ajEP6nAS5N6tDvdFG9hzrMJmfJagihCSjNBpGiyVh6JrRfP",
  "key9": "3VrhLDhaBsYuLZUMMnPkxSnd4DgssA9ZrPpWySGTr9uT1rdMyeFfhGnTQivnTop2CqxzfNCKXbXcxoTiDcLaBewX",
  "key10": "2x35BcKRRf4vSvGUigp3DaVyzfm4TMhKqrixotxTpQM1hrk8SqhV9iVC16MtcJ9MJBMvYeoMS2BHLnytShKknvz1",
  "key11": "55BcGw7BLh7gvJxxcBCH2Ata9QrhPyQAnX44GQQB9o6DpLgZAszXouEbB6c9b4bwQ5hgh26bxSrFKesii1B95TpP",
  "key12": "4hJXpCE2Xy3SEE4b35hmZCHUzcJPexCiRSBdSbXnBMrZ7DjjJmg2VTS7D3ndX446iLYVckby6qmFXQSmdqYwivYz",
  "key13": "5t5q6zTBYRFWsSKBMveuMWc65GbKU9tuS9C93AqdH9vb33ihFFbRMLfdCAzJbyD9F7hnJWRjZpzTHVxv7kRmiKHB",
  "key14": "67nbL5cEZekuQScukr4gFYmw5kHqCSSTNdFACpHyJiqWBSxnNyM2DCjQ9Xf4s7PxFx6PXd3SuTik5GiB3TDT2nsa",
  "key15": "5L4QusKR5ze5mXeZDbEoN2uha2UT8FWFxMMBKDbuabaZCBBgNduvS3pVcBiQ4TFhXiSLNiy5HwShyHWE5WWZ7kSq",
  "key16": "2nTZHFVd5J5xrWdSSMgnzLuST5sFrNpxyeK2E15yoC2z6c8JxYoWCdj5mb3Rs2VLBhrxNxnrz75ujv2brVKEbqJ6",
  "key17": "3uVHag2Wnd2j1UQMxz1ZypdAUoJzMV2hBY4RRzovDBYma5HPVGYxmFYAjokUSQF1CMeCLfcR6dFAn1mBJCn1VjSn",
  "key18": "3ev8PpF9pkeJSfmKjzavJGb1QW8hbnZYb9dNsgX5FxWJYZUufffmQL49jwsWYzXuLDC3FqXjLarAj4JWqRBbXPR6",
  "key19": "2J3Z5RWQfPDBkULwTx1M1bR4zGrZMYgNUAPZ2XKaM43Pj5F7eMsUexBaKFfBbH64Fa7F57Ey5BJM5jparQ4NF6P8",
  "key20": "3J7FhcX8YQoXeWG2XFVs4JAZDjQMGc3SqRJAH1wU4x2Fk463YssEtEkK1BPZApYCASNEyQBVB46PbevCjf1aS1qX",
  "key21": "4zWXW4WkyLPUJSrmQPzeWdEbsxeiFU9y86XzYXvtAD6MSHsBRFtetzTDAT4QUdf7amUUHkmrS3AarqY613Hm9VRc",
  "key22": "4cFedaHa79tfBvnHv2mGiVXMwDs7epXAUHVvHHeJEDtQthhCiUvr5B8mhWBbXNeLL399VAJrSGtZR9tatU9rRm98",
  "key23": "4u3MfyZiQBWMcbBcpjayDocfRfDhPQ1DztkPysa2jfKqMXrfP1x2tmwibgExmaMAZK4Gj3gn5D9xdku6zL4HoSXE",
  "key24": "GKetiWJX98KtZNYhAc9y4QabTJVsjFLeZPxTCp9UYbrZWcLJX8oZGM9WdtbXG8deE7bMLMUZxjuZHTJZmsxnQzz",
  "key25": "5v3G1mJjHbb85Ja8EmxjVtfWtkbetApvQfsupN518FY1bAz814ru6ihZqWzd9BTHCwdam1kuMPhB5zGCnmtxRmKr",
  "key26": "3oBoZre6SsgpCUsfJdfCRtPga1Av5p6FZyxv73zt9QfvakgtfwUJ9VwqpuMdCURaC5BZ5EoevXdeVtXqwKQxVA7s",
  "key27": "4ViNqvEjtsJTFaCqd3cGLLaDUjZ3T2HtEdtq31wbyVeKyUUYn2kbCyZ41dGE9xncmPtaeqr4UWwWc5gCSJG8R4H",
  "key28": "5kxtkUivQRuPfMT7RH8xcYj8C8jgpZQGsyrTUr92URyC4ogYYA3vZYViwaFMvMnJzN6qfjKiQy4v3vXtde3TKx3Z",
  "key29": "vDX67CpN8AqSRpzLsv81JJD4ELxoR1TuGCtuNpHCa3nQ46dHScTzFQ4vQkMbjWb6pSngeUAHSXBVjRE1rXMCtiT",
  "key30": "4e3AMVXz8HbZyXDQdxFQEsn1hM57HJAAYHJY2vwqTSNXTd6hzGa9DHJwdRrhQpSJLSbKbckzCGgZJtMG9bvJDTqv",
  "key31": "65dkSpXxooBFhKPcCm6cBeYAQrPn9Qz4ZcxuYpWaYpBFKRosNocvHM78B42Q1wVuh81yyeTfLtQZwfBA1GqtyeEL",
  "key32": "3dAn238to7axBsbfwa7o2gDiSBGnWD8rGQ4vV72rBtwf1mJdwPtZEUcqX8wmbj6Z2v3tzhkapbboG7wxrZ3enPcR",
  "key33": "5s2G1pQLjRgafSqsEqKHbpkABMiXHG3tsDoZnRPjKNo3YopC3dt19JYfmBGP4yrJUixctcUDb9zFdkZPWUjwyacu",
  "key34": "cVNZVGxD6KE5jkmhigqXHPDg1A4UFgWHZMwcHq6mDa4uRq2tEPu7eHkmUcJP2LMCurdGmUdaVQgcsAUjqpgSPRp",
  "key35": "2F6mxajXMkSeURZdgeZ2bG8W2KoQYnoWtv1TCGv6dXDBGBdcLtFwMndBxrZsCMaiDzz7mkKZDourc1eKRA3Wd9UB",
  "key36": "5bMM4ThLdTHcVK69kaGAsA21CNGhX5DMZ28oR1D71gowaEPuB76yFF4bKK7QTkaC5a9RF4rWr98F5s9LfsJornQF",
  "key37": "BTnYSuda7xAcaW9qrhdoJpzyUdnGWXyuyYPNTVLKwTXuP9zSuTmW1VecpNnDqoaDCtkFw7fWRbpXs2HGNaJPZ2T",
  "key38": "2VuzngQE9XjMpRjds8FmJTxwtqdMHfPXanShNnXiuKspmuPqZphoSpzjrAouwfGXsHmcGYYUC484fvmMcd6D3P3E",
  "key39": "66GzrmgxuNvNubSBAhyyvLisv35ackoebe9v7MXdjHeKVLZmQVQepbbUDuVF2LH6LRYZnBrMa3nQdLhj2rqSP2Gn"
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
