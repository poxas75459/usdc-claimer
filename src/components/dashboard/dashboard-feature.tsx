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
    "2RuhN3iEdQgU9pjqNZTkihAjYkTu3k3JgKqnGzbtbjeS1w3kizga9Kgn2V7ad9TQ6PdvkzoY7q49zmpzpPgmqH5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ANBHtEJC2vUdwacCT7ECRg4tkB19gHSayP5hGM2DFuS4WGxBohxva4DXw4dEE6jkAfTseek7TSgdYgxYcoAYCw",
  "key1": "5A8uyJsD8kZrTh18agsatX3wrN7B75ppS6DztGHVPsNSHaHZUoLczS6Y37Q8fPXu3amc3BRsCVSjMzYekLC7xZbn",
  "key2": "3GJ2uF3UQLWFpWEAuJkEhRHdrBgEGjXxPYTaeVTtxzEpqZdv3QBmE28pmXT3uECX8owUXWCQKZUjbHBpdpHbg3hM",
  "key3": "5o7mNjbxj7oAfvC6BpYmcgAQXYXC7QcDHgzSgpF2GGPjAVASYKHQG5gYqf1LRxR5moKLTkquVS8cGK2TiXRUrL1a",
  "key4": "5jfEmPnit85g4f9aAQ5MgM3d2Juhjpm3iNN8WMJyWvYULP55DNy7UrRfJxs1UAihNrRTLgPs2aoD3X5Wzojt3W1v",
  "key5": "5wjFfuJ5THLpD1mkaoFKguAih9yex9E1rrvB6xEbusVYxekXVbeHJKp7VpemY9BCFphor8RdpCDFnn2g7qDZR49b",
  "key6": "3EM4yEN651BhBbYmBDVTWNEtK9HTdnx97iCjnCrxHqTb3naN46JCex7Tfb8orWu9YtEN7DD4GMJh7crtwqSeJPPc",
  "key7": "3qtqUK52tJ53PVGCCAW8XzE4qbF5Vrm4W55RqgHip8ZCFWUkYuGtw9PAcPAp5ABBuXZsuLgcxNfhnha376rZsTW6",
  "key8": "5VsRT7SKTem91UXnAFFXDRfJtMxxM3ANHd2t2eqbcW9RSYGFu4EnparguUcqmJqjG3ZWqKKbm7MAh74eDQA56wp5",
  "key9": "29oUSh1kLCqp6CwpccFoX3KV86hKyAkdXa5cKuxAaQv3HA9LxAvpWjL7jnVSSx6NZxKJLa7DJL2AJpKdUNPMjDyw",
  "key10": "3bYhC2MSyD1RdW9a6kzrxSLMnEg7gfn7nAcWQcmR8843kEYrofSmWMh4i47tfRU8xUDvvSbw4s449xPdAad2jzii",
  "key11": "4BR9ERByrVnHxBccmZZSUBZmSevDKSdVkMw1FPu3uMFEs9nouo9YLi1u5uRbrJfUjDwqyXmQkwBjJfaBuaae4Jqs",
  "key12": "3xPRgw8xF4QWPw58pHYxCnx6246Wutc7C9Fu3kpw1wJcQVaiT2LYsKSHnPmtMYFxNnRX4Ya45B4tyh65zar82Ka5",
  "key13": "8Xu4Wjzt44VAYTMC3tcUcsc7iB6waYsi9FZzWn3Jzay4Y1UYtgaEKCm7AxCadTauCCGMtuN3ihk512B6bZQrRHg",
  "key14": "3mijJ2sSk2tvcrhJsFJY3U8bFu6CLJiT9Pm3T6qmVuS6iGev7Tab5tTS5NX5sGPtdfoi2J6Tf1LYqRsh2z8uWrfH",
  "key15": "22SBhGhXesdEE6EHDtNqFbDdgUpkdaBRQnRRYRdjpZg3ZBrJoRpqcvnU4kqQvC93FQZ4gMN17XPpPx24Bxhd2j6z",
  "key16": "6LPmV5H47TstgiPfd5DMsiVKDeUGNtegiAmT2GYGkL1Q4kDQqVAUShGkrPuakYf2KY1EAyVFAcJGDiXuS3RWSAH",
  "key17": "2HEWzjfz8Ns1GT7kb4U6Ezwo4w6PuUoD7hLNYeWBthhamtsPvHCYZxMwfk5jgxe6kYKUJgRMVoUFdfy7zXgCwyET",
  "key18": "zdFqk5aKWiYWRVCEbh1xZxYfdc5koCU3N5zXGAqK1ZHes5G9jdpSbY1MKCofajroLH9WtvrusHZHfrmputmngzC",
  "key19": "4kvfuq7LChKQ5CsZqWjZqA3mwEfzxd1b8xbdL7w2ZYmteYXC7X6HfmSBc2Rp25Jeqwk5jWJJoiKd9UxQxSqfu2L8",
  "key20": "T2tp72CBNxBvaaUs8DV8RnFfvRxdoVM9aHVf5LLtqDJsTCJgur1EUnD1HPBCGekVwdCXaQhHz3dfHZf5auuqFm9",
  "key21": "5xjBEycMQz2cYfFMfXmbNarrBVmfdSZ12T6ecVxW9KaZfnSc23AXYGyHkUEYQCHandrFK97fZzCG4gMyYY7wA2az",
  "key22": "5tWNq9NaucABnXoLVnCDEGgRT4ZtsiFPZhQjtChv1Go7bSowZWrBJXeJm3JdnGqPXPrGfy15CTk54LJxUa4wZcHM",
  "key23": "2q22sTQWhPjposJBpXL1zTynceeWaR52AVr8gNL2vJGq7FQha28M6vrMoJ4nujz9uED7bRahcxMdAGhLri24Kj2X",
  "key24": "3TJStHc7dVN8stbJQW1eCUAF8QmCrj663qZH3iiMzdfmw3x9H2bnd41T8U4zfAQQu9RBbrRWYUBn5VXc28BBag64",
  "key25": "5sV7U51XCS1BkWddCUxSHthKx5qQWTnNyMjmVViipUKTxn8iS9DowA6ryTgJ9izNXgCvb8LXz3YuhTtSVW5QDDQi",
  "key26": "3kv7gnADo2j6qcdo3j4hwt17Stq4RJqvoCp4taj3gU3iwj6nPrioUStxbD25omYZFwLnPXqc2CxbNuVAQRsVT5pb",
  "key27": "4DQxuc4ATVD1M4pXuAF1F5eEutL3KigoQ2jCJTAGL4fcgdF5V4CyYnEceZhrBswV4f5sVYxU7DJ96Ty3RYk9QuMc",
  "key28": "3NSbsgZTBjjZejby6dry7y4dA1eX7DWVxocGBT2JVz1EPkFuQfKBVDeZpXbKiuUB5ZxhFJ1fF9kY5rYooWbzvtDr",
  "key29": "44Sq9og4LkJJ4gaAmtrNmdUqEfCuPXNzGitUTFSR4LDQdo6oMP6DhJNDKtnC7ALQnEMHPXHRMHDG4npSZUgA4jwZ",
  "key30": "2xydT26qRwJqYKMWFWmHEXbGzvLo4BBMjifUDFUjXwaW3EzP3x1bAukbR5zCD8j8qCVjdXMepESG9sGfxWaAmK6E",
  "key31": "2fFAxgJUeqfBBKA8YZUncwg38EFWobqu6SqDLkoNzMESti7DnLLUMsiNFac4kioihrPB2Q1aac8r4YxLK8rdNQ4G",
  "key32": "43RAvHMjyZ7nUbN2UshEgcuknCBCt742gqn1XFs8eCQtZUC2aiYdgRqYbusTx1SLyeru7U8Jk9Z15CEtybyekjqK",
  "key33": "5hn8eSY7tfuwUx4wCxaKyVtW7FPnaJHZwwDzfzrvBY3YwsnJaF5Wa9eGJawxA6y5oMdTKFMQDQ5RraJaMAjZdeT1",
  "key34": "5KXyxcYaCUjY1Kd27qWYcQE3CQoF8bhvjwrsk7NpVTi7L2AAXWrTwQGWkUg8DisSPK69dNL1okGwFjY2vJz4RQy9",
  "key35": "2TE5ewDwBzMX2VHi5SpUczmXxRuiw4fVtpQtLxgSHw2NPnCtmNMuscnbUU4SBY22GuREfagmPMBRG1FZTvNswojh",
  "key36": "61KrQjLMdy87XwSrkzaJXhpzoC3RGgzo8oqXB8tubfbqpAdaeiDC7mA3TM4DLjcvKnFRmtamhjd96xR25MskhzaC",
  "key37": "2dkxyp5sY1kUbF8bri9VBPM6KXpECrtU4QKzzHC77E2PZRgVDAXZCtR5uhurc73Hz43i6cujmW1VfdgBKeEvj8xe",
  "key38": "5FGxFxFrQ751TxwdVZXRcjdKrB6Jg6uZn3RMbW4kZxj5RJ8kSXMZTPD77c8QG2e2SWHDGj6xHZRTpUsHwgyAg5rj",
  "key39": "jv29y4e683v5WjvKXpRk7KbpnATkvttsRna8v32V6SvPWhTBetwTNkMEUDiRv9EgW1Y2VQK3qxuwiPeXrANhhkG",
  "key40": "5Ya9yCWDmCf9o4sCKoB3TRuSY5q86R1wSKcnKedPtCMxSH1VGFnqPVTzy6dKKKZ8sGwboS4cqc26HeCxK21xXqRc",
  "key41": "31zRpJg2JpWdcfGCUEPqBiW33pms2SceRqeEfhuEM4oLNq1DEAkiaeiTfU2aVxtZ5jKaYjbomAbj8e6q6nZWAETn",
  "key42": "45azJuvWStAWbKxsBQBTpYfNKKpGLBCWdM523hpyyqpXrntYzs9NSmK3P1fXko2XQEDyj3wKH3scpSNRG6ouvwcL",
  "key43": "3TvM8EchZoMJ4wqiAQdDqDRnpHbvrvEyzwHA46JsH7mvEEpNGN8dMp8a1fTEVvGoJabyRw2dESHoHME9UpSv3fLP",
  "key44": "5rvYSL3Gykk1YvBTBHVbhCLVG6BBrEmmxsKRfu6qW3MdNGubQMHjYXcAyrAuAwGUBQQxsRLfysiAcFSXBGE2HcnU",
  "key45": "2bTCC88dGBZXKaUtevknG7iCsSRQ1qFcYC2X7taQpkg3HN8axTe3D68kbvgLMGRLGtDeFQ1UWQGU1m6xmoQQSaMy",
  "key46": "PxN7vVryippfjYfkrhYpTVeVCtEpF2aWkbDHq2EjuwCQoMWb3jNh7XLKznZjcPwxEiooRzrvKbBLHPME2ZC6uty",
  "key47": "3yenkYVEbb6qLCik1akAsXEvZDb667HjQDXEJjkZJ1rMQPpCseRymdH4QEi614izdNaK5xbdpZ7cu44VbKf5k6Qz"
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
