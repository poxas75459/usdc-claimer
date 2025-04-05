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
    "rZp6s1QAgEy1dXWLKxtu5gA8jdrtfAngx2nd56uUqG3o9kBsWy7TVcs5L1aNyJVSSKqngSYXfiyyQ54NLt29ji1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQjxB4p3Z8xg2bdPTHhLymiK3Vu3PQwKYCVhmDSMMPHYkP3e56ZaTHv5MMauBWBNgAcdYXY1KMdrs2LKzjRH7ed",
  "key1": "4G4V81YAk42hvmsMv3UdhsWXmpA2Ma29EtAS1SoemubxKMuLRziWfgBUb86raiqxAuedftn7nWJgbBnU72aLv5v9",
  "key2": "5BU1A3ZJ5n6k8SZJ1JbNNuZF7Ta71CG3JHeBjgHJkwPMtJUshyZpX6xWujb7r8GXwbmamSZMTGhoPEHDbFqKE4F",
  "key3": "3273z8etS8VZ5j6HjVr8cVcUyoqPC8hmciNVsSGL4K8tDFtrwXJ58YAEUPgBhyNUts4nHTFre9K3v4JSrgHcWRbw",
  "key4": "2iUNWH3tgsb1ejhckvbK6vsthYVxFKaFUaB2i77kCPt62sFmWkViXWCxTVuhe8xAoFG8AGZ7HJWtSQnmKdHoBYZz",
  "key5": "5cRAukXtbyGjstp1XnBjGqLWMveKQV6a9RJNaSvBfkBYz3uecWM4NeFg5jMt2tUx1d4Efz34BV3zEqQi2a94aSw3",
  "key6": "3FxNBat9CEVD66r5DqjjUdXAjoqaaoCFr9ANFjYjFkqnEweakGZ3c8TWbTZ1hSXkS7bufncHqjZcUG3yyhWupzY8",
  "key7": "2pcSUqoxK5Fu2S3VFLNqNwAwYEGF5FAdwBa5nAmVqPM7kLR7B5nDgFwPwbTqnfcCjLnf3sCvG1zcVeqpwi1UJUGK",
  "key8": "4RxvprWRuARVJFfKPXqMWZgEZpV8TjVjck91SmTakL4GES7N7azmQ83tcTmdFQiccT9RsqKwkHbFX7VmnJ4mjVKw",
  "key9": "61F71aeriTxsKr2DRJ5zR3BhfD2Hi9sm3uws7kLWdfAvaZKADtnyhviDqXn7XUR3vD92qkBjs9k5KRVxTdkHhi9G",
  "key10": "3fUGjHvyox3E9E6UfwGbQbaJMcuk6ZNCN1XqnBTN1KdYu3tCfzpZEk7aHMFQmgguzEkr1SiqVcGoj9E5zvJqqT3M",
  "key11": "3aKzHhcBXhQveF2VyzmuDBDmobLqJXL7h5Jq6rX9AZmBbfDFQqt2cepPBH49kHRhLC5QxbMwKCpbNsV1atDVJTtW",
  "key12": "1XvL1KmhQxqHwEqjPKwk4jzCs7PwkCXSa8DrLBvA4XtWf3R9WY1sG9b4hSsBJKQ4YNudXGFXWLHwAaMjZkLkBFp",
  "key13": "2qG5ww2D18M4KgcSuTNDAWBa2HSwYxeccVpqgPMdUL8L6dQKLojNgT72U9KbGPugzHQ4szvQpanJwrGt383Ggu1N",
  "key14": "QMHgfyMUqbK7h3g6mRpswMr7zFbUY1qmyALJCB4YWLZt3793hJqnGybcvA9C4Fb6bE9GdWj84DKqd75TyiGZbB7",
  "key15": "273TtHNuC9cLpopdfE8Y7QPHBYrQ7t6Lm7nQ25aSTZ6bxuGBcVXbm3pMU3L9Mqjn33bZMfYf1EsvHW3bBdYp8rby",
  "key16": "35e8opcSk5Zfr4HUqHxADwCts54UeWzU1pm5LmCi47HFnUEo9SqzT2S6VYyPNH7cBuWsAu3NjNhczPe9hBcSqBwX",
  "key17": "4bpXLyqPzbF3QN9U3qQqh8i4BKJ837NUeyHAP6UUZvYytxyjx8oxfRCeBUk3J2HowQ64CJYuBrc4y94BWYX3SDkd",
  "key18": "tNTzLiMXwwFMgh3Nfwc6CJpFxGaMGicZJYF7QS7sUXNsJEtsLBVsbL5JcFgqpAANC1ZkEohawo8112kDX8TXpgD",
  "key19": "121rvNB8y9J3Y5D6nmSyfE96akkYUWB8GKJY3CGZZJHheWg6GTbBmCKiRG75M69kMVLsc9ttJ7SjVJL7pL5nDX7b",
  "key20": "5GLHP6xysnJ8xsNCURF9F1raWnuo6rhRyAVwZSr85eQMcqyG5JEjwMxGNXG7ZTyQVEQ3rtroYCPbF47HeV2jY4xo",
  "key21": "NC4tsC6a4VMDQMNtnBJDRrxix9nsEJ9aDa94H3xCLdRRBXQqSTKTv1BiFjeBKNyw31m8kXafiuxZPkYUgGEAyGU",
  "key22": "bhfhiNew1UCmhv8jijWhpocwN8D7GgJM7kYt6xfhVAM6Ei1iSd1B4dp9z7NuF9DdpmDvXo2CnxWBBgVSK4eeqxv",
  "key23": "4BNn8BsasQYUs9CxQpsv1SqLcmB7EevR3M1P7Qr3kpXCZ5gPLf7SxUQKMvqMTPsuNkN2rhRM9dPGmBQFJpuhsuzt",
  "key24": "239x85gdh6Tihh8FA39nBbt1BtUZoidcrNa4XTTDKKNZdLHMMvrvuitzoFMQuPVpFiwRcUo9pNnho1piS3vbViNV",
  "key25": "2Wwv1enmQrsmrKt4ACQ7VughxFUKbmAf7TjUhcNfoKN9XGHqo9X9CRsUd6zMNu2Mo4n7sdahNfYZGdM54y7WwEYt",
  "key26": "2zqH29MwbYyx3UR2tYCpPno3Svm8Mwi8W3kpvaHjVHbV5n8g9Eyqc2tEkjzueU1zuNS63HM7rLjb82TSSApp7fCh",
  "key27": "ZMHTUrw5LN46teCUr9APm7SuvFfuTicJ1oic2sUStEj2gDXaimB3R6y2JPGxHn9GxrpKWpmujfWmkR2DfjoWgwH",
  "key28": "4FrYADZdCBVMjS6Bypn7o68wiV5bLuLD9CJkXgrPLFiUJwi7SefhAuUvDgRNrdiyrLfwm8odKxtyFcsSnQj6KdWw"
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
