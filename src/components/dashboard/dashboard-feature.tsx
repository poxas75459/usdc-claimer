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
    "2BfNBiHMcCMn8X78UQgmUyoksm4zh5piiDU9bZYXCWN76jdhEGsNXmwi9wSm6BgRhyEDd6ecJB8i8Sf6jep8hghj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E3H3ZWXKWJKCY4bkafJ3CZRVyruDx4v5fr64JSF18KfuXU2TrBHysYa2sEvdhcX66oomBq88AVAFH1WHAqbcvcd",
  "key1": "4RFzVGMWJsPC82cbgiBzhRfTtZ4W9M6yC721bA2DMiHtAhKW44R2DPEX72pTgb9R3yrng6nN94ezcXneCA9grtJD",
  "key2": "2fnJVZYGuyqMmmUMXETZGyy8qaKUmEU6UwobwDCzUjXTfCt1JAUxL8ez3fJnRrymmCQyJQMG22qECC3cCLVG79Ww",
  "key3": "2MF2AuRqanmAJ7dYXKbdLDzKpFua53epPMTj3Q7Z8aFtsGcbE4HYwhpygi7xdmPBeaCNoEC5pHn74pCxnbz3uGab",
  "key4": "45y9ub5mvMbbUxSDVdj1yY29k4XmeWFXfQCGpxmbA3bbKiq4McCgptMNLC8J9hM8GshcvmaJKGodVocbZxjMqWDm",
  "key5": "t1ZJsna15ii3dEvU7Cp4WV3HmxYmPkxvN15qTwqUWsp95HpuVmvfHrVXPyNcJvvuVGrr5mD7VacL81LCjoX75BK",
  "key6": "2crhRN6kWvsiaHivfnKNapdeWodh6FaZvy5G5UNjGy1GrAoFGdazkNzNoewdALttRunk8djMXoLVCQvJKqrmAhHb",
  "key7": "5AHAwcAYqBesRbQ7agYB2eKKPEdvW4Cf4hEThmGTrTfqE1fmvgnR8Qm5a2BLnW9uTmc9UxgwnQcbGE6zD7V9LZom",
  "key8": "3hm5mXxr7JJNr8e6W55N95d9KGcisWDSCFV8caYrJYfxzhvsc2JTvZJZdWCaXm18QqgyD13JtEhpE51TRs7iDTC3",
  "key9": "4GULUTLDKCCiD1VwecvVTWzSoxyaafzJP6zTWZYiPEyjaK4y2VfNzNVguBPFd5c7ohc8mv9qDAK3c6XNpy8WrRak",
  "key10": "2aYciiGb4MjPUERcwAFqePS6GsfzX5SbCQgTghYnvpWsnxN6fxUmwmiMMvzrCezuKQcLv3LNyiDqctgUoshasqwZ",
  "key11": "CnpdJFL5r8xqM5UYgbc7UNsZkapvRG8ifBH4N4nG8JeGdhAqU51ekr67xp4mw9r4YdrQs2nrg83TPGo8K3M9VB1",
  "key12": "4YHb2n6SDBpSu6PLBeLfCdgvn9q4RJy8ELYqV7RWvG93wckeg64sajjCfiG3bnMzGMgFipjHAS1xVXdYQSzejHA8",
  "key13": "aMUbTppeKS1ZSJRusYLXDDdxeNfYd5eUf5X27Mtz2ZifSayF8ya3bZLqwNjomWxzhe5zWNRbFe3UP6C7fQnLYZ5",
  "key14": "gG8q2H7c6K18Ju7pP2Em6vdAFWPW3YL8ktJBTqVdUXD6GDmUpBN3dLiQ4RNaZq9niNvT5GgCnswjF3mBAHNm59w",
  "key15": "4Jq8jtAK3gVBz4PLL7TTLsfDyahuphQKUbJ9jeGb17nCX93ct46xPXt8ofppvJnbX6grjsPZZfqq9PsGBjWbjwhr",
  "key16": "2tWk1bmgDv6c6rtWVeuXqqKUU9yPGU6tkU6Yk1C14gyaA16YYzAQmx3KP2AD6pyPfRWbkCLnRoVB5sM5vfkEacYw",
  "key17": "5s4vgLshNMycoZGCZCnqSvx4te2LtuJCzQijni9AgJJLAfyRTiTKLTdyEGnic1P27zbtjtEF92ns1cNK9FJKZtCo",
  "key18": "AZyxZCC71vEoZeRDRVRGq3wz9Yx4t4sxYb83uB5Jm8jhbrzZZSvUhmRiCeK5huWyxVpWdR7f6UZzJ12NmD8JSDN",
  "key19": "2ERkbe2CXFyijG3cBNkQdYtD7QPWP7zpBTQkwGxf2jDFjp5Hv2Mh8onUdDkZLG8RJovwibgD44st8ahrYVSptJJQ",
  "key20": "4VxfnHiMpSDPWKageAmemdwuZ4bRkb5bxsBiimBSV2hmRPJt1MxqAXdTr2f7j6zYruw33suprxMrWNywnBJqBn4u",
  "key21": "43SGCLTG1gFscKTeo4TfHopQyxPvY3dVA3h6jYwkzbHZShG4PnmWgqdQNMaP4Ww6YsausmHkN22SyYV9wtQxGySy",
  "key22": "Q8D9EJJ8hJSykEEDK1V18ne4bi9m5cZwcnzHEcKpzk4kWbNngHNGnMiyapN5r69EaS1BDaK7aveLxvMCAEkgBej",
  "key23": "2drHLiTXyiTqaHYPQKe9Rb84s1jPiYrccwKVAmMwsMyQ5RZzFx3Wh2mCbA7CCJmNVASXU1XusXNYYtZueKrhKQCt",
  "key24": "3zDxGZrWbcjG2tKDu6n2e4bXAKNTaNerPZLvPArXUMBotzegrNDq63P2u2SDQs7Vav5e2fV3kVV54FuJtiL4cKpQ",
  "key25": "4eb8XW7x3f1rA5oaor9fdEbynGaEg4TUH19kDP5EhdjwB1C69NSG21N7F3UwmqM4w4YpMED5e13DeV7tHNvtSfi",
  "key26": "fNzSww3CTpYjgSHwJPshzRax3smV2JpPnrijew6K1nSdYSuL5Y3RcLB8o9wFBQYPXjRSXMKxdoBYJqnMMNnk3oT",
  "key27": "4DjpcXkexoh9ZSArRWXBv5qwjVTGFkXk3eVSFHB4f6wasejSxdLW9R3WUBdzK2zezz5fEw6QMj52tWshSwSM5vZs",
  "key28": "4YQJqViDx3FHBXsqAUiWyhZ1FrerxSqqeQaT1oadp7sgueNd6W6FhEccgJd19NbEHkCP1SSvpaCnWFzjAH9BvY3z",
  "key29": "5LcYKV6ksx1vaG5pYoPPA2dtwQvTURLt9QTjbzK16C7KqsuAi3KvPDeH7XqCa5wjJgoDFB6ShhYL1CjJhUvTET9k",
  "key30": "3WZ2AfgsAPpFhgSwE5FLZdEZYAcraXgGVNFJvuegsncqWdzqqDbHj9Bw7Fk7fJ6SjvpkLZKzygnzxhrZNAggpteS",
  "key31": "5dz8RhCMLq2RKyB7XcJJqUYMEP21n44gbgF9SnFVUq8Ap7umDmeAxuzexRoXLi5pCe8xf6z4LLyFxqdvA46AnWXx",
  "key32": "5239eX3wa2AMt1cn56UQU1srCid6y1Y8ntRupSA8ACF7FHMPGyfhNCUBSc9EU7F6WvXB22ZdAAJt2CW2QE9SKebN",
  "key33": "2tAYNZ5dSqMEZKh2gw6DAErFrCAE4CjRtHejrvvTZyjR2ix1BH8aifdRcygRBZovn6rRcY5taTBrB3FsV1MBFMxA",
  "key34": "JavipukQkhaDpYmF6NWDbrZdcgTKKVS2DVZ4rm78QtLWnDwM4Y4Gi1uuhFfdkD4VcqFKJJzp1xKZV7hVyWMk8gC",
  "key35": "bdtD9QPBSVoRRxchnFDTZJP9L9qPN3ktMGBnPH2iqiib5hUR8tGBTjYH6HXyLaQFHk7Q1GntVvsB9RxRtFEnGV7",
  "key36": "5nqZQRLUBJR2jkE6Cpcq4Ga1AmMgvJPkrs8uFLHcXE3YqNsD4qj3t6jHrtVQdnAZEo9KXXhuG8nB6L7jTgEPbgA4",
  "key37": "4xUjJ7aNS2Rb5jxhLype8MTV7H4aJRwMG8EsPMf1j2hNjLvkw6NqMxvccHoPgxd3QgACWo233HH7fncponsJkFrU",
  "key38": "3cHGyLFp85QaYxqFfD1Wy4PCszBeRTGnr8KQruinpiMHrJQ1gpCT9UoCvGdbzR7Dd2q4oNcDDF6gdhzKZmUyQqbg",
  "key39": "3GLyuQ9PP1FuLaD8kGKCpfECoB6BpwkeHoy4oGfSsegD3S97CXPetmmG5nFFU99zddS3XjVecwi27xPXuQ2ugWeG",
  "key40": "2vaTVExy8MwPQT6pxUzMDND2M49XVVQxWT43DSWjAFHrk4tyKvTEeuzWag3kmDkUfgeZvAFYGZA5uSbecdcLDkQF",
  "key41": "3wn9oYHR5hnAXFLdyN9iuhVcDo6SEAjsCabscDCdkuU9SWuNoBHXGMKyEnAviYgAsFvQwWAh1RrutEHVwVbrGJ6W",
  "key42": "577WEQBcypTjW6g5zqcZonBWs6XvttxVbJoab5Rguf2ZL71xpTXoPNiDrZaLbDm9fsjyFQcpikGngbySWLvTimVy",
  "key43": "5sJjBnvJVia2U3jbnkeRiPD8dfuBG6vhnrMexKeroG1KWHx9SbkZNdDRwBUnWi26qgAa7R87a1jPLW5xCgcFP9BG",
  "key44": "4fZKXqHQuLcqen2mWFqTzpWwqC5EvFrYgsD4iushnmnCWSoEQx83WQVyTJzzmRURUYkiypPRVpsiwqZ1AkQcDmRt",
  "key45": "2RGpPC8P5mxnUEMxuKeyGHj2b6tWTp9jhNboXesD8NYh9qgWTdNFwxc1GP4dWeRAE75jB7Axr8d1tmGSW9QGG6o9"
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
