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
    "3PsDiFoV79qhXbshs1kNij9eosQhSe8Ng4A6kdTg52H6AXUMo1ML7dnFUcjwjA5utVPrJHKUFEDPgoVos83SeSEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4orpYAT13XpajMnP8LnoSbJ9kyHAmVDJ8Yp5sY6txVe7rxuUwK2jsJpnoxEoNsabefaNsNpwdK73FJmX3qF5WFpn",
  "key1": "yeydL866gmAZaeV31U7cLzPSvaC9YcBDRKNBxkQzy2auXkCXr8exBTvazAPqXh9G5qEnLvSffmVwcf91ws4dGXo",
  "key2": "cNUar6C2iVTjSiKGkurd5b9jgQdzdanrQDvRpUNG7RkimR9xvEXGNJP6F6yzBrn1fvnjifGyUVUYDu3ybec9z8c",
  "key3": "5hNVfxmTPpYB1iKzRXGm9EnPKapotK56nDkEgMLanAbHkpzwTbJUD42X3EKGKZesF7aUfPFCduGufXUAENf9SXFB",
  "key4": "AmyrxYcEGDfDZt4teoymVsnAdLR8ZihMvC2sXXphTHZttD7aysPXKrJzkTyRM6h21FjF4ssoDSRzZfDUQKczVjM",
  "key5": "2rsJY1VPmUGFz1ii1Hu4Y8jySTMd6PCw1q4uaSJUDcNtJ5Abp2RpUug5dMhoqm5t8v7TsRTuLyZqpF1eowcc3Kx",
  "key6": "2jLBtQSKnYfWM6RoycFyPEbG7gkNbvi27kTfRyPkLrge4xqKASgdu56PqTC4BFTuWRpV7X8UkXKYrQQFdrrm9Mnx",
  "key7": "2FNyoJzuHG9B19s6G2vsXq5v39uWnFSheiuRALtF8KyS7vFA4dULKg1JyEfBM2pZ4Pw81WVVWszcmPz6Ltuqff4W",
  "key8": "67N9hkyK3hsx7ZMzRyeqKUTqgjdPUumz3gnEfiJ6CGgwjcga3bWdG2KyA6XbrJoCDDBrPukgTdYEJ7rzip6DxKzR",
  "key9": "3ftFxn5MkA9WcTNpFTSMQsBQT4sKzPunYn6YgrScBYyPwQMNfBeeQFP8uiK9SsYV5JbDxQxs2RK9kpAntUnAkgNL",
  "key10": "8RDZ1RMkhERkqdxVaUyLatAA4MMMwencbvVtkG76XXbo7H2kRncYAv6bdALtwAawLgsmwQgEBWamBd1Ap21r5PX",
  "key11": "4EBvzSUfSNKFmc1C8yywfXwV7htHdqAHUZv51GRhi9gjjY6QC5vYxgzopbD17k2SXYUAvmr2qn9gzVLvS8MfNVSS",
  "key12": "jxD1r6fh2mZUZfxf3itZ5cJG9APCFgAGKei9SJzDtRqz9ujupkGWPc6E3Jv4VasBhTjF2xNJV5b6VNQvjJcAhx5",
  "key13": "3ANAgRdh5oECqqZwZ5Jg8RXXpBqZhFQ6gFiBo5ETfa4gcRePkgasLGg3fWuur2TS7jeBoejoZx55GgE2FyoW4PEo",
  "key14": "5NuAQhfH62uWhNky9ffZx3GMjTF1WfazdN8abAdgBrJCujAXosXMPESKnwBme6t9e8fjVLJG9XRWQsrwfUCwwbxe",
  "key15": "3fcQyNaqkZ3dHVd8HZSpp6vtneupk5E4ABCAXDgzy3NZJ7nikfYYjzVVE3LHKspm7RMEdzWYXnTtV3raVkpkjC4f",
  "key16": "AnpUDxkLqSo7emNyQ8TJigTFjKVuBq6anWPce2mNvV9CGo3XDdZvKrXCRcsUqLSgNqFTV6tvRYjWTY4wZZTcjLg",
  "key17": "5r8dwW8fFRuFVn2jo8wpG3FX2o5PoMTVF2agVFyW3ZciRqMosyBgG7q1AU2KUFPqjpdVPY5aXkSnF1fEkWt5cbGb",
  "key18": "3g7jt6FvqMWfbLC2ksWcqG4TRoQXDrtvfJU3Zu5xxW5TwN1powuFVhtLYWNa2CmmC9mwXsiH6z4Spt65ChQjMihh",
  "key19": "3ATzuwEYr9bDaTxevDFPn2vwobBVhr1mFDNARtsgATLs8kus8HSG2ABh4iFJAQJp6HkuMm8vnbbCVmYCGKLuH1k9",
  "key20": "4VArQjNWfFEc8uqEcTMnY5qj1wrAeQpi3iVEDXAkiNs9NofW7vr43PLrUKT7x53qYf6A26jAXJ6KDozW98iNXcBN",
  "key21": "558sGMpg3oqqkub1XZfMJeKFwGJmEienHcJVPDqWYtkS7FPHn4U9jeCkTaG5Yvib1QE1dY8AKRLDab7NVAfohje7",
  "key22": "DtiJhiJQvSiD6tk87GvsmDVDsP1JMw5AvQGuqZyH7bWFaGDJtBbAWW8635a72aBPc6ZSWZWzSs67P9hdi4k5ahB",
  "key23": "2ZYWWsZE9W2WhicAjjV1sJvrNhd1Fqi9QBDFMVys8yLTWsfMH11Nzy9nCvfMVVUHZcg9Tfhx9bc5uLxiSktLvkk7",
  "key24": "3BAqoo2d6cPuxDY82Ewq7LMCbpqcmVxJiBsEno1i6Cw19FrrUa5E1VhzRSYMnqnoMgudU2AihoTiGDn9zviFi5AW",
  "key25": "42RwHWzDQA4uooywbnwK14nuNcFQ7Zu3TbgD8UHp2Vy5UHhsP96kvYvvvW93LNJt54KSVSV8gMMRPZzUy5G7emAv",
  "key26": "33YxgjsjHt2RiMzuS2bPGTYE3nTav9QppAWTxvF1tMXzY4m6brkrqH3gqtGfaMDiMwkwNpKJYgPrGfc5QHkvf3zR",
  "key27": "2AGynXG9YAwdA4PFc7yuRcAxLjTxUtDMHkJCxAPqLf3eRwWr2mBnhkz42LnKuQfxownA6wZ4xYeWrCKdnSaGXSbK",
  "key28": "2yQfd4Vo2AEULwsA23umpZgPnBXAkJbbyJQ3et9MNApb1cEYEWfugdhuLP5vUy2jmMwnypQZHb4PUMkVcW3ghGUm",
  "key29": "JD2S2hY3FawF2Uv6KUKVMJcQNsCvbuVJAEpHFjAyp83YzpxCxAu7d3EA6Epw4QTfJFCEqjxZjNCV6EKhqfHX2Q9",
  "key30": "MSvtLzKUjdDV4rzR2hQVJvWdh1cSSH8FaeZTQFEcwCUf4dxmjnxogCUcp1AiGWgYzgLeiUz2vdskV3ho5VHwZey",
  "key31": "4b6sGXqnRBaL3KaSu1UAGZyhQTu8mueQebXWDNsxWipyLHDXasAHJNzWDywUet4P6iR3a8ZtnBrFa1xfRZ8sJMtS",
  "key32": "5kTTx9xaCh9JfySW3NHfXpFMouaaopinbyqYK8CNP1jhqxeJTaegJMfvFwTD35RS5i2UsLziEa9hHXDisZjNZLHh",
  "key33": "44HNsy58Yf8iK9oCpSmqQLn8sT1mvZXDWbkghC2ZB1ec5QsXQYeuDrRy7CAyrMHQKrVox7gyybPP2Gh88aQhiQs3",
  "key34": "54qf4D2jtJ8ufyAtEiDQNXH6n6oMEWtdqPzkbTqcE6YPe6GZ15kxgHpEnooJ1rVovAZL9dByZA54xVUVD4J7Bvo8",
  "key35": "2eGYrvwGaZ7RFt3g2urAtaNGK2NbadZTSgvqjHsUmBeUqE2pcDAQn9LFs2rBWFShGMabpsFJL4R3sNeYu8mkNxTN",
  "key36": "4yF8YA9dQ2S6oV9GUiont6bofjf9eBtUSeQ9BvqJRjbSwA3RUu74gqFrw5dr8tQA9jTXaqZKs2HLkmieHMYpdTwh"
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
