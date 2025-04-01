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
    "48SRfwYs3a2Z37dbij9NVgZWT77fuwkxFxB1g1Z952xPmedDZTaxvSJbGzpk6yuetvdQ6sJkEHKJNzSdBYxJTRcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8CaUPQ4qocTvt8ZECWC53poapJMkGg3FWU9dgu4G8UEHpCZnVPHUoAo9WeJkUof2G7SckTRkEKQVJy5CNNiwWov",
  "key1": "4jcMgLhsMeKoEvPRkGNfD3a7P2HR8ajySWVFYvtdnHhC2BYjcQAKLCoXv5rKR4J46VrKTwdNN2mc6Ei2XrAosSoD",
  "key2": "2c3yUeungJn7U34owtS6MfbmirBZfs9jsQhqY4rZhkuTdy7v2fjxyjT7YCHzWRNeEr8AEeLQVqTsdaVuK8DPrJEX",
  "key3": "3Cq8RBcdHsLj8927r8FNnwQCu6opf9V45eDQHCMTkZTeYUSTQLarzYMjdHyDRghQwGX6JW3mW8W2pBKs8UzkJ6Fc",
  "key4": "3DYYpRixHUtknBTKM4S5axrYAFK4yJZTmRwRpjJFyhp2Bktu3gEQXehRmFCdAfcFtwLwnKwP6qxD5g7S8Ej1PBtq",
  "key5": "2jfsoCJrhsVGYF9gD6TUXJBSWUdE8Vrw7m9zVxLBeDMKfiWXTb9XEffeoN8zKZbhtCKz6YTR1nRXBhdZNmK22gqV",
  "key6": "LBaHVnx7TKXv6L4cDX5xsBXqRcwMyxfQ82YFDo5RSu53jFdv9wP7nxgpKXoBKft4fV3j9oTeUTTbA6dbr6g6AsE",
  "key7": "4X9NX4b9VBJVznYzwmSxDCZqQNG3oMibxhsXRf9ojgVSZXJ8TSZt6hX8YjyQAjpMSrkgyt7DPL1SLZ9fhCQvKjBK",
  "key8": "2A4d7gzQHfLz9F8roou2Sk3Ur1QbGZw7BmvRqKVDn1iszfjGUAAw4jBLMKduXgxbH2xB256skknizvyyVnRZrDkx",
  "key9": "3y35VT67eNXian7Wrp6ovdY7Mu7kSzJAL8zCvjcQDRf7vyrQbmSJPkaxV8L4dL9tws8HheTQbL5czpAa53Fc2kx2",
  "key10": "2RkkRZ9UpZcq7W8V6j9b21ipJZrivNfYYNAHHHarrMa6ZC8Xuef8K68x7CHmmbcr6Csv1cUU3aY7aP21RHSzW3fN",
  "key11": "Dc84v9wCj7TQAU2zr2fgi5CpgRcHY6MK2Z3LbA6zi84tC9i7S18gu3ZvNWoUdVeUZssqfodKVjz38wd5JhMywP3",
  "key12": "5cu34wZdJi36RseBVg7qXjPqad5f6CMij6xtrFW5RcmfzneeGdBSb51PQ13auzNutdeEs3t7K7K3mxT49rhYsGUM",
  "key13": "3th4krc8jjnFSVdWPAYfsQCKGacXHV58wXDV9PHwT4g42WvxbYeLv6xtMyPNbdXYJGycH1j2M36AMC3yzZbowZ5T",
  "key14": "eY2LNK9SpEdP5um6ACQkjL6fonJKUdAMyMuo8PgzWeHFQC4osYxv8HSmneffJdF8SvJXn2mSLk9xoqHFBovkK4A",
  "key15": "3kZ2ixw3DyCF3R9Vjq8fajeCMwFecjBcrXgutgG4supTdQwS8a4xGtyXcQBpEw7YANmetUUJqPghVoQbwCMyc1Ea",
  "key16": "nCHMP7Cxcnj8HTs35xYZgRUkejNLqJA4UDJuATCzJDBc11qiqvMCXwdAd7guNLkWs9QcjVGqKAerfP2h54aCeJP",
  "key17": "8tcqrKCVZTLLqg9CwpEEPizGzSNHCbGx5TfX2FMmtM9kLUH26VkTqsZdAuJmWbhwgmHMpx9a3SJqc3Y2AAWSAHj",
  "key18": "4EBe9P5ZMYQ9nhMRaTUjhgERzZXN1hrrc6A33R5M13JdFtddXYMuDAtbx2hCD85tY4sQddLpjhCbeR7JCDnsJton",
  "key19": "5xPRhUh6nkTmhYJeNTx7prK6b6sj54U3gPRpbvN4rrDNsMEcSqfXGZ4zjG4TAjVUxvpJgWFkWX2JqNnfp6RLrkqN",
  "key20": "2wfhRaZdQYvcbGdCcVYtDzr1xcqTDRF5Src9NHEahnNc4mDhyrgMGKP5YtdGALKqGPFLSQq4fa7U2Easf3TvQCH",
  "key21": "4auL9UH4DakNsiMtKHmK4JZHFDdeJj8bQvT6DafGYATjboebFSxp4qJ152xkc3ykfddD7qMMBCCWiV7p8BwQw7LH",
  "key22": "2DxPRhgJXcZnzBnb2ZSWbKyZ8iARhNWNe1jfCk4yi7kPiojSdA8h78xLzzCVnWWdqCAiF9PdF2nRiG6R3HUdHY73",
  "key23": "2qyp7M7nAbapFLdmAdVM3G9djkV5m2ywjPfWACGBeuG1rxpAoesfVgCPk2Me7hsMRchA7NgZTWZpwDreDTWYyRkP",
  "key24": "5AeGP6UCgVcmRhYHqgZg4fLxg5RELHKon7PFsCZaf1HJ3sgVmYAU3EATJYd3cLLphwyD7X1oatAFkMNRyBPiuVT7",
  "key25": "2G5NUaJxqdTCkU7rXJhk49EMekqcpHGSrGmW4ZpkquwdAPNTYHBhTvGdeVyYqcHVmWxvnEBa5m2j5Z9GyVitzboY",
  "key26": "4Ju7m1UeEHnV5LuXq71ZDoJTzSTmjS1Zview9Kx3rGCAJ9UhXBYrQcPSP6VjCKMhJgveEC6tJyPpSRUwMoMSsock",
  "key27": "2s5M8S7oj2C7eicBVRQZd7qzXn8SxXXdL9aXYDyAmopHhAcET2BGEJpcDBgMdspVBEpEzdKqniksU81CwfDChaES",
  "key28": "2biXqCrLCGNQJfrG16u6eSW4JTMELnQSt7JdoniXBTmAPY3Av5KqKAG7nKXqgbTq8JjkNuAdgS9wVKbk1jEkQA6m",
  "key29": "3qTrLAMc4E7FWLBu1C1cxeNtoehNtNCNEdSkT9nDjEaaVtsZkRvapUWQtKZ7foJ6b19ABCprbXJTX3CDaUb4KHV",
  "key30": "2kx2QJtX5ELy8EBGAo9kngejFU2wcHWwLjCmPERZxDB1738Q4ctBPJUNcURpxLp7ogDTStynMNkmMQnupggQSaCe",
  "key31": "4U16QBN9MHhXymwMUaktYBUHjQg1Ghnk2sNvyXkU1ShGj6e5YfLdA2JDsrKwWrj33tbHYjZ6xp78GXeEYDn9PFEi",
  "key32": "5Sk12gpjyVGAbpsHQcmvEyVm4QH6YoMhrJ5qD21BjZw458jpV2CZsRqELfnCs8rfJNaA5mfiwxCdFomjMQvRzDDd",
  "key33": "2FheueynmKU8fxYdriuUWUpofEJSJCvmdG8kBffcTFg7kiYFN2qtkAnz4H8yk23kpk72FoNeuvNsUgW3jzEWnGgF",
  "key34": "2Gys3ftjVWuyTzXKfFWXUBZMwHPJKWctVbzyZZM4zK4jtHNK3noLsvmbswCak3SzNYpbYBd1YREnUHn634PPPEVq",
  "key35": "5qbEBbYzs9FbGHSubBE67txpkBc6nq7ufsuRsjwxfKY2VfgfxVE7FepwUFcZS3GDzcwCRJ42KSUJjs5GsR6oQR21",
  "key36": "3iQeovvDavo51feidauQyvPjKY3faUR8f8M9FcaqiZyL5G9FsvKB7hKt7nDae6DULTXqstAUrUJFtoAmeN62AmN",
  "key37": "o9cETrSvTXDxSkQ4amcNKdBX778o7JHAY9tfJAVUisodhJ4LNPpZw7tdJ5fCCJ1V8nDov3Ta5nqZAAYqAA6Z6dG",
  "key38": "4L9G6ZVMcjXYDV7e1rMVo9HC8KcE3ym3t8oonRTG7Pu6uMJDMPLAPeiGtytEsvwD5LQYQAonbjxPhEsg2iSRF9iS",
  "key39": "42LG1K1KjGiKoQMHg9AZhX9ikyazB4R9RkJN6FF4RvRiQgwqaErzm7Vp3NwGzJHc1Y8a5qcm97fE2mgZQJfTJ1Dd",
  "key40": "4nMSqeZSzKWfsKWTQhV1B2xHKWowSaeWSQ3bJENsp1YSat9V28NpXPTAMPGWR1ZH8mF3D5HYnLCwE9mH1BFSvbRZ",
  "key41": "5WZ2NP62MZdqZBZ7gC1XqYdL1pCBpR6275XezH59h8qNyUjf914ZhoPxSKQwYvXpMD1U9WaEwZP5zcNMiT94FcNR",
  "key42": "4J1gHBnNmh5ZonWRAKPZ8Ua9t9VS1ExumaGp6KSxZx4u2HtuHLAqTuU9nwuLe6VwrZo7jMip2NxMumgDKQFgjqoN",
  "key43": "3FvVe14xEbCKPV6jSoh4GgL2hjnj9wmFCCKYLUL6GZwfPbbviw1rCiYZTy6rxSK2zn1xXvSK6dYWmtaukBtpMaz3",
  "key44": "3SHgpRoaYGTk58cG2Tf2Q9sZry8XcokaWJoTeCGzTC3uXmAU3xWAd3gVHtPuHCF2tweEUCEsUB3sRWeJEnZvjmrf",
  "key45": "2PsvUtC3GDjgQHAUDSHwCLFZyu6KQubD7KCq4m1WV1x7pBY4xPQAY8B93nQUmaXtSTWaZ8s6KtNz9a7Mz7q1E5Yb",
  "key46": "5xvw8dCFCFknLGYrYwRxkPvR7NYWYLhAwTfFpynWXk1DEBMFSev4tTx26hN29CTXpiAAbUoGJ1jDpBKKcSxZ1agy"
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
