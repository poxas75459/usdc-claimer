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
    "sF4FSNESRkM8Z96Z1HsrqovVduvRxrYaZW5cY6E7x5MH3M7w2M3nE7D1E2qRkhtNtdUKTpCnJNrjsMQKgjWTuWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rr185E667av1fRjSKGcB3h9bdVR9j2MzFe5Qwx2wXc5cGMGHo5akkypQdUgF6HT6BTUGKizAmMGjj16QMgt1L95",
  "key1": "25Zc9qMHM7U6gYCyciEMDUVMiWjD39GuxHMar8nLnaPJ2DxupuhGzu8AieV6amLHHwrjm4x96ofYRBTqe5ygFUEY",
  "key2": "5c7A2ZreSBRuXPzwh3KQYM49Gt2rCuWcKE2hjDmokEvqWfQEfdF4jgM2JBywn2FKzHBQtMKJao4NSpS27EGLa4z2",
  "key3": "3ZU5qS1yMHgasDDVXEFcsoregARaVnRY96CCmw97hdXN6eAX6DH8VrKnhJhHoApA8t4JShBhMn7ovGU5jNQ2qwrG",
  "key4": "2pURpzdwHPGG8LBEBKDbG7JsBdnpr3a8m9bDxTLwdUjPbnLnjPybUXn8YX2rSa1Dzpvot1YFsoj6GikUDSpE3yEE",
  "key5": "4BKGrWCRp8dt9PZ5K8azPBPoXTrtyc6DoGmU1MMgp6CCSaReCDGh8C8yZY9XReAK2Skh5YY4wp1gzqmr59JDCMaN",
  "key6": "2AxVyhaN9o5JxGi5tCLhwbZ95rDWPvLq3hCeATkTB31HkLbvg75BZRz2aeNAr89au7utZPd3bFDBQ854quMdHzd3",
  "key7": "5XjWWv85XkKH4YCXB6vP2jjJuTyrnZuqzn4u3xFxJ854JGHUXVpwwjiHyxukbuNpGnHr9uQLdHM1MJkiTfYUxdZx",
  "key8": "9dnemCQCtKovAagTT45KQMvzWpahs4JiU67NsRpy4u6stqzcz94gPV7DAkazhxY1qe8GfB1gUzyuKjHn12JRQzL",
  "key9": "QS6WtLd432DRi2FQuB6ceuoF8xEdZZ7xFrnSsMVsKv8yYmWDuY968sYAmaxWtYCLuqPGDaPJ5RG7Ec6DWmtaKMx",
  "key10": "37Fv5ZUcamHSMMXYb7fBpk87X5HhSdnz6co5Ft7cP2PLxeTUAFRLgeh4KXR9QTbQpsR2Qicd1rLr12yt423mDSSV",
  "key11": "3Y8ryBSNkfNuMo932kLqrwtMeQWx5HS9CVDVDBfxcmHTYk1kEui9v72HKG885Z5TwxUa5jN5TqKs9AcZDxwfa9cP",
  "key12": "4JYkNjVKSk2oX3oABNJXpUwZuDrXMatsyRvBrV94PFP7qdLZ7aLNQBqDk7GC1BTWdkoSK1wQbWu7o8DJBS2RLwkz",
  "key13": "4Z3rfGWbkytWb9D5V1jBBKBYSBCd3cuwq65kc1bHZEugx7Mo4kEaRfbtn4nNNeWEog2zMEut3MzmQD8Wx1gK2dpB",
  "key14": "4sQyb6KM4RXEm6um7bAUkKYf25wup4HphNTMcxCFWV3vKvUaQexHhPeV85KZnCTGAn5M7Fk8o3uqWJfN3G9VaoN1",
  "key15": "nQtdvGpvX6Hf3d6pZ1124urEpsprYAmj3dtAcmD5yBHbF3FPTNtXV35RCPtMr63AQ66ZnFNoBMeEe22h69QAgtA",
  "key16": "2F7rBX3jEsUjZupCre4nv3hKocR4NyvPNXEgDwvV72dvTTaJ8H672ezWEGXuvZRtruDorXzAuCyf7mvKzZgcTZka",
  "key17": "Mv9DB5mhAAgn8ogf54vWJ1gHHgWq8kyPhtRdqTHat1yhoqutkHytT9mGPQ2PuuCGnpqtqfZd3LYSyYLWWVYmDGs",
  "key18": "fLQxYGLQEgSwAfJM9LeQEisFCvkrVfydTiWnTxicaJWYzvamEsJgpNhyqPYGHNcmB9z7zdFq42eqSY6L6AeZLCr",
  "key19": "2DNYYGYMc3pkPsy9y18iwunHRHiC9LaHfomNvwQ4xsC59E5GwuwguPgY6RmGFYjfVftcyJ69cjVBzmdZJZDKTZ7g",
  "key20": "2Lf7ionPB4ZbHTmiYqq4cmAayffbNt4UKquCGwizjn6WLjT1BZqeStuRyVgwSgYETGr53ce2Q16KvRLyczKytN9n",
  "key21": "emutgPNtBCtoWUFYo88J2hHrVojymvSEuBZkVWeqgftfxqhxRUKZhcA81vq3UbuTgL6BfvWdqCjgvhmMKmGtiJV",
  "key22": "33JXTQx1DsChVXmZJwcQeeLtGVfWKH1jD4WjG51LtCHdxUmh8UqEmySUuQMqwTdcoqvoYYPZtSZGaQaLAgQsZMqW",
  "key23": "4fjkULfrYAjr67Dmrsx3gXueDHTbFnDL9hPiQch5PiojncwQUEbm2D1BBr2Nfvmdqb7hzonTfhadW3s57tnNDv1f",
  "key24": "Pb9pNv4yJYwFNHHjpryTLUh8PUoieUKYdbVuCfMqCkKVaBAfZ5kcKKvs6YY76Mn9MzbCB3eH7prLBWus8jQ7oFh",
  "key25": "4LwDF7QhEAtFGc6Rznuhwyw6z5SJKbHAsTuMUACFqzLzLAruoFpLtS7oCQokS44iEFis316FJNFztUApJLHcWJN6",
  "key26": "5NP75R8SiqHsLQxm63qnwNwFmstF7ZKqapefq7ERrPQqTxzsWxSJYeCoxoPe2SdAQCTku2Qn51oH2SSkxjF4tN1h",
  "key27": "BvUX6GwAudp39Ne7VxUcedR3nwySQB71V9q2rbr8VdmWRvtvQxTb65x2eT6YQpJ1cpcyAxyWo29fVAyY2g5jTBf",
  "key28": "2LH1CVhsvafq4Dom6VUjvsqM9yFwyYmGFpSuADY5ztuyNBoAZPmYytufEi3uCUXwpbCxSEB2K6ChnwWzmstqXaXo",
  "key29": "2YnRAaEsJzgZn4eb23CVCyoi2anaH4Z1MXJAzu1Tw4AKqyKb3rzEMCeFSdDJ1tk3WtewTJs9CVqqNcxcTiUCRS6Z",
  "key30": "5oWBaXm1ZmiY7TERXvL2pCRuBXGyRdLBCGSBbQ9ySLBMw7drVz4Yc5TibWwqLQEUo3n8bKBMj6eMgevBJ16U3cx",
  "key31": "fnFexb9PGf457HxtbQtNs1iYkQT1ZkUuutXQ3yUgSXvhV3UAwk8ynRNeM1BpdHvfym5KH4gk34gycgFdvytyCnQ",
  "key32": "d6KesnZzAJQL8nwJUTRzptTbVBtWrrSiFhT2NrbcCNHPsuZDkAEoruUz8T3yBDdDhEYUCr4jm5cwGbYSi6rXNyD",
  "key33": "KXfp3ynpNDfubKuthFFHoTYCuZFiMsCAyyHem6cBdqvFF5wcKELXQkUpftPP9Q6X7vcojDFeDwe7BmLXnyn971t",
  "key34": "JDeMcCKZ5DmtZdvJFVswfpgTAEE2sr3D5kQ2QuUDTpsGUVr4gEAPYXh61wvqgzoT5TrwLeEUGNyYxFEbo1MBQZn",
  "key35": "2dX5GRa1PduWFwSJuDVkFqTauWMZANMHpEYpaJMTfkNoQCanJTkeBjBtbqku155ULc79xVpmxxrW5u7jEt2M4Nm3",
  "key36": "5syzrT47wfSU4EQ1Gz9FybfBkdRBFLDSBBbqyxSFqf4ixvNezV1F9qCrxcj5Tsnemr8FHsUYKeAm6vwqYjBn8XVD"
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
