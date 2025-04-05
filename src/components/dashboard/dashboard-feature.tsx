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
    "27yeyvhWdSoavJnHENc2GHThf1zxr1aNZtqkDst69eA9d5Keieip6wix5FNhg9Z7Gi4B4Cn1XUbuivgHaLnr3dAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVXwRo9PRPq55i4mFNe4X4817UaBLGmRyhicMfaJLqryCCJRGBGX7P6UeDY7687jBfa9aioNKjD2pZeQVY1yY8R",
  "key1": "241Bvw1ab7C92i7XuUQtxMDY1AFLnqku9SPRNPLA9L6fx6o1qqNdkau9Vx8ypP4cmif2FxpLnGwTFLAySgcUf7Ed",
  "key2": "5Y4MfRfEPLJkLKyJABXhFzgW9xAvGMWmjAe4FszDqBKfgv5SaWQ6ebrBVY3pX14p8DoXLhEpPs3ieAYpamq88SjY",
  "key3": "3us5zrwQAASp8695CubuoD4WAvWXiYM576Rek2bobkDLFeMT2w3VFBEGe9uRohxxTLVGbb8cvCZbKDznBx3RkbBV",
  "key4": "3iZcBcHzrdVCjpNv79PftxjFpyAwy7R2NDLG8m6RFpKMkPwyeUM15aKHdjdjb9swKtT2e9v9pUCMk6oJqTPPBYwP",
  "key5": "3AXhEzmXM9ssdCzFSKcrxswjsnzMpeWZooZgeVTSV3tW3ShPPdQfLtvQHUijj35VNmZ76Noeouc3dzHAhzBWvxf5",
  "key6": "3yEpN1SthCxqd2cNbBStt4fkMf2F8UkSUhFiiWYXFJXAVuRbwiSBBeeve199MmUhv6fFamhY8gvxwptb4QEcxNvD",
  "key7": "5SdzgSq2oWThdr2z5Pv74ff8326B1cE2QdvHWajV9meEUxwfvtxrTMuDjLLvR9K62gDAq1ejAHryGtaCYhe8Fein",
  "key8": "RcfHEfBkoXY5BMEoXEUzUDYdH89XTv23iA33yukG6Tsc3sMRi47ji6fz6FFRXFhu52VoC2vtac5EsSunjtsb5Cr",
  "key9": "pbbzLStXMXVvcKm5e7ut3BcwxD4ckv2emqthZDR9RzRo7wAUhqmwtUmtjRmT2Xhj9yRHcK1iqPVkBBAV7u3n7gh",
  "key10": "T1Z9FinzgdCHuPYYWv4WxDDHSn73UwazSJX4D4ofsp7yYbtGfbhrr3TrhhJa8kXC83FKQUvujY1b9Cvqmh4qzos",
  "key11": "5N6FED57GVwNB1EhfPmVXN59HZYYkdizB7DeuZSF4gXzkErQJYT7B8VBibhf7tzarDUiRLc8N322JZJeBUoajCe2",
  "key12": "3EuKWbcuD4jdge2AU6ykksUvihZvJg3qSU2dn6jGnJrLeCYTRod57wxJi93FcTjLQ1THVRG1ggThpvbyG9KE4AF4",
  "key13": "2zAXUQUa77U5pnK37JL7fnyPo9ZK8nMee5QJhjNvKYUq4J8roK7F1QJGEH5ViTVuXJBJtzP9xrnoiQKh5nZXXYbh",
  "key14": "NHVahgHJZgVuok2aVyqjhXsKmbhgnJj2gfKK6DZ2mt6phVf5C6RsNYtD2oXhw9eGzHAze54sz6H6LMa9twpvPMT",
  "key15": "5CH65UqATUhukyPhNoinAcKJHe8zsxXG5ujxki3zTAMQsVxeiNWxPTP3xi33oknqy3i82Xh6S9Mja2Tsz9LG6kf8",
  "key16": "Ax4th43KVDgmVSKcejvMiu4y1DH3hiYqEHp6VtrRiyHAsw1eRzLkEF5feEHZX29FGVPfVKr3NPShdZedk3TvFqP",
  "key17": "2o3PcL2xyzx9HG7rZWMsfntSbwCXQSzGmcpuikDWEEiydVicBX6MK7hwAq5SUhFACGuu9pQAmhBethceJcT6xXKi",
  "key18": "2epb5FXKkTixNAotNqodSdG98vAbJAyQZDgf2Nv4JyYwNQb31dFYNWdQghyxNZCPNPj6Vofwaxz1EkmfTGv8L3Bv",
  "key19": "4vgnQk5tXsbjcUAmNUYEtHWLiPH34bHskbsdHQQYLdmpwoCnFaDrnHcuSkXjDhxvRLRiaRLXQg9iVKGzhS9SWG1u",
  "key20": "2GqV36y2ayKzLH7sg2LzADheSxj2iYN5yZvUhVjmLWVkYx6rgEJHjnZKMAzAFSKgSjosZL5XQx5SUum7ukFrqwYJ",
  "key21": "2kQFgz2EwF66LioevTxB3URF8RBYWScc13GPab2YnrwrBHwDyFoUNJVPPgETSB6t7jL6PFkEeuh2MFgVJK7RqiWD",
  "key22": "2RPAqshbvAtni2tM9XepN8cnHZQoZWsyT2Y7RbSvG9jxzieR1mBM8FqXZmz9EvuLs986uhgyz3qNhBjCACEiwr4c",
  "key23": "5dbJUYpFZjuDZa4jmrGWsiRVRyUjhoexxmgWnvPjR3b2nEPqP6TXiFjQTNaqXj5sjuj1QvdKFkw5ALxF6CQM5tHG",
  "key24": "2BUgcThVaXEgmzcGoW9xeWYtpBp554Fu6NJkCFzvTNzevzxpMt6d4G51ETAodi33DUuxJkmxBq1E39nc3Uq7ZH19",
  "key25": "5RSNiDmjiSWLwAih1RCsCQwmXPsVTQp5tmNa1kZsvaHD6PBkHphahrgNSYeWyaY5EUiP6oxLvZRZksku96JA8TG",
  "key26": "4378rmpBY4iD4gwBVrKfTKZns7qjmh1hTUnJtC113AjKUrJpZsihZiQV51JHJU7Lskrf8H6sJA3YABFacDyC7vTK",
  "key27": "39gLKHHaKssvxpiQjmfV1JCtuDL4Bx6Md6n2NCZTakT2X9zS9gMJNu2iubZJgvf54pbSooaR3tSCjtPSTmobm7EE",
  "key28": "4L4BeSdCFJQyoNjzbb6d9tVLCFha15CgPcEuq6HioMLR1fBikLiFH7vDudTjTRpqtEive8XDdGjEqbpRwcY3yQ6j"
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
