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
    "5wmYCeMekCZaDjGPjRTKVorcFmDRfKGY49sttHW7t8MifPvhRxzhKp4XjAd5LEd7vrXo1bV8HvELcNuoxMQwXhUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwQ7FHfoXRGddY26S4vhmFM41FHyJEmo1Yc3wNmBjscKyR1Hi4e6H2UmYPRE6HGeiqATDwbWG6mjgjCkHJ8mHpB",
  "key1": "23p8MZnZ9zUMU3NUBMXf6HSeF71HjFJHMyYawrhJAwW9q26xZEt8JXsyHUw9vLZAZFUfN9KAwkcDnE4oyvYDBDqs",
  "key2": "2G9E6FdyPaNL91z2xm7C2aSXkuCAkRJ2GRa9SAtyK9753FxxZpxQPnf6h8dsSYAYFweuHWQd5NZfK7nfk1eDt5ST",
  "key3": "5Zu8wV7oxor3pz9ZGNtXsPsjMLvXfvDzoM35KHVNkqnMZjruaHCs51fwt6ynXTnDuxVw2KuC9pX6ErEz8dmKNmpF",
  "key4": "4jussoZ2Lhv9rWzjDi2jEmBJwHNiKeuTyyc1tm2f63nr8PzEkS5WNWt7Wnr7M38KaB8usz3cJXJovSbU9eCNDaAj",
  "key5": "3L2pBHRNER2xMZrwuBCEvETCo5BFDyfJSkJKbJvHxmGyprKQt8X1uvf7npBtkMJSHnncEkV7ZP6VpvZ9nQAqdrbq",
  "key6": "3AphRCfTEKX9fBceb18VSWc9jRZYpeZYfkYXk8XsvbQjY7ME4NzpGtYScjL8RD9AkWSGQ4Q3ZcJxcUfMwPEg4kJc",
  "key7": "5tBEb8tUHZh5XuLUdTPJNvLuJKtaKqxZ1d4Txt5aUFbaUE1UURQUPyD3nnEYL2AkEXXCT6H4DXjWtBEPWZFRqgir",
  "key8": "368h65Dg94sukvnLZY4wHFzKjx9VU3v8wgxAdh2CtCPXjy4mBRN2ACMdAp3E1PNwwqdHqfrvAn43bsTBbCcrdokn",
  "key9": "4XpxRJm9u3ASaMJd9oiiRT5pBAmutqk1wJuBXeqoRVTgBMBvXN4JRgPMo3u7BBVTAL8MnCGAVqzSmyUVcNe2gMCe",
  "key10": "4UM3wtLULorghNi4XPjWeFUegQbLZgAi8n8z87rHQC5tC7rNbhDvPkb7zJT8JqDBg8gfEcDiykvW1CT8DRBQVz4L",
  "key11": "hBze1gNizfKuk7Xs3GGsSXo5EG6M3dbMtWcDZbDjcMHkv8F7CbZ9XvqSsjyCUJbV1A7S3FktR3Kt8bmxBfmSWKA",
  "key12": "48CMZ1mC4h671q8RGcdGQkojEthV3yB59MxJQFE1CmhQt8Ko8tuACqRpSnKoWU5msUEyaphdbnUpfop5bTnausyF",
  "key13": "3esqqF7Ds7jpt1WCSeuWvVzLD7UGLK2EKfPXTt55iNsNBhpBdtaY3hhQD3Huk9ydJWGVrdjVSPKZahHNjy26TAJZ",
  "key14": "V9entf8EVrjf3MAdCFVm1Y2y9ScMk4XQtibQPsB4uNhdx5rTXQpdYWFiMyDSCnah52ytksxBL1KK4cefx7KAZeF",
  "key15": "3fJ9TgghBKVM3UymYwmPfUySyp8qhoZemQdsvdyQVFd5dPoZDRbBarfuc6mzawNdSBjVQWxJKgW762sUt6vZbQFq",
  "key16": "31ebo9wn7XMgYt7AXBzDrydGZSRF9sGYmpowx1bjM1GGBYqU4iS5j58sUMTdUZyPH7WHdojN4KMXgp6GF9y7MGJx",
  "key17": "3v4HVuBem2mcwCRYB1qqx1VGaPh7M8b8PkVfcVZHreDqJtZ7kQBpBuTyQR3muRJZMdLkuTVdwoQQHHoaef36ekCR",
  "key18": "ezmrTqwVqKAVhF3yJAzsuvagn7o8vaxBzmNuB2G6pYwCm3XKpqSFZVGquQpUvYEsxymAt1KBeRkbXTTEwmzRrX3",
  "key19": "buYhLWH48szhYq3VjJDpsjGSZ6rfzffPGZNFKntne9ctcZRJ3Jw4Pa28tDKs479Df2PYeFELPpVMPTXqFDWqL8M",
  "key20": "gqSGwSv6KQi5H4JirEote2qqKPRAyt67MQ317NtEBAiBoKvahRH7v3g49wB1ggcwVY62eL529DiHrZj9jNNpyc7",
  "key21": "2CZSMQgDnhKeckcCU41ckkYvJzpbTN25eXiZ5DTPnQdEjCaWdomYMbUJHjAVWDy1rWjY4qe85ZqEMFWRZcAGkUwM",
  "key22": "CTECUAabrm8N34VPSsHA3yNSvkM1yM1EiY3JQtxJSm9JGgLE9L3jgrXPeyMFTiHgnLmzC96kLXfQUXn9ERPPhch",
  "key23": "injwhy1y119uoYPE8t7QQ2z8UGzkX6qAcvqXPhRQqKEV4YYjnx5dCvjtXKNzeNX2R2zYnMaVET33dT91Ke3jHQv",
  "key24": "2p41srfpgRbWwD9hQxSNwvb4GPW26y9viHAKL7cVajfp7jrGeqRdb4vaoWma2w3ehgSN7J36s1Rgqzv2iK3FZPsP",
  "key25": "YPVAWNdwn3qrkWR8SUBbTokWDe9dgZLK5G1n8Fdm23SA9jEnt2ybusqTFMu7DBPqY2cKMYLUMNymSoxY5ELVoWi",
  "key26": "2AV7J14CunCHRFtmwBhVDWPNsQ3DPvnmnJuuuHn4oB136wcjHupJX38ApavcvjnhtM5cWsABgA4fnosG416eMbnG",
  "key27": "2QHHnM8QjT3ZBern7E6Zc9AMAQBqJaaJeYZutySe7XGiZXBByGKSKQCeaoDLr9pj3LDxeLYZDctuxhSU2rzyUhpZ",
  "key28": "3phWxDGCSiG19893uAjqHkmNZVx4cDhDt3rLj3EiXhDs87pHsSdh4XcubwQsoX9qc9evqQhW5vADQR395gYwAmD1"
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
