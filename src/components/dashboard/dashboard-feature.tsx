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
    "5zf8rK9BQvhtXZYxdnr8kayCLG8ZLgrNEvr66usPARMtdyVnfsB2V2m8recXoFMuVVbiARLSQghvq8DLchZmfgRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbwRNeWnhkLEL9CfHnFd3hycE4m2Eewcy7KcS2VYG1X9yh32zMKy9p3uQaFxUeeiMHo72FMKmD9YtB7gxEZ5a7r",
  "key1": "4PF82YGhuQAS3iLyabEzqzPkcYmturcL55dh6yWX9Prhy8u15L83onTyK9SDbFcpVDgyRRMuP4DKnkJL8YRstfVp",
  "key2": "2q7NuHtLYbpTW58YQK7JEP8NMfwF2AgvrU2YDHnqXWVe5F3KRC2s4heuYJ4HTGcPu2jg6dQ24ycQy9x4hrbmXwvQ",
  "key3": "eS7vjcKDrvtXriAA5FvFGe33kmQyzk1rvoR65KMsridvc11FLV85vt7pE8WAguBNjgVFqc3Cix1pYmaCTZ8EodU",
  "key4": "yLA4ychD8UDdmo8UCPYG4pBKpD8Dmgry8V27nSArBUcb3QwUx82wkP73QmUZZ1754nVzhtqmqE29bQf3obqaY3n",
  "key5": "Caq2J2DdufPKPqrpeF3pR4jGUAYD7PuKBoSswYTu9jRBA6xFYw8xjCRDkCF1R8iKhVJfCxdofHMm6GfJiXCgGMp",
  "key6": "3e7r9CP3XUGXWr7rbqHf5gkpXFjBbuZ18nHjSBMG6NjoCTFrdhVzUuFnX6dcHbDW4rYy1W1zRzBBa8jqKzM24vVe",
  "key7": "V4gbjQfsYEkpL4XLzvo4HfBdQwoiXovvVgrr4XciZT3BZLucpP5kmzEHLQetvVRoxSLRS76DHanaEin3J8kmGok",
  "key8": "3t8oLRFuxFnPcCaD5jor1wbcLvGVExx6YPdYZuyTE62cohvBYybZdtTtM1PBNn27CSYmcFdtXtEytSchod3UKA1z",
  "key9": "3TzDkJZqA2iz25YwhbKxdGYmtKk8VFnavyPLrS5CxQwVuEzSQFR86u3oqTwFvnPrwBuF3NcWjiPgBMJAyFLqqwQ9",
  "key10": "3XAYCZNQ3DDxvZTAmwukopmfjPqRyFMoosydAiJ65MbBZTkuQDZvvMNVDY3Gaccko1b2ArB4FssBUPf3kGjFUJCC",
  "key11": "4AHXrgNkMRQDHRpt9GWeq2wQcysQXWbWVynmmVce4xoQabKDS4iRfNQWXaQwR6jL4KmPrypXUb1khZryZQasQ7or",
  "key12": "teEbRcGohNG4oJw6oYZmBBbmYSV3k72tfTayZHpVReGdcjiKRq9ffY2JybXA2TW9EgD3ArVvFDnQVpKhCsjRCiF",
  "key13": "3omrMrWLgRpMsN8VCZZayXY5e4hoKNc7Q3Z9SJmz2SHsQL5DbsRrPvKPQmCLe88BtV41GsqEJWMDCNXmh6AdCihw",
  "key14": "L6x6ZqeeD6QNaXNdc1ixhXks5ZRheDaQc6KmfJJ3RLuTVmu6Rnr21Tzn1yqREsh4BZ1TJwNgGy1u5H8dRWHYxva",
  "key15": "3EVRLmjVHKJs6JACWiKECiKUWcpx434jZH9CafSVcrYNphT1rZcDs2MbHP5x9zLGGTq1VdPtddxR8SfRaPffipXC",
  "key16": "4szJLDPGznroASU9ZbCWttMwNHSjp6DXgMa2g7gESt742KX6izcGJat2gv1AcVrJ82cvVfSY5XHMiwFH9Zk3rYaH",
  "key17": "3d5p9gXG4RGEJinwMAHavnaZsxHYFB6VoYTLgMnZunzcEoc4T3EBTrp8sqCWC8sytsow2TZCPz2ZBA85fmmornbM",
  "key18": "8wVwZDY3dDXWTPmUNBUtcTdoz3mx3x1cj8dbjWSGHFtQJGqFWSUWzunynstS5jvkZsozUrLJG6DWNcFv3JnYv23",
  "key19": "3iDMuJMwzuigF9C7Wzn9PRnVLGFzurxEyRxwVy5pSayJNwmPzdhynTTCwovQMdgUpkCPwH3onB9RXmEBChZYybgX",
  "key20": "4ERfVLs13yogTXMjBtJHn8gKTWDZFDMRD2NC2fzQUDzEA2WupAQC6DViuVZFgxYPXNdVWG8XeAcYkL7wxJYmzoUt",
  "key21": "ghrtYrRoFEoTJxPxU4ekrZuQqqPu6Eo4cRV1dYhjMMnyTk2XvR6tss2kcaKgFSesaEBcS4L9mSR23wmEYzNnjcA",
  "key22": "A8p1Ks5KAQH2C8XpWAsEqduYW1E9MBkWdALWXC7qop7HCba757G8QPkSWRX6URyGCTMitqjTvzvZyCZCMDg8mBE",
  "key23": "4ZMprXRfXSty943ofWi2tAF1JaRLBhY8VTe5rxWVCb3Tiut2WKf4wx72AizFbPpBLLdMkc6SR7VPXhddXEGwApip",
  "key24": "QWnKjmXcGTJM9jcw2G1YmytomF1HDdd97dhJDNWFix7PNrn6QSLxCvcuwtVZu4orKZXwWhxwcRLQvrC577jyNFy",
  "key25": "4oziL34dXetMfM3dfhwPZueKdNjqt8xGRgTF9cM6zbr9idRktMJmjMP49USRk34Zz68qLW7gJZAGycrJXsTkruJS",
  "key26": "4GswPi4QfnJR3VX8ZETP1oNEqMdCZ4Jg7LTuCXvxas1Cpkhcr3tA1QrkACxcqk143kokn7xtAKGhYozpCZpbqdfx",
  "key27": "4qWh1bySX7Zh3BC8KuMZ3xoLkSrGxoMA4F41ivifUrvTjvN1bpag8PgaqWNySiwW4W13bPYro8dMgNLRA5AHZEq2",
  "key28": "5NZmDZBcmB4G39XVB3uVdoZCoDM1jk9UisY6jKfjARoCfCZeEeLhb91T9n9veQdSPucUsSr9dy33w25RshDmRpEi",
  "key29": "5mfwWScowyJDPVKcYUegQiNAomuGZDZkDt7qoR6ov4qBoWYGoRxXWmjEyyPnYUPFsoUnmHyHnegDeUBt4sSMSn7Y",
  "key30": "2JazeZyxQCNKb5sdE12Kq3wuZXekNPyrSCbbkL84fQFFUdDx9CzHvXw5yznGK3sbsqSUKrstsosXXmiXpaHcDJKP",
  "key31": "3ELhmdocdNYDG1q8K31SCpGEkjtmRbVec3xNo1iY3VwivvZ9BDdzM8RN1j75paTMxCyNiKUgChucXFLNUwS8H6fn",
  "key32": "2hu4oC5BfRgv4ri8LTM21ZXM8fhcTVV5z47WpubAU8drE3PPjcu8DTRbGU5ajNGF5C5K4EjkRkjSCsDwkJYw8UUg",
  "key33": "3GqdqMkQ5T9iUupGPm985jmmx28A1xq9BvC4qJo2Bonq6At5KgZT8w4in97U5vVAHgHgFhBhgUp7ZYzVgLMjUACN",
  "key34": "64Qd2je3aQADhYAHRnG86DiEbm37afCvELosJ4PMvCTXk5mRtGQDV4axzWMF7KxbKDRHZs3mmbb1ZPUWf7FUZ6FU",
  "key35": "5x4Fat93NujikNNiPNK7QCBM9wjNeUNqHUeVZVpGYvF65gMGB74TXZVgsfvptbAnuvJekwtjuzSSmsEB5K1wgMkn",
  "key36": "vrBFzrxUrGyrhhWmnhrceTUuBZ2CPzm3TFD4hUcPVB7L4j9WyffZptjiKHvorkguNc3WBSvzcGY1L6KTg7ZnAtA"
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
