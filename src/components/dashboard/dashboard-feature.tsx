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
    "3rr5rAZKcQRULKFKiZWYqVEMCS7sr3krjQ8i2JbUHsFErAqZsustY5txeFzfgw5LK41ei96EpE99h6HBr5B3r4cg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NqZBEZFGtyGuwrQoLrZxu3SzniDQS4DUd4ZhpZneXsQGuVtKA7XxXtZ1E5Xb17ZHebftZdSfP3q6NDYErGUbCTt",
  "key1": "M9JrmgH1tpaVJAYF3QK58i5h97tZvez5kESPPvN4dLGxmVVA7oeSLnKuh4DzqTgdcTZ75D39RuAzgtNdd5ua6Ae",
  "key2": "GVTPNomssVSnHSZT9SGGEe7YheCU6vvLCgPnusYLFsqVHLfJu5x35BSSXssPMFwS8B7rts3GjpsjKVFgC3iAHk3",
  "key3": "2GKAS1TVifYbTMvtrVS6xqg8qY1Eu3Jc9ZpudJyEktFmfu7ZCAJbQj2o1ykpzuA6HjQgbEYEp7Hz1AJHLAGJP1Mr",
  "key4": "2VBaFE3EHtpLkm116Wj8qVubcck6DxB224ruJM114hpFbSXFEAXAKmsnX8u39bkjBJvQYL6LDqb8a8yFfda7ep9y",
  "key5": "56k3BPuTPy3kqSFyFDkVGvipCxoVSAkQ7qMpZWi5eQWP6PNG1KUjqoaB7r42vy94s8iWnYLSK6CW3ztFQGFfpgzB",
  "key6": "4jCET53t6nuuyB2KCdLYCKiGcsczj26pt2fXG1JzJ88Qyb69zi2c9KLwERD4YgM5ytrdp9tgTQEWvUoDD4HR1j3s",
  "key7": "5s2YuNxcJfDjDBgonAXf22mwrEQxiAatG9gNne92WYggiaRrnAGfgYNGWcU56xaK7ZdxM7P6FoRiwAmAqJsS6ufc",
  "key8": "aqKAhuAXkpJpuTAAfeZs5yibKxMM53JbzF2yAckzJoBNvT22poLsrT4SmwXY5A83CWLwHnSVuGqsKKcNyXnPcza",
  "key9": "4BQKpWamfg2taSz6LF1QHqmT8PmGYTNzhWvmCchhFArQ3U319YNZZkz6aBbDx4uHwjZ98AtMsHCZF61vGPuc3z4F",
  "key10": "2KYKqwetVUEe3G1442MiCMgNEE5LdFrRAWVxYdafGDhRVhNViQNzSE8CMLDEpZDDiwF2PBCE3tMxxKxRyutqKNpx",
  "key11": "4ZsohtMB5B6fKUSfcs7CGkAfvXmD8qGAkJB9de2HAgmeLSVdRY3VghgrZGXccddDSGBFsne6gUjryEjL6GgK2MD3",
  "key12": "5XXhezyriVejrUxGaPcKTFV8M2MbUbu1cYmmqS1C8pvUZDccUesdp2jKagnYmzNqgW4yabDimHDVm25nJw63sdP9",
  "key13": "31SzC3eHFxzrvaiCMTzZ2GjVPmmanu5eCL64XiwxijSDZUrZEAoJiBm2nuzJdxrmPyacAnzWGQ4heh5temLidUUt",
  "key14": "5knNKLjDBYCqp3BG3Udk1BdBRFS9GMPnjVZbSfq4TXKUS4Be9apDeqnkcB6kYPX24LGtK29vNdt7ygS6TFE4xKfj",
  "key15": "563sf32Z4pL3PFcfEV4j2KRDaRzH8SYLbW6v6W95xVvMZChirYcuMvMoNDVFfFUuci4KocUQEtrgxKuGBvzSqxNQ",
  "key16": "3hTBzk9mhr8xwpwUDKQQSyR44itnvCPexJV7663UadJbL7zbQkyQXV2zwenTW7D86Up83dEkKEjWakDfr4GWtYa8",
  "key17": "67Jyhb8VZTqxyvgvTVcWm7mkATvKZKuvB83HjJCSrjujbaRi5jYmYwFn9bd8D1gLnUbeewsxhA22VxVNigxZkEFX",
  "key18": "H4BqaNzHUJzwm368B8U5M4coLNyMknVygo698D8HD4m94ZnBuBEh8MeSiravuLdGxKMvGQh7dWAMer5enBDqErN",
  "key19": "3aU9YjfGBwwbs3BjZed5AKFG5twd7nEaQc7YZGFYGu5tktX6Cj9d3eyXipESUKyQTwrh68WLFfSkNsnh1MzGhCao",
  "key20": "63Pv4MFEnaqJ2mcQAMHmS92d4jYZsK2YG9tYFq1HxNfVinfiJDb7ntxMu22HTmrm5sYngtBUKYeYwWB91YGMh4SS",
  "key21": "5KEYaZH4SNRkXmP9pnQmFnowjqR8Yxzgo3uuarYjLYW9C7PjFhjLsuF55WV6yqXo921NwirUyzrLUPDZi1fPJ6fk",
  "key22": "39L8hd8phma4G8Xx258iTgUjQgygp61u2Lg4RfQ9LpRYpLqQ84gXiTxazPzxAJsJ4jR2dW4TfjdpB8UbwbKiQEHR",
  "key23": "5VPEpE44xuc4nfQFHHvQtpHuhBt1krP6y6pKq6tVacedfU29ewu94oyEBpcYtGHXSPbX6VhgH7dtpaiR4BhjYgp5",
  "key24": "544sm16MLdAUWfErPUUDwu8ZMTrqokcBDktk72oXTL5MZ9brvUT1GC5Vw7xoY5tS8VivPG9WMVh1q75t9gdMGonU",
  "key25": "5GrqKMJRhbNBKH8WKQhMVfMAKi2uXGuhf6DTKm7tFpEVuRtF63qCGrQvjpsafTYU6AcBJ6ryPMLGN5QW5f4aeAWQ",
  "key26": "V36airC5Tgv87M68ggGDeguiUuNQZmxtP899XzoVpb9V3aEMWHfaiDemVYquwdmmWBd9jaXe2gVk9jrvxazgtFf",
  "key27": "sDGDh5BdJYM5RaZyhcGJ579SuKmcsM2U16u5jHz7DahAGwJohGWjw3bcNyzC4Rr6RK7C2TyARXkM2rYwqEUJXTm",
  "key28": "3V69fzQz7YGrr7FVtgLz7pbMuWrEuvCEDxFCdRYaSA3t4Q6Vii1qgL57jFjNQSYo1PvCSjsainVRBdVgD5pwSxLV"
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
