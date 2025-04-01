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
    "2W6sCDNXPZ6zD412U3sc9MQqXVToBwtYWeUdncGvoYaTMerYAbXnmtNbrT2aCKSyYtjaUfdW66mVkxkMob1vpqmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Xg188dofBoZLgBGBdES3Fm5oRREXcepqqy1FLa24hPA6MuBZtpjcn4TbiEekjWgz7ehDkAdPXsbM3pRbYmZMBc",
  "key1": "3FB2kccwzBbnXP3VXFb2s4HfK2VamXrKAVEfWLYMWSXXQ8GLwrQrffGiW9if4vJtfik3KasuWePLgcDHHgevVAUB",
  "key2": "4TnUCco51frhhBuXTEJFsq8VVuy9tcgmUbG9ahfJdyxmviaQ3DcettakiX7vixHLBdwzPD5NFrSCKznDiPvP2aBi",
  "key3": "2PpXZ6BxtnUtZndd8pVDSfVa3auANtoVEKz8dFbcngLYKqWHV8wk9L6YsUdCNEx45Ma7pn6oebLTmZbEEuRv35oF",
  "key4": "4qSou6WcxgjBzuMYmBeTQcoPGJHgAtTqD2JV1d29ZFFtWu5SERVqdmQvVMNraDTKAq3GVYZvFQfgASVviouGBXgz",
  "key5": "sMdnTuDFkXHJuNuykFY8Y67Q4iBp4K1otmXLEDn4XQVHC9kSFso7P5EmfuMLoWcLXFcqoBWaJK5PPe3MmWh8PHo",
  "key6": "xT7BGgqqP44vdrJcgwbhDCpmaR3nbapkTYxuQVKt26xGmnp6ktHXKDQ9niyiYnzqiu56ovp1j2u4mkTrQiu4tnA",
  "key7": "3tJwtkb7U5buxkuwYeagjZXRqWaRMrp5mtPLzS3pEfwwXeinBaJNgUSdq1LN6MUJL4Q3ngVEccUhekJLETEnQzf1",
  "key8": "5EtPeoSaxwaAVTDMBRpaWHnovoU1ueAsz1Mj2BWzUtwS9wQCoJADxAeDEMUypax3oVv1B4HXi6Rw1bJfnJyqUnqW",
  "key9": "RXqcGwHA3k6TKcp9UuiTSUFMCuWAzbtf3CEgzQx2jD5Za5TVKvgn81CG3KwPKrwMyueQvZj3UA67yA24S7wqRyG",
  "key10": "4DwvMQWMeahb68wkuzMZJc1jAHP8x6zJGmivLZhCAKUjtNDQWfCXRsB17VAMZD9Rd6rDCgWC9XAwoKmgAsJHq4s7",
  "key11": "5fp7xhhaCcpQdpuXjTzD6BpH6iczX3gBaHr29bBdQooiJY6d6vbbDZzM6MHQDvjdqCNRzCahN5fN3Ld6PC5YuYZU",
  "key12": "9MpZXebzVCDQadFjdJJ5kinwgXGRyNAJaFjEVFx3NQ36hbswe9mKNW3MQq1TRUGxqQM4ybu9eW3aTEJhcJEjtQD",
  "key13": "5S9Z422L9TJfqd2ZPsaKF2MGGsa1nY9RBcDcdauRbidtw9yWX9CDGYVasXXyd1x1RB4UxYYvQJqrih58Ajhd8pnV",
  "key14": "38rHuoVJ3xLefAbXisdo55r2Xh1aPmAKpRmnUH4DPuaahgSAUJ1PzZNTCttcNTDJZVFhzH49pYGXrMHNb6m3sqQ7",
  "key15": "4gj1UsnuL4D74PePsbKhwmmWQkCnEFRz8aYRQtp6oYXXFoumUy1BGnvijFut9Pk29SnZo84YaumHSphBQgLBgQdo",
  "key16": "2RaMUEmaaxP7sXnYfTxAjXdD8iMF76e8G6PFgmpsuz6VMy2MUQvu46zvof4Jm3yrBuWXr3jxxNgtrnYfG7AmGV84",
  "key17": "3g6nkPnhRxjhGvFmayiz9qLFmXFwqqA9s6mrHMYX8dPS4QMqqiPRN7nEMAfK5z77WZbB8JYh45ExigpTH23F571V",
  "key18": "4oUZdHrNHP81aK2bFL5Etzw2Cs5qNJohcE4sRMZZkPGMXaJdjGf3wPZoNKaXmAyUggxcPqQLCeJTBfbPtxrfsLLo",
  "key19": "63Mu4H8PmR8FY8oEFohnQxi9cJr4J7Srvb3gsXUUTge7KSCaab5RiyC8of3WNqTobpqe8w9SQyC4pYon5VA7ropG",
  "key20": "1RzMAMR5aFeGZpt3j2XLNaUgC5rLQondAeS5GTUMSBHEeK2G2WxXd6BbbWJLtGZvuTW8o23cNGwPNsSMZERwPMe",
  "key21": "2WHYo3vqLuqHz9FFtycTWy24jsj4G2VWKF74g5vWe3K5TNg9GEZsbWMGYTwb5MkFUT2rU6okzf3hAZJQSjF9GS62",
  "key22": "38RbfiZd82kFT3swKxMByB4AjjcFaaGtPauZBhTfN4Kxb558dXTUvr9gQc8PkTekuSxsp7smwSComfuEVdzrk5Ds",
  "key23": "2rGSK8aruoSuLphxxYrjrC9B7woxHyE4JgFie5hq6Pamz46ohwZtPuJyCQ8S7EZRvKcfNfQweXy6QHzgij8DihZd",
  "key24": "htVfKmYGCENCrd5bxY8xY5WscxjaaSVBTgcHmBJBgwQehL8yYi9argq6XwhbU8S5qm3q9epjSWEiaASs6afmUNz",
  "key25": "4Mi8fsK1fQnwZ6kQJh7sQjR9kQiRzVHbDB2Vtoq2Jxg34SQ4kJ9az3UJfQWqhzm1ZKMZUZGiZC3SXabTdKYs34Ao",
  "key26": "3RNj1KmfhNg8hvuyq9sNcFEThuf4YbnZcr6zrTyviz9KSUvZfoA8uxK1sQ5P3zNVNebqnG5RMgWgWVbqa9uPoUr",
  "key27": "47PCfueXfweAGrWKpcVgTDht7yAKuno1fokezHufm6Ek8dgfqcrwK77bhWuQyxve2vxa44s44iCsPzV9uJxEfFFS"
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
