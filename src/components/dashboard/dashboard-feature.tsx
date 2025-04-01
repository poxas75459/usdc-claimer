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
    "2xpZKr2gmNPD7gYDSJsyRtdUrAzeDTVMKRJYosdDuDWmyG6L8ewQ33WwWREJz9j62RtM4gdT5hXzmnd4eCEzBF2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R3jLgRSdPELJ9V3ABZqxv9uzmSoSchoREv3pZjVinoQsT2m1QjexnQiS4AWQAjCVhXfifGLPFFsA25TtNCgHY4i",
  "key1": "cL4D9TW2D2xs7zoLrEfGZ6Y4abHCJKkpKHW496bGKKnVRABgDD9e1MVbeEi8jQRHE3QJj7iBMarQmzp7dtitpPN",
  "key2": "4AoBL3iNJaSNJ3DPLkeCMsg3DarnzpMqk21xCTWpYjUdK8wojAZveQtRQhrHmLazrxESD1CgcCbnqCRNrYeEShgi",
  "key3": "3thP6c1tcwaqMny1xhhNFajrawiTUzwaRsQnbwGbCZqxJkj8KagpcUpZ8b76RoVHc34wEWcf9gEdJ4buy1LYt887",
  "key4": "64AB7f6n6pRDEy1BgzXK9YXpMhzHxHJZqaB9J1YfSPoH4Db21aeKZzfU1tx7KqyTAGZErv7cwrLunZtF2HRyqPew",
  "key5": "5Rwcoyxa5EzX8AnKnXqRpx8kmSiXFiygesb3M3ffB5AiVmcrW2zBrcky75zt9cS2SZtoNwSrhthR1Z8KQhirUoqM",
  "key6": "63sYm5neHFKu3apDMcFWXhyS3ZNgxMrA8MyWeCVwR57MJpNBHryJzUwTiXrA8QV6Cf4jNjNaucbTnhN83neVyvog",
  "key7": "zrcAKQTEKKxqvNZPbj654qUbHhpGyKYb6Bxqsmy8e4uMP5a3J1grNZWWR4XNDm423byDkhosChpc8KjeREerrnG",
  "key8": "29Z2JX9usCqAD7wMH5rPq9AV1QxZsP3wKdLNDs6FRXzYFL1t2GSWNFtkS8tGL7mMs68XrGswjMLS23QwF8QAnX8k",
  "key9": "34J2LGzNATWbhUCRYLzywaSz9SVHFVKjnieW8UWrDNHJW58uLEr6tgkRr8smXaQJP8o78CVBWupEpw1mGcKHk4Db",
  "key10": "2FyzaMNXpzeangdxrhhCeAgoi6tZ6f1LZt8LTcGNH5cVSwuqCNtLV1YoRuEGuCHAfVxm8WfbJHvCexHwpZtyTzzV",
  "key11": "4FJDbPvQfGnZVkrAuFr2XYETPApyhrtP361UxHyiTkvr42wJvuBh38SHqEtsu51QYZCezAxjxxyZR9v3Y5CXspTp",
  "key12": "8vHcJHFoGjZnzUewufvyedmH2UyksFiwQyJBMmtMs9AonujCpXAoaqrN6BMd3aagLUTkcr5EzaSSFNC1soBwPEy",
  "key13": "4VkDbwQoPvJNgCjaYGmLEy2Mvr3rLbdua1CrnezApZiAm2zxd98RiNRBm2p6jvD9z9rkHioe7Mv4dsE6Y9BJW8Fr",
  "key14": "4MiqyN67QaK49jn1mbx96sHp6T6u8W5TzjaweoVvvEbKzUEdtHheuEGPK8Jc3v6k8wNFKHgcnFCwXUWJSej5d7z",
  "key15": "3gZw68oVsePwdL1SMtGXCoJHB2XRWbJJo3hHvVPcHCSTQz8L4Dh4Ltc6hSHug58KhsKBeFPVi6MeP38MJ43jzJSz",
  "key16": "3T5Bsti3yxsddmdyxydmsbTaUFMiprQcJuez5iR6SX98UVhbhMVEHffzjDueajjq3SDvyUqZKrMn1hAwWGPkvDkp",
  "key17": "4CBDAFemNoyXVq9ZgmddYEZGF17v8MrgEBiKYdRg9M6cm1qWyiWcyXG53AhwArsDbdCLYzgw2DFySq2GF7E48yth",
  "key18": "RPJGFkGoXrmn8UEx5TGyNsJ3o6NMnZZ6kvwkBoyp2w1gGigUuBEePF1U3STf2aMQ7v5iKwHCbYxHTPmQ9Nm567i",
  "key19": "2px3XvLkS5GXJYZivuRjBBxtnwn359e4Xy5TncanzStchz4CRFA59381eiDEfs56vGjCFmw2KishNJ8ACMxfmtpr",
  "key20": "5SL9KGF1AubFMERhFM8Uw1VyDrSHcCBQfJt5qMSYzpj6zAYrB2KPq6kXwtMZSSGvpaPyn3zSgqz95G2i8CZ7ttQP",
  "key21": "3H6LUoiN15FWiV88BCeC9B4ek9qPonzkDRJEppckpfYjjqoVZFGK3y7wZxp1nDU4QfYRzejxrhKLm78r3Lrhhhp2",
  "key22": "5jNdxKinTLRuQXUmPYWJMtTGUnm23fW3vzk1wbr6x4ZehCywrKZurEgfY8VLmxpEBjASHy5LsjqAq73CVjee9Sz7",
  "key23": "2jmb42Da85kzCAQrsUGZ4CyqKWFKFetCkZ6LYYP5A9hAu13V1SDN6uAPnNqgEUJbzDKSjmLzp1aC6adic4efoU2e",
  "key24": "3VxpExJ799YUfyZ8ZW42KWkw2YMxLFJw4QbtLTSwjfreFoVE1BNCWjG2QAazWc6ngQ3sQssYG5HCYC7CUq43zCXy",
  "key25": "VKA6MaSZqRQScJay6aFeLiL5BajwrcFiWyaNyNw21WKo9eSh576JhxGU5ueQ4GqrZAu7XHofYDgBa3BVnyV41az",
  "key26": "4zfLALdXkjdWdH9o9K8t6C55twj5kxaoeuXtftdM3gS5oQ9EBZWj2P4Z8YkrvsiGFetiTFnBj2ig8QKxD8vGrBTJ",
  "key27": "4YwQSQiYj7nmyfropMDU17CCUfdTzLB7xMnDZzYEb97Gd4DvYLKSNCPmAAZpJXDaKpg87UAmyYNUdmYwP3DgGwyY",
  "key28": "cZTCBvMkEA2YiLMxmZ1LzH7CPpBMxHydCrHyPoNeApY91ujwqes4L8afEmfHZafpZiSUrXYq2hgRw9Ua61hKJ4X",
  "key29": "Mmu8YWD73r3xf246dtn5qTjgKjb4NeseXbyTWx1jEkBauRrNg8KGGaKQYFZfPxpkJyZaMVEAuSpVxkYbjCEPzhd",
  "key30": "yFFDiJn7TRe5JiAKH6Tbv8nZF8LypL8vzESP2ahWtrfumxjHpTQc2bgumpUPD5Q7EvtTZHwAAJkBSfgqXYuLTW8"
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
