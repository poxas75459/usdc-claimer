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
    "23u922fR9HDdZtiYUB3pDYkLKzBjyHG1fKaPtJNGW245F517uTnEAExTWEaieJT9YFPNJNdf6PsfVktCWry2DY22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LPgvUUp2xY6E5G4B1t1qNCLcGDpshZAadt9YFWSHrQsDeNugRr6EbwDmZ8c5BCos51DaU6hH1jnmAJPcRgQ2Ayw",
  "key1": "2zV7UrxcYytJAQw5C3RJnvv7hXLMWHVabepFTLfwYfq1o35U9XbdKkifCLuE1gTw8m7BYaox9Pf23Jc9QP1XfRut",
  "key2": "5AVzPsX8R3yCGxvtxmHJa7SnMDdUoHvn6jt7SExs5oTpYddwHxiBTHXwgXH3Y1EfjTBqfmXW8D7PRo3BReZfwjiw",
  "key3": "39giqGYtakZMq5NmyBdegRWxXy2usgu2KX5MEewj5DgcfmkPrEkihjE2e6TpchbnnE2Fcb4kig8BAwMF3ZyjDYks",
  "key4": "4otQVQFbBJMNdqdMjWGmWpRVh5DsTw6LxRz74em4NRCxZLPgSbfW4savkBbjjZMTaJQkK61VhikSzUCwLbvGN4mS",
  "key5": "4y8uZLjd4UoFPUa4tHsr9dS4DFJbgGoXciMu3ZSbP2z4fjfPSyDM5HGuTwHMVtxcRkZJQJy5sSRDHKVeMAPDEtdi",
  "key6": "41NuqhHozgH1yjLHo6s5i8SijFVWWxMHRj3RfSyjmHsddngrvKAB2UMnRfScQ3D5dmtj7qS1Z281WfaGNevG6tQn",
  "key7": "2FmuHomAM7EJnZpDXZhSXPsgBsQo93Tj7wCimwa8r2Q65Z5VGnQU53iek8r2JCC8t4ocG61QP8NUzXmHixH3ndmj",
  "key8": "6mCcNJzkC39iU2W2kcx5PjbjUuGvPepTdQtcqBwedFJQAdabAVqnWcrHrvxGB3FfousSmfFvWdpBxhPNUu5ZLr8",
  "key9": "4RUatrX7Td4LyQ9Lru3ugB7JeQHeN7RUePQoBK3onn5AhN8n2S4Udmw8yg5Pfgn8W1v6kQqpG68KJW8chy2EjALX",
  "key10": "5HDqWyw5ghkQC8GRp4dsJtdF419xHHRRcYmfBsNb9rDYMKZfSMVp9tsv4GFBtRzkzUYJW8deuKRgSt7RnaRucZws",
  "key11": "5oEazJVJGUtNjbtQrMMyc2bP3oJNbvZYAx44Vz5fs7waoVF6jZsU4x7erU1D1MhThkn3oJqM84iwhZ3soaM9QobT",
  "key12": "5fcKFTUjcUYvrmp42GicKi8jzCLo89oWHbVpMY7R5XuwzEUicnq5dZcMY972t6vFmLZ6t61ZcxTnh6ZDobxWBZ8M",
  "key13": "4zTu1NGajLaET98LQ3vzT578fyPfLkweR3k2Rq6tBRDTkhhqqM4QCE4nLjebGGCrErprw3gEM3g6YUuhNexRFbrx",
  "key14": "4t5XKaLiXoZ84CHfzd9Jw5kYuRLrFSTwEztcVs4NXG88qdq8GqPo1veBErgbcwxFdFEyjFFp4rmcqtoygFpPjBi3",
  "key15": "QoZ8JygNAH7YyQEQiVpV3k6PnHb2M71gP9ao6JmWfH2AuVxQ4BnxMMgMLFw9nLBQsDjmVdn6uShLaaJTP6nfdHh",
  "key16": "66at8ipxag65iNvSMTfo4NhUb3r2jWGJjU5EQX5UUS9hDsvGb7Ab9G9cz58bXX1DHVNuwTeDCGBuK7pHxpqRMYAx",
  "key17": "PmkcmNdgnBEJG3EY9Mw9raseTx1dKP5WUj6jZZLwATNzg5yzm5sYPXDEkP7dhX1ouWrXB6zXyyzHXqWn3WuLsYq",
  "key18": "67TTrqGi7Msp4UA7vGmyVrXA9aFEgCu4kJNxkXVoUd1DvAJHA6yNbi7iASMfdb56mcPr28zb1qJtdkbhinC72ciZ",
  "key19": "22wph7MXSxiKhDBjzoQVMLy5G7py4BcExPchgfWrxkhMDqirqVkPrrh71g5Xmqthzh8VGfJRQVTu2DfpBJxxdfx9",
  "key20": "4kAYk3FjQLy6qEXjp2bZpBGFwPHRwqHSc2Ud2XwHHGAiYnfEhS8Yo8Ki7ys7guVANdyMgrbdYosYyz7yvD9nZXAH",
  "key21": "4xYDHfTvAVQbAH8hzxciapKbo3HR9JcYG3nUbadXSfWpGPdge9BUMLsZZEcwuPveUP6ZGgmnNmDN2m4uk97gRDQM",
  "key22": "basqbPBtFbvhK63g3HCcmphKzSjJaQq2bFMnTWnGgHRckxQAjuKvsnGoNmiVozSSmkTdCcb16JF3bcbnssNhgq4",
  "key23": "3jW8u4UFrk2Ph8cxxXSe6uzPjZbPsmZc1h4S3Qa2fCq7dyea4urEQXBoHrVSniopVp7KLu461BVTMuoaK597apEk",
  "key24": "EzB2cu3jQNBgayK7GjYNA1XyYRNWqsLYKyQoUwhknyEFLvp2HEgLeRDgWtAEfGa2vV7rkyJ5gwUwuo4NCJuT4f5",
  "key25": "3tcZkVj3eqLNU3Uf1TqKQ1okyWt9Hi5BScxS8tBxPRHXSzNWmWwCsyYNvpm7583w5Hbn7diEWB5sVtAKXUxUhQUP",
  "key26": "4xEp1HKsHtR4c6KZJtrgriL5r5yndHd7G7tpnnPozRbrsuGTiLAeCT3G8ikj4b1ThjJTfcjT8qNNj4GJkB4QrKHJ",
  "key27": "5GbwNEv6vb59yNDhuX1G3q2Z6fkPd2hSUTu71MPKAsTfi5M2BiCik6VEK3GeXev1cmk5VwsvZ8aGPdMnr7NqWxYr",
  "key28": "661KfaXrAVZkULq99Meapxb5MuGfQ16Pkwb4vMqL7PD4zBx8gUB8QjgU6iEjDsaWU6zmv8jJgoTERx1Z8bQoJ4nF",
  "key29": "5y4jdwkv4KhZxV4mfak1z7GAcPBDnhwzoWQqWzSm9gnqWBuEeqLs8LNDVCwkg8gZ34pdzJFtkuMQCULHZXuBuCjz",
  "key30": "2x31X2dE5wfpe1UsTRhujSnQxcCe8saaLNzvb31RNq85sb5oFWTVucQES3XuHtHSDwZRFDGFPDzUKdYj89sosYZQ",
  "key31": "RWZgeGJCrPYpXHbiNpgBD6x7NMMCe4wFpM4owCd8pJTizvmvgfbQrn2rv4ygRd3fUhwZJR3DAt5VZdyzWXuWU7t",
  "key32": "3nCcxBJvgPc9SPNUYv2VeQdXi35yX1yD7DqG3j7Dd9FrpkZkwuZTw13w6RuYLAh4vcrwgA32DXiYYZPqazX8ywh9",
  "key33": "XZC9HKJe4rA2poV3wMVpVphSzcKYdhkm6t3BRacFHqkXrzytRT8U3nfQSyE2Z8et2wcF4XsxZ1LRUqqZ2QH6jiT",
  "key34": "43RqWwJebrQmp4huHSgBVvpxrbvJqoMKyYEM3XwyzCWedhZ8X69XjUQPrzc6pKATgPE5i39Knhm8qZDvnJZspwf9",
  "key35": "5Ywjmyv2ueXXR7zNGsJCTVEiqzcYQCvFsqUizUVcDXFBXMeGPAkL8XYHXghnxTRRHMSywQ7eFH37kyDzRDHzeGUZ",
  "key36": "h9mSFRvBdC8cV3ZbDhj1ihubAK2hbUXdvrWnPTvQddabDqnVR9sSVGSAikf2CLk5riWzGgKA1dwQhNthyss6Ck8",
  "key37": "2W4fG6TSJj6bmfvsjfQxv8YZuDA6mL5BKXiCDhJuY9mdb6h6R1SfLQQSXYC4VTKbezFvhj6H7aKcoCAvrEjFLaZ7"
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
