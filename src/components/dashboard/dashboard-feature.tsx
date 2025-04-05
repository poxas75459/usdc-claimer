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
    "2VcwZVWig1Bg4oz6KmNFhRnLHNgLFqxi949ageJymGrhZdrKYfidpBivCeYwtRGz7Ew9UjWjmYKbZm5dzTJTNLJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQoWCvJXEqhmYbyvmEwK8CoGzAModJpxkdKRWevSCAB3xv4oxqPhvKybbCBgRok6JGvVe9ZjpbTXg3Feoxo91Zd",
  "key1": "ugkNWeiLrSBWs5p9M95UMp3HxRzzWL6EPLfxWgXAnot7XYtoYPju4QHa7ioVmi3ajGRcuaKpT8S11DmqhrGzH1D",
  "key2": "Eh6Kz6JschDEgpxEQFbiqfjDhVhtRi6kzFVqRjjJ6tQq78FvcDouNEo25PEx7KCViq4eARLYskbAioxHTfAgmLH",
  "key3": "51grvFFXennu63FHmF6BJxGtwD9we8Q5hfRwx7oKHjhzeDLkNi9aW6JAmckgYqXoJ3pSqMeC3jU363nDZUwkX3VP",
  "key4": "23FPE5FpihjHANKnAioFiXtDjVky6uLJXdrQPwYF7xnuFaVsFsqLe5Qxd74EcPrMWXYMwnnZ5nx6RYJsomX2bP5C",
  "key5": "3Gq9zTyQwSNqZAjamC8jWsLsdwPTwgjL8fKnjj8wjEupCCiFiki2Qz3xJXQJWAWrMn3TiNoFwBZ969pwuQx1Bg8L",
  "key6": "2LqU2oiARyjDnt6Eh2k3JWq9fjMCUMnM2Cz6fFfDfVnd8egSe1e9g8aFAXMqU3wLTSxT2dj1jNhVUtK2r4hinsRV",
  "key7": "3QWT9UXeMwRAoiVMYVznUmbLxUPBB9kU9dwbpS2i4RJFzGK7KXQCnQu8MVc12AfgudiPE3akS3qoUacPbba5uUTX",
  "key8": "4Lh1nkrFdx6heg6mJoN6Cm9VTkXxNUxuqNie99p4Ef9Epk66t1VNAKteZCCfTbntehMHCVw5mFYKkvQis8uoHLLB",
  "key9": "6oWun8VwCavmc4CP8rut9ScipZa2e6bBk4ePTGRQwGtotdLSDUXTBP7sMhYrca3gZBzhrNv1vJMMcp5iL7zg2tm",
  "key10": "ZVr6abj1e5UxJvTuaN3viRA85tJHUgZJKqLHaV5EXWrMHLDVzYsefW4H4LUUSP4sqPPBe1xb8F2rfnQTwEmoZE5",
  "key11": "61RyGBT5rWFcjc84svXfXVM6NdpXBs3pRttb3fonNABCCi8kWSurLYsLMDDvYHfqWqd8EJLEpi7oQkkFAsCHM34M",
  "key12": "4VuLdBCKRn9cAxNVWW3eRLXzmiGFPfTUcbbHUzLnUMbVHHNcrkRHgptTC9FsaDsGM2G4GJJyxVjaZcPDMF36HmN7",
  "key13": "3mkaqErsw1rnhxuDWSbnYDFzZ3smuJfF7FqUfwNdjxTBPYdZt7wm9W1f5S31q3WPMUDQjRZ2K2aFvh8gbaDydc2q",
  "key14": "2BecN6NmvaPy8PbvrSo3AAbAHdNTL5o9Wp1Mx8pd23MtoxU59YE7KgZWyasaBMNCj35kaDYhipqmDwSMWchEDFoU",
  "key15": "2rmzP2kdzGhuExA6ZuNC8KHmwYMVBBDWFx5Y9P3WUjDNMe9BBit1jWAzgTZQB9ChdduQQnjEhN6CcCLQ1f6dw9R8",
  "key16": "5c6yCC75uSJavFt3dBGUwNm6x7W3XWURoEVJc9hR9yWdUc1NrjxnR2CQgiaLUownEZXgBtDKteGoKQcAHWwVcp3G",
  "key17": "3zRFZaLvyVujnX493m97f8j9YdxHWZqzvLPpVzor7qtpyBvQScpBFu6SNx6BiXpxiBK8Bhfk2k6UWePxXSNuxRqq",
  "key18": "4FUUH1YekHPJTxMQPGGnHnBeMF8mbXZSdUTVuG8hjzp1LC2cA8KTSNq8UdwZvvP13Nv3pmtciE5KLGno5KF7wgHh",
  "key19": "GPKd39cJusu3R2UjLDSkGX5kbzHviGk1sraqP5L7Vhs5Djr65jah4cgELigsxxAxSJusvKo2WmTpBcuo9w1vy31",
  "key20": "3bnMxuMzZUa7KG834n7yhKfCbj9b7wx7WmHFs2Gy9qvdi5UoxDwEmZyibs52boe8N2CwvRiM7ZWtRq3j1oR2LGcH",
  "key21": "5biphaMvXBdFWTYyd8fKsrkjSRs5rYYb82gppjikEvaiVWcH2UdqkdMa1cTSqULqWSXgMqCwGdzHwJJJLF15wMQy",
  "key22": "2Kh8CsTBFPcH87MjmLTsD3i7Q5GASE6rJqCeGUwQwTJQ5WLLPuEjZGcp3E7UuCrndQgQL9zLdBaDMNrNzgmnYziF",
  "key23": "7T4ELhDSYi26MJNKaCYkPffaymwRUbno38kdRZDxFJDNpLSpdmmN79uy6TJCxhfDnBvSJQhytWLWyfHn9oKRmTP",
  "key24": "4iE8ZZjYYBB8sYnFLsDMFY68Ys3n2FMvV38kJeHeptXYwqYiXZyqZhQM9juXpWeqPub37o6rm9kiS3gboxdQnBaY",
  "key25": "3XE9BvEfp7WEAvcZFQBaU2EVEVnL15y4RhtGrss4zpwRm1Eq9sNb2xWK1yc9xf5xsnLQuxszjjSa2D9GDKSWhesU",
  "key26": "3UPSVGochvdQTcPH3JgBEYyTtNbuk5eT9jiW2qhxtf7WuaczGZ4fy7tRbv7cfiTUCexhJgi715HT8F7fffeBZUZK",
  "key27": "EvxqVzr7Td54bYXLiNrqFhoFsQ5cpj7kuUgM2hTUvWhjFQepoqkUafn1pAhRE8PUvHCodys6PNsyLdjzfsz4Qkf",
  "key28": "58JttqKgTwEFKHy7EtwiVRrcKbkKQpPPBrqLgC6M67T331Rn1LQbWga2gYxYxx62DcuuetCoeg6VCDU6ZDTcH4P3",
  "key29": "47YQQiF5oWuaNdNy5h2LzpaM284U46irYvTPT9V5MXzk6jmJk7QMk2bB9NNJ22aerNc6upuztj1jnLMofdRUkUVe",
  "key30": "63j5mCBeEtR39nGYxo2HL8c7nUe84zfdK4uLkaQwpqdyom6LrYwDGLwFosmrhFMRNUkfoUMxQDc3aCybNBZr3A2i",
  "key31": "w7SnUapFJzzxV2KPAvFV6i1ABeL8JobhgAfskidLpT19APRdoPWztM277c9BrnWtRpm7gAaaZpCz23ioLzKHC8q",
  "key32": "53K4s66XbQubosRcZZrqD9woGQ6ZSnDpvCoraGcdmifSuFrXp82PhETcQew8sSxv4qXmbfMZVuW95RLJXfvyPsyd",
  "key33": "51TzgEcWqDy1gzuA19mZX4vZDLNh8LfXkrj8pYDPxYbfKXcrTKdCTYhEdJDzjiAV4kiwMNi7rTKhtLRzkastwdC9",
  "key34": "3R5tvGMuJ6XgSrzzHnjvucvVqBSQQ2Vif5Jyyt7qyXRQ2drXKnTHEfqAQDUd8EyTXrJ5VeHnMDTxUhAwyPgX2oCg",
  "key35": "44m1dLzHYuE8jM29h68hgqBXazMvn2tsbjGr5RLEjmVqM225zrmAquGXVWfCQxG6Foyb5PNbJ4BeB6a7yuMPg1pC",
  "key36": "cYYSn1D8cNt8QtLnBEJAnCM2pZCLuDL28mJHTGDbT8NZZj3o9sSdEm4Xe4n6g9qernyEaGkCWjzAkAj1ziNz2KE"
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
