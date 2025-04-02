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
    "3L3ay75P2kRCViC3V32HDYMvDTofNH6mrj8b413Si98jNKQ6ywcXC92Bh38GbsUds3T7hHWyC3XqvXCDWBrvT6cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y3CEwEWESB7tiqN8dhJnEThdm72BaFcB2ktkWVZEtTUbLJUZXYxuAhZxfQ1772vc8sZz5GzH7BT7Pp1MvDkD5Nq",
  "key1": "VNnGWArkdMVB69HQBvV8u9go5t7rWtV4MqDmHz5a1SKqZGjGuv2ZNgm4EEG4giHRmDbEb12ycCFSAdtmUGiV341",
  "key2": "4Pwowqio92rwXVSHEcXwqtg45zd9ATa9boMzLGCGgVEvoQJpSsa8MAXaqqDrtt5fMveBkdQ3uMiLGhyHKREKQqwg",
  "key3": "McvnDpnDad3gik1gg8wFQ3VggvFe7DmR5pgQTwmbgRU9TnMk7h8n32udCDpLxo3epL1UmRLQP2Y5om2sjqXwL1R",
  "key4": "4PfF3d99PoiXzUSRgFUu4yzF4fckAQKUJyN5ahJDWZouGfkP5CccJtc71CbkZcmQmFLZQWfs5x4YJRZS8scUozM5",
  "key5": "2mVCfhRbFByfgHgnSjQcYGUwRVLSgCjgKGtbTNksMGSDwW3JmyxViTDCvm4rCh2p1Md2HBpL6FKovLtJ8Dxy39Q7",
  "key6": "4P73k9D3ejwyyooX95UL8Yuzrvcic95Yykk2LuzGJNY6d6k3PtXFegZ1y1L9bKCUtdsmWCpe7MLzycDsanXxUhGD",
  "key7": "5vgms7syrKuBt3f8gpAtjNycEuqR96tPr4BfCjmT8kdkSsswMYFHkFLsaAMfESabUZVNbfAf266fVEP7gnN6x9K8",
  "key8": "51rpAn2fSVLXyeapkMg1GQ4MUEeS68WoBkHwaa3pab75vd3Rs9Zf5XbtBqsGZGcJjSqvtDx2XsZsviNiit1XBL9",
  "key9": "GbNJVk4ai5NUQEdthT9jEt3vj8qK3Skm1sLr8KQD6gfMWH9NhvYAQBdZUDpFGPQ5nq4nFqj5Mdzh6eGPbMF41eD",
  "key10": "3WU3bWRpxadsvmNHND5mQnjYa8RVvLpdFDMesUDjeQKBWqFnfmbko9JLpsgwhiLQzg1pgTPyDG1cuXduBj264oq4",
  "key11": "5oayvd462JLYEbtQcReuouChWQyn6o5RxwGfo2zno1CTLoiBGyXakQfhkHc7WVtTPFFjEQEXyuvxmy8fRfN58tEj",
  "key12": "5w2evdGSe7jMe2yz1sdq2jhWzjSYzM2N2x434JsprvRMnCgym8cFZgnTmcAEsg2wj5G1LuiLejGqnatWzZk98EUU",
  "key13": "3S4Dqw1FrMzJoUWcRVZZqfdRdHC6kuCC1n5dABq98ViiRnq1TcPuTy9LtDzT53QLFnEuCMtzfmyrs1VSojU9iVdG",
  "key14": "4NoJCFRx51FyosWnewSCj5v8Ga3Cee31aYEzJph4dnB8hQzFjnNC8ezBDPWwHbkMmRcKgELuc3KxoCW1tyyztaCJ",
  "key15": "24yh8GPcyaFZEXB8zeKeCGa8a8zsjExSpTTujKkJ91CYEKjhxCFnQ7HagV68tCxgXb3QUMBfNdDzbVYZwD2goxNx",
  "key16": "Sk9q5GKgfDEkLStayr5QZ1Zh2eVNxqzUnpHJ88diXwW7NaB5Hh6HGCwVrYg7x1LagNK63A5wFyvpnbTKbtZ3p9Z",
  "key17": "5eohJYSUgoKPrhGUhFNoqjBAcbuNG38LXxbxmMjiVcL2RTi8HMr7zcWPEV18BL7gBQzqq3MbZhLuKsBEt5WL4EMC",
  "key18": "51kMFTq7ibKzsT1tEbohwYe5v6HBWwP1W9utWtfeNRYxxEJkpbkF42zj1b9FcEo1E3eKwLs7UxJydiVYapDHsNRK",
  "key19": "4mqqMKmFWupu1DSP4mfPuZQn8nvyPLLKy316fRXyprX5hcvxaYFMAQrvAC8V2JSpnqLjwYa9U9ZLyEXiFCNADaUs",
  "key20": "5z3Y1fuXHMsY8WppBmGeBUqPzu9t3Gd5ApHrXuwvw6ctGzgAGnJE5r1cAX83RWr2Q3EZUZejbHrPLvft8uNUwx9n",
  "key21": "5ZpnTtvML4XQ4aWBXuHAPgGTX4tjqUp5UXp5dfK5wgsPksF9mV26QzruheKUywyPPcGtGAKWaytggjojW7UG1nBk",
  "key22": "2f2wmkEUxyZZdV5v9RnhRTTc7JydLge3BiDptYppHKRyvvAd8fr9kMNcip1sj4ZmsfHpSRXJMfyVgekxWzUr32tK",
  "key23": "Rm356XkZ6mRhnKt8ygRT8fgbabjz6kCwCDmqvC1KMhC65S2TqnpJq5yzBT6RGrAQ6vmTJsdS2HJUTdaTqGxjfhT",
  "key24": "4vqtjN2ZSNkUSeryRuctSYj4fZCffTR3oWz19Lu8EeK72v73YyTxQG2zkBGwobyuJcYZRGHK8XN7UGgRquKVfNad",
  "key25": "66aMFzKkYrgTiy8VtJGYaq9Le4gZwsGUK3YxWGZA9UCVMKG52cJhY946NmPg7jiExiaLFUHNEz4aB9k8bSYt8Vq2",
  "key26": "54Ci89dNSAhvJ3kdewt6nDVku3e7JaszopHuLVUkHyEj5k9iLj2uCrz3AjRiDBhetNxbB3TxtwQdzHAsMWaeV4oB",
  "key27": "HMuanCU8hYV4WnU3TMcbqUf6ZGQvtguTuaGQZnitDCLC5CG2oLvkgeGniybgUBK7D2R8wGLazi4r1UsBg3FGieZ",
  "key28": "RhZDnuCz7QoWt7GDcyP9oPsv2JAifpxTG6Ecwca3xp3T4rEu986JfQ2Wo75tLBdXyNVkPzah6hyLj6SuxxcX62z",
  "key29": "3etZpTpf8sLUGXgwcdXZRuyRTnVKPebNHvHz6E8fXqtnqQUEVcxwe7rcXCDkeXWHy6AHSgxMCrJUPNbBboRRSY9b",
  "key30": "22dXh3xBSZuVCdDs2uxt1kZaKkBuFzKg2vATcM1gHeXx1hGCr2frxBMehU7PHYrzdHusKSa5bwjKpkAuFvCwfVPY",
  "key31": "65cwK34FPTu4ZwqVKssGuwAXBBjzgbQCfQ63wJCrLcXVTQi6sLVfgwsXsBhRwyeLEVzzbYZyt3yeDytog3jRLL7",
  "key32": "2BsAcWJdHWcvvFKKAuY3jpG9voVhTEnhG2gcmmqQwHKvZseYHzSmbyYnxUZkTAHsPrXuPwBfYcpUzLytRmiZEcnM",
  "key33": "3Pb82LsqYFdyKFDxVtmp8jfFVdFg2sUmowKJbytoBZTU3K2UUzsf7jJnQk6M19wa2wop1zPRAyV1wXV71xZwi1KZ",
  "key34": "3nYGgvoTEPD7kTa6oLYt8srqp67wKMDZLfdKUahUPTc2NSSB3L7oFnR9rEGWf9Lsys95snBG6TxsbDTnmyumHQMp",
  "key35": "4SyJ2a96YkuRqnbMLb3PMdAVc9h9xLoxFE89q5rdwcmm8C2PTQE27Zc1exLXo1FE2bEnbqdX3eoAomhA3whLPCLc",
  "key36": "5zXUAjvjuRk6ZgLTMVDLaUrdqjhVkmYXQdJWnZupinwQWyo9V1Yey1dE7inYWvEGgpZA1C9hyBfv8XEuyja55qiD",
  "key37": "3x6hBGRYPGsd3BHZmnUCFvij9213tydwMoRNoEMw4dinPv9mftKP6fWMAMS2yXbhBuLVbucRT863UKAkvhuKJ7pW",
  "key38": "2wuG9eJDL1Wjp75YTSEFPhpQcNY1hJLuL49riCu8fwh4vSngeNF5kvmQ3qG64NpMcSq3PKxELgaDq5myN9L8aLBL",
  "key39": "5KNUKT1TrCMfXSduzeMzh84skuKzxYMfCZCt6ZG5bsVsCAoyXiC3H1VUb4BGNt5nyny3ZsGig3GZB1RZgEZmanQa",
  "key40": "4ueZ3mXuKjP9Ab6wWivUpNyzFYBSMm8KeWX83TFqf9fqq1TCidiZNtbSKQrhsfxbTJ4Dp7dUAUC4WsHxr3TXXaUV",
  "key41": "4fwmzCWk3HB5bY19EVeuNNPu3aUi4tTfuDCKz8vuc7zTwTV5mPsss3aW85d7WYARTx3wdweGU1EvfeErZ3LCRxFo",
  "key42": "2cA5aU4EoXCfFnzuuuuHyebrURPvFUa1mYwzehx1gVXSQ8QSfjapPaYjD7d75r1vuH1uammu2M99i2kwy9Qt16mG"
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
