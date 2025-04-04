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
    "ZX2y1kLd8uWp3XCNPSChMt4u8n5yj6DHW4gnVBuDXN9F1YgDUAGatMk7fFVQurDKXKaRCLEFydEueQ4LefHKkdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQFqyuBE9M2ZZ9xPQdbCcGCeyVGxogWzBQanTYUigT7tomp8fgBSUvX1FmJNNh7wdE5QFamwnGiGK7XJQoXzfV6",
  "key1": "321GWCpSaPWwFqBYRg57JbXN2eRr3eymha2XZaVX2YJdWMxRVSKuAyFM1YudbD3fFpT49zZfKRyhR3mYMGwfY7Qn",
  "key2": "2tidwBSpAXgcBYiNCEuU4KFeDAQU3EBnAt5wd1APcJwUKmQwNcYVhfZoAoXowxFLB4XSmcNNLEeLkphkuxifQcMY",
  "key3": "4pMHREE56dEoQQZ1wkJCi2MXdW4RXQcJHyyu8T3TYfj3drXs1eALcy4zvUhmWA2Zq8Ld99hE9C6mCURBVtoiw5Ro",
  "key4": "5v595g94tHrSdKGnS1GwtoemeKsDERiLdhhGHKYRtgddjcCyYGgkasu9WgeGZ7ob57XAW53JnjscaY33jFvPPq3h",
  "key5": "596zofvdhpZ8vRtkoeXLeEPmAkUJB8MYujDucBg24kqBzuZqx7d9XLwPLBMNKemmY2ZfTfVSQDwP67Smr7SoMeHX",
  "key6": "27wc3zrFdupCYv67Z4isGYgaGokHjE2oGSL6T67Y4misxo5b2rLT48JdfvmBXc771P7XiSX221cN2p9E5twfXBCT",
  "key7": "2ia6ZVFZ6jd9r9fEQbAUhHuDPKt2UubxdTnQbXRg7MP4i4JpCu5xHnvdRbHdfFdY2LJCLFRw1G8AWo1Mt2ZqWJmN",
  "key8": "N7wXc3SHyccAFmXhNEjELeGshUMPpcKYekrnv7xhzZ38Py72Rh61FsPqxirSzDYNQy6jMZWU9KJrMBbeLLCL5Cu",
  "key9": "2nec5GLFZqjReXoiNoe9yvBoUcZERmYJvcMSV7rkkhyT5yrUxb8WqagZfwXVBcMTJwmgYkQYwKsv17GGviRPa9qz",
  "key10": "2SFLoFNoCusjAs831upmaXuXD5Z64xvEHwRU9mLLiCLo341p6MT2UVYnZsd6esLZNNv4e356J5jTMAGgYv1s9hiu",
  "key11": "4o9bfVSnUKP7WC6xJNrpAXxAgFiGnBLBtB46GVkYUFaFadrwNdXdA4mtqKmLVp4MxP8K8zXuy7jzFBgQgAarMWny",
  "key12": "3sB2NDeyPkbQxzDhq3H3skSrP2yWP3JVY2wacRPTuSmUJnU2VK2eymEr6ra4FCsSKThaAgj3GkK1PhJwVcr9ubRr",
  "key13": "4VBASSaxk6VeVGExhKhgs6KkvFRwvKZU9vTisKnFkUrJSdaArdsydNVw61f2MSDQow2XKpHpNGuRiSt1Vn7QkY2W",
  "key14": "4ubRHqxuPemoo84Bmibd3BNv5aMFRPfUpEuaQxYPkinZgz4mrdiCF3ggUyUGwceTYNzb9NhuGpBZMLnkSAhZcF8K",
  "key15": "2kFjnEaCLufbHv4Pso4kkVpusP489UnWj7j8bZd4JZbZxcdiyvCsqqbQS64Sem7AV52gxXoKcfJXbXXKBZWWx2M6",
  "key16": "syMeKF4U2xwEKr2y3kG67hUtHPZgYGEQrFUt64i2d7mAYWu4HqHsyGrbUV3A1RVXoNE5pFjDwPrs3kx6QaG42XT",
  "key17": "2Aqi7JGX1LMHibaYi74U5WhdTuwKTr46f8Ya6V6zks6u3CkVeeFdyNjWbKYzyqkfcQTyWjTAZ7TJY4RdL49FuH9r",
  "key18": "2WXY9uprT5rU7Kh4cqdu28T7SP2iki1JH936mceYBg6zhVNEYJoG2o5oKVDpViFhFxyitRK24k5FJVT4ghVPgupK",
  "key19": "24M8NPzc1TiRFjAqmJDFh7pTyaUcPgfbKuB4ykKrZ4hQoo4oQAWFKFTSzJrcaepEXmjLdF9BNSJpDERVYPCuteMf",
  "key20": "3LxyUDLDfsFmziVHzrNS8ZnmyxLwRs8Qn9mdNoLkBXcs1LYfxzCH29JGCXWbkEHVUXhJCcwhYp77hJpmCzMHR9cY",
  "key21": "5nccbJwtoymHoGLy7h29sEhbchvgS1XC47p3Y3xqBUd6NH8q7QLCgFboVAN4AgjUKGK2DnkgGZWJYp1o3fnafRfy",
  "key22": "iipDNiHTmfnC3odjjZRHkUsPjHVTSsYA3ywCtdJP5HfAwqyTiFe7EqVPhPdAVEUiPrZWv9TjC7ReAKmFgJuNYD2",
  "key23": "2LzEDzyiDQvRe7YSgio6GvcfeqPk4tyjYzUA9YxsR3SWYmNoW5Rq9nozsVKPVaqeQhh7KQNr663SGh9K1YbTE4xJ",
  "key24": "3xTQNnLnFahCpX8mz7ixy9c6NfNdkfSorBV4sURgs93AmPhUZ2oZ3tHwKARsNP1znFqV1dvYTNzydRfY2qsnk134",
  "key25": "4sr4yJVWQ2FU4at8h29jECxR65hKPz1tWhQPJEgiQM3VC7v99HHBqCtUyVtaB25S1iDinXbYy6omepkXVS1zS87S",
  "key26": "59LmTjyT4m9B6CeqEbfJ3WBbEr82fFDbtqqvJfxUyecusMBQChxSBzwydRX4fbjfXVTo6WNfHNpTPxtPKJPB7S5t",
  "key27": "bhJs5TAN3iWcZkgckfSmt7DRZLDxEFHxe7PAX6RUTGD9TzBS99WfyuAkDnhCchs9hFYYfhpGBzN9pEX7Rx3mk4p",
  "key28": "2DjQ3cRGGyoAANvzKmX2wA2bF3LSB5cFjZ9aPx7ZUpd9aNzrTSpN6fzD8rhhTJ3UA3fFGQPR2rkypkY1HnbzQErm",
  "key29": "4jsjWYfDwJ6F2XnTkdteiaBYSbiFhPkpdoizZZYhpG76AYX9ZHvt7YKjGXGwzV671ghDxek63aZZtsVn6HK2Tryo",
  "key30": "5a4DCs9YcjS9E4f79ZTi4rXJJYH8kApJJuvmRSZmFK98XNVHuLLG8Qx9V86ApHp3tV6YDe2Anq2B4JBQqKtYg1rR",
  "key31": "47t9BC1xriXo1QT4pdYtfeTYFa6a89kjwDNQJ9C92HB5LAVpworSFta4zNcKDR2QxPv4iF3WxD9aQntTyoWohTsA"
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
