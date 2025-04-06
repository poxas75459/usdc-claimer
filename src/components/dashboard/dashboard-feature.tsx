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
    "45GQMxNUTFvBYmoQ1Aw7RhWzu4z9bzxboYGurMmQipHfWFoW6eZPHjbreo1k7NPN4oF5RRejVi3ATg3Tr1Hcag48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7L8LPyUbQCTFiaz6jgTXEq9Ymy63EMxVvxkBsimUT8wgskSevnGmxPUwVLxwuRW3TuGUD11uswdFFa7C6V71z4",
  "key1": "2opF8yMGDFDuHrcw3GUqeqgZCUAskEY2YzmypnFDpt3aBRVgVZVeMAcbpF9FYcGD1WJQza8gHTWpph2E5V9Uv83t",
  "key2": "24oZsWHS6WSBtUSRZke1MYEeHeoyJR5yZnEJgmoraSKVFqJwdVZweRANCsviw34KHYgmR5W8CjvXE49S9JcpWrL2",
  "key3": "Bm6zHLq2mZxd8pwhWUickZgUrzFZ5SDGCGNri6S9oBAP4SEE1Rzii8FFNfYfichQVMvm95ERu1o7h28mbd7Zc64",
  "key4": "4canDc2qUvVih9qo1gu1CyosCyiUEJp1q5cCjUpwLxXTEMTZFtXd55jSffSTTJ6s25sJnoBkC9U7GL18ERs9NZvB",
  "key5": "5mFoCpzyqc5ajj8oo3yMt5TJ5GSHzU3VJ2G17v4WhrBqLAnzZhTbPPxbH9NThAuLzY3aTnzXs4Eh6955EJnbupYv",
  "key6": "5w5u12uWfnqnjYVJ8EDfJJteoKEvjhKVKcvzv7i3VoBg3E2idQw4oD4MSPxMUsDE5jtwxLjehzj888QYYUKfDza7",
  "key7": "67U6QZY1UopNG4RfZzYvmAwYf5WQ45MovN7sYUwyC1dsTnG6FuLBmzdcparAXUwibEZiTmdgY4d6XcfAjB44vvQh",
  "key8": "5sr6ZJ9XWmnrNFtr4gMcZZiHB27hUxhPL4k11Vw3dy87MmZv8ohga9jinVumj3iCDbYKVb5v6XWwq2QHshVXZvm1",
  "key9": "f1LdGKAirezwHwmq7ZqKiVmUoQTZZSbQHFL7MAHX4DypsV68aqKBeD5w3myxj1MBDJnrT5vDvzpjrdV5q7opnTe",
  "key10": "39jTjwTfLWf2sGvXZEngaV61TNxT1aqzY7Ye88B1hTwMzaVtgTjykWyrVKxUxSs2epSc6JQSvfhntpro9nzMKe3z",
  "key11": "22GKPnXioiZZ3wDi4dUFhSoQKCKcXtqAkqMA4T7s1b3eHwQnUCtdrygdoPjGFDVuzhVG3ZCk6PB6dUoD6LPU3y5t",
  "key12": "3PJEFo3Xam2p1n8p9fZtDZ12BFqYmLSrVL6eXDtyFX3NKrof2ALEDxhMX96GRvPttX58eT684nfKfymuFkPc9NbR",
  "key13": "3yR1tvkQ4gBHXKPVomK8ZSJCC2c5aCFfZSK2QXeSThHoTxB6XYJBiPwHZo3VVHnqp1JuEBre4ZTvXG4vrJkz3193",
  "key14": "Gn8JeiRWVgPDpSyr4ix6w4prgiL7FQK41TkCfFxtP6Ragb6M8xGvuyEyLL4NWgboThMh5AoA7TAxTcRzeodUpXA",
  "key15": "4St6KtTTHCUEithhqhtneFCs3pNERE95q6vuM1BhnqsPfxaea1vHJcbsgLTh7CMdvFSpLfPVtJE7iXUNMZGLKKNR",
  "key16": "N7omZuPL9bjKPMJFeSay9Pj7xYU6kYAk57D7m4Ee7pKWhuieWq5r1K9qkDVxrTrfvyxDg83UMVfM4dFZNfTFkfQ",
  "key17": "5qMDJDTpun2QvMSF6S8a9GAsacoyFQ6qNzGGnxoAMaVBg59aebWe8eh3XMbVzHoRzDMcQieR2JwzR8SmvzVGSE1k",
  "key18": "2uNcrf4BRyz4oL8WssBLt3zCwZiJJEcwqHgGT4V5BZFshjdAxs77p1DzsWVLkfYjUL7vSXKdU65jfqHJsDA5WnU3",
  "key19": "2pq1H1c9PddmkAWWgYxoUAde1amuT5mNTXM6fbuicp5xYTfasztZUWsQFqLKhsVrj3SHWv1AFEMZt3gE2xnxgVR",
  "key20": "5RzkWbLaxRepKRaLtjRT5LcHd8GWVcULcVCpqo46ma7PG1YZDkCrYM62hiCn5LgbG73nHwx8CTRUMeyNbDWAQ2e5",
  "key21": "3Ug23HWGttBvTSZou7JcGDK7ZycYMVHUh2Tqxw7y2zwCGywTpgNHHMo5HBcb6DcgmQHsvjHhsBV63rg1QB2cM9s3",
  "key22": "5zoAVkdEoE11HdVy891Bq6LCCiWJTKrKN14AdjkgbJS7Xh56DPu37RwriqH2Pc5GToKNbp9nW41Qse6E8ARTV8xW",
  "key23": "u1nPbhaytY23bo54qGGhGKeqFN3EAn3v1VesdHKkv1bKJ1MT2vMmyvf8gBu1x2DsMw49oUoK7j6XkEUp7S2HJG3",
  "key24": "5ZpzXWfKQN517aZtTNKB41fbiDkJnpa1ezur1XQpaEV6tEXPdzZUCPK5iD1rTLLVCifi7Q24LNwifZGbsmdPdTg9",
  "key25": "5M753dTAKr5W1adFxURKvmvRCVYWz5z3q23JY698yCGiTrdoQicyvhoxyRL4oM6DqiCBVUjAqXRTvXtLi3qUvKGm",
  "key26": "37Gx2EbGz3PCu8KBLqjDZ85HdJBd4Ub7KcKWMeWs9cC4NV4jAiv9qosoMC3XbtuHG2jZrosqRTH2j9W9ffB3xfP",
  "key27": "4Tv7FJQGwNEbkEdq61iP9hfpD89nJNVte77zVh9KkB6LZDw4v96dXZMJqkvmpawVJ4W7HHFzVPhHDuduttRDuE42",
  "key28": "4otRRvxh696kSUifRmmgKPPpqyPcbB1ApPmHX9xGK7VqNAMzHoD1CQEQx3NivtoVqL7zQSG1Afg8fexfHyQ6yN8z",
  "key29": "4C1DdADQemJC5hL4LArcAa1mHUH1pHnmAodmF4J3761BeYzT6L1dz7ZaCZYTWJgrKxEGXCFhaDBZpw8zedjTBizY",
  "key30": "2qRuQXZVz7kQNaFeA4KHHCM69N9MZoXVa6EZCcKn6ViAaAWC6CqLAjanujGw9fefdah2cVdHdEaxVZLgiDD7hThZ",
  "key31": "3zikj3s6WRpLWRnrQJs1b5UdswxzSa5ZmsB6LaXEEMeNTZD9D6AMLNidYcfW2R1frsPpnz3VSeE5YVtbg6AQaTkm",
  "key32": "8hs8EjWuTCEcbzwgX3o3aEmRh2dZjsfjLYm4B9Rpa8o2HJyZfdYBRpS1QyFx2VB3335nWDfVc2Zsmj5coiqKjN3",
  "key33": "3bhzpW361M9eY4gYZLbbBnQDduU35oxPu3z2P5jcNLBDwXFDYV2oBBqtEraWVuWVpTcoNt4p85effqioe1oPD3Pm",
  "key34": "GvC3uX39GxM2cSWp97CjepVb2A6zMHisLRLgQe2xCyYHJhUJkmLycw54XnjmqcoNqaNyWrhS5pKz3gPfDLPCmgm",
  "key35": "5qBfp9TsaWprNYPff9Jocn7Pr8rnNcev6mGEZMQEjk8gHFYtCfBMTQff1a6Uozn7yJsSg5Zu3iacmHPiZsFhM3X2",
  "key36": "2bMhfEdSq7zDZtTkVusHXxUoFo8QM1e3JuYhvuyGLpEtMJKirLtLBqiGUCZHaosTj4eBLDXc3a9rGcB5zvp45mBt",
  "key37": "5vziysfXzC1YurCCA3aeQYKjKEPrHbvGejGdqyEkHhozMTworLrm5utbhpSHDAHsrdEE11MC6vaYYiYWc596ZWV8",
  "key38": "3uGZQ1CvgXQKqCaGptmhyyEr6inSjbfVuoTRMdZ847VhyHQTpFCWsT1YZwMBrrUqq4dkAMken3eUeLkXP8xQdi2B",
  "key39": "61iHNNKv9wSqB5QzUqJryixSvXF5bpTnyCpuFm3Vp3nQVXGwkWhUx1V8CivLrmyeCiWYg8EEFTPerZY9adXNe6HW",
  "key40": "5sVELpJja3Kyt5AVN4BTAxNZJBNWFeabReGPkcSCZiKLumGhAaLBV9D5HQa6qJspQZkjJCJBLSi1DZwcNPTajB7C",
  "key41": "5ThnDRZU25y9pj8Bnb5mFA4fnVPQbSRkxQph8JGhHuyfHYwhCwCBHaE1kumNSpnag4ap625SVYNvEfSq6Y3RW52J",
  "key42": "5fMHjQaYKv9Ln18EhXVHEFw4qg5idJ6qTWXVETXRrD4g4ZCxGc9Sgh3UUW9eTWpGqdraYR4LdtsPRguFRbg7ePWX",
  "key43": "4mPJpTpmtyP5CU8zKM8DUuL2G7nLatyz8JHM2WS8SVUeTNa87j12u5S7XECFZ82dgrW2J71f7whR4cPAEJzcbYUw",
  "key44": "3DuZgzA7zcKeaXW7S1LFu1XzXU4XQ1yvA9F1Hct1ruh6uZVDdE65uKM8Vc49X6US6hEUazQhw3dYbhJVitDDQbP",
  "key45": "2ugADhqeAzZYD2NcjRV2ZSqfJhZkpeAMaFMWTPfSxv16RyNYXQbm6MsKqJcBaij9wH21Qq5fiCzqRyhQ57NsRi3i",
  "key46": "28wexjEsidsWpmcGRFkxAow6REkcHyZzZBgTsXgSaKrvQqbHGPJb5MqDQf4Zw3pMds6rv9oC4cvT8iwFf2KD8Sxo",
  "key47": "aoxzsUUgKNMnBErkn45XjymarbEffDwkC24JZobwZVnGmy6dBkbrKCU2ZqwwKbDesyeYhAhh7BxjiSYH8j92wo1",
  "key48": "M8o787kja9EdbhemLEYwNhBsAiD8ftmUgYMhF8UiHt6LQ2xUsipRCfqm8PcxEbWMhtmryLkZxM37xAwk9H33QqE"
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
