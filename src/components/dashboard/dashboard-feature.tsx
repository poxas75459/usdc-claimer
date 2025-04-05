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
    "5HQ3RoyemnKwvnNW7Mrfo3ex1gym5vV5TA4sbbcHb7TRHBtCm7escqioiirhDkCboyaaQS8aqMn6qmzjbMC2BG6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5euc76UhLd2d1YNk9NpFivEJNX2xm6ptEp1Qtmg5Qkdjey8xWWGKsSKKcqifyuZj7B3BjFaE7iD44HfRyZGwSAh8",
  "key1": "2amrWaCkuTEfhLNckD7ZqDJuLRERXzAEpfHindr1TZqCYXCfBRXCJYW4t67L9FXbrJULb5xg5BTW2wMtWNvoTUY7",
  "key2": "3YE5AoC46yceX526kcahUd3ygHd3joN6a756SjuFkFj4AQqY7XCTSAMw9GBHyUUeYwBu3sxGwPG11uVaKNvgmeAh",
  "key3": "2nBTVorJyGLHLmrFg38PudS8Krp6QeNBVwZpxteUuxF8tJ3TmkrZLVXRQZh2Zb4bxLX3U2h1TmcCXwaH7ZHzrrzi",
  "key4": "3tuGDTqakzKP6Me99o3gtLjWeFu7wmW7vwz8yk9TT9ND6XC7GiG7G8QXC9A7gqsEFhSzH7WBsxDhUQqKny5SCycz",
  "key5": "4kXsp5V3LCsVurU5E8BaWKiVQriNhjKuc7LrUbJwNzNicUmNyjPMUGBtGtmbRWvBcEJRGTDpbTMbCxQH6HtbEkTN",
  "key6": "2KYQBRrgGEWSWPPZbBEApFZJWHxmBbfDvwgG7XaSvwjBoonBMUDQUdJLR6WSTSTHfzkEWWQz2t93A88uwEhkkgbp",
  "key7": "2PouGBV3k9n5KaddAWUo3mzRyJYXKuuipvJ7XPTqeNcWcCtV1FjmJ51fwXsPCj26FBwwFjLL2Gih8ziTvwhxJwQ9",
  "key8": "5eMojyvk8sQCycjZcGDhiBiCiRKVPq2pPj69pegxZXQyn9fk8usu1Y7yWTStorhEYvwSbcWeZXYCQc6KAhFhwHoJ",
  "key9": "5WNMamdtn7d5TTqT5iXAGsWNdrKwYw54T8rsC4sg7b2H5hASPvPmZC3xszZ9yt89MopaGBE9aBRp5emRYdu88ie4",
  "key10": "52zKniBm1r7YGSxptR18w7rmmCidF9mXeNSQ5UfBx4FtjCAK8vk6bykok4PZ4Yr9gy5Xj3gsvamKXuLLsgkSBomi",
  "key11": "3JKVP7bMDxhD6jtGdLa6iSa2sHsCEhSs8aZJrRTE3j7GpXC11MP7guGHu2Kxo3amV4vQKtBmpS2jZm6daqvoa8ug",
  "key12": "63XzXtgtWfux8tnbWpiPLeW1oW71kNxPCpiRYKmb4E154g8oXYvA8oGJzoC5bT1dpTngyDXC1vxGPnAZx851XpP1",
  "key13": "5qMZ6ojzRVshFFb9QxbPAxKcFd4LJHVTanbtGFotXQP7kX423poysCmuQcyw6pHR2A59CqP83KiYHbSLcfPTpahP",
  "key14": "2sFg3UrDq4QkC2WvYMy7nTkgv4YU2HZo5T1ojXVDnadHKY8akwyVX9St4YfirQ6qQA5WEe45rGT861Q5ZiqSug1H",
  "key15": "3RkBumozsJhMYVayfgX2JwZ7W8qkSj8FzPT59n1NB3eKyzLFS4UTWj3C6Y3FQQnkDQdQ8dQri5vWbNbhG5espsMM",
  "key16": "5YanJVHMop79JaxhA6Jtfy93mqNkPsPh664eEyvGZmNHoCDGcthZGHCVjAqkh9cC8ttXNaZJtJA1RjMTPVRyBUbm",
  "key17": "3pXR31AQ8AQJaa7eE3dB4TuufXG2J4GW57RynFyhmS2ooSvqP6FPz3FD781ngX4s8iXT3pZtyAJSuW8ApfMoCYEL",
  "key18": "69AebWCSVc5gapup4JwoTZcFCcHFd4FB5d7hWCZPC2QyKbXvfNKcxsLke5eLjhdoWEhb23XrEopwxbFq3MDyGZP",
  "key19": "5d9wqY5Jf53RruiVEgHASM25L57tfNyVbCjbchMUdZmcnWu6RhcgYQif6oaMmLVYTBshghu4WnVaaSXhLi821Rd9",
  "key20": "462ytTFxKXzRfGKmXNs8rot1SPGHFzH8fJpZpMKC79iN4z9vjYho3f7hKs4EndwwQAtcb5L2RNXF5LCPpXYC3kbq",
  "key21": "5jEPfvLK5C8e8ZySSYr3cpziivXp8iTjevMQgz3RHVUE2GXv73P1y59EW2vX2LxX6kfpkUBRsKs4Z5u1bTbstMXd",
  "key22": "V69pxE28Kt4aXsh5y8A8dLrsnd7xf6F3fiQD9bGv4Ncok3Wh69RJpunMytYGcTHP49MREq8J7ozSpncRsTfMJgb",
  "key23": "5WVrxBzuDGBybJmm1GMhqFiSUExfyBXsp4MezE41oW8hVQbqu1WHXhnR25513gvx88HQYaP7Pk1Ytjpiv8xZRt2K",
  "key24": "62gsY3XDSq15MuwfgQPmrkcSBu9KyuWWHNFnjw9X7arwpVheCuMgpGmGZ5dS8KZHQC7EuucrhWga4Pc9CpsNGsHj",
  "key25": "2heW2xiLm84eo7g69UaXqU8PcU2X4uEWiPPsn1gk7VJiGrS6kcW3ZHpVaUtgdBfCUTJBRwbk1maDPx4Y872XDeMB",
  "key26": "5TZK2gcxdS2ozXqVMrKeuLTjWkMpSHzNDNmahgc3ArGxRyh6oDJ9YgMDZ91ERyFW7nRUsTYE9QPbK8aKQ4Nc3uYR",
  "key27": "5wjzQrvxL1sYTDQZmeRHfLUXjkNmVAFnEBugZYyDPU65iQDsQijKz5ShHLFMPJAtyMtvYbXTtgVwNrnzYJ7zs6Nz"
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
