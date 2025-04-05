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
    "27Ln3cKswADrkfy1fMZCS2zwdTzNhZErYbiz59e66cupAr8RHTmw4fX7ixdcQxu8UQL2v32ixUerdL1bjSv6BL8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fdR8ExxcsWi8xGJaZT7o2Jj3ABywxLmXTJKSxabjwHAfLB9c2p1uteFSkreB8rJeT4Q28smjNi1W6YHFuPspZoZ",
  "key1": "67aXHamDtHkAD5usvVHFuV2UdRktcC7XMoUXhF6ePMX2yoGrz5Xru2HsQhkYesCs99sr4Tqd15YK5aBvK7CLKF4R",
  "key2": "2piFwonvRrasJkAtDht4eaRavUpgQYPMQ2yHkV5cNCngiuUEVV4UbL2puuvGjXhNozWFRSnNSN1kU6ZuYA3poUXf",
  "key3": "63vYKSE8jgEQmWwKn6cDaggoHdY76cKQDm2DqVU94GDK3jCPVQCN5RsHvjkXctzXetrjDa6oKXFfYoBXoGhNGoqE",
  "key4": "3EasxsGpG8h2gHZg7TqTGfpXTVs2rscJ3o77fiinRH7RKk89SXECPLzoj6RyLrEzYnijRYFUiyZ6wCFs1RCt5cmk",
  "key5": "4XyyQTrbG3vUaXWLyASABpoRdmDTprUWKnxugywsLgUMk2Ewx2KGdsbHw8pF5cMbFEW3x38C2nHA9aUKYbkkQdRh",
  "key6": "4cn4Mg6ZWVszRaqKYRRUYe7wmEgpdwa5e24Zf2DohmKGygRnZgedKjUcYhuCXZqYHqLLXLXAAzn7WpWQnGvgVa3u",
  "key7": "52NVxa6ofsJxByEhCTsBZLN9cKRFgxPuL8QCbqoTyDqpnjwqjA2KvUNAViX51Fdh7wuSQjxgX9sfKggNcHypE8rq",
  "key8": "wzHZHJoqHa6apswNQuYNXYScjyK8rJ8dC5U3RdpvHvEsXm7RjHCaE5uESuaay9fp2f5GCxBPMRGPa7T4JxbQCvX",
  "key9": "4RezyD7BUEWsAtC7Zpaub3UqeXeXkcZmitBJMpDHyzCd7He3FqyssUf8ejASPLbhwXWcUDecmJvAzX72osJaxKSG",
  "key10": "LKEwbsPbsuU7omHxBV6Depia5XKmSZzjZKaCMCXdTbf29xQWWwPhrThqaTwvmA1KQv8TNQXwEDDoHKcb3hP9gfL",
  "key11": "3yoko8SUYsaNUvNx64ktvMUnAtgVJDVSFBrY2GAyvVfoREeXqufEzkLwz8NMtx6ZzBxVhwEHYuSVEYEjseB1vLd5",
  "key12": "4cjx71XQebFxC5T65w1NTyuAKseLjARCjrJ6FTdNPPNCWP6TcqtgDw7t1T6XsJDYZxod6PSzhX8KW3bWu7TV65co",
  "key13": "27XuS2bhUrmuN6eAhsbD3hwX2FyHaG7MPApdJUQxnRWjB4WohU2j99ycWFGG6zXp7uawyaF2Rs4XJVVkLn68NW5k",
  "key14": "4R1bZTbvdrvX28mUAbJSkXWPH7htUANrkMuT3L9dfXA8UDyS2HcJce9cRM6KbKiE6m45L8UrgjgaQnRxD4oq8Eut",
  "key15": "2183BNuUf59xVpAC8GFjZTW7P3msF2gVSk5HRaLxbewstqRALJbvCN72nNkKGYKPTiLqVvMeL6wSKFBLWYC28HPg",
  "key16": "Vp7mmgpfQViBXArEGfFSsLwxgK82o34e4EyVoK4sCqqD1MzG8cXxLhr3Tufs5SCPHQnLyaaz55a9skd1UqgW4Jn",
  "key17": "2q8BKJMEsAsgCPkRWowPANyeKAjmJcW7TEWeweEzn48J2uj1YCnL97ZUzQrYCcw8DmeBJcEqYqKcABg9NVzVYTwx",
  "key18": "4DLdiP4p4vvjpc8UazhQH9sp9VnV4p9CYzDXniKFQNm2YesFweCiquR1S4gtaXq4eWvHBDaUtGcVHxfidC17t1mp",
  "key19": "262oTgkYWNN63Qn2xvdZ8dmMKhntZCJiSJKWofaCBgRvtN21iwVSZuZn5vqR17Ajj1WVAFkAn1U4Yt1WMa69RSbJ",
  "key20": "62PNtCm6BhtYRFZGys6EWrsjfWKg51Wjs9jVTVpSRLaacFrz2u1dxvgSMDwQ8WLXcpFcrHShBxJxgHzANTKJZgcp",
  "key21": "3JQxjnBSYx34Jqc39BdxxSv7JDT5BQrdoSL5Gd2vUdwZh6Vr75mgBunNbhjHFNAXh4f1VAt4jXdrv4Cki54cHViX",
  "key22": "4tEPFLgK44q16gzt3XCXprh2hq2HqXD1VeBzyTCRHKcZHTcHLa9LzM5JQj3mCJdzE6griEZmTSAfa21EJDWwSq8g",
  "key23": "2ZtgXryBwLWFotw3BN4dfadYbcSL7VxpwG2UGUgQEVrXL14k38DYhuhxYAH7cPEJLfz2bWvCjpjrdQGSB6YZZyxL",
  "key24": "61eVWPmp493KepTYVGMhkiNjg5pB99H1qBLfz5nuWqugB3NttaXwEs7sokNBuWjbCZbXWtgzTQsENwrXd93LTkcw",
  "key25": "4eM3YZg6xHfnLppjft4Rg1E9CTXSUBHY9vBqw3xgV2XtReAoJjqPoiPApnBzzV7Av2N877cnDHyapSmKtxjm1KTM",
  "key26": "1ksyjRLSL9znGAQRs5wc2Ac877F7STa36V8vDGaYxmuyTJPtPygXKgKN7grdKLsPJiEJdft2PgKoTcmmex8QqNR",
  "key27": "284N92YXyXbUCw67QC8RVJ9gzXx8PCykRaDQw99punWLJLi5iDY725BMo3C7dPJF5DeTreV7mJJzkr1GU1iEhowd",
  "key28": "4iuiAsqXY7uZh2pyu7grVWef5UjaTHLbzFPEyASVHRGLMEtLHpkUDFexx9XAgkhteMiv6rwzXqhLkL9wsrkMDebV",
  "key29": "XoZ5N7NG1Mu79DD48t45Bise6rQq4sM8EHHtA8aLMTsfnBMJUH1eUZ2ynnK6jkqGjEN5achGYGSRmTco8RZcaYP",
  "key30": "2DtiSTeAVisM57XyvPFne4CzSQ3AjGUvDo8EF9RSKH5ASBsUVSnHaLzFceFj2huXu18htvickpEXajCoQjZTX6SA",
  "key31": "4ceencDUW9NyhM7Fds39vLmsuouXKB5T4fqRzXq5sNfTwW7hdUu1WWuuy7RPAyn2qqLoLfVgik4eWBVG9214YzW7",
  "key32": "7WoN9jcNvujdwLfMSMUNDXkHR2vx1ZBr51R6ozDZQTJXxKzYJKyFFNUPMLrPZDncLrjmRzswrJcG38WzdmBSVux",
  "key33": "2rbDCBoD1xPDXmjqoyUeBZ6cvT1hDTKGJrtUu7Jn2Yum2dJ96HGMCo6kGhsjpyPgFDFhvaV9fFsgP92kfeTXJ9ey",
  "key34": "5QuwLHfpfT68q58bKL9hC2VtHrJfuCqPX9H5tAwSPEFs7XaERo1inU4neF7gSur4fERALG4KJKWeKo9nZMBLFCez",
  "key35": "26TbFX3ZuRTJ8jkF2enLAuF5dunpuTqv1WRd9KktgiVJKHLX76v68ukDF18jdaMoGThaSsNB47aybLGog8yZ3BfV",
  "key36": "2GEEdnu5Hjr9T529k5SxaSoG8FLjJGLeuTDiWtS8jx4jk2yLQZArYp6m5CahEGmuuAQMjYbg3b9LWpeRCqALUMBC",
  "key37": "5sgf93LZ6LYS6NeeXWEph7aZrBfX5w2iGfm11j7apY8y7jDQeNrAMU8fZpxtzfVypNW2KCpAs8kHrag6GmKxZjof",
  "key38": "3UpZ85Ub5WxsW7uPXdzsCdw8drphYRX2449VHZ1SheKqnSAPKvevaUVJmQ5MXmzJDiZ3ctHTZpJ3LjvB3i3aduEF",
  "key39": "4jbsTU4LVzyxpArwzFyBpFecRCaiRverHx4CkfeiH84YkE9XvEV7X5NhS469fDusMJ5sRmSF1d6Jg7FfN6BQQyBe",
  "key40": "4VgnBf1cqL2SRLwcfpJFEtuAHwk3jjWLFCbTYH7zoi87FDNgCi7KD4njRrQaXu4B7u6dnxjkLQZt5i9kA6EmN5G9"
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
