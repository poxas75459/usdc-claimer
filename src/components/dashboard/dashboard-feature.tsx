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
    "4oDn9BZ8nbtkDRpTh4KDPJbbuHj2aFyD6Axj5czdWXTYx9PAJXBAxQdWyXPVxuDPTF37x8yrVyhqoGJGmcW61Jza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nvTw2hnqaHtJ5V7irZeTJsutxnqqWp8VUUs8xPUnkAE1un6pqZX83vJfbhxBrveAtF8JKPxPaq3M2xgv3rbUjxy",
  "key1": "cJ7NYxxYm45ZZtXGNUStNEqMcvG7pcxDngFVZqpkELSMVtrJCRt3NzcRdoMoL4kf1oDfgWjv44LGn7p7avy8XHr",
  "key2": "5UHD78d8nT1wEiesGKyUeDeogDLSamM9Kcp2yAdgCC3bJ1wP74twNquKB8Z1FSeBCCj2HnfhG2xRCMzLgbtTahey",
  "key3": "P4R8fXGeNmdY8pYtH3tAYqn2759D2Am88t9XRwVfWK1sKJjAQnaVU4vEu4LDF7ESVKAg7nrYBHhTCJouHnYcVLu",
  "key4": "mvPk9bXa21zKC3Ln2umAoV8PfsNJKytnT3rnZjgQvcvTh8D2KPjaAyuL2VBE4dDLMEFWcdEiGzXe7yDYCFpXrun",
  "key5": "3ox5ZTZoG2RGT8y4dzbAYf9qeXwGynMhP7vCgVfdRGfhiLYrbrk8XB2QwseYjo7PJpp5xtFmcwwngWiXyTsnFYWh",
  "key6": "3xn29qPA3STEGvw1soRFmbHAuCqMUReY2yp9DV6eurfCoqYoU1RSAifCGBKGrQX4WX4dnHkNtPtmcV8UuNg3vzjT",
  "key7": "7jYgAdviWogyJ7y9BJXcUKUKK2eZkXiv8ZFgZQ5dvLrooBdt5AA1Yy5ZqzzHPMChHAyfQuaqwLkp8sYay7M1mTj",
  "key8": "hYimF4Pcj9rAvsr9soZiGpBtoqxvpFNadKb8s1XJh4FtXu6bj8LWEzDPzmxiTssTH8RT8zxNrrJy3FmHCgmJgBu",
  "key9": "3emRf17UbrwHiHd9Gr67CaEphf5nZaZvwbNL6GXpskyysA5igR5H2pJ4qtoEsuKkhsSbWwFgRRR663hN4wzMbgDD",
  "key10": "5YJuimzAPGBMN7Fb41vw6feoYU3nR48WebMqK39D1LofXrXpedcVFoFJ28tz9rksfGiWQSPkNAgdBuaNj11VKmhk",
  "key11": "4gVmiTmZAxamNQ1pySTWAZiTMLBPMSShfgRhE5U3hS9EoiN27vTFXPNz6GVkrwJ3wN8S1ioNNe2HdUdcgtJRq3Wv",
  "key12": "2uKN4SWgWLu75xRa16hehsagcbs7Z9Fee8wDJWq25NvYLHYDMTc1L5w8mVXHSjFSuzT4ZZbKeu2TcvaaSNNw6iV3",
  "key13": "4mneetTAktPUmgaUqMLS1C5L9UHfPyA5eKkrKjEERNWfApRia9vcwukFffVDm57c4EkKjvcUhoboMRAeaYQiUYKX",
  "key14": "4S23R9E3jvULDF2qWmV5bDo1YGqtdBw7qFB3aaMR2PjamCTj3wtGXZdp4edYrJdhxRYdN547EapqP8qScCW4i9GN",
  "key15": "3SZzT8rSzMfv8aJkU8EfBnFyjd1B619CPF6Qa4syi43oFrVWxPUMQCWJPhHrm7Rn8Zkd61UEs3yEdRQLHabZ7n2X",
  "key16": "539dRrEvkYmP9PdUi8ucTvFGjwJJR7nu49eoKr75AKjDwQ32hRNVFngvAsFAkMKJU8D4jSDMaH54C4Nna311594A",
  "key17": "3pziASrZnx9FUikTyiHVqQpijxRGTcdSWGFWevMcLDWg88tcZENoj66ji1ogZsRawTjoH9b43CUKD72EXhuEiBKr",
  "key18": "4W7syDb7wec3Vf9FxNrAD73hgWjDuRXm2BoTTv4nhDt4W1tzLJZGL2GAmtEtao3LncLQCSxoj8xqami7JgcdDMqc",
  "key19": "3zg8GrkXAZrEiHe1BAnnAXzirigLh5e5LkR6s1V93QR1YDJyB3MuQRfq3foopZDfviEm7NzGJRZ2uGxYVJpneZii",
  "key20": "2LeCBDxMMoaympHDrgQT4RjnVtjmocmJqYkwVZd6MWagKGZR3DBUVixWf82fPtZGhF9mYdY3ReuK5f1i1Y71hRyF",
  "key21": "22G4T6hn9RZ61cGPLh6G8RWQUiUVfPJSvqXJdgem9t8oTJdnL3m786zChAQ24AwBSRqv2pBkfJpsFJEiWrRYDUwG",
  "key22": "4TA41jfpgZnMpGZVGfin4qQM6aSGujhcEw1UL1J9i8AZmQFehZzLDnWtBWNrve1EHctJT2U1efSy5yw5yPPbNL2b",
  "key23": "4edUCvittbromWeXk8qwnb9HLp6uhyMhXXFoG1cfLrSkSFTSFmnMFDsyUB1jy76jMvaxBp24TZHzVPYp8gWeAJYR",
  "key24": "2BmnNFix3WXzwggAqTy5xrJSWNMT8LdNmdFjfrCJEq2KzBCsg1JvZMfEZyZaRgbae411wmoXkGsFk5CXtsyXaLPC",
  "key25": "34GnZoSYQwbNZ8PVcno3PbQTmmbdEXF9EzHFnuFCicbrvhfQBDPxkMV6NZn34wcWVyKUJbv9uXAs8zm1VsTwPknq",
  "key26": "3Q5T3hUF9RYcPAHnR2BsCmdKjEvJJJ7N3xidHvYN4kY5Wszwob7rdjnYyMZYdbsLRq2yonngt3oiABWYn9fbTw1G",
  "key27": "53YUys5UuY613nDNBSpLJ5YicDMuMEQgb74XPgFKr13TgRAaYc56miX6FKBjCZHV4qVT5q6AK43dmhCsyi5JopzQ",
  "key28": "5LBanC4fxyDbFZoPY4TmJhYxUZUqEkT5NFbdDfLBE3pFbFPaCQ8KqQaXtPpDrdMFg21yrPcA835Y9gBPisydVUoY",
  "key29": "DbLJjABLgyEdmcSLevcWrUKw5mCZuTuqJSMVttjWw8CE5JEWKw2Yj2RU1WAPyGDzWRmmLxRV7e3wGzUBAUHtGqa",
  "key30": "4ntQ9mpxVu1wxCF6MxEFFWgEZcq3nZqfvUeZfjjV3PpemFTc2h6856C5J31jgfX5YeJHdESAwfuhUK54D5Qn7ujD",
  "key31": "3fhR3F9eXj3NjumEpT5EUedifv1vucg8ARDrgg5o3e9Kh961c4tbABJzgAFC7vYd7bYVUoKkJfpjctegzKp1EHww",
  "key32": "4qFFLLJf5pzHr8niHKKSxn8bqNfVWsyJogwbJLWHWTEfCvBXvvwwY4YVgQHWd4fLGTfVAgHMQW66JApcT8aG9KCX",
  "key33": "3BDF3hu1EZ57fhE3YULrtQGABkZRq3haC9FPZeqH2SU84rL7mLSoAJtJJGnrq89t9KQ6qEcANsCB4fkVzNMJ9dxZ",
  "key34": "5GLNs1xGeq4aTUb6YjFN2AoFrWG9i1dB9oEAuMunRTfDPR5nCuaxosLkfz46jiYsZkxr9JmyhVo1t4G1yacK628b",
  "key35": "GSfeLt4Tj45AMyNUx4V3EUZTmmycoazkG7TgPCHYW34EMfy63jDFC7s1TuYwfKhy88k3MmuvPNVU4Cuz8mi2jRM",
  "key36": "5wxdegYWUaCcCdAreuc2asUsihcXNDAgoAhfnT8ups3SyLiC38ZNeHrEBfok56Z8ChBaar4JXMygrQtA8QnVtFT2",
  "key37": "58EvFdNYMV76H8DzQUfbipX94s5UJCZfL5ApVpv3QoFMwgQ1Lp2XxNmxQetMPAUWR97yrBSctgREe3GbMf1NKksY",
  "key38": "2C9hF3t79PcEchDD9bNKSxKTrdvNWJSVnPBGyGfytfahw3T6mnQku4W71n8NuFz6gu7D93EMWCpYiKHoVwQqTDGt",
  "key39": "3BRUB4JmyTvJwSqZ92YMNGcaCaNu2cN7X4J6xPqq4LdgEZskyidXuK6nZQfycEojoCGiyNChFXshuxfdA1dDTYGk",
  "key40": "dEizr3oNg4kGDRuvuVYtRn99t5faukJbrx2L9kivQxTVnQz1hNTmZbCdZ66AY9WTZPnVtSmfxGrQGKq2V7vUSsQ",
  "key41": "3XRXwj5RVNiU1V5i9dKxvVbnC6NQpXWEiEY7xbN2AzxooyxPPAohyAFuWowbZDX2RXTNapcxiUb4QaMjCQc2UUga",
  "key42": "331gyXyjCiAfGzHJJEdsn2hPZ1g3oFGYnFJjwNfYKVD327heALMAmo3WdZt2CSucLTqpNerj3zwKs1vic17nqC9q",
  "key43": "5jHTvLzg2UvJqf2y5n61oNopoCRhHmHasW2eq4TeRrY4pKihDQMvh3RnTbNp6UUMVA1wyFJ8BktqieeyXaSL2R3f",
  "key44": "3SSJa1yzA4iiDQ65Q2AYhxP12YchXv4LR3EHs7SvDj8kMG9stfMHCPqREZRyJiXtTwsBt52NL6T7kSjdP2ZtUr3J",
  "key45": "wBfUTQ7eq5efyFyLBvAU1DrCuHLRScgecqeCQJ9zHcD4gdmhb5RBZPxiDB7giaD8PjMLM5xejDXVqfbhC6wsEF7",
  "key46": "2TfQ2mnTVVYw7UC9voj6TRFeHn9gvjXkPtiXd5kkAZvyoTZ2vM4aLsWaqpogyXsdyGULx2bfLWoA22WJJSJfDZAD"
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
