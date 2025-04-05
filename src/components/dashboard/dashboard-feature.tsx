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
    "55ERUrFLfsgavaRn5AsrfNNVqd5WBQVpi5BWNzgBGRwXSX6yvTdxknRzUW3KGr3oVuyGZ4VqbTkLu6E52zVtCmQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wByCG6mkr19p1S6U91oyKYB3SPF8ngAWNhQ99qtKaAESPXEA15edyyma6qepD8ZK9fHWndLtu5ea9hxrKmckVog",
  "key1": "5gBxEgEUiznmneXjs9prL7Aq1zGJJTdRitjNkvGatT3j1U4vXdR6MD5jwCEWmjoDvonqBFsch3WAfpLoEkarVLsJ",
  "key2": "2kbJ2w5BhT6zn9AzYfL4PEiax8fvnhLuhcwgiPtfBtkFaVKwnHt1fWtCsNna7pbBevjqteZkt3jpqXuWCrvYnxPT",
  "key3": "6EBCrHArmQXJTQpyESkpMoWk2XjDn8GiyJ3UH2QeSGkEDhvuVkMYaeWjBEPsu6TAVKCR1Xe5WgzCCrUpKQNQXR2",
  "key4": "5EhrU1kUzKYae6crrrNasBRip5tM5jkqeenaeQY1mzZ3bsq2h5dhVG936LaEj2j5V6wcmW9E4yfeFRwd1S6wmGC3",
  "key5": "3jZ1uXamer9fhRanTKGr6NrwGasLHCcYMcg8cLLnqynLSNqga5fPVY9PPpJswwzF1vo6HAAUV1m5MhLvBC87EQvr",
  "key6": "3Dnqw27M89UkZd1vzZroQi1w1QrfkxZXhtg5k9UAXaKmSaz1Svjp76NkyZdwpb36aXR2fGkE6p6YzoABkzLGpm3X",
  "key7": "4KwNp2P5JbsBBkz8ztisCEovSgDFf8gZhDCQXERYJUK5bkpoGroPmEAvg5ZHDJnoM7cKJmcohAXRSJV6ZxwkoZEF",
  "key8": "n4vtQ6rR6Ri7BFek7F6ENbGKPhdPB8B6kdptdR3hYx8cP66FBQHg6FaPCBK51Xay7zuzgcZ9eS6LSY88NsAtTvY",
  "key9": "5scdDKosNAa4WTzYUc3aNqjN9fPwUwv96wUzDisp5WdvzCdjAaNMJueZZTiDEX2pFc8JCm3xXNt86tix6N3B8dJ",
  "key10": "4ffLujgGpFxmgjs4wkgT5U3RRgnnAXxRJ46QjjV11jDedbxiBn6nMYcaGa2ttCNU4qvB8fuYEAPs5woV8nSkrbKt",
  "key11": "3zFRubTaQ1FKuzGamCRYvYFmXDWNWLHj6SjH1ZJWoQeNgX4HqWJwcEzr3Xp4LWYieguTwenfCiFdJdyfPxsU9U6i",
  "key12": "38UgfJmnT7xP9e9utPnU7a3myRTrfeKHpXmnXpmSguCYxPzynqQDhFjLq9dUQQKzVY74X7yLx8FTrvTNxqhQj8ic",
  "key13": "5T5ukDBXUcs8kJBEnLV7g6s51taY7sMK3huXf4qNUykCfjhUQXdv1c1Bin58FTuRhopbHwpoHs9EJSRzUqxPmNuw",
  "key14": "3dL5jNSkhDKehCWqcbFMzBjUbUQEVYjpe8kyoi8xtiWCyrFiNdosF7XZod66TeDwCtPupEwgRhFH6mnXenHkP5cM",
  "key15": "43TUwrfxN1Ppe4evvTaMVuXXrbg9ugQ17HqAEgty9WDXptvAqdJEKa3V5VnhpxUrL918y5eFnTEqVsCjES5jBAM5",
  "key16": "3GnWhCkbHE5MotNe5TWh6YS5TBSydNfuWzeaJdQZ7N7CUF7K2dsvqNCptYw2X96A1guSSAoQaC4ybaP2darUmoaG",
  "key17": "2xzasuV9nCMmYxT6eMDZGeEG79wd3Usf2Y4xPHGKT9FAkHXC6RRYx7LgSbi39qTq3PLa5iqXu5etLxFJBZBbBzSg",
  "key18": "XAwUondtNZDaGPowpKcJLf6ewGPhHTV79ntezbnxLpcpjLhwvqe2cpuK6Vf2hdgNVW587DKVdcgaNGVXpcyXQnY",
  "key19": "5Rm8yx3jmy7QbcfxpPjZqvpyKeg9DvT3NVB9QeWVBUx7Fh9K8XAqyEqKZnynD8g6mweH6QNEhLopCqCfZ3CguH8t",
  "key20": "4Pxt8FjTiTzBNZ35hxjDLBkCoGKjSJKGifiDCYzCM1PbdFBdhRYwPLDL6UDBYaEY5vnmt7Q1u9nZcf1Mv9bYc4UQ",
  "key21": "39dResi21CC34svFz7kUHBQLmDrr9ARc96mpWnEfVtxYUMN1oKaN87rHrMQEjE9wcZAaxk92fmygS4qoW5aDttnW",
  "key22": "3RNduQzhtJNwmDmWmkHVjczbcpaXpNnTvYaGPfDttggWy5CCiAZn4a7LTAoiUM5reEMHxCDhGvTyW63815LsUDQ",
  "key23": "4MAvCeGtnzrpRKi1f5uTe1XnrRYfzjhqGEAMsU6e3Mqd9XwrXWY9TpU42o562UYt5ZtQL4kT3hfcyTcJ3neeD64E",
  "key24": "48jyi3kzS8eSsRGPGTbJP5Fbk8aJpJEHep7Vci2ikvQpUVMdE6DcxkmbWHPhjD2dnakRh3fN7MeAvaQjwEh3ShFs",
  "key25": "3JQawJfdmKG7y33kZb85cqx6BvgdbEk5xahdfDjcqwueyi44ZmPHBdttT24UDH9Zgd1MPdWmUjZW6pGyoTYu8L1e",
  "key26": "3vEWXGnqxBmf2NZsF9ifEAdm7m38F2Q3LYUnepfL3FJayhbYPzS33TznM7Qe1xukok8Qv7Xxa2Tyfsdg78FGZgwW",
  "key27": "3wJ56eGjnPrYU9o7VPwCBhWmfZNGyAzw9fvWnrvdN6aopafLeHYWEgqWLMkfa12fxM8JZCVAiAr6GhYxfnNivJNY",
  "key28": "3zL6cizF5KVPcXSgWxRSNyZA5P1U4gHBYvPtv9w19VnJgxVdAhyHC2BZu7wX7rFmuY1fmHyPPySRvRYpK3H8EeoW",
  "key29": "28AMATkKxdi1xgCRk5LxrdoGp4KQNu3CtfsukUHSp9bjEqmxH3435pdrpjdJVSLtaaCK8x9LK8bTwUwDTXSoMgiK",
  "key30": "4i4D5MVmMZDH1sDQQhhGxbgtcTqogxirnQdGR1ESQqP8iTufv4tmR3chtSg9JtmAKd6enXEMBwT6vum5jX39fJ8k",
  "key31": "5yygeJTJaKdLwGLFEyTryJSTgeebGj21inr1szW8CmzdTHAotSxtkxzoBDRBzCQ6BBYHs4SBk9DM3eCAbb5zf61u"
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
