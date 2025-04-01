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
    "EDGJmbeEHQufF4YvEgqmuMau8rU9dKVE7B1UhjpH7ERxnQjwsV2XqnZPQXPPyVggEkevxybK9XsGKpBw3bnboCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j9AmEUVmTG4cza35HwVPLpYuVJ7f4Kfpi9FAy2UgxcSuG7bBEFb5ppp1wc2cWqnfjLJGjSHnMq6KZWsYQwEoe3b",
  "key1": "29od6vM2KPQFKPNMbYXzeUPauCdcATHHrNwCrRtBVHyhpgK21rkKmGt2PTSwFfiQxntFMoXMdwpMWCJesLdwJj8d",
  "key2": "3gMGmThY9eL33wxBUG5HHVWAPgEAgTyod97ufvSTJRjo26tb6UYHrh64NQGqcDu7uxC6iv8kptsXM9X356ekDq7R",
  "key3": "3aLX1oGSZxwHeLATQwNtgVAZNGJ5LwEgiPTZLR5V4fLdtWv8ES6CqpDFaCcBLZPWKQt2Ru3JbwEPcQqK3iBKoqFj",
  "key4": "3opHJPg4TznkmH5Hv8ppbT13VU4pamnBAnhj9VqeGry6pSsUJgfPCUakt3KhUoiwoQqms3WXJpyBntrCH2gUFUMn",
  "key5": "2aQBMcpRVPKaYxpNUGMySeJJ9MHbz23XHgjtjRyntPU4LCdvbqXwBmocXYyvAwcszg2c61sWP7pN9snWFRucHTH9",
  "key6": "59o4SwM4pKUeZYHrWd31KukkFwSnrHcFGu5ViHaN4R3aBRRZgrm1VVznbzAsDyK5y4ZbwHuFWYT2zyo7TfiMqe1a",
  "key7": "5s6ZrvZLWT1FGH4mGEF5CbRz6qhs7CC1oaZ9VAkZuBLVNb6wxW2TnC8G1NEAQY5eCzGpgSmBJBSyMHQebLPSA4Zb",
  "key8": "3apgsaQYHkyMhKknx3ia7JDqCXtanNMVNCD3YzeQRSuadEY1iCmJvZznPiumMpanDqvTMCaJodx7TJJoDDCuThkt",
  "key9": "5N14dUppTmLB3KEzWTMxf9YjKD3DJhdV1RAwBnUUrsFdw6VKcH54yqxFHPsNpFwYEfiuFcQWQWw1LbUoFr1CsfP9",
  "key10": "4UxhV9HarePpc9Ui3ifx6CovXAwv2WZYQ9BhfszJcNHHF2uQvHiUqgJKry7VfDiWoGeWm1MFVfP2RKouCedW5Eie",
  "key11": "4fnbmZ1BmpnUChhviVeRVNRYt7f55Yq5yF6r3t3uTTRMfrTaNVnnkwQm6n4M9QrcDYVZLJGvSTsuTQtsFWbAAic2",
  "key12": "5ucFs2JjzqLEcjo6DLjRTwt4XXVwRikteBYqxnm6yyjU8LKV1rreUm5D5fkvEUbSGZxpd8vt6ttQxXLjQv1Cc4Vi",
  "key13": "33URDKDDh46FofSBjC5KhNoZ3fTtFqxusF7747qSYdQQ2ZrK1wRTTG1BPE2n3TKH1BmDyFzHM6nwbET9MEAYGPKQ",
  "key14": "4jwa6EcpCdzQvfFcJKkZSi6q8cAbTSZ6pH7Fmj4ipbjzCes1QVDqj87Cj7LpJNPGKrJvM3EqdGRUD3HC2votDg9V",
  "key15": "5XYrbNgTsWNeV7YSn84RaioQ3c2Rwc4AbkeHB19HgQ9tPGGv43Rfimtjx6wTvUKf1hquwawQFeBQjEoujdJijfie",
  "key16": "3gaxtND2cWiB5VFzQEZ3UdRodgmdgeyPoqPinvGyd37XLaXA1TGCc9dY8xevURAAevXzo79boJSdVtYvsTbAmYcU",
  "key17": "4T9hDSmRRYvoyrCahJ9y8t8N4tqwTzeLzzmZrphy3SrxfM1BNgXW7Kvz7T8BKoR55oX4qp9GSpZV6KotVLMnyC3o",
  "key18": "5V6JshaM8LovuTfmB9EQWP2QSKwjeYjfFUc7HU796D2fDL3kVoMREcRTPKxQ42DojuUiz4MFJev8TtsopqQYajQW",
  "key19": "4ZpGzVNhcbREAdAwD5QA2o8bF4pjinJwtQ79saKYLRnPYJB3drquH1M8bY36U7aoYZt8NnDZTWSYR9MoRH6i1vHd",
  "key20": "2tzNYxbvsrz4riUFjUu1Gjy1HNcSQmswcC1SisbqZJ5HNSMVfdp171Knbe2JNLGt64hqecFvRMYLVemYLPp6apdn",
  "key21": "nyxFCyA9iP2uFpSCuXnPV5A5WazVp5MfZTBRNezhFf22tn8Vk2bku89chKDNGoQ9B6yXUp5CWUKDcyXQoJjv8f5",
  "key22": "5wGqxkcqad3JsBUt8pLp7tY2ds2iB1NPhz3acMBphH4nDZwEPUqjbDSkpHUttFcvHQjYjBfvUWapL7ezAK36jLem",
  "key23": "3tdNwEbxiVSXG3ghkao896AppeP73zZFE9hfqbX19J51P3p47Je2CzxxRST284tB3W9K5Yb4kWiSuFCXs3Hj685n",
  "key24": "58kPHoXPp5qe5u2oowXCAJACCNvh6y6BmBm5fTGsFLCPZcPFdPya6J7QLGC71fdKo8auuTuu6n2NrPqWuMdwps4t",
  "key25": "4SQ22Be2523Pwvynm1XHKciMY87jsqc5Ns7NmqAqsBDRCV6qQw3gnAEyLBRY9JpFEbamEieDz84Ere8gD8BfeTyF",
  "key26": "46BB8nh4AoPXwb9nLWHfAQWvLgHS78N2Ec8ZQGxztKCJeQHihS9ZXx5M3yMsHgha23RMjWQqnUBovt7bNh3YE1a3",
  "key27": "5GPVpuXeJryCwL744HQqN2Q2e8MkmHyv6q9cfJJz11B8j6hya6eC6WW8DQ1oLSF4GcX8VFPZ6u5MqVmLj9wrzfTD",
  "key28": "59X4LFUYX2eFBySVP8PrRuMSvMH2k2tMxuDiRCntLi7AcZ3donHFyCRK9PAcpTYybXYvf6ovza5vBqw7D9engDfo",
  "key29": "2xk1jf6Kf6Xb5oDx91o5vAAMuczbigPQGJdWoQarvJBuxJfTixdJo6aZVbospbSrVrVGadoKQgKj32VLqh6rMLGC",
  "key30": "3KrGXeT7RR4ruGRqJvDagYeN2NSyoEtGKwvAfWUSVf8oB7wcuq7rX5Npnj4RNiWEbifNY299gucEFj8JKY1tbBKn",
  "key31": "bgUWXznsp1iJBJC78TNgTUwixgkRcmbVXFGL3ijtCJy7YLCDU4daDVcARPHvYxi5K79pLm8wEV1XtFxtuL1geca",
  "key32": "3R4PzobbMuoKKnwxpLwdB99LEUQ2TMEk2nv9CFvoGDfeLvwrFpqPVvHPZAcS4cJNE8RrdUctopkG5ULrGSYEe77N",
  "key33": "yzp8yE5uoe59dVH4zWQzSmM4h1Miscr2Q9p32Uw2KvCUiJsNaYwyEccekWuRTv5ySZuhTK1TjuZUSv9qz1fsich",
  "key34": "59ZuKNNwagoqtTjHaGoGMkieAyXvfrQrZQpKehnSvoKjgXMTKBzQVa1d1vsmX5gcStUGfCnicBtv2LAxcGKnKSFt",
  "key35": "3N1S7FJ1EJhZfvWzZdHXQ6Bb4vYJRAw4yLpnfyoLkWpy9wfqpxt6hkyp5fs7ZY5cVTb8sMkTbBZ2DLervwLF3X8g",
  "key36": "2bGvaB4TgUXTkJWHk7AfW9cUvUabU4EToVEuyxMdVZMcCx8NCBiyroq9bbv2EksjsbKQ971XAkPWdy66DXa41dgu",
  "key37": "4yXakYFZetzqNLxTsyq1tukYfpPB1DWFXEiLZNrTw2L5VnzeEEECXU3QwJXGJiSAQ26BrTQtbzn9PWoJHSD3vbqq",
  "key38": "mEMpQbVBwiAuGsKWpkYmKDaALcEUrTW1B4h7XbvAw1M3w9B5KXjWB54dG7DqkjY2hELvWYvDJRuX6rPCJs7p93K",
  "key39": "21NVyc4H3XGQaJR6BjXxsAPtoV4BYFmHUNwQcRauFYzuFUderEA1VPNetU3BWZVA5bBfeLZKzWondaEbGDmrjtPD",
  "key40": "2nq9W5Au2pmvSjLYxC8pwyBRXhqFXbRAwr9a2n6ETV18wAmM25GihLcYfNQaQsG2tX9Hz5bB8xPwMRRddb8yEdFN",
  "key41": "58USFjxiyfoMydbA5cjwrXXdBpXAEYr8xyxBUQTK9ieYH5gqw6mhkTuCB1PnmmXuNVpmg4vkRzemLY5vNeyAgZ2F",
  "key42": "2akSDj6bN7Rd9pPWK3YZjsNKphyJE8RpYr3ikyHJZxnVznKeoEkx1XEKDRXGvoW1pz12gJJ2tJMrpHjhbKMBVJer"
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
