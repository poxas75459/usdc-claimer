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
    "4QNAXLY98po3a9GhoM5dD3G9mASGJCmNFYsRxjYnPas7kg5L2AUrPCTF6JaNNF465zEJxF3vedP66u8AGCGekK9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCJ7CX9potu3BbHpaFvT4JfZvzjHYrBZsN1efcAjBcubn5ahTxHmPMSNffskkQe82u3ags5fA4ehkjaoDwSvnSH",
  "key1": "2hy29ZARALjR1XhRPykfrNT5RL1xqmaFQR1Mrm9xZQu7nCWRJmaAyFeBczwhxPaoWuzzW3gVDdQzcxbMUpSNTBzT",
  "key2": "644XcFhTkgveCXV6gCLptajTAax5FaZpdaacFdpXW4LrRbE6QNctjk1iuGn9JH2vEx5g3yDZbxEr7ChLTKE1rKoz",
  "key3": "2Pi1CUycscKuV2wCuDT4QDw6uuuaN6uDj4VLHNrFCRTeyjzmCnEreqGCrZxtGjiFw6m4M7L75QBVzoe5F5YkMyXe",
  "key4": "4ftES3zgA4bkZysC14DWhwfyohWx94AhyRx2HJWkLFoU1kRTe114Kr3iyhYQz5b4CswA4WC9sG9DFJwR4YdDn6wA",
  "key5": "3N22517hdeVHaS8EdFzZUaeppQWfLUBoKF7Ff7GmxMdiPibpFGt5hjJ5ofbySLBi2yPx9H7EzT3rM1msk9FDgabD",
  "key6": "4LTRxu7JpCWC3az8NL1FeEzAfhFEVLV1UKohYvojNnfsB3QekC9aw8kw3irbuh1fsPakkUe78o8K9MqCpoTKFd7D",
  "key7": "5U27Qgs4PwbvDtEvA4zN6gG8YzoWJuhECZ82rk65KNZYpnfsdrna9E5earLGAWt6RhfyRS27mBM8XMXbKo2N1G99",
  "key8": "oTcPGyWioRCRUS7AZws3y69meLRFjM72WzW9huXv9nLUdU14ZmKTDHaLmFWTWYrvnGpAAkGJR3bNQ7U9MLtJ2xN",
  "key9": "4ATTXVwcLYTvoAREGyM6C5AFxoVjebnWtUWJkMeZRJHzdYDRVxnWbBuUq1t4G8pyXBuDtUKQhffZNESqXzawsoLx",
  "key10": "Pe1U5vFDPqCwHJL3XX6eN7KHQZFXt1WjRbGm6Xy86USFvPQeihqYvXPEt4bXEfVDhe5ZAdCWhT6SFDWbBAPmGPa",
  "key11": "38B3d1u1vG7AYCmmtjrfZQevhMJ7Mnw5wX2GbCU2eafVkr9E1S2QroXf8XxvEWgs9Gdfvb5aJFBNknV2nuuGHBSr",
  "key12": "2R1VhQ4CFocosqftfbzwQkqFTyHUos8UgKYEvredt6Sxhhuay45Fh5NrKEjz78BDr3Nc5Jr6rFsFsBFGoKmxKakX",
  "key13": "645wKMg3tFRUt3WvU8YZ5La2JTkWMRrht5ZKUMpgU98muDEm11YUsNLxWuqogwkxLsiESoF1sj7z4913cRqjEDkB",
  "key14": "2MGs7WJzEZjFEgwPU3KAbz814h6TnhGCb1qzNVGKbTY3KofnMKUkRcXHTayBQLqwNRMZeniB6KaBaMyVpkWV4VqR",
  "key15": "4jWdJ4X9pvKQn68u7aotxTGHDCUGfDvUuAMN6vR9TFrJN7XsvSvzxdZ1tzY7wiTW2ZvV9Hn9gdbQf8HNivzVhGgR",
  "key16": "2XHR3zJzfnauDHxDM5rB7roTmGixoa94Z89dDpbGc6LWerdyx4cK7jStu2vPk83uc6G2nEyA6rLPypyxAbLEt1nS",
  "key17": "3sFXMDjhpvUcgxTmHVV5EFoNEMkaPsD3kJ326NZ1UbZG1aMDgDUsA9DR5CahPQpH8zopRLVTRpo6MEf9J3uK6JxX",
  "key18": "364ju9TJSRQzsjZsmNDyofn2USsi2PLGBkWVeymbMzTLnZ5nPUaLsEeeYRAfQEu7xeBGroTPLsJgcNhwMGXtRL3f",
  "key19": "5GfPYuVPz5WzT4CsSnAwz5FMvcLFAn3iRNEVTGB3pSjijDVbj2HpMka7dmcDRMchEV4YpeWwPLAswh3XWbwyz8sE",
  "key20": "23W9MnA5BPEpaJeoSM8Z1XraeiuF2ibpS7pNzss75jprRFKr4GYb7NAf2Z3oJbnH1vaMhQv7WMNKdChJoEbE8XZc",
  "key21": "3RXmovkBT6iEB9bRKxk1hn7qqMYBSPrjstqBJkHMzgnQLGLU6JFzH542YXu4PjXPCyD4JPzJFCCe2p5wjye7J1Ge",
  "key22": "4ZgorSUT8ntjfDUUukZPiNmzQsd1BB9u5HQesD6Nuz8ro2wRzX65CMTv97QuHZRfsUm9J7asYKFVBYyxo3tcsMAj",
  "key23": "2cgnaQzg3NmGXmGf2fYbweWTBmbr7dqRLbo1zSCFuSFaGdSJihJwpXgNFNaxX1kgQa9DGePzqiF9KqZsiBqyccTN",
  "key24": "2ZbXyy6Uh3mmdj3RqVd573uLGJQREZtHxXGqUYnWJKYiSTbTyMZ7gmcKNqoMuK3H5VKwedaEZYs86KtXMC2X4m1c",
  "key25": "4gz1WXoRnumR1Yu31fHkniX8G7Um38V5u9gWTpQjfGwVoJUt6VMSKrJHa4xQxSeo67pM1EP8a2jg91N6HvbGh56h",
  "key26": "5JqNZPQphJMUGxKXRQQkkNRwAddZHWAfyG3sArs2B4Kw3DJiZAHE712jdtQydmYn2Y88HopkpiaSGUYGQw6MY2jK",
  "key27": "47ZsK6KyCNAmJEMkHV8aUyRbjRP4HBBFaucMyi5VYQoqCJGHUnEBxohiaDEUQ5gTXyFNRTcDECoVwBbqXXYbX8Ay",
  "key28": "3veD18XjopJtvzigw5Ggb77tD1N2h8PDiZW97zrXFxWhfP8Fgzx8jMSwgQRsB2AfGCVo1VWoKwoan85F6JKTYsQ4",
  "key29": "54QHKFTvXgkLqRPnH5fiKGJAPREJpdUUteEn2adL28FzT6bNrRXqcfBsJ7Phh9CEv8xM7X2uqpEyGSdMcZQtKAsh",
  "key30": "3KaiAeJsCdJVuYKkhzadqg8R2LdUgwLLJSKy6raKjG5eimADwtUSybefMq1mSosHwRw61TR899rdxZafeo1T1mqf",
  "key31": "4w8TXiUs24GjaoyRZaYKrWCkNFfSvfixPsE3qbY1zVMWHYfqbr85dkWEgGhKig5PLV2RpofRvkbLwuKWeNHofqLr",
  "key32": "5ux1YGmXuuwsQCGMcXycrza7fLninYGDJepKjotK6EStzagdY6LcqBA8Shd6rfzAvK2d8AvGqo1zYHHeLKJjEVXu",
  "key33": "MSzm7fb7rdEHvbqiG9w6sYJbu4hp6gMohoxM8GnpfNdwnLyFiaLAFBjqMzyGWjf65D7iEZfKPnXSxiuS4LJos4w",
  "key34": "4ko7tzUrZnNSwb2u12EwVHP4PhTXiuxNy2toQjKe3YUgiNz2hjQvyrnsk2xL7JjtZwyh2YFLi2CfsJaQ9U9AuW2c",
  "key35": "5cLVuayHjC6xbWNSb38aYuncLJKC8MvBUvANNg4p8SsUME26i4aGrqDmc5f16RBzqRHGuM12S8Uv2wPdiZC5F649",
  "key36": "5uY8dg1bTQ3pkAHUs7jfHcsUpZkADD3sduz5ZhPu29GUHoYwRLwb51rpnRwRFi6TmBidN35sALEHWH2abfB4CFT2",
  "key37": "2Egmw4yQquNqZHrUgjKbuFEGAQyeiK7TSCTCiqGny4FPD1NXNETTLUTr1Bb5qKz6e539sdHjjHoYLBLrAYprV88r",
  "key38": "2jPSdU6TxJA7uAhGzbj9v8TfaoMooRU64AgwoYv59eKcjqBKfF5SYtyRgJdRZcLxSGyr3Bd9a5JZiAAUepGw4myi",
  "key39": "R2r1KUk6jLUQU63EtTxzx4NnDQdLbCXNT7R5zPtZwcnCWHJVPC3DxghspoKKYik4m7JYY3c7ub6vLEgjKbVoEuW",
  "key40": "2gBVg1e2wX1YjNjjWXgvAoQkyxVjZq9EZzyZC3G3gqBpyq3K1Nss5kCjNBrfcTqsPkF65jN1xknFkbsQdDuqx6gM",
  "key41": "5QDo9JbqWUndppCpZcWY2xMdCufigxVU787AGa2NsfP6bzM7JQShSw5BaSvBF2iTwav6qKRMM2GvDGmSsfcKoMWr",
  "key42": "3JorWL8fUpFicVfyobq2ZexwUNwhumCpjNqn2EFKZPNGiqt9oYka6uutGLnSrtF7BQ5mbFbfqRpbu9ujsgnaopWm",
  "key43": "4ghRSWcqtnrGjE1roBbUutkVMY84SrAqBFws8DLxiAbziGJFvhJAsct1Cns6rsDuAjozCXTDeaiFomYPWgCBRUgt",
  "key44": "4KH7EePwHQuySp9LqkKa2hr4gXv6rzbUnsjkbSixJDfpHx44LBjTuxGJstiQfrnBupckZtuZBXHcKLroLQ3hPYWN",
  "key45": "52aamL6Edzg5JycGeGrwkAhBWjEXqaVRdZiaJygyR894WSyoxc3chV8LiXqnvX7ZpACKU1xAr7HYn4mFvbthuD52",
  "key46": "43CqF2urQhxWVyxCicrhFofzdoftLtL5UNyijxoQDtM1MsEwEEqu1cbemySXzdLFkRdDy7i7TZyVg96GfSwueytX"
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
