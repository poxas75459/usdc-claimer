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
    "55NmJKq1TJLohFJds4Bhw9EiTRcBUd9KorTzkCAHcPmm9av5FwcJrGqR8ZKDpaHYmGNxefjVKoF5aati1CzMNZZR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hgb8KRTD7kKEgDnGtQ9c8V9je2RmKCYvYBRday1qcwtnBPzLQkVF18nzBTv5ufPpbWe2WbgYkVLUNjgMRC1arXg",
  "key1": "55THuToVChiHKfqVSv2CAuYvRnVXExrUUUfE5muawX8NZWPHLPDW3bwW4QfQzPze3LveFM3B1mj1Pj6yvztBGG4k",
  "key2": "ZgHyDN49EgUFjVapXatwwEpdAZEUWnzuuXvhqTkeke8NXytzvBm6G4Gve3QEMCNUSDzbPi3abq1dm3MYDkWPuGM",
  "key3": "4ind7EpQ7SQpxvfoiGEptSQe58HGowkwohRidgBM2n4vkSmEq4GhkZV7iAhtMSEBz79UKoL8HaZ7xbYnwf6ku9eX",
  "key4": "2oD21cdJf1YHWtSkuiuqvDk1KV4bvS1rUquPLLY5ouZhGFYEdTZ9xSX4KJftEbtKvnGyzrhKnxJvX6uLajPSpq7F",
  "key5": "4n9TsnMguDYSRc1qoyG5zXdwQEUshmgTm7L8bAiCTskZz95tAgtrkeir8b8MpvaJjib7gwVHLF86dkovYTboMsEs",
  "key6": "3zHy9tKjiqt1V92WUY9ocZsJKUw54a3VcEdFagVsSbwCHaVAr9Ub7a9mc4devAE8Qu2P3ChimtUJq8bB2Cw4ALCn",
  "key7": "5gWuSDvHatt91zDcTExPusF2xS4Fn4CzUvfumDMJvRXJj9bnShnZaRC8usNAYgZBxcmYZxfZGXA1t7eDD5799JZQ",
  "key8": "2ZE1FMTMomgerS4bX63w19g1MxF5Eci7nDWRcty7ispnoVmkyKCah8hmQREoTAW6SYE4HEqKHaPcMz5P3nbFzbW",
  "key9": "DRchWKpDKCU4SxUSWY65amxcCT53BVGR1Cam7iq9UBoKpq71daQu9nvy2BAEFSJ8fik3DN8Hw8HmpgcvaNk8T4y",
  "key10": "2kGWak7Ujqyy6FsreYd3MKecye4jfyyoFzq5aXxQbvqkWVHnZTfTYE2yix11aSLfWWR5oTyoBLpkThhoGoGtqBYr",
  "key11": "Ckz8NkxejwP5Mf5kvtXXJ2AcDpXUNNqJUgCqhkjaMmwGPtEBSB5zAXT1egQv6t6G5xGBBJkGgishrFCAQxCNHuY",
  "key12": "3Pk6ygc3krKYPx8uNZBUsK7dGSeChMR7uxzHGJkvsSzUUMWdcH6qS6spA93DtmJn767PPeHeEonbQMiJkzVxbzZ3",
  "key13": "51xwEYe5UxZLffPN2wYNggYSpQjmza8982sQkSBXyrFgW3y6S1rkPwzsbFLhA1kgPErKfcZWLPbTc6r1bxqKSYTe",
  "key14": "5X3dbKXJoDfksW4udDXbCkV3TJnCA1uPypyxPQM5RXfXNiFC5VZjhnmu5mG2JZaupJpCTYqUS84jGuKSvYsGbiKA",
  "key15": "2kJoDoscrRa9UvC5XZvi91KqYHEEXY4ECjyUwfqH2V1CYjc75pLYzDwqKiyWEFZxKzWuCWw9wVZsvtwNCUKXwfa9",
  "key16": "3a1YcrMEhxbubLF4cm5YQTk7YBA4bNLuQNuYezdq7fsfG3yoF2pNddFk2Rd3sSVJ4vLHkuGPP15LRbr5rmGjeFH9",
  "key17": "4yQEZTRtGcteibWC133tiQW22DyF4vLonkMzdhTeZM76gCvUKbMNHRq5MwnMUdphUYE3Lw1vxAnuay7ichzgyeM9",
  "key18": "aadhp7BCjb5fUHm32UiCH7EiZZGMiZNJ8XtYCd5J28AtyMNc2kwi6Bf9Pk7fsKYYXbEwFFDgYpdFStzDJZKS4rz",
  "key19": "3t3BVU2C7dWbxCBbeM8LW5Dd8HSx8fGdJxqa6FGuDexng5Wamg8AK1tWAP4EBM8sMMi3bU8pyhk6JBDMLQPcNjed",
  "key20": "xPtGyqhxc3pXE7J4gCobY9tCzStynyjFAzkqPeCujXZDeRSgdp9X464RzrrgnaQH5UTKyEqrXC2sw51hCFr9LhW",
  "key21": "5bpeWP11st13MLPjAqx46ijWHvTT2aQaVc3zhZGwEXnUcKtZasgxh8huPVxrzUGogwz7PQQnVe83exjUpW7hT4uJ",
  "key22": "5kf9v4X8q8DbdHA6JPYxPAj8WAgNn3CaTJ7TbSs59jGp9he4EZBGs1kaDZoShfbNwNgCi8Mg3X4UfFZCDEq3GPED",
  "key23": "3Jxe6Nr9ihDiDBU7PZTKdYGhHnKPQJivogXKyKL8F2Ed2DgC5BgzDttHH5VzRQ8EshskKmbMt9rSNds4wtzeraTU",
  "key24": "57DdVHe8hagML9hDgXksEBEvycPCRkVhP2EoRYFKyQhPk9KdVdesY3RCMcTTqjnvNi2U1ANYpV2fQUu3cAiWtpFW",
  "key25": "4x3bktuxaUgp5mUiD84SBS7V6Ryt3hNWW7vV6LkM8jnbWzhwysvGcLCRjrnTau7dDWYXXqrVxbZcDPCP2ek3uz6C",
  "key26": "4sMWnCXpWuRtH1XozLaceA6ixMZ5bLP6ySK5yCWxknQLw3RPj3ZjhWwXfZBpXPmj7Hfq9ZQrHEN8CSJmjLGdqXcB",
  "key27": "f7o2r1vQGHyq8KqT7S1as5aDqyksGeowbikaiJEf2cK2XVCajBkDx8XN7Twnhzo9sbN2KiKYFn32HuVqa1WFDv9",
  "key28": "5QCjcHXoYTt3ajakDYFGa781MP7j3EDtRWRhg2oKJzaJtskNGc8aMmufvHDa1Foj7sGVRs1zM8PFV61PKt4cSAKN",
  "key29": "xaP6HegeNk6s4nrM9iQKfbAdzx5r6LT7SmfvVFU3ojNvSHz8rtSfKyqVn2gg18S5HRDfbAtTLh7HtDDuiR8AZyq",
  "key30": "4dDNoF31UXvt3hYCUDMCbYxTa621ayKm5pt6Bc2Dj2S4xbQRs5LPSLPETFtNUVuPtyivHqRWeJ2GYtFr7dB16RuA",
  "key31": "gZbR1rVm7sDY4Kr3HVRm6DUT5a4FXMq9hd7NKTKTWg7AEdieHvh1rKPXRfmwny9fVhKc7t5KYZX9uC9tzw3LCgo",
  "key32": "2kQrafPRUACDFM7geKn2v7d2xcyJJaXXbaUMqx7tE8xgWYFkjUwgYAT29EAMwsseATHBZiRhd9mZznjxdiKAokXR",
  "key33": "5rBvvKQvFHuNzy6XYKuTgZ6u4Zio8X9WKStMevbYRDt11ybyHFXutFU2WdRFwnmiBiA1nznoDEk1qnSesARCXEJQ",
  "key34": "4qCYXbfxu9L7sr99iKKwSz5VxfYKz1bNf8iEBqnMuGbg8kwoU445xbR46XBvHukHax92tCjiugmWzVnzGg93xXd5",
  "key35": "wNNXNX6pDGdtBV4i1SkKeQnhd27nQqi9ye9GkhDXBCKQpafS9HcoQfUsPp96TcqtuHQDqLVJkhFdcTtMubKko2H",
  "key36": "4C5YprBuWpXyDcDSLxnbwB2VZCBZRSBfPPr8yLfJ9zZ4Xm7EsP7FmqyoJWW5STxwQrNgtK8sRU3njf97g3ZfvRXd",
  "key37": "5UGhZXG1maL6jCQpoe4qdvsmYRghHv9G1nRKPqSgyvkYrfvBX1scLsBfv2JAzXvGqvRn5dtL7dtu6nqqoVA57oZd",
  "key38": "fKXr6F6zGY7e5UWB7VwFt8FWsnXM3Nd7X7ZFur2YEo397M6SQVuD8yakig3v4x7vMqRtWT74hJ4vh4ykZbDvSqS",
  "key39": "37RVzBALtA8kdcKoMExJ3kc4WKBjys3TvPP7k1mBLaTq3zdaUkM3y5gCgfU7QDmvk2Ehp1LPGvdZJrCZ2jMxVKdK",
  "key40": "3uo5H29EpNYLu9NsRGcg383fEt8yynLG9AwSrKRmjcAviDHZ1RqcZkKUegAyWiLUYCF6KCXa9yBRJcA5bTRQAz1R",
  "key41": "3nK2oEvuoQSTmbTL1CaqM3uTnzv9i1C4E6WBhpHnPHuG6SvdS21GwHQaxeH2mpFuWMLWegtgAJ9hvgdJsAd9zw9E",
  "key42": "5oaHnaiXGUmaisUcxxKhBGW18gvNHP2CDr71sRttmHdPS5p9fy6umSbRsywcr3vQxm35cZFG3APsJRuuzYkeFixD",
  "key43": "5kFw7aKENpJnn9pLR9DNzHSKWSN75FZ9Hej2NkJjpPAkxNmKCxmJUurc3pjNg5eapXgKdbMxX6kFbP3aAEZyoPQR"
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
