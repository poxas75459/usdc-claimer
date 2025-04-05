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
    "YB2HktTsoZg6Th8ovqNtYY82nWRpFpYYjDz6YjFjE66x3gYHeDDhojoq23TgPtaDsCPx3EZzUUYcx1Y353JW6uC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NifeA52X9rBQhnRBNjmZ3q4aRRX4Sdcz61XNemTJ1Afz88h8D151YGNvfVziveYvB38k67HvPbrrPkcwhqkmTRV",
  "key1": "2rMKXSTva6ZuodZdh5NgiX8EzHDwBoAHBcauhWbeDW2yQHMmPq8DXsN8kiTSjWzhJoNj6xEQNBpJqPmH7KYryDGk",
  "key2": "5kWeQ3u1gecrMYmcmKDZWTQBVZPziDPytKYWp3CydSUrVJ668tPypoQxwQaT7eGwkF72W88KhHS3cFQQN1Y7KTtb",
  "key3": "2tQDBHXjttdXwjmRysdZGejFYu4uyuaz9F55Tg3CUSZTfUECWFEKnwq4H7PkSoxkUeus8XZAa4FzSy4hJbGZH1wW",
  "key4": "2LmH2brnhEtdiUTEsZNeLrgWsqpFQvF79h6tadSnipAkgXLugDzstUsjpo2AcoYWhcbWs9aGSASfrefnvPLG3ae2",
  "key5": "4ouxkCQwxzy62yARughhNkgrxnMsPCkcWqwRTWfugwQ9qhKAcELMkaR7cTaqUAejKooxW9cG8djAMDHhUUaobXza",
  "key6": "3uTK6mKPYehETfAJSQFABLDnrNEhMWxWGoNbKkt9YNopAHCmx7NWghLXU3ek1za84Jbbw3F28QRcHYJzoqh7WWqm",
  "key7": "57Hnw8g1wkpWZd9N4fHufAzKKhjkVmqdjdEx1CQ9yzrxu3hpqDq6swDDFoY3VMmLfgDBqMUjjyXdTKeVcxdSrtgQ",
  "key8": "2jgXfEe3jX95C1pGsqsP3kNMr8MAoNKkP5AxRV5xy3BM7yrMRtuZrcZB6uuPJqV7f132Vdhs8aMejxrJR7V8ZwWn",
  "key9": "2gZoX87YX75oNNrw9mtafsvrQ9q597CqBqarCc47kx7NKNukX3CYwtBonpMN2Gr5bGxGh7TsU1FFbvT7hjxUujiA",
  "key10": "2oj7FAmrm6C39sjtZeZgytNBJpThKTkysfsRBSX83Cj3yLHnQYosGwGY3j1S6wQPpqNntjfquLPHCeTuUqZaMqE9",
  "key11": "29z1Yw8fYjSHcujVWCbTQDMvAj2aRXowcNYZom9qjGzUEbiFeDwtakVvsFvGtsLh8fof1hDtkQhsye9urvkqvTXy",
  "key12": "517mUMUoaKCTXHnBLToiDSSmrvzk37FgxooaHnigZ64ug6z3retbeGcXvABjayo6koSXiS5MJsqx13s5xPyTRgS7",
  "key13": "5hEiekV41dSHuvTbe8oZz5e4imsMBHzeM4DFKcEqYqbCn9am8LQXKiVxhs5NBMEoGiHMeoJyYhf56A6CdkXvQES5",
  "key14": "2RyQB77MePPHhfSSVxiaAV66XerrSA8w7o9mAJn7pJMmdauC7pZG7x1QnMci5AuEBqH4ucNSVRhPcFBwr4Xm6TNV",
  "key15": "4KX2G7QsSX2TMhuutvym6HqvMnmqX63HXTMdMsyRPd2hTCdS2PW5h9eNTRMFabJSkL1gFinjPTQncsTiKmXYYj29",
  "key16": "VpTy4HwyD5ucnYJyfnqWtEgB5dqjdU5cJ9Po5jPjP1NWpaEmbBEFcp8isBVnwbcMtAihLQzMh3fJizo3ukUf4c6",
  "key17": "CXaqju5LUeNrjNkzGqhwUWuhNz7NoPCEqjZXwVyKaTGWxkJBg2ZNFL3PUyvn6gn3j6Z1sm24cp8G5wdvT4ij5RY",
  "key18": "39HP9yif7eiV2QDpuTWRJUgUX7sfSzchr1mDWDpqs3X9sW4dCdx4dJY8XJr73DudMzqoc18rbSxmYFADyLFuRYFm",
  "key19": "2R5KtF8t3saKvDYkq1E7xopPT4YypVuPvAo9cRbQNPbkGeDEn35vw48QgBoecdY2CBs8VNmWiCEHt6NP9Mc1uQdR",
  "key20": "4RHBVwjMyAbfFc74M3MWPRrwAfnTJqf2s6Mrb2nno5siTV5twqUskyn9rwyBviZtM8p7GWMPSArmxnpN4Am7Mj5A",
  "key21": "4i5iKr5MJaLf3WRun9DUd9UJWX9HGW2Qv2VhGN2XtmixiZ175unSvLSBJRChZeK5ZczXqiJVLCex9JZ1KJxxtWWb",
  "key22": "35LbT1JnLzaAsqr2LfrmFRghU54PmXX1B9mAVb58PqXJk9WkFAWpUGrNZC8gWKtzZwcaEN7cpb1pvTt4jhXXNQn6",
  "key23": "4ZSGzRYpjXDrSMhFmDB4bFkCYfBjUxjLfXDRfjRNCa5AkqVBjc5GHy32adcLS7YRAkHsW4rMed1KQss5v2gSJppL",
  "key24": "4QKW1xq9cdbsWQbHLCNDJVypfFyLU4gTdAcV47N6oTSo7TBJg2RNtPEG8zMyX3gXx38kkKWzyqEe67hXSc6PPfMK",
  "key25": "3stvAkJwBKXyHrFCf219cb5trQEArSKGoyLfkDiW26vP5T7JwW3QBTNrGNeepjhNYW1ctUsrDLz7MmNMiJW1PpFA",
  "key26": "2fjYyaJrrCNvzcz7tqsWMbxhjKLwzXJyLgdw9QQaB9teJ7XRHMCZP6dkzQCbaB3TPjDshmGvXXKdK5XsFyBULL2e",
  "key27": "22tmbghLcjoYzzWZbuyxFoHsjrqUcx8erQgSKW8uzfSbYH1Y1NB5C42BMXUn44QPZuGz6gPHm2zJNVm5zyavx3tU",
  "key28": "3KpGq4Qku5Sq2g8h3cz3kizbW675evxAm3sVTLepZe34PmUtaVq7bAzZZKS4ZpWkg7Z6bYA8TVcexW8mfsUq6rA9",
  "key29": "21AJJeHaUKMvcj9da3BLByq2Mtz65z6xDoVk6viWwNzsRExeYvsN4Ufub2p1sD5PRjtmWQjVo4vMpaCm3a2mR6rj",
  "key30": "3HbY4tgi2niKCTUmZVb84TnqRiN9Qz1xgp32TMPcRzGca9q28tMbPSGTFFCmkpsnsv92fWtgCe7rNqDSazYwrNXa",
  "key31": "3aVU1YvVBNK34ZHBuhJ8S2ZdrpUNDw5nAKbjpde3XqCMTFTzMvDAAtHFizGGBsu95BjoTf8HgHWGwpquTL97dLhG",
  "key32": "37i5Aw3KkkM6VrjdqDS2NQMdqxvVPCNfEXhtmQyhFdLdnuhaKrUJPsGiZfpcmwQXHfzCkxghs7xJsNR88SyTRhV9",
  "key33": "2rJ5s254BFSH9afM3fFBNmBTAEqZDwuscVm5AY8QZq2dPa5sWuwGUPmt2i9YmpzriUb3y6bEVUfsZB8cprLQsqF8",
  "key34": "27X1XttAfiEC4gkGu3CPD5sBeL1Ykt3RQh3fhhauC8BiwDY5P3T7zqgm28ATpVMYjzxxh6ciQxzVLFS1uACm1AGL"
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
