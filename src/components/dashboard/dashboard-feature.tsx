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
    "38vA8C5LkebkKijENMk4dXFD4cAtoZ4V5DxWTmVntVQyLKgMvCdjUckK8qisSvpwkxLNPfd5dShZCXse94C32D9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385DMnUVujQ8iUGpyVv4T2KeyQLbLoDCM9um3GErbJS7qaVgq9UKwJUcZZcwh9T23GkLej471wW9LdAR6ywohGxX",
  "key1": "4d5NemijqsT5ZsES1wKH4jhP2sZaFCY6ddB5EZjyppaFveJg2PY4xdUbsL46xjqoiJXjux23BzJcDpeY8LSQ3saw",
  "key2": "4NVALxBoWc4qYodbNj2oDxrU6W4hvnYKU4U3hkkuJ7r9psaUJ4Z3cMGjRiXyEib28SYuemw5C62YPBGiejEmsH6M",
  "key3": "2eqKeGidD61fPPNNeXywZcbjycv29hDu1g9q8q8kRpf5GuqtAcAKFi2sxzwJ5p3RJze7NswqyV56tfedTaAGZPWQ",
  "key4": "4DfwAQSt69iiHppP5k8U24iUbQjcvDJuLZTqEKpvGGU3nSiUu3AUdJnnV47ML9qkUAbWLFs95vrMqPjAT1kR1k5W",
  "key5": "3LWbvSGtT6N3CWx1aWcuc8MqJhLk7NKZ8oxiw2xuXD9jh1MSTstyU7HpV7wLKSzgWdTJs3kSi5PVVMZRV8GTdxeG",
  "key6": "2Bqcogbvngehu165N5VsZ8WZ1hUwBMVhcSFbrtdruf3mKmL4Yjc5VAhSe9xDoMNix6j6iHxbucFDiYRsgX1fmqBz",
  "key7": "D6vz8N3rCnhsT7VEityS4wyo7cWKXAFZfdeJJqSs6xrBAWGnXCSdaLWwpwVqy1ZBvRXA3W1RJBrXawZLHZp2AN1",
  "key8": "3kLR5b5edbxWFY49tEz4fxZmcxqjdi5P3fUzpgCNw9hcpp8UKBd7WP89wzV8mw6a73oS3PMTwh4u6gHNVPbA5H3R",
  "key9": "4DBBkf4CuQR3b9wCtb1vRWJSSP7QAXgLRssvGXsUhzMhQiP8UwP8hCvHQznD9Z72ZZJn7bS3uxBAkVmsNBN2y5Ek",
  "key10": "hSnra5TfMNoRYJP8PqcaHEi7B7mUvMJNLiRvmuq1ExUMzExBws3uBB2oaKvnEJwunW6X1ziQAZzxGFdZ9huLP5s",
  "key11": "3LtVP7HNsqhgspZogZdeug2HjvrBkxfHgs81cy3bk85fcoACe4nGkQ8ZgKdaKT3LeLLPitZXpR7jQN7qbVeH5hTm",
  "key12": "3ssGYPZrM9uLx1Tn1hETAzuApMiZLwsCfT3j58PfU9wSySEf9iJbNY68Rsxwu9j3CxcvX7Zh5tEqztL7idXUup35",
  "key13": "5oHqzPvyg2XVQ5GGCbYoSczkKbQequvC9CUBvgPP4Nz9QEdhGJUf4uRsz9ZKW9CNUTME2sH8Y7CrT7W1U9zoBjhR",
  "key14": "3GnZb8iuR8kyGyNb4ouzQb6h5gfq5jApUPQppW1A2KxQKN5aLfU2vKrT17fX5vH46XpdEUbUszb3r5sXb8WcAV5c",
  "key15": "58V1sqSnn2fJm5ujD6NvgCxqKufQn5Q8qZrzNz3vs2hsks8MBi6zgkqgDFwA6PccnwLNPZ3zFQ9Y3rYHRz8yCSFw",
  "key16": "3SrA1SqPAXoJAzAaWdSvFLvRp4hsYDtJ2BwcarZ4WLofEUMR4TQDXPLCUwKGDgkdkGMQVZfF7fDepxNDG6hPq1Za",
  "key17": "KU8zUjaRE3GMNJWNVpVnVJAucSyCMSZYFHsjf3D7wcqGy9LbPTE8VtV79EB6EypM14b7DaDsQU9gsYhLfkqezaU",
  "key18": "2h4Ggair2uQNcZhNaCY2RrvfCJF4h6dibhcKNT7ufGBF1Y81XJPHe35N2pM3JMxJp33jzK6zZNySmef8HhR4UdfA",
  "key19": "3eXV3UNPnGDQJy291jE6nAzahPf7X8zcRD5NN9vYLDtXhnDbpEykB8Wyin5cTppWSfFKqXVSHHitzn6ZrRM8FGkF",
  "key20": "3SJJcvwB81rWWvx8UU7GeCfDASKRoRoqyfEybskXyDns6A3ZxgB26sL59DiTDJZKccD5KWZfKuiF34RRbovfabJk",
  "key21": "5rNujosQeWLFVAJxeBrjQETexZxsPNbUdv4VKZxVh4xX3SXkgxde5ZGJe1Dz8x2cgt2QnuyqVaCaPk7rv4xnK7Hu",
  "key22": "3T6Ru5vGkezsYLfgmppMdxCTs18g5DrwbbTFEsNJeW1J2PHaGzusTNhFqZiJw2sih2zUH2at51GhD1PL7sQ2tNHv",
  "key23": "3KYRbZ2AyeywYkeMtESrCv18zGcLkP9GLqaaMx5tWzLr5Jm3UKyj93fkdFPxuqUYUWnDWNnXHMQDQuo7mRGLMKN3",
  "key24": "41oJfTovpFXD83odnLuP61AcdBhbwnLUratMZfVVPRpCRjJ2rfDMzANZtd2aJ4bH94o7imivhFTZaaKUw8koG47F",
  "key25": "5efCjZNQJLgU6zdSivx9FHdJh7n4yUc8yjfzLGezKP4fWcc8VUWU5nW9ezixwozhM76Tj7BiRnkUNE16pmrGohiD",
  "key26": "5QRKUdm4nbrF3A7m5jpcDBufF1nni7pi8oQZbV7reuhE4qctAWvoSMmkedqhwNFRDz57QynKbSxnGA59k9GkUiap",
  "key27": "5RkVK5RBRYuJPSzRuHc97U3eMZsQfnxvccxiXXpnxZs8nVRonxTmR5GdrFwwZQheaf7BXpQB5XC26BxySuceDVvL",
  "key28": "4n1Hc58Q7k2vtuYcgPpoVWGtcrkffaQKShZ6Mk5KPupeRLYQXjESKpR6vL9mGTmJPHVoRSxj33vpTULzYmYFrU5M",
  "key29": "2GBjYqu3UFQN7tADYt5rWLBi3uQCy8DZMGjEtNTgzosKm5FxeTfUa5Ec9mW8MDJE5ASJNtq4FwBg73EtLeLQJK4p",
  "key30": "5jJ8hFH8Vt9uceKih795VbczTAxbXxpKPbc6GWYxbuq9jpwuGMcY4H2sw3hk5ayov3mm2jGoUx3kQDY63NUXLPG3",
  "key31": "3r8REXPz4yrh22tdBxu2UiHJ7U2XopaWWMUAVk2cSGsyDjgRNryzNJkDQKnorirqqbzuMoAXX6d2oLTd5XiDGjNU",
  "key32": "29rqMn174dQSEADoWy9bpjqm9Gpk8tUWgZ5Mw4CCF5PLt7vkw37N5C2EMqrWdNyudKksvPRTpS7dBJ3xnspojgik",
  "key33": "C3YLncfnBGETvjUakcwKJwQvRiDB3EnLeiu91RydN74PwRGi2v6Ph44rTjoSP35tuz8ynawptN6gv48S5WqpiLo",
  "key34": "21ts9CK1Rh6hmPraEbmufxdmhVCb9XszsGB2nNYh9raFEDxzQ8kTEQKXya9u9XevUrKoFLcPooX2icmkGYX93Xha",
  "key35": "2kuk5B5ECoQ2UfdnWQYHxwMSieABGqtPLARp6fc8MBHcgs5emjQpyWWv62gAfAssHkRYXxmnrkVtxBDcVc52fSGR",
  "key36": "5MFja1gHpwshYrg3uhkWT65uPFFxwi57ZukzMzrUp2R8Dw95mKeEf7ZMgbpu1zntB8i5thpFgTx7CDBTbrPtTAEL",
  "key37": "3ULg65tLeToN7shuFwoWVMyxyVoRDtU7GAwKiMxu35PgBnYWRMyFPJWqAGbVFr6a68EVj7VHjXWeCn8Dt66kwrsC",
  "key38": "ucRXPNbQqQndeVjrJAQ2ppPwWunM2Mj9DEQPnV5C4wGHvyGcG1kTAGZbtuA1uxZBJLyKMaK51REYG2Po9i5X5zy",
  "key39": "2hf54Cn5ZxyQhnbp2hGFd9LQCY1a5d6jatkiM5YbxLFwseQSPiXBSCPUfyvyj4azgYbsnpuXrmkhpQoYJWMkbbvR",
  "key40": "3wGam2E2pQWGgtXrw5Np2qXgVmegG5S14NgEEfrAXKePQj2DshhHSZPed7UUtZMKzdxwq4VuvSzxUasjVrkQ9LzB",
  "key41": "5DhsQScxmF7biPCtPPVNATr3fRcsKViFypXEJhWt57XbB8AqVFWCzDjuqk5j4DufcNALq3z7Z5pMyWhxUkwQYv1b",
  "key42": "51xJxKuUNv5SqK3JVpUAAwekWLYBegUjoiz3uD8KEyAsowsxsvJPT4mFv8GRwTegKByr3qzZA4JtTWArqEmVBN6L",
  "key43": "4hiSF7Nvod2dAr9uk88ike6xpDYN7Wx7UfM8NpTpJ35gJd2NxXjUieRC23VEXwzivrZ3Y7TModXjEfUC82EpkDT2"
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
