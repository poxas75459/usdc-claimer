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
    "4AbnKMVSfMqiFCNbP3Kw6iFxQQ7Ej1FGUhMykwCjD3U25LaQCbpapHLd374W5iRLMJfN4GojnGk2guVHgJWJdVM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x16HNZVti2bugievWMQMSKtiUsBPDXUryBT33c8TmHW9hzU54uE24uT1Kc8BcZJdvoPGLGGzVVawAunATa7ueoE",
  "key1": "5vm5TspBLuFWRCnp8Cd2fAd6H6q82yQMpkL2LPwc8fgA1rvJYTJXRKLYyFkmfFcEzmmmqKEVXJVpjPiv1YYGDRPJ",
  "key2": "45MBGNRPvCawwPXPcJFCk5pgCK4xT4Bqp4SVMimwYRd3MjtunwcWN2qCjPDVYzbtw9AqmAUB5WA514nseFDaD4jf",
  "key3": "5xkpCYtq8oL1if7d5RUnCKvrW49A7szx3up8oJ6KPJgy6kQqsVSgwEtx7U8HnLp32BbaFUH1QHJosjQmVP3zfMDi",
  "key4": "473rFXXEg1DSLbWaGRXygfmTztXAFZdTb617xzJp5HVpKiZchdjk4fDd7RXEtNvJBdrZ3FdvzNHqPkFCEeVMZiAy",
  "key5": "4Qa8YhdBo3pDp4pPiHDs85GBeyJrXzDFyrnae66AtpuMwPWgWry7yGSW3MaXfsGAeasoMHpcFeo1hqeVmFqfvsdo",
  "key6": "38f4Kr3nrC9TwFV734dMwQrCNUw99VN5nD3fGNJbHmZT6KAThVWu6nXs52FHq3aeUd2EKfXtETojYrnQ7JzaB6MH",
  "key7": "2hDnKCE8VdTgf4u5sbDx7nDU1ghaxeP4mKdzBEp96p9njcF1Fg8ZrKDMR8ZtKSUJweehW8q2swFxwekBKkJ1sKsa",
  "key8": "4mUHBfa8uWR7DUDoMQVWdRUaA1GFfbAnkFuzyboRBAog6MYZVuw5kaLJza5mcFpfCbPyjYJ86EvMRpi5peh4wa3q",
  "key9": "3mSyeCFZFoh2CyWw2RJqt88PVGnJxgy48L33AaBpVZYwTAJx34uijPaFWv6JaxgYTXSCw9fp628UF84nAoHMQn8L",
  "key10": "4N9Cp5QfWTbMVUFPMfDZBAUvkRBUNzaEFs4fEYkVhkfpbJkgafH8icJ9pqJoMf6BrvzL3YcUddmx9s4PKxgQsm1o",
  "key11": "4sarPb6rUvj6MMjpkkuRoUg1bwn76mMzHGxnaikwcNPQM2GinnrUbM2x2uXq7s43MwYJvggjJ3TeEYkJd59FQ6L4",
  "key12": "mLsJPhbUW7aJCWWL1p7oD8WoUidRXoQ8xSWe6mGmj369KJi9RRbUH4mJTcdgip3PqTq8zwDf13Cdo4p22JKkno2",
  "key13": "3DekoiV4qwWGKoZPGAo1PMNSuQtvECQo4pZewjNE7nYoZtbYxDcQvZKt7a3yrBxEkWPvx5itfpvAdy7gQ5zzW5ur",
  "key14": "56xmSgWYxFkwVwqqGQu5eaTP9vPqGMvuNr7A84h5ocoqAdixZ3GmXUgSj2vAucaWX6i7eLwDMjZbpqY3URV7rSbo",
  "key15": "NdqHrBUzut1JNv3gT1ciHsgV5bB8NuGe3ra5PeWKj2CGgNVZHQb6efcRbvzUqPfS7wQ2o6VLvPyMrDSfGJqxGNh",
  "key16": "378C6dMozecRf6QHA9122811G1V3WtBpgtegja1m35HEGp1hHr9ydc2ci9sSkAgqjkxwUXg4FcVBsMv5d4Q21P41",
  "key17": "5hhp3g1TsTqR8NeMQMKVXeDhQWipVTHBQoroNYXZJi2r9tHg54HecMb1Adm36t1FnJ414NsQoZHYYMFAt8Sf2ZFr",
  "key18": "QtCmEeE4FzoPdjw8SphdNFNYMK9SW64BVGpQkEa4Lnebz4wumEPareTAHsxXSUXXRsAYuL7jsY3FViiwkCWDUpg",
  "key19": "5si8DeRu9KVQTchAGo9Zs3Ed1fdcgtWAfzXmwZASNLzV6Ty4Lto5eWSeceBtZs6AJcuia7deL6j5hdmHhRmYKqkC",
  "key20": "2ZKD6c8R51Ve7X25DGrYp18R6NJifAPKX959GG2joQLGUb6V47Rmu1VVBn9RNtCKmAukkh5MuYnESeD3QRZ9PoB3",
  "key21": "3E3xD29c8YDSfodV9eFcmQ11frEkT4F6aUTQ5kCseUbDKXa85ny4NzSDQGcP8ExNm3VPWUhkRU37wAgkrY3VCcom",
  "key22": "2ZurAetbjUSt8xvzLJiHhG2oxYNNFsFKbGhp2YVsgHVJcpDTSU1YiMtLkokLGMq2T1sPRVmYePnLnsdjynrDsTY3",
  "key23": "3oe8YEyNh88Vc3tXTnY55RY1AyCu64SipLZZ4ToygCxucRwFWNXuyZzQsNABjwEB8gd1RjMBAHwrsF6WvyrMfUmA",
  "key24": "khQ55KB6SVGVqURhefRGKbjgvHGDwYLS5FLKEDEwBwAUzLvqxMu9o5NtAo5Y8NjZoMoeDuVAbBgnCJ3kAWosk4C",
  "key25": "4uEcRwPgCLTQGC8qJn6qeqpZcMUEkLHA8DGY2QozWJsKuJ46eENhiQMeb9WAPtiTa7h5fTAtARg7mH3Btjay1Q5b",
  "key26": "5mGPQBFg7CgmXBU9gnbMf8QReV5vfhUGzASkyjMpFgFV5jQDNBmu6YpK7WyvKLN877xivhRCLUVkR7Apcg96uQPe",
  "key27": "8Gc7wMNwbkL2dZRBHaabBUWstC9nGV5iWGpcH8ZNbt5mmATjmBport9PWphtKH9EA66HXYcgdXubuKbNWWyD8Kg",
  "key28": "34Sp3qto6NZJcfetvPp6bfgeTgvqspauwv95K5PB2FX7c392JPmBv1XLY8pT1X5NTtqfgSg1hJzWHt3r1JgyTJGe",
  "key29": "2sir1w5cEGJKUqiVgnJJbAawQZxh4Xqanj97N2uNar5BphVoF7zVqxJrKCr7zD382qigx5f34cnwbLyyXafjd3Nn",
  "key30": "3jCgKcgHQ9fK8FSqSXNFkSFQCdvZy3B3XyQsf1v2rLXeEqcNRDiZkpLusaLrcFuHNKyXuGynHT1dgLccHdiZqjQj",
  "key31": "3p2Qd2bvh3BgK45ZWFxX5AAYzP8hJ4sA3b8QpMBhSSPYeN6T6kewrzqm14gn2UuP7WeniAoBAkBziJcvKmo3LKHY",
  "key32": "5qbgZMEMrRiqJ8eMxRRw5vujCz96qc7r7EdNiMmeeJz6P9z96KHXnXFB91gpGbsY81eHQm3ARdhuddKmxDyYvv3b",
  "key33": "4W2a1R2uoY5p3uQM5ybNzVUJ5BMiFh5hBzvwMJVFueyitaq8qzj271qM86pz3JbDBo74GrzLhJbRBKYmNoZCRxzD",
  "key34": "4zFt4nTWx7cHhek4HdGf35w2EosrzbiYGXMuB18x9XuQMcgYJNGJmHzF6UMm8AaBpQVhrDhq7jy2GDXJff9oRY98",
  "key35": "2bWg53NoXTW8znhBqHtCefeg5nnGYJxnTe2zMkq6ACepd5ENtwBCKhCPAXoa3tdGBj7WrL6bZ5nnFdSfou4wQGct",
  "key36": "4dX1jdH7RAAxAzkQpMLEuWR8zfDwjdCY7h3BzeZq2BkWSggrBpTgnmsGf9NtYnoQ7ByZZ51zXyip79mk2xtV7Cya",
  "key37": "5WdUpMyddcvTXPVhnuRh2s4GGNdqfzzAaJFezHVVtPB9jBnBXWqNPkD58fqX1PdjVUwohVhveSMW8VdoGEjdMYeT",
  "key38": "31y6GZHX3JjQzdy7QRnw35kbm88hPzPt31ymKajdNr7HcD45N8pBeM8BQckoee6mzqqMyMYQ8AZh1zywxdW2dGNX",
  "key39": "2yMZnLsYB416C6d2aWYhbZZj1yBu8JZHoPXobRbZL2dXKheZUnUNbtg1Wi3K1JySsGj28cjGQtP67U1M83pCxjje",
  "key40": "3TCzLtiMR4VY46ERuKrXAnK6Xkm3KsWLVPSAujRUEM8W2rNbGtLUXrZ9HovuMmTiu647A8FjwnLoFniZ8p21vDBz",
  "key41": "4kinNBDC6nz7CVTZKrBmnVX4VaSTpYQdzjuHZUytAFoaevM2S34zr1mfUfftaYrUVjcvhq3eqa8vp5bzz2R3wMfA",
  "key42": "66Jty1PdarXoRc9DiL2k6J2b2btzhKTjPErjgpueVroMZEyZEkzb46FD31WkvfWp9asEcoEadwBSH8UDWAu6TgYK",
  "key43": "5jkrCu3Gi2w83nEDX5rMRRgno2BoqBfsuZApiHipctu6sHvogMV9KkDScHfXV2d3G6Ybe1JouxrCmQEyZwYt3yRd",
  "key44": "4tg6TPrx7wQzpFitXCYNmwbPJofPby3Sw5CqMHopgdruAxW3MmA2Bg5j6AsPhoNgkXepT1rbuMVJ2XeSc6rgrnnu",
  "key45": "2E3K2MwMQGXMUaKPUKxaa9JCN2mNnhFNee69rtXooGS6aDpXEe9i9C7rkHpqZWjCAuKfTKhsng5WjukHxhGaA98v"
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
