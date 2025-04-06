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
    "3KY2uZxdpE8udEfWRcg8h7KGYE1v6VFRek4Ce5buoVagimTgLy1bb37tUeoQkUNP4WTyR6q1eC6yMBQjzRR6GA9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hautpsePz74LPCA4gGB4DcfyoMHrNw9n825iZsZAyv39ZTShJgULFcrPiQhpqWnFWM7FREWz2TVdraFdanrJzNG",
  "key1": "34s7p6hLZfpFXKGeuWgFuEk84NDxcA6e8aGT3WZfh4nPTt3MA7CMRUuM2Dan7TsWSocVTG8AGaGHLiek1a9KbAkv",
  "key2": "2R4XY3tJcP8fWahLvxeL1evjg83n2aXjU4yJVoT7it3GyKwXPe3GbjTu3YwNP5LXrEoPGZVqbwdYp2XJkSP4n4u4",
  "key3": "3pcLiemGwnaCxCR4EwUAApWR8vYNqQwiLsSMknaRTzyrZ2YX1dqJQX85Z7CgrqqMSb2gQMxygewTnr1KREdcqSyB",
  "key4": "42FAtwz92mbn8pUBaxhDryYPSX8XxDj1o7bJ9BfSvQZ331VcZk3Ub6oqBTT9855E5NxoaUgA6KvDS66WpSA7EFVj",
  "key5": "59Mwxa6RneK3VBfBUkNQV95Kt1PnU1hRS1yEoqqkwe5xpuL9kYrk6cqeGoxCAozZqiDSQ7kJdXtFLJdfrQcYMcYe",
  "key6": "E8D8rodihoYHUopKoFtDmu4MYcyVm4pbpPSMkDHG5xKciCD7XE2DqSp58CURyzHzh1YdYpYwAxThTYF6UnHYFPS",
  "key7": "SVRq8qr87a7zMZRY9iqJngk4PC8FChMFBv9Pno6fk1YHGad2KYAmtvXyqjdDyb56B7d1v6UGCfmNXbck4xDccf7",
  "key8": "55eU8mFxFtKBLGJbAifGEM4ofBMqwbU6U6aWo9TA3NwrXPkXZXykUpZrKA5pntCkSaqa8UK7B9J9EcQK5ufmar7E",
  "key9": "9mv8AmikK7G9zVE8hywcwUm2eHYQ4jGUYR9GSUu4nbeTMSkwxV93mrqNoz7LU1wVdCuHbF3CmaZ1xCA896XWVsM",
  "key10": "3W9YDg7Sa1QgNC2ZGBzNpFfCP7F59MDdXGean5X2StqxiDDGJ5Pp3DEjRC48c24rA6RqwwmpgJzTgdtxGhSKg8uH",
  "key11": "Mx7fuWXRUwsLDDQ9utTLe7xV8s6pizoRkn7DLn67N9j5MiFMkYGnkF2KsmKrmd3y6aC8JcAbdz5LavmzeSw9ew9",
  "key12": "53YVdHUwxgYMTQmBGHoL158AUMKCRXe36RXrqyiEVcTGiaD3uKfJs6jFJUMerFKcCRkDCWz8WueNAcx6ecb5C2iC",
  "key13": "5M2ZWkdBGoTWrHwAtWNsUS2FTGNo2XF9BvsrGn8YWUdgp4JkVnUtu3xFH9irZ73HSeVBF44j6v9PsSxhJAZUQx4M",
  "key14": "36LHgUha5Aar5tzG6TMDhjjWVCPnuHnnFRGJZqFscGjgzXLYGtgBeWS88SKeiDkZ9BpG98cUimRAFtzjzTdjypVM",
  "key15": "3mHM2hveLJ1ikEzGHmqaQWcaT4QmnkXw4x8UL8nfJNRs92Fh3CgNgxWUwqgZV1onCfmFhMdUNs4KVkX91DdMhcVT",
  "key16": "6EBuxEYWaHGPRanHin7h3VgB3kzDEeEbxyB97xYToz8vq99vf6E1XpgtcQwguSjyH6EvBdhiTTzAYN5reVvLpDm",
  "key17": "4wt5NxmyQU8P8B7ZSA5CunVvB4DeYKX1YvZJkm9JbXnTvGnTw51yhqxoSF1jHKAVS62dc9WwRbCjAuxKvuDYLeHt",
  "key18": "3cU9bffJZibT3HNbv8dTWzPLEAwAZq2UAWS23pJMxzLcaEmvfWjiyC6NaF5EFe5Rax3EY3yfrfumdkF8gXFow1Ln",
  "key19": "2qtLmup8Du3ipXhNgr4m1mpSr2rzBwDraJ91rGFB8dcgCNy4MDi9jZ752bjVWSUimMGxvzBNVBKdnqmAEz4jkrLV",
  "key20": "5aGvLsrWbzmfgqfXv5TWgAXYR5bNNphHg7Cg52RJs5qmKiAQ6g2oLP9jCraBFYZwyuj7eefoXTJ1oSke1dhfauL4",
  "key21": "2oWWsfrjHZuK1NVbmpfW1HKp8RLxjC7qRjHFp3GjQGryd25veJC66JRzCtVFXBiY8F6wMzQdyRuk6MTVrnAtY24A",
  "key22": "3FerxrngeF9Evi4h6PBNbGLJv9BGPtR27fWfmyGtykQpLinQ36Rioos2xzFG2ZZbGswo34PBdbZNqmkHZqd5Sndn",
  "key23": "5LRNXR2otDBkV3i9sXNXXoJJQ2AJeXBSDukXxU3YoR69RbwcfyuYNw9XTtVu8CBBPZ6p6br1dePafN5jTnopYbh",
  "key24": "3QS44hw4rVctjKoBy6N3h4UqtCPDw7J8T7EjBmfZXSosm8UMPLzNmXLhcrcPr22md3xWbArWTDvBp8Ww5nCGHEid",
  "key25": "3SoymcsqqiHSL4BdUQPh78DNBvREZJ6pAgvqh477A9f2FrMBc49hgAjs4WMFoX3kkEtUVztHgfAAyCynRVRai2XY",
  "key26": "4L5WWRX5qgdJoT7FF5nzij23RyMLmv6sYJKx6LAW9HLP9jzFntPEkGiL8kErWfuRsdaXVHBfB7vmqLvMd4jdxFdr",
  "key27": "3jG15uXcnK9QoNY3Un7dkiBa9SGyKV3x3DyUvkBYs25cA9YX8kaXRRGvwZTpLcx39keLLMd45kSANL9AsQgfEX3K",
  "key28": "231acjpZvtVMFnHi4LkJEBrnPAMWrFF3kXsY2uASuuWg6AGQTpDUVaADyeXavKQmfpeg1oGUx5oMMAfCGDTfUvTf",
  "key29": "dJbcCz3mZMjJLsjdgpR2dt6B1hr8x9tWDnfrS9bSst4A7Y4TzeCvStDvGJDgqJG9ZNLR7jLfvYdf7kxMrfCMoyT",
  "key30": "QDnXvcpkHKGmaEtAeQPekaa9Ahqsk54oeyqqZJNJBGBSVqgxfypExiYyFoaFu1gvyvGNJkfsh3Yprc3RC2jmRW9",
  "key31": "5GJVDiewhxBM8iKdUc96CSKVwNkCSqhwvs8rnjDomHvcuTL8YNFyv3W3MZuXqszy2reGUozmxCWcpwafgLZp54Fz",
  "key32": "64GNWLEr7epzKVKYXypS8sSU5BvQSRRvxuDE3Wbdx8FQwrv8tSbSyaH9e6gxN8VjSVdqKzwEdr3kbwVan8KoWoUc",
  "key33": "46wTBvS1GyH6DECYuatUQEqAzkfEQ9GyodMVXKitHrgBDGYgX6RMg1dguqve1FV7DNpoUo7Sm8UGmusEnxU3kHG3",
  "key34": "31eGoSbQ7FbRDGVGhphkcoFcoDvG9TcjHZQyNtivbWeKHtEGcpFkapSbTsZZqohojTgLVBnXaQqLT4Z2QFrkjBCW",
  "key35": "3p3XU29LXHkexuyFmPtgFUmuDCLipobtMcExrvPBYAfChnZdnRkRqM816fK6ZKcrq4DDUK7DGKxu2ujedWrKoFV7",
  "key36": "9skXhBiFSv41DfWm6fgWk4g4XUgx6XRqAJWAmY3rw1S1MCqGhEJcV758YZNQMrCgZa4bwz8zBu9UdFyZRRx87P6",
  "key37": "hfFTDsRQ8AsGmnCvJSWWcLZRvRwywbFxhbVdA98mtu2XwykxsJkPT4CPYMYqGDh9KC1AbDGub5QLtWvu4gvYDDr",
  "key38": "3DvPqkhir1VDpgY65Bfo5Uxf9pJ4a86YqpZS46ukZ8e1B5M96L3rEc1yUZ1mtX5Vo9NwLBUoaF57xbuhEnPsAdGU",
  "key39": "2MYn9K9HtwsxccX2gnNVtnb98ECEpo5zaNfRdoaJqTobaGgbazgdhNz2AMCDCF7fitArddMeVYK4BnFuvcBXbgn5",
  "key40": "5aqgxTAbPQk55iviX1Qic2fG1Dz3fdSRvn7zipyFMriPkwQFNGBVHY71En1fA4bxEzf2D2ZMwk6R8kgU3s1uCkRE",
  "key41": "5oFymU4sfJDUHAFKccV77YHvtTh1B6wtMLj8F6NgxJnhYVLc13FoJTFbZNmrQquw6vmLrHaKyy65SMm6zMWznA3M",
  "key42": "5p8kGo1EpUuxRqn1zQDdBWYYEBK8uN4W9pjYaZY8AJ8X7Rf8uXNEwAFYDFsWTRQYHhagQxjBhYPB4BvHH7nh6jYZ",
  "key43": "45CqaYjRSyk8zEjoJDArpkPPMfp5EGy8PZjM4W4zj9oJraymBFoyUB5TMa5Tp8woRndo6baH3ajdrY3ZaWVBNioP",
  "key44": "dnktuYS1LFfLcSCamxjUdrwyLMgbopxCvY5PMMgyVyaiFNSJg1eseLdEEmfgpd41AsWk3w29dcYfTQVQAFNUARD",
  "key45": "5sQeQGzjnhBxUQp8gaZ4cjHHywe91WYUpLr2rxsgmSE9ZM7bW8jKKCbvYaDUNue9CE28QvdiYJhHuSHp3NsJS3Qh",
  "key46": "au7rLdCM87qZHYFDkQroS6J8rZp9DtA2XYLGGH7HrQLGseFPFezSAhrvY7pkNQwke6a1eD3rDxwpoe1HtkbC8j7"
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
