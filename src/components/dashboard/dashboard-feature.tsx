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
    "5bct7wGcCDzTT4hCgEA8ZXtwBkSaHEDwaxJ3Uwnoc3bZ89iGgVqw2oryLFRYY2bQBcwiXrErpNehG84fksLC28Qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zsAmZAVZ71SP8rzFVGhFPatgXJx55oNRLP2G9oZncwD7Q2nAp5yXizCTd2YeXJxJbqrmiDkGG2aqhbe4AmqZSk",
  "key1": "49tzo9dbL6zT5tw7U4WCE2iGRxJoDWFPBp8bGnrpGYDJYKW8wwggbcz2xkBvLHdfjaV2Jgrye7PbPpQAwQZjm9F8",
  "key2": "WkjqxzrHzba49LmMG8ChSgxY7dKGjBJvGb3gB692PUXTmdGbYMF74JmTKF3pc386wowEqvaRuPHuwYG8eSkGQwz",
  "key3": "5KiKH1vstygnzArdXTy4ea32GTQtStfCKp8uyc9kHrWf1FYBXFTRgXmUP2c3pqocurzNzDrC1bGzHpFZMm1BPsf8",
  "key4": "4kMrW8d7aLkgreaR89xf8VCm3j89TWoAc7BFj6mgAJre3GGPhDUXiRqW6r7g1LVAG8fyLUd7bPkrSEJxLrNqUXrs",
  "key5": "4cbGwfMb966WtnHNX4L1ohomKnXTLMM12PYNKmb9xhBqvdLUdsXY96czW59mJMCuCgVhGGEys7tDkG8ix2ts4RQw",
  "key6": "37SBK7Xp8ACzC8Myt2acdGUVwCdy4NdwCSDc1umaYxM8McAB4p9dHTHgvnsTXARF72jHuVQvtHPtzJqTmocgWKye",
  "key7": "3SwiU1X5yWP6gTGMkScE67iEQE5jfGx9kLVrkQF1LGqvaPmG8SQM7Fp8SHQmFwjV1RhAKJZYsMyFjGi1xCt5acvB",
  "key8": "64osb2Bu27FP777epoDrjtJGootiuyawQK79PzE6WmHB4ykWCGxEhuMoK71Vgw7uHMJr2ogNhUyEVdYfc37VSxuo",
  "key9": "3D7G2uNXDJZ9xVgdxd7GgsaFJK7BUx4FDQAkMwjjPZHRsHFqBvf9hXXoocmvSCwj2vn1gGYLmFBPPAXpq9GUhqTT",
  "key10": "4PRv4QFavbqTq4kaBCgGaQCnxKWvqM1HWKEh9xCcmMJWs2BN3NLQp2kvEtusyToKYBMn15BBKYonaEzkKVTKdR5z",
  "key11": "4WvmoC8MtBrqsPQs7ktccfQBKvxn8zpfjx9bAtoD9YscpPdXw7x5PbejyGL6Lz9wAkka6aM2K7WHQ3wvgEtf9DgU",
  "key12": "3x4EuhDwjtJZ6kmeFjKxBxMXvLMtxjM24wYpwreZdhY15ptBkswPr5jkaMGTvMsd3BcYDXy3vv1JoX2o8mCnMQsz",
  "key13": "38z9MbUyAwvbm6LLrVPv9SLQUwpoCWXAji3JcRdLRYxFDWb8RGy1i1N36Vef73UiK9tCz49JohtgvFyRcuiRjxfB",
  "key14": "4mXEw7WzDdXBUw1SsDVguf95QoqfGRe7vZCN6KX3ayWfoi4wQ7c3KJsQfa9fdgk2ZZ1NYmdQxrv93q4x69h2D3rw",
  "key15": "jnv3aWye2psnteSYTrZiJoTmFiwqFVQ4gbnSfJPsdnY6fh4n8trXsDuxpo1bJ9BmAmQ9p4EcPaN8Hqpn4vR8BCD",
  "key16": "4ggKtxqbrcaM6Bf4Sof15J6tEt6RcKAdARJdMDAS2jT7xSAwMmQHF2hiTcfgSMyrcZgc3WqFdyEdBPek8tVmD6hx",
  "key17": "4YJY736wGNPvpTpxMvXZwajLHC8L7CuivZWVYYaWhFrTJXoYDvpUPfMA9afqhb9i6vcPruj6q4pYNJZedkQpkZV7",
  "key18": "vjpnVjDREwAqimsUbfVJKpRdJ8ryKnut6xXLRPmU6snqGAADjgKN62TBwM4hhmq7htqiKJnBYhk4nLqboTf1Fxy",
  "key19": "5JaQJfzcq7SPCW2AjdeNR6ckhdCiMM3LFHuJpzYysYUrbD8YEw1Q9W6WKgnbc4zD9iVPnpGYWUSWP4bgkhLX2yE1",
  "key20": "2co6ZHQ7PxBrmGEzSMvGETK9zi3uEU8zogzW7BknrJK7vXxn7vzL6BKJxWUiPDFUyf5vFk2nXyarVJtNg5cL5y49",
  "key21": "aHAjaUfkxrbDRFxajASEEcJoJYWBByie8XxxqpY3fYPZhGT9ir2AxqhpMj8yQY6CjG2xKrdan1GMze6B7HVYA24",
  "key22": "2k42xytegKQgqxnjZLQSkTszp6cM8FUhXENqBT63EoDN1PgckTxLyPkBxP428XjEnH7GScG6UypoBXFtuaFHnUob",
  "key23": "5Mi8pFDWJfKSd7CFGFHJJJHUxLvqYRwpEzryoYhRDdihHDJJ6c8ZjwHu5qDJhvTZx4tm9ozXxHv6cAWmU27fKQg6",
  "key24": "5o8HTRLfdBdaT7FdY2vUT2pauiH1N4W91yU2MWFLieQtLGegWnXbNEic44xJD8VUzDKac1GHf8fG22MmA3wSKAJs",
  "key25": "46haCbW95LKZRSHgFGxC9bLwcnxFo8Rw1xRSBwDu9PBhPChPCwsGWPWx7RjoRGWy5rASs6pHsaYNuvZEesadZjto",
  "key26": "4PKDCfy3cigyK5tBM3fyyqxhWoqPzcPAjrRwRFLa2zkCCjGTcQjLeYQrbsTqK2t3GEsV19N1pEFQQWEcgUGHEq4S",
  "key27": "22oQKfPbj7oMzWSL3gH6dSigMTDxvVk7jp4bKjovGi4Vq5bs1bvZdurV8ae5MECjfZZy8ABhN4CCSMLoAdqnBj9D",
  "key28": "3rGEFCudquaBCLxFoym7AZT4rf2kw1Y1oDyqKWmiap54mmWsR1PbNrj1LUqLj8TCZfcr8PtSa3EB8q9BnAi9vEWz"
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
