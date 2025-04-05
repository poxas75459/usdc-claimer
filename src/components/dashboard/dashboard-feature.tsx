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
    "3SdpYhWBJxVmiH2SAqaAWiLfQaxkMpquoskpwZC39vU4XCfMUcxdkR97RCV1uAMrvqwNhHiwfaCb56K4LD4bN9q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahFrjQodAVRM7GKsKSFs7QfkTCQXpqmexaEqDo3TSzNkCoBTYnf5XR88t9pnFRvDS9JGuoN3qnwvUHL1dCCid3r",
  "key1": "3YVeRNErBKKJDLQngQJ9b7omFGQzuh74qjdd4mkoFnFwVDwf5ir7GkEjWhnGSiwqAX6kyEkAxJcYUzqhB7zBp47T",
  "key2": "4BpP28ZfRE9NUXHcJ2ovYFcLajfFu2BQnPWTWt1sVPtPg2WFZ8HkeYSrW4X5rXToxWU96iHPZAW9FZfRivtsVuJZ",
  "key3": "2CTsCY3BZPxKACfBqysqrK6F21Fmm7d2nuHnNTsWLe4pLWAJ5YZq1gK2y1okVStbr7RbRrBoH3Y9GLb9WbckzgyU",
  "key4": "k2qqx67ioZzSBR1B4k3XxKB9qWUevQ3J4hUqr3FgCuvTRa79bC6J9Sqb94SFyu39gCd2dkgAF1PqCKTVDmoQT11",
  "key5": "23Jx92akHStPv8znB7RMfX7ArXvdZytXWG8wq1X8hrqVVdFRhcHUmHkYc32HY9k94hnfm6oYsTx7DN9Wu2vL1viA",
  "key6": "5LZVm4DJbKZHmjDzx7nWjZyAQ65NM37YUnswp2Uh9e4Dp486Wd1d7H6RA5X11SUATJdMCpDx9LTTMbs4MrKjojuc",
  "key7": "3T9ryswAaceedMm9nYbrnS8cDjHJVMBTmC9FkTZZ3h6K9dnByZ7LEyKwZdx1KwHTfqKaE9J6cgMwLo2ZjbY4n2Md",
  "key8": "3GV4P87hzD9FRrKoVm6SsSQnLQs8s5Ss5Bs2BSiVwMFtU5qdPANd468Krj9r9gN6EN44TEhXrTuDxAQnPXXDVmqK",
  "key9": "3X1ai6iwZzQwe1dQ1ERVewVv1GU9WccpQnZTdmVqofMTaUbHU8aSy32yPZZZG8kvgWHmEP6CShc66r13SGYhBkkK",
  "key10": "3tRrofwwGY9VZoeWAdX3MRnhDUGdYTZsPxUQdxMeJrMPXYEBsEFJRAK3siyt5YSAQw1gfnbwimYJdPTiqTXn2qSR",
  "key11": "26MfgJBEDD5vDo5jkHfTfDrLNd1NafxhjvFD3Eo4ddnqBcTpoHtuqhCr9UonWgjhWfkMkLaQwi4W2zSs6My3FHqA",
  "key12": "5zZnSg2zEKr7sLe1ogvCRTEVni6K6amnr6rB7PcQjurrSaY51ZwaVChDEzZZjsdx9GBivqdSxr9SdhqcN7BiBsSv",
  "key13": "62zpWn1Qtexci2p46bJVF42CWhr1hWb3izfFeaagUKERX5zNvCg4aKn3pPvGfoq64Fon7nvpHo86oftsDH4yNCsP",
  "key14": "2vAtTuuEVnnhJdsoFX6ds1qtiBAi4mhfQpc746Me8VMAmJvUUbtvLEneXf3dsYYZruXwSF5BBpVRLy6xGTD4z3Jr",
  "key15": "5pbCj9iLpJDsbyxcYaAFh98rkVhmc2iU3RBmK5kvWv5wvuEUfzy1HieBFoeNQwfU9cUqkC5DYmQbXGVDPBSMryk2",
  "key16": "ozDhH4UmFLsXRvzzg9wuZ9vUtdndd77HNSMuUVDZdzVH1gEuvFAsWEUaHEaz7uXXkdgiyA2Ysti3G4p1EQf7Foj",
  "key17": "tqhZGcSyov66JeTJDiVvxkoACrdw7dkCwtRFkpDXjtd2FCn7sj56EBq4kujHBLZgQnNAahdYVY7tM3bBRcc4Kif",
  "key18": "xCSZZvDgksVbX6t1bCsHsNVpUgjsceo2k5J5CzfXXHdLuAwnYPwv1nKzHDcQ3M9z1AVYo2WFxDABJ81FsPddv72",
  "key19": "2rHB6XyKSazU94k2qGQJ1h2ZoQGVcvHoDsMqtTRUEKSJMNJzA2ZfRojW5oHFTYX4nz38aBy8vL536RdD9cdMpKvD",
  "key20": "5aadcjZqKW4yZo7GMYRFrJnCeJoxrRXUSTU59bW8EBzfiLY5Lzj2sdhuAc6CyYpgqyk7jnKVkZYy21GWQo1XWBM1",
  "key21": "2zKELX8bKgFBZyJHTbStUyXyrERM4hEC5crVJpDeFxFXgxHpHA7WntVYhp6RUVgSMqP58AvwVXLSqf37GqAziR7a",
  "key22": "3UjMytRYC68rc1ezaho833ZQkNnC9BKrt2yyohngVADoCD2xkH6ksPLVxnyCNZo2xdFfjaJADUZt3gnpnxdcyA24",
  "key23": "4XzKgc1T7XJzb71dj6pMznizXqKNcEzR2kpiy6eGM3kmam46bxxzef6KSgSGDP2qHM6KmTo9LSUwYeRVcvbsiZPB",
  "key24": "5rY3rrHbrrHdpn2u5cqNBTYwd2Foa3QidR8zN9k9qwVzqTHYRaiBq6wJh2cAoD5Dhdg9gRLy3VceAYMNLg8HYtM9",
  "key25": "23xmLc7k5urcgqv5wwzE33LNQk7kzX5amhbxJjd3LF5afTugFYYW9obBZMJwLLPaPygXSrYmtPaiaUvqKu6p6bRY",
  "key26": "2SHNipJ5HPikNd2wxjN6bPsARogzsnc2N7zaUys2u93ZocFPCasTCrmaiFPh5nS8sybDNqZLNqUHc2D3rjC8ecT3",
  "key27": "3Pkx21zvG2B9JX9LkvZGYpzxQX2Z2Tey3HVz8kobaKdPjaRe5JxkNmFoMTnrCbJYmMAhceDvZxWDoYXst763aEpg",
  "key28": "5k7mWfJabwrJ5aVbKgRuUvjaUnNYwxuAoAueL4ersT1P9jCbHCFAKfgoNkmQUd1k61UXFKm5eqEHtpP5caSTwt46",
  "key29": "5ZGJfXZokkfmXJxFRLregcsYMfMG4QGLJeN1w1aAP2Kky97rYRv6XEcV7r9qVGvJhKj38xAhJU1QLEfKgpyFL2Un",
  "key30": "2AqJxyvqjbgayFGCTbTj966JjKrvRryKKNsFZy6wW5o1Nz8pnsiKdkoVvVjimueTHwsj1n5fnBAu5JWrHzDpuerc",
  "key31": "3CwhpJ7HeW4cfdeBqGXtQpHwXu23Wa4tKj5nVLjnZUApWcBdJD5HVGScwFxCibPmsEgvx8umLAT4rYeKrp83DVrU",
  "key32": "5JNRuokdLBvWogGAfXJgF1j4Sy2mTT7uNgJjNijfNqnf7yWA3TtB6RKJ86hRZrb66jKW8XMBDSh5qw2udECksPxk",
  "key33": "2yTTZifvxkumHJCqozgD8dBMejrAcRCU5gfA2KWRsQMNZzzrw1yhh2juzBdaKzgN9Au2XdWQEiP2XB8kbukQ4BUb",
  "key34": "bgBf6jWwbWhokAK13Xz1cWY8jK7EQjzsoBLFHgjAZKnH6WxiyGcaX5jLPPcjVvAG72CFR34EQ9ehv1JPKepmGaK",
  "key35": "58QYqGqTj95exjBMR72ajaabyMVpjtMVnFZcBYeNcECaCY4NGzCe6Sp8iSmidn1jarSCJpncWwYaBsJRoCBmLaj4",
  "key36": "2D9sRkKo64FEu9CMJtZt5Q3fv1oBLHRjpnCxCnNu295vgEdFowYS3iVN9UpUQEF6oRTZraGutpGq91rMSYCF1Aaa",
  "key37": "62BGJarYPZ5dtUQ7QJABUYkYgYUbZ7VGxmhwjhWAez48SXt4ZP4eqzAjGi2w6fVqsUfoJk8jHePvs916EguNDgCt",
  "key38": "4r7WbjkX8yQqFU6AmG3vUoCcfgABxGusZYmmLLTSth5XxsgesPzB8WZumiFjKQf2PqUk6Pd1PYuqc7t8sNJzYmzy",
  "key39": "3KA8WWkViV6zyEpWBKfSTJYDRz3xEKc4gUnqyJAxHUERLmvyiqSSRgVSUeyGPCr6B1tJFzKZGAC8QMXBQaYqU8jD",
  "key40": "WN6uXU38xUFPtYxbJbuKJHVPhBzh6hvifMBH84YPV1V1TAozjZNr1gq5kihYrSur7G9Hi5Qyso4VisDx7WQRKna",
  "key41": "4i71WrzQJSh9QdZFtobGfBkADsiuCW8o21uy32HgX8psfp1mGcPfR8UmYjNa2opQxr4vzv3UqEtrojpTTY6chNfe",
  "key42": "5M6z6bCwvLuv2Azhm2yZD1izGiXZkJuLXnMDad7K527FrxahQuwpdZ3V6pMnPrLvHq1izkzuGTADnKjeN1QDQGUo",
  "key43": "2s97JBNRAaMyFbhHyJB1fAn5kaZFn9pw6ujofPZgxcqazrWdJGu9n3ThhNRh8uNP661AgwFV9zf6BQR6MToQSaNS",
  "key44": "2MxrYJEkdcUsrq3QXsrD4m4xCZm8DbBjegTfULccinyB529DG9i6y5A5K119BKyrqUXZFtZA4XeqjQPNFnzHEHkQ",
  "key45": "tPmfeJx1YEjQCarLqimev5y7eopmEtz2nP4qCRjwpwCcugXAA6ZJx1DS738E5CbLeWMmfvrtnd7BLyvFd6uA7FZ",
  "key46": "2rF9rNofBBE79BuiK7C1xXKCogmhAd1yVMyDURup6zFcnsYmMaLHNxLT6fLPXJuBdvYDdYn4cVbghv7aZRcRFUCm",
  "key47": "4c6kkP5V7wrnNUsScJ5eZdeB7qNkhgLm4ufdXvYVqu1FXgSmdapF7UQ3ibeXLnWWKtT3fXUtaS2Tqf7qMLx45FTC",
  "key48": "2Xn8sHfHfzGQM2VcX5ggWxQ4QQ156XAnDqATi5QvNPNTHaTXVmGt872xU72Lf9Z8rEuznj2Wj7grqXF1rF4Dknws",
  "key49": "v8tTdeB48p648cyGpomCYC9QhmzC3fKAX27KCHqZsUy8t8XZkyP3Z2LSTsgGGg1R7YhLd4SygkSzoFPsxPoKdKE"
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
