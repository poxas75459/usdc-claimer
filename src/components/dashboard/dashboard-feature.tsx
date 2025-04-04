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
    "34TrF15BS6h9g2pHpbsP995PguJyC36tM5aJejYNQqQqmxxGt4Hky2mVvBChwzPqra7enmf2UJgGzQhDu6uhTr4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UJMUDtxTSTZdVzBqdtpGjwucuunVFaasrGgjDVgqmvAnDvGfA3y42h3kP3GXefsYTZo2sFaPVgL2m4ruyJdVP6Y",
  "key1": "2o49zWthi73KdZKaHwxHAM2vcC6gsSWxhP4RN4HbyHPgVPVWvnydSWc9C7LoWAqVuttFQdYNdeAfVCNgprdzUA9a",
  "key2": "4yoW3GxVGsNrcXTxAfstqeAZcet13dtZdSoU22icrBg5MPYabHDgGfE3h8k3rKZEEfnX7GmGM9mxFbioyDmZkrpN",
  "key3": "5kDih6zfWkKX5SKdKyHAgjZ9TLx1cw3qMy3qbQTP7h6LVui6N1ZGpUs8rEvatKQjVq35LUBWvKhhQHxw78GGg82w",
  "key4": "4NYtNENFmMm45szBvbErRpjNUbrEXknp5UjmQFQsrfurCRkdd2QVMRPYeyruzBWwqSmbkx43MohUjktw4LxKjAFP",
  "key5": "dpwqscY8pZySugCqxXneYuugifFrXqvQFrBdSfmWuJS516s8U9ZD8KDBZbZ9BuXGwvzYxQNie3rupY1ssUbxM9d",
  "key6": "5AEMZiyRwdQYy8STJSwN87o6nMFyykvxboihtm5ocnvXhB6kvaNKjZRVeGnJhDQ9iwan5vyjBycn9S57rwMmSBx5",
  "key7": "4iomcA9X5o8m5ttWVR2doCQJBsJ5mCCakRiTP4EXHgUBhVi2kmzuP6YeJwMFH81fFvVK5sh3q96Jt7VHtrwAoSMn",
  "key8": "3yt4AcJssPMYaneTbSzKtmt9GKZSnVE4r85qYreX4yaCE4EMjC4FExNFZamVkYFXeAv2gooujMgJMSDkxaiYW3SD",
  "key9": "5C1kLxzbJwnV6qeQcs7w3vBDobQJnqRGcvEN1m4G2fcXPof6vTsvnkv8cmTFxHe1654pFLeVMDi3GhPzcEfTCq8M",
  "key10": "4AxQQ4vFXind9gh2jRdEh5atyabmyFDBbP1s4Cgw2tRdBnciNYPdZrFhWECqdrnT5GGVALxCHMxmyECKJXuk6dKM",
  "key11": "5Gwj33bwR1pn1bUbehN6od4htw2qH3ZjBP7obnkiMrepqri63y669iTmmf3zoxPLZCNUyfDr7iEboQCU6HZAdFaZ",
  "key12": "4Ne2VZNLCBF5XUgvPE26HTv727iNKgNf15Zbkw8myg37DbZAABTYpCajaGB237gjCqZLzvddMSzZgVhiHjNzipj3",
  "key13": "3C2RLy6uYxNP17w3Vkt2VHGnvm431vwA3dFGpivkHN6SBeYYaSo7rR3AVo4SkFKk1rzB8XQeMmi8QHduUVeWPVn1",
  "key14": "5FHLBZvkiw2Y4xeKWM9H2htC6idAnNwuFGbZqgtXzEc8ymUemVfW4rEHgVw7dSK7SmWdomdfaBHotQLuvvRrSchq",
  "key15": "56Lbh4EqquUW1JyFWystStsT4xUqGU6BHnbhXQu1mqK7nR7SMWm8UAndwTEPFEBsxRjAFR97TzAy8Ls5Rp4wX5jc",
  "key16": "HPmP8NAnZhjmZKko9RHc6WhZESNdWWJuJJQ4wx7G9eM1i9gmUePU2yn7BJ5xSnfZG28dZuzFGxioCCmdeebEHFj",
  "key17": "2Z9U4gR1L9FAjH8hYagyZ2fckiXdYndKwhf1d7iA1wixpoYidc9FMun1Pmo29HBKR6YxvDXS7VZAoGoXozyG687j",
  "key18": "3wbVRsMJkzupcKE8iY69scAyq4xuaCFSAoCZwukAmSyr7M6nfZjezP6SuRNbYP4w1KGt5UTzypC1onvSZFDCDBDg",
  "key19": "4YjrF6VwgboP2ojm4VfwvBwS57KnA8zkSAHsuVD8k45QfJZWaRZqacqyXFivWBKTbcHDZinCJLuT8JMPuthB9Ddt",
  "key20": "tCgafqkk1j82NYcfbFkqaYB2ioQbDoRdMYWh9cbpFqCZKNMNTCKtUJVg3tr6JwQsW6FBiN2aiw4P1J8t3Vm4tCz",
  "key21": "4AyBBcbs4UbBC214fJmfgEBi4MwZgiR2Z9oN4LC9TengH6YtoatWVbP2NFDguNGsmJdEfU6EdRvwEeBWQf8c9R5B",
  "key22": "5ZG8eZQQ9hpgqP171B8RtJEMb8V6JRjx3Fn5swxBfV1DbXQz9KGMpyxzdWCXYVtMQ85bGismYv6YHUzJdcJVhbMm",
  "key23": "Vy71uUsMRtBe4Dz4gCqkXJUwufbzq4Gq2SSAWNAC8dPxrw1vyszQcjnuKUWzQnBwwko15YZVvhRxAg9DDfjeMzW",
  "key24": "5k98maz8UiQsg4LSBEGQ1mhzP5MekytPj1aiXc2dNBQHTe4dXkAXYWTyoUTDMkMPXHdanHFyr1sb4jprFqGoevq2",
  "key25": "m6cvRVZEyna6v4bYtZZmj2P2MH5z1ddGRrYg7t6hUvPrMhZWYtZdSG71RTG18ixUNkTcurEAcEdzr33a5H2c8hG",
  "key26": "4kHPhgY7s1eUPUZg74eZ4XMGxmtY6ctBo3u2nurm6gpPAyjZZtJCHcgCcUL6ZcN9RepmcEJNpJNATMVno3HLTPcJ",
  "key27": "5QTeZApqBB7Dusx7gmK1gGqkm3jA4xAwp63xoyuwxSP1YJ4tBeQrBE3GQaRVudfZg48ahXpQcnQ38ipgkSN4sSLU",
  "key28": "5HXd8gR7Ft7g4jTU58hkejDtP9yMT9oBfguepSumvhU1YXGsY7jNjumgib4XWANZeabbQFF8QTBwYbGLHmigAFa8",
  "key29": "2Tb6fS1C3Aga8jQLPYYhxMkKJeiu1jcXANtnf1UopgEunLKNdH7gvCyqeLYHgvTARBv82D16JJHKxmQtKiAVSQsQ",
  "key30": "5uCGYkAWqy1A9QLSyCnvrqyiX1DQ7HZzJU1W74Rb7YZnV59CfpQqHy7tSydqSSxzxQxrmt5oTZRZNowoCf1VutnU",
  "key31": "io8pZYzyY6WdWf6HAErkTE3dPeMhSTMfmMRcMmaJkhCPNroAK3fNtrhYamn2XGf84dRoMe9HXsyvxXDr3TM6HeA",
  "key32": "5YTgiY4txGDVfN8oY7pWtBYoN8fyBRBEWSzc2oUvKH9dUzQEnNFdUr5oyWacdS4NqZWChwTqShYSPuZ4vbZ3DRr4",
  "key33": "5BZefpFGKc35WFFUJ8rLGUYMyLEkMheLYbbDb5HdJoyDo3DNDyfC2VFVcfUrZ3YfFGhCsiRh1fo2V2VgLMjYtrC3",
  "key34": "4sRHiiqp9CvXPskwPtVMx4ykyoftXK3c3Pyo22tfk2vJ95nWqQRyTybhuK6PudTs6LSWS25v61N4Fdvydo93xNpj",
  "key35": "3DYjGUSeTowPJux9EAmCeC1G81J89LX4NsQkje51MSAZjwT2AeyeMhtUgc51XfM1hH7mmSL9yxCPbc4NNMAfSxsL",
  "key36": "31pebyDLyBn7iuNokXbJMUEU664rncGjmuaSNaN2fqK8zkjWYa3codvBadp4mjoKi33FB4foCq29Yj53Z1UbZ1pn",
  "key37": "4QNhWBRexhvnoeHstC47tguAmy2q5op8opwaEDoVmvLDLgk7a43crKqpuuehfy1crYudUD4SeEuuEsz6Sm3UHPUm",
  "key38": "5qfdynwPas5mfUpefk15B18SejmcKpMbZe8VWcKcv2RAVxptxWjnP5Qz3hrdhqy3zQM5aJPh95a8wNgKUjx6zsK3",
  "key39": "5x7FYHWDjGpNezxn2BNaMoG4ipDwWtynyPjdiu2uu9xWtSrhcaFCb5ERftGELhzJzQsn7Qo3T7ev8TGBN15faC6v",
  "key40": "C8XqCsFddFRavwNX1VJx51SgCirCJnnMfnD3Y2xP1VHwJsTFMJWfKBtKPPL1q6c7AfZnb6MPjLnjeMeBsktQJ3x",
  "key41": "dRJQx4PRXWSUcg9awXTCyo6mpvHjqdFSYmdJDKPTHimYX52JUTfj4xX1LMQ4DKGwkD4aLWkWeCBHiRTHsbmt1Zh",
  "key42": "5TYR7PB5tq9SpJ5rQyAskefcxSCcAub4BU9qiGA3ZPQNHDwFMQ5eMGaM9oaFsnAt9mjFKH3HEg8FsaocxCDXbkQq",
  "key43": "3fnoND6izmRDcSTT15tCiXgiRyqCmDKmKsxnNQPvtwAVctHpCr7ZkVuoShqCWkng3JFasKmrpJVQMvFJSpwffVtS",
  "key44": "nZTZWRyxww95HussPrnteJTDLp8yb7iEH8gbigS8cHSfDcmb5UzV4yQEa1EnbsGpoaM81j87pjPVSwsr5GpjcCb",
  "key45": "5YTiRRz75LQBQmG9hJQdfEZWsLss6KS82bPNhw6ZUvmKQrFtj7SpL974Uqkigq3oumWE8Tb2RLR1u31Ebf6PtcUN"
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
