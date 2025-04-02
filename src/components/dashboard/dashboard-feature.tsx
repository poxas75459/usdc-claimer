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
    "4QgczeHpP54erJdQYGUJpopnEnR84sBp3KDkjAQmZQHVZcqLUMNe1haP1V1wPrSjijgWmjNmmT7AvFbts9sGmXVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2upkWvtuT7ujRzuvbi3w2zbu8UAFupPreKNw8GwUfTFg6Tia7GQdpYTnpHrAPSbfCCSLmDVcHaH7iqMAy73YhwEc",
  "key1": "31kYVt4GqZUtztMDu2N7e5y26A7XtGQB7yiWC1MA34rnrUaVPdWpGLNCf3cLs8qkuq5PxBAhVPYzmcsTo4tJUVn2",
  "key2": "bhaUhUgSFq4UeC8s4b2YkWiV7svX2hQgd4NFvea1dXkqR7638r9eK8CFy9DHDLfcriT6qTWRFTAUakJLqexwwtk",
  "key3": "5UeebqvvmeJLiGFRxNkRLtvWvNe59FaXTaihRBhjZFbXNm37QuCv56gdS71SBcJkNYky84t2jh53WZYrrSLs5SRd",
  "key4": "2jbRqdZCnHQaL42uxKckDncNyHL33LRmyMbVfssnKNW4d1jS69AGRUfoqsAhCKjvbVvTQaxFUmcqqK9RMkRnMRVg",
  "key5": "2exq2Jj8FjwbjdTA6JT7e1y9hGccJnTVGgTZxmKusr3NXbuHq4p8YRmVaa31YMdcjQxkU4aVrmkAkBa6D6jDtHvr",
  "key6": "4ZS5MjP8uSqzCyJvo6kL7TwaBvqd1TywssotVv7gmgKcJWcgAJ2zNrnffoHMWRRag3QSkw1yHVQj3AH63Q9fkwFp",
  "key7": "2FeziBJTjVCwvv7kXFmxfwsHpZ2Ffhek3Wq2HNdbCWMXZpEiEuN1XJjFcqrvDi98cLoewabj4DfoeEKqQPE5zUtf",
  "key8": "4GULvzv7fpCeFnVufWMWqzRyk69HczCDAZJtY7YnsjER4k1PiSphA5N9WeWV9gnd2bbHBKYXVqkSR9YSGFXAmNWA",
  "key9": "eTmrmyDP7xLUwMZrUuqJd5nTU19pLU6n8HV951Bx7fxBRbeBgd3hJa2aofmafQZjJskFdf4zwX43gaYZKcp1zzJ",
  "key10": "4bYXQka5EZrvrREUnnr6MRwiFJ3LEChXaXiLkHZo5G2qnSvCnxYSf2Fm1W8TGTvUcNkeYfcmKMgxtn61K3YDJLpL",
  "key11": "2jhVvna82XUJi89EfikjZ8LM4irAKd6ADA7RxGgGYSfcwqW1H2w7qMgyviuDcaCpjy7DLk63uao5LSHbM3kvMgBq",
  "key12": "4Tfz4mgWMvQCxZnGAzcL773ZhVAWE7wCkmCASbjpQsHgWWpSDVYHcj1vjAqNc84Tm8xVPmGL7bcXooxTrL9NR1PA",
  "key13": "4HZZDCMXZaAoH8wRBi1MXnSu7GWv4x8uZ9AeuqnHvZKXNaGhcMjhKgT21Bfhs1pLYQ7u4JeKtJDGTmUmdSFmKs7k",
  "key14": "2GSNQqKbV8dvZCggAiUm3MCRy4WxZGE6GtvKmg8rRbehKwCY8huLsdrPnGn2aMdUgEmPZcdXkKBioHM28QgQK5fJ",
  "key15": "3fLVkdWompfdFpeCaP8UXTmwNcoMSC2WQkBK32zep1cfnmTyyjzQiq5sMvLbnRwsMib33fdQGhGA2D6qCRuay9HX",
  "key16": "39DD8egCsJeFhngYPvVL4aNvh3BrLi4HJt9x1hdsj254nBrDZXj2DRkHyNNqoDtRPVZsHDnT8y6pU18bSfnkNWBR",
  "key17": "4pQvRScAGDF4eZX5aHhKFQBvac8iAXLxhqgKSkcbChaapFNTqjCFMWc9DZVstBAFzD4J5Vkf1pgGnMQPA5PmxBmy",
  "key18": "31bc9DKnNrnjdR5BchygooP5oKMHDNBFnDUVoRR1BH9ugDfe9YjK2JRup2avg1CYPqgZBUQYirNtyjSZdVYrt4kw",
  "key19": "3Q2v9Bfy3fPA2YJySY8nS4QpKKUGzDRSqXw9Mv5yupoxoLuyakCzvfZJaakeHYWeM3sWh7B74sm9cabrytGPwSej",
  "key20": "5nuTaiqELBRhLrLWNbmpwnjjimB7UFs5dZrP7Q36adSLiuxpJNAqR1mUGnfjFfyacdukmtLn8gAnysQiHo8VRu7H",
  "key21": "3bU7sSVKuzVHsath865wEr6xLAWE9SdYB4jHhhRJQ11Xy26p5QcAQZJMSmYVGymsK5So8cfrGz5Y95sXEmCKzbfk",
  "key22": "2P2LtU9LCACBCbt54SS7Y3m8fnyhogsRZaa1ELVx13v8e5p3KzdkD2GaCjrzmyxNNkY3LKq1xVP7MWx45mJdYxnN",
  "key23": "4QkoKMfVotEb3DVTjxrgcCpJFyxMroVsnx7RBcfAvsWrSakdT521TUoT5dEY6mhQnvnRQBMiNdd6u49V9rsTsMB9",
  "key24": "5fbc71vwFYT3A6cY64wZchVp55uSafvnLu1wtc9n7nGZTF9WDRekjC22GTCj1z6cYKimXFyDY1xL7WbzKiKdr7hf",
  "key25": "43cFqf4jASs22CHe56PS8vs4CnSD3jWXTtPLA9JPGhkrSAS7BJSM9WJpXvAucHwdRfgwonYKHpETTG3nUtRYq1iS",
  "key26": "S5gmSHG2U3TTCzq1y6G9jAUfBAGb8cTAqbc5rHSqKVLbAN721W2vU85DEhtY6bFh4vNYiANoDwrjxULBEJreTdk",
  "key27": "37hcfAHS8nyub5Cp1c8pk6waQbRE77gzLpLJ7tUFjSV5n3GhW7gBAytB2KX1EqVUoRig7TqTEQadjsMrZEcgJ62q",
  "key28": "XWPQCda3FpeRErptVTzht8y2StsUm1jBpdXmmHBipo2JhnpzZqRhob7H95B5nrXqMgiPN3oHrnQ6aJFSf9oDpns",
  "key29": "3FRCLxzGmRPrRBF5W5jt4pzMqThpUeZAc2jpYqwxDgjP41FZogC8PCJXtbra3jRapogEVkjJE2qGC9EPgqA1gVv7",
  "key30": "4yDE62Y1J7yJopJ2QU1Kmt1S8DfYhVjDXFZaULtq19HkMHxWfmkf46SwLnXKAMMCFmUo49m23XgaAreY7HxiQs6S",
  "key31": "37q6kxfaFE8z5buTzKHwQQt9BY8vbiuN4uy5iTJKxGUE82ABK217BGFGFij6acS2MLHMaiq9DrXR9oMyirt5QRAw",
  "key32": "ySwRk2dEGzS3sLgAMcZahfXEPAGXAcBgsdQT4LmLbCxKDaSzyG5eFmnpXjNcBNLwfwHwvw9tgcN5YR3gVm1nFEp",
  "key33": "DXeyWZowWKZQyNU2eZDy74BYQzPFNyunKRzpB1eiyUqXgoEbjvtE8cKri1wKxq7oNFzzj1anXWULvB5MrUvbLQN",
  "key34": "2fXnF3abcjLMfc63J8VvRrrRs8PD7PkXfZhC3npWEnjf4yNGrZ745x5BjiatCRKGNb3qz5q5SxUibdJMGLqcpuq8",
  "key35": "4aHFTkF4vzcP6ZvAjCnL5fyGuY3QvPfu3oJCL1EyfRFZszzeh97gNqTBUdYMHF4ismu6SeG2KGVXng9t3b1oemCc",
  "key36": "kexMkWY2rmT1tMoxzZb7gM8a3TNkNTB4Fw1nQU6V699u3Cm8LUM2ZP2otMu7MksxJj1itdGZZ1LJGX9aLzShGUA",
  "key37": "44WNpv9jupgDr86c8fR9uGs3LNWr1Z6NZoXfCZB9v5qe9tXnv9ZNvMjUBh7shqAKxmEhkaNjSPdynYFrxnubrr99",
  "key38": "3aC9TN28z1HeSq2jCeYC3B5s1muuFZyNTaWujipSbDsrQ4ErAFgJrZ9zER4MTe1dRMo43YvndLVa7m3Aquezp8c2",
  "key39": "5TuPPM5YbKCzyAoBoAYy7g3EN8uteCDbpXW83g9hp4iuHv7bhUvcdrAe7AGnNhV7xZpvHxcacNjPmD2vqFpRawuJ"
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
