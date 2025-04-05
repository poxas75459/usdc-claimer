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
    "5fzsHxgDbAvnTMRwHs9Wnz5Qc4hsFKvDS7R8h9AhbfkngD72Vi4N9LZtxDmTcyZxbKkEhcExpVYenWybSRpZFHdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkKivUhfwadKFzuq2P8kbkq9AENLLKQ8SxhvZ7ULkkjoo5VjFvrduZ17crkFZjX1MTveBq4HgyrB3V3cchRypWr",
  "key1": "2HS7wS7soaAKLYKPFyd4utdDC6X3aio6kJWP5GgrVmkAfj4F4vNmhseU56vRxcF8FTocDyAhhFtSr5TB9gHGJj2p",
  "key2": "5FHGMMzeYegK5cX8s9eE5CJJLcQsVpmuooy2MM25pmahphrj8DSqNPUcw1nuWuZrQyVj4ZjmXJ66JamTMnYPmgES",
  "key3": "4V4rJdk8C2JqifTLjdCeVUoMu9AqmoDcFBagWdds8f97qCi5D7HeS7mhZ5jiRfrbh8cte65g5dVGTeWyLBZvFTWT",
  "key4": "7kauBnxqVesrcL4FXoEFXAt32ndybgQBvUfC57f4u4Ld1wAD4gn66Y3g15US8HWQ6sV9htXF1ytgmpcBeVJabEQ",
  "key5": "45wSyiWYb6edVZrkQKMN6N97kKabipvMWKXSFzvMLQF1Ag9vNrcDf4nf6i6EUfgeoJowjqz2Hbj8Z9AhdhJMTvpU",
  "key6": "2CGneiCNJzw9rxyeViJASCrTHAQaDeaqAmxDiEf1aw1GRKonFoyxAZgt73bMFbBhH2ZkcXcTGthpquaaCbPTb6D9",
  "key7": "3oF3PPknFmFfiXK35VwgPNT7L1eyPm7sxiLxxh17JQbVC1gJhj4qGRJCz8Dn22md7hu4qGMoonMFnsuWTajNLjm5",
  "key8": "4CesmwfT5DMoiKJfmpoHggx3kf9rU2TDhW3BiEZjAoZTcsocoEJRqs4uNqd2ZaYmvq1sGfaqSsrU9gZvebNVqFi4",
  "key9": "2TnYdoN2Fin4wWvBjiAMaPNdnr2srij6SMecLB8cm9wACSrJvQmuk6JczjRwsx3HLxwcW6cqnCuwfkKcWJbsoCmq",
  "key10": "3MW9b3dEzj3poPpkRv2H8oqKemW8W7iqFecHnte57hxHoXmh5JAt1mEpKmDZTDHejY1J1Fmd3qLX1THiXReYAieC",
  "key11": "4JPeWAJw9XvuitVB2XMFFuXzh1aPzNW6sZkB68k6gRoPLAuB22XnVSq8eC1NmxhbPbXU6V1nnRrJuh4bD8cWJoJA",
  "key12": "2BEithqy15huHHzHpkc2Ws8Ud1ZEjbZHmpGmy9Pj97ppKDxA5Z2YZPeidANK1rmGJYVjDgzMc5t9xrvuJ13zMnvX",
  "key13": "4bLeVLpEgJ5HrjosaPC7oqXdpAqXDspbNE3z3GjatzUncd8SqHjYgww7SsK1pyqbCs21prqq1hbXzv2ibspVQi4d",
  "key14": "2HMpuee91DipTJdzSKdr8ALmNkMD4rHhjqtEb52bQ6L7UJ5A9HCdh35vk4wxQYwMY2qZmPreyNCVeartC4ucrrZN",
  "key15": "4prWJnvHpzRp13ui4kx4b3u9x72Ei91EUpVvKc9ujzBpL3hS7zS6i8nPrtr8CFzfqy1coHLqcN6AsRgpWPd3hTK8",
  "key16": "BjfT28hZVKJKfh6XHPdhBG1oWRSPzSQG2WATT9aX3o9FuDX18R8GnMASPzL4Cyd843ukvYdBtepkdxSiHfDy7jP",
  "key17": "uV41KifPweXrvEH7SXNQFnRsTLcBGc26GyRd515ipxUfnkVoKDHkKeYvTbQyrY9yfTtA5utwLWHWyPNyhCA5VTD",
  "key18": "5w5Xa4isfoKjWEL2mRY79GfAveXjtcbJi8hso8KeRDCYD5nzLxp5F44NTeKndnY9Mv5Ztic7Cqd6EhdSZHgk7ERx",
  "key19": "3Biu9J9RZxKF57vEPayE6idunmi4hq6t6JkcAby5PSQxqJCJy7XkjmJ7kC2a81mej7b9qvnvo8oaX48YMXoPyzD7",
  "key20": "42zHkUic8odfg3EXJetwj8FpASJNAo6Nyb5ZEjMitikAXvxqM5wsvySmhL5ktaptgiWCiNbsS4JJgLM4RjSCMxGH",
  "key21": "2DRWjs34GwkpRe9tWb7pE5UdGXi3DFJJxmMpNXAgSaxE5QP9QSLBiGMAj2WFw8B3QXgpM9Hgv3qk9oHTgLGuVrp5",
  "key22": "4uNM22viWE4b7D4WKeYXu7GQ2zsFWdgKuv5s2E6RvT8AFa6HHBcFtknLe3JQZhBD4DnP8zEj7ucyQfX1hH3EoTCB",
  "key23": "5jeQYU7JJk4RKqGboBdzBnQ4VxSEb1qwTVRQzfjsz25i8GtEawUbhoP6j8murUV3WAt34992egbcba26Pp4Ybbtt",
  "key24": "5CUvTBwP3goYkw2MhCgqLAaMtQF8f2qcjWbiYyrsuoUeTRNj5xf1TCM36SbEY2U3WXajaXbznjTZLxWAmpM5GCSs",
  "key25": "5JmZWBao4acu4mGmUALb1BsHFAbzXaQugwUAKdqvNFoZhXvSsvmH33sxXde5iDeD65ECg1uP25jNrProkVKwHiTx",
  "key26": "7116JiqFRVCh2qye8zPz7qERMrBfytDnZ74Gf3omg6VmFdiUp4ybuTLe9KdpKek2kZ5awd1H6yWfVtrwM78kHdN",
  "key27": "5VtuLpQ1sb4fxUf3RyHJp5k5w3h61sbRf91AiHZaNoBGPMDfCf9Fz6mkVFWRyVYmHQ5Ku9ZTGPpb9NTFyqPmZ83y",
  "key28": "5m32hq815HibAUnb3aW1NKKf56AVRRGJBcjujRtnxpLvqY5NKPXEc4tMsbF4PDeRbKdHqtFiwdBfH4pKbvNYVpS5",
  "key29": "4CkhniWdKaXTiFwoAJvRx2kVxCG3cSXkWyCezaKuNbNx2kGR5NroC9qVCEWy55yMXu8TbmGjTQktn6wAahmamB1w",
  "key30": "g6nZqez5YR37vkSiHDhmVPzGbBMkZUB6K52m2AtiRhN2kBSn2TSs2869aV2aP6YzmjHCLo9UgPLntmEGo4CeUjj",
  "key31": "61RRyQ5H8WBUA7VvXFRdBxukWuTpkBioE5NHTxCcefR7PBxX6QULTXFP6qn7VJKsuonpwb4VzjpyNW3rFpCEG39V",
  "key32": "2YCdimUSqFdQasBKwthoGNTVdXtBGYvgt7cnxqjt3Jzjw22uM4t192VNmVmmYDX21hX9DuoG9q9nR4UZDneGrSBy",
  "key33": "3mnTKFAWG31STxBR3Zyf1vKoBoPtcE5eVJgWUyTWesXfmKq9CcmABHJyKoRtx2iGZQydkQK9SuzvDxX5qDnXdL9Z",
  "key34": "2mfRBnwVKjRtggDhdT41s8qB4RXLv6U6Rw5nDeRt4bZ4zGmZK51qYo6szZFUE88RenkDbkLLVEU9UD8ZDjkCPCEX",
  "key35": "qAwN7nffoxNwXAqc2E38ZwdoWtJZTMTqumSuj8teFbLovFB6Kj9bnAa5QJSx5kLeAKwVHHV8p38w9J4pvF6kxkf",
  "key36": "5NLGF75EEaRuSZBCTtcgG2LSeYL9f8gVpv4HaQST4kfpHCjZu8rjPdBvNHiUV39X2Hdx3nsSyF6kcbSPPB43cRWT",
  "key37": "4YkkJ6jY8Ga5FEFNVwuY1hpwk7ErwDeZnHrLhAcgBwLuaZCz2F1n87gYBQfGpLUPb9owXaMTmzYgm1NwFsjKK4NA",
  "key38": "3DbrPihhVLmH2ziu9VyDGjJKYYbraND23vWNPRsu4MJyhUtrRTJ9H6cHdchpz63q6kZrHoreTUMJLyKvS2V6kMte",
  "key39": "412F3nx1vZB6W1cp5qWGHmRBN9j9BoeRzvKsYt1fHtTLjkPZvs7Liy31j4joLo6wGzDLmTrjs6fvgbcqJjQxfyhp",
  "key40": "WPuNB7jTXQy1joL3SrUjjLtrqCVqjCyj18U4QHz9VK8p7WXQU36LjcA8kuLuDbqKR3S5d9SBtAecvdkPah3JnRe",
  "key41": "2BErGtqeqcUxeT6MxWDxWHogu1cXmMY7qihD9oLZwbR5UvWcD7E2AWUPAuaZ8oEHHRQg2gnUePQPCvmnW2UCTFEu",
  "key42": "28gkFcipBCmNuEPYHJYEkGfDrGMzhRdEgQU519YvAFYHZaitA1Yuue8f9425XfLF9xhNRuQbGwcqcrdDpv7tmrSq",
  "key43": "3wmqviWQUi3S4Pp3htiC84xUX3cWjC5N1sitbXWd78KtPhtVLXvMm6V74qX3gQomFXS49978bYAETdETcEZ2MLnX",
  "key44": "3MXMLMTBNGt2TF6Gm8aw8GXK7iuhc37fFPKu7eNqBFs9HMifpzeeTUNBAA9nJiSdKfEvsq4brPNavCc1Fcb1GjTp",
  "key45": "3Mnxq2kEh4rPaMX3uX5cNnZMbrMFM75Fq6W4XmhPkLAnrFSMirMW23CR9dno54K2jiUYdyAAVbey8bhLR1gJuydx",
  "key46": "2iwWrhU1yQJ7x2LbvUEQDnm2JfvA1NRQuyvYzQyDk19YGo8bZdy3ZvbikpKtfv9Rm2Zc5hgaYLQpmd7tM7CdLYPf"
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
