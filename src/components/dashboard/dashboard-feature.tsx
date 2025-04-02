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
    "22CVTLeMRPvTuq17FWyQDU7yDgxTXkkrifySPzYKX7955cGe31qBugsdES1oWNBYFLJuKnCzRzwNFces6sxQ8QFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvMxEL9bU5ZmXP31UhsDuhptRdjXc5G7xx7yjmx5fVE35uPNzPKENaBUSYL3JXPUiU2G4vd5hvGfXqN5HvwX7JM",
  "key1": "AjPDvRJeFzignGzZzPaa3PrpeBrUev3u2WZVrzbVzdzAMAsiyQSDHscf4uh71TivxcnSJbrQ4WHt3TfbZ6MyUo6",
  "key2": "xqie1VeJPfWQcR4Ftehci5CKLmpASYK5STimdYD9gMg2azNAu92xZnCFdTHfcr6Um247DxD2sDabPg6L8hSAQJw",
  "key3": "4p8SRxStfgX6kEH9befJv53856SnMt7wiVw4QNLUSC9wGiwt9QK527hrUmmGa8YVUJSHpjhMjF8vMKLnritWX1Fp",
  "key4": "26CNK8YdHvb4htgPmrWkEomcy5iRf4zW65RTnWip7yommtL3yUHaYRfaY4YUM9votdaHdHNNvLBBU9W1S1tyHt3Q",
  "key5": "32amXfxNMtBmkuiDxpc7pefYCKwaYb5XyehF3RtwtUk84c6czoNQ4DE2Qef4Z9btmbLpzyjZ4ZihoaASWBFdB4cG",
  "key6": "4tV9G4xk82jYN1toKUxbDWEW7nWpDT7D9eUP6Y5QEEzqBx5j69EUQte1yn1Q2tvHGiqmg2ypfY8YwKLrvgyGVxCN",
  "key7": "KfFmM6iM2SyqLonEWJRtYAqaaHb8qMuXDNVnhq7HFJeNNWEuR7hSfanfPsS6m3Aeg2w9nsYLSSFXhYL5WbWsdiM",
  "key8": "3dEneRy1UYdKL54aU5y8TNyBPMdP1szZGRLkofV3hHCu6EJyGNmSs6H6BiXpXWwEi7wTFzqtxYQCwN37vwKJf1DK",
  "key9": "2V2URbq8wg8TWNHZsR4RgkDEjLWoeW8eNSUdUhWgjHrimzf8Yvu953N9pLMbTvhjGGkZW9STgWLiQbzGHbQU5bQi",
  "key10": "3VAdK8ia2ohDbBLNW65k2G3vypPjp1LUYLwJP8PwyYpkdj4qi33fJwLg4WCNx2wfKY6aMdgWsK1V5E8FrbaM2fiy",
  "key11": "uKQDJFxuCUeEEDqUEksxG5U483ZkaZidH8JZGrA4b1ecmX5s6yNsr4tEk2knNPkJw35YVGfRZT2BC6N8ws9Lo9w",
  "key12": "4iMxSBdobUKK7eQa2DYpkD3b7dw45HRzJiJsf8MeHcfWDReg4agN3yumSLiz1V6cnbAV3RXG5EHM4EDQrFqtx2AV",
  "key13": "5byWSMYQBwgPnvdZDBJjmDB2tPypgsYD4RdErXPvjXYdHTs1M8ov87zJDFT4obbPb9JB6imn8ZX8feWAHnYRuoQX",
  "key14": "2Gs5W3XJnHgCdU2NdDhFGrV5U5oVRGB4s6wVWNW9XXkos5tgpU48uVvq62T4XrSpEEdP2GTAHuRLCiADoX6eZHMo",
  "key15": "3GAhW99kGRaiozpUbAY6ZDzNjQ6vYdP6jpfnhcPtj4Zyq8t9DgVE4ySLYLK6vDRzoKS2AZiV6gKraXgYpmJoGSm3",
  "key16": "3uPgDoNCWbccK5QvZnzCSHWAVJ5PSY8UM28ZyTcECTHbVJP2Ns6k3kpgv7bb8rKiTzRbhB66E67AxaMUPjxSzqKR",
  "key17": "4nj7NzFtfqKBEjGwXvPx3ymSccggj2ipiE4vKqtPyvw4KLuyvqtAQ1VqJZZYzRr3NuL2oBBrkDnTL2nL8eBKjSX9",
  "key18": "3JQYRt5VXy4ngrWRLeceMmnhx2MKKjY8JKqXc5t75zygd1F8bpKWZ1sj6Aq9kfYrrw9CB2BfvPxR9yc1PhJWN6uo",
  "key19": "2kdUJ33XcHWeoaYKn96DnrebRfDWNayuB3ectQitAM4RkhVDf4ihjcBqXq65iewuQXMtJhrF41ToiuuFKNKWtWpX",
  "key20": "28zXCcn5qMSDjeyySfaMdFLVMZhmKKnsSG5Mvy7yDAx9PDZ6dKsvvNUk6tFE4aHSxCizhYStLzRzEJSQEH3GKyrp",
  "key21": "7AzN9gTQs12t8A8BeCNcf5hh8dRrnybM8GfzGWqkHvPtJYeFqd5m7PZpeHmCkANbCd79LcL6Fn5q9fPRQuYQ1EM",
  "key22": "sbgkhKgiSymR1v4vY2UJPRzfUWyPkHS5qq3mpQrJsncr8jhaBpWPjnJB2gH19eDZTMjV81sNfsFr3RyHQJq3HXH",
  "key23": "4P1fYysBRNgdSrNrc51kpY4Qp2G5oHBSGXNcQJr6zryzMYEpuVacFZ73GzN9EVKPymCST5y4nwZaSF5W3mDut4nd",
  "key24": "4MTFEmdWvbBxSpMwNXLVDZt9VBuJ47ktkwLALK9X7aEMvhRyL48WWNCbgJAcGJTiqzcJt3LbonEt3r67CQFKHuxF",
  "key25": "64jfziRXe5eSgz8R8Z7BQMDUR1Ua1s3m666aJQUpFzvxipmWbV1n8JPQUPQCKxtdYvufp1M6SXZFdBTkFVvgFhHp",
  "key26": "4fckjTYsrsUDNksXzWPBLWF3ig239wmB2ZGveRcGHdqoFboaBE9ttvZn58jZe741WCXqvsMMNis1pz8WUeXYRBBg",
  "key27": "4bSqATq7Ny1fpJp3XgrgLnNQZM6bTKPTeF8Q5Dybqz8ZLoKSivzLZtkh9Fvz2yESiMEDMMcsBiq1DUyzKMxUGHRd",
  "key28": "2aE46VZaW7kpEYGaUJvQPdb23WXKdNpFeRdkcbtCRgHB7aoP3YgyZR8NZEPXDH13VbBQgtA1KC6puH4NsySPeUiu",
  "key29": "QgBzzaY8oPz5jL5Y8XDqGEQgXdGA291Kv1Az3MY3QhaFRPsnKbRKZxMrwBSg7CCaBP49hcDsenkyDspP7LRqDTx",
  "key30": "4pNPG9YQZE4ZdTuNiUvCZkJa9BWkmHKknFnJBRHawJAyBFQemAEpRB2t5WPNW9CMePDeKQWR5SBBf6Ymqw3X8aKv",
  "key31": "37F9quGQXi5MUNRaFGs98eWuaSGQUe9CP1JnVmU3erh3QfCmWBqrTSLns47J2hJWsLcs9WWYzQuMPpGVzVhCE3ov",
  "key32": "3xhcx9PecTjmY2wYf8JNNrBvQaUW7iVPkSR8XyQbC5BwRPNfkDQ1XrTnZfxbiaE7V9XzicKscwsmKLVnuBBjuef9",
  "key33": "2S2KEaHeXR9MAEfXr7NQpgoFkvEy8y69Dkn4c1TALeiiPc3wWR1ZiHYmNidU4YVWgG2Kb3tQtzaZFmbCyHB1qdon",
  "key34": "4cp72gC4SA8bKa8RJ9WysZpTXbhFDgJ1oDTTXvxViUrQQYEsmgd6vf3U1xUY3A4MZ4sT5nXvqzhu61Wi4bc5fcpx",
  "key35": "4eEQTkz3k9yfwgw27tnfgZhkyrx9X8yXcyd42xLZy5mw9i9TiXgLVogroKz6nnjuvLcxwMN5Aziep7JQLouzaRwW",
  "key36": "378mcSPiLkVZKfR4e1P8arR2KNHBDTSZwZy7tp9z4cwNufQrcNxzpLbuiA83Ht7RpQ2HCtseezszXuwnPR5MesVF",
  "key37": "2r1VXDNaYfLKJE69oU2KBjtLvcPxavnFeVngCdp35cq562aUVCb8y588RBDHN7BgRgpksubLD4T6iqkTC3z25k4u",
  "key38": "4wFGDv9GjjrAQJ4vcEwkrEMHex7Red5nzU8e6nT3BMfuJ9y2xb2rqM1dcMmUgrpeFtkvJKv7R8EDStQw4M2nTGny",
  "key39": "2YBVZ8JhtkF4wXvefrF1PB974vbgY8d2MvrZSzQYymQEd8jh3ULhsmTPbiHBNAzW9PHYJVVBmEtbjaJEeJ9u9Gtc",
  "key40": "3mtLZ36PapJpV6kpoeRqXiL43ymnMYR7rB4vXZuorVtihzczVVse9YK42eWnYSwnNkGo3Tz1eag5pdnHPfxwMrJ",
  "key41": "STLADjRrHBDu6mQGX3JbL4XeFvNUtG53k64NgiMVmawixe5uJWhEQC9eoQefvSJtMVJRja9jF2ghyrktXPP8mY2",
  "key42": "3miDxHAqziFW8YWiigLRdd9ibgAmjmrBw7tkNeCAh3NboA8fMWvm3hfNEfiEEeqSDmEWGvPDsnHfqUSAFG42aySc",
  "key43": "2CmW1MXynLFySqAiN3on16pnmkLAY4n5EDjX73Fk5QspcwoPktE5R5NM114TvtUvDrYbWUbn9C7ja2ab8xMNy1FQ",
  "key44": "2Z8m1Rfqmo9haRkQhqyVmmnZXkxbXyPyeCKjYDuKdauzDtcSFxDeGzPXgAJ7raddMeBPKHgcAymf49Tz3dbRm8nQ",
  "key45": "4K3yYxtkh1b4YZU7yMe6xE5fFdaZ3dpyJiNC7FUDnGGpRi5MjKXbe9SVjrZb4sCs5fmJLwJTdou4g2xCpwuMu9zv",
  "key46": "vVhJb2s8AkchYAivju9CUvFZdDXiNoJUswL6eM5WEopKuqbYiC6PnE1oJyEXqvGRutFvC7cYszhpjHwm76NCTrj"
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
