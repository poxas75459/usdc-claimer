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
    "3AMmy795VECtuQBJu853Xsp5EpybLTTGLbuq62ZrGEYubfa5P5F2ty52nv5P73miBux7NTfLsgj6qbtmM7Dsys66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52atBRfNjiRYThs3QWaJ7MDuSqsBPx77WkC8sNauLmBKvockbZRYQ3Y9DiVenmhAKbijsKdfz5qKzsjXkm9VYHdF",
  "key1": "4qk5mFFg8FNRvhyLFYVgk3GMUoyJSoxkU8f6o4Hz7MzgNAUvpptJYPAM5AVNoVUejU7iKZBR3pdWhr3LBkEuyAnY",
  "key2": "2TQ5yMycShcpANnqALTVSh9E81tTrH6WU2bLKRf3Ywfap7ExGs5vFcYwd1wLjo7pEVsDJvQgi4GdGLD8EHBtuXsq",
  "key3": "4FkXwhpGso3N2jNcaVRbHji7NueXKp3LK5QWXWgcoCtygHWJpsp4uPpemK87wtjM7b31iEn2ZPV8sdAtp9VkLitL",
  "key4": "4wSCAXU2ZGDVbXwizZpU1YHkbyWSzLhryXE3G8fRfvXsdnsFBGFTxrFGzk53RtCvdGC9FJE1xYryPtehjnbo9ayo",
  "key5": "4LLB3RmnoQmT6nbVzqutRtVbdnat997CjJxYoK9syVeufCWpnhPpTB8xWQfAc7t8XzrumdZ9YYkgrREFUSZ8kAy4",
  "key6": "4N75Rt9S3krauyXkN5kG72cVAQdotFQFdTtfqe7YS4V6GvLVge5MvRDEbkQVs2Mztq1D6NXafnqx7V6L1U6iDifG",
  "key7": "5aduSKRDAVTYFoCAJUd23o4HuzLiWmjDTg4nBwzmj6trAgcVov7RjVqz6z2kaBp9XCUMTNU8DP4bMTLqa21ajDWT",
  "key8": "59J5kaq19kzRrn3eKdFECTH66inVXCSFKc6gEAQzmnbk9oQ9cqP92XLVFJwsjQKhAStdQciMPhnAtnkxFM3279sS",
  "key9": "49fxebBbQM3UMx8YoT54UCayGGdLTi1o59MKR2rrJhmca2MUKk3QfktKqG8N2s5ccCs3aBaPzZTK3TtmEmQVWbNL",
  "key10": "616yGDBFQVajUhULMzLK71ewrd1U5aifvanEBwbLYZSkeiAvGnXaHrTCiquoSKHZp9mY2N6XzQYNeTn8ETNocjxn",
  "key11": "4Hm7dJa5GDm3VSRgg5SWTCysoiPtSQGuKcVcj6J7sKnpVFWUzLQgipxpKzHpwRY5NSvZR8TomLnagB4TMquLNEfx",
  "key12": "4gcA6ACrWZWwLU2kFrcgchWf6SJN7wMCJh6h31pRGLhwqvbn6nozjUbVeDmrwiz77YFfU9io4uN35nvzPX4c9i48",
  "key13": "4opm7nknvuckctHy3GAdTNqNL1wWKEwiai2a7uaeNGNZJQtvUXLHX9owfYNqPKMWoKU4r4xz5KgGHwe5XN1vsTfX",
  "key14": "3DagNamsFpbRVp5Fkmmgna9xHgqFXvDixepvpnoDmZKVZUiLZxCkoYvbihQFvz9tSEjxs8NzknyhAEQQ1yUkzTL2",
  "key15": "2qzvbZApVeQRVCG1M6rByFnprUN6pU9ZXW2VCt9Buss4NXjyxA2LhgycrAvyja5yRdRY57JEQNg2CjGGRmKDWMxS",
  "key16": "3oAtqihx2Q7tAz2HvWYRKVAXTZAd8mnJV4FY5jNxngnTzKq2DRNiHtDygGDGeFR4KxSDtWxTwJtg9ftnbzoV9Scc",
  "key17": "5JiEcLtV5zU6GFFYu2dpDVLKiMccLtwADS2A5x3UH6z3zHHxcz6zkqJBasHMQtwKdoMRcYueX6s9G7VGSYA4jAra",
  "key18": "2pSndVMiT8RbntpjYkUHEsPHiwsw95iJpSUg4f3ikK8n8Bz9fYsRRSQxRiCAtNZsgFmDo2k69yGvakrVJJWb5xK8",
  "key19": "4WyhTP1QajMM9mgp9162rAYgcGadz9t3iH9qxos47KpxKZuycRKztoZVong6xzsQ2iw1LpBbzKfFnpoCJWpxi9Mv",
  "key20": "5ok1RCUsLWSsKFpBtYWuR7gXrX6d1X8ydaPdeNKkrtpMJ1DieBxXZfiraxXVeaf8fzFW5Gxj7pJW7w5xgoVo4dUD",
  "key21": "3xbj4TCkq8cWTpfBRHR3YMd7PZxsfiisyK4j8dxqMWgRRvNfxKTpMkcmX2Yh678JTurAYLxWS4atMgJby4spXMKr",
  "key22": "Ku7fNE7v8PaK7gmbGmBTNSJXWXaK1vitG6TzNezmiZNN2cdx8Lg9TkKbXQZNV52HuLcuDhGY8KNRJ3J4WFiJQ8e",
  "key23": "4iuC36enHznRVFN4aoWM1GV9xxgy31Uhkz4RFd26RJW223j1X1Gs55Am5FBeLCgLRkb99faaxvjwrQiqGVX4H9Vw",
  "key24": "oDq1N7CdJiWWpWAaQBFiZZAyjvjNmbNh9ui8u1QXtataBQwHLf8RcRUUvoGzxHFP2MxmBHB6V9UmQB5uo31EFiJ",
  "key25": "5QfFKpwWfBSrSz7SwaiSg8e7kvCtSFWJBxyuL2JTbRfMgqV7iZ1xzsDqKXL5Sv2w3UD9z6nNvET3RRVPou2NERSh",
  "key26": "5bFaTRbtMKpfaAALSyzvboL5TpyKNSKWi7oKkrPje4ZQEf9Nwx5CStq4icDk4Yy3CkYiGCXyvSyE7V51ur1amEMc",
  "key27": "5wNH152E2NqaWXpFVCdgu6s24H4MeQuvPufqiXZyfpwQ5XZX3rdGSrAP8TknAYaLVXimeCDEkpmU8VYMvuaEEdYU",
  "key28": "VKRRyWEZbQvAYZf6Pnw6sCbqR9UXdLqT9Gjzd81A62TyiAUydMYC3FVEN2ePy678sL2uwwF1bTqSGwF3ef82zbp",
  "key29": "AvX5dNuATCu1JXWeGgsaz3cME5aKnPamxM81shf3tzxqtnFkH4QP2DKoca3d4q5AYdDHvYZv5ZeeSmZgsyzWAz7",
  "key30": "3Cy4Uo3csDVzxKpUbB5a82TgGNnm8o7EJGn97pJUpbCEBc4ZVg35P17HqR5gErGSwwShbxBkszyp29LbefbASH54",
  "key31": "4YpcFYdDk1h4ZvVtjJTBJSnwTRyMecb5RtmCBDq7p45ZrnmtLLXchKErhA8E4KFiaDf6CiWToBqMJvy8SHPmQhs2",
  "key32": "568u9UkqpefqYB1fAZ8jVEX3cjQaci55Vr5Tq9itniej1j95rtsLbXs5FxB2duJ7h5rymTKMXgd2gCAqzwuEEp2Q",
  "key33": "4JxwiKCJQi6ce2SmhBhsBRxTcXJ1fhgaKKyUiELjjqvu2cLmapfMRh6MWHnzApBMVsjpvyHD5MP1v2WYUPSmQiEJ",
  "key34": "FMSJh5K794iZm1gp4ExYuQJRpXq7zjEZYKbSRJJc2iwNhpPuL6XrhH2jRfUVf8uVcWnob5RrZ33a5DhyMPyTz2Q",
  "key35": "dUeMRCcaMH9Ugv1bPg98UcM6M9Ek9pDnN5cYwe5WD9uKM3vChuK5uFxkRDjaVae3LtWAF2jEubjs3D1By83ZNyd",
  "key36": "2CKBaLpKrvH814fUBRtwcqkU4EdrkYA8wquJCQsAV8zZSFgVbpfNdc3mXRJYrv5dtw182EjHxy8dzPYiFz4S4s1p",
  "key37": "2wYRxaA4nfSvMmeEyt8uq9iBsBZwuKv5kvabnWPfF2Kzaevciujtd5t2hNCwDZFgbqCaBZdUXeYVHht5bysAShzk",
  "key38": "3tnaEspH2xuHadoKgdabqVix7zy4tixDSvJ6PoG95sKVuyyKhJ7fTLUXq7vM3oUUFHbkgExaYt5KQGsmkeaZwR3i",
  "key39": "kkD46vDqQbQKf2BXB1Fe9t8tEhtayeBzt9NPvZcr9kJhX2oXmwrTMiJ1bVdVsExcV68HCUQESvKMNbK1tz9PZnZ",
  "key40": "31W9wL1NesKBQ4VmmL1FFc9vjPntrvMCauS7w9jDoZW2jjHfk8kZeZc8yL9CuAH8B8KuJASaKfHFK7npHrmJxPoE",
  "key41": "4KRRAvxQeBA7APPGEJmR9K3LMT6m2HAurT1P4a4wHAKsK36CtNeurySAeju2UhudaBC9EgufKjffQKAibgfqFRUe",
  "key42": "2DXAX34zTRSajjDVndueoTzpSmoThuA1dCzxG2LXU9vdi5K1estvffyqXSurXhm9LWwVaMAZABrJq8paKwELXGen",
  "key43": "45rAnoLQLR6KSBR8wtiYV5mnyBBxYp1qNsHMNEW9S6dimuRUhG24rJ4q93HFxeAJSUusd8coGVJMv94kyvZPnw7z",
  "key44": "acsyrqcXLpybTQdEV47JF6a6NdYELv8yiSr4Gookxxwaaxg5jhqkNiUxFGwMGM3P2uajkRCsUiY1zKUiUpJSHiE"
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
