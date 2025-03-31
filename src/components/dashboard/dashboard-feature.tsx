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
    "3quaz51pSKRcKWdBT61HCKrKc1CiM9HkNc3BTGmn99sPVbsaXvnictUNAAbGLuMDNArqpvfiDMa7FnJzyn8K5VYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWNLbNDPbVETEqhscsbF5nt4vovK4ms61LpVVWHMbtWjbNr2GVrkkqgjeRrURZmjUJN5CAfXJtiR22bLtzXQ1hm",
  "key1": "oBf2HE3R7pPLbSVZNqnhQsMsfVBYQLZANuU38zeLhiiaHbaspfEL6EUfJ8ueFjWtKDhXoJcH1ksqJtLuLmcAhLC",
  "key2": "3nXJxHTrgbny6c982p3EMcxZF5Atfh7Xz8xec6ZcAJMfBPNzaerbcgamj9zaNqLf2hcD1BitfnrVNrBY5tMYvKkQ",
  "key3": "4HkNWQKx1Q4Sqv89aCpTnP4ZZ8nMcSKbRFzroeX8zAGz1qNRfwtBqZQxtBUk8fqxKdQkfR7XrE4a7uXsUFt8Xzp8",
  "key4": "JEPc44CKsyyMcNtwWR5JBqjTfWoTzSieaU4zTxpg4SB2JZYFSAvvGL96kiPQVGPecK6zPZPmt1MEhQAqET4jHwZ",
  "key5": "39xYb7KXkyQExQYtPSi1RYwVd4GRjhQ1HwqyMqhYF7pxSckKdo3XHLQm6a3c274MwaNY9QHoUaZDuQEf6YesCkYr",
  "key6": "2A4PASNB6Rmjsapuk3zszXhiFAGWzdAqVZuiVbtRVsSdCvo7FxmQk5XBUJtxTfRdHVq29UPa2RW1Dx8LCwjUAd5d",
  "key7": "5dxhRWvngHHqnetJ3gPfTXPa1mkYWQRGSgwSqZsXMzKQjpnHzdPLEgy6sBdhELQy525tbn8DL5tRGj1yNoWFdwqZ",
  "key8": "SJ9WeHBxBBXaEvF9TF4sDtuNaFR8rMMrsaty9fLYMYX26MWmanX2bSasoFKRZAHvicMBiyJZnt171GEKk95paVQ",
  "key9": "3BK8Y2eihF6GyfDPQoBKT27NsfdkNSqEN2Phzq4X7Up5tHaUp9ZuMqX4e7oCQxcMer5k74HrbGcdrt9QCQwA38yA",
  "key10": "sNPEikrSp3uGu1SKdoHSbfGKWam2yk4QZuRTNVQS2pwiA4Yzb8g2DXhk9xgTx121xLCo75u1ynrTAHyHNiHyD96",
  "key11": "i11oZyPK7pEQYaUApZygNH9TWkmjbJMjwdiySTe26cJ4XQ3WBSsk2NzZi3xN8o7Y4dMj5UMnvdsbUqvXFqJsvCD",
  "key12": "5A7BxeodF3PFcwRZjYx1vTErFNFyGZWaFaxRgn96uWFdZrD9czM1CZEVTy3r2tVAv5tByHB1mWcNXtD7CoAGQjn5",
  "key13": "4YtqzejkUmzXKcjNL1DVuVdUDnK1S6mKc5N6CSGqQhikpEvXiYwRH5RVhLryDzBYueN6RK5aUyaeAUGS9PsojtiS",
  "key14": "2ZzBpG1EHyCh7sU8XnPqH1RmZggWZhRDpew8GSS4cYw85z8JFyXNnSwgU2WREqdWb8DcUVorySXxes9tzWjfBcUP",
  "key15": "2Z4dF57fg7HxeuDWfeuaZkEJe1GMhcdFcanTMNVBwWtGh6Py8ZuVG26ujBSAgkhPkk3sq1wduNpYmT5iKWWbYSEy",
  "key16": "4XBhiV6SfVsJWwHdZ9skm7twpoW32MgNhjjF6Z3xRVycz4SEyHDpkbwykcuq73CHfnax765idQuYmp9cE5sjsnVa",
  "key17": "3LpaRE7TBdkvdpWnDmGNCYsqQKJPhFCaUmRBqado6GWvBLi9EeRFo3LBqqERPS15GaKtstF62daC8h2Ey9nN42VT",
  "key18": "55TR4SJ3u4XyqUzq9qJivWTtsKbdgXnqide3JrVnC1WEA968egHUzwovgEE5FJ6WXW95DfAiKeosv6MYr3uxUikH",
  "key19": "3oxqNxhdrdLrc4vzU7i3RVxh3RKEYiMSYv6a9DVKx5w6Baie1khaTWL43avwyG5vXXAyhhmTUcJE9cu9hAXJVQa4",
  "key20": "QjJekZfTKudGtLGzx6UKdavc3aRiZUiwvHk3n7d7cpPdL1CmGEQLQyriWjX8JAQ5yyKf6kEffVuNcTxVRKkhq64",
  "key21": "4gs2rUoSs6sh3reqh89gzU8m4WALhpV6HyDCFeyEUePxH2sjH7zj3oguPYEZhGNNX3bFh4keefXM1NrdNpqFpd2w",
  "key22": "4271nd5vDJr7DQ7hDYu8x29LUaBAVLMPPTwiYL9KKofjai2dkvyR4az22rCCRPZxNhsyLKNwZxYs7LGaAtDNZGoQ",
  "key23": "3btwuj3vFm9Aj4AvCPe7A5tmh8bki97unsdwX5ntQsqiMnRYhr5Xrp15eJnCDuKdA1WpmV4K7t6oHo1a5EKgMWX6",
  "key24": "56uwtjmjteFe28SvvDCfQBL33YESuj3NydKCNfWN7Uqbau3Fwa3JhYjv4Emjz61js43ebF4uqUw4oqhUZpvEQFAg",
  "key25": "2K8s1f7cLsCfJdMvbrHbQNMBCEKBbHqRvVNxUPDvSeb7LBeGX8TPFyP5Lj35AA8Hc8xeW7zfyux9E8TfERMddQ5Z",
  "key26": "2TWtstswaqrdzgQzTq4V96C8bhiuPNbYf7w8fQhkgdBcweyZjVmbnWyyvnJ2G7sdNonv3LFortjtSNH7WXBMCM5w",
  "key27": "2mPAeDXeb6BjeHWYRfbtbRvq3f83EdJTmMggWXyiN4ShfDwpzAHmcQdPYz5YUyn71Yp753Nt2VLkBHBBe1Gkwrxt",
  "key28": "3TnkEn6Lnk4kg4U4Zu3AexLymTLDUY1GpJ9wgpAnb9g46B7yarCo9qmL44fWRGXr4KDD8ZEy9KfSpQSy231RUZjp",
  "key29": "Vm37GUDv856jdXePfiJvKVCfAEfDU1MBooG8YY9EPedaPyZ7EsSvra5SLFqcff9wzD5SN9yoDU42d7yTDidZriH",
  "key30": "5WYmVcEivNi9s38QhVMMRjy3LHJfGhZUoPq4Ft8FRust5uADUT1VN3Ynnn9WDPGWLPgisB9w6Hx9r5B5Y5xTt4MY",
  "key31": "GHF2i62aZA2ekEJKTV1o31EgBf7icEqdMPXxsiMYhDnkKchuXHyLKLPhyhFEekhwzoF7bPvqS34b4crYsSVY5WD",
  "key32": "5emB8c9boY9tEusjRd9YnufW9xsxgVf1Y7v1cW2SXCyb3jjvG3EeL4JuuZGqTmqS8uVJwCWLixnNHaFM8pno23uK",
  "key33": "AaTtjmNxpdPCTtsEpKoggW8JQnvPAfRhqx2scZbDuQkov5DB5FGndiWgpGVksXRCZiVh8k8KrAK2EV7AHY1v7nP",
  "key34": "5nAbFruzjGk1bgoYoR2tF78gwTTuQ5ZACy6WRLfSv1Gie8FAbk5GDCykKUjpZb8KukCRiJM5cWuSxa6meSzV5CLZ",
  "key35": "5Uxr33SxA44gDk3xC1eiTqG8AUUmnE9VD3sPyGbLzjk9i8vfY2obku8CcRP5g7EcbyKF9H2TM3BDY8dUDVSguPtP",
  "key36": "3X4QKK2nS7W83Db57otFDrHHDwQebsGjAbcMBkiy1shZFGP74qT5paMURfv2aMmjRRMK9nu9HbD6RMgQbJtjmLh9",
  "key37": "5tbJ9ZQv9pzJR8D5zUfkf17swmSsAgkMCdms6BMR7hUP4VYnAtZCTqHNn3zQGz4rFCuZmkSuB47jihgu4ZDM7GWw"
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
