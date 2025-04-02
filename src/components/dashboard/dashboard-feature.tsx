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
    "5EnJPYNSTr92MVCy8FskGvY2Ncm6MJaKMoCGU6QN4MSWDPobvfPQVrj3Ewa9Xo2Y7PdjdaQVaGJCVRXJFV6ToFyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EErhgoRzM6D71vivRHfyr1fPyNFvsE99pnTVEhN8jCfkgK8rDGu5zCEZeaPiZeMLuxrhkJG6hPFa58yGWbeSJKb",
  "key1": "2N5DtVgz8M4sChW3pbG2aRMpdCyxjFuY14UTr7kFmaHJLsNzVrR6Sgv7KFKFpE32K21rGzVe8QbHUBcNkGAk3nst",
  "key2": "5q8U28CLCtTHEL35kTrpP7LNG9tvKDUeHa4SBqALhF2qcNGFkNS9wubxUJarUBjrdrKSyYeVjq6SgxqTNRoL6Usm",
  "key3": "g2eFRJD4FidkJ9iuCy1czn6mZsLFUzi4WdFfUkkCZ3tfyHDmeCNqYz7bq1Qh3yKhDjDumWzm2AJm9JdcEeGz7kz",
  "key4": "2JCzLkKvh8BFFrCM7LLqcACQZ6bJJeUkGoZAdXZmGJ1Yy3pLbgwZtD6g7uoJopoP2m3GMEQReTuWNWxJe9VZpDW7",
  "key5": "5EB4NnyNbF3aQ9CytCdSPVXPPjEbfDj3qvh2CKGUgC4PZhZ6dSiXnx3rNAJvW19rA3msKZSsRPLE97kq3e6UYUHM",
  "key6": "1nk8PciaSVg2CGhgEYfU6kqUCsTnXdsR3Gd97BQuEh9mvirv2qRG3G6X7RUVqJEgaCS16harJH8u3D6VEr5FPrE",
  "key7": "4jE8jZLVHdhm1dUZh2pwAksz9EYqM7LByG23vZptyDTPECBMSb3tRrMvoqVJcFrxHN96GbmBY5Kz2gkk9NfL6u1U",
  "key8": "5em6Dx4JXEQtUeVL1ikot1WZWBXZALawN9oets7dCuo2VSXpknufJB78QyTTySCffjCufi9S2EHMKQEDBo75eTCi",
  "key9": "33LEUmeb9sFHhivpNYQcfVvwCe33frCyc7cvjoSyvU3Svxs91SJ7975J5qAUQushv1dyAVwrZDd5E6iSRHowa8ry",
  "key10": "2srj4nAhqcciDnAm1Kw7cvo8P4pieoLCBjuLqwrWtC4feyNoYBnbnLi1ah3brnJssuhXDwcuZRLaZ24C7b7LxG6f",
  "key11": "55Bi5Xpfo5hZqRshZw5eNX8iN3gXjpYYjrLeSs34voFMtzU1gTUEA5gNQ53pFRskTMKVdHdx3kAygVKrNRysYax1",
  "key12": "3JXR9wvwBCZXqNiRCD2t97FjjDtWo7U375cxaczhmW31JkxGZSKUeXyHr6R2rKT53V4JUsPzrK53A1ioj5KXG3uK",
  "key13": "4UMhU67Z5YiFXCnexJWUTn6ictXBRNdBJh8pw2fo4JR1JHkLFzGEKp3sdmkeB3oLMEfKud5JG8PTK42uxodJgMy5",
  "key14": "2r6zAdEY1FirG6mE7LcwyDhTgRmgJhHCrh6QNmwX5uTHXV9wd8QrnS32zA7vruV5JJfjbP6YqaDKyyH3dqTxFE5Z",
  "key15": "4VFPJc65PfDn4G67mb7Y5DKKtQHE7wGFjVkdp15ysY7vVkmfZ5WQsZEynWizHFEDaNeM7pUEr7vzjrMb5D3Mmg66",
  "key16": "2xEjwYBeCAwM5qPojJ88hsBxTEnpfYyG7MHyhmQ8Qqi97tkLGE7C3mFoexkHRK5opAayhFWmZ6idxJLbmo8TyH3r",
  "key17": "3NvXbVHNKxYRpqp9HNMGQPEFeLEgxFpQFabeajPF6tn4YQaCpqUpPvpC6zo1hD4YqSi6UkaCRVjHGpB3dw4Q38rM",
  "key18": "39w7hyVW1LZ3TiojnxzQStFFWnDs1Z5rz58SGN1YXjYZPJz8PFgRJjGUtyC1c1NasoXBQCuDDSUSZYcNhNMpJMDR",
  "key19": "4RViQzcfscm5z17Wc7PWDuBDo7q63WAus3rsqpe2SPX78Xir6358Z31T5oVt7DpoDtiMci2u57NkCyAwx155B8KT",
  "key20": "r3BjDb2JxERhPJ4hRHZwb84J7ifAPHCZB5TH1fsiA8WB6fzACCLWiKcF8zNyWDPCb2SNVLyFdPpdv9DaWPkmhqK",
  "key21": "2aB1a2L75sDML7Fv7cVSrXZe8g1bndvbSWLBMFMaHKFw2c2dCQQW47s5iBJZjpTQR15KK2GXfPk5sxjF4aDAo3rV",
  "key22": "52odiNp1vG13DgULmKUqi57AByyrXiZZbWnm7Wknt8eXRpyZ8jpGnp2Uc7r5oehRUE6vMEVVJsWHh9a8RfyRTr4S",
  "key23": "2Pyr42SrAojZN4AxCotRPRxfJpVgEJRuG5qsRBuBUJ8kcLp2hNoKuUsnxCsH7XukuAzjqiWGznh935x6cMZfQ7Mk",
  "key24": "48VRbavpd7n4sMjFJjArxMwdcVinnqvr8qGecdsPQUHuFpGGReRtSZ9S3E1KGyrkQNpK4iubCMQ8YXLavaQzSYrA",
  "key25": "2BFtfShrKU39tWAA2u8GKe7fbidR4hMZXTUnmgLBdvfAvkKG3QBQx6CAZZLN49ewdp2Ss1hsE9XX65BnAapCPzcD",
  "key26": "4iEJsS59K5MbPRwDnut85KVPBi7oquknutxdx2oGpWKpa33uAWQx3UrVPuqWufAxxUsG9fXvtT69Aq5EDwAoq1cj",
  "key27": "3daL4ozrKSBh6PQpeX7NuNppgwToMtWKH5NzRa9LzMrMdLU37N4eTi48wszyCimRmNE8WTau2Ubn9bhgA4ajGiN",
  "key28": "3eSEawRBdSjVPCRuofRvoU54YDSoWVYzpUZjtnTzFBaVXCL6vZ7ggLq6AbJRpnbyrQPGvihiNgaeRYcyMEmSPiMi",
  "key29": "2L6vvSrb3hiwnDoXbUkwLNfcpL7QmsrjHgtMFmvzTrxeGc6KkiNk6jNDZeGAUbtVPBmEs5k9Xqup77Lbsu4JaNuG",
  "key30": "2PJSf5mZgn8dzNaMPcFUEdSgyPuLVeuDekcA4NH5RQ1B3oJ6kGRwSxmc9hhx84vHwZoV6jFAUBkGKEJVdeb8QA8M",
  "key31": "4m1RRduYVEGEXPR6zLNFCuFsfADwvTTZ2SeSUqJ7F2i529jCcrEh8bjvAii44FSQgYX151rzfNjm4n3e2CJ25bMP",
  "key32": "35Whb1bLfwZYSV9zGtYtLD7YTU3mBTBi3ZTjbYvYG33aqiuS2wGadyeTuwF5hzoHKLWzzocx6CRtUzFxkTLkohTi",
  "key33": "65t3SjVWV6TDX42efERzJk9rsSJyANyp9ckZSQh7s69TRHG5uj8ZEnm149vsGWALKzg5C618tLQxa9CzmAQ75Tkk",
  "key34": "4y6SKvP79RfxB7VaZPRW9U9HYvmPVXVWfmHY1ove8A1jBq5nVPr6gWQoatWCGpTsqjef8FTUfDJbGV6bN5WQrSiL",
  "key35": "N7aBXJFNDYk7JyJjeMZddy7CKCQHFkM9qa3BuH3g58zEDkZCuubuv2HourWt9uHJJBxd5GxYKfN7E2kAdRQmThW",
  "key36": "3qj1rFW1Rsjt8fyewGR4nKqKHLR861D2EPPyr7aKptPS3aPG9pdTXh8PAu2vqjZzab8CyfZNNHppCCSX2w9qr4si",
  "key37": "58hHDvnM4k852UQ3Nrjrs2FZx1iX14xNXxy7fBJMyZhoyush1WAguutJ3aNwArThGNpzfJqjoP5PVVyhykX5vGk8",
  "key38": "2UScM47Hxb9nVmsTQhFwEjKqkZes693JHRE939bu168CPGvrnMvmLMcZhDtM9jvsqfFotrW8ipbFbrHvZK3HZ6DE",
  "key39": "w5ZG7kBxbQorHKimiPTC4Lkcj8L7T2JTeZ9gTGrFoQDzPek9MiTMBxekj6Tkcegp6L33CaNfJBRNWebgQpBrkAK"
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
