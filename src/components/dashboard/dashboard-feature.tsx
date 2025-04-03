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
    "474YFSbN3TtQDMUC55ZQe9da9ZstUZVbYRsu2QbhjGwXJa9XLfteWDyfdd1WC2TXiMiQURptH3Wz4iUxUEACXf2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "578PALznbfLahFRY2rd8f77PpkWcm9nNb5PNmroWCb9v64uS4yn28GiTkaqDCJfG6BjgqE2d4XztRPMprj9tPYn6",
  "key1": "cEGpQZZRXqFJB5NBGhyhvaWy2zumJwWd1wG2cHY5eBBxEUSixGfMMPzkHShy8M7nfiKWsY3yKjG9db7oe87bngu",
  "key2": "5pb7MdgfAtEMyUCyCjvob6fTBvZfRvyNLzQyrfmgQ7gbVojGytL891N4mCkL6G1tagdymAgjfwKJAW2tYn9QWVFz",
  "key3": "5b3NbyhUiAN4adkr3gnjBe4LuNL8LDGA93o29ybBucFnY26QGw4R7wHWhYHB6eqyHgdFtXHZp7Az4CAsSfpA8eZw",
  "key4": "2ngDCN3Vpvuie5tnWpTr9LgNQuQCRBPwxBgBGBCj5DqHXhffi9hTXwyk4AiwWxs2UJFRM35488sRbduQhMg5ha1C",
  "key5": "3RdUNdek2bNkT514MBuyFveFSMzjnGbXBT4hhnfrxRG6HSjiXLzjEpiCUTxB8GXCSRkMEuzpRrgkFhxE52F34y1K",
  "key6": "sRUgpuJLQyMCcQ9V98evf9wepvLhcsSHi3fM5ps6gwuCBZviux9D8C5KptcagPK7xiVzCxsowNd6a2LRqHNSZXd",
  "key7": "5pickti4bfT1M4JAtdsioSZXXcLYimccw6HiJYKjHcGATaBG7XqZsSqS6TaXazPxXGWAbHU2pXV5tpdZBRx1SuKR",
  "key8": "4HCkm9LUPWLWN3MugAoQnWj6mu2sfiwZ4kCwiqtwcByWqzgVhQSaVeKh3hFa64sgRRpTdKf7tLANEb3Eh8Rod3HE",
  "key9": "62pBCGNcLCafukJSp3PFjnnojvPgSZCMdJidZNNZMVHZ3XmUgb63XJhHdr3A23ogb1YE8VGm6v3RE2FVvPGJcRZP",
  "key10": "4YL4wGPE63ttB6tSP5ygt36ANwMiuwwDvhszxFVRsJz63AqUw7CD12Dzw3YSxKKeFB11xLpVCkt2aUMdkvb9cFS9",
  "key11": "5YCgnQQdT3S5oDF19k7uEkpoinijTRemtxeYQxWxssiDezpz9WSXhdcVs8XyVgMqRRAGhEMwXWLCjBYdaSiYuS8v",
  "key12": "FwvqRJTFKmaJH1o69EqR2uff9jLgAu6U5cV9uQRwf59guNLqQhgUo8EVuXDL5mWYYhLZo5JU63cXPMYRa7nzZ7p",
  "key13": "3hWBAUeFQtfeoUrjdjeVGnJBxB1Gr18kEgbWFqCYySzwEghJ7HS87GDnM7jV2HQNrKzrz4UqVQo92WB2nq2NrKk6",
  "key14": "tRMTJhqjBu39aUBEhUmjx4Ec4WB3soyM8rmEHKn7Sg4K7HpfVt8M4Q4KEc4S5h31hGz7yrxGgi6fJ3akpAwD9Js",
  "key15": "4N3XXDeTReTuYjPBT1Uad1qhEa3oGmDvuSRgAQGBg7Yk6BDZ7ix1G3be1NBukNdZdMebUkJ6qvUt1zRpYeKPCxCw",
  "key16": "5hHVUoGT7TiVoSqRw7oCGBcyZ4YozyMKedAkHCEff4PkNXAt3EDqdQfaZGtRczFMgXanH1PT8UFRxPBnwJqFRCNx",
  "key17": "2nuSzXoif2AFCi5wJszdxFNvqWsGtCpioJb9YcDyFuYWqbs15dvBqV3j4j6zUZJppCraByRBR6nTdYznXNNXpU8v",
  "key18": "3kEw9iYFskiEGJMmvZU46FbtQjy2BMN1VJanyoHW3VMsZUksZKC6Wazd4id4wEMir4wd3gNNbfvkBTBsSKFdWrEd",
  "key19": "s2EbBrJgScrUXi97wqAfn1FfLnX1JRvExsb2bdmSGN3cS4EvVZc6yZQqLdbvnVorsUyzRCgG3JjxxVfKCvyZFvK",
  "key20": "3UCH7FW6rSY2EocjNCvNaoLvx1jru8ifREeBghJrzTUoyqVeeVWWZUPrZVcWgYwSBWshj6bX4t7eTkBSYnJSCXDh",
  "key21": "2YrEvgDwyye1SD5taUgSJW9veQXTLy3xj4QL9MEUFNVhy6TcKrskZTHEsiXSgA2kZh5CHGw7TkY5oVUbZwB2JJen",
  "key22": "n9KvuBy9972GGmAr5nG2FFwh5qVR8LTacfYGsWNWyQ8CCjq8bEtqUAvYxQRfX4eQ1SFZPPEPkmTGPeTcFaKuRVo",
  "key23": "2fS1MhVbaMGUTAsVMirWnJ7VL4YfABpNiSzMhVfsVUQQKUcxaNGTHYpAnuKhtPRQ4cXm84EF5d1aXdQkNbYXsEig",
  "key24": "4dSuVJHaAV3dpEftDPBiKJPoewDpCv5LqMRzLVvmhVcuw8B8UQvhJdVaucp1WV4WS1LvrGxcNxWNDspmkcpY3co",
  "key25": "AxwZBr26xwJ6jUmVfttiJQpv59XSH5C6LAMKtsK355JXzmzeuphQiwpXs9Jx3qgZE2HpNRMiAh2PzQfPjZpQZME",
  "key26": "4P7tJzMmfkCqUy26rwhW5uf1jgASducCcoZ74fyry6aqaXb7GyeZYnve4cJK2VDBpuv2tsoa4v5Wp1cijhRbry5Z",
  "key27": "2ChFmwK5njE9CoEeXAK4MLGtw5dURURSS7mdTc62d7kLpKNYfL276vY4AJ6WDTkeBMkd7J3VJejyRue4aZDpRPR2",
  "key28": "2vCfKRcPqVtt5ErwjddFGKeodcut4Anfp1Gvfj6fXC5MrYVPAtS1n4Ybj1mfLBnB969Dje3SHegHWjiPkNjf9P78",
  "key29": "331RbVVWVbLprPV67vSsJFGb6f31FVLjmwm2rFjdhtBZs6smak3AnaD8khWR1oGfFZmRWqzXJmRNguqYnRNx4Vrh",
  "key30": "36cFj5b14eEfYiDztcL3TPsMshi34PHm4awJnBxmNAc3QdvpmFNtRJ2iTzQRN798zZGGpWRMvESwt8ea5pfT6tAb",
  "key31": "4ySm4C7X3aDZScLfc7yHXtjvHFWACUXVzyrHcM3xLLwu4XMNsr3E6CRaGmizDTSf4yF2BvriGUUQxDJLoyXwFiT6",
  "key32": "U6Jxb8a9RamBM8x8dn9b9P6jVMHZAVRCqPz5cdFSB38xmU7fqshkVM8itJj2g6uuWfbUyDWKBaBkiLwmuoFjUf8",
  "key33": "4uFwgUqJ7QyACNHgJnkYUQ4kdV2XfH64c1RaRhjBvEHvyU2kkh2YSRYHrJSRK3LMKG3jcwQ9gy6NXdk7PusWtFsN",
  "key34": "4GSKSeMNrdJULS9ezgqtnDbvHp6yLvzivDghZwuHUnVJavDgs1nYVYf4spyXX7nGk5eACCEd39Ldg6DErhEecsuw",
  "key35": "3G1k9ZSqSDtVb1eep8pcVo2YiNkW3J3MrC4wvRE2iEqtAVjcAVjVfRmR7NgxHQCR6dybtZ8ahxKBrfCoMrP2F6xY",
  "key36": "4Xjp2HDDKH3s8qzAbGVJ9Eoei6bimDYHMck6uP2GBk8YdpPfKumYYxSXxtcyAbvRVghTuVpXCqKDsFjVg48pqg59",
  "key37": "4KB7NS5pGj2xtx8NSiCzXseSiSqASSyiuzprkYHdzAJ7M1s3P4KyKnKeQga4PE2ZvnfTEx7yh9Lzmapy6RqcjvyP"
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
