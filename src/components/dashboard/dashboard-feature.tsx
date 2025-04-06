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
    "4hNpjtVjuCpmQzzDjE6bVcSuDNH8MnqtDWsJw44yJ3b86whb9tEwFWRi47LK8RDUXKFycLP28eekpfd7MGgc377Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qsftmsmk3DUAkBz5YErCrxWLWHTyeDGSb3KkP8mCVtKkH5wZWH5puE2Qk4zAsGt3WXFsLB5FJXqTSkbacMRE2fW",
  "key1": "5miN894JdU9SUWuznc3Zp3ofCt76WozdyaWV2sv9YxitH2motxt1RCDxYZVjEs4HMx9ynn6rX1jDxrn48HiknuLH",
  "key2": "4Qg5rUfH55ug1dpEUbyZZhqAuBiFfj8EDe9w5BCLzBSc4kFpsehLy2fbR4CjKaH9hWFRF5usHTgSGsNuKYpgeaus",
  "key3": "4rhzLj8YZfLt6mh81kAQjfAGSU7NtTju4iDDS9g8nmhpYSZmJvVYcGJikg293ELNNfxm2vuFiovK6uhsBjiJTXBF",
  "key4": "4YaRy79xzB1AhF8EouZdmTqpGQbUSxu1YDhqcqeefFie3xCiNRbcBvrPT8a4v6T9qWVrbXwAg3HW6JjwwLLs15bE",
  "key5": "5HMuvsTFtw1SsAZMzvtroKhMhk6Yy9xDpWiJoGnW8faNTd7nYh4Wr2dwdzqK2LvpgFncw3D9xX1BtvbgKS2fNdd4",
  "key6": "3CdsNBoJJHwtNL82Z9H6fozbRbHFBcwWpfLj1Ubf4C23XAKYqGrU461mpaGmPoQqJuvrvkbgxqJgmwTbCdTfiyub",
  "key7": "ZiuEjcKD1bBuqbauLqGqE7F3nGPszkzyMChUxs34Y18xTRnhnLY6xLKg7rZttm9gtzJmakuquxXZt6ghJFaeiXb",
  "key8": "4rrFBesKhfSBL9SyncWsSzZjKrhKBWYqAvNnErP3dDBDjffRfPmAQbEBW3eKFeT6JXF9j6CvMpkJBKm8M5iXYBag",
  "key9": "5qDK5dixizAqHNyVUzfVhP7LGqXWkJN1RruHLAuin4VRJia9Q8PcvAfKeaEoBBxAMKZcTLbNAiLy7phHDcFxib3J",
  "key10": "3ZPZ2xt2TzpL2LU39AFARDBnJ1LKSe93pi4GdkNMoEkrLqnsXRUYqrPPkUiTgNnFo8CshHKdGcta4cCyLnveU8M6",
  "key11": "393G45bo9Bw2tyBFvUPqsKEWz37hY2YKbv4ZgyTHuEsFgfhUa1xarJXij53uRvurCdsvMsfua4LscT9cs1BRzorF",
  "key12": "2tyxTYRzhUcQjodHgH4J5PeKjYkBSRHaXDDA1YsP8bNamxM2yYT1BocYVYbDTN3GugUNEXDrG7DUzHdTdaJqyjhy",
  "key13": "3GLDJP9G6kBuU85BVynjQiripgt81LUaE6XvTZeVpSgoVcmB9GuWYyGxypSaAWQkhxq66z74gqrSqhjU4kjzkuSM",
  "key14": "4aADB4HihGvNvpPXubbTrcBcKqAcfjfovqvYjupCGqz3BLPA4anjoNqeZDa9AbEBRHXfXXQjfvw9wuAmbBm62QpM",
  "key15": "5TprVgawn6VkWZA99QGYpGS9R2XCx9tVFw1QW3cTc8qWwguVRbt971enz2t662t8C3kGbJ9ekeq2CHBzuRmm4gUt",
  "key16": "Lk8gTFjAVKoxKgMvz4mFR1xujq4Ju1FfE3PR2YkXgwq6SFfPNa28bMuDtzohYUp36UUBHjQ31EcyQF2hn3dVj1P",
  "key17": "5M4tuMF2D1dEDWgw9dFhSJz54ZsYPxNC5Xj7LD7WM6RGw1HozGfUK5Xd3UucEuAgiG2BmbdX5kAuvcifMzVGpNYd",
  "key18": "3WQH1VADbqBds7ZMDvvvqgrBq8kSLY7VpwhFMEVfPuiTFYdUDWzoWqLG4gaZgx5KFeJeqgf7vpWY1v9HCQyF6ecf",
  "key19": "3AVHZ6iZ4tAJU6vXb3eGqkQYyh3DYbVqvnoFrgk8FQ9nVrTTVcaGoPYGk2NkXS1zTv9NCdi2kN2v46SeGeMSuk8A",
  "key20": "2fhtKpG2mwbRp6NuG52ZS9b1ToQJr16bdH2Pm7sn9CHPgrkrhQPw2y2atAWDG4uKbeW8Mk7XSEEWZVccxFfKw88K",
  "key21": "4Zrqgq2rhxdiNAJ2aJwBFZwmFoLGuKHPqah2rgqCzDFu5hMjar8aBY8pitiovPQsteguMmrhm3LeV4xDX4axrPy5",
  "key22": "4MQ2DkZymUTZRHqfd98rjCx8cbDS1XKEsGLSDZrSjrPruk91wU3e9dcqnqYMEGHaN9FDok5GYBq6QpZ4uckbi6hx",
  "key23": "5qxbEWMfv6hAi5j22wYDmx4gK9mRgi4wYFJsvff4FNVQXj23ZpFNqprAVgR6gVUeqhFPBz5GJ3UVHDtZzzv7RwLL",
  "key24": "PnvDQpG1CnHQFYfLCr3tZmPKaqJEcpwHyQi3UbzA52Xgafm1QAJst2To1F7dBVRRScNEdHMgBMUQ5o6DmeWmF4P",
  "key25": "3kDpqtTJzZZwemfpVzLgEJkBCkQ9DfHG1yQp59f3rG2iTif76PykvPzD242y6kf26ELgEqpdksNJMzLdMPNe61av",
  "key26": "2tNf9A9Rf8ejH3Qyh3EwD13cnKa8kYjM8VbJNycF1FCxjHdNXkQ3B4W1MAbmerqrzaqa8Gni62XMc8f6xD3ekcoU",
  "key27": "2jroGiTWmptEeRPJqzj13VCxARXKQmmqoHbacyf14tV9A9jnEVHh8MEQNM3CwSay1NHaMFaE4wvyA3YKaxJFzc1U",
  "key28": "4YQUbf3qqUH14eSf1n3MGU6yz7aeUigFJHph9Ze9bkmFM1dStLnepymLoKLhcronF3qC6BhxBbqZ8hR2YAPdMSA6",
  "key29": "5cCZR5pzh3FpQjgGzMxquv28LWRKMwzoYZtVnFArtXUhAaRnGT1WHBDkeexu4ymGaVBCbogsHWqnM7vUKn1HVa86",
  "key30": "4Tm9MbaFDpdo4YLW3vrn8KBncUzFivcaZEeA9n27jrxpXsu1g2dnFBfC5NvkJHdFShDDjJbxvHCvMLKxcqFgvyeA",
  "key31": "3vEoNzfWdnfHqUtPeFp11Lz2dYSeJFpuwPVBVtgiof3Y2whepu8fWri2BcD33htFmLzM3MzbmPEo8MGxLRNy6xdE"
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
