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
    "3C3Bp8RgqFvjAmhwf1CWQeLjhWYBDB7Vguw7PoAbnusweGx6JWWs4CVZvpS339tAcdkPPv6ACHeFqV3fVC7hhN3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38YqxJwWpD7YLz1y7ncEXr5sQnBGeZyfkjvu5orHNjUDJe8N29SSd6TjvP5XKxhxAG56Bc8dvL8jr3WCSFqUwwCQ",
  "key1": "vuoPQuR5Bsjbu42NWFwCpjvHkyW1ha4gevLeWTNwxCnCNzMaAkyN5RURS6mwd5dz8VWs1RuYjtXA6r9MX2bmpjS",
  "key2": "4uvCTMrKgs4k8REJL52kSrpnBWGKWCSqo7tnF57ga2URBbL6yzCenySZSZT1heDGb2UkMbTHjVxL8RTWDNJkmWUz",
  "key3": "3HTAgmrTsfftPGftCxwTiB6nbYcnJwcndc8kDTVY6N97Swywr2Adb2wkfwX1CxHXNgaCJvYoFdCb4pAosCYnjdYx",
  "key4": "3bJLVL7W4Gh6FksSQkVcR8AiwqG7gVASCEuJ1SpknjGcgLXaBDUxXVKwsy9CjpgpKrT5Kr2G8zQsfCR8a6P253ex",
  "key5": "4bf1ske1DSb8TerTeme4kUv7desGd2W527oapyKzM1zEN3VbDgT2zHLH75Q785T5AGcqY3DzQJFHn6ZJSaapvk2g",
  "key6": "YBWMVeZ8ATjpGFkMtpeCQDK8GUsJ3Vig1VfPYCtxrW9ZXR5rfqrFeVbAVE9cT3VQNnCCsy8bzbdtVFj3vFYgSNX",
  "key7": "5vUYHY6PE4SzdNRWsQaUqP2P9HMbDT1kMbnxoZZrNNLHEDJzwzXB2bp4m4WxPRNPKqNry3RrEwoTJoUbCNF2ghTX",
  "key8": "4fM9kBb7PJivcT49Xosxm4vGuPivB6TkR6HwdKqcZEPdMKHij2mHh1bvod1MQi7siZWhVMVGJNBs1YzdaW2EsFG5",
  "key9": "5xZtir37tJpncNEe18cnF8LZWwhELCj5ZYHz6jDsgA1nd6MC6WYzNiJvhNkzMMWf2jEhyKMtZQ7YTEuk8HTzsUmY",
  "key10": "2oti885kWwzb3AxSmppk19Ph3S8QAG52Jddpgiw4sHe8nq3ZB3hF2RxURUPBbSyi4ZpxBPw7MXKntXGB35KpStcN",
  "key11": "33mUAkYAB1h5Hws86jF549hybPSrEmh6fopqDVQqG6ewo2CB2Zz8hLPrmanSUup4ME53z9HQdZac1a7dNfk8BBuH",
  "key12": "3axh1BtZzotZAqR2K7nzwwYZCUaqDKcj6xJGpsEabDsRtPS7h5c1WX3YXfqtavkMxyT3oLiQdimCEeKZt4TX5UBU",
  "key13": "3D9U93xzZopCk7VqdoA4NCheaVmkpgLUwjtGrknax1Y8a3fn7c8EXm73ZKhELXTv8xq3h5AYKqdAoJzPrvEEHgPt",
  "key14": "RQ1ek9VBS5MUPn24htuBpLHsxVMgMZipskHV1541upc1poJLWTQ2SrsUdcieeyTVo2cB66aYtMv9gjsAFaCPE1y",
  "key15": "5fi4Rzo9fWexCBAJne189iq8STEAQhm9PLjPqHkJ2kFn7s3xnnBgBEXz1Sqtu67tgWUHWHJFBLANxgzMjFH4zwKZ",
  "key16": "4Gm4QKvs5TX9HExpy6phW9mNko2k37VCW1kka5rQpUt4PyDgfsxs5xcTyxJbuLiHbcgJxshr5UyCcYsbfYM653pF",
  "key17": "3RDJqvJHhuThiZNXiPXrzQeCg8rmUzD3YbhhHaaAsV7dwsKYjYpxius7frDYyfLVg6nsXzSEUtqsJMJUqwn9qy2d",
  "key18": "4LScyLoo9GXwizF88kRguP9QXvycdP3pPWWEwtZqzwv4ADJdqTTnV3jKJbLfpzosuZEvNJCZ7zVWBtUGduAPaAVC",
  "key19": "64ygjGxuHyaECZSbnKARAnhFBWkzGbVJHtCgWyD8ZdYF6R2NKLtnPNiXegsbN7w4ov75emG5taNMLVPoFFH7tvHf",
  "key20": "QSZjHmyHMSjArpqfU7BiVnLQq9pMGZvntE7adxTdzKqWLVqGz45Ma8FT2SGzfr2PEH8vXhQCjFedxAMKmCJhHAE",
  "key21": "2ws6V2QSqK3bRkvx6PDtatrSKHTfVthBvPb1V8HVm5WpALitYEQYSXt173cHmJNZLPk2fpdBMj5B3fyNX93ZoQZS",
  "key22": "46HTdvAUvUvu1PGqRdgNfCmFsF4XR9oGvr3kSrtm1GYycKadkzYZireAUdRwG2SDRwkSYUGkYJ9qopbhhbBy33rJ",
  "key23": "gFeEJBg9MHew2UE8bPGEDZH56TyZxDvGn72iYqqykrKGrhuf9qbqhjb5NfLDm7Jto8YrxGg2pkrsGnXFR3DqwER",
  "key24": "3g4YFj9FizKHEnr6FiTfvyuDjr5XqSMFNb6BpggUXC7P2eX8Lykym8u9Cc6uP5SdQjPkdiUuMoR9qtshNgX2xMCd",
  "key25": "3homMeeSyiibDr4P5bBcXZwq6eVgcmZUVk6DJ6uPdnthCmEW3bAWmBxL9nLaV5EkDuSNcHzZgM7k2hmC6V3oUjMo",
  "key26": "37Y7gaTKvgWLEYZ1uhbzsAyR7TEhxztB6gejoK96Gfi12EBuMdviNCgobK633EHSKvWq2EGAy6ksfYDBoVCXPn3g",
  "key27": "3n5zCWd4xWLmS61GXCGh1p2Z3aWwfH5FzeufYfUttLcqiGYx1VY3GQCEw3sJsVkNhSxpyjJw4y7SvD8moFhBhT94",
  "key28": "3R6bbykqX6HXQ4ej4zMzHNfy7h2rZNE9BgG9LEuZ133fYtXR3u9FDEjeURHcYNWuf3kt4w3Rx6tt1We3JE31LDkK",
  "key29": "2V9uS2ZhNxo9z3z5xLhJFCngv1YYAAuRkQ3EL2nNCEmv62QYojMNYtxo7DWq6ixBrcnvgVymryyYkoBS3UQEwhgi",
  "key30": "3xm32wcsZCLoUsUr67CmsKvjQ1dcMeTND7i3hqSHqw7hsv7dCgn5bjXHXkWKiFnf1ZnykUcGBTcQkCoDzaW9LdV9",
  "key31": "3tbyrwn2ii9R7cfc7CusvK5djHKtLoNVEbEgoHeeujyGE2bSqibnwKmM2JVLaDgthDhqHz41hM8ggYT6Dm3YTFup",
  "key32": "3grmTJmuEUxp8cLu9feNawfAV6WqUusVmCoZgZVDEGNa57VeY1BhPXLa6maFdJ6ryoE4iMwVQELFnbgTAGdpR6yD",
  "key33": "46CSU1MY7w8sCCqAhYBBT3vXE6DMfjxCaHU6qvv2tXyYgPhgspBNZJpkcUWv9brEQLBXWy1gfUSCa2QHavWHtcKv",
  "key34": "4eJJrgDcYP8R9uWaUg7LdwKffCArnSJTiHkRE5b65SeMZyWaMwuTGrPQJeMyj7T3LrN244cko6P4yjz9di7AUXoE",
  "key35": "52mJdufEtGBbgJw7zvCAoNw6R5UxVK2GxXb7H8VuSCwxLRjGmduxJ8rSyB5VKEwCvGnS7Nh6SxF1UydUj9CdCF4g",
  "key36": "F1XyY1PnvtiY3W8ETod7YyaP5qnRFmnxNuV68nbc9wAZLXBycyqRDdUVdyZaSgb8BBs7J4ADmQZwHPvToCkV8ip",
  "key37": "3C2ZLPURHaz9gdieDFFBJSu7CeQfKZhny9zRGfmUPFU12VKVafb9TazDL14mKUwfgshz2JP7BzCaU1kARDZSziQ6",
  "key38": "4xLjknN4WC4wnkaApsqykrTPp6dLe7JNjvpDwiBKct9yFZU1cacifdjsu3WDVFVxveJDVZi8GkHSidcursD4nSZw",
  "key39": "4dRbDT5SKHnSE6vJzVY8hv12Zdn7ZtbGwuhtEYXuWHyAyUnFfjqAWn1XogSCLskx1gDHQnhtFquLYEi8U9qm2RKF",
  "key40": "2iK9DRiesMa7yK1uaUQnx4hZ1LqqNQfPZ7wUaBsLFLLq3Mqi2Stq5VQe9APifuVzenZdyhsHcV5hGpot2xUBs8JL",
  "key41": "rArx9DFNZ1QeQYVdviRC24QmkAwQMstiMTEBD9gPmrnjVx3PLZJTnp22cUQdj1M1TjDFuM5e78K6ZhFZWWXkbmd",
  "key42": "2qfkXQcUmWRKEPkUpjZAFvGNzD9EbgtKTvZT2q5Raq61tbvKAZAR2NG2dSHU2aJ6hRe8p5TMg2UsoX9w6SDAeDrv",
  "key43": "MPdg3AksRdpvTivJcqQf756MoVbnir5uiyXpEnQcb3JcHxoUV48eiADi689RMm3ocGqv1PHVKVayo2ZsL8pWP7j",
  "key44": "4t7FLmHk86UjHktqvcZge2t4TxhhURKfY3pLKLERqDg3Ntuzh6WE3oiEHCNzjwJbqEDdeeuZhPpeEimeWpH7PsC",
  "key45": "3fzSxMu6gP9z5ZypsXTJyCUFhuRdeGh1bMZ5GHR5PFM4ZnnXSRzpYDWgWyBcpVQug8kquAjetaNQQ3qYfEtLinsG",
  "key46": "5K9uKeWnxWRWBTmyZFsCNCd9ED8yMyU6USEn5c7UNFZxmwPwApwLqh5wivc6VmXq5G4KeQDM6cvxDyoQU4GGAa1Y",
  "key47": "5MyNRnKUTv3noXXmiNeJMJxfB7LCmvu58zq2iEXBmmeH7DEQ9DsxmScKvcp5YYrPjWdyyEwV3DmcV9kgn7Xz1pi5"
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
