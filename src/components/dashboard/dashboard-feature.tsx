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
    "cXBQhhf99py5RQXPbofFURZ6s6X98dedahRNBDkh2autGonfcu9qS7E5rinzUZv2mJdfqQqygevmWtsyHCctYRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fA38AEDX1ErrSVpVErM2w3YjQaiHDos6pgVXmHXkUwfWhXtu1dikszD9tvTj1UFa8zWTVWDnPurYwCpyCjqPJ4T",
  "key1": "hNhE557rJppxuCZmXhJ2TYXGXx2SKjmud77YzCoAcpaE8CbxuWrVeNSdoEqAV4mcVHNMB6Yrj4pP36rFBBwCgZ5",
  "key2": "4yRC3qfPoGvGnPgqHmkVG1C3DsHSfijdAtD1qTy4MEJMmwJ3uaQgCRc46PmMK9XrMq2tirs1i5qkpfQ2d1v7Sgv2",
  "key3": "5UYa8eRutNzRAwL349VFUFB7hgMnfcUQaTZvPVp2rVfQiwPSujdwisTcvMJYK7KM4qLJGagwCst8rKpSqKaRC7Xi",
  "key4": "4fUcVo3ohh8b1FbV1oiydrdBxU82zYjLd8xuBYZqB4R2p2S5Q8yuXtN57wovqJmhc1EXoDqro7rAufSjyvey9WLH",
  "key5": "3Zzt4wSrpjaHs9eDpazT1QNoa4gwgFHBY5uFEVZipRV3v5JNgerNKnyAhXdKZugHBMxjri5KZzMPcP8eRDGFnyat",
  "key6": "R6piDskm2dgmBNW7pc7wFipeDTAEfPpoasePAvsStdSVZ4XXaC191YGhrrB9if2QYS6rN4An1ooUZUXrqjvYcNU",
  "key7": "5uBgg3DMCkWUpq2NYTicajgdxAWvmc7kzRQDj3Tyv5WHMYwJsrpKPDorZoefhQeUscauKbJ254tJrm5t7MbQKZ9z",
  "key8": "2nHL7Sf8tyvMBrWYwUcmMv3UGwnF6FpkpueZe4FsCjRYNnb1epCpRW3sw5Cqgfa2JdCfaQHhMJ2WYePi82SzrrjC",
  "key9": "4mDdSrqLnLjt5b8JSWMBEWKZ4TkhNFgvPxgxUTR8bqSS4E45zWjDcoydCb1x4RMTXmi54Hf3GnBMV8vvx5mcCqcr",
  "key10": "4UmgEoSEAJ29TMk4yi4ecxdUbDew89St3jFU3e8k3gJPjY1yAMqpeutKE4T6GKKR1XHhakrQb4syx1BixigDfRBf",
  "key11": "3WYo7y33SKfXB6MDanyaWRw8SwCyPC97ihE2ctm1b3BTsoQsd5vYWbQ8AvJMGSNk96FVdFe6sXZFWfXN3JnEBDFm",
  "key12": "5zsxUzY7K76nHA8wsEKXTTMgJJ3WCcwVy7dfF3kVZ6jxuJ6MVv9nDJEy98sMX8JdB19GB7Un4RD2EGv2fGMqrben",
  "key13": "323p5Era8vYZZDWPHzttSLNi8Fnbw3pkZtvDEb5QFBbVZXiX9XmYiJya5VNmdCHCXQ3mTz6KWSAF8TqCdvX5Hpr6",
  "key14": "39ZydSexG5uhwMJodTb2p9mcXRoJfgsQSf4ei8THujF78uaRWWmKsbzZiTf4MGhZY3auuAbf6FNdyVh7tMbbtxVH",
  "key15": "5e2gSPjNZWuWzcQzj7J6VPxJtkUfuiSVxihQ6KiaUqhzCG5VDq8y4t6jfDNLxKRzUtyYCkAe3prfF49L5wD16s86",
  "key16": "4ppdtmzgnp2yPvuGswo8XkY1gi36nJBTqPKvPrKpmGJabYe82c3czqKwTopCLKXeQDfmYubSb7bn7K9coxCkRY8b",
  "key17": "5jqnwtuCYN2xMoE6E4f98bFD3jBCfuKiaQhtitE7AZUAvG7p5Z7JLk2aEpQMEFJ5Y6ZTundKNqnJRBABEU9VhVg4",
  "key18": "5SAPpFdiQDy9gNABJfdExN2ZKLYkHd8Qo4az1sUxn5j61JZHnTLvwiYd8V6g84YdPVX7BxxD3Wx4W2JjWi2zpQSy",
  "key19": "5harbRkrvkBFC6yXWmF2Y3V3gBMM3okqCAHwsdAucxZYi2RAkHudG8xobhccfBzKtzEDakXdVh8jTfQJSUET1yii",
  "key20": "xaTN6rwGfAx53B8J3ZRyVwaU9wLPRJNnxmEfxdK1oQM9HDT7mwWLkcaVhGSYLfAwTfcJtYvSnk4kQBxQt6BUBpq",
  "key21": "NrBdF2nDnB2w1v6cAPyB1G95vP9voX6kckTRN2MyuamG2qcZ8UD8SbJp4a7MDsHDucaiXxh3aAYiU8bL5ShX8fn",
  "key22": "3HBqrY8b9jSvRJQKAFXa72XRfvbkTRfxNqKtGUVgToF7kkizYaCXbTeesxYMU6N9AwKWWYb9wbJ3TsLZZjcLuSuQ",
  "key23": "2Yya7tRA7FT88vDjAgV3p5GZCvixBNB69S4DfT1U9nezBPBsWGpHVHWkMCimQJjhHJXZ6aN6MXDQHp29zamMxp8Q",
  "key24": "nFEvn5f782rYCbgJ7w3UwEfWtrKbQGdN83rrCn2jBwMPWjwhC4hcf9bJztCUCWbJt9cUBANgF8Ci5Z3YyodHzfR",
  "key25": "21DHgd36tbEf3yRYx4kNutgTc3BLRrFuxzcbTBPzKkeDsNkSb1QpjyDhAAkeu92xyAbHTW23VrrLgvBkJWDoJyXS",
  "key26": "3gQT5BQ7Bc9fXaEtbFf6BnuHooFhRUduNvGDPuwrZRpQTovb7p71rX5k1cXwi8ckzXkM7zBAePw1mfwp7SZeFmXd",
  "key27": "2o6dWG793VWFNL2QHR1N7SaF3QRhufk5p3TDrUwUzb8TMaU2sNMAH4wGcRzG37vMqamHDhCfU3C9rpTgmJpBiNjn",
  "key28": "2HTV13R4DK8UuJyV5bmY8j7F6urrYxUCZQvJoHSNrLybkkxBQdxArZ1RVdwKcXYsbvAZ4A4pAgcVc2edyBHy8y4W",
  "key29": "21Fr8JFGd5uDQYuV4k7fyriqNLiPnWm4UT4PsMkJtSdpvy6UuGdVHesoL4e3E6YpjoZnms6kheHntFiGZiviVDuq",
  "key30": "yhdn5dAB1GLDQnH8uwLDpet74kYpwD2svRj9MmNsfZ7sZbc1fS7MY4ppYLa6diiybebC88NcX6SKKjaQXoKF9PV",
  "key31": "4nudVknisMfEvzUHx4mhazfuH4svYV2V5JMFR8VT4faq9VTHxWc9LnZVSBXJG5gPYhkEx5ieCM2z3MfXryYnnMXT",
  "key32": "61PNDW2RzuYXhU49qZEiErbVK4hHqb2TvNLUuw4AeUhSguMbDt8yveenCEwVDvbpx7NhD4NYF3jcxbXGChziZ8M2"
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
