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
    "5SEccYaSe3QdMuyCzpH8yNxaGKe8WFjTNEau4YfyzAyVSwafsG557vhyEUnMAvVAV8p8hxeUQYQqy8cCUwB8BnaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RqM85yPh3NN2Xy3DyrG9bqJgaECcXV1u1TvWUnTffG6tGvX1Exu4ajaM1q7Bfuya93sMs2KL1vRUbxyuXDYmaUF",
  "key1": "527q9xnjoPn9hCDWwwmPkqHyHqBwXTpnyEXeQbwtQEXe9bD4GtCBR3edmNWrXFwNJnxeRzkr9hbxzpnPABRh2eyN",
  "key2": "3rm6MZuqrNE6bH26y6DHggJxNDWvB2MP4RX6a9ZBryfuJ72g74VJnsSHzqvVaoNeyznNZtL15uAujg7ExpYCYztZ",
  "key3": "SWc3WNPbZsT52ciuBaE8XRUNKmuxgRQqdeKyFYE3LaqCV5ypPNFTkZs4ViexEx2wZSADdYCKFjygMBzPDUtjJNp",
  "key4": "hSgq7ujEwqGoVA5M1ZYuoyd7DH6jXWxnskkVXdzkjbTaHcMqR5w2ad8VK5CLbaCRvYJvfUjiKS8sngwE9zcfQtE",
  "key5": "5iRfywLq4R4KVK8aW7g7R23o7usHsfJfgnNaQbZBEMvuqbsBZXfMQB4NZ3vvKqJTUf5viPb7zgugB3kzHPqCvomu",
  "key6": "3pcB7row9x1gtHdZ7pmsfi7zRvxfZu38C76hWmptM96Sd8XWrF2n9F3G1ZyWxTscK8SPdSYieTo1bZqdcM37A7ML",
  "key7": "2Ha14ksv5oGh9uwicXymAJ95N3vL5xN2HAUHvM4jYbgBUVrLb73uHZGFL5cgD7epuWqQ5L5rP9hxHrqrHQwknRRL",
  "key8": "5bCY2ugdB5VdoVnHMhfTqA8nNiqc5NfYqAFpNVjqHAZN6z6mAQvDb8zpcAbXaY1T2pAATtQYr4FT1HUpVMPa5bFY",
  "key9": "4HpN1Fsa3UDbR47vtiScNQQug9xJ9VFP2mMHQ58CPfqPZNNncGPvUWnQEF1N5mqGFZXJYgVpquTAG3nGWXQfspgb",
  "key10": "63we763zRN7MVFHtprPPpj5bLxPR4RsYeWecBgbdhC7n3symtPxhpqCYrkPALb2RjL5o7wXfyUQfM4mNs3GgjkNq",
  "key11": "96rGe1zXwWT5yNb2Tr6Bmwn5tLKQXthSQDnEFNfQX9V5QHpb5dpLhRhqfqecGh4tRv623436nrBqQUaoTXNV9s1",
  "key12": "5Ts6oYzHXMRnNW9q1PSbkApoP9Nhuyb3HdoG7C1E9Z3TR5a6efvvaAADRXiMnFfEpQ945GywSGNTNQw3GtMXDpUY",
  "key13": "4sApZuCAKrQtP4TVB7HWCNp7ai32u9mD6GLMFh5SLKwJHqpKBHza1LMQjAPx1ke4qQKFhavuJT3ATvBUMULJdGqJ",
  "key14": "jVqxr9VUtaReV6mKRkJmqwFWAC1CNNkAErsKh9T89EdXNdkzMebGTJuwQP2pPvQWuVsGWEuxZV2n3FR19zChrLQ",
  "key15": "54TLPqzJ7PhUWfsghZYqEHTAVBJZKb6RFpK7sGnDvbXtiFsFuKjc9NaL4eNkhN4HDiH5iexHiNxUne5JaHQDTw9B",
  "key16": "e9dw4LXF6xyHriTVmjDe43QaNy11HKk23VAUyfeCcnqPkaTJeAfFhYGzQWMoHaWMLzXGmDQovz6puCyHXaXdvnZ",
  "key17": "2czf8Y5PbwY6BLj28YamshzQ5ukajtkQMMmuUnqFqcvJe34fd3JTVwfrbhJQ6FVoVpNnpDjsQxjGviiqbKnN94k6",
  "key18": "4VaFoPCHWjyvTgdo8m7jzbYBSeguzRiqCrNKhw4uYagU7ytZLwFLFXaNs3nRguAJwpBbpmSCcLwFGAUY6znctpEV",
  "key19": "5UkYx3k5bToQn9c4oZ1NEdWbzg91z4n1hF81wzEbQzc5tfEuKPe47B3KiniEHSC4iL3pZqhQYxjmuXUZ81QcBgFv",
  "key20": "5J2pMc5VGRkEypoZ2fZQhyg6a8GNGjNdcmFMCVhAY7Q1qwz9TW2ZmD9VFHWBsVbG4gvmsGq4Lt6u2qK7Ckha3ZbU",
  "key21": "5ngxD4CxuMgnDWev7yKZamo7nAQ3bCRQLM32SK3R67T8MZGoTCh85ZedFaz1h9NEGQs7sEWpUAnWu8vBsZEHUQSA",
  "key22": "yaLham2CoT3HMuXUsrM6aEsaJj9AzyfwUqCDVMPPgDHrEmMVt89k35d1xbQQ9oxdx4pq2B7RjkK9oNUXZfV7GdK",
  "key23": "JvkyuEDVBngjdiBRdsbcri49sgDxv3GsQiNeeb2cQqVSkzxjNNDrX94VHMd9GTzdiYQzmHpTjzosgVqmpHVDJ8G",
  "key24": "4Fk8JzHSYxtwiE66sp5E2Guk67qEB4KBDMJbWYvxNocqzWUunWb6YLK6667GgwTcGniPRgRyCEUyCsEtcst6qeqp",
  "key25": "2hJKcSSva4RUg952UABiHoGxr3SoUBRXzZ26fPQQfWUwyMLSsEXPa7NUfzFVJ2Mzcs2zxJAcxmwqXnncAiJWE86y",
  "key26": "5P3ctFboZcZdHnijeXSfjALxmaghWqT8w52wGcUwTde2RF1Wu1hh9PFXzcBPJRQqzfFcP4LNpqC1mHhamZuXB1hM",
  "key27": "3YGQ8BxcpPXu48d2PCGh5cHXxBqb3mX5MdSaRU2vs6Rj2Keom6skY17KhPWFisQxHRqNtxc7PJnkK6AhLpR81rFo",
  "key28": "4vjNYenorwCtpx6cbCBwNKpQzHga17eV9CWR9wEKRBZfSgdhdTHPRTHJyRTtepy8BpAmACxGMx5cSRwwbzCV1a2m",
  "key29": "2c49YmG5Bnk6Brdu1FfPKJRJ8p7ipbvdWMYdx3dNSeVxLebmMPGJtEgq3c5Y4CZSum45AU6Thn8icf34tPa4ooT2",
  "key30": "2BdUMRzvRNHCVae4ST5N2v5dEY4BasZbPEwnw4agkFW8D6Zp5TjDApmEmZhzqkZXEBjgYgHzRmGz7AyZksDFvhjp",
  "key31": "2m1PyguUNQbAiPx71dxCWGdQstWT7czy3h4To6KFA6a2gQqySDnrLQhGTp6CT8ELaUV8RdQKUwQjHer8pWq2o5zE",
  "key32": "3qdRAQXEaExenVfmmqaZCjHi6Gvp381itSUxBno8cz4tszxgjmL4g5pui6Cxqdhas5T6jeqjQBKauuAyzWwGUBTp"
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
