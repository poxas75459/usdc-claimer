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
    "2Bxx6pYv3Dj7p7YCbB69fodS7R4Fyiogw4e6XcpYVcLdmUXq18eUJMzCuxJv5239bZLi5Dy8UfraEBNm5FLjAjHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rfhpF9q8rAwiSYtbKBQ5KCTsL3imQNS5geBzEADfAH5fDk4TTEhRmkEKQdiF8kAM2xBas4GqTMxkUnpsoYigiNc",
  "key1": "5K7p1vHUxfWXkxt1xrNdr2wrsUxFwWHKVamN9FmdwPpiXwhoiqeS3WMK1T4ptDdfMX1puuKKivxihkzB9e3hQGTo",
  "key2": "5dgmGCKCZjxEmexJpbEDvQuWzrcFU2d8mM2EBSxY4c7N8X4UebwPkVioEsQmbP8VKEkabLyfAWm87ZgyTrUrk5ee",
  "key3": "d5h9xHobXZGGGT3Dfv6h2JqpmdmV4omp9vkA1yjc12LsjL78B6XooHAirfi34HBD2EXxEQNqmHyquaDeg7SEosS",
  "key4": "AC6A57QxAHji8NG767kTSBgNPmqMRAUGQTDPUmi7j2F1pfQKv3Xx9oMnNBfTPS3vxuJExmgtjrLVfotMZDgfPjd",
  "key5": "5MFdeaWeR9LTbVxpAZtPQnKQgCZiDcSQ9uGaYzEQvvykwBFqbs5jj3mBC6YpmpTkpZXtxNsUxEkBovgAd79TaCQU",
  "key6": "2Xnxs1xa53nJMR4BRLw16ZPvngBfFQCaMky8cLFo7VUKu5vFJi3f4yBCo2CSyPJUdxBpdUzseTGm5MaVsz4KvE6G",
  "key7": "2tiue5Due8GWwDKgiHAL7w1MoUyvSfcVfud7VbviQ9XgHqhQ9tKVdgkKJZCANemY7LW1tf38fJNZXJTdiWJ9xjKt",
  "key8": "4shHJrZKYzmZiNT77wV972GAQdgLMbCFVAwhXoPQJCss9WUbr7jcky2GWtZ7wqoipcJtGqrX3N4oVc6zqoywk99f",
  "key9": "yVvuvv4TRT8Ey6utW8uC23cgYUsDLe1neuWAodDqhmkvocpThA5gm21wBknuL8YzmroWZKbyJP3G3ZxWg1v85gh",
  "key10": "4yJ22NMNqcM7egd5sFjxencyyYw31XvqNxJKSu2Tj34LZWzN1VT6kWCM1YXag5cu1Y6N1To2BWNstkekxCJmB6ok",
  "key11": "46DDkkBbGfBThhbHZMSVUF4mh4GQgXgYZ4vNjZCctZRh6ECNGDbVEbPs4TYiWuApSZC2dib4VEeiRfx3veTeMZEo",
  "key12": "2vhFpAxw8df1sC2YyAqYKNJkFxSjcxa2zDaxubckwkNwJ9geR2M9dDVWWZjY7VSUt9afcbBwBY7v9ns1T1sYSCyP",
  "key13": "8SEufAsNUTFuT9gusM4QusKKDJzkR6vKqk2Q1msj5dKP7xmghwWChxNGGyRQZfR5qKtPaR2KBNH3aruQ62utKnW",
  "key14": "42aD2zVtJdQiYfuUxvc4qpA3FLut5phMLadPpRvqXMaf4bp56feXqsMiMFGFqiwWkjopRA5cRSXLw2Fe4hcUzHjg",
  "key15": "xu6SF3uyV6tFmK31fr51wzMhHCsVdwRC91vG163QtEQcFprWCVKkUfDoU8FFV3vF3ueTpQXL6CX8NrYtAn4grfD",
  "key16": "qMM2QQj5SE3M1BsWM6AsPdK2BQSa8neY4J9uMZQ5dV5DQeqP59E1vCEA77RWuMNLZddLWj4Dn9gySZ6idzrsQyU",
  "key17": "4cFHDiWSSY8LPFU4sUWcVvaH6qMBoL7rPeDgcEUpqybQmNtALXiBKhNG89SRgFMAFsjcDMWPcvhmyEkzozhF3tmZ",
  "key18": "2j9pFEZd1VJG1aHduKdXa2cEL7tBERKcHRCeEEv25Khtay3ZZJFT4qxCzNFqt76maTDK7Ly46S77AN6YBK5gSyEn",
  "key19": "3zHatVfaqnwhmDsRnZpN5ExvQyVEQ75w9NqVADWKqvLLQQdKV1T1r9uJNVTyDGkSNVDTCtqRVsYvnqkGgRSM1n1v",
  "key20": "58w6oWJuaLBn3dFZ2GVn1ThPpg4p4YcqJ9krq5DpjnKEmbuaCeMsUofv9XBekjkY2B14JPzuaUCo3ct675vZuyHq",
  "key21": "2CmCiGWEArwhT5Vdi8YUDFNzYHfdM1KDikdF9HwTGQoSVcMvcnfArU3owT6paqhuM9NgafPsHH5EgsDDSUg3Nyj8",
  "key22": "2bn8RUSfQBapZdoAD55kDaZHXhvRwcM6Zh5EctA1krBAGjgcijkqKe6a9wY8yH8sz5oowhTEAfNizNontPpVDDtA",
  "key23": "4gvntVzYTLEUgeebX8tD2eWWFozNdjyXGJYQkzU6PfA9UVTxPqwiuocTiRvALEPeiHuvQYHZaqg5TeNEuyrzEpAh",
  "key24": "4CP2eoniwnK2ApbhXFF9QeWgKL9tpHRZTWeF6e8uMhDeHgb5nZ8ny7ZSysD9NBfDBUJ4U8JeXozs9ANeCdXFzMBr",
  "key25": "5pYtoRD5pWExLjNCC4sUcpHo6BafNuk6XeVfFDCpaHRiHyeCc7XPGBo8BvG4RLtk3Ytj3JyPneeMHF99GpnApfY2",
  "key26": "4UDeAsw4cydhLckwHPAUFt5tW5MJgy1es2Kmiwmu4tXZ791wJVeMjddgmR8v7R8CqPFLxpydgpE7UYsQRPmCTxKb",
  "key27": "Nm7sXrE6PEDsLAZwjAkoXAQvJSLJwjTR11NmY5Ffxp211XpGvUB3KHstguufNXnTrkP3Q7hMvw7eD7rTunNp3KM",
  "key28": "3FYT8abvzNcjb8cKsFBVFknvtuBJ2oGbUYy7AVeBxK3uei7gez1BjyXLmYRBe3KBbqy9w8xTwW3ETBFwpQdBk9Vv",
  "key29": "2Ffw21d3RuHU7F93jTQX3Xwzs9qVa6okckBWxy8BEydzvUen3n2Z9LNJSZsJ3JKLnFdz7baHPm8kbTMzG7pNWWAW",
  "key30": "5ubXHEgYVnEi3PUXzEeGATPpJ9G8RGrf1mywWhhRdDNkzTb6FAvUe7xbYgwDjK5RsWaG1xeSjRaiwQo3oMCJEwee",
  "key31": "3VpTupsoiWifU569opoU33KHzmxgzJoWHncJg9aeTj33wCP2sf7bGyHNFnWKLrSJSv3cANmEPHZDKvB42nZCY4TT",
  "key32": "3DPXoZmvZDxd3qfmg3QqTqhuNsZao6VgRyUucKZVo4oWhBPUjGLC8rjsj4tFHJ4BmUDPbe8qKpeBH76hVcYPusF9",
  "key33": "4ZqqYM7MzZMy7VRKHDSFR7tPDs7rRvjzmDLWovLKp9edq7JdXdjAuZWJMpbw99mMZZdCENjrHafZE3xhomkfrbBK",
  "key34": "65PzufXGM4Jk517ALyPsJWuzJEavUCnzA4XWZK9HQewFos3jqSBzyiPwew3mVQ5QtrLdAyqoZBZyFiN9re3o4y6u",
  "key35": "2jDvVHR9oKe9rkXrCCBB32pEskx2sqyNMJTombMSYHLxFcQhQEXEhQsDmekLWjb988E3SdB3dHj1nc1bSNjsUXs2",
  "key36": "3Px31mpQGrhkBatXYzcXDprqoD2SqoK2eLYAVHNjdDkP1eq8jYGVLJTv65HZa9jei1zR79JikfdXM5semiumo8ME",
  "key37": "3cP3Yb1iW5Rt8rw2ZxGubAd521piEd6j5kCpMjNj2TNrceioorPhgBqzAnL31PZkCj4h4ffDuC6yjXpzKFFqPqsj",
  "key38": "3kVup8XbP77soLkGUfFdNTt1AriKWJLgstAgUsFQN3TDzeD2HEAo9EDuquwXHvLsP9BrCdHcEjvSEEuwFy83agoB",
  "key39": "4yE8S4i2GnZvaky8chsnD7HCKrtYq2JcFR4oAzTW6V9J71BTcWaqfwMjaZt4g8PjZGqDeNgcvbf2moTALeH41JZZ",
  "key40": "n3rQ69sNkANUAWPnAYv17VH8YANZQj92Q4hksMXocAUraJtP3nrSLB44bpde8ymg5FJtVfKCWDyBkGXPaAy7V1j",
  "key41": "29qDC21iAFsaMVnKJeEUMKFtJq95nTMJH5dVq7JxcH7PwCUYj259LPUrYrhnGUXw4xVWH6pqozBjGR4FkXvtwHfA",
  "key42": "5a35nZx6qLpzLRoQQuUsK9Awx5wDKs38SBCsX3o6aLpPkWs6rxQwrAruCLmQQDSpXKSQ6HfzHd4CXyVzdr4GfCvJ",
  "key43": "qzNdUSeNNRKiTz48oQC1BG25LvQNdqTetZXGmssZWwEsnC1K8L6b114N4g6e5HE3HiBprpAeJSRYo34bE7yGmH6",
  "key44": "5cNh7uo35d9DJeYhxy2ofp1FUtsL9DCtXc1shPtioprxKPe2Z7No7Kyf4DBgUJ41qxSP4eBML7eKYN3E6XG66Gbm",
  "key45": "2oiJCHW3peN4kuy8N5N1NGqUD7XQ6iE2iTg3NL1vYUtSgeKoCQzedYiSMFvLmGg88Sxi4aHaQ22bokQ6CxC8iW8o",
  "key46": "FTiev95QuvDTRDu7imrCdzBa58w1nkCVVGBC3RM8ZTSCFwBgqSwcxKfHGvdP32E9iNvZbpapk48r8kGgU4yJ4wu",
  "key47": "kuLfY7EPn8tBFLvsEnvEVyBHxYCEHfaFcSSn9RfG6ZDnL1yR6iiY95MAQREhfqMG9btJ6hrWZGtVjKhgMwk8Tji"
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
