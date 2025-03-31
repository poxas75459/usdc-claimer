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
    "4hPWUP9xBPvGDfkmA1xZ3sCkhstUox91VMF1Ft4GuvYY5PpcPCrMewTi6CfC7sD2YaaC3xbQHo9oVXzE6Ge1uAPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KhSTTNdCQ1ezXCHU9fVvUGupTD435BUJiuD1BBS7TL8i4tfx9fJeCxhoam3TModrv1mAUh4Qnx21APkePo6KYqH",
  "key1": "4uFvaSgnioVfxMchCnpmrDLokCq1DnxtAcSncLf6gZfSD3oCinrgZvdUuQqafwZrRC6n6yuH4hxjHjNSY7yzBeQk",
  "key2": "3ikmg2krcg184gGZsKPR8Y6TTsVKy83ZCDxYcQH4jiCSFeUK3pBeJVgQ3waZqXAbBJDzGpRJDNWmVUDZdMPNvtgw",
  "key3": "54DoQYnzxnynLS2YiJtq1wFi45zfbGzgeSsrRTTMCPwidvqaMZLHLKnLXp3bbmfh6ZrGmnSFpShCeDutZ7MQpKGm",
  "key4": "2k339z1BRSuB8CnZQpC1DGaKByFB4mGnuPu2qsbbFMxhWVPNh6HXyne29E6U9jwrqBUzNgwALjWqms2DtEKeZDYr",
  "key5": "4PmJg58cSxs73UjLNiEA5MU2vN5fApex3qYhVorhsLJWeh2mYfNzxB7LiKr96xtCh5qvNp3Sega7riBc9KdB9PZ5",
  "key6": "2AnwhgpLiAEVDVu1Mnwc5UfrqjtCV6GpRLSjYaCRFhdpfrU4TsRXPVrkRPkTHsiDkdVK3ht7c3GxPXoCeXyjcJZc",
  "key7": "4qZ3WF1AY7KECajeJz5osvUDUfbSK72RqLYEHZWi5h683VgvkESfFTdswQutqcdG5cG5gq8bZsVC4waEyjnLcX9Y",
  "key8": "2xFZnHQmdwzHpZzXb8hEvjJsvDbP1zLmm58mrTNeBGZh2z2rska17JahbV3kV8J6Ey7xjFhKczNCgEv7w7qwx4t2",
  "key9": "5Vf5BrYW1JEW8qjP2z21XwaWfGzWsYWMztFA4cbKxWJkEjTGiBUfYJBjohBtkq8aUb2af7iJaKU9P77KsHnXiDBk",
  "key10": "2j8SuQ68WpjNvuQzkbzxLzcY6X66JAV3A2AMuNWcvwzMTvWSx388eLqozC9o3XijBq5btZ32D7uDqMv31JsSG27n",
  "key11": "5XmBjftLcQNRmAtHfMhgB8SfCoptBdweEggcqzB9ahMmgvgEcnVF2pof98vDkPXunP1cGX94TzLKUP3WRRscGcV2",
  "key12": "2Hs4uskuzymMP3KWTdzJtts2ox7yrEoTmCheNF6TKzgLXMniBCeMwN55ow321YVA9X5t5vZW6JEJ5QPikn1gVwHM",
  "key13": "3Gd359et1HwyHHMyiH2iW7XU55mTBzy543SaTufWUJoudezD2zjShmK5XiDpRUXfk2HPSvYGcsBk335Erf7eBsg4",
  "key14": "2p8GyTapwbPs8c963FzButJMWeRCg3dXkTQqHWnHcRAz536aELxN2Dr5HzQbcjySTVnQM5fKwnL6XLSTeuKZWS4D",
  "key15": "2BoDPv54wHqbnnzcB5swkaUYnxrPvsZ2TGHLau7rJaiN7mtzrpjkJ2rX631kNpFaRPFa9mnp4bavJqNrSo36vdhE",
  "key16": "5A3Y9zpbW3XpJHoPvv6ndoKdBjoQGKZ5K4z5KzFNDKR35E9L8iC1pxsptzyt4ajwTL148qZpbYxZMJPGuqSNZHKB",
  "key17": "3DoNta8XBWwU3Kr7Be7gCbCmShSJaJ79GmRvWHe774vwPMFrMuR56HKJyZiK8vk8xyZ3nQmMxAzwseUqi3z9DKg2",
  "key18": "4SwvDk4FHF8AjpMPcJmVxjnWGQBezGNc14zC42nANSoLv98nxR5dpMijmC9SNoRyiBU5Qc3kgJ7iE1a6iDN9HQww",
  "key19": "4SaPe8hB4ND8PXk6hie8TJKh7W9BpiGHPAx8wdVd1bkWkSqzCeaE2DoFuHkth2DMrgNoHStDnDbSKePqNQXbAMQX",
  "key20": "4khGXqBr4ZiDMAqtzbN2Zby41aXQaLm8VwaZZYokpspVDaxdK8PeZ6sZgpALYcd9XjBKfftuQadk4r7phyzoDD3e",
  "key21": "2GBSGNuSybG7E5ZUh4EPH1og5ZZC69kr7wro2ntuMdPLStFWJWTHd4d1paezAfXynS6EJQX5KEFarCHbJWCdvDaJ",
  "key22": "Ju7GEScPLyBcD9v5oZUfQPzEjuSxV8T2fRw187eDwimkXSNxdeem6SLHVxxUuPauzWoLFEtvafCAvMwkigyzrkC",
  "key23": "434SQgSGgxrtvrBBGWiJJqMkJpTLsvr91vuMuMrhbViis3U8QV17JwKM3ZaFEWy62NGdL3nzqFrUe2GNsKDX2Bku",
  "key24": "4Ag848gTqRczM2ZG1B9mxPKbgnXYz393KKBnLD8y83sV5rpzs5sFTDgKqhMqg6pH8D4E4wGgfzahHNdzpYskoSwr",
  "key25": "2ZYsmra5RZTq6KDK4ncFC5b6BZ7KbY9EbHSa44Fym8Spe82n8evfbaTSPt4jGUxesSs41fWQQAFTyZUmzQdpY4Do",
  "key26": "5toY2QZ5EVT1a8f5G3UDsivs5a4trWE3Ca7xHATQvhiFiSZ4WF4TFiwNr7rYg7b7bLVkHhFMb212BCXVdRRFXZp8",
  "key27": "3Jha2hkZ4t9xLjg2Hjdd5T5jVoQdxEjQSnmVwMcQ26Db5NsnaPqt2qVJRuqoDKiWv7yNbWHcS4rex89KokCFyq9N",
  "key28": "5CyhBxVRkbDNRLEH9CG3exffeT5A7i5kDkpCUCpxCiZSBG4KPCQMrLQfP5zWT52JEecuXdStTtaGjRF81V9xueRP",
  "key29": "d7oivUmwfw32e8NdaCzC7YMdf6yVRwG8aBYoK5TwLA9DkHtte9WjFnpNoYvky2QPK5qc5c76aBWxNbrqECdhKzX",
  "key30": "5VrienyFGdW28nxrKbePZZ1F2NjEcmvz5uz3LBgNyzsbSnyP1EoAdMoGHjbTVkdC1QaRo9hU2PGgsReCeYqD4s7X",
  "key31": "5dwEMDt5fsFvdgMFVHdKA7Cxb2Ytd87rTkVoUT9NWwAWnUDCe6C2GChbh2UFHMtGL9dzCpquaHy9d4VAKsFzec1o",
  "key32": "Ls5WevSgVBhxZMMoS21mxdKKdANxQ986VPM15qPSFiWaGqWdRoPjPHYvqBSkAc9kkQ7KENw281eQjuQ8sPd9Arh",
  "key33": "2yExFZPwXntDpiZ21MrwXxdk45sBmuvNAMePPsiZ3JYJdM6yMrmPSz9TyMErRG1EaTFAKNTdj5s8hjmWbNvTSzJv",
  "key34": "4pb5r6CXr4C3n5WCjWQwe8ZwDTtZmVys7GwGQxTeNeR3WEJ3rHA2HLcQd7XVQb7MVBvDowDZm9xKvc9kHesijULV",
  "key35": "3PkMtgjaXY85BYLUzUryydPDGUHazuPskdurzZmJoDtgHyjwXTbigeHcWGFFnRH83bhjzn9hFvDLoSYNdmtdJvtS",
  "key36": "4kyhD3ujqx8x2X7qLTgv6tiNgpfrPZuy6QBbqdJG5HzxLQ56T8TMpCnnZtarDbG1Z3JxcGNmak23jyqapesQ3gkF",
  "key37": "3XTFWUM7xTLUgc7cU5svrYo8PMFMJL6MTpf42rMvGj13TCitS6tmgMWfGXydApiUYuEr9MFaujCXxwtbhWd2PoC6",
  "key38": "5kZDmronxKEZYeWNpMd9CDvk9kvPRoJzq2Ya3RcmvPFFdJ9GZCuFc6qQHKyGJLL2qFtmZLkKwmAqfdbvYYau2bUr",
  "key39": "3CAvZUPJ12gpSnmW1wREq8BY3q1GaXnEtyUfbNhv924r5fAiTgu55Vq7thPYbSXTEQdM6RXoQ7ktzBMaUzCAZGf8",
  "key40": "5ffhTis3hLmDWSaXLEJhdyB9xj1tSPqJFqrJNwmTjjzmbEha5nS9Cmx8bPSFHUAYCyfhaeGHCCyTC9fd7ymHgoF4"
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
