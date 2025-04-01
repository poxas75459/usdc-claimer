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
    "ZsSLf8tBc2sBRXLR4Aath89yht41jvyxorNoTBwsVGFCHCi649fKJ1fB9J52hbQpaBCDqmfvbQWNSQFs9FdZLFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BR73AVWAHUBy5igvk2bkt6Kdg2R2iD3MHhWcM3tQ4PP1C9DY5FwgGA1tb7cKZ9GsoKFQ8p69uh8YxUYrQWincgp",
  "key1": "3rSfnjCPZz9N44t3bimCLjxzagNMLhiVGxLiSRpVBqteJjMRB1f6upNGoJv235X6aXR4jNxJvn4XEhh8h2qVUUsn",
  "key2": "5tRgQSdbKNU5YA4SAzEruoZ5sBLHenSGPNzFRR6X3RM8QNayCPepFF9pmhXqBkVnL2CaWs14Y2M3M5sbbPwhVAFa",
  "key3": "3kQn5AMFZkDwQMx9GTKCxzThj5dQ6Gzj11rUQWR79WZdP1sxmUt7Z6xPuD3xogx9bYG5NXne46KPhVXAZmHkvanv",
  "key4": "yXwmSF8Pop7eUCWZmaP2ZbWsC2MGmaRiGQkaXDaXVGZnrLjw4UByhqcH4MkyvQDfAreFqAewDx7pwom55dJeaMA",
  "key5": "5bTcFVW2pWPHhPd64hyp4wwNN7TVygdcCNEGGA8j8XiZEPjypP2Qy42a5m7qfkfmY9nJMNyvCTzWVtLZRCrBKdjo",
  "key6": "2FnJt59p8WfnVWakMKXqmv5LvyUub5xqGuZNeZaFyfW451QrVJTaz9Sq4SyQyzsK2hiL5sJKtyEs7wpek61VADuc",
  "key7": "5Lo7KqA8PNXUz17PHNDiM2kH6vyDgMx8EqavQbj5y924WxuPYueFTx3vccS34YREsRh8jQuwQx3hdPkqW9ELEUeg",
  "key8": "aH6UmB2UupkGntAHrxLFZ8t5FGfWwYubY8LxpmpUpWcwXnfajLhaozxmw3MyCnAsHHWWMoNS4vTFtnR7FZYkTrj",
  "key9": "24Hq6LWheA1aLJoHne6NiWeqF8fQ2MgFFsAdLPM6A1aa1mDbG7tztppDeesNAvuVbC9RewAXCJ498kXpdeqwtNwb",
  "key10": "4Mapyapn7kecjQ26FwnMD2w77NAF8M9WGB7A7LSaGTb1m6jEnNyZ7Cm6wuWj1UUjMkPS5bRV2qdw3uJ9RJZ8LJGW",
  "key11": "4VfB4D2trs3XCM6hWSQMLAQUicqgaBVXK2bjkjsvJdMWuvQWrUxuYAWAPY7iUk14NfmmNyDDNwLprsewBwe6Mbbt",
  "key12": "2fU63mDXeS8AQ4X8nQVuCUKCpu9nAXAP9tLj5cYeS9NVXK8rsMQsAq4tQjCtajNyf6zPFC4eyzpSTrKTeNPh7b5e",
  "key13": "3BjV2rHMaMJdUposP7xBtPPPeZszkrkXhAuTwR6gUf2Lyd8L6N3rMoBkQ1R7q3mS7atogfDuoeDqnxCzX9puYhdP",
  "key14": "5hbj2jZsrKoxFTB7rAWvBH7BW59ssuu5Grk3kqdCNGsBAG48LbzTD3rBLcLE2Nhy9KucSFRBpKvriTDv1FX8zM8K",
  "key15": "ppzoKhqvVaRzoxNscjMJMCfFaQ1qufTzFUQkBNuouKWkimZQfTzMG23pts2xJvJ8MFsgxprxNYt3KrWVcmykBbx",
  "key16": "8v12E9bfeuB4CWsQUieqSyiu6UmFnrxtpPRWdcYU49huZ2mtBczm4SVzhZ4qhWn4Ccd97nDJ89otbVZLVNqLSPC",
  "key17": "2MFx2p2GJktrNW3kd519SS4gq9Dsv2j5cvpZn7UdMYCDquqEjCCiPRbziJXoqzt6q9W9Ra1GG1YgW87m6fKzVx2U",
  "key18": "2yJERZCg8r7fjfpvNGfcQJv36sLbiN5PCfmXxavfd2pp4TYWZksJXSHtxxdazyDtxkD2zSSBFpaQ9hppJGZHsgCE",
  "key19": "43S9ZPNCUFqBtzARzYKGkH1WbU17B8xywk8eZLD9NR3nnmHuLsu9XpFm3sEHuqjMMdUWqjprJDHDEnxNK4fVyfoo",
  "key20": "2fKAnrsPsiDC6XRGA8k51KbKudfP4ZpoAua1ePvUGjm42GodVvvTsCz9bnSvvu3TrNbmsjQsutGmCqqXbySFPZxJ",
  "key21": "dSnohWTk5s2x9ir5Z3sNsaUUe5ftSLidKfhm6vMBegNdhXnLbt8dQYLpqyzNqSVJzrPR71dx4apT6ct2iZPtSA2",
  "key22": "5j5P42nVKnvdvXgViZfY3MYPBtp9Q9afLLTbyE6Aq4nH3xpK2uMdqnVVKmDHW5ZUQ92Q3NAnXHvVj44E2LJyd4QB",
  "key23": "FbFZk4869oZmZKJmKuXQd5kT1RPQ5jeM3MZwfqK1nh1PVcGEHR8JPAPTFTS2mLRvYFu5oh23S9BamM9uLKFmxtM",
  "key24": "3Kf7ZQapGi78g41MD8MKHMLaHNJ9NhXDKibFnVELsUreyVCzUC6CQvFQiv1pc6HY4KbYbr56yp24reVnPBKmHycB",
  "key25": "5wU26Z8DPUhTNwUX1dFv5b4DFbgGd6xVrxqJG6dj92Pwk9rXjjPxJiTpR9HcA9no5DAMsC3eXVnTVG5VGhs8M9dA",
  "key26": "5i2gnFQJ7uN83mPgyiB8dKn36YbALtD9uyxuBfdaUyttLY3S5GscKvo1Dc3Qau1YqNYTRRMRS8S8fpwQbbtunrHB"
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
