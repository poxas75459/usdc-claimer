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
    "5WtLrzoNPWTS2FDd3f7jjxUAYt8oydZL3CLRHENjtmEbydrQW6F45W5Y5vSZN2U6mfah7yWkSM5SHvGiqnJbfmEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zGsf7d3sfrnjeA5PBz9CyVvijGugspUvoDAcz4BXjSS2BxQjX5JmX48jGTL8iNTT6Nygy3ub7RYRciAk69wYEkC",
  "key1": "k1LLahaSii8LvyrgfNnKRcK9VavTU4KmJVbRc6x5VXCLFVY18TZokvCQ41AMGLmnfR9QsemZZGwyaU9pbAAFxN5",
  "key2": "5JZ1sE8z9Shxig2bELWpAyHvoBEU1R8pGZi4Z1WFCvd6LMPv8izvu4DLCEmmzFiXYxj6VD21cXgwSPxP85t3fzR6",
  "key3": "3khByPDowgHAKJFmX3jFgN61if5DzekfERFohwcdPsJ7X4ZJoc8GQbJxb8RwKbjHBBdZgpnzBzEhCL8Hi4zVgXW7",
  "key4": "2vi1zgjXkEdZGNURbyZrwNEK8u4hSKdWTV4VvNNBP8b4vspSbGfStkAWiycmHGMVjtf4VBzMUnyx2PydKZtsvdBS",
  "key5": "4Rvy7VRQFFvMKrtzpcxjpDHKerKxCwgzSTBaRra87ZN1xHC6Hu9FJNaAeasBnNaFdqHmBGMqs9PS6FyU38EuNNwN",
  "key6": "53786Ko5yap4N3iHDSmtQQMPJdSonmz37qQETjxg4K6nJ2xUo6Do6V8uksfqqLiGnYs5yXwSQ4kicrrc257zm1aV",
  "key7": "22ynvwNDNhDmj5UWzd8pvFYQBFzTrEAyGpLDe3piTMLRx4VRuVxjWqdUuFnfHB5vtjUNzUcUzKZEv8VvPJyEGyuD",
  "key8": "3YvHomLRuNGZRgfGi3dRdXaYYmmmNRZu3rxPDQEPb9kim1ea5MygPJiP2tvz57LVeCB3vqXPqt3R9QukyhVH8S5G",
  "key9": "ak31HuXCbeYpTRk8FvBeE7fJsvC61rLWhh917EWvDErWCAWV6zxg7yktsocB5r98r9uXNHDm8GSC8LwSorYPD5y",
  "key10": "2LtsZY9aRyYDgNkjrv3wCz1XuQHLaVTnQDEU739jxWMNaVynPRSV8WqPUaCsX8nCjpienXwJew5mPaWr2AbXs4Ee",
  "key11": "4dGBzTvkEZRtd5bPDU6RHE68KjeW1gcahJT4g8u5FtEqM3wrVr7kzFSc3NnVGvxcA53yAmRtntubeovUibND1B2d",
  "key12": "49Txh1BqEeD7GHECbmsUM4UbM7pwnXmr8CNxpnVAuc5Y1v5ubTTSzFBQjVR822N6vk4D2uWRXGa1EHGCoqddgF3u",
  "key13": "4oFJpsFMJM6o3ZLNWMg8uma9uerJvML2H81unc72Wk1ZsGodeYF8NaRxGa2h5zKLHSyqJhBZRKzCZ6iuVnKEb97s",
  "key14": "3uybBJ6RKjqUGXgXCXxNK9MXEmMQG31DFd13fABL1Ezutw1D67DZnHzf8Kto4E8RiZhdAd6cAHsPH8hwKvg1WE5m",
  "key15": "3LtDagaWBXoryUiHdca9Dhe6vfjGKnZY7V2FGKrXEhXEsyrqSf3ePGNNNcgFBmcyn5cBxprLG29a4hjJ9JgUzf5H",
  "key16": "3ncdifQnREUns813CLs3NueeDKs4cfg5EK9B1DhPkSV6EofQCiHJykAmtSPy6TQuseSTu74WXzKBvigiTmyPrGs5",
  "key17": "KHM6mZA8awakj8VxFmzrtPS3GF2RVqYgprrDzcWFqTYprZCpq7e2WaUhKV2qMtJf4HhW4CCsqDFX8CrGdnojxti",
  "key18": "5GaVxhyLidUTzyQiU8VbKsTKHt3s44vKkcPpBcTbbxRZRFXx4jWAcfskEyJqLDYayc1iqSCQEKSWb3FUPRG68QGk",
  "key19": "3R8rS9ShZVgUXwhvX8zA6tUFGiAqTdA6JSAvKvJR7Lezf15BCKtKQLPn7KV3CA34MP9Cep15RmwMkjdMzFopX3F3",
  "key20": "46v39wVrw6ozoN5aEHQmEAdLyF29oa22UxXYSgCD8ZVwKvBQsZFgaPauSKAtPPwDb7kEdJhK9cu1xuExJCUXgmQJ",
  "key21": "3eHuzXJXd8qi3PFQVVfdVoU9Y7bpvWQeXsNuLH1YKwQEipyZXeW5KzoeUKpmMEX6FbVu6CWrjHzg96ZKwoZzA3nM",
  "key22": "2yyF2KZG7jYW4bjFwW4bxpu63ngR9yvURhgvy8RHmAi7CYMt5Y5bPwe3g9w2nSZfdySN3YFnahbjXW18aEvcqQgG",
  "key23": "46W9rrFXNXEZQ7VTBgsPWr4NBcsoLi72fd1ZRX7d7JPZg3sHN98LfeQTaCx944BnWbNToSJc2mArAKzfyC2CKCcg",
  "key24": "44zQTuMw4pPt6GiB4j2DngiCjTKAi1q8StCZwd32mWhBSgX5nztnYv6JfRyqNntYN9ya5HAEFgrHZ4Vk9gkkYg3a",
  "key25": "3PUfELGrpU6SF2X4Jc9WY3RVxcqMCxz68X4EapUpTA21Q3Ciud82zdRb114Q6xv64H33Q7jfAV48h2Z6o1JXVpiQ",
  "key26": "4RHDaXfn4gwhRuBhhLgD6BZqpuWKvZMfN25jLUa5mco2iL2gsjL4wV7uU3rJHxNEA4eXHktn3CtdKeCoBDsvF2KP",
  "key27": "3iQrK8ovL8f5KuVXS5NfWnxXnyMmyrVYq8t4WLNQUf2GQnuQ8ffQW72KNtKWrWagGVjU76DHhLVj6XR8tDm1Vw1J",
  "key28": "4EGAJEf9G8mVYTkcBJXtCsGGbQd7NiiV8PdzyDs1MLdaTdJHY9Q2aLHVyCLKYZirB7Guj72gh3haTrNWvJm7bsZ8",
  "key29": "51DFR6hQHfKcnAVNiwrNj2dLwsGZAcWYPNVfGoNhwWKPTk9Dza9BYhUKN52PZGcpRfNgx1FCotdJ8VZqnBnD2Luz",
  "key30": "2guBvAaPs9hyJZ1wZFwy3mNVRNUGMwPPAf3KGi82Gw3haGfpXWEeKGJ2Fv67EXAiCLo8heLwjNqE8zGWLujcrJQK",
  "key31": "3MGX7hhMe24xoMgjG6WJSZoZtTiewDn9V3TSGuj4XS5HD1Zh7SmSvhgofPygNeufHUa2vmSHWik3EkcuUCRoPyHe",
  "key32": "5rZ8Hy1rPX6vXTVB7iHhViR6iuK7znwxFGPh6nzmGqppxRCCYAHtRTHgMQYELppve634ersctjdat9xzToxQGwzx",
  "key33": "66EMMAa2HAbH3dhDQWAhQVZKY4WXTEGaEiFA7jBcrwMFPfQnERSYtXHx4mgpqZbPStkbvfJ5aK68iPjkXJ4Am8Sf",
  "key34": "F2YswK3sBdh1zQztmfJpcciBLhvucMqmysMHUhWqMTXF4uA4SHXoLTYfzM9KAdeK6hsHnecNoJaCsek4x9kSAWb",
  "key35": "3KQsEhAoJjSFAH1GjSAAd1Drhhw23CNysQBAHDRgi4tgCznbeic7mF4nEjkcK3Doqp5mhte5sZoq3qHx6m2vPmoT",
  "key36": "3JD3p3viRsvitZ3aa8VWX9wH7nsjZ7hn6NCCje1CDtAasip2xNg5WwA1MxPiGZ5nSiSpLLMyo67GTTFgccybeQcw",
  "key37": "3ynabhQUVH8XnVkWBwKdSWNTbJNXT5umyFX4PszWwDT2rfmkGR5Pfq6sTqsMeo6UC6eFZMFc2AG7VjT2NP84nbq4",
  "key38": "3XH8nZPUnaJqs7GfakzYQVZTMR739Y6vsaNvrp34uc77MFMzrh2JGPG2zrWsR2eYrjvBq17tPVED3MvfLdXRs8vL",
  "key39": "42wZrRfd4gyuKdAxNo91wgCJKTjcajmR4UJwsDSEkM4YrwdF8S7E3bRzLPpYZ1YSFznFs7jb7neo7fLwt9R4F3xs",
  "key40": "22yJRGzCSnjXnmt5GXsaAHrjY63xhvSgLmNNUNxdqsAqpGUVdaKBBnUKHcFB3GshBF66eNwpFg9K2cB4GqnPCRfv",
  "key41": "3f6bxgPeH7JLkWgzQUhvn4TUY3nM54CVEuSRaaWqrJKbgfeQeKFq8w9jAau4JDDnCiaSPSKoR3AChm4zLMmVFhZE",
  "key42": "2WRrEcxdombEfPBVXg8ALSDWJcFvct732cVQwroLCHQ4qoK4CAgZpaCVqbrq1qbggWpsfrvXTuSxu2YDTyppGZvv",
  "key43": "26JTXaTLWNSTx6vMwMf7itEXUvj6RzLjmKRuNjdebk9ssQCJytg5EqRmV43gu4qoZDohfxBo8R5NBfUyQVBfacJs",
  "key44": "2Xe2HQPUJ6n4a8S2MEUPhhTSAaVUsvjDrKufEuiwFxpfemSZKPNaWujBwzpjB5noiSTG8c3oWwuxxYbScnk6SGjn",
  "key45": "iBsEitQU8FbqhCuBBC8Xx76zMBTsQm5BoYn6g7d2rtQunfmaRP3pWrQjg5bQxWoReyWfinU5X8exP1Ezufu9sZ2",
  "key46": "5BB7y7ekNbo6btPP8LDybzTonF2njYPQHLrKnPymqax165cSQquoGgztAEKZnfeMRGKVgdQJ21HJdURcstaikisT",
  "key47": "2AcbQwk3J1yzcU4QuC2XnZwZacnCXRA3sCNj6nNDQN7vHQ7EqjVpECJshAMftAj34wsuvzzPocnmZtqrrB8c54eh",
  "key48": "5Zx6cpKwupXAiaAJvTMniHq2K6pxS1VQDixUBAP8woE2YsGu1Ehi1aZAcFrFgWfUVgMab2rScnhC7bt8UHWmEfs6",
  "key49": "2Z2F8arHCu8Gsdt43qUq7fzWxiczWoy73EMh7HzsysTz1kJxxgj15bciB3j2SrhC7eASxoew8ENapEmrRszjHefJ"
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
