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
    "4k7Z2HEJKrmx4Sg4WhAjwe6zmTpVqigiQQoLYSwdxJ3v4gtdzyU58qm7F3ChiiHn3Fyr9AkgjyHa9v8o5XkM4w4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JykE7ksef7xXqeAsguracB9xdBawGoATQsmDeZYswYrd1Wjd5MQAv28B36fP92JRBJR5iczKk2SBBbGAGvWVRD",
  "key1": "2FZ2CqJ16n6tDrZgJXEhU5DiAjPvtxMnox5fziaUgcCNtyZw3ACGQjfEyxz818ioTbZujt567RWicH4QCxTbbfdD",
  "key2": "2m9T7j824sUCqjJCURUEEWpu9Y3T6SGaSSKUMYWLvHPtVhkLAqrLxjq8sb6nY4LnbTYby35pHDdYiQF5b2Eqsmtx",
  "key3": "3s7DXxFWZLVZaQGGstW16Fe2Fv5BazxnW2aMLUWYTofTNjp4jQqb5KkesWawZQLRPHJ2rdJdoZQdjYYbeqaCaJV6",
  "key4": "4qayaPuST1dGedJfz9qRqPxNzU5CniFhQry33iu1sSrrLew4C6viPHadHVobkZXLDb2tJp93hX9PSiXPGvhjVVmV",
  "key5": "5MMU49hYfvU8Etd7UT9HxhR9R4fJBAATFy2kPpQDgRrwKAFE1TtQdcxXXxEt9WjVrohteVS9wjRH248XP83L7UH7",
  "key6": "4XMp19pLcsC4biixV1Zp6HctGgkuwkC6vWLqaQGcSWKA1nMvrp792FgfKQ7m5phQXgqkSrBNsfreWEAiZggri7kJ",
  "key7": "5PB8i1kmm72Lz1wbN8QqyQT6Et8M2WhBSX8srwGaFLVDUizBF3xPp25szrE9QnHPV31A7n2V4phG91aSZJSmsTap",
  "key8": "ieYGBzuvi2f2KAQLAr4Vx9Kofa3e19ydDCrwRFodjAFJqUy5zHzwbQNvcYn917v72hQ4sXhFufAPr1v6qSV16kQ",
  "key9": "4W3eQKfe1UZGLRFVcvf7fgWWSSgaGaNVBVXZe7sdLwkgFqJjoCc481GT7tV4iGSPChfDdEiWemZRzzAiaNbsfPVh",
  "key10": "4hbErabjZWG5PALkGqzmCJrVGBvC9ssQ8fTryir8BuKGkzxAMyzDe8Eqme5iA1YNYd3vcWcAiXFpnXqbCbugMthQ",
  "key11": "21aAj6oZH7XtFEYtsyt8kof6Gti3ymfRsf7GzGcDfW7Ndr48bnRgxrYPTkqApMt81QzL3aoEybRLcAzfWvWWwqi4",
  "key12": "4DMGLepE8286VWibaSH1ib2RKPq4BPXCTwoeLkVATqw7uj73v5n8nnM8fcso2rWoT4mF4XWXmP9w3RWnNDQGWV3u",
  "key13": "3QXxh7MceBpUE96pniUvKDaj17E8yxNuxuaLfFA1yh7sQYaAZ9Xo3bTxr9TA7YLAPfWyqYfTzgvW5QTHVdGJjF1w",
  "key14": "MbfNhT5yRxXHMaE7uMr9vrhv35vHmozVvSzPRFShhb8x7atQWerW4WzsstWBQeankjjcw6mVn2T3GCdrmJmS5CZ",
  "key15": "57Wwwbuw4v3aikYWhqg4wi65KUWPMiWdnqXYzJbmSFoJQzdtZFi8bti6rjDEM2YoJKqNZhHMaVKwpexwJiMhwGt4",
  "key16": "25BnndBWNgEf7LqqzAcV3wbkXunAsdFAxLdffP9cB4LrQkqgHky5FAuhM6YAzXMoBi31nxRJpVokJZJtmVtJSGDM",
  "key17": "5eXhBFY2k7vc5HajySqPgReua4qkNiA27bTBcXapDZeqk3ZYHYhn165dNXe8rixJwxxdtuEHGDMnbFaTBUCqHPKW",
  "key18": "4vRxuQQLeV4Y4wErER4NzfWTdJHgTQW4Vn1QhNqKnbhsqTVuPJbWLT1hHLFMyYgg1aDTHnhYVxcfsFoiQKZ7yzdk",
  "key19": "57gDbHmsyUk4VQCrj8aag8AakntzhDEQRqaQXP1FyJAGd81ppg22caRhQZFqBGDrQ2BBQPEYwcq5jCqiU4hsbbRh",
  "key20": "44qXyFbi3CSj5FR5vPqy1fsfqEWS218L4V4Vr877LZCP47UybZjDVSWy3GrvFq2BkncMQ9kd1EdUtj6Yn8iETUbj",
  "key21": "2f2w38rGGppweiWFdgUkorPocernuM6tQXwsfg9o7wKAJSKVZwsTrwLhQDicdKdBjBE1qM2XtEtNdRyDAbBBBW6h",
  "key22": "5gj25bK3zqAeHYRKLvkmiL8aPSoAQynwGuSmdUYfJhzr7F1D5zbaLorut5jxZ4iDBZLZVWVtndscvmPD4bqM84JJ",
  "key23": "4BrwhzLje56rvWJXMeuASwbBGRfEuHvC5expd2uVn9gjnKA1Yhh9Ti4NqgwNXoor4XWFs4pAsJ8RY7xQbCcgPHE1",
  "key24": "3PF7iUCEwvgFCQQm6CxfpRuRG3d5pYLLSJNx1YnTBgLbnmewtDs6NJSaSqT5ohFFsKUsCjJZcqxhZoN5Z8zUTxdZ",
  "key25": "4DPQf4hRb1VYa7PV1ZreY8ABNmKoufa25PqRb8s8gsn4zhskLKiKtc63K8UfNUMoSzBc3GY2Nq7KPNXPwAMHxrGh",
  "key26": "3b4RjUf2tURfu7DTQwVEXFbMtZUw8JuTP9FvH4bqqbBun5C4EUZ4xbmnqzHQVy11XikEWv8jNMucLdDEtM6iRAbm",
  "key27": "5H4Zdv85WvGjYgdSnF2cLackB2cn1ktuqajppNuWWsvmyJkRGHeJBBJkV5tkMPU2kxLU8osuiZgqonqWGfJnZrXL",
  "key28": "3zxCFhbXymiwrgtT4x3VWmREyD68LAYzYzb9fh6UqCFe2WPVpcNw135vmFoeScPz684JyVofMnv6njZKHQzrJ3B7",
  "key29": "2nadGw7fHbuxKCFBP2jPrzia4iaDyJvN9StYHiRJvmdyEcb4j3qyvN2Rcb6SWE2VA9TfpdGKadnDz71MufW7oEN8",
  "key30": "2rzhqjho6CJv5jaBzj83s3Vxsv7zMxqycEud4k3iJyhJuoaowy3EoJoArhzDsBVLKMpCd6QmHudtyzGbpyKGMVpi",
  "key31": "24AVY8obfHZduyb2twiyE413DUy71gJvJJ9AN5dhhJNvsmYDb1xp5kn9YjhFtdiRp1Tjq1rvAWFVz88ULLj59ZxB",
  "key32": "36bZMbMacBAyYjQ2YATtodxAV6jWMbE4pgXzJ1jwr8V4vJkMpQqCGtw7RLFzVzvJwv5igaEuh33rS9hAbACfjnQ",
  "key33": "8rfQ7GKpsYXN82jbUteuMo8NFDjKUDKyrFSTdBWr9SZWWbGqTm7EfwCFvb6a8BAmfFjNJrX31Q4wq7VC9nbvu5Y",
  "key34": "5XCfEDQsTDGfghCVrYWazmwvFZk2t7Y9ZVYft7BYdEUb3dRe6NQqUg5KBGDQZSMLaMpQfLoPfZvadZCB7Qh5z6tm",
  "key35": "4f4fnp6NgsLY2YGyZndnRi8dz6akQoUDPcJZwR4yBA1N2udcbdW2Aup4y6BXpcbw257APvKNdhQPYDeVT73sSomD",
  "key36": "d4rUqBdfphj5FQNJLtiLDf18Kvu4J46ZCLdMmuW4RutSC8CeJBPKPaJd7vdGasnKVqmZ7wNbpoe7CZDC8JCtvJT",
  "key37": "25Jjd5ExLSziu7Knqg4ygB1x95jM2fd3vz6NHEsxmGibdLmEmHmK7rnrkT2fTvMWT28kzKB6S1Jm9Wuda6cgrCUn"
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
