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
    "5rAPNhrKbpqfN3wgunzCo4DgL7cDYYTunHG6vG2xbJU2fGoMwPKiavveTuAZWH6PboMgBkoZHizQDDB8dB7HUzec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B291zSMuQsBiPmin4ksm2j1CHMcPyxWqwmP9MtHJAJfn5smxBJDg48NMVxs8XddUShG9H9RRUcKvkpVfbiKb2qu",
  "key1": "BDLAD7ZZytG7nEcTeWBUK86rzhiy2kLX2HJadAvm2HemM1PMkLsXyVbzWkF5qN7ady55QuhcWA9cuFqvC55Fniw",
  "key2": "4ar1Q7zmVgKVnLf4VXWTiM159op4JoBgRY9L5q1t5AbeZ3NgYsBtxHbiJ4BTK1y75E77JjbxADBtQvTxnLg9jJhw",
  "key3": "HwCB2TWsyQuLKxrwSXTdZiCqvYRJ5hHk3x1nCRCCCuFKjYETbF8RsDFyEntC5K16SogLuREpwTzsCTjqfYMp8Bx",
  "key4": "4KFjaDyaTbaDtEZPuzNgVjRR2XabM3WAToz3oAehiRFhsKrmTEH4FpyW3Nep69J9jdXTcuSUHWNY2ggoZDDkgnpw",
  "key5": "45sbUVRCCbjZCvRz2TPLmNNodX3hEf3uLidtvtDEtbTQ2mNJAxzyHvHQFr3CV8uZDodwFhs5yrrWiw3CqB9jLZGp",
  "key6": "5trQZi12qxsjxKJHg1zdXxty4WCmmuLc4bbBLsP7aK3f7NHg76EPnoncxyxS885VD2AEL7rtPWJSbyfzgBcT4ebW",
  "key7": "AKbNJ6aPu4fwNq9d1oiPks3cG2SRcTtxJH7GjwimyMEUf5bgh9mfbMBxwt4yCtGoPCfM8vBt181mpnk77J7ZvUf",
  "key8": "5MUWsYo2EMJFA1hFbTM6NapY9mufVz7R5KThkPqsXwmsV4cRBjn76oZncHTxfLDzEJyALN5fZ3okscz8QLP9wBL9",
  "key9": "Zm1AMy24EE6pazeD9DRLGWbSuVqsAtMtvTF8fbovLhYAppMTPH1hQxWGQ8SLeDFhQ2f6cbVa6RNSskCKyNbmEJc",
  "key10": "4tG7mnXvVX2GS5gyEpmFrA7AoUG33tnsEFi1XRverVHNb7RggMAKbiZuBkpgwTb5Vipq1mzwq32vDtb1fvt6XB8G",
  "key11": "3tmUcMs34VAFP29eHBmoFr6QjPSDYUerK8yxz9QmuQFCtk5S53Z1ZBBHPnHW5tGAKvMMGsgVwiSS7ddYC41cMG1b",
  "key12": "2A54eZ8qiBm8yqku8pp1hRqoN1hzjCwMnThNXmKMg51FAqoUhNDerLAb3rs4WW18yujQ8XT2ytBFjQGgeKeCEDdr",
  "key13": "UJduTPE8VvYW53oUXCf4puFM4hsqVQd3GAvCzKeivcEubgoqUJxs5gQtB6DUsA2YSTTkiDDbzrKW9dk2V6VfDrv",
  "key14": "eqHtT8jSQa6quC3azD7ioS5AmyWpoynSkavYYGiRxMBMAWD9JqEnGmhFdJKAbuLo9pEdCEgZe13Emvz78QPehky",
  "key15": "5qyCtR8WM8sGtxn856QX4CBxYMJR2iDWJwDTfB4ZUH9Y8VYGvnoGuyewhkMHtFUU3eXzjgJiVwqRDwVaFLLhuSr",
  "key16": "4uDhQECVbB47FPpuTwAF17v18QShLXB7Xe7EntAMUyHgQTqDvnNKgE5fKqvkuB7ycBX4Teo8PwRQnk8dBv9AbaN5",
  "key17": "4c3JP4chasFjFqqgtTM7WnKvCLcYuUhTisNNk33rxWgFEpqwmYJSHraXAkWgXMURyqSQ2hXN2XrDjV5bbTF33zBZ",
  "key18": "61vcnuvAZBXiJbYQM7Y6xRV8Qx1UBq2MV6aqo1wK6t6NZyvnVT5AbxAqAqS1SwLmR44oARCnBXCFBcDDGyZrWEGC",
  "key19": "3gRx2o4PKS6MkernmUfGEZoSZJACjDicUfhm46yC3KYzkm1BMDD8JM2ww21WDw9SQFnnCx3Tg76fVhFfyCGCU5yQ",
  "key20": "5vWV9FPrG5fPtMk55DRpJrKg68rJw7NwpA1yQ3j8E6ykh14aWwh25aHyx5ogEm2R8cGUBpiKxPWhW2avE1W8Ke1v",
  "key21": "3h2wV7HEZozmeBNq5gvtKaokBAyoVR8DamCQ37D5Gunu49eEzEaoAvzuPioHsKwic1cDkWevJcLyARi2tcGa7sRU",
  "key22": "48AyJ2uH7hT7nfFeh1LQcbAB5HP1Zr1MP4zqmw7QnVr9q6cgiQSQTo3XPHmweVZib2Ne2WU1CxN56NyrobCEbudY",
  "key23": "3gARnbjz7deYdiSdtbMioS4c6sBuLUYYZq6CA1M8vpMyaSZLF1LB8U8ttA1pP6aZArKDbs81tRS2o6EbwqFHsmBQ",
  "key24": "39iPBVM6PVeua5imw75n9pM5ZyhhwhyM6AxGgnJtvfdtT5udvGk7VwfCyDwDawpqx3jBRf3crD5Q7fQx8gEct7Dd",
  "key25": "2vbWU34rfwTwNLJFKa1YHQMsMH2GubUs3Rxs9vxH2YAUamaNaeZoeUep3Q9joGefuasdbayiJkCEXFoifwU1i1An",
  "key26": "35cucy3g9BHLMnxoLGyM74UUasS5HgrWzG8jCEnJfFXqUUY6W1mWYsVdCYJ6sVUvbyEAkojHS5BkYS5cBXVMrXv9",
  "key27": "2Dhopajjo7bdsPRynZfyWixw3UmMGZjpnHeAPgGLZyq2uNFw5dekUojTWTCqNS8gtgww3sWXMnqoeKQhC3aXwAtf",
  "key28": "5cC8ppS6pFNJCGFsQN8dr4KWMXSQUJXniPtkEQbpspauHQxUNSwRNsUfrkd2VGK1eLAEJHnw9CHvh9WZer9tofmB",
  "key29": "2BXnGPRSir94KaXUQSJkqyEvDaHHYB6HLzBoZ6Yxr3BkBLvztyBzzvqcjWZmisom8tt3wUk3uUp512pVp7QSkVcZ",
  "key30": "i3c4H7AgfNvjscoeppfLb4ZJKyxzCqFH4ETfxAFPBbSUCETEg4hHKzv96yySUSmaHvC2BETgbrDGpWifncEpMW4",
  "key31": "5CWgwuMcKELmxadk6Z2Ss1pUrepUPd2jLQSdf5DWzosH3u2Uy7PYk86ySBzmRX1Gjp5JdsG4HvCESVgaKhApEKvf",
  "key32": "h7iwYu6vhdaDViZKxbWXKu3RUKDYkh8DKT6LmQrkY1cmHxrQZDgQGfVtmpNj188xpmerooZ8XWJeZK4ndcFkKoQ",
  "key33": "RwR72oZ9koi66PCbUNWrej4bGrQwajoBQmhjvhHYwhE4iz6UfNa7Ha6d53mpAJqtgf5E2WpuweSLaR4AX1Jb2CL",
  "key34": "2N4KbRAPtoCrTzKypXVj1N5r146HSeFSECqbnMZhiAZVoiDfdCXZkasMSPLWzYTagaMrtAMHKCrh3XkbgzEQ93go",
  "key35": "2QHm6xV9E84eXBVpdXKNUqwGeeniF4EhsVLoEs1bDkCrTrduCttnyikpnzJ3ujvVJsj8K4oouS85dcNLZdV944Rj",
  "key36": "4ZvDR8nzvD7Wj85Aznr87vj3BRH1DkaHCmVR9xLqtt22KcrGiFW1tQaXeuDtDVyJ7koNyLZTWDgw9hTBg8PcPSU4",
  "key37": "2zBTnW7pvq2zPHQ3xwaDVyv2wrwc2ma6FGR9zXKj1GzA8bVa1CcMDCdLprYWhda931iQezj3GUsYwZzQMAUtkmGX",
  "key38": "EwzQi9kwL4cHA9qpt4Sm4fxNBAukJ42m6EfGLbCmADVUWfg3EbVZwpX96zmNmn8BvyFw6w4Umt9wbJTiRz9rE3J",
  "key39": "Q16J5Vbsx1hHKpUktLU33cjVrV4LNKGPiJUtn4btbjUWP6qhvmx3bP6xva4sZEGnpWXgtifvJNR2e4m8mcd27iy",
  "key40": "5PQ3XTMh2r3Q5NMqDmoPMPKP158ACUb1yww7t2V8D9HYWDjXGXnyqUk5j5x8ZSabvRFTSAz11z9J84AHm6qmjktr",
  "key41": "1w9W7xLFwYDTypo3YoyutvzgPLQpg9YREpnonk7dTrxf5aBmS4YLTHrhsjs3gyTq5KTRJ7WRAMfjAhWk38fkwFi",
  "key42": "5thU6iSkoXStws8RNhDKQ9mPoAjxhHsFyR5SrtrWphofNLXdLHjHRn8ckizKRpSayroBaRHwzhrvarUuTzURZiwW",
  "key43": "46YG48biRcsDgFAReh3azQ7gnZEMTUcqyDqCZki6FWguYVdpcccuXWsgSFiF7hQwa7WYamFCu7iSZtHsXympPzco",
  "key44": "RAxZKUQxnezRAhwhTZ6YJqGnRRpHq9v7Jp43n9WywxzL2KdD3pHHg2w2bMPCt2zLxHLobxSFCF3efLwCW4zKoiu",
  "key45": "3sNs4JhLYusWBeVoc17SD1oYgtTe2Sv5HnqDyv9qKH2fAQEWbweF7ZpP5Bw2wRt8Vbh4fQQaYtPmevUFQaK4G9Xv",
  "key46": "47L9yjRg329Ff9UeeDTS9Qwt3v5cXBQdw6eaH5FQsWb5D8W8DqAYdc4ruuWXTx2AMaPGqfdooffZQbNAEnqp8uqf"
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
