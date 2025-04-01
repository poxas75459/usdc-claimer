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
    "3Mp4ah6h7oomxxdxXLLoRQFhYESq5oDP3pZWW6d8RLaYC231fo4JdsQneuMqqevMgBAcf18wkhsvoEuQCSYWRvLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VLJ1NRDfCakSWGfes5vPBty9RosC5BAJwyAVa8G3RY1SscsW3oE4egvN6AwfFtiMxVBdAcWccBpH8riJ3mySYid",
  "key1": "3iXrbBJpZTFikUZbGkJVfMPujE2MM2Wkzemdhs9Fpi3n8DhGACYhJmfZDB96mbsy21zAh8VkAyuuwoDr5aMyAq6b",
  "key2": "48fgi5i31V3wHnjhh91vLXvDJDUK7dMyamiYRrw6BjVp6HRBAL22Qtb9cRCQUd5StiUo8hDkZLd3HMc1SeWJy2h7",
  "key3": "raFntr1NiRyG6LcBYPEFph8VNwB69Mnr54anJXerPh8QL2kki3hrWCafdtJTC1vMqKjzaX6139PPHbmBZP7oeog",
  "key4": "DmK59Vpp9p8xiKpn3LZVxbFpkqToQk7hbyBUAdyF3MCe9s2aF7QqfjoSWUx6zodkEbP55KNNJ6TV8j9ZEg658oT",
  "key5": "3dy4F7c8QsdUQdDCtve4pzCjEuPv1qgwVMUKYmEXYrcGCC4V5WRrtf4gpdA6jKfP27BSEMXrStx3igjx61NrWw86",
  "key6": "4MBcyNxaZRyUj6mNEhT2dkRNP9SuZcgBvKQe3MuLRkX48uF5ghc3ZaYTqgSS4EvNQLjkJBqSaRUWKQaML88heZjo",
  "key7": "66Bhqopuo3ERNidjsPEuGjGVyw67V7XBNZ86VrSfDhoXPX8azddYjrkWcxwSHkkZZbPWJyy6EA7HkvpzF9pcp4wb",
  "key8": "3FRE3uLTdozG2srtoFNydusRRhfGhTZVQGuwVSDdtaGBSevWU6brfcQFRvvHQfgRedQQZeEdFyxTxooWuvkCLeGY",
  "key9": "2jw8fDvqTPMADEpG5orBPEhQTUvWXieo5iqfwLwgfMnACfCvZCkpmydhQyTA8R1Kh8qXXzoiKXQPYuyLs7JyorPs",
  "key10": "4ebRpzN9khrwrRjviByQAsqEKFFjYZTNFH7Z7yQ9d1EvQAqiFi9sV8B7jsgtM2Sb9JzidfGPSzbuU2Z6CTFBirCp",
  "key11": "42Fj5bDfwvmh7E18fvhUkGGHYWphViPcCZBCT8dRPTRsLn79qSU3pPWQ5u4KQJkqPE5uUtU42osgaTD6cepngBQB",
  "key12": "2EVt9x9r1CimonegKQx9VKr2UcELFmtwM5DrBzipBzU8wGQSj3YhNSNjEUaS1ufx5kjtV2sizRjDxSVxjNhKSDd",
  "key13": "44kXUyT7XfDBrXeEX7m4sAfqh9VMQ88Ui6Zho5LvheAraBh4Fei35kvRXqfTUPz9jnM9DbjzezT6hz3U6pXzQxjg",
  "key14": "482fJSVLtQ5CJQrp2zQ9E4QDJM9TXJDaNsB3ufBNGijLpFA6D99kBYXfkrQBTh6u2vbCFiMdytso9FYwoMFDffxR",
  "key15": "5pDWqWzcwGZuyhDPBWpaJCGK7HQjgKK4jWoizkh62geWX1TapA4s9mLj65MWtgjThLviFuBmBBfuScweBsJLYnPY",
  "key16": "3EHVtgN1MyjrLGLEG4FvKgqTEGR44dhvCYfRkVNtwFUXgSEoJHQXafPgYEVgvDo42DihybshScfxpGE7h4ANxqre",
  "key17": "NNiBRFBRCijha7W3UVJKpXNK24ZwCD6UEtMu8X2EgjXiwNEheKh4QMbP9n3A7LAkbgH4MEH1APksHbJCXQ2NFSa",
  "key18": "5Jtre1u5N527xrG4VQ3M8Gj7dziAA3gi2s2HmQrJBhzgPE6UCGRgziBjyguN3hJxXXNoHQgjQeo1vatNYquiqHQ2",
  "key19": "4JkbDwd5PqbcnBSMS83uQxrRkoukQVff9VJRrbUshsdgdWasyDjJ9U8wjwGXkMEAHsvF5aCR9WvzZDhBb5QUSeef",
  "key20": "2z76PQsYpvuaVMBfV3VVYfRQqFqouxm8AQDqRbgfvp4Wk4bE7CpL76xU1VjSgGtpPk9nSWrD5BMC1RSFeTMuAkeg",
  "key21": "5p3j6vTct5WCa5F1XTbQC12E2djjEVNgznbhWtk2S6o3EZNzqQQwbFviJ9kqUmWpM6SB1KBQ8T32zgciY4PRu2gi",
  "key22": "5fHkMJzqthcjjsRSSur4DZbr7tcy5ZtuPWbXmrbgKtFcZdjRNFvKsdAMDdagX23c7YYHyFAg1cn4LW4GpCpNo87Z",
  "key23": "48UvD13Pxsu8C9PFuXevafp8hc8DfnG7yZZHXcPzH2AJ39UoLDGwJsHysiKGprgRsvLGCpNYZUvkgJ1Qgqd9pvAb",
  "key24": "4jk262pRkAWjGgZmZE3tFAWzEp5smRruQJuWfVRsLx8UNiSrKUqMUeuS7Q4SoZoeyRN2i52EhYKw6WuZq96VyBCV",
  "key25": "5BZviCcArEQfdUKuUptPdRrFDX8kkhTvkyM9Rj1r8vWfAwWdhyuGEbqBWC8NxkSEhvvyrSt8F6EDWk8TugCtaNr1",
  "key26": "4hzz8h3CbJcd1ycZvWKmUATUuN91AKvLRrG76EnhpYN5WbmBqGpKdfWq1FEoqVET62HGpNUkPtnWGVh7dkaCJdQN",
  "key27": "43etF78iwgSqHM3HaqmeznwoTgbhKtj9wc42NgP7xSC5ADmJJvDP57e8twmP3S16x1PJNnnLVuyzNsJZLx62y98w",
  "key28": "5fHcK5i37LhQbYzz3WfQ4B5o2PbeNhP8j1qUCB6qG1TkkbijiGp2CadBnGZHkYZF993duX2Q5k398yGAD5PNpx67",
  "key29": "3RTSuwALB5nP37feJnG5VkG2TwJeh1uHL2DqtqSx9Aam98TJkZt2gRCgW3nWRFUx7HvwiX4M7HSTBNWiST5vMEZ1",
  "key30": "3T3fQNv4hTTGCErvj1nAyJNzj3E5VX8RYwLnFC1GKzcW1qtPJUz52hJFspP4gWpNc9W8EUAQVqXGzDEoxgF9Pw6d",
  "key31": "4UFhmwpqcrEQwwaoGjr3Pii1eJKPqZRcgaj4TqXJ1CUJtqytWnPfRLxM9QwNm3uVqECCDrYEZ5cDs45agukmetG",
  "key32": "5kq3W1HViomLXEhjF9kfyo2kjR6F7NqYvfjy8ELTszbfZ5QvxReo1FpVNVcnjPUB9JeffjfP5chppkJBADDvr1eV",
  "key33": "4NQSSG8dde4wMPZh4RVCqmvUvGPPqnmHzZqm8rp1r9pfxbFJadSrbw42kMk2KgSNfgJ5FyW5VigmUkjeYExVRSAu",
  "key34": "2cCULJzLnCJZ2SUyjYUYd4ufT6E1FUPWTdN6ppWgMtazar2GmidTdWWZBit7117qerH1puqk4jpKApoWPXzg3iGK",
  "key35": "371cCM88zBmTyCrsXe7heWFUKaZfW1DX6D18u21sCec5iioeBiz62CAePva17epu9MAjEigmM5xMD8t5KPMhyUR8",
  "key36": "4QpbC4DNi3kbee96coZJkSNiSGgi8ygBYF3doGna6Kxh5osdKWeBQZRQHMdByfShywYBpDNCBzLCWGnqpBXgMs7V",
  "key37": "8T9A5hqcUaT2CZEKXZJM6676k5AdAzg4HUJzScPeSfRuevep8S2uZ36kAw9of4iPm54kt71JXiGhu6ckbdBSpDv",
  "key38": "Q1Ee7FA6T7Pr21pfNbgiTSnUwRKkbr213qUwKwwCMuFpLuGotfPoY8zseM1miyvSgCtwJe3479HhS2bfYVvHMnW",
  "key39": "4Ed72KV2HvPiWugwzs4KZ2yeRZWnHKjoZumXaBfEE1BWhgTG7THKbqRU8LMZYQxyt5Nsnegqh9XQq28gMCceojjj",
  "key40": "4xbz2T4bLT3MAR3yDsjCrUhZHhSGpswzNqXguqV2xt8fphyBedXTx7TyZjpcUmXitdX282ukvd1VSTRXFNSe5JP",
  "key41": "5tVxHk1wmq3UewCKKRVZNNY4mweAYgARFoSXthjwYTCxLVUT4kxGv8bxF2zVDaxexwUGKNSTy9PFMiXDQqZKq6xx",
  "key42": "vrzrYBm31mZUecBgehZeeh7b5xDYZ8QrYPCXGVnKQWdDknQbCWExA2MfEXdpDQsqkuuDvancs9BGjYJGsM5pLPh",
  "key43": "5HrbBZRbHNUWgSJqhafZ3zJgZjh2MAkDU3gCFivjTR5PqQ26MQxtDqtjH2ipsh6dZmSbf6NL1ih3WQM9XrQVJJah",
  "key44": "5wx75e1899bQPdaC4N12cqpqWzTaUZ5N4KUPmrkKWAiMm3d4ey2aA3FwSTXnjW7kwcj2sg9UYqEiBPTZqmvUWbEz",
  "key45": "4AN6qHEwB7puiSqHAxnruTQRxkNXiNPfMbUei7CKA5UdLQMbrg7CpbfULY9cGtmeSnzyA9XbYu6ge7v2D1bb1p6V"
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
