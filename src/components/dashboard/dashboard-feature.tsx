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
    "3pMw3mPxkR81NJMumWmGGFXUMXJ9VKePsa3JYVvSM1wdWSC8dssAPJWUm3eQmAdJ8AQMWcL8YwJzYV9PhCQKChLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66YfWQ8i95eTFFVKzYqKPAnhFVcCejKSQDBqNPAABJLnBsrraNcNWe23wS8GNRztxW8PqxeiocFgQofC7E7zX9sE",
  "key1": "pscQzENAKD49p9pkEppC5GtpmmsRxYxFd5mBZYUcFG51GK5fwzdEJEgAKh6xCvPwoMz72nJR9UFyBX9ppQ7NDaE",
  "key2": "TgTQEYeX1BHPWWFK1V5vSipUYNPfaSYhbpiiFdHzKNjKsi9hQXmgokXB8UN7JjqFkgUwHaoFyp3vmL8uCW2GBX8",
  "key3": "5GTwgQZvXufQhYDmw1n7g66nDy85ED1vKzhtwVfXnTpyGuGZbomUL8Yy4aqgQxyaKmmWc36yDMMxn9boDkX7NW1e",
  "key4": "5BqKPB2EH1SkEgXE3PFNQQDjAfWVLay2PYH2QzoktZsf4SVLtqk2R7eVTsbXtQW5LRwo56dtSnEWMYgtkS5hCLs6",
  "key5": "2YB1MHhmDHMzq8xtbXs8bAFbRdphdYFacsXVsXiaGESkkG8BN6abkW7dZsBWdaeAKygXowvE7Zt5twXgw1M6Kqrm",
  "key6": "Q2gCVnR6N5LmcmnsXcc6Db1svuhUPPgbkP16JzqaStkUiDvkdhF5gwQGYP7rgyq4aiSGe3MYWztJTXUbNUwEz1c",
  "key7": "FR8uUgm5GRRTEXBkEVGVki4ZT5vjVqpkparnmViwk2QCwZXJfK6HBLoV14wNdGQWq3aaWWmjdnnzREAHkCyMuzc",
  "key8": "3qh2hHuW16qkbwsQHD7go2VEtunRjAFd1RTHYWPfyR935JZedxuSvJdSUHCcZ2cJhA7L1fL6GbJbmGZyxoGzvqLM",
  "key9": "3vKwHo4eRBcyL2Bz8H9gaXiZd5sejFYYSF1nqxrVYheuoTEW4T6nGe5p3eyDpfTK1Wf6yqMT6EhJfoeqrmX3mojn",
  "key10": "2XMprVsYGyrmDFc5onvuZjUmMd6QV3ExhSuEqwXAwHDMQruagcJTwxxQa78R2PrAwjNADCKJPW9sFxhK1ne66bhh",
  "key11": "5SS8BaSsW8M1ZDXxeMn9zCPSvvvwETRBZbyoasc1Y4CkwN4kuM9FpMwmHYDkVVHoFEGCAmpBLuWz3YPDgGLK8Fky",
  "key12": "46kQXvwszBHBFCrbVEQwnLCMf4yfZYWoBAQk5YKY77j7RzShyMLRvphrVih12BSk5feLt3vgHEdAKcUxVhw2RHmH",
  "key13": "5gPWd57R9NoLrPzLw7okB63uTTfASgbU9AjE8z1s9B8HA85P7V5WytgU8rxgomwwKMCGoxesLYMFbXA9xnA7v5EF",
  "key14": "gVKxoG5BfPLKJTieLGp8PfPmdp3soaV7ookEaPtphauHpPpnjSsQkgfUYxXuP51WVH7Qk1DUD2Xr9SgyV1HNVrk",
  "key15": "3fC391z1yFak3GsepRpDj4k4RiGaixYahwJgb2KcV6tCnpRnf7NBLWyKkHYXWnhsMhasdHwB8ECQGZwo6hUkNSAr",
  "key16": "5fn5zjQ9kDRGf1dFXBg48bnaxvxRqUtNH27F7iyPCqqi8caxscsAd5CXL1rHQv1tivgodXyjj6giGcbP18TPHWnW",
  "key17": "5busWnhAsw2ZM9b9Gm8vb4ZfG8FWCZMsQLeZd62CLWALbFCaSeeH7CMEaSZWjkkuC9VLov66JsP4hDgdzwEugfp5",
  "key18": "5sSiB7RsFGuDNoxf76MZpUgGZYVq6heTHZoJAoeUgJfdVURpDVSQDkQjaNH7dXSryM93wheWmWCYDeqGEQFQ5RQd",
  "key19": "3cDm6vUm1nsawsCzucX1bHEZjd18LZBaXhX44hna9vsrg6Vfnecoa3wNGKXeRxPQzCmmV9xVKzttigBu2sSmWTX9",
  "key20": "22iG2yAASyv5DFRMiZytgkTyDjp4sBuuGBCC77zFkzab4TCmt6QM3zWco2rERx7Bj6tvCwTZusJJ2VgUTXzmntoZ",
  "key21": "4yTp4vTvYAzWhx42BVTvBEtMgWFyHQoJifvY8D6tPgij8xVdVtRJSLU9Xz4v1CyV54ZfDXEypEcP5Ccasm4DUEdp",
  "key22": "5WPKkfZmDoMWFTSa4vRGFdyMva7WXNyzYiqdwWufDSFLxhxW3SWZ44dU3cQh89obre2VC3kfCkBtx72GV2ECDn5n",
  "key23": "2iF43iwvhbq7iMQvq9wb5fcf958iJLEeS8fKAEUBQjaZjwEaBxQTLosehXVwYU2vLcHV1CjVk2xgPrzTU1qsSiCv",
  "key24": "4hWTs9AjoVUgyyXf7JCXb3JpkYc4mERdpHkmPWU3CKYGSgeUtsjF6RWHp6zAJYx4shtXbNom7USdUxXGaZz1QReS",
  "key25": "24dQ1tvap46RQ4PvzgL2tVyteJCmzNhvaqScugUAf8ApqSbsybLsHp4t8G2iisyRjdeTLFV8L6ikHzXCdqZLCfpY",
  "key26": "4FiTdsund6doXwtHPssu37SHvZHQyGehczvFqTUWkJ436ERDgkXZWFUCafM75WN3PBQujhXSgGyNoJC9hkr671ov",
  "key27": "f556yuqdSseGeVRXKt3GDEjuTkrUFjB1csrGphX34jY81u2za3hc9y7fkJyh8cVRaK5BvsLepJDxurETtZPZCks",
  "key28": "62NdG5VpDKocn461thskg4ccdNEhL4ZC5CmmSTX9SZoKZfsHqTVyLfyfyaJdxJ9q3khZzRkGANfztbWudGK8hN2m",
  "key29": "5nXcR69XBzvA6tYuKh7BkJbWiJSTKcpDHmrJhJ1Cez5QcRWYDYM6dNnZDAABLdqm3StoCgXqsfeidP5ZPyTuEZ2t",
  "key30": "2AMCyVTKyTEd5Gtfk2RE6Psvu7n8BRQAStSNm8fVvadqLV5d5xC5kT7d8DScVKUs558orx44N5s4XYUQsyyHC5oc",
  "key31": "BPMNK5o1wMoCQ3qm64xvGNeqGf1b8Qa5pyvbnPXDf3jSoHfupyLL7cpvqU7yyRK9HuQNuUwGDmeRQf5MCeXGSju",
  "key32": "NmefaQV4jvkqKTHTgBq277ixmtjcg7odnyD3EpWyUAJdPYhSaRdz9ESm62C4oKs7nsrsW9MC9QnkGGhqBe9MX6y"
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
