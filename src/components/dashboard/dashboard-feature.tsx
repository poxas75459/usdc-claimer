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
    "qeew9LXSYVTjWmdHQWxGdX5kmZHsDMry55DhxqvyFGTVsp3AXwAgtbZpJULmsjGme4RFKNWMACa7KbjsLm4Y9kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNvHEgWRZjKYm8wfG8RNW1RAebibHtZ8vsGgLxCZ5HRjRFF3quy6jTmX9dA3F5y8VxBQKPs8FPyyb7bL5LMY2A5",
  "key1": "EWfkeaRRhhp2t7aRJ2Gd8FP1Koh7meVyhi4oc1fyhzwaPd6Ra6Kpg6g1QMnyJgiBX6vuSDcuACQNPummiUK29oW",
  "key2": "4VysTQNic25wNam2W5rR7fc4U4aUrTinqRxbNZSYdxa81NcyfCHvuSMQmoFMnqmaKa5y4KhZRLjaD6qLcA1bi88L",
  "key3": "4xP8Uc7wUSVhiYq6VGV2T6KP2qMDfaLDzvdmJRUpH8Ktj5cLgfQAyybtmMt1F8dzQxypubquQvt6PDC1VLvvbLg1",
  "key4": "4TeCCPQYuhExJxWyzFA5LSjz9LCm9tFv86Fnim5LeUdjwiSzzL7vNRbo1Zb82RbiNUp1B9EBL1qjvfU51UKqX2JJ",
  "key5": "2Z57wxyzsy5KeijAVeiL4fS6q9tEyg8gBq6gYqMcoCLCMbyQu1whMgAJTLWpLKzXSs9VNJoLQ5wmkBn97NUkXf5M",
  "key6": "35LNcbgwS9PkTPANZ8HQoMGq62CpEhwpFySpa9SDboqGAh6xQEyJjvj1pjcKqxQr9dyfeuZYKn3mwHwTyC91iWmx",
  "key7": "29ipdra67kzsG4cEUoHw7zkWJ5ysPhttFJrKwLLYgwG5XgeKuvoZV2xmF8v98A3YN3zL9ZpadzaReEd7VKfx6UE7",
  "key8": "5ddVPhkBouP2sT4pDthuSbaeh1E9ZNaueT3NNWvKRyYpZKUjuFyRCkyE9bHFz5SudpYJ534U6h4BhjcYzVuQmKWp",
  "key9": "UuLhRpTQwqXXi1nGBXmjZNToyTF8eK8YJk4b1CnyN95nCQEbGXacjJQm9BAkFUoYWBqDiiu7mbwtiPs5k6GzsEy",
  "key10": "2xqHmENz6gkfSqToD1obGDg3B5KoEqmbjTZy4wEzbvMVSXdWHXCKEgjUGZjKYD4WPxtXDVFPgmVgTFecdCsQmx53",
  "key11": "4y7QV1zWhkYLdwZN1diniAkKabYP4yeTULvG3KRBKjyL8khfPuyQKoDen3HGz7egBcfFUbrt1CGVrSS2fn4PUt19",
  "key12": "3cQ2qZtFeNVrFU3LeCjNxqDi8c2q9FVLyLKhBqTujMQYwFAtM6rmGRRm7mZH8okEMiwXUcnqHiVAWB23geZTPm79",
  "key13": "5zrhVewdhEAFNycyuBzssrWWuvyRaMPPyo4sVrprHHS8jspJbnEuCG6yeo2jpiyCdwAthAjX3tLbGLprRm4XTKiF",
  "key14": "Uu4wETKcfEKC6s7KAGHAcSDRxqJmUeMf4rPKP9WjqSLNwCCYndFjnobBsK6Hyxu2QJNvAqCU3HegpePXyuk1QNS",
  "key15": "4HtQiFUysqLZwLBkekjUCyD64vQR4jKQ38TMxaLjG2koEsuZHMoXiubTXttF5XaCFYstRazMH9DJQHBXcmFVDKtz",
  "key16": "2KN5ZpEey8erHYtTVQdESNYc5YRgFeRgv6NP5XWhXDhmbCfjqxwkn4z4YsjZb4VMdfVqNkqqxwDTXHjt1DdY74tr",
  "key17": "RqgFsGg2zsDgFmgw7CHUdG4aqxss7F1XkFq9qAaAYLJWS6aauF57Dgidjhhd1nEL5HmGBh7A59gtfn3AukDuKZW",
  "key18": "2nr1SVRqewMqxR2pezZvPg4HXKmUYFW4PxL9xJMvmQHwKMWCguCBgEEnFhqGYFHAmjqkCDDbyVtt7r4wEByjGkhK",
  "key19": "5F8LSW2hYHWYp2Kr19oYFS8tMZPxDdfGD3U7saQ4Thaq91A3cAfYwqdaZ9cstfcTZNZfNyQUXwxB9UAkc3M7b4g4",
  "key20": "29eLiLmjbQeoz4mfRmYCXJKwMxoZX6w1cwpY7MXbBPY3gE6FxbAfneXpioq2BoxufDKbQGFizHraEGwkJSayQF3G",
  "key21": "32ZvjsVGKmu7Uk737Ej6RptdDMA56REPjkJgjzQhqk2y2cbXLP2TwJkt3dBHZRy9jpPKrA6VNCF7MN8uWKKeo5Xs",
  "key22": "3Nxs1GpTduUSZShby6Ui3sdZHSpg8cVCqz49bmvyXbdnZnCCtysuC9ofrwcD2V8Y8Gyu6NuLywuYkyGFgLcxvPsY",
  "key23": "5JwSQobNSzBddJAyChifkL3BCQqJxVGHSLQhyfcsofcWhmDHqmHcv4k65DD7WV8nZmGmNtiwYEFowGTrhKNqxV9T",
  "key24": "4ZoJW9UgnYVnfGWUGH11s7WnivCMXEEyJyVgMrvtGYrscemS3qKWjhToq4mYnxFGidqueDBvfX9TKyXG6APBE8CP",
  "key25": "5oU9Qdy7iSr4bew3w6sitxDQTZyhiqmcumhxchvFDxgUzHj5DjXryLCig1UBZPG3bedFPS5MFwy4Fm5Yhq8GoFwm",
  "key26": "FEqCP1j2rt9vrZnuRbkj3VEXo4ado2srNJ4EhT3gHDAJgPFY1zmPUGwNGs8qFEMQe9XtCo7jwzAKiaqnq2Y1kh7",
  "key27": "6PzPthNjmydrvx4Eowui6NxTahN9sryhnfeaCRSAZi7MXyc9u6qSC1oiNQeCdmC1pBToiittqqL9NPnZQizk6G6",
  "key28": "UGYgJh4ebU9n2Yk8hv4FRw22sBeszuXrcDCBMfTotSkQdo4xwNpVifwqa4jUKSYBhAALNp195AnS9fK6ZkfcYAD",
  "key29": "5cXZAMxbwXaVKx6zHrFGtckUY5nAFZFi2dYfSdPQiWSSthTwWgtjEbHG8Tfwtn1q8Sww56Tf5fR3LXXubpieo8QJ",
  "key30": "D9PfYqTXKFuK9EamME76dxcDoqrdrKGSwVuMMRCefBjNf1r5rhrQpNf3iu6aDcYg9cN71XXjFCqgtTxZanrE6z9",
  "key31": "7orDJoLX1KHCNFdXLJaXyEH8EtqReNZb7K2KJKSDJycSTeGoYCWSiYhfATdDw9KFN1d14xaAts1CR2QpmMn9cXk",
  "key32": "4qZwumzAmHYvevCTKvEB3N5CSYzuoC3Df1rptFivjYZLvTpBvYtzjXmkfgUHzWJ1Tg6ZdKmkbgx5wd9fPe3T7S5Y",
  "key33": "5vHaWinMYVSTPbPdiLmMoi1Sf6SdwodK2s5bJgibGUpfAvrx1L25Y6a57LvFAeutm6h3SiRaNMnw6aLiuZxMCohc",
  "key34": "5yUuoevvEKkdE2nrbDDLuV1cE8KSTQUP6XaKJ1uUiD7Gw3kmvuaLPhoes2JJLzEhcuPFh6CDqyH6zPtkor43p3J",
  "key35": "5aSBMriHMDARq5ph3Br25yesBciP6qJByEk3joYk1bP4NtgQbCw2rLouMrC1Vx2EyHHd8519Ui3JaosJcR8P6GTi",
  "key36": "5gzd5G2HZRpJfEoXHNT9WQ1bcdiwybhKN69o9ifKZqjJT3HCos89vdAHHk12hNZRiNkCPKCh9RURnLswB3btg2Kt",
  "key37": "2aYesSQXRUDfttUBVH7fQWjz6yuqJmr9EB4FvVxFQFZn7mYWwsRmVsYmgcu3E7rNkukehdyBCCq6BibLSQidoSwE",
  "key38": "5NFLoXj69pUx1BQdbWgAk53C4Urv8c3xMeuZest7TZono7z66nNWgdFMtQzPc9VReCqtmiBFNyx669D8KnRPDEjh",
  "key39": "B8QzrzKkg89xV4XxmbsiHEoFmoXWEpyggeYeJ5DodhDeFZpjDThkC2ipxgy2p7bipz1dTtnrgwwpTGCfmsEitvS"
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
