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
    "2kcqgU73VuY15GQeDmxWAQVhMNdiYnZBEJhCnbkrbP43DJ8NyQwsEyCUj1qySxF1BMQ9ZwFLVdN8NG5KzQMMZFro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kT9msMGr7XNMrXTU5ggURfWVJbCgzWXsaPQDJUsXNCVGLUUzrQsSikjuyrUN6VVtTqEnq6MJqYCvKMAXg4kwjQN",
  "key1": "Y5zocc2dH83Ysxxp9StAR9gAaeV4ybeDQeGRMGudiutbAG2icW1o7FqbAr5xr7Bn3CzAJXtqyheA9UKXbqdUvsk",
  "key2": "3zYNecNjAX7TBFe2tYh2sdSLtYkiu3ForoKiRp5EhVM8JehbVqqupL2jRPtREjSrmLryEiWKjpagvW6WVALVPwrf",
  "key3": "4uLGtNZ1VGxfwWasKsWu2zgyaXr1KbJ1xSKuxWtf9m7VYTdNgvrXfDuwtopnNshQGYaK7FeS3HWGcButeypN8Nhk",
  "key4": "51jT1BFi3WUqvWMxyLhWNHDv8x8uf8RYkncLrfM9MQETxEitHemU181K1SVmZf76bxTjERqheARsJky4wo1xCy87",
  "key5": "64TPbD5XAFpugn16pzcHyDhkkcFKrgZzeZknAUUHQ8Tw6ym1hk7ikHgdorgu8pKcqWawtYSGrWLRLbf5Vbzes5ze",
  "key6": "2wTiT4RfDe9ExaY6MJcyHWUdnUkxM3eoizAevdPqUvfybsNKrHVYUX5gBEfyvjqYnzM3aMP91DbyFTFqcPubyYrS",
  "key7": "2UJUMszwgt1h8zfGEsVZmXoZh82ddgXvAiLztUUXPBW1c9NXig32LfrkXZEiTo24X3xuk5tQNZk2L4t85P7tyAqn",
  "key8": "2XDHRes2Yq3rrZ1Q2vrZ3AUcyHgArEd1o5FNFuj8rfe8dUvFXiSZKe3EaJKLZy7Qkz6R9BRnUdpAffW2EyuF62mm",
  "key9": "d12qSFsYsnjWripch5vHtjoDjvcZbYwghywv3VXeqpwUW5SBSj9vSAx2NrSL39GSvd7WeVLgxThW4q6SK2Pxdzo",
  "key10": "2editPWNBdr4UhNHpxdR6aRxCpgqH4gYUyb6eQU961PinoZTg9NJtk9wCVTn3YaW1bTNRaSXLyzyfTq74i5cRXzf",
  "key11": "4YesCEo9mTypMxC5SkknJzFezD8B6Ehj6bPCCbsjFMdHbUqGezCZaPuwiZ8yPiDaukcT4uqjRgHPXeLPHdhHiVd5",
  "key12": "3P6B9UYSpDcD83Mk6XxjWjCPvQCBEb9ovRdS1HjX3V4sUvvCC4xDhT9Z9TeQmLJrLy4C4QB8XF7ReXD6CM5Cp9Gm",
  "key13": "4or4SVyYTXgZhVw7ygWu6aty3eskopAWY97eZXP7tKNsDWYE43jyXjrzav9GC3FY4Bga68vxQFDYGntDRxPLjN2z",
  "key14": "2uui3wsThu5eFrkcnu49ifezqEF6WZsyMnvCc7khTyozsKu4QRXs888y9mujMh593dVTFjshp6pK12x41CwvFBEu",
  "key15": "4LDDki6xaS2UQdNb3WL2Fas487Cf4rjBb4XjKYAhvQcSiQhV8JGCeawNNTnLkAwg9JPUUxoGgu55DdgX5SnxmzNA",
  "key16": "3FmFR13CB1CRgiJcrrpizswPbKndcJBnZaVhRgY33wuzJSTZUmJzMzzTCUAv6wv3W55qLMBwcmG7VSqzDEMcaken",
  "key17": "54Y4SMLvYHbgnbqSaARLmDtytuFkDzeW4eHo7CNuePXWqR5JCHDSrVCNE3Ku6Jw6QXXrMzKn3XAK3ohY4wRivBYU",
  "key18": "3XzPshUAmqkRv5fgDzCRAWTTgBQ7MgfFad3fubJzhGVZJEVrHKR8xegqtgb5FsV3xSmauw7v2ePduf6YN8tt5FW3",
  "key19": "3dYzzgChjQgHioR4qqRaAuPBV3KsZykpiF4xMYH893GF5CypzurPeUxmTFS8XcFtm39nyp24cEb9cpgYKC7pA8pM",
  "key20": "qCEmjvm2EcEoQoqw5r8cHK4Z7gBQvjLuGS3L2FBsfGcV95epRSCv3NeRCoBY7gYmTifcKsKjvNh6earJD5DEe4M",
  "key21": "24q2kXMKA7i3mM2JpWhjne6ppKsYCtTEDvW16KHNPD4NFU7fQVgv81krVejy1GiCbchLL4g9AQucnawL6ouQWVMH",
  "key22": "9b9fDUQy1ys69XYXbfZ9Ft4oKB1hiAZW7rsny5DHGzFtpV6DDoukGsfo8KNf8jaaWhmzXppe5ujdREmqPNuG8hz",
  "key23": "2X4dQRAy285AGL7hwabVWxarPGZZwMqyv93pzszkwWhkRd1UaqjyXgo1nm4TajBF7ejxkpzr6X3LHaTXSxfCg36M",
  "key24": "C75U9mSLc7FRi89cx9KqN9kLG3GUQwG18c5bcbtAeVPQJe56YZTGhh9xLuzcJ8x8eCZ6JUeLnxbCPhw5is2JxJw",
  "key25": "4qPy1TXqPLoHdvVmKuBEZPAt1FMtmc3GdPDAu25gUw2eE7uyyvEo3FvJnHrEcTjhWTjMJZMXAC6s2wEnowxBhNbT",
  "key26": "2e98rwNbXdP79Qz7DigZBFLRBzAzA7UnobCdSCEyuU1VZr1kWd8wapQm7jhV1ej1UD9BaFHqoZaj2du6TwHs9GN6",
  "key27": "424R92B1oKkv3eUVh3L3hYRWEC74v24azeEt4XSCtF7DvcHi32Bpw9FUyJ72Y2UAWonb9gVCATFd9w5RcafXvh6F",
  "key28": "2vaRzQg9t872q4HL5QE9vzwCYcPzsC3DZqpGvcXcjzQrwtNyL67tXBLW8njWNvyXBNHQu4onP4CCK1GddbRuo2u4",
  "key29": "3dzWwqExDM4pQnimGt3E5hHuf1uThF4fw4hGry5r1KpCZyzsRBv1K78tw3nCysNVL9RGy53xp8Q6jKE7g24SPtFT",
  "key30": "5AyqcYNrrEyKCNNSBnWwTkK1LrWMGCeGesfXmTjnb1SAbTvRWUdJc22hoa1RgEYxWXx6fyjjtj5BLkDn5tPA4Fa2",
  "key31": "R69CCxrjKH6yHs7nvcesKM7gZs3gF4hFP1e7wLggAsVD7WUfS4jATWY85kW3q5cKiVY9fSRGV5sf2Emh5c75CWB",
  "key32": "5Giq5FuRyEeWVCQCuDWsnowvNHThdfVd7zcqY8GsHZSYK6QrRzem4Yn2fo5UaeqE1Y2XLMFb7tCPR13ShpRZBgPr",
  "key33": "5T3QR3Pv2CNLjPQnRj3s9r39TK2t5gthHJo6qKb6Mp2nV7btJkq5WvkLyMZLDxzfnXunvuGM5wuEYck8GNU9wQ2f",
  "key34": "579xDJshe8zFxuy5hnvU77x6WJXeRu7ZghqKcfuscMnZQcvWngzMVKY7Fx8Ufhtk1UBeQGWYodMxDKwUnSC8CxpA",
  "key35": "5at7L4bVQMRM3PEsVY7W8Z8ShDJYLwWBhE6ZEpDr8kN3cdLR9jcq5EVubp7sUToXP4T2Q92jaQptNFArB8Xzx2B",
  "key36": "33Va2sPFi1RHCf8vb9AjL9gMEJ5bTrwLHAwMHNq6uv4yDeuqJDUTfAK12Wg1NuDNzDco5GUwC3MJUCHoLaUk7RWz"
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
