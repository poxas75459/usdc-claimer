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
    "5AdgLPZRuaoW43sYnKKQM9esKi7gAn2bA2F7quZ8WXgGuoCFsY3RwBJn9FWYTNoR64nZ9xxfdeV51Ax1xPLgsgpn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HvfGNBKUf5XwbNCcBbP4ypzaQgx9pRMnKNmw73MYBLwCRuEbQ8iGi7pXUmz5C7vbnLCTUjjeVPDCFeffVJboHxR",
  "key1": "68LJf1gB4PeVtM8CzJ2PJsnga6rNn5cw8wKFxHvxph8FqfGiN2M1nrb7uQMyULs8rpnYYqx45ebVrU9PgxX61dA",
  "key2": "3ei1arA9Pbt8TeuZ8jiXjZvsw3Jj58QME3f7x29TzamS31cTGa6ZwAeMeCmtL36dxnFrkq2Cpdb3DFmyDzsS4Gvd",
  "key3": "3HR5Fonzyz9hbHsNntwddzzAo3MGJvLtX55fvQVPeNb4aWascmd1poSQRNU6N3Q4T5fx96SsHFkjkd8dP3dmCmjH",
  "key4": "4LNAGwFV3hjwToRrrKruL4rYfuUuccBUq2ubaEt4PKSxXuhPTfs9VontjoRyVhiLibiuKWgpSWctwyfXEPGe7rVe",
  "key5": "57mgZrqJyxp4FWLzeQDbsNXXLiRpW78g69GbAarAmpxN5jTCL7z1NnACj1XdXF9KmGVHq4Nr2ucN9DQBG5xg4KwG",
  "key6": "2N7MXi7DDmFtJ7uM4DAEWV89xHL9op5p1pBDXVeMWM2ekcPiopQXQz6dudVsiC7WKPF6ukmg2LuX6hZby68Ldxg",
  "key7": "5S6Nubt8w1VE27YW8HZPropm3ic9KKHqtHbf9oz7mPyhrcuu6CZpgkGMEU3Jq5h85S93fMyuRfX2ocFVgJ4KSRmQ",
  "key8": "4DWh5tUbaJaHvMX3zFod5gNnepoWpVux6JpmyWkXGRNqBswBRk9eXte7kFzNw5jkycGrx9Ptr6vWTC772xXM4mj6",
  "key9": "2PR13g7JRpiaqePLVYRtvoUeh4t6qcgMfvq9GexqpCNNCaD34ChZu2miWbPdNkCR1T3Ex1p9sGQtT7tc3tfyabHj",
  "key10": "4ZViNiuRG2wcCYycEJRpUyoCMCS73iae7ibbH99VRVSEfSZs32qHqki2irdXmi2rkQadzefkNjasPSSwpMw9wqGm",
  "key11": "2ZdqyteNdoYa23CX8kwdKZeHN8YpsUVwDvyxZ1scQYSaMS6b9mRbiS5RTrgVvnFhwdgH6CMMocCeFM1M1uJr7pji",
  "key12": "58ZBpa8JpYRrabBc1N5RHQcodRtE6FjE3vLjDwWkR27ZQFD6vw18jWTMoV7ZdrTgbPw91Y7h4DXzSvkUPzgCFc2W",
  "key13": "4M7YrTQqHJ3Yv3dkPCfjqbFxhoKS1Ci7GgeJAJmf3QVJPoLPxWfG1umqcgMxe89d4zdmqypFn1FrxGeTtGssh4h2",
  "key14": "2W1PCB3i3RBnMmsiYPyYtFNU9p1SoG3AzU66cdRUBF8m3H4q1xDQyj2SpodiKwd2XDxtWk6cy63bJGtqxZRaCH8t",
  "key15": "4hLtaSaCfjjzV5XYZA2KMrqjRRYPy8ai6dFSDU98hZMmTuRSg9q4EVXsMxZMHz1BCKrZFM4zH4mHCiU9vXaZFhBp",
  "key16": "5K3jxGQYfXRz1nULxRGMRgR3RQgfXbd4krVsG4tgLpFSUo1D29yAeJ4hA7k7Sh2V9tMprCisDiiozvTeowgW3enD",
  "key17": "5eQyJMnyE4jKjoy3w3n4uwxkyggvnGnuJUnwVtTnmLhJMBqxkgFX1RxcWkunrbrhio49xoBCRv4U8xX72KFg5X4s",
  "key18": "4GuhovGh3AEcWBZAUMXCGwWMwZWpA78kujJeBNWtCYbGJhSAvUab5obw9t8Td2dMgGDN8AYCNWYzvHBEBv65EtWj",
  "key19": "3yo4QsQnB2ZZHKhSagicaUUhVxa1Hznevt931ibMeur2t7ERL7k63robYt1cvxLk8BRXzxu1iNkQVDpenH2v28ET",
  "key20": "NGiAwDLznisWwXxJTdeGCXCyynQ86cUB4fM85r5hJUVFphMUjeJY7YxnWAit4XJFu3ubmvbcWKLMcqnTa5SET6Y",
  "key21": "29grVJASeyX51VxQ9FPKCr5M8nrFqF6DCct6BFown2MLWwdnaQvcmZN3jmQPmZMS8CFHNieJhamgmyWS7MZxVWEL",
  "key22": "22dCSyuRghTN7h875S4SS8ETxR8ky99W8hQPKkaXa1WjgdPdpNHztD8EYWwUVYQKMyXEZNKrkVKhqycJcs3HZjBr",
  "key23": "5KBAxxcCi6RiUuWgCFApgGdsEYfDJCKxjfK2ssBrnWf67JvsesWTMnNve3T5exXmE3JWmFJHgLjtuZgaLt4maBrx",
  "key24": "3HVYiU8Km63ys5ZP1a6o8VG2PBrufaxBobb7UAptqDKQcCeds14iSrh8AZeQ165SqwNtb4fxr2BaJhVEC3njsUf3",
  "key25": "51MoP8dEFGNSkoa8PHq1ujUVkKj96RBA1unR4AGy1UwNpv1z3EQF2LjkMksYs5V6ucqN5A53yHU8kf4yZEfUvsWv",
  "key26": "2esRBAcCVDGzqgV2Rd9jEu678CsaMb5TwgGX1zo9xpCBew3D8ET3deXao2J1otuTgf3oJNJLiB9RC411N9kAA8m6",
  "key27": "4w7S4nPe4gE7whXfsuUBB8Z1YxU6nG9CdPPWgHqvT1FKCjnVnL4SsnkN5oxPsMDgovJB5SFz71BsmciD3qMynH4d",
  "key28": "2tDijM9NYJXQGUarBHxCH7YCzAy2GA9ojkmojJA4FDD6YXC2jNFB1BuveSEeQ9y17fwdKbnh2cDFPQiieRhpHGMm",
  "key29": "snpM69kkkr7UvuNmBU6zCWCnzD7w5DM6LBb3zkRFd6EhHGb4LdfM9rwVKGWBPUFu7j5up1CY4rtjVsZ4YqaA3G4",
  "key30": "5MztemW4JwUjTFnrMfTJrWAb5Rawx4uBUd8q1bnQEmmYptoKbttw9ZRjHYy38Nbjk2N5RHAN6Wbjv5pZPHhFMf9T",
  "key31": "2e3gwN7nJKLN4ahq1Sve9hrRpmWdRwtzAbQebfhHLkXH6KdbCMv9buUKej1fPLTv2aiFviUnMbZ7FaSG5tbN6tAx",
  "key32": "suW9GNpkeV6thrZXs9YvRVdcChoCHy4i4UHksn2Eatbn2XebJpoE67XFEHsHKx3vNU51qKmoTzTwu4jogsCtuv8",
  "key33": "4P4S3iwcQSFPaxWR3NSmQ57H1DHd9iAqrgi8wR5bwq1r3VceGpJwoyKbq8tKfBzK9fV9bJ5AHmy9LKs42eGjCEbR",
  "key34": "3Dqj5UPCDBWQ7jfVLSUehPwwwAtsYTmWWwNgut6WCphMq8TZyb3iQC7xQBffGKxhyDxHCz9WMttnvPsLEeCeFVmv",
  "key35": "5DokaGadAtdMqdafn85wDXN42mmzFcLyJGqKpaDpScmjw9uDmXt8ykMDWw15CaVyFCQTcdp6tLmDmWm6xL5xMQEv",
  "key36": "35q3RuPiRqJSM3jcvSJhCYUJA6vQcMrNW95hrgzYpqvYkkK1xiaGGDKYwezLuvTCJatiGvNkvHvceLuysZWbGYDh",
  "key37": "4UbCcEboSKmsKvdSsFwYBNRkYsbBfAJF6y5vmhrW5B6HjAM7rswSb1uLfJSqNc5uYRbvNynqbGQPCY1Ji8gZcNbe",
  "key38": "5gndn4cTNam21yWmpZhGMGyYVyKnwsG1axdLVqvgbz42JKLDVfg65ToyMfdN2rnYgo1mYzTuYEstpmjn9wjVJ3Nk",
  "key39": "5mun5a5Ac9GYmbS9XN7vUBwxRpzFUvQDfvu6ASiJR4uoXyKkRgjggK8Ksqfuqnog4D7dUx7TLwbkChcYyVXX8qCJ",
  "key40": "5gmKASJek23bjxz9XuUGjtZY5vUvwNvBpxQDxJE9sy3UJayAv1fTwTiB4EN6YN41KWAtcTNnpiw5SCQbcaWaJvh7"
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
