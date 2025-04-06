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
    "uNRG51ns5qt3S8PFVyyeWYvXmwKwRZmRk9aZ5iTnQ7gEQJH9zBNbsxbJtW2YzZ4viurHqMrohiAdypoPskUcNju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCU4WpJ7y3rDZyN7GiS2hzwXuc3ycSdyGFJkyjDVAmJ6i6a84ES5YtJGZBw4wH9cz64f2mZh1bS5S8EPd9ccyJx",
  "key1": "5HSWWUW34R4L9HozJtYb9RY8k3ZS5Ny3cfvSwbE6o2neZa11tbh8ARn9iWsXogSx9NrAxC9EugAjw9d5W1Uc4D88",
  "key2": "3koytW5Gdbq39xxfJqRwtJKiJoMwTLHMPWg8J2DfzYGG8MVkKk8LMvyJJGTg58C7xjYcrzK2TaHMmsQmqwayPA66",
  "key3": "42mwqjdEm6VZ4Z7vmnP69VNRESD462tCYvWN2ybpx9GwfvRLiXRux7vfUFEpsWPVQQUqVZXre42XPdkZM39EynwR",
  "key4": "3DAFtvzLkcz7gc2oNwKwHUEPvFfNnaQXwRQ9xWzPdJMzLr5BW9LkE3MsfoXxYV5bZKiB3oJWVk4cmNZcUMtmDrKk",
  "key5": "Q5vsBj6ekxNVFynMp8kSx4JU6jKb9pvZ8pByiaDzbJQEVvozTRLFBjXsR6Yj35X3tJTojGEWWKjbXChu3RyTVnv",
  "key6": "5dXUFq4NAhoZdRohMsCWtXKw3LSpu5mXdX5Nsiny9Z5Ku6xqjhsMqq66NoXUyr9L1xwMSj3Hn8PzFUM7Tc2BHG52",
  "key7": "4UNAsZPrCuigSDNF8dACvAoAYbGG3Z23T1K22Ce6SvxqWhjR23MDKikD8PHB1KoxT5LaGbs56yX1XBmCj7BcEkni",
  "key8": "2mxPDfCLcRbx34Tp7C5NZ8MSDdA87Q7vRpGLZLz7kdsLXCprn7uFmFj3Ngqi5DLBjEZpJhTR3GyYmbzPnu2vVmpq",
  "key9": "3maGiFXzPJYNQaNosXYMVND6cZVj2aJEY25F6fyejnatmMrgY3ubi7Tjv13ATQHu6Q8neY6RcNRSptazApgkJCdv",
  "key10": "3vEXexTnyUsLewXEnz8KPCk7ffFaxCoBhkygZeWfjcGCw3bDGMSHk2icEn5m31YFrMyESkwtFsZkcCpUdTiSRyBr",
  "key11": "5bzbwruvi5yB7qaHHBMWWQCFPYL8MP6pD1LAkzaN4EwVMDrpjkXjSLwdGbdh61D3Q2iDT4MTNKLtuke7FabJVwcW",
  "key12": "2CWj6556pdLhAEGUjTitXBSryJtZo9gasogfYRFmfbkm86k4TdXuU84hta5b5cuq9NruPdUaRfNeNk2cjSEGDzMj",
  "key13": "3jZtUy1qqaNpQvaJFiXpS4iekLDDHC3PUb7vLfyFWAtCU1qD6XmWZoWgBmbmVLyLEByFxrKjv4HQSEvd9aX4VgHT",
  "key14": "4JUdFVv9g2YdRQw4jBsU3K6y2wZv3fAkRmw7RRWkUwSNfyDSvsDWxetDWadDiGDNg5GuD1wmTk5QnysNngSedz6L",
  "key15": "322iYQNmzc1ejDCNwzXGk6r8nXmxWwFP4rCMJS7v69JcqYS6nvEDZ7JnxXPvhRygEbR9tuFUr5SiXaytdAdPmPBB",
  "key16": "4zhzxMoMGtwuuMWMYD6ap26canJnR1NPYWFrccVtmPfSadEBHk6UDBmY3VbmcJAPmTNer3WheoFyx8XFGNf7czdD",
  "key17": "P7oj71GgBmrk72VVMXx7N1E6nGuqgdarXfBCe7B93ddiKtiMqW3AkxRE61Eig3hV8mFx7E94XEXNGLdr8KvVSdC",
  "key18": "5DQksEe6LsKYaqKS9ftvnozdtbqEfbZa9Pf9zEXaC1W3mhAc34n5CNG4fkpQc5TKSbQbG2sB3YtuLm7s2S6o55Mu",
  "key19": "3kSVQbyyZEZRcMjeEiTKJCtQvxRnD8fCehn7pSrpFptrWnHGxvy1oRqQz6RWJF1GDYC4mJqEdJWTVjfRQw4XsCGe",
  "key20": "4m3q7Zj6S9C7XYZq7kxoqqW8NEtS1s7Bn1HsbEPWX9LzifRAFdwkBzSKDgVCfDqGMC653vtHEdfgr9axJWdbtcT7",
  "key21": "5ENzwLi7VrvuMURecY684ZvNoNXhgcQ66dNqo48SN1oHo7eJKFL6Ds71yskaFFcrrzW44aa92uJaSq63xJZsW5oR",
  "key22": "4SVovPcvtZPKqdb58mXH1xj9uPZfZa7W2sJHUTxg3xjdMdNDifT4xEtdtCXC8Ga63nASZHehEzbgYvFsNmNVaApb",
  "key23": "5yBzv9vYdNxm9qwmj4YLWryQwRrnTsG1vsxWSsBwpWk6TmmJGaMMYZ1e1CcQ3JE8KkW3jaJw5Es1Nj2v2TH216Ue",
  "key24": "411UKNo3ZtYAxN9CmSpuNjB6dSFJUiJwmL9tf7XwB4Cm4HLnGvFKEKNBrzhitkrbf7EhpTWXAwmP1JaADqDt3xvK",
  "key25": "2mPKVq5jcPypRhfZZiqcYomRiJ1MBDYnBFyemvMdyvNA8LDXUqq23DjehXiWHkzncYPJ9DTzNWaSmrTkTUTJWNHe",
  "key26": "3ouGA1GxypnkD5LSd9he7o6nUZoYoLJNYWfvbrSimT2pnNVDDCxyvi3tEgnbnxCnp2d3UVH5baXiSgBjQvuK182Z",
  "key27": "5u5VmF8e9uqVhA7NMMjYwj7nkh7zEWsCDvWeYZ5ocTHrHeHHs3AiPyLdLv9yyuYAtemoKPGEuW8VXq3mkeboJWRs",
  "key28": "Ak4otJro16Ey5Xh9ckCFUpLvU8FPTaGHfmFh8Tog3K4XRS4gJerjRfkyPPETdXpaBSUS9JNu1gzsh9Xky5VyX1q",
  "key29": "4Hpwbto9aQoyKpsrsNgiKtCczHaU5SbFg84jedqwQmyTmfkohoSbV4t13ToJ1CifhzrMtnNRfFPB9QLRNYbMvxZq",
  "key30": "2BbZmWnN4hmZMSKmx6DuC4hcizDmB4V6wwcD6JewAGP95napud2ubWUbT6BTMipGMeuQuDweAD2SZQLtCrj6yQFB",
  "key31": "5LcAsxX1jd1Wso54C479KVPie5ZJx3FVJAAhZpdKYYmupHHP7hCDtZFYzFP1FEySXRp8sYgkFoaPwxA2MSidozzg",
  "key32": "v1hAZMn41szaBMMq6cbLTs4ddb9myPn4neZrZNd7FoRChfYGfgKhHtMxrce3YarNcdWEz84kiTG1Pug5qS4M8H2",
  "key33": "3z9UzovKTcBzVTc3ZkzGZBrJjUZ2oUW7fY3QAtXxxYPM9UBohxyif3Q9zSHMvRTVdFXiTnq89quVb7sKdHqt7PDB",
  "key34": "oWYt4xYnLqX2Csvfyw3nFP2UiAmqamRNdNbwFCnbqwz76zfqf17s1UVSAe1ZbnjhysM6cKspLHtJ9sdWZQhRYJZ",
  "key35": "2TvCJjUurqBSQU1U5cJZTrtpq9qtKPvmkwRBMKj6YiBvu5E1G3RX3TjLUmKPCszRbPJ1ViqxzaLEXrTLvYVd7bi2",
  "key36": "2PuhhgTcE5VBiWFLVygHrJgoAVo8bgkqXrC1T6p9hmYDhFP7J9k3Z1gk4jg4GnTx2ZfthTLM1ioVyzSfi5gja6oe",
  "key37": "3aBeTUdzVVkeV5i53RUdV5EXTLuJZKYy2jfub7T61QV3FV2vSLsWSMefKzDmmyWyYeBS2AH8gt5drCVAvUBrLyem",
  "key38": "2mTq3ifcbKjLBQzAijDdGJ1r7NVqeDZkJxHNz1AcFcNbz7Uz87KUrX4J39KjRu3SXY6gz6gJp5gvnCUUagVTnG7e",
  "key39": "5LBibZnoJo3oeq3mtRzqdX4bG9xKeGiyzZVWa5a5iiRF8GiPJc9RZ7anpFFuJX4iJsHaL8uF6JAEKqwELpSiTQqY",
  "key40": "qA7QdYzhMUpJY7fHoPQF9ZRZXjLh5ty4yuqpfxcZt5eddsuxWLMS59sc4jeFwjmSfeCHbeY2Hs3Us87GWSvi9gC",
  "key41": "5qMn24f6JBCPqgqXYB5g5mSN7LhgYgJhWpXz94s4V9ZnbUnJ4P62cTiySjMV5agYCLKrzy9kXuXs6gyoBW3C9Tmu",
  "key42": "5GM2LZ9Fhrv4B3jh6rqyVitGjBJSvTFfSLUnn51rho7M465zUaJZmfZbLojyi1uannTj2SnPqepyyfVawdox3ART",
  "key43": "R9gN64R7tLd2VeJgN7Hn8C2UKv1Eywz3Vja4xZia7Qi5RifFk7K2Mem3ikaRwZj57maadnbKEuAFaV8kTXtczGb"
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
