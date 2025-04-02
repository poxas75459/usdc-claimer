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
    "5wtcz7mq7SSkBf64FqZoqx2X8MrwjF1mtWML2A7EB1XFGrsoSoyQLH4b8cMgvSoRS3C4ngG7z2a9hRVyzsUHDyTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65rDqT933v4dbaGsYUwTyNZ7j8ETVEpbaVDtCN4nnSkLXk4bsAcYjhPpLcmC6gVr6jCQe1ufM6CMToegoJ8PZPkK",
  "key1": "26nHRcgGQ3Mnjp56XDwZ5dLoTSpgQKxXXF5BLfZaX6EYRmMedUCb1axsn137XM9aLMQpEigMQyVyqfvoVKtU6zM8",
  "key2": "4BR6pKoB3faJV6C7fDsZU7MQroq8LYbqcUUB3P7fjqn92aZHA51LgRt1mfrPkg7EtQReht85tkmk9qPv6L9CsytK",
  "key3": "35EqCrcHE2xmBXNiz1Z4etJQVQ5jBH3kiFsSpE8SrQeLxZkZFtTKLL8HkURByz682Yru7U1c3nXaq8wDVLhboSDx",
  "key4": "a8prsXHFcLQfVHyqqpZ7fGpgmATaRK22erofwfwUjRfHwwnywrjdNZbR8LMEx4J9xMbPeiQxdWkJnuAXcQswiUC",
  "key5": "3FHFvGadGVWd3DNM315HZetdMTwccSdZroDojJULbGrcMpZxp3K68hi6w8spaxfFZQroTq54VTKR2cC2HKSybzsb",
  "key6": "4dHmvG2z5KXBaPRwsZeKJBzb8a25rG6X4UL8NqCpC3FRdyWXR7ZdVCM1hFmp58hFhLro2ek5tErRPPfQJ2rYCeTx",
  "key7": "3kcGUNUPcBVC9KazEWtZSA9Eq1RGp5CgsYXMQ3YFvnBZ2N3ASdbrWKKs49GMdr5NctxiBjPJvNzevDVLzonyaekV",
  "key8": "53bDTk7QRupg5by8ZMvy6PZ6tcDKHK3Rtqwr4dCPbQAhfVJRdEC6gpv65dxtSHLP82u8ihMc3pCwpktSgkFG3zmm",
  "key9": "3PYobZWN8Lx2KTQioxcQ3xoMpBd8uVJxf8Ubo1iDZxLdmCjVdw1qhZ1hugazEJSuFtqv1rJTKaGfpZddwYBMPzqw",
  "key10": "4YQNZ7EHmgjuuzoeCmevfESv1XqgHki1FAo3NmH4jkC1S9TpcDYwpmdBi3RKYriuuk78zYWZb9c25cAtgHQcwswi",
  "key11": "2n92TPXWJFRkL9dpfjBHaEnQnsQFALLPD6c4KLcgCy7ZeBZcuhD7UYpERCuu1bFmVhmPrpeZzV3jkW14p87XKVYJ",
  "key12": "pCacN6TMAEutKka1Wf2dZvmzMtVWZsj9jzTQh81595zZp9BYeTF2WruNTGLJQza2VfDFuDBLeMcdDXYTubmcice",
  "key13": "3ZReg8kA1HYvCkzxGVr6YSZsgKp2NTgFmpxnMsmk5wyrfv9DVjfdCuUhdEo3UwJtMnDH5qNM5T7YNiSFQfihQZcU",
  "key14": "4vPktY9itNNEieW9WjGf4cR6T1Nwqm54xYoh3c8FQtoypeQvu6itmnz8utzbHKhEpA2ebp4J4UPZq5pttBncABRh",
  "key15": "3EcbRudbAH1cXqJshtqqy3dVsx1MeMGSafLUSSrjb7aKY9vSh7fmBAZB4NuJuKFNZPhER8qoU8DE1ndL4gJ1CJtL",
  "key16": "3E4ad2YpdomkQGHLRfKG6ooM8UVDEmi6PuoTy2GU7bfToKZfCcVRrF4TAdvV1U51bqdP1HHBcduSZTrWhmpuAUCB",
  "key17": "48291Chgqj4gZuE6dsDRyohw1Ris6amZ3mmE8VdynoCsB6rrXHWjdDATEjZToR1gQfvzFoZmgkvcyQY5kHoP6VYQ",
  "key18": "4TR25UvesA6gYad5W7PbQ9i2Z8dKeTVAxM29EBdnVP51F4gAXrvMGxb7G7iS7zBESBtbuwdYPDRpW3KXLsSsQqzG",
  "key19": "61rHnCTBpk9FzLryhxMEYH3DcqfXt15q4saDV4H6iY5wKXAgCReShiAMyHacuZDXzg6yJZ27PteaqAB8G1LytXKG",
  "key20": "Dxh4WxMpFrFZeHXbr1D9FhEXPtxDNbvG1nL62fctLf9HvMBnPhSDzv5nkpbNjkKhqKZTb3EqH2t9Tw5x3qPgFua",
  "key21": "5g3ybo7PU3UG2Wi79Vdv6KtDW74BhZZTUr2D1dLNTj6hZxDMqBTnXhJAnDhoBaJBbm11UAmTWcTHo9EFYTYacboW",
  "key22": "2rTpEwAHiQVJuaPSihMvxLY77UyoydoRDd4ZY8VU6JQ5fo5gp3q83PAiRZPiMkpnTYDxhfxE2PAF8o2mVjjN1Cob",
  "key23": "53Ko3chamYgCY1EsvxuJiu98a5t1iJcnjSbX4wjHECLzQgWdnpHUxkMKn1jzriH51ciZw9cVXjWsXVf1iLp55q3G",
  "key24": "3ZKo1cHkLs7xvde2T63DGNB95Y65kKzwWLQhiaTkjgzQNZitxExUt1S9epTd9QbZKFdDp7oirM1MxqWMaM7UrK7Q",
  "key25": "22kHFCetodbq9QjyUdK1wU9YVB7efBsXiVyjrX22sn1FzpMqy4ccm2PWtxX6pjV4g9evD5SucuFAtTvZ21ybfppt",
  "key26": "jwPi4P2mFCEpr57znk733MN4GGUCLVsp6YxYPDiHwGpmJz66A7jVJf5Ba5QwVDgoXgsiZ6rgMVUpWzFWoc2gcrZ",
  "key27": "56BjvkSMeZcFS23GRWd8sPZxWuNKjUNNsNVKQufnnjMyTPmDPCgSY7tn39wBRayABmUmQWk2ecucNjdhdCmSUP6",
  "key28": "5qGRSY7VuiuCD5n5F2VyUyK6t2uqjGfjzg2RNHotCD8XFnUwht1Y1V6kYZFoZRosBXs1LuMGhzjJeLCNVy9YZ7ip",
  "key29": "5EsQG96Xe8wqpqCEyPU9eQJsmUDdxKYLU7Kcg9eHqhJKiCjHdmfXDiFCRAQD5SDik7NJLuQMw9MazycSNRZiFsoJ",
  "key30": "5MY2GRjLEBBbuL6BLmd47Gs6zoKqjLrwEE4CGAKj4xHg5cwDfjKxweE8ahujz7hP1Ev7FnPnKCdiPsLxSKzTo8r7",
  "key31": "4LwhgcSYKvzGQeH2TRnhJgeBRw6YLQZJ9dxszx6HLH3rXXCjAgFTcEELqaq7jxfaVv36zmUsd7ZwxxiJtFLrYjf6",
  "key32": "47Qyh4GnJtZvwnNmuWW1R1zdR5sWRgHAHKVAVjpfjyTokgXaStFZ6yJo322rGAtjYiHb5ue8GBwkeSbLuNZKjQrL",
  "key33": "4Bm54VWtAjuAyLaMQpgoHbbQbbyQDfKDcNL6yxHDmtWfGJFPRetY3wo6s363Amyu3XJquP1KukYou1q9BQ6v8vqe",
  "key34": "2fnjTGajiJY81ZoM14VcbeqYSLdHiuZW51Fw6jQknwGXED98KAZXp1p88wHqBofSULZYcyKGs83ihEDy3Yw6JWAZ",
  "key35": "4DHLFD2FA8TSrEpkoGKH4TrEcS9V83nVgoRG5NbNCGnNH9ug39fXy5LYNJ7wBVYK7m2VpYrD1VKJ8dfe8AKWTM4b",
  "key36": "kgveSAdukfHyS8qGm8raAVxq7GucBNkDGRB7MuxT7W35JsuJPq7TuwTCot5qsdKneGnpb12zfpWek1RsqMrcJuc",
  "key37": "4tm7f333McanYmjj2yjfQ9ZQY7UXSz3wNtodv5UbabVw1kZpvbo3q4GwCfk71K6HXYUQA3CncdRxyEBdQAqNmA3z",
  "key38": "3Bi3aJUZTWdsJa5TBjoA18urZooE1vgmTEhehu3EbBPn27jZDNwFPfGHFbB3PGn4vd3qGcue89EmqGWWSV8RWA2e",
  "key39": "fYXUzhfYpF7ugBYEpZLPcEPzqpjsosqx1pc1hGPQATMEmFvYWknCnQ3YqZDp1mLJwZe1wahvc5oY9S7zea2EKXj",
  "key40": "2UJCVtVDpHc2wAat2TduS3wtKH8AZD57XgLqWt3zA9C8XWtxBoEbVxcHf6xDxxnCSRX67iVcooYZHoUWgAxirHV1",
  "key41": "4by47wWwwckUZ4tg4TppEoSG2hxhrJ34qLfhwTm76f32zvAnc9aj2rXq6CPNX1spE8NG5BtBGkUBFTXe7fqcLBRc"
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
