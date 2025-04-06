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
    "678C92zWqEN6DVGjEudQpPzxyWEJWtUSfe1uVVEWyHMTJo8woLdaZJJi2LFcrKcKSb5tLpNgXyFJdJ1QhbwhygN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "471owzFXU6DFa7JYeyMBzct18JRk6XcfrQNQabHdBYivvHBPxAxSYiJXZPgQ2V7PRCzgNBiRcG4tBKC3Mc55g6Ti",
  "key1": "4HvopZB1LBPq8HZXjPatpWJfUbvuBh2UrMxFMnUEQ8Mm3CmZMYkZoeT2bt6qyAt45evnpsALWoc4NmNTHwygngnF",
  "key2": "4E6y3eZ7TuBwEbBqRXD9gGRL9wivK8kpZDrJggGMcSpToNiR5SDsnKZFPCeNxsnHCnRWd1F8WeFLL2xj8JEXmGrr",
  "key3": "61UNVPBtuQnn8UxsWmtT1ebZb8NZwy1GpSfLW2XCRBkCbumbSNVs6TtnMbBHPL2PTjQ5g5DLARTAMsRUknC8XdHB",
  "key4": "5eEGod5QbWFEPP53FUQXF7M81AtQYrHzcFGVnagSFWpEbeB6iJMHLDd19Z36cEMigWWBuQMP9cPgv9Ws4PbveuSC",
  "key5": "2KJQejFBAxewXowKqwmcAFjEvKUjkxVxfPQwKLhvi7XzYmT7kiTLihaUbPXfHg25mQp6hrtDJg7yD2Gn9DBAyPoC",
  "key6": "BvnvukpwvcLHqA6SRNgKcEjNojy3iyxzzHK3aGG3PmkWVtVJjJRVNh2EjWXW2unCGwnqhPV5ptEG7eP2kUGkhqN",
  "key7": "4a7gNTzEns3zjrDMcNGPhDQqiiQXNaVZdFJYZpjogJ5BZyeWsy6BqVn8xGGckHyhXKE3UvGsW9wjt6FtEDMYxeR7",
  "key8": "5UBQtwHKvAoQSAoCKgFhqCvXHPncndwDktiZb3SdnyVGQmgVC31mjsibtMLr61py5q7DjaX6UTqVqKpUXN92n1pe",
  "key9": "22UBrUBMiAuy51jyujSBsX6TPKGFtpjMh3ahf3xiQa44F6MSSJDLp8oE6nv7H6Y6ydKS5pgMSDezpd7JkkU5Hft6",
  "key10": "5egDio2qZogBXFUM8YEr8pmdaQJTeBdmBVBLYQFNMXtCNbqnqypXagNNie6yzUSMHvcEz2rBfbkBCxKqRv6EBg6o",
  "key11": "dyaJx8Z9GPWTvXfCYiTucF6wrK3mL8u2K4kQAazGTLhB7Lfc555sHetturrRgqrWSXQy5JQHLKphf8DRbXeR7sp",
  "key12": "2f9RpGemiXaU4zERxoCAs8rx9iUP8TmBvRedQbx7LyHcaH1SxLT17X8Ex8idwWDBPWRdh5LagMariJfxFANVhXe7",
  "key13": "2ByKDcRZgTpRmsGfYR3jZRYrp8DoS2RL55P9nWSNEaWauyNs17Urq1sm61Lrax5mi9iSnydPz98QhzkbWjAF3mF2",
  "key14": "2pwJ7VDvWSSohJiKs62RjG3RHbdVxan7UmXqG5M9vDgJwJxfmQVh3Eacy38qw3Myp5vADSGMrp6weLdELshGQPP7",
  "key15": "ZD8CAAd7mFTcfeWiDigZZuWTNddQwhZ27HsCH5UsidaVAKomQk2xu8cPPVFcFTmizUcvRubF7V1CCNGnU69eKkn",
  "key16": "2nU868nqpqosXgHCa3NgEp1FvaTa8iH6G8S1T3KX2iP49gYFGDLmyPD946DaFSBEhFosA5MFpSBss2iFsHr7i4jb",
  "key17": "3Yf9JokeNWpdTt8Rt8nk5uDAdvCoNUdUkTHv7CrDC7KdAuXNXpxeo6pERDVi9aHYZxcq2kkdgT8JX3w1KafGoo3h",
  "key18": "3QnivLSGqDY17EW7JdXwEMkKg6ibuM9pJ6EcD3nXBW53GxYMXHsoLgUajvD2FrAwL3mfxwYxFpJ3LmkafuAW9jbt",
  "key19": "34YGSPauFstxrn8znd9FPrcrJj18m6qruR9LPF8KfTb1tkn4qnYx1wP5WSYMQzfsHndpZZFsXe984qpD5guyA6gC",
  "key20": "5EfP3V7GxRsHyD1iz9fsT7viSKcVJzTLsnypwFwbYT96GBp7pTxPsJ8AvLRsdc1pbntDBLuxemPH2bEq3NB7Zimx",
  "key21": "27VyhJgivVyEznqpHWnN53jPmuj65Af2QBFXAEWfQ2cPCBnZVzPJ76qdFc2PofQb8h9iWrhqe9q3xUagad79NK9t",
  "key22": "4bBEdiMmC4CinAFrr4khkSJfGYirUQQKZ5GRXoLiAoyD1qH1i36Y4mHoL647wTVT1QHv8qa6nTxWUxjpCrHaWptJ",
  "key23": "3mdaLh569kLCzCRjeUcjqsXnC59u79p7HWsHQtWeE95AozCTi4hrSC89zP9wUVkgkaVxvSFjVoRX2fKfjqEoVnLb",
  "key24": "4Bg7GpaBpBvPhLpy5D2zyEGdNwWRG1Cx9gvW6HJLdZ3WsCC8KKaLLqfSMykmqbooT9LqDBRqUfVue7LhgPy2HVbn",
  "key25": "5L9Z42ermuS8TcbNPkdwrZ6mNk18myuyTKHfVyqN963Qb5SFnWWjwPCcPn8FJJmJ4PnBdLEfZ5K9kGkQCs9aTfN9",
  "key26": "2JMTvqCX6piYhYM24ugRsk13odpxDmURPdvW2BuazDDevsPppSF1bZXk7gQ721nEW4mc17vzhJHZvWyKg3gUA2nd",
  "key27": "86PhK2nriGbzdLGV9F1vB99L5dwQrQocAWY1A5xT1X1dRrbA4yWCmeLNSETH5cCk3J5JCNP5LH46psv9yxnm9mR",
  "key28": "5pTfqEwgA4ShK4nnqaXHhfJaRcNwASYjUARYttjxiS4KhYYM5KrFAkSXt4ARCXyRDrt6ikNXJSVw6Woqn1NeAexj",
  "key29": "5WudknZimT4rJ1YxcHQTSm9daeLbqWjExfUYufVhL8uLYiLjRUUxysXaJiRindfApECUmHFdPSvGYef2T2e5GLBZ",
  "key30": "oyjp3nG4QxE4aqLMAx4H4hLPRMaNaCMNVyjp8kdY3R65EzsCsCz6Hxdm2t9yNEJqraosuNW3mM79der4qymVGKx",
  "key31": "28SDHPTy64ejVPUdnNLYHCfT9EnuxgBdNZV3PbyfoJLNppBUiUb25HbGnpZHsxdPM725cLvxajUvsFY5z8J68wCV",
  "key32": "3XDXgTzK7WFyjsPSWDgFuPQrUWmTGNtj7srd6ZZz3XUQxUnZ4R8d8PsdVtkWkWLco4m5AF3rx943vnZ7QPhAp3Tq"
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
