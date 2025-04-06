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
    "5NiE5jtETtSMKwQixKgByL8qVtnbLtYXF93YQiJ9p7G11JY5ZLRTVdjY1pSAgBCW5WpcvA9foDLPv8aZvT7Ju55L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NnVZBhMo7EKRuv5QjhNs6xYn57yzPv1Yu6zshpAPbYHxLrz33cr5uwes6zmhJyW3jQjgp7AiwtE3rfY9gK3EniD",
  "key1": "4ZKqaVXXkx6t1SNNtu7XTKUxMtnbq9SEuxL9yc2WKpScEF2frLTTPaMPL1jFzp7cmHZ2K8wyCQjK2M9bSWn1xxQn",
  "key2": "56XFUpqMAxTeg6BWF372VuLfkTQ67WvfqWZn1QG3gQzCtoy3WgtA53YfhAn1J3p9e2HsmuVLrxD6f63pdd1pZ8pa",
  "key3": "47o51PKJATfjRVqbDnHsBSdxXK8Q7bDCsYTLrtMpTowxB8w5yLXEXfjL8cn7MKDeHdsWWJhSGDkUMhMhCKqaRu73",
  "key4": "2g8f8YsR7JQYXMspmxnucwRgjBJFzjJGYVmr8ZHeZKKkTgM78ejU4tUFZLeswBxGEKdZsEwUKcDWKbsGwaZWQ8ma",
  "key5": "2FgKcgzWYCM5LTFycsV1HUCfx57qNoDRQ98g3dQaGhQUQgn5YFK8gdNAE1QSFkQW8PR35m2tXWYBSrHiqJ5qRbB2",
  "key6": "5M6SxfJL4vnZ9JU8wruL37Wgbjcaf5MAnp9YkVTGZvEydCxNesfqUqQFmKWHfC2WaUn1DztFsV2B6ZicHJuJtvS4",
  "key7": "2GS44gXZh8qdMEyR1Vv7yueCiYKtCrmAvprSU8V8w1qfvMYPagP4oDPPnwpK4ynfgijUgkrsttfwopK6VFb7WoTT",
  "key8": "4u5vA1NpVj2Y676VaTMY6VptQhCQwjBbGwQXdM5YTmvo7ED6x632ZBqRaQeqWr54YEzseiPQBPs8ktcQtuY8GJFz",
  "key9": "336VKJbv4LBaL1BdG5fBEfXsZWDHKWm8QZLsYmrDgsUB3frrQdePeLXyhZVGmmXUHivQMAPj6rR9HVhJXj727HEc",
  "key10": "65Ev6rddFoK9aLPBBsKTpLmqyLdn6Rurv4NCteBn2dvS7DC657QEFsymEfZK7HyW2oXN7e9CpGxxLduvJpey6rfS",
  "key11": "3M24sRU3UC59Ds8FefuC9eZuR8N4MxrMP8amLxXzjddKSnWoKZw77ajwmoUW83zSBF79QGmSTwfidxNaDY8Metnu",
  "key12": "3prBefGyvsAPvkuogWGDA1vNU9d4D95D1FKMmx5T3CcAyJfFmPUQXUNGycH8RK7uR6T7j9aJuA9dCyLXQc4v2hLN",
  "key13": "5XLY6HPE8HZmHm7jP9mxzpMsBpChH6hrKP6Uf97nLQuv2NTeXDGU8tSbwbHZnr5vJQUhLw78vcWzKhoZENNcaD1J",
  "key14": "cYz3unHec1YaUnJh5FuExWBG2uxJS9TBVD3249kxeLzCS5BQegoQoioABCwtGRPCLvborpyVWimZ45tqgYJHWnM",
  "key15": "3Bdua7FYGC8JxUegQ8dJiP8DutJNkCBT2eAddBiKiDo2mupccv8FTK6J4YaearSFpSprTKtcvDnsNXTyq2CUaaJu",
  "key16": "5afTjE8Rb2Mk331t3K1dYCBgrYpYmYsy6Mz6kjDQpxjPKk1CKgiwqFbC83fKF2XDSaFT6yeGVV1VyBcRegixtdLt",
  "key17": "5H75c9hNUXmkwoyVfSy2U3tcXrruoSPvYUbyVJvXGNLfpgg3Hi8wrSEvw8JgQ1cDL9YEHEjWqQcULctSeEHFPKUq",
  "key18": "2283m7FFjTisLm2chiejbFGSyxxTLhrDwHaWxT7uee52ryKh6VWd7FoSRGnFWs7nyYvyn5sSA3w3NvnvbBhkoCpC",
  "key19": "f5fCc1oQx7G5xTDE73Fsw8XdyMP3CCzwwTF4yMwHDeh5YgPHBTdj1yKtUUxLoLhbbjh96SAQwC6b2XxmXc4MYet",
  "key20": "5XFnFqS4bn5wU1pWyJgFyZ2chhFPBJ79kMJfEUfs2XUf7KNcSCBnFWpQzMGNBQXygiT6vQaUdWTGZLZTCnMnJKCG",
  "key21": "3V3ZC2rxadT5fjvBNXTJCmVxJqyTH87JnBGN2ifY2zt3ScWKBE9mcZUVmgvryUuRtyTgdPuthk48TQfgpYgseE6L",
  "key22": "57dKuc31eCk1UYZUMfyAXfTk15Hmv2ZAPBNNrgPdwzfHCuvWTTaNJBQvFqd5Nc8f9hJhbtgkCqp7tRwTgkT3qLDy",
  "key23": "4yzb9guRSrebZMiJTjZ55moQeTaY55k777fqgb6VK5U1rVBoj5i4s8XsqtcHwX5Zww8JJrRupVWNhkrrsfEsiAfu",
  "key24": "5Xgv2WUQhD1Pd712ZjDyEQQF1D2zqocLa93zRyyafd6jrsiUJtmNykKhGiQMdRiCeh7x7X4METWVuxsqL1ipWZVk",
  "key25": "4UWACyjvYPb1Mtc2Y38zHgXWE9JabSA1fbBuHcRPbDGU4MvHK9Jfcuv5jxYRdsz6oJKvjBYiCv6wdr81PsbKUqXL",
  "key26": "4jCdETbV4MRPUpsKw63keDhPi4AF5Pwu6qa9KMCnjKMmNEJJ9PcNW5RzLjZnFAFpzaZ5Msj1GdiUdTu6eVkiVBbW",
  "key27": "5jm9HK35bqCHEkKQZjqo8tCvaXNZT896xcq84zNt3og36XsfAKvRkv9MuNT3DFZ1PCSTWtv6RaPTa5voj6zLt4tp",
  "key28": "4HfFBE8pScWUwMqGTVzHtfkkEcwaxjremH66cBygDg8gnz7jevjnAVu9FALTXLvhgQky7EdUgb9SNpNjB9UBZihQ",
  "key29": "2k8KdLwKLbMyHou6ECL9A4ZK93htVie6KKARKwiQpMjUFFeGT4vy1vAwRfVUgXRkHcXe53UBoqAduHrRss41kSsj",
  "key30": "4PzMwtsqAbD3r4Yt1RGsApE2jWDhanS6YXg3VnhAbxfdxzQEaqWNgZE8Hc2p14W93cBN7sHc2a1eDD7TYJZGMjBg",
  "key31": "4jL2YH4qTxFYaYRfU14isizz1hCqdgfNWBgB1DZvEuFSfXDFY1m9MA2XEuPMWXryaCL44hcJWRmkUd73bt91R9kC",
  "key32": "2uDQLPdkcqq4Vvc34BMVGBKUsnDo2wy5HSsFYxe2bu3C9ZjbQyVGTSb8ooZNVhxMoK2xfzrrgMa1FuCh4fNxFEbi",
  "key33": "5Huur1g4Gfba7prKxnuUDkbEHcDYDkjZSxMo3FmKf913S6dwmEw8E7gTygDDVbruPQL9qoY8VjVTQojo1szerm4i",
  "key34": "3tFJFUGTqnc3reP2BzfMbLBUSyd7zTbf1wHDnavyBMV9BY4hDMmjxLeH5op8wB1ZSTxgWcdbo7Wt2p75KpGqersS",
  "key35": "2XSNRmdgunU81v4Q4DZjmVbaoWDSZvNcob2ceb8A3z2medaSRa7ZpY4TDNzyw8h7vVfiWHvFM4chyuJ7SL68VyJR",
  "key36": "398kkMrqavUrcjStypRN4kXg1qM1Hjt3uzpKntM2yNDoGEomwZvRiCemVPqSuLQrKvN9ZEKMGwm6U34MUUNodHyr",
  "key37": "ugPzApM23mqamBq2pNYg4owHWmJwTvqq7MBWmGnkDKd5U6JnPAhWfWFfSiPWGuc8zrtuHZ9ui41MQuML4qy6x5R",
  "key38": "35FfyTztKdR6rFAng1Y1ArnCz9ydUKQnkuseBzbDSsSCf1AU9Pv4dAhvN83q1AGWh2PrDsW3hUBuhC3Mp2yv4eCj",
  "key39": "3Rz3mBZ8kZH9KEKkKanb31HznvBtjN1pH66dUN8YxWKDaK6fq29pZHbQQVNhf6wMoMzQXTug48VGsZf1yh567fTV",
  "key40": "JrqGbTxWYTie2tYDpEHwj5BEtk53Tu75iqrnSmNyUUmT2ku4b84UCYWH4ozR22deB4CUoPTSF97ccQ7tuXkXb4Y",
  "key41": "3VMZJ7EtyRJBsaxWsy22zW82jnfrjeYj822kYgUksFzWmTeaoyLqzWVyaA1qkZ9u8LYXjsPeHVSxP6prcxCHu8zm",
  "key42": "2s4kxA3x88TGVA5tbKmjhAmfDbZpsAYoDCujPmabh1VggrofzAePTz9B8ZLBhn5gZ1P1tPMu6QWzp8vkxGiQw6hw",
  "key43": "2PcsziZBi72878J6bef3trNUGM9z6SrzmZKdnuTL4ki9vDoxzrYjXT2DVdjjb51APMbXpn85UX2R76XLWkrrgCsv",
  "key44": "5UqgV1RdGiNRo4PKeoQRs6Jit6844dHjXDGGhMG2T2Wi5aY7kf3EAoJuSj9Vmg53CJTPLUYQa4isc5yV5fEKrnYB"
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
