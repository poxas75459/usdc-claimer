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
    "5r74Ns6H9gM5QEBqSZVeaczEC7s4gRX8mz8sq2FGaFJq8LjH6hiFvc4ziLYaummpksyWhtsQnin979XdFuhdUSe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yjDfU7epcfJuVf49auRd5Abos6qYsKvSNwbU8oPaNDcSABLfxr5YrPixfuNvf4EDH6JrVm4i4uiDhU2weWMnArV",
  "key1": "3cN3scs251Y61Hkf9AvH8BPz9N8nULCXwXe6QBaGUyQseTkwS2FTQwrdBJXvQbHGkLbtDvu1RhF6VtvorsDoVoxS",
  "key2": "4YG9RZ5mRhe97zLrvooPJnQjCCBkqjoykD9QVzvumyNq6hupKdkSavTPRhEsk8AqkjVx3gvAWKL97AJqYZXJJgmL",
  "key3": "3N6gdKsmqe8ndsUnhcPMYBxVZZdKYhGAjAoj3nZxHGLxgpHjKLorSk4MzQk6LfpWcLLG1RuTZuL1Zi5Rke6ucyJC",
  "key4": "4LgptHm3kpbHAYadeESn8yaNU9zK58MDPPBB5bMSj6b7w66nkEA8T3ps7dAW6Lsb48TGChVVDhn1spAZer1JpuBm",
  "key5": "24Q3Cj1A8mNsPHnyRKYvATZbSbBGJQ7yaQpj43uSGN9ouB3vkEijq9MVFoPY3gRYUidhsZKa5RFu7EvW1fSTrYBL",
  "key6": "2mTCJjeUpt6J5iogS1Whr3o1cGLqb3S8ePqBpeJmpDV3QLUHgLtGqFCDbLmVZBnr6EnDgpM5iA9y73fU1jNe1Pq1",
  "key7": "BRiST5knCHA8TSZWdkusvy81oqzBnKjzcsBmTYWeign8ZsNcXyBArUyjDYnkpJLx64g3eCpatqbCvKchGjwaTep",
  "key8": "5i4yvEVsZwm4j3gU8NarpBW5daW2Pge9bnaoXSk3CKCoxSEuwYCWk1fuVtuxUqixwhPHMEXQK7z86BYVnbbZaFL1",
  "key9": "3feMRjb2H6tVomNYdnEt22q99D1VFX3XSsmd84X5SkjZb5GFEMUuDfyEWbmaLkRpx9AefW2g7GLrGE8zfj6WxnM3",
  "key10": "EC3WCnYqzsAneiuHLJQo22JXd6r9383SxqG9Pgiyg5xU3MK2dqFSPhkvK1UZNaxZ1ttSPuHKpBWwVMdqkkGyDty",
  "key11": "4gqu67zNgHR57yuJV3psHQoHMVC9bQQRw4ZMsJPU6dFixvjQCcXZox4XTqJ9ruyqYTWGDUEKQYxxFREWVonTHyi6",
  "key12": "ZRpnSYLqYazBzu7GKpzcH3MveNhC3NP2sDhPnnfu93wotaFL18jJXRuFXqFBtyLHGUqCQgkMvZ5wBkvDBJ2g9FP",
  "key13": "61YndKLibaphmvgTe6oVFKvPkxSof2sjSfGLocBQXQddFiD5C5m5MmqoEww7b63bTUj9F7ChHuKKYc6AuVWGwJuq",
  "key14": "tjrqTbEFpLzvKj5BizQ8xKsNDNUhSizDbgcU2tSqjhkCwBJSbYJy924GuNzpqhzrvmBfbV3QjAtQWnZYdb5BnDb",
  "key15": "WSn7wesT1A9raPpUj2WCvHQfBh7fYjoi4S895qGQXttsqs8xv6bQfVwDbhko4cJAtptAQ9udqyokW4nvArAyGU6",
  "key16": "2ni4dC9VSUfDw13MtmLyob4rMVcNp1yhD1eV58ZSvPiouDpaU3Sk4WuXgCEgM6Soqm3oABAG9GyYuPcPGS8PFB6e",
  "key17": "4Y4okCUTNcEhAjPe3xTc3vD5SMWdo8hwM5BuG75Zoo8SB1Kmm4S5n3EG2EsUeXDEJefppyhGR5eZ4CugCfsoDdKQ",
  "key18": "4quwoxEz1hqu8kRgx8AVwq1Coz5gdnFJYeAkLvoEyJnV29bbMeubUf79M9iErGzK51bGB489YeZgzuFWV3vV9EjF",
  "key19": "5D1fDaV4g4FDnBe29y3jDq3vHzdvysmN6BTtLJGj9XtXMi39tJNEqydyWR5JZRCe8QQfPxPcN2zPBoPQWxzScqqe",
  "key20": "QwGrNBX15A77wb9DtrdtEi4JQY1rP55bpcjkwxW3X2c9HM35ZVd9t8HyK2x7cX5ZBuAxJPqkaXg87CdksvoxVC2",
  "key21": "2KFdnMbCqXnuUA9RUk9ZtWSneJDCCazd9pvmvGxf5HLMPAZ6MP4Rs5htdmRrLaMckEbqT4yNhSfydVqYFsJrnust",
  "key22": "2ojum4BckzbWuTuxUz77g4run9gR4E95F2giLr5oiSv4wMAvV7LeeA1eim1Lfk4juXA6C1QCjfxav5FHEUQCmS8Z",
  "key23": "5csDLR8MtfjCE6KDfgL84xH6YqTCS3Yg4e8HwVGZwZwtAv3gU9GYJbyi4vCWXJakyjUedwmH7awCdAWVav5b8S7t",
  "key24": "tatdnMrs7KCo5qqEogR6AUFBvqQ6HXP8FrA1gf9kn6AL6L3AfM3jDckpRGkRiAprzsUwMtZPHhQht7QWTveSwZs",
  "key25": "4A8ng6cwKBkwxZGSCD9EeVNyQwGifcg7mjUfYkJR4PL7C9kfApiNBcnNLbLUoJEEcVVdszhDHic5iQXnmMPSvUhx",
  "key26": "33vaKNYMuwFpGSS8KEebk4kQp9cXjPiUK6BJYbXjQBedydGsr2DN48jA6iNaxSAZs9qmSNCM3Z2xUU6TCez3spWy",
  "key27": "5sdpkrvJQA5i4w6qhTkDQnN6dnKcYHKyYiYtAqgREHDLZa4X6G8Z6xFT2Q2AboM7C1Zn7UV7JUYjcozyMuDe54Zu",
  "key28": "3Ujwi3Avb8v1tuGtauJpDNYDnurfJ4WQuUk2Bkw8kTaDpwUJTw4A4vvu8uTsY9689WLwckrMjY2RRLFs3tKsSz1p",
  "key29": "3HQcqQodpTCqFefJ3thdibdpRobFMALncothjhiGZoXQsjzWem9m5hrzUyFQsSpxq1sJpt53yBw9mYtwS4MwkBHZ",
  "key30": "4dHDuw8bCyuZHKgqrTaMPGtdVSv6eKuuiQkr8AVMeFLVKooFFk2pa3pfTQxa9yyfLsZCQ4mdrdd9Z2oLVU4A4ACc",
  "key31": "2rh6fsQyN782PeK7VcjMsTHcXw9HubCtr2d8xyrtHU5oKfW8vEspYti2q9vAGGPKnuJ1t4VnTx6TW6y2qqU6xDwV",
  "key32": "2t7FCnFTFLFqa4nBU19xAfUBpBg9CinhAsagipgYymQeXEPbDs8FDwXsNqP4bThmxrobbvjrVYAvKeqW3BxL9wLt",
  "key33": "5VTPNcdyuwXBYpdNtd5p3NaefxNZNGifDwA2EnuXUUh3dGhFgybdm3RBvPyz9vjxhJpJm69UkMEpBAdJYx2QgUiw"
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
