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
    "gMvcN2Bggok9szwrXKocYEM3zJuUeMrC2mfjLweo3LrJjRQHskiammBWqj3d8K9RJrBbh34kUKGGcZK5ZZ62uaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRiGTAnf9W7XTyGZ6bumK4Xww7f2L2xHgigBWCYoAzyfCUB867euuHtFfvdkXREVjq7xa52qyN9w7HfZbidFoT9",
  "key1": "57fv4UzwuRZNRdiADEptsFuazhBZ6dt1sAHBaVpWhWCwebPX9XtcuqYD124faQJwBEZohmeqWqTL8b93p9ArN298",
  "key2": "3eTXudHYBPT2LGH8ot1zGTwkssuiS9PYQ8i8xL7CCrsq1Jq2YBZadBHMRzsG5CcDvSSuyeeEPhfjhM4cigDfh1RM",
  "key3": "2T1NbxFgQAeqdcBrrpJm5BnrnU8C5mhnfcHyVY3nummqXgxXU5awGsuyD8Tc3Zu2Tnog1aWdbWgL8yLTijHX8ez8",
  "key4": "3KN85WAjkiAdHdyKFN8GUtKaaWY8FK3D66wM4BR4689EUxepUJZRpX4Cdk3xxq7twtxoT4sjxqnQBqGic19iLvwE",
  "key5": "55EpHzumWmhE2KAE1q2REVvZFk7iPc9aPS4oQAUwcFfKYD9HtZXzuovvTVVSgojXAEFDtLgVX72SZKSknheudQu1",
  "key6": "5q5PkPS1ASqicgC3qWwv2LWuABsSPrf5NH47aB74mEQCeDXSLvzG2oQ7hYcfS4Q9sXHLosiVT7Hs3itUbWih7sDL",
  "key7": "3ocqggVE1YcpgnFRgnQh83fpM288o9LezL3HEjyDG3oA7gmrbbuR1xfh8cyGp3fGtHnyrsEoBouk8gSTbNMtCLmS",
  "key8": "nRJpnGTBUUfZAngSgGXKJp9r43Utn17auu3P8nzV8G7snKfrhAvbTFKvWy6yu8PFwWWigExvyGumCqWdoqA3sms",
  "key9": "5n5CrChaYrm4USgSdcEcxcb4wHwL6aPoYNXTnoymu62c8xUX3YWXJhCwwjxqQ5mpB3AouwJweYeRFdyqVeMaTRp",
  "key10": "4Vm3AjMsRmK2gUwaTaV7XhNFFdKr9Jia9Xz9MzivEunHF5zH1zCma58yM7kbzBgXkkkeqhFdrPCs68BKsADzG7cr",
  "key11": "54hRYANRJDKUQm73UP3iEz8QG48R68xTCo46K6GjA16nLhtbMjVCEgYjmUfQZW2i7AXQntRT8X7Lxvevsr9ZwHZg",
  "key12": "43Ejv7r5mJSJe1hPFLquHG1aTLrFvNCXMFHebBuqkWeX4VG74wCzD3FsYvPVVe3WAFT4pG1kewY7Z8qHjN1hgDuV",
  "key13": "5nzUh55jfNJGrZY6mcMMnL4Dm6qcFKofzSv9Faf67DJGCooNN3VXHVM6DTTUE9iLoniLjgrRpM39BeHEGY5MByc7",
  "key14": "mnLhiVR1S5gM3K89TatoCfBF7anM4mFuR9pUaSswR2X1Jvc7RDRhx8jceqPsGYmm7t71MwoZVQQCKtWnUKn7465",
  "key15": "4LFbvtEsFtWsFzqviE22abbxqXnCZtKUs1Z5gS3Cx1rKyhBDaNqTGF81y5ci41pA9n9wrKYR3xeYxJqZmGU3ZVnr",
  "key16": "4hyQ58dpTQs9ZGrAUkyugqjjFqxVNNScwAbx5J6493Z5uJBB15h4tmsmx7fdLkMep6t5cAyZFdGjwYWXQHTXTfAr",
  "key17": "556WwGriAydabkBMGKsnipB2do9Da6siChvqXjnSduzzR7hLNVvmJCkZqa1ZzGhq3K5kKYW73ErQMLdQAwESFe2n",
  "key18": "4H9h98bshf2YNqxcg3pCLcQcYAAMFr4kvE4AFCsu4219Tsqfuzg86FamvLfAb1o3NuhQV92jdh9p9q3ry3vfZFV6",
  "key19": "7w42hYeGbHvpbvq1SWDTdVF8ds7eNZc9tCLvaTGANpzdgeE3P4nuqjn1vDRkPxMSRLGUFozaybmkhwDe7kuMDoH",
  "key20": "3NuNFM3vaSw9qrMhTffhr7CBRp3TAs5QjE5R4yUatt8EaCLJz4fXqLwR6r4VnVRTu5JptZgeMUDsBVkKhEUeqNzx",
  "key21": "58YAX7DUnBdf8WSfdqPXqxgTemsBeHkS4hT5jHhKsQEZJ15iuHy1WQfqXFfDsWg5VvJQCHn1MC4UJxdYaxvfAuhj",
  "key22": "291izzuKawvuqUC2WEzW3sPGMvYzceCRjdf2DfihPYWDE6XEowUxMUzJvQHCAXmnVXGPYfZVqvKr8ZukXUfofUaK",
  "key23": "HtEW8Ua2Ptf4tepWFtqNMyq4QJCKXPhWwxFkiSNGhGDidW2oTSXCwjVVqQLz5B6kSodtqLKiZh13RtSSEQzZKLS",
  "key24": "12394C7kpgeMUGqBwW3JNes8TbzwKq2JCPUqc6SCXsvwxaUsUFyNeYB9cth7PuKyNY9EeVhdq8JpWe5vwRtSrriP",
  "key25": "5VpXLFEvzDVA11CZXtUKAEdFSnJ2aEqzfaGCYmxX6DYK9rtSTZMbAXd7VNtkqWExGBuWPT887BNgjnfeAe314FV9",
  "key26": "55ycpdRqR5KFnukTeJc4M9SL1GMTYkAhkVHeUXE5R9yfuVydEX5sCJ577JBY6KN9N2WUeHfh2XqU95m1rMHq63RE",
  "key27": "2icLWcvDsobMySQRpeaMyLf64dCN35NByHNgYWT7ufLNZcuUmDbhzejLrGYXrUHhuGLaXaCUMK5cjhMaB2YyCSUs",
  "key28": "2b7Vc5t4iMMMLArn9vX9ixuoLmWxzZ89auFdcfEDgHUZP8VSXBx9yNSCRdBbKXdt7uEAtCFKe86XFhx6k8pyo9Sg",
  "key29": "5EQbhcAXzgg9MUXCWNZpePTCaNHT18en5rgwmo2pCtrk2KeKoas4oWMmw6H2TiX8V6zyPGAMPA2vZPC14zzoctge",
  "key30": "5mcyntU4jk5vBnCfuhKczoNsmTdfFoBDnNyT1m728Hx9ntiQkoGteS3VcjkU3sLP1zXYL8BF5LqZxheibXy9JExy",
  "key31": "eNgZazoLvmRYsoP68nNo9WA4spdb8aJuVxwFpyZw6Byc6FToVm2n78ofhfJVQoCVProVAAvvU2Qoxdg96CfLZ7H",
  "key32": "k8gWKXJesdd2dSppLNRJPjVgj1AHFwpSQDjHULDnocya7a3zoPaHPwuTTEhiDZLzV1RVPQt2jBKxqaZDrAWYQyv",
  "key33": "2uKv8qhUaUwzcxcgGyvn71tttxfeqUvgUixW6LHNdFkJjNitrKfT3dfb9cutC3udpqF6BksngYM5rUpQqoocPVG",
  "key34": "2vCJ6rm5dwMMNiaDmVXbJxPnMAH8CgDSr2VamAz65nWeYxBhh5JX8P6KfFRn8jVTC3B2hCH9gjRxyLpHkeCxQDsE",
  "key35": "58mjy9V6vaWPFyZuPuUE22p4aMyxHMEop6o9weCJ75TyU5zTgpY8gsiyEb6gktRDfD5A26TKgLF9x1egYYMfxrZb",
  "key36": "4a4A5RHYCzqVkVHgCSKvh7pUtM5nK8zA3D8dLertQGSpLjxfwoHUh98vysBRAJM3tgsPMVqxSeTySTKbsYjPTZ8z",
  "key37": "2orG2fFwcbueJbybAmvTKYkbH4xxJHrtZ9Aq9fnJKpD8H3zyYsvi8uzzkdBPZgRq8mVbKKDueADi2LG5HNbVAqfg",
  "key38": "ZEmRnpU1DDtjd6thiL57fPiCbbdMcS9euqun4NnpaNfW3MJKTepcFz7zzZSBbBoYfHHyt4wUNsW5KQSCdAamnuk",
  "key39": "5RbhtfKPu6r4tt6ddPe141XupVwqWUv2kKQ7LTMHNE6gvVbmgno5wDcJMthHnygDQ5yknvskjyr8w8Kgibyzy8Js",
  "key40": "5iZ9RDypZNJvCQ3ESv6eL5LZFEPKodDJa2Mqk5FxwYRnUSSz6PKmR74QW6QUUBcPqkNRzv7f7niz5C9rYSuhSMXT",
  "key41": "5z7NTocQDxdk3GGCseDYBCUYLLb181B2w2DLqTC8Dh1WPSTjGF7w6ECjz6zXupdiyXKmmBGXsng3keBwNioVPYba",
  "key42": "oivmNFsAHP18dMHogQXg7jeAXB27vygvdfsYHPbumxuok6PwQUqsXQCisLNd6XfUrA7sh3C4ZupuUfwLRYJkSQG",
  "key43": "3pqxv3z8VCR6NjsRHFYkc9Jx3zbZGciQLQbd9QTwp79c6gZvVBwrWH8XymYXA8PJSzQReqvuaq1hqnB3KmpZWj5Q",
  "key44": "3hp2abQ9xsjU9mcJpFVTHqyMFpCrMrqZh1AQiQQB3bVWQTwfHEE4iHaCHh4uPaZSTfxJe1uZk9RXfw48RkJyqNYz",
  "key45": "226KZkdJY82jR9phtvZtyNiXimvP3dNp7mpjKmGy314SE1NHYw12qZkaJr5ke3FGUDuoUdX9tjH2ZAXTgsKNuprG"
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
