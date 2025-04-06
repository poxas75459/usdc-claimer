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
    "5CpxCqHK9gaYvwPhqDvqFdhc1gnseyc39F4qTwJGURdaS8Q6Ms98ZGmyZ7Tu8PSySD3HnQsfZMECH4CHpm9i1gFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EU6XVqj78xdL7zB8ewpztgnjgohoeFweT98wmniGu5VBNtyUQe7zbq3CiJXNWWbCVKFKsoSrDDJ7Sgqv6xjUFfo",
  "key1": "2jNnW2Rxdtj7mcvrRg95MXDHeRk1xwbqNWNxWQUvB8QsUjvc9i8t1t6i58B9YNQC7qEiUCkt2bA5UFUcburg9nyj",
  "key2": "3T4HV9StP5uBbkN5YKVGGayuMHGXRGPDm5YMydUJ1BGeJ1jfwR3kB58HuW4ZkuBKCbwhawEaD1fay3yEva33yZ1A",
  "key3": "2KQztU6R39xJXP4xRUfTVYaRPLVGke5stFgKPBGGR3GH73c9s8Be2gYGtJVL948AXyc3zy5sYVgEknv1nL34pDR7",
  "key4": "43Bx9D9hg37AixWzvM7DpjCLAZrWaLFjrqJkFB8JTBF4uUQRCNFjZVExFiGk9zS2NjbeudggsP9X1RBf5i2ca26R",
  "key5": "z8bz783ycS48rQJsGamf2RGa3EiyLv7XRZPxQaNMUUMW18t5HcJytu5M31vTig1riRqRFHhApT9LnAtrvNpdRZ4",
  "key6": "44vXZv6CRo5G75nMVd9U516crnz1K2d4ntaY8FEKFubZFwnu3UzzD4U2KJzbjmgTWXPdbvEMF3kbhyJfAyhKjTkT",
  "key7": "4tPxu9Le897nzFvehSUzYW5CTefA1iHYHCJiGkAbUDZ6AAiHaT1saGzTdFJFyQu7KCEXuvHd94Ab5azu7qvEkcZW",
  "key8": "df6zgtQLc2wVja3CwoXGu6WvE143119yVFRaSCpHmzfobLqBtBk1SZfoxjpetzwcxp1G8BAFkEedSu12CErLLe2",
  "key9": "3ow5XDGiKsjqPxGevaLhMzuSox4SzT4MMPRCjQqmG12YNtwcEfLVAYS8qPrTXM45x4gnyC4om8DhEUdr1GsFuLKt",
  "key10": "4othDWNYVoVz8RQ9iZMzB23K7gGzY1GyP2zKGnyFYzDF9VXkYWAtsWZViZGFBXqAQFuV5WndWMZ1KSSj4DzojPsp",
  "key11": "5kHSXeL6BKXJXoeSmoCTU28Jg9xVRjdWzTPQdqTKvrbGxVJMtShRVv5q68NDr13iqwsRTuqnKZuFudsE8JvwVwTK",
  "key12": "2bzTCxdiMJ5dn9tpYqdfsAmjiQSUocUjGfkNfKgBQviHcs354tdYiRuH7nSYQcftUDjiF2NdcNkAcnN1EvJ2pn5t",
  "key13": "5BiHAZEpQauUjS3uF8oo8KLosvdzTJXMwhYtenUtdXpmvUC1FkocKEY2WbuYXTuaWhiQNp3SZThpmSkReouHXsma",
  "key14": "5JRRDVSbDgz8tQmSzcWKctcP4RJk741yEqsJ2DtmyhdkJtK4ZKRZdu3KsX2e1PnVACoxGXA6KAPe4htg2DuR1Keu",
  "key15": "392ggB5dSyPNCP9KrG2wf2tYFhDZnauuSa9KAwPBtCP1JPE4idiexXfP29zvj3TQHNxFmJyjKrSn3FpxGkr9Uaz",
  "key16": "3cPWEYnfCrp2TRgHTy3Vwc2634T1SjZqqxvCQs7V4sv5iHcoUtXgqTPbuBDeymSgwp2n2GkNP7xGaTbBdmoCrg6X",
  "key17": "5Vj9HXgurCJeu41WGEdsXNSxBLY8REYq4voNTkoz7hyvZKDZ2DtWziyJ35DTTpvYbP5B6qWxWjRZtoJo8iJL64Am",
  "key18": "zDaDjyXU8Xm9GXxK3c6jYDNEKKdDdwrZhZatUtgG5rCAkTrfXwmHxuaCCHKfNp2C87f7sCWn2gLw57D6nUHyPNd",
  "key19": "2aKsLcaC78HemWVQADf2MnFZWgdTNpDxgNb28nxBr4rW1k4b6HxK9wEq3utVAVVLJkJBGSPkAWC2K3AtvV97LU8z",
  "key20": "5kNND8eZHaUNymUQpdZSyu2eL7mtpuUmKVLSC8iRNMTV9JUUbK97gHM1hA9ag2EsHCkG6CPfDHHztpaiQSkcrpqS",
  "key21": "W99iaqkXgzRTaCRTgz4tYhhfH7dEspVgcuhn4d7m5UMwhJzLfDSUQMjqq7ic5VQZWWUYWmMd6ZPSaYwRNgRr2jY",
  "key22": "2CBEU4wFSbacHwSnsXo6XMNf5MTyi8i3BUYxHiZ4AuW4qUNe8en9ZFwDwbZgGBED8iigTcDEEHiGrkbH6qx94rdJ",
  "key23": "5CYcfeKU2oRCYQ42zsEA1WZp8wuFqxWHCKFVeSnB12QExQE6WDLH44KL9TQYkt1V44Tyq17cLCxQko9q3SQHj85s",
  "key24": "4v6ji4ZWv91k8TwQdGkYDzhM5CY68J1QyBJprHw8AiF5S1fCqbGrWK6jWiKxLYbnMn3PT7aWLroU4vKA1t6nK5rw",
  "key25": "4NC7owS1hmEQCQg76wpCaw8mBEVDquPFXFkjLpGgpa315bSb6vA1qSxa7shVQ23EMZWycuHekbZakqfZJYWgsAsY",
  "key26": "4RT2LJzMZhVQBrHCReE6TDtizNrmQdjGUdBuA29ETqKsxvN6RtYTXQoZwExKTCHjUR1HPzkue9UDuKPUPzuvm5mk",
  "key27": "4Cb8KhZ6kCq23B5QpBRfEoYRUwwMz2ikJ8hgjKsFmrBeZwxzEWrbNqzuverqewkGCkkmyRQV6i1iqPCjN1dZPGr5",
  "key28": "33m7VTsvQPTA7Ru9Gjr6X7eFbMeRXwM1WruoyjzqShoYFcrKpvZayuCGMfbsiACYYCnaWy1hoAZHuADnRRd4MPe4",
  "key29": "3TiX1y9XbesxePtqosYVs8C2hwAaY9e1R6NYmFQkwUhka6NxVoiZDT5rzuk4pAHrYejvSh6vX6yBvEbBa8snjFNq",
  "key30": "5scnHLg3wntJRnUesKvxYck7cSZ2n6o3rhyMLyoUAwCZou8CVXxBy5P3nw1zza7F9t2yPigra58FMP3H4zEjtxae",
  "key31": "5zdHvLuztZJWeE2L5zXtuencX5JFdvEbGVinmFgVt73wJCg7ceBCrBEsprDJAXNTsmyqyH9w6qx5H7fnetJUawcC",
  "key32": "2CSXCByrDrbuXoCfKdeft3D1hm8fhbZRJUm7jX5rejZWbktY6epqf1oDJtbKUv5V7znNksJwSGZMXKuHnJFjASg7",
  "key33": "5KepZKJsXh6x8g9mit9LXDSCpYpmHBTyJ2kGeTkpNBtmh61YE2eqYyVSaw4ikc3rRE7zUV6nMVomncQYBvZYm5jZ",
  "key34": "my7vzBXx9Lqy1t4NJKJDZyJ8gqc9STD5dCeKpARvgefkPtA82kuW7FX6oh4CU8uavN39HZiAkza9XMow5mZe5NF",
  "key35": "2v8RHzUnqcFU4CMqp2oWXFH4giP4FhoCttnVtsJ48T4eJzjdHgsBVuQwK5ZDBFioBVNp7BTFL14cjeJnybwmMo9U",
  "key36": "V2VkCEq2McPGxUd6f6YexRdpYfyzd2iUqoXyduXpxy6jnBfgZkEBHG4f7qDfXG9ULsnpofXpHH4Z4rApJc8GP8f",
  "key37": "27sGNPWLmPpkGbWaB1djZa1Ge1L3yRPSad3em3iDdqdF91YRjMpqKdNSX3X2JQBfEYji6pBgccSFX2FUnSoG6ceo",
  "key38": "3ZWPkSy4v61QkJq9S1YVKoSzQtFu82PyN9gDxgs8ne8ubz4gKp37sTMTR2pVB1PPAKeCQR6KawayAjXF3v1ogCHP",
  "key39": "UqeVfHXc1beYCFSuRbKdSjyFUaDqCCxKWQ7ENx4NbymdKnGrwXP4FfpUBtgYvdz44Hus1YZx9XaRcRa3DxtkRmu",
  "key40": "57vx3TQPBL1dnya9K8nBwLpjGtLiuAKVP4Sc2tEiyQkJWYyRLkEewcuULJBm4KDoFk2Vnt8vmaX36eyTyXcV6b3o",
  "key41": "2H2eBsfLxsqiEAMZGwsyPTT2Kbq99ewBip15zZrPBpakstxov25DScq35Hb8fHuR1zkNZWv4XvSctXj2DkQZMpUF",
  "key42": "3cC7FmWDkqJ7BprK7FXxCKK76TdPSCEr1QTgSVov1FBZyrYbBmjoY9zHdd4xc3vmmdxhspAm94UPUZH5yjVAt5q8",
  "key43": "64Dw5Zngxb8zVJ865eADRkbpbPSd7a82gSUm3cJUwF8V1Rhw3XJ5tsF1PYeQyAyfwauWARrwsGwrNkBHumK5iPqS",
  "key44": "5PGUmsPqoKWxJnNEa5n25pafGDexv6GCVdZTRshwkKy6h52AHkT8BQrkT3cpeuuseWRSMbFQUN12dNBrL8Hos6yN",
  "key45": "2yuytxJtEzuQWA8T53NPebjRueQEpa9RqsJ13VcJaFXhJGrxyofu9Y9xSE5focqnwWHWYxjxGAq1Nquex8C5vRae",
  "key46": "5rWahnZpPbVnPkRSbNEm2Vz95DtikGYD1sQXvUZS9ZK4mgyGh1g4oKdD2ATwJZXdsM9nFBB9fbGwktp5Qsi3RDmm"
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
