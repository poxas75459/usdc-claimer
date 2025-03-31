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
    "4T8hJgG48w9jLCwtGquwSogSY7xcmGoM3cdjMrrSAx3HcHRfT4aYzJguHecFfEwgi2PzcMz9AdwkeiiowhuVSV1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VNGpqmfUJggeSaswSWpHH4FMZyuywd81octJWdXs5RMGXkYU4EScL7UvFXVw788XCRP5DjAdorsKFkGTi9T4b1",
  "key1": "4DL9L8YY8kXjPQHDCnm19BXWcQmPMRo3X7fZda7hXqwG1tUX3vWEPqggx7dkSvwFk8UEUXp177EBja21AHNYgE8o",
  "key2": "3268Mqny8KsVz9YiWcqPei4bBXxcyQ3P3Kf56fJzPpyB1VuVrbHnxtXX4Nj7tmQ1EBmDC6i9Zs4WhHjZxZhCH88S",
  "key3": "3jnYcQcMWqBkdne1pCCvFaRmsQGHEwtG4q252GutvyDSViCbdpJEw6XrCZgqJUDQ7i4KHDPZLtcVLYELTXT5Nf6z",
  "key4": "9sR32y5BXAemM1VcJ6T6TTNaMBeQU6tgqmZt2ngQdmgRi5VczRkQJTdVTsu3bzk92kdNtQaQRW8mCM3isNJTwr6",
  "key5": "9qaegMrJW2iFFqve1aAFry9sLCbAcCUnBmFiCFwCtwQi8zQEAmV3jGcMv7yS7h2mS9YeaZxu1pbs1i81wtkuqui",
  "key6": "4hJNX7KofnLaSpEVSWbjXeFP8XUiRyF7mPLn4DaN6jc3gQ2xQmXSDryjWK3kpCLrz2g5JGu6VKpFGPt7sHWtymTS",
  "key7": "zzgjQcbxTr9jDbPhQm6NoLkVY84y7SVFAz5PpiGwgn43QFgBqS623kRgcsKQPfbmCMLA6rzB8hFamxhr4N33zxH",
  "key8": "4J8ckGoN7f3h8ywRZRi3YLdkUXkVns9yHHnvRd9cQot3BWwWeyrmYWLUXkrpGWehZcreM91NGaJckTEsVs7Xa1yz",
  "key9": "4FyNEScENuPtcYmG1NQsADzWaZDBm7nzGHuPoP6J1SHWQj1dcFmF39S22GXEeW8Vq69uicHBsecC1hHBsRjzGfMy",
  "key10": "R1NRL77UhCh31cE2ruRiJCuRchsnh2hKqpYoEbahumYzF9WY2gz1EKcHwMSaHykhnwgM7BQjsxHQZxWt5pQCAKr",
  "key11": "7BMEpNoVvrkUpp5TzbeXbjgkF2TM47R825nC9x6TxXbmdx8xaWD5CuHRctu2HQTRzpDmq2Y8xJNK9sChREyZi1N",
  "key12": "4xrUSA1YzypdoNxH2xXavZGHnRWfR49F9W7tDQ9C4AhJPFSJxnCeKzAq6Poe7e9dwUehG7aKmNvhZxFxgYGisjyB",
  "key13": "2Xeon6VwWv6PKW3269ZJetBo3PRGdNGbZoZgaoscybe4fC1MGD1QEbxR4Q8ZefKDGCK71ixe7UkuSBxaRMFUU4BH",
  "key14": "4YW7nJeWuD4dz8rKr2mvZmGLMJLADm2Pk1ZysCn4HiPvwE6nV9LsMaNu2abr2wxgXZg5Gm4HigGp235EgouBcHwK",
  "key15": "57oCsHBcy9roEhMuykw1krkuBfzpwAQYZtpayhahSc2Rj2ntmUAeciaFDjroHXcDS9W7pkrLseSgheqZ9qok4m85",
  "key16": "4rJRdZr3s1y9rGXeMWkrN7fP52tmxdzpmjXLHi5bYfrrmFjEPQncSgNtrJ3ZhnJCSEnYnSmtEfTf15DKEXNEtRt7",
  "key17": "skcSyHqfFoDyRciQq4yMyMHSiJyxZEefTWYkqkdpaart73AsjoMvAmxphsTiXZEp6Lz8S44Dowojqnq9yqJTct3",
  "key18": "BkbBCuHGD96dhtMGqsgZuF9DYxaA3zi2whtu2ZHqHjv4N9d1RjXyhujbVyZWqvUSZhU353QpvJ8BnyZtF62u4fp",
  "key19": "4gnx6UGDwFH7dtAQdPvyU2eX3jLR7UEH7KxfxVqhVYFhgrLvzS59imK4RTmyddYiKxNcjNJorg5NfHX7CjxofydV",
  "key20": "62GVJHToUjqbmovu3JcUFfvMtkqt4AdfwusyE6uxvG3fbQaNdvnsEXJsytNhX5RDyoQR81eJSX9718Dkchysji4z",
  "key21": "3wxz8Vm2Hd2xqAKk59vVJpuJxPdgu69cgki7oYfL4mQu8cm9yXGkUxyMHEU3jTt9LSdbzpaEstpKiDn1HkKCZ1vZ",
  "key22": "3qBAoxR3CisRfsUjHX6hVAf1wZzJ4MgewC9kWrVeGpd2asaCb9QSBd792waEqVtA9nEd32cYQFMzJScutr3g7dg6",
  "key23": "nszw8ouiTEUYmgWGEcaZH2Mu4Lh8PCLpMu4uYruUovVrC1PUueRJg6TvedHjWjGYZAfiBKnyZbxDXPi5hGfcdfx",
  "key24": "3Quczuj4vehameL2PcKVHbiscymMDsHjgtfYyr8hmwv7Rs1uiaYPFVU9VRBhPZ8iLb81gYtzuTD23p9RTy1ucZaN",
  "key25": "PhdgBSwFnkoY13hbqDCpjxA98tVpAhXM1M9b7uUokqGkPSo9SGVKjYD2zMZJqbQxhVyuDNrHZyAvVoRm133CKPJ",
  "key26": "s9xyHmVauxcoFZrZxgzwWDyE4H2sgojTv7VpbQgS9bbFCGQkGMARb818oK6UkjhWuRoi7bNAcYo8Uu5oJDqnopK",
  "key27": "4Cr2TAFgeuWXXaf6syfhM2bCejUYywzJCjzmLvcjyhPYWVe95XEzx4Dg3HLwozTfV7R56ZDc5Kos1qvZ6ws1J7oj",
  "key28": "4omJGVhVJibjqCo6z89xRQ7VHJwK2dcCjNepoywUT88ghQUfHAazr3DR5khBF9StfUcxiJpJkovtrzudv1SEKT3Y",
  "key29": "vscaAZdxqLFMMf73Sw8xyMPRV4YybW9EwTWxmmkBgigiQoaMViN8KxW5LmpkbCS6WMvLvxpeeNKiPCyJtDpjwhx",
  "key30": "GafWyeh3GD2eEU1nhMCmgm4KboG77sLgHLHQCcFvysBt1TCBhLf4EQZvd8VVWQjoex6y3De9N64bQbfKSSMZMXL",
  "key31": "3CLYdyzWiiWaiZuoyP2wNSdRNhHM2ueZHzkU5o2FR974ChbW2ABWbGvhx2EWt1fkKYtCyXgPCDuWpqcbUgbW394b",
  "key32": "oLLPJfu4dvxMSV2kZKV3fvxKBmJKotrLuritbaXFaiS6SQJnydnvKQUWc6Req5ZG38oCZnz6B7fzAn9Hzhn1mQV",
  "key33": "2d92jYcQXMYURcMkGRrJmg9YYq2kZ1dUqSVQQpumcGe9S8SZ7PEEDGeGh4Qif7LGCoQPBhawg4bfUjdHs4itwMRu",
  "key34": "5WadcR9CTxa7YRKoUuq4L95C9C17kC26mAeMbExwdWzTsBuRC7czHdB4QHczSfRPHTQbAqePS8dV64JJ5tVPv4Eg",
  "key35": "5JLQioXQhLfLBk2bMUP2t9XoTJUcALDwYWvXpdaLjC2JTAeGXKSFtNacSjpdf7VaAYstprujzxBW5V7fgBxwb4ns",
  "key36": "2CLJYyKU5VKHfmd2bVeyworFVRuSZLKQLjt86QJuDBVEFRwCVJebiyY9MHxUS5KGhwVaQHRWBwPScUfYGBA62GA2",
  "key37": "5S6UcJZcjaPN2RT6qsF23uGEZ7poTHiBhdyzRZuGB1sbUDMgKKdf55v6J6Zi81cqpFLFzvDEwtPbDy8pLijce3U4",
  "key38": "5MgyxQ2PU7MipacoVbKYKDrQiQXLSGr3rsPrfJRGTc8Hy7sJbRn18MFydtJ4s3WhFLaTyxDfDePjXUJnQbn94PyU",
  "key39": "UkcipV7GbKRhncFS7Wo2WENrt1JGWo3NSDV1thMw8Uw5Jqn2qTvtUvnBysD2RwNxnM5R2pT1ZCBrqXSKwLxcU6e",
  "key40": "3aBxMFJrMe6otfHd4d56kL3apuwoqmTf95ZNXGfJN1eh1VgbCt9BKmqNcqySM9RNW9hWFLmbNbBWPZLX61bEt9mE",
  "key41": "kdFU2CyHRzwB2zFm6fxDJYmoA8M5YqSWfHrpP7F8mGNBk2ZqsnJbsGE5FBfBjtMQQujmQNgijhRacUGjbNeWCzV"
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
