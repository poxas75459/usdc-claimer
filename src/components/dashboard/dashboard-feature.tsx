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
    "4Fnv1eLyTZt6x1vWp7jDxXpjZY4MdhATMw8JmWLq2asxUxebmYXvqALvuKhkc1fNqM2wCYqdpx8PD3crMeeJPHCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C85yqZn1qLu4nBxJCPkkVyXP7kiVYRFBe81QXsGUKjU8ZZknV4FUKJe9Q3dZpFnZzhBn6tYDGSCyAoWnoDkxKBf",
  "key1": "EAVGZ5qn8sxNcquo4xoaGTD7N34DQTaxLkUiiaVDUmGdmFFEUEhkJnQfjANAxGqhoMNG5oheNZ42KkQt1moGLuq",
  "key2": "5LXYHJ3Np9n16RgqptBBThmcBBrMDTWLnkQJ1UN7p8znirkn9fHrdzSKPwAwZgNykqNUYtEaexCjXHhAZkSXHrBR",
  "key3": "4iMwXynkQw3nnpdkDsgUFFJjB5yvd3zUYzJbFfk8SxaV9hjEm51L6GoKXGNcHi88q6KMZMhVw3YTAk8zVPm3dwKW",
  "key4": "2Vve9aDJLdbX5i66mNDtBaf2sV3rstZ8oPLf92fxMqta7MHb4m8Kq7hGGmzdCmhu2QAnzEovQzomJJddz42awhgo",
  "key5": "25zwUgz8pPePSTnQCckwYS9FFvLFSoLHxk7wQC7ConLZHpsZnUVvJNotAHqnwPxDLD2ygcPdGUBwdoGgozRXW4xg",
  "key6": "5D3bCyyXGjv2wmQ5BT6BRrgUpcf2WPdub4DQ9TgdNadnzHrBvWo654DrLo9RCzdixpj418LRuGroZYyRtNckqdCF",
  "key7": "4M2EuxmGzkVdxdb32hCBhkVCrvkidWbBTVszPf3oY1Nsqh5474Gyvg1tUJsmXsyTP255SX3tuY433tQHtirvYYv5",
  "key8": "2JzR7MpgQcmE7JhZj69uaBYSGfvLCwJnExa1jdZP5iyq8ot2ARgNGQt3TxJ8r9yo6uvE9JqoGzkJ5dRaENdVFMWT",
  "key9": "2J3LuhftPkzTmEKAdNbQ52mUbiXzoUqio1tRK1Jy91QUHbdbdMQJvbtWqfVk68UxLvy9KK35yeUtx7AUmMHggRKG",
  "key10": "49X6kssGT4Pwygeh7sqQmtJc71Yyv8dcs5Ue79eFik2xGU3SUFo1J4ATwKVxU3j82FAGBRAjQLfxkSHpiqExQQT3",
  "key11": "2K2qWfvNKepFEcatP2qyDjZfQ2rGn93WTy5S6B8AgumZHcfE8ruNGejHmVZ13epSYfU3e5X56ybfPm961NqHvxDh",
  "key12": "2XiTHNuCohbQHTumHyvw7ZvN7jBDzP6k5KuPjt92X42TH1FYXjrFtP54ad3KWixin3QezoDiCDcFJDjY5mP7uZ7X",
  "key13": "32E8t3sA5aB8Ljb4LYkquwqU9pcFoSrEY3kGrnH91AH3NxgWmw6qnK37tqcq7nYdzo2PMiYBxzJ5rw2MereHhWmm",
  "key14": "4xNfJF4HTmhxEhua5Yji5oNg1NRJvqtXSa7bP648SNoNrtLJL1cXcssepqtxJooRebG6D1dB3KhpUthpRg6quoZx",
  "key15": "3PFfXoFGb2v8RoLwZ5mP4dbnFfFj17YKJjjMuaefZHtAK3cnKALvYWGNKxWme2ztMi3Ydye3gfJVsrAyyL6C1Jn4",
  "key16": "5vWUEemUSr3DCRPt7vYDezq9X3JchPUKgrLeQcS6CjZPwAVQGpZqDvPLzow1q33oEqVifb5n4uHBqWFjBpiFctVv",
  "key17": "4DNySMSpQ9Ln9s6bFo3AezQqGWk7Gd1TBQcenv4UABmQMf4MywfES1L3GV3jidXWQnAYUXZhV7XSEs1UZNriT69Y",
  "key18": "3HyK52BXA5M3dvFyt9xvMnYn6iQYHsDKAxY5rFMCnvjtxkc2CHbwxno67u42EwuQcX6oYvU4G9P3c9vScQCNy99D",
  "key19": "3PTcMGjEYUdHwagkNNEAvfMxb3i8rBFiVM5VSZ7pndArS8akmqfJToFxXACViQEmtsqVqkdCaARkGn72sHDZdyTs",
  "key20": "4XQdkt8PNC85D6tLUcFmzqvFZ7gbKv9tn6huAvB9nYk4UK9qSkH4LeDHFagAuL8VWQaP1ZbMCbAFXWgHRBh1Y5hN",
  "key21": "3vs8vWzSYYjLEzgDGr5MgXVhPKywtf43q25KKGNvHhc94w9pBF1V8FFNvUQMzXNAAyKkhXSeevqJ6ti49wxfepru",
  "key22": "4L3JsyCCi3LvqomXK8PXZrF2PExruGxiZS8pdtXaTdTeeQNwoGtd13XxN2acegsiUMVVywaHrbMRKLhHd87a48GC",
  "key23": "wgx3rSRUHUAHgR1zPow1PoGCw7HBiojw9vMUVNKx7CnW281sKBQkqCdWGkjYKNj9zRaY8Q1DfbaMaXYfr9Y4uya",
  "key24": "2PzzVhH8TbKzTT9Rb6GgMuXShep846442NDpuUyRGP5RDh7Zw2gFouRyTeJGwFAN7eQvCMcGvc2ArDqFrB5oJKhW",
  "key25": "52JH5mEHbf7kJ2setyqLxM9QhrbThYgk2P7Wi2i98rAKNG5WJtJ7PFUtLkGLf7oja4wrPUnxbuTYAmgRR2NqC8Mu",
  "key26": "5V44yX4jFeTpa14pUspkBaQyGx9pjnTYPHVm5HNjprSz7FVjZcEMpeEnGCotnQayVg4VTEMkaHcEQJbKYDTRmn8a",
  "key27": "3XfqWdMP1zhz2B1mK1p4NiUJ4GtkzrDdt3qfbriTtNG3yRyZdpXLDFbFjDAGWUekSH1z3MsEq1R7onjvAh5QZXAT",
  "key28": "5Bcu5XVFKJZjBqULjKqXzY6rP274uSzkFfZgk4izFWSdGSu4UAUAHxUK4j6CLqeMUmq4iV3N5bdz7KqBUBJUY4Bd",
  "key29": "5r2g7DkUJFZ4TxBMoPf5yj9BBEwzmk6aXCxsZgjHfwUjsYsvesMB4KjwSzgQaHo1vdnVqaEXm5CWSabz6FhdoMnt",
  "key30": "59Y6PPa7HnZGpzyFGwNyhX4L7omqMgt1c9PHV3xAtD6CE9kNxECAFuaJvcVR7HsLVMKctp2Mf4q5BUeMqKLoeuPr",
  "key31": "5bak9J7k6jFqNfzwTiuRqBLfqVvyepnYiGPZQbyAXAqCf9EEgZKLQ6aDL6kWk9rPTmnC3Kry62gqGNuHPoCUTfn1",
  "key32": "2njXt62vPkEgFMKmzfvup9d5P9WjzEmYxqH7kM6eMavttAiAU5nmvutrUsqWFJg9VknknPSwdkJ234ig8NCNtaA2",
  "key33": "5FFnHUT8eb5MaDH61XxTtXpYf5rCwN221QD1LYoDCj3eZGt2jjNBwG2gtw6iHeLE5PLdwK57EgVDyZL29WrXowgn",
  "key34": "iHMzSJ35XiqKuPSEqZjZPz3MAKRpMTQuJLa9bSXySJRz6qhYQaTxHP88QqfEzKjcVdYcs3UFEky4AditwuY9Lk4",
  "key35": "433WJTFpW6qEVakQ6ZqXBLj9FEtPqkBzSa5f74atKJ1PR1gY8nWuCsXh7q6rxk2rnkKDnQdbpPwxssX8FTJQ3rh9",
  "key36": "5SWTYFbf7NWGkVi8FeMATmAEhShA8gGA7GFxGVEaLFpBmhPrmh3CDpA36UeW2Nq8UtaFsKb2yLyABBVyP3TthEtF",
  "key37": "28UvANhqsxnPisKGJ1sQXxXz2eQPB5NbersnGUH2Ca8rEvV8gsKAmvZCAEN5rMTSecC5aAepCw7ekGYfhaS2621N",
  "key38": "rjSLe8BEYAX2MiN63H7zzq159frp2i2hfY4J8AChfaE1uiGY1bJWhbVg6srRt7BHwSQcUVC2UpXScpvTt1nfmaG",
  "key39": "2rWL7vGPaJrktRXYzDmS2Ro5z9JgqnzdzkGeWpRmYws3CPPS4wZhddC3gsoyBhBnEQbiic8yPpjdQM4BzbCUrciE",
  "key40": "5K85t892n8y4EgN2nbWHNm9nJbKreXWG8kDhNVthfYWofu71zw5Qfdwh4zoJBMtJkgeyPfeYPZnNSHzVqGrE2TDz",
  "key41": "5zcxDymx4vXxFE7vnzXy229VHDFE2ZBGXDLGBK64auxpDBn46Y3aebXn8QgFmrkQuRz1j7ciKMhUrbsj4paSJuNj",
  "key42": "3wbDU8Un178p3TUy316ummsh6PuX8Hnkoh8zkA4tQE4eAd3eH17BDvome6WHyYrDFmJZVxSUURqkx2vv91HGy3Qu",
  "key43": "5JQvU5jpg4Y3dLD2HJGsKytY8kyxeVv5k81o9x8cHVejWDF8SH1QqUW4kZvQeBDPkiGEBCEzLNhTuPb6DSf8U9Mt",
  "key44": "2uaAwdiuQeuUfPfgjgomyCy2AjjXRpVik8cENthCUAiZNX24XmZocwXc5Zx1o4XSw4crsSNbx5WTWEsS8mvKqMHB",
  "key45": "4n3QJFwmEPk8n4vekHkxWXX7eF7cstbLtoFqdc329Uha5xsk3KmheQgAoQk2NFz52j4dNZ2c7aonsoqrdgaYpDgQ",
  "key46": "Bgq7JtzZMsxrG7Zzhcndgz1dydbYoReXXLCeyToPoruX8xwmsJvPh9seKq9dkvNZELiwJYmVonnVho3EtCfwMPS",
  "key47": "2xXwXBgNMkeTKV3mCSFufg2AuFS9N2Wdd5fziqKHXzMjgorqKTj1zQczStcrXWKt4Qy5CSDVFy5q2EuntZ9zXhhR"
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
