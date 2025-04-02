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
    "2DywAAhvW51PJ1XZLm23F7x2NSubpbACT2ws5KbWyGFNzGLzpMN3jBrdxhWoQ7yo2Z5YCmtkiFXzgevNxkwrhpJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TA7fEREWbGzpsdFUmUGkBf6FiioYtDLi3ag3V4PJTXkYge4QVY9bCCYq94bb7RLWGBp6yAzbmFSfKeVcoJt7of8",
  "key1": "3egzN25UZ6C81prwKQC6UMXEwACTBA14wRWzQ5d17eZG78QsKnDxKbf7cRRSc9QWfBwJH45coAWCMd94zCx9dzya",
  "key2": "3yDvAaeMEh9mPFAzCvVfcwmEJbmhCQfYgEsvzhrKfeCdoJg5S5mN77BsiCkQpcNdvF3BHU7UbcqXivzsiexPvJYb",
  "key3": "aDSn4SkPtixCtxMYKfL57g9BT3xMe68dDFqpqYgtwFoN9KJMtcj5qRxPqqu2cwUReuYPNgVbwMxvycFBZ6qFEXt",
  "key4": "2LeyiPcW9wdQaYX3cx4dWpQuMM3uJjcRDR9aA46YWp9dkiqYQEmcgXgLmKRXt6nST8uXjDDAcLmT8pLYnMcNrKbE",
  "key5": "2evLxAgMMznrBmB3reW8zHr4EfPMqU8egGfTvXXRmskbs98YXQvjTVLdPt7iQNDTpMitRjehMi4VSBVaYiTpN2Xt",
  "key6": "2mRMpoDqaaR5Kq2Tvs5uaLt2RgvHwxJAG9stHZ431djNKiAf57Poc1TsNM5bie9Yu6HuMXmYC3GGSnhKLQGf6NZ3",
  "key7": "2VEJDXr26h75yEv14UcJE6qha8EbQB7qgLxqSwzeGbGh3LHGfZBsurxb8xn1poXA4iD34mxgsa8GMZwxo4fnXaeN",
  "key8": "2p68nN3X3pnSpTyPNL7qmfPweZiAKARGjCnN1z3rdhFpVTr5e3ReMg3AgH8pg9uS9eFH4Rvc9o32XKzX3vFBJghr",
  "key9": "2uGVa1JmCNX6LubSRYDeseWhSnzxaVgZMxR8yeBvH8L9BZuTeEcM4x8sJhMWuGqSYfRDCzdSVzRrGsAvZ83SHUmR",
  "key10": "3seAiJGavB61SaFTbNc3wzco4GPhGWsLREjC4qAaCVoQrDLGa1WuafdvS6GrixBhtJxX4jC1eK8JLoq9ix5n5D2s",
  "key11": "adYY1ph3AyuuKcFf6mMcWMS7oDccNDddYn8tDqJF1HVFANZ8Mij8a3zKLs3DYb14QeSudoCjci5U2jtcPvUsNAq",
  "key12": "2BKqZzCzHE4EpQrRyCipjznm4wYrDtmY6BPaffswFLdSrJ1cu6X2uEnJ7D4dNTxRDaK68Dcfb1uqyS75Av9m6i2X",
  "key13": "4j5xk7PPKg3t2ddCSVFooBtBfwcSB2x5d3pFx3bXUb48iDNkayfPWuzKDQ2KAWDVf8qtBux2NdE16MWLYowfQyqm",
  "key14": "38PownmqCpRmuevaQpSVob4sqjqoSDXnjBVFwfSrj9Vz9Ku8KiQPFo3MqNU8oUqY6TvRvjA8A7hU3JbTgSK9wPAW",
  "key15": "387Un2V65HwBvvm7rNsbvepjE1yPZabseLMJkTdTGaz2dSUcffx8in8GHqPX1gMw2bpYYmZmmHYaJpkqz1Gdj4sx",
  "key16": "2jyw3zLDNZ5uyydthpsHYphSg4GVsx73ESgJBo3JTk2oKNSfbwWepAc3RvWvrQe9ny29kiXBeX4sASZgDwZrQUuT",
  "key17": "2kKQSexoP4bNA8ENBs2tw3QxpubBmJms1Jq3S8WsxhMEREscT6jidKb5k7a5N3MLgcR84bjEzuTsQby4R52AXTwr",
  "key18": "3nv2YjK5asHib4V5oLcZiYsD5oNrEs9UvNRFgHTxxN6ERKqYCjvJqNYtkSvYH591e6BQvDY3y1MY5gA6oFufq7Re",
  "key19": "49drqqWgDo1ZjHkcHEvos6mM4NbNx8jW7tL1oFj3YDUXZN5pPJHu9CW5WJavxLGiDmBJSUEmrsLD83xhCp9X6fTR",
  "key20": "53tHHAcJyb8eouYBgGV75fza7WiVNrWFMR1vnNL1JRRqFGApX2zeRSbnAeHPMi6n2VVq4EQVDNnbWTnUzzobwPvH",
  "key21": "35AjGyLh2FpvNXQ3oeTbKy1BvChTb5YTp1Uv15VyJy367og1tGheLCNc1nLaaZmtCAb6GRw89tTYRiFcsn5v6EgR",
  "key22": "yJziAgowXyUtmNge4gm5c26xrJUs1zpgBeuwurWhRiGYZSHXH53aZupvqoSPoCeedoGeMSCGoq2wnLppFyCkUTu",
  "key23": "2JDtS8C7M1YKxvqF6p2unha2GpFDZfYe1Cb7VEP6aeUFzKckvxe8uMj8iRWUGmucMXiegVeU1gLoidwtWnwuim6p",
  "key24": "2243jJFe2YrZnyUpabitGDaCVU2Enoi3WcJ5D3b32QTdXGQJyqJdmGQq6ccPf2s6He4oG4BTRPkw6G2AqNSk7sq1",
  "key25": "46iFkVY6FubBuY5HzoiY66rSTugUfpnRC2DWnsQSfC9uJprb29fRtBnATJWd6jv9TcZzJ9EJ2PnTpiXQmfHKszfy",
  "key26": "h6DdG9wvwcUzeGQwDD1Az8KWwHSBUgNk4qr13wpg15AeoMRyJG7nmkPCscjYCCJ65gksJLrG4k68SRs5Z312R4q",
  "key27": "5up8giVXDdmyynhA3HBd96N3n3cnSZRQfdKKvztwLWNm2CdjyyYpcXbSUKKhcvnWsxs8NkzUasPpPrSYqAAroUGQ",
  "key28": "3BLAtYtHdbBCAT9ay1qWevRwpGUKsZ4JshizHipUxMgy5bcz8B8SBDaX5CZZ94zjZmDoc9xDven7JirkECvkFSvj",
  "key29": "4xqTX9zrdEvdpqhbzote9L6m3D4bSEWrYwS3RtmbjeUSodqYKdb7uiFgkKPb9UVgVgniBtXfFf2Phvo9WeGknTsq",
  "key30": "2PTrudentPk5AErq5ip2yi3qciFqHP8eiav6gXjSRfJdggbVZ7dySQXDDkeWJM39dDtacppy3yD1UBEjmNFFxHa",
  "key31": "5F4JXmdbe18nkTpwGrm2WeGs7RSQShM4mMchQRcCGTsbcwSdxc73dxcd7bV2VaN6Rx8YadVCurR15bQ74G5ibzx6",
  "key32": "4eDnZ52emyEYbNCcUFpDodAwSmNPyaAgutwwocobPzD7cZbjdBzAduAQWNHT9cfMRT46schgWrCHMn8Qb5ynHFui",
  "key33": "3nCEX9JRRaYuxPjuGxv4WZ5iUQvz9i5WkurvbG8Ahj2dmB7onggwENhKqWAohXH9ZsYZ8PrXZx7FFVboAeMcqs3X",
  "key34": "5rVnfrqn3L4q5J28EdeRTsAss2AsSHaj4HKmazcKEJDPzaVpdBsvb2L5K3Rvm5cwsHhuDD6TfUfU8iPoxZNZFasJ",
  "key35": "52s6t7KWdwV9MafxiraKc8SSxs2yxtLbPETb5EncBhaeDqNVWVxPa2QW3dYLzixiFFvoBVZpubXVc5xNqeD5uMQd",
  "key36": "51rVz5UEiR5GkbrfqoZXo87PLrntsX2zhejbsZhQfb63Qn9fQVptQGWG2KofWsYwUfbZ93jG6zRYdNSDJhJGccBo",
  "key37": "4thTR7anH1Ab3cY4ujnjrzayiwywsD6pyKxk5UrPwUV1z2HdNLN8mxCstbydXvKfbY842rCG61QvC794TxUTVRZs",
  "key38": "4PDxTSmssFiRxVBFnggACAgX9ZnWxpUSnDy31KvQKe6jowrJX2FKox9UNeaFEzhS4rhXNc31ZyxMZQi5R9novkyD",
  "key39": "xk6Q7Pxwo62Vk8CszHdwRXAgMYkAZgiyckpE6T1vXL74kMksXyrHAZEyWVS6KoRqNiajxB96UgbU9o2PXrvY7Ua",
  "key40": "3H1XWNDVi5KY4d4bGgSVYPkWrjgS35B8KGYpprjngVSocTjCAbB83hX7ioYUp1nXKpafwtufJXVZ9CTUrb99229Z",
  "key41": "vTnvWT1bsz7yooGSV2ppbqUVzRCV4YggwzBs9h6Eb9kb3xmtfLhHA4FXCHJtJRf68Z3ZnKFcVuaSeGcBxR6rHzm",
  "key42": "2yWxwLUuzYjdS7SPxrEfyp6GnmfAYNDSEQ4z7FEqYmSeBgZH2JPLqGPKyD9StRi2CKXEzwk75TZnQzTWRSYS7Fog",
  "key43": "4nMcL14iMq6jpcb46vMZWLuBAWHj2BoAfL7FsNgKz5fD3apiMw6fZVTJBKbLVbyWgWQfmxBdEWsuSombE4msXkEz",
  "key44": "2zxMEiTKgXdVZysdYoEhp5wGfzjVa1dtWX4j1qW7RrP6hmzZNu6v4Gmk3FVvEv3m8ajoJaKMpaHEB6oVxA7qMr6V",
  "key45": "5fU5y56kZKrPWsobP1kb6CJwU9rn4BoFFwpVUk67Y5xjwqLWezJsARTJAWaGSaBawsccY2bxxEntE4bScxkFuK3d"
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
