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
    "63f6S6fKZj4WQqyhuDqNxaPHyoMDnFg3iBM7XpFsMPXohze9jZPhtysChtFkZgqzBfKMzEcjDrvmQvEKse5e5CRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wjHxmJVqYfJMG4XooCuxhNXWerK2Uy6UMa78QTr2YDh6qUHZS3E98Xzb6p1TE74ksUXCn98E7i3YSxahzLESmCC",
  "key1": "3bQ2jQUNBfT1RUv7ijfRFh5mmBrLewg4UvcypoZGNLDC29a29JX8MER1eWZtCgBjRLmHTQEvTBhmkYyds98bRFFH",
  "key2": "2qzorChkaWFAmWfSm7UU8qfBwptNzG64Zr2KiXv8drn5c6R523Zwi4EmtP2QXpfRhoW6fc2mvFQsH9pTZJantDBB",
  "key3": "4PevWec9JKUGkAXRXEyeSHeK4ozFh6E4GKYm8TwxFepKGt7GuxnrzEuMfsfEEmQAChSc4sNGUheKuWUuQFmP1v1P",
  "key4": "4nG7uVYMoyQKomRLa72pGZJfF4wvjdRCQpohHwzzNQ2DoaE5nEAFHPG8syu5dfT5vjw5btNbD88YUjMCChLnZm6A",
  "key5": "5cvLRG3oXJZEZYCNJDEfxLHHHhTiwJv79hYmdnZcQ6H9gjpNGHwWy5t3GMtBEzoUQb9ADogr85r6BhFz65a2Ngic",
  "key6": "yPnK5N1EQZsgX35jSGZcTMtYqbMeNtrtRKsH3aHRRKYE8sNsuviKUNPHbZ3Zh99m5ofiPvgU1sE3VQLoFpGTVVr",
  "key7": "3vndidQ7jmrbgeV1gPKaALancVREQpc9fC6rtttUskaFdkhK5TT3Ddg4UVkb9HrfapFSH8ykEV2y5kSnPtEy56Bx",
  "key8": "NGCTPKUz9Q28igBz6n67uLA6ADLbnGmzsYD5KqMxD9Ye5VmfavWhXj4USpznAn8xfvFvtkLo1GDP6Cr2PcLK2Qf",
  "key9": "38kUC8Wf1CsbaH54YXDsBC28SFqAhJFeoc1iN6epMqiTMNWnePavceBQ3YrwCjeKHq1BUEoQsPRR6qjmxAnAWa6k",
  "key10": "6o9r4JAyUryLTJc47okf5HAST26tFmMAyamokzGNbCwKNcaKLHQwmwuqZHUTTtbx4kRARGiHt6YRV1kBd2j6Xgm",
  "key11": "23JH2ymqnU4uPoWTr5jfSG47dTwVsW6YiEaC2bsTAxhityjzFBwY8fDWNRkhZx7vDFj7ai6Jegad2utq7YDeJbzc",
  "key12": "5GGY3TJaZupLmGXUtSvzZp3fpkscWWU4uJoFuQtZFcYLVXGVZdnnDy1RV5XZXAme6uKmok2sjTS7C88x1FfdegDC",
  "key13": "47CWz8JT4oqWdZ3VWtdhHToEYz3vP1PiXtTMaEecnC3cPSZhri9wQpnnCSuRggDPoMJMzkciU1mtaSj67Wdugb8u",
  "key14": "25TDzTUEFBYU9gDZM3pkoRazByUaVCEARt4T2bHvivz5oB3vpTsWq6jXcQFCccw8RSJtaDdUZrKYFrofcas393U5",
  "key15": "5ByaBxKG4xV2EzsXQQcEeTtT45GdRtoZM5jmdVfEYE2VWfPKtLsUvAberhH6ZjJYNyhaKCJm122mD3R7qmuf3gRz",
  "key16": "2ZPPGiRwKoipM5GQ9xJCVZnn8kgyuvNz2TpYPwiESZC4dCxqVKhzKBwqC71qgG5LjfhQmCdt4WSguRHzeUeTSGh9",
  "key17": "5etNMdEYeDpNkg8PfHzFQVnKQC7pw4LUoQhEeNWKCttkB7Y8nh1ESMXm8R5cdosBnih6h9TXCfRNwwiwP3bUEdaZ",
  "key18": "4rFMA6D2rLrLkCEShGuWgKRcDqnn61X9M7XvQmwWEiJnqW7drGxehiAXwcQerRED5DPGM6513ZWW7s5Vr41zEJtz",
  "key19": "4MmycUpmH2QazoUbyHz7Bna3WxFQTB9ZPicsestY3QsZ1PKErZNH4rvxH73PtXTVDKQppUrRjxJmNHLdKBHYFscb",
  "key20": "4B2xTHQHPoWkYm3xnx881Bg7j9CkhCV5P7ijVcUnWL8XJjHrraAqV69Ksf5D3x6tgVJ1YhQfBGZEk21fcmKWc8t1",
  "key21": "29HiX7bAbBgaHoKixvtmVRb9yZvEEQ8A7bhxXCxziZTvtLDJvdzf5pyKzqLkEUWfiiCdHNfxjWWmzEgDPerK3dYE",
  "key22": "5hfYkUcSyKdCpfSVNVmQRQGHCRkQB6nYCotQDq1SkcoTxeP9tR4g14EttE3TuXtMsvUD8oFQDTwU1KyV2nGc6bCA",
  "key23": "8vbfGhtnXMdzADSv2B1WtDo3BFPoJCskYW5GLTgKdpaia2cM7vjnhYyzXQNnjyRcibpexNPL8dV41JoVZg6wKAB",
  "key24": "5QCX23ErScgSxWXws8AYJeTWCaMWKMpaM8CjaXWqZsExhQw6LkxW6mn9U7TDSP3czWgAf28HNmpTCT4iNaUpAxUF",
  "key25": "hk6QuKcZU8PEbQVbVvJ3etorZd6AqEEJgBJVpxSWAevNR88hTrJWDiLL4biPAuyJKtqfs8umiwFJJ8cLjAFnaK2",
  "key26": "37dKjhxNUBCw8Smt8rRcnwew6RBr9ZeBbc9CMi6jPejQ2YkiMF1GsFqS3n27nCoTiRzvKL7b7i7mpzDwX9KFgPDe",
  "key27": "2Ra3Q1veB6RKjd32PHRfS6UdvhXtRLjSrNb3MvnSFSLVCsnaSbUhenmeLRo3wTfBTt658G41BJVsJTwqssLfVboy",
  "key28": "4w75yvoTv6XR5ERtw72oniJjPzg4gnxY9ECLVEyCCgfoAZc3pnZ3gxh1i3vAgX56aqgkR1aR82PM6BuPXZUaB61y",
  "key29": "xgm9J8A2d4ErmbbAS42jvdwqxSn89Tibv84XzahLu3vLu5skt7mNMbHxqHWS49xJJeRXDQkm9Ek3ZL2VvYvA8WJ",
  "key30": "anRkAsVD6bWvMDJBGfkjJkmAkrY9wz3k8yjaBdkhAFmxX5RdNQzrTKpT2PL4Y5AkHdTnfWDpJ5xuW9sygtaZPEA",
  "key31": "3uvzGSgCK3LAQUYScqJ3mF9W7P2iqkQnjmykDCn7zD67v4LhGZCj3PpQQwGqcKKnHucDWrbZcRpcHyJSgxtSv3uV",
  "key32": "3C3gGrXocBDLWtPQ4F723jUvhfUxLG6QB6BKDSSoM4pgFaR4DwuhggopZn6EZ7ULp4N5kkdhFY3wAqJaszsUvk9d",
  "key33": "5hTzACpKKXhwwfRdXfCZ7s6nocXH9arcPNno4tNn6RC6TsANKTtKhH77gGKdiCKVA1PgPvzPeMihYVa5jCPoy49z",
  "key34": "4TUZivy6f6gkv5F68S2qrW2diuBPJ5X6LC7mJerKrSsZtoHJaeMdEUKLsWWkBnXFbYBmJX4eHS1dpE4HXFEeQU8F",
  "key35": "4hdJGaHykstM45THTSKiRLwTA6btsQbGHeUNPg5sP38jGxbD3YGApDK5ZEPgeuESCLCdekqqwRXL2avATWbvSWy3",
  "key36": "5wpya4AeZUVQbUesxN4i9rRq2amZszNAasWM7krpo8p3chSZoiTkqmNcaGro5i26AXnuhMqW4QmjdXZgahJ3YuZX",
  "key37": "5fDX3DSfNjuKLJq6RhJwoek7X3zJJ3vAeUEuZiN6CL1S1CXjRUEY8sdQdPnerBqDgJQd7BrdtW1ouzVW9NtCHZUT",
  "key38": "3YJnLkmwYYetroThDZYXjexhG99fwxA4RkpvEnXmFjM9ytgitQXgyj4HPatGsqpEfQdV5YCZifwzu77pwHDVoYq",
  "key39": "4a1V8T2Ka1mEcLAavGQ7VitV3tpsoyqrbJXuSN9tzHhTFknYmtr2DUvxjwvMQ1ab8ofV7dYdqyDn27eVH2tiSEao",
  "key40": "P5Y3Myi9xCcTZmLA8BHrm15W8DpUeR1jFWxR5AxvMUJkzHChTumeBVVUmfmtJpdKqy7ycTiouaGcHp32LpJXrTo"
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
