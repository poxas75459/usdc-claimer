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
    "5Xg38e3uQZUY7RWYC7kxk1udvv2BDMmHJ9KXLJ9pqkb3TN7xNZnwJ6bc7y7JBogYP8C3KzQLe7erYPMkinATYAHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SwHN3vpXX9MyivYoUzg83GgsHjcY6y4qGAso2bhGY7ktfgvrrsrtNiAor4SrGpcXwpevp9GWkkYGT45uAef2xQU",
  "key1": "Sw7w3NqeYhJKdTYazJ6TocHJcFzF9ar1V8ppAJJTczaT3JDCEeLzB7Ek2hXfkNVkaKvAmBYzgm3yFrszw8ukUPh",
  "key2": "2rxKBSoWDcifHUB3vy8pRKLwBrNNxa5RKSS8XWeAsty8ATAA47hGYbiQShbBwT2BcWYDyLuzrvR7Pf8MPqsmzHHD",
  "key3": "4Lx4b9LDYyyZCxfvFX3roHbQEjgRw2qVZQiC7jmdqRq1BZ6Mq6xYk2XejRc2v88gKyDxvLYWeLPdMU1MbftZ7ULA",
  "key4": "4a8wSQRGZjSMqk8zde7apqhLVu3rMJjDpyqkWEggeG7GKyRnvga1qomw1D4yQWWW3FicNCTqwiR7uM8oBeaW4UJy",
  "key5": "4V6bnaqhHv5zmHYtALry411fq2pQG79gdSD6nddYALSwqVe9bMBXxvc8nP75XVHU9NtbjWLHfXs2pSTiYc4WiVos",
  "key6": "2HrwnYAdteS8ooEcZdV7MuaXmMdPaftAGkSictbe4yzvwZTdBZ4kk5Ptr6fJjMhhXmJK2sXQ4JdQS71xY49r54c8",
  "key7": "26Fr8gGhjxth1nETA54PfRDMiNu6EM6kYkV2RXhaGgBfq5JJ9aug2yZK1oPLAWpxJ2pYVHupFLS3KT9qh51GYjvV",
  "key8": "5JMBNEwUDscUKJAzUTW44q735SvamQr9ZWajN4EmyBJHWxELYuvBrb5jNfs5xmbuxubrVoKSR2GtGvLpCXZzpB5J",
  "key9": "55SwhRf5DyV12vNHSu2DCSuFScNv7KNyz94XgFTdFZUZ5qKP18Zpez7TE7fmKppgB8QZCZN5my8yKo5rjgDqwGqJ",
  "key10": "5vdVGVBL3dKL1BqqwhXo26j1CEAgeqymQLizA3kgr1qq9DDDipmi6saKss9UyuFdo1MzNW9fD16ij2SBxm8iBjKL",
  "key11": "CetH2Px2fUtBZ3QgrPNT5MKAjTzsD8ibAGuWbWf6CLPoJcSb2ddj3hYAed63CBvKY9uLNuR2ahx7rGWKgQ2a6ad",
  "key12": "2cLQDhiiaJLd56ERhxRB1Jw8g34sEPxRyuPLtJwvwKe7Ng2FhV852QDehvh8WUYzKk8haP1QCjiKRcs7d8B3399L",
  "key13": "vGqin6NAFNqQRhhUqsP8yUBVJjhTQbMNfe1cBWU5mhxpd7pzzwuvW61YhZM9PVzsKc8Fzqva3BPhNF6nWn1y93x",
  "key14": "5CLg9Y7iRD34icD3rz1mtwgxzA9W558dHevdpopT3qte546ayDxcYhWDcV5cxvJ4PnarANkDPfxGb38LxcoJF87o",
  "key15": "8dRpcjnLKXQG9mvuGaxDNCQamwWUUmhL2NqfJnFP4CLxTrgrYk5YVSRsdPpJAqcvU5nkm2e1nrtaHW1cSZGP1Xc",
  "key16": "4VMp58cPdeVqPH3494MrBha2yTxR4zFReQdSM1MgNGRs1s7EeKLZUjJLpmhtCQCYUKEjqboVCxW3YtxeYbrt9Ept",
  "key17": "521vU4LMtSeAAMDgL1zT9bXFidB4NiqS5q2MqMZ1ypm9ZgW6ctEcupL9UjZPBPHtR4QRGK7WFmqpqPTncx1QRntS",
  "key18": "SvmPe4YuoTXEJY6nAzAFGgBn49B8XujAENPtc338Ysj25ggDpkRUQ8P9qTcRBhot5HkpCnt5Wn7a5jy8vy74ejL",
  "key19": "51HGLDaNTakF58iPqDLu4iWSB8b7Md1cAVtpxdDBfRRxidcwtpAL8LtRZnv6XznxJUSrnJ3kcimy9YXRe8nDK68o",
  "key20": "9wziXDcnYHn9QejgyaX7pTQ248wyztjH7pwubmHcWK9u5BCXHz2WP3JtuMbZUC3GCEMXxm6Ddwng4sMiks5sGMn",
  "key21": "1rgcBcdxqhcK1RHLrJaZNbMNPDeFoEPsASTMWcUZhHhCQPSvUSZxtQ3tJa3PA5Y4VYccTw6DVk2BuAv6YPw46Wm",
  "key22": "2ZQFLETERXo8WYBnaAVDru6bdh37bVLijHsLbBabSi8FX7mjR9Fzs3kNNoPcL7cjCyvtcvZGyjDbAbDXRZ5vAR9q",
  "key23": "35A19WMgMXC6y2aP9aMytSueWNUQkJxL4PNVeaX7t7zX5A37vcE5YsxdoCVcBZgrJFikRHi9qQns1Gpj1uhJyDn",
  "key24": "2VJ4HjJTAdjCSkuU27b6GkKzC8rpNAJv3BwfZD7USnS2aNVA3BkBJvq8rsKfsqK8bxzw1N9QwV9DhJMD2LyBoLDY",
  "key25": "467dwzeyfXf3wUS6EcpizSSaGaPv52kWGfUsYbA3VPb7vBNndZW4EeL9fMyD2ScSMUMsdqBKnd2E25KBUShjozYV",
  "key26": "4CBo9xfr7pVic3JWqA9gAporZXB5tFg8gcGBszbfZ7VFn3XxQ4ud5TZh9VJQdbuXvCHVu1o6hTJweuT3b5hePekM",
  "key27": "2Sawwhg29cET3wCiU7i6A1fyiisVx9REutHnCVVDhhC3D85f9mvdmioNTKFetVjxfNfbE3G6mPK3ULWrgnkKdwSL",
  "key28": "4dTogTpD39EbRvUCN2dtWrHgXTRdVVia8pHkPdQYKJjMtWREmEvRN8bz9Q7sYQVLUw7a4wyLZPs8cFd4bkVsPajN",
  "key29": "3HFpkWdyhRHdrHmTHUywqiNs59m8cuDuS8Qh75bL8P2N16zP56bzspsYLu4ibNrA7V8fnUG5x8ajaVAQADsvMQRo",
  "key30": "4gpY2J9FyS7oAJsh8giVebKrx6FUm5SRC8FCBJgY6rUnc3cw9ZhnwborwHhEcyCjszcg3w4cWdBUJbHvBkqBvGnM",
  "key31": "3Ageacexz7JLrdUmL78z4ohbZjmzyUE1QMS8uDiVTQWgF3CQdLxvTFp6s2crmyV5q2ACmQPgX9d6XDesvRZZE11T",
  "key32": "52GLMrnpnTh5FnDsymsrGiWZVhYCSgrxDfYRsug65jdWuayg2WFc2Mw6y8L36EQ8HzUsgNCff5F1EG8Fz2J7ZRjG",
  "key33": "4PhVERdLs9obphDEM2uLEUaRo7eWSNuF5Zme2CJxDnHUsrpS4z4kSByuciDVY2fqNuXWc79xtrp4EhF46rhgzVAN",
  "key34": "5s1f7LMVjvBuNchMRN31QpHbJhutYfQrVzzkYzjEUJ4cLMTF8ckQi9SMFShbKzrSpnwkSHWJ3VvHUGaDejMHS5uP",
  "key35": "2JYb1zw6AaGG2kywoA8SgeabbkSZJzpVMpSnUf6jGkHUyMZkoQ8BdkoA43eZCSoWHuBr61FvZyR83iSVmGLW8b6Z",
  "key36": "9RYR3fMJoF58gpkM6Apep4CHJ7DQYcY12YWGNa8Zs7oDE5oJAzNTerrFsEtX35KxVrVrAPak5uBmimAhFJQi12G",
  "key37": "4vrMEHeeeaAfjzS28jzo9thgJgU5harQiZ1TVUfW13rNtRvJVzTufJtc6dEfcKX4coKDtuR41SPe54tcQqpxp2B8",
  "key38": "4Qc3U2j6v6dwMJ5nR9QGj3KYWesKZ7d6C4zDAUDHfyXn9Szp9WgPSjL46rVGTEFNvUpDRSM4LvosftJPrxyumz1i",
  "key39": "26yTuZwsW7punBq8xHrJVDbgJbmDsLW3MkYChgwz9WKQzumLX5Rok2AUswUK7LkY27T8941Rtsprs2RsoZajaRtD",
  "key40": "3dpbiE9ZyWHqQmzA5pxc2RhmyjP6JW9HXEe3Zc9LqBochUS96LqeQzjGN3mq671i7D4cKeiquAUcBXqu6hRSZyvF",
  "key41": "4fNfkjkHf8gkYAipo7djVYS3jtQiBV8NDJH3uMY3XWjrtX12pMkijDRsQPxveSKW83JKuS9yJ7r6rK7S7GNoMSge",
  "key42": "25obzVNZPLrJ5Yntku1PBcC6qSuxGPotpzKwYi2aSND824FBLBzYLKpzveUsxqSEfNbBU2pqVRbTzHsNuMN7qwGu",
  "key43": "3EYpXfyYa7ovF1j9NBGDe8tLqCR1hPopTG2AUVGyBJdERgWw6gZXV7wmt1Bpoif6rE3kVu7zT1Ss3QriqZgxfME6",
  "key44": "3paYPTBZjukKWXQFPd59CGYtakcmHJzToD5wiZorxFWEVR4PqsY6gJV2NnXimkApbbUqmj47gc3KUgV8rYSkWdPA",
  "key45": "3GgmKjt3s4oCTeiHDrisbYA7hgrLcnPSNuHz3XS4aeezEm6ZuK3jtyVnx97UM31gYuQb8qsrqwbHbQhsZ67UV6J7",
  "key46": "2QG6dyhsGzutjVy9LM5eDRPLGQo8re8WswMmyQnmKDqkfw7vZ1M1AUzUoteJ74TjoQbnoqH9fngbGBktxHWRFufv",
  "key47": "4LzapJWS1GhYfd8BztsVgVGZ8bffbXenKpRcWXtmrp78qjavUXFcHTSxkbJ6MWycEaLZJfnFQFeDEFva3eseX97L",
  "key48": "3XFwpxxQj17ZbvjfbG6cDrdtTTK1H3j7rjL8ZRMkU9r8VZjuMdAnmYPt1uBpdK2KNMe8PXJhBoygA7FkwWF5oaUX",
  "key49": "2cSwHAA5CCC1WL4MZnsVzZ9x4VzrpsGNuiYBsDYyPb1i7tyyvJAH8Qp8hMs3zgjWuqXDe2yzKSrHkQfe7Yc7Lh9N"
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
