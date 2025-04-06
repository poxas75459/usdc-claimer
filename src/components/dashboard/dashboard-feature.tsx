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
    "95UZmaJMkxRKP6dXSRZthzt4KhU1kbw7XZyeEGxb9x9vTVZv46BwHF6jrNvzRBTPPDqSbB8KdJfAGXSW9jnqE4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b4XG28FqNgzJ937NM2wvjmkHkSdsuxicJgEL58DGtcV5HP7vJ6cZDzLhTUtVa7LdKovatTiAizjM8ZFKaDMicLL",
  "key1": "GQVuv76cnJWMQmwpiTFPkTpiKaBAYSxyAQWxEdRR9ZRciJmeKTz8YUryAABT2ESH3To3SCvon8LzeQb5iUfhhCu",
  "key2": "cSR3XiA7UhcFakLB78waC5rFyi1pfN21q8MjwwznTKRiLvqE5Dxkboq11oj7CemtaEcvDWGdhq43W1cysuJ8JAz",
  "key3": "494RwE169JEw3cBXhdFBygp1J6q9zGd1aESG6LrGb4wxQUqNaL6zT9N589xvu2sVUtesut2ToGC7oJhbtmAWhPV5",
  "key4": "aZVrEAh6ri2cHntVgRNnymENiE3bDfXDAbLQUBPSwVCtBygWbAZ2qdtzWK8Rx8HC4oRnYW2c6u6tvLtheaKe21v",
  "key5": "3Lpm5zmVgXcYyZe23j5QwYTftwczSiwP8teZjdvRjiw6Jxq4W7M3QH36uNgeoQXk67trHvywRy5byZ2TDeQwQSZB",
  "key6": "2s7hfxTgNgT1ZwvrmQJgRYmDzo9zGL1Zm14Ry3y5SSpFo9WMibwFeAynJY84SYABLmQKyAjPht1KENtUGwtFZbg5",
  "key7": "3dCQKSKhBNTfdUzM5ksDSfo1K8TJTz6z1rwFBjsAFcqLQqkGRUpojK8NUQAdrT4Rm91ZqSLvF6221wMHDn3Q2SGd",
  "key8": "4vLsaxnFtzTdm7aj34wwtxLfFyYjZ3fW7q2UCGDosWT9qfY9sx4AebRg1Eqvamzz9PFhXJXd1Q61tjqUXUoxdnmE",
  "key9": "3weGsWTNfzsFnU5ky5fXQhKvqyjG7MW1twfKnpdqnAqaryzBEFuKpVtr6QThUy4dzGfDRVbJKZecpwiC6CC7S9Ta",
  "key10": "3n1GBCEKrocH6HxrK7sBdNS8jxHEPmQiJhKxgt1TwRNsYjsVp1nNvvmBkncT7sCRtnQ2ujk31NuDsTD41enZY1QL",
  "key11": "5SPjXYSZNmyQ4HmnUYHJEKD17xMfQRe1Qtp5RJ3V2riH9JY1AjSQKgd4E3iAoQqFMfrj6zNZYuk2vuaPDwS6KfD9",
  "key12": "5jyyaLzkBdPwCUMfa4NH3nZXif7ppU7vvtkXTe8bfwCGp5bdCtPu992sDvTE3ZsiGihwbzbyxSy8uVgmj4YJguDg",
  "key13": "2V9EqjM4aGU3rsYcDaswyKUorf3EAnVDSwXiYbbPVfzcH1RwGn57gk3WyaTJbbouJrb8BRvHNZovcLnNcQoWhuAy",
  "key14": "3cDfURJbVH76Nt1K3NY5vZGfvMstTchyyXMxczEjJ4bdgvxLW45FMMj7LHe6yiQKLHvqZd6Ax7JicxkjqmFRhZWx",
  "key15": "44mipevgtvnpqMaQyLQj5qwY2GyM8bVFKJtFNRgw2R7dksKiHemaQYzqW2eA8VuPEVz6EBvpoHojmswNW6HvvtE6",
  "key16": "4kpXjV57hs9dvWwLzR4FkzjBHm6vtG4DWrpcVYXX6Khma7woFAj2FGv19SPdNLuE1Skx2VwqHUJH7HXdBY2wuT66",
  "key17": "5ePSNB3JKnEnaUDf91qUg4Nzbafn1F4uo7Q5voxPJp5iQ18qcNhTUp1LLqXv1oG9t7Ew1fV9uuA6B5LGX3ATSdyK",
  "key18": "55ii3gJ76Q1FdPY4JLsCrBYhH3sB5ErkN4bCHufQjCcNcL5iKZgYTpixCbWcSh1WmpKxTsc1misvEvxh19rF6M7N",
  "key19": "4DG5XVcSbmUSpnQWCJNZps3EVy7hBAKqU5quaG51kBGSZz3QkeiY6UFB6BAtG7Vuz2LhWgxbV8TXZ2UYyQqQhZRE",
  "key20": "2RrQxF9zC8uWSLH1WqbeB81dLCXEVijtn1UkYYERwwCva4ctpw4QvNPDn1DosH93EUZCLtX92M4QWAiMrQzPU2J5",
  "key21": "2MsQ7nb5FeXFsLesiFFCjuk4cvRggwPCFi1k4jkWbVhgvnVNVDsTo26wpQrmxYbPnc6KucqZBXXMnjDArcHkau8R",
  "key22": "T9NUh8GdVkCeipkMTWUKzu3kiPKSq6h7SGuR82AQu5UD8CNt41YRNF8gSeztJVF3d6rnxXytNezyJwF1zmuMAW3",
  "key23": "3tBiZCuZo4YEMrq7WJq8dkPfaxtwRV2iFSWLwbe9aWfdLny7HZGRVZPu5WrDpgnfL1rmUrA3rRdQ337VJLPe9Wvb",
  "key24": "3U8MPKi1Djvq6GZZGf8oS73bjVXxykqCTj1iWqn8tdX1odJK7W5C4fTpXjLNmMnQbgdsXvh5xjBKh9JGnA2atUbc",
  "key25": "KUMSDJYXbeBQBy55oCs3JxXV5AqDcZzPk6RiuEXVcLv8cgtEDUNuL9Y78hnbk52kn2QMzNgsg2BxGNyKaataYug",
  "key26": "3n3SHUMsvh4B3ZSZmZZzXR4EQKas5AidQ5sw5MoAfHz9xe2ZagUBG3fQx2YZNtp42KJDR4R8V5rmoVLpF33PKFrV",
  "key27": "4jcSMCBRuLCEXLq3kYEAUYNvV9NktYkKeVvmagFidLaY8KpgozrWEjtixrhwM852WUGDwFvGn79rhr7pVRAQ3nX2",
  "key28": "4BYZyxGhexoGZ4TtbpQURnyVjM1hvqYUpArYM2hrhCD7YwpiWA4RqsjKb3tmopk671zFde78NjV4Hs6vaYmVR1KB",
  "key29": "4DZiZtnUcLwuKkbSAqxU4ZTsq17NgtJrudduXDpjGzpekN45BNfL3HAggL1ok7ERYn7GmeQMwkQf42RQcyrM8gvd",
  "key30": "2R54V5e9oJLG6W3PySqQxcy3piCJZwHpTkFGqaeMHgWk5fZdnmqsyLLdeL717Tzgd5bosthnuszXr1hLuGnc9DuQ",
  "key31": "66jGKSuxLvW3QGKXp5Jq9a5rmLrzkXtxnw1vyo9s9Xhgy1UdLvEVDFd7rgXhKE34UGZU32gJe9tjyZhTrzdA2HhS",
  "key32": "fJsdWAMFkzy94o7WontASzgR8ScBKNJR5ka4nh7zFLKuqDNCbZBZ6vqkiGP4fpwfSC29gLemF9NyM52z1GbeL9w",
  "key33": "3iyv1f9zVRSygPZvKCvXvBYiiBTDoz7NatJHmCnRaiSvBZgHuww5YfMYrL6NPDLKW2bNVMmgvVr9nqqoP5R8HVRu",
  "key34": "5nYkc8GGdSATSmF5hGKqkyrSSmkc7vR8SU342xCUbdpwoUbqsB73h79baMR9uKNHnvRodP8P6oCvs6tf4QujMq21",
  "key35": "2hb1TtcPxeGFfgxrn8nwY11ENHPoG6uWojqhg3pqLMQnGA8vyksCo6AxyVCzrmshpWWVq3fznUPhgFHXDjsbGUoU",
  "key36": "2pxEvbh5VxfpmKrkHLwJteoYYa7tnqTgiCUp9XgzPM3FFZBTZyUGEmu9W2BpWqm5X4GNvxEUumB3ydcWyTCvp7Xs",
  "key37": "4iXBRhSyFmkk3QyeDKVwqgMRXijXhiRv4KW9VmJdBntXkyyHNEEzwNX7aVL1341EArHhQTnqwAMXN5Vr5jhCJTbc",
  "key38": "r3Z1kZsYbcVVbbGSKEdGuoNKLQ8fRdMcYEWuw3M1Me1jfm8UP9jrfi9XAVHWtKG2FuNUrMzJwRyKcFkZQM8kFm7",
  "key39": "5PKUE7EeBBEtSeZmDs4ntsrvVCK98R8cX2k9esZHRfEWi9dEs7Gg3tfdji1crxik42EH7g7xyZLP2GQcYXnbDH9B",
  "key40": "4psCFiERhWekSu9ZWH168QcUJxZAiorjj1gDZuXvyPXaK9K7XsiQy63q3gxo7NUakZM4KpCVSgWEFVc4St7oH5R8",
  "key41": "2AMnf2yMEerHNMiqErkQ7UTvWpb7wxSDppuM8pGe5KC66BgqrMaAREKQEyJN1oovMXFpu9fENaQvHCseZyf4ahxY",
  "key42": "5jCKJANFsFhLcWChqYPH8xrCnQCmGdhszhacAUwZLoFLxEXnytPpDYVN87aXojLAKktv8kU7rovxeudxCoJAeDSs",
  "key43": "3MKyTDfA61qtYgDeBpkY58UChJ1CCgCcHVi2dh44B1A5xsVoSFGXvSbAcyuVkZkbqrqQLRqtdJbbWiMWFtjiKx3g",
  "key44": "46vhiNKL51smo2gU9HzU6xt511PX8VYaJU55kWrDkUyFD4CtWrQ2KpVXVnz6Ffh5RT4hJJBb3rMGsQQHeEKKjS83",
  "key45": "249yWNaxiL73q4VCRdL9LyMpKd56Q4wqH1nDjrwSJFPJt2aRMsteMcGKnK6avf39PJTghdhTjhvD1cZhLmAwgzj1",
  "key46": "4QJR4qMS2XwGY3n7eLdAzJF8AS84z8QXfSvAiosAysfsAXqTnZbNMV8wfm2CkBWQiYoXAukTYUsbMq9QMWQY9VNP"
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
