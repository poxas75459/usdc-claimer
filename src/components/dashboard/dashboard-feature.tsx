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
    "345gEeB3UX7uDEz8oBrcrGeG4rUveTLojHMQjWKnAXUAd4MYzYrqgP6p6w3vqxGLUzaMEHi7gH93TZJ1yn7s6kJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QeyTRvuFpQyrLorAacTavCZvMS8tnycrgVV6PZzCLwu2wb4WuActonC5YTtYgWL5PDNSFr8GspNQVhy2ag8z3i9",
  "key1": "5d62sHQNcb6V1qWVXrWBsW3PUXQUMX8W6qPszg6JguxCxttmsSYmmDUcqc1qpXQzGF2fTDwmDDaXUcNre8R1nRfD",
  "key2": "5Dbcr3Bu2PxvvjpxeQXjPHeYrer4eiNGD1rAxFMWMgDghj1cpB2vNCQhfhhk8uwpSgQTXtmPnXupQ7vWhsyrUjNs",
  "key3": "4ApHV7zMngsYZ3bSH3s6UYL5qTEVK9LGWckK5cd7GTXao28LnMnid2zmbbNNLx7teR7GR9hGxEvWfv3QdWH5Na7J",
  "key4": "5VsXzGeg6WLgXH3YAUei3WkJKM7eErvSdUgMgRYmVDnG21sJ1zbMuRjkCWqHmU4QpEFfE8vw3i4Z3WReL97cxCmH",
  "key5": "3tUTDAvzbDW4RzN1gj4VJHdzS2V8ySd8KfQQkJQgQVFsWJV8sngho4VrkFjicoHvE2Y2wgKzn1AXjc4oyHaRnBoN",
  "key6": "Zm8KkVtfp7ywpY1giEC2xFhgkpKnz9QS38AucQGwhyyB5sARSdpA21K9bWdtmWMuAm67WcP5gh3aftDQXbRZqJN",
  "key7": "5eRrBzToSy7ffGYcKwWcQNmPicyXDp34PL1KLgiAPck524C58x1DePDaj1Q8q5UNpw7NTp1P3pxuPsb3yfGDVZsR",
  "key8": "2kX854oCPFXZCtUAYe9mJ2JfBy2uwVfiRjDHSxvZgQRkeSoZC8FNzvuBB867jQW1FXkpSBNZiNJrEQSW3SsDKQSW",
  "key9": "4oEqDY3ZdWEv6Wpkgc3vnKsZBtQ62YTGDBsdwXpcp2RP7fU17SkFGG6dwB1CAHiHMTJyW5cZwRNUdn1CqNVkNSDf",
  "key10": "3Hs4jkoUBPKXNs5M7mmERdXgRiWDgFGdBFy2zxh8pdujNoVjowgHXzc8kV8q7xLq4DdFKQB3CWUQYZxyVngzRMpe",
  "key11": "n6cXoK5tBuXunmSWrZtut8s3zQ38xgRW6qjTokWjKFzoY43ZkexNSKNpYw3tYGMFsbYvtsMQYeF3yofEsiX55Lc",
  "key12": "X5i3RyP5esUwhmbuczkuSkoENyqZmfLzAfP15V7hrZbXTeBCTNkTTL9KZMLc26EGDpGGkdPxau1keoVVR8JobRM",
  "key13": "3Fiti8zMWG3ATWXKS2DRFk55jUtCaeq8RPpxwGW2atwo9epFMn3KjknWuzYRhk5Fy7GKdG8dRoPZN5JbprrfqSKb",
  "key14": "MsCyw6wkihsJBK737SzvaKjbLBqZJ2L6YTFPi9MTmV2V7uqLDERSVTvNAzWNSHasv8YNyLCABbW7EKNQ8YYLyuc",
  "key15": "27n778uDtytRN9UtfyQtiYm1tWDyBVzYc25ksZ7ijtRWyK9CmswCj3Dg4des7VYxroGi95iMtWvSKag8n1CbTV8e",
  "key16": "aqAqxhdry3WPWaXVEg6fAfGxXmainymibPZqWq4yhdowvaZ6fUdZjnry52BtUfDS9wcM7P6jmZsx7gVKmT65B75",
  "key17": "5QwW8V4qTztk2ZMsLJJSnzfpHqsMTgRi69yVXexbZcBEAk78HMm1HorF951qi1hMynejQ7gW4P8cZDT42f4mvRQ1",
  "key18": "2fHAdEqzXxo48zbssEv4Xbx1N14VnNNRUmW5rcSsPLaF2zLAY5Fn7Tf7tT5rkGr34ppqCc4QJiEsjhDHEFzuL29H",
  "key19": "FAjCvHeWnKFT3H254P8cVNX7BpLck35YvH6LxesEjpWCziAMBhgDVjpjyCZshHTj8pnEyAvqcFe7wdPPvMWEBsu",
  "key20": "21PhrGVcCFqUrjNQUg9v1tyV3A9pitpTDeQUcvzSpVDTWk7scwVB7UZqBbhM67oCCPFitjKZvaWCQ51WD5pmjukv",
  "key21": "1yXRo8Dmv7PEhqqTpvsXQVSpRWqKmUAbuBqiaYZpLNQKJrMCNYQE2U4MXTf6GBSWB9nzcAVPqG2Pj1kkbp8fdcu",
  "key22": "2WuENbGKTB2vMua9stWqehE4bghFZVeAkw2VpfrKTmdWfebsNaiZMVr9dDHwdGfCiTQtN1xm2FoEPVkbmBJF64Nj",
  "key23": "65CHzAhv8E6kDFkdDSQ4ADHPkAsJ2RUEs7NUR5EbzcXPutPy66zDbcs6SEvgykUiiVTTLo3t2mtdisXzQWUzChUZ",
  "key24": "3w5U4Q5rahYpLKZJsvXoEqBizB6MueaPKSv1sqRMjBmcQtCPKiKdD8tKfBx6dwde7bmL3J7i6bQUcVZA5AY7bgQe",
  "key25": "2h8FnmQ8x6p8ESASfENEh9m3dyhEwXn6pzMNxd1QWpPangcgogwHShivCvxmB7Lo48gaQaRqQ9DGKd8chD4wdoxf",
  "key26": "4kLBwsKVJ2jSFbZDfK7B3fpyENcbQ4RbEoQkteYHZwYMGmNPVpp4cUcE1QAUgKKcuSqADC6mSEntYSWHCJ617KpW",
  "key27": "5eKqexuuX5cmGWxdeLw7S81cPfJPusb79o3SpSnBLMh3qVWwRTzyF5mscwvfHkbpaokXak2YqEdcCt1qt47Rf1SW",
  "key28": "LcTxjRXnRUhWtqZqWHoty7UsGfM8JHGB36WYPz1anGDhV6G4ng1fLGeaNzaeiFoSALfDuPRbwHVUthrhSUB6gX2",
  "key29": "48K2f8KEqCJEbaDFMvtAkN32dAABDkZ7d4VDQyWRxCPDFzi5njJtcqgQ91tbYPZTkU5KhHxT6zQtr6Nb8A38MEB",
  "key30": "2bo2mHgPVpJMrSYUZ5zNu8fHDi5eEJc9npe6Nv7Xr3oTFZFNb5Dma48xfAPGRfhx4hPco1455LcNFjkeGcQsyiiS",
  "key31": "3CuykgxHrZd5mnvNn7jtp5eB6VRpsoyYWbjzrZSkfxSh5dWWhSbTvPdkTDZnoB4g4oLhMVSLzdpmEDhHdH6e9kQj",
  "key32": "5fUDvM7XXinYss7QY6rqeXWCdK4nx9MeRHtAZjYRocr5Bo1koCcv7V2FV2EYVfZe5rN7s4L2NsXp3NrTSw2DCUGD",
  "key33": "kFuBPQjqTzJ2pXVkdnEBTxP2EftFwmujGqwUBBgHWt9txqkcT8KsqvPcQ7qC8LRUMBRM62C4sNR9hxTkGM674iF",
  "key34": "BaUgqNSrsPJukyBqmJdWU3tP4nxkYU6Bo5gwMKhWSt9wwS3HRLYbrbGwSy7pAB6hHwV3mtkbTjmNxb5T3EJfuNa",
  "key35": "3v28516wUxgJkqDfYF7EGVr3d9D8g9jcNyukbPZkwtvG2tu2AJqm2S8rC9p4Q85MsE6U48s7LLztjKFffAtDNNyj",
  "key36": "3MvQUEi9z3uQzGUnZuUfGbJuBCz8Rq4fBRQA2jbJM65MrSoshWUpy8yS4b6KPJ9nKPyVT17w2dHCRsh88cWr9HxA",
  "key37": "3Wzi3LzcmmmJRpPN4AVR7srD6PiNfWjjCxZbhbjBjEpjdCRAZK4aHDBbdYn1Stno6btzFnbUpwCpPi88yeQVvEQC",
  "key38": "3gcuGprKQRZYKEdk3mFsJKCbrt8wmEvewUJxDiLG7Zte9wJWHtt3HQpziaTwxf2ne7HfMtqKmMCyxYwpzDFi2X6M",
  "key39": "37Nz2eXArCDc5fvQAxaxyiWLEzTbe4uprKYGaK3ARBUGxRHUngxJdzMdeDPN6mydfgWkYSiZna3h2VQiYCrCWNAe",
  "key40": "3VVLZn1uNtWq4Vo6Fj4Hyk5drT6SKoqUsoxYjtuGsfF4PSWwA6CgKJueKRDL51smK9hXP6FgVAbYicmM7HeRskeX",
  "key41": "2s45FRqwFmY9vDqAU3XmoMgicNa65XnVUsgzxpVuy16VbRj1b6G7U4TxgpwL5152uH6Ho9Gu5Rji1vRxHFq5hrw7"
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
