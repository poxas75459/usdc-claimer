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
    "rg64aQt9azp6U9mgK6HBzHUTJs1L4j4fSEtuzMTx91YszfwJXtneXLCLeaNxsA1e7yssU1G7RVbkLYH6QtW1eNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GXArb3wW5jZ8TtuCNdnD6B5G6VN7csnPW8ppVWGrfoLhfdZPScZRP5CwuxenKsCwUhnmq2fjS9mpZFkhLeqR3wm",
  "key1": "5zxfgHBJeZ5oVTi7tQbP8ACb92g8tteB5MynAcPdEWgXbUt6cAA1qjxAcNhMpGp6Yae3KnNuC2A2LCPpAZBeEpKe",
  "key2": "FQNUz2EyQGcZj8snhr68RArZr9CZTwCvdq28hTjH1BGChYMCsirwwHmoaRagxq7rwWhh9uB8QyC91Vgv9sWwq5c",
  "key3": "db3PsxHHTYAvMdYqTdkqK9D1nbosJHinmbyU4t8UZaZ2mavvfJdfgCkwTK1YZN3KtybYseWMVmvxTQ4xkGgugQf",
  "key4": "3VKHTYatmDKaNY9ue2wNoZKgdPEuGAbM24TomoQrb4xrRStFFo1Y5rSdBnKKUA2fTuiKuSUWKdfPP6byngyJybfE",
  "key5": "wVnVnneFUpvfKvVyZfGnWz8DGmUkXvhCwiCF29m2PuX5CbRyNoXCEjAahzFNKv4vX3RmBXZNigE4p4vJxDhKgtd",
  "key6": "4w9FJVFBLXKcmihPjhVwwC8KfTcPWMNkHhwrvmx2nBnwoZg6NVPn1N9V2R5SH4KQSY3bugFc9tPUWZSpDvcoXMPV",
  "key7": "2G9aBUeWtwBEtdr15UEVzvqNkqisvykXCouzM8tYF5Mb5wFbrA81cAnhy8rDkf2HCfVpWBW6L5aQXMk3HsP3ave5",
  "key8": "4WeBtH8WhDQ1wdBYNJMmWeTSoZahnpEhWf38vznPuoYY846qsamQ9Gx4yH9GSQYPPuk27Lr54ai4d4XvNomw4YmL",
  "key9": "5jtvdjUWzpsf7ExEKt28ZBAjwRn2xvswLoWjvtXfFdQ5g7nFyCGUW6M8DNTw9zSxVczqUUfqv3u2jci3UprC6dXC",
  "key10": "5VmrkUiYzwTopw9Fxn3iSNAybnRzjqrrY98G9v8ioNbsee45DjKnFfVRAh5uYX3ojcexrJMAdN5v6TMNFd77bcjN",
  "key11": "fmjGFHbutkPC6xq2wf8UE1AwdNRvNDnajFN1SFkhmYMykGa5iYAzLeNyYbQJaBf5wKPDaZCvwAmgvx2PaYP7Mhv",
  "key12": "5rvSiWgrzeAjLGcr7a548uu6sdVFiGcEV24vhnFMwspDx5SezHhmFRCkEGvVDGkiSLnbQg93Z18cPHGUtneZxk9w",
  "key13": "2LUmc76gC1qR2hRtddKKyX7PUpzKJqwib5CT3GTm2YysLbsVoMeVK5dKpH54RTdiyrm9abMzk5s5YGiFEcLk9r7d",
  "key14": "5wmCj29JicjiYdu6NAn8dBXmw9aKFxYQs12fLspRuWM17uDMGq299ufqyazrsaaQXDzjB8wV1ELT5VNaSXcJjZsA",
  "key15": "2VEy9TejMKXuaX5445Buiw9Z5pc7E7QxuQ8UDLdT1wVYTGq9KtzJmXqgmdge5RuFPBNBtAE285fAVwBSrgoRC6ws",
  "key16": "3QS8RkvX3nTLhYqqk2zmEpFGss7aiQdqixN5JpjwMx5ghHZfhmtADv6YGrhaCVRzbeZz9dsUD9nTbaT68n1ao58F",
  "key17": "4qL7cdpiThkhgq3ZovjZcqCD1qCqvKrXKzy2x6DogtNz4Dd55UvsSgfH3cxHDqT77oQgk2dEiYfSXG8Q7M8Vu4s2",
  "key18": "mDYtUwEg5UXcgkik2ScGkGvaw94eEPz5x5KEW82XzsEAnTWaPiBtAog5md3NG9HHHRFAdy49d4zdmvLFzmJR6eR",
  "key19": "3g7mAjs7WGTvvreRGiwNfaoQMXyaFV6UuXk4a6fbKq7fXCwVcstF9S2iUNrA6qiNQyWqDtgjRwjXXVgqhhpqWVtR",
  "key20": "2JA964wFAEtodrweEnbv9arhwYWU2FPVRVAz9bSPmKoAKyz45XMChcoLaaAuXSeoA2yGHbgyqJetTrqm889ks1yN",
  "key21": "4WjrouXhp7KXAWCFZsT5cYpALoknz9rBFqb5nWzVMTuGxAQvcidygCjty8E34hqSEZxBufEWFGaXSJga71GyMa8Y",
  "key22": "3uvA9tyr7WU1zvT6kdVwnqAeewn6nxy3KwU4TH4aStyTaXFjxYiqzDXjWEeks4quHRfy7QuBwzha4VDkBqzpt2W4",
  "key23": "557BqV7ezmgrtub872BRi1wJaWssCQFXFyLuNYc7CRDx7MiRKC5BrwhRf2YYpqpasXZKvVWaNTFavx1h1dzBLPzW",
  "key24": "5zadgfjqQbg6augZzxB56hb8QLr5NU6jS3XWVMYGgf8uvjmoFYMhc3x4F3QWYG1vckLx8Nz35WM4nXj6iXrx64Bg",
  "key25": "bcL1xRcCzWz8qrTkjeBFpp2m9zYUwMwWqGxv9QrapuzvynRqedMQ3QBUyUxZZzGwQP5W3CLDwRFHpNvNZKNnuKY",
  "key26": "3GMZfqKn6Fw8eaJYmezXw3bkRbjFwL7wdF7pjBafNQ4TeiccL6443FQrWo38zU2XN2pSVAXVG1fGqfbiQvpzXxoW",
  "key27": "4WNFuE9yGnJzAVZnyH5U1K6qPmApXoBMasEJdgxAMg3NizqPQeJTcWK2zbXb6xWigpzfooVkFpxT4uLDZQR44wp5",
  "key28": "2bj38LL4e6hHNZK77mdtWCCAKpXqw3A9VJ9H8iNWYS8zXByqRGu9U3QW6nbEuftPKmUGrU2119BSR9rHMPKgHEdx",
  "key29": "39pWRnZbMHGNST4kpzMAFdew5hqCveAgG1Zn7S8MXYHAruB4Y6SGPoYQ2V29AYQ1UtxQxQp2jjR9sZ6AQvkGFPoS",
  "key30": "4oX898ehUAG77zRFVcqnkRkVW4K3MbKKtVPbUxvgmLC4VrxN3fsKtNHuZXxCyaZCHQ2Gmk8623chccqTrB1zUy9G",
  "key31": "5TaeQeYpYA11vH11ibzfR8oFBURNvaiMmB7WC7CtC3PyH8ttwuLH5kVjLjqARHxTa2BzqjkmZ3cb1V98er3JkJor",
  "key32": "1uHX7ppmr4aBqv9j49ZXautiWd48mfAzMpoiX3kiDQuLZLiSp1G8eAPetgkWRvaagcwWPLdS8gwG3jcmxzM7GfS",
  "key33": "35HJhU1UZUccyFi2fXEzE8D9zTGAYjYzf94aEtm3ZqX27HVNM6Xz6CPLeQvyPy2Vwoo6Q9ewCVRJ6kEc4wy4HSHP",
  "key34": "3Bfg4gcnAPVebBVfu5REUPF3vgk6cVAMdrCJzPv2KbJmLxrkEAkhrRYMHiMji5XUzbpFSgQxw1VLj9UMEurXcqY1",
  "key35": "23utB5FzMy3bvmhuXqz5x8WyyoaxPb3v5BHTwDGeh3a1ZPL5qncpUbvZXLS97SLQJS8msGYpJpJP3cnoZJsQ1vrm",
  "key36": "22US2k7QHmiQFxkJhHhN5mC694VYuXNZAJPV9VSCKiWCEE73G46jbTfUNyTdXQ1hbrs8ECf6ym3TBNJfnoSW7paG",
  "key37": "3W1otPXfGQ9uV6krpHnavNjewDHyF43G9mjYMjwk867eHYmy4v2WG1bDhtozG2QL4trvLqVQ4R7Pgzu8bCVv7zzi",
  "key38": "UuDBWrtwy7XDSSXtRX8XW7bG25U4dkKNzRocQNYbEFKSwUSdzQX139pqHVFaexr5Mmjhf5ZrnWaEwn13LhkScUK",
  "key39": "5ZbXXzDfTZm3u1aCSVo2xKBtz6ZXrAuzbX8M1MZkG9Vz326R6orhSZHtVieeivPJ8ZeZ3EzJFqKh4L64EuAJj1Td",
  "key40": "2rEewDjDLggEGSEMZfXCrLedeD5E3t3XsriXZh7CBXcAd38uJjnbBAG4V9xmtaNCba6V7qGfDuZkidru2yr7dd24",
  "key41": "F4kAsq3FNXmAnTVXGV17FeCfyScAWvV7HpVvcPnKCfCVfQJe3wAvcKS26xpZiAeJ2KZSWAbcsxTVh4dMehvCm5r",
  "key42": "21hg8qbA8ApZU9Nk9Wrtu4r8WmxJffnKoh3TjtNr1nogn6TdKegeHE2SQTpxk5KBLUhf3bNn2fE5HgpE5Rk9Lucv",
  "key43": "3zyemv95hsjRZewocsCfZf4xMFRPdJi24XviBXiU3msvaLyibitRvFxiodr3mMMgHDWXyTFp1AuwvWy58f9LqavB"
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
