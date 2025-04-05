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
    "46oNWxrtGnLK23P8VZqKaxc3wcTwnDeztf7W8k9YcVNxkyN8nVLuWdUD6QvMLQCoKmDnTrgkPYztegfcdh8Wt6bD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CJzrShMCWGoCuqjPEVQ6UFcfrsJa3vYm4Qru45Q1seK2AZGq8WeVU5DQuL28MWbYcsmUmYJgXEPqhjSxmWUdU6P",
  "key1": "2N6gwezyiTYEiGNbho3rb9CxxsUDpwoxb7zhMrhdJstHo7bYWpAcjH3QpypcJDuLcsVwfBZp6vE35oJi5RcvhM5y",
  "key2": "2mgAhhdSxsD85QhWVhWTvpHN2m5KRsvJkQGZKPvfR1WLHRMhNsM4z47A9C8m6nErxw6QYBTFWiR5nMEU4UgmpJGW",
  "key3": "4bi8ubZ6yzcd7nxGSQ997MpsFH6KMkjjRM4xoo48pEwbKTJHD6gfrdnmYTpmNFGkbRvJAYzwoxuDJnPnwc33Ea2W",
  "key4": "5ss68r6wXGSR8ZQAW43PtoHFVkkd47KD8JS5bcdBophrhPUtXs465i86W3JP5KtRf71PzinSWVbzp893zE6kBvEA",
  "key5": "3U6F2dHtLrp4orY47GV2QWLQDjUJspHxaCUSBJQLYJAkzPDaYfRwUfVLKTrLaCXcTAgRNc7ci87v1ymhbSLJnLd5",
  "key6": "25ZK4FkeAYXcXPBURRPJ1SVUp95KKhMzKH1Fkc7bNbHymmcQqfq1SxUvqaWJ4komBeau7oYtAYCngMBw3wCMZf18",
  "key7": "2a7RJsNugjSnC6yzLvRBTzVj69f1giBjGeCX75x2mr1jiANauiFoVj27Q6zCdY3e6sXxNCr4gMr76ZmnPgVPyhx6",
  "key8": "3wTnBimRUUeeFPZ5iKKSizGsZjHKSCDo4yYEVmqqDARx8QKZ2bXgERPKcFgicXBhtgREL5YZfs4mdX4Y7nifip2n",
  "key9": "3VX4ymU7WfTmBmaYyy1NAPG3TqLpu22Qign2HBzp5EWzCT1pG2BRkZN8qBREDBDAzU2WmLKagQdTWaNKFjT2JtW7",
  "key10": "3tvJvCBC6iw45ym5jvGe5wtMQovYj4XKuGsV21qgMk8VfaUCgsj2TpMSrsSXVTJRNU4kXtC5sPnFKPSEq2KDWUur",
  "key11": "SryoFeKLgW91BpAXiec92EYpPKDQY6QYwvyXwhC2jNYxAJJDuZtqy4S9zx1iN1rJ9kGRBSeRgmb8PwJtymKFVqb",
  "key12": "4rAFNpWNvCmBVPXvUs9ryRCNerVWzU9we32Q2nT8VbXRAgLUXXg155UaPf62cGhy586gYDqdNV6eKSmWH6T22raZ",
  "key13": "3WCi7bgQPqcAEt2YVqmqCjJRP8AU2HWLTg1f8P4fEobubiCArYb8b7PyMzdCSxi5KxKpMVZqisFNvPriDicebTCt",
  "key14": "3L8vJGc4J51dcXRoRoSMr9EMEUKbRsWciVffEu5STsPWn2qVwwKaHqJwHxFEhFiCamPftaSojpxwC8z8NddeKwsq",
  "key15": "5X2qo4kTow2QhBo2DKxM6saC3uqEfWgKMWRVd2st9W8qDfMXnsRZcPa2uuVfmYeqfsDpKqoQPi1KPekEem8ozD7h",
  "key16": "5VFqhYt6H8LmQUZs1rA1xxBcTnRj5jXdStWU3YgD9yEWthRcseWcTNXEkBTSV6PjvpKHWGpkVyuLk7drMjcaSwq4",
  "key17": "66fqQnWngbjLCRLPjePEiy72y94UmZDVJJWDQMKPr51Deud7DiB2NMmLBtim58U6vSs1N1Fh6Bpz3qGnLDx1Pa5D",
  "key18": "5rtnJQVd494BHFNNppjXR5Ys5TC86h6XURug4LBXYPgZLvb3eP2t1RE9cRcXUwy47BEz1Foa753Wr4PNuQ6yC274",
  "key19": "xkPbHFtuieSxYygPc6pjGKENcEPevB5DFRBgz5ZUWp2YZLPg3NeaADfWE36ogUV2E2NESRdvRsu2YJbHPdR6TWu",
  "key20": "2LNAuVZFY8hyiDSPp5TbGmauwGzoyXzLJS9MqdtaFYVSFQsnazXUxUfQbUfi8SJpLjSt2ZmhUSJW92wrR6ngnafy",
  "key21": "ESZQXz9B22KNm5siWk8NBBksJK8KM9VNp82GhYuYewGHKZCv8pN9YsKvuVvEgva9dfdPqbpM9Tdt84JqKHXccjC",
  "key22": "4NRAnvA1WqH9HAwnZbyzMgqFEdVAPgcgyQ8c3HPaPrJP1Ts1MkBRCLS9QjgK9bTYQornCst8zfLwwYuif5sCQfWj",
  "key23": "2h5scDDjymYjQowQCy86zncxxJbDommTd5KzZdXzffMKBZBjVN3FVcDQw2PtYsNwWwA5EgeJfdKDeUFp3eHG3gEx",
  "key24": "2gMY1wQ2F6fwfNH6H2JRXb8w9YMVo137dL7SCEodsqsVULWbjzd71xd45h92BRwfirbPnkNBsTx3VaKV4G7ysfEE",
  "key25": "33SXAU4Fme3Q7J3ZFV6LygexwRouW5r8jUavfFaj88Ni7a6ucRF98ELSSNtSMteht9RtBE25pUP9LGwjByMiYNpe",
  "key26": "3jwNyDS3ZQ1G6t4qVjYxoRLqXj3JjWhwdQVXDv3RJggbktZg17LgbauqUp35NV9coCoxBCqHuN4wKQTPgR51cr8w",
  "key27": "e3HMUiv7FeuCwEZxZS1qmb8zK4RZHZ2htQdpo4xTQyCMm6j9fAxhp2A1Lz15o5o239FjidXDjmcML4KBHUadrAz",
  "key28": "4R5nM6A8JJhNpow3UTfwUEkwQMFrLhfzndhtqjJSXehAe3aBBvCZM3oV3R6E6X6z2s3HxoVaQFLwhNK48L9RPkQv",
  "key29": "rrD4B43UMNcsX9pvjzCtw26ohoLmSsJUcPzTZus4uT1PHxeDDTFfH7RE63A9fRdJTdwu22qrPNEpCM5NmWRMocn",
  "key30": "4nqLA93TAoTndqr8Ei6z2fsZTVnd368C3k2wRSJBK6sxLjUEW13QrbVQBWR7vSFkKYVBbE5MPH8EPU8qzbMzpHdP",
  "key31": "4eq9BoNYGqAmeLmNBRK56VJhAkWgV42jdUpWFMvR7kaUX95jXygTZJ4m67F7QHQgmik6DCy4rdVKqMybZ5foqomH",
  "key32": "33ju2hcFtn1VFTkG6oKRmVifhi8FAeb8AVM9iuVKN7cLFvm1wSwfdGG3YrXJoVJjkbzAx99yTaSwzJDEAKJvfgnU",
  "key33": "3CRthCqwJG9h5Kk6AchhkGgyzv7qDKMYd8bhK5LZdDGaK9NxhewaQmiTV1NWaN62ZtG2VQMN7uEyrFLF6Vf1x8hU",
  "key34": "5454tzjmw6KaxtK9fv9LLEcRbvytKUfmy676qJh6bQmaostWixkmQivXprTBZv7gdvANRwtKdQAU6p2jDcWPXe3Q",
  "key35": "fVKX22kFt2ZmZ2i3dhm8TKKW757pY1Ht7UeLpHCNS1VEXvUqWR6UJVMzdp4uktr9fbnFjGdyLMn2JdByBTNioB9",
  "key36": "2MkakpxXVYRB8Y6fWepiMUTWJGxWdwS7WdpheXNvEUJY7Q6FyiYvRdWPs8FELwon6qgdfUEXU1w2jajcUuyHLSbK",
  "key37": "5H39faqMmak1dXoYnnc1b9tZhmjf7RNic7c1kYVzXGD4Zeqqzj7c5CytYFvmJJhsojxYGznwNX4TcfHnUUBnGKHF",
  "key38": "2eWkhXaPrtgWxbqxWwAY6MS5eY5iNwg4JsGYd4fY2vEYFy4ur41UEZSPgT1gn8PuRNN9BRdHuRsTxneonJpKVetT",
  "key39": "A4VSR4rRTgJvgbVzGD36zZgWAKrnZ8QpD2ed9BWSNxZ2QvsfHZLqdU4f15H3Egr7UdKnXGyskVvWCUVEMf6BWEV",
  "key40": "46RyjeyR8J3sncD1ri8eEHHqhfiBKoenQGxHSJgR47rXM4zeJnfb6aXsdoiYZPAcXqicGw9ymbUsJKSguz5qzMCd",
  "key41": "5YXAA42dqWWRoXPeRhPABavQo1zbcSW5BzfqPWYVJKVmxtkYfV9ab2aAg3zeeDw59oANor4onJjE8Tkc3QV7nm5L",
  "key42": "5aRLfnDQhPXhZnsTWcUMUM5kbeygF9CjTSjWnEdg9rPyhzUULh1aqJ9F2N4dhzZEdfMzQ372bT7dAgtf8o4MLtas",
  "key43": "GDZkiz16mCab3bAJM7TPaVWxaUW92cMSEE2sACaQ4TkTHVXKrjVQ1ULU6DTFEYPtxShZBRQynzG6r3MLBiAoKJS",
  "key44": "2KJgLoozz28HrAQhrDvAZXxB4tRq5WFT29h24UPADSBrgqsjnVYCFfoLf1CK6GFzLfr9MvXvC8m59SgyygGp4Gkv",
  "key45": "M7zZjkwGPRNqAuTbQCZAKpqjisvMh5hfYKV8Ntzk3Xkj3rXvqoa9s5gUShpVcZNd4jgX9c5qP96cueGTKhJht9r",
  "key46": "eEqxXmVsjpkzmV31Axgx5i3txki72CHKSVxa4UqAoSsBGRDWwt8CYj4cFAa5thxXkkAVxVe6YPysutwnjqxrWfg",
  "key47": "ka55GXQBCWsNTTHpaqQjorDa5Z1uq1nkqSJdbTw7iEoaaH2p8scXEHHQZwV4Lh7P1XB8naYy38iTiWGYQZRskUJ",
  "key48": "rjB7yVYLsUFukXACVKGfGdA8P2GLaZM6gAu5gHosteU8x9CphyW6msJ9y5htkZ8kVC8Gbn1x8wZe9pfGuD2MqWQ",
  "key49": "5s16Jxaomb4Ya6nJKv42vJbgJBHydVEAH8EyLUznGJLD589WYGy6S8NFfmwYFDaUZD7H7uD5mP6UUSfUDeqxiaUU"
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
