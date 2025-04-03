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
    "52hiz6mBduY8ToHtFj1WJjzSgFwyZ5xM1SNoCSjJ3fbQVrBjP3qh8AMgYExTSBNW8r1chmwnRtH1vJjTHsHU6iT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1dDMJEjJDxf4bR92NUZJacdft5ZT1ojpkxxr57SLa3YL7z7eKwmXBvAxJXW3WcrEZrcLSA6G1bQCvfDU2Fbfjr",
  "key1": "Vzrpd6TXvb2kVkysZJdYTMsRF7fYsB7BgSyXDgo6svup9Lq1eWSsi6AhsMmq4nd45XPc9oLMANvvDRUQdEi2M5u",
  "key2": "4DV76PCXDQZ1oUxJ5aVpodxgozVKxTHzjnuFF4x39jV7raA16eS7wB29So2VbwwYmDExby9EJFunE7Pr5pDzf5vp",
  "key3": "2WfM8u77nyAgrH2fBZ6do1DVzKfpRgTwtE86A9MUTSNLCLgGv1faqbgwC28Shx5PTFnPAVzysASkL1waqgnKZRuB",
  "key4": "2pxLoRMFTkMWgxJwf78prAr4ehfk7YZFjyDtFifspKcPaXPQm9PFDQq5WwQGnTdjXYVZuMuHz7kG5hGcBiFnGF9d",
  "key5": "2rM3hUyY1yBbEWivLApYXCYTYDTRR2KR6St17EGwCx1qhod4jA7NyToccMjADAYMDvEXgqXN9qQCVBpEwXk5BXUt",
  "key6": "Z5Nss19iq54s5srae7bvgCCQocqrwfKJrwpsKnou7mZ77u8BevMiVqZwnLj6sspE44x34F7UNR9b5oRzmtR79yp",
  "key7": "5g86SMog4RWrmvAdEfQaAJWSxYt5JPQZyZfF6YaEphC3QXDrA8MWEaz7eCL8iErEEYMWMDsrw3Kzsdzp75S8wGbg",
  "key8": "JfKgEs87Uq2jSToQppr8un3Nk75aZJcnGvjYzJUZNQqr7rJnnwBwcLB771ZsvmR793QLnzNG8rcbffvppfp373Z",
  "key9": "2asUUsHwwSR2CdV1nAnYVUTWUb3LGp84RAzqV9ug9XatPCLMj3ggQt8Umza7UC2wgQWJV8jMkEPeyFNMdEmcmEPA",
  "key10": "4fYyY5CLxuBEnvWKM4nMr7VGKHXU3BWAa6pPw8dJXUa1tRXxUFCpvbVuFBVfTuVD1c2AaNXvHcw1cDre5BT86rHT",
  "key11": "3kNY92Quye57B64jHui6sxNieui3HAYAMvSM9Jjv5LRkHhs2SutMADyFVZqghxCVq4hMR2sJ1vrd5YVVPQQgLPo6",
  "key12": "2dYQ7DgT8HJ1K538NCELkn1roRiRnU3TunXKq5UyGbqGuaQBFcqg8KPdGBvz5V6Zgq4mnrQrGFsmGeyVpmD64FnT",
  "key13": "2J4i3RKWhf52D1ydcT1QLsyYUmvLdzTjXDtgrr4dnjPBg9oT3FJEHqspmCtW2bJU1ajAKHqLBxV8LXBxCrgB4Wdj",
  "key14": "67ksp5u9wtP9rPnJpPS7AfjVjfw1WPfh2QobUm7tcuJN6YUg1Lc1FU7GCbebfA5dWW3Q3vNGsM4Nme7Q8S7PdnhC",
  "key15": "epSmwhoZSKJR5dQ9B5GwWGqRyyk2xJSWQ16FjKoTdrovc2GXJgSZZgx3Jgxo7jtW5VMHibxqqeSRybfaSmiwQuh",
  "key16": "1V8suiq1zn6vqGkVtG3k5JphbVC5cHJph4Yizrs4BPNN7hyKVZKrJRe8HeWZWy9r4gYYcR4i9ZjFNcbvzv1qSBj",
  "key17": "3Pkx5kzBbCP76ZcQp4HDJDZbsWVVJfXFma6iyg8qDr4ttztLXRwiwpk2X1kqMEsQ2wiGe313Tru5W2xSVZUefUze",
  "key18": "mJEnFLkYSSkNV591tthgsmQ7heJSgMqRgSabT2PyqMdBqZbacXu6Cqz9L6RURYJDMBks1gXV742vkLPtDtSqnQe",
  "key19": "21jWx7ViCn1BuWLdwRF331G3B3HMes3nSYUKXXHQyEWSExhnUvHMDSmpusUegh5nJFwVTWuoL45mbSQvxiYqsuSg",
  "key20": "5vhtuUBHCZ53wKJcj9zmDwSFX4mdk5W9HxAt7qJL5DsuSaUJjUFArfTdozybV3SajWHU9jSeQQqscJtfyzJuW2iU",
  "key21": "5LyM3rUKfXfa8Wvr1Ep6F1kJ9i687JDmaAGo8z1hdURE6UNGwX8qYBu3fSToT13WM67iHjWHFdQutStyysvDRkAu",
  "key22": "KPxaLHwprGQRfG4vcPeAwYrJMUgDy1Zf54CjDAXQ5EAutQJsdTRUWEjSgaDNahTemdyGheB9bwV23v1P89rKGz8",
  "key23": "598r7yhKZeiBcz15kZetxWTff86LRE7zUHXcrEc8D879eDtvD5piWuYfSkReUrPpnSeHDoR7Dutt6aqZxwBeZJ9z",
  "key24": "27ymdGZBZd4YJJts6c3EP1qwxB92QKpo7vGqFv4WX4qN4HNvZbASRdHCSQww8BNWFM5jmoYm4utSHh6VWfwYW8e6",
  "key25": "4Yq8GqQkykNUcHKoS8hX1bzXKp9AaWCrgsGkyYLmd5L7usq9wTfZWkwNzSLq6XWbEQfM63csYERaNwqQaHBrjRwE",
  "key26": "3d6XkWRcbiWD3WYsduoKorgKyLZn7qZZwYGjdkDecjBaMWYKQiB1je59Dq3KeufSFBPT2bmkFtj9E1xTvV2bQHVY"
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
