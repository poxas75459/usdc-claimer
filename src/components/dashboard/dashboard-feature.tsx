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
    "4AxoGcscoc9KQfVfQMiqycacbMakseyKurKcqocx2jc6FZ8pJYtkbD7Pk93iqJFpUKNRJKmGRLrMJSvH1QynCGKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N3Ne4x2UW8a1Ci8SdmkqG6P5v1d68DM8T1XdpSLuvoqmH7g8EZmJGC8JYeTSx68qPXJrrMPtahGXkg1MTBjinDs",
  "key1": "2BPP3nyfkCu8GgDFmJqWEyH4wRGSZj7eyUrorXgzq4wgFnt1bNMqc4nJP7YpJMmy7bwACWyNREMBBNcpyxqg2j6S",
  "key2": "4ZGa6cBTWSihfHjoPBSmVZbUAMJ6uciGBRsVu8ufE7WWXQT6MWQjLhtrMGB6tRvQruSxBLKbpTMY59aSWBjQG3vS",
  "key3": "34571jCKui8xsibt6ciEBTW4gSoeFdDrLQFEAtX3mMRckFgres4pj7AkYC346m6pvN8ZfaFy2giAmGjnEn8okMSA",
  "key4": "6zZJssTe5wbUWH6qiPHTQZPWXnw6fYkGsScfkgrALcUp7c1TmcHumvYxwQNShj1WCdMs9pAMgJHxP8PBSehAWwA",
  "key5": "65BetPGrY7kH3NMhw6gJQAEBYas1wEVYfRHk96jR4FyycX95gpqur83Vg5VDQRdVjwTUuuHRs7nrdGh8ZfkDAeHH",
  "key6": "5FNcBvEgVbDGZLyAKMyaYn4LoHrtPQTmoU6QbYsKV5rZYA5vb8NZdBDbChAr6Zd8fuMrxU9SRd67A4J2XbMmowWP",
  "key7": "3FEEcJNZXwAL9eWq6XmaEEbF5RxfbLqZ2VKV2Gf4427myzsnKEsY2uvDEzAKUHfaSaFhQZPfM6EmkKz1zWHHoJ3P",
  "key8": "3gRV4MrXobGs499rq3Q7uRk1vUYLgHo3hNHhSUmYfi2ZCLQA65DM6W6NSzDFJg6bYLUMg5r73AyfqeSuuQn8eqBm",
  "key9": "vGT7x5YHSBeTBb4iQrDeG4bCT8VHc947rm1gC1nBU4D9xWyKuX4MXz7MShssajDwZDzorekzsqEHEwygG46hnBK",
  "key10": "3vbe2xKGaDpJqABqH2NcttzCEL4HxYZz1mFo3gihQdgwV9kxspWP1S4ktvpPPK8bMJ1JKwriePRj251YP9iHg118",
  "key11": "3FGDmbexFEquPqxSohBw1ts93Hao5A8ukxjiNgSkyZbiTKFcqFgewCwQH7HQiS7xt8x8bBrKoXD3EyUuawdKBPza",
  "key12": "2jQSNxuaaAhkzBC5yowfRVdZ2C9WDEeoDPxzXhYP4r8qXVJ5JdgjpxRGFLGdtEkAR8jUc3oo15rnNoJvvDSuzPzo",
  "key13": "55Bc42hQCCqE83hJdweVoXff6iymQBd9BWszN2sX2gHeLo7yDd3ygaKhysaDkc7pZYaUE76TiERscueavfNErN1",
  "key14": "3ExWuTmD2CYiVETpSefddaBQqAMNGrQmBDbskbnszzH92NqZ1u6Kc9BCrzncMcHJ8UbeES6pwg3YWBSyqqbEuWLe",
  "key15": "5M6SBQmH1eQTFHGY1JRkpBavncjeUyrdCyW39nVqqtsTUeDtrtPR2YrNSRGcVs4PSJPTfPTMCeFBV4iPb3SqzkYo",
  "key16": "4hprqPVghQjthVSrt5dDLSBJ8zezCtnK6oRKqoGTrE3vxBKayTp6NLMEFBV6PxqwgC3LmggLYW3xExBEzu2MdZT3",
  "key17": "2uNA3jiN8D5ETgwcYTJnaKGWLtfjwcYoGRuoGS7QrCUbUJgLAjW1BxyWS9dgKLji1Lirk9zJceZfFswYvXTL1eod",
  "key18": "5mbcgpBSAuGMwrLrqHJBLCtDsMD3di8u4PXU3f15bLCpAzm9A7T28pHzCBzucSib4nEQ2U61ZCh6kbW7qwqT4rpL",
  "key19": "4uWE15KtoEcFscpUKgarLfVpBAqDs6VcjvwATRSZZNgzSxRB3t4rnGExV9MuzHP4rvMjKnBrYsfC9TgbGDqmbxTF",
  "key20": "5g7LtVHyHhaC8vFp9GRbAdqofaBaGXypNcGxXvTe5gn2ohThnfuge4bqFQ1ZBKaN5rba6tZuwFpEmHxtRCZxrB4X",
  "key21": "3mwo8zkby8HqEfTBaf2xekwsVoBnpptp5T9CNXiSdpziyGCyqFekhBVaHoxGwqDRKpR9a62ZP878aw1VfrWE4GND",
  "key22": "5NRDGvHuxMFEzGZHJ8qJL1W7FgL73bcR1m27y77e27jpjLjvfbkAVJ6UJ8zB9FaLwXuqQu2zwmiTdRzLtor8cTwt",
  "key23": "5nSuoV5dgPFytGbnmXbSjcbt199B5F5fRWbH92kzzSVfx6HDvqxTR7K5PnRBGAorvov2gppaKVWtL5S1kiCRiBzL",
  "key24": "Mp5moLiupSANYVCX3HUyQBUGb73cBVoEHaFWUMjAkEtqLCsLznQukwonaVj1gYQC8BfvgkqBn8hRYyT95pGDzGE",
  "key25": "3HHFafga4YvWQTKKtBhfL6PNLgcWQukQyjoGcGFVD3xuJYg4X7mt2YwyuZtMkXQHicSs5QKgPSCYryGRfgLj5w64",
  "key26": "2r9nWd4D39stWy58YvvAxeJST9tTHKqxyx6SbkqXiS1XzVHyANmmC8TJS5uSSsLL8RCdMdF33WmzTW6Ain2F3Jqp",
  "key27": "3oLpMbt8QTYzkK2HCmnG7HHZcLHUtbbmbsFbQaNqK3c7rDdeuyi1vxpy3XQQy2oT3vcwvzhpJVEBL3jAyWymvXyf",
  "key28": "5kEHfqAnLN3iP4gAKqCiqSyXSVbSoJsaVeyjokiCeQ4kqD1oRXs7kj1dUEr8KY1DXsgbWQmCHiYx7Tbg8jEnc8xx",
  "key29": "2ND9vAf2FNqFmv8CjNHmXcZRM8VsTy9m1MCWNymzdhaZvPzWg6D7irVnFmxZjgf25dcyvQbXKMDUsU2FoUfbQZo4",
  "key30": "bAyRcVG6aXe2NtcrP4zSRAE8GqnYUT8amx2cuoY9U2r1pKiN52dSTg889S8qLiK5j9iwJVz4qve9AndZhxkbFL1",
  "key31": "ZN63xxF5Eppj4d2TYwJgdicrjSADcj2MMU1BBhb5qbzTbLMUC86uxSmZziVPFUJM59ujuVMMJbwKL6HU2b7MWPR"
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
