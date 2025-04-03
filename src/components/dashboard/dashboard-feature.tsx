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
    "Vu8ozsnLpej4pFwjYCVcYrtnX55AnEnBgspW5jg29TXivpa3cXc5vfCgKkvFo17sd2YHS1ZvRHxavz3XJ25owwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipcYaFibiTeYFg7EJwUo9bGoB1G31M6ihpMemjXuAaBi8njyUi1HRBf6cLnje85mCMzrBTn5SDQpc4UoMQLKZxb",
  "key1": "p3qx88WaqZiHEefv9bN7ipwsTstyyjWLvX98bQbhStEqE6fCMTfNhduf9j4xCoCGCDHcWhLvM7CYhxYMvREXQRb",
  "key2": "2bzVz5AdNEtLWmEw4yvNpsHYce8qzy13GvKEWhCeHCXpdcpiUCVg9cUcQSwq4sdxoWaJifDF7qoXvK3GrNtXJukN",
  "key3": "49dvefh2qwSuHB3u7KPpWdBRSvnhs49ji81jPcCfMgPL3FnKmZtU4oXLDpA2nUR3sp9nQexjgZqggs5wJj1jSYUK",
  "key4": "62bsSke58WWcam8jgF8s3VanvFXPBjkz5D5nGLeXKhZGQSN7tF1su8avnYGUWnUAxNSDYJSxNTUCg8CFW9Aq1CAP",
  "key5": "4k7S5r2A2BgbheUwbW8bxNGdpHHt5ypxUyya4QHapboUZSbGhAr2EujrAVi6U4BPtk2ek9riRGPqRUBpP67bQ6tP",
  "key6": "33HUHCzxpSRSLnLE6MUrX2gvzFjRq3gvxmG44MrWh1HSHLPgfe1PFxeWiX6zRAtHnxRGD93Ns1vrZceZsujFg7Mr",
  "key7": "2YkEpndNACz98eynCoVhkuj6eMZ8debcJEPie4FXy4euT8wYHvcw5v7RrzkKUAzu4mCKB2DYQYiSMiWikNK88xSd",
  "key8": "3hEYQHbEKuN8ueeFg4LLq4r92zipLcUjJW2uLqMtMVNbQAEfdPavxdHtcvwVm3p5HtnJCV1XvRbvZaVvPsdV9bDu",
  "key9": "yFeNQ71SAW3Mig7ToPg8saThRFEhDYTgMbBGKqcnMkkTveKs89tdcJko7AGHPa9e4kNnfdapfZ9iRShnrZhFAbV",
  "key10": "4hpye5cGzkQwgbHpSW1QduBVsLN3mZpopmroZda89ikXjbiawCFmDd5t4KMgL2bME4uVGCmUULu1nZoTDJTNqcqc",
  "key11": "3JjREpwqkF8co4tK7KoGngmD5w8RG6vGsJB37ENhMDcwZ26BCTwt28yvPmEJpgJGM5QifarAWr2sGuzA5GqJ8pPe",
  "key12": "3CHbNm99C5oywRknTU88FVf1qHjB3SjNXhiZJZG9QDxeChQQBZQ1Rtg6ixemCDz2WMW4mUuKrZBTcQ58vRMjeBQG",
  "key13": "zCQ8tuJHL9xmwXaRiXn16pHSpZeY2PUzWSRS4H2QKCY3XYs7QJWoCTZdxbfoYXN9KHpfRFpXRvNaHfFPH2jZNyx",
  "key14": "3xh82PSazXajH1Mv1ogaYASndFDRrWfE2eTeYkMUTNaxDtaD8kNUfVKYVi4GShrpnGA1zAh1TRBrDZ6CxNdc66hC",
  "key15": "2y1XTh3gpGZ7xjXT255YK9oWtKQvjoMBJEBc4Z9aia4PG6kqHFYPips8bKqJUETVTe2EWFdVGTQ7xQ98DWQQyib8",
  "key16": "35zYcBJz9F2MR4saoNqLukqrzLc5nVYhvfE7Lf1VhP6kXAh1czZTjBAMoq4bsiMpXFjDzyb8cPpZJBiKp8rLWTH6",
  "key17": "3Jy8xb3Zq9XP7mSv5kntMGiqyznJQRMYPMyRPDYzRh1zTUZPfgpfWiDberLyN4Yb6e9RtMutRGsnop6Bj2hSsSAT",
  "key18": "5URjE588hqTwuZKKQt6ujFpKvSDXP8dVUv9c2Q7fA5RjRdBPoLxEasiczcdfHLWKTd5KGEHbrcmEQcCnfSpo6yZG",
  "key19": "5V2cWR2fSNSiKfP8HKHhErPCo1NgSv7JK4LCF4jaaB4tBWoewxafat53RJSenyKqb6L9AX4cXCNai25eKMWZB4H7",
  "key20": "4y13SiL8gdMdKG6wNxhGPiiXBjUq1brAKh2WUxNebMMrd5kHh3VeDbGaihTDpVQ35qdWevunpb9TCwKUmCF4j62k",
  "key21": "4mBu9Zkoj7PMqbpSDFibUnEheN2uCAJQEqvcPu2PFQHAuLhswv5pvsCtjw81AK5bkW1TXBJVjxzEofAYHU5d5UvZ",
  "key22": "4iM4P6qUrzaqK7oJYi5fqKuy6pyRxpE2kwV26JnKFiBfcMDRwjWNejEcJEzaGn5vwMVkJAdXmmKgXygjTRBgRa1L",
  "key23": "WDQSwcXFYdE6cpS3W6ExWVEvbQGpypZcNKKYDu8m6MECFhLGiHUuUjyn6Ts2K4jGBAH6y6CCXrm92HgAvAQURkc",
  "key24": "jQztrrXA83UGvF7NpAEyTi1QQuvCfCcJTqg4SXYNMMcDsveYjhxUTt6uyeEaqULqieSVeqNidUgToZSkfN4pLdK",
  "key25": "4UQtpPHHMUP9nWQkTBGxDgnmWCC4Z8XLDctSFncdQkan28uu2LkrcDrHj5uZ5SJZG45jFPXqEzVsTx6nqcZzwSsA",
  "key26": "4bYdSzpARud3NEbfQg838ms9REVrj12SdbFuK4rCkCL1x7RH1pGDS3Uf92KzaJxSPAaiLYRvUKRGQA4QJjBScCEg",
  "key27": "43GN9TDiiCZ3tbdRKsExXbY1sE513whw6Umm2o9ynD1JkYdMYLpGi8rvSAZgfB9airR1CUV548St2DvHHvRqSFCu",
  "key28": "4UNfeHTth6FZZJoKZsa2194m9EPaNeZ3MUkX5HGTVKoo9qnKwvnhU1TWfYZVdZ1ih8Z32neeSpHohyK7cYpej6iB",
  "key29": "43cYnk7LaAEsRieomDnZUSTzToF5wesET3gmTvqrc2t2v66E1ypvtXvF9gBYoriYBspC3iinPbBHjKQKXZ2mGgKq",
  "key30": "4ixSZ9dFSdJNW5R8znu2fY1Y3ssZ8Wv2DvyYdnuf8Gv1osjG4segQNqBGw19PUsHiM9ZcBhY48rDBTC7H6tqMmnY"
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
