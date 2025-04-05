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
    "2cXwwcfLbTQvKe4ebAX9NGK6b4vDV2ubSunfhZKdhchqWev3GTVKKCYwyFfnDPMpSdoZ9jTSZ97EzV8HgE9482oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnpQFZEi3Rx35Vj38aR2zx8fYzjsCvwryYPa3eAtXohWZ5YJ4odNNom1HzSgEQGDpisCUnkeFpBEzzAXMq2PtGL",
  "key1": "4XYyjUy58GFtxAQm8KyWcAw3gfjUmZgQMCQhCd4Fq3kBAcedLTU1icysxz48X9uuCvq4Rh6v4wXzDtkbiA4k9eCY",
  "key2": "5p8kKHCCUggXaPshPxV7AJ4piDBiNpd4XicSAjsg7bNZ6DovSLrc57PJWWJCpTy4cVked6eJyCiPTNcwXAhDhxyZ",
  "key3": "4mKdgzGxKRUwroMQgYSy2kKH8e5UZU1dUfv5bwXUAaMtLmrztYYKq8yyykMq7gqcnMhJRPhzf8BgcKvKcPnwwK39",
  "key4": "25GEb8fxi2fj33uVjbi2ZVoCXM1ECY3CkgnmXLvC6FpkdRMM3kwPqqXczqvnREZJ7cTqG9AUhHayDuo4Sbb8Civh",
  "key5": "23BmpKjVHeMg6TG3bQALp2XudBiyJddAtTNoonM6SiQftUSysYZgEgEiMh9JW94JksGmMqycoQddxmx85yhcTGrb",
  "key6": "5nXaBh43NEJgEQRzjhGF1EWKPxQB5gzTmtSUaLvfTvSZ2E1GmYP32JK56To72TBF7dc4ewUrtjjBFWpWS4PYhCJY",
  "key7": "2qTFLDp3vtm2XyQRDEYP8nVrEN6ZnCvtphyYpRsqu7UJyk6FToSmsdAfgYAMi6CypXCTntTYFuBMxMNn5LrTumj",
  "key8": "53ChDZYk6Y9sgm2cFF5fbFp12Wcrqnxrb7ZwSJyLKQcCsTmdLcDXFTcd3mVFenAwkU7Beq14xWWphPHHeLNTSSDz",
  "key9": "3Kyuvnob4uUDB8PnxmDtaj8QfSRCVkDYBwDJX7o3KxPsNPYxNkBKBfCfKVi6zzyt7H1sPF9yXF2RFhQSALnCnhmU",
  "key10": "5Jbq4pWhUxXJHqhxHxrj5o1zjoz6EMv2X7vN47ETrfHNugHk31AHqCpzdjZb5q36qjEACQfaaKjuU2myWkCUkrAz",
  "key11": "mwc137QrhsicUY2PUVgUetusjZWo9UV3R4ti1EnbJeRqgakb7yS85E7S2MgdGFvtjWqucefeB4e2jZEjWJF8maD",
  "key12": "5R7M3J6zAxLBYUmbqGhwVNAvP2xiJxkLFtsqaSYU3T9BtiJ1jtKpmE1L4MRP6sHhsXR5rdm5jxbiyZwMrfyrNnfy",
  "key13": "3bHfKqTK6mPykmMb5fWMqGPu37q6RJvBZiH8Eo2uRxfdjCzwG7hWWzWBtmEGT9FedoET8Bx5niCYWZg5vJBg6uV3",
  "key14": "2M4TTESUniY7S1qrkgEey2wr6rZN6cr2oMiHLD2C16CrMSvrcUVNhk5tYtfUtAPzg2jsRmN5aRACFCb28xZFB3Ff",
  "key15": "5Cc4qA9BGbeXkkrWNHMXTqXPeYR9oQZLsP3n1Mxt9qjAv9CLStL53BNo8JejtJUgbHps4aCGnFjfB1BpUrNYP9oq",
  "key16": "2XEaveoa3Qh1SDqLCcchc4SA34DrN3QAj4HuUo8NXXxECB7fDciwYfU3yNFBxXwcUPdvkW4ZRn5J1jn8q1hgWsMc",
  "key17": "f6VB23PhqH9uAcN3vUA2HB7KBjhFF25uqJKjnoP2FoZsnEp6aWp56w7f5Ny7qPEBbY4ziEt3dguexV2D9Rze647",
  "key18": "674a3mXcuyn6L6JenPvmsLnP5aHhSdfKBmpE4FSQxcSZbUkfkKkKwyXzHtbeMSS1jn6eh37RrTPBjc6ipWuRFPrP",
  "key19": "59A4xVdt27yrwWPCohsLwJJbVexkoNBmcUi1odNEWmCJWM1LQ63tA5XZ8BzJsvCtbdYPBMua18Se63n77w5zasuA",
  "key20": "2sXF3y43Q1BekvPDBTuZtEoQUMwgh7mA47QP7o8L14UoMvyLnpiMurNDRq3yTqJMoKRNVVUKPCoLuUbgG1guGYXW",
  "key21": "3Ffq6A3Ja6TFt55ms2JiYQ5sEVjABHuaQCBrUvDVi1Z6vBZK9k5D3t8AUqagbTUAiqLqeEkxBVgJypwwBH9YfKcV",
  "key22": "2xEjU5XhFFXpTQZMHnHx2H8onRBpdhjCETpes75guh2hLQeBt3AXkfnmbWyUs4qVTTz5bbdV2Ls1AWScdjk812qs",
  "key23": "5LnU9qfqMtNYtgUX3TXV4m9Vr6tpZXNiDBQibLd6U8ur8omAkp3itK6L3wkVCcStjUGgTwrFRjM2tMYR2AFkwBHC",
  "key24": "4jQUkw4tZE6AaWbnxTSM3HcmzNqkqjjJu37HetRAzXic7bXVGzak4V6ZNnXzTTbHcRNWw4vMFaS3ma1FXP3jmdGR",
  "key25": "3mhmk3qXFQBeu6N2Bb7RhdkE3GjdUzzJ6oK5LkG9cHj2xDtBVw154NEbVxCpaAvP6uW4cNUnpeKvA5pbCXV3tVPF",
  "key26": "3kHQBy1pMTwN2w7QEdub5x21k1UFSj7hHBBjzeGbYsTwAHwJkVM9Hu8cWbmwmSoukNtEP7EgyypE6mikBfL1XASX",
  "key27": "4P1e3PvEQWh2kCuqbvPxpderRuguLwKRbaFMPPwGeRbc6v9MVDmFwqyctHxwijeMPeNGLsLgxcRUQVZ1VJqyrBm3",
  "key28": "TwDvLdfioVVqDYA3CioHzKEkvYaMmJCXwZXXU7coLNg9heCyAjjLZzfAEzUSNsuU2pL23YiNmieGmpcPuNJMsy1",
  "key29": "2171V9pjnHjXnbdgDnquuzJyf8rdCp7MqMZcUjmjZi8LCu42YwL9ffsmLeKXPQsC95ByfcC7WEVzqxhtsSgkX9WU",
  "key30": "4gUZcb4xDh3FKJYHHn2P1x4Meia6ZTsthZUVkBJArLg4oe4nEu5QVWhismEACSdte5yUADH2q1DJD5tRAzhHfxrq",
  "key31": "4UJNmJGSCs15P84Rf2CsAey8rdNPFy3rtC4CwdUjVG2grMELJeDme7uWR5t2JPtScnNWM62rBRpXgJhFW4bZS7s3",
  "key32": "2FHbku9kzk9uDRzqDPWtp6xo9Q8p6gxFznsjY8ZeMrRZ1SE5tS1CQ2oab4y6K8agVbeuaW4LvkeUJ6aqL8s25ozT",
  "key33": "VV1fKRA4ivmfCLQ7F8Jrp9QAoTRPtYL5gY38h5EkZKshnrogD2XfiDutAm4QaGuGMkKoMuLYzQ1CKbQxkSoxo73",
  "key34": "5zWgnzNtMY85xhg52KW3o5nAZUvyMptgM8tnCHgBVp4KwMhe2a7zVVCi5YKEiM2pE4czEruSRM5X7QTHnNpp8cNo",
  "key35": "2MVACHau5ZVtmiBHUU3WDacNnFNihCSaMB5a8Usf4fcKQ9CXbVRWvcJUdMRE8hiu5ZDTFYCUyPgL4BYVnF1iy67W",
  "key36": "3gVHp4KjbVmrXBG4yPudxgCJGDH3LMuJK5uDLumUzrYW8mtCxj576KqcCTo9MNqgnrh5N7q6koEVgXY7yqjwTApi",
  "key37": "5bJHdx1dBWV1LZVKzhSa8H5q4MYTciG8FQ4e5TKsivYCskUxzhExZ2QXSsYxLsjR5UGzLSajNpUGvSnVdBfNLRjN",
  "key38": "3uhbcBKruRQ7otQmuV7qif6LATYCX8SSky2EBC6hBwys74ehsvQWwuqp6Aai23cXWaPtCXUF9c66JfxLaB6rD92x",
  "key39": "5iwVLwnUQAUgpZRPJyV9BBQPhAwebnBZubcQq4n9izLeQ8QUYKFzqpvqGAgUm4DAa9JTH79Et5fWVahBumR1j2Wg",
  "key40": "5wK94dWJa1qjXLPMvVmhw4u3cSXXSWUwdpGywazNWWAAYPkCfh35WpazXVYRu2s7PVk5r4XSCCfThEh8rWeTcGLQ",
  "key41": "YupzW3xbq7e8p8W8tCTyzbzRMYFg7jTc9AxX6SQanS9LPzsZbwYKKLfaP1xGLaxZSmh2MnTdR6U5kTBsChBmaDM",
  "key42": "4NpxMM615b8Ewr73toF3nSJQUbX1Hdn8G9YJBbq4siEPtZ4FjzHwSSGKQATUTJjimgxPj7zkfQcnw2ihAF2kc7q6",
  "key43": "puYohcnXQnWgPWmk6pTN34UhHG2AXkq7M8nUDMEc16uN24uTNAXsaaYGnJjYpuJYrmwhnQT9y7F1WW1EVDWyxi5",
  "key44": "5MkJcNtqdzLVwQoc2tTjN28B87ArqqbbTYniiRpe3JpKUXLgwVMEuxSgboV719uuYs3BmuRZoSg4gzK2DYyDUYsH",
  "key45": "42aUSqtkccHD1MiGg5zU1PEuqgGz5SbDRF9u3Mob5Aswfm2XRhNuS9fjXQ6cdhtpDQHDMcMuDtoa5WqwyZcMGEhn",
  "key46": "37Gxt4LfoCjX3S2os1dHVEtJysAtDLD65f5zJuW3pfx5JcsstR6gKRWvuerGcDQ4s1nsxFAt1sJJvsszPwYcqL57",
  "key47": "3DnoHFDWHfHGnU8EBaPEoxv9KfurhiKfKREnfjejZer3jfBTjnAEr33YchW69XwD8GbBBx4Un8FW4MJA4aMU9jLx",
  "key48": "54gGBvfv8pPE5AmPDRybiZkPDNYddsLC86c6VckvcWccsCr6PBkALH1pv91GeWoeJdBMk1kNWdZBcTkXUfkXmX4N"
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
