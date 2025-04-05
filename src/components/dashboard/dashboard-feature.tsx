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
    "5KawVgtmWujCSm8cdD9JVnVpBEDgJ9CsjN2yPQC7R9yJYYhYovy1AZhCVCwJXb8HP97hGgktBe3WL2Spa3igZD3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmXt8cqjEwtdT4xeMAuNg9NMSUwStFKkNmExrgAH4htL8ix3CZBaPGuZsyPbJ5QWwZHGaxaFfrZfzx2j26pFQ1M",
  "key1": "5X7gcUFXGyxXJ6UNvFhhhz8XxoduYiqgcb7KCXbrBB34Me8K5qscA823FVZn3Y3yqLTgoXdkyhZ5tYtpA9AEdSmQ",
  "key2": "5oza1ynnfSbWRPEft3hqoY2VEfWbJqkG76vAvdTWpuobHN98PAPv5DZZjYNKe22djDoDpkENAysE5xw13ZLaPNf6",
  "key3": "2PmhwDcuCWbLiKGQTcWhrs3avCzdzqwVfoxhPjV1BeeYsuPAXKVKjmnUYEWphcNS9W2M3ojBmW2DixxXPtHvbm7B",
  "key4": "XyEoVnM4KPtqcncMrXv9atyCBxWSyTBfYQhoFUxs9bM2YkxiRaG7N3TdY7pgGgQYeLrBFKgHQPzUoaiKrDWdBQS",
  "key5": "5YjxVarFSrwfJE4HNJiF5MTryTKwFdrhE9sw3tphVo6PPHNbJQhfjh63XKsCGnYbzzcqAUhXQY8WeLhv1u5UDZMM",
  "key6": "2puwK4Hesajnt6pzAXFp3reRTxYX2M6pMU5wtFsqc7noNaPeHei5Eh2da7mcGvnsMHNCRREZEoYonC2JpVnTJa5k",
  "key7": "4w8XjzNu8CHRZgd8pEWHYXU871Xu3RZZ6hP4bxXhc4ZGTcgWQCtr8v4NXqkwcQhZQ6bPbqbpNYGrbs9G63dcnigH",
  "key8": "5S11F8R7GrJPjek3xNkTgxBALhg7pUbBmi7TxteUhC3yg9UQSBx3zTVKXtQguSYorjJ7sYFXDVi8U2aKR2i4LXm3",
  "key9": "TQjw6FnhgcxAd54BK76Kpa4KUC6HveSy4TQP8DjVn5f4KPBMup9TRBNkJb9nUfMBTw4viMKxevePvZctS8WxSLh",
  "key10": "49yHXG76ZjvURFjsrg4n2zVSuNdPu3PkvGq6Q1gstgGnedfntK1JsWpHrSCR2X9FrpPtkcSShsBtUDGKkRzyTFo7",
  "key11": "5fGxn7oJSfAUkJeJ2Qke2Th94CCMP8xG8gt47rt2CXbu4SxeEjGVoYYmSN59kbWE8mYFNUvvMYRDhcbYsiqNqwzo",
  "key12": "25gEqFhTPcX5tU35MpSzxcUv5kraupEKS1qEBmgMCds7RmWfLSCDzG6kuHQpwuDQSuQuNxPiJwtVni8fuwAfJko8",
  "key13": "Ee1Fe9LJbDSTYAkmgJ66E3HRhd2AqDMGeo6GrUJeSKbeMBiandtWpRhVn3tRNT6kAVjsbb7SJ8469gezGmhx4Ww",
  "key14": "2FkPpQazM5LkPr1krft4tGtPtnrpiAoDqSq1vZm7nurTFiApKRZpZo9u7e7aYQTsHW8fBLeBtiLN1gXFmya2zRav",
  "key15": "3wtjC1o1uDrt4HmtwmG9h7LfkDW2VQy7jmj1KwtMMRAGcohvK5CZ3YPFmD2FgM7HJKEdVn5oZwck7KaXjTYafkxq",
  "key16": "2jqnNUN9sEkFPPMf6ecFBhoPtfPBr2No9bvRW3NhuALpaKThr26xex7GGdPhFnzyVtNtajKufxjCLmrs7fitep1e",
  "key17": "51qe8jWBAkYeayKtCoydCGz4GU4uHk6aNeH4X7t315RdNLCE8KEQ5ifhxHa6iQjfuHuTxp94L46N1wfRbzPUwUYR",
  "key18": "2r9iB3fQLhZp7inmdMDiDCgf53TEY6jo8mKwoNF78VMjsxFvSc8VMtCXbb11u3UvvktQLiAL3Yh7Q8Lg5bmLRReA",
  "key19": "3MBbu75AfH1oQWeZbQKA5eBrZjkWdx5wiK1E4C5HrUvbJZHzNYQNiCd93DXTd7BWTPSBTfF8X4FyDg9zGvJ4uSiV",
  "key20": "3eZM1KeQQQ5y2FkHXbGrS49VRxMMctjeJ7uHawQ4iQ5Y8wjdZKajiYEWShDatJEC7VugsQztw3B4rq6aaKXHa4XG",
  "key21": "2jMrhTjXLanHrdGz6rbCi3wPA9dgsDvZTfJuUe8tPa7hJMjpnxf6BFAS7i8AkUu5DquJ9KELht3xn5EvUD2TFkJx",
  "key22": "3yaSMGwLaMykDGCscv9zghhNq39NKmm83DQaNnfLYJCX13S88hzpahM2y4SxWTRF3DqtwWusvRuF9de5seRkvjcb",
  "key23": "2VNiemLcz5ELy2Mff1tDAFyr1unVrUL7gLRdCSN48jzzMWdt1fdXzHLR7zj5q5C2ECATecJAv83H62Xc8wNVPBu2",
  "key24": "zVksiu7ekPy1cMhF1U9mrZ5fpukx8fgXFkTXC2oqfZoCH7oNc3bUs2ion1xD55m5AwAR8JJVgK1mkQgDRKoTFHM",
  "key25": "4m44V9Dou5RGviG1eqcqsBrhEmj5FT8ecJ82cikvEHJkLBu8ywXA6BYCMRvCpMECaSCQE7qXfi6Zx2XKX77ie6Q8",
  "key26": "4P5SfKYKVdCDJGZVKt3B2Ggbw3hS1uvoy4eckChT8RfWLymE2h4ounPr7HmzW5x3ZsfNegH2DVSvkSh7vpi1oKYQ",
  "key27": "rrevHtwC61tvo52Dcd6Cjw7w8hmHo3xku7qwM84hjMnfydx3ARSRqDxerYbuCFu7DaCxDFaUbKnuyLGEiScfnbV",
  "key28": "2bN6uTn8rWZLXedwDDVaQN4HsxrruyZv86yojwwrVXvs6N1TZYC5qgmaUiybhkX1RqGgzoMQj6cZsWTi5tRNQpwj",
  "key29": "2xReTyxNhUcctRoKsgpDK4ZRWgPnDMAP6kTwQtbuEtMhGsaL6dwRMdv1Z12VPK8wXez87preqWwvapw6kwybY8cW",
  "key30": "BRFYHk1jkQJxXibyME8iqmpofpaYvZXBytkFsNq4Gicnu5K7P31uidHcmr6KXnXVfKrBUdoFcFmXcV7wMwypbVA",
  "key31": "5RDGzcweiaRdMb5VmfHvCwjbcFXuRm4KYHHutEXQCFhaDvfdCfrbRDoLTDWfhrXs5gfyhtFUGWyrwK9FbWp2KEZ3",
  "key32": "3ADHjRQmz9cBYDGQVsHpiWs6jyLK82LMYKKQ8cZFfTyijzTbZghkbEtXo7b4QQsVHjqKcaiXp94VRJEUroQyWxhV",
  "key33": "4ArHKZALmYNBf1cPf3wDS47365qdg5kwoyzUfCyN9Nboiyah6kJpZoK2xnD6VGf8fnThrbGfc3TbGpuSeQeiQdmB",
  "key34": "zNmN57a5Ss5FmoTWP6PRWvYPyLktnyYiv2sdX1uSj2fnV5XeiNzqDRZzpxFWCJEJz4CJBATvfF9sjJ4raJ5CL3o",
  "key35": "3jC2z2Jnwg4Yh9tbQGHhhuMXcyr9WSAHi7b7oszkq8J3BKbcx3ACPKGweX5Zf6QWrMa5sqsSuPptv7Ee1AbQjoUL",
  "key36": "31GufhHsjBQf7AWsTeMtKKz89K2AHg9c2pvGaMk5mp6wvEZ5ugMuv19Np8HkXiZyAWUrq4FPpnc9v1gAKNPtd5sH",
  "key37": "2fA5aaJ3ue9vjjLrk5Et2vJpU72DZpB7HtAfaaJVhWv9zUYeXA91nxPtdpDr5pQkEBf3dA47nu6VKjN53GEFGB1M",
  "key38": "2vFvx4pagXjnzgBxepErnd7HPwbkucVu2vKHym2mLnvuLqG9qXSD1UhawTjmYgeJSqJeNcWS6pHFA4YEQVFZss7Z",
  "key39": "5jKSLCLRsAh1NtRMq7o1X7ATJUiHswo7dJLZCzAg53r7NSPhM67LoD46hxbX3ZpaPPWQsheem6X8qBqPcspVqdqg",
  "key40": "4QSZ6zDgAy3L8rm4yZRQAJFaSxETnW91hoZHJTjpPjsWwez3oxuqHgjHrSXAPAt3k9qWkTZrvNcgaR8mJHiAs5au",
  "key41": "3Trp8qPnMk888WS7scxDEmTefuiHYoKryeZHSz5DFCVXpm4b6MS1jiJWDinkexN2NKT8zYhr6XE62aKxhHQpNdUK",
  "key42": "5VkDnVQJLevquF4WRhzKvoXj42mwWtiqcqeEM1J6s7Z26C7UadjM1fn31qctt8j8nQmbGAHMzXjEmwWc27uEYBpP",
  "key43": "3AtZft8ZgAGJEUVbJQiVgAKXoGXABBymkGYjCKaWCvXkmpq2jdeg6Fenp92WTtWFN4wYpMmsE7jmstSY19mWfzNi",
  "key44": "3omZ3nfpXnPtoegaq9NXHTr2qYKKzC3H2bd7pG1HcwUci5T9jegNeVhALA78CKMYiBxqnA6RCPAtjGJXSbwhW4co",
  "key45": "kvBnGqoeCUs3XviP2ZsS1JbVc54dKMbEZfad6h97S1TZDmUySdLFJXryXrDS1buGgBKPNiXPcEDd8jGxZQJKCox",
  "key46": "47oo3heX8S3aADqUuxH6YZvCrQvnEgSNXZbSxKygRJQkzAK8jrLTqURT5BFA5yn9S8kGYg4PqNq4mmjAEz2ogf5A",
  "key47": "5V8sDgVW3teMF8AK8mxh49bLWgCNSjSj98VMccUS9xs3CYcRyGGU7iP8HEbaqV56XvrjsXHMbJBUaJvyvnuNCRjK",
  "key48": "4KMPJPwm1kjQPMi7jXrCuNEv4v3kWSd1U3STdt24rt9wpAUKhPCSGf5PjwDwFEzcSyAcKLvKkXVGsMw2P4Tkh8b5"
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
