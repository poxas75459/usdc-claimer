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
    "Y4vhEZnSSh2styJrnHRiRW4QGuXsfmKqhtTD1QJKvJSfqqvqYdwCktrV6aMYav7nKfKiJ95fG9HMQveRG8JEXLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EXGf8txHJr5fPev2ujWPYwG1enAesuN1PLbRVXEaiy4WAE9dVfvRh3zVGF3E614Pz4nTnZKMmudZXXDP8NkRib",
  "key1": "4Mf9oEDeow2Jhs4jJxBHTukJkKbhLVjbubDcfJTZR9CrmmrWe92BaYyMfkRAfbcFus3rVZXinBAkdVxTu2FbtM5o",
  "key2": "5sdqXKugXrhSCXMqanMowFZd3zWF7NY4NTCCaESZhPNhETekHGJoYX1NawucFupEpRbXj51ZimLdt5NAXrkp7gGZ",
  "key3": "eLYx9v6nJyas7otqGtraJ1ZQv2EkTJ73DByUmo8mc9AmF2hoEnsjH9saPT9YfTF7FdLsW1sd26Kod5nJ5acZjkx",
  "key4": "3sY5JdaqvL1o9VQiuUjRh5pyA6X9y5tbSDTmPYsZf6zBDBrsxwv6kJDb71CTiB3AaRNCsqXVjrcieAuJ9byVbUxg",
  "key5": "KNNnigZiUB4smGXUi3mPgi4Se31MAGZghcAP91BtyR4UJxBQQZHARVVYgbBxZnTQ7cZtMcMqYbQCh7MLU84gVkJ",
  "key6": "xh2K44SpxTFopBkUhX5XQ9dWUyYzRzvqiL4Z4Bo8eeZs9WSAg2umeZTpNCwDxD2XgXYaTuUeStjTtmsVKK5VtBy",
  "key7": "3cLq3jrZcrkRpPyCEDeiG4YjBSiM59MA88YBSnAMdN91YTBtiAKjUQgifktbuRyUMjemzg2iG3szq7RKkcMCsZL",
  "key8": "2eJg81cc92MSBEif6sjvLuPKNjGJCBxP9P3TuuES8WzmBLRGpARwy3C4hMzwKNRhdj265xqKQHbHwwv3ZhxQdheN",
  "key9": "3EBfH5f9u9tHTofP1jQxWgpbrhqHm3k7a2TRfVFTMps9JEeW8MoToyqjNwAkzpo3r4JuVHPyQY8v58wAytk7dUH3",
  "key10": "2hWSbsuis3K1DT8v35wwoa4hDfcA6RK2snqSwac2mC6JZeuPt8Zgsg46jneeKo9iaxKzRJ3Q3aJkBCxVddNeDBNx",
  "key11": "28DVMtWT92h9rJX1QCJuWupxh6RdCSXZZGHtXi7TtFhhY2y9gVdi5ib7HGu7HfqjgZvLm245UtUz9A38aGxnfWdQ",
  "key12": "3zKZrV9JyWkt7w4aMNAZSB6u39jD1mWuJFqFGgwKC3GyAVR1SP4tErGmE7pk9vHHDzyW1esN2Xu4LFVmHyHY8NNL",
  "key13": "2oTLYToxpreQuswaPmLa9AiueozFyyawrCDmPXny1XkR4nQccGrt1U4xg2vpnMg635ouSHFM3ZoLUfoEqaaaFaRG",
  "key14": "2EesgLXNL5ocdxyzaKC2x3yRAdwTemGoqwB2uMoK5X8TebLFBdoFS1vfbMfefsd5CmKxKcAaGqrKqJR3uR68Th69",
  "key15": "bm5L9RyqaREVFZbx6UvgavW6wwseirVxvBZBiNXYX4HuW1ceBYEY9GAwmdeWZyvCV7fh16bDGnDAoucF9enKGbd",
  "key16": "5nqsEXu8siurNZRxbtxrhQHB6yyEfW2LG4UrF9Jz4cXSNPcH791m53rPUtFZQ5GQmoUt4f82SsibAEMWk3gQfYA9",
  "key17": "4J7csrr6hrUvszMtNJeHa7vJHhp6mooZwZXr8qknxVfDWgELHeqySQhWU6CGH2YT8vQEC7H9LLqHnJKWeRKFKTqK",
  "key18": "5VZTgo449KY4smyHDiy9ACZGaPDZFoMFXXNaXpcL8tdi8WESmNa2qdjPS8wRvJxC26EwXRLQZThwsPLVmwhjrUnY",
  "key19": "4gj7nr9GfkTZnvbK8maWe2BZk7jZsMkav5hEQTKDmsZgXZ3aPSXyT3kxVpwPRTLxzVWUv7RaramSvNH6ZdJb9LF6",
  "key20": "2cf6g6uvnkJNS7NqQg3bgcEoZMxMx8Bs1yMHfhYfADnDWnj79ja3JsiCVkyjsDnvYKs3H39C5sEhwnWbPDCAFPTt",
  "key21": "4zyiston3e7Mf2owqPpCN6LjQs8MjBYXgt1MzhUFwDFvUqQXXUKPnFts2AQyTZnkGawE2XtW2J97ofe8vYF3m9Ee",
  "key22": "21AdZYmpYH8dRmgLLAqBR5cgMhgiGZBNXZMy6YhbEywUwE1h7UPtiagRvTGCZb7zKsHKTrffftH1SQpyD3pa3qmH",
  "key23": "2rxWeNBUtQFDFJaG1XC9XzXZ1v4VaFW37KneGwPaaA39Ut3TBQEz7jxs4TE2hUxeiumBDTksAK1HeMwD7sXMxDcc",
  "key24": "5d7Q4ey1FXdRR3qfVHrpVVptBHDSAbcqpiKr1b3t8ykYkmixiX5gbPyQ5n1Eq4gJDVpNyALRS3XFhq6rp8Fwg4eg",
  "key25": "59mSvny7sWJm948nteRLA6jmQFpucyzTVvDBbxYw2Ba4XBbdfEztT1hvGXWSfjYULrVM8oSw8WZAW1WGDaRK7BAC",
  "key26": "q3E9FRS5X8ToewiWgpjLyxd61bCvbmtHcB5TvpPBmTTjY6FnKxfmoLjZgZDAf6wSJW9dUHk8GirsmkdRTpSfWJb",
  "key27": "2GKebZ16fW4CRKUPA1NWz42DBxkX5SyEJFZhEqUGD9omSSQbXcAYT91QxhhSqYWMeXgYHfXGTdMvmCX9mdKUy9v2",
  "key28": "2788e24gPASLL1VcK8AWnz2TTMz41ptVCGkrJxTgYogP5gBtKN5EZAepsVMFUBtRbVWUe31fUYAGMtKgwhvcp5fJ",
  "key29": "36ySfv3ZSeSbyUusxUWBMzDhKizhr5s5uKmEMTVuiBcC8EHDZ9KyEfgX91GkzvQzYySE9o5gxxdYiZ7Q3ji6dye4",
  "key30": "4ooxNGirytqcHyUf51VAbPCGQwxYTjyijLL6tt3ngaJtrFPvQXoWEDgkEvTWYE3HDdttM94z5oCyagV6UKn2ZwP8",
  "key31": "2VAHpMYYBQrpaALosvFJxkPihtSCFc4EhbrMyxHuGv4ETNDky38LEgrU3pFyyjsZiUWe6RHj3F6kg6PCg16KF2Uo",
  "key32": "LHtfXkmme8cmqk7Ujwr4kY1T4gJAzGT4sAgdRoaDrPe4Abt2Bgn8cRXZyC3cnuoSPWLUgMDNrpbj2yeyn9BCYJR",
  "key33": "4xJ2unh4MujySuJzSJWLHjZGU6yV7mtBciENmmxR27ufwyp8XtjTHPHSX4GD8TLwVBqsr9yAJxMowowScocKjHsK",
  "key34": "3afnHK9z8W3WYwfCv1BQFJiz9hZ5gi4X2RWGe166DWJFAmLWQxeTBGsEijUHgaESy37Xvqe42hSNRSNAi33tTQq2",
  "key35": "418stjNvkY6CZzeCw6YiCaiL79gBiNB9jGrhbDBWRjjJBrcfivNWC9qyqHcjN2W1ESerRBnPjkCuYJvTbxNHf1H",
  "key36": "S3svN7bWDWigfKLsGbAPhidSHPbbjUPNC34QSBo61aAcRoRp2uPWH8UyoBhKFh2ZeDUC8PhiJQswpF6go3hsKRZ",
  "key37": "4ZDkehg8KwpLZe25C47jUPhkJiju4B8NXY6AvcELszCh2QrbvSkZnCdVKTvpeNn4wc5JJiHsKZffWdFNUM1M8WT9",
  "key38": "5gtm6e7rubywuK8pYz4FaexPotVBgSXh7ubMY5g9B1nQAyLFYjoorDf8yn3fHssBCGtMHetWKqvNeJxcyNf3nHha",
  "key39": "3akWQQxkZhiHF533JeMALLTZ9eUJ5LoTtSvRji3bZM5KZaXeQYWHN3SE2h6kPHKe5Svf3zvXadzC3rBQhdptPsj8",
  "key40": "3TvedSofBzdMJ1XQUitM6A2BcjiHVRYKxLkUnURpS9bL4JKBCDRMiA5MNS3nzLrUSGwDW8PcRDpr6QrGBrZvSLUV",
  "key41": "2SvCvqMAKXEkDZnWMEptvRVk7Y49AQ7G3VX7zgFUbyHzRay8ovoXi1NtcNjvAjVKRvQFe6WpDKt8jjfr9ad7C2CB",
  "key42": "QyMgwm5UorT7ntNH5GbmdLRQLuzTEE9cM5dssQmeGASAgS3i3H7P9LY5JuNAULsKQ9SQTLENf1DvzevL8Ui2bvo",
  "key43": "2FY44JpUqisjYDVoMPQrpybNeRcLBWUL2Wg5bt6qwuL3J5qX85YFaTVmYztv9b3GT5dK3Sd42FwEfs4GxHcR6uEX",
  "key44": "2NvWQdT1udGjVwoDR3KiEzctjfNHabRgpNN6FUraUgSCWkgTkdcAyYuEBeywmaX3C7DAq7FJ1V7EyhHgcChGenG4",
  "key45": "62LCyBiZzQRRm6JopRiBiSftVzMXBkAj5H92KwALwmaKfFHAthUL8pgPQj8Vepjc2xSvmHXRANjfVaz4odWbkhTh"
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
