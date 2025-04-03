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
    "2RJgxGwezceTkk9YDXaYqSC3Px8b3AbxVqBnTVDcqENFCKWPH7qCejnwRS9gUv3RvmXjtBbyv2EdaKYnZfC7mg84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QZqF2gk3oYdKYK9UL2xtZaFtFCmLg6GKNW7kPReyrVvH9VJgJxYgGKGXkQtKGszKXauwq4ErQ1jEi4Xij66yeS",
  "key1": "2Z9pdEB9b3Y4viNjrngcFaxSLcJoM45gFpe9cJkSqTSTvMcfHJ1dANPXaaF6qQk2E7ykQHBjiVSMg1pMJ4XjvCAh",
  "key2": "3SCeXxB9uZ94W6eYhrZd953Tr2oGiRaVY6wGXQuwrBxThWZHyWBvixeeNDjTML5frd1Rx4rxwL7cP4fdHQ3NxPCY",
  "key3": "4Q74UJZ97pFMJfHk7pMHYYU13ksGPrPcNbq22AoXVX4AYM8nsEMxzngeAe15WxgErekQVDy3NQEXw8NJXBgvcxu1",
  "key4": "5M9EzMcBPJ6caV6qF1f39oHgm2Zmz4EwZXXzGdvo6kj7kA5sPpB1NNeZ6M1ZNxmJWDDGg25KW7oZCwFB3GeqLo5i",
  "key5": "3qrWGP34BQDVE4fzosE87GDdCYW9yrkJeF7DmRbSB7kvqqXuJa69eEC5pmHtJizquEqnSLY2TTbJQ8WrkF8tXe4c",
  "key6": "4x466vhMLm1G7v8Q3g7HGAWNNWCkWoC4jBHFfowUV5maPydeAASBsbEmhY9ya3mMxyLQ49tb2aarAWmqyFCcdYTd",
  "key7": "4XUkQmEdfHSjT2Bg4kUr4dyXJ7hHYQpBBkHHt4cfDFsGjDdVegivmpFHQqXQcFAuLNUoZRVjYhaNzeKCWcEB7Udv",
  "key8": "47kgkDBBU3dbUp6PvwYNBLSQ2QV1Q9ccr7MHPq4GApd6LBfXDgvNfZD1mGAW74XwHfrLHLzhbjAKUetfY5QGFkkD",
  "key9": "5gs8o6xJQYm27GZ61qdh5A1RFod6XD8rvyQk1ntFWdoB5qqnsnzMwy1kFVhpaNCSMF1EDgk9VV2ydsSvfY3sVLRR",
  "key10": "3mFbXjrFpT8k4JoBqkPpa7PwM6nga6sKMqRrdns7wTpYadcRbneeaGpiYAjByMdTjJGXVprV17feSYPg9niuQ5vS",
  "key11": "2k5ZfiKHv2VQd8u6mf45HVvTZevBkgtTCntWS8pTkLEpYc4JJxiVpjhG8D1FXwXAzFt4LNZv5RN9MQKk9SDHMimE",
  "key12": "34oyWquDFt5GSpYe4LBCAm9KKcFhENzzkMRWHYcsq2V5XgE8UYwbtrnEdrQ2nWU6G7gUFNmn8Csp2pYYLUqMhxxt",
  "key13": "2bBMRcWiaKvWvvwJk19dyxqJ9w43qujwvBc3QwPdPeQCDQ4D9oVGYeZ2A9cQKxcm2BwfFb5nccWfKfvThC39soqh",
  "key14": "7AcDQ2bgv5YjHTtisadCJrNnmqvGLpKUdsiAubEZxsTBCW8mx1qj1w43W6mAxFByjRjUCdEYbtptLjcWWnBd1rg",
  "key15": "3xfbJN7do6VYD3TZF7ViAwVAfU5ZPEPmaCBu83kZTPLdgibJf168TanMDnyDKcYzSD81yH2jfz3t8a7ow8L4THdb",
  "key16": "3bvUKTwMRKoum4M4JjdT1wXgLMFjFPy6HLuztgzT17saQyv4h1qSsX49qNmYkLsMnwaMh2qRchEwuL4TQMrtvBGG",
  "key17": "61HdgSE3WiBDHxb8FfeZTS6KVnz5K5gzu3Nr59828RVSUnU9wp1NwPoqkhrtnsmXSkN2Zj5SfrDnsmFjXH75ZN44",
  "key18": "2HMZFA6xCkCAnJYA9JiGN4EFsD7Von6azDvGxymQxLQbA6PFJrteTSagdPuiQ36EBZwz6FJ2niYXvxK3Ea7pNLeD",
  "key19": "4fLdZAH4uRiSdVfD3SXVC5hExjGD76dzFkFMByighPDqrV2wrnrijYS7o2fJXr255fUVPwzrn4WvujcG6JDxB5Em",
  "key20": "4NqdkydWyN2jdwdciJZUtkSxcWUaLyatiTH5a26SPaCc4oHrFUYt2qV6s1FuZSY6xjpb2Z1qidf6xZDDoFLtz1Zy",
  "key21": "KTis9MnLsjB3uui2Ruhxj6hq39eTsHSZ8yJS52aXL5Hq1rYtZ8ZxC6bupHATd59GB9irqVgTwRG8PZRYBxoFqXD",
  "key22": "5WtbQkecTAGGJbvWVYeQo2xyyXwseDqHE39yH83JRfE2uuSwfdqZvt1xqxpefbwGKYyPN62VkxZnAMY4HoV5FjFa",
  "key23": "3KNPQPq7Mozu57ZUUjcLuFaCP9MXaqUfmQDTDBSRpf2ZcNR722X34Q7eCCJLniioyboeAsHsbGmtt8ZAmS3mJMmW",
  "key24": "91tnEu1sjHFMTy1k3gQg8FGNNuim51ZvdrkQWKsMADhKc5oMdHrsqKJT85FFRVdMuVx6KwBDm6mrvcGmfnmoFho",
  "key25": "35Ugdxa9uAFtYn9o1e35D31WD21GtHQh8CKM8c5Uno1t6f3SzHUyWbqjXh2wzqrBnCuUHdnhYLTdJsiSAvzbLvqa",
  "key26": "21CQanoWNThhgLRzBkjDPN4qvVY4dmfXQcZXzFwBzoq5wUB4jogQxDEC6brkMLevKim9WXcifLgU1ifoo6hDoNGy",
  "key27": "2db4TyLoyEHMcKqx4zhhariS3J5z8CrUsxEL7KXjxYPWKMHAB4efcSE7K36myLH4m2Kr12sJrqmhvq889VSgJoAM",
  "key28": "5tGi7NMWu9vdViuLQfxMGWMoeUV6CHbinBQhYmAb1X2WH7D6xQN4DBH95KZ9wJPH7feYQ7Qmn3e8veCkrHx9whGR",
  "key29": "5sVHv4SvVTw1PoXvPVCymTYTM6sHsVjBa3tESf2zisFR33mRqxG7Mt5ZUEyCvm23xdJo9yznuLHx4kaba9NYHrMV",
  "key30": "VDeRxjZ69uUfi6gTT79MBFxXQz2m79aLCGenyBAqUhw2SRjTk7PyWjjL3Fgrm8BNY313GxCUMe1LQ9wNjvRWS8k",
  "key31": "5zoRa9ZTqFaCANHtqvDLRAAJYxhQVSH2yPVURt8RRBppwEnp1yi4a6v54YdRQDLLdJgFmyqW4MBRsAhUy8PssnB5",
  "key32": "3wd1cFNE9Wo1G5poYoqD5ozHZosGf3wxHyyiCnwjS9AfdpiHoEcschnLeZ9rQ3FkrZk8U43WiyNL8zL3RBYQ9zyo",
  "key33": "5VhN1LMoaDFmNc7wPxL1cmW9K1uTiXeKE1CJzVB2gWp7cuUGR8YFUjTkL2ekhUXiKeEaK8jUucudRz6scgXZdaNH",
  "key34": "52S6UanfXEgCzFeS9a9QeZazJ9YVxazFWxEijAFTWVzxsh1brFP4ddryVU9pe5Yf8hezKoPRbX8ncRfDKnzunfAN",
  "key35": "427B5gzfgwB3FW5dDKFk4FP4tHVwBAc7xvZVDPU1WnRuXrHYHESPZp1TP2Rat6YkBkRi194rtXqddUc94bhvJspR",
  "key36": "TU1M1rTRUr8XcnRiAuHfspFTWhuigC4NTaPw4UyhTk7XpmVuo7uX6Z6BdmBc4nX89ANJ4BSaGLqWzfpKiJbFFWw",
  "key37": "3YLkRqTaac1scvFfRKGQ9Ks45mSQhh8UjkCHZPviyxQxXLMFKKcgtVXy9Roq8BWKxJFxnzJAVzBdffmW6EJFZJ8n",
  "key38": "5NBUw5CBZrb64oRKTBThfFzMqD9zNLbtPRUmMhMC6H8Az25VScAUTrhZHXz4nBL5dYUUMqxQb6meBczDyYZqdndU",
  "key39": "5WeL3J5RyGgHLUBaMnnjth3zMg2DVSNa5mSUdhXPFkHuk7Z3NQhU7fGKvADZMZ81qnea2TzpRQZXSVoBC9dnH3DA",
  "key40": "2S2YCPkXkPuA18xwfNfs52deAZGTrMADxtjnPV5obetK4aMsMFv4GdEiHUhZLbT3bpAf3fVpv5iFTJrid9NZZ47C",
  "key41": "3dZLEYqM5vut2MFQNjnvUGkcLbBjKTpVXBo4fjkcWUP5d1KmqWkR6SA9C7pqzksU6Cvf3zhrzFA4wg5kxAgDuzKn"
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
