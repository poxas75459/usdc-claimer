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
    "x4oNbCS3ZMYdBT8GtrH9QXK7jt2N8nzFixEd1m8LSDkj7kqhUHdmm29DzqPwgTGNCCdnKPCpDX9Bj6UTe9EZhBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7i2uVxF4Kyzr6SrQpHhsknj8TZPQxD9rYqBd5SdLm4iKBreoQKDKBXKcZhMx4BB3Smn3VybFFARxGMzm8SQB99",
  "key1": "54v5nU3XN42ybiKJzNFWHZFmFGw15KSzLNrTJgJ8FkW4i7zQ27Q2EoH2x4tZmN86aJxhnhfR9VxoqcuvpivY3JsL",
  "key2": "49pH9RRDqWM5EDJmiA6A5wvf34v5g9osh5ZdHJ6cWYcbvBTBYmxvnaSp2zwWhcYN4mScHzYZJXpE7bcU2JtPUi3s",
  "key3": "3X4Lwyucun13vhe2MxQ28fxZni5K9jpYWaYqa19u2ehGMGYbLUwM1EstjZWkheqoEgfH1hg895WfgGCLTmBoPMe8",
  "key4": "3nVCjsA1FF4ZN6fQK3YcjUMVKUy994cAnCKxbEXwCeQ7afA83ZGAQgYdGTMSwkyQSTHb5maby3MicNnip5WXbJRS",
  "key5": "bWYhcWcaHkJPn1nKjxkWtuQcdmiUNXsZXMj9qdqAGPiXfttR1d8DrNaMz68nZ9Ua1vaUPrcKtTvE15wfewEYiGn",
  "key6": "2TDLmt4YWt3QhGKZY8EmphNswQoLencT6njJhdwZjN2aMwKg3EAhS6mTzKv9as9iycyVQoCS359t2WpGLhhLuDnN",
  "key7": "66zUiN5eSzEQ53658FCdSP3oMqQLj6FSY1JqYNSD7ETmVap2cRiRg9Pg4nrBthZPZ6uQRqF4oyxhUdyAbq6WfN3U",
  "key8": "2AxGPnRnu1hhRYxiT3MfzroJveej17dfMQVKrVuo7oXRGZjmwB8bHSq39WQK5cBPdGX3emcTkCMS8yLcpon3MaKq",
  "key9": "4auc3VbZCmvqyoW4mNNL136ZidJFv97kDDnsuVCeMPmrvaZLF6xLYRQjW5xY1TiVTuitGyNPBasZq2LKsdEv4CLW",
  "key10": "5UZ52XoFDZ8JCYRszZuKM5cNy78Wrw3n1oVcaAa2G29dUNyw5DjwUM12Ec321quzycboUG8WHsHNoWYEx3krhMae",
  "key11": "3VTnQEr8LXVMMf1jCzJJgJAN2sGW6XT3DA6DTwivTwcRT1Jzj19m9e1ZsSM7hsgk1JiqntkTfZa3WjwrD7KSJAtK",
  "key12": "2Dcfgzj7EfkQBX1FqE3ZGw8CEBSgDVuRCd3TGgF3AV4cMUm1JWGX384bxhSEKFLUnZtLabtPGCY7oNM9BF3NnzDi",
  "key13": "2ZPys2VL86BrxpTeYroxMmTdeYWSHRR6pxfVh7Fist81nFZhykhpVLBY49yymmYocpg9rx51G4f7FCyX7aqbQfFy",
  "key14": "2x5M2Kwz2QVwnHWb7qkL6ZJPfXNS19enKuhkmxhXXJMAvAaLqFKvYVi8txs7FWQKjMKfbxkRAVyJgunW58xETQWK",
  "key15": "CfmMTfhLuijoL7B1Ho53H5ZGuFY4hhNwFBJRnVgy9fTQvUgPo2KhTxtRzeE5TeC3veXAEyNqUgggXh8v2AHmvTS",
  "key16": "KHTffPwjAvCrvbJGF5WPwZHWMf5EqSwVD3Dn79iU44MhHSMsuE1MXzkL6rQWR6UeQowwKYBvz1tbG7movcHAv1X",
  "key17": "2qdKVnFLSxJqDvjogejZhGVarsjHvwdf9EokdEUdTybhqmykQv1W6uyqGen7u6t8V7SGVSZMFZo3WZTV1CKSkznN",
  "key18": "4DzF2DHXrEYpt1bS52HTc9QsvrcoWRe25VmEMKD1tNRAg6xQ4RiW5S6RZeF4ERafbPwrufJxUpsWFvXx25u6ZAke",
  "key19": "2LmJd4q3Xphawphh6fnKEcrbEJ4VMFZCpfPsMpSUE6TNb1UFZjukUtj1x8AetDgfEn4khdNNsX6WMgvKbsKVXyR",
  "key20": "k7CGdTTV8VX2CGJQTPsmdX9FqtdoFybv18chegknxvNAzq1yo6VwduRKGijsLXDTvtftgS3BGdDqGyQkSp5EV6N",
  "key21": "2KBUSGVTcaW3CX7VLdPdC3NzXG6hvfuuUQ3s8nE42zDZsSNogs5FUBPJPfRgrvtwixtadjX3jS3TpufogQbaudAG",
  "key22": "3nv345bjL9tcLCNWodpaqoTVzCDKpxrnnKa5Hq2YZHPZxoqS5fZjysFZXRv22HhhAQ3m813UjiETyiT7DSFrBsdj",
  "key23": "2HJmKok7BgFjqfqFUjaAw9DnCF3XGFnhbzhgVXM4hCwxb6x723JJQeo5voSAWrVi2FwNQFfe48JRBiiyRZEjJXYP",
  "key24": "K72xM7eybxmzdEDA6BAWZCDSBsaEe3BdzSaH2yrxiLMHbxmXHsAAYmTXqSj3j5LPvprXys6iewNXwhcJpu1nmP9",
  "key25": "YykHmhPHUikTScqd84LeLmJJ6KkGaA4E73XGVeM5Rj9rW81ztAnEP2hienye3zXokixDPme6pZppddozYCue1h3",
  "key26": "nWFGRCGxooBRanHhLhk5stY32zgYRWdByRPV3Bg3DSMpQ7MWp39ZQSKBjD86AxHBMsDrjTKRgHCUTZHDNr89icU"
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
