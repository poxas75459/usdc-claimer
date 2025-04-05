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
    "2NC36xS5ntKDioXDuXiuDvv3vkii4t73aL9d7XtFVWieBvT8GAUDFixJiJGeFYwZCgfDbEYmFM4uGikKyAXVVxye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QmSvoet26y4e79KH2oH2jgV4DoaGT5tZeiHMPQADgjpPnih3EjdcuvPReTZvoWZXxkBUmrtBQgCKkyzRPwLyoqm",
  "key1": "5NkMXX5mNBkoQMuXb9LYPbAxrBGtW8Y6WvAP5bMg9ev1jNoJyJJ9XnWoMbRehcgDXFqM1NsHPGovRaWeAKnLYEd8",
  "key2": "4gGLwvXLAkLkp73xSxJfAr9ab13mtUGfwxEjAgyRrM3vqf3vsC6NxNPkGj9rZrGNuy3tXUSiFfk8KJr8uVhgZdje",
  "key3": "MZ98wD1j3QvzVSgASvsiZDfN27B5rTT2y7u8pfKJAjHkxvFumLPeSmhgvBzShTz5mnDmFc9RMa6kG71V3C4HWr2",
  "key4": "5GSU4PGj8fb8BDvnd8G6r5drfCuZ1NqvkffW1jy4bDzGwBNJtMiDsgZsMMKygKstQ7nHG3AY45godrmqnVgcHZJn",
  "key5": "2WLBeYuc3ryTioGUWpWz7a7x4kz54jKRwSg7HXAUPVYouYBt6s5HhNUCNtzX8JFdzy8FHyiveX4FAYk9ToNoBUUn",
  "key6": "5h2AjRYdBopWZEufS8WhddZ3voTqXmnhWMWPnxDmLomzUGwqT6CrssWWvWSpsdN1z8mK5c1YXmF4b74X8YufG3CD",
  "key7": "5srdyB6Kfx5FmEoRM4G48JgfHFNdAiuy91r8e6TAxGRxXckC7eq2WqMznF3WrvJhoRPsVhcVBsUmFtzJnUizJ5VA",
  "key8": "SodM7ihs8i7q8g76HvoJdQKz7guYKWQWjSfDpR9eXnNwpwsg7n9KCWt34D12eHedTp7LgkyNXZdCyza2PcXV2ZY",
  "key9": "4oNVXMTxBzdcyk5qQaC8DRL7NKUoy8MDbj6XHgq2FDxjvLNo9eQq9Y6RN6RwFxk8xA4cQ49VbM6GqpNdWb5mrMVq",
  "key10": "26SRcF2H9ZLPvP5ZTBDh79MU1EPSkpZVbuQjee7SkeChBDUzcfJgfDm2BN8E1cEHiDjjNHeuAMrHVVE5VyzA4gVq",
  "key11": "4Q3a7pg42ye119KNiMS1HCg4ULvwbo91ygajxUgRwekG6xXzJG8x6h1gpQgYeVvYYj3B6Nmoe6vTe1AeToKHutsV",
  "key12": "2gFLAvmeePhqbdzTAc3frLbRhtTfgLDY6dtoxCzdtvQjhxMCd9HER2goxAXY4REKPyA5saWkJbf15vvU4P2hwk8F",
  "key13": "4Xq7ZaV7xSfZirRCXeuUW1dX1Xs1yhfobD2GeS9zewEho4dE1cwC2E6HME9neXi9Qm3Cv3R9xixUWx8DGcUwwAMg",
  "key14": "5utTGXDGSLy6QVG3RVR8cj7kDDNsTz4RTQUtbPiVj3g6t4Y5QEdWqp2vh4phbVKJJGZtkHfchuV8QVP8WFiWrW1r",
  "key15": "PhLGqLHwVmWmsEGXmHUubPYRKj83iEjkNkqUc6UQFGJRNEQ4M1FBm62TRbSDaFmXJ13RUoNhhf9F7sF4SqYSx89",
  "key16": "2kvazoYmLGZPLqsaDDMXF22F9MmFTJ3JArpgzsrVyVn5GBqKpFSeSMBtgTwam9gXYAAimxQMLSGhSX6qteLMw8H6",
  "key17": "qXeXQuXsP2LMxAEqP4qjm6XNGD3D4QzGxLccAzoR3jkLYn915VgG3wacxjueuqAufyayntKRHGaRgaHRW9hyigr",
  "key18": "32HP8tL4PAxuC1boPPz4pzZjm9MNJBjMkMfTpY7y2aUY4m769jPZ7m6mf9DUyQsAFr2cUJ1fMRnxE9H2v671s2qG",
  "key19": "2DNYrwngStwh7G5f4YVsupdjoWDSqh8FqRji7pxgMtWav4B1zkQ8EjDpMvf3DU1mLvNuBxUNdTsvwEdZUSErhQ8K",
  "key20": "3fW5DCvUzz1AwJ2sDfMcPTK2aQL3KnSaCFHVJnhGTGPESFPFWkCt3NsdoMSCB7zrXZqmww17VqhK9j1UMaAnsv2R",
  "key21": "4d4U2iH8hnreAk3LprVyMTiSHUYqUGWbNPjiW8zsTHUCi6edEiY9r3sqxGh4fSfErjaRKU1NCKWBu1mZ8ZeMpX4V",
  "key22": "5rACNvetH7REeBR4bahXctrcbW6QbW8JX7bWpv9mhpjuNEmSNZQCNWYRtDhtwzt2ZTWu756EvrWV49L5XqtT6YnJ",
  "key23": "5axY1giiHcqEfdxaixGnpWQ4dDkhyiADpNCZYRXFB9oNHVZTMMQW1QMnFVHmUY5KY4JDwH4ULs9VvDsNgLGMhV1k",
  "key24": "1263qJmeczD3goAGF2a65oQdrQjiMXcoNoVB2vVmN1XPy56qJCoSdN1eAxgU6dMaLszfkzyg3iVRk7kQozhKjRFc",
  "key25": "2TrVehLNAa2Kf1WFtswgaqjLfwCnEXUtjiSAuHo4iLTSxMohFhWoyPR7c9dZE23RqWSVmUQLrnbH28Udt1oq4p6g",
  "key26": "tuMARJNaaBnJ4EM2XHjhPfxzMrfaqgAmcqbdsbjdMpocREiWL81FoHcyPYGYc2j93DaDkebXr5jteGNjCvhs7ye",
  "key27": "LpFnat4ZgAGua22YpY2gZkuZEesSbH5kpX6J2uWQJXdjey6jb9qvZydsvenWa2h7koP3c7QkYbTWJzrM4MWQG2z",
  "key28": "2wxGTV5oTjfHFkz3UxEWBtc5ZyZw2T1444tkLA53gqCSVGfPnPS9WiGigsfawmLsViAA4VdT6zQbgnbLtZu3Aagw",
  "key29": "AAYESJpFk8J38iJYkkZr3MBkqaHp2tGgrvaGQ8Az2o3BufNqLfxyAV8basPg6EvVZDdfHopwFyJ7XqguAiQNZAB",
  "key30": "3TTZdBbo4pcyst43uD9eiHRMEVezfvyhroKvfUeqqr2ej5rP9q6WdfPXA3t9fu4EjwPnk8X2oB2iEk3TkjkFa7Tc",
  "key31": "3Y3WiH9825L77fXSbq7dWhnUUeuPiAvsEAfrRjjCckHkcfuHKXDXGiujg6Py5ES61Zwg9RTzLAx1Nt4GFAbZzUd2",
  "key32": "dtoFK7cij8hCEkQAQ6ZHDMvsudZCmW4s8s7eCWUs1NnMgLQSim6YP7B4q4Bz7smvgL7Ju5TqdBGpcVTPnksKHtf",
  "key33": "2cwEnFqfqxPVy9mknduV7PD4QLfjKZraCPCJPK6TM3Wgh8PPyMuxrihCKWAQRq698LhgjJ6dQih5csfbnbpJBUoE",
  "key34": "ERwnBptmQWbiz2ULh5mnnSAJL46864Fec5KtB1o3v2F3cn4DftBn5HKQfLtBCQ6zcEE31Wy6gyfxTJ6DbFzebcR",
  "key35": "2zTabXe6a7fRHXYA1UEvgv1u2nLvyU8jV22HRPqzG6SRb1v14zbUWZ6UQD8i9xeuNWLYgpjkaZEVSpj7DkDjK1yT",
  "key36": "4hj6Zmc1E3gHXKeX7GQfuMcYxeNM4joDFtnct7XHPabfCpLpuM5wKJghq2H7vwcaLjiaiGYumNYNSMMWnNNLT8rB",
  "key37": "449PUNZB3sMBqvimLvcka8fxjZfgmSWYpCZ7KjeKaszebpkvZxd2Gr8PHuwLDPjcNqeAUeHRLTfvFZW1Pi2m8qpD",
  "key38": "3xZoQBJN87dTrk7Xx3JGu8U5Jtrjb32P6ycTAoUUnGbmYCbr51483mhGiGKpnjV8vqp84fAFhaqEVa616kJdEjC4",
  "key39": "5gwosZEe9zkka7e5inTTYc7zHoxDwTULgWFRVt7mNxSDfqeF6H4UkeXWBAT8LgYVYEyXgh7w1yoR3WLegcwBuhMj",
  "key40": "y21hoYY11KRYjtQaP3RWiyZPPvV9xC5fcBQd1U8jyGCzZ2AS1dzhX9mtfDEbagGyy6mGUX4JGEzFcud5Hoa79Ev",
  "key41": "2g9BS1deGpKuyvKJ6viSJX3SXe2dee5TFgWWyPFyjf9mbUrNCU4DFY7HVqZfn3Y4RifZjcLHJUEzZ2db8xr2qpVZ",
  "key42": "GYLqgSGs9TnNGhbb5mT7bv9o2ARZkMM9fEHa9KJpYtaUxxYtXeJ8foZQzxby2WikxGQuevpH8vLfFfQp6NLkPYn"
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
