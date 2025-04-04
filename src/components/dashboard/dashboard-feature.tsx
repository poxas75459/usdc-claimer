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
    "4DMR5v5aXo9Yxyc4qvZcbBpEQQMurzZf65KVTfPEt2tUPucKBR143nJU5kF9FceCwGLq6HpEzqTnRbA2gxFtghmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4duuVWP4K6zNR3R5DUcMyEzUc3hNPqHsVDEeNgiibKv9RgUGjFFaYPbx93nhow9VJcu3BPWFEwqA19E1airRi3D9",
  "key1": "2Lh35LdYfiQQULUzbkc6mofjxUfwRQhPYyQfd7yTmWJqWyhdVUrATJ22S5vffp1tnq7C5CudDPQzyzteU9J6CLJE",
  "key2": "45nM673M6MdSyVm1UTecKVg9h5iwYWLxgv9uikkQdoHTZA2T6CeyBV6ZwsWsAxypHkJpZMWW4Nr9ZRzdRG5F3cyU",
  "key3": "SRUdxpAdUJzTDkuJ2ZdBcxT6buidUEBnihzaKsasDkwb7NVsManLwkSWCZ3kfTtThFDgr5tRzEvMVoF925iPEfU",
  "key4": "g484QV1XZ1rjjbDgaZ12rHipMRpHLw9seexTujD4RPtujjSswd98Cugjjy518MwUrHPkoVbmoCegEQ1cHsNVPxG",
  "key5": "2z2XeVS2EAMdgrhuaTcRUu3BHi1eNSStXii3V5PS67DW2WjS5YBvkhZYyU8bWF1DZPPv6Kj6GYA1evWqo6M7wPPb",
  "key6": "36DriBm5LFegrJd17TVVrhbgQtfqZe6gyk2fZfz7nsGA4QQHAQdr97XumztiVokJmUDiieug9tFNXehynUdEFr5K",
  "key7": "2niU8M2hPqNh8qSRuTJov9EDcCYZAb4oUYT56bpkaP6oFLnbQtaztrXGRxzB4MBABtCQwye7niVk3tjwJ3AV6M3h",
  "key8": "mNZwFCfcwAEea2LVNkvuGs7i986BV6wS5JiF9ggLFFVXnznjE62DnzEEZTUehBAmpoZuRTCenRWpqaDU78msiB9",
  "key9": "377ZL1smMyy3mqz17j7kKJXA58si67RcREkMY4sHhd6yf2Wg2MTfVime2ByAk5CJo6NRSBZEw8HNodN4nWKGpHbk",
  "key10": "3StNzLVKsK2KxFC62j4ZxgpxmDzHa9eDYhs1AZf2bLoCpVPQUa1ezBPEEXR7tq21h6UuCEWrbZscrFNvwCtdXJhY",
  "key11": "4kw2ucRPUb9VcZMXrKirRVgwTbM83CzUwCPVzvy6ACso6gBNTnTtTHVe7KRNzJd8BhZUjQNf9YWNkqseYzq4iRvG",
  "key12": "2JdyijbV9i4eNTfN72Vm4gW8rJHXQuhbb9edCTURWEba11MdpazakCK62Gm5CdNdUQjduugqoKZiLTDf5hmVM7LL",
  "key13": "4BJYATCFUCN5H1k45wESPgN9QjaMenWq5vd2NV4HhD8XsLpFtPP8c9vppzBrFrmF2jTv33255xwy913c5pWSmMUP",
  "key14": "2P3Hm9aapdW5KynW7rBzke5m4YKkoiyAf3K64zTQ3qmQfyhRvJCFJBiaZJSzdLGvgCbNoTSAGLGMEyujKh7QcoZ7",
  "key15": "3KvUCJwR6ApH7riDfmoAThmjarmknJHyqWoDt69fdBgUs59ZnfW4vkZpru18sGY8MisUwq8LTMgchY2CyJdNzuo6",
  "key16": "5EBEAabuLQM1TsohQYCt1PXQWmac73VgwMPr6qV9LQ7WU5Dxc1Hz6k46B2eK2RHZhPmwdcxmzYMTsnmKYRs2DtDG",
  "key17": "VwfwHXupYgBSc2siVvwKTx5eTTr14hUckSdixsDHJD2AYbEYJUGfqk92arUiC2c3tbWEYb8vDqHDFP8BC7FSkvA",
  "key18": "54ybcRSjYaEM1DLXdZiRMVGQDiPw5kpckhJTFtiKUr5n7bRz9pG2eEZJSYQhMECiXw6Ek9bX2pJkmSCMCGACLZ7J",
  "key19": "3k6yHBCLkgrymaXnxeezohNnshKgr9YdJ3CarAEhLw8uTs51wxcmx9vEyXqFGHQSqJZ2fvk84zDJsb857KSKeJSK",
  "key20": "4L4B7J9AWhXa8iRe6HbTEmMLMr8j8svMkaPoFY5XZyLXy76BF7nd4nJyhScZBtSBzECTqtMiZnZ1p7aUpwe5QFS3",
  "key21": "2igvUNnFsCNhYVvRGJz2Z5hdRAMCoFqh6tMdSpcjGrVT3BFJcnBXiLmwUJnkgAk1WvLcdxujt5gGiWSYXXSedxac",
  "key22": "5F7kEt5gDxiHd5baDSUsf4di8Z3LuT9SiS7p9vzE1XTBTRT32N3RpKTyd1HSo3KdrEB8qMUs5aPEFHSkFYGB5jPi",
  "key23": "2vR2Rc4CoxKAFmNW79xafrXKLw7BuMwZCLo7cpof4uGvZDwMZEzCbyozQnkhngvmWDz1ndTpMkicSd9bx8hMCpbG",
  "key24": "5ypdeUHNwR3bNRawjH7FFiYEBAwANo88FeDqCUywXNuTrTt44ZAgN75LcUfPCc5Cv1nPPwzByRuTgcKFrAqukMKr",
  "key25": "2xPAFofZNgC2nwTwSbiLUHhwq4de7kvSZYYnFdcQKEwmcCFx3QPv8ZR16676jKPmUHpegeauEXcc81vxEN2WwqrY",
  "key26": "3tRFnUq6d4q2UBYGSQguiHzErynLYrKVAqGCCPXSPayisowrimmrPA4KQnfCzj4o7Pi282Tafd29gvb6uMJZGrcc",
  "key27": "3mc1s5Xpuwic5DBXVYqBkzMb6bFkf7or1kTHkYVUJ8pumXK2UpE5fagNL3HJojq6RzmpR7LtTDP4gA36uG7LHu3",
  "key28": "5FDRbM2DuLfLrJUH1na73gons3WC14pNuxGHUhFxbRmuyxpFajPdED2ptgXNevioktJcn3MEkn5CDMhnrdmNzr1J",
  "key29": "2viq91AjmGbUERpk6L7i8aUKzSLaYVcuyg9961FtGtPjAfoqdNaDzgTfGvcFWY86eURmMJ5WDXHyvdLuNGSX4ebU",
  "key30": "2yStYYJjU4TptMiV6YHmcJTWa4v1VB8igTWPXkhKPJg3wrXJPPenvuLsoGJHZFHpCFAJi4KY2hxMfhPWsNDv3Qtc"
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
