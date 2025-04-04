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
    "2xo341u4cPatDMbKTo4tamogTHsKLHkRQh5p1kfRvQxRFT4znyns8GtWqmpjatsgArBuVqFu4GYUV4nGNMT5HMWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVcGGW2ZidErmFVxSLHLmvpYmfBvCdDXTuWaNgT1qUq8NxDJdVV9ETb9pVikzX4vg49o8MxB1QJmP3ePvqP6AMF",
  "key1": "2uBLzGWpF737Jzmrd8jbAnYhU6MyNDw5NHQV5FEeeiuuCWzjYE3yNkjeCusqrNRhEJJiCx37ZcsSSUWei5wNLUxw",
  "key2": "5N8qXz2icP56fsGdSmETa9SN5g9pUnXXaoGoNP4AofpryrvzwzBRUZVEPBh21xwCLo84zjpKUdUUs7WR3EevuQCn",
  "key3": "2BEqi5qFY6dJBGLkRs2YeRwUBWtzdSztG7Z76gWTDfxG7udENWvbGWiLYDXnLWCdFgiUxLXu9hmJNLZcZdrRFJvh",
  "key4": "368n8CXijRe9SjHkYhwT7Hq3mXUSCKGtcRLLRBzCsxqNMyiALb5CMqrzo2qgZgRbRcfGeojkcK4GAgkHr2VKtavz",
  "key5": "q72sY6iPzMCfzruMfwN3AAbFuLdh1Bpj6AcaoVTAUumDTB62JBQCjH9FaFziEL1X18BM5qyZxj6nqupcDhG2hGA",
  "key6": "4wzXKVme8AmfLmA4pczEaFPoPSLgabECNGCmYWRY7bD4wMHLDjPBViLwoiXRvorGq6L7SUgm1gNJoDP5KR1GsqPP",
  "key7": "5mDcJjbBt15QrEpKibFhG4GAdq8xZ7MJSSNgkp5LvjiCXsLWWSyh6wN6g5ZkEsTmcb8Xg6gVwcMymwav74jSPLpY",
  "key8": "4jZBnh67DqLENHJ2mKF9JzDJL1oZyMWyJqo6o2hHVv2GtjCp9qgcpJ6c1RygQG9TP51eZbTbSF3D39dYj1SYB7QG",
  "key9": "4ft9EKBfcU8tEA3KRviktdPL1wo6zP4xgUa1NNtehMSTHPPdxcmgXgLP3piqbQuXuda1HpcaRYr1c4qEpXwEVLPH",
  "key10": "aJzv7zZUdH16EqQwaxe8XcktuWb2bNNqr9kPWm3VUtdVmdBosmo48oL67aSkvvYRRe9SafcjEgVPUseGgGHwCFP",
  "key11": "4eg9ZTjtcPRhyPuT4DFhCZgnQa5AP7m3c5gftM5QrStnMSouBaP92waspszagMcWo63dt44nFpLLgTLNV4Ev477Q",
  "key12": "2oWVLFGpYsM5joC8bb8YNXa7xBArvvWJ9c98qQvU6VmULP8EAywCFm4nEvB2D5MYFmGPsuQL1tWnAnM8Uk78itoN",
  "key13": "3FEKwY3XcvNQ8GaF1w7kPt8cntAFKEkCR74r679HKeqHLhVbjFRiTGQkiubW44inMbgxape63FTVZ9DqPpUaq4Gm",
  "key14": "5QejC6kZee73TBrFfXDSqSY8LxfewSDAMQz1qa5RiHATsMPPtkkiiRzayMJcbD9C2mDmhXNQ2ixFn7fv3PTVaeam",
  "key15": "434ZiQYGkG2j3MWmD9A1j2Cow3zcf878LRcLFy9dvkUDJ6ji2d8JSSsKA3wGAL7LkLsEr96d55P5RFJTSkvAfW9P",
  "key16": "5gKCarJG6TQY9ZgmkKSZDDQW8y2aqc8ZHARvRNpmtAtw58Hbm1Xmuyv9WFC8kSdyxPauDasoEaPANKjqE2t6xJ4",
  "key17": "4xcADqbXo2fECRB44EMh5GQCk9Y5dCQNGUzpLPWB6YNiXTRHUtGpLSR7ZhkTw7z39uSHaNGyAixuqgrJZeZf159p",
  "key18": "zRDTcyvx1qhA9vZLLVhMZBFpXBiuVRSXwvqzKoR9Awb5NMHWaX6Wj2ttXNH2EUWX4q6T9FU8qxBLc9e822qMHix",
  "key19": "cWiSmGAyvuVDDsRsPkK92KxSoNBKAyxAoecyxGdn6kgs1SpasJe4JeMXGGz4HqKwD6ePUpBHTY86v591ed4X1P7",
  "key20": "5TeASx89hNSRe7GYMxZSHo3rxv1MEpJz9oM1JF2MfXrQpfTz79CnAVRPnxA6FJQ68s9K8hvVBorWzph47zKYLFkE",
  "key21": "DdhGXi7GbntL93M5jzuD62zyBV6TZ2FtMZdNt3VgR9jJFxiCmNaodGejh8QDir9AbMDBVSVAYuJA1a1bgoJKeSG",
  "key22": "4pNo9boKHrNm5FYySHYpG1NA5QpTw3zqJL5TvgHwUPsRXBPQdh1w1NiZqRWe1u4zeXebu14qisgCxvseMiqqHHoF",
  "key23": "5KSmRffuXtczxsH5FzrdnS7HFLQgK6RC86KSCMGRCp8Rzjgak4cGceBmuphrkEBbQ9qS7x38RrpBWwjE3ZuTBzAA",
  "key24": "2PzBSUsZ2E4Hq5fzoPRp1BK2G9Zf98rn3NWTbBtUsWu7fr4recZEsYg8BhaSPjAXsdnUe7u4CVY5soHYoFxpAgKG",
  "key25": "3xMVrAGaX8HAnDfBAs5u1wPhy4Sb2WbvAuwEmQDNnfehTQuZnfVGG6Snv4rqHvzC4xvQF79DJN6U17VvWthQF3q2",
  "key26": "4Nkg1Ho81uCSmgtFpHoydHjg6hn2wNPp57rst9Z4rM5jZtsxQQDX6hETgY2Uesq1FpCyrEGjifrsNQx9MTXdW1xE",
  "key27": "4ZaZPxErxu83tVF6bMad5pjeYDdvAfMkM6S6R3DBoTgAQscqsjSSh24xSw5kgVgFG9pt2nnLTDPgih2kYHKRFMmx",
  "key28": "2Ppkr73BWbUXt3TMK9suUxHvRv2ey15EHyr418hkNUNrSqrAh7suXkWhKL8chvDNeWLi2ofK8UVmdAVY59BpTWgw",
  "key29": "5E9gCbfzNBtZCDNfMNjQofSyAcUqdZHkqjXKkaYw8pNzNQB7j5g3DSNc5nZw5stYb6bd7TfHJXZpTzmsCNHtMPXv",
  "key30": "4ZFFwnWxbASdWf9t5tUkD4kywziQuz5ms5gZCZE7zo7Q1zPFhYbDSZEXsSrrdHpdEaBmRaoupDdzpJmHydhdUSpG",
  "key31": "3SQtLVwZYDX7t8f5dyZF7JTgQ5EZTvu6gL8GU8obbzFsxiiBjhBCm5BfxNCUpJAwW8BGJ8UUUfeRfaWbTVKQvHS7",
  "key32": "4Se5ZnYcxqQfDh5Upb4oqT4JKP5Ad2b8yu18Ba4Q5qVd14eQSxP4xkUcQzxdi8SGm5iwa3waHQFjQCV4pBEwzt3L",
  "key33": "43SsLb22V2Wq918BjxhfW9XyLRcXub7b6fc1v7DDwRai94szsEaqwBLhXr2KHWkF7Ak1kijk4asRzE5ArtV6DFUc",
  "key34": "5gtccjrdNPH1BA32i1sJ3qgTXXfinCUibUer3LhPxvcu7BmAPHDahDWDewXZDptzNj5RVzjGtJihqbRmoNyfyEqp",
  "key35": "5767BpFszruFgx3CTZ29dkZK3yCrec5tDyXTQvBppXTQcwLU8GxqAcAyx9pWuGxjEzRZkTd2JRftSN8FtAtL6hUc",
  "key36": "5Cfbcu9YzJBeEDUD9oqswg97pzt9wVCerd4ujNAd9w6ZUd3o1FUGs7a4uqdsYsdDXp4oHArJGHzEzK4NDCHzR2Sb",
  "key37": "3wEwXdwX2eQUvwy7QTxfdP75KQrbSEwpxWrWvv15VNzrQFriH7HBvhjfT7FUeL4qj2hPuXYTjpQSzwjZRRnKKvX1",
  "key38": "2xjK8QJUAvobrZgxRrVQtBk5Up1uVEaw4MP7ieQhUFNYcbQk6utAadEShMer3PjtEWnV6ZPk36vagEmHd8tAhP6d",
  "key39": "hsZPiPsp2n92aCnUw19BDudDZRhTKpKJQ3GAKB41QfR9P5BJZLfDpjvaqTVQa9hRqD54kJjsiTuucTXzvYH9mH6",
  "key40": "2WjZJy5yZZeRK4jvfbQUD5YEP4fMbcGoNY9gesG52cgk1M4vqnA3Dc8piVVbJpiQ3KPDaPc8t3YGTkzzBefJZtb7",
  "key41": "5eqYQr4BUFL4fZXTuPT9F63c5AGmK8vkmN7cPpxcVXjmybFGbayu7nMBLk4enQotgx6xFpYeGG3uchuL5b7MrhTU"
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
