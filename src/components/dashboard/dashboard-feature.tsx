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
    "CRseQpN8f9UnUPeScmYzvLGj2DcYNE4jeQtpVFqUNQaevQMQ5HhSZSPF1oKfjb7SLEaQjPVzaiPhD5VceM3XdB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yshWBqVy5Rd31wSNnpDRLZ3cAX9Vyp72rJUStgcu4eDJBY1ybDX4qY9E9tcvbsoKSTsafmwGJ49VfjMGkpJbA91",
  "key1": "Y9t22XoPZ8ErqRAysFhwSStNhzMngSEMvxgz7L6CdkxsUugkCpRaXFNpt1zfjwSC5aJWrZwUMJaaA4Y4waaVfvu",
  "key2": "2d8JcGnVeUmRj9vA6iwcN2ePFS4kXJBX4mmMd8aJkwuS7QKjV7myWkhZRhNaZsZqh4wYjcgSXGxRnATJsJspgp2q",
  "key3": "32sBAkEttackTFvTCmn7xuMcKR8D9A4biMHKkwhCCA6qjtZ4RDo3QZR67nQmiZsSxY3hng1Z5BsUdF7KJMfdR46",
  "key4": "34KE2pCthQeinWtY2yLJMCK6kVNDPXwm6oJqPQPfFuF9nsozxdCYTpq27wMzrc539Ud9tvxWP3DkF94j3T6yHKE7",
  "key5": "2EJVkNQwGyvZeTh2Z6qz9fp3R1sVizhxvLv24hHcKYqczTSVudf4E6rvxqTcg3tzNfckNciEmsHi8awKkiznWJfd",
  "key6": "4pddUNYkDx413jGQWfqk9Ao6n5hanMqj9CttHTqLPJQTvjK2ySon6MRonc1VZ62gAJ8DXxoDetY96w8Pc6ZbKyXr",
  "key7": "ybB7myZLZWwSAP8zYhskEnh6ovGF2ZCHRqVjDdL67LGWyip19zvKWQrZwqsjpDaKp5Vwe4Y5tNdPNGy8kh6iLjm",
  "key8": "sbBwNHzUFdkN78u87YVmRpmNFx9GSyjcDbFU3uwyMFB4mUTgJs1Bhki4zeHswVkyxuooPB5f6BFjNJ2kMMJ8qk7",
  "key9": "5L21ASM3mhnCeJTJQwBhbjTHZ2ZYDbverpT84ikU4b8GyUge7B1pSrGMbXXfzHccx5VoWJD7C1De3kjsZ3G5u9Zr",
  "key10": "59T9FDbiV8kfhxoqQPLtPnvwPusa6kL4rpNLLX2hpFc9tUr5fSB8WdKmmd8VzK8cYk76412XcYVnb97dGL4rUzDV",
  "key11": "4ed28ejWH1zXUoXNbcnfw8rdgh79BMjRSpMeswCi6aszH4d7McC61MCDP2KDdADUjXfK5u8nkRmCMxMG5AWrn44r",
  "key12": "5PUPb1yVSs8ZBRrW3YyyXXPqVEWXaZYh5oGGJ7DHswBknoP2HnqUyNaug1BraDdNgtDWe5Hvbdq3WXGbhyoP1P3Y",
  "key13": "2Y4Fmo4Mdx6hngs3kQD7wkxZLpuyi1fpkXwrGQJooUzr7XXAhUaAu8CaoJjGZgBqCHucJMAqTE1EfdmpzuDz71Rb",
  "key14": "3CddJ3t2iWMpAM2SBrLLY6XCQvuY2ayxV4ouTj6aFsNX5V7o6udUJpcXuJoLSHy9cUbwyp6wbyEuPwsBsPy8WJ3S",
  "key15": "2pLBsRzFxuQQrmW52xtQ8s868hp34YeUjxaGHucECw5VHeWxnQDrCbMufAYwSnSwxGBEEN48KW8SoPii4qbVSoBR",
  "key16": "2JTdPddcqv95Sv5qeEMtPyY5CrQigHGNCKY6fBKAY4NogFQcTrXo7Cnk7dBD8iY5hCa3M2xD8925Ty5HDgEms1zK",
  "key17": "61wxi86UiN4RNHk8qVcWCCjWwGLLnXjgV1ENdCvxHdpZfVCdbaTQxyQRqNZtMkLfERf9XdGLT6pjfKzgq2Zjt4Ex",
  "key18": "4qAAahKGkgJrvXy22yiuunLbJvmkfNFQdyNZAMQGHb4CeNYjNHybfFwemTavjPUqTjki8HvmBD7gXrCmG2oEeb8E",
  "key19": "2kKBE2JBGSduj83zAFPWmT6VDKv5PjbjnVJzRMAptpsWZH5Z8F23hWQTLnA7XXJnaNevk9A7bwCTSHCpjx962tYt",
  "key20": "3DmYLKSzd8AfiZiUL6mj5DKkePb2mx1ZtgWpqNWc5pxQMKUgFAK9YCoZyutAdZHywXcEA4rncpefaqwizY5TcVgq",
  "key21": "4HYD485SBLkLJeG44g3Kw9bsfay85jG1caTd4asZxk8sA13nVwcxdRHPc1Rp8WrBJNJFnj5vMLRQxABmDkca2Nxs",
  "key22": "2aweZZMdzEzwb6u5BSfmCgzdj93Rh8a4x4hjjoXrY61V1RivhZwZEkfkEqJf9fjYBLWBceb28s3x96sUTavpouEQ",
  "key23": "5YY3Wy92hfMD1kTauY1tcgHRuYwocdmPmTYhKdYsmFxeWaYE4Gne3QWSb3YoxqooSBuHPAn3T8YKVgMQnCr9snrQ",
  "key24": "MD6fRHkobypH4MokzkFqact9k41MaooZmfgEBB6QFawA5Q3ikCRv8AEWWs54iJgFfMxGHpSb7JLJinrmRo8FKvy",
  "key25": "2YE4iuSTNWJ6XUmY5erFP6bfVJ5ajoN4u4xUmooXTL3Dz97CuBt5KK68QnqeySL7ZsPbHvZgNH8BM8fT1sbXPqkT",
  "key26": "3t3m1uv9LvaLX3ZjsfA2PCS2qHbMuLHsJ1WzLXVT6Yqya1SuAQtXoUoERL5Yq3dgLecrr2hY4mw3qBQKPw4WzBEu",
  "key27": "d9mhKX21Hip3DWfRLTLVDGPe1xDHdpeHhisriRYnvNUcbshM379e5cfMsALVToXs6M5D3bSm17zXWU6HEHDmX8o",
  "key28": "2PnaZJ25Zwb6tFRjdz1DstcfZXBMEpdxfDDxVjfzV9gQVUAhdzefZzcEnW7XjcY7ZjX6iW8YvaXrUHv56X2hZigu",
  "key29": "5yPVqqzGNnyY3X5KhMrruGnKmtD6wN3CVxZjT2Db9ucxTxykEuPmkSBCMCxSgsnnBzHpMaao6VeY7v4HVy2A5w3P",
  "key30": "2tcfg1ajReNMqdUk9UatRBEVsKLZyNp1ssrjyYEYiUrk5PrGN7dvHYSDoZPSFPv9KjCxKqBkDyTu6xQspr2DsXB1",
  "key31": "j1jt1FZSJLZER6EHEG4CpqpgXp7vdoE1Uo3XYJVaggWvE99a5cneSgCf2YvvMUatiAcUZJDPj1LMLCM2VESFx8C",
  "key32": "4TzaPzvsQePMhM6APqRqPZz8evrzMFMJiMdRYjGP9maVZSyEM5rZ7Dbiafd4bwqs3PjfvrHcUhERsHjAw9DKX5wp",
  "key33": "3nQq1tJq5BF4dCtA1fSVUk3sSMvN4vG3oj6PZMKHot6ET6DwGLa1G94hgU4GhBrNashA4zu6HPLftk66FL6BwJub",
  "key34": "1nJ4t9QsfgcVSfJNYaQ1dKEEfpAwr9Q2LbQeyKde1oR8JgrH2QM37EpE9wh4RKiMyicY9bW5XDfAa2CQnywWKa4",
  "key35": "3hXdAVaDYyCAZHpM9gbsmvUk62BjrTSXU7YVGEi9XjNiXh7dUMoXwdvDhAwcbgc491hEJH2snjpAdY1Uj3buGsRs",
  "key36": "2RD12R9omNhT5vKq8BePSVfFS59mRwWW9YkJ2EuhV6XfN2f5HB1CZruEJKBLjQ8GMKe5ZX7hKHnvd49PpfhL6opP",
  "key37": "5ftEjmQ4HWEwATKYw3H8DkRWiRYzGsSc96CvuTwBekc3fWB3TpGje4yceF18fFEsTKWJoNgGYxrm8Mp5vAXSAMLw",
  "key38": "VLKqfa1XRaWPEVbzMN51NFHBENhoM1dtV5bp6CJ2rUYTtELZGyZ4bmN8NTFV2TCuTPGv8871LYwwy8yvZSYWckz",
  "key39": "3z8vfM4YY8ARQnh4WYSUcj4HSfqqintwaTF5SsHM9Mft7GKWk3h2JMyJupLrZUusEW8CA5jHqxX9frKVt21szMWn",
  "key40": "5d7HPoukpKoqcTypaVriTrb71XZrjzVXUhUTe2KyCsdXMrYq4fhuzQxZhmngG43AHZA5ebJ4BfUFXeqU2467hfxg",
  "key41": "4Pr5h7hJBHEXkNUFufXWAfphquoRARzyNcQyMYhSaowtGbf4HEXZJ26WotSHzBQ5Qt4WnshkWDJUKXzZhiqoVghJ",
  "key42": "23Psca45MSykGZTM3cGtEqh9xV3EcaESvKCLfoKTYyRPpSDtmh7i9hNfF5F8NYbN32guSAuuG9kyhD81meLo7vjq",
  "key43": "EmE45ChcmvUquPVkRjVTLsxDdQxb3pMdgjuUheHBjwxvWz1dvvHYagqaPSfsZB5K4wS8WacQ9HtEoApu4bHWy7F"
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
