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
    "hixqtGXyGrSDf2fyH7xLBpusvQnaeb4mpYKE3367YVhPjiYnESPpoi7eE8URJmv6xCB1crXZvoEzaEqeJkVgSCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yjqBbbq9vqnp3eBBmzYN2K9d35UXiZpg7FGT4kSjUXcvLVTgEnp7aWoerWf5qGcoCPEZ7y1jSYSqgugnqSZEYHp",
  "key1": "4HnYxzeDJBu3HeXPCtimPeExPCi55u4YYsWrAVhTAR4WiAnBzFCVXUDZALHh1PPnvfSnohrywVCFoijxHEJYn4jv",
  "key2": "NtqeewQhMosmJfB51e5nR2g66UGnybsBt4HUXthf5R7iQppKXQ312cqBUAgVZWu1AZhGk9SRaAw1Y327yLmHAvp",
  "key3": "AakAmXdsfnJQXenTvqHzmXTwfdTYuYysYxG6kUT6NWYkh2ZvLpffFqKSobSb4PYKHNUgtf8s4j7FANynqUMnWkq",
  "key4": "3uGMBLk2tniy8K7DRC5qxadWSezZgcT18aYbpGjsAh9hR3a5xN2scpzuJM81VBpRGztFk65qneacdmfGGMyMK8ee",
  "key5": "d1ahCBL2XDZNSMBrX3VLq3oq5GTPeT7o8dYPQVbBdW7hXeVsffjNMXgKCnKa9B2YQwdw77iraKTiKHAoTNhraWc",
  "key6": "44mRQNZ8o5H3tVoZ9h4VatoKq5quSyNzjbmp76mqdUBAU3rYNfx14kNk89fPS2VXuNDopwmR2B8NKicyx9ntgzXe",
  "key7": "5FwhU4DFZxbQYbKV7kUzQqYrifXYzYTZY9fXKBzU4bemdPG9L9fDMCXNBZpDJZs6z8sZVGLEbTzQVF6BdQV6KiQS",
  "key8": "5iAW1A3FgjE3QA3EX5GoKMncfzustyKo1pdZ8xn2AqeK8GEs2qqXK4pwbZH39ABeeSTvSZNX356qDJMU5wchrPQW",
  "key9": "3uvLXCUR9QLnxHaAjBaUSUMA6WEEwqqGfSsXgCmnoLrshXQXnyvMb2HxHTjMxgN4wDDbMhoPLFkeA4fJtq63XeUJ",
  "key10": "5tWiYtBHv7q5hsiw3PZLZEpnxgtZn1RHtm8KoPyCnCkTP6vHnfYsczShtcQ1gRHBSdGGFWwcZF9amn15vRsN3T3j",
  "key11": "2h2pejBA2m8ij7LXQb4mNMbDAEMJseXaanV1Wv7CVZtAvpKFHjX8awLgAAENXewHYLuh8Swit8y7R73UcExK1nS1",
  "key12": "3cLM8AawvVYvhNVWofTM4otMhmv35q3MAXrwHCVX8sRK9TuT1pEWynWwcP9pKiARmDBJqexVgQzDNzCZgisLcLnH",
  "key13": "2KSxK56xtRah5XbWx5XGuiE9c92qT21uzEU5bxKxiF2CtbDC5NPqWXf9Su2wEBiqJyD8u7w9qFbWjpenkVUdLUS6",
  "key14": "45o3G3ym2fegmJ6QtUyUnWXTn3AZPrP1DTUF2FVMFf7wTrDUEfH7We3ax61P1dmR5n4mykcVbarSNv9SpPk8kArT",
  "key15": "36WqtFsTe6d3RRNhzHmPESC59iDRzADRgGinNpQBRFxVrYQH89R1N55U6xoCTXYCbAi5HUnSZhDbqBpEVLZA5nWT",
  "key16": "3QQHqwVW7dyCq8y9xGBRDsbMceqYs9dEFb6Lc3ghhjJ415zxUftmwMgYxtxM23VNrixtfKPRBkY6c121WWHsW88V",
  "key17": "aq9P9KcZxZp3fCc25oQgVE22HTCdtZetpL16Qfsffp9F5wqRfR4QSrM2oj3xqS5B7eriXNUWbCURytXyYycXf6E",
  "key18": "4p1rZJDZ29MD5nW6MUTjWZhWWgWsMdw8qPycZys3oc5wVVYBcpe2yWBCS5hsg2WYMDFmFVJm2hKjimFuyfVHcwoK",
  "key19": "2AvANoamSEun2Km2724m4rW4LpjuvPtf8BKX4CGYTdiMPLjPKzjMVNsWY46Lep4kgTRgnmiJyY338NmyXyLb7ckb",
  "key20": "4BiCeVCitW3Xaf7U42swzJxMARrway6uZZRXEJLoUEuL9GnxYKV1BsEVTNUwheyfrnkdG8X1GiLLgtTfXNXZTj98",
  "key21": "2RVubZkucYycVkvc6WeiNosvqvrRNXxNyJG1WAYspMPCeDizSLrxyRQJPe8tsmcuWfxoqXUVWRiwmzKeFhKafs3k",
  "key22": "JKy3F9b2RjrXYbq5NWJYQyzif9PUpzLXuDBtj37fCRYAZQfeGmi4S1tSSfQbKSd6zC7baW2v9ygNwHzwK1TGapx",
  "key23": "BrHEnKWZwWYLgEtUasuMVgGSgJGyG9d6VTPWfyFEYmV43Jc46TvP8w7pSiLhYxUrc6mT6mgxtvZccTDCvhZXDAN",
  "key24": "Ex2PWRtD2qTYUCVdTcCnqAivUcCLDanBi221sinp4XGriarHciJfQpaHXoJ9Xi11xSEf4VL9b9WtJHbSGzxH1rb",
  "key25": "5fcSmGMqeLYwGacWQaoCBPTHi539NUV3T8yiPqQFpgNMZy41kWVyK4VoKFFmpfv6nJNzAqKXKWDBfeHMouhxazXc",
  "key26": "2grtKPnZ6WUBnMuWY9GxdvpwZ1RYbQ9P4GVP3gfTwaCm9byk8xzwLivjNxxA8MctQgUF8snKQgVxbB9hv69U1EFW",
  "key27": "5DTNo8sDtFnhZPdgPWhZnGUQPq3sWeY137CLvmZmpkahzPd7QGpUuxepYwRdnGKtCsPgbcTVjb3GHhGCrqKKCj4a",
  "key28": "7eCJYSxAJWJcW3jcT9CxCiNXn3po4Q7qJiTkKzWBB2oyFWJP6GH3rR7Tk6pNXHLu9AbWfJzRhkRJkS622UPwZrD",
  "key29": "3cH6ujuqSyej2s3txs2673t7Bz7zKtu2tkWUCQpUBYiCA9GmArasFg1LC49VyY9GrzUYYNCEkeQTi7xZpKZa4q9g",
  "key30": "5D3fMKpyfES2NQqJfkKivhVL2a6xcWFL57zjFZYn8SHeLwb7NqHePGthT2TUZMPpBvqrdSQW4PwXMr1FGSneVoY5",
  "key31": "5zPhmfSj9toxjfdAToUbUHiLXFrCgEixLZbGeK4uMBbVeydTeo1AicyBM3rgnC9sWs5E9So2b3jrpCoqsWmLEcYu",
  "key32": "2wixqzNJngzCJweErikjCmPAJUZ17qBEKTsYwBvA4zEkuJXJ2frub8ZSL2zvD8GT5oBq4rRqgAFqwWcNyCpfcE9W",
  "key33": "4pea91UMWHatv5rtXkmJjUqsjCpELGz79bA1RiZz2qW4UUtCMp16pmhX2wT7F3EPtqDeVk7mG2zYfEnZWYY2yEfo",
  "key34": "4D2kGXsfw8VWFNEKgHZBkd3Zq6wg3BS5up6FGbJr9JyXcHW4JPLNGdi2DuTsesCYG477AeHkTJkMFd95q13GvPUJ",
  "key35": "EKd6WkuU2tTMTytLzMJuM9iGXnAG8qYK2QqoZAp2ezKtvbFebrfDCnMvxueY5bxq8CcpzDrypv1X5HKLVzDA4Vg",
  "key36": "3GzE8sk7jmnAGZ7YYcGQauzkFo1CtdRRzUeQ3D4ujRfomfRc1HaHhVLFGf7uN3ftbih7A5vRKngxGpVU9UwNTrUS",
  "key37": "5PudK5GzJ1PafDMoNx9R7USDdwtSSASnUHzjsprsGRiyL8j4XsSyjhzrMsaktQvnygaQqsfYmQFkcUfKTD4eWpFE",
  "key38": "zpU7fAD7a9zu48UnEnfxvVQu6eNRGHa9B1HqiDxWFh4wMRP6Gox8V3bNA7wQSons1kACW8gHJYuswLLtSZS6wgi",
  "key39": "2iZHxiam7SEL28TFHknRbRQ5YrPr7yVptcvMbntACz6RN3mWCVu1k1DcG8ngiTcXb6XKX73zhDF4uwPUdeEdCNgD",
  "key40": "48UGSj6X59wVmHvSjZsZ2MCbepEcZnGcys2L1NhpR3fJciHZ4StYayDzzyCf1Musqprb7ifNE4FFpDF3bX9pYH5s",
  "key41": "2aeBrUx9sfQkY4ALoUtcbgYU6U2t7cDocdAjndMS42fp8Amh1iSof5Z66HHSBiUuCxU3J1UKGjszAr4Zrb6ajMXh",
  "key42": "3CsePKpBMSWnc5jc3Hn6tdZ3kgi5jCr5fiuqXMXew2NG4V27w4rUgNKHoLqFrUf8u9oz3rG1bdvc26hdrRPR4pMG",
  "key43": "3HBmiLsSwWmUvu5L3dgsL9GAkJDE21Ekf2jKvahaifwojcpXMTegxDTxsD4KEQ4PeWhtW9kaa1CF2WdQ8kUbmczN",
  "key44": "SWCkgTDXD6FKb3gvG1bzMGJVF7HBn8vgyBvNHuQMMZXSHEm78V76hh7dvKpjAuEHkZ43wdTHnoNvXrET44fMDsC",
  "key45": "E4DCh2qx6bWW8GZewfBzLPpSbCgVz12NgeQk4LX5x9GBqWFeVJdTMvFSf1xDsixH8xrFthBteV5vyXFv8sQHD5d",
  "key46": "GtjYELtCrUQx5HWfYiNjQmzuc5XSThLjU6ugMUUDtSVxVGsR4x4pqtEzBZAhD8KbCNHLyT32sDn1mE3YqGocqfR",
  "key47": "2CVeMqdXGkyWSX4WURayqGzLxHfN9EnUgFvoM71VkEBYo6G39uG82u6gPk8tQEsq4CaAP5Kw4HQTwq8CBVVDGPRL"
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
