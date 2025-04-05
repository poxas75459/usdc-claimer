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
    "4uJBXARa768hYyFZAKD7isAxM9Uhm8KZHwnHoNa47ZBsL33kGgX6hbYTuoq8edP8Pmt5uzoaKDGKvjEEdyjYsemr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ps1PEFrwecoigb95MhM4gZfAjTGqkCucPcHHaQXDbwbQiB4A28WSE3NH5GzW7yTqPBpaqUvHHH5dfi1f6jqKiB5",
  "key1": "4r9CEDb3NzjPPqoi5WtSbGpbyGi6qbLZMF3C4BJQqjbAyePL1RopvgFkrQ2wNKnBxLgkpBE3xQa38fzVm7kiNAu1",
  "key2": "346z3a9LAbb73ppmzxvEAgCUvjxEqoYdNcgYRRLYfzVwqRKBt3zbPMxxQoegPNCfR1WY1ghWRp6niF5dHfLfSiLQ",
  "key3": "5psPRpV3XJHt48Ytf8wgte8xuQjYQQRZ8nLBz5ytTC1jT7DAVXwk5Ao9CfeKqf1WytV7smxCh9HXTJe37kndeSkv",
  "key4": "2YBLvsmd84BVQJitcziSmDwHVfAM2MjkEpFfekPqH7nz6xAwo46ufQBcz1vv5bCWJ5rqTQoFif7WCy4EejrVjMKV",
  "key5": "36B9wgDi17gc45AfUmzA1jyFBeD4KQD6HMuz3upYi5R1qgKVx1i8fToaWYJpKvKtqqJQLev8WFcv2hGEwaFeMJ7H",
  "key6": "3G2ktFr5LrxeCYpRyw5evYDWSdvo42Zd9im5jV71Sx79eymkac3yUMQBVJCEeqqaeXVFSpHEoNviAgh1Kh3CSTnH",
  "key7": "2oEbawCUBQBFEqYyKgr3GRXFaVae3RkbA6KQCGN9P9puRVBxNJyQGMLjo6nQPXxDN5CASHtEx8eFEHYtBtjV8SLM",
  "key8": "QShxUMmCKWgzEQx8QxQufGz8Ts4z34bbtaREh6fk9GpshUhs9nAe27F5wKEALHb48ZQzvhLzdHLRux3cwcpAGag",
  "key9": "3kTzKBTuKwXSEhsXsSNhaZVhAygzbCDnwsPFxJ51reMAcicxwwi1ffX2k3wGV1JZmJhFmgUe45k8U71pZJpydcvc",
  "key10": "2jk2v36SD1AfSjmLmUvPt7PHHFovtQ56SjeYP5FkPk2TfGoyrFRMq9boKq8ZaQt5FbvtjhtmdVEsLaXGZ6Tgvjju",
  "key11": "4qmSAMUjb3uZE8spr4KeWpbx2Pffn3xzGvsget9pLbtreMD2KAuKce4QLnNj5UkQuihFebxhRa1FVrorjNqjaEFs",
  "key12": "321hWvEU5DEKApM3q931KWFCFzVjANngcfBYD5k9KJCpKZw95qEUUh1LH7aTUSCLb1H7ewewRzp6khidz3aKmGLC",
  "key13": "5hKpT2Znbp7berkt427nSGmdkpk8k8yu6dY4pFijrSQRgxJBFhgvhvLN4eQFm4FMEnG3yRdAhXubbCho2i3oBS4U",
  "key14": "kBAUwEUKCtHhdyAwDuUo9tcJQfwuj8urhZBTavKqzUFCSHbWq8n8EdJ9sZ6m4ueR6JvZqvhmbgFqjak2GpqHwby",
  "key15": "4qirbrB75DmCeTwbiqDP9ozstbh1NsmRXS3JbZTBtYpjzpzmBY5Gme4XeJpw1fbfH8nzthsQdqne14NWzDYaXoSP",
  "key16": "Rj3xEL8idJx4R2uMrksd1zQGbJb5x6szEd5iQcRCDB1oDiSB7W4iP3JrtzMx65TM2V4hLQPZpQwYPEUWj9pryUL",
  "key17": "39hDfm14uvitEeSyeSCEWE4AR37BUq3bHQDAQk99VwRt3ynMXtHiwFrPRMNwc1UYCaqRmZ2ifcgYN5GGYy9rzczQ",
  "key18": "2mgU6igpLAd3L3pVWdMNNaH5eHMsQFeLyRw2MEMyNedkWakCG3ZYwebsVMn1oA3Rghj45q6LqcR3sz4WzAu1BdWU",
  "key19": "2RVBrpJhZpgJBdBdFaXaALa4WTVNxJxTMAVbL1AZSWS5DxzMNLWFmX1XjY7pDyuEnfpL9PDZ7C7wMj4ad4xTJRqN",
  "key20": "5ZLs4tyJGHvq9LHD4CKzXej3gmExUYUEWasugtyPLii2V3ubajnmAyTDtfVtTELcU61bTc2GuBBEWzJGAcTrPH94",
  "key21": "2qvDaJges4C6H4dmNFWNF7tZ4Tcjtai5YWLB7TfAsSVcwWyrCu7T6MYv6oKGZEv8NPoHrvVwTLMEmcC52xhNqcrD",
  "key22": "58XReTMoxr8MP2Exv62RdPZBmz92bEF1xUjMziVmfrMXKawuAC2Dvei2fHnUL6tM8jUzFRkFEvmMgMeWNFf3QX5d",
  "key23": "mF4JtwkCgnzBGQLmeVGPZwnNsDdstk6upUB7CAryi6Cv2KHti7EvBwb5SmymnkcVXXm6PUm26yoXibNjFV153Yz",
  "key24": "4BBg2LxCk3Qy3MytbehcHwmx4Kutv3TvoL59AN3c3uXYrCbGRyE1smyWeXeyNf4ajmvY2m4rxZxH4dUpXxaty1vw",
  "key25": "4oPPBWMyyhWXndQES1xDUtBFgSiEXU5i7K2bnyMAjtMXMZRFUyeusq5Rx5HxmGniJTnhwnEAjxVrsbyG2Eaf9php",
  "key26": "2xFTKTo9n6qYdqq8UF4Kwi6nFQv8DnbSeSFT6RGHpNnbVfptpyiZWMPfvL6qHpZ5uGhtoZJhEwXUmKXD5jS8f2vz",
  "key27": "45Nqk2gJCR283FGzpzyWJUJaSSfMioggPpVMRdQm54uLkgpcHPBPPnCNXqb9hu22RoSeyGdy2HAPqMoXqggVwBAK",
  "key28": "2dGWA6RpKh658bKEuycnkRPcxeejTSzjFetA8WfVhPfkiW96cyyFmL4EiycgyGk9xWrKfH2AVBNQtzcFzQWNYCAH",
  "key29": "3YFKjKCxUxGnqFdvnu36XMrtDqaRhTT7CtsZtwqDYKHXfiLC17sXWXgrfSxEexLb3RHR7znCwtkhJEVGDVjBda3U",
  "key30": "3UmCLiugaxD8D2EdM47o2BDcFgEXmWmKe9C5DW8njc9dPKTdeTyYHn65Pob3LVvp8DLNcbiuTBd1DjCanZw3GF64",
  "key31": "mhtmzBGicsKxaQ6VJwW4HojHfZfJZDxoHEepwRLmNAquCoXX86Z9bSE5hYRktPsBYvM4VbbLQaG1ExkjhQfXg3b",
  "key32": "2uibfi5ZpSghp2ZQx5yQTxvim77hGkfagdSi4KLuXpBxjRjFDqMgtAfpwRZSNVSHT4i5aomm4JEiyqCrdjBVhYSG",
  "key33": "5TwkQkKuir4ojq7yzGrzocvfXMTAgQbtzCbT6ZCuyusmgNeSQT9c9tkrbeAT7aonrFtoD9qb7Sf8cHG3byN4Enyr",
  "key34": "2iNjR1e31vLcmuCB3eaXXYrhUoD9dyguZkSZyMMosJDdP4Scu7ZiZSiV8ufo4Njffhcmz1tAPFqPdUSqF4XWvHK",
  "key35": "527kzqGKt2v7CsJ4aTcyAUyh8rjfpXbmh7oDgs5gC7rBCFEqZ1hdy1sc4Z6a1pySY6awXFGzziiQn7z8sfagBAWW",
  "key36": "3Ms2rvfvSBRHkw5ooxJLZVDU3BMTWE8DeVX3NSfSL5mR8mYp2LXzE3bDFGBx7pC5hJraVyrwPhNcYbL8q8shFrLy",
  "key37": "3yR4V2N5v3Q5VEkxRkxvhHo81FQdZCoWusLPty5FK63zMv71HqvTmCmSVEDvVVBa54fNza2DSbsS5bA8TTfCr5cQ",
  "key38": "2MaBFHSa5j9eMdTKSa4m2PvQ5XyyrgN1hu4tRqfnTqWUiyviemD9JkuZQiNV46LGaUzgc1KMj8fRuUTPMAPbNjSd",
  "key39": "2DsRsw4akh11GZBS7RyfTASHLdDYGFYPUpsNjtLvSSYioXbxJyk1jMFyGFKcfqBMZt4Ez7vYiFJhi4zgajaNbZqs",
  "key40": "4cyoumYmmgxi89BD5ivt1zMm63t1E95yU4KNezgUvxXeS9ZXh32jHjCih8YmPgfiLyf3FeTLVNtubZBhBcrGHimW",
  "key41": "46Xn9drW3qcT6rowt2Jh7J3J9jkUibhQzQUus6CJyqawdwsXi264mh7xxsEoCJVudAGFTrkxobfznUVoAEPQZ8Q",
  "key42": "61jRuhYAdUjVSaVyHZfz2YCxXLrJSVkTPJvbU4boyRY78zdWkaTVoSLqMHHbNj3euu1AnLfnKMxnYTca2GfBF8SP",
  "key43": "4JadiagsNBxqhK3pyiUuYmXm5qaAvepXXmjYLBZHgC8Vhe3Uif194EbTR6YTf6F87YZPGpzELtVsipt8jFEBAi3Z",
  "key44": "21vWE44pcwKZPhTqccB2NWnamC6Ywm7pDxcrqzW4vh1ZVPRW6UAJ5HcbTaCwVY3eEJXphwa1Jxwq8kqGv33ssCpg",
  "key45": "UeE2BqbczKKRhf1GxA8Kfzybee5Xdqow3JnSE4eikidvBV7Le72tyr61wTwsKhv69Sxizhuj3zYweebffxvxLWK",
  "key46": "59ir7vPpUJnfPYnLcsYFdCHe2B3r8oCXV3QZTvHS8ezn32m9NHohkVCMWp7rhK67g9LXhPcMoZYBWrqKRUUMJAay"
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
