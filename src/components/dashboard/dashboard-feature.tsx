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
    "y3TgQKNwvq8ih7r9n8CGtH34QJ2MPY7mBsTYMw36vExe6MbgSGF43qA2c4o953uDQjWoVQkRfj8ah384TC9mmRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gUbZ8EoRCP3MRuGFQ3xZMnqUYxdrW7CUMSYZdPZdwYYpbEZ2KKZE8uAu8QRt1Vdum8EPkpR8Ex3UgfBGRRvjcVQ",
  "key1": "5Wx9UUoVMi825ZPkh2T2dz3mmFpmhzKgnh6RZqMLYfhmtA798WHyaFv6KcEirocWyrfjZQVgYsoJAn59po3TeTCr",
  "key2": "2Cpa8Cf758SuPyTwhq1ykA5BBJLGgNL55dH4uGgmqJMcBfp9VACm5io2Svt46GuwCDf1oY9uPu1d2u9jHgkXLzP1",
  "key3": "41Xz55KWw4GvJxBJZEaHyzd4zb2K4u2TpvFWX23Mzkw8dcDbL9wCm8hh3vF619Uefb513EVZQ36oHLR6WaMudsm9",
  "key4": "JLA3AkwzhNVJQvMHaHJWW8WjLPfqBPwjokcrqUKSwtWHnNfJkBCAiWs9u4rBiuYHS9jBhXc3efuPFX5L91iZix6",
  "key5": "3Hc1E6U9dqQekQc4CwSmSZzmrdKFTYjDptdLM5pELuasiGdzTb94ZWfFoCySFTJ9Dw9wyA6ufi7uAAAbKxhgbHKm",
  "key6": "2GY8rbqjGksHjetV2SXcQmmStNpCQE2GC2u9L8VTx6wmSVkUGHDmDy5FCrcVh43MbQkBsLRB6n1QFXosHWinr7W4",
  "key7": "5wf6d3yVVfiquFTnHfN4F9MsWuKQeytuU1rxEE4GEe6iAkToYmdGzx9ijiorrREz8SAqmRFYYXweN2mYNQHXuhqv",
  "key8": "4fF6SS2cM6X3ztefEnApLfBVpBUUSTJsSHXXH4fMhqt4KcY71QSZtfmBrwDCdWZVFimif8xZB3utp4tcrEJmwYgj",
  "key9": "iwCfok2aeAs8gTC95ueavPHacPsPXtY3nYdk2Y4oFfsf3GNYXNKvjX2WUfye9Li2wrqBX9GScn4Zpc9oQ5WCNDe",
  "key10": "3S94Gy4H6Do8uyAr2VzSbHzAiyEALoi58Kd8D9TFcavfNvPXkKHMwzy869tCuyjRgXLHV1qveXfRYF7RWRES9vMr",
  "key11": "iZri4CDGdK7DozncWYTmZQCwyDoiknVXToHYQMTCGJwqWNGjMeXrHcRs1JBTXcFG8FgNhiV3rt6aVVK8meqZhLf",
  "key12": "4332ZFFSFcqipgbWLbR1oMotrde43ffcL5hgjR1yB6nqagx3e7tvrE7psaUbUSvCsiGpqEy2ktzgkzWppsWXiSE6",
  "key13": "4UCTbHzorbbuWfBF4vUHGoUDiU7ZBAVjRgpQDiGuWeCiNCLkwsXYKcrgXA2c353jSyRfD6wNWR3yqdSbZTLT1nMg",
  "key14": "3UktNnH5eNJXTxBRK4e4RSaBdsG6BJmKzKtcsPbbTfVix6TzNiPCUQuureXWBreDzhpFYCScrH8cTadjA3S22R2q",
  "key15": "2qC2QhF7XK7pXnKtGtXjwDRyxpVYPhvJugVRVG3vsjgezDDhtjrpNQvUWfGVbJTS7VgUios4hTMLEDV4JscWakAM",
  "key16": "2sSPS3vDuptv7g3N63qTxU2T1sfqVT7d1kUwF4qbpFqWqNY5aSPwQFUPggVcvwkcYmtUc3gGe9cio7FSygRcGgDr",
  "key17": "55ab6SpnoVHegGBuMmZFrLCiNVxngtXdGkxuYBZ591o3Ghg5CEDZdqFRfa4qeY1R3XyEMxcSNK9QqpTsnqG3s5jw",
  "key18": "4se1qaEqhSrbpzPejTfZkktEqfq4bZAXRHM4qhAo8VaytmLJepEf1SYr4Kz6FbYGF8U8GjsCSwDJWcGrts41rQUU",
  "key19": "5fttCDVxrNiw1ksfV44XAfNzFAWYuwdLPws9z9LrnhGZ5D5Gaw8tANMv1DkJFFUxiCVwcfKTrGqrtvTeDx6NS6nd",
  "key20": "5pjuJcwks5mtZheRbZuV9EfXzEHWjNunKgBCj9yFX5hYtbfVzay6vbkPDN2dwUFRoDaFZH3tbPm24r9wGBmVzjFs",
  "key21": "4Wvgk6aWH2top5R4MP9nfNgFswkcmeCP7zg9bb1AK1u5pBFji5zTEMK2zmDia1xZiEbZ5WioAgn9N9jGJPfSc1UD",
  "key22": "3jbHBRAKpXVMVK83rt9Uo4Z3Y9XzRmTZ2jvQ9tf8DFuPji6d6fKQRX9VS14Tm6RSyUhDRrtkkTu1T4QtBWAu2yWU",
  "key23": "2fTBWgEk66p5TCinaHjj9jJpcvzyiShjzGpeLuw71iYmf8aMdhyCJNhuokTcivNLmog52DXjSQ31tq5cazkYwmLF",
  "key24": "3S33Y2Czq6NozA4jdsEbUe1p3gBq313udMoXCx6MFrHycLwtP1dQMo1jWmFpY7aSrjoVTtZGbyM3crU3D3cFdAng",
  "key25": "5wj6dEybWzvoau8MyexZv6RNnVBshd15KWg7rhvgpSA4VSKYZL8LdHkH63wS6Zo2myUMEdMMfBttFv792s6ecbTw",
  "key26": "cdaaD2gX8GjtA26VbN2MtR2yzYWmRW3eRzgpMnFgcFdm2tnWYGxXxYBnNiHECeYR5yDiqkckTSiTU6d28nHjvmn",
  "key27": "U4casH6bVWCAm5X3mWGRW1Us6DVAFPUW26Ljf7pFz4yPBuLkL1opZC4gpEmSjNuxDLzeV52Vk6m7fi7kDCGuo1G"
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
