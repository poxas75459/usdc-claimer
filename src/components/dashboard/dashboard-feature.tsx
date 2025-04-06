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
    "3qsu4W5D7RXDRGPKx6g2DSn9gKuKD6qiM1kmJWveDULXU3WceDbuje6isYWVEnuw97iLSN1vfMAfGAMRU1rJDBeX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uV68FxqHuWj8c8jdSmbikjSbncrfKuQ3J7EzXRoBBsANc6SNLXvtvEJMEKW4joph7wLrqgg7bdXp7ShN8LgshDb",
  "key1": "4VzrTajL14GVrr4itrC4VBEiSgQMxhqSNmntQmSCiG2rMuMTmYfjHR3nxS6FzrSJePSe93eP3CkKKZHrxAFwpbP7",
  "key2": "2x5mBj7jMjawbpgqfBC1oH5P6dgbiQ3yXZJsaDF1r53kr7BJZde5zN4nXXc1Ba5ZWcrK7vuP4sstaJVv18wzugL8",
  "key3": "3DahBhcpVxq6jNpJw6VDPLeicZ4ptZgJnzuTQMqJv5PLZEo7tUX8ySxeKeCYPo72mHwP9RFHEA8zkR94pwXkAvmb",
  "key4": "5kGiUid2VorcGA7MsyMgsrMgQgsdUEcGPYc57CgGkwQm4cu3rjVUfL7hBCSgAHGRzu7ZMAUD8uugLBm7RYXtStBW",
  "key5": "4tJHDaEte5R39QZSZVutp8LCY8779efZXCV2S1pNNdHQjdy4dw5QY3M9LFUjrPyWT8dP21CoyxWHacRQ4L3tK5DB",
  "key6": "qQHVhujBko8Dp52siWpY57SWxSmAgvMFwiGtuDg1dGRRjD76w17quLfgMuPAtqH9cuYNmMkGmdVmdz5QXBamapz",
  "key7": "24CwLMujwiQeM7kbbQL51BdkRVkkWPTf6MaAbUBDb1jtKEuAtSz9HRhFdhEievnPePgHAvU5qxNQTXyhWQCgLKty",
  "key8": "5KhQbEbyN2cV4Lqs4Q5T1vqUPq7GzHS1vfwuBefuZz9uKxLVfSG9gu5kZFg4giZ5SMNM84Zfcsc9TwX8pef3jTco",
  "key9": "2DTiV9pJdfbpdjRgQEfE84GY8d8utDDn6J3ZkwFaVJ7HW5dM7y5UBDpGKfXUHTTtsdpqXuXV3BoHGkcodHhPScia",
  "key10": "2rco8E1qbVb4yRR1ns6i9U8iAXjfk6qK92bXfV8uyogCeeWmCgiJagTn33bR4TG7s6nUSTmjBbDdnvma272Cdaaa",
  "key11": "3eKtwGtGidV549JTfnH9t4VhovqyTdEBaZXmjS2PVqXy3G5nLpBscaVt7J3W7CXLimzhbwhdiSKNxy8Gz2wMZtNZ",
  "key12": "65rJVCpWzeEqLiMM7YZE7rmVW43evsemqxys3VWsRsC5aDcuJqGh4YGxs37JJTQV4oe7aUBaSwC9MhVtjKGimatF",
  "key13": "4R16dWxVDG4MJAKN87cABVyo99XogDMbxKdgsQL21ADzEDhLu2h7JFQNXiJ29ZMBxos4W3rBKN9UxhgYDnkQ3JRf",
  "key14": "4ovrSNQ55kQXyRxJNnqybBvcY1ct7axcWjr1KooGPvMXhvAKU8QApyhBfBpdVNUnX8ipLQUK7cevXNFMooZCWVvx",
  "key15": "5g6mcwGoJP5aFEzXJjXhMXUwc4bJh7zKbgxh3q3Mj5Y2QcJ42XXBZSLQFiCaJKGnJzqszb8rR7NJEBFeGTwT2kHT",
  "key16": "2HCB3KZBKVDFGMSZnFAJGpixQZJkbTV9hT6nNwQ1Szh9a9zUzx6FnCBC8yaynmE8LugsoQXjgsCmeCEn7NPk1Dm2",
  "key17": "4XCZ6zuJNYdPGQQN86DAWTjMWZzipxWwD77w1y11jqyDqCNi69ieYPMZGnTe7UWVHsKFSooyaxVcxgeeDtqRPY9x",
  "key18": "5QgdqZvReMMiPGuQ9zB3DvWPAJfenkAahhzdfF2qX2e3wCs3zEMPpyMUssMfT8cFn7PGYwC3Nd4TTFuQnzkRT8Bv",
  "key19": "64rDL4EkXZv8r3nMTcwrRs9efem17gUoLAv2mMkPLmf7kKXGFFMVtdDG14K42krYemLU5zUVx8tqSKih77juaAU5",
  "key20": "62GS9d2uokwuTGquHExCCLo7viFAC3jht4kfKMN38UYCaNHt2ffeGWTiBUrbHWmvrnFS7DPqtFWRHnTDbPYTN3iD",
  "key21": "2YCkzHFJMRUCkFuN2n6wD1XkenYWnrAeHXqS9qZ9qt8VRKXeR8aTE7mBGEnvH5gQKntfZvfWaKiVNBMFzdPpARCU",
  "key22": "5DRJDhsDgo5XYVHcP2XeUsUKrfW1txyVc4DfHzPdUSKmYy1rJWzmGS4SprSp4w1G2R7LJmTKoBKbLH55EXYNsuXK",
  "key23": "5W1Wb9QjiPNP2pAEYCLXWQmzWK5De5hGaagTmWLjXCtrFrTAz5s7ebrrnGAGtXzT2pYoyn1gdVNphXZBU7BH16bF",
  "key24": "4Jrt6xVZSKeKqJeH2BEHHF5KfLrzVhhUGKEnWWTu2v87HRZidv4gsbmr5oCDSG3fPGYj9fVFA4uddAJWakCgGXhn",
  "key25": "3GomrQK5ML7ZDzucqmtBppD71tuwXL3GSBGbuu57gsWWD6wx8NAw67eQdNX3Ey2eVWuf6cQSFqNpoJzuRYeyABuW",
  "key26": "5Nhb2CRooDofuxkA6zcwpDUNdPKPJBzaGir2oSk9V2JayKXt1UMcE495pENbzjuE4JGhdhWsuZxKRp1poxxT7PZh",
  "key27": "4DpDXMNGXmQQxgbsTb84ymgMasi6W1Y9p5L4jb2AbUaqs5e9CcspX1ZKikZQGrxkruXsFb5jnj37DubKWatUmfwj",
  "key28": "45oSdq1ssnfpdDpsS3CJfmDKQeNeG4wB6zHShhzfrcV121Kbbjo5cTECW7RWz4UPQRvV8tyYC9XhvLkFPP2hHVBG",
  "key29": "hJBZ4MZWsVZEkxc2tX8FKe6akdQWDJCa8VziCj78n1hHiJCgcvwe1wvYQ5xS2qdu84tF3iAdnxRyUrnPGAwrzbh",
  "key30": "2GDfzn2UzyJ1fntXsus5iKkbzPgBYKHjExLytcev9CzMeELErZCzT1ub7KSbFxon7Wmn4EUsQ3aajmNPHQrdces7",
  "key31": "x6hVyPJvLGJmQUf66NpmtSHG42KZg7DrYQMquT7f8qFCzcejpYPpsh3UgnYpyedSVTZTPox6vuskpYnDYGqyBqa",
  "key32": "Lnc6nqA2jv6YfRsNZxoe5sRthpf2kK5PRzU2Qy6yHDD9JaTgXqiFDTfaFJkNBpPziMacD2U9y4YAcfsQUcJBsmb",
  "key33": "4N91ySD6Yxh1fJjpi9QuDgmWFgqa1jpcnDaVxV9PoUYp87mppYnZJb4N9TwbBRFFH9uXEJYX4aboaM9woL1kvEiB",
  "key34": "zwVBaDcbJt2eKwxzrqzNX3mSpJW9WMGtCUYqmNaCFcDZnbSehiHcigzshNMttnw4DC1STS1HaXcmiXDCheopS76",
  "key35": "3AutfPfHKLY2mcMJ2211NFuWjHACccvL4msHmoGtsDvzRj6YVXeiVivimoSoecgjy8pvRmapbBoFVV33jhBXqtVH",
  "key36": "32cEYE1cmt1EGkLYYDdToYN7wGRwsFoETVTwqQskwAUQRRCbGqs8A4jW9W4E6GruqVJkAbjWSo789yxoo4XMRn4X",
  "key37": "vsnnUD2ZEC4tqQKBZdGQU2Az2GiHNKsw83MQekvFaciNY2a7eEBiGajsfEdVjRhWbVYvngRk7RcYQ8EbwX5XxpK",
  "key38": "29PsghNDWdoVXuDmeqiLmR3QNQgB3PbcQD1F2cfCyYHqGLMoGYJnJb6GJU31nG3Ptkk77GbsjvNzAWsc23XhPNnv",
  "key39": "3fP87hWXX13qr5MDAch6qmRm7tvUMHMo1R7uHndZ6trbEgPYb64BFxqpK6CwKATTiPRJy4YMA1dgxaet5XPFyE2d",
  "key40": "5kGkZfQanyi6BSAhMPX1oEzjLnwsaZsqCixtsDn2gJiSXSdGes4LtBKSjKZ1XC4uaWoCuxRpp3USCLmkzWnB9p9Q",
  "key41": "5qTPvF42fT8S15Lqw2PLmGK4PCMjUSQVsQ3DTh4tcYX9nmXySuoh2KThNH83uY69EWJow5RNWDmPcwYabvqRgJuC",
  "key42": "59S6cywnDpxBo3zvgiQ9XBtHH53ymjYRdNSSrt2pfhptbGqqfsVriczWqF3QWWpvWZrakDYGAxhoMnkw7iabGPyS",
  "key43": "Sx4TaDS1LuBxViXoNLiWPnEZbL3yiZfSrDCmsds64zZLX4aoH5VENa8Z3dGD5uXUUknxg1bd7CXu3StJCDBwNg7",
  "key44": "3YtHN2eDRmGKupqMAoboobAodg2NG814kyGPnNZUZChAUGkw3J1Qn54ztREf4c8BTwhsUwMMDb1Q24BfSLr7NgqW",
  "key45": "JthXEZDW8ALPfQ7NXhaV4suQjtNQFzbYKz4nE33NAd5jo4qJM1rLjkQwyV4k9oJTjAVDF8EJErguDXDEceYjucs",
  "key46": "YK7ghZ41mCmi9cTS5BhVNhYTcg54YmWYyxs2AhVf67LQ4xDDNjNGJPQjmBgktYgcjazozVrSCsbfMx9nRVWm1Kh",
  "key47": "5CLP2QqahLAHnkCCNVMxQzB48K9UeFVXRyonHmvxG8MiMzf4oX8Mc9xiNXUuY1QwL3KLjnbgeRY4iCjEsQeGHNGH",
  "key48": "5cwgfB3zSkJGchiwZdQWknWQXezYpo4B4pv7uedkuxYvLrzAA5r6wZSLrffQeZagEstLxvVwqpnzvUkZrgcjhhVz",
  "key49": "2sk7NXAUuxbArxryh7PQXdQv6brrKeiU8XAgRXoSVS46itCs5YXxXdcbLdSks4Ezuir4eSBJzwHutRMFziRu8mek"
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
