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
    "3eA8tMU65iusvW9J2woF7RpyBAnEFQsB5EcZxzsWLtSY786M7H1taxegpdmwwawwJYQftpLaGzUJRprYtfAz4Qdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rZWgGpuqQmBBLzN8PE2qvLd9cG1mwkygz4mRU4cz6r5Jkmmsu8jxber6j76n61d2nNB1SbkGaXDqCHtmtXTnsYp",
  "key1": "4a4y4UJZoo8hNhAFUhroB7FFiVAxs7P7Ws9SMx8D8J326KykPcT4SK4BGnMjm3AeiKovuohKTEGu14jDyQm9UstR",
  "key2": "5PuSZhCKiZve7N284xNazNTsW47hcX3nxxybTw6kbYWQ5fbYDpyVvfA55ch5zaXm5DMxjdmgKpwPPrMDgdpftKUf",
  "key3": "4c7HtamMmqjkzjgVvVyE9TKBzr9wCukfQ8Q1VC3WqJR8hchxYRcVMvdbDBacUD6HDmt41SpV5DvC3XjRV8vfaZAw",
  "key4": "j7npndo38GDnYT2PZMiwXKDou5heqQFXKfwQ536FZbRLdzzCZ5UCVaoQw239Nw5YUA54o4un6nUrGoBaRdQubZg",
  "key5": "4r1q75zsRAwPM9sVHTKDeyBN9uBFi1f1gtpJH1sCDPmXntdoh99qo98MBmN3QA87iCVzm4bXLtnkpPokSnD7RmQp",
  "key6": "2BwEzkkYo2NdASqPUpeaNaLzqcgvRWmrSQGD4u3iAHb4oGLiJ1M3p9bWYXZ28G8G9u3weMgV3WYdYfMDHSeqowEY",
  "key7": "fUP3t7rRn3Vmdw5meMUgaPJu5L7bsfgNadUEMkHkd85Y1An4oRyVwc4fSnfX13Q1FZZyyKX9VK44KzLDPYQF6Z3",
  "key8": "2sWNBfjXJ46zFzvDN9CYM2kVae2uXS76feCTwKuM9Wr49fE2EFZ6TMchcVXdLxa4Q43jg3LBo3nNiH8JSCPhLJki",
  "key9": "3cEMS5TKCoLHp4vGsdNAXZwSoEpCLeAQaYo8BVVVcHmT4w5vzjEJz4hfB3xGU7Ub7VYEMRk2wH3CUmtoNiKZ4MBg",
  "key10": "4f3St82nXXZttmamUkV8EBqydYoWX9zzcRigR8UTXs3tUypUujjcFRuJCHwweFAYq4V6DvvG9EZyi74Esfx96RHX",
  "key11": "4Ar1HFbR9YPkSs8pWmF56zEGVXijpFMq7EdoUHdXZpd4bakB6H2Jq8nLGUTEC1vPDeZzGghDJkHtrVhiSC1v2vR7",
  "key12": "m8NLNNDH3cJMiWaXiVWwCYXaA3CsSwwfqpNVJReW2TQiVRyTbkrTJRzq52NqBRx27T4ExnpApeA49MLUEaiKaMJ",
  "key13": "JWA5WD2yMcnFgjE2QzNpH5xLQdHJKFUNrXXh4wLKV3Z6DmhNMgKPcMLywso5Srsmrd1hTbwo4uUA1w5cQXbndsY",
  "key14": "5oGnQPcs72Dewet6TNFATDdMxKQHoszM8om9BS7KJTHMoH2qsWQhaea3froJAy3AGZtAoBDmCmRLFzP5pQGHMDKZ",
  "key15": "4T4RvfxHPVJgNBFdvNwp5d1e74xRqPN5T6ebKv7p2Vn7DPdSXEEL6dy9GyBSpKnoyoCX1yiaqsLqyAYX3ktPzo6C",
  "key16": "3drUa8iRj3ymYzSXzAN49PDfnhD486G5S7vcxqP6cYR1fvcCQX5Jf26Sef7MpcNoyAXSXSMGSh92XgzAakdeV3xv",
  "key17": "4FdcnHi6RW8P7Tx7LK4Vcp9E9XS6p6ewsKVhRLiTS9ktnBAaNqy7iv74VrPZb6P5TjKoWPeNHTe9BLsEDZbyhfny",
  "key18": "4UXME39DbyHDrVfzMzqzLWoXqhGEJdMVzLVGAqF1bC8vpYGQimsAj6SmGehBAs6G2tmqGeQNpp9LApTZ3jfMazvN",
  "key19": "5aSyWbeJxpsYKG9syo26F6YnxgnZ28kw1ewnJ9t1WNXsc3FZuoR28KWkqFiRDP5wy9cd83QDo7ikfwTbnekEM5iP",
  "key20": "zkDobgyyCwxi7uPcUqJtA8koVBRCJfzpduz2An8fqddZ9VTFXGK5Bsrn5uzEbH69yChgjenqedxa8W3FzYgK5gN",
  "key21": "k178HVhkXhzwD3aZjE7WbUW1YbFRBX7xP4vK9asSmZzpG8VH1XaW3AeLoTMq983Q52txMDHrRzyr3Ze72Lwtx8R",
  "key22": "2aq1rcVUvMpSGDLJx5i9AdbRjMbbn6zujWrMbD1TQtkSKJvaoEE66sqR9bC8viiQ1GHHBhnZfG7Ex14BczzprGsP",
  "key23": "GjQjNAbfgdUfKrNDDcApdRHSM12TWYFoDsnFJHzvbsHxPaM2G4jQgCMGnDi6FkLaTRxetiaoq9CQQ6VtwRGjo67",
  "key24": "4wDX7Vq77rFTvmUEFYYHaE9UNkevBSEeLoEaAgdNRqKwzbciqXLaGCRW3xNw7sVKoZmAtqf97k4D56uSWj7oUH8D",
  "key25": "5BoDMsxDDQGJG19azoZgF8FsnwRADFVufhPDYHagVmpGGZFAzAkkLBxUWDTMA4zQKP5qdpcyZqtFrRKBi1QnAEZ6",
  "key26": "3AfmxkeDxq3SLcHXECZ3QUUkHoL3VTb4mJb5uFVSNuhcBxYth5QRJ5dL5sHVo5UpegE2gbWwiGkS1CtVuRcZ3LbQ",
  "key27": "54PekVEfLrz4K2KBCV6myamUsXnRzZY798pFtzgSrkCHWBK6WHLVJZEtK8YJJ9ogxcKRGsCkfJqtfiJY8VksBCfU",
  "key28": "4qjM4vU7EYX6muVXXXfKHF7X9de6vkve1KD4i7X4kvjgpWK2xvoiYugfv7LVFvN2Yiy778vwcgM6nFveJGkb6bhi",
  "key29": "3VexEYCPkobCwu1B6ijG9nujcZixoG6iStmTbPRhd3LeXinemNgQBhHHDjJUGiQvX7GchHW6obv3w2KfPTRY3JBY",
  "key30": "24DiR5aPi9DjT5NEGtuFXqeCrqndop6jJxSdZ4vmPfCUJcnpsXLvvq2SnBhwzNt6NKXrHEnPmngxYQvTEs9nJ9DL",
  "key31": "537qJh8Y48cqUGxckYL7ZGSkAcv7nuhpzbCzDqVygv3PpkxG9btbseF1NHBaFR3b1buApTkPuR3nkfpVf8xiu58m",
  "key32": "3S7bMa8pf7A515G6LsaeTuJb49oe3qjL94JSeEPtwL6MbGZmLBprVDta2rbLQixjdES6a1SoQa3gBiUJqTFvfbbm",
  "key33": "Vu1YESEKqgyWPX7frxsct5b5NK3CmGH5fDY3uwnFYQFkGTa4JytXFVYNRBRDPEbPhBgsPnQtuW7PWPFB9kUcVV2",
  "key34": "ed8mgBmNnrDspqnwWY5hLvMKQzHZ38rc56HGJtnCVECqrCHkfF6zaFt8kY7jFxR1msogKw3KPDaohDTRzm19LUY"
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
