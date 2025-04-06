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
    "2kaTECUzwZu1SjjhXyNBpfMC56wCFaUdrpei9bkMrusxD6rwaxxS7D5epPs6trAz1e9g19CD4H8szXJLrmQtXbjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mknc3PRTSTRnqZHL3VUzNbAv9vhKYTCyWMUY5wUc6xjRpRgquCKq4zf4XYMz3riZ1FZQW98rnc2qAfy3Ps7dNw",
  "key1": "sRwoRRYkv8SVBni3aoCr6QFCYjNJX3EeDy5N1MgXwxJfqvL9ttTgZtrmHUjtt8vbrXTbMG1JzPfm7q6FT3ua3Bj",
  "key2": "5jrUL7FGbVLcCMScQFr4bm8HRLWbhwNz2uy4s3YUan4EEHnECwdhsG38a2RS2ocpYWKzt1QaQT29mWaJVGrXRswa",
  "key3": "pmYFFNY4kQsWZpdcxtVZi6t3LsA23A6GiHxrCLzzo1LtKkJB5E8c2PVReRuVWy15TYjq5W1oV3j93i1waWVQapp",
  "key4": "8eQrzmZzoBWWP4uggJnrKfAQnMKY3pzX7QQwiLHLqdyaoDFLB2HNzk51HHpYS3bU3p1nQFKtzQJGtrqAPssh6Nq",
  "key5": "5QdKwg6dZ1DQduPuFaYfJse89MZ6Z5SXqHv7c3pdfUEiRABsqYEGyAhiK8BArkwSjN2XzvRmEnchcTqrzjR1dzxy",
  "key6": "5aHhUBW7vR3st7cJK3GtqNe6W72azHxtkbCVQdToRdAvByX5j7wkzMQpR7kRhWbrUtcTMKWJcYDjhXWjEGsFK9Vo",
  "key7": "3WtxuBN4YsDi6uTEwCtzvwTq6iqkw2tHQjLU8nupQjb4ixvUNMnBhAKA4qJFmAxj6edrjsy5zHCm3d8AWU8Frq6e",
  "key8": "5pWuxMwHFiSmixsuZZR3dKQDGyLgLJuft7jSQ6op2drNezXGeJV2cfipMbhrAJRejZMYzQtULEvGbyrWhyGSXeGt",
  "key9": "5iLh3RFdxMURQQjFLmuu8m4kjBeGjPXES2LEBJfxgbkoHDUn9uvtwTJmdhUJZEqKyddrHTrfUZa81QtEBMCrCL8X",
  "key10": "3cKGsaiBwuMeCZogdtCt1ndz9yV2M6jXV1JZcHN1cWKHMLNFARALxtDZ8TTWdq4raaqDHY8VR3TwebCdi8f7CEwC",
  "key11": "3o2z3hm6Cb16TwFuh6rAjaH7ByRSg3vdFNjDSEaUv2xXskdKntM5rRja26zaTsLxKBUwpf24RV8WVXshgHrarkjm",
  "key12": "HWfmsnJAW2XAGA3iKxMFqFBV1KhSRiRifCGWdfrh2nczZ7xapfDU9iMwtGyojXuQKT3xWPnfpZd2xBoXn65KcnE",
  "key13": "4m7xtyqtiZAbrTH6QcGdfzdUxUP6Ks9wtiQE2rxKoShtofHZ1is6YjMoAVnbiLjwSWqwNDsksi5dX6eT2dznwJ3s",
  "key14": "2GwNRYc5RZwHj4oEjq1hKcZM2Uhc3grLMWN2qLfHmBD7SwEvb3gVdN9qh3By4wY6QitnLrFCCr8JEXDuxQxPLD8",
  "key15": "4nz32rcT4nMZAv9ALGR4fA69CX6MEU12nV8PtdrHfbBnHY4nj6W4Gr5cQN9dCL5RmAgP37Eu3ACDmmkx4Vc28HNc",
  "key16": "63Jbkpkfwp3zVgpreRbvmauChpjQd3RyQpNH4wY8YG9UbNfwtNye4bKVUpMrp4A217L16YLVpsVrUw7B4zd7XtwN",
  "key17": "5QRSg5Hsp6VgFhWvcsUMdXKbWSNaFzr2ZQkssQ8Cx1Ch6fq9GFAxSyoUA14aDvBvnr8TLDpkr57qeFMuxh9p9FFu",
  "key18": "5CtLVvRL5Ts53QKX63YS73KCJX5h3jcED6GNwKinbsvBS11vfyJxNXpJQCti4bGEpzExkMzfb1WKFG89Qr33r6r4",
  "key19": "4ZvKB7DzZQ2qH1bwH2rRTRWZywGo8brrXffDXxsXG4RCxrCnUpujHj7vDTTLNBFUo5tujzacf19aSHPQroxEaygh",
  "key20": "zWPdjCSeweQQQVwzZntHEJKsfT1XVcDwUWhPVUzVj9bkFJQN77ob3XqEkXaios18sLoRdz1muXos6Pskq7pHLxm",
  "key21": "4rvxt3JNQzHUw3g1qwdmTynfdbXocbWEtxJMkTp1FLu6GxVi5kGvdVeHjFUT2H8GKpMG7wBr24LaxCxZLTW6wLZs",
  "key22": "3Lqjek7ReRqGcAGtTpjde4q25opvQ8vi5imceSJyg4aV771o87q2qSLXfAYAjYkVnZzCQouNp9TJdPoHrPh3ngj7",
  "key23": "4yHhEmw8s9NK1VSzSAqJFi7MWmVpKPjYXbpzfEB5XAoyZ5jQf8b1JyZSAQo4GyVtTpaD3kHLpbLVZRDADa5qFCVc",
  "key24": "5c9xv2v8UP1W1YHQydV3w2F2TXLTUMFYqysxKiR8kDQff746x7kjRT23X8FAfEvuGqRJ3b6NF4WZttMzS3cQJS4u",
  "key25": "5QupLL3qqP2c3JQGky7afxY2rFipiVfzA35G5oW4QBg9m8THZeDeuRgMULQUSNUrpUzRZd62JhUc5E9b556yJ4M8",
  "key26": "5G24wJzCrf3acP9RurdGa7SV6KRaJxTa36w355maPGvqt81tGvgUsUBBzViekuheYTqruXkh5ha6m2qq6e6A9hfx",
  "key27": "EVAsyBQfCSS6pwLb1NRAsVACysW29dqMCoT23ZcExK3BjwcjzLR6WQUHAsmnRM8wKbd5pM8YdCxzFzyXZCHNtdi",
  "key28": "5oRQntA9MaKUsxoy6rCHhXTZHAn3XnJPU2qnJRHm7tMrHMTwXm1KwAjHD7GQ86KAnNkHc9RDMngdo1eC2DjgCMDe",
  "key29": "2inFGHE3WvdddTk7QZJxxZg2KNwALArd8JGsDHEA7NKpUuLskLXqiRfqCkBtUmCsTRY76fNSWKhcC23kzBry4vZW",
  "key30": "2E85RjGsEThhupGjW2b32E6xHNw9qomm57xnAipWAQDxuiAc7mxKKCoyajWPpNUzZKTUEvoHFRTLw1e1mGpxRn57",
  "key31": "4FethAYuLShWkpvioQcZDMdDodkfPAZCm1h5FpRw98xUhfZ6Aqf27QPHabJ4bheJFxCyGMSBnqwxVhbBjtRD3For",
  "key32": "2k5cMHos3HSsnj4uPE9JnfeUsZBtPYp1jgJuhKwWp1oifDU5wCuqtWn1TB8XGNZ2qT1jarQux3onXE1XYfs9iVua",
  "key33": "3W2uRgZnYbwuYqqSqeLyPCgixyeqNUvLa4Zh25eoHAXdEcCDmLy6iGJZZfU1Ppxg2VvUXqoG1oH9ir2XouSYNTXD",
  "key34": "5dLySghN71CQKvRD9hYv9gefJgRp4vJdCb9PNnJXLyJa3EnrHENYHGhDkXXF5XnKoqxnz7ReEnDm61v6fYjs5kDe"
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
