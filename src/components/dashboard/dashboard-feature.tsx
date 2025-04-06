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
    "4NGM4cLCvRhrYEh6xXJpvBpB5AeP5tn4TDumvYQxYsnPkXRBqdVq6oLV5rpFWj5x9wETzq4UJegBaHjQFbLtTS28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HmnvejMtfacQV9DAxgJdnD4L7SGdp8s2M3E55eYEdc8sN3r1sMw4xr7yPVAuNPnvZGnVRPihiipeYSFQj5yT85s",
  "key1": "3ogcyv9U9BbRyHYuc4UTEigWNp3nW6Tj3rsNtF7r6z89DvsCGcKY1T6YkMFd7PG1gafQHV315QwRdPWTA7HPDLUT",
  "key2": "3yDK7PXuFekNvVnZ8yr66fF3dnsCEXksX6kFRqaNMgQbSd2DbDiGLtqD8sVo7FQiUqEi6cf3rAh2Cry3fomsi8Yb",
  "key3": "5zJKXghQS7QaMYiHV4kAsTSnuQ5Miwk4EGSE8D5YqZid2gCpdYJ3u9Buqc1nzxhQDKyamQmZmoJnpdY822VMbjg3",
  "key4": "2h9YEGM3Weej4h2JrCNCxYxAzxzFmpfbTPanjTgG7oMhXZ15Gx5Yn2XDxQww1rFzzhGMGgS6HYTd26VYcbTvX8LT",
  "key5": "5bSMiJcNAGqR9AikPSpmuSxJXRb4LNZeLh5KgNV3wssZQ6EJFh6bRiqKkFrWwEkR9jPuu2qE63xWo4LkfwacpnW8",
  "key6": "5YbnPP6pdrpcfyLSZ77cKtdKEPDgH1eqnUSVaq4zAGRKefc6D9931QBk6LYrF8XS16edD9RRcJFiP65kXFR3Vapr",
  "key7": "jQZGCNsLoHBQf75Wy5LL7iefb4ESzsDCMkLzCnzu2cpaAxnGYvtT63CguFpRKQkTu8cxaceh2tp8yDcEWeAeFbQ",
  "key8": "33YAregfHhZ4aMZuYU3HNLkMMQ7fu1g3LHufeXjpjk7NtdLA9SDCxeXn9JBhMXBQhWBfdEV8ysYLudnCGggRPg7P",
  "key9": "3RiZ4BC9x1q4m54omSZbB37DjXXN1yTirvz35THNxHQoc5vRWoDazA2sCKFB4bsFeRpTbSS7fQFJUZionhWqbFSa",
  "key10": "54qy2rkj6YGTJKMZLAM7oA9HNiZAxACe661kWwPePfL7YgW8sf1pJDarM7Z8kbF8bEveLifeXvVfY3shZwRK8AfX",
  "key11": "2yAnnz53za6uw2MwJNrFENqmCccF63sWr1jUWjwpHCzeDoMTMMsyvZa4vT6x2eXFfEawoutFf6W3JM4JpNi4JyRR",
  "key12": "4vPy5VWmEFP3mXKM7wK3P5YUF8PvHP6a1LkY3nL8hyzdgqkxVyGZhR1pVhjXqgcdytCCMV5C5kDcfh97M5ssTrzS",
  "key13": "FmeUTt22GLs5u1R6mk1KAEzLrejqxGqvTieUH6mR2SfT7W26QDqmHwRnFFbtfE3wmPGcGYpbrFGERrUixL4KvN8",
  "key14": "5hrD9n77mmGSyukG7P5HMn3BSxDc2Cx4YyNEHeErmayhiLKy5zSkytpSFpqF2F6P1DrmJAWUdvFCkyg1WANQ6nGn",
  "key15": "3GjGTSLNcgdfJ84JNEw1Etp6tRnDQrUVrDc1bbVTiN9gevBMJYA2BeDMkbAo8Es42cPJGy1BukMubzbp74qARDtL",
  "key16": "4T272AByn2Aog7LfwQZ4rzcBVcG7VBPZcjkWViB5zy9Ds7yddbr34qm5zPuUD5qoPBjuPudcGqJ3yuBPUt7RiG7Z",
  "key17": "3Mh8xHcgVGtEx6Jf97ZssuEYdYcbAUNJjzd3VmE23YWejSkaD7EB3ftAbZe13sSwXGKH2TWX42rQEmSzfV8hkQYn",
  "key18": "2oVjjoh9VnMHewHUg6D44aebKvbuWAfjsF4wTHDh2RkcW89zaCGsZPskYuD7o5fp9uzGRdv4HbjuUN8QpiiuEuxD",
  "key19": "2dtPpR6TfN9CHjfAvWu6Cwhbv8ZtZazqCvotUTMsqZrhUdtiwMW45FqjB5mmiELqqksyhnZBtALtQvmsG9LRY5Pu",
  "key20": "5CWn44DpGw3ZnzXsyEvQWYve5F9F5nmdiqKcJtgrwKyh4sSkiZcw6L2Gx2dfQmhSuJpTTFPJz5VMX5892bHknPMt",
  "key21": "eynze7X6iXfPZSxsUJU1oTnESDydWYTuWL7TtiLR6PLu5ww6RaLXkeM7fSsc3QKN5T8RAJb7554jv5KeR4edtsw",
  "key22": "4HozvmR5XfBhWHExuWLJPnFn1TkRXGFfJyWwvrq69UsmwxdwvxduAGrdFzFbWmzNLV9dEwsurwFykmsNukx73X66",
  "key23": "u4q5t1Mox7qDHEsE2QsYcFirE4edp4XzLQFfk36cWPQzYvuALfRD3t6kFaFS4QztPPQCAznULWDGCqLgSARsLY2",
  "key24": "4DSpJk9gnXhzKmB4B8xoZmgmh4NVSWNmbL8opzkzEaDp8srYi6fvTVio4C2XJEj87NncisgVwcLb5QcJyDS5w4nq",
  "key25": "3Z5YTHJ7fMqqASTB7knxChKjtzPCePaot9ijoMfX1mS1YxUqP1tzjPrTuxE2yPxM917E5Hc7J6PB8Yt84C8iX1Zg",
  "key26": "qkZRJ2zr58vg88tywV9bDWNF4NyiUygvBBJBz3ZT3gj9YtyvfUR2TnpAymYhJe6v33PrCNWD9HCqzCbkp8crL5j",
  "key27": "2CvHAfJkbaTYaPLyDREuTTD6BRko2MoVKxxFHbrpmuuRZwRb6ADZ88fbCM9SHyT5nansQyMprsxxv7gs3F5xyhsg",
  "key28": "5tsHvPNLuVVUL9jsFBtdJSxB7eXVmoVFCaPgeEL1nNM7jwA68517rkoe2ro4bA9p9WXJryF2p7s1XvqhmZTVXtZ8",
  "key29": "42aUgNvxyjPRfqQ8GMhtmoocs6vqyJBnAaTd28dxSXhsXnBLCAorTHeNUpeq1jaofP1DDjWjwJmrBDa5NBhgjYY2",
  "key30": "MHKZKFNRg4ECfn99YjxWnrAnuYQKF1p7paBkUdgT4CZpR6oYPm5i8oySro4M9sL2jvQNEM98nLRyXh8ixZp2hbe",
  "key31": "WodC7H7VBWa4MuhASxrKmT52gQf3MZhSTvo5mPuK5cngmLGrfACZev5DZ91BSiHYEFd3VcMrMpnmHcu7zUFosTQ"
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
