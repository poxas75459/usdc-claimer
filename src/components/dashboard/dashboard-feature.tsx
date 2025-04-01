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
    "2aGx6GtcyDNV9t1N8Zj51ZPChsSiKzdskjuQatfoBdM9bMZiFkbs7EZ3iKBy74z71r3twjfZVoUFdbtZRFSeXUYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsL8DqgXPVHrLrkMBsCfwwgTHBcZnCjA5WaurmddYunDh4gf9GtrLVMMdqmX4wAoEcbdgbtqx2B9cwhBHFHbeRQ",
  "key1": "4iLSuFu3fJSn4rcLzFeDaHKAy3ef5nfPhQJHi9DAadwBMK8FR1HNNp2vVBZ2Edyibz4tdpAdRxdYSHmhGPWWKMtU",
  "key2": "4RQnWo1EwEp4AdstwjwL3c1PrQAxtgFLirA7uY5iCCkhrWFnRQykCMJtgDkpCopJ1s4P3wV1U8ZM9d7zkULju8wp",
  "key3": "2htqAC6AfDXJn3uaWmKaN5A43oCmKMhKXRFSHWzdbyRq6y9eJyF8ZJiS1JQVaP3obXK1qgStMhtXyRxyVnFRN2MF",
  "key4": "3V1g6rBg8G5xhvxGHokw8QKCip7NPMdfdiE2A3husD27vZVkLV7b4hDTEW7Ec3EjpgpU5xb1SA83WrdF8ZVsT9uV",
  "key5": "5dFXnuLjdkjEy6vX7UyLDnDJhiR5Lj62nr2PyjAHPfQjepeLL5DijFMtZRVNCvVTNdPkQfUYZkJEbQCLFaFPTY83",
  "key6": "3UPLzvUkPoCManHf4EWcur3W92QS6fJRGqZZiswzxiQbnaWAfFmgWDJMigVkQRBYaTojQ25NvDtV8oBAGy82ft6D",
  "key7": "5TB4J26fsVFomiPFdxR8vEhAMqaPyzTx3aKA9U8twFvnimzGRmFzwhNpnYtLtEHvwFgKEpPQz2yV5d4DVLiMwUVo",
  "key8": "5dyTkjbPirsJYTAR8swrrAfrSeSUK6ZH1nnCr44L9hC76kyPpCBitNHhGnq4p3cy2ftMhpBDMM3bQhTgpiVLTTtu",
  "key9": "4HbkEUXtd91UMFzfsa93Fzr96LYkEFKQVYEjqgtvKgJsX4CNqjqtknhAF9WEUTN5v2EFAvZLsCLfVAtMpmptFGvx",
  "key10": "35U7KQEvt6krv4s42SZEvv8VYx6k2bzXgFyQ8JCieu9DvM3M8LETYsUARDNBHJKL5LzQbFp4Mnc6YSQ99pCXvQ1h",
  "key11": "VteB8WgxgU26s1TZYMpcUfA894GcGR1dY9cLkRo6BBUjoiGpmN7uGUhhBPVsuPy1jyFSjCv4H4YWRx3HAUvbzKq",
  "key12": "aHDDS7dKxLPnkp5gZKKSnFEMxoc4VUTpjoD65pWfPQWFwMjrCm7hWoHW5MYesEafaJR4jyMzPiFeTogntiV16SQ",
  "key13": "461tfgXe3XvhuNNbhgjfyUdBbqpgud6cLzu5S5Q9THxLh2rfKmJgBUJZN18B7Sz1twv5T743EEet7WubrFEXXJJC",
  "key14": "61WEcvEjESEfp77Vb8A8ExFMxi9H893EC3X3KGtH4XjAohbxge1QVjxgpFWiqgNLMbjZrGMsffjJh93nH1keTDNE",
  "key15": "65aLTjqdy3dLFkZi8yRx444n7kZoyycNgVxxKcgmL2wDBotWUYkgDqvC8Lwf7iYbFwso3MLLKtENnwkK9B6HPfg1",
  "key16": "GeqB6dxPy68CKm4dkXLVsaCf3fqg1rWy2VFajKHDriHicgZ7EJjt2etqh8TaFcCSEMTis7Hr96ZUosG5hrERT1s",
  "key17": "2oh7NuzxKhEPvuHTFFkBoviDoBrGYf6yscKynZ7pcxnpsCDxP3PS8Nu2fGLKFmqeBmJwoSLyN6qSMASrMcSwGX7W",
  "key18": "4rrk28vMHUMJsYtzFxfpNZbAktUPR5eVfKA8Z7em77AHnL3XQ5ohntMUPo35DsiMXT2L5894FC4CNi53FDUpx85S",
  "key19": "5oz9LMz1HYZLEeyF3QTMzrQEejmGKDVEfBPBHbyK3uDtvpMxxZxmcuTsV4KdhDeSvjdpDGEWQsrEvTHe4L2e7uRQ",
  "key20": "534saXHVubDkprGrnqVJiRiTVQR638NG5HunGAZUtYAkxsqN1zjFboUB2zdQV9AVQbesBqZ6T6NHCWah8sevsrG4",
  "key21": "tjbz8qfsF4VNxVxdUqqGC3tdJ4jSoY5fttYUCubo3dgGvjXnhXisyBeTDdAvP7BKMUt5DWeD6gmKwFWMaqBevk6",
  "key22": "5YeJfr4d3uzsbs4xGLpck3S2eUf1ubaq3wSpF5dtm7NLu7pNjqiApZnAiuqqkfheaRPJwhf9izZxqsm9Rt57C4qH",
  "key23": "3YG8HgB2qqCGyJd3eRdfjrUFAEPbcQuE7ED6RbsZyocKuXypt4qTr6g5ybZk3kh1y7Xdk6eQ1pZApZpbkwuMzWw6",
  "key24": "2eAs6mee2WNwM7W3xmQHbzdDJJrgVfgks817L8Ri8P6BoDrHb6qzowHCYwmQgmGvuBKgQQVmAdptHFDhAuyA9nKM",
  "key25": "2Vhj7s8x1gJguneqTdecQiDuqzWunVp14xJYP7hBytrE72WzfV9S3dmHVbRKwoYp8r8wvP7XtQfcKyQfTAkvtaNR",
  "key26": "4dzviGo8r7nikF2MepEHSM8f8BonSjyxsL5CGymk4fnamPdi9FDZPUAPpXqEdgqrxsww4Y9exas7KVdatnd49SDL",
  "key27": "3DviPHzHzpjaE8tLkjQhw78GQhofLTtDeTFmDViYPm7vxeh8YmtJEi9KhpyfPqL8eCmLjAPtyXMyt245iZGidNXq",
  "key28": "5kS1jULPbmKkjH8zEzKudeQdxHgR456wh5kpeX3vLGPZR2dsr9GQ6inGw69Sb3FFwVtz5sSxSV3Tdi6kKW9NJLB3",
  "key29": "3xbHHThoZRST5RgAh9vWoPoWPSDw1v7a6PPrKbny3u1FBLhbGLvh3b1o7KYnRTGjVaKQhq51eW8ZvFpXYzfjxk4Y",
  "key30": "4UnBR8VFawhQVJkjaDhHrscNbqjdHyzvPCC6c4DbaSpfTHV2UKnHvKdU9pkzQSt8yXX1PVsuT8deoBohzjb2oRYZ",
  "key31": "5jBYhQJXxDi6gH19ST9rPrZ7Vy42SjCL5eourgC6HaoLNeAW6AuSd6NPqqWPzG6kT5S9ngJLt6SXu8zq24VkQVQm",
  "key32": "3qPgUdMxEQfWiF5gVLG8eftUCQ44hGqzLC4GCT2aTQk5e1CqZqRDQ7JAYJSubQguJ1uEbGwuYpDN5yDcnovRrXbt",
  "key33": "1nSDGc9wyptktyxJaoX3j44FT14ECMRwpZmvgF2yYPVXagQ1AEnj2rSrqnmq8P77TgHn8nejSiwegxLz9FaMSR1",
  "key34": "3tDwb7RpeVQo7gRQP2C1m7i4nzEdgYnZZYnMzGa37fmHCLPdNoxS739MLSXhuWyQ1b4BptHGCJfZh79ppQy43CmM",
  "key35": "4M5F3bpt8Z4Ay7Pr2XsuTRsqipvTLBW7j3YTvSPE5t6NWVcDtcVMSojh9VzgcADdxdw3tgmvSoyhzc4mrLrJK9TF",
  "key36": "4tGVPmzusXamdqHEHJDQ1C9sWzsXD2jARsSaBnJgPcBejCYkvUvdnwsqaBAs8frjcENFAP1VS7riu2Sxmuif61cx",
  "key37": "HCTy4XU1isoVpc2eKgYEb5wgdkHFpLK5nC7jLFczbm3SGmemFtkzDpw2QeGmDu2VWrNuzaf4cWHvjV5cYsj7ijQ"
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
