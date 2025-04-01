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
    "5TeL4rkctnzkC1joitHQKG1ZHULvteHZfKJsPhFsv1Z3j4LQU1nku2ZH24Joaz5vnzXf4zeACG9MsSKvTsRoEZeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QfMr2QmVVthjUhQbtMaUAHqTC7zBAqRMdEwnLDPKxKjv1Agz6k21dswikY3z2VneYzctF3GNTqs4ya9JGT3MEM1",
  "key1": "2AtkjZBtjYZuYvN41mZCmWoJajGYqmSG3C673vm9yvpvTjK4E6d2NN1wuxPid4Ruqc7bzrEnfFphPBTVTfUjHFRW",
  "key2": "4jGPmzmUyoA25yW4BsPPnK2xvk4GWn6quFDenmN63QPHkM2XzbrMB1MBhsiSQufnJaWiZwKx2kkqBjBC2jUgh6mH",
  "key3": "2ofQd4GnTzXTTjZZnE1zgc3AdrbKUy145ZM5dHB4diDLMfQs2ogZEJswU5z3AygiCcGrwUhKMkZtuAUkoHBmB4sn",
  "key4": "tkrCZWegvjbf6nkSw31am8vkNMpxwhqcuNjFFUfLj6YNNjyiwYvCydTVisDPxYKEbHYmyz59MWyteYcMQqBYj3n",
  "key5": "399X3ERwzsN3e6FhJbUNFKHSwQ5vzSkua3jLVxXMrUrWoZwwYvY7T4MAYY8xD6vhfYznmFWVRYXYSW9fGBmbu5Gt",
  "key6": "3wr9ghw7GcEDB2u6EMuEJQc71YFCfSwyfjGpR91RiuKDmngLVpymtaBzELuKjHumo3qTejHX5DNfqivtFi5CP9TB",
  "key7": "2eum88dKQ5HGDFmozMhM1QmsApM1b2X6NXtJQpmhAuqJdYqAy18g1N7onVczsf42JK5TigoRrNaKZKsPCuBnsHEN",
  "key8": "34HuPoX9Jt33xN6onLKTAkediS9mqFShtLZyTByhq2PY5v4UL7oK6UMsYQtou7JY69JYCzcc4zWUDKQgA667C6wM",
  "key9": "3z4y2ugZuNJwar8FjwcZXDornGmQU3hzTpv4tR6MvzLUiXXmKZk8swLmdeTqyKvvVhAHSHehb7GgU4Eh3VdP9xqB",
  "key10": "64ngxpxZ2CsufzNAuCJRkTPatPWXie2BU8HN7YKWGgQXNNgco6tdzeS2tYBADLVBq7P1PTtDHuPwcC1QUWZH2RiH",
  "key11": "5CHjoJ4Wfhb13Bu699B36gSzZCoQR7jf8ke5c1kmZgKoZGVPZfsaqvaWphs2c1YLBwTJD1eZ2hJVoFYdVpfQKsA3",
  "key12": "2qguD6ap7cwHzdt5CfCiZpu7GANg9xsiHTLmFK1CDxCn7Uh1YStxBmvELoBSX9UkkWc5QoARPDDaAw5BrQnXUxed",
  "key13": "5jGp9GGkfpvpbvGmnY6SCy78ZSBc9oyqtGmAqzkkWMgzQ2SHd2qgqfSSyxUj444J7KbyzRkxyeZuU3DmDUUC6gG1",
  "key14": "62dr9QVg22smt7LE5WXwFfePXxnVnboQNg3ou7HHEEdeGWk6Fx7mzuLxE6Gp43z8kaMey4heojQEWx47H7g6JMaY",
  "key15": "3Dsj8voXjEHw4zgjTYtHnr3tFP4JtYnNG2HjVymPQP3HyTQCAvQhZ3SRLZvjwqLJhEwovrMMerJLLwomdZSPyc7A",
  "key16": "4FetiyU372BHtbwNUjK54JWkbu2ys1DmSwdB7vRpTmR3KzKjkGZtM7JQHh2FpDiwvEnKkhCzhDMbYLjJXkL18Vb",
  "key17": "5MsBzMx7qPFNyvF6992Kao7gBvrDWqC8WEHgrHP8Yth6syNcFXTy4gYPgX2qVzUNPmH7nCSxW2r5uVxFbMWiZpWu",
  "key18": "5poEiaVxV2w2t3T6gvbamMJzwgARQKVwaScg21Bknt9LUezoJzAcyneCBazSx6jsaQLDGd8MKBxEev4FGE8vpujx",
  "key19": "4uqc53ZwSMTD82oNUeGMwQWxbZkMnPdjBDBPgWDWshSFoAcfBzNdreqGVfmXs58irYq3oBkQMtijxTs58nUX1oHq",
  "key20": "5Pmf1Rdnjq6qcUXa7M22UBgPSD6KNKaMjy6X4p2UYPcxzKeGPVvD7C7QWn9MX4Fu6yusnHohh7osTmDugBXpdiHQ",
  "key21": "4PAM4T4fHCdBpV4B4Q1qvxT9tnGwvnKJdFvBgNCWreYpsSy2icuvBUBu9K2nxhvGnQhT2s1M3vVVi9k8UBmibXvi",
  "key22": "2u1pryZSoRBfTPupRCUsuAZh9Zz4V3LcUS5ygaKnuTqaJv2A7s7QbmrHpusmmUnoxBXZJnF5XNCtmNsMrMY6DsTM",
  "key23": "9MtrV9yqt7yJu4HYNUpSi1UNja61GCN4E9hrMThqWBa53NnSQq8nMrcvTnXU5CjMHVLpGNYuaqd5pR8ioPBeWLc",
  "key24": "3uzc9rFuq22mYA6ATDJPVzyJxzgU2ZJDQQpzWYjaoK7AFJgenkL8AUyVEQA6y5GhkC9J7imZ6cWYPju3pWJuDiun",
  "key25": "5tzvUvKeir674rfbBHqWRT4WVM6HMdxeGaaCM8LGgivFGBHjZEycCNtW5m9kGXfUacHRjp2SvJeBvuz8gP1y25FL",
  "key26": "213XCojGCLQYntqNkY6gE4ARbk9XAcgvTzozS5KTgbRkqDsDqtwHgBz34wMesDndDeogY77XRxUz9J4uvxp8C5vK",
  "key27": "3Ng3jdYhJ8VgQ13MV4Hu8xkhxte5ZAfRx8USZxqGfxtDp1hPJazkyZnKZC3h2W4uWas5aCPKKBsd5ghahucHtfkm",
  "key28": "5WDgsUPsTRRiymTXXFQ6mJiMqDRkvNby9JF7MDa8XpohQVcpDrjwPFwuQvCoTvBsMA9pTDq5EsF1Aja45M2duGJP",
  "key29": "rMbDmfeaLGBRiyHngnmQmLui9vWmiN64Q3N4DwSMp1A4dideKk3xTNU4FTcPQivyAmJqoUFyc6KipC1EayZC8re",
  "key30": "5C4iSgKdzZcinnUWq2wuhtEx6YghXyCFkQchUy4CrUs51YJMu4KZ1Xc811fGVY9yM9HecZUvtibzSgXYwXg9JoE",
  "key31": "pTb283hG8XkMaLq3QoCWb2EU7Vr6TbbaYxjYwyzf5k1V8A6GGP8A4hWuZmFJQPeBJs2jG9biFZw4fAJM1wCd3rj",
  "key32": "2SHzG26jiKS2MykAp6vrHtpgrBo3o6y8rZe1aphqdjbNvm1CxwEsTezn2wsy43a92Jx1zKsLFB23SFQ4yLRaASTq",
  "key33": "4s2bgSo7HU3JxKb93SRAc5LucHfGchkSFawLxmbsLUDdfXzpZQaLbVj1paRvhofnSiRD35cuZ3tqbPJnNU7quj4x",
  "key34": "i3Q1P6NurTYxXZAncirkBDmKfmMNqsNntahqCQq12mbgvVHord7nQ8WZUnjWeiYqUHahz7iAgw3gDYRJYMYkr8c",
  "key35": "xAxYNXqCGSzL45Zzck2uNzuGWgwLYRbBrcmTV3CdMiqthhAHqkfsUc88CghyCfqCghAbyQNbWRN5MdJmzDFvLxF",
  "key36": "BUtpVqFTRjgqxppY3kS2PaT92vRRTQDSS478GEuG3rie6pjHRUWjisedHqQmjsuFX7YX96ULZKr5qWYPD4LMucA",
  "key37": "3eBQ5CEFwtcLsJYAzkMLNn7U2GXZ8LbxdYNGgx5TRKuwhbX5yJo1qUkJ1vNXgCjYxrJCPFLM3vcBLRxZ8ea1oubX",
  "key38": "26WQeerLoPLdW7D6afLnmQRwmGAGyKYW8tEhmpXzuhT6PQoXUrp8HwVB8H4Wb7sNBq1weGiQoTBQvqUmvfKHGfjg",
  "key39": "3zEafPk2ppNTDAJbM9Z4mEx9MuvJPzJND6AzmnnuXHDogoU3GbHggWPZBPuHenDZTJo2hPJG35UhjcuCgGXk94x4",
  "key40": "5bGo79FhxipLBK7TLivJcL7uW7hTXQUBG5TqoKLQRSX3qrZNRnyT3GAEfXLZLiMeBN7wP1aPUKDb6rMFTRqgZoLX"
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
