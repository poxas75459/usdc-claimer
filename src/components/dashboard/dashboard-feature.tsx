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
    "5oymDs2vDfWVfCdLBDBw1SG8pK1JdEK1j9f1LxjPqPV6r4tnXpb6bBePseNkkvAESnvWDbS8FUJcKfq5VJSngsnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMQXtFxrMBUeP3bzCcJAzNyYEaFirarZjv7bksRRtXgCV3MigSwzTPENDP6QGRec5KdcB4bzwBCEqnokkzxa148",
  "key1": "2tgTSHCEip9VsxJVjKysi55LTgBrz3UPT9gZLW626mQyafCxKsqZkpxER34rSXD8vZD2ahpsSegtoMgwVHHHVS4T",
  "key2": "39sgaPu4SGZGnPVebn8YkBjbXEhAug4T5T3hqWxcnvTJgewARNXmbwQuacSPhMabuoSPSHK5MukBJddFojbYJ3RX",
  "key3": "3UCh2zZ5bxRfKNRvvjatyRCKiCajDiGSZ6WUqQWe8KwxbCVEQyXNw6JGpKpNDNPvobcFJf5Yfy1tSghd9xwCmQTb",
  "key4": "2Uysdud64PHrWcV4PU5XEyMTyx4NPkMongmuJ2nYLZj6ZjQ97L6pZ6cvjvbsdVhS1R97875amZJsoY2KourUaVEZ",
  "key5": "25xENt9P4gt3Rqd9aTFyXddJqK2UpDZrciWS6Yst2vFkxGpe4FiNdV2rgZ7D6QRJMWw1C3eFcPZjGC96agWqwopW",
  "key6": "33yGQumeBBgphZuKHX6GzCgVGnVGSP1pkYKJKiT9wb2b3JKuTCMaPVa6g1Kae496QAUh4cYkX5t5fX7USvAfafJt",
  "key7": "2EVEGy1MhNkR5MAW4CmiEKghQEULFSvNfsdGzgM4GXaF68wFw37SAoo2evsV1dimoM4pnE9XUL2n5nKzr8NA76VT",
  "key8": "2LAzi9sLiAZaxgxW6KwPT3bb2x9ziiNRYpDU2iTVyc2WFwrw1t6rHd4VLBWu3QAgoGAE6DZ921ekTC1FNyiFDtVf",
  "key9": "5XvcyzDt3ZP73H83hhPWuVNXhfKPmN54dns6yUyBsFFu1ymFXaDBQhVSJYSUAdPj1PfSrNhXURqSekfAsEDTCsJD",
  "key10": "5hk2uexmU1t8fMsgzfBZQkf8uBBWn551w2shASTrogLB6vvwTyaPSkcRSrHxjxEKxJV3QJiHDKWDePVbgpppTszZ",
  "key11": "LxJfG5k7ZUZSdvdfXG9H8QkoMLtGzBZz3Tgc9onmMVvbwJSNpANTs33tgfHHDLLGGdcwKTrfSapo2jYyyhXFLmc",
  "key12": "4nw11JNdBadaYpvG3y2Ho8sWduyDpSPLBmUN3Yd1woXNGPhrVVREdy8FsqLieswQGAvXWdYZfTFyghrUaKS4bLqn",
  "key13": "kBanUMSrhN7xhdihhZJ7d1hfNKqkuHxJvao1K8gQ9Y4aKX1JnHYS6zpkpgZPqt2Buy2GnnCffb2sFvUYjq1CJGe",
  "key14": "649KVRiJk1L1o8BomFvt6wZpCk7ahoMvippKm8iZNktEo7Y5y8a3uXmoqS9snY2aH9fWDt5m33iejJbjqtYoMhiw",
  "key15": "5ophRDMWzCYRj9bQhGQYdzcGJt4XvTnA75yvtoRrkyErHsKTQyKCA5T1wQdMXgnJotcZEsQ3UqpuokE9PzhGEy3a",
  "key16": "5NB7QdwDSx8tRy9SoCXKPALuqFGHGGn5JjzPJKb7UvsXv3itbtCKt4JeLJLyrRnLQ6vHfuCAm4d2dGa6Hr42EGa3",
  "key17": "4Xc5BXU56BXaydzcLagJQShq2ithJ7D6Vq7ULMgisAFaStZxj4F3iFLjteFVioptgsQnZKPLaeJCmfrUkx2Pnif",
  "key18": "3bJjiFgvoUGcaaJAxq7DkYVg8UHxAmYRroTWXB4yh4QWvmB2TmTvgM9WpZNhFr2QMS5txQ6j22qBMw7pX5Tcheo4",
  "key19": "5BJdzE6nYun1PLcJ4K5gLkbTK29NunepPzzX7XLvc1QU7imSieRn8oABvY8cEcbRh117rMzeAe6MpE7EdceEBJfq",
  "key20": "5ojEFpcwGgfb73cSuevTPfFdXRbZZmY3YNWeqa2dnvH78epL4Sk1XGnZEah6Ft1U4gosRmkEM49bBTqekLaWj2nS",
  "key21": "9fDRi2CGxUkcMMS9qUD2Ayu2nPESSHtufQua9XA5Lf76SupjDZtTMV7WfreXEtsMwvr7w5mg6YJsFFJcsvuv2Jd",
  "key22": "3dnX5d457U7rDGsWBn5csEm2sSVQmibTNsajVxqnDSxCDMPvUb88QWXXr4RnQZAJBuHyR355YC3H2bbJdLdqeCMp",
  "key23": "2TpyHhhqfjRBEyHBpCDb3QdY3eawdqcBXED73kPp75WF5sgeQL28juKh1FH6jtvrfduZHNiokeRj4cX4J3ijuMp7",
  "key24": "4rX8XCUKPAPMKkDYNEshJ5AZRMCPJNrikXE9x4gacRSPXUEQ2ouG1YDhJUvfzkPFeK9yoLzCeTRDpHLHf9sdn9VC",
  "key25": "gDuaARNDDPp2WBPpDxoKNKyNkYYTZsaT3WByTntrhcqGQak4yx1GNpUVjg6MYX78dvfvx8gL1iFackVLWBvZSrh",
  "key26": "4P8U7rZfXzrZGfKsRgGEgMN37hsT5htw8G5YzwGT3LiAGVgMZd2bvBzmdMnYGdfFNoKCd1B2iJ4QyCktuUJpycMG",
  "key27": "5keyZKdCnwzeJjZNs95VHwm44rTojWJhxzc5XyvrMkPorEWDQcEQmQFzWoorwdeYdzBkGrdHQXFkMJWWtNCnD5Rt",
  "key28": "5i1R2DZBC8MBW1TfTgABcA2ZYMht6v8NXfombgX5v9SRZMMCcNTNwh6iQbB9SrS1kohmFtkDwEAbUSytromzjkZU",
  "key29": "5oonZFEBHjkLKVLRgYr1vFPhmBK2E67wKykspVGSTwPqZA7E5o1pPPgwneP7EY8mX9iv4kNrJ3nk46shhAFNsbKN",
  "key30": "2TF5jPgdJtDyzw72ufJXWvmoUQQ7tcqg2X3czUaj1bp6jku5NLw25y3qMrrpYxoCbzPLwNbqmRz5Jk4mrkURWo11",
  "key31": "41VmY4MJE7vA3KEeozhnujkDpt7aszkQKAez8XcEmBJMVPAjE5GNM3UrzGRuyy4wyd5j5fV6KJne28sFiwfuW4be",
  "key32": "3uYk6dneiSKx2tG3Z2YvGYZ2DoXLtUv9r9szReYLt9EG213WgdbGABcdzmpbuBMeEjr7mu8ZDXDXUX56rvjHME9j"
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
