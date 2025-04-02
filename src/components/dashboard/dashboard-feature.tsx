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
    "4DRx9JRw1Yp8GbQvukXPCs7CRj2zk5kEZG41QbzAKELiQUwxoyPashQTsjQFWe2VXyezPDtjfqcbY37GHKywB1YE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w2VgGSm4fQM5aREfHXqB4LafrzNr9ymrJgNvttkFthqfgB4oSaH2t2kSkAj9aQc8XTr2UdJvMnNFNo1z1qdazq2",
  "key1": "3Fhvtp8nQ6WyyQcN1PqcLqiksJcWUEaWtq7PEa4h252j32T91BSZxiXgfgBCHbxo6J1ZkL4zWsM3MtRpTgBKwcT1",
  "key2": "3nnfxAnk5XBcMEMriHjsSn3uJFPpteosD9jxGdcus2Wixa7nfZMtG3N5QMSrWsfS6GpuLhAeYcBkZsTKAHALT3Tv",
  "key3": "BsdqbipDfHMu8or59TJeEG3KyVXmRAtE6rHjQFnhepF4hVnhChHtj3izp42oqD5QaEd1J3xaGaKiXZqPDnx6BmZ",
  "key4": "4B74ue1FP6LowUz5Sdpyb9qKaMUh4LmsyZaBjqXkdacoj9TUSu989o1sPRmUbGyqRsDKozYLJZwnvvUgmQrGWzkU",
  "key5": "3725DJK8qFHVT2o1bY9wMuhRQgKp2hDFYfD5UFMuYpgiFmpWVoNoB3MukhHQQkttLtsKXYimuAUzREanv5UYcvVH",
  "key6": "3jDYRp8wdXEVuu4ksnLaMABY6wiVTr1s2yzUY1MYDJ587s8m4GK6DZ6skQiUJqDT1vx93C8PiCJWYsUHsvRucHbS",
  "key7": "3oFpmpsmyCcvqwHhTnS5MWQQ6TwCNogQu9fTQazkkMVpnAHZMBnAMfztyXTd7jyifMijyNHF3H11eNLqJ82tPx6B",
  "key8": "5V3dqohc2niN7BpfiXESbbJPCWBad7AHuHg6d3WkwuyRdKSJNHD447h1JJwHnkwqiM1CdTsKqCBName5Uo5qjxys",
  "key9": "51zgi1ZLPusLK9a5mmu9FXWJWu3UVL72tirpLccMATFbrymNeKwjfRioc6NNz6c4DB2ry2YXgRvHLUdd9YcNCJtL",
  "key10": "5ygz57i4R3iFEa2FRbsLenNCv4Fb27jTa8Nacye5XNeBo8gqyhNf2ESsCcS468As4CnWq9Utd2mcWMf7VzapsUHm",
  "key11": "3Tf3FYm4K4YaKTteSSznzbacqseYhhcAovkLMt1kPeCtFeo1sjesNJZRVUFNME2f1AuXudyK2uCBtqDuhLeebzYf",
  "key12": "UDt3PiF9s1ggJN3TrFSnhfRVVcGFs9G2nqZdmJGL6am6qp9XczhJeAMnPfAeA5praX8Lc7LU9BYxZiUnHg7u9LX",
  "key13": "3jxWSgsCZmVUjD6hwk8mWFXDFLFtJzaPin4ipXrFfJUqL8QyBtQZrDck3FRWPQKV4MbMhodaBNQCd62nstThBnHN",
  "key14": "3L6P1iay5o2cPwbxYZSD5tEXXuQDhEefm74737VAs2hFZkNCBXFRUNoN8H2yee71z5GX9bnKQCLTX8GcJuoTo7DP",
  "key15": "4o8kNJALYvGqv2u5N9b4WDiebJFU426JvbRwQ18parco471YLcVdGGYzr2otCt7HCVsoayh1uZrStAg2F8gNFTkR",
  "key16": "2pf72XpzXGwWPX6piMXpSyLLkqWva5g1spBFYSLiV72itvYrdNdaT4TFfdPmKpoGY5CiVN5sbsTSZdStm6Fk4Fjk",
  "key17": "2xUiVhBAL61gPnBmZZPnbb2UvFZLh67qhjgFuzqBD1p7ffKGZFQW8F3JnnvwAw5xF2Mgn7k2FLCCmduTWuKoVBss",
  "key18": "4nsm3i451SA9yN6hpJGdujam4NZnDYtcxNRXBAgsNeJZm6a4zZedsgqReABdJMwGGfn3hPyFHQLW4gVMqxkFsqp7",
  "key19": "5ptz37qMufCxdy8jYVAN8E96Sa7519Z3QRUHrG6KZZL8nVMtBDFEsgkL1xVeK5iHKQFBEThXdw2azKfQSPpAU2e7",
  "key20": "5yFkd9JiazFRJJw4g3wbUeu72XH8ZFgj2mdT5wFyDJ8h6iYV6VRobb3Mw5rtQ1DEKSACZHMqNvsF3kup3pZF8MsA",
  "key21": "4s1yHZw2Xz6hn7fqEy2tSv2bRndyP27NLYumCfJD8fQe7e2WbmfZNFr2xsj7RfoGfEhfoKe8fk7DB3fen4hd2Kx1",
  "key22": "5wj31SrcFLEL4Cb7KJpdC8YuGxziFg6U8t9QMFi9VfCdANaW8SJeu3tJZU2eNmxLhbdrR6ubrWcsMvpjCs91Nvur",
  "key23": "5iKNiFsYQWXPd41f7LMaGk4MqQL5Qm6N7JZToUhqe1qQav2pnZR5r5mfa2Vs94wTgufLbEZFazdiiSCk9RmW69e4",
  "key24": "43V6MhnZRRVUTGvgDg8h9K1wKqMfqCp6osEjWiDKmumTZjNKzWHZ5E8s2MqSnkW4qF62Gjcyt4iytkbDtPxcUNp3",
  "key25": "267nMSS2xQmu6inrUqXLnkmA7351nNKdWvEaN4khfmubWPbwAtt85g6xX21He5YkfjtcpvbC5BpouqVAzRNMJmpU",
  "key26": "2fKBNeCTW5Q3PYhVkH1K6MYg8qmhoMowRj22rX4M2CFXtks3xPx1WtQ1EQUTwFJdMm4wH6vWbTsPE4cCT28c83rM",
  "key27": "42QwGFvAmPYPWqA4Au16HzD8d7hHoo7NebKu9v2N7BbMLY4YSDudKoN5zfx4KYCVU5LX7J193kNyT5Yy5EUp52hK",
  "key28": "NGSGN45xqFApidF5kfxgZe749jyT7u5wdAy3khNjWsdUMD4nLe7Bi7Rq4TN5qk6duDB2576DcN4MPzHm79srNYK",
  "key29": "2sJZRahP9q7nRAfNcpiXWbY3kEe6yi1mP7vyFWGBwPhN7F1BFFVWUQBQ9K6Pn96BhToCK52GnzuJV9ZjMgmQ1Mxg",
  "key30": "2JmwEyUT8MP3JWLyjjSfStZNFy8GZUZLcJ3W8ypGR3LDzu3CeS34NDTBfPTLfeFcFFss3YfUEdFkbdSpYpty344v",
  "key31": "4NVao9NR6Yiu1A3ZR4BDX3sUsFd2KK7yaCXWipasCZiFKVbSwKa2TTJZ921v6ZsReGYR8YKfvS1z9KJCcAn2fk3m",
  "key32": "4hVLx9dtKKSj4WCY8v12J1Wycsv3a4MSRr81QhyJXnyLrBZqgj4291LsyNeGmAU57tHMxDzqGLdHtJ6xrnKKVgUQ",
  "key33": "3QxtmzAXscAqAwSq7f4e5BQqNnvBLjnhqgY2StJSRpeEuVkBpKzMtryRVY2g5R7LbUcHmcDJrf47axEJbfMCNfhh",
  "key34": "3dhX2mVGbPddwg55WsuSbbt9cShLgbVWczXawhRNhkZNDdSfEa2GPVn62orjQzDHAKZP7M4RVrmEVVxPRRQS7zTJ",
  "key35": "3d1anRzd7FAUASRhfFyZCBEFuMvS49fBtfcmBoN1SjhzTtNpgorhpEQS4bqqpbzxxWK6n2XpnQu4Hpi5N5ZkekBV",
  "key36": "SerxCYH18ZW4ommKTj3tQcNGnYU9rmV5S2AXvhGjWNnTts9cBtEDB7tQyi9QLgAxuwyTFypz3Z7DUzh1qmzHkyk",
  "key37": "3iYVTk84z5woYyZRjpGdaPVLthNHYXBuUVwV5qHmmwKutZkvY713fVFRaru29rR6FtfAf81Zk86pFZXdq1VyML4i",
  "key38": "4cFbQZDLQCdDpfRzWiaFi4eip77eG8bxNaq4ZNSxq86mwt6Go2Nz2QTafGKFwcXzbwxqJDLr6BPiZmknWX8eg5Ac",
  "key39": "qgffoaZ2bSWhJR2HVTuqWP8r6X9tvxri4jgdYGhRqsCQNeyzGW9Hv13ujM3Fn948WhpnJNFdVmkjudy8xSswK5e",
  "key40": "3caUMQkoeU4TwcYqrbvkfAeex9Kb24c5Z9RWbJANgMK8hmCkBSrP6ihkuTdDhoxk82M6Fc9vWyUMW1EpZiCQdKtx",
  "key41": "55zkTCLjeQyP7f8ieUUvzrNa2RRugG6jPJJQCZWdfm3NChd6aBnNPr5YiKKJn9DDbL9jtXx61EcXifQEME8p6Cwk",
  "key42": "43R9CeFbzBmiqVNYLt83A57MuuyFtLDSxg2vBmNM1LUH1VLrWJQe9fS9aNF2r7YFeTVRWfrZnD9SWKnqvo9Km5KL",
  "key43": "5AprBYqpWoeCW5assdsaYcVbD4Dj96pURqgfwt9Eea4wYqccvDdZFPVWkfUzP2fydNViQi9nEShLhxe6fJjyhktB",
  "key44": "5Htes6J9v7QLhHbsEBXaA82EjSDyG1CenWiFbP9tsbkK8VNFXXBNkwTGHd7gDep2iJz3UqhTissxuAZeYKJPDdQp",
  "key45": "2CoF2tR1AvPvNxz2X36XFe9yEFGwcGFoW6VY3yzwmqn1JMMAXNGfuXtbBbR8jCQY2E724a5Bux6HHXnWBLarY1HA",
  "key46": "MtSBznofJasPUTVXNYAJp2tVuT8eVFawAWEEjNXnyxy5oCqhvrikCuhnYjSgbNUf36q7UcyzBHWACZ74XaoPNiT",
  "key47": "SR4BPN8hmqm1BGeEhcdFo9YtDMTzWkJDPF1uAfNkL766k8ZquuttLPKGycd34YoE7oFMGr4SUFhi5YGDQyVzWpr"
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
