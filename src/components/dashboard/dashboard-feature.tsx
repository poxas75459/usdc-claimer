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
    "5Gp4XGgRu7FLMz51wyJBmEPUhrP33msHmZcJKcJaSP9ndmJBqKgstasF5SybWewGQQ1Km57akPomnT1Y3iVVW788"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2buueChAohTZFiATVwwi8aXJkEYH9CECk8a38ScQkCywgNGTdM8z81JBTwzENjJACQydai7DKHvsZYvGmU5eXzPy",
  "key1": "4GVXMhpZrKZtdsCY22p7i4Z9PhgWaVvdsmHGxyFeFrDWJMUazUTgWX6V84pbdNwUh1aPvgdQHJWntni7Y8TdCgyH",
  "key2": "3tunxKpRXTBpiRUA1RetJ24oBNY7YPqFVhdmbPipLiyjzMAcuqTZHZmvR1V8vgty31SiMJ9tkUN5w1YGeoAFALwu",
  "key3": "CV51ADU9bxxsXhfuAEk6gSfJuDKJhV1UBHvAns16macEKBKsGQvteqdGD6p71uixepB6XJ8cb5tjCFoSH4wGkJp",
  "key4": "3UwsxBgCQjFpR2xs45HTPPupsHVjjmj5ZHS7pKFZF4GVoar2AxNmKWJZ7TXsuZTWv7JyrRYVo2Fm3yjV8SU78aAS",
  "key5": "2vXovdiguAgm79LFgCuZdPwtjCNkugmF5UM9SpCWpjMR9pL5wWeax8JLtS1MWkMMitGxcrhCHVoTYeWh2PbvVRsk",
  "key6": "24Z1jLnUbmF44WqtUxKK5d1R57TYTXcdk1XBNpnXpysFNgLxmmXauEmXB7yMunsTRwcEMzBJZGxTzzQNCxm4oC8x",
  "key7": "5SMsjVaQ3Cda6MR597cqNLjoSbaLqVpKmkGujbhAMMZuhw4Z8qpkghQUL3bLdKaD7KuwU4iXS3ppAocFSkGcvNnx",
  "key8": "5DsAjdEDRMj2T6XDadNCHejjzYpqRshJKj7W4tshTb2fX9PaEorjpuGjR7jFJnbWFfLaAy1WDxU81btXETTR8CeJ",
  "key9": "28WuFSevDQaTu3J6jYZqkiAkTCzxRLsJu3CYejJqbhbj7N2437E4Wk9RLxpSuuA52D8Pk8enZNFGTfuChwi9CR6X",
  "key10": "rVanH71a4osqkLwrES5QHyV7DT1pQX4djce6wNvr97bk4wpA99jzU7NnPZqAuN4QdP6VUTYinXfSxV38eSt7itq",
  "key11": "5eYZx4fktFkwEX4DXxxU1sRTMD9turTcFL96Bg7KQENWeCLLV796EsnUnBACxDn5haG4gdpCuPodBrzi9qPLCs1G",
  "key12": "52ZNhoS7r43LGQa7yHj4FNTRDnpXHDAmmyWFUEFovVxnKZaek8hK1Dc9oLDdY7d5ckURLtKZzC6SThsRqixKHPJp",
  "key13": "2euWCsBPgthWriZ67e9q52cXuQoR4GVnFrpnMnYFSkZzRPG6gyXmUCsLGiMFwNLpAvRebNrmmwiJvbR4jvuwYnNa",
  "key14": "5puTMfMgybqTbiRixcuje8wxiPZn1duXWA1MWcAGyAoZVjEJS33pSWApeQy2mBw33cYDGjhzm9KtEcs7cw9YU3Ss",
  "key15": "5VV2tgzab4CenDFJMNqMtWeVzHip161TuGkhE1v1MsbEi9iLKjwi4iMKgwqjVJyytWsKT7KKcVDwYxcswHJS5SnE",
  "key16": "2hmArcjbCWUwnUU7t4ZhJxARA9Ytr1oRjosRZxLVjkfZWXJuChxob36xpB4wx6MhMYa9bCcHZxXienqbejUDvYXf",
  "key17": "5RSuqHSnKzBT9b1h6SFgeBaThmomJLGRruJWiy4yBnUuyP7CkPaZwrSjsVjH3ApbmEUDktu4vS77FEHr7K3Wyivo",
  "key18": "4LGQmgC9P1qHhy1hLXEaz8wudHpcj3jbBFYToBj14es3dabh5RZc1LpjcdnFEotY2rLR1geG9RYo6CFxHiea5eUw",
  "key19": "pMZ4srRXCZ4cy1MYaZatypFJj4ot4wsKkSrZSG63FEP3dCUFFoyKaXgsNgR9zeYo5ZZh9YkH3cVCFk1MdSKMmZ1",
  "key20": "3BqM2Zv6xxdaiEWvoJDBLxDqMFadbX5QETRU3azcFwAq1tGjgGoUXN4rQDeDyBUbZ6vL5dTg19Byvqaqcquzd5pQ",
  "key21": "evnYXUKHhecQ8d4TZnjEPcCpCox9VYwhkGA1GxqKjUzCSrKSFX2mwX4phw3NrB2MpvZZmwgHHTNeqhPRbE1wLCW",
  "key22": "5MQU9ju5PFkLP3ePpKuwP1E6nAtY2eYemHzH79WFhDXawPcoeJzQhG4jQxAuKssWpKzaEHMJRtVTqTcZKmGShwNi",
  "key23": "8RxMNv9cYhK2VNAyr6ai23HEnZvnoPoGoXpxsmyY9CvTzkBe4arwJMmZEahhN7h5jJApWavBFzKqnSngd21S2pP",
  "key24": "298CYT7Przt8dtVxzKnT75kbBj18mruv1f6KhMTJvPd6XGwzZXHZTYydrvemQW2P9FaAP1ap5GCJo44v7MhrLqVq",
  "key25": "PedNHn2qK94pwVqqt9yeNu8ghGPA6htnSezt9kgHPSFDUU743RxRqaCUd7wnFov7w56sUdzYT4EpDCQevzhLPpr",
  "key26": "3UA5uBdjewF38u4RJ6BzfaqhErN31jyp6yUqyhNSovS6kCcDeQtz4h2bE1uQHNzEQh9vH5hf8Zedm5eov6ccQni6",
  "key27": "3YA3sUMLpqHqEZoxeNSUQHuTEfdn98ShFGFPfPTkhqRkcwkjASfYSU5zFKKVVr7ghmAp1wi1VhBYV5cTxGnit3AM",
  "key28": "4REMnxCRXj5ncAJu6NR6nCyJ8saoRcMSHQy1go3gVMwfwJMAvHYsP1mTrfqD5LuS2ACmYwXQYRtoESwcPL1s8iD",
  "key29": "46QwdQoe6VPb6ZQonA8MJaByNWxAivz92HdvWXzZrG53acPiC2vdgjyJtnJ8xdUS5GVe3SfM8u585T7MmXX24ACu",
  "key30": "6E5inVTt9HVveBFVJxiDu7A2XWtu9YoccC39NQaXEoecuX3NGJM2HppZMtgDBJZswP2amYmj5Gt9u1REXXPe3rh"
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
