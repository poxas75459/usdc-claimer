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
    "4Bu2C53uMAkj6Eiiihy1XHTkfZ5xvkGDE5dWwTkgb9X69scjdGo9YBUoW7ZcSfHBQmvGfAeCEW3cDnP7z6oxrUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWiJrM1JVjT6nwkEBymA6Y1dtcQ8uCT9tWuEccgmmmQwzHygvdrYoFne87b3FrYAooR8dpSetYoFy6qPHNZ3Qzd",
  "key1": "61bHnjzYd2fYEXPm1nAkyKyhymPb4eecrnWVhMZzLdYpwJ6ZaUTXte4ZnDzJ62u6ZFq4acMforWJyZaE5CcZDGFz",
  "key2": "tF2B9Xj6XnX496iAcUb99m6JgCWoWKjdCeyETxrQMz8ydEdcFSK96jn6WKz1cNTJmS2ZDxhFbX1jckdxzGzVouD",
  "key3": "5Ru7ukgvQMQHFEBqrEppmshFmRrmWi9q3aH2er62KcqEJbGmGiARiTfwLu5qZ3DRHyq5cEuG1ybsiX29aPP3rm4E",
  "key4": "2ZSgDirrTvgcPtpn8eMVteTd1yJ8ARz8maaRQuJYNhNvnX72bpNMSCRLJ9vt2b54PD7CFyBHn3WXJPekhg9XbRuN",
  "key5": "3WmPWZATqaSNxY2hkdjazevsMxKTXLfQv1KgB38qoFyVXCFJ8KRUEDzpEXdwp5AiGsdufjFkjX15yVrTapvaGaR5",
  "key6": "22n3cW7WmJ2s6Y18xw4EcR6NPxGtDetCLfrfqyhQjzx7GFCoF9Uf7MJZC8mvxy7WYznzWtTE8zCUP4UEo6J7usFJ",
  "key7": "5nnyAaRLoKbVx9gUTdka5xPPU71ofdZ9DayQsoRBJptjrHnyzdpMfksE589rHRXgwPTyYz5NYaALnnzQsvQPSiw2",
  "key8": "3fBGSva3tuSf2huXsx942kceCvYDpTq6STPdNFaRVYi4UzMyqeAxXMUhGKoNmUaMHd2GW6EcDUPGc7gyETefH8Ak",
  "key9": "5rNkUbw31gZ1Na5k6kcW7cc9wjy1MoVsJrPg1ACgGCaLZAeZDeds2B1K331NWQcRKQr78sKjxsnHGdzVFEzsL6qk",
  "key10": "3TEbrGNQDmDrPrLjSfzDV14Pe31m367Ca3vrLVmKa266rNpwTYBUTc49qix8vPkTJvHcU7kRitzR43Dch2AdVLDp",
  "key11": "5vnqfp5uDUtPNTEpDU2oYaq9ZNMeBT6FBPTv47yb7EXu2BorY3uef3q2rGM1D5gu5R9vj67Kpw3fkPuEwwyxRHHR",
  "key12": "3ZqPN1zF9k6em1C32LzYj3PL15K5rbouqPaEanao1RPFL8gayGxPXDtjbeRpi3Vd1m8oo4TnoWASGaCckm8XWTRu",
  "key13": "3vDQb38nETz8fuzRXBQXWjx1WbvFFpsUSuuCKsLaGfcbPDrPxX23TSWgL13k6UYFaoS2PwWLgHR68ZUxPfxcktcG",
  "key14": "248qnSg5fAztBdZhCZ1mvr8jdwzeWoaPRMj7Z2R85N7zFRDpiQVozZ7JSzNGWCS9yAkEDr819VK5GWvfNnrgD69X",
  "key15": "gqpSgifUt77Xmi87Nubf6dvGJf31JRGkSxHSui181mzDyStQwdjL6sReDoyC3SSvb12iP8ZJ8P1uFkepCTeWBdE",
  "key16": "3Gv2gP4kWJ1NETK9ySxNo5Fd6WfpJsAm3xQKdC14sFCnupSjAagyptFQJiCz1AN7EN1PxUTxeC2Z18vya4gjhSVy",
  "key17": "RQXiZ8FLfKgmFMq2RiUgyQkFefcukH1y2tQTmrmvnMwfGF4hGK6svz4FBtZxgaLQKstaCE6GrCC8K6yTaJso32F",
  "key18": "35Mj8txKwA5oqEAdpB72QGgfXmx9LuUz2aW1FdCFjQArePefHFR8wWjY7DNntChzwroAiVt3vDJ8q14dh1rt9zDQ",
  "key19": "5Lo22uLkG3rKVJqEEszJNwuPkJWW47sAyjjdSUvUY1S7YAW6xLVYdbbdXJGfibgzCywuygKwiHAz2MHt9hRtb4SR",
  "key20": "4MTA76zirt9n5ffK6Bo9kwzVkmwZuWQXuFh9WLWd6TJi4fAizzRMTS5SBqWt4ofAzUs94TZ3n7kVoFHeDoJoF9dZ",
  "key21": "hucLuua5XEA2fffgxHAAaneLmbuAS5XZpCyXY21q9d5tJpSuprdw4XB4RWe7n1i8gWazBBFg3WPKXjMatVCwGPp",
  "key22": "4fX2VYqtK7DjEGozWxSM7uqAwSAgTdGuhxeK9WvULQCfoEKuYPA2oGQ5aBkeixmb1X8fn7ffpyuhBCg8hvjRXH9A",
  "key23": "j6ZWmJrEhb8rsKYB6WvxQx6w8tY22jJk8z2URrzQQvVtYbA8qRfGBqizy7H12yGTrJMhiFyT2mSNL4w8xA49n9Q",
  "key24": "4EUimqN7EoscZQ3Fc8URr15sKfpUzyLiXM5APH5xp8snMv8hfPtAMyyeDVesKCb4xhi4pA4NJ2b9BtmwaXF3fW4f",
  "key25": "4Xih4QdDKAR16eoAx8rLVvvkdGhA8rQTec7DFcM4PuB9oEX5xuDc7ATztSQGjzxXbyU8yNAsUKv1UxwZnHgAFW41",
  "key26": "4qkGX79iqvn6C6ZNYy4JY1YDBZkX2QQRcnCnuSEi2yvTy7e3vVhcbo3K1CcPAWzVYoD24TPLs4WcNc7mgc1kS8ee",
  "key27": "65VfaEhN9BZnDfT37caebkAt3djNyzKGKVoJ4PNLAJNr3ManAthqHq3kjFqR9So7SE7vYJBFnWtENFKgS7BYCuCP",
  "key28": "2yQBVT896Dms3mgbDiKrc8CfcMCLqHFK6Ymdy6ja7eL9U8CKEnYhxvRS6TCpV3fJ3aZ5YGxGiERjhVmscrfpjnhj",
  "key29": "tbhePYxujjLyQm1ok1ggXFTof5yY2XM1dPVw9oHFu21npkrHW1jqcqoAd2fBrfpqa8hkmxcjkATMH594HXjUBwj",
  "key30": "3WEveBp6UgC7v5AUaLUT7xV2d9gf7T15jvy8J8efUYmK31LGETx5d8Vg9UKynJiwwck2sDFzkFbq6NwTiUYrT1QS",
  "key31": "4DXtCuD5koR8HwPfg7JX1Yo6xyhLpPpDS9VMsUuEi3SstGHjMgyLzETDYkwjF1NPitKQUuR7YgP2vTTjPEvdMBkH",
  "key32": "eMkZsc1SFWAi7bidMtjCgYqAqK2qP1r7qXBQsZu8BWiuxLJzPxiyHX9mpX3e82XzbLUye3gndoaJmJJfWKReyUb",
  "key33": "d4s3KaMyUzZwVDHNLe9FYDgBHm7nthQMEjhUM2sMfcDEyZpfUaoDX7wvjByhpoK8AvU4EwrpVw5BRKV5v2WwYTG",
  "key34": "5cRsYkh1nogADhLikUAfC7X2As2DKKP3MPL4AoX4Wvpq34AAEFvRCKbTDntujhzkkcATgs3qg1fe3hFZ23N8qBeP",
  "key35": "3KXLXbZPteP8vGbvqgY9gtWZDn4FKUVcqv7vwyw6hs8zogkV2eAEcsyBTHMKLWZ3BKJBgGWtsZeoSpFAFBKzLTug",
  "key36": "5iDr1ERmnacbAZhpD9iJK7Fn67DLeqmfJeZsQ7Sy9F2ub7LBojnBv9kE5S9VpdCRb7S7pHoKG8ntGSqJ1ce23wFq",
  "key37": "2ngnGjX38U7CyeXkcvwbDtAK5kMfAcXKECJswpHKzJjCGEQnETu88AfB46DkmS5G6uae144BNN2k4SdQrfn6tUZq",
  "key38": "3f8miV5RBgtZK1d8daCq5e7qT9Qmo1um2MAAeaC73ckFXJsWM4wdPRB1pgt7RseHWtD54kPCxUegSWXB7FfUirfV",
  "key39": "3M6CiqYsiK1jQ7EndRLJeHD6PcSVcmZNPKM3fDUMxxko55gpVtQVJXsQUZpdUvBpHTGY8mvTReCv8xnG8NusBPZq",
  "key40": "3tHPiAkkhhY9ptrkWC1kuZeq7RuuoFFz6uBkbu5a3Zu8HDdvpSv2LWmfMsuFGooa8BAAMeh8BVdvHCadii72RXt3",
  "key41": "5SAdPgg8UKUW45zqS8RwNKVfTaVhLBSckiTHM2Yevymdnd2DLnp5gQh2PsVR1EHDEKzWByDQeBNXux8Rm1D8rPp3",
  "key42": "4wrk4keSjejFvY3JhSwBiyiDgxWMCDKNQt3rX4aKMTjZhJiLZDoS4f38N7pcv1PYwvhqWWc5N9NwvDfcH8U5YoGP",
  "key43": "4tEeqjxvCqZjEQ7wn3GbHqHdUSJtH6SizmbctJ1pJX3zwNzqeW9k3RcJCLUDxoxZyRiaqng1TjRL7g5H5YZKggLY",
  "key44": "5ZB5AbxtrRj5gia4PFWibBS6c7JvXFg8FhpojdvrbABKfBYvNyGsQhQEYi3Wnc5WfrdPN5AmS3wzzaFo6oxbbrSn",
  "key45": "3zDUZ13fXU63NCxBBn3noVhsw8Uja7rFVqb6giNjb9Cw5ufmz9kZa9DNXsSD1nnSJbc9SveBHNtLQjuERWaxRf2V"
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
