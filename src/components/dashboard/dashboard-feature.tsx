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
    "5BvFLSLCKn99N2eZrEGQMgTz9k61PWKUARUfpKZxvtsXfXeAWueyDJkH8KqpUjR1GxoECCfgWaYwppPLVuvUJ2x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CECZURXzcxgvwQtPAdCZrKFtrjiqqobso52dwTErxKDe5CXT8w5P79Lp78qRTZ49gH2tLE2S7HrcY1jKxsqhERW",
  "key1": "akngzEjGotxmHJ1V6931oq4Bh1WtX3RcaE3K66WXJQ9UYi8sQXXdJSmpPMLBWSMy77PUcaRNQftYUjZu8wjyPcK",
  "key2": "3WH9vSWLj2qmAA3GUp3hocpzZBakNKPwbCk7YDFipGQb7eLuaxP1eVSmRLYFQLoEP6cyd72H52MycZ11zt7jX4C2",
  "key3": "ntoCJv9hBLYwtQ4xogfDxXRKaSrVRg7bPL2vXQtbxEU4MfEQQH632R4SfrtF3grWrARbZ5JK3R6a7zxrq9UQnpk",
  "key4": "5KcTCzfYdBCjm7EGTXbEvjgz3nrgx2BarGkHXXCGXD65BzGizy4Y2rHfLuw7Hza5fsRGqBqL8cuxg74ABHEmJyBa",
  "key5": "4CPdxh3MicLJjJkdWE4snrF6rhBHuhcG2VBA8u4KQTFmvnrii6SAMBVyZNM7DvhojChMFuTx5425RufYv1GpXUWg",
  "key6": "5s7UCNdARhVBgSBki5CCHkbSDzZ9NpwJKMX9kF9JTg7TejuJEvrEEVuFpwX6P5xGRiuSRdKBQkBxKKErD5JW8Nc6",
  "key7": "4DmtQhvfPBAhUYjC8qaj1qoPvLiXYMRGMmkBw4XUDUyybDbszXEpZSCCzVXypX96Ep23fZDU49P2S7wuxGiRZqzK",
  "key8": "267qCniq6eGGdsSn7qoYAzaZESMzinQgLW63JePhDWVwjhV2GPGvQk8AShKicRPvpg36ai4vcnh7gaqhgMh1nWG6",
  "key9": "57EUNLZcEV3WGUqVzhLdxWg8JtEH2RCZi1Q8iV3wpVk1LdQ3oZHmsNWjjkxNnfV9PohEfND1H2R35EBnnkTFgFva",
  "key10": "64GGDP58fdReJAnaE6TefqGosE6hpk7mY6SEPiQYFvRX2aqyE1HGZM4efqxV8DLBDhx8fVs7gLNkNyu5WELqCEFV",
  "key11": "2z5Yocf8BaW8nQXchWwmzgHMuQmZA8Ma1Nk9tqy3wtN7pBZHS2jF4QFrVvzQUuMqpUjUZZ1AfqwzoPufF2gfyEUd",
  "key12": "3aUmrvjGKxX3Sqjkon2kx1VCgv9ePad5nouDRWVvy1H76EGJLnyyhsoM8Tnhx4v6MdeRYzEW8TAjqt7gPnoPzeCd",
  "key13": "2CQReKjNmYaPmPyw9hdNogW8aAGGvjpuV8MMFWHdGMPyEFqE6vnX5fS8AtNibw7MJ9zvrvpD5Y1r9koh3q13tHaq",
  "key14": "3cYRnw62zTpLzcGJ7FHGrcnqHT1m1TFGFvySUopjSsbQpWYypBEmMVYiHqkTbYi7weh1LrHhMy7cGFy8B3sxLRNo",
  "key15": "3c8rBPjKY7nbVNQXZFeb46csCyJ9mdDgXEVqqwqXaWjsYdbS5XMVX5UjFMAZi3vLJU8VUWtkE4FW3S6oKcuy5w9T",
  "key16": "2Fud7f5rNAxy8VhXsM2CC7umzEN8o8APFse9DU3EYF9fckSjYENb7oyEPX8A3KFNzT2oEBfrDZ2PHEgWCV5arifM",
  "key17": "5ezbuZQxNZdDGPLAr1ujeNvPWMXCQ2DVqBT4yggNasBTkTk9dEoMBR89oDgAzQUkgbkqJqnmCB1vmEyAaaG6Retw",
  "key18": "2u1Ckatm84S8Lwp9CmFSWCZQdCSynvDayrDbTXSZz7F3u7wEiDPwh2ftrNkxQD9pm9Skd83a9pGTaUSBDnk7KStx",
  "key19": "252rMvnrgxHBCJS53RWJBuT9ZggvaMazKXqVCLQCneePeeggwU5TzJC5JVgj5df3nbosmDzVBFfUyPe5k8JHFnEU",
  "key20": "2wSjihhDnCuMBczqTVrSfUotKqo2HZ9SKwrzkuNBBXF14bFgUeWQ59D2z591HdicAavNn1uGNfsZLRp7tfu8Nuk3",
  "key21": "4z2SGkLv4926gUWGfFeJmjsVLRQYx6uS13D1eCVtBpxMvrwcWcs9Spq63DUTnLE1jW8EnqbWDopsmcjvsZ9dQ3xW",
  "key22": "4WoSXSkCNU4AKfQ63SYaiVU3xfGVURukXFcSEZqzhbBPKbggAoc59ueEcLc41YXH6xzHnDhhg2ziHiyj2ZA33ah",
  "key23": "z7vfxRF5suABZQpZFtwzRakuU4w5agaQA9KsRZEaEJpFFJTRhd97uTo6LbWqGY5TzEeCVpmBk3U67vuQyqVLvnu",
  "key24": "2FwHiJyt9DQX4tk6Du9AHwHgXd74tVtw4wTR2axyg7KZ1gwi2mHe3KqPPYpToNtVDvtGZRRpUyjCKskAnBTZYfPc",
  "key25": "4KjXcPpJCDWiKGMmnNBvm4M8Qyupp86f6sjQJgBLRCjTKkHsjuqvM5CUBwVw4bLDwq8PGtckTSBBj2Kmpo6QuXBT",
  "key26": "feznGMNGrZzxY9b9vi3xzjdS37aunwGUwnW3zHyNZaLQmgX29qnofXE5oahNKz5wTkKkpsTJDdntE6KRpHtWAWT",
  "key27": "24v6q6EaMUPS3qRquqN7v3RxtJbku1UhWpMLqJ7GDQnrrXcZ9bnG1wGmeYpKtmSUUpQYqydGG5Dqw8EuWFv4bbm1",
  "key28": "62iKaiUtwfK52E9D92D5pv5iZeqgvrLGJCKaC1yFXxaJrvYAejaUkX9MhEyzb7DwsbVoi6UN5ZEePRXQykaMdZXN",
  "key29": "45tTpF9yXZWuN7ZhGLbQLmHFKZH8KnQfwyrL2mK8uAX6951Q6reEKSPa6GUWfG64QLyheoSuzHKrbpHpqVxQ3Zyk",
  "key30": "4vzZx3y7AnWJpnXQ5DT1mKzZshTXViEYNNJr3nnJNEL2Zknaff3HtPcDoDXRSYwhWcRWD2cS99QHY6srSEUQ9Nku",
  "key31": "1XRr9hmyKdCKd7d6YvxtYCXphk37LwadZLwXuRCSZbmxC6bU3iCHHVfbYXcj6Q3zzbhxSFtaA8n1BGNm94nVnm1",
  "key32": "4MimhwsXoZXyuKScNLoR4c64A3gRu7hGsMVeFs7zYfFucgjsfmrLTvqFA44L6kCJ4AJD82bBtQcqeCEUwxfbJmwG",
  "key33": "2QRZEoymsAiMob3ryjnbuvVpQtepCPdB6Gh3cnRF4qehZ4v9PRWjJHGS52QYHJXXQUDoAgFqFjZMn9YhjSGWeYCy",
  "key34": "jEbrbcz5qegPh5ZTXdgcicmPBZ9vi66FGSKovRZf5ajm5tVmyrKvDr5NLc2PscK2BRwPKoMpfVnJ7CxaPZ6pKLa",
  "key35": "Dq6sMaTeybxK9if779PrKTaRq2SxmrSFUJk8p9nf1w3eACXotfsGxahqWDKiZaGjuyRc9FVbAo3wwmY6mUd1pup",
  "key36": "4mxpaCipZtrwF4nNmNvLkJkobDSTmSbUNspQjkLe3fw5V5oJC776hiymxQh29wGvfmmySq85RGjtMLACr3ZuSx9r",
  "key37": "QN5nQs2aNaSpgVxDchyTksfhUSVWJNTYxQQffkHTmMt5ect5CXqEc9Rosghq4q4W3zcH2p5MCzZA88o75F5axZZ",
  "key38": "2MECVW98A7VVhYFhQvQ8doxj9E2FPoL9fGEs8gNxeitco5pjW2Z1bdGAtLjoHsdKZDJG598rRqLEJFZ3KaosDmsA",
  "key39": "42v3gvNpH7URLswoFTMq5u4ktKSRNxRdi8WHffjB9MxUMVNVXaGjSCcXwjiQiw3Z99i6qar4weTnY8HJrjVVtnNC",
  "key40": "2uKyYbD529rkEvQUXvkHG2GiJH4PaUbxoFyuW42vg9jxoQQUC2MamF4bjVRHSQ4GQWa3kmL9McSoNBVtcRFjzyy7",
  "key41": "5v2gWGAxQ2bPhTCPfc93ACgDkAPijKTZ1qPczQRQrWDKeHypEo9BHDaUX1hxk7TqR2EhVQhxVZBgeBmFvLhLgm7q",
  "key42": "dJ4u2RLxUvCpiuaEE3kXLCL4VAzRgSuuZMHhALTB6p8dBLQqNjmiYiR3rZuax5TYeEm8FfJS6irw8Lkm6mped1M",
  "key43": "GrrvHBE2LYdPnCR29MazpnVKKjeyxMpYzsDDpx48tkQvs39ZXnyQ5bDg1cCr8Zx98jLym8ok6Pj3Esi2LpxHH1q",
  "key44": "EiSNgrTDaGqkrZjXXzgbbijEHQvWDsm3iX8TgNgQe6o77Duj5Dm61Jfjz9WmCvDpoeYjJ3MwKWFd9UA8BmNRqpP",
  "key45": "5YxQ9QSSdioN3Etrhj7DuV1cuHYNzf8JAfwipGyT1MRvrA9CFYJLZpeAnPuC9sbgQ5zBitEMmTkunwxUSJFryY8d"
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
