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
    "28zkT1YJgGE66coDB18FGmCk45UzjyMySV3BjsSbbniFWWjWuJ6h7vPHKvU52zMdeVVHEV4knBAUZxqqc3RASKtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DJjfiQszufWDWkHMco7g9VsJf3jUyzsiRwE6YvFivPjxz7voe6GTnsY9q5NAB64rkuMtXwDFq6mkqmwZcq9pnNe",
  "key1": "nt3JYkLBGNLeEnN6MXkq7zkTVYtZzTAyBeFGsJWMVs8h8DfXE9gzVN1LcpfCupfhpFf3f5gzjaAhg6KMBFKGBvm",
  "key2": "3LYdirYrckVfAbiXY2r1sftisnFhxbkRTHWcVhu4g1m1ACRGqrJWjAvnQy8EHZkxo1D3GdB68YNsAsHE4q8v7v11",
  "key3": "2DMNrUzwnWeRo7cfiQ2f3M5je63U82KpiWd3bcWFDTGAux4rdnZv67KcJt2bLD1D4V1eH4fPx4tnH73zv3PArSbG",
  "key4": "4GBesWtxex1DAymdCk7pmD1Mnp4Usz9jsCWDLD2u8TFr6UK6WTpNVKv9SFXWsUbLRAcGUtFUFeHnVZTW965L2hGE",
  "key5": "2dtu3jQ2QrFpr3Ld9rWMtxBPSieZ45PHA4TMfMwL4jgjUoEsg2QRTAJdMtsGPe1M9rFzT4p7V7SXaVmNCzEQnu4f",
  "key6": "CncxksLHdVhWTkwDsWxtaisYGi8vuH2ro6cXQC2311jAgwXSgwVdt5JMcyhppuiwnf2vd14Ev4fAHyhxmV5qexu",
  "key7": "3kEgKQex2YZB87SqxDSd5F2UDSUHFYLETxVnXGCkmUvPYZQLRUzmTTuHw4VEqi9vhBi4j9dy6Sb9XHcUPkiEhHyt",
  "key8": "5LUNTZSbk36w7Ru53wu4aK5S2P1Kp7JQ97iq1js2yBHLAd3xR99Sj5EAvCwWcYgtqW5AxtwPMB2zj6bfUTcrZSf6",
  "key9": "5gbB2zayCmvxyTD59ydhHAEQTvaJhGbXVD39Q3EhHtgYN5AYTpfaRqKMZQkKMNSPUKio8nk7hvJRKzi2gdDC5ffy",
  "key10": "2XJhXHgTBASmYYQLJQ1dtWA4hKkg36DveWeBy5hNt24nPUxsqa9mDnTNxmrzoHcSPRA5kEP4xkPT4vaWNJNbj38x",
  "key11": "5s5mP831kQEK9WPGnWYv4pScdfpGosMSj9yjM947vrDywoKs8E7RMVfhYmxzoWeYE38fVt5Q6TNJds4hUgKqZHRm",
  "key12": "5Weih7q99Z2cn7JYvV12ELAGVnrEZALVFtrjvXGyddF7X8RGU3H8fEFWphhXnrPCosMUy2Q4LJy3BtdxqTfF8CU1",
  "key13": "m9dTyvj14WdoBHL4XhfZMnmFXrsA5ZmKNcHUXzyKGv4gyo4nFf1eKC4qPCNqcgPx3oBwk7DbMCbCpevjdyK7iry",
  "key14": "4Z95BbRP8ujhNduZwKqXwAiMwMMbAZKe67CUM2p2834Zj7w9FXtWZUcEb7GDN91FL7AFjFwL1XyZU65SMBur8j4h",
  "key15": "4stBb3LpdLGz2Er5ffTjMo7hpiVxakrSk2zKZRgnDs6HMq6LKRTNVrJQNRy3bGishuGNHbCTYsSYY7jZEV6Q24eW",
  "key16": "2H9Ha5TcfSReLLddqCHLk4wY5HKhxvPCy7HqHaVvy4bSqHYQ7niALJyLYenykf2c6LByKb9q22SMxjSKnvopLb6o",
  "key17": "3rifuynaC4rk9UFFopVx8FNMEzsi8Agd8fj4AJQq86upSKk4eAFESvkxKLvP9yMuHUQ5eWoKHbzDoNPEdonVDfDx",
  "key18": "4sqqLFRWU4pDMJCuc8kWcSy66iNpQgW9j3fyaqXXCLQ9pQ7Whqv1X2dtLVZqPk1r9pyhdj6VeBScpXxXQaBV3cVU",
  "key19": "271mhrsXrUWCfc9WYkf5E2MVM53KK4L5uS21RvLp4LoENwCjfpErTqgeb4z2459s9BXnTLkUQyEEyBvtVScaV1Gt",
  "key20": "21QyTJTXSxXcsEA5UXYv6G7bnz9UzavnvBzYSmrWYhbpfXvHab2m2vCfbNZGasXpfwvhmapc5J1ESjQdiNvusubB",
  "key21": "67HxDTAnKG7t8mjtm3Vbrxqr34T8SdJMMUTtAHd2wFh8qnJLMR7FVZ67d7RMQ1UZJnkN7Mv2quiTNaxVcvHbgUGF",
  "key22": "2vDb3zzHtAqEvwfGDPA5v1iMYSbDJnXKGBxdQZUmtkzQ2X6jhK9FkDeJGySTcWRzLkgdNis7tPAaVMt1PEA1sAjq",
  "key23": "3yH9jupTnStQqAEDJhV2ra2invtNCPvhPgaMnceXsmiHJvYNdVCKvdF3Rib7gbHKeyfT1iBzHHtMuWzS7vryk2So",
  "key24": "3wuhaVkJWPVjfPfTRqmDsnvqZfrXPe5XSRdKRj8SaR41paCnmq55p3vcxgL17WGDpF14tmbfXqPVgdBchvKytDGy",
  "key25": "4K7dmEJjENTJpQrouBmDwUFTRdm8MwYMsEfeKDNwe59kPE67DD6mMJWS9VeSM19k7ea1M654JLMkVFigjx1eaYjt",
  "key26": "2GfpqjNyaV2x6CimRt98aezeFMpdD6q5PM85JR17MKmGyNFDa5XF52MXaXQwqqN1zpSpvqR3NEyWsgTX52GpXXHp",
  "key27": "4XWHVvV9G5yqnAnUyD8koAo7Z75vp3CVtZm9S1Zc7tUCmbnSgTrx7Qj8RkNUbePbZscx1hAQvbd8t44aqocQnX86",
  "key28": "xeAPLRbb1gbN2mbiJwLkLfGReK1rvo7Dgoqea3g37TfRNdYCooCtkqdWf1Yxdq1Tv5913VzPKpJvhXMRqsEwWJt",
  "key29": "5r4dPp4XcYMZJ1d2WZ5vWTs9NCJFSBuudExmqKNYvWUBzn9F2v3T2p1sDUvYssddsBPTiQJFqpCVNVWZhVFKGJjM",
  "key30": "3gFHbmPDpeiGXdNppnJUg29c7P6kFDvDwtEr8XwLd4ovdS6caH71aKvfKDZjKUPrzJKz94s1pDmkBybTwxbjNGoS",
  "key31": "38NwY1X3mbjXCQ1cVvmVZoJuLKpWnorSKefqFPcEgNaQiAwqQ9ohc3r9hyRZBaDJxoahjMY2vEj5Pk2kpFtw1aTZ",
  "key32": "4Yf19cDcpEAyfiipWfs2fghqqHEKtDniWg1L51czsYnkdcQNGv2rkZEGWrF5gX7opk5S1eEQZweJzWnYpAbndmjP",
  "key33": "3k54dR6NSGQb8nhCEgz7BvHDeLmsRQQy6JN2MZm7zzHV9cER8FHgzs6pUdjVFH1iVoTeUwPEV4bSUY5QMm6GfA7H",
  "key34": "3bq293MiPx61qyjxutw9gLKnXjtRyMA2aXiyahpxZUPXK4Lq5bEt5HvywNFeKUfnW6m19mpWUzdarE5FRHmBqbEw",
  "key35": "X3S5XD9jXKkuEStR2qY1Na8BeyVKE1jY6n6chwSi6ovHPoxiavEmzxinLTDLmhZHM797f23hgbcConEzevcoALj",
  "key36": "3PtNLMrKQsxQLCT6SHc7PQyxVb22RmsstCGoB5KJ7P2vnE5u1dXf7poB9BPTnnxSngT8oHCmaas1xqoqqkynxR8D",
  "key37": "skaApfsGSfvzvPAm4VahcN7c6Ykq7YcENa87dpkM6wTQVC7gt9bAYjwcZsu2sbF7hLMC7HA9Zgb8zBPjDHYkMCT",
  "key38": "3krrhJCUEeAuoqRfv1JpMVxZ19pyjzMU3kNLwzYPXmUBXzzH7NMXcbb7Mga5dVukKXS7m8qkGdJ7cbjJjZ33ohrP",
  "key39": "4t4KatKrNpQjtgJrDj76A9kCksaPaUqkvHLCCwvbn5n2EfV8uhhTM3AiTVFKsZtzyjbRkN37gx39uVQExKjKuiaB",
  "key40": "61LdFTUyeUU3kzAmT8iJMc4DUMJjNeE9MPBoHyaXKyvjMieBFUEfQQdgnsqyqbL3nsHkeDsq4uJRyNuS12vPB9Nc",
  "key41": "xgPJtiBhe9QHe3LpB5QDpbDWqrwF3hBU9eyew1LmGBZ72NVHgkbPGFsyjfAGttz3zcqaHXqFeoy3kvhZdKiA5AY",
  "key42": "rWGHZgxDPVuXbCeUFBjCMgs2Uuc47VU1J35zN8C538S5G1HmydfgYLcKmitbLWfBG1zs3RyJngYGXd64cH1n5hj",
  "key43": "Kg59bKwgp6PykE8JuJrJTYb8sRhCEXQkhmEDpWRUe6f3M7CtAAnL3wYzfkbusAUDJbKKZm9S7mv9xzHem1aC45X",
  "key44": "216cjSRB2ZMBBBrfUPAcb3ACzWC2VHTC6Jk1d2zf5ifBZAXFvGyhoT9JyCJVXtEf9zzdPXmjy5rmQnp1gzzWHwCs",
  "key45": "36vtfWx2id1PmZJxGfjPSDV14uEPR1y28UgtoTbSzdA3KRr96UY2Q4Y65wkt3xffBT9eny3iMYDbBmmE8EQ57VYm",
  "key46": "cxHXtdJjja2RsGkWKw6o6TNK13ipvfVdX2P3gW9Jf3cAxE7RBWZ7it8EfemLY56PQSM35FeracAB5zP5j4zmDbN",
  "key47": "4Wxkpbm9xRn15tBFReitZrcpdEc9fPerKyMLCPAfkL9rgBgZ1s96CQLjtJUCcDn1bc1DQV53axBzxWWd3AuPFFaB",
  "key48": "5NiVRtUfxM7srU7EdEPkp16i2wKJK5w9dx1o3sGL43K5GMFqpzb7sDNJqbWGYJNsFkxyVNEYVKGDD2iuCZ6snKHx"
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
