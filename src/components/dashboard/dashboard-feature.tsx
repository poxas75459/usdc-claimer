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
    "iPnr9HgoxTZUokP3BVsLnLHyWooGjs1iexCNpYEaRodDx7X8Ucmjaigy5W4wuef13jpHvEwyzY6PC2vwg7qTAkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mUnmHSPU4Q89ftszZrThJbAQChgpyVhczYUAXX8oJgEksLr5RgsdTXW82n5yrGWRAxmwX2hCZ7Kroc2ZGXnN9Zw",
  "key1": "2zyYu12QRkxyWZ6mcHoE9p8ZPNEQ3RMf1mkGG3Swz9vXyMW2YZLAk2teLtNQ8sT5ari4kQ1GNCtMYAxxCgn633yy",
  "key2": "5FmXhU9bwZELG7gbmbVpqxpYwUdBhFXr86eTzJixsZ3hJmNBd3B5p9zCjkRmcVSte2rN87iHKo5zaQcsgfZW3YU5",
  "key3": "SaoCitzd8vNuZ9roXz14E9R514LyfrgzrEXisABweULabepF7j8U5R4kT1rjgV5gebtb4MU8qRY1ui4p7RocaKC",
  "key4": "4tMXHWrBnomc7pNS2BmkhYb7bgoAmTa92gLUR7BB7MHVa2zoT2fy57UyoPzR5w4aF147YD5VEKykmSgMTqbiNW5T",
  "key5": "VuFa4z8HA8ULGFFd8QAJx5Ux5jsYanyDbJeXTNY1Su4HJ2MXgj98ztZdjePXb6xvmbRt8x6P2qGhUvYRb7XE3Ye",
  "key6": "4rFajk6zBZbwXxftEWN5JK7y56LsRYwNtRH47tyq11JY7T2fiJCGceRAemebvuFoVk2b71JWSTAckn19w3XArjrJ",
  "key7": "U9yP9JrFcMqGyx1pMh1snPMKnySUR5sE6p5ce1TBSrQ2V4zRj2NZ8YYmU7xFG7HxwrnpUFhYsChvpznxnsXpWCy",
  "key8": "2bkWi4gq7FWpSBufWkHJeiVyJi2NhsGJoAC5wzzE2HgKcHgNPvK5Jkbqysddc77L6a8Pmd49k7mt7zjRTeKAVDP6",
  "key9": "3kRTwqNpHPS8KQVS6MsDk4TyvNnST9P1o2zZ9xGL9qbvq84auiKyMEdwizXRpsLFRPpRAqtaRRJLUuk27WkLp57t",
  "key10": "4w3tjoRU4AEAMjECroiswZ7GhQY5nSGeU98ZXXMQuSYnGEkLMsGvPf1yn4Z7VbArtJbQherPrgvVFacXpSDtnxJD",
  "key11": "JpDoawdS3pe3hnJAV3ew9W5Q39WyFx9jnqHvAYdzEdkPGg7qCp7SqRuNwDNWZFeoS7uNGBzcBCxnfYwDUdEqkPo",
  "key12": "3MzfX9Nnr4TGfwz1jGd2GLf7USTt9u1jXfiRcvAoA6tZ3c77uxQWUKH1rAEykP1upR9n95aDXeXpmcNSWJfiJuAB",
  "key13": "2oP1BAzeHwuTzeqSKZ37ExUeNTMw6vbeANp9kxxESADCaza8J8Pysj2igQNKa6rF1v1YLqa8rc3npx8rS2vGjR4K",
  "key14": "3CWCMvL4gnN3Doh9YA9rAz1KrHUtZwT4KhUQ8xXKsFYmrj4i1epnSbqPBsJGeLgGTF2fc5WrNsAvfL7EfDTmu47S",
  "key15": "5b5urF178L4FxKREsKrNYbBN2UePyDobegt1nAVxiaSqLQYQkT4UDPFUn75MCaFCJB8XbUPpicn3BPgN7SVGiev9",
  "key16": "4RneUNjEMHWkjeRA1cRVWrTb2kMgy6qymdEvGatxDjiVnWjk6V8GkEbzWiegV7UFUxNirY66YvUx1SueLvoeKmZj",
  "key17": "28drMFw7eFA5Nq5L7ySBtGWQpgZBFZZUUiBriJxJk3qb5P964VJ6Tjp3zSkbZ8ijnq3xJuDAp6esFdZxuDoeGZkF",
  "key18": "3j1JenuLoVAXyueSne76kDXB9wTsbikwcYxzCDqds3bLg4e8tMcZ2GWP2sNXiNJ5hVVNjj6P3FPH46gbceXtQd9x",
  "key19": "5miSjKUY9qBzktN82rhbCfUqXRoNkHCU1tgPai4E1mNWbyuTSvDwLWRbHdefx6U1XVG3eJ2vH5ESwojzubCg41ku",
  "key20": "3mRXCH3zqWG3Cfb4712PdCH43yN6itWV6jbBVQxU3FKhxLbtBZv1ms6z15bPFj3V8uzSWiGnAno4y2qfAjiZKQkb",
  "key21": "4KDg58wkKFsyezzStrbkmHjW7rDMmC6sUM9ta71ZN5D3peE5c6Q7GeKKjdYPFRximUHjs34XxUvkWGzj97LVK89F",
  "key22": "yjRb2g2eSfddtJog2Gq2mBsV4ciNpDnPZHewrSeNhwEjsaa2FHCrgLgQgdHDkGqysWWubLaSMS1bCy28ZUFZE6z",
  "key23": "3WusiEBXE7jWRQjcHqGc9A1nduunjGRmhAqWTJrDKiqNpvjSybYwb3mz99BEaWNtRYkvE4DsQRGei1Ljyp3FLsVM",
  "key24": "2TiNiWzmcRwgGixaU84AS2tEEQo2HokS8VZUCappquutS3z3P6jZ3MhYC2KWaACcTg1CHMvuEZRpfiRqDt18z4a2",
  "key25": "5CFNwjuxHAyrvf3FsGeVFim1PddqgfVhtgrk92abXt9SAxSnGmdsWBc4nmgEvURLyAGnnkvGRsc8VaDZkQnmLt9v",
  "key26": "5833xcqz6N2XaaW2cuBc1csr2rd5TRHL5aESd6WR2dym8BWHxWKdPMkg7Zf4vLwtpBbhQVR8KoYGKtd5QSRwZR8",
  "key27": "5geZgDoU5dWd1jDoQSL2QVwdm2nm6zBQpjtrx5mAppx6v99RWNyhZ8uBY7GD3anRZuqFFDBiQrM7gFdNFNwuPr3J",
  "key28": "2Md6X3ifzUbQLvQz51Whw3XzGzcnrVrEs8XGKa4dG42vZFf55VJ7atQwCtVnqUbqauf6zTJeA5GvZhnkUqaFjLMG",
  "key29": "2noHZcEftewynJohEtgGpnXC5gqxALyDFountTTfxopfkECFgUR6a31JC1PfPMTXwsE5TVutqCgZxryVQ2U9SVMg",
  "key30": "5Scp3aGXfUhSy5wTYzjtzzuevgUnbHGYt1ogw2rWaXFzqapvkEMnwe4oEaGmGJtn9uXBxat5p7ZRP4WB6S1sj9yU",
  "key31": "3rjCa8KE5CGBswei4KmFK6yYNkCY5pD7jQdipXx8yte6MyEe9K5zXxwYQo3VtsXVP2zUeJfLpyGeg1RWsFwvGdpe",
  "key32": "FMMqhw2u2v7Q8VhSVtSW8LuYWLLLtnJCgbBTLEgDVtUGrU5uCL6uxQ2Fe9n4wgEpbTeUNodoTfXsxncbbeZPpum",
  "key33": "4jDL9Gf3vrLDUhmxrDKun5EJN9gSpEk2aapnB7fRwdczKsbikzVkqCg2PuKRDE35vgwYvmzE3fc4VBZMczK3YLed"
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
