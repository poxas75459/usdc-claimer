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
    "5vpvufxGqYZTacd7xo2SLmgZkuni9xJqmxcfXuaiZHKBQ2etJ72o3ZVmSTpLBPubUvgCSks5cMqF4sxR7qy1fDt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5regEvjKuHiZJaQ5dmS7yzxyGDVPs22xMsaL8xzRJQbwDimrGwNcA4J5XrtFnUJhK42YMTmAZCa3Xzx5qXpsCSgb",
  "key1": "bz2fmM5q6yxw6Z1hdLMCWjjCncTT8drui4DAmWi8qoHqPbACHc4ShwJy1SwGobWqgkP97BxCqnL8mXatRTJHy8y",
  "key2": "5qBXHYg3pTLWQDmyLvTWQsy8sqPzZBTmnBnEfcNVvSt3C8HjDWKb1GoSsDwofNHdzRSayr86vnKQL8LoFXBtTtv3",
  "key3": "5Lx9hGz7PbM4uMFE4j3m2BFrbogcoY1npSxHLmEfDDqbC6QAQdDvf15nbXHUuS7REEr8yMRDMmBsrsZCiGqpuc7f",
  "key4": "3pSdcderkyuDa6BRE7MmwGQceXSg5Q9S9Y1V1JKiY8tqi3rEbuWTZCL9xJBcx7gbji2ZJgJA75moVf61yC9m8Ekj",
  "key5": "4yge37HPxPfV2ofcwBwsdCJ52YYR9mnZLxnuNMBmzcF6jaW6ESA4RkGhvp45NAwNyaGQJZNbkhdoi2gPK7ZthRsP",
  "key6": "4tb11LfV5cWUHKcTwuuhMm7eC3wedPRdZmrDBgqMLKqmRUMe8PwAzLcmwUeSoFYSRzfYaqhQGj1rvY4JEG6aMvNG",
  "key7": "VHYSeMzejT5MhTyjtUNBjCHSR2tUJGbBq7LQrpcPr5AvK6kydVybdEYTS7oDeWvkZCGYF9w2CyyTLpeijNUmKXN",
  "key8": "2axRPmU5vwnXaQqE7tuq4kGZh1VS7Tv6ivmvigQDbK7yEWN5UJtEBCmbZMuQRoNStMdKs6CYZbD8JMyVSqM4WSuP",
  "key9": "5iLZ2hjFaduWhcBpXZmSxvgQPUuwB7f7QX2jGyYGBiB7BqL4e6XBgf8tXrBzEu6J4Rf7HcAhcV6kwebfunNAh65E",
  "key10": "3kefQ312q3vqcoJFk8tAMjuKftFaNEzP76ndE7J4U7ybCPj5GxC7pZ29sJojByJkVUVjkFZbbd7eSyGDRQcxF5hY",
  "key11": "FeagWDuSvhVaJtNTWu7ewvt4jHkgnfjvEGWAFcZfnW3P4SGmbY7tYwYyVEaYsTcaKEwCMXVEXtmBaWLamB6pCGt",
  "key12": "2yAUjUuptZVCGXDqVUQVuogjLUwYDSJRaah5sJfVNwko2CeANtcyMCxC7yfffUQzAqLoYL43cXHzH43TZ94huuYw",
  "key13": "2717v5kUYbPyXzC6ayVuHDBnXgiXMuaqQByHEDrDhaiekBeL6GFewN66A8UaQq3H1bdoDREF3fDJMxvaoPbnGa29",
  "key14": "4bgFESBT2XnkkB3sdo6MBN3wTcFrv8scdEPFW4P4rRB3vh21NnHxzK6JAB8nYsGBG2xBZ8ZKhqYHStnSrcpFgY4U",
  "key15": "PoHwqeueKD2hgHxry3CseW19SZXa7nuVmzQbgH295nNuRAUGNdxgm4LHNZXfyZx8pZrdbs7BepZgAVUai8qrVAJ",
  "key16": "3oA743eKQvh6hTn2T1gQts54UnKWhfP4FtFt3aMZKjrGbVr9PtokxNRZA5btH4GWapJNqe2PEQTeo1BMBfdNfxRR",
  "key17": "53LazxoUDJoa1vDWHfpvvCN9NKpRBZv3H3kFEzs7qaiXyWGM1aRkZqT1rTXdwcqjytcBaZgwFw26PDigifwBBWBk",
  "key18": "2sjBfkUjTWEXaHVv6rxu1d9UgjSby87jKJK1EDfDea3GVBqULYN1heNevUBqNCQhu2Nj9dJ1n2TMs7DMVGsWMtzv",
  "key19": "4R5n5R5CzunvsqqPdibdNzqJUjsXKCyprLpxnebWCb1p9Jy2v2HeVrjybKZMprxzUWgrEhp6WaZ3MwSVUoEmohaa",
  "key20": "3MQ4V26Pa4p2vaUnADBmrsCyfLS8A2LxHEmGVeKCL4Jk4uNbWepTQsUP5gmDbUn1i9fZYY2VvbqzJ1DAc55yPaGm",
  "key21": "8hhCz8i1rzLftgVkn4ZmNiKBk9969xg8sqsrKVf5ob5Pqt4NYrBpbgMtMnP89VvQVq6HwvCP998ABYy9fTFXH4B",
  "key22": "2ZVBzbmQsX2wV9GEvqfs5TRXAcA21Antn8d9GprEcNpj48dmypb3WUvRLTYDcZTihzyEKN9nCJPa5Ui1FttHQUT3",
  "key23": "5Htk4wuYtWQmLqkix3qN2K86NYS9HEGmDSR6HESCJt5Aw9MPz9hSEW6DxL5h9JaePGCcwCZr2WrnUfEXYfNMFLeS",
  "key24": "THuh23FtoCiU3tJCARhqUDLjY7fb8nhWPZ1QvfDGvanRRcN995SSCDNTBkjX3qwZ98c54ReXjg3CrHayUN3oKoS",
  "key25": "x8p7GrYdvFqzvHXTJphENor7vQWFKZJDjiaSfR7fdN3utZ68czVqT1tENgLvTKRVWrcCvqbzyayBRZLz6E68BCX",
  "key26": "4cFjWnJr8gATpmzzM14ofsMTbNFZQRoVWwwhEkFTpRzmpJvXRqcv4k8biipXYBJM8trjjFAU9AVdapYtZwV8xExC",
  "key27": "25CurjCaLYADfRdrDhB9WsKjdrSXPsSkfSo4GofBuyMBzPctvWxCoDKp2DEvgiFfgknv9SUxhy3tRSvFocs2NQtL",
  "key28": "3LQKNv6swiTPkAknGUYbcww39ZBFVbbmr67XAfmRSrqwHehymFjkj4vQP1tjXkXcYePaVBE2HNXc2u3bdaaVzaF1",
  "key29": "p3Z2FLP4FFBSuGuczCJAoCnE52qrih52sB7UV2MkU7tugqVMedHhDEa77BFY6GREXvFqYLpfHyG227ujzRaCzP9",
  "key30": "4r62gupqWQaQ9rrVCRUwbTzrp7BXf1Ud3EXiXwkuRQrLsa8qR3SYpixYZ14eQ98Set7kbNvmgmzrtiadzWmFL46J",
  "key31": "gyjRaxSsdX2eKmK8iLgZdnycmfhWnagkUzpQSgNhnkEAQPm1J7hnVHdRARvituwJphJuzHGwwGf6UV15a7KncUo",
  "key32": "3J8VZGZyKemCAyYeFNc8AT2x9QXpHmqPzWJtXBEAkFW5uibKecBofd793Uw1xT7gCMW1fT9YxmXmWfhuqzSNhpfF",
  "key33": "3FmZKyMeLMgCqAyzPspsvEHejG4yEvzfTPpZ17QpGNroWyCyCKkrxFdxtKkCWdc8WbEu7QUjqh2mGXkgKzuidh9i",
  "key34": "4yQixyYJ825gDaABj1C75jSxsRi97Q8gfPU7b7piRSv3Q4zSKmSZNEbkSVmsE7a5nfRakKWBHCVRCxyd6y4vzY3Z",
  "key35": "5YmG65f5wQWsmTVLigusADZP7LHasRQRdzTue4paqNfT8ctJWS1vmJVdf8r2dFG15RGrAArxhK1QKG3uG5F6CW8V",
  "key36": "5KHyJqaz49K4ATiHEazwwPTifyKe8kzXy61P6bB8jXBhMDZtjoeCvdRcfxZZyLTCsaiRE8HGothax2MSKEedECDD",
  "key37": "FkLPaLNQKmyQyhZLZLrHvmfetePNbtyNHbTVDwwoYTa1W9SGv5iKMfGscgWgS4edkgw2f69AkSx67X4quL8vTY8",
  "key38": "4jhzHJR5aGsVkvGQcA4D2PeYYZkYEdu7U2W941auCuDyh2q1n3csesp6tL5mmfiA1eEXFCEHC9CqREyqEvqBGVU2",
  "key39": "3q84Z7XBEdbyFFmmVaYRLWsSFe8bJQJxZfjJSEDHJpRJERiGx8rqjobwxFXt2QajPuKKgFpFcb7QCeizDhrUabF2"
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
