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
    "gca8rTDgMeMma5ESXCGCuEWE3xGvvgX6HJY24raPZNeKdxjY3bYwoVxNQpWjc6BjbyreDA3wCmNx1frH5x3xs4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Nj1VzVwBcusavKMgWCtv8vniMiAYzPLNnWpx3qt2avuPJW85dtkZU7WpSijWCiBHhLuEP9hJBm9DJeRyykqAfT",
  "key1": "4H9RZ2ziNZMi4j9bng9n23Bgiq6XoUgazp2AHFSz3kUnp6P32L5YrLYYqy9VVVEmYnxyvTejusEVftFRAbHrsenX",
  "key2": "GVLcpq6Yxd8tirACL6oqd1PKHB8ANwJt3j6VZqmex1cFNo44gKLJhecXk2ZoGB5DnXARcbs2rY3WML5M5n3VXJZ",
  "key3": "5Bm3rupSFpjUfqviRXprRnUgTroiZGLVG8Hk4TLMYCT5JrWyPzxkcjXjahcAukF76fYMetKiYCLtBQusXqzz8mYP",
  "key4": "247mm5kjTE9Myf7QcvVTyFsD3bBufVgzH4FBPeVBVE3MvR4MwXiPF3L4e81hS9Yb52yXFHQTaWLKyS1s2ZzxQtyt",
  "key5": "27gW1AJyZ8c1oW4ESc73u7PZzuxWdhxEgH5giiENizuYyQr7y7z6DTsGjq96bzjrWCadVCGhqb5Jib73jnSzrntj",
  "key6": "5w9hVvRaGcGqMDBRg9c1Gnp4fqeuYpHdg2GNRnjhtpBNajoFNvCasELDZsFeiMtj7YDPDr4wuZwiM2ixe4eoP6H8",
  "key7": "57wh37iaHLDfi7Xndcx9giBxh4NQN1JzJmRC7FvQkbtwNbpzEQ7f9vPZCpdrsrEsj9w7oqfu7N9CvAicps1Z6oj2",
  "key8": "3YFbk7ciMrqiRrjrY4D79b7SE1u3oWfRBUHJnYi3LmYpLNbKKQ3EHiiJW9zCRqqQXySyyTBZewW4Q1FJZKWpK2d8",
  "key9": "4eRKU2e1DL3CNa32eCmwZFRPpp1SssCZY3StqUXvgYJJcgnFfC4JhPpUD6zCY5eiDh7y6ito6ANQ3Z6MhEa2DPV9",
  "key10": "dfW4u7LQ2P669R2RNptMXpEN8KtW8PPoBtxYwzMJ33iJoCEA8LWWt72zm5xvsPX6jtMpCVDkGGrfRom6dy1ShSm",
  "key11": "4fy3yRdyDkfJT9jLW9Wm8NrjagZJ87zo9a3PtfjJfvxGtAhMbuDu1Dvb5KxHU5gSNLHcrTvtQ5s9deoNDiF8K4ek",
  "key12": "4cv56av9tPz1C2xiXEP4Q5eEKDjGkct1PpF3gSHFrVzBV8yH9UAV7V9wQ1LBdmdJ7MqRYvTCrwzss1x8AMs4Zv7b",
  "key13": "4bSi6UervbL7QMWywesHMtBEMY55uGVoa4PFF17sXrzGUYA1T5BiAma85pDWWBxoUFHDQQjEWmfzo8gXouUDi1i3",
  "key14": "5MBjME6xF8afBjBJrgsSeyqpAaz4fVswPNuHYTw1BbEWMunQ1CenjjZRC2N2moBJgYPQBbASreQtNi3MdJMRETKx",
  "key15": "3qhTqbjsScTw6Ci6GHqWGC8ZphwoiUUYFvufGkhuMKBrMyYUdKwK36wA1fdFtybnk9TrVeAynec121PLMxN4oaYD",
  "key16": "kqpTSTuv2K4XkJw7vyeB73UaympsGh13Jn4i6EP9i3c2DjjqTcU8mAnMTCcsqtr3DMCW9yfNDyaF6hTbGuGSKXx",
  "key17": "5aqrbWiguKb59teSm3B8Vep8yFWH9EdRYSdNbF5RvPYppmpyoobk8Tobcv7Q4gDCBzz7rVPgJSjESHftX5KFRexw",
  "key18": "4NpqmzAzEtxUoRxMHy6ShH5ngkzBPxSrePKSrFaGXZY7yPAZQwuQFzxj4pFGdQq1hQTsRXFE9ozQKm3A9aBn8suo",
  "key19": "66EeMxwfYMDyHismHQcwEVeaNZAs8R5xEmhi2Q28Ue6raeVDNdbc9rkxaq7hKU2MgYmrATtYCL4rGstrWVSdjnea",
  "key20": "2AZ4tRSUZxKU5xtPPdFegTTnai3BBPvhrAmcWmPEYRuhAdM4mJw96wfAUxVp5zKR2Fji5iVYpvwD6iPd8vhYgEDB",
  "key21": "vKCEc7wqS3fmfkuVpXWsdvu9sfcGbHJdvfjAPhkyy6y4CxgdUTjFQ2cE14yvfnuFrdR8Yi658AHgqFCtktuVCmm",
  "key22": "3N5GiZyVk9iucTEZWLZ7QvEPmzL1XKzxj2HwvU22A7NuzUZ8Ypea4A4GqtXMcsYHVQaeSLhzb3s8QzRAEnnyrefA",
  "key23": "26PVQ5Np2yosEekFjNKNyUgpV1WRjb4p5rk357zLMhYJSYKm1sbjeJuxvx6hsYj5sUthUxSkS6NmwdmHc1hKZYY1",
  "key24": "3MmmikeGuUDFcC4go3zbWwChUtd924bw5pSX9tPDQYNeW977NJiRhCpHEvKxGNVCPnjfhVPowCjxkFnGbLvtrcFA",
  "key25": "3BVqQirhYjuJsszpmkFfUzYn6zPawSJEgDxSDG3DhZcCFJ17qbYjntUFyDAYFfGzyNKSa5MVBbTJajjS8tVquYH1",
  "key26": "37AiRoWjYKjdnMdubkDWGQBnv3cZNEmpbM76iMen8LWLwa8vRx3tZ9qc6MQcZ74z4JmiVH5bBsGoRkNZLsVocQD4",
  "key27": "5pSuLJTFFPrqAnVAgP7MWNuCzrmPLXc88jy5rs16AgtDAadcQr1jndZM7A4LrYR8XksqtGm73Z92cHT2SmrVHJHy",
  "key28": "4pGuWMFq4aNH4qdJifmF2ntjLdvFkzNCiA9gwhEfCKKCu8C9BRqZyRYvXo2wuTXUh4nqCabdjca3JVv4cWq3j3iG",
  "key29": "5i4f59ivZAX7bHEQZDiDq9P6DnZeYVj3qKuSzWiTgLf6XV9iDeMRFXqk2n13oAHMFEMhyVurFj69NdhdHJAyvgH9",
  "key30": "rDHP5h25Se6b7yimikKz1D7e3r6HmKjeSDBY5K8o6eTeECb2ECwNPhoipyLtDzSnFV1HV73igG8LFMugPxvyQvN",
  "key31": "2ht9hLZfjcRu85Vzi6FBvQQ2sCdNmHh1HPWEEZVEEMmaN19YZMPeYz1BfysPtyB9TYdJn5eWGzG8imR6nRKURwdq",
  "key32": "1SBXgUXt3eEZ1AqxBSjNu1dubFf8F1VubPf3YRYCoW8oHuR2F1YyFyKt8krcvXaw2npvGswBfMD7nx3bryDNRsq",
  "key33": "2GNVNg5j2p3aZZsFQvrL5Lz5Gg1x3U4hfXHvo6uDuAirDSeSWY2UvRYn4NgKG8cefyBYsSbCSQkVXiFATpZHBgtm",
  "key34": "2g61y9dJgRV5t3cUrtZBYwTLChgRsNWWKmGYq9EJsG2VCVsNMx8DzjBzL85QT12YR7JJunurmDoxukgLyw1pAiUM",
  "key35": "47XnjqEdvy1ot5pthbxzBu6n6v7sJMBvkmKXyR9MaLXKxH2HsByQT48FKdYJqubBtZgiFLLGBrc2HVW5JrCXaVf4",
  "key36": "44BszcEmdnwkXGcKVHdxM9nrksgJf983yq81ExzF9xuShzFjNxXkMiD8aDBRwfgHxoN2CEk6MfhKSFP8PBaFrht3",
  "key37": "4EGvaKrD7B618AbxJ61XzpAHmp2Pr4Q8rBMQVt8eXmhYeC3msxPeDTCjU7ua4Y3fAiEY4c5tX6xP29KdcZgW4ihD",
  "key38": "PxAVjkzyRgQohztrTUzZDVFjg61zqrCxSPc3QWoLF5oi7bgJGMYK162dj6KsLiEKyfuE4LDtFZB1N351aANee2G",
  "key39": "8NWrqw7akwGoKixBDjaDXL8p5HZcMKGgboam7X3MEyR6Sf8xe9nuQ6WPiNSrxZsKz7cs6wMLgjuGnQvGVnWxUoE",
  "key40": "49o4auTWq6j1rUfaTZKMpj2Zuo8vsqKWwVxS65HCWTDX3bG4nNvtqgaE6GFQqGkVf8JSzfscmf8QTaVMrYq9RJ9u",
  "key41": "42NzJk8vkCXj4TupnegH6fEPFeQ4XNWuTvo4NmxGPSb5Jxu5Pq7vV3pomPfacXtWTFJRnqLdaZC9xgFd3YyTC52A",
  "key42": "4ga15H5SWfnaUucVrK5kUmDqJexgp3vnxKhT66tVMrCPYGqqBmkEkwmwAWUKRkznvuWCgvSS6aQTcXbiQfHph9XL",
  "key43": "3ioUrnaRncB5kBoY6H7DDSwVdUhTS7oAVbmYX9MLJgLJh5jJP2EUepsDFVQgCyE9sohvREeyLSukS22E6YZPobrW",
  "key44": "2zfGwwR7wrKLut4iKFjpEJbVXFZLiP7wqoNhUTsew3rrdxVt9rub8GNowPNzR72yC3vheYjotmxot6kbEzTMoa9n",
  "key45": "fGaPxm2yvJTTBbUFyaPz253jHTrVDAedZFBbKfD2myXPN4VWyHPsZqVMmUVE9XmATQc8LsqzwmjbeWGxXt8PR1S",
  "key46": "2eY6fTVfrtpwUtEb4r2ukWgZAmoF8xDmYpQaocmNjcBgmmAyifBZdd9z4e9Zq1AeMvxT2D9z8KemJb78qq8pxwRJ",
  "key47": "4c3k7qTA2Q7N8VUDeqHnLiJthpYUjhLaw9eeNUDoNqAzM3MsHUXQiUNftcdYVny9eywQyPGGZRFaLnJgKimX1Hk5",
  "key48": "2WJcJRJaSgev7PAGdB4gyd2g4fQYfBvNx8MiLG98TL9noL4xUmDQkKE6Cxb5Lt2iTnNnGaAWJnYCdipVpuVUb8TT",
  "key49": "5VLgFpJFteB1jGwmsRgg9FajTfex8c5QH2ohdyNFLAT51py5Gj4fcx23rjBejVfD3527FA3GwboYQQxTPu9xB5oR"
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
