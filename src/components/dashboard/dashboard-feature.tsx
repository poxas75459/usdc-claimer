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
    "tWBzPoWCe8goNozNBDUcgSJGp3u5a8x6fQutLZRZZ74EzLfPVciUybGde7aeeFe9xFJtC11TncKdtNbpMNaykPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bt4CJTBjNEK2yMbM2h9s95dkyvAFfpeaV1Cerd5EmBNhuqMPNnNXwavxBi47fRRSN9CG6h4SYWHRWiTAfZJKyVG",
  "key1": "5qPRkd8V5mp2U2PJJLMLEo1rr9q4GsJGQ8w1MpeLVGrkBxxbKR4c3PyoQzKge8YsDqLZMkAPy7jx9cCJjqft9EcE",
  "key2": "2KKqSaHAJANM44QXj3XgGS2C6mb2C2SJTLHtXCP8BRuoK5x2Rw7BAbZ6Phpdu8og2sL5JdHecQMN9k3WDLqgKdVb",
  "key3": "5pvsUY1AsLt66TmmE5JaHeJzPaRjyUzfeNViC4RpJNMadhB7YCfBmn2ppnHERrMaHhAPCXNQ1srTMyEt2i3YeVun",
  "key4": "4NRgBR5FVu8DE6ZqhuymzupFdgpSHgQYuRQ7EchHYd8PG7KGGrxB6RkThE3n9EiVLzuRSuMum68p8tvYDNwjacth",
  "key5": "3xJ3NT3u9esFZyUjDE8r3Re1XjWjnJbYywNxgBwVjKSeDGo8EjvhrN4VBeQ5j3m6semoMmBS8V5EUHoaCaSu1HVt",
  "key6": "4hraswTzuF3ez9TiPwciNQsmcB9zDkCoakjGP3pMrUiv1kZtHEvZAW24s677R5mfJmd4NC2hjGfCqNUn645kxyA6",
  "key7": "CwPTbvSevoZ8ZzdJpPhTtVEr3KuMgFtSkFzGj1VYHMmvkWu9gjVE4DZLgmELfoE8DxQb3GQvzqZjDKmEwdnkbf8",
  "key8": "5C7VeeT1MM3fGKpZy9wCRZBU1SMiG8kqpucPN7QTsRbUTRbkDZPh4eLCBjVVrxPTvaWffHJzvPZq1pg7r3mCVinb",
  "key9": "3GNxAFVraM25aYX879gQDQWF7goxUzeb8YnFbp7y3Y71SThUbYLXuo6SWVHjUBPxwKP5tQ7ffA5tzx4Srw11UgL2",
  "key10": "46kHWuR4Xs9AYAFPi7zGmy3DYJvQhQG19pURyuBrNP9TpgS6gcMxJaJYECQNXctHNhj4WQsUL4kcik7L96QMQjVH",
  "key11": "5Qg3PXFPQwu1nNmiRnULSH19WLLgeY4F9vvN4DQaNm6UmW6sFLQpVkCUPnZEEBDztqMirdjny4a6dCxGRujuwQjh",
  "key12": "u4cTHKV4QPAFXhGiD4EB8YipWoNzJr6jCtrNqFmDqFDoSyhR5UvEifJShqVzXsmsPfpfu6VZnQQt98rfbB27Sf4",
  "key13": "2wkBJ1KqBKfxHrNHseNPVMkYRQMyyHzvnGDHqcYET8SNtwrjdbrxgXF61hu2Gsx9eExSwxSmhHVVbrMn84VS4Qfy",
  "key14": "2dQs7d4aRWf9bMuhc6DVGu77nJeC62djrSFbbjEFRF3pPvJ6BJz3U3KKfRLxuYYKfUVqYtgUz5vDNDbTPMp1rw6e",
  "key15": "45s15WuCabx8dAXPzEBsiEDXpWkGUbaL6UMw1AbRdG7raDa4BM5i6aTxjA73wbRyhmnwBBJ1niUp4avDeHxwWR9p",
  "key16": "GvGWYBTUVNsJqzxRm9AsLmtuNdJcKjohRjhBZYaP2eNkNPmwFTq4KdVMjxaKSHNsjgi2asMVyEjwVTyBeBu9DMU",
  "key17": "2ZSzhEKcB4y2e8Man2ATLmf24YkGPt2G3XB2G4CpSKNwoopR2jDvNHs8nB48Vasfhit2Hb2oYvTutfTipuo8r4cf",
  "key18": "3NaojVx1nAbJz9uQLsfiS8xEEpeXcuhJQvm3uLta1QvAzBYpdyMK56fmkherhuFnuTWyTsJpFhZkfa5ukJhYYMgV",
  "key19": "531B4FbptdHzkEyp5XA6sWZa2oab7YcQXQtC74Kn8eQ5PY8D31zheLh8smybqHbCAdsSeUdAt1QJ5Eh9Fk1t4MdL",
  "key20": "534UZU3gUzdTkF8EQmaYDddD87FcETxptgFfqW9hAofvsvWNqrypiviQf7H6ude7FZpMUmQb6JjTgyUbnVFy4ECw",
  "key21": "37qJqmCAXzerJazQL9RrEdjsz54FYipVzvJyiopWzWYG3X98Pigr9JigeAERx5gvs3jvZaw59C9omBGhD9bXihW8",
  "key22": "61SE6EJaAg9EgSdmeCiJCukqYoXBm4XNP8aXCcSeGXuuf2NQtiMBC7ZKSGDKmS7CSTjNx6CjYZPutbjHoLuwPcGf",
  "key23": "35jNzUMzYCq64T3h1AxJX6z5bTd5nZTrAevcTdmuuhrZXUTg4KKNqNGZsQNyNP1fBMSWBKHk5qFMijbHrWXH9ijw",
  "key24": "2o7cmRVXuWJEXthUrjfLCvZp6JoxejVFrdHDZBgi8qUGs797wiyz25d6Cicf6jRCLduYVNs8SL8gZMm8GzQLAMj6",
  "key25": "P96rYhEMEGXivYCAFqsvSaFLHV5Uz7CMXC2gq8ygzG5haTCzGuB4MhdjNbnmGChwtZPyaeU8Zs3B5FfstzDqFUn",
  "key26": "22t4Y5cH4S38ssBMvKA3pmGPF18YncWorA6sxDPZhYqmexTS5XESzhYw7UBihhNiB1wmCeamUjXJqD92rYNyJLhV",
  "key27": "5m7zYppMKYpbaxHmVGhoHiqHmytTwKQQFcYfDUpufP2xV1YEkpC5fHCKaRqxa8McPuXfudD2V8ctUeMazueDdwzV",
  "key28": "3eFD8738kqmQu3iGSnvVmfxN6nFVCPSktQ8Kz61fKyzcc79A8tadzvHn1yfFFKA5DeFMyRxjzq6uUN39bjZ8epJY",
  "key29": "3Dv3CbHZnbXg7b14aNVEndcE7qdUXsH9mWpVwjohUFuE4tzQdQoTQ36wgXFcLunQQtfZfuuZ3ZCtV4m8YXUoAtzb",
  "key30": "5XcXtUQmxWhDFMPLvjahRCorCrzgfWwNoMQw4VLLN3vWU4yY9et4waYScfta8Ctmrs5ALFYuGVcRS8kxkyFxvpYy",
  "key31": "42He5MYMVQ5XAjZtpNnnhsCkiv8mmjQ4APEExhu1bytT1mVJLLhCLP91NHbztcEGy85MxHMahExhAPDBgm5nM8kx",
  "key32": "4SMVTPknyrienyWa4u6hub6SDDT13QjDn8TRRVPWiYXnGNFCRG1gHNumMpWtETYgKYzdrCTYYyR4Jusxw1p5z8oZ",
  "key33": "2WagStoU712CuChKabWgpikArH54Gbpuog7HWUa8ZZXt8k7LwoKQ5sB7rgPxCd7yNxXWuLroRHA62hJ6e1wYkuAk",
  "key34": "4f9ypMEnwcC6uHxgEwwn9g7oyKLdXGZByR7nFV5eZqoA53Dv9D3gHokwfjqXnhCwZHDiWriz4nFVbQ7SiTv6ADGK",
  "key35": "VrPcycoyqJ3RDBgteGYkbnor7famhnhy12N5YP4TGVscJHPQzd4BqVZUFwE7UFSMayHm2LqxhiwiKXxhqn8i3Wb",
  "key36": "5w8MNBdUhJEb9wGvJQbiSFvR8UxgMTE5nGjrsqtqnCRJc51BMZtHsHsrShV79SFBGiGXgx8PT8DS5EfmWgn82bN6",
  "key37": "2c9zGMrGpEh5ARVcuXtMc72BcfQ1j4UHMfrPntNXqbYmYEUNQjRbVxrLxUqT4nQUG7nty8cQTD1XiG7XTEeHw9hQ",
  "key38": "2zhBEsP7ioyUwnRNTD1RAnnvtJc74ra1yZ8Ls2pZ77348qKcEQWbjJH6SNGWYuSbH6GiKGYLfovveE1RWzS1RiFB",
  "key39": "Un16G3RHktbA18aQotE2ieo7Kn64tgsHkbZZEtRu6Fp4Vjsd8gFSWXKi87MgZ3YfH92T7bXDeWRYqNLn12W7Jxd",
  "key40": "4vdpJQTJP4XXTp8T72zmGmkWf6DktTDQcbZ5kaxBWzKkuSr1E4xxvwsW4YF4GTyvFuNBe1sWFDZK63zYPsH49Ejo",
  "key41": "nqj7XY9dodyLUUhSuNkAG4iLAgbtS9qvWYcgGULGbEcoK9oT3FiMm4r1to9RqRZmZZWNfsJYGZXq7XQ9q9sfQdM",
  "key42": "4iEuim1fxFsdjcoL4vS9Qnc8A9ZJAN7xJ3cvBMZEQ6hmVXhD4bejsvbXNBwEk8dnwEEom9iW32Qj6yeqMPQF8PFN",
  "key43": "3pg4QsZKxKMdHjCEKJGoegwzuY1VQzcVbq1boHnRE8nVHLiyS6mdgF1tfjJ2XfJJg6jyMur4CcRmiGtPCmcoCerC",
  "key44": "3k3UfM6iYMeFhCwHZWUmJkurjahHSZuUfnBH4BiPy1GicHAkCCV2arfCsccyPb4pjczuYpkLR2v43Pv597nDnR49",
  "key45": "3bUgTs7xb7d7nNAkZXTxctKikwUxkBoLJEXYLagk4hrvAjeCwwWdCQb45mPXYHNLHEGpaBaZNL38G1JepZjo1xfC",
  "key46": "3jcqsienbDmiRfeYgEp4cxqP9NcbDQGfxntMyFzk7H1HkivbvsXX3Gq26ER1PxewWqLbiSgfzPYbV1yG4uaRWeSC"
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
