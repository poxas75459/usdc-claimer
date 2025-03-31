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
    "3m5HzcwddYNiQGWkcYCkDJPTgPpJfYGkzHFyzoPXPTLfLzAURyBPmXSmqXoKeWuMdQyMHVYY98ABYJNxQUYYpjje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58uoQwKPqbv7i7QgdKfi2DXt12SfuEPNE7pyK4Fz4z4G2ePBU5rpZe5NVofb1vLY8THjo7aN1yco1ZMzLHAiERh3",
  "key1": "5eRBZ2ktiWPsGRuYu46zWndsu7AsThFN55BaZNrG3pjwntExWXXBe3nQncYSsrtrJ4WhaPoTbnzjLoihAoHw6bZ",
  "key2": "3syToaPWzcepmGDU1tHcvNTjCZM67BiFWz9i8tKY3z7AsTTd6wxZh5H6W8haupVY84oHi8rZb4VQW3cn8BL1Vfoh",
  "key3": "E7ecwcatsRSE7aTqua2ujY6ZoJoHz9Z6bAnZtWuacQbu9Ty4bKAfESAhBmbTkAUiDfto66PiKfXsvXZa4zBCgdT",
  "key4": "3tE6c6R7oJcCrJaoMAoUXL32iJGYo13X7FMjqhaLYaicEqXWVvoRqTi2H3aN9uDpHub88PjG3RF2C2YEqwu5EGbY",
  "key5": "fQjxPuDHGAxmJyk5czkUUMKm9yVyxAfPhCzn3Az7vUdsmZo9JpZdLJTnhi5QDV3BetW6Z9oL2bYSeLN1LufFWop",
  "key6": "4dNcpiMericKtdrX1oTtG8cZG6Ar9NKJGz1oHUmTVwjb1tS4BRvPjBeiyVyTib4rn1hASKbnTbgsyyQCdAuq1yAU",
  "key7": "25j93u2fNnzseAtjRL4GfyTGpLe6k6DkcQnffy64SEUqUABLaj9E3MFnUJrScbDm6oB9YT3hMXhssLuoyrNQ9T8C",
  "key8": "5AesB73kFXaj8Z8u9fP7EKVmyscZ6HpUQNoqdDkwGuhVdQCGZqfHKc4NhAnW8Q2dgsh7iKj99M84wVBWNsvPNxMv",
  "key9": "5BZeTh6ZHfCAvCY8B4XeX6ydZDoZZNMLzsjL13tzW3syi6BmmwLfF2oTGERZuQLWcFjFrvn1qosDuAtbMusG1x52",
  "key10": "5Xxi3PSB5mXhRoSfLb3RDJsirnvN5VzPUKhwQWN4kA93DtkPjGiapStXoYjUXyfDrkHQRc6TqoBnYE977PTBiz3K",
  "key11": "3ZRr2pKVvVUDKqNLNuMTtCExNwC9PrQ648DpcpZWrTbPJDwug5ZjLe4rbQ6K2Jxzv8XWJ9vYmGtnL21XKNFLeiBn",
  "key12": "225d4ssyqoQ1bG7LQ1dJAsGtwtuA7B4VyZ8NUTBFhurPMRrcHktkqjDN2CsH72sSNhFdSL9zspQzdSq9jswpWEHR",
  "key13": "4x3itGDSrUow1hpkcNiJgqdRsCW5cadSGneGSEpxbnhGdFfGMja7vfBArBpVfGPyDZuZgdXU41ckxrbsSCFzsKFJ",
  "key14": "4w976P5GudodVEAgqZXxzyWFK4N4Gjr9VEgFji4kGtukAwSLVnhPS2qpTgYasbxEL58PPnTJ6RBi97Xu6o6GC1qS",
  "key15": "62q4Rhyx6E7WBwBMMkfZJheSp8SL3s93HcWaEEAGvWLMQrxukcQgcpT7embJfmUTzScWB7hhn4JFPMbrgqcHAARQ",
  "key16": "845Djcsx6DVR3QAnq642NGv8N3ceohi6eUNnCBm6wnPHagVSAuCZkX6LeSKDSEgiDKHhEt7vKALZhbpXvKYgEvP",
  "key17": "3J2h2U7WgeWt5AQsag9WpLoN6urRhHRWvfXQRwJaStycJSQmcMojcUjH8BzsUSYetm3bzAqhRuynJovQf5XJXhJY",
  "key18": "QRBeBf2GTB9KirykN3i8rqMkBGxZGfwVAQ3TdeDe911JtXKSwu4hyfhouRX8Tm2XGoNDC3ixe8aYzFhwWPegV4K",
  "key19": "2iGpzEAFbVkqPnV7K9FtduH8XjWLEdK8PQbVggL871ZzCsSakFqorWXQLcHg3JzgxAeJyNEgkTdQ94x1CXinDktR",
  "key20": "5yJjyAg6pPkMdiszw9nzr7RyTGdNbWAtK3Dnxz6UckCutw1geU2H22iNihPZ7QTaCwhwgm52tdtjQhtNbYfDZsbn",
  "key21": "2gSXvKRSZF8GchD4t1FnTw4iZUH5GEStTxVeJmX1edVPRYgSiMrkLJ3gknHwCaHuzxH5sfXyNtgUV3G3e14rk5Q6",
  "key22": "5QTHWWBFp2oGwduyPKrSJQQgtnj3mQyHatVLAnGnD8oqVgiZ97ouVDmwNPaZDJ2SHrt9xYXntqPNR5BNbQ7TnFPa",
  "key23": "gMGzRaTWTzBGL2EpJNuue43dKJU2t4wNwJvAsuJ7XrnrxAymNpfMFU99i2jtMKW4Wtn9WCAFC8Ff9x3XThdGhEm",
  "key24": "EAZsvzBmLtbXzyLjpGo26Ziz5tSdk63gvW1aoWXnAJCypzQdajzbZyGhKRrUBJwEyPj474LePViZEXtYC7B4Bot",
  "key25": "3jLVGNQGbaAGAibaZNRcxJ3q8UYX6VicX9z5XQ1788Vs93XkvoxBAAJ8SB8MbWKfcwxqNEEnfWb89dqjorJZKfQz",
  "key26": "4rKEKZRZsT8yagjRgSxiMoad4AGG8s3ntMA7NMKJTJPHH188bmdgWZkHPvzMDgXLtkVsAwqMyfH2qcdmZiymn78D",
  "key27": "32h4YNHPUDa9bExqNmjbJfB9Fea2iJ95gbeP5V15XwLeMorfgU2QcBN3pqSVsiKnTuiLWBJP6qJxKAi1qZZrX4Pn",
  "key28": "2SqZiBoDRPUR8yjwsnCrZMEH5kA5hYkMPwxMi3YLrW9T75cTTzCL4rPa89hkHNWkLwSNXsY6zVpyMcHRKXGTua2G",
  "key29": "212nT4jERmWZMHrXRt48qUizugN9CXSTNDkK9d7L5dM8f8jEXc21YLoFucnkvxWW6BdHPvh9GRWsAkysNPFinwzL",
  "key30": "5r1E8GmW9G1395w9tKdSEP3G4h5wdSfzrPuyCQq3FknAwqDZjWawB1c8qaaRjL6FKfduxiSB3cjcngbT67WyoWeZ",
  "key31": "4HmczjoBEzcfnzEkjHsGrmBqaXRQyoUewtxhRtq8pM4BsgG2WHakW4qFazoAm3LmrdV9P3bLVAWEfsqfro8K4XY8",
  "key32": "4e9bXbZbL8yHvQfFh2i8QcvfS2KW2zDG5yrKgpb2aaTpURrM7Dtec7VGVyf2Fe3s9WD48ycfmHS11mtD1KdeHoKu",
  "key33": "PDtTrKhZa471X1ASZCaVBHRTQh3WPC3zEYGB9NLtC9yxU3eYUTMwM2MXd1aDiJyx5w1KtohqGt6NPpgsqtAJMMc",
  "key34": "2321G1NLh9Gc4xxuD4P75v1V7y5jvtruSfSusqDTBSCLpe8U4NGZyhfxciuw64JACo8idHZFsz7dRnXt4r5cndaC",
  "key35": "rUvSJi2VTiqXd1VrJC1j2nFwPypSn5wxXkSJoeru7uoYDGFHe1AftD4kdfieTLew4wr95HmiBSk8TPHYPXFnAKj",
  "key36": "rKioSuwGpMPHetr8XjNLF8ci6RK7Srm2SkNArD94sqdXq3oZ6NdURy3a5rzjSLCA4Zzp1QdEu26DZ42LwygHrGL",
  "key37": "5mkG9Qk3Zv39tcZDvsePruRGVjfUfa3vLCLWXhKNRJBSfVEvxv6HSWmdJhvN1SnBB1ko6mVxAJB37jtWmLpZRth4",
  "key38": "34oMtMZJWtbKzwziRkLNoRbFbKvaTbWS6PNZFHsUw8PZh28qjcoF1n7qXm8iApPp9RCJ6ZgxB1Nz8p2LoR3KyJVx",
  "key39": "3D4R5yTz2LU4Eo9yoUy1soaWkcLsMarESJ8W8Zi4DzCcHpNQPPrimZpyuXUc9kUj3E52fDAxkT7LTVzcgA62hyhW"
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
