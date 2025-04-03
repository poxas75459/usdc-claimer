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
    "2Jyo9FiACVEvzMB9H5ZQ7diFEkEAfUrfYNPW9f9vyf5cUPHixMrhAi6wQ15Tn6o3bA8e8XbV9Ax5BN65pGRyT1k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ogijJArjJs6eEtyQsBwyL5dxmvjW8W2X9N94c9P1CmCBH3K2zJ3ZtPth3HbyWtQyWyjDnsrBfBK3Er6UDsamq1H",
  "key1": "uSDELA9R9fwPBgff5P52f3f4SorggXa3nNHYemHDWVe4JXiXC9bcQ2Wbsg8QUjLRhAzaPEoXKEPS1zxN8sSa3Er",
  "key2": "3aTEHV7JeEceYkCL56avpwjP74JHDxyVET6vng2cNgspKQZRNkMUUpRsnhcXtNhy8Ui12CiCTFEYvNGvxqr4FtEi",
  "key3": "3YtfAvp6r8EyNd652fabJcpXQVMpcMV8LmvRvmvUhFmDALCjNG347htCNSrvn872cQSmpaMin9e9pKdak3RrjbdL",
  "key4": "2zddX1fn1izQK8GHorxjFK8zfXU6XmYUN6AVCb97AdSV5pqm1ZYSmyvBkYzRiqh9eKFBVM6tykaJGHRxT3qK3nf5",
  "key5": "5sokaPL29MvwBsUwgYdEUxMncgB8XnEGWdcGiRBPFbvANy1bfrG83cCscsjagacYNgs27vkAAK4focuD14sRUKR8",
  "key6": "5D6hqsfUBdCQka1TSvLSQmiLGL4RnHqwrV31B6rdKS6AotTg6Rue7KpNHY5isndfpaaBDrW9ozTgFacA5NHHZPMQ",
  "key7": "EKe7KjL7A2HsniPmza246ZinoaopJkJWbJV16UhFqNYtjL8v1ABabwsBX37s2ybQpGmvA4aiH9L2wFuqJMCNCeC",
  "key8": "32dw5NWpj4S2YDoW6Fe2kqiCRc2xes6MjuQRKra84vC5rD1i91LJupXC5UkDZbGs3gQb2TWMNcDuyu6Fkies1qge",
  "key9": "4ZTPTLjP8fKCKJnXpKXM4GPvHEj4c7Uzm7LAa3WyLc7hA1aEmekekDezKAgY2ofLtYPqpD6ybmEvmFa2r8oy6zYL",
  "key10": "2PJP7dxoMhs2azktfyCeW6SCE13srwCX8A5WuXNgNJkCbcHWJpE8mvyC4k2rCEqFDHjEG5Eu6XkzdprwBBLs2uKX",
  "key11": "4VzvqAUv8yANnyM2TgGzUp112QLnsJCg25QtMVJeNy1dS9TBKGjftxnUNUwJwovJj82W5fx9PstPpBadGtUgTz15",
  "key12": "5iMwkSjo1PijCmaBETgqfcdVS3Z19hjbQ1yTSpw9P4fCvVqwHjYD53cq5SjZYMAK64h2Uj3vNQB6itp4aEuEQgCx",
  "key13": "5F2pXU8DF7JckCbYyj6FF9YhxNi3fwMwSJdrPnF9JuSeCAGMfVYMxeCaBH48kS4DAUbTfKcTtvTdcMeUXM1SD2u7",
  "key14": "5DQowHNJ6tdr4yFYGqtftAbYRBdxNedt9NsV8rDv48PskzSt1xRAa47jgEmqNiHUmP5BFoj3hd951Fh89vrsnNoR",
  "key15": "3M617PScUwmvZuscR57cH22ZmFYQCC2EXqMqqWJnf6AXaPC1HVErfzWGdKGGHiSyy7BaY4rzx3GuRBiz3w6mbMpH",
  "key16": "38sfNVhga7cXRtH5bMf16BuiymFfQQqA4nYZqabFkq4VLAoqacU6WGyRX1MMEk5ztrGSnF9kzjCYeGinz3As1QaT",
  "key17": "621sczqDtra6pds5Hc2fx1ChJDWpMGCGT5gpTz9fMxofBb91XJSoUXwhjXQ39kBzdm7B6VBwUricKqM3w3vAdAFL",
  "key18": "3P7LtWB9gPUAMHJ5jsMhdWRrZc9rz5wwQmf4CS6EyLgxXsKgmA2pApJn2ENQ7yRLbpHjJFvg4GfPjTdGWFoXyEUa",
  "key19": "a2nii62ThfAnC6taEcYDnmXAcdGU4pVKkXzzzXZ33vgdV6MdZwMpvwVxtxGAF7YKGCTfJ5VWwPKrEo1vbBx6iDW",
  "key20": "2XxbxUrMpsNtA68fchx8RuHuMJ3oMMH2cgUMK5Chh8hLbehpw96y6LnpyUs4eimETKn4cwSDtb4p1PysC6bkPfUS",
  "key21": "5P3rqq1bXb6qkJQmxb7TzTUkLzTuQQ6tgtgoyAEAdPLMVxYn6hrbN83UTyLv331B9nTufMQPpGTTCbCmWWXJwqSz",
  "key22": "22mWaa1cuw1MTBnM7pYtWhpY9PXhwg1DpuWjUp4GALr5j3GCq1tJqFr9mN7oYbE89kxnpNL119dRTwBsMeNha7AV",
  "key23": "3oW9aNpEnjEavWV3b6dPcRbMueuazbgAj1JtDkkcJXPhPygRVXYKH1HFC817npaXnhtUYY9DXw5G9reCDQfpDkLP",
  "key24": "2PfXJosYYJR8Vnini2odMVG2fMSTzb2meJLU57u9J1HsUB7zYeigR4Lp5qoEAJAZkDV6TJPXWfCS7bVaxxMBR8db",
  "key25": "2sh2cSy8GUXC4RpLVY3uqeSADTrvKngDroXezRgNYnjWQZevW5KfxUpP4E3xN3WN5RYwdyuoE4ysUywTGzweWA9w",
  "key26": "4NMCpMZyioG33kw7C26AQg9mdAAFVoM9TLcP7BaUz8NvmqFCwiDQgN9mxehZ49hoDgU1FQ2V9vGpZN7gCKh8syKp",
  "key27": "2iHA3RHhNVdgQwrCz9C4d2E2bF2DWsQbrwdDEcvWAE3NjKzqMyJj3xSGgrT8BLJBVa88rscdtzET9MZpsWXcoqMJ",
  "key28": "J7n121tF7GWhD71mBd6QGR21EUDxvYszKHf89zQpKkidaWweNtX6r4f19xNRTNMHTNywB8gtc9vByKMaGK6Epes",
  "key29": "4yyALRi4Xj11vm6LDTeLaLfD7aJRsFGBMh9qh3kNhyVtQRJ9FrsrRBubn1zipGWhiLBd3T48XQcbFCN1DkTLMmG8",
  "key30": "vjgPeL8CQdo1rhWKKFW3kn9HuEbWmy4ThVXvhnwG3thRUZGx6UG4pi8wUJsNPRajewaF2GeZMRE9auyrSVz1Zpy",
  "key31": "3Eki274QCzNaEY6i7K7mQRHufY5dTRi6DrqHfVXK4fzeBC5qJPSkcQHtYLXEM5YwhHPepjyr8wwEKr9viByjptZa",
  "key32": "5S8frhC42TjmSQNYRMeowNaa1J1A5NgQknWiu5J3wKuzF1RdUe4xi6d27SqUDr5whvJ34MFJ7Lo49XupDYBruBFm",
  "key33": "3NNC94YyGexQp2bTWnz4P6MEiodbj6CdDTY5Ry4UDKacBokY9SkKrcQmni1koxDHAKwBkmc9fD6m5b6Gr4BPbdLV",
  "key34": "5CwtxHwiddhMJQLNa6sMcYAeTD17nfMa2xGiv5nMZFX7Ud6685wagdDfyDrdzAUqB5AenpVf7wqHV4ifyuus7jzA",
  "key35": "8nv8cbW82FiKS6E5tx9zKzZkJNaFGyyrejzSewAZ6GSACDj6wz1ivHJcwH181g2XBoDXc2st4MturpB9bTokYrT",
  "key36": "5W9wDbxpj4GTv693zMzsRqXPfxJn1dfUhuC6JEtmTMcGmuYkMXTgTGJUVoF3WCKgRSeSgLyJ4Rcrg9r3JzPdvf2F"
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
