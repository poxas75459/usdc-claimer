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
    "2JfCnGXUXU8LjiWpPvbbC5P4ioyFCJ3GENHgr15Uxc2ZyjiMAS4guQp4XdDzbDd6N3MzvUkRLQo5gLWisMZ58gue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZUhJa8vHw2dxL86HXCj1TZxZ5f2BH3aGempzX7tgWTvuiCH39Gyf837WhMaNrJNcuwEYjcacNWfLzQ38zq7tKSB",
  "key1": "2EmcN3w8qxjtdTnmUKGcJrceR4RbiMitRx5q6DSejmimBJCGXqkyYjyM8MYN42vThPorUe4T7WHFn9DYuQ7pVZv4",
  "key2": "3knXrWrm9A3YnYnuguCgvGTHafooj2TESdrikP3hX4m8qGvdrK3pT1QV4UVQVUP2xeFxwoWQpXYk9QsNYKP7ysYh",
  "key3": "4eYf2y1HTPyeURNcuEMA455sSe75Yq4tGm2gJZGoZj3ptCadpCHKxDTkqci766usPiUvAznkf13QFXjQsuH9SCF4",
  "key4": "2ygLskG64Umkfiumu8Kdfp9BGFMPP9EFUPPrqFZoQx6TmTPEGrhMM7Lo4gWa4s2LNL4qJ9tk4cwL4vtVkYVbTVu4",
  "key5": "46FmCizg3FKQQG7ouNi8HBViyo3NijT8xFf3wC7aCai2VaDuuSKxeWvDRpLqETCxSoKtAFQbgq9oqcinX8mjZy3f",
  "key6": "2fetkeWtw9oCeYytY4acgNafXzmHn2x7nfYaTEs9VCE4L7zpgksHM89bTcNnmwEXJnuh16uk9F7aEvZHjnuTi53Y",
  "key7": "596CexMi18cNt8Q75ANigLnCJe8882JAMwGqkyXkUk4299yb7VQLwsyN81F9jCpCgoEtGLWxidAR88EALME4JSV7",
  "key8": "PnCjJrrBSBsGEoG2ZhT5D47FVT5NiA6o9DNnzoPHdF8n1aJGetLGyDS5oKE3ns5GdSFnaRDU9Hu7Letvsc7ZqhE",
  "key9": "4UXhRiobepqMf5SZANKUinkAEbBDthqNPXoT2cVCf7MfLKDVU7y3TTUc42esJMumtg6LSeaMc6EUhT4qFrJk2fV4",
  "key10": "2A12njJqAEC8QNw1NVBwKLTFmdvwPPcvRLFFkKzb785ebMv9eH8Z4Ue3NDrQY4hWwQoiYXAcUqXZbRKmJVeKVwpx",
  "key11": "GgU4F7bEAyWqovXmdAYRrXoYBGVQahfFoPYqi3Hanz2RtcKQx38GYiMvQur5tp93ckhR8TzU369bSSUJLdpfpB5",
  "key12": "2kcEhmN7oqfTa7xSCP9J41Kw13wnDAuXg8rhDiCPL9gtbYLWS6PdvHCY2yGjhEnA2rrQhSxfBBVsdi6WhLjzQ64o",
  "key13": "3yG8aRWyrbCx8MNJXrfogBsz8Be1uRrGKTCMFWjbT4e5TN5kYHFbua5Cwk5E6gBqQ1oXuBnf1iyAovcxwouDbUR1",
  "key14": "5uTi9t9viZHU7WtnVpsEvMwUeUX1SLer79GiR4tZZZLbM6Ph2f4KgiMgixXwpJnQp4CvLe2YaJGSSJ7rc9xzAR3a",
  "key15": "5fbh9mmcQx4PHGsN3PjmdH42aESKpsqWzMZuJ2pTAfczVKHrQhS4aL1X5FZoC37jFDGCkxoQW9xJjNPMobWDQFp7",
  "key16": "a5Hq1U9kFhPD4AgsSpv6yTKEJspmbLNeXygvLopRt39HNZyT5WUcH9Bex8T1Su57tof6Rkmhan6N81nh1YpU1Ng",
  "key17": "4KTK7aYGzimBzAEsy3xwyVtHMhEz75fs2roSUf2t6y1n43DVtsjma3CQ1huKHreNb98SHRUzLqdBJgfSfHRthuEN",
  "key18": "3AfcDEeVVyyGr5vJLwSVu29TF1TTRLRXDcuRc9ebChaoYKTYUiqfFKfYdJ22SeveiDm6egxWuNd5yB8Ph2JrMKku",
  "key19": "5CQTxysztRg8NSBnW12UhSAAtbJBYw8rxmQ5c5616SUdZpJi7hppAKJSbET8Cdf7nCPC3xq5GhNosAPaUd1fHyxD",
  "key20": "2FreZRS3afAuP6jrExyVyuh3aKgJdSxA5n1ahhagkgvzAnZj2mSEVqsV8paxXMBiAUaFjbSKoZeda8iiiizhkEh5",
  "key21": "dBJEAgh7Y1XDuqTsr7pGhF8ZFQGXHvdkxTwT5UVibYDyhdhR78XTj7Ru9DZaiXY6RbigKVQXyfXoix34ForvRCE",
  "key22": "4MCkdky6x8JhG4rp9U8p2bSPtqER8MhvpbRmhMyoRi3EZL7qQFUDtMKpjY2ZT61Jz2u3k7vCq69Kka1AfkfSQgor",
  "key23": "57LTTvtUDkgH1USg7t5KD2w8GWCJvCLsp2mmhyCktjBEk5GQu9c7iF95TdG9SEnQjFAoQuU5bqgXZ8uXdfyoQsui",
  "key24": "3A74PZPKbk6jF6i6mceR8d2MVv5zbq3JbzDfiybqQCGhSPveZHCxrvTPgCb2gFe3wnjEk8c7Pc6HEdS6rgQpLQec",
  "key25": "1h31Jp7BShGqLn1rwwweQ3Y23ARiUmzspTEPY9k5yLW12UyKHokeKmkqAqv4LWcbKkrbGEF5LQHJXVutnEWfj7E",
  "key26": "2eGuvuHoFokh2U5Y33Q2UAbKesx6Vq8CXbVJDfGBmF6Q5rxwFVmtQ462Z18XVB45znsiKKqvyjgT5ve4ik9qJJAk",
  "key27": "UFhcKDF3aJgYky3jRnZMa1qyEgvBqtVQ5aFdnCSAPLji9BnccZGur6WAiKZTjU6R6dFg7NRts9fkMb5Hm8TUTTZ",
  "key28": "5TAMV2qsuMWvf2ZsBRK9RSpL2jGnz77G8pCwzHqTeA65Dyp5w7CCLT3cdmZQmiVHL3pMofafmykAeTKoMzZNi2Pg",
  "key29": "4bdKGkxetcL87CBYawZivZrbdVD3DC2NSFEpYv9f1NNR9HKBFeVePvyfMcDrE45Q7FPyzwpqoyJULM6hiK3R6RcL",
  "key30": "57qdWABiFZYPC3fprL3icLhUkP1Sye5ariuWtPJQuoeSPKChtucF28bwuYJweC86XGRSc24hVcY3u7BXLkqryTse",
  "key31": "wFD7suXZYoR3afsCJV1YTx4g9uxaySa5L4fxC9CC6GPv6QxReUAQwGAzqanQzAj83yuR6Pt9Ab3h1hDR7h5WnJz",
  "key32": "3aG1ezwUPeKnEfEGFiDGHCqA4Qfr9usbu7CqkwbfGUzfRTEZUTKUnD8vdpU14896JDrYVEnGcQoArJr3hdy8sy6G",
  "key33": "5MZLee5h7NjjUaZ3MKYrFgzczB37VhGdRKmovHaPYba3XwGLTg9Ke6nuYvvKLtag58PhD3omqRZvRTwSbd4TWMny",
  "key34": "4i3xjwAYfjeV319gUC6uevzUbMSAW7KzTzwn1XRh2GbPV2Wt76ej9zkHoZJS5732w7S9ZG7rg7XDBxNkTRpKCBH7"
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
