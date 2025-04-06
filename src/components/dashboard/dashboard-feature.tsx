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
    "4vxKBxX25EbhSYDKBpFkhKNy9wrqRaSxcxKRS1QnuBS2oajArArTyi9WBjxdh3kYmtD7kgTZrSr4BcBzfqEUcch3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZjiYANJSVLLCUHwd4k2HFH3eprgsXc9QjWghigBMdnBwwCBTQH4ogifcu5w35TZXeGwdR3zv695pXYu4DWCnay8",
  "key1": "4XSDqQ3RB26DqqHK6vjnEV5niikmC5QLmf3oAKVKjyT3L8tDZjDQUymXiYoxzgRtFTwZY2uSXQUWve1vpJLxbk4J",
  "key2": "4aZ5DkKy5Dfyyuw4i9SoshypcSj3x2vYJeRye6R5YQBT9btwemwt8FDou8nSL7ZFronfLpvFeLJXR2St6uu2hqdP",
  "key3": "NsPY5szz9sk1T9dbfhufhUBTMvg4bVJKnnDLHro1PgDJG2FuB2htP7ZEoxanGwdDewiNQx2fvTFWUw8ZDLMUxVq",
  "key4": "59Ws2SsmRLsfZU9FPMPw4g72iGiGcQnrAaroFM8MsVKKAiX3D4UVNGaNnmyzi7ZjWvJU15xrXeoMbYf2ByTMzZeR",
  "key5": "Js7vdBzsMVivJq4vLiXpTboWCwnSuz3hvhHqPS9A7giQVEuibXnTVEfZHHqnNVUg67R7PUG94SnRzaTXawN4yz8",
  "key6": "4W7JPs9fyFkgUxqpiJMY1SquApckCAM5ygy9oQ8iUDeDXVgucrx1t1Wqvvp5a2NFRkR81NbGUDwCm7e4eUXEA9oX",
  "key7": "5CqGdUbpqKNrb2UfnwQNesVQycYcQmZyNHGVnMKd1LHa5yFF3oY25RpC9nr3VB2iSnf8cU5HXmeiJjZbjpgoVKnK",
  "key8": "3meHLt7hHJidjMd8S9EeVnQoWqbZzgKin6NLSKG7nYWNbxT3Ecn9V5UWbvGYo69ENmyUruub3NzSwVbKYSwGjLuk",
  "key9": "3ocius26UDLNrNB8E4ZVwtAnxNKWYdp1C67DmMUZJ5kd7uhX3YWjp8NRNr8jTNf1e5VzEq12QXdzHv8gZd5f6GMJ",
  "key10": "j26tR1buHziY21bNeUQPFRbf8NtP3ikXaenujn1tVAoKeoGJxBTgtokLQNXkD2qY2ZL5GkX76DuDi3kR5YQ5LSE",
  "key11": "3EdtSmNJYF9ppZHjfiqKMoJ5v9GHEpedb5nLovd5VmTdReU3TDZ4HeYgeYxDjsPQSCmP5kRpQJzzqfYLPDHsLCCE",
  "key12": "38PMg3XMpBn4SsuCnVXa7nE1vDNAfyMC6LPPbNsGS9Ncm636VeNJP1m8KeRZcuoiTfXbGnTjXWpiJKudZUcYbWKo",
  "key13": "3PMigURWk5gFAVBCVqcZy23B4XiFhp1DGjHSWJM83BAJxveZmPrJMkVN1n3puPSnwhjCKNqWp1nSvznZ1qG1neiR",
  "key14": "5wX9PJTCAmCwY8epX4B6YrFtZtygv2zsAufkCftkbo9y9FjgxdTqVrYsJJqawezkGhRAU3XE7EiYusUYRmSb3zmM",
  "key15": "5kCWFifPLKft5RaXnw45ZqAUv3hFZFfttoj6H4sMFQvU1ERq3i9JHPjpqDmtbuouPR8fT8DoM5EJrRQ5iL2HTnkV",
  "key16": "3arm8yJYRQ1dWJUS1gDLHrHNchiE99fab7d9tuFuJHUKTryEKwm5vjuPGAD8rZVQcGV34BTHb4AjYCT9cpiVqPRM",
  "key17": "2rKWhgSJEL8az1aB38yUipzZ6SwdjtacyAwrdT19m4TXD2MDwRLHkZXGLk7yCKdKWRAmhCBVz18zYNG9hPtxP48X",
  "key18": "4n9vgzqgWzJ87kuMbcthiUBBNypWS5MomaXc92HbaFY8pFcmS3MF5iREu8Mi9cNzsqTqTJCN2mNUHnshjhDzkAhh",
  "key19": "5JrpbEKHeBmTFjm6JLewfeknwEd5sdmA53ziEbqgU4mStVSDxsCgxhPzV3X3SyFpTQ6svFsrgmQzPu5raeF6HHt6",
  "key20": "3KEiHWiWSJHitzPup7iRuX5PZkk7Rvb2jpBQNgiPBBWbVEmpUBCPZvBp47xJZuxtmRiF5xHmsB58ffCa3RYULFBb",
  "key21": "5wLg47j6pfnkxMwJ5wq9ij9qJaxyo96THn6Qb5VzvFFbbstHcbKm3GG5Z655eAo77HV6JimJydUXf65jHaPRFjpp",
  "key22": "3uaqkEGf98FMvp5AprDum4Yoxo4FiuCCM92QEcW9wMeRxjCedqKAE3fBFuToaZaFEixZjWM2h3mfuCXf41eHW29j",
  "key23": "5i6j9uxmmYKDs9YvFpydfRdCjru6EjnKkCjJEpRcfux6Uoe1x71mRsgp1pds4i15Ab5x9cF78kyXfVoPsjHD7yRD",
  "key24": "22BXb9JLEprSAckT6v9DDM7aHDBUvQET3uoSJY3gHUrUnnr5VocTmBhisAzd81V6uHZtSxH52YvbsVLVVPDL5AQW",
  "key25": "2sMYu4ZyckGFiYwbGCvbQrTUgtztXrn3HeWLT7WoNdG39En1PHb9NXb6ryiA169sVXgb6MArUprRBZgqykWsxEqi",
  "key26": "4qUuYRxVb7DgXKHsc6Hmzco5P1SpJPm2bSzX23SRiSD9Gi4ahdYXWzmJbBA3QtVmQ9HQiABy2hZq2hhLeKDM8PVH",
  "key27": "JN9Wvt6pBsAKBqjhD5TNhjjVgm54JTUDEHKsZZV7mZrfjNmBStRGwkL6hxkKCYsmt24rdvwe6JwrPSLdvi7Sbw1",
  "key28": "2U4oakh81a6h5EgLXf9XwdSXzJDAnrbCNETwRYYfiuwsBYbrveV8bxWXPZETcsD8MUNnAgoKrFYDEYgeYcEF4iNX"
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
