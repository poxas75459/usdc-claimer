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
    "Nwjde8JKRjYa9qxM1moofhakQQ4REfsTYt9oXJJJSS8NnXaMCxmvpumVqsNYNcF9qBmtRu4phbkAoVyUTew8zG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21D5Jt3VVRiSZobNMJedZixtj1r9p3gAcT72zx3Z51VH9B8FhQZwuu6KddYtohiYCn5UgthFBDvhkNZwRgyyeF4J",
  "key1": "oS4wdVGTzoLbMmoX1Y8QBc4cZ3BRJHmyW7Adj92GMsryMWQ8EHfSS4tizu5JQj5S9wYTMnS9jstuHAM8FayiTCZ",
  "key2": "5DUtzproviKfLY4o461iJsrv79MiEbgFyoDsnMZF4fQ7nduQhmWFQ2gZxLvhnmdU8kJciPUNM7KvvshGgpHdEog1",
  "key3": "GoyzqVM5L6KxLJfNzSS5ZmAtxGvuFmSeur62LGh82Qon9PjR9q4SLGHLHe115rRFhLuy5jDhn7Cv3cqjuE7x6zt",
  "key4": "te3eVGDZExGyuEe65XVV14aTkjJCtJicv39h8kUegSWyBvDzsgR4pKj2p5FRf9kUZBibzZXj1SpegdppF6WzXxX",
  "key5": "3eKkSeYPhomvwB2wusbbb66HDRbbAkLFfM77fJc1sR6xWSMBTn4VP8TCRsPFH89UQikktWsZaPTS894ZM2HNeXWA",
  "key6": "5hC1j98TcitiKGgKf64oPEqgdCjNyg4Sv8Uz4zBvcVnqiCvi1DckLoNKKTTbaFMESnnFHj2VkrtDcFbrP4yCzV6Q",
  "key7": "VmUjMSRhGHrXwGkWD7rxQJmpwEd4oYjepZoZii8pKsG6qo47p1ZTgQDfUWLzC27iRccuyuFgD2npFHaVpfbTFcK",
  "key8": "5EeJFzK96Pav6zUELTPeWKGchs4gTYLNwHKVWzd3cDbqJZAS9g2Cb284RodtmtibwrbKV2HpLsK3HcUn8rP72Foy",
  "key9": "4taVtxDmrdD9AxEZCnhSYbG3fwPWvFMy7KmoPdZBBFWKb9GEMmy22722JWMvCqGtCSKLJUFTVnNcKHvTqoEL6Lag",
  "key10": "4hzUUztaqD9zX4bCiKCp231VoBD73cFHoJevfaKbMbBBtktrB9LuHuwW1uo5AKbUmBDPmzMsJ1aXtF32nFp9xvRw",
  "key11": "4kyxD25JpcK2uZxgZCzCo5gTKYRpATwLFXMw3kGLffu3ZdqXWvpy6qsn5BW1RHxjLqFrWbe2BrxasQZUQgiFe74k",
  "key12": "5kJqxwn6pgzFnpbGXaAGokgxKgcxZ1fLAFExcyYzJ176bo17For99pvuSjTFSjLZvan9kyfiyMjaiwberP9AyZoj",
  "key13": "F6qgf3ZjiQKw7khk8FWfE7sL93DEJnqU4FrUhHzdqkK8t5KUWakPf6RiiepatnuuvgmpcpKDcNLk5Nt9ADqXuEm",
  "key14": "3f6FjfhgTNFhm8MnZwXyiopeWkrCUqzZoDBhHrSrYL1xpnhNrBBQGi3XP2eHvFB4HCWfh86R83RrG96bFpDfFgnF",
  "key15": "3QA8SDs2anMZnnGFCHZU818Ub9nuzSSaYz2FJtXuWrUXiFjQBU2cgNjnu6dHKAQVwwmu8BU6Zhu8z7rxBc7PVoX2",
  "key16": "5zrbKvyVcdwKCvURP9rhYdZ8vdZvF5i5GvXwrKps5Nit1wht2aLBj16gLxiXXfP5P9CND8RFjL3RvGNzXrtSgqY",
  "key17": "3rB4QbDnFsgf3JKouTMG9yhHHGWy9KgTo2zDg93X2KpQvVv4M5L8HY1ftPbNCyF8fPRMmG8cTimaWnuxX7J1Czig",
  "key18": "3UmJUbWzyjaELBJEr38x4nUrYXKqBMK5Nr1H1aTVyHDfNFa7zP5EcjJAAhyvDyV8TvXcvHtD8DekLWpRvbuqvkgE",
  "key19": "28v2WcQGLhpPvX72ZkZH2RR2H3CChfTf9QHDkiS1RxVtxbCNLp9BCAg2xxAGQ1aDpYmPFPCNgVR3hb8jXJw8eDdS",
  "key20": "48WRoyg4aCuF3qfUzWYdfJ1i6DSr6sVx2jU3PAtaZpQiaLsAwMnnwWhZfRLAMAw6ya8dsn89UqD7aRLP4sVV6A2S",
  "key21": "iqYpt5VT4s5trDv9s1t2wfWiZkfugcKVfftP6RC2DsBM2qwNCQ8tMe1wE8f6BpS6VQEYtS1AxMdcmMZm1MaM3mv",
  "key22": "42k6wNy8e5MnNzzVSqPMZkSxsotDVzZthncrtE8wdh24GrCAPa2PfLMbMDkuzz4r356q67VyHMQ1rYf9sYFpGtzn",
  "key23": "3fvxURUXBYWDrRG4hFtc8Py6eEEY8TDLTUhjda4Q3t8qG52JimxntQAA5g9bF8dAzpj3D3QWUc8k1aTHxUgKSNPk",
  "key24": "4ggpVLXJLZjpK3DvGQkh8TyYoeRLCSQBVxXFjcQ9xqL2ppuKWt1LM8knh64csU3ytfC5fPhd1erkDb2a9m76EV1H",
  "key25": "5Kka2DdDboMRgBr485zSCgpnvCB3MD7UPjNNdxLmbxtW4jR2riJhpqfWhC3D5EvM5awN5fZhAk3BCkKoDMtbVLSE",
  "key26": "4nkKt3JBP6YB7Fmk8t8CmvDfSSuw4QsmD2uKSZMdiqpNE5yoLepLiWfNfZUHGzkAxwzvxXDR1SoMes28y2hNBdZ3",
  "key27": "F9ZLHSpEg3nsZZaHyaVt2yiecYek1Try1k2rupb2TXfidTdJEq1exz83tqbLCCXp1STWk4mjSowUn1weA5ysvft",
  "key28": "3eBbVWzniqTnFCvF3Jsnoazrq9qVqZuuhbFsFjwjVuH7upHr2GsYAJpR6C5ApbD3htEDRwSmCj2ZMLcYVo7j1dxu",
  "key29": "2FtJiLLZ1ESTCN5QKnSc1uvG788Uqds2eGrUxXhVygp54awUDndE9erKYYhnG4KjvqZ7A4hnbGNykzvPZnWnJ1sz",
  "key30": "3SLkidJPS2Qc94FTqeWVJttRJeF42UqGTgMfebVtjnAjcxjiEQD9yeaLPPovKTdy2GwkAK4xva9vb2qasBco95u1",
  "key31": "h29LFhBTLvYoc9ZJ4PUjFYvqmmAJHWAeiqKiFLmsiX2YLeyUsf5KGQ4r6mgt4tDggpWJ9ZQsGPBJgLmLUBJuSq9",
  "key32": "3zPtaMeV8rWpd7v5zpe3ZdNmXiyY8TCmiYN25h48dzbu6tPaGvXtiS7gX2vGyasiZxm6qbgdjezqKiEL9tYM6aFt",
  "key33": "5rjzXt7WMfzTNSyTMvbAg2kNH3Ma7oFo2gD8E7uFJNA32NHwxNFYEq1TsKdxtX6oK1cWRx8PJN3647QV9pzbbjUj",
  "key34": "23ohGBzfo5ayGr4oryFh9tS5tW86jGrubFbXhhB2QViYzBzMmU1RSsYBg4goG52y5BSdDmAiqYwFhFevX6p7MJmn",
  "key35": "5dqX5BpyuF3DQn3WqRezwrqsB5f1t7fx7Z4QibdovSgCSmdYK13CQiXBofrEFVTG2GGipsuSRAtziXivQJ6r5v2p",
  "key36": "57aA1FVkNsYAnDrV5xnXt19gC8GgqjLCJxHxXPMrC4Rc3rAgMdeuEf1B5BPuQGEeTGAuzs4YXQ5eB5HyPA2spStC",
  "key37": "3vSTAWPUGzHHDDn7xcJcM1JQqnCBNxSP7akKey25ydqjd4ZSbmNKwPtmF3XQpRbo7d2GztQnEwcmJ8Wf9r2jtZ2F",
  "key38": "GEeTqtRv9mGw96AdyJ7zvnYQF5D9ajDGu4DZA19JATFWwG8d1WcKt3qNVxLrdLW8tdSKW9GVrrjcCe6ha3xgyDP",
  "key39": "62PDbLtCA2wfQWXc1qFCmDGXZkMwPdrfozeXtSpdhNTXNZV8RqeLKJ1y98ycek9BYiYfhcxA3e63aJg9UC2GMUrV",
  "key40": "5sakiRZwRq3grnMT3BM84nj2xYWENQ5uQK1pHsWJG8PFNWPc1oxCEbVfJhCLRzqUcNWys1C93GmuDmgDTpTM6zTK",
  "key41": "38sbaEoMW64UqKgwtudU4bF8cpFaS1Nd1TGFqUy7wP9UwupCQpAp4zs554eWzdQ8kDqutjYvEbHaosaT2xA6Rs1P",
  "key42": "5JqsB26pCnF6SM6QDnqiBCJzDmzqb2v8XRjp49HJce5gNBuvpRJXsAX9MQDKrGP4RcKiS2T3fHo7LfJz285B5Lpg",
  "key43": "4cTnQcJiK9iKdoVeEeQYCydiPe1iKY1cdVpc75neT8PTaoNyJJtyStYVjxjZnWr1shy6RLtCdGFptUcYKMDjripB",
  "key44": "2nyMCwyovUDJp1XcJfRcwET55HStirVRtuJySR7JoEQacDWm8VYE89hG3GriG3eN5FT7hjwA8AtiFYCaeiykepXA",
  "key45": "4LbLx4kRRn1fRppRNEUZy7EKonU66bwyH9DstpkAwQ4YYWGaqBmmQkb2EJvC6y1NwgZpj29T2AorJGuJCs2bsB1Y"
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
