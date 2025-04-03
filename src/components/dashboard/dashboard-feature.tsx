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
    "343VtNbe5pFWHYG7z8qymfbb9xVqn1X418gLnZJiZnWbVVdy6qKDC1fdC9ArNxjFY19JmR5erStKySRWJenYY9NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9sVEAx9ZfMd9JcZ4oLrEdNYdWTJnp2W7BWcnZrr9fZYaHuyNAPUDrVktNwGtc7vxB1Ep4QCQhqJDZjcSNshk5S4",
  "key1": "4CuoYRyP5AGw773zHfyLSESehm7nB4nbvSZyNJaCerP7bFe9SNZemtMqkSpHNQ1t5PFfSUrjhggqJXwynKdHShix",
  "key2": "3sHgqLKKyBFNpbE1Qw9BrA6kap4F3W78AigRmsDL2oVNe2tYG3oUvCZ1ENwjckWaPqs9BxA77bBhEbdvr58cLbNu",
  "key3": "3c57S95EeCSjfjAb4RNkJv8j4RV5FKoi2iLWJhyAwwDrfk842wBAc9cmc969G2TbpTwV7ETgtGbN2GnuRiaE41u3",
  "key4": "6ABF3PLCLjYyTTJQrADXmbiiApRpjYUdJEdaxVHwaN6NAwDJvcsMVpVhWPY2bcNSxjVtNkpQHXhL32F48kD5Scz",
  "key5": "vP1eUst8iZoSayLFmhSdAHuB5nrnbYPcZPGTpuuBx5sHTq2jUWuuDeSa3JJwCFyLfTgQm17ujBnAwAD3kVrpKPq",
  "key6": "53kzi9nDEFixum3e7mHLDUucoHMSEaB6eDhepYJsEMzerfjrXqmfU39ePNt6VLXknuuBuZGw3uzt4iYGESVyo6pu",
  "key7": "2X2afWcN78SdvAG6ymCaqTSHZ9a5ERCTVgU4w1NQ5fBWzyRVXUhPmmu8XHsFQwjP1c2r9pJad97HutLTdeJ9Drjm",
  "key8": "4K7YS7jvqPGX4ZaK2iBGkaRskoGVQ7iZXfhxdc95pZ659teryq88fssc6Bc6jDNaYZ6odsDY8wByUVME9hKQJx1c",
  "key9": "4ZPKA6jKdzu6Kim2KZrgH5wtFErGFi6w9nw1PPkFkVuTxNGGSS3TrVNfbSnFDpk8o8vZ2xSy1qR5zaSJYrjGEm9C",
  "key10": "H2E55DxN3FbLrafrCMenitkcRYQx8DB1QGcNXJQ7dK6qctLMt9mg7WWNXRdgonW7RRu3EzcP6gh1Zc4bWEkGJzL",
  "key11": "279sL5NdEHv7VYKTnKhynvaeLgKremUoba8GFauG5VdpuEkhhg2LrsqimxZr7VwCFBndjpinJYPMsf6YNaNdpwAq",
  "key12": "4A3HfKk9FmQ8RdTZ9NbbLZLNzLst8CNtz7XCyVNdN7LJUEvfDnRTPjodPUMUZezHcEzYR9z8eJLL3ZTYiG4GHvJR",
  "key13": "2ettHv8BQ9RdMxkxw8cp2xvZhrsxwqWneiLmLh2FRqZuK6zUnPc6QfP2LxFj7FcFRn6rg12XrbSDghygVXivdqWB",
  "key14": "2zPqJkVgVMezAUxbxTqYTbLxFyxL8FrL3kxrjXt3Cuer1PzpBEFMomptoBQtm84ih1UUthKFerzSYC99NDMCVKmy",
  "key15": "38EwcFGVMhqCAPWAL6y1iZUn2xf9XyBnjqtGSheNbgtGTv58wc2SP5S1thjuXfXPekG4fJ7ZufsZSh8VSC2zYz2b",
  "key16": "2LnMPKgcu5xy6H6Uhh43Nh6VAdaiXtphtYfCEx2RuiVLZLPo2Ked5b3x3vByH8LkRizE4o6Zojz19opcADnXq8DE",
  "key17": "3sAMazuUMX6dYdSUDBPHbbrNtkkkm8o5n7Vj4z5tDBdYsJqSJ6W5BRwNdvYcTcQP4JRvqGv2Te12uMYKkDskSfYs",
  "key18": "3zd57CcNbVyhqrXefPAQp17DkuZthucb21vDJ1hULYBnw4itXhYZciM81ccJM6mzT3dCo5kqvTf9WDBRbPmAhs5f",
  "key19": "2dcv11DJgP6aj1FjH1EmBmkzGEcnQutb1gaWF4XdVcePb4EsmPJmX83oxZCLHJHu2LfZjkq3d1U1GxcwiiAX2FR6",
  "key20": "fgrrPxG1zwV5vV2oFpaRMGg4ZQyZUiMhWFR5uPeTYbgPvA9NDC6Po6PrVMx9XiEtyF16GwfnwnhewihCPtD8sMY",
  "key21": "2Gn8KiYM6cVYAeyjBgeDK3pHgK9X6d1qjcuLwWBaeMgEYHodbx3p9TVMNyzRkRKHvYdqD3umg3e5ZfUhuue6UuKL",
  "key22": "T9Yf4yAwF7WpMDuVDfyZigpvPF5dwrWEPo3tFJeqrKCg3MD7csoZ25Gpw2xioLWfVF2iBqqsN2DrXThPP3Wtdwn",
  "key23": "5MndLFf9259PFG7RMoFDq4KYYamsRJjd99ig4uSi13Acp96gnmwQNU9fs4eyYU71uJ2BMMRScBF3iRiVN638BiEv",
  "key24": "uhVLJPFR8Hxra9SS9HPBz5pRHXZMipVD7cErdEtYAvbK3XszKbDm5geqnY7zKNXmf7XxJephNPUbiELMtXty1YV",
  "key25": "3VFtbZjYb2bBMPWJ3yC5HGg4x78UHeLvKqocA828271auVKChEChH1Z3AyjLEQTKEVSTQwXvVZHAZuGjjiXeSMk1",
  "key26": "5ELSMQQWTKX39KBisLMDSGY2xCqe9H3PeVdo5wF87HfiZqjQoJah9nyPpDNzJUPdEeYVr3rEtxpSJ7AkW5tZLJMs",
  "key27": "ZQenJXq2q4G3eEvaUHUdZmSQ4zVMSeNexhQW25BHASf2M1JBNrnSb962PJXKNmxnUDWBeudTWK5w655ksvKLwFd",
  "key28": "2AYsFjVpxDRsDqd9k9heik7nyaroxpWurPJtP5p5KaJDaN7i9YqhsotqFGD9wNGhr5WZjb13tgzgiXSogvaBAMcx",
  "key29": "38uSXsrqgzkJBvsqHzcxMJLVFhbpqjQbKemuyhvPywgyADQJ6A917xHFcFV1Mw7sXgddx631Rzc1yUduMSjdLHCJ",
  "key30": "2emiLPxojZ5gPYi5CZntG2Ri2JjhTnzuyso9CawVYAi3qXMtTn4VGKqXCDGU738no7RPHGjYMCLWyoEib9WqzNyv",
  "key31": "2bWHDEwAXwzLYsTDLWXUqiKkBvp3sXc2A8fxD8mBSbLqVQZr8CwnTKVG11u2LWLZZcFjtkLsKYoSdzdBJbvWjRKa",
  "key32": "4h4jUoMV9eMmhvzJDtmwYFP4etFqfvHtncxGLtxZN75YEQRrAhmxcMhtqpLvt2JbVAnifGNJ5jPqbMP9kMMHi3NU",
  "key33": "2rTocgTdKNbLNVDQL4Eqdt2YkzjVe3KebM5Js17ADbGvwu5qMkDd9hsuaJmgnwkUp1Bu1uWnT7cZurShy4SAayg5",
  "key34": "4pmuitLuLiKk31M9Jku5rn2hgns1nRhvZeF8Lj37bwQrgdQi9RiES8ZQgfGDCvDrK8epCiZtuh1Ffajv8ekFqSYW",
  "key35": "2ZNxkNxnwFimKqBL7A5gfBCzfZCNYF2R2nEF2ALppdwcRpVfm79LD1VJT27ecsF8QSpEJ4BtVa81rb2nFXSmHJ6E",
  "key36": "41HuwSbV7QTpzAKW7XRcC2epKffLGMEY4CUVFqrmyriEVKY5yu8d8GJcQhv5MTn2ZDgPfh7G1qF3sSypvGaPntoF",
  "key37": "5xrzV9udR9rGXq97KQntxSKyuvQVnM8PRVnaq6YfGfEuqzRNax49MMcU3mWWUp7U6CWqdfPvuLn6d2a2CexKxnvx",
  "key38": "5PH3aKenpJgvX6kWzVRM5sNqGaMSxH7WVjFS33TsAwo3NTAw7vVMyRriUki69MpfsNXRwQqhSb88LYi7huGeJiRN",
  "key39": "XmUsdNNuk3beknn8CVwcjZHAV2ydFNhQ6KNjnSDJiSGdha1ACyGPcSe6cSGAyeohgKYqqYAKBoDmgJtBMdSqmWS",
  "key40": "5RCPWYyqf88LXTHSpY59NCdtJFhLerJLhPyQRTi21NdHaxyG7BkTLEN3DLxSQgAW8Gp3q2jREhC8mp9xSNCZwviP",
  "key41": "2AWbanutsb85gYhvgTxg39Qze4pqwPyeGGzVzPqyxgSt5DMofQndzdvZgQQ4QfKioDw3PJSfbmDz82ipc8GG9qYf",
  "key42": "4bc3HEPiYys9Fz4h7XZMeyLUaSYwYrKnya7erCGgJENiZVrHWCJH4yJRZ88bGKouyZZgcz2wsgDJkjGwrysz1Djq",
  "key43": "4zL4HEtz6CyTdfgusXXGN4NNxhSXX2xGpFRN2NDVf6HVE5ZdLjNquXWDhDc6ZmdqGw5fgp78ogjstnbugDS8gud3",
  "key44": "5GqyEVUV9vEbRQdVWGzhURRzXFX5mZS3yuJppozfCc1jTmcm5LQm3Es1jBbNDQPy6PvNYgrtjmwp8R1GU27Ca97q",
  "key45": "4pVPi3Rd9JoMxb1bw67U6SV65PUjgaxD27zcyoQazHDYa6cD1L2w6c6hE6mCrA8MShvb2781Qihy9Heh4t7nvVM3"
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
