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
    "5pRyG4QwwajwNV8ZfxsDJWULJw4P7Nb8e8xEdVu648wLJUX2KjkJGpdmDeqckM6mkbxWDGF9shurBxnYrYaSfz8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44g5oiQ18X4MxHP2yYL1jEF2jcrzLH2GrWv51znv9xAGugjJdwrnuBjQmosQhktoL7FqQyMvjjzNmaZuq1GT63au",
  "key1": "4DABcsWRp35s65ap2NsBYrFZ3qHFST9EPL6CiWsxxsKMK3AU1KLNNnusGwMZAZZ1Ec5bvSH9RJ3GYR6TxwU8ofsd",
  "key2": "eVpKPEYhxFrPrfaajSTRji4Ma9CiUygZsdxe8RmgCqwdAeN1soNrDDhv6nPwr6axuQMEfgdhsypU4qV67JXUp4h",
  "key3": "26CqNaiRzWuNhDVQAhCqRovJ4kDgvpbRVh4Y7eyN6TwcdaMEYxx77dNLgHM4C3SbduCZW6jUwWXk9qCeBQ5WQZbK",
  "key4": "3FQhFf4YD2fr8nVedxbbf9PHDg99fv7n2ubsZb889uQMJBhAZBebMHm95Qus964W5GnsoGDgwx4S5AreAKap3KUx",
  "key5": "zPgsotFaVPU2D3rRNg4sSNEVrymDjx2nNL836TdBsLbkZ8nAvMRqjCyBhGXMusLs5sQm6jNARvfNzwgjWkk8UDY",
  "key6": "3QfgXXUtdJTmbPVd18UhzTJwPzfHxmVZpYgnC6WebdLHWuKEpztzPaxGemqBn8EAyG5ktySVn1KMexNZ6Hy9V2ot",
  "key7": "4SEbTBpWf4VF1Nkjp1UwanqscTZBtKLAUGgQ2CogBA8Yg9RVV3M9jzqEjB2jybcJV2sVybyQW6Z88XnfBJyMKUAx",
  "key8": "3qZqP2f1hVafzMYqAxAqFWKckdW55nPSeDu5151nyHwEUdeiqqyM61Zto3UQTWydViwxgGS28jQ73s7qaTeMp6QD",
  "key9": "NBsxUpXCHNr89NCeWeXWsbRmCo6cUr5461zmH9Da4NzPmupk7RpPkJAiLRn5twvL68isLj6AWW4JmxM4t8wqxTw",
  "key10": "34DFhbAgjaDdpbRAtqvncvQasYXPARpf4tLhWqkWEpyFyGzYvA2Hd5qnGPCsBE4PEgvUiBvsq6NnheG7iEGaNAzr",
  "key11": "5VHywuzQhpqYezu4vTWVkGhbYrXap2eMfaFe6jH2mgtY7m5BBuxbG3z879FHQjGwT7gup5WRcr7FWqU53Yq6AgqB",
  "key12": "4wZSvKtTgqVjfnTXTVzTs1bZ3VzHMsSe9psY4DDpJ8jEzL5oHZ8GD8dJ9KGEHAWKyKBppFqREfRsFaxLQvK9iaWC",
  "key13": "2XQQdX4VAEUZW61gh7izg5rbdVwfmpZE8QgUNubRJWsgRKt2R79t1tzpXnBchzkoHRSd8qe1imFxCJn8KmKtEYdB",
  "key14": "2B8doa3zprZqYKGUFzmqYRWZ3Rjs6EZ5GXxfDMJjBHb1wXoYdqTcveAAS3SyFVMpQ5jgr3kxe25jUBHpp5z1Ub63",
  "key15": "2mSuFhTdr7NEiKwae7jEoi5HKpqPGTkvYecqoWQZyqx31rBzT4R7jX62etbfyWdNNUguA62goUSD1bLVzXPCSH94",
  "key16": "3ap1VzzPFvB38ofKhoLG5iDqzfF9xYRUNdb59sspzusp4ASoULezMvtfQtCBtjCvYt6mBb6PTkNouwJvrVUNkpAn",
  "key17": "5K7xfhzQ5Fub5JoeJCSA2T3EExVbkfqYJxdLy6bmLyDuGQbKZX2dGnLMdhCSdUTV3QdYiwfhhwNqD7CunMLdAmv5",
  "key18": "4PXkAAc2qy1hMvTiyaeBAKjjWfJjs34T6YHQPL5ifoWiWSPKXgiA3z36TvfLw3Mkr6M95uH112enETMhtih4dvam",
  "key19": "5PcFnPVYQDtFjaJeKccPPRttFAHVL8L6Sw6yCQWho1PZPkjezzqk6qSsUA5gRcFeJp5RB82ETDSnRuZZKnPFRfZH",
  "key20": "SLQudmZ7TY5p4K8UjJ6Sr1RBSAcEWbr6oFia2tR2qkoM1riscZr6CZD6ShVVN4QVeoU5CGVQKx5StVXy8nrRyrw",
  "key21": "5uYNMw9AnKTaQyLCg7jLdjWasSnbLkPJh5tnSr8at5CU2rc748kirex7MGxrB1oxnEcYythht7CY2QZG7xApM8QC",
  "key22": "zegtQRh2pAL9AXQX2EnaaMfYSxnXpEsj9ojrQxiSf5UVpDy5Zmm8tTVXzcoy79pFuSoS9Z936yezceQduyrCtVa",
  "key23": "499tPb7bgyUs8tLsJFMrS8ySiBbMnXWVjCY2DE4BXp4mtJaHQEtmjY1aG5NyZUtVQKU4LmjhjxQJAvg13gYkFxdR",
  "key24": "5TBZy7Gys4xz6g4P3pGwsWN5masaAvkP6Jx748b8Yb2MHJYaaAff14ccJgAsQPNMbzv2H4UE32DtdvRptTe3rRLF",
  "key25": "5paDaDDM4pYum4w5ZBd4zS36FQoYhMTxorgg4uJKcy3xyRgzCXKqju37agkEjxach6ecKRLK3MnvoxYKW8THzMhv",
  "key26": "riz2qwapKbaES17kJ1AjFF2DbeAwKfEd8miexUFREvE73GwbxWZTCLrJZ3YUTNoGVhLN3n5rzWx6RieKwVvfzPS",
  "key27": "3X3ykZWTLPnVSbtHj2dAYUeeajdf9sNKBjXpCcjvjeL6EDpBGDE1GEVcX4fQ7t2cPxz4TRSmjP4kJh6PsixAjCNK",
  "key28": "4HjgDmxZbg59Np1TrzfcxhXTJFpqGDgSkJEZDSBN4GQvuADc5DH57Gqe928wBoBg6sqDf2FSZ295LsZv8371mc48",
  "key29": "PHTe2543eAER86S7txc2vjf8cGWqsaGMMbSvTm5RuVXZXKv5uf3AztKWvtKPm9hLM9hdBGfEofF1qiyUjekuyAw",
  "key30": "4atnqKNw1hgXLPKydUzF2pQP8ycjiwMxkzuafXKJw9tdaPdhJrGX2skVSFPM7zj76wYndmMdRPGj3teFYSy5VNex",
  "key31": "ng4TwqcatN6tEbs4MH9F9u7aXx9oDfa6gjsFPw5SCXsQgeheLx6u8zBeFu5Y1PaAwxtyHZwd7yGDKQj1y85dcoP",
  "key32": "4dMhwvjZhb2zMPjVPU8HobfHbaXCvan28bKqkHqoSomUFNgkysymByLK1KxvXMQV3ijYMW4tKiVih6MnUifpXfuF",
  "key33": "nSXkw9TQ1vTA1XjjXjVFXwzeYJ1aFQGqyTry3Cg6rsfYKVcPsfi5YhAYBmjLrUA7otEeEYnZTJbArGdT5meTgyM",
  "key34": "4BFhvNP4VDUsnSkpXayyvyTipC8CQMmxbUoG3D6sLYsRvknNKTbFPtU5s64msmjmj1gk1cqB4ecyjDh3fCbDz2WS",
  "key35": "4v5zkTM8MNAAfA9dSEkgANLLYg1NiwpSoTUnrfRSX1PvgUZpiLgjt6JX6amWWkgVJCFsYiZNHsbTaxnGAMrgJ9w5",
  "key36": "3YYNZc9R8BGeuomMC497E3pSw6gASxeaqid7qHDd5MMYmUqsNPnenrsZNQJ4EuRfYNRvHBWsEivgnpRzMX8VQfKV",
  "key37": "5eAxQxuWwoufEXiDYToyzCeufmHGT5ZiWMxjX9SR2J8fe9BCbxRwHKDd5tSa2ew1kvPm62VtkWBDphPkMBMLrbDv",
  "key38": "tWeNF85kQ7Nd58bcZgL6Yyksh52KuLoecH73JBCGvXqj8NmixKmFX73WnJYVWk4rUHkDYNsLAZ5J52g8azi8nP5",
  "key39": "2fb2SfFrDtooGTsHDjfXnJgU7hRFzryPzUtaBNcyEo4NRP68nu4HU9uqFRh9iMGj6xEeuFnqg4wA8zjU5csaaxAp",
  "key40": "61zgYbTPRcCtc3bG1JVeSwrrubBjPVEovyriUSVXDDV18W4rr7MYka6BvmviStChMQ3sRpgU9nfKnSdBbnHGibFY",
  "key41": "2khDsUm3XgMjEQhMRt4djXsCtbxeVDvBajBnjWK3i4VgCDynJdXbCMLyc2awm3QsXR5gnZUW9X3ecyPcYFA2g8n5",
  "key42": "5yc5KCRwRs1j2dCoBxA38CrRNVWtCQPV3ovEKmvk9MRkyj25X3Wma6QtuKwY9JoS1AnGFtQiSyBNoXnZzNC7qBQ3",
  "key43": "49QS8vffmrEPbZYzN8hWU5u7Q5zNPYmC4gieuV8Msm42aWuXYYXY6kYoiEkLpbQR7CvgSkDq5RmcdudeemTUgTMs"
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
