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
    "WteHPpKrATtPzouTVeDv5mkLqq6UnBjVQ3fsy813hPv8BhrmBtD7HmtpHuNms62cPZgtc4mLBWjx2SHoUiPc3M2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jL4d8jRJcXgV4G7r9YXYKAyCeQ1mfBnYpDgMzz4qf3vM268KXJMc6BiptyptyWAWbYFnVYs4PJoGqMGVUXiFyLV",
  "key1": "2ykFL36Ni8n7zqeewgaJpBZiXo7944ZWowjF3wbDtMuEKt6PdWynt7Yyb6bNajvP5sFRjyShHVQvLnvkTsYWHFDr",
  "key2": "3RDrDcNA1FFyz4ZF8Y3GpbTQqdq52jEws3phRxMBJyfUMAzWpLrBrHGd31ArqTti9p7BrtCRirbedyiEHykbDuZ2",
  "key3": "65PWvoSvmvkgx6aBRth4nTE9mkPobDPsAjtNmZBbE6gayP6ibw3ue43jrgNPDZ6oBPXekS1UsLzJUzhz6ZwjXbwZ",
  "key4": "3KyVZFHJU2m628tuUtDp9aiHXE7jmaSZfpvfsEdhLrNsf8vQBezfGdMWoBA1uGHifThawehstwAHmRdktKvmBhiJ",
  "key5": "44CpsWa1uUMrNuWSuWvSo5WV4h77bRbE1g8gzo5x7fKzH4XijbdnTDPd5Jx4DuQPLRrFHkBEAmWqTAzDZr1xZQ5B",
  "key6": "2wMgfwuG1CucHRu7tdBpif1oAfdMDrYrhwYL5io6wYExDAeehHmxW96wueAMXehnazwnfmk2Z3YPEZdhZaSj3QDF",
  "key7": "3CcPmT1DbGRV1ZEKm1iy6Fr66ZtwQp71sTZE8NWoY5pjD9BcDTSCD64VKksyumoKQ9mFmdik6E5DQV5fuZacU7gJ",
  "key8": "4962quUZptAEunZg9NFY9zPTf8A7GSnpLZV8e6FKDgfJ65j4yDjTBnPgtor1VeymJP7NxjCdJZEHJ4WBhAZ6rT2h",
  "key9": "63mZCF9r4MgXLRL3TQSJaSbSAF6nGRuwgDbA4TSH4YbNLgutM8eXHQ912tC1BjSyHD75v3M5EBZNYQn7A68j3WbV",
  "key10": "5nHDwwtQ4bYmwh7vouChBomLgtEcCHg59bFAf3cXikaqij9Hf6bvAKjcR9o1iYyxYudzxPBaJCrxtRoZSGrefXzF",
  "key11": "2jBPzJpjmgXyjpWWWjVtvmtTyXbBfDCDm5RnUviUagHhLjNTLmboUfrKFfwhcoa8h8zNCtw6dJRnJt1xszY9QqvA",
  "key12": "4PLyffazX4QAW6bnzHCfaX4HDPKQNrGXUFXYaCzkXo4B5VTNkYZPfMWhZkGs5TJk3kG3ge7ZN1V6HoYEqhG7JUb4",
  "key13": "5fvqd3dJgqP9ehyYE9JQKDjDWHSwUXateH2QFjm5sPmS7gJiiYaKmMJ93sGs5dMKGTSHn43qJqWj4z2yb3WhrnkR",
  "key14": "2Q4CS2Ahs3JpFKVKKbM1D8wMbHyzq2Y6dqrimH8me7yD7ZcBKQd85ihyrtaBanJGaFszQBDuLQHXNH7ckarGbTrX",
  "key15": "3c8WsufnMU9CXuvk4EqcXCzwLWJjCzBRdDXaCxZwUoiLBEYihw4T1MHUsmSJs6zien8yGZahNuNGGBXeMkJHp2ih",
  "key16": "3zhCA2jWUCf1XhHGQEUq8NAcAt3BadvQjDmBPuHVuUpwDxw8PHczTv9oeW1QHSGYknUEAD6ozWaA56PeAm1rwd5P",
  "key17": "4jcMuBZvk3DiE9a7f9BgQje9kU7Fbd4iNRdW1WmS4szDdMC3jS4MDMq4uDmzLe4RXdUVi3qUbmSWV9mGeSRcwUpT",
  "key18": "28MVpEgZGFp7WaJVdCgi8tHrUTc2bHeGYCCFH9WD3B9GmxGBoSHVk4JZmiaD8HRLARBDpMDxkEq4VXCBLmRwhja1",
  "key19": "JGnrgDnwj9ttZG4zTMz92ptMAmF38Ss8rVVWzs2nbzdv6gmDPAx2EweXd6br39T15thDPXkRHietp8zYvPPj7cH",
  "key20": "5ygeEKeEMorap2ZqdXP845aUDu9rYmqW4e2bHkjevBH3nQY8wbnJgjTSfqe5xRGcHMAAVoyTRLCtW3wjBADjJhPY",
  "key21": "oT7gofFBKMyWHbcYK3nAtXFoBG4hDWqpvJ4gJJwZVzkYJeXwLaCQ4JYY1Ar7RxbdpT8XjMba7kiYJsbDEjRcVKG",
  "key22": "mJCrqWdAE2xSzgEFJr7ej1UAdpm1mTTzswPoyErrC7j7huyasyPZrxAn3VchshAR2aWR2TQ4GXtUQ33qXC2o4iA",
  "key23": "LWAwmsmGt5kzwM9FvUX5ieSTTWC3mHWuagfrA6qMMkZwu7YGurexbaxdgR4sSx8HBFLuijSwqMmRveq4gfQWfro",
  "key24": "3uNebfsQ97CAYKvGEJWF77FctEoBY1KoKYxv3jPx1KkEtF9SPXi4EmMQSFtPN2Lzo6RjXBnCDeRN2NZ7QWxDtua3",
  "key25": "3KjGVkwXCjHkAXMZGRfb8NC3xuTMagdSS5NtCwvHT9SyYp4fJnvNNs4PxyP5awzApHBLUekggizEB7AtUJUB9Bi2",
  "key26": "VQCfKpqjEZLxRZWcnUxZs38yRh52tL19txSkThJm7f4RcommpBgW3NLV3TTo9aKazm8EH5MwS57r2pJpeTnzpa6",
  "key27": "3se1Au5LteHQa8JJF6Ffa2WuX3H2BSZhbzBkKXvueaxkoMm4veTG596TNV2vMbn1FM5YaxDZschDZZHGBat1U7a1",
  "key28": "63TAGut4td6TQNgZwEwGqkYMkFAKS7AreM4eGWR56qV9juwPgzHpRqsJ1T81SRsv3T33KvGmdWktoeG2giWBJXuj",
  "key29": "8rARTFh8qMi9zwr7NfScE9GJFJi2KxJGECX64LcYk6b196nac7hFuGeSQgBCLjRy6Ndm5Nmz2ucLA7mXSSEw328",
  "key30": "5SB6iudwHcxDUYMdAmyG4MupCr4zSTaGFidxb6756Bz9gS8xcQhW3SsSHFnmWAzq9ZWXNoweepQz3KPzMBkoKFcY",
  "key31": "62efcDbMt2vwMYds5VHKDf9xjeP2x9c69BzhMt8ibNz4XokKub26oX2zU1eSuMXguonyMAJpL5P6F3bpAFUB6QfU"
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
