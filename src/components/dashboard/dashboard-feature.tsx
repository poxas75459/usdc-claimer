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
    "3Hfr314snBEo1c179SFfoXAsSm4adjr1qaonzfHEAgYKXfZoRJogFcNbnAuHuuixtLCAF48fkjQxTem2wLy28xpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMGXDY5YMV9vo3wqcVfuRCvpLB6id1qyoC3HNYzXawhk2McCJJfkJjzEZTehYW6ZAEK6tdYA5DYar5ZhwqkSqh3",
  "key1": "5f5Ki3knVByq2qFk8hZZZUNEKKojX1Wkn4pGyjJw8CsePs9a2eMBBehtkjXs6ezgVVcG51RW5dFvXrCGRsP8N4sc",
  "key2": "28tE3wwEnZZQjVNhtJ7bipyiBaLg5SwojYigNANyLkD1dwmnyZvghLTtzqmhk8MkJbKs9HnLHayXBiEGEK6puLGY",
  "key3": "4FEUfR13GkhSfJceW6yCChQy6jr8Jyr1DjjRLzRtComEnMeZRxeLedPWoELUPJLAtnDt3YS7ZeV4i3CarfBSgpmX",
  "key4": "4wtzpvXC5trNHPHPJq6GtBXpTTSBs4waVSjzGx44UPPxJrW7nbTUfjgwVVKHjMYcsoZMQyzFbzTBJWAjevy2m8tv",
  "key5": "3fevgnHphkyzDjEfxYxPPMRcXLqjXmqT1kt8qunkMCTidDHHkezHvdbVoESamEcGie2q9KQtpYfNoPtus8YQGNZ5",
  "key6": "2caGYYxNJAxGRez6v3bj8j26CiH3Z6XbxgbTxuT2nXkcfgcNnGhCipn3xcfPaNUhUaHzRZ3x8zrSEktT3a6NCs3J",
  "key7": "2G7a3Zd7CAHJELEPZ9jq1b7TcPVU68LsfLfvPRThNNpTABQtgmQ9X9L2EwfbMxukSk72yHEqzLWBQEfeA2yewVHg",
  "key8": "4cytQnATYFKM9qrDbzsKrXBcQ3Bm8pHpwDp2SHevhyzjTQh5fNHkQh526QPpt5uSK4Q76UCGAdgyU5umayZN2r5X",
  "key9": "5GvkM6ESc5jNT6eoUf1x5UXrZjGANrnR9XeXhJcaPVAFHZX8fb1W44DTQ82eeNbKCvj8o8yRbwbM2QVVRMnvm6D1",
  "key10": "44hMWJFu92wbmxDbPAzzEEGTcpa1eVBr9mDRzk2dssNkaekpaDQDjQrSfZ5aj9hmfBMF1CSc6F9yzpKw2tBmBK5d",
  "key11": "2BNKRH3x8ZgAfYa3V5UXvsbUcn21qUMkRzwKqNH6Z1PY4HABxHqMgYyxFfXqDBpLmrJJ3ZrPeHAYVx9PpLTKtAbE",
  "key12": "3qX1XaJRmiWZv1HJYgCLSDtJbAwfniNeUN8MK8jBfi2F4HYirsbWy8BDKkKt5JbzJ12mkmspkui4FjwhxYnRx1pn",
  "key13": "4zE39FeewrSu4tN3w25PgqvYcUssGmYmzUJaeTKekS7MjYAxahPutSxrQTGQxtGkAG9fofqoGNV4ZC1opuJE1UgC",
  "key14": "4Fv85Rm6NxfmQhN9KnGVY6K9SQDwVzbMjHgN2FKrEzW9scs7m2KoSJfTaDtCUnW4M8mGnpnbCHYmibstnGN5HkBz",
  "key15": "2sheYQYE8rTKZYAvW2XCtAWUsmXkPVTJJsPtBtKPTSXvbQXsemYkS5hHmLzZU7v9dHmzVrswVXkMU7Me2CMg2aLs",
  "key16": "4To5pp38A1VVCKQG9WGDnKBiayqGy4AFjyf2WbiFiLzVGs5zY3Qj7ZrFC3PgtR9AWjLVVDiejBYAfvVvCRntuQE5",
  "key17": "5rqCRHjC8y5i5WJeqaGgq782X4CKtq4R7QNfXMXDauhDraCqMAHNtzSCNpxBdQwSb4Qk9rmWxSsjWXPdmVz7SN4N",
  "key18": "4z25K7DY5xZ8URyzNvHMp8Q5gqun4YSi8mJxqhntGmSHCeHwPuUjR1AoVvwmA9NXWd9HKp5jxB2Pe9BcxZWBzy1v",
  "key19": "iAW5rEXukMLB74NWtq9GPoe4VNHFN2n3aCvGAcBsyJF4Nrg2DWwbD1mVeuWpMc1HSApfVf595V1bAn4ZHtvWu8w",
  "key20": "KMMr3gvHzwQTVMhWZ6KQfk2fcsJ1KHxqcqXwUFpzciPiXGckyid3zF4KZjDhEaZbWoT9KnQ3kkKeV1iSG4636rd",
  "key21": "3GdkWaBX4SUuGAJJMNqqa1U7U65B7Ne3N43j1br2ubHsXAc9C2x4SQkhjh2bNiLwQ69QY6iqxPmAsYGkxN27xpJM",
  "key22": "4WRiA8Cqfcr2pFfFspSUhwBdsFhyJ1bu6fGVUNgrLPyJpBmxuEKkjwbfjC1sNeBwaVxZgeGQUS1fwEGRBvCSjBbe",
  "key23": "5eHTM2L8ySEuizWZXKMS6UCJ7wwQ3LHBGct568yu2SZg2YHPLcBsfyPQzd6aGqSLuo1zacQ8vgaf5PDqGVoxT1hN",
  "key24": "bMaLnUoPvcTijrBpZG3DCkScSMk123Q9pugG9Wq4RSUnZicLaoWzrSnrsiiiWkVV515wBrLjzjvBSDtADXbvh1S",
  "key25": "62wZf6s5UrEHzE44kzpNnP5R5cuy1ADhWUKV4UFsMma2b1PJRUus9BvG3x5uC7yeA9tKcTUhLGYjmKjWwEwxp5YS",
  "key26": "2tscerdik6QFq8DnGqfhiWDxQpgaprmZcFXvFFjzx7B46AP5WHoTD2HAtBaghVDSE7it5Cr1cPaX6tnHmfZdK4tk",
  "key27": "3MyME8A8TbyKpm7Lk5AUxiNGV8DhfQzNkwebJNZp9sUNFjnFXKc9j8WDphrGEaZx18xiucPwhWkCj7qZM6kVazua",
  "key28": "5awtC5Spz7YqE3jAZq9NjNNP4HsqvZrDjtQKPCkGd2b8cyxZ62jrsvVgSW3n41rzwziab5vzEepdrUC4M8Jg8ntS",
  "key29": "2CmsrCV22wfQR9YXTM4k1hj3ivcgofJx9D3gaH9sU9Q57WqQKWngPV5aucYQeVpMVxvxcw5kuFEwhZRDtf4xcsJq",
  "key30": "268rjuAbkVAG4FZm8cdpwMz7bWnkDx7M7cYMHvcyPBeXPaBgPLChbP91LDjiy4XUepigNg1Hs1JHM1bRSgGoSVes",
  "key31": "4Q15HFTvJdAzNCpJJ6mAfvQL1GNJSZ3FiM1oDJTQG64btdrPTK61p35nWrSYndBnSCksbqkqF2RgiJ1X2ManhQms",
  "key32": "3bpjwh2cfZBfvgFCJPD4VzE82vZcL8H8Qht292MKokboDpsMcG5ZkmEDhEovnGnYE8Z7WiYgm3Kvh2aPnEiW9vWW",
  "key33": "5SiZDpTnP2XY8VRi2cjcQTvaskroNSVkbmrBRz7iUVqfojnH99vzmeR8xssUngqDw43RSXs3oMk3z2qbW2QkvLPu",
  "key34": "UmpuRFzhjErxouXmD3Jb5h8c65k4Xw2g85yNKtz59ZfbPxetAVpg1XtyCrMf4UhmcJRMGYjeiw6DxVVf2oAfPv3",
  "key35": "4ZQmMfgUijEhWx7EqW3K7yoYFWEy54Csdmysxsg1YTcnvR7Lv8hTvBGqbpXiCUot8FwXEizdLqRrduPy19qgj4bJ",
  "key36": "2hmR8Rw7jBD7TYpKNTb6ZyJizTGYZkJXc8hvNJzGkZnPMktsbPExR7kAzVym3MFeTHYa8js4QMpB43S9JVuPsD7B",
  "key37": "bfM9jf6FsUq1nNi15hCaachTxvCWstg6Ly6mPjA2VsGBjSKn5EbW2rsQuj2yCAmuVxgmqU4jJFtqMbDs8jmTw86",
  "key38": "4chxovRbEHxKJjxJnLnuomnp7hgKYHWpg7sVByozfuR9VMUu9L33XkTwZDXcQQijycgPhc1uMB96TuzKg6sH571T",
  "key39": "PkVugRnMt56GR9es6FXfNHSegoZHyNGueRdM93vUgsKic1ffyWDrAWEUjpJVTuypqt6NaEG2VW5G17z6w7wX5yY"
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
