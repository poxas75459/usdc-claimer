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
    "4oFHiyVwcYPYLs4wddio7TMwYC3Lq4J1wjJeAAgntCqgz8c3V3tqMjWtFJfjt9FE3Mdg8Ee4TGEZ9BVJzRy1TST7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xdu9N92i4bphWCQVF8a9khPKfyJpkLzCbGjnKSXgDGAjmxWSLMnbeoonUcRtUx5gdwoMP21W5sJKCbLwgJtdbLS",
  "key1": "4BkBgwNAHcCHEEo6tJHS1stuT6jSbccVMFemiioviyvWeX95xDzvepVUTQXiH3vp3JUwUQBjxvj6MxuP8dZnkzQ3",
  "key2": "31zKv81Xkm2oL7rNhLy344NgBDFDCgpKigtigmxw6tCudLnYWsCeJ8rUFw8cjye4mDi2mw8sZapakTJR8QNWcZZv",
  "key3": "5ehvgGVVoqhp8kgnY5CPNTNfERJ92FdD2HaChVBSCGaGegQoEmG1DeYFKhp1zS2JcsTf5pPwwbtitjzEqGRH7qUY",
  "key4": "5xiJupEawzDG9VAwgMqs7RZuMfMrvcv78GkYJLENSKH8ojjuxNkqrYrrSkZux85vqstVY6rceLLF2CpvmDQo1PcR",
  "key5": "GSChhwmSwYwdBjtgjU5CVYr4THzDUiNZH7UmhtNsUR5KbT2q5pynxdVa68FQiVPCvzHN8Q8sPSC4sGyWtAAufHG",
  "key6": "341tPfS23c79MXTb6Nvcu6ft8Pa16bmHP4sLRtpGfGCq4wQHRgJPf1yuqcwe2zF3PWcTcjVuRU8hSd6r97kVvRWM",
  "key7": "5fD1QCUvHoer4uxwnMi1BjmdhsrBEfH6B12vppg7oo5Fsx6CympW1pnTEue8VSER9td3mcKkUrAau5VVE24cwFTr",
  "key8": "MxKPRWnHdt3qRXCZbSnktCyXMmzP6rf6wAPscKxfaK8YLm6eraNBaWhBGjPWkeUsrGRRy9ZzaUPBByNshoFbSsS",
  "key9": "3VfCMakrsV4Lf91hDPaRsNU6xnKcCcDcSmxAHbxAe38dFcUKUApiK9WgDsHHuGQuP2h3XRew7xqA19tsDHufMFa7",
  "key10": "5CzhCgET5gauDqHwDd1C24i9XxX5Z17hxAGJ67MkG9utRjhMk9PWTZQ2jzmEgvC9rtT639oqmy3utnT6sJvdcCBd",
  "key11": "2YHc3Eds9uNAKS8fBEjbaWSE1PYGNESNxM1UAJoEKjPtG3ukQWHvHQQ42jasTxiFQw3texwqA6VY4t8acDQ8mWWG",
  "key12": "uKu6xuzYNHUuvhGE46Kpy6i5Ej7eLazYWJtQ1YJw9tKMg5BiMJpyE5gxMbn8abo48jNjCc5rUQubVN5hniES5cf",
  "key13": "4S1KAABb6ZnE7QPSsQxE1S5WsW1ydmw2g2tu4iwKZ8D8NecQnobGYQe9bU3YE5ayYP5pJXEcTsjY47xC58qK88PW",
  "key14": "3wHcp7wu8ooPLQVCDPRzSGzbrfCvHpZ6NJ925VNgsMFCWnCznQ2KzCD2Ke5GAK4tjx1Tm1CdB2mB2FR75PfHw4j4",
  "key15": "4La9EorcYLE6NQ9xVjP6vc657jfy9WmNSXj9W991Lwz6FYMw8aDc1RVktuSMNBtXH4cY3yq5pspaTGoKCNmbFxmF",
  "key16": "vufj2FAsme4nmZhARQrenW4zKvuPNYt6FEDDTximhueDi7Ewvt7j4nMw4KMQj3kWbN795b48W3Bebjofrmh5pUz",
  "key17": "3ZLUFQCPLKdKFoLSAjLbBJz4RA2A4wvrhScP4dTMpX1kkNEZCSxMA2uF92eVUNT54Xgu3jDuqvV7ur6B9oXgRQ3H",
  "key18": "3r9Xjy26Suwx7MCmWHKpfTTJiYw6r6KSADohNyyfKWPcHvk1YutYmBCh3oBbtid9JYS6NEausmt44Cs8j4bajYGr",
  "key19": "2j87ZRkdrxrVpT8Z18GjwwCHTBm3aSpU1hZzp1mxCaZfTTu78RQagceuu39sK2QXorYBrdkFgUX3rroHgcNikatJ",
  "key20": "2gSTigGbj36BgSxFsgXjbJYycyEiMT2FaNsdsVJeVBnNCoaKMR5a1CZZt3FivPSLZaWEPXBD1VuAwgNJRPxdPiZ8",
  "key21": "3UuGwVLCnoYNrJ37EE55BdsnUmmMUk48kYq71ynGat9cVrdhZJfazCyXhXCdbP4B4FKqgGFJBvgVXmkQ8yCbySxR",
  "key22": "4tWXDgQGguuLoan2Vz7Bzjw6aJ8psBCxh9L9EwhUZMDudza8QLVDoHungtyqHNhMppxW2CZHpse5g8FaE9kXm1Za",
  "key23": "4DZxvBbfSaFb9kZchUp6adUMgy6WfWPsr9PN3xQ9tExjUmRUpJ1pJhMW7gRhs2DXw14TKtYHdhs2onZTHBnSMBNV",
  "key24": "37Re5BMkhk1b6euk1kzcrSTWt8bqFGMyTbZvJoRR8o4jMZJJXCBJZd8wDd89npiUcHpaAC9caZcGoUJkGURqSRbC",
  "key25": "3ZBEnazobJtfkvZmzB7bH91H9gY74aps4CFssXbhbm5h7MXrkTcBtjezHVxumNLxRAhKqfZwzq1c6mGmkTRm4UZ2",
  "key26": "4YkB78E9Uc1matP22ew9VZVw1RsVH85xmiX1vP7EXc5TsofTS8PX6SakLSy4saPLLQX68A61DemHXT21u1jFqD6r",
  "key27": "49ZmYuRfUxJ5gyJTFpJRh8jC8kzEmVpuYuFPoMyaHkQzHs9EtAY3tcFM65TaYaArfLUFRHshdeCFWFRHf7t3wm8W",
  "key28": "LrP2tWjCkqXSEvd2gtQMBmTQaoqkrnZrjsdhcAjK96onisAJHqB2yzrQXxMGRRkSMPbx46gGbshkLB6DMmoeF6c",
  "key29": "3eFKAvNeJzZg226tf297pdJ2VcheMd48KUQUBKZFy5r3oXGUCfvYf9saAf8XUFqwvKnMVvBcw23xgs5xDXh7Nj6s",
  "key30": "2iKTuWgQGt7JiPuuybjoALPjDsTLXJG5XRUmDcKhhDRtZBXnTyiTPns9KmU1yzDAgs7LJ3DxtTpqsYNN2szqx6ew",
  "key31": "2NLVQbNRaYKpuRF2TDLUpkU3JQnTrny3oEvVW9YRDsMYbBAHUSFUCxMPEwBkTRbzajrPjr25oaMwE6euyVtnduQP",
  "key32": "47VB8GbpcyStdZpjWGg4NmxmWopG8vFvffqnP8uNu5JiekaRQudSzVkMRNcSFKc1i4NSdAj8Cp7S3G3ZM4ReDozk",
  "key33": "2ProYWdRpeAUx2zCKFDFS28ddaVAeW623zgm6WHGi91Z2f8hdbRkZegxgTx8ZU72hUiKc5jprnDKHkbPvBgmLneJ",
  "key34": "PdVwE6dve24uJPNXGcN98gabUHyVsZbCvbpTz7kg68qjZ8hpHyLWun27gRryBD1Q6fULnFmmwE3JJpqm8BptpHE",
  "key35": "cpCswrTL4CUsoTLX4YJShfc5ppbgyVCPECU43GKxZdUeweCsUoUEr9MwsqqAfzmTeeMdmSqZ3UKK9aVg1wZ2jF7",
  "key36": "2k6KqcVdpr7ocrETXztWGvekUCPaJj27Q1fn2jhDRvwRmq5RaTE1kTHt5ktK7SUZET89z2v8EKPshKwdHYJYhDYp",
  "key37": "4pT9iXNjo5k3TkfQxaTuZZGGSq9fWwhu3rqjfmZSWgSLArhyB5KToSE7kPYqkKatkSCLNnPnH65y6MUYx1UYrojM",
  "key38": "3r4MqQ3zLjR6GuHeCXXpVcy7ajcb38T8Uw29gedjb1jMWEbmvffJ6kiNuRFYcpHatqTND1NzUFQNqpX55uzoq6TJ",
  "key39": "5z86jnXH296ea4iSmdMuKgGQmmHQ9shVRhvLC9cvgN872zgrPmnLc7LG4Fd5Cnm9FHMTCkabog4qDwE3zWHpTD8z",
  "key40": "2zTFADyUQe5y3CjJ1SX45Wjwp36zDZw4wefUnjSyF7r7XNM6WKjbnR4G3UFftst9K3oxuDrwGWjcWhdwqjV6CUtm",
  "key41": "2zwjNCgmytpUTFCapz9hRgHrUVc8WyQuyV3RDTY9tRQPeo35ULnEARVegsJS939BHGpqR8cgreKdwbL9f6dcThJV"
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
