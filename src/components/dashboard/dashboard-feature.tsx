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
    "9xFowT5naSwoJAArHy8gQfKGBSpDh929UySAwQTkWVoU36kcorHwNvDZuCBHX9wvwALNTcPUsdAp3Q6eZbB3YfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtQXKjnNZcXUdNVn6ovugyQXEn6aLRKmQd21JSkiG9nigdegQ9AEUBQ9q3F9JNCgD1QjbR5ZuV7PwsYzmyf5AzM",
  "key1": "5QeF63vf87XbbPSCEwX6JDxvV94MA4qnCbrZ2wxT44uFd8zNqMSCV8r3nZMHWpHntLJZqkcUu2LLaUEKG6R7Q2td",
  "key2": "5E8AM1A8pH96KENYSbYAgnGffEV5ncvtsuFJJc2GDzCQ29aEQt7Y6vEitFeAN13ni7MJuiNomkyycxvqx5uakSeN",
  "key3": "4VuVuKNxuE9kAWwJR4QEsACojQCwv4VgydAdt4iYHnKHN5Z5VoCVzYVskZRo175ucS6SA7s3sXstmJ3qaZYFoJc9",
  "key4": "4kqcZCHwPSbhVME4Q4m8Jrdz5MWsStnx8U15CPKnR9px89WN3xFsEUBXPU4U88TCzUihWCEBtekd7zvkADAsZKef",
  "key5": "5sN18pJGRV12u1XQ9d2NnCY9tgwvcWkgcTsGYaJahAA95FEsYicwezY4ytwFfVh3i3n45M3MM6wUKuiUvNcRYKGp",
  "key6": "rnsGDAH6fvhkM8h7oBJHnG2wUVec7rsRVMRyRZj9CDiq7G5msBPRQj1q8fRWZyTAh9UoVcsqGm8MGoaZBx5PtTa",
  "key7": "5focAwN8zpstapV9aibf5LBh3TH6hDwWyjuyojV83xXY7zgUVQ9UzxT6kcRZ2VL96UbetpqFuXg1mmBYAxCwC3EM",
  "key8": "4XdRm7Rb6q499bTBCE5yzJVYGdpLeGkbF1ge4qQFeRudoxHn1tqSyopSXFdFZVZneB8E1Bm7vsh1LTCkrTsWDyBR",
  "key9": "63VKBXUrjVhQeFiTRLCtnVH7C51zu2rHJvMNLvGUwvRbBHcfvcwpjW92LQDWWdFHff8yhyynz9fWoingoKggLKxJ",
  "key10": "4iinpHmyNsTJbuXvMRLrh7LYgwHRY33c8Yv8QjcTioAjN3S6PsUvXq35p7qYd9LnncjaKXKiWHtC6gu8adUPvY8C",
  "key11": "ZrVhie9DGKWWw2nodwGtrxypTDDVrDZTu4dExkQSPFZVnYRv21DSQSVFPDXgQMZZHJdNwpBemnEuW9miwNQbU8W",
  "key12": "3xuLgp8EGE8MnKJAvWEhvhX4NGMt9HHpph6jfUEVST3LyUtPDBcn3PddyJC6G3MAQAvCKReyNhGPepaTrQy8rZRR",
  "key13": "3XDpBJcTxkuxd67JpVEDJeZXfBgr1weti8YPT8KqnWd7ENRWzP93qZt3AyFBAUwCgWg4F8a4w5gMQhFw8GXsPDz8",
  "key14": "2AqPhYMEt2nhGrXTc5baqodCNL2keWdoVRiBXfcqt6sKt4o9iaS6aVsomBN54B6z4zRWEq81muoRaWGzJ5E5Dnim",
  "key15": "29JTGSkyuA6vdXwHmbwE6ogT6iZCe7bc4ps9M1zgUVS1qWBJ6mR7CZsaE6aNwTXC2pCMit2eJUP6Rsk4vCFYKsoG",
  "key16": "242Y4nd8jvmLTTPvwxecSbmmJu9gNT5hBbjc5LpSCCnZNXXwUEn5ZSo6qQnUNYJDKQpGmqbyqT5Xo79Sgvsw2k9p",
  "key17": "26FAFmgUgbVhahZxpumvpvKXQkdA1JVEo6W4tvZrPDN4aEYrMKupd1VzvjZE88yVfdRKSvitDSzjo93WyJytNcGu",
  "key18": "4emvQ6Pr2h9s7R2vp9fBpjKS9QJ16x8u9tZpx3g6Mt5xAWwPNK39n4iXbqtvzJVxpwWmTc2FmksEo83EvcDmD3Fn",
  "key19": "2hWYtRhvsPtq1kKwPKqwqVEKJZ2qL8yFhx8ftNBK2F29aZEPMMSxk1Ka1M1hpTGbmD38hNReTrDbiUMnLEq1DxJS",
  "key20": "U1duxq92W1uYQJewVMooCrdf1c3TAWtp7rMBQMnVjoS1msJYmcin8AHz7p5ZbuttKcDgk2FcDrQjCMsbk1HZH57",
  "key21": "2FEe6YeNkZjZ2VN2LELa3P7p5eh4mKBi2hoTpb2towsMpbotK69C9tMRKYZaQx1GbGaTAzY769uMDgJMZ3kqachp",
  "key22": "q73Fa18U59GiAiFV7mFebjy1mU3rr3BKwU9Gok693kJExA4PA6QGo1qSDkDQ2uAkiE3dNoncQmzme9oXuRG4Nxt",
  "key23": "4J1mBLGPZA8uWkQGqzmVRb3BLXnBaxVrF9qECtkLGnVBYZgE3v8PbU4oqa778Aagxk6mRpVRSeQEF3ruVtd5y7GN",
  "key24": "3wx2N78nBsoxTjRmufNTfwur7wKXMRwzskLngQ1iDKCAiNFtmwj8MJsN51qvDU5NmyJc1UoqDGWW8T2c5XmcpfHN",
  "key25": "3QvMTPMXy6JCbZu3YzCGZ7iM1BJ1poWsEjXch77tRP3ChLNFSN8NhoCJUArCAi7SnG4kWFgNDPGN6obCr89ADZL7",
  "key26": "4rzarLNfMRtJZBSjFPvYmxoBMSHxu3fH9ZcJbr9jEnX1WtSVe9FYtiiR1khdWcdpm49T4LujL2Bt9AymLbz74nrp",
  "key27": "7QjgcBkwCXac7f346zGBazs7xbkufSYb1fkSF1st4TnKCedYfNM2RHP248LevQzA2y6NHmS1ZDK2xTWa3X36jYz",
  "key28": "5Ti2oSShQCzsmoWgadeeULT74cJynMMJeyYunm2pN64HTC9XLqBFkSNRzbfstpUj7QuViw3YJ31WwdJq7Ky1pdHs",
  "key29": "4YbojnJqhDZYJH8VMPozqRKepdBmCHM75CZUZ7L1Rw7KJbYe1EpmfZ6aKggWwYDK1yKkHRcR7XxVvYDg32FqLFVk",
  "key30": "34t3sjMYXW4Nn2WdSJaFk6LFZbCZMLTMYowCexRwGdctJw5dT6FNUtg2XimDY4FXx9mN7MHH6Y5Fm2NkNx6tJ9a1",
  "key31": "XpCPJjtr19Ne4yzcKVLYGENnFRKTHNrbPdZKRhjiAPC7HcrLKuLHJV4992suoHJsapuXEcyGpCCtSkv5At6EGB8",
  "key32": "3jcqUSKa6Yi4Q29bf8kfjExvg9dr5N3w3ARiCkmnwrKncGY9agdCQXDwxKjy3a6gmf9ZdnaJ5N9UXs9Hpy9b7NLr",
  "key33": "Adqpx9CbpmERKxWUTAgJDhqFYMnYbToymFNPgbji6zx4XT6tHYRVLvs5gegbbK29ZprR8mVAjtEXM8upS9mcoUF",
  "key34": "4YBbMR9hokMNTYcR8uRW69UKFc8BBeY9DF4Pe5HksH8Q12AQc2MqB9zYwE4J9KWyEdQafoqsw7mympqg9Zgdz2dD"
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
