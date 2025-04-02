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
    "5gGXUt8x8ntnogKhEaFGtFuCvTkMA4woaStawYLfFW3K2PF9gzJuV9e2qhNuWSKzpGX21x46ZkhStGQS2miosNYy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8bKYge1JVeMnt7cNTcqKJvirapEzPWdEghE5x3iZPoz4gPMP8bskFebcNmGDysCfZpKxghXUQHGmvCVKBzmZ3e",
  "key1": "3tyeyp39Sa5adCJkdpL7D9VLkyeUpTUabCfH2isFXtZbt84fU9kZCcQtLN6dSMtvvNZrh9o7VAwa7j2PmRxHvv4N",
  "key2": "2JgBwWkcKocq45VEBrgbAbi18DDhEddBfWZmTMfNhtWHwsKqm3Uotz9nWwuym2vKXriT3b79t4212je3aBy2h9c4",
  "key3": "28EbQdwXJcWG3SdGv6i6NfqXg6aS4pU69AQ6pw71KQK72LbJZciK37qNpF2EvCPFLC8HHtUhdMrUsHgx3cTQEctf",
  "key4": "5aHfTqHmt77fNxDtW2dZzQ5z4DAvz8F7tZa93sBtxKNZYyT9MLNw3gUCgkXKJ6FdqJLgy6hHfNTh11LHZNaNLeQX",
  "key5": "3UCRvuR3gzhpW5JxvnxNu6coyuxE53LjqBFZ4xegQo1iF1gFUPznSKVjhwcPBsPFiDabUc2FSR4ocnTbZyNf1xK",
  "key6": "5WomZwRxnCKWFKowGmocF7ASRm3PQnvmxN6GVJTMoSKhSawHDUKVWYfNXVuxaRakmUXH8Z3jpMBJsEUSyVzmp8q1",
  "key7": "52pSh3fhi4vTufXzxcC6x4fTxyTgBhw1cGwj5ViQjnY4BDKHw52LuPE2uK278mX6G6kdiT5WwuD9oJ43BdBayLzR",
  "key8": "DPb3DwQgGFDQC9Uce632Z691oyCHW6Mox5KzGChzRUmr5f3sHFDPrwxGfoiX65KSt6AL44LBUXHiSVyLrh9AkjG",
  "key9": "h86zhSHuDPyVRAqvVKzP7zpjNmVLxfkr4uu2djff3irQtc8gdgdguEXcuoz6ELsintGWB1NRb5KpDYezTbQCZbd",
  "key10": "2NnHGUNGYM8r4eFGj7pSpDqQNrGLCGtXJ9NxFL9oxtWMVV5cvJuWgzWt9f8zfVKh2KSxa3a3wYe7eWN6b2c3iM2R",
  "key11": "2LNjwHxZwAcPBDMCqNbeaFMhpMNSdETyU2zhwRr4SXHpVBwaU9WWVNKiuznyQ7BwywQxfrUUXp6Qc9JcxphfxNF7",
  "key12": "QV1r5atWEsx3cJScYQ2Ab2tJ5Ttj8dKvy95K5smKLsCkp5Y9FFXC2TXAvqKmWZGLYmq4iFftimR3VrtgyKkBqjn",
  "key13": "3ZYAQfBcgja2JLt92of4Gqb1cSzvbBMfVcT2q9sRzmSq12AxG1tvRtxutpdj4A1drRjQFaWLSrbJvscVtMZG3KFF",
  "key14": "3jhEcqpEXCYiScHAVdP8eTJ58FTFKETf429zXKCLZkZu2wDmXUqXFss4AWNTd9daBGd1XogvkAHXAnew8RRNUjzp",
  "key15": "5ekCcm1n1tcEMBT9JQLZiKqupq3rK1JeZhB2nKZH9d2hNp4r3tKBNvPjibgrAPT2r19vXwK6NmAFTLQcTGpGhkMp",
  "key16": "3KDDVxF4rpfUbaxHCdxnKhK6nNMpV92KhZ2PcY6knoTHkVYcCkv3kWfRU36cgwhd1S35funLyHAMaZL8K1rpk7Hv",
  "key17": "5WKYFn3EfPu4RU2bwTYVUb4GzKzkKeQvhQR7RoW5S9XtwavrGaQJwdCE1RxftRk1xy8yiZ9CXMJHnkN7E6WvsEuo",
  "key18": "2nPGH7NGg4S5BBBqKjefwS1AcmGwYm8EzWk5d9HKZ7KQtCnCjZHWSpRZ6gsn9Bddnb4FHKYyWZ8pG3guohFDJLwN",
  "key19": "2py6vYJGv2ZGzHk6WbRbTysR7ubKmGD4Wt8Vn2H8Rjfp42oSHU9hzZWmYJmte2JrEopoK1YNmAHA9FTLWZ88fTQz",
  "key20": "4hqApPMabPBmdgkMqoSsRJcFmwtxi6A18RgDtHgo78TRLVSEGm1cJwmuvwg8dA2B1eSpaATjzABx3Tm1akmCugxg",
  "key21": "5CXRDKHMxQVyQHDbZKnrMTJJ16ZxHNz373hXuaW7eqpuWWG1UJDdYBt9ddF6k1of5qb8dFPmANEn17zAJpwXWmMi",
  "key22": "5i3rPSfi7ZRxTsw7DZEndonqp6cFD51WQXHuEUzy3NcaQ7o2axgVhZhTzmnh6dLvqoyUNiHEVgVxfAB6jn3zdt4J",
  "key23": "4tX58j5yGeQwdWKxpCMG3FCSS4eEnCvHHmjRLjn2ogdbxzLKGxV2y9skc18mTetHAyMjtCzXxz6dqCRgSKWiDZ9G",
  "key24": "2GXVk1PVqR1B2qxUA2RCXuk3missh83ZitWGzqhFyMVnfHtLoaF4vKt3y8qHn7H1D11qSD3dsXyRRjFYQR9wjebC",
  "key25": "q7sGrvYe4jD9aRWsiEcv1z1pLDn2R6NnMKBC63WvsEmMZrtQz9fszX4FzCkvNr6JzFem1ePJEFW32L9ekhCuYku",
  "key26": "2ATJ8ZGomEgru6xy3R723FTYxKGbPagAvu6wCLg2obsT6PMAgzKpzrQpWf9KBhx4TpNMqUN7DmnKXo75uKhzf8aM",
  "key27": "jyQsusZ7MH5QYPrgkLYArBXgBtVUagibLQLwNdBB8GfBD2NpsHiZtv4mR8qAXbiNi1LXRqJaTwqoeZV6QbtWkWz",
  "key28": "2kfnJKnoDoiaBhDg5BVmjWFCNrRJN5TuHPTNACAr7d6gfQMvd4zrW33rPxK9KiJUMQGUtGSbtjGTDwfZYWecyftT",
  "key29": "3ZMw5eaSCvvmqWZJUJJF1H7HUPkTRDih9NFTgKYz31kH4vszWYWqWYybq7v5tRSM27zg846wCmwyBzfkpju7wLe3",
  "key30": "5N1sCFbPngYtRn4cJw2cfs9aprZr54aUwZkGm7TsdWMLdkg4h6EAByAmMDGnphGXHYs7CnABmdSwkzq2NaGSgWtX",
  "key31": "5gxFfH1vLDeSrT2vnMrupgnHudRbGJ6vx236RkWc9Lu1n6i13uhzzthtcY5tvUe2TJMpejQYxi52F88cqRisHvzY",
  "key32": "5ijrC4cXXaor1gzwsfjFKBcA8U9CC6FRsKs1Pyt5kPaX7P1zBpKYB9k47AGWpgBSb6FzfPv7Bpr6xHTKkbkzyArC",
  "key33": "2JZB8FCCQT9XTDRyqdsWMWHVeu9Bna9bf2qdQLFxU8LRwRMwbCJq2Ykt4T8ayXVJdd9BoioV13GfLJFG2p7WhcW1",
  "key34": "29ix4guVVGK2EZX1cmcpPUS6DfPpLVtyKvKSYkM2vpsbA8DkouuBioVJx156EZa1owzVBdWdCGzp1exqnmGFHxRN",
  "key35": "ZSG1B3dsEtVugZtCWwLbEJRtExSgZssg81arFA7RDPeb97S6hhMXGhS7B8k7LUokCdMqJCyD52c37SW1h2UY2a3",
  "key36": "2Hz5j4MS9GbEmnHv29msDWMCYoCsYMYFy5S4ENijbM6srmVRRkxC7yGzDwrWb4ZKG4TRvUKauQ2GhzmgevkFNtuM",
  "key37": "3ybu8DFzNfKYZyjCywTPmCVKheWdLDoExXkefCMsAHB7sCrw1NdVrmscchfWejgz1ParJ4mG7uPAXfc1JULkKdYm",
  "key38": "3YxY1kxmCBAytgVnaBaAx36YF6tF67xQDK1BdgSGrj9SiPaCC3dwMtMdAXkfhoPdHvtbbnKmMXq1DVZCzRkuhqmj",
  "key39": "4KCmC62c98JDSRtzgVzQ9FeZRT4wuCUAiDqyco1WDLo8ZNCZsGuRw65jBpdkkSs5X4xoJJpQDPWRGvondnyWGyRL",
  "key40": "3ZY99aECcfdbVUuu7nzPsrVvCyD3cR6LAcVDLDAm3P4MRzk4phGKwKcRA5cG8TG219TsCyN77t6FoNQrXpHGQn1j"
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
