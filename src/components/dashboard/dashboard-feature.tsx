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
    "5YMB18bWob1LDA9Yrj2NHijXxsu1MNjTi53cpwaZ1QbagLcH6ShvPZWrH4g8mEwYnxxzL9pMwW6pzChuVhohN1mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgDFktVRvjhRmMYfdPnLbVJ9PUoACX2a2iPw1dD4bFnRz7nftSyyHZMjtfUjiNKV89UMY7droqNt3KLuFH92TNr",
  "key1": "2CyuCGFQzDzVdoiAiH18UH9sbXNFMqYBgVvqKrxScGrbn6uBwg8HWU5RoYZrP4v1RZswXnrCDxQNdTe12wpVgCNe",
  "key2": "29GiDNSGKPiZMEghLFPUpMesQkAxJENnYQCtBxdYf4inNMj9c5N81embsQ2JfTHgwsmWWzxM7vqWx64zbhynnu6Z",
  "key3": "4N59C8UTsVq4HuFZApXwiLCrKYkjhWDucGySWVd2Hd7mA1gkxq89LqLYfsXiZmjbvDqsSeMaeLVKqwhLHuWHPbeg",
  "key4": "5FzLhdMSGDWzXwTKLDF8i3L9p5PhPw9EPynAT4xcUHry1FekDsMnc7c6jhLWz9hd3xgxgQf1wUNZQKRdDkznjkBz",
  "key5": "64zebYFuXmStYB9gu4UWeczhnJqvuzCdXiBhSiWh7PameGb81G4caQDdpHFw2QVXLHE7QHtgRKF2UqrfN39o82G2",
  "key6": "3HweKtstKim1kFeACQHyyeBLBUeA6GryMiuDzKSNrFyymgkph5GE9aSm9QpeuDS397B9xA5MLqksQRQ3hu9cZpEr",
  "key7": "5uYJjWpm3RpDdQPiLWfbAgGVYrp625a1icCnderE8bNN8N4Wrb2EJKDjaUEioQD82gMW88YfPWqM5zCHNoedw8Tw",
  "key8": "3cT7AiG8ev67RUiuiUEs7SJon2B9Dnfzh2CdeU2FeWvrK32K8iHn4uWcozgNBmnkezcwgXJeK75MZnwjs3mkpxwy",
  "key9": "4onursx7gwzLnQNium7VEsVEinWdWYzf8fkcYf4XkRcktj2LC9pLRN3uSnNN37xzr52vy4akmVuAoMVpTtTSdkjZ",
  "key10": "eND1uhgCz57MtmBDq4BoA118C3iBMx8kjuXe3XN7AcCzRxkvmNb21JQqYKwKZAhTncb63P5aAPbxfTycPdjvxA7",
  "key11": "4S8JRa4g6U2pwzgAjmC8pADCYEoZx4PCJ6y1MGP674EztQ7pqopsCrrQqCmPJjwMeHr8HZ6vZ8qTqFWHMjAh9BMR",
  "key12": "3XovJpaANgFmTh4dPj9rTFEmCd63R7UNxme4r6ShhjY9nw8boZQBQpe6kVVGAqT5aXNNgq3HQ87R98cn33HKHK4y",
  "key13": "4qcAsyzXmmptEaCjPRsXq7SyfaUHEAa3fsSpPRAPRteVMRnysvZAY3q9L2Lb2emktppfyAYmMVXWhPNwA1YFAUkJ",
  "key14": "3bhobhcRsGDSSUuXxFkED3eoTfyHCjEHnZrzXHsMqzTCei87Vhk1tQMnTnZoYvwXmyo8hMXrKzYsbZmVFTg56vYp",
  "key15": "3gnu5GXpeLiJBwdao2BtUwT4sxmB3JUqiQptShPA9i2eXspa6ufqix3F8BKPdqk8YrGXcqQwjmsVn7CG4FCqF3DR",
  "key16": "2gnQkS6f49QUEygeMQWGoqeacz659QSrKkUGtM9Fjtb53bWJiLh9KSppybZPqdpUyDU42s1Z6CAGjogZMc6YY4n3",
  "key17": "2NcVX7R97CbpWZzLMz4bjcVfpTXqZqGDRo2Zb29LLyTdNoXMNv3DxHBTPuSu2p1wGnm2jndQZPcM3Aybbvby2F6G",
  "key18": "5MvxvqX8Cv7N3FRyhXf8gvjvKCm2vbBEZyGPXnSVveZFurqvVT4ua25YxTXgTqzny6s1W4j8w8wSysqghxeTK27q",
  "key19": "5mkd6Pa563GYEKLwPQiPUbT3w4t7HQ33L22e1DETLubqBMbnWgTMk3GTqRuGpdQvGxdU8QzA46PX6k7TcsapbT53",
  "key20": "4Scv6eMXstB7swTGQzzxYdMbd81yvECzfkFcgCu4zTDG5mVwBoWqZQaMZoe87XQ59mKPLVpfARzRjSy34fzTJyrh",
  "key21": "22ZDxe745H2zTqJXE4NknTaBkdcjE7B5A6jyysBquC1K2HDc4yFsiZM2XNpCtb1zT1mRqCUxU2TjyzhfTgBdJaAM",
  "key22": "4kt61XagkK6rhuuKGqMes5dRJJFB3vDWby5gVpF7JrkwoREVeP5LAhuuZwLywPRPgnivmiVKHEC5qsuPNFE7T1XG",
  "key23": "3mFtH61BSkCdVDhdvAyZCpssDsdB6q9giFbfBY67zeMzgnq4sJ1tfDs6qBLFkABvZJhizTK4qhZEnCeof4Y2eQPT",
  "key24": "46kpHDtCe4sDPvmYHBhuWy4DiBhCoquUbaAxDUB5wWTtQrZ12xkbUcNyzCPdFNMA892yHM8FUd7gr7m51Q52FEkj",
  "key25": "2U2PFdhrnLskC1uV7CdfdcrF4AX7U4d6ea2ETzEGyaJdGA454SSsGhbYSvY89j31UFEF7KFSrseapV7vnUPC8fMf",
  "key26": "3PauLoy5tikHYKYan4dA4rseCi1K59e54VfXtXB1i1eh4DQM9eFdPhhAuy8TtF3j9hJY2Ca7uNU1DxxzZvz6WCeH",
  "key27": "EEsTDzUeEmFAdjcwGrvj4w5gLBwoWjT8VCBZTAFVPd2W2fHDRZMQak5HYJTaqYw6w6BP4YvLNWdTEiN2r4hoGDF",
  "key28": "rZNbMmJ93fgDi2VDaGb189GNJqMkxhsHRELhZ7vAVrLmS2PfFCw53n33X6pAJpgE5Pnu44LB67R7xesAbS9CFoE",
  "key29": "36Nwxm8CZdh2evF3cqk7FF27cnBMcKBp7B77di1whSRHnsh8kcLkJrYCtFYfAXA9E7NG5ZMTyMqV7EZtc5CuNqy8",
  "key30": "3tr2FfT695SQzmKdiDW7w5wr7Hd4qkbeC7MJTNg5bioFEeQDMpK68SHR5hc6dKcRz3R1RTA9Hstj2okQZXr4BNuc",
  "key31": "57CLK3VqdUtwNcKLCPGxXD54vgEk8xS4MYNJneSrvDUkrFZuzM7BNCZfvdtSw6d2tCwqUHhzELSy8a8ehJBt6zNH",
  "key32": "2o6s8ySFtLp2nwWV442PeYazaUgMRkeWkWbNgZWTtAcVdM7aRQTgnCUM2h8stgo27UNDCNQQMFB1yUp2hhBBAB3m",
  "key33": "5RBcjtmD9jdcEKJ9gE1omk8Aq3UuoioSyL4zbfwdBMi6LZEnuRUEABLAD8jZQQDi5TFzBiWR5mMCYoGsmkeftS16",
  "key34": "xesGheDxz7PQwYw47JVjnckN9FM28Pak4DKPs9Fj9nNC1gomEmQJi6jY9z7jsvm4RTETwSJ8qC6kn5ugc6toKdD",
  "key35": "4Q2UFPu5ahtf8Y6eUiRwbUhp3f74f6iKrL7hNvJF8sqsTcfx9JFLZ6TkuJRPQgym31FSfTmrEHuf21Hx9uzfmHoA",
  "key36": "3YNia9Etd8wshFg6XMGJhSZo3qMBXgjC4btKgiSETFDA7C4wX1FZC36nG5PytEL84mXvj9sHe5tBmuQxjNuvC8vm",
  "key37": "5jtD2odvD4ddt7ywwtxUcEMTQT7gncCY63UWpTJKyk6NytsHqo2ZnBbgFVWy7p1Jcqw4E6oAumKz89AqmKofHeRi",
  "key38": "2hVWAt85yXKvCpRg3jW4cz479fjtmAdNFXAXcDiDmVgRf4iZ7Tb1ogHYHtFxgRFSypS19j8scEDZCe3HUEf3Wzgu",
  "key39": "45tgaMUDpsi5dypX6ZJUjryfw3gVWzo1XG6oqQphJK343UQH1XJJAeMAHBCi2xPA7WdhxU7XLJ9Sa8u9MnqfEzo4",
  "key40": "3suBCP2XQBkkXAoUem8MLWYaqmkaXVhtixmrFRw4poypb7LowcQQCvTdBZprmfjqgZRdhP3AexMinBtQh57uWZ4U",
  "key41": "2yeTzLc7ukcE8V7WD568HxDxNU7AWuMDUWW9D3HqHym7TqCRPibRwkr4EiVgdC4mHEJQTNif1cMxW1QTk1HbagoX",
  "key42": "4x3gWdXuYnDurLYERJfPavqMwQgUu2fJsWc46wbnM1KcyAps2m9WW9dLxKaotYrULHnFnAj7ssKagmigpzaZTKqw"
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
