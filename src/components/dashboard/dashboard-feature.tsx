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
    "2nvKDji3p3vYtau5kQoDp5GcDwvvoyykXacQzTghZv4p3QFHcJ1cCi3Sbei3hwFDPASyTYQfaQUKyKvtbZZE5yRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJJHvQRjKf5RG765MVJ3Lz1GvVXjkPZo8d2b13k55yYkCnsvY6U1cifSFEx65dccLLKKJ5WgGd5TvYJxFVQ7526",
  "key1": "4Lnk2wNw6srbkrdwgG21i2RQ8UpLjvnzJ7S9RadA59t8TtvaFEvRDXePUR18QhgGa8YnvctPyyL4eLg3cWdmyjXA",
  "key2": "2RLj8rdQEx2cEMBRLLRGUon9zqjfYQaD6GtunQPZS1jPBwsnMZuQ8bK3W2nQfd1TigRVMJ37QDshYeXLez5wi3Aa",
  "key3": "42cSLQffZawaMGbrrSmFG1wQYUbNiQTZUPKXYKBruYJihkpBF6uYCPy5pqvgC4FqvCwBgHbmVj5jiH9t3AnjcMzb",
  "key4": "4WnDuW8qHA2AiQoR1mvThLuh7Bp7GgMK6zxgDJ46Krnv4EtCFXZScdMobc5e6zJbyaDYuTVyRKy4uv3wMs8Xo38F",
  "key5": "5fwqXGWPfBWLE2ZzLeTDQ2vxfPEvEtdbjAomLQLg4R37ykVgbFCoXRYmjhqjRtsNPzQuaY7xNwVJQAmdAUmk4KkC",
  "key6": "5jGmtYsooCaVSDc9b39sgTp9D1Y4M1zqmzpAV6fRCuXnFBhNC924sn3sDrXqKwWVALrgtUj9nhPxpkfKomC3VPA5",
  "key7": "5b6dk2FQi2uyepXc2pWaKUCKUBruzhyW9QACUCmwJVK5JidSR9FatakfSGFRN6HjtcVtBbdf67wsoLvy7TgbJWWt",
  "key8": "5AALGs5ZzxPs8Umbyutt28EGVC2wBDCkdaPcxby6avEkHN6JXPxBbHprPer3xWDMpCgZK1x5yH9eQ7NYFVDHZMp9",
  "key9": "54Ww39E1KTowkJwCZCdZuZZa6jpM2KQsAcg1gtbkKzoXAbaLGBtoLmcc4AJ8RtvJBWML1MAnu73Be9jBraZZVPJi",
  "key10": "3nDPttvLG3GzZysosYQ49UvC2e4kcDnzNdSX8BBmfaQ9bnyVoUeok6eqdAsjftnsrdchwKbsSXiKEVdir3saktDg",
  "key11": "5XGKfPc7SmEha6kSvLStAaHfiQsyW14tzLxAgBuDaLfZeEJmmo8Q6spyeDZ3oWT4cfyziPA4bDSnguXfRb9stueq",
  "key12": "5AVkkM1gQhRFVbr8qWcKrWiMkqV1fGrRRcuVKCSuHgekUXgGWQptjabSDifq57dVFmFP6oAR3RDtCu78hMHXxrHj",
  "key13": "4TtLoEPLCuGF7JFu2DyxYoFnVr9moGLtyPz3dux5hA33gKHPDN2NTBt9PnGBg2WwzkwRFE6RhsnP5fsRUN49noGW",
  "key14": "2ztcQ6CXRNGPLvaZvWDWNkuthgfXeufX18aVxxXLsGungXaoqfxek4hW4nzaDaq1gKo3EZgSBYAgnL3GhoiF3d7z",
  "key15": "5KsHrUoEucsWyn1y7fCrbHFUq4dqMTJdKNWarGCAsT3oMsSf4CW2suoYE8eFJesoDmbniGW4REJoAYCyYcv7ruQG",
  "key16": "i3EFruXZd1EWPHkTHRAkmX774bL8YVHtrvEG7Z3tiUHqxkNr7Z2kkWRN6f2VxHTX685QbBzzd3H1nbETR68ie8u",
  "key17": "21vRKRT2dbmQQjMhr5LYsS7qaFNovzMUSwSN76WCFRpdRNBnYV3SjVKrBZonr7AjNZQ8zUrHY18yayts3z8T6FiE",
  "key18": "4kh7PDRZqnmkekFpu6WZ7ERut5ARymLuEpg9nFFebyHrJQ15VYfE7fX6fQssTMy7AZQhxsLBBJYvkBFksJCtoHVu",
  "key19": "2TYnD5SA1ySQaMFx7nw63s8iY59ppp7eHknVvo6BpCND1pk8DLCtZXbNivKCFX28qStCoB4dPypawG5jWQAbQCke",
  "key20": "24xBKsigbqzPW33BSfpWwvpXNjJvzttoNod3aEwKURoivtwwNPG6LLd5kxKeesxvz5wC5kS2HHKmZUkPEs1heLAm",
  "key21": "5WpUY5WeEREypD3eT4968m52ST9FUoAXPV2tDFk68FvFBK4ngTVZMshzp3hinoMKFATkUhMn6AyU9x54agHuxgqr",
  "key22": "3bfAmeNJ43FYHzTKNxsrudTUNQvXD4zKv6NLuSJLkm2VjRMvPjonFgXBDjrGHNwW7T6qnLi3RuHbRuTMRWbG5xop",
  "key23": "yLBShxa2KvdSfwE3842etUnXfpXqPA9Nk2VGsxjP6Fet3uNoU548iZSzygDPZWaPLf8xRjKw4Xfdu4GWfC781P9",
  "key24": "3kYqcJ7e8QGvnpMCWjjsK8yMXY53QZndBFPEDxYm8ERfFfnMqppr7vNcM5qu5LRSSzcUzm4usmYsnmjvqjdWRBs8",
  "key25": "4KV34RewjrNo9dz53AVoTSkbc7qHi49GKwhU1TSs1RnQXmFGZsVw1zA9JqHxy2W4oNPrAH3R5dz5p9GkAytXbYnc",
  "key26": "5vvXaadnzQNx8QtCqEW1VmtrMsSrLYdfwhdrQVRcvnfJbmAbAAUJjfCJVTUqtZ7yKsRYaaXccd13EeD3FGKCbZXL",
  "key27": "2HnH1oycnpBkUW4Lsk2R9AdyQGf1bgmdSu2kvEVg4ALbeZmxjBf8cesKZCDa81bXKWCM84K4ctFoNPM1ZYmQZKXC",
  "key28": "5F6wfRz9d2gamRhJ73U8GNtoC1A3v3d4ZzyyTuQAntgYdfJPqVJkMa2ZeoWef36HUNZPxkokGaDjEopmkoZ76FRL",
  "key29": "37jNnjPwHSp3APkc7NARQnKbFctU87kTPoevs28uZj29cMyMhm1waD4rtJMgvfSq8LJnFfjRQLZdqx8NCKGrrMKj",
  "key30": "VdbE1zGtufXvigCBPQetKpGcpuRFHfNkBbtwjoXG9vwJozTUqBkL5oCGJqfuVGP1PP6EYLWvuGPip3pn3Q1L3DS",
  "key31": "4X48rKtm7PN7FaKWHEswppB4EdZkKzU1ZKs3XBji8wNqY9iz3PMjJbg52ofwgu8PmW6dS4RnAHvqe8cb1XKLmF93",
  "key32": "66ugTM2tF8VkRpQSZRGvREhvV2CLFG5g9t61DdksjvoJ5UBb3XnABzJ1EZ9UvmXBMNk9oGc4Bg67UA97kqeLJq6z",
  "key33": "3qYhiv2dDVzGrBe2nP34igaCMzAK5oAvcDEhEaMf4b1dDVyD6TrpbbqSowZKigNm7zWmJi8orpCTe3WWyXBizVhx",
  "key34": "2SF5mwmwNAiXRLLL6pL4AmcpmSEK2rWe7ijHMw6Zpyr1u9vMa7J3vjz8sNMgdYLX3MYsX3YKgyiyjQH9mczmReEt",
  "key35": "37vsY76o2csW1HLE6K51YQPF25MvHTDL6jzMQbFXmQZQeftbig5Bi9pnUao3jMSyp2V7XdWAGGeWDv3wYnPX4deN",
  "key36": "4Zf3LEKw7NbURQtV47U4w96RDgrKJrqSGwfGmrsX6J5cpcGJmKCv4tuYdXsG3Woa4SbQBVATDy5wnySJYG4D9dVJ",
  "key37": "32hbeUQCPHP4EXfA1TKi5RTgwBMGDyxAoQbryXJBYmVTKXqkEHasCqdPTF9mFjEJVnKScHogCHSzZpNw1rZCxDiU",
  "key38": "2NEw8bPNbAXvUnFEtNFFDQxrqzoAFr4i6RDvNz6ERnohPhKg2xZZnnZLtDqZvsiK5jfqaWtNGkAKKjG1WukEwKrw",
  "key39": "5h1En9tf5DDMhNHLntMfb9E35ksjPbEcVmtwenoKAqBUpfGBbsjrc8zhA8YRDWSbfkVxrrYeM3Ereua7Hegy6icz",
  "key40": "228pGTUiT3VdikZ14qH3xpoMjbynchbqHvEzaxd5VPp51JozeTvxYqAQkoPJPXcxAesgmwiA7D5uUTfha67HJo4b",
  "key41": "2jMhk9PHS184f4Hkdji1rnbyWTBFbdp3zAwFbbLzk3R5R14PbjvacHah9csc38qrQfx3p2i9NXCAs2mpWk2fMnKg"
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
