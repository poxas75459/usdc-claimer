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
    "4U4fZr9dcw5hUyxrAGsoUUmURAuF8WsHX5mZZpZeu7hvLTMiFJLc2tsijheyypbmonPeQkYWr5rcDDdTFmd9NjJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvYmahiFL4XFQVNTXXjU8Bx94JuraJTd5Gz7GVgPWA16Qj34tT4CspMeTK6RdhZHwYyv7k5vEc4B7TohmjTyqwT",
  "key1": "2xrgS5vmjoLKpUAp7paHZQcKi814XUNLcgFfAgvSDBwadEACmJ3ireQwsS6CMBgn5yXjW1xqvJwL5Ac17ZxNdSru",
  "key2": "4new5Xv6wwbj12g3dsWjA4vs99EJwt9HiRh7N68m6DWkLDKL4B1Jt5jmUYvxW7LbeNv3nwpRWWgkkRHoATbj4mQk",
  "key3": "efDwRzkbQYiXqUVDWYK3nWTsSwet9XB18JPbgZh5Jjassy4ur6sa4rzSt75ufRYS9sazVzJbBjtuFitx99bogNn",
  "key4": "4PFdYCmnDPTj9QuLJWenJEQ1nN856m4MHuiehotqmvLAxFzpXah6HLJj2882soQRaj7JE7x2vUBS5coZc69Enu4q",
  "key5": "3pDom2qN8aAR41djJVmzw2DGm9W9f4ooPjeTVBwgUyEZ2XYnL6KVFT5H61UmUH4FL7nXSeuTg5WLfEZZFj3mM9AM",
  "key6": "nrRivcN4wm98rN3YWwrt1W1KcghkwfzzhNoMuss3aQieR3HGaatPsYv74n9DgPhMEa7AA4qYYb3Pouvn7YYuvfC",
  "key7": "3F6sTgYBfy4RsfWTcVsqtjSbLaRBTe1ma3GmpWzmoENeY2ozY8anLoyoyecXLjWhhqwYMUwBxzPdWySS9fVC5WjH",
  "key8": "5hkUGvzh2VjGuWJ7cuaaVVqCwDvSkan54K8aKFqNRVB9SWLqHDCtp3s4y9Yk2WaFr7L1GNN7XcYcwgVQ8CxHu3ZC",
  "key9": "55N1buGmcDdZJCx516XbVHnLds6kEAoJeKTtgD2B2b5rUKSxLWx4UJ4s3Sm1wJmzJx2Q68UHuxctURzkFGkp7UWZ",
  "key10": "2qDAWGnPpDv5uMgQXMkuoeVrAxLfKV73tuzfd4z76Tczdt4sdfuzp4kWLNCsdHabgnPhWk9aFiVkP64hML3NeJKk",
  "key11": "kD2ni2G8QkVQ2TY3gmEMuqXfLBW25GhDjNRSuWHMckYNAa37w1HycCdhhY43oLyxJQg6GnBTjc9xzGP3pMiescm",
  "key12": "ybRCqt7CnaDLaxr7dgxC9qwPXfpWnA8S9HZEMDc8oBim9bEUZTYDM1vBefXd8NT4F2S1FHf3t1rpg4d1V6EAbiD",
  "key13": "2fmvkGpaUpN3McfhosPoup2Py1pWxc53h1WCqRJikK5zZiC9EgGEfusorahj7aX8LqxHT9vKSRxyrnPqnqEabjFr",
  "key14": "qXQATFknfeuLX1H5BJA1RhLrzAfAdeS4YfA2xv4cSWBdtH8qWM9aPr2xdVwee7A34pA6WzbaCYcG1bi36LuaSUK",
  "key15": "3KSGtJNo6N5EFgBrPF15noiAgvo18ggN42btVEHzNjv4DKUkpHPTNDS9QK9QJsqEFaAUAejFXdZxnf81JoffQYDq",
  "key16": "8RDcJHFpZpmk1M3yTMdkCuHfk47iB1xvZXz2pZbemfnVq7Jyh3FkW8jZC1dkAwvjuGdER23DrGyG5xfP5h3gZkT",
  "key17": "3fUNAZTMNUHCcXt6ioauY1r5Mi5Jb5aEdUwegRjTw93n5hWN5UwRMoyJRxNwqAkfsiy83cXPGMERa5vWzoatzoCV",
  "key18": "2MGx9no9VuKPybiPfBRy6vAivPMdqRhUaZEoMtm5htLEf7eUMdGzSzZzijaJesZc6vpUiUFAVjfKr5UgW1twRvGZ",
  "key19": "51uuXa7uqRGnyvqVKDCh5xzu4iRkxfeXtMbUnhuwj1Sfy67pvk5rn6BAw7Xo9wte84o2MR2tHhMRumATgG2P4JKS",
  "key20": "4oew38ZnaoJw1jN3CquAXCqBSTuyZzgupBptAhxm1Au46zEgDRHZQbK464JB58CxXDSTEbFHVknXLe8RLuUJmMVg",
  "key21": "2MCiHmYJrZ6kCf8u4CHLasrY3Qv6peBYsqRm8NhHsxwcSyjAAwrF9sKv8WKuWNVDChqCAa5P5pW8XKwakdcoshww",
  "key22": "62U3H5G86JE9GoPFFrkMgncagD9t1UvCkJGnc1sK61MGxnrbfr3wKFkoBJJeDMybD2NGpv3tn2nYDnJXQmAszEMS",
  "key23": "3TE6SZbEmpYt9pWf8pPiWmUwAYWD7WULPz9aMPUd8GH422jqDyfAAzxxgcpq2LqgqroLvJNBdZCWAfRSmW3pRu4w",
  "key24": "3MVHSF1WYZWBGmXJZUjViYFYpqzWd2c8p3Q9ycpe1QGcMqiJHm8YcG9XT6M6eBPrT4YinxGLYwC2XyCmKaan4gT1",
  "key25": "517CfQgWxFRs8n12cxK853iQKKasrZ4m6XfkLVfido7ZeLn5eLtxjgD6kCSn7FMV5eG56TWysDbvmf3UHeovYbFX",
  "key26": "PooLiUvwGPnN2dypanyB88soqDTyggfz4ztvpaoQnDteB4YNskfG8NLFpHLC6aKHLuVjHi9iAu4fhJapUSDZ5gR",
  "key27": "5PojujnxYxuJiathG4JUVCyJcb48D55kmqtETzJDSQytyMUmfCEXEu5n4xMg4jXsot31x5Kc9UZnrb6gT1crc7Hf",
  "key28": "2Wt1XdQW368TGP3TWXEA4xsW6Npeu9CSDdXNDtPMRLW7cQEcmJrp29Z7ugienqnYmgN2oUp7hmh5r618twnVbqfF",
  "key29": "3LifkmUXaHAG1ovCn1vdmgEF2eucP94SLq2VToNhYYnrRRAyga6j2AJNViHbJW2GNm2hg2iVA52rmxQZaHmaTB5M",
  "key30": "Xb7fgLkAG4Mz2FfiC8ZmsiK6hi1JzMq9EQDjJuVD2jSEC2VMimQFXq8HdGGZRriCPguoa2M6fAQN1F4Rv8W2NoR",
  "key31": "3gjV2Vhhvn3QsRvnJNKyQKBSNv3fTSCcU8sTW9R9REt72d9cnz9475C6pqnyjJv6CbK3Ad8zt94Q2SX2f6d7zGrt",
  "key32": "GfaGtiPxKXHqEyk1huHKMtiwNNxibrbgG8KKiL7SLXBp9HLJRkrv7bPz47FRQveW2tpu1y6tV7Jq3ydr632vzPz",
  "key33": "4Dfaa12w875TTtksF3KXZgJ7kv84rwDkDue7sM1b8b6Ye5VxoGVWnmqrwZXDNz8RhyjWn78Sptx6y2VDNbAbf6fM",
  "key34": "5b3qU8UfqVJEgGdRuHML6uG1UuETeGch4p8k7sv3cUNBPgkwo7kySgY6zHj1aarXkKZA7ie6qiNsvYC2Jt8dNfER",
  "key35": "PLac7ijcNQnaZPwNRy14jPpc5YvUBiz8tzi7SKGLEfpJ7wGCQpagGAMcwUvixaFLTqKWEHDvEC5yuuNv894Vh84",
  "key36": "4uzvkTwRPaaQBviM96gXmCeBU3AfRBKNfLY8k35r5CQUCJtcWMXDzM65XR1ixwn8t1Eke91xEZ3qqmV4ov2taRAS"
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
