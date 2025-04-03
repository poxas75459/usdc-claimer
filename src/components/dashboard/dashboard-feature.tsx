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
    "5aGxmXgqU8cXkSWcJwPWBCdFrQULeVh6gzPkC4cpXH5ViNrnvuCcBhNKoxWpxUi2PWyhLdyo9vYb3dHsbswKPL72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zh7YGLVip8p9JXwzoWN4tzWC9YwwK8SWaroe8zz8TYuzSnynXHaRRn4Ni5UEVJ3HTq1y74QFiKXq5ndFVXTgeDt",
  "key1": "PZZQHZaQUkJRukRgzFc2zLTdEg55YT97whbfauR9kMtpg3tjPFddjC3XcCPqSMEuDz8z89LX8Wp2XYJ7eSTEzZv",
  "key2": "3f7LF6qMQtoqVHBt8tUuHJaFc78LcYQg57h38WHB5zss1fWNaCqKNQUJB5FFLscr5hGZi1rHZp25inx7HjZduTQL",
  "key3": "3P54TgLXS6xaEfn3ZLDsNyMPsUV7D2Dv5xdpm2UFiyzbKJjtyqpwGBPML4F2F4hDqWpakJ6EQmAvUKMJj8XZ2AJZ",
  "key4": "5g9BXsFqdfR6JS4LgQHvqUciZHCA2ST4g2Sb9fJwxeH6JsfvpYLHBaMXPjxndd5sPhnkwn2aqFDjyZ9KpyP2DFew",
  "key5": "RGRBCyroyS6ADaUScJYcFE3QPjJDSn7ea5WYm8DaYYRzu4U3wAqdkXzN3jFG6wZVHuj9q2LkAoL55doRVZikGv8",
  "key6": "3Ab7jfk17gKtAQ7f1VLBuMxUx85BAxdmCtpDmWLVTCgC51qJYVPsgun3mx5orDTx6euLmHsFogy81mQ9MuTTCuHy",
  "key7": "3DBJXkCzrHPiiLqLArW2ZyXVdo28LN9hdCDptDaLJcUGgnNSzKG8GcWGherU2QbtvJTxTomDzqcU8zTsfF8dojPR",
  "key8": "WqrN9uSLuVPsBhMmdQ5t9ucYg4kun9ay1MMpmxrt9Xag3NBNms1V8i7YzHPwahrsYfX7B4R2yVQzzeHH58EFemQ",
  "key9": "613LZiiAPZv3CMHiuqgVpB5rPqjyCifsquf1ucFPUQrSz4uyuFyRt9qxxZ6kKNnDLBhFd2iusxsWTkwTx3pu9EBA",
  "key10": "4xS3tCZyWE5ejKYbsNEUXRjziXa2MJg7wTBWYtRfhmFix18XJEnhZ9uySCAEPzUvsB7PnD2uuhd6wTXKu4Q6VdF3",
  "key11": "5gKCjs68AhVuF9toSeFxbUB9aV2geSBKRdBMBPcUaTD3LXY9zwuPWWMqtfAqoDccwS4Cm8TqCCwBznDQB33Cewej",
  "key12": "2Km9XWjxVXvUiGZZAJv5TqDoAfqpg5XUYwAW5jvKVfX581wodWCSKSuUJM14xvqoTLHXsLuzenx8Rh8T81Szm3Tx",
  "key13": "4T7LqSG5mdLTH6EBPPCz7L1DJQAU6TptNR3xKrYVqkFxCXz3q9BbPAgRzJ2jXzRhsXY81oignhiB2iPFGk75mmmJ",
  "key14": "2Lmuhx87UK9A4aRjczEJEo9euqrah2whFYRYS7tHcuec9tGr4Ls9c2NtzcJNnFdW8f5BP7mLzmY2BWSwJSjpCdNd",
  "key15": "5ov9nP3YHHsMgtvCJdq9Xr2fcbKrBoVE6dddRh93NUssD6JbJEE8nNtLMYm6oc9SzxQEGjZ3eaCFTAMoksi73b79",
  "key16": "fyVAHg7ZLYvTGG915ineCpiampwC4wzyQbxFxsudowAFjeV3yX2SgnooY93wmMiBqNTLEwtNpvDvScMMpFVCN4r",
  "key17": "sUCpc47ZW4AZkV9jfe78CNceh3oVyAM68VxRJvPoNML3a6aos9zN8AyuyK6CTmEVe5W7oZ27d1L2RGzq2rPHzEC",
  "key18": "5FnMmUXhiZgr4qUzEwUJS6cmzW9nU3ojAZ4neoLzpm5VvbUbGQnmbqHDuMqcEVzvYFFeqgLWDvszmx5YTeUqEMaE",
  "key19": "61SU6X9cyBKSxXjZKnYGaoMyX69m5iyW9QDeCsMQqC5KSie818kHkeTTdPL1F2mkA4u4pTuRznKUsAbdnXQV3tyY",
  "key20": "2bKeTbJQihRk8M9iuABMvMM84ayHeFGFH55zDE9xhbAopGgqZGf3jA7X9LqSpSmTxC37wNkzt3AxPKoqyxRdp9X7",
  "key21": "63B9d2CKKcdupgXoZGRBbCdj5KtY4hwuj3c8j8PUJaAuSeMTSj314FjwiWAZKiNyz54VNGAoNEuo4n1vmCgDxcjc",
  "key22": "2z9maKqvzzNf5rQidftDptTk6HYwvMFYVimknQTY4knkMterkKthp8piKE6yHDivSmZPSTZ2Lis4z1eafBomjJe6",
  "key23": "2C4C3F4DYTkFZEh5iBncsxwHs4Nakuyv9r4DSxPRyUW2LbRbRZvh5AJb49PF4mFexiNAQmuteXy1XUJ7wXjQRnMP",
  "key24": "2knFvWiZgHZbwNZoWc69hjKhShknUFqzbsnt1p3PNUeC4qdKgvegJiw9ehZcqvtzSczrRR13B3G5VMjaFcXQ2yWB",
  "key25": "5Vmh6Joz5RxmVarVUnCR3aaN8BWocWWfo2C7cCrSwh7sqhaNBMkj4oLrjoTqo34sa81soXUncFCox3L7GtSfK25s",
  "key26": "2Z8wgEa46wZ5TXRB6wCV9kxmK4Seuj2ynHb8gVcJWuKnm1Xu2yLg2NX9nJ8azoN3sc3mg3XbaU9hsLcU8j7aJUom",
  "key27": "ZrZFMbSdAAEnUG2pp27JPywAZBFptGk7tDr4WTS9ctcHoE42KGbVT9F3aSQpE69XuzX3A2vYeVBJYP2Dv6BPyYB",
  "key28": "3McNAnL9DMJTMeurNabR56QBdGzBaUir9FB1gxcXyCYzSGpSjeEenzK5nLyejrkhvseoMpPQyBppZhqAQwwJMjy",
  "key29": "4EaVa3rNA7uu365EFkTCfJWFJZMtNhuA29V8HDg1cy38d9MdJNF8GDfBo9LF6s7xYeBfrEZUEeV39o5yX75f9T1b",
  "key30": "4sFATWfBzcb27ShBMcNWmLQbPk15nJNYosBLb5oFMPnrJ8xv4vXPqr3m6P4QzMuJRLtoLmN3eMPEejV4AGE4bA7P",
  "key31": "3CBz2FPoL7NtoKLyHCQHkhu5sdCcQMKswEb3yNmM9Z2Pn2zpvuh9JsW748rbUFmswFUUU8EX1gsZhiEWTF1b44St",
  "key32": "4cRiL22hUva3J9A8X9voXK9HEDtmD3yinbtifYpPnEWmojaGVkd5cHyFQAeCtcE9w7w79GgbqZGHiGfPuX8PzZ5Q",
  "key33": "3HkAFeZLYVxBFeJQJChzoLz3x3H1GhisXTB12fNNCsy3jm44DcGiF1NjL137oSYGkw4dPcpYM2UUkxqj6gRrWmqX",
  "key34": "vR6VQkDtiDnttByd3TRUGdMV3ed1YXJXbVWKJRj2QepuNAxw1KEZ4Mate3x735QXD7vJPMz1PcJQVqA1LGQqBeS",
  "key35": "2xjRXEyCwaFUFZ5sK3DutJpMgcM9S1w2DGrgHDHAhAk5mDav1ntCxtW4uLkXinpGvpLaByDPGstWtWtqDUucrxCi"
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
