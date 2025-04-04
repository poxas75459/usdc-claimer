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
    "4H4PGMMNY8ezDdVvDK426PX1NmFwuVB9PGFdonhfHVSrUNuMZ1q3G9yBiUnN4DNzF7Z79nCKrpjx8d8HJ6so184e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328VRkzFeZdj44GRXks2TeHzPpoomYc8fEaGHpeCKWxBei3ZwTBcFfB1Pwbzn4WtTZAbYZv2dVF9q3khj3KKmpCF",
  "key1": "5QXBjCh9T4F8RGNV4NT2u5bXRRrNYYeYTh4ZHTHovh1qWzv1Ymb6QqAKaFQhfn3xSowevWk1JyZtmuVNzJc9SVWf",
  "key2": "5HXMbWbqekCz67aj1WoRQKKGxjvY9qoskHp2qbpfcsSGz7i2oRF1WpviorjWFcyygX5bfaf2RD9TjvHtCZdAubnU",
  "key3": "4TXpNy8vHzWCvVp4A9Kf963WYitSQHVT5TLteXW8k8QVimmH3pz8i2y87SYAN9PXcTL5jKa9ZwYDDmqkuGtiiELq",
  "key4": "5eT9u8g7ESHPTsrUvu8uBRkcFaENUZaHRg6RwYGiGLtDtCkDWbmTLNC6PVe5xWFASyrHWsiugrSFooEN852SfQyY",
  "key5": "bNjDjtJkLy13pFVh45UxCEDN9M1hmG5rjKQspcKJJD4GGqnYjpCzzUgTVKB6nd9qYFwowchXiUyfDvAe7kqzGTr",
  "key6": "2Kc5jaV9YX7s9t51qJSj7DbScd2cKfi2sR5bK5FGm4JgByopuArnAjopt5zyUqgeT7NzmdYfATfgRY8b2w2a2sX5",
  "key7": "45CMc9rqo2H7dY5SsYr6MDdovPwA8WgbuX5P6VjKGrHFMJspS5wHPS91wvhc1HjZvNB5UXFqTT5rcJGZw2Nd619C",
  "key8": "2Nc5CYNGcAJbrnN7ZVkony5LcRMucVZGLAgVcPQjcScTn7dATYaud7aDgKy59KmcZqNF327C3yko5iRtF3NbGs9g",
  "key9": "3aMYUEs9KjuW5bEsBs1kWZfbu78qLiUczuXqFWqDgeSYW8FWAzK9a4T4bqnn2AFm27mzaaT3iHjcCZQMR9q7fndV",
  "key10": "4xHceQ5Vste19PxpH86zvhJz4GDgqsneHdxeE2KQ4HV6gBjzTUZ1ndL4uQQ3etiDycUuNs315WV5r8uBurWkZcSQ",
  "key11": "5hJUfoTJZowZNjQ873csoz1HzTgr3TeNpbuYjrTn6cR9TxM1rTuvkGgnRoTbZG62PYLWxn7V8JKqeATrYAag9grW",
  "key12": "JYTD2rbUzH76m5D1FNMyJt8FoZqxjabh7wfs3WhoShdDtTHCMwwuASbFwVa1hmTnPnWEvujPRkhiFyXvJ4SHsCW",
  "key13": "5mX8qqN8f7xezKzEbgwsZoFTXw5f5YceeVGpND7F2j1dLd6QTxaNMFemeKam1TnqBK4XrovNjrTRNmMz7KgjG43m",
  "key14": "38M3z1Tm2mTNW8oNXh6e3hnSysNJtXbeMxVJ3bnpnQMeGHrPNaJdc7SkBSeVzbvjnQMz9yNib6Ziu8vD6b9vNSui",
  "key15": "2s4JrRD9Q7C3JLZ9tewsJp8fg3HPTndpYdeK6G22htHdLdkHX3qmUSUy8R4tZ7GousDt7J1p7E6965utu1Wai2LV",
  "key16": "4KHkcGhedf7DRv7FSNLgr8ZDWJbMvWuEg6YQW9dJuh3C6uin8deppzpoxbXVbjDsj5hxdMvpYCy8AbUp1uXhvLxU",
  "key17": "2a5dwhRCZghSYKb6b8FLpsjKSNq5es8mxARaAgwWKPrs8ZJmBVoJniuC64EhAJKCoaXKzXedKVRr3TBAJs1BhfJd",
  "key18": "4H24xyhf69dNoyS7zKTd44Sxyvz6s4RYNFCgjDdhTioEaYESUqUeTQjnBXm5D2aLuJKjVmA8CEgCWL82ekxh86P7",
  "key19": "2zXauRbV4Tx6azbe6dJZAEbFqvmLbamcjPoC34MpzXvWkkJm66Da18WJbXfLjttXTHXe9LbPmV7grpETeH4zsQCg",
  "key20": "3pUWT4jTfYSmRKkppPqp68tohgDpaGiiwTr55Ck3NK5RP5A7pXh8Va7dW5csc9KXXfzYZLvDRShmMySbVPMaRh9f",
  "key21": "KbiWmqvQMpPjoQH5MM2GEjhnX6MJQPHb3GKgATM9gBNEWzJezyqqG8DMGsPJREsFwU3kSuJWJkpqp4wPEFYeEu8",
  "key22": "3JT8rwXgswbjAgoYmTNoc5SWvnXLCxW7pcFBXXjiEJhHKQgSS7ZeNauGAJCHnycQYymFamN2FQd7mNJJi1mqu5W6",
  "key23": "3tzvvxZ8aDVyeF91Pfm9vrBG28NNDbUG6nyoK7N1e8PJKpx37YMAns9dmhNxZFvBwiB9hvYzLBhhyjDquVMPyafa",
  "key24": "BJaHkoJreUo27hL8rumwWfjBabD6z9zbHK1qBSKQGK8KhCVDLNvazpci2RBRiTiFMQEA989uWc7R4Re8qnxbvbQ",
  "key25": "Y8U35v2EBG2BRkXxPqfDNQaJ67Tmr6DymZGrHW738EpPHm9NCuhyMGk4DTCC2M7pjZeJs57dYkqF6TsPXQLk62W",
  "key26": "2PHLysDnWpGdLqWthgkwvmDHRpLgzWHs3bGoaVSDmrA42hvc58B3VgPM3T3QHBFXVZiif5YhyvC2u4MvK2EFXJme",
  "key27": "3u59G5ZEEnYE6JAkuWpiyVYtCEigYk35uFwZ3CnCaxacc5tFijKspg2eiFs8D7iUqiZB1oFr6SDrkTgf1YBVQVEN",
  "key28": "5im5aKc86fGYXjS85P2RhGrEFrRAKw7hV19anwvzAs137kqnYcnbxEJnXnPWnfPExs22VttE1cHGjZfYjfz7D2JR",
  "key29": "2gBAzAP9wnPuiE6uPMhgQDXhwFSv9DC5Z65sBK6HqXcK7PcHhB4BDcLbzosrLvbEFoYkDMsruproZCxChU9faWcJ",
  "key30": "4TNVa8pvvoaafQaeT82rxaNWdLkGibWx8njuDoZ9m9xBwCafy3TDoPcFWt6S93xP1Yc1kcpaMkS3S6WoZZDrStsn",
  "key31": "5bZfkYqDZdmVGRWg12bUWNJy8fKqJhQsh34snRLNia6zbtFhnL7h7JUXJmwk73CZr4uAuPqvtgk4nodVpuKiZpuU",
  "key32": "2N3WD8iN6NouhyYdZwdPCt2Euzh5wKUwR7RtMn6MSQyEYMd8aAedcXrRaSdzyWQMsRq1quF3YAmkmLbFGQLVr75W",
  "key33": "2yk8n2bAYo7RSeA1SPYPY2ziR9vFXfnK6NqGVyuYDRKbc9hmg2SAsB4CSUP2GZX3qj3ttT9BEpq4m1hQb98WXZSF",
  "key34": "4XTMDMtvYj4K8MY8Mwc4hL8TR426EBS4eFELndFDejNWextmk7t5Nmsx3GyRH782wTGVE4LbgFStp8gx793g1huM",
  "key35": "3nxxGTu8v6sxKAwrfHm6JvR6ro6zV9nmzzE1yTJeFLLp4aTPnng5Pk8KDsRntPBMAr7EkjLCUcRBwCkqQyc8cWr1"
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
