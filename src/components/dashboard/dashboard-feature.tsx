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
    "bQ9ExocSMhd7B2PaYWemoFDTVGWef5Wp4e5coQSY27pXZoPPt5asKaNwjHYAhuAR4GW2QU2PD3k5qCG9D9EQNUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GebroHPmdBDXU4PQLwqyLXZ1rymJKYHGmUREotaHQFWb5TPXQxkeHJCi9NzDDDopUs3CMuzRzd4iSMepa3aMFjP",
  "key1": "3jFkMUSrbUtC8XBbt61n9a8y8ozYtVKEVezJc5chezCMTpx4FswgHN6mLUhxfmMBziSNQxokwQEaZM1dsiTn5XVH",
  "key2": "2Qv8fi9qWzw7QBne1EUMZbeeEWwnWzctMiNXhcYieBrVCKLc95quNtjB4MM5oegwTYK9yNnJVEsESwKHVkGTUyFK",
  "key3": "EXVS55xKuusTzevvihzXqgkdWnMiWDHXosA9D15ujK8UpWpb8MrvJhnwuYVJXR8VucmeVCeYy5Yt92ZmeDRwdWZ",
  "key4": "53SnME4htPgioHVxGx2S88LEYnqBiywKQFXJFFc88DuaUFdpsfMjTFWtBcc4bmFn9NzbeZBZUyTEC3Bm3nLq3Vfy",
  "key5": "3pg1tgR6ZPebFp2uM4LcoWgZbiy6FLkhFeVc838Ctdwrx31hKd6EgRtbWFkajC5fwTMd1cFLNtqoZqtDEBK7ND16",
  "key6": "yFYxPD2TjFExiDAuwdQQkpHTjzWBBWqn7fypSfKvgBjJZFDFmVrHj5AB6UQxXFePoQoxMjGCtM2dDsBdfEJ68Ej",
  "key7": "4ZsCqu1czC3DaknHwzn1ZKh2Fu2Ln6XP8hDn4KrPzqPXVptPKzVLxoxFjnsQZto45UYcuerxokZ8gxJeKTogNigU",
  "key8": "3YSaCjiViRQ2ubJBEexzKiBGbXKTS7xvVrzmd513VL5cwabf3544hArDiQocpjMJd1cXzkF21Guek59eR2SY7qtB",
  "key9": "4daCzAG36LD4Qvpe2LZW1KH1sknVixwtTqdihu86mt3DXNfvz2ZKFfWu1u7kv7wWtV1ZBM3qVj9v5ofErJ4mDoFY",
  "key10": "2yCdteVWt1d5pDnwm9QpWDRTY3aXaPtNavE9BXmsVNa8wH46ysajawJWfqGQz47vHufAFXwXfhdtbGs7YVa3G549",
  "key11": "4uSzYSEs4uwk6MeikegaoLzAJSgqTfkrvQKGmYDqiv7EFTABQX8JLFnb6UyCJ1YxKeFeVmMtzkf6YPdQDqzLzPZN",
  "key12": "pXRn7TsmsXaiygA7bmriGrD92HfCGdmVawtoV4ech6LQaGFhMxboD6xksGF7NwyK8pb5bVy7FV5wTx2M8TT3d8v",
  "key13": "3ghp2NyimLseqb58s51NynfieFF7nKyc3hdzRVThXdEdwSrjZ7eWYfitXGyhazHJetCHYHzNn44n1U2NCZkvXeGN",
  "key14": "3mDzEoXa11SG4XHuXtKvGxiWD2LRkH2uZramimU2eQXTTLtjTvkhQgCCAAJ39zJtzerYeQTQoeEJP6ZSgPt7Feao",
  "key15": "QujLz5yinGr73LZUnYcSymYzq6H6ao215vQmxcPfbLCBbnPfLdKn3fQuAA4x8HxcoZnDadqu7rhxqgnJBEUp2At",
  "key16": "38jkK34TooSuC6f4ddw64kcuxhAQ8R3EnZrxUbWmtZQNRc8fmSyVDBLaJgkUEZMN2NuJubV5mLfZq2iyfD5GUdYQ",
  "key17": "4xkyvikYKhVtFyMyCLVsYiFggoq9p9TXsVkdjZEyWhYLACfQDP4x4eEbzegFy93DPiHZi9eYfnnMv9dmFXJJThEx",
  "key18": "47Ac3oC4ce1mx32Utdg5skeJoS4UWdMqZvkze2aQDELz6SMNzqpJoRuizFiwFobZZrjjJkDLPkos3egAMwPQ27GX",
  "key19": "5Wzpj5RjkXLfKxbC2a2rwNeigsL9iqoVtb8cSR62MpBPiieeh6YjT6xhJvwRrAJ247yigy5k1T6utgxPA6w2g31C",
  "key20": "4RdcJhs11oidufejVDrmFoP1NBDRgPa1uDgRNoA3qXCoRBXDhEhnEpXD7cWFE93Nj8h64c1L3TcMHNkV5otKR3to",
  "key21": "2M1m8NFqBBnC5SDqSZnhnPPJUXvTZJHzzMAiXweqtrWEGb8ifFA88wRGvYQsxGGscyLXoq6AHWRQW1LxkGghqEkC",
  "key22": "3HEMeVZBJUaEn7PZEaGQpZZkwGVARaLES6aU1PJd5YWF1pBcY3FaubRus9ZL82Ay6FjveYxFfisb6k8mPKb2Yqcy",
  "key23": "t3b4CdVExGA2KxQPpqq7A2tkSNACy9NyXSQuLcrTr2mdsGQ3caorDayG8QmtjLmSWtnVJuMKKqURwqfZvSBrXxq",
  "key24": "5kUatgv6C2dTwPoJvdB9WkvHWQ59d8HgJ7bsmgsZLwCDiScaNdtr2pFKaU9dqjUVnw1pj4kLjr86uM9hggGoSw2U",
  "key25": "65rzBz7ZNff7CC3JinJNEEeLiAYfHZgcgogkdUJZp5zwxNr6HqECTPWkT1oHs6q9ZxBC7MbRdW6AqQ222huNjQWM",
  "key26": "38JpQTczraXWQcgQ68JmvvixYtkxLK9gt2uJjsFaQWghWfP1vEM2aWW5GN1CS3j7dz7Y9zyqMBuKn9RA1FKcS2qk",
  "key27": "6KX8dBh6qd2DiHsL6No6GXdbMnx4VjX2f1vBo4horXSSBhVS35jhqdWmXYGDuK3AMsi2x8ERzHX4siFTUzbMEXc",
  "key28": "9HqRjGTw7RL7qaRWotULQ7rVyrNrDjeAy6YHjZ1uXCwdic6LBKkjW96vLkpauBYTGv1uLpuhKEkTQjZ73A6wjAA",
  "key29": "41AfWTNPgtw71Xr8XHnMcRLzxPKcJ4XCynVLSMYW7N1J923i9MCuwscKF3y5yNz2L4r8JZTVsKxCsh8zFJEKfEWX",
  "key30": "KxdKcgeCcA1yT76HWKgugLAJ64g5stALmk2FZxqWH7FjHcthe9zx2WGCgQTKMRbUU1s6FN9z5NGuWvnVXUNZQYK",
  "key31": "2W2gCRHZFnwFNYG1BrRAsmRUYuM9AsRz3eGeAsyCk14Ph7yQJCGHJeaD174ZyH7hvDE3C2FZGsHpUrdwU7XE3cfi",
  "key32": "UBzZTj2v2z3MztjR3C2CXwyosguLNAA3XEqdjTmwmenrLvJcDSoLb1TEjhHL5ZJN7ieZACAAtBa8PGJQxxQR49E",
  "key33": "2w3TErPuJyfmoTbmapuBzEq1F4cXBS7gVTYcpiHotNSFAsqJEdGBfqywcE15F7ZQkT9LJHhy6XQrCgPGX6if3TUR",
  "key34": "5G47VZbyLwdFpBFymBqyz4ZxJ4jaXZiWfNHFBqTm5MGQdQu1Q28xTmMqEB9XwnL3ZRD4B2Q29eneA48wBBaLWXGx",
  "key35": "5z1S3CZAz1iJAqzLCNTguHv9tvKtJjFRzC5ErVYxydYMeNTCwe2YduArvA3NbBWBjPEkJ3FazPdbL5afsH5TyrLB",
  "key36": "4qSLBMS3bBwEMPwQE2ArArMRNtHcsJcpAb5Fzhh59mnS1Yn88e5b6D6H8C83QCJ7kcNcmVJoZN8xb7qBW2nD7CAU",
  "key37": "5EXjGYyA34suoAeyV2Rhk7gkqp1wNLkXR3WZbdQ9pVCEyFxKE9ktBEcBwomccb63PgkHV5uGTK7bF9r5QEdVvsHQ",
  "key38": "33sasvG9fnKCUjyGEexLuotYvYg992fe9NEVHZHfPR6mocV8udwtQAX4ScfYdYoqCJVLtZmXCSDWTmtJyfQotd8N",
  "key39": "2hhs6VqH181JTivBDcpoPs2FwkNuE94WBVUrxt5ufQr2sQew2JzrzdruD8gYT36Gpy5qhaJEd8oEAMhgwxwbMWso",
  "key40": "4iCN21ZLjNCT3rJmYtzfYGqGa4szd25STGTEBZLX327tCTfxDT44y2tSFPWGT4rkid1pFXuh8u3JWdkkg51Gvj24",
  "key41": "i9VWFte7CQHiPC7sUcNta1n4FaxJNNeB7mJgp2Mpg6SAdmMSfxezTQmM9wRwg7tY6LJfgFzYh5okj4qdZXkVtw3",
  "key42": "38aoacus5k58frR89XMy5cAkgrXtdJPJCasUTUmGZpoPrF3EvoS2oWmeMgrwoTuuz8beBj1c8oxDbxp8K3BDqchU",
  "key43": "zJe3wb1FGDAJosYD2Uk7TqiBo958xYD6UdrSJVmPpfsT7RgcSJ1ygcYrVu5oBdPgArZBgvUFs2UfgRuyDUnc5fq",
  "key44": "2wqRCuKWYGiSBJq3t5xMMaxxyoRHoqAf3DjpCu8LwCbUdNjcNY1X3PzwwuwFLBo49mqhqQDLvFeeL5MMrLiQaDwZ",
  "key45": "3K14rZuxXNcw9BV1GWNAoGQxfWHHhSbvk1Au6RJMAQ3KYPkkbMHqCf44XvATa98uqJgeBXScm4FK4gkpEdghmibm",
  "key46": "5FS1y4bqb2DKDK5Jpq8U37J8Ba3sEDtmPiidn2ZpRUjEekkNuh6KuErV53DdJyZ1mEoH8eDYNAxubiYH8MZswGAp",
  "key47": "5MQNUuaDx6ufx35Xd4CgibYBgzunVZ36qYPFqm4krv4RkxMgfKwd58U2aUr4QnZ4X1DPqjiKQFGpkjXo6FK7sG4J",
  "key48": "4UdTiYo4FfKJksVVKo32QdUKviuWpzgV2y26Y3q9VUvLLraASHCgXJyWBGgBnqvAciptg4bWcw495e2CgdHREdaY",
  "key49": "5uVRiLbFSXXvgA3LfeBQZ92gbnbQWEybXyo8VJbxAD8fEsfDcQNVebgmE4Zy94SdMAFg8JQ1AEV5Kv4iNXkuTjbf"
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
