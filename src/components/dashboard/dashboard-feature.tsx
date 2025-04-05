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
    "4d8HY1J7gc3vrYWsKXPVcteqHX6PSfytZRq9XUVLEZxFiHMmySCZhsG79KvqNV7rxUz9DwmAKnV8j5sWkfijQDbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "417ZLXs7oTyZQFL8Zvs7F6sfuLZj51Zu4ddCevDWQTcAsTGq2BjCZ283nLigSy5sSgYVREWgoruoJCV3ssaA8nHM",
  "key1": "5m6xz9jtTXmsurVQo8c21Cst9a58KKctZdPf9NVsDfQvPHE7jss4AZJWXanhth4Yd6zXeovGnv2rjwxSfBa9Q6BE",
  "key2": "2YZKt2VEN4YHwzw72JDo8vfx4tiBVmiBgudJoRMkRutbhkTSrtGLcmuQVDpxGhc9xLhcVtdBw6vmCbQTN48Kk754",
  "key3": "Y3hNJiPBFsVnemPUxJ3bovMN9iQBWsbfLk2V7cdEbXsPuynkF8FmyjhmavyUFkDyxN8yLwuwFo4JrxZY7oijSkf",
  "key4": "3B2CY1tEuDVh6sVtNqP3et7UbDyouTBdiiJ8k8hYz68sBuWMfUoRpSJ7h127S8DgiCe3R8vz21wGyyRZw4GBVYPi",
  "key5": "2uMCRsTCo7pkFigBjZovxdt1nYDJvW5NKAmEsZDjH5XYCJPtU6LqY9tknD7TrGj1L3YNCf325U1AG4Ao7tMGCm7p",
  "key6": "5jM2gXU969569JA2N7cjZkBc3FdEoCEFFDWeivYZkFiMUKeBgoa2RaDPtetuLyf5K7bXau4DLfnix23YfGAphSY7",
  "key7": "4Fs5ay2TFYiSjqpVr67RXRasABV84c5tscufsxLbXRpenBWSH7ywD5gfJ6DS51oNYWioPyqnVtDe3e4AczcjNdWU",
  "key8": "41wDEv2hJ9iGAm5dHUL878uqMV54r2UBUrN8vLE9d3vCKsRvZ1rTWHpVozrBJ1nJ4YRt6MjfFYkLZg3L68wf9nND",
  "key9": "2hY2TM7R8xMb4imfu8C76KLsQn2BEcAZWQdymw64uSb4WeJAcCP9kh81KRDPwVYbwfSmudYNY1XkjBUEDpt1wMQr",
  "key10": "QuJxdft1rFibjQCsbmZ7txhcGhJuFRKwdMvHwjXBWgirafZdsCE1LtHwmgbBtQnfn6eFrGtvgfVRN66fxE7xkUH",
  "key11": "5qMvqPMpvr57f3JrSkmyPszjSb4HRyFD8Qht6zS4EzFASeXC9e14C5cqb1nyH38Foc8eiAM4fsKUyGheBnr64ZAD",
  "key12": "2sETJvJPN13Vrou343X1Kze23gP4tBwB2Vyfhc5c1sozCuGvpud9qAwcPt3X3gtcLungAVQRZxAZCcaDfJtStUVw",
  "key13": "5xmocwZyxwhmELJY8vSFiWyWQxuAxkdwEDRjknizSXikKZuS8ubPHsKzT7Vv9RcvjM86UKmuSwiTfEf7F7hNBgNQ",
  "key14": "TNeaYiQ539oUA2MpGd14XtqMkK2UCkn1QroZTQCwwNAwk576opWsRfAbryohbFrVfJVm2infZfp2JyKZ5StLB3k",
  "key15": "2pBwpNLqpFgfhZD3qJ95R2R4g58NkubWapLRUvFWCh5GWPhXeAUeojXcdugb8NMPRRFuHr4fSmxvHiMTS13SeiZc",
  "key16": "3XFfBCGdwjazLUZkfSY7Vw7bw15rgGzxAh3FzwK48HxaNgfs534v9ZfuFutu4uHmn3Zpie1mU2UPeEzT4tyuQAX5",
  "key17": "5pihpoA9JSL2BH83zAJy46dWCjJzDniK1GaTWBTqQbDZBvLD3ST55Nw6NvF73uyVgeSQSdbYGRc8THMu3Embfuut",
  "key18": "2Hodr8bdDnqyWwjuPYVvnNGweWNN824fgXK8VNNYYHtYqiTQKtJTqaapx8Qnv8YxYgYVDWCPmCryvGXUG7KgkuFy",
  "key19": "4CNbLMhN7yDsniKitpjXVBFd4ZkJHq7MvUJuKbk9rKD1L6X9GJm97aUsYTWRDF1Fknc5kYn71mEP7yAFSvYLMviX",
  "key20": "2DGZLuSKejQLffZWetEfZAhgvE4iZE69vq1XDSQ1h3KvH2HcGAq9VG6fHBFhR7ND4HgZJP9mwkXzDGBzQB5pScyR",
  "key21": "4CckdcUUD3JpNsVhAKx5RVarBUjzhSRpZ8hAvd9cEvg4e7iiBKJHwHMCwALJDHPgzLB7W2ByeL9UzKMaXxKCoibx",
  "key22": "521anQwkkzTkD67MTTo6Z2NNkUPKWkcANdazdVizdRT7w2JALFTUpxbojSQLh1Fxh6bggnDfC67dyY3eug3tw1Fi",
  "key23": "4qxHve5eAP8utgcXpfwZwjyKRsufxFziKemueswmWRuo71eetzoNfap9KiUcmfkVP1k9dz3zUhZWiSonB5W2UNHh",
  "key24": "3dwdFkVYDofCXm8Moac9y4WprFxBrJKpALHXRjksHZJxJPow1hphjQSYrb4YELRMejZXejCGxpWg1pAjhkvR7wo4",
  "key25": "39eyhWZ2CYrPdrAKJVmaadxgVzwGnBR2ouPLvQ4UMGE6LuKnTYccNTrPuPTXg4yjsqNw6LBaVX3MnY4RahcfRmr2",
  "key26": "58XwuB2GzvCnEy4T2oNirxCTfGBpcrM8WbupUGEi3cL5yoNcG6HpuV8pGrukFd76enKQQ9fnHnyGFFxdZFJshV95",
  "key27": "457xyhWTGDroVX6SMhMbEBnbuE4JzEQRb8i1MA2HNgFC1HXJn7u41vRt3PyWbBcc59xFT75FtMvTA6HP1jLKrRJy",
  "key28": "3PaMyVpNRbXeVjJCHkzfH8GCktivESfmNvmbqfdXCNN3Tib2swtibSXwxDLr1DWUuVC4FWewBUwU1g9cf5N1NE8F",
  "key29": "63m2ecfShhsmEar6zGH6RiH5hWwvzWmtBHmYHJWi7ZYBmaCb2sEwpHDVbHgohTxsFfJSbatsFLDxh8Ed6agPa8fk",
  "key30": "4QrjgCShLcf3JxL3eVnawz84juTRrMkbB13rqG85QBCh99miq6VV4QstJnNbHTy6AQkacGwAcJvmhSS5743SdSDu",
  "key31": "4QPQFrgAH3qJVhztH2hm4b2mvtTv5xn66jQEBzvC6t2ubVXZyLCxtsQrXKYFbkq2J3PSvPXwMnwgHT1Cc6hHqnqe",
  "key32": "5a4ppcADviA66w1PXeF6nPAUWfRQ4BENKpdN9Sj2BvzZmFbQQkwGVZUksnd3c6uAreZUGu3BKVQ4BfPkyFoYzcVi",
  "key33": "5hLy11Gro1DAA43quYz51CM3BSL35jJ2NtXbY5cSFoabJUaXZADRoQh3SUEAmypFt3pnHVmtWYwfAq1VnHGgPUJp",
  "key34": "61HPkYXAe2DWUgsM8MyXsJ4S7PW9znyFwJawNjoeN34xwrheBJxc6fC7brWR97btatrfVMMajc6mXmS9sFPkBo3w",
  "key35": "4mwZ8a8oBhxaHtkJJ4XcJKGaM5vVWVUQwFShU2wZcMQvw8DQF7BpJEJvRfFNGf37sHuFKRyoZVACC86ghaiEyf2U"
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
