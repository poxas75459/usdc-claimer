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
    "29aDNmPEEHFkd3zK6di7XuPqshZWNKeyHGhnmq9qsTKN98admsLff2DCxHFWP5P2cHBnpx9ZnYyjmD9xcf7vSsz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGEMvoWCPT3TZiM6LHR7bXCYehTHkFaEmVoKoQqd3h3bz7xZpsi7j7ni9WsqnGHCwPfZgYgnJqb75AMrXxHvdUd",
  "key1": "3yEHzMEENY3waxQMYEfjoX9Rma5vPhra8sGA8xLBuM1UX2Ah3Avh2AAypTr9BnCdGASKLL5hkHEm3NvgFvcgqe7n",
  "key2": "Xp6pkpWudP5W6TxkccyiJsB5AsKDTDcbrXvyMZxyq9szQALwKn8XoY8FaprrdR4pDzfr1phMbLSKft43q4Gankq",
  "key3": "4nftpUYnTftNcXEdJke6UD2UAtrc5fMiyfqNe3rkBRSC7twbJHoFXMRa4dJphh9iF6eVXUUWvFxYurMsJa3cv76W",
  "key4": "425sVzGBhyqiVLK3suXV2dkEWqLc4Atd7KXpDCBJw8GGzsg5p4k6h5MDsfUxDw4GUivS8gQMsQTKRzTZW6dA9PTp",
  "key5": "2WAArSdSEsJ2aSQpz4r7SSoxZ9bV3CVG7NBcryHRKAK46Ma5uM5AhdCQE4XKV4kdVFzYsicaT8UedHca5zV2s7Cm",
  "key6": "4rRjgMfsoHAKuwSo4SUHvzB8T7aMPK1mqLNpkAdBKmDDMZJk6wXfmxzdDjJH2oHijJNY6YVVityZzuiWPeYUdnAk",
  "key7": "3EDG8867Xx2WZRch8XLPAr1f5ziB71QAWT92NwkuuQhNUue6Z5DmiSyz9C5uwX3J6fZXe9oPCq5yNSh6pr8xAGmp",
  "key8": "2NKcLTx3k5Xrc34amukZ63h7R8iuQjZFMQ13r1UhPmvfaK5kz6fb13qd7SAZnNUmvPrVfRe9PrXaNruZvn94J4FW",
  "key9": "4itiVghSXeuBFyaYUhxQvL9P4on18H3dTxvVcGyf4zinRGUw4EmGmpJmeHcveBHu8m6QnGzCWXPgGMyXrD4R2Tax",
  "key10": "214ig68xwDxtaY8ww8H4pfu3miDB2D6RCcaAtZWqgPuNna7FGfEVdSVbyEKz3e6GjT7Y48ydtDvmXV2GScyRCJex",
  "key11": "n2XYHPtK8sYyu9LRGM7xbtvhCABNZcTyjrvSvadDwHjSqeZTjhS5P2TnKQp8WMmYV6FtwvKw94egPwao4G8hRVi",
  "key12": "5NdoZqvZvLf6UTKeTyzcKBdtREQn5dmn7J7ojLXfrR5HpwaP6QZTU6mMS5ZaseTryVPxtKJdsyah34mHCSG2m5W4",
  "key13": "5H6pFScexZkrJQGAVJHu5zm4NBa6bEaZc5ZZ9ABTT1ot1edNimfkTgHzpNjWygRFhNPdYZFZt4zGHcid1mW5ggSH",
  "key14": "4JxT6bReP63XiUX36WjpKyDTB2Ync1ySwqYbWyrb8HwBW2MAMhCvZMSBuCYrR7B8ZoAjxLJgUJqFCe1avu9xzBaZ",
  "key15": "4tPAPtA2xePnrePqqK5wjjgtUMGaqLHX7TkijG9ELuL8wFhSBDXXroJgkDQqvwgpYWu7bxw42NYBMQMn586QDNnp",
  "key16": "4CYa6t9d5AaXdaZyXUXVw91KqmCGcvShhaAVHDr5EbkvX4JKwSibDr857Mytd67Kunf2WUbHxP9AWQ1aNYQzGRdQ",
  "key17": "5uGVGPLXRmNhEaBfdrwfDZ2fBLg5arYaaMSL2tZnfXUHmHFfhq2UKiuLa26Q2FKBZatw3J1S7QLkQX38aVHagNnZ",
  "key18": "3mTAN6J1Sm62UhUc4qxPVPRzGzoE6YuSMFEtAZNFpyyDt3i5trmxfy8uhFR6ByCcfFM12srmoEzPSPm1b8QUQsmE",
  "key19": "P7pKMqVFaivmUkEGxWqHhWs7Ugttw2egBnRgF4FecqgWTC8u1MahbivxLNZBoeZRackbYk3zSEytDLQHM6RAhpi",
  "key20": "5jKGjUAv7xoJhLbjcpNaGx8axf3NpBotnqvoD1yr6PYfUYw8NGH34w133kkqbYdQwoX5g72XCBkCYzuiWyHXYe82",
  "key21": "2CpNkh3QqNuvdHznuaEfy6nFhki1oQH9mwDRp6w6ZxuUyqW7T7mmgfqwRQToQLm1ZmmkYRQycNovLUnkkck2fdu9",
  "key22": "2KdfRWMww8FN5bBecr6uwPhFtmPrtE8HucSZhpvR2L2X1MVzKCYUeJAE8FJsdV9YJ9PcoL7P9jeQgg1JePihuEGS",
  "key23": "3bi4L9xvuhY9ztjipWmhbkG9s6qYNrGD7AMQDpP1UbekgV9UrCCEDsbt2dHfuscviHKFYZCn6PdW6YwzGWvpHmBn",
  "key24": "x3irVD7m3CF2JHHPfCqSN4oZRZQ2EyyDjSsYyFq1vu2xc2uS2QeLWHvv3Nh5i9GEJuMgGXLj7y4zZiKuNhocwpp",
  "key25": "28zrxi7N2ToA7K5HUkWGo5evYQam7EH2oXkYKQAZyfgDXLAWgpLiJNfhZjmt7hFeqrHVdAWrfoQ37bDWyqfK8uEC",
  "key26": "3m9q6ECf7LPNWc99YeG6FTME2SgMDmPtCTSUxgbsSncVLcgbaKQ7qAGxMPokcJC7Uz5Ff2R9ZWsMVjGVTVob5Vys",
  "key27": "4wfgpyYXfsaBfdJvb8HsU4p2iamLLAzdRd1rtCxJEKb7Ni8iE6Vo8pUcTKNZ5AJ46QfzF3Zv6m7fafbdaTnpfmVm",
  "key28": "5tAEPhx4ucJDfGYi1JFAg5A7yErExqju5auQejoRuxw1EELjNadz2ANrNbMGzgWieSmfZR9JE7dLeN8S8X347fF6",
  "key29": "4AntA85qRPH78hYtuWVp95yNXLFScWugdHd5KctxUJDCeTBsP6dwyCSUKTLLfFd6pxqXV8aQehiYNgk6tSfVARGf"
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
