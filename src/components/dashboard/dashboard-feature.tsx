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
    "MWXJGsSRZSRWfKCZThJNCahzM3BLRf4jC7S17wwBZMCmsEShHVULgrDEnmj3eiQeW3GpaxyUjv4YRsegfuUmhgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCh1RMq6AZaXrgDrrWEyFXXiip94ntrJivCixUCnNM9X6zAVJmFiPLexL7WjXKujD3U5FsrQ3zuXj1BHtuxphxb",
  "key1": "4a1bcHVpoUywXwoue5Dwsy9wW9JzsEbSkHKdbFnHeGSm1nveiovi6q9jxPLWuw4EpXfceeXAW4LM2BAgtAhB2qmr",
  "key2": "bhKT3UFZtN1uJbA9dH1ZjQ8ZQzcPDLXdbQDZHwRMD9vuMEDhVCLrojfKASziuutv2FZwcgn1V3kf3phfqsrpNym",
  "key3": "b9WvSGPGXG9a1iMDs9dEb4h4vJ9YB13ePzSVAwevZNbwLRfuY7dKFV5PdYpzUXuvCcK7Tq8wgXZ5UPUAewTgsRQ",
  "key4": "wHyVaBHS8JkDxQtaiw2BKwxRfWHKFfTYU2Jds6wXPEyMvKqCBzA5PveKA4ddECWtCs4mDnJQ9CXxsjmYsLSq13L",
  "key5": "5pmtFX6fXF9tyPKJ6ZL9z5YjjQER2yetFy6VzmqdA5Cj2i7zy4bzRPAHyR1C7pHwYEPRVzkFFLWgf7EAxoWpSrbv",
  "key6": "5dXmsy7qun8FCrc2MPZN3yvgCqXojANP1HWLPddWiThuMQmskTk5dMbQ7ig7FvQsnM8aziYerMBLZDpmJdzLhoLP",
  "key7": "qYaaKxK6jNeBPp2T86FDiQDfMmdmwxY9v45DEBanPG22B4P9bSfjPNFQtniM6xszvXuQfzDjtkk3PfBX3DkF2KS",
  "key8": "35JqrFudxk2DEF4y92zuBZFuc7qLMfwJesSQ1VjR99TASSRDBs1KzU5XgryPErzAQNjzaHpNfQ9J71anQTGFRdqu",
  "key9": "42SfmdSxXRMBVX5DE7g55H5YGHirLBLd1CSkESKzZREmmExp9J11YshmBUf8arWH8DPRWCtj5zfUa55UkEMDeWFY",
  "key10": "ZB9QsARfXX9szVAaroVN5NxVQ1Mmz3MKWqQpLzapGrsQeJEATLiKsH9XXJp3JcMgRvueyXvSCaw7WCzsUeuvZNz",
  "key11": "5ga6kf4HWTrQ1RvNXa37fJUxaFAdm8ArtHK7kvB23v2oGtVbvy9JUSdGz1HK3TpeEfpKPfByaC7MspvzowsH6V1f",
  "key12": "2Tf2DQ8UukoDyhhp533nz7mEnHgYTmRmWp54MSqivKyd26ByaGn16DBrWYHBtaR7nmSd2iaYsg6mgAdUvNTdf8ws",
  "key13": "3FUd36mBRkzk2dVmfHMifUjiDtejYjpxB8H75i8sRaaVqRKS6KdYQ4qL35i6gev24xG9269WJhxFrtKqJ2oxU3cf",
  "key14": "RQo6kPSJpoHHz8E1vzJUd14FY58MMtuoTSM4Ut1RBRm16Nj4AcdgNvdiu73QGUPnS8tceYV3ye8SaoSYgqhd8M5",
  "key15": "ogMxxXAzcD8zTFhcCtgGvUkvjATkZ17w23zcbeJ7AdH8Gb3a38M7khCeHExFXEFTHEPvxP5jReaXbGRAsibui8P",
  "key16": "5VZtJ6pxs88utxPprqZor6pK1vAJEokW4bZVksC5shd7Y4VBJRtC43XpVi7wcPXYmbNT4nW66Banh3ofiDRsMkTN",
  "key17": "5utKqyZgJiGwsCQoDUdfTZ7YeuPY5LHNdvJDZdjqewqAwS9jb3wc52n8xwzWwBmDZ4EWymkQv8gy73E9wGemJpo4",
  "key18": "3GPL9xJPrZYhbY355o8eh1VWHuFh5dEZFhhDV1RjEsUpQDbHAbvNeEzm5xspeVYtzQUeAWHrRSpWPyrYr8MZcRhK",
  "key19": "49XVXxYE6ZSX9MC3nnE9MUVKHTbRmDXzdM253k4c4tcFNrnvbs1yPrxni3gcsukbvh1sb162SEWLLW1mghZXwFSq",
  "key20": "3byiXX9Ff5hoZd9Rb2ifnajDFktm3ga2TfYwFKfwi4a8hVWr9UkJazSVYYEwmts1UBxwXcrGr5qGZUv7M6RT3k5U",
  "key21": "HHSGSHbN6fqkzQq2EYwUR6Tr5y1ZMTtFXHMvSLH8mB48ncRjW3zA97tbYTZCqyFLtX85SXMFtUs8nrvC9uFwgQ7",
  "key22": "4dxkgGQFUAWMBa8tbbDCac1JgBJN1CJvnkGU8ypyQQv1Y4CkDHd6hEHAS1znSmfhL3oXYFHGdNaHyeyReDuLmGaS",
  "key23": "5dTRLrGddvLenUQg2jyBYpSs1FpYXX9WqTgXdcJ4nFNBcn4umsoAed31F6BYKV6GT84EEEu19TYgtqtuft1qNtCL",
  "key24": "2UNs2uNYKupTxKA5ZiwHg76ptZN3rjn9y8rVmstfdtQqHnrcNYLjGyQKfUUCiZG8GjAoEEFpdxKTcm8TPTbg8ELV",
  "key25": "2vFNuGhsLoFRXYhP7SdCKHmng3nLynJVTagxQVKDRmhzZR5jhc9xNi3XvRVzw41MCAQrfrVZt1zEdJFPGSXFzmce",
  "key26": "5Rdej8D7UW1QAS8UFKZ8pqzZt5gbGWTcFBppoLVcVV8jFcdmSR3bdjRarEWEgcA9HEWdPrEtcmRGHuuju38jY4Sy",
  "key27": "WLUGhqsBzGAcbQ8YNE9WL9uYT9fLeByLWgbg9V7wxbqs7u7SZ8dTEifbWSNQ8CqckiXSm7dbihnvijhBxndjdzr",
  "key28": "4xXwE5BXbfZyhsMNwCeZTwVAprS786T6dm17Nuf2yttQrXr9uqKcR7qZLz6qis1DVh4tSWJea3rCJ37Uqs1QMFXP",
  "key29": "3AyATjosJSEQmSYqY8sb8gBG8R8ZaTGNih2Dfr7CUv5a73ViuyrwVzLVQb3C3riBDYPEurk5YikXexgbN8ihKWJf",
  "key30": "5EkwSrYA2i34Lz8Foc5QF3CcbbTJQPXXZaDLHd38QkdKc7tLc411FTLUHAt5BDPpSt9YN5LQttoauY1g5vEo1rcY",
  "key31": "4WF9izSYinZDk8gerqaN8j3FbjDdAinXENtdupg8KBuYewz2LwmNVKLXvFKwWNN6kyNzqpyARED6zXmJN2Vnpg83",
  "key32": "5gqBkgj8LafzqDB4aEhyWtaedyKB6YZvabu4bznsC378iJjr3DsDi1NMephhtSG47p3WzHdr7S28xmQJ2JaaisXn",
  "key33": "2Tfe4Jf6khr8kjMuxP5HtjB8hH7WJzqPpA7TGuySiCVP98s2c7KJhSEBNHdNwEBXUJAcJDDJarraEjL3vLWzifi6",
  "key34": "AKDwVX6UfagEoSYkogC9ezhKm1zo8xDRtVgPWaPThVRJJK2Kg4gzxVKvq9wzF4J19ZmYTXgxpbz6AMFjsJJ3w2g",
  "key35": "hme2X2JZVxyDxRGy1jnKwMSS8c6crsWDaqgfKtTNjGUssYUBUywK7tMH4WeVdG7mKoRnnB2Y7FzgYwcBd3Tx8J3",
  "key36": "4E8NB6xVnQeCzvsCWn8oZJ636kUwPpAHUCASqBaWH8xW3VJ2KVcekBJPFyxuZarZJzdtoey5m6uF4dEuhX4d6ptY",
  "key37": "47qAVVBvbf4PBAhf89geGewRTPSTSLNHoXr886iTwDhJRemiME2wiaUXsLEGtxGxX1ZhtjFyqj25zxubH7N3QqdK",
  "key38": "5qjiwuA3252spr7ttvXrzaiKz2tCNXRueUptBUu1RxktygQHu5us3mRoLXxobKNuwaEfLxeyNQjvn4ixgodNZffx",
  "key39": "nnZEsJxnNLxSPitLeaJgSoMpH8VaKnsJJNQtwVo27jTbUMU4RgBUgh3G2DgCNoQ5X6JdaktzziavXTrUpLdn5gE",
  "key40": "4XnJduwkQ5tCmdxNqQeyhzUuDcUvSZfDF9mJBkf5CQPf4GW7Yxyzqkfta9DaRK9UGXUL4Es2xTjuoUQD6sPvXGA9",
  "key41": "4QFTpNQvBj2mM5brSBKpX8Vej55s79VdVLk8C57Fb3ZzJDJHhSEeqjHgcaSLokz24va5NyuhUJmYFzsSfe86fzHE",
  "key42": "hb6Bj2fjHoV53FT3rkw4oQ21ErKVf6s8CkPJ19bbmWcE66zyEaxsfQxFQFjnmveBXgiitVtxGK72TF85kudDSY1",
  "key43": "42cmm6WJnhzAAevV77zENJC5KzKw5wU35rRfKADh3AN59D4GBBkLLzzAvMcF9NkxEswD4c6RTYscTpLQR1stK8N5",
  "key44": "tm6EauHVeWFsyYXeEqXZ1FoomXMzouStTp57KbevjgU7HUZw4zUufuoY7MfmWFVC5cuzYXiC31zYqsxWG3Pb7mY",
  "key45": "5cCvyV6AYtxAc1KFQMJmkg44WRC5g1sDyzHHRtSBBJ8pKSEHq57eEeEQScrAGzu49qf5rGT6aPgdZAByKccWMSrN"
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
