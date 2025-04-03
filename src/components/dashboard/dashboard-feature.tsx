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
    "4c5nKZ837wGKPZpvq4E3ubju6ZjMiKrvt55XZdFkmngnZTkjLsxpTFF3NUrCJFcMu9tzRwk9yJzoRxDXNCENWTf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mcJRm8CLmeBgzsm6KuLHZSiHsdTd7rGvWSA2di8ibxZEfjmxbmGLtHMoaZM8iPTA4pYrfco3qkTVoqHT9nKQpxx",
  "key1": "ruyn9uCaPhchGjDXJ16dxjurAyBjmy7RdQCvN9F5FTTYbfo79nJ3trPkocQHrAu94ESZHWjiJKgLbS4uvE7L2Xd",
  "key2": "3pH7EGQFNJvjV4t7Qcv3B1MhsH9cdf4yjrVt8gV6f9NiVEcZkACuMRBNFCHNuQ331du1E8wRtnSXv2sFX5cb6EsZ",
  "key3": "4ySNdLCByCQkPZ77eKHRwyt62v4mLZJ9hGu2HgRhV1obyHRKZfPbBrJzdLvb39Gjo5EB8nVAePC8cqAAprTg4M3A",
  "key4": "3ybJPVGWPwRCNCnULoJQaEpDePEBRpDGLCrWhWPyHXRDw3co5puLQ3Jcn4QwwXV1Vpa1qmABjwG6fS2JtmLN9Ro6",
  "key5": "22nuDsmqQCd1kYqxf1RTLDVGxovCQpYRzXdEyYK1zrWS1fvdC8ibE18o2tef1vkMNqq45iLgY6uYR1GTaoa5Uutu",
  "key6": "3DCrEgTvnJKFyqEBtzM6V92YJ9PdAcrAhQ8UVH5kszFnNF12XKLMa2o1uDSY6teFs9ZEzxCEXgCxbMz7H8igYhcE",
  "key7": "369YPyXaY7pzLCeHyYXAVc1ffZ5gtKqRSjQu7VFEF6Z6igMH9C9irfqkTE59rDtdXTua5u4mh57ksQizxZFCfNob",
  "key8": "5do4bw77RMHyBT4EmucGqDa1njVBu5EhiH3ZQ5uATm5WqcDjGThugSvhT4QQsN8rwVPyjmfFcockHVXfLQUX7vpy",
  "key9": "5v26LQz5AHBFFpSgaDLYxvuXu2KSgiJaPXeNCScG78A6TZ7DymfaNupb7QbEv2ugJftuyihcco5CeUqeJUrT535T",
  "key10": "2fSQ2HTVxUmrrSnL9oqfpk2Rsn4GLGJa5xKDh1ugBGH73pVaWsqZx7Cy9VZaV4UyBm7oP81L2MUJNwSUajADyaH3",
  "key11": "2M6f68cPpLBNMZ6r4RJYSL237zoVgWdNKobCYogwoV5u8UALuQ6NNBCQbDNowaTNdW3fLu7YB9hKv9bBgD1RUU37",
  "key12": "2TCa91UuQM8yshtD8xWuAGnDri9YWmm4qdeLk6KShRMLNXCromL6kVTL4e1uVi2GUr88LUg9vyBZDrchfcr6vqxS",
  "key13": "54XX6kQSfhyD9cv9ZUaFpYqGsZitFxjaH9NbwfAEyqF7eUWuibvpdHhTEkHLjSvMZYPEWJxkcRDRBaw2VT3p8owr",
  "key14": "3znBSinUL3cSJkMUr68zTv1VBB4MJ33HqEwNbxmEeF6C9hR184pwYkZiwET9nyPSYSGPKLhx3aHf8rdmc2mSmUSe",
  "key15": "6vjJQBiEuwTy9yFcsDsHiXGfBWy2fYzi2pNvMdJaeyixLTnJTjzH72mdGUdJHcy1MpJCDf4AKCyvZMGmmAfkrnm",
  "key16": "3tKv4isLYxAk6d8NgtXsXeSbwJC3n3RF1s9XFBEv4syGMqMypH1dkfb87asGKo7jaUB4r65jiwuGXKTJNbQbTBe1",
  "key17": "DmC9BNZ44VRoTBrkHVERT3CoRJnbm9HjSpFPivuebseL4seX7ie9ctLVRsyxwsbqzccuxpXbs6fknbfrWwzjjhL",
  "key18": "3asLBX6uhgdhHmHHqEacGgPcfYn4hDFcnR2PouvGWMQPffExtfyXtCiXdTj9FMcJuMTjLtFxyex1Pi7bxbTKpDCg",
  "key19": "59v6k9A3XhLMCL18VPnr48JTmShm8K3U2rn1BHWMeT9s42Bg1Sz5jBChtGghubZquQ5ZMJNWfRVEe7ffzFoHKo5j",
  "key20": "64UfimmzvdLmJAi3qvZiZZtJThz879Sup7ddGSUv8owaiFNrytcsCGC3z1gq4wLhniWnQePZFR7uEnPUcS8ucty",
  "key21": "ksvhNRRPmKiaXKdP8sR3GMsz6uJDsTxceNJCshontrdahDo67UzkcsvZVeBBNnjpNnaXge3r9c3QSxFQCVyTTUP",
  "key22": "hvDidnrrvQGbe3EijjPY7nFj3G5JbpXDLDZA17jHWWARgu8JXjYL2zYiBmZYwokp8Vb5VkpTyLgq5RTzojcoUNw",
  "key23": "PGgkDo1JL3i7hHXcCoo9kiaGrUXfZnQE5E9wvwDkEqHTifmdkUkjCXanpE6JA4bn1z4RVanjsPyNahZuddjFnJh",
  "key24": "2Auien28TV5bMac341LPkKxP21iFgxo7SvzbFSFjHMDmBSr7a5xAY2oHVxXG1CoYvxsiusqXbGWpC695Fk36SowY",
  "key25": "2yBaM7R7U5zDEF6trBNpeixhAQu4n8e11oQttLYCv7tiafUzvGRkkxMTkB1PJsZFVfbRQva8ujAT6hNTHCM1348x",
  "key26": "49qCftGbD2CNQvpGHev3nWzXZvG1bmZjYCFrrSs2aroCb5z7PdjPtWHjPPsu5eT14q17ESgjCc9VTNd4wMevu8F7",
  "key27": "5rGoEZKpfiHbt9yQpBxMRZCtjf7fKRAY3RW9HCbnjQLNjqKdigV7rJd5bkPt5LFXSAFyJnviBd2MLSgFzFy2qT9M",
  "key28": "5EEVoLbTm6rrgVzqu4kHVAJeeseuVaFMdeFhVCs3tYDvG9MdkExggQH5bX9sd26CpKDFpi6Kpw4P93p3Ztu7DkQy",
  "key29": "2Lrjh4toVkbaqBsRJiGzEZFC78qNm1sEA2ZMifgAo5QQzEaiYzut96n7UEbBFDwN9eDiJ18zKZLnSJnzXbooUo9C",
  "key30": "2gUM2zxHMMR3rEJkWZAKVx7169ZvMbGAMceJrsnSSkAnKn7jqvmaQQ3UEjd7JzQgeEGgRepr6DCqpb7auEcRTSYc",
  "key31": "5uDnzSEQ2JCfMPPhnivbELDCgpgpyFoYwdkoas1C3W7iFUmz4RiEcsuGBJck3p42rwUWawrnUsNvDTFHC4ka86qd",
  "key32": "3xE12tAJ3dFuQQGdghHQPLc3mDSCjCq6f5WxnbqcGUQD2yaPZpK2kjrdS3u4vJNY7oprqjT7Qhj3cmk71C4FodkR",
  "key33": "41TeuHBbz1hKpbf6cE3QJcREo3emLW3va4gnv3CF3DQF4SQ3c7X4GKkc8ZzYBF4hSHB6NUr32G8RgEHmfQsJUY6d",
  "key34": "4kn23NexYXFRAq8BpsmnD7xKQoW7jiJWSbsu9u6nvEvcjfCFkdD2f7FkAGRhY9nZnvZsECVER8uzYeEkz8snS8Q9",
  "key35": "5mQoEJ2bEovbZ9KTPmro14yvxZi84iJDQRn4PoB2cYkhe3HPsR6HCzGhGd3BE72jUyT897RmxLbkBktztDdCmUUE",
  "key36": "u7E5Ftyb2A6w4YyUAgdA4Z4wzrCtxFhr6LBLw9YUE2WUcjztLKL1EVk1LKm2FkuwXwbR8ahBLenR9QA3HtvgWFL",
  "key37": "5yvvoqmoB68aCXcEHNE98XUuAN8B67pMCXsEeNwfcE5W14C4TmhvNytHQeJhe9uKLQ5a1yGiF7JzXC3kdyGV3aWc",
  "key38": "63XgEG66pidhVJsNBoHbnqobBGk1rooHMbAfKDyjRSLyga7MhLnVWUGBddrHuTdLbV1Pr4AYtjWReEjMcsDU39zK",
  "key39": "8auBoFg2VEpAg2v2NPMtojgK4bk9gYwidsAK6bYpVpHpbG3p6PiN2KAxXhCh24UuZNik3fBLVJHFt4aP1oKgfMM",
  "key40": "21bCKcMB985rrAhWRTYm9m7cjx42E5fft664kZAZviewnZUArgB2weX2Uwqd87km9XkWxwjSphTUFW66Dbpd3t8p",
  "key41": "5f9eEkK5iqdvMx2MqNUEcsJ2gYkhtFynSXMo1ZxYBq7ZxxNCPnYMN7WKKUhVJsyM4o2HHYdYG2GwXhtC7nuqR49",
  "key42": "45woWGg5RVcncjftkw3f8Y1cNfdnC42w5n6pDsr5b4v5cGXcnREFSmGB88BYdigMtcPWX8Hg24uwcAB8Qj3xGPDm",
  "key43": "sRY2xFasVve6dUexLarpqZyL3ZFrZzkDukBkCLBa4jByvsPuXqPQ2sBqjYZvh9wJyrh2mRrn9SKmJqLXZEq6mrK",
  "key44": "2D5idsbEQUDLUYcySraKNrUAdUohqYhdoXkEVvFE2LctusCaM4u4Jxu6PfWzorRL6xo7ewLwfCkNLgZXBwobwzMa",
  "key45": "41LG3cNJUHegYFRL5yYBavhxzKgh4fzHsa1BMafX4CMn7H9aBgw9HC6rsXpAG46okdRBeJooJ7cKd3SqPtfPQEfz",
  "key46": "ZfBTQ1TGVLYynwuGhLRLeLhRohtMUnir2B7yDjtX4SdTXijX35FWxDX3TcRuY93CUMmJKebq1W7NcYe25QXi5Pv",
  "key47": "2ApJXEJbXPwpztyskddJRoFPCwN4sTfhsnVgHG8w7bpDVAjdjjrGHovqj5r3fXarrpp96p6Kvb9zmFMxqQxfeTiU",
  "key48": "3RNCyFkKFNLYLB14NKySB5p2bg7ivRZV6MrnMPopmnrxiRCxL8cMGknBHS8oLgM9VK7DWtxMnAZHGdikPrC5iTtU",
  "key49": "5sRmbh49W8VXzpPTMNBVLYvXHFNbNEGTVe7g7KfRSRG9denmEXqvdeT19CNfcXPi5RXGXs6Dd5CCdhJ5g797aetF"
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
