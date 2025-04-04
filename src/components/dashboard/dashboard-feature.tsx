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
    "49tgpCoTAuGYYSEoUoT2TG6WGYMWtk3a6s5fFbnJTJctdGXKYg7qu287Dd9uUyPyEmcCh3hU3CfnpatA3PzEYN9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GyAtayXTmLyWHCHpo5FTJULEL4rUf4ZDCrLRcrGfjcUvjm61eEiUbVJTrg4gsRP4oNbvppFRym6dxZbH7sHPicD",
  "key1": "5ZHNQpNdg9noGh2hmz2km5vypu25hchpAX5D8x9TsdEn1kcWt2VLqwCBzwhD1vqCV53BGPp3RDNhR1zFicJ83PWa",
  "key2": "4VecdwdKAJdjYXYUtkQZr2khtPaHtzL89ShQvJGHZ6sEvSSQ5b2h3CnZHtNvb6uDYjYC5LdjCuAR1dtjrEJPfxoF",
  "key3": "4XYjGaa2rCECR6Z8d1NwQ4DC2ugoTGgPrwTyfWA6PVUK3SESoiRzd5MM1CXuoMBVxBXw289ncSw5JmrH1Wio9oPt",
  "key4": "5yKzLCb6aBjBVdspQ2Dg1hBgEHNaorjEyn5gARZzhqnQnAiMU2S6ha9MykQfAopuLjqxp5CxxkkhsENyqFPFRvqV",
  "key5": "2FfVe679eizoQatveRsmUXL15tcE45BcbsVzRVBgy8NEBf76rhkXb7m1XW74b2gJLFV7tpbpViDPdTjpvH7HTYuN",
  "key6": "5gEAia1Q6R8aAiQN4gNNHDwvTrzJHMr9k1AFRxpK6vPA1jM3afxss5M5VW12xM8LyY87Zdej6PtKQBCU6VV4xBEi",
  "key7": "5dktKUTxpyJduSitG3EvPbEZvWv4iseadtHadAndyxNaU8nN8BmQcZyL8jJHPAjNUrLHGmj9DvTPw7hbKH4HNcnS",
  "key8": "3n5QfS1CbAEaWqvGUgavX9snZUzf6uGuFG1cJiu4B3W7Fn17pLjCVW8cuitGBHXvfzzmvArxuLPKumvPCnUYQdp7",
  "key9": "5C4P2iBeG5AnjcCpuXBYkuM1GHziuBEP5MNMsN1tAp2Lx4BDF5Hcvrr3KwDdYWFEfHMa2Kr9rFLHCkESQdWkifvK",
  "key10": "fx1Fb34EJMwtskDEvmbDvV1LQf1TpdAchpsfQZKpxV19VQPjbeUH7EHYWtA1HqFUwzf7HPBKCrYEGYjjyH3aMYr",
  "key11": "419iv4L8yfGN5C77gXoMpj3jSBhxfaykMtyWTcXN6JNMwKsp2cQTKE4ohSag8rnzAVtPy4s1Zx2rgu4nZLyTYSQ3",
  "key12": "4RNd1j47xwy5in7Ggqmn5YEEYVcsTF1EAzyJ5G8LyLsaBqWumyFvPchVZv1DrGk4gE941k6zmQJQf4poQf9fE3sE",
  "key13": "JWDvX5GJwV3PnwC3PFDLHhn56cPtkqw18jDccj6ezqKDoW9YY4j5Y8prF7suxa37riw1dRqMZZupoSa4PQWJaqf",
  "key14": "dq5qe3A6cphnur1BeHPNwr8jiqZuSWjhHFMWdaSGWyPygdWzkknkxGMfLqxC5sxfsh8tksxFceaCoacbhxMCAHV",
  "key15": "34wiCCBMTNEV8VaiXnep8naaGAYF8tQWk6Y4cGJW7MkZsivXddtgE1m4AThzqhLnhbyrH4fBj221NBKBwKELpKmF",
  "key16": "5du84f2r72VGE831ijXvkWVL8HJRT1byUd7FZXxwswD94JunjRYGtehbjRck85aXjvdfWjFA98kS2JDbNeWR9JwV",
  "key17": "62j7yFxYSHi327wkEziRiLB4sH4NyDKqmjA7j9QioRvn14K5s74ncUzdFkr3XsJrUrJ7XAf4S8Nio8A2FA47QpkF",
  "key18": "66VRKpCeYbZ4G25stoSFYQX1BxUdhMKSKZA9BwFyna2AbLCoLftUaHRdNxvAVRn5CUEWG5kMMiWdwXc4Y6NFUiaK",
  "key19": "5rJCiKAJgs8xD4R4SKrqm5ZQBQSJZ3VjzwQV7PYT3Rn2eUgNe5sHNTz54Cji7qa6pajV7uWuTxgb6YYBaFdNbXBs",
  "key20": "3dMGwNPQi8T74eoc6yWdm3iKqErqvigz7LMXrUdNdiCXsk34HjxoSShe4cSsdL8etqYao8mV96AacHLQgXbY9zEi",
  "key21": "3USaVRMRL2pZFxbAn4e4Mb3QVk5kgbXCRKZLL3Fs3e6eu7RAbfjkthjA8USYkPzT77CfMmZ5NHo7TQJ3KkZUU1P6",
  "key22": "YgidqQs6X8dMnyXDChNFmbAVxC2uoKmdiTQjBdivqEDuFEf1gX88E2bRTSmKQN6cZxZkkaZnkFr5YCaXpfTrAWY",
  "key23": "4fC5K2Te8iS8DvwUyqKCqoue1CAqds2qfiK4r8GdCUV2KK5DQhufrqQYTjVDnemipeh37wSsUEib3baZFaE6vYeT",
  "key24": "9RiVYa5fCWHX9nYnqDTDpWoeLfK4Mb1pB1meBW4f8U9wUbpqEuZTBpcio3ZtDkdVpEGPDfjyXXADZLRynEEK95Q",
  "key25": "4YfViAcwiMJtqCM1D95sbppEfRaAe4ytnBLh5LG69N8SCiyx64Yc82KWyNDdfdmMR6hssafoGzBaw3XvN9rVA1xm",
  "key26": "4masdWUcPgmHQ9twkxXJkAKfiCWDPZEWJLNQHrobWYiwdDMfEHhY6YdvEKhkVmgJN6PtP1c5M5rQUrp7e6eVCcSf",
  "key27": "4rg9skzgC9DRu162Ac3wNgcnwKJsQWeozNMcuGRmbuZATeVec8MWLYJy85k4H8YiN9dsTGiNVoWLQQN2XuyrohsJ",
  "key28": "8o9rHxPAikaSctj6b79vxJLA8p3g6tgj5H7Togr1zTBeyPVzDf7PHfMXt145DJw8bu2Gi3Kzoku77aXezhcUouE",
  "key29": "jrosDziNXJorraqcXzyzMoMznZFsdNzpiLY2zkUFbNtHrCxuVpPYyCTkY1QZ56Z5xrsDU1PvyT8QsN1yJ25aWze",
  "key30": "5SRpoH7rHKjeUMrqLHdpqfpX1JpPEpJJosRH1CmYzWuQhTLehXzAuiNz66XK3UHNg3c3ZhYP3RJRnwhNZWjXJXDG",
  "key31": "4P7EVPJmrHYceFB31CuQRhHDwNQhbRYC6FoTm5h76UV7Q9CmKyRiuk9vXTSM1PhGqKJ3rpX4jMURNMBXM1UEv8Ph",
  "key32": "2MNbg2TeTvBbK53LfcjW3TQg2gkhTURqftxUYhFk8nijvo2SvFgPzVVH6fBjoFPd4fUQpVSurZJGiGitQZXUSudR",
  "key33": "aV1r42n1MJgsGHrbaU3Hy9DErUmqfWcPBFWVcpxumYnC4BzAYqWtLeXHasZBKJhDiwGksbZbJmDPdJ4wNRydbEq",
  "key34": "2BwXny4oGeRxPbDahHXVhpHp2dQ1VhfBASxEMm2zXuUg4zrm5qDUAVMcApSHp2ePV8Xkvko818izFmoCLFXeHHL1",
  "key35": "24pdV2WpFrNKSNKLWLGNEhR82ccmPEs3i8sLb3moByJspSYwXF7oTKYryz7uAgiDbEHaV12Fpmjsrk4x2r8zuY8d",
  "key36": "JMvRjp65uU13D5qY7Sidd2MBrhkLXJDG4rD6LsNUsjW1BJyQR4EmKkjhpWYMNe6TqGdTM17YYUW57cHesdFTfsd",
  "key37": "3h4youXcqeqcKKf8c3SVgP91BfwvMMXTGicF4Vc3eRh1C6XAXQ4DUUHVj5FY3ZcmWrrGwnioBFof1Jqr3AETH6Wf",
  "key38": "2KWebSySx2rR1W7bRKvi8KQAn7sz7Ffqrxw52k4ZLVAkJQ1KCS7oszz73BKBxxATkvApcWQ5dRK1mg4cmSJyV3gN"
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
