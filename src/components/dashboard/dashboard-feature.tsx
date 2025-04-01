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
    "2MyVvs4ZPvZ5sNEnXSNi2y4t21uQ3UGg7fDuAGdm3CZJSKHfqv3ijX7k3vmZQusNEMALmWSuewF51fW5YRWdig6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ey7QXYPzTvxkxVBEWWxCdDu2hMsL46FuSwqJKKPuQDhQD2UPJaXQUhgVaaycCYZ2XcxeTJWrEo6LzuwYYfxvtCQ",
  "key1": "5tkZdLGytCNz1THYRgcpfD7RA6XUM7HqwonDi6WtNqZtiZVj1b6sazArHwxquvAhkzBbtfojTejjbqMmyKmNgKdf",
  "key2": "2RBP5nWJzXZbwerTeLYXbSKJcXQEXqaBhCsKvUoxrbGT5ypDPK1uaLbSUEDCmcd75GH7qqNCA2vD2PoA3R1Zfeku",
  "key3": "2wZK5S5KS2egz7KE86xyuTMpdS6WSUy3NPdBXCMoNUxtYMhzhqb2x9dLxTd9fVo8uVk3dTqe1jnCcni73y39599S",
  "key4": "5HaCnVb26GTHFWKLDUHtEQBC5BbnNxBdSVVtk1YYzp8tGLRFXh2AXw85FmEtFmamns1kX98jjENKZriM5oLfYvg1",
  "key5": "5DZNLcNLMKWXVAEuh4ve4qaAmhma7DF311mxDgpZq1QAV9jogHNztLAG2btHJrqe1BtgxJzz34RCPEkzWYUoZ6bD",
  "key6": "jHzCVqNedooFX9auF8LWcca2SiWfT5ju6KQuYEJvxiC1Ps4ThivAPu2QohcU51B2bMQ8ANgQpZ6ip3qSNhMVJjT",
  "key7": "VzxxNvtuU63hsteeLbA1dXrRMsGUAQ6GvurR95BRft9BLp5pxQ4GCrUBqzhNLTX5LmWMELusfve9pWNJC8Cn3aW",
  "key8": "3h4qYxSmHLJVkcoeTiWgk6j7tRStoyNu5gzi1PiefUwRvbUAfwNFnN3ebVoBetwpTmHvB8HeoBWeDE9ibpx5RLRY",
  "key9": "5XrSuRwsP9MEwkmmzdKVdwd8xFnrTyirN2HJFNmvBzES8KQkpwo1b8poBrh69DhQw5AkZkB6STdemgf9VQeT9JMm",
  "key10": "4FTCHGBD8imHkU7ZRZmDWdXYFCnSXyMHqb9KoUU73ffVf4MP2eMgfrw7tquoFy2vk8CiY7ogHEbRktciVq4QVB4w",
  "key11": "r9SWQbueUjGRsDoVgTU8HyMJFpxXs9saCRxGCePPTkXx8actQLokge6rPYWhunjHPK48zowxrZ6bFg77YoXYgFg",
  "key12": "2d8fEFSxwM6s1Gj5tbcHFG9LETxb1vYhpwpdU1KHdx1cZjsU7zuy78TJZ5sJaaDfpk9m7MN1uH5dX2gn9xq518q8",
  "key13": "49DpfF2aacLwUYdHKsLNUUyH4vrQnJo9MkiZPFDdT38YNtJP6yoFai1tq8eFEUjc9BAQKkchVbTFwj6sMMvXsqFs",
  "key14": "64jTUQdkw6EoXJ2WBHrtJ9xzpoghey9cCAfrhQ519FsCMXUnimEkzzfsam1fqAcBNVdrCsTsqe2gPxHxACkMXRMi",
  "key15": "57qcuGXK2N8E4DeeqZRPrBms1WpFq5ki6U7VcHLMnHcZgzUSrLG7ut5G9A1oW7ePxTfvVejQjwxoQBtgXGLAg1t3",
  "key16": "2jigzSbiu2MHgMVAbhXtU8XWxqjkDLWgsfmMD4R2RKzr47N98kyVjzKy3UC9gQufxJVUbPNUFUcDH8YqnyR18Jvg",
  "key17": "4anDWwxt47fWiK927sqfT9pU3TSEFDHSgLvx7i6RwCtyR1o7mCRFrEjgsw5htg7ACxomeKtLdD6he2uDDuR8gY6H",
  "key18": "2oDfcSnEjbpA2gubm7Xjvo5zsziUuSELtGhXmbytsUSVpPWNXm49wPz89HmCf4VUas8C6cn2zEgqU5LPECwZyacW",
  "key19": "K14GJzCL8kQegykdsj4e6VMv6baQkz7LYJuHa8KXDwmkxCMddL9JecJrCPbdsvviU8S2uA7uRuqMFiNu7CSw888",
  "key20": "r1U4bNLiatG8PVkjPXc1qGsiuCHZfpqgW44pGQ2LsSyqcbzHHkEa6vH2jybNhSFAnhAmjB5E2uhQxWYaDWawf8g",
  "key21": "3Y2j99n9Zt1HLr3Z3TE9yWr3hkYoWgRQTmR1kjaq7qzvQD6HNzpsNrVTyJwdR9JssdYp1KLtNAD3QxYraCWUzGm4",
  "key22": "661pDmwQ7i6h8BDj2x69aepK2gZzLz3GbNk3eLAsNipac2d22j474K2p2UdBCHAC7sva7BJwWYcjNcrAuinGKSP4",
  "key23": "DMnsvxVNWewJXYftGk5Cpb2R6BqJqu7KABXrx9HGZC93zpYmnCEiubrPPtHKN7ud2hN5w1jBzXJyz8vZz8RL9cL",
  "key24": "gVxqyY7r5QEm6kgeX7yRvZ1YGezZ1YVxGqThEETJq1xnYtYRpsJzB2gR7ShW2bpDZ1D5YnTTEtbbRVbzfMn1S9h",
  "key25": "4BTX4iwhKk8Pttd7P4j8yWNmR3bRh7bZRB9agx4yxkp42Rvz4ayiN6JaV7PoMEo5Eh3N66u1RgccrcAETPZrT1Nh",
  "key26": "2V6x7iQ7McfCp89XvRT5yNfoZDCUscSTe52imMQz4iSkbjiksSY9uahHA9jFYENyc3Rnsek639JLVMNSsgbdje6y",
  "key27": "3CVULmF6qZJR8v41xfZfN6TT2LuYQdHphJqTCT4bS9km8VJVoHngrSjJSSh5TWnrmsdCJF9gnsnsEcFv9KPFGVeN",
  "key28": "FQ2PS8ypJiCzKkKzx1UqX31mEKR8oFmzmLkxmHUyncvWFDHbmFEg6YreE8Jy5G2YhT1J3ikQPJNTCNxxHRNs9Qy",
  "key29": "5YWvzuQZ2z2AvEwYRHPCiCvcA9WEyRGeCbXFMHrVegMQPJJau8QMbtcQgzsyXbYS4JN39KzbtJ5jaQeTqeuTP5xs",
  "key30": "4BEPPSxkvtNx6LcMdufFoZHm1C48RKPVkUsZLr77pvSxbSeVWPK35iugEGmvaMdg1Pp9FSdP8j5snpacxt39NbF1",
  "key31": "cJy7JMY3BCMYqPr84n3nbkXsjzwrTJb94xE3n87aVS9Ko2Kh5z2v2bQ49ysZ6ijJve1FcL16C9xU21GskKWSkNd",
  "key32": "3jRAFm3WSJi3yojBtXPVhbXBS8JBq4pxqHN1PgLogLgc9iMDiQHCoYFm2J2kv4zWXEqvRniwjPVM3L3KciTRcY3N",
  "key33": "58tgdZu2mBr6CPYGJR2cNCKaU3bYiDEThyNBLX6J69Lj1e5EVQmmnokmvihwmGC4ZV3kNYxeh5eTu1MKDVnaj7KE",
  "key34": "MsDRByc5LGNxcs3s9oV8aUNbZs7YcQ2MKCzUsbW1z3yqaHigZArD2wpRF43VAEzEeey4gvviPbnfa2VcmhDcTSU",
  "key35": "MsnUNm4htVzm8saRRUg29guThqQUhpBBo89eXuPg2wd3Q7CdaYidiN1VRfqBcZJcJyEwxbnDB81X96SkCXv5er9",
  "key36": "5WAuSVpMuNACsoCmKZWecQHQEi6yv9yqN1XbmK8zZkNAV2JSMScor6xyWHzw9ZC8Dndi2zAKQ97GRueRpdATyvuX",
  "key37": "4AiSnv4mSPKcdojZ1V5CVsrKSSt9Gb8N2PXRFrLRiJdekkynHFUdGz2eMy9xwj5fJiw9kyHFXSwVRPZEsAD83hc3",
  "key38": "2fnqpch5x14mfHDKbvijtRUn4hNU4CYo3ic5gwFs229jMiALx3ugcqheG561Jy9reULwhfeJHGrKuwt7SkASR169",
  "key39": "4ABbUvC3KapConTqc7qHY6m67sSCmtXXEGu4V7o2no3gC5tNYGhB3thUiGHh3FiaAVqNni5Z62tA7B2jCnNvEcTD",
  "key40": "4CsniHpVyKcYwWDrKcUj1RGKsD47fk6bHM7ZphUjAehjruchYetRSwgxWQDa2ftKdCr8bci2aHF6wKxV58MDxcCq",
  "key41": "4tksapWNYzyX89oWb5wXf6TNjznBtBCSwpyBc9UVERMCDfcQS7xewHZbFSKhq4VGW7mxm55cqNQeFBAbCCK1Ltj",
  "key42": "2SrdcxmuHksaEAF1aRwQHn294bBCnryjgMGTRuxXWnP1K75dEvcBmg9omNUWCcZVaJx8ja3nHUpLTt498M8F3K1Z",
  "key43": "5LuqczfLytSjSmQ7wy1rjiD8MSagYPD7xMLmyFGv7PEmXgHLkPKjhx5G9W2YhbDKKAnRAWo731an7eLn7ypXVKvS",
  "key44": "4CXuiDZSKGhzcA7cF8iKiPuNExrDyQ28R4GaKKnHA5xsUZSZN25ek6e1281goog9zvRFfkdjfYeX6qLQ4sJtb7wn",
  "key45": "2TmhaAQDx7pNyc3g65NKVAFKbjLTpogQbKAhE3qFQDPhGdHmzgL6FKpNh64tLL7LPHtyqCrTRPnYbeGzXsfNXdSx"
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
