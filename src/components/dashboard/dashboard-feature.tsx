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
    "378KgTXgeL26MZyqPN4FXV4EAhvzjBjMBsoiMxhp7HNTdzDBex92ykhYfXK49RBCKFTpj43ix8uZHhqNvroSs8Hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kitfGCtagSre8aQ5QLtouforSjC7e8fzh8dp1ngYFDECgB7swGDVPfPfiVdQMzSwjMoeSPSwcc7SfBNEANgbMP6",
  "key1": "2CoyjecEMH3rDUbuTz7uyQQx3VdTGr6SiCLd1LFgJGnec3Fxjfh2VFPgojasd1XK148PS4MQ5LJdW5iYGZwBmM6a",
  "key2": "5AK9j9MRWSmyAp2GwrHe3DvVZfyEgfQP7AT5gyNw4umApWPZScXXo2uYbsR4ysshmVRW1y4LZr53Kcbz7ii35pcB",
  "key3": "ywcMcFd57C8qozofP5GEweafexfpAc6gEw1Bhe1P8abuWjJyfqiV2W2eAHFikvYryUSNUKE6vZRzNMFJbGxNQRr",
  "key4": "4maWt57XgMobzLJF5xxMdtLdSmAWb88ukaMKGExxgw6fBj6dFkFqoAfSC2nbnwaTwrDL2ZufRpVHN5uhi7nEZ2RC",
  "key5": "3i2AyfD7sozBJCg8sxbDgwTEoBKghzdN9qaX2dAXdT54zkxmMxyuJDEfYzEdTvcpZP1KNqLjRE2KW1zzCu711mBh",
  "key6": "4LSKXnmNMC9UXeo135YasfVNN38Hn858wo8PUPZKzHjLKfMSCoPJLQRo24MHzSnbuo2ycPFAnktTLJwRqZHr8uoG",
  "key7": "3EbnZyZobKS3zkM27JPzo4xZj43vha1ir8jZvDaG3RYmhbtNdPV8bSqS9MwVdT1wEzwPpFTcXkQ5KDEJPjeMAUtP",
  "key8": "4wsQMsAHai5aoMS2Xi3NrGG2hRLic3QEuKVjxXPA8b6mYpMJfigbDPkX561aJh5T6JrSLdyHwscQnnuVuB6ifzZt",
  "key9": "2NJchaVx5Daey1ifcnVWRBzGbPDLVtfZXrbUiBXFTMX6reBzEFMTx8ysqZeb63MWBsC5axZHUJx1qPVWJwdX7FNz",
  "key10": "nvypfpMje4nKaqv8omqMHfT1tML57L98MHRoiH6babp8fdBqMW3jVLCXD1Wvw5L5bd4ojsN1Y9JSCvpZzwkAN94",
  "key11": "3JLud9nHFk7qSZyYJaekjUVdPhKW6rUW3ncdHzVriFWDem9Qgz1eqtPgeTsp4Lv6imnWPuwuozgr14VWcAXu5HEu",
  "key12": "5koaeGGkRUSfhghxMw76D31XpuTbtp2k66pfEC6F2PM8gSuFEy2EQZpHaNWwnRskgnWfUjExzLfREFnHwWEBnra1",
  "key13": "43tPUeJF4omsyia56PmwQsssXmbD8mX4WGom4hVvBfjz29YxW2GuaA4LUMspJvBBcLrjKnPyjxfPNAJgFVzb5b4s",
  "key14": "55QvvH5aRjw6D2ZJdofz1En2d8fQgUp4R6p4fFyDTHPmhesKT4N1S3KnCZgLhcsqv2op9MpP45ZuJP883eozf3xq",
  "key15": "3TFyWtxCztDBr4d4mMLFCzhEh5996dDri2g4PLQqY3ReajdLZd2P7REMiKfdkVSHNgvafXWUbQMHXGqjPU1vcSCG",
  "key16": "52XcEckwJGZJjmUNyHUJaS5BnZ6ohGPFx1rPAjzm2U3tdZ4FHQxNxLb1d6K5cHFuqvQBcysqni3DhYnGGPE4P3bE",
  "key17": "47KpgN99Q3beEMK7DJeXHsKxhfgJCnwVNzt3xBEC49zipNDzoawEN6F7FSeyVNVY94vujXQLqm8e8KN1zCrrjKrX",
  "key18": "5tbGtDmiNiiqypBcG8uHeGa9LdQMRpagGFqssXBozXYvQUXbtQfWdfpcG8zA6fzkhvtJcnndTZymNTpeMYQP39xD",
  "key19": "4ambgwsRXSmN67Rsrg7qEGnK8mzDK2oLKYGgb5rQzLnbScUUR6wqj7RrYsueNELZqi5mdc3B2JVtdy6VNU4hQHap",
  "key20": "2JuVuWQFccgLcx6dRHDyZXqsbQRuYjvVS9nP3hosYSBESg3janDf6zg7UqqQ46NEp5S1P2RrfVWM4BLTQ29tr98v",
  "key21": "4wC5KAkqi7LTXrwR8kLDUtA9kLTLC2rShf51E4qx4sjkmbc45AkJVgCQWScMvjem9ftRazuiuHXqgxi7cVaVaELx",
  "key22": "5wbCWTf4VkLkAVPE5oamv1UrsA8gF7B5hsndifP4Qi7RwbEeTj1YSJNVsGa9b7vLz2tjSq2S5RwSMg3BcsvN9tTs",
  "key23": "3LpLiGprSGfq3j4nb4YYoE8gWTv6kTEQg4cov8yKhApx2fveWiRJ9MNWWXNdyb91B2PURqu4XBW5QNm4VrRJjkSz",
  "key24": "3k1hiWgPv2ecb2UrAVDXmsBEwMjXULoedXuSiEBC6jSYFPKmRsDZV4UofMX6tZqMHeSWDG8FbcjcW4Ntm773y9Ru",
  "key25": "3YuCD81n9Dsw2cf8uuq1YMQvNCZPpJ7rSdsHkyLPJBVPbFicL3dZPhJn76mFsbj6PeKggC2eK3ePMyLab36EhFg5",
  "key26": "5qsgzEv7q56NHz942P8mMedkEnntd1iS8no8E1RKYyrNKb3Z9cAQtWEqZasWaruBCv3pzy859wDn1d7hPnSk968E",
  "key27": "4j25rtevZGXC8hm3VeXri1NQaGipJJPAr1qHxFb7MYfNmjKoVRzYpQj2XLBqJ7opw62GiS9ogUJznCRxjweytzVC",
  "key28": "4xiG6UBCtpM9JSfwYfgKsi7h26CNpteyCbEVYcUgvnc1N6zadyskcHDDBoGJUkPauZvWNwVtBpShsjrGUgBv5NDq",
  "key29": "5AcvqN8xYnLT4JyewaQLpYe8144De83ASX63P7YYgFeGWif2h5Hjr216dAJQX197WJXfjPjP3sMhycF4fc2nRMYD",
  "key30": "5MpmYUjs3QxUcnTRrjB78VZyNViXwUohLMZyFVQYMmXKBaJJhL1TRWxSVuZdHTqsEGCZH24qS8QEETt4AfqCXgu"
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
