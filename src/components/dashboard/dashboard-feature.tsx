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
    "5s63dk8XAes5JHcF4dVggX2HangYW42BS6U7wG3bkrhjfUrDzMjuiszQM5rDUVEsy8pXw8DdG94ZeDR8XpzaT9FN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f73H6M27p3ZMxf9xpmRP3gVgYYvkGnX7pTCSmPEfPARsyaMQamxYdFNAzdTSPZgjsErbnuPA5ZT8NA5WYR27ZbR",
  "key1": "4imCee3d9nUbxuR1yEqjBke82wPv2DFq7to54S72rjZQKMfPMSpWwEUAJMbbqPymKcnhQSFEPMqLDUKerMZFyT1i",
  "key2": "67nR8qrTTqHGF13EXVfqyVW1pkPKUkiDL61bcDVnmRwDNrF2SBDwA4m23BFYZQhxA5Bm8ryhPqWamYRXjpEoiUfp",
  "key3": "4zwXxDt7UnJbMeaS6aQPj7AhiXJRrPTf8aoMbzX9XtahoZu2wktX9pnJK3Vi2yErrKFXYtantqcSz5x1Yi1S4D1S",
  "key4": "vLk3L2uXLH7HrTr9sCD3MmJXqNNDMUgF9aP2En241mTxRcJ5G15p1hy9jHPPoq64epMQSd1MfbeTQJfsjUR6QjZ",
  "key5": "458npKF6K4kjbayeU8TLvPvqEdCYYZXDZhgbEn1k9tAbC1NAkRFYaNmmDEEJg5H8oZQ5rTGsEk4fHziLWsMfuWN7",
  "key6": "122Pn5qXtCViZsvtrULVkjaodt4tQb1s2AXYcxxe36HVxLA8hmtX3znCSWyYyGwhRMzPFx77T6dZ1PUnbwXnjvEE",
  "key7": "tL5Gptfh9Go5jX9HRCRJvVdp4qFuqD7BAWinTRvq6gcKG4GRXmSm869jAvc5UTcfUsPayrrMQcSHSt4hUF9sgp2",
  "key8": "4ummJSymvqdYQzWjdBwJRz8bKUrWU6YSYJYzqGNJnasQfa2ZaoE4ZbPioxkBgNYr9u7ZujuFEptAtgv3p5hvRwgf",
  "key9": "5husD2ozEW3HPfhHGqy7baocftpFT4DfaPoYeia6DR7nPTjZ62bXRKp9qJBSnFtyF28ujijx1ki1qb7BMsxeuyEa",
  "key10": "67J1x4Q8gy3soJgiRj7AfcbTQhZ9Dy9Dcop23YdQymz8SLroFaSWHmCCRpPZVh4hZgmWu7NC8PPYV7ff5kWA8TLt",
  "key11": "3Nt2BJ5fMVYfin6xDsDiY6aFatXzMbS3QTx3x9oPmzQbUp5wx8DKatjdriWYcaA9GUbnXsFDUt3pWYCUJ99qCctL",
  "key12": "2qk1dYZzV46eheJ2PajWPY4FNLs46A3qHEjpXvyCSyYDcSdR3HL25bBX58kzmz41QRPZcoRpacMjcDJrBpVMJXJq",
  "key13": "2CrDjyQiTuJfTS5jN6ynJCCKsw1rkd3CrCEZXdC3Rbug5WXcks8YRZm94qdqRVtJwyBV2mLtg4ccXBMhtMdQb1zj",
  "key14": "5CkTo8Xq7RwZ8BCXt86SPcBWDZMYE5A3PaDfDvfNbryZmFZ1dQsL7E4goAJNWjTdesmvPkzeqeJuH9TBkjQaiLdg",
  "key15": "58KCwzs9F99khzxB6wtBtcPC7V68etN9isxaCkfStrjBqdpwf8VJ7X2XSDn6BrgRLxakfGmt7zxnLxeyGPBoMfDj",
  "key16": "5SQqP4LBvt7aKUPSKQ6ZAksFG8tKagpeG29ERA1HKA3snsrJrpeP2sbpLCWf2AnW4BoQbSteNFtZQ3R4mSLLP9du",
  "key17": "Ko9e7vznUJidC86cye1rCC4hbSdghSvaBTKFeq7sGfSBJkWqUqfhNkohcM1VUdcXB64TMTmG1MsDoYjD6BzACgv",
  "key18": "4crrj1pbRbrdPN6Kzd6xpssEhxqXQeuA1kGuH5SfYSBVpGMpV6GmxSHcAfrkdKgQaKbVJ4LKW3NCaceKUHPcCv8V",
  "key19": "wMJTKa8gPyWH4HGgjr34cHNFCuWdZWhMfWV6ExqKwNZGXh6Cq8wQHoRdWjQXvpDS2ohMwWedsqubP3NLRDUWFcc",
  "key20": "23zXhHninLM9o4JnACbZRtA3Ymkf6Asgfwx1DWMNhvr5QvSfNiG9whTYWoWMP8C4rLb7ohcfEbuLCg2K5JdVtsce",
  "key21": "2Tt877TSsHPp3gRg7rXQT1VeiTkX7Zqw2aX1SQvze3cJScBPt1qMZcSY6zodM4JTD269zBn3Ty6jyr8ZSWcqj7ib",
  "key22": "4k6ZSKeh6FxowsAGnrnaCUEavfyf2nQS8D7vsxm9hhTDmivYn9gSKEis13p87z14w79hXCis1nQ6Pzc7jD2UnWJG",
  "key23": "pM7gCx14k6mEqBW45JjeSvsLq6pFunXQV3jmJUFKQXB3PsxmdWoLSQfrHF4knxnVdLMaQPG5tjZNWKfvyGsGuHi",
  "key24": "2vSgzvAvrsWxcrnWbF7RFxRLfVyvaBgcDU9bF3VQsoQQJGUGYo1455G6gQXYUScRKmB1DqVop7BTChmC7ALWwaDH",
  "key25": "5wBSrmV1VRNziKq5dYyhAcNr6E6irxWPGE9rjt67TZdeD7KP93NZoKFa3NtK9PyNTBuSxD3SJd2GTirXLSPxqCHU",
  "key26": "4CAe61PNVPt2AeqmeSZKMGYXChk3H4ytejWe6byuKCkhSq5MSTRKH2JXM6LR6B932grotTZcJB2PqLJJ778W96bZ",
  "key27": "5un4tYGuiCiqCp5xuSWhQ57YWpHx1GKvH9651ZRD7NMVEpUBVPzn6wrDwJko6A9Tk9RvrYDdFjijgZYneniCHdfr",
  "key28": "3fbapKzcKeD7XYZeSuyrvinWkREwbL1igjkPwpAbkGDffyQzzoK3W7LdrqqCHmek86mFTh7RgHdjgYsNT4No5e5d",
  "key29": "4Rxr2bPE1cLRBE68kRNQNMFLQEtfaTjjkXw4kbwSrgrXrVadz45UEFomKHTzzhvC1vfiaquiQkDrAEt5gBwKPfm1",
  "key30": "393ELshaLSiKKqFoNmdDCdscFz56mUq95z62b4U4dSs9MxtuDVdiP3EQcxypwEE654p7yJ8L3rKRAhLM6uEmG1fa",
  "key31": "5oiap2KtSqL1ZvvdT3ZXGDRrvNybSPJQahg45oKedkyBwbxki3fqTaX3Cs3k2thyjMYzuYYphrQEhvLQPLneoZmd",
  "key32": "AqrVqywwNS5kcm37h6diya5an8PcpmUrCjRMfXSwV5YXaQECR6QjJonzqKWUGyp5w5dZjfgHvtkAvWRSKEuV3Lv",
  "key33": "2RhifFCPMCcGDNvJ4UWNUCdsCad2DSKcNaZ24fzgQAd6qJbrjcci7ECDTgDfh1MiuUFYeLDL6A1Fi2PfncpkaKXW",
  "key34": "4KAUGoqGcGxAwFFhMFPNd33oDMcc96PTECvFTRjxQFbXR6f6dKPHBtWocBDZBPFxuM8WpmoZ269TrWJqMd1j2CDd",
  "key35": "3THyWoMSB17eKZ9Jic8V699DVn7Q6yjh5kYQVgZfYotSRiZu8k5zQ7Z1NRf4cLj5VKEhtkYBQLfkSmXkgCVfNXX7",
  "key36": "5HFQxuJzNxLDckgSgPteVSeM5hiH4JY7TABhbtUQzTeCcT32UxY5khYPJHHqck8rZxfQNAVjXDjtqWh6XHYDbgTK",
  "key37": "2m76EY1yKpgk36M7jjvTPji9UmxmkfD4jezNuFrStyPkLFX1MTa16wr4H3uUuTHgms7k2Wiqzrj3oEaGCKDk3R6i",
  "key38": "5kyPwuMbF73Fy2gM4GxLf4dH8CuMUsAaebBBorLigaFeLdQNbhxdcrE5bh5NtiusJUUvxMFQEdPB7d5HscnXwnQv",
  "key39": "4DHm56UDMeqdLyT7mvzDzqUigKWL6PuqaYvoXgim5bbfEH1ALEcwRqewJom9Yv9xwfU1dYZ1Ks2FMpXe9bhxr2FM",
  "key40": "63qP5L38QbnNiQB3Gkm5zEXwuVePEG3dZCpUqXmSJ5RipxVC4K6jgCLyhVNr6tyt54rk9vDufn4JCpKH2wGq5RC3",
  "key41": "3Pyvidg8eEbD2VSbG5chi5bofGERWLpg7A8VJX5XmSAwzq55dugG79nnbEdgcKJNugU6wQGJgbgRJoEss3HkGrAf",
  "key42": "5eYa2QyGjEq3Rae5R3h799ScDceU3CU6J9LhTZsKXWA7qbBcQ23LS6ggtPqwp6spGQTNWbkV6AAV4DKexUjJsXPC",
  "key43": "5W2J6Ndc4pVFgWqX9EwWoYgPpv7zE5NbpkcNYdy6c2CK4dt1k9nnQ1VvmAqrmmcSgnWA2rFNdHtxy4PzmF7cUnt1",
  "key44": "3YwtVPRhatf3hxccQKu1oAAtBK1bZLLKWBwhbBnHnrKKCWGEYoMKY5YRNzpGYBjEdAAK7uraKyrZoZbphChnKfSJ",
  "key45": "JbPeD1zBEgAPt3trLo341jgWqCMzeFNGkYEv8VbGr1ybvXWbYNiEfFQTH7z1hG3NBJJhvPGv9a2FMPTLgcsQoAc",
  "key46": "ussR5waKbRrXxmq7HRa79quvWs2MRP1qZQoc4gxYhJxv7t14nZMRRUB3Kw8eLUSmwtnGzSihoDrP4vTijV4QPPt",
  "key47": "2KFrzV3aoiEbF9hekLYDeua4n4H2fh98ykHyRSzjSi6PVNHeUifVVwGjSCP9TJMuZj3mrVSY1CrR729yrFeCfxVA",
  "key48": "5ExmGogKELU3bZtpkgVCHuyzHRS1FXCP4QA9FkJRD2qYev3FtZWjNYyFi22ySRyZHNvFNg7av5sp4VT5fLvuNLLB"
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
