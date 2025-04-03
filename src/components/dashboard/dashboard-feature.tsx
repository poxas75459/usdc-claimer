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
    "2PJTbEQgjdWvwN4nDMqcjPEQsYjmyRCFfqEbHE1A2gZGkR7irgh8NTDPUP2Zao3H77zVg6UJkcCauEazSDehwHHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHJojMBc5EnppiPqGAKfP3sH3XTmCgBo9qygWAPq17LSU93LM2X4XBvVTt3DCD16RxXtoZhkqk7E5F7btLvDAnL",
  "key1": "4zq38nR5mokmgWZBt2VbJaCR1kDCuN7wRKqDMtbGVKpTqSgM1NSvG6Ekp55hyRKsPhPzhpABhsWcniyGFQvZRpPd",
  "key2": "4EjyCUszT4V79eVVif54AWgo7V3V2Fpx92rHkGSRzmqTfUqPRjTJP4g3kFfuoFNyPwzk8AvwsgEHTpj5aQpAzKRF",
  "key3": "2YMN5dp2DUmuAkQpvZgEJb44aUFp8WLYsCMenKmEgnjdswFA7sg5RpFnVpLpn5UoLNEGZ1iJtxu9n4hQoFpjFDJd",
  "key4": "3M5aN66AtQYqAEfezGf3Xq3qRmvmBNVXLPDgY6rZwWzyov3189dZvZE4Ue9pX9yoWjnwgozRS3MSzcrCfzM6mHnT",
  "key5": "3zqM69zhKrY2fpC4yXM9ySqnTVWLahiniBUsL4QiA5xsUxXky7V5xtY3JvKqTp3MNvibqAG6UrvjFq18pb1JHTMx",
  "key6": "2fXmh6tuo6vtB5CUkN3iDpgTDZmM5R6YVEKveQr6zMmKozQncSrV99B8996dhHASfru7kJcXUchuyJb9afhFLAQe",
  "key7": "5K1os6LtsTDsuTL6BUum5YqBYg1wjyHcUaWvo8CNvDQjtPfLKeJLYkNW8qCUhDKfMcjrpkZJPQeGtEhyHpKbCXL9",
  "key8": "4Mo75KJGZuwQHpgf9KzggjE4QiQciUiAvGu5yzaAKuwrCCvUaegk6ySrzGLvSN79HPzYiAPrAR1bTApovBZ9TkTz",
  "key9": "3MYqRZskiUNTC16ST8f7c9meudiwqojVKSjNFcczra9f8xHF5DdFEiTx4GWwCJqLr63urYFZ62NfzGRHR1m3Ubbo",
  "key10": "kiob14sW4jA2S3viPNqcHDgBmXhKAZWYdUDUZFijaVs9rMFa6SwkqXwHG1ZBKwmkwrrdxYZfX8ciaxrLPodVkBA",
  "key11": "5EPDzbGLrfE4peiBuucHTWfSzqKrkk5VpKbHTghJJnpJWauS1SbBuTnN4ogZfTzYtSqscsGTYNnTJj5UHEUeq3QV",
  "key12": "2tiGnaY5teKFDPUqbg8CJidm7MbsyurbeCLSmnea3T16ik2edDWxUUVi8XdgZuZjxnedommq9UEJRyd4wFTiAdXE",
  "key13": "3WDvzjMW6wfi7fWatu35Gi82tyNGpS5oLfCHPrmsBapKsgwezAYGpRLjDoKiMsNFe6AhrE7DApNzhSMa1qMRoPZF",
  "key14": "5DhQ4ovyrAuPeB3BU2pXP8ULhMMSRkVUamS2wng3p6fbcHhXt9n6j9MMhUFCdZpqUUhtyo9EVbenLPJV6QuEvun1",
  "key15": "3RhotpbrXefZ3azdC8ktNbjn6TmE37jZ6nKKGHCUva33mHKwDDG3peDGXdhVyt4D4E2yX6JpQsz23pYSL337Rejk",
  "key16": "5QQ8pkX47LRfqCxWK4Cs1LwQV46MVJ3jWXof2BqiDejVtXXVu2RvXT6fx4Vu8JwsTDawtfBGiXRbnSYaCbHJhn4v",
  "key17": "2HiHmvdvwysvZ3crj7qBnpV5nDFgqSjxaSLMjBU8oBbjTA34sXjkhRDeSbb6nX5C7KrYawaaYGgYRvEStfw1wJWE",
  "key18": "2rLxjAewppDuMGnAUpvzWf2q2w8Jf7MXJiWjHmdDSHEfgXcGTJhg4dA8gWgV6ySnJDDiPDax47nHZGgeM9Z9GY3g",
  "key19": "4fzGzgvaP45zNJE7hXjCZkg1eVG4pwH8q8EEq5zfkuYYM51Wcf8TrtgTe1GoVbxBWxot8EVXcBaeUb7H2oK8nq4e",
  "key20": "4NNQfaDPV1BCGw2vJagzZs5qpkeQVXnNC2r61vcMYjq7jVtjtsgcnnoNN1JGFphs9yEVfB7fmwdgTrp5BTen81j3",
  "key21": "5gnTzfLSXp754WS8QE2wHpHXQAzMwdGJxUE98YoashFzoaz18YWrddJeGnwzy1NoDFDTLZ9Lzhr3rM6dR58kz96o",
  "key22": "33RmtyVeTKLcT5naprs29qGGDWS4saCY4uKJbdzCaoKrELnGCefpMVZDvxdHcwBDeqGF7WR3eVzSrutnsepTBxdo",
  "key23": "4ZQqM3qWJ1wpEU7nTYLoJJczf3iqLSgFRrqvYDkHfc4tLe3Dk5TtpWPAsnzspLVxQqVhWZAPVARMj9WLEEuXytRL",
  "key24": "2vtehLs53UKptbK2uMksWmTkH92rj7u8FM3zh489nsSiV4DeSqK5PxpboLLrF1nEvhwiwoWC7KqvhKQqJRR44FB9",
  "key25": "2afft55DMwJFSo3yKg21XQhotVpgQp7cYi9YknscZaFs2BcojoozwCJLAY54u9hauWMto1PBiEq5hY9REcjiMkyx",
  "key26": "i5sYDYqoZ91FGZzQtBPFq5hf2tUiUvy1vZJ3CmYunKzSZXuMhYkGjUf7J165QeudPHJuP8TGUD1ntHhBnf623HN",
  "key27": "2BUoMnUnoKRkyRQHf8ERQMRYN3qk8rWCH5u32KDb9bn7U3spWPVZafrv2ykzRqXUeiAKQbwBqa4Jn157aLe7HRou"
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
