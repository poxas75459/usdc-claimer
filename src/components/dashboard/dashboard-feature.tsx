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
    "4pC5Z1KEcskPjMWfvehjBwc8AWJ7ucTZS7NxjPMcZHyXFS6L8uPcBsrme6GcUCpViizTnLGa529whEpQ31o69uWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2npZs9wydsvq8JcDCZ99f1CfiAM5uiDArU5QJ2CyqBRQzNij97V4n17W1HvLTBq81HsZ9jRfzFj6TDgheZJCVnZS",
  "key1": "2rsSmnCueFMyCBUSJ6xi7NnZMgLBb9kkzgG77ZBj7KJFmAWDAz8MBAnKk6SDnoi979A8VD6MP81eT3SC7BjSmAgH",
  "key2": "tfnZr6n9h6CXSkVZHJrMDA9eWb5z1PBbRBJrP1YsjDhNWeuR73GNMLQECPDUdXcTt6hC38jocSs8FxhDDCfHYGu",
  "key3": "4ot8WhCM347nPR8B4V73Z6qMXQWNx8LoynvD5WCTB6VGGqkki4g77D9M4oQU1X9GvmyD7A9fPU73aGBXsvxgjsHE",
  "key4": "4JNjewvX1JXn84Xsc73XT4w4LUSR4JXE4dWM1HTVL483KRCgRgJu1TKaGb1RVdg1AmUdUPnDrbJ3DuryejDpcXUo",
  "key5": "5Hgpq7jDCaW8MCWSkiebpcKctwQMeh2xEaymaUcRD2UZ7eKku6yYFH9VgRMyZkJbiGTu7s28meAKJjB4K9ahdTbp",
  "key6": "4xZcaxEbhmrJrBYUbkiRHGeRvjHFvC5sW6uHWGtLJGV9nirmVwXeUWqiaANUdjSXHZzkb7WLkxwoTpMcZZ81BTMz",
  "key7": "5VUv7TThWQTK6XuytM64FkfRQ39k4iESmYYqhYRaCp8JvEAQRnnacJQDSd2Yyc39hAzBCgAizc6fbxP2SyeqT6DP",
  "key8": "3EgwkDK1Y31WjTXkZWkLqT52riFQAWsfnBqbGBkiYgDiGK8PvEpuqRin5dWhqPYSSFAZ7Y7gx44KavinbWW5zYiy",
  "key9": "3po8urLzo4D21fotiMa6pxarUv2UDZi63pZxckcyi1hFhnKgMfJ5Ej5U2MRYMyKWUWMFSLDKB5vJeajsjz19J7qK",
  "key10": "67V3anCmHvbgKPCbnpmogoiGZsoVaeuYZPKyK8LCF8TTsd9vLU7esCsRTFmEjyd6ovvQkm7vi2xWhGtBMwGWXno9",
  "key11": "2Ne4LyAodK5M9rhqhgMmMC7CtAbVFGDZ6rSaBdZQRtYVnoh8pubtSUoPphfRBxSBKNKKU9eMk6te2dhMUkii2Xzs",
  "key12": "3QR3NACuNgznX7hfoq2uwUJVkAuQhX62o5VcwehSgNXLuQNpvZCjka84J5NpQFLxNHdvZCJ1v2eeJ47qHdHLP3A5",
  "key13": "5J1LZ3oSwR1eA452UpvPqfLb48j924AUVg5ZTPT2i1bQ7vwPg92eUwMt83wykAhFJerTvBw5vGjmTuiDr7sybyoX",
  "key14": "4sEMRqDqaNPtmvoQjyTagK3rwwVP4cG2JJq9orU8A4ts87ffQEw9Te8bpUPPfi9xt2mTBZjR78GnebfabdxdvbYV",
  "key15": "2zFo9YLaNs5fNnRrqcYSvErgqV8wX2FXY2XhShweHBS8paULEkcQYZjiEvveczxU1BUwJSxyMAoibsS29BVX3eDV",
  "key16": "66JsyJPvqr6HRVXcQz39QwPwDB7a1Vz545iJsGhHsrtU8CVVVWcaXmsVJGt2pcZSLXjhcZTZVEe67bZD34v1CDMJ",
  "key17": "5G8FRUB2U5jo3RYAvdywACCHP9eqfWJVdccMvbd3H4yPbRNuGt4THRP1g7iBbcjyeXp8d8zHYSERyqXzQ7fXnRzY",
  "key18": "4MJH543dCJVVHerWvZenVQiCg6a5yRTJwANAuVX7HFrEy6vDjy8tpNVSNHTuHHhcAzF3Qzu3GnJwz2BNxzep5n9W",
  "key19": "wPfjtz87eNtRoN6sSaXBSMWqYZV3F7qTXuWDWqczFfuArLWfkFU9AW7DkuSDi47zbvfwv3sYRHhCtF2HXjZXos9",
  "key20": "3icpvf2x6aNNkEob8KU3arKMABucNZYXcj18oJpvSsn1Dc3SPsA8zibDRzH4dgggeznLA1qVyR2x8r9QzknMDCJ5",
  "key21": "31nDk6pjU63EgqUm6FQnRAQYcz5nReDsyMErK6R8tmdXA65azmmaWahr6GLva6GL5W7S2pjRmgRJqtqhEsi5cfdZ",
  "key22": "2bUpqKr1EmzRLCUHbMxNXTeiex4FRWTmSobjfwsUoLM3UD2KmvcVtZoD97CvBeezgGeoqm6wukgES4wxYgEanuf7",
  "key23": "4L2abW2nZrVLsBCtYve7Q7fQa4QysmpCitYLaoXh4dQXTidSPxeTsdNXLc5cjtqi5ysD7fKYKc3Kok27ucXuQp5T",
  "key24": "63b22rKeeuAPFrzkwcLqMwickTULRyEborgaDhEYQ3CRuqtE2qXkmm6hBDxG6TNMEBCXbwWLgeHFBFpXvpugaxPT",
  "key25": "4SF5iKMVyPPtkLUso76oLjeRLt9mCrUPCWPxuWp5LLqmTgj12oDsx5LojXxDRpHAZ6W8RHdvatsRZNACsG5j7dfC",
  "key26": "4CdbcPoYybo1WJRf4yhLBpuH6MEJZVztaCGSPTsyPqki5ioByJUZRcyVyxqiyq8358yHRBVN5uxHSBPJ3wTLr2AD",
  "key27": "3b93rYPeY4QGqPDggYrsKMKZD8pTKTfexNMwQ1JmapBorEyuedYHnvvRm1GJDs1cX4CLpcC9g8KtEL9vQkRSfBB9",
  "key28": "4bXTSRLGn8Af2wLvtCUdaeZb1BfHTnCuTdSeWucJ4nKvwCfdnWddSNyLoHvRoB89ZZXcYXY1z2ntL2oB5DhyyQvu"
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
