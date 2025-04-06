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
    "3JCnFDKUkz6tFNYddwrUvp57MtYxsczSazdqqs6azkdQpfHRenKeCKepBwpZ38Fr34khDaMsPGmdwzNoZDmJZ1CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gDj6eBH1EzLVV6ypi7rXCo8yZ8vutczLKssvBWFMdP5nugYp9pxZP8tXCfZEucDaMZzx8SXnxmng6geZDeNtNp",
  "key1": "35kK9NNPZ5Fe7bDqAXGqbi35JCrgs99mvQ6mkEbF8Wpqvn4c49J8ohK9W9HanpazxsUTET9Dnvt2JtsMpnQx5QBa",
  "key2": "5c1jKodgACwiKzAaXU6UdMu3YybmJEZDFppadTU6q2XDpo4x6w5krcYFbnDVW4ALd38qCWpZh9PJzevAGSmg8hDf",
  "key3": "4VcBFGpN4E9crSJijUpWwTqpMmgrEtVrWywtiovinRFEXBxjRgJLnjVhNqTXGoEVVwPnw4n7UkghjAN2srFss5b",
  "key4": "3RQj19X5fVJVZRfMxoxMjsL3VpGNE62gWUsYHBFypNQVzeHzKCREHjHFYf5Da2mPmoqp6SiJN3aYYSRZ6fp2C2YJ",
  "key5": "wV5WimTpt7NHt9fPY5b7BqrNaaNDKuc9ffJXCbvfrNkgx64Bcme8VD7aT6AKFXD36tiiCAsUP2JvPwigBNWRWqK",
  "key6": "3aVVwMZiiYQET84BPJwjM6Ji2gUQUajFzcEc13u35pzuN8uxMQkyD2yGp26dwPewcSxtpfyBHXFVHowK7uWA2XNT",
  "key7": "3otuBfrEQ8NpvCqQsWgdjCrh9vRqtPfkbFK1mJkPComaw4cwscPQmspiNqKaDjMoadESPUxbmdR2hugWhqEXkf3D",
  "key8": "5VCYfGQNTyFeVVmUZuG5xrRCkxf7qjKjQVM2ndmU4KV1b6GTnnEVFeSXMaxxxUaq3dbZUjCRMMMBYb9q5WWStHSJ",
  "key9": "36ePLGA5KkPhuv15Ek5pP9nqVCdrVUC9eSdesQrefFXkSBu7oVBaCHMcxJnDLrj2EXD5SGYnUAXdJ5eAo5ojTZsW",
  "key10": "4Crt8rPZDNTjpuDFcPMKda69MtDcZguv1RF5HncpaEMq3kLYywWHtP6DzUGu8XjtTjkW6tU7KknUGP1Zt57xfNFM",
  "key11": "2FDZXk7BdUphcHapAFrVaRdwgqPhWXKhykj4RKVV7YwTib6SeoUfFN9cEYQHCxXPuJdykerJk2PeA8fBWDSai9vV",
  "key12": "31ZfLi9uMuP72Qj3xYbvcLKYXs2bb6Y2eTcgiwpdmbcVemDTRLSyocVVyp3rdKL2jh5u6mS1cruuv9ypXnNKyTNR",
  "key13": "65Up9nyXaqcw2mov61h1yyAs5juBMp2id1YcWEustNHzniRvGvmXb6EMdL9LQ1icLisyV7fxp6RSdFNNKSppt5tF",
  "key14": "SfsfZKEvuyomoG55xGTQ6sKws2oENLNWJGneT6NCY64kn4g2p4wNyCdfFTm2uM5MdsMHLo79FmManQXHZA2sJJj",
  "key15": "zFxcNGiVAws7Pp7UuD4o1o3A9d9kJZrKphebtT1jvNdjNUH9q5PP2SCz9t2hakVomyFZvEL4hV8cq11QojQcgb4",
  "key16": "36Dq6JXCTYof65LdjSVAoK6wWAzWkaCSer7syubxHK5nBx8UHaumi4UUkVSHVKKYz69oxYF2q6xrZYgNWvqVpMpY",
  "key17": "5f3L72EkXUjYCyVum1q2YacBut6YSXPYtHHYU7V7gwu6e5XBMvVyktxPvHX3U58YYxYp3Cv3SFnCbwcuR7uJajaB",
  "key18": "pRnTkvh6duVbe6452iWWCi6BuQW1pz9PLJ7Gd36Gbx9w7T2BCTZPg2JXTTMTqvq16v3n7YLi9q9URszF1nq7HMb",
  "key19": "3J4FXyM17foMkY1Df3vKhMEKAUzga7ZfmkLYGHDvxDdQLwbjTngCxtudWgufrGrnYyGXZVrggjocDVuPD1Uf9iDK",
  "key20": "36FGuDuhnjETnwdUmBgur99D1Yd22bkWpa4idHxqGCpGZiuJV1MatvjfeKtZ8Wur21gZ5zLcWtQ3nTHWFMUUQyWh",
  "key21": "9CBmZbq5HxHDohTnCZMzytqFg33rG7TDbbsrGg9jFiug5vc7YiZLBjan75e5UfxTRKrcXJFPLHfHgydKzr63vjC",
  "key22": "C3333wfbMqrPd8VScCe64HC4rVDoqKH7QaUWMMqdWXgFwZBdXkoTovEePmQexNMJoUqcBQXGDvKviKW6BqvSWBy",
  "key23": "5eBTdiBPK1kSpaMzsEgDdWnhNoejK34yo4nfgtLXX4MGHFEhp99sWSZbLempqvdihFKczFGRRNsFK5XCGhZbY8VA",
  "key24": "63qVMqTMXokeCfJHpiDFE19REzRyXgZ1cQstPTw8HheQCLSosf28sVTASvf8LXTnrUhtUMKWZYpcY5vfmHJhocqy",
  "key25": "27QEsPUUhqbcBqfTLetDJFZCbEWijeBxm6nC5kUWvTttn8gBpYMngnNxs7DwqnBuW3M2UhKFJRqoG93jBBwzed6j"
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
