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
    "3BxraDYVy6uQ6Bup7FKhn522tRW3dPZpddZ7rLEwDB5EodzTwJWDqkbtCyMWRW42NEXtveoD4DhajpHfRDCp9PeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DAvCnH5yKyNzYd753eKoHNBtXgYaZ7LpBiKXPT3z3cKNx6pfS2eiFd4CuwsmDGTuJZJSsvTcq3NFPSa2gtNGECk",
  "key1": "XJ42KaEBLU5DXVjafhx5RhgAm9E6oLwuapniq8opPUJZWhT79Wcbc3sDibjf7ug3qxtwSb3SHhD5eaZC1Az16QQ",
  "key2": "2wfFJTEGZe8fdHh68ehxgoAGEeorywpU5dZ9LdQvZZVh4TagkSnG2fYd3FJWhL5PzuiDdJiavJkEcwfKdt9Br4LR",
  "key3": "2637qkQEhzZbj188vBjBwk4PdnFNGrzL7ZesKi8eHwWnmjL1PS9TRWA6qVM79V311eh5mcgdgAxU3xyK7xwoi2oW",
  "key4": "TehzqeEP3AWwUevS2S5iPGgyAdB1y4pSVFZkDZEgV5LY4PcQM3VNoiMJ68i9ZxARXLi1gvZzixyKtoMFFtg3UML",
  "key5": "4kr4eYfHqkMsGc8Dv62q4Tu5HVrgboRYTafLEDjGpTsxF7LhdUDBqzWD77Q1uYCEXZ72W2fTjTc5jWuK86m1GcoT",
  "key6": "2gebmRTNqFRtAFfWHH9sfVpadUJHfQzUgLVW3RChX8QDzMok1PZgUJiKmEdVkdWcqKZAcrMf6Y7V6UebqicNM4F5",
  "key7": "KqJYb2J8H7cwEpiAzrrsfZw8rqWH8UsezakjD8HMiTftGeWqyY1n55pYoUogN6b77uuVAewUEFG1arBkv3mCAYF",
  "key8": "2swt9fNdBA9vLqdHMwWmEpGJ3aXqXWh9Vet4CRu2MrAX32fi2UFDAoVgfbFSgjYVdw1vJJiUxFzXVutRvgeXGUXu",
  "key9": "Y27ZzWjho57xPBpva25iBMnGSnN6a5eNFNrsYZNa7eEhPFYiNFX3fwgYSVDdUg7ouwPMZTzdxaLZntUVSDWDbEv",
  "key10": "4X8zptizyMux9gLb5B4xxt1yvJmjkuFtk7H7S6Ta2dJHGoUrnUZQFPefcGcMvwUGqGpCaHK7SJ5UPtgbeAKmB1Gb",
  "key11": "64afqw8LbkMqt55guPFfZvJy4HnS4fhB6rekkahWBkE1zjrrwVyZhoqBUcCk3CSNvqF8YhSamf3xkR5eZKrwdQJA",
  "key12": "4tm1kjmQM7kqmLjNzWLE6ZFaQuRevNyinfzgvnyiYyBGE2KxSiZneJyV2bZ2F9Gzg355ciA6b4YpTJPdBR64Scpn",
  "key13": "4kxL53GjvNiA63LoDVsAV9fECy4yeZZEW25bp2CHQcJfyJzxkPZyDHDLwdyCbuFdvhhkq2nRWLHYxsKCLcierHYf",
  "key14": "2LX2ysPBvfuDY8z4EEgpALkUcc6SiU71o4To4h6BJcXA7rDMEe9i77QqmmoKeUxYfW92A8ykbSXvBpsxVXoESpm4",
  "key15": "33ZThmv6Y7uqZL4CioiM35N8sgucxV3iQyms8LcTpcADocyBg99TrDHaKvY2PFri3BsHnGjcXsGtMUNnRzYh6WGK",
  "key16": "2URD65rfb5h34tusYLBfFQuwLcavXKA5fa3C7ZHbNDU1KZhUHL277661aMDtNxMJ8BVj74juq946gDagNrqunRJ7",
  "key17": "4yZSkk4G2LDXpSmigJxS5RMtaYJbqpbuhPA4j4HJ68BRVbabPkVX47t1FBCBoZsqiqL42GmosdvgqBMQE9USreMn",
  "key18": "2EzBs2DAsfVV2WiZDQmHnCM3hjadfZaJJ6AkwP2rY6AEZodLNR3zfHcT7WPzov2GDV9uTynvYYdvAUPpGuye8owR",
  "key19": "4ANa9GoT2spAvAuTpDJMPmSGTpBod871TeZVnVr9H4mEij4k52p64N6hw4xrbwtkF9qVcHBxd7tyWR5tJpe21e7S",
  "key20": "57oBSAsZeiVLWCDFqrpKvzxCXbwtetyMe5V4A2wzrWvmfsj37NQjupbqagcmtR95oTAtr1vwLUgmRMs2rbbgENpF",
  "key21": "5uP7oDg4swqhGNdRQFXELzEXBY2aAMmGph1PcfqR9tXu3qsSJeLXvhxBQn3phuZ625b3pwEodveo6DW7ud4VdWTJ",
  "key22": "4TSPamepbNevSc1v7ksUcWXgcKpqxpKKaGLj6GhFpwPYN7oJ9vnsimUkTyEQWSJEF6bRSow6Fwra6fmb1FB35cXQ",
  "key23": "2NtycA1bzM8eSgXPoRUeRRkYodwFAtVLhdcbGMsg7RSKQBrNpjsPubcH7W4BRhpemjyDSR5mVoRhpHWJfJNeVr2Q",
  "key24": "3PGftoxem97xyV4tcLWio2tnTguKyXnqJ8ubnrBQ6s1abBy4pkE91MTrW64BMUtbhzZSnTG5BQbGskfZydk2vFE6",
  "key25": "AYDVNX4SqYLyPszmW6yNHa4FabsFxETjMefN7FX1EohxH1wHD9pfKwXu1E95pZwd68Tp6Bogz2NCeDaBrF9xLqt",
  "key26": "nRa1jGwhwBqPTgVg2rNHHV34BTB9E8BUgEbNtrWybwsgmsVqPKMEJdMN27FLaVGtYFXzwAPrpKzTS7y7s1Jci3k",
  "key27": "5sNKBfEj9E4Pft7MPK7nx6EUjVkcMcVeawa1xhWk43LDT9QkbDagqy5oSzxF8XjxU7xMA9ecucsojPAqrP3aCaLM",
  "key28": "3fxUo9GxU5SuVZwDnT4PEnghPmDsACeJ2jALPGzH56NhtFdoxipTkWJ96fdptM8mUYqJZ5fGjYrgDLsiTaejkvnH",
  "key29": "4EEh1stTnqSbdQfTty67PztsgQYTVXbow3vxVJEoqnCxZsVKS1FLcg1sZifu9YHEXmiXh1zSYMaw5RvSeoxy1jmW",
  "key30": "NtAVmFBzfpzd9gKFG6FdXm2BARRLq62H9Sgp3ocxBwXT8ZhzJV4dCeT5YofbspFuB51FHsmNGRTnkqfhK8wEdad",
  "key31": "5juYoWAXkwtc6iEUa2zZpKHKWJo4tvj5N3VxDdnqM4a53AzW1soa9q7vcPpXXMZiDZRpqmEaZmaWHyudvYtC37k9",
  "key32": "3VgUZo8kW5YrVNCf3yxiNW7Bv1AJDZQMuc94qTwK2ST3YpWAkhm3x9gdZNrxt5b3PYBsBESPPLNpiBQCzSAJfZvQ",
  "key33": "26fFzjvHeBCURu7QXCExMUxWwhzah2dGj1aZrBvwE72Zod8tWa1mAxKLHeZpzXiiFf2xAR3PbBWrx63xnN28rU4X",
  "key34": "2Dm43hYLWp18ShFc9Kn4fosRzjFguLcgGH7EJ7Uhq82P55yG7js1LUgUbLg9zbLBV7duwYfmjeMVENm6x2wwvNX9",
  "key35": "4kgCeKBK9yXhxoUBeNq5cpw7YR85FrCiA4ntYYpn82JCFS29Jj4inqmUbqpj6yNfP1Sxhm5nVFqfRsKrgbj6n2D2",
  "key36": "3mMx3ZwhnmACSiuJUEGmXjEfgTacbkdEYvB1h5GZE23tKcSsUfcsQCP37gyQ1mneHPHtrotEmeP9ApJ8j1UtA1Q8",
  "key37": "2Gnt4Neby8LaiAiU5ZAdLz4nt9WUD6xGav9r72VVousxFgT1jBzHMqsEkohxTCYBc8VTGFa9vPLDWdpB3hy786Vj",
  "key38": "yauuQ8gxhtPAt4jmMYm6G64XNDg9FnWL7chdp5uv5ZqPi8kGgbMXgLwkGEUdUKVqcPvNyDEB2hF9EYGoeyp2fnf",
  "key39": "3PGDvRnavvJAytxFUNmJVsBgCygkutfcEQP6YRP3XQ8sEtfCoFhzKatzrc8428DQ8aQXVzqMtfamKzDFjU5GWPgs",
  "key40": "2EshS9892MWueKus3c5dmCAbMCdqffjBZ35tawqE4ErU5SuwLoeq44zU8n9yVo5Lt2Khd9J7DnrdpnVEHyPHiRkT",
  "key41": "3mCKZqPvc8VTDReLVg3xAF8L9WENhkcKUrhz59B4awbL45cF6pXCqkyvLSQDRcPjLjN3XypeDZujc8mcqmTZJnuQ",
  "key42": "5VfsNRVCRUij3rwc5GLvGG5hj37h9q6mwBeRgyuUfiuERe3CfnRtTdFuGVxShSqteA8Fp8FNkVRYc5nriw6qtcQH",
  "key43": "5L6ECWmwFquXdfMyM3picK5Nb88wAuLUCBWoddBE2q5gNip8pTEXxiVE6yJGZnu7PwHL4579ZoAXH7p1QJp8nm7T",
  "key44": "5B3ckcipsGDYNKLLC8uKtD4FHGapgEAJ5BmjzNF14db8cfgBa5A4BJEeT3dd6UDSXuYbE29bkBewXD5isGWJzjpG",
  "key45": "2pyQzu21ZcQWM1SgvBXg3S1MBY2aWTy7g17ZHaaMDxJnTmMXukzn9ijtFeBQTWGXwqYgAmU5Lw2HE8c3y5KwVZRP",
  "key46": "2uSU9gDR4BPyPhTJJaYPvHuUBqWcZyELAj4e4P2e9YgxGFEuJtMJ22ENj8UwN1kkLvSuWfXqwjkwHBkGSiJBXVHL",
  "key47": "2ZM8KK4BV19LwRan4sVExNj9joaR6FdygvHCQG4zwHppfbj9xSCEUjEDVskLotm6kZNZvthMWMi6B5bybfDZh1Gk"
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
