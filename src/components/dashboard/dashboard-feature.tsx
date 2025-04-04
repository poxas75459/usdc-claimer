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
    "2wHzrxgPaAUxUrSuPgTJu9x7XK6VmRtdca7r7tgkRjZckWP1NQyEbwUYQNKbZ5ywo4fnCyh4av5fSJAhZNUZ8XLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AGFtEXchTZ7UjgYBSALcTrhZP3nzE8XcJkdWBQna5VdpXELnoTsTZyb7nn5UPt6CbrA3JGPY8zqp6UwerLYmQg",
  "key1": "4jWggNyefSt3q2oT2w1uZ3DK3a4geMYSKzCzVzsGL2ZtyK748oWYe3Ap9RZGA3WMQ3J9pUinWK9EyKf3MUVutFaz",
  "key2": "2jPMrmRHXATSQ546xvYs3NVXmMDB4SxWJxZZFxZCTizhLQJW9S8CaurLDrdEn8o2WNVbfJxnE7CXt9APw3kQMhCH",
  "key3": "2UVXBpMB52NmDmxdXLHvkf5ErrYqFGoVQyThtUmLhq49ytd3iyAQ8pD4M1j8HZqbFrtE7yiR4KjmhJkvefsc3vSm",
  "key4": "2VaEzRiRvCQn9cgT8H9dErnSZ8GdGo91ZNsFmRWKPJ5mFKDbB4oBDJsFA26MivCrhyKBBrQocFwQZLKa8YbMFf7W",
  "key5": "2ncJQBtSGnmoFeMJGrdn5oK75YNUeRJasVSRqfb7dJF7oTQYXUwbEbW3pajG7nivCpffCLNszwxQfjaVXXkU7kAp",
  "key6": "7TfFFP1sNiGPKw7gM5MNCg5wWa44QUqt2gpTyvBQoWhSntBU4qGp8FqqCTYQJXiDhjg93CrKUqSxzcecnBmBCbm",
  "key7": "3gG5oaDyvNcUg6QzSGyNE3fhJN14UVAXD1pYzR7MUzGrRecYDteasxFXRQ6tJDys15AakT9V2w9c3oT9CnxeJmGo",
  "key8": "hiKsVFk3LDwatda3RrZ9XVSro9BCnFSB2ifZXwNaFua9g8a1NPD5rvkExCgmF3udEpeE2W54MHWe8Wfh1WwMo62",
  "key9": "2LjgE7WRdN8gHXs5YVNwgMDxAsKZzKsZKNum3nNoNs7HwD1wXTq47oTPKLxsQQxNMKfnC5d1YtTaQBYvZbYNQnMB",
  "key10": "4MuApjVS5r3L5TEf93VzifGfdqykskkc59CVquHxJN9GCPNL5PF9fQ1Wpf2vNU5SThJ2X494sP44zQ144mf7wWWg",
  "key11": "4AAD29YaqNUNR7dPWPhddSnpys7ZUqYvcMYTwKHvBugs2mRjnj6PWyPJPdpmFWeA66T9eT3ezXpFyrxazf2uFqVU",
  "key12": "xUVJS6ixyqR18WdwnEVn3Xv412ReJWeuveXueXvQAAZyD9yRp6V4g9vukAK27rQ1xsgTQC97muYQR7umiMbKtkH",
  "key13": "3M6gzp6dnwppNXc7RJYe2cU8Kfmy3ygBwLKH4TrU98mL7VbuW2v42KQLUWQiGRr3yVBepTfzCkSyLbXxo1hjf9xt",
  "key14": "RchQFvpUShCVr8F8qxVzUkG11BAMdcW8FczJTsBiC4N31i6bYQqzcpq98cvLNzUvtLbMUqs9i8uf4KgwNAKprrm",
  "key15": "4jD8yMXmAAcYeTxGWTbkjubzqdVMhJuoyYuY8EjFjunVf1UBHRE9Rt7nu4G6Tz9qu7yirrv9sZadgXR8VTpVfww8",
  "key16": "5WqeqdwhU99XRmxFbcsDknk92S3GkgXvBtB1Rd4gLhUkT3fCnXkE9ixhU58qdzQM74LaUqg4dbxqrCN7Lsme3JZk",
  "key17": "3K3PetMNWrRsBV3tJTs5Cp9gdnYiFhJpDmeN7UBSc5rKr8zJsFXF93g3AxLFzDCECNHcMWsFjP9kHcFVZXT7GTdb",
  "key18": "5qxmTqFkkx3hDE81zU5FGK8wQWz4MpPE6pEkxwP9Jbb85xBRp2k7ohohBCcuLf3UW8A521j5KA5KmsKLcsJAxWv",
  "key19": "31b5RU7GJvZhaiVFB8BdUYuxtsUPEiusKTmLeJynHJnHUd33gmFZUd12QvzDVTwQF8aHnMVqMxZ3aYM837DT4Hhu",
  "key20": "45kiPHUnDzv5hvsXhfEtzLgthVQ7rwkxZhfzvvEiU57Jz9YRMwsHU3gPoujYwjnh2bTr3in3BaM1MTqsLx7ZsWZB",
  "key21": "5pEbXS8GjbSq7pXmNLzye9MsREB2v3CNx9dURWtQdoE19vPrAWu6iXSwmq8TxexGzudArKLfF5MoB2pHzhV1vpMk",
  "key22": "47PovMTaRFZLBhRpn3hQEJyTTLeaJVRa1Hrc62rJJqesPrsodS1Kujpvc6T4MdB7XXYqAt8jaWU5VZmiehxHWdgx",
  "key23": "PjXBWg3Re3wnyvxrwxrydKpW5C1vDhGcrAf1UsUaVeqPGPnwPnWGtqwFRzHGsVTecTZH8y8KmXVUVHMVp5FN4DN",
  "key24": "5qzg3KpD5Tq2SKUi3LfALjh2ZTK3RfrzzdCB539i4FxcNJgbn6aa38GhWsJsRJkcy7pGzfFYYxkiysFptyrdhv2x",
  "key25": "3yvPZeYyVjdQMJuTMXMUVPHxLzmYYBK3QFUzycCd7xUSVxqeYdBuCGELTEYpbwq14safzd9CYeuzqoc9V8Z7LBRL",
  "key26": "48UmCfhCxfTa5B9aQSsBA9pH3Kr6duFnAmyvD7j4hu27DjeDigbD9Jp1UJfxp6iBUukeJGgzDZkUrQLRqwF7wVsG",
  "key27": "59FBYo6CG11m3oxrLUjDKihpbxRTzHX1KjvtNFfNAVFnGjXuUpo9eJUjiw9bZJpsMgGuGuQyo4KPNz6efoBv1xjY",
  "key28": "63SZ5oUzKbuZi4tpGwfmsvYjFsqEMkiSAfW1LdKZpWi9NKhqkBGsenRjd8YzM8EqQQ1tVP5W279VCefMDXJ3qMgy",
  "key29": "2swiXzejTxEaEH15uFaACySDBijJXP3P9mti1LksQszh3u1fSSbkw8io75tvhuio4DDRJvUrNcnGPCjJ3bSYrBPf",
  "key30": "4iYXjhArh9cNoj2MP4ZsPefTEkfV3wVqkSUW6EGKPmxEicxSWUs5SWV73nXLNnQofwRqhTrmLvJds7aiSdF2hYaw",
  "key31": "8wMckxGRiM6hpmaf2vzrmzoo3AKjv7ferrFCZyVAEqYYSPn58FMGRB4zorCvWWhCPn5Atxv1CP6A2Pxce8Vwo7B",
  "key32": "t5zyrjnTnf6bjXe3G7eks8Lu4WE3GseC4G5bmnHjzk93DzPwRGjBMJ8dTZ1dUgc9nJv6yYQYhLEiB6nqzmCAQqE",
  "key33": "a9LVwMRxejjxBJYS287Riv7YzcE8uxeHEXV9dBrkDCEvRDduSBtJ5hcp1njqNgqYUpZu9hQ3g1kgd3JiBEMmYVi",
  "key34": "2Q1xNMggzrm5mNBcULADjoTCaCvTRiUJvDFJzZba6BSKRSs7xa8gxE8dQaoMBLKhvzMseR3zi74LbvcqQR5Z3LZF",
  "key35": "KXmg93fkCCZc3CaiS3N4zfU39ENGarSLm1un3WQKbAGBpBbgvK4vieoWwDyTZaUZ3Muo3D8hz6bQ7Lf8C1uoH43",
  "key36": "3aDywF8kMu46jhX15U1XsGdxmA2FxpoQWyz4oi2MozBxAE1NyrxT1L1k3AUp4nKHjg7Ygks3cf2sn5A28a6a8gpR"
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
