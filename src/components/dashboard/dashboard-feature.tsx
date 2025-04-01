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
    "24abZ9toyqrBXTSeFYpqLtoCpgcJBfWdYJ5UpoC6yTWobuyF5jpb1FTnVXDQDguExwCZkvvCMeb1EniVwLyVTjPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ufBGUVk6JGhB5MTpiYv8jEB4epKPuHAHzTWyrVGLqaiS58TrAnskbwo3P5fSyrNsJgMNnGaDtvPGo3QmsANRJWp",
  "key1": "bVC5Ya9gfsuiHhwdFXJxk69nUeKQJWi6cyixLFFoeAuqxZmAYhrdPHzzGbH5FCcjeZiwiJoYR3PkhXZLjDLby4K",
  "key2": "JV28D2zGoGMmEMRJ3vNZMSitUjGVBRn9ScrCS7aQso6tDXw16ti2N19rduRkfw5bQr5Ueg3En3ZmWCmiyuMLXcZ",
  "key3": "2gJ5Au411CBtYMcQGRyQRXTk6wdRPPRPnq8jDXAj3AHnhyusrihGP5jCa2dY4WcLvaWLWLEN1EbU9FJ1Qr5nQcvX",
  "key4": "4oz1yVvATkiRKsRRB5qcsCSgKMhV2JdaR5YNPRxoMK1hnGoRjZohiyYHu2Pj7nv3mYF23M3WkvZ8BAUUxV5pHdsc",
  "key5": "4Ra3ND4iE8jpxJ77TJDAi6pBYakBvELme7Wvqf3FUNSNcE7mBX4qtfG6ThubbnKXkK6z3uoTspPz3f6T7nETnBeN",
  "key6": "XNhgVZaAme7c6nDgXSWhq4rzhhcJaZ2mwgWMWyacES5LxQAaYgFf59RFxp7aGerhMWDP7U8TmykBqSEtemCsMR3",
  "key7": "4YnW8WEviXRUWpqSJ7rnjcqkKxYNKhMi15wEpNvc7qdn8QwEKSZT6qsmLSr2b5k8ux8ybwoYofFHTUP5V3d77KND",
  "key8": "2dzsz9iRLHEzMLobvpBB5kKaHfx2pdFHqNBCfoHRhq9mNcCNhsfuh7KdQZ9jVS5bMMLJfnsd6X1rRzuRoAnPiPNA",
  "key9": "4NBjwKXKWPK8r5atAyBgZWndBCW2JkA48NXJaYpZBf32khY6coyTQMQ7Sg4iG1cczrVa8ZwB2Z9bPHe5MJ7mSWvm",
  "key10": "nrsbQwkAwZfCTUYnvnSf6tCe5oN8uviUmAUwpmBQkxTewCguW2qUbbYeTr17UQhVgHVQpDSevZqf5aEmaF4qBho",
  "key11": "35E6thFtWhQiXnp1gonARjp2FLmQHuDJoUhtgbFVxkh2x3yyaSTFCc4Upw4xZXz6Yco6VnAKJHmnDSXvSBRGSeSz",
  "key12": "j5gmDYS4BrwCMG2VpeFf15Ds83jNm1HBUsFV3CNwWrZAgyxWTY7k5Z7Y5SELsCh41ACdTortfEWhn2KXpcCTnpW",
  "key13": "2rNiLa81yPvzUsvbYYwPkiDF1FDWFarq6DV9w3tpJDfRmhgoMn9PaD4JD7N4Gjk6SopjxJK16Jm79nUvrXPNAAmx",
  "key14": "5Ajtjpk7qEwXKEebdxiPDo1pp6FiXieKZDTpLdTZZKXSz5oSCuYam4YjuPdwZjERdWaEQv5fCPK1fYRxKNXY9aoR",
  "key15": "5ycidBneNTuyBpwWQ9vMLWsJ177b8p8RfwbYCSt2MytedoTRtMhCzEsqAAaDSBNqk3wqjWTSt8Zgn7ubHprVUTJw",
  "key16": "25WCpkhBsVGp1gwKpMcZ3ZLNXYNsYaYne6DhJ5cfKxggoTF9qNK9PoLdVZ4JWjuc7EPTVMxD8UME5uwzww4cpndY",
  "key17": "3uLiodw2MKjoKsZhzqu4ExGNAusuFdwNnhM717d1UHGvJL6AdpfTMkytWzUHp9HHrxmUFrNdpqs7S2cdYP5tHubb",
  "key18": "3eJvCvGwwPfNgUPDewQXWt7YE2bjEGid7spdxbcjrujXpBfSaDFicWGAHqtZyM7b8EfZtpDrdmVU5zGp47AwK93X",
  "key19": "5myFSRuhcwbnYDVZj3wmxgjpD32fCxKcPzqg8oLXLCP53WEZG2E5gT8xG7GhG5T3XZ99Dueynbk4HfLhhCNLJZrM",
  "key20": "3DHpa7N93XfG3hFZCfFss8tsDWsgyRiALwhwFKE5wyx9vGNmDLWzBtNnns5oAJPjaZbKdXdPUDPY74Qnzfqa6fDu",
  "key21": "26Lfqoqo2nLMFXNfU2Gy2pHmCXxiz6PD33tNnApTHWssepsntGiCC31kA5tL3YmP6bFWG6LhDaDngZAGd2mDRJzM",
  "key22": "3mqgNLNWSocuCiPhsmEmh1CXtWAffjFEFugUSHrAe73tZhSDCQLD28MbTZzXiv8bWiaGm9wCbTmd9ctSYo4J4zXZ",
  "key23": "63tuXxK65uSkgUQPSR93gisFm2GowLC6bbhYMgpkqXsmMyZj5qcQSCoPKepWnZUpq3mdRFRfDQQBR98dJuuyR4sS",
  "key24": "5YdVZrKhS3ZWvNFAceo1Tm2VoX6YCth9Gi2v1S64Z9HSEh8kz9iBK4xYCrYVgnke2xjTWiFpKb7zUWTLtu5mKCCh",
  "key25": "3jnG2QY1pov6FkV9vhbneR9vEmrx2eJFqPdpyCKTGgEu7LAaSMidqYJGQFk5k5FiA98wsQXF6R7hX9eVgnJH38Dj",
  "key26": "3KmJYcPwhEh77Xr8Hgw3w5unCsjSFEtBNrLLPrdrYYSfpxezD1NpZGUEwTrKFfVASc2DcwseGFikkrA9B6PnJhx1",
  "key27": "5Z85T6TFF6VdBBqxMqapcUYdepaGfdZwCTD3c2pHoEYUgS4pfmYSQmhiMhL9dTgqp8HVEVB14iNmAewNNV5H5crV",
  "key28": "3m8sSfMQqs8TgMiDCzpLo5duLCPYEQKVEa7s4Qiov4AfuEcfc3dLZMEGcwtzKTa5NcNaCH54T1M94gXiu1JuRAks",
  "key29": "4SaNaCdbmSDCnDxRLRkTEEtPmz4uZ2sa33XDmp2hjX66fHzwMjD77UNWbaujd7hhmA3Z27Efw4DX1kmQDjPoxCxe",
  "key30": "5FSqyvXyCvE4gFPufkRiznydDEeceDEQLokGFUYxo2B5qH27h6aLgrk6fkhQsB1id1UXSVLFGgbArZTzG1Mtrzhn",
  "key31": "4va7njRyt4skAiGjPU9NS2CCnFY6qLyhC2RpFQXRzYMmnG2RHZ1Pm4KwrHUnzKbg97e6X4rRiNEgjfm1Wm1DjCBh",
  "key32": "5Hk9rdbD2CensToVfDKWmQ3yddtiVv5pmrTgXkF5m8YAcZRuLKoFUiYDkHA1J4Y6GXQcBLT2yQsEgLSNkCByK3ts",
  "key33": "2DEkgyRGJe9QhH1YWgP7nG2Ts6T5xNdVKdFLqywKZyExJeJcr1HwGYCMmqLRSNssykHEWwPkXWbvgny6tYEZAvDj",
  "key34": "2fYepxQWBGhEJ7wAJLoden8mi2nB3RL49JdyH2wDuEZ8ecfQGBegfSnJmsdNDNGQhBsUq3FgV6UZLGMFpZjbj7Kt",
  "key35": "3jyLSzQvqffRRAXufxA5QQzPhccfdWPuYLpJE2dAahbP7t4dvGqEo4jCns6LN3L6cdhyZxd6B33PpJKvZ4zEBLXS",
  "key36": "4UQ9USpvmUC3CinWWBPMFYV4bu4GcNF5SQBki1MZhtRp2zcaejk76Ev85ScC89kcTyvWn8oXYD9jxURq1JvPswxc",
  "key37": "4mSB9vsMvdvHeiErBzzMuXeM5NJ1jBm7yRtDsYeaNfh9y7xB8E6h8r4c9L5AAA4DkkjxvAmQLoV6RdqHgVYV8SVw",
  "key38": "2mhjjj2Dm6MwztMCizJt6nH3Uwd15YoAiJa74UovTdJCNzBshsHbuvSfbdYiJigu4ouMrAE6juKHF5E8WaiktUM8",
  "key39": "3K8xW8EsbdvrzEZ2nT7gBNGkT4iCSDxo2qJyNTyohKWkAMXZ44BZKhUPN6CzAeMQsE2uEMasgvefvZWz7ghu6c3T",
  "key40": "46FDnPLz1jvNf8YKTQRTX7oxbRARunUPLtVHHntLoJdGhd1TxfKZsmGKTeF6ZjQR4Q1ZD9G3hBsqhnFDvXW6tJVe",
  "key41": "5J6nxJqApLe1RCevGXWQx162wBsMNhEK9Van1f2spkrGwtozyhiuUo7kYyZnD7bfGFpWm5TrvMXAdpvuPFbZQ4we",
  "key42": "5o4eAWnksauWxP1MAHcPhGwBj7EhtEGY65AYfqsXr3jC1zextHsn7hKzyuZnoG8qG3tjAamHF1HDLMzCiJGcBKiL"
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
