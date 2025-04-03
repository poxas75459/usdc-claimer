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
    "4vcZXLh1voPtMqWV43uNBkAdDpicj9UfX3WsFUBWo7qzKaVmqozZ1gB7g796xPTGRjD33n3xdhaax2Hgwk6uBkbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xkg5UTjxU9hbdR88w1oqo1JVbXrJkj1mERRJL9qbaeUZka6CXgGmhjBGzRQ7QPdMCxqKN6kVBT61wg49QZbYLJP",
  "key1": "3CAEtindqSEbjeucRtRpFaBLmmDSzE91EXAYzDKHgdsJY616R7TMBE3KQCHogbPwn2BcKYfaFvpcArWfqj2R1Vx5",
  "key2": "5zvtFNuqZBDUoN67Ettyfk6xUzVWxpLiNL6LQ8TLFhUdRpWX8fyqmvYfAZq2fhen7NtvSkL12wavwbZga5RXkSUg",
  "key3": "5XMepwMqtsWVqi7ZCv8gGSu4cqtiDdmo1Qf5UHCrSbfc4qtP9wX3i6drJiEk5qK9CMWTUbpWBiDFRFiFEUbGN1T6",
  "key4": "55DC2GCP713teaGes6YFVcEXxHamDfrdaZpMRjEacyuSJ6xMUt9b7xqeBKgrg6FRtKF14mY9XNbMekZahr3QVm4P",
  "key5": "5JZ4jaUeMPHZfDPYoakAzLv1Q6j95xMu6PYwRpd2tPzcAQjxNrNzf1qPQFkahtF3bnRrz6sct8nNJ73tvaSoWAum",
  "key6": "5UPzdxa6NbkfgKrYJgBhgwR37zRFp1bu4ngKvqR8PWT3AxyE6BJxtvcfcEdyvepEEAZDqdgvyFPbCtS1RXUSB8EU",
  "key7": "6NdndYxR4JPYDp5tYRHoUK8GZt3XKsLhJJjjahsVEGiqWZAp3wuEDXfKnSAFSzx5qQTDLFz7fmGV82uhcqSfSW8",
  "key8": "2epvuZw8ozTaTqDST2Ug94Q1kB7gX6j6kgbKK6SxPfxExZb4jmJsFdYkjyzW7kjzxctm61GgwSRA4nm16x4JsgCB",
  "key9": "5qnNGSztzmG1D6hoL7sbi5UHU9BQD3dNNHne4rGYGQNDvRzCeUfzid8WNw23s1bNuvbTpRFdhsjzyVhARtY6YVPT",
  "key10": "8smQEJidGS6f8ehh4TmArX8cWZ2Gsus6RmutEsYWsActDBNSBj8wV7HkgfVhEeg3DibvHhSHoSLhCHV9wKCvYLJ",
  "key11": "2LPhXjt9bdcz9sve7zCA1Np3cADFCpodqkBtjtb3LKp8q2qX8zQBCXdTTv7vanW6hXU6T68KavjidBc1ay99jrtv",
  "key12": "4TiiHSMCmCMu4Tn6cMC4msJUsnpMLGeYpdVF6e5hFPsBQBrYBETGqRx8Q5i2zyBBiE4WDYQK5oPnExYVpcLzNgqZ",
  "key13": "29eHBCf43s39VdKZZNaDMinT7TkZFiurw4GZsSMRMHrtZa9kNPJvRW1AKcaZHjqygT6qsXT1YYTyfmau5A2aa88p",
  "key14": "2LS9pVvZymcaWMyhkDZRgqkXUDTRw8ChiyaMKvgoagnPHwuxekSYUrZMvjpXrvU8J6j9ikn7Yk9SyiRicZbq1dtm",
  "key15": "43nwFx5J6ofG5o1vgwrBkLJJcqzoNNsKg41KkACR8TxEKHwJe8Vhwbt12PapjjFyLQR7kDuDdnr8fBAcuRnE7WmK",
  "key16": "4rZqGY9sNWM3X71UZ2ZyNhLTByFhzAJdxEtWAtLg23rJzNLe73gb1AJbGdMqLckUF1hKFhJn2vCnDwBBLATy17aR",
  "key17": "5WZrUZHKc5h3kS77w9H62FhgX56ETqzHh5dvEomZ2Xm1QYpnwp4Tvd3FUSqr4PGte7krri9kMxHCx8QSTCzXvWTE",
  "key18": "3BgiEMaaSNsTmWtwHBb8BbsCBWLDX5mKPnaWrHjs4ynBLGrQq6cQvieX29P4DhWiYU1srecWbpLRQUj1dWfL1PfR",
  "key19": "5xwEEksaP3CjPjaMeBjVUcbCJVepdDP6tcSp3tvkW2xa1JNdCzdmokoVKbWAiVsb7oMrHHrkNtFSopA6YuSYQv1i",
  "key20": "2MzdYMsFea4JLXeu56wWkryfCAQBRQjUkPbPXC1tBszq8VKv2v5kPAYGUb4SN715XgJeYuAisBYie3hCZhvY3Ztw",
  "key21": "4n6dQUm3w7wYQ8ZQvfw1YQwWgiFzS34PNnSS2h5FQLVgq3Hc7w11dyR7pRzV5DJ2RyURFBTDDo1VCqxKnjWEdk15",
  "key22": "3P7Vx9XRvbaezhgT152xgXvyRdHLMavLRHut593cGG3vb2PMxy3xGL8cwSWtg9536a2HQYqbcRZLXNVZyNrLMnvt",
  "key23": "5UVEb7GTobB4LcRLUDLUHRGwvuFwEhXDQZnFj6K18r6pPwqoFtTyqB6NjQ81aAxBG14zYVzg8umyDPgzJzsgfzXJ",
  "key24": "4SY5zdFV1fm2etdM3jzoT1TVBdmi7u2JjjMdyaHUgnhC3cfoa9nciefvKgWQ4pa1XacWsWmFPchmgs7kTxR95oCZ",
  "key25": "4xw5ksYF5nqoCSnGX9ZoffynNarjQRfYEsjCK3MUVCV2JuCWhRLyShZJPxANQngvrrdTy8LhdD7ZHu22CYRZhGj2",
  "key26": "2isZxoq9rGYWQk9oSZTf5MiJjCJm5pW5EBE7iNaj9DYSZ4bnmKNBZCMWD7bY67FD7b7ifh4FDXgaKBUutzpEk9KE",
  "key27": "4R5rhNBrRX5wgK36B5VbMsBTY8Z7QznEe6LWTXj9ndv8qmZhaVLeQ5UiDY61rVwA2CuTETgCoY9kCwJ6tH4EhgTB",
  "key28": "B6N8kycUzAtjejxZdFiYFEmUMZs1KoPTjMwCo7eGodmsBSsnF1tuTxhPiurUceGJE1qiH5FTSwLs7wH5SiDqaHA",
  "key29": "3ybRz57NsHXBqT1eh6BVpSMSV82uaJrECzCG5ijAU7LhoFWMtssbqmqBhAD2njLdTfA45FwwRS6CfepmEQTgiAzW",
  "key30": "Cv5Lq9Evpo97rTtew6u1oaZ1ogDGrnvmCFh4cYJdHVHzCmZZfSWtp91C84qCW98MAx7vW9FCcy1VMvQa1orDJLu",
  "key31": "23CnkjPrUGYyTaf4BWy2iCbQtckfCsB6cXoWMzk5czYdcAX8An4p59bohstfUsgJTy1ghyDN2eUJNiPD3hRH7BfU",
  "key32": "H1vQoiQxBY6qoM4DxUcydZZ43Z5A9rqhiMSdtXxziwVk3LYaM8TTXSpmybR6MN6ePL58msDMfotPd697b8H5fNw",
  "key33": "q2UQXckr83DzqdL6TcyGWfadk8gx7NhqxNjxmWrnk9wjHU5seMHTLcgCSS33zpkzaovjFGYD2PFuprcH8PgmC22",
  "key34": "28ok6oPdG8afNP7Su3sNo5WTpvygMYfSafScNjEKBRPQzPPfVoEaU7o6m4JeLnWnfYX1272FyRQaMf2LN6ndExUm",
  "key35": "5jjXWx9ZB1CyBZetD9bWtwkSoZyFepyYJGzUcfKfhFqz2xEw7agNYCpxCLaafGUpoVToiaY1HJfNt79abhqqGHQR",
  "key36": "3EugFWH7nuUiug5VpdAoqWPbESfT9VCnnFjtCkXGupD4g3JUbq7YzRWveKeDMSGogtWTJkt7vMUcLsrhbqGWNhHP",
  "key37": "exLiTar2d76oP9MbVe8zscQ1LkhZZbnCCTqcAk7WNFJjDFsEPBmGKCY8zAZvDwqBcCgwmHU8MxWadcdyX7GDPxD"
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
