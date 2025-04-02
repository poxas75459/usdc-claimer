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
    "3GzZqPXfb8rfrzYqTiEohx6c3RrJD6H72kwKjoefox5L1B4WTfFxwHFcw9YyC1cktJU1H3W5EuLgW4Sar622QhiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MXGoXyDu11rJMZteozd11qyY8dmX7vTJC73A35Q77AMe9KBUn1Z5koc62aumYVNoBUSY2QTzbNzF5ArQXRboUm4",
  "key1": "3wWFVtSaHMANrE7cqU8kohwY9feUc8X82KxUdjEc2dYnGpQJJ8i45H3wYRYkiFDMxDmzRit8u1KpGV7z7fUWysbV",
  "key2": "3ce8EwtMooDPo65qV3dYLA1YqqUQd7MxQAzUnvRY2qxhaHBEFR1PM59Y8pg45QkDhbXdT2CaxwRQB9ELzjUnX1Hx",
  "key3": "4iarUw1GF6mZRx7Q1592kqQgvbJ2M7xztBdbGunedNgt73o4K1XXdKP6rEhwZxAU9VTg6ff4hvaMPPqDjUEETLi3",
  "key4": "44qkM1m9253YowBLw9cZ9ytffi12ufrAC9sZaJhugTx6RcPmZjDkQ7jofpUqrku2SG4FkZmzffdg5tNtAH7SfFDS",
  "key5": "WPtpEp8dCgqBrNEH9Bp8NsrxdUXeW7eUYs7GWZaCTKrvxoZux5oJw58x6Pa4eCyhpGtktbCmVFX5xDDkKVJYdq8",
  "key6": "LsdQFxYbQE8Ss6YQu1LXt9Pb2pg16zL5Wa3PFE6eeptX3YoguF1gTkwoSmHJJnCQuyzoBgZ2dWQTPpaKn2mXii9",
  "key7": "4cr86LyGyMrQQq4bCMu4SNYWfvnC2dJgaHVZD2vuP6K6br3FAuRT6h1BEL8uNtc28bJ9GAoqGE8H56HzYmoUZXQ6",
  "key8": "g3ozMY3N7bSYGJ9jbxhoETciE6GBXmBhoh6uHP5PFx34YChabv3id1T5GqXioh8AvMMjXWokN2LZEYqQN8HuD35",
  "key9": "3s8Mrp7upWZbMwVqCsTrVFejGG4oGbiBZFG9Nv4gMhJWxRA6HPoswCw4LsmjSP44KNuqQV2AvVAEtxTKrG29HgbG",
  "key10": "5QmB6dXmcy7GnKxH9QYhLU4E9vpPqFuUQgV3XVw4V4PZEkHcN16WcRiCg9mFQju77xSi8qUamabcZoneJ8bafSvA",
  "key11": "4BhERMPPJFBRhKAVP8KUi7euLdqWLhvTXNcnduDqou8oQqRZGUrHUx2TWJ1tyjx7pBQx5E7v3wXPZskoNvC84Ygn",
  "key12": "e7HYau4bQhbw6atW35dTkbiRGKz6R7Ak35NujxJCNf2w111A8j3tcAzsfmJZsJsuqZxtM9XwjYKv2auXMGehyQu",
  "key13": "4ebpgX6WWRXvufKwt9LNoBabgo5YC2MpsifpbmfvbU1VcKXmD1aPn29G4UoeudQNmmZcxBrrBk1vZjeKy4kPPc2G",
  "key14": "4AecyG5FDPx2HoDErNWiKuC9Jj5VHrfgr81b9iJMdd8SRDocsp8Txz6qCjPhnFoPjeRNzAwLKuGU5bonbM8vQEQW",
  "key15": "Z4JmMutSWQacGPgySsu6aKvCxpqy5DLGcByEenjwEQVn9KSHQkNqVwFcdGrsZXQNNqQNXqMHZATmETEwqWwiDML",
  "key16": "5WYzC3Ye8qaQfh56RvoyAN8EcpEge5FiVJMuSCxefkDmkSmXjd7AMQkgg8HeM7zELmWM4tZSSUsPXre43nhcgWpp",
  "key17": "2vobeyJfMZxm1EA7doSkVtiVH4LT8KUyxbdoiNWPgrezsNA7MGh65t8GA7JMjjoC4MKF6xgZ7zoDDoGB8D1VSXJo",
  "key18": "4npP1dGeWShUDodmTMfwMzPyYT4szU8YoNK7kmcEnk2DLzzNFv6x2st8apubbWiR1EjZWcxAbZPTiKKrX5HiNbhm",
  "key19": "3KRa4rvTuxxG5CHYAc9K2pqdP887rPiNnKu9gWoFnRyp1PCwNw3amBseeYqg1yjrAHFybtwdDAhokxVqAnDTLk8L",
  "key20": "2tAhwmdpU9Q7JMBCqNZdbAVu1mdxpEX1vwVYGPDRsqbqpSUbvvpDkduHQdSSoJaw8iZeBxeG7Nafeyns16VjSnNK",
  "key21": "662uNQtcACu5UHLEEziECkxLDnhprqqtiKJWeVEDSCTFrfTcNCeWk9AuvmPZ4qpn9eEEXbvpYYF4f2Qx5dGpaJsZ",
  "key22": "52dt7e2CCBLMEEvoDz6MrPnnbVV7YkaU6p2uH6527atKid3dGf9j6HaDsK6ZefJjqsUjgCzBVr6FHqKFhCkPT4oi",
  "key23": "23W6YA5PDZji8ofCAgiUkf3d2f6YrUn7wQPVwLUjZyj9aLZJykC2kU4wfhmeVQM2aFzqipNtCcd2bYboA3tbzR1n",
  "key24": "RifoCWawG6jAPys1wuq3RksUbdLFYUdme6JDd5nezLJMV4wThXTjn6HkdJqPnibLbgQnEDpchXPtTKbJoZfGkEk",
  "key25": "3pJMuyiZKc4y7HYTs1oza6CbevSUHUMHL8woKxyFcjy7zkoCGbCbazoawwEQXBQLpGTTAV7BBWuc9vUwJdrHFLna",
  "key26": "2u9mLuxJFEiRzgoRBTc4rpfsX6fngDb1NWmSBn4mvHr6781kuLWDbAvyWEQyLyoJmomiSvzBCUMLyvxGMxJmnH8b",
  "key27": "3CdxsqqgJW1dQTGcLg18DJkdcRLkYgws8WGD8pmxv9XXnug1en9KwTFRxybp3PP4gZcVnbEHaZTRkFtyYNB9yaF2",
  "key28": "3SoBRmoBNvVJxSQqwXtqgpuSeUMMXtbgT7U5SoHuEkAc2WLrY9D6qadJj8VGvHknaFniCzh69zN5hjmdcgtCKtbq",
  "key29": "4S82qgSFKoRGLqtX94Djk6htDhSshNXcwo2Cu4V1JskdarMaS8vES9TFKy5C782zoKhCSpTbCGeeabfwKX2ftN3D",
  "key30": "59DrsyPqPgLjDAdEHCQVceRx9C1kdnG3Bq3GV6JvgNxfPJG4GdRaAw118f84ct6TXFD8DNgqvEM7KPeSH3Nba9Bd",
  "key31": "51c6K3JVHDvETSM3DTsCMBsHTyCvTnXCgBZh6CNUYLqMA2maS5guXFRh16iGjUdjL2skkKZKME7KFsYjVTmWgjhT",
  "key32": "3UKUfanbSSXGBpNaej5LAAop5Fi7xiwJmJm8r5yn41aEr1fS7mZqBAdhMaZ6RHQNhhVTsJyPExD7FGzQhFTjhfAD",
  "key33": "aLhWWDrEvy6u7xELSNzKCy5QAEpenyUtJ3JRqRFFvQkSCYREQ8UY6hzGqpFeQMfdz7fE5mvAnw4YdUVVDqvHEUz",
  "key34": "4RVvweSA41mNBkRv2UjAh6bFgDARRxohRjbVSirYwbouCttZorJcJ9hyYveq6Mm88bHNXww1RqUrqADdHVJhejuf",
  "key35": "4rAF5aaJw4ibXjtgCCcwD38ZEqD3EsXbEsw9efddm8RkCo3Vf2L8FGvbpYr8DYVa9ot1yRJxtRFPKC1Z1kN2Kxgo",
  "key36": "456pBgVMwJYSZPeHeCFirDRM6vgASv8Mw7UcN9VHuhRcqQz7NSDYkXzY8mHM1s4NYdTRJZKezyW3znm65cJwdFhB",
  "key37": "4zuG8CdvfXTwViRorgeiB8kEQK7fJ1E3kEMvk7exYWQ4mpg9HaLzSPinac9dH9MW7H9xxs2Nw1pKXcXeMMujM4XX",
  "key38": "3vx19Aej8CRmY2SFNSCmwfokfygbKmuyB5YbrKE7WmJ62CXKKM729VenYmb2d74cQtsxN5Jaj8tSBcxk3VucEgZ",
  "key39": "5MPjyLGHDuKRxuUb2az9k9k6DC4hxRVY5SsHr7jyVaGciUhKtthVMucCTbCER3fqmCLWXqoyxbVDgYUcRh3sdEaH",
  "key40": "4jDTTYh7u2XqxdszQgM7vDg6j4jtqXzvENkS6VNB3f9bH5GpAC4FFGGfg9KCaHY4zikwnRJicYECxzgWJWrwwvNE",
  "key41": "2c8uC33vPYVnJnNUMpMBhLQqsVwUtog1utWPKXuTTyWtXWb5bgPe2rqWsQjJdcfRdgaAkUHSgUgwTcDBtpbaMqPA",
  "key42": "4WHMbzw4Vssh3cxeLi9xAAicZDdWyvHAYdJjRdiNcTNFvdkrZAoQn1PnXBUo7sz8pLvX2SCXD482SG4G3qXrn6KN"
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
