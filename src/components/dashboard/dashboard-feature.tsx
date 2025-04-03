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
    "4hztCW3Tqiaozr9ijghnpoUAQncQnnsyEWyJdpKgBURYGGUeqkcDZ6UJkRmPwoT6yKsbaHp7iQu2Pdbui1sMMraN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FxQZw18QUrgp1q2WZ3STN9MDQXC75cdZG6gbjjMrUMvRVfknthrqzJQipt3oTcAnovo6cRNqizZ9F8QmhGJZYJY",
  "key1": "2QUJaHLPRbwj18vu5KrAS2f7tsDYPFq4AnckZUUDnzba5y5Ni2U7nUaeNH5ZvpL11S72onty68fj5bJaEz7YFRNH",
  "key2": "3a8CvLgVvidmiwkGvemgb9X82Kr6jUQb2fczs2GdhoDwy2kvMLPWGjVMzywnPVBEzdygH3mKqCJPFKYWhTaakS4x",
  "key3": "4nVJkiBpTqFLSznDjtuzAp8j2WL6HY7UGkpEinRr83Dawfd4XyXZeTYh5KPmv4ea2rhva3QwZgaXpQwqaPrDrq3c",
  "key4": "5H46g6CoEjoSXQfzwuws6BM5WecxYQWhTthVbcGNPNMGEC7ip62gHNFVdRGonJK4Uhh37aBRvC65knVRjwYnEbzp",
  "key5": "5ykSs5tLCdWm4nQgpqDAPFFvCbdmmr9oXmy8F4UqFQZ19NPMhb7RboMng26nYAXzfCd4cACdmLtnwRBUHRvCnUtK",
  "key6": "3aGQ8sWqYmW1wcuq2uC3rWcG9QUVZ9hWrPJu89MaTWkYhfVGPU38YzTV7A6HFM2oF7648pmRLmwJAVJ2pPHaYXsf",
  "key7": "5rVKgdBkeeEf8CpBmBzEKGgNMVjCeAKrCuoC6nYT26g2ggMEoBfu3J8vBbPncN9jFhrho6XhYCbh75AB7KGKiDpe",
  "key8": "4wzYrkxCHBaj1wEiJgfidpu5mqDqx32pLUDH9bTBXC7qPHgvcS5AfoqDLNtrhP2CxQqM2Y7RZgesrPJPMKaoqX9E",
  "key9": "4seALD2GAYcUm7XJs3zZYDEA9Xe8nnAWDJ13ncCooawC3PMhSTewWMrtKkdibqujyZ3xxwohZLHfAp9cpJPJpXxh",
  "key10": "4V6MgaLorASfjQzUkJ26M6A3ybPNCkXeqKXXSZNvhoFWy41pL87vbDSfnFoJi2aHFobFWKCWQKyGqMUvTox9orJY",
  "key11": "5eN1c1t7KMjYrTRtArYuoM8rqdprpLB7FYmGSVCfDD2Qu6jiQ3uZAndyEmkmH3vizaa5R8TeKB17Zg7qbypbmhvU",
  "key12": "5fQBi1qP2gyFHmekixR9ihz4RYMwRvfQqsfUkqkMzYGAPNWpAS1gEwwHMXrnEZNEpomd7WG35GF3kSg7KyvPkB44",
  "key13": "2sD1injynwTaA9M2eBpKoNstyoULLJ1JQYemDAWZfvJBcS1XDQQBWfSPeVSbcmNmDHmB5hKaUrFgKGdSLP8uKqs9",
  "key14": "51n6h4F9f8hjx7M8B17vSaUUhcxmREUCLC9mFZRwpdvSTL5q7wUGL9AjWBSeTwGAjdJruynAdQMYog6BS7e47rBW",
  "key15": "5TuVtPbKs61uHjU71VLbqvYD1Sv5nKXHeRU7aM8qiJVxHXVVevsQWtc2hWWSgygx63HHxBJ1x2iTei5pnFWiUpnP",
  "key16": "VC5kGfrhLkdGxFEQWXShMF8LpjK8zLFdjCDHgbjZK7W82yjj13Qi4mhAbvswAHonb39uaxPjNCzuXdVcAAnnTUP",
  "key17": "5M8RBzzPFbSsTh3Tz88s3YB8g859yN9KViKChmhCUP2m8xWBNY772Hv3yoQkNf7GvRNyo8Lj71VxYFogs65r4ajH",
  "key18": "3uaw9e45PvFKrPV9kwFmLwDxKyEQH25UYo97tj6zorNeJ9vjfVPVUFFjDQk3pJc7dBcUDbunDHdEvP4eBwAY3WA7",
  "key19": "4QWv2AZJg1RujCPD5TTkoFpdie7LshUhMZepaUeUP7TPkPtLcdZvCpUaAVsEVa43pBDQVsTJqr2JkQaC1S8Axs7U",
  "key20": "2FSPZ2QGSPZhXYVJ1SD1fEjM274Dpibptz7EkXMZKmAF85iiGeHmnXy4N7Yqj4erPkNdyPrYhkt5H5TpGNp9qWtq",
  "key21": "2uswN8qzKcPkBKCN5RmmbzPNYFjZieoYZifq2qLfmiR6KSDLUBdA9SyUz3KxibMMkS1fHVeF2CeVH2jbqhpSmcXw",
  "key22": "5UNTaBq3S3Br8RHg2fjvSJ2duU7KEsJEA1FJiTWvDm5MopgesG8S5L8Nb682X5WovD64e2CCV9shJKUrMSJf6Y1r",
  "key23": "mAtpiN3QcxCR8azsqpqx3drqGMPn6mvzXYqU2PvFsfyu1ukxq1M155XagPPufq7rGgZ4fhBewVwj43vCg3A7JtU",
  "key24": "i7gVarDvyeU9tDe7g8LLY9PK6BUUkcgmSaUJuV2xmiN1uMtsc5ioZaYUUcMtV11Ec81sGttWJHmBtJTsDQzjnnK",
  "key25": "a4emXU2cz8gC15i5SUqV5h4hzLrHykdZvQvah5gWjP3sgdVkLD9jS45S3a3wG7fyfjPqAMp8xHDMy8mAQbdbqLM",
  "key26": "3DeUGucx4cndMN4cRVRJHVzNgBhN77wBJ8n5wSMeNVFEcqWk6qKoEfkZgDSgjfo5gRg8f2uamZhZUy6kgdFKfqAH",
  "key27": "7t3qYVJHaXWYn81Jv1ZL5yG6HyipCBzMFbNUv1v1JscXgQyJjP6RkyAZuXp89qQdXXGULNE758Xteq66BTajS5d",
  "key28": "3rXMME2fSfJQEoprJDeb3hsUWAGLkbZYxfbUiAL1RgDq4Jyu4rXZg41vjkbc5NUMN6uqUy7WCuXm7Yk4kDfgEtf3",
  "key29": "2ca8fFnif478t4Auj3UwWKyPuEk1CUZVDRzv7ZXRKnPBFjDJRbbWxmSEQ9vuJ8h22KXVwdfJckq81HrzNgcnMPdP",
  "key30": "3WaWVqC66Y8c79bVN2ELiQkpowgKEfBVcohpNGy9nNyLPweM4qqHKPffXG5TttSG1e1phqzUNmecffX8tk7ps6fR",
  "key31": "3i5xH7g29Som1xyuA1XiZEC3HtuZUY9VoveGSKAMevsxRTczeKe3DmfZU4VGUU7vgeqHXndwnydttYf443CYCsu8",
  "key32": "2VyDo2VkkJxsDKrXHVKYaL6Udb8ewG8yiQpgqb3PKbiseGMFxn5XhuaMh7MSjZTSW2Zr9ZC71gvnnt2fiAgw1fRV",
  "key33": "4YFm3RDHDffXFEt6P5RWrjKyN7yL7D9YC52fwKgYms7XuKL1fyvZpTrVE3Q74925BTKBUbMTQVMxqAFUgnmed8CD",
  "key34": "53WBXHag1zyeDdMgYXVhs5wTQVMaMngHRHJknxAkQFmsTjKBftR6LqigU6B8SZ7Skr3LzfuC8gsidkbumBmnhn7h",
  "key35": "3cD1juhiCWjDE7jHXwy2DqeKawC7s6ac9NXZWuzxBLytmrrd4J32HvxDwBPHvWmFqvcyMnhVbSNdFf8R4oVVCvn4",
  "key36": "5v7z81s1fz5m2wDzx18jgREvbJ3psebGoqTgwfNrGatC73yXr3T2Uuq41WSPCyyp7g2yLS4PJiK7qaz4U2Gk4Zk7",
  "key37": "58MUTtENGrgH6NnSM7tMPbBYNDhpUzfbebFGna6mR8u5j9hkRXWgoYHCJbpTNUXTbqvmaET9arv2pt4wzRXxitMU",
  "key38": "3ZjiG8hJ1QQsqwext4gA9fda7MPeMiTVFVG8hmfQYf6yT9VCCx1vzKXpctVKpYoQwVv2EE3DE5wL3z6ieo8yGkvP",
  "key39": "J4tv3svLbKk6vkoKjgYALSn2LUr2kPw6UP91WVoBrs6qCvowP3eFf5kuZ6bNktsbqL4Ct6N6pGdiYTQo7nAPSkJ",
  "key40": "nauZEJ3CSGJCocpjcvZ9B5sL5pvUwK3P5uznoET4UVAZbfMus53fxq3znxJ2xevQWwE2i9tJWfxTkYQbsHvP22j",
  "key41": "eyDFXiiouWzzr7UeRHp9teof1LAZmVMXNbg7977RCca8oLZ1jngmF355XVAhVUrj5ceXFVVsWx4EzYxcAUaVwWk",
  "key42": "4xVAdtdZdnuXK7NxynpSouUj6cg3EwPMVssZey4qxJuDHiaTrgifDdWjpdt9Fdk5QAXEMMgkvwtYGnSRfdADYw5e",
  "key43": "4JGwyLMYrPgyopgs1tBpYXXSnWjepuhTpkEKsLjTKjayNePueavntevvar7jLndDQkYJPC9GH6krEKSgMK3WKAsv",
  "key44": "2qiLZrMF1K86KQk8U8JMLnr8xCGm9LwqUYGZg4KYKjvaCMCcn5NxNcjDbkdp2we1oYwp55yhPTTFh28swMaZkjcE"
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
