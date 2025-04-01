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
    "2T2WKaoCMjb6oejooXPqFHLz7Tx64cENzKStbHN8C3NausmfcjHCVZHByr83Am8G9EAWdx7349eoYWGUWcbR12G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kjvVYnF58yGD4cGsVXspWHL9CRjtQGz7dPTAEVmmW8jYP15rUhB9epN5zTnFGMuE9ziTCcJEf77pgbZXcJUXUm5",
  "key1": "4suQchs7MkXFVgqMMnqHHeLTvGSDwUKJ9cgAjSicgwKjD6bTkjSrvtRunfDF7TJ83NdWBowassYDqTzy3gPLCMF7",
  "key2": "VKQbXD5pbZQ9v6TGEucqMaeizFX3mdSBKKFq1cbH12q95jbWXYaZrMughgCxcnumnhCxKc9GzBH71cG9XNLmPpc",
  "key3": "3fUuMdU9uj7SXXwA893ovXtbDF1QmKpJMkBzW8jEQkGH7Ws3xu991TdjwhksBZARGk7youZLqUEpfUhyBR8A71DC",
  "key4": "5d3RhDJ1StDxbRHX8Zg7yoWBqHow37WwJeVV3bRFiqtwoD1hCGSM83cX6VMXmYo7hmEFEsnE1HdmiqQhp2kKwaQv",
  "key5": "4SnqrdTtNxGUL3qV6upVZq1wzT5jkSWWnkcM4hf4oQNmbnRHAC1Cs5hpxdgqhNtuHFSYerEHwaJmnHFXtp58PLr1",
  "key6": "2jU7XUbxmRwoGaQ5yXcdNpS6sYQiqB3vjJNyPogTtwbaqSf1L2disgHfAkbrSjAmXUMV2Zb1anh2PcrMvK36cboe",
  "key7": "5zocaDuNhaMZZ8okuhporfWBgns13UbmEeKRwr9G1WVxTcLAhD16uEKjWGyDFkhr8WfQB5iVgVTwXZbL2nLYLHuZ",
  "key8": "4NmE9MsiyuJ1FfeB9avpXLxxFDnaSoxMKRGQuSkKgFenpzAMarJigVTatYTX6tzrgzLmsPQesR7Wrfqf3QkaSDbC",
  "key9": "5dg39xKDZS8jA51eSLmai5oSydGfnY9uHFS7Enr1rcz8fLKCE4EEvoBeUXKAA86wFjzJMqeVRQyMuJTDiLgoYMQA",
  "key10": "4aGLDKPYcfWxiFs4Nk9mdN3CSuD4JqJpeAmu73Xk338kxmekuPabmBt7pQafsAHNHURfT3DHFK89KcF6Cogu5bw8",
  "key11": "3R8rmTXp6rU98KJiaVuQqar4o9HK6Baa6iHpnpZ5kBKP83DwqgxyKHeJ5p3FmGrnqRNLdvYEmG5wB5jPESAEXrAX",
  "key12": "31FneFciiCAgNqjC54fta13ZsDGkS1QRQMyTP8qQMQMUgBoBTRaApCyRm5NLtBGkaUbPiDiEw4XrLLbrrDziyf7A",
  "key13": "PTVyieZcci8JnvBdrTKaSn8njhHDtbxF8Njv8BU9LosK6SWV7oQCvXjxovy2UQ3x5QEjuKh4MtxB4QY4jFBBWSn",
  "key14": "4gKG618qctqFAPmYFYQQWycBLbJpEFehwHYwJwjXKXWXHeL3yqgz91SQxEcSnDGBDRwwznCKpBAmbrVV5RnFoSZo",
  "key15": "4kum8ixvKpeccJW678gyXBrmonVq4eFmfUUZC5K3VJB9kkD1XMkKUYT6Y8B679JDqGpu7vnkfySWQnmHVmUZnHRW",
  "key16": "3JMKYvqZuq55pmVLzgD7Af5TzaNmaGVsSaUF1yRBmd3MM78MKPnCKLDeU6q2MbjY5sPdnenHgfhyjG1nvPEFAEWY",
  "key17": "KcaYxiYkCDGDcfp8McMswjanZqJZru3NxD467ZV8kN1RBG1hDwVzJpdoU4TJZfkqUxvRDSUmQRyT25JuRzvkBRy",
  "key18": "3P9SHqQHVqaTiMGhV5TrpWghbckswtqp4pVm6zovDn41JhuPXfFDJuMc2izNebz5NMbQ4BywzjrGQDhAyfcjTwJT",
  "key19": "5cyC375n3uX3QXzs3uYFSCiNt9fUGj9eejj6Pj2gHeHDUUiBpVVymZrZesSX3AQ5yqUWB3DhHhjfhbSJtVaECn1c",
  "key20": "46Ea6PqsSb9rPZP1jCJbZcBkRCnLspQDfWxxUtrT68zGsMqpkQr93yqPrKo9igke6JW7Dwb88rdXUq1VCcz9iQTi",
  "key21": "2CEkN1trDdpWTXsDQL4H3gP8cM43XDheVej9G7YoZHBfWCopyU7o38m2WREmRgrcMeZjxqyF3T9oRqFDS5tfa1G2",
  "key22": "5DRYUh4Nvde4J5abuzCcgFJtnZXMehN2UfgzU8TF1sPVVouAQo6yceg1kAfFBj4xwn8wxTLvaKAdbYQSu6u1tTGn",
  "key23": "5Yy6beNggKJfUzEXxBxBzyjBP4gPX6x6jcG9yM1VrqRTXicR6fSoQefrMT9LQEqCx1Z3Qox7fTgnTGNyFkjqSDQu",
  "key24": "5HYYRYjifL4LB1pKQ53pWWfbY4rGY12W16VP3zcCjefHpTMg1ktxuvbwCysmhkQWP3UQprfLpy6MyaovLRWRuYUL",
  "key25": "44FJvsk3p8CfgtJyJGKffbV1xdKxuxiMs1jnkNrMNHNwK8Uo1dB5oyiHjUNapv97k92feBorMNyroZwM6cGGpyE5",
  "key26": "dYyLxkXhrmeg81s4HiUhGrD9qqcBZzdKzoxNPCH3Y4suFyp7PCi4ZW6DtZYeztXNV8C8EgdRJpjz9Uc8MjuVyAA",
  "key27": "2v21sU42432eherU95whzRmFp5q6cDPrJu8GWnN763mibaKP5NuS7M6Eeps9doigMsErj1qU17juqxmDVocrXuKT",
  "key28": "KjwxebkD3pi5Zik9ShgqjEzmq2TxidUK7HiiQqXLXmLET7fJ8BBbzxKP4UWgxkcNEzHkAH4MsJAqWArkVmaVY4y",
  "key29": "2UH4kLiQb4bqaAuFc7aX9QPTRVcwLmsCXuVHcffkZBWq37BcMyXf52p4S2hPXQbXuRU6FerdiWrX1SMXtuHxxkG4",
  "key30": "3cSPVdBTMe2vkjtHMzHT4KwrL9BhDwcA8uN37ubKrXYwyC68co67sXciU66fN69uZdELG6149T48onFCVHvirm1p",
  "key31": "9UKXfSxrxYRaaJYkU2xErYSmUj9EAu3FECWLBm7MXSP6zKp49wF1RNc5uEd7GMFED6Mbor2Hp9a1T2a4CMj3cZD",
  "key32": "22NHYAcUHvjXP2fmS3A7aa6wmm1kiPNrd8zchqVSc8gwywj5J5LECWaJjsUybe6iTgjLwXYrPzjngKxccXh9M4m2",
  "key33": "4yFpVkFAVr6mo1oCwSCGdqU2W7NX5b8qekrtnwuxFYVwvFd6WLgtqjZyEmfftd6SMofkG3x5FNFANMtsuA9S91a",
  "key34": "tqHEfgtjW7Peu69qQLtffExcS2HiaY8yHNvsaj3Z2J947DdcuEhe3DoHsAzrFu46n175cDzwn1nJYNRmj4gYsdH",
  "key35": "AQRoae7ru4xsKoRAoLkPz8Q7g73tHQ8r3R9gSgffTokmCWLfSdefbg1vNW5fUFVP8zk2pr8knoDjVyvyLUCvRVG",
  "key36": "3qmNqbprZFLUkPx4LZ4MZxsYsYsxdwzFKkdP1z36hkh4BtkFfY27Zc8CYYoXZ6Q5P3EWZHXeP4V6QH3yy3o4nJGA",
  "key37": "5HBWRMwxPM9WqZrLTckD4yaNB3kGPhgMtqgDfoM7xinKxmd5n3PthyC4jMVKBfps8jLt8x6sV8Zn9rf9eeUVierk",
  "key38": "CWoyXLoqe5sKCsDjKM6Zuvo1gf8Kpa1BGfG3Xnq9gQG4neJSjYCaFFtFEEW1HUAL4HDSXpyb5tP4bfYU8N5FnEv",
  "key39": "MnAev4tg9zuY4Yfi8SnkC23wZZCgsM9mg9RW6LycrD7eYPhK6SoNuUNz1ANr1LyJWN9bofXzzoqzUt5sDAHRNrY"
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
