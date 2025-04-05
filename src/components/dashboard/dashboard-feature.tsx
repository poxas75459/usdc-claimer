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
    "5UFzuoEQYiuB4BU1xp43HN63yHfAYDjyhKfkVdYApNEKjR345Ks6hEU5KafkDX7tPsdFDDeKassWkHgome1VcdDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZTYqNeUFxzFL6zTSNgivn3WazUv7XNXppaeaniRGojpG1EoQ6qpRnDU81kmG17uTi5P3hYXusJ94N941PD57sy3",
  "key1": "Ar1wGSUYgS1wtHnQvh8G6Gorxtnn63nMUZMf1dyb2iZ9PntZE4B6VmCzWUZfUEZz5AuFtEZVvJoYHW8p9HvAAai",
  "key2": "3R4HGZ6gYKXK5CKxk1WAs1fBZEZqJonBiXs1Doq1wqq1Y86wkpLZxWbHCQHjk2F1nSwkqp7mtHVckmSQXAjysjeq",
  "key3": "3yJB4kVKegypY6wHozDkAmDJX9y4Rv4r8Gfe2v1edfa9ttKyJAj4TqBY5RZxfYS33gnL4YcoYx4SCiuaQebPSuq1",
  "key4": "2koAHLND9uHV1vvjxrfN5qNy3bHeM9nuv9J1hL2Cbm6ZUpmCdQ2QAp7sCRRSuSt4xaT88Xjyhpsw8nx3G4pXVP97",
  "key5": "XVvpXDJcbaB6VDguW1bNF3sfHKoaYPLkHEdWXrefpVTovEKT3Py7TH3acKTpW5h6bB8ADPHVD1irUGm4ZdDdkZ5",
  "key6": "483ydbMN5RKGT6gPpH1jyUMCuHkDBwDtjqiTWSYHcjrkt6dCk8kmqcP6icbT3sUEcWc8unGMqN84aAgeH4Z27Qqi",
  "key7": "4b7AhRegEVx64vf9T2NC8WUm3csLrdz8vkv5t8RjbWnqAHboL3HSnsyizzTfXbsLZSXzKrVjFrBRh9CX1gK285gi",
  "key8": "3b2KQufBNWYbnmVqiPM7ahsmwroUav9CpxNR7b7huXTgiWpaqYYAYMp2PdZiVrk8PuqQ5N7KmtDhzwjuVedayF8z",
  "key9": "29JsKJVM7vpFp8cZ2Jspc1GRtHbqciaK27dK613oeqUCHyo6G5azHKYsQ7sMZuFafxyuC42y9q6UaN549QTVu7oD",
  "key10": "59FUTCZkvV4kCp9jGRBxtND4P2dtvhBDBLgfSo798BLP8F4meoJ7HknxXDUS3M2LE546VfqPgMeWU53vW5sbZLat",
  "key11": "551hkTjti7Z6Z2cD2JktzLbNFi5TZapgoGLYiHTkcJGExz6ZirY8sfMAy7JGF5rytto7ah1rEUcWN34Zfkz3MuPQ",
  "key12": "4ujXp1BpLnwRHx9cxKMdwiHpShiqHgjVSCJbWsy7cK7ubJhKDcYm2mR6YYttvtwmuuUZyaYb4Z1ajXAydu4PNpvo",
  "key13": "4WzhTeQRxoEjAQcPUZoEeqvQg5rndpj8jEsj5ACtSkpLNCByWAH8PRocVCTmqGUSwbhRSjLDDSEAsbhgYbZ33kKS",
  "key14": "2mQHwv89CxigxZQQEDvuLcuAX8iTKRtsEC472nxaqJpkkS88Eo8BCH4kbcwJiNBSbBQ4rvrRErZCkecwYgYY7DjQ",
  "key15": "3NguRGgnVJ1cZUMyN7ysK2X7oDcxSa9KkhXDVenC2VLXkuY29SgUT4V8Kyynwn2gdepgnasq1wCGqPPCvenMcRVZ",
  "key16": "4EuiuAhecswRbHURsay84oMojMmQ5xxaBauDENN88z8Sj9hy17jDvszcExjVQ89F9J1WLvc4w5RBV753FFGsVniG",
  "key17": "3jTx7ZnQfeFYyadynTEcz3CG1Es7E5hFq1LAXxYZwdJeuz5Qo8R3MorrmbmYok2ZV5uvkB8Yj79QQAC38HDHkeCE",
  "key18": "2edsr8Lm4ykEuYvegNqjzeemPtFQZkyNY1h9Ygm4Vqhk6dpx3k8rDvqf775ga9Xxgandk8f7zzUTfZr2fyyiGYNG",
  "key19": "jKgFrCL54Ehu3ggc5PWGHTUkuY3QBMtF6oUJW37AN4oRbPLNVaBrK4YMNB3zgENLTAPyWUN2ybM3xZ1s1Enf3Js",
  "key20": "WP1JT7Fryfm5UjZt2Wph75b1r7NSCByqmDUkjifzNEpF5FpAg6H39PHkd7tZ9pKf1KNFjFvijyH5EoNrqycBd37",
  "key21": "4hnWh9XE9LwcANa3avHk9c1xXpPjEzsY6WrrhYwzuWzoDZuK2H7DrfK1eybMiaCvZoZG6ajKrbph6bk9mhLFxBc2",
  "key22": "5x5RevBHs8FtAowyXVoSrhwrGc9HQURYYwaJfaLJkPG45P8vXHUwFJi2KqBf49wUv1oYWRRrwJcRnzNzrgGu9StW",
  "key23": "5ihhzoBRsGpaVxNhsEQKRXV59ENDk4z9hkBciXoZYEsgX8FkjbZ8nvnDUs8cYs7Lgq2MEUeHF9bSGNFnLqajioyk",
  "key24": "KcVHLk1jDKN4aUfMrWg64S155DhCAB5SBpumHL6eLaxaYUqXoA1qNxvCsSUNwARxjHcCcD1V5qT7Fevh82nCN22",
  "key25": "3twbPXW51drQhWF7ddttGoHXhuHUQmnjUHhTmmxBob4XwfeH9nKWX967kv5R5sHJhtw5HouDGTVsJWKzdTyrcwfB",
  "key26": "289yZu8Ukb85X2V9CS7R6K3sq2Cqhd4JXrf9DBqCQZS7s58EMRmat24pbxhY2U2FxojiBbEpBh16apP1PfJ9rPHo",
  "key27": "5vGLN4ZdimJA3QVKU19iQf6YBgXdNLBmDLcy1ZfuCwRWo9JpEfRgSxt1jM5PjHDihAcqFpU9gHLJZ33BLgjVaVKr",
  "key28": "VgnHokxZrVoi2tA4dprhz44Rq1YrsbparJiC2ySPUPDsUePpFvs4PP8dB4ztySPgfMRYsrx2JmXG1Qfqj9hMh3M",
  "key29": "pcs8os3kxTQrAwf3eFdAMfDRoNGYMsxzx8PGzfAFC6zbqqPUxTyDXeN72rwoMwpj9tmCXsGZ2u4WF3Jn9yyw1qi",
  "key30": "614PKLZnSFfdLRwjXV5xZigUaFM1BPEoY74b4F5JQrkUCUaPFajA6HWJCYF4h8PH9CzVjmdJMAaKsMx43jELUbMt",
  "key31": "5iV9E6x4wsKByRsxGrAiEdVidcG5Gw3z6y6HUxA8bDWoFDAojwqrZegcmK3QKGRzP93fhzcaTdww1LMifKtx9SKy",
  "key32": "5zpDy2rcrGPkzjZSXgkpvEnfNLU8Zv9TvrDywbssS8sQpCNzXM4jPx8D9AjrXhNc9LpSWYMuCsF6JM9aJHxXFnpx",
  "key33": "5h1n7frvPnsrkNvjK6YykSW58x1daTvT5pEBfAnigK7p4xd5ZGV2kSaRJNFW2mnk8myf7pPN14LEo6C6jo7bPyXp",
  "key34": "38PXnp46yp5owKMBApzdZz7jPBsa82LGm1mviiRDh7HE63jJLycWjgryGfpHBKQ3Jg5acqunFFX45hFaX13Mx7RC",
  "key35": "3xuNZzpWRynxgVLuCci81mz5cyPDtGqGy73BuEqGxduUvo9RFGSDft2RPz6GTTuoxhiPdpstyToqWfqQXutHMaW8",
  "key36": "BukCvnGUgrTfV2UCZQ19p8FnzXWPQgvt75qoncRxcq2nkkxiPnKEXtcBnussPD67KnobhGLSpVfh7ax3rYj1ULv",
  "key37": "KqZyW5svd79286YDG65PmNVMaEtjSSXmi8f6Guu3sPpmHiuAAoy8HZxq8FyoAH4rqaJWJy3v7QrocXtyEKZ9WrH",
  "key38": "4rdqxAeHkJTh5DHpKnf2HiLYLmYR2nbUTbZkmXjDKyEhzeEwVUk9i9VMDxBJmjB1KoV5sKSHzT8vzfkTajL3EhWG",
  "key39": "tpmcTXwL1Ymj7iCM4eMJwYH8M9pbpAg11C8wvWKSrxjgJGCGu5uMkLT1Mqxku5WJ2G7sdmZCiuM98ryHaNH8e7J",
  "key40": "4BZDGRHHTWu6EhhHFyfRVG2WYLTeyKfa5MrGuHsu6Xyxp9jvWJEDokcpcHTFD2zH8JgfDTayxAHbiKdacK9nzgdL",
  "key41": "5UpATBZzczXeMURCwF1NmEj4baJpqERqrbg474j1rbvAHiaoLxibu9faxZ5sdep4JGtxwXxR4qDVoKYaLXpwinK9",
  "key42": "2NJMN8zDRfRZcxK8mboWAgAjBHUQfUBU5UoWUp3Dc4QEe6pHbU8Wwb5TBEzR3vgvqwLyvQQDsdDPg2uWVByfaac7",
  "key43": "o2F3A8ZFQEQxjASRzkYGCd5S7H5ARfxc5CHgkoJ6FVRPJovPxBtxPoje8j4s8Unyf4kuqCTg9euzQ4bPpPai7Hw",
  "key44": "UXC6qrJedUc7yjnZEKVQ4XSZFkqP3LiF4F4yoiRWx2dpC1WeiwibF5K1tRGY6q6fhYCkxpbHU28H8SabT64o8vH",
  "key45": "dugUHv9BK9SnDNQ3dv3HWk3rT4mexjDVvtA6zxGRhhq6WqDx1id6ton27gmaVGrTsvRsxyaVtgYdD8zBipbfZvW"
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
