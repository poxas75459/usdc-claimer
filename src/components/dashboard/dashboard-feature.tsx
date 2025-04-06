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
    "SEZ8X15jtqXqNpumv84NVJz9MZutHVkjGkoJ1NBPq16FdfzvyGKqVyAYcoHbhZHa3wAxJWoYTTzduL8H1Wdg12p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MnP7U4gJqDvX38pFeks6YYihX4fbQ9LryxJUrJyiusWcXb6zi8zJYmY2R7SuXFEyRfiMuLWG2Jr26LEMse9oVnJ",
  "key1": "Ay3XfM7tfHUSERRArUyCE71Mv1j8tgLvCgSvjdSSG5cWGeQ1np4QqN31xhCk8zQCYMbRp36uBShReNPodhDnfz9",
  "key2": "3R1VJ7E5R5BtyTZRMCLMZWfZwLwY6jqcZmFNYEHQ9Vxq6zWLLSpiiViF2gmAqQVu77ZKGkvgfTJCT7Pb4N87pn3w",
  "key3": "5YQZEADiYxQZAg28AdPEAsoStybfEsgcdVbATtGi2EtQ27KnvFKzBMsoGEVGcAU9CzyoAFf8Qp3n9Xsv3WbLohDX",
  "key4": "4kbVSY4ifPJ11k3Yf7o9WRFpLNrWRoPT2Xy98AT3weYaGazoRmQxMjqEJR3aTQsGoxBnwK4ZYYAK2aDMaKTzGawv",
  "key5": "4Eb2edkrb4RjbzDbE5abvw16mLSL5hxaWLL33FS6TjyMpkJg11Q6CdArJw4ZLDxXULCSkDisqdiz2EFGpkMmaSb5",
  "key6": "4uwxiMmrPqyQCL2NAKRTtgxTpbebLiqBGxLNqy94qHKFpTQtA4JXgixZxhCdfGZUebPaA5m1dUQ3xardPHWfnD1h",
  "key7": "3Ha8SSuwikc4gWpouqntnCjjgRQXUP8391USTeqXqMArgCGnYeeP3faKB7U9ksKckDox8tN3P72bXgt4Vs7EPnrt",
  "key8": "3DY2S8WK2b5H3YZCjk8YkKxFaDDMxQ2RGsrBGk7LXsvfTUiZwwn7uEd13hwuw7BuRDJKmsHSyUnb7Y6QdqMiMfCh",
  "key9": "5r7RvnchC48n3jkpkYVuCsyx7oV4qLTvEvMBcBWsGu7N4p1Zg8J72H5zf6VWcWGPkgK9rfivB7y37tLuavd7uJpf",
  "key10": "2nz9eJDR44dpXVfLhEpvzjP7RvWYaoAi1BUaZadem56wbAHPV1TD6UZECvzTQUh2CqmtQ42f7TLD1S39qZTRQKuc",
  "key11": "5B7eqSFR2nMyDhRErVHruB5dL2NkztJoSKbPaD1KR5Cc5nwYKek54Le98VDf43hA6utLempJnmz7zQZAgJptE45c",
  "key12": "4Zjz5kaxbcN5UEF1gjSxJnY1PrtLzC3nPGDmnQVKom3f7QjKcEUZASCxNBcxdWBEmAw5ayQDVGtZRNZ2kuuGjHkS",
  "key13": "2YwPZRd2nn4Vsr8X2pJu2f1wQ5zdHcJCzaqptkStnpY8AAy8JkxGiGa9V6nAkdNPib7RkZTxrBPnrc7GfXPmsTmt",
  "key14": "5CsUsK8P1YTYnebArq8ZZq3XQtdCKp5jEgX7dT3g7KZDBd8ZGLzdskPsQ4BWPfzWbXdBAFfB8Hr4Eejug2YxqHTC",
  "key15": "EQB7HTtizuu7mER44pynvLJYdo9rsTeymhAiWQoEnFoESshyhfps27ks94P7ZwhpSxmXbmrR5UFFaEXxZQD82y6",
  "key16": "3xc7myRKmoVLkQb2AZPTMpEWKP9hauxkcNcrBshTXSBeg8iVNjqhrsQLhNfbnEt1JrgDuRzFTaBUdEbd4WmwfrH2",
  "key17": "3MHBgjqdvocTFtP6uabHBC81eyZpQ6tEcUmgYGhR93opmwVT8o7LajZwryfwuYsHkt88qQzy6WeVJtRu6FBuE8cK",
  "key18": "43S7dnqFAN8HstsS2CixGaxGSNd95QsW86p56RJHzgvLBkAXtMT824xjU5s3ggSZFF2U7ZkisfT6zijFHpSSsAo9",
  "key19": "2bcMjpVm3wD7ztvGQWfkCVCCm8eLAgKX33BdLf1MVtsatsstAi9W6RN6Xs1UqrDrb6AtKhHeNTbKTWePpzhuyejS",
  "key20": "48zubChXDQ7iLA3ogrG4U4t2XSCkcsYmSV8372Y1EPVn3XfFhE763jkLUjV9QaXjg7zV4t9B3jF7k5LqvPEBN8YV",
  "key21": "3ydp686DurLtekeYepdjK6JoSgzEHtBXKJXDMiArQto5LUFC6C4iEeJwtRiGUjoAvYLNyFQqrN7usHJ5Q4XzPGHp",
  "key22": "4my1gcyQcAVoCp3vZnHpFCXwiUCddKWMTBA1dJpsxkBQChQf7uGSBPAUzgb9Pi2g5oXV4Ue39iWNgrbFzWt1H7Bw",
  "key23": "2vVpqzc3ZLRhP4HjAEkUZ14PPfX2MbASdRis3DtxkJCtUB3ahtXCBHGdKbXyr1yZ3nEY5PYRahixDWSnXs82GBi9",
  "key24": "532nBs91sHj9Xox1Zi8SuNjqPpqXwqdS1dkjMf2WpXBsFVhba7dn3LUmXftHUwjrZ74up1cdNy7nhHZrzUARzPzK",
  "key25": "ZwMK7YfY6YPSX7CCFLGSFjCufxYJY7ca948YXTJbeLpXZ1HAn7J78EEhhowFYJXsGhKjYe22TihtG6faL1j2s7g",
  "key26": "4CDyVNnPYeTmShNYcFnEvhdxgfe2ztPvAKoQ3W1usDoF51imSLkW2YcHD9dTNx1TqAM4m1zhG2knxKo99Gg7b84w",
  "key27": "4bKJRGLkRsRr1jybJWPAuGW5ENYAgQ2Jx7A24sq1hoAdpFhwXwJTxqrEcnoT41nhPFPHQEfr5hK7rjNeNyrSP4dY",
  "key28": "3RcM1REYKvQwzBNrnwVpyYbxcPbNAkEVn8vamSLmh5bBK4by3Kf5GMdaq7CmqxvUfk9EBsZeucg9njeECzFgTfYR",
  "key29": "5xZuUYQhi5K8t8rsTyZ7euHVqRoE2rJzGeb5PJxyLSPARimLbi9zv9B2Fz272EuZmXLfBaymqFFMJXdgAbT94mzf",
  "key30": "6kLgPV3pFVpc76gz61g7CiVQEgxZxaS9qBwdRGCtGjvvCfsDGnpLJZ6Cb7jLunB22gExSvomKmyWTCc2qFK3UfW",
  "key31": "63T92E1UGD9CSwWrgPAYSmEFud5JEefUEHouxbvnVEP7duGiRgh5V4zPLWiv7DtbXa5snak9NGEqqZgLH45PVf6S",
  "key32": "4FhiemDfHHfHPS6HnHGnGLXvAazTBBmsH6chSiBjTpsAFNGAGUhhztCVcwMxF1BC3BFiWKQtfYqP6AB1sxGCfLNx",
  "key33": "21FfTcQoh4Nbd5vVCcgVgFkqr8E9v3KLK3ibxLbX3qLHyPouxAY8rdUwR9zLaFBrtJc2QFEgTSgxrLSoYQaRHd42",
  "key34": "49VuwiQVNiwb3JbLsQBr39E2cx4qSQGQb1RXqhdDw9cStW6Gnff1ugLgkWAwML9vwDiQbDU5XxmriCedCsM3GpZN",
  "key35": "B9aZU2sqYaGyCGEDpxHoYhzKznCfan5ygLCSVhzB8bzgYMMNsfZEixdVHS1WFQqomrRb9P2XUYg2DxGg9D6R4c3",
  "key36": "4fHPDqfTf21svFAhEH3op9RU3fJ7oYYc91qMNrqZQgPxr59aoFVhpwSF5bifodKAG6uRvKtrKqWE2XmzB6B7Vfp5",
  "key37": "pABBGdVmTr2xNmz4rbZT3UfAbPLGkgHVAUZQXcXpv5v8spKhRoaGZE86a6gUYC7cbDFWVLai2LZ1oTNxtkvFwmL",
  "key38": "3GzEaWn66VfDhSE19feetJV38obPgPwm61qbFpEUvW82LZgYsuWHgo7E3vWLjytvmPXZf3ryLGG3AMR9YA8My1Xc"
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
