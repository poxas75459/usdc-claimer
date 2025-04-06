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
    "4DqXe2QKB24YwFqbF1fnkRQpWW1KkxszWbXv13bJrRBjGRXfzchvDpreSqmYTyzqgcZUbjxHKMYf1uRkFuzAj5Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yx5P5LrWb14oJFJKrmbnmogHGTxg6JnNN3rANzDFwYaLmYs5BoXq73sxu2V84FuKXiWZUSkRQpixaVjJBiSpEQd",
  "key1": "2zQHy4mXzpUSTeXmMWzoHX8xvfKN1g3MHfZS6Qa2dQh7GpE7uE5U1EGgeiB7SDcuGR9g2qgkKhZ2jQeGexcKDrf4",
  "key2": "4AVe6EfXgQCtPJCqosFedtDPtrxqJ1uC7qhJA5nMQ1w9yqBXMY4uXNyeEvUaUWoTJfwmc65JsVJQbQGnF1SiJiZn",
  "key3": "4W7zuHqXZNenCzvz1WP8Cdj3R7YZBpVZNrV1HsoFhvfx5ynuubpKdhvWnZj7auV6beometXGKDLPba9eprAXg8VF",
  "key4": "2zg5vChYsG8nh5nNknMV89ost1EJFb1bn9PLMdTnTP2jngH5qXAai8mUMJfA2vbNqJjY2rz7CAv6p9zCoDDPW92d",
  "key5": "5dcuevB4Znim3ry8PkbWWne59Q2zYJytHSEY5ytMs3q15tn27xcn6WBPMWrd2PC4sWmVckae5DzVbqJdrXbjFpdX",
  "key6": "4g7P9AZeTdFhng6eT4UrZXYLJR9hW6PjF9nTeNZsi48juna1GEU7rFjTSPVZS6SbsT45LRvuyNvU7ffDheduadbq",
  "key7": "62jSKvNEpNkWAawVn6NpU9hmxFa7XvVkZzDD9wgVfb8fEFzJjhH1hRNZgVMe9dJvb8DGW9hmykbnaCYujKwgrwdi",
  "key8": "4yJa4NvixJn1zwnFL4wWEe6r44a6foQCQ6yqHpwLqo9eoXhpHU2sqkSpdvrYr3ciTCiRHQNHxiFTiyZ7Jp76xX9s",
  "key9": "4Qgo7hpkzyYisBj7EKCb7PE69ZVn7eF3Skc1dr2dHwBe8Nwg9awf45cZgUAXRp9sEdFb1Pf9QL5nS8Hsuhn3GNhX",
  "key10": "5ARbj774yMNDML9UiaznqnFxpgbSYgC63UnsPWqvJc6p7agtVFHQERhS794rEfuvUv4tUqVbwhK2Dbrp2vybnAaA",
  "key11": "5UxexqW52UJCoT2t5ZWxKPqh1ZBaiP9GS57WsttY22j9vptoAu845gf9A97NLy8CmoKtJqhH6qqmJJVk3A4Hqfo",
  "key12": "4UQTuTYVdQjrFu7SF6PwfWjcdfYQK4UyVp3LHgrai9gi2m1xiMS6fmBZ9XtsFcYctS1Rp6ZbSSw3ixHbjTqnCz5g",
  "key13": "2yzKjubQtkFgUy21yo9DvnAQg3pkanYCT1mbL3Tr7VVqJhEDt8LUprwf2iV7117uemgP6xyTe9pLfceUz1HcdDCG",
  "key14": "2MCBFxm2vB6Pp1mXft4YY62BzBJTESB9HMr3LGKvWutFYTjS5YoHpXimxYWVGsnpKiqYa9MH57wTffm76oThJE8u",
  "key15": "4Pucb1DRZftWSP7rdmBcsgdZLAobJ1NGSbj6icsaZxexHUZYqh6JtTRyGgzhM49Wgb4iNdehVjaHD6F74mBYANF6",
  "key16": "48AVvZ7odRbLJpmureYz5UV84wXR4yCAj1tkdGJ94y7wgpP718hHvGQrrerzMHwNoBo2xEa5pAXRbTBFYeBBtvZd",
  "key17": "5q9X4PM1dq8rB32gzSFEBm2cf3hP3k1Fe6oEw2bP5K9ZV8ETguFXDjaxEqL7udtENEaXNUMfBvBK6UpXoiEpgw8Y",
  "key18": "5pUVqV4yjRb9tSU6ut1p1WyYqThH1Hcw3SGuRZCUGKguCiU8zmKfdeAvDC9vssFWyM4ppXsVVKzwWEGpi141UpD9",
  "key19": "5wS5p4imrsbP59RE35psqDFXZ61CBHw5XTeEodwyN1EFzqQgd2uJwhQDNrkh9WmKwxvZb15YWgxDUbTefuQ3VXco",
  "key20": "4u17SDSu2LkDcg5Cj9bRBJPeaf1LwfUbWVsQZC4oeaV7aTw7YnaRPguHHjKPEqLhi9agbzKPfeQB5iMoSm7QQcoJ",
  "key21": "3qSZKFpz8WjZGsoqaE9TzEJsfmPf7MJR7JJ6xY298oFU7nshvg3pfJfKxTmDdzDD5v7D64TeWmRpo4icemxNguFJ",
  "key22": "89ZzxsHqLT6EBuWHwwzwyviiYyhypmFmwzZwumUSQZ6djuEWV4G2wmR9Ar1MR9VDwz91f37LB5MqSF2nmfwwzQn",
  "key23": "2HQbZLMGyMN49jcnrriC3Ljrfhm4oA52VWgivLoGThz2eo6VN4EdbZ5Uv44z4RgbMWhtJz8V8HavsmFtUiUViBND",
  "key24": "qkZKJqCHRJzDFa4gd5b3BA3TCwQyTBDvP6aJRBaPjRvBE3PTAPnkUd7hkpsARCg7xsecbJHCP8LVSWQTKkXTn8Z",
  "key25": "5mUDoJpY1L79edQ89kfjQZd75u8Zw53Ldq7XiKwtxRSGFdTPatZCQPY4qqSvVXUKcGNHEXet3t9Jx3bHLpi9JS8G",
  "key26": "3E8q4PsJpCnLujmxndPGiKpFmSFJD67uzV8wMGff2QoEeLHZkeUQmRisNqJYx4Qs4ivMnNWotCE4PW2ncoWCJFaP",
  "key27": "429kyPG9TEZRyVCRqBHowm3dUxWDBbu9djnkLDgNxLjhJQbYaKwUEbtsqSM6Z2s1LLseuWMtojtBJT15K7M1BrMA",
  "key28": "3xDGZzQ77hTuvfF7rJFPQkH766Pq8z2xG6CGh7Z7LvAm3V3Tcr5RyQshfQVobzzSKopgb3NGYYczx3u2FRQ2jDNj",
  "key29": "5YRP6Ew3Mtg9EZv4AiumHDBjnpQXrHChtBm6AJEcJd5ANKwHSwmADePM1aNJR4Z3FUQZ53LgZQjBnhY8J875n4Up",
  "key30": "FbUAHRMhogaGbedUYpqW6HPHJSMSEEpYstgDWt17XtEvqruW2gcK31PFfGAB8PEn1zz3Jgim1R6JqGQfCAkj7We",
  "key31": "ymYxDLamMmeajzbSiFNAE5bcLLr1d1H1LwQ3ocoRVY43nw4ZHDJrdv1t2mFfrdHFoqE7hdTiwEDs8ERe9ADkYDJ",
  "key32": "kr6Zst77gP5BRH9PCgJKSBgyPJcsbPS4P7i9zLvCCmqfo6yg32916GwVyVcrvBJUULyLUazDaCzL4NThS1R6nTj",
  "key33": "33XmwvbnGf3p173TKveVN7PsERbfSKj6qep1gLMUHGkDsudknvzCGp89NW8sMfj3xJfQx7VdJeKuAtyP8iphWv4e",
  "key34": "Hnzh6LiwPrygGhnr9568CEe5JNtVp6kzpRuDvhh67rb3CaoK7No7fw5XjTL9NjnC4FsbLLgD8vzV1ys9dXLoVFL",
  "key35": "5ekvCCXWtbxuZEnGmnHJrWZQ8Xboe1Tq2UM78Mzr9F5h5XgjNagmiFR1HTkzgnkBpJ1kiTf2uFWoawpBSpzZh5N4",
  "key36": "35kn1ysUikc43M5AWKo6kn8FiVvnn2FRPLEMNXDdmN2aVJKqfAAGqEJ2RXk5aNtiDbTUtF5jJYueX9rUSLEB1irk",
  "key37": "2u1H99pGgQd75K28CNAoNNKQf9UCPvLmv9jxUzPGTDSbuMKocrDkqyHLtxauZnC9X9yWk8t2EP3bsT3Yi6gMTFZ7",
  "key38": "2oXeBo3HvS5QTLaYg8N7GXNmFKPHBrcNGRazMArpug6aF4miM7TDWvPg5ftycpg1nHyRdGWGnBe6zRauwDBfzehQ",
  "key39": "5f75VgucUVeQQ4ftP8a6t7NBj5X9teAewmaRUHtuCMBN7GjGQDiSb4Pm2m8LPMvb5bZno33YQW7fopRLKbESUGHm",
  "key40": "4HsxfjKxjyixqhzDVjzhixhzBJMB9PGrxm5vSzSSVWtKR228kGafhGMR3GKE3JpnrcaN5R4HiFjkneixn3L8NfQ",
  "key41": "5Xi8uwJESvs16hU8kj4BAxa2RJtjWwf9Pn2Mkpjjk82JNpv5xCeh8sEyDsBC325FnNDPFyM747GRaT3VqKNX3TQy",
  "key42": "ZLkF3SbLvWYSykkxrjiwCPRxexgoEVSiZbibgWWdmCGUmyNhvBFnGwDqXerQQSwFcH77YQXsUea54Q99kJ4t22K",
  "key43": "gDQGTLjVeq3f4orWoC4YC2SbEF4y6izLGdgmmoJMoExjvPkLiU9mtSgwEpbXLPKxGbss4WbCQVPEgdAZxSV76iJ",
  "key44": "4M326tEdGsEkDuVtzrhTaph6to7JFrsTMxjFZKWpQD8bm923WrgwizgALXv9QXbXJyLPDZNQbUfbVHAq2RuKRHsX",
  "key45": "5ucH4VMtbYPZoXeNErtC9CNs2YheiEKGzKGf99Up6pMF4vt1cbiXAqpcUhL25aqhSGt4AeLBV5RHYsSkT14ECkm2",
  "key46": "5TPnzCNJ8dmvVM9tR8VdnneysrBTzh5QQwZ3vMFZaSZedCVikxUQzUzzSKyWh3yrJ7XjzypNh47abqHWZu827DkQ",
  "key47": "bfjd3j5xBGPYod54pwkCrHqDQtPjLoYwh6bwvCKhA27LAh71yS3B3Z6fYF1s5c2KPh4qChTjQzzDH4UEi1qiaz8",
  "key48": "4e7jT1iNu7wN3XVVMfv1JJtxVohRWPSgRoh7wqxz2EVRJMXbSuG7K7NEdWV6cC8KJrY2ok1ShMSRoJpFqQs1gdZv",
  "key49": "3pspDCEM8QswJZPZbisuiahXoCgTmx39CkCi7WgA8AFKZkg4rMFTuBEkPGS8hCRydpjnqcn8xpdzYgrSSyyoroyt"
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
