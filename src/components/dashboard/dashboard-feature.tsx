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
    "3bZY1Jg7GF9ZL9xwNRG4xvEX4QWrVdMkMyj31TQAcYPVeqMgyovrqTsDEdvyFgDFdaRf6HA9S6FVWnrQngFM6wqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tyuypjY1k6AFSmAwpb4mvXMA5p93MdvbVpWS6TpUHffscthbNA23TvUAAoKNrGjgWAT8mbkWkddi5rTMuG2z1MS",
  "key1": "t24QGt4Ss6B2fLyPuDpCB87Kumou5DBRtx2Gnh2ZAPgThA6BxyXBysEkts3mNQ7p2Rti9WKeLiZrahnRSxM1u6G",
  "key2": "4GSYF5aqDFzRAYodMZBgeFByvegamP8db5vz7UEJeU8atggngLgCV2amXPmEHLG2EBpFWmC32ABit9G2pEgf1ydx",
  "key3": "32cF42B5Es7wFVnpsPsjVvWnLH2nk7KWW9rXg6iMBs7bNpJFDn8Lgq7hugMpScb7Rr79BZpXgkpKAWssp5Dhy45S",
  "key4": "ayQEF1ZVpTvZ5e1KFx4v7VKVmG1Kc7VJZSTtqbJzXvGuU2BvAxC4NcyKhaCkFfUh7YA8jtPDXuvxPP3qNGu7B5L",
  "key5": "5sEYk5dpvg5rYJ4GXSafKJpFKkn9xTnCegQUy9b7PxLCtfNq6wx5zUvcp9AaRvhdWug6G1pf3WHR3ceb321wGKEJ",
  "key6": "g3T2EQHP8VCtxtMJovY53CmEu4G6itdhycwY5FXvrPDkjP7qDDZ1UvhmCVFgwSBv4P8zpbC5ZLu2ZLbZrCHsv7Z",
  "key7": "2Yahq3poQxQjs2HFqPjcfUmv6AdheG9rrd1jBU6h36STNsUoySto1uJGAgqWZy7ipWGTvRX88Nr9dZgzvxNatRDa",
  "key8": "5dzmXf991nUsX4h62wAvrv9jTd4sUUHBLpX4BwNQjr1ixuG1Fvx9zaVAQeR9Fe1UjWcQeJQz8Mf656WCq6khdfmw",
  "key9": "5U66xqgoKSEBJFTQw1efBP4uB2TjQfvPTYJXZiWFkELPQXH843qaN4gEEckgPwgE1BaDcs8snn9xVZ5zAoxMR8Sb",
  "key10": "3S9srhtj7b3DxSMqvxhTBGD66YYNeqTXG3YDERqAfk1XQ1BvVRHBUBjWrFhdArcqdCN7PipnTp85g78szESkaYz2",
  "key11": "3siNWFvtq9vVnR3BNJo8aS113Vv29D3LfqvPbK6ZRykCZW7ZtBpncYt6SkHQdGNqb9XPSKZBuiW41jbyhpJVX4yS",
  "key12": "rY3kmFPTjoFrkQL1sGrZ4w6oLij5RPhXbx66vG5dQbWgjs3Vb2WpbNa8MAuo5ZBzZfYVDNWVjfNbVF4RdRM4qjm",
  "key13": "5QNxe2DmG2E6G5EXJCiahuL9tA4667poCXhjjbtN19bhyohG6zo96hQF7tWJ8SWEKAoYcLu9HFqCgR4WjiCDEnTs",
  "key14": "2Zb3fmnEr1ZzUxTpcNGSUH2Ygm8iYGfhPAT3iP9FaApRhuedAVT1P3FzeZYam1QY1PHvtZnZfuh6KrwDr74qJhnm",
  "key15": "3m2DLPo9QHP747pxcYea3g8pdXyC467FqfRwUTEsVT7hdYFVkXExqd1v4cwSE7unQZUaQR8wLMedagmN44dZ2s6y",
  "key16": "3hp6rSNzRRV4ryYE8wcjYeYrt4Pipg1PcQNU4HyBAU7fMxJBMnqGw1iVmDo5LUJ3XEGrabB82Z9kKkGDsAH1qUkT",
  "key17": "i61sLr8pFdTcaa6vAp5pZHh3Q8LKcsVZDrHCTiaFCjvrFhNWhkL2UGMyAFnYQPMcyb1ynWJb1RZfBvosZ26v86Z",
  "key18": "2DRxgjoRGBDApvaV9v6TrqraJMvHBYczCaB2aV49ZjhKXXTM4U7icK5uKsE5xAGG1Tm8W2Hakk7S5nR9b4AMPSA3",
  "key19": "4UftTaa5CTfVNg4gnfZz5GqRzP7CA3bFkazFCMAh4ABT1ygEZFSAn7g6vwnLzjBKJoHBpUtF1cdo79RtfyMLvN1T",
  "key20": "5innHyR1oGM3RZoqfHq5pnu642XwQXakwsi2kYWArtEogBEaZr6XBqb9UKWWPTpzhZ3jiZAP3jqp5GqyuieZ3ZD7",
  "key21": "48uW2YKD3n9AdKCneZs77uSNqqEt6Rmnq9YNZWTowV3mKeMdHLJbvgvmpQeFydKwfNF5j7FFPJtmaR6vzX9sgEuS",
  "key22": "XhcDcXvUy9SvtnNwDqUqmxYXzWywT66u9TixtbMeNqqyHrieUAJz9H2VWR644YTaNn5yLKT1FRFskW2s7uYzTTQ",
  "key23": "t7b6p1TWUZp7ew7MdwESPyJDTCiWLaa8VqrmdfuqZ6GkKFYMuo7Z285wRmpZBYsjft17y35PT23by1P7wd8XQ94",
  "key24": "2ebiiMHWUnHiaoNQz3JqTTvrqFfEb7wakAfR4x184zSTDkYr4Yx39oazHm2B6EXSsshLNqPh7ciPXwpA8BhHAVFF",
  "key25": "4a5Z3rvr3Q16piUVt82fExyeUtDyjNCE5bA2awhPyXsUxiCZBSsqQyjDpW3XNRWoNqokh7bB6j1AXzs9TivamtfM",
  "key26": "NSScJA4t4UyEZ7ECq1aRC9QQYJkDfqU7bGTaFs2r1qYtjTzwHmpoTQf9Lt8oNRaATjv8jj71HY5rWG5XCU5zpmi",
  "key27": "3iH2y8d9sVFggXa4xh5copvgJrLKy9jKr9KTf9Qv4d3WudPfGH1PZPvpEaXNtiJ2ao7QQg3ARQnKm7hP2NsCnDGy",
  "key28": "5N9HtCSjVA3mHH9Bt3FVvJ98zBSdaNum2oKNN9SoEjHTs9FHe8Xqxo3b4XW4YGtZnnXjNjbAAXsxCSUdKgDqtGuo",
  "key29": "2WCvJ52VVtCXPKssCchLouTPDdsKaXjMtQoRtZ8PEtu2Hc4Z9RVdg43XaRGvSEtxvqbU7AVKWRzwxqpK4Fya1hJ6",
  "key30": "4oDs4KTzSmwAiSq1bUecEXk1C5cMBAKCPUCDwmmwfoEkvj3YTmUA3a2HxqT1ybfvgjZ1WiNzhQiqP5vhoYxd7uyw",
  "key31": "5UNxm7y5PSUVrW27T3dyJDrQ2LhTXZ2bp5e3zqf2eppPLjCARkPg5NjSUvufsWfTdoFSA5nqrgtwqdp3Q8tGYwMf",
  "key32": "3zuTe47EVJLo25KDihHQzaVYCukzE7USg4sJMH9EfPynX7MdZVexTkqFsp9YniqRyNQCQX2T29j8m3otEev6Vf7",
  "key33": "42gN5KcoyfrCFbWcWhvMS9G6UeimEsTSyWPiEhaYKGNAn22ao2iz9uyurh12sbpCy4bLRfd6tfJUbgVaUPP8ntjz",
  "key34": "4XFhqFMSamJp1VSQpvz6vhXyzCvY7ayzE3cnDDpHFaNe2qEYGN9A1AC3vKpfFz46SrFqJcyUvvF2YJi8pphrLGuX",
  "key35": "4Pdkz8YZvGtRvWaz4ByrrAesVruvYQQimBf6FfJP6hZVNdXo6vA8gxDx8Lhpv8GrztkNHSLtPoPqGguaumPK8w9T",
  "key36": "3hofiAhKS5VfvCuQ8Cj7xLjJRW6bFWwS6vbQ7bTBzo7i8SGqjXbG4Ba3A8tXW61FTt658BSe6VXVgfBnLu2C27JJ",
  "key37": "45JiLzbRMR1qdnc1D1mx94FKbUg7Ti52ggZ2vVefUfdGwc7idLnKUjjQ2kAnk1Znkp7WQ6b8AsBHfZNHGzRxZZ8x",
  "key38": "4q5FjgMgBDzt9zSKmbGX5B7AgMfiRveRJL8FnciuyEVsP8PQZvkeWf2FKTqYEJyyQZEaoJDNh9wnJHSJAHNmWcPx",
  "key39": "3PZhwkurQEvYc3dPm28AnnxCmomPzfEktUzTtbsu4bpATB1c819wApziVQDyBTjhfCtveVwkZLhWyzNibKmBjeC8",
  "key40": "2TYapaubXWiiKnLkXarMrM1r8Ny2BQnPu5DC2yUhDwRQgtDghJiCgumc9KkJQccJLPVuHeTpN7wJgjQVcg4jJGm1",
  "key41": "44feaVq2GyWbwBsiCMLMpM7rUbPhp3Z2jQGAfAi9Vdueo8vVPkqhU6dAg3v92m7pfYJjXkJV9GrzuKPrqLhRCC38"
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
