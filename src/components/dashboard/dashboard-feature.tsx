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
    "5yG3gJEGLmZx6tpjj3PNgZ2HQrQ7g6zYJZBqod6bh2o6pKGnhWZSA5mJiA348jDDkwxNdG79TsEuSffPBYjRb8nv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQLxGQtG2jeqneo4bNne4dTvfKaj8tfjgbPPTmjR2hASnUBgyVP1tbNC6PQxvKXQvzvNfYYsxwmxnZSrhAxs3qi",
  "key1": "3yQy7amptZU7p1ZjaHxTyXpEAJwMUcKi9a12iUAmaaDdVj7aQhpd4c3uAtctvYDy93QmQnfA1Y8kisuyytaYhYNF",
  "key2": "3ZMTCN21xiCc9TGiYPQdJbdXT3aGvSGuQZ98ZSYpzMUDmjCJjnVM879E4yshoRHhi9oSDtbsNEg14pcqpgayPpTw",
  "key3": "3tfmtsGpgVDHuB8dH2Q4nPswyrczi7nHnXNpVS7CUa24dq9ipM9Zx6MpF9GC4UpFZu6gArb4o7MD7boa6cJnbWN9",
  "key4": "298ZHNepJ239vYtcDFjsD5qyJxNqcMSiZqW4dhwyUA4kCnuonodAQSVnRp8ZSQrrwpW2EdwdXXGkWi5LnuMPQwZA",
  "key5": "4bhSpgH6UVEA6XVqxhsBpBYMvir1NdpHpKenyho9yjuuYxJrEw7FWjiX7h5gwWTCsYTMhkTsWXTVqjmd8T9D9zTq",
  "key6": "4Mj6iTsyTcrLrGpeyNbdo9h6zQhiRmZyY7XP5w9YuNuPKA2K5jsiYSFdsrjNnvP6RH1KqY2VtnicLvBqWe9aSAst",
  "key7": "3wSZMYgwcx85kdaheBEvvWq6WUwNscAvehotL63KzNFk6ieJc3gZWDrqM7fcZvckPsaxw97eCTmydNUu5xofKxgq",
  "key8": "4Vkp3X7WFeREWvyn6PemcK5RaNFZUbpSHuqake3244wu2uAE5X4Yp1ix5cibhLR3RUFoyfEeKSD2G7NPvE4ozcak",
  "key9": "3w2RRxPyNG4NyPJXjd5EPEEdcVJMs5cqXpw7QtXxuwvGyrq97jQoS8WFFsuAsMMWRD5ZdBmANjgR4iocgiUjKQn5",
  "key10": "5KPikxLbQpwCuZC8TdY9VFQT2C5FrHsjGo9X28PsxqohnNAPk6K8vgzPpBnXkzriLVWvX5SDWX9MsARt1GEB22ai",
  "key11": "4Zhw8mrNkhju1Y2EqFmHkzNPeN2TLqoqDEk7ggGWiCup9m852dTdbL3qA5XG69DrW7Mqg5tq21ByN5AjLqhVbZT2",
  "key12": "Lb9UPwEth83xUNT7kpVsf5pDeyG7EpAQ8xL9LMFcd5g2mMgYoShFvcVs9ZGcF5tTBj7ozkFMQf11XAELTWitGez",
  "key13": "2EYQ8eHzjwmyCir3rCaYycSakUpwvvbguv59EDHfExMr9tnUPHen1MBp8PiCMCAKyNt87eYtkittcZwLBgy5rvqz",
  "key14": "4w3SfZPh1JWZLp5xAqJyYGKR7nXn3FFjigLTqfDHd8SMp2FRVrc8YB6QjmUndcbiFcbu1TUX1sTSQep2H3cp4gDb",
  "key15": "5ENowCqi74wdKSMExcYS8oGGDZm4gsFCuyXGAZeMUFQSQ7sidr5BfjupzHn5yK2R2d7CmywuJtny1zetb9fFhUZX",
  "key16": "u5wDsY3UF14VVcYTjw8ZgDmzownnhoLiHEcLJdmiGgcEk25TMpsEoBzY6Qb13styfKWghAiXR2GVausNKpXecoQ",
  "key17": "5sWH5jdZho1kajJth5ZgwVGBHxYN2bBXNfXPAfHRVAdbeW862JKNGYqTR6Ezohjani8Sp84u3xE36rNx4R1Z26bU",
  "key18": "6DnRkiW9kxPNHryMVPEypbEreV1teeMhrn1SFV9L9cd2beVeq6htdwwwaYETQxfeCfSvsWQnhxP11wBQPzrnqfy",
  "key19": "4mnZihoZp7yMc2Z3QRg2DbHT6fewZX35Q3kvwaYjZEL5XcQu12fFLatCDSt5sAnnZSYRhNNG3hhKp3ATacBxDs8Z",
  "key20": "kL9h5tK3oGDLnJXsdGwYS3YvB1eoQx6wT7Za3Tg6M9Ki5HoMUz7RN9nXKhYvo6SX1VBbBBYfByFA8hUaNLFMX7g",
  "key21": "5gqrGJAPqhQCSqqEVBvYcaS4cwiLhzfBHerhnrCWuVmWDTe9yBosNzU1m4dEHs2d6QFGU3Wk616GcwCQ8gsEn5uG",
  "key22": "5aYynSvECueDpXMxAo3vSZqbHKSmfg16ZmvmQ8D4N2keFfeCwhYXLjfoy1VVRibmLA65kxBvu6BjXp2uCNTYKJKT",
  "key23": "5eWaKMmNqSCj6Be5pM7XaDwHqn6WHi29ivXnNEXRhHK9vEao32v2ek8nWm87L4BiD5FM6B59L2Lfy9cXEgTWd4Fw",
  "key24": "3iQQbq8FoxFSmkUU8x7Qym8QvwbEx4LNHiBbPQsSGz1XrZDWu8MctkNuUmkUJWK4iPa8d9poxtL9CTqtSYv419KC",
  "key25": "F2bax8vJb2yFgydiDP4B4zzSM1dswiGqiUWRfNXRngGAdqKj6QEHTb2hBXjiF82uv2L6GaHoaXmDCoq8AK2cmE7",
  "key26": "34YA3GJa4t9hZom3st11sAi7NXedYscH8mZihiH84wu4yufvB5uSvXxKWo1EWyjVmtdqVtfpsFh9YomnHD9hyWh6",
  "key27": "EhgpbvPjhfSCVhUd8bNGd5WNgjEG64vZPBz9M2CV5rLNYf1n4frCB7xN9zurvvyVe8j3VdFYAeZjCFT9gxqk7Gj",
  "key28": "iwpQKKosVuHBZnYHFC7atVNfHuNk7rCqDRTHva81KVVVM4LwRA2DiFUJw1UUoKFwz7aYZZLrBKwbMC9kL6jYz6n",
  "key29": "5ANYZjoAjhf8JvP9m7FWLV5afRS4rJenPE7eUnKGrPGPTXrwVkuuGihf13UNYHCXoYZDonBpzSfCWFnZY7GcLQ7v",
  "key30": "3FtXvYWe1VK3D41TAFEX1rdX8ibFAtN9dizsxKncFs9dNpNex2zDcgqTDSnGh3yDbrSeJ72h8f9KTeEyGocnmTP8",
  "key31": "A3gZxivatVN7Yo3ctqJ112D9dnF6TnR36tTD1qxRk9XjYmViQJxdePxBBrWAE3bNZKqvaCySaar2tgSHtRXgBDH",
  "key32": "2XfuytoyApAGQSAp4WsZKhyvqaRAgpp2KreuRzs2npzju6Fd1u4itAnLJzNiYa9u6jtWZaJdXtLNm4YXL9JubWnx",
  "key33": "5yD56iU3DePP1MhAZhVfN5DzUndCE1VPhTSHqKPYjKSV4Akc7c9foq3n7oRtVbaYXXHXhaxiQBznN4fwcCV8BHf",
  "key34": "2n7ABkgTivZwY3W4s9o8N2BCtF21bCszjtWHc5qFLjWNfUNvEK4KunCyQ4UswT2khmzak6xvvPzDfjr2cSAarNkK",
  "key35": "5mQkvBtKaypb2z3v2qyMDp8zNKRsSTidXYtY6DsUBEigf7vP3Bvpv2AJCUQH9VXuv3JLehTthacde2x5iLMNoKdz",
  "key36": "5qHoqCa3v3kju5dWpSRfwLjtgGC2Y4RdxFsmE3u4zNEg65KkDPMkjy9XzCuefTwZaJVSMKWbAYT88jfTBX1Stju7",
  "key37": "5DYWW4oyVsmhs2zDhMfoJoiRQgwbWPUgkJhZv56jyq1cPzF93gtdNDGN9YTs33NwRMD8SRNKheMX6iVKPCRNi4jB",
  "key38": "2PRHPrgwN1B33MQ5qTvFPo4B9MHyuRoyRD1BhaM5N8RSSFw1KaV4SmM78Fs2j1twUqiYa6JZXpm9fknyZYDuHjDC",
  "key39": "53JGKXYgrbh8mWyajcW7KNJe3oFi6gzFuJnmayrLdvarxJxZpcNt9LQsh3u1DswkTaVZxRHYezZT5pN9ovrXjHMX",
  "key40": "2KFr1eEsX6gZzbYb9B2tb2SnZzku2XpivBmHfzx98W3rvP8izHcMrB6H3iGqs4wUeZJtBiLTft5Z2sQjbzmdWGeL"
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
