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
    "2qaLf4dgZKJyitxFyhBTWuAtdebBTieXdiV61gxJPYDvtnG1i41PenhwuF2yR2ufVrZjYfNeSaekxffTVzLZhcS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqKfK1h9BfsfF8fAzWG8yBhpg8SxopuKQ35Dmr92xRSz7bB7uwT7XpJfz4k3degtsvjcac9b3jbSBbbLYN2UyTw",
  "key1": "iPKisFtgnFEerZsTg84H542rW4gqPqJcXBuSzhMk59hZKRMpEpCfgjKr5gSzACMWyk5P2iyJAtnhjALCxqiygAZ",
  "key2": "iMS8R4fsDRSs1N4GcrA4xb3ZaSSXdRFKWGjpp3Wr3JYU3WKtgY68iQL9tmB1SAvNS9ovM9gbC2s8npUZGZnyZM4",
  "key3": "2yQMRpSa5t96oSPU5YcYU7spuTTJhoJQgRe1MgnAuusJAzKC2dBPP5E6NzXu8P224zuWtoUiwhxXKpfW6H2KpvwR",
  "key4": "63Zy8VDwyNJg95JqAKnuXt7TyRW2Z8enzC4AMPGLAjcBRKP4Jet4U6V7HRGmVFREJDZ5RZk4E15M7z95rXhuBffV",
  "key5": "5JWecunNCmsMAzf6o65LsMgnP5bjCekadweGgnvGtAxVyyPEy15tFrty7ef9vMuPTPnQj5Rms8kR8X2TTbDYFTPf",
  "key6": "5N6JZSZwsBA16pv5vL4377PppxSZJxoHmSrdonXvKZqDowxnSX37AhmAnEDU6m8pLgHWvxRoexTUJVZ4fMd4ehuL",
  "key7": "676ojK2hgopXUtgCZPE3EcrxRBL5YdbDCTKJME69nFunRDnoyUsn2ycSiU9XvSJP2hzizxmw5bgi9eB2f9s9iUgC",
  "key8": "5TEPVQCUBkdtitY6JhMpL3cp1e7gEiykZ6gXBPornwuGdJQdtixze93B4CNE1CxALBgd5TgBeXe7WtxLbLe8vxhF",
  "key9": "5RzuxXH82iJVC7h4vxCf5z53E1BemZgAN4Jb5oT38F92VfYejvDtM5skG5hEkaDYE4AsjyFRSidk8gadaso6qtDo",
  "key10": "4Gc3NE2y7zcpw1WbizwZcpDpa2PtCyau3oXUpNo6x1LHKf1jNmwmBBGMSQvnvF9Jh2tiWTwm6UdnBEYFfAMuiZVn",
  "key11": "5iFi5vsVS9225uavXBVbBcJn3KMkgsdCfu6TDrf7i3BmeioYvPm6BZYFVGaGgQVxDvaXYRwEPG2DgfLZN5dNzdv",
  "key12": "5Qy3gGBxfQ8cczgdo6ymFpYNj3o3gkxPfXrUTH77sfZ33z9nCdAGr3Y89kVZZjixywAaJ8xhbZGqHmvQEuHn62fZ",
  "key13": "3CoHN724v1NupWEV6799XvSix6uF5mAKHexwgkR1fRDJVxPRMgjFNnR8KdzGh4qVfXDrLTrN4ia4dZiwfjWhiAP4",
  "key14": "4EADkz61aWmeztgHyANtTVoUDgdZQpbgccGvSM3J77oFCPgqkZKS1CmSmxTRe9qra6ULuKAAVgpNetiNDJGDXaLP",
  "key15": "rpajH9TswpTSKHYQSzmsfaUbsWFBdPvNoh2zfAqzuz53CfFCqqbRFSPKDC4GpA15NpzqHs4eJqyneLonfoaamze",
  "key16": "wknEbJq9HiyfV25JaTLJZCgUfEd7HrWxb1fGJ169TK3uFBbqXzr6Dj74ytr7dQVYfXtt6R4TM4HC9gq35gTwHKM",
  "key17": "5CGGzGxVgVdYj5fbJqxCCdggkhYaEqbevoDSprMhD7xSv7BsqsaEjMd97umFrcVARCgaNkHLJ3sXerr8r4DM3cPE",
  "key18": "3hj5DRTchmez4tn5kt3pCqtPKrhVXWBiVKNRUHHdVWms1Rev8GLvgRwqsGAQQE8ccxE4WmU5vjWpmTuRCc6QRpW3",
  "key19": "2xwkTtzZoat2bfPr7kTgKAqNTfkgTjUWZ7hj3xvBRxntKBWXxQr2K1xbEs6k1fHTPG1mMRMF7P5iExNhUhKL9Yn6",
  "key20": "5uUsrs1YuhDyLp7sB5jYrSyEfYHekZNdjZZLUP4c6JeuL4Jy523C7BjNR9tnEtfANiG8mUvNLmtqoXMJPZUmqyb8",
  "key21": "2FDQBrc3dGx44mVhHMaqohcWNuEt9cwfspBWAWu46d2Q8mxafSjAwHeyat7ZPYAhrGcuoqoYYpD4aUL6eWmR2QnK",
  "key22": "4NrFmSyMCiH17zMvhgJhaBmzA4jRSCq3dz16D4eVftYhx18BP3zVoX24iaZrGQjdPtQThF76iKxYJbcZBDjKFNj4",
  "key23": "3hXXUh6RoDAxLWQu7PMKJzvH2vSXPUEnjPxTH54nZRS1AtR8qCAeyiSxacB4gLU61GWKn5ZcJALopytV8zADo4Kr",
  "key24": "iNxzj55ZzWc6v5QkcpM87hEb76VScChgeAKk9vcaEyFAgFG6UDoXYhueCeRxraMyNi3QggGF32GB2JY6GQvfrrL",
  "key25": "34KDU24oeQL7jD8UWpEeF1YaAVc3tTKAkqsdV4TgEtMKhsXYZdQtTHy9QzrbeCZhoeXsrrVUAi8y8Ea5ZZ7aERzx",
  "key26": "21AyD7ms8J8phx2dT6GBSLZNjagUZ427RCezkg8oJhpeGFq4jwu7hw9g39Tco9PXCs9pb16wWN1gmX5iam8E4vBL",
  "key27": "51YbMTrCvkkiwQHsYpYtr5w7XgCVgGMKmS7LKkvGB1JggWpFg2AFDuJgWXyW9xACgLpVKKZpcHhgaTJUmbB9LYjN",
  "key28": "39Jo8ntsT4TLHLUV71GhASqbxVVNdFV3AV7KPCt41o7LThfGZw3EwyPTt3ocAVc3myg4MYjcrPX9S6rDqAAW8N5L",
  "key29": "aALpjYU89kJa9Q9Ep8eHvzkdWKthjRnS2YpDqx657ZJwbziQQv1vYn4zDPDswQWG5VRyEYrHxPNcDiSFQmm2cCi",
  "key30": "2hoEBVE8KHxeVLR7UUL6bkKY128VAtq25iBWETcU4qSugs5ZbqU11ccGateikNQxUG4c8m494VqhfSorpMaqXKP2",
  "key31": "2QhbcPjeqQLT5oQLvmXoaLPiJhxM8q4C7XhLBZVeYBr4yPtgg5VSKEDDn331aob3Yc8GyRQUbcSbQiKvStiLe6YX",
  "key32": "5zKnAvh7wzEgqdpmWDo2FdZvVuVsaJWburBTQchYQr9QeAoKUt46dRrjMNwtUS4fzPwmW3BKZkDdUoR2rBRf3Yua",
  "key33": "4A6HyJKw8CXCMZKKL8o7teChyUV5xH2j4X1hFCMpnBw4XW9sh3F3ymJ3EogspHTvoVP9hgg3V4tA5HTrG1GAz9f4",
  "key34": "5oAxn6nsfNXyiWJUkVSr4pEhmsNrjQZeL6uRKGzSyfCTvPnvfp2XAkfZeZ9RrLZKJ3DtaGdVjKi9KvVt6rBuEWab",
  "key35": "5e4wh4UkVVaBM13yb8iA8AajDpnwnypg1RbbVCGXbvDRqLdn3BkrzKyfTFYxCAvaLxh6Yz4qjGSSJKckc8aDbx6F",
  "key36": "4XGxwHZ2hMzei6PQKZ5h3tpfssw31C2uNywtHY5MUcekDmewv4PK7BokZr4gprjEDG5fRVqBQLx31Gc4ZTjfXhWF",
  "key37": "Uo2snaA9WGeeSSAkwjmbhV8iFGSfi7AmYp5buB2dEeq5zyVCCcEp5M7VwDSugRGFRCcgP1qCm5KhEAJmMsY94GX",
  "key38": "9YqDYZa2ho3AbviyhySja5o7eRKEq7RUUrgwt2J7oySUYBLGS5AMrTGuYnoVNapvsZqeWXswgMUhvXqNrx1yjrb",
  "key39": "Lmsr4GZdQrHaCWvHQjUAWqFCnBJBdQLDWPc6VahCCva1jcVfdNDzGdPrm9yEE4gSLFe66zpf9kNy4cSByeUUaR4",
  "key40": "3dfacHpWEckmwjLEBkFKzEzRSxiBoinWdH2uGy6bGrP5nVdxUjSbvALKmyxKrocB4i61H8zpPNcqNRFscZgYCwmA",
  "key41": "3AhCtH8ovidtQWFARqg5qy3VzjwxAmXJc7ZbPavE7gqDG1k7vS8eQkEgpBV1sr9igoc3YWqYY5U2Dtns79vc98Sb",
  "key42": "5g17fE6VFjrMQW7eogwtEXhcgisYKmqY43EU4afZbSiTo27rNbiyzh7fNNtR5eGYvPwqvghPxGQEqQ7kWcFzLdit",
  "key43": "51DVYyUwdQ819B89YonuDqCZBkwoLBHfHD3i5YrHBjMHBgdtDMJ3edFnULWCzLd7KAVit5tvtJzGtTzfgGNzybQZ",
  "key44": "3hGfv9TH4wMgrufpWu3FWXyL2Ri1H7hCvztbjZUr1xaAUQqQsM544gyqvw5GYkSMXxshXuY3HUpbTDSwFBFHUsFv",
  "key45": "3gHc91Ld9ck9gtZiRPSQbPvLEB1oy5RHDYYBeVvDQ2vxKbGbkMMntgd5xCU4uYkikc3qPFKFx8PVBCvtWBb19Jqc"
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
