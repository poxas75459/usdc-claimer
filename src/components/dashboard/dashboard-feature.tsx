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
    "k92oqFRK7ah1XHYiZ2wxirEKeT8FFZZd6LxqJEMCvuLpjxEqTUDBxa8qUgvxy4c114ne1HiN5s7QXRKaRJmEzya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4w5szTYfNBg5bGphMiFzaFrCwgELp2yKBwRpVsP2JkMpQT94ZSmb4mgwH1iy6kZQvPTxMxJbRpeQ5rFGytSwTQ",
  "key1": "AeyotngMcE6h5RmLrdiiEiGgJ7LHyRH9RbnsgcGNqvmokG3uCN76gozaZT5JEwqBz4J9J3PygehFEkJWBWo9gFw",
  "key2": "5L1kbQ7Q2XpzHbuiZAvqTP96yZp2VUSvYECHFeRk3CAcVK5V6g6hD2wdtqZjxGNKE52kgQ4BN7i6RQZSfQwuL5ig",
  "key3": "3jXcVV6Hqi9MAFzGhAMeDSY8G7ac2umiRe3YMVc4cj3UnSuhdNGLyRyfKjymjfggQ5EzzmspqKAMtT64rD3NDuAL",
  "key4": "ofCAh57poQr5ysNcFWNFctpivJtL83GCfEGUcccsX6CBJrPno4rem5E39tPa8fwws8gscZU4VFGDHZEkiMwKkgb",
  "key5": "5DSFAwdVRJJMjDstm6oEdwhFBkowKMtqzFCvwHjEsknbgwtM5g4XVfpPnoXGTUPgnGtT1DbnxxALYCAHc75iAS3r",
  "key6": "Y2a63wQhwSUwnpMMHCPEu1kA5LPRZrj2pgBa6f2y8R4D2HGLXzwFjdEQ3QYuFbTv1pZ7ht29FeGHk97JLymDJQ8",
  "key7": "92DPrNobmtuE6bZRweQCFZeMQkTf8VTMREpieVyfp4E1HumcdvehPU7e8UU34W9XP4YhTMvwtfanHQPVjBAPup5",
  "key8": "2UNpsgY9GhpfbZ7WMtussu5akhnM6wVebVhCBwF3Qws2SoeAyqHA6bBjYFqvLXyGi8dA6Rv5F4CTh9gDcx1cWvEo",
  "key9": "4Lhx6JG6aMAbZeJ4qk3Wjp2kQDrQSez7AkrCRmpEWHEb2jC2APRT16kAG7uszZ3Gf4WMsukAy7e9ySZRd7Qazd76",
  "key10": "EALGeM41b5Fvu25FY9sQph6G1U6Xyzpq8dptWeA3j7zhUvsqCbGFbR8jXfqC3ZXCDeFUBBQVmt9dcic13V6CyA6",
  "key11": "9SaeaPeHAZDu2Q1LPhdAbaNUZYYSQsQToKbW2DLHFNNpBjvcg6mdbDBCwymSzEENBPEJhQCR5Phq5XFujrnmpHg",
  "key12": "2kkqCR9RisnF2pnD5rgRMitAwomMySuYvquyfRDgwMiyZxREWkuAJtqTEUrqSUv5vkkUY8P2XEkkHVvBkAEZZ9c4",
  "key13": "5nunLc93ZVmT6dH4WfXUcLdhW9Bn5qH3tkW8DL1Knwr1KwLaen4mxtETUFj3TjGcrSbu4pbGCUKgFt3bzc4J8Swg",
  "key14": "4qEhTkbAmHH3EYjsj7QkDqcxWF8hGxtLBTLmRD1hSUtKAQ53GVbaEEi6L6qGcUWU5LwiSkGUU3dEkSRyg5nYiXTw",
  "key15": "4QHqwHBidd1Jc7ob8Zov7hFbEcZ5iZ2YfVr11obuMV4B3pQ2H3kHX8jSbimRLJHk8HVTRjX7gp6o3VuCVTpJvKZf",
  "key16": "2ZjV74vbYxxc4DaVwPDU6vwCGwG7498525yew7vHAG5VcSNUVf8DmgGgAg6oV2knN2iLSPGRSKWeD5zk4jEN538j",
  "key17": "3ufEg7nutYqKuXcg18An8Jx8Swyg5ZXaxpbXiJCPrkkmnanNZvhwjuS1GqFM7dr37VkMTq3fDhfYGL1W9crCdLmj",
  "key18": "5TNP5evy3vkJfw1cfmcgdX4qomMZYXk9Q3PACEB9sMmB9Fa6r6vGBsWiASygob4WHSrCARsoNSfJzPKzgQyNogyn",
  "key19": "4rtfTK2yUfVafUnEYF6BYkPPi8ToFiKanM4AU73ZzmG9QPgn145dTomXhgVfh8pwkb7XJTZ74YY6ApH7zxCEUwnv",
  "key20": "prn4DNeMQFqrEGHYLii61W2W9NewkBLjDeVN3Cq521Q5G88HHTxWvSUzCsQcneZzgv9GUdyc2CMZvhPPY4EaSf2",
  "key21": "4tdNTkn9JoTyVo4V26iupgUKS3T8ZPrFXYEFyDNwqWqSM5yTwLVAV7pudzwbjAcMtd7CCTuJoNndCx2xYqzF8XMn",
  "key22": "4oTJoY7mTKuE2bur6fENJBAuwXAHmN7aQu8EvPy6piTpAZuwtfY93idjRhHXv2HAXqte3mJxEdFBzRSKPaTDrYyj",
  "key23": "uS1HKR48RC8NGVuCLANoDhZGsRMjyqMYRLB5t4TCBgie2V9ZGTz9U3cr76CekGK1xUkdQw1kKocuTPTcXUa8xA6",
  "key24": "61qkWvD8Ct7L4qnRTcQbwqmHqnrUPZ2v7dUwtyi7BSzQpJAHfiPDZStdwcLwQD8YdGQSFxicKDcaXsXdabtMk4xa",
  "key25": "5HKu1yYvxSvgJj5X1fLkG89XbDjDxkrqiHRdThQy3fdytotBYDpmZw49ZTXaH3XkL5z19JtdfqykuoWjDAXbx9vz",
  "key26": "5cZWy1CVL7gChjcT5NUrCpyAndB5Cpoi5UJWmoS7gJrBp4MZMQx7J2SVwCempdPYq6Ytx2CBbvEY8vKyxuf79TS7",
  "key27": "4VMhvJUmHFQBJEW1TFJgEpPVrHCvYHtTNShYRjLdeFpGxWqKFZVmUNYuiGZi43W9n1F1SrJw8hBspUjiyEMWPcS",
  "key28": "3YcXkHHWZ8krGVU4XMgrnpsxjyVRz5fy7aDWgo2bsnJg5nHU2rZVwySoJ7Nn4CBdfHyUP8th11BLB8LJCWpq42nJ",
  "key29": "44Put5tGtUwF2jQwc8XDrTbctkrWo6c5DTctu1Pd7reKSoXuAZbmx7iCpcon41HZ5BaTnGUXDFdMyken8ix5evpn",
  "key30": "2qGktBzw75Ug8PkmfVVLqGqTvV23CmS1yq6bhFn5P1aHKBCjpWNZWapGsE7jqo4aWMPypt9FUPXEJPHtyXfprdjL",
  "key31": "3GAN97LjAB7xuZB7PUT3hku95ALHAsXukTQuFomfuM5bEZHbknQdJZ4HtTbWH2rEnDrskfmTZSEkFMzv4zzzyvRP",
  "key32": "24PXTbPR1nptiBhwbDLXZU7TzfXAovZuLfCLZqbR2ZZsLGa7JDtUfwuPGLXnRbMcG7tHpSWU9R4pZQUjSDZCqgCQ"
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
