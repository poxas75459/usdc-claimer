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
    "3ZVBYH7H1Lz4MUEaW1b7XA8KF6LGpg7tZUBGzAUFT1k8u9soGo1WiZ8LWNj5W4UvaJuuo75sZb2mCunN4dWymbim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33thDfi9uJPZzDEPr5XGVGhaY8YkougMH1RuwJq9s62rLQrQd6RKKDgw2ignw8FKt3iJ3JcEcdrnrm698HbL2r4J",
  "key1": "4Tc9wvgfmVCntwH1zPo4cvJH3W974i4HLjWatjehv1YesjtUG8Zj1oWb1Fg48kfiBWTwyFgQc9u9X4JfUTvZTRWo",
  "key2": "2wsf8hNrC9aKc6JS5bp6uh54XWDbAdU1rGQNN4pLWSTFvRm4SAC6dmRYUH1EYzNcaBEu8gJ9rZ3URvgjTUhS8Q9d",
  "key3": "3BA8kWZVpryWsokHQgaRNSXk6VLhY57RAFJ7r65Gw8aLAqMk7sd5aho7dwcJkPpW1nUrKVAfZXYiSpiYQw6AKCaz",
  "key4": "3tGbTqPAmnfadkXV5Zh5zWaEdq6AF6QZGWBtxBEJj6fURNBV7baGs8GveSHsWgshqwoFe6Dkp8av3y7VdsQ77dkB",
  "key5": "5cNtF56yCxq4BFhevG8emcBHZpA2VrfV9VGCsNTHqPnGcuiS4Lof8UqDmCMMFiCceJSKkd7n52WMoobwfQtuB7vx",
  "key6": "2PhzRt5LQT56d9fMxQUepsPDwf4gZ6xdWGXfw6XNogEyxbxLGDuEnKdDeLKci7Dszgu1f5UJXQ71u3UeQ7fcffKK",
  "key7": "2agZ5edswy6VUo4x6gWSUD97eLJCoondcDAREFncGoMDKAjeMZxzH582CR7pgDi7arATsXWcVywDUnH8NQ9ycmvb",
  "key8": "5LjW1dx6fXG2HSHg1JThBnRkqq4wUH41j85Xei1dkmvFYLVi7rTWPbPqHSNQ6nVezTZd16WrihP9FTNxG7TcxJAC",
  "key9": "3XjZu3wUzj83XjvgHGJ1Xdv6kWaNmHLgurvykk4wyZyvdsuhkfZfkwh19xT4QhHodjcM8xWmioo6TYQi2wU3VmpC",
  "key10": "5KzRa9ZD9qgnGeBuvnvxPcV15ui2fVanH7LKVcAxWd1gvVFenurkpt3RFbxgfnUVsKHmqBUaLMXVyB5xE8ZWFYiV",
  "key11": "5vTdGeeHpNpmMbbUB322hLguZ2e7iqqpUaATcRaGDTX2o3FFM64LUcGgMbGxYBhvY2W4cuBMSdWx4rLJyUdWk8gk",
  "key12": "3qnEurPyN2uMVSVqmnWsN4JHoxWMFFpkdiJTD2wCzeH1VnrEJ3smYpWbXMfh1UVE96YS49G5yD2dBUjScoxGn2TJ",
  "key13": "3qGihNGQo6RLp2XvGQXvdGC7H4wgcjgcKefFk3VeDgLkEykQB8kaFjACRKrR7G3oPmCbt959whzhKMpLbYXCLHZu",
  "key14": "423dkjD46zPUiH9yXVcLerwnt5sLRudVH9uajs5dvyh8NcrB768Eav1v6S3n199vWHL5MyNd9ohLYyt9NyMe87ei",
  "key15": "37W3QrMBzb1mz1nZ3pZtxj6TXyQgMQzcoyVTyB6osJbgLsSAgj89ZFAVKyNnqKL86oshRRikmfoi9MhvKstwGEb9",
  "key16": "4nZWuvKCHFHhym7JQQerysQhQ5yvmSDugd6oUeZ93rr4svkc9QicWBaKxaDNX6zsGXqRsxp96mZuRJAcLRefJLCi",
  "key17": "4es44uZnMbzH7evFiLTn93yuwM2RGo5QpGixEV6ei2dHcAkjdz3D4ZDPH1XgCnoA2Nay5UNVzPV5EQWrSm3Zv1sd",
  "key18": "5F1SBmjUkSt4dhtnYJV58JZq6EGDHjQFLV4PcubkXLx2uBKFPCCHXSNzVVLgs3SPVzHQ4ThTLLsshDh7DpWHKSzi",
  "key19": "3jFns3L7xLmH2boafxzWJynX152rDyEk6XK2ecbbhJtg2Cq1ECL3eJPsCUcbbrnwCw2YwiHyXW8WNC66kyxGs2Dw",
  "key20": "5Y9KNiBydvdsBjiN8WUJWJoJD1C3u7hTefiauuDC52DcucATDangtZ37kbiWWwQB8XPck2YZiPwwKm8V3q6UmBLf",
  "key21": "2T3fQ5vzSRZxqe7xNgxRhA5aMfS5DkNoCSk1Lzyp6j62bexT2K2SEQK1masJJREAQBdQJV1roUrPAM4gvGSC6ATb",
  "key22": "4mkh7tvRoKTLRq2zWUqQ4hjkqkNUWyZsDKEfYMLTde86oemQ35DNcvt2qfYkk1bkZqwQh5E25zhp7jVNE28X8pXk",
  "key23": "4X24M53H4XJ5fNoCBYm5uVf8muGF92m57trEY92n7jDRezdN9qaqStSdp7WCcJ3NSzsWNNUmRcDWfxhTw6o8AcC4",
  "key24": "2zsnZUKj1vysYioqa7pGwLpEaAuseBjobzdPKsGAdZdiuuo5enS6PcxvJfFRYc8hRNTEzntvoRqRY1qrhwFJgvv9",
  "key25": "3adjuxjPxyyuDFiqAZHFoSC6TQDfTpevSBtvLktgpHygiAV12kN5Q38tD7yRwUyXyuMLHbmqrFax2E3UU5nzNH6y",
  "key26": "T8yGXkGtPhJV6nQvMe4wzqT6GHFySjg9ZwehKQgmVzB1Ep5ithmQemsAsTMW48dnHA3PYjWGCzEaifP12B4t92a",
  "key27": "4AsdRpNgNt7vxK5ykHNwx6Eq9vSALS6vqSkq314kSuCvm5UvSh7wb19AuqJvyP5S5ek1QaFJUd6AxLPSBU9AZUnb",
  "key28": "5XSk72XeW8sgi4SmSCFgE4ysDSpVpoqB6QLuZkUKzUoz5tD6YAgnBWTHiEXZGNLYSzoJQmNpuG46VmvmeDPxHApG",
  "key29": "QDtrB5YRkp2M9FCTceGUMYVNGeZ3hemmVQ72WXw1jzeYs38t3FNpVSyVqEWJU2zFEJQEPHPHpech98bkn8cP3WV",
  "key30": "2h6n1VJ98hJmYRz4bbMLNBTHvrskwWbz8oSGbmKPwAZccTCs5WmmT24N35BicgzcJhJoWgN8ips4DeiDD7VZdW2L",
  "key31": "6PRd9bFyKZK13a3dxcJwDBCVMvvNLkCyu5ZwnvDpqrMAduNVyc9n5rF8M36jBMYPospg4JwMt3QzZ3rxvM7bZmq",
  "key32": "2rFrMDrhJtUaJDSJMqJBN8SAsM9jpy5p1hkj6Ncc6gcksYi8BrSi2hdFhXaXCLtZq645x2yhjkykMCyzFbXRAjRJ",
  "key33": "EFdbdtSwzRifjXX5VJUupe8ueWYytCuk3aiVSBKWhQc7hqQUU34EypfAhrNUQ7H52VqJn4Ja6DMkUJTyy4wfevU",
  "key34": "2NfumoT2zgk7kJn8iu1rwm1zc5UqvkHtZKw1AVWrtichZrEZQ4VYgXNc3paupxWzyeQHWNhtGXbEiDnFD1LSn1Jv",
  "key35": "2EtK9dTDWAqFtorzo7vFZzreLdYWUgSdgFS8eGpWBtFDwAkik1sbxAqt3pMDvhhGq5xPzPpjruu9hgy9Sy45pX1J",
  "key36": "4MbT56mjvs4S9cEuK1wM6sbokKJ97MAg3M4cz8je9jFq4XBo3AHGuzPJVB56427rpeLkRC5bnpmXjqVcQXZJtfQQ"
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
