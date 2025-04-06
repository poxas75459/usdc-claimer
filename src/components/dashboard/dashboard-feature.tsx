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
    "5CXYszYpy8Ys9Udtcm7Q6syF7x6QEGZnVnxhbsnZgcc4BZp4z1mPHkizwLGHP6PJ7S1sA7S8f3G9MUN9ZKWGBCjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izK81DT1RCYi4RcqbSATRBt1tZJPXJKRqWBm2wjwkK2x9EmXB82HFgBcSz4BCgD6Twb4k3VAoi5xxTjtUQEsPbY",
  "key1": "2AxY1pKg8KyuxLehmHPiuNJRK24mzAbUuf9syURYUG2HkaViS4hey5BA3WjvU1DpqwKsmEdzP2Wd1EMvbeT1rLcZ",
  "key2": "5geJRy8giov83EB16oYZUjRuErGtmCoKQgoeR3mL8eLyxTJC9CLddsvUZyxzohGcez6LbdhwcVVmbv7a7zepbnhw",
  "key3": "3tDGdwsMQdLFkNoedrmmowMW6wnGWzvUtSW3VyiZr5v58RG6sX6VStqoTXEyTFXhamqkp9Rf9HUCDvUjwvJwxf15",
  "key4": "4L4jKYrR7jLWspdss8kF3NPLrc5dsAdEVbEX6f7PtFt38sAo6E5Z4aQhAFCH9SG9koY1kwepdU3uSdzL29QBNaq3",
  "key5": "3MVcLu3aqW5Gzm5GPJRS7gA5VTuo152Tj6A7JCnLmjfsGGm3AHKgJ1kHVnts2geMhRHuuovMEjuQZnKevPazKxPq",
  "key6": "5C1pWAW9q7viBTnqSosmfRA44eXgs51iYqMFjF4PoTLPa2HGLKq2RYqkWEmwTRWsgw76EvphGcNpB3WMQLxMLkoL",
  "key7": "5FbwkVmB1uWewimwy5UPQDtpa7r7bEUJg6YeSGWRqfQLZgcUKjUwV4uM4NMGSandXHQm9V7AbwLAYmJLzo8WgfaE",
  "key8": "3sRa1q4Hiiz2zc3DpRvV2igoHHjJCAsGi7rvJXbjQYZ9hBFdZv76KWDfHQ7btFpukq7UCcqCvQheSysB1Y6yegPN",
  "key9": "5nZ1jCkqtg8G8zBaP69n5w94GnjCeuLFYf1wTFH5r4JvTUAyxeuALNEto8oytdgMhyHyoQgBg5zU45ER5UEytoSA",
  "key10": "2qr4rZ1zr3VGbkWzQ7ocP6dvgvj6ytHpmUBStqTFqs82wwXs9dqfNPAbmVF2oRicKgsdfxZtV5jKkfMBQS5Bene8",
  "key11": "37fD3qSRVkFWvdfsWnHE17KbgKtAikM1yNamj2kZ463x2F7DKSzshLHZGwcAoUaZBGXZZRCcfCHpQDsXx6WxZRBC",
  "key12": "46TddMiss89fs6uFi5StSdzpCECCdYeToGYDWS1ZzLubtV7ejjxwJrR4uGx1CFgRws29ZB7gxjMiLU9Vp1EZnJZg",
  "key13": "z4Wih48AH47sFZf76PuouaPv4CR8Juwi3UnkXyGtq6emEVmjX6FtYqYzSqzXWSE1xf1Uc9yrTK3NLdnW7ZaxHJ3",
  "key14": "35obKwMGz7ykRxM9GKeY9viANyPT5DGDzc17rxWZuecYUh3Da2RPBx1rrQeL22nejCqk1dTcwrrcqw325aSiRrdH",
  "key15": "2oXPtaK3vnNkpe9Av2NAZyogEYt8784t9qgz3gM8AaQf6KpDd6Y9ee4JMWs1tDXe6BewfRrfCRQXK6jSjqpHVp59",
  "key16": "4ZrLN7jDNF9WTkRvpnG2bB94esNCSzQQRqyMuFfyZbhoAXYPK95BdAxZ45rwipyShvB8MFnxqTWEBo5GrT3ztytv",
  "key17": "4FgEZPMmr8xZfzqJwjcrt6kDVi75TuqSCxcGnH5qBMgVLZqc9WYJ6ru4Z16Hk7hWQdXAv3zKyqWpNgwbyLpSWCP4",
  "key18": "5KifTqc9SfopQhkRXtkFzt6tbVPcSn77mkVc1oDPKz5qtZvQPGXCauidHBSJmBwWQrB4B4fyEjkpEUCNK6RFEsEn",
  "key19": "3mRSLvYPoZuMxnLSjVQUfg5qbCneCSmKm8RjDTMvQmFQJYvpBsp4LZJ51NsmPbXbtB9XPPfTmwGHfz275VxoKDPu",
  "key20": "3EHxv6p5EBCZ7kaxHdLpBwwSRfbJBvkiqYp86PeDtSp3ZfQ38pvMNKeJdzkTUsosSwezBtZciMhQYTGSKvv2ZodX",
  "key21": "3p1DrdVSaAtknU3YLznczB2MRdAQsX5DwDfwAjat9tFMjdPBKR7mgQwpRUfdhfQCjCJKS6FtjnuDUoHtkrEfQcwp",
  "key22": "5WHKw8QmchQ7ucMiSYv82wCcvYtCY9xDKR3MVPSyRh6KVsudXChxFNKJ6KjKFRpRJ1V4cKukmBw6rjUhHw4JWHvb",
  "key23": "2nE6QvfZNPG6NM3t2hUMfTiS3V4349ot9gexwqCeT1LdN5e6Xyw34TJ2xxD3ZD7DsSCE8teRejNkzGLh66TaQjaN",
  "key24": "5M2rz3qHAg4iNEFJY4BcFRhescVtL5WLDccYb92VvtQa3Bibxqcy6PRcQigFUzu2Em9VqCcY3ER3wqxknurH38vW",
  "key25": "3ViNk3sKvNNEkv3HDpbS1XSKTk6RGT29Wzbn69jnciV5oae8LQWEYgDM4VMW42Cpj7dgYqrifearZzYvKBfjkjiA",
  "key26": "3XpPtto4xAoMJubJTVS3QyWyCUZKjoZJcxWWEH2pVrad4xYQgzEQqHYvWcjPGufcKpSJDN4XVpQcATkhbPVVoozQ",
  "key27": "3z4UFEeCJuTTQEojYAwuYGKj3MQrBn65mhdXbLEwnfj8qw8f4NYDozr7A8Znb5nRS9bbxL3tcmJnuau1yQVVVLZf",
  "key28": "49vBVFFxA8bpf5WTVw6ckMUJRVXbeM1pswKj1iQYB4vGumiULFiRgu8U9T4B3XAqAtCNkLazGikFnphgg68HGyCL",
  "key29": "24KmVfPy56KSjoK5ngNvMf3Tgtd9FfMx29rvn4iaPddi8PnEeoEXUc9ocHeWmisnLzqkcpMFdwWGW795aTxzaPNY",
  "key30": "3CV7Dup6QZMDrJk2E1NrnEoHTcN7zUUf6XUffR9ViHzxWaZxNf5yNBcPBiwzxgsQEkLUWa56LJypuMCUX8goapct",
  "key31": "3VWmcmkVqU73yQXabz1JSpKyon7cJDDevwRw6aJMvChCdenZHNDR8oMWYnHhDgLDqm8eVUsefsj1p5EvZpxnqWZQ",
  "key32": "67UbYy2MMQyrg8jnEUXTWhXp8t3JeMSoLAQGNFjEXrGHYW6TQSTcLXua8mf8PqLkcMa7jsit1q8eGPgHkEbexAw5",
  "key33": "3VzhqysqkLAdMNLP9x823HNXr1jqQmxqArAhXqWZxnD8asRp8exX4HBvfDweeiK1CkQmYtAEM8gk15zuQWNrqFZd",
  "key34": "4TPBntPKChZdL56RWHxxAJhqwghQBUthJXgc5RRa5PueruadYhirgjNMw6s4ae4kVPuFbZiDDxL8bdvPvyNBJ4U4"
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
