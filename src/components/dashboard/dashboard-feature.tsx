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
    "5ThLMSbgpswh1ZifNe23tGMp6pNcmF6b7tuBc6CKbpaFqWamdiWKiZbKg6Y6kwNTwRyxsmWHv6sxZpM653MYUX1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AdUwWsWWmeUCJ8eTfAXUB3TtPHUtkHKcWDH5G1FPDzLhLpn8C7GJokDD54ykhkmSJivPgH7L7nBSeM3S4sBLmss",
  "key1": "4Bdr8xzc52MQcYFR7xpEcpa1eWrZbMiFxa5SJVZMq2J752DaNzdhQBQazV6bUnRmcohKg7jixMjRE87s7vGE1nKw",
  "key2": "4dDPeDkY5esxKrHehbw939CUPNE9Z4LgJttSqpcCReJTDt79EeABnxp4ftkZBf1Y64mJmGNmc82DmvFhkDvh3VKW",
  "key3": "2tD9eMhbzNgdfJQ53yZwjGfUgyJ3BhRsRYkX2mdd8F2NJ3654McxDMdas968589TxtCtrduENYENos87MmnTAfK4",
  "key4": "2EaZkmV6H33GbMgn9NpzHJGus8GPtt2KXX7TDX9jkZ9bttDrNeYcTaqL62y3p7366Z3wz5YcBQH7QNJdUeJFYfrP",
  "key5": "33H2g178oixjncnbhsFVNrvyCBW4wDS3NcgbYkpM76frdpseV6uRCATt7GqyA8BqoXqHs9pzTEEqURYKr4b1Z833",
  "key6": "4Wkkzj5AVihritgpGHPAikaLKMmPeGFxdbNNJLrf4SnvKSX9pQFhtoUWQzdzWBYWJzmFHfTqsVX68hSfT6ZfLKKo",
  "key7": "6XAxtR2ixtXpJAopQLawZSBenZPqvqQrjmjgc5M16P4EioAtKuDHATgLousRyGxHVtN1UJNCSD46c5cvb8WfXWB",
  "key8": "gZJpMvEW1v1U1eHHRVBnqecfJPZDEY9s4KX5Vr5WvhZvySBmMcEebtyqaswcH7wrykPzMmeQTMRTU4WJTX8Qzp5",
  "key9": "4w4iGuPjPv7VUMLDbDgKKZtJSEjY1eUFQGugtA6iKz27qQfSiszymR8HZRp6yYpqUEShxTiUiaNDJEsVsyujZYNd",
  "key10": "sCweR5Lq3EBi1uERmfTXp4xXkFNDpmPRsxyKqaD1cdiU8WxZ86P7EiVgUDmmo5LgvStWyT2MYcvMusgdmQV92BA",
  "key11": "27hmv6fx6y7t6utPY4kbQEpATREauh7fgmGfBPgNM564z3wikYE89YApasurF2Jbghm2wTMRhQEQpVGcP4inVdg2",
  "key12": "2gm4p6dnBrd95hydDUbuo2mfnAMhXwhFSAj5EUgzgZVC4tEFPYMAD7Wvs85agBLZ8FcKiHyDAPXX8Fgz5ZVxL8Xk",
  "key13": "2v3xZBDYUFDvgeefLYTHNQ6Yr9smiWBsN6mJnxNLDaPRXqSsuNsBjzfaMASoCnBsGBgss2owPw7hgCjGzRusWS3y",
  "key14": "5ceVotcdfQHsfgdvZDQ7wsAjsCzNYSEYtzuFTvgxdPEieKKHEccTwqdfysXrR4MUEHaPWxYz7TzkuE2km4SKw6Eh",
  "key15": "3iMRJ69Pko6WEG4Q5ELJ9GSPXmQU1B4teio4UfTP6tGNA1bQquAQFrdLzXQ4zgBZNKEgFjVzhVbhb4cSRAHNdHM1",
  "key16": "3yrM1su64fNmNapqCvqft9FASBReieHSovxFWwC36oNMhkg2Sb74mjngutarTzFu921L5F5mjPmQjshdtoHxx7TQ",
  "key17": "3QUS3uKzAGSQyqhNaQKuW6d5rQG83LxhE3hafdYTcvjp1P1SfmJ4jzqd9rTMjUemDyc7yKpofCTU7fv5Yjv4wTck",
  "key18": "3z3GWwpDBXz5a1vpNWqEeH6wUu5pHf3YadSUMbSREZXMHyDaB6x9sdftnyFViLfXeCdDYpgpWJKi4Jbe5qM8sjA8",
  "key19": "DvBHgYz5hALYBXhY5crXt1Ek62WpPHDtZxJrWRFoBMwnVrSi2KUnrupExLRHeu5Ys2qs4ACs4SHKcmg2eUGQD9W",
  "key20": "23ph1yDjSPZryVZdbfHiyh6h29KchnJHbvNkm4ZW6xD13AZdoTPj8WVGTe4JHB774DAzWssT8FiDv3iyxem4x223",
  "key21": "3cN6yvn2vqcunahvXPwZ85HopWbZDrpDoUkM5xyCB2qqAnA7ih9ykZ64AuxPyNtz3VMo4oWskKzdMj3brBa2tdqu",
  "key22": "5DxH9ziLPbv5xBjSdFv6i2jquxFoCKyTSpWjfqfdt7TL4m5tHE8buqJuytfRanmUnwYaVnPEggu21viHor5qkHjB",
  "key23": "gqVy6z9LrKcwzSfSWjigfwEubzBpN3tXVzzJA8rBL4cVoNd7oUBgSvu6P4e2pKaphEHNY5fKWUMgVwQC4C3mRZF",
  "key24": "3c9JBefeawAJYk8MxPQZDxhJjCWJhwZFiXzD2RgVbg7QHoFvGzEGW1JmdJyn9RVctGKWvpkdkfdHZJ6QZsF6w5Xk",
  "key25": "41skVzWDy6iL8DYvrLiH26auchGHvpV1L38AZbyjfajX2HBsZaxNWhYTBZUQDft1mhkNcYHGuki78qW7ptWMNJdo",
  "key26": "5KFhAerweqHWxpVXXefVQbxeU24Z52cTmpKQ2m92sJzy7XLLaztxov2156quUHWvQEMu9Z17kYE4NZFw33WG2BB6"
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
