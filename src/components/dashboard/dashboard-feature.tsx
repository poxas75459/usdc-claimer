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
    "5UMydj58L9E31dqMGye7qZnAF3qcKiYMEAaoEDoTnZHhSsxSSXR9FsiSemz1hhpFU9XjtpV31Vuq71JW2QovD2Ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DT4mpn2KBfayYnHoToPZam98hkBxMvMjpJfV6NxsSDcV1VfitcWo8FCnW2Zs2VcTX3g67Cy31hCc7RZfsABk6GS",
  "key1": "39ikMNk12WJoN6aThBcy7J9zhEMnWWHayj47Xeh2ENNUhwrGEyiksx9VPUaSJZhKp2CntYydA9yUmgYBAsjaC6TL",
  "key2": "63kuLWZyT7pCPojVDX5DjMU9StWWznRUYKPADi1k6eRxBNQrt37fzJq2BJfAjgevMakCP7M5jfTqp4JGfB1g68MZ",
  "key3": "4JiLJ1Jwrs94BkEt8wVFuJQRZokgFmU8nCBpXeWf6sF45k53FfdHygDvTvzd6VcEWpbATj38bUFv8gQYfnrgqozr",
  "key4": "4ZqhDFv6PV1PtprBomd2iMrfPLbwMgDZWJTXKrt5evesp7XPNQ2ab2n5suU6yruNgPqNWXCsregjVCa9tanNgqJC",
  "key5": "4v8ieoYfFBh7EkHr1jcpoeMtPYzv43rrJh8nxoedfMi86So6cmv7LABMw1tUb5Wz1acVcCkNGe4xyzf8sQ71ymHY",
  "key6": "5AYE5Pk7CYrbadBoW96C5pe6RfzZVocjyYLeuusCfo7e2UhrbkAUWMJNuc29taimBqu4KoFosAw8h6eodzKcdzfS",
  "key7": "6teu8AQ7bN2FMGgwNahd5WHxVMXALeXHnvgi1LhSsfGizaKADqch6fiynttwQcnXf9JneuNc26FoWPwapynLyEn",
  "key8": "4EUsvNn2zFZWzYDLgotmW1yATdCrSpQ1TKbHpaELDwcRsRmS1wtUMyJNZ5LGNjdT6j12TVkhtLfnBfwEXakN1mwa",
  "key9": "3yxykhf9LoVVU8QiN7pq69eajJMc5c4QjQj1aZcNEDV97npHDv7iyB7gxEU46Jt5bUMFmuBJipuMmUtYSwQRYZ7G",
  "key10": "2U9wePMAZvo6qQPjUZwnJxP9pNercXitGNaaziYsV5maFu1bx6g1KxgmwxRYmYuLgDNE4B6gqopvGWGutMHdXnC5",
  "key11": "TwLXF2C3kDA2PcCBLtYCA3ahnWnBPdR65oMRmHJwkBpzivXa9k29zCp3XykervoqXMtba9hh2XKLFu3KzP8qbNd",
  "key12": "vQbbS9Ai8gjq7kvEH1Ja8QrYNJebRJeJXs4kiFd7CE3vuQnBuFzmJuuaZqxvmWc8uFdiMrgt6Ctk2rpaVn3x6Mf",
  "key13": "2pPihHVbf6ehNcePCsa4CDSccAdLpN9FD3cjTjoyZWEwCqi7faXR4uqKKU9ANQimQbZLhYPEh5bSGJB4kuQmAWyQ",
  "key14": "DHFX8vxLR2rDdXtKLtdt9SqtQ2UEBwAYbwZNvKiMViVMZwRRGn27J9QQtjRfga7ZF1VcvDa7kSMYZUG7hREqogV",
  "key15": "4uUVDsDQ4HffwBQhZKkdfQiUK5sZ5xVH9rXwkrTq4DtA8bRZGB8Cnk5oW96K9xVyER8mGL3ZjX4B6faub3KxJjKz",
  "key16": "2L57YSPg6UuKfNgyvQTCNbyRwnstKL3SMdpNekNMJGf4ZktYp7JdhoWcRHYkr2nHQdFFoR85qjC7nMvmB1P2dvpm",
  "key17": "5QbGVkiGognHJDZ4Z7RQ75PYoX9CwUwLdJqtszwJY4CwDgjMChtMvQTkvRQVNhd1hS4EdRgKApmTu3C24GQqPuxY",
  "key18": "4UySUUzzBStbctrAsRuAgcerHKbnMK8d6PFDLAZX7KfW9GRuXacR3R9wBdBfXxBghDtcXGLBjdDRGZmzVqHSse5u",
  "key19": "5i9GMpXAi28CEk3L2DjchEMXjXWgv72662xyNXZv9dUigBiX3C8AQJ4TZFRNdma8Zf3y8jRz2boqvbNLVPWBuF2x",
  "key20": "3WVVbXMFTuD3fZ48B8ydPDBR8ShMRqScMRqtw2Vmi7HZeE3hqxRxy2Y3Q9nE3VfymtfLCPnJgCtJwzs7VoqrrSFi",
  "key21": "RNg9wMg7NtBznQqGYKyuMckGcFeYcUXwEYG5UFvQALboNb9kRUMDk7MSgrabnZwUGLWxMMNdU456SSDKVbB8yWF",
  "key22": "5cjH8EY2Qhvi9AJqAEaA5BjemLScHik7r7H9SJCr8KUBykYoqNm5LxQdMxWivZsD1ycFimS4ZLBfH865eSUP4HWn",
  "key23": "516RxTF64ExQEXCv2CbQd3TAKjkHT2Aj4EvMm3Gx3rWU4oXwesNREoqbKYCdDA9yAeREtTh8Wx7gpgYgVgcpKHxC",
  "key24": "5iB8DoZYqTGJYgPwuTVEjHrBUFFZtTPc6FRWgq1XEttkf3JMj7DLn4zgKTLhHS7sQebKkA7Fwnn3VnKd1gEiuNgW",
  "key25": "33yGo8qEbDA3mPJJ3ntcdUKkMYmURhrt8MV8WsThJcMpsaKt1otoCFEs3x2fTyVD2bzUBTAmQsCcxyQ3oXAc5QuM",
  "key26": "3LjECtHcLGD5GEyNgnpjp4qn5mp9so9KxfUNbR4z7p2PD4Px7VXovkUHcuZWH5pVfWRJJhatpBCyMiuahSeuvnkt",
  "key27": "2h5siXcSrRuEXLU46gq9wAokSbV2GrB2wzvbptSLRzkK5Yu8UWZKkr4cm7ch7kKSnCn4TbrUqBwKrmMqX1vp1HjZ",
  "key28": "cErvDxoxVKcvJcvWHYLAXd5a3mRLVtkVQpS81gpnLvpso2u3L6NhR1eNRNReeG29adV3SecAu5wxAPQYNqGvdSX",
  "key29": "5XQxyShgagfBTs4UchA4QS7rmgZCnFmaBLuZaXeCS9gbV9CGpUQmACrnvC25NSnmiBDr8rjuiLCC4UEQh2BdQUgj",
  "key30": "5y8bXCMgxjBq7iyaBRpqUdbqzvLvLzZz8PpDE8UHmd6rwBdbHsvKjQSfnaQ6n6MUNsSmdBPWZrFFJCRhLht1VgA9",
  "key31": "4xU8FAnmznkxghWumNinusS59cReZ4gpmKLcAVDRbpJmjBAaWSS7Npzrb4oG8uZHrr4cFHZTJsAF5VjU9AMkJDX3",
  "key32": "4UxhcFU8tZRmZbTrNqTKkEAViw9wBJy8RQDPK7YTML9PvhJ73c1ft7xeeCbTooNDACG6Lw6KvD1UeFQ2wak9jkwe",
  "key33": "4StnvdeMo6Ap4Yr7o9Z7iGcNeuHX4mB3BkYZKKDMdGHCMuAiMxLka9RPpKvxvxgxSz81Ri6Wi3jjwYNjyHMzYteg",
  "key34": "2HsmJGRkC5Q8qMDbUjqHyMwB3Dxb31t3Lj9Ee5DkfGF6Z3sqERfQxvUgaDJzkmG6rkaJytbVLAh25YBUJBUxgSpe",
  "key35": "3GZaWJXTgESeYRTJbDtzk8Cd9kb1qQwMoaBepy83PjVgw4h68BSzYY6fyYXVE3KEWx88mmxPSRghYGbeQeK5uZiR",
  "key36": "3PgL88P92vrfiTQMQv9q3PkzUqSAxA1ChCuWCYd2TCr2vbnWtsDmGpiqKuR41jpFV57yCtecG7teF48eMm54Gd3y",
  "key37": "Q9rg6zqmQdtYT5M5EFHNFYpsWnpKfv6ctVnuqHMhN97RmJBaNdgLEnmPXbX3n9HzKbLtYa8F4hK2FHuM7c7eGRV",
  "key38": "64KbVqDU67gS9mYyWp5ZAgt5HWvWx3wQmHyh7pHRb5VYMj4jKBGTQ4KsBz67DmL8AcraAUDC1nd6YzYRpkjgLWyW"
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
