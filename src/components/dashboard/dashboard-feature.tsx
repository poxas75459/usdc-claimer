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
    "461rJofu4mHTu6zAU5b5bZLNMQtnU9A41RpC1YjBYWULk5KJDbCFmgFimWrx5qJAkK8EKxMhUcS2ATSC178vmZuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJcG3ueT6AV4CpLC1RQ5vj8sSmoCR5Fk7KvTW5gfXyhFhAVrHVshYcfpGuLNF65GEWahuSyT5BD9g9gkQNBEq4g",
  "key1": "22oKVEwLk97pSARoVUWtbGG1hcLdycqqFH7wXHdASveK8o4WwZtDtK1PdHwSTLPsZePYM5PewDYfHHp6bPc1wgx2",
  "key2": "652HHYv6RkhkFSEtSVfnfYuc4VSZtJHf4AdMtqzrenCZxnKC6GgPJXMPZvHGguvkz8J8re2rjjTwmNVnLPFbiVk6",
  "key3": "5qASYooPsAAF589GQf7AwTxJQWfKxUr9APTtdG67B32pgJuKU1QbYZpCKP3rDPJbCCsGYb7bQjuh7YGQ7r8pGkKm",
  "key4": "5abLaer7MWVs28fBfncdN9faLqk44u2DzqB3cHG2inGjKs21FaPSkMiytBZbRwo3mQ4q8REvCB3p1LABj3c8sY1f",
  "key5": "UwV86PSFyKBgNjZW2TEQMFFf2rnR5QCkEGnZcqqrzy2kiPkV4EHkUD3dzqmJ26Z4EKX4qKfXkSBUMFGGfXD3iaD",
  "key6": "4qu5DJjKXMfGivmRKFg9ChwViczThymiBRHyQqKLaL2C44MhyRcVHjLRQxjSGqLMyK2CSsdWcFFwWcAr6PN23HHH",
  "key7": "PwNrh33d55hrigWkb4aFxLC7dMobLxUYH8okKEHyJ96JTbbV7Nhed6E2xcAQugKUF6h6qmL5e3WLBDv33ARgakm",
  "key8": "Q2YkDs3FBeSz7toWawzSUb2dFNZQWrFyAJYYXDJgkWGzttprDTkNH58YJyacVzn7vQ5dFpVFd3qxA5cU3xPKD3H",
  "key9": "3HQE8ZGYJRqiw2UAMDMofx4isq37DHNbuTqUKGfMFFweXDpTi6NKUKQdh1gTFuykc3NBn4gjq89euCS5h5qndT8Y",
  "key10": "4kHCspzvxMHyhE6LKAwBN3pUccKWHbt1KYWBYx8zkWzBC8ycf7CzZyBmw6kqspcwUmhQKKTZfK7d4tbrL7RQALkC",
  "key11": "3PkuLUoyMidqkHoDZ5vGkd4QYtaNdr7ptiuaCB3uikdgiuAmXJu72jnZYyeXJK1k3oPaYUNE5HFVwUfFEsmXCQhv",
  "key12": "5QfvEFRs8Fn1vrY6kAoqsTtJmMpo4ig9q2C91H6WQELfULKhgNSQgs3xHjCccAefLb95BU7fY9UzpmDGY3LdBWAE",
  "key13": "3pXt9goP5zUWWvFJn2UZtrNE2TV4yke388GCrmNZDuiGZjMeubt9HWnEH7grDqmKjoCrPb72X5AfKtW9s2DYQr8q",
  "key14": "34iHBYNMTNiiKJ4CMUTd6Zer5DLtG1ZTTn8mUbar8577p1VEULjSVCCWPFXuZTBqe93gyy8h3nLUE2c5zXKRMQpr",
  "key15": "31ZDjxufrRFju1xcfN8w9VEJcpVz4Fn7T5kH2Lg4Lr15FTVgxJeizEVrKBVZgKAndoWuZJGC25myGm7UHUes2VyT",
  "key16": "33LsxEopK8UU4V87BvWjr5LDc4EcuHuBv2r5KkCVDxfuwXMi9pXYs5yX9ztWi3zHgrG341L4WQwPAUyns8tPox1d",
  "key17": "LURZfsujCzczXkCDCtDAACWqyCid9jWFroNWyoro5Yfem5mtipFvof65YwQeVNjf6Yz4mhtS29pdS9ZJQq1Dnpk",
  "key18": "3CRUSVGrJshWNvz8iD48mnz1tSMqDofkRoFqUksyFngjPVjR8iSAK4xapPjFCaRCNchmcfk12ZsaMyWg4CYoYarf",
  "key19": "kSN5TzJAm6UppgGqMNxuJeTfdXwAwVQPRS76bofro5Uf3DVVZ2L2Lnz6vudh1F84BUkLyW5wAN1L7rDMzVhithG",
  "key20": "514hhNY3BFm3o9DYMHNje5Ldvgt7MEstKFhAKWC1115eFF6AmxBF5RcgMzhHS1ASrrPzizGHDWrHdc6mSNCMWysp",
  "key21": "583ibnfCCsbtjZiJ3ZehJhVPKxX4hLNotQ3Fu2ZWi5aRT6whGr6WKyoNFdctpvRnGBoVSsMZp6dpoKmY5ASHjzBz",
  "key22": "hRaK4533pSSLisJzs7CdNE2S2i7WaPAwtVNAZyXXhnToJXwZkNZX42h8GZmdLRco83kiQf2D2sXCZkSwGLCsUuU",
  "key23": "WY4ivAYykV2e6KW7SpdVADKaWwRnGR8QHFo79LRQR6sc47G4R47EdGVY8bnzfr9E6dpV6vtQZ7d5NTx5GSssPpb",
  "key24": "3QYdQN4RpSmyvRRHfP3BA7epEThxQW7LVvc64GJDP6EJWUiSyZKyV3Scs9adhZc6jDSigrSoR3bMa29ybHADP5AW",
  "key25": "TQVfgPspBQx6xFozUXRpMZGFE1f61Skc6tKJ4Zg2wbogJfH5z7AaKZQ5CQbY4JzNivf8MJtAkZECapVArKchmdx",
  "key26": "2Drssj8XHnwX99NNnLuLKjJZGbQPuhhYGoL6zehNKVS8vBwgLQvewsXRLbJbSRsbSWLMtgsjxDLQgyTZVWsnATWm",
  "key27": "2uXqKVVmcALebhEb5vw7mKS5JzULQgC5S4JRC8UbvDupnLhGsW6BQT2sDN4Te2rH29qng9bxaYdW8LEGWUZBiLv3",
  "key28": "5PLTEUwwkimwZRHD69fur9SaPE9aEtRDnCzB82XrW6e2fqvf48gcdzA7sTdTy5N7NvoKygLemuxirjoZgYeTutHi",
  "key29": "3C9h9fH3aonagF95ENMpExdvoj9Hiidq8bm7RuDxUyuJqmPfQ2vPTm8gMhEJXpUXiwLwV8FhEVHjeN7SvNvL4tUH",
  "key30": "5aBTDCGHhymeuetSTWf2USfsrt9WGsDYkG4A3esFUCjipjFRwp5hWVy3gpVtZykdeCjiNWMRYF5mBpwEqyydBY7W"
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
