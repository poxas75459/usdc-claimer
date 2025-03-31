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
    "bx1jcSFvGynYDA1fuCpvEHJL8XX8qPnQRJpMYDrvRB7BCPpQxsCkW6qyw4r85VqZSu56nzPXKc1g3nzQnPx9R6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AvXHYZ242AS4sQMz1c6RUTKkV3sdLhRTh1QDN1By9xwUgL1k127tthqa2BmfetQ7RLDi6FZoVtnGR3KuGaBXtsp",
  "key1": "oriaaCyQZBqs1sRyjdia23zSKarPLUATXXTukSKjtHNpiC7AgYkeaZPWzYgbKCfkkF37AgdWmQ7cJDGS9ScGvYh",
  "key2": "25nPZaX3kp4iTZrqnUYYdUJpUqnwCMyHihN75F7uAusdSEZJKn67ww3BzWzDenaKhmwe1RYjQxvqa4fY6XV3jqsY",
  "key3": "3xBkAQQLRhByHW9J3Bye5PmM1S9Gbt2HnTBpky7fSTuyUk76XQwSSzWUjQeiSR1qATqedEdXhyr6dNdB1bayoSfS",
  "key4": "3Gi6KnvWXcYg73RmtwN3eyhSDsxKi2zCCQAuR19CzbVWzDgMP3GRJ9ucQ9dArTtJxNfhR9LaNhwJVkNUJQx2Z3am",
  "key5": "4p5NxHS9bqN5WU2fNBpvv5nfqk3BJsTmBtGzxyEq9cPirvNo3gn4buX67MN42LyX7JnzqQsHcKCr39LesxWrzVA3",
  "key6": "4NJDN2oBjQ9xoLkRdz1Y2PxdhnZifNm57GGfW8xsvuQhMuYp8FjGWyt5uGfv76pa2heDA7CPUrUgpcwX43ZoUmC3",
  "key7": "3JUpyJ97gk7mr4VVLzU4JSKtTYtwQHxvgW8tJxYG6BTayNqGV4ZGd8LCNjaS3HE2DxWcVUi6RHHxgeX8sZi9fGKp",
  "key8": "4Vq4Uaqqb3WyfHZdKjsF2n49fRRAMrzdA5kUcV1ZsmBvMnfi7xp4xEhwv7U1qsBP96QFHJncsyekVWcibeJcd1L3",
  "key9": "5JrfUsxGwjva7NJ6upFvd5wyfYdFyFrGfcqXgtmAmWZdvg3gB3Abp3uvpfNxS8AV8HTt2vLJcLJCmWD3Rf7vmBj9",
  "key10": "5EWBKesN8ET1rkrJ19b7RmCpvwPFbTFRFbgWN4jTi8RbirzhaJW8hmk62VerFzuEYtv8AFdEFb5hgtH5nuAJCbTP",
  "key11": "ohSXYiGguxnVNwuGjMpxb6xRQveWvABQVqCxKrz97Ni7eEZm6eRqvT4cyV7YSU7fw1MNubAsTQbsbWsr9eA1wB2",
  "key12": "5jb6NdvcJSt2akdQTciuqC6LEEvNNo6oU7V9hiwBrXPGkdPQTR8JhjDULecCbTBetQE4JQ3VMT48KKt9XFYJTuF5",
  "key13": "KgwBt79ifX8Ut5rDUigvwPEJDAPof1c7ErxxPJR2kpFsqSjuq8vvmgRKBZsZFvQ689PsHpscxtkh26z4nGqNV8R",
  "key14": "2dHnfDZefQ8MdBRA2bq5Eg5Arg5A47PVeqsMCGjnReYT97eL3QUt2A71vZ8yCRf1NyPFNJFWSdSBc6WyuwHgw9u7",
  "key15": "4bG7vouTkamooSzqsFqYpK2X7hskKfrwgpN27vV7LA5y7pJC6tHQdkHHeRpM1AS25NFSyUakuivPPzZP1RdMeUj3",
  "key16": "4En6c9bFxTBqAqB94K1HG7vFwDNCGm9rn3mmfrmEqnjfjPD3Uhmsqx47fj8sEM2chyvgj3fRhKbeCCTRpjHLEkyd",
  "key17": "54RzZZdpWcGDUdmPFWHBUR3BCbHXp1gjc9k3CaW1iYs5TYkx2MLYUhxdv1W5mtr9ZBXtfKAD5EdRrVyjx4cCWo6D",
  "key18": "466Tf6NWcsrmo5mePM4FN46RQNDuTyvbiYY769DC1JnbDQQe98FhMwL8Q2VAN1LZZ9ezQ4QsddyfcypRrZrwhgNV",
  "key19": "59PRffSCzayfV9CA6izQSDG6bSVF1tKukxvVqTuVa39gYyahFnQPznksgkyv7cdY61D3cuZvSLbDgFZfbcsXYT3m",
  "key20": "JY4cHit1k638m1M9dy92s7xevAPGe2pgFWWGCBqcEDiU6HqtZ4hLL9tvwDiMKWe2LJNYSbwTjhk37mFC2zKu7dH",
  "key21": "3JycT6ZvqXbqpCFEi25RWwVoQJq1SLLPku5CnGRqMGT3sPzN4RaFQCuUYa8zbpyt8m61FPfHqq7wPfLSUhbEHvmS",
  "key22": "4zvP2CeWtFpACsUaEjJTio49xWgbVBwMBip9jggVKfmguGeRuZbKgGpZySpUmw5FeKKHwuVY4hmMuZPFnD1yw38d",
  "key23": "5XR8B7bg3ByAS96yvvdMdjjvUYMh24HmfYXeE3ASZFCAk5pZqiv4m7GYWvP63Lo1RXhQ9gyPUy5VWhb1T9WhX9DX",
  "key24": "2czzXAT9Q7rXVD4jpXiJHKurYZvenxE4i3PUePGxJFGSU6wZ5CPFPK1rpTiXWM9BARfWRcSUgrtcJMeGuy6cPh3M",
  "key25": "3MfndRdT6FgPARXZJCJJuU13XqonBK1JCoXmeEu9ok83D19t7sZUganhvH4uyKMwBhjBvHG3PivgJm1cevksVwV4",
  "key26": "3aV9rR28kjk26kDtd74DtqKN8LjyoJB6HPbogwqLLUwTUsRUuD4Mx1fQhG3CiQ6rnsHpHnXQDqJB58ktPt7Us19U",
  "key27": "4bDxVeCEE6tC5xXT8H8HrVBn9g1hc1MduYA8RGCSzDEL2hH5a9t13DkYSZQDhwTYyhgaySY4zuPFbUhQ2i4DviTK"
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
