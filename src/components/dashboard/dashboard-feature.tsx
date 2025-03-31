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
    "3j4WMQgBTC96L2bwmJugfrHwd6XCo3e3wDiW5WRsxTWYCUBGwqkARVJKoTcguM6LXLhp4a2nvWErbb9BN8HFWoeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JHK9yDtE9oUy3LfWoUwtsqpeEvFskvD6XodryVPg8zRmk8ouZN9hLGy445REb1E9woMcoqPVGiWvNfbVb19k1NY",
  "key1": "5RPZZ4dwRLhtGQYf6PoqUFdYKsouVqXTnVQ7NUmxjP3sTdGuTuSBJmGW1y958qeC24PF51Q23PZU4FdNEJX1JrQc",
  "key2": "5Zb7beDiRJUsifBqQD9Rkn84TjwXE258f4KkSMzC7s8VfdvEWJT6EJvqFUKkqdXHRhqAJAUJoCVhVddFQTqhjV9B",
  "key3": "4wpjhfyE8GKGbPHGJwLVCjiAfnLiFmJDNeDNyzyvcdwbVVuhy6MEdGuinSuXd8uRTJFqbPmSRuxDuZE2FGyNp8k4",
  "key4": "ZbkYx33uXnGpwtcqc4eAz9G3QfPMh5BPQngypMSkc2cNvFB3Dg14NSSAHYhCqDJ8cPUpNGDVpbc7tHXBUq5jQWp",
  "key5": "2kA1qcbU3QVQJRixqxYz3GZKwzxPYzTYRNxSG5YHbhPdFdENV3QQrw11UKKpGBk194BvyXavn6hbrqtJ59BmeSWo",
  "key6": "5ysSrYiv8B8npnGo9DcGHMP1TeaRdkH5ytXov2oCLyLA6am1Yi2Mvv9cDM3JetRFTfFm63qae1SzKfU8BP658zsv",
  "key7": "DWzfM2Vq3CYnXx9que5VCWLN2wUJ6BUzvALG5LdBhHUgxzBnP2ZbkeFQ5GzvqCKEGGNjHwKjPcegEvuJng3YR2F",
  "key8": "y3G4B1wj7a5pnXMDri4A8rkEiARAmS1Qy2xhPeamk7wD9qSr2eNWqUQe3LLF81PsoaaxGQ3crGoSkcTp3pX2Yaz",
  "key9": "3RHr2QW11D3rX4E5CnNzz8SM9XNg3WgVEFBXu7Pf4RaswasdpFVLtyhRvDCCnWJHB1xa3pFiuXCVAr6siX1pGQHJ",
  "key10": "3QfXCz6TD1jCj7ZFSYqdNgsBqqAcWzDfryGY1ebvGjqGCDaPtfKakgfSFN6ZY6CvFs1Z53o6Q7na5DnjganRLo8Y",
  "key11": "4rs8ARZMvCnj6UngCH3B1yDEJnycLUQTZh8vcqYySyp1QdRyfeuCZdSzPc3X1BC2y4RCzVgDQxjzw7fCN7tGdAZp",
  "key12": "6j9cYEFnM3jCU4REfcSVgBxPBZgxD9e9csHs5hG5JJv7cpMNfXajqVToD2wFC7cx2HUzqLrcUYq8Pf1jJUgej9u",
  "key13": "46aQutUsbJfPmWTV6wpLcxvKeXeRn5npWy6e33y2FzrpAAjAHrSf7JTb1iCBsHnub2f3iEXfxeMUbAcmYeYo8QHh",
  "key14": "AMFAFuXspJ2ttnsMDyFrFePvg2UqM2CLw7Qbx4fq9ocLJuHu7zPR7Qm25CvnzkNEmebQDBpCXZed9Rbi5cuYqRp",
  "key15": "4P9UdTgeS81N357WWd7hKsWRLF1S1mFpyQCBAtgJ9Xr5YVN9etG9DzgbeGPTPXR9y7L9XgR7Y1E7SKYeRMNaTdpH",
  "key16": "7z82FTq5JAo614c19t2qjy2T8HHBLrsXTB9QGWQcEy46zJ19pPuTdFKk9rghpqXAtBmFEMhhEBAsZT7jaYUGFKS",
  "key17": "3XnyAjMEAU4L2qxKPJuvXrUH2jijzFZCeaLEkwnNCD33HKtbb8Nr1romhqx3mnHcifPAfqwJo8gebE2FqqHGhtxd",
  "key18": "4YL6Fkgqe5LdC8x3jmEAAMVRopMBZ7uCSrHiwD8t6pjGVwjShbt5d88FPX28A2uJXUSaYeF9upNjmeVZ2Jmfw7y5",
  "key19": "36kh8rDvnEKkbij66RwXSkf57nm4LXyMFvumVVjAM5cJbNUhMt5k9ykALKmn6wVbBE4ZSbqJWQzD6t1FLLoLtmuF",
  "key20": "31ibc33Yts5uuioHGyqeJVUG6TJ1Tbk7fdwZPHTJsBjPh781QSYBitHPQphVkkz6AoxZokin8T3chHj93tsySdHi",
  "key21": "2JPabAnDUMeNwfZk94gUErdwWmw6DTtUit4MZMVDvmyoFuZZVS8uE4fk5YkorxtahqbAZGpqRGeAhEDcoUhoRh5W",
  "key22": "33pD2pyJQvy9TyWn5Gh6k21LpoGGDCW5pEDqiGqJNM9ZCxpZWCh4h7FZD7setbrCx3VpGqR8UNNuT9MgqFBgELwT",
  "key23": "2YwzJZaAvRWN8jKgCxNNaMx7YRuf1c5ZVwi6G6b8w8v2eMsQAhrUSMjfjF66HCuDtsKrszfwY9KTAb6zXsKu638x",
  "key24": "5LZsT9kNPc5rwyUSNJ9fYQ7Pd7tf1hCYFut6LL9rjR9CvhBQiuh2eUkQyGLTKEfbpjVvfqKWVyZgLQNRjewZogei",
  "key25": "37tP5z85DT8kFfJAPnqCJoXSK1VsjYeajdrM5Zk44VV4yrCN81PsAxuqPAVYxLAVzkwGFGCmQi9T4jAuqDmwxnyH",
  "key26": "5sYZUq6VY6A3zzmm1XcbXBvCdfWQB3VyBRNJPjVn3thiD3ozPHTjVFdgyPwicYa6x8J99Juo55KxSQytUGUtpQNU",
  "key27": "4rtCYgGbTYC5p5uZ4JTGEMa6J58KkrEGpcUCnfVycUnrtWitpDH5MiTtq9qUvE2EsYkmk2Kui621bxpSi3EJDpya",
  "key28": "4NAmZN1qz6nutqFufJBVHbHMWQMkUzkHJBQRxqhaGm4hNLY3LCVGhcjsvsvt7Qx7XEfCQkSouUpfoaZbziywWoao",
  "key29": "ZjkpXTuPLSZMUwbnCK8eaC6uT1kgb5g5aTBRUs7CPWgRZPbTx2FAcm6zfac5yF4DzrHNiQnKuzNmbjpY9Qe8u3N",
  "key30": "2FxVEySicTZZUWjEhYKRvzkcMNDxd5boihfLepQq3hfpaboyPpmEDvTZ6oewarph1UNmu92muZ4r8QT1DAjDaywY",
  "key31": "3AjbHFGoiUsXhv5YeRfv9DVeoJkodgW4U3QXsqQmE7DYVUarQ7HM5v5AaqS3KMULmsYgaiRKuTraP8RxBVXpfuEL",
  "key32": "5wFJ4fx5jwCfCdhhJZcrBe1DzvqJ5bju4pHvSHsb4mfCbmTiZ7mwkPVSWVL6jNMh46f1RGfrwebKUZd9XfYZ43dy",
  "key33": "2qWpgqcS82K5GMuocwqMVP4ujUX3UmE837rfa8RqKtBYWRmTYoTL2NRxU7rr1L1mLqfUiVqEFKdPRDGASi1Y9wXK",
  "key34": "59pKaYfs6EC7QpuGMHrQVsvtZCtxVBWfobduofxzmxQyVyoUcawPxSsu6bLZgaBCFpPEHtP8uFpxGbFTGUV7Fdc9",
  "key35": "2PTkpEVHz5iuGaAUSrFjDany7GSGP4KJ2zRVdStKAAELNo4hWnT8R6sgymtpuzEqyptY6gznFgCQ3zxuN3wWB9xs",
  "key36": "57fG4rhLXyDWUpAvj73wvZksDcosmtPzpm69Bsv2QaRr11jVDs9ZX5w6Cc7sTDyFnsQwfTUqtwjm4jNUPHyiixtM",
  "key37": "4oVu22QmsXX7rgEaVQmHE29M3d9195uex6ezfTz7D6FDCuvaQ3bQwxgy1ynk6YsMd9XHvC9gtS6oKhi3DZ3Zkzz4",
  "key38": "4Q6spSUUMv45zXgipwB7yg7XpwVk2D73DxFRmqZGNguK1D5ZgA7s5Pk4rWv2Ro2saUAxWpvzwxYx5qSVreSZSDb5",
  "key39": "5FEYda4JHQ7SYpMoC8JHEXhh38yyDiodEZq9iTqPHgqaznuUQXzNS4kGJv35damtKN6TgWmbTyiCV64zP3d1j8Ba",
  "key40": "3x7wQHTVeNV41KxWPZcAbCF8uMZHXSCApcfdoVTqczekmiSMcgWxDECC1QiQV3XC1XFGTMVH4iVbZrZ4iFSXcLJJ",
  "key41": "2RntWw6goKqEAUPp19JMqrPUzV6VA9QEPgP5CiAxoVfFqcnsoZtUrDXCvh5grrkx39wrnT5WpAHySzBs4V4YzGvt",
  "key42": "4p6X9wGv2BxLYYsRxZy5P3JNkGosNddBkaZM9x9S9eNBPBz4M4vJsWdsqbVaFJdaDZ8JV6bLDDPUkHF4mm6vsW9q",
  "key43": "yGLjgP1PLersYXsEToERqQjtuDeqFF5X6HBKzv7oQQf3Zv2KZ4n7CHwFwU8GdqM5EtTkpvNpYKzf6DyvjnFWyBz",
  "key44": "4q6FzY8qyCJGAi3k2RWN5RkYeavCJFvY7Vdrep2A5aA52QT4sGLN4zhdePNaYnyNz3CySVN6NQwq2q8KPLgZTArj",
  "key45": "4D9HFX9XfN6rm1cb62i9cJwvUJn2sh32oDaQysbS9KLR2aL5yBsz57aXmSi6PNR4LYyb7Np6bYHVD4Dd3EYZTFFu",
  "key46": "5T58DiaYMjpohG52ZjcCLpi7FFzD8oM6pHwVUKDevHG6WyMkdqiqtu7zicQQSJjSaW5z1uPht5csoEDZnVNAK3nd",
  "key47": "himJiHgfQeeNH9P2zVbeTqxxhhwx4KWHnd8YT3nxiHYKW1pGPpAvN28Yxt98vqrhjEeA7apgR1Z5Xh6iJSGUYVd",
  "key48": "5g9NcJQtDAvJMEtzQkJ4K5Ty2TpMQaEEyAkrzaHVLcDVED8YmBSuHMnCTV9K15SEJ7QgkoTom9avX1TNKJhcxHp5",
  "key49": "bmvpBANap2rrCzC7K5vd8hoVFXsN88fxbEPNbF1AF7Q3VqyCgnHcFKiiPqSUCCM5UPhi9Eo7zEYnh9ysp7ua3Nf"
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
