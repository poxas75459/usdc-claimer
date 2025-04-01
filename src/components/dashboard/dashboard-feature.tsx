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
    "Uj1qvA1LzammwydzNRb5q9HeHRHUqXB6XQPE2YU65wMNVC6VsYj2sLAQf4RbZGhz68ztVQRTE2TN6fcGk8K4W8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T29rLGsPGBdsrBEd1qwugbcrLLB7TchQ97Fe9dTPpJhEeM9sHrkgxErKFJYgsmLyU4e8GpuEZTCMjfcS2nX69qP",
  "key1": "3SaUQkbU4RCvjbhKA6yYM7uxuLnvZDvE5csiBLD8MYfVus65AddEJUJKY7f5kSnuXXEBoSJCstxTPkYdnfivKGPU",
  "key2": "5pFDTMZoKwuqsbE7VsGbZEDsnqUimFGocrUWWxTg7WvwzjgU2MamHX1agfL2uW2PYDGi97Rbq4N7yKcQhqdCWZXN",
  "key3": "2v4YBu2RZhoQN9eBf9AzLBL1k33ZHknin47VBwKQ7kFn9ATxhsVsZWbWhfErn8z1UmYdzpvcXcpfNyZrZsE4Sbne",
  "key4": "5vfFoXyiWiieUxVRYZz3Ffo9291ws5pQ2WNoKhAJYz7b9Kx74gEeUjtywkGJtcpoFFC62QMrpVvHFuZNQb8r42UM",
  "key5": "23ihSERHqjhJsojLi3Y3b49YkBLRCyhoYZZPq8fedgFRMucatJf8Xj2WyQ46aEqUhBysdEFeSycWcaw4huqWQGgn",
  "key6": "44bamwhiSLY2vm9hHEkT4YdKNGwfrfkogELhCQ8cUX2TYGCk39UvrpNBjwa6sDCtGiPR99zkJvsnWsPWK6KJGYb8",
  "key7": "4Nv6BhMUcBjJ9sDNtxYyMqCauTquKBPy7VL6PCpp1NSHQdzohRVfpMR7pxQWLQtwXpoVYz6XXvfQDWEUrR8N5B5F",
  "key8": "5qCe2gd69ajjCmtTkW4B75fHn3MLrNsLDc9HMH8k9G3mMZvCzry64ddGNrpAwd81QLHJ5UswjcVDYVxSwqyKqmcx",
  "key9": "3Fq9D4iFXKaf5zgFRaRwF4QX5wddLUu56njMWYSzU878N1x59BX7vzS5N59tabYwRH5xiudRiEkaGFH9PLuZYRtH",
  "key10": "2dWGGmmcaKemebdYfnwxExjzr89ba7ABNEEH5Pri55pphQYSkdkiNKn5ftNx1Vez3zUkC3NJ3nYgi5WC1xCoPPBw",
  "key11": "4VZvjaoVd4UBVj7XMqG5oVr5MStgy1dCKTZ5ndXeib1xY27h1AQtxTjTVoYD5Ut59eCU5aLFXdv6g7dmBYNcHwW9",
  "key12": "2xTGbUkQcKCcRPJSo8tTvSTyiwAzpWcSZMpN1YCmgkCdcqEsCcnrMRcJtkb2agk6RkBu3j8L874tLvhyd3DGeZD2",
  "key13": "GqpYPNwvgGqp3TQt2LEsvLerhsuuCgo8YxuQzdgX7uVaeiX7BvSX8e3JyKzZW5wYSrxKMqw5NDeZuJ9hDnCibSC",
  "key14": "4KQ3MZyu9pmFVUKnpGaL5ij9e7FgE99fd5R3sE1FidwKLNaGpA89W6hp6cF9dPE78JJrfawkwGpB1x9pZMj5Qt6Z",
  "key15": "5BAqtwvCR8x7wVHLr5x3CsU8Cg7S7ScNk2SrfarmnGDmkEGjZCoMoz5BiYmuf7zJ11gA9Ugs6JM2sfy6RctH5Hqe",
  "key16": "5HDYq6rWudswRCiSEGziUp2SjUf1iQiD1bVdKqeRojVHtN7cE6FENu5yK1eUxWLhj699aTjnYZrHY72Wc1SPk26Q",
  "key17": "3M1nU5nGwHHfS88j7h1VdcZHZTBPA6AL796jAjghL1Lok8FD1gFUBXjS1vaKEUJXWCCCRekrL1JgKoRP227vBSEj",
  "key18": "2dWmjmiVzUVmxEQFdunEHm41yShJKaKZ1ZtwvPz5JEURpF5pKFQdzv5BTwnTJjz9DfteRrS4SufGBgYQnQLifywD",
  "key19": "4H9Hb1uXD5vc1y2EZ9eAVKUqKJGJ8wyeeg6zqz38qg3mkLF5LXEetkivXkKYi9oed8JqJTxWpUSJvVFUKJ42FRaS",
  "key20": "4FNxLLhXH5455Z93Au5yZBJ6GqSghtXeorrXUA2MLsVGxBNYktyWQwLJazFDcca274te6sKYgGQsGpmRtpaZfFop",
  "key21": "LkmoKdK8G5QEVVAT2tYsq8muDCZFviWAvrA6XzGFSWdHAn228HLzHtGv4MV7MpVoWnjrJMfepcqP71SX2rCqArN",
  "key22": "3BLHBiag2iHVF3FocfZ3SbVR3HjUJGVoo7NHw3WV8nYehx4DQhB2zuxnvhMegrBp5VPNFASnxH2yvK2v98peto4b",
  "key23": "2JbsreeoyhNT2fZTYHHkh9tV6P5m2rTMss9Aw8Wtmb11Up1CGn1aGTbRdKpQyhrfG3aG9HSnCDuDzPmdMBK3BhS4",
  "key24": "5bijXHjxTifCwsBQauXYcofpxeZSEgdvoaR5o7draDG1tPCQpgodMnkyipFrcDnMiCvLCGX89E2Z3hb3FV15bwsX",
  "key25": "48m5W9d61oyXEyuncwSDY8udfuHDBkUAg5DkzPN6MiVPqpkc9Ein6NYrX8n9Nf8RWfwip9rmViKusnAUB9WuTkBw",
  "key26": "2fAVMVGxp2PoFJ8UBXaZ9XdWWeMSBEHvyU4h3wNG8QNqvtXxKvWShYNQkL9AZ8dJzKvuXACKVwDQGpNzrPL9VUWy",
  "key27": "4q2LaDZAm4P4yB5MppWRWh6sZ39d9guBrPjHJ7HMjAEtdUAzvW1nREh11z3F5tUzyGDcQJpaKweihShdprFvwZG2",
  "key28": "2DM5X4k5s34ue9ex3EywpBTaDNnBae4JqjgkjmtP619t59YhTKittP6EozL3Tvi8qvMwxQ9jDbmGejf6RMn6guXr",
  "key29": "56RQBcf5BJK1X2M1NvkCBFACh5X6cYEfkWFBSpatjgLbewJztM6Jp5frC4kLphVCnRnP6idXduB7uWHCJ11UiHv3",
  "key30": "2JZXAuzCnyz24M8bfGAQokh7EN7eJ1AsUQXWKxyY97NTLCi7doBZNv4D12PrssBAWNN3eaYxEussnKC5GPgVg1t4",
  "key31": "5z4jZMoQaUqjKeM5SxM3Zi39jGQkdeQ7VxYTjZQ63Ev1dsQuDrx2yjqkX9BePLWPNe7NUuvG52XUrFgsfiZjMGFy",
  "key32": "41iwmAqCpK5rSgzdGEd4UA3xirE1GVQW9qYjBSku2BUGVNvTsMxBvGrYu2TopX2yAh2HUZizgYfVqbawnB1ZiKUL",
  "key33": "2ibHVysfLVyDHkfM1z7ebMDywQkdb52iccy8gFZzPjpwhbAAQQacQYVGbx38Rh5qp3hdGzHBZLRPra18sDWJyCiK",
  "key34": "5kmGRQhAjtqt1wjM1BADjC8tbUYjXn1HYVcGsNLKCheKPZBfocuzT9fLveEHiXjpW3UNSkUcjCWEnwa4BerX9rKQ",
  "key35": "4XpTeuse7aF36LrmgmkmRHFzYaqkmkokSbyn4ahzBqyKV5iLxr13Toitc2PHt5UwSVj83WhcZu1MBsWiqvxf3R1T",
  "key36": "hFb9Baq3kv5b5AwRsEXXCa3uacfhVZHWcWX8TwqYCjGhDw74Diwh5uo5gPc2rSw2Qvt17fpzexG6WvNGKpKfhvA",
  "key37": "SThg1ZpbhNPDQ1mNaKWjzqbukpXBWELSHuhsqtfquyNamVd8M2fT7TAbFCyApW46bAensV9eDdjL2c39wfL7T4A",
  "key38": "65Ro16Zqmrgh7e1KrAYi187SVt9PxJZjfHLesWvUaV527pwzn2PpSRKV8uySENfbntsR2GMbehnfAT2KK18XrX22",
  "key39": "5pERvCLm3n5J16UdRmmXjAPJ7sUT9EWHPHcMT9YVXuhr865HR7TUAZFzsNRLb28uGkZygJ3WrHYhehFp6NtSBRNc",
  "key40": "5bYYgRn5kF5teD1rYHDBUn8WdN3nJmaUAVWhFnqDAa9TUq71DdMTxbKiEqw9LzTfub9s92BeHmFjXcTyKrnoJsnQ",
  "key41": "wVv9rSfWbcmuxaTAZp5acAeVtkthKyGPzr6xc7ojGKyepfhBkVnePgfagXY96Uey31PTPiJLbaXmQZah2cPJ5Ps",
  "key42": "4hWk8HJzjtKDz6h5XR2MSwbMqyHBuVYRPxJVXNzBCqiQoengJSNWYxdr7H3tHPniNW4c2wm9V2uwkfLB42716JnB"
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
