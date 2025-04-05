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
    "4NRhas47HB1MyA1LUwsrch9VWEs8uQ2Zrz4SgjAxDsd1j4YLksQ7Pxx1UV9JNUwPRfKbz3ZsmAPoxhch9kVxYgWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "612uR1cQJvEJ8zfySEgVhBhrWY5nRaJUscFD53UyvpLP3CzAV3eMPLrem28v1WtZzFXD7y9gxvDXBa3nMNKWZeDs",
  "key1": "3H6fcpqmBiDKxK2stg9LaxTw7DjjAd93jGjF9NSbCfRjgvz9jmrZfviT6Yu3oNFX2A5ebnvXy3GYMHRizUJiWban",
  "key2": "1UCcE7TNnT2uWhGrGK1EjCYsjDsQ7gwhnaj3r9qr2KSMEfFS6x4q1M7BCQbwtpAkw6sdhQeARUXZUjdwaoTN5j1",
  "key3": "4HGsuSjdWBGTRpYDWheGJXCUnqZUmm6QfyuT4XGYRHNRg2hnPVeAnHXfbWP8VirA8NYao2fvz7Qtu2cHCpzVZ2ri",
  "key4": "2evgofHBFEBaQhwRA3c3Cbct9XoQdmRkU6ttNXnQfpbHZcfXSpxJyhD7Jer6ZpjhtXk7QBYy22KJCaY1Xz6rsKr1",
  "key5": "3MRziwBMTsFrztarnHQcCC7qFZHVnDrvec3FvAoZ7xUTeGXo9xnKJm4uATquHRTQDCHCs4E9yPmjBsQBbsEZhfPx",
  "key6": "2mHDiAmrL7RGC5NfNHyGPdVLsBapr8d1kPzhWfedHnsrwRWPphvAUY6CWHf5kPyAqpjqKQw5ia64wAsp4DDkx7nD",
  "key7": "4k5BcnQictThkcra9E9KAaSnSDhbDWxgGfTjxu81N7EEqLzMv9dNCzRu9uecw65DX8GsGrP2PZcHNWoD9ub3Csos",
  "key8": "PQFVLqBdqApk4LWYT19TVTpbwckaqzXqoty7PqsCKiBnCcKvgqmmR835DozQAoNecqRcEDtVXwguctLHJewH6hj",
  "key9": "3wHqkZDpBz6yjU5SGf53cr5WZPtYqEre9ruQd2uHRxy6ssamrWTpDMGMcNbFifvdF2dhs7W97BdNoB8NZdF6dHvj",
  "key10": "AVbrg4rgzckVdmHkDBKUGgL8rY9bmyPaWQpBNcuSKQmUpLtRAWVamDrCdvD2DYt9T2mphjqYgvbwsFhJRoXegmv",
  "key11": "C6hhgSAkHUd22RgfbZdwGHrkzmAYKfjMbELwEJVDpmJM1LemjwseHdhS3o3EELXQsjAju9mZSBZrnyqP9VjUc9d",
  "key12": "EMKBVMhJzH8sTbtNRe1GoKaTbhWvRfAyk2pa8wnxThXmZqNJDLv7wP4zoECHkWhMjt7VK32Vb7usNxy4mFTYgku",
  "key13": "4hSqcLGKPSVPDs72DMan42WeJhW8FpDbK8Tyd4D1VusoePPXYKqmGJMDwurQ7RKo36oXmEuY8iKNpwhEhwkfCiQZ",
  "key14": "2VLNW1QHxU14GfpZmZ7d8E3LGvQaQgdBtCg3mNiNHbwTKPRK6fErnVeutZoFViNrhpntid8kvGUxZYgWnZSrAfcg",
  "key15": "3a5saRaFgUyEAXz8LBxirsQzHSgQbhTA5QLBfya8XfsgmK3bCAjT6f887HBjV7evtYsFB6TfnSQj8EnSwSLbGH5X",
  "key16": "4ZNth5tAemveuywS9a5bCnYBhcnWx6GwPLasFgtKVVT3DdEKQcHZhfEU37VH1HPXtZs29ZEUNkF7SZDHzqC4DguE",
  "key17": "5jHkVCQzdqivns4Cx4utPzDyY8F4a73FH3yYjdY5RfT7MyKunQVCLXGm2Pb3sfLfL7c7fkaTuLDDevZwB1nfZ7ka",
  "key18": "2wZ3LkN5naSZMaCVUxmyQvwpjqoXTrgh21RVV3x9TpPEKJw7o8edUeQ6pTjik8EnA8uC7EaVST2JDhXXATPFbHJG",
  "key19": "VKoS39R559PdVgF23ULNMhkXkDSh76jmSSoj5uEt1h63hpxvjfE7oBDDhAcpBvbnPhK73Qio5tbMPv5waKtCpBL",
  "key20": "4HtA2HhCAEKZTaJLR5ZEzEWkkSxUJTs9GDN29T2eZdJ3rw5FBrSHfZn7WRs3k6uqGW5Ce1ziX7c5i4mVuFeZjhF1",
  "key21": "2SHVgpop1K71v4rEsvC1F9by8j6Jax5Qrysjezgk8PpfRG5KeQQMAGXdXHNFtfWMMFj8uJbD8wLxRb89M5pAjBgV",
  "key22": "4XBTUiJfT8LL5BvaYShneFNapecrnxsxAkGuPADpiepos4PuQBiM3caVwwx5sRdfeEtkDUohbL6GMjg6MfqRz1vG",
  "key23": "3o5ng22YUrpteArXK9hBKZ3npGQS2ezFee2HtGJ2RfPeKXTTvPXRjfjnJTdCVSxggmuM6DRmTyC4UoErFPnW2imi",
  "key24": "5VzxPpUfjG4PdfDcb6ERd8Me3HiuhXTGG8VYPw6Lc55Um4GfBcNp91u4UYZSQXhM1V76dc7esUydGjDLdww4cPmG",
  "key25": "5bdtrL6u9kZK7x2pbtK7KMURG6cTTHpUrWeAb1wKgc5xg9HgebmVprDU7obFqD7A3ak4veYEfjSTnM2kCZUF7Jp7",
  "key26": "127cjptZjY4x2g51GUaznMk6hnACqzgKVR5BaewqPjiQyUtcLVwsNMRGzEVzff7ueqekquvzeKcy728CoHeFosR9",
  "key27": "4EecMW2SeYQGPnbm7UN2LCkwyDn5M2wR7xaV6KUsVUwQ17BvL9D9Bn5BceDtnDKHg1bNYgpRDpuZPKMWSJeCG5eF",
  "key28": "RRFqziiG52p39SEgR62VkkkjzD8uCdVf4oPhuTBTJ1bqRcuDyn2njMk2E5ra567ffgMYaquh4qGAKJD8S8svMb5",
  "key29": "3FB4uBwXRRv6v76eLHE26VmFWNVmWzi5gyp4heQYWh446WWugfG2PV6V4grojnNx9EY1HPK8cFQCU6fdrbfRP5NN",
  "key30": "2efG1UbNuhuZs26hvwx6FchpqYYqBW9XjR5FXM4oqyZRr4DS9u4bvRMTETubJppjKBT3LFDUJtPgFb61pMCk6R1w",
  "key31": "2ZNqwej2SZVVbqDH7aiS9K798oj9wMibtNoSMTbwZDJ5BWEjcfvwEkrEp3bemgQGKUkhSHsbXQvvAnjZCotgqNsW",
  "key32": "2XdR6fPEM61EVdN1ubwzhaSsxNjjTezmXfQ35ZRQJbEUhjDEMKtTnpyf38aoyMRZ5yAjn91rwikic7QRp5AJ24aT",
  "key33": "5Z8P8LeES69dxuPonciR6N1UdKyvKrgVEQWNhnnz8HeUmrHtTmMrR4hfLrHexMVswEntH9kVKnpHnhK84LhPs2XX",
  "key34": "2EeXwQ8RniMgEmYLjD9Bds34nV1e8Aa8gMDtx1BUPbx6gLrrBBFAZfXhsxmAqug1nHfduWfu9PdCuRtcoNyPKEhK",
  "key35": "2wDQKnQT6B689RASLTBxvCMdhNBG8yqJNDqQTPVymuWcK2wTjk5UcFdubY6E3H1zxfeHJELv9AfkRcNQ25Z1aenk",
  "key36": "5sGTYeu5swo4hCBmG6Kx4LsaTjxXToMu1DKVAEvi1t7h4Ru7AcZbBaEFQi9YG2hjSp2GKaj7hBwNcGNnuB29N3b8",
  "key37": "5BhjsxqhS4nrJLJfJ7CfKNTK9nWv7FMmmYF5xT2219nz7WMociGZX34LydWVhVxj8wdkm5x3c8Sjc7JAfmnVdukb",
  "key38": "4ESptufCj2QqfuzwQXL6hfkzacNUzXVC9LteiGkwYx5kpe57WN2RovSayq13qrJvH4SzXzP93bdEGCnrdgQkGk19",
  "key39": "4NtWPoaMFwcRM5DojcFz28qFjio6X2ezNjdGPGANdH1iLXyKvMcy6N5BMkRcTnEb7zqmRvjoFN24B7KszMRih5ve",
  "key40": "5rwFQ2Mc1xSpmGJnygqSDMguumMoZL9wDtxJgjaDPpTLdp8Fe167C9iW3cGzZekti76kAfh2ouvLNVnXUbqqCmMs",
  "key41": "33WTLN7rVQEhcpGbWwX3G8RpJe5932zaBYyzbd6disrxmzbUbRaWRK55CVKMVHH9MoEsjywPNvH11QE9p1QL5u2K",
  "key42": "52FD98K5njXaon795kjN5eMk2ghz1LRMZ4beXTNSuj4MFx1peyUnh1qUNDPbGGuirpcFFU5JLDVcf2XuyU3Pv3y8"
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
