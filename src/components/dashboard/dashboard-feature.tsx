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
    "51JiTgpg5XDGkCs1ESDSv2tmkW8XYSC2teNgFx8gk7AMTxPTThwLu6aLipDCSoZ4o4RQpXZe1DJAdWiZDGSZkEDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsrcEdvWHryFV9pKFBn53Zee1Me4YZ1MurJwoC6MbCMPj5K1dodzoyyD4kX24fsEE1JCUGZdWsF5EoAqErTdZ9o",
  "key1": "2ZJLq3McMCkJvQhcUNhXPTmFH6x3fuSRRSguLgjpPNcJeUJF74Hz7wUrofCZBvvbLKynp637KgcgRvi3LaA6vQxz",
  "key2": "AsMBGatYRbJ4y5wxmVGqee5HpKZQmuvrwYVF72zKcSow9ndNJNG3EQ7tdebWGUZKP4PZtC9xkvxq7FQ3kDPrNaA",
  "key3": "42kLR3N7oCivfi1LAM1JrnTFLU7RBwqj1UdnjqeCwQ7yM59VaZk2dLSTRCLmJCXyqkeDja8NQpzou4gfYviPPvQo",
  "key4": "2L4qoH3AGLLArL8amE2vreDCMjVtmhJs7xhz6aQ9CCYvapH9vxbUcsZdCapFGAx3LPuZ91d3cU11XNYpNyodUH5",
  "key5": "eDXiytsCLUvP6TWpQh7SmhQnZK6a6CpgsgTbrdXCTnCv4nBUyQLTkuJxgudm93cRxYS8Qgk3HUDA8zkyshkTcHR",
  "key6": "5wo6JmynBq1C3FKsbUFjXg4dhiChX65kx3DTAEC1hAKKmaESPpeH7MN8GmUbSBuPRa4n63aUYZa2v31Fyee6MjV8",
  "key7": "4UyNrbY2u3izSBwpye9YwMnbkzTqBLqvZf74ZtpgT91EQR5fpbL3cgbw7ajb2dwRPLRYEcJN3Hdx3fxar1NfySoa",
  "key8": "KiETFG6MiYD8gvmLQapaTJrpoAHVshBxKyuXmSQxL8PqAp7SSwa77wsYtCnAvkcB91y1VWtDHchzUtz9dEGuNTa",
  "key9": "t2KL4LstByd4vNxCXN2Rb4ugwukAZTbgomeXNUHhZygYMokYnDcVGZsfe8euNmanz2yy2YN4fSEjZiwkMhVCD8z",
  "key10": "58z3QKPL9Dc2FEkJ8vpL8EgnWNgirnrQQKoYchaDqnzoTKCCfFF4aT5UHdCGTKZG3dWzmFcUFWyDL7oHCV2Q5SqC",
  "key11": "dttjZt4oPVbkGNVZvVY1QLRXRvss3cNiJLdCkFDbsVbntGkT9U5SAZikFzkj2q2kT9H6gD19vtLXXuAwQLoqFAW",
  "key12": "x7euUXejMtuii8xh1mQZbWoJyoeaE2E8BE9x56BhYsPQ5imZfiYLkbzBkwCV8fJRCBC3RaF8tRoah35AxptwsaW",
  "key13": "3rhP9aTdv1mfhphYWsAfsfdZe9VphHBdSsBxyu6wzgPRJCfKuwhRzABD26EX9GB6tPNgdwKpQ4nieDCC18Xhopfa",
  "key14": "4mmWvzfsjDadCgzJh3WRATJJ4idURZF2sB7U63BWVn6tiwsFM6EoWeRAHH9pUddq6Cwun8kjiYwENLRzyrV1gVzs",
  "key15": "5yFZf69jzxg4EWnqhbyZ16vt48xSoWd5f4CE3cZMUDFx7BzrqEhcUXktMUtoReyRWqVZ7qDFor5Kz2prnBkKioH9",
  "key16": "5adVodB3M32aAZVBxWxZC44zJy8za5g97YwxEMwfFJzg4dgn89v8fCFrwv6XpNHrBfoe7Hi68wc3cEZt24B122jp",
  "key17": "2hTcMGJ7GgHYCM9ekaBFxmn2EoCmchebUeY8cheoR9K3GQxwf5Qu9EKb3r9KQv1MCdwkZSf2AdGpKx6gH8ZKEtZT",
  "key18": "4gPJdQMeHTYyGHjGVM1mVjKcbirk1sZW2rhn1KYbzDqADvyBfM9M8FW3dotKPCqwMYziy4RLvPRevHNEa9eH2T1z",
  "key19": "231kx9tMSBRLPnxE1Xc9G33A1dDDAh9LwWDLuthj3eJPxmSiE86AwADKAc3F1c3J5AUjJYBf5YuhCyTUXGCeU73d",
  "key20": "56grdyaJAiec2pX73etBcV7dCLa7bBE69J7BaZYy5jhvsW4XqJhRgfG7K75kMu1bx8nmyPmrUcJA7tJcVHRXJnTj",
  "key21": "pmeojvzverKR6AsYiuZKvLzQjBbSTtHQwEK32bzn2q9jp2AxGPMLNGXDizwAxjVkNUEanogPoeMf39HosksBeFs",
  "key22": "3sL9uQ7wmQr6xM2dfTpUVEUaFU6nP1aBzm2YzsPDXZ93Y24oMsbDi2bDNgj6nS6W8vMVij3dX8nJFeFJbcNh1kmg",
  "key23": "feqzRaRBwSdcASSJZfqHLntgi8w5wtQaYnR6LLTha8bQzB5HchsT4JbTLocjtHaSAAuTZdVEyPDFygcggzTZPsN",
  "key24": "2yfc5QpztmHHenEm8BEqT8NJZhWZj64XLuuTY5FMoW6N3LpGyffMjzM7uKqinshcwtwZs9Lus8Y8gNV4ULHdwdgH",
  "key25": "2oQ6f9uA3DugaGqLA7LkA7z5s55GnNpDQDjrDxGzADMVE1p9k9qaPikHDJj7dRW5JHSaBbVJFPKrKkSdSZD4fF34",
  "key26": "4FVBXgHMWjd58G1pFeXJDmhvw6LxrcJvrNrnA6LuzT1FQ7kC9EejuQD8H4hhrvAcYikNvCRLEtpHKhcmZqrRpETw",
  "key27": "2gXwdgaokPXJz15j8nu1P4b1Dxc4F7sFs4QYhbq33GddyKCpo2UmuiFYfcKeB16TedYte54K54oFaEjjzNfPxVAP",
  "key28": "3KsMmnWTGeka79Vt9R4LiDwTw9BuSK6sVczg7KQwQTGqj9NPu8EX9FfkeDu6c4VinG7Uh2mPLSYMbMpix5eeD5DU",
  "key29": "5Z5raYqJH8CTcnePiPRbMUkkKX1RyCmoNiKmeF98MvUzUwZA9pHXT4GWKzuP5LRAUzXLmPaZGrqPJ9Yf1tKdpt6s",
  "key30": "4xVtJuuLu61YdGe1x7WUDTX5p5E2EH8SZT3XsLMp73Er8UdSxdc1PYmXNVcrJkjdDEVjKuznzRpFVJjBQTjnrbK3",
  "key31": "5JCHukHEX3DSWrHPm1gnua1jceioayJy1sGBT3jQz53EBNiwKqj16ct7Bc2hpn4xH7LnAGDp2QeLPZKTQTfNQsUk",
  "key32": "4RgUpH177wjCuLqSaA37wMSq7eg73T74thSdqhU82TT14MfRFTHAXg7645waY2bywJ4A6PessKyx8oD7VGubd7FD",
  "key33": "2DC1twT6SgDYZqu7VMq7ecj5fiPvKfjmfXuSUBzcDLBBhuqHS7xYkYaQdb8qJwXFLzpWRyEhJCi66h8Q9x1mYKs",
  "key34": "HBerWm7THuXycQMTY6zE7NPseF6dBsPPuf35xaU2fZ2FxvK1JcUzcxCGyZwFahZrgixQQi5At4qZzmhUAXqyzn3",
  "key35": "E3rUPN5SK8fD8KpvrmoCbfQqDtRCMD2ra4rZwnzNQasJGUgRkzK9H9Zdq23WYxGPwzF9xAtkpFjauEVi4hGVg2q",
  "key36": "37PWxhm1xVLKT5eWx2M8WnZpZXKeFSj9mAGnVDM1TovLVi3qKrh9zwEUHPgzJU1xEZYt7nhfLD3amy467GCSXitq",
  "key37": "5LzYKZFJTULpVsa1HCyG1VSjmHwPk4fu4jeMkYSMWxmzbL8P6B3Afo65jy5M6dSKskXPZnb6XQ45Mo8geVgYcdBi",
  "key38": "5SY8hktMyUB75gzDgYaSB3PiV5WDqazpzgGndTTRjcEdgWtWJ982QQPpV7aCm8FYZh7D64rjH1Ta5tTiWfGB2zCj",
  "key39": "3spDWb8SbbQcK6upggrjCMVyAu1FmbJWnce1vJvmSejJUmvdCuub9vqNdeGwn5ozjQJTju1RhuYENRTz5Nen7K3A",
  "key40": "5XTqEAJ4h8UyWGYZqhQXpTjw9aBCNPWB5TQFVHAFF1QvyrNpP2M1vM9YwQawJFaRZPNzXMCehxHzGaRxeAJNqSn8",
  "key41": "QEXzvqA4hJ2jrAfF6p9mrFg69zBYbGgM6qtxojsytzPJqPDJLzELp3qLsb4tKATUBtLzQHnvnsPaRW9rW1gWQ7X",
  "key42": "3bEqvTmSHLZK232q6ZrAzuc6SZxM3wDuFnUB88b9tTPRmN3KaUv1KmD9BBiysY7Vd5yPzQMnV1dYKzjHFWXdtexW",
  "key43": "3xqXHp55ycFbUMccN8PQbJjcbest2FRXrs5j6K4xNcTUuK9FBc2Y6KF6jHCuwJRiv7zZyRkFBTRjTas4hxzT9qMt",
  "key44": "2388GRhVjbC7ayBYvkYfZtDBz4cao48ECpq92pDDeEitzNTWKa7ym5XNqwnxoJQkivVJN5Pg3CgJWxtfrvWJ7Mgw",
  "key45": "4WaTcv5RtMdMsCwyHuLtk8Rmyt5k3YbcAvWxnZs9qvQnphLt9UyLSpG1KNJCirQAvWMPEK74meSxdasXh6mgJS4n"
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
