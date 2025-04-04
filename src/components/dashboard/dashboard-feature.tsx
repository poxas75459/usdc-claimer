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
    "Nv2EPNmoi9UqiZpumYkEDVHbAZqWue8mzo8FfdugmLtnFHwuErpiA3vM7n7rt8L7tafUrmkGH4SoSbgsUVZuvuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qr1MANMoLXuN6NCxnXh67GazAkj5r5VfcCgFUanQd525caMbv5gLnNKDvDKvGkEHa14T1d1psxEftpZ1y5wcw9Y",
  "key1": "4Y4yvLswDjjwG2udk7gSx1ya2R9pWET7mXeizKGhhsHaNbx2wPkgNmFtEsY9H6nco6Yiimj3W89q2vEXpEiJN1ma",
  "key2": "2cva5Lc5gu7zMhZiApK77zPpjq4b3eXCsLNB2vQ482FvVgdNSjR8o65cqP3uBVepLbGwNdojHDm9D1ENXatWZHZt",
  "key3": "3P9F845qHnXJJKyBzz6vn8tDyQoSLyWigfoF5Uz7GkmVcVBETHMmbsmLSdJaM5BQwAvyk69rt7hP3oPQWber8nhE",
  "key4": "3UTxWWMspC5NHJ4d9mtL8WmjmHMv1fSJUDr5iHTtPMrrrfTXJy3geS6Gs2zFrhRTrumLnoCJigyP8KW32BMShaji",
  "key5": "2nA6WdfErufjhuJzuUv3GSBE6vxEbSUqP87HTm1hPYQWCZXmUeupfWafurJhoiAVL4Ey6uqizfHzrXq2hjc39g9T",
  "key6": "5Ti9GykoobWfzhaNyPWL3FFD52RUAp8KGMHNBJT6u8yjCSMGS4tUJyX7EsatJD4iNxi89ZgzSuF1NsjfzKYKhTp",
  "key7": "quvSzqsT6P8Nqmk1tXPpiT2DCuLABcSHyn7xdseszq9mhjn2mGobLVBa3SvyxAm2zdpevHGc2v9JMwUW1ZjtLoK",
  "key8": "5jQNFAU165YzwFGR837kQo3Q5tmDi9TJi2WzgU2vEdqSXnzJWEMsHEh8vmE4skr7GQJHmeXoXtnU8r4pYtbpkd7E",
  "key9": "yXeHSJXNuWLs3UNfP3YBmapwvAQwnwEtJUbbXqwmeiioEsDzmiXYXgU2GPQZPZab9izSzt5iJ8VmjrDN9C7Eq1y",
  "key10": "5rLEWYGaVY9RAjbFeyet3kD5ZjJknfGQap9iY9rvNHSt5sg6QFU6FRd7rrggFNjj6F34vzqiHCj2iymuzEy3DHZC",
  "key11": "2FSwG7K5YnYSowEgXQ9iDKBF71gRg3su3Y4dFhztukStnnAorzQHsDGw8LM5GF1ruhPSkzEeTCuBp3W1NNpKqWGZ",
  "key12": "3FdGJ4TZafUUTQa9N3b7sWLSArXxUVrkeH5ENeZFdXumPHZ62NYSas46ET3PVMvTc3NCFWFgaFQx2PYkEFoP9znr",
  "key13": "2QThTvLmqzRrwiG8dkGHGWnagftxS7iYV9x1zkZjzQdESLuos7U92UPihg5reLnAyGmpNf8Gfnhg7fjphUUotxMz",
  "key14": "3dYzbUctdrDGTFiHqosPb9RpaE6eworgdmi7u4VTiQEkVWDSyrm7vEhmnbqp343eHByo5ffAVGaNBPDngcKdSmGq",
  "key15": "3UMmFL8vTJK6s5zQN2C621KNK5BTiKnEsAE9D83hyMRfb6uFLd2pgvYAo2XWFm5CrqWNdHSwNjKKMdrdVazLKFVU",
  "key16": "2uvKB4SpWKmWn8r5PGgQDc6XNZfmfHpQfjUbiUA9j1E8Poviqk8GnXzqGTCCdYwrADnTmZa6o7gAPG6SPYcjTi1g",
  "key17": "xYYsukNSD3kNPR4XdvRYWWm4U5vmRk5p3Cq1q6ADy2pj9GtZiS9VF5fvncbX36QYW6kLFcHE2Exfv8WeXakD2wz",
  "key18": "2SZjR6pRXNe8hV9cjdK4zNTuPPmEL4X1bN4i2WckeM7zAMxPzukZgjXArLpWnEe3oR1TnawhFdRcEcVepaxmi1kR",
  "key19": "36fsiJNZcY3ThAgrpnefrL4dsYX7TLe6qdgm3srA1bTyTYXQ3YQ9VneUWGHRX1gtcjP3ThjjBAN2H1F17ydU6uhN",
  "key20": "4WXMmN7oXvBd9TmmPyWzR3UBENvjfG5pXPdFa9PBfTfkbysSYdbyzC4nkZrtNNxi5wBMNQeSGMFHkyaG2wg8KAiV",
  "key21": "4npKpcFbsdeuP7HEgkeM6DWQz1b9jGMtMDQiAuYeRgZzdXpzxJnpMe5JJhvigB1XkhTB4WeZx8297MtcfsMtwtgh",
  "key22": "4CbHjo6qZD45xScS7h6nS5rBuxaQPgLoyr7cxEUfwPJEWofvruZEyWabZbVDeuc5FxksUUJbfUR1YqGm2KHZ7rey",
  "key23": "2ARVRkJxNRMguzMXodP54Lmkxy6nNW1U873REMXU5CsutpZNgP9xrwdWL9EsgtaEbMKo9DcgagwWF8muoU42qQz6",
  "key24": "4DQgLbpeSKvarSqqRgmpMM9XVSFF1dXaJigWgFQnpnX6FbQ2BRrYESfCmExPU9SseL6pWc4aq7oGWHcHgn1VnoGq",
  "key25": "5zaYPeC6wRC8gkgFuQRZ1j9xcUE7QdENg9oJ2AjumoJFT2Gk5BLfxyh979PzgA76G4Ue1oEjmRVTEmac98H1Xwyt",
  "key26": "2MNmMkytTqQevbHxMF3shX1K28smptKtnvy17AH3wSpaVC7kEK2N77Qvn4VD4UJqmEb9ZUf5wPLTwP1xmccR2v8Z",
  "key27": "4XvfwdMw6yPtTwU2Hre1GP3nv51VWmA2ceEu2kaYBTSykPZTRTyCD61gGwSYSDYg31HGo8YBL8KVXKsHG181CuWq",
  "key28": "3JGZ8oXQqsUX3oco941eLmGbvFHcYKBTA4fizSSGpZmirccSEdz12zmKzWzozwj1cpovosqLZKSd5jDkVWCz2zXX",
  "key29": "3vNkJj4n4Vc9bVr3HdqnzzbaBn2FqcNBaKE2PRwQaQKn1oEdzstmFYScYHPgo1BhQ2Tcv16cSqogKTEmXSyzao1o",
  "key30": "4yaLQhEQXDU32Amx4Gpm1ZhXiG2MUxDZy5LbSdchcJYsJyQQvdGNBbDX72N9BgVt6YTns3yxGDoQNtea3VdTqviY",
  "key31": "4Btb2FVdNMTjKZcWaFMUpffLB7D1LecHQeoSE9YfmN5B9WFTi1GTYiNShhJUaVHZJZrd916MDzGAqeoM6cnAengU",
  "key32": "2gde7VhM2g97Hogn2sooLtGydR8CcpweBpkYcLLjdWxqZaq9aqxn54QgyhM1J69Gu8CeG6pjFM8iyJ6Z2TChVCZB",
  "key33": "4Kabun9dQH84eouHDcoy2hMPX8RXtZQ4jXJFWV87mrgadCAq21LyXnE29dnmYmizKYTCVSSc5qYAaKj17kq87LsA",
  "key34": "37Leq9wyF1xujaPVAg2cqC6MJs1JcnL3iwXMudYhtf5PaS4ahgukM85DnLCRgu9hoK725EtJSZYYo6XpsjbJfY8f",
  "key35": "5fvgEYFCyLCngVtue2dabNzQvP3F2izAjiKV1QedFbGwu8c3fsYcSczBB15YcHFotcrrNPMw9gSqteuSxQYat6yq",
  "key36": "AT59SfDftNAgcj5cmmbNxZKy18r3DWt67zLpQzdZdq3JBh8k71C4Jn4QGg3S57KKog8BsFx7gXu5iujj5BD5RhY",
  "key37": "2PEVnoY5juq2c5CnQRzD6AKTEbtfoLedvVNCmc2Z7zABttuRBKSdPukAP7fYgX21nsDwFcXqjaSBmZ4DTjEZ5Rqb",
  "key38": "2a9eMg5qt31397pbdxnyPtDc2TJnjTVH6UPXmYSs5QtLApHQ363EcXY5GUFcE64cXNbJRpvxvdHPZMSckHMCq1t7",
  "key39": "5BZ864Aj2N1Fd6DBjsyR3VgS2BQbu1hJCDuC2zi2Cs7geYckJ3AybRqfBRRcnwSpNm8uFE9XEVMUZ2ysgnV4n16U",
  "key40": "5CX4FhnsVdgUouPLgaftkV5Ry7ZipQKXdarJsJevipjgtAhmcHkVxAFhQZDcxoqYepsLGXjmpUXVjk9fjajfo3LQ",
  "key41": "smxAEmAfFHwNkXMPTZJ6gY6SbichkBa8UZWE58CorpgoWTvi7jaKqdLkni7fhGDUNBXonK56VWCZK3c7vLrFdKV",
  "key42": "4vPHAbqV8sVBinGHT3Dj4GFcQo9MSpsjzCNiciuDhqgCPomcstzM1NcDeQ6dnbc2ZFx3u9jucnF2eE1chhYvTQoD",
  "key43": "aShHb4n3nN47jHoDp4oi6qHUPGMXumvHKB6gwPL3hUirK67zfxpcwUEvKfBppaGiWxN4V7KuEKaZEa6pENY5pHx",
  "key44": "5xzsBSGjmeASZZqnKABGBMhG7UBEYrTJa7HBYcm79Y7kGVfXT1pkGXbjz7UQJUVVt31TaBPs6UzM6Wt44YR1wvH1"
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
