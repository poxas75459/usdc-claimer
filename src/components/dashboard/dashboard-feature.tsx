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
    "MNDj6rKjyjEd2ooj3UPC6tTUEw658aXgspjTjfTK4NQHJsQR9z6BmJCabokcs1NeuPcxbfeWj5CVP2oL44VGshB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52p18nPKryADEj5dhFAFTehyGJt31QP8GoenU8Wk5wCRXoE1jG5cvPt9kZaNsNcbck9FiqECHK8ZfMN6i1jwdkNn",
  "key1": "3hy7GupvzeD6dpe5BuJ35V13eFP3TFBNDNZYzjvd3q9x1QxN9BsoZRApK4R8eBEGR9T4cTNSMwP3dq7LV4xiQNbS",
  "key2": "3QfcXXTJUPSb9tQJNiMUcRsi9EEuN5KoBaYfNxmmewgx36TeE6e4gcdd96TWeMxu4erY691GgCCDhd23cZ2kQ76K",
  "key3": "65TifTPmKMyGsHKWBcmUhJBoeDbK5ZqRFpst7piHhnvKXJJadsqoN5FCjVSDxMcpTRaD8DYcXBciWBPpjoeFDCCQ",
  "key4": "ADdyuqxZDgbsfaYHuscX9CwGGvYwWortxu3vdE7BB6qkWyDtJomvThDwRFr1fBnzXbv4jki2ashP1G5JzdRUYKS",
  "key5": "5FKGH6cXVMPH5MeSpfR7SYaakQ3Av8ajAUh876u9vXTf4mVuvLqefio1sk3Numb61G7gR5LFJoxWBdA5pTipJx4z",
  "key6": "2v3fcTukdH1gCTAx4DqjS65FgPxjcAHTcnLYddoUrDyLeBvJDQLLDdV6WT1LRhZhGx4fvXpNjXyyPEjKAVf9b1F5",
  "key7": "4bh1T7JbGMgksZ3SDd7Vh9jeLx7ejiXFZmvD9eGbEyY8WPEszWdSPenYLHLo3ok1g4DPCVwszrSEL94BXxzmxjza",
  "key8": "z37eq3UFMmwoZ6qJxKY8eTHrcLF2iiwQSGyLrEfthhpAZipC7ikMQBhbQprrQU6bM8HzLD7bYu4P6wKrFMGQAKc",
  "key9": "232aWx4b9xt2J5pCzp6RcadgRZcxwNdBRWronyDJQeiehJBoy1Qv9PPdoMN6AUxw4MWv2CwWQQVpGbREfzxQ7TwF",
  "key10": "JPWht5y7PP1X6SfvvW3GfZoKkerjSx8oVhJ7YgubR5iBATfBXQDdVdtVazJdQ5bV1s64ohiCCDrE1nmnNCYMWUj",
  "key11": "3sJMYiKZwZ6r5zog9x6AcvosSnXyRSAQGorF22tPmqpd1fLrcXY4HdMebZQy1ZuXZnWTbubWyMC3c59RAR3hj3AH",
  "key12": "2XxtB6vv4WFaCiJHkMw7sXt4DSu2WQ6osDXZHtVKZ7XeFx5nDAwPATCNgnpLhdhjLyonrGthJtKHnGRnbN296LfU",
  "key13": "5sJvtaStNE29PagFpBkX6Du99YMTVtTc6jHAEntkFRQgTM9qZ1DaiPnbw58PcmAwo1ZxJ2UvL31aMgSQZNAQcLGM",
  "key14": "cZNF8T5V76kgiWKzjAy8Eji5ARQNzTZ3Tmv885dCNNY3tSSUNLSq2hPdVu61AcmKTWgYKNkSYsd9XTs7v2fdFDY",
  "key15": "2RU2GFGdjdkk3od3seRK3FJCeA53ZimLau8gPYFv9fTN6J4yX4UpTXmEZYESkJwUSd4JtnjNXF6tSEcER6qMQihY",
  "key16": "AhXsTbobBFU3WKWJ4iUSNB8vMEvUVEd1xfqBGbeUaox6ojoc9AG9JHJCodCAnSy98QP7oi1mkokGqEJwYAcfqpa",
  "key17": "2nJhzsZc7eE434UXvn9UAXh9JaRYKQoU36fkhTMNat6CnL5grybF2F1TNJfibQSfNgXs4omnEaiDBWCq8rCT6CZ2",
  "key18": "2qgobzcaKYMy31ERBrNCfAyi5iuGYPs5oAZGQnvW3sHvs5NLZAoqz15KC7MrLoYXJeUKH5zSopFmY3aA4Sb6nmHg",
  "key19": "47qXiUG4YwRwHeXmN9aLp8KqcH6dt3mtsFTMCgjfRw4URqoKgZQWLeSw8vPsRsxqL1XZpk7kTvix2ZCrsjsqT57c",
  "key20": "5dmZdnkNSkCyidJ9Vk1t5hhaYJH6Mzy3PXaTuVrLymKeMofWmhMy35WkefrtKaLHutPVuUeqDnMgy6ZMTMUPQ3EG",
  "key21": "yBzRfHu4h5S2XUtSMWLZ2VzCvvGrcncjwbHoWXP3HV27vu2HQK39vuKDYt9ZmsuPWG8gDZpppNAidZgs5BJRaWF",
  "key22": "3YFZjL7payBQYrGJZtzSB751szvZoAsQJtY8N897PatVGCHVALPHyjNLSJzwwh2eLvHcN1Z4nSD4d5PbrbYHZ3za",
  "key23": "5d1rLkUhmxGARpAvTobwd1ybuHE7Es12meRADApsmteHfD6TuHBLo6tbr3hNJJQiEq62tFZX1g4s5QVxPyyDMxpL",
  "key24": "54y2NDsD4gsMpdqNPQzVnvtHHKSDo1bYhaW6to6aiGMLwdW6cSX2eLgSbQMz7ULCksZLB6FoWe1jKQT7DU1wox6R"
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
