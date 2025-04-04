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
    "4Xn3jkjDzG16zm1YiqmLUjgULfn9k6mAtQqbcKMbCP8E97zwyVJsX1uBrxEpCuDaQDymjgvLXXCGhhpFjmQR2khZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XuHUXsqhxfHL2JiYxBp7HHH3u9ifUy7bwCzLdp7tX5WBCAEQu3fCXWR5i7sxPy4YusLBPVja8CjNNUY6tmymN18",
  "key1": "415cQeVFbpHZRWdHSMQPTtv8vn4hKmzvSc2xs9j8L1PSbHmf4bruN1g49qWQL66zUMLDCAQop3r6hzRHwm2FTFDQ",
  "key2": "dG4scvu2W6iEsVaQMKPmH8KXmJdz9Dia4s84A5wxX5XowkextdUDEToGhbjrg54Y1TCD5w9uPmSRXciGxzKmMgF",
  "key3": "3Qm3kjgm7y8sxbLqVBhfzduQVQKTAADPnUMJ3FsT6yPM5kBro991CnMKrAFBTFdE8VwMSyGmJG1Kx1M2N9aWwGwR",
  "key4": "354gLZweC78LC6yQCUv9mJ4v1rgt7Qys3ForVmqvP89zHDpmj4brBA1MEZRV5Y3zAeW37EnqUM6nfCuNYF6J373Z",
  "key5": "3TTPN8z5pyutLxcbzDzUgoAUTs2RKCPXNqa8rKoU29XKFnSHkna7AcaNFUYPBn3rTGW4Pp5nnoMZipHcQEQjnoxh",
  "key6": "59cPLGKuTLjhiwj535eyQmBneEedkcbaqa9hXHNoqjt3s9NukBcCbVR2agXcMSMuYave5284X45TYvdZVJA7QtNc",
  "key7": "5kXxbadEyGKu94CztNemwQHTe8yGnKL3Voqkew5kPVgvjnvZ5YhXBYnUoZpjUBYh9LRhZCPkLsTDMGyWvZm8aB7z",
  "key8": "5rAV5qoU8J9dsZwPY3Ck5D7xCD5uhbbkd2mrQAR9DbYtXBxVYvy9JhUT5x7CKLA8fdQUqV9MEcMQ3ywji3X5pMss",
  "key9": "2j2gZ5H395nyoc4PHUrQMj6fge4pikM3eUMHsXB89R5qL4g7U1wscL34qraJMCRR8Tp7wMDTNbrDZPuXKbtbaKVW",
  "key10": "4QwpeZJR7WihKV2mfSmNi61hC6yJCVae2bik9vKmTgLtXuMuwEbmSoAjWKHcyNYRLKK4CfAns6UMSkSHosGoQTbJ",
  "key11": "ZWhyMYq7wWhn4DMYfSRLEWqLFVEze1KuzMkZ1y5Vkr58reHKJhDuFcUors6BEW5psTGpKKfoEcawzNP4FU6hBL3",
  "key12": "22tcfQktWzpAPMHHzLQp3GwiY3NvsTUKPE3fEpfRzA1SCmzimjNNhxCyPdJXaTpV8qXNchvnXcVcnu5SMLkWx7D1",
  "key13": "2mReoSeBwKNx1ABUsYixQsoDNHxsNVe7JPEH6Ki19dBbGHhjeErhPcjmTtU4ZpnLqjskyjk3rzDtDLJqCpgLsM5y",
  "key14": "41reLWs7rKJCHdnxrrxWM9YfSx9gxqcKneZj1aerTfUK7YZWNb9nfkv6Fy2fveqpUgAkNKeyoYCtmA4VhNbJK3aX",
  "key15": "guWFbyjFbWtRBQoUvKkmC1DjMJHxoBZuavcDQpCVwVMf84iJxkGMPmrmkENA9Dg5H3d8PZpY8i9nmZjuR2UfTz3",
  "key16": "49xZon4bsACCP91JAYNCXMnRrYoneNTu8VDuQK1Dr8gsmrQhBQ5L63sTRdshui6ptMKacD5qaSiY28eJfM5Mhzuv",
  "key17": "66SksRHfmWnSZjW2Q5eaCC6TPpJXQGt8Nj3i9EwfU1amnkiodTP2U3ofpcpveapNuz9tQyeGCVapgjpZ7QmA8pna",
  "key18": "5f84NZ88oS21GVyQePhKdzF8aTupePAy8pjsUHNXXM1djCk6SNFmjMWENg3JjXXdJomn8kV82QXQ1VRKaH6okqN7",
  "key19": "fbxdHTDjR8x9dbMuWEbkcun3jNgHo96UX6xQREizrpPPaymih7KWBpzaNPsNCCNfKbiDexBPUz9gM7oJg91Y88g",
  "key20": "ry6pxvWMNUffG2LZ6jBrMN75NN2UXzt5TvXLVwePWTpNC3d2WgB53L8PwoFbWzWhxPFZzBi7pgcR1ZKfZNFu5CP",
  "key21": "5wseGskBrvgL1gXbct2o6Wf8naxtHXYLr3NYfbHyTdwajUfsXStq9EcYLabQr7Bq5qPZUhQ5ZdqGywpvUYoXgNGT",
  "key22": "2AfQEF6hnMtAjcdeH3uSVm9e3Tx4YNerYPmqDT42DjXuGWnskBBPH7c4VYsmNoUFFhE61jjog9JvjADQsyqLaF1R",
  "key23": "3w4X6zTsPo3RXPrdkgK7xry1cZSiFdsrx4i9GfkLCwACzteWUedtEZHPXUrZiQvSp3pUBYnvNaqf7sFRAXh7AHRH",
  "key24": "4rNXsAtZJFx8QVXPk4MoFv9g7zJXq3QrLhDMovv9RKhmMVViCPoKWvkRsbj93aJaR4dcpghEVuidUwy5RdFafmbb",
  "key25": "BdedMjfetjFTkMydkmp35AT5QiD9RtNgVXzpk42otQhk6pZTXgQYTq2CTTYD2U7yUQZRVGZNsTRRxyMM8hwfSob",
  "key26": "dJbMZ2GKizGggiGkonWo611kWg5aC9z82We1pHPVea7vUN3G1NtkHxPZj6U9BvgG4BkGWW2UhRsXNexcfm4GXcq",
  "key27": "25LeLxS2skKDebGnEg9sq6GsgBxxHYUNbLLWffq9ytva7fYqdxzorypAfYvqp7dQHFCw7d8ycpveJD2kVHLur8Vb",
  "key28": "3L2DtxEMiekasT92HnffQRGDyzn8ktBYhYuxKrxTUc1XPxB3nq9tV72zsb7zo64sPYR9fLFe1BJiT2yZN1Lzyyb",
  "key29": "2uGPZWnc33cW9iTM15GttXBPjN1ECSfjRZskasJbt1uBiEhYL6iLJvK9GjinwKBx9YY7utkCmEFnbuWgt6XYRQcR",
  "key30": "5Td6jxoY8eYj3nUVCk1z4SDKPZ6aCLwTt5bgBQfLZXAgwtykjVHTuHnXnHjwSb7EhfFwTLpcbwCWjWkiqkNcL4xB",
  "key31": "586s6stKxVuCjkoBxjbiwJr1fY1JBCU6f3cvALiEnhvKWuKcm7oGt7R5yVg98CJAVBaGJvUxLm65nexrrVYv5UYw",
  "key32": "2t6Su4oWxnnFstjX34By9LstnfpuVdnsP2vDdmtw59LqX1iAhQDGJYuS4oDbQYqR6QavZwSciP5TqFuCQWv8PMdG",
  "key33": "4mwwNEMSHLs15QQeHoEg2Ycs4kTjWxnrphfyYL3eshPorP2WqiZRcAkbxpZtzMtnZ7hHoKPxVq9ro8Gp4WEPo9zj",
  "key34": "4bp3tGCVCVLmQVhZ6FRTrfzVsSdtAxNkhbEYmp9vBC2nvPBB6Uua52xqH534CJYCSQRtQWkTfdspyTaskn5oaf22",
  "key35": "5STPmvzMFajmmcvmErURWF9CLEiZPBVMhhyWv4xXZ8dy2zoEbFZfWxpZn588ZsRcZAGExvBTz6vpbn79qxRTy4eb",
  "key36": "3F5Sw6UkTQ9yZKPPXybETWREhX3x3WCoNfigHy7Gpk4z7u2Ew2dFEJGgia5chnTHRnPpeBXhnAz2vbUndkb1Tzaf",
  "key37": "5Mz7ymg3PAwVKFYrBXu1xLpQHCdK2WdhatRcsAQxxHe1Lu9VCmseaBcQH6LUmGjsE9etsGPxpZ4TeWFy2JJ9sBoC",
  "key38": "3LQdz7VE253pdkVabXSoPGRNMFbffY7oUVzE4GKspBHd562vAU7YbbxGo1LwpJbYAn9hbjrJJUwE64Mh6dLZW6w9",
  "key39": "5LKMJDLFCG58r1jm1cg2zU848rvfHGSre6WtZaQUWmma5eac2uFqSYDe2aG5FtL1DuvnEu7vmHLcvvBxvoLYsab9",
  "key40": "2PJyD422DLN8YoRdKd9ZG6r88sszYaFgy3hDqBT5N1JkbVF5BL7mL4dDEBQxx666HDvwAPFswJuJjJpmoEJpogzZ",
  "key41": "4TGsKMNzT2ppou5Dsayod7RBqbdbGBB2h5AoQu2iWzPqra9tMfjinHTRYbFrBjme3Gf21rGXqKF49vJDbhjYPeYn",
  "key42": "2qeahgj5xrgnALC5t8zkZtzj7A9bKpu9PzsSd4B8yXJtepHokFrDrzhxax1zmbz2PiHd2sVuFEuPLMzvkxieVWkW",
  "key43": "4U9kUfdhvnDGG1AgDD4WLgwHP219sL29LQjHNkcDZ8ARzZhRjrfp7muvKvNmteJUb66Xd95UAo24BUo32ESDg3ox",
  "key44": "4665wPu2ppcrRvxt9AKtdMqi2StKUPMCdmzBbni3W6PMZUeGYoskN8WwCWM12kXoqmuYzdM3cBsB19WMCizL5rms",
  "key45": "22pHyZv3HZLCqgCY1QPAmSNALDucjhYSWnZzth1JCMc9QMDrf59h78hJG69THZcu7kBvKQ7CU11xmAoesa2RqkDc",
  "key46": "4GfE8BBS2pAz7JKnzF9YGpvspZt3g1uswzUCR6PGpZaKeXGpovNFegWKDuVnKU2AsYiYA7Hh7fdJ5TH9nBezPKfd",
  "key47": "39FFq82z1BB76WQDb6BpbSQbybqDFbqdorwHhrsVytySGmRn8R1yKwZBteFWxe5cX39DSHiyU8xBxQj3dLZk8Tvt",
  "key48": "4vkoncj7793hgZ7aaeS4ePp8scqaP3322VHmxCBRny8AjzzY9bPQQebeTDzVJ9CZdVYLPfmpFN6UbXiYnHTPUTm7",
  "key49": "64xU7gmf1Uc2nrhLHL2vAXKgZ6oHHM4GRF7PtPZQaAmfyxhtcQ3tXt4TRYxv2CjkpK5YvXAHX3Y6CnJFY82QWp7U"
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
