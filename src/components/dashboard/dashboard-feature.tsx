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
    "4CRjyCKZZpMzpMNJXvRpn7gXAZNWgmcYM2yRNVkTUQpdVHPkg5wK2j583tsJAWztw1VrH8gUPfSSEgkZsNAX8Liz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPd1WE6uSiJ2LagC9b1rsAJQX4StyD7ZYmKF239GauabWMR5Xa2EPS2gSr8awYhj6qrvXeALeb6TG33awy64bMs",
  "key1": "52YmWNGh5HwH5ANck2rhEkXABTg9YQxJejeKcHdcAFkCoMdwxxsniQVzJoWacNzHD6HmFFq2U6P2bszmrDaXJNkB",
  "key2": "3xVQwbDp3AhDdQWkY8Cqey2wM3nCA9MRGLA9Lyg4Rk7F3dTNXjTi3DtYFntcVoTGE2bDxwKGi9xADccACtRJQ8NY",
  "key3": "5t9kqkEw1c1wAuKfpgSQB1h3FtBjceFjxJKSq4XijYAaa23oxh2i5W2krHcSXeExyvrn1F76eN3SmaA2LgcDH4hi",
  "key4": "4aePAgLSJwZkCY4FbhZZqg93xgkYQrj1C4V8gcP98DMCYEsGLmx4QERz4BrhhKJ1dEXTBJxWmZyE1ed5rxWSiQF7",
  "key5": "2g9AkkVQY8XxkEWDCyim8uMkcX4wsAdtgC35xDqRdkFmhYneTZ3MgqAzJ5usd8r4TqSEFrCRnQZBmChY62tXRjWL",
  "key6": "24gamyQCScZoC23FNs5qQDPuhcfgZnvVgU2DAA3C8zUzQ7sc2sjZj3Knx4M128gKavQAKgnokLqzbq1rkJ6iigwv",
  "key7": "3Tw2UDb3y51VvAV5HLukGSDTxSLQ7FSb7ZRGabApfWfWZw4Vp7WqunHc1DAXSgHik4urwGfUdpxkVHSP6cZBuTqN",
  "key8": "2EFbX5Tczms3fzzPjHK98KzGK7NcAvkN62HVPJi7xne2hpd5xXAunpJ31owDoW2KgpXvbzBhZon8Uyw6Xhtn6Wgj",
  "key9": "t9kxNVAyrvA4nwGjTyP8nMFpsWvN1n24FU3un4YQyw58fWLtwfDpn9hqpmMJWC5aCapc4sVY3kv8m1kJyTAfcJo",
  "key10": "4wiPoECK7S2VSjtFw6RaPQgNxqEiS8Bwbj2KNuTtJ8fM979oEmG3dJeRyqzrqNSJrvBnmDHj9t1jeqoFWqxc3ssS",
  "key11": "2pSTCk4UNQNsmCXAHRcgan9wz7SRF5D2JiRA9nrnaY7Vst5kNcqU5tdoucV4QTLZwseEhvZQYZYqRAp8TjMbKRoQ",
  "key12": "4oHZ7NW9nvhShC5iscUAbkXjLMZgcPzZ7YkT9iZzMmyroLpGRopp2SNW2g4Cbh7MHXBb3TuNGNV5gqUUfxYxjKeC",
  "key13": "3oy2unCvGk8jN9WyWAc7fLagB46kdRZhZh5gak5TYrmyWasicSrHGp8VjTfU1FawtubXsnyMfx7jjsPWoFy2qcbn",
  "key14": "shMq2MZCJHy22DzRn81Uy7VfirS4cRrKByiwHKcNeG3iXVKKnVH8vNLHuFkDy3gs9MtY5JwoyP6QKizHFH37iZy",
  "key15": "3isbK8Mq9HVb4LhVSdtGt15ZxmMfEMXXGcQt9QbSVrdgbJaTVbdFQm8Baru68uPB9azmpK2gqc3UGhsm8REgPe98",
  "key16": "FrvSy46hAYB6gnmH8SatD3kD49h2G53u6UvfNW9dWmQS6GkyYbuNaHZpPxQMVfWNhdoHWGT7WQJPF9gDVotQsAR",
  "key17": "8nnacEdEQpMjbnws1HSbFwVSdQVCzqZ13VDNxrTBtK7Vftyhjizk3Z9M7ss5BH9W5UGwDYMwwC5yhjXGA4EQZgR",
  "key18": "2aUNp6xKgmLVHPgSV3YbCrWUth97MeHkqykmqHqzqbnMw6zVbqytJKS21XuqKtG5sC4hokUj44ePY64N4uxaqNmS",
  "key19": "2bsG3TXzzvcWmFDWPcU445mU1yji4ZYrDt8PAVVnpF2zjmUYXDnbnYPYrqePn3Axb7N49c1oosRdJUak5LBo9mZq",
  "key20": "5UfvXH5nV6eCS8YpbKvzQre2hrNBp4o5KqLkZbhvbQFRR7TtyovydcdBvrqdozKygtveUXJfV3cZXLFuPAXdSnbF",
  "key21": "5gJ5PUcSJaxvMMoWQiRbb5e9GSZ2mRFdqYDwE2kq44TKCDJgyhMQF13TFEnawq7i3FubwnpBgzN1cvTRrpZ5LjQT",
  "key22": "P7G6xwKfCJK3PAREkxN3AJp3zHW5gGt8TyM23CvbZ4MdXQ3rSnpvqvH6k1gNN12YGzjJzh3hwVxGUwFKUZguCih",
  "key23": "V983tbHX73eJ7ShpAhmki16SgJPCTsWYwpv6WebnWs2cKWLQFTgnoC6zs83X3c89EucLzgBZxeRaMzpePT5s9MM",
  "key24": "2oy4128NTmXHf9NuWNgWFFEMqpPCiU61NfCFjPT9Pfa911cSHYkhfVGDePSDgqBJNhfousMz4H68Sm3Zemn4K9Hx",
  "key25": "5AZaUvjZ1r6DV1DoR8mi96pvFHXj8iEB6tyu3FfQqYLQeJXdveAQH4CXDbuNd4woviHFetaT7NviE28FYpqmW1XM",
  "key26": "4GRYor7sBq1FNYHNasAoJtoojiUjJZyciWHMYUubaJpSyjFguZ5rTjP1CekreVt71RpHcHgbz438NmwVTE7Soyh6",
  "key27": "24yzUsgLTRiVkvUHtKPo7BrRTs5p4rmbE8RNydpi3AVLd11rFqvX7KNXwmFP6sQPCjsbmMwozhHvcRCU2cqhy4zH",
  "key28": "4zvv53SEBBG3G7QTh4qWToSH6rC7amJDrmZENRv8Cc84oJk1MB527Ff7j6ke6F1tnBeKzcRXS4HSzLBryog2iwz9",
  "key29": "5GLRy9qxHi2yvWMu4aXut16AdjtBDNUJ8BtaESfF3Uy9Kkd4skAtpoDn8BJ6sCyRhq7TGjNiVEATfsf13kZHiCiG",
  "key30": "EmbD8c24H6NkZpuQ19VBDXjsinsDGUJ2PWV4MJc6DgvfgrTij2aUQC2imq2557GMHhnsRZVVhBKezehQEd3Yzgu",
  "key31": "mBgKLmkgUU89jiAJtAr9Npt9GCtRehCvLWfJKxLttddccLxA2F62cKDTf37kZJoYEjSNXLNEBp1Hpt1xZW7DEMS"
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
