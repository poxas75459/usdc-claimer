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
    "65mF67r9tz3oxXwbgzSXMMMQ7cKdVwkBKsub7Ke3qKGRuyYb3xpWyJocSQe8qnpXWea3u7XWFk3b97Z2A6CmaZRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMLpuztemhR3iF1k7U3AQAcu6RjRafRNGnLveftTEyvvweZQqZ8TiPhci3bTh1GgKRco1DvNs7WVXCom5nwuhqX",
  "key1": "AJGRHE7ifScMc3YcGnwXpkDkbaWtydxcqd8YbvMJzpY6HcESoRvATRJ4RpAwt2n5a552YEGcYvHfFwE1gnVoad1",
  "key2": "4HiQUYxxzdaVzEfVvmNzuxag5kAjBqr2E69Scg51mpz9WBmhSSo1nndNdinXtYJEovxwPdJVjssFX2xvFhrRW8vb",
  "key3": "4gqyoMg8bz56FZ4LGQZavbRsHkRbNit35k43KDvg8BgpRCPdmvXD4zL42N7gFvouvKnrT9rgASfHgiFK7eNamn4K",
  "key4": "4iZPYvCvN4dsy8Fr9JuSE2TU5RRxjYKU1x7nSFXa43FtesCgbS1Jz8nZNopL1vYJRtGcm2oZa78oiDYMFT3rZgu6",
  "key5": "2JYLGsbidbwnEPdKA8AsejBAFB8xJFynpX5VVTB5UWoHSbspsqayLKzCNnWxULELSZzX2FtAwezknogLMhHLDjGo",
  "key6": "4EHh4KYgJTtPxXA8E6j7wg9yVew6VNJENxZPa2VonyQgBs8E4qHmDYzbV75N8YDq9kFeCLi2QJK5vzm3tpPyvy4y",
  "key7": "3RKfKhRWKyPBJ8xGF2VdMtmeFRhRPhoKjCZbySniYCdcVj27uJ6QFBwJ3DFReHdLUxJzjm7ysqdM86BnyKmchxQV",
  "key8": "2HWHu6uG5FYs6PCDEB5boWLbDAmxZrAm8R3NE8GugjzG7n8jX8VCMGuVzbNTUbc9j6h7JCQG2ip7SqgpP5snnjF1",
  "key9": "2HTdY2wH5g57bD4ezWQJr97qtqkv43p8R87NrMdYQsqpCefE3jyP3xxcVR2FYvGhrz66z7QwSyhFyDiN7n4nAisz",
  "key10": "5FX94DxpXB6P1X4PV8fLznXN9eNmD1GFDxQZYXBjCERbvztN2xEfAd8H8JxN3jGh6xFnpvMETbWAoH6NaUTpvpWd",
  "key11": "CqpFmeoTD4HZ9pRXxobXXQHGZffH6RyU3XeFsTth2XVNF5dAaGGLf49qMeFjuKyVeBT3g8Y2vPzNJ65uUChGZKN",
  "key12": "29LPwL8bXFT7sWXF6qCoLMj1gzFABij8ajeNJZNo3RopANWzz2x2xhsyi4sXZ2irT7DJrnNMNAmwjgfG2toANJy5",
  "key13": "3JtSeQfcgAPYGBNoLbmc2vS8fGZWWqwvxkX7DQnxLaXBTEtoR3bPYcYMzwQwLnaAFySAidmyJXNV6G1LXngctgQh",
  "key14": "BU9NeYCVRpAN2WB5Kq3tNNpuyDhSmEnFPhsYTsNnacpRYsbejTYsT5C4Wbp4yGk1Pb7N8jioctUPQRmS9tuKq4X",
  "key15": "vAvng5qnk1yhyoca2ZSR8antcRDbB1cUVZzPufz8HSpziVvYZPdFzoxQ1YDQA4xGbazt7J5p4CTZcN3ZHEDVh8T",
  "key16": "RxRWYB3oHPDRej39uyDVDAFvrzZiMDytivBFv3aAk1R8aiLQG1YC7B44k4YwS4aJqdaf5bv3nxq63oSTT8VjMG4",
  "key17": "ZFHWqi6bUeZxvbC44nWq7QExrXxs9NbP5r9FUoLrBnpJUybSZ7EpRijepfsdStwnkwCaD6gsQtXtLdBsaVANH6Z",
  "key18": "58kWs1ztkf6PpfNwHRRSj1FocizkaMVXzvimWTPvEPyPS1sAu3Wo4xs77PFxX2TUJLoC3ZAn2JQbX3xPbs3eKUbr",
  "key19": "3ZFjHLSaZirrFFs4cdX8PeDmtxmiAyr2RQ7N1Dvo6z5QL5sgK28dnLkW6Nkkd8sbjrnrFHG1rs6Sy8Mxvts1cLZm",
  "key20": "45c9UR9DspyS1SrPMsnUM7xNnSamhzHnwuaXLZjJApG3sHH1UXgbACLkFEynosLKtSXfNNTTQfv8tEp7bTcKemNG",
  "key21": "5he4nceKP1J5zMWtQcM6hMWHxTKxGXSQQVE63D44LSS7Y9sZ17r6Nv47RSdabiy1QANhcybKda5Hyc7uCn92t9nA",
  "key22": "hZMx4vNQah27kV1PJdYn4ewtpAYVXXEkPfz58dgG7yeA77z8EjBZ8qXADrorcPGWQnkFyoLRAhZGZAvmmDh3cBV",
  "key23": "1S3J5fs8UzFR8y5u2RkvpTpiz97QwEy3mC6A4iCBP7sZ7jTjjkVgB16soo7vt14pfoLQs2N6tPg3guEuS62fayi",
  "key24": "4GTsF1TT1C95sFSH6tGBqkvZqukeqXtDjuw7wkU5eo1atb6NUkUS9uVHHZ5AEQkTvjasgJbp9iReoHPmVKu2Sba1",
  "key25": "4fHNv2a4s9WADP4GHXxwHCZJ2trLXDm7vL4Exw2dLTKnMyy4HzEvwqqXwx7X6ebmrQuPQC3EtGWEcH3nypJBdHdS",
  "key26": "3A8pyJSuq2nre5Bra1sXMGsnK8ZGPMQ4rBSzzcRn1ibgnG64khoqWCS21FN94ejALu6ZYYBMNWJ1x8c1qpsjXXxQ",
  "key27": "2Vk1h97E47EU3WkiGoJPqBtkaKZVoma5bv7TUQCXDMrdJMGctAPzAFpVtyxC94vrjSTrpRxwqQXugzdC7dwArDj4",
  "key28": "4f2fG1YWfj2aEbo64Xh8NjbTWJVjZn3abmtF3ghyQVjZ51JLWRKLkpNYmDw4YsCUc3DSQeUrF4LVqg4wG2KV9Fu7",
  "key29": "3mxr3fvpm42BqZVMKrsugWeYDmWpXsJZMriTXiPn933TymSZ3U6rgKJED5wUpGhyhtPaHwQ5h9oT3y7znQHaS8W8",
  "key30": "4hdY4oWASSzyGry7kNVb96ATRHLHZvKspjBFSN6pJvQNdrDxeNUQ57At1RHVGRDeojcHvYV2gjZJTDL5ACi4Lwrg",
  "key31": "zFtupuBc7Hxo4Zq9B9LkFTSvY5L7ZzbaBX2nP1sPhNTZhzwKJcni8fGzYivxWDpmu4rAgj4ToEeXTDRc722vvD5"
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
