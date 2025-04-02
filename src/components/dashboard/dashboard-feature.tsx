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
    "5dkmc77uKKDkeM5naMgkDNzRmF9K2AMJ3tqS1SqwVCGrDZ9DpDk1FuGheNctApfJNiq2EZ7g2rEhL7Ay2pQDn6Ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9cZdbogJejsTR11JhGCAeaPvNx8o7FEW8ZrSoZh8zNC6sumGxcm7graJvtYKs7dXp4XuuZhRYQF7AjBYqU3Py2",
  "key1": "3jxMprJF4BZ4MXu1VVfrVLAsNt5nTfHUL1VRcEewRE6X1p1h9R4XmwKNyLAjFuPYmsrFA2P923XhPxDqSyqLL7Da",
  "key2": "5tbAKJkM7uEttNH9pCZgHh7qKnAsoDDHHp6m5HmjxMpFj9HZBvkAVBA7ujW5VARMZG6fZuQUH1UoCfkuwuboSha7",
  "key3": "oaziE5muMZvcdjTV6DnmMqivZDnAaLj8gDrhMeUXUEzME2ZcCkyrBhu9rBj7N1UDMRdUKoc3MeyfsdnBAUExGRT",
  "key4": "2Npwu4C2yf7ntbLJ8qjTQQv3RmdtM36SyBVhEK9tXzQAP2UcGzHgw98zgofBebXPu6B2vVBUxy1TY2NMw5URfrq3",
  "key5": "5bskHxT6vEm6WXRqiQkB7rHfHfhZGNRn4Q3L5HawtPNHZBxxts7V8pU9Dtx1aRFW94QFghFCDkMR2eJLwsdtriNn",
  "key6": "4RpxSMN23ghsF4Y5z347w6BnpoSnZZPa6G8EepCakaCw33bAuZS27Pw1EVYAB6SDpbU3E7NwcKn4xGgv1S4HRTd8",
  "key7": "2Tf1LHfUCsAZ7SsVTcUBPdo34st7r9Wz3qs7Txh7BRF1g1zuaMM7xcwRRqDLfyuGZq4VYsg1DEpr1Txobg7VsD3e",
  "key8": "4VBWt3rNi6DyDL3R2eGEeFyGD7LRvS3bcgARkp4iPtzjZtRsKfzx99hzLhN3VKUWS1nQRhEoqDGNKd4FVXFuWR3P",
  "key9": "5QiyydbQ9uCMiHYLGvuZg2Ab95NBh3yzJJHo8h3riTASsNpEFJ2bTKNiaUqNH9R72LyLiAfXLfhmnwB9hkamhnzw",
  "key10": "375RpuJbchsjyLSRvAZ4TiTXeMtYSBv9jv2KvSnjA9GFXvo3hbq9Hdpn8j9Go1y6dh5rntAzrDcLKPgCSFxmkLE7",
  "key11": "3YeMahkefPqMashxkHjDUUc2TuKhuD9bWN9hrdFJ6HSxcWrYeJ33irkXyAjCVg4YdBWhKjSH8pFzqU8vsmXb5wrm",
  "key12": "44xwwJ587VRiun6KenbXBYuyqE92SD8dTSpnZHCf5EH1G4UywkrobRCJXQUErsCXFLsqEUbDU25Cc37XJrSqzDSf",
  "key13": "33nUN7q2SutH6eDEvyvVo1PWCoo8onUwfn2NcVxqWwYZ7VpyAcrJ2qSGboLaVvpYiH13keUYtC4h3YBYj9ABKuiv",
  "key14": "2a5K3qJU7N9agPKFSaALkq35deetbyn5kUciemNceVM9cGMLYYJSeCCmwsbtCa8t9F4eH6xYpTQkxw5QE2Pi49yY",
  "key15": "34gTVvRdrWBiTNEvHeBmap2ryHLUwUxKS6LpNixTXrP982F9aQkyEigBfXxWSogvc2SSu1X2iLU1xk3K5rhi5V7X",
  "key16": "5H2JcVkt5f1nKxVvG8QEid1XVqapeSzyzWFnoSjzcyXCNBWENZR9aTbwkmTFdZTdkie1Zw445VjGvCXSfdgyUqYg",
  "key17": "UMrFzcqHuXpfzgeX6YF11XEQyUuDGvVEiGQWMGV6pTHFC9fkki7EaatiFfQETEnMchAUdAnj1uX5C6KrKngL8qQ",
  "key18": "2mnehCtam5eKXNXzLeVJurjcSFBagb34XnwMjWM6f28r3Ke3kADLJjME1nv9FA3GMiRDGYv33SRbMg5kBTwf84vQ",
  "key19": "5LwHJGMuGpiW5NAgv2pJK7wHrQuYLuLd4gw3Zf4e2DvTrtotojDSmfbPJ7n5kEqMgRnw2PPy4oqqKw2U9Q1e2DBD",
  "key20": "4uFs8U1knWPYSuPVDFXptycVXGP3x8fKnWu3cnEDsv6HxTprrMXhd5q9L4SxG37sXdhN9VM3FghcwybJ8yxXCcH7",
  "key21": "1wqZQDA1dbVo3DB3GnJsuK73KkPyDSyEUGwXGxocsTu6wYTkM91D6TZe8SQUWKYwQt95y7EfHgB5x7Zx1zt5fof",
  "key22": "s69tmd4JQSt1ABfr8EQEYozCUVp6eeFzozPAHChUiv84Pz5GVuc38peuCFuxnmejwYrdrw8qPZ5PRptTPMgYPTn",
  "key23": "45c59ubQQzA7oVyrx6DcyUnYPKdAnq547zCcsbUt2VGAQdB2wRQtmuha1jafWFCGC58jbnNDXVdPQzSs7MfnYGVw",
  "key24": "BPECHuwaFPjgwjqrwVT9jA8yHNytzZefj9ehRnBVC6V9JUFPaM4cppHCVKb1HiZax7TyD1x1UmQsyA4FT9ikQtH",
  "key25": "5VYyEVMHYkAZp5okmWA4u5DLHCMhtboMGmMCCtpR1aFQMFXP8zypPCjrNhumcjZYAyMm9a9X8CschFeD5dwXUHUh",
  "key26": "uBDTNB97Hi2jvV625g4KrpW6JjQtAWXbLDcwb736bdTBMf5VYs9eHvR264edKqR2Ugr3YZ6LsG8CCSFwi9asDvZ"
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
