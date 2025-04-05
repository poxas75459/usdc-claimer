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
    "4Pp4GqxL4b9SHusUpV9EaKpoRsoC3pL4rbbGeMvb4FaPG6dfJfj7yD7qndSafmPb5FcQvotPYz9eUUhNcycFHryt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5ogD84NNRY4XiMKaF9BsrDViopGKaTbz7LpQAD5ZSyLJC9fg1tJR4KjMZKspCPpHkU62nkk1JbnRNJRKM6FVjj",
  "key1": "2Ppm8fEpB4ZsGZ2FfYnGWSFQvQ6uHyy2HWeLmCh63ofYkJPYGocmzvrzigMSq34nDtt1HhfrFZQH6CrKKC5h2YLb",
  "key2": "3kEPYRAA9SrAvXa54Mgqa72fcrpnG3u8pGPc22FMHr2bTMFjiDE7NgaSr4kpDvcRFgqaHzZYXVEVwHsDH3LTHz8K",
  "key3": "2CRuq54rhAGwo9S5j6ZwBgAmY88ADNKBPW3A8kfwZ7wnrQco3kkNepBGwmYJtKRnLpky7Wfhi7z28hRncwdBkrJy",
  "key4": "2EBDaXXgyKzAnbWr1j2qE2hKP34rGF5gCh32qKV3kpZUuWK8ZR14uaLnLaz9LV2fsLKEfDeEHzn5idxS5VkpiYPS",
  "key5": "C3isc9LfsVmEcj7fGvK9EtYcgL3YgGJeozwuZK9m3Zn8JTG1sqtW72HvRRrUXA7MqnsaUAy6W854pjf7uzQsUdD",
  "key6": "rouhAxJVkV6BE7AQziQJ6awNJi7qns9SistZJb4ac2WDZszDdE7vrjadWAZUcmkFHEfQVTCtfVedQSYJMaTNaWb",
  "key7": "3S65EEfcTJFtZ9wLW6wV7YT2AtcyxwuqmZNVXqr87QxoSExC1QZpCexGNLSgre4upyaPmYMmUptCNqyb3VJq1iSU",
  "key8": "58wW5g16rAhUMjg7DGUN2smX9FwR48NhqwzAdcjiGUfMJrfhrebX43R5yUPWFu2dEkY6WY59NdBBhKjpacNW3V3U",
  "key9": "48KTdPyArdc5Ms7jBtqKNKQKQ5RkuXaiqfweqZsSuujk778iSrH2siMseabEGrjm6ZUs1FrLVkanQGFURDUaviNz",
  "key10": "5u4QWvSrkLozzzXHubtZrrQqdhDW1sRtpG15yqGjaCuN9m3Y4Cr7AaDYgZkshMkqs85rMdSppzD8jatmSks8oeut",
  "key11": "5Erv9HdRfimsKF1xhgie8yPqQEdR7UcfhXxdeFP62vQ7UGnHDM7W19aBTXaSgcvXLKUzfCCDxWpKP6maJUeS5gUH",
  "key12": "4ajFm9W4QT5GgH5ASAHjpfoRW1DYyaEa9CLYVpdvseS9vKHkZeZWcChe9ARcnRTsCutDCkyUKGbFifzZCrzkPX2X",
  "key13": "5UVtDpfqf2o9diLEFCQ2VxgXSgcRoDL5wAunXQ9vTpuZiAMz2Af29N9qZDQJAMpspq74mPvc3ACetXaFWYpawtWr",
  "key14": "5W11zsACuWtqAGDWLXGNmDdkZZLLripTvEkrEHfcE2f4yifm9LNicSN1E1Ba6x3q2eVKKqWmEu4RdhuHy7rdZgH2",
  "key15": "2UygHDX3Rdyh5RG9RutCY66VgyQah7rb66ri6yKDVHMcyR2sRSTToJS9LGngFq6ZYo8LbUCaaq1YPpJsqLUdpkcE",
  "key16": "5n7qMzfGfCarrUktREanZeHkVZbpgz1ayQnDKfguJ4vyHxgHe3ntzV4CtrqvRtioqcy3w4AebXYdLjB6QRM5jTaa",
  "key17": "3yaBzQcAnJnNJ9cb3dbztffeLKPLkLegRpuVsHtMTSXkxo5MzXyTB2oefpQbgGtRvEUgCan2DXwwbuY4rt1zuCUy",
  "key18": "2Y653cZx1ASSCTeDaQG5hxSWGpYseu17jQAY8SVWZPCHMB5XKASSYhhSwhYcfacb89FgBKLFzASdBCFtWHrVfNZ8",
  "key19": "5uTFEHQzoQSF6TZ7MCFWKzooTaT9Li7uSJDpRamw8p7G64LuL1jifnR1AtSzL1KejRJLEtfFcrVv6epRkRhBDESW",
  "key20": "3F4Xti2apvBQndRX6kWYELWNvkkNWNALk2eM8ZDkS4uNyd26QgnfYTgZWsfGrEVp3pu4fKonqtTJWkmC8sMAbozS",
  "key21": "3jYbgKGr1Q9XuRVPeb6UoKRwZeJx9WbV8whaUGPPMiYQG4j7NVKEFhKqmxSijXWPqJKoieofjzzSeKWViRtahMpG",
  "key22": "nMuTTwhMMMknuqMq4fPnTUkVWLRTxRmHegTgmjUKvhJLFo8yK2bcBpbpm3pFM3kxJb6Bjy69jW7VEFsKf2zrVDc",
  "key23": "6DZiFuSs8JCCAVCvT6KN9GJyWXQGGnMjmkCx2f9qAyAP457hMbi8jH1DpXBqLtvDzcQNYx99RhbGogq1bSGTHYh",
  "key24": "1a9Vw6Nfii4WARSokEmjxikdUgh8ggUP6amsa3rrmhggP1jRArhyCnPbx532yPyUspKTmtVmks8v7enagJgaJV8",
  "key25": "3CAxzmoRMWAEWYvyViePmooVSfsWcVyBxeKPr18grwbXuJjNscyatxh789rEueinYeg8TvgfNiFKYBarckQJ4jfa",
  "key26": "5Jmpx6RTVc53MNwohRt87V9cau9DHjFsjJwBinRsE96GfZhPGPEMjA5ixNkFfL5N6uE6JLkBv6hHgHxH7P6BcxTx",
  "key27": "2sAAfXHJKVCELaSCnY1FY4JMGHMbh11rZZRc9FYcSDzBAVxCFM9nGXArxmkuUyaHoLFVrfDD1zZgnJgo3Lix12pd",
  "key28": "65QK3Lfz8hNJSLNurrX3LA4Kky3jRGCyMmEohVrdFwxZxJi6Z2HrEQAaChB3gkJJ3CcdXsj6f2GD58QQdNVp9ekw",
  "key29": "4B3cDqQD322FNCtc6ghZWSRUVTR3LMAxyXhY5mwdRxVhAcyZCfVDFz5vYNXULmjDKXeDRhrrZEBXi7wYY9Ccgfd5",
  "key30": "47hMh8BvekQPmEokn3GhFeFSMT2TCT7ueEtRNY56C57s5nBVhTycv4e6jFuTCB7EJtBdmkVVivdNfzteBLnzJa5W",
  "key31": "4cdGtiGf9dcR89uLb51zqhAK8pTg3sgqCg32qyEq67hR4TxknrC5sMYdwo7huMAiYFqKQxhBjeMednhe3mRwszDW",
  "key32": "4vPgjDphdQUXHDLRGHbuq3pojHCFCspQ35MBvQbNnLJVrHFAhGnJa6UJSM4cvm7yohGb1Snc5cXCMkco8Tv3uw9a",
  "key33": "3x2oJ4SYAPaqK3oNteLUheRYae66Jr8bqFt7X4zWaE6Sckk9ABKcanDikvNQf5SdErBs6RW5GUQrNTgrA8zcDGBm",
  "key34": "2zCvsnhkwtFExzMuFXyeg4PpoHxCPYkfGBJMawEwC9Y4fgcC9Sj63dv4gvW7vRGpL5yXXdYgrmG1b1wYDvw9KcPz",
  "key35": "2JsUs9XBgnXueTHcNBHvtf2j88sYgJgkriFvZkyEHHrX1gZyVacsL4qTg5vHXf4AsFhtWeusPPEadTMQV8bA7UVG",
  "key36": "5rfpa2xDu2LzKMQhRnciH5sHvWky5YwL9dyK1XFUNmWYLVsThGN6MQJtJqFSS91u7vr4hKJtwRE7SdNcpk2vP4Fs",
  "key37": "268Vt2J1qc3w7KqLM8fG3ioRPH89NeKpUiejdPwm7Bc3WVfumR7WmMgMaraR4dhTybqRJyXAjTV3AUdKjgkWE8J6",
  "key38": "27GYd1GuTUpABA19eTxLTsoPraKfnTVxXeuGCp79k6b9bhsgCpD7bM7mj2ywRRgvLvu1v3iTDMkYXSdoYKu17Re6",
  "key39": "5G2f4z4FHsbvsHmiRJL8UCSxwpPcbL7yYyXQ3CNRqEGyRwgU7btBfPBmwCc4DDoKEnKTFwGMN6oRogyTQJCLnHJm",
  "key40": "4P7dbU1DWHqSunnYVeA4wu8AfpWswFWL5CjLcGiWY7mSjcASYnNW1fYKV97xgRQaJNsUdfXwZ3LSipKi91Q4U4QP",
  "key41": "5ufEKXNim2ttW2mv7dpZiHSAWcrFyjhtB5QLfG17owouyLJMtaf3bzF5FF2JiGcpnhLaK8nD448J78pJBKMREtau",
  "key42": "3RVzSrEXt5e2D6th1NAgc84XSfD2ni31ysgWLCiWeaYG6Fmacgim8CgPSG3aEnRVHJkWMfoh1CiGtANpBnL5uCv6",
  "key43": "rjS7RW7Tt3BsyRDT7ekFgnhGKTyHd1JEJZywx6thFYMUk8fXzuq4opw9244zJfXZdgpC56De5qZaAGGeUiLAfgD",
  "key44": "4CVYjc1vJEiZ734YuiwLCShQj1MZx2jRY58ZoszzVXCWoEASoHtY1d1SinyrAe5LpH6Vyf6NMnN6GHPezug9wBW",
  "key45": "5pcQLcqNFwD8sBuSBmvs9aYg2shivRJmigqqYF6kjE365c5pWnWrhq8SKjuD6yHVoSFPUuEZTCL1EfPrQLGhwTzz",
  "key46": "23Mv8Poabj3jTvKn2rDgjcQNTtyVa6qTzWgHr6m79Ncqom495gXci5M38oEhsD4NjaydgwRjzLGz6cgQhtcgAL4r"
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
