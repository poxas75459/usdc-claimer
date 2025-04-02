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
    "22eNDs8qBrKtD1b1SBvXZZJYZbypUaSJKvCHd2rf7eGvXooXWC28unEd5pWpbE8t6HbwvW2LDhzPFiKQnXJJ2P1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43c15srLdcBYN49yHqgZjLMNbodnnhnNaymvt3zeQxrQGCFXPyE4aCdCV7c1AwfftB4j8iMSFEPZKLuo5gGpWR9U",
  "key1": "25f7vHGWhyXtUZRs2fevvE6sdjZf1PZTdgPsSshgrgcHPVHhqjsbv72AEZAVzPxPFVLK9CkxHAUYYcS4M3N4k45T",
  "key2": "3c8r9MtznVTtkwvfwcoxKveQ6uGom47zDQrTxA6J22CzmVTx5g6xmoPrJpCr8VpiBpRnBvr1MpbEpkU57vDNdbuo",
  "key3": "5v1CKLSNpw96nm9rTe3inyG3kMnnEE92j5ZP2GXskB1g6GyQQU7AebKBvWZTqQu9B15THX7BJLwMxo59jDGW5Dgn",
  "key4": "55RsMA8jVRjeQ1R9ZATUHgNz3NaqKq9hMDfdHF8upao6tFJbTKU5DnrsfMtFwGyLw2ueQzAypLxivq6X6r3wfny8",
  "key5": "2eTSiE9eGMKygRfMbTrivmzPyeZ6eA4nmFQBVuGFWYA3CbqWBmCAN88AVXMTvvQfwyXxmuFUfZPYkjcSFMUoD13u",
  "key6": "54TW2wPgpc5XbxAxj7TyWHmuvzY9ASdEsTebLFtgAYC5Zba17fmzVa1GQDNKrzErRqBCxF13h3DkPQPoYcyr5ZaQ",
  "key7": "2Lj5pJp2WZY2NHTMJpqB1ehoX4R5EJUtqw5eCUfvKLBr7QJxuv2J2n4i92zLKx2cfQhqnJBWZ7y8eTkzknTrE1q6",
  "key8": "3AevS8AVt4Mhy8VMyXarVSKzQ9enpZ8CD9KoHjiCHhvK1acpUkYB5QgAMJ5edgRBSfoq5kmGXxC7tqU7XobXQiv6",
  "key9": "xC9nMDCbJ3FUuqGe45QTMCixY1kzvaukPxiePXzdu4hkQYHCd1rx29hynonphqbLffGQVM7oaDdXobWth3UZZWQ",
  "key10": "35nST8ykCk3sGMhe8PFDoCCuGFQ9WpuH9GombJdoVi3oZnN2THdhv3fjmSRffKS92cEMdjqvTDKjqrkoAMjYyMC",
  "key11": "2f72mqSYfzrG46Xg9iN8rQsBDVUoWzZKm6FU3RdkLLUy4FKTB2JT7rtotRK3NEdV5EztZt2zrQkmYweLybNt1KdG",
  "key12": "5t7pMEL1QfB6MVHUABZatWNKukEeZfVWpb4QTBC7YFqgwadVLGrJWN3tC6FFzckZKBmV4GDzn58c5jgyMHWuSd28",
  "key13": "3z1Ztp5rG2eUoK4RWzPzB4jJPRDSVXUkpsBaK4TDCeaDjBnENRzmc8j2ZhUmSVLUYST4tpLb7oZCichmW7d6FBV9",
  "key14": "5pYX7nzqs1Cz8V227e5g7rNZAkw6C4AbHTMGStqpEM4PGX83mUMgcfhoxDEt9szjYx4r4brbyjbGypdMh9GEFHRC",
  "key15": "bTho4an4BD8y6m9eKW3qtwgkrudrJ9xTNKDceA4LBDq5TAQ7UUwxRZoibQbRy5a84AzKKMSw8PSCcDKozBGAqky",
  "key16": "5GoDC7VDEzvFcBGtvsvpQujeAAJibHESGm2zKUKirtrFW1i7G5C2cXFkG24x3KZXnCa3ZEffzeSKTdZrAVMy1ehS",
  "key17": "4RX6qWuP4SkgfULLrBhDsP6QDrtN87fDuFhT6juq41goYnJvrbqvXAfCs5GeD3D5GPpG2F3UCT3TbSvmSs2FztMJ",
  "key18": "3fPCaMkifNNnPUh4K9enZpyckYrsy65yyPDYSUVNi7q5Wny16dFB1HwUhnCrd4QQmHLUC8pS5RCarbRE9S8dZfvT",
  "key19": "4QnRoetkajt9GCS1bVcJE6zMTU2xup9eVfSqawqPeeFMezzGURqVbP9bWdh43BPiivs8z4hpD1SZvquvK3kktcKJ",
  "key20": "3B3ec1VGUmDSZbUwVZMgcCzmacfEbRoeWaZZxnGZgqC93fgb9PSUMNtYZ2dgm4YKPAKQwc5hFDyEke1bqkxUf72m",
  "key21": "5WKXAw6WLe85JbLgjyTSixuh37Us9BDuFCoSh1tps1QZF83TnEeFiBUS2t1jV36cHTeExAzHjqM4c5LvHMrh58sk",
  "key22": "5oAWUWT6mnLnRGVqk9HnkuRiKMPWfH9xuQUTXNwJbZjeHqCjTzWh92wxDu6eEWph8EfJvLkGU57emc8UTzcCEznf",
  "key23": "YZMYkVgDB2XPi9N1XKXbNxMXkqiBkj5r9Y9uqnijsoSqzzSGmApyq7FuSCXNmxwyN9gfGRiUieYRCvbRzxFWrdB",
  "key24": "2mV4w8Sk8S7XRuzp1weSUgngvoZ68W4znXH3XzMfC1NtHBKWqg8VJe4qyLphkw1cu9Vci458qXGe3M2tkXq9SiP7",
  "key25": "2zpwnVhC9EbevpY9y1m428jRdBqzZduZ5aNE9N5MauDWGbokufUvWxW4PdtZrgWdpqyXHnY5Qxxjf9gBa4TKGmon",
  "key26": "3mFxNwwWokSgZGG5u6kgzc2FrK5HqSDBDefFmdqb51ELFdE6tY9QHJn7eArYLuuYW4RaqsVc6Gr6qJwvQb7SVw42",
  "key27": "3d3TZcNqXJF9uKx7uK7zybcHS5FA14Pedr5wa7m57dyRp1x88SfcdkWTT2Bqks2b4aBo44vi2eHkDrSghHyERwes",
  "key28": "3XfyHK7xdmH87xA3U9JVoq9njLpf6aqfHqtjSy36oqbPxyVNxCFcJRemhwtQ3nUb8XXwqYWDXhN8eJtYkvdixX6C",
  "key29": "5ScnW84MXpHiA7NJLAVZ4v1mNQkBUTTpEvyxfjJxYuZx31uBh8jhXddmQV8keEV4V6kdD8nHkuVziJUQMmLybeDd",
  "key30": "4MqYhhQiTuqV92M4YWwGC2fACGxnvdHGVk8Q8CtT3Dq29Va9LMvrNa9ZcqtStjLnEk2Zm91oz683QzHSpDmNznzL",
  "key31": "PDMcwmBPb2XLZZsKgCkLpcUvyF29bL3auHDzZowxPQXE4DFzVHxsLJYsgmfiMP6WLaMofJrs4AbTR6C1tbfbspa",
  "key32": "66zDy3UaTQ9LPW5i9t6fNTNAXFNm3L3MEHRTWi6YokB8CSZk7xzGvjNovbtU51B6TiQp6n4zToaDgB3YmWoJZuA6",
  "key33": "vQAePTiJ6EFJdzZZxB9uW95yfgpCuzo7ynziH8cSFNajWgnokcFYjS9ixMDXSBvzCyWWbfHQTgLdmFiSpSrVqYz",
  "key34": "21rYFSL6YebRXeL6zmuXuu7mrm2X8oJLPftypD9obRmXq96WweR27oU79fHgfBxrXrWsxpehdeJRRS2MJHL8wApb",
  "key35": "4a9dCc1EHrmjGD4KTR8ALukqce44w9F9wqoiVqESVC7soPdjDwGzg1PibXwH9VZqAUcF9rtsVudRuhvx86PVRFH5",
  "key36": "5qZbPpbxFoafy1iynchvieid6PN59Gnk74L9uXLoY2eCYvjpQNbubW4w77iJcnyQ1teyeXXcHmixg8EdRAKicD2c",
  "key37": "2JtXz7paTFd4Y3JuMw8yBA9Ri7n7U3MfqJMeE9HRgncLL5hBvhzxQkyw2CGTiiaznWhC2cehLBa1aqx1x6p1m2FD",
  "key38": "36fokpB2sPGsFRbmeL9pbWL5ZNbgKeNTUHPJegS4UCAnbczmgCSygPHoE4ptmrp6z7F4bSgtRrrkqxyZu8gC2xGy"
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
