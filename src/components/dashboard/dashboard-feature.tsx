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
    "47utEADcF2zJdvcarKGU9bn6KPYRwbNaUZmxkyf6xxU14PRmMErx964dUw9kJxijkm7babWFbLRahBcYMRhpKaeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pqc8n7oUAiPccBEDAXD73VWZwjXQKpyRbKCDzqJuDTbjYKsq77pFurNSGHzDRL1s3iHXySMkJRrjB2EN2uQmEAJ",
  "key1": "4Qg7ECFXAtQkrM1gp5chcbsDzYwFbdkLv5fj4SNTGL2WdpBjG5wvkygCgTfiHMzvA4fVtmo8M34vxH9fYsR3MeaS",
  "key2": "2zUqMuCpYo3kVJZpmV54ARM1dKQqbHittc4QfacCMkVUaz8wo7cthzxsPyVz4RwgCy9j1YGGVp8FVVZWCbW19XfN",
  "key3": "5kaPomgLt4sYeQVgd5bbJR7gXRpHoVqUQ1RduEngPBroq7p78qNjDvV1wSgpJUXP6qPvpnicHeVVYKPNJUrs8t1w",
  "key4": "33EgMnsZbbitHn2AzA4A2M6dJA753eEzh6K5DQzeotzqF3kFBdT2dq373SLQZJpZ8k6D5CCADb4i4sbqEnxknWEx",
  "key5": "5WBn1vymB3PBVutyux8r8cEXLAigp3k1UwztVnucCgFrhHHjWHaAbWUwmBhhqh3bkdpNhc5tUgSoGEdRceF7XkMC",
  "key6": "5WUxVNbpiKrsZ5puyCg8o1Be3WTJjqp5qk6Mhqhtd8j4RVMwt9HMbj1apwpM3MEQTiBcCVfEF57uircEeSs2wo5z",
  "key7": "3QnbEFxPQyEEfUZY4U4aSEkJ65Dxec2Lq8JTMiYW7juyUkome6bjkFH9KUHdUGzGZHHh1tCZLCpNLvYCiGWfRtJX",
  "key8": "3ephSpnDvZgFr7CiMPPvFJPAUtsQY2grHWZPFUaERFDf6ujafkbVNxsdU66G5fCZ94KwQdpFoAccmZQ4ca65aTqb",
  "key9": "ypL9zAcCDi1HFnnqiPDsgLA4xuWsDFi6F6Ezp6HDWwrqQ8SuwttKrWyXUTJLic3X2hWv17UFLCifB4sJZaPe8Qd",
  "key10": "4ejt3wFrSw1HTsQs6CymGyZ9wwpa4px7K4zRKiMZiTLvRTAfDtELGBoztLktmBJxDYM8vtRzZU7iDMVzr2HbXRmq",
  "key11": "2WCXMj6amPJvquFfyLMokoPpqyamcSmzEgqEng4WrTXQhMgf99XhDojbRa1Co7rnpRJ36Xkpyg7uao1xHaVnzrjU",
  "key12": "jzVynbgtei1ynt9ksbCgPWSMnanEArMHcGs86LBUYUfihXdA2cd2bK6xYL8YkVtNZMiNmjHncSsSs1Bom32Dpg8",
  "key13": "3Yg6FCWEmtC9C5VbupMQKokSRq6tSxUjV7itya3VZy5fAdi9vFXcFh9sPC19oLnYn3rU84M4ioYHGRc1FQTTywZF",
  "key14": "4VNZW9a6owmxVc9oNiwx11X1yXwWJfQ4f6ZTxNiGrX3vTv8yc8eRr2AcdwX61cGE12xRd9eMCDQSj7pKLyLFPqC1",
  "key15": "2xF4R4qDTqbqBazgTp1KomPWL8zVvcXSmrzqRRNY8qG3kVn18BSzZkikFxVriX6BxcKEUyWDAv7XQETapteoxG3y",
  "key16": "49vKpiwkzPmHwiq5XRkBHJopxVAmSvwnJenM9dJPpyKfn5owSWDb6VqyLTZ8y8HBEVUysSQAu2RCke7cLYepZ9ST",
  "key17": "4uxiV6iyDexMnPFmTBHXyB8aAWzYdFibh22ye1vSPpjaCkxkwrxUDCzTkkHBPENreaLhcxEtcVQevAzwJqifNHD3",
  "key18": "4sazgQvSpBMjKqob6qYcTn4pcL8WTnW17om2sSVh6wfPC3v8aJrG5YcJwjRNdRh8WEE8nYeperYpsjgLoz9fTd3Q",
  "key19": "53muCwTCc71p3ZGMUXKA6wfUMcsFmuSddd5v89qSz5rw1a8af9zGVzPYWj3gKbbrkKf8RjvpCwDUPgbR9wg4qwsm",
  "key20": "Wm6dPYpLAGmPUNhdjzxdc38kVgsf7rfbNVJfqEUThSG8Z11fX4REukd4E6tKPKK1GvCjbQNubq4bcRKruDdnbNL",
  "key21": "L48PqwiXm5o7sNbA9Yx65D7gLdj28Apdv8ZD3NpYMrYBp6tnBSmzVoNQ34zwgg5ptJ3iCG6SmYBf989jL6jgnNC",
  "key22": "2NfxvGa9wtcmNBSfyutGC6msWd2obbrtY9yDvsktWn8NQZJoi5JAgoYMBB1jkMnx4BGieE1yjddPz4LGyHZmu28b",
  "key23": "4fvSyT4U89ENWRCT2nH4Q1DE5x3y9tLJSGSatUHeQEiMNAW58sMcwm45fgsiL1LpFkswMKiVBCeoBXwNFBw9jKGz",
  "key24": "3m8LGGy1csKfYNhxHwYkSUn1pbJW1heSm7uNmsXNpEwV3XDLXLCj758wUcSiKnpxfQccQdbDQPcoYZRpjpPwTCQ9",
  "key25": "5qyrwMSi8RK5PYutJdsYLsWfZSY3m1ZTDLWmDQWhTx41B9CgPxL7GHhqheoadyMX8F83AizKtc9MDkk1itky59pt",
  "key26": "22AbEdXsoNdMRgp9v9sguoWKpgMJWGe7wirAhz44ou7dN6fkWTSgyJyu6sHWDdZttbGAM5URQQ3DnHGK9SY8GAQh",
  "key27": "2ECQZieG3VeTFfDUx7TXySmyq7adVUFFvohMEYLzsJ2GT85xPgpgxJvNayc5d1tdNd96MMLvuvxktMrKgKNRZdu2",
  "key28": "5AGnxbVQZ9NHDgpSwNzV8iVEojAZT9EbNWspHS5pfuU6b3uTZ412sjbrzbBRjd6J5pmP6ZUEehfTe5oMKFe1cHhP",
  "key29": "5pnxUYiCHZYKtnW8FBPNwbDhD149tce9yUqnhuEsrKCTc8hHPBok9Q8pG6jdBzX9XvHp9kTKQpVCZnu5vnuXBT7G",
  "key30": "5uMbuW4HuiGzTaCH11eUvseAZTqkbSsFai2ozvkyF9FygFJC6w79y6Av8px6uWLsW7JxJ7MUiMg9EDdScZfQoPjz",
  "key31": "SGihxmq1fpFaMS7f6ssNEMEGgkNUDqwqLmK5erqKmYuMGUoRkjHtJX5sCwvTb9iSeVCvJfYYHeaVX49bcPaAUNi",
  "key32": "qXaHn2ZvdA2mzssvNiEE9R5ynh7M1ycTRttZgBrhkX2JYucat2E8s47M2DFVBUzmA4yp9kFVZNkshCGZaybJU6Y",
  "key33": "4gCr6LDi53yxT6fLcEMWdyiekFWMFEZELhXeEpPs3LwyWagj9HSSYgFVZFGsKxA4FjD3pC5VC442jQ44FXQnEbGd",
  "key34": "43vajcN7JEvDWbC7FWUVUQMiVfwSuXkcfqLYuSkt7y1RAppYDDP4Nf11bXre28s6Er6p4XfG8NtbVeKfFMNv1q2M",
  "key35": "pH7h329EMhFArDeAjfqCwcjsNtdNqBLykwoQbLsQE9Z23uUsKHDWkgjTnGvtwxDRTqrFqLjHcjxxJmKTpUhubQm"
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
