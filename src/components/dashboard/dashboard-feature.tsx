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
    "4BgiitiCpsbTmiUSSCDvxNEzR9GQKK2fCq1oUG9A6rFaBW8FZ5ghT9WxBLa9tS1VXfbNLqgy5sb8ggmxu1x3Lyf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UGgUM7FZ7YGStjGhCFJqyBRWZZ4XCWQ6Buee52kaVtKguVsgWuq567ZpaAJoKgTy9T6yWueCkyDvxtpkLwz3Cjg",
  "key1": "32NNSLK7Bbahevo3EM4UfivJgHzFKvJRQuaUVcqUnUm8eauVWXoaYZ1Z6kkL7Q4aaArZQjNJfoBpN13xXYfeNFxA",
  "key2": "5MFPHXkkC4fygJNaD3i1gHpW79UA8Yzr474MLu1oXEVrxaRYgdiM3f6DE2Kjs2znAUJbZQp21JRTjjM5CgCHyCve",
  "key3": "5bMKi7BFYWCpg3EqegA6SQ1Hvx9XPY2ZpSi3uGiDrfwceaq3iHmBAGjnvH6CRgLZEcjgYNBrW8c7aS5wWJqx43vu",
  "key4": "2eR9tfe3X6QjMcHXMw8SP5uS2KtKDaiYBEfBsMgNdbiCz5uQSSLwpc7DSiuq11dLmzygmNBb5zq48nposSxPYQGF",
  "key5": "4DHm4EpyqFq8DaFNSPUw1ys6Tjvyy3GsvAjDFcM1AWL78giz47g3qmwZsb2MtRTUTT6o8tMf8jSwy8iz5YV9Fto2",
  "key6": "5vGTptEKhJCYdtqeuPP2tkH7E6rhtDhfiyagjELin8HvZnx6pSfesxBjAPsND8HU1ebMehCD8HhvhCA7Cs96My5z",
  "key7": "5JpWsejEDRVX8BJR74F6SreTnAKdLeXzMP4UAoPx2BChLdVSpPejGwMAv2Csov1HJ2jvKWmydo1wHpjp17kf5zM5",
  "key8": "Cq48FNaWhEuThD7DUrabAJTEHzKKkc1n9zNotVhS7djThRHsyF8zEPURVEd6NGCbpUej9xmsLKLa9Ygb2S9PJBv",
  "key9": "2m2ENxzicwhJaJ2WGoJywDneCEPeDsJbT5wsz3K8SHKyPrtrMEQt6W1rP7xqdjgB7WNxwESVsP4SuZMCukPGG4ed",
  "key10": "5tADskpGBfLmcW7eSa3HFQrtrcXReJ25diqzEn9xtvYY9jWs1s8gYWHKrWKqfzAAeU8yzTCGTVj6ri26WvBYhapD",
  "key11": "2evmMNYnLjKhE4Qv91V7owPwtdw8LtnSv6V6Z7dDtReXsaey5zpe1MNFfU3LmxWBm2bNYHY5YQqw3q32fiwefvh9",
  "key12": "4gr65orHLWYt6RKBRndFz6rz4FFNYqhfxmZkjUG8fdWVV96E3F663YnUDwgYKerwHyXNVrC1ZApdcjpbrE1i3U7E",
  "key13": "5sVzKgkuxGJu8MarYm5nfbda7yorXQKHP3WgRtSZGE947rezB1dmWkmuEqC98MG9gXC19Yraif8JiypYaKMjnv8H",
  "key14": "2rJFYgEbUFX3R83HcLHPVcnkAGsYuvo6SQ6EQeyJNxuiFibq6LCPy4EBYCgTeigqMyvhXBTH2R44j9hGXKuQqY1L",
  "key15": "2f69fTWhAXqZLG5HKJge8xU9x4bavVwumW3mBbjTrPSjV3bnUErr3rdfWUCok5yNizK3LYMp4pPCNUhjuXRTo6W3",
  "key16": "4DyLvEPSj6MVEWHjUvfk5b9dn7zWHBqzymXXjdRaT8PGZ3odzZt5qhWBMNKAWDPiPdUQoRBRXyLZLEDqQQnkNoUn",
  "key17": "4wickUmD69LiGerXMrvqGA9FFMqYm4kjxZxz6fKbU8GrfWbxsDg58gZSpE4Avm1Gc98PB64Qsvj9VcNz19jGubKL",
  "key18": "5vLG2MbcGdnAU5nKWMYk65PguhR5ZudEcVXcWuVGCLkKfY5k9HPg4tLzeHKMzPRpwoRV8WM2xE1wPNYJBoR7QYRC",
  "key19": "8xUwmshrh5eDCBdpife2bT5NKBFu9Ad3HWE2BoUkjqueiKjzv8B9JysfS7A5cmeB6DjwKfov2Pbi5ZaqG37KAE8",
  "key20": "5npGSreBDAwqxnZokEgrNwqjxiUH4GszUiMyyt9ytsBAyBmhrH5wDbkgdBkxBn1v4S7ej8i6mDDEf3ReUgoWqa4n",
  "key21": "3uppZ5JevUWPwubqYMgzeJc69dzQ7C6Y9Catxnkw2y7PPVYkH8DsinsKFYbPqcp95B3JhBbzLZB15wQze8Z7pVcU",
  "key22": "4we4nHdJgxrDPoPsgUwGz1s6LDq2eSkvAPCAzeKg8J5dm8JNSxE5J8xuR5GcusWakXSrcCzwSPCXife3pKCaD37F",
  "key23": "5UGYpijuyiFeA5f7vg5r97PLysUnJE9qgnkNiSqTT8jyuzEzmBirsQUSdcQKPi5vUcSWyMbBd6aPd9zH3DcBfdzB",
  "key24": "3rKEdhJk4QsHp53Xwu8aKBX9zBQ65WTxp8XqhvDgjejcaVVFqmX7TrX2Mt2FWP3a1Bp2BLnoN67avBaZiBiWKCZL",
  "key25": "ZUnLoZUE3a8bi2hpNDtCRk9ezpmSCG1jcgqyqV4hBWoNY6tf2wrFf9MQePUrv3qzr7hHtuhrFVe6kRZLqJJH4QY",
  "key26": "1oQPdhZhUJNTFvX28eyeCgK5abG4KzVWpxxDaAvCPhUhWLQ91r4bA1Ufh5hrPUU3oDkCqZLYgFyHjoWEBuqa3Xs",
  "key27": "2Z6Hiy5ArP73xR7QsX1uUN1w2W9qKmZE1Dmokoiyw4C1QKZDBMif9SuJs9nkwreXnfQALUwtdyqtzEfcuQoL13UZ",
  "key28": "2ppPc7bcz3VeT3kX6emeThtsbR4XMea5DXNcKMdSkHsW7bWNHRkB1FNLFzLA5bC6XvijmgEghthozv2WCcve6L9C",
  "key29": "3Dz8akDmtuwfgPuFYyXngQLUGJPqRDYoUzACLf2JMYwsaotEnbYDzommSSbe3DqAnpgxtcwdk2qYztvFaRVV8KMT",
  "key30": "5HTYJgvEsjxqSA5dUfi3UgpNoQraA8DbqB26sK4K6oLsw9cB29oV9YA7gTAS7eyQeFpW6ZLZiN3cD1XVsPCAY45G",
  "key31": "3tdiNFsj6i674nfUXPnPW2Z4ipt4UCuKbQFrBribonfDJG6BecfkWXhoTiztbfu4PnHUdCLmFY16VGLEbFAs6rwX",
  "key32": "62umMGNbDd5t64MESRK6dv7VmnfsYdmQbVtnzdM1Rbk4byeRqV5JQeYFvNDTfkNYaBkVCD4cGNUadkF2i9KH6koe",
  "key33": "27D9ANBPeHJxyrD1Vb9GF5hBwaakwXebyW7vpgRMdTbfqFWpqmypqNaQrca88HVfba9tYZXCe1cujQHRfGZ2ZAKC",
  "key34": "hZ6LXPYMfMxdiJHXqu6cW3QKF5qEtAoE8ijBpkFBhgj1QpGdynPjC94T5g7dRrBC37aFxU8s21sNJqjaVikctAK",
  "key35": "62jPf6HwBzjQnj9xZwVTY6tK59RfZdzQ9CnjuYHxgdXfDM4a817Dpt85MVzLcs28cZdWGiqLe7efmcXLxeRCshW7",
  "key36": "56UCUz9stHRggEHw2AeuLErgF2WzkQspaCStpjoLVRZF3RvaTZBuwAaiWJVm57GFKKVRbtukAvDNbfuzAtmLk7BG",
  "key37": "2Yf8TjRETrcNq8efqD1AuqbisXz4eyVYph8Mu2pToVQve6WNnu3a6LfexzrvS3AVm76WRCc7Jv2xuLGZwHMw47VT",
  "key38": "3SjF1mLb5fkkRcrFyRwVsbeLfenPEuHPvPQ9FEeUQqJEW7scieJ6kbTj3g1EYZ7sxxMDJUfgzfHWbt1KB6p4fmhS",
  "key39": "4LPg8FzWL46QwXBfAZhsRSeboJeYN2s9EpT5oVND5UKkW5iWd3fkDEAa7zntmexrhJBFPRjbYc8jfAq6ysZwzE87",
  "key40": "2HNakYCJ3pBeiYrY6214rLQMo7DPLPoomZniR1ZsLq2H9c6iwr986UvSKcrJPeLEtGBVRGE4gbEuNhWphPSBTSUn",
  "key41": "S9ToU17zDDYsrUCRhiPgWasijwaScyC3wTwXi3H7smXWfaK7vmPrgYPJmCszLZ6esLE6ThEdqRqUZ2QpKNtmCTP",
  "key42": "Rd9jBaF7WToR9MDMzjnV1Lbiu7TnRPjjwa1xuxxPHoRhhpqwMZQ1SzjbgEtRXLoajLaPeAeaGsqWL2F1JrCNs9t",
  "key43": "R9Skdx5rWfjR34394xHeb9GEQ4KWgkzzdan81bgV5zgGu4LSm2QNTM4h31TvUCwrNXgpBPCyWhXmXduWca54v5Q"
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
