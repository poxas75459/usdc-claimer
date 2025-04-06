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
    "4sBQfcGEeEW6yUf8793uGD33HRkJ5JbVfmd48cK1uNwBHCbtPtBuHE62SAHkzpHrTxW9oRhzDemUSigAHkEfZ92k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rzpYEHjaDRKrYUWypDhTswU2oRJTW764YbVnDDJLfKZPhQ9deqnMahwmubxTgmP2kzQoM1GvXPztwskrFjCM2cN",
  "key1": "4EBQdw8ev9xc6JkbPtW1Lny2yTiRouN3VsUgvssqC6d2asgVm2T83c4Chj14FPPEcpXa4yr4mtvNnbYUhLnSyGtk",
  "key2": "3UJCszxJgScnctrNLWbzfdpgo97g4FM5WEh9zWtvC2Knn1SpHiKVHG15DuLBZocGYkVde9ihuBUp6843wPt44VA7",
  "key3": "3P13826r7qijvzCnk3gBDkJaYhCcK4HxGQS9rHyEjxq2Tnx65gYVv3WXBbp4UaZoxSLVGYCtZwwnQvPq4f7FUXxj",
  "key4": "38MVPSv4XZoqYn7MVLznGFZvw8UgyxT5zJAbKd55SYrfrU65V7FqqDc7dz4otsT9DUnBoZwSqPPSUpqi3nspXP44",
  "key5": "5RkMWGRTyUj8VQ3KVrnRgVu44j6VuypNLecCAvoALw1LqWLjHUemJESgZNcdiQmLusqbwr5GcvuT5JZzBdeE85ZD",
  "key6": "2ApMqgXtfjkzfEL3LVanTt5BH8fj9dFUtsgKkUAMkQYnBQZZZG66q1rAbeVyhep6NiA8mgasWKnUnkVX4sK2np1F",
  "key7": "2jDccgihniH7RdUCtzP3mWyrtnyCsWab5zfaEFD2Uuj3XcC7e4e49PQ2fWazSMVDS4wiCe8LEwu8KeCDqsGcNaL2",
  "key8": "36cchAw2SqNjQ4PFQyYaWPQ8vXmYUqLwBEjnqJ45VAVp47WkfGsuq1mHfcriH9voeQeUobKPQqBDzcvpbr6Ma3fy",
  "key9": "3uAk3d3itfQ1uGnfa33zUVTLPUECjudk5Wyzc9X1MATggrtPZE83w2DrSqGTdNfyZuCToTynxKMFCeD7Xkd9HYDP",
  "key10": "5iVsR2RY4QuRMNRueZaGeBA2Qnb5PZa8VcfF3DCinpqsLo53872GgjMUNpLK8t3KQsYWhsaKoamzAefnaePz3f68",
  "key11": "3xEwz4N3BzYe6wferSi46mUpv6po43pazT6GrB93QYTCGTGrSRU4Qyz9HdvkXhCatdgz2TfkQVwweabY4HxPrGry",
  "key12": "4E2J7YPESghy3453UPoGyfwgyEEg38XZJaFeSqbMVDC14xGhgagpwoKf3TjcSLoHywWKuBBXVJ3n7tDUEWPr5MiG",
  "key13": "2piGHW8798wW1QXH2FUvX22psgKinaFf718zmwMWRwKeB8d4ptePsMLWWJNS3MWaiBAERQm273WZxLrdftXTuPWY",
  "key14": "4Hxt593JfE3YYnJo32hxvsmmLDuZe519Gq8oSR2zkofZagEzBkDiozHy2Bk8G2LGGtTzyzHsJsYyM9oHYKyXtvav",
  "key15": "5pVgsuKyroG8CBoyHKeoFYrC7heqiSk7552t3XPj29fbzqsR9qERhosMJ6mXAnS2xSwWyn6sXzus7mswXyrxo7X3",
  "key16": "2FxXh93sAwteLf7fRSFV8FrdKkQwhQHnXbWJpUYnTKVSA1148uJqf5AghU6GebziMg3docdyc2H6rDUoB6Urp3Kq",
  "key17": "3zhtLN8XrxMQA6cHeFqPpuS4DHv5qDp87k1kELHiJyjdyEGq4CK5ybUGDqWoSFkcEuQ2qHuunWvrrNxewfAvhD2T",
  "key18": "5vbY5kAdg6Qudn1CC4Rwapus6DbQ2afpgKZ9bPLCff7eGw7W6L3vcJvvJ9AVHD71657B9yjP2mpwFYEUDDamJAba",
  "key19": "46CoErS6sH5z6fr6LUg9QNGhxyQpYtLnpH8YkcovFxGnCTgKyfFudYLPMGCmP3EiCWocd3M77gREsRvAeNm7pnpP",
  "key20": "2qfLBks2DuiVoN5nuSE7TqW4RtonSMkSETufDSNqHZqANeTLYQMM3VFp1KyEMtsTRxAHteo3iYEiR56pjkBcftMB",
  "key21": "5AimC1EJmS9RbDrtYDHtko8XJg957588UA2ijAFrWz34vFcgFcuvaxHa83bRFRUDPpNquP3CDeqccqSKUo1DTveC",
  "key22": "5y8xnibysaaMkoouimUQkFK8wEWVwdurBm1YWFaY81VXc5dJcjbjv7cMXqFuMHLuSStm7WSBPLzw3J3GoBgBmys5",
  "key23": "PBZfUHMsVuQYGa5rzNkAZdLQurdM5tSXnAejPf9v64k7Kzz1rnXx5RpQ1TGEfnsKanGCLYMHAZFuCbUu6WiNFvw",
  "key24": "MLwih7uX3M6yDPWURTBu2Ae7bTWmyR7NYQJSRRuoP62yibW6cbmR4Ty6myyDmy4bRmfwQHNL6yi5JAYCyxKwm99",
  "key25": "2QfFKZhX7ksEQj5U7GdRTrBzRAGaN7iKk1NEFUwNw3pyoZUjMUuk2qMJpZ3LQN3eedwq6VJYbvRADAeJYoMLtuet",
  "key26": "28x53KvuUwHsP9hGyvjAeQeFR45AnKyZ6ef68uDzJ9Gh23dXSUPc612jFU8zYVagdaVJLqRGkE4gXW156sRT4cap",
  "key27": "3qP7KWY3Ex8rZAcZnx61hKnpm4JQffuzDfi5UhU3A3hcVeHLvgKqYhgWuGJaKidSTTmf4QgS89A9y9fSkPAop96H",
  "key28": "59QdUyVSrFnocER2aREPcGZ7uDBooT4rhUrHDEbxaczmjsmdgj6SvQv4ddzSbCjaTxQKX1GRmfkruWBaGhmmFozG",
  "key29": "ZhTUYBUuoHvkZKbMWtMLc2AXVKAafmJ5YzLxM85tfSnuK9aT4EbikNPQo1LaX63c2Qss4UkkSLpnEhfVtxKr2Dz",
  "key30": "2nqZXD2rb4835XpPe9yBctWutosiDQ6bwnSZoNKoRqYfXh3rWMzQe9iR1uSmVzuMJycGpDeAF7Zw3Gn8qEYsdVcg",
  "key31": "2G6rYJkShSVt9DvtrHoREocwF9VVrVc4SKs76B7YcZcoCiCdTASS9CRoSGJbwFJRX1odjTj6suZhgLP2WZ3UDv5G",
  "key32": "4Zu6fuicYu1AHdbWEJnLhWS1HJ9amGmzyRvi8RGHPR33oBaNSET3dG79ybTSVmGxrD7v82DvwhMQ4VjG9xwuQYVf",
  "key33": "3RwiikSyJfKQs2Qqt8pQ4fP2STVTkYqQ6wgXejpydaN2A1CaFbDyButD1gNKmCv9W12U2k1yTS4gWEkEq2fntEci",
  "key34": "8KQby6RtohdcbdE2HJNNvSCV1D4cqWvRWM8LNF7tTmmNFtx8Aq86woMEPaZpsUz5Fde6roTSNSkkPHaqQAJT2ur",
  "key35": "5QJUZEb7qD9TqdWvAmVs7WsTJojtU7Ssn8ustzwkYNvfVydFyv12e8yPDfJcJABxC5HnP3g89vGxEMXTJQkYs4wP",
  "key36": "YPj1RAnWrSkCZ3zCK6EWDN8ykvjkCrEdVMEQnwJnNLprFYr31KcFtBJuMdf4nbvYZ51gTYFY1KRTqdPWzutFZRd"
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
