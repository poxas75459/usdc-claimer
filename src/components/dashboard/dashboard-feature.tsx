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
    "65StRiWp4bfoTwwnCEAYzH19pp2Kitpgj7bKTLT249w3pqEgCiifnb2U11aSSKYHPBzQezVktEgEegLzkozh5Ee6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kA3RBdgUtgQyPmxBnVXwSQCK4rHcj3cQjZj5kNV2Jf9WnG8JTPpQHxHc2UVGxhCE4HRNbCXT9nz2QqXFxzZf3hp",
  "key1": "4HgEiz96Wv7fn6WSfqC1HKnvmHeYLPk2wMAbcj5pbbKzj3EUYsGMz5dc2VM3UpNsd8LQHakXTkeUaSa8x1T1FPmN",
  "key2": "4HbAjuq2JbNM7a3497Yq5Mz3mfLt79neJu3xAACLpC3STjV44cxWqk131Ti5cnocy4J7FA36X7GU62fDBjUKWjG1",
  "key3": "3nYrHkDGpWPiRF7VQkpg22VDs6sKjrGftUzHKYxNz7NSVFa73eXwHmZrDoAuZ9pCXncP59Frxgq9ZDVpypN3Vu1k",
  "key4": "3M8wXnH6E2e23jTwgH7EPapi2sWcLN4dQoc7tpiATfsZxF4Ez1VrkVc6mEN2wxhtz76EUxco3Uid6hDzqoe2qaL7",
  "key5": "4h8dCKJVvA9G1JH6ZLLf3a2uuGCBH3j5ZuPJqE2ELCnFsTXQpd6Tw7YbUmaE1uefeqrCp6DoMq1Qh9bvr1cf6LwH",
  "key6": "2aNzwaReZaY5uZz1vHazoHYVY5cR4oX3YzqpmyPDhpUEmA5WTzBg6pS5PTrR9PUSgCUrSzP5M4kKr11fPwJgaoeb",
  "key7": "2Vcx7hXXAf2NvyT2jtae8KqCbh26md1AiDeUjG4gE26cBvimbkX5gZTcUVQTMM8uKeMVsM3NLJFm5EdGhq2hLBkz",
  "key8": "4D4D3KCpud42z1UqgsE81VjoBBDqjmTPxCeeJdC2FwjkhsRuTqQk1DLrdD3it3VALNDSZcUPPVgsFcZFkiPbMqgS",
  "key9": "26UTXyb1TmeuRk6M8UX84bLUMQ3FX4nFxaotdYAVM8wcucGWcr5YYuJgdrgGdj1DqDDVNqKQo3sKDd9sm2zm7JQK",
  "key10": "2hrDb96Fw7xesFn5urFspmbGuTLGAL6RdSLuoZFogR8TLSnrojadX8cu2snJU2zf6sWKg1m7eumVPJppUxPTrUAd",
  "key11": "mVv7qczdvuqdbR4ZhNz3BDfTT7LyExjoX6Soxe5vA8i7eHNYQGGfBhQEpxSiy6XyehcyPYxzHiGWK99YqpB4BEh",
  "key12": "2cAuTKhtTE56vFE77k8aobyHsrLLeqGS9gCXNWgbmewsMs82vzkipu2oGhSd4TdGuZKgLmw5kr8BNBJvbC6PrC9E",
  "key13": "3XZsSJ34VdYKg7vpd1KzahPgpMuf3vxXvxGqtgELabEHwuFVq7JdCPVsYxyQvQQ4ubFaCxZFVYewmG31a5TQNPdT",
  "key14": "5Jqjn8mQ6zSasVaPgQjCj3cnknV8Zf4uLWq3TyZBNLVjqKvqyFxBDqeuidtBDWZGcHDAVpsDwkfuYJBLb97X5meU",
  "key15": "5ciCtKiSPP3di4tLERg5s75EVtJ93HtLFBLqfgKX1ivGDVtwmSKTdCjbP1UAJoTY3dzBcSr2UB8xbKaTNg2dWB2y",
  "key16": "AdGdAGjoQQRTiSE3jgQ2itYBoDX6vdSUrBVnPnKAFJ5U31K6oGH6VtRZB48u3DATPtDPTPKtz28MRgzpv4cvVG5",
  "key17": "4zhcAkjQVnNCT8fiUze5YBd4xgBLVXRWLxQBZaTKVkusk7ZoGFLw1XEsxn8yKbCdtiEBZjoM7zSXMWsb66XnhSSr",
  "key18": "3z3DvjzkedqTvVmihtuyJuEhhz4uYFzbyeoPPwk9pEYfQ1YyC3qwv73N7ycdFtEAY7LP3i8DFpG29oNPttiiMw5M",
  "key19": "5RS6KMaym22515d3cVtQvz4GKAbHpkgkcdMKMmwGNocwrpBHRKcvZgwTUTUvpKtE6unMy9ZWrBbApeezwcgnM9pR",
  "key20": "5BWK14FY6rTC1Kqpq43jf1tNvuwmaq3yYUnoZmX2gwRB3wkpKcrdbxB2FHMsrvqr4TmeNBPs9kYgyCx2HMELMW5w",
  "key21": "44ke3MT4bbuHhWbDyHMa1zHFZf99sCRKEyvnnibeRCE8eyx29DjJaXxdXLWrNnRee5VYyZdYaAawHdN3m1SoUhWJ",
  "key22": "5fHR6HN4QdepP3wtWXN8oZfwyeHCaSRRPJDfazvE1AV9niLzEc3s3u4aSqrmUV5mB6DNQ2QHQFyHunTnTMdVeafi",
  "key23": "3oGFjAVb8496XGysxJSV5z65TQ8BhWk1ZRzd1N6Zr3KaVwvVQh9JNgHWc6nUGU2xcAwuSHPzUPQxnnnKqJL2qqk5",
  "key24": "4uugk1UvovBGC9zLo15b3q8YL2RUkRmpGXkmogY1SQrHZyWhxpim831NcRevUMYDgUDdNvL6FyqggKnSbcHHZUyv",
  "key25": "5vPn9aYs5uG2P9qRccjqQ9a1PuB7yuM3Dc4QL5pzoTKeTMXN5XNQvYCU4xkwNdbnyPb9AB6zsNkww6d364FkdRYD",
  "key26": "GT9S2TYMNeKC3XucZZtseBCL7gPcwscAwFyFZ2Frtc9WGwhNAJtSNcjZaJozcNwXYXNnHkPnX6eHW2eqgnvBJaN",
  "key27": "61gy21Kg55wVPpKfiZVaNYiWr8Vr3eVM78kiQLE7o7ZQKZgmaoZrYx89UiG1M9q5zNwk5CUrNCCwpgcfccah6MYa",
  "key28": "5gVikqhhEYo72cvyQ4hEhrisb8amUhMrRj9mgJbkatGNcWAuYiv1t521kNxP9MJ6hWXcrrKnD3ku3kZ86s2azvHc",
  "key29": "4qGgkT5hSsFX5iWjMoRoy1kxbjXVatYAMB4mzd2cgDh5j5x5h4TyyCcJ5tscB2s8eanDDzKcuMxRA1swkQpJXhyb",
  "key30": "635dN6zM1CbxLH7qu4eTahNiHeM9kT9ujiYXJGGMo5gqi4urgWxcCmtV91XoYrek6uD4QMhWopRcGEAaS1HEMt5i",
  "key31": "3Jsfvya7Em15PLmirax2GY7y5FBUv13FA48SaA4jL2wwk4BtNrVfdaBcnMePwRD5E65K91dE9wm4g3soDtAicQNV",
  "key32": "4a4YFnagbEmBr5krp1gph8h3FZfGiZcWmX1FGmoQV9LKTby5Eojh5hGy5kiqKzs3CmD8rSxGYkmH6b8ndymXnxHf",
  "key33": "4zfvPoFBk6szmDvh9SMfFAjxoKYDzQr43y1hybPKJVVifxntQNU8DzNro9fb1ys7vJ2tQ1EpV8g9rvU2xRiAcCi7",
  "key34": "2YGKByfejGVXDP238WZS6wSGxfsjyg95Bm9Dv7eegvs5mJYxKJUYCdwPNvr7UF8JNy5A9aVW44cAbeEbpZAjmdzG",
  "key35": "5883vknJ5y7XVbYShoQLYFDKZmLgSGivGz4LAuMLJ22DbcUFB2skSZ5tYSMpc6RpJuW2YJLWCXgSMuSKJtEda3JF",
  "key36": "5h8Z1VevLU2G8W3uTrXgTP9ZYZdncFBEQuQWfD8PrSjPGscNXbfTFLHPy3Qyg7zJKdnBiMpWqBanFH7qH5pLmEXc",
  "key37": "39zsYSggX6kVcgGLEfG6c678JhDx8n7gNNwjvAPamAZZLskoDsg1DYJcvWB9VXKjzRHzNrMRD1JnWtbzwvQSVqEL",
  "key38": "aUznrjsjFVUkv8FLmCKZz3nJ2txyM9UG1cHBBr8dzHCLK9a7nQyuG3FtFhhwFiJpAzUWxj5UsPom9GWhCbxW5JG",
  "key39": "VJWPvDEDHmMcFj1xqzJLHHJp9CGaHoKwMcs1DdXcYuooiS7kGTweJ5xWeRBrfKabqRvxNn33NxKMgZ9Q6TMRvxQ",
  "key40": "48AW71izLozZHVHrdS4YR7mvKCnQHU1wc82pn6egR1QA5EMWYCGykzeFQdGSJTSsquu7KvoN6BH2jCtcqc7sELJR",
  "key41": "eXZgCR6Asj1PUB168e7e8CWAVBCEx75ET2rvndvjA3f1cUa613nq71ZHmtsn4aqWGSG4GDQYB6HALhSAhgWPni5",
  "key42": "MXix5GPxrQDSNXPqyi9eXRB1mVt7sLpkfNCaPGQtzEojkEDe7uCyuX2xAqfYEtBkfUA3MCnxg6SGhjSbyLRqxjB",
  "key43": "4LwPT2r3xVd8iPDLdouvNSpuT1SDxFZFXeF6KxajNbhnAHCJL8jTNGyThravKPS3gw1RsxSeKr8CAoctLQ6Yt9rs",
  "key44": "2NKeLfyKYaZEyBKJBEwZzPJDN1Gaehb3pgrgaGwdcJKUapYj4sNDgBxstR3L59CvTj9Y9HjzzqJCdFeqegCN8ZGn",
  "key45": "5ov8Hcik6agdKeQgg5CdhVHdkZFvZCPqroH92ATCZbcc3gGog8CV7ZDTVd426yTrDM8pfF5fnsgcagq23CuXrW2V"
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
