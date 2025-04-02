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
    "ycz3fFqoHVQBGuMmDdbKbCMrUjsGX825jW2v8RNpTKq1ZEB8pna9CHNNG9AB4P82xCvHrQ9GpppM1aecnmtd731"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Usy5VidEmqeYEfNY7nDpRcZqraiWxPGmPQfaUa1xvoArnMpTJh3mhEK7Si1UXtjg4NN3B6v7y4N15j2GixNY1wD",
  "key1": "4pSwyrTVHxoYU7uy7MGM5it5iCPUTVhni4n5UfWGLrR2bEjo6TcZVpXghPjHSdDLYn8UTvhCcpyWf2CuWvs9VWqQ",
  "key2": "Aoy9ZWzQ6oZSFyHeMFeoyWLktUY15BtrrC84pK5hTheba5yrQuY9EyMxZMruHod1GB6neLorEVVdLx1JaRDV6Ur",
  "key3": "oSXvUX6DMa1Xfhy8hHYrPXJHBReDjeewtzSQgsV5NaiWfddDEH4Cjdp6gjxBcevBPYrjFqi1Jw6KF9pX2AkFLnK",
  "key4": "6JKU5vSLjHf8Bug81xo1ypFipSiPUpHHuWKNetgkFD438WiN7ioGNXL6dosZRHTRRvMbWHmXBUVN4iTdh9tr8W5",
  "key5": "3QJFJ7W5ZWMkfWwWfLoLoZzgdUsUEzKAiZKARvRHBtUsFhMFUKm6NaJLB9ao6PNoLcc3hfY6eH8GfmeRoyDGVn2z",
  "key6": "FT2WzgctNCx4kVvP7SmDKcRsiPyaXj8qo8K9netFPhnNgo22n313qD9vbNaeFoqWvZz1yRhyThiKxcfAbifR2gh",
  "key7": "38ykUwJNt5wLdhfrhxacZKsUhNiRWHhkdFcbqSUtEVmXKeHmUUNrC5S4kioXzoeH8D7jyPC83ftmEkYQfvsM3Fz5",
  "key8": "4nRftrKQ86Tq6Kh5oegpuUUXZ85ck26rWrJH8zUPJN1YyhAct8SdQxWSZwVRQYB2vVFedhpvRzCanteZJ2Zcbmm",
  "key9": "2DA8eu4crV9jXHT8tfUGeQwmGSfZNCR5BH4cVDTGDrwt4CsFQhrKVTRvnEkZp6gMfR3guj4hxYSQBadvCNWQSakp",
  "key10": "22151y1VonxtwTfyyAZmESnwamGAVYFeFDVLt4agiM3htZijq3GCxMG5d8xy93UEZ92cPq7QX3Ku26YNvWxRw7kG",
  "key11": "5zx9JSm5nAciYKy4AkjJgsH9xTVnfLZJf3CcffhVARhUMiYgqchWkSaoYtX5W6abLmhAjaZV9TiX18Jkro26z8zi",
  "key12": "bt8FjwWm7RCA6ThWyC6SrJgbMEi4SZQLbrH5L8hLxmb3xB3kBgFqPwJMF56HfkFj6HmEvby6w5jbyyJ79TUQc8Y",
  "key13": "5QcvTTTCpaVU2tXL8G1bQ2aBz7PMVLNeaYT6fqnQrQWQHN1Vz1PrfiP8fGA4nkUZxKXGrB3bmZC4t2GvwGZTwDFN",
  "key14": "5gPzMr9o9EqzvrSBHXoz7D6ncFoYGQtyA92YsTAYBRLAKXuhMzFvFQFq3fPLeTRXWaf4ehHrMd6Fa8iforEgYFve",
  "key15": "4rUxrexT8BMm2Wj4uQAkpzMcBuj7yxsPQvYPQtGGMACHY5RbaAEj2f9QGcvFHw5sfzYjdv4oTfzTMG71Lf4nPv7n",
  "key16": "2X7J8FJMyd3zXAUVqy8tszYkeSHbfnZaFm3Wkk1cFZntuatyvfYvtBEmxitShRnNSKJvgrv7Gvf3FEoufdH2yCEv",
  "key17": "2CoB4AEyguPmn6uJDJFghzkWH1Z2oP7fGpqfzzPehmDEYFSvHbRHvYNAKsfoyi2JwByTj1amdUP8WQAvJgvpkksE",
  "key18": "43pmAsMBzHijpTa3rK6766WSpPYgueFUGqGQHy4rsDSkASMeRbVPPMjNKGztEQ2p8QsAayjYuST5GKJEvz594siA",
  "key19": "LTcyaMxZmrBdZSnYd1P4nbti3ydGbVjeU6YxP5Vhu7ZTHrXnJrXL4MhYDiJU1t1pm5xdfq4TtrV68Eu9UQjKczP",
  "key20": "2LoZanbopFVhSFaphxJnrs16wMEyfU37s6uneRqvRMCaMCvm8dTqyc5YPkAspKE1vsiaPE7M9XdTUGYY5wa6EYDv",
  "key21": "EYHhLxj4pMpGVx66VY4zVqD1R7YTYqwZY562cyLBrZF9DrYKwZYymkBLJx47ueD8ytWaxF9dLmKAWUcrvjyu3tm",
  "key22": "5JJFimWPfR6hNxgtJPtyGNyGQQA41N6CthWfYBDRtJcr1gVkHT1BoDtCEnFgYkHj3AqHWNhKXD7Wz6Tyo29rkWbW",
  "key23": "5oek76SvNBUyy1NHUvpv9Sv8cKEPv3EBfywGp9dZ6v2kngFFRUKaSMoKeaVK7U9Fr5tgRKRhuNNn7AepHLW9rRz",
  "key24": "q6L3ggLr9qyY3iG8ydcxBkgVgNLCTGLcmYwURAijKcj8mYt6tmfQwUfAEJsTbxVoTsDow5h1D8k2RpcmuueEL9j",
  "key25": "3Bdqdrcx4WgRV6rE92aZhGcANQBVXMfLHAg88pcjMvHYKn8VjmCXCHCSkLWqrmzJfyFP2V5Ff42n2imXjTLb6M3E",
  "key26": "32eMKiQJn8CZjhb17Ajfaj7iopJZ6aV3AbosmTDBa46D3ewcsAcFL8RTGMeDzZwjuEJEFQThVHXkPEYoJDa1Xey7",
  "key27": "3higsUDnSBT7imz8yfJgurMRFXSVBCpmwKf2sxvs3NJgw8poMvu3ujrDVhTG7WBXBtXCsZwPcqnQBGDcseTWMXzn",
  "key28": "3QHrJyN5hQcfARXofyodH6pysAmgF4AVziYgJWpP84vjFWpW9jwKuztUz8mMmKipr3hsJPNw1iiizJwwobx5qAyv",
  "key29": "v9ZS1RSAf7fuhG7V2XEMXoho2VtY9YXdPBUvQTQwaHBj2e5hCBPzErTqYQZmAhu1CPwTCjxxb1JqU5BBSyacXVZ",
  "key30": "W9Hccxf3kF78RwSK5ck9roqwT2xyY4f9yhrQP7RxRpjAYTuLBjzBjmx1uxaNCTmYukGjQKJG9YwzehPhiJH8y4H",
  "key31": "MZspZN5ME9VEyUg5wxFRuQi2JWUrgSDbmgj4Qytf5shA9GzDSopiksTNMABRNibsqLCUGLjmYHiZVJMmaSxGEFs",
  "key32": "YxFUG5XHckjew73sPL15tuu5xyVwCbBkp4CzyEFGZ4wa5YBAQqu3HQbtKCDNRUdbKuQXGQZLAg7WVGSyN8rGjJH",
  "key33": "7qPDdgWXG4wZjBHqbEnj5T9hYoXaLUWH6KGLtXXUdPHWWUH3QcZ9XxJoHgkuhYJkAy2yqj9QnoKYtzZc4kNCxHu",
  "key34": "2p1BUeB6n4FoR3U6o72yQVcNab1hcneoA7HzTV6A2DQE9SXc9455cLK9WHQiPoFbVkf8jvzBzuKNc9sw5jYrTA5N",
  "key35": "5Rgx1vFdzE6ApQPdF1Jv8ugxcsbqLUpF6Pp54NGaevLKjbDgh7UH7biWPj3B8xTp1Lm6KZzf4KcRNLcaJ5CuyhUS",
  "key36": "4iRKLCvs8eUJSZdyjYvFiT61rEJDi2iE8Uy69f3LsKW15DydgHbXnh7ryQYZ7AQPWdHzdA2JWp31YVNx38udb4Dy",
  "key37": "KqmairwiyNNGJGPxAYpWhMFyTEd6255yPKjJVirQcWtosPjmZcvSitM8E1oGSkGvNiygD4oV1mdjU1sh1vCKukt",
  "key38": "3HFXNCD3YTdkqb1dBXSNjsdehvXJEsEnVt9HkveMTPgbczrC1ip2eZSnnDvuLAyptThF8DKxqzXBxsRcZVJ57Ms1",
  "key39": "4wiEsY7T81jMDRJz19mC5JpbAFSw8zJw1uNA9PUY1WSxCJgexDjAe5FivNetYwxrN3pcXFrQjFJisJ5F4BdJmzUJ",
  "key40": "4G3FWKVe3eUASMZFT9qcfip86yjC3NAB9YotL4wk6uDsgkfD37BthgLsHL4nAZ93uWZ6c3GyYLLBtHY2HQCWJ5LJ",
  "key41": "5wKswYvpsDtqNvL5wTEoQzL3MecXVJ7Kv2z1NQxtuEU73iE7L5n6iVfjXp5HT6JnhqLHRLuonB4zSkoSKd8jd8RT",
  "key42": "2Y1Y34Rvt3v3ZTE9FD5oP548vexLPehswrj1HWnMSgkwyC26Vduzyrs1WmRrpZHKXufaPx7oLGK1srKT9WN4EL3D",
  "key43": "4X7zdRRMj1KX5X6BaYG3Aypf1PGEtAQfLTgvMtA6V2qdTrkoN6gCguBhLceReH4pnWipUefzfu871XMq5rpNLbPi",
  "key44": "5XWgPr6pK2TK1Bvk4XgWfvcWj2WidykAAHkzsLkoS9hQvwQGLnWrjkPHsLaaRu3LdSjHSGazKSZwshbSR6X7V9uc",
  "key45": "2wFf5nSmdxvcWkcS12UYjgvAUYd84sYpfYsbFztoRfZAMHLZayUv9BmDhEqihD14W3Yec4ZG3p1EUqtfLLVvAW4W",
  "key46": "9Sznq8CSb1kM1ADFK9svkaHLhdAz3o8jX17DJKUp9e8rK3ohymDe7Z7LWke64GzwFTC3iJ9kNWET6yLfsE5PUwL",
  "key47": "5SkWHdP7HWFTn2GzhPxqgDvZAcvksnC4drhYMvcTxhWreL4Wg9BgBdJSFQxLkcTcaD3j4BpnbyEXTydMWvcPkQgk"
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
