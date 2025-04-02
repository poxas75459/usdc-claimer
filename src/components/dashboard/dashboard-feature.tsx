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
    "5wsJZSunysbPbdNJrsRwsMkSCR2TpVFAoKEP9h9iYT1AxJawaY8AbqJ3ZoM4dghBG2waHMpMRbU15dToc7Vep2Un"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fh7Qczi3zpBmb8HJVVsfCxXtjr9XUcrp6Y4agpg4WmmX41AcrQXsxe1sV4pSu9DfvxfUWEmEaMGQyLR57YHayaf",
  "key1": "61X3SHU1qBTPyWnUbJ1WSQDCpxDHrFYqZJ1GoXtHWszZbXqwuRhqqPB4iGX3YE1Kka7hJd8k4RdJkcMoxaWzyd8b",
  "key2": "5a1kU8osP2s56cgat1gyNgapXieJ3HUfoonebThNNLS7wne8UGwgidHA5ixiDQHrVCLzCRi2NDnS3cSqJ7ejgAqk",
  "key3": "3pKpRJo861CZodJLXcTuB8GrBrBiL8tJtbcVQqYvJd46uonvtFVHfBDS43Zc8NU8vYMpzKw3fVo6seduVZBi34Gf",
  "key4": "9jStsuUFMvSL9eRUkAFX8vfv7tVwVXuYpkU5GstFTx8sv6Vo1G2LdDAMK9wseKhgKmTc3gdcNPs2goFz2sqJr38",
  "key5": "3hYZHugoA6RLF2fyz5cs41aZrPTqKoktq47fWbKjwZ5zJRQEWHK2ptZeWaPTw3Aag3u7XJKEwnpz5RBoW6m9NJg8",
  "key6": "3MHT1q3z175jJRLUDdh1NLSKb6k8XK4kDPXy6gt4Ddrx1YSi8GjvS4WJ1zdvi2CFrfnUeG3U6fwgXkQqpBGhzSVY",
  "key7": "4Zen89X8o3whukHfCgXxNvyPoxiguuhi1DauNVwGxMVViCE783qjXtD7DXUGTJiE9RhQAFZ5kG5TYhewoAiqDJJN",
  "key8": "4X3ys4Z19WzYuGN8QPQqbWeFLEGiwMka7w5HC1Ad7TdgEiT4f578onEr8LYtYJcrGFeGLbUstUdWEpbw7rUxkw7m",
  "key9": "4JAC7hZAAk3Xmyr7YwdZ6pyU98135amebgRV8k6Atq3a6YwmHNnbJ66qiyHpsF8DQJN5igPu3qSQ4ewCBHdYvVDe",
  "key10": "5SAFtmNDoKiW8U4EToxcc9fZCNFmY3HWs1ChxVH2wLrUyvbvX5srzuzUuJucTZJcABF5HEAVwFi96ZbnTb5iNKDN",
  "key11": "3HnX28uSvs1EqjVjpPif41ELTK8xZ7a7MZYhWaYKF3ea8p8CGpgJY5VzFECw9FJ4nnJt9pdtc6gg8xuYDpWMo456",
  "key12": "5hBK1gaS6jBRivxtruFYVCkYY8SojqfTs9FqG6WcRS4bky4pxLuGDySYN9JMJkvesnChBBwMUPSt1NbWUV62zz1k",
  "key13": "36dYx461iSnAXGnoLnSrrK2hJnLtWSdouhj8iGyHLtQM8B8EvHazDPbZwS3P32awEKy4JaPmdh9w6MEvsvDeus5v",
  "key14": "iUebMB2uaTatfsVNrzqdoeAuaJUYXWtg4Z8KqFSKu6EHGFLvnYXJv1z2TokHeNUtBuoWro9oou6UpRfR5WVaf8b",
  "key15": "2woovy3aP36hBE8UjLWK8mPHrLkfFs2z9q7sjY6mfKqeN4SnjwGHh7A2QnLmT3t5TxaPGZMp99R9fjtm3MvqDLxF",
  "key16": "Kwgr3PHRUVCXCwBvsgVzTrBpFimyRZ3uFtvq5hZ2FpuxEmKwndMxFZ2qGfdxNfDJ11WZiZKngT6YrD1o5eAwHUR",
  "key17": "4ahznH5Zv8wEeho1gh4f9nMtpCJMBo1anvjJZ3NjCepU1VNL1nV2Ty6m5XW9EApyGrZHMC68mzKr9eGnUFH8uKvs",
  "key18": "2nuen7Vuq3vQ68UgmhyJP6eazDMeuUE1ctVJb4TsRtha1XMV4x7qCbEdVqpyqufSxvrz4zs9STaWKw5YM62bME5J",
  "key19": "JKWFCSxwSSvB2SySPQBkddHmQCtfsRgTRz87qfn4iaqhsAnyE6N4cyUVA8XFW5apUD56jNkmew5EvnUfKjTvj8n",
  "key20": "3mpLUb6PhJ2yUjCZmNhneekB95uxbxVwzowghG6vc6EyJnUsi9m4VdiRiRi6Ko5WaSVdXDyEnSsvTWYqj5t51vS3",
  "key21": "535AV2qNuVTZZrDri8tcNN9E1Xv7ahR24a9vNpm6uP1SntkVALVb3GgkbxRBQVtRZYRSVF49CJ3ntFLZCHwzJ6d6",
  "key22": "zgekvgCKhjQNwzaye2QuSMLAFiJrmz5XdxPLQNCQqkRKXwTcSEMQjydvtAuUEzxbMmVz7AEgbLJtyUKStHDZh4E",
  "key23": "4ADCE8YX43KWqtm8jZWtc7fFFXqMX15nHverhPxjcjL2KNpePe8yJwK4HxSbSpJtijXppjpUrzaKEydyH4xqfXYd",
  "key24": "5eThHjenJfphFhtjGWxPwv6ppsHuDnrGnPxfMKHWJixb3ZfxV129NZVh2FL47qX5SfNQvWk9Tfc7hPjFSKZN3KBg",
  "key25": "4ZT1HTMf7we44V7FX9QStmX92k4bZAvRyP2sqLLHJ4oZy2T9ripKTWAPsYx9BrW1Rfi7SwwKLgVRz6wpySPqc4j3",
  "key26": "3u84dWPqw412U6x1k6tnAo2maffXJtnqXjyrcpaxPgL7j1djSGsG5U1v7ZNi9oA4UC8iQp5w4TwTqQmmEzG6h7L6",
  "key27": "5cZCaQ177noxfcxfqQctpY8tC451vTexKsPbhmtJyUux3suZKuVe6zheU8epYF8DRjwvZXoZs9LovPTtmsPDGNcw",
  "key28": "21CujPeuxKyuMgbgqxTB3niuw6HwUvjx1HoCFdZtqAzvqnWMFwQoBX8ZbXZEfwoFUvd4xbLHCYvqERQkuDF1W7ak",
  "key29": "24XQE49x6cx8KLwx4zjRMHK4tQRn4Qr3yBKwiP8wUNp5Sc2v2EnnD5QdABwRCboUxt61F8JNBde4rmmzq1ibesU6",
  "key30": "2rKhD7bufG2PKbz17HpCN183nYEyuwnNxDQPQ5767hrwsoBujcWLkNDtRxTDstDke5xgkji6e7ZSV42yRcFJL5Fy",
  "key31": "iE3DmBYheAREjk7QDhaCD8EYNYJnLiyvpi44fcSCzY17sMMUh2ErKgHv7UGCxc4vCrDdFTHoEZttQhyAyGepekU"
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
