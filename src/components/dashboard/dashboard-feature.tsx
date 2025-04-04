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
    "RReKN1ZwfuBfDBqs4x98AjrySnTPfRyj44gdr2WDFvP6XPxHeE9ppApLMLAzMReakcRvVm9LmuKApjrMxL4m1me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fpFGQ66xyKrbUCDFykvrzDjBCkUsizwYYSJwJLp49bsAjSnsZNZhTHvCeDMJuTQ9xwx7vvR6aT7xYFmF3hvyPYS",
  "key1": "3FvvWobQ26spzHWsuGD9RzHBy2EsyFJg4T99urDi8KEMdpbJKu5XMFeMGGbGXAobt1nFZKM6HtE5Du3Ss1yexRJw",
  "key2": "TnjFF67ZQUDmKex93D1BCDBTthPgMAk4nHm9if4vKAV4CuxXgm5pr4pEdJi4gm8WYczTkTunYfx6PKz9WUFew5g",
  "key3": "2bcJsDpJsbmTZYuya2kjJ6ZQ9L7PR1R5VrZ3fjkt3gSZvHBd5qoRcUFXqbmy1aLfvXrUW4hiSjWtbsJ52pAw14pS",
  "key4": "2bEQasSSng17A2e1QB81moB4NhtQqHa3EqscqJikdqiBfPmR23dWmDRfhp5WP4KCc6TgHX9YdBRGiJx8XbBeH7is",
  "key5": "3cUK6d73WSFBHqanbHS8CwzFuyTjRQfm7r9CPV1yr8hZDxbJTcgAXZBJ2BwbRbZKpWi3Z2awnWPhbYog5PQxj9yG",
  "key6": "2ft227HtpSnedKSGNV3vtwovk5s66nA3kFwU3LEReY6BaXxsBe2ePkR2TCSrr2PNHbrXujrK6M4ALA6AjKN9i8vn",
  "key7": "5jf86ACvN9RiKcxegMRJ5SZfWj6ZPzUebrFJTYAra9CnbWC1zNDjJUpgiz73Dk5szv2YwPG9GHbiAaoQ1Npe7v5x",
  "key8": "5ar2U1V5xdKZbCcsqDbvy5u3sjiAtnfmC4qbRdLNG5e7KGHR5m3877xdSAbDCpTU4kmrerTG5TBk9FQ9tJAB85pT",
  "key9": "4y2acEaM1drgZktwetF7Xs9SXbJ8JLeeKvFZGvy4B9WSwvgVP9AXXdYGvk5vfSFS5uVnMqVafWHNBWYqBiYHFCJd",
  "key10": "uZM1rPa8B7AHTf13Tzh7St85eT4VxPMmdzL3LtbrHnjgaKMAQcAiCsUwgjALD7TDL3BgFV4RiFF56k4AbFrsSxf",
  "key11": "2y9WXB61qLXobkQeE2s7bHGEaSmQUFi7Kd3ZMHGhzqWBEqDD8kzG9TXn9suRqzT8gyczn5JyNdtrCZvpngFbCeek",
  "key12": "2pSvwDqb42knEwB8FfodYgzi4bCXbZnnHdWCqerAByfTebFPZJJJJLgkxoSosaEVCM74PVDxfnef8Gxxb5AvFq54",
  "key13": "4YsuPHUv9dxXxfSBEgz8GXWcLnbDxuLGWM3HygdpT75nFcMQQzMrUXDi3pv6wd96AiGCgR87XdrQfa8wn75AJPtN",
  "key14": "4K2LgjWprcmSScMQi3Vfmy9AeBBfAzZr9tQcwzAHW1Mgj7j7Apps6NhGp2kxB7mCELBCRKJAdxqkdBtbxVLyiGAu",
  "key15": "2dcJjexuK3yAYN91iBrJM57KyYo2SM1id4uY1sy3Q9WoNaN5XQmmxvLPmcNZ19XQwiKQpkkzME55EfNrUXx8ewFJ",
  "key16": "4SU7koxtSJ42rBBiWvJf3Lrs8aCng65tTfJuyuWcauLqkk1cbwrhbXczwr3YRaEp64JNg3ToY4Ks3y677fWVhpkg",
  "key17": "KgosZhUU72865BKiyAuPebLdV1wJXfUNyKbTz3Y9R9gtPLh6sF7QBpckDgR1Sj9oz1WY1shaz4sC5nYwL4DXx2Y",
  "key18": "3PrCbJyavKtKRXmrTyRZfCiwj2y69ygbA2DD4h3SQhfznHZomfxD8a5pHYpUraKhWNPQGxEkcGEM8x8SdfD5ejws",
  "key19": "3marhDpq7b713PnYL9wpxa9xHtJt4fSkqS1s2SoF3KXcQswc8tXgf3dbcUCxe7Be4oNga7GLyF4ruexERRtC5agm",
  "key20": "2fajzDM9iCf3MTzEf6ZVMaAABdCUmwQxFxB6CydEsiz8UJmQjL58i2JBKzZJW5YvhDJcFkoz74xMyG1rweJihqeC",
  "key21": "4D384LD7d4vsinXdyKySwWshsTXbtjCqoedzC1zqdZ5FcbZjiium2rcMYvhSvjGx91gZnCyM8iBf116UheHcSywX",
  "key22": "2A95VoJCn8weuB5u4Eraqp3eGMW9QU2AFxMsSGzetXRZ94U7zFKBysgGQt2dTGGAB2Cp4fvueGt1VFDbDx3LZXVW",
  "key23": "4Ki7JZWjmSnnJHb9uvuxSHJJjUDnzj19kGJB1Fu4UDJU2e43f9ozzZwdVAXnpHzLqhuVJzuXSPAYXRSexGgPBnVL",
  "key24": "467j8tP4t7PzyvMnGqvqv525bZQTfxud3c3fu9raJwRX86oF5fLGv2Hd1wKAiCG38kRBaFM4zQnhrweXiibeQfvF",
  "key25": "cd2PzrJeGL5mWrMNZsLQXoRfzekxMqBZzQzpuDKR89H4WAUJo4w55r3LiVt9sSE8do3SVEHjJqmaZgWfhzccnGA",
  "key26": "35dFDda4z2SG8CqS4dCTAPnrAe8ZZKbVRovh49Pwf2g7zuNPN7tyZYezu5zVd1Bu4saNWMqsELaeAySj4B8ztBT2",
  "key27": "25FbMQcbEQFbnJctudBKmWrgV7Xty3nMYHSoJTjJUm5kX5qjsC5QPEyp6Hve2uuRv7w5YsBfPJJptw7oDQhwbyKy",
  "key28": "EMJzcc2mi2irgEipRTJXfH3dFSZHDpGeSWDsm7rkPAQTntGd4RbCrdEARzyNE5X2ay8gWp5nxCKs3ZPkShqLAqg",
  "key29": "2aTfry3VVRKgQdk9dkZQMKxH6DZ8kNKyUxTeGKNYfyDqQzwZaiLDXwKCtgZ3KghEHKLWW4nduv11ebzSJmL1RRtK",
  "key30": "5scjYUQnTt6sQCH6vY5GSSRvjSLT4jNFm6UFexNqo7D9CWaojaG9fNGhTf857wu5oVhatpdxuMRrshAUEqRPaZAx",
  "key31": "4E64sPhqxxCcNUrWXfV8ot7A4AeQ5QCzVGyW2GQ8xBJcT9hrysKL48Jtj2eJcBU6qczhEEB2hXEGrvWFHjRwoGFS",
  "key32": "3FjXCH4KPN3Buv511yw9RKQGu191aRkvmBJb933hzhUDnXDy9yybFi6ap5LL75dsWrG7bkd4Nuqin4qgrX3xUMo3",
  "key33": "5PnAbEZ7ysG5qVyfK98gfBBqtbYxN2e7oZV2HZKg6QToJWYFQ15G2TUuevmsWXFErXYfeXuFDDqeBy8ReTZ5CxT",
  "key34": "2r1CGp2BgjD9rzNiksgtXC5SVsYqRMZrDCM6pvT9bcZZWemVMjk1N6DHoUSXmAv2DbDy6VF8RTYG53qZcTumzSUS",
  "key35": "5GsVi2WSCnRr3m1gkFhgsjTvBPHEKwEinj3KDwV8cKHBPy9nAHb6MYhjHB6X95r2jpNiLWfFA9KJeJZdxxdYt3zo",
  "key36": "2XsMrSBK2MyQUynQ178NwUJyFu4VydPioAUbK5BvSCRzsC6uBjsrVnFG89DMBB6GYoVyLJfiomHVGx1rZaXfFCdq"
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
