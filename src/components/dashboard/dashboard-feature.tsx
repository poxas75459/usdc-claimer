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
    "66yYNMZHaRVJ1AkzwgTLahjFXQYSQiHwyMWHpABJ9NNqULP7MqMVJPFTpWAmRTSHPAfMsUHkpAmA2BszLDRpZvFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yMs8LvuTKcyUxzHbv5xEjfpUP8YYbp1tsPZwTuNeqbEP7gcP313kdePrpYTEw23kWo9j1U86n1AGm2iNdLvuzkp",
  "key1": "2xFZ58F9sXLbe4Gc8koAsDrfjy6u26MYyq3z4aZCr7nsL89UQY4PVocQqRisxrnkuijv4H1BXukMuegZEPoVPucP",
  "key2": "5VMm7CqwHVAAypKiwC8AK2482idZp31SpsXc6GKivRtpVvtSk5RUA7uU8G6e8L5T1X58tbt72uyoYPE7hkJfJQ46",
  "key3": "5784M5vM5Vp3tXB28gDJA2iTfThHZLChj3DpLwj5zLDh4XEdiCjNoFhBTiQY5HBgGmPx4tcenRhTbnXrzupmMAYd",
  "key4": "2W7GLGhiorPSbcMXwZjhKHaavnJCN7ACs2yNSeLEHmqsz15vs1sYTauTM3V3wpxESUL2oqbL6pvk3QgZ6hx6Q5FH",
  "key5": "58SsyqNaD4jFymEzzYcBqgAvphXhqAcSjyQrmXnc34j4eYVnrbP9MPKn5TgiLtsxx4YiSVkzeaeVjo8nBvuL5krW",
  "key6": "2TvnaXtrrCRSy4KHbd3HYGXED9w94GgoWVub8pL4hL3DY78Ax5cnWiaQoW7GKsJ3a2e1yT4VtCqU75Ecn3rKj98V",
  "key7": "5gBE59B978XeENYXoVocySMoWagC1dFdJ9FeiJcfJvnG87cWUr6KCd1fTt9e9JHnoqoPRAojhFzWTVHEoNmumZ5N",
  "key8": "4DJ9MJGab3qKt5dvt21MeS4jNe9b51Vy9aGLfUWh8JrUvCFW6j9uV47qjf5G3bh1EWy8moF5BWFf1n1Lts1uMrgR",
  "key9": "51GueVXGRRuH4obkC9dfxJDmnJQ7LMaY3AduMyS3QogVxJCSwdP33KEuaKJoG8GHjmE3uRzfCeumpxpJzr4b93Rf",
  "key10": "2xYrfmd4PEuyv52tRPnKAweEmZTd8EAuH59nZ2y7GN4avm2b6unBcTNHbfUku6dxLZbJWXX5GAA14k69AGQgf7yS",
  "key11": "5hSEeQLfu2aBSYuDorC4xk57sxJjqAbMXhJpFJovsenvwyMjY96jo6HwRefkkXpT9GQXhKTSMugF2ZB4XSZncTiM",
  "key12": "2JuDe2TuL2MTnsGUU93K9B1kQVASC6euLU5MBoWRuAaoqvP2adoT88qKW42fQ5dsBWuXqqLnwco52Virdd8hksMp",
  "key13": "tJHNe3HebL7HMvWphDhvAkT8Mi8AEZMAD2XK2a4ccdwmJskfm9idpCu7Loe3WWQRv98dghgPog19j9QFxf1TmDL",
  "key14": "5xSX1AC3DywgcHeuRxXPGH9qyfx7kk1nZJdjGHbetwAWV99BU8c1grKTJSnqhqKBJjK9LC9awXGukvwEdcprUUKV",
  "key15": "NA5AHorYGX8BscCR3CstKvXyaUjYqE1rhu2H3nDXLW4UgtFuHXUuXwJ5Y8tLxFZiJeV9aBiGPY9GTpyciYoQpxz",
  "key16": "43abmgP71PZuRDqZ5wc2HHr5jwLntUbNARRxjVaZGndUFJ9Mhe98mYHQ1hBkJmH5EpQS51UKYrsnB2ueHjLAHFoU",
  "key17": "4jpnQcQHJ5Mx3ythfFUjx4eDTSxiP3sx6Epi1CHxZ2rb3HtF77wWv5vV4GjtgAev8Wu68tSRz3SWBY33WHvh2Rrh",
  "key18": "K8RFW1bVbLwgPnQsGxNbEHVSXvWQqEmur3rNE8ekFq1xke3KwqfRarB86m1DbJAkmqaepXhRhsxKVdDrretL4Uf",
  "key19": "4qpTQknX74BVc8yjcNijWJkPw6cd884qGLKbnim3tzsC3R8QxWLH1JPAh9WDMwZRfx8fKHcaZEH4Bdby8tTfygG",
  "key20": "2fT4iLZz391c6AZxSpL9JdmT5rj5jz9j6QCtaNq12EaLMWy6rJg1d1p5sR8M3jHJ6zAbP1i9eMsi5UoPjpkcuAcj",
  "key21": "4vn4SHBmBVFxV87dvUzHinTUTe9uZDSqdaFxkAg2d6YGQmBXmVcXj8Q6JmXE6DpE2hqyMqsGXEC29pmUztaj1kov",
  "key22": "3RYF6sPvsGihcjx67bRTNH8UaFukJxtMKgvgP8LLzJdYDeQ54ogPezJs94kh2Ukgo3Y6xDxT4Weebmyacs5b478f",
  "key23": "co2rBZvpRCS1eqPDDo1STuB57ikjtnDegqRyMZN3kgzWBSmts4LC5UvfGGVnqC5g3nMJcWCN4P8K9ujTqGbXA6W",
  "key24": "291vacsNRHMYv3rToLAREEyGwAErgHjBpL58W2Hpk94wDH3XyCy6gcAGV9w6zAvktRPKFbCknodGLmrrovMnpM7r",
  "key25": "56f9sQR6U5wLQ2h9iWkFuJqiAMTwQdeHDWi7oGwFjCitDJngH4FukCJrkTwnGYi8FHqD7FjLramCbAjJMXSzosTA",
  "key26": "5GZSaTYLkCS2TX1vzEpffYYsYGesg78mPDiXGBf4wNrqNLGzXMDBTatb2Tf8yeX5bztXdUu9xi1BHHwnqGg2FBA",
  "key27": "2Vwa7pLxGMPxqLdnJXBo37t8xvi8TvDBwBEa3135Gs7TRhhxMqsaUA9X7wUbHpHNttCMnPk89ZxfErmBp4HSWuf2",
  "key28": "4ndhAKjrhYGSge9noUGLwK5PLnpeRVDrppdLdGrVnQjz8wK21onTCP9wppbpNzEToi3n4V9sCnEXT2so1iE2Ws7F",
  "key29": "4emxv5WJoqjz5J6T53UZFKcVrpeCei1hTdTn9A8Hq31c8AYPwzoYfPqG1b9x43eMvoKqaBNC41w4PhJzHLmMjUG5",
  "key30": "3z5w1UWEb3k6RBuAbtgx593XK8LxRJrMf3HEGkgWE6x17ZuYEnLga96xM9pcuqAtj2AxtcRrLpMdEB22zYvF1kBh",
  "key31": "4iDg34MBJVC23sVM54t4BCEPAoY4Yz4V1RKo3RMgve9965i1gHjCNfjcHEM1sDfeHFrsMVX98G4SAiy8jzLwuyuv",
  "key32": "5eDMxc9bbC5zGpJDP1Cybtim7DKR2izAFm747CG7TVrzh4xdz96gZ3wrzRceC1bbYvugycExbSmiJU1dKUGSJTi1",
  "key33": "5U7m7QMWZRdRdLEvaMxwaSVicyM2KrtsR89GCebeZu5MyFsdFYEuMswhx4fRU46yVH7w2Py9tRUvkvN6yer81y7B",
  "key34": "2bquCb6FXmi7w7Fq5Zs6kVwrV63YahgLFZLtPP6MnRrjs9b5vVu7HVSNCh11JfhHGT5nMNsjoJRsPFhRe4JKVWWD",
  "key35": "2zZnmMLm1jegPXcEdu5pcCqrPCcx8s4fvydrozaU7Q8pxc7yJw9Wd2UAHSHq9VG9KYGayjsVS5pw3Au8aRXxfeJc",
  "key36": "2KPZC4UFcvBidkcXXiZjhYMWyVuUeJKvhwo6hSrD32GEdvUAFNn1YkBEbpydEakvV4yh9wkmytF25Gf43F2dozRX",
  "key37": "4t5t1ApvLFe3wSSZV159TBHwHXMRKPskABubYbzvbCBkaNKWCmZkYtQmiQG5woAn7zB375JavZtYmJ5NTh6hRAcJ",
  "key38": "64cQfh9sDYoViKTPXivS5VQHHuL4GM9CiXnn3KuSNwxQaKZU7wGywvYdtWGdE3VShWtv46uzkVSo8ededijegjbe",
  "key39": "4KnunLAkoohX1NAGL6rx3r3atHmJHP5haYyv7rcP3VMPy6mt3ArJ7NnCsEcx742SiU73K83b3BaFswWpT71HtL6t",
  "key40": "3ES7csqiEft1fn4Gzw1Gv4iwuUjM9zrXJ7ZCgLLhNT6L1LNK7a6ougpVuLwK4VwtZcmKahxEmXhkbivhsgkEXg51",
  "key41": "oJfCQpVwU1ykAbFD5gnLfo5RjoQrT2mEQ5b2MuHPFKcjkNZ3PCTHoUUbtv3p5uKSQQh4XPcdwCPFNdKQiidnWVA",
  "key42": "9D3wH7pggkHeXU5GNgDUQas7GtaStQgt5226M5wjDLq1XUZ74SMADJuS25vr29NRPXtxrWMb3cK7dPYFeV5Uvgi",
  "key43": "4T8JsAsmKEweb92D1kyEZF6tzoCDtkoV9tme7m22PYpv2EN2EtA2r6r2piVDCHWoT28PxTAhMstdUxw5FtCnSrZ",
  "key44": "33k5e3jpAvPNpphpwfpwQZ2HYqnJpjs8WX15nyvKxb5AqpJa1qtzg1PLUKBBFtfVjX6teJ8D8i8mKFXJCzVtPGsP",
  "key45": "2FBPKBoGjP87ReB4fe51ScMjDkUAVwbeNBYbsQzWWquDv7eKCPPoAsHAAYLH7XqpHDvdL481rkaEyHzLrLyVH5vk",
  "key46": "2VfLMAFfL788kK17ZYwXqgLhD77BVsFqT8MrmMTeDH6h9opRBxWFNX59HanNkxBNHMDkQCH4i1VqygbmhZXXZTJ5",
  "key47": "5CgdtuwMkUqnFWcCzk3WU8YyF17DXQLZnJxbtnsftn8PsshSLwZjkQSHVLkdcAon6Ju9My8gd8bv7nvbKkGhTKz9",
  "key48": "2ghRokLugSEv75jSnSSXjqmFWdJURP8Khz1fat75bJb4FzxS2bM7uRYarcBqfzGoeVzexhzCvdPdZL6cVuYBoRN6",
  "key49": "2zgMd6bqyEgFvjM3we3tEFs96WZThSskG2d9c8CWwS13Psuhd8hui6QmJakno6L2iymeHdMupurr4jJXcSHFcTRJ"
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
