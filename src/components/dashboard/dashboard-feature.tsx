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
    "22ZkHoThd4vsiPbFtt7wUio8exgYebQfoX8qmDHCShKDLjAEwv9dDFp8SNyTwuPULKbAXctWSERnaGhC2CdxF7XU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mo9xdaidU9NNPTCUDJrPAriAqPqZgEiYjAn7vnNR8m8hrbMA31WhK2Es7SQSSGmuE9QXXHbGVGCA66CWxrSFmF5",
  "key1": "41CyZY2mL9JmwXQJ5jVNfmFuxuQ2hDnwEwq4oGHFFCZrvcRdZYf128KM2xoGzEhhWh6img2fCd6Yt9GXHSxv7UJt",
  "key2": "5HeAJwqSrE2ihm7ayaitXb55QSrPeWRbRtcVUtGkCV9qEg1Zen8mtH5CPUBLXze6BZCHx45eCMModCmd2bPWtdUd",
  "key3": "2A8ajQcU4wUzSoMnH2pMu5EpXKy8Wf6rMsXdrsmkuna6kMqUnktBApkipRhz7boN45V1nkJZFaiALBCZJLTZNYsq",
  "key4": "4hAXo9hHq1DGYAUBQjKh8YVkpRbbDGFAkW8S6vtmeCSwekpSd8PQMjttX58Yh3UEqRf4Fe4Cpjq66AsTeAxarZLa",
  "key5": "pjJJHBWxzUxKyWJzU8AV4so2JtsXqZ7vuc1uGYaeaTB7WxajnfdEVFgCjhxWKc5TUr8TGx6ghdecdhLmjRmJnUK",
  "key6": "25ic95eaqDS48XsvbfCcSTGbHvfmYzzgaeRGvDN643WUHeHqw791bbSjCUDj8q56saawR9QLDBm14NPGdiNJwaJh",
  "key7": "5rjxjPgknXyvnMByWUUkTCCTYjC3nwCWgRv6QYcbkZbFiBqyuFpVxuZFButmfxYtSShcjifWqDipV4AMfUCNvfWm",
  "key8": "59jyouSFGMn5zG2bijsh6sdyQAQjJCenq5NA5J6WqLZ1v4dR3vL8f4FLHSXwgamE1xTqNNuUbrcxGzrg8KrU1J44",
  "key9": "2poG2m6BzXMa816nbC3mrHAii3vVWH6F9gLyUDki8bp1DbYyLXsbfWUAjqv5XoxFVR3tUBF2DGgn7GdYp6eiHpaR",
  "key10": "39DL681jkK1VFjmTYMMSCydXwKXkRtYoZkHzHHK2TQYZweVthEdPh1DafavWvhP6dcP6mKGvrCLADWtphBGaCUww",
  "key11": "3XwsKLPqbMU2GJ2vN42kUZaqHDuQwMgybhsi8PEYvMQmhdPMoYfcHcLhawkMEFZYienpHoD7S8RAwazPW9Wo2ZSw",
  "key12": "5JsN6BSZLuZ7Z7YaMeV7oNntvF64Fv5vb8Y3HZF7adpjpirAjtoPo2n432HJUHorvptNiLYm4vofDm5BHhwjQLx",
  "key13": "2M1NGnWWBpykSgksfwBp8A13hgS1bqrTuXsyN2265TxpnoFcvc4zUzDpD5TATaphCqdhhsxymjP2W8PGqv9DUTg6",
  "key14": "3b1i872ofFLBK68EikY8nPiFqZ9dSrfhVkhTzLgQjZgE31vzH68opwqMaQe7XRgSnyTQNpcDWKTPhAD3DqBXEM31",
  "key15": "EEcZR6DRZ44KutW51LchrAMFXBF4TikFYnZxQ8P6c9Hggm3jgWdx9A39FA2Zh4a7VLR7GrcSw6GiaFDSQ71ijTw",
  "key16": "4NtdZ73fT1NUDHFwZn5UqRzF2Fx7pLtdC74tkj5M4SNdUaGhZWXUpmHzydiaDKjYY1KBdjEt3yc3Tk5ZbV17kGv7",
  "key17": "339aCHxJ7nNQJW1m2FiGDaRi8KnzghLPEsEAAnhvgoydqsf2r2J733de1Gva6GQWnZ2r9u5YekEzmASxTxm4tQNf",
  "key18": "3kMZEXhrV7BypCV3yV763gmRbBYHTLqk5Bfpd73f1QCYu4wcdTJ9MisWZYLxJ7gR8qehXTg4ZSxyzhTcQEqgG6o6",
  "key19": "4A1RyAeKKfrnyxCG2hEcZqPZscfJbQm2tsU1bZY8UX6WSB4gQpcVP1Vz7KzYGSRXsAs7VE4Z11aBqKncN5jNvRti",
  "key20": "4hh4V5NnC2m8kqkt4erLELCrQX9xg4CSsuDdZLeBePRVMs6jNCVm5u7C2RWBri7Cfv3sxrwB1HndjRHpAHgiyPvL",
  "key21": "3piWMuRSuiGc8LSvCFpJ7HoMAGeeDEx1p4f938o8iBZffcKNkMmB91ix7cT3UqB7FztujU66n4cF5NQqrFdQqoUG",
  "key22": "ytiVfwDXvsoZeyM6GwTbXD7PbpUmUWaEYjihBHJnEiyDoDNM5TB2JYxb6B5Xj9pmiKjWqFvH4HhUPXHWx2MKWPj",
  "key23": "372XB7QsGAJ3pZTaQYFKQUC8syvzjK6NYZjLWJ5jeG1fsSyGUVvCCKAKMbPrV8ajTrD2E8ieSRsnAsq7keNHxWi4",
  "key24": "2svdJeCxxTwCL86UFEaWwasowAwT4SbwAAkhqy156HexfUoziAuXpkmRXQvnLhVohW8sERXWbEuL5ozmqTUeCvqd",
  "key25": "1ZQaQvc7GBZPZKBut9RFamX3YffEHvQmevXwWcbnvWpMdeZNgugbVRsbo3DtQJKHieKjt34NXxo4i3yf9uoNxFx",
  "key26": "5FmvsEeQx5PFZv5v4X4YXwZmqvohth74Y9Z8PefYYJ2eHptQtWMPR9G48BuDbqWNH3wv329XYPKfUrgjGhjYhtYS",
  "key27": "T8JVL9sJuduorB5H1JCNa8fE214LvCDkQc3mqKrdo3nQjuD8oiZWgu81MAMv2zSMXk4DRorHAZkhQqPHeUQFdxy",
  "key28": "5t8Rp6oRubJ5T1EysQ4SwLcGfoGPXWv6zLaoXC3agUpqZWsUEErCnhiXP7fHeA5jJd8Dbf6UBp7QLHsg18BxCY12",
  "key29": "9gjtLXR6AM3opaGpFqt3ZSYq1nopFfL2vwbmhcL2MvBHdWWKi5kLXwLFBqALBcZarfLNxE11fLWYfdKGXtWdEq4",
  "key30": "DRrCkZKf8aGokmUZNm7D87Lfjx4GMBj6EXZ7UaAMCQTTHNA9phLymfLDUMDQ8ueHarBqYELCyCfCqLnRc7ESNLV",
  "key31": "4D3eM78rWZrwSnV3zRihX1hXeEEjb7pNQxLLcmBAznaoTeziYJTMRsQuAR5bpHuT1q8tBBMhVPn5Efd6rdq3BirG",
  "key32": "4aJFBY4snKfES4bRqYXNCSkkxauuixU2NCSh2cJhMhZdohn19wD2naNx8XeTaZ2SYTE1MbrueeCJJj5ergmNMfun",
  "key33": "2GEcPjXrx2DMW5bAMntx9J8nLJHmYw5MotW4RTHkQ2a6crVr7kujiPmByrcTW5JNA75s3CzZARNbv72H9qzvEYyQ",
  "key34": "5et3KETAAHzKib4ovxYZofwr1JComwos9zRR4Zy3TTERZfB8UB9tkZfKfTMKDfk9wN1oKmozcVS2yu6A9oLwRaPD",
  "key35": "5i9ah8UwaCBApRHed6SHCxam6gFc1U3niv6kf4vWHsqtss4v2Q9LbvJ8iQFjB2BFGkhL1URGLtdz8gU3u3qQCrsq",
  "key36": "4TXMNUczcg6dBo5G2xQv2n3ukdW6jcAhmfgQAgmFmx7v5NUeHMmb9UVnh95CUuyUszEXazdFLTvMYvH9RSUkBqed",
  "key37": "3amoR3ALjGxmDmMgRv4kzASXtRSgnqMuUhDCunGqeAyXKbayMNe6XgiHz8kkJbYpdQ3yAgrEP2bgWM9xtLhVbpgM",
  "key38": "tJ96NCcwq2mWq86o3SdEJ6KLEfakimbHJRrXLXzXrkqHxTVNMQqnJ3u57bPCWhro5diCK3nWo6LUkmM1M9Kyhec",
  "key39": "2PY3xyxxyay4gENDBniEqpgsf6netHWq9XNUbjEFFWNixYaDYfFSru7sYTivA2ZPuQzRCp7Dj4wLX6mFTfU9k67f",
  "key40": "3dxfRo9uc3t7925S7vS6nkzrhfbwNDjDSgQytDhz4x59zGQz96FRHcHXXfR5ruASh4gVpWp9ohW4hic5AD4DJ9BG",
  "key41": "Xm3EpmXLJBM8bSqxapyv7ywXJ9SQYWFyFUsc2t7uP8iCMJyxMktpQABJcDvVJgeizJirMvrAHDiuGepzeBmqCYk",
  "key42": "5T4GeGGFQxExRviqanL3RDNJH1n7BtdvYUQPhyfNkNh1N3UCYUYPiKccFtkPgXszLQaCarnFkCd9ZRoUYWhTnQpe",
  "key43": "ojLAB692BAc8x4R7pYxXef3tuBkTcq2ecwU83JTsQEUfc7vXhBmiYm7QgJn5gCamienu1gXZSrqJyhzULS24eox",
  "key44": "4W2YiNgiwa1tBz9HNi53NFbwLc6MjvzZh5QyE2cECTeX3DjpNtg1J7MFZtMPSAh6vyxs4giS5J4CXnWPPJACVNgy",
  "key45": "jEapHTrWWhaXq27sYU6W1NWB1QYc8iBv9qJmYegs943H7mxM4s6PakMR93ESMpjUQVjxWHmFXeKgWRjJ1Zi93EG",
  "key46": "3MvtFmjMeFBqPYTRATaQGMfbBy7LTVxuEUJeA7yHBHFiTSTP5G6pNJ7kifyDWvfYK1CQyS2VVcdgUaoNmPdDFrxm",
  "key47": "64tqqVFUVjNPQSdW99DuqGwLdzJZsiuHtFZ8omcrU9fF5T5GnakG8RN7GeqzC85GveVi4qW6RuHhbAQPqwYK9AXG",
  "key48": "5QW9agYUxDEJhVH5bzdYzgftyQTr4wStGNuAQGeGeHb7M65kdwi2xESu322QByQqEBNdzGPZnFVidrsbS4XB1ny1"
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
