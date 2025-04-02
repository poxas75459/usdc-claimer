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
    "4XWQ8gNxHSFoSMyFoqKQR9ZsiogFx4BgrNwj2T1yjQHj1qdS5EM6uQ9pLBEYw83TLaehGPCiEjubhXRw7QepLLJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SU6dVBgyH9FPS8GCkLWhmbg3jKiLHgq5zqF1gcVfp7tkY88STJEwJcuFD7egEYxnXrsZJ9B6tttV3CfJsQSSF6",
  "key1": "3UPjmnBxNKqq4sHQEeErJj3uZgcKW9DRfwDgdj82YMuzqqRqZ8YXiwRAjz5XbMxrU56yxkiwqdJS9zmjkodaDWGw",
  "key2": "5bWHJHAnAUcLK9DJXupaLFbZzoe7xMvDWSkRBLwBtSWaUCUfgcDp3VsV7zycmAeHCZjdusnEDrzb5h59wDzoex8m",
  "key3": "4gbngv6ZkWCXStzKgH4G8RSKqS9it2ZmoZ5w19qjTfeFXrhtLjRZMtKf9emmo3DA5igMKZd7bEeNvAA48kPiuFit",
  "key4": "3afg1TfCHadWJEkRZp552tyFEvSBbfSYnQES2rdL3wEo8uUWWy1pU1wevfCawt6EbAUYbd9ETVQJ2ENJs7TCpchH",
  "key5": "4ZfrxJHRHBfPmnZD6gB7gVj4HndbYNNtEuaU5SCNVF8xLrXgT1GiMwFNEXmqrKQuenq3HBxKbKch4QDwCgs4ZAvP",
  "key6": "2zVRTS5JHZKMk3e698H4eVBC11LieJcGxbAkt5uCUrgEHsoZn7Uicai5JkPnqewb4xxLwdPnPJT7xygmw8nKBZj9",
  "key7": "Lmsa6ucvFK9ZrwQ42Lmf5Vhz9us8rpG5zFuY6DHeioJF7N2kAxbwYF7xvPCCoRCCoCa9M9gSDhty7P8yMAENvqQ",
  "key8": "5dMPUpGrnEG2HxaxE3pBN54jvYHfg1a3DZR7yCbaxTPx52X5NQd2nWwJLzQwsYTsENMsuo1gmKFoG5BTyAdRZbh8",
  "key9": "573oqWYFoTonShBZmntgRYpzX4xJQFfKcoETwvfVYLExo1EYQcqcds6pwJjZkP8f4nnwPG3CVXUUYwpMdt24mWzv",
  "key10": "4EAh1giGaAHFNe38MMnk8QcNP1r5Xny8NuFKw7VkKGUWPtwzzdp48n6AQ5UHG75gHUVVgdA1PWvZX1uLkV9H4FFq",
  "key11": "3RTMkaiWeXewu8DbAiCGtzoyWdXSQw46i69mpoh3HwhrHdb1QB92wU1chE1HFWq81HdsxjGSjQMSsCUQSSqnWnsd",
  "key12": "4p1j6xKYASzAf7phk4P29AU3EPdUZUsXtbnQ1CQ4rBWxYHWvRVFWBpKjPpC2etvDtNbPkoCvM2A3usCKYksKzrMG",
  "key13": "5H3J4Gjz5Dakn5yqvYGZA7FuoXKJpwaVXWNDW8T6W58mxPs5iyt5Yn2xx9ne2XxQEbjr6XD4fMidL2YvLnih17y7",
  "key14": "3D5a37GdVZ4vQ3ymCWQQCxv3kificHQrFJuMh8fWhczFbiEsA4z7sWmErD3M3nY43s1mGJEDwSWNGTmYLd1AExpv",
  "key15": "5GJK64PCJYWGsqCk9P4UqFxZiazVgyemTET34fUs4tvBVqw6BSm34obkdhR5UzuMdRftLXqottr5EPu88H2FpAsE",
  "key16": "5sx6kfLUCsPyBajxSvUGHXMXNz3f3ScwdBFX4nTKcr9mmm3FvHjH4gKqsayXugquqq2XphemWKFQFJxxM7khwvVA",
  "key17": "2YkyprFRt3ssC7g1mrXC8debtspB1DGA1QtMENbaaU8XWZsAmmUJpp6id6TGaWRBg8CkgE7yYQUgq4f5Anfw2awZ",
  "key18": "ehJ6LRYhV13AV11vbDAdBDwLFWW1pNBtpebAtvzAzcQGLWtQd2NfghM986nrbWJ14DkWhvbMM2BWciScNCJUbs4",
  "key19": "osJ7JWLk54u4ge7BoLcNJ13v9asZRU7rsdJt6R7jBZywXLXsdSftSSkD67SRGfPSdVUfEeZWW9FJbtDWMCnWbZv",
  "key20": "3HoAw8LNaur5Gpwk7t5vWeTizzkLjSRT5eoQYLejvjcTECYN3wMqg6ge1NRxicn3DeuzhjoJ7kt2mxcRuSwRHkDC",
  "key21": "21num9RY3xTKvowESc95mZeJHTv9v3mxepsYKzkSKWwHqmya3g6pYYL8vJdGzqYHGgWoXkKtqHChhzaxZsCxsbnJ",
  "key22": "xyn3oeWEwd3qRsUr1D6DgsYL2WJ7ujctjHXhrmtyfuEWiP8ApoZzmbFoY6HVMyPEoGZH9ynW9hUvs2CeVLhrQ2w",
  "key23": "tyvUKZntErooWZDPP32gCqeYvCir8FtQStQCvZ3fxZ1PLcUgkNr14DQL21XsJQnAfGqRCPEPegkTsaWTnqzKmfi",
  "key24": "2NpGKVHpCgt4TaEvLTHXUf8bQdsKj25kohHfpCJef2w187rNkQvQ7pr7VjXJgUwDvfpJkJwnkVfhYzffL9yXn5bi",
  "key25": "4ptxtHv7MuoboZC9bquzq4XLzxanoNSzCw5xh8jU1BoVXxPxc83LHNQmzCuGLqDpQVbcyEmN6tKSkK5sCUTTM6aU",
  "key26": "5nzTTDp72ksNGe9BwdmiMF62NGQcg3fzQhs1LirHCKiejYYuQLWSLSVwNidNd7E7fmn1QtPrfb6SrwVznbCsBdWw",
  "key27": "UsbWoKJsbQUct1YDexYdueNKPAbwFaqsWQEcmvZpXdybdPcVshpVVVVcw2oWranPCNJMs9EENUXUea5UpCgXkud",
  "key28": "2s2ngcjXpFMx2jgm1GnzuQaaKPJfPZ2YqQWSVYvJ3pvLBKPYgP9FbGWEu4WbMuwgPt7kN4NFvoamJ57pqPF8hgEc",
  "key29": "5TBUpxR7MrYyjo6iN3Rfgein1wjPqLnH85LVFvWfJFPrgDa9FXYa2YiL9xftFK8TT3C6cuDKWKMQcosLZ4B15zmV",
  "key30": "5DkXKg2yvyFr7iUhWWKjQfw1g6akpfcPtkWhx1ZiFGRHruLJQhakoGLjCVvb16SRZUshCKtMG8qErgjpPspipuVP",
  "key31": "YVKjyE3Cc5wdezwoN1RcshvyZTNYZotcgFuekSYYujZUVRVG99x6M3ghZhnQUX8Vwk5CwKpAYUC6dfAST4Z72xF",
  "key32": "3bFz4BTdX8XN8T2uCzRWiv8ePj5QKSb9HW5D88yEr8oZQLu7mrfyxEFBasGvNDSgL7vCRsDCyijL6jiNhDHymdTF",
  "key33": "Fh7VeLA12bkaCZeYebvoH2h1o1WeSXix6WDyWuN5mKBNHZUq2da8LSRbQvBcYJhoAGDbpffUwe1zMM54cT1aPkB",
  "key34": "WozC1zaZ2vVZCMdvyJJbmciWQMUZkm1Kqk8gwA7eJQc5L1k2ya1UZh5vkoa56mstxWb5E2wyn1KJ2xyaQrtCoeG",
  "key35": "43LMHhtUztktvKgQ9XjSiqyPRmgoGfiED53UWwbHLtELvpmfWfa7jrTm3yhRV3quXwsWuMzjKH1Chhti1YpPEpiq",
  "key36": "3r7ALoT16A7Li9QgwSz1HJzZrG2kjaC4vk2Pt3kLYqR5oM28xXiuovzQjuApyX2WbrNFEbD4J4o4akd96qCBqdjK",
  "key37": "2cYhSiDwK747Xd3BVHiwtNgFdTodsgU1qf2gbfTLnwa1D6RhYL5kfQBeHyYPaJ6fred5oFh7vEYR1Lbfhx8M2Vk9",
  "key38": "48JNWYuX7Ka79HAUnjKLFgKYjhFQvmMBc2zVqozzzFsMR9dzxiGts84CkuvqBr3V6cuPGdB7WAY8mgWgDNevL85A",
  "key39": "4dXt6GXFAr1hDEUqGbdzXKEok6ci6WaG93TZeSuUKPfAL3VJJkj8xtUxXDyaJLneHbCjmE7vm2Pqh3JaU4gwENk3",
  "key40": "27RoGH91rQcSF9hZVHzGBeH1nvzRs7A1jZFW4V1mLvetVBg5aXxyJ6gRi13LfHFJJqoJQUQD9btnRYnwb5ZXnTw5",
  "key41": "54xP1KA2fSjLooii1JD9cd3Um5JKtTpZH8XmwCXC4PbzehcbzdSBewGhFCiAezVMGHCQUPA3D8ZfX4xG2XqWWAgx",
  "key42": "3i9Pipdi5FNE2m3DThWvVrocPp4LvFhDeN3CELkVjQjxHAEsm7b36Lb9XasVsjrizSqzgNZ85W4AaFebWfxfSYUi",
  "key43": "3unHQCpjEBEV917aBMFKi4MyDycJYVNZmghrYYWhwVAMVC3fYENfHtqRWfAXn6U6H78zHGsyemvJ7XPVDhiaPTpY",
  "key44": "2dHX62dRMRZvrTuDsExxrWSiFf7Rq9A4zASa1DsGY3k7wB49ZR4FBQkR4ThuiMmUrhAyrf5u8at9k2mUcyreuE97",
  "key45": "4bgNGFYKZNvvfpUcmqYfxhpMTVyEdj51DtikbiakVYSssa5PV4rLnLq7qNjf9Vt5PpJAwnaPkGhUbFnZE2LUJy8s",
  "key46": "5dvL8cGkH4oJrL7b7mHHKzMHMbWQsFZ2soNTCvyNNDg3ASDNE16oq8mmbHSTgvyJt8Qp7EAE8kjSrc2syN5gbUCU",
  "key47": "3DDoVxkY4Xce9rAAWtkjvMwCedfEWZ9UkXXuidAPk3yLSUqGYEECoY5sNiHVHwkymV77JSX1N56ddegWCnk1w55n",
  "key48": "2u3DJbLNZnHXzJqDRxrpFQV9wHD8uTY4gLZrjiy4VztQdKmpiU6JwPfP66zwMTe3EB5PGLNVi82Xfgb1NvaL9ZSt",
  "key49": "3pB46Kchufee4VpwXWhT5w9h4AW1Rp7tJnT2Seg84BNVZgxi7SkLzkmsrPQBpUen9ExYv6kYD9FvgXuaFeXSEH4g"
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
