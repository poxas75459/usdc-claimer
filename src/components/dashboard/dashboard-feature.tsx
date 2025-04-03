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
    "5sR3MMvrEsMvqx2pL18vDqYZtFe5Yu9GXAnVoYpHHoPXHjcj84rdPCzyJLrnw2qsRH5ogo5qg94GtDsRCLa11vWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J5zqnMBQVmr5Hmcc15Xsoqxyx9NH5qRhjP8zoRsQssK4iAYJLoZKqJ8JdRvKGvYeGCLVrWzwhUUo282EHBSkMWx",
  "key1": "YJfHu2LBG3T88bggRTDZPAWuqebtoTUnaxeaD3nDYN5DkbMTodFmAYXinrDLmrnx8U3bsyMHjVkF6DPaFrs9FPm",
  "key2": "2Rg6pnfavEHT7uVLjLMxEA7Arvg7hkAPAJqcr5zWWB429NddiByr3gaobdR1jSDaczz2yZV42SsNWEikmjdoMgf1",
  "key3": "2xpMhbjn4jwGJWsNwCYtuBb5DZmS54UA219y5K75XfnXxgFBn9CTmsyqGWAxnD4cWBPozJrzFCkdqUZhQiCmvm69",
  "key4": "QLM5XrmC5XXPFx3fogaYu5i7v617KNJpSAhdgHPqmqeg2cvpJAXiAfKruqa7vesPHzAcKheRQgdP8qMyoSSJihW",
  "key5": "2jxravDi9u2e4LDX4CRwf1KS9KXBaPn3tim9dmmc8aCzmNrgA1Zdtfn6K1uxwBn6sEwmHuTtJ9z7x2FTNjbg7TEG",
  "key6": "5v2r35Q5N8P5baoEXJUxRNWHPYvp6A4i873nctBUYT8oN4qCGAGFJ6CKQZdxgCJDQNdQNZyimfySVVBcahsi5QAj",
  "key7": "3N1YBhVhXCFh7B2RuGbspxEiF1bnhk5VkpNEaCYNG1Hij6NVbvMsJGY6zZZQvpbsHXnoY2C3PQcJtZncjp3HjZdX",
  "key8": "5bHVeYPmzzReyQ6ZMdTS2ayy7H22ZMtECdaHvWUyrVRd38SnWkZDdfvrsneo18GkbSk6kxMyVioswziVXqGMrJXd",
  "key9": "5D3YZpPSLkmhm3Gw2mSS72A4KoeLcRhSKa1u8i8SYDcstTvxz4Tv6oiGr1jvHHkVfnrTbX9MYrz4J6Dig7j8SgoS",
  "key10": "3rGPRg7ekvT5wXxL7oRwq1LVAckbck4eSKjDUJ66aiwgyBijpiq9CXpmzsL46XcctBgHbJTtUHijPQcnXZHLex4g",
  "key11": "2wQ99HxrYTas6eZhEwumXNLeMrd7wspsMjvYv3odzxMeoh7sfB7E17gVQWKjn1PdND45ms48J4JmTk84rvrzKJSR",
  "key12": "4PiEbsY5gy4ea6U9GYBVRtUDwr6gCygPNmbj2vPFJ6pfKqqLnBSugPJgAA3n7c26We78nydV3yBGKM1U1fwXAy85",
  "key13": "4Hst64TXS56Fxedex2ZkjuRYqodnNrveDiw7s3TNLnVCxKwpL88YRUwcF4h5Ki1LnQcyWRutXnNDwB9vCcBHQzpe",
  "key14": "22oUBh7ofZi7quzUPnqGDVdX55TgCLLswEFJ7bN9D59DAPdomUHLUFEsFg8VwcYiG4PCvGqJ2ZnPvknc8NcTs16y",
  "key15": "3AR3aK5MS7cmxLVgbNrJz7jSCU6NU1P1u8h4yL5UY5hbnNXi6AytcpK9t6FhhFFRhKFrKfQmergyEbXe1gfU9X4q",
  "key16": "WYr8McmLa7EQWDBCKexzCNVvCCp9qCWGKuzXcBN5ZvpKfqESyxnvpRsFtLL5LLYFSja2kpGW3WwdDXNhcFFFHSH",
  "key17": "4mreeuN3mj9yvXpQMq2PCeqPneRR3d7Y3G5ZdJWDUDD2qAyhxaT9XGmiAYibRBLs8B5tQykME7HmGVB1c6uyC3cN",
  "key18": "4ScrtnYmD1m1vkyYxshYbU453not28weFVAixvXqRT5QE2CMTCYQiXsXvTjh4UGueRt4EG25ZbyccaZazsEFxXkd",
  "key19": "rwhNsjnuseCpzY1oJHpLv2juxMzdWvJfUJaghnKi3HZ46BprE5k2JiVZi2HKxSarvHk6cmXzFPqa22E76haYx4e",
  "key20": "2hQ8sr8oFheRLinuTyHjZaggmVqV1qqd68PmhofnNtjSSoAFgpLkABmas2vzkpWZx1huEg8gfFo6WP9NBX9n6cd5",
  "key21": "xtwSwav5nERdjMpVMEwGkWUAy5Tx5LsxKRmEuB6HyYhFDmm3mYpRPm2QkWbGaF5hgDhLzqfHZiHV7h4Am4LQBYv",
  "key22": "4Gwc4GXLWqeuMGeN1eiLL4n1phubrRarVvqNqFYJc6JxJ7zkKeSvgudguhiCG2b6GE6Qnm1kGcJyuYdKEEajsuYB",
  "key23": "3UkCGfzULwvfQFjedMwuMJwPwntYgNbuStuPxWn981A3cSanZkp8oWbXExGXn7LgTtWAqcASjwqieDNraZG7XEU9",
  "key24": "5sN5fHFBJM8cYpCTDkLRvg5mv8UZMNgRTsX4WyWu66DQ1sh5HkXEZE9ujp93XTCVrzosb3DUnEwzdWmGjK46oucJ",
  "key25": "2qBsZ3daBZ9FZcmkieNf6zdSAxbiFaWuKZajSo6oKLLa3KnsJt4fhLgaYsuFHqX478rt7chrNoamdEMdPTq8P3r1",
  "key26": "4kVbWKY75zfjnxXCh6pCNALhQR6AKm4TzgUZyKqMhZVLYpVKXJEqwJDx3XUzwWD6VTHyVt52XQEr7US94QE8gaGD",
  "key27": "2f7EzEjKFYDQXxUF94srisJNhprh1xA7RWHoZzVJr2VN3d3HcrFCoxTemXWU17pUBLbNqczPC24JH25n3gTrAFjd",
  "key28": "5Zh7M4K9thaNm4NY3eV8QUYQHobHq23CMa9ZsWRtNSg66UEajd62yq8aVRBzh9UjMNzctMJ9Xkk2U3Z7jnq6bCb7",
  "key29": "28WLstjjQzxdAFrja6hANWCijPoFkZrMt19iq8yeKnyqtSwyhqPWJPJKdJKPtJ9sSC78rngH54EgznZnPMeRF9Gk",
  "key30": "f74TWWm3n3t6kEgyQGmMV9Gtm9pt1yYLCnUcShFscMHEbxJNnLBjcq1RVKHnV4QjSAjMDjhvCkz1SESuV9LZY1x"
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
