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
    "3ndfxoJ9wAui5kAudVSAmW2yhshsrfuySULg3p33Fj26dtVpkVjezkEMdT6Jc7ipR3f5H5z2DV9kmYnV9GGZEc4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WKmDCmC4D6PWsqTj3Ni3B8YjqSGHZu1CzbszhNWrmJNkm7Z7u1Ekt7G2HLwBbevBuKKbGCd3KWW15EqMYENEKpC",
  "key1": "49yFmZnYcfP1yBZpzv3i2o33LyeTda5z6YhU3qWrVAgtAL5mGMHdaL7ZJ6ibDrrcs76ELDQjUizzUKmsnMvLpQmJ",
  "key2": "6aqkTr2mYJ9fEwuSti44MnvHehTSjUjvfz8N56eY3dxEKs9T5LzfgQ1GH4ZcGeVhr3CkUUjGSDyuWsEiwGvEnov",
  "key3": "2XG2DJyZrpDHxESQcDSYgMfGd6NWFEchdio2hXXKkpuuQJmYRJkijahm7SHPeU9KTBjBunCTU8SyzXZ8BsSTmSpP",
  "key4": "6AWx9fLwj21zH1UaZLJPkMYDXWYNGBSJiqcprQ5y7oqTAogYZ3hXfcAPQFqBF8LyEk688z9KK3FdWMWk7vbtXjx",
  "key5": "5CEHftz1yP6xcPnGJX6pkGcf8t7B7v1Sq42SWpFdwnRKfppdKJyPYU7YZSmF44hjkqNSvNKakSRUFnULgfkHdfZA",
  "key6": "3czBQeRTfVxf2JaQCspmb5obBnK9kVphrKmiBm1QdZw5Pf9RfiAzCrWZLGqPzkUqKzdwFuP6CUu3wb5Ukrfs2RZi",
  "key7": "4eq1HZav8wYmvSKMfJt9e4jvYggWARNaMuZfqLXsUXv6Va1WLhruetKXQZ9Cegqwu2PNqWhdLuJvgoYPt7uVeY15",
  "key8": "2eLW12TYnyzo6ogBq7eph6PADUeZypDBGeJP65AeoywfPR4CZ11sxhkbQKH6EMS7P2kiRtpejwhe4N3nsbiEjY3Z",
  "key9": "6LK3buPTWfgcFTj4nppzTeBdAVYtL8Y16GKryV5GqZ2b4qGyyBTbJuNzUnTdgZaDJj45wktUH2qssfZdxyW38dq",
  "key10": "2zqCGW3vYzCLyPwNZhtiPcyNyhYffidKSnezSnZfyxi9mf9kXwmSqJwdM3mLGQDdXRARs8h38g1f751ivUgfQTzg",
  "key11": "3VvFuXChueH1FGyJgTc4emRar1GUTXExQ8R9vW6t7tw7BBGqqirER8taPL2WK3TPhCBYsS8Una14LsXwNDgdrFRV",
  "key12": "5W2qHEb2aPHFKCwUGK75g5iph8vixkXtYATcW6ADEsS7sXYPHi89b1d66kVkxxB4aWtA5i4pxbXoZKiCq3SRiyQb",
  "key13": "2y5qFkNEnuTGidLL4n5F5zLjgH3ELvnPhGETkFZxwJWStsUedpSUJYD2pq2dDG9U53pPtyQXrHwmCJXtKMxjrqwU",
  "key14": "mDHgK3uM9HexHLn6gmnpPj9FjHtHh4pZspkJnHz3QGyUFsXAnyyf6VDZzWQ5xJYjK3gTV6aCn3TzUsjzqBi7CdL",
  "key15": "4XCfEgDF86peGDKhemLm4jfp2D4TZscqdczRTwwxF7HFrdEemC19mySaNBYfFoeGpk3guJbMQy7NP2UrsvDYvQmx",
  "key16": "AsVVLCDo6UjbfgCBKSuENktvhnKyGraNjYrsK1a46pqBj15QFv34dcUfF8oSi8zs5rXL4EghGU9ogUK4ntATSmM",
  "key17": "2Ypqtf1cLU32cn5bjoUg3qZzbHK6WGC4LPH9fH34NXCocxbx2CNuroYMKsBNM6QiNpGPczx4fvkXpjVvqNrayrxo",
  "key18": "3Z5vx4S9gtZHKuZu8jVDMRva5dcpgwtymEaG6ekgPfWkKcxtY3W283dyMVNdPLSzQs6Zngk4nZy6yZvwdZf6qeCZ",
  "key19": "2QVDMzQLHSPNg5tAj63END5k2xLs1i4fqWR2pC4FrdRNHTCaP2gF4xurNxvXcqfpywh1frve6Aqqf793yjWeMPgx",
  "key20": "4TVJ4TeVgAtXphzJFnr5HDtJoRk2c5Cg4bLmFUHCBKLkG8AnQisEAhPb8oXbCnzDoDaN8SHdKtjTYhccd23wFixB",
  "key21": "3en2rw7bDh2BhAAvCWxKWLtHNcurKsgmQGvHquDQYhdiFZUqG3v7ud61KD6fwVmZc2LVRBRjPHMiJMzK9HvL2ecE",
  "key22": "YfNv1yEc2TkNgi7bgcfbbS7nt6ZmPuwp7dibUutbt68tC96B6oAnLahaH8JL3ts7WEegDnJxvGSJV777oSSF29y",
  "key23": "2UVUGhDDTD7A8787kfks47TLafzjEwJ8PWGbDA28DhjsuqCceLkZucdLrcaaP1MeUZPpTBBKh2Bf5cRzxsBAR2Du",
  "key24": "t9zH4GpuGCoHXGbrkoEtWxhyXEEB61f54MSagyboc4bY2XkQgvq4VMrWMcnYnT5X2M5YRfzfnWDCk1MCNnhfkcL",
  "key25": "1eberfJRsXtVdtouggtSYvYqo6DSSF7KqTp4FxnVGNJZNRZbGSwVJdKduEY7M2UGL7BmXNJmWgrfMGLZpLQY5XK",
  "key26": "2i2fPnP8uuKgd2QChpUDod1u9RjKHCSK34faWr4HjvwTREVNphJNpQZdYVJdrKWeS3S6ARyvfTkp33Un6AB7A9FW",
  "key27": "2k71jomKRaieyD2zEhZj4KnatQnjfaBMWoyVcHsYP9Lz2UMEp7PZ6FG1uV6rua7tGXVZxnRTb2pmdgfs1LvQoJEE",
  "key28": "55pj5ojDayfdGo1UCbrAQYv9Z48Rxfhyk5HjVXXVT36G9JvZxQ3vF23oiZhVbmytuDVedaiqrne7jLFWRrZvKo4t",
  "key29": "5BuCWcTcsFGLKfVJMDWgfZgGNKpHae4s3MRbzK4vRWSRmK7j32qw4kV7ZuJHTxWrgc5CE65KyB2qPrr1P9wwDc4h",
  "key30": "4pBsedHBcMoZDP6D3gSr5v3uhk4eV7FoGPeFJ77oecXC5EXAy6zcewyNCw9wBKxdMo1VBBUEh6QXvhMEs4XoRytm",
  "key31": "3KTP3JT74p4P47iXRMpZGHWfDSXbVu6L26iKmT4e9mwPX2oaiQeqtvHkNssKVwpAUWPwgwo7E63GMjT1zK9zootJ",
  "key32": "5HjQt8LgeNCuPqeqUDW4AG6nUYk1RD9DcjomwYU1Eu7wwk7T7tW4HCr3dZDs6e7qdvpALn1z15dc4sitjmaB5ThH",
  "key33": "nHEfANua9u4mK8o1wgAyJjb4SZgo3s94eLKUqHd6bdsaPw2BEwnK4j1tVFG2Qn65YaQUxpuFHswoyi2RFVbdnxt",
  "key34": "2KPxu9phiunpkm4M2SJFuiFTEyxTwJ4oQ6Ub4zZvrRnj6yYjD2V5gNghRDFhv4viSDjbou1f6PTYVY5hmhSLXVHx",
  "key35": "oq9JpZu8PED5hCWE1cUq3sFMedTY3Xp2jvJxeAGwnRZcB2wWLh9xGMCSJPRgsg1znTafiibWiopTxFqAzdixwKJ",
  "key36": "262uahNyyn8MTEMPZqmS8Cx6ydhAMUvggaK9u45jDkiadTJtgiPqUKzm8pv5VjzPZny5Vv8X1StxXHqXn2f1hBUN",
  "key37": "2sbVatPi6AfWpHvbpm8us8soM7G3Pq16b4zpWiDy4PxURgKnPRMZdFKzdKc6dUEzWVGHVYr6eQjy8yvd9r3d766n",
  "key38": "441XaWN4WE9LH1WP2pdwkxCSNQWYZfysYpjWQxcruTAZFyc8CLNuZnS8wjb9z9B6JJTrUMkT68FC1GmMVwJzFD2C",
  "key39": "2kVWKoSP2nNoRXGEvibbG8zZBKs6MxZKsqeRy1CzNFgowphf7RuFWzCkvLDXiNNRHuexhgKtU4DZT5RMYRSUq5NU",
  "key40": "3xUEQdeVkRyj5dmAgeGjhSToZYRUcbrZQUobStssTRRu4JgSoYQTV6HLfkpsSNqUPRMtx4nRWtJmg8A9vnEMWMRy",
  "key41": "fq6G7sG13EXV1HSCitHqbXc2dFQ13N3ah8aZb6YThdnzQh83vwYnSbKLH1wTowFpkLsdxWLC1ywjVPvgzsUkC72",
  "key42": "4QSnexYaX34nLVEZ9BXqzakHSxyoVhQv5ka1eX9vo2eqyMHNTtd4P4hokWjdeYbbLa6uzFuvnHQVN4WdexN1xHpS"
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
