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
    "46sd8f2MEPmiMRfCky5x1RcKwU3v5oLGxZwtGHCjsFCCbV78VebqB69EM6PG8ETf62uiwqUDpu3CLycNSbFp9pBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJPhyLogf75kx1QRpSbR5Nfw4kqFx6o3YiMnn1MtCmjVZEaTBWDJpPKcR84vRxRVixBXfUaDR1mCZQWL6rivUtG",
  "key1": "2KVVfCCqdnMxp6JkqLnvRiq74fbxWfnjXEK4BVYn5FyVEdF6Rsrzdhkvvya7tjnfP9vG3VkhC9mNP8G6VMRBWwU6",
  "key2": "4QmSRvczwcSWTncYdZ375LPSc8TwntWYYjsyYZzRxnRDthH7Vz16KpD1QeaPnxuFQnJnYdBhb8M9Bgjyp5QDt8iB",
  "key3": "32oDah6s1NZtnQyTD88a86oZQgo2xQZKDL6YuPsGkYfoxheTNbdw7Lv7PRFGXWdCFCV51sEPSq2TJSk9ACnQMZz5",
  "key4": "2D2RXrUqZPaVf17U8pYq6X9F57gmsmK8YUFQKpDrdFcB3vznyXJDnb9mfFYMpxY5CDvcDCu7J8dF3hPPMyPCkzom",
  "key5": "5d3He3c7iGxiY8HCXJDinGX8uNNrdm2aeB4fDBC44BA4bexDctsKPa8F8fPdoK9Ym6CEShpENyJebvvKuSVD6pPn",
  "key6": "4rhSGanH2Q9YFpU6ozb94BF1syhUoM8gB7qCcD25NzUABJtGEzVsJDLZDa7wQ2y2oskxTUwYE7pbCNzY8Sj6in2w",
  "key7": "3aRknjWZwVnGvSCzYACeEMFPqcwhNWMimWUM2XC5s95X2JFjPrRL4ptFYpsk3qwZfCM9395xFmD5STjvLRoJzxvW",
  "key8": "5j98dWPgMn3XvDQFb8BXyNVmQAxyaK1G2488tDkfU2ee2jdh3VhXBeunfDrwNC216r2aefAd1rUAgoXcF2HbExtz",
  "key9": "ycdCCPxp1h1maL6uqCRM4pmnnZxfFcHFhc5irnVoRR49uv3RtGpUgMoLTVpQLNA74amMgudQ6rSmDv5AxADzxMP",
  "key10": "3UybzQ3SRQVnAmz8GkuF36Mc1seD1noiBz1mdsjqAvcMyq4oaaoe4xsFEBvstkJg4JJrVnqcD1TGpzdqVs1Rj7Rp",
  "key11": "2V1VqZ55ZpgpNApowmgE28Ch4WSzkGXEQuSqTNMrQGTswfyghGZfFfE5z77CsBn3KnSqnGAzeHjmpvXyxeoWNWqK",
  "key12": "myoR7FFoUPK8Z1fFvm9iKn2gMF67s36RhiQ6JfmAnoKFnRSz7MdK2wrV4aRQFEsaHxGWyC6cVxqduRzsghL6SD4",
  "key13": "315Gq7t7X1h5dv5FyfJeT5aqzchJHFLGecRU9YNnaxU6ok9GLnQhKPQmDdtra2RN3cL6cwMR4u9GezJW71CcVzWo",
  "key14": "48s6kc9PdSHooTCMfyn9C5hBErv9BHeoQDe5r7g6iK53R9F5PhZMaGT75Nzfcntbsb9DmP6FNh6Y9ehm1Ew9QntW",
  "key15": "4oC5HRaHu4P5J3LU6pRrWuFoj62bqYvVWgXnzUMLiVSpUx7XZorsCVoqudgL2bQ7D8u6TemqSgLgKwDxeM2atK69",
  "key16": "5v3rqD3XM6a4VVYLwQbanC9TRJmvYvpPu9Htpa5oQeZMFVJHj6mkHn56noUSPhAgx2Pu8Swbn5hRTCYqNd3cP6xY",
  "key17": "3mW7XrYMvXoZrH7B861kYcLUQBx1A5UL64P9orAbx7nF8zmytQM48Ji9JGBr7wQhsgxwMYwUkrKJnArBQVdiknKm",
  "key18": "3p3cNjFmi8duBrqauPouwuPshiwx1nWvZCoV4wyM7ekhSvvdBxmFuhp471HCugo1NdfvCx3KiWNN24koxx1tDF2o",
  "key19": "21SNcNWPkm1EWKj8smJf9Gz1zSXZnPdMD5iGpbtvi563ksAve2XieU95hyA1wvN2XL2wq8XWzELW4wtwe8JG94Nj",
  "key20": "4gU5D9sGJJv7sZ7EJ4xLin8YjoLMXEwSHU3JZsN3Bpqy4psosu9W5jjQaAnuzdm915i5pAADMc5tmwx7YoaSXUvN",
  "key21": "5atCgb9XEqEQb7qhNCXZ3eAED5XmR99iYmRNoGKczmFNAEW5LzywCEmUoUVuKH4QDE1YYM7jpb8xtz4MxwMnKcrC",
  "key22": "LhsU7gsJmSNByHNbNNPuv9KMuqJW2Px2q9PanEPe2CxFWfDKUoKmi5inEEFWUirEdjzYC3HnvPnZrpxvKya1Mbv",
  "key23": "Tu9tRc3RZyCyroyzRN4u7U2qGDG4h6fo7V3MxN45AfQmN3tEV79TmkdEzwcBLaF6S8cv4aVskZvEKQFWXg41jkg",
  "key24": "3AuWxndw5dNad3E4kgjcbZLrwzUXhhhd7EXL3pdtCxsyDA9dntCXMcmkoGKXXzGAqBfNUJix3s7Jot76hY9yrPFE",
  "key25": "mVJ9YdPDuhGiq9EDFCzYeoRWmb5A4KPj7pUoBiR66gv4Syd7LEMc41X3PgvXu9vdmmmeg2Fyo49KvtbMX6DEJxf",
  "key26": "3WgGhtQfquRdvU4qgVG15WV9XMkQX6JtTLzp6wNbpzZChNRQFqM2ryktF345nPdiStidoiVEYSKEGS7DowUJPoVZ",
  "key27": "3oB4DTU7sF2bgfRRVqMQXJsCYuVKy9CWhDNsDiMgdr5QD79y9ChZyUzqSDa8NQe4Qt4UtRrT4uiMuExEvkTeFaBx",
  "key28": "2CcNSgxtC7s28EMY6UGp4uT5YpvFQA4r5w7KZnSxytEWwQCPWpJn7CYKoedk5doD8nhKFR6bZpJDaDgf75p4WDfm",
  "key29": "2E1QG1FN5jUudXMhQhUq2t2StRxCDpVy3sCmakBfhrpDgWdLxG4XL7kjPMa96tJt1gpYPhq1ozny8r6KTaWAHbUM",
  "key30": "37BkUhqSBXjof55MZmD6CHroKkE1195BcNAD6w2zrznAqiLood5FkHs6WSv3wVrcuTmELYx4rszzMgKYTnAoKbNs",
  "key31": "3wkFrPeDn3X9MMUZLwFtLWDew6iDmVFRRMF8mJpsPaPh5AvEMvG1b1BwjDaSPc7k8VL3e7bJN4Q2jos6LrAZUjZ3",
  "key32": "5aymnC4u5kFMqp1qSKV6PAHmEMhJykzhy3S4L7fTCvDWjXPHJArk7154UtAyprkMcKcg2bfMQWBVUpMUH4duYNiT",
  "key33": "4t3WoyZPRzxe1Rdr2yW3uPvnT32ZrsTxpR7NEU7DYn1J7Ve6Vu6R8f4ewzNighRLXfdhnktCZaXzbk71RCL4938s",
  "key34": "2QiV8Uu2MPvCT2BrqpESBzFpjaGVXgUhQotrwsrP1HmrRZjr38WhxUQCSpCAA21sv8bwhvQUqWYPR61bU3wMuNaN",
  "key35": "62a2XJKHX2zjJBrc4Zrqku2CcxgwWSJmiTwkaSgCUu82DS195RStdBUPseXtc63aivhcY2iw3AH19qrVRDt9EWmP",
  "key36": "3nhY9wiXbb7E8b1LpuUu8vb29Lur8iHBeiNHynRRWJFEZQC4hgxz6S8S9hdv3AWHqeMJ1CZGcAXbLuDqf9gXkp8m",
  "key37": "T7QxMx1mxNgRVCPaGTJSSMYLWcmAubCnWQ6Y7Ro2QdseawjmQM4rmze71kbX8hqdPBLDCV6eBEBN9oaEiNccoCa",
  "key38": "LLXRA4GESJKhEqBuH85VPkQWopK8cMP7punzg7eqhwKZ8K2gCJ1dDBVshmhMA64rPcC6haSTv5QBq1iWaRgkTBa"
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
