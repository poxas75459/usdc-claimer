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
    "291ten4hgWDvzcDYrKNgbu4U5ZbDbNY8712TGBk5Z94VJjnmaUYeCTnpSMTPMCW5hmwRNt6QddpPeXEUjwD1QqB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49LerNZd66xqJRpf9VcMxdvUu6j38UAZXTzXUAXmQdtrzXF7ZfkmTh7SSjCAhSYLJrD7Rq7Z8YwXMiD4yGD9Y8aJ",
  "key1": "efvn13AeSCBdRw9VpipyBZFwVGG2LZNY59BCSdMWFSyxnEUvNP6dERaWPMRqutRnK1QbHyh1JWfQamhoRKr9Nbo",
  "key2": "5wcTGwYxXLVaHTDuHx8CVFkegXMhKX1eVUscE2kzmtzYVAQLxqocny4Q4imRfP8eLFiqyTW94fAUmoqfq2YGuj2F",
  "key3": "8eiNSbF7SvvCNut2hkcuqCcGRtibBoJ6zVH29Tqf7LzcNFsFpBGLtk7PeJGbqiNDmeugqHjDXzecXXMdgSa3c8J",
  "key4": "4PKRuyifFjGxTZZ7yrkKNr4dbNC2Ed3XJsX158DQeaT3U9Dp8PSe3BFeQsT9nwk2q5c5TmAoGr7BCCwKD18ZKZkB",
  "key5": "4ENyiTyxp6ZSj47qSmnxcb4Q9iTRNgH9ms23dcjE9afLFDwk9SCr5hpj77WARDjMGHDBhYgiFjWkhTnSj1znJbke",
  "key6": "2mGveUtHLgngpqt6FtSR5pwcUC2XwNb9aPsVgpq2SKs4fGz5GKR5nvqJ4drEh1a6xzQaWnm4FdxpgCuKcoqv2ore",
  "key7": "3XVq5jyvnXYwUQPi7MCZnJv697DG2g9AJYq5Yy23FmVRwgvsr57ZVuZ7ZdZDz8HnqnnCS7yWhU5ttcojRqRapcMo",
  "key8": "2epKo8oiNvRdGCKwFsqsw63dkahBemhCqVhGBEWavPdDByxFY5HZrrJRNJhHSRQvvf2zDmLigZE7C8eQMQL2rfy3",
  "key9": "4QwdWTLRJEX9V4yKNpoxUMHfEuCR4SQQs2b5qDp6dLrNdAvV3xY7dSan15nE4czb9DWMf9WJadpNfve74gh4uPzn",
  "key10": "4JWuPWe9ZZvvkg4JN34FmoH21nBNgtB1MZX3sDujeB2YgcUo4bDMTVbp6x8gtPScj5uWEeCEPjurc3FYijtyQUqS",
  "key11": "EWrL7mSKPuP1eo6kbP9YLC1fksGQoogF2LpMJdUa7Vdq4uenuF1biGrjLRPNd62bNsd4EVZRTBQLK3TP5dH2yjs",
  "key12": "3nKu97cSW29L9FwioCxVCt6AshoTbzXUoKpDAxKycVyoYqgwtPVrE2URxijyNfFmgkUKh27weqXBjUg8BuK9LL8j",
  "key13": "5GdrA891jYovTRgqgFa2ycYGCMa7hZHMQd5GWzZXJsF6uK7ExYyKPoqRBtmYfzg5hRswNiBcJAUchurLGVwscEtV",
  "key14": "2voUFLNPtytePNcWiQ6kjXaWWYSUksC9iv7umwo2ZbDnig6uSwY2nhCtLeSEioENRxitsHu7JYK6Npu6LxrDwqni",
  "key15": "4GGCx8R6iqczikKjEtWoM9kJFQzib13SgeDubFUFi8o4rhFtwojKHT77MRJo6eRgZPn6M71KC83y8bhAkr2juWzy",
  "key16": "rCCBJ3B3L4UKQLg8G3q1KEzhu3RJeV4T1RNzNXg3TVkroDMKqa3bEKusvfHWYR3HGjxEMkEdG8Pa1AkuwXJYM7k",
  "key17": "452Kn16KavYFH8gr5gNxjUBdSqLhY9riBmtLuvpdR1G8Eo2cGU3rtxRehNLCkpMHwD5JjAnQXtCEiqRPkguFijoG",
  "key18": "4WxC2ANqx8muEPQaN9W7uQWbB4uVSZNw4BLwh6jhYx39VuhNe5Gk1zvoaJEsY8ZCxinJGoSiovPusg99MQtstURn",
  "key19": "2H6cSuDL8VjwcPHxTPb29yVxje5xTib2msm1VcJ48nBRK6ev325yexbAKV2b15vfr4RYLMYvPfK3TM9xp3oBssx2",
  "key20": "2zeCAT9YvwNsiLgqozMufWQjZVmxP94econdcZ2N4gtUoLbnb2E5hcMeSidMiE7ujnztcPErh4PCpaZmjbXbLMhy",
  "key21": "2Fdgsfy1pA8htjJDTA55JELEsUp6YB8YpTJdpUnXqQ3p1Qq2MHjrQpEUif9SdiKdPfiEt2hAVY7SAPUatRvsdnHm",
  "key22": "64M3efgg1u26hH6RMm454coh2GAyj55EBhhNypBxQdsUv7hDY8PJd7T8RuQ7Q6AG4BLVaxqsHggNgrFLuP3Njfw5",
  "key23": "4S5BaxAb3dibrSiVSHzVtGWpg5JntUhs3Kuu4BBGbaxWjxuHF94RJohiPJFvYA83gRXZEPhYwvvY3urhB682vkz9",
  "key24": "2n1SWVx8puB3B59jwP9p72MB8hQt4UGTTuz2Adr59UkvVcSof2gkArDP9cj1gPBYsHsjKXb8ncqqKnkhTG5DJwj3",
  "key25": "2bgkhfkQScU2XLgHrS7bMqud5eajNvTNBP3pCi8jCRDYLWAy1v6PUnvzBP7W6eaoi1TeTpZGkQejdjKX3DxiLDzX",
  "key26": "voTG6VCv79Y4kbMaUScbyag9uzjtopJ9xN9k7kVj3N4WnAzyuxTCNRZ86xSnvtP4P4yVMqTKaMdNbLMfN3NjL2H",
  "key27": "J4Yt7YKDKd2uyd6PsN4uJcXp5ppXiphZ32yCEgmhnrsQYuL4qF1SZdbVrZBVmgbXn3uz41yRT914rdZST5veVKK",
  "key28": "52ZLQpji7MhF6wSLmHoBXho1J9kPXnGyznbkP18xnvwXnjT2vLhDLwyHrJ3ZavkkwLA4X4qebwUCSZFYRtQmB7ng",
  "key29": "28Xr5PLrrndYy4mosrMekqGRLNFaQxdYhWomVMTEuhZAPtWQQU2GqoQf2sGXotZ6mcAgsmydC8n3u6qj7wBHEaPU",
  "key30": "2sw3PXNCupyoa9F73WU2UMpUznDnxtWM5bFmJsSZDxaQLcuhtvNsrjVaEyLD8vLGPu6DW1Z2zv8PS4dvqVUt9BYb",
  "key31": "4jXR6cQ6779CFQnn9GzgpqCb3QqEdUQScDnrAfmQVjpJdNqorQgCefg75Wk3vZ2WCKjEm9C3Kf9Ah4pUpmwDeBxu",
  "key32": "3xS9k3vBWKhhWVyKaxT5uy2yfKA7ihjm17VNKEXKH8nU1THLeDkxgm5FG1wNT5o9U7jnupTnDam6kc4eW37AisJC",
  "key33": "3MXCZZoVoL1kLRQts7aJLxnVJLJEGvv5aA3LJq3MJqaQAp2Xz6CGZCtGv2reo3UqPxYwyeTFrLhmqLzc4AadLVXP",
  "key34": "5SmUoWQe64BWNp5wQkoHvNs8WH1AamW9ux8Fe5Eiqu94pkKvyRrQky4rCaFhxoCUshyQ5up4FAeSnftQaAftEagq",
  "key35": "44tm6mHZxPTNfKq1p9TTehv3RinHEHKK7b117uuQNXS4B4zMcCox3zzpMhsVUMzn1Ry5HXLTLPhM6PwhP8sjn56k",
  "key36": "5n5H18phZwEvLvwdEUwhdUegq3ycwdw4D1CUTeUjwRpU1ZPtvJDdFgx1CfmwiTW4PoJkX2h6o4ufntarz727cK6s",
  "key37": "43knPHZoCRNLrz3PhDTjPraXRi7kZiXG2fkQcu5PexM1GDfHk6yRQ91gE29gkmB5ZcPHypvdpgXT2pY7tawxC7zt",
  "key38": "4GXcnGdUL8hLuLUmN2veBttECb9YaStd1ERd3rUQ2KPeKeSDucrZingvmC2qtby4asCNLPWTvusjhwSEgDiPM7tx"
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
